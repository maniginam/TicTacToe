(ns ttt.core
  (:require
    [ttt.optimal-play :refer :all]
    [ttt.game-rules :refer :all]
    [ttt.board :refer :all]
    [ttt.human-box-input :refer :all]))

(defn game-results [winner]
  (let [results-msg
        (cond (zero? winner) "Cat's Game"
              (= winner 1) "X Wins!"
              :else "O Wins!")]
    (println results-msg)
    results-msg))

(defn computer-turn [board player]
  (let [box (play-optimal-box board player)]
    (println "Computer plays box" box)
    box))

(defn human-turn [board player human]
  (if (= human player)
    (println "Your Turn")
    (println (str (get-player-piece player) "'s Turn")))
  (get-human-selection board))

(defn offer-x-or-o []
  (println "X goes first.  Do you want to be X or O")
  (read-line))

(defn set-human-game-piece [tries user-input]
  (cond (or (= user-input "X") (= user-input "x")) 1
        (or (= user-input "O") (= user-input "o")) 2
        :else (cond (= tries 0) (do (println user-input "is not an option.  Try again...")
                                    (set-human-game-piece (inc tries) (offer-x-or-o)))
                    :else (do (println "Nevermind, I'll go first.") 2))))

(defn get-box-played [board player human]
  (cond (nil? human) (human-turn board player human)
        (= human 0) (computer-turn board player)
        :else (if (= human player) (human-turn board player human) (computer-turn board player))))

(defn play-ttt [players human]
  (loop [board board
         player 1]
    (cond (is-win? board) (get-next-player player)
          (full-board? board) 0
          :else (let [box-played (get-box-played board player human)]
                  (draw-board (put-piece-on-board board box-played (get-player-piece player)))
                  (recur (put-piece-on-board board box-played (get-player-piece player))
                         (get-next-player player))))))

(defn who-is-playing [tries]
  (if (= tries 0)
    (do (println "0 Computer v Computer")
        (println "1 Human v Computer")
        (println "2 Human v Human")))
  (println "How many humans are playing?  Please enter 0, 1, or 2")
  (let [players (try (Integer/parseInt (read-line))
                     (catch Exception e (println "Wrong Input!")
                                        (who-is-playing 1)))]
    (if (or (< players 0) (> players 2))
      (do (println "Entry not an option...  ")
          (who-is-playing 1))
      players)))

(defn start-game [players human]
  (println "Let's Play Tic-Tac-Toe!")
  (if (or (= players 2) (= human 1)) (draw-board board)))

(defn welcome []
  (println "Welcome to Tic-Tac-Toe!")
  (let [players (who-is-playing 0)
        human (cond (= players 0) 0
                    (= players 1) (set-human-game-piece 0 (offer-x-or-o))
                    :else nil)]
    (start-game players human)
    (game-results (play-ttt players human))))

(defn -main []
  (welcome))