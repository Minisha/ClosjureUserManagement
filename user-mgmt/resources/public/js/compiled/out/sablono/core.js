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
var G__39410__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__39407 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__39408 = cljs.core.seq.call(null,vec__39407);
var first__39409 = cljs.core.first.call(null,seq__39408);
var seq__39408__$1 = cljs.core.next.call(null,seq__39408);
var tag = first__39409;
var body = seq__39408__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__39410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39411__i = 0, G__39411__a = new Array(arguments.length -  0);
while (G__39411__i < G__39411__a.length) {G__39411__a[G__39411__i] = arguments[G__39411__i + 0]; ++G__39411__i;}
  args = new cljs.core.IndexedSeq(G__39411__a,0);
} 
return G__39410__delegate.call(this,args);};
G__39410.cljs$lang$maxFixedArity = 0;
G__39410.cljs$lang$applyTo = (function (arglist__39412){
var args = cljs.core.seq(arglist__39412);
return G__39410__delegate(args);
});
G__39410.cljs$core$IFn$_invoke$arity$variadic = G__39410__delegate;
return G__39410;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25570__auto__ = (function sablono$core$update_arglists_$_iter__39417(s__39418){
return (new cljs.core.LazySeq(null,(function (){
var s__39418__$1 = s__39418;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39418__$1);
if(temp__4657__auto__){
var s__39418__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39418__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39418__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39420 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39419 = (0);
while(true){
if((i__39419 < size__25569__auto__)){
var args = cljs.core._nth.call(null,c__25568__auto__,i__39419);
cljs.core.chunk_append.call(null,b__39420,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__39421 = (i__39419 + (1));
i__39419 = G__39421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39420),sablono$core$update_arglists_$_iter__39417.call(null,cljs.core.chunk_rest.call(null,s__39418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39420),null);
}
} else {
var args = cljs.core.first.call(null,s__39418__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__39417.call(null,cljs.core.rest.call(null,s__39418__$2)));
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
var len__25865__auto___39427 = arguments.length;
var i__25866__auto___39428 = (0);
while(true){
if((i__25866__auto___39428 < len__25865__auto___39427)){
args__25872__auto__.push((arguments[i__25866__auto___39428]));

var G__39429 = (i__25866__auto___39428 + (1));
i__25866__auto___39428 = G__39429;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25570__auto__ = (function sablono$core$iter__39423(s__39424){
return (new cljs.core.LazySeq(null,(function (){
var s__39424__$1 = s__39424;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39424__$1);
if(temp__4657__auto__){
var s__39424__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39424__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39424__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39426 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39425 = (0);
while(true){
if((i__39425 < size__25569__auto__)){
var style = cljs.core._nth.call(null,c__25568__auto__,i__39425);
cljs.core.chunk_append.call(null,b__39426,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__39430 = (i__39425 + (1));
i__39425 = G__39430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39426),sablono$core$iter__39423.call(null,cljs.core.chunk_rest.call(null,s__39424__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39426),null);
}
} else {
var style = cljs.core.first.call(null,s__39424__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__39423.call(null,cljs.core.rest.call(null,s__39424__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq39422){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39422));
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
sablono.core.link_to39431 = (function sablono$core$link_to39431(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39434 = arguments.length;
var i__25866__auto___39435 = (0);
while(true){
if((i__25866__auto___39435 < len__25865__auto___39434)){
args__25872__auto__.push((arguments[i__25866__auto___39435]));

var G__39436 = (i__25866__auto___39435 + (1));
i__25866__auto___39435 = G__39436;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to39431.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.link_to39431.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to39431.cljs$lang$maxFixedArity = (1);

sablono.core.link_to39431.cljs$lang$applyTo = (function (seq39432){
var G__39433 = cljs.core.first.call(null,seq39432);
var seq39432__$1 = cljs.core.next.call(null,seq39432);
return sablono.core.link_to39431.cljs$core$IFn$_invoke$arity$variadic(G__39433,seq39432__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to39431);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to39437 = (function sablono$core$mail_to39437(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39444 = arguments.length;
var i__25866__auto___39445 = (0);
while(true){
if((i__25866__auto___39445 < len__25865__auto___39444)){
args__25872__auto__.push((arguments[i__25866__auto___39445]));

var G__39446 = (i__25866__auto___39445 + (1));
i__25866__auto___39445 = G__39446;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to39437.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.mail_to39437.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__39440){
var vec__39441 = p__39440;
var content = cljs.core.nth.call(null,vec__39441,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24790__auto__ = content;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to39437.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to39437.cljs$lang$applyTo = (function (seq39438){
var G__39439 = cljs.core.first.call(null,seq39438);
var seq39438__$1 = cljs.core.next.call(null,seq39438);
return sablono.core.mail_to39437.cljs$core$IFn$_invoke$arity$variadic(G__39439,seq39438__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to39437);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list39447 = (function sablono$core$unordered_list39447(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25570__auto__ = (function sablono$core$unordered_list39447_$_iter__39452(s__39453){
return (new cljs.core.LazySeq(null,(function (){
var s__39453__$1 = s__39453;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39453__$1);
if(temp__4657__auto__){
var s__39453__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39453__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39453__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39455 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39454 = (0);
while(true){
if((i__39454 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__39454);
cljs.core.chunk_append.call(null,b__39455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39456 = (i__39454 + (1));
i__39454 = G__39456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39455),sablono$core$unordered_list39447_$_iter__39452.call(null,cljs.core.chunk_rest.call(null,s__39453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39455),null);
}
} else {
var x = cljs.core.first.call(null,s__39453__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list39447_$_iter__39452.call(null,cljs.core.rest.call(null,s__39453__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list39447);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list39457 = (function sablono$core$ordered_list39457(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25570__auto__ = (function sablono$core$ordered_list39457_$_iter__39462(s__39463){
return (new cljs.core.LazySeq(null,(function (){
var s__39463__$1 = s__39463;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39463__$1);
if(temp__4657__auto__){
var s__39463__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39463__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39463__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39465 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39464 = (0);
while(true){
if((i__39464 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__39464);
cljs.core.chunk_append.call(null,b__39465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__39466 = (i__39464 + (1));
i__39464 = G__39466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39465),sablono$core$ordered_list39457_$_iter__39462.call(null,cljs.core.chunk_rest.call(null,s__39463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39465),null);
}
} else {
var x = cljs.core.first.call(null,s__39463__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list39457_$_iter__39462.call(null,cljs.core.rest.call(null,s__39463__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list39457);
/**
 * Create an image element.
 */
sablono.core.image39467 = (function sablono$core$image39467(var_args){
var args39468 = [];
var len__25865__auto___39471 = arguments.length;
var i__25866__auto___39472 = (0);
while(true){
if((i__25866__auto___39472 < len__25865__auto___39471)){
args39468.push((arguments[i__25866__auto___39472]));

var G__39473 = (i__25866__auto___39472 + (1));
i__25866__auto___39472 = G__39473;
continue;
} else {
}
break;
}

var G__39470 = args39468.length;
switch (G__39470) {
case 1:
return sablono.core.image39467.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image39467.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39468.length)].join('')));

}
});

sablono.core.image39467.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image39467.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image39467.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image39467);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__39475_SHARP_,p2__39476_SHARP_){
return [cljs.core.str(p1__39475_SHARP_),cljs.core.str("["),cljs.core.str(p2__39476_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__39477_SHARP_,p2__39478_SHARP_){
return [cljs.core.str(p1__39477_SHARP_),cljs.core.str("-"),cljs.core.str(p2__39478_SHARP_)].join('');
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
sablono.core.color_field39479 = (function sablono$core$color_field39479(var_args){
var args39480 = [];
var len__25865__auto___39547 = arguments.length;
var i__25866__auto___39548 = (0);
while(true){
if((i__25866__auto___39548 < len__25865__auto___39547)){
args39480.push((arguments[i__25866__auto___39548]));

var G__39549 = (i__25866__auto___39548 + (1));
i__25866__auto___39548 = G__39549;
continue;
} else {
}
break;
}

var G__39482 = args39480.length;
switch (G__39482) {
case 1:
return sablono.core.color_field39479.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field39479.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39480.length)].join('')));

}
});

sablono.core.color_field39479.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.color_field39479.call(null,name__32000__auto__,null);
});

sablono.core.color_field39479.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.color_field39479.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field39479);

/**
 * Creates a date input field.
 */
sablono.core.date_field39483 = (function sablono$core$date_field39483(var_args){
var args39484 = [];
var len__25865__auto___39551 = arguments.length;
var i__25866__auto___39552 = (0);
while(true){
if((i__25866__auto___39552 < len__25865__auto___39551)){
args39484.push((arguments[i__25866__auto___39552]));

var G__39553 = (i__25866__auto___39552 + (1));
i__25866__auto___39552 = G__39553;
continue;
} else {
}
break;
}

var G__39486 = args39484.length;
switch (G__39486) {
case 1:
return sablono.core.date_field39483.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field39483.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39484.length)].join('')));

}
});

sablono.core.date_field39483.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.date_field39483.call(null,name__32000__auto__,null);
});

sablono.core.date_field39483.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.date_field39483.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field39483);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field39487 = (function sablono$core$datetime_field39487(var_args){
var args39488 = [];
var len__25865__auto___39555 = arguments.length;
var i__25866__auto___39556 = (0);
while(true){
if((i__25866__auto___39556 < len__25865__auto___39555)){
args39488.push((arguments[i__25866__auto___39556]));

var G__39557 = (i__25866__auto___39556 + (1));
i__25866__auto___39556 = G__39557;
continue;
} else {
}
break;
}

var G__39490 = args39488.length;
switch (G__39490) {
case 1:
return sablono.core.datetime_field39487.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field39487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39488.length)].join('')));

}
});

sablono.core.datetime_field39487.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.datetime_field39487.call(null,name__32000__auto__,null);
});

sablono.core.datetime_field39487.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.datetime_field39487.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field39487);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field39491 = (function sablono$core$datetime_local_field39491(var_args){
var args39492 = [];
var len__25865__auto___39559 = arguments.length;
var i__25866__auto___39560 = (0);
while(true){
if((i__25866__auto___39560 < len__25865__auto___39559)){
args39492.push((arguments[i__25866__auto___39560]));

var G__39561 = (i__25866__auto___39560 + (1));
i__25866__auto___39560 = G__39561;
continue;
} else {
}
break;
}

var G__39494 = args39492.length;
switch (G__39494) {
case 1:
return sablono.core.datetime_local_field39491.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field39491.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39492.length)].join('')));

}
});

sablono.core.datetime_local_field39491.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.datetime_local_field39491.call(null,name__32000__auto__,null);
});

sablono.core.datetime_local_field39491.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.datetime_local_field39491.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field39491);

/**
 * Creates a email input field.
 */
sablono.core.email_field39495 = (function sablono$core$email_field39495(var_args){
var args39496 = [];
var len__25865__auto___39563 = arguments.length;
var i__25866__auto___39564 = (0);
while(true){
if((i__25866__auto___39564 < len__25865__auto___39563)){
args39496.push((arguments[i__25866__auto___39564]));

var G__39565 = (i__25866__auto___39564 + (1));
i__25866__auto___39564 = G__39565;
continue;
} else {
}
break;
}

var G__39498 = args39496.length;
switch (G__39498) {
case 1:
return sablono.core.email_field39495.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field39495.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39496.length)].join('')));

}
});

sablono.core.email_field39495.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.email_field39495.call(null,name__32000__auto__,null);
});

sablono.core.email_field39495.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.email_field39495.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field39495);

/**
 * Creates a file input field.
 */
sablono.core.file_field39499 = (function sablono$core$file_field39499(var_args){
var args39500 = [];
var len__25865__auto___39567 = arguments.length;
var i__25866__auto___39568 = (0);
while(true){
if((i__25866__auto___39568 < len__25865__auto___39567)){
args39500.push((arguments[i__25866__auto___39568]));

var G__39569 = (i__25866__auto___39568 + (1));
i__25866__auto___39568 = G__39569;
continue;
} else {
}
break;
}

var G__39502 = args39500.length;
switch (G__39502) {
case 1:
return sablono.core.file_field39499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field39499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39500.length)].join('')));

}
});

sablono.core.file_field39499.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.file_field39499.call(null,name__32000__auto__,null);
});

sablono.core.file_field39499.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.file_field39499.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field39499);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field39503 = (function sablono$core$hidden_field39503(var_args){
var args39504 = [];
var len__25865__auto___39571 = arguments.length;
var i__25866__auto___39572 = (0);
while(true){
if((i__25866__auto___39572 < len__25865__auto___39571)){
args39504.push((arguments[i__25866__auto___39572]));

var G__39573 = (i__25866__auto___39572 + (1));
i__25866__auto___39572 = G__39573;
continue;
} else {
}
break;
}

var G__39506 = args39504.length;
switch (G__39506) {
case 1:
return sablono.core.hidden_field39503.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field39503.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39504.length)].join('')));

}
});

sablono.core.hidden_field39503.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.hidden_field39503.call(null,name__32000__auto__,null);
});

sablono.core.hidden_field39503.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.hidden_field39503.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field39503);

