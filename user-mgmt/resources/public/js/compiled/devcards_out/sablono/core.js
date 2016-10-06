// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__32016__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32013 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32014 = cljs.core.seq.call(null,vec__32013);
var first__32015 = cljs.core.first.call(null,seq__32014);
var seq__32014__$1 = cljs.core.next.call(null,seq__32014);
var tag = first__32015;
var body = seq__32014__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32017__i = 0, G__32017__a = new Array(arguments.length -  0);
while (G__32017__i < G__32017__a.length) {G__32017__a[G__32017__i] = arguments[G__32017__i + 0]; ++G__32017__i;}
  args = new cljs.core.IndexedSeq(G__32017__a,0);
} 
return G__32016__delegate.call(this,args);};
G__32016.cljs$lang$maxFixedArity = 0;
G__32016.cljs$lang$applyTo = (function (arglist__32018){
var args = cljs.core.seq(arglist__32018);
return G__32016__delegate(args);
});
G__32016.cljs$core$IFn$_invoke$arity$variadic = G__32016__delegate;
return G__32016;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25570__auto__ = (function sablono$core$update_arglists_$_iter__32023(s__32024){
return (new cljs.core.LazySeq(null,(function (){
var s__32024__$1 = s__32024;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32024__$1);
if(temp__4657__auto__){
var s__32024__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32024__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32024__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32026 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32025 = (0);
while(true){
if((i__32025 < size__25569__auto__)){
var args = cljs.core._nth.call(null,c__25568__auto__,i__32025);
cljs.core.chunk_append.call(null,b__32026,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32027 = (i__32025 + (1));
i__32025 = G__32027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32026),sablono$core$update_arglists_$_iter__32023.call(null,cljs.core.chunk_rest.call(null,s__32024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32026),null);
}
} else {
var args = cljs.core.first.call(null,s__32024__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32023.call(null,cljs.core.rest.call(null,s__32024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32033 = arguments.length;
var i__25866__auto___32034 = (0);
while(true){
if((i__25866__auto___32034 < len__25865__auto___32033)){
args__25872__auto__.push((arguments[i__25866__auto___32034]));

var G__32035 = (i__25866__auto___32034 + (1));
i__25866__auto___32034 = G__32035;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25570__auto__ = (function sablono$core$iter__32029(s__32030){
return (new cljs.core.LazySeq(null,(function (){
var s__32030__$1 = s__32030;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32030__$1);
if(temp__4657__auto__){
var s__32030__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32030__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32030__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32032 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32031 = (0);
while(true){
if((i__32031 < size__25569__auto__)){
var style = cljs.core._nth.call(null,c__25568__auto__,i__32031);
cljs.core.chunk_append.call(null,b__32032,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32036 = (i__32031 + (1));
i__32031 = G__32036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32032),sablono$core$iter__32029.call(null,cljs.core.chunk_rest.call(null,s__32030__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32032),null);
}
} else {
var style = cljs.core.first.call(null,s__32030__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32029.call(null,cljs.core.rest.call(null,s__32030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq32028){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32028));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to32037 = (function sablono$core$link_to32037(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32040 = arguments.length;
var i__25866__auto___32041 = (0);
while(true){
if((i__25866__auto___32041 < len__25865__auto___32040)){
args__25872__auto__.push((arguments[i__25866__auto___32041]));

var G__32042 = (i__25866__auto___32041 + (1));
i__25866__auto___32041 = G__32042;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32037.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.link_to32037.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32037.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32037.cljs$lang$applyTo = (function (seq32038){
var G__32039 = cljs.core.first.call(null,seq32038);
var seq32038__$1 = cljs.core.next.call(null,seq32038);
return sablono.core.link_to32037.cljs$core$IFn$_invoke$arity$variadic(G__32039,seq32038__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32037);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32043 = (function sablono$core$mail_to32043(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32050 = arguments.length;
var i__25866__auto___32051 = (0);
while(true){
if((i__25866__auto___32051 < len__25865__auto___32050)){
args__25872__auto__.push((arguments[i__25866__auto___32051]));

var G__32052 = (i__25866__auto___32051 + (1));
i__25866__auto___32051 = G__32052;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32043.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.mail_to32043.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32046){
var vec__32047 = p__32046;
var content = cljs.core.nth.call(null,vec__32047,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24790__auto__ = content;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32043.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32043.cljs$lang$applyTo = (function (seq32044){
var G__32045 = cljs.core.first.call(null,seq32044);
var seq32044__$1 = cljs.core.next.call(null,seq32044);
return sablono.core.mail_to32043.cljs$core$IFn$_invoke$arity$variadic(G__32045,seq32044__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32043);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32053 = (function sablono$core$unordered_list32053(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25570__auto__ = (function sablono$core$unordered_list32053_$_iter__32058(s__32059){
return (new cljs.core.LazySeq(null,(function (){
var s__32059__$1 = s__32059;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32059__$1);
if(temp__4657__auto__){
var s__32059__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32059__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32059__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32061 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32060 = (0);
while(true){
if((i__32060 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__32060);
cljs.core.chunk_append.call(null,b__32061,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32062 = (i__32060 + (1));
i__32060 = G__32062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32061),sablono$core$unordered_list32053_$_iter__32058.call(null,cljs.core.chunk_rest.call(null,s__32059__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32061),null);
}
} else {
var x = cljs.core.first.call(null,s__32059__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32053_$_iter__32058.call(null,cljs.core.rest.call(null,s__32059__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32053);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32063 = (function sablono$core$ordered_list32063(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25570__auto__ = (function sablono$core$ordered_list32063_$_iter__32068(s__32069){
return (new cljs.core.LazySeq(null,(function (){
var s__32069__$1 = s__32069;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32069__$1);
if(temp__4657__auto__){
var s__32069__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32069__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32069__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32071 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32070 = (0);
while(true){
if((i__32070 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__32070);
cljs.core.chunk_append.call(null,b__32071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32072 = (i__32070 + (1));
i__32070 = G__32072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32071),sablono$core$ordered_list32063_$_iter__32068.call(null,cljs.core.chunk_rest.call(null,s__32069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32071),null);
}
} else {
var x = cljs.core.first.call(null,s__32069__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32063_$_iter__32068.call(null,cljs.core.rest.call(null,s__32069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32063);
/**
 * Create an image element.
 */
sablono.core.image32073 = (function sablono$core$image32073(var_args){
var args32074 = [];
var len__25865__auto___32077 = arguments.length;
var i__25866__auto___32078 = (0);
while(true){
if((i__25866__auto___32078 < len__25865__auto___32077)){
args32074.push((arguments[i__25866__auto___32078]));

var G__32079 = (i__25866__auto___32078 + (1));
i__25866__auto___32078 = G__32079;
continue;
} else {
}
break;
}

var G__32076 = args32074.length;
switch (G__32076) {
case 1:
return sablono.core.image32073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32074.length)].join('')));

}
});

sablono.core.image32073.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32073.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32073.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32073);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32081_SHARP_,p2__32082_SHARP_){
return [cljs.core.str(p1__32081_SHARP_),cljs.core.str("["),cljs.core.str(p2__32082_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32083_SHARP_,p2__32084_SHARP_){
return [cljs.core.str(p1__32083_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32084_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field32085 = (function sablono$core$color_field32085(var_args){
var args32086 = [];
var len__25865__auto___32153 = arguments.length;
var i__25866__auto___32154 = (0);
while(true){
if((i__25866__auto___32154 < len__25865__auto___32153)){
args32086.push((arguments[i__25866__auto___32154]));

var G__32155 = (i__25866__auto___32154 + (1));
i__25866__auto___32154 = G__32155;
continue;
} else {
}
break;
}

var G__32088 = args32086.length;
switch (G__32088) {
case 1:
return sablono.core.color_field32085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32086.length)].join('')));

}
});

sablono.core.color_field32085.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.color_field32085.call(null,name__32000__auto__,null);
});

sablono.core.color_field32085.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.color_field32085.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32085);

/**
 * Creates a date input field.
 */
sablono.core.date_field32089 = (function sablono$core$date_field32089(var_args){
var args32090 = [];
var len__25865__auto___32157 = arguments.length;
var i__25866__auto___32158 = (0);
while(true){
if((i__25866__auto___32158 < len__25865__auto___32157)){
args32090.push((arguments[i__25866__auto___32158]));

var G__32159 = (i__25866__auto___32158 + (1));
i__25866__auto___32158 = G__32159;
continue;
} else {
}
break;
}

var G__32092 = args32090.length;
switch (G__32092) {
case 1:
return sablono.core.date_field32089.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32090.length)].join('')));

}
});

sablono.core.date_field32089.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.date_field32089.call(null,name__32000__auto__,null);
});

sablono.core.date_field32089.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.date_field32089.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32089);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32093 = (function sablono$core$datetime_field32093(var_args){
var args32094 = [];
var len__25865__auto___32161 = arguments.length;
var i__25866__auto___32162 = (0);
while(true){
if((i__25866__auto___32162 < len__25865__auto___32161)){
args32094.push((arguments[i__25866__auto___32162]));

var G__32163 = (i__25866__auto___32162 + (1));
i__25866__auto___32162 = G__32163;
continue;
} else {
}
break;
}

var G__32096 = args32094.length;
switch (G__32096) {
case 1:
return sablono.core.datetime_field32093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32094.length)].join('')));

}
});

sablono.core.datetime_field32093.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.datetime_field32093.call(null,name__32000__auto__,null);
});

sablono.core.datetime_field32093.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.datetime_field32093.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32093);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32097 = (function sablono$core$datetime_local_field32097(var_args){
var args32098 = [];
var len__25865__auto___32165 = arguments.length;
var i__25866__auto___32166 = (0);
while(true){
if((i__25866__auto___32166 < len__25865__auto___32165)){
args32098.push((arguments[i__25866__auto___32166]));

var G__32167 = (i__25866__auto___32166 + (1));
i__25866__auto___32166 = G__32167;
continue;
} else {
}
break;
}

var G__32100 = args32098.length;
switch (G__32100) {
case 1:
return sablono.core.datetime_local_field32097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32098.length)].join('')));

}
});

sablono.core.datetime_local_field32097.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.datetime_local_field32097.call(null,name__32000__auto__,null);
});

sablono.core.datetime_local_field32097.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.datetime_local_field32097.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32097);

/**
 * Creates a email input field.
 */
sablono.core.email_field32101 = (function sablono$core$email_field32101(var_args){
var args32102 = [];
var len__25865__auto___32169 = arguments.length;
var i__25866__auto___32170 = (0);
while(true){
if((i__25866__auto___32170 < len__25865__auto___32169)){
args32102.push((arguments[i__25866__auto___32170]));

var G__32171 = (i__25866__auto___32170 + (1));
i__25866__auto___32170 = G__32171;
continue;
} else {
}
break;
}

var G__32104 = args32102.length;
switch (G__32104) {
case 1:
return sablono.core.email_field32101.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32101.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32102.length)].join('')));

}
});

sablono.core.email_field32101.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.email_field32101.call(null,name__32000__auto__,null);
});

sablono.core.email_field32101.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.email_field32101.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32101);

/**
 * Creates a file input field.
 */
sablono.core.file_field32105 = (function sablono$core$file_field32105(var_args){
var args32106 = [];
var len__25865__auto___32173 = arguments.length;
var i__25866__auto___32174 = (0);
while(true){
if((i__25866__auto___32174 < len__25865__auto___32173)){
args32106.push((arguments[i__25866__auto___32174]));

var G__32175 = (i__25866__auto___32174 + (1));
i__25866__auto___32174 = G__32175;
continue;
} else {
}
break;
}

var G__32108 = args32106.length;
switch (G__32108) {
case 1:
return sablono.core.file_field32105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32106.length)].join('')));

}
});

sablono.core.file_field32105.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.file_field32105.call(null,name__32000__auto__,null);
});

sablono.core.file_field32105.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.file_field32105.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32105);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32109 = (function sablono$core$hidden_field32109(var_args){
var args32110 = [];
var len__25865__auto___32177 = arguments.length;
var i__25866__auto___32178 = (0);
while(true){
if((i__25866__auto___32178 < len__25865__auto___32177)){
args32110.push((arguments[i__25866__auto___32178]));

var G__32179 = (i__25866__auto___32178 + (1));
i__25866__auto___32178 = G__32179;
continue;
} else {
}
break;
}

var G__32112 = args32110.length;
switch (G__32112) {
case 1:
return sablono.core.hidden_field32109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32110.length)].join('')));

}
});

sablono.core.hidden_field32109.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.hidden_field32109.call(null,name__32000__auto__,null);
});

sablono.core.hidden_field32109.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.hidden_field32109.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32109);

/**
 * Creates a month input field.
 */
sablono.core.month_field32113 = (function sablono$core$month_field32113(var_args){
var args32114 = [];
var len__25865__auto___32181 = arguments.length;
var i__25866__auto___32182 = (0);
while(true){
if((i__25866__auto___32182 < len__25865__auto___32181)){
args32114.push((arguments[i__25866__auto___32182]));

var G__32183 = (i__25866__auto___32182 + (1));
i__25866__auto___32182 = G__32183;
continue;
} else {
}
break;
}

var G__32116 = args32114.length;
switch (G__32116) {
case 1:
return sablono.core.month_field32113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32114.length)].join('')));

}
});

sablono.core.month_field32113.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.month_field32113.call(null,name__32000__auto__,null);
});

