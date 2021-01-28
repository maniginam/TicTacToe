(ns ttt.gui.gui
	(:require [ttt.gui.draw :as draw]
						[ttt.gui.boxes :as box]
						[ttt.gui.button :as button]
						[ttt.gui.multimethods :as gcore]
						[ttt.gui.human-prompts :as prompt]
						[ttt.gui.mouse-clicks :as mouse]
						[quil.core :as q]
						[quil.middleware :as m]
						[ttt.board.board :as board]
						[ttt.master.core :as tcore]
						[ttt.master.game-master :as gm]
						[clojure.java.io :as io]))
;; COMPLETE - TODO - GLM : No more :refer :all.  Kill them all!


(defn get-player-num [state] (:player-num ((:current-player state) state)))

(defn maybe-draw-prompt [state]
	(if (or (= (:status state) :user-setup) (= (:status state) :player-setup)
					(= (:status state) :board-setup) (= (:status state) :level-setup)
					(= (:status state) :restart?))
		(gcore/draw-user-prompt state)))

;; COMPLETE - TODO - GLM : Smelly.  If there a better way?

(defn maybe-draw-filled-box [state]
	(let [boxes (board/played-boxes (:board state))]
		(when (not (empty? boxes))
			(doseq [box boxes]
				(box/draw-box box state false)))))

(defn maybe-draw-piece [state]
	(when (= (:status state) :playing)
		(let [x (q/mouse-x)
					y (q/mouse-y)]
			(gcore/draw-piece state (box/size-boxes state) [x y]))))

(defmethod tcore/draw-state :gui [state]
		(draw/draw-console)
		(draw/draw-gui-board (:board-size state))
		(button/draw-game-button state)
		(maybe-draw-prompt state)
		(maybe-draw-filled-box state)
		(maybe-draw-piece state)
		(if (nil? (:frame-path state))
			(q/save-frame (.getCanonicalPath (io/file "./frames/frame.jpeg")))
			(q/save-frame (.getCanonicalPath (io/file (:frame-path state)))))
		)



(defmethod tcore/run-game :gui [interface]
	(q/sketch
		:host "localhost"
		:title "Tic Tac Toe"
		:size [700 800]
		:setup gcore/setup-gui
		:update gm/update-state
		:draw tcore/draw-state
		:mouse-clicked gcore/mouse-clicked
		:key-typed gcore/key-typed
		:features [:keep-on-top]
		:middleware [m/fun-mode]))