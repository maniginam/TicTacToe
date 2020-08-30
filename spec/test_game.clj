(ns test-game
  (:require
    [speclj.core :refer :all]
    [ttt.core :refer :all]
    [ttt.game :refer :all]
    [ttt.optimal-play :refer :all]
    [ttt.board :refer :all]
    [ttt.human-box-input :refer :all])
  (:import (ttt.game PlayTTT)))

(describe "tic tac toe game setup: "
  (it "returns game results"
      (should= "O Wins!" (game-results 2))
      (should= "X Wins!" (game-results 1))
      (should= "Cat's Game" (game-results 0)))

  (it "plays TTT"
    (loop [winners []
             game 1]
      (if (zero? game)
        (should= [] (remove zero? winners))
        (recur (conj winners (play-ttt (PlayTTT. 0))) (dec game)))))

  (it "gets human game-piece choice"
      (should= 1 (set-human-game-piece 0 "x"))
      (should= 1 (set-human-game-piece 1 "x"))
      (should= 1 (set-human-game-piece 0 "X"))
      (should= 2 (set-human-game-piece 0 "O"))
      (should= 3 (set-human-game-piece 2 "rex")))
)
