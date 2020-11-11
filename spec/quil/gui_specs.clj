(ns quil.gui-specs
  (:require [quil.gui-core :as gcore]
            [quil.mouse-clicks :as click]
            [quil.mouse-location :as mouse]
            [speclj.core :refer :all]
            [ttt.core :as tcore]
            [ttt.game-master :as gm]
            [quil.gui :as sut]))

(def mock-move (atom 0))
(defmethod tcore/select-box :mock [_ game] @mock-move)

(def default-state (assoc tcore/game-model
                     :console :gui
                     :persistence {:db :mysql :table "TEST" :dbname "test"}
                     :users 1
                     :player1 {:player-num 1 :piece "X" :type :human}
                     :player2 {:player-num 2 :piece "O" :type :mock}))

(describe "GUI State Tests:"

  (with-stubs)

  (it "constants"
    (let [result (gm/update-state default-state)]
      (should= {:player-num 1 :piece "X" :type :human} (:player1 result))
      (should= {:player-num 2 :piece "O" :type :mock} (:player2 result))
      (should= :gui (:console result))
      (should= 1 (:users result))
      (should= 3 (:board-size result))
      ;(should-not (:board-set? result))
      (should-be-nil (:key-stroke result))
      (should= :hard (:level result))
      (should= "TEST" (:table (:persistence result)))
      (should= "test" (:dbname (:persistence result)))
      ))

  (context "game-over?"
    (it "not over"
      (let [not-over-game (gm/update-state default-state)]
        (should-not (:game-over not-over-game))))

    (it "over"
      (let [winning-game (gm/update-state (assoc default-state :board ["X" "X" "X" 3 4 5 6 7 8]))]
        (should (:game-over winning-game))))
    )

  (context "who's the winner?"
    (it "no winner"
      (let [cats-game (gm/update-state (assoc default-state :board ["X" "O" "X" "X" "O" "O" "O" "X" "X"] :current-player :player2))]
        (should= 0 (:winner cats-game))))

    (it "X wins"
      (let [winning-game (gm/update-state (assoc default-state :board ["X" "X" "X" 3 4 5 6 7 8] :current-player :player2))]
        (should= 1 (:winner winning-game))))

    (it "game not over"
      (let [not-over-game (gm/update-state (assoc default-state :board ["X" "O" "X" 3 4 5 6 7 8] :current-player :player2))]
        (should-be-nil (:winner not-over-game)))))

  (context "board"
    (it "stays constant during human turn"
      (let [empty (gm/update-state default-state)]
        (should= [0 1 2 3 4 5 6 7 8] (:board empty))))

    (it "updates with ai turn"
      (reset! mock-move 4)
      (let [playing-state (assoc default-state :console :mock :status :playing :board ["X" 1 2 3 4 5 6 7 8] :current-player :player2)
            updated-with-computer-turn (gm/update-state playing-state)]
        (should= ["X" 1 2 3 "O" 5 6 7 8] (:board updated-with-computer-turn)))))

  (context "swap current player when"
    (it "has made move"
      (let [computer-played-box-4 (assoc default-state :console :mock :board ["X" 1 2 3 "O" 5 6 7 8] :status :playing :current-player :player2)]
        (should= :player1 (:current-player (gm/update-state computer-played-box-4)))))

    (it "but not without move"
      (should= :player1 (:current-player (gm/update-state default-state))))

    )

  (context "start playing"

    (around [it] (with-redefs [gm/start-game! (stub :start-game!)] (it)))

    (it "when ready to play"
      (let [game (assoc default-state :status :ready-to-play)]
        (gm/update-state game)
        (should-have-invoked :start-game!)))

    (it "not when not ready to play"
      (gm/update-state default-state)
      (should-not-have-invoked :start-game!))

    )

  (context "waiting status"

    (it "loads game"
      (with-redefs [tcore/load-game (stub :load-game {:return nil})
                    mouse/in-button? (stub :in-button? {:return true})]
        (gcore/mouse-clicked (assoc default-state :status :waiting) {:x 0 :y 0})
        (should-have-invoked :load-game)))

    )
  )