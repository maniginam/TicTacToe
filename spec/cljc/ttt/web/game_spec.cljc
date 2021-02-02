(ns ttt.web.game-spec
	(:require-macros [speclj.core :refer [run-specs before after describe context it should=]])
	(:require [speclj.core]
						[ttt.master.multis :as tcore]
						[ttt.spec-helper :as helper]
						[ttt.master.game-master :as game]))

(def test-atom (atom (assoc helper/test-game :console :web)))

(describe "Play Game - "
	(context "human v human:"
		(reset! test-atom helper/test-game)
		(it "X in box 1"
			(swap! test-atom assoc :box-played 1 :board [0 1 2 3 4 5 6 7 8]
						 :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human})
			(game/update-state test-atom)
			(should= [0 "X" 2 3 4 5 6 7 8] (:board @test-atom))
			(should= :player2 (:current-player @test-atom)))
		(it "O in box 4"
			(swap! test-atom assoc :box-played 4)
			(game/update-state test-atom)
			(should= [0 "X" 2 3 "O" 5 6 7 8] (:board @test-atom))
			(should= :player1 (:current-player @test-atom))))

	(context "computer v human:"
		(reset! test-atom helper/test-game)
		(it "X in box 1"
			(reset! helper/mock-move 1)
			(swap! test-atom assoc :board [0 1 2 3 4 5 6 7 8]
						 :player2 {:player-num 2 :piece "O" :type :human})
			(game/update-state test-atom)
			(should= [0 "X" 2 3 4 5 6 7 8] (:board @test-atom))
			(should= :player2 (:current-player @test-atom)))
		)

		)

(run-specs)

