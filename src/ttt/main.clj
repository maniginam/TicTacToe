(ns ttt.main
  (:require
    [ttt.core :refer :all]
    [ttt.game-setup :refer :all]
    [ttt.default-game :refer :all]
    ;[quil.gui :as gui]
    ))

(def game-state
  {:status :waiting :users nil :player nil :winner nil})

(defn run [game]
  (loop [game game]
    (if (not (nil? (:winner game)))
      (report game (game-results game))
      (recur (play-game game)))))

(defn -main [& console]
  (let [game (setup-game {:console (keyword console)})]
    (run game)))


