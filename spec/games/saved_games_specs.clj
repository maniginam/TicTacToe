(ns games.saved-games-specs
  (:require [speclj.core :refer :all]
            [games.saved-games :refer :all]))

(def player1 {:player-num 1 :piece "X" :type :human})
(def player2 {:player-num 2 :piece "O" :type :computer})
(def standard-board [0 1 2 3 4 5 6 7 8])

(describe "Saves the Game:"

  (it "saves a file"
    (let [game {:status :spitting :database :file}]
      (should= (str game) (slurp (save-game game)))))

  (it "pulls recent or called for game"
    (let [game {:status :spitting :database :file}]
      (should= game (pull-game))))

  (it "ends a game in the middle"
    (let [game {:database :file :console :terminal :game-count 2 :users 1 :level :hard :depth 0 :current-player :player1 :box-played nil :player1 player1 :player2 player2 :board ["X" 1 "O" 3 4 5 6 7 8]}]
      (save-game game)))
  )