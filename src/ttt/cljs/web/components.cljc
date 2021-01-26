(ns ttt.cljs.web.components
	(:require [sablono.core :as sab]
						[ttt.cljc.master.core :as tcore]
						[ttt.cljc.web.core :as ccore]))

(defmulti component (fn [game-atom] (:status @game-atom)))

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
	(sab/html [:div.v-center
						 [:div.container
							[:h1 "How Many Humans Are Playing?"]
							]])
	)
