(ns test-game-rules
  (:require
    [speclj.core :refer :all]
    [ttt.GameRules :refer :all]))

(describe "Sets rules for game:"

  (it "checks rows for win"
      (should-not (is-row-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8}))
      (should (is-row-win? {0 "X" 1 "X" 2 "X" 3 3 4 4 5 5 6 6 7 7 8 8}))
      (should-not (is-row-win? {0 "X" 1 "O" 2 "X" 3 3 4 4 5 5 6 6 7 7 8 8}))
      (should (is-row-win? {0 0 1 1 2 2 3 "X" 4 "X" 5 "X" 6 6 7 7 8 8}))
      (should (is-row-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "X" 7 "X" 8 "X"}))
      (should (is-row-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "O" 7 "O" 8 "O"}))
      (should-not (is-row-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "O" 7 "X" 8 "O"}))
      (should-not (is-row-win? {0 "X" 1 "O" 2 "X" 3 3 7 7})))

  (it "checks cols for win"
      (should (is-col-win? {0 "X" 1 "O" 2 "O" 3 "X" 4 4 5 5 6 "X" 7 7 8 8}))
      (should (is-col-win? {0 0 1 "X" 2 2 3 3 4 "X" 5 5 6 6 7 "X" 8 8}))
      (should (is-col-win? {0 0 1 1 2 "O" 3 3 4 4 5 "O" 6 6 7 7 8 "O"}))
      (should-not (is-col-win? {0 0 1 1 2 "O" 3 3 4 4 5 "X" 6 6 7 7 8 "O"}))
      (should-not (is-col-win? {0 "X" 1 "O" 2 "X" 3 3})))

  (it "checks diagonals for win"
      (should (is-diag-win? {0 "X" 1 1 2 2 3 3 4 "X" 5 5 6 6 7 7 8 "X"}))
      (should (is-diag-win? {0 0 1 1 2 "O" 3 3 4 "O" 5 5 6 "O" 7 7 8 "X"}))
      (should-not (is-diag-win? {0 0 1 1 2 "O" 3 3 4 "X" 5 5 6 "O" 7 7 8 "X"}))
      (should-not (is-diag-win? {0 "X" 1 "O" 2 "X" 3 3})))

  (it "checks for win"
      (should (is-win? {0 "X" 1 "X" 2 "X" 3 3 4 4 5 5 6 6 7 7 8 8}))
      (should (is-win? {0 0 1 1 2 2 3 "X" 4 "X" 5 "X" 6 6 7 7 8 8}))
      (should (is-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "X" 7 "X" 8 "X"}))
      (should (is-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "O" 7 "O" 8 "O"}))
      (should-not (is-win? {0 0 1 1 2 2 3 3 4 4 5 5 6 "O" 7 "X" 8 "O"}))
      (should (is-win? {0 "X" 1 "O" 2 "O" 3 "X" 4 4 5 5 6 "X" 7 7 8 8}))
      (should (is-win? {0 0 1 "X" 2 2 3 3 4 "X" 5 5 6 6 7 "X" 8 8}))
      (should (is-win? {0 0 1 1 2 "O" 3 3 4 4 5 "O" 6 6 7 7 8 "O"}))
      (should-not (is-win? {0 0 1 1 2 "O" 3 3 4 4 5 "X" 6 6 7 7 8 "O"}))
      (should (is-win? {0 "X" 1 1 2 2 3 3 4 "X" 5 5 6 6 7 7 8 "X"}))
      (should (is-win? {0 0 1 1 2 "O" 3 3 4 "O" 5 5 6 "O" 7 7 8 "X"}))
      (should-not (is-win? {0 0 1 1 2 "O" 3 3 4 "X" 5 5 6 "O" 7 7 8 "X"})))

)