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
var G__14128__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__14125 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__14126 = cljs.core.seq.call(null,vec__14125);
var first__14127 = cljs.core.first.call(null,seq__14126);
var seq__14126__$1 = cljs.core.next.call(null,seq__14126);
var tag = first__14127;
var body = seq__14126__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__14128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14129__i = 0, G__14129__a = new Array(arguments.length -  0);
while (G__14129__i < G__14129__a.length) {G__14129__a[G__14129__i] = arguments[G__14129__i + 0]; ++G__14129__i;}
  args = new cljs.core.IndexedSeq(G__14129__a,0,null);
} 
return G__14128__delegate.call(this,args);};
G__14128.cljs$lang$maxFixedArity = 0;
G__14128.cljs$lang$applyTo = (function (arglist__14130){
var args = cljs.core.seq(arglist__14130);
return G__14128__delegate(args);
});
G__14128.cljs$core$IFn$_invoke$arity$variadic = G__14128__delegate;
return G__14128;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__14131(s__14132){
return (new cljs.core.LazySeq(null,(function (){
var s__14132__$1 = s__14132;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14132__$1);
if(temp__5735__auto__){
var s__14132__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14132__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__14132__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__14134 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__14133 = (0);
while(true){
if((i__14133 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__14133);
cljs.core.chunk_append.call(null,b__14134,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__14135 = (i__14133 + (1));
i__14133 = G__14135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14134),sablono$core$update_arglists_$_iter__14131.call(null,cljs.core.chunk_rest.call(null,s__14132__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14134),null);
}
} else {
var args = cljs.core.first.call(null,s__14132__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__14131.call(null,cljs.core.rest.call(null,s__14132__$2)));
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
var len__4736__auto___14141 = arguments.length;
var i__4737__auto___14142 = (0);
while(true){
if((i__4737__auto___14142 < len__4736__auto___14141)){
args__4742__auto__.push((arguments[i__4737__auto___14142]));

var G__14143 = (i__4737__auto___14142 + (1));
i__4737__auto___14142 = G__14143;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__14137(s__14138){
return (new cljs.core.LazySeq(null,(function (){
var s__14138__$1 = s__14138;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14138__$1);
if(temp__5735__auto__){
var s__14138__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14138__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__14138__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__14140 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__14139 = (0);
while(true){
if((i__14139 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__14139);
cljs.core.chunk_append.call(null,b__14140,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__14144 = (i__14139 + (1));
i__14139 = G__14144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14140),sablono$core$iter__14137.call(null,cljs.core.chunk_rest.call(null,s__14138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14140),null);
}
} else {
var style = cljs.core.first.call(null,s__14138__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__14137.call(null,cljs.core.rest.call(null,s__14138__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq14136){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14136));
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
sablono.core.link_to14145 = (function sablono$core$link_to14145(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14148 = arguments.length;
var i__4737__auto___14149 = (0);
while(true){
if((i__4737__auto___14149 < len__4736__auto___14148)){
args__4742__auto__.push((arguments[i__4737__auto___14149]));

var G__14150 = (i__4737__auto___14149 + (1));
i__4737__auto___14149 = G__14150;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14145.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to14145.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to14145.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to14145.cljs$lang$applyTo = (function (seq14146){
var G__14147 = cljs.core.first.call(null,seq14146);
var seq14146__$1 = cljs.core.next.call(null,seq14146);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14147,seq14146__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14145);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14151 = (function sablono$core$mail_to14151(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14158 = arguments.length;
var i__4737__auto___14159 = (0);
while(true){
if((i__4737__auto___14159 < len__4736__auto___14158)){
args__4742__auto__.push((arguments[i__4737__auto___14159]));

var G__14160 = (i__4737__auto___14159 + (1));
i__4737__auto___14159 = G__14160;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14151.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to14151.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14154){
var vec__14155 = p__14154;
var content = cljs.core.nth.call(null,vec__14155,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to14151.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to14151.cljs$lang$applyTo = (function (seq14152){
var G__14153 = cljs.core.first.call(null,seq14152);
var seq14152__$1 = cljs.core.next.call(null,seq14152);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14153,seq14152__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14151);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14161 = (function sablono$core$unordered_list14161(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list14161_$_iter__14162(s__14163){
return (new cljs.core.LazySeq(null,(function (){
var s__14163__$1 = s__14163;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14163__$1);
if(temp__5735__auto__){
var s__14163__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14163__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__14163__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__14165 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__14164 = (0);
while(true){
if((i__14164 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__14164);
cljs.core.chunk_append.call(null,b__14165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14166 = (i__14164 + (1));
i__14164 = G__14166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14165),sablono$core$unordered_list14161_$_iter__14162.call(null,cljs.core.chunk_rest.call(null,s__14163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14165),null);
}
} else {
var x = cljs.core.first.call(null,s__14163__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list14161_$_iter__14162.call(null,cljs.core.rest.call(null,s__14163__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14161);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14167 = (function sablono$core$ordered_list14167(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list14167_$_iter__14168(s__14169){
return (new cljs.core.LazySeq(null,(function (){
var s__14169__$1 = s__14169;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14169__$1);
if(temp__5735__auto__){
var s__14169__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14169__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__14169__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__14171 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__14170 = (0);
while(true){
if((i__14170 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__14170);
cljs.core.chunk_append.call(null,b__14171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14172 = (i__14170 + (1));
i__14170 = G__14172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14171),sablono$core$ordered_list14167_$_iter__14168.call(null,cljs.core.chunk_rest.call(null,s__14169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14171),null);
}
} else {
var x = cljs.core.first.call(null,s__14169__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list14167_$_iter__14168.call(null,cljs.core.rest.call(null,s__14169__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14167);
/**
 * Create an image element.
 */
sablono.core.image14173 = (function sablono$core$image14173(var_args){
var G__14175 = arguments.length;
switch (G__14175) {
case 1:
return sablono.core.image14173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image14173.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image14173.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image14173.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14173);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__14177_SHARP_,p2__14178_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14177_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14178_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__14179_SHARP_,p2__14180_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14179_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14180_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__14182 = arguments.length;
switch (G__14182) {
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
sablono.core.color_field14184 = (function sablono$core$color_field14184(var_args){
var G__14186 = arguments.length;
switch (G__14186) {
case 1:
return sablono.core.color_field14184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field14184.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3501__auto__);
}));

(sablono.core.color_field14184.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.color_field14184.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14184);

/**
 * Creates a date input field.
 */
sablono.core.date_field14187 = (function sablono$core$date_field14187(var_args){
var G__14189 = arguments.length;
switch (G__14189) {
case 1:
return sablono.core.date_field14187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field14187.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3501__auto__);
}));

(sablono.core.date_field14187.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.date_field14187.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14187);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14190 = (function sablono$core$datetime_field14190(var_args){
var G__14192 = arguments.length;
switch (G__14192) {
case 1:
return sablono.core.datetime_field14190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field14190.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3501__auto__);
}));

(sablono.core.datetime_field14190.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.datetime_field14190.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14190);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14193 = (function sablono$core$datetime_local_field14193(var_args){
var G__14195 = arguments.length;
switch (G__14195) {
case 1:
return sablono.core.datetime_local_field14193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field14193.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3501__auto__);
}));

(sablono.core.datetime_local_field14193.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.datetime_local_field14193.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14193);

/**
 * Creates a email input field.
 */
sablono.core.email_field14196 = (function sablono$core$email_field14196(var_args){
var G__14198 = arguments.length;
switch (G__14198) {
case 1:
return sablono.core.email_field14196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field14196.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3501__auto__);
}));

(sablono.core.email_field14196.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.email_field14196.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14196);

/**
 * Creates a file input field.
 */
sablono.core.file_field14199 = (function sablono$core$file_field14199(var_args){
var G__14201 = arguments.length;
switch (G__14201) {
case 1:
return sablono.core.file_field14199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field14199.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3501__auto__);
}));

(sablono.core.file_field14199.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.file_field14199.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14199);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14202 = (function sablono$core$hidden_field14202(var_args){
var G__14204 = arguments.length;
switch (G__14204) {
case 1:
return sablono.core.hidden_field14202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field14202.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3501__auto__);
}));

(sablono.core.hidden_field14202.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.hidden_field14202.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14202);

/**
 * Creates a month input field.
 */
sablono.core.month_field14205 = (function sablono$core$month_field14205(var_args){
var G__14207 = arguments.length;
switch (G__14207) {
case 1:
return sablono.core.month_field14205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field14205.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3501__auto__);
}));

(sablono.core.month_field14205.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.month_field14205.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14205);

/**
 * Creates a number input field.
 */
sablono.core.number_field14208 = (function sablono$core$number_field14208(var_args){
var G__14210 = arguments.length;
switch (G__14210) {
case 1:
return sablono.core.number_field14208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field14208.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3501__auto__);
}));

(sablono.core.number_field14208.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.number_field14208.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14208);

/**
 * Creates a password input field.
 */
sablono.core.password_field14211 = (function sablono$core$password_field14211(var_args){
var G__14213 = arguments.length;
switch (G__14213) {
case 1:
return sablono.core.password_field14211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field14211.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3501__auto__);
}));

(sablono.core.password_field14211.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.password_field14211.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14211);

/**
 * Creates a range input field.
 */
sablono.core.range_field14214 = (function sablono$core$range_field14214(var_args){
var G__14216 = arguments.length;
switch (G__14216) {
case 1:
return sablono.core.range_field14214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field14214.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3501__auto__);
}));

(sablono.core.range_field14214.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.range_field14214.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14214);

/**
 * Creates a search input field.
 */
sablono.core.search_field14217 = (function sablono$core$search_field14217(var_args){
var G__14219 = arguments.length;
switch (G__14219) {
case 1:
return sablono.core.search_field14217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field14217.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3501__auto__);
}));

(sablono.core.search_field14217.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.search_field14217.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14217);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14220 = (function sablono$core$tel_field14220(var_args){
var G__14222 = arguments.length;
switch (G__14222) {
case 1:
return sablono.core.tel_field14220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field14220.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3501__auto__);
}));

(sablono.core.tel_field14220.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.tel_field14220.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14220);

/**
 * Creates a text input field.
 */
sablono.core.text_field14223 = (function sablono$core$text_field14223(var_args){
var G__14225 = arguments.length;
switch (G__14225) {
case 1:
return sablono.core.text_field14223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field14223.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3501__auto__);
}));

(sablono.core.text_field14223.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.text_field14223.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14223);

/**
 * Creates a time input field.
 */
sablono.core.time_field14226 = (function sablono$core$time_field14226(var_args){
var G__14228 = arguments.length;
switch (G__14228) {
case 1:
return sablono.core.time_field14226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field14226.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3501__auto__);
}));

(sablono.core.time_field14226.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.time_field14226.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14226);

/**
 * Creates a url input field.
 */
sablono.core.url_field14229 = (function sablono$core$url_field14229(var_args){
var G__14231 = arguments.length;
switch (G__14231) {
case 1:
return sablono.core.url_field14229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field14229.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3501__auto__);
}));

(sablono.core.url_field14229.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.url_field14229.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14229);

/**
 * Creates a week input field.
 */
sablono.core.week_field14232 = (function sablono$core$week_field14232(var_args){
var G__14234 = arguments.length;
switch (G__14234) {
case 1:
return sablono.core.week_field14232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field14232.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3501__auto__);
}));

(sablono.core.week_field14232.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.week_field14232.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14232);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14252 = (function sablono$core$check_box14252(var_args){
var G__14254 = arguments.length;
switch (G__14254) {
case 1:
return sablono.core.check_box14252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14252.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box14252.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box14252.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box14252.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box14252.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14252);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14256 = (function sablono$core$radio_button14256(var_args){
var G__14258 = arguments.length;
switch (G__14258) {
case 1:
return sablono.core.radio_button14256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14256.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button14256.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button14256.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button14256.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button14256.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14256);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14260 = (function sablono$core$select_options14260(coll){
var iter__4529__auto__ = (function sablono$core$select_options14260_$_iter__14261(s__14262){
return (new cljs.core.LazySeq(null,(function (){
var s__14262__$1 = s__14262;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14262__$1);
if(temp__5735__auto__){
var s__14262__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14262__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__14262__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__14264 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__14263 = (0);
while(true){
if((i__14263 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__14263);
cljs.core.chunk_append.call(null,b__14264,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14265 = x;
var text = cljs.core.nth.call(null,vec__14265,(0),null);
var val = cljs.core.nth.call(null,vec__14265,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14265,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options14260.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__14271 = (i__14263 + (1));
i__14263 = G__14271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14264),sablono$core$select_options14260_$_iter__14261.call(null,cljs.core.chunk_rest.call(null,s__14262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14264),null);
}
} else {
var x = cljs.core.first.call(null,s__14262__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14268 = x;
var text = cljs.core.nth.call(null,vec__14268,(0),null);
var val = cljs.core.nth.call(null,vec__14268,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14268,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options14260.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options14260_$_iter__14261.call(null,cljs.core.rest.call(null,s__14262__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14260);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14272 = (function sablono$core$drop_down14272(var_args){
var G__14274 = arguments.length;
switch (G__14274) {
case 2:
return sablono.core.drop_down14272.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14272.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down14272.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14272.call(null,name,options,null);
}));

(sablono.core.drop_down14272.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down14272.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14272);
/**
 * Creates a text area element.
 */
sablono.core.text_area14276 = (function sablono$core$text_area14276(var_args){
var G__14278 = arguments.length;
switch (G__14278) {
case 1:
return sablono.core.text_area14276.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14276.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area14276.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area14276.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area14276.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14276);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14280 = (function sablono$core$label14280(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14280);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14281 = (function sablono$core$submit_button14281(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14281);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14282 = (function sablono$core$reset_button14282(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14282);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14283 = (function sablono$core$form_to14283(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14290 = arguments.length;
var i__4737__auto___14291 = (0);
while(true){
if((i__4737__auto___14291 < len__4736__auto___14290)){
args__4742__auto__.push((arguments[i__4737__auto___14291]));

var G__14292 = (i__4737__auto___14291 + (1));
i__4737__auto___14291 = G__14292;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14283.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to14283.cljs$core$IFn$_invoke$arity$variadic = (function (p__14286,body){
var vec__14287 = p__14286;
var method = cljs.core.nth.call(null,vec__14287,(0),null);
var action = cljs.core.nth.call(null,vec__14287,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to14283.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to14283.cljs$lang$applyTo = (function (seq14284){
var G__14285 = cljs.core.first.call(null,seq14284);
var seq14284__$1 = cljs.core.next.call(null,seq14284);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14285,seq14284__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14283);

//# sourceMappingURL=core.js.map
