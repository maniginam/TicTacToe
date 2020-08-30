(ns ttt.terminal-gui
  (:require [ttt.check-inputs :refer :all]
            [ttt.optimal-play :refer :all]
            [ttt.game-rules :refer :all]
            [ttt.human-box-input :refer :all])
  (:import (ttt.game Turn PlayGame)))


(defn draw-board [board]
  (println " " (board 0) "||" (board 1) "||" (board 2))
  (println "====||===||====")
  (println " " (board 3) "||" (board 4) "||" (board 5))
  (println "====||===||====")
  (println " " (board 6) "||" (board 7) "||" (board 8)))

;(defrecord PrintComputerChoice [box]
;  Turn
;  (get-box [this] (str "Computer plays box " (:box this))))
;


;(def comp-turn (ComputerTurn. (turn )))

(defn gui-welcome []
  (println "Welcome to Tic-Tac-Toe!"))

(defn check-players []
  (println "How many humans are playing?  Please enter 0, 1, or 2")
  (let [input (try (Integer/parseInt (read-line))
                   (catch Exception e (println "Wrong Input!")
                                      (check-players)))]
    (if (or (< input 0) (> input 2))
      (do (println "Entry not an option...  ")
          (check-players))
      input)))

;(defrecord Players [tries]
;  Players
;  (players [this]
;    (println "0 Computer v Computer")
;    (println "1 Human v Computer")
;    (println "2 Human v Human")
;    (println "How many humans are playing?  Please enter 0, 1, or 2")
;    (let [input (try (Integer/parseInt (read-line))
;                     (catch Exception e (str "Wrong Input!")
;                                        (check-players)))]
;      (if (or (< input 0) (> input 2))
;        (do (println "Entry not an option...  ")
;            (check-players))
;        input))))



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
