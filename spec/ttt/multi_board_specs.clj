(ns ttt.multi-board-specs
  (:require [speclj.core :refer :all]
            [ttt.core :refer :all]
            [ttt.board :refer :all]))

(def default {:console :default})
(def terminal {:console :terminal})


(describe "Creates Board of Any Size:"

  (it "Sets Board in Default Game"
    (should-be-nil (board-size-prompt default))
    (should= 3 (set-board-size default))
    )

  (it "Sets Board in Terminal Game"
    (should= (str "What size grid do you want to play?\n")
             (with-out-str (with-in-str "3" (board-size-prompt terminal))))
    ;(should= 5 (with-in-str "5" (set-board-size terminal)))
    (should= "What size grid do you want to play?\nleo is not a valid option\nWhat size grid do you want to play?\n is not a valid option\nWhat size grid do you want to play?\n is not a valid option\nNevermind, let's play a standard 3x3 board\n"
             (with-out-str (with-in-str "leo" (set-board-size terminal)))))


  )
