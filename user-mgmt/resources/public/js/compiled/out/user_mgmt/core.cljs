(ns user-mgmt.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defonce app-state (atom {:users []}))


(defn get-input-interface [state]
  (sab/html
   [:div
    [:input
     {:type "text"
      :placeholder "Enter user name"
      :size "50"
      :on-change #(swap! state assoc :new-user (.-value (.-target %)))}] ;why this is not on the state
    [:input
     {:type "button"
      :value "Add user"
      :on-click #(js/alert (get @state :new-user))
      :style {:margin-left "5px"}}]
    ]))


;:on-change (fn [event] (swap! state assoc :test (.-value (.-target event)))}]


(defn add-user [state]
  ;get the state and add the user to the list

)

;;devcards
(defcard get-input-interface-card
  (fn [state]
    (get-input-interface state))
  {}
  {:inspect-data true})


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (get-input-interface app-state) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
