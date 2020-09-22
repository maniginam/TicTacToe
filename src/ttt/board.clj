(ns ttt.board
  (:require [ttt.core :refer :all]
            [ttt.console-messages :as message]))

(def player1-piece "X")
(def player2-piece "O")
(def pieces {:player1 "X" :player2 "O"})
(def player-nums {:player1 1 :player2 2})
(def game-pieces {:player1-piece "X" :player2-piece "O"})

(defn create-board [size]
  (let [grid-size (* size size)
        board (if (= 1 grid-size) {0 0} (apply hash-map (mapcat #(repeat 2 %) (range grid-size))))]
    board))

(defmethod draw-board :default [game board] nil)
(defmethod draw-board :terminal [game board]
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

(defn get-rows [board]
  (let [size (count board)
        grid-size (int (Math/sqrt size))
        rows (for [row (range 0 grid-size)]
               (if (< (board row) grid-size)
                 (map #(board %) (range (* row grid-size) (* (inc row) grid-size)))))]
    rows))

(defn is-row-win? [board]
  ;(let [rows (get-rows board)
  ;      size (count board)
  ;      grid-size (int (Math/sqrt size))
  ;      x-per-row (for [row rows] (filter #(= "X" %) row))
  ;      o-per-row (for [row rows] (filter #(= "O" %) row))
  ;      x-win (filter #(= grid-size (count %)) x-per-row)
  ;      o-win (filter #(= grid-size (count %)) o-per-row)]
  ;      x-win))
(or (= (board 0) (board 1) (board 2))
    (= (board 3) (board 4) (board 5))
    (= (board 6) (board 7) (board 8))))

(defn is-col-win? [board]
  (or (= (board 0) (board 3) (board 6))
      (= (board 1) (board 4) (board 7))
      (= (board 2) (board 5) (board 8))))

(defn is-diag-win? [board]
  (or (= (board 0) (board 4) (board 8))
      (= (board 2) (board 4) (board 6))))

(defn is-win? [board]
  (or (is-row-win? board) (is-col-win? board) (is-diag-win? board)))

(defn put-piece-on-board [board box-played game-piece]
  (assoc (dissoc board box-played) box-played game-piece))

(defn open-boxes [board]
  (let [open-boxes (remove #(or (= "X" (second %)) (= "O" (second %))) board)]
    (sort (keys open-boxes))))

(defn full-board? [board]
  (= [] (open-boxes board)))

(defn empty-board? [board]
  (= 9 (count (open-boxes board))))

(defn does-box-exist? [box]
  (and (>= box 0) (< box 9)))

(defn is-box-selection-open? [board played-box]
  (let [open-boxes (open-boxes board)]
    (= [played-box] (filter #(= played-box %) open-boxes))))

(defn is-good-box? [board box]
  (and (does-box-exist? box) (is-box-selection-open? board box)))
