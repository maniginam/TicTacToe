;(ns gui.sketch
;  (:require [gui.gui-core :as gcore]
;            [gui.mouse-clicks :as mouse]
;            [gui.core :as gui]
;            [quil.core :as q]
;            [quil.middleware :as m]
;            [ttt.core :as tcore]
;            [ttt.game-master :as gm]))
;
;(q/defsketch gui.sketch
;             :title "Tic Tac Toe"
;             :size [700 800]
;             :setup gcore/setup-gui
;             :update gm/update-state
;             :draw tcore/draw-state
;             :mouse-clicked gcore/mouse-clicked
;             :key-typed gcore/key-typed
;             :features [:keep-on-top]
;             :middleware [m/fun-mode])
;
