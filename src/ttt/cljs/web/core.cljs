(ns ttt.cljs.web.core
	(:require [ttt.cljs.web.components :refer [component]]))

(defonce game (atom {:status :waiting :console :web}))

(println "@game: " @game)

(defn render! []
	(.render js/ReactDOM
					 (component game)
					 (.getElementById js/document "ttt")))

(add-watch game :on-change (fn [k r o n] (render!)))

(render!)
