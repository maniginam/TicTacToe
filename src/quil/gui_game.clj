(ns quil.gui-game
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.ai :refer :all]
            [ttt.default-game :refer :all]))


(defmethod play-again :gui [state]
  (-> state
      (assoc :status :user-setup)
      (assoc :message-key :user-setup)
      (assoc :console :gui)
      (assoc :users nil)
      (assoc :board-size (int 3))
      (assoc :key-stroke nil)
      (assoc :enter-key? false)
      (assoc :current-player :player1)
      (assoc :player1 {:player-num 1 :piece "X"})
      (assoc :player2 {:player-num 2 :piece "O"})
      (assoc :board [0 1 2 3 4 5 6 7 8])
      (assoc :ai-turn false)
      (assoc :boxes nil)
      (assoc :turn nil)
      (assoc :played-boxes [])
      (assoc :game-over false)
      (assoc :winner nil)
      (assoc :pause 0)))

(defmulti user-message :status)
(defmulti mouse-clicked (fn [state _] (:status state)))
(defmulti key-typed (fn [state _] (:status state)))
(defmulti draw-user-prompt (fn [state & _] (:status state)))
(defmulti draw-piece (fn [state _ _] (:current-player state)))




