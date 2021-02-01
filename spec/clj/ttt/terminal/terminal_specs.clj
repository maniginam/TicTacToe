(ns ttt.terminal.terminal-specs
  (:require [ttt.spec-helper :as helper]
            [speclj.core :refer :all]
            [ttt.master.core :as tcore]
            [ttt.master.game-master :as gm]
            [terminal.terminal :as terminal]
            [terminal.user-inputs :as input]
            [clojure.string :as s]))


;; COMPLETE - TODO - GLM : SOOOOOOOOO  Many game/state maps.  Put one base game map in ttt.spec-helper and modify that for each spec
(def empty-game (assoc helper/empty-game :console :mock))
(def test-game (assoc helper/test-game :console :mock))
(def new-terminal-game (assoc empty-game :console :terminal))

(defn save-an-ended-game []
  (let [game {:persistence {:db :mock :dbname "test" :table "TEST"} :db "test" :box-played 0 :board ["X"] :board-size 1 :current-player :player1 :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human} :users 2 :console :mock}]
    (tcore/save-game game)
    (tcore/save-turn game)))

(def boards {:three-by-three [0 1 2 3 4 5 6 7 8] :four-by-four [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]})
(def players {:player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :computer}})

;; COMPLETE - TODO - GLM : Most, maybe all, of these should be deleted because they're only used by terminal.

(describe "Terminal"
  (with-stubs)

  (describe "terminal - "

    (context "setup"
      (it "loads the last game"
        (with-redefs [tcore/load-game (stub :load-game {:return nil})]
          (let [result (tcore/set-parameters (assoc new-terminal-game :status :waiting))]
            (should-not-be-nil (:last-game result))
            (should= :restart? (:status result)))))

      (context "restart last game?"
        (it "not a nil last game"
          (with-redefs [tcore/restart? (stub :restart? {:return false})]
            (let [result (tcore/set-parameters (assoc new-terminal-game :status :restart?))]
              (should= :user-setup (:status result)))))

        (it "not with decline to restart recorded last game"
          (with-redefs [tcore/restart? (stub :restart? {:return false})]
            (let [result (tcore/set-parameters (assoc new-terminal-game :status :restart? :last-game (assoc test-game :console :terminal :status :playing)))]
              (should= :user-setup (:status result)))))

        (it "yes"
          (with-redefs [tcore/restart? (stub :restart? {:return true})]
            (let [result (tcore/set-parameters (assoc new-terminal-game :status :restart? :last-game (assoc test-game :console :terminal :status :playing)))]
              (should= :playing (:status result))))))

      (context "sets up user count of"
        (it "zero humans"
          (with-redefs [tcore/validate-player-count (stub :player-count {:return 0})]
            (let [result (tcore/set-parameters (assoc new-terminal-game :status :user-setup))]
              (should= 0 (:users result))
              (should= :player-setup (:status result)))))

        (it "1 human"
          (with-redefs [tcore/validate-player-count (stub :player-count {:return 1})]
            (let [result (tcore/set-parameters (assoc new-terminal-game :status :user-setup))]
              (should= 1 (:users result))
              (should= :player-setup (:status result)))))

        (it "2 humans"
          (with-redefs [tcore/validate-player-count (stub :player-count {:return 2})]
            (let [result (tcore/set-parameters (assoc new-terminal-game :status :user-setup))]
              (should= 2 (:users result))
              (should= :player-setup (:status result))))))

      (context "sets human as"
        (it "player1"
          (with-redefs [terminal/prompt-for-player-type (stub :player {:return "X"})]
            (let [result (tcore/set-parameters (assoc new-terminal-game :status :player-setup :users 1))]
              (should= :human (:type (:player1 result)))
              (should= :computer (:type (:player2 result)))
              (should= :level-setup (:status result)))))

        (it "player2"
          (with-redefs [terminal/prompt-for-player-type (stub :player {:return "O"})]
            (let [result (tcore/set-parameters (assoc new-terminal-game :status :player-setup :users 1))]
              (should= :computer (:type (:player1 result)))
              (should= :human (:type (:player2 result)))
              (should= :level-setup (:status result))))))

      (it "level"
        (with-redefs [tcore/prompt-for-level (stub :level-prompt {:return :hard})]
          (let [result (tcore/set-parameters (assoc new-terminal-game :status :level-setup))]
            (should= :board-setup (:status result)))))

      (it "board"
        (with-redefs [tcore/set-board-size (stub :board-prompt {:return 3})]
          (let [result (tcore/set-parameters (assoc new-terminal-game :status :board-setup))]
            (should= :ready-to-play (:status result))))))

    (it "ready to play"
      (with-redefs [gm/start-game! (stub :start-game!)
                    tcore/load-game (stub :load-game {:return nil})
                    tcore/restart? (stub :restart? {:return false})
                    tcore/validate-player-count (stub :player-count {:return 1})
                    terminal/prompt-for-player-type (stub :player-type-prompt {:return "X"})
                    tcore/prompt-for-level (stub :level {:return :hard})
                    tcore/set-board-size (stub :board-size {:return 3})]
        (let [game (tcore/game-setup {:console :terminal :status :waiting})]
          (should= :ready-to-play (:status game)))))

    (context "run the program"
      (it "quits"
        (with-redefs [tcore/welcome (stub :welcome)
                      tcore/game-setup (stub :setup {:return {:console :terminal :game-over? true}})
                      gm/start-game! (stub :start-game!)
                      tcore/report! (stub :report)
                      tcore/play-again? (stub :play-again {:return false})]
          (let [end-game (with-out-str (tcore/run-game {:console :terminal}))]
            (should= "Ok.  Well, Let's Play Again Soon!  Bye!\n" end-game)))))))


