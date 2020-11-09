(ns ttt.terminal
  (:require [games.mysql :as sql]
            [ttt.board :as board]
            [ttt.console-messages :as msg]
            [ttt.core :as tcore]
            [ttt.core :as tcore]
            [ttt.game-master :as gm]
            [ttt.game-master :as master]
            [ttt.user-inputs :as input]))

(def depths {:hard 0 :medium 1 :easy 2 :none 0})            ;; TODO - GLM : duplicated in game master?

(defmethod tcore/validate-player-count :terminal [console]
  (loop [input (input/ask-num-of-players)
         tries 0]
    (cond (>= tries 3) (input/too-many-players-tries)
          (input/valid-user-count? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (input/ask-num-of-players)) (inc tries)))))

(defmethod tcore/set-board-size :terminal [console]
  (loop [input (tcore/board-size-prompt console)
         tries 0]
    (cond (>= tries 3) (input/std-board-msg)
          (input/valid-for-int-type? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (tcore/board-size-prompt console)) (inc tries)))))

(defn get-level [input]
  (cond (= "H" (.toUpperCase input)) :hard
        (= "M" (.toUpperCase input)) :medium
        (= "E" (.toUpperCase input)) :easy))

(defmethod tcore/prompt-for-level :terminal [console]
  (println (msg/level-prompt))
  (loop [input (read-line)
         tries 0]
    (cond (>= tries 3) (tcore/too-many-tries {:input :level})
          (input/valid-level? input) (get-level input)
          (= tries 2) (recur nil 3)
          :else (do (println (msg/level-prompt))
                    (recur (read-line) (inc tries))))))

(defmethod tcore/report :terminal [console results]
  (println results))

(defn affirmative? [input]
  (cond (= "Y" (.toUpperCase input)) true
        (= "N" (.toUpperCase input)) false
        :else (do (println (str input " is not a valid option.  Enter Y or N")) false)))

(defmethod tcore/play-again? :terminal [console]
  (loop [input (input/get-play-again-input)
         tries 0]
    (cond (>= tries 3) (tcore/too-many-tries {:input :play-again})
          (input/valid-yes-or-no-input? input) (affirmative? input)
          :else (recur (if (= (inc tries) 3) nil (input/get-play-again-input)) (inc tries)))))

(defmethod tcore/end-game :terminal [console]
  (println "Ok.  Well, Let's Play Again Soon!  Bye!"))

(defmethod tcore/restart? :terminal [last-game]
  (if (master/game-over? last-game)
    false
    (loop [input (tcore/get-restart-input last-game)
           tries 0]
      (cond (>= tries 3) (tcore/too-many-tries {:input :restart?})
            (input/valid-yes-or-no-input? input) (affirmative? input)
            :else (recur (if (= (inc tries) 3) nil (tcore/get-restart-input last-game)) (inc tries))))))

(defmethod tcore/restart :terminal [game]
  (let [last-game (:last-game game)]
    (-> game
        (assoc :status (:status last-game))
        (assoc :console (:console game))
        (assoc :board-size (int (Math/sqrt (count (:board last-game)))))
        (assoc :users (:users last-game))
        (assoc :current-player (:current-player last-game))
        (assoc :player1 (:player1 last-game))
        (assoc :player2 (:player2 last-game))
        (assoc :board (:board last-game))
        (assoc :level (:level last-game))
        (assoc :message-key :nil)
        (assoc :winner nil)
        (assoc :game-count (:game-count last-game)))))

(defmethod tcore/draw-board :terminal [game board]
  (let [row-size (int (Math/sqrt (count board)))
        rows (board/get-rows board)
        break-line (str "=====" (apply str (repeat (- row-size 1) "||=====")))]
    (doseq [row rows]
      (println (apply str "  " (interpose "  ||  " row)))
      (if (not (= (last rows) row))
        (println break-line)))))

(defmethod tcore/show-move :terminal [game box]
  (tcore/draw-board game (:board game))
  (tcore/print-turn game ((:current-player game) game) box)
  )

(defn assign-player2-type [player1]
  (if (= (:type player1) :human) :computer :human))

(defn assign-player1-type [game]
  (loop [input (tcore/offer-position game)
         tries 0]
    (cond (>= tries 3) (tcore/too-many-tries {:input :position})
          (input/valid-position? input) (input/set-position input)
          :else (recur (if (= (inc tries) 3) nil (tcore/offer-position game)) (inc tries)))))

(defn assign-type [game player-num]
  (let [users (:users game)]
    (cond (zero? users) :computer
          (= 2 users) :human
          :else (if (= player-num 1)
                  (assign-player1-type game)
                  (assign-player2-type (:player1 game))))))

(defn assign-player [game player]
  (let [player-num (board/player-nums player)
        piece (board/pieces player)
        type (assign-type game player-num)]
    {:player-num player-num :piece piece :type type}))

;; TODO - GLM : Maybe you can make this work like the GUI where there's a status that tells you what to do next.
(defn setup-game [game]
  (let [last-sql-game (tcore/load-game game)
        ;last-h2-game (h2/get-last-db-game (:table game))
        ;last-filed-game (saved/pull-game)
        updated-sql-game (assoc last-sql-game :old-console (:console last-sql-game) :console (:console game))
        ;updated-h2-game (assoc last-h2-game :old-console (:console last-h2-game) :console (:console game))
        ;updated-filed-game (assoc last-filed-game :old-console (:console last-filed-game) :console (:console game))
        ;last-count (get updated-filed-game :game-count 0)
        ]
    (if (tcore/restart? updated-sql-game)
      (tcore/restart (assoc game :last-game updated-sql-game))
      (let [users (tcore/validate-player-count game)
            player1 (assign-player (assoc game :users users) :player1)
            player2 (assign-player (assoc game :users users :player1 player1) :player2)
            board-size (tcore/set-board-size game)
            level (if (< users 2) (tcore/prompt-for-level game) :none)
            fresh-game (assoc game :level level
                                   :current-player :player1
                                   :box-played nil
                                   :users users
                                   :player1 player1
                                   :player2 player2
                                   :board-size board-size
                                   :board (board/create-board board-size))]
        ;(sql/save-game (:db game) fresh-game)
        (gm/start-game! game)
        fresh-game))))

(defn run [game]                                            ;; TODO - GLM : this belongs in terminal
  (loop [game game]
    (tcore/save-game game)
    (tcore/save-turn game)
    (if (not (nil? (:winner game)))
      (tcore/report game (master/game-results game))
      (recur (master/play-game game)))))