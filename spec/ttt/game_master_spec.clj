(ns ttt.game-master-spec
  (:require
    [spec-helper :as helper]
    [speclj.core :refer :all]
    [ttt.game-master :as sut]
    [ttt.core :as tcore]
    ))

(describe "game-master"

  (with-stubs)
  ;(before (println "This runs before specs"))
  ;(after (println "This runs after specs"))
  (around [it] (with-redefs [tcore/show-move (stub :show-move)
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

    (it "sets game level"
      (let [result (sut/set-level helper/test-game :easy)]
        (should= :easy (:level result))
        (should= :ready-to-play (:status result))))

    (it "starts game"
      (let [game (assoc helper/test-game :status :ready-to-play)
            started-game (sut/start-game! game)]
        (should= :playing (:status started-game))
        (should-have-invoked :save-game {:with [started-game]})))
    )


  ;; COMPLETE TODO - GLM : save game - use core multimethod
  ;; COMPLETE TODO - GLM : load game - use core multimethod
  ;; TODO - GLM : implements mysql fns
  ;; TODO - GLM : Refactors specs to reference ONE base game map
  ;; DID WE DO THIS LAST WEEK? TODO - GLM : imeplement mock/testable persistence

  )