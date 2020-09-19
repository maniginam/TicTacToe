(ns quil.gui
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [quil.dimensions :as dim]
            [quil.board :refer :all]
            [quil.gui-game :refer :all]
            [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.console-messages :refer :all]
            [quil.gui-messages :refer :all]
            [ttt.default-game :refer :all]
            [quil.mouse-clicks :refer :all]
            [quil.mouse-location :refer :all]
            [quil.human-prompts :refer :all]
            [quil.boxes :refer :all]
            [quil.game-pieces :as piece]))


(defn setup-gui []
  (q/frame-rate 50)
  (q/set-state! :status :waiting
                :console :gui
                :users nil
                :board-size (int 3)
                :key-stroke nil
                :enter-key? false
                :current-player :player1
                :player1 {:player-num 1 :piece "X"}
                :player2 {:player-num 2 :piece "O"}
                :board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}
                :boxes nil
                :turn nil
                :played-boxes []
                :game-over false
                :winner nil))

(defn update-state [state]
  {:status         (if (:game-over state) (cond (= (:winner state) 0) :catsgame (= (:winner state) 1) :x-won :else :o-won) (:status state))
   :console        (:console state)
   :users          (:users state)
   :board-size     (int 3)
   :key-stroke     (:key-stroke state)
   :enter-key      (:enter-key state)
   :playing        (if (= :playing (:status state)) (if (zero? (:users state)) (play-turn state (play-box state))))
   :current-player (:current-player state)
   :current-type   (:type ((:current-player state) state))
   :player1        (:player1 state)
   :player2        (:player2 state)
   :board          (:board state)
   :played-boxes   (filter #(not (int? ((:board state) %))) (keys (:board state)))
   :turn           (:turn state)
   :box-played     (:box-played state)
   :game-over      (game-over? state)
   :winner         (if (:game-over state) (:winner (get-winner state)))})

(defn draw-console [width height]
  (q/background 255)
  (q/stroke-weight 0)
  (q/fill 200 200 200)
  (q/rect 0 (inc width) width height))

(defn draw-gui-board [width height]
  (let [board-size dim/board-size]
    (q/fill 255 255 255)
    (q/stroke 0 0 0)
    (q/stroke-weight 3)
    (q/rect 0 0 board-size board-size)
    (let [box-size (/ width 3)]
      (q/line [(+ 50 box-size) 50] [(+ 50 box-size) (+ height 50)])
      (q/line [(+ (* 2 box-size) 50) 50] [(+ (* 2 box-size) 50) (+ height 50)])
      (q/line [50 (+ 50 box-size)] [(+ width 50) (+ 50 box-size)])
      (q/line [50 (+ (* 2 box-size) 50)] [(+ width 50) (+ (* 2 box-size) 50)]))))

(defn draw-game-button [state x y]
  (let [width (first dim/button-size)
        height (second dim/button-size)
        msg (if (= (:status state) :playing) ((:current-player state) messages) ((:status state) messages))]
    (q/stroke-weight 3)
    (q/fill 0 0 200)
    (q/rect x y width height)

    (q/text-size 30)
    (q/text-align :center)
    (if (mouse-in-button? (q/mouse-x) (q/mouse-y))
      (q/fill 0 255 0)
      (q/fill 255 255 255))
    (q/text msg (+ x (/ width 2)) (+ y (/ height 2) 10))))

(defn draw-state [state]
  (draw-console 700 800)
  (draw-gui-board 600 600)
  (draw-game-button state 120 715)

  (doseq [box (:played-boxes state)]
    (draw-box box state))

  (if (or (= (:status state) :user-setup) (= (:status state) :player-setup) (= (:status state) :board-setup))
    (draw-user-prompt state dim/prompt-x dim/prompt-y))



  (if (= (:status state) :playing) (draw-piece state (q/mouse-x) (q/mouse-y)))

  )


(q/defsketch quil.gui
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



