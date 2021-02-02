(ns ttt.web.board-spec
	(:require-macros [speclj.core :refer [run-specs before after describe context it should=]])
	(:require [speclj.core]
						[ttt.web.board :as board]
						[ttt.spec-helper :as helper]))

(def test-atom (atom (assoc helper/test-game :console :web)))

(describe "The Board - "

	(context "the lines: "

		(it "vertical"
			(reset! board/svg-size 300)
			(let [lines (board/draw-vertical-lines {:boxes-per-row 3 :box-size 100 :svg-size 300})]
				(should= [:line {:class "line" :x1 "100" :y1 "0%" :x2 "100" :y2 "100%" :stroke "rgb(94, 94, 99)" :stroke-width "4"}] (first lines))
				(should= [:line {:class "line" :x1 "200" :y1 "0%" :x2 "200" :y2 "100%" :stroke "rgb(94, 94, 99)" :stroke-width "4"}] (last lines))))

		(it "horizontal"
			(reset! board/svg-size 300)
			(let [lines (board/draw-horizontal-lines {:boxes-per-row 3 :box-size 100 :svg-size 300})]
				(should= [:line {:class "line" :x1 "0%" :y1 "100" :x2 "100%" :y2 "100" :stroke "rgb(94, 94, 99)" :stroke-width "4"}] (first lines))
				(should= [:line {:class "line" :x1 "0%" :y1 "200" :x2 "100%" :y2 "200" :stroke "rgb(94, 94, 99)" :stroke-width "4"}] (last lines)))))

	(context "boxes"
		(it "empty"
			(reset! board/svg-size 300)
			(let [boxes (board/draw-boxes test-atom {:board [0 1 2 3 4 5 6 7 8] :board-specs {:boxes-per-row 3 :box-size 100 :svg-size 300}})]
				(doseq [box boxes
							:let [id (:id (second box))
										x (str (* (/ 300 3) (rem id 3)))
										y (str (* (/ 300 3) (int (/ id 3))))]]
					(should= [:rect {:id id :x x :y y :height "100" :width "100" :fill "rgba(100, 50, 255,0.45)" :opacity "30%" :on-click "click"}] [(first box) (assoc (second box) :on-click "click")]))))
		)

	)

(run-specs)



