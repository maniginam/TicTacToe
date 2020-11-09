(ns games.mysql-specs
  (:require [games.mysql :as mysql]
            [ttt.core :as tcore]
            [ttt.game-master :as gm]
            [ttt.terminal-specs]                            ;; TODO - GLM : sloppy, only used for show-move
            [speclj.core :refer :all]))

(def test-db {:dbtype "mysql" :host :none :user "root" :password "topsecret"})
(def db-test-name "test")
(def test-ds (mysql/connect db-test-name))
(def player1 {:player-num 1 :piece "X" :type :computer})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def test-game {:db "test" :dbname "test " :persistence {:db :mysql :dbname "test" :table "TEST"} :status :playing :console :gui :users 1 :current-player :player1 :board-size 3 :board ["X" 1 2 3 "O" 5 6 7 8] :player1 player1 :player2 player2 :box-played 4})

(defn play-test-game [game played-boxes]
  (tcore/save-game game)
  (loop [game game boxes played-boxes]
    (tcore/save-turn game)
    (if (empty? boxes)
      game
      (let [box (first boxes)]
        (recur (gm/update-game-with-move game box) (rest boxes))))))

(describe "Saving in MySQL"

  (it "Connects to Datasource"
    (should (mysql/connect db-test-name)))

  (it "Shows Tables in Database"
    (should= ["game" "pets" "players" "turns"] (map #(:Tables_in_test %) (mysql/show-tables db-test-name)))
    (should= ["game" "players" "turns"] (map #(:Tables_in_ttt %) (mysql/show-tables "ttt"))))

  (it "Gets the Last Game's ID"
    (should (int? (mysql/get-last-game-id (mysql/connect db-test-name)))))

  (it "Saves Last Turn"
    (should= nil (tcore/save-turn test-game))
    (should= nil (tcore/save-turn test-game))
    (should= nil (tcore/save-turn test-game)))

  (it "Saves Players"
    (should= nil (mysql/save-players db-test-name test-game))
    (should= nil (mysql/save-players db-test-name test-game)))

  (it "Saves a Game"
    (should= nil (tcore/save-game test-game)))

  (it "Loading of Game"
    (let [player1 {:player-num 1 :piece "X" :type :computer}
          player2 {:player-num 2 :piece "O" :type :computer}
          game (assoc tcore/game-model :persistence    {:db :mysql :dbname "test" :table "TEST"}
                                       :users          0
                                       :player1        player1
                                       :player2        player2)
          played-game (play-test-game game [0 1 2])
          loaded-game (tcore/load-game played-game)]
      (should= 3 (:board-size loaded-game))
      (should= :player2 (:current-player loaded-game))
      (should= player1 (:player1 loaded-game))
      (should= player2 (:player2 loaded-game))
      (should= ["X" "O" "X" 3 4 5 6 7 8] (:board loaded-game))
      (should= 0 (:users loaded-game))
      (should= :playing (:status loaded-game))))


  (it "tests a failing board"
    (with-out-str (let [game (play-test-game {:console        :terminal :db "test" :dbname "test" :users 2
                                              :persistence    {:db :mysql :dbname "test" :table "TEST"}
                                              :player1        {:player-num 1 :piece "X" :type :human}
                                              :player2        {:player-num 2 :piece "O" :type :human}
                                              :current-player :player2 :board-size 3 :board [0 1 2 3 4 5 6 7 8]}
                                             [0 2])]
                    (should= ["X" 1 "O" 3 4 5 6 7 8]
                             (:board (tcore/load-game game))))))

  )
