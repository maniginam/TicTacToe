(ns test-human-box-input
  (:require
    [speclj.core :refer :all]
    [ttt.human-box-input :refer :all]))

(describe "Checks Human Box Selection:"

  (it "returns string for bad box choice"
      (should= "Box 2 is already taken...  Try again..." (bad-box-message 2)))
  ;(should= "Box rex is not a box.  Try again..." (bad-box-message empty-board "rex")))

  (it "returns string message for string entry"
      (should= "You didn't enter anything..." (string-message "")))
)