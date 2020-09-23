(ns ttt.terminal
  (:require [clojure.java.io :as io]
            [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :refer :all]
            [ttt.user-inputs :refer :all])
  (:import (ttt.core NewGame)))

(defmethod validate-player-count :terminal [console]
  (loop [input (ask-num-of-players)
         tries 0]
    (cond (>= tries 3) (too-many-players-tries)
          (valid-user-count? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (ask-num-of-players)) (inc tries)))))

(defmethod set-board-size :terminal [console]
  (loop [input (board-size-prompt console)
         tries 0]
    (cond (>= tries 3) (std-board-msg)
          (valid-for-int-type? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (board-size-prompt console)) (inc tries)))))

(defmethod report :terminal [console results]
  (println results))

;(def terminal-game (NewGame.
;                     (let [console {:console :terminal}users (validate-player-count console)
;                           player1 (setup/assign-player (assoc console :users users) :player1)
;                           player2 (setup/assign-player (assoc console :users users :player1 player1) :player2)
;                           board (create-board (set-board-size console))]
;                       (assoc console :current-player :player1 :box-played nil :users users :player1 player1 :player2 player2 :board board))))


