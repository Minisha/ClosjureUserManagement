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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33962_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33962_SHARP_));
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
var seq__33967 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33968 = null;
var count__33969 = (0);
var i__33970 = (0);
while(true){
if((i__33970 < count__33969)){
var n = cljs.core._nth.call(null,chunk__33968,i__33970);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33971 = seq__33967;
var G__33972 = chunk__33968;
var G__33973 = count__33969;
var G__33974 = (i__33970 + (1));
seq__33967 = G__33971;
chunk__33968 = G__33972;
count__33969 = G__33973;
i__33970 = G__33974;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33967);
if(temp__4657__auto__){
var seq__33967__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33967__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__33967__$1);
var G__33975 = cljs.core.chunk_rest.call(null,seq__33967__$1);
var G__33976 = c__25601__auto__;
var G__33977 = cljs.core.count.call(null,c__25601__auto__);
var G__33978 = (0);
seq__33967 = G__33975;
chunk__33968 = G__33976;
count__33969 = G__33977;
i__33970 = G__33978;
continue;
} else {
var n = cljs.core.first.call(null,seq__33967__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33979 = cljs.core.next.call(null,seq__33967__$1);
var G__33980 = null;
var G__33981 = (0);
var G__33982 = (0);
seq__33967 = G__33979;
chunk__33968 = G__33980;
count__33969 = G__33981;
i__33970 = G__33982;
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

var seq__34033_34044 = cljs.core.seq.call(null,deps);
var chunk__34034_34045 = null;
var count__34035_34046 = (0);
var i__34036_34047 = (0);
while(true){
if((i__34036_34047 < count__34035_34046)){
var dep_34048 = cljs.core._nth.call(null,chunk__34034_34045,i__34036_34047);
topo_sort_helper_STAR_.call(null,dep_34048,(depth + (1)),state);

var G__34049 = seq__34033_34044;
var G__34050 = chunk__34034_34045;
var G__34051 = count__34035_34046;
var G__34052 = (i__34036_34047 + (1));
seq__34033_34044 = G__34049;
chunk__34034_34045 = G__34050;
count__34035_34046 = G__34051;
i__34036_34047 = G__34052;
continue;
} else {
var temp__4657__auto___34053 = cljs.core.seq.call(null,seq__34033_34044);
if(temp__4657__auto___34053){
var seq__34033_34054__$1 = temp__4657__auto___34053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34033_34054__$1)){
var c__25601__auto___34055 = cljs.core.chunk_first.call(null,seq__34033_34054__$1);
var G__34056 = cljs.core.chunk_rest.call(null,seq__34033_34054__$1);
var G__34057 = c__25601__auto___34055;
var G__34058 = cljs.core.count.call(null,c__25601__auto___34055);
var G__34059 = (0);
seq__34033_34044 = G__34056;
chunk__34034_34045 = G__34057;
count__34035_34046 = G__34058;
i__34036_34047 = G__34059;
continue;
} else {
var dep_34060 = cljs.core.first.call(null,seq__34033_34054__$1);
topo_sort_helper_STAR_.call(null,dep_34060,(depth + (1)),state);

var G__34061 = cljs.core.next.call(null,seq__34033_34054__$1);
var G__34062 = null;
var G__34063 = (0);
var G__34064 = (0);
seq__34033_34044 = G__34061;
chunk__34034_34045 = G__34062;
count__34035_34046 = G__34063;
i__34036_34047 = G__34064;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34037){
var vec__34041 = p__34037;
var seq__34042 = cljs.core.seq.call(null,vec__34041);
var first__34043 = cljs.core.first.call(null,seq__34042);
var seq__34042__$1 = cljs.core.next.call(null,seq__34042);
var x = first__34043;
var xs = seq__34042__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34041,seq__34042,first__34043,seq__34042__$1,x,xs,get_deps__$1){
return (function (p1__33983_SHARP_){
return clojure.set.difference.call(null,p1__33983_SHARP_,x);
});})(vec__34041,seq__34042,first__34043,seq__34042__$1,x,xs,get_deps__$1))
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
var seq__34077 = cljs.core.seq.call(null,provides);
var chunk__34078 = null;
var count__34079 = (0);
var i__34080 = (0);
while(true){
if((i__34080 < count__34079)){
var prov = cljs.core._nth.call(null,chunk__34078,i__34080);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34081_34089 = cljs.core.seq.call(null,requires);
var chunk__34082_34090 = null;
var count__34083_34091 = (0);
var i__34084_34092 = (0);
while(true){
if((i__34084_34092 < count__34083_34091)){
var req_34093 = cljs.core._nth.call(null,chunk__34082_34090,i__34084_34092);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34093,prov);

var G__34094 = seq__34081_34089;
var G__34095 = chunk__34082_34090;
var G__34096 = count__34083_34091;
var G__34097 = (i__34084_34092 + (1));
seq__34081_34089 = G__34094;
chunk__34082_34090 = G__34095;
count__34083_34091 = G__34096;
i__34084_34092 = G__34097;
continue;
} else {
var temp__4657__auto___34098 = cljs.core.seq.call(null,seq__34081_34089);
if(temp__4657__auto___34098){
var seq__34081_34099__$1 = temp__4657__auto___34098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34081_34099__$1)){
var c__25601__auto___34100 = cljs.core.chunk_first.call(null,seq__34081_34099__$1);
var G__34101 = cljs.core.chunk_rest.call(null,seq__34081_34099__$1);
var G__34102 = c__25601__auto___34100;
var G__34103 = cljs.core.count.call(null,c__25601__auto___34100);
var G__34104 = (0);
seq__34081_34089 = G__34101;
chunk__34082_34090 = G__34102;
count__34083_34091 = G__34103;
i__34084_34092 = G__34104;
continue;
} else {
var req_34105 = cljs.core.first.call(null,seq__34081_34099__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34105,prov);

var G__34106 = cljs.core.next.call(null,seq__34081_34099__$1);
var G__34107 = null;
var G__34108 = (0);
var G__34109 = (0);
seq__34081_34089 = G__34106;
chunk__34082_34090 = G__34107;
count__34083_34091 = G__34108;
i__34084_34092 = G__34109;
continue;
}
} else {
}
}
break;
}

