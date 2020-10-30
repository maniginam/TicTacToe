(ns main-specs
  (:require [speclj.core :refer :all]
            [main :refer :all]
            [ttt.core :refer :all]
            [ttt.game-setup :refer :all]
            [ttt.game-master :refer :all]
            [games.mysql :as sql]))

(def player1 {:player-num 1 :piece "X" :type :computer})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def standard-board [0 1 2 3 4 5 6 7 8])
(def player1-wins-board ["X" "X" 2 "O" "O" 5 6 7 8])
(def test-game {:db "test" :table "TEST" :persistence :mysql :users 0 :level :hard :depth 0 :current-player :player1 :box-played nil :player1 player1 :player2 player2 :board standard-board :board-size 3})
(def test-game-player1-wins {:db "test" :persistence :mysql :users 0 :current-player :player1 :box-played nil :player1 player1 :player2 player2 :board player1-wins-board})
(def test-console {:table "TEST" :db "test" :persistence :mysql})
(def empty-game {:db "test" :table "TEST" :persistence :mysql})

(defn save-an-ended-game []
  (let [game {:persistence :mysql :db "test" :box-played 0 :depth 0 :board ["X"] :board-size 1 :current-player :player1 :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human} :users 2 :console :default}]
    (sql/save-game "test" game)
    (sql/save-turn "test" game)))

(def boards {:three-by-three [0 1 2 3 4 5 6 7 8] :four-by-four [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]})
(def players {:player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :computer}})
;(def ended-game (save-an-ended-game))

(defmethod validate-player-count :default [console] 0)
(defmethod board-size-prompt :default [console] nil)
(defmethod set-board-size :default [console] 3)
(defmethod report :default [console results] results)
(defmethod play-again :default [console] false)
(defmethod draw-board :default [game board] nil)
(defmethod set-level :default [console] :hard)
(defmethod restart? :default [console] false)
(defmethod get-restart-input :default [console] "N")
(defmethod show-move :default [game box] nil)

(describe "TIC-TAC-TOE:"

  (it "plays standard game"
    (let [game (dissoc (setup-game empty-game) :game-count)]
      (should= test-game game)
      (save-an-ended-game)
      (should= "Cat's Game" (run game)))
    (save-an-ended-game))

  (it "sets up easy game"
    (let [game (dissoc (assoc (setup-game empty-game) :level :easy :depth 2) :game-count)]
      (should= (assoc test-game :level :easy :depth 2) game))
    (save-an-ended-game))
  )


(describe "MAIN - "

  (it "Default: Sets up num-of-players"
    (should= 0 (:users (setup-game empty-game)))
    (save-an-ended-game))

  (it "Default: Sets up player1"
    (let [player1 {:player-num 1 :type :computer :piece "X"}]
      (should= player1 (:player1 (setup-game empty-game)))
      (save-an-ended-game)
      (should= player1 (assign-player {:persistence :mysql :db "ttt" :table "TEST" :console :default :users 0} :player1)))
    (save-an-ended-game))

  (it "Default: Sets up player2"
    (let [player2 {:player-num 2 :piece "O" :type :computer}]
      (should= player2 (:player2 (setup-game empty-game))))
    (save-an-ended-game))

  (it "Default: Sets up board"
    (should= standard-board (:board (setup-game test-game)))
    (save-an-ended-game))

  (it "Default: Set Up game map"
    (should= test-game (dissoc (setup-game test-console) :game-count))
    (save-an-ended-game))

  (it "Terminal: Set Up game map with 1 user as player 2"
    (let [player2 {:player-num 2 :piece "O" :type :human}]
      (with-out-str (should= player2 (:player2 (with-in-str "1" (setup-game {:persistence :mysql :db "test" :table "TEST" :console :terminal :board [0 1 2 3 4 5 6 7 8] :board-size 3 :player1 {:player-num 1 :piece "X" :type :computer} :depth 0}))))))
    (save-an-ended-game))

  (it "plays 0 user, 3x3 board game"
    (let [game {:persistence :mysql :db "test" :table "TEST" :users 0 :level :hard :depth 0 :board-size 3 :board (:three-by-three boards) :current-player :player1 :player1 (:player1 players) :player2 (:player2 players)}]
      (should= game (dissoc (setup-game test-console) :game-count :box-played))
      (save-an-ended-game)
      (should= (assoc (dissoc game :board) :current-player :player2) (dissoc (play-game game) :board :box-played)))
    (save-an-ended-game))

  (it "gets game results"
    (should= "Cat's Game" (game-results {:winner 0}))
    (should= "X Wins!" (game-results {:winner 1 :player1 {:piece "X"}}))
    (should= "O Wins!" (game-results {:winner 2 :player2 {:piece "O"}})))

  (it "guides/leads the game from start to end"
    (should= "Cat's Game" (run (setup-game test-console)))
    (save-an-ended-game))

  ;(it "plays a 4x4 0 player game"
  ;  (let [game {:console :default :level :hard :depth 0 :current-player :player1 :users 0 :player1 player1 :player2 player2 :board (:four-by-four boards)}]
  ;    (should= "Cat's Game" (run game))))

  )