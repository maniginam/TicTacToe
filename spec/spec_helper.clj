(ns spec-helper
  (:require [speclj.core :refer :all]
            [ttt.core :as tcore]))


(def mock-move (atom 0))
(defmethod tcore/select-box :mock [_ game] @mock-move)

(def player1 {:player-num 1 :piece "X" :type :mock})
(def player2 {:player-num 2 :piece "O" :type :mock})
(def standard-board [0 1 2 3 4 5 6 7 8])
(def test-game {:db "test"
                :table "TEST"
                :users 0
                :level :hard
                :current-player :player1
                :box-played nil
                :player1 player1
                :player2 player2
                :board standard-board
                :board-size 3})