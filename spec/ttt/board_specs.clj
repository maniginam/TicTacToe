(ns ttt.board-specs
  (:require
    [speclj.core :refer :all]
    [ttt.board :refer :all]))

(def this-is-a-test true)
(def human-is-player1 1)
(def human-is-player2 2)
(def computer-is-player1 1)
(def computer-is-player2 2)
(def computer-wins 2)

(def empty-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})
(def full-board-cats-game {0 "X" 1 "X" 2 "O" 3 "O" 4 "O" 5 "X" 6 "X" 7 "O" 8 "X"})
(def game-is-won-board {0 "X" 1 1 2 2 3 3 4 "X" 5 5 6 6 7 7 8 "X"})
(def one-box-open-cats-game-6 {0 "X" 1 "O" 2 "X" 3 "O" 4 "O" 5 "X" 6 6 7 "X" 8 "O"})

(describe "Board Tests"

  (it "checks rows for win"
    (should-not (is-row-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}))
    (should (is-row-win? {0 "X" 1 "X" 2 "X" 3 3 4 4 5 5 6 6 7 7 8 8}))
    (should-not (is-row-win? {0 "X" 1 "O" 2 "X" 3 3 4 4 5 5 6 6 7 7 8 8}))
    (should (is-row-win? {0 0 1 1 2 2 3 "X" 4 "X" 5 "X" 6 6 7 7 8 8}))
    (should (is-row-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "X" 7 "X" 8 "X"}))
    (should (is-row-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "O" 7 "O" 8 "O"}))
    (should-not (is-row-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "O" 7 "X" 8 "O"}))
    (should-not (is-row-win? {0 "X" 1 "O" 2 "X" 3 3 7 7})))

  (it "checks cols for win"
    (should (is-col-win? {0 "X" 1 "O" 2 "O" 3 "X" 4 4 5 5 6 "X" 7 7 8 8}))
    (should (is-col-win? {0 0 1 "X" 2 2 3 3 4 "X" 5 5 6 6 7 "X" 8 8}))
    (should (is-col-win? {0 0 1 1 2 "O" 3 3 4 4 5 "O" 6 6 7 7 8 "O"}))
    (should-not (is-col-win? {0 0 1 1 2 "O" 3 3 4 4 5 "X" 6 6 7 7 8 "O"}))
    (should-not (is-col-win? {0 "X" 1 "O" 2 "X" 3 3})))

  (it "checks diagonals for win"
    (should (is-diag-win? {0 "X" 1 1 2 2 3 3 4 "X" 5 5 6 6 7 7 8 "X"}))
    (should (is-diag-win? {0 0 1 1 2 "O" 3 3 4 "O" 5 5 6 "O" 7 7 8 "X"}))
    (should-not (is-diag-win? {0 0 1 1 2 "O" 3 3 4 "X" 5 5 6 "O" 7 7 8 "X"}))
    (should-not (is-diag-win? {0 "X" 1 "O" 2 "X" 3 3})))

  (it "checks for win"
    (should (is-win? {0 "X" 1 "X" 2 "X" 3 3 4 4 5 5 6 6 7 7 8 8}))
    (should (is-win? {0 0 1 1 2 2 3 "X" 4 "X" 5 "X" 6 6 7 7 8 8}))
    (should (is-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "X" 7 "X" 8 "X"}))
    (should (is-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "O" 7 "O" 8 "O"}))
    (should-not (is-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "O" 7 "X" 8 "O"}))
    (should (is-win? {0 "X" 1 "O" 2 "O" 3 "X" 4 4 5 5 6 "X" 7 7 8 8}))
    (should (is-win? {0 0 1 "X" 2 2 3 3 4 "X" 5 5 6 6 7 "X" 8 8}))
    (should (is-win? {0 0 1 1 2 "O" 3 3 4 4 5 "O" 6 6 7 7 8 "O"}))
    (should-not (is-win? {0 0 1 1 2 "O" 3 3 4 4 5 "X" 6 6 7 7 8 "O"}))
    (should (is-win? {0 "X" 1 1 2 2 3 3 4 "X" 5 5 6 6 7 7 8 "X"}))
    (should (is-win? {0 0 1 1 2 "O" 3 3 4 "O" 5 5 6 "O" 7 7 8 "X"}))
    (should-not (is-win? {0 0 1 1 2 "O" 3 3 4 "X" 5 5 6 "O" 7 7 8 "X"})))

  (it "returns all open, unplayed boxes in game"
      (should= [0 1 2 3 4 5 6 7 8] (open-boxes empty-board))
      (should= [6] (open-boxes one-box-open-cats-game-6))
      (should= [] (open-boxes full-board-cats-game)))

  (it "tests for full board"
      (should (full-board? full-board-cats-game))
      (should-not (full-board? empty-board)))

  (it "tests for empty board"
      (should (empty-board? empty-board))
      (should-not (empty-board? full-board-cats-game)))

  (it "check for box existence"
      (should (does-box-exist? 0))
      (should (does-box-exist? 8))
      (should-not (does-box-exist? -1))
      (should-not (does-box-exist? 9)))

  (it "checks that played box is open"
      (should (is-box-selection-open? empty-board 8))
      (should-not (is-box-selection-open? full-board-cats-game 8)))

  (it "checks for existing & available box"
      (should (is-good-box? empty-board 8))
      (should-not (is-good-box? empty-board 11))
      (should-not (is-good-box? full-board-cats-game 8)))
  )