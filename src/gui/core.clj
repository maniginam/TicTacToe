(ns gui.core
  (:require [gui.board :as gui-board]
            [gui.boxes :as box]
            [gui.button :as button]
            [gui.gui-core :as gcore]
            [gui.human-prompts :as prompt]
            [gui.mouse-clicks :as mouse]
            [quil.core :as q]
            [quil.middleware :as m]
            [ttt.board :as board]
            [ttt.core :as tcore]
            [ttt.game-master :as gm]))
;; COMPLETE - TODO - GLM : No more :refer :all.  Kill them all!


(defn get-player-num [state] (:player-num ((:current-player state) state)))

(defn maybe-draw-prompt [state]
  (if (or (= (:status state) :user-setup) (= (:status state) :player-setup)
          (= (:status state) :board-setup) (= (:status state) :level-setup)
          (= (:status state) :restart?))
    (gcore/draw-user-prompt state)))

;; COMPLETE - TODO - GLM : Smelly.  If there a better way?

(defn maybe-draw-filled-box [state]
  (let [boxes (board/played-boxes (:board state))]
    (when (not (empty? boxes))
      (doseq [box boxes]
        (box/draw-box box state false)))))

(defn maybe-draw-piece [state]
  (when (= (:status state) :playing)
    (let [x (q/mouse-x)
          y (q/mouse-y)]
      (gcore/draw-piece state (box/size-boxes state) [x y]))))

(defmethod tcore/draw-state :gui [state]
  (gui-board/draw-console)
  (gui-board/draw-gui-board (:board-size state))
  (button/draw-game-button state)
  (maybe-draw-prompt state)
  (maybe-draw-filled-box state)
  (maybe-draw-piece state))

(defmethod tcore/run-game :gui [interface]
  (q/sketch
    :title "Tic Tac Toe"
    :size [700 800]
    :setup gcore/setup-gui
    :update gm/update-state
    :draw tcore/draw-state
    :mouse-clicked gcore/mouse-clicked
    :key-typed gcore/key-typed
    :features [:keep-on-top]
    :middleware [m/fun-mode]))