/**
 * Creates a month input field.
 */
sablono.core.month_field39507 = (function sablono$core$month_field39507(var_args){
var args39508 = [];
var len__25865__auto___39575 = arguments.length;
var i__25866__auto___39576 = (0);
while(true){
if((i__25866__auto___39576 < len__25865__auto___39575)){
args39508.push((arguments[i__25866__auto___39576]));

var G__39577 = (i__25866__auto___39576 + (1));
i__25866__auto___39576 = G__39577;
continue;
} else {
}
break;
}

var G__39510 = args39508.length;
switch (G__39510) {
case 1:
return sablono.core.month_field39507.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field39507.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39508.length)].join('')));

}
});

sablono.core.month_field39507.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.month_field39507.call(null,name__32000__auto__,null);
});

sablono.core.month_field39507.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.month_field39507.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field39507);

/**
 * Creates a number input field.
 */
sablono.core.number_field39511 = (function sablono$core$number_field39511(var_args){
var args39512 = [];
var len__25865__auto___39579 = arguments.length;
var i__25866__auto___39580 = (0);
while(true){
if((i__25866__auto___39580 < len__25865__auto___39579)){
args39512.push((arguments[i__25866__auto___39580]));

var G__39581 = (i__25866__auto___39580 + (1));
i__25866__auto___39580 = G__39581;
continue;
} else {
}
break;
}

var G__39514 = args39512.length;
switch (G__39514) {
case 1:
return sablono.core.number_field39511.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field39511.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39512.length)].join('')));

}
});

