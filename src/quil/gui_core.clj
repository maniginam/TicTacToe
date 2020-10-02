(ns quil.gui-core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.ai :refer :all]
            [ttt.game-master :refer :all]
            [ttt.game-setup :as setup]))


(defmethod play-again :gui [state]
  (-> state
      (assoc :status :board-setup)
      (assoc :message-key :board-setup)
      (assoc :console :gui)
      (assoc :users nil)
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

(defmethod restart :gui [state]
  (let [filed-game (setup/get-last-game)
        last-game (assoc filed-game :old-console (:console filed-game) :console (:console state))]
  (-> state
      (assoc :status (:status last-game))
      (assoc :board-size (:board-size last-game))
      (assoc :users (:users last-game))
      (assoc :current-player (:current-player last-game))
      (assoc :player1 (:player1 last-game))
      (assoc :player2 (:player2 last-game))
      (assoc :board (:board last-game))
      (assoc :played-boxes (:played-boxes last-game))
      (assoc :message-key :nil)
      (assoc :game-count (:game-count last-game)))))



(defmulti user-message :status)
(defmulti mouse-clicked (fn [state _] (:status state)))
(defmulti key-typed (fn [state _] (:status state)))
(defmulti draw-user-prompt (fn [state & _] (:status state)))
(defmulti draw-piece (fn [state _ _] (:current-player state)))




