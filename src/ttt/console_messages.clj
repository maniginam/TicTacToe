(ns ttt.console-messages
  (:require [ttt.core :refer :all]))

(defmethod welcome :terminal [console]
  (println "Welcome to Tic-Tac-Toe!"))

(def messages {:waiting "Click to Begin Game" :user-setup "" :player1 "X's Turn" :player2 "O's Turn"
               :player-setup "Choose" :x-won   "Game Over: X Won" :o-won "Game Over: O Won"})

(def game-type-message ["Computer-v-Computer"
                        "Human-v-Computer"
                        "Human-v-Human"])

(def board-size-prompt-message (str "What size grid do you want to play?"))

(defmethod user-message :user-setup [state]
  (str "What kind of game would you like to play?"))

(defmethod user-message :player-setup [state]
  (str "Do you want to be X or O?"))