sablono.core.number_field39511.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.number_field39511.call(null,name__32000__auto__,null);
});

sablono.core.number_field39511.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.number_field39511.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field39511);

/**
 * Creates a password input field.
 */
sablono.core.password_field39515 = (function sablono$core$password_field39515(var_args){
var args39516 = [];
var len__25865__auto___39583 = arguments.length;
var i__25866__auto___39584 = (0);
while(true){
if((i__25866__auto___39584 < len__25865__auto___39583)){
args39516.push((arguments[i__25866__auto___39584]));

var G__39585 = (i__25866__auto___39584 + (1));
i__25866__auto___39584 = G__39585;
continue;
} else {
}
break;
}

var G__39518 = args39516.length;
switch (G__39518) {
case 1:
return sablono.core.password_field39515.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field39515.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39516.length)].join('')));

}
});

sablono.core.password_field39515.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.password_field39515.call(null,name__32000__auto__,null);
});

sablono.core.password_field39515.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.password_field39515.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field39515);

/**
 * Creates a range input field.
 */
sablono.core.range_field39519 = (function sablono$core$range_field39519(var_args){
var args39520 = [];
var len__25865__auto___39587 = arguments.length;
var i__25866__auto___39588 = (0);
while(true){
if((i__25866__auto___39588 < len__25865__auto___39587)){
args39520.push((arguments[i__25866__auto___39588]));

var G__39589 = (i__25866__auto___39588 + (1));
i__25866__auto___39588 = G__39589;
continue;
} else {
}
break;
}

var G__39522 = args39520.length;
switch (G__39522) {
case 1:
return sablono.core.range_field39519.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field39519.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39520.length)].join('')));

}
});

