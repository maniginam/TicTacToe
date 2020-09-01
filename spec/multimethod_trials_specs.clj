(ns multimethod-trials-specs
  (:require [speclj.core :refer :all]
            [ttt.multimethod-trials :refer :all]))



(describe "multimethods plays ttt"
  (it "gets game type"
    (should= "Computer vs Computer" (game comp-v-comp))
    (should= "Human vs Computer" (game human-v-comp))
    (should= "Human vs Human" (game human-v-human)))



  )
