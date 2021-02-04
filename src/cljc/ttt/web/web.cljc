(ns ttt.web.web
	(:require [ttt.master.core :as tcore]
						[ttt.master.game-master :as master]
						))

(def game-atom (atom {:status :waiting :console :web :current-player :player1}))

(defmacro parseInt []
	(let [num (:entry @game-atom)]
	#?(:clj (Integer/parseInt num)
		 :cljs (js/parseInt num)
		 :default num)))

(defmethod tcore/run-game :web [game]
					(if (= :playing (:status game))
						(master/update-state game))
						(tcore/set-parameters game))

(defmacro parameters []
	(tcore/set-parameters @game-atom))

(defn maybe-setup [game-atom]
	(if (= :playing (:status @game-atom))
		game-atom
		(swap! game-atom merge (parameters))))

(defmacro update-game []
	(parseInt (:entry @game-atom))
	(maybe-setup game-atom)
	)