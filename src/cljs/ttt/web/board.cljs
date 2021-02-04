(ns ttt.web.board
	(:require [ttt.web.web :as web]))

(def svg-size (atom 550))

(defn draw-O [box]
	(let [box-width (js/parseInt (:width box))
				box-height (js/parseInt (:height box))
				box-size (min box-width box-height)
				x (js/parseInt (:x box))
				y (js/parseInt (:y box))
				r (/ (* 0.7 box-size) 2)
				cx (+ x (/ box-size 2))
				cy (+ y (/ box-size 2))
		o [[:circle {:cx cx :cy cy :r r :stroke "rgb(248, 152, 121)" :fill "none" :stroke-width "25"}]
			 [:circle {:cx cx :cy cy :r (+ r (/ 25 2)) :stroke "rgb(80 80 80)" :fill "none" :stroke-width "4"}]
			 [:circle {:cx cx :cy cy :r (- r (/ 25 2)) :stroke "rgb(80 80 80)" :fill "none" :stroke-width "4"}]]]
		o))

(defn draw-X [box]
	(let [box-width (js/parseInt (:width box))
				box-height (js/parseInt (:height box))
				box-size (min box-width box-height)
				x (js/parseInt (:x box))
				y (js/parseInt (:y box))
				lt (+ x (* 0.2 box-size))
				rt (+ x (* 0.8 box-size))
				top (+ y (* 0.2 box-size))
				bottom (+ y (* 0.8 box-size))
				piece [[:line {:id (str (:id box) "d") :x1 lt :y1 top :x2 rt :y2 bottom :stroke "rgb(248, 152, 121)" :stroke-width "30" :stroke-linecap "round"}]
							 [:line {:id (str (:id box) "u") :x1 lt :y1 bottom :x2 rt :y2 top :stroke "rgb(248, 152, 121)" :stroke-width "30" :stroke-linecap "round"}]]]
		piece))

(defn draw-pieces [game boxes]
	(let [board (:board game)
				pieces (remove nil?
											 (map #(cond
															 (= "X" (nth board (js/parseInt (:id (second %))))) (draw-X (second %))
															 (= "O" (nth board (js/parseInt (:id (second %))))) (draw-O (second %))) boxes))]
		(list pieces)))

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

(defn draw-boxes [game-atom board-specs]
	(let [box-size (:box-size board-specs)
				boxes-per-row (:boxes-per-row board-specs)
				boxes (for [box (range 0 (* boxes-per-row boxes-per-row))
										:let [x (str (* box-size (rem box boxes-per-row)))
													y (str (* box-size (int (/ box boxes-per-row))))]]
								[:rect {:id       (str box) :x x :y y
												:height   (str box-size) :width (str box-size)
												:fill     "rgba(100, 50, 255,0.75)" :opacity "60%"
												:on-click #(let [game (swap! game-atom assoc :box-played box)
																				 updated-game (web/update-game game-atom)]
																		 (swap! game-atom merge updated-game))}])]
		boxes))

(defn draw-board [game-atom]
	(let [board-size (:board-size @game-atom)
				;; TODO - GLM : FIX THE SIZE TO COME FROM CSS
				box-size (/ @svg-size board-size)
				board-specs {:box-size box-size :boxes-per-row board-size}
				boxes (draw-boxes game-atom board-specs)
				lines (draw-lines board-specs)
				pieces (draw-pieces @game-atom boxes)]
		[:div.board
		 [:svg.board {:id "board"}
			boxes
			lines
			pieces]]))