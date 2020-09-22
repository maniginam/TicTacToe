(ns quil.mouse-location-specs
  (:require [speclj.core :refer :all]
            [quil.mouse-location :refer :all]))


(describe "Mouse Location:"

  (it "returns if mouse is in start button"
    (should (in-button? 121 716))
    (should (in-button? 579 784))
    (should-not (in-button? 121 715))
    (should-not (in-button? 121 785))
    (should-not (in-button? 120 716))
    (should-not (in-button? 580 716))
    ))