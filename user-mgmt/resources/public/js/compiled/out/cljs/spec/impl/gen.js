// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43627 = arguments.length;
var i__25866__auto___43628 = (0);
while(true){
if((i__25866__auto___43628 < len__25865__auto___43627)){
args__25872__auto__.push((arguments[i__25866__auto___43628]));

var G__43629 = (i__25866__auto___43628 + (1));
i__25866__auto___43628 = G__43629;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq43626){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43626));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43631 = arguments.length;
var i__25866__auto___43632 = (0);
while(true){
if((i__25866__auto___43632 < len__25865__auto___43631)){
args__25872__auto__.push((arguments[i__25866__auto___43632]));

var G__43633 = (i__25866__auto___43632 + (1));
i__25866__auto___43632 = G__43633;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq43630){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43630));
});

var g_QMARK__43634 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_43635 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__43634){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__43634))
,null));
var mkg_43636 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__43634,g_43635){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__43634,g_43635))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__43634,g_43635,mkg_43636){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__43634).call(null,x);
});})(g_QMARK__43634,g_43635,mkg_43636))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__43634,g_43635,mkg_43636){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_43636).call(null,gfn);
});})(g_QMARK__43634,g_43635,mkg_43636))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__43634,g_43635,mkg_43636){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_43635).call(null,generator);
});})(g_QMARK__43634,g_43635,mkg_43636))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35039__auto___43655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35039__auto___43655){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43656 = arguments.length;
var i__25866__auto___43657 = (0);
while(true){
if((i__25866__auto___43657 < len__25865__auto___43656)){
args__25872__auto__.push((arguments[i__25866__auto___43657]));

var G__43658 = (i__25866__auto___43657 + (1));
i__25866__auto___43657 = G__43658;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43655))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43655){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43655),args);
});})(g__35039__auto___43655))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35039__auto___43655){
return (function (seq43637){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43637));
});})(g__35039__auto___43655))
;


var g__35039__auto___43659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35039__auto___43659){
return (function cljs$spec$impl$gen$list(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43660 = arguments.length;
var i__25866__auto___43661 = (0);
while(true){
if((i__25866__auto___43661 < len__25865__auto___43660)){
args__25872__auto__.push((arguments[i__25866__auto___43661]));

var G__43662 = (i__25866__auto___43661 + (1));
i__25866__auto___43661 = G__43662;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43659))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43659){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43659),args);
});})(g__35039__auto___43659))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35039__auto___43659){
return (function (seq43638){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43638));
});})(g__35039__auto___43659))
;


var g__35039__auto___43663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35039__auto___43663){
return (function cljs$spec$impl$gen$map(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43664 = arguments.length;
var i__25866__auto___43665 = (0);
while(true){
if((i__25866__auto___43665 < len__25865__auto___43664)){
args__25872__auto__.push((arguments[i__25866__auto___43665]));

var G__43666 = (i__25866__auto___43665 + (1));
i__25866__auto___43665 = G__43666;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43663))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43663){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43663),args);
});})(g__35039__auto___43663))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35039__auto___43663){
return (function (seq43639){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43639));
});})(g__35039__auto___43663))
;


var g__35039__auto___43667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35039__auto___43667){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43668 = arguments.length;
var i__25866__auto___43669 = (0);
while(true){
if((i__25866__auto___43669 < len__25865__auto___43668)){
args__25872__auto__.push((arguments[i__25866__auto___43669]));

var G__43670 = (i__25866__auto___43669 + (1));
i__25866__auto___43669 = G__43670;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43667))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43667){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43667),args);
});})(g__35039__auto___43667))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35039__auto___43667){
return (function (seq43640){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43640));
});})(g__35039__auto___43667))
;


var g__35039__auto___43671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35039__auto___43671){
return (function cljs$spec$impl$gen$set(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43672 = arguments.length;
var i__25866__auto___43673 = (0);
while(true){
if((i__25866__auto___43673 < len__25865__auto___43672)){
args__25872__auto__.push((arguments[i__25866__auto___43673]));

var G__43674 = (i__25866__auto___43673 + (1));
i__25866__auto___43673 = G__43674;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43671))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43671){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43671),args);
});})(g__35039__auto___43671))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35039__auto___43671){
return (function (seq43641){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43641));
});})(g__35039__auto___43671))
;


