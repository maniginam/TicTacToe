(ns try-ttt.try-ttt-specs
  (:require [speclj.core :refer :all]
            [try-ttt.try-ttt :refer :all]))

(def boards {:three-by-three {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}})
(def players {:player1 {:player 1 :piece "X" :type :computer} :player2 {:player 2 :piece "O" :type :computer}})

;(describe "Play DEFAULT Tic Tac Toe:"

  ;(it "plays 0 user, 3x3 board game"
  ;  (let [game {:users 0 :board (:three-by-three boards) :player :player1 :player1 (:player1 players) :player2 (:player2 players)}]
  ;    (should= game (setup :default))
  ;    (should= (assoc game :loser 0) (play-game game)))))