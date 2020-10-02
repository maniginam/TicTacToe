(ns quil.mouse-clicks
  (:require [quil.core :as q]
            [ttt.core :refer :all]
            [ttt.user-inputs :as input]
            [ttt.board :as board]
            [ttt.game-master :as game]
            [ttt.game-setup :as setup]
            [quil.gui-core :refer :all]
            [quil.dimensions :as dim]
            [quil.mouse-location :as mouse]
            [quil.boxes :as box]
            [games.saved-games :as saved]))

(defmethod mouse-clicked :waiting [state event]
  (if (mouse/in-button? (:x event) (:y event))
    (let [filed-game (setup/get-last-game)
          last-game (assoc filed-game :old-console (:console filed-game) :console (:console state))]
      (if (:game-over last-game)
        (assoc state :status :board-setup)
        (assoc state :status :restart?)))
    state))

    (defmethod mouse-clicked :restart? [state event]
      (cond (mouse/hovering-piece-option? 1 (:x event) (:y event)) (restart state)
            (mouse/hovering-piece-option? 2 (:x event) (:y event)) (assoc state :status :board-setup)
            :else state))

    (defmethod key-typed :board-setup [state event]
      (let [key-stroke (:raw-key event)]
        (if (:enter-key? event)
          (if (int? (:key-stroke state))
            (assoc state :board (board/create-board key-stroke) :board-set true :board-size key-stroke :user-setup))
          (assoc state :key-stroke (- (int key-stroke) 48)))))

    (defmethod mouse-clicked :board-setup [state event]
      (let [board-size (:key-stroke state)]
        (if (int? board-size)
          (assoc state :board (board/create-board board-size) :empty-board (board/create-board board-size) :board-set true :board-size board-size :status :user-setup))))

    (defmethod mouse-clicked :user-setup [state event]
      (cond (mouse/hovering-option? 0 (:x event) (:y event)) (assoc state :users 0 :status :level-setup :current-player :player1 :player1 (assoc (:player1 state) :type :computer) :player2 (assoc (:player2 state) :type :computer))
            (mouse/hovering-option? 1 (:x event) (:y event)) (assoc state :users 1 :status :player-setup)
            (mouse/hovering-option? 2 (:x event) (:y event)) (assoc state :users 2 :status :playing :current-player :player1 :player1 (assoc (:player1 state) :type :human) :player2 (assoc (:player2 state) :type :human))
            :else state))

    (defmethod mouse-clicked :player-setup [state event]
      (cond (mouse/hovering-piece-option? 1 (:x event) (:y event)) (assoc state :status :level-setup :current-player :player1 :player1 (assoc (:player1 state) :type :human) :player2 (assoc (:player2 state) :type :computer))
            (mouse/hovering-piece-option? 2 (:x event) (:y event)) (assoc state :status :level-setup :current-player :player1 :player1 (assoc (:player1 state) :type :computer) :player2 (assoc (:player2 state) :type :human))
            :else state))

    (defmethod mouse-clicked :level-setup [state event]
      (cond (mouse/hovering-option? 0 (:x event) (:y event)) (assoc state :status :playing :level :easy :depth 2)
            (mouse/hovering-option? 1 (:x event) (:y event)) (assoc state :status :playing :level :medium :depth 1)
            (mouse/hovering-option? 2 (:x event) (:y event)) (assoc state :status :playing :level :hard :depth 0)
            :else state))

    (defmethod mouse-clicked :play-again [state event]
      (play-again state))

    (defmethod mouse-clicked :playing [state event]
      (let [boxes (:empty-board state)
            board (:board state)
            box (first (filter #(box/mouse-in-box? % state (:x event) (:y event)) boxes))]
        (cond (nil? box) state
              (not (board/is-box-open? board box)) (do (draw-piece state (box/size-boxes state) [(q/mouse-x) (q/mouse-y) [255 0 0]]) state)
              :else (let [play (game/play-turn state box)]
                      (saved/save-game play)
                      play))))