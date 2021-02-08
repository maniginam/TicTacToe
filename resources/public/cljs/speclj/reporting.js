// Compiled by ClojureScript 1.10.773 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__44790_SHARP_){
return p1__44790_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_44791 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_44791.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_44792 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_44792.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_44793 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_44793.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_44794 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_44794.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_44795 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_44795.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_44796 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_44796.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_44797 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_44797.call(null,this$,exception);
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
var seq__44798 = cljs.core.seq.call(null,reporters);
var chunk__44799 = null;
var count__44800 = (0);
var i__44801 = (0);
while(true){
if((i__44801 < count__44800)){
var reporter = cljs.core._nth.call(null,chunk__44799,i__44801);
speclj.reporting.report_pass.call(null,reporter,result);


var G__44802 = seq__44798;
var G__44803 = chunk__44799;
var G__44804 = count__44800;
var G__44805 = (i__44801 + (1));
seq__44798 = G__44802;
chunk__44799 = G__44803;
count__44800 = G__44804;
i__44801 = G__44805;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44798);
if(temp__5735__auto__){
var seq__44798__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44798__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44798__$1);
var G__44806 = cljs.core.chunk_rest.call(null,seq__44798__$1);
var G__44807 = c__4556__auto__;
var G__44808 = cljs.core.count.call(null,c__4556__auto__);
var G__44809 = (0);
seq__44798 = G__44806;
chunk__44799 = G__44807;
count__44800 = G__44808;
i__44801 = G__44809;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__44798__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__44810 = cljs.core.next.call(null,seq__44798__$1);
var G__44811 = null;
var G__44812 = (0);
var G__44813 = (0);
seq__44798 = G__44810;
chunk__44799 = G__44811;
count__44800 = G__44812;
i__44801 = G__44813;
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
var seq__44814 = cljs.core.seq.call(null,reporters);
var chunk__44815 = null;
var count__44816 = (0);
var i__44817 = (0);
while(true){
if((i__44817 < count__44816)){
var reporter = cljs.core._nth.call(null,chunk__44815,i__44817);
speclj.reporting.report_fail.call(null,reporter,result);


var G__44818 = seq__44814;
var G__44819 = chunk__44815;
var G__44820 = count__44816;
var G__44821 = (i__44817 + (1));
seq__44814 = G__44818;
chunk__44815 = G__44819;
count__44816 = G__44820;
i__44817 = G__44821;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44814);
if(temp__5735__auto__){
var seq__44814__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44814__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44814__$1);
var G__44822 = cljs.core.chunk_rest.call(null,seq__44814__$1);
var G__44823 = c__4556__auto__;
var G__44824 = cljs.core.count.call(null,c__4556__auto__);
var G__44825 = (0);
seq__44814 = G__44822;
chunk__44815 = G__44823;
count__44816 = G__44824;
i__44817 = G__44825;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__44814__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__44826 = cljs.core.next.call(null,seq__44814__$1);
var G__44827 = null;
var G__44828 = (0);
var G__44829 = (0);
seq__44814 = G__44826;
chunk__44815 = G__44827;
count__44816 = G__44828;
i__44817 = G__44829;
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
var seq__44830 = cljs.core.seq.call(null,reporters);
var chunk__44831 = null;
var count__44832 = (0);
var i__44833 = (0);
while(true){
if((i__44833 < count__44832)){
var reporter = cljs.core._nth.call(null,chunk__44831,i__44833);
speclj.reporting.report_pending.call(null,reporter,result);


var G__44834 = seq__44830;
var G__44835 = chunk__44831;
var G__44836 = count__44832;
var G__44837 = (i__44833 + (1));
seq__44830 = G__44834;
chunk__44831 = G__44835;
count__44832 = G__44836;
i__44833 = G__44837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44830);
if(temp__5735__auto__){
var seq__44830__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44830__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44830__$1);
var G__44838 = cljs.core.chunk_rest.call(null,seq__44830__$1);
var G__44839 = c__4556__auto__;
var G__44840 = cljs.core.count.call(null,c__4556__auto__);
var G__44841 = (0);
seq__44830 = G__44838;
chunk__44831 = G__44839;
count__44832 = G__44840;
i__44833 = G__44841;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__44830__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__44842 = cljs.core.next.call(null,seq__44830__$1);
var G__44843 = null;
var G__44844 = (0);
var G__44845 = (0);
seq__44830 = G__44842;
chunk__44831 = G__44843;
count__44832 = G__44844;
i__44833 = G__44845;
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
var seq__44846 = cljs.core.seq.call(null,reporters);
var chunk__44847 = null;
var count__44848 = (0);
var i__44849 = (0);
while(true){
if((i__44849 < count__44848)){
var reporter = cljs.core._nth.call(null,chunk__44847,i__44849);
speclj.reporting.report_error.call(null,reporter,result);


var G__44850 = seq__44846;
var G__44851 = chunk__44847;
var G__44852 = count__44848;
var G__44853 = (i__44849 + (1));
seq__44846 = G__44850;
chunk__44847 = G__44851;
count__44848 = G__44852;
i__44849 = G__44853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44846);
if(temp__5735__auto__){
var seq__44846__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44846__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44846__$1);
var G__44854 = cljs.core.chunk_rest.call(null,seq__44846__$1);
var G__44855 = c__4556__auto__;
var G__44856 = cljs.core.count.call(null,c__4556__auto__);
var G__44857 = (0);
seq__44846 = G__44854;
chunk__44847 = G__44855;
count__44848 = G__44856;
i__44849 = G__44857;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__44846__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__44858 = cljs.core.next.call(null,seq__44846__$1);
var G__44859 = null;
var G__44860 = (0);
var G__44861 = (0);
seq__44846 = G__44858;
chunk__44847 = G__44859;
count__44848 = G__44860;
i__44849 = G__44861;
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
var levels_44862 = speclj.platform.stack_trace.call(null,exception);
var elides_44863 = (0);
while(true){
if(cljs.core.seq.call(null,levels_44862)){
var level_44864 = cljs.core.first.call(null,levels_44862);
if(speclj.platform.elide_level_QMARK_.call(null,level_44864)){
var G__44865 = cljs.core.rest.call(null,levels_44862);
var G__44866 = (elides_44863 + (1));
levels_44862 = G__44865;
elides_44863 = G__44866;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_44863);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_44864));

var G__44867 = cljs.core.rest.call(null,levels_44862);
var G__44868 = (0);
levels_44862 = G__44867;
elides_44863 = G__44868;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_44863);
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
var _STAR_print_newline_STAR__orig_val__44869_44873 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44870_44874 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44871_44875 = true;
var _STAR_print_fn_STAR__temp_val__44872_44876 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44871_44875);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44872_44876);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44870_44874);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44869_44873);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44880 = arguments.length;
var i__4737__auto___44881 = (0);
while(true){
if((i__4737__auto___44881 < len__4736__auto___44880)){
args__4742__auto__.push((arguments[i__4737__auto___44881]));

var G__44882 = (i__4737__auto___44881 + (1));
i__4737__auto___44881 = G__44882;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__44877_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44877_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq44878){
var G__44879 = cljs.core.first.call(null,seq44878);
var seq44878__$1 = cljs.core.next.call(null,seq44878);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44879,seq44878__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44885 = arguments.length;
var i__4737__auto___44886 = (0);
while(true){
if((i__4737__auto___44886 < len__4736__auto___44885)){
args__4742__auto__.push((arguments[i__4737__auto___44886]));

var G__44887 = (i__4737__auto___44886 + (1));
i__4737__auto___44886 = G__44887;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq44883){
var G__44884 = cljs.core.first.call(null,seq44883);
var seq44883__$1 = cljs.core.next.call(null,seq44883);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44884,seq44883__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__44888 = cljs.core.seq.call(null,reporters);
var chunk__44889 = null;
var count__44890 = (0);
var i__44891 = (0);
while(true){
if((i__44891 < count__44890)){
var reporter = cljs.core._nth.call(null,chunk__44889,i__44891);
speclj.reporting.report_description.call(null,reporter,description);


var G__44892 = seq__44888;
var G__44893 = chunk__44889;
var G__44894 = count__44890;
var G__44895 = (i__44891 + (1));
seq__44888 = G__44892;
chunk__44889 = G__44893;
count__44890 = G__44894;
i__44891 = G__44895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44888);
if(temp__5735__auto__){
var seq__44888__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44888__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44888__$1);
var G__44896 = cljs.core.chunk_rest.call(null,seq__44888__$1);
var G__44897 = c__4556__auto__;
var G__44898 = cljs.core.count.call(null,c__4556__auto__);
var G__44899 = (0);
seq__44888 = G__44896;
chunk__44889 = G__44897;
count__44890 = G__44898;
i__44891 = G__44899;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__44888__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__44900 = cljs.core.next.call(null,seq__44888__$1);
var G__44901 = null;
var G__44902 = (0);
var G__44903 = (0);
seq__44888 = G__44900;
chunk__44889 = G__44901;
count__44890 = G__44902;
i__44891 = G__44903;
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
var seq__44904 = cljs.core.seq.call(null,reporters);
var chunk__44905 = null;
var count__44906 = (0);
var i__44907 = (0);
while(true){
if((i__44907 < count__44906)){
var reporter = cljs.core._nth.call(null,chunk__44905,i__44907);
speclj.reporting.report_runs.call(null,reporter,results);


var G__44908 = seq__44904;
var G__44909 = chunk__44905;
var G__44910 = count__44906;
var G__44911 = (i__44907 + (1));
seq__44904 = G__44908;
chunk__44905 = G__44909;
count__44906 = G__44910;
i__44907 = G__44911;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44904);
if(temp__5735__auto__){
var seq__44904__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44904__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44904__$1);
var G__44912 = cljs.core.chunk_rest.call(null,seq__44904__$1);
var G__44913 = c__4556__auto__;
var G__44914 = cljs.core.count.call(null,c__4556__auto__);
var G__44915 = (0);
seq__44904 = G__44912;
chunk__44905 = G__44913;
count__44906 = G__44914;
i__44907 = G__44915;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__44904__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__44916 = cljs.core.next.call(null,seq__44904__$1);
var G__44917 = null;
var G__44918 = (0);
var G__44919 = (0);
seq__44904 = G__44916;
chunk__44905 = G__44917;
count__44906 = G__44918;
i__44907 = G__44919;
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
var seq__44920 = cljs.core.seq.call(null,reporters);
var chunk__44921 = null;
var count__44922 = (0);
var i__44923 = (0);
while(true){
if((i__44923 < count__44922)){
var reporter = cljs.core._nth.call(null,chunk__44921,i__44923);
speclj.reporting.report_message.call(null,reporter,message);


var G__44924 = seq__44920;
var G__44925 = chunk__44921;
var G__44926 = count__44922;
var G__44927 = (i__44923 + (1));
seq__44920 = G__44924;
chunk__44921 = G__44925;
count__44922 = G__44926;
i__44923 = G__44927;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44920);
if(temp__5735__auto__){
var seq__44920__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44920__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44920__$1);
var G__44928 = cljs.core.chunk_rest.call(null,seq__44920__$1);
var G__44929 = c__4556__auto__;
var G__44930 = cljs.core.count.call(null,c__4556__auto__);
var G__44931 = (0);
seq__44920 = G__44928;
chunk__44921 = G__44929;
count__44922 = G__44930;
i__44923 = G__44931;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__44920__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__44932 = cljs.core.next.call(null,seq__44920__$1);
var G__44933 = null;
var G__44934 = (0);
var G__44935 = (0);
seq__44920 = G__44932;
chunk__44921 = G__44933;
count__44922 = G__44934;
i__44923 = G__44935;
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
var seq__44936 = cljs.core.seq.call(null,reporters);
var chunk__44937 = null;
var count__44938 = (0);
var i__44939 = (0);
while(true){
if((i__44939 < count__44938)){
var reporter = cljs.core._nth.call(null,chunk__44937,i__44939);
speclj.reporting.report_error.call(null,reporter,exception);


var G__44940 = seq__44936;
var G__44941 = chunk__44937;
var G__44942 = count__44938;
var G__44943 = (i__44939 + (1));
seq__44936 = G__44940;
chunk__44937 = G__44941;
count__44938 = G__44942;
i__44939 = G__44943;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44936);
if(temp__5735__auto__){
var seq__44936__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44936__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44936__$1);
var G__44944 = cljs.core.chunk_rest.call(null,seq__44936__$1);
var G__44945 = c__4556__auto__;
var G__44946 = cljs.core.count.call(null,c__4556__auto__);
var G__44947 = (0);
seq__44936 = G__44944;
chunk__44937 = G__44945;
count__44938 = G__44946;
i__44939 = G__44947;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__44936__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__44948 = cljs.core.next.call(null,seq__44936__$1);
var G__44949 = null;
var G__44950 = (0);
var G__44951 = (0);
seq__44936 = G__44948;
chunk__44937 = G__44949;
count__44938 = G__44950;
i__44939 = G__44951;
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
