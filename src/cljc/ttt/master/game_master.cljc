(ns ttt.master.game-master
	)

(defn next-player [game]
	(if (= (:current-player game) :player1) :player2 :player1))

(defn update-board-with-move [game box]
	(let [player (get game (:current-player game))
				board (vec (:board game))
				piece (:piece player)
				new-board (replace {box piece} board)]
		new-board))

(defn play-turn [game]
	(let [box (:box-played @game)
				new-board (update-board-with-move @game box)]
		(swap! game assoc :board new-board
					 :current-player (next-player @game))))

(defn make-computer-move [game]
  game)

(defn maybe-make-computer-move [game]
	(if (and (not (game-over? game)) (ai-turn? game))
		(make-computer-move game)
		game))

(defn update-state [game]
	(play-turn game)
	(maybe-make-computer-move game)
	)