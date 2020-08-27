(ns test-ttt
  (:require
    [speclj.core :refer :all]
    [ttt.core :refer :all]
    [ttt.optimal-play :refer :all]
    [ttt.board :refer :all]
    [ttt.human-box-input :refer :all]))

(describe "tic tac toe game setup: "
  (def this-is-a-test true)
  (def human-is-player1 1)
  (def human-is-player2 2)
  (def computer-is-player1 1)
  (def computer-is-player2 2)
  (def computer-wins 2)

  (def empty-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})
  (def full-board-cats-game {0 "X" 1 "X" 2 "O" 3 "O" 4 "O" 5 "X" 6 "X" 7 "O" 8 "X"})
  (def game-is-won-board {0 "X" 1 1 2 2 3 3 4 "X" 5 5 6 6 7 7 8 "X"})
  (def one-box-left-cats-game-8 {0 "X" 1 "X" 2 "O" 3 "O" 4 "O" 5 "X" 6 "X" 7 "O" 8 8})

  (it "returns game results"
      (should= "O Wins!" (game-results 2))
      (should= "X Wins!" (game-results 1))
      (should= "Cat's Game" (game-results 0)))

  (it "plays TTT"
      (loop [winners []
             game 10]
            (if (zero? game)
              (should= [] (remove zero? winners))
              (recur (conj winners (play-ttt 0)) (dec game)))))

  (it "gets human game-piece choice"
      (should= 1 (set-human-game-piece 0 "x"))
      (should= 1 (set-human-game-piece 1 "x"))
      (should= 1 (set-human-game-piece 0 "X"))
      (should= 2 (set-human-game-piece 0 "O"))
      (should= 2 (set-human-game-piece 2 "rex")))
)
