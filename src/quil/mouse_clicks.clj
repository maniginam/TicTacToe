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
    (let [sql-game (tcore/load-game state)
          last-sql-game (assoc sql-game :old-console (:console sql-game) :console (:console state))
          filed-game (saved/pull-game)
          last-filed-game (assoc filed-game :old-console (:console filed-game) :console (:console state))
          db-game (h2/get-last-db-game (:table state))
          last-game (assoc db-game :old-console (:console db-game) :console (:console state))]
      (if (:game-over last-sql-game)
        (assoc state :status :board-setup)
        (assoc state :status :restart? :last-game last-game)))
    state))

(defmethod gcore/mouse-clicked :restart? [state event]
  (cond (mouse/hovering-piece-option? 1 (:x event) (:y event)) (tcore/restart state)
        (mouse/hovering-piece-option? 2 (:x event) (:y event)) (assoc state :status :board-setup)
        :else state))

(defmethod gcore/key-typed :board-setup [state event]
  (let [key-stroke (:raw-key event)]
    (assoc state :key-stroke (- (int key-stroke) 48))))

(defmethod gcore/mouse-clicked :board-setup [state event]
  (let [board-size (:key-stroke state)]
    (when (int? board-size)
      (assoc state :board (board/create-board board-size) :board-set true :board-size board-size :status :user-setup))))

;; TODO - GLM : Don't save in here
(defmethod gcore/mouse-clicked :user-setup [state event]
  (cond (mouse/hovering-option? 0 (:x event) (:y event))
        (let [new-state (assoc state :users 0 :status :level-setup :current-player :player1 :player1
                                     (assoc (:player1 state) :type :computer) :player2 (assoc (:player2 state) :type :computer))]
          (tcore/save-game (:db state) new-state) new-state)
        (mouse/hovering-option? 1 (:x event) (:y event)) (assoc state :users 1 :status :player-setup)
        (mouse/hovering-option? 2 (:x event) (:y event)) (let [new-state (assoc state :users 2 :status :playing :current-player :player1 :player1 (assoc (:player1 state) :type :human) :player2 (assoc (:player2 state) :type :human))] (tcore/save-game (:db state) new-state) new-state)
        :else state))

(defmethod gcore/mouse-clicked :player-setup [state event]
  (cond (mouse/hovering-piece-option? 1 (:x event) (:y event)) (assoc state :status :level-setup :current-player :player1 :player1 (assoc (:player1 state) :type :human) :player2 (assoc (:player2 state) :type :computer))
        (mouse/hovering-piece-option? 2 (:x event) (:y event)) (assoc state :status :level-setup :current-player :player1 :player1 (assoc (:player1 state) :type :computer) :player2 (assoc (:player2 state) :type :human))
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
        board (:board state)
        box (first (filter #(box/mouse-in-box? % state (:x event) (:y event)) boxes))]
    (cond (nil? box) state
          (not (board/is-box-open? board box)) (do (gcore/draw-piece state (box/size-boxes state) [(q/mouse-x) (q/mouse-y) [255 0 0]]) state)
          :else (let [play (game/update-game-with-move state box)]
                  (tcore/save-turn (:db state) (assoc state :box-played box))
                  (saved/save-game play)
                  (tcore/save-game play (:table state))
                  play))))