(ns gui.gui-core
  (:require [games.h2 :as h2]
            [games.mysql :as sql]
            [games.saved-games :as saved]
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

(defmethod tcore/restart :gui [state]
  (let [sql-game (tcore/load-game state)
        last-sql-game (assoc sql-game :old-console (:console sql-game) :console :gui)
        filed-game (saved/pull-game)
        last-filed-game (assoc filed-game :old-console (:console filed-game) :console (:console state))
        h2-game (h2/get-last-db-game (:table (:persistence state)))
        last-h2-game (assoc h2-game :old-console (:console h2-game) :console (:console state))]
    last-sql-game))

(defmulti user-message :status)
(defmulti mouse-clicked (fn [state _] (:status state)))
(defmulti key-typed (fn [state _] (:status state)))
(defmulti draw-user-prompt (fn [state & _] (:status state)))
(defmulti draw-piece (fn [state _ _] (:current-player state)))


