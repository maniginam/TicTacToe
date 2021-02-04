(ns ttt.web.setup-spec
	(:require-macros [speclj.core :refer [run-specs before after describe context it should=]]
									 )
	(:require [speclj.core]
						[ttt.spec-helper :as helper]
						[ttt.web.web :as web]
						[ttt.web.components :as comp]))

(def test-atom (atom (assoc helper/test-game :console :web)))

(describe "TTT Setup"
	(before (reset! test-atom (assoc helper/test-game :console :web)))

	(context "Status"
		(context "waiting"
			(it "welcomes at startup"
				(let [status (:status @test-atom)]
					(should= :waiting status)))
			(it "click start for user-setup"
				(web/update-game test-atom)
					(should= :user-setup (:status @test-atom))))

		(context "user-setup"
			(context "users: "
				(it "0"
					(swap! test-atom assoc :status :user-setup :entry 0)
					(web/update-game test-atom)
					(let [game-after-click @test-atom]
						(should= 0 (:users game-after-click))
						(should= {:player-num 1 :piece "X" :type :computer} (:player1 game-after-click))
						(should= {:player-num 2 :piece "O" :type :computer} (:player2 game-after-click))
						(should= :level-setup (:status game-after-click))))
				(it "1"
					(swap! test-atom assoc :status :user-setup :entry 1)
					(web/update-game test-atom)
					(let [game-after-click @test-atom]
						(should= 1 (:users game-after-click))
						(should= :player-setup (:status game-after-click))))
				(it "2"
					(swap! test-atom assoc :status :user-setup :entry 2)
					(web/update-game test-atom)
					(let [game-after-click @test-atom]
						(should= 2 (:users game-after-click))
						(should= {:player-num 1 :piece "X" :type :human} (:player1 game-after-click))
						(should= {:player-num 2 :piece "O" :type :human} (:player2 game-after-click))
						(should= :board-setup (:status game-after-click))))))

		(context "level-setup"
				(context "level selected:"
					(it "easy"
						(swap! test-atom assoc :status :level-setup :entry "easy")
						(web/update-game test-atom)
						(let [click-easy @test-atom]
							(should= :easy (:level click-easy))
						(should= :board-setup (:status click-easy))))
					(it "medium"
						(swap! test-atom assoc :status :level-setup :entry "medium")
						(web/update-game test-atom)
						(let [click-medium @test-atom]
						(should= :medium (:level click-medium))
						(should= :board-setup (:status click-medium))))
					(it "hard"
						(swap! test-atom assoc :status :level-setup :entry "hard")
						(web/update-game test-atom)
						(let [click-hard @test-atom]
						(should= :hard (:level click-hard))
						(should= :board-setup (:status click-hard))))))

		(context "board-setup"
				(context "board-size:"
					(it "3x3"
						(swap! test-atom assoc :status :board-setup :entry 3)
						(web/update-game test-atom)
						(let [three-by-three @test-atom]
						(should= 3 (:board-size three-by-three))
						(should= [0 1 2 3 4 5 6 7 8] (:board three-by-three))
						(should= :playing (:status three-by-three))))
					(it "2x2 with entry as string"
						(swap! test-atom assoc :status :board-setup :entry 2)
						(web/update-game test-atom)
						(let [two-by-two @test-atom]
							(should= 2 (:board-size two-by-two))
						(should= [0 1 2 3] (:board two-by-two))
						(should= :playing (:status two-by-two))))))

		(context "player-setup"
			(context "human selects:"
				(it "X"
					(swap! test-atom assoc :status :player-setup :entry "X")
					(web/update-game test-atom)
					(let [click-X @test-atom]
						(should= {:player-num 1 :piece "X" :type :human} (:player1 click-X))
						(should= {:player-num 2 :piece "O" :type :computer} (:player2 click-X))
						(should= :level-setup (:status click-X))))
				(it "O"
					(swap! test-atom assoc :status :player-setup :entry "O")
					(web/update-game test-atom)
					(let [click-O @test-atom]
						(should= {:player-num 1 :piece "X" :type :computer} (:player1 click-O))
						(should= {:player-num 2 :piece "O" :type :human} (:player2 click-O))
						(should= :level-setup (:status click-O))))))

		)
	)


(run-specs)
