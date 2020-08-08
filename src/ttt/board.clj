(ns ttt.board)

(def board
  (sorted-map 0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8))

(defn draw-board [board]
  (println " " (board 0) "||" (board 1) "||" (board 2))
  (println "====||===||====")
  (println " " (board 3) "||" (board 4) "||" (board 5))
  (println "====||===||====")
  (println " " (board 6) "||" (board 7) "||" (board 8)))

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
  (let [box (if (int? box) box (Integer/parseInt box))]
    (and (does-box-exist? box) (is-box-selection-open? board box))))
