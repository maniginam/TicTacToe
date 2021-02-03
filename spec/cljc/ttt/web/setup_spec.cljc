(ns ttt.web.setup-spec
	(:require-macros [speclj.core :refer [run-specs before after describe context it should=]])
	(:require [speclj.core]
						[ttt.spec-helper :as helper]
						[ttt.web.web :as web]))

(def test-atom (atom (assoc helper/test-game :console :web)))

(describe "TTT Setup"

	(context "Status"

		(context "waiting"
			(it "welcomes at startup"
				(let [status (get @test-atom :status)]
					(should= :waiting status)))
			(it "click start for user-setup"
				(let [click (web/run-game @test-atom)]
					(should= :user-setup (get click :status)))))

		(context "user-setup"
			(context "users: "
				(it "0"
					(let [click (assoc @test-atom :status :user-setup :entry 0)
								game-after-click (web/run-game click)]
						(should= 0 (:users game-after-click))
						(should= {:player-num 1 :piece "X" :type :computer} (:player1 game-after-click))
						(should= {:player-num 2 :piece "O" :type :computer} (:player2 game-after-click))
						(should= :level-setup (:status game-after-click))))
				(it "1"
					(let [click (assoc @test-atom :status :user-setup :entry 1)
								game-after-click (web/run-game click)]
						(should= 1 (:users game-after-click))
						(should= :player-setup (:status game-after-click))))
				(it "2"
					(let [click (assoc @test-atom :status :user-setup :entry 2)
								game-after-click (web/run-game click)]
						(should= 2 (:users game-after-click))
						(should= {:player-num 1 :piece "X" :type :human} (:player1 game-after-click))
						(should= {:player-num 2 :piece "O" :type :human} (:player2 game-after-click))
						(should= :board-setup (:status game-after-click))))))

		(context "level-setup"
			(let [click-easy (web/run-game (assoc @test-atom :status :level-setup :entry "easy"))
						click-medium (web/run-game (assoc @test-atom :status :level-setup :entry "medium"))
						click-hard (web/run-game (assoc @test-atom :status :level-setup :entry "hard"))]
				(context "level selected:"
					(it "easy"
						(should= :easy (:level click-easy))
						(should= :board-setup (:status click-easy)))
					(it "medium"
						(should= :medium (:level click-medium))
						(should= :board-setup (:status click-medium)))
					(it "hard"
						(should= :hard (:level click-hard))
						(should= :board-setup (:status click-hard))))))

		(context "board-setup"
			(let [three-by-three (web/run-game (assoc @test-atom :status :board-setup :entry 3))
						two-by-two (web/run-game (assoc @test-atom :status :board-setup :entry 2))]
				(context "board-size:"
					(it "3x3"
						(should= 3 (:board-size three-by-three))
						(should= [0 1 2 3 4 5 6 7 8] (:board three-by-three))
						(should= :playing (:status three-by-three)))
					(it "2x2"
						(should= 2 (:board-size two-by-two))
						(should= [0 1 2 3] (:board two-by-two))
						(should= :playing (:status two-by-two))))))

		(context "player-setup"
			(context "human selects:"
				(it "X"
					(let [click-X (web/run-game (assoc @test-atom :status :player-setup :entry "X"))]
						(should= {:player-num 1 :piece "X" :type :human} (:player1 click-X))
						(should= {:player-num 2 :piece "O" :type :computer} (:player2 click-X))
						(should= :level-setup (:status click-X))))
				(it "O"
					(let [click-O (web/run-game (assoc @test-atom :status :player-setup :entry "O"))]
						(should= {:player-num 1 :piece "X" :type :computer} (:player1 click-O))
						(should= {:player-num 2 :piece "O" :type :human} (:player2 click-O))
						(should= :level-setup (:status click-O))))))

		)
	)


(run-specs)
