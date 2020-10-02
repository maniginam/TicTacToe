(ns ttt.game-setup
  (:require [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.user-inputs :refer :all]
            [ttt.terminal :refer :all]
            [ttt.game-master :as master]
            [games.saved-games :as saved]))

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

(defn get-last-game []
  (let [file (str "/Users/maniginam/TicTacToe/saved-games/recent-game.txt")]
    (saved/pull-game file)))

(defn setup-game [game]
  (let [filed-game (get-last-game)
        last-game (assoc filed-game :old-console (:console filed-game) :console (:console game))
        last-count (get last-game :game-count 0)]
    (if (restart? last-game)
      last-game
      (let [users (validate-player-count game)
            player1 (assign-player (assoc game :users users) :player1)
            player2 (assign-player (assoc game :users users :player1 player1) :player2)
            board (create-board (set-board-size game))
            level (if (< users 2) (set-level game) :none)]
        (assoc game :game-count (inc last-count) :level level :depth (level depths)
                    :current-player :player1 :box-played nil :users users
                    :player1 player1 :player2 player2 :board board)))))
