(ns ttt.game
  (:require
    ;[quil-gui.gui :refer :all]
    [ttt.optimal-play :refer :all]
    [ttt.game-rules :refer :all]
    [ttt.board :refer :all]
    [ttt.human-box-input :refer :all]
    )
  )

(defn game-results-old [winner]
  (let [results-msg
        (cond (zero? winner) (str "Cat's Game")
              (= winner 1) (str "X Wins!")
              :else (str "O Wins!"))]
    results-msg))

(defn computer-turn [board player]
  (let [box (play-optimal-box board player)]
    box))

;(defprotocol Turn
;  (get-box [this] "method to get box played")
; )
;
;(defrecord ComputerTurn [board player]
;  Turn
;  (get-box [this] (play-optimal-box (:board this) (:player this))))

(defn human-turn-message [board player human]
  (if (= human player)
    (println "Your Turn")
    (println (str (get-player-piece player) "'s Turn"))))

(defn human-turn [board player human]
  (human-turn-message board player human)
  (get-human-selection board (ask-user-for-box-to-play)))

(defn get-box-played [board player human]
  (cond (nil? human) (human-turn board player human)
        (= human 0) (play-optimal-box board player)
        :else (if (= human player) (human-turn board player human) (computer-turn board player))))

(defmulti player-move :player-type)
(defmethod player-move :ai [board player]
  (play-optimal-box board player))

;(defn play-ttt [human]
;  (loop [board board
;         player 1]
;    (cond (is-win? board) (get-next-player player)
;          (full-board? board) 0
;          :else (let [box-played (get-box-played board player human)]
;                  (recur (put-piece-on-board board box-played (get-player-piece player))
;                         (get-next-player player))))))





