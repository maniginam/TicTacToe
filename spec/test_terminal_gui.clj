(ns test-terminal-gui
  (:require [speclj.core :refer :all]
            [ttt.terminal-gui :refer :all]
            [ttt.the-game :refer :all]))


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

  (it "plays ttt with gui method"
    (let [player1 {:player 1 :type :computer :piece "X"}
          player2 {:player 2 :type :computer :piece "O"}
          board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}
          game {:gui :terminal :player1 player1 :player2 player2 :board board}]
          (should= 0 (play-ttt game))))

  )