var G__34110 = seq__34077;
var G__34111 = chunk__34078;
var G__34112 = count__34079;
var G__34113 = (i__34080 + (1));
seq__34077 = G__34110;
chunk__34078 = G__34111;
count__34079 = G__34112;
i__34080 = G__34113;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34077);
if(temp__4657__auto__){
var seq__34077__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34077__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__34077__$1);
var G__34114 = cljs.core.chunk_rest.call(null,seq__34077__$1);
var G__34115 = c__25601__auto__;
var G__34116 = cljs.core.count.call(null,c__25601__auto__);
var G__34117 = (0);
seq__34077 = G__34114;
chunk__34078 = G__34115;
count__34079 = G__34116;
i__34080 = G__34117;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34077__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34085_34118 = cljs.core.seq.call(null,requires);
var chunk__34086_34119 = null;
var count__34087_34120 = (0);
var i__34088_34121 = (0);
while(true){
if((i__34088_34121 < count__34087_34120)){
var req_34122 = cljs.core._nth.call(null,chunk__34086_34119,i__34088_34121);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34122,prov);

var G__34123 = seq__34085_34118;
var G__34124 = chunk__34086_34119;
var G__34125 = count__34087_34120;
var G__34126 = (i__34088_34121 + (1));
seq__34085_34118 = G__34123;
chunk__34086_34119 = G__34124;
count__34087_34120 = G__34125;
i__34088_34121 = G__34126;
continue;
} else {
var temp__4657__auto___34127__$1 = cljs.core.seq.call(null,seq__34085_34118);
if(temp__4657__auto___34127__$1){
var seq__34085_34128__$1 = temp__4657__auto___34127__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34085_34128__$1)){
var c__25601__auto___34129 = cljs.core.chunk_first.call(null,seq__34085_34128__$1);
var G__34130 = cljs.core.chunk_rest.call(null,seq__34085_34128__$1);
var G__34131 = c__25601__auto___34129;
var G__34132 = cljs.core.count.call(null,c__25601__auto___34129);
var G__34133 = (0);
seq__34085_34118 = G__34130;
chunk__34086_34119 = G__34131;
count__34087_34120 = G__34132;
i__34088_34121 = G__34133;
continue;
} else {
var req_34134 = cljs.core.first.call(null,seq__34085_34128__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34134,prov);

var G__34135 = cljs.core.next.call(null,seq__34085_34128__$1);
var G__34136 = null;
var G__34137 = (0);
var G__34138 = (0);
seq__34085_34118 = G__34135;
chunk__34086_34119 = G__34136;
count__34087_34120 = G__34137;
i__34088_34121 = G__34138;
continue;
}
} else {
}
}
break;
}

