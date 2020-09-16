(ns ttt.terminal
  (:require [clojure.java.io :as io]
            [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :refer :all]
            [ttt.user-inputs :refer :all]))

(defmethod validate-player-count :terminal [console]
  (loop [input (ask-num-of-players)
         tries 0]
    (cond (>= tries 3) (too-many-players-tries)
          (valid-user-count? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (ask-num-of-players)) (inc tries)))))

(defn validate-user-position [console]
  (loop [input (offer-position console)
         tries 0]
    (cond (>= tries 3) (too-many-tries)
          (valid-position? input) (set-position input)
          :else (recur (if (= (inc tries) 3) nil (offer-position console)) (inc tries)))))

(defmethod assign-type :terminal [console users]
  (cond (zero? users) :computer
        (= 2 users) :human
        :else (validate-user-position console)))

(defmethod set-board-size :terminal [console]
  (loop [input (board-size-prompt console)
         tries 0]
    (cond (>= tries 3) (std-board-msg)
          (valid-for-int-type? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (board-size-prompt console)) (inc tries)))))

(defn draw-board [board]
  ;(let [row-size (Math/sqrt (count board))
  ;      board-vec (range (count board))]
  ;  (loop [board board-vec
  ;         row (take row-size board)
  ;         board-str []]
  ;    (if (empty? board)
  ;      (println (apply str (interpose (str (repeat (dec row-size) "\n===||==\n")) board-str)))
  ;      (recur (drop row-size board) (take row-size (drop row-size board)) (conj board-str (apply str (interpose " || " row))))))))
  (println " " (board 0) "||" (board 1) "||" (board 2))
  (println "====||===||====")
  (println " " (board 3) "||" (board 4) "||" (board 5))
  (println "====||===||====")
  (println " " (board 6) "||" (board 7) "||" (board 8)))

(defn validate-box-input [board]
  (loop [input (ask-for-box)]
    (if (valid-box? input board)
      (Integer/parseInt input)
      (recur (ask-for-box)))))

(defmethod make-move :human [player board]
  (draw-board board)
  (println (str (:piece player) "'s Turn"))
  (let [box (validate-box-input board)
        new-board (put-piece-on-board board box (:piece player))]
    box))

(defmethod make-move :computer [player board]
  (let [box (play-optimal-box board (:player-num player))
        new-board (put-piece-on-board board box (:piece player))]
    (draw-board new-board)
    (println (str "Computer plays box " box))
    box))

(defmethod select-box :terminal [game]
  (let [player ((:current-player game) game)
        board (:board game)]
    (make-move player board)))

(defmethod report :terminal [console results]
  (println results))


