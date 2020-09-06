(ns ttt.terminal-gui
  (:require [clojure.java.io :as io]
            [ttt.optimal-play :refer :all]
            [ttt.game-rules :refer :all]
            [ttt.board :refer :all]
            [ttt.the-game :refer :all])
  (:import (java.io BufferedReader)))

(def player1-piece "X")
(def player2-piece "O")

(defmethod welcome :terminal [console]
  (println "Welcome to Tic-Tac-Toe!"))

(defn valid-user-count-type? [input]
  (int? (try (Integer/parseInt input)
             (catch Exception e (println (str input " not valid option")) false))))

(defn valid-user-count-option? [input]
  (and (>= input 0) (<= input 2)))

(defn valid-user-count? [input]
  (if (true? (valid-user-count-type? input))
    (valid-user-count-option? (Integer/parseInt input))
    false))

(defmethod ask-num-of-players :terminal [console]
  (println "0 Computer v Computer")
  (println "1 Human v Computer")
  (println "2 Human v Human")
  (println "How many humans are playing?  Please enter 0, 1, or 2")
  (read-line))

(defn validate-player-count [console]
  (loop [input (ask-num-of-players console)
         tries 0]
    (cond (> tries 2) (do (println "Nevermind, I'll play on my own.") 0)
          (valid-user-count? input) (Integer/parseInt input)
          :else (recur (ask-num-of-players console) (inc tries)))))

(defn offer-position []
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
      (do (println (str input " is not an option.") false)))))

(defn set-position [input]
  (if (= "X" (.toUpperCase input)) :human :computer))

(defn validate-user-position []
  (loop [input (offer-position)
         tries 0]
    (cond (>= tries 2) (do (println "Nevermind, I'll play on my own.") :computer)
          (valid-position? input) (set-position input)
          :else (recur (offer-position) (inc tries)))))

(defmethod assign-player :terminal [console player]
  (let [piece (if (= 1 player) player1-piece player2-piece)
        type (cond (zero? (:users console)) :computer
                   (= 2 (:users console)) :human
                   :else (if (= 1 player)
                           (validate-user-position)
                           (if (= (:player1 console) :human) :computer :human)))
        player-map {:player player :type type :piece piece}]
    player-map))

(defn draw-board [board]
  (println " " (board 0) "||" (board 1) "||" (board 2))
  (println "====||===||====")
  (println " " (board 3) "||" (board 4) "||" (board 5))
  (println "====||===||====")
  (println " " (board 6) "||" (board 7) "||" (board 8)))

(defmethod setup-game :terminal [console]
  (let [console (assoc console :piece1 player1-piece :piece2 player2-piece)
        users (validate-player-count console)
        player1 (assign-player (assoc console :users users) 1)
        player2 (assign-player (assoc console :users users :player1 (:type player1)) 2)
        board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}
        game {:gui :terminal :users users :player1 player1 :player2 player2 :board board}]
    game))

(defn ask-for-box []
  (println "Select a box 0-8")
  (read-line))

(defn valid-box-type? [input]
  (int? (try (Integer/parseInt input)
             (catch Exception e (println (str input " not valid option")) false))))

(defn box-open? [input board]
    (if (is-box-selection-open? board input)
      true
      (do (println (str input " box already taken")) false)))

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

(defmethod report :terminal [game]
  (let [results (game-results game)]
    (println results)))


