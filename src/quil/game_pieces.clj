(ns quil.game-pieces
  (:require [ttt.core :refer :all]
            [quil.core :as q]
            [quil.gui-core :refer :all]
            [quil.dimensions :as dim]))

(defn draw-X [box-size center-x center-y & win?]
  (let [half-height (* box-size 0.3)]
    (q/stroke-weight 20)
    (if (true? win?) (q/stroke 0 255 0) (q/stroke 0 0 0))
    (q/line (- center-x half-height) (- center-y half-height) (+ center-x half-height) (+ center-y half-height))
    (q/line (+ center-x half-height) (- center-y half-height) (- center-x half-height) (+ center-y half-height))))

(defn draw-O [box-size center-x center-y & win?]
  (let [radius (- (* box-size 0.3) 10)
        weight 15]
    (if (true? win?) (q/stroke 0 255 0) (q/stroke 0 0 0))
    (q/stroke-weight weight)
    (q/no-fill)
    (q/ellipse-mode :center)
    (q/ellipse center-x center-y (+ (* 2 weight) (* radius 2)) (+ (* 2 weight) (* radius 2)))))

(defmethod draw-piece :player1 [state box-size x y & win?]
  (draw-X box-size x y win?))

(defmethod draw-piece :player2 [state box-size x y & win?]
 (draw-O box-size x y win?))









