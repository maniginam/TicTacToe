(ns games.mysql
  (:require
    [next.jdbc :as jdbc]
    [next.jdbc.sql :as sql]
    [next.jdbc.result-set :as rs]
    [ttt.core :as tcore]
    ))

(def database {:dbtype "mysql" :host "127.0.0.1" :user "root" :password "topsecret" :serverTimezone "UTC"})

(defn connect [dbname]
  (let [db (assoc database :dbname dbname)]
    (jdbc/get-datasource db)))

(defn show-tables [dbname]
  (let [ds (connect dbname)]
    (jdbc/execute! ds ["show tables"])))

(defn get-last-game-id [ds]
  (:game/id (last (sql/find-by-keys ds :GAME :all))))

(defn save-players [dbname game]
  (let [ds (connect dbname)
        game-table-ID (get-last-game-id ds)
        player1-map {:gameID game-table-ID :id 1 :playerNum 1 :piece (str (:piece (:player1 game))) :type (str (:type (:player1 game)))}
        player2-map {:gameID game-table-ID :id 2 :playerNum 2 :piece (str (:piece (:player2 game))) :type (str (:type (:player2 game)))}]
    (sql/insert! ds :players player1-map {:return-keys true :builder-fn rs/as-unqualified-lower-maps})
    (sql/insert! ds :players player2-map {:return-keys true :builder-fn rs/as-unqualified-lower-maps})))

(defn save-turn [dbname game]
  (when (:box-played game)
    (let [ds (connect dbname)
          game-table-ID (get-last-game-id ds)
          turn-count (count (filter string? (:board game)))
          box (:box-played game)
          turns-table-map {:gameID game-table-ID :id turn-count :player (if (even? turn-count) 1 2) :box box}]

      (sql/insert! ds :turns turns-table-map {:return-keys true :builder-fn rs/as-unqualified-lower-maps}))))

(defn save-game [dbname game]
  (let [ds (connect dbname)
        game-table-map {:console (str (:console game)) :level (:level game) :boardsize (:board-size game)}]
    (sql/insert! ds :game game-table-map {:return-keys true :builder-fn rs/as-unqualified-lower-maps})
    (save-players dbname game)))

(defn pull-game-tables [ds last-game-id]
  (let [game-table (jdbc/execute! ds [(str "select * from game where id = ?") last-game-id]
                                  {:builder-fn rs/as-unqualified-lower-maps})
        turns-table (jdbc/execute! ds [(str "select * from turns where gameID = ?") last-game-id]
                                   {:builder-fn rs/as-unqualified-lower-maps})
        players-table (jdbc/execute! ds [(str "select * from players where gameID = ?") last-game-id]
                                     {:builder-fn rs/as-unqualified-lower-maps})]
    [(first game-table) (remove #(nil? (:box %)) turns-table) players-table]))

(defn sync-game [game [game-table turns [player1 player2 & players]]]
  (if (seq turns)
    (let [ds (connect (:dbname game))
          game-id (get-last-game-id ds)]
      (-> game
          (assoc :game-id game-id)
          (assoc :board-size (:boardsize game-table))
          (assoc :current-player (if (even? (:id (last turns))) :player1 :player2))
          (assoc :player1 {:player-num 1 :piece (:piece player1) :type (read-string (:type player1))})
          (assoc :player2 {:player-num 2 :piece (:piece player2) :type (read-string (:type player2))})
          (assoc :board (loop [boxes (map #(vector (:box %) (:player %)) turns)
                               board (vec (range (int (Math/pow (:boardsize game-table) 2))))]
                          (if (empty? boxes)
                            board
                            (let [[box player] (first boxes)
                                  piece (if (= 2 player) (:piece player1) (:piece player2))]
                              (recur (rest boxes) (replace {box piece} board))))))
          ;(assoc :message-key :nil)
          ;(assoc :winner nil)
          ;(assoc :game-count (:game-count last-game))
          (assoc :users (count (filter #(= :human (:type %)) players)))
          (assoc :status :playing)
          ))
    game))

(defn load-game [dbname game]
  (let [ds (connect dbname)
        last-game-id (get-last-game-id ds)
        tables (pull-game-tables ds last-game-id)]
    (sync-game (assoc game :dbname dbname) tables)))

(defmethod tcore/save-game :mysql [game])
(defmethod tcore/save-turn :mysql [game])
(defmethod tcore/load-game :mysql [game])


