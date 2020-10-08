(ns games.mysql-games
  (:require [next.jdbc :as jdbc]
            [next.jdbc.sql :as sql]
            [next.jdbc.plan :as plan]
            [next.jdbc.quoted :as quote]
            [next.jdbc.result-set :as rs]
            [clojure.edn :as edn]))

(def db {:dbtype "h2" :dbname "ttt" :ResultSetMetaDataOptions "1"})
(def ds (jdbc/get-datasource db))
(def table "TTT")
(def id-keyword (keyword (apply str table "/ID")))

(defn create-new-table [name]
  (let [table (str "
     create table " name " (
     id int auto_increment primary key,
     console varchar(32),
     status varchar(32),
     users tinyint(32),
     currentplayer varchar(32),
     player1 varchar(255),
     player2 varchar(255),
     board varchar(255),
     boardsize varchar(32),
     emptyboard varchar(255),
     playedboxes varchar(255),
     messagekey varchar(32),
     gamecount int(255),
     database varchar(32),
     depth tinyint(32),
     level varchar(32))")]
    (jdbc/execute! ds [table])))

(defn save-to-sql [game table]
  (let [small-table (.toLowerCase table)
        game-map {:console       (str (:console game))
                  :status        (str (:status game))
                  :users         (:users game)
                  :currentplayer (str (:current-player game))
                  :player1       (str (:player1 game))
                  :player2       (str (:player2 game))
                  :board         (str (:board game))
                  :boardsize     (:board-size game)
                  :emptyboard    (str (:empty-board game))
                  :playedboxes   (str (:played-boxes game))
                  :messagekey    (str (:message-key game))
                  :gamecount     (:game-count game)
                  :database      (str (:database game))
                  :depth         (:depth game)
                  :level         (str (:level game))}]
    (sql/insert! ds (keyword small-table) game-map {:return-keys true :builder-fn rs/as-unqualified-lower-maps})))

(defn load-game [table]
  (let [id-keyword (keyword (apply str table "/ID"))
        last-game-id (id-keyword (last (sql/find-by-keys ds (keyword table) :all)))]
    (jdbc/execute-one! ds [(str "select * from " table " where id = ?") last-game-id]
                       {:builder-fn rs/as-unqualified-lower-maps})))

(defn get-last-db-game [table]
  (if (empty? (sql/find-by-keys ds (keyword table) :all))
    {:game-over true :board ["X" "X" "X" "X"]}
    (let [game (load-game table)]
      (-> game
          (assoc
            :status (edn/read-string (:status game))
            :console (edn/read-string (:console game))
            :board-size (:boardsize game)
            :current-player (edn/read-string (:currentplayer game))
            :player1 (edn/read-string (:player1 game))
            :player2 (edn/read-string (:player2 game))
            :board (edn/read-string (:board game))
            :empty-board (edn/read-string (:emptyboard game))
            :played-boxes (:playedboxes game)
            :depth (:depth game)
            :level (edn/read-string (:level game))
            :message-key :nil
            :game-count (:gamecount game))
          (dissoc
            :boardsize :currentplayer :emptyboard :playedboxes :messagekey :gamecount)))))