(defproject maniginam/tic-tac-toe "1.0.0-SNAPSHOT"
	:description "plays tic-tac-toe game"
	:dependencies [[clj-time "0.15.2"]
								 [org.clojure/clojure "1.10.1"]
								 [quil "3.1.0"]
								 [org.clojure/java.jdbc "0.7.11"]
								 [seancorfield/next.jdbc "1.1.588"]
								 [mysql/mysql-connector-java "8.0.22"]

								 [hiccup "1.0.5"]
								 [org.clojure/clojurescript "1.10.773"]
								 [cljsjs/react "17.0.1-0"]
								 [cljsjs/react-dom "17.0.1-0"]
								 [sablono "0.8.6"]]
	:java-cmd "/Library/Java/JavaVirtualMachines/jdk1.8.0_251.jdk/Contents/Home/bin/java"
	:plugins [[speclj "3.3.2"]
						[lein-cljsbuild "1.1.8"]
						[lein-figwheel "0.5.20"]]
	:source-paths ["src/clj" "src/cljs"]
	:test-paths ["spec/clj" "spec/cljs"]

	:aliases {"specs"      ["cljsbuild" "spec" "unit-tests"]
						"test-all"       ["do" "clean" "spec" "cljsbuild" "once"]
						"cljs-auto-test" ["cljsbuild" "auto" "specs"]}

	:clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
	:dev {:dependencies [[speclj "3.3.2"]]}

	:cljsbuild {:test-commands {"specs" ["bin/phantomjs" "bin/speclj.js" "resources/public/cljs/specs/core.js"]}
							:builds
							{:specs
							 {:source-paths ["src/clj" "src/cljs" "spec/cljs"]
								:notify-command ["bin/phantomjs" "bin/speclj" "resources/public/cljs/out/core.js"]
								:compiler     {:output-to "resources/public/cljs/out/core.js"
															 ;:target :bundle
															 :main web.core}}
							:production
							 {:source-paths ["src/cljs"]
							 :compiler     {:main       web.core
															:asset-path "cljs/out"
															:output-to  "resources/public/cljs/core.js"
															:output-dir "resources/public/cljs/out"}
								:figwheel     {:open-urls ["http://localhost:3449/index.html"]}}}}


:main clj/master.start
:aot [clj/master.start]
:figwheel {
					 :css-dirs ["resources/public/css"]
					 }
)



;:profiles {:dev  {:dependencies [[speclj "3.3.2"]]}
;					 :clj  {:source-paths ["src/clj"]
;									:test-paths   ["spec/clj"]}
;					 :cljs {:dependencies [[org.clojure/clojurescript "0.0-2014"] ;necessary or current version of speclj
;																 [org.clojure/tools.reader "0.7.10"]       ;necessary or current version of speclj
;																 [lein-cljsbuild "1.1.8"]
;																 [lein-figwheel "0.5.20"]]
;									:plugins      [[speclj "3.3.2"]
;																 [lein-cljsbuild "1.1.8"]
;																 [lein-figwheel "0.5.20"]]
;									:test-paths   ["spec/clj"]
;									:cljsbuild    {:builds        {:dev {:source-paths ["src/cljs" "spec/cljs"]
;																											 :compiler     {:output-to    "compiled/tests/tests.js"
;																																			:notify-command ["phantomjs" "bin/speclj" "compiled/tests/tests.js"]}}
;																								 :prod {:source-paths  ["src/cljs"]
;																												:compiler      {:output-to "compiled/tests/tests.js"
;																																				:optimizations :simple}}}
;																 :figwheel     {:on-jsload "web.start/on-js-reload"
;																								:open-urls ["http://localhost:1234/index.html"]}
;																 :test-commands {"test" ["phantomjs" "bin/speclj" "compiled/tests/tests.js"]}}}}