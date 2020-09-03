(ns ttt.the-game
  (:require [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.game-rules :refer :all]))

(defmulti welcome :gui)
(defmulti play-game :gui)
(defmulti setup-game :gui)
(defmulti game-results :gui)
(defmulti assign-player :gui)
(defmulti ask-num-of-players :gui)

(defmethod ask-num-of-players :default [console] 0)

(defmethod assign-player :default [player console]
  (let [piece (if (= 1 player) "X" "O")]
    {:player player :type :computer :piece piece}))

(defmethod setup-game :default [console]
  (let [num-of-players (ask-num-of-players console)
        player1 (assign-player 1 console)
        player2 (assign-player 2 console)
        board (:board console)
        game {:players num-of-players :player1 player1 :player2 player2 :board board}]
    game))

(defmulti make-move (fn [player _] (:type player)))
(defmethod make-move :computer [player board]
  (let [box-played (play-optimal-box board (:player player))
        new-board (put-piece-on-board board box-played (:piece player))]
    box-played))
(defmethod make-move :default [player board] nil)

(defn next-player [game player]
  (if (= player (:player1 game)) (:player2 game) (:player1 game)))

(defmulti update-gui :gui)
(defmethod update-gui :default [game] nil)

(defmulti run-game (fn [game] (:gui game)))
(defmethod run-game :default [game]
  (loop [board (:board game)
         player (:player1 game)]
    (cond (is-win? board) (assoc game :winner (:player (next-player game player)))
          (full-board? board) (assoc game :winner 0)
          :else (let [box-played (make-move player board)]
                  (update-gui game)
                  (recur (put-piece-on-board board box-played (:piece player))
                         (next-player game player))))))

(defmethod game-results :default [game]
  (let [winner (:winner game)]
    (cond (zero? winner) (str "Cat's Game")
          (= 1 winner) (str (:piece (:player1 game)) " won!")
          :else (str (:piece (:player2 game)) " won!"))))

(defmethod play-game :default [console]
  (let [game (setup-game console)]
    (println (game-results (run-game game)))))