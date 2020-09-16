(ns ttt.main
  (:require
    [quil.core :as q]
    [ttt.core :refer :all]
    [ttt.board :refer :all]
    [ttt.default-game :refer :all]
    [ttt.terminal :refer :all]
    [quil.gui-game :refer :all]
    ;[quil.gui :refer :all]
    ))

(def game-state
  {:status :waiting :users nil :player nil :winner nil})

(defn game-results [game]
  (let [winner (:winner game)]
    (cond (= 1 winner) (str (:piece (:player1 game)) " Wins!")
          (= 2 winner) (str (:piece (:player2 game)) " Wins!")
          :else (str "Cat's Game"))))

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

(defn setup-game [console]
  (let [users (validate-player-count console)
        player1 {:player-num 1 :piece player1-piece :type (assign-type console users)}
        player2 {:player-num 2 :piece player2-piece :type (if (= 1 users) (assign-player2-type player1) (assign-type console users))}
        board (create-board (set-board-size console))
        game {:console (:console console) :users users :board board :current-player :player1 :player1 player1 :player2 player2}]
    game))

(defn run-game [console]
  (let [game (setup-game console)
        results (game-results (play-game game))]
    (report console results)))

(defn -main []
  (run-game {:console :terminal}))

