(ns Test-ttt
  (:require
    [speclj.core :refer :all]
    [ttt.core :refer :all]
    [ttt.OptimalPlay :refer :all]
    [ttt.Board :refer :all]))

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
      (should= "I Win!" (game-results 2 1))
      (should= "You Win!" (game-results 1 1))
      (should= "Cat's Game" (game-results 0 1)))

  ;(it "plays human box selected by user"
  ;    (let [test-box (human-turn empty-board 1 false)]
  ;         (should (and (int? test-box) (> test-box -1) (< test-box 9)))))

  (it "plays human box selected by computer via is-test? true"
      (def corners [0 2 6 8])
      (let [play (human-turn empty-board 1 true)]
        (should (some #(= play %) corners))))

  ;(it "plays TTT"
  ;        (binding )
  ;    (loop [winners []
  ;           game 0]
  ;          (if (< game 10)
  ;            (recur (conj winners (play-ttt (nth [1 2] (rand-int 2)) this-is-a-test)) (inc game))
  ;            (println winners))))
  ;    (should= 0 (play-ttt human-is-player1 this-is-a-test))
  ;    (should= 0 (play-ttt human-is-player2 this-is-a-test)))

  (it "gets human game-piece choice"
      (should= 1 (set-human-game-piece 0 "x"))
      (should= 1 (set-human-game-piece 1 "x"))
      (should= 1 (set-human-game-piece 0 "X"))
      (should= 2 (set-human-game-piece 0 "O"))
      (should= 2 (set-human-game-piece 2 "rex")))

  (it "Sets human player"
      (welcome nil))

)
