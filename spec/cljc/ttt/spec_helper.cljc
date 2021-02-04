(ns ttt.spec-helper
  ;cljc
  (:require
    #?(:clj [ttt.master.core :as tcore])))

(def player1 {:player-num 1 :piece "X" :type :mock})
(def player2 {:player-num 2 :piece "O" :type :mock})
(def standard-board [0 1 2 3 4 5 6 7 8])
(def console (atom :mock))

(def test-game {:status :waiting
                 :persistence {:db :mock :dbname "test" :table "TEST"}
                 :console :mock
                 :users 0
                 :player1 player1
                 :player2 player2
                 :level :hard
                 :board [0 1 2 3 4 5 6 7 8]
                 :board-size 3})

(def mock-move (atom 0))
#?(:clj (defmethod tcore/select-box :mock [_ game] @mock-move))

(def mock-position (atom "x"))
#?(:clj (defmethod tcore/offer-position :mock [game] @mock-position))

(def mock-restart? (atom false))
#?(:clj (defmethod tcore/restart? :mock [game] @mock-restart?))

(def mock-player-count (atom 0))
#?(:clj (defmethod tcore/validate-player-count :mock [game] @mock-player-count))

(def mock-board-size (atom 3))
#?(:clj (defmethod tcore/set-board-size :mock [game] @mock-board-size))

(def mock-level (atom :hard))
#?(:clj (defmethod tcore/prompt-for-level :mock [game] @mock-level))

#?(:clj (defmethod tcore/draw-state :mock [game] nil))

