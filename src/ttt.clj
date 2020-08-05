(ns ttt
  (:require
    [OptimalPlay :refer :all]
    [GameRules :refer :all]
    [Board :refer :all]))

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

(defn ask-user-for-box-to-play []
  (println "Select a box 0-8")
  (let [selection (read-line)]
    selection))

(defn human-turn [board player is-test?]
  (println "Your Turn")
  (draw-board board)
  (if is-test?
    (play-optimal-box board player)
    (loop [selection (ask-user-for-box-to-play)]
      (if (= "" selection)
        (do (println (string-message selection))
            (recur (ask-user-for-box-to-play)))
        (if (is-good-box? board (Integer/parseInt selection))
          (Integer/parseInt selection)
          (do (println (bad-box-message (Integer/parseInt selection)))
              (recur (ask-user-for-box-to-play))))))))

(defn play-ttt [human is-test?]
  (let [computer (get-next-player human)]
    (loop [board board
           player 1]
      (cond (is-win? board) (get-next-player player)
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
