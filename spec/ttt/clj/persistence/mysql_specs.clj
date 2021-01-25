(ns ttt.clj.persistence.mysql-specs
  (:require [ttt.clj.ttt.spec-helper :as helper]
            [speclj.core :refer :all]
            [ttt.clj.master.core :as tcore]
            [ttt.clj.master.game-master :as gm]
    ;; COMPLETE - TODO - GLM : sloppy, only used for show-move (not entirely sure how i fixed this)
            [ttt.clj.persistence.mysql :as mysql]))

(def test-db {:dbtype "mysql" :host :none :user "root" :password "topsecret"})
(def db-test-name "test")
(def test-ds (mysql/connect db-test-name))
(def player1 {:player-num 1 :piece "X" :type :computer})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def test-game (assoc helper/test-game :status :playing :player1 player1 :player2 player2 :box-played 4))

(defn play-test-game [game played-boxes]
  (loop [game (tcore/save-game game) boxes played-boxes]
    (if (empty? boxes)
      game
      (let [box (first boxes)]
        (recur (gm/update-game-with-move! game box) (rest boxes))))))

(describe "Saving in MySQL"

  (it "Connects to Datasource"
    (should (mysql/connect db-test-name)))

  (it "Shows Tables in Database"
    (mysql/show-tables db-test-name)
    (mysql/show-tables "ttt")
    (should-not-be-nil (map #(:Tables_in_test %) (mysql/show-tables db-test-name)))
    (should-not-be-nil (map #(:Tables_in_ttt %) (mysql/show-tables "ttt"))))

  (it "Gets the Last Game's ID"
    (should (int? (mysql/get-last-game-id (mysql/connect "ttt")))))

  (it "Saves Last Turn"
    (should (int? (:gameID (tcore/save-turn test-game)))))

  (it "Saves Players"
    (should-be-nil (mysql/save-players db-test-name test-game))
    (should-be-nil (mysql/save-players db-test-name test-game)))

  (it "Saves a Game"
    (should (int? (:gameID (tcore/save-game test-game)))))

  (it "Loading of Game"
    (let [played-game (play-test-game test-game [0 1 2])
          loaded-game (tcore/load-game played-game)]
      (should= 3 (:board-size loaded-game))
      (should= :player2 (:current-player loaded-game))
      (should= player1 (:player1 loaded-game))
      (should= player2 (:player2 loaded-game))
      (should= ["X" "O" "X" 3 4 5 6 7 8] (:board loaded-game))
      (should= 0 (:users loaded-game))
      (should= :playing (:status loaded-game))))


  (it "tests a failing board"
    (let [player1 {:player-num 1 :piece "X" :type :human}
          player2 {:player-num 2 :piece "O" :type :human}
          game (assoc test-game
                 :player1 player1
                 :player2 player2)
          played-game (play-test-game game [0 2])]
      (should= ["X" 1 "O" 3 4 5 6 7 8]
               (:board (tcore/load-game played-game)))))

  )
