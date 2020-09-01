(ns ttt.multimethod-trials)

(def m-player1 {:kind :human :mark "X"})
(def m-player2 {:kind :ai :mark "O"})
(defmulti m-move :kind)
(defmethod m-move :human [player] (println "The human moved " (:mark player)))
(defmethod m-move :ai [player] (println "The computer moved " (:mark player)))


(def comp-v-comp {:players 0})
(def human-v-comp {:players 1})
(def human-v-human {:players 2})

(defmulti game :players)
(defmethod game 0 [game-type] (str "Computer vs Computer"))
(defmethod game 1 [game-type] (str "Human vs Computer"))
(defmethod game 2 [game-type] (str "Human vs Human"))


;(def players {:players :humans})
;
;(def defmulti get-player-count :players)
;(defmethod get-player-count :humans [humans])