(ns the-game-specs
  (:require [speclj.core :refer :all]
            [ttt.the-game :refer :all]))

(describe "sets the rules of The Game"
  (def comp-player1 {:player 1 :type :computer :piece "X"})
  (def comp-player2 {:player 2 :type :computer :piece "O"})
  (def cat-player1 {:player 1 :type :cat :piece "O"})
  (def standard-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})

  (it "assigns players"
    (should= {:player 1 :type :cat :piece "gina"} (assign-player 1 :cat "gina")))

  (it "gets game players"
    (should= "player1 is :computer with piece X" (get-player-info comp-player1)))

  (it "makes :ai move"
    (should= 0 (make-move comp-player1 {0 0}))
    (should= 2 (make-move comp-player1 {0 "O" 1 "O" 2 2}))
    (should-be-nil (make-move cat-player1 "board-type doesn't matter")))

  (it "plays ttt"
    (let [game {:player1 comp-player1 :player2 comp-player2 :board standard-board}]
      (should= 0 (play-ttt game))))

  )
