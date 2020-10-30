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
                             tcore/save-turn (stub :save-turn)]
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


    ;; TODO - GLM : save game - use core multimethod
    ;; TODO - GLM : load game - use core multimethod
    ;; TODO - GLM : implements mysql fns
    ;; TODO - GLM : Refactors specs to reference ONE base game map
    ;; TODO - GLM : imeplement mock/testable persistence


    )

  )