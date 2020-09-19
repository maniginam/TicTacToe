(ns quil.boxes
  (:require [ttt.core :refer :all]
            [quil.core :as q]
            [quil.gui-game :refer :all]
            [quil.dimensions :as dim]
            [quil.game-pieces :refer :all]))

(def box-size (/ (- dim/board-size 100) 3))

(defn box-perimeter [box state]
  (let [left-x (/ dim/board-size 14)
        top-y (/ dim/board-size 14)
        board (:board state)
        board-size (:board-size state)
        remainder (rem box board-size)
        divisor (/ (- box remainder) board-size)
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

;(defn draw-box [box state left-x top-y]
;  (let [player1-piece (:piece (:player1 state))
;        player2-piece (:piece (:player1 state))
;        player (cond (= player1-piece ((:board state) box)) :player1
;                     (= player2-piece ((:board state) box)) :player2)
;        center-x (+ left-x (/ box-size 2))
;        center-y (+ top-y (/ box-size 2))]
;    (draw-piece {:current-player player} left-x top-y)))

(defn draw-box [box state]
  (let [perimeter (box-perimeter box state)
        left (first perimeter)
        top (second perimeter)
        center-x (+ left (/ box-size 2))
        center-y (+ top (/ box-size 2))
        player1-piece (:piece (:player1 state))
        player2-piece (:piece (:player2 state))
        player (cond (= player1-piece ((:board state) box)) :player1
                     (= player2-piece ((:board state) box)) :player2)]
    ;(if (= player :player1) (draw-X center-x center-y) (draw-O center-x center-y))))
    (draw-piece {:current-player player} center-x center-y)))



