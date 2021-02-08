// Compiled by ClojureScript 1.10.773 {}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__45086 = cljs.core.seq.call(null,components);
var chunk__45087 = null;
var count__45088 = (0);
var i__45089 = (0);
while(true){
if((i__45089 < count__45088)){
var component = cljs.core._nth.call(null,chunk__45087,i__45089);
component.body.call(null);


var G__45090 = seq__45086;
var G__45091 = chunk__45087;
var G__45092 = count__45088;
var G__45093 = (i__45089 + (1));
seq__45086 = G__45090;
chunk__45087 = G__45091;
count__45088 = G__45092;
i__45089 = G__45093;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__45086);
if(temp__5735__auto__){
var seq__45086__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45086__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__45086__$1);
var G__45094 = cljs.core.chunk_rest.call(null,seq__45086__$1);
var G__45095 = c__4556__auto__;
var G__45096 = cljs.core.count.call(null,c__4556__auto__);
var G__45097 = (0);
seq__45086 = G__45094;
chunk__45087 = G__45095;
count__45088 = G__45096;
i__45089 = G__45097;
continue;
} else {
var component = cljs.core.first.call(null,seq__45086__$1);
component.body.call(null);


var G__45098 = cljs.core.next.call(null,seq__45086__$1);
var G__45099 = null;
var G__45100 = (0);
var G__45101 = (0);
seq__45086 = G__45098;
chunk__45087 = G__45099;
count__45088 = G__45100;
i__45089 = G__45101;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__45102 = cljs.core.seq.call(null,withs);
var chunk__45103 = null;
var count__45104 = (0);
var i__45105 = (0);
while(true){
if((i__45105 < count__45104)){
var with$ = cljs.core._nth.call(null,chunk__45103,i__45105);
speclj.components.reset_with.call(null,with$);


var G__45106 = seq__45102;
var G__45107 = chunk__45103;
var G__45108 = count__45104;
var G__45109 = (i__45105 + (1));
seq__45102 = G__45106;
chunk__45103 = G__45107;
count__45104 = G__45108;
i__45105 = G__45109;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__45102);
if(temp__5735__auto__){
var seq__45102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45102__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__45102__$1);
var G__45110 = cljs.core.chunk_rest.call(null,seq__45102__$1);
var G__45111 = c__4556__auto__;
var G__45112 = cljs.core.count.call(null,c__4556__auto__);
var G__45113 = (0);
seq__45102 = G__45110;
chunk__45103 = G__45111;
count__45104 = G__45112;
i__45105 = G__45113;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__45102__$1);
speclj.components.reset_with.call(null,with$);


var G__45114 = cljs.core.next.call(null,seq__45102__$1);
var G__45115 = null;
var G__45116 = (0);
var G__45117 = (0);
seq__45102 = G__45114;
chunk__45103 = G__45115;
count__45104 = G__45116;
i__45105 = G__45117;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__45118 = cljs.core.deref.call(null,description__$1.parent);
var G__45119 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__45118;
components = G__45119;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__45120_SHARP_){
return cljs.core.deref.call(null,p1__45120_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__45121_SHARP_){
return cljs.core.deref.call(null,p1__45121_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__45122_SHARP_){
return cljs.core.deref.call(null,p1__45122_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__45123_SHARP_){
return p1__45123_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__45124_SHARP_){
return cljs.core.deref.call(null,p1__45124_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e45125){var e = e45125;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__45126(s__45127){
return (new cljs.core.LazySeq(null,(function (){
var s__45127__$1 = s__45127;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__45127__$1);
if(temp__5735__auto__){
var s__45127__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45127__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__45127__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__45129 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__45128 = (0);
while(true){
if((i__45128 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__45128);
cljs.core.chunk_append.call(null,b__45129,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__45130 = (i__45128 + (1));
i__45128 = G__45130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45129),speclj$running$do_characteristics_$_iter__45126.call(null,cljs.core.chunk_rest.call(null,s__45127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45129),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__45127__$2);
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__45126.call(null,cljs.core.rest.call(null,s__45127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var contexts = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,contexts)){
var G__45131 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__45132 = cljs.core.rest.call(null,contexts);
results__$1 = G__45131;
contexts = G__45132;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.charcteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__45135_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__45135_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__45136_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__45136_SHARP_.unique_name)].join('');
}),withs);
var seq__45137_45169 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__45138_45170 = null;
var count__45139_45171 = (0);
var i__45140_45172 = (0);
while(true){
if((i__45140_45172 < count__45139_45171)){
var vec__45147_45173 = cljs.core._nth.call(null,chunk__45138_45170,i__45140_45172);
var n_45174 = cljs.core.nth.call(null,vec__45147_45173,(0),null);
var un_45175 = cljs.core.nth.call(null,vec__45147_45173,(1),null);
var code_45176 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_45174)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_45175),";"].join('');
eval(code_45176);


var G__45177 = seq__45137_45169;
var G__45178 = chunk__45138_45170;
var G__45179 = count__45139_45171;
var G__45180 = (i__45140_45172 + (1));
seq__45137_45169 = G__45177;
chunk__45138_45170 = G__45178;
count__45139_45171 = G__45179;
i__45140_45172 = G__45180;
continue;
} else {
var temp__5735__auto___45181 = cljs.core.seq.call(null,seq__45137_45169);
if(temp__5735__auto___45181){
var seq__45137_45182__$1 = temp__5735__auto___45181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45137_45182__$1)){
var c__4556__auto___45183 = cljs.core.chunk_first.call(null,seq__45137_45182__$1);
var G__45184 = cljs.core.chunk_rest.call(null,seq__45137_45182__$1);
var G__45185 = c__4556__auto___45183;
var G__45186 = cljs.core.count.call(null,c__4556__auto___45183);
var G__45187 = (0);
seq__45137_45169 = G__45184;
chunk__45138_45170 = G__45185;
count__45139_45171 = G__45186;
i__45140_45172 = G__45187;
continue;
} else {
var vec__45150_45188 = cljs.core.first.call(null,seq__45137_45182__$1);
var n_45189 = cljs.core.nth.call(null,vec__45150_45188,(0),null);
var un_45190 = cljs.core.nth.call(null,vec__45150_45188,(1),null);
var code_45191 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_45189)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_45190),";"].join('');
eval(code_45191);


var G__45192 = cljs.core.next.call(null,seq__45137_45182__$1);
var G__45193 = null;
var G__45194 = (0);
var G__45195 = (0);
seq__45137_45169 = G__45192;
chunk__45138_45170 = G__45193;
count__45139_45171 = G__45194;
i__45140_45172 = G__45195;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__45153_45196 = cljs.core.seq.call(null,var_names);
var chunk__45154_45197 = null;
var count__45155_45198 = (0);
var i__45156_45199 = (0);
while(true){
if((i__45156_45199 < count__45155_45198)){
var vec__45163_45200 = cljs.core._nth.call(null,chunk__45154_45197,i__45156_45199);
var n_45201 = cljs.core.nth.call(null,vec__45163_45200,(0),null);
var code_45202 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_45201)," = null;"].join('');
eval(code_45202);


var G__45203 = seq__45153_45196;
var G__45204 = chunk__45154_45197;
var G__45205 = count__45155_45198;
var G__45206 = (i__45156_45199 + (1));
seq__45153_45196 = G__45203;
chunk__45154_45197 = G__45204;
count__45155_45198 = G__45205;
i__45156_45199 = G__45206;
continue;
} else {
var temp__5735__auto___45207 = cljs.core.seq.call(null,seq__45153_45196);
if(temp__5735__auto___45207){
var seq__45153_45208__$1 = temp__5735__auto___45207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45153_45208__$1)){
var c__4556__auto___45209 = cljs.core.chunk_first.call(null,seq__45153_45208__$1);
var G__45210 = cljs.core.chunk_rest.call(null,seq__45153_45208__$1);
var G__45211 = c__4556__auto___45209;
var G__45212 = cljs.core.count.call(null,c__4556__auto___45209);
var G__45213 = (0);
seq__45153_45196 = G__45210;
chunk__45154_45197 = G__45211;
count__45155_45198 = G__45212;
i__45156_45199 = G__45213;
continue;
} else {
var vec__45166_45214 = cljs.core.first.call(null,seq__45153_45208__$1);
var n_45215 = cljs.core.nth.call(null,vec__45166_45214,(0),null);
var code_45216 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_45215)," = null;"].join('');
eval(code_45216);


var G__45217 = cljs.core.next.call(null,seq__45153_45208__$1);
var G__45218 = null;
var G__45219 = (0);
var G__45220 = (0);
seq__45153_45196 = G__45217;
chunk__45154_45197 = G__45218;
count__45155_45198 = G__45219;
i__45156_45199 = G__45220;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__45221_SHARP_){
return p1__45221_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_45222 = (function (this$,directories,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_directories[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,directories,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_directories["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_45222.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_45223 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.submit_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.running.submit_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_45223.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_45224 = (function (this$,description,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_45224.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_45225 = (function (this$,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_and_report[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_45225.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
