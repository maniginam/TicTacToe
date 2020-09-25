(ns quil.human
  (:require [ttt.core :refer :all]
            [quil.gui-core :refer :all]
            [quil.boxes :refer :all]
            [ttt.human :refer :all]))


(defmethod get-selection :gui [state player]
  (let [x (:x state)
        y (:y state)
        board (:board state)
        box (filter #(mouse-in-box? state % x y) board)]
    (first box)))
