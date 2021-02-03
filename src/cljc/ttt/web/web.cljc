(ns ttt.web.web
	(:require #?(:clj [ttt.master.core :as tcore])
						#?(:clj [ttt.master.game-master :as master])
						))

#?(:clj (defmethod tcore/run-game :web [game]
					(println "Run-game in Web.Web")
					(if (= :playing (:status game))
						#?(:clj (master/update-state game))
						#?(:clj (tcore/set-parameters game)))))

(defn run-game [game]
	#?(:clj (tcore/run-game game)))

(defn update-game [game-atom]
	#?(:clj (master/update-state @game-atom)))