var g__35039__auto___43675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35039__auto___43675){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43676 = arguments.length;
var i__25866__auto___43677 = (0);
while(true){
if((i__25866__auto___43677 < len__25865__auto___43676)){
args__25872__auto__.push((arguments[i__25866__auto___43677]));

var G__43678 = (i__25866__auto___43677 + (1));
i__25866__auto___43677 = G__43678;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43675))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43675),args);
});})(g__35039__auto___43675))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35039__auto___43675){
return (function (seq43642){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43642));
});})(g__35039__auto___43675))
;


var g__35039__auto___43679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35039__auto___43679){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43680 = arguments.length;
var i__25866__auto___43681 = (0);
while(true){
if((i__25866__auto___43681 < len__25865__auto___43680)){
args__25872__auto__.push((arguments[i__25866__auto___43681]));

var G__43682 = (i__25866__auto___43681 + (1));
i__25866__auto___43681 = G__43682;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43679))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43679),args);
});})(g__35039__auto___43679))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35039__auto___43679){
return (function (seq43643){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43643));
});})(g__35039__auto___43679))
;


var g__35039__auto___43683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35039__auto___43683){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43684 = arguments.length;
var i__25866__auto___43685 = (0);
while(true){
if((i__25866__auto___43685 < len__25865__auto___43684)){
args__25872__auto__.push((arguments[i__25866__auto___43685]));

var G__43686 = (i__25866__auto___43685 + (1));
i__25866__auto___43685 = G__43686;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43683))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43683){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43683),args);
});})(g__35039__auto___43683))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35039__auto___43683){
return (function (seq43644){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43644));
});})(g__35039__auto___43683))
;


var g__35039__auto___43687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35039__auto___43687){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43688 = arguments.length;
var i__25866__auto___43689 = (0);
while(true){
if((i__25866__auto___43689 < len__25865__auto___43688)){
args__25872__auto__.push((arguments[i__25866__auto___43689]));

var G__43690 = (i__25866__auto___43689 + (1));
i__25866__auto___43689 = G__43690;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43687))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43687){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43687),args);
});})(g__35039__auto___43687))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35039__auto___43687){
return (function (seq43645){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43645));
});})(g__35039__auto___43687))
;


var g__35039__auto___43691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35039__auto___43691){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43692 = arguments.length;
var i__25866__auto___43693 = (0);
while(true){
if((i__25866__auto___43693 < len__25865__auto___43692)){
args__25872__auto__.push((arguments[i__25866__auto___43693]));

var G__43694 = (i__25866__auto___43693 + (1));
i__25866__auto___43693 = G__43694;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43691))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43691){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43691),args);
});})(g__35039__auto___43691))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35039__auto___43691){
return (function (seq43646){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43646));
});})(g__35039__auto___43691))
;


var g__35039__auto___43695 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35039__auto___43695){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43696 = arguments.length;
var i__25866__auto___43697 = (0);
while(true){
if((i__25866__auto___43697 < len__25865__auto___43696)){
args__25872__auto__.push((arguments[i__25866__auto___43697]));

var G__43698 = (i__25866__auto___43697 + (1));
i__25866__auto___43697 = G__43698;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43695))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43695){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43695),args);
});})(g__35039__auto___43695))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35039__auto___43695){
return (function (seq43647){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43647));
});})(g__35039__auto___43695))
;


var g__35039__auto___43699 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35039__auto___43699){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43700 = arguments.length;
var i__25866__auto___43701 = (0);
while(true){
if((i__25866__auto___43701 < len__25865__auto___43700)){
args__25872__auto__.push((arguments[i__25866__auto___43701]));

var G__43702 = (i__25866__auto___43701 + (1));
i__25866__auto___43701 = G__43702;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43699))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43699){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43699),args);
});})(g__35039__auto___43699))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35039__auto___43699){
return (function (seq43648){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43648));
});})(g__35039__auto___43699))
;