sablono.core.range_field39519.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.range_field39519.call(null,name__32000__auto__,null);
});

sablono.core.range_field39519.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.range_field39519.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field39519);

/**
 * Creates a search input field.
 */
sablono.core.search_field39523 = (function sablono$core$search_field39523(var_args){
var args39524 = [];
var len__25865__auto___39591 = arguments.length;
var i__25866__auto___39592 = (0);
while(true){
if((i__25866__auto___39592 < len__25865__auto___39591)){
args39524.push((arguments[i__25866__auto___39592]));

var G__39593 = (i__25866__auto___39592 + (1));
i__25866__auto___39592 = G__39593;
continue;
} else {
}
break;
}

var G__39526 = args39524.length;
switch (G__39526) {
case 1:
return sablono.core.search_field39523.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field39523.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39524.length)].join('')));

}
});

sablono.core.search_field39523.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.search_field39523.call(null,name__32000__auto__,null);
});

sablono.core.search_field39523.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.search_field39523.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field39523);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field39527 = (function sablono$core$tel_field39527(var_args){
var args39528 = [];
var len__25865__auto___39595 = arguments.length;
var i__25866__auto___39596 = (0);
while(true){
if((i__25866__auto___39596 < len__25865__auto___39595)){
args39528.push((arguments[i__25866__auto___39596]));

var G__39597 = (i__25866__auto___39596 + (1));
i__25866__auto___39596 = G__39597;
continue;
} else {
}
break;
}

var G__39530 = args39528.length;
switch (G__39530) {
case 1:
return sablono.core.tel_field39527.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field39527.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39528.length)].join('')));

}
});

