(ns ttt.gui.mouse-clicks
  (:require [ttt.gui.boxes :as box]
            [ttt.gui.multimethods :as gcore]
            [ttt.gui.mouse-location :as mouse]
            [ttt.board.board :as board]
            [ttt.master.core :as tcore]
            [ttt.master.game-master :as game]
            [quil.core :as q]))

(defmethod gcore/mouse-clicked :waiting [state event]
  (if (mouse/in-button? (:x event) (:y event))
      (if (:game-over? (:last-game state))
        (assoc state :status :board-setup)
        (assoc state :status :restart?))
    state))

(defmethod gcore/mouse-clicked :restart? [state event]
  (cond (mouse/hovering-piece-option? 1 (:x event) (:y event)) (assoc (:last-game state) :console :gui)
        (mouse/hovering-piece-option? 2 (:x event) (:y event)) (assoc state :status :user-setup)
        :else state))

(defmethod gcore/key-typed :board-setup [state event]
  (let [key-stroke (:raw-key event)]
    (assoc state :key-stroke (- (int key-stroke) 48))))

(defmethod gcore/mouse-clicked :board-setup [state event]
  (let [board-size (:key-stroke state)]
    (when (int? board-size)
      (assoc state :board (board/create-board board-size)
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
  (cond (mouse/hovering-piece-option? 1 (:x event) (:y event)) (game/set-players state :human)
        (mouse/hovering-piece-option? 2 (:x event) (:y event)) (game/set-players state :computer)
        :else state))

(defmethod gcore/mouse-clicked :level-setup [state event]
  (cond (mouse/hovering-option? 0 (:x event) (:y event)) (game/set-level state :easy)
        (mouse/hovering-option? 1 (:x event) (:y event)) (game/set-level state :medium)
        (mouse/hovering-option? 2 (:x event) (:y event)) (game/set-level state :hard)
        :else state))

(defmethod gcore/mouse-clicked :play-again [state event]
  (tcore/play-again state))

(defmethod gcore/mouse-clicked :playing [state event]
  (let [boxes (board/create-board (:board-size state))
        box (first (filter #(box/mouse-in-box? % state (:x event) (:y event)) boxes))]
    (if (nil? box)
      state
      (game/play-turn! (game/update-game-with-move! state box)))))

(defmethod gcore/mouse-clicked :game-over [state event]
  state)