var g__35039__auto___43703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35039__auto___43703){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43704 = arguments.length;
var i__25866__auto___43705 = (0);
while(true){
if((i__25866__auto___43705 < len__25865__auto___43704)){
args__25872__auto__.push((arguments[i__25866__auto___43705]));

var G__43706 = (i__25866__auto___43705 + (1));
i__25866__auto___43705 = G__43706;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43703))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43703){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43703),args);
});})(g__35039__auto___43703))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35039__auto___43703){
return (function (seq43649){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43649));
});})(g__35039__auto___43703))
;


var g__35039__auto___43707 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35039__auto___43707){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43708 = arguments.length;
var i__25866__auto___43709 = (0);
while(true){
if((i__25866__auto___43709 < len__25865__auto___43708)){
args__25872__auto__.push((arguments[i__25866__auto___43709]));

var G__43710 = (i__25866__auto___43709 + (1));
i__25866__auto___43709 = G__43710;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43707))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43707){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43707),args);
});})(g__35039__auto___43707))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35039__auto___43707){
return (function (seq43650){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43650));
});})(g__35039__auto___43707))
;


var g__35039__auto___43711 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35039__auto___43711){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43712 = arguments.length;
var i__25866__auto___43713 = (0);
while(true){
if((i__25866__auto___43713 < len__25865__auto___43712)){
args__25872__auto__.push((arguments[i__25866__auto___43713]));

var G__43714 = (i__25866__auto___43713 + (1));
i__25866__auto___43713 = G__43714;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43711))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43711){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43711),args);
});})(g__35039__auto___43711))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35039__auto___43711){
return (function (seq43651){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43651));
});})(g__35039__auto___43711))
;


var g__35039__auto___43715 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35039__auto___43715){
return (function cljs$spec$impl$gen$return(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43716 = arguments.length;
var i__25866__auto___43717 = (0);
while(true){
if((i__25866__auto___43717 < len__25865__auto___43716)){
args__25872__auto__.push((arguments[i__25866__auto___43717]));

var G__43718 = (i__25866__auto___43717 + (1));
i__25866__auto___43717 = G__43718;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43715))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43715){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43715),args);
});})(g__35039__auto___43715))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35039__auto___43715){
return (function (seq43652){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43652));
});})(g__35039__auto___43715))
;


var g__35039__auto___43719 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35039__auto___43719){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43720 = arguments.length;
var i__25866__auto___43721 = (0);
while(true){
if((i__25866__auto___43721 < len__25865__auto___43720)){
args__25872__auto__.push((arguments[i__25866__auto___43721]));

var G__43722 = (i__25866__auto___43721 + (1));
i__25866__auto___43721 = G__43722;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43719))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43719){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43719),args);
});})(g__35039__auto___43719))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35039__auto___43719){
return (function (seq43653){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43653));
});})(g__35039__auto___43719))
;


var g__35039__auto___43723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35039__auto___43723){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43724 = arguments.length;
var i__25866__auto___43725 = (0);
while(true){
if((i__25866__auto___43725 < len__25865__auto___43724)){
args__25872__auto__.push((arguments[i__25866__auto___43725]));

var G__43726 = (i__25866__auto___43725 + (1));
i__25866__auto___43725 = G__43726;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35039__auto___43723))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35039__auto___43723){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35039__auto___43723),args);
});})(g__35039__auto___43723))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35039__auto___43723){
return (function (seq43654){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43654));
});})(g__35039__auto___43723))
;

var g__35052__auto___43748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35052__auto___43748){
return (function cljs$spec$impl$gen$any(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43749 = arguments.length;
var i__25866__auto___43750 = (0);
while(true){
if((i__25866__auto___43750 < len__25865__auto___43749)){
args__25872__auto__.push((arguments[i__25866__auto___43750]));

var G__43751 = (i__25866__auto___43750 + (1));
i__25866__auto___43750 = G__43751;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43748))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43748){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43748);
});})(g__35052__auto___43748))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35052__auto___43748){
return (function (seq43727){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43727));
});})(g__35052__auto___43748))
;


