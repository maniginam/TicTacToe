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
var G__34576__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__34573 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__34574 = cljs.core.seq.call(null,vec__34573);
var first__34575 = cljs.core.first.call(null,seq__34574);
var seq__34574__$1 = cljs.core.next.call(null,seq__34574);
var tag = first__34575;
var body = seq__34574__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__34576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34577__i = 0, G__34577__a = new Array(arguments.length -  0);
while (G__34577__i < G__34577__a.length) {G__34577__a[G__34577__i] = arguments[G__34577__i + 0]; ++G__34577__i;}
  args = new cljs.core.IndexedSeq(G__34577__a,0,null);
} 
return G__34576__delegate.call(this,args);};
G__34576.cljs$lang$maxFixedArity = 0;
G__34576.cljs$lang$applyTo = (function (arglist__34578){
var args = cljs.core.seq(arglist__34578);
return G__34576__delegate(args);
});
G__34576.cljs$core$IFn$_invoke$arity$variadic = G__34576__delegate;
return G__34576;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__34579(s__34580){
return (new cljs.core.LazySeq(null,(function (){
var s__34580__$1 = s__34580;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34580__$1);
if(temp__5735__auto__){
var s__34580__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34580__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__34580__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__34582 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__34581 = (0);
while(true){
if((i__34581 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__34581);
cljs.core.chunk_append.call(null,b__34582,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__34583 = (i__34581 + (1));
i__34581 = G__34583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34582),sablono$core$update_arglists_$_iter__34579.call(null,cljs.core.chunk_rest.call(null,s__34580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34582),null);
}
} else {
var args = cljs.core.first.call(null,s__34580__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__34579.call(null,cljs.core.rest.call(null,s__34580__$2)));
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
var len__4736__auto___34589 = arguments.length;
var i__4737__auto___34590 = (0);
while(true){
if((i__4737__auto___34590 < len__4736__auto___34589)){
args__4742__auto__.push((arguments[i__4737__auto___34590]));

var G__34591 = (i__4737__auto___34590 + (1));
i__4737__auto___34590 = G__34591;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__34585(s__34586){
return (new cljs.core.LazySeq(null,(function (){
var s__34586__$1 = s__34586;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34586__$1);
if(temp__5735__auto__){
var s__34586__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34586__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__34586__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__34588 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__34587 = (0);
while(true){
if((i__34587 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__34587);
cljs.core.chunk_append.call(null,b__34588,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__34592 = (i__34587 + (1));
i__34587 = G__34592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34588),sablono$core$iter__34585.call(null,cljs.core.chunk_rest.call(null,s__34586__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34588),null);
}
} else {
var style = cljs.core.first.call(null,s__34586__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__34585.call(null,cljs.core.rest.call(null,s__34586__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq34584){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34584));
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
sablono.core.link_to34593 = (function sablono$core$link_to34593(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34596 = arguments.length;
var i__4737__auto___34597 = (0);
while(true){
if((i__4737__auto___34597 < len__4736__auto___34596)){
args__4742__auto__.push((arguments[i__4737__auto___34597]));

var G__34598 = (i__4737__auto___34597 + (1));
i__4737__auto___34597 = G__34598;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to34593.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to34593.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to34593.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to34593.cljs$lang$applyTo = (function (seq34594){
var G__34595 = cljs.core.first.call(null,seq34594);
var seq34594__$1 = cljs.core.next.call(null,seq34594);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34595,seq34594__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34593);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to34599 = (function sablono$core$mail_to34599(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34606 = arguments.length;
var i__4737__auto___34607 = (0);
while(true){
if((i__4737__auto___34607 < len__4736__auto___34606)){
args__4742__auto__.push((arguments[i__4737__auto___34607]));

var G__34608 = (i__4737__auto___34607 + (1));
i__4737__auto___34607 = G__34608;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to34599.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to34599.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__34602){
var vec__34603 = p__34602;
var content = cljs.core.nth.call(null,vec__34603,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to34599.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to34599.cljs$lang$applyTo = (function (seq34600){
var G__34601 = cljs.core.first.call(null,seq34600);
var seq34600__$1 = cljs.core.next.call(null,seq34600);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34601,seq34600__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34599);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list34609 = (function sablono$core$unordered_list34609(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list34609_$_iter__34610(s__34611){
return (new cljs.core.LazySeq(null,(function (){
var s__34611__$1 = s__34611;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34611__$1);
if(temp__5735__auto__){
var s__34611__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34611__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__34611__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__34613 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__34612 = (0);
while(true){
if((i__34612 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__34612);
cljs.core.chunk_append.call(null,b__34613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34614 = (i__34612 + (1));
i__34612 = G__34614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34613),sablono$core$unordered_list34609_$_iter__34610.call(null,cljs.core.chunk_rest.call(null,s__34611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34613),null);
}
} else {
var x = cljs.core.first.call(null,s__34611__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list34609_$_iter__34610.call(null,cljs.core.rest.call(null,s__34611__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34609);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list34615 = (function sablono$core$ordered_list34615(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list34615_$_iter__34616(s__34617){
return (new cljs.core.LazySeq(null,(function (){
var s__34617__$1 = s__34617;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34617__$1);
if(temp__5735__auto__){
var s__34617__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34617__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__34617__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__34619 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__34618 = (0);
while(true){
if((i__34618 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__34618);
cljs.core.chunk_append.call(null,b__34619,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34620 = (i__34618 + (1));
i__34618 = G__34620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34619),sablono$core$ordered_list34615_$_iter__34616.call(null,cljs.core.chunk_rest.call(null,s__34617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34619),null);
}
} else {
var x = cljs.core.first.call(null,s__34617__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list34615_$_iter__34616.call(null,cljs.core.rest.call(null,s__34617__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34615);
/**
 * Create an image element.
 */
sablono.core.image34621 = (function sablono$core$image34621(var_args){
var G__34623 = arguments.length;
switch (G__34623) {
case 1:
return sablono.core.image34621.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image34621.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image34621.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image34621.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image34621.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34621);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__34625_SHARP_,p2__34626_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34625_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34626_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__34627_SHARP_,p2__34628_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34627_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34628_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__34630 = arguments.length;
switch (G__34630) {
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
sablono.core.color_field34632 = (function sablono$core$color_field34632(var_args){
var G__34634 = arguments.length;
switch (G__34634) {
case 1:
return sablono.core.color_field34632.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field34632.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field34632.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3501__auto__);
}));

(sablono.core.color_field34632.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.color_field34632.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field34632);

/**
 * Creates a date input field.
 */
sablono.core.date_field34635 = (function sablono$core$date_field34635(var_args){
var G__34637 = arguments.length;
switch (G__34637) {
case 1:
return sablono.core.date_field34635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field34635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field34635.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3501__auto__);
}));

(sablono.core.date_field34635.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.date_field34635.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field34635);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field34638 = (function sablono$core$datetime_field34638(var_args){
var G__34640 = arguments.length;
switch (G__34640) {
case 1:
return sablono.core.datetime_field34638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field34638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field34638.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3501__auto__);
}));

(sablono.core.datetime_field34638.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.datetime_field34638.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field34638);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field34641 = (function sablono$core$datetime_local_field34641(var_args){
var G__34643 = arguments.length;
switch (G__34643) {
case 1:
return sablono.core.datetime_local_field34641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field34641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field34641.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3501__auto__);
}));

(sablono.core.datetime_local_field34641.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.datetime_local_field34641.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field34641);

/**
 * Creates a email input field.
 */
sablono.core.email_field34644 = (function sablono$core$email_field34644(var_args){
var G__34646 = arguments.length;
switch (G__34646) {
case 1:
return sablono.core.email_field34644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field34644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field34644.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3501__auto__);
}));

(sablono.core.email_field34644.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.email_field34644.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34644);

/**
 * Creates a file input field.
 */
sablono.core.file_field34647 = (function sablono$core$file_field34647(var_args){
var G__34649 = arguments.length;
switch (G__34649) {
case 1:
return sablono.core.file_field34647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field34647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field34647.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3501__auto__);
}));

(sablono.core.file_field34647.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.file_field34647.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field34647);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field34650 = (function sablono$core$hidden_field34650(var_args){
var G__34652 = arguments.length;
switch (G__34652) {
case 1:
return sablono.core.hidden_field34650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field34650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field34650.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3501__auto__);
}));

(sablono.core.hidden_field34650.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.hidden_field34650.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34650);

/**
 * Creates a month input field.
 */
sablono.core.month_field34653 = (function sablono$core$month_field34653(var_args){
var G__34655 = arguments.length;
switch (G__34655) {
case 1:
return sablono.core.month_field34653.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field34653.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field34653.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3501__auto__);
}));

(sablono.core.month_field34653.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.month_field34653.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field34653);

/**
 * Creates a number input field.
 */
sablono.core.number_field34656 = (function sablono$core$number_field34656(var_args){
var G__34658 = arguments.length;
switch (G__34658) {
case 1:
return sablono.core.number_field34656.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field34656.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field34656.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3501__auto__);
}));

(sablono.core.number_field34656.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.number_field34656.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field34656);

/**
 * Creates a password input field.
 */
sablono.core.password_field34659 = (function sablono$core$password_field34659(var_args){
var G__34661 = arguments.length;
switch (G__34661) {
case 1:
return sablono.core.password_field34659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field34659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field34659.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3501__auto__);
}));

(sablono.core.password_field34659.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.password_field34659.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34659);

/**
 * Creates a range input field.
 */
sablono.core.range_field34662 = (function sablono$core$range_field34662(var_args){
var G__34664 = arguments.length;
switch (G__34664) {
case 1:
return sablono.core.range_field34662.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field34662.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field34662.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3501__auto__);
}));

(sablono.core.range_field34662.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.range_field34662.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field34662);

/**
 * Creates a search input field.
 */
sablono.core.search_field34665 = (function sablono$core$search_field34665(var_args){
var G__34667 = arguments.length;
switch (G__34667) {
case 1:
return sablono.core.search_field34665.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field34665.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field34665.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3501__auto__);
}));

(sablono.core.search_field34665.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.search_field34665.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field34665);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field34668 = (function sablono$core$tel_field34668(var_args){
var G__34670 = arguments.length;
switch (G__34670) {
case 1:
return sablono.core.tel_field34668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field34668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field34668.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3501__auto__);
}));

(sablono.core.tel_field34668.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.tel_field34668.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field34668);

/**
 * Creates a text input field.
 */
sablono.core.text_field34671 = (function sablono$core$text_field34671(var_args){
var G__34673 = arguments.length;
switch (G__34673) {
case 1:
return sablono.core.text_field34671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field34671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field34671.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3501__auto__);
}));

(sablono.core.text_field34671.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.text_field34671.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34671);

/**
 * Creates a time input field.
 */
sablono.core.time_field34674 = (function sablono$core$time_field34674(var_args){
var G__34676 = arguments.length;
switch (G__34676) {
case 1:
return sablono.core.time_field34674.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field34674.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field34674.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3501__auto__);
}));

(sablono.core.time_field34674.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.time_field34674.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field34674);

/**
 * Creates a url input field.
 */
sablono.core.url_field34677 = (function sablono$core$url_field34677(var_args){
var G__34679 = arguments.length;
switch (G__34679) {
case 1:
return sablono.core.url_field34677.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field34677.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field34677.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3501__auto__);
}));

(sablono.core.url_field34677.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.url_field34677.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field34677);

/**
 * Creates a week input field.
 */
sablono.core.week_field34680 = (function sablono$core$week_field34680(var_args){
var G__34682 = arguments.length;
switch (G__34682) {
case 1:
return sablono.core.week_field34680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field34680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field34680.cljs$core$IFn$_invoke$arity$1 = (function (name__3501__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3501__auto__);
}));

(sablono.core.week_field34680.cljs$core$IFn$_invoke$arity$2 = (function (name__3501__auto__,value__3502__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3501__auto__,value__3502__auto__);
}));

(sablono.core.week_field34680.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field34680);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box34700 = (function sablono$core$check_box34700(var_args){
var G__34702 = arguments.length;
switch (G__34702) {
case 1:
return sablono.core.check_box34700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box34700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box34700.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box34700.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box34700.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box34700.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box34700.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34700);
/**
 * Creates a radio button.
 */
sablono.core.radio_button34704 = (function sablono$core$radio_button34704(var_args){
var G__34706 = arguments.length;
switch (G__34706) {
case 1:
return sablono.core.radio_button34704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button34704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button34704.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button34704.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button34704.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button34704.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button34704.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34704);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options34708 = (function sablono$core$select_options34708(coll){
var iter__4529__auto__ = (function sablono$core$select_options34708_$_iter__34709(s__34710){
return (new cljs.core.LazySeq(null,(function (){
var s__34710__$1 = s__34710;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34710__$1);
if(temp__5735__auto__){
var s__34710__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34710__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__34710__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__34712 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__34711 = (0);
while(true){
if((i__34711 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__34711);
cljs.core.chunk_append.call(null,b__34712,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34713 = x;
var text = cljs.core.nth.call(null,vec__34713,(0),null);
var val = cljs.core.nth.call(null,vec__34713,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34713,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34708.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__34719 = (i__34711 + (1));
i__34711 = G__34719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34712),sablono$core$select_options34708_$_iter__34709.call(null,cljs.core.chunk_rest.call(null,s__34710__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34712),null);
}
} else {
var x = cljs.core.first.call(null,s__34710__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34716 = x;
var text = cljs.core.nth.call(null,vec__34716,(0),null);
var val = cljs.core.nth.call(null,vec__34716,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34716,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34708.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options34708_$_iter__34709.call(null,cljs.core.rest.call(null,s__34710__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34708);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down34720 = (function sablono$core$drop_down34720(var_args){
var G__34722 = arguments.length;
switch (G__34722) {
case 2:
return sablono.core.drop_down34720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down34720.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down34720.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down34720.call(null,name,options,null);
}));

(sablono.core.drop_down34720.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down34720.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34720);
/**
 * Creates a text area element.
 */
sablono.core.text_area34724 = (function sablono$core$text_area34724(var_args){
var G__34726 = arguments.length;
switch (G__34726) {
case 1:
return sablono.core.text_area34724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area34724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area34724.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area34724.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area34724.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34724);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label34728 = (function sablono$core$label34728(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34728);
/**
 * Creates a submit button.
 */
sablono.core.submit_button34729 = (function sablono$core$submit_button34729(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34729);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button34730 = (function sablono$core$reset_button34730(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34730);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to34731 = (function sablono$core$form_to34731(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34738 = arguments.length;
var i__4737__auto___34739 = (0);
while(true){
if((i__4737__auto___34739 < len__4736__auto___34738)){
args__4742__auto__.push((arguments[i__4737__auto___34739]));

var G__34740 = (i__4737__auto___34739 + (1));
i__4737__auto___34739 = G__34740;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to34731.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to34731.cljs$core$IFn$_invoke$arity$variadic = (function (p__34734,body){
var vec__34735 = p__34734;
var method = cljs.core.nth.call(null,vec__34735,(0),null);
var action = cljs.core.nth.call(null,vec__34735,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to34731.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to34731.cljs$lang$applyTo = (function (seq34732){
var G__34733 = cljs.core.first.call(null,seq34732);
var seq34732__$1 = cljs.core.next.call(null,seq34732);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34733,seq34732__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34731);

//# sourceMappingURL=core.js.map
