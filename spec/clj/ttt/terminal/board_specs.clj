(ns ttt.terminal.board-specs
  (:require [ttt.spec-helper :as helper]
            [speclj.core :refer :all]
            [ttt.board.board :as board]
            [ttt.master.core :as tcore]))

(def this-is-a-test true)
(def human-is-player1 1)
(def computer-is-player1 1)
(def computer-is-player2 2)
(def computer-wins 2)

(def empty-board [0 1 2 3 4 5 6 7 8])
(def full-board-cats-game ["X" "X" "O" "O" "O" "X" "X" "O" "X"])
(def one-box-open-cats-game-6 ["X" "O" "X" "O" "O" "X" 6 "X" "O"])
(def empty-game helper/empty-game)

(describe "BOARD:"

  (it "shows winning line"
    (should= [0 1 2] (board/get-winning-line ["X" "X" "X" 3 4 5 6 7 8])))

  (it "Makes the Board"
    (should= [] (board/create-board 0))
    (should= [0] (board/create-board 1))
    (should= [0 1 2 3] (board/create-board 2))
    (should= [0 1 2 3 4 5 6 7 8] (board/create-board 3)))

  (it "Sets Board in Default Game"
    (should= 3 (tcore/set-board-size empty-game)))

  (it "gets rows of board"
    (should= [[0 1] [2 3]] (board/get-rows [0 1 2 3]))
    (should= [[0 1 2] [3 4 5] [6 7 8]] (board/get-rows [0 1 2 3 4 5 6 7 8])))

  (it "gets columns of board"
    (should= [[0 2] [1 3]] (board/get-columns [0 1 2 3]))
    (should= [[0 3 6] [1 4 7] [2 5 8]] (board/get-columns [0 1 2 3 4 5 6 7 8])))

  (it "gets diagonals of board"
    (should= [[0 3] [1 2]] (board/get-diagonals [0 1 2 3]))
    (should= [[0 4 8] [2 4 6]] (board/get-diagonals [0 1 2 3 4 5 6 7 8]))
    (should= [[0 5 10 15] [3 6 9 12]] (board/get-diagonals [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15])))

  (it "combines all rows, cols, & diags"
    (should= [[0 1] [2 3] [0 2] [1 3] [0 3] [1 2]] (board/get-all-lines [0 1 2 3])))

  (it "checks rows for win"
    (should-not (board/did-row-win? [0 1 2 3 4 5 6 7 8]))
    (should (board/did-row-win? ["X" "X" "X" 3 4 5 6 7 8]))
    (should-not (board/did-row-win? ["X" "O" "X" 3 4 5 6 7 8]))
    (should (board/did-row-win? [0 1 2 "X" "X" "X" 6 7 8]))
    (should (board/did-row-win? [0 1 2 3 4 5 "X" "X" "X"]))
    (should (board/did-row-win? [0 1 2 3 4 5 "O" "O" "O"]))
    (should-not (board/did-row-win? [0 1 2 3 4 5 "O" "X" "O"]))
    (should-not (board/did-row-win? ["X" "O" "X" 3 4 5 6 7 8])))

  (it "checks cols for win"
    (should (board/did-col-win? ["X" "O" "O" "X" 4 5 "X" 7 8]))
    (should (board/did-col-win? [0 "X" 2 3 "X" 5 6 "X" 8]))
    (should (board/did-col-win? [0 1 "O" 3 4 "O" 6 7 "O"]))
    (should-not (board/did-col-win? [0 1 "O" 3 4 "X" 6 7 "O"]))
    (should-not (board/did-col-win? ["X" "O" "X" 3 4 5 6 7 8])))

  (it "checks diagonals for win"
    (should (board/did-diagonal-win? ["X" 1 2 3 "X" 5 6 7 "X"]))
    (should (board/did-diagonal-win? [0 1 "O" 3 "O" 5 "O" 7 "X"]))
    (should-not (board/did-diagonal-win? [0 1 "O" 3 "X" 5 "O" 7 "X"]))
    (should-not (board/did-diagonal-win? ["X" "O" "X" 3 4 5 6 7 8])))

  (for [[board results]

        [[[0 1 2 3] false]
         [["X" "X" 2 3] true]
         [["O" "O" 2 3] true]
         [[0 1 "X" "X"] true]
         [[0 1 "O" "O"] true]
         [["X" "O" 2 3] false]
         [[0 1 2 3 4 5 6 7 8] false]
         [["X" "X" "X" 3 4 5 6 7 8] true]
         [[0 1 2 3 4 5 "O" "O" "O"] true]
         [["X" 1 "X" 3] true]
         [["O" 1 2 "O" 4 5 "O" 7 8] true]
         [["X" 1 2 "X"] true]
         [[0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15] false]
         [["X" "X" "X" "X" 4 5 6 7 8 9 10 11 12 13 14 15] true]
         [[0 "O" 2 3 4 "O" 6 7 8 "O" 10 11 12 "O" 14 15] true]
         [["X" 1 2 3 4 "X" 6 7 8 9 "X" 11 12 13 14 "X"] true]

         ]]
    (it (str "CHECKS " board " for " (if (true? results) "win" "no-win") " on board-size " (int (Math/sqrt (count board))))
      (should= results (board/is-win? board))))

  (it "returns all open, unplayed boxes in game"
    (should= [0 1 2 3 4 5 6 7 8] (board/open-boxes empty-board))
    (should= [6] (board/open-boxes one-box-open-cats-game-6))
    (should= [] (board/open-boxes full-board-cats-game)))

  (it "returns all closed, played boxes in game"
    (should= [] (board/played-boxes empty-board))
    (should= [0 1 2 3 4 5 7 8] (board/played-boxes one-box-open-cats-game-6))
    (should= [0 1 2 3 4 5 6 7 8] (board/played-boxes full-board-cats-game)))

  (it "tests for full board"
    (should (board/full-board? full-board-cats-game))
    (should-not (board/full-board? empty-board)))

  (it "test 4x4 for full board"
    (should (board/full-board? ["X" "X" "O" "O" "X" "X" "O" "O" "X" "X" "O" "O" "X" "X" "O" "O"]))
    (should-not (board/full-board? [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15])))

  (it "tests for empty board"
    (should (board/empty-board? empty-board))
    (should-not (board/empty-board? full-board-cats-game)))

  (it "check for box existence"
    (should (board/does-box-exist? 0 [0 1 2 3 4 5 6 7 8]))
    (should (board/does-box-exist? 8 [0 1 2 3 4 5 6 7 8]))
    (should-not (board/does-box-exist? -1 [0 1 2 3 4 5 6 7 8]))
    (should-not (board/does-box-exist? 9 [0 1 2 3 4 5 6 7 8])))

  (it "checks that played box is open"
    (should (board/is-box-open? empty-board 8))
    (should-not (board/is-box-open? full-board-cats-game 8)))

  (it "checks for existing & available box"
    (should (board/is-good-box? empty-board 8))
    (should-not (board/is-good-box? empty-board 11))
    (should-not (board/is-good-box? full-board-cats-game 8)))

  (it "tests if each row, col, or diagonal is a win"
    (should (board/is-winning-move? ["X" "X" "X"]))
    (should (board/is-vector-win? ["X" "X" "X" "X"]))
    (should (board/is-winning-move? ["X" 1 2 "X" 4 5 "X" 7 8])))

  )