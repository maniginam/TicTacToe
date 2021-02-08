(ns ttt.web.board-spec
	(:require [speclj.core #?(:clj  :refer
														:cljs :refer-macros) [run-specs describe context it should=]]
						[ttt.web.board-comps :as board]
						[ttt.master.spec-helper :as helper]))

(def test-atom (atom (assoc helper/test-game :console :web)))

(describe "The Board - "

	(context "the lines: "

		(it "vertical"
			(reset! board/svg-size 300)
			(let [lines (board/draw-vertical-lines {:boxes-per-row 3 :box-size 100 :svg-size 300})
						first (apply #(do (keyword (first %)) (second %)) (partition 2 (first lines)))
						second (apply #(do (keyword (first %)) (second %)) (partition 2 (second lines)))]
				(should= "vline@100" (:key first))
				(should= "100" (:x1 first))
				(should= "0%" (:y1 first))
				(should= "100%" (:y2 first))
				(should= "vline@200" (:key second))
				(should= "200" (:x1 second))
				(should= "0%" (:y1 second))
				(should= "100%" (:y2 second))))

		(it "horizontal"
			(reset! board/svg-size 300)
			(let [lines (board/draw-horizontal-lines {:boxes-per-row 3 :box-size 100 :svg-size 300})
						first (apply #(do (keyword (first %)) (second %)) (partition 2 (first lines)))
						second (apply #(do (keyword (first %)) (second %)) (partition 2 (second lines)))]
				(should= "hline@100" (:key first))
				(should= "0%" (:x1 first))
				(should= "100%" (:x2 first))
				(should= "100" (:y1 first))
				(should= "hline@200" (:key second))
				(should= "0%" (:x1 second))
				(should= "100%" (:x2 second))
				(should= "200" (:y1 second))))
		)

	(context "boxes"
		(it "empty box0"
			(reset! board/svg-size 300)
			(let [boxes (board/draw-boxes test-atom {:boxes-per-row 3 :box-size 100})
						box0 (first boxes)]
				(should= "0" (:id (second box0)))
				(should= "100" (:height (second box0)))
				(should= "100" (:width (second box0))))))
	)




