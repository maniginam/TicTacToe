(ns ttt.core
  (:require
    ;[quil-gui.gui :refer :all]
    [ttt.game :refer :all]
    [ttt.terminal-gui :refer :all]
    [ttt.board :refer :all]
    ))

(def player1-piece "X")
(def player2-piece "O")

(defn assign-piece [player]
  (if (= 1 player) "X" "O"))

(defn assign-player [game-type player & player1-type]
  (cond (= game-type "comp-v-comp") :ai
        (= game-type "human-v-human") :human
        :else (if (= 1 player)
                (if (= 1 (set-human-game-piece (offer-x-or-o) 0))
                  :human
                  :ai)
                (if (= player1-type :human) :ai :human))))

;(defn welcome []
;  (gui-welcome)
;  (let [players (who-is-playing)
;        game-type (get-game-type players)
;        ;player1 {:player 1 :player-type (assign-player game-type 1)}
;        ;player2 {:player 2 :player-type (assign-player game-type 2 (:player-type player1))}
;        human (cond (= players 0) 0
;                    (= players 1) (set-human-game-piece (offer-x-or-o) 0)
;                    :else nil)]
;    (start-game game-type board)
;    (println (game-results (play-ttt game)))))

(defn -main []
  ;(welcome))
  )
