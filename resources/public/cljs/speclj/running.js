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
var seq__33584 = cljs.core.seq.call(null,components);
var chunk__33585 = null;
var count__33586 = (0);
var i__33587 = (0);
while(true){
if((i__33587 < count__33586)){
var component = cljs.core._nth.call(null,chunk__33585,i__33587);
component.body.call(null);


var G__33588 = seq__33584;
var G__33589 = chunk__33585;
var G__33590 = count__33586;
var G__33591 = (i__33587 + (1));
seq__33584 = G__33588;
chunk__33585 = G__33589;
count__33586 = G__33590;
i__33587 = G__33591;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33584);
if(temp__5735__auto__){
var seq__33584__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33584__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33584__$1);
var G__33592 = cljs.core.chunk_rest.call(null,seq__33584__$1);
var G__33593 = c__4556__auto__;
var G__33594 = cljs.core.count.call(null,c__4556__auto__);
var G__33595 = (0);
seq__33584 = G__33592;
chunk__33585 = G__33593;
count__33586 = G__33594;
i__33587 = G__33595;
continue;
} else {
var component = cljs.core.first.call(null,seq__33584__$1);
component.body.call(null);


var G__33596 = cljs.core.next.call(null,seq__33584__$1);
var G__33597 = null;
var G__33598 = (0);
var G__33599 = (0);
seq__33584 = G__33596;
chunk__33585 = G__33597;
count__33586 = G__33598;
i__33587 = G__33599;
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
var seq__33600 = cljs.core.seq.call(null,withs);
var chunk__33601 = null;
var count__33602 = (0);
var i__33603 = (0);
while(true){
if((i__33603 < count__33602)){
var with$ = cljs.core._nth.call(null,chunk__33601,i__33603);
speclj.components.reset_with.call(null,with$);


var G__33604 = seq__33600;
var G__33605 = chunk__33601;
var G__33606 = count__33602;
var G__33607 = (i__33603 + (1));
seq__33600 = G__33604;
chunk__33601 = G__33605;
count__33602 = G__33606;
i__33603 = G__33607;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33600);
if(temp__5735__auto__){
var seq__33600__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33600__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33600__$1);
var G__33608 = cljs.core.chunk_rest.call(null,seq__33600__$1);
var G__33609 = c__4556__auto__;
var G__33610 = cljs.core.count.call(null,c__4556__auto__);
var G__33611 = (0);
seq__33600 = G__33608;
chunk__33601 = G__33609;
count__33602 = G__33610;
i__33603 = G__33611;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__33600__$1);
speclj.components.reset_with.call(null,with$);


var G__33612 = cljs.core.next.call(null,seq__33600__$1);
var G__33613 = null;
var G__33614 = (0);
var G__33615 = (0);
seq__33600 = G__33612;
chunk__33601 = G__33613;
count__33602 = G__33614;
i__33603 = G__33615;
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
var G__33616 = cljs.core.deref.call(null,description__$1.parent);
var G__33617 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__33616;
components = G__33617;
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
var befores = speclj.running.collect_components.call(null,(function (p1__33618_SHARP_){
return cljs.core.deref.call(null,p1__33618_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__33619_SHARP_){
return cljs.core.deref.call(null,p1__33619_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__33620_SHARP_){
return cljs.core.deref.call(null,p1__33620_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__33621_SHARP_){
return p1__33621_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__33622_SHARP_){
return cljs.core.deref.call(null,p1__33622_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e33623){var e = e33623;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__33624(s__33625){
return (new cljs.core.LazySeq(null,(function (){
var s__33625__$1 = s__33625;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33625__$1);
if(temp__5735__auto__){
var s__33625__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33625__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__33625__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__33627 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__33626 = (0);
while(true){
if((i__33626 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__33626);
cljs.core.chunk_append.call(null,b__33627,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__33628 = (i__33626 + (1));
i__33626 = G__33628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33627),speclj$running$do_characteristics_$_iter__33624.call(null,cljs.core.chunk_rest.call(null,s__33625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33627),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__33625__$2);
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__33624.call(null,cljs.core.rest.call(null,s__33625__$2)));
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
var G__33629 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__33630 = cljs.core.rest.call(null,contexts);
results__$1 = G__33629;
contexts = G__33630;
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
var var_names = cljs.core.map.call(null,(function (p1__33633_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__33633_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__33634_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__33634_SHARP_.unique_name)].join('');
}),withs);
var seq__33635_33667 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__33636_33668 = null;
var count__33637_33669 = (0);
var i__33638_33670 = (0);
while(true){
if((i__33638_33670 < count__33637_33669)){
var vec__33645_33671 = cljs.core._nth.call(null,chunk__33636_33668,i__33638_33670);
var n_33672 = cljs.core.nth.call(null,vec__33645_33671,(0),null);
var un_33673 = cljs.core.nth.call(null,vec__33645_33671,(1),null);
var code_33674 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_33672)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_33673),";"].join('');
eval(code_33674);


var G__33675 = seq__33635_33667;
var G__33676 = chunk__33636_33668;
var G__33677 = count__33637_33669;
var G__33678 = (i__33638_33670 + (1));
seq__33635_33667 = G__33675;
chunk__33636_33668 = G__33676;
count__33637_33669 = G__33677;
i__33638_33670 = G__33678;
continue;
} else {
var temp__5735__auto___33679 = cljs.core.seq.call(null,seq__33635_33667);
if(temp__5735__auto___33679){
var seq__33635_33680__$1 = temp__5735__auto___33679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33635_33680__$1)){
var c__4556__auto___33681 = cljs.core.chunk_first.call(null,seq__33635_33680__$1);
var G__33682 = cljs.core.chunk_rest.call(null,seq__33635_33680__$1);
var G__33683 = c__4556__auto___33681;
var G__33684 = cljs.core.count.call(null,c__4556__auto___33681);
var G__33685 = (0);
seq__33635_33667 = G__33682;
chunk__33636_33668 = G__33683;
count__33637_33669 = G__33684;
i__33638_33670 = G__33685;
continue;
} else {
var vec__33648_33686 = cljs.core.first.call(null,seq__33635_33680__$1);
var n_33687 = cljs.core.nth.call(null,vec__33648_33686,(0),null);
var un_33688 = cljs.core.nth.call(null,vec__33648_33686,(1),null);
var code_33689 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_33687)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_33688),";"].join('');
eval(code_33689);


var G__33690 = cljs.core.next.call(null,seq__33635_33680__$1);
var G__33691 = null;
var G__33692 = (0);
var G__33693 = (0);
seq__33635_33667 = G__33690;
chunk__33636_33668 = G__33691;
count__33637_33669 = G__33692;
i__33638_33670 = G__33693;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__33651_33694 = cljs.core.seq.call(null,var_names);
var chunk__33652_33695 = null;
var count__33653_33696 = (0);
var i__33654_33697 = (0);
while(true){
if((i__33654_33697 < count__33653_33696)){
var vec__33661_33698 = cljs.core._nth.call(null,chunk__33652_33695,i__33654_33697);
var n_33699 = cljs.core.nth.call(null,vec__33661_33698,(0),null);
var code_33700 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_33699)," = null;"].join('');
eval(code_33700);


var G__33701 = seq__33651_33694;
var G__33702 = chunk__33652_33695;
var G__33703 = count__33653_33696;
var G__33704 = (i__33654_33697 + (1));
seq__33651_33694 = G__33701;
chunk__33652_33695 = G__33702;
count__33653_33696 = G__33703;
i__33654_33697 = G__33704;
continue;
} else {
var temp__5735__auto___33705 = cljs.core.seq.call(null,seq__33651_33694);
if(temp__5735__auto___33705){
var seq__33651_33706__$1 = temp__5735__auto___33705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33651_33706__$1)){
var c__4556__auto___33707 = cljs.core.chunk_first.call(null,seq__33651_33706__$1);
var G__33708 = cljs.core.chunk_rest.call(null,seq__33651_33706__$1);
var G__33709 = c__4556__auto___33707;
var G__33710 = cljs.core.count.call(null,c__4556__auto___33707);
var G__33711 = (0);
seq__33651_33694 = G__33708;
chunk__33652_33695 = G__33709;
count__33653_33696 = G__33710;
i__33654_33697 = G__33711;
continue;
} else {
var vec__33664_33712 = cljs.core.first.call(null,seq__33651_33706__$1);
var n_33713 = cljs.core.nth.call(null,vec__33664_33712,(0),null);
var code_33714 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_33713)," = null;"].join('');
eval(code_33714);


var G__33715 = cljs.core.next.call(null,seq__33651_33706__$1);
var G__33716 = null;
var G__33717 = (0);
var G__33718 = (0);
seq__33651_33694 = G__33715;
chunk__33652_33695 = G__33716;
count__33653_33696 = G__33717;
i__33654_33697 = G__33718;
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
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__33719_SHARP_){
return p1__33719_SHARP_.body;
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

var speclj$running$Runner$run_directories$dyn_33720 = (function (this$,directories,reporters){
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
return speclj$running$Runner$run_directories$dyn_33720.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_33721 = (function (this$,description){
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
return speclj$running$Runner$submit_description$dyn_33721.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_33722 = (function (this$,description,reporters){
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
return speclj$running$Runner$run_description$dyn_33722.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_33723 = (function (this$,reporters){
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
return speclj$running$Runner$run_and_report$dyn_33723.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
