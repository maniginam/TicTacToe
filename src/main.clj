(ns main
  (:require
    [ttt.core :refer :all]
    [ttt.game-setup :refer :all]
    [ttt.game-master :refer :all]
    [quil.gui :as gui]
    [games.saved-games :as saved]
    [games.mysql-games :as sql]
    ))

(def table "TTT")

(defn run [game]
  (loop [game game]
    (saved/save-game game)
    (sql/save-to-sql game (.toLowerCase (:table game)))
    (if (not (nil? (:winner game)))
      (report game (game-results game))
      (recur (play-game game)))))

(defn -main []
  (let [console {:table table :console :terminal :database :mysql :game-count 0}]
    (loop [game (setup-game console)]
      (run game)
      (if (true? (play-again? console))
        (recur (setup-game (assoc console :game-count (inc (:game-count game)))))
        (end-game console)))))


