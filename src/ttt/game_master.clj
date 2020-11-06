(ns ttt.game-master
  (:require [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :as tcore]
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

(defn update-board-with-move [game box]
  (if (nil? box)
    (:board game)
    (let [player (get game (:current-player game))
          board (:board game)
          piece (:piece player)
          new-board (replace {box piece} board)]
      new-board)))

(defn get-move-from-player [game]
  (if (full-board? (:board game))
    nil
    (let [player (get game (:current-player game))
          box (tcore/select-box player game)]
      box)))

(defn update-game-with-move [game box]
  (let [new-board (update-board-with-move game box)
        next-player (next-player game)
        game (assoc game :box-played box :board new-board :current-player next-player)]
    (tcore/save-turn game)
    (tcore/show-move game box)
    game))

(defn get-winner [game]
  (let [board (:board game)]
    (cond (= 1 (count (:board game))) (assoc game :winner 1)
          (is-win? board) (assoc game :winner (:player-num ((next-player game) game)))
          (full-board? board) (assoc game :winner 0)
          :else game)))

(defn game-with-next-move [game] (update-game-with-move game (get-move-from-player game)))

(defn play-game [game]
  (if (game-over? game)
    (get-winner game)
    (game-with-next-move game)))

(defn set-level [game level]
  (assoc game :level level :status :ready-to-play))

(defn start-game! [game]
  (let [game (assoc game :status :playing)]
    (tcore/save-game game)
    game))

