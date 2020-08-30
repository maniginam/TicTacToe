(ns ttt.game
  (:require
    ;[quil-gui.gui :refer :all]
    [ttt.optimal-play :refer :all]
    [ttt.game-rules :refer :all]
    [ttt.board :refer :all]
    [ttt.human-box-input :refer :all]
    )
  )

(defn game-results [winner]
  (let [results-msg
        (cond (zero? winner) (str "Cat's Game")
              (= winner 1) (str "X Wins!")
              :else (str "O Wins!"))]
    results-msg))

;(defn computer-turn [board player]
;  (let [box (play-optimal-box board player)]
;    (println "Computer plays box" box)
;    box))

(defprotocol Turn
  (get-box [this] "method to get box played")
 )

(defrecord ComputerTurn [board player]
  Turn
  (get-box [this] (play-optimal-box (:board this) (:player this))))

(defn human-turn-message [board player human]
  (if (= human player)
    (println "Your Turn")
    (println (str (get-player-piece player) "'s Turn"))))

(defn human-turn [board player human]
  (human-turn-message board player human)
  (get-human-selection board (ask-user-for-box-to-play)))

(defn offer-x-or-o []
  (println "X goes first.  Do you want to be X or O")
  (read-line))

(defn bad-piece-selection [tries user-input]
  (if (< tries 2)
    (println (str user-input " is not an option.  Try again..."))
    (println (str "Nevermind, I'll go first."))))

(defn set-human-game-piece [tries user-input]
  (cond (> tries 1) 3
          (or (= user-input "X") (= user-input "x")) 1
          (or (= user-input "O") (= user-input "o")) 2
        :else 0))

(defn get-box-played [board player human]
  (cond (nil? human) (human-turn board player human)
        (= human 0) (get-box (ComputerTurn. board player))
        :else (if (= human player) (human-turn board player human) (get-box (ComputerTurn. board player)))))

(defprotocol PlayGame
  (play-ttt [this] "method to play game"))

(defrecord PlayTTT [human]
  PlayGame
  (play-ttt [this]
    (loop [board board
           player 1]
      (cond (is-win? board) (get-next-player player)
            (full-board? board) 0
            :else (let [box-played (get-box-played board player human)]
                    (put-piece-on-board board box-played (get-player-piece player))
                    (recur (put-piece-on-board board box-played (get-player-piece player))
                           (get-next-player player)))))))

;(defn play-ttt [human]
  ;(loop [board board
  ;       player 1]
  ;  (cond (is-win? board) (get-next-player player)
  ;        (full-board? board) 0
  ;        :else (let [box-played (get-box-played board player human)]
  ;                (put-piece-on-board board box-played (get-player-piece player))
  ;                (recur (put-piece-on-board board box-played (get-player-piece player))
  ;                       (get-next-player player))))))

(defn who-is-playing [tries]
  (if (zero? tries)
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



(defn get-human-game-piece []
  )


