(ns try-ttt.try-ttt
  (:require [ttt.board :refer :all]))

(defn set-users [console] 0)

(defn set-board-size [console] 3)

(defn set-player1 [console]
  {:player-num 1 :piece "X" :type :computer})

(defn set-player2 [console]
  {:player-num 2 :piece "O" :type :computer})

(defn setup [console]
  (let [users (set-users console)
        board (create-board (set-board-size console))
        player1 (set-player1 console)
        player2 (set-player2 console)
        game {:users users :board board :player :player1 :player1 player1 :player2 player2}]
    game))

(defn update-board [game]
  (let [box 0
        board (:board game)
        piece (:piece (:player game))]
    (assoc board box piece)
    ))

(defn play-game [game]
  (loop [board (:board game)
         player (:player game)]
    (cond (is-win? board) (assoc game :loser (:player player))
          (full-board? board) (assoc game :loser 0)
          :else (recur (update-board game) (if (= 1 (:player player)) :player2 :player1)))))