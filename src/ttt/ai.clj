(ns ttt.ai
  (:require [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.optimal-play :refer :all]
            [ttt.human :refer :all]))

(defmethod print-type :computer [player box]
  (println (str "Computer plays box " box)))

(defmethod print-turn :default [game player box] nil)

(defmethod print-turn :terminal [game player box]
  (print-type player box))

(defmethod select-box :computer [player game]
  (let [board (:board game)
        box (play-optimal-box board (:player-num player))
        new-board (put-piece-on-board board box (:piece player))]
    box))