sablono.core.month_field32113.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.month_field32113.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32113);

/**
 * Creates a number input field.
 */
sablono.core.number_field32117 = (function sablono$core$number_field32117(var_args){
var args32118 = [];
var len__25865__auto___32185 = arguments.length;
var i__25866__auto___32186 = (0);
while(true){
if((i__25866__auto___32186 < len__25865__auto___32185)){
args32118.push((arguments[i__25866__auto___32186]));

var G__32187 = (i__25866__auto___32186 + (1));
i__25866__auto___32186 = G__32187;
continue;
} else {
}
break;
}

var G__32120 = args32118.length;
switch (G__32120) {
case 1:
return sablono.core.number_field32117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32118.length)].join('')));

}
});

sablono.core.number_field32117.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.number_field32117.call(null,name__32000__auto__,null);
});

sablono.core.number_field32117.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.number_field32117.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32117);

/**
 * Creates a password input field.
 */
sablono.core.password_field32121 = (function sablono$core$password_field32121(var_args){
var args32122 = [];
var len__25865__auto___32189 = arguments.length;
var i__25866__auto___32190 = (0);
while(true){
if((i__25866__auto___32190 < len__25865__auto___32189)){
args32122.push((arguments[i__25866__auto___32190]));

var G__32191 = (i__25866__auto___32190 + (1));
i__25866__auto___32190 = G__32191;
continue;
} else {
}
break;
}

var G__32124 = args32122.length;
switch (G__32124) {
case 1:
return sablono.core.password_field32121.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32121.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32122.length)].join('')));

}
});

