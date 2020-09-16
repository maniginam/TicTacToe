(ns ttt.default-game
  (:require [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :refer :all]))

(defmethod validate-player-count :default [console] 0)

(defmethod assign-type :default [console users]
  :default)

(defmethod board-size-prompt :default [console] nil)

(defmethod set-board-size :default [console] 3)

(defmethod select-box :default [game]
  (let [board (:board game)
        player ((:current-player game) game)]
    (play-optimal-box board (:player-num player))))

(defmethod report :default [console results]
    results)

;(defn run-game [console]
;  (let [game (setup-game console)]
;    (report (play-game game))))