(def mock-move helper/mock-move)

(def default-state (assoc tcore/game-model
                     :console :terminal
                     :persistence {:db :mysql :table "TEST" :dbname "test"}
                     :users 1
                     :player1 {:player-num 1 :piece "X" :type :human}
                     :player2 {:player-num 2 :piece "O" :type :mock}))

(describe "Terminal String Outputs -"

(context "terminal messages -"

  (it "welcomes"
    (should= "Welcome to Tic-Tac-Toe!\n" (with-out-str (tcore/welcome (assoc empty-game :console :terminal)))))

  (it "gets game results"
    (should= "Cat's Game" (terminal/game-results {:winner 0}))
    (should= "X Wins!" (terminal/game-results {:winner 1 :player1 {:piece "X"}}))
    (should= "O Wins!" (terminal/game-results {:winner 2 :player2 {:piece "O"}})))

  (it "board message"
    (let [terminal {:console :terminal}]
      (should= (str "What size grid do you want to play on?\n")
               (with-out-str (with-in-str "3" (tcore/board-size-prompt terminal))))
      (should= "What size grid do you want to play on?\nleo is not a valid option\nWhat size grid do you want to play on?\n is not a valid option\nWhat size grid do you want to play on?\n is not a valid option\nNevermind, let's play a standard 3x3 board\n"
               (with-out-str (with-in-str "leo" (tcore/set-board-size terminal))))))

  (it "level"
    (should= "Select a Level:\n  E - Easy\n  M - Medium\n  H - Hard\n" (with-out-str (with-in-str "h" (tcore/prompt-for-level {:console :terminal})))))

  (it "prints results of game"
    (should= "Cat's Game" (s/trim (with-out-str (tcore/report! {:console :terminal} (str "Cat's Game")))))
    (should= "X Wins!" (s/trim (with-out-str (tcore/report! {:console :terminal} (str "X Wins!")))))
    (should= "O Wins!" (s/trim (with-out-str (tcore/report! {:console :terminal} (str "O Wins!"))))))

  (it "plays again"
    (should= "Do you want to play again?  Y or N\n" (with-out-str (with-in-str "y" (tcore/play-again? {:console :terminal})))))

  (it "ask to restart past game"
    (should= "Do you want to start up where you left last game? Y or N\n" (with-out-str (with-in-str "y" (tcore/restart? {:console :terminal :board ["X" 0 1 2 3 4 5 6 7 8]})))))

  (it "says good-bye"
    (should= "Ok.  Well, Let's Play Again Soon!  Bye!\n" (with-out-str (tcore/quit-game {:console :terminal}))))

  (it "checks displayed board"
    (should= (str "  0  ||  1\n=====||=====\n  2  ||  3\n") (with-out-str (tcore/draw-board {:console :terminal} [0 1 2 3])))
    (should= (str "  0  ||  1  ||  2\n=====||=====||=====\n  3  ||  4  ||  5\n=====||=====||=====\n  6  ||  7  ||  8\n") (with-out-str (tcore/draw-board {:console :terminal} [0 1 2 3 4 5 6 7 8])))
    (should= (str "  0  ||  1  ||  2  ||  3\n=====||=====||=====||=====\n  4  ||  5  ||  6  ||  7\n=====||=====||=====||=====\n  8  ||  9  ||  10  ||  11\n=====||=====||=====||=====\n  12  ||  13  ||  14  ||  15\n")
             (with-out-str (tcore/draw-board {:console :terminal} [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15])))))

(context "input validation messages"

  (it "int?"
    (should= "leo is not a valid option" (s/trim (with-out-str (input/valid-for-int-type? "leo"))))
    (should (input/valid-for-int-type? "3")))

  (it "users"
    (should (input/valid-user-count-option? 0))
    (should (input/valid-user-count-option? 1))
    (should (input/valid-user-count-option? 2))
    (should-not (input/valid-user-count-option? 5))
    (should= "rex is not an option\n" (with-out-str (input/bad-user-count "rex"))))

  (it "piece"
    (let [game (assoc empty-game :console :terminal)]
      (with-out-str (should= "X" (with-in-str "X" (terminal/prompt-for-player-type game))))
      (with-out-str (should= "O" (with-in-str "o" (terminal/prompt-for-player-type game))))
      (with-out-str (should= "O" (with-in-str "O" (terminal/prompt-for-player-type game))))
      (with-out-str (should= "O" (with-in-str "3" (terminal/prompt-for-player-type game))))
      (with-out-str (should= "O" (with-in-str "leo" (terminal/prompt-for-player-type game))))
      (with-out-str (should= "O" (with-in-str "" (terminal/prompt-for-player-type game))))))

  (it "board-size"
    (with-out-str (should= 3 (with-in-str "3" (tcore/set-board-size test-game))))
    (should= "rex is not a valid option\n" (with-out-str (input/valid-for-int-type? "rex")))))

(context "valid inputs"
  (it "tests valid human box entry"
    (with-out-str (should (input/valid-box? "0" helper/standard-board)))
    (with-out-str (should (input/valid-box? "8" helper/standard-board)))
    (should= "leo is not a valid option" (s/trim (with-out-str (input/valid-box? "leo" helper/standard-board))))
    (should= "9 is not a box option" (s/trim (with-out-str (input/valid-box? "9" helper/standard-board))))
    (should= "box 0 is already taken" (s/trim (with-out-str (input/valid-box? "0" (replace {0 "X"} helper/standard-board))))))))