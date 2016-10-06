// Compiled by ClojureScript 1.9.229 {}
goog.provide('user_mgmt.core');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof user_mgmt.core.app_state !== 'undefined'){
} else {
user_mgmt.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY], null));
}
user_mgmt.core.get_input_interface = (function user_mgmt$core$get_input_interface(state){
return React.createElement("div",null,sablono.interpreter.create_element.call(null,"input",({"type": "text", "placeholder": "Enter user name", "size": "50", "onChange": (function (p1__42496_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"new-user","new-user",1575436062),p1__42496_SHARP_.target.value);
})})),sablono.interpreter.create_element.call(null,"input",({"type": "button", "value": "Add user", "onClick": (function (){
return alert(cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"new-user","new-user",1575436062)));
}), "style": ({"marginLeft": "5px"})})));
});
user_mgmt.core.add_user = (function user_mgmt$core$add_user(state){
return null;
});
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

//# sourceMappingURL=core.js.map?rel=1475640691883