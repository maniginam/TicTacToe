(ns ttt.cljc.web.core-spec
  (:require-macros [speclj.core :refer [run-specs describe it should should-not should=]])
  (:require [speclj.core]
            [ttt.cljs.web.core :as web]))

;(enable-console-print!)

(describe "TTT Setup"
  (it "welcomes on startup"
  (web/welcome 0)
  (let [status (get @web/game-state :status)]
    (should= :waiting status)))
  )

(run-specs)

