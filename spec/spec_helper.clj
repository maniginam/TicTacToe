(ns spec-helper
  (:require [speclj.core :refer :all]
            [ttt.core :as tcore]))

(def player1 {:player-num 1 :piece "X" :type :mock})
(def player2 {:player-num 2 :piece "O" :type :mock})
(def standard-board [0 1 2 3 4 5 6 7 8])
(def console (atom :mock))

(def empty-game (assoc tcore/game-model
                  :persistence {:db :mock :dbname "test" :table "TEST"}
                  :console :mock))
(def test-game (assoc tcore/game-model
                 :persistence {:db :mock :dbname "test" :table "TEST"}
                 :console :mock
                 :users 0
                 :box-played nil
                 :player1 player1
                 :player2 player2
                 :board standard-board
                 :board-size 3))

(def mock-move (atom 0))
(defmethod tcore/select-box :mock [_ game] @mock-move)

(def mock-position (atom "x"))
(defmethod tcore/offer-position :mock [game] @mock-position)

(def mock-restart? (atom false))
(defmethod tcore/restart? :mock [game] @mock-restart?)
(defmethod tcore/restart :mock [game]
  (let [last-game (:last-game game)]
    (assoc last-game :console (:console game))))

(def mock-player-count (atom 0))
(defmethod tcore/validate-player-count :mock [game] @mock-player-count)

(def mock-board-size (atom 3))
(defmethod tcore/set-board-size :mock [game] @mock-board-size)

(def mock-level (atom :hard))
(defmethod tcore/prompt-for-level :mock [game] @mock-level)

(defmethod tcore/draw-state :mock [game] nil)

