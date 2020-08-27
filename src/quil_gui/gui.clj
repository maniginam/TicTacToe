(ns quil-gui.gui
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [quil-gui.dimensions :as dim]))

(def messages {:waiting "Click to Begin Game" :x-turn "X's Turn" :o-turn "O's Turn"
               :x-won   "Game Over: X Won" :o-won "Game Over: O Won"})

(defn setup []
  (q/frame-rate 100)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:game    :waiting
   :message (messages :waiting)})

(defn update-state [state]
  {:game    (:game state)
   :message (messages (:game state))})

(defn mouse-in-button? [mouse-x mouse-y]
  (let [x (first dim/button-top-left-corner)
        y (second dim/button-top-left-corner)
        width (first dim/button-size)
        height (second dim/button-size)]
    (and (> mouse-x x) (< mouse-x (+ x width)) (> mouse-y y) (< mouse-y (+ y height)))))

(defn mouse-clicked [state event]
  (if (= (:game state) :waiting)
    (if (mouse-in-button? (:x event) (:y event))
      {:game    :x-turn
       :message (messages (:game state))})))

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
        msg (:message state)]
    (q/stroke-weight 3)
    (q/fill 0 0 200)
    (q/rect x y width height)

    (q/text-size 30)
    (q/text-align :center)
    (q/fill 255 255 255)
    (q/text msg (+ x (/ width 2)) (+ y (/ height 2) 10))))

(defn draw-state [state]
  (draw-console 700 800)
  (draw-gui-board 600 600)
  (draw-game-button state 120 715))

(q/defsketch gui
             :title "Tic Tac Toe"
             :size [700 800]
             ; setup function called only once, during sketch initialization.
             :setup setup
             ; update-state is called on each iteration before draw-state.
             :update update-state
             :draw draw-state
             :mouse-clicked mouse-clicked
             :features [:keep-on-top]
             ; This sketch uses functional-mode middleware.
             ; Check quil wiki for more info about middlewares and particularly
             ; fun-mode.
             :middleware [m/fun-mode])



