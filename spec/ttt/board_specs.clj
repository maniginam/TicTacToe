(ns ttt.board-specs
  (:require
    [speclj.core :refer :all]
    [ttt.board :refer :all]
    [ttt.core :refer :all]))

(def this-is-a-test true)
(def human-is-player1 1)
(def human-is-player2 2)
(def computer-is-player1 1)
(def computer-is-player2 2)
(def computer-wins 2)

(def empty-board [0 1 2 3 4 5 6 7 8])
(def full-board-cats-game ["X" "X" "O" "O" "O" "X" "X" "O" "X"])
(def game-is-won-board [0 "X" 1 2 3 "X" 5 6 7 "X"])
(def one-box-open-cats-game-6 ["X" "O" "X" "O" "O" "X" 6 "X" "O"])

(describe "BOARD:"

  (it "Makes the Board"
    (should= [] (create-board 0))
    (should= [0] (create-board 1))
    (should= [0 1 2 3] (create-board 2))
    (should= [0 1 2 3 4 5 6 7 8] (create-board 3)))

  (it "Sets Board in Default Game"
    (let [default {:console :default}]
      (should-be-nil (board-size-prompt default))
      (should= 3 (set-board-size default))))

  (it "Sets Board in Terminal Game"
    (let [terminal {:console :terminal}]
      (should= (str "What size grid do you want to play on?\n")
               (with-out-str (with-in-str "3" (board-size-prompt terminal))))
      ;(should= 5 (with-in-str "5" (set-board-size terminal)))
      (should= "What size grid do you want to play on?\nleo is not a valid option\nWhat size grid do you want to play on?\n is not a valid option\nWhat size grid do you want to play on?\n is not a valid option\nNevermind, let's play a standard 3x3 board\n"
               (with-out-str (with-in-str "leo" (set-board-size terminal))))))

  (it "gets rows of board"
    (should= [[0 1] [2 3]] (get-rows [0 1 2 3]))
    (should= [[0 1 2] [3 4 5] [6 7 8]] (get-rows [0 1 2 3 4 5 6 7 8])))

  (it "gets columns of board"
    (should= [[0 2] [1 3]] (get-columns [0 1 2 3]))
    (should= [[0 3 6] [1 4 7] [2 5 8]] (get-columns [0 1 2 3 4 5 6 7 8])))

  (it "gets diagonals of board"
    (should= [[0 3] [1 2]] (get-diagonals [0 1 2 3]))
    (should= [[0 4 8] [2 4 6]] (get-diagonals [0 1 2 3 4 5 6 7 8]))
    (should= [[0 5 10 15] [3 6 9 12]] (get-diagonals [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15])))

  (it "checks rows for win"
    (should-not (did-row-win? [0 1 2 3 4 5 6 7 8]))
    (should (did-row-win? ["X" "X" "X" 3 4 5 6 7 8]))
    (should-not (did-row-win? ["X" "O" "X" 3 4 5 6 7 8]))
    (should (did-row-win? [0 1 2 "X" "X" "X" 6 7 8]))
    (should (did-row-win? [0 1 2 3 4 5 "X" "X" "X"]))
    (should (did-row-win? [0 1 2 3 4 5 "O" "O" "O"]))
    (should-not (did-row-win? [0 1 2 3 4 5 "O" "X" "O"]))
    (should-not (did-row-win? ["X" "O" "X" 3 4 5 6 7 8])))

  (it "checks cols for win"
    (should (did-col-win? ["X" "O" "O" "X" 4 5 "X" 7 8]))
    (should (did-col-win? [0 "X" 2 3 "X" 5 6 "X" 8]))
    (should (did-col-win? [0 1 "O" 3 4 "O" 6 7 "O"]))
    (should-not (did-col-win? [0 1 "O" 3 4 "X" 6 7 "O"]))
    (should-not (did-col-win? ["X" "O" "X" 3 4 5 6 7 8])))

  (it "checks diagonals for win"
    (should (did-diagonal-win? ["X" 1 2 3 "X" 5 6 7 "X"]))
    (should (did-diagonal-win? [0 1 "O" 3 "O" 5 "O" 7 "X"]))
    (should-not (did-diagonal-win? [0 1 "O" 3 "X" 5 "O" 7 "X"]))
    (should-not (did-diagonal-win? ["X" "O" "X" 3 4 5 6 7 8])))

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
      (should= results (is-win? board))))

  (it "returns all open, unplayed boxes in game"
    (should= [0 1 2 3 4 5 6 7 8] (open-boxes empty-board))
    (should= [6] (open-boxes one-box-open-cats-game-6))
    (should= [] (open-boxes full-board-cats-game)))

  (it "tests for full board"
    (should (full-board? full-board-cats-game))
    (should-not (full-board? empty-board)))

  (it "test 4x4 for full board"
    (should (full-board? ["X" "X" "O" "O" "X" "X" "O" "O" "X" "X" "O" "O" "X" "X" "O" "O"]))
    (should-not (full-board? [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15])))

  (it "tests for empty board"
    (should (empty-board? empty-board))
    (should-not (empty-board? full-board-cats-game)))

  (it "check for box existence"
    (should (does-box-exist? 0 [0 1 2 3 4 5 6 7 8]))
    (should (does-box-exist? 8 [0 1 2 3 4 5 6 7 8]))
    (should-not (does-box-exist? -1 [0 1 2 3 4 5 6 7 8]))
    (should-not (does-box-exist? 9 [0 1 2 3 4 5 6 7 8])))

  (it "checks that played box is open"
    (should (is-box-open? empty-board 8))
    (should-not (is-box-open? full-board-cats-game 8)))

  (it "checks for existing & available box"
    (should (is-good-box? empty-board 8))
    (should-not (is-good-box? empty-board 11))
    (should-not (is-good-box? full-board-cats-game 8)))

  (it "checks displayed board"
    (should= (str "  0  ||  1\n=====||=====\n  2  ||  3\n") (with-out-str (draw-board {:console :terminal} [0 1 2 3])))
    (should= (str "  0  ||  1  ||  2\n=====||=====||=====\n  3  ||  4  ||  5\n=====||=====||=====\n  6  ||  7  ||  8\n") (with-out-str (draw-board {:console :terminal} [0 1 2 3 4 5 6 7 8])))
    (should= (str "  0  ||  1  ||  2  ||  3\n=====||=====||=====||=====\n  4  ||  5  ||  6  ||  7\n=====||=====||=====||=====\n  8  ||  9  ||  10  ||  11\n=====||=====||=====||=====\n  12  ||  13  ||  14  ||  15\n")
             (with-out-str (draw-board {:console :terminal} [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]))))

  (it "tests if each row, col, or diagonal is a win"
    (should (is-winning-move? ["X" "X" "X"]))
    (should (is-vector-win? ["X" "X" "X" "X"]))
    (should (is-winning-move? ["X" 1 2 "X" 4 5 "X" 7 8])))

  )