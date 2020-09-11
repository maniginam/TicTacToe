(ns ui-specs
  (:require [clojure.string :as s]
            [speclj.core :refer :all]
            [ttt.ui :refer :all]
            [ttt.default-game :refer :all]
            [ttt.core :refer :all]))

(def console {:console :terminal})
(def standard-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})

(describe "Terminal UI:"

  (it "welcomes"
    (should= "Welcome to Tic-Tac-Toe!\n" (with-out-str (welcome console))))

  (it "tests for valid input type"
    (should= "leo is not a valid option" (s/trim (with-out-str (valid-user-count-type? "leo"))))
    (should (valid-user-count-type? "3")))

  (it "tests for valid input"
    (should (valid-user-count-option? 0))
    (should (valid-user-count-option? 1))
    (should (valid-user-count-option? 2))
    (should-not (valid-user-count-option? 5))
    (should= "rex is not an option\n" (with-out-str (bad-user-count "rex"))))

  (it "Sets up player count"
    (with-out-str (should= 0 (with-in-str "0" (validate-player-count console))))
    (with-out-str (should= 1 (with-in-str "1" (validate-player-count console))))
    (with-out-str (should= 2 (with-in-str "2" (validate-player-count console))))
    (with-out-str (should= 0 (with-in-str "3" (validate-player-count console))))
    (with-out-str (should= 0 (with-in-str "" (validate-player-count console))))
    (with-out-str (should= 0 (with-in-str "rex" (validate-player-count console)))))

  (it "tests for valid user piece"
    (with-out-str (should= :human (with-in-str "x" (validate-user-position console))))
    (with-out-str (should= :human (with-in-str "X" (validate-user-position console))))
    (with-out-str (should= :computer (with-in-str "o" (validate-user-position console))))
    (with-out-str (should= :computer (with-in-str "O" (validate-user-position console))))
    (with-out-str (should= :computer (with-in-str "3" (validate-user-position console))))
    (with-out-str (should= :computer (with-in-str "leo" (validate-user-position console))))
    (with-out-str (should= :computer (with-in-str "" (validate-user-position console)))))

  (it "Sets players with 0 users"
    (let [console {:console :terminal :users 0}]
      (should= :computer (assign-type console 0))
      (should= :computer (assign-type console 0))))

  (it "Sets players with 2 users"
    (let [console {:console :terminal :users 2}]
      (should= :human (assign-type console 2))
      (should= :human (assign-type console 2))))

  (it "Sets players with 1 user as player 1"
    (let [console {:console :terminal :users 1}]
      (with-out-str (should= :human (with-in-str "x" (assign-type console 1))))))

  (it "Sets players with 1 user as player 2"
    (let [console {:console :terminal :users 1}]
      (with-out-str (should= :computer (with-in-str "o" (assign-type console 1))))))

  (it "tests valid human box entry"
    (with-out-str (should (valid-box? "0" standard-board)))
    (with-out-str (should (valid-box? "8" standard-board)))
    (should= "leo is not a valid option" (s/trim (with-out-str (valid-box? "leo" standard-board))))
    (should= "9 is not a box option" (s/trim (with-out-str (valid-box? "9" standard-board))))
    (should= "box 0 is already taken" (s/trim (with-out-str (valid-box? "0" (assoc standard-board 0 "X"))))))

  (it "tests human move"
    (let [player1 {:player 1 :type :human :piece "X"}]
      (should= "  0 || 1 || 2\n====||===||====\n  3 || 4 || 5\n====||===||====\n  6 || 7 || 8\nX's Turn\nSelect a box 0-8\n"
               (with-out-str (with-in-str "0" (make-move player1 standard-board))))))

  (it "tests computer move"
    (let [player1 {:player 1 :type :computer :piece "X"}]
      (should= "  X || O || 2\n====||===||====\n  O || X || 5\n====||===||====\n  6 || 7 || X\nComputer plays box 4\n"
               (with-out-str (make-move player1 {0 "X" 1 "O" 2 2 3 "O" 4 4 5 5 6 6 7 7 8 "X"})))))

  (it "prints results of game"
    (should= "Cat's Game" (s/trim (with-out-str (report {:console :terminal} (str "Cat's Game")))))
    (should= "X Wins!" (s/trim (with-out-str (report {:console :terminal} (str "X Wins!")))))
    (should= "O Wins!" (s/trim (with-out-str (report {:console :terminal} (str "O Wins!"))))))

  )