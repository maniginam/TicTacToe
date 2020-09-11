(ns ttt.core)


(defmulti report :console)
(defmulti welcome :console)
(defmulti assign-type (fn [console _] (:console console)))
(defmulti offer-position :console)
(defmulti make-move (fn [player _] (:type player)))
(defmulti validate-player-count :console)





