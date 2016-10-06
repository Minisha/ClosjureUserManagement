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
var args46721 = [];
var len__25865__auto___46724 = arguments.length;
var i__25866__auto___46725 = (0);
while(true){
if((i__25866__auto___46725 < len__25865__auto___46724)){
args46721.push((arguments[i__25866__auto___46725]));

var G__46726 = (i__25866__auto___46725 + (1));
i__25866__auto___46725 = G__46726;
continue;
} else {
}
break;
}

var G__46723 = args46721.length;
switch (G__46723) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46721.length)].join('')));

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
var len__25865__auto___46729 = arguments.length;
var i__25866__auto___46730 = (0);
while(true){
if((i__25866__auto___46730 < len__25865__auto___46729)){
args__25872__auto__.push((arguments[i__25866__auto___46730]));

var G__46731 = (i__25866__auto___46730 + (1));
i__25866__auto___46730 = G__46731;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46728){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46728));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___46733 = arguments.length;
var i__25866__auto___46734 = (0);
while(true){
if((i__25866__auto___46734 < len__25865__auto___46733)){
args__25872__auto__.push((arguments[i__25866__auto___46734]));

var G__46735 = (i__25866__auto___46734 + (1));
i__25866__auto___46734 = G__46735;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46732){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46732));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__46736 = cljs.core._EQ_;
var expr__46737 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e46740){if((e46740 instanceof Error)){
var e = e46740;
return false;
} else {
throw e46740;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__46736.call(null,"true",expr__46737))){
return true;
} else {
if(cljs.core.truth_(pred__46736.call(null,"false",expr__46737))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__46737)].join('')));
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
}catch (e46742){if((e46742 instanceof Error)){
var e = e46742;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e46742;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46743){
var map__46746 = p__46743;
var map__46746__$1 = ((((!((map__46746 == null)))?((((map__46746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46746):map__46746);
var message = cljs.core.get.call(null,map__46746__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46746__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28608__auto___46908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___46908,ch){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___46908,ch){
return (function (state_46877){
var state_val_46878 = (state_46877[(1)]);
if((state_val_46878 === (7))){
var inst_46873 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
var statearr_46879_46909 = state_46877__$1;
(statearr_46879_46909[(2)] = inst_46873);

(statearr_46879_46909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (1))){
var state_46877__$1 = state_46877;
var statearr_46880_46910 = state_46877__$1;
(statearr_46880_46910[(2)] = null);

(statearr_46880_46910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (4))){
var inst_46830 = (state_46877[(7)]);
var inst_46830__$1 = (state_46877[(2)]);
var state_46877__$1 = (function (){var statearr_46881 = state_46877;
(statearr_46881[(7)] = inst_46830__$1);

return statearr_46881;
})();
if(cljs.core.truth_(inst_46830__$1)){
var statearr_46882_46911 = state_46877__$1;
(statearr_46882_46911[(1)] = (5));

} else {
var statearr_46883_46912 = state_46877__$1;
(statearr_46883_46912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (15))){
var inst_46837 = (state_46877[(8)]);
var inst_46852 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46837);
var inst_46853 = cljs.core.first.call(null,inst_46852);
var inst_46854 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46853);
var inst_46855 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_46854)].join('');
var inst_46856 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46855);
var state_46877__$1 = state_46877;
var statearr_46884_46913 = state_46877__$1;
(statearr_46884_46913[(2)] = inst_46856);

(statearr_46884_46913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (13))){
var inst_46861 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
var statearr_46885_46914 = state_46877__$1;
(statearr_46885_46914[(2)] = inst_46861);

(statearr_46885_46914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (6))){
var state_46877__$1 = state_46877;
var statearr_46886_46915 = state_46877__$1;
(statearr_46886_46915[(2)] = null);

(statearr_46886_46915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (17))){
var inst_46859 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
var statearr_46887_46916 = state_46877__$1;
(statearr_46887_46916[(2)] = inst_46859);

(statearr_46887_46916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (3))){
var inst_46875 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46877__$1,inst_46875);
} else {
if((state_val_46878 === (12))){
var inst_46836 = (state_46877[(9)]);
var inst_46850 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46836,opts);
var state_46877__$1 = state_46877;
if(cljs.core.truth_(inst_46850)){
var statearr_46888_46917 = state_46877__$1;
(statearr_46888_46917[(1)] = (15));

} else {
var statearr_46889_46918 = state_46877__$1;
(statearr_46889_46918[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (2))){
var state_46877__$1 = state_46877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46877__$1,(4),ch);
} else {
if((state_val_46878 === (11))){
var inst_46837 = (state_46877[(8)]);
var inst_46842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46843 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46837);
var inst_46844 = cljs.core.async.timeout.call(null,(1000));
var inst_46845 = [inst_46843,inst_46844];
var inst_46846 = (new cljs.core.PersistentVector(null,2,(5),inst_46842,inst_46845,null));
var state_46877__$1 = state_46877;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46877__$1,(14),inst_46846);
} else {
if((state_val_46878 === (9))){
var inst_46837 = (state_46877[(8)]);
var inst_46863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46864 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46837);
var inst_46865 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46864);
var inst_46866 = [cljs.core.str("Not loading: "),cljs.core.str(inst_46865)].join('');
var inst_46867 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46866);
var state_46877__$1 = (function (){var statearr_46890 = state_46877;
(statearr_46890[(10)] = inst_46863);

return statearr_46890;
})();
var statearr_46891_46919 = state_46877__$1;
(statearr_46891_46919[(2)] = inst_46867);

(statearr_46891_46919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (5))){
var inst_46830 = (state_46877[(7)]);
var inst_46832 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46833 = (new cljs.core.PersistentArrayMap(null,2,inst_46832,null));
var inst_46834 = (new cljs.core.PersistentHashSet(null,inst_46833,null));
var inst_46835 = figwheel.client.focus_msgs.call(null,inst_46834,inst_46830);
var inst_46836 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46835);
var inst_46837 = cljs.core.first.call(null,inst_46835);
var inst_46838 = figwheel.client.autoload_QMARK_.call(null);
var state_46877__$1 = (function (){var statearr_46892 = state_46877;
(statearr_46892[(9)] = inst_46836);

(statearr_46892[(8)] = inst_46837);

return statearr_46892;
})();
if(cljs.core.truth_(inst_46838)){
var statearr_46893_46920 = state_46877__$1;
(statearr_46893_46920[(1)] = (8));

} else {
var statearr_46894_46921 = state_46877__$1;
(statearr_46894_46921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (14))){
var inst_46848 = (state_46877[(2)]);
var state_46877__$1 = state_46877;
var statearr_46895_46922 = state_46877__$1;
(statearr_46895_46922[(2)] = inst_46848);

(statearr_46895_46922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (16))){
var state_46877__$1 = state_46877;
var statearr_46896_46923 = state_46877__$1;
(statearr_46896_46923[(2)] = null);

(statearr_46896_46923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (10))){
var inst_46869 = (state_46877[(2)]);
var state_46877__$1 = (function (){var statearr_46897 = state_46877;
(statearr_46897[(11)] = inst_46869);

return statearr_46897;
})();
var statearr_46898_46924 = state_46877__$1;
(statearr_46898_46924[(2)] = null);

(statearr_46898_46924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46878 === (8))){
var inst_46836 = (state_46877[(9)]);
var inst_46840 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46836,opts);
var state_46877__$1 = state_46877;
if(cljs.core.truth_(inst_46840)){
var statearr_46899_46925 = state_46877__$1;
(statearr_46899_46925[(1)] = (11));

} else {
var statearr_46900_46926 = state_46877__$1;
(statearr_46900_46926[(1)] = (12));

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
});})(c__28608__auto___46908,ch))
;
return ((function (switch__28496__auto__,c__28608__auto___46908,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____0 = (function (){
var statearr_46904 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46904[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__);

(statearr_46904[(1)] = (1));

return statearr_46904;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____1 = (function (state_46877){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_46877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e46905){if((e46905 instanceof Object)){
var ex__28500__auto__ = e46905;
var statearr_46906_46927 = state_46877;
(statearr_46906_46927[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46928 = state_46877;
state_46877 = G__46928;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__ = function(state_46877){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____1.call(this,state_46877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28497__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___46908,ch))
})();
var state__28610__auto__ = (function (){var statearr_46907 = f__28609__auto__.call(null);
(statearr_46907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___46908);

return statearr_46907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___46908,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46929_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46929_SHARP_));
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
var base_path_46932 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46932){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e46931){if((e46931 instanceof Error)){
var e = e46931;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46932], null));
} else {
var e = e46931;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_46932))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46933){
var map__46942 = p__46933;
var map__46942__$1 = ((((!((map__46942 == null)))?((((map__46942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46942):map__46942);
var opts = map__46942__$1;
var build_id = cljs.core.get.call(null,map__46942__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46942,map__46942__$1,opts,build_id){
return (function (p__46944){
var vec__46945 = p__46944;
var seq__46946 = cljs.core.seq.call(null,vec__46945);
var first__46947 = cljs.core.first.call(null,seq__46946);
var seq__46946__$1 = cljs.core.next.call(null,seq__46946);
var map__46948 = first__46947;
var map__46948__$1 = ((((!((map__46948 == null)))?((((map__46948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46948):map__46948);
var msg = map__46948__$1;
var msg_name = cljs.core.get.call(null,map__46948__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46946__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46945,seq__46946,first__46947,seq__46946__$1,map__46948,map__46948__$1,msg,msg_name,_,map__46942,map__46942__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46945,seq__46946,first__46947,seq__46946__$1,map__46948,map__46948__$1,msg,msg_name,_,map__46942,map__46942__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46942,map__46942__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46956){
var vec__46957 = p__46956;
var seq__46958 = cljs.core.seq.call(null,vec__46957);
var first__46959 = cljs.core.first.call(null,seq__46958);
var seq__46958__$1 = cljs.core.next.call(null,seq__46958);
var map__46960 = first__46959;
var map__46960__$1 = ((((!((map__46960 == null)))?((((map__46960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46960):map__46960);
var msg = map__46960__$1;
var msg_name = cljs.core.get.call(null,map__46960__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46958__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46962){
var map__46974 = p__46962;
var map__46974__$1 = ((((!((map__46974 == null)))?((((map__46974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46974):map__46974);
var on_compile_warning = cljs.core.get.call(null,map__46974__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46974__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46974,map__46974__$1,on_compile_warning,on_compile_fail){
return (function (p__46976){
var vec__46977 = p__46976;
var seq__46978 = cljs.core.seq.call(null,vec__46977);
var first__46979 = cljs.core.first.call(null,seq__46978);
var seq__46978__$1 = cljs.core.next.call(null,seq__46978);
var map__46980 = first__46979;
var map__46980__$1 = ((((!((map__46980 == null)))?((((map__46980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46980):map__46980);
var msg = map__46980__$1;
var msg_name = cljs.core.get.call(null,map__46980__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46978__$1;
var pred__46982 = cljs.core._EQ_;
var expr__46983 = msg_name;
if(cljs.core.truth_(pred__46982.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46983))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46982.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46983))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46974,map__46974__$1,on_compile_warning,on_compile_fail))
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
return (function (state_47211){
var state_val_47212 = (state_47211[(1)]);
if((state_val_47212 === (7))){
var inst_47131 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47131)){
var statearr_47213_47263 = state_47211__$1;
(statearr_47213_47263[(1)] = (8));

} else {
var statearr_47214_47264 = state_47211__$1;
(statearr_47214_47264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (20))){
var inst_47205 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47215_47265 = state_47211__$1;
(statearr_47215_47265[(2)] = inst_47205);

(statearr_47215_47265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (27))){
var inst_47201 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47216_47266 = state_47211__$1;
(statearr_47216_47266[(2)] = inst_47201);

(statearr_47216_47266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (1))){
var inst_47124 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47124)){
var statearr_47217_47267 = state_47211__$1;
(statearr_47217_47267[(1)] = (2));

} else {
var statearr_47218_47268 = state_47211__$1;
(statearr_47218_47268[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (24))){
var inst_47203 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47219_47269 = state_47211__$1;
(statearr_47219_47269[(2)] = inst_47203);

(statearr_47219_47269[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (4))){
var inst_47209 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47211__$1,inst_47209);
} else {
if((state_val_47212 === (15))){
var inst_47207 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47220_47270 = state_47211__$1;
(statearr_47220_47270[(2)] = inst_47207);

(statearr_47220_47270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (21))){
var inst_47160 = (state_47211[(2)]);
var inst_47161 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47162 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47161);
var state_47211__$1 = (function (){var statearr_47221 = state_47211;
(statearr_47221[(7)] = inst_47160);

return statearr_47221;
})();
var statearr_47222_47271 = state_47211__$1;
(statearr_47222_47271[(2)] = inst_47162);

(statearr_47222_47271[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (31))){
var inst_47190 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47190)){
var statearr_47223_47272 = state_47211__$1;
(statearr_47223_47272[(1)] = (34));

} else {
var statearr_47224_47273 = state_47211__$1;
(statearr_47224_47273[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (32))){
var inst_47199 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47225_47274 = state_47211__$1;
(statearr_47225_47274[(2)] = inst_47199);

(statearr_47225_47274[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (33))){
var inst_47186 = (state_47211[(2)]);
var inst_47187 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47188 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47187);
var state_47211__$1 = (function (){var statearr_47226 = state_47211;
(statearr_47226[(8)] = inst_47186);

return statearr_47226;
})();
var statearr_47227_47275 = state_47211__$1;
(statearr_47227_47275[(2)] = inst_47188);

(statearr_47227_47275[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (13))){
var inst_47145 = figwheel.client.heads_up.clear.call(null);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(16),inst_47145);
} else {
if((state_val_47212 === (22))){
var inst_47166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47167 = figwheel.client.heads_up.append_warning_message.call(null,inst_47166);
var state_47211__$1 = state_47211;
var statearr_47228_47276 = state_47211__$1;
(statearr_47228_47276[(2)] = inst_47167);

(statearr_47228_47276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (36))){
var inst_47197 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47229_47277 = state_47211__$1;
(statearr_47229_47277[(2)] = inst_47197);

(statearr_47229_47277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (29))){
var inst_47177 = (state_47211[(2)]);
var inst_47178 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47179 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47178);
var state_47211__$1 = (function (){var statearr_47230 = state_47211;
(statearr_47230[(9)] = inst_47177);

return statearr_47230;
})();
var statearr_47231_47278 = state_47211__$1;
(statearr_47231_47278[(2)] = inst_47179);

(statearr_47231_47278[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (6))){
var inst_47126 = (state_47211[(10)]);
var state_47211__$1 = state_47211;
var statearr_47232_47279 = state_47211__$1;
(statearr_47232_47279[(2)] = inst_47126);

(statearr_47232_47279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (28))){
var inst_47173 = (state_47211[(2)]);
var inst_47174 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47175 = figwheel.client.heads_up.display_warning.call(null,inst_47174);
var state_47211__$1 = (function (){var statearr_47233 = state_47211;
(statearr_47233[(11)] = inst_47173);

return statearr_47233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(29),inst_47175);
} else {
if((state_val_47212 === (25))){
var inst_47171 = figwheel.client.heads_up.clear.call(null);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(28),inst_47171);
} else {
if((state_val_47212 === (34))){
var inst_47192 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(37),inst_47192);
} else {
if((state_val_47212 === (17))){
var inst_47151 = (state_47211[(2)]);
var inst_47152 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47153 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47152);
var state_47211__$1 = (function (){var statearr_47234 = state_47211;
(statearr_47234[(12)] = inst_47151);

return statearr_47234;
})();
var statearr_47235_47280 = state_47211__$1;
(statearr_47235_47280[(2)] = inst_47153);

(statearr_47235_47280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (3))){
var inst_47143 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47143)){
var statearr_47236_47281 = state_47211__$1;
(statearr_47236_47281[(1)] = (13));

} else {
var statearr_47237_47282 = state_47211__$1;
(statearr_47237_47282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (12))){
var inst_47139 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47238_47283 = state_47211__$1;
(statearr_47238_47283[(2)] = inst_47139);

(statearr_47238_47283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (2))){
var inst_47126 = (state_47211[(10)]);
var inst_47126__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47211__$1 = (function (){var statearr_47239 = state_47211;
(statearr_47239[(10)] = inst_47126__$1);

return statearr_47239;
})();
if(cljs.core.truth_(inst_47126__$1)){
var statearr_47240_47284 = state_47211__$1;
(statearr_47240_47284[(1)] = (5));

} else {
var statearr_47241_47285 = state_47211__$1;
(statearr_47241_47285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (23))){
var inst_47169 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47169)){
var statearr_47242_47286 = state_47211__$1;
(statearr_47242_47286[(1)] = (25));

} else {
var statearr_47243_47287 = state_47211__$1;
(statearr_47243_47287[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (35))){
var state_47211__$1 = state_47211;
var statearr_47244_47288 = state_47211__$1;
(statearr_47244_47288[(2)] = null);

(statearr_47244_47288[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (19))){
var inst_47164 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47164)){
var statearr_47245_47289 = state_47211__$1;
(statearr_47245_47289[(1)] = (22));

} else {
var statearr_47246_47290 = state_47211__$1;
(statearr_47246_47290[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (11))){
var inst_47135 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47247_47291 = state_47211__$1;
(statearr_47247_47291[(2)] = inst_47135);

(statearr_47247_47291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (9))){
var inst_47137 = figwheel.client.heads_up.clear.call(null);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(12),inst_47137);
} else {
if((state_val_47212 === (5))){
var inst_47128 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47211__$1 = state_47211;
var statearr_47248_47292 = state_47211__$1;
(statearr_47248_47292[(2)] = inst_47128);

(statearr_47248_47292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (14))){
var inst_47155 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47155)){
var statearr_47249_47293 = state_47211__$1;
(statearr_47249_47293[(1)] = (18));

} else {
var statearr_47250_47294 = state_47211__$1;
(statearr_47250_47294[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (26))){
var inst_47181 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47211__$1 = state_47211;
if(cljs.core.truth_(inst_47181)){
var statearr_47251_47295 = state_47211__$1;
(statearr_47251_47295[(1)] = (30));

} else {
var statearr_47252_47296 = state_47211__$1;
(statearr_47252_47296[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (16))){
var inst_47147 = (state_47211[(2)]);
var inst_47148 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47149 = figwheel.client.heads_up.display_exception.call(null,inst_47148);
var state_47211__$1 = (function (){var statearr_47253 = state_47211;
(statearr_47253[(13)] = inst_47147);

return statearr_47253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(17),inst_47149);
} else {
if((state_val_47212 === (30))){
var inst_47183 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47184 = figwheel.client.heads_up.display_warning.call(null,inst_47183);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(33),inst_47184);
} else {
if((state_val_47212 === (10))){
var inst_47141 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47254_47297 = state_47211__$1;
(statearr_47254_47297[(2)] = inst_47141);

(statearr_47254_47297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (18))){
var inst_47157 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47158 = figwheel.client.heads_up.display_exception.call(null,inst_47157);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(21),inst_47158);
} else {
if((state_val_47212 === (37))){
var inst_47194 = (state_47211[(2)]);
var state_47211__$1 = state_47211;
var statearr_47255_47298 = state_47211__$1;
(statearr_47255_47298[(2)] = inst_47194);

(statearr_47255_47298[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47212 === (8))){
var inst_47133 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47211__$1 = state_47211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47211__$1,(11),inst_47133);
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
var statearr_47259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47259[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__);

(statearr_47259[(1)] = (1));

return statearr_47259;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____1 = (function (state_47211){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_47211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e47260){if((e47260 instanceof Object)){
var ex__28500__auto__ = e47260;
var statearr_47261_47299 = state_47211;
(statearr_47261_47299[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47300 = state_47211;
state_47211 = G__47300;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__ = function(state_47211){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____1.call(this,state_47211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__,msg_hist,msg_names,msg))
})();
var state__28610__auto__ = (function (){var statearr_47262 = f__28609__auto__.call(null);
(statearr_47262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_47262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__,msg_hist,msg_names,msg))
);

return c__28608__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28608__auto___47363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___47363,ch){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___47363,ch){
return (function (state_47346){
var state_val_47347 = (state_47346[(1)]);
if((state_val_47347 === (1))){
var state_47346__$1 = state_47346;
var statearr_47348_47364 = state_47346__$1;
(statearr_47348_47364[(2)] = null);

(statearr_47348_47364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (2))){
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(4),ch);
} else {
if((state_val_47347 === (3))){
var inst_47344 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47346__$1,inst_47344);
} else {
if((state_val_47347 === (4))){
var inst_47334 = (state_47346[(7)]);
var inst_47334__$1 = (state_47346[(2)]);
var state_47346__$1 = (function (){var statearr_47349 = state_47346;
(statearr_47349[(7)] = inst_47334__$1);

return statearr_47349;
})();
if(cljs.core.truth_(inst_47334__$1)){
var statearr_47350_47365 = state_47346__$1;
(statearr_47350_47365[(1)] = (5));

} else {
var statearr_47351_47366 = state_47346__$1;
(statearr_47351_47366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (5))){
var inst_47334 = (state_47346[(7)]);
var inst_47336 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47334);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(8),inst_47336);
} else {
if((state_val_47347 === (6))){
var state_47346__$1 = state_47346;
var statearr_47352_47367 = state_47346__$1;
(statearr_47352_47367[(2)] = null);

(statearr_47352_47367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (7))){
var inst_47342 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47353_47368 = state_47346__$1;
(statearr_47353_47368[(2)] = inst_47342);

(statearr_47353_47368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (8))){
var inst_47338 = (state_47346[(2)]);
var state_47346__$1 = (function (){var statearr_47354 = state_47346;
(statearr_47354[(8)] = inst_47338);

return statearr_47354;
})();
var statearr_47355_47369 = state_47346__$1;
(statearr_47355_47369[(2)] = null);

(statearr_47355_47369[(1)] = (2));


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
});})(c__28608__auto___47363,ch))
;
return ((function (switch__28496__auto__,c__28608__auto___47363,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28497__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28497__auto____0 = (function (){
var statearr_47359 = [null,null,null,null,null,null,null,null,null];
(statearr_47359[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28497__auto__);

(statearr_47359[(1)] = (1));

return statearr_47359;
});
var figwheel$client$heads_up_plugin_$_state_machine__28497__auto____1 = (function (state_47346){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_47346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e47360){if((e47360 instanceof Object)){
var ex__28500__auto__ = e47360;
var statearr_47361_47370 = state_47346;
(statearr_47361_47370[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47371 = state_47346;
state_47346 = G__47371;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28497__auto__ = function(state_47346){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28497__auto____1.call(this,state_47346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28497__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28497__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___47363,ch))
})();
var state__28610__auto__ = (function (){var statearr_47362 = f__28609__auto__.call(null);
(statearr_47362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___47363);

return statearr_47362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___47363,ch))
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
return (function (state_47392){
var state_val_47393 = (state_47392[(1)]);
if((state_val_47393 === (1))){
var inst_47387 = cljs.core.async.timeout.call(null,(3000));
var state_47392__$1 = state_47392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47392__$1,(2),inst_47387);
} else {
if((state_val_47393 === (2))){
var inst_47389 = (state_47392[(2)]);
var inst_47390 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47392__$1 = (function (){var statearr_47394 = state_47392;
(statearr_47394[(7)] = inst_47389);

return statearr_47394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47392__$1,inst_47390);
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
var statearr_47398 = [null,null,null,null,null,null,null,null];
(statearr_47398[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__);

(statearr_47398[(1)] = (1));

return statearr_47398;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____1 = (function (state_47392){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_47392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e47399){if((e47399 instanceof Object)){
var ex__28500__auto__ = e47399;
var statearr_47400_47402 = state_47392;
(statearr_47400_47402[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47403 = state_47392;
state_47392 = G__47403;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__ = function(state_47392){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____1.call(this,state_47392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28497__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_47401 = f__28609__auto__.call(null);
(statearr_47401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_47401;
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
return (function (state_47426){
var state_val_47427 = (state_47426[(1)]);
if((state_val_47427 === (1))){
var inst_47420 = cljs.core.async.timeout.call(null,(2000));
var state_47426__$1 = state_47426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47426__$1,(2),inst_47420);
} else {
if((state_val_47427 === (2))){
var inst_47422 = (state_47426[(2)]);
var inst_47423 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_47424 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47423);
var state_47426__$1 = (function (){var statearr_47428 = state_47426;
(statearr_47428[(7)] = inst_47422);

return statearr_47428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47426__$1,inst_47424);
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
var statearr_47432 = [null,null,null,null,null,null,null,null];
(statearr_47432[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__);

(statearr_47432[(1)] = (1));

return statearr_47432;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____1 = (function (state_47426){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_47426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e47433){if((e47433 instanceof Object)){
var ex__28500__auto__ = e47433;
var statearr_47434_47436 = state_47426;
(statearr_47434_47436[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47437 = state_47426;
state_47426 = G__47437;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__ = function(state_47426){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____1.call(this,state_47426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28610__auto__ = (function (){var statearr_47435 = f__28609__auto__.call(null);
(statearr_47435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_47435;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47438){
var map__47442 = p__47438;
var map__47442__$1 = ((((!((map__47442 == null)))?((((map__47442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47442):map__47442);
var file = cljs.core.get.call(null,map__47442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47442__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47442__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__47444 = "";
var G__47444__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__47444),cljs.core.str("file "),cljs.core.str(file)].join(''):G__47444);
var G__47444__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__47444__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__47444__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__47444__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__47444__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47445){
var map__47452 = p__47445;
var map__47452__$1 = ((((!((map__47452 == null)))?((((map__47452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47452):map__47452);
var ed = map__47452__$1;
var formatted_exception = cljs.core.get.call(null,map__47452__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47452__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47452__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47454_47458 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47455_47459 = null;
var count__47456_47460 = (0);
var i__47457_47461 = (0);
while(true){
if((i__47457_47461 < count__47456_47460)){
var msg_47462 = cljs.core._nth.call(null,chunk__47455_47459,i__47457_47461);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47462);

var G__47463 = seq__47454_47458;
var G__47464 = chunk__47455_47459;
var G__47465 = count__47456_47460;
var G__47466 = (i__47457_47461 + (1));
seq__47454_47458 = G__47463;
chunk__47455_47459 = G__47464;
count__47456_47460 = G__47465;
i__47457_47461 = G__47466;
continue;
} else {
var temp__4657__auto___47467 = cljs.core.seq.call(null,seq__47454_47458);
if(temp__4657__auto___47467){
var seq__47454_47468__$1 = temp__4657__auto___47467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47454_47468__$1)){
var c__25601__auto___47469 = cljs.core.chunk_first.call(null,seq__47454_47468__$1);
var G__47470 = cljs.core.chunk_rest.call(null,seq__47454_47468__$1);
var G__47471 = c__25601__auto___47469;
var G__47472 = cljs.core.count.call(null,c__25601__auto___47469);
var G__47473 = (0);
seq__47454_47458 = G__47470;
chunk__47455_47459 = G__47471;
count__47456_47460 = G__47472;
i__47457_47461 = G__47473;
continue;
} else {
var msg_47474 = cljs.core.first.call(null,seq__47454_47468__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47474);

var G__47475 = cljs.core.next.call(null,seq__47454_47468__$1);
var G__47476 = null;
var G__47477 = (0);
var G__47478 = (0);
seq__47454_47458 = G__47475;
chunk__47455_47459 = G__47476;
count__47456_47460 = G__47477;
i__47457_47461 = G__47478;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47479){
var map__47482 = p__47479;
var map__47482__$1 = ((((!((map__47482 == null)))?((((map__47482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47482):map__47482);
var w = map__47482__$1;
var message = cljs.core.get.call(null,map__47482__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__47494 = cljs.core.seq.call(null,plugins);
var chunk__47495 = null;
var count__47496 = (0);
var i__47497 = (0);
while(true){
if((i__47497 < count__47496)){
var vec__47498 = cljs.core._nth.call(null,chunk__47495,i__47497);
var k = cljs.core.nth.call(null,vec__47498,(0),null);
var plugin = cljs.core.nth.call(null,vec__47498,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47504 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47494,chunk__47495,count__47496,i__47497,pl_47504,vec__47498,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47504.call(null,msg_hist);
});})(seq__47494,chunk__47495,count__47496,i__47497,pl_47504,vec__47498,k,plugin))
);
} else {
}

var G__47505 = seq__47494;
var G__47506 = chunk__47495;
var G__47507 = count__47496;
var G__47508 = (i__47497 + (1));
seq__47494 = G__47505;
chunk__47495 = G__47506;
count__47496 = G__47507;
i__47497 = G__47508;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47494);
if(temp__4657__auto__){
var seq__47494__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47494__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__47494__$1);
var G__47509 = cljs.core.chunk_rest.call(null,seq__47494__$1);
var G__47510 = c__25601__auto__;
var G__47511 = cljs.core.count.call(null,c__25601__auto__);
var G__47512 = (0);
seq__47494 = G__47509;
chunk__47495 = G__47510;
count__47496 = G__47511;
i__47497 = G__47512;
continue;
} else {
var vec__47501 = cljs.core.first.call(null,seq__47494__$1);
var k = cljs.core.nth.call(null,vec__47501,(0),null);
var plugin = cljs.core.nth.call(null,vec__47501,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47513 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47494,chunk__47495,count__47496,i__47497,pl_47513,vec__47501,k,plugin,seq__47494__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47513.call(null,msg_hist);
});})(seq__47494,chunk__47495,count__47496,i__47497,pl_47513,vec__47501,k,plugin,seq__47494__$1,temp__4657__auto__))
);
} else {
}

var G__47514 = cljs.core.next.call(null,seq__47494__$1);
var G__47515 = null;
var G__47516 = (0);
var G__47517 = (0);
seq__47494 = G__47514;
chunk__47495 = G__47515;
count__47496 = G__47516;
i__47497 = G__47517;
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
var args47518 = [];
var len__25865__auto___47525 = arguments.length;
var i__25866__auto___47526 = (0);
while(true){
if((i__25866__auto___47526 < len__25865__auto___47525)){
args47518.push((arguments[i__25866__auto___47526]));

var G__47527 = (i__25866__auto___47526 + (1));
i__25866__auto___47526 = G__47527;
continue;
} else {
}
break;
}

var G__47520 = args47518.length;
switch (G__47520) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47518.length)].join('')));

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

var seq__47521_47529 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47522_47530 = null;
var count__47523_47531 = (0);
var i__47524_47532 = (0);
while(true){
if((i__47524_47532 < count__47523_47531)){
var msg_47533 = cljs.core._nth.call(null,chunk__47522_47530,i__47524_47532);
figwheel.client.socket.handle_incoming_message.call(null,msg_47533);

var G__47534 = seq__47521_47529;
var G__47535 = chunk__47522_47530;
var G__47536 = count__47523_47531;
var G__47537 = (i__47524_47532 + (1));
seq__47521_47529 = G__47534;
chunk__47522_47530 = G__47535;
count__47523_47531 = G__47536;
i__47524_47532 = G__47537;
continue;
} else {
var temp__4657__auto___47538 = cljs.core.seq.call(null,seq__47521_47529);
if(temp__4657__auto___47538){
var seq__47521_47539__$1 = temp__4657__auto___47538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47521_47539__$1)){
var c__25601__auto___47540 = cljs.core.chunk_first.call(null,seq__47521_47539__$1);
var G__47541 = cljs.core.chunk_rest.call(null,seq__47521_47539__$1);
var G__47542 = c__25601__auto___47540;
var G__47543 = cljs.core.count.call(null,c__25601__auto___47540);
var G__47544 = (0);
seq__47521_47529 = G__47541;
chunk__47522_47530 = G__47542;
count__47523_47531 = G__47543;
i__47524_47532 = G__47544;
continue;
} else {
var msg_47545 = cljs.core.first.call(null,seq__47521_47539__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47545);

var G__47546 = cljs.core.next.call(null,seq__47521_47539__$1);
var G__47547 = null;
var G__47548 = (0);
var G__47549 = (0);
seq__47521_47529 = G__47546;
chunk__47522_47530 = G__47547;
count__47523_47531 = G__47548;
i__47524_47532 = G__47549;
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
var len__25865__auto___47554 = arguments.length;
var i__25866__auto___47555 = (0);
while(true){
if((i__25866__auto___47555 < len__25865__auto___47554)){
args__25872__auto__.push((arguments[i__25866__auto___47555]));

var G__47556 = (i__25866__auto___47555 + (1));
i__25866__auto___47555 = G__47556;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47551){
var map__47552 = p__47551;
var map__47552__$1 = ((((!((map__47552 == null)))?((((map__47552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47552):map__47552);
var opts = map__47552__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47550){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47550));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e47558){if((e47558 instanceof Error)){
var e = e47558;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e47558;

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
return (function (p__47562){
var map__47563 = p__47562;
var map__47563__$1 = ((((!((map__47563 == null)))?((((map__47563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47563):map__47563);
var msg_name = cljs.core.get.call(null,map__47563__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1475623458767