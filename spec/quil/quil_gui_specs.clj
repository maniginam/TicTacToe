(ns quil.quil-gui-specs
  (:require [speclj.core :refer :all]
            ;[quil.gui :refer :all]
            [ttt.core :refer :all]))

(def state-setup {:game-status :waiting :message "Click to Begin Game" :userPrompt false})
(def console {:console :gui})

;(describe "Controls GUI"
;
;  (it "returns the state of the gui"
;    (should= 0 (validate-player-count console)))
;
;  )
