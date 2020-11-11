(ns quil.gui-messages
  (:require [quil.gui-core :as gcore]))

(def messages {:waiting "Click Here to Begin Game" :user-setup "Who's Playing?" :player1 "X's Turn" :player2 "O's Turn"
               :player-setup "Choose" :restart? "Finish what you started?" :board-setup "board size?" :level-setup "Choose Your Level"
               :x-won "Game Over: X Won" :o-won "Game Over: O Won" :catsgame "Game Over: Cat's Game"
               :play-again "Click Here to Play Again" :nil ""})

(def winner-types [:catsgame :x-won :o-won])

(defmethod gcore/user-message :restart? [state]
  (str "Do you want to begin where you left off?"))

(defmethod gcore/user-message :user-setup [state]
  (str "What kind of game would you like to play?"))

(defmethod gcore/user-message :player-setup [state]
  (str "Do you want to be X or O?"))

(defmethod gcore/user-message :board-setup [state]
  (str "What size grid would you like the board to have?
       [Enter on Keyboard how many boxes per row]"))

(defmethod gcore/user-message :level-setup [state]
  (str "Think you can beat me?  Choose your level!"))

(defmethod gcore/user-message :game-over? [state]
  (str "Do you want to play again?"))