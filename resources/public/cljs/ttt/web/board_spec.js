// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.board_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.web.board');
goog.require('ttt.master.spec_helper');
ttt.web.board_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__5972__auto___43302 = speclj.components.new_description.call(null,"The Board - ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__43256_43303 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43257_43304 = description__5972__auto___43302;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43257_43304);

try{var seq__43258_43305 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"the lines: ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__43282_43309 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43283_43310 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43283_43310);

try{var seq__43284_43311 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"vertical",((function (_STAR_parent_description_STAR__orig_val__43282_43309,_STAR_parent_description_STAR__temp_val__43283_43310,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43256_43303,_STAR_parent_description_STAR__temp_val__43257_43304,description__5972__auto___43302){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_vertical_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__43252_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__43252_SHARP_));

return cljs.core.second.call(null,p1__43252_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__43253_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__43253_SHARP_));

return cljs.core.second.call(null,p1__43253_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__6057__auto___43315 = "vline@100";
var actual__6058__auto___43316 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___43315,actual__6058__auto___43316)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43315 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43315)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43316 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43316))," (using =)"].join('')));
}

var expected__6057__auto___43317 = "100";
var actual__6058__auto___43318 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___43317,actual__6058__auto___43318)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43317 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43317)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43318 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43318))," (using =)"].join('')));
}

var expected__6057__auto___43319 = "0%";
var actual__6058__auto___43320 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___43319,actual__6058__auto___43320)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43319 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43319)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43320 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43320))," (using =)"].join('')));
}

var expected__6057__auto___43321 = "100%";
var actual__6058__auto___43322 = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___43321,actual__6058__auto___43322)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43321 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43321)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43322 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43322))," (using =)"].join('')));
}

var expected__6057__auto___43323 = "vline@200";
var actual__6058__auto___43324 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___43323,actual__6058__auto___43324)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43323 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43323)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43324 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43324))," (using =)"].join('')));
}

var expected__6057__auto___43325 = "200";
var actual__6058__auto___43326 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___43325,actual__6058__auto___43326)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43325 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43325)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43326 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43326))," (using =)"].join('')));
}

var expected__6057__auto___43327 = "0%";
var actual__6058__auto___43328 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___43327,actual__6058__auto___43328)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43327 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43327)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43328 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43328))," (using =)"].join('')));
}

var expected__6057__auto__ = "100%";
var actual__6058__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43282_43309,_STAR_parent_description_STAR__temp_val__43283_43310,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43256_43303,_STAR_parent_description_STAR__temp_val__43257_43304,description__5972__auto___43302))
),speclj.components.new_characteristic.call(null,"horizontal",((function (_STAR_parent_description_STAR__orig_val__43282_43309,_STAR_parent_description_STAR__temp_val__43283_43310,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43256_43303,_STAR_parent_description_STAR__temp_val__43257_43304,description__5972__auto___43302){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_horizontal_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__43254_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__43254_SHARP_));

return cljs.core.second.call(null,p1__43254_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__43255_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__43255_SHARP_));

return cljs.core.second.call(null,p1__43255_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__6057__auto___43329 = "hline@100";
var actual__6058__auto___43330 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___43329,actual__6058__auto___43330)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43329 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43329)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43330 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43330))," (using =)"].join('')));
}

var expected__6057__auto___43331 = "0%";
var actual__6058__auto___43332 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___43331,actual__6058__auto___43332)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43331 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43331)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43332 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43332))," (using =)"].join('')));
}

var expected__6057__auto___43333 = "100%";
var actual__6058__auto___43334 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___43333,actual__6058__auto___43334)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43333 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43333)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43334 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43334))," (using =)"].join('')));
}

var expected__6057__auto___43335 = "100";
var actual__6058__auto___43336 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___43335,actual__6058__auto___43336)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43335 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43335)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43336 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43336))," (using =)"].join('')));
}

var expected__6057__auto___43337 = "hline@200";
var actual__6058__auto___43338 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___43337,actual__6058__auto___43338)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43337 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43337)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43338 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43338))," (using =)"].join('')));
}

var expected__6057__auto___43339 = "0%";
var actual__6058__auto___43340 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___43339,actual__6058__auto___43340)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43339 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43339)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43340 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43340))," (using =)"].join('')));
}

