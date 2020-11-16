(ns main
  (:require [ttt.core :as tcore]
            [ttt.terminal :as terminal]
            [gui.gui :as gui]))

(def table "TTT")
(def db "ttt")
(def persistence :mysql)

;; TODO - GLM : This should be the ONLY main.  Dispatch to appropriate UI to run.
(defn -main [interface]
  (reset! tcore/console (keyword interface))
  (let [game (assoc tcore/game-model :console (keyword interface))]
    (tcore/run-game game)))


