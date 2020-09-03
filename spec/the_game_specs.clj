(ns the-game-specs
  (:require [speclj.core :refer :all]
            [ttt.the-game :refer :all]))
(def comp-player1 {:player 1 :type :computer :piece "X"})
(def comp-player2 {:player 2 :type :computer :piece "O"})
(def cat-player1 {:player 1 :type :cat :piece "O"})
(def standard-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})
(def player1-wins-board {0 "X" 1 "X" 2 2 3 "O" 4 "O" 5 5 6 6 7 7 8 8})
(def test-game {:players 0 :player1 comp-player1 :player2 comp-player2 :board standard-board})
(def test-game-player1-wins {:players 0 :player1 comp-player1 :player2 comp-player2 :board player1-wins-board})

(describe "Sets the rules of The Game:"

  (it "Sets up num-of-players"
    (should= 0 (:players (setup-game {}))))

  (it "Sets up player1"
    (let [player1 {:player 1 :type :computer :piece "X"}]
      (should= player1 (:player1 (setup-game {})))))

  (it "Sets up player2"
    (let [player2 {:player 2 :type :computer :piece "O"}]
      (should= player2 (:player2 (setup-game {})))))

  (it "Sets up board"
      (should= standard-board (:board (setup-game test-game))))

  (it "Set Up game map"
    (let [console {:board standard-board}]
      (should= test-game (setup-game console))))

  (it "makes :ai move"
    (should= 0 (make-move comp-player1 {0 0}))
    (should= 2 (make-move comp-player1 {0 "O" 1 "O" 2 2}))
    (should-be-nil (make-move cat-player1 "board-type doesn't matter")))

  (it "updates potential gui"
    (should-be-nil (update-gui test-game)))

  (it "plays ttt"
    (should= (assoc test-game :winner 0) (run-game test-game)))

  (it "guides/leads the game from start to end"
    (should= "Cat's Game\n" (with-out-str (play-game test-game)))
    (should= "X won!\n" (with-out-str (play-game test-game-player1-wins)))))
