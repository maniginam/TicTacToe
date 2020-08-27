(ns ttt.terminal-gui
  (:require [ttt.board :refer :all]))

(defn ask-num-of-players []
  (println "How many humans are playing?  Please enter 0, 1, or 2")
  (read-line))

(defn test-num-of-players-input [input]
  (println "0 Computer v Computer")
  (println "1 Human v Computer")
  (println "2 Human v Human")
  (println "How many humans are playing?  Please enter 0, 1, or 2")
  (try (Integer/parseInt input)
       (catch Exception e (println "Wrong Input!")
                          (test-num-of-players-input (ask-num-of-players)))))

(defn offer-player-count-options []
  (println "0 Computer v Computer")
  (println "1 Human v Computer")
  (println "2 Human v Human")
  (let [players (test-num-of-players-input (ask-num-of-players))]
    (if (or (< players 0) (> players 2))
      (do (println "Entry not an option...  ")
          (offer-player-count-options))
      players)))
