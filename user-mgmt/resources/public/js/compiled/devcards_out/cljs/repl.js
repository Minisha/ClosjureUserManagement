// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36332){
var map__36357 = p__36332;
var map__36357__$1 = ((((!((map__36357 == null)))?((((map__36357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36357):map__36357);
var m = map__36357__$1;
var n = cljs.core.get.call(null,map__36357__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36357__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36359_36381 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36360_36382 = null;
var count__36361_36383 = (0);
var i__36362_36384 = (0);
while(true){
if((i__36362_36384 < count__36361_36383)){
var f_36385 = cljs.core._nth.call(null,chunk__36360_36382,i__36362_36384);
cljs.core.println.call(null,"  ",f_36385);

var G__36386 = seq__36359_36381;
var G__36387 = chunk__36360_36382;
var G__36388 = count__36361_36383;
var G__36389 = (i__36362_36384 + (1));
seq__36359_36381 = G__36386;
chunk__36360_36382 = G__36387;
count__36361_36383 = G__36388;
i__36362_36384 = G__36389;
continue;
} else {
var temp__4657__auto___36390 = cljs.core.seq.call(null,seq__36359_36381);
if(temp__4657__auto___36390){
var seq__36359_36391__$1 = temp__4657__auto___36390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36359_36391__$1)){
var c__25601__auto___36392 = cljs.core.chunk_first.call(null,seq__36359_36391__$1);
var G__36393 = cljs.core.chunk_rest.call(null,seq__36359_36391__$1);
var G__36394 = c__25601__auto___36392;
var G__36395 = cljs.core.count.call(null,c__25601__auto___36392);
var G__36396 = (0);
seq__36359_36381 = G__36393;
chunk__36360_36382 = G__36394;
count__36361_36383 = G__36395;
i__36362_36384 = G__36396;
continue;
} else {
var f_36397 = cljs.core.first.call(null,seq__36359_36391__$1);
cljs.core.println.call(null,"  ",f_36397);

var G__36398 = cljs.core.next.call(null,seq__36359_36391__$1);
var G__36399 = null;
var G__36400 = (0);
var G__36401 = (0);
seq__36359_36381 = G__36398;
chunk__36360_36382 = G__36399;
count__36361_36383 = G__36400;
i__36362_36384 = G__36401;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36402 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36402);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36402)))?cljs.core.second.call(null,arglists_36402):arglists_36402));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36363_36403 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36364_36404 = null;
var count__36365_36405 = (0);
var i__36366_36406 = (0);
while(true){
if((i__36366_36406 < count__36365_36405)){
var vec__36367_36407 = cljs.core._nth.call(null,chunk__36364_36404,i__36366_36406);
var name_36408 = cljs.core.nth.call(null,vec__36367_36407,(0),null);
var map__36370_36409 = cljs.core.nth.call(null,vec__36367_36407,(1),null);
var map__36370_36410__$1 = ((((!((map__36370_36409 == null)))?((((map__36370_36409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36370_36409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36370_36409):map__36370_36409);
var doc_36411 = cljs.core.get.call(null,map__36370_36410__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36412 = cljs.core.get.call(null,map__36370_36410__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36408);

cljs.core.println.call(null," ",arglists_36412);

if(cljs.core.truth_(doc_36411)){
cljs.core.println.call(null," ",doc_36411);
} else {
}

var G__36413 = seq__36363_36403;
var G__36414 = chunk__36364_36404;
var G__36415 = count__36365_36405;
var G__36416 = (i__36366_36406 + (1));
seq__36363_36403 = G__36413;
chunk__36364_36404 = G__36414;
count__36365_36405 = G__36415;
i__36366_36406 = G__36416;
continue;
} else {
var temp__4657__auto___36417 = cljs.core.seq.call(null,seq__36363_36403);
if(temp__4657__auto___36417){
var seq__36363_36418__$1 = temp__4657__auto___36417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36363_36418__$1)){
var c__25601__auto___36419 = cljs.core.chunk_first.call(null,seq__36363_36418__$1);
var G__36420 = cljs.core.chunk_rest.call(null,seq__36363_36418__$1);
var G__36421 = c__25601__auto___36419;
var G__36422 = cljs.core.count.call(null,c__25601__auto___36419);
var G__36423 = (0);
seq__36363_36403 = G__36420;
chunk__36364_36404 = G__36421;
count__36365_36405 = G__36422;
i__36366_36406 = G__36423;
continue;
} else {
var vec__36372_36424 = cljs.core.first.call(null,seq__36363_36418__$1);
var name_36425 = cljs.core.nth.call(null,vec__36372_36424,(0),null);
var map__36375_36426 = cljs.core.nth.call(null,vec__36372_36424,(1),null);
var map__36375_36427__$1 = ((((!((map__36375_36426 == null)))?((((map__36375_36426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36375_36426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36375_36426):map__36375_36426);
var doc_36428 = cljs.core.get.call(null,map__36375_36427__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36429 = cljs.core.get.call(null,map__36375_36427__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36425);

cljs.core.println.call(null," ",arglists_36429);

if(cljs.core.truth_(doc_36428)){
cljs.core.println.call(null," ",doc_36428);
} else {
}

var G__36430 = cljs.core.next.call(null,seq__36363_36418__$1);
var G__36431 = null;
var G__36432 = (0);
var G__36433 = (0);
seq__36363_36403 = G__36430;
chunk__36364_36404 = G__36431;
count__36365_36405 = G__36432;
i__36366_36406 = G__36433;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36377 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36378 = null;
var count__36379 = (0);
var i__36380 = (0);
while(true){
if((i__36380 < count__36379)){
var role = cljs.core._nth.call(null,chunk__36378,i__36380);
var temp__4657__auto___36434__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36434__$1)){
var spec_36435 = temp__4657__auto___36434__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36435));
} else {
}

var G__36436 = seq__36377;
var G__36437 = chunk__36378;
var G__36438 = count__36379;
var G__36439 = (i__36380 + (1));
seq__36377 = G__36436;
chunk__36378 = G__36437;
count__36379 = G__36438;
i__36380 = G__36439;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36377);
if(temp__4657__auto____$1){
var seq__36377__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36377__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__36377__$1);
var G__36440 = cljs.core.chunk_rest.call(null,seq__36377__$1);
var G__36441 = c__25601__auto__;
var G__36442 = cljs.core.count.call(null,c__25601__auto__);
var G__36443 = (0);
seq__36377 = G__36440;
chunk__36378 = G__36441;
count__36379 = G__36442;
i__36380 = G__36443;
continue;
} else {
var role = cljs.core.first.call(null,seq__36377__$1);
var temp__4657__auto___36444__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36444__$2)){
var spec_36445 = temp__4657__auto___36444__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36445));
} else {
}

var G__36446 = cljs.core.next.call(null,seq__36377__$1);
var G__36447 = null;
var G__36448 = (0);
var G__36449 = (0);
seq__36377 = G__36446;
chunk__36378 = G__36447;
count__36379 = G__36448;
i__36380 = G__36449;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1475620904353