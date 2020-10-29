(ns spec-helper
  (:require [speclj.core :refer :all]))

;(defn play-test-game [game played-boxes]
;  (save-game db-test-name game)
;  (loop [game game boxes played-boxes]
;    (println "game: " game)
;    (save-turn db-test-name game)
;    (if (empty? boxes)
;      game
;      (let [box (first boxes)]
;        (recur (play-turn game box) (rest boxes))))))