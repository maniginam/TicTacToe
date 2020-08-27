(ns test-human-box-input
  (:require
    [speclj.core :refer :all]
    [ttt.human-box-input :refer :all]))

(describe "Checks Human Box Selection:"
  (def empty-board {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8})

  (it "returns string for bad box choice"
      (should= "Box 2 is already taken...  Try again..." (bad-box-message 2)))
  ;(should= "Box rex is not a box.  Try again..." (bad-box-message empty-board "rex")))

  (it "returns string message for string entry"
      (should= "You didn't enter anything..." (string-message "")))

  (it "plays human box selected by user"
    (let [test-box (get-human-selection empty-board "0")]
      (should (and (int? test-box) (> test-box -1) (< test-box 9)))))

  )