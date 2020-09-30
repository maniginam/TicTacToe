(ns main-specs
  (:require [speclj.core :refer :all]
            [ttt.main :refer :all]
            [ttt.core :refer :all]
            [ttt.game-setup :refer :all]
            [ttt.game-master :refer :all]))

(def player1 {:player-num 1 :piece "X" :type :computer})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def standard-board [0 1 2 3 4 5 6 7 8])
(def player1-wins-board ["X" "X" 2 "O" "O" 5 6 7 8])
(def test-game {:users 0 :level :hard :depth 0 :current-player :player1 :box-played nil :player1 player1 :player2 player2 :board standard-board})
(def test-game-player1-wins {:users 0 :current-player :player1 :box-played nil :player1 player1 :player2 player2 :board player1-wins-board})
(def test-console {})

(def boards {:three-by-three [0 1 2 3 4 5 6 7 8] :four-by-four [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]})
(def players {:player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :computer}})

(defmethod validate-player-count :default [console] 0)
(defmethod board-size-prompt :default [console] nil)
(defmethod set-board-size :default [console] 3)
(defmethod report :default [console results] results)
(defmethod play-again :default [console] false)
(defmethod draw-board :default [game board] nil)
(defmethod set-level :default [console] :hard)



(describe "TIC-TAC-TOE:"
  (it "plays standard game"
    (let [game (setup-game {})]
      (should= test-game game)
      (should= "Cat's Game" (run game))))

  (it "sets up easy game"
    (let [game (assoc (setup-game {}) :level :easy :depth 2)]
      (should= (assoc test-game :level :easy :depth 2) game)))
  )


(describe "MAIN - "

  (it "Default: Sets up num-of-players"
    (should= 0 (:users (setup-game {}))))

  (it "Default: Sets up player1"
    (let [player1 {:player-num 1 :type :computer :piece "X"}]
      (should= player1 (:player1 (setup-game {})))
      (should= player1 (assign-player {:console :default :users 0} :player1))))

  (it "Default: Sets up player2"
    (let [player2 {:player-num 2 :piece "O" :type :computer}]
      (should= player2 (:player2 (setup-game {})))))

  (it "Default: Sets up board"
    (should= standard-board (:board (setup-game test-game))))

  (it "Default: Set Up game map"
    (should= test-game (setup-game test-console)))

  (it "Terminal: Set Up game map with 1 user as player 2"
    (let [player1 {:player-num 1 :type :computer :piece "X"}
          player2 {:player-num 2 :type :human :piece "O"}
          board [0 1 2 3 4 5 6 7 8]
          game {:console :terminal :level :hard :depth 0 :users 1 :box-played nil :current-player :player1 :player1 player1 :player2 player2 :board board}]
      (with-out-str (should= game (with-in-str "1" (setup-game {:console :terminal}))))))

  (it "plays 0 user, 3x3 board game"
    (let [game {:users 0 :level :hard :depth 0 :board (:three-by-three boards) :box-played nil :current-player :player1 :player1 (:player1 players) :player2 (:player2 players)}]
      (should= game (setup-game test-console))
      (should= (assoc (dissoc game :board) :current-player :player2) (dissoc (play-game game) :board))))

  (it "gets game results"
    (should= "Cat's Game" (game-results {:winner 0}))
    (should= "X Wins!" (game-results {:winner 1 :player1 {:piece "X"}}))
    (should= "O Wins!" (game-results {:winner 2 :player2 {:piece "O"}})))

  (it "guides/leads the game from start to end"
    (should= "Cat's Game" (run (setup-game test-console))))

  ;(it "plays a 4x4 0 player game"
  ;  (let [game {:console :default :level :hard :depth 0 :current-player :player1 :users 0 :player1 player1 :player2 player2 :board (:four-by-four boards)}]
  ;    (should= "Cat's Game" (run game))))
  )