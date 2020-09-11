(ns quil-gui.gui-game
  (:require [ttt.core :refer :all]
            [quil-gui.gui :refer :all]))

(defmethod validate-player-count :gui [console]
  (update-state (assoc state :userPrompt true)))