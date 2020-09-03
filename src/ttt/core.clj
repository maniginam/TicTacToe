(ns ttt.core
  (:require
    ;[quil-gui.gui :refer :all]
    [ttt.the-game :refer :all]
    [ttt.terminal-gui :refer :all]
    [ttt.board :refer :all]))


;(defn assign-player [game-type player & player1-type]
;  (cond (= game-type "comp-v-comp") :ai
;        (= game-type "human-v-human") :human
;        :else (if (= 1 player)
;                (if (= 1 (set-human-game-piece (offer-x-or-o) 0))
;                  :human
;                  :ai)
;                (if (= player1-type :human) :ai :human))))

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
  (let [player1 {:player 1 :type :computer :piece "X"}
        player2 {:player 2 :type :computer :piece "O"}
        standard-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}]
  ;CHANGE run-game to play-game
    (run-game {:gui :terminal :player1 player1 :player2 player2 :board standard-board})))
