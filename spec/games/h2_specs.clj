(ns games.h2-specs
  (:require [games.h2 :as h2]
            [next.jdbc.sql :as sql]
            [ttt.core :as tcore]
            [speclj.core :refer :all]))

(def player1 {:player-num 1 :piece "X" :type :computer})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def test-game (assoc (dissoc tcore/game-model :database :ai-turn :board-set? :current-plyr-num :boxes :game-count :key-stroke :turn :game-over :play-again-pause :winner :table :dbname)
                 :persistence {:db :h2 :dbname "test" :table "TEST"}
                 :message-key :nil
                 :status :playing
                 :console :terminal
                 :current-player :player1
                 :player1 {:player-num 1 :piece "X" :type :computer}
                 :player2 player2
                 :game-count 0
                 :users 1))
(def db-game-map {:player2       "{:player-num 2, :piece \"O\", :type :computer}"
                  :boardsize     "3"
                  :messagekey    ":nil"
                  :currentplayer ":player1"
                  :gamecount     0
                  :level         ":hard"
                  :status        ":playing"
                  :console       ":terminal"
                  :player1       "{:player-num 1, :piece \"X\", :type :computer}"
                  :board         "[0 1 2 3 4 5 6 7 8]"
                  :users         1})

(describe "H2 Database"
  (it "Saves Game to SQL db"
    (should= {:id (inc (:TEST/ID (last (sql/find-by-keys h2/ds :TEST :all))))} (tcore/save-game (assoc test-game :table "TEST"))))

  (it "Loads a Saved Game"
    (should= db-game-map (assoc (dissoc (h2/load-game "TEST") :id :playedboxes :database :emptyboard) :messagekey ":nil" :console ":terminal" :board "[0 1 2 3 4 5 6 7 8]" :users 1)))

  (it "Sets the Loaded Game"
    (should= (dissoc test-game :persistence) (dissoc (h2/get-last-db-game "TEST") :id))))
