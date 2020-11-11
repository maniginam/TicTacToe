(ns main
  (:require [ttt.core :as tcore]
            [ttt.terminal :refer :all]))

(def table "TTT")
(def db "ttt")
(def persistence :mysql)
(def console @tcore/console)

(defn -main [interface & args] ;; TODO - GLM : This should be the ONLY main.  Dispatch to appropriate UI to run.
  (tcore/run-game {:console interface})
  (println "a b c d: " args))


