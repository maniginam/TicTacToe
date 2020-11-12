(ns gui.board
  (:require [quil.core :as q]
            [gui.dimensions :as dim]))

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

    (doseq [box (range 1 boxes-per-row)]
      (q/line [(+ (* box box-size) 50) 50] [(+ (* box box-size) 50) (+ line-height 50)])
      (q/line [50 (+ (* box box-size) 50)] [(+ line-width 50) (+ (* box box-size) 50)]))))
