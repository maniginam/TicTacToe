(ns quil-gui.game-button
  (:require [quil-gui.gui :refer :all]
            [quil-gui.dimensions :as dim]))

;(defn mouse-in-button? [mouse-x mouse-y]
;  (let [x (first dim/button-top-left-corner)
;        y (second dim/button-top-left-corner)
;        width (first dim/button-size)
;        height (second dim/button-size)]
;  (and (> mouse-x x) (< mouse-x (+ x width)) (> mouse-y y) (< mouse-y (+ y height)))))
;
;(defn mouse-clicked [state event]
;  (if (= (:game state) :waiting)
;    (if (mouse-in-button?)
;      {:game    :x-turn
;       :message (messages (:game state))})))
