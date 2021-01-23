(ns web.core
	(:require-macros [speclj.core :refer [run-specs describe it should should-not run-specs should=]])
	(:require [speclj.core]
						;[web.core :as web]
						;[web.setup-spec :as setup]
						))

(enable-console-print!)

(describe "test"
	(it "adds"
		(should= 6 (+ 1 2 3)))

	(it "welcomes on startup")
	(web/welcome 0)
	(let [status (get @web/game-state :status)]
		(should= :waiting status))
	)

(run-specs)