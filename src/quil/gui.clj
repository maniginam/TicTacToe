(ns quil.gui
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [quil.dimensions :as dim]
            [quil.board :as gui-board]
            [ttt.board :as board]
            [quil.button :as button]
            [quil.gui-core :refer :all]
            [ttt.core :refer :all]
            [ttt.game-setup :as setup]
            [quil.gui-messages :as msg]
            [ttt.game-master :as gm :refer :all]
            [quil.mouse-clicks :refer :all]
            [quil.human-prompts :refer :all]
            [quil.boxes :refer :all]
            [quil.game-pieces :as piece]
            [games.saved-games :as saved]
            [games.h2 :as h2]
            [games.mysql :as sql]))


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
                :rows []
                :cols []
                :diags []
                :ai-turn false
                :boxes nil
                :level :hard
                :depth 0
                :turn nil
                :game-over false
                :play-again-pause 0
                :winner nil
                :table "TTT"
                :db "ttt"))

(defn get-message-key [state]
  (cond (= (:status state) :playing) (if (= :player1 (:current-player state)) :player1 :player2)
        (= (:status state) :game-over) (cond (= (:winner state) 0) :catsgame (= (:winner state) 1) :x-won :else :o-won)
        :else (:status state)))

(defn ai-turn? [state]
  (let [current-player-key (:current-player state)
        current-player (get state current-player-key)]
    (and (= :playing (:status state)) (not= :human (:type current-player)))))

;(defn get-box-count [state]
;  (if (:board-set? state) (int (Math/pow (:board-size state) 2)) 3))

(defn get-player-num [state] (:player-num ((:current-player state) state)))

;(defn ai-turn [state]
;  (if (ai-turn? state)
;  (let [box (play-box state)
;        new-state (play-turn state box)]
;    (if (game-over? new-state)
;      (assoc new-state :game-over true)
;      new-state))))

;(defn update-state [state]
;  (let [db (:db state)
;        board (if (and (not (game-over? state)) (ai-turn? state)) (gm/update-board-with-move state (gm/get-move-from-player state)) (:board state))
;        winner (if (game-over? state) (:winner (get-winner state)))
;        current-player (if (and (not (game-over? state)) (ai-turn? state)) (next-player state) (:current-player state))
;        updated-game (assoc state :board board)]
;    (when (ai-turn? state)
;      (sql/save-turn db updated-game))
;    {:game-over        (gm/game-over? state)
;     :db               (:db state)
;     :game-count       (:game-count state)
;     :winner           winner
;     :player1          (:player1 state)
;     :player2          (:player2 state)
;     :console          (:console state)
;     :database         (:database state)
;     :users            (:users state)
;     :board-size       (:board-size state)
;     ;:board-set?       (:board-set? state)
;     ;:box-count        (get-box-count state)
;     :key-stroke       (:key-stroke state)
;     :empty-board      (board/create-board (:board-size state))
;     :board            board
;     :depth            (:depth state)
;     :level            (:level state)
;     :box-played       (:box-played state)
;     :current-player   current-player
;     :play-again-pause (if (:game-over state) (if (< (:play-again-pause state) 100) (inc (:play-again-pause state)) 100) 0)
;     :status           (if (game-over? state) (if (= 100 (:play-again-pause state)) :play-again :game-over) (:status state))
;     :message-key      (get-message-key state) ;; TODO - GLM : test me
;     :table            (:table state)
;     :save             (if (or (ai-turn? state) (:game-over state)) (saved/save-game state))
;     :save-to-h2       (if (or (ai-turn? state) (:game-over state)) (h2/save-to-sql state (:table state)))
;     ;:save-to-mysql    (if (ai-turn? state) (sql/save-turn (:db state) state))
;     }))

(defn maybe-make-computer-move [state]
  (if (and (not (game-over? state)) (ai-turn? state))
    (gm/game-with-next-move state)
    state))

(defn maybe-game-over [state]
  (if (gm/game-over? state)
    (assoc state :game-over true)
    state))

(defn update-state [state]
  (-> state
      maybe-make-computer-move
      maybe-game-over
      gm/get-winner
      ))

(defmethod show-move :gui [game box] nil)

(defn draw-state [state]
  (gui-board/draw-console)
  (gui-board/draw-gui-board (:board-size state))
  (button/draw-game-button state)

  (if (or (= (:status state) :user-setup) (= (:status state) :player-setup)
          (= (:status state) :board-setup) (= (:status state) :level-setup)
          (= (:status state) :restart?))
    (draw-user-prompt state))

  (doseq [box (board/played-boxes (:board state))]
    (draw-box box state false))

  (if (= (:status state) :playing) (draw-piece state (size-boxes state) [(q/mouse-x) (q/mouse-y)]))

  )


(defn -main []
  (q/defsketch gui
               :title "Tic Tac Toe"
               :resizable true
               :size [700 800]
               :setup setup-gui
               :update update-state
               :draw draw-state
               :mouse-clicked mouse-clicked
               :key-typed key-typed
               :features [:keep-on-top]
               :middleware [m/fun-mode])
  )