var expected__6057__auto___43341 = "100%";
var actual__6058__auto___43342 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___43341,actual__6058__auto___43342)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43341 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43341)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43342 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43342))," (using =)"].join('')));
}

var expected__6057__auto__ = "200";
var actual__6058__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43282_43309,_STAR_parent_description_STAR__temp_val__43283_43310,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43256_43303,_STAR_parent_description_STAR__temp_val__43257_43304,description__5972__auto___43302))
)],null)));
var chunk__43285_43312 = null;
var count__43286_43313 = (0);
var i__43287_43314 = (0);
while(true){
if((i__43287_43314 < count__43286_43313)){
var component__5973__auto___43343 = cljs.core._nth.call(null,chunk__43285_43312,i__43287_43314);
speclj.components.install.call(null,component__5973__auto___43343,description__5972__auto____$1);


var G__43344 = seq__43284_43311;
var G__43345 = chunk__43285_43312;
var G__43346 = count__43286_43313;
var G__43347 = (i__43287_43314 + (1));
seq__43284_43311 = G__43344;
chunk__43285_43312 = G__43345;
count__43286_43313 = G__43346;
i__43287_43314 = G__43347;
continue;
} else {
var temp__5735__auto___43348 = cljs.core.seq.call(null,seq__43284_43311);
if(temp__5735__auto___43348){
var seq__43284_43349__$1 = temp__5735__auto___43348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43284_43349__$1)){
var c__4556__auto___43350 = cljs.core.chunk_first.call(null,seq__43284_43349__$1);
var G__43351 = cljs.core.chunk_rest.call(null,seq__43284_43349__$1);
var G__43352 = c__4556__auto___43350;
var G__43353 = cljs.core.count.call(null,c__4556__auto___43350);
var G__43354 = (0);
seq__43284_43311 = G__43351;
chunk__43285_43312 = G__43352;
count__43286_43313 = G__43353;
i__43287_43314 = G__43354;
continue;
} else {
var component__5973__auto___43355 = cljs.core.first.call(null,seq__43284_43349__$1);
speclj.components.install.call(null,component__5973__auto___43355,description__5972__auto____$1);


var G__43356 = cljs.core.next.call(null,seq__43284_43349__$1);
var G__43357 = null;
var G__43358 = (0);
var G__43359 = (0);
seq__43284_43311 = G__43356;
chunk__43285_43312 = G__43357;
count__43286_43313 = G__43358;
i__43287_43314 = G__43359;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43282_43309);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})(),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"boxes","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__43288_43360 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43289_43361 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43289_43361);