sablono.core.tel_field39527.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.tel_field39527.call(null,name__32000__auto__,null);
});

sablono.core.tel_field39527.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.tel_field39527.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field39527);

/**
 * Creates a text input field.
 */
sablono.core.text_field39531 = (function sablono$core$text_field39531(var_args){
var args39532 = [];
var len__25865__auto___39599 = arguments.length;
var i__25866__auto___39600 = (0);
while(true){
if((i__25866__auto___39600 < len__25865__auto___39599)){
args39532.push((arguments[i__25866__auto___39600]));

var G__39601 = (i__25866__auto___39600 + (1));
i__25866__auto___39600 = G__39601;
continue;
} else {
}
break;
}

var G__39534 = args39532.length;
switch (G__39534) {
case 1:
return sablono.core.text_field39531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field39531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39532.length)].join('')));

}
});

sablono.core.text_field39531.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.text_field39531.call(null,name__32000__auto__,null);
});

sablono.core.text_field39531.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.text_field39531.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field39531);

/**
 * Creates a time input field.
 */
sablono.core.time_field39535 = (function sablono$core$time_field39535(var_args){
var args39536 = [];
var len__25865__auto___39603 = arguments.length;
var i__25866__auto___39604 = (0);
while(true){
if((i__25866__auto___39604 < len__25865__auto___39603)){
args39536.push((arguments[i__25866__auto___39604]));

var G__39605 = (i__25866__auto___39604 + (1));
i__25866__auto___39604 = G__39605;
continue;
} else {
}
break;
}

var G__39538 = args39536.length;
switch (G__39538) {
case 1:
return sablono.core.time_field39535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field39535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39536.length)].join('')));

}
});

