(ns test-game-setup
  (:require [speclj.core :refer :all]
            [ttt.game-setup :refer :all]))


(describe "sets up game"
  (it "gets game type"
    (should= "Computer vs Computer" (game comp-v-comp))
    (should= "Human vs Computer" (game human-v-comp))
    (should= "Human vs Human" (game human-v-human)))
  )
