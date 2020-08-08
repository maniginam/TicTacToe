(ns TestOptimalPlay
  (:require
    [speclj.core :refer :all]
    [ttt.OptimalPlay :refer :all]
    [ttt.Board :refer :all]))

(describe "Tests for an optimal box to play"
  (def player1 1)
  (def player2 2)

  (def empty-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})
  (def corners [0 2 6 8])
  (def full-board-cats-game {0 "X" 1 "O" 2 "X" 3 "O" 4 "O" 5 "X" 6 "X" 7 "X" 8 "O"})
  (def full-board-player1-wins {0 "X" 1 "O" 2 "X" 3 "O" 4 "O" 5 "X" 6 "O" 7 "O" 8 "X"})
  (def one-box-open-cats-game-6 {0 "X" 1 "O" 2 "X" 3 "O" 4 "O" 5 "X" 6 6 7 "X" 8 "O"})
  (def one-box-open-player1-wins-8 {0 "X" 1 "O" 2 "X" 3 "O" 4 "O" 5 "X" 6 "O" 7 "X" 8 8})
  (def two-boxes-open-78 {0 "X" 1 "O" 2 "X" 3 "O" 4 "O" 5 "X" 6 "O" 7 7 8 8})
  (def two-boxes-open-68 {0 "X" 1 "O" 2 "X" 3 "O" 4 "O" 5 "X" 6 6 7 "X" 8 8})
  (def three-boxes-open-678 {0 "X" 1 "O" 2 "X" 3 "O" 4 "O" 5 "X" 6 6 7 7 8 8})
  (def four-boxes-open-4678 {0 "X" 1 "O" 2 "X" 3 "O" 4 4 5 "X" 6 6 7 7 8 8})
  (def one-box-played-0 {0 "X" 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})


  (it "gets score of move"
      (should= 10 (get-score player1 0))
      (should= -10 (get-score player2 0))
      (should= 9 (get-score player1 1))
      (should= -8 (get-score player2 2)))

  (it "gets next player"
      (should= 1 (get-next-player 2))
      (should= 2 (get-next-player 1)))

  (it "gets player piece"
      (should= "O" (get-player-piece 2))
      (should= "X" (get-player-piece 1)))

  (it "one box [6] open: cats game"
      (should= [0] (get-box-scores one-box-open-cats-game-6 player1 0))
      (should= 6 (play-optimal-box one-box-open-cats-game-6 player1)))

  (it "one box [8] open: player 1 win"
      (should= [10] (get-box-scores one-box-open-player1-wins-8 player1 0))
      (should= 8 (play-optimal-box one-box-open-player1-wins-8 player1)))

  (it "two boxes [7 8] open: player2: 7: player 2 wins; 8: cats game"
      (should= [-10 0] (get-box-scores two-boxes-open-78 player2 0))
      (should= 7 (play-optimal-box two-boxes-open-78 player2)))

  (it "two boxes [6 8] open: player2: 6: player 1 wins; 8: cats game"
      (should= [9 0] (get-box-scores two-boxes-open-68 player2 0))
      (should= 8 (play-optimal-box two-boxes-open-68 player2)))

  (it "three boxes [6 7 8] open: player1: 6: player 1 wins; 8: cats game"
      (should= [-9 0 10] (get-box-scores three-boxes-open-678 player1 0))
      (should= 8 (play-optimal-box three-boxes-open-678 player1)))

  (it "four boxes [4 6 7 8] open: player2: 6: player 1 wins; 8: cats game"
      (should= [9 9 9 0] (get-box-scores four-boxes-open-4678 player2 0))
      (should= 8 (play-optimal-box four-boxes-open-4678 player2)))

  (it "one box played: player2"
      (should= [5 5 5 0 5 5 5 5] (get-box-scores one-box-played-0 player2 0))
      (should= 4 (play-optimal-box one-box-played-0 player2)))

  (it "empty board: player 1 plays random corner"
      (loop [results [] i 0]
            (if (< i 20)
              (recur (conj results (play-optimal-box empty-board player1)) (inc i))
              (do (println results)
                (should= [] (filter false? results))))))
)


