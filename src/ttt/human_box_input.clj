(ns ttt.human-box-input
  (:require
    [ttt.board :refer :all]))

(defn ask-user-for-box-to-play []
  (println "Select a box 0-8")
  (let [selection (read-line)]
    selection))

(defn bad-box-message [selection]
  (cond (= "" selection) "You didn't enter anything..."
        (not (does-box-exist? selection)) (apply str ["Box " selection " is not a box.  Try again..."])
        :else (apply str "Box " selection " is already taken...  Try again...")))

(defn string-message [input]
  (cond (= "" input) "You didn't enter anything..."
        :else (apply str ["Box " input " is not a box.  Try again..."])))

(defn report-bad-selection [selection]
  (println (bad-box-message selection))
  (ask-user-for-box-to-play))

(defn check-box-number [board selection]
  (let [box (Integer/parseInt selection)]
    (if (not (is-good-box? board box))
      (report-bad-selection box)
      box)))

(defn check-type [board selection]
  (if (= "" selection)
    (report-bad-selection selection)
    (check-box-number board selection)))

(defn check-human-selection [board selection]
  (loop [selection selection]
    (if (int? selection)
      selection
      (recur (check-type board selection)))))

(defn get-human-selection [board]
  (let [selection (ask-user-for-box-to-play)]
    (check-human-selection board selection)))

