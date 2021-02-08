// Compiled by ClojureScript 1.10.773 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__4064_SHARP_){
return p1__4064_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_4065 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_4065.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_4066 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_4066.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_4067 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_4067.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_4068 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_4068.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_4069 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_4069.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_4070 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_4070.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_4071 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_4071.call(null,this$,exception);
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
var seq__4072 = cljs.core.seq.call(null,reporters);
var chunk__4073 = null;
var count__4074 = (0);
var i__4075 = (0);
while(true){
if((i__4075 < count__4074)){
var reporter = cljs.core._nth.call(null,chunk__4073,i__4075);
speclj.reporting.report_pass.call(null,reporter,result);


var G__4076 = seq__4072;
var G__4077 = chunk__4073;
var G__4078 = count__4074;
var G__4079 = (i__4075 + (1));
seq__4072 = G__4076;
chunk__4073 = G__4077;
count__4074 = G__4078;
i__4075 = G__4079;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4072);
if(temp__5735__auto__){
var seq__4072__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4072__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4072__$1);
var G__4080 = cljs.core.chunk_rest.call(null,seq__4072__$1);
var G__4081 = c__4556__auto__;
var G__4082 = cljs.core.count.call(null,c__4556__auto__);
var G__4083 = (0);
seq__4072 = G__4080;
chunk__4073 = G__4081;
count__4074 = G__4082;
i__4075 = G__4083;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4072__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__4084 = cljs.core.next.call(null,seq__4072__$1);
var G__4085 = null;
var G__4086 = (0);
var G__4087 = (0);
seq__4072 = G__4084;
chunk__4073 = G__4085;
count__4074 = G__4086;
i__4075 = G__4087;
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
var seq__4088 = cljs.core.seq.call(null,reporters);
var chunk__4089 = null;
var count__4090 = (0);
var i__4091 = (0);
while(true){
if((i__4091 < count__4090)){
var reporter = cljs.core._nth.call(null,chunk__4089,i__4091);
speclj.reporting.report_fail.call(null,reporter,result);


var G__4092 = seq__4088;
var G__4093 = chunk__4089;
var G__4094 = count__4090;
var G__4095 = (i__4091 + (1));
seq__4088 = G__4092;
chunk__4089 = G__4093;
count__4090 = G__4094;
i__4091 = G__4095;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4088);
if(temp__5735__auto__){
var seq__4088__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4088__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4088__$1);
var G__4096 = cljs.core.chunk_rest.call(null,seq__4088__$1);
var G__4097 = c__4556__auto__;
var G__4098 = cljs.core.count.call(null,c__4556__auto__);
var G__4099 = (0);
seq__4088 = G__4096;
chunk__4089 = G__4097;
count__4090 = G__4098;
i__4091 = G__4099;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4088__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__4100 = cljs.core.next.call(null,seq__4088__$1);
var G__4101 = null;
var G__4102 = (0);
var G__4103 = (0);
seq__4088 = G__4100;
chunk__4089 = G__4101;
count__4090 = G__4102;
i__4091 = G__4103;
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
var seq__4104 = cljs.core.seq.call(null,reporters);
var chunk__4105 = null;
var count__4106 = (0);
var i__4107 = (0);
while(true){
if((i__4107 < count__4106)){
var reporter = cljs.core._nth.call(null,chunk__4105,i__4107);
speclj.reporting.report_pending.call(null,reporter,result);


var G__4108 = seq__4104;
var G__4109 = chunk__4105;
var G__4110 = count__4106;
var G__4111 = (i__4107 + (1));
seq__4104 = G__4108;
chunk__4105 = G__4109;
count__4106 = G__4110;
i__4107 = G__4111;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4104);
if(temp__5735__auto__){
var seq__4104__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4104__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4104__$1);
var G__4112 = cljs.core.chunk_rest.call(null,seq__4104__$1);
var G__4113 = c__4556__auto__;
var G__4114 = cljs.core.count.call(null,c__4556__auto__);
var G__4115 = (0);
seq__4104 = G__4112;
chunk__4105 = G__4113;
count__4106 = G__4114;
i__4107 = G__4115;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4104__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__4116 = cljs.core.next.call(null,seq__4104__$1);
var G__4117 = null;
var G__4118 = (0);
var G__4119 = (0);
seq__4104 = G__4116;
chunk__4105 = G__4117;
count__4106 = G__4118;
i__4107 = G__4119;
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
var seq__4120 = cljs.core.seq.call(null,reporters);
var chunk__4121 = null;
var count__4122 = (0);
var i__4123 = (0);
while(true){
if((i__4123 < count__4122)){
var reporter = cljs.core._nth.call(null,chunk__4121,i__4123);
speclj.reporting.report_error.call(null,reporter,result);


var G__4124 = seq__4120;
var G__4125 = chunk__4121;
var G__4126 = count__4122;
var G__4127 = (i__4123 + (1));
seq__4120 = G__4124;
chunk__4121 = G__4125;
count__4122 = G__4126;
i__4123 = G__4127;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4120);
if(temp__5735__auto__){
var seq__4120__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4120__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4120__$1);
var G__4128 = cljs.core.chunk_rest.call(null,seq__4120__$1);
var G__4129 = c__4556__auto__;
var G__4130 = cljs.core.count.call(null,c__4556__auto__);
var G__4131 = (0);
seq__4120 = G__4128;
chunk__4121 = G__4129;
count__4122 = G__4130;
i__4123 = G__4131;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4120__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__4132 = cljs.core.next.call(null,seq__4120__$1);
var G__4133 = null;
var G__4134 = (0);
var G__4135 = (0);
seq__4120 = G__4132;
chunk__4121 = G__4133;
count__4122 = G__4134;
i__4123 = G__4135;
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
var levels_4136 = speclj.platform.stack_trace.call(null,exception);
var elides_4137 = (0);
while(true){
if(cljs.core.seq.call(null,levels_4136)){
var level_4138 = cljs.core.first.call(null,levels_4136);
if(speclj.platform.elide_level_QMARK_.call(null,level_4138)){
var G__4139 = cljs.core.rest.call(null,levels_4136);
var G__4140 = (elides_4137 + (1));
levels_4136 = G__4139;
elides_4137 = G__4140;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_4137);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_4138));

var G__4141 = cljs.core.rest.call(null,levels_4136);
var G__4142 = (0);
levels_4136 = G__4141;
elides_4137 = G__4142;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_4137);
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
var _STAR_print_newline_STAR__orig_val__4143_4147 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__4144_4148 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__4145_4149 = true;
var _STAR_print_fn_STAR__temp_val__4146_4150 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__4145_4149);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__4146_4150);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__4144_4148);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__4143_4147);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___4154 = arguments.length;
var i__4737__auto___4155 = (0);
while(true){
if((i__4737__auto___4155 < len__4736__auto___4154)){
args__4742__auto__.push((arguments[i__4737__auto___4155]));

var G__4156 = (i__4737__auto___4155 + (1));
i__4737__auto___4155 = G__4156;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__4151_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4151_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq4152){
var G__4153 = cljs.core.first.call(null,seq4152);
var seq4152__$1 = cljs.core.next.call(null,seq4152);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4153,seq4152__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___4159 = arguments.length;
var i__4737__auto___4160 = (0);
while(true){
if((i__4737__auto___4160 < len__4736__auto___4159)){
args__4742__auto__.push((arguments[i__4737__auto___4160]));

var G__4161 = (i__4737__auto___4160 + (1));
i__4737__auto___4160 = G__4161;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq4157){
var G__4158 = cljs.core.first.call(null,seq4157);
var seq4157__$1 = cljs.core.next.call(null,seq4157);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4158,seq4157__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__4162 = cljs.core.seq.call(null,reporters);
var chunk__4163 = null;
var count__4164 = (0);
var i__4165 = (0);
while(true){
if((i__4165 < count__4164)){
var reporter = cljs.core._nth.call(null,chunk__4163,i__4165);
speclj.reporting.report_description.call(null,reporter,description);


var G__4166 = seq__4162;
var G__4167 = chunk__4163;
var G__4168 = count__4164;
var G__4169 = (i__4165 + (1));
seq__4162 = G__4166;
chunk__4163 = G__4167;
count__4164 = G__4168;
i__4165 = G__4169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4162);
if(temp__5735__auto__){
var seq__4162__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4162__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4162__$1);
var G__4170 = cljs.core.chunk_rest.call(null,seq__4162__$1);
var G__4171 = c__4556__auto__;
var G__4172 = cljs.core.count.call(null,c__4556__auto__);
var G__4173 = (0);
seq__4162 = G__4170;
chunk__4163 = G__4171;
count__4164 = G__4172;
i__4165 = G__4173;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4162__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__4174 = cljs.core.next.call(null,seq__4162__$1);
var G__4175 = null;
var G__4176 = (0);
var G__4177 = (0);
seq__4162 = G__4174;
chunk__4163 = G__4175;
count__4164 = G__4176;
i__4165 = G__4177;
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
var seq__4178 = cljs.core.seq.call(null,reporters);
var chunk__4179 = null;
var count__4180 = (0);
var i__4181 = (0);
while(true){
if((i__4181 < count__4180)){
var reporter = cljs.core._nth.call(null,chunk__4179,i__4181);
speclj.reporting.report_runs.call(null,reporter,results);


var G__4182 = seq__4178;
var G__4183 = chunk__4179;
var G__4184 = count__4180;
var G__4185 = (i__4181 + (1));
seq__4178 = G__4182;
chunk__4179 = G__4183;
count__4180 = G__4184;
i__4181 = G__4185;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4178);
if(temp__5735__auto__){
var seq__4178__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4178__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4178__$1);
var G__4186 = cljs.core.chunk_rest.call(null,seq__4178__$1);
var G__4187 = c__4556__auto__;
var G__4188 = cljs.core.count.call(null,c__4556__auto__);
var G__4189 = (0);
seq__4178 = G__4186;
chunk__4179 = G__4187;
count__4180 = G__4188;
i__4181 = G__4189;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4178__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__4190 = cljs.core.next.call(null,seq__4178__$1);
var G__4191 = null;
var G__4192 = (0);
var G__4193 = (0);
seq__4178 = G__4190;
chunk__4179 = G__4191;
count__4180 = G__4192;
i__4181 = G__4193;
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
var seq__4194 = cljs.core.seq.call(null,reporters);
var chunk__4195 = null;
var count__4196 = (0);
var i__4197 = (0);
while(true){
if((i__4197 < count__4196)){
var reporter = cljs.core._nth.call(null,chunk__4195,i__4197);
speclj.reporting.report_message.call(null,reporter,message);


var G__4198 = seq__4194;
var G__4199 = chunk__4195;
var G__4200 = count__4196;
var G__4201 = (i__4197 + (1));
seq__4194 = G__4198;
chunk__4195 = G__4199;
count__4196 = G__4200;
i__4197 = G__4201;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4194);
if(temp__5735__auto__){
var seq__4194__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4194__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4194__$1);
var G__4202 = cljs.core.chunk_rest.call(null,seq__4194__$1);
var G__4203 = c__4556__auto__;
var G__4204 = cljs.core.count.call(null,c__4556__auto__);
var G__4205 = (0);
seq__4194 = G__4202;
chunk__4195 = G__4203;
count__4196 = G__4204;
i__4197 = G__4205;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4194__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__4206 = cljs.core.next.call(null,seq__4194__$1);
var G__4207 = null;
var G__4208 = (0);
var G__4209 = (0);
seq__4194 = G__4206;
chunk__4195 = G__4207;
count__4196 = G__4208;
i__4197 = G__4209;
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
var seq__4210 = cljs.core.seq.call(null,reporters);
var chunk__4211 = null;
var count__4212 = (0);
var i__4213 = (0);
while(true){
if((i__4213 < count__4212)){
var reporter = cljs.core._nth.call(null,chunk__4211,i__4213);
speclj.reporting.report_error.call(null,reporter,exception);


var G__4214 = seq__4210;
var G__4215 = chunk__4211;
var G__4216 = count__4212;
var G__4217 = (i__4213 + (1));
seq__4210 = G__4214;
chunk__4211 = G__4215;
count__4212 = G__4216;
i__4213 = G__4217;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4210);
if(temp__5735__auto__){
var seq__4210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4210__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4210__$1);
var G__4218 = cljs.core.chunk_rest.call(null,seq__4210__$1);
var G__4219 = c__4556__auto__;
var G__4220 = cljs.core.count.call(null,c__4556__auto__);
var G__4221 = (0);
seq__4210 = G__4218;
chunk__4211 = G__4219;
count__4212 = G__4220;
i__4213 = G__4221;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4210__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__4222 = cljs.core.next.call(null,seq__4210__$1);
var G__4223 = null;
var G__4224 = (0);
var G__4225 = (0);
seq__4210 = G__4222;
chunk__4211 = G__4223;
count__4212 = G__4224;
i__4213 = G__4225;
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
