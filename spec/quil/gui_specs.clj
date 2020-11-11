(ns quil.gui-specs
  (:require [quil.gui-core :as gcore]
            [quil.mouse-location :as mouse]
            [speclj.core :refer :all]
            [ttt.core :as tcore]
            [spec-helper :as helper]))

(def default-state (assoc helper/test-game :console :gui))
