(ns main
  (:require
    [ttt.core :refer :all]
    [ttt.terminal :as terminal]
    [ttt.game-master :refer :all]
    [games.h2 :as h2]
    [games.mysql :as sql]
    ))

(def table "TTT")
(def db "ttt")
(def persistence :mysql)

(defn run [game] ;; TODO - GLM : this belongs in terminal
  (loop [game game]
    (h2/save-to-sql game (.toLowerCase (:table game)))
    (sql/save-turn (:db game) game)
    (if (not (nil? (:winner game)))
      (report game (game-results game))
      (recur (play-game game)))))

(defn -main [& args] ;; TODO - GLM : This should be the ONLY main.  Dispatch to appropriate UI to run.
  (println "a b c d: " args)
  ;(let [console {:table table :db db :console :terminal :database :mysql :game-count 0 :persistence persistence}]
  ;  (loop [game (terminal/setup-game console)]
  ;    (run game)
  ;    (if (true? (play-again? console))
  ;      (recur (terminal/setup-game (assoc console :game-count (inc (:game-count game)))))
  ;      (end-game console))))
  )


