(ns ttt.web.core
	(:require [ttt.master.core :as tcore]
						[ttt.web.components :refer [component]]))

(defonce game (atom (assoc tcore/game-model :status :waiting :console :web
																						:persistence {:db :web} :current-player :player1)))

(defn render! []
	(.render js/ReactDOM
					 (component game)
					 (.getElementById js/document "ttt")))

(add-watch game :on-change (fn [k a o n] (render!)))

(render!)