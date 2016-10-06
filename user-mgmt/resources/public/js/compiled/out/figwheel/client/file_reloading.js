// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24790__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24790__auto__){
return or__24790__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24790__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42571_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42571_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42576 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42577 = null;
var count__42578 = (0);
var i__42579 = (0);
while(true){
if((i__42579 < count__42578)){
var n = cljs.core._nth.call(null,chunk__42577,i__42579);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42580 = seq__42576;
var G__42581 = chunk__42577;
var G__42582 = count__42578;
var G__42583 = (i__42579 + (1));
seq__42576 = G__42580;
chunk__42577 = G__42581;
count__42578 = G__42582;
i__42579 = G__42583;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42576);
if(temp__4657__auto__){
var seq__42576__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42576__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__42576__$1);
var G__42584 = cljs.core.chunk_rest.call(null,seq__42576__$1);
var G__42585 = c__25601__auto__;
var G__42586 = cljs.core.count.call(null,c__25601__auto__);
var G__42587 = (0);
seq__42576 = G__42584;
chunk__42577 = G__42585;
count__42578 = G__42586;
i__42579 = G__42587;
continue;
} else {
var n = cljs.core.first.call(null,seq__42576__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42588 = cljs.core.next.call(null,seq__42576__$1);
var G__42589 = null;
var G__42590 = (0);
var G__42591 = (0);
seq__42576 = G__42588;
chunk__42577 = G__42589;
count__42578 = G__42590;
i__42579 = G__42591;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42642_42653 = cljs.core.seq.call(null,deps);
var chunk__42643_42654 = null;
var count__42644_42655 = (0);
var i__42645_42656 = (0);
while(true){
if((i__42645_42656 < count__42644_42655)){
var dep_42657 = cljs.core._nth.call(null,chunk__42643_42654,i__42645_42656);
topo_sort_helper_STAR_.call(null,dep_42657,(depth + (1)),state);

var G__42658 = seq__42642_42653;
var G__42659 = chunk__42643_42654;
var G__42660 = count__42644_42655;
var G__42661 = (i__42645_42656 + (1));
seq__42642_42653 = G__42658;
chunk__42643_42654 = G__42659;
count__42644_42655 = G__42660;
i__42645_42656 = G__42661;
continue;
} else {
var temp__4657__auto___42662 = cljs.core.seq.call(null,seq__42642_42653);
if(temp__4657__auto___42662){
var seq__42642_42663__$1 = temp__4657__auto___42662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42642_42663__$1)){
var c__25601__auto___42664 = cljs.core.chunk_first.call(null,seq__42642_42663__$1);
var G__42665 = cljs.core.chunk_rest.call(null,seq__42642_42663__$1);
var G__42666 = c__25601__auto___42664;
var G__42667 = cljs.core.count.call(null,c__25601__auto___42664);
var G__42668 = (0);
seq__42642_42653 = G__42665;
chunk__42643_42654 = G__42666;
count__42644_42655 = G__42667;
i__42645_42656 = G__42668;
continue;
} else {
var dep_42669 = cljs.core.first.call(null,seq__42642_42663__$1);
topo_sort_helper_STAR_.call(null,dep_42669,(depth + (1)),state);

var G__42670 = cljs.core.next.call(null,seq__42642_42663__$1);
var G__42671 = null;
var G__42672 = (0);
var G__42673 = (0);
seq__42642_42653 = G__42670;
chunk__42643_42654 = G__42671;
count__42644_42655 = G__42672;
i__42645_42656 = G__42673;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42646){
var vec__42650 = p__42646;
var seq__42651 = cljs.core.seq.call(null,vec__42650);
var first__42652 = cljs.core.first.call(null,seq__42651);
var seq__42651__$1 = cljs.core.next.call(null,seq__42651);
var x = first__42652;
var xs = seq__42651__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42650,seq__42651,first__42652,seq__42651__$1,x,xs,get_deps__$1){
return (function (p1__42592_SHARP_){
return clojure.set.difference.call(null,p1__42592_SHARP_,x);
});})(vec__42650,seq__42651,first__42652,seq__42651__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42686 = cljs.core.seq.call(null,provides);
var chunk__42687 = null;
var count__42688 = (0);
var i__42689 = (0);
while(true){
if((i__42689 < count__42688)){
var prov = cljs.core._nth.call(null,chunk__42687,i__42689);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42690_42698 = cljs.core.seq.call(null,requires);
var chunk__42691_42699 = null;
var count__42692_42700 = (0);
var i__42693_42701 = (0);
while(true){
if((i__42693_42701 < count__42692_42700)){
var req_42702 = cljs.core._nth.call(null,chunk__42691_42699,i__42693_42701);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42702,prov);

var G__42703 = seq__42690_42698;
var G__42704 = chunk__42691_42699;
var G__42705 = count__42692_42700;
var G__42706 = (i__42693_42701 + (1));
seq__42690_42698 = G__42703;
chunk__42691_42699 = G__42704;
count__42692_42700 = G__42705;
i__42693_42701 = G__42706;
continue;
} else {
var temp__4657__auto___42707 = cljs.core.seq.call(null,seq__42690_42698);
if(temp__4657__auto___42707){
var seq__42690_42708__$1 = temp__4657__auto___42707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42690_42708__$1)){
var c__25601__auto___42709 = cljs.core.chunk_first.call(null,seq__42690_42708__$1);
var G__42710 = cljs.core.chunk_rest.call(null,seq__42690_42708__$1);
var G__42711 = c__25601__auto___42709;
var G__42712 = cljs.core.count.call(null,c__25601__auto___42709);
var G__42713 = (0);
seq__42690_42698 = G__42710;
chunk__42691_42699 = G__42711;
count__42692_42700 = G__42712;
i__42693_42701 = G__42713;
continue;
} else {
var req_42714 = cljs.core.first.call(null,seq__42690_42708__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42714,prov);

var G__42715 = cljs.core.next.call(null,seq__42690_42708__$1);
var G__42716 = null;
var G__42717 = (0);
var G__42718 = (0);
seq__42690_42698 = G__42715;
chunk__42691_42699 = G__42716;
count__42692_42700 = G__42717;
i__42693_42701 = G__42718;
continue;
}
} else {
}
}
break;
}

var G__42719 = seq__42686;
var G__42720 = chunk__42687;
var G__42721 = count__42688;
var G__42722 = (i__42689 + (1));
seq__42686 = G__42719;
chunk__42687 = G__42720;
count__42688 = G__42721;
i__42689 = G__42722;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42686);
if(temp__4657__auto__){
var seq__42686__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42686__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__42686__$1);
var G__42723 = cljs.core.chunk_rest.call(null,seq__42686__$1);
var G__42724 = c__25601__auto__;
var G__42725 = cljs.core.count.call(null,c__25601__auto__);
var G__42726 = (0);
seq__42686 = G__42723;
chunk__42687 = G__42724;
count__42688 = G__42725;
i__42689 = G__42726;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42686__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42694_42727 = cljs.core.seq.call(null,requires);
var chunk__42695_42728 = null;
var count__42696_42729 = (0);
var i__42697_42730 = (0);
while(true){
if((i__42697_42730 < count__42696_42729)){
var req_42731 = cljs.core._nth.call(null,chunk__42695_42728,i__42697_42730);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42731,prov);

var G__42732 = seq__42694_42727;
var G__42733 = chunk__42695_42728;
var G__42734 = count__42696_42729;
var G__42735 = (i__42697_42730 + (1));
seq__42694_42727 = G__42732;
chunk__42695_42728 = G__42733;
count__42696_42729 = G__42734;
i__42697_42730 = G__42735;
continue;
} else {
var temp__4657__auto___42736__$1 = cljs.core.seq.call(null,seq__42694_42727);
if(temp__4657__auto___42736__$1){
var seq__42694_42737__$1 = temp__4657__auto___42736__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42694_42737__$1)){
var c__25601__auto___42738 = cljs.core.chunk_first.call(null,seq__42694_42737__$1);
var G__42739 = cljs.core.chunk_rest.call(null,seq__42694_42737__$1);
var G__42740 = c__25601__auto___42738;
var G__42741 = cljs.core.count.call(null,c__25601__auto___42738);
var G__42742 = (0);
seq__42694_42727 = G__42739;
chunk__42695_42728 = G__42740;
count__42696_42729 = G__42741;
i__42697_42730 = G__42742;
continue;
} else {
var req_42743 = cljs.core.first.call(null,seq__42694_42737__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42743,prov);

var G__42744 = cljs.core.next.call(null,seq__42694_42737__$1);
var G__42745 = null;
var G__42746 = (0);
var G__42747 = (0);
seq__42694_42727 = G__42744;
chunk__42695_42728 = G__42745;
count__42696_42729 = G__42746;
i__42697_42730 = G__42747;
continue;
}
} else {
}
}
break;
}

