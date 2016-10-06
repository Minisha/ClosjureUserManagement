// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44658){
var map__44683 = p__44658;
var map__44683__$1 = ((((!((map__44683 == null)))?((((map__44683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44683):map__44683);
var m = map__44683__$1;
var n = cljs.core.get.call(null,map__44683__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__44683__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__44685_44707 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44686_44708 = null;
var count__44687_44709 = (0);
var i__44688_44710 = (0);
while(true){
if((i__44688_44710 < count__44687_44709)){
var f_44711 = cljs.core._nth.call(null,chunk__44686_44708,i__44688_44710);
cljs.core.println.call(null,"  ",f_44711);

var G__44712 = seq__44685_44707;
var G__44713 = chunk__44686_44708;
var G__44714 = count__44687_44709;
var G__44715 = (i__44688_44710 + (1));
seq__44685_44707 = G__44712;
chunk__44686_44708 = G__44713;
count__44687_44709 = G__44714;
i__44688_44710 = G__44715;
continue;
} else {
var temp__4657__auto___44716 = cljs.core.seq.call(null,seq__44685_44707);
if(temp__4657__auto___44716){
var seq__44685_44717__$1 = temp__4657__auto___44716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44685_44717__$1)){
var c__25601__auto___44718 = cljs.core.chunk_first.call(null,seq__44685_44717__$1);
var G__44719 = cljs.core.chunk_rest.call(null,seq__44685_44717__$1);
var G__44720 = c__25601__auto___44718;
var G__44721 = cljs.core.count.call(null,c__25601__auto___44718);
var G__44722 = (0);
seq__44685_44707 = G__44719;
chunk__44686_44708 = G__44720;
count__44687_44709 = G__44721;
i__44688_44710 = G__44722;
continue;
} else {
var f_44723 = cljs.core.first.call(null,seq__44685_44717__$1);
cljs.core.println.call(null,"  ",f_44723);

var G__44724 = cljs.core.next.call(null,seq__44685_44717__$1);
var G__44725 = null;
var G__44726 = (0);
var G__44727 = (0);
seq__44685_44707 = G__44724;
chunk__44686_44708 = G__44725;
count__44687_44709 = G__44726;
i__44688_44710 = G__44727;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44728 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44728);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44728)))?cljs.core.second.call(null,arglists_44728):arglists_44728));
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
var seq__44689_44729 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44690_44730 = null;
var count__44691_44731 = (0);
var i__44692_44732 = (0);
while(true){
if((i__44692_44732 < count__44691_44731)){
var vec__44693_44733 = cljs.core._nth.call(null,chunk__44690_44730,i__44692_44732);
var name_44734 = cljs.core.nth.call(null,vec__44693_44733,(0),null);
var map__44696_44735 = cljs.core.nth.call(null,vec__44693_44733,(1),null);
var map__44696_44736__$1 = ((((!((map__44696_44735 == null)))?((((map__44696_44735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44696_44735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44696_44735):map__44696_44735);
var doc_44737 = cljs.core.get.call(null,map__44696_44736__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44738 = cljs.core.get.call(null,map__44696_44736__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44734);

cljs.core.println.call(null," ",arglists_44738);

if(cljs.core.truth_(doc_44737)){
cljs.core.println.call(null," ",doc_44737);
} else {
}

var G__44739 = seq__44689_44729;
var G__44740 = chunk__44690_44730;
var G__44741 = count__44691_44731;
var G__44742 = (i__44692_44732 + (1));
seq__44689_44729 = G__44739;
chunk__44690_44730 = G__44740;
count__44691_44731 = G__44741;
i__44692_44732 = G__44742;
continue;
} else {
var temp__4657__auto___44743 = cljs.core.seq.call(null,seq__44689_44729);
if(temp__4657__auto___44743){
var seq__44689_44744__$1 = temp__4657__auto___44743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44689_44744__$1)){
var c__25601__auto___44745 = cljs.core.chunk_first.call(null,seq__44689_44744__$1);
var G__44746 = cljs.core.chunk_rest.call(null,seq__44689_44744__$1);
var G__44747 = c__25601__auto___44745;
var G__44748 = cljs.core.count.call(null,c__25601__auto___44745);
var G__44749 = (0);
seq__44689_44729 = G__44746;
chunk__44690_44730 = G__44747;
count__44691_44731 = G__44748;
i__44692_44732 = G__44749;
continue;
} else {
var vec__44698_44750 = cljs.core.first.call(null,seq__44689_44744__$1);
var name_44751 = cljs.core.nth.call(null,vec__44698_44750,(0),null);
var map__44701_44752 = cljs.core.nth.call(null,vec__44698_44750,(1),null);
var map__44701_44753__$1 = ((((!((map__44701_44752 == null)))?((((map__44701_44752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44701_44752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44701_44752):map__44701_44752);
var doc_44754 = cljs.core.get.call(null,map__44701_44753__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44755 = cljs.core.get.call(null,map__44701_44753__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44751);

cljs.core.println.call(null," ",arglists_44755);

if(cljs.core.truth_(doc_44754)){
cljs.core.println.call(null," ",doc_44754);
} else {
}

var G__44756 = cljs.core.next.call(null,seq__44689_44744__$1);
var G__44757 = null;
var G__44758 = (0);
var G__44759 = (0);
seq__44689_44729 = G__44756;
chunk__44690_44730 = G__44757;
count__44691_44731 = G__44758;
i__44692_44732 = G__44759;
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

var seq__44703 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44704 = null;
var count__44705 = (0);
var i__44706 = (0);
while(true){
if((i__44706 < count__44705)){
var role = cljs.core._nth.call(null,chunk__44704,i__44706);
var temp__4657__auto___44760__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44760__$1)){
var spec_44761 = temp__4657__auto___44760__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44761));
} else {
}

var G__44762 = seq__44703;
var G__44763 = chunk__44704;
var G__44764 = count__44705;
var G__44765 = (i__44706 + (1));
seq__44703 = G__44762;
chunk__44704 = G__44763;
count__44705 = G__44764;
i__44706 = G__44765;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__44703);
if(temp__4657__auto____$1){
var seq__44703__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44703__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__44703__$1);
var G__44766 = cljs.core.chunk_rest.call(null,seq__44703__$1);
var G__44767 = c__25601__auto__;
var G__44768 = cljs.core.count.call(null,c__25601__auto__);
var G__44769 = (0);
seq__44703 = G__44766;
chunk__44704 = G__44767;
count__44705 = G__44768;
i__44706 = G__44769;
continue;
} else {
var role = cljs.core.first.call(null,seq__44703__$1);
var temp__4657__auto___44770__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44770__$2)){
var spec_44771 = temp__4657__auto___44770__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44771));
} else {
}

var G__44772 = cljs.core.next.call(null,seq__44703__$1);
var G__44773 = null;
var G__44774 = (0);
var G__44775 = (0);
seq__44703 = G__44772;
chunk__44704 = G__44773;
count__44705 = G__44774;
i__44706 = G__44775;
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

//# sourceMappingURL=repl.js.map?rel=1475623455498