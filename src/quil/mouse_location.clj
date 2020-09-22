(ns quil.mouse-location
  (:require [quil.core :refer :all]
            [quil.dimensions :as dim]
            [quil.core :as q]))

(defn hovering-option? [option mouse-x mouse-y]
  (let [dimensions (dim/option-dimensions option)
        left (:left dimensions)
        top (:top dimensions)
        width (:width dimensions)
        height (:height dimensions)]
    (and (> mouse-x left) (> mouse-y top) (< mouse-x (+ left width)) (< mouse-y (+ top height)))))

(defn hovering-piece-option? [option mouse-x mouse-y]
  (let [dimensions (dim/piece-option-dimensions option)
        left (:left dimensions)
        top (:top dimensions)
        width (:width dimensions)
        height (:height dimensions)]
    (and (> mouse-x left) (> mouse-y top) (< mouse-x (+ left width)) (< mouse-y (+ top height)))))

(defn in-button? [mouse-x mouse-y]
  (let [x (first dim/button-top-left-corner)
        y (second dim/button-top-left-corner)
        width (first dim/button-size)
        height (second dim/button-size)]
    (and (> mouse-x x) (< mouse-x (+ x width)) (> mouse-y y) (< mouse-y (+ y height)))))
