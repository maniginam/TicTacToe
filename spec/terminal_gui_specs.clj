(ns terminal-gui-specs
  (:require [clojure.java.io :as io]
            [speclj.core :refer :all]
            [ttt.terminal-gui :refer :all]
            [ttt.the-game :refer :all]))

(def console {:gui :terminal})
(def standard-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})

(describe "Terminal GUI:"

  (it "welcomes"
    (should= "Welcome to Tic-Tac-Toe!\n" (with-out-str (welcome console))))

  (it "tests for valid input type"
    (with-out-str (should-not (valid-user-count-type? "leo")))
    (should (valid-user-count-type? "3")))

  (it "tests for valid input"
    (should (valid-user-count-option? 0))
    (should (valid-user-count-option? 1))
    (should (valid-user-count-option? 2))
    (should-not (valid-user-count-option? 5)))

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
    (let [console {:gui :terminal :users 0}
          player1 {:player 1 :type :computer :piece "X"}
          player2 {:player 2 :type :computer :piece "O"}]
      (with-out-str (should= player1 (assign-player console 1)))
      (with-out-str (should= player2 (assign-player console 2)))))

  (it "Sets players with 2 users"
    (let [console {:gui :terminal :users 2}
          player1 {:player 1 :type :human :piece "X"}
          player2 {:player 2 :type :human :piece "O"}]
      (should= player1 (assign-player console 1))
      (should= player2 (assign-player console 2))))


  (it "Sets players with 1 user as player 1"
    (let [console {:gui :terminal :users 1}
          player1 {:player 1 :type :human :piece "X"}
          player2 {:player 2 :type :computer :piece "O"}]
      (with-out-str (should= player1 (with-in-str "x" (assign-player console 1))))
      (with-out-str (should= player2 (assign-player (assoc console :player1 :human) 2)))))

  (it "Sets players with 1 user as player 2"
    (let [console {:gui :terminal :users 1}
          player1 {:player 1 :type :computer :piece "X"}
          player2 {:player 2 :type :human :piece "O"}]
      (with-out-str (should= player1 (with-in-str "o" (assign-player console 1))))
      (should= player2 (assign-player (assoc console :player1 :computer) 2))))

  (it "Set Up game map with 1 user as player 2"
    (let [player1 {:player 1 :type :computer :piece "X"}
          player2 {:player 2 :type :human :piece "O"}
          board standard-board
          game {:gui :terminal :users 1 :player1 player1 :player2 player2 :board board}]
      (with-out-str (should= game (with-in-str "1" (setup-game console))))))

  (it "tests valid human box entry"
    (with-out-str (should (valid-box? "0" standard-board)))
    (with-out-str (should (valid-box? "8" standard-board)))
    (with-out-str (should-not (valid-box? "9" standard-board)))
    (with-out-str (should-not (valid-box? "leo" standard-board))))

  (it "tests for human move"
    (let [player1 {:player 1 :type :human :piece "X"}]
      (with-out-str (should= 0 (with-in-str "0" (make-move player1 standard-board))))))

  (it "prints results of game"
    (with-out-str (should= nil (report {:gui :terminal :winner 0})))
    (with-out-str (should= nil (report {:gui :terminal :winner 1 :player1 {:piece "X"}})))
    (with-out-str (should= nil (report {:gui :terminal :winner 2 :player2 {:piece "O"}}))))

  )