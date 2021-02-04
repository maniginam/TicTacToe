(ns ttt.web.components
	(:require [sablono.core :as sab]
						[ttt.web.web :as web]
						[ttt.web.board :as board]
						#?(:clj [ttt.master.core :as tcore])
						[ttt.master.core :as tcore]
						[ttt.web.setup :as setup]                             ;multimethod
						#?(:cljs [ttt.web.board :as board])                   ;multimethod
						))

(def game-model {:status           :waiting
								 :persistence      {:db :mysql :dbname "ttt"}
								 :users            nil
								 :board-size       3
								 :current-player   :player1
								 :player1          {:player-num 1 :piece "X" :type nil}
								 :player2          {:player-num 2 :piece "O" :type nil}})

(defmulti component (fn [game-atom] (:status @game-atom)))

(defmethod component :waiting [game-atom]
	(let [comp (sab/html [:div.h-center
												[:div.container
												 [:h1 "Welcome to Tic Tac Toe!"]
												 [:button {:class    "h-center"
																	 :id       "start"
																	 :type     "submit"
																	 :on-click #(do (swap! game-atom merge game-model)
																								(swap! game-atom merge (web/update-game game-atom)))
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
												:on-click #(do (swap! game-atom assoc :entry 0)
																			 (swap! game-atom merge (web/update-game game-atom)))
												} "No humans are playing"]
							[:button {:id       "hvc"
												:type     "submit"
												:on-click #(do (swap! game-atom assoc :entry 1)
																		 (swap! game-atom merge (web/update-game game-atom)))
												} "Me VS Computer!"]
							[:button {:id       "hvh"
												:type     "submit"
												:on-click #(do (swap! game-atom assoc :entry 2)
																		 (swap! game-atom merge (web/update-game game-atom)))
												} "me & a human friend"]]]))

(defmethod component :level-setup [game-atom]
	(sab/html [:div.h-center
						 [:div.container
							[:h1 "TicTacToe!"]
							[:h2 "Choose a Difficulty"]
							[:br]
							[:button {:id       "easy"
												:type     "submit"
												:on-click #(do (swap! game-atom assoc :entry "easy")
																		 (swap! game-atom merge (web/update-game game-atom)))
												} "easy"]
							[:br]
							[:button {:id       "medium"
												:type     "submit"
												:on-click #(do (swap! game-atom assoc :entry "medium")
																		 (swap! game-atom merge (web/update-game game-atom)))
												} "Medium"]
							[:br]
							[:button {:id       "hard"
												:type     "submit"
												:on-click #(do  (swap! game-atom assoc :entry "hard")
																		 (swap! game-atom merge (web/update-game game-atom)))
												} "HARD!"]]]))

(defmethod component :player-setup [game-atom]
	(sab/html [:div.h-center
						 [:div.container
							[:h1 "TicTacToe!"]
							[:h2 "Do you want to be X or O?"]
							[:br]
							[:button {:id       "X"
												:type     "submit"
												:on-click #(do (swap! game-atom assoc :entry "X")
																		 (swap! game-atom merge (web/update-game game-atom)))
												} "X"]
							[:br]
							[:button {:id       "O"
												:type     "submit"
												:on-click #(do (swap! game-atom assoc :entry "O")
																		 (swap! game-atom merge (web/update-game game-atom)))
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
												:on-click #(let [entry (.-value (.getElementById js/document "boardsize"))]
																		 (swap! game-atom assoc :entry entry :current-player :player1)
																		 (swap! game-atom merge (web/update-game game-atom)))}
							 "Let's Play!"]]]))

(defmethod component :playing [game-atom]
	(let [player (:current-player @game-atom)
				piece (if (= :player1 player) "X" "O")]
		(sab/html [:div.h-center
							 [:div.container
								[:h1 "TicTacToe!"]
								[:h2 (str piece "'s Turn")]]
							 (board/draw-board game-atom)]
							)))


