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
var seq__6589 = cljs.core.seq.call(null,components);
var chunk__6590 = null;
var count__6591 = (0);
var i__6592 = (0);
while(true){
if((i__6592 < count__6591)){
var component = cljs.core._nth.call(null,chunk__6590,i__6592);
component.body.call(null);


var G__6593 = seq__6589;
var G__6594 = chunk__6590;
var G__6595 = count__6591;
var G__6596 = (i__6592 + (1));
seq__6589 = G__6593;
chunk__6590 = G__6594;
count__6591 = G__6595;
i__6592 = G__6596;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6589);
if(temp__5735__auto__){
var seq__6589__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6589__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6589__$1);
var G__6597 = cljs.core.chunk_rest.call(null,seq__6589__$1);
var G__6598 = c__4556__auto__;
var G__6599 = cljs.core.count.call(null,c__4556__auto__);
var G__6600 = (0);
seq__6589 = G__6597;
chunk__6590 = G__6598;
count__6591 = G__6599;
i__6592 = G__6600;
continue;
} else {
var component = cljs.core.first.call(null,seq__6589__$1);
component.body.call(null);


var G__6601 = cljs.core.next.call(null,seq__6589__$1);
var G__6602 = null;
var G__6603 = (0);
var G__6604 = (0);
seq__6589 = G__6601;
chunk__6590 = G__6602;
count__6591 = G__6603;
i__6592 = G__6604;
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
var seq__6605 = cljs.core.seq.call(null,withs);
var chunk__6606 = null;
var count__6607 = (0);
var i__6608 = (0);
while(true){
if((i__6608 < count__6607)){
var with$ = cljs.core._nth.call(null,chunk__6606,i__6608);
speclj.components.reset_with.call(null,with$);


var G__6609 = seq__6605;
var G__6610 = chunk__6606;
var G__6611 = count__6607;
var G__6612 = (i__6608 + (1));
seq__6605 = G__6609;
chunk__6606 = G__6610;
count__6607 = G__6611;
i__6608 = G__6612;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__6605);
if(temp__5735__auto__){
var seq__6605__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6605__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6605__$1);
var G__6613 = cljs.core.chunk_rest.call(null,seq__6605__$1);
var G__6614 = c__4556__auto__;
var G__6615 = cljs.core.count.call(null,c__4556__auto__);
var G__6616 = (0);
seq__6605 = G__6613;
chunk__6606 = G__6614;
count__6607 = G__6615;
i__6608 = G__6616;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__6605__$1);
speclj.components.reset_with.call(null,with$);


var G__6617 = cljs.core.next.call(null,seq__6605__$1);
var G__6618 = null;
var G__6619 = (0);
var G__6620 = (0);
seq__6605 = G__6617;
chunk__6606 = G__6618;
count__6607 = G__6619;
i__6608 = G__6620;
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
var G__6621 = cljs.core.deref.call(null,description__$1.parent);
var G__6622 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__6621;
components = G__6622;
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
var befores = speclj.running.collect_components.call(null,(function (p1__6623_SHARP_){
return cljs.core.deref.call(null,p1__6623_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__6624_SHARP_){
return cljs.core.deref.call(null,p1__6624_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__6625_SHARP_){
return cljs.core.deref.call(null,p1__6625_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__6626_SHARP_){
return p1__6626_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__6627_SHARP_){
return cljs.core.deref.call(null,p1__6627_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e6628){var e = e6628;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__6629(s__6630){
return (new cljs.core.LazySeq(null,(function (){
var s__6630__$1 = s__6630;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6630__$1);
if(temp__5735__auto__){
var s__6630__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6630__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6630__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6632 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6631 = (0);
while(true){
if((i__6631 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__6631);
cljs.core.chunk_append.call(null,b__6632,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__6633 = (i__6631 + (1));
i__6631 = G__6633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6632),speclj$running$do_characteristics_$_iter__6629.call(null,cljs.core.chunk_rest.call(null,s__6630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6632),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__6630__$2);
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__6629.call(null,cljs.core.rest.call(null,s__6630__$2)));
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
var G__6634 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__6635 = cljs.core.rest.call(null,contexts);
results__$1 = G__6634;
contexts = G__6635;
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
var var_names = cljs.core.map.call(null,(function (p1__6638_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__6638_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__6639_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__6639_SHARP_.unique_name)].join('');
}),withs);
var seq__6640_6672 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__6641_6673 = null;
var count__6642_6674 = (0);
var i__6643_6675 = (0);
while(true){
if((i__6643_6675 < count__6642_6674)){
var vec__6650_6676 = cljs.core._nth.call(null,chunk__6641_6673,i__6643_6675);
var n_6677 = cljs.core.nth.call(null,vec__6650_6676,(0),null);
var un_6678 = cljs.core.nth.call(null,vec__6650_6676,(1),null);
var code_6679 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6677)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6678),";"].join('');
eval(code_6679);


var G__6680 = seq__6640_6672;
var G__6681 = chunk__6641_6673;
var G__6682 = count__6642_6674;
var G__6683 = (i__6643_6675 + (1));
seq__6640_6672 = G__6680;
chunk__6641_6673 = G__6681;
count__6642_6674 = G__6682;
i__6643_6675 = G__6683;
continue;
} else {
var temp__5735__auto___6684 = cljs.core.seq.call(null,seq__6640_6672);
if(temp__5735__auto___6684){
var seq__6640_6685__$1 = temp__5735__auto___6684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6640_6685__$1)){
var c__4556__auto___6686 = cljs.core.chunk_first.call(null,seq__6640_6685__$1);
var G__6687 = cljs.core.chunk_rest.call(null,seq__6640_6685__$1);
var G__6688 = c__4556__auto___6686;
var G__6689 = cljs.core.count.call(null,c__4556__auto___6686);
var G__6690 = (0);
seq__6640_6672 = G__6687;
chunk__6641_6673 = G__6688;
count__6642_6674 = G__6689;
i__6643_6675 = G__6690;
continue;
} else {
var vec__6653_6691 = cljs.core.first.call(null,seq__6640_6685__$1);
var n_6692 = cljs.core.nth.call(null,vec__6653_6691,(0),null);
var un_6693 = cljs.core.nth.call(null,vec__6653_6691,(1),null);
var code_6694 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6692)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6693),";"].join('');
eval(code_6694);


var G__6695 = cljs.core.next.call(null,seq__6640_6685__$1);
var G__6696 = null;
var G__6697 = (0);
var G__6698 = (0);
seq__6640_6672 = G__6695;
chunk__6641_6673 = G__6696;
count__6642_6674 = G__6697;
i__6643_6675 = G__6698;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__6656_6699 = cljs.core.seq.call(null,var_names);
var chunk__6657_6700 = null;
var count__6658_6701 = (0);
var i__6659_6702 = (0);
while(true){
if((i__6659_6702 < count__6658_6701)){
var vec__6666_6703 = cljs.core._nth.call(null,chunk__6657_6700,i__6659_6702);
var n_6704 = cljs.core.nth.call(null,vec__6666_6703,(0),null);
var code_6705 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6704)," = null;"].join('');
eval(code_6705);


var G__6706 = seq__6656_6699;
var G__6707 = chunk__6657_6700;
var G__6708 = count__6658_6701;
var G__6709 = (i__6659_6702 + (1));
seq__6656_6699 = G__6706;
chunk__6657_6700 = G__6707;
count__6658_6701 = G__6708;
i__6659_6702 = G__6709;
continue;
} else {
var temp__5735__auto___6710 = cljs.core.seq.call(null,seq__6656_6699);
if(temp__5735__auto___6710){
var seq__6656_6711__$1 = temp__5735__auto___6710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6656_6711__$1)){
var c__4556__auto___6712 = cljs.core.chunk_first.call(null,seq__6656_6711__$1);
var G__6713 = cljs.core.chunk_rest.call(null,seq__6656_6711__$1);
var G__6714 = c__4556__auto___6712;
var G__6715 = cljs.core.count.call(null,c__4556__auto___6712);
var G__6716 = (0);
seq__6656_6699 = G__6713;
chunk__6657_6700 = G__6714;
count__6658_6701 = G__6715;
i__6659_6702 = G__6716;
continue;
} else {
var vec__6669_6717 = cljs.core.first.call(null,seq__6656_6711__$1);
var n_6718 = cljs.core.nth.call(null,vec__6669_6717,(0),null);
var code_6719 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6718)," = null;"].join('');
eval(code_6719);


var G__6720 = cljs.core.next.call(null,seq__6656_6711__$1);
var G__6721 = null;
var G__6722 = (0);
var G__6723 = (0);
seq__6656_6699 = G__6720;
chunk__6657_6700 = G__6721;
count__6658_6701 = G__6722;
i__6659_6702 = G__6723;
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
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__6724_SHARP_){
return p1__6724_SHARP_.body;
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

var speclj$running$Runner$run_directories$dyn_6725 = (function (this$,directories,reporters){
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
return speclj$running$Runner$run_directories$dyn_6725.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_6726 = (function (this$,description){
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
return speclj$running$Runner$submit_description$dyn_6726.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_6727 = (function (this$,description,reporters){
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
return speclj$running$Runner$run_description$dyn_6727.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_6728 = (function (this$,reporters){
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
return speclj$running$Runner$run_and_report$dyn_6728.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