var G__42748 = cljs.core.next.call(null,seq__42686__$1);
var G__42749 = null;
var G__42750 = (0);
var G__42751 = (0);
seq__42686 = G__42748;
chunk__42687 = G__42749;
count__42688 = G__42750;
i__42689 = G__42751;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42756_42760 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42757_42761 = null;
var count__42758_42762 = (0);
var i__42759_42763 = (0);
while(true){
if((i__42759_42763 < count__42758_42762)){
var ns_42764 = cljs.core._nth.call(null,chunk__42757_42761,i__42759_42763);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42764);

var G__42765 = seq__42756_42760;
var G__42766 = chunk__42757_42761;
var G__42767 = count__42758_42762;
var G__42768 = (i__42759_42763 + (1));
seq__42756_42760 = G__42765;
chunk__42757_42761 = G__42766;
count__42758_42762 = G__42767;
i__42759_42763 = G__42768;
continue;
} else {
var temp__4657__auto___42769 = cljs.core.seq.call(null,seq__42756_42760);
if(temp__4657__auto___42769){
var seq__42756_42770__$1 = temp__4657__auto___42769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42756_42770__$1)){
var c__25601__auto___42771 = cljs.core.chunk_first.call(null,seq__42756_42770__$1);
var G__42772 = cljs.core.chunk_rest.call(null,seq__42756_42770__$1);
var G__42773 = c__25601__auto___42771;
var G__42774 = cljs.core.count.call(null,c__25601__auto___42771);
var G__42775 = (0);
seq__42756_42760 = G__42772;
chunk__42757_42761 = G__42773;
count__42758_42762 = G__42774;
i__42759_42763 = G__42775;
continue;
} else {
var ns_42776 = cljs.core.first.call(null,seq__42756_42770__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42776);

var G__42777 = cljs.core.next.call(null,seq__42756_42770__$1);
var G__42778 = null;
var G__42779 = (0);
var G__42780 = (0);
seq__42756_42760 = G__42777;
chunk__42757_42761 = G__42778;
count__42758_42762 = G__42779;
i__42759_42763 = G__42780;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24790__auto__ = goog.require__;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42781__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42782__i = 0, G__42782__a = new Array(arguments.length -  0);
while (G__42782__i < G__42782__a.length) {G__42782__a[G__42782__i] = arguments[G__42782__i + 0]; ++G__42782__i;}
  args = new cljs.core.IndexedSeq(G__42782__a,0);
} 
return G__42781__delegate.call(this,args);};
G__42781.cljs$lang$maxFixedArity = 0;
G__42781.cljs$lang$applyTo = (function (arglist__42783){
var args = cljs.core.seq(arglist__42783);
return G__42781__delegate(args);
});
G__42781.cljs$core$IFn$_invoke$arity$variadic = G__42781__delegate;
return G__42781;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42785 = cljs.core._EQ_;
var expr__42786 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42785.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42786))){
var path_parts = ((function (pred__42785,expr__42786){
return (function (p1__42784_SHARP_){
return clojure.string.split.call(null,p1__42784_SHARP_,/[\/\\]/);
});})(pred__42785,expr__42786))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42785,expr__42786){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42788){if((e42788 instanceof Error)){
var e = e42788;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42788;

}
}})());
});
;})(path_parts,sep,root,pred__42785,expr__42786))
} else {
if(cljs.core.truth_(pred__42785.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42786))){
return ((function (pred__42785,expr__42786){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__42785,expr__42786){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42785,expr__42786))
);

return deferred.addErrback(((function (deferred,pred__42785,expr__42786){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42785,expr__42786))
);
});
;})(pred__42785,expr__42786))
} else {
return ((function (pred__42785,expr__42786){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42785,expr__42786))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42789,callback){
var map__42792 = p__42789;
var map__42792__$1 = ((((!((map__42792 == null)))?((((map__42792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42792):map__42792);
var file_msg = map__42792__$1;
var request_url = cljs.core.get.call(null,map__42792__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42792,map__42792__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42792,map__42792__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__){
return (function (state_42816){
var state_val_42817 = (state_42816[(1)]);
if((state_val_42817 === (7))){
var inst_42812 = (state_42816[(2)]);
var state_42816__$1 = state_42816;
var statearr_42818_42838 = state_42816__$1;
(statearr_42818_42838[(2)] = inst_42812);

(statearr_42818_42838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42817 === (1))){
var state_42816__$1 = state_42816;
var statearr_42819_42839 = state_42816__$1;
(statearr_42819_42839[(2)] = null);

(statearr_42819_42839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42817 === (4))){
var inst_42796 = (state_42816[(7)]);
var inst_42796__$1 = (state_42816[(2)]);
var state_42816__$1 = (function (){var statearr_42820 = state_42816;
(statearr_42820[(7)] = inst_42796__$1);

return statearr_42820;
})();
if(cljs.core.truth_(inst_42796__$1)){
var statearr_42821_42840 = state_42816__$1;
(statearr_42821_42840[(1)] = (5));

} else {
var statearr_42822_42841 = state_42816__$1;
(statearr_42822_42841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42817 === (6))){
var state_42816__$1 = state_42816;
var statearr_42823_42842 = state_42816__$1;
(statearr_42823_42842[(2)] = null);

(statearr_42823_42842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42817 === (3))){
var inst_42814 = (state_42816[(2)]);
var state_42816__$1 = state_42816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42816__$1,inst_42814);
} else {
if((state_val_42817 === (2))){
var state_42816__$1 = state_42816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42816__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42817 === (11))){
var inst_42808 = (state_42816[(2)]);
var state_42816__$1 = (function (){var statearr_42824 = state_42816;
(statearr_42824[(8)] = inst_42808);

return statearr_42824;
})();
var statearr_42825_42843 = state_42816__$1;
(statearr_42825_42843[(2)] = null);

(statearr_42825_42843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42817 === (9))){
var inst_42802 = (state_42816[(9)]);
var inst_42800 = (state_42816[(10)]);
var inst_42804 = inst_42802.call(null,inst_42800);
var state_42816__$1 = state_42816;
var statearr_42826_42844 = state_42816__$1;
(statearr_42826_42844[(2)] = inst_42804);

(statearr_42826_42844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42817 === (5))){
var inst_42796 = (state_42816[(7)]);
var inst_42798 = figwheel.client.file_reloading.blocking_load.call(null,inst_42796);
var state_42816__$1 = state_42816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42816__$1,(8),inst_42798);
} else {
if((state_val_42817 === (10))){
var inst_42800 = (state_42816[(10)]);
var inst_42806 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42800);
var state_42816__$1 = state_42816;
var statearr_42827_42845 = state_42816__$1;
(statearr_42827_42845[(2)] = inst_42806);

(statearr_42827_42845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42817 === (8))){
var inst_42796 = (state_42816[(7)]);
var inst_42802 = (state_42816[(9)]);
var inst_42800 = (state_42816[(2)]);
var inst_42801 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42802__$1 = cljs.core.get.call(null,inst_42801,inst_42796);
var state_42816__$1 = (function (){var statearr_42828 = state_42816;
(statearr_42828[(9)] = inst_42802__$1);

(statearr_42828[(10)] = inst_42800);

return statearr_42828;
})();
if(cljs.core.truth_(inst_42802__$1)){
var statearr_42829_42846 = state_42816__$1;
(statearr_42829_42846[(1)] = (9));

} else {
var statearr_42830_42847 = state_42816__$1;
(statearr_42830_42847[(1)] = (10));

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
});})(c__28608__auto__))
;
return ((function (switch__28496__auto__,c__28608__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28497__auto__ = null;
var figwheel$client$file_reloading$state_machine__28497__auto____0 = (function (){
var statearr_42834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42834[(0)] = figwheel$client$file_reloading$state_machine__28497__auto__);

(statearr_42834[(1)] = (1));

return statearr_42834;
});
var figwheel$client$file_reloading$state_machine__28497__auto____1 = (function (state_42816){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_42816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e42835){if((e42835 instanceof Object)){
var ex__28500__auto__ = e42835;
var statearr_42836_42848 = state_42816;
(statearr_42836_42848[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42849 = state_42816;
state_42816 = G__42849;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28497__auto__ = function(state_42816){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28497__auto____1.call(this,state_42816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28497__auto____0;
figwheel$client$file_reloading$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28497__auto____1;
return figwheel$client$file_reloading$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_42837 = f__28609__auto__.call(null);
(statearr_42837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_42837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__))
);

return c__28608__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42850,callback){
var map__42853 = p__42850;
var map__42853__$1 = ((((!((map__42853 == null)))?((((map__42853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42853):map__42853);
var file_msg = map__42853__$1;
var namespace = cljs.core.get.call(null,map__42853__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42853,map__42853__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42853,map__42853__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42855){
var map__42858 = p__42855;
var map__42858__$1 = ((((!((map__42858 == null)))?((((map__42858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42858):map__42858);
var file_msg = map__42858__$1;
var namespace = cljs.core.get.call(null,map__42858__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24778__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24778__auto__){
var or__24790__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
var or__24790__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto____$1)){
return or__24790__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24778__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42860,callback){
var map__42863 = p__42860;
var map__42863__$1 = ((((!((map__42863 == null)))?((((map__42863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42863):map__42863);
var file_msg = map__42863__$1;
var request_url = cljs.core.get.call(null,map__42863__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42863__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28608__auto___42967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___42967,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___42967,out){
return (function (state_42949){
var state_val_42950 = (state_42949[(1)]);
if((state_val_42950 === (1))){
var inst_42923 = cljs.core.seq.call(null,files);
var inst_42924 = cljs.core.first.call(null,inst_42923);
var inst_42925 = cljs.core.next.call(null,inst_42923);
var inst_42926 = files;
var state_42949__$1 = (function (){var statearr_42951 = state_42949;
(statearr_42951[(7)] = inst_42926);

(statearr_42951[(8)] = inst_42925);

(statearr_42951[(9)] = inst_42924);

return statearr_42951;
})();
var statearr_42952_42968 = state_42949__$1;
(statearr_42952_42968[(2)] = null);

(statearr_42952_42968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42950 === (2))){
var inst_42932 = (state_42949[(10)]);
var inst_42926 = (state_42949[(7)]);
var inst_42931 = cljs.core.seq.call(null,inst_42926);
var inst_42932__$1 = cljs.core.first.call(null,inst_42931);
var inst_42933 = cljs.core.next.call(null,inst_42931);
var inst_42934 = (inst_42932__$1 == null);
var inst_42935 = cljs.core.not.call(null,inst_42934);
var state_42949__$1 = (function (){var statearr_42953 = state_42949;
(statearr_42953[(10)] = inst_42932__$1);

(statearr_42953[(11)] = inst_42933);

return statearr_42953;
})();
if(inst_42935){
var statearr_42954_42969 = state_42949__$1;
(statearr_42954_42969[(1)] = (4));

} else {
var statearr_42955_42970 = state_42949__$1;
(statearr_42955_42970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42950 === (3))){
var inst_42947 = (state_42949[(2)]);
var state_42949__$1 = state_42949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42949__$1,inst_42947);
} else {
if((state_val_42950 === (4))){
var inst_42932 = (state_42949[(10)]);
var inst_42937 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42932);
var state_42949__$1 = state_42949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42949__$1,(7),inst_42937);
} else {
if((state_val_42950 === (5))){
var inst_42943 = cljs.core.async.close_BANG_.call(null,out);
var state_42949__$1 = state_42949;
var statearr_42956_42971 = state_42949__$1;
(statearr_42956_42971[(2)] = inst_42943);

(statearr_42956_42971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42950 === (6))){
var inst_42945 = (state_42949[(2)]);
var state_42949__$1 = state_42949;
var statearr_42957_42972 = state_42949__$1;
(statearr_42957_42972[(2)] = inst_42945);

(statearr_42957_42972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42950 === (7))){
var inst_42933 = (state_42949[(11)]);
var inst_42939 = (state_42949[(2)]);
var inst_42940 = cljs.core.async.put_BANG_.call(null,out,inst_42939);
var inst_42926 = inst_42933;
var state_42949__$1 = (function (){var statearr_42958 = state_42949;
(statearr_42958[(7)] = inst_42926);

(statearr_42958[(12)] = inst_42940);

return statearr_42958;
})();
var statearr_42959_42973 = state_42949__$1;
(statearr_42959_42973[(2)] = null);

(statearr_42959_42973[(1)] = (2));


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
});})(c__28608__auto___42967,out))
;
return ((function (switch__28496__auto__,c__28608__auto___42967,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____0 = (function (){
var statearr_42963 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42963[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__);

(statearr_42963[(1)] = (1));

return statearr_42963;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____1 = (function (state_42949){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_42949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e42964){if((e42964 instanceof Object)){
var ex__28500__auto__ = e42964;
var statearr_42965_42974 = state_42949;
(statearr_42965_42974[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42975 = state_42949;
state_42949 = G__42975;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__ = function(state_42949){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____1.call(this,state_42949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___42967,out))
})();
var state__28610__auto__ = (function (){var statearr_42966 = f__28609__auto__.call(null);
(statearr_42966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___42967);

return statearr_42966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___42967,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42976,opts){
var map__42980 = p__42976;
var map__42980__$1 = ((((!((map__42980 == null)))?((((map__42980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42980):map__42980);
var eval_body__$1 = cljs.core.get.call(null,map__42980__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42980__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24778__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24778__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24778__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42982){var e = e42982;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42983_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42983_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42992){
var vec__42993 = p__42992;
var k = cljs.core.nth.call(null,vec__42993,(0),null);
var v = cljs.core.nth.call(null,vec__42993,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42996){
var vec__42997 = p__42996;
var k = cljs.core.nth.call(null,vec__42997,(0),null);
var v = cljs.core.nth.call(null,vec__42997,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43003,p__43004){
var map__43251 = p__43003;
var map__43251__$1 = ((((!((map__43251 == null)))?((((map__43251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43251):map__43251);
var opts = map__43251__$1;
var before_jsload = cljs.core.get.call(null,map__43251__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43251__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43251__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43252 = p__43004;
var map__43252__$1 = ((((!((map__43252 == null)))?((((map__43252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43252):map__43252);
var msg = map__43252__$1;
var files = cljs.core.get.call(null,map__43252__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43252__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43252__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43405){
var state_val_43406 = (state_43405[(1)]);
if((state_val_43406 === (7))){
var inst_43269 = (state_43405[(7)]);
var inst_43267 = (state_43405[(8)]);
var inst_43268 = (state_43405[(9)]);
var inst_43266 = (state_43405[(10)]);
var inst_43274 = cljs.core._nth.call(null,inst_43267,inst_43269);
var inst_43275 = figwheel.client.file_reloading.eval_body.call(null,inst_43274,opts);
var inst_43276 = (inst_43269 + (1));
var tmp43407 = inst_43267;
var tmp43408 = inst_43268;
var tmp43409 = inst_43266;
var inst_43266__$1 = tmp43409;
var inst_43267__$1 = tmp43407;
var inst_43268__$1 = tmp43408;
var inst_43269__$1 = inst_43276;
var state_43405__$1 = (function (){var statearr_43410 = state_43405;
(statearr_43410[(7)] = inst_43269__$1);

(statearr_43410[(8)] = inst_43267__$1);

(statearr_43410[(11)] = inst_43275);

(statearr_43410[(9)] = inst_43268__$1);

(statearr_43410[(10)] = inst_43266__$1);

return statearr_43410;
})();
var statearr_43411_43497 = state_43405__$1;
(statearr_43411_43497[(2)] = null);

(statearr_43411_43497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (20))){
var inst_43309 = (state_43405[(12)]);
var inst_43317 = figwheel.client.file_reloading.sort_files.call(null,inst_43309);
var state_43405__$1 = state_43405;
var statearr_43412_43498 = state_43405__$1;
(statearr_43412_43498[(2)] = inst_43317);

(statearr_43412_43498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (27))){
var state_43405__$1 = state_43405;
var statearr_43413_43499 = state_43405__$1;
(statearr_43413_43499[(2)] = null);

(statearr_43413_43499[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (1))){
var inst_43258 = (state_43405[(13)]);
var inst_43255 = before_jsload.call(null,files);
var inst_43256 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43257 = (function (){return ((function (inst_43258,inst_43255,inst_43256,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43000_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43000_SHARP_);
});
;})(inst_43258,inst_43255,inst_43256,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43258__$1 = cljs.core.filter.call(null,inst_43257,files);
var inst_43259 = cljs.core.not_empty.call(null,inst_43258__$1);
var state_43405__$1 = (function (){var statearr_43414 = state_43405;
(statearr_43414[(13)] = inst_43258__$1);

(statearr_43414[(14)] = inst_43255);

(statearr_43414[(15)] = inst_43256);

return statearr_43414;
})();
if(cljs.core.truth_(inst_43259)){
var statearr_43415_43500 = state_43405__$1;
(statearr_43415_43500[(1)] = (2));

} else {
var statearr_43416_43501 = state_43405__$1;
(statearr_43416_43501[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (24))){
var state_43405__$1 = state_43405;
var statearr_43417_43502 = state_43405__$1;
(statearr_43417_43502[(2)] = null);

(statearr_43417_43502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (39))){
var inst_43359 = (state_43405[(16)]);
var state_43405__$1 = state_43405;
var statearr_43418_43503 = state_43405__$1;
(statearr_43418_43503[(2)] = inst_43359);

(statearr_43418_43503[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (46))){
var inst_43400 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43419_43504 = state_43405__$1;
(statearr_43419_43504[(2)] = inst_43400);

(statearr_43419_43504[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (4))){
var inst_43303 = (state_43405[(2)]);
var inst_43304 = cljs.core.List.EMPTY;
var inst_43305 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43304);
var inst_43306 = (function (){return ((function (inst_43303,inst_43304,inst_43305,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43001_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43001_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43001_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_43303,inst_43304,inst_43305,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43307 = cljs.core.filter.call(null,inst_43306,files);
var inst_43308 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43309 = cljs.core.concat.call(null,inst_43307,inst_43308);
var state_43405__$1 = (function (){var statearr_43420 = state_43405;
(statearr_43420[(17)] = inst_43305);

(statearr_43420[(18)] = inst_43303);

(statearr_43420[(12)] = inst_43309);

return statearr_43420;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43421_43505 = state_43405__$1;
(statearr_43421_43505[(1)] = (16));

} else {
var statearr_43422_43506 = state_43405__$1;
(statearr_43422_43506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (15))){
var inst_43293 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43423_43507 = state_43405__$1;
(statearr_43423_43507[(2)] = inst_43293);

(statearr_43423_43507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (21))){
var inst_43319 = (state_43405[(19)]);
var inst_43319__$1 = (state_43405[(2)]);
var inst_43320 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43319__$1);
var state_43405__$1 = (function (){var statearr_43424 = state_43405;
(statearr_43424[(19)] = inst_43319__$1);

return statearr_43424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43405__$1,(22),inst_43320);
} else {
if((state_val_43406 === (31))){
var inst_43403 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43405__$1,inst_43403);
} else {
if((state_val_43406 === (32))){
var inst_43359 = (state_43405[(16)]);
var inst_43364 = inst_43359.cljs$lang$protocol_mask$partition0$;
var inst_43365 = (inst_43364 & (64));
var inst_43366 = inst_43359.cljs$core$ISeq$;
var inst_43367 = (inst_43365) || (inst_43366);
var state_43405__$1 = state_43405;
if(cljs.core.truth_(inst_43367)){
var statearr_43425_43508 = state_43405__$1;
(statearr_43425_43508[(1)] = (35));

} else {
var statearr_43426_43509 = state_43405__$1;
(statearr_43426_43509[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (40))){
var inst_43380 = (state_43405[(20)]);
var inst_43379 = (state_43405[(2)]);
var inst_43380__$1 = cljs.core.get.call(null,inst_43379,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43381 = cljs.core.get.call(null,inst_43379,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43382 = cljs.core.not_empty.call(null,inst_43380__$1);
var state_43405__$1 = (function (){var statearr_43427 = state_43405;
(statearr_43427[(20)] = inst_43380__$1);

(statearr_43427[(21)] = inst_43381);

return statearr_43427;
})();
if(cljs.core.truth_(inst_43382)){
var statearr_43428_43510 = state_43405__$1;
(statearr_43428_43510[(1)] = (41));

} else {
var statearr_43429_43511 = state_43405__$1;
(statearr_43429_43511[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (33))){
var state_43405__$1 = state_43405;
var statearr_43430_43512 = state_43405__$1;
(statearr_43430_43512[(2)] = false);

(statearr_43430_43512[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (13))){
var inst_43279 = (state_43405[(22)]);
var inst_43283 = cljs.core.chunk_first.call(null,inst_43279);
var inst_43284 = cljs.core.chunk_rest.call(null,inst_43279);
var inst_43285 = cljs.core.count.call(null,inst_43283);
var inst_43266 = inst_43284;
var inst_43267 = inst_43283;
var inst_43268 = inst_43285;
var inst_43269 = (0);
var state_43405__$1 = (function (){var statearr_43431 = state_43405;
(statearr_43431[(7)] = inst_43269);

(statearr_43431[(8)] = inst_43267);

(statearr_43431[(9)] = inst_43268);

(statearr_43431[(10)] = inst_43266);

return statearr_43431;
})();
var statearr_43432_43513 = state_43405__$1;
(statearr_43432_43513[(2)] = null);

(statearr_43432_43513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (22))){
var inst_43322 = (state_43405[(23)]);
var inst_43323 = (state_43405[(24)]);
var inst_43327 = (state_43405[(25)]);
var inst_43319 = (state_43405[(19)]);
var inst_43322__$1 = (state_43405[(2)]);
var inst_43323__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43322__$1);
var inst_43324 = (function (){var all_files = inst_43319;
var res_SINGLEQUOTE_ = inst_43322__$1;
var res = inst_43323__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43322,inst_43323,inst_43327,inst_43319,inst_43322__$1,inst_43323__$1,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43002_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43002_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43322,inst_43323,inst_43327,inst_43319,inst_43322__$1,inst_43323__$1,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43325 = cljs.core.filter.call(null,inst_43324,inst_43322__$1);
var inst_43326 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43327__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43326);
var inst_43328 = cljs.core.not_empty.call(null,inst_43327__$1);
var state_43405__$1 = (function (){var statearr_43433 = state_43405;
(statearr_43433[(23)] = inst_43322__$1);

(statearr_43433[(24)] = inst_43323__$1);

(statearr_43433[(25)] = inst_43327__$1);

(statearr_43433[(26)] = inst_43325);

return statearr_43433;
})();
if(cljs.core.truth_(inst_43328)){
var statearr_43434_43514 = state_43405__$1;
(statearr_43434_43514[(1)] = (23));

} else {
var statearr_43435_43515 = state_43405__$1;
(statearr_43435_43515[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (36))){
var state_43405__$1 = state_43405;
var statearr_43436_43516 = state_43405__$1;
(statearr_43436_43516[(2)] = false);

(statearr_43436_43516[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (41))){
var inst_43380 = (state_43405[(20)]);
var inst_43384 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43385 = cljs.core.map.call(null,inst_43384,inst_43380);
var inst_43386 = cljs.core.pr_str.call(null,inst_43385);
var inst_43387 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_43386)].join('');
var inst_43388 = figwheel.client.utils.log.call(null,inst_43387);
var state_43405__$1 = state_43405;
var statearr_43437_43517 = state_43405__$1;
(statearr_43437_43517[(2)] = inst_43388);

(statearr_43437_43517[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (43))){
var inst_43381 = (state_43405[(21)]);
var inst_43391 = (state_43405[(2)]);
var inst_43392 = cljs.core.not_empty.call(null,inst_43381);
var state_43405__$1 = (function (){var statearr_43438 = state_43405;
(statearr_43438[(27)] = inst_43391);

return statearr_43438;
})();
if(cljs.core.truth_(inst_43392)){
var statearr_43439_43518 = state_43405__$1;
(statearr_43439_43518[(1)] = (44));

} else {
var statearr_43440_43519 = state_43405__$1;
(statearr_43440_43519[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (29))){
var inst_43322 = (state_43405[(23)]);
var inst_43323 = (state_43405[(24)]);
var inst_43327 = (state_43405[(25)]);
var inst_43319 = (state_43405[(19)]);
var inst_43359 = (state_43405[(16)]);
var inst_43325 = (state_43405[(26)]);
var inst_43355 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43358 = (function (){var all_files = inst_43319;
var res_SINGLEQUOTE_ = inst_43322;
var res = inst_43323;
var files_not_loaded = inst_43325;
var dependencies_that_loaded = inst_43327;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43322,inst_43323,inst_43327,inst_43319,inst_43359,inst_43325,inst_43355,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43357){
var map__43441 = p__43357;
var map__43441__$1 = ((((!((map__43441 == null)))?((((map__43441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43441):map__43441);
var namespace = cljs.core.get.call(null,map__43441__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43322,inst_43323,inst_43327,inst_43319,inst_43359,inst_43325,inst_43355,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43359__$1 = cljs.core.group_by.call(null,inst_43358,inst_43325);
var inst_43361 = (inst_43359__$1 == null);
var inst_43362 = cljs.core.not.call(null,inst_43361);
var state_43405__$1 = (function (){var statearr_43443 = state_43405;
(statearr_43443[(28)] = inst_43355);

(statearr_43443[(16)] = inst_43359__$1);

return statearr_43443;
})();
if(inst_43362){
var statearr_43444_43520 = state_43405__$1;
(statearr_43444_43520[(1)] = (32));

} else {
var statearr_43445_43521 = state_43405__$1;
(statearr_43445_43521[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (44))){
var inst_43381 = (state_43405[(21)]);
var inst_43394 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43381);
var inst_43395 = cljs.core.pr_str.call(null,inst_43394);
var inst_43396 = [cljs.core.str("not required: "),cljs.core.str(inst_43395)].join('');
var inst_43397 = figwheel.client.utils.log.call(null,inst_43396);
var state_43405__$1 = state_43405;
var statearr_43446_43522 = state_43405__$1;
(statearr_43446_43522[(2)] = inst_43397);

(statearr_43446_43522[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (6))){
var inst_43300 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43447_43523 = state_43405__$1;
(statearr_43447_43523[(2)] = inst_43300);

(statearr_43447_43523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (28))){
var inst_43325 = (state_43405[(26)]);
var inst_43352 = (state_43405[(2)]);
var inst_43353 = cljs.core.not_empty.call(null,inst_43325);
var state_43405__$1 = (function (){var statearr_43448 = state_43405;
(statearr_43448[(29)] = inst_43352);

return statearr_43448;
})();
if(cljs.core.truth_(inst_43353)){
var statearr_43449_43524 = state_43405__$1;
(statearr_43449_43524[(1)] = (29));

} else {
var statearr_43450_43525 = state_43405__$1;
(statearr_43450_43525[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (25))){
var inst_43323 = (state_43405[(24)]);
var inst_43339 = (state_43405[(2)]);
var inst_43340 = cljs.core.not_empty.call(null,inst_43323);
var state_43405__$1 = (function (){var statearr_43451 = state_43405;
(statearr_43451[(30)] = inst_43339);

return statearr_43451;
})();
if(cljs.core.truth_(inst_43340)){
var statearr_43452_43526 = state_43405__$1;
(statearr_43452_43526[(1)] = (26));

} else {
var statearr_43453_43527 = state_43405__$1;
(statearr_43453_43527[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (34))){
var inst_43374 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
if(cljs.core.truth_(inst_43374)){
var statearr_43454_43528 = state_43405__$1;
(statearr_43454_43528[(1)] = (38));

} else {
var statearr_43455_43529 = state_43405__$1;
(statearr_43455_43529[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (17))){
var state_43405__$1 = state_43405;
var statearr_43456_43530 = state_43405__$1;
(statearr_43456_43530[(2)] = recompile_dependents);

(statearr_43456_43530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (3))){
var state_43405__$1 = state_43405;
var statearr_43457_43531 = state_43405__$1;
(statearr_43457_43531[(2)] = null);

(statearr_43457_43531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (12))){
var inst_43296 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43458_43532 = state_43405__$1;
(statearr_43458_43532[(2)] = inst_43296);

(statearr_43458_43532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (2))){
var inst_43258 = (state_43405[(13)]);
var inst_43265 = cljs.core.seq.call(null,inst_43258);
var inst_43266 = inst_43265;
var inst_43267 = null;
var inst_43268 = (0);
var inst_43269 = (0);
var state_43405__$1 = (function (){var statearr_43459 = state_43405;
(statearr_43459[(7)] = inst_43269);

(statearr_43459[(8)] = inst_43267);

(statearr_43459[(9)] = inst_43268);

(statearr_43459[(10)] = inst_43266);

return statearr_43459;
})();
var statearr_43460_43533 = state_43405__$1;
(statearr_43460_43533[(2)] = null);

(statearr_43460_43533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (23))){
var inst_43322 = (state_43405[(23)]);
var inst_43323 = (state_43405[(24)]);
var inst_43327 = (state_43405[(25)]);
var inst_43319 = (state_43405[(19)]);
var inst_43325 = (state_43405[(26)]);
var inst_43330 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43332 = (function (){var all_files = inst_43319;
var res_SINGLEQUOTE_ = inst_43322;
var res = inst_43323;
var files_not_loaded = inst_43325;
var dependencies_that_loaded = inst_43327;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43322,inst_43323,inst_43327,inst_43319,inst_43325,inst_43330,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43331){
var map__43461 = p__43331;
var map__43461__$1 = ((((!((map__43461 == null)))?((((map__43461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43461):map__43461);
var request_url = cljs.core.get.call(null,map__43461__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43322,inst_43323,inst_43327,inst_43319,inst_43325,inst_43330,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43333 = cljs.core.reverse.call(null,inst_43327);
var inst_43334 = cljs.core.map.call(null,inst_43332,inst_43333);
var inst_43335 = cljs.core.pr_str.call(null,inst_43334);
var inst_43336 = figwheel.client.utils.log.call(null,inst_43335);
var state_43405__$1 = (function (){var statearr_43463 = state_43405;
(statearr_43463[(31)] = inst_43330);

return statearr_43463;
})();
var statearr_43464_43534 = state_43405__$1;
(statearr_43464_43534[(2)] = inst_43336);

(statearr_43464_43534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (35))){
var state_43405__$1 = state_43405;
var statearr_43465_43535 = state_43405__$1;
(statearr_43465_43535[(2)] = true);

(statearr_43465_43535[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (19))){
var inst_43309 = (state_43405[(12)]);
var inst_43315 = figwheel.client.file_reloading.expand_files.call(null,inst_43309);
var state_43405__$1 = state_43405;
var statearr_43466_43536 = state_43405__$1;
(statearr_43466_43536[(2)] = inst_43315);

(statearr_43466_43536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (11))){
var state_43405__$1 = state_43405;
var statearr_43467_43537 = state_43405__$1;
(statearr_43467_43537[(2)] = null);

(statearr_43467_43537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (9))){
var inst_43298 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43468_43538 = state_43405__$1;
(statearr_43468_43538[(2)] = inst_43298);

(statearr_43468_43538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (5))){
var inst_43269 = (state_43405[(7)]);
var inst_43268 = (state_43405[(9)]);
var inst_43271 = (inst_43269 < inst_43268);
var inst_43272 = inst_43271;
var state_43405__$1 = state_43405;
if(cljs.core.truth_(inst_43272)){
var statearr_43469_43539 = state_43405__$1;
(statearr_43469_43539[(1)] = (7));

} else {
var statearr_43470_43540 = state_43405__$1;
(statearr_43470_43540[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (14))){
var inst_43279 = (state_43405[(22)]);
var inst_43288 = cljs.core.first.call(null,inst_43279);
var inst_43289 = figwheel.client.file_reloading.eval_body.call(null,inst_43288,opts);
var inst_43290 = cljs.core.next.call(null,inst_43279);
var inst_43266 = inst_43290;
var inst_43267 = null;
var inst_43268 = (0);
var inst_43269 = (0);
var state_43405__$1 = (function (){var statearr_43471 = state_43405;
(statearr_43471[(7)] = inst_43269);

(statearr_43471[(8)] = inst_43267);

(statearr_43471[(9)] = inst_43268);

(statearr_43471[(10)] = inst_43266);

(statearr_43471[(32)] = inst_43289);

return statearr_43471;
})();
var statearr_43472_43541 = state_43405__$1;
(statearr_43472_43541[(2)] = null);

(statearr_43472_43541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (45))){
var state_43405__$1 = state_43405;
var statearr_43473_43542 = state_43405__$1;
(statearr_43473_43542[(2)] = null);

(statearr_43473_43542[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (26))){
var inst_43322 = (state_43405[(23)]);
var inst_43323 = (state_43405[(24)]);
var inst_43327 = (state_43405[(25)]);
var inst_43319 = (state_43405[(19)]);
var inst_43325 = (state_43405[(26)]);
var inst_43342 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43344 = (function (){var all_files = inst_43319;
var res_SINGLEQUOTE_ = inst_43322;
var res = inst_43323;
var files_not_loaded = inst_43325;
var dependencies_that_loaded = inst_43327;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43322,inst_43323,inst_43327,inst_43319,inst_43325,inst_43342,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43343){
var map__43474 = p__43343;
var map__43474__$1 = ((((!((map__43474 == null)))?((((map__43474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43474):map__43474);
var namespace = cljs.core.get.call(null,map__43474__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43322,inst_43323,inst_43327,inst_43319,inst_43325,inst_43342,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43345 = cljs.core.map.call(null,inst_43344,inst_43323);
var inst_43346 = cljs.core.pr_str.call(null,inst_43345);
var inst_43347 = figwheel.client.utils.log.call(null,inst_43346);
var inst_43348 = (function (){var all_files = inst_43319;
var res_SINGLEQUOTE_ = inst_43322;
var res = inst_43323;
var files_not_loaded = inst_43325;
var dependencies_that_loaded = inst_43327;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43322,inst_43323,inst_43327,inst_43319,inst_43325,inst_43342,inst_43344,inst_43345,inst_43346,inst_43347,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43322,inst_43323,inst_43327,inst_43319,inst_43325,inst_43342,inst_43344,inst_43345,inst_43346,inst_43347,state_val_43406,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43349 = setTimeout(inst_43348,(10));
var state_43405__$1 = (function (){var statearr_43476 = state_43405;
(statearr_43476[(33)] = inst_43342);

(statearr_43476[(34)] = inst_43347);

return statearr_43476;
})();
var statearr_43477_43543 = state_43405__$1;
(statearr_43477_43543[(2)] = inst_43349);

(statearr_43477_43543[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (16))){
var state_43405__$1 = state_43405;
var statearr_43478_43544 = state_43405__$1;
(statearr_43478_43544[(2)] = reload_dependents);

(statearr_43478_43544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (38))){
var inst_43359 = (state_43405[(16)]);
var inst_43376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43359);
var state_43405__$1 = state_43405;
var statearr_43479_43545 = state_43405__$1;
(statearr_43479_43545[(2)] = inst_43376);

(statearr_43479_43545[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (30))){
var state_43405__$1 = state_43405;
var statearr_43480_43546 = state_43405__$1;
(statearr_43480_43546[(2)] = null);

(statearr_43480_43546[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (10))){
var inst_43279 = (state_43405[(22)]);
var inst_43281 = cljs.core.chunked_seq_QMARK_.call(null,inst_43279);
var state_43405__$1 = state_43405;
if(inst_43281){
var statearr_43481_43547 = state_43405__$1;
(statearr_43481_43547[(1)] = (13));

} else {
var statearr_43482_43548 = state_43405__$1;
(statearr_43482_43548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (18))){
var inst_43313 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
if(cljs.core.truth_(inst_43313)){
var statearr_43483_43549 = state_43405__$1;
(statearr_43483_43549[(1)] = (19));

} else {
var statearr_43484_43550 = state_43405__$1;
(statearr_43484_43550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (42))){
var state_43405__$1 = state_43405;
var statearr_43485_43551 = state_43405__$1;
(statearr_43485_43551[(2)] = null);

(statearr_43485_43551[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (37))){
var inst_43371 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43486_43552 = state_43405__$1;
(statearr_43486_43552[(2)] = inst_43371);

(statearr_43486_43552[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (8))){
var inst_43266 = (state_43405[(10)]);
var inst_43279 = (state_43405[(22)]);
var inst_43279__$1 = cljs.core.seq.call(null,inst_43266);
var state_43405__$1 = (function (){var statearr_43487 = state_43405;
(statearr_43487[(22)] = inst_43279__$1);

return statearr_43487;
})();
if(inst_43279__$1){
var statearr_43488_43553 = state_43405__$1;
(statearr_43488_43553[(1)] = (10));

} else {
var statearr_43489_43554 = state_43405__$1;
(statearr_43489_43554[(1)] = (11));

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
});})(c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28496__auto__,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____0 = (function (){
var statearr_43493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43493[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__);

(statearr_43493[(1)] = (1));

return statearr_43493;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____1 = (function (state_43405){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_43405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e43494){if((e43494 instanceof Object)){
var ex__28500__auto__ = e43494;
var statearr_43495_43555 = state_43405;
(statearr_43495_43555[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43556 = state_43405;
state_43405 = G__43556;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__ = function(state_43405){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____1.call(this,state_43405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28610__auto__ = (function (){var statearr_43496 = f__28609__auto__.call(null);
(statearr_43496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_43496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__,map__43251,map__43251__$1,opts,before_jsload,on_jsload,reload_dependents,map__43252,map__43252__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28608__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43559,link){
var map__43562 = p__43559;
var map__43562__$1 = ((((!((map__43562 == null)))?((((map__43562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43562):map__43562);
var file = cljs.core.get.call(null,map__43562__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__43562,map__43562__$1,file){
return (function (p1__43557_SHARP_,p2__43558_SHARP_){
if(cljs.core._EQ_.call(null,p1__43557_SHARP_,p2__43558_SHARP_)){
return p1__43557_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__43562,map__43562__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43568){
var map__43569 = p__43568;
var map__43569__$1 = ((((!((map__43569 == null)))?((((map__43569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43569):map__43569);
var match_length = cljs.core.get.call(null,map__43569__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43569__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43564_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43564_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args43571 = [];
var len__25865__auto___43574 = arguments.length;
var i__25866__auto___43575 = (0);
while(true){
if((i__25866__auto___43575 < len__25865__auto___43574)){
args43571.push((arguments[i__25866__auto___43575]));

var G__43576 = (i__25866__auto___43575 + (1));
i__25866__auto___43575 = G__43576;
continue;
} else {
}
break;
}

var G__43573 = args43571.length;
switch (G__43573) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43571.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43578_SHARP_,p2__43579_SHARP_){
return cljs.core.assoc.call(null,p1__43578_SHARP_,cljs.core.get.call(null,p2__43579_SHARP_,key),p2__43579_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__43580){
var map__43583 = p__43580;
var map__43583__$1 = ((((!((map__43583 == null)))?((((map__43583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43583):map__43583);
var f_data = map__43583__$1;
var file = cljs.core.get.call(null,map__43583__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43585,p__43586){
var map__43595 = p__43585;
var map__43595__$1 = ((((!((map__43595 == null)))?((((map__43595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43595):map__43595);
var opts = map__43595__$1;
var on_cssload = cljs.core.get.call(null,map__43595__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__43596 = p__43586;
var map__43596__$1 = ((((!((map__43596 == null)))?((((map__43596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43596):map__43596);
var files_msg = map__43596__$1;
var files = cljs.core.get.call(null,map__43596__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43599_43603 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__43600_43604 = null;
var count__43601_43605 = (0);
var i__43602_43606 = (0);
while(true){
if((i__43602_43606 < count__43601_43605)){
var f_43607 = cljs.core._nth.call(null,chunk__43600_43604,i__43602_43606);
figwheel.client.file_reloading.reload_css_file.call(null,f_43607);

var G__43608 = seq__43599_43603;
var G__43609 = chunk__43600_43604;
var G__43610 = count__43601_43605;
var G__43611 = (i__43602_43606 + (1));
seq__43599_43603 = G__43608;
chunk__43600_43604 = G__43609;
count__43601_43605 = G__43610;
i__43602_43606 = G__43611;
continue;
} else {
var temp__4657__auto___43612 = cljs.core.seq.call(null,seq__43599_43603);
if(temp__4657__auto___43612){
var seq__43599_43613__$1 = temp__4657__auto___43612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43599_43613__$1)){
var c__25601__auto___43614 = cljs.core.chunk_first.call(null,seq__43599_43613__$1);
var G__43615 = cljs.core.chunk_rest.call(null,seq__43599_43613__$1);
var G__43616 = c__25601__auto___43614;
var G__43617 = cljs.core.count.call(null,c__25601__auto___43614);
var G__43618 = (0);
seq__43599_43603 = G__43615;
chunk__43600_43604 = G__43616;
count__43601_43605 = G__43617;
i__43602_43606 = G__43618;
continue;
} else {
var f_43619 = cljs.core.first.call(null,seq__43599_43613__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43619);

var G__43620 = cljs.core.next.call(null,seq__43599_43613__$1);
var G__43621 = null;
var G__43622 = (0);
var G__43623 = (0);
seq__43599_43603 = G__43620;
chunk__43600_43604 = G__43621;
count__43601_43605 = G__43622;
i__43602_43606 = G__43623;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__43595,map__43595__$1,opts,on_cssload,map__43596,map__43596__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__43595,map__43595__$1,opts,on_cssload,map__43596,map__43596__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1475623453797