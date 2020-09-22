(ns quil.human-prompts
  (:require [ttt.core :refer :all]
            [ttt.console-messages :refer :all]
            [quil.gui-messages :refer :all]
            [quil.core :as q]
            [quil.gui-game :refer :all]
            [quil.dimensions :as dim]
            [quil.mouse-location :refer :all]))

(defn draw-prompt-box [state]
  (let [x dim/prompt-x
        y dim/prompt-y
        width (first dim/prompt-size)
        height (second dim/prompt-size)
        txt-x (+ dim/prompt-x (/ width 2))
        msg (user-message state)]
    (q/stroke-weight 3)
    (q/fill 200 200 200)
    (q/rect x y width height)

    (q/text-size 15)
    (q/text-align :center)
    (q/fill 0 0 0)
    (q/text msg txt-x (+ y 40))))

(defn draw-user-options [option]
  (let [dimensions (dim/option-dimensions option)
        left (:left dimensions)
        top (:top dimensions)
        width (:width dimensions)
        height (:height dimensions)
        msg (nth game-type-message option)]

    (q/stroke-weight 0)
    (q/fill 200 200 200)
    (q/rect left top width height)

    (q/text-size 15)
    (q/text-align :center)
    (if (hovering-option? option (q/mouse-x) (q/mouse-y))
      (q/fill 0 255 0)
      (q/fill 0 0 0))
    (q/text msg (+ left (/ width 2)) (+ top 20))))

(defmethod draw-user-prompt :user-setup [state]
  (draw-prompt-box state)
  (doseq [option [0 1 2]] (draw-user-options option)))

(defn draw-piece-option [piece]
  (let [dimensions (dim/piece-option-dimensions piece)
        left (:left dimensions)
        top (:top dimensions)
        width (:width dimensions)
        height (:height dimensions)
        weight 15]

    (q/stroke-weight weight)
    (q/fill 200 200 200)
    (if (hovering-piece-option? piece (q/mouse-x) (q/mouse-y))
      (q/stroke 0 255 0)
      (q/stroke 0 0 0))
    (if (= 1 piece)
      (do (q/line left top (+ left width) (+ top height))
          (q/line (+ left width) top left (+ top height)))
      (do (q/ellipse-mode :corner)
          (q/ellipse left top width height)))))

(defmethod draw-user-prompt :player-setup [state]
  (draw-prompt-box state)
  (doseq [piece [1 2]] (draw-piece-option piece)))

(defmethod draw-user-prompt :board-setup [state]
  (draw-prompt-box state)

  (let [dimensions dim/board-size-entry
        left (:left dimensions)
        top (:top dimensions)]
    (q/text-size 50)
    (q/text-align :center)
    (q/text (str (:key-stroke state)) left top)))

;(defn draw-play-again-options [option]
;  (let [dimensions (dim/option-dimensions option)
;        left (:left dimensions)
;        top (:top dimensions)
;        width (:width dimensions)
;        height (:height dimensions)
;        msg (nth msg/yes-no option)]
;
;    (q/stroke-weight 0)
;    (q/fill 200 200 200)
;    (q/rect left top width height)
;
;    (q/text-size 15)
;    (q/text-align :center)
;    (if (hovering-option? option (q/mouse-x) (q/mouse-y))
;      (q/fill 0 255 0)
;      (q/fill 0 0 0))
;    (q/text msg (+ left (/ width 2)) (+ top 20))))
;
;(defmethod draw-user-prompt :game-over [state]
;  (draw-prompt-box state)
;  (doseq [option [0 1]] (draw-play-again-options option)))


