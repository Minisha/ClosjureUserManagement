// Compiled by ClojureScript 1.9.229 {}
goog.provide('user_mgmt.core');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof user_mgmt.core.app_state !== 'undefined'){
} else {
user_mgmt.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY], null));
}
user_mgmt.core.add_user = (function user_mgmt$core$add_user(state){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"new-user","new-user",1575436062)),new cljs.core.Keyword(null,"point","point",1813198264),(0)], null));
});
user_mgmt.core.sort_user = (function user_mgmt$core$sort_user(state){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"users","users",-713552705),(function (users){
return cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"point","point",1813198264)),(function (p1__37768_SHARP_,p2__37769_SHARP_){
return (p1__37768_SHARP_ > p2__37769_SHARP_);
}),users));
}));
});
user_mgmt.core.increment_point = (function user_mgmt$core$increment_point(state,index){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),index,new cljs.core.Keyword(null,"point","point",1813198264)], null),(function (x){
return (x + (1));
}));

return user_mgmt.core.sort_user.call(null,state);
});
user_mgmt.core.decrement_point = (function user_mgmt$core$decrement_point(state,index){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),index,new cljs.core.Keyword(null,"point","point",1813198264)], null),(function (x){
return (x - (1));
}));

return user_mgmt.core.sort_user.call(null,state);
});
user_mgmt.core.delete_user = (function user_mgmt$core$delete_user(state,index){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"users","users",-713552705),(function (users){
return cljs.core.vec.call(null,cljs.core.keep_indexed.call(null,(function (idx,arg){
if(cljs.core._EQ_.call(null,idx,index)){
return null;
} else {
return arg;
}
}),users));
}));
});
user_mgmt.core.list_user = (function user_mgmt$core$list_user(state,index,user){
return React.createElement("div",({"key": index, "style": ({"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"})}),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,cljs.core.get.call(null,user,new cljs.core.Keyword(null,"name","name",1843675177)))),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,cljs.core.get.call(null,user,new cljs.core.Keyword(null,"point","point",1813198264)))),React.createElement("div",null,sablono.interpreter.create_element.call(null,"input",({"type": "button", "value": "+", "onClick": (function (){
return user_mgmt.core.increment_point.call(null,state,index);
}), "style": ({"marginLeft": "20px"})})),sablono.interpreter.create_element.call(null,"input",({"type": "button", "value": "-", "onClick": (function (){
return user_mgmt.core.decrement_point.call(null,state,index);
}), "style": ({"marginLeft": "20px"})})),sablono.interpreter.create_element.call(null,"input",({"type": "button", "value": "Delete", "style": ({"marginLeft": "20px"}), "onClick": (function (){
return user_mgmt.core.delete_user.call(null,state,index);
})}))));
});
user_mgmt.core.list_users = (function user_mgmt$core$list_users(state){
return cljs.core.map_indexed.call(null,(function (p1__37770_SHARP_,p2__37771_SHARP_){
return user_mgmt.core.list_user.call(null,state,p1__37770_SHARP_,p2__37771_SHARP_);
}),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"users","users",-713552705)));
});
user_mgmt.core.get_input_interface = (function user_mgmt$core$get_input_interface(state){
return React.createElement("div",null,sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": "Enter user name", "size": "50", "onChange": (function (p1__37772_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"new-user","new-user",1575436062),p1__37772_SHARP_.target.value);
})})),sablono.interpreter.create_element.call(null,"input",({"type": "button", "value": "Add user", "onClick": (function (){
return user_mgmt.core.add_user.call(null,state);
}), "style": ({"marginLeft": "5px"})})));
});
user_mgmt.core.get_interface = (function user_mgmt$core$get_interface(state){
var attrs37774 = user_mgmt.core.get_input_interface.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37774))?sablono.interpreter.attributes.call(null,attrs37774):null),((cljs.core.map_QMARK_.call(null,attrs37774))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,user_mgmt.core.list_users.call(null,state))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37774),sablono.interpreter.interpret.call(null,user_mgmt.core.list_users.call(null,state))], null)));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user_mgmt.core","user_mgmt.core",1490424063),new cljs.core.Keyword(null,"get-input-interface-card","get-input-interface-card",1446233376)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"get-input-interface-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Param 2 Optionnal string",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state){
return user_mgmt.core.get_interface.call(null,state);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
user_mgmt.core.main = (function user_mgmt$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return ReactDOM.render(user_mgmt.core.get_input_interface.call(null,user_mgmt.core.app_state),node);
} else {
return null;
}
});
user_mgmt.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1475735377512