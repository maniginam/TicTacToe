// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e27918){if((e27918 instanceof Error)){
var e = e27918;
return "Error: Unable to stringify";
} else {
throw e27918;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27921 = arguments.length;
switch (G__27921) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27919_SHARP_){
if(typeof p1__27919_SHARP_ === 'string'){
return p1__27919_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27919_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27924 = arguments.length;
var i__4731__auto___27925 = (0);
while(true){
if((i__4731__auto___27925 < len__4730__auto___27924)){
args__4736__auto__.push((arguments[i__4731__auto___27925]));

var G__27926 = (i__4731__auto___27925 + (1));
i__4731__auto___27925 = G__27926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27923){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27923));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27928 = arguments.length;
var i__4731__auto___27929 = (0);
while(true){
if((i__4731__auto___27929 < len__4730__auto___27928)){
args__4736__auto__.push((arguments[i__4731__auto___27929]));

var G__27930 = (i__4731__auto___27929 + (1));
i__4731__auto___27929 = G__27930;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27927){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27927));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27931){
var map__27932 = p__27931;
var map__27932__$1 = (((((!((map__27932 == null))))?(((((map__27932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27932):map__27932);
var message = cljs.core.get.call(null,map__27932__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27932__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23454__auto___28011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___28011,ch){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___28011,ch){
return (function (state_27983){
var state_val_27984 = (state_27983[(1)]);
if((state_val_27984 === (7))){
var inst_27979 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
var statearr_27985_28012 = state_27983__$1;
(statearr_27985_28012[(2)] = inst_27979);

(statearr_27985_28012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (1))){
var state_27983__$1 = state_27983;
var statearr_27986_28013 = state_27983__$1;
(statearr_27986_28013[(2)] = null);

(statearr_27986_28013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (4))){
var inst_27936 = (state_27983[(7)]);
var inst_27936__$1 = (state_27983[(2)]);
var state_27983__$1 = (function (){var statearr_27987 = state_27983;
(statearr_27987[(7)] = inst_27936__$1);

return statearr_27987;
})();
if(cljs.core.truth_(inst_27936__$1)){
var statearr_27988_28014 = state_27983__$1;
(statearr_27988_28014[(1)] = (5));

} else {
var statearr_27989_28015 = state_27983__$1;
(statearr_27989_28015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (15))){
var inst_27943 = (state_27983[(8)]);
var inst_27958 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27943);
var inst_27959 = cljs.core.first.call(null,inst_27958);
var inst_27960 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27959);
var inst_27961 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27960)].join('');
var inst_27962 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27961);
var state_27983__$1 = state_27983;
var statearr_27990_28016 = state_27983__$1;
(statearr_27990_28016[(2)] = inst_27962);

(statearr_27990_28016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (13))){
var inst_27967 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
var statearr_27991_28017 = state_27983__$1;
(statearr_27991_28017[(2)] = inst_27967);

(statearr_27991_28017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (6))){
var state_27983__$1 = state_27983;
var statearr_27992_28018 = state_27983__$1;
(statearr_27992_28018[(2)] = null);

(statearr_27992_28018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (17))){
var inst_27965 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
var statearr_27993_28019 = state_27983__$1;
(statearr_27993_28019[(2)] = inst_27965);

(statearr_27993_28019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (3))){
var inst_27981 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27983__$1,inst_27981);
} else {
if((state_val_27984 === (12))){
var inst_27942 = (state_27983[(9)]);
var inst_27956 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27942,opts);
var state_27983__$1 = state_27983;
if(inst_27956){
var statearr_27994_28020 = state_27983__$1;
(statearr_27994_28020[(1)] = (15));

} else {
var statearr_27995_28021 = state_27983__$1;
(statearr_27995_28021[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (2))){
var state_27983__$1 = state_27983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27983__$1,(4),ch);
} else {
if((state_val_27984 === (11))){
var inst_27943 = (state_27983[(8)]);
var inst_27948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27949 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27943);
var inst_27950 = cljs.core.async.timeout.call(null,(1000));
var inst_27951 = [inst_27949,inst_27950];
var inst_27952 = (new cljs.core.PersistentVector(null,2,(5),inst_27948,inst_27951,null));
var state_27983__$1 = state_27983;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27983__$1,(14),inst_27952);
} else {
if((state_val_27984 === (9))){
var inst_27943 = (state_27983[(8)]);
var inst_27969 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27970 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27943);
var inst_27971 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27970);
var inst_27972 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27971)].join('');
var inst_27973 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27972);
var state_27983__$1 = (function (){var statearr_27996 = state_27983;
(statearr_27996[(10)] = inst_27969);

return statearr_27996;
})();
var statearr_27997_28022 = state_27983__$1;
(statearr_27997_28022[(2)] = inst_27973);

(statearr_27997_28022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (5))){
var inst_27936 = (state_27983[(7)]);
var inst_27938 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27939 = (new cljs.core.PersistentArrayMap(null,2,inst_27938,null));
var inst_27940 = (new cljs.core.PersistentHashSet(null,inst_27939,null));
var inst_27941 = figwheel.client.focus_msgs.call(null,inst_27940,inst_27936);
var inst_27942 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27941);
var inst_27943 = cljs.core.first.call(null,inst_27941);
var inst_27944 = figwheel.client.autoload_QMARK_.call(null);
var state_27983__$1 = (function (){var statearr_27998 = state_27983;
(statearr_27998[(8)] = inst_27943);

(statearr_27998[(9)] = inst_27942);

return statearr_27998;
})();
if(cljs.core.truth_(inst_27944)){
var statearr_27999_28023 = state_27983__$1;
(statearr_27999_28023[(1)] = (8));

} else {
var statearr_28000_28024 = state_27983__$1;
(statearr_28000_28024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (14))){
var inst_27954 = (state_27983[(2)]);
var state_27983__$1 = state_27983;
var statearr_28001_28025 = state_27983__$1;
(statearr_28001_28025[(2)] = inst_27954);

(statearr_28001_28025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (16))){
var state_27983__$1 = state_27983;
var statearr_28002_28026 = state_27983__$1;
(statearr_28002_28026[(2)] = null);

(statearr_28002_28026[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (10))){
var inst_27975 = (state_27983[(2)]);
var state_27983__$1 = (function (){var statearr_28003 = state_27983;
(statearr_28003[(11)] = inst_27975);

return statearr_28003;
})();
var statearr_28004_28027 = state_27983__$1;
(statearr_28004_28027[(2)] = null);

(statearr_28004_28027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27984 === (8))){
var inst_27942 = (state_27983[(9)]);
var inst_27946 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27942,opts);
var state_27983__$1 = state_27983;
if(cljs.core.truth_(inst_27946)){
var statearr_28005_28028 = state_27983__$1;
(statearr_28005_28028[(1)] = (11));

} else {
var statearr_28006_28029 = state_27983__$1;
(statearr_28006_28029[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23454__auto___28011,ch))
;
return ((function (switch__23359__auto__,c__23454__auto___28011,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23360__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23360__auto____0 = (function (){
var statearr_28007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28007[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23360__auto__);

(statearr_28007[(1)] = (1));

return statearr_28007;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23360__auto____1 = (function (state_27983){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_27983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e28008){if((e28008 instanceof Object)){
var ex__23363__auto__ = e28008;
var statearr_28009_28030 = state_27983;
(statearr_28009_28030[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28031 = state_27983;
state_27983 = G__28031;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23360__auto__ = function(state_27983){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23360__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23360__auto____1.call(this,state_27983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23360__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23360__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___28011,ch))
})();
var state__23456__auto__ = (function (){var statearr_28010 = f__23455__auto__.call(null);
(statearr_28010[(6)] = c__23454__auto___28011);

return statearr_28010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___28011,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28032_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28032_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28038 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28038){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28034 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28035 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28036 = true;
var _STAR_print_fn_STAR__temp_val__28037 = ((function (_STAR_print_newline_STAR__orig_val__28034,_STAR_print_fn_STAR__orig_val__28035,_STAR_print_newline_STAR__temp_val__28036,sb,base_path_28038){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__28034,_STAR_print_fn_STAR__orig_val__28035,_STAR_print_newline_STAR__temp_val__28036,sb,base_path_28038))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28036;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28037;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28035;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28034;
}}catch (e28033){if((e28033 instanceof Error)){
var e = e28033;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28038], null));
} else {
var e = e28033;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28038))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28039){
var map__28040 = p__28039;
var map__28040__$1 = (((((!((map__28040 == null))))?(((((map__28040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28040):map__28040);
var opts = map__28040__$1;
var build_id = cljs.core.get.call(null,map__28040__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28040,map__28040__$1,opts,build_id){
return (function (p__28042){
var vec__28043 = p__28042;
var seq__28044 = cljs.core.seq.call(null,vec__28043);
var first__28045 = cljs.core.first.call(null,seq__28044);
var seq__28044__$1 = cljs.core.next.call(null,seq__28044);
var map__28046 = first__28045;
var map__28046__$1 = (((((!((map__28046 == null))))?(((((map__28046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28046):map__28046);
var msg = map__28046__$1;
var msg_name = cljs.core.get.call(null,map__28046__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28044__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28043,seq__28044,first__28045,seq__28044__$1,map__28046,map__28046__$1,msg,msg_name,_,map__28040,map__28040__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28043,seq__28044,first__28045,seq__28044__$1,map__28046,map__28046__$1,msg,msg_name,_,map__28040,map__28040__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28040,map__28040__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28048){
var vec__28049 = p__28048;
var seq__28050 = cljs.core.seq.call(null,vec__28049);
var first__28051 = cljs.core.first.call(null,seq__28050);
var seq__28050__$1 = cljs.core.next.call(null,seq__28050);
var map__28052 = first__28051;
var map__28052__$1 = (((((!((map__28052 == null))))?(((((map__28052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28052):map__28052);
var msg = map__28052__$1;
var msg_name = cljs.core.get.call(null,map__28052__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28050__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28054){
var map__28055 = p__28054;
var map__28055__$1 = (((((!((map__28055 == null))))?(((((map__28055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28055):map__28055);
var on_compile_warning = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28055__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28055,map__28055__$1,on_compile_warning,on_compile_fail){
return (function (p__28057){
var vec__28058 = p__28057;
var seq__28059 = cljs.core.seq.call(null,vec__28058);
var first__28060 = cljs.core.first.call(null,seq__28059);
var seq__28059__$1 = cljs.core.next.call(null,seq__28059);
var map__28061 = first__28060;
var map__28061__$1 = (((((!((map__28061 == null))))?(((((map__28061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28061):map__28061);
var msg = map__28061__$1;
var msg_name = cljs.core.get.call(null,map__28061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28059__$1;
var pred__28063 = cljs.core._EQ_;
var expr__28064 = msg_name;
if(cljs.core.truth_(pred__28063.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28064))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28063.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28064))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28055,map__28055__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__,msg_hist,msg_names,msg){
return (function (state_28153){
var state_val_28154 = (state_28153[(1)]);
if((state_val_28154 === (7))){
var inst_28073 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
if(cljs.core.truth_(inst_28073)){
var statearr_28155_28202 = state_28153__$1;
(statearr_28155_28202[(1)] = (8));

} else {
var statearr_28156_28203 = state_28153__$1;
(statearr_28156_28203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (20))){
var inst_28147 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28157_28204 = state_28153__$1;
(statearr_28157_28204[(2)] = inst_28147);

(statearr_28157_28204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (27))){
var inst_28143 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28158_28205 = state_28153__$1;
(statearr_28158_28205[(2)] = inst_28143);

(statearr_28158_28205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (1))){
var inst_28066 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28153__$1 = state_28153;
if(cljs.core.truth_(inst_28066)){
var statearr_28159_28206 = state_28153__$1;
(statearr_28159_28206[(1)] = (2));

} else {
var statearr_28160_28207 = state_28153__$1;
(statearr_28160_28207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (24))){
var inst_28145 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28161_28208 = state_28153__$1;
(statearr_28161_28208[(2)] = inst_28145);

(statearr_28161_28208[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (4))){
var inst_28151 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28153__$1,inst_28151);
} else {
if((state_val_28154 === (15))){
var inst_28149 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28162_28209 = state_28153__$1;
(statearr_28162_28209[(2)] = inst_28149);

(statearr_28162_28209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (21))){
var inst_28102 = (state_28153[(2)]);
var inst_28103 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28104 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28103);
var state_28153__$1 = (function (){var statearr_28163 = state_28153;
(statearr_28163[(7)] = inst_28102);

return statearr_28163;
})();
var statearr_28164_28210 = state_28153__$1;
(statearr_28164_28210[(2)] = inst_28104);

(statearr_28164_28210[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (31))){
var inst_28132 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28153__$1 = state_28153;
if(inst_28132){
var statearr_28165_28211 = state_28153__$1;
(statearr_28165_28211[(1)] = (34));

} else {
var statearr_28166_28212 = state_28153__$1;
(statearr_28166_28212[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (32))){
var inst_28141 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28167_28213 = state_28153__$1;
(statearr_28167_28213[(2)] = inst_28141);

(statearr_28167_28213[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (33))){
var inst_28128 = (state_28153[(2)]);
var inst_28129 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28130 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28129);
var state_28153__$1 = (function (){var statearr_28168 = state_28153;
(statearr_28168[(8)] = inst_28128);

return statearr_28168;
})();
var statearr_28169_28214 = state_28153__$1;
(statearr_28169_28214[(2)] = inst_28130);

(statearr_28169_28214[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (13))){
var inst_28087 = figwheel.client.heads_up.clear.call(null);
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(16),inst_28087);
} else {
if((state_val_28154 === (22))){
var inst_28108 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28109 = figwheel.client.heads_up.append_warning_message.call(null,inst_28108);
var state_28153__$1 = state_28153;
var statearr_28170_28215 = state_28153__$1;
(statearr_28170_28215[(2)] = inst_28109);

(statearr_28170_28215[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (36))){
var inst_28139 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28171_28216 = state_28153__$1;
(statearr_28171_28216[(2)] = inst_28139);

(statearr_28171_28216[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (29))){
var inst_28119 = (state_28153[(2)]);
var inst_28120 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28121 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28120);
var state_28153__$1 = (function (){var statearr_28172 = state_28153;
(statearr_28172[(9)] = inst_28119);

return statearr_28172;
})();
var statearr_28173_28217 = state_28153__$1;
(statearr_28173_28217[(2)] = inst_28121);

(statearr_28173_28217[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (6))){
var inst_28068 = (state_28153[(10)]);
var state_28153__$1 = state_28153;
var statearr_28174_28218 = state_28153__$1;
(statearr_28174_28218[(2)] = inst_28068);

(statearr_28174_28218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (28))){
var inst_28115 = (state_28153[(2)]);
var inst_28116 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28117 = figwheel.client.heads_up.display_warning.call(null,inst_28116);
var state_28153__$1 = (function (){var statearr_28175 = state_28153;
(statearr_28175[(11)] = inst_28115);

return statearr_28175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(29),inst_28117);
} else {
if((state_val_28154 === (25))){
var inst_28113 = figwheel.client.heads_up.clear.call(null);
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(28),inst_28113);
} else {
if((state_val_28154 === (34))){
var inst_28134 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(37),inst_28134);
} else {
if((state_val_28154 === (17))){
var inst_28093 = (state_28153[(2)]);
var inst_28094 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28095 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28094);
var state_28153__$1 = (function (){var statearr_28176 = state_28153;
(statearr_28176[(12)] = inst_28093);

return statearr_28176;
})();
var statearr_28177_28219 = state_28153__$1;
(statearr_28177_28219[(2)] = inst_28095);

(statearr_28177_28219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (3))){
var inst_28085 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28153__$1 = state_28153;
if(inst_28085){
var statearr_28178_28220 = state_28153__$1;
(statearr_28178_28220[(1)] = (13));

} else {
var statearr_28179_28221 = state_28153__$1;
(statearr_28179_28221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (12))){
var inst_28081 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28180_28222 = state_28153__$1;
(statearr_28180_28222[(2)] = inst_28081);

(statearr_28180_28222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (2))){
var inst_28068 = (state_28153[(10)]);
var inst_28068__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28153__$1 = (function (){var statearr_28181 = state_28153;
(statearr_28181[(10)] = inst_28068__$1);

return statearr_28181;
})();
if(cljs.core.truth_(inst_28068__$1)){
var statearr_28182_28223 = state_28153__$1;
(statearr_28182_28223[(1)] = (5));

} else {
var statearr_28183_28224 = state_28153__$1;
(statearr_28183_28224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (23))){
var inst_28111 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28153__$1 = state_28153;
if(inst_28111){
var statearr_28184_28225 = state_28153__$1;
(statearr_28184_28225[(1)] = (25));

} else {
var statearr_28185_28226 = state_28153__$1;
(statearr_28185_28226[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (35))){
var state_28153__$1 = state_28153;
var statearr_28186_28227 = state_28153__$1;
(statearr_28186_28227[(2)] = null);

(statearr_28186_28227[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (19))){
var inst_28106 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28153__$1 = state_28153;
if(inst_28106){
var statearr_28187_28228 = state_28153__$1;
(statearr_28187_28228[(1)] = (22));

} else {
var statearr_28188_28229 = state_28153__$1;
(statearr_28188_28229[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (11))){
var inst_28077 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28189_28230 = state_28153__$1;
(statearr_28189_28230[(2)] = inst_28077);

(statearr_28189_28230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (9))){
var inst_28079 = figwheel.client.heads_up.clear.call(null);
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(12),inst_28079);
} else {
if((state_val_28154 === (5))){
var inst_28070 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28153__$1 = state_28153;
var statearr_28190_28231 = state_28153__$1;
(statearr_28190_28231[(2)] = inst_28070);

(statearr_28190_28231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (14))){
var inst_28097 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28153__$1 = state_28153;
if(inst_28097){
var statearr_28191_28232 = state_28153__$1;
(statearr_28191_28232[(1)] = (18));

} else {
var statearr_28192_28233 = state_28153__$1;
(statearr_28192_28233[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (26))){
var inst_28123 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28153__$1 = state_28153;
if(inst_28123){
var statearr_28193_28234 = state_28153__$1;
(statearr_28193_28234[(1)] = (30));

} else {
var statearr_28194_28235 = state_28153__$1;
(statearr_28194_28235[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (16))){
var inst_28089 = (state_28153[(2)]);
var inst_28090 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28091 = figwheel.client.heads_up.display_exception.call(null,inst_28090);
var state_28153__$1 = (function (){var statearr_28195 = state_28153;
(statearr_28195[(13)] = inst_28089);

return statearr_28195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(17),inst_28091);
} else {
if((state_val_28154 === (30))){
var inst_28125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28126 = figwheel.client.heads_up.display_warning.call(null,inst_28125);
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(33),inst_28126);
} else {
if((state_val_28154 === (10))){
var inst_28083 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28196_28236 = state_28153__$1;
(statearr_28196_28236[(2)] = inst_28083);

(statearr_28196_28236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (18))){
var inst_28099 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28100 = figwheel.client.heads_up.display_exception.call(null,inst_28099);
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(21),inst_28100);
} else {
if((state_val_28154 === (37))){
var inst_28136 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28197_28237 = state_28153__$1;
(statearr_28197_28237[(2)] = inst_28136);

(statearr_28197_28237[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (8))){
var inst_28075 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(11),inst_28075);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23454__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23359__auto__,c__23454__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto____0 = (function (){
var statearr_28198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28198[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto__);

(statearr_28198[(1)] = (1));

return statearr_28198;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto____1 = (function (state_28153){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_28153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e28199){if((e28199 instanceof Object)){
var ex__23363__auto__ = e28199;
var statearr_28200_28238 = state_28153;
(statearr_28200_28238[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28239 = state_28153;
state_28153 = G__28239;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto__ = function(state_28153){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto____1.call(this,state_28153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__,msg_hist,msg_names,msg))
})();
var state__23456__auto__ = (function (){var statearr_28201 = f__23455__auto__.call(null);
(statearr_28201[(6)] = c__23454__auto__);

return statearr_28201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__,msg_hist,msg_names,msg))
);

return c__23454__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23454__auto___28268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___28268,ch){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___28268,ch){
return (function (state_28254){
var state_val_28255 = (state_28254[(1)]);
if((state_val_28255 === (1))){
var state_28254__$1 = state_28254;
var statearr_28256_28269 = state_28254__$1;
(statearr_28256_28269[(2)] = null);

(statearr_28256_28269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (2))){
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28254__$1,(4),ch);
} else {
if((state_val_28255 === (3))){
var inst_28252 = (state_28254[(2)]);
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28254__$1,inst_28252);
} else {
if((state_val_28255 === (4))){
var inst_28242 = (state_28254[(7)]);
var inst_28242__$1 = (state_28254[(2)]);
var state_28254__$1 = (function (){var statearr_28257 = state_28254;
(statearr_28257[(7)] = inst_28242__$1);

return statearr_28257;
})();
if(cljs.core.truth_(inst_28242__$1)){
var statearr_28258_28270 = state_28254__$1;
(statearr_28258_28270[(1)] = (5));

} else {
var statearr_28259_28271 = state_28254__$1;
(statearr_28259_28271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (5))){
var inst_28242 = (state_28254[(7)]);
var inst_28244 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28242);
var state_28254__$1 = state_28254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28254__$1,(8),inst_28244);
} else {
if((state_val_28255 === (6))){
var state_28254__$1 = state_28254;
var statearr_28260_28272 = state_28254__$1;
(statearr_28260_28272[(2)] = null);

(statearr_28260_28272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (7))){
var inst_28250 = (state_28254[(2)]);
var state_28254__$1 = state_28254;
var statearr_28261_28273 = state_28254__$1;
(statearr_28261_28273[(2)] = inst_28250);

(statearr_28261_28273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28255 === (8))){
var inst_28246 = (state_28254[(2)]);
var state_28254__$1 = (function (){var statearr_28262 = state_28254;
(statearr_28262[(8)] = inst_28246);

return statearr_28262;
})();
var statearr_28263_28274 = state_28254__$1;
(statearr_28263_28274[(2)] = null);

(statearr_28263_28274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23454__auto___28268,ch))
;
return ((function (switch__23359__auto__,c__23454__auto___28268,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23360__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23360__auto____0 = (function (){
var statearr_28264 = [null,null,null,null,null,null,null,null,null];
(statearr_28264[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23360__auto__);

(statearr_28264[(1)] = (1));

return statearr_28264;
});
var figwheel$client$heads_up_plugin_$_state_machine__23360__auto____1 = (function (state_28254){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_28254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e28265){if((e28265 instanceof Object)){
var ex__23363__auto__ = e28265;
var statearr_28266_28275 = state_28254;
(statearr_28266_28275[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28276 = state_28254;
state_28254 = G__28276;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23360__auto__ = function(state_28254){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23360__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23360__auto____1.call(this,state_28254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23360__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23360__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___28268,ch))
})();
var state__23456__auto__ = (function (){var statearr_28267 = f__23455__auto__.call(null);
(statearr_28267[(6)] = c__23454__auto___28268);

return statearr_28267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___28268,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__){
return (function (state_28282){
var state_val_28283 = (state_28282[(1)]);
if((state_val_28283 === (1))){
var inst_28277 = cljs.core.async.timeout.call(null,(3000));
var state_28282__$1 = state_28282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28282__$1,(2),inst_28277);
} else {
if((state_val_28283 === (2))){
var inst_28279 = (state_28282[(2)]);
var inst_28280 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28282__$1 = (function (){var statearr_28284 = state_28282;
(statearr_28284[(7)] = inst_28279);

return statearr_28284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28282__$1,inst_28280);
} else {
return null;
}
}
});})(c__23454__auto__))
;
return ((function (switch__23359__auto__,c__23454__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23360__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23360__auto____0 = (function (){
var statearr_28285 = [null,null,null,null,null,null,null,null];
(statearr_28285[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23360__auto__);

(statearr_28285[(1)] = (1));

return statearr_28285;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23360__auto____1 = (function (state_28282){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_28282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e28286){if((e28286 instanceof Object)){
var ex__23363__auto__ = e28286;
var statearr_28287_28289 = state_28282;
(statearr_28287_28289[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28290 = state_28282;
state_28282 = G__28290;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23360__auto__ = function(state_28282){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23360__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23360__auto____1.call(this,state_28282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23360__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23360__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__))
})();
var state__23456__auto__ = (function (){var statearr_28288 = f__23455__auto__.call(null);
(statearr_28288[(6)] = c__23454__auto__);

return statearr_28288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__))
);

return c__23454__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__,figwheel_version,temp__5735__auto__){
return (function (state_28297){
var state_val_28298 = (state_28297[(1)]);
if((state_val_28298 === (1))){
var inst_28291 = cljs.core.async.timeout.call(null,(2000));
var state_28297__$1 = state_28297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28297__$1,(2),inst_28291);
} else {
if((state_val_28298 === (2))){
var inst_28293 = (state_28297[(2)]);
var inst_28294 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28295 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28294);
var state_28297__$1 = (function (){var statearr_28299 = state_28297;
(statearr_28299[(7)] = inst_28293);

return statearr_28299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28297__$1,inst_28295);
} else {
return null;
}
}
});})(c__23454__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23359__auto__,c__23454__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto____0 = (function (){
var statearr_28300 = [null,null,null,null,null,null,null,null];
(statearr_28300[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto__);

(statearr_28300[(1)] = (1));

return statearr_28300;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto____1 = (function (state_28297){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_28297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e28301){if((e28301 instanceof Object)){
var ex__23363__auto__ = e28301;
var statearr_28302_28304 = state_28297;
(statearr_28302_28304[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28305 = state_28297;
state_28297 = G__28305;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto__ = function(state_28297){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto____1.call(this,state_28297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__,figwheel_version,temp__5735__auto__))
})();
var state__23456__auto__ = (function (){var statearr_28303 = f__23455__auto__.call(null);
(statearr_28303[(6)] = c__23454__auto__);

return statearr_28303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__,figwheel_version,temp__5735__auto__))
);

return c__23454__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28306){
var map__28307 = p__28306;
var map__28307__$1 = (((((!((map__28307 == null))))?(((((map__28307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28307):map__28307);
var file = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28309 = "";
var G__28309__$1 = (cljs.core.truth_(file)?[G__28309,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28309);
var G__28309__$2 = (cljs.core.truth_(line)?[G__28309__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28309__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__28309__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28309__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28310){
var map__28311 = p__28310;
var map__28311__$1 = (((((!((map__28311 == null))))?(((((map__28311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);
var ed = map__28311__$1;
var exception_data = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_28314 = (function (){var G__28313 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28313)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__28313;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_28314);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28315){
var map__28316 = p__28315;
var map__28316__$1 = (((((!((map__28316 == null))))?(((((map__28316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28316):map__28316);
var w = map__28316__$1;
var message = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28318 = cljs.core.seq.call(null,plugins);
var chunk__28319 = null;
var count__28320 = (0);
var i__28321 = (0);
while(true){
if((i__28321 < count__28320)){
var vec__28328 = cljs.core._nth.call(null,chunk__28319,i__28321);
var k = cljs.core.nth.call(null,vec__28328,(0),null);
var plugin = cljs.core.nth.call(null,vec__28328,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28334 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28318,chunk__28319,count__28320,i__28321,pl_28334,vec__28328,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28334.call(null,msg_hist);
});})(seq__28318,chunk__28319,count__28320,i__28321,pl_28334,vec__28328,k,plugin))
);
} else {
}


var G__28335 = seq__28318;
var G__28336 = chunk__28319;
var G__28337 = count__28320;
var G__28338 = (i__28321 + (1));
seq__28318 = G__28335;
chunk__28319 = G__28336;
count__28320 = G__28337;
i__28321 = G__28338;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28318);
if(temp__5735__auto__){
var seq__28318__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28318__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28318__$1);
var G__28339 = cljs.core.chunk_rest.call(null,seq__28318__$1);
var G__28340 = c__4550__auto__;
var G__28341 = cljs.core.count.call(null,c__4550__auto__);
var G__28342 = (0);
seq__28318 = G__28339;
chunk__28319 = G__28340;
count__28320 = G__28341;
i__28321 = G__28342;
continue;
} else {
var vec__28331 = cljs.core.first.call(null,seq__28318__$1);
var k = cljs.core.nth.call(null,vec__28331,(0),null);
var plugin = cljs.core.nth.call(null,vec__28331,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28343 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28318,chunk__28319,count__28320,i__28321,pl_28343,vec__28331,k,plugin,seq__28318__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28343.call(null,msg_hist);
});})(seq__28318,chunk__28319,count__28320,i__28321,pl_28343,vec__28331,k,plugin,seq__28318__$1,temp__5735__auto__))
);
} else {
}


var G__28344 = cljs.core.next.call(null,seq__28318__$1);
var G__28345 = null;
var G__28346 = (0);
var G__28347 = (0);
seq__28318 = G__28344;
chunk__28319 = G__28345;
count__28320 = G__28346;
i__28321 = G__28347;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__28349 = arguments.length;
switch (G__28349) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28350_28355 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28351_28356 = null;
var count__28352_28357 = (0);
var i__28353_28358 = (0);
while(true){
if((i__28353_28358 < count__28352_28357)){
var msg_28359 = cljs.core._nth.call(null,chunk__28351_28356,i__28353_28358);
figwheel.client.socket.handle_incoming_message.call(null,msg_28359);


var G__28360 = seq__28350_28355;
var G__28361 = chunk__28351_28356;
var G__28362 = count__28352_28357;
var G__28363 = (i__28353_28358 + (1));
seq__28350_28355 = G__28360;
chunk__28351_28356 = G__28361;
count__28352_28357 = G__28362;
i__28353_28358 = G__28363;
continue;
} else {
var temp__5735__auto___28364 = cljs.core.seq.call(null,seq__28350_28355);
if(temp__5735__auto___28364){
var seq__28350_28365__$1 = temp__5735__auto___28364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28350_28365__$1)){
var c__4550__auto___28366 = cljs.core.chunk_first.call(null,seq__28350_28365__$1);
var G__28367 = cljs.core.chunk_rest.call(null,seq__28350_28365__$1);
var G__28368 = c__4550__auto___28366;
var G__28369 = cljs.core.count.call(null,c__4550__auto___28366);
var G__28370 = (0);
seq__28350_28355 = G__28367;
chunk__28351_28356 = G__28368;
count__28352_28357 = G__28369;
i__28353_28358 = G__28370;
continue;
} else {
var msg_28371 = cljs.core.first.call(null,seq__28350_28365__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28371);


var G__28372 = cljs.core.next.call(null,seq__28350_28365__$1);
var G__28373 = null;
var G__28374 = (0);
var G__28375 = (0);
seq__28350_28355 = G__28372;
chunk__28351_28356 = G__28373;
count__28352_28357 = G__28374;
i__28353_28358 = G__28375;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28380 = arguments.length;
var i__4731__auto___28381 = (0);
while(true){
if((i__4731__auto___28381 < len__4730__auto___28380)){
args__4736__auto__.push((arguments[i__4731__auto___28381]));

var G__28382 = (i__4731__auto___28381 + (1));
i__4731__auto___28381 = G__28382;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28377){
var map__28378 = p__28377;
var map__28378__$1 = (((((!((map__28378 == null))))?(((((map__28378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28378):map__28378);
var opts = map__28378__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28376){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28376));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28383){if((e28383 instanceof Error)){
var e = e28383;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28383;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__28384){
var map__28385 = p__28384;
var map__28385__$1 = (((((!((map__28385 == null))))?(((((map__28385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28385):map__28385);
var msg_name = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1598038773211
