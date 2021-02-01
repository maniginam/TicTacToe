(ns ttt.web.core-interface
	(:require [ttt.master.multis :as tcore]
						))

(defn run-game [game]
	(tcore/run-game game))

(defn draw-board [game]
	(tcore/draw-board game))
