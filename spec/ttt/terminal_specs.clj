(ns ttt.terminal-specs
  (:require [clojure.string :as s]
            [speclj.core :refer :all]
            [ttt.core :as tcore]
            [ttt.game-master :as gm]
            [ttt.terminal :as terminal]
            [ttt.user-inputs :as input]))

(def console {:console :terminal})
(def standard-board [0 1 2 3 4 5 6 7 8])

(def player1 {:player-num 1 :piece "X" :type :computer})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def standard-board [0 1 2 3 4 5 6 7 8])
(def player1-wins-board ["X" "X" 2 "O" "O" 5 6 7 8])
;; TODO - GLM : SOOOOOOOOO  Many game/state maps.  Put one base game map in spec-helper and modify that for each spec
(def test-game {:dbname "test" :table "TEST" :persistence :mock :users 0 :level :hard :current-player :player1 :box-played nil :player1 player1 :player2 player2 :board standard-board :board-size 3})
(def test-game-player1-wins {:db "test" :persistence :mock :users 0 :current-player :player1 :box-played nil :player1 player1 :player2 player2 :board player1-wins-board})
(def test-console {:table "TEST" :dbname "test" :persistence :mock})
(def empty-game {:dbname "test" :table "TEST" :persistence :mock})

(defn save-an-ended-game []
  (let [game {:persistence :mock :db "test" :box-played 0 :board ["X"] :board-size 1 :current-player :player1 :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human} :users 2 :console :default}]
    (tcore/save-game game)
    (tcore/save-turn game)))

(def boards {:three-by-three [0 1 2 3 4 5 6 7 8] :four-by-four [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]})
(def players {:player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :computer}})
;(def ended-game (save-an-ended-game))

;; TODO - GLM : Most, maybe all, of these should be deleted because they're only used by terminal.
(defmethod tcore/validate-player-count :default [console] 0)
(defmethod tcore/board-size-prompt :default [console] nil)
(defmethod tcore/set-board-size :default [console] 3)
(defmethod tcore/report :default [console results] results)
(defmethod tcore/play-again :default [console] false)
(defmethod tcore/draw-board :default [game board] nil)
(defmethod tcore/prompt-for-level :default [console] :hard)
(defmethod tcore/restart? :default [console] false)
(defmethod tcore/get-restart-input :default [console] "N")
(defmethod tcore/show-move :default [game box] nil)


