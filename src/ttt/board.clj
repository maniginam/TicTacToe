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

(defn did-diagonal-win? [board]
  (let [diagonals (get-diagonals board)
        diagonal1 (first diagonals)
        diagonal2 (second diagonals)
        diag1-win? (every? #(= (first diagonal1) %) diagonal1)
        diag2-win? (every? #(= (first diagonal2) %) diagonal2)]
    (or diag1-win? diag2-win?)))

(defn is-win? [board]
  (or (did-row-win? board) (did-col-win? board) (did-diagonal-win? board)))

(defn put-piece-on-board [board box-played game-piece]
  (replace {box-played game-piece} board))

(defn open-boxes [board]
  (filter #(int? %) board))

(defn full-board? [board]
  (empty? (open-boxes board)))

(defn empty-board? [board]
  (every? int? board))

(defn does-box-exist? [box board]
  (and (>= box 0) (< box (count board))))

(defn is-box-open? [board played-box]
  (let [open-boxes (open-boxes board)]
    (= [played-box] (filter #(= played-box %) open-boxes))))

(defn is-good-box? [board box]
  (and (does-box-exist? box board) (is-box-open? board box)))

(defmethod draw-board :default [game board] nil)

(defmethod draw-board :terminal [game board]
  (let [row-size (int (Math/sqrt (count board)))
        rows (get-rows board)
        break-line (str "=====" (apply str (repeat (- row-size 1) "||=====")))]
    (doseq [row rows]
      (println (apply str "  " (interpose "  ||  " row)))
      (if (not (= (last rows) row))
        (println break-line)))))