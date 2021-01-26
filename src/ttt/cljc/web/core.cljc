(ns ttt.cljc.web.core
	(:require [ttt.cljc.master.core :as tcore]))

(def game-atom (atom tcore/game-model))

(defmethod tcore/set-parameters :waiting [game]
	(println "Hi there!")
	(let [updated-game (assoc game :status :user-setup)]
	(swap! game-atom merge updated-game)
	(println "updated-game: " updated-game)
	updated-game))

(defmethod tcore/game-setup :web [game]
	(println "Howdy!!")
	(if (or (= (:status game) :ready-to-play) (= (:status game) :playing))
		game
		(tcore/set-parameters game)))

(defmethod tcore/run-game :web [game]
	(println "Hello there!!  Sup?!")
	(println "game: " game)
	(tcore/game-setup game))