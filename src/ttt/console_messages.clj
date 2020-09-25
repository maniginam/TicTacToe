(ns ttt.console-messages
  (:require [ttt.core :refer :all]))

(defmethod welcome :terminal [console]
  (println "Welcome to Tic-Tac-Toe!"))

(def game-type-message ["Computer-v-Computer"
                        "Human-v-Computer"
                        "Human-v-Human"])

(def board-size-prompt-message (str "What size grid do you want to play on?"))

(defn box-taken [box] (str "box " box " is already taken"))

(def ask-to-play-again (str "Do you want to play again?  Y or N"))