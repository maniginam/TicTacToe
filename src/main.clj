(ns main
  (:require [ttt.core :as tcore]))

(def table "TTT")
(def db "ttt")
(def persistence :mysql)

(defn -main [interface & args] ;; TODO - GLM : This should be the ONLY main.  Dispatch to appropriate UI to run.
  (reset! tcore/console interface)
  (tcore/run {:console tcore/console})
  (println "a b c d: " args)
  ;(let [console {:table table :db db :console :terminal :database :mysql :game-count 0 :persistence persistence}]
  ;  (loop [game (terminal/setup-game console)]
  ;    (run game)
  ;    (if (true? (play-again? console))
  ;      (recur (terminal/setup-game (assoc console :game-count (inc (:game-count game)))))
  ;      (end-game console))))
  )


