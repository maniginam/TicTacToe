(ns ttt.board)

(def player1-piece "X")
(def player2-piece "O")
(def game-pieces {:player1-piece "X" :player2-piece "O"})

(defn is-row-win? [board]
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