sablono.core.password_field32121.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.password_field32121.call(null,name__32000__auto__,null);
});

sablono.core.password_field32121.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.password_field32121.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32121);

/**
 * Creates a range input field.
 */
sablono.core.range_field32125 = (function sablono$core$range_field32125(var_args){
var args32126 = [];
var len__25865__auto___32193 = arguments.length;
var i__25866__auto___32194 = (0);
while(true){
if((i__25866__auto___32194 < len__25865__auto___32193)){
args32126.push((arguments[i__25866__auto___32194]));

var G__32195 = (i__25866__auto___32194 + (1));
i__25866__auto___32194 = G__32195;
continue;
} else {
}
break;
}

var G__32128 = args32126.length;
switch (G__32128) {
case 1:
return sablono.core.range_field32125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32126.length)].join('')));

}
});

sablono.core.range_field32125.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.range_field32125.call(null,name__32000__auto__,null);
});

sablono.core.range_field32125.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.range_field32125.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32125);

/**
 * Creates a search input field.
 */
sablono.core.search_field32129 = (function sablono$core$search_field32129(var_args){
var args32130 = [];
var len__25865__auto___32197 = arguments.length;
var i__25866__auto___32198 = (0);
while(true){
if((i__25866__auto___32198 < len__25865__auto___32197)){
args32130.push((arguments[i__25866__auto___32198]));

var G__32199 = (i__25866__auto___32198 + (1));
i__25866__auto___32198 = G__32199;
continue;
} else {
}
break;
}

var G__32132 = args32130.length;
switch (G__32132) {
case 1:
return sablono.core.search_field32129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32130.length)].join('')));

}
});

