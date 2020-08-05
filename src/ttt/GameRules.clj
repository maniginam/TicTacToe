(ns ttt.GameRules)

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

