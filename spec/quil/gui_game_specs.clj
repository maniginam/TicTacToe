;(ns quil.gui-game-specs
;  (:require [speclj.core :refer :all]
;            [ttt.core :refer :all]
;            [quil.gui-core :refer :all]
;            [quil.core :as q]
;            [quil.boxes :as boxes]
;            [quil.middleware :as m]
;            [quil.gui :refer :all]
;            [ttt.board :as board]))
;
;
;(describe "GUI:"
;
;  (it "tests box in lines"
;    (should (boxes/box-in-line? 0 [0 1 2]))
;    (should-not (boxes/box-in-line? 0 [3 4 5]))
;    (should= [[0 1] [0 2] [0 3]] (boxes/get-box-lines 0 [0 1 2 3]))
;    (should (board/is-vector-win? ["X" "X"]))
;    (should= [[0 1] [0 2] [0 3]] (is-box-in-win? 0 {:board ["X" 1 2 "X"]}))))