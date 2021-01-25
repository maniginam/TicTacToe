(ns ttt.clj.master.start
  (:gen-class)
  (:require [ttt.clj.master.core :refer :all]
            [ttt.clj.ttt.terminal :refer :all]
            [ttt.clj.gui.gui :refer :all]))

(defn -main [& interface]
  (let [interface (if (nil? interface) :terminal (keyword (first interface)))]
  (reset! ttt.clj.master.core/console interface)
  (let [game (assoc ttt.clj.master.core/game-model :console interface)]
    (ttt.clj.master.core/run-game game))))
