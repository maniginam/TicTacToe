(ns ttt.cljs.web.core-spec
	(:require-macros [speclj.core :refer [run-specs describe context it should should-not should=]])
	(:require [speclj.core]
						[sablono.core :as sab]
						[ttt.cljs.web.core :as web]
						))

(enable-console-print!)

(describe "TTT Setup"

	(context "phase of setup:"
		(it "welcomes at startup"
			(let [elements (:children (:props (web/welcome 0)))
						status (get @web/game-state :status)]
				(should= :waiting status)
				;(should= :start (get (get (second elements) :props) :id))
				))

		(it "users-setup on click"
			(let [start (web/welcome 0)
						button (.getElementById js/document ":start")]
				(println "button: " button)
				(println "hi!")
				;(set! button)
				(should= 1 (+ 2 2))
				(should= :user-setup (get @web/game-state :status))
				))
		)
	)

(run-specs)