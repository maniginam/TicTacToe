(ns quil.gui-messages
  (:require [quil.gui-game :refer :all]))

(def messages {:waiting "Click to Begin Game" :user-setup "" :player1 "X's Turn" :player2 "O's Turn"
               :player-setup "Choose" :board-setup "board size?"
               :x-won "Game Over: X Won" :o-won "Game Over: O Won" :catsgame "Game Over: Cat's Game"})

(def winner-types [:catsgame :x-won :o-won])

(defmethod user-message :user-setup [state]
  (str "What kind of game would you like to play?"))

(defmethod user-message :player-setup [state]
  (str "Do you want to be X or O?"))

(defmethod user-message :board-setup [state]
  (str "What size grid would you like the board to have?
       [Enter on Keyboard how many boxes per row]"))