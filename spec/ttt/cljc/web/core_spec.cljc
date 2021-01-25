(ns ttt.cljc.web.web-spec
  (:require-macros [speclj.core :refer [run-specs describe it should should-not should=]])
  (:require #?(:clj [speclj.core])
            #?(:cljs [ttt.cljs.web.core :as web])))

(enable-console-print!)

(describe "test"
  (it "adds"
    (should= 40 (+ 1 1)))

  (it "welcomes on startup")
  (web/welcome 0)
  (let [status (get @web/game-state :status)]
    (should= :waiting status))
  )

(run-specs)