try{var seq__43290_43362 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"empty",((function (_STAR_parent_description_STAR__orig_val__43288_43360,_STAR_parent_description_STAR__temp_val__43289_43361,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43256_43303,_STAR_parent_description_STAR__temp_val__43257_43304,description__5972__auto___43302){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var boxes = ttt.web.board.draw_boxes.call(null,ttt.web.board_spec.test_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"board-specs","board-specs",-706078460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null)], null));
var iter__4529__auto__ = (function ttt$web$board_spec$iter__43298(s__43299){
return (new cljs.core.LazySeq(null,(function (){
var s__43299__$1 = s__43299;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__43299__$1);
if(temp__5735__auto__){
var s__43299__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43299__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__43299__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__43301 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__43300 = (0);
while(true){
if((i__43300 < size__4528__auto__)){
var box = cljs.core._nth.call(null,c__4527__auto__,i__43300);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id,(3))));
var y = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id / (3)) | (0))));
cljs.core.chunk_append.call(null,b__43301,(function (){var expected__6057__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__6058__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
})());

var G__43366 = (i__43300 + (1));
i__43300 = G__43366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43301),ttt$web$board_spec$iter__43298.call(null,cljs.core.chunk_rest.call(null,s__43299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43301),null);
}
} else {
var box = cljs.core.first.call(null,s__43299__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id,(3))));
var y = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id / (3)) | (0))));
return cljs.core.cons.call(null,(function (){var expected__6057__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__6058__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
})(),ttt$web$board_spec$iter__43298.call(null,cljs.core.rest.call(null,s__43299__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,boxes);
});})(_STAR_parent_description_STAR__orig_val__43288_43360,_STAR_parent_description_STAR__temp_val__43289_43361,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43256_43303,_STAR_parent_description_STAR__temp_val__43257_43304,description__5972__auto___43302))
)],null)));
var chunk__43291_43363 = null;
var count__43292_43364 = (0);
var i__43293_43365 = (0);
while(true){
if((i__43293_43365 < count__43292_43364)){
var component__5973__auto___43367 = cljs.core._nth.call(null,chunk__43291_43363,i__43293_43365);
speclj.components.install.call(null,component__5973__auto___43367,description__5972__auto____$1);


var G__43368 = seq__43290_43362;
var G__43369 = chunk__43291_43363;
var G__43370 = count__43292_43364;
var G__43371 = (i__43293_43365 + (1));
seq__43290_43362 = G__43368;
chunk__43291_43363 = G__43369;
count__43292_43364 = G__43370;
i__43293_43365 = G__43371;
continue;
} else {
var temp__5735__auto___43372 = cljs.core.seq.call(null,seq__43290_43362);
if(temp__5735__auto___43372){
var seq__43290_43373__$1 = temp__5735__auto___43372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43290_43373__$1)){
var c__4556__auto___43374 = cljs.core.chunk_first.call(null,seq__43290_43373__$1);
var G__43375 = cljs.core.chunk_rest.call(null,seq__43290_43373__$1);
var G__43376 = c__4556__auto___43374;
var G__43377 = cljs.core.count.call(null,c__4556__auto___43374);
var G__43378 = (0);
seq__43290_43362 = G__43375;
chunk__43291_43363 = G__43376;
count__43292_43364 = G__43377;
i__43293_43365 = G__43378;
continue;
} else {
var component__5973__auto___43379 = cljs.core.first.call(null,seq__43290_43373__$1);
speclj.components.install.call(null,component__5973__auto___43379,description__5972__auto____$1);


var G__43380 = cljs.core.next.call(null,seq__43290_43373__$1);
var G__43381 = null;
var G__43382 = (0);
var G__43383 = (0);
seq__43290_43362 = G__43380;
chunk__43291_43363 = G__43381;
count__43292_43364 = G__43382;
i__43293_43365 = G__43383;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43288_43360);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})()],null)));
var chunk__43259_43306 = null;
var count__43260_43307 = (0);
var i__43261_43308 = (0);
while(true){
if((i__43261_43308 < count__43260_43307)){
var component__5973__auto___43384 = cljs.core._nth.call(null,chunk__43259_43306,i__43261_43308);
speclj.components.install.call(null,component__5973__auto___43384,description__5972__auto___43302);


var G__43385 = seq__43258_43305;
var G__43386 = chunk__43259_43306;
var G__43387 = count__43260_43307;
var G__43388 = (i__43261_43308 + (1));
seq__43258_43305 = G__43385;
chunk__43259_43306 = G__43386;
count__43260_43307 = G__43387;
i__43261_43308 = G__43388;
continue;
} else {
var temp__5735__auto___43389 = cljs.core.seq.call(null,seq__43258_43305);
if(temp__5735__auto___43389){
var seq__43258_43390__$1 = temp__5735__auto___43389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43258_43390__$1)){
var c__4556__auto___43391 = cljs.core.chunk_first.call(null,seq__43258_43390__$1);
var G__43392 = cljs.core.chunk_rest.call(null,seq__43258_43390__$1);
var G__43393 = c__4556__auto___43391;
var G__43394 = cljs.core.count.call(null,c__4556__auto___43391);
var G__43395 = (0);
seq__43258_43305 = G__43392;
chunk__43259_43306 = G__43393;
count__43260_43307 = G__43394;
i__43261_43308 = G__43395;
continue;
} else {
var component__5973__auto___43396 = cljs.core.first.call(null,seq__43258_43390__$1);
speclj.components.install.call(null,component__5973__auto___43396,description__5972__auto___43302);


var G__43397 = cljs.core.next.call(null,seq__43258_43390__$1);
var G__43398 = null;
var G__43399 = (0);
var G__43400 = (0);
seq__43258_43305 = G__43397;
chunk__43259_43306 = G__43398;
count__43260_43307 = G__43399;
i__43261_43308 = G__43400;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43256_43303);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto___43302);
}


//# sourceMappingURL=board_spec.js.map