sablono.core.time_field39535.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.time_field39535.call(null,name__32000__auto__,null);
});

sablono.core.time_field39535.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.time_field39535.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field39535);

/**
 * Creates a url input field.
 */
sablono.core.url_field39539 = (function sablono$core$url_field39539(var_args){
var args39540 = [];
var len__25865__auto___39607 = arguments.length;
var i__25866__auto___39608 = (0);
while(true){
if((i__25866__auto___39608 < len__25865__auto___39607)){
args39540.push((arguments[i__25866__auto___39608]));

var G__39609 = (i__25866__auto___39608 + (1));
i__25866__auto___39608 = G__39609;
continue;
} else {
}
break;
}

var G__39542 = args39540.length;
switch (G__39542) {
case 1:
return sablono.core.url_field39539.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field39539.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39540.length)].join('')));

}
});

sablono.core.url_field39539.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.url_field39539.call(null,name__32000__auto__,null);
});

sablono.core.url_field39539.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.url_field39539.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field39539);

/**
 * Creates a week input field.
 */
sablono.core.week_field39543 = (function sablono$core$week_field39543(var_args){
var args39544 = [];
var len__25865__auto___39611 = arguments.length;
var i__25866__auto___39612 = (0);
while(true){
if((i__25866__auto___39612 < len__25865__auto___39611)){
args39544.push((arguments[i__25866__auto___39612]));

var G__39613 = (i__25866__auto___39612 + (1));
i__25866__auto___39612 = G__39613;
continue;
} else {
}
break;
}

var G__39546 = args39544.length;
switch (G__39546) {
case 1:
return sablono.core.week_field39543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field39543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39544.length)].join('')));

}
});

sablono.core.week_field39543.cljs$core$IFn$_invoke$arity$1 = (function (name__32000__auto__){
return sablono.core.week_field39543.call(null,name__32000__auto__,null);
});

sablono.core.week_field39543.cljs$core$IFn$_invoke$arity$2 = (function (name__32000__auto__,value__32001__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32000__auto__,value__32001__auto__);
});

sablono.core.week_field39543.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field39543);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box39615 = (function sablono$core$check_box39615(var_args){
var args39616 = [];
var len__25865__auto___39619 = arguments.length;
var i__25866__auto___39620 = (0);
while(true){
if((i__25866__auto___39620 < len__25865__auto___39619)){
args39616.push((arguments[i__25866__auto___39620]));

var G__39621 = (i__25866__auto___39620 + (1));
i__25866__auto___39620 = G__39621;
continue;
} else {
}
break;
}

var G__39618 = args39616.length;
switch (G__39618) {
case 1:
return sablono.core.check_box39615.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box39615.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box39615.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39616.length)].join('')));

}
});

sablono.core.check_box39615.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box39615.call(null,name,null);
});

sablono.core.check_box39615.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box39615.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box39615.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box39615.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box39615);
/**
 * Creates a radio button.
 */
sablono.core.radio_button39623 = (function sablono$core$radio_button39623(var_args){
var args39624 = [];
var len__25865__auto___39627 = arguments.length;
var i__25866__auto___39628 = (0);
while(true){
if((i__25866__auto___39628 < len__25865__auto___39627)){
args39624.push((arguments[i__25866__auto___39628]));

var G__39629 = (i__25866__auto___39628 + (1));
i__25866__auto___39628 = G__39629;
continue;
} else {
}
break;
}

var G__39626 = args39624.length;
switch (G__39626) {
case 1:
return sablono.core.radio_button39623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button39623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button39623.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39624.length)].join('')));

}
});

sablono.core.radio_button39623.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button39623.call(null,group,null);
});

