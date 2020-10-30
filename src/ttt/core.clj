(ns ttt.core)

;(def game {:status :waiting
;           :console nil
;           :users nil
;           :board-size 3
;           :current-player nil
;           :player1 {:player-num 1 :piece :player1-piece}
;           :player2 {:player-num 2 :piece :player2-piece}
;           :board nil
;           :game-over nil
;           :winner nil})

(def types {0 :computer 1 nil 2 :human})

;(defprotocol Game "Map for Game"
;  (setup-newgame [this] "sets up game"))
;
;(defrecord NewGame [game-map]
;  Game
;  (setup-newgame [this] (:game-map this)))

(defmulti report :console)
(defmulti welcome :console)
(defmulti offer-position :console)
(defmulti draw-board :console)
(defmulti show-move (fn [game box] (:console game)))
(defmulti print-turn (fn [console _ _] (:console console)))
(defmulti print-type (fn [player _] (:type player)))
(defmulti select-box (fn [player _] (:type player)))
(defmulti get-selection (fn [console _] (:console console)))
(defmulti validate-player-count :console)
(defmulti board-size-prompt :console)
(defmulti set-board-size :console)
(defmulti set-level :console)
(defmulti get-box-input :console)
(defmulti play-again :console)
(defmulti play-again? :console)
(defmulti too-many-tries :input)
(defmulti end-game :console)
(defmulti restart? :console)
(defmulti get-restart-input :console)
(defmulti restart :console)

(defmulti save-game :persistence)
(defmulti save-turn :persistence)
(defmulti load-game :persistence)

(defn set-state [state]
  state)

(defn update-game-state [state key val]
  (assoc state key val))

(defn get-state [state]
  state)





