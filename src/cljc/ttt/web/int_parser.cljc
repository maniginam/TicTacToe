(ns ttt.web.int-parser)

(defn parseInt [s]
	#?(:clj (Integer/parseInt s)
		 :cljs (js/parseInt s)))
