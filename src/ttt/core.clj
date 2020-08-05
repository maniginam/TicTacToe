(ns ttt.core
  (:gen-class)
  (:require
    [ttt.OptimalPlay :refer :all]
    [ttt.GameRules :refer :all]
    [ttt.Board :refer :all]
    [ttt.HumanBoxInput :refer :all]))

(defn game-results [winner human]
  (let [results-msg
        (cond (zero? winner) "Cat's Game"
              (= winner human) "You Win!"
              :else "I Win!")]
    (println results-msg)
    results-msg))

(defn computer-turn [board player]
  (let [box (play-optimal-box board player)]
    (println "I choose box" box)
    box))

(defn initiate-human-turn [board]
  (println "Your Turn")
  (draw-board board))

(defn human-turn [board player is-test?]
  (initiate-human-turn board)
  (if is-test?
    (play-optimal-box board player)
    (get-human-selection board)))

(defn play-ttt [human is-test?]
  (let [computer (get-next-player human)]
    (loop [board board
           player 1]
      (cond (is-win? board) (do (draw-board board) (get-next-player player))
            (full-board? board) 0
            :else (let [box-played
                        (if (= player human) (human-turn board human is-test?) (computer-turn board computer))]
                    (recur
                      (put-piece-on-board board box-played (get-player-piece player))
                      (get-next-player player)))))))

(defn offer-x-or-o []
  (println "X goes first.  Do you want to be X or O")
  (read-line))

(defn set-human-game-piece [tries user-input]
  (cond (or (= user-input "X") (= user-input "x")) 1
        (or (= user-input "O") (= user-input "o")) 2
        :else (cond (= tries 0) (do (println user-input "is not an option.  Try again...")
                                    (set-human-game-piece (inc tries) (offer-x-or-o)))
                    :else (do (println "Nevermind, I'll go first.") 2))))

(defn welcome [human]
  (println "Let's Play Tic-Tac-Toe!")
  (let [human (if (nil? human) (set-human-game-piece 0 (offer-x-or-o)) human)
        winner (play-ttt human false)]
    (game-results winner human)))

(defn -main []
  (welcome nil))