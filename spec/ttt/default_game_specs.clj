(ns ttt.default-game-specs
  (:require [speclj.core :refer :all]
            [ttt.game-master :refer :all]
            [ttt.core :refer :all]))

(def player1 {:player-num 1 :type :computer :piece "X"})
(def player2 {:player-num 2 :type :computer :piece "O"})
(def standard-board [0 1 2 3 4 5 6 7 8])
(def player1-wins-board ["X" "X" 2 "O" "O" 5 6 7 8])
(def test-game {:users 0 :current-player player1 :player1 player1 :player2 player2 :board standard-board})
(def test-game-player1-wins {:users 0 :current-player :player1 :player1 player1 :player2 player2 :board player1-wins-board})
(def test-console {})

(describe "Sets the rules of The Game:"

  (it "Sets Board in Default Game"
    (should-be-nil (board-size-prompt test-console))
    (should= 3 (set-board-size test-console))
    )

  (it "makes computer move"
    (let [box (select-box player1 {:current-player :depth 0 :player1 :board standard-board})]
      (should= 1 (count (filter #(= % box) [0 2 6 8]))))
    (with-out-str (should= 2 (select-box player1 {:current-player :player1 :depth 0 :board ["O" "O" 2 3 4 5 6 7 8]})))
    (with-out-str (should= 1 (select-box player1 {:current-player :player1 :depth 0 :board ["X" 1 "X" 3 4 5 6 7 8]}))))

  (it "reports results"
    (should= "Cat's Game" (report {:console :default} (str "Cat's Game")))
    (should= "X Wins!" (report {:console :default} "X Wins!"))
    (should= "O Wins!" (report {:console :default} "O Wins!")))

  )