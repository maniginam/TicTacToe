(ns ttt.web.setup-spec
	(:require-macros [speclj.core :refer [run-specs before after describe context it should=]])
	(:require [speclj.core]
						[ttt.spec-helper :as helper]
						[ttt.web.web :as web]
						[ttt.web.components :as comp]))

(def test-game helper/test-game)
(def test-atom (atom (assoc test-game :console :web)))

(describe "TTT Setup"
	(after (reset! test-atom (assoc helper/test-game :console :web)))

	(context "Status"
		(context "waiting"
			(it "welcomes at startup"
				(let [status (get @test-atom :status)]
					(should= :waiting status)))
			(it "click start for user-setup"
				(let [click (web/run-game @test-atom)]
					(println "click: " click)
					(should= :user-setup (get click :status)))))

		(context "user-setup"
			(context "users: "
				(it "0"
					(swap! test-atom assoc :status :user-setup :entry 0)
					(let [click (swap! test-atom assoc :status :user-setup :entry 0)
								game-after-click (web/run-game @test-atom)]
						(should= 0 (:users game-after-click))
						(should= {:player-num 1 :piece "X" :type :computer} (:player1 game-after-click))
						(should= {:player-num 2 :piece "O" :type :computer} (:player2 game-after-click))
						(should= :level-setup (:status game-after-click))))
				(it "1"
					(swap! test-atom assoc :status :user-setup :entry 1)
					(let [click (assoc @test-atom :status :user-setup :entry 1)
								game-after-click (web/run-game @test-atom)]
						(should= 1 (:users game-after-click))
						(should= :player-setup (:status game-after-click))))
				(it "2"
					(swap! test-atom assoc :status :user-setup :entry 2)
					(let [click (assoc @test-atom :status :user-setup :entry 2)
								game-after-click (web/run-game @test-atom)]
						(should= 2 (:users game-after-click))
						(should= {:player-num 1 :piece "X" :type :human} (:player1 game-after-click))
						(should= {:player-num 2 :piece "O" :type :human} (:player2 game-after-click))
						(should= :board-setup (:status game-after-click))))))

		(context "level-setup"
			;(let [click-easy (web/run-game (assoc @test-atom :status :level-setup :entry "easy"))
			;			click-medium (web/run-game (assoc @test-atom :status :level-setup :entry "medium"))
			;			click-hard (web/run-game (assoc @test-atom :status :level-setup :entry "hard"))]
				(context "level selected:"
					(it "easy"
						(swap! test-atom assoc :status :level-setup :entry "easy")
						(let [click-easy (web/run-game @test-atom)]
							(should= :easy (:level click-easy))
						(should= :board-setup (:status click-easy))))
					(it "medium"
						(swap! test-atom assoc :status :level-setup :entry "medium")
						(let [click-medium (web/run-game @test-atom)]
						(should= :medium (:level click-medium))
						(should= :board-setup (:status click-medium))))
					(it "hard"
						(swap! test-atom assoc :status :level-setup :entry "hard")
						(let [click-hard (web/run-game @test-atom)]
						(should= :hard (:level click-hard))
						(should= :board-setup (:status click-hard))))))

		(context "board-setup"
			;(let [three-by-three (web/run-game (assoc @test-atom :status :board-setup :entry 3))
			;			two-by-two (web/run-game (assoc @test-atom :status :board-setup :entry 2))]
				(context "board-size:"
					(it "3x3"
						(swap! test-atom assoc :status :board-setup :entry 3)
						(let [three-by-three (web/run-game @test-atom)]
						(should= 3 (:board-size three-by-three))
						(should= [0 1 2 3 4 5 6 7 8] (:board three-by-three))
						(should= :playing (:status three-by-three))))
					(it "2x2"
						(swap! test-atom assoc :status :board-setup :entry 2)
						(let [two-by-two (web/run-game @test-atom)]
							(should= 2 (:board-size two-by-two))
						(should= [0 1 2 3] (:board two-by-two))
						(should= :playing (:status two-by-two))))))

		(context "player-setup"
			(context "human selects:"
				(it "X"
					(swap! test-atom assoc :status :player-setup :entry "X")
					(let [click-X (web/run-game @test-atom)]
						(should= {:player-num 1 :piece "X" :type :human} (:player1 click-X))
						(should= {:player-num 2 :piece "O" :type :computer} (:player2 click-X))
						(should= :level-setup (:status click-X))))
				(it "O"
					(swap! test-atom assoc :status :player-setup :entry "O")
					(let [click-O (web/run-game @test-atom)]
						(should= {:player-num 1 :piece "X" :type :computer} (:player1 click-O))
						(should= {:player-num 2 :piece "O" :type :human} (:player2 click-O))
						(should= :level-setup (:status click-O))))))

		)
	)


(run-specs)
