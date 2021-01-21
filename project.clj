(defproject maniginam/tic-tac-toe "1.0.0-SNAPSHOT"
  :description "plays tic-tac-toe game"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [quil "3.1.0"]
                 [org.clojure/java.jdbc "0.7.11"]
                 [seancorfield/next.jdbc "1.1.588"]
                 [mysql/mysql-connector-java "8.0.22"]

                 ;[hiccup "1.0.5"]
                 [org.clojure/clojurescript "1.10.773"]
                 [cljsjs/react "17.0.1-0"]
                 [cljsjs/react-dom "17.0.1-0"]
                 [sablono "0.8.6"]]
  :java-cmd "/Library/Java/JavaVirtualMachines/jdk1.8.0_251.jdk/Contents/Home/bin/java"
  :profiles {:dev {:dependencies [[speclj "3.3.2"]]}}
  :plugins [[speclj "3.3.2"]

            [lein-figwheel "0.5.20"]]
  :test-paths ["spec"]
  :main master.start
  :aot [master.start]

  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
  :cljsbuild {
              :builds [{:id           "dev"
                        :source-paths ["src"]
                        :figwheel     {:open-urls ["http://localhost:3449/index.html"]}
                        ;{:on-jsload "hello-world.core/on-js-reload"
                        ;           :open-urls ["http://localhost:3141/index.html"]}
                        :compiler     {:main       "script.core"
                                       :asset-path "cljs/out"
                                       :output-to  "resources/public/cljs/main.js"
                                       :output-dir "resources/public/cljs/out"}
                        }]
              }
  :figwheel {
             :css-dirs ["resources/public/css"]
             }
  )
