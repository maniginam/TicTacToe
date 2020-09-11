(ns ttt.default-game
  (:require [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :refer :all]))

(defmethod validate-player-count :default [console]
  0)

(defmethod assign-type :default [console users]
  :default)

(defmethod make-move :default [player board]
  (let [box (play-optimal-box board (:player player))]
    box))

(defn next-player [game player]
  (if (= player (:player1 game)) (:player2 game) (:player1 game)))


(defmethod report :default [console results]
    results)

;(defn run-game [console]
;  (let [game (setup-game console)]
;    (report (play-game game))))