var g__35052__auto___43752 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35052__auto___43752){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43753 = arguments.length;
var i__25866__auto___43754 = (0);
while(true){
if((i__25866__auto___43754 < len__25865__auto___43753)){
args__25872__auto__.push((arguments[i__25866__auto___43754]));

var G__43755 = (i__25866__auto___43754 + (1));
i__25866__auto___43754 = G__43755;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43752))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43752){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43752);
});})(g__35052__auto___43752))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35052__auto___43752){
return (function (seq43728){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43728));
});})(g__35052__auto___43752))
;


var g__35052__auto___43756 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35052__auto___43756){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43757 = arguments.length;
var i__25866__auto___43758 = (0);
while(true){
if((i__25866__auto___43758 < len__25865__auto___43757)){
args__25872__auto__.push((arguments[i__25866__auto___43758]));

var G__43759 = (i__25866__auto___43758 + (1));
i__25866__auto___43758 = G__43759;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43756))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43756){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43756);
});})(g__35052__auto___43756))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35052__auto___43756){
return (function (seq43729){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43729));
});})(g__35052__auto___43756))
;


var g__35052__auto___43760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35052__auto___43760){
return (function cljs$spec$impl$gen$char(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43761 = arguments.length;
var i__25866__auto___43762 = (0);
while(true){
if((i__25866__auto___43762 < len__25865__auto___43761)){
args__25872__auto__.push((arguments[i__25866__auto___43762]));

var G__43763 = (i__25866__auto___43762 + (1));
i__25866__auto___43762 = G__43763;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43760))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43760){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43760);
});})(g__35052__auto___43760))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35052__auto___43760){
return (function (seq43730){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43730));
});})(g__35052__auto___43760))
;


var g__35052__auto___43764 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35052__auto___43764){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43765 = arguments.length;
var i__25866__auto___43766 = (0);
while(true){
if((i__25866__auto___43766 < len__25865__auto___43765)){
args__25872__auto__.push((arguments[i__25866__auto___43766]));

var G__43767 = (i__25866__auto___43766 + (1));
i__25866__auto___43766 = G__43767;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43764))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43764){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43764);
});})(g__35052__auto___43764))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35052__auto___43764){
return (function (seq43731){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43731));
});})(g__35052__auto___43764))
;


var g__35052__auto___43768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35052__auto___43768){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43769 = arguments.length;
var i__25866__auto___43770 = (0);
while(true){
if((i__25866__auto___43770 < len__25865__auto___43769)){
args__25872__auto__.push((arguments[i__25866__auto___43770]));

var G__43771 = (i__25866__auto___43770 + (1));
i__25866__auto___43770 = G__43771;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43768))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43768){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43768);
});})(g__35052__auto___43768))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35052__auto___43768){
return (function (seq43732){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43732));
});})(g__35052__auto___43768))
;


var g__35052__auto___43772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35052__auto___43772){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43773 = arguments.length;
var i__25866__auto___43774 = (0);
while(true){
if((i__25866__auto___43774 < len__25865__auto___43773)){
args__25872__auto__.push((arguments[i__25866__auto___43774]));

var G__43775 = (i__25866__auto___43774 + (1));
i__25866__auto___43774 = G__43775;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43772))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43772){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43772);
});})(g__35052__auto___43772))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35052__auto___43772){
return (function (seq43733){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43733));
});})(g__35052__auto___43772))
;


var g__35052__auto___43776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35052__auto___43776){
return (function cljs$spec$impl$gen$double(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43777 = arguments.length;
var i__25866__auto___43778 = (0);
while(true){
if((i__25866__auto___43778 < len__25865__auto___43777)){
args__25872__auto__.push((arguments[i__25866__auto___43778]));

var G__43779 = (i__25866__auto___43778 + (1));
i__25866__auto___43778 = G__43779;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43776))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43776){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43776);
});})(g__35052__auto___43776))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35052__auto___43776){
return (function (seq43734){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43734));
});})(g__35052__auto___43776))
;


