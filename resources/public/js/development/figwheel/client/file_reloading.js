// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
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
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26895_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26895_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
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
var seq__26896 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26897 = null;
var count__26898 = (0);
var i__26899 = (0);
while(true){
if((i__26899 < count__26898)){
var n = cljs.core._nth.call(null,chunk__26897,i__26899);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26900 = seq__26896;
var G__26901 = chunk__26897;
var G__26902 = count__26898;
var G__26903 = (i__26899 + (1));
seq__26896 = G__26900;
chunk__26897 = G__26901;
count__26898 = G__26902;
i__26899 = G__26903;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26896);
if(temp__5735__auto__){
var seq__26896__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26896__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26896__$1);
var G__26904 = cljs.core.chunk_rest.call(null,seq__26896__$1);
var G__26905 = c__4550__auto__;
var G__26906 = cljs.core.count.call(null,c__4550__auto__);
var G__26907 = (0);
seq__26896 = G__26904;
chunk__26897 = G__26905;
count__26898 = G__26906;
i__26899 = G__26907;
continue;
} else {
var n = cljs.core.first.call(null,seq__26896__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26908 = cljs.core.next.call(null,seq__26896__$1);
var G__26909 = null;
var G__26910 = (0);
var G__26911 = (0);
seq__26896 = G__26908;
chunk__26897 = G__26909;
count__26898 = G__26910;
i__26899 = G__26911;
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
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26912){
var vec__26913 = p__26912;
var _ = cljs.core.nth.call(null,vec__26913,(0),null);
var v = cljs.core.nth.call(null,vec__26913,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26916){
var vec__26917 = p__26916;
var k = cljs.core.nth.call(null,vec__26917,(0),null);
var v = cljs.core.nth.call(null,vec__26917,(1),null);
return (k > current_depth);
}),topo_state));
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

var seq__26929_26937 = cljs.core.seq.call(null,deps);
var chunk__26930_26938 = null;
var count__26931_26939 = (0);
var i__26932_26940 = (0);
while(true){
if((i__26932_26940 < count__26931_26939)){
var dep_26941 = cljs.core._nth.call(null,chunk__26930_26938,i__26932_26940);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26941;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26941));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26941,(depth + (1)),state);
} else {
}


var G__26942 = seq__26929_26937;
var G__26943 = chunk__26930_26938;
var G__26944 = count__26931_26939;
var G__26945 = (i__26932_26940 + (1));
seq__26929_26937 = G__26942;
chunk__26930_26938 = G__26943;
count__26931_26939 = G__26944;
i__26932_26940 = G__26945;
continue;
} else {
var temp__5735__auto___26946 = cljs.core.seq.call(null,seq__26929_26937);
if(temp__5735__auto___26946){
var seq__26929_26947__$1 = temp__5735__auto___26946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26929_26947__$1)){
var c__4550__auto___26948 = cljs.core.chunk_first.call(null,seq__26929_26947__$1);
var G__26949 = cljs.core.chunk_rest.call(null,seq__26929_26947__$1);
var G__26950 = c__4550__auto___26948;
var G__26951 = cljs.core.count.call(null,c__4550__auto___26948);
var G__26952 = (0);
seq__26929_26937 = G__26949;
chunk__26930_26938 = G__26950;
count__26931_26939 = G__26951;
i__26932_26940 = G__26952;
continue;
} else {
var dep_26953 = cljs.core.first.call(null,seq__26929_26947__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26953;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26953));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26953,(depth + (1)),state);
} else {
}


var G__26954 = cljs.core.next.call(null,seq__26929_26947__$1);
var G__26955 = null;
var G__26956 = (0);
var G__26957 = (0);
seq__26929_26937 = G__26954;
chunk__26930_26938 = G__26955;
count__26931_26939 = G__26956;
i__26932_26940 = G__26957;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26933){
var vec__26934 = p__26933;
var seq__26935 = cljs.core.seq.call(null,vec__26934);
var first__26936 = cljs.core.first.call(null,seq__26935);
var seq__26935__$1 = cljs.core.next.call(null,seq__26935);
var x = first__26936;
var xs = seq__26935__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26934,seq__26935,first__26936,seq__26935__$1,x,xs,get_deps__$1){
return (function (p1__26920_SHARP_){
return clojure.set.difference.call(null,p1__26920_SHARP_,x);
});})(vec__26934,seq__26935,first__26936,seq__26935__$1,x,xs,get_deps__$1))
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
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26958 = cljs.core.seq.call(null,provides);
var chunk__26959 = null;
var count__26960 = (0);
var i__26961 = (0);
while(true){
if((i__26961 < count__26960)){
var prov = cljs.core._nth.call(null,chunk__26959,i__26961);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26970_26978 = cljs.core.seq.call(null,requires);
var chunk__26971_26979 = null;
var count__26972_26980 = (0);
var i__26973_26981 = (0);
while(true){
if((i__26973_26981 < count__26972_26980)){
var req_26982 = cljs.core._nth.call(null,chunk__26971_26979,i__26973_26981);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26982,prov);


var G__26983 = seq__26970_26978;
var G__26984 = chunk__26971_26979;
var G__26985 = count__26972_26980;
var G__26986 = (i__26973_26981 + (1));
seq__26970_26978 = G__26983;
chunk__26971_26979 = G__26984;
count__26972_26980 = G__26985;
i__26973_26981 = G__26986;
continue;
} else {
var temp__5735__auto___26987 = cljs.core.seq.call(null,seq__26970_26978);
if(temp__5735__auto___26987){
var seq__26970_26988__$1 = temp__5735__auto___26987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26970_26988__$1)){
var c__4550__auto___26989 = cljs.core.chunk_first.call(null,seq__26970_26988__$1);
var G__26990 = cljs.core.chunk_rest.call(null,seq__26970_26988__$1);
var G__26991 = c__4550__auto___26989;
var G__26992 = cljs.core.count.call(null,c__4550__auto___26989);
var G__26993 = (0);
seq__26970_26978 = G__26990;
chunk__26971_26979 = G__26991;
count__26972_26980 = G__26992;
i__26973_26981 = G__26993;
continue;
} else {
var req_26994 = cljs.core.first.call(null,seq__26970_26988__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26994,prov);


var G__26995 = cljs.core.next.call(null,seq__26970_26988__$1);
var G__26996 = null;
var G__26997 = (0);
var G__26998 = (0);
seq__26970_26978 = G__26995;
chunk__26971_26979 = G__26996;
count__26972_26980 = G__26997;
i__26973_26981 = G__26998;
continue;
}
} else {
}
}
break;
}


