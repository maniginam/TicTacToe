(ns ttt.computer-only-game
  (:require [ttt.game :refer [PlayGame]])
  (:import (ttt.game PlayGame PlayTTT)))

(def board
  (sorted-map 0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8))

;(defrecord PlayTTT [human]
;  PlayGame
;  (play-ttt [this]
;    (loop [board board
;           player 1]
;      (cond (is-win? board) (get-next-player player)
;            (full-board? board) 0
;            :else (let [box-played (get-box-played board player human)]
;                    (put-piece-on-board board box-played (get-player-piece player))
;                    (recur (put-piece-on-board board box-played (get-player-piece player))
;                           (get-next-player player)))))))
