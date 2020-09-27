(ns quil.boxes
  (:require [ttt.core :refer :all]
            [quil.core :as q]
            [quil.gui-core :refer :all]
            [quil.dimensions :as dim]
            [quil.game-pieces :refer :all]
            [ttt.board :as board]))

(defn size-boxes [state] (/ (- dim/board-size 100) (:board-size state)))

(defn box-perimeter [box state]
  (let [left-x (/ dim/board-size 14)
        top-y (/ dim/board-size 14)
        boxes-per-row (:board-size state)
        box-size (size-boxes state)
        remainder (rem box boxes-per-row)
        divisor (/ (- box remainder) boxes-per-row)
        left (+ left-x (* remainder box-size))
        top (+ top-y (* divisor box-size))]
    [left top (+ left box-size) (+ top box-size)]))

(defn mouse-in-box? [box state mouse-x mouse-y]
  (let [perimeter (box-perimeter box state)
        left (first perimeter)
        top (second perimeter)
        right (nth perimeter 2)
        bottom (nth perimeter 3)]
    (and (>= mouse-x left) (< mouse-x right) (>= mouse-y top) (< mouse-y bottom))))

(defn draw-box [box state]
  (let [perimeter (box-perimeter box state)
        box-size (size-boxes state)
        left (first perimeter)
        top (second perimeter)
        center-x (+ left (/ box-size 2))
        center-y (+ top (/ box-size 2))
        player1-piece (:piece (:player1 state))
        player2-piece (:piece (:player2 state))
        player (cond (= player1-piece ((:board state) box)) :player1
                     (= player2-piece ((:board state) box)) :player2)]
    (draw-piece {:current-player player} center-x center-y)))