var G__26999 = seq__26958;
var G__27000 = chunk__26959;
var G__27001 = count__26960;
var G__27002 = (i__26961 + (1));
seq__26958 = G__26999;
chunk__26959 = G__27000;
count__26960 = G__27001;
i__26961 = G__27002;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26958);
if(temp__5735__auto__){
var seq__26958__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26958__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26958__$1);
var G__27003 = cljs.core.chunk_rest.call(null,seq__26958__$1);
var G__27004 = c__4550__auto__;
var G__27005 = cljs.core.count.call(null,c__4550__auto__);
var G__27006 = (0);
seq__26958 = G__27003;
chunk__26959 = G__27004;
count__26960 = G__27005;
i__26961 = G__27006;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26958__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26974_27007 = cljs.core.seq.call(null,requires);
var chunk__26975_27008 = null;
var count__26976_27009 = (0);
var i__26977_27010 = (0);
while(true){
if((i__26977_27010 < count__26976_27009)){
var req_27011 = cljs.core._nth.call(null,chunk__26975_27008,i__26977_27010);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27011,prov);


var G__27012 = seq__26974_27007;
var G__27013 = chunk__26975_27008;
var G__27014 = count__26976_27009;
var G__27015 = (i__26977_27010 + (1));
seq__26974_27007 = G__27012;
chunk__26975_27008 = G__27013;
count__26976_27009 = G__27014;
i__26977_27010 = G__27015;
continue;
} else {
var temp__5735__auto___27016__$1 = cljs.core.seq.call(null,seq__26974_27007);
if(temp__5735__auto___27016__$1){
var seq__26974_27017__$1 = temp__5735__auto___27016__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26974_27017__$1)){
var c__4550__auto___27018 = cljs.core.chunk_first.call(null,seq__26974_27017__$1);
var G__27019 = cljs.core.chunk_rest.call(null,seq__26974_27017__$1);
var G__27020 = c__4550__auto___27018;
var G__27021 = cljs.core.count.call(null,c__4550__auto___27018);
var G__27022 = (0);
seq__26974_27007 = G__27019;
chunk__26975_27008 = G__27020;
count__26976_27009 = G__27021;
i__26977_27010 = G__27022;
continue;
} else {
var req_27023 = cljs.core.first.call(null,seq__26974_27017__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27023,prov);


var G__27024 = cljs.core.next.call(null,seq__26974_27017__$1);
var G__27025 = null;
var G__27026 = (0);
var G__27027 = (0);
seq__26974_27007 = G__27024;
chunk__26975_27008 = G__27025;
count__26976_27009 = G__27026;
i__26977_27010 = G__27027;
continue;
}
} else {
}
}
break;
}


