(ns quil.gui-game
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [ttt.core :refer :all]
            [ttt.board :refer :all]))


(defmulti user-message :status)
(defmulti mouse-clicked (fn [state _] (:status state)))
(defmulti draw-user-prompt (fn [state & _] (:status state)))
(defmulti draw-piece (fn [state _ _] (:current-player state)))




