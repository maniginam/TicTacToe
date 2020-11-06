(ns ttt.ai
  (:require [ttt.core :refer :all]
            [ttt.board :refer :all]
            [ttt.optimal-play :refer :all]
            [ttt.human :refer :all]))

(def levels->depths {:easy 2 :medium 1 :hard 0})

(defmethod print-type :computer [player box]
  (println (str "Computer plays box " box)))

(defmethod print-turn :default [game player box] nil) ;; TODO - GLM : get rid of default

(defmethod print-turn :terminal [game player box]
  (print-type player box))

(defmethod select-box :computer [player game]
  (let [board (:board game)
        depth (get levels->depths (:level game) 0)
        box (play-optimal-box board (:player-num player) depth)]
    box))


