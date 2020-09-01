(ns test-core
  (:require [speclj.core :refer :all]
            [ttt.core :refer :all]
            [ttt.terminal-gui :refer :all]))


(describe "Runs Game"
  (it "assigns players"
    (let [player1 (assign-player "comp-v-comp" 1)
          player2 (assign-player "comp-v-comp" 2)]
      (should= player1 player2)))

  )