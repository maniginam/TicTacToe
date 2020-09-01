(ns test-terminal-gui
  (:require [speclj.core :refer :all]
            [ttt.terminal-gui :refer :all]))


(describe "Terminal GUI"

  (it "gets game type based on user input"
    (should= "comp-v-comp" (get-game-type 0))
    (should= "human-v-comp" (get-game-type 1))
    (should= "human-v-human" (get-game-type 2))
    (should= "comp-v-comp" (get-game-type "rex")))

  (it "gets human game-piece choice"
    (should= 1 (set-human-game-piece "x" 0))
    (should= 1 (set-human-game-piece "x" 1))
    (should= 1 (set-human-game-piece "X" 0))
    (should= 2 (set-human-game-piece "O" 0))
    (should= 2 (set-human-game-piece "rex" 2)))


  )