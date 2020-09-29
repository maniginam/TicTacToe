(ns ttt.game-master
  (:require [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :refer :all]
            [ttt.ai :refer :all]))


(defn game-over? [game]
  (let [board (:board game)]
    (or (is-win? board) (full-board? board))))

(defn game-results [game]
  (let [winner (:winner game)]
    (cond (= 1 winner) (str (:piece (:player1 game)) " Wins!")
          (= 2 winner) (str (:piece (:player2 game)) " Wins!")
          :else (str "Cat's Game"))))

(defn next-player [game]
  (if (= (:current-player game) :player1) :player2 :player1))

(defn make-move [game box]
  (if (nil? box)
    (:board game)
    (let [player ((:current-player game) game)
          board (:board game)
          piece (:piece player)
          new-board (replace {box piece} board)]
      new-board)))

(defn play-box [game]
  (if (full-board? (:board game))
    nil
    (let [player ((:current-player game) game)
          box (select-box player game)]
      box)))

(defn play-turn [game box]
  (let [new-board (make-move game box)
        next-player (next-player game)]
    (if (= :terminal (:console game))
      (do (draw-board game new-board)
          (print-turn game ((:current-player game) game) box)))
    (assoc game :board new-board :current-player next-player)))

(defn get-winner [game]
  (let [board (:board game)]
    (cond (= 1 (count (:board game))) (assoc game :winner 1)
          (is-win? board) (assoc game :winner (:player-num ((next-player game) game)))
          (full-board? board) (assoc game :winner 0)
          :else nil)))

(defn play-game [game]
  (if (game-over? game)
    (get-winner game)
    (play-turn game (play-box game))))

