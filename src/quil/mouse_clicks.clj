(ns quil.mouse-clicks
  (:require [quil.core :refer :all]
            [ttt.core :refer :all]
            [quil.dimensions :as dim]
            [quil.mouse-location :refer :all]))


(defmethod mouse-clicked :waiting [state event]
  (if (mouse-in-button? (:x event) (:y event))
    (assoc state :status :user-setup)))

(defmethod mouse-clicked :user-setup [state event]
  (cond (mouse-hovering-option? 0 (:x event) (:y event)) (assoc state :users 0 :status :playing :player :player1 :player1 {:player 1 :piece "X" :type :computer} {:player 2 :piece "O" :type :computer})
        (mouse-hovering-option? 1 (:x event) (:y event)) (assoc state :users 1 :status :player-setup)
        (mouse-hovering-option? 2 (:x event) (:y event)) (assoc state :users 2 :status :playing :player :player1 :player1 {:player 1 :piece "X" :type :human} :player2 {:player 2 :piece "O" :type :human})))

(defmethod mouse-clicked :player-setup [state event]
  (cond (mouse-hovering-piece-option? 1 (:x event) (:y event)) (assoc state :status :playing :player :player1 :player1 {:player 1 :piece "X" :type :human} :player2 {:player 2 :piece "O" :type :computer})
        (mouse-hovering-piece-option? 2 (:x event) (:y event)) (assoc state :status :playing :player :player1 :player1 {:player 1 :piece "X" :type :computer} :player2 {:player 2 :piece "O" :type :human})))

(defmethod mouse-clicked :playing [state event]
  ;(if (mouse-in-box? (:x event) (:y event))
  (let [box-clicked 0]
    (assoc state :box-clicked box-clicked :board (assoc (:board state) box-clicked "X") :player :player2)
  box-clicked)
  )