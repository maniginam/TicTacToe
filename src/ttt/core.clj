(ns ttt.core)

(def console (atom :terminal))
(def types {0 :computer 1 nil 2 :human})
(def dbname "ttt")
(def game-model {:status           :waiting
                 :persistence      {:db :mysql :dbname dbname :table "ttt"}
                 :message-key      :waiting
                 :console          @console
                 :users            nil
                 :board-size       3
                 :board-set?       false
                 :key-stroke       nil
                 :current-player   :player1
                 :player1          {:player-num 1 :piece "X" :type nil}
                 :player2          {:player-num 2 :piece "O" :type nil}
                 :current-plyr-num 1
                 :board            [0 1 2 3 4 5 6 7 8]
                 :ai-turn          false
                 :boxes            nil
                 :level            :hard
                 :turn             nil
                 :game-over        false
                 :play-again-pause 0
                 :winner           nil})

(defmulti report :console)
(defmulti welcome :console)
(defmulti game-setup :console)
(defmulti update-game :console)
(defmulti offer-position :console)
(defmulti draw-board :console)
(defmulti draw-state (fn [game box] (:console game)))
(defmulti print-turn (fn [console _ _] (:console console)))
(defmulti print-type (fn [player _] (:type player)))
(defmulti select-box (fn [player _] (:type player)))
(defmulti get-selection (fn [console _] (:console console)))
(defmulti validate-player-count :console)
(defmulti board-size-prompt :console)
(defmulti set-board-size :console)
(defmulti prompt-for-level :console)
(defmulti get-box-input :console)
(defmulti play-again :console)
(defmulti play-again? :console)
(defmulti too-many-tries :input)
(defmulti end-game :console)
(defmulti restart? :console)
(defmulti get-restart-input :console)
(defmulti restart :console)
(defmulti run :console)
(defmulti set-parameters :status)

(defmulti save-game (fn [game] (:db (:persistence game))))
(defmulti save-turn (fn [game] (:db (:persistence game))))
(defmulti load-game (fn [game] (:db (:persistence game))))

(defn set-state [state]
  state)

(defn update-game-state [state key val]
  (assoc state key val))

(defn get-state [state]
  state)





