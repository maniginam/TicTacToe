(ns ttt.clj.ttt.human
  (:require [ttt.clj.master.core :as tcore]
            [ttt.clj.ttt.board :as board]
            [ttt.clj.ttt.user-inputs :as input]))

(defmethod tcore/print-type :human [player box]
  (println (str "You played box " box)))

(defmethod tcore/select-box :human [player game]
  (let [board (:board game)]
    (tcore/draw-board game board)
    (println (str (:piece player) "'s Turn"))
    (let [box (input/validate-box-input board)]
      box)))


