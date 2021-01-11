(ns master.start
  (:gen-class)
  (:require [master.core :refer :all]
            [ttt.terminal :refer :all]
            [gui.gui :refer :all]))

(defn -main [& interface]
  (let [interface (if (nil? interface) :gui (keyword (first interface)))]
  (reset! master.core/console interface)
  (let [game (assoc master.core/game-model :console interface)]
    (master.core/run-game game))))
