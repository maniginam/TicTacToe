(ns ttt.default-game
  (:require [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :refer :all]))

(defmethod validate-player-count :default [console] 0)

(defmethod assign-type :default [console users]
  :default)

(defmethod board-size-prompt :default [console] nil)

(defmethod set-board-size :default [console] 3)

(defmethod select-box :default [game]
  (let [board (:board game)
        player ((:current-player game) game)]
    (play-optimal-box board (:player-num player))))

(defmethod report :default [console results]
    results)


(defn game-results [game]
  (let [winner (:winner game)]
    (cond (= 1 winner) (str (:piece (:player1 game)) " Wins!")
          (= 2 winner) (str (:piece (:player2 game)) " Wins!")
          :else (str "Cat's Game"))))

(defn next-player [game]
  (if (= (:current-player game) :player1)
    (assoc game :current-player :player2)
    (assoc game :current-player :player1)))

(defn update-board [game]
  (let [box (select-box game)
        board (:board game)
        piece (:piece ((:current-player game) game))
        new-board (assoc board box piece)]
    (assoc game :board new-board)))

(defn next-turn [game]
  (-> game
      (update-board)
      (next-player)))

(defn play-game [game]
  (loop [game game]
    (cond (is-win? (:board game)) (assoc game :winner (:current-player (next-player game)))
          (full-board? (:board game)) (assoc game :winner 0)
          :else (recur (next-turn game)))))

