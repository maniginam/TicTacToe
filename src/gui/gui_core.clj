(ns gui.gui-core
  (:require [games.mysql :as sql]
            [quil.core :as q]
            [quil.middleware :as m]
            [ttt.core :as tcore]
            [ttt.game-master :as gm]))

;; COMPLETE - TODO - GLM : Use a model game, kept in tcore and modify as needed?
(defn setup-gui []
  (q/frame-rate 50)
  (assoc tcore/game-model :console :gui))
;; COMPLETE TODO - GLM : Maybe like this: persistence {:db :mysql :table "TTT" :db "ttt"}
;; TODO - GLM : Maybe one key for all ui stuff

(defmethod tcore/play-again :gui [state]
  (assoc tcore/game-model
    :status :user-setup
    :console :gui))

(defmulti user-message :status)
(defmulti mouse-clicked (fn [state _] (:status state)))
(defmulti key-typed (fn [state _] (:status state)))
(defmulti draw-user-prompt (fn [state & _] (:status state)))
(defmulti draw-piece (fn [state _ _] (:current-player state)))


