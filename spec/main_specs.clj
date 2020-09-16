(ns main-specs
  (:require [speclj.core :refer :all]
            [ttt.main :refer :all]
            [ttt.core :refer :all]))

(def player1 {:player-num 1 :piece "X" :type :default})
(def player2 {:player-num 2 :piece "O" :type :default})
(def standard-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})
(def player1-wins-board {0 "X" 1 "X" 2 2 3 "O" 4 "O" 5 5 6 6 7 7 8 8})
(def test-game {:console :default :users 0 :current-player :player1 :player1 player1 :player2 player2 :board standard-board})
(def test-game-player1-wins {:users 0 :current-player :player1 :player1 player1 :player2 player2 :board player1-wins-board})
(def test-console {})

(def boards {:three-by-three {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}})
(def players {:player1 {:player-num 1 :piece "X" :type :default} :player2 {:player-num 2 :piece "O" :type :default}})

(describe "MAIN - "

  (it "plays 0 user, 3x3 board game"
    (let [game {:console nil :users 0 :board (:three-by-three boards) :current-player :player1 :player1 (:player1 players) :player2 (:player2 players)}]
      (should= game (setup-game test-console))
      (should= (assoc (dissoc game :board) :winner 0 :current-player :player2) (dissoc (play-game game) :board))))

  (it "Default: Sets up num-of-players"
    (should= 0 (:users (setup-game {}))))

  (it "Default: Sets up player1"
    (let [player1 {:player-num 1 :type :default :piece "X"}]
      (should= player1 (:player1 (setup-game {})))))

  (it "Default: Sets up player2"
    (let [player2 {:player-num 2 :piece "O" :type :default}]
      (should= player2 (:player2 (setup-game {})))))

  (it "Default: Sets up board"
    (should= standard-board (:board (setup-game test-game))))

  (it "Default: Set Up game map"
      (should= (assoc test-game :console nil) (setup-game {})))

  (it "Terminal: Set Up game map with 1 user as player 2"
    (let [player1 {:player-num 1 :type :computer :piece "X"}
          player2 {:player-num 2 :type :human :piece "O"}
          board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}
          game {:console :terminal :users 1 :current-player :player1 :player1 player1 :player2 player2 :board board}]
      (with-out-str (should= game (with-in-str "1" (setup-game {:console :terminal}))))))

  (it "gets game results"
    (should= "Cat's Game" (game-results {:winner 0}))
    (should= "X Wins!" (game-results {:winner 1 :player1 {:piece "X"}}))
    (should= "O Wins!" (game-results {:winner 2 :player2 {:piece "O"}})))

  (it "guides/leads the game from start to end"
    (should= "Cat's Game" (run-game test-console)))

  )