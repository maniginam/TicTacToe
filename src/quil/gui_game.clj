(ns quil.gui-game
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [ttt.core :refer :all]
            ))

;(defmethod validate-player-count :gui [console]
;  (loop [players (q/state :players)]
;    (if (int? players)
;      players
;      (recur (q/state :players)))))


