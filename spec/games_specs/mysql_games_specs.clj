(ns games-specs.mysql-games-specs
  (:require [speclj.core :refer :all]
            [games.core :refer :all]
            [games.mysql-games :refer :all]
            [next.jdbc.sql :as sql]))

(def player1 {:player-num 1 :piece "X" :type :computer})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def standard-board [0 1 2 3 4 5 6 7 8])
(def test-game {:game-count 7 :message-key :nil :player2 {:player-num 2 :piece "O" :type :computer} :board-size nil :level :hard :empty-board standard-board :played-boxes "" :status :playing :database ":mysql" :depth 0 :console :terminal :player1 {:player-num 1 :piece "X" :type :computer} :board standard-board :users 1 :current-player :player1})
(def db-game-map {:boardsize nil, :player2 "{:player-num 2, :piece \"O\", :type :computer}", :gamecount 7, :messagekey ":nil", :currentplayer ":player1", :level ":hard", :emptyboard "[0 1 2 3 4 5 6 7 8]", :status ":playing", :database ":mysql", :depth 0, :console ":terminal", :playedboxes "", :player1 "{:player-num 1, :piece \"X\", :type :computer}", :board "[0 1 2 3 4 5 6 7 8]", :users 1})

(describe "MySQL Database"
  ;(it "Connects to the datasource"
  ;  (should (create-new-table "test")))

  (it "Saves Game to SQL db"
    (should= {:id (inc (:TEST/ID (last (sql/find-by-keys ds :TEST :all))))} (save-to-sql test-game "TEST")))

  (it "Loads a Saved Game"
    (should= db-game-map (dissoc (load-game "TEST") :id)))

  (it "Sets the Loaded Game"
    (should= test-game (dissoc (get-last-db-game "TEST") :id))))
