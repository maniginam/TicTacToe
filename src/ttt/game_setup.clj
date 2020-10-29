(ns ttt.game-setup
  (:require [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.user-inputs :refer :all]
            [ttt.terminal :refer :all]
            [ttt.game-master :as master]
            [games.saved-games :as saved]
            [games.h2 :as h2]
            [games.mysql :as sql]))

(def depths {:hard 0 :medium 1 :easy 2 :none 0})

(defn assign-player2-type [player1]
  (if (= (:type player1) :human) :computer :human))

(defn assign-player1-type [game]
  (loop [input (offer-position game)
         tries 0]
    (cond (>= tries 3) (too-many-tries {:input :position})
          (valid-position? input) (set-position input)
          :else (recur (if (= (inc tries) 3) nil (offer-position game)) (inc tries)))))

(defn assign-type [game player-num]
  (let [users (:users game)]
    (cond (zero? users) :computer
          (= 2 users) :human
          :else (if (= player-num 1)
                  (assign-player1-type game)
                  (assign-player2-type (:player1 game))))))

(defn assign-player [game player]
  (let [player-num (player-nums player)
        piece (pieces player)
        type (assign-type game player-num)]
    {:player-num player-num :piece piece :type type}))

(defn setup-game [game]
  (let [last-sql-game (sql/load-game (:db game) game)
        last-h2-game (h2/get-last-db-game (:table game))
        last-filed-game (saved/pull-game)
        updated-sql-game (assoc last-sql-game :old-console (:console last-sql-game) :console (:console game))
        updated-h2-game (assoc last-h2-game :old-console (:console last-h2-game) :console (:console game))
        updated-filed-game (assoc last-filed-game :old-console (:console last-filed-game) :console (:console game))
        last-count (get updated-filed-game :game-count 0)]
    (if (restart? updated-sql-game)
      (restart (assoc game :last-game updated-sql-game))
      (let [users (validate-player-count game)
            player1 (assign-player (assoc game :users users) :player1)
            player2 (assign-player (assoc game :users users :player1 player1) :player2)
            board-size (set-board-size game)
            level (if (< users 2) (set-level game) :none)
            fresh-game (assoc game :game-count (inc last-count) :level level :depth (level depths)
                                   :current-player :player1 :box-played nil :users users
                                   :player1 player1 :player2 player2 :board-size board-size :board (create-board board-size))]
        (sql/save-game (:db game) fresh-game)
        fresh-game))))
