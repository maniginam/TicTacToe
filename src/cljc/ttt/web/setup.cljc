(ns ttt.web.setup
	(:require #?(:clj [ttt.master.core :as tcore])
						#?(:clj [ttt.board.board :as board])))

#?(:clj (def game-atom (atom tcore/game-model)))

#?(:clj (defmethod tcore/set-parameters :waiting [game]
					(let [updated-game (assoc game :status :user-setup)]
						(swap! game-atom merge updated-game)
						updated-game)))

#?(:clj (defmethod tcore/set-players 0 [game]
	(assoc game :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :computer})))

#?(:clj (defmethod tcore/set-users 0 [game]
	(assoc (tcore/set-players (assoc game :entry 0)) :status :level-setup :users 0)))

#?(:clj (defmethod tcore/set-users 1 [game]
	(assoc game :status :player-setup :users 1)))

#?(:clj (defmethod tcore/set-players 2 [game]
	(assoc game :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human})))

#?(:clj (defmethod tcore/set-users 2 [game]
	(assoc (tcore/set-players (assoc game :entry 2)) :status :board-setup :users 2)))

#?(:clj (defmethod tcore/set-parameters :user-setup [game]
					(tcore/set-users game)))

#?(:clj (defmethod tcore/set-players "X" [game]
	(let [player1 {:player-num 1 :piece "X" :type :human}
				player2 {:player-num 2 :piece "O" :type :computer}]
		(assoc game :player1 player1 :player2 player2))))

#?(:clj (defmethod tcore/set-players "O" [game]
	(let [player1 {:player-num 1 :piece "X" :type :computer}
				player2 {:player-num 2 :piece "O" :type :human}]
		(assoc game :player1 player1 :player2 player2))))

#?(:clj (defmethod tcore/set-parameters :player-setup [game]
					(assoc (tcore/set-players game) :status :level-setup)))

#?(:clj (defmethod tcore/set-parameters :level-setup [game]
					(assoc game :status :board-setup :level (keyword (:entry game)))))

#?(:clj (defmethod tcore/set-parameters :board-setup [game]
					(let [board-size (Integer/parseInt (:entry game))
								board (board/create-board board-size)
								game-with-board (assoc game :board-size board-size :board board)]
						(assoc game-with-board :status :playing))))



