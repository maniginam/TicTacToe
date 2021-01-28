(ns ttt.gui.button
  (:require [quil.core :as q]
            [ttt.gui.dimensions :as dim]
            [ttt.gui.messages :as msg]
            [ttt.gui.mouse-location :as mouse]))


(def messages {:waiting "Click Here to Begin Game" :user-setup "Who's Playing?" :player1 "X's Turn" :player2 "O's Turn"
               :player-setup "Choose" :restart? "Finish what you started?" :board-setup "board size?" :level-setup "Choose Your Level"
               :x-won "Game Over: X Won" :o-won "Game Over: O Won" :catsgame "Game Over: Cat's Game"
               :play-again "Click Here to Play Again" :nil ""})

(defn get-message-key [state]
  (cond (= (:status state) :playing) (if (= :player1 (:current-player state)) :player1 :player2)
        (= (:status state) :game-over) (cond (= (:winner state) 0) :catsgame (= (:winner state) 1) :x-won :else :o-won)
        (nil? (get messages (:status state))) :nil
        :else (:status state)))

(defn draw-game-button [state]
  (let [x dim/button-left
        y dim/button-top
        width (first dim/button-size)
        height (second dim/button-size)
        msg (get messages (get-message-key state))]
    (q/stroke-weight 3)
    (q/fill 0 0 200)
    (q/rect x y width height)

    (q/text-size 30)
    (q/text-align :center)
    (if (mouse/in-button? (q/mouse-x) (q/mouse-y))
      (q/fill 0 255 0)
      (q/fill 255 255 255))
    (q/text msg (+ x (/ width 2)) (+ y (/ height 2) 10))))
