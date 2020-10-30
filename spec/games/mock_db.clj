(ns games.mock-db
  (:require
    [speclj.core :refer :all]
    [ttt.core :as tcore]))

(def games (atom {}))

(defmethod tcore/save-game :mock [game]
  (let [id (or (:id game) (rand-int 999))
        game (assoc game :id id)]
    (swap! games (fn [game-map] (assoc game-map id game)))
    game))

(defmethod tcore/save-turn :mock [game]
  (tcore/save-game game))

(defmethod tcore/load-game :mock [game]
  (get @games (:id game)))