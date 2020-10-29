(ns quil.gui-specs
  (:require [speclj.core :refer :all]
            [quil.gui :refer :all]
            [quil.gui-core :refer :all]
            [quil.dimensions :as dim]
            [quil.mouse-clicks :refer :all]
            [ttt.core :as tcore :refer :all]
            [ttt.game-master :as master]
            [ttt.game-master :as gm]))

(def mock-move (atom 0))
(defmethod tcore/select-box :mock [_ game] @mock-move)

(def default-state {:status           :waiting
                    :message-key      :waiting
                    :console          :gui
                    :users            1
                    :board-size       3
                    :board-set?       false
                    :key-stroke       nil
                    :current-player   :player1
                    :player1          {:player-num 1 :piece "X" :type :human}
                    :player2          {:player-num 2 :piece "O" :type :mock}
                    :current-plyr-num 1
                    :board            [0 1 2 3 4 5 6 7 8]
                    :rows             [] :cols [] :diags []
                    :ai-turn          false
                    :boxes            nil
                    :level            :hard                 ;; TODO - GLM : multimethod off of level and eliminate depth
                    :depth            0
                    :turn             nil :played-boxes []
                    :game-over        false :play-again-pause 0 :winner nil
                    :table            "TEST"
                    :db               "test"})

(def console {:console :gui :table "TEST"})

(describe "GUI State Tests:"

  (it "checks for ai-turn"
    (should (ai-turn? {:status :playing :current-player :player1 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :human}}))
    (should-not (ai-turn? {:status :playing :current-player :player1 :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human}}))
    (should (ai-turn? {:status :playing :current-player :player2 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :computer}}))
    (should-not (ai-turn? {:status :playing :current-player :player2 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :human}}))
    )

  (it "constants"
    (let [result (update-state default-state)]
      (should= {:player-num 1 :piece "X" :type :human} (:player1 result))
      (should= {:player-num 2 :piece "O" :type :mock} (:player2 result))
      (should= :gui (:console result))
      (should= 1 (:users result))
      (should= 3 (:board-size result))
      ;(should-not (:board-set? result))
      (should-be-nil (:key-stroke result))
      (should= :hard (:level result))
      (should= 0 (:depth result))
      (should= "TEST" (:table result))
      (should= "test" (:db result))
      ))

  (context "game-over?"
    (it "not over"
      (let [not-over-game (update-state default-state)]
        (should-not (:game-over not-over-game))))

    (it "over"
      (let [winning-game (update-state (assoc default-state :board ["X" "X" "X" 3 4 5 6 7 8]))]
        (should (:game-over winning-game))))
    )

  (context "who's the winner?"
    (it "no winner"
      (let [cats-game (update-state (assoc default-state :board ["X" "O" "X" "X" "O" "O" "O" "X" "X"] :current-player :player2))]
        (should= 0 (:winner cats-game))))

    (it "X wins"
      (let [winning-game (update-state (assoc default-state :board ["X" "X" "X" 3 4 5 6 7 8] :current-player :player2))]
        (should= 1 (:winner winning-game))))

    (it "game not over"
      (let [not-over-game (update-state (assoc default-state :board ["X" "O" "X" 3 4 5 6 7 8] :current-player :player2))]
        (should-be-nil (:winner not-over-game)))))

  (it "makes empty board"
    (should= [0 1 2 3] (:empty-board (update-state (assoc default-state :board-size 2)))))

  (context "board"
    (it "stays constant during human turn"
      (let [empty (update-state default-state)]
        (should= [0 1 2 3 4 5 6 7 8] (:board empty))))

    (it "updates with ai turn"
      (reset! mock-move 4)
      (let [playing-state (assoc default-state :status :playing :board ["X" 1 2 3 4 5 6 7 8] :current-player :player2)
            updated-with-computer-turn (update-state playing-state)]
        (should= ["X" 1 2 3 "O" 5 6 7 8] (:board updated-with-computer-turn)))))

  (context "current player"
    (it "player 1 has not played"
      (should= :player1 (:current-player (update-state default-state))))

    (it "player2 makes move then swap to player1"
      (let [computer-played-box-4 (assoc default-state :board ["X" 1 2 3 "O" 5 6 7 8] :status :playing :current-player :player2)]
        (should= :player1 (:current-player (update-state computer-played-box-4)))))
    )



  ;(it "Checks Update State"
  ;  (should= :waiting (:status (update-state state-setup)))
  ;  (should-not (:game-over (update-state (assoc state-setup :board ["X" "X" "O" 3 4 5 6 7 8]))))
  ;  (should (:game-over (update-state (assoc state-setup :board ["X" "X" "X" 3 4 5 6 7 8]))))
  ;  (should= 1 (:winner (update-state (assoc state-setup :current-player :player2 :board ["X" "X" "X" 3 4 5 6 7 8]))))
  ;  (should= 4 (:box-count (update-state (assoc state-setup :board-set? true :board-size 2))))
  ;  )


  ;(for [[key state result]
  ;      [[:status state-setup :waiting]
  ;       [:game-over (assoc state-setup :board ["X" "X" "O" 3 4 5 6 7 8]) false]
  ;       [:game-over (assoc state-setup :board ["X" "X" "X" 3 4 5 6 7 8]) true]
  ;       [:winner (assoc state-setup :current-player :player2 :board ["X" "X" "X" 3 4 5 6 7 8]) 1]
  ;       [:box-count (assoc state-setup :board-set? true :board-size 2) 4]
  ;       [:empty-board (assoc state-setup :board-set? true :board-size 2) [0 1 2 3]]
  ;       [:board (assoc state-setup :status :playing :board ["X" 1 2 3 4 5 6 7 8] :current-player :player2 :player2 {:player-num 2 :piece "O" :type :computer}) ["X" 1 2 3 "O" 5 6 7 8]]
  ;       [:played-boxes (assoc state-setup :board ["X" "O" 2]) [0 1]]
  ;       [:current-player (assoc state-setup :status :playing :current-player :player1 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :human}) :player2]
  ;       [:play-again-pause (assoc state-setup :game-over true :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 81) 82]
  ;       [:play-again-pause (assoc state-setup :game-over true :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 100) 100]
  ;       [:play-again-pause (assoc state-setup :game-over false :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 81) 0]
  ;       [:status (assoc state-setup :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 100) :play-again]
  ;       [:status (assoc state-setup :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 99) :game-over]
  ;       [:status (assoc state-setup :board ["X" "X" 2 3 4 5 6 7 8] :play-again-pause 100) (:status state-setup)]
  ;       [:message-key state-setup :waiting]
  ;       [:message-key (assoc state-setup :status :game-over :winner 1 :current-player :player2 :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 0) :x-won]
  ;       ]]
  ;
  ;  (it (str "Checks that " key " of Game is " result)
  ;    (should= result (key (update-state state)))))
  ;    ;(should= 1 (:winner (update-state {:status :game-over :board ["X" "X" "X" 3 4 5 6 7 8] :current-player :player2 :player1 {:player-num 1} :player2 {:player-num 2}})))))

  )