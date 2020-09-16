(ns ttt.multi-board
  (:require [ttt.core :refer :all]
            [ttt.user-inputs :refer :all]
            [ttt.console-messages :as message]))

(defn create-board [size]
  (let [grid-size (* size size)
        board (if (= 1 grid-size) {0 0} (apply hash-map (mapcat #(repeat 2 %) (range grid-size))))]
    board))

(defmethod board-size-prompt :default [console] nil)

(defmethod board-size-prompt :terminal [console]
  (println message/board-size-prompt-message)
  (read-line))

(defmethod set-board-size :default [console] 3)

(defmethod set-board-size :terminal [console]
  (loop [input (board-size-prompt console)
         tries 0]
    (cond (>= tries 3) (std-board-msg)
          (valid-for-int-type? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (board-size-prompt console)) (inc tries)))))

