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
var G__31156__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31153 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__31154 = cljs.core.seq.call(null,vec__31153);
var first__31155 = cljs.core.first.call(null,seq__31154);
var seq__31154__$1 = cljs.core.next.call(null,seq__31154);
var tag = first__31155;
var body = seq__31154__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31157__i = 0, G__31157__a = new Array(arguments.length -  0);
while (G__31157__i < G__31157__a.length) {G__31157__a[G__31157__i] = arguments[G__31157__i + 0]; ++G__31157__i;}
  args = new cljs.core.IndexedSeq(G__31157__a,0,null);
} 
return G__31156__delegate.call(this,args);};
G__31156.cljs$lang$maxFixedArity = 0;
G__31156.cljs$lang$applyTo = (function (arglist__31158){
var args = cljs.core.seq(arglist__31158);
return G__31156__delegate(args);
});
G__31156.cljs$core$IFn$_invoke$arity$variadic = G__31156__delegate;
return G__31156;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__31159(s__31160){
return (new cljs.core.LazySeq(null,(function (){
var s__31160__$1 = s__31160;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31160__$1);
if(temp__5735__auto__){
var s__31160__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31160__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31160__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31162 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31161 = (0);
while(true){
if((i__31161 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__31161);
cljs.core.chunk_append.call(null,b__31162,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31163 = (i__31161 + (1));
i__31161 = G__31163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31162),sablono$core$update_arglists_$_iter__31159.call(null,cljs.core.chunk_rest.call(null,s__31160__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31162),null);
}
} else {
var args = cljs.core.first.call(null,s__31160__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31159.call(null,cljs.core.rest.call(null,s__31160__$2)));
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
var len__4736__auto___31169 = arguments.length;
var i__4737__auto___31170 = (0);
while(true){
if((i__4737__auto___31170 < len__4736__auto___31169)){
args__4742__auto__.push((arguments[i__4737__auto___31170]));

var G__31171 = (i__4737__auto___31170 + (1));
i__4737__auto___31170 = G__31171;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__31165(s__31166){
return (new cljs.core.LazySeq(null,(function (){
var s__31166__$1 = s__31166;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31166__$1);
if(temp__5735__auto__){
var s__31166__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31166__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31166__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31168 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31167 = (0);
while(true){
if((i__31167 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__31167);
cljs.core.chunk_append.call(null,b__31168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__31172 = (i__31167 + (1));
i__31167 = G__31172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31168),sablono$core$iter__31165.call(null,cljs.core.chunk_rest.call(null,s__31166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31168),null);
}
} else {
var style = cljs.core.first.call(null,s__31166__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31165.call(null,cljs.core.rest.call(null,s__31166__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq31164){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31164));
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
sablono.core.link_to31173 = (function sablono$core$link_to31173(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31176 = arguments.length;
var i__4737__auto___31177 = (0);
while(true){
if((i__4737__auto___31177 < len__4736__auto___31176)){
args__4742__auto__.push((arguments[i__4737__auto___31177]));

var G__31178 = (i__4737__auto___31177 + (1));
i__4737__auto___31177 = G__31178;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to31173.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to31173.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to31173.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to31173.cljs$lang$applyTo = (function (seq31174){
var G__31175 = cljs.core.first.call(null,seq31174);
var seq31174__$1 = cljs.core.next.call(null,seq31174);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31175,seq31174__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31173);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to31179 = (function sablono$core$mail_to31179(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31186 = arguments.length;
var i__4737__auto___31187 = (0);
while(true){
if((i__4737__auto___31187 < len__4736__auto___31186)){
args__4742__auto__.push((arguments[i__4737__auto___31187]));

var G__31188 = (i__4737__auto___31187 + (1));
i__4737__auto___31187 = G__31188;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to31179.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to31179.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__31182){
var vec__31183 = p__31182;
var content = cljs.core.nth.call(null,vec__31183,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to31179.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to31179.cljs$lang$applyTo = (function (seq31180){
var G__31181 = cljs.core.first.call(null,seq31180);
var seq31180__$1 = cljs.core.next.call(null,seq31180);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31181,seq31180__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31179);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list31189 = (function sablono$core$unordered_list31189(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list31189_$_iter__31190(s__31191){
return (new cljs.core.LazySeq(null,(function (){
var s__31191__$1 = s__31191;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31191__$1);
if(temp__5735__auto__){
var s__31191__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31191__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31191__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31193 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31192 = (0);
while(true){
if((i__31192 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__31192);
cljs.core.chunk_append.call(null,b__31193,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31194 = (i__31192 + (1));
i__31192 = G__31194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31193),sablono$core$unordered_list31189_$_iter__31190.call(null,cljs.core.chunk_rest.call(null,s__31191__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31193),null);
}
} else {
var x = cljs.core.first.call(null,s__31191__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list31189_$_iter__31190.call(null,cljs.core.rest.call(null,s__31191__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31189);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list31195 = (function sablono$core$ordered_list31195(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list31195_$_iter__31196(s__31197){
return (new cljs.core.LazySeq(null,(function (){
var s__31197__$1 = s__31197;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31197__$1);
if(temp__5735__auto__){
var s__31197__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31197__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31197__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31199 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31198 = (0);
while(true){
if((i__31198 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__31198);
cljs.core.chunk_append.call(null,b__31199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31200 = (i__31198 + (1));
i__31198 = G__31200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31199),sablono$core$ordered_list31195_$_iter__31196.call(null,cljs.core.chunk_rest.call(null,s__31197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31199),null);
}
} else {
var x = cljs.core.first.call(null,s__31197__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list31195_$_iter__31196.call(null,cljs.core.rest.call(null,s__31197__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31195);
/**
 * Create an image element.
 */
sablono.core.image31201 = (function sablono$core$image31201(var_args){
var G__31203 = arguments.length;
switch (G__31203) {
case 1:
return sablono.core.image31201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image31201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image31201.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image31201.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image31201.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31201);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__31205_SHARP_,p2__31206_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31205_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31206_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__31207_SHARP_,p2__31208_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31207_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31208_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__31210 = arguments.length;
switch (G__31210) {
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
sablono.core.color_field31212 = (function sablono$core$color_field31212(var_args){
var G__31214 = arguments.length;
switch (G__31214) {
case 1:
return sablono.core.color_field31212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field31212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field31212.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23176__auto__);
}));

(sablono.core.color_field31212.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.color_field31212.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31212);

/**
 * Creates a date input field.
 */
sablono.core.date_field31215 = (function sablono$core$date_field31215(var_args){
var G__31217 = arguments.length;
switch (G__31217) {
case 1:
return sablono.core.date_field31215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field31215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field31215.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23176__auto__);
}));

(sablono.core.date_field31215.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.date_field31215.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31215);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field31218 = (function sablono$core$datetime_field31218(var_args){
var G__31220 = arguments.length;
switch (G__31220) {
case 1:
return sablono.core.datetime_field31218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field31218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field31218.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23176__auto__);
}));

(sablono.core.datetime_field31218.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.datetime_field31218.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31218);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field31221 = (function sablono$core$datetime_local_field31221(var_args){
var G__31223 = arguments.length;
switch (G__31223) {
case 1:
return sablono.core.datetime_local_field31221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field31221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field31221.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23176__auto__);
}));

(sablono.core.datetime_local_field31221.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.datetime_local_field31221.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31221);

/**
 * Creates a email input field.
 */
sablono.core.email_field31224 = (function sablono$core$email_field31224(var_args){
var G__31226 = arguments.length;
switch (G__31226) {
case 1:
return sablono.core.email_field31224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field31224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field31224.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23176__auto__);
}));

(sablono.core.email_field31224.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.email_field31224.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31224);

/**
 * Creates a file input field.
 */
sablono.core.file_field31227 = (function sablono$core$file_field31227(var_args){
var G__31229 = arguments.length;
switch (G__31229) {
case 1:
return sablono.core.file_field31227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field31227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field31227.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23176__auto__);
}));

(sablono.core.file_field31227.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.file_field31227.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31227);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field31230 = (function sablono$core$hidden_field31230(var_args){
var G__31232 = arguments.length;
switch (G__31232) {
case 1:
return sablono.core.hidden_field31230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field31230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field31230.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23176__auto__);
}));

(sablono.core.hidden_field31230.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.hidden_field31230.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31230);

/**
 * Creates a month input field.
 */
sablono.core.month_field31233 = (function sablono$core$month_field31233(var_args){
var G__31235 = arguments.length;
switch (G__31235) {
case 1:
return sablono.core.month_field31233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field31233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field31233.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23176__auto__);
}));

(sablono.core.month_field31233.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.month_field31233.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31233);

/**
 * Creates a number input field.
 */
sablono.core.number_field31236 = (function sablono$core$number_field31236(var_args){
var G__31238 = arguments.length;
switch (G__31238) {
case 1:
return sablono.core.number_field31236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field31236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field31236.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23176__auto__);
}));

(sablono.core.number_field31236.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.number_field31236.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31236);

/**
 * Creates a password input field.
 */
sablono.core.password_field31239 = (function sablono$core$password_field31239(var_args){
var G__31241 = arguments.length;
switch (G__31241) {
case 1:
return sablono.core.password_field31239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field31239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field31239.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23176__auto__);
}));

(sablono.core.password_field31239.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.password_field31239.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31239);

/**
 * Creates a range input field.
 */
sablono.core.range_field31242 = (function sablono$core$range_field31242(var_args){
var G__31244 = arguments.length;
switch (G__31244) {
case 1:
return sablono.core.range_field31242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field31242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field31242.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23176__auto__);
}));

(sablono.core.range_field31242.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.range_field31242.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31242);

/**
 * Creates a search input field.
 */
sablono.core.search_field31245 = (function sablono$core$search_field31245(var_args){
var G__31247 = arguments.length;
switch (G__31247) {
case 1:
return sablono.core.search_field31245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field31245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field31245.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23176__auto__);
}));

(sablono.core.search_field31245.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.search_field31245.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31245);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field31248 = (function sablono$core$tel_field31248(var_args){
var G__31250 = arguments.length;
switch (G__31250) {
case 1:
return sablono.core.tel_field31248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field31248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field31248.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23176__auto__);
}));

(sablono.core.tel_field31248.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.tel_field31248.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31248);

/**
 * Creates a text input field.
 */
sablono.core.text_field31251 = (function sablono$core$text_field31251(var_args){
var G__31253 = arguments.length;
switch (G__31253) {
case 1:
return sablono.core.text_field31251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field31251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field31251.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23176__auto__);
}));

(sablono.core.text_field31251.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.text_field31251.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31251);

/**
 * Creates a time input field.
 */
sablono.core.time_field31254 = (function sablono$core$time_field31254(var_args){
var G__31256 = arguments.length;
switch (G__31256) {
case 1:
return sablono.core.time_field31254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field31254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field31254.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23176__auto__);
}));

(sablono.core.time_field31254.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.time_field31254.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31254);

/**
 * Creates a url input field.
 */
sablono.core.url_field31257 = (function sablono$core$url_field31257(var_args){
var G__31259 = arguments.length;
switch (G__31259) {
case 1:
return sablono.core.url_field31257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field31257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field31257.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23176__auto__);
}));

(sablono.core.url_field31257.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.url_field31257.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31257);

/**
 * Creates a week input field.
 */
sablono.core.week_field31260 = (function sablono$core$week_field31260(var_args){
var G__31262 = arguments.length;
switch (G__31262) {
case 1:
return sablono.core.week_field31260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field31260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field31260.cljs$core$IFn$_invoke$arity$1 = (function (name__23176__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23176__auto__);
}));

(sablono.core.week_field31260.cljs$core$IFn$_invoke$arity$2 = (function (name__23176__auto__,value__23177__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23176__auto__,value__23177__auto__);
}));

(sablono.core.week_field31260.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31260);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box31280 = (function sablono$core$check_box31280(var_args){
var G__31282 = arguments.length;
switch (G__31282) {
case 1:
return sablono.core.check_box31280.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box31280.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box31280.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box31280.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box31280.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box31280.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box31280.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31280);
/**
 * Creates a radio button.
 */
sablono.core.radio_button31284 = (function sablono$core$radio_button31284(var_args){
var G__31286 = arguments.length;
switch (G__31286) {
case 1:
return sablono.core.radio_button31284.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button31284.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button31284.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button31284.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button31284.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button31284.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button31284.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31284);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options31288 = (function sablono$core$select_options31288(coll){
var iter__4529__auto__ = (function sablono$core$select_options31288_$_iter__31289(s__31290){
return (new cljs.core.LazySeq(null,(function (){
var s__31290__$1 = s__31290;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31290__$1);
if(temp__5735__auto__){
var s__31290__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31290__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31290__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31292 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31291 = (0);
while(true){
if((i__31291 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__31291);
cljs.core.chunk_append.call(null,b__31292,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31293 = x;
var text = cljs.core.nth.call(null,vec__31293,(0),null);
var val = cljs.core.nth.call(null,vec__31293,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31293,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options31288.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__31299 = (i__31291 + (1));
i__31291 = G__31299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31292),sablono$core$select_options31288_$_iter__31289.call(null,cljs.core.chunk_rest.call(null,s__31290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31292),null);
}
} else {
var x = cljs.core.first.call(null,s__31290__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31296 = x;
var text = cljs.core.nth.call(null,vec__31296,(0),null);
var val = cljs.core.nth.call(null,vec__31296,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31296,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options31288.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options31288_$_iter__31289.call(null,cljs.core.rest.call(null,s__31290__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31288);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down31300 = (function sablono$core$drop_down31300(var_args){
var G__31302 = arguments.length;
switch (G__31302) {
case 2:
return sablono.core.drop_down31300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down31300.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down31300.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down31300.call(null,name,options,null);
}));

(sablono.core.drop_down31300.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down31300.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31300);
/**
 * Creates a text area element.
 */
sablono.core.text_area31304 = (function sablono$core$text_area31304(var_args){
var G__31306 = arguments.length;
switch (G__31306) {
case 1:
return sablono.core.text_area31304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area31304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area31304.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area31304.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area31304.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31304);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label31308 = (function sablono$core$label31308(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31308);
/**
 * Creates a submit button.
 */
sablono.core.submit_button31309 = (function sablono$core$submit_button31309(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31309);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button31310 = (function sablono$core$reset_button31310(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31310);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to31311 = (function sablono$core$form_to31311(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31318 = arguments.length;
var i__4737__auto___31319 = (0);
while(true){
if((i__4737__auto___31319 < len__4736__auto___31318)){
args__4742__auto__.push((arguments[i__4737__auto___31319]));

var G__31320 = (i__4737__auto___31319 + (1));
i__4737__auto___31319 = G__31320;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to31311.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to31311.cljs$core$IFn$_invoke$arity$variadic = (function (p__31314,body){
var vec__31315 = p__31314;
var method = cljs.core.nth.call(null,vec__31315,(0),null);
var action = cljs.core.nth.call(null,vec__31315,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to31311.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to31311.cljs$lang$applyTo = (function (seq31312){
var G__31313 = cljs.core.first.call(null,seq31312);
var seq31312__$1 = cljs.core.next.call(null,seq31312);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31313,seq31312__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31311);

//# sourceMappingURL=core.js.map
