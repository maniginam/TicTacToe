(ns the-game-specs
  (:require [speclj.core :refer :all]
            [ttt.the-game :refer :all]))

(def player1 {:player 1 :type :computer :piece "X"})
(def player2 {:player 2 :type :computer :piece "O"})
(def standard-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})
(def player1-wins-board {0 "X" 1 "X" 2 2 3 "O" 4 "O" 5 5 6 6 7 7 8 8})
(def test-game {:users 0 :player1 player1 :player2 player2 :board standard-board})
(def test-game-player1-wins {:users 0 :player1 player1 :player2 player2 :board player1-wins-board})
(def test-console {})

(describe "Sets the rules of The Game:"

  (it "Sets up num-of-players"
    (should= 0 (:users (setup-game {}))))

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

  (it "makes computer move"
    (with-out-str (let [box (make-move player1 standard-board)]
                    (should= 1 (count (filter #(= % box) [0 2 6 8])))))
    (with-out-str (should= 2 (make-move player1 {0 "O" 1 "O" 2 2})))
    (with-out-str (should= 1 (make-move player1 {0 "X" 1 1 2 "X"}))))

  (it "plays ttt"
    (with-out-str (should= (assoc test-game :winner 0) (play-game test-game))))

  (it "gets game results"
    (should= "Cat's Game" (game-results {:winner 0}))
    (should= "X Wins!" (game-results {:winner 1 :player1 {:piece "X"}}))
    (should= "O Wins!" (game-results {:winner 2 :player2 {:piece "O"}})))

  (it "reports results"
    (should= "Cat's Game" (report {:winner 0}))
    (should= "X Wins!" (report {:winner 1 :player1 {:piece "X"}}))
    (should= "O Wins!" (report {:winner 2 :player2 {:piece "O"}})))

  (it "guides/leads the game from start to end"
    (with-out-str (should= "Cat's Game" (run-game test-console)))))
