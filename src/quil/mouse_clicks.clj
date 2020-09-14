(ns quil.mouse-clicks
  (:require [quil.core :refer :all]
            [ttt.core :refer :all]
            [quil.dimensions :as dim]
            [quil.mouse-location :refer :all]))


(defmethod mouse-clicked :waiting [state event]
  (if (mouse-in-button? (:x event) (:y event))
    (assoc state :status :user-setup)))

(defmethod mouse-clicked :user-setup [state event]
  (cond (mouse-hovering-option? 0 (:x event) (:y event)) (assoc state :users 0 :status :player1)
        (mouse-hovering-option? 1 (:x event) (:y event)) (assoc state :users 1 :status :player-setup)
        (mouse-hovering-option? 2 (:x event) (:y event)) (assoc state :users 2 :status :player1)))

(defmethod mouse-clicked :player-setup [state event]
  (cond (mouse-hovering-piece-option? 1 (:x event) (:y event)) (assoc state :player1 {:player 1 :piece "x" :type :human} :status :player1)
        (mouse-hovering-piece-option? 2 (:x event) (:y event)) (assoc state :player2 {:player 2 :piece "o" :type :human} :status :player1)))