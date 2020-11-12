(ns gui.human-prompts
  (:require [quil.core :as q]
            [gui.dimensions :as dim]
            [gui.gui-core :as gcore]
            [gui.mouse-location :as mouse]
            [ttt.console-messages :as cmsg]))

(defn draw-prompt-box [state]
  (let [x dim/prompt-x
        y dim/prompt-y
        width (first dim/prompt-size)
        height (second dim/prompt-size)
        txt-x (+ dim/prompt-x (/ width 2))
        msg (gcore/user-message state)]
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
        msg (nth cmsg/game-type-message option)]

    (q/stroke-weight 0)
    (q/fill 200 200 200)
    (q/rect left top width height)

    (q/text-size 15)
    (q/text-align :center)
    (if (mouse/hovering-option? option (q/mouse-x) (q/mouse-y))
      (q/fill 0 255 0)
      (q/fill 0 0 0))
    (q/text msg (+ left (/ width 2)) (+ top 20))))

(defmethod gcore/draw-user-prompt :user-setup [state]
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
    (if (mouse/hovering-piece-option? piece (q/mouse-x) (q/mouse-y))
      (q/stroke 0 255 0)
      (q/stroke 0 0 0))
    (if (= 1 piece)
      (do (q/line left top (+ left width) (+ top height))
          (q/line (+ left width) top left (+ top height)))
      (do (q/ellipse-mode :corner)
          (q/ellipse left top width height)))))

(defmethod gcore/draw-user-prompt :player-setup [state]
  (draw-prompt-box state)
  (doseq [piece [1 2]] (draw-piece-option piece)))

(defn draw-yes-no [answer]
  (let [dimensions (dim/piece-option-dimensions answer)
        left (:left dimensions)
        top (:top dimensions)
        width (:width dimensions)
        height (:height dimensions)
        weight 15]

    (q/stroke-weight weight)
    (q/fill 200 200 200)
    (if (mouse/hovering-piece-option? answer (q/mouse-x) (q/mouse-y))
      (q/stroke 0 255 0)
      (q/stroke 0 0 0))
    (if (= 1 answer)
      (do (q/line left top (+ left (* width 0.5)) (+ top (/ height 2)))
          (q/line (+ left width) top (+ left (* width 0.5)) (+ top (/ height 2)))
          (q/line (+ left (* width 0.5)) (+ top (* height 0.5)) (+ left (* width 0.5)) (+ top height)))
      (do (q/line left top left (+ top height))
          (q/line left top (+ left (* 0.8 width)) (+ top height))
          (q/line (+ left (* 0.8 width)) top (+ left (* 0.8 width)) (+ top height))))))

(defmethod gcore/draw-user-prompt :restart? [state]
  (draw-prompt-box state)
  (doseq [piece [1 2]] (draw-yes-no piece)))

(defmethod gcore/draw-user-prompt :board-setup [state]
  (draw-prompt-box state)

  (let [dimensions dim/board-size-entry
        left (:left dimensions)
        top (:top dimensions)]
    (q/fill 255 255 255)
    (q/rect (- left 40) (- top 60) 80 90)

    (if (int? (:key-stroke state)) (q/fill 0 255 0) (q/fill 255 0 0))
    (q/text-size 50)
    (q/text-align :center)
    (q/text (str (:key-stroke state)) left top)))

(defn draw-level-options [option]
  (let [dimensions (dim/option-dimensions option)
        left (:left dimensions)
        top (:top dimensions)
        width (:width dimensions)
        height (:height dimensions)
        msg (nth ["Easy" "Medium" "Hard"] option)]

    (q/stroke-weight 0)
    (q/fill 200 200 200)
    (q/rect left top width height)

    (q/text-size 15)
    (q/text-align :center)
    (if (mouse/hovering-option? option (q/mouse-x) (q/mouse-y))
      (q/fill 0 255 0)
      (q/fill 0 0 0))
    (q/text msg (+ left (/ width 2)) (+ top 20))))

(defmethod gcore/draw-user-prompt :level-setup [state]
  (draw-prompt-box state)
  (doseq [option [0 1 2]] (draw-level-options option)))


