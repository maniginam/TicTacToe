(ns ttt.web.web
	(:require [ttt.master.core :as tcore]
						[ttt.master.game-master :as master]
						))

(defmethod tcore/run-game :web [game]
					(println "Run-game in Web.Web")
					(if (= :playing (:status game))
						(master/update-state game))
						(tcore/set-parameters game))

(defn run-game [game]
	(tcore/run-game game))

(defn update-game [game]
	(master/update-state game))