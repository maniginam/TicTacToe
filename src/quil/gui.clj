(ns quil.gui
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [quil.dimensions :as dim]
            [ttt.core :refer :all]
            [ttt.console-messages :refer :all]
            [quil.mouse-clicks :refer :all]
            [quil.mouse-location :refer :all]
            [quil.human-prompts :refer :all]
            [quil.game-pieces :as piece]))


(defn setup-gui []
  (q/frame-rate 50)
  (q/set-state! :status :waiting
                :console :gui
                :users nil
                :player-setup nil
                :player nil
                :player1 nil
                :player2 nil
                :board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}
                :open-boxes [0 1 2 3 4 5 6 7 8]
                :box-clicked nil
                :winner nil
                :message (:waiting messages)))

(defn update-state [state]
  {:status       (:status state)
   :console      (:console state)
   :users        (:users state)
   :player-setup (:player-setup state)
   :player       (:player state)
   :player1      (:player1 state)
   :player2      (:player2 state)
   :board        (:board state)
   :open-boxes   (:open-boxes state)
   :box-clicked  (:box-clicked state)
   :winner       (if (= (:status state) :playing) (play-game state))})

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
        msg (if (= (:status state) :playing) ((:player state) messages) ((:status state) messages))]
    (q/stroke-weight 3)
    (q/fill 0 0 200)
    (q/rect x y width height)

    (q/text-size 30)
    (q/text-align :center)
    (if (mouse-in-button? (q/mouse-x) (q/mouse-y))
      (q/fill 0 255 0)
      (q/fill 255 255 255))
    (q/text msg (+ x (/ width 2)) (+ y (/ height 2) 10))))

;(defn draw-x [x-position y-position]
;  (q/line (- x-position 50) (- y-position 50) (+ x-position 50) (+ y-position 50))
;  (q/line (- x-position 50) (+ y-position 50) (+ x-position 50) (- y-position 50)))
;
;(defn draw-floating-piece [state]
;  (if (= :x-turn (:game-status state))
;    (draw-x (:x-position state) (:y-position state))))


(defn draw-state [state]
  (draw-console 700 800)
  (draw-gui-board 600 600)
  (draw-game-button state 120 715)

  (cond (or (= (:status state) :user-setup) (= (:status state) :player-setup)) (draw-user-prompt state dim/prompt-x dim/prompt-y)
        (or (= (:player state) :player1) (= (:player state) :player2)) (draw-piece state (q/mouse-x) (q/mouse-y))
        ))


(q/defsketch quil.gui
             :title "Tic Tac Toe"
             :resizable true
             :host "ttt.main"
             :size [700 800]
             :setup setup-gui
             :update update-state
             :draw draw-state
             :mouse-clicked mouse-clicked
             :features [:keep-on-top]
             :middleware [m/fun-mode])



