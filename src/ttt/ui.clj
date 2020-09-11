(ns ttt.ui
  (:require [clojure.java.io :as io]
            [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :refer :all]))


(defmethod welcome :terminal [console]
  (println "Welcome to Tic-Tac-Toe!"))

(defn bad-users-type [input]
  (println (str input " is not a valid option"))
  false)

(defn valid-user-count-type? [input]
  (int? (try (Integer/parseInt input)
             (catch Exception e (bad-users-type input)))))

(defn valid-user-count-option? [input]
  (and (>= input 0) (<= input 2)))

(defn bad-user-count [input]
  (println (str input " is not an option"))
  false)

(defn valid-user-count? [input]
  (if (true? (valid-user-count-type? input))
    (if (valid-user-count-option? (Integer/parseInt input))
      true
      (bad-user-count input))))

(defn ask-num-of-players []
  (println "0 Computer v Computer")
  (println "1 Human v Computer")
  (println "2 Human v Human")
  (println "How many humans are playing?  Please enter 0, 1, or 2")
  (read-line))

(defn too-many-players-tries []
  (println "Nevermind, I'll play on my own.")
  0)

(defmethod validate-player-count :terminal [console]
  (loop [input (ask-num-of-players)
         tries 0]
    (cond (>= tries 3) (too-many-players-tries)
          (valid-user-count? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (ask-num-of-players)) (inc tries)))))

(defmethod offer-position :terminal [console]
  (println "X goes first.  Do you want to be X or O")
  (read-line))

(defn valid-position-type? [input]
  (if (= "" input)
    (do (println "You didn't enter anything") false)
    (not (false? (try (.toUpperCase input)
                      (catch Exception e (println (str input " not valid option")) false))))))

(defn valid-position? [input]
  (if (valid-position-type? input)
    (if (or (= "X" (.toUpperCase input)) (= "O" (.toUpperCase input)))
      true
      (do (println (str input " is not an option.")) false))))

(defn set-position [input]
  (if (= "X" (.toUpperCase input)) :human :computer))

(defn too-many-tries []
  (println "Nevermind, I'll go first.")
  :computer)

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

(defn assign-player2-type [player1]
  (if (= (:type player1) :human) :computer :human))

(defn draw-board [board]
  (println " " (board 0) "||" (board 1) "||" (board 2))
  (println "====||===||====")
  (println " " (board 3) "||" (board 4) "||" (board 5))
  (println "====||===||====")
  (println " " (board 6) "||" (board 7) "||" (board 8)))

(defn ask-for-box []
  (println "Select a box 0-8")
  (read-line))

(defn valid-box-type? [input]
  (int? (try (Integer/parseInt input)
             (catch Exception e (println (str input " is not a valid option")) false))))

(defn box-open? [input board]
  (if (is-box-selection-open? board input)
    true
    (do (println (str "box " input " is already taken")) false)))

(defn valid-box-option? [input board]
  (if (and (>= input 0) (< input (count board)))
    true
    (do (println (str input " is not a box option")) false)))

(defn valid-box? [input board]
  (if (valid-box-type? input)
    (let [input (Integer/parseInt input)]
      (if (valid-box-option? input board)
        (box-open? input board)
        false))))

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
  (let [box (play-optimal-box board (:player player))
        new-board (put-piece-on-board board box (:piece player))]
    (draw-board new-board)
    (println (str "Computer plays box " box))
    box))

(defmethod report :terminal [console results]
    (println results))


