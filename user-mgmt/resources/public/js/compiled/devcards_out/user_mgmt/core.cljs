(ns user-mgmt.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defonce app-state (atom {:users []}))

(defn add-user [state]
  (println (str "users " (get @state :new-user)))
 (swap! state update :users conj {:name (get @state :new-user), :point 0}))

(defn sort-user [state]
  (swap! state update :users (fn [users] (vec (sort-by (juxt :point) #(> %1 %2) users)))))

 (defn increment-point [state index]
   (swap! state update-in [:users index :point] (fn [x] (inc x)))
   (sort-user state))

 (defn decrement-point [state index]
   (swap! state update-in [:users index :point] (fn [x] (dec x)))
   (sort-user state))

 (defn delete-user [state index]
   (swap!  state update :users (fn [users] (vec (keep-indexed (fn [idx arg] (when-not (= idx index) arg)) users)))))

(defn list-user [state index user]
  (sab/html [:div
              {:key index
               :class "list-user-main"}
              [:div {:class "list-user-main"} (get user :name)]
              [:div {:class "list-user-main"} (get user :point)]
              [:div {:class "list-user-main"}
              [:div {:class "list-user-main"}
               [:input
                {:type "button"
                 :value "+"
                 :on-click #(increment-point state index)}]]
              [:div {:class "list-user-main"}
               [:input
                {:type "button"
                 :value "-"
                 :on-click #(decrement-point state index)}]]
               [:input
                {:type "button"
                 :value "Delete "

                 :on-click #(delete-user state index)}]]]))




(defn list-users [state]
  (map-indexed #(list-user state %1 %2) (get @state :users))
  ;(swap! state update :users (fn [users] (vec (sort-by first users))))
  )


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
      :on-click #(add-user state)
      :style {:margin-left "5px"}}]
    ]))


(defn get-interface [state]
  (sab/html [:div
              (list-users state)
             (get-input-interface state)]))


;;devcards
(defcard
  get-input-interface-card ;Param 1 name
  "Param 2 Optionnal string"
  (fn [state]
    (get-interface state)) ;Param 3
  {:users []} ;Param 4
  {:inspect-data true}) ; Param 5


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (get-interface app-state) node)))
(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
