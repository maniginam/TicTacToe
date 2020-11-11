(ns ttt.game-master-spec
  (:require [spec-helper :as helper]
            [speclj.core :refer :all]
            [ttt.game-master :as sut]
            [ttt.core :as tcore]))

(def default-state helper/test-game)
(def mock-move helper/mock-move)
(def console helper/console)

(describe "Game Master"

  (it "checks for ai-turn"
    (should (sut/ai-turn? {:status :playing :current-player :player1 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :human}}))
    (should-not (sut/ai-turn? {:status :playing :current-player :player1 :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human}}))
    (should (sut/ai-turn? {:status :playing :current-player :player2 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :computer}}))
    (should-not (sut/ai-turn? {:status :playing :current-player :player2 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :human}})))

  (with-stubs)
  ;(before (println "This runs before specs"))
  ;(after (println "This runs after specs"))
  (around [it] (with-redefs [tcore/draw-state (stub :show-move)
                             tcore/save-turn (stub :save-turn)
                             tcore/save-game (stub :save-game)]
                 (it)))

  (context "update-game-with-move"

    (it "tells UI to show move"
      (let [game (assoc helper/test-game :console :mock)
            game (sut/update-game-with-move game 4)]
        (should-have-invoked :show-move {:with [game 4]})))

    (it "saves turn"
      (let [game (assoc helper/test-game :persistence :mock)
            game (sut/update-game-with-move game 4)]
        (should-have-invoked :save-turn {:with [game]}))))

  (context "setup"

    (it "maybe loads the last game"
      (should-be-nil (:last-game (sut/maybe-load-game {:status :user-setup}))))

    (it "game level"
      (let [result (sut/set-level helper/test-game :easy)]
        (should= :easy (:level result))
        (should= :board-setup (:status result))))

    (context "players"

      (it "with 0 users"
        (let [game (assoc helper/test-game :status :player-setup :users 0)
              result (sut/set-players game :computer)]
          (should= :computer (:type (:player1 result)))
          (should= :computer (:type (:player2 result)))))

      (it "with 1 user as player1"
      (let [game (assoc helper/test-game :status :player-setup :users 1)
            result (sut/set-players game :human)]
        (should= :human (:type (:player1 result)))
        (should= :computer (:type (:player2 result)))))

      (it "with 2 users"
        (let [game (assoc helper/test-game :status :player-setup :users 2)
              result (sut/set-players game :human)]
          (should= :human (:type (:player1 result)))
          (should= :human (:type (:player2 result))))))

    (it "starts game"
      (let [game (assoc helper/test-game :status :ready-to-play)
            started-game (sut/start-game! game)]
        (should= :playing (:status started-game))
        (should-have-invoked :save-game {:with [started-game]}))))

(context "update state tests:"
  (it "constants"
    (let [result (sut/update-state default-state)]
      (should= {:player-num 1 :piece "X" :type :mock} (:player1 result))
      (should= {:player-num 2 :piece "O" :type :mock} (:player2 result))
      (should= :mock (:console result))
      (should= 0 (:users result))
      (should= 3 (:board-size result))
      (should-not (:board-set? result))
      (should-be-nil (:key-stroke result))
      (should= :hard (:level result))
      (should= "TEST" (:table (:persistence result)))
      (should= "test" (:dbname (:persistence result)))))

  (context "game-over?"
    (it "not over"
      (let [not-over-game (sut/update-state default-state)]
        (should-not (:game-over? not-over-game))))

    (it "over"
      (let [winning-game (sut/update-state (assoc default-state :board ["X" "X" "X" 3 4 5 6 7 8]))]
        (should (:game-over? winning-game)))))

  (context "who's the winner?"
    (it "no winner"
      (let [cats-game (sut/update-state (assoc default-state :board ["X" "O" "X" "X" "O" "O" "O" "X" "X"] :current-player :player2))]
        (should= 0 (:winner cats-game))))

    (it "X wins"
      (let [winning-game (sut/update-state (assoc default-state :board ["X" "X" "X" 3 4 5 6 7 8] :current-player :player2))]
        (should= 1 (:winner winning-game))))

    (it "game not over"
      (let [not-over-game (sut/update-state (assoc default-state :board ["X" "O" "X" 3 4 5 6 7 8] :current-player :player2))]
        (should-be-nil (:winner not-over-game)))))

  (context "board"
    (it "stays constant during human turn"
      (let [empty (sut/update-state default-state)]
        (should= [0 1 2 3 4 5 6 7 8] (:board empty))))

    (it "updates with ai turn"
      (reset! mock-move 4)
      (let [playing-state (assoc default-state :console :mock :status :playing :board ["X" 1 2 3 4 5 6 7 8] :current-player :player2)
            updated-with-computer-turn (sut/update-state playing-state)]
        (should= ["X" 1 2 3 "O" 5 6 7 8] (:board updated-with-computer-turn)))))

  (context "swap current player when"
    (it "has made move"
      (let [computer-played-box-4 (assoc default-state :console :mock :board ["X" 1 2 3 "O" 5 6 7 8] :status :playing :current-player :player2)]
        (should= :player1 (:current-player (sut/update-state computer-played-box-4)))))

    (it "but not without move"
      (should= :player1 (:current-player (sut/update-state default-state)))))

  (context "start playing"

    (around [it] (with-redefs [sut/start-game! (stub :start-game!)] (it)))

    (it "when ready to play"
      (let [game (assoc default-state :status :ready-to-play)]
        (sut/update-state game)
        (should-have-invoked :start-game!)))

    (it "not when not ready to play"
      (sut/update-state default-state)
      (should-not-have-invoked :start-game!)))))

;; COMPLETE - TODO - GLM : save game - use core multimethod
;; COMPLETE - TODO - GLM : load game - use core multimethod
;; COMPLETE - TODO - GLM : implements mysql fns
;; COMPLETE - TODO - GLM : Refactors specs to reference ONE base game map
;; COMPLETE -  TODO - GLM : imeplement mock/testable persistence