var g__35052__auto___43780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35052__auto___43780){
return (function cljs$spec$impl$gen$int(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43781 = arguments.length;
var i__25866__auto___43782 = (0);
while(true){
if((i__25866__auto___43782 < len__25865__auto___43781)){
args__25872__auto__.push((arguments[i__25866__auto___43782]));

var G__43783 = (i__25866__auto___43782 + (1));
i__25866__auto___43782 = G__43783;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43780))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43780){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43780);
});})(g__35052__auto___43780))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35052__auto___43780){
return (function (seq43735){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43735));
});})(g__35052__auto___43780))
;


var g__35052__auto___43784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35052__auto___43784){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43785 = arguments.length;
var i__25866__auto___43786 = (0);
while(true){
if((i__25866__auto___43786 < len__25865__auto___43785)){
args__25872__auto__.push((arguments[i__25866__auto___43786]));

var G__43787 = (i__25866__auto___43786 + (1));
i__25866__auto___43786 = G__43787;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43784))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43784){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43784);
});})(g__35052__auto___43784))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35052__auto___43784){
return (function (seq43736){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43736));
});})(g__35052__auto___43784))
;


var g__35052__auto___43788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35052__auto___43788){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43789 = arguments.length;
var i__25866__auto___43790 = (0);
while(true){
if((i__25866__auto___43790 < len__25865__auto___43789)){
args__25872__auto__.push((arguments[i__25866__auto___43790]));

var G__43791 = (i__25866__auto___43790 + (1));
i__25866__auto___43790 = G__43791;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43788))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43788){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43788);
});})(g__35052__auto___43788))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35052__auto___43788){
return (function (seq43737){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43737));
});})(g__35052__auto___43788))
;


var g__35052__auto___43792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35052__auto___43792){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43793 = arguments.length;
var i__25866__auto___43794 = (0);
while(true){
if((i__25866__auto___43794 < len__25865__auto___43793)){
args__25872__auto__.push((arguments[i__25866__auto___43794]));

var G__43795 = (i__25866__auto___43794 + (1));
i__25866__auto___43794 = G__43795;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43792))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43792){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43792);
});})(g__35052__auto___43792))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35052__auto___43792){
return (function (seq43738){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43738));
});})(g__35052__auto___43792))
;


var g__35052__auto___43796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35052__auto___43796){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43797 = arguments.length;
var i__25866__auto___43798 = (0);
while(true){
if((i__25866__auto___43798 < len__25865__auto___43797)){
args__25872__auto__.push((arguments[i__25866__auto___43798]));

var G__43799 = (i__25866__auto___43798 + (1));
i__25866__auto___43798 = G__43799;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43796))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43796){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43796);
});})(g__35052__auto___43796))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35052__auto___43796){
return (function (seq43739){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43739));
});})(g__35052__auto___43796))
;


var g__35052__auto___43800 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35052__auto___43800){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43801 = arguments.length;
var i__25866__auto___43802 = (0);
while(true){
if((i__25866__auto___43802 < len__25865__auto___43801)){
args__25872__auto__.push((arguments[i__25866__auto___43802]));

var G__43803 = (i__25866__auto___43802 + (1));
i__25866__auto___43802 = G__43803;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43800))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43800){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43800);
});})(g__35052__auto___43800))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35052__auto___43800){
return (function (seq43740){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43740));
});})(g__35052__auto___43800))
;


var g__35052__auto___43804 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35052__auto___43804){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43805 = arguments.length;
var i__25866__auto___43806 = (0);
while(true){
if((i__25866__auto___43806 < len__25865__auto___43805)){
args__25872__auto__.push((arguments[i__25866__auto___43806]));

var G__43807 = (i__25866__auto___43806 + (1));
i__25866__auto___43806 = G__43807;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43804))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43804){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43804);
});})(g__35052__auto___43804))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35052__auto___43804){
return (function (seq43741){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43741));
});})(g__35052__auto___43804))
;


