// Compiled by ClojureScript 1.10.773 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__6293_SHARP_){
return p1__6293_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6294 = (function (reporter,message){
var x__4428__auto__ = (((reporter == null))?null:reporter);
var m__4429__auto__ = (speclj.reporting.report_message[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,reporter,message);
} else {
var m__4426__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_6294.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6295 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_6295.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6296 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_6296.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6297 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_6297.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6298 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_6298.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6299 = (function (this$,results){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,results);
} else {
var m__4426__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_6299.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6300 = (function (this$,exception){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,exception);
} else {
var m__4426__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_6300.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__6301 = cljs.core.seq.call(null,reporters);
var chunk__6302 = null;
var count__6303 = (0);
var i__6304 = (0);
while(true){
if((i__6304 < count__6303)){
var reporter = cljs.core._nth.call(null,chunk__6302,i__6304);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6305 = seq__6301;
var G__6306 = chunk__6302;
var G__6307 = count__6303;
var G__6308 = (i__6304 + (1));
seq__6301 = G__6305;
chunk__6302 = G__6306;
count__6303 = G__6307;
i__6304 = G__6308;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6301);
if(temp__5735__auto__){
var seq__6301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6301__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6301__$1);
var G__6309 = cljs.core.chunk_rest.call(null,seq__6301__$1);
var G__6310 = c__4556__auto__;
var G__6311 = cljs.core.count.call(null,c__4556__auto__);
var G__6312 = (0);
seq__6301 = G__6309;
chunk__6302 = G__6310;
count__6303 = G__6311;
i__6304 = G__6312;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6301__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6313 = cljs.core.next.call(null,seq__6301__$1);
var G__6314 = null;
var G__6315 = (0);
var G__6316 = (0);
seq__6301 = G__6313;
chunk__6302 = G__6314;
count__6303 = G__6315;
i__6304 = G__6316;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__6317 = cljs.core.seq.call(null,reporters);
var chunk__6318 = null;
var count__6319 = (0);
var i__6320 = (0);
while(true){
if((i__6320 < count__6319)){
var reporter = cljs.core._nth.call(null,chunk__6318,i__6320);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6321 = seq__6317;
var G__6322 = chunk__6318;
var G__6323 = count__6319;
var G__6324 = (i__6320 + (1));
seq__6317 = G__6321;
chunk__6318 = G__6322;
count__6319 = G__6323;
i__6320 = G__6324;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6317);
if(temp__5735__auto__){
var seq__6317__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6317__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6317__$1);
var G__6325 = cljs.core.chunk_rest.call(null,seq__6317__$1);
var G__6326 = c__4556__auto__;
var G__6327 = cljs.core.count.call(null,c__4556__auto__);
var G__6328 = (0);
seq__6317 = G__6325;
chunk__6318 = G__6326;
count__6319 = G__6327;
i__6320 = G__6328;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6317__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6329 = cljs.core.next.call(null,seq__6317__$1);
var G__6330 = null;
var G__6331 = (0);
var G__6332 = (0);
seq__6317 = G__6329;
chunk__6318 = G__6330;
count__6319 = G__6331;
i__6320 = G__6332;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__6333 = cljs.core.seq.call(null,reporters);
var chunk__6334 = null;
var count__6335 = (0);
var i__6336 = (0);
while(true){
if((i__6336 < count__6335)){
var reporter = cljs.core._nth.call(null,chunk__6334,i__6336);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6337 = seq__6333;
var G__6338 = chunk__6334;
var G__6339 = count__6335;
var G__6340 = (i__6336 + (1));
seq__6333 = G__6337;
chunk__6334 = G__6338;
count__6335 = G__6339;
i__6336 = G__6340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6333);
if(temp__5735__auto__){
var seq__6333__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6333__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6333__$1);
var G__6341 = cljs.core.chunk_rest.call(null,seq__6333__$1);
var G__6342 = c__4556__auto__;
var G__6343 = cljs.core.count.call(null,c__4556__auto__);
var G__6344 = (0);
seq__6333 = G__6341;
chunk__6334 = G__6342;
count__6335 = G__6343;
i__6336 = G__6344;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6333__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6345 = cljs.core.next.call(null,seq__6333__$1);
var G__6346 = null;
var G__6347 = (0);
var G__6348 = (0);
seq__6333 = G__6345;
chunk__6334 = G__6346;
count__6335 = G__6347;
i__6336 = G__6348;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__6349 = cljs.core.seq.call(null,reporters);
var chunk__6350 = null;
var count__6351 = (0);
var i__6352 = (0);
while(true){
if((i__6352 < count__6351)){
var reporter = cljs.core._nth.call(null,chunk__6350,i__6352);
speclj.reporting.report_error.call(null,reporter,result);


var G__6353 = seq__6349;
var G__6354 = chunk__6350;
var G__6355 = count__6351;
var G__6356 = (i__6352 + (1));
seq__6349 = G__6353;
chunk__6350 = G__6354;
count__6351 = G__6355;
i__6352 = G__6356;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6349);
if(temp__5735__auto__){
var seq__6349__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6349__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6349__$1);
var G__6357 = cljs.core.chunk_rest.call(null,seq__6349__$1);
var G__6358 = c__4556__auto__;
var G__6359 = cljs.core.count.call(null,c__4556__auto__);
var G__6360 = (0);
seq__6349 = G__6357;
chunk__6350 = G__6358;
count__6351 = G__6359;
i__6352 = G__6360;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6349__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6361 = cljs.core.next.call(null,seq__6349__$1);
var G__6362 = null;
var G__6363 = (0);
var G__6364 = (0);
seq__6349 = G__6361;
chunk__6350 = G__6362;
count__6351 = G__6363;
i__6352 = G__6364;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_6365 = speclj.platform.stack_trace.call(null,exception);
var elides_6366 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6365)){
var level_6367 = cljs.core.first.call(null,levels_6365);
if(speclj.platform.elide_level_QMARK_.call(null,level_6367)){
var G__6368 = cljs.core.rest.call(null,levels_6365);
var G__6369 = (elides_6366 + (1));
levels_6365 = G__6368;
elides_6366 = G__6369;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6366);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6367));

var G__6370 = cljs.core.rest.call(null,levels_6365);
var G__6371 = (0);
levels_6365 = G__6370;
elides_6366 = G__6371;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6366);
}
break;
}

var temp__5733__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5733__auto__)){
var cause = temp__5733__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6372_6376 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6373_6377 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6374_6378 = true;
var _STAR_print_fn_STAR__temp_val__6375_6379 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6374_6378);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6375_6379);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6373_6377);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6372_6376);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6383 = arguments.length;
var i__4737__auto___6384 = (0);
while(true){
if((i__4737__auto___6384 < len__4736__auto___6383)){
args__4742__auto__.push((arguments[i__4737__auto___6384]));

var G__6385 = (i__4737__auto___6384 + (1));
i__4737__auto___6384 = G__6385;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__6380_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6380_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6381){
var G__6382 = cljs.core.first.call(null,seq6381);
var seq6381__$1 = cljs.core.next.call(null,seq6381);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6382,seq6381__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6388 = arguments.length;
var i__4737__auto___6389 = (0);
while(true){
if((i__4737__auto___6389 < len__4736__auto___6388)){
args__4742__auto__.push((arguments[i__4737__auto___6389]));

var G__6390 = (i__4737__auto___6389 + (1));
i__4737__auto___6389 = G__6390;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq6386){
var G__6387 = cljs.core.first.call(null,seq6386);
var seq6386__$1 = cljs.core.next.call(null,seq6386);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6387,seq6386__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__6391 = cljs.core.seq.call(null,reporters);
var chunk__6392 = null;
var count__6393 = (0);
var i__6394 = (0);
while(true){
if((i__6394 < count__6393)){
var reporter = cljs.core._nth.call(null,chunk__6392,i__6394);
speclj.reporting.report_description.call(null,reporter,description);


var G__6395 = seq__6391;
var G__6396 = chunk__6392;
var G__6397 = count__6393;
var G__6398 = (i__6394 + (1));
seq__6391 = G__6395;
chunk__6392 = G__6396;
count__6393 = G__6397;
i__6394 = G__6398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6391);
if(temp__5735__auto__){
var seq__6391__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6391__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6391__$1);
var G__6399 = cljs.core.chunk_rest.call(null,seq__6391__$1);
var G__6400 = c__4556__auto__;
var G__6401 = cljs.core.count.call(null,c__4556__auto__);
var G__6402 = (0);
seq__6391 = G__6399;
chunk__6392 = G__6400;
count__6393 = G__6401;
i__6394 = G__6402;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6391__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__6403 = cljs.core.next.call(null,seq__6391__$1);
var G__6404 = null;
var G__6405 = (0);
var G__6406 = (0);
seq__6391 = G__6403;
chunk__6392 = G__6404;
count__6393 = G__6405;
i__6394 = G__6406;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__6407 = cljs.core.seq.call(null,reporters);
var chunk__6408 = null;
var count__6409 = (0);
var i__6410 = (0);
while(true){
if((i__6410 < count__6409)){
var reporter = cljs.core._nth.call(null,chunk__6408,i__6410);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6411 = seq__6407;
var G__6412 = chunk__6408;
var G__6413 = count__6409;
var G__6414 = (i__6410 + (1));
seq__6407 = G__6411;
chunk__6408 = G__6412;
count__6409 = G__6413;
i__6410 = G__6414;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6407);
if(temp__5735__auto__){
var seq__6407__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6407__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6407__$1);
var G__6415 = cljs.core.chunk_rest.call(null,seq__6407__$1);
var G__6416 = c__4556__auto__;
var G__6417 = cljs.core.count.call(null,c__4556__auto__);
var G__6418 = (0);
seq__6407 = G__6415;
chunk__6408 = G__6416;
count__6409 = G__6417;
i__6410 = G__6418;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6407__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6419 = cljs.core.next.call(null,seq__6407__$1);
var G__6420 = null;
var G__6421 = (0);
var G__6422 = (0);
seq__6407 = G__6419;
chunk__6408 = G__6420;
count__6409 = G__6421;
i__6410 = G__6422;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__6423 = cljs.core.seq.call(null,reporters);
var chunk__6424 = null;
var count__6425 = (0);
var i__6426 = (0);
while(true){
if((i__6426 < count__6425)){
var reporter = cljs.core._nth.call(null,chunk__6424,i__6426);
speclj.reporting.report_message.call(null,reporter,message);


var G__6427 = seq__6423;
var G__6428 = chunk__6424;
var G__6429 = count__6425;
var G__6430 = (i__6426 + (1));
seq__6423 = G__6427;
chunk__6424 = G__6428;
count__6425 = G__6429;
i__6426 = G__6430;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6423);
if(temp__5735__auto__){
var seq__6423__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6423__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6423__$1);
var G__6431 = cljs.core.chunk_rest.call(null,seq__6423__$1);
var G__6432 = c__4556__auto__;
var G__6433 = cljs.core.count.call(null,c__4556__auto__);
var G__6434 = (0);
seq__6423 = G__6431;
chunk__6424 = G__6432;
count__6425 = G__6433;
i__6426 = G__6434;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6423__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6435 = cljs.core.next.call(null,seq__6423__$1);
var G__6436 = null;
var G__6437 = (0);
var G__6438 = (0);
seq__6423 = G__6435;
chunk__6424 = G__6436;
count__6425 = G__6437;
i__6426 = G__6438;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__6439 = cljs.core.seq.call(null,reporters);
var chunk__6440 = null;
var count__6441 = (0);
var i__6442 = (0);
while(true){
if((i__6442 < count__6441)){
var reporter = cljs.core._nth.call(null,chunk__6440,i__6442);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6443 = seq__6439;
var G__6444 = chunk__6440;
var G__6445 = count__6441;
var G__6446 = (i__6442 + (1));
seq__6439 = G__6443;
chunk__6440 = G__6444;
count__6441 = G__6445;
i__6442 = G__6446;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6439);
if(temp__5735__auto__){
var seq__6439__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6439__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6439__$1);
var G__6447 = cljs.core.chunk_rest.call(null,seq__6439__$1);
var G__6448 = c__4556__auto__;
var G__6449 = cljs.core.count.call(null,c__4556__auto__);
var G__6450 = (0);
seq__6439 = G__6447;
chunk__6440 = G__6448;
count__6441 = G__6449;
i__6442 = G__6450;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6439__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6451 = cljs.core.next.call(null,seq__6439__$1);
var G__6452 = null;
var G__6453 = (0);
var G__6454 = (0);
seq__6439 = G__6451;
chunk__6440 = G__6452;
count__6441 = G__6453;
i__6442 = G__6454;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
