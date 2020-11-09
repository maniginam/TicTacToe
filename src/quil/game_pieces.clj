(ns quil.game-pieces
  (:require [quil.core :as q]
            [quil.gui-core :as gcore]))

(defn draw-X [box-size [center-x center-y & specs]]
  (let [half-height (* box-size 0.3)
        colors (if (> (count specs) 2) (drop 2 specs) [0 0 0])
        r (first colors)
        g (second colors)
        b (last colors)]
    (q/stroke r g b)
    (q/stroke-weight 20)
    (q/line (- center-x half-height) (- center-y half-height) (+ center-x half-height) (+ center-y half-height))
    (q/line (+ center-x half-height) (- center-y half-height) (- center-x half-height) (+ center-y half-height))))

(defn draw-O [box-size [center-x center-y & specs]]
  (let [radius (- (* box-size 0.3) 10)
        weight 15
        colors (if (> (count specs) 2) (drop 2 specs) [0 0 0])
        r (first colors)
        g (second colors)
        b (last colors)]
    (q/stroke r g b)
    (q/stroke-weight weight)
    (q/no-fill)
    (q/ellipse-mode :center)
    (q/ellipse center-x center-y (+ (* 2 weight) (* radius 2)) (+ (* 2 weight) (* radius 2)))))

(defmethod gcore/draw-piece :player1 [state box-size [x y & specs]]
  (draw-X box-size [x y specs]))

(defmethod gcore/draw-piece :player2 [state box-size [x y & specs]]
 (draw-O box-size [x y specs]))









