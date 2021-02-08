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
var G__44511__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__44508 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__44509 = cljs.core.seq.call(null,vec__44508);
var first__44510 = cljs.core.first.call(null,seq__44509);
var seq__44509__$1 = cljs.core.next.call(null,seq__44509);
var tag = first__44510;
var body = seq__44509__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__44511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44512__i = 0, G__44512__a = new Array(arguments.length -  0);
while (G__44512__i < G__44512__a.length) {G__44512__a[G__44512__i] = arguments[G__44512__i + 0]; ++G__44512__i;}
  args = new cljs.core.IndexedSeq(G__44512__a,0,null);
} 
return G__44511__delegate.call(this,args);};
G__44511.cljs$lang$maxFixedArity = 0;
G__44511.cljs$lang$applyTo = (function (arglist__44513){
var args = cljs.core.seq(arglist__44513);
return G__44511__delegate(args);
});
G__44511.cljs$core$IFn$_invoke$arity$variadic = G__44511__delegate;
return G__44511;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__44514(s__44515){
return (new cljs.core.LazySeq(null,(function (){
var s__44515__$1 = s__44515;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__44515__$1);
if(temp__5735__auto__){
var s__44515__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44515__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__44515__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__44517 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__44516 = (0);
while(true){
if((i__44516 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__44516);
cljs.core.chunk_append.call(null,b__44517,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__44518 = (i__44516 + (1));
i__44516 = G__44518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44517),sablono$core$update_arglists_$_iter__44514.call(null,cljs.core.chunk_rest.call(null,s__44515__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44517),null);
}
} else {
var args = cljs.core.first.call(null,s__44515__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__44514.call(null,cljs.core.rest.call(null,s__44515__$2)));
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
var len__4736__auto___44524 = arguments.length;
var i__4737__auto___44525 = (0);
while(true){
if((i__4737__auto___44525 < len__4736__auto___44524)){
args__4742__auto__.push((arguments[i__4737__auto___44525]));

var G__44526 = (i__4737__auto___44525 + (1));
i__4737__auto___44525 = G__44526;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__44520(s__44521){
return (new cljs.core.LazySeq(null,(function (){
var s__44521__$1 = s__44521;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__44521__$1);
if(temp__5735__auto__){
var s__44521__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44521__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__44521__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__44523 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__44522 = (0);
while(true){
if((i__44522 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__44522);
cljs.core.chunk_append.call(null,b__44523,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__44527 = (i__44522 + (1));
i__44522 = G__44527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44523),sablono$core$iter__44520.call(null,cljs.core.chunk_rest.call(null,s__44521__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44523),null);
}
} else {
var style = cljs.core.first.call(null,s__44521__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__44520.call(null,cljs.core.rest.call(null,s__44521__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq44519){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44519));
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
sablono.core.link_to44528 = (function sablono$core$link_to44528(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44531 = arguments.length;
var i__4737__auto___44532 = (0);
while(true){
if((i__4737__auto___44532 < len__4736__auto___44531)){
args__4742__auto__.push((arguments[i__4737__auto___44532]));

var G__44533 = (i__4737__auto___44532 + (1));
i__4737__auto___44532 = G__44533;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to44528.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to44528.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to44528.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to44528.cljs$lang$applyTo = (function (seq44529){
var G__44530 = cljs.core.first.call(null,seq44529);
var seq44529__$1 = cljs.core.next.call(null,seq44529);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44530,seq44529__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to44528);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to44534 = (function sablono$core$mail_to44534(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44541 = arguments.length;
var i__4737__auto___44542 = (0);
while(true){
if((i__4737__auto___44542 < len__4736__auto___44541)){
args__4742__auto__.push((arguments[i__4737__auto___44542]));

var G__44543 = (i__4737__auto___44542 + (1));
i__4737__auto___44542 = G__44543;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to44534.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to44534.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__44537){
var vec__44538 = p__44537;
var content = cljs.core.nth.call(null,vec__44538,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to44534.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to44534.cljs$lang$applyTo = (function (seq44535){
var G__44536 = cljs.core.first.call(null,seq44535);
var seq44535__$1 = cljs.core.next.call(null,seq44535);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44536,seq44535__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to44534);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list44544 = (function sablono$core$unordered_list44544(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list44544_$_iter__44545(s__44546){
return (new cljs.core.LazySeq(null,(function (){
var s__44546__$1 = s__44546;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__44546__$1);
if(temp__5735__auto__){
var s__44546__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44546__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__44546__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__44548 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__44547 = (0);
while(true){
if((i__44547 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__44547);
cljs.core.chunk_append.call(null,b__44548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__44549 = (i__44547 + (1));
i__44547 = G__44549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44548),sablono$core$unordered_list44544_$_iter__44545.call(null,cljs.core.chunk_rest.call(null,s__44546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44548),null);
}
} else {
var x = cljs.core.first.call(null,s__44546__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list44544_$_iter__44545.call(null,cljs.core.rest.call(null,s__44546__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list44544);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list44550 = (function sablono$core$ordered_list44550(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list44550_$_iter__44551(s__44552){
return (new cljs.core.LazySeq(null,(function (){
var s__44552__$1 = s__44552;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__44552__$1);
if(temp__5735__auto__){
var s__44552__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44552__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__44552__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__44554 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__44553 = (0);
while(true){
if((i__44553 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__44553);
cljs.core.chunk_append.call(null,b__44554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__44555 = (i__44553 + (1));
i__44553 = G__44555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44554),sablono$core$ordered_list44550_$_iter__44551.call(null,cljs.core.chunk_rest.call(null,s__44552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44554),null);
}
} else {
var x = cljs.core.first.call(null,s__44552__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list44550_$_iter__44551.call(null,cljs.core.rest.call(null,s__44552__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list44550);
/**
 * Create an image element.
 */
sablono.core.image44556 = (function sablono$core$image44556(var_args){
var G__44558 = arguments.length;
switch (G__44558) {
case 1:
return sablono.core.image44556.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image44556.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image44556.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image44556.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image44556.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image44556);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__44560_SHARP_,p2__44561_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44560_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44561_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__44562_SHARP_,p2__44563_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44562_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44563_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__44565 = arguments.length;
switch (G__44565) {
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
sablono.core.color_field44567 = (function sablono$core$color_field44567(var_args){
var G__44569 = arguments.length;
switch (G__44569) {
case 1:
return sablono.core.color_field44567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field44567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field44567.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3861__auto__);
}));

(sablono.core.color_field44567.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.color_field44567.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field44567);

/**
 * Creates a date input field.
 */
sablono.core.date_field44570 = (function sablono$core$date_field44570(var_args){
var G__44572 = arguments.length;
switch (G__44572) {
case 1:
return sablono.core.date_field44570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field44570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field44570.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3861__auto__);
}));

(sablono.core.date_field44570.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.date_field44570.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field44570);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field44573 = (function sablono$core$datetime_field44573(var_args){
var G__44575 = arguments.length;
switch (G__44575) {
case 1:
return sablono.core.datetime_field44573.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field44573.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field44573.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3861__auto__);
}));

(sablono.core.datetime_field44573.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.datetime_field44573.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field44573);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field44576 = (function sablono$core$datetime_local_field44576(var_args){
var G__44578 = arguments.length;
switch (G__44578) {
case 1:
return sablono.core.datetime_local_field44576.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field44576.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field44576.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3861__auto__);
}));

(sablono.core.datetime_local_field44576.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.datetime_local_field44576.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field44576);

/**
 * Creates a email input field.
 */
sablono.core.email_field44579 = (function sablono$core$email_field44579(var_args){
var G__44581 = arguments.length;
switch (G__44581) {
case 1:
return sablono.core.email_field44579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field44579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field44579.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3861__auto__);
}));

(sablono.core.email_field44579.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.email_field44579.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field44579);

/**
 * Creates a file input field.
 */
sablono.core.file_field44582 = (function sablono$core$file_field44582(var_args){
var G__44584 = arguments.length;
switch (G__44584) {
case 1:
return sablono.core.file_field44582.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field44582.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field44582.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3861__auto__);
}));

(sablono.core.file_field44582.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.file_field44582.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field44582);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field44585 = (function sablono$core$hidden_field44585(var_args){
var G__44587 = arguments.length;
switch (G__44587) {
case 1:
return sablono.core.hidden_field44585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field44585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field44585.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3861__auto__);
}));

(sablono.core.hidden_field44585.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.hidden_field44585.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field44585);

/**
 * Creates a month input field.
 */
sablono.core.month_field44588 = (function sablono$core$month_field44588(var_args){
var G__44590 = arguments.length;
switch (G__44590) {
case 1:
return sablono.core.month_field44588.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field44588.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field44588.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3861__auto__);
}));

(sablono.core.month_field44588.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.month_field44588.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field44588);

/**
 * Creates a number input field.
 */
sablono.core.number_field44591 = (function sablono$core$number_field44591(var_args){
var G__44593 = arguments.length;
switch (G__44593) {
case 1:
return sablono.core.number_field44591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field44591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field44591.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3861__auto__);
}));

(sablono.core.number_field44591.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.number_field44591.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field44591);

/**
 * Creates a password input field.
 */
sablono.core.password_field44594 = (function sablono$core$password_field44594(var_args){
var G__44596 = arguments.length;
switch (G__44596) {
case 1:
return sablono.core.password_field44594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field44594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field44594.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3861__auto__);
}));

(sablono.core.password_field44594.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.password_field44594.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field44594);

/**
 * Creates a range input field.
 */
sablono.core.range_field44597 = (function sablono$core$range_field44597(var_args){
var G__44599 = arguments.length;
switch (G__44599) {
case 1:
return sablono.core.range_field44597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field44597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field44597.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3861__auto__);
}));

(sablono.core.range_field44597.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.range_field44597.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field44597);

/**
 * Creates a search input field.
 */
sablono.core.search_field44600 = (function sablono$core$search_field44600(var_args){
var G__44602 = arguments.length;
switch (G__44602) {
case 1:
return sablono.core.search_field44600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field44600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field44600.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3861__auto__);
}));

(sablono.core.search_field44600.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.search_field44600.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field44600);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field44603 = (function sablono$core$tel_field44603(var_args){
var G__44605 = arguments.length;
switch (G__44605) {
case 1:
return sablono.core.tel_field44603.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field44603.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field44603.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3861__auto__);
}));

(sablono.core.tel_field44603.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.tel_field44603.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field44603);

/**
 * Creates a text input field.
 */
sablono.core.text_field44606 = (function sablono$core$text_field44606(var_args){
var G__44608 = arguments.length;
switch (G__44608) {
case 1:
return sablono.core.text_field44606.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field44606.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field44606.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3861__auto__);
}));

(sablono.core.text_field44606.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.text_field44606.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field44606);

/**
 * Creates a time input field.
 */
sablono.core.time_field44609 = (function sablono$core$time_field44609(var_args){
var G__44611 = arguments.length;
switch (G__44611) {
case 1:
return sablono.core.time_field44609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field44609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field44609.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3861__auto__);
}));

(sablono.core.time_field44609.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.time_field44609.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field44609);

/**
 * Creates a url input field.
 */
sablono.core.url_field44612 = (function sablono$core$url_field44612(var_args){
var G__44614 = arguments.length;
switch (G__44614) {
case 1:
return sablono.core.url_field44612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field44612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field44612.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3861__auto__);
}));

(sablono.core.url_field44612.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.url_field44612.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field44612);

/**
 * Creates a week input field.
 */
sablono.core.week_field44615 = (function sablono$core$week_field44615(var_args){
var G__44617 = arguments.length;
switch (G__44617) {
case 1:
return sablono.core.week_field44615.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field44615.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field44615.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3861__auto__);
}));

(sablono.core.week_field44615.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.week_field44615.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field44615);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box44635 = (function sablono$core$check_box44635(var_args){
var G__44637 = arguments.length;
switch (G__44637) {
case 1:
return sablono.core.check_box44635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box44635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box44635.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box44635.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box44635.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box44635.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box44635.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box44635);
/**
 * Creates a radio button.
 */
sablono.core.radio_button44639 = (function sablono$core$radio_button44639(var_args){
var G__44641 = arguments.length;
switch (G__44641) {
case 1:
return sablono.core.radio_button44639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button44639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button44639.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button44639.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button44639.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button44639.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button44639.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button44639);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options44643 = (function sablono$core$select_options44643(coll){
var iter__4529__auto__ = (function sablono$core$select_options44643_$_iter__44644(s__44645){
return (new cljs.core.LazySeq(null,(function (){
var s__44645__$1 = s__44645;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__44645__$1);
if(temp__5735__auto__){
var s__44645__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44645__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__44645__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__44647 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__44646 = (0);
while(true){
if((i__44646 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__44646);
cljs.core.chunk_append.call(null,b__44647,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__44648 = x;
var text = cljs.core.nth.call(null,vec__44648,(0),null);
var val = cljs.core.nth.call(null,vec__44648,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__44648,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options44643.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__44654 = (i__44646 + (1));
i__44646 = G__44654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44647),sablono$core$select_options44643_$_iter__44644.call(null,cljs.core.chunk_rest.call(null,s__44645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44647),null);
}
} else {
var x = cljs.core.first.call(null,s__44645__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__44651 = x;
var text = cljs.core.nth.call(null,vec__44651,(0),null);
var val = cljs.core.nth.call(null,vec__44651,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__44651,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options44643.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options44643_$_iter__44644.call(null,cljs.core.rest.call(null,s__44645__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options44643);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down44655 = (function sablono$core$drop_down44655(var_args){
var G__44657 = arguments.length;
switch (G__44657) {
case 2:
return sablono.core.drop_down44655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down44655.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down44655.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down44655.call(null,name,options,null);
}));

(sablono.core.drop_down44655.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down44655.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down44655);
/**
 * Creates a text area element.
 */
sablono.core.text_area44659 = (function sablono$core$text_area44659(var_args){
var G__44661 = arguments.length;
switch (G__44661) {
case 1:
return sablono.core.text_area44659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area44659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area44659.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area44659.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area44659.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area44659);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label44663 = (function sablono$core$label44663(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label44663);
/**
 * Creates a submit button.
 */
sablono.core.submit_button44664 = (function sablono$core$submit_button44664(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button44664);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button44665 = (function sablono$core$reset_button44665(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button44665);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to44666 = (function sablono$core$form_to44666(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44673 = arguments.length;
var i__4737__auto___44674 = (0);
while(true){
if((i__4737__auto___44674 < len__4736__auto___44673)){
args__4742__auto__.push((arguments[i__4737__auto___44674]));

var G__44675 = (i__4737__auto___44674 + (1));
i__4737__auto___44674 = G__44675;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to44666.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to44666.cljs$core$IFn$_invoke$arity$variadic = (function (p__44669,body){
var vec__44670 = p__44669;
var method = cljs.core.nth.call(null,vec__44670,(0),null);
var action = cljs.core.nth.call(null,vec__44670,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to44666.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to44666.cljs$lang$applyTo = (function (seq44667){
var G__44668 = cljs.core.first.call(null,seq44667);
var seq44667__$1 = cljs.core.next.call(null,seq44667);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44668,seq44667__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to44666);

//# sourceMappingURL=core.js.map
