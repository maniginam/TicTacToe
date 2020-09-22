(ns ttt.game-setup
  (:require [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.user-inputs :refer :all]))



(defn assign-player2-type [player1]
  (if (= (:type player1) :human) :computer :human))

(defn assign-player1-type [game]
  (loop [input (offer-position game)
         tries 0]
    (cond (>= tries 3) (too-many-tries)
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

(defn setup-game [console]
  (let [users (validate-player-count console)
        player1 (assign-player (assoc console :users users) :player1)
        player2 (assign-player (assoc console :users users :player1 player1) :player2)
        board (create-board (set-board-size console))]
      (assoc console :current-player :player1 :box-played nil :users users :player1 player1 :player2 player2 :board board)))
