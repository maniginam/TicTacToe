(ns quil.dimensions)

(def console-size [700 800])
(def board-size 700)
(def button-top-left-corner [120 715])
(def button-size [460 70])
(def prompt-x 170)
(def prompt-y 235)
(def prompt-size [(/ board-size 2) (/ board-size 3)])

(def box-size (/ board-size 3))

(defn option-dimensions [option]
  {:left (* prompt-x 1.3)
   :top (+ (* prompt-y 1.3) (* option 50))
   :width 250
   :height 30})

(defn piece-option-dimensions [option]
  {:left (+ prompt-x (* (/ 250 4) option) (* 75 (dec option)))
   :top (+ prompt-y (/ board-size 8))
   :width 100
   :height 100})
