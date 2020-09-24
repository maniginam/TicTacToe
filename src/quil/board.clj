(ns quil.board
  (:require [quil.core :as q]
            [quil.dimensions :as dim]
            [quil.gui-messages :as msg]))

(defn draw-console []
  (let [width (first dim/console-size)
        height (second dim/console-size)]
    (q/background 255)
    (q/stroke-weight 0)
    (q/fill 200 200 200)
    (q/rect 0 (inc width) width height)))

(defn draw-gui-board [boxes-per-row]
  (let [board-length dim/board-size
        line-width (- board-length 100)
        line-height (- board-length 100)
        box-size (/ line-width boxes-per-row)]
    (q/fill 255 255 255)
    (q/stroke 0 0 0)
    (q/stroke-weight 3)
    (q/rect 0 0 board-length board-length)
    (q/line [(+ 50 box-size) 50] [(+ 50 box-size) (+ line-height 50)])
    (q/line [(+ (* 2 box-size) 50) 50] [(+ (* 2 box-size) 50) (+ line-height 50)])
    (q/line [50 (+ 50 box-size)] [(+ line-width 50) (+ 50 box-size)])
    (q/line [50 (+ (* 2 box-size) 50)] [(+ line-width 50) (+ (* 2 box-size) 50)])))
