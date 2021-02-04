(ns ttt.master.game-master)

(defn next-player [game]
	(if (= (:current-player game) :player1) :player2 :player1))

(defn update-board-with-move [game box]
	(let [player (get game (:current-player game))
				board (vec (:board game))
				piece (:piece player)
				new-board (replace {box piece} board)]
		new-board))

(defn play-turn [game-atom]
	(let [box (:box-played @game-atom)
				new-board (update-board-with-move @game-atom box)]
		(swap! game-atom assoc :board new-board
					 :current-player (next-player @game-atom))))

(defn make-computer-move [game]
	game)
	;(play-turn (assoc game :box-played (tcore/select-box (get game (:current-player game)) game))))

(defn maybe-make-computer-move [game]
		game)

(defn update-state [game]
	(play-turn game)
	(maybe-make-computer-move game)
	)