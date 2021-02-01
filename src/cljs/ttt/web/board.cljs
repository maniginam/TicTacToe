(ns ttt.web.board
	(:require [ttt.master.multis :as tcore]))

(def svg-size (atom 550))

(defn draw-horizontal-lines [board-specs]
	(let [box-size (:box-size board-specs)
				boxes (:boxes-per-row board-specs)
				left (str (* 0.05 @svg-size))
				right (str (* 0.95 @svg-size))
				constants (for [line (range 1 boxes)] (str (* line box-size)))]
		(map #(vec [:line {:class "line" :x1 "0%" :y1 % :x2 "100%" :y2 % :stroke "rgb(94, 94, 99)" :stroke-width "4"}]) constants)))

(defn draw-vertical-lines [board-specs]
	(let [box-size (:box-size board-specs)
				boxes (:boxes-per-row board-specs)
				top (str (* 0.05 @svg-size))
				bottom (str (* 0.95 @svg-size))
				constants (for [line (range 1 boxes)] (str (* line box-size)))]
		(map #(vec [:line {:class "line" :x1 % :y1 "0%" :x2 % :y2 "100%" :stroke "rgb(94, 94, 99)" :stroke-width "4"}]) constants)))

(defn draw-lines [board-specs]
	(let [h-lines (draw-horizontal-lines board-specs)
				v-lines (draw-vertical-lines board-specs)]
		(list h-lines v-lines)))

(defn draw-boxes [game]
	(let [box-size (get (:board-specs game) :box-size)
				boxes-per-row (get (:board-specs game) :boxes-per-row)
				boxes (for [box (range 0 (count (:board game)))
										row (range 0 (:board-size game))
										:let [x (str (* box-size (rem box boxes-per-row)))
													y (str (*  box-size (int (/ box boxes-per-row))))]]
								[:rect {:id (str box) :x x :y y :height (str box-size) :width (str box-size) :fill "rgba(100, 50, 255,0.45)" :opacity "30%"}])]
		boxes))

(defn draw-board [game]
	(let [board-size (:board-size game)
				;; TODO - GLM : FIX THE SIZE TO COME FROM CSS
				box-size (/ @svg-size board-size)
				board-specs {:box-size box-size :boxes-per-row board-size}]
		[:div.board
		 [:svg.board {:id "board"}
			(draw-boxes (assoc game :board-specs board-specs))
			(draw-lines board-specs)
			;[:rect {:id 0 :x "5.0%" :y "5.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
			;[:rect {:id 1 :x "35.0%" :y "5.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
			;[:rect {:id 2 :x "65.0%" :y "5.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
			;[:rect {:id 3 :x "5.0%" :y "35.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
			;[:rect {:id 4 :x "35.0%" :y "35.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
			;[:rect {:id 5 :x "65.0%" :y "35.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
			;[:rect {:id 6 :x "5.0%" :y "65.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
			;[:rect {:id 7 :x "35.0%" :y "65.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
			;[:rect {:id 8 :x "65.0%" :y "65.0%" :width "30.0%" :height "30.0%" :fill "blue" :opacity "10%"}]
			]]))
