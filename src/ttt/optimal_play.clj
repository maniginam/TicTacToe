(ns ttt.optimal-play
  (:require
    [ttt.board :refer :all]))

(defn get-score [winner depth]
  (cond (= winner 1) (- 10 depth)
        (= winner 2) (- depth 10)
        :else 0))

(defn get-next-player [player]
  (if (= player 1) 2 1))

(defn get-player-piece [player]
  (if (= player 1) "X" "O"))

(defn get-box-scores [board player depth]
  (for [box (open-boxes board)]
    (let [test-board (assoc (dissoc board (board box)) (board box) (get-player-piece player))
          box-score (cond (is-win? test-board) (get-score player depth)
                          (full-board? test-board) (get-score 0 depth)
                          :else
                          (if (= player 1)
                            (apply min (get-box-scores test-board (get-next-player player) (inc depth)))
                            (apply max (get-box-scores test-board (get-next-player player) (inc depth)))))]
      box-score)))

(defn play-optimal-box [board player]
  (if (empty-board? board)
    (let [corners [0 2 6 8]]
      (nth corners (rand-int 4)))
    (let [depth 0
          box-scores (get-box-scores board player depth)
          open-boxes (open-boxes board)
          min (apply min box-scores)
          max (apply max box-scores)]
      (loop [index 0]
        (if (= player 1)
          (if (= max (nth box-scores index))
            (nth open-boxes index)
            (recur (inc index)))
          (if (= min (nth box-scores index))
            (nth open-boxes index)
            (recur (inc index))))))))