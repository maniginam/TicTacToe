(ns quil.mouse-clicks
  (:require [quil.core :refer :all]
            [ttt.core :refer :all]
            [ttt.user-inputs :refer :all]
            [ttt.board :refer :all]
            [ttt.default-game :refer :all]
            [quil.gui-game :refer :all]
            [quil.dimensions :as dim]
            [quil.mouse-location :refer :all]
            [quil.boxes :refer :all]
            [quil.core :as q]))


(defmethod mouse-clicked :waiting [state event]
  (if (mouse-in-button? (:x event) (:y event))
    (assoc state :status :user-setup)))

(defn key-typed [state event]
  (let [key-stroke (:raw-key event)]
    (assoc state :key-stroke key-stroke)))

(defmethod mouse-clicked :board-setup [state event]
  (if (valid-for-int-type? (:key-stroke state))
    (let [board-size (Integer/parseInt (:key-stroke state))]
    (assoc state :board (create-board board-size) :board-size board-size :status :player-setup))))

(defmethod mouse-clicked :user-setup [state event]
  (cond (mouse-hovering-option? 0 (:x event) (:y event)) (assoc state :users 0 :status :playing :player1 (assoc (:player1 state) :type :computer) :player2 (assoc (:player2 state) :type :computer))
        (mouse-hovering-option? 1 (:x event) (:y event)) (assoc state :users 1 :status :player-setup)
        (mouse-hovering-option? 2 (:x event) (:y event)) (assoc state :users 2 :status :playing :player1 (assoc (:player1 state) :type :human) :player2 (assoc (:player2 state) :type :human))))

(defmethod mouse-clicked :player-setup [state event]
  (cond (mouse-hovering-piece-option? 1 (:x event) (:y event)) (assoc state :status :playing :player1 (assoc (:player1 state) :type :human) :player2 (assoc (:player2 state) :type :computer))
        (mouse-hovering-piece-option? 2 (:x event) (:y event)) (assoc state :status :playing :player1 (assoc (:player1 state) :type :computer) :player2 (assoc (:player2 state) :type :human))))

(defmethod mouse-clicked :playing [state event]
  (let [board (:board state)
        box (first (filter #(mouse-in-box? % state (:x event) (:y event)) (keys board)))]
    (if (nil? box) nil (play-turn state box))))