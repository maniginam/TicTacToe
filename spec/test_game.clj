(ns test-game
  (:require
    [speclj.core :refer :all]
    [ttt.core :refer :all]
    [ttt.game :refer :all]
    [ttt.optimal-play :refer :all]
    [ttt.board :refer :all]
    [ttt.human-box-input :refer :all]))

(describe "tic tac toe game setup: "

  (def comp-player1 {:player 1 :player-type :ai})
  (def comp-player2 {:player 2 :player-type :ai})

  (it "returns game results"
      (should= "O Wins!" (game-results 2))
      (should= "X Wins!" (game-results 1))
      (should= "Cat's Game" (game-results 0)))

  (it "plays TTT"
    (loop [winners []
             game 1]
      (if (zero? game)
        (should= [] (remove zero? winners))
        (recur (conj winners (play-ttt 0)) (dec game)))))


)
