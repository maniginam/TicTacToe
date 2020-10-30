(ns ttt.terminal
  (:require [ttt.optimal-play :refer :all]
            [ttt.board :refer :all]
            [ttt.core :refer :all]
            [ttt.user-inputs :refer :all]
            [ttt.console-messages :as msg]
            [ttt.game-master :as master]
            [ttt.user-inputs :refer :all]
            [games.mysql :as sql]
            [ttt.game-master :as gm]
            [ttt.core :as tcore]))

(def depths {:hard 0 :medium 1 :easy 2 :none 0}) ;; TODO - GLM : duplicated in game master?

(defmethod validate-player-count :terminal [console]
  (loop [input (ask-num-of-players)
         tries 0]
    (cond (>= tries 3) (too-many-players-tries)
          (valid-user-count? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (ask-num-of-players)) (inc tries)))))

(defmethod set-board-size :terminal [console]
  (loop [input (board-size-prompt console)
         tries 0]
    (cond (>= tries 3) (std-board-msg)
          (valid-for-int-type? input) (Integer/parseInt input)
          :else (recur (if (>= (inc tries) 3) nil (board-size-prompt console)) (inc tries)))))

(defn get-level [input]
  (cond (= "H" (.toUpperCase input)) :hard
        (= "M" (.toUpperCase input)) :medium
        (= "E" (.toUpperCase input)) :easy))

(defmethod prompt-for-level :terminal [console]
  (println (msg/level-prompt))
  (loop [input (read-line)
         tries 0]
    (cond (>= tries 3) (too-many-tries {:input :level})
          (valid-level? input) (get-level input)
          (= tries 2) (recur nil 3)
          :else (do (println (msg/level-prompt))
                    (recur (read-line) (inc tries))))))

(defmethod report :terminal [console results]
  (println results))

(defn affirmative? [input]
  (cond (= "Y" (.toUpperCase input)) true
        (= "N" (.toUpperCase input)) false
        :else (do (println (str input " is not a valid option.  Enter Y or N")) false)))

(defmethod play-again? :terminal [console]
  (loop [input (get-play-again-input)
         tries 0]
    (cond (>= tries 3) (too-many-tries {:input :play-again})
          (valid-yes-or-no-input? input) (affirmative? input)
          :else (recur (if (= (inc tries) 3) nil (get-play-again-input)) (inc tries)))))

(defmethod end-game :terminal [console]
  (println "Ok.  Well, Let's Play Again Soon!  Bye!"))

(defmethod restart? :terminal [last-game]
  (if (master/game-over? last-game)
    false
    (loop [input (get-restart-input last-game)
           tries 0]
      (cond (>= tries 3) (too-many-tries {:input :restart?})
            (valid-yes-or-no-input? input) (affirmative? input)
            :else (recur (if (= (inc tries) 3) nil (get-restart-input last-game)) (inc tries))))))

(defmethod restart :terminal [game]
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
        (assoc :depth (:depth last-game))
        (assoc :level (:level last-game))
        (assoc :message-key :nil)
        (assoc :winner nil)
        (assoc :game-count (:game-count last-game)))))

(defmethod draw-board :terminal [game board]
  (let [row-size (int (Math/sqrt (count board)))
        rows (get-rows board)
        break-line (str "=====" (apply str (repeat (- row-size 1) "||=====")))]
    (doseq [row rows]
      (println (apply str "  " (interpose "  ||  " row)))
      (if (not (= (last rows) row))
        (println break-line)))))

(defmethod show-move :terminal [game box]
  (draw-board game (:board game))
  (print-turn game ((:current-player game) game) box)
  )

(defn assign-player2-type [player1]
  (if (= (:type player1) :human) :computer :human))

(defn assign-player1-type [game]
  (loop [input (offer-position game)
         tries 0]
    (cond (>= tries 3) (too-many-tries {:input :position})
          (valid-position? input) (set-position input)
          :else (recur (if (= (inc tries) 3) nil (offer-position game)) (inc tries)))))

(defn assign-type [game player-num]
  (let [users (:users game)]
    (cond (zero? users) :computer
          (= 2 users) :human
          :else (if (= player-num 1)
                  (assign-player1-type game)
                  (assign-player2-type (:player1 game))))))

(defn assign-player [game player]
  (let [player-num (player-nums player)
        piece (pieces player)
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
    (if (restart? updated-sql-game)
      (restart (assoc game :last-game updated-sql-game))
      (let [users (validate-player-count game)
            player1 (assign-player (assoc game :users users) :player1)
            player2 (assign-player (assoc game :users users :player1 player1) :player2)
            board-size (set-board-size game)
            level (if (< users 2) (prompt-for-level game) :none)
            fresh-game (assoc game :level level :depth (level depths)
                                   :current-player :player1 :box-played nil :users users
                                   :player1 player1 :player2 player2 :board-size board-size :board (create-board board-size))]
        ;(sql/save-game (:db game) fresh-game)
        (gm/start-game! game)
        fresh-game))))
