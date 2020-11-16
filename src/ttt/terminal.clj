(ns ttt.terminal
  (:require [games.mysql :as sql]
            [ttt.board :as board]
            [ttt.console-messages :as msg]
            [ttt.core :as tcore]
            [ttt.core :as tcore]
            [ttt.game-master :as gm]
            [ttt.game-master :as master]
            [ttt.user-inputs :as input]))

;; COMPLETE - TODO - GLM : duplicated in game master?

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

(defmethod tcore/report! :terminal [console results]
  (println results))

(defn game-results [game]
  (let [winner (:winner game)]
    (cond (= 1 winner) (str (:piece (:player1 game)) " Wins!")
          (= 2 winner) (str (:piece (:player2 game)) " Wins!")
          :else (str "Cat's Game"))))

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

(defmethod tcore/quit-game :terminal [console]
  (println "Ok.  Well, Let's Play Again Soon!  Bye!"))

(defmethod tcore/restart? :terminal [last-game]
  (loop [input (tcore/get-restart-input last-game)
         tries 0]
    (cond (>= tries 3) (tcore/too-many-tries {:input :restart?})
          (input/valid-yes-or-no-input? input) (affirmative? input)
          :else (recur (if (= (inc tries) 3) nil (tcore/get-restart-input last-game)) (inc tries)))))

(defmethod tcore/draw-board :terminal [game board]
  (let [row-size (int (Math/sqrt (count board)))
        rows (board/get-rows board)
        break-line (str "=====" (apply str (repeat (- row-size 1) "||=====")))]
    (doseq [row rows]
      (println (apply str "  " (interpose "  ||  " row)))
      (if (not (= (last rows) row))
        (println break-line)))))

(defmethod tcore/draw-state :terminal [game]
  (let [box (:box-played game)]
    (tcore/draw-board game (:board game))
    (tcore/print-turn game ((:current-player game) game) box)))

(defn assign-player2-type [player1]
  (if (= (:type player1) :human) :computer :human))

(defn prompt-for-player-type [game]
  (loop [input (tcore/offer-position game)
         tries 0]
    (cond (>= tries 3) (tcore/too-many-tries {:input :position})
          (input/valid-position? input) (.toUpperCase input)
          :else (recur (if (= (inc tries) 3) nil (tcore/offer-position game)) (inc tries)))))

;; COMPLETE - TODO - GLM : Maybe you can make this work like the GUI where there's a status that tells you what to do next.
(defmethod tcore/set-parameters :waiting [game]
  (let [last-game (assoc (tcore/load-game game) :console (:console game))]
    (assoc game :last-game last-game :status :restart?)))

(defmethod tcore/set-parameters :restart? [game]
  (let [last-game (:last-game game)]
    (if (gm/game-over? last-game)
      (assoc game :status :user-setup)
      (if (tcore/restart? last-game)
        last-game
      (assoc game :status :user-setup)))))

(defmethod tcore/set-parameters :user-setup [game]
  (let [users (tcore/validate-player-count game)]
    (assoc game :users users :status :player-setup)))

(defmethod tcore/set-parameters :player-setup [game]
  (let [users (:users game)]
    (cond (zero? users) (gm/set-players game :computer)
          (= 2 users) (gm/set-players game :human)
          :else (let [human-piece (prompt-for-player-type game)
                      player1-type (if (= "X" human-piece) :human :computer)]
                  (gm/set-players game player1-type)))))

(defmethod tcore/set-parameters :level-setup [game]
  (let [level (tcore/prompt-for-level game)]
    (gm/set-level game level)))

(defmethod tcore/set-parameters :board-setup [game]
  (let [board-size (tcore/set-board-size game)
        board (board/create-board board-size)]
    (assoc game :board-size board-size
                :board board
                :status :ready-to-play)))
(defmethod tcore/set-parameters :playing [game]
  game)

(defmethod tcore/game-setup :terminal [game]
  (loop [game game]
    (if (or (= (:status game) :ready-to-play) (= (:status game) :playing))
      game
      (recur (tcore/set-parameters game)))))

(defmethod tcore/setup :terminal [game]
  (if (= (:status game) :ready-to-play)
    game
    (tcore/set-parameters game)))

;; COMPLETE - TODO - GLM : this belongs in terminal
(defmethod tcore/run-game :terminal [interface]
  (tcore/welcome interface)
  (loop [game (tcore/game-setup (assoc tcore/game-model
                                  :console :terminal))]
    (if (gm/game-over? game)
      (do (tcore/report! game (game-results game))
          (if (tcore/play-again? game)
            (recur (tcore/game-setup (assoc tcore/game-model
                                       :console :terminal
                                       :status :user-setup)))
            (tcore/quit-game game)))
      (recur (gm/update-state (gm/game-with-next-move game))))))