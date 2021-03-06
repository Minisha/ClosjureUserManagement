// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36903 = [];
var len__25865__auto___36906 = arguments.length;
var i__25866__auto___36907 = (0);
while(true){
if((i__25866__auto___36907 < len__25865__auto___36906)){
args36903.push((arguments[i__25866__auto___36907]));

var G__36908 = (i__25866__auto___36907 + (1));
i__25866__auto___36907 = G__36908;
continue;
} else {
}
break;
}

var G__36905 = args36903.length;
switch (G__36905) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36903.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___36911 = arguments.length;
var i__25866__auto___36912 = (0);
while(true){
if((i__25866__auto___36912 < len__25865__auto___36911)){
args__25872__auto__.push((arguments[i__25866__auto___36912]));

var G__36913 = (i__25866__auto___36912 + (1));
i__25866__auto___36912 = G__36913;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36910){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36910));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___36915 = arguments.length;
var i__25866__auto___36916 = (0);
while(true){
if((i__25866__auto___36916 < len__25865__auto___36915)){
args__25872__auto__.push((arguments[i__25866__auto___36916]));

var G__36917 = (i__25866__auto___36916 + (1));
i__25866__auto___36916 = G__36917;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36914){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36914));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36918 = cljs.core._EQ_;
var expr__36919 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36922){if((e36922 instanceof Error)){
var e = e36922;
return false;
} else {
throw e36922;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36918.call(null,"true",expr__36919))){
return true;
} else {
if(cljs.core.truth_(pred__36918.call(null,"false",expr__36919))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36919)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36924){if((e36924 instanceof Error)){
var e = e36924;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36924;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36925){
var map__36928 = p__36925;
var map__36928__$1 = ((((!((map__36928 == null)))?((((map__36928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36928):map__36928);
var message = cljs.core.get.call(null,map__36928__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36928__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24778__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24778__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24778__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28608__auto___37090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___37090,ch){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___37090,ch){
return (function (state_37059){
var state_val_37060 = (state_37059[(1)]);
if((state_val_37060 === (7))){
var inst_37055 = (state_37059[(2)]);
var state_37059__$1 = state_37059;
var statearr_37061_37091 = state_37059__$1;
(statearr_37061_37091[(2)] = inst_37055);

(statearr_37061_37091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (1))){
var state_37059__$1 = state_37059;
var statearr_37062_37092 = state_37059__$1;
(statearr_37062_37092[(2)] = null);

(statearr_37062_37092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (4))){
var inst_37012 = (state_37059[(7)]);
var inst_37012__$1 = (state_37059[(2)]);
var state_37059__$1 = (function (){var statearr_37063 = state_37059;
(statearr_37063[(7)] = inst_37012__$1);

return statearr_37063;
})();
if(cljs.core.truth_(inst_37012__$1)){
var statearr_37064_37093 = state_37059__$1;
(statearr_37064_37093[(1)] = (5));

} else {
var statearr_37065_37094 = state_37059__$1;
(statearr_37065_37094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (15))){
var inst_37019 = (state_37059[(8)]);
var inst_37034 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37019);
var inst_37035 = cljs.core.first.call(null,inst_37034);
var inst_37036 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37035);
var inst_37037 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37036)].join('');
var inst_37038 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37037);
var state_37059__$1 = state_37059;
var statearr_37066_37095 = state_37059__$1;
(statearr_37066_37095[(2)] = inst_37038);

(statearr_37066_37095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (13))){
var inst_37043 = (state_37059[(2)]);
var state_37059__$1 = state_37059;
var statearr_37067_37096 = state_37059__$1;
(statearr_37067_37096[(2)] = inst_37043);

(statearr_37067_37096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (6))){
var state_37059__$1 = state_37059;
var statearr_37068_37097 = state_37059__$1;
(statearr_37068_37097[(2)] = null);

(statearr_37068_37097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (17))){
var inst_37041 = (state_37059[(2)]);
var state_37059__$1 = state_37059;
var statearr_37069_37098 = state_37059__$1;
(statearr_37069_37098[(2)] = inst_37041);

(statearr_37069_37098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (3))){
var inst_37057 = (state_37059[(2)]);
var state_37059__$1 = state_37059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37059__$1,inst_37057);
} else {
if((state_val_37060 === (12))){
var inst_37018 = (state_37059[(9)]);
var inst_37032 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37018,opts);
var state_37059__$1 = state_37059;
if(cljs.core.truth_(inst_37032)){
var statearr_37070_37099 = state_37059__$1;
(statearr_37070_37099[(1)] = (15));

} else {
var statearr_37071_37100 = state_37059__$1;
(statearr_37071_37100[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (2))){
var state_37059__$1 = state_37059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37059__$1,(4),ch);
} else {
if((state_val_37060 === (11))){
var inst_37019 = (state_37059[(8)]);
var inst_37024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37025 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37019);
var inst_37026 = cljs.core.async.timeout.call(null,(1000));
var inst_37027 = [inst_37025,inst_37026];
var inst_37028 = (new cljs.core.PersistentVector(null,2,(5),inst_37024,inst_37027,null));
var state_37059__$1 = state_37059;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37059__$1,(14),inst_37028);
} else {
if((state_val_37060 === (9))){
var inst_37019 = (state_37059[(8)]);
var inst_37045 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37046 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37019);
var inst_37047 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37046);
var inst_37048 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37047)].join('');
var inst_37049 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37048);
var state_37059__$1 = (function (){var statearr_37072 = state_37059;
(statearr_37072[(10)] = inst_37045);

return statearr_37072;
})();
var statearr_37073_37101 = state_37059__$1;
(statearr_37073_37101[(2)] = inst_37049);

(statearr_37073_37101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (5))){
var inst_37012 = (state_37059[(7)]);
var inst_37014 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37015 = (new cljs.core.PersistentArrayMap(null,2,inst_37014,null));
var inst_37016 = (new cljs.core.PersistentHashSet(null,inst_37015,null));
var inst_37017 = figwheel.client.focus_msgs.call(null,inst_37016,inst_37012);
var inst_37018 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37017);
var inst_37019 = cljs.core.first.call(null,inst_37017);
var inst_37020 = figwheel.client.autoload_QMARK_.call(null);
var state_37059__$1 = (function (){var statearr_37074 = state_37059;
(statearr_37074[(8)] = inst_37019);

(statearr_37074[(9)] = inst_37018);

return statearr_37074;
})();
if(cljs.core.truth_(inst_37020)){
var statearr_37075_37102 = state_37059__$1;
(statearr_37075_37102[(1)] = (8));

} else {
var statearr_37076_37103 = state_37059__$1;
(statearr_37076_37103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (14))){
var inst_37030 = (state_37059[(2)]);
var state_37059__$1 = state_37059;
var statearr_37077_37104 = state_37059__$1;
(statearr_37077_37104[(2)] = inst_37030);

(statearr_37077_37104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (16))){
var state_37059__$1 = state_37059;
var statearr_37078_37105 = state_37059__$1;
(statearr_37078_37105[(2)] = null);

(statearr_37078_37105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (10))){
var inst_37051 = (state_37059[(2)]);
var state_37059__$1 = (function (){var statearr_37079 = state_37059;
(statearr_37079[(11)] = inst_37051);

return statearr_37079;
})();
var statearr_37080_37106 = state_37059__$1;
(statearr_37080_37106[(2)] = null);

(statearr_37080_37106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37060 === (8))){
var inst_37018 = (state_37059[(9)]);
var inst_37022 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37018,opts);
var state_37059__$1 = state_37059;
if(cljs.core.truth_(inst_37022)){
var statearr_37081_37107 = state_37059__$1;
(statearr_37081_37107[(1)] = (11));

} else {
var statearr_37082_37108 = state_37059__$1;
(statearr_37082_37108[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28608__auto___37090,ch))
;
return ((function (switch__28496__auto__,c__28608__auto___37090,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____0 = (function (){
var statearr_37086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37086[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__);

(statearr_37086[(1)] = (1));

return statearr_37086;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____1 = (function (state_37059){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_37059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e37087){if((e37087 instanceof Object)){
var ex__28500__auto__ = e37087;
var statearr_37088_37109 = state_37059;
(statearr_37088_37109[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37110 = state_37059;
state_37059 = G__37110;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__ = function(state_37059){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____1.call(this,state_37059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___37090,ch))
})();
var state__28610__auto__ = (function (){var statearr_37089 = f__28609__auto__.call(null);
(statearr_37089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___37090);

return statearr_37089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___37090,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37111_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37111_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37114 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37114){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37113){if((e37113 instanceof Error)){
var e = e37113;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37114], null));
} else {
var e = e37113;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37114))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37115){
var map__37124 = p__37115;
var map__37124__$1 = ((((!((map__37124 == null)))?((((map__37124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37124):map__37124);
var opts = map__37124__$1;
var build_id = cljs.core.get.call(null,map__37124__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37124,map__37124__$1,opts,build_id){
return (function (p__37126){
var vec__37127 = p__37126;
var seq__37128 = cljs.core.seq.call(null,vec__37127);
var first__37129 = cljs.core.first.call(null,seq__37128);
var seq__37128__$1 = cljs.core.next.call(null,seq__37128);
var map__37130 = first__37129;
var map__37130__$1 = ((((!((map__37130 == null)))?((((map__37130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37130):map__37130);
var msg = map__37130__$1;
var msg_name = cljs.core.get.call(null,map__37130__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37128__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37127,seq__37128,first__37129,seq__37128__$1,map__37130,map__37130__$1,msg,msg_name,_,map__37124,map__37124__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37127,seq__37128,first__37129,seq__37128__$1,map__37130,map__37130__$1,msg,msg_name,_,map__37124,map__37124__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37124,map__37124__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37138){
var vec__37139 = p__37138;
var seq__37140 = cljs.core.seq.call(null,vec__37139);
var first__37141 = cljs.core.first.call(null,seq__37140);
var seq__37140__$1 = cljs.core.next.call(null,seq__37140);
var map__37142 = first__37141;
var map__37142__$1 = ((((!((map__37142 == null)))?((((map__37142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37142):map__37142);
var msg = map__37142__$1;
var msg_name = cljs.core.get.call(null,map__37142__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37140__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37144){
var map__37156 = p__37144;
var map__37156__$1 = ((((!((map__37156 == null)))?((((map__37156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37156):map__37156);
var on_compile_warning = cljs.core.get.call(null,map__37156__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37156__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37156,map__37156__$1,on_compile_warning,on_compile_fail){
return (function (p__37158){
var vec__37159 = p__37158;
var seq__37160 = cljs.core.seq.call(null,vec__37159);
var first__37161 = cljs.core.first.call(null,seq__37160);
var seq__37160__$1 = cljs.core.next.call(null,seq__37160);
var map__37162 = first__37161;
var map__37162__$1 = ((((!((map__37162 == null)))?((((map__37162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37162):map__37162);
var msg = map__37162__$1;
var msg_name = cljs.core.get.call(null,map__37162__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37160__$1;
var pred__37164 = cljs.core._EQ_;
var expr__37165 = msg_name;
if(cljs.core.truth_(pred__37164.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37165))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37164.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37165))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37156,map__37156__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__,msg_hist,msg_names,msg){
return (function (state_37393){
var state_val_37394 = (state_37393[(1)]);
if((state_val_37394 === (7))){
var inst_37313 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37313)){
var statearr_37395_37445 = state_37393__$1;
(statearr_37395_37445[(1)] = (8));

} else {
var statearr_37396_37446 = state_37393__$1;
(statearr_37396_37446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (20))){
var inst_37387 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37397_37447 = state_37393__$1;
(statearr_37397_37447[(2)] = inst_37387);

(statearr_37397_37447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (27))){
var inst_37383 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37398_37448 = state_37393__$1;
(statearr_37398_37448[(2)] = inst_37383);

(statearr_37398_37448[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (1))){
var inst_37306 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37306)){
var statearr_37399_37449 = state_37393__$1;
(statearr_37399_37449[(1)] = (2));

} else {
var statearr_37400_37450 = state_37393__$1;
(statearr_37400_37450[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (24))){
var inst_37385 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37401_37451 = state_37393__$1;
(statearr_37401_37451[(2)] = inst_37385);

(statearr_37401_37451[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (4))){
var inst_37391 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37393__$1,inst_37391);
} else {
if((state_val_37394 === (15))){
var inst_37389 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37402_37452 = state_37393__$1;
(statearr_37402_37452[(2)] = inst_37389);

(statearr_37402_37452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (21))){
var inst_37342 = (state_37393[(2)]);
var inst_37343 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37344 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37343);
var state_37393__$1 = (function (){var statearr_37403 = state_37393;
(statearr_37403[(7)] = inst_37342);

return statearr_37403;
})();
var statearr_37404_37453 = state_37393__$1;
(statearr_37404_37453[(2)] = inst_37344);

(statearr_37404_37453[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (31))){
var inst_37372 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37372)){
var statearr_37405_37454 = state_37393__$1;
(statearr_37405_37454[(1)] = (34));

} else {
var statearr_37406_37455 = state_37393__$1;
(statearr_37406_37455[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (32))){
var inst_37381 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37407_37456 = state_37393__$1;
(statearr_37407_37456[(2)] = inst_37381);

(statearr_37407_37456[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (33))){
var inst_37368 = (state_37393[(2)]);
var inst_37369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37370 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37369);
var state_37393__$1 = (function (){var statearr_37408 = state_37393;
(statearr_37408[(8)] = inst_37368);

return statearr_37408;
})();
var statearr_37409_37457 = state_37393__$1;
(statearr_37409_37457[(2)] = inst_37370);

(statearr_37409_37457[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (13))){
var inst_37327 = figwheel.client.heads_up.clear.call(null);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(16),inst_37327);
} else {
if((state_val_37394 === (22))){
var inst_37348 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37349 = figwheel.client.heads_up.append_warning_message.call(null,inst_37348);
var state_37393__$1 = state_37393;
var statearr_37410_37458 = state_37393__$1;
(statearr_37410_37458[(2)] = inst_37349);

(statearr_37410_37458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (36))){
var inst_37379 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37411_37459 = state_37393__$1;
(statearr_37411_37459[(2)] = inst_37379);

(statearr_37411_37459[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (29))){
var inst_37359 = (state_37393[(2)]);
var inst_37360 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37361 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37360);
var state_37393__$1 = (function (){var statearr_37412 = state_37393;
(statearr_37412[(9)] = inst_37359);

return statearr_37412;
})();
var statearr_37413_37460 = state_37393__$1;
(statearr_37413_37460[(2)] = inst_37361);

(statearr_37413_37460[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (6))){
var inst_37308 = (state_37393[(10)]);
var state_37393__$1 = state_37393;
var statearr_37414_37461 = state_37393__$1;
(statearr_37414_37461[(2)] = inst_37308);

(statearr_37414_37461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (28))){
var inst_37355 = (state_37393[(2)]);
var inst_37356 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37357 = figwheel.client.heads_up.display_warning.call(null,inst_37356);
var state_37393__$1 = (function (){var statearr_37415 = state_37393;
(statearr_37415[(11)] = inst_37355);

return statearr_37415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(29),inst_37357);
} else {
if((state_val_37394 === (25))){
var inst_37353 = figwheel.client.heads_up.clear.call(null);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(28),inst_37353);
} else {
if((state_val_37394 === (34))){
var inst_37374 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(37),inst_37374);
} else {
if((state_val_37394 === (17))){
var inst_37333 = (state_37393[(2)]);
var inst_37334 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37335 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37334);
var state_37393__$1 = (function (){var statearr_37416 = state_37393;
(statearr_37416[(12)] = inst_37333);

return statearr_37416;
})();
var statearr_37417_37462 = state_37393__$1;
(statearr_37417_37462[(2)] = inst_37335);

(statearr_37417_37462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (3))){
var inst_37325 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37325)){
var statearr_37418_37463 = state_37393__$1;
(statearr_37418_37463[(1)] = (13));

} else {
var statearr_37419_37464 = state_37393__$1;
(statearr_37419_37464[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (12))){
var inst_37321 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37420_37465 = state_37393__$1;
(statearr_37420_37465[(2)] = inst_37321);

(statearr_37420_37465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (2))){
var inst_37308 = (state_37393[(10)]);
var inst_37308__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37393__$1 = (function (){var statearr_37421 = state_37393;
(statearr_37421[(10)] = inst_37308__$1);

return statearr_37421;
})();
if(cljs.core.truth_(inst_37308__$1)){
var statearr_37422_37466 = state_37393__$1;
(statearr_37422_37466[(1)] = (5));

} else {
var statearr_37423_37467 = state_37393__$1;
(statearr_37423_37467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (23))){
var inst_37351 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37351)){
var statearr_37424_37468 = state_37393__$1;
(statearr_37424_37468[(1)] = (25));

} else {
var statearr_37425_37469 = state_37393__$1;
(statearr_37425_37469[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (35))){
var state_37393__$1 = state_37393;
var statearr_37426_37470 = state_37393__$1;
(statearr_37426_37470[(2)] = null);

(statearr_37426_37470[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (19))){
var inst_37346 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37346)){
var statearr_37427_37471 = state_37393__$1;
(statearr_37427_37471[(1)] = (22));

} else {
var statearr_37428_37472 = state_37393__$1;
(statearr_37428_37472[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (11))){
var inst_37317 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37429_37473 = state_37393__$1;
(statearr_37429_37473[(2)] = inst_37317);

(statearr_37429_37473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (9))){
var inst_37319 = figwheel.client.heads_up.clear.call(null);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(12),inst_37319);
} else {
if((state_val_37394 === (5))){
var inst_37310 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37393__$1 = state_37393;
var statearr_37430_37474 = state_37393__$1;
(statearr_37430_37474[(2)] = inst_37310);

(statearr_37430_37474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (14))){
var inst_37337 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37337)){
var statearr_37431_37475 = state_37393__$1;
(statearr_37431_37475[(1)] = (18));

} else {
var statearr_37432_37476 = state_37393__$1;
(statearr_37432_37476[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (26))){
var inst_37363 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37363)){
var statearr_37433_37477 = state_37393__$1;
(statearr_37433_37477[(1)] = (30));

} else {
var statearr_37434_37478 = state_37393__$1;
(statearr_37434_37478[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (16))){
var inst_37329 = (state_37393[(2)]);
var inst_37330 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37331 = figwheel.client.heads_up.display_exception.call(null,inst_37330);
var state_37393__$1 = (function (){var statearr_37435 = state_37393;
(statearr_37435[(13)] = inst_37329);

return statearr_37435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(17),inst_37331);
} else {
if((state_val_37394 === (30))){
var inst_37365 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37366 = figwheel.client.heads_up.display_warning.call(null,inst_37365);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(33),inst_37366);
} else {
if((state_val_37394 === (10))){
var inst_37323 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37436_37479 = state_37393__$1;
(statearr_37436_37479[(2)] = inst_37323);

(statearr_37436_37479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (18))){
var inst_37339 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37340 = figwheel.client.heads_up.display_exception.call(null,inst_37339);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(21),inst_37340);
} else {
if((state_val_37394 === (37))){
var inst_37376 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37437_37480 = state_37393__$1;
(statearr_37437_37480[(2)] = inst_37376);

(statearr_37437_37480[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (8))){
var inst_37315 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(11),inst_37315);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28608__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28496__auto__,c__28608__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____0 = (function (){
var statearr_37441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37441[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__);

(statearr_37441[(1)] = (1));

return statearr_37441;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____1 = (function (state_37393){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_37393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e37442){if((e37442 instanceof Object)){
var ex__28500__auto__ = e37442;
var statearr_37443_37481 = state_37393;
(statearr_37443_37481[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37482 = state_37393;
state_37393 = G__37482;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__ = function(state_37393){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____1.call(this,state_37393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__,msg_hist,msg_names,msg))
})();
var state__28610__auto__ = (function (){var statearr_37444 = f__28609__auto__.call(null);
(statearr_37444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_37444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__,msg_hist,msg_names,msg))
);

return c__28608__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28608__auto___37545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___37545,ch){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___37545,ch){
return (function (state_37528){
var state_val_37529 = (state_37528[(1)]);
if((state_val_37529 === (1))){
var state_37528__$1 = state_37528;
var statearr_37530_37546 = state_37528__$1;
(statearr_37530_37546[(2)] = null);

(statearr_37530_37546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (2))){
var state_37528__$1 = state_37528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37528__$1,(4),ch);
} else {
if((state_val_37529 === (3))){
var inst_37526 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37528__$1,inst_37526);
} else {
if((state_val_37529 === (4))){
var inst_37516 = (state_37528[(7)]);
var inst_37516__$1 = (state_37528[(2)]);
var state_37528__$1 = (function (){var statearr_37531 = state_37528;
(statearr_37531[(7)] = inst_37516__$1);

return statearr_37531;
})();
if(cljs.core.truth_(inst_37516__$1)){
var statearr_37532_37547 = state_37528__$1;
(statearr_37532_37547[(1)] = (5));

} else {
var statearr_37533_37548 = state_37528__$1;
(statearr_37533_37548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (5))){
var inst_37516 = (state_37528[(7)]);
var inst_37518 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37516);
var state_37528__$1 = state_37528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37528__$1,(8),inst_37518);
} else {
if((state_val_37529 === (6))){
var state_37528__$1 = state_37528;
var statearr_37534_37549 = state_37528__$1;
(statearr_37534_37549[(2)] = null);

(statearr_37534_37549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (7))){
var inst_37524 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37535_37550 = state_37528__$1;
(statearr_37535_37550[(2)] = inst_37524);

(statearr_37535_37550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (8))){
var inst_37520 = (state_37528[(2)]);
var state_37528__$1 = (function (){var statearr_37536 = state_37528;
(statearr_37536[(8)] = inst_37520);

return statearr_37536;
})();
var statearr_37537_37551 = state_37528__$1;
(statearr_37537_37551[(2)] = null);

(statearr_37537_37551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28608__auto___37545,ch))
;
return ((function (switch__28496__auto__,c__28608__auto___37545,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28497__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28497__auto____0 = (function (){
var statearr_37541 = [null,null,null,null,null,null,null,null,null];
(statearr_37541[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28497__auto__);

(statearr_37541[(1)] = (1));

return statearr_37541;
});
var figwheel$client$heads_up_plugin_$_state_machine__28497__auto____1 = (function (state_37528){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_37528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e37542){if((e37542 instanceof Object)){
var ex__28500__auto__ = e37542;
var statearr_37543_37552 = state_37528;
(statearr_37543_37552[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37553 = state_37528;
state_37528 = G__37553;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28497__auto__ = function(state_37528){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28497__auto____1.call(this,state_37528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28497__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28497__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___37545,ch))
})();
var state__28610__auto__ = (function (){var statearr_37544 = f__28609__auto__.call(null);
(statearr_37544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___37545);

return statearr_37544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___37545,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__){
return (function (state_37574){
var state_val_37575 = (state_37574[(1)]);
if((state_val_37575 === (1))){
var inst_37569 = cljs.core.async.timeout.call(null,(3000));
var state_37574__$1 = state_37574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37574__$1,(2),inst_37569);
} else {
if((state_val_37575 === (2))){
var inst_37571 = (state_37574[(2)]);
var inst_37572 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37574__$1 = (function (){var statearr_37576 = state_37574;
(statearr_37576[(7)] = inst_37571);

return statearr_37576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37574__$1,inst_37572);
} else {
return null;
}
}
});})(c__28608__auto__))
;
return ((function (switch__28496__auto__,c__28608__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____0 = (function (){
var statearr_37580 = [null,null,null,null,null,null,null,null];
(statearr_37580[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__);

(statearr_37580[(1)] = (1));

return statearr_37580;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____1 = (function (state_37574){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_37574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e37581){if((e37581 instanceof Object)){
var ex__28500__auto__ = e37581;
var statearr_37582_37584 = state_37574;
(statearr_37582_37584[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37585 = state_37574;
state_37574 = G__37585;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__ = function(state_37574){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____1.call(this,state_37574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_37583 = f__28609__auto__.call(null);
(statearr_37583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_37583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__))
);

return c__28608__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37608){
var state_val_37609 = (state_37608[(1)]);
if((state_val_37609 === (1))){
var inst_37602 = cljs.core.async.timeout.call(null,(2000));
var state_37608__$1 = state_37608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37608__$1,(2),inst_37602);
} else {
if((state_val_37609 === (2))){
var inst_37604 = (state_37608[(2)]);
var inst_37605 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37606 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37605);
var state_37608__$1 = (function (){var statearr_37610 = state_37608;
(statearr_37610[(7)] = inst_37604);

return statearr_37610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37608__$1,inst_37606);
} else {
return null;
}
}
});})(c__28608__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28496__auto__,c__28608__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____0 = (function (){
var statearr_37614 = [null,null,null,null,null,null,null,null];
(statearr_37614[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__);

(statearr_37614[(1)] = (1));

return statearr_37614;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____1 = (function (state_37608){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_37608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e37615){if((e37615 instanceof Object)){
var ex__28500__auto__ = e37615;
var statearr_37616_37618 = state_37608;
(statearr_37616_37618[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37619 = state_37608;
state_37608 = G__37619;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__ = function(state_37608){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____1.call(this,state_37608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28610__auto__ = (function (){var statearr_37617 = f__28609__auto__.call(null);
(statearr_37617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_37617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__,figwheel_version,temp__4657__auto__))
);

return c__28608__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37620){
var map__37624 = p__37620;
var map__37624__$1 = ((((!((map__37624 == null)))?((((map__37624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37624):map__37624);
var file = cljs.core.get.call(null,map__37624__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37624__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37624__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37626 = "";
var G__37626__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37626),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37626);
var G__37626__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37626__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37626__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__37626__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37626__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37627){
var map__37634 = p__37627;
var map__37634__$1 = ((((!((map__37634 == null)))?((((map__37634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37634):map__37634);
var ed = map__37634__$1;
var formatted_exception = cljs.core.get.call(null,map__37634__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37634__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37634__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37636_37640 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37637_37641 = null;
var count__37638_37642 = (0);
var i__37639_37643 = (0);
while(true){
if((i__37639_37643 < count__37638_37642)){
var msg_37644 = cljs.core._nth.call(null,chunk__37637_37641,i__37639_37643);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37644);

var G__37645 = seq__37636_37640;
var G__37646 = chunk__37637_37641;
var G__37647 = count__37638_37642;
var G__37648 = (i__37639_37643 + (1));
seq__37636_37640 = G__37645;
chunk__37637_37641 = G__37646;
count__37638_37642 = G__37647;
i__37639_37643 = G__37648;
continue;
} else {
var temp__4657__auto___37649 = cljs.core.seq.call(null,seq__37636_37640);
if(temp__4657__auto___37649){
var seq__37636_37650__$1 = temp__4657__auto___37649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37636_37650__$1)){
var c__25601__auto___37651 = cljs.core.chunk_first.call(null,seq__37636_37650__$1);
var G__37652 = cljs.core.chunk_rest.call(null,seq__37636_37650__$1);
var G__37653 = c__25601__auto___37651;
var G__37654 = cljs.core.count.call(null,c__25601__auto___37651);
var G__37655 = (0);
seq__37636_37640 = G__37652;
chunk__37637_37641 = G__37653;
count__37638_37642 = G__37654;
i__37639_37643 = G__37655;
continue;
} else {
var msg_37656 = cljs.core.first.call(null,seq__37636_37650__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37656);

var G__37657 = cljs.core.next.call(null,seq__37636_37650__$1);
var G__37658 = null;
var G__37659 = (0);
var G__37660 = (0);
seq__37636_37640 = G__37657;
chunk__37637_37641 = G__37658;
count__37638_37642 = G__37659;
i__37639_37643 = G__37660;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37661){
var map__37664 = p__37661;
var map__37664__$1 = ((((!((map__37664 == null)))?((((map__37664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37664):map__37664);
var w = map__37664__$1;
var message = cljs.core.get.call(null,map__37664__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24778__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24778__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37676 = cljs.core.seq.call(null,plugins);
var chunk__37677 = null;
var count__37678 = (0);
var i__37679 = (0);
while(true){
if((i__37679 < count__37678)){
var vec__37680 = cljs.core._nth.call(null,chunk__37677,i__37679);
var k = cljs.core.nth.call(null,vec__37680,(0),null);
var plugin = cljs.core.nth.call(null,vec__37680,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37686 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37676,chunk__37677,count__37678,i__37679,pl_37686,vec__37680,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37686.call(null,msg_hist);
});})(seq__37676,chunk__37677,count__37678,i__37679,pl_37686,vec__37680,k,plugin))
);
} else {
}

var G__37687 = seq__37676;
var G__37688 = chunk__37677;
var G__37689 = count__37678;
var G__37690 = (i__37679 + (1));
seq__37676 = G__37687;
chunk__37677 = G__37688;
count__37678 = G__37689;
i__37679 = G__37690;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37676);
if(temp__4657__auto__){
var seq__37676__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37676__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__37676__$1);
var G__37691 = cljs.core.chunk_rest.call(null,seq__37676__$1);
var G__37692 = c__25601__auto__;
var G__37693 = cljs.core.count.call(null,c__25601__auto__);
var G__37694 = (0);
seq__37676 = G__37691;
chunk__37677 = G__37692;
count__37678 = G__37693;
i__37679 = G__37694;
continue;
} else {
var vec__37683 = cljs.core.first.call(null,seq__37676__$1);
var k = cljs.core.nth.call(null,vec__37683,(0),null);
var plugin = cljs.core.nth.call(null,vec__37683,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37695 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37676,chunk__37677,count__37678,i__37679,pl_37695,vec__37683,k,plugin,seq__37676__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37695.call(null,msg_hist);
});})(seq__37676,chunk__37677,count__37678,i__37679,pl_37695,vec__37683,k,plugin,seq__37676__$1,temp__4657__auto__))
);
} else {
}

var G__37696 = cljs.core.next.call(null,seq__37676__$1);
var G__37697 = null;
var G__37698 = (0);
var G__37699 = (0);
seq__37676 = G__37696;
chunk__37677 = G__37697;
count__37678 = G__37698;
i__37679 = G__37699;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37700 = [];
var len__25865__auto___37707 = arguments.length;
var i__25866__auto___37708 = (0);
while(true){
if((i__25866__auto___37708 < len__25865__auto___37707)){
args37700.push((arguments[i__25866__auto___37708]));

var G__37709 = (i__25866__auto___37708 + (1));
i__25866__auto___37708 = G__37709;
continue;
} else {
}
break;
}

var G__37702 = args37700.length;
switch (G__37702) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37700.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37703_37711 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37704_37712 = null;
var count__37705_37713 = (0);
var i__37706_37714 = (0);
while(true){
if((i__37706_37714 < count__37705_37713)){
var msg_37715 = cljs.core._nth.call(null,chunk__37704_37712,i__37706_37714);
figwheel.client.socket.handle_incoming_message.call(null,msg_37715);

var G__37716 = seq__37703_37711;
var G__37717 = chunk__37704_37712;
var G__37718 = count__37705_37713;
var G__37719 = (i__37706_37714 + (1));
seq__37703_37711 = G__37716;
chunk__37704_37712 = G__37717;
count__37705_37713 = G__37718;
i__37706_37714 = G__37719;
continue;
} else {
var temp__4657__auto___37720 = cljs.core.seq.call(null,seq__37703_37711);
if(temp__4657__auto___37720){
var seq__37703_37721__$1 = temp__4657__auto___37720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37703_37721__$1)){
var c__25601__auto___37722 = cljs.core.chunk_first.call(null,seq__37703_37721__$1);
var G__37723 = cljs.core.chunk_rest.call(null,seq__37703_37721__$1);
var G__37724 = c__25601__auto___37722;
var G__37725 = cljs.core.count.call(null,c__25601__auto___37722);
var G__37726 = (0);
seq__37703_37711 = G__37723;
chunk__37704_37712 = G__37724;
count__37705_37713 = G__37725;
i__37706_37714 = G__37726;
continue;
} else {
var msg_37727 = cljs.core.first.call(null,seq__37703_37721__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37727);

var G__37728 = cljs.core.next.call(null,seq__37703_37721__$1);
var G__37729 = null;
var G__37730 = (0);
var G__37731 = (0);
seq__37703_37711 = G__37728;
chunk__37704_37712 = G__37729;
count__37705_37713 = G__37730;
i__37706_37714 = G__37731;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25872__auto__ = [];
var len__25865__auto___37736 = arguments.length;
var i__25866__auto___37737 = (0);
while(true){
if((i__25866__auto___37737 < len__25865__auto___37736)){
args__25872__auto__.push((arguments[i__25866__auto___37737]));

var G__37738 = (i__25866__auto___37737 + (1));
i__25866__auto___37737 = G__37738;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37733){
var map__37734 = p__37733;
var map__37734__$1 = ((((!((map__37734 == null)))?((((map__37734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37734):map__37734);
var opts = map__37734__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37732){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37732));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37740){if((e37740 instanceof Error)){
var e = e37740;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37740;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37744){
var map__37745 = p__37744;
var map__37745__$1 = ((((!((map__37745 == null)))?((((map__37745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37745):map__37745);
var msg_name = cljs.core.get.call(null,map__37745__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1475620905405