sablono.core.search_field32129.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.search_field32129.call(null,name__32000__auto__,null);
});

sablono.core.search_field32129.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.search_field32129.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32129);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32133 = (function sablono$core$tel_field32133(var_args){
var args32134 = [];
var len__25865__auto___32201 = arguments.length;
var i__25866__auto___32202 = (0);
while(true){
if((i__25866__auto___32202 < len__25865__auto___32201)){
args32134.push((arguments[i__25866__auto___32202]));

var G__32203 = (i__25866__auto___32202 + (1));
i__25866__auto___32202 = G__32203;
continue;
} else {
}
break;
}

var G__32136 = args32134.length;
switch (G__32136) {
case 1:
return sablono.core.tel_field32133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32134.length)].join('')));

}
});

sablono.core.tel_field32133.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.tel_field32133.call(null,name__32000__auto__,null);
});

sablono.core.tel_field32133.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.tel_field32133.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32133);

/**
 * Creates a text input field.
 */
sablono.core.text_field32137 = (function sablono$core$text_field32137(var_args){
var args32138 = [];
var len__25865__auto___32205 = arguments.length;
var i__25866__auto___32206 = (0);
while(true){
if((i__25866__auto___32206 < len__25865__auto___32205)){
args32138.push((arguments[i__25866__auto___32206]));

var G__32207 = (i__25866__auto___32206 + (1));
i__25866__auto___32206 = G__32207;
continue;
} else {
}
break;
}

var G__32140 = args32138.length;
switch (G__32140) {
case 1:
return sablono.core.text_field32137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32138.length)].join('')));

}
});

