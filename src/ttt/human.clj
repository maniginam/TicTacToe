(ns ttt.human
  (:require [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.optimal-play :refer :all]
            [ttt.user-inputs :refer :all]))

(defmethod print-type :human [player box]
  (println (str "You played box " box)))

(defmethod select-box :human [player game]
  (let [board (:board game)]
    (draw-board game board)
    (println (str (:piece player) "'s Turn"))
    (let [box (validate-box-input board)
          new-board (put-piece-on-board board box (:piece player))]
      box)))


