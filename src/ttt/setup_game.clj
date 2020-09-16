(ns ttt.setup-game
  (:require [ttt.core :refer :all]
            [ttt.board :refer :all]))


(defn assign-player2-type [player1]
  (if (= (:type player1) :human) :computer :human))

(defn setup-game [console]
  (let [users (validate-player-count console)
        player1 {:player-num 1 :piece player1-piece :type (assign-type console users)}
        player2 {:player-num 2 :piece player2-piece :type (if (= 1 users) (assign-player2-type player1) (assign-type console users))}
        board (create-board (set-board-size console))
        game {:console (:console console) :users users :board board :current-player :player1 :player1 player1 :player2 player2}]
    game))
