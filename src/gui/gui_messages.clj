(ns gui.gui-messages
  (:require [gui.gui-core :as gcore]))



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