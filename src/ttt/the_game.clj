(ns ttt.the-game
  (:require [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.game-rules :refer :all]))

(defmulti report :gui)
(defmulti welcome :gui)
(defmulti setup-game :gui)
(defmulti assign-player :gui)
(defmulti ask-num-of-players :gui)
(defmulti make-move (fn [player _] (:type player)))

(defmethod assign-player :default [player]
  (let [piece (if (= 1 player) "X" "O")
        type :computer]
    {:player player :type type :piece piece}))

(defmethod setup-game :default [console]
  (let [users 0
        player1 (assign-player 1)
        player2 (assign-player 2)
        board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}
        game {:users users :player1 player1 :player2 player2 :board board}]
    game))

(defmethod make-move :default [player board]
  (let [box (play-optimal-box board (:player player))]
    box))

(defn next-player [game player]
  (if (= player (:player1 game)) (:player2 game) (:player1 game)))

(defn play-game [game]
  (loop [board (:board game)
         player (:player1 game)]
    (cond (is-win? board) (assoc game :winner (:player (next-player game player)))
          (full-board? board) (assoc game :winner 0)
          :else (let [box (make-move player board)]
                  (recur (put-piece-on-board board box (:piece player))
                         (next-player game player))))))

(defn game-results [game]
  (let [winner (:winner game)]
    (cond (= 1 winner) (str (:piece (:player1 game)) " Wins!")
          (= 2 winner) (str (:piece (:player2 game)) " Wins!")
          :else (str "Cat's Game"))))

(defmethod report :default [game]
  (let [results (game-results game)]
    results))

(defn run-game [console]
  (let [game (setup-game console)]
    (report (play-game game))))