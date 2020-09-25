(ns quil.mouse-location-specs
  (:require [speclj.core :refer :all]
            [quil.mouse-location :refer :all]))


(describe "Mouse Location:"

  (it "returns if mouse is in start button"
    (should (in-button? 101 716))
    (should (in-button? 599 784))
    (should-not (in-button? 101 715))
    (should-not (in-button? 101 785))
    (should-not (in-button? 100 716))
    (should-not (in-button? 600 716))
    ))