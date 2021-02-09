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
var G__7546__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__7543 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__7544 = cljs.core.seq.call(null,vec__7543);
var first__7545 = cljs.core.first.call(null,seq__7544);
var seq__7544__$1 = cljs.core.next.call(null,seq__7544);
var tag = first__7545;
var body = seq__7544__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__7546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7547__i = 0, G__7547__a = new Array(arguments.length -  0);
while (G__7547__i < G__7547__a.length) {G__7547__a[G__7547__i] = arguments[G__7547__i + 0]; ++G__7547__i;}
  args = new cljs.core.IndexedSeq(G__7547__a,0,null);
} 
return G__7546__delegate.call(this,args);};
G__7546.cljs$lang$maxFixedArity = 0;
G__7546.cljs$lang$applyTo = (function (arglist__7548){
var args = cljs.core.seq(arglist__7548);
return G__7546__delegate(args);
});
G__7546.cljs$core$IFn$_invoke$arity$variadic = G__7546__delegate;
return G__7546;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__7549(s__7550){
return (new cljs.core.LazySeq(null,(function (){
var s__7550__$1 = s__7550;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7550__$1);
if(temp__5735__auto__){
var s__7550__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7550__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7550__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7552 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7551 = (0);
while(true){
if((i__7551 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__7551);
cljs.core.chunk_append.call(null,b__7552,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__7553 = (i__7551 + (1));
i__7551 = G__7553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7552),sablono$core$update_arglists_$_iter__7549.call(null,cljs.core.chunk_rest.call(null,s__7550__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7552),null);
}
} else {
var args = cljs.core.first.call(null,s__7550__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__7549.call(null,cljs.core.rest.call(null,s__7550__$2)));
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
var len__4736__auto___7559 = arguments.length;
var i__4737__auto___7560 = (0);
while(true){
if((i__4737__auto___7560 < len__4736__auto___7559)){
args__4742__auto__.push((arguments[i__4737__auto___7560]));

var G__7561 = (i__4737__auto___7560 + (1));
i__4737__auto___7560 = G__7561;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__7555(s__7556){
return (new cljs.core.LazySeq(null,(function (){
var s__7556__$1 = s__7556;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7556__$1);
if(temp__5735__auto__){
var s__7556__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7556__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7556__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7558 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7557 = (0);
while(true){
if((i__7557 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__7557);
cljs.core.chunk_append.call(null,b__7558,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__7562 = (i__7557 + (1));
i__7557 = G__7562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7558),sablono$core$iter__7555.call(null,cljs.core.chunk_rest.call(null,s__7556__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7558),null);
}
} else {
var style = cljs.core.first.call(null,s__7556__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__7555.call(null,cljs.core.rest.call(null,s__7556__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq7554){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7554));
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
sablono.core.link_to7563 = (function sablono$core$link_to7563(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7566 = arguments.length;
var i__4737__auto___7567 = (0);
while(true){
if((i__4737__auto___7567 < len__4736__auto___7566)){
args__4742__auto__.push((arguments[i__4737__auto___7567]));

var G__7568 = (i__4737__auto___7567 + (1));
i__4737__auto___7567 = G__7568;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to7563.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to7563.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to7563.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to7563.cljs$lang$applyTo = (function (seq7564){
var G__7565 = cljs.core.first.call(null,seq7564);
var seq7564__$1 = cljs.core.next.call(null,seq7564);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7565,seq7564__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to7563);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to7569 = (function sablono$core$mail_to7569(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7576 = arguments.length;
var i__4737__auto___7577 = (0);
while(true){
if((i__4737__auto___7577 < len__4736__auto___7576)){
args__4742__auto__.push((arguments[i__4737__auto___7577]));

var G__7578 = (i__4737__auto___7577 + (1));
i__4737__auto___7577 = G__7578;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to7569.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to7569.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__7572){
var vec__7573 = p__7572;
var content = cljs.core.nth.call(null,vec__7573,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to7569.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to7569.cljs$lang$applyTo = (function (seq7570){
var G__7571 = cljs.core.first.call(null,seq7570);
var seq7570__$1 = cljs.core.next.call(null,seq7570);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7571,seq7570__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to7569);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list7579 = (function sablono$core$unordered_list7579(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list7579_$_iter__7580(s__7581){
return (new cljs.core.LazySeq(null,(function (){
var s__7581__$1 = s__7581;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7581__$1);
if(temp__5735__auto__){
var s__7581__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7581__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7581__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7583 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7582 = (0);
while(true){
if((i__7582 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__7582);
cljs.core.chunk_append.call(null,b__7583,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__7584 = (i__7582 + (1));
i__7582 = G__7584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7583),sablono$core$unordered_list7579_$_iter__7580.call(null,cljs.core.chunk_rest.call(null,s__7581__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7583),null);
}
} else {
var x = cljs.core.first.call(null,s__7581__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list7579_$_iter__7580.call(null,cljs.core.rest.call(null,s__7581__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list7579);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list7585 = (function sablono$core$ordered_list7585(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list7585_$_iter__7586(s__7587){
return (new cljs.core.LazySeq(null,(function (){
var s__7587__$1 = s__7587;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7587__$1);
if(temp__5735__auto__){
var s__7587__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7587__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7587__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7589 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7588 = (0);
while(true){
if((i__7588 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__7588);
cljs.core.chunk_append.call(null,b__7589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__7590 = (i__7588 + (1));
i__7588 = G__7590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7589),sablono$core$ordered_list7585_$_iter__7586.call(null,cljs.core.chunk_rest.call(null,s__7587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7589),null);
}
} else {
var x = cljs.core.first.call(null,s__7587__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list7585_$_iter__7586.call(null,cljs.core.rest.call(null,s__7587__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list7585);
/**
 * Create an image element.
 */
sablono.core.image7591 = (function sablono$core$image7591(var_args){
var G__7593 = arguments.length;
switch (G__7593) {
case 1:
return sablono.core.image7591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image7591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image7591.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image7591.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image7591.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image7591);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__7595_SHARP_,p2__7596_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7595_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__7596_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__7597_SHARP_,p2__7598_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7597_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__7598_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__7600 = arguments.length;
switch (G__7600) {
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
sablono.core.color_field7602 = (function sablono$core$color_field7602(var_args){
var G__7604 = arguments.length;
switch (G__7604) {
case 1:
return sablono.core.color_field7602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field7602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field7602.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3501__auto__);
}));

(sablono.core.color_field7602.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.color_field7602.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field7602);

/**
 * Creates a date input field.
 */
sablono.core.date_field7605 = (function sablono$core$date_field7605(var_args){
var G__7607 = arguments.length;
switch (G__7607) {
case 1:
return sablono.core.date_field7605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field7605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field7605.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3501__auto__);
}));

(sablono.core.date_field7605.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.date_field7605.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field7605);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field7608 = (function sablono$core$datetime_field7608(var_args){
var G__7610 = arguments.length;
switch (G__7610) {
case 1:
return sablono.core.datetime_field7608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field7608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field7608.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3501__auto__);
}));

(sablono.core.datetime_field7608.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.datetime_field7608.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field7608);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field7611 = (function sablono$core$datetime_local_field7611(var_args){
var G__7613 = arguments.length;
switch (G__7613) {
case 1:
return sablono.core.datetime_local_field7611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field7611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field7611.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3501__auto__);
}));

(sablono.core.datetime_local_field7611.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.datetime_local_field7611.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field7611);

/**
 * Creates a email input field.
 */
sablono.core.email_field7614 = (function sablono$core$email_field7614(var_args){
var G__7616 = arguments.length;
switch (G__7616) {
case 1:
return sablono.core.email_field7614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field7614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field7614.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3501__auto__);
}));

(sablono.core.email_field7614.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.email_field7614.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field7614);

/**
 * Creates a file input field.
 */
sablono.core.file_field7617 = (function sablono$core$file_field7617(var_args){
var G__7619 = arguments.length;
switch (G__7619) {
case 1:
return sablono.core.file_field7617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field7617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field7617.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3501__auto__);
}));

(sablono.core.file_field7617.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.file_field7617.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field7617);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field7620 = (function sablono$core$hidden_field7620(var_args){
var G__7622 = arguments.length;
switch (G__7622) {
case 1:
return sablono.core.hidden_field7620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field7620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field7620.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3501__auto__);
}));

(sablono.core.hidden_field7620.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.hidden_field7620.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field7620);

/**
 * Creates a month input field.
 */
sablono.core.month_field7623 = (function sablono$core$month_field7623(var_args){
var G__7625 = arguments.length;
switch (G__7625) {
case 1:
return sablono.core.month_field7623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field7623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field7623.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3501__auto__);
}));

(sablono.core.month_field7623.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.month_field7623.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field7623);

/**
 * Creates a number input field.
 */
sablono.core.number_field7626 = (function sablono$core$number_field7626(var_args){
var G__7628 = arguments.length;
switch (G__7628) {
case 1:
return sablono.core.number_field7626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field7626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field7626.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3501__auto__);
}));

(sablono.core.number_field7626.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.number_field7626.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field7626);

/**
 * Creates a password input field.
 */
sablono.core.password_field7629 = (function sablono$core$password_field7629(var_args){
var G__7631 = arguments.length;
switch (G__7631) {
case 1:
return sablono.core.password_field7629.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field7629.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field7629.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3501__auto__);
}));

(sablono.core.password_field7629.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.password_field7629.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field7629);

/**
 * Creates a range input field.
 */
sablono.core.range_field7632 = (function sablono$core$range_field7632(var_args){
var G__7634 = arguments.length;
switch (G__7634) {
case 1:
return sablono.core.range_field7632.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field7632.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field7632.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3501__auto__);
}));

(sablono.core.range_field7632.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.range_field7632.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field7632);

/**
 * Creates a search input field.
 */
sablono.core.search_field7635 = (function sablono$core$search_field7635(var_args){
var G__7637 = arguments.length;
switch (G__7637) {
case 1:
return sablono.core.search_field7635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field7635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field7635.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3501__auto__);
}));

(sablono.core.search_field7635.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.search_field7635.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field7635);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field7638 = (function sablono$core$tel_field7638(var_args){
var G__7640 = arguments.length;
switch (G__7640) {
case 1:
return sablono.core.tel_field7638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field7638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field7638.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3501__auto__);
}));

(sablono.core.tel_field7638.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.tel_field7638.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field7638);

/**
 * Creates a text input field.
 */
sablono.core.text_field7641 = (function sablono$core$text_field7641(var_args){
var G__7643 = arguments.length;
switch (G__7643) {
case 1:
return sablono.core.text_field7641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field7641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field7641.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3501__auto__);
}));

(sablono.core.text_field7641.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.text_field7641.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field7641);

/**
 * Creates a time input field.
 */
sablono.core.time_field7644 = (function sablono$core$time_field7644(var_args){
var G__7646 = arguments.length;
switch (G__7646) {
case 1:
return sablono.core.time_field7644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field7644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field7644.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3501__auto__);
}));

(sablono.core.time_field7644.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.time_field7644.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field7644);

/**
 * Creates a url input field.
 */
sablono.core.url_field7647 = (function sablono$core$url_field7647(var_args){
var G__7649 = arguments.length;
switch (G__7649) {
case 1:
return sablono.core.url_field7647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field7647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field7647.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3501__auto__);
}));

(sablono.core.url_field7647.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.url_field7647.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field7647);

/**
 * Creates a week input field.
 */
sablono.core.week_field7650 = (function sablono$core$week_field7650(var_args){
var G__7652 = arguments.length;
switch (G__7652) {
case 1:
return sablono.core.week_field7650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field7650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field7650.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3501__auto__);
}));

(sablono.core.week_field7650.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.week_field7650.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field7650);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box7670 = (function sablono$core$check_box7670(var_args){
var G__7672 = arguments.length;
switch (G__7672) {
case 1:
return sablono.core.check_box7670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box7670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box7670.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box7670.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box7670.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box7670.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box7670.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box7670);
/**
 * Creates a radio button.
 */
sablono.core.radio_button7674 = (function sablono$core$radio_button7674(var_args){
var G__7676 = arguments.length;
switch (G__7676) {
case 1:
return sablono.core.radio_button7674.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button7674.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button7674.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button7674.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button7674.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button7674.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button7674.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button7674);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options7678 = (function sablono$core$select_options7678(coll){
var iter__4529__auto__ = (function sablono$core$select_options7678_$_iter__7679(s__7680){
return (new cljs.core.LazySeq(null,(function (){
var s__7680__$1 = s__7680;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7680__$1);
if(temp__5735__auto__){
var s__7680__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7680__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7680__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7682 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7681 = (0);
while(true){
if((i__7681 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__7681);
cljs.core.chunk_append.call(null,b__7682,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7683 = x;
var text = cljs.core.nth.call(null,vec__7683,(0),null);
var val = cljs.core.nth.call(null,vec__7683,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__7683,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options7678.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__7689 = (i__7681 + (1));
i__7681 = G__7689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7682),sablono$core$select_options7678_$_iter__7679.call(null,cljs.core.chunk_rest.call(null,s__7680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7682),null);
}
} else {
var x = cljs.core.first.call(null,s__7680__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7686 = x;
var text = cljs.core.nth.call(null,vec__7686,(0),null);
var val = cljs.core.nth.call(null,vec__7686,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__7686,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options7678.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options7678_$_iter__7679.call(null,cljs.core.rest.call(null,s__7680__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options7678);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down7690 = (function sablono$core$drop_down7690(var_args){
var G__7692 = arguments.length;
switch (G__7692) {
case 2:
return sablono.core.drop_down7690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down7690.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down7690.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down7690.call(null,name,options,null);
}));

(sablono.core.drop_down7690.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down7690.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down7690);
/**
 * Creates a text area element.
 */
sablono.core.text_area7694 = (function sablono$core$text_area7694(var_args){
var G__7696 = arguments.length;
switch (G__7696) {
case 1:
return sablono.core.text_area7694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area7694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area7694.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area7694.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area7694.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area7694);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label7698 = (function sablono$core$label7698(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label7698);
/**
 * Creates a submit button.
 */
sablono.core.submit_button7699 = (function sablono$core$submit_button7699(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button7699);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button7700 = (function sablono$core$reset_button7700(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button7700);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to7701 = (function sablono$core$form_to7701(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7708 = arguments.length;
var i__4737__auto___7709 = (0);
while(true){
if((i__4737__auto___7709 < len__4736__auto___7708)){
args__4742__auto__.push((arguments[i__4737__auto___7709]));

var G__7710 = (i__4737__auto___7709 + (1));
i__4737__auto___7709 = G__7710;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to7701.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to7701.cljs$core$IFn$_invoke$arity$variadic = (function (p__7704,body){
var vec__7705 = p__7704;
var method = cljs.core.nth.call(null,vec__7705,(0),null);
var action = cljs.core.nth.call(null,vec__7705,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to7701.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to7701.cljs$lang$applyTo = (function (seq7702){
var G__7703 = cljs.core.first.call(null,seq7702);
var seq7702__$1 = cljs.core.next.call(null,seq7702);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7703,seq7702__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to7701);

//# sourceMappingURL=core.js.map