sablono.core.text_field32137.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.text_field32137.call(null,name__32000__auto__,null);
});

sablono.core.text_field32137.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.text_field32137.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32137);

/**
 * Creates a time input field.
 */
sablono.core.time_field32141 = (function sablono$core$time_field32141(var_args){
var args32142 = [];
var len__25865__auto___32209 = arguments.length;
var i__25866__auto___32210 = (0);
while(true){
if((i__25866__auto___32210 < len__25865__auto___32209)){
args32142.push((arguments[i__25866__auto___32210]));

var G__32211 = (i__25866__auto___32210 + (1));
i__25866__auto___32210 = G__32211;
continue;
} else {
}
break;
}

var G__32144 = args32142.length;
switch (G__32144) {
case 1:
return sablono.core.time_field32141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32142.length)].join('')));

}
});

sablono.core.time_field32141.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.time_field32141.call(null,name__32000__auto__,null);
});

sablono.core.time_field32141.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.time_field32141.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32141);

/**
 * Creates a url input field.
 */
sablono.core.url_field32145 = (function sablono$core$url_field32145(var_args){
var args32146 = [];
var len__25865__auto___32213 = arguments.length;
var i__25866__auto___32214 = (0);
while(true){
if((i__25866__auto___32214 < len__25865__auto___32213)){
args32146.push((arguments[i__25866__auto___32214]));

var G__32215 = (i__25866__auto___32214 + (1));
i__25866__auto___32214 = G__32215;
continue;
} else {
}
break;
}

var G__32148 = args32146.length;
switch (G__32148) {
case 1:
return sablono.core.url_field32145.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32146.length)].join('')));

}
});

sablono.core.url_field32145.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.url_field32145.call(null,name__32000__auto__,null);
});

sablono.core.url_field32145.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.url_field32145.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32145);

/**
 * Creates a week input field.
 */
sablono.core.week_field32149 = (function sablono$core$week_field32149(var_args){
var args32150 = [];
var len__25865__auto___32217 = arguments.length;
var i__25866__auto___32218 = (0);
while(true){
if((i__25866__auto___32218 < len__25865__auto___32217)){
args32150.push((arguments[i__25866__auto___32218]));

var G__32219 = (i__25866__auto___32218 + (1));
i__25866__auto___32218 = G__32219;
continue;
} else {
}
break;
}

var G__32152 = args32150.length;
switch (G__32152) {
case 1:
return sablono.core.week_field32149.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32149.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32150.length)].join('')));

}
});

sablono.core.week_field32149.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.week_field32149.call(null,name__32000__auto__,null);
});

sablono.core.week_field32149.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.week_field32149.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32149);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32221 = (function sablono$core$check_box32221(var_args){
var args32222 = [];
var len__25865__auto___32225 = arguments.length;
var i__25866__auto___32226 = (0);
while(true){
if((i__25866__auto___32226 < len__25865__auto___32225)){
args32222.push((arguments[i__25866__auto___32226]));

var G__32227 = (i__25866__auto___32226 + (1));
i__25866__auto___32226 = G__32227;
continue;
} else {
}
break;
}

var G__32224 = args32222.length;
switch (G__32224) {
case 1:
return sablono.core.check_box32221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32221.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32222.length)].join('')));

}
});

sablono.core.check_box32221.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32221.call(null,name,null);
});

