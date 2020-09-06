(ns ttt.core
  (:require
    ;[quil-gui.gui :refer :all]
    [ttt.the-game :refer :all]
    [ttt.terminal-gui :refer :all]
    [ttt.board :refer :all]))

(defn -main []
    (run-game {:gui :terminal}))
