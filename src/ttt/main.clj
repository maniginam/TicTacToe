(ns ttt.main
  (:require
    [quil.core :as q]
    [ttt.core :refer :all]
    [ttt.board :refer :all]
    [ttt.default-game :refer :all]
    [ttt.ui :refer :all]
    [quil.gui-game :refer :all]
    [quil.gui :refer :all]
    ))

(def game-state
  {:status :waiting :users nil :player nil :winner nil})

(defn game-results [game]
  (let [winner (:winner game)]
    (cond (= 1 winner) (str (:piece (:player1 game)) " Wins!")
          (= 2 winner) (str (:piece (:player2 game)) " Wins!")
          :else (str "Cat's Game"))))

(defn play-game [game]
  (loop [board (:board game)
         player (:player1 game)]
    (cond (is-win? board) (assoc game :winner (:player (next-player game player)))
          (full-board? board) (assoc game :winner 0)
          :else (let [box (make-move player board)]
                  (recur (put-piece-on-board board box (:piece player))
                         (next-player game player))))))

(defn setup-game [console]
  (let [users (validate-player-count console)
        player1 {:player 1 :piece player1-piece :type (assign-type console users)}
        player2 {:player 2 :piece player2-piece :type (if (= 1 users) (assign-player2-type player1) (assign-type console users))}
        board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}
        game {:console (:console console) :users users :player1 player1 :player2 player2 :board board}]
    game))

(defn run-game [console]
  (let [game (setup-game console)]
    (report console (game-results (play-game game)))))

(defn -main []
  (let [state game-state
        console {:console :default}]
    ;(run-gui console)
    ;(loop [initiate? (game-started? console)]
    ;  (if (= initiate? false)
    ;    (recur (game-started? console))
        (run-game console)))

