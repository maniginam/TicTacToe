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
var seq__4360 = cljs.core.seq.call(null,components);
var chunk__4361 = null;
var count__4362 = (0);
var i__4363 = (0);
while(true){
if((i__4363 < count__4362)){
var component = cljs.core._nth.call(null,chunk__4361,i__4363);
component.body.call(null);


var G__4364 = seq__4360;
var G__4365 = chunk__4361;
var G__4366 = count__4362;
var G__4367 = (i__4363 + (1));
seq__4360 = G__4364;
chunk__4361 = G__4365;
count__4362 = G__4366;
i__4363 = G__4367;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4360);
if(temp__5735__auto__){
var seq__4360__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4360__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4360__$1);
var G__4368 = cljs.core.chunk_rest.call(null,seq__4360__$1);
var G__4369 = c__4556__auto__;
var G__4370 = cljs.core.count.call(null,c__4556__auto__);
var G__4371 = (0);
seq__4360 = G__4368;
chunk__4361 = G__4369;
count__4362 = G__4370;
i__4363 = G__4371;
continue;
} else {
var component = cljs.core.first.call(null,seq__4360__$1);
component.body.call(null);


var G__4372 = cljs.core.next.call(null,seq__4360__$1);
var G__4373 = null;
var G__4374 = (0);
var G__4375 = (0);
seq__4360 = G__4372;
chunk__4361 = G__4373;
count__4362 = G__4374;
i__4363 = G__4375;
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
var seq__4376 = cljs.core.seq.call(null,withs);
var chunk__4377 = null;
var count__4378 = (0);
var i__4379 = (0);
while(true){
if((i__4379 < count__4378)){
var with$ = cljs.core._nth.call(null,chunk__4377,i__4379);
speclj.components.reset_with.call(null,with$);


var G__4380 = seq__4376;
var G__4381 = chunk__4377;
var G__4382 = count__4378;
var G__4383 = (i__4379 + (1));
seq__4376 = G__4380;
chunk__4377 = G__4381;
count__4378 = G__4382;
i__4379 = G__4383;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4376);
if(temp__5735__auto__){
var seq__4376__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4376__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4376__$1);
var G__4384 = cljs.core.chunk_rest.call(null,seq__4376__$1);
var G__4385 = c__4556__auto__;
var G__4386 = cljs.core.count.call(null,c__4556__auto__);
var G__4387 = (0);
seq__4376 = G__4384;
chunk__4377 = G__4385;
count__4378 = G__4386;
i__4379 = G__4387;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__4376__$1);
speclj.components.reset_with.call(null,with$);


var G__4388 = cljs.core.next.call(null,seq__4376__$1);
var G__4389 = null;
var G__4390 = (0);
var G__4391 = (0);
seq__4376 = G__4388;
chunk__4377 = G__4389;
count__4378 = G__4390;
i__4379 = G__4391;
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
var G__4392 = cljs.core.deref.call(null,description__$1.parent);
var G__4393 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__4392;
components = G__4393;
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
var befores = speclj.running.collect_components.call(null,(function (p1__4394_SHARP_){
return cljs.core.deref.call(null,p1__4394_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__4395_SHARP_){
return cljs.core.deref.call(null,p1__4395_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__4396_SHARP_){
return cljs.core.deref.call(null,p1__4396_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__4397_SHARP_){
return p1__4397_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__4398_SHARP_){
return cljs.core.deref.call(null,p1__4398_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e4399){var e = e4399;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__4400(s__4401){
return (new cljs.core.LazySeq(null,(function (){
var s__4401__$1 = s__4401;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4401__$1);
if(temp__5735__auto__){
var s__4401__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4401__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__4401__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__4403 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__4402 = (0);
while(true){
if((i__4402 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__4402);
cljs.core.chunk_append.call(null,b__4403,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__4404 = (i__4402 + (1));
i__4402 = G__4404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4403),speclj$running$do_characteristics_$_iter__4400.call(null,cljs.core.chunk_rest.call(null,s__4401__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4403),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__4401__$2);
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__4400.call(null,cljs.core.rest.call(null,s__4401__$2)));
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
var G__4405 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__4406 = cljs.core.rest.call(null,contexts);
results__$1 = G__4405;
contexts = G__4406;
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
var var_names = cljs.core.map.call(null,(function (p1__4409_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__4409_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__4410_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__4410_SHARP_.unique_name)].join('');
}),withs);
var seq__4411_4443 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__4412_4444 = null;
var count__4413_4445 = (0);
var i__4414_4446 = (0);
while(true){
if((i__4414_4446 < count__4413_4445)){
var vec__4421_4447 = cljs.core._nth.call(null,chunk__4412_4444,i__4414_4446);
var n_4448 = cljs.core.nth.call(null,vec__4421_4447,(0),null);
var un_4449 = cljs.core.nth.call(null,vec__4421_4447,(1),null);
var code_4450 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_4448)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_4449),";"].join('');
eval(code_4450);


var G__4451 = seq__4411_4443;
var G__4452 = chunk__4412_4444;
var G__4453 = count__4413_4445;
var G__4454 = (i__4414_4446 + (1));
seq__4411_4443 = G__4451;
chunk__4412_4444 = G__4452;
count__4413_4445 = G__4453;
i__4414_4446 = G__4454;
continue;
} else {
var temp__5735__auto___4455 = cljs.core.seq.call(null,seq__4411_4443);
if(temp__5735__auto___4455){
var seq__4411_4456__$1 = temp__5735__auto___4455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4411_4456__$1)){
var c__4556__auto___4457 = cljs.core.chunk_first.call(null,seq__4411_4456__$1);
var G__4458 = cljs.core.chunk_rest.call(null,seq__4411_4456__$1);
var G__4459 = c__4556__auto___4457;
var G__4460 = cljs.core.count.call(null,c__4556__auto___4457);
var G__4461 = (0);
seq__4411_4443 = G__4458;
chunk__4412_4444 = G__4459;
count__4413_4445 = G__4460;
i__4414_4446 = G__4461;
continue;
} else {
var vec__4424_4462 = cljs.core.first.call(null,seq__4411_4456__$1);
var n_4463 = cljs.core.nth.call(null,vec__4424_4462,(0),null);
var un_4464 = cljs.core.nth.call(null,vec__4424_4462,(1),null);
var code_4465 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_4463)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_4464),";"].join('');
eval(code_4465);


var G__4466 = cljs.core.next.call(null,seq__4411_4456__$1);
var G__4467 = null;
var G__4468 = (0);
var G__4469 = (0);
seq__4411_4443 = G__4466;
chunk__4412_4444 = G__4467;
count__4413_4445 = G__4468;
i__4414_4446 = G__4469;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__4427_4470 = cljs.core.seq.call(null,var_names);
var chunk__4428_4471 = null;
var count__4429_4472 = (0);
var i__4430_4473 = (0);
while(true){
if((i__4430_4473 < count__4429_4472)){
var vec__4437_4474 = cljs.core._nth.call(null,chunk__4428_4471,i__4430_4473);
var n_4475 = cljs.core.nth.call(null,vec__4437_4474,(0),null);
var code_4476 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_4475)," = null;"].join('');
eval(code_4476);


var G__4477 = seq__4427_4470;
var G__4478 = chunk__4428_4471;
var G__4479 = count__4429_4472;
var G__4480 = (i__4430_4473 + (1));
seq__4427_4470 = G__4477;
chunk__4428_4471 = G__4478;
count__4429_4472 = G__4479;
i__4430_4473 = G__4480;
continue;
} else {
var temp__5735__auto___4481 = cljs.core.seq.call(null,seq__4427_4470);
if(temp__5735__auto___4481){
var seq__4427_4482__$1 = temp__5735__auto___4481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4427_4482__$1)){
var c__4556__auto___4483 = cljs.core.chunk_first.call(null,seq__4427_4482__$1);
var G__4484 = cljs.core.chunk_rest.call(null,seq__4427_4482__$1);
var G__4485 = c__4556__auto___4483;
var G__4486 = cljs.core.count.call(null,c__4556__auto___4483);
var G__4487 = (0);
seq__4427_4470 = G__4484;
chunk__4428_4471 = G__4485;
count__4429_4472 = G__4486;
i__4430_4473 = G__4487;
continue;
} else {
var vec__4440_4488 = cljs.core.first.call(null,seq__4427_4482__$1);
var n_4489 = cljs.core.nth.call(null,vec__4440_4488,(0),null);
var code_4490 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_4489)," = null;"].join('');
eval(code_4490);


var G__4491 = cljs.core.next.call(null,seq__4427_4482__$1);
var G__4492 = null;
var G__4493 = (0);
var G__4494 = (0);
seq__4427_4470 = G__4491;
chunk__4428_4471 = G__4492;
count__4429_4472 = G__4493;
i__4430_4473 = G__4494;
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
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__4495_SHARP_){
return p1__4495_SHARP_.body;
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

var speclj$running$Runner$run_directories$dyn_4496 = (function (this$,directories,reporters){
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
return speclj$running$Runner$run_directories$dyn_4496.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_4497 = (function (this$,description){
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
return speclj$running$Runner$submit_description$dyn_4497.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_4498 = (function (this$,description,reporters){
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
return speclj$running$Runner$run_description$dyn_4498.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_4499 = (function (this$,reporters){
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
return speclj$running$Runner$run_and_report$dyn_4499.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
