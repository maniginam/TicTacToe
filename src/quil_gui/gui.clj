(ns quil-gui.gui
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [quil-gui.dimensions :as dim]
            [ttt.core :refer :all]
            [quil-gui.game-pieces :as piece]))

(def messages {:waiting "Click to Begin Game" :user-setup "How many players?" :x-turn "X's Turn" :o-turn "O's Turn"
               :x-won   "Game Over: X Won" :o-won "Game Over: O Won"})

(defn setup-gui []
  (q/frame-rate 50)
  (q/set-state! :status :waiting
                :players nil
                :board nil
                :player nil
                :winner nil
                :message (:waiting messages)
                :userPrompt false))

(defn update-state [state]
  {:status     (:status state)
   :players    (:players state)
   :player     (:player state)
   :winner     (:winner state)
   :userPrompt (:userPrompt state)})

(defn mouse-in-button? [mouse-x mouse-y]
  (let [x (first dim/button-top-left-corner)
        y (second dim/button-top-left-corner)
        width (first dim/button-size)
        height (second dim/button-size)]
    (and (> mouse-x x) (< mouse-x (+ x width)) (> mouse-y y) (< mouse-y (+ y height)))))

(defn mouse-clicked [state event]
  (if (= (:status state) :waiting)
    (if (mouse-in-button? (:x event) (:y event))
      {:status     :user-setup
       :userPrompt true})))

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
        msg ((:status state) messages)]
    (q/stroke-weight 3)
    (q/fill 0 0 200)
    (q/rect x y width height)

    (q/text-size 30)
    (q/text-align :center)
    (q/fill 255 255 255)
    (q/text msg (+ x (/ width 2)) (+ y (/ height 2) 10))))

;(defn draw-x [x-position y-position]
;  (q/line (- x-position 50) (- y-position 50) (+ x-position 50) (+ y-position 50))
;  (q/line (- x-position 50) (+ y-position 50) (+ x-position 50) (- y-position 50)))
;
;(defn draw-floating-piece [state]
;  (if (= :x-turn (:game-status state))
;    (draw-x (:x-position state) (:y-position state))))

(defn draw-players-prompt [state x y]
  (if (:userPrompt state)
    (let [width (first dim/prompt-size)
          height (second dim/prompt-size)
          msg "What kind of game would you like to play?"]
      (q/stroke-weight 3)
      (q/fill 200 200 200)
      (q/rect x y width height)

      (q/text-size 15)
      (q/text-align :center)
      (q/fill 0 0 0)
      (q/text msg (+ x 175) (+ y 40)))))

(defn draw-state [state]
  (draw-console 700 800)
  (draw-gui-board 600 600)
  (draw-game-button state 120 715)
  (draw-players-prompt state 170 235)
  ;(draw-floating-piece state))
  )

(defmethod run-gui :gui [console]
  (q/defsketch gui
               :title "Tic Tac Toe"
               :resizable true
               :host "ttt.main"
               :no-start true
               :size [700 800]
               :setup setup-gui
               :update update-state
               :draw draw-state
               :mouse-clicked mouse-clicked
               :features [:keep-on-top]
               :middleware [m/fun-mode]))



