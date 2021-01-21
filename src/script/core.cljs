(ns script.core
	(:require [sablono.core :as sab]
						[master.core :as tcore]
						))

(def file-map {:waiting     "/index.html" :restart? "/continue?.html" :user-setup "/user-setup.html" :player-setup "/player-setup.html" :level-setup "/level-setup.html"
							 :board-setup "/board-setup.html" :ready-to-play "/ttt.html" :playing "/ttt.html" :game-over "/game-over.html"})


(defonce app-state (atom {:status :waiting}))

(println @app-state)

(defn welcome [data]
	(sab/html [:div.welcome
						 [:h1 "Welcome to Tic Tac Toe!"]
						 [:form {:action "/ttt/setup" :method "get"}
							[:button {:type "submit" :formAction "/ttt/setup" :formMethod "get"} "Let's Play!"]]]))

(defn render! []
	(.render js/ReactDOM
					 (welcome app-state)
					 (.getElementById js/document "ttt")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)