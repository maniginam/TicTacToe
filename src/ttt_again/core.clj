;(ns ttt-again.core
;  (:require [ttt.optimal-play :refer :all]))
;
;(def player1 {:type :ai :piece "X"})
;
;(defmulti move :player)
;(defmethod move :ai [board player] (play-optimal-box board player))