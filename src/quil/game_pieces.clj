(ns quil.game-pieces
  (:require [ttt.core :refer :all]
            [quil.core :as q]
            [quil.dimensions :as dim]))

(defn draw-X [center-x center-y]
  (let [r (/ dim/board-size 14)]
    (q/stroke-weight 20)
    (q/line (- center-x r) (- center-y r) (+ center-x r) (+ center-y r))
    (q/line (+ center-x r) (- center-y r) (- center-x r) (+ center-y r))))

(defn draw-O [center-x center-y]
  (let [r (/ dim/board-size 14)]
    (q/stroke-weight 20)
    (q/ellipse center-x center-y (* r 2) (* r 2))))

(defmethod draw-piece :player1 [state mouse-x mouse-y]
  (draw-X mouse-x mouse-y))

(defmethod draw-piece :player2 [state mouse-x mouse-y]
  (draw-O mouse-x mouse-y))







