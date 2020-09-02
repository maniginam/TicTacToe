(ns ttt.the-game
  (:require [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.game-rules :refer :all]))

(defn assign-player [player type piece]
  {:player player :type type :piece piece})

(defmulti get-player-info :player)
(defmethod get-player-info 1 [player] (str "player1 is " (:type player) " with piece " (:piece player)))
(defmethod get-player-info 2 [player] (str "player2 is " (:type player) " with piece " (:piece player)))

(defmulti make-move (fn [player _] (:type player)))
(defmethod make-move :computer [player board]
  (let [box-played (play-optimal-box board (:player player))
        new-board (put-piece-on-board board box-played (:piece player))]
    box-played))
(defmethod make-move :default [player board] nil)

(defn next-player [game player]
  (if (= player (:player1 game)) (:player2 game) (:player1 game)))

(defmulti play-ttt (fn [game] (:gui game)))
(defmethod play-ttt :default [game]
  (loop [board (:board game)
         player (:player1 game)]
    (cond (is-win? board) (:player (next-player game player))
          (full-board? board) 0
          :else (let [box-played (make-move player board)]
                  (recur (put-piece-on-board board box-played (:piece player))
                         (next-player game player))))))