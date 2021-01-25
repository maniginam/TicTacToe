(ns ttt.cljs.web.core
	(:require [sablono.core :as sab]
						))

(def file-map {:waiting     "/index.html" :restart? "/continue?.html" :user-setup "/user-setup.html" :player-setup "/player-setup.html" :level-setup "/level-setup.html"
							 :board-setup "/board-setup.html" :ready-to-play "/ttt.html" :playing "/ttt.html" :game-over "/game-over.html"})


(defonce game-state (atom {:status :waiting}))

(println @game-state)

(defn welcome [data]
	(let [start (sab/html [:div.welcome
												 [:h1 "Welcome to Tic Tac Toe!"]
												 [:button {:id :start :type "button"} "Let's Play!"]])]
		start))

(defn render! []
	(.render js/ReactDOM
					 (welcome game-state)
					 (.getElementById js/document "ttt")))

(add-watch game-state :on-change (fn [_ _ _ _] (render!)))

(render!)


;{$$typeof #object[Symbol (react.element)],
; :type div, :key nil, :ref nil,
; :props #js{:className welcome,
;						:children  #js [#js {$$typeof #object[Symbol (react.element)], :type h1, :key nil, :ref nil,
;																 :props   #js {:children Welcome to Tic Tac Toe!}, :_owner nil, :_store #js {}}
;														#js {$$typeof #object[Symbol (react.element)], :type button, :key nil, :ref nil,
;																 :props #js {:id start, :type button, :children Let's Play!}, :_owner nil, :_store #js {}}]},
; :_owner nil, :_store #js {}}