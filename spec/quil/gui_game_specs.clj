;(ns gui-game-specs
;  (:require [speclj.core :refer :all]
;            [ttt.core :refer :all]
;            [quil-gui.gui-game :refer :all]
;            [quil.core :as q]
;            [quil.middleware :as m]
;            [quil-gui.gui :refer :all]))
;
;(def console {:console :gui})
;
;(describe "Plays TTT with GUI: "
;
;  (it "GUI: gets state"
;    (should= 0 (validate-player-count console))))