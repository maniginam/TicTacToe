# TicTacToe in Clojure & ClojureScript

TicTacToe in Clojure is a normal and fair version
of the popular pencil & paper game played with a friend
or an ai player at a difficulty level 
of your choosing.

Dependencies
---
- Running clj app requires MySql to be active.
- GUI requires [Processing]("https://processing.org/download/") for graphics display.

Program
---
1. Run the Program:
    - Requires Leiningen
        - clj
            - lein run (defaults to terminal)
            - lein run terminal
            - lein run gui
        -cljs 
            - compile first with:
                - lein build-prod
                - or to auto compile production code: lein auto-prod
            - then open browser and enter:
                - "file:///{ path to project }/resources/public/index.html"
     
2. Run the specs:
    -  clj
        -   lein spec
    -  cljs
        -   compile first with: 
            -   lein build-tests
        -   run tests:
            - on command line:
                - bin/phantomjs resources/public/specs/speclj.js
            - or open browser and enter:
                - "file:///{ path to project }/resources/public/specs/specs.html"
                - open Inspection Console
                    - enter "runSpecs()"
                
        -   to auto compile tests:
            - lein auto-test

  

