(ns ttt.check-inputs)

;(defn check-players []
;  (println "How many humans are playing?  Please enter 0, 1, or 2")
;  (let [input (try (Integer/parseInt (read-line))
;                   (catch Exception e (println "Wrong Input!")
;                                      (check-players)))]
;    (if (or (< input 0) (> input 2))
;      (do (println "Entry not an option...  ")
;          (check-players))
;      input)))

