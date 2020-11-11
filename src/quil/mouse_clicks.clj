(ns quil.mouse-clicks
  (:require [games.h2 :as h2]
            [games.saved-games :as saved]
            [quil.boxes :as box]
            [quil.gui-core :as gcore]
            [quil.mouse-location :as mouse]
            [ttt.board :as board]
            [ttt.core :as tcore]
            [ttt.core :as tcore]
            [ttt.game-master :as game]
            [ttt.game-master :as gm]
            [quil.core :as q]))

(defmethod gcore/mouse-clicked :waiting [state event]
  (if (mouse/in-button? (:x event) (:y event))
      (if (:game-over? (:last-game state))
        (assoc state :status :board-setup)
        (assoc state :status :restart?))
    state))

(defmethod gcore/mouse-clicked :restart? [state event]
  (cond (mouse/hovering-piece-option? 1 (:x event) (:y event)) (tcore/restart state)
        (mouse/hovering-piece-option? 2 (:x event) (:y event)) (assoc state :status :user-setup)
        :else state))

(defmethod gcore/key-typed :board-setup [state event]
  (let [key-stroke (:raw-key event)]
    (assoc state :key-stroke (- (int key-stroke) 48))))

(defmethod gcore/mouse-clicked :board-setup [state event]
  (let [board-size (:key-stroke state)]
    (when (int? board-size)
      (assoc state :board (board/create-board board-size)
                   :board-set true
                   :board-size board-size
                   :status :ready-to-play))))

;; COMPLETE - TODO - GLM : Don't save in here
(defmethod gcore/mouse-clicked :user-setup [state event]
  (cond (mouse/hovering-option? 0 (:x event) (:y event))
        (assoc state :status :level-setup
                     :users 0
                     :player1 (assoc (:player1 state) :type :computer)
                     :player2 (assoc (:player2 state) :type :computer))
        (mouse/hovering-option? 1 (:x event) (:y event))
        (assoc state :status :player-setup
                     :users 1)
        (mouse/hovering-option? 2 (:x event) (:y event))
        (assoc state :status :board-setup
                     :users 2
                     :player1 (assoc (:player1 state) :type :human)
                     :player2 (assoc (:player2 state) :type :human))
        :else state))

(defmethod gcore/mouse-clicked :player-setup [state event]
  (cond (mouse/hovering-piece-option? 1 (:x event) (:y event)) (gm/set-players state :human)
        (mouse/hovering-piece-option? 2 (:x event) (:y event)) (gm/set-players state :computer)
        :else state))

(defmethod gcore/mouse-clicked :level-setup [state event]
  (cond (mouse/hovering-option? 0 (:x event) (:y event)) (gm/set-level state :easy)
        (mouse/hovering-option? 1 (:x event) (:y event)) (gm/set-level state :medium)
        (mouse/hovering-option? 2 (:x event) (:y event)) (gm/set-level state :hard)
        :else state))

(defmethod gcore/mouse-clicked :play-again [state event]
  (tcore/play-again state))

(defmethod gcore/mouse-clicked :playing [state event]
  (let [boxes (board/create-board (:board-size state))
        box (first (filter #(box/mouse-in-box? % state (:x event) (:y event)) boxes))]
    (if (nil? box)
      state
      (gm/play-turn! (game/update-game-with-move state box)))))