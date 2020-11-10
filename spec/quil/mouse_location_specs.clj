(ns quil.mouse-location-specs
  (:require [speclj.core :refer :all]
            [quil.mouse-location :as mouse]))


(describe "Mouse Location:"

  (it "returns if mouse is in start button"
    (should (mouse/in-button? 101 716))
    (should (mouse/in-button? 599 784))
    (should-not (mouse/in-button? 101 715))
    (should-not (mouse/in-button? 101 785))
    (should-not (mouse/in-button? 100 716))
    (should-not (mouse/in-button? 600 716))
    ))