var g__35052__auto___43808 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35052__auto___43808){
return (function cljs$spec$impl$gen$string(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43809 = arguments.length;
var i__25866__auto___43810 = (0);
while(true){
if((i__25866__auto___43810 < len__25865__auto___43809)){
args__25872__auto__.push((arguments[i__25866__auto___43810]));

var G__43811 = (i__25866__auto___43810 + (1));
i__25866__auto___43810 = G__43811;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43808))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43808){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43808);
});})(g__35052__auto___43808))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35052__auto___43808){
return (function (seq43742){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43742));
});})(g__35052__auto___43808))
;


var g__35052__auto___43812 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35052__auto___43812){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43813 = arguments.length;
var i__25866__auto___43814 = (0);
while(true){
if((i__25866__auto___43814 < len__25865__auto___43813)){
args__25872__auto__.push((arguments[i__25866__auto___43814]));

var G__43815 = (i__25866__auto___43814 + (1));
i__25866__auto___43814 = G__43815;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43812))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43812){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43812);
});})(g__35052__auto___43812))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35052__auto___43812){
return (function (seq43743){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43743));
});})(g__35052__auto___43812))
;


var g__35052__auto___43816 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35052__auto___43816){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43817 = arguments.length;
var i__25866__auto___43818 = (0);
while(true){
if((i__25866__auto___43818 < len__25865__auto___43817)){
args__25872__auto__.push((arguments[i__25866__auto___43818]));

var G__43819 = (i__25866__auto___43818 + (1));
i__25866__auto___43818 = G__43819;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43816))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43816){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43816);
});})(g__35052__auto___43816))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35052__auto___43816){
return (function (seq43744){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43744));
});})(g__35052__auto___43816))
;


var g__35052__auto___43820 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35052__auto___43820){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43821 = arguments.length;
var i__25866__auto___43822 = (0);
while(true){
if((i__25866__auto___43822 < len__25865__auto___43821)){
args__25872__auto__.push((arguments[i__25866__auto___43822]));

var G__43823 = (i__25866__auto___43822 + (1));
i__25866__auto___43822 = G__43823;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43820))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43820){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43820);
});})(g__35052__auto___43820))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35052__auto___43820){
return (function (seq43745){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43745));
});})(g__35052__auto___43820))
;


var g__35052__auto___43824 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35052__auto___43824){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43825 = arguments.length;
var i__25866__auto___43826 = (0);
while(true){
if((i__25866__auto___43826 < len__25865__auto___43825)){
args__25872__auto__.push((arguments[i__25866__auto___43826]));

var G__43827 = (i__25866__auto___43826 + (1));
i__25866__auto___43826 = G__43827;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43824))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43824){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43824);
});})(g__35052__auto___43824))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35052__auto___43824){
return (function (seq43746){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43746));
});})(g__35052__auto___43824))
;


var g__35052__auto___43828 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35052__auto___43828){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43829 = arguments.length;
var i__25866__auto___43830 = (0);
while(true){
if((i__25866__auto___43830 < len__25865__auto___43829)){
args__25872__auto__.push((arguments[i__25866__auto___43830]));

var G__43831 = (i__25866__auto___43830 + (1));
i__25866__auto___43830 = G__43831;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});})(g__35052__auto___43828))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35052__auto___43828){
return (function (args){
return cljs.core.deref.call(null,g__35052__auto___43828);
});})(g__35052__auto___43828))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35052__auto___43828){
return (function (seq43747){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43747));
});})(g__35052__auto___43828))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25872__auto__ = [];
var len__25865__auto___43834 = arguments.length;
var i__25866__auto___43835 = (0);
while(true){
if((i__25866__auto___43835 < len__25865__auto___43834)){
args__25872__auto__.push((arguments[i__25866__auto___43835]));

var G__43836 = (i__25866__auto___43835 + (1));
i__25866__auto___43835 = G__43836;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__43832_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__43832_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq43833){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43833));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__43837_SHARP_){
return (new Date(p1__43837_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1475623454186