(ns games.h2-specs
  (:require [speclj.core :refer :all]
            [games.core :refer :all]
            [games.h2 :refer :all]
            [next.jdbc.sql :as sql]
            [ttt.core :as tcore]))

(def player1 {:player-num 1 :piece "X" :type :computer})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def standard-board [0 1 2 3 4 5 6 7 8])
(def test-game {:persistence :h2 :game-count nil :message-key :nil :player2 {:player-num 2 :piece "O" :type :computer} :board-size nil :level :hard :status :playing :database ":mysql" :console :terminal :player1 {:player-num 1 :piece "X" :type :computer} :board standard-board :users 1 :current-player :player1})
(def db-game-map {:persistence :h2 :boardsize nil, :player2 "{:player-num 2, :piece \"O\", :type :computer}", :gamecount nil, :messagekey ":nil", :currentplayer ":player1", :level ":hard", :status ":playing", :database ":mysql", :console ":terminal" :player1 "{:player-num 1, :piece \"X\", :type :computer}", :board "[0 1 2 3 4 5 6 7 8]", :users 1})

(describe "H2 Database"
  (it "Saves Game to SQL db"
    (should= {:id (inc (:TEST/ID (last (sql/find-by-keys ds :TEST :all))))} (tcore/save-game (assoc test-game :table "TEST"))))

  (it "Loads a Saved Game"
    (should= db-game-map (assoc (dissoc (load-game "TEST") :id :playedboxes :emptyboard) :messagekey ":nil" :database ":mysql" :console ":terminal" :board "[0 1 2 3 4 5 6 7 8]" :users 1 :persistence :h2)))

  (it "Sets the Loaded Game"
    (should= (dissoc test-game :persistence) (dissoc (get-last-db-game "TEST") :id))))
