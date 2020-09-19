(ns ttt.core)

(def game {:status :waiting :console nil
           :users nil :board-size 3
           :current-player nil
           :player1 {:player-num 1 :piece :player1-piece}
           :player2 {:player-num 2 :piece :player2-piece}
           :board nil :played-boxes []
           :game-over nil :winner nil})

(defn update-game [game]
  game)


(defmulti report :console)
(defmulti welcome :console)
(defmulti offer-position :console)
(defmulti draw-board :console)
(defmulti print-turn (fn [console _ _] (:console console)))
(defmulti print-type (fn [player _] (:type player)))
(defmulti select-box (fn [player _] (:type player)))
(defmulti get-selection (fn [console _] (:console console)))
(defmulti validate-player-count :console)
(defmulti board-size-prompt :console)
(defmulti set-board-size :console)
(defmulti get-box-input :console)

(defn set-state [state]
  state)

(defn update-game-state [state key val]
  (assoc state key val))

(defn get-state [state]
  state)





