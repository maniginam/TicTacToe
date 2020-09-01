(ns ttt.game-setup)

(def comp-v-comp {:players 0})
(def human-v-comp {:players 1})
(def human-v-human {:players 2})

(defmulti game :players)
(defmethod game 0 [game-type] (str "Computer vs Computer"))
(defmethod game 1 [game-type] (str "Human vs Computer"))
(defmethod game 2 [game-type] (str "Human vs Human"))



