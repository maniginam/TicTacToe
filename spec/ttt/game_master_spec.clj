(ns ttt.game-master-spec
  (:require [spec-helper :as helper]
            [speclj.core :refer :all]
            [ttt.game-master :as sut]
            [ttt.core :as tcore]))

(describe "game-master"

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
        (should-have-invoked :save-turn {:with [game]})))

    )

  (context "setup"

    (it "maybe loads the last game"
      (should-be-nil (:last-game (sut/maybe-load-game {:status :user-setup}))))

    (it "sets game level"
      (let [result (sut/set-level helper/test-game :easy)]
        (should= :easy (:level result))
        (should= :board-setup (:status result))))

    (it "sets players"
      (let [game (assoc helper/test-game :status :player-setup)
            result (sut/set-players game :human)]
        (should= :human (:type (:player1 result)))
        (should= :computer (:type (:player2 result)))))

    (it "starts game"
      (let [game (assoc helper/test-game :status :ready-to-play)
            started-game (sut/start-game! game)]
        (should= :playing (:status started-game))
        (should-have-invoked :save-game {:with [started-game]})))
    )


  ;; COMPLETE - TODO - GLM : save game - use core multimethod
  ;; COMPLETE - TODO - GLM : load game - use core multimethod
  ;; COMPLETE - TODO - GLM : implements mysql fns
  ;; COMPLETE - TODO - GLM : Refactors specs to reference ONE base game map
  ;; COMPLETE -  TODO - GLM : imeplement mock/testable persistence

  )