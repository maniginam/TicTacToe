(ns ttt.master.start
  (:gen-class)
  (:require [ttt.master.core :refer :all]
            [ttt.terminal.terminal :refer :all]
            [ttt.gui.gui :refer :all]))

(defn -main [& interface]
  (let [interface (if (nil? interface) :terminal (keyword (first interface)))]
    (reset! ttt.master.core/console interface)
    (let [game (assoc ttt.master.core/game-model :console interface)]
      (ttt.master.core/run-game game))))
