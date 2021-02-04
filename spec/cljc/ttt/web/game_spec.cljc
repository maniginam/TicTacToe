(ns ttt.web.game-spec
	(:require-macros [speclj.core :refer [run-specs before after describe context it should=]]
									 )
	(:require [speclj.core]
						[ttt.spec-helper :as helper]
						[ttt.web.web :as web]))

(def test-atom (atom (assoc helper/test-game :console :web)))

(describe "Play Game - "
	(context "human v human:"
		(it "X in box 1"
			(swap! web/game-atom assoc :status :playing :box-played 1 :board [0 1 2 3 4 5 6 7 8]
						 :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human})
			(web/update-game)
			(should= [0 "X" 2 3 4 5 6 7 8] (:board @web/game-atom))
			(should= :player2 (:current-player @web/game-atom)))
		(it "O in box 4"
			(swap! web/game-atom assoc :box-played 4)
			(web/update-game)
			(should= [0 "X" 2 3 "O" 5 6 7 8] (:board @web/game-atom))
			(should= :player1 (:current-player @web/game-atom))))

	(context "computer v human:"
		(reset! test-atom helper/test-game)
		(it "X in box 1"
			(reset! helper/mock-move 1)
			(swap! web/game-atom assoc :status :playing :board [0 1 2 3 4 5 6 7 8]
						 :player2 {:player-num 2 :piece "O" :type :human})
			(web/update-game)
			(should= [0 "X" 2 3 4 5 6 7 8] (:board @web/game-atom))
			(should= :player2 (:current-player @web/game-atom)))
		)

	)

(run-specs)

