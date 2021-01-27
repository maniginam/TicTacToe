(ns ttt.cljs.web.component-spec
	(:require-macros [speclj.core :refer [run-specs before after describe context it should should-contain should=]])
	(:require [speclj.core]
						[ttt.cljc.spec-helper :as helper]
						[ttt.cljs.web.components :as comp]
						[clojure.walk :as walk]
						[clojure.string :as str]))

(def web-game (atom (assoc helper/test-game :console :web)))

;(describe "Components -- "
;	(context "status: "
;		(it "waiting"
;			(let [comp (.entries js/Object (comp/component web-game))
;						mapped-comp (drop 9 (mapcat #(.entries js/Object %) comp))
;						comp-map (mapcat #(walk/keywordize-keys (last (.entries js/Object %))) mapped-comp)]
;(println "(.keys js/Object comp): " (.keys js/Object comp))
;(println "(nth comp 9): " (walk/keywordize-keys (.entries js/Object (nth (nth comp 4) 1))))
;				(should (.contains comp-map "Welcome to Tic Tac Toe!")))))
;	)
;
;(run-specs)


;($$typeof 60103
;					type div
;					key nil
;					ref nil
;					props #js
;							{:className h-center,
;							 :children  #js {$$typeof 60103,
;															 :type div,
;															 :key nil,
;															 :ref nil,
;															 :props #js
;																						{:className container,
;																						 :children  #js [#js
;																								{$$typeof 60103,
;																								 :type    h1,
;																								 :key     nil, :ref nil,
;																								 :props   #js {:children Welcome to Tic Tac Toe!},
;																								 :_owner  nil,
;																								 :_store  #js {}} #js
;																								{$$typeof 60103, :type button,
;																								 :key nil,
;																								 :ref nil,
;																								 :props #js {:id start,
;																														 :type submit,
;																														 :onClick #object[Function],
;																														 :className h-center,
;																														 :children Let's Play!},
;																								 :_owner nil, :_store #js {}}]}, :_owner nil,
;															 :_store #js {}}} _owner nil _store #js {})
