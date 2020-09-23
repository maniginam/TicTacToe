(ns ttt.board
  (:require [ttt.core :refer :all]
            [ttt.console-messages :as message]))

(def player1-piece "X")
(def player2-piece "O")
(def pieces {:player1 "X" :player2 "O"})
(def player-nums {:player1 1 :player2 2})
(def game-pieces {:player1-piece "X" :player2-piece "O"})

(defn create-board [size]
  (let [box-count (* size size)
        board-map (if (= 1 box-count) {0 0} (apply hash-map (mapcat #(repeat 2 %) (range box-count))))
        board (vec (range box-count))]
    board))

(defn get-rows [board]
  (let [size (count board)
        grid-size (int (Math/sqrt size))
        rows (for [row (range 0 grid-size)]
               (map #(nth board %) (range (* row grid-size) (* (inc row) grid-size))))]
    rows))

(defn did-row-win? [board]
  (let [rows (get-rows board)
        wins-by-row (for [row rows] (every? #(= (first row) %) (rest row)))]
    (not (empty? (filter true? wins-by-row)))))

(defn get-columns [board]
  (let [size (count board)
        grid-size (int (Math/sqrt size))
        columns (for [column (range 0 grid-size)]
                  (map #(nth board %)
                       (take grid-size (iterate (partial + grid-size) column))))]
    columns))

(defn did-col-win? [board]
  (let [columns (get-columns board)
        wins-by-col (for [column columns] (every? #(= (first column) %) (rest column)))]
    (not (empty? (filter true? wins-by-col)))))

(defn get-diagonals [board]
  (let [size (count board)
        grid-size (int (Math/sqrt size))
        diagonal1 (map #(nth board %) (take grid-size (iterate (partial + (inc grid-size)) 0)))
        diagonal2 (map #(nth board %) (take grid-size (iterate (partial + (dec grid-size)) (dec grid-size))))]
    [diagonal1 diagonal2]))

(defn is-diag-win? [board]
  (or (= (nth board 0) (nth board 4) (nth board 8))
      (= (nth board 2) (nth board 4) (nth board 6))))

(defn is-win? [board]
  (if (or (did-row-win? board) (did-col-win? board))
    true
    (let [diagonals (get-diagonals board)
          diagonal1 (first diagonals)
          diagonal2 (second diagonals)
          diag1-win? (every? #(= (first diagonal1) %) diagonal1)
          diag2-win? (every? #(= (first diagonal2) %) diagonal2)]
      (or diag1-win? diag2-win?))))

(defn put-piece-on-board [board box-played game-piece]
  (replace {box-played game-piece} board))
;(assoc (dissoc board box-played) box-played game-piece))

(defn open-boxes [board]
  (filter #(int? %) board))
;(let [open-boxes (remove #(or (= "X" (second %)) (= "O" (second %))) board)]
;  (sort (keys open-boxes))))

(defn full-board? [board]
  (empty? (open-boxes board)))

(defn empty-board? [board]
  (= 9 (count (filter #(int? %) board))))

(defn does-box-exist? [box]
  (and (>= box 0) (< box 9)))

(defn is-box-selection-open? [board played-box]
  (let [open-boxes (open-boxes board)]
    (= [played-box] (filter #(= played-box %) open-boxes))))

(defn is-good-box? [board box]
  (and (does-box-exist? box) (is-box-selection-open? board box)))

(defmethod draw-board :default [game board] nil)

(defmethod draw-board :terminal [game board]
  (let [row-size (int (Math/sqrt (count board)))
        rows (get-rows board)
        break-line (if (< row-size 3) (str "===||=== ") (str "====" (repeat (- row-size 2) (str "||===")) "==== "))]
    (doseq [row rows]
      (println (apply str " " (interpose " || " row)))
      (if (not (= (last rows) row))
        (println break-line)))))


  ;(println " " (nth board 0) "||" (nth board 1) "||" (nth board 2))
  ;(println "====||===||====")
  ;(println " " (nth board 3) "||" (nth board 4) "||" (nth board 5))
  ;(println "====||===||====")
  ;(println " " (nth board 6) "||" (nth board 7) "||" (nth board 8)))
