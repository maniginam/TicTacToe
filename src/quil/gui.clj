(ns quil.gui
  (:require [quil.boxes :as box]
            [quil.boxes :as box]
            [quil.button :as button]
            [quil.core :as q]
            [quil.gui-core :as gcore]
            [quil.middleware :as m]
            [ttt.board :as board]
            [ttt.core :as tcore]
            [ttt.game-master :as gm]
            [quil.board :as gui-board]))
;; TODO - GLM : No more :refer :all.  Kill them all!


;; TODO - GLM : Use a model game, kept in tcore and mofigy as needed?
(defn setup-gui []
  (q/frame-rate 50)
  (q/set-state! :status :waiting
                :persistence :mysql
                :game-count 0
                :message-key :waiting
                :console :gui
                :database :mysql
                :users nil
                :board-size 3
                :board-set? false
                :key-stroke nil
                :current-player :player1
                :player1 {:player-num 1 :piece "X" :type nil}
                :player2 {:player-num 2 :piece "O" :type nil}
                :current-plyr-num 1
                :board [0 1 2 3 4 5 6 7 8]
                :ai-turn false
                :boxes nil
                :level :hard
                :turn nil
                :game-over false
                :play-again-pause 0
                :winner nil
                :table "TTT"
                :dbname "ttt"
                ;; TODO - GLM : Maybe like this
                ;:persistence {:db :mysql :table "TTT" :db "ttt"}
                ;; TODO - GLM : Maybe one key for all ui stuff
                ))

(defn get-message-key [state]
  (cond (= (:status state) :playing) (if (= :player1 (:current-player state)) :player1 :player2)
        (= (:status state) :game-over) (cond (= (:winner state) 0) :catsgame (= (:winner state) 1) :x-won :else :o-won)
        :else (:status state)))

(defn ai-turn? [state]
  (let [current-player-key (:current-player state)
        current-player (get state current-player-key)]
    (and (= :playing (:status state)) (not= :human (:type current-player)))))

(defn get-player-num [state] (:player-num ((:current-player state) state)))

(defn maybe-make-computer-move [state]
  (if (and (not (gm/game-over? state)) (ai-turn? state))
    (gm/game-with-next-move state)
    state))

(defn maybe-game-over [state]
  (if (gm/game-over? state)
    (assoc state :game-over true)
    state))

(defn maybe-start-game [state]
  (if (= :ready-to-play (:status state))
    (gm/start-game! state)
    state))

(defn update-state [state]
  (-> state
      maybe-start-game
      maybe-make-computer-move
      maybe-game-over
      gm/get-winner
      ))

;; TODO - GLM : Smelly.  If there a better way?
(defmethod tcore/show-move :gui [game box] nil)

(defn draw-state [state]
  (gui-board/draw-console)
  (gui-board/draw-gui-board (:board-size state))
  (button/draw-game-button state)

  (if (or (= (:status state) :user-setup) (= (:status state) :player-setup)
          (= (:status state) :board-setup) (= (:status state) :level-setup)
          (= (:status state) :restart?))
    (gcore/draw-user-prompt state))

  (doseq [box (board/played-boxes (:board state))]
    (box/draw-box box state false))

  (if (= (:status state) :playing) (gcore/draw-piece state (box/size-boxes state) [(q/mouse-x) (q/mouse-y)]))

  )


(defn -main []
  (q/defsketch gui
               :title "Tic Tac Toe"
               :resizable true
               :size [700 800]
               :setup setup-gui
               :update update-state
               :draw draw-state
               :mouse-clicked gcore/mouse-clicked
               :key-typed gcore/key-typed
               :features [:keep-on-top]
               :middleware [m/fun-mode])
  )



