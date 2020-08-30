(ns ttt.core
  (:require
    ;[quil-gui.gui :refer :all]
    [ttt.game :refer :all]
    [ttt.terminal-gui :refer :all]
    [ttt.board :refer :all]
    )
  (:import (ttt.game PlayTTT)))

(defn start-game [players human]
  (println "Let's Play Tic-Tac-Toe!")
  (if (or (= players 2) (= human 1)) (draw-board board)))

(defn ask-human-for-game-piece [tries input]
  (let [selection (set-human-game-piece tries input)]
  (cond (or (zero? selection)) (do (bad-piece-selection tries input) (ask-human-for-game-piece (inc tries) (offer-x-or-o)))
            (> selection 2) (do (bad-piece-selection tries input) 2)
            :else selection)))

(defn welcome []
  (println "Welcome to Tic-Tac-Toe!")
  (let [players (who-is-playing 0)
        human (cond (= players 0) 0
                    (= players 1) (ask-human-for-game-piece 0 (offer-x-or-o))
                    :else nil)]
    (start-game players human)
    (println (game-results (play-ttt (PlayTTT. human))))))

(defn -main []
  (welcome))