var G__27028 = cljs.core.next.call(null,seq__26958__$1);
var G__27029 = null;
var G__27030 = (0);
var G__27031 = (0);
seq__26958 = G__27028;
chunk__26959 = G__27029;
count__26960 = G__27030;
i__26961 = G__27031;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27032_27036 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27033_27037 = null;
var count__27034_27038 = (0);
var i__27035_27039 = (0);
while(true){
if((i__27035_27039 < count__27034_27038)){
var ns_27040 = cljs.core._nth.call(null,chunk__27033_27037,i__27035_27039);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27040);


var G__27041 = seq__27032_27036;
var G__27042 = chunk__27033_27037;
var G__27043 = count__27034_27038;
var G__27044 = (i__27035_27039 + (1));
seq__27032_27036 = G__27041;
chunk__27033_27037 = G__27042;
count__27034_27038 = G__27043;
i__27035_27039 = G__27044;
continue;
} else {
var temp__5735__auto___27045 = cljs.core.seq.call(null,seq__27032_27036);
if(temp__5735__auto___27045){
var seq__27032_27046__$1 = temp__5735__auto___27045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27032_27046__$1)){
var c__4550__auto___27047 = cljs.core.chunk_first.call(null,seq__27032_27046__$1);
var G__27048 = cljs.core.chunk_rest.call(null,seq__27032_27046__$1);
var G__27049 = c__4550__auto___27047;
var G__27050 = cljs.core.count.call(null,c__4550__auto___27047);
var G__27051 = (0);
seq__27032_27036 = G__27048;
chunk__27033_27037 = G__27049;
count__27034_27038 = G__27050;
i__27035_27039 = G__27051;
continue;
} else {
var ns_27052 = cljs.core.first.call(null,seq__27032_27046__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27052);


var G__27053 = cljs.core.next.call(null,seq__27032_27046__$1);
var G__27054 = null;
var G__27055 = (0);
var G__27056 = (0);
seq__27032_27036 = G__27053;
chunk__27033_27037 = G__27054;
count__27034_27038 = G__27055;
i__27035_27039 = G__27056;
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
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var G__27057__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27058__i = 0, G__27058__a = new Array(arguments.length -  0);
while (G__27058__i < G__27058__a.length) {G__27058__a[G__27058__i] = arguments[G__27058__i + 0]; ++G__27058__i;}
  args = new cljs.core.IndexedSeq(G__27058__a,0,null);
} 
return G__27057__delegate.call(this,args);};
G__27057.cljs$lang$maxFixedArity = 0;
G__27057.cljs$lang$applyTo = (function (arglist__27059){
var args = cljs.core.seq(arglist__27059);
return G__27057__delegate(args);
});
G__27057.cljs$core$IFn$_invoke$arity$variadic = G__27057__delegate;
return G__27057;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27060_SHARP_,p2__27061_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27060_SHARP_)),p2__27061_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27062_SHARP_,p2__27063_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27062_SHARP_),p2__27063_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27064 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27064.addCallback(((function (G__27064){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27064))
);

G__27064.addErrback(((function (G__27064){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27064))
);

return G__27064;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27065){if((e27065 instanceof Error)){
var e = e27065;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27065;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27066){if((e27066 instanceof Error)){
var e = e27066;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27066;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27067 = cljs.core._EQ_;
var expr__27068 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27067.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27068))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27067.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27068))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27067.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27068))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27067,expr__27068){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27067,expr__27068))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27070,callback){
var map__27071 = p__27070;
var map__27071__$1 = (((((!((map__27071 == null))))?(((((map__27071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27071):map__27071);
var file_msg = map__27071__$1;
var request_url = cljs.core.get.call(null,map__27071__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27071,map__27071__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27071,map__27071__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__){
return (function (state_27109){
var state_val_27110 = (state_27109[(1)]);
if((state_val_27110 === (7))){
var inst_27105 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27111_27137 = state_27109__$1;
(statearr_27111_27137[(2)] = inst_27105);

(statearr_27111_27137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (1))){
var state_27109__$1 = state_27109;
var statearr_27112_27138 = state_27109__$1;
(statearr_27112_27138[(2)] = null);

(statearr_27112_27138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (4))){
var inst_27075 = (state_27109[(7)]);
var inst_27075__$1 = (state_27109[(2)]);
var state_27109__$1 = (function (){var statearr_27113 = state_27109;
(statearr_27113[(7)] = inst_27075__$1);

return statearr_27113;
})();
if(cljs.core.truth_(inst_27075__$1)){
var statearr_27114_27139 = state_27109__$1;
(statearr_27114_27139[(1)] = (5));

} else {
var statearr_27115_27140 = state_27109__$1;
(statearr_27115_27140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (15))){
var inst_27088 = (state_27109[(8)]);
var inst_27090 = (state_27109[(9)]);
var inst_27092 = inst_27090.call(null,inst_27088);
var state_27109__$1 = state_27109;
var statearr_27116_27141 = state_27109__$1;
(statearr_27116_27141[(2)] = inst_27092);

(statearr_27116_27141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (13))){
var inst_27099 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27117_27142 = state_27109__$1;
(statearr_27117_27142[(2)] = inst_27099);

(statearr_27117_27142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (6))){
var state_27109__$1 = state_27109;
var statearr_27118_27143 = state_27109__$1;
(statearr_27118_27143[(2)] = null);

(statearr_27118_27143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (17))){
var inst_27096 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27119_27144 = state_27109__$1;
(statearr_27119_27144[(2)] = inst_27096);

(statearr_27119_27144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (3))){
var inst_27107 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27109__$1,inst_27107);
} else {
if((state_val_27110 === (12))){
var state_27109__$1 = state_27109;
var statearr_27120_27145 = state_27109__$1;
(statearr_27120_27145[(2)] = null);

(statearr_27120_27145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (2))){
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27109__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27110 === (11))){
var inst_27080 = (state_27109[(10)]);
var inst_27086 = figwheel.client.file_reloading.blocking_load.call(null,inst_27080);
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27109__$1,(14),inst_27086);
} else {
if((state_val_27110 === (9))){
var inst_27080 = (state_27109[(10)]);
var state_27109__$1 = state_27109;
if(cljs.core.truth_(inst_27080)){
var statearr_27121_27146 = state_27109__$1;
(statearr_27121_27146[(1)] = (11));

} else {
var statearr_27122_27147 = state_27109__$1;
(statearr_27122_27147[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (5))){
var inst_27075 = (state_27109[(7)]);
var inst_27081 = (state_27109[(11)]);
var inst_27080 = cljs.core.nth.call(null,inst_27075,(0),null);
var inst_27081__$1 = cljs.core.nth.call(null,inst_27075,(1),null);
var state_27109__$1 = (function (){var statearr_27123 = state_27109;
(statearr_27123[(10)] = inst_27080);

(statearr_27123[(11)] = inst_27081__$1);

return statearr_27123;
})();
if(cljs.core.truth_(inst_27081__$1)){
var statearr_27124_27148 = state_27109__$1;
(statearr_27124_27148[(1)] = (8));

} else {
var statearr_27125_27149 = state_27109__$1;
(statearr_27125_27149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (14))){
var inst_27080 = (state_27109[(10)]);
var inst_27090 = (state_27109[(9)]);
var inst_27088 = (state_27109[(2)]);
var inst_27089 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27090__$1 = cljs.core.get.call(null,inst_27089,inst_27080);
var state_27109__$1 = (function (){var statearr_27126 = state_27109;
(statearr_27126[(8)] = inst_27088);

(statearr_27126[(9)] = inst_27090__$1);

return statearr_27126;
})();
if(cljs.core.truth_(inst_27090__$1)){
var statearr_27127_27150 = state_27109__$1;
(statearr_27127_27150[(1)] = (15));

} else {
var statearr_27128_27151 = state_27109__$1;
(statearr_27128_27151[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (16))){
var inst_27088 = (state_27109[(8)]);
var inst_27094 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27088);
var state_27109__$1 = state_27109;
var statearr_27129_27152 = state_27109__$1;
(statearr_27129_27152[(2)] = inst_27094);

(statearr_27129_27152[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (10))){
var inst_27101 = (state_27109[(2)]);
var state_27109__$1 = (function (){var statearr_27130 = state_27109;
(statearr_27130[(12)] = inst_27101);

return statearr_27130;
})();
var statearr_27131_27153 = state_27109__$1;
(statearr_27131_27153[(2)] = null);

(statearr_27131_27153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (8))){
var inst_27081 = (state_27109[(11)]);
var inst_27083 = eval(inst_27081);
var state_27109__$1 = state_27109;
var statearr_27132_27154 = state_27109__$1;
(statearr_27132_27154[(2)] = inst_27083);

(statearr_27132_27154[(1)] = (10));


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
});})(c__23454__auto__))
;
return ((function (switch__23359__auto__,c__23454__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23360__auto__ = null;
var figwheel$client$file_reloading$state_machine__23360__auto____0 = (function (){
var statearr_27133 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27133[(0)] = figwheel$client$file_reloading$state_machine__23360__auto__);

(statearr_27133[(1)] = (1));

return statearr_27133;
});
var figwheel$client$file_reloading$state_machine__23360__auto____1 = (function (state_27109){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_27109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e27134){if((e27134 instanceof Object)){
var ex__23363__auto__ = e27134;
var statearr_27135_27155 = state_27109;
(statearr_27135_27155[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27156 = state_27109;
state_27109 = G__27156;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23360__auto__ = function(state_27109){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23360__auto____1.call(this,state_27109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23360__auto____0;
figwheel$client$file_reloading$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23360__auto____1;
return figwheel$client$file_reloading$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__))
})();
var state__23456__auto__ = (function (){var statearr_27136 = f__23455__auto__.call(null);
(statearr_27136[(6)] = c__23454__auto__);

return statearr_27136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__))
);

return c__23454__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27158 = arguments.length;
switch (G__27158) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27160,callback){
var map__27161 = p__27160;
var map__27161__$1 = (((((!((map__27161 == null))))?(((((map__27161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27161):map__27161);
var file_msg = map__27161__$1;
var namespace = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27161,map__27161__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27161,map__27161__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27163){
var map__27164 = p__27163;
var map__27164__$1 = (((((!((map__27164 == null))))?(((((map__27164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27164):map__27164);
var file_msg = map__27164__$1;
var namespace = cljs.core.get.call(null,map__27164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27166){
var map__27167 = p__27166;
var map__27167__$1 = (((((!((map__27167 == null))))?(((((map__27167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27167):map__27167);
var file_msg = map__27167__$1;
var namespace = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27169,callback){
var map__27170 = p__27169;
var map__27170__$1 = (((((!((map__27170 == null))))?(((((map__27170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27170):map__27170);
var file_msg = map__27170__$1;
var request_url = cljs.core.get.call(null,map__27170__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27170__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__23454__auto___27220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___27220,out){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___27220,out){
return (function (state_27205){
var state_val_27206 = (state_27205[(1)]);
if((state_val_27206 === (1))){
var inst_27179 = cljs.core.seq.call(null,files);
var inst_27180 = cljs.core.first.call(null,inst_27179);
var inst_27181 = cljs.core.next.call(null,inst_27179);
var inst_27182 = files;
var state_27205__$1 = (function (){var statearr_27207 = state_27205;
(statearr_27207[(7)] = inst_27182);

(statearr_27207[(8)] = inst_27180);

(statearr_27207[(9)] = inst_27181);

return statearr_27207;
})();
var statearr_27208_27221 = state_27205__$1;
(statearr_27208_27221[(2)] = null);

(statearr_27208_27221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (2))){
var inst_27182 = (state_27205[(7)]);
var inst_27188 = (state_27205[(10)]);
var inst_27187 = cljs.core.seq.call(null,inst_27182);
var inst_27188__$1 = cljs.core.first.call(null,inst_27187);
var inst_27189 = cljs.core.next.call(null,inst_27187);
var inst_27190 = (inst_27188__$1 == null);
var inst_27191 = cljs.core.not.call(null,inst_27190);
var state_27205__$1 = (function (){var statearr_27209 = state_27205;
(statearr_27209[(11)] = inst_27189);

(statearr_27209[(10)] = inst_27188__$1);

return statearr_27209;
})();
if(inst_27191){
var statearr_27210_27222 = state_27205__$1;
(statearr_27210_27222[(1)] = (4));

} else {
var statearr_27211_27223 = state_27205__$1;
(statearr_27211_27223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (3))){
var inst_27203 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27205__$1,inst_27203);
} else {
if((state_val_27206 === (4))){
var inst_27188 = (state_27205[(10)]);
var inst_27193 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27188);
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27205__$1,(7),inst_27193);
} else {
if((state_val_27206 === (5))){
var inst_27199 = cljs.core.async.close_BANG_.call(null,out);
var state_27205__$1 = state_27205;
var statearr_27212_27224 = state_27205__$1;
(statearr_27212_27224[(2)] = inst_27199);

(statearr_27212_27224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (6))){
var inst_27201 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
var statearr_27213_27225 = state_27205__$1;
(statearr_27213_27225[(2)] = inst_27201);

(statearr_27213_27225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (7))){
var inst_27189 = (state_27205[(11)]);
var inst_27195 = (state_27205[(2)]);
var inst_27196 = cljs.core.async.put_BANG_.call(null,out,inst_27195);
var inst_27182 = inst_27189;
var state_27205__$1 = (function (){var statearr_27214 = state_27205;
(statearr_27214[(12)] = inst_27196);

(statearr_27214[(7)] = inst_27182);

return statearr_27214;
})();
var statearr_27215_27226 = state_27205__$1;
(statearr_27215_27226[(2)] = null);

(statearr_27215_27226[(1)] = (2));


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
});})(c__23454__auto___27220,out))
;
return ((function (switch__23359__auto__,c__23454__auto___27220,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto____0 = (function (){
var statearr_27216 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27216[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto__);

(statearr_27216[(1)] = (1));

return statearr_27216;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto____1 = (function (state_27205){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_27205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e27217){if((e27217 instanceof Object)){
var ex__23363__auto__ = e27217;
var statearr_27218_27227 = state_27205;
(statearr_27218_27227[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27228 = state_27205;
state_27205 = G__27228;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto__ = function(state_27205){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto____1.call(this,state_27205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___27220,out))
})();
var state__23456__auto__ = (function (){var statearr_27219 = f__23455__auto__.call(null);
(statearr_27219[(6)] = c__23454__auto___27220);

return statearr_27219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___27220,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27229,opts){
var map__27230 = p__27229;
var map__27230__$1 = (((((!((map__27230 == null))))?(((((map__27230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27230):map__27230);
var eval_body = cljs.core.get.call(null,map__27230__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27230__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27232){var e = e27232;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27233_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27233_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
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
return cljs.core.map.call(null,(function (p__27234){
var vec__27235 = p__27234;
var k = cljs.core.nth.call(null,vec__27235,(0),null);
var v = cljs.core.nth.call(null,vec__27235,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27238){
var vec__27239 = p__27238;
var k = cljs.core.nth.call(null,vec__27239,(0),null);
var v = cljs.core.nth.call(null,vec__27239,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27245,p__27246){
var map__27247 = p__27245;
var map__27247__$1 = (((((!((map__27247 == null))))?(((((map__27247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27247):map__27247);
var opts = map__27247__$1;
var before_jsload = cljs.core.get.call(null,map__27247__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27247__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27247__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27248 = p__27246;
var map__27248__$1 = (((((!((map__27248 == null))))?(((((map__27248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27248):map__27248);
var msg = map__27248__$1;
var files = cljs.core.get.call(null,map__27248__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27248__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27248__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27402){
var state_val_27403 = (state_27402[(1)]);
if((state_val_27403 === (7))){
var inst_27265 = (state_27402[(7)]);
var inst_27264 = (state_27402[(8)]);
var inst_27263 = (state_27402[(9)]);
var inst_27262 = (state_27402[(10)]);
var inst_27270 = cljs.core._nth.call(null,inst_27263,inst_27265);
var inst_27271 = figwheel.client.file_reloading.eval_body.call(null,inst_27270,opts);
var inst_27272 = (inst_27265 + (1));
var tmp27404 = inst_27264;
var tmp27405 = inst_27263;
var tmp27406 = inst_27262;
var inst_27262__$1 = tmp27406;
var inst_27263__$1 = tmp27405;
var inst_27264__$1 = tmp27404;
var inst_27265__$1 = inst_27272;
var state_27402__$1 = (function (){var statearr_27407 = state_27402;
(statearr_27407[(7)] = inst_27265__$1);

(statearr_27407[(8)] = inst_27264__$1);

(statearr_27407[(9)] = inst_27263__$1);

(statearr_27407[(11)] = inst_27271);

(statearr_27407[(10)] = inst_27262__$1);

return statearr_27407;
})();
var statearr_27408_27491 = state_27402__$1;
(statearr_27408_27491[(2)] = null);

(statearr_27408_27491[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (20))){
var inst_27305 = (state_27402[(12)]);
var inst_27313 = figwheel.client.file_reloading.sort_files.call(null,inst_27305);
var state_27402__$1 = state_27402;
var statearr_27409_27492 = state_27402__$1;
(statearr_27409_27492[(2)] = inst_27313);

(statearr_27409_27492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (27))){
var state_27402__$1 = state_27402;
var statearr_27410_27493 = state_27402__$1;
(statearr_27410_27493[(2)] = null);

(statearr_27410_27493[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (1))){
var inst_27254 = (state_27402[(13)]);
var inst_27251 = before_jsload.call(null,files);
var inst_27252 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27253 = (function (){return ((function (inst_27254,inst_27251,inst_27252,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27242_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27242_SHARP_);
});
;})(inst_27254,inst_27251,inst_27252,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27254__$1 = cljs.core.filter.call(null,inst_27253,files);
var inst_27255 = cljs.core.not_empty.call(null,inst_27254__$1);
var state_27402__$1 = (function (){var statearr_27411 = state_27402;
(statearr_27411[(14)] = inst_27252);

(statearr_27411[(13)] = inst_27254__$1);

(statearr_27411[(15)] = inst_27251);

return statearr_27411;
})();
if(cljs.core.truth_(inst_27255)){
var statearr_27412_27494 = state_27402__$1;
(statearr_27412_27494[(1)] = (2));

} else {
var statearr_27413_27495 = state_27402__$1;
(statearr_27413_27495[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (24))){
var state_27402__$1 = state_27402;
var statearr_27414_27496 = state_27402__$1;
(statearr_27414_27496[(2)] = null);

(statearr_27414_27496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (39))){
var inst_27355 = (state_27402[(16)]);
var state_27402__$1 = state_27402;
var statearr_27415_27497 = state_27402__$1;
(statearr_27415_27497[(2)] = inst_27355);

(statearr_27415_27497[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (46))){
var inst_27397 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27416_27498 = state_27402__$1;
(statearr_27416_27498[(2)] = inst_27397);

(statearr_27416_27498[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (4))){
var inst_27299 = (state_27402[(2)]);
var inst_27300 = cljs.core.List.EMPTY;
var inst_27301 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27300);
var inst_27302 = (function (){return ((function (inst_27299,inst_27300,inst_27301,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27243_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27243_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27243_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27243_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27299,inst_27300,inst_27301,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27303 = cljs.core.filter.call(null,inst_27302,files);
var inst_27304 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27305 = cljs.core.concat.call(null,inst_27303,inst_27304);
var state_27402__$1 = (function (){var statearr_27417 = state_27402;
(statearr_27417[(17)] = inst_27299);

(statearr_27417[(18)] = inst_27301);

(statearr_27417[(12)] = inst_27305);

return statearr_27417;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27418_27499 = state_27402__$1;
(statearr_27418_27499[(1)] = (16));

} else {
var statearr_27419_27500 = state_27402__$1;
(statearr_27419_27500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (15))){
var inst_27289 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27420_27501 = state_27402__$1;
(statearr_27420_27501[(2)] = inst_27289);

(statearr_27420_27501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (21))){
var inst_27315 = (state_27402[(19)]);
var inst_27315__$1 = (state_27402[(2)]);
var inst_27316 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27315__$1);
var state_27402__$1 = (function (){var statearr_27421 = state_27402;
(statearr_27421[(19)] = inst_27315__$1);

return statearr_27421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27402__$1,(22),inst_27316);
} else {
if((state_val_27403 === (31))){
var inst_27400 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27402__$1,inst_27400);
} else {
if((state_val_27403 === (32))){
var inst_27355 = (state_27402[(16)]);
var inst_27360 = inst_27355.cljs$lang$protocol_mask$partition0$;
var inst_27361 = (inst_27360 & (64));
var inst_27362 = inst_27355.cljs$core$ISeq$;
var inst_27363 = (cljs.core.PROTOCOL_SENTINEL === inst_27362);
var inst_27364 = ((inst_27361) || (inst_27363));
var state_27402__$1 = state_27402;
if(cljs.core.truth_(inst_27364)){
var statearr_27422_27502 = state_27402__$1;
(statearr_27422_27502[(1)] = (35));

} else {
var statearr_27423_27503 = state_27402__$1;
(statearr_27423_27503[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (40))){
var inst_27377 = (state_27402[(20)]);
var inst_27376 = (state_27402[(2)]);
var inst_27377__$1 = cljs.core.get.call(null,inst_27376,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27378 = cljs.core.get.call(null,inst_27376,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27379 = cljs.core.not_empty.call(null,inst_27377__$1);
var state_27402__$1 = (function (){var statearr_27424 = state_27402;
(statearr_27424[(21)] = inst_27378);

(statearr_27424[(20)] = inst_27377__$1);

return statearr_27424;
})();
if(cljs.core.truth_(inst_27379)){
var statearr_27425_27504 = state_27402__$1;
(statearr_27425_27504[(1)] = (41));

} else {
var statearr_27426_27505 = state_27402__$1;
(statearr_27426_27505[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (33))){
var state_27402__$1 = state_27402;
var statearr_27427_27506 = state_27402__$1;
(statearr_27427_27506[(2)] = false);

(statearr_27427_27506[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (13))){
var inst_27275 = (state_27402[(22)]);
var inst_27279 = cljs.core.chunk_first.call(null,inst_27275);
var inst_27280 = cljs.core.chunk_rest.call(null,inst_27275);
var inst_27281 = cljs.core.count.call(null,inst_27279);
var inst_27262 = inst_27280;
var inst_27263 = inst_27279;
var inst_27264 = inst_27281;
var inst_27265 = (0);
var state_27402__$1 = (function (){var statearr_27428 = state_27402;
(statearr_27428[(7)] = inst_27265);

(statearr_27428[(8)] = inst_27264);

(statearr_27428[(9)] = inst_27263);

(statearr_27428[(10)] = inst_27262);

return statearr_27428;
})();
var statearr_27429_27507 = state_27402__$1;
(statearr_27429_27507[(2)] = null);

(statearr_27429_27507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (22))){
var inst_27318 = (state_27402[(23)]);
var inst_27319 = (state_27402[(24)]);
var inst_27315 = (state_27402[(19)]);
var inst_27323 = (state_27402[(25)]);
var inst_27318__$1 = (state_27402[(2)]);
var inst_27319__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27318__$1);
var inst_27320 = (function (){var all_files = inst_27315;
var res_SINGLEQUOTE_ = inst_27318__$1;
var res = inst_27319__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27318,inst_27319,inst_27315,inst_27323,inst_27318__$1,inst_27319__$1,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27244_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27244_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27318,inst_27319,inst_27315,inst_27323,inst_27318__$1,inst_27319__$1,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27321 = cljs.core.filter.call(null,inst_27320,inst_27318__$1);
var inst_27322 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27323__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27322);
var inst_27324 = cljs.core.not_empty.call(null,inst_27323__$1);
var state_27402__$1 = (function (){var statearr_27430 = state_27402;
(statearr_27430[(23)] = inst_27318__$1);

(statearr_27430[(24)] = inst_27319__$1);

(statearr_27430[(25)] = inst_27323__$1);

(statearr_27430[(26)] = inst_27321);

return statearr_27430;
})();
if(cljs.core.truth_(inst_27324)){
var statearr_27431_27508 = state_27402__$1;
(statearr_27431_27508[(1)] = (23));

} else {
var statearr_27432_27509 = state_27402__$1;
(statearr_27432_27509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (36))){
var state_27402__$1 = state_27402;
var statearr_27433_27510 = state_27402__$1;
(statearr_27433_27510[(2)] = false);

(statearr_27433_27510[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (41))){
var inst_27377 = (state_27402[(20)]);
var inst_27381 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27382 = cljs.core.map.call(null,inst_27381,inst_27377);
var inst_27383 = cljs.core.pr_str.call(null,inst_27382);
var inst_27384 = ["figwheel-no-load meta-data: ",inst_27383].join('');
var inst_27385 = figwheel.client.utils.log.call(null,inst_27384);
var state_27402__$1 = state_27402;
var statearr_27434_27511 = state_27402__$1;
(statearr_27434_27511[(2)] = inst_27385);

(statearr_27434_27511[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (43))){
var inst_27378 = (state_27402[(21)]);
var inst_27388 = (state_27402[(2)]);
var inst_27389 = cljs.core.not_empty.call(null,inst_27378);
var state_27402__$1 = (function (){var statearr_27435 = state_27402;
(statearr_27435[(27)] = inst_27388);

return statearr_27435;
})();
if(cljs.core.truth_(inst_27389)){
var statearr_27436_27512 = state_27402__$1;
(statearr_27436_27512[(1)] = (44));

} else {
var statearr_27437_27513 = state_27402__$1;
(statearr_27437_27513[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (29))){
var inst_27318 = (state_27402[(23)]);
var inst_27319 = (state_27402[(24)]);
var inst_27315 = (state_27402[(19)]);
var inst_27355 = (state_27402[(16)]);
var inst_27323 = (state_27402[(25)]);
var inst_27321 = (state_27402[(26)]);
var inst_27351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27354 = (function (){var all_files = inst_27315;
var res_SINGLEQUOTE_ = inst_27318;
var res = inst_27319;
var files_not_loaded = inst_27321;
var dependencies_that_loaded = inst_27323;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27318,inst_27319,inst_27315,inst_27355,inst_27323,inst_27321,inst_27351,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27353){
var map__27438 = p__27353;
var map__27438__$1 = (((((!((map__27438 == null))))?(((((map__27438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27438):map__27438);
var namespace = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27318,inst_27319,inst_27315,inst_27355,inst_27323,inst_27321,inst_27351,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27355__$1 = cljs.core.group_by.call(null,inst_27354,inst_27321);
var inst_27357 = (inst_27355__$1 == null);
var inst_27358 = cljs.core.not.call(null,inst_27357);
var state_27402__$1 = (function (){var statearr_27440 = state_27402;
(statearr_27440[(28)] = inst_27351);

(statearr_27440[(16)] = inst_27355__$1);

return statearr_27440;
})();
if(inst_27358){
var statearr_27441_27514 = state_27402__$1;
(statearr_27441_27514[(1)] = (32));

} else {
var statearr_27442_27515 = state_27402__$1;
(statearr_27442_27515[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (44))){
var inst_27378 = (state_27402[(21)]);
var inst_27391 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27378);
var inst_27392 = cljs.core.pr_str.call(null,inst_27391);
var inst_27393 = ["not required: ",inst_27392].join('');
var inst_27394 = figwheel.client.utils.log.call(null,inst_27393);
var state_27402__$1 = state_27402;
var statearr_27443_27516 = state_27402__$1;
(statearr_27443_27516[(2)] = inst_27394);

(statearr_27443_27516[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (6))){
var inst_27296 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27444_27517 = state_27402__$1;
(statearr_27444_27517[(2)] = inst_27296);

(statearr_27444_27517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (28))){
var inst_27321 = (state_27402[(26)]);
var inst_27348 = (state_27402[(2)]);
var inst_27349 = cljs.core.not_empty.call(null,inst_27321);
var state_27402__$1 = (function (){var statearr_27445 = state_27402;
(statearr_27445[(29)] = inst_27348);

return statearr_27445;
})();
if(cljs.core.truth_(inst_27349)){
var statearr_27446_27518 = state_27402__$1;
(statearr_27446_27518[(1)] = (29));

} else {
var statearr_27447_27519 = state_27402__$1;
(statearr_27447_27519[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (25))){
var inst_27319 = (state_27402[(24)]);
var inst_27335 = (state_27402[(2)]);
var inst_27336 = cljs.core.not_empty.call(null,inst_27319);
var state_27402__$1 = (function (){var statearr_27448 = state_27402;
(statearr_27448[(30)] = inst_27335);

return statearr_27448;
})();
if(cljs.core.truth_(inst_27336)){
var statearr_27449_27520 = state_27402__$1;
(statearr_27449_27520[(1)] = (26));

} else {
var statearr_27450_27521 = state_27402__$1;
(statearr_27450_27521[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (34))){
var inst_27371 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
if(cljs.core.truth_(inst_27371)){
var statearr_27451_27522 = state_27402__$1;
(statearr_27451_27522[(1)] = (38));

} else {
var statearr_27452_27523 = state_27402__$1;
(statearr_27452_27523[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (17))){
var state_27402__$1 = state_27402;
var statearr_27453_27524 = state_27402__$1;
(statearr_27453_27524[(2)] = recompile_dependents);

(statearr_27453_27524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (3))){
var state_27402__$1 = state_27402;
var statearr_27454_27525 = state_27402__$1;
(statearr_27454_27525[(2)] = null);

(statearr_27454_27525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (12))){
var inst_27292 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27455_27526 = state_27402__$1;
(statearr_27455_27526[(2)] = inst_27292);

(statearr_27455_27526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (2))){
var inst_27254 = (state_27402[(13)]);
var inst_27261 = cljs.core.seq.call(null,inst_27254);
var inst_27262 = inst_27261;
var inst_27263 = null;
var inst_27264 = (0);
var inst_27265 = (0);
var state_27402__$1 = (function (){var statearr_27456 = state_27402;
(statearr_27456[(7)] = inst_27265);

(statearr_27456[(8)] = inst_27264);

(statearr_27456[(9)] = inst_27263);

(statearr_27456[(10)] = inst_27262);

return statearr_27456;
})();
var statearr_27457_27527 = state_27402__$1;
(statearr_27457_27527[(2)] = null);

(statearr_27457_27527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (23))){
var inst_27318 = (state_27402[(23)]);
var inst_27319 = (state_27402[(24)]);
var inst_27315 = (state_27402[(19)]);
var inst_27323 = (state_27402[(25)]);
var inst_27321 = (state_27402[(26)]);
var inst_27326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27328 = (function (){var all_files = inst_27315;
var res_SINGLEQUOTE_ = inst_27318;
var res = inst_27319;
var files_not_loaded = inst_27321;
var dependencies_that_loaded = inst_27323;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27318,inst_27319,inst_27315,inst_27323,inst_27321,inst_27326,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27327){
var map__27458 = p__27327;
var map__27458__$1 = (((((!((map__27458 == null))))?(((((map__27458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27458):map__27458);
var request_url = cljs.core.get.call(null,map__27458__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27318,inst_27319,inst_27315,inst_27323,inst_27321,inst_27326,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27329 = cljs.core.reverse.call(null,inst_27323);
var inst_27330 = cljs.core.map.call(null,inst_27328,inst_27329);
var inst_27331 = cljs.core.pr_str.call(null,inst_27330);
var inst_27332 = figwheel.client.utils.log.call(null,inst_27331);
var state_27402__$1 = (function (){var statearr_27460 = state_27402;
(statearr_27460[(31)] = inst_27326);

return statearr_27460;
})();
var statearr_27461_27528 = state_27402__$1;
(statearr_27461_27528[(2)] = inst_27332);

(statearr_27461_27528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (35))){
var state_27402__$1 = state_27402;
var statearr_27462_27529 = state_27402__$1;
(statearr_27462_27529[(2)] = true);

(statearr_27462_27529[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (19))){
var inst_27305 = (state_27402[(12)]);
var inst_27311 = figwheel.client.file_reloading.expand_files.call(null,inst_27305);
var state_27402__$1 = state_27402;
var statearr_27463_27530 = state_27402__$1;
(statearr_27463_27530[(2)] = inst_27311);

(statearr_27463_27530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (11))){
var state_27402__$1 = state_27402;
var statearr_27464_27531 = state_27402__$1;
(statearr_27464_27531[(2)] = null);

(statearr_27464_27531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (9))){
var inst_27294 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27465_27532 = state_27402__$1;
(statearr_27465_27532[(2)] = inst_27294);

(statearr_27465_27532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (5))){
var inst_27265 = (state_27402[(7)]);
var inst_27264 = (state_27402[(8)]);
var inst_27267 = (inst_27265 < inst_27264);
var inst_27268 = inst_27267;
var state_27402__$1 = state_27402;
if(cljs.core.truth_(inst_27268)){
var statearr_27466_27533 = state_27402__$1;
(statearr_27466_27533[(1)] = (7));

} else {
var statearr_27467_27534 = state_27402__$1;
(statearr_27467_27534[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (14))){
var inst_27275 = (state_27402[(22)]);
var inst_27284 = cljs.core.first.call(null,inst_27275);
var inst_27285 = figwheel.client.file_reloading.eval_body.call(null,inst_27284,opts);
var inst_27286 = cljs.core.next.call(null,inst_27275);
var inst_27262 = inst_27286;
var inst_27263 = null;
var inst_27264 = (0);
var inst_27265 = (0);
var state_27402__$1 = (function (){var statearr_27468 = state_27402;
(statearr_27468[(7)] = inst_27265);

(statearr_27468[(8)] = inst_27264);

(statearr_27468[(32)] = inst_27285);

(statearr_27468[(9)] = inst_27263);

(statearr_27468[(10)] = inst_27262);

return statearr_27468;
})();
var statearr_27469_27535 = state_27402__$1;
(statearr_27469_27535[(2)] = null);

(statearr_27469_27535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (45))){
var state_27402__$1 = state_27402;
var statearr_27470_27536 = state_27402__$1;
(statearr_27470_27536[(2)] = null);

(statearr_27470_27536[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (26))){
var inst_27318 = (state_27402[(23)]);
var inst_27319 = (state_27402[(24)]);
var inst_27315 = (state_27402[(19)]);
var inst_27323 = (state_27402[(25)]);
var inst_27321 = (state_27402[(26)]);
var inst_27338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27340 = (function (){var all_files = inst_27315;
var res_SINGLEQUOTE_ = inst_27318;
var res = inst_27319;
var files_not_loaded = inst_27321;
var dependencies_that_loaded = inst_27323;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27318,inst_27319,inst_27315,inst_27323,inst_27321,inst_27338,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27339){
var map__27471 = p__27339;
var map__27471__$1 = (((((!((map__27471 == null))))?(((((map__27471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27471):map__27471);
var namespace = cljs.core.get.call(null,map__27471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27318,inst_27319,inst_27315,inst_27323,inst_27321,inst_27338,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27341 = cljs.core.map.call(null,inst_27340,inst_27319);
var inst_27342 = cljs.core.pr_str.call(null,inst_27341);
var inst_27343 = figwheel.client.utils.log.call(null,inst_27342);
var inst_27344 = (function (){var all_files = inst_27315;
var res_SINGLEQUOTE_ = inst_27318;
var res = inst_27319;
var files_not_loaded = inst_27321;
var dependencies_that_loaded = inst_27323;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27318,inst_27319,inst_27315,inst_27323,inst_27321,inst_27338,inst_27340,inst_27341,inst_27342,inst_27343,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27318,inst_27319,inst_27315,inst_27323,inst_27321,inst_27338,inst_27340,inst_27341,inst_27342,inst_27343,state_val_27403,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27345 = setTimeout(inst_27344,(10));
var state_27402__$1 = (function (){var statearr_27473 = state_27402;
(statearr_27473[(33)] = inst_27338);

(statearr_27473[(34)] = inst_27343);

return statearr_27473;
})();
var statearr_27474_27537 = state_27402__$1;
(statearr_27474_27537[(2)] = inst_27345);

(statearr_27474_27537[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (16))){
var state_27402__$1 = state_27402;
var statearr_27475_27538 = state_27402__$1;
(statearr_27475_27538[(2)] = reload_dependents);

(statearr_27475_27538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (38))){
var inst_27355 = (state_27402[(16)]);
var inst_27373 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27355);
var state_27402__$1 = state_27402;
var statearr_27476_27539 = state_27402__$1;
(statearr_27476_27539[(2)] = inst_27373);

(statearr_27476_27539[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (30))){
var state_27402__$1 = state_27402;
var statearr_27477_27540 = state_27402__$1;
(statearr_27477_27540[(2)] = null);

(statearr_27477_27540[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (10))){
var inst_27275 = (state_27402[(22)]);
var inst_27277 = cljs.core.chunked_seq_QMARK_.call(null,inst_27275);
var state_27402__$1 = state_27402;
if(inst_27277){
var statearr_27478_27541 = state_27402__$1;
(statearr_27478_27541[(1)] = (13));

} else {
var statearr_27479_27542 = state_27402__$1;
(statearr_27479_27542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (18))){
var inst_27309 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
if(cljs.core.truth_(inst_27309)){
var statearr_27480_27543 = state_27402__$1;
(statearr_27480_27543[(1)] = (19));

} else {
var statearr_27481_27544 = state_27402__$1;
(statearr_27481_27544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (42))){
var state_27402__$1 = state_27402;
var statearr_27482_27545 = state_27402__$1;
(statearr_27482_27545[(2)] = null);

(statearr_27482_27545[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (37))){
var inst_27368 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27483_27546 = state_27402__$1;
(statearr_27483_27546[(2)] = inst_27368);

(statearr_27483_27546[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (8))){
var inst_27275 = (state_27402[(22)]);
var inst_27262 = (state_27402[(10)]);
var inst_27275__$1 = cljs.core.seq.call(null,inst_27262);
var state_27402__$1 = (function (){var statearr_27484 = state_27402;
(statearr_27484[(22)] = inst_27275__$1);

return statearr_27484;
})();
if(inst_27275__$1){
var statearr_27485_27547 = state_27402__$1;
(statearr_27485_27547[(1)] = (10));

} else {
var statearr_27486_27548 = state_27402__$1;
(statearr_27486_27548[(1)] = (11));

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
});})(c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23359__auto__,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto____0 = (function (){
var statearr_27487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27487[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto__);

(statearr_27487[(1)] = (1));

return statearr_27487;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto____1 = (function (state_27402){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_27402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e27488){if((e27488 instanceof Object)){
var ex__23363__auto__ = e27488;
var statearr_27489_27549 = state_27402;
(statearr_27489_27549[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27550 = state_27402;
state_27402 = G__27550;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto__ = function(state_27402){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto____1.call(this,state_27402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23456__auto__ = (function (){var statearr_27490 = f__23455__auto__.call(null);
(statearr_27490[(6)] = c__23454__auto__);

return statearr_27490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__,map__27247,map__27247__$1,opts,before_jsload,on_jsload,reload_dependents,map__27248,map__27248__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23454__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27553,link){
var map__27554 = p__27553;
var map__27554__$1 = (((((!((map__27554 == null))))?(((((map__27554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27554):map__27554);
var file = cljs.core.get.call(null,map__27554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__27554,map__27554__$1,file){
return (function (p1__27551_SHARP_,p2__27552_SHARP_){
if(cljs.core._EQ_.call(null,p1__27551_SHARP_,p2__27552_SHARP_)){
return p1__27551_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__27554,map__27554__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27557){
var map__27558 = p__27557;
var map__27558__$1 = (((((!((map__27558 == null))))?(((((map__27558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27558):map__27558);
var match_length = cljs.core.get.call(null,map__27558__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27558__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27556_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27556_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
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
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27560_SHARP_,p2__27561_SHARP_){
return cljs.core.assoc.call(null,p1__27560_SHARP_,cljs.core.get.call(null,p2__27561_SHARP_,key),p2__27561_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27562 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27562);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27562);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27563,p__27564){
var map__27565 = p__27563;
var map__27565__$1 = (((((!((map__27565 == null))))?(((((map__27565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27565):map__27565);
var on_cssload = cljs.core.get.call(null,map__27565__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27566 = p__27564;
var map__27566__$1 = (((((!((map__27566 == null))))?(((((map__27566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27566):map__27566);
var files_msg = map__27566__$1;
var files = cljs.core.get.call(null,map__27566__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1598038771641
