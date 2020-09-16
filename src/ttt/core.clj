(ns ttt.core)


(defmulti report :console)
(defmulti welcome :console)
(defmulti assign-type (fn [console _] (:console console)))
(defmulti offer-position :console)
(defmulti select-box :console)
(defmulti make-move (fn [player _] (:type player)))
(defmulti validate-player-count :console)
(defmulti board-size-prompt :console)
(defmulti set-board-size :console)
(defmulti get-box-input :console)

(defmulti user-message :status)
(defmulti mouse-clicked (fn [state _] (:status state)))
(defmulti draw-user-prompt (fn [state & _] (:status state)))
(defmulti draw-piece (fn [state _ _] (:player state)))

(defn set-state [state]
  state)

(defn update-game-state [state key val]
  (assoc state key val))

(defn get-state [state]
  state)





