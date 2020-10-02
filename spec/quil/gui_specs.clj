(ns quil.gui-specs
  (:require [speclj.core :refer :all]
            [quil.gui :refer :all]
            [quil.gui-core :refer :all]
            [quil.dimensions :as dim]
            [quil.mouse-clicks :refer :all]
            [ttt.core :refer :all]
            [ttt.game-master :as master]))

(def state-setup {:status :waiting
                  :message-key :waiting
                  :console :gui
                  :users nil
                  :board-size 3
                  :board-set? false
                  :key-stroke nil
                  :current-player :player1
                  :player1 {:player-num 1 :piece "X" :type nil}
                  :player2 {:player-num 2 :piece "O" :type nil}
                  :current-plyr-num 1
                  :board [0 1 2 3 4 5 6 7 8]
                  :rows [] :cols [] :diags []
                  :ai-turn false
                  :boxes nil
                  :level :hard :depth 0
                  :turn nil :played-boxes []
                  :game-over false :play-again-pause 0 :winner nil})
(def console {:console :gui})

(describe "GUI State Tests:"

  (it "checks for ai-turn"
    (should (ai-turn? {:status :playing :current-player :player1 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :human}}))
    (should-not (ai-turn? {:status :playing :current-player :player1 :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human}}))
    (should (ai-turn? {:status :playing :current-player :player2 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :computer}}))
    (should-not (ai-turn? {:status :playing :current-player :player2 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :human}}))
    )

  (for [[key state result]
        [[:status state-setup :waiting]
         [:game-over (assoc state-setup :board ["X" "X" "O" 3 4 5 6 7 8]) false]
         [:game-over (assoc state-setup :board ["X" "X" "X" 3 4 5 6 7 8]) true]
         [:winner (assoc state-setup :current-player :player2 :board ["X" "X" "X" 3 4 5 6 7 8]) 1]
         [:box-count (assoc state-setup :board-set? true :board-size 2) 4]
         [:empty-board (assoc state-setup :board-set? true :board-size 2) [0 1 2 3]]
         [:board (assoc state-setup :status :playing :board ["X" 1 2 3 4 5 6 7 8] :current-player :player2 :player2 {:player-num 2 :piece "O" :type :computer}) ["X" 1 2 3 "O" 5 6 7 8]]
         [:played-boxes (assoc state-setup :board ["X" "O" 2]) [0 1]]
         [:current-player (assoc state-setup :status :playing :current-player :player1 :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :human}) :player2]
         [:play-again-pause (assoc state-setup :game-over true :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 81) 82]
         [:play-again-pause (assoc state-setup :game-over true :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 100) 100]
         [:play-again-pause (assoc state-setup :game-over false :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 81) 0]
         [:status (assoc state-setup :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 100) :play-again]
         [:status (assoc state-setup :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 99) :game-over]
         [:status (assoc state-setup :board ["X" "X" 2 3 4 5 6 7 8] :play-again-pause 100) (:status state-setup)]
         [:message-key state-setup :waiting]
         [:message-key (assoc state-setup :status :game-over :winner 1 :current-player :player2 :board ["X" "X" "X" 3 4 5 6 7 8] :play-again-pause 0) :x-won]
         ]]

    (it (str "Checks that " key " of Game is " result)
      (should= result (key (update-state state)))))
      ;(should= 1 (:winner (update-state {:status :game-over :board ["X" "X" "X" 3 4 5 6 7 8] :current-player :player2 :player1 {:player-num 1} :player2 {:player-num 2}})))))
  )