sablono.core.check_box32221.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32221.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32221.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32221.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32221);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32229 = (function sablono$core$radio_button32229(var_args){
var args32230 = [];
var len__25865__auto___32233 = arguments.length;
var i__25866__auto___32234 = (0);
while(true){
if((i__25866__auto___32234 < len__25865__auto___32233)){
args32230.push((arguments[i__25866__auto___32234]));

var G__32235 = (i__25866__auto___32234 + (1));
i__25866__auto___32234 = G__32235;
continue;
} else {
}
break;
}

var G__32232 = args32230.length;
switch (G__32232) {
case 1:
return sablono.core.radio_button32229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32229.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32230.length)].join('')));

}
});

sablono.core.radio_button32229.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32229.call(null,group,null);
});

sablono.core.radio_button32229.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32229.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32229.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32229.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32229);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32237 = (function sablono$core$select_options32237(coll){
var iter__25570__auto__ = (function sablono$core$select_options32237_$_iter__32254(s__32255){
return (new cljs.core.LazySeq(null,(function (){
var s__32255__$1 = s__32255;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32255__$1);
if(temp__4657__auto__){
var s__32255__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32255__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32255__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32257 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32256 = (0);
while(true){
if((i__32256 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__32256);
cljs.core.chunk_append.call(null,b__32257,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32264 = x;
var text = cljs.core.nth.call(null,vec__32264,(0),null);
var val = cljs.core.nth.call(null,vec__32264,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32264,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32237.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32270 = (i__32256 + (1));
i__32256 = G__32270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32257),sablono$core$select_options32237_$_iter__32254.call(null,cljs.core.chunk_rest.call(null,s__32255__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32257),null);
}
} else {
var x = cljs.core.first.call(null,s__32255__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32267 = x;
var text = cljs.core.nth.call(null,vec__32267,(0),null);
var val = cljs.core.nth.call(null,vec__32267,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32267,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32237.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32237_$_iter__32254.call(null,cljs.core.rest.call(null,s__32255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32237);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32271 = (function sablono$core$drop_down32271(var_args){
var args32272 = [];
var len__25865__auto___32275 = arguments.length;
var i__25866__auto___32276 = (0);
while(true){
if((i__25866__auto___32276 < len__25865__auto___32275)){
args32272.push((arguments[i__25866__auto___32276]));

var G__32277 = (i__25866__auto___32276 + (1));
i__25866__auto___32276 = G__32277;
continue;
} else {
}
break;
}

var G__32274 = args32272.length;
switch (G__32274) {
case 2:
return sablono.core.drop_down32271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32271.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32272.length)].join('')));

}
});

sablono.core.drop_down32271.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32271.call(null,name,options,null);
});

sablono.core.drop_down32271.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32271.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32271);
/**
 * Creates a text area element.
 */
sablono.core.text_area32279 = (function sablono$core$text_area32279(var_args){
var args32280 = [];
var len__25865__auto___32283 = arguments.length;
var i__25866__auto___32284 = (0);
while(true){
if((i__25866__auto___32284 < len__25865__auto___32283)){
args32280.push((arguments[i__25866__auto___32284]));

var G__32285 = (i__25866__auto___32284 + (1));
i__25866__auto___32284 = G__32285;
continue;
} else {
}
break;
}

var G__32282 = args32280.length;
switch (G__32282) {
case 1:
return sablono.core.text_area32279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32280.length)].join('')));

}
});

sablono.core.text_area32279.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32279.call(null,name,null);
});

sablono.core.text_area32279.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32279.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32279);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32287 = (function sablono$core$label32287(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32287);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32288 = (function sablono$core$submit_button32288(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32288);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32289 = (function sablono$core$reset_button32289(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32289);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32290 = (function sablono$core$form_to32290(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32297 = arguments.length;
var i__25866__auto___32298 = (0);
while(true){
if((i__25866__auto___32298 < len__25865__auto___32297)){
args__25872__auto__.push((arguments[i__25866__auto___32298]));

var G__32299 = (i__25866__auto___32298 + (1));
i__25866__auto___32298 = G__32299;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32290.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.form_to32290.cljs$core$IFn$_invoke$arity$variadic = (function (p__32293,body){
var vec__32294 = p__32293;
var method = cljs.core.nth.call(null,vec__32294,(0),null);
var action = cljs.core.nth.call(null,vec__32294,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32290.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32290.cljs$lang$applyTo = (function (seq32291){
var G__32292 = cljs.core.first.call(null,seq32291);
var seq32291__$1 = cljs.core.next.call(null,seq32291);
return sablono.core.form_to32290.cljs$core$IFn$_invoke$arity$variadic(G__32292,seq32291__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32290);

//# sourceMappingURL=core.js.map?rel=1475620900275