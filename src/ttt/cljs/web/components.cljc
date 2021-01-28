(ns ttt.cljs.web.components
	(:require [sablono.core :as sab]
						[ttt.cljc.master.core :as tcore]
						[ttt.cljc.web.core]                                   ;multimethod
						))

(defmulti component (fn [game-atom] (:status @game-atom)))

(def header)

(defmethod component :waiting [game-atom]
	(let [comp (sab/html [:div.h-center
												[:div.container
												 [:h1 "Welcome to Tic Tac Toe!"]
												 [:button {:class    "h-center"
																	 :id       "start"
																	 :type     "submit"
																	 :on-click #(swap! game-atom merge (tcore/run-game @game-atom))
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
				piece (if (= :player1 player) "X" "O")]
		(sab/html [:div.h-center
							 [:div.container
								[:h1 "TicTacToe!"]
								[:h2 (str piece "'s Turn")]
								[:br]]
								[:svg
								 [:line {:x1 "5.0%" :y1 "35.0%" :x2 "95.0%" :y2 "35.0%" :stroke "rgb(94, 94, 99)" :stroke-width "4"}]
								 [:line {:x1 "35.0%" :y1 "5.0%" :x2 "35.0%" :y2 "95.0%" :stroke "rgb(94, 94, 99)" :stroke-width "4"}]
								 [:line {:x1 "5.0%" :y1 "65.0%" :x2 "95.0%" :y2 "65.0%" :stroke "rgb(94, 94, 99)" :stroke-width "4"}]
								 [:line {:x1 "65.0%" :y1 "5.0%" :x2 "65.0%" :y2 "95.0%" :stroke "rgb(94, 94, 99)" :stroke-width "4"}]
								 [:rect {:id 0 :x "5.0%" :y "5.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
								 [:rect {:id 1 :x "35.0%" :y "5.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
								 [:rect {:id 2 :x "65.0%" :y "5.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
								 [:rect {:id 3 :x "5.0%" :y "35.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
								 [:rect {:id 4 :x "35.0%" :y "35.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
								 [:rect {:id 5 :x "65.0%" :y "35.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
								 [:rect {:id 6 :x "5.0%" :y "65.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
								 [:rect {:id 7 :x "35.0%" :y "65.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
								 [:rect {:id 8 :x "65.0%" :y "65.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
								 ]]
								)))

