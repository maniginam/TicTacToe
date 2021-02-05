(ns ttt.master.optimal-play-specs
  (:require [speclj.core :refer :all]
            [ttt.master.optimal-play :as optimal]))

(def player1 1)
(def player2 2)

(def empty-board [0 1 2 3 4 5 6 7 8])
(def corners [0 2 6 8])
(def full-board-cats-game ["X" "O" "X" "O" "O" "X" "X" "X" "O"])
(def full-board-player1-wins ["X" "O" "X" "O" "O" "X" "O" "O" "X"])
(def one-box-open-cats-game-6 ["X" "O" "X" "O" "O" "X" 6 "X" "O"])
(def one-box-open-player1-wins-8 ["X" "O" "X" "O" "O" "X" "O" "X" 8])
(def two-boxes-open-78 ["X" "O" "X" "O" "O" "X" "O" 7 8])
(def two-boxes-open-68 ["X" "O" "X" "O" "O" "X" 6 "X" 8])
(def three-boxes-open-678 ["X" "O" "X" "O" "O" "X" 6 7 8])
(def four-boxes-open-4678 ["X" "O" "X" "O" 4 "X" 6 7 8])
(def one-box-played-0 ["X" 1 2 3 4 5 6 7 8])

(describe "Tests for an optimal box to play"

  (it "gets score of move"
    (should= 10 (optimal/get-score player1 0))
    (should= -10 (optimal/get-score player2 0))
    (should= 9 (optimal/get-score player1 1))
    (should= -8 (optimal/get-score player2 2)))

  (it "gets next player"
    (should= 1 (optimal/get-next-player 2))
    (should= 2 (optimal/get-next-player 1)))

  (it "gets player piece"
    (should= "O" (optimal/get-player-piece 2))
    (should= "X" (optimal/get-player-piece 1)))

  (it "one box [6] open: cats game"
    (should= [0] (optimal/get-box-scores one-box-open-cats-game-6 player1 0))
    (should= 6 (optimal/play-optimal-box one-box-open-cats-game-6 player1 0)))

  (it "one box [8] open: player 1 win"
    (should= [10] (optimal/get-box-scores one-box-open-player1-wins-8 player1 0))
    (should= 8 (optimal/play-optimal-box one-box-open-player1-wins-8 player1 0)))

  (it "two boxes [7 8] open: player2: 7: player 2 wins; 8: cats game"
    (should= [-10 0] (optimal/get-box-scores two-boxes-open-78 player2 0))
    (should= 7 (optimal/play-optimal-box two-boxes-open-78 player2 0)))

  (it "two boxes [6 8] open: player2: 6: player 1 wins; 8: cats game"
    (should= [9 0] (optimal/get-box-scores two-boxes-open-68 player2 0))
    (should= 8 (optimal/play-optimal-box two-boxes-open-68 player2 0)))

  (it "three boxes [6 7 8] open: player1: 6: player 1 wins; 8: cats game"
    (should= [-9 0 10] (optimal/get-box-scores three-boxes-open-678 player1 0))
    (should= 8 (optimal/play-optimal-box three-boxes-open-678 player1 0)))

  (it "four boxes [4 6 7 8] open: player2: 6: player 1 wins; 8: cats game"
    (should= [9 9 9 0] (optimal/get-box-scores four-boxes-open-4678 player2 0))
    (should= 8 (optimal/play-optimal-box four-boxes-open-4678 player2 0)))

  (it "one box played: player2"
    (should= [5 5 5 0 5 5 5 5] (optimal/get-box-scores one-box-played-0 player2 0))
    (should= 4 (optimal/play-optimal-box one-box-played-0 player2 0)))

  (it "empty board: player 1 plays random corner"
    (loop [results [] i 0]
      (if (< i 20)
        (recur (conj results (optimal/play-optimal-box empty-board player1 0)) (inc i))
        (should= [] (filter #(and (odd? %) (not (= 4 %))) results)))))

  (it "gets box scores for 4x4 board"
    (should= [10] (optimal/get-box-scores ["X" "X" "X" 3 "O" "O" "O" "X" "O" "O" "O" "X" "X" "O" "O" "O"] 1 0))
    (should= [10 0] (optimal/get-box-scores ["X" "X" "X" 3 "O" "O" "O" "X" "O" "O" "O" "X" "X" "O" "O" 15] 1 0))
    (should= [10 0 -9] (optimal/get-box-scores ["X" "X" "X" 3 "O" "O" "O" "X" "O" "O" "O" 11 "X" "O" "O" 15] 1 0))
    (should= [10 -9 0 -9] (optimal/get-box-scores ["X" "X" "X" 3 4 "O" "O" "X" "O" "O" "O" 11 "X" "O" "O" 15] 1 0))
    (should= [10 -9 -9 0 -9] (optimal/get-box-scores ["X" "X" "X" 3 4 "O" 6 "X" "O" "O" "O" 11 "X" "O" "O" 15] 1 0))
    (should= [-9 -9 -9 -9 0 -9] (optimal/get-box-scores [0 "X" "X" 3 4 "O" 6 "X" "O" "O" "O" 11 "X" "O" "O" 15] 1 0))
    (should= [-9 -9 -9 -9 0 -9 -9] (optimal/get-box-scores [0 "X" "X" 3 4 "O" 6 "X" "O" "O" "O" 11 "X" "O" 14 15] 1 0))
    (should= [-9 -9 -9 -9 0 -9 -9 -9] (optimal/get-box-scores [0 "X" "X" 3 4 "O" 6 "X" "O" "O" "O" 11 "X" 13 14 15] 1 0))
    (should= [-9 -9 -9 -9 0 -9 -9 -9 -9] (optimal/get-box-scores [0 "X" "X" 3 4 "O" 6 "X" "O" "O" "O" 11 12 13 14 15] 1 0))))


