(ns ttt.main
  (:require
    [quil.core :as q]
    [ttt.core :refer :all]
    [ttt.board :refer :all]
    [ttt.setup-game :refer :all]
    [ttt.default-game :refer :all]
    [ttt.terminal :refer :all]
    [quil.gui-game :refer :all]
    ;[quil.gui :refer :all]
    ))

(def game-state
  {:status :waiting :users nil :player nil :winner nil})

(defn run-game [console]
  (let [game (setup-game console)
        results (game-results (play-game game))]
    (report console results)))

(defn -main []
  (run-game {:console :terminal}))

