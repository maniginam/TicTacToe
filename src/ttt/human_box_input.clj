(ns ttt.human-box-input
  (:require
    [ttt.board :refer :all]))

(defn ask-user-for-box-to-play []
  (println "Select a box 0-8")
  (let [selection (read-line)]
    selection))

(defn bad-box-message [selection]
  (cond (= "" selection) (str "You didn't enter anything...")
        (not (does-box-exist? selection)) (apply str ["Box " selection " is not a box.  Try again..."])
        :else (apply str "Box " selection " is already taken...  Try again...")))

(defn string-message [input]
  (cond (= "" input) (str "You didn't enter anything...")
        :else (apply str ["Box " input " is not a box.  Try again..."])))

(defn check-box-number [board selection]
  (let [box (Integer/parseInt selection)]
    (if (not (is-good-box? board box))
      (println (bad-box-message box))
      box)))

(defn check-type [board selection]
  (if (= "" selection)
    (println (bad-box-message selection))
    (check-box-number board selection)))

(defn get-human-selection [board selection]
  (loop [selection (check-type board selection)]
    (if (int? selection)
      selection
      (recur (check-type board (ask-user-for-box-to-play))))))