sablono.core.radio_button39623.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button39623.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button39623.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button39623.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button39623);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options39631 = (function sablono$core$select_options39631(coll){
var iter__25570__auto__ = (function sablono$core$select_options39631_$_iter__39648(s__39649){
return (new cljs.core.LazySeq(null,(function (){
var s__39649__$1 = s__39649;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39649__$1);
if(temp__4657__auto__){
var s__39649__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39649__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__39649__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__39651 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__39650 = (0);
while(true){
if((i__39650 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__39650);
cljs.core.chunk_append.call(null,b__39651,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39658 = x;
var text = cljs.core.nth.call(null,vec__39658,(0),null);
var val = cljs.core.nth.call(null,vec__39658,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39658,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options39631.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__39664 = (i__39650 + (1));
i__39650 = G__39664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39651),sablono$core$select_options39631_$_iter__39648.call(null,cljs.core.chunk_rest.call(null,s__39649__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39651),null);
}
} else {
var x = cljs.core.first.call(null,s__39649__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39661 = x;
var text = cljs.core.nth.call(null,vec__39661,(0),null);
var val = cljs.core.nth.call(null,vec__39661,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39661,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options39631.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options39631_$_iter__39648.call(null,cljs.core.rest.call(null,s__39649__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options39631);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down39665 = (function sablono$core$drop_down39665(var_args){
var args39666 = [];
var len__25865__auto___39669 = arguments.length;
var i__25866__auto___39670 = (0);
while(true){
if((i__25866__auto___39670 < len__25865__auto___39669)){
args39666.push((arguments[i__25866__auto___39670]));

var G__39671 = (i__25866__auto___39670 + (1));
i__25866__auto___39670 = G__39671;
continue;
} else {
}
break;
}

var G__39668 = args39666.length;
switch (G__39668) {
case 2:
return sablono.core.drop_down39665.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down39665.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39666.length)].join('')));

}
});

sablono.core.drop_down39665.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down39665.call(null,name,options,null);
});

sablono.core.drop_down39665.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down39665.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down39665);
/**
 * Creates a text area element.
 */
sablono.core.text_area39673 = (function sablono$core$text_area39673(var_args){
var args39674 = [];
var len__25865__auto___39677 = arguments.length;
var i__25866__auto___39678 = (0);
while(true){
if((i__25866__auto___39678 < len__25865__auto___39677)){
args39674.push((arguments[i__25866__auto___39678]));

var G__39679 = (i__25866__auto___39678 + (1));
i__25866__auto___39678 = G__39679;
continue;
} else {
}
break;
}

var G__39676 = args39674.length;
switch (G__39676) {
case 1:
return sablono.core.text_area39673.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area39673.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39674.length)].join('')));

}
});

sablono.core.text_area39673.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area39673.call(null,name,null);
});

sablono.core.text_area39673.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area39673.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area39673);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label39681 = (function sablono$core$label39681(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label39681);
/**
 * Creates a submit button.
 */
sablono.core.submit_button39682 = (function sablono$core$submit_button39682(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button39682);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button39683 = (function sablono$core$reset_button39683(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button39683);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to39684 = (function sablono$core$form_to39684(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39691 = arguments.length;
var i__25866__auto___39692 = (0);
while(true){
if((i__25866__auto___39692 < len__25865__auto___39691)){
args__25872__auto__.push((arguments[i__25866__auto___39692]));

var G__39693 = (i__25866__auto___39692 + (1));
i__25866__auto___39692 = G__39693;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to39684.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.form_to39684.cljs$core$IFn$_invoke$arity$variadic = (function (p__39687,body){
var vec__39688 = p__39687;
var method = cljs.core.nth.call(null,vec__39688,(0),null);
var action = cljs.core.nth.call(null,vec__39688,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to39684.cljs$lang$maxFixedArity = (1);

sablono.core.form_to39684.cljs$lang$applyTo = (function (seq39685){
var G__39686 = cljs.core.first.call(null,seq39685);
var seq39685__$1 = cljs.core.next.call(null,seq39685);
return sablono.core.form_to39684.cljs$core$IFn$_invoke$arity$variadic(G__39686,seq39685__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to39684);

//# sourceMappingURL=core.js.map?rel=1475623451531