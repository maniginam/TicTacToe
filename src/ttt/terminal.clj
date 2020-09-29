(ns ttt.terminal
  (:require [clojure.java.io :as io]
            [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :refer :all]
            [ttt.user-inputs :refer :all]
            [ttt.console-messages :as msg]))

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

(defn get-level [input]
  (cond (= "H" (.toUpperCase input)) :hard
        (= "M" (.toUpperCase input)) :medium
        (= "E" (.toUpperCase input)) :easy))

(defmethod set-level :terminal [console]
  (println (msg/level-prompt))
  (loop [input (read-line)
         tries 0]
    (cond (>= tries 3) (too-many-tries {:input :level})
          (valid-level? input) (get-level input)
          (= tries 2) (recur nil 3)
          :else (do (println (msg/level-prompt))
                    (recur (read-line) (inc tries))))))

(defmethod report :terminal [console results]
  (println results))

(defn start-new-game? [input]
  (cond (= "Y" (.toUpperCase input)) true
        (= "N" (.toUpperCase input)) false
        :else (do (println (str input " is not a valid option.  Enter Y or N")) false)))

(defmethod play-again? :terminal [console]
  (loop [input (get-play-again-input)
         tries 0]
    (cond (>= tries 3) (too-many-tries {:input :play-again})
          (valid-play-again-input? input) (start-new-game? input)
          :else (recur (if (= (inc tries) 3) nil (get-play-again-input)) (inc tries)))))

(defmethod end-game :terminal [console]
  (println "Ok.  Well, Let's Play Again Soon!  Bye!"))

(defmethod draw-board :terminal [game board]
  (let [row-size (int (Math/sqrt (count board)))
        rows (get-rows board)
        break-line (str "=====" (apply str (repeat (- row-size 1) "||=====")))]
    (doseq [row rows]
      (println (apply str "  " (interpose "  ||  " row)))
      (if (not (= (last rows) row))
        (println break-line)))))