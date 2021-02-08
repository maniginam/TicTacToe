// Compiled by ClojureScript 1.10.773 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('react');
sablono.core.global$module$react = goog.global["React"];
/**
 * The React.js create element function.
 */
sablono.core.create_element = sablono.core.global$module$react.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = sablono.core.global$module$react.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__10094__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10091 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__10092 = cljs.core.seq.call(null,vec__10091);
var first__10093 = cljs.core.first.call(null,seq__10092);
var seq__10092__$1 = cljs.core.next.call(null,seq__10092);
var tag = first__10093;
var body = seq__10092__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10095__i = 0, G__10095__a = new Array(arguments.length -  0);
while (G__10095__i < G__10095__a.length) {G__10095__a[G__10095__i] = arguments[G__10095__i + 0]; ++G__10095__i;}
  args = new cljs.core.IndexedSeq(G__10095__a,0,null);
} 
return G__10094__delegate.call(this,args);};
G__10094.cljs$lang$maxFixedArity = 0;
G__10094.cljs$lang$applyTo = (function (arglist__10096){
var args = cljs.core.seq(arglist__10096);
return G__10094__delegate(args);
});
G__10094.cljs$core$IFn$_invoke$arity$variadic = G__10094__delegate;
return G__10094;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__10097(s__10098){
return (new cljs.core.LazySeq(null,(function (){
var s__10098__$1 = s__10098;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__10098__$1);
if(temp__5735__auto__){
var s__10098__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10098__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__10098__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__10100 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__10099 = (0);
while(true){
if((i__10099 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__10099);
cljs.core.chunk_append.call(null,b__10100,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__10101 = (i__10099 + (1));
i__10099 = G__10101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10100),sablono$core$update_arglists_$_iter__10097.call(null,cljs.core.chunk_rest.call(null,s__10098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10100),null);
}
} else {
var args = cljs.core.first.call(null,s__10098__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__10097.call(null,cljs.core.rest.call(null,s__10098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10107 = arguments.length;
var i__4737__auto___10108 = (0);
while(true){
if((i__4737__auto___10108 < len__4736__auto___10107)){
args__4742__auto__.push((arguments[i__4737__auto___10108]));

var G__10109 = (i__4737__auto___10108 + (1));
i__4737__auto___10108 = G__10109;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__10103(s__10104){
return (new cljs.core.LazySeq(null,(function (){
var s__10104__$1 = s__10104;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__10104__$1);
if(temp__5735__auto__){
var s__10104__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10104__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__10104__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__10106 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__10105 = (0);
while(true){
if((i__10105 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__10105);
cljs.core.chunk_append.call(null,b__10106,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__10110 = (i__10105 + (1));
i__10105 = G__10110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10106),sablono$core$iter__10103.call(null,cljs.core.chunk_rest.call(null,s__10104__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10106),null);
}
} else {
var style = cljs.core.first.call(null,s__10104__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__10103.call(null,cljs.core.rest.call(null,s__10104__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq10102){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10102));
}));

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
sablono.core.link_to10111 = (function sablono$core$link_to10111(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10114 = arguments.length;
var i__4737__auto___10115 = (0);
while(true){
if((i__4737__auto___10115 < len__4736__auto___10114)){
args__4742__auto__.push((arguments[i__4737__auto___10115]));

var G__10116 = (i__4737__auto___10115 + (1));
i__4737__auto___10115 = G__10116;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to10111.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to10111.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to10111.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to10111.cljs$lang$applyTo = (function (seq10112){
var G__10113 = cljs.core.first.call(null,seq10112);
var seq10112__$1 = cljs.core.next.call(null,seq10112);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10113,seq10112__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10111);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to10117 = (function sablono$core$mail_to10117(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10124 = arguments.length;
var i__4737__auto___10125 = (0);
while(true){
if((i__4737__auto___10125 < len__4736__auto___10124)){
args__4742__auto__.push((arguments[i__4737__auto___10125]));

var G__10126 = (i__4737__auto___10125 + (1));
i__4737__auto___10125 = G__10126;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to10117.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to10117.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__10120){
var vec__10121 = p__10120;
var content = cljs.core.nth.call(null,vec__10121,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to10117.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to10117.cljs$lang$applyTo = (function (seq10118){
var G__10119 = cljs.core.first.call(null,seq10118);
var seq10118__$1 = cljs.core.next.call(null,seq10118);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10119,seq10118__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10117);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list10127 = (function sablono$core$unordered_list10127(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list10127_$_iter__10128(s__10129){
return (new cljs.core.LazySeq(null,(function (){
var s__10129__$1 = s__10129;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__10129__$1);
if(temp__5735__auto__){
var s__10129__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10129__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__10129__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__10131 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__10130 = (0);
while(true){
if((i__10130 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__10130);
cljs.core.chunk_append.call(null,b__10131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10132 = (i__10130 + (1));
i__10130 = G__10132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10131),sablono$core$unordered_list10127_$_iter__10128.call(null,cljs.core.chunk_rest.call(null,s__10129__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10131),null);
}
} else {
var x = cljs.core.first.call(null,s__10129__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list10127_$_iter__10128.call(null,cljs.core.rest.call(null,s__10129__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10127);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list10133 = (function sablono$core$ordered_list10133(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list10133_$_iter__10134(s__10135){
return (new cljs.core.LazySeq(null,(function (){
var s__10135__$1 = s__10135;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__10135__$1);
if(temp__5735__auto__){
var s__10135__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10135__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__10135__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__10137 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__10136 = (0);
while(true){
if((i__10136 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__10136);
cljs.core.chunk_append.call(null,b__10137,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10138 = (i__10136 + (1));
i__10136 = G__10138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10137),sablono$core$ordered_list10133_$_iter__10134.call(null,cljs.core.chunk_rest.call(null,s__10135__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10137),null);
}
} else {
var x = cljs.core.first.call(null,s__10135__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list10133_$_iter__10134.call(null,cljs.core.rest.call(null,s__10135__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10133);
/**
 * Create an image element.
 */
sablono.core.image10139 = (function sablono$core$image10139(var_args){
var G__10141 = arguments.length;
switch (G__10141) {
case 1:
return sablono.core.image10139.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image10139.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image10139.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image10139.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image10139.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10139);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__10143_SHARP_,p2__10144_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10143_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10144_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__10145_SHARP_,p2__10146_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10145_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__10146_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__10148 = arguments.length;
switch (G__10148) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field10150 = (function sablono$core$color_field10150(var_args){
var G__10152 = arguments.length;
switch (G__10152) {
case 1:
return sablono.core.color_field10150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field10150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field10150.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3946__auto__);
}));

(sablono.core.color_field10150.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.color_field10150.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10150);

/**
 * Creates a date input field.
 */
sablono.core.date_field10153 = (function sablono$core$date_field10153(var_args){
var G__10155 = arguments.length;
switch (G__10155) {
case 1:
return sablono.core.date_field10153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field10153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field10153.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3946__auto__);
}));

(sablono.core.date_field10153.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.date_field10153.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10153);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field10156 = (function sablono$core$datetime_field10156(var_args){
var G__10158 = arguments.length;
switch (G__10158) {
case 1:
return sablono.core.datetime_field10156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field10156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field10156.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3946__auto__);
}));

(sablono.core.datetime_field10156.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.datetime_field10156.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10156);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field10159 = (function sablono$core$datetime_local_field10159(var_args){
var G__10161 = arguments.length;
switch (G__10161) {
case 1:
return sablono.core.datetime_local_field10159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field10159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field10159.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3946__auto__);
}));

(sablono.core.datetime_local_field10159.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.datetime_local_field10159.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10159);

/**
 * Creates a email input field.
 */
sablono.core.email_field10162 = (function sablono$core$email_field10162(var_args){
var G__10164 = arguments.length;
switch (G__10164) {
case 1:
return sablono.core.email_field10162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field10162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field10162.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3946__auto__);
}));

(sablono.core.email_field10162.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.email_field10162.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10162);

/**
 * Creates a file input field.
 */
sablono.core.file_field10165 = (function sablono$core$file_field10165(var_args){
var G__10167 = arguments.length;
switch (G__10167) {
case 1:
return sablono.core.file_field10165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field10165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field10165.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3946__auto__);
}));

(sablono.core.file_field10165.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.file_field10165.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10165);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field10168 = (function sablono$core$hidden_field10168(var_args){
var G__10170 = arguments.length;
switch (G__10170) {
case 1:
return sablono.core.hidden_field10168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field10168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field10168.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3946__auto__);
}));

(sablono.core.hidden_field10168.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.hidden_field10168.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10168);

/**
 * Creates a month input field.
 */
sablono.core.month_field10171 = (function sablono$core$month_field10171(var_args){
var G__10173 = arguments.length;
switch (G__10173) {
case 1:
return sablono.core.month_field10171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field10171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field10171.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3946__auto__);
}));

(sablono.core.month_field10171.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.month_field10171.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10171);

/**
 * Creates a number input field.
 */
sablono.core.number_field10174 = (function sablono$core$number_field10174(var_args){
var G__10176 = arguments.length;
switch (G__10176) {
case 1:
return sablono.core.number_field10174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field10174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field10174.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3946__auto__);
}));

(sablono.core.number_field10174.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.number_field10174.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10174);

/**
 * Creates a password input field.
 */
sablono.core.password_field10177 = (function sablono$core$password_field10177(var_args){
var G__10179 = arguments.length;
switch (G__10179) {
case 1:
return sablono.core.password_field10177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field10177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field10177.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3946__auto__);
}));

(sablono.core.password_field10177.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.password_field10177.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10177);

/**
 * Creates a range input field.
 */
sablono.core.range_field10180 = (function sablono$core$range_field10180(var_args){
var G__10182 = arguments.length;
switch (G__10182) {
case 1:
return sablono.core.range_field10180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field10180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field10180.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3946__auto__);
}));

(sablono.core.range_field10180.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.range_field10180.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10180);

/**
 * Creates a search input field.
 */
sablono.core.search_field10183 = (function sablono$core$search_field10183(var_args){
var G__10185 = arguments.length;
switch (G__10185) {
case 1:
return sablono.core.search_field10183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field10183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field10183.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3946__auto__);
}));

(sablono.core.search_field10183.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.search_field10183.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10183);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field10186 = (function sablono$core$tel_field10186(var_args){
var G__10188 = arguments.length;
switch (G__10188) {
case 1:
return sablono.core.tel_field10186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field10186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field10186.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3946__auto__);
}));

(sablono.core.tel_field10186.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.tel_field10186.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10186);

/**
 * Creates a text input field.
 */
sablono.core.text_field10189 = (function sablono$core$text_field10189(var_args){
var G__10191 = arguments.length;
switch (G__10191) {
case 1:
return sablono.core.text_field10189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field10189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field10189.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3946__auto__);
}));

(sablono.core.text_field10189.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.text_field10189.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10189);

/**
 * Creates a time input field.
 */
sablono.core.time_field10192 = (function sablono$core$time_field10192(var_args){
var G__10194 = arguments.length;
switch (G__10194) {
case 1:
return sablono.core.time_field10192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field10192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field10192.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3946__auto__);
}));

(sablono.core.time_field10192.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.time_field10192.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10192);

/**
 * Creates a url input field.
 */
sablono.core.url_field10195 = (function sablono$core$url_field10195(var_args){
var G__10197 = arguments.length;
switch (G__10197) {
case 1:
return sablono.core.url_field10195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field10195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field10195.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3946__auto__);
}));

(sablono.core.url_field10195.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.url_field10195.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10195);

/**
 * Creates a week input field.
 */
sablono.core.week_field10198 = (function sablono$core$week_field10198(var_args){
var G__10200 = arguments.length;
switch (G__10200) {
case 1:
return sablono.core.week_field10198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field10198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field10198.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3946__auto__);
}));

(sablono.core.week_field10198.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.week_field10198.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10198);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box10218 = (function sablono$core$check_box10218(var_args){
var G__10220 = arguments.length;
switch (G__10220) {
case 1:
return sablono.core.check_box10218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box10218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box10218.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box10218.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box10218.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box10218.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box10218.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10218);
/**
 * Creates a radio button.
 */
sablono.core.radio_button10222 = (function sablono$core$radio_button10222(var_args){
var G__10224 = arguments.length;
switch (G__10224) {
case 1:
return sablono.core.radio_button10222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button10222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button10222.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button10222.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button10222.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button10222.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button10222.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10222);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options10226 = (function sablono$core$select_options10226(coll){
var iter__4529__auto__ = (function sablono$core$select_options10226_$_iter__10227(s__10228){
return (new cljs.core.LazySeq(null,(function (){
var s__10228__$1 = s__10228;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__10228__$1);
if(temp__5735__auto__){
var s__10228__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10228__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__10228__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__10230 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__10229 = (0);
while(true){
if((i__10229 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__10229);
cljs.core.chunk_append.call(null,b__10230,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10231 = x;
var text = cljs.core.nth.call(null,vec__10231,(0),null);
var val = cljs.core.nth.call(null,vec__10231,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10231,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10226.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__10237 = (i__10229 + (1));
i__10229 = G__10237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10230),sablono$core$select_options10226_$_iter__10227.call(null,cljs.core.chunk_rest.call(null,s__10228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10230),null);
}
} else {
var x = cljs.core.first.call(null,s__10228__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10234 = x;
var text = cljs.core.nth.call(null,vec__10234,(0),null);
var val = cljs.core.nth.call(null,vec__10234,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10234,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options10226.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options10226_$_iter__10227.call(null,cljs.core.rest.call(null,s__10228__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10226);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down10238 = (function sablono$core$drop_down10238(var_args){
var G__10240 = arguments.length;
switch (G__10240) {
case 2:
return sablono.core.drop_down10238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down10238.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down10238.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down10238.call(null,name,options,null);
}));

(sablono.core.drop_down10238.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down10238.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10238);
/**
 * Creates a text area element.
 */
sablono.core.text_area10242 = (function sablono$core$text_area10242(var_args){
var G__10244 = arguments.length;
switch (G__10244) {
case 1:
return sablono.core.text_area10242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area10242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area10242.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area10242.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area10242.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10242);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label10246 = (function sablono$core$label10246(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10246);
/**
 * Creates a submit button.
 */
sablono.core.submit_button10247 = (function sablono$core$submit_button10247(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10247);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button10248 = (function sablono$core$reset_button10248(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10248);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to10249 = (function sablono$core$form_to10249(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10256 = arguments.length;
var i__4737__auto___10257 = (0);
while(true){
if((i__4737__auto___10257 < len__4736__auto___10256)){
args__4742__auto__.push((arguments[i__4737__auto___10257]));

var G__10258 = (i__4737__auto___10257 + (1));
i__4737__auto___10257 = G__10258;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to10249.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to10249.cljs$core$IFn$_invoke$arity$variadic = (function (p__10252,body){
var vec__10253 = p__10252;
var method = cljs.core.nth.call(null,vec__10253,(0),null);
var action = cljs.core.nth.call(null,vec__10253,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to10249.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to10249.cljs$lang$applyTo = (function (seq10250){
var G__10251 = cljs.core.first.call(null,seq10250);
var seq10250__$1 = cljs.core.next.call(null,seq10250);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10251,seq10250__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10249);

//# sourceMappingURL=core.js.map
