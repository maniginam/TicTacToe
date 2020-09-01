(ns ttt.terminal-gui
  (:require [ttt.check-inputs :refer :all]
            [ttt.optimal-play :refer :all]
            [ttt.game-rules :refer :all]
            [ttt.game :refer :all]
            [ttt.human-box-input :refer :all]
            [ttt.board :refer :all]))


(defn draw-board [board]
  (println " " (board 0) "||" (board 1) "||" (board 2))
  (println "====||===||====")
  (println " " (board 3) "||" (board 4) "||" (board 5))
  (println "====||===||====")
  (println " " (board 6) "||" (board 7) "||" (board 8)))

(defn gui-welcome []
  (println "Welcome to Tic-Tac-Toe!"))

(defn get-game-type [input]
  (cond (= 1 input) (str "human-v-comp")
        (= 2 input) (str "human-v-human")
        :else (str "comp-v-comp")))

(defn who-is-playing []
  (println "0 Computer v Computer")
  (println "1 Human v Computer")
  (println "2 Human v Human")
  (println "How many humans are playing?  Please enter 0, 1, or 2")
  (let [players (try (Integer/parseInt (read-line))
                     (catch Exception e (println "Wrong Input!")
                                        (who-is-playing)))]
    (if (or (< players 0) (> players 2))
      (do (println "Entry not an option...  ")
          (who-is-playing))
      players)))



(defn offer-x-or-o []
  (println "X goes first.  Do you want to be X or O")
  (read-line))

(defn bad-piece-selection [input tries]
  (if (< tries 2)
    (println (str input " is not an option.  Try again..."))
    (println (str "Nevermind, I'll go first."))))

(defn set-human-game-piece [input tries]
  (cond (> tries 1) (do (with-out-str (bad-piece-selection input tries)) (set-human-game-piece "O" 0))
        (or (= input "X") (= input "x")) 1
        (or (= input "O") (= input "o")) 2
        :else (do (bad-piece-selection input tries) (set-human-game-piece (offer-x-or-o) (inc tries)))))

;(defn ask-human-for-game-piece [input tries]
;  (let [selection (set-human-game-piece input tries)]
;    (cond (or (zero? selection)) (do (bad-piece-selection input tries) (ask-human-for-game-piece (offer-x-or-o) (inc tries)))
;          (> selection 2) (do (bad-piece-selection input tries) 2)
;          :else selection)))


(defn start-game [game-type board]
  (println "Let's Play Tic-Tac-Toe!")
  (if (not (= game-type "comp-v-comp"))
    (draw-board board)))


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

(defn play-ttt-gui [human]
  (loop [board board
         player 1]
    (cond (is-win? board) (get-next-player player)
          (full-board? board) 0
          :else (let [box-played (get-box-played board player human)]
                  (if (zero? human)
                    (println "Computer Plays " box-played))
                  (draw-board (put-piece-on-board board box-played (get-player-piece player)))
                  (recur (put-piece-on-board board box-played (get-player-piece player))
                         (get-next-player player))))))


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
