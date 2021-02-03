(ns ttt.web.components
	(:require [sablono.core :as sab]
						[ttt.web.web :as web]
						#?(:clj [ttt.master.core :as tcore])
						[ttt.web.setup :as setup] ;multimethod
						#?(:cljs [ttt.web.board :as board]) ;multimethod
						))

(defmulti component (fn [game-atom] (:status @game-atom)))

(defmethod component :waiting [game-atom]
	(let [comp (sab/html [:div.h-center
												[:div.container
												 [:h1 "Welcome to Tic Tac Toe!"]
												 [:button {:class    "h-center"
																	 :id       "start"
																	 :type     "submit"
																	 :on-click #(swap! game-atom merge #?(:clj (tcore/run-game @game-atom)))
																	 }
													"Let's Play!"]]])]
		comp))

(defmethod component :user-setup [game-atom]
	(sab/html [:div.h-center
						 [:div.container
							[:h1 "TicTacToe!"]
							[:h2 "How Many Humans Are Playing?"]
							[:button {:id       "cvc"
												:type     "submit"
												:on-click #(swap! game-atom merge (tcore/run-game (assoc @game-atom :entry 0)))
												} "No humans are playing"]
							[:button {:id       "hvc"
												:type     "submit"
												:on-click #(swap! game-atom merge (tcore/run-game (assoc @game-atom :entry 1)))
												} "Me VS Computer!"]
							[:button {:id       "hvh"
												:type     "submit"
												:on-click #(swap! game-atom merge (tcore/run-game (assoc @game-atom :entry 2)))
												} "me & a human friend"]]]))

(defmethod component :level-setup [game-atom]
	(sab/html [:div.h-center
						 [:div.container
							[:h1 "TicTacToe!"]
							[:h2 "Choose a Difficulty"]
							[:br]
							[:button {:id       "easy"
												:type     "submit"
												:on-click #(swap! game-atom merge (tcore/run-game (assoc @game-atom :entry "easy")))
												} "easy"]
							[:br]
							[:button {:id       "medium"
												:type     "submit"
												:on-click #(swap! game-atom merge (tcore/run-game (assoc @game-atom :entry "medium")))
												} "Medium"]
							[:br]
							[:button {:id       "hard"
												:type     "submit"
												:on-click #(swap! game-atom merge (tcore/run-game (assoc @game-atom :entry "hard")))
												} "HARD!"]]]))

(defmethod component :player-setup [game-atom]
	(sab/html [:div.h-center
						 [:div.container
							[:h1 "TicTacToe!"]
							[:h2 "Do you want to be X or O?"]
							[:br]
							[:button {:id       "X"
												:type     "submit"
												:on-click #(swap! game-atom merge (tcore/run-game (assoc @game-atom :entry "X")))
												} "X"]
							[:br]
							[:button {:id       "O"
												:type     "submit"
												:on-click #(swap! game-atom merge (tcore/run-game (assoc @game-atom :entry "O")))
												} "O"]]]))

(defmethod component :board-setup [game-atom]
	(sab/html [:div.h-center
						 [:div.container
							[:h1 "TicTacToe!"]
							[:h2 "What size board do you want to play?"]
							[:br]
							[:label "? x ?  "]
							[:input {:id "boardsize" :type "text" :name "board-size"}]
							[:button {:id       "play"
												:type     "submit"
												:on-click #(let [entry (.-value (.getElementById js/document "boardsize"))
																				 game (tcore/run-game (assoc @game-atom :entry entry))]
																		 (swap! game-atom merge game))}
							 "Let's Play!"]]]))

(defmethod component :playing [game-atom]
	(let [player (:current-player @game-atom)
				piece (if (= :player1 player) "X" "O")
				board (board/draw-board game-atom)]
		(println "board: " board)
		(sab/html [:div.h-center
							 [:div.container
								[:h1 "TicTacToe!"]
								[:h2 (str piece "'s Turn")]]
							 (board/draw-board game-atom)]
							)))


