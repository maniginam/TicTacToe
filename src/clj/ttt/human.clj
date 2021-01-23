(ns ttt.human
  (:require [master.core :as tcore]
            [ttt.board :as board]
            [ttt.user-inputs :as input]))

(defmethod tcore/print-type :human [player box]
  (println (str "You played box " box)))

(defmethod tcore/select-box :human [player game]
  (let [board (:board game)]
    (tcore/draw-board game board)
    (println (str (:piece player) "'s Turn"))
    (let [box (input/validate-box-input board)]
      box)))


