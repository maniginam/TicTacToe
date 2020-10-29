(ns games-specs.mysql-specs
  (:require [speclj.core :refer :all]
            [ttt.core :refer :all]
            [games.mysql :refer :all]
            [ttt.game-master :refer :all]
            [quil.gui :refer :all]))

(def test-db {:dbtype "mysql" :host :none :user "root" :password "topsecret"})
(def db-test-name "test")
(def test-ds (connect db-test-name))
(def player1 {:player-num 1 :piece "X" :type :computer})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def test-game {:db "test" :status :playing :console :gui :users 1 :depth 0 :current-player :player1 :board-size 3 :board ["X" 1 2 3 "O" 5 6 7 8] :player1 player1 :player2 player2 :box-played 4})

(defn play-test-game [game played-boxes]
  (save-game db-test-name game)
  (loop [game game boxes played-boxes]
    (save-turn db-test-name game)
    (if (empty? boxes)
      game
      (let [box (first boxes)]
        (recur (update-game-with-move game box) (rest boxes))))))

(describe "Saving in MySQL"

  (it "Connects to Datasource"
    (should (connect db-test-name)))

  (it "Shows Tables in Database"
    (should= ["game" "pets" "players" "turns"] (map #(:Tables_in_test %) (show-tables db-test-name)))
    (should= ["game" "players" "turns"] (map #(:Tables_in_ttt %) (show-tables "ttt"))))

  (it "Gets the Last Game's ID"
    (should (int? (get-last-game-id (connect db-test-name)))))

  (it "Saves Last Turn"
    (should= nil (save-turn db-test-name test-game))
    (should= nil (save-turn db-test-name test-game))
    (should= nil (save-turn db-test-name test-game)))

  (it "Saves Players"
    (should= nil (save-players db-test-name test-game))
    (should= nil (save-players db-test-name test-game)))

  (it "Saves a Game"
    (should= nil (save-game db-test-name test-game)))

  ;(let [player1 {:player-num 1 :piece "X" :type :computer}
  ;      player2 {:player-num 2 :piece "O" :type :computer}
  ;      game (play-test-game {:console :default
  ;                            :users 0
  ;                            :player1 player1
  ;                            :player2 player2
  ;                            :board-size 3
  ;                            :depth 0
  ;                            :current-player :player2} [0 1 2])
  ;      loaded-game (load-game db-test-name game)]
  ;  (for [[result game-key]
  ;        [[3 :board-size]
  ;         [:player1 :current-player]
  ;         [player1 :player1]
  ;         [player2 :player2]
  ;         [["X" "O" "X" 3 4 5 6 7 8] :board]
  ;         [[0 1 2 3 4 5 6 7 8] :empty-board]
  ;         [0 :depth]
  ;         [0 :users]
  ;         [:playing :status]
  ;         ]]
  ;    (it (str "Loading " game-key " of Game")
  ;      (should= result (get loaded-game game-key)))))


  (it "Loading of Game"
    (let [player1 {:player-num 1 :piece "X" :type :computer}
          player2 {:player-num 2 :piece "O" :type :computer}
          game (play-test-game {:console        :default
                                :board          [0 1 2 3 4 5 6 7 8]
                                :users          0
                                :player1        player1
                                :player2        player2
                                :board-size     3
                                :depth          0
                                :current-player :player1} [0 1 2])
          loaded-game (load-game db-test-name game)]
      (println "(:board game): " (:board game))
      (should= 3 (:board-size loaded-game))
      (should= :player2 (:current-player loaded-game))
      (should= player1 (:player1 loaded-game))
      (should= player2 (:player2 loaded-game))
      (should= ["X" "O" "X" 3 4 5 6 7 8] (:board loaded-game))
      (should= [0 1 2 3 4 5 6 7 8] (:empty-board loaded-game))
      (should= 0 (:depth loaded-game))
      (should= 0 (:users loaded-game))
      (should= :playing (:status loaded-game))))


  (it "tests a failing board"
    (with-out-str (let [game (play-test-game {:console        :terminal :db "test" :dbname "test" :users 2
                                              :player1        {:player-num 1 :piece "X" :type :human}
                                              :player2        {:player-num 2 :piece "O" :type :human}
                                              :current-player :player2 :board-size 3 :board [0 1 2 3 4 5 6 7 8]}
                                             [0 2])]
                    (should= ["X" 1 "O" 3 4 5 6 7 8]
                             (:board (load-game "test" game))))))


  )
