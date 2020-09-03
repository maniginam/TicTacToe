(ns test-terminal-gui
  (:require [speclj.core :refer :all]
            [ttt.terminal-gui :refer :all]
            [ttt.the-game :refer :all]))

(def console {:gui :terminal})

(describe "Terminal GUI"

  (it "welcomes"
    (should= "Welcome to Tic-Tac-Toe!\n" (with-out-str (welcome console))))

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

  (it "Sets up player count"
    (should= 0 (with-out-str (with-in-str "0" (ask-num-of-players console)))))

  ;(it "Sets up player1"
  ;  (let [player1 {:player 1 :type :human :piece "X"}]
  ;  (should= player1 (:player1 (setup-game console)))))



  ;(it "Set Up game map"
  ;  (let [player1 {:player 1 :type :human :piece "X"}
  ;        player2 {:player 2 :type :computer :piece "O"}
  ;        board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}
  ;        game {:gui :terminal :player1 player1 :player2 player2 :board board}]
  ;  (should= game (setup-game console))))

  (it "plays ttt with gui method"
    (let [player1 {:player 1 :type :computer :piece "X"}
          player2 {:player 2 :type :computer :piece "O"}
          board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}
          game {:gui :terminal :player1 player1 :player2 player2 :board board}]
      (with-out-str (should= 0 (run-game game)))))

  )