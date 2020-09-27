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

(defn get-box-scores [board player-num depth]
  (for [box (open-boxes board)]
    (let [piece (get-player-piece player-num)
          test-board (replace {box piece} board)
          box-score (cond (is-win? test-board) (get-score player-num depth)
                          (full-board? test-board) (get-score 0 depth)
                          :else
                          (if (= player-num 1)
                            (apply min (get-box-scores test-board (get-next-player player-num) (inc depth)))
                            (apply max (get-box-scores test-board (get-next-player player-num) (inc depth)))))]
      box-score)))

(defn check-for-win [board player-num]
  (for [box (open-boxes board) piece ["X" "O"]]
    (let [piece (get-player-piece player-num)
          test-board (replace {box piece} board)]
      (if (is-win? test-board) box))))

(defn play-optimal-box [board player-num]
  (cond (empty-board? board)
        (let [box-count (count board)
              row-size (int (Math/sqrt (count board)))
              corners [0 (dec row-size) (- box-count row-size) (dec box-count)]
              box (nth corners (rand-int 4))]
          box)
        (>= (count (open-boxes board)) 9) (let [box (first (check-for-win board player-num))] (if (nil? box) (nth (open-boxes board) (rand-int (count (open-boxes board)))) box))
        :else (let [depth 0
                    box-scores (get-box-scores board player-num depth)
                    open-boxes (open-boxes board)
                    min (apply min box-scores)
                    max (apply max box-scores)
                    box (loop [index 0]
                          (if (= player-num 1)
                            (if (= max (nth box-scores index))
                              (nth open-boxes index)
                              (recur (inc index)))
                            (if (= min (nth box-scores index))
                              (nth open-boxes index)
                              (recur (inc index)))))]
                box)))