var G__34139 = cljs.core.next.call(null,seq__34077__$1);
var G__34140 = null;
var G__34141 = (0);
var G__34142 = (0);
seq__34077 = G__34139;
chunk__34078 = G__34140;
count__34079 = G__34141;
i__34080 = G__34142;
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
var seq__34147_34151 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34148_34152 = null;
var count__34149_34153 = (0);
var i__34150_34154 = (0);
while(true){
if((i__34150_34154 < count__34149_34153)){
var ns_34155 = cljs.core._nth.call(null,chunk__34148_34152,i__34150_34154);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34155);

var G__34156 = seq__34147_34151;
var G__34157 = chunk__34148_34152;
var G__34158 = count__34149_34153;
var G__34159 = (i__34150_34154 + (1));
seq__34147_34151 = G__34156;
chunk__34148_34152 = G__34157;
count__34149_34153 = G__34158;
i__34150_34154 = G__34159;
continue;
} else {
var temp__4657__auto___34160 = cljs.core.seq.call(null,seq__34147_34151);
if(temp__4657__auto___34160){
var seq__34147_34161__$1 = temp__4657__auto___34160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34147_34161__$1)){
var c__25601__auto___34162 = cljs.core.chunk_first.call(null,seq__34147_34161__$1);
var G__34163 = cljs.core.chunk_rest.call(null,seq__34147_34161__$1);
var G__34164 = c__25601__auto___34162;
var G__34165 = cljs.core.count.call(null,c__25601__auto___34162);
var G__34166 = (0);
seq__34147_34151 = G__34163;
chunk__34148_34152 = G__34164;
count__34149_34153 = G__34165;
i__34150_34154 = G__34166;
continue;
} else {
var ns_34167 = cljs.core.first.call(null,seq__34147_34161__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34167);

var G__34168 = cljs.core.next.call(null,seq__34147_34161__$1);
var G__34169 = null;
var G__34170 = (0);
var G__34171 = (0);
seq__34147_34151 = G__34168;
chunk__34148_34152 = G__34169;
count__34149_34153 = G__34170;
i__34150_34154 = G__34171;
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
var G__34172__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34173__i = 0, G__34173__a = new Array(arguments.length -  0);
while (G__34173__i < G__34173__a.length) {G__34173__a[G__34173__i] = arguments[G__34173__i + 0]; ++G__34173__i;}
  args = new cljs.core.IndexedSeq(G__34173__a,0);
} 
return G__34172__delegate.call(this,args);};
G__34172.cljs$lang$maxFixedArity = 0;
G__34172.cljs$lang$applyTo = (function (arglist__34174){
var args = cljs.core.seq(arglist__34174);
return G__34172__delegate(args);
});
G__34172.cljs$core$IFn$_invoke$arity$variadic = G__34172__delegate;
return G__34172;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34176 = cljs.core._EQ_;
var expr__34177 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34176.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34177))){
var path_parts = ((function (pred__34176,expr__34177){
return (function (p1__34175_SHARP_){
return clojure.string.split.call(null,p1__34175_SHARP_,/[\/\\]/);
});})(pred__34176,expr__34177))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34176,expr__34177){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34179){if((e34179 instanceof Error)){
var e = e34179;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34179;

}
}})());
});
;})(path_parts,sep,root,pred__34176,expr__34177))
} else {
if(cljs.core.truth_(pred__34176.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34177))){
return ((function (pred__34176,expr__34177){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34176,expr__34177){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34176,expr__34177))
);

return deferred.addErrback(((function (deferred,pred__34176,expr__34177){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34176,expr__34177))
);
});
;})(pred__34176,expr__34177))
} else {
return ((function (pred__34176,expr__34177){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34176,expr__34177))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34180,callback){
var map__34183 = p__34180;
var map__34183__$1 = ((((!((map__34183 == null)))?((((map__34183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34183):map__34183);
var file_msg = map__34183__$1;
var request_url = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34183,map__34183__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34183,map__34183__$1,file_msg,request_url))
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
return (function (state_34207){
var state_val_34208 = (state_34207[(1)]);
if((state_val_34208 === (7))){
var inst_34203 = (state_34207[(2)]);
var state_34207__$1 = state_34207;
var statearr_34209_34229 = state_34207__$1;
(statearr_34209_34229[(2)] = inst_34203);

(statearr_34209_34229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (1))){
var state_34207__$1 = state_34207;
var statearr_34210_34230 = state_34207__$1;
(statearr_34210_34230[(2)] = null);

(statearr_34210_34230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (4))){
var inst_34187 = (state_34207[(7)]);
var inst_34187__$1 = (state_34207[(2)]);
var state_34207__$1 = (function (){var statearr_34211 = state_34207;
(statearr_34211[(7)] = inst_34187__$1);

return statearr_34211;
})();
if(cljs.core.truth_(inst_34187__$1)){
var statearr_34212_34231 = state_34207__$1;
(statearr_34212_34231[(1)] = (5));

} else {
var statearr_34213_34232 = state_34207__$1;
(statearr_34213_34232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (6))){
var state_34207__$1 = state_34207;
var statearr_34214_34233 = state_34207__$1;
(statearr_34214_34233[(2)] = null);

(statearr_34214_34233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (3))){
var inst_34205 = (state_34207[(2)]);
var state_34207__$1 = state_34207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34207__$1,inst_34205);
} else {
if((state_val_34208 === (2))){
var state_34207__$1 = state_34207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34207__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34208 === (11))){
var inst_34199 = (state_34207[(2)]);
var state_34207__$1 = (function (){var statearr_34215 = state_34207;
(statearr_34215[(8)] = inst_34199);

return statearr_34215;
})();
var statearr_34216_34234 = state_34207__$1;
(statearr_34216_34234[(2)] = null);

(statearr_34216_34234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (9))){
var inst_34193 = (state_34207[(9)]);
var inst_34191 = (state_34207[(10)]);
var inst_34195 = inst_34193.call(null,inst_34191);
var state_34207__$1 = state_34207;
var statearr_34217_34235 = state_34207__$1;
(statearr_34217_34235[(2)] = inst_34195);

(statearr_34217_34235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (5))){
var inst_34187 = (state_34207[(7)]);
var inst_34189 = figwheel.client.file_reloading.blocking_load.call(null,inst_34187);
var state_34207__$1 = state_34207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34207__$1,(8),inst_34189);
} else {
if((state_val_34208 === (10))){
var inst_34191 = (state_34207[(10)]);
var inst_34197 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34191);
var state_34207__$1 = state_34207;
var statearr_34218_34236 = state_34207__$1;
(statearr_34218_34236[(2)] = inst_34197);

(statearr_34218_34236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34208 === (8))){
var inst_34193 = (state_34207[(9)]);
var inst_34187 = (state_34207[(7)]);
var inst_34191 = (state_34207[(2)]);
var inst_34192 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34193__$1 = cljs.core.get.call(null,inst_34192,inst_34187);
var state_34207__$1 = (function (){var statearr_34219 = state_34207;
(statearr_34219[(9)] = inst_34193__$1);

(statearr_34219[(10)] = inst_34191);

return statearr_34219;
})();
if(cljs.core.truth_(inst_34193__$1)){
var statearr_34220_34237 = state_34207__$1;
(statearr_34220_34237[(1)] = (9));

} else {
var statearr_34221_34238 = state_34207__$1;
(statearr_34221_34238[(1)] = (10));

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
var statearr_34225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34225[(0)] = figwheel$client$file_reloading$state_machine__28497__auto__);

(statearr_34225[(1)] = (1));

return statearr_34225;
});
var figwheel$client$file_reloading$state_machine__28497__auto____1 = (function (state_34207){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_34207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e34226){if((e34226 instanceof Object)){
var ex__28500__auto__ = e34226;
var statearr_34227_34239 = state_34207;
(statearr_34227_34239[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34240 = state_34207;
state_34207 = G__34240;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28497__auto__ = function(state_34207){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28497__auto____1.call(this,state_34207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28497__auto____0;
figwheel$client$file_reloading$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28497__auto____1;
return figwheel$client$file_reloading$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_34228 = f__28609__auto__.call(null);
(statearr_34228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_34228;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34241,callback){
var map__34244 = p__34241;
var map__34244__$1 = ((((!((map__34244 == null)))?((((map__34244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34244):map__34244);
var file_msg = map__34244__$1;
var namespace = cljs.core.get.call(null,map__34244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34244,map__34244__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34244,map__34244__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34246){
var map__34249 = p__34246;
var map__34249__$1 = ((((!((map__34249 == null)))?((((map__34249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34249):map__34249);
var file_msg = map__34249__$1;
var namespace = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34251,callback){
var map__34254 = p__34251;
var map__34254__$1 = ((((!((map__34254 == null)))?((((map__34254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34254):map__34254);
var file_msg = map__34254__$1;
var request_url = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28608__auto___34358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___34358,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___34358,out){
return (function (state_34340){
var state_val_34341 = (state_34340[(1)]);
if((state_val_34341 === (1))){
var inst_34314 = cljs.core.seq.call(null,files);
var inst_34315 = cljs.core.first.call(null,inst_34314);
var inst_34316 = cljs.core.next.call(null,inst_34314);
var inst_34317 = files;
var state_34340__$1 = (function (){var statearr_34342 = state_34340;
(statearr_34342[(7)] = inst_34315);

(statearr_34342[(8)] = inst_34317);

(statearr_34342[(9)] = inst_34316);

return statearr_34342;
})();
var statearr_34343_34359 = state_34340__$1;
(statearr_34343_34359[(2)] = null);

(statearr_34343_34359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (2))){
var inst_34317 = (state_34340[(8)]);
var inst_34323 = (state_34340[(10)]);
var inst_34322 = cljs.core.seq.call(null,inst_34317);
var inst_34323__$1 = cljs.core.first.call(null,inst_34322);
var inst_34324 = cljs.core.next.call(null,inst_34322);
var inst_34325 = (inst_34323__$1 == null);
var inst_34326 = cljs.core.not.call(null,inst_34325);
var state_34340__$1 = (function (){var statearr_34344 = state_34340;
(statearr_34344[(11)] = inst_34324);

(statearr_34344[(10)] = inst_34323__$1);

return statearr_34344;
})();
if(inst_34326){
var statearr_34345_34360 = state_34340__$1;
(statearr_34345_34360[(1)] = (4));

} else {
var statearr_34346_34361 = state_34340__$1;
(statearr_34346_34361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (3))){
var inst_34338 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34340__$1,inst_34338);
} else {
if((state_val_34341 === (4))){
var inst_34323 = (state_34340[(10)]);
var inst_34328 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34323);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34340__$1,(7),inst_34328);
} else {
if((state_val_34341 === (5))){
var inst_34334 = cljs.core.async.close_BANG_.call(null,out);
var state_34340__$1 = state_34340;
var statearr_34347_34362 = state_34340__$1;
(statearr_34347_34362[(2)] = inst_34334);

(statearr_34347_34362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (6))){
var inst_34336 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34348_34363 = state_34340__$1;
(statearr_34348_34363[(2)] = inst_34336);

(statearr_34348_34363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (7))){
var inst_34324 = (state_34340[(11)]);
var inst_34330 = (state_34340[(2)]);
var inst_34331 = cljs.core.async.put_BANG_.call(null,out,inst_34330);
var inst_34317 = inst_34324;
var state_34340__$1 = (function (){var statearr_34349 = state_34340;
(statearr_34349[(8)] = inst_34317);

(statearr_34349[(12)] = inst_34331);

return statearr_34349;
})();
var statearr_34350_34364 = state_34340__$1;
(statearr_34350_34364[(2)] = null);

(statearr_34350_34364[(1)] = (2));


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
});})(c__28608__auto___34358,out))
;
return ((function (switch__28496__auto__,c__28608__auto___34358,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____0 = (function (){
var statearr_34354 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34354[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__);

(statearr_34354[(1)] = (1));

return statearr_34354;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____1 = (function (state_34340){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_34340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e34355){if((e34355 instanceof Object)){
var ex__28500__auto__ = e34355;
var statearr_34356_34365 = state_34340;
(statearr_34356_34365[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34366 = state_34340;
state_34340 = G__34366;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__ = function(state_34340){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____1.call(this,state_34340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___34358,out))
})();
var state__28610__auto__ = (function (){var statearr_34357 = f__28609__auto__.call(null);
(statearr_34357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___34358);

return statearr_34357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___34358,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34367,opts){
var map__34371 = p__34367;
var map__34371__$1 = ((((!((map__34371 == null)))?((((map__34371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34371):map__34371);
var eval_body__$1 = cljs.core.get.call(null,map__34371__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34371__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34373){var e = e34373;
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
return (function (p1__34374_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34374_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34383){
var vec__34384 = p__34383;
var k = cljs.core.nth.call(null,vec__34384,(0),null);
var v = cljs.core.nth.call(null,vec__34384,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34387){
var vec__34388 = p__34387;
var k = cljs.core.nth.call(null,vec__34388,(0),null);
var v = cljs.core.nth.call(null,vec__34388,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34394,p__34395){
var map__34642 = p__34394;
var map__34642__$1 = ((((!((map__34642 == null)))?((((map__34642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34642):map__34642);
var opts = map__34642__$1;
var before_jsload = cljs.core.get.call(null,map__34642__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34642__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34642__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34643 = p__34395;
var map__34643__$1 = ((((!((map__34643 == null)))?((((map__34643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34643):map__34643);
var msg = map__34643__$1;
var files = cljs.core.get.call(null,map__34643__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34643__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34643__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34796){
var state_val_34797 = (state_34796[(1)]);
if((state_val_34797 === (7))){
var inst_34659 = (state_34796[(7)]);
var inst_34657 = (state_34796[(8)]);
var inst_34658 = (state_34796[(9)]);
var inst_34660 = (state_34796[(10)]);
var inst_34665 = cljs.core._nth.call(null,inst_34658,inst_34660);
var inst_34666 = figwheel.client.file_reloading.eval_body.call(null,inst_34665,opts);
var inst_34667 = (inst_34660 + (1));
var tmp34798 = inst_34659;
var tmp34799 = inst_34657;
var tmp34800 = inst_34658;
var inst_34657__$1 = tmp34799;
var inst_34658__$1 = tmp34800;
var inst_34659__$1 = tmp34798;
var inst_34660__$1 = inst_34667;
var state_34796__$1 = (function (){var statearr_34801 = state_34796;
(statearr_34801[(7)] = inst_34659__$1);

(statearr_34801[(8)] = inst_34657__$1);

(statearr_34801[(11)] = inst_34666);

(statearr_34801[(9)] = inst_34658__$1);

(statearr_34801[(10)] = inst_34660__$1);

return statearr_34801;
})();
var statearr_34802_34888 = state_34796__$1;
(statearr_34802_34888[(2)] = null);

(statearr_34802_34888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (20))){
var inst_34700 = (state_34796[(12)]);
var inst_34708 = figwheel.client.file_reloading.sort_files.call(null,inst_34700);
var state_34796__$1 = state_34796;
var statearr_34803_34889 = state_34796__$1;
(statearr_34803_34889[(2)] = inst_34708);

(statearr_34803_34889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (27))){
var state_34796__$1 = state_34796;
var statearr_34804_34890 = state_34796__$1;
(statearr_34804_34890[(2)] = null);

(statearr_34804_34890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (1))){
var inst_34649 = (state_34796[(13)]);
var inst_34646 = before_jsload.call(null,files);
var inst_34647 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34648 = (function (){return ((function (inst_34649,inst_34646,inst_34647,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34391_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34391_SHARP_);
});
;})(inst_34649,inst_34646,inst_34647,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34649__$1 = cljs.core.filter.call(null,inst_34648,files);
var inst_34650 = cljs.core.not_empty.call(null,inst_34649__$1);
var state_34796__$1 = (function (){var statearr_34805 = state_34796;
(statearr_34805[(14)] = inst_34647);

(statearr_34805[(15)] = inst_34646);

(statearr_34805[(13)] = inst_34649__$1);

return statearr_34805;
})();
if(cljs.core.truth_(inst_34650)){
var statearr_34806_34891 = state_34796__$1;
(statearr_34806_34891[(1)] = (2));

} else {
var statearr_34807_34892 = state_34796__$1;
(statearr_34807_34892[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (24))){
var state_34796__$1 = state_34796;
var statearr_34808_34893 = state_34796__$1;
(statearr_34808_34893[(2)] = null);

(statearr_34808_34893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (39))){
var inst_34750 = (state_34796[(16)]);
var state_34796__$1 = state_34796;
var statearr_34809_34894 = state_34796__$1;
(statearr_34809_34894[(2)] = inst_34750);

(statearr_34809_34894[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (46))){
var inst_34791 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34810_34895 = state_34796__$1;
(statearr_34810_34895[(2)] = inst_34791);

(statearr_34810_34895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (4))){
var inst_34694 = (state_34796[(2)]);
var inst_34695 = cljs.core.List.EMPTY;
var inst_34696 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34695);
var inst_34697 = (function (){return ((function (inst_34694,inst_34695,inst_34696,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34392_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34392_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34392_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_34694,inst_34695,inst_34696,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34698 = cljs.core.filter.call(null,inst_34697,files);
var inst_34699 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34700 = cljs.core.concat.call(null,inst_34698,inst_34699);
var state_34796__$1 = (function (){var statearr_34811 = state_34796;
(statearr_34811[(17)] = inst_34696);

(statearr_34811[(12)] = inst_34700);

(statearr_34811[(18)] = inst_34694);

return statearr_34811;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34812_34896 = state_34796__$1;
(statearr_34812_34896[(1)] = (16));

} else {
var statearr_34813_34897 = state_34796__$1;
(statearr_34813_34897[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (15))){
var inst_34684 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34814_34898 = state_34796__$1;
(statearr_34814_34898[(2)] = inst_34684);

(statearr_34814_34898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (21))){
var inst_34710 = (state_34796[(19)]);
var inst_34710__$1 = (state_34796[(2)]);
var inst_34711 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34710__$1);
var state_34796__$1 = (function (){var statearr_34815 = state_34796;
(statearr_34815[(19)] = inst_34710__$1);

return statearr_34815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34796__$1,(22),inst_34711);
} else {
if((state_val_34797 === (31))){
var inst_34794 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34796__$1,inst_34794);
} else {
if((state_val_34797 === (32))){
var inst_34750 = (state_34796[(16)]);
var inst_34755 = inst_34750.cljs$lang$protocol_mask$partition0$;
var inst_34756 = (inst_34755 & (64));
var inst_34757 = inst_34750.cljs$core$ISeq$;
var inst_34758 = (inst_34756) || (inst_34757);
var state_34796__$1 = state_34796;
if(cljs.core.truth_(inst_34758)){
var statearr_34816_34899 = state_34796__$1;
(statearr_34816_34899[(1)] = (35));

} else {
var statearr_34817_34900 = state_34796__$1;
(statearr_34817_34900[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (40))){
var inst_34771 = (state_34796[(20)]);
var inst_34770 = (state_34796[(2)]);
var inst_34771__$1 = cljs.core.get.call(null,inst_34770,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34772 = cljs.core.get.call(null,inst_34770,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34773 = cljs.core.not_empty.call(null,inst_34771__$1);
var state_34796__$1 = (function (){var statearr_34818 = state_34796;
(statearr_34818[(20)] = inst_34771__$1);

(statearr_34818[(21)] = inst_34772);

return statearr_34818;
})();
if(cljs.core.truth_(inst_34773)){
var statearr_34819_34901 = state_34796__$1;
(statearr_34819_34901[(1)] = (41));

} else {
var statearr_34820_34902 = state_34796__$1;
(statearr_34820_34902[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (33))){
var state_34796__$1 = state_34796;
var statearr_34821_34903 = state_34796__$1;
(statearr_34821_34903[(2)] = false);

(statearr_34821_34903[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (13))){
var inst_34670 = (state_34796[(22)]);
var inst_34674 = cljs.core.chunk_first.call(null,inst_34670);
var inst_34675 = cljs.core.chunk_rest.call(null,inst_34670);
var inst_34676 = cljs.core.count.call(null,inst_34674);
var inst_34657 = inst_34675;
var inst_34658 = inst_34674;
var inst_34659 = inst_34676;
var inst_34660 = (0);
var state_34796__$1 = (function (){var statearr_34822 = state_34796;
(statearr_34822[(7)] = inst_34659);

(statearr_34822[(8)] = inst_34657);

(statearr_34822[(9)] = inst_34658);

(statearr_34822[(10)] = inst_34660);

return statearr_34822;
})();
var statearr_34823_34904 = state_34796__$1;
(statearr_34823_34904[(2)] = null);

(statearr_34823_34904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (22))){
var inst_34713 = (state_34796[(23)]);
var inst_34718 = (state_34796[(24)]);
var inst_34710 = (state_34796[(19)]);
var inst_34714 = (state_34796[(25)]);
var inst_34713__$1 = (state_34796[(2)]);
var inst_34714__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34713__$1);
var inst_34715 = (function (){var all_files = inst_34710;
var res_SINGLEQUOTE_ = inst_34713__$1;
var res = inst_34714__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34713,inst_34718,inst_34710,inst_34714,inst_34713__$1,inst_34714__$1,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34393_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34393_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34713,inst_34718,inst_34710,inst_34714,inst_34713__$1,inst_34714__$1,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34716 = cljs.core.filter.call(null,inst_34715,inst_34713__$1);
var inst_34717 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34718__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34717);
var inst_34719 = cljs.core.not_empty.call(null,inst_34718__$1);
var state_34796__$1 = (function (){var statearr_34824 = state_34796;
(statearr_34824[(23)] = inst_34713__$1);

(statearr_34824[(24)] = inst_34718__$1);

(statearr_34824[(26)] = inst_34716);

(statearr_34824[(25)] = inst_34714__$1);

return statearr_34824;
})();
if(cljs.core.truth_(inst_34719)){
var statearr_34825_34905 = state_34796__$1;
(statearr_34825_34905[(1)] = (23));

} else {
var statearr_34826_34906 = state_34796__$1;
(statearr_34826_34906[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (36))){
var state_34796__$1 = state_34796;
var statearr_34827_34907 = state_34796__$1;
(statearr_34827_34907[(2)] = false);

(statearr_34827_34907[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (41))){
var inst_34771 = (state_34796[(20)]);
var inst_34775 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34776 = cljs.core.map.call(null,inst_34775,inst_34771);
var inst_34777 = cljs.core.pr_str.call(null,inst_34776);
var inst_34778 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34777)].join('');
var inst_34779 = figwheel.client.utils.log.call(null,inst_34778);
var state_34796__$1 = state_34796;
var statearr_34828_34908 = state_34796__$1;
(statearr_34828_34908[(2)] = inst_34779);

(statearr_34828_34908[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (43))){
var inst_34772 = (state_34796[(21)]);
var inst_34782 = (state_34796[(2)]);
var inst_34783 = cljs.core.not_empty.call(null,inst_34772);
var state_34796__$1 = (function (){var statearr_34829 = state_34796;
(statearr_34829[(27)] = inst_34782);

return statearr_34829;
})();
if(cljs.core.truth_(inst_34783)){
var statearr_34830_34909 = state_34796__$1;
(statearr_34830_34909[(1)] = (44));

} else {
var statearr_34831_34910 = state_34796__$1;
(statearr_34831_34910[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (29))){
var inst_34713 = (state_34796[(23)]);
var inst_34718 = (state_34796[(24)]);
var inst_34710 = (state_34796[(19)]);
var inst_34750 = (state_34796[(16)]);
var inst_34716 = (state_34796[(26)]);
var inst_34714 = (state_34796[(25)]);
var inst_34746 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34749 = (function (){var all_files = inst_34710;
var res_SINGLEQUOTE_ = inst_34713;
var res = inst_34714;
var files_not_loaded = inst_34716;
var dependencies_that_loaded = inst_34718;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34713,inst_34718,inst_34710,inst_34750,inst_34716,inst_34714,inst_34746,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34748){
var map__34832 = p__34748;
var map__34832__$1 = ((((!((map__34832 == null)))?((((map__34832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34832):map__34832);
var namespace = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34713,inst_34718,inst_34710,inst_34750,inst_34716,inst_34714,inst_34746,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34750__$1 = cljs.core.group_by.call(null,inst_34749,inst_34716);
var inst_34752 = (inst_34750__$1 == null);
var inst_34753 = cljs.core.not.call(null,inst_34752);
var state_34796__$1 = (function (){var statearr_34834 = state_34796;
(statearr_34834[(16)] = inst_34750__$1);

(statearr_34834[(28)] = inst_34746);

return statearr_34834;
})();
if(inst_34753){
var statearr_34835_34911 = state_34796__$1;
(statearr_34835_34911[(1)] = (32));

} else {
var statearr_34836_34912 = state_34796__$1;
(statearr_34836_34912[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (44))){
var inst_34772 = (state_34796[(21)]);
var inst_34785 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34772);
var inst_34786 = cljs.core.pr_str.call(null,inst_34785);
var inst_34787 = [cljs.core.str("not required: "),cljs.core.str(inst_34786)].join('');
var inst_34788 = figwheel.client.utils.log.call(null,inst_34787);
var state_34796__$1 = state_34796;
var statearr_34837_34913 = state_34796__$1;
(statearr_34837_34913[(2)] = inst_34788);

(statearr_34837_34913[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (6))){
var inst_34691 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34838_34914 = state_34796__$1;
(statearr_34838_34914[(2)] = inst_34691);

(statearr_34838_34914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (28))){
var inst_34716 = (state_34796[(26)]);
var inst_34743 = (state_34796[(2)]);
var inst_34744 = cljs.core.not_empty.call(null,inst_34716);
var state_34796__$1 = (function (){var statearr_34839 = state_34796;
(statearr_34839[(29)] = inst_34743);

return statearr_34839;
})();
if(cljs.core.truth_(inst_34744)){
var statearr_34840_34915 = state_34796__$1;
(statearr_34840_34915[(1)] = (29));

} else {
var statearr_34841_34916 = state_34796__$1;
(statearr_34841_34916[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (25))){
var inst_34714 = (state_34796[(25)]);
var inst_34730 = (state_34796[(2)]);
var inst_34731 = cljs.core.not_empty.call(null,inst_34714);
var state_34796__$1 = (function (){var statearr_34842 = state_34796;
(statearr_34842[(30)] = inst_34730);

return statearr_34842;
})();
if(cljs.core.truth_(inst_34731)){
var statearr_34843_34917 = state_34796__$1;
(statearr_34843_34917[(1)] = (26));

} else {
var statearr_34844_34918 = state_34796__$1;
(statearr_34844_34918[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (34))){
var inst_34765 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
if(cljs.core.truth_(inst_34765)){
var statearr_34845_34919 = state_34796__$1;
(statearr_34845_34919[(1)] = (38));

} else {
var statearr_34846_34920 = state_34796__$1;
(statearr_34846_34920[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (17))){
var state_34796__$1 = state_34796;
var statearr_34847_34921 = state_34796__$1;
(statearr_34847_34921[(2)] = recompile_dependents);

(statearr_34847_34921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (3))){
var state_34796__$1 = state_34796;
var statearr_34848_34922 = state_34796__$1;
(statearr_34848_34922[(2)] = null);

(statearr_34848_34922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (12))){
var inst_34687 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34849_34923 = state_34796__$1;
(statearr_34849_34923[(2)] = inst_34687);

(statearr_34849_34923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (2))){
var inst_34649 = (state_34796[(13)]);
var inst_34656 = cljs.core.seq.call(null,inst_34649);
var inst_34657 = inst_34656;
var inst_34658 = null;
var inst_34659 = (0);
var inst_34660 = (0);
var state_34796__$1 = (function (){var statearr_34850 = state_34796;
(statearr_34850[(7)] = inst_34659);

(statearr_34850[(8)] = inst_34657);

(statearr_34850[(9)] = inst_34658);

(statearr_34850[(10)] = inst_34660);

return statearr_34850;
})();
var statearr_34851_34924 = state_34796__$1;
(statearr_34851_34924[(2)] = null);

(statearr_34851_34924[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (23))){
var inst_34713 = (state_34796[(23)]);
var inst_34718 = (state_34796[(24)]);
var inst_34710 = (state_34796[(19)]);
var inst_34716 = (state_34796[(26)]);
var inst_34714 = (state_34796[(25)]);
var inst_34721 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34723 = (function (){var all_files = inst_34710;
var res_SINGLEQUOTE_ = inst_34713;
var res = inst_34714;
var files_not_loaded = inst_34716;
var dependencies_that_loaded = inst_34718;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34713,inst_34718,inst_34710,inst_34716,inst_34714,inst_34721,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34722){
var map__34852 = p__34722;
var map__34852__$1 = ((((!((map__34852 == null)))?((((map__34852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34852):map__34852);
var request_url = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34713,inst_34718,inst_34710,inst_34716,inst_34714,inst_34721,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34724 = cljs.core.reverse.call(null,inst_34718);
var inst_34725 = cljs.core.map.call(null,inst_34723,inst_34724);
var inst_34726 = cljs.core.pr_str.call(null,inst_34725);
var inst_34727 = figwheel.client.utils.log.call(null,inst_34726);
var state_34796__$1 = (function (){var statearr_34854 = state_34796;
(statearr_34854[(31)] = inst_34721);

return statearr_34854;
})();
var statearr_34855_34925 = state_34796__$1;
(statearr_34855_34925[(2)] = inst_34727);

(statearr_34855_34925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (35))){
var state_34796__$1 = state_34796;
var statearr_34856_34926 = state_34796__$1;
(statearr_34856_34926[(2)] = true);

(statearr_34856_34926[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (19))){
var inst_34700 = (state_34796[(12)]);
var inst_34706 = figwheel.client.file_reloading.expand_files.call(null,inst_34700);
var state_34796__$1 = state_34796;
var statearr_34857_34927 = state_34796__$1;
(statearr_34857_34927[(2)] = inst_34706);

(statearr_34857_34927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (11))){
var state_34796__$1 = state_34796;
var statearr_34858_34928 = state_34796__$1;
(statearr_34858_34928[(2)] = null);

(statearr_34858_34928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (9))){
var inst_34689 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34859_34929 = state_34796__$1;
(statearr_34859_34929[(2)] = inst_34689);

(statearr_34859_34929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (5))){
var inst_34659 = (state_34796[(7)]);
var inst_34660 = (state_34796[(10)]);
var inst_34662 = (inst_34660 < inst_34659);
var inst_34663 = inst_34662;
var state_34796__$1 = state_34796;
if(cljs.core.truth_(inst_34663)){
var statearr_34860_34930 = state_34796__$1;
(statearr_34860_34930[(1)] = (7));

} else {
var statearr_34861_34931 = state_34796__$1;
(statearr_34861_34931[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (14))){
var inst_34670 = (state_34796[(22)]);
var inst_34679 = cljs.core.first.call(null,inst_34670);
var inst_34680 = figwheel.client.file_reloading.eval_body.call(null,inst_34679,opts);
var inst_34681 = cljs.core.next.call(null,inst_34670);
var inst_34657 = inst_34681;
var inst_34658 = null;
var inst_34659 = (0);
var inst_34660 = (0);
var state_34796__$1 = (function (){var statearr_34862 = state_34796;
(statearr_34862[(7)] = inst_34659);

(statearr_34862[(8)] = inst_34657);

(statearr_34862[(9)] = inst_34658);

(statearr_34862[(10)] = inst_34660);

(statearr_34862[(32)] = inst_34680);

return statearr_34862;
})();
var statearr_34863_34932 = state_34796__$1;
(statearr_34863_34932[(2)] = null);

(statearr_34863_34932[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (45))){
var state_34796__$1 = state_34796;
var statearr_34864_34933 = state_34796__$1;
(statearr_34864_34933[(2)] = null);

(statearr_34864_34933[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (26))){
var inst_34713 = (state_34796[(23)]);
var inst_34718 = (state_34796[(24)]);
var inst_34710 = (state_34796[(19)]);
var inst_34716 = (state_34796[(26)]);
var inst_34714 = (state_34796[(25)]);
var inst_34733 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34735 = (function (){var all_files = inst_34710;
var res_SINGLEQUOTE_ = inst_34713;
var res = inst_34714;
var files_not_loaded = inst_34716;
var dependencies_that_loaded = inst_34718;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34713,inst_34718,inst_34710,inst_34716,inst_34714,inst_34733,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34734){
var map__34865 = p__34734;
var map__34865__$1 = ((((!((map__34865 == null)))?((((map__34865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34865):map__34865);
var namespace = cljs.core.get.call(null,map__34865__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34713,inst_34718,inst_34710,inst_34716,inst_34714,inst_34733,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34736 = cljs.core.map.call(null,inst_34735,inst_34714);
var inst_34737 = cljs.core.pr_str.call(null,inst_34736);
var inst_34738 = figwheel.client.utils.log.call(null,inst_34737);
var inst_34739 = (function (){var all_files = inst_34710;
var res_SINGLEQUOTE_ = inst_34713;
var res = inst_34714;
var files_not_loaded = inst_34716;
var dependencies_that_loaded = inst_34718;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34713,inst_34718,inst_34710,inst_34716,inst_34714,inst_34733,inst_34735,inst_34736,inst_34737,inst_34738,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34713,inst_34718,inst_34710,inst_34716,inst_34714,inst_34733,inst_34735,inst_34736,inst_34737,inst_34738,state_val_34797,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34740 = setTimeout(inst_34739,(10));
var state_34796__$1 = (function (){var statearr_34867 = state_34796;
(statearr_34867[(33)] = inst_34738);

(statearr_34867[(34)] = inst_34733);

return statearr_34867;
})();
var statearr_34868_34934 = state_34796__$1;
(statearr_34868_34934[(2)] = inst_34740);

(statearr_34868_34934[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (16))){
var state_34796__$1 = state_34796;
var statearr_34869_34935 = state_34796__$1;
(statearr_34869_34935[(2)] = reload_dependents);

(statearr_34869_34935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (38))){
var inst_34750 = (state_34796[(16)]);
var inst_34767 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34750);
var state_34796__$1 = state_34796;
var statearr_34870_34936 = state_34796__$1;
(statearr_34870_34936[(2)] = inst_34767);

(statearr_34870_34936[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (30))){
var state_34796__$1 = state_34796;
var statearr_34871_34937 = state_34796__$1;
(statearr_34871_34937[(2)] = null);

(statearr_34871_34937[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (10))){
var inst_34670 = (state_34796[(22)]);
var inst_34672 = cljs.core.chunked_seq_QMARK_.call(null,inst_34670);
var state_34796__$1 = state_34796;
if(inst_34672){
var statearr_34872_34938 = state_34796__$1;
(statearr_34872_34938[(1)] = (13));

} else {
var statearr_34873_34939 = state_34796__$1;
(statearr_34873_34939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (18))){
var inst_34704 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
if(cljs.core.truth_(inst_34704)){
var statearr_34874_34940 = state_34796__$1;
(statearr_34874_34940[(1)] = (19));

} else {
var statearr_34875_34941 = state_34796__$1;
(statearr_34875_34941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (42))){
var state_34796__$1 = state_34796;
var statearr_34876_34942 = state_34796__$1;
(statearr_34876_34942[(2)] = null);

(statearr_34876_34942[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (37))){
var inst_34762 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34877_34943 = state_34796__$1;
(statearr_34877_34943[(2)] = inst_34762);

(statearr_34877_34943[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (8))){
var inst_34657 = (state_34796[(8)]);
var inst_34670 = (state_34796[(22)]);
var inst_34670__$1 = cljs.core.seq.call(null,inst_34657);
var state_34796__$1 = (function (){var statearr_34878 = state_34796;
(statearr_34878[(22)] = inst_34670__$1);

return statearr_34878;
})();
if(inst_34670__$1){
var statearr_34879_34944 = state_34796__$1;
(statearr_34879_34944[(1)] = (10));

} else {
var statearr_34880_34945 = state_34796__$1;
(statearr_34880_34945[(1)] = (11));

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
});})(c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28496__auto__,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____0 = (function (){
var statearr_34884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34884[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__);

(statearr_34884[(1)] = (1));

return statearr_34884;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____1 = (function (state_34796){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_34796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e34885){if((e34885 instanceof Object)){
var ex__28500__auto__ = e34885;
var statearr_34886_34946 = state_34796;
(statearr_34886_34946[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34947 = state_34796;
state_34796 = G__34947;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__ = function(state_34796){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____1.call(this,state_34796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28610__auto__ = (function (){var statearr_34887 = f__28609__auto__.call(null);
(statearr_34887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_34887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__,map__34642,map__34642__$1,opts,before_jsload,on_jsload,reload_dependents,map__34643,map__34643__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28608__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34950,link){
var map__34953 = p__34950;
var map__34953__$1 = ((((!((map__34953 == null)))?((((map__34953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34953):map__34953);
var file = cljs.core.get.call(null,map__34953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34953,map__34953__$1,file){
return (function (p1__34948_SHARP_,p2__34949_SHARP_){
if(cljs.core._EQ_.call(null,p1__34948_SHARP_,p2__34949_SHARP_)){
return p1__34948_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34953,map__34953__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34959){
var map__34960 = p__34959;
var map__34960__$1 = ((((!((map__34960 == null)))?((((map__34960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34960):map__34960);
var match_length = cljs.core.get.call(null,map__34960__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34960__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34955_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34955_SHARP_);
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
var args34962 = [];
var len__25865__auto___34965 = arguments.length;
var i__25866__auto___34966 = (0);
while(true){
if((i__25866__auto___34966 < len__25865__auto___34965)){
args34962.push((arguments[i__25866__auto___34966]));

var G__34967 = (i__25866__auto___34966 + (1));
i__25866__auto___34966 = G__34967;
continue;
} else {
}
break;
}

var G__34964 = args34962.length;
switch (G__34964) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34962.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34969_SHARP_,p2__34970_SHARP_){
return cljs.core.assoc.call(null,p1__34969_SHARP_,cljs.core.get.call(null,p2__34970_SHARP_,key),p2__34970_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34971){
var map__34974 = p__34971;
var map__34974__$1 = ((((!((map__34974 == null)))?((((map__34974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34974):map__34974);
var f_data = map__34974__$1;
var file = cljs.core.get.call(null,map__34974__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34976,p__34977){
var map__34986 = p__34976;
var map__34986__$1 = ((((!((map__34986 == null)))?((((map__34986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34986):map__34986);
var opts = map__34986__$1;
var on_cssload = cljs.core.get.call(null,map__34986__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34987 = p__34977;
var map__34987__$1 = ((((!((map__34987 == null)))?((((map__34987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34987):map__34987);
var files_msg = map__34987__$1;
var files = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34990_34994 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34991_34995 = null;
var count__34992_34996 = (0);
var i__34993_34997 = (0);
while(true){
if((i__34993_34997 < count__34992_34996)){
var f_34998 = cljs.core._nth.call(null,chunk__34991_34995,i__34993_34997);
figwheel.client.file_reloading.reload_css_file.call(null,f_34998);

var G__34999 = seq__34990_34994;
var G__35000 = chunk__34991_34995;
var G__35001 = count__34992_34996;
var G__35002 = (i__34993_34997 + (1));
seq__34990_34994 = G__34999;
chunk__34991_34995 = G__35000;
count__34992_34996 = G__35001;
i__34993_34997 = G__35002;
continue;
} else {
var temp__4657__auto___35003 = cljs.core.seq.call(null,seq__34990_34994);
if(temp__4657__auto___35003){
var seq__34990_35004__$1 = temp__4657__auto___35003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34990_35004__$1)){
var c__25601__auto___35005 = cljs.core.chunk_first.call(null,seq__34990_35004__$1);
var G__35006 = cljs.core.chunk_rest.call(null,seq__34990_35004__$1);
var G__35007 = c__25601__auto___35005;
var G__35008 = cljs.core.count.call(null,c__25601__auto___35005);
var G__35009 = (0);
seq__34990_34994 = G__35006;
chunk__34991_34995 = G__35007;
count__34992_34996 = G__35008;
i__34993_34997 = G__35009;
continue;
} else {
var f_35010 = cljs.core.first.call(null,seq__34990_35004__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35010);

var G__35011 = cljs.core.next.call(null,seq__34990_35004__$1);
var G__35012 = null;
var G__35013 = (0);
var G__35014 = (0);
seq__34990_34994 = G__35011;
chunk__34991_34995 = G__35012;
count__34992_34996 = G__35013;
i__34993_34997 = G__35014;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34986,map__34986__$1,opts,on_cssload,map__34987,map__34987__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34986,map__34986__$1,opts,on_cssload,map__34987,map__34987__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1475620902509