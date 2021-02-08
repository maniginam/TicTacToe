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
var G__6183__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__6180 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__6181 = cljs.core.seq.call(null,vec__6180);
var first__6182 = cljs.core.first.call(null,seq__6181);
var seq__6181__$1 = cljs.core.next.call(null,seq__6181);
var tag = first__6182;
var body = seq__6181__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__6183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6184__i = 0, G__6184__a = new Array(arguments.length -  0);
while (G__6184__i < G__6184__a.length) {G__6184__a[G__6184__i] = arguments[G__6184__i + 0]; ++G__6184__i;}
  args = new cljs.core.IndexedSeq(G__6184__a,0,null);
} 
return G__6183__delegate.call(this,args);};
G__6183.cljs$lang$maxFixedArity = 0;
G__6183.cljs$lang$applyTo = (function (arglist__6185){
var args = cljs.core.seq(arglist__6185);
return G__6183__delegate(args);
});
G__6183.cljs$core$IFn$_invoke$arity$variadic = G__6183__delegate;
return G__6183;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__6186(s__6187){
return (new cljs.core.LazySeq(null,(function (){
var s__6187__$1 = s__6187;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6187__$1);
if(temp__5735__auto__){
var s__6187__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6187__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6187__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6189 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6188 = (0);
while(true){
if((i__6188 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__6188);
cljs.core.chunk_append.call(null,b__6189,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__6190 = (i__6188 + (1));
i__6188 = G__6190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6189),sablono$core$update_arglists_$_iter__6186.call(null,cljs.core.chunk_rest.call(null,s__6187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6189),null);
}
} else {
var args = cljs.core.first.call(null,s__6187__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__6186.call(null,cljs.core.rest.call(null,s__6187__$2)));
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
var len__4736__auto___6196 = arguments.length;
var i__4737__auto___6197 = (0);
while(true){
if((i__4737__auto___6197 < len__4736__auto___6196)){
args__4742__auto__.push((arguments[i__4737__auto___6197]));

var G__6198 = (i__4737__auto___6197 + (1));
i__4737__auto___6197 = G__6198;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__6192(s__6193){
return (new cljs.core.LazySeq(null,(function (){
var s__6193__$1 = s__6193;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6193__$1);
if(temp__5735__auto__){
var s__6193__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6193__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6193__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6195 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6194 = (0);
while(true){
if((i__6194 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__6194);
cljs.core.chunk_append.call(null,b__6195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__6199 = (i__6194 + (1));
i__6194 = G__6199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6195),sablono$core$iter__6192.call(null,cljs.core.chunk_rest.call(null,s__6193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6195),null);
}
} else {
var style = cljs.core.first.call(null,s__6193__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__6192.call(null,cljs.core.rest.call(null,s__6193__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq6191){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6191));
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
sablono.core.link_to6200 = (function sablono$core$link_to6200(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6203 = arguments.length;
var i__4737__auto___6204 = (0);
while(true){
if((i__4737__auto___6204 < len__4736__auto___6203)){
args__4742__auto__.push((arguments[i__4737__auto___6204]));

var G__6205 = (i__4737__auto___6204 + (1));
i__4737__auto___6204 = G__6205;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to6200.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to6200.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to6200.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to6200.cljs$lang$applyTo = (function (seq6201){
var G__6202 = cljs.core.first.call(null,seq6201);
var seq6201__$1 = cljs.core.next.call(null,seq6201);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6202,seq6201__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to6200);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to6206 = (function sablono$core$mail_to6206(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6213 = arguments.length;
var i__4737__auto___6214 = (0);
while(true){
if((i__4737__auto___6214 < len__4736__auto___6213)){
args__4742__auto__.push((arguments[i__4737__auto___6214]));

var G__6215 = (i__4737__auto___6214 + (1));
i__4737__auto___6214 = G__6215;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to6206.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to6206.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__6209){
var vec__6210 = p__6209;
var content = cljs.core.nth.call(null,vec__6210,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to6206.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to6206.cljs$lang$applyTo = (function (seq6207){
var G__6208 = cljs.core.first.call(null,seq6207);
var seq6207__$1 = cljs.core.next.call(null,seq6207);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6208,seq6207__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to6206);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list6216 = (function sablono$core$unordered_list6216(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list6216_$_iter__6217(s__6218){
return (new cljs.core.LazySeq(null,(function (){
var s__6218__$1 = s__6218;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6218__$1);
if(temp__5735__auto__){
var s__6218__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6218__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6218__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6220 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6219 = (0);
while(true){
if((i__6219 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__6219);
cljs.core.chunk_append.call(null,b__6220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6221 = (i__6219 + (1));
i__6219 = G__6221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6220),sablono$core$unordered_list6216_$_iter__6217.call(null,cljs.core.chunk_rest.call(null,s__6218__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6220),null);
}
} else {
var x = cljs.core.first.call(null,s__6218__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list6216_$_iter__6217.call(null,cljs.core.rest.call(null,s__6218__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list6216);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list6222 = (function sablono$core$ordered_list6222(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list6222_$_iter__6223(s__6224){
return (new cljs.core.LazySeq(null,(function (){
var s__6224__$1 = s__6224;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6224__$1);
if(temp__5735__auto__){
var s__6224__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6224__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6224__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6226 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6225 = (0);
while(true){
if((i__6225 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__6225);
cljs.core.chunk_append.call(null,b__6226,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6227 = (i__6225 + (1));
i__6225 = G__6227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6226),sablono$core$ordered_list6222_$_iter__6223.call(null,cljs.core.chunk_rest.call(null,s__6224__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6226),null);
}
} else {
var x = cljs.core.first.call(null,s__6224__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list6222_$_iter__6223.call(null,cljs.core.rest.call(null,s__6224__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list6222);
/**
 * Create an image element.
 */
sablono.core.image6228 = (function sablono$core$image6228(var_args){
var G__6230 = arguments.length;
switch (G__6230) {
case 1:
return sablono.core.image6228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image6228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image6228.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image6228.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image6228.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image6228);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__6232_SHARP_,p2__6233_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6232_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6233_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__6234_SHARP_,p2__6235_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6234_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6235_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__6237 = arguments.length;
switch (G__6237) {
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
sablono.core.color_field6239 = (function sablono$core$color_field6239(var_args){
var G__6241 = arguments.length;
switch (G__6241) {
case 1:
return sablono.core.color_field6239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field6239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field6239.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3501__auto__);
}));

(sablono.core.color_field6239.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.color_field6239.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field6239);

/**
 * Creates a date input field.
 */
sablono.core.date_field6242 = (function sablono$core$date_field6242(var_args){
var G__6244 = arguments.length;
switch (G__6244) {
case 1:
return sablono.core.date_field6242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field6242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field6242.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3501__auto__);
}));

(sablono.core.date_field6242.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.date_field6242.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field6242);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field6245 = (function sablono$core$datetime_field6245(var_args){
var G__6247 = arguments.length;
switch (G__6247) {
case 1:
return sablono.core.datetime_field6245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field6245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field6245.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3501__auto__);
}));

(sablono.core.datetime_field6245.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.datetime_field6245.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field6245);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field6248 = (function sablono$core$datetime_local_field6248(var_args){
var G__6250 = arguments.length;
switch (G__6250) {
case 1:
return sablono.core.datetime_local_field6248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field6248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field6248.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3501__auto__);
}));

(sablono.core.datetime_local_field6248.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.datetime_local_field6248.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field6248);

/**
 * Creates a email input field.
 */
sablono.core.email_field6251 = (function sablono$core$email_field6251(var_args){
var G__6253 = arguments.length;
switch (G__6253) {
case 1:
return sablono.core.email_field6251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field6251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field6251.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3501__auto__);
}));

(sablono.core.email_field6251.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.email_field6251.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field6251);

/**
 * Creates a file input field.
 */
sablono.core.file_field6254 = (function sablono$core$file_field6254(var_args){
var G__6256 = arguments.length;
switch (G__6256) {
case 1:
return sablono.core.file_field6254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field6254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field6254.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3501__auto__);
}));

(sablono.core.file_field6254.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.file_field6254.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field6254);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field6257 = (function sablono$core$hidden_field6257(var_args){
var G__6259 = arguments.length;
switch (G__6259) {
case 1:
return sablono.core.hidden_field6257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field6257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field6257.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3501__auto__);
}));

(sablono.core.hidden_field6257.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.hidden_field6257.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field6257);

/**
 * Creates a month input field.
 */
sablono.core.month_field6260 = (function sablono$core$month_field6260(var_args){
var G__6262 = arguments.length;
switch (G__6262) {
case 1:
return sablono.core.month_field6260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field6260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field6260.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3501__auto__);
}));

(sablono.core.month_field6260.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.month_field6260.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field6260);

/**
 * Creates a number input field.
 */
sablono.core.number_field6263 = (function sablono$core$number_field6263(var_args){
var G__6265 = arguments.length;
switch (G__6265) {
case 1:
return sablono.core.number_field6263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field6263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field6263.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3501__auto__);
}));

(sablono.core.number_field6263.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.number_field6263.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field6263);

/**
 * Creates a password input field.
 */
sablono.core.password_field6266 = (function sablono$core$password_field6266(var_args){
var G__6268 = arguments.length;
switch (G__6268) {
case 1:
return sablono.core.password_field6266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field6266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field6266.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3501__auto__);
}));

(sablono.core.password_field6266.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.password_field6266.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field6266);

/**
 * Creates a range input field.
 */
sablono.core.range_field6269 = (function sablono$core$range_field6269(var_args){
var G__6271 = arguments.length;
switch (G__6271) {
case 1:
return sablono.core.range_field6269.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field6269.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field6269.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3501__auto__);
}));

(sablono.core.range_field6269.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.range_field6269.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field6269);

/**
 * Creates a search input field.
 */
sablono.core.search_field6272 = (function sablono$core$search_field6272(var_args){
var G__6274 = arguments.length;
switch (G__6274) {
case 1:
return sablono.core.search_field6272.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field6272.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field6272.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3501__auto__);
}));

(sablono.core.search_field6272.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.search_field6272.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field6272);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field6275 = (function sablono$core$tel_field6275(var_args){
var G__6277 = arguments.length;
switch (G__6277) {
case 1:
return sablono.core.tel_field6275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field6275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field6275.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3501__auto__);
}));

(sablono.core.tel_field6275.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.tel_field6275.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field6275);

/**
 * Creates a text input field.
 */
sablono.core.text_field6278 = (function sablono$core$text_field6278(var_args){
var G__6280 = arguments.length;
switch (G__6280) {
case 1:
return sablono.core.text_field6278.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field6278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field6278.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3501__auto__);
}));

(sablono.core.text_field6278.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.text_field6278.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field6278);

/**
 * Creates a time input field.
 */
sablono.core.time_field6281 = (function sablono$core$time_field6281(var_args){
var G__6283 = arguments.length;
switch (G__6283) {
case 1:
return sablono.core.time_field6281.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field6281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field6281.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3501__auto__);
}));

(sablono.core.time_field6281.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.time_field6281.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field6281);

/**
 * Creates a url input field.
 */
sablono.core.url_field6284 = (function sablono$core$url_field6284(var_args){
var G__6286 = arguments.length;
switch (G__6286) {
case 1:
return sablono.core.url_field6284.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field6284.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field6284.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3501__auto__);
}));

(sablono.core.url_field6284.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.url_field6284.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field6284);

/**
 * Creates a week input field.
 */
sablono.core.week_field6287 = (function sablono$core$week_field6287(var_args){
var G__6289 = arguments.length;
switch (G__6289) {
case 1:
return sablono.core.week_field6287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field6287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field6287.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3501__auto__);
}));

(sablono.core.week_field6287.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.week_field6287.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field6287);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box6307 = (function sablono$core$check_box6307(var_args){
var G__6309 = arguments.length;
switch (G__6309) {
case 1:
return sablono.core.check_box6307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box6307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box6307.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box6307.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box6307.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box6307.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box6307.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box6307);
/**
 * Creates a radio button.
 */
sablono.core.radio_button6311 = (function sablono$core$radio_button6311(var_args){
var G__6313 = arguments.length;
switch (G__6313) {
case 1:
return sablono.core.radio_button6311.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button6311.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button6311.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button6311.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button6311.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button6311.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button6311.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button6311);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options6315 = (function sablono$core$select_options6315(coll){
var iter__4529__auto__ = (function sablono$core$select_options6315_$_iter__6316(s__6317){
return (new cljs.core.LazySeq(null,(function (){
var s__6317__$1 = s__6317;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6317__$1);
if(temp__5735__auto__){
var s__6317__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6317__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6317__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6319 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6318 = (0);
while(true){
if((i__6318 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__6318);
cljs.core.chunk_append.call(null,b__6319,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6320 = x;
var text = cljs.core.nth.call(null,vec__6320,(0),null);
var val = cljs.core.nth.call(null,vec__6320,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6320,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options6315.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__6326 = (i__6318 + (1));
i__6318 = G__6326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6319),sablono$core$select_options6315_$_iter__6316.call(null,cljs.core.chunk_rest.call(null,s__6317__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6319),null);
}
} else {
var x = cljs.core.first.call(null,s__6317__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6323 = x;
var text = cljs.core.nth.call(null,vec__6323,(0),null);
var val = cljs.core.nth.call(null,vec__6323,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6323,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options6315.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options6315_$_iter__6316.call(null,cljs.core.rest.call(null,s__6317__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options6315);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down6327 = (function sablono$core$drop_down6327(var_args){
var G__6329 = arguments.length;
switch (G__6329) {
case 2:
return sablono.core.drop_down6327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down6327.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down6327.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down6327.call(null,name,options,null);
}));

(sablono.core.drop_down6327.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down6327.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down6327);
/**
 * Creates a text area element.
 */
sablono.core.text_area6331 = (function sablono$core$text_area6331(var_args){
var G__6333 = arguments.length;
switch (G__6333) {
case 1:
return sablono.core.text_area6331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area6331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area6331.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area6331.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area6331.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area6331);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label6335 = (function sablono$core$label6335(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label6335);
/**
 * Creates a submit button.
 */
sablono.core.submit_button6336 = (function sablono$core$submit_button6336(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button6336);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button6337 = (function sablono$core$reset_button6337(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button6337);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to6338 = (function sablono$core$form_to6338(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6345 = arguments.length;
var i__4737__auto___6346 = (0);
while(true){
if((i__4737__auto___6346 < len__4736__auto___6345)){
args__4742__auto__.push((arguments[i__4737__auto___6346]));

var G__6347 = (i__4737__auto___6346 + (1));
i__4737__auto___6346 = G__6347;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to6338.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to6338.cljs$core$IFn$_invoke$arity$variadic = (function (p__6341,body){
var vec__6342 = p__6341;
var method = cljs.core.nth.call(null,vec__6342,(0),null);
var action = cljs.core.nth.call(null,vec__6342,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to6338.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to6338.cljs$lang$applyTo = (function (seq6339){
var G__6340 = cljs.core.first.call(null,seq6339);
var seq6339__$1 = cljs.core.next.call(null,seq6339);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6340,seq6339__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to6338);

//# sourceMappingURL=core.js.map
