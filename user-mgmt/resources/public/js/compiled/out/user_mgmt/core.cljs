(ns user-mgmt.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defonce app-state (atom {:users [] :new-user "" }))

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
              [:div  (get user :name)]
              [:div {} (get user :point)]

              [:input
                {:type "button"
                 :value "+"
                 :on-click #(increment-point state index)}]
              [:input
                {:type "button"
                 :value "-"
                 :on-click #(decrement-point state index)}]
               [:input
                {:type "button"

                 :value "Delete "

                 :on-click #(delete-user state index)}]]))




(defn list-users [state]
  (map-indexed #(list-user state %1 %2) (get @state :users))
  ;(swap! state update :users (fn [users] (vec (sort-by first users))))
  )

(defn get-input-interface [state]
  (sab/html
   [:div {:class "input-tag"}
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


  (defn render-app
    "Render the UI on DOM node, according to state: UI=f(S)."
    [state node]
      (.render js/ReactDOM
               (get-interface app-state)
               node))

  ;; We add a watcher to render the UI on state change.
  (add-watch
   app-state
   :render
   (fn [_ atom _ _]
     (render-app atom (.getElementById js/document "main-app-area"))))

(defn main []
  (if-let [node (.getElementById js/document "main-app-area")]
    (render-app atom (.getElementById js/document "main-app-area"))))
(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
