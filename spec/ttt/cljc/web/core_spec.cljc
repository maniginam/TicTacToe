(ns ttt.cljc.web.core-spec
	(:require-macros [speclj.core :refer [run-specs before after describe context it should should-not should=]])
	(:require [reagent.core :as r]
						[reagent.dom :as rdom]
						[speclj.core]
						[sablono.core :as sab]
						[ttt.cljs.web.components :as comps]
						[ttt.cljc.master.core :as tcore]
						[ttt.cljc.spec-helper :as helper]
						[ttt.cljs.web.core :as web]
						[ttt.cljc.web.core]))

(enable-console-print!)

(def web-game (atom (assoc helper/test-game :console :web)))

(describe "TTT Setup"
	(before (reset! web/game @web-game))

	(context "phase of setup:"
		(it "welcomes at startup"
			(let [status (get @web/game :status)]
				(should= :waiting status)))

		(it "click start for user-setup"
			(let [click (tcore/run-game @web-game)]
				(should= :user-setup (get click :status))))
		)
	)

	(run-specs)
