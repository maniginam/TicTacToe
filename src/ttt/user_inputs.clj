(ns ttt.user-inputs
  (:require [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.console-messages :as message]))

(defn bad-type [input]
  (println (str input " is not a valid option"))
  false)

(defn valid-for-int-type? [input]
  (int? (try (Integer/parseInt input)
             (catch Exception e (bad-type input)))))

(defn valid-user-count-option? [input]
  (and (>= input 0) (<= input 2)))

(defn bad-user-count [input]
  (println (str input " is not an option"))
  false)

(defn valid-user-count? [input]
  (if (true? (valid-for-int-type? input))
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

(defn std-board-msg []
  (println "Nevermind, let's play a standard 3x3 board")
  3)

(defmethod board-size-prompt :terminal [console]
  (println message/board-size-prompt-message)
  (read-line))

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
