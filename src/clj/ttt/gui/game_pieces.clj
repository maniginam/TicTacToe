(ns ttt.gui.game-pieces
  (:require [quil.core :as q]
            [ttt.gui.multimethods :as gcore]))

(defn draw-X [box-size [center-x center-y]]
  (let [half-height (* box-size 0.3)]
    (q/stroke-weight 20)
    (q/line (- center-x half-height) (- center-y half-height) (+ center-x half-height) (+ center-y half-height))
    (q/line (+ center-x half-height) (- center-y half-height) (- center-x half-height) (+ center-y half-height))))

(defn draw-O [box-size [center-x center-y]]
  (let [radius (- (* box-size 0.3) 10)
        weight 15]
    (q/stroke-weight weight)
    (q/no-fill)
    (q/ellipse-mode :center)
    (q/ellipse center-x center-y (+ (* 2 weight) (* radius 2)) (+ (* 2 weight) (* radius 2)))))

(defmethod gcore/draw-piece :player1 [state box-size [x y]]
  (draw-X box-size [x y]))

(defmethod gcore/draw-piece :player2 [state box-size [x y]]
  (draw-O box-size [x y]))









