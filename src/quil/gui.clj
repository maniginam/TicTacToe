(ns quil.gui
  (:require [quil.boxes :as box]
            [quil.button :as button]
            [quil.core :as q]
            [quil.gui-core :as gcore]
            [quil.middleware :as m]
            [ttt.board :as board]
            [ttt.core :as tcore]
            [ttt.game-master :as gm]
            [quil.board :as gui-board]))
;; COMPLETE - TODO - GLM : No more :refer :all.  Kill them all!


;; COMPLETE - TODO - GLM : Use a model game, kept in tcore and modify as needed?
(defn setup-gui []
  (q/frame-rate 50)
  (q/set-state! tcore/game-model))
                ;; COMPLETE TODO - GLM : Maybe like this: persistence {:db :mysql :table "TTT" :db "ttt"}
                ;; TODO - GLM : Maybe one key for all ui stuff

(defn get-message-key [state]
  (cond (= (:status state) :playing) (if (= :player1 (:current-player state)) :player1 :player2)
        (= (:status state) :game-over) (cond (= (:winner state) 0) :catsgame (= (:winner state) 1) :x-won :else :o-won)
        :else (:status state)))

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


(defmethod tcore/run :gui [console]
  (q/defsketch gui
               :title "Tic Tac Toe"
               :resizable true
               :size [700 800]
               :setup setup-gui
               :update gm/update-state
               :draw tcore/draw-state
               :mouse-clicked gcore/mouse-clicked
               :key-typed gcore/key-typed
               :features [:keep-on-top]
               :middleware [m/fun-mode])
  )



