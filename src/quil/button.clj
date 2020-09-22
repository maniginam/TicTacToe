(ns quil.button
  (:require [quil.core :as q]
            [quil.dimensions :as dim]
            [quil.gui-messages :as msg]
            [quil.mouse-location :as mouse]))

(defn draw-game-button [state x y]
  (let [width (first dim/button-size)
        height (second dim/button-size)
        msg ((:message-key state) msg/messages)]
    (q/stroke-weight 3)
    (q/fill 0 0 200)
    (q/rect x y width height)

    (q/text-size 30)
    (q/text-align :center)
    (if (mouse/in-button? (q/mouse-x) (q/mouse-y))
      (q/fill 0 255 0)
      (q/fill 255 255 255))
    (q/text msg (+ x (/ width 2)) (+ y (/ height 2) 10))))
