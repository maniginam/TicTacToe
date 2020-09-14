(ns ttt.core)


(defmulti report :console)
(defmulti welcome :console)
(defmulti assign-type (fn [console _] (:console console)))
(defmulti offer-position :console)
(defmulti make-move (fn [player _] (:type player)))
(defmulti validate-player-count :console)
(defmulti user-message :status)

(defmulti mouse-clicked (fn [state _] (:status state)))
(defmulti draw-user-prompt (fn [state & _] (:status state)))



(defn next-player [game player]
  (if (= player (:player1 game)) (:player2 game) (:player1 game)))

(defn assign-player2-type [player1]
  (if (= (:type player1) :human) :computer :human))


(defn set-state [state]
  state)

(defn update-game-state [state key val]
  (assoc state key val))

(defn get-state [state]
  state)





