// Compiled by ClojureScript 1.10.773 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__33288_SHARP_){
return p1__33288_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_33289 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_33289.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_33290 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_33290.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_33291 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_33291.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_33292 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_33292.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_33293 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_33293.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_33294 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_33294.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_33295 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_33295.call(null,this$,exception);
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
var seq__33296 = cljs.core.seq.call(null,reporters);
var chunk__33297 = null;
var count__33298 = (0);
var i__33299 = (0);
while(true){
if((i__33299 < count__33298)){
var reporter = cljs.core._nth.call(null,chunk__33297,i__33299);
speclj.reporting.report_pass.call(null,reporter,result);


var G__33300 = seq__33296;
var G__33301 = chunk__33297;
var G__33302 = count__33298;
var G__33303 = (i__33299 + (1));
seq__33296 = G__33300;
chunk__33297 = G__33301;
count__33298 = G__33302;
i__33299 = G__33303;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33296);
if(temp__5735__auto__){
var seq__33296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33296__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33296__$1);
var G__33304 = cljs.core.chunk_rest.call(null,seq__33296__$1);
var G__33305 = c__4556__auto__;
var G__33306 = cljs.core.count.call(null,c__4556__auto__);
var G__33307 = (0);
seq__33296 = G__33304;
chunk__33297 = G__33305;
count__33298 = G__33306;
i__33299 = G__33307;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__33296__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__33308 = cljs.core.next.call(null,seq__33296__$1);
var G__33309 = null;
var G__33310 = (0);
var G__33311 = (0);
seq__33296 = G__33308;
chunk__33297 = G__33309;
count__33298 = G__33310;
i__33299 = G__33311;
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
var seq__33312 = cljs.core.seq.call(null,reporters);
var chunk__33313 = null;
var count__33314 = (0);
var i__33315 = (0);
while(true){
if((i__33315 < count__33314)){
var reporter = cljs.core._nth.call(null,chunk__33313,i__33315);
speclj.reporting.report_fail.call(null,reporter,result);


var G__33316 = seq__33312;
var G__33317 = chunk__33313;
var G__33318 = count__33314;
var G__33319 = (i__33315 + (1));
seq__33312 = G__33316;
chunk__33313 = G__33317;
count__33314 = G__33318;
i__33315 = G__33319;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33312);
if(temp__5735__auto__){
var seq__33312__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33312__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33312__$1);
var G__33320 = cljs.core.chunk_rest.call(null,seq__33312__$1);
var G__33321 = c__4556__auto__;
var G__33322 = cljs.core.count.call(null,c__4556__auto__);
var G__33323 = (0);
seq__33312 = G__33320;
chunk__33313 = G__33321;
count__33314 = G__33322;
i__33315 = G__33323;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__33312__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__33324 = cljs.core.next.call(null,seq__33312__$1);
var G__33325 = null;
var G__33326 = (0);
var G__33327 = (0);
seq__33312 = G__33324;
chunk__33313 = G__33325;
count__33314 = G__33326;
i__33315 = G__33327;
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
var seq__33328 = cljs.core.seq.call(null,reporters);
var chunk__33329 = null;
var count__33330 = (0);
var i__33331 = (0);
while(true){
if((i__33331 < count__33330)){
var reporter = cljs.core._nth.call(null,chunk__33329,i__33331);
speclj.reporting.report_pending.call(null,reporter,result);


var G__33332 = seq__33328;
var G__33333 = chunk__33329;
var G__33334 = count__33330;
var G__33335 = (i__33331 + (1));
seq__33328 = G__33332;
chunk__33329 = G__33333;
count__33330 = G__33334;
i__33331 = G__33335;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33328);
if(temp__5735__auto__){
var seq__33328__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33328__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33328__$1);
var G__33336 = cljs.core.chunk_rest.call(null,seq__33328__$1);
var G__33337 = c__4556__auto__;
var G__33338 = cljs.core.count.call(null,c__4556__auto__);
var G__33339 = (0);
seq__33328 = G__33336;
chunk__33329 = G__33337;
count__33330 = G__33338;
i__33331 = G__33339;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__33328__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__33340 = cljs.core.next.call(null,seq__33328__$1);
var G__33341 = null;
var G__33342 = (0);
var G__33343 = (0);
seq__33328 = G__33340;
chunk__33329 = G__33341;
count__33330 = G__33342;
i__33331 = G__33343;
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
var seq__33344 = cljs.core.seq.call(null,reporters);
var chunk__33345 = null;
var count__33346 = (0);
var i__33347 = (0);
while(true){
if((i__33347 < count__33346)){
var reporter = cljs.core._nth.call(null,chunk__33345,i__33347);
speclj.reporting.report_error.call(null,reporter,result);


var G__33348 = seq__33344;
var G__33349 = chunk__33345;
var G__33350 = count__33346;
var G__33351 = (i__33347 + (1));
seq__33344 = G__33348;
chunk__33345 = G__33349;
count__33346 = G__33350;
i__33347 = G__33351;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33344);
if(temp__5735__auto__){
var seq__33344__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33344__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33344__$1);
var G__33352 = cljs.core.chunk_rest.call(null,seq__33344__$1);
var G__33353 = c__4556__auto__;
var G__33354 = cljs.core.count.call(null,c__4556__auto__);
var G__33355 = (0);
seq__33344 = G__33352;
chunk__33345 = G__33353;
count__33346 = G__33354;
i__33347 = G__33355;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__33344__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__33356 = cljs.core.next.call(null,seq__33344__$1);
var G__33357 = null;
var G__33358 = (0);
var G__33359 = (0);
seq__33344 = G__33356;
chunk__33345 = G__33357;
count__33346 = G__33358;
i__33347 = G__33359;
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
var levels_33360 = speclj.platform.stack_trace.call(null,exception);
var elides_33361 = (0);
while(true){
if(cljs.core.seq.call(null,levels_33360)){
var level_33362 = cljs.core.first.call(null,levels_33360);
if(speclj.platform.elide_level_QMARK_.call(null,level_33362)){
var G__33363 = cljs.core.rest.call(null,levels_33360);
var G__33364 = (elides_33361 + (1));
levels_33360 = G__33363;
elides_33361 = G__33364;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_33361);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_33362));

var G__33365 = cljs.core.rest.call(null,levels_33360);
var G__33366 = (0);
levels_33360 = G__33365;
elides_33361 = G__33366;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_33361);
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
var _STAR_print_newline_STAR__orig_val__33367_33371 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33368_33372 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33369_33373 = true;
var _STAR_print_fn_STAR__temp_val__33370_33374 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33369_33373);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33370_33374);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33368_33372);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33367_33371);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33378 = arguments.length;
var i__4737__auto___33379 = (0);
while(true){
if((i__4737__auto___33379 < len__4736__auto___33378)){
args__4742__auto__.push((arguments[i__4737__auto___33379]));

var G__33380 = (i__4737__auto___33379 + (1));
i__4737__auto___33379 = G__33380;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__33375_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33375_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq33376){
var G__33377 = cljs.core.first.call(null,seq33376);
var seq33376__$1 = cljs.core.next.call(null,seq33376);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33377,seq33376__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33383 = arguments.length;
var i__4737__auto___33384 = (0);
while(true){
if((i__4737__auto___33384 < len__4736__auto___33383)){
args__4742__auto__.push((arguments[i__4737__auto___33384]));

var G__33385 = (i__4737__auto___33384 + (1));
i__4737__auto___33384 = G__33385;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq33381){
var G__33382 = cljs.core.first.call(null,seq33381);
var seq33381__$1 = cljs.core.next.call(null,seq33381);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33382,seq33381__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__33386 = cljs.core.seq.call(null,reporters);
var chunk__33387 = null;
var count__33388 = (0);
var i__33389 = (0);
while(true){
if((i__33389 < count__33388)){
var reporter = cljs.core._nth.call(null,chunk__33387,i__33389);
speclj.reporting.report_description.call(null,reporter,description);


var G__33390 = seq__33386;
var G__33391 = chunk__33387;
var G__33392 = count__33388;
var G__33393 = (i__33389 + (1));
seq__33386 = G__33390;
chunk__33387 = G__33391;
count__33388 = G__33392;
i__33389 = G__33393;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33386);
if(temp__5735__auto__){
var seq__33386__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33386__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33386__$1);
var G__33394 = cljs.core.chunk_rest.call(null,seq__33386__$1);
var G__33395 = c__4556__auto__;
var G__33396 = cljs.core.count.call(null,c__4556__auto__);
var G__33397 = (0);
seq__33386 = G__33394;
chunk__33387 = G__33395;
count__33388 = G__33396;
i__33389 = G__33397;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__33386__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__33398 = cljs.core.next.call(null,seq__33386__$1);
var G__33399 = null;
var G__33400 = (0);
var G__33401 = (0);
seq__33386 = G__33398;
chunk__33387 = G__33399;
count__33388 = G__33400;
i__33389 = G__33401;
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
var seq__33402 = cljs.core.seq.call(null,reporters);
var chunk__33403 = null;
var count__33404 = (0);
var i__33405 = (0);
while(true){
if((i__33405 < count__33404)){
var reporter = cljs.core._nth.call(null,chunk__33403,i__33405);
speclj.reporting.report_runs.call(null,reporter,results);


var G__33406 = seq__33402;
var G__33407 = chunk__33403;
var G__33408 = count__33404;
var G__33409 = (i__33405 + (1));
seq__33402 = G__33406;
chunk__33403 = G__33407;
count__33404 = G__33408;
i__33405 = G__33409;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33402);
if(temp__5735__auto__){
var seq__33402__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33402__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33402__$1);
var G__33410 = cljs.core.chunk_rest.call(null,seq__33402__$1);
var G__33411 = c__4556__auto__;
var G__33412 = cljs.core.count.call(null,c__4556__auto__);
var G__33413 = (0);
seq__33402 = G__33410;
chunk__33403 = G__33411;
count__33404 = G__33412;
i__33405 = G__33413;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__33402__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__33414 = cljs.core.next.call(null,seq__33402__$1);
var G__33415 = null;
var G__33416 = (0);
var G__33417 = (0);
seq__33402 = G__33414;
chunk__33403 = G__33415;
count__33404 = G__33416;
i__33405 = G__33417;
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
var seq__33418 = cljs.core.seq.call(null,reporters);
var chunk__33419 = null;
var count__33420 = (0);
var i__33421 = (0);
while(true){
if((i__33421 < count__33420)){
var reporter = cljs.core._nth.call(null,chunk__33419,i__33421);
speclj.reporting.report_message.call(null,reporter,message);


var G__33422 = seq__33418;
var G__33423 = chunk__33419;
var G__33424 = count__33420;
var G__33425 = (i__33421 + (1));
seq__33418 = G__33422;
chunk__33419 = G__33423;
count__33420 = G__33424;
i__33421 = G__33425;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33418);
if(temp__5735__auto__){
var seq__33418__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33418__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33418__$1);
var G__33426 = cljs.core.chunk_rest.call(null,seq__33418__$1);
var G__33427 = c__4556__auto__;
var G__33428 = cljs.core.count.call(null,c__4556__auto__);
var G__33429 = (0);
seq__33418 = G__33426;
chunk__33419 = G__33427;
count__33420 = G__33428;
i__33421 = G__33429;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__33418__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__33430 = cljs.core.next.call(null,seq__33418__$1);
var G__33431 = null;
var G__33432 = (0);
var G__33433 = (0);
seq__33418 = G__33430;
chunk__33419 = G__33431;
count__33420 = G__33432;
i__33421 = G__33433;
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
var seq__33434 = cljs.core.seq.call(null,reporters);
var chunk__33435 = null;
var count__33436 = (0);
var i__33437 = (0);
while(true){
if((i__33437 < count__33436)){
var reporter = cljs.core._nth.call(null,chunk__33435,i__33437);
speclj.reporting.report_error.call(null,reporter,exception);


var G__33438 = seq__33434;
var G__33439 = chunk__33435;
var G__33440 = count__33436;
var G__33441 = (i__33437 + (1));
seq__33434 = G__33438;
chunk__33435 = G__33439;
count__33436 = G__33440;
i__33437 = G__33441;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33434);
if(temp__5735__auto__){
var seq__33434__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33434__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33434__$1);
var G__33442 = cljs.core.chunk_rest.call(null,seq__33434__$1);
var G__33443 = c__4556__auto__;
var G__33444 = cljs.core.count.call(null,c__4556__auto__);
var G__33445 = (0);
seq__33434 = G__33442;
chunk__33435 = G__33443;
count__33436 = G__33444;
i__33437 = G__33445;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__33434__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__33446 = cljs.core.next.call(null,seq__33434__$1);
var G__33447 = null;
var G__33448 = (0);
var G__33449 = (0);
seq__33434 = G__33446;
chunk__33435 = G__33447;
count__33436 = G__33448;
i__33437 = G__33449;
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
