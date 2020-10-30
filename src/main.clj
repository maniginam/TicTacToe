(ns main
  (:require
    [ttt.core :refer :all]
    [ttt.game-setup :refer :all]
    [ttt.game-master :refer :all]
    [games.h2 :as h2]
    [games.mysql :as sql]
    ))

(def table "TTT")
(def db "ttt")
(def persistence :mysql)

(defn run [game] ;; TODO - GLM : this belong in terminal
  (loop [game game]
    (h2/save-to-sql game (.toLowerCase (:table game)))
    (sql/save-turn (:db game) game)
    (if (not (nil? (:winner game)))
      (report game (game-results game))
      (recur (play-game game)))))

(defn -main [] ;; TODO - GLM : This should be the ONLY main.  Dispatch to appropriate UI to run.
  (let [console {:table table :db db :console :terminal :database :mysql :game-count 0 :persistence persistence}]
    (loop [game (setup-game console)]
      (run game)
      (if (true? (play-again? console))
        (recur (setup-game (assoc console :game-count (inc (:game-count game)))))
        (end-game console)))))