(describe "Terminal UI:"

  (it "welcomes"
    (should= "Welcome to Tic-Tac-Toe!\n" (with-out-str (tcore/welcome console))))

  (it "tests for valid input type"
    (should= "leo is not a valid option" (s/trim (with-out-str (input/valid-for-int-type? "leo"))))
    (should (input/valid-for-int-type? "3")))

  (it "tests for valid input"
    (should (input/valid-user-count-option? 0))
    (should (input/valid-user-count-option? 1))
    (should (input/valid-user-count-option? 2))
    (should-not (input/valid-user-count-option? 5))
    (should= "rex is not an option\n" (with-out-str (input/bad-user-count "rex"))))

  (it "Sets up player count"
    (with-out-str (should= 0 (with-in-str "0" (tcore/validate-player-count console))))
    (with-out-str (should= 1 (with-in-str "1" (tcore/validate-player-count console))))
    (with-out-str (should= 2 (with-in-str "2" (tcore/validate-player-count console))))
    (with-out-str (should= 0 (with-in-str "3" (tcore/validate-player-count console))))
    (with-out-str (should= 0 (with-in-str "" (tcore/validate-player-count console))))
    (with-out-str (should= 0 (with-in-str "rex" (tcore/validate-player-count console)))))

  (it "tests for valid user piece"
    (with-out-str (should= :human (with-in-str "x" (terminal/assign-type (assoc console :users 1) 1))))
    (with-out-str (should= :human (with-in-str "X" (terminal/assign-player1-type console))))
    (with-out-str (should= :computer (with-in-str "o" (terminal/assign-player1-type console))))
    (with-out-str (should= :computer (with-in-str "O" (terminal/assign-player1-type console))))
    (with-out-str (should= :computer (with-in-str "3" (terminal/assign-player1-type console))))
    (with-out-str (should= :computer (with-in-str "leo" (terminal/assign-player1-type console))))
    (with-out-str (should= :computer (with-in-str "" (terminal/assign-player1-type console)))))

  (it "test user input for board-size"
    (with-out-str (should= 3 (with-in-str "3" (tcore/set-board-size console))))
    (should= "rex is not a valid option\n" (with-out-str (input/valid-for-int-type? "rex"))))

  (it "Sets players with 0 users"
    (let [console {:console :terminal :users 0}]
      (should= :computer (terminal/assign-type console 0))
      (should= :computer (terminal/assign-type console 0))))

  (it "Sets players with 2 users"
    (let [console {:console :terminal :users 2}]
      (should= :human (terminal/assign-type console 2))
      (should= :human (terminal/assign-type console 2))))

  (it "Sets players with 1 user as player 1"
    (let [console {:console :terminal :users 1}]
      (with-out-str (should= :human (with-in-str "x" (terminal/assign-type console 1))))))

  (it "Sets players with 1 user as player 2"
    (let [console {:console :terminal :users 1}]
      (with-out-str (should= :computer (with-in-str "o" (terminal/assign-type console 1))))))

  (it "Sets Board in Terminal Game"
    (should= (str "What size grid do you want to play on?\n")
             (with-out-str (with-in-str "3" (tcore/board-size-prompt console))))
    (should= "What size grid do you want to play on?\nleo is not a valid option\nWhat size grid do you want to play on?\n is not a valid option\nWhat size grid do you want to play on?\n is not a valid option\nNevermind, let's play a standard 3x3 board\n"
             (with-out-str (with-in-str "leo" (tcore/set-board-size console)))))

  (it "Sets Level"
    (should= "Select a Level:\n  E - Easy\n  M - Medium\n  H - Hard\n" (with-out-str (with-in-str "h" (tcore/prompt-for-level {:console :terminal})))))

  (it "tests valid human box entry"
    (with-out-str (should (input/valid-box? "0" standard-board)))
    (with-out-str (should (input/valid-box? "8" standard-board)))
    (should= "leo is not a valid option" (s/trim (with-out-str (input/valid-box? "leo" standard-board))))
    (should= "9 is not a box option" (s/trim (with-out-str (input/valid-box? "9" standard-board))))
    (should= "box 0 is already taken" (s/trim (with-out-str (input/valid-box? "0" (replace {0 "X"} standard-board))))))

  (it "tests computer move"
    (let [player1 {:player 1 :type :computer :piece "X"}
          game {:console :default :level :hard :current-player :player1 :player1 player1 :board ["X" "O" 2 "O" 4 5 6 7 "X"]}]
      (should= ["X" "O" 2 "O" "X" 5 6 7 "X"]
               (gm/update-board-with-move game (tcore/select-box player1 game)))))

  (it "prints results of game"
    (should= "Cat's Game" (s/trim (with-out-str (tcore/report {:console :terminal} (str "Cat's Game")))))
    (should= "X Wins!" (s/trim (with-out-str (tcore/report {:console :terminal} (str "X Wins!")))))
    (should= "O Wins!" (s/trim (with-out-str (tcore/report {:console :terminal} (str "O Wins!"))))))

  (it "plays again"
    (should= "Do you want to play again?  Y or N\n" (with-out-str (with-in-str "y" (tcore/play-again? {:console :terminal})))))

  (it "ask to restart past game"
    (should= "Do you want to start up where you left last game? Y or N\n" (with-out-str (with-in-str "y" (tcore/restart? {:console :terminal :board ["X" 0 1 2 3 4 5 6 7 8]})))))

  (it "says good-bye"
    (should= "Ok.  Well, Let's Play Again Soon!  Bye!\n" (with-out-str (tcore/end-game {:console :terminal}))))




  (describe "TIC-TAC-TOE:"

    (it "plays standard game"
      (let [game (dissoc (terminal/setup-game empty-game) :game-count)]
        (should= test-game game)
        (save-an-ended-game)
        (should= "Cat's Game" (terminal/run game)))
      (save-an-ended-game))

    (it "sets up easy game"
      (let [game (dissoc (assoc (terminal/setup-game empty-game) :level :easy) :game-count)]
        (should= (assoc test-game :level :easy) game))
      (save-an-ended-game))
    )


  (with-stubs)

  (describe "terminal - "

    (context "setup"

      (it "starts game"
        (with-redefs [gm/start-game! (stub :start-game!)
                      tcore/load-game (stub :load-game)
                      tcore/validate-player-count (stub :player-count {:return 0})
                      terminal/assign-player (stub :assign-player {:return :blah})
                      tcore/set-board-size (stub :board-size {:return 3})
                      tcore/prompt-for-level (stub :level {:return :hard})]
          (terminal/setup-game console))
        (should-have-invoked :start-game!))
      )


    (it "Default: Sets up num-of-players"
      (should= 0 (:users (terminal/setup-game empty-game)))
      (save-an-ended-game))

    (it "Default: Sets up player1"
      (let [player1 {:player-num 1 :type :computer :piece "X"}]
        (should= player1 (:player1 (terminal/setup-game empty-game)))
        (save-an-ended-game)
        (should= player1 (terminal/assign-player {:persistence :mock :db "ttt" :table "TEST" :console :default :users 0} :player1)))
      (save-an-ended-game))

    (it "Default: Sets up player2"
      (let [player2 {:player-num 2 :piece "O" :type :computer}]
        (should= player2 (:player2 (terminal/setup-game empty-game))))
      (save-an-ended-game))

    (it "Default: Sets up board"
      (should= standard-board (:board (terminal/setup-game test-game)))
      (save-an-ended-game))

    (it "Default: Set Up game map"
      (should= test-game (dissoc (terminal/setup-game test-console) :game-count))
      (save-an-ended-game))

    (it "Terminal: Set Up game map with 1 user as player 2"
      (let [player2 {:player-num 2 :piece "O" :type :human}]
        (with-out-str (should= player2 (:player2 (with-in-str "1" (terminal/setup-game {:persistence :mock :db "test" :table "TEST" :console :terminal :board [0 1 2 3 4 5 6 7 8] :board-size 3 :player1 {:player-num 1 :piece "X" :type :computer}}))))))
      (save-an-ended-game))

    (it "plays 0 user, 3x3 board game"
      (let [game {:persistence :mock :dbname "test" :table "TEST" :users 0 :level :hard :board-size 3 :board (:three-by-three boards) :current-player :player1 :player1 (:player1 players) :player2 (:player2 players)}]
        (should= game (dissoc (terminal/setup-game test-console) :game-count :box-played))
        (save-an-ended-game)
        (should= (assoc (dissoc game :board) :current-player :player2) (dissoc (gm/play-game game) :board :box-played)))
      (save-an-ended-game))

    (it "gets game results"
      (should= "Cat's Game" (gm/game-results {:winner 0}))
      (should= "X Wins!" (gm/game-results {:winner 1 :player1 {:piece "X"}}))
      (should= "O Wins!" (gm/game-results {:winner 2 :player2 {:piece "O"}})))

    (it "guides/leads the game from start to end"
      (should= "Cat's Game" (terminal/run (terminal/setup-game test-console)))
      (save-an-ended-game))

    ;(it "plays a 4x4 0 player game"
    ;  (let [game {:dbname "test" :persistence :mysql :console :default :level :hard :current-player :player1 :users 0 :player1 player1 :player2 player2 :board (:four-by-four boards)}]
    ;    (should= "Cat's Game" (terminal/run game))))

    )
  )

