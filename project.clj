(defproject maniginam/tic-tac-toe "1.0.0-SNAPSHOT"
	:description "plays tic-tac-toe game"
	:dependencies [[clj-time "0.15.2"]
								 [org.clojure/clojure "1.10.1"]
								 [quil "3.1.0"]
								 [org.clojure/java.jdbc "0.7.11"]
								 [seancorfield/next.jdbc "1.1.588"]
								 [mysql/mysql-connector-java "8.0.22"]

								 [reagent "1.0.0"]
								 [hiccup "1.0.5"]
								 [org.clojure/clojurescript "1.10.773"]
								 [cljsjs/react "17.0.1-0"]
								 [cljsjs/react-dom "17.0.1-0"]
								 [sablono "0.8.6"]]
	:java-cmd "/Library/Java/JavaVirtualMachines/jdk1.8.0_251.jdk/Contents/Home/bin/java"
	:plugins [[speclj "3.3.2"]
						[lein-cljsbuild "1.1.8"]
						[lein-figwheel "0.5.20"]]
	:source-paths ["src/clj" "src/cljc"]
	:test-paths ["spec/clj"]

	:aliases {"specs"      ["cljsbuild" "dev" "unit-tests"]
						"test-all"       ["do" "clean" "dev" "cljsbuild" "once"]
						"cljs-auto-test" ["cljsbuild" "auto" "dev"]
						"auto-prod" ["cljsbuild" "auto" "prod"]
						"auto-test" ["spec" "resources/public/specs/speclj.js" "-a"]}

	:clean-targets ^{:protect false} [:resources-path "out" "resources/public/cljs"]
	:profiles {:dev {:dependencies [[speclj "3.3.2"]]}}

	:cljsbuild {
							;:test-commands {"specs" ["bin/phantomjs" "bin/speclj" "resources/public/cljs/specs/main.js"]}
							:builds
							{:dev
							 {:source-paths ["src/clj" "src/cljs" "src/cljc" "spec/cljs" "spec/cljc"]
								;:notify-command ["bin/speclj.js" "resources/public/cljs/specs/main_dev.js"]
								:compiler     {:asset-path "../cljs"
															 :output-to "resources/public/cljs/main_dev.js"
															 :output-dir "resources/public/cljs"
															 ;:target :bundle
															 :main ttt.web.core-spec}
								:figwheel     {:open-urls ["file:///Users/maniginam/TicTacToe/resources/public/index.html"]}}

							:prod
							 {:source-paths ["src/clj" "src/cljs" "src/cljc"]
							 :compiler     {:main       ttt.web.core
															:asset-path "cljs"
															:output-to  "resources/public/cljs/main.js"
															:output-dir "resources/public/cljs/prod"}
								:figwheel     {:open-urls ["localhost://3449/index.html"]}
								}
}}

:main ttt.clj.master.start
:aot [ttt.clj.master.start]
:figwheel {
					 :css-dirs ["resources/public/css"]
					 }
)



