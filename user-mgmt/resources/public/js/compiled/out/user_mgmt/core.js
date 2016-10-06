// Compiled by ClojureScript 1.9.229 {}
goog.provide('user_mgmt.core');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof user_mgmt.core.app_state !== 'undefined'){
} else {
user_mgmt.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-user","new-user",1575436062),""], null));
}
user_mgmt.core.add_user = (function user_mgmt$core$add_user(state){
cljs.core.println.call(null,[cljs.core.str("users "),cljs.core.str(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"new-user","new-user",1575436062)))].join(''));

return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"new-user","new-user",1575436062)),new cljs.core.Keyword(null,"point","point",1813198264),(0)], null));
});
user_mgmt.core.sort_user = (function user_mgmt$core$sort_user(state){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"users","users",-713552705),(function (users){
return cljs.core.vec.call(null,cljs.core.sort_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"point","point",1813198264)),(function (p1__40297_SHARP_,p2__40298_SHARP_){
return (p1__40297_SHARP_ > p2__40298_SHARP_);
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
return React.createElement("div",({"key": index, "className": "list-user-main"}),React.createElement("div",({"className": "list-user-main"}),sablono.interpreter.interpret.call(null,cljs.core.get.call(null,user,new cljs.core.Keyword(null,"name","name",1843675177)))),React.createElement("div",({"className": "list-user-main"}),sablono.interpreter.interpret.call(null,cljs.core.get.call(null,user,new cljs.core.Keyword(null,"point","point",1813198264)))),React.createElement("div",({"className": "list-user-main"}),sablono.interpreter.create_element.call(null,"input",({"type": "button", "value": "+", "onClick": (function (){
return user_mgmt.core.increment_point.call(null,state,index);
}), "className": "list-user-main"})),sablono.interpreter.create_element.call(null,"input",({"type": "button", "value": "-", "onClick": (function (){
return user_mgmt.core.decrement_point.call(null,state,index);
}), "className": "list-user-main"})),sablono.interpreter.create_element.call(null,"input",({"type": "button", "value": "Delete ", "onClick": (function (){
return user_mgmt.core.delete_user.call(null,state,index);
}), "className": "list-user-main"}))));
});
user_mgmt.core.list_users = (function user_mgmt$core$list_users(state){
return cljs.core.map_indexed.call(null,(function (p1__40299_SHARP_,p2__40300_SHARP_){
return user_mgmt.core.list_user.call(null,state,p1__40299_SHARP_,p2__40300_SHARP_);
}),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"users","users",-713552705)));
});
user_mgmt.core.get_input_interface = (function user_mgmt$core$get_input_interface(state){
return React.createElement("div",({"className": "input-tag"}),sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": "Enter user name", "size": "50", "onChange": (function (p1__40301_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"new-user","new-user",1575436062),p1__40301_SHARP_.target.value);
})})),sablono.interpreter.create_element.call(null,"input",({"type": "button", "value": "Add user", "onClick": (function (){
return user_mgmt.core.add_user.call(null,state);
}), "style": ({"marginLeft": "5px"})})));
});
user_mgmt.core.get_interface = (function user_mgmt$core$get_interface(state){
var attrs40303 = user_mgmt.core.list_users.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40303))?sablono.interpreter.attributes.call(null,attrs40303):null),((cljs.core.map_QMARK_.call(null,attrs40303))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,user_mgmt.core.get_input_interface.call(null,state))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40303),sablono.interpreter.interpret.call(null,user_mgmt.core.get_input_interface.call(null,state))], null)));
});
/**
 * Render the UI on DOM node, according to state: UI=f(S).
 */
user_mgmt.core.render_app = (function user_mgmt$core$render_app(state,node){
return ReactDOM.render(user_mgmt.core.get_interface.call(null,user_mgmt.core.app_state),node);
});
cljs.core.add_watch.call(null,user_mgmt.core.app_state,new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,atom,___$1,___$2){
return user_mgmt.core.render_app.call(null,atom,document.getElementById("main-app-area"));
}));
user_mgmt.core.main = (function user_mgmt$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return user_mgmt.core.render_app.call(null,cljs.core.atom,document.getElementById("main-app-area"));
} else {
return null;
}
});
user_mgmt.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1475739753647