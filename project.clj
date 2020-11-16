(defproject tic-tac-toe "1.0.0-SNAPSHOT"
  :description "plays tic-tac-toe game"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/math.combinatorics "0.1.6"]
                 [quil "3.1.0"]
                 [org.clojure/java.jdbc "0.7.11"]
                 [seancorfield/next.jdbc "1.1.588"]
                 [com.h2database/h2 "1.4.200"]
                 [mysql/mysql-connector-java "8.0.22"]]
  :java-cmd "/Library/Java/JavaVirtualMachines/jdk1.8.0_251.jdk/Contents/Home/bin/java"
  :profiles {:dev {:dependencies [[speclj "3.3.2"]]}}
  :plugins [[speclj "3.3.2"]]
  :test-paths ["spec"]
  :main ^:skip-aot main)
