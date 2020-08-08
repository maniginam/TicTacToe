(ns test-board
  (:require
    [speclj.core :refer :all]
    [ttt.board :refer :all]))

(describe "tic tac toe terminal board "

  (def empty-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})
  (def full-board-cats-game {0 "X" 1 "X" 2 "O" 3 "O" 4 "O" 5 "X" 6 "X" 7 "O" 8 "X"})
  (def one-box-open-cats-game-6 {0 "X" 1 "O" 2 "X" 3 "O" 4 "O" 5 "X" 6 6 7 "X" 8 "O"})

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