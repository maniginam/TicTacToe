// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.board_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.web.board');
goog.require('ttt.master.spec_helper');
ttt.web.board_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__5972__auto___41160 = speclj.components.new_description.call(null,"The Board - ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__41114_41161 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41115_41162 = description__5972__auto___41160;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41115_41162);

try{var seq__41116_41163 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"the lines: ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__41140_41167 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41141_41168 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41141_41168);

try{var seq__41142_41169 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"vertical",((function (_STAR_parent_description_STAR__orig_val__41140_41167,_STAR_parent_description_STAR__temp_val__41141_41168,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41114_41161,_STAR_parent_description_STAR__temp_val__41115_41162,description__5972__auto___41160){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_vertical_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__41110_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__41110_SHARP_));

return cljs.core.second.call(null,p1__41110_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__41111_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__41111_SHARP_));

return cljs.core.second.call(null,p1__41111_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__6057__auto___41173 = "vline@100";
var actual__6058__auto___41174 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___41173,actual__6058__auto___41174)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41173 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41173)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41174 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41174))," (using =)"].join('')));
}

var expected__6057__auto___41175 = "100";
var actual__6058__auto___41176 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___41175,actual__6058__auto___41176)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41175 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41175)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41176 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41176))," (using =)"].join('')));
}

var expected__6057__auto___41177 = "0%";
var actual__6058__auto___41178 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___41177,actual__6058__auto___41178)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41177 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41177)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41178 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41178))," (using =)"].join('')));
}

var expected__6057__auto___41179 = "100%";
var actual__6058__auto___41180 = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___41179,actual__6058__auto___41180)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41179 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41179)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41180 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41180))," (using =)"].join('')));
}

var expected__6057__auto___41181 = "vline@200";
var actual__6058__auto___41182 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___41181,actual__6058__auto___41182)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41181 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41181)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41182 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41182))," (using =)"].join('')));
}

var expected__6057__auto___41183 = "200";
var actual__6058__auto___41184 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___41183,actual__6058__auto___41184)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41183 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41183)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41184 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41184))," (using =)"].join('')));
}

var expected__6057__auto___41185 = "0%";
var actual__6058__auto___41186 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___41185,actual__6058__auto___41186)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41185 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41185)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41186 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41186))," (using =)"].join('')));
}

var expected__6057__auto__ = "100%";
var actual__6058__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41140_41167,_STAR_parent_description_STAR__temp_val__41141_41168,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41114_41161,_STAR_parent_description_STAR__temp_val__41115_41162,description__5972__auto___41160))
),speclj.components.new_characteristic.call(null,"horizontal",((function (_STAR_parent_description_STAR__orig_val__41140_41167,_STAR_parent_description_STAR__temp_val__41141_41168,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41114_41161,_STAR_parent_description_STAR__temp_val__41115_41162,description__5972__auto___41160){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_horizontal_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__41112_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__41112_SHARP_));

return cljs.core.second.call(null,p1__41112_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__41113_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__41113_SHARP_));

return cljs.core.second.call(null,p1__41113_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__6057__auto___41187 = "hline@100";
var actual__6058__auto___41188 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___41187,actual__6058__auto___41188)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41187 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41187)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41188 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41188))," (using =)"].join('')));
}

var expected__6057__auto___41189 = "0%";
var actual__6058__auto___41190 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___41189,actual__6058__auto___41190)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41189 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41189)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41190 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41190))," (using =)"].join('')));
}

var expected__6057__auto___41191 = "100%";
var actual__6058__auto___41192 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___41191,actual__6058__auto___41192)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41191 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41191)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41192 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41192))," (using =)"].join('')));
}

var expected__6057__auto___41193 = "100";
var actual__6058__auto___41194 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___41193,actual__6058__auto___41194)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41193 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41193)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41194 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41194))," (using =)"].join('')));
}

var expected__6057__auto___41195 = "hline@200";
var actual__6058__auto___41196 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___41195,actual__6058__auto___41196)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41195 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41195)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41196 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41196))," (using =)"].join('')));
}

var expected__6057__auto___41197 = "0%";
var actual__6058__auto___41198 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___41197,actual__6058__auto___41198)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41197 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41197)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41198 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41198))," (using =)"].join('')));
}

var expected__6057__auto___41199 = "100%";
var actual__6058__auto___41200 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___41199,actual__6058__auto___41200)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41199 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41199)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41200 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41200))," (using =)"].join('')));
}

var expected__6057__auto__ = "200";
var actual__6058__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41140_41167,_STAR_parent_description_STAR__temp_val__41141_41168,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41114_41161,_STAR_parent_description_STAR__temp_val__41115_41162,description__5972__auto___41160))
)],null)));
var chunk__41143_41170 = null;
var count__41144_41171 = (0);
var i__41145_41172 = (0);
while(true){
if((i__41145_41172 < count__41144_41171)){
var component__5973__auto___41201 = cljs.core._nth.call(null,chunk__41143_41170,i__41145_41172);
speclj.components.install.call(null,component__5973__auto___41201,description__5972__auto____$1);


var G__41202 = seq__41142_41169;
var G__41203 = chunk__41143_41170;
var G__41204 = count__41144_41171;
var G__41205 = (i__41145_41172 + (1));
seq__41142_41169 = G__41202;
chunk__41143_41170 = G__41203;
count__41144_41171 = G__41204;
i__41145_41172 = G__41205;
continue;
} else {
var temp__5735__auto___41206 = cljs.core.seq.call(null,seq__41142_41169);
if(temp__5735__auto___41206){
var seq__41142_41207__$1 = temp__5735__auto___41206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41142_41207__$1)){
var c__4556__auto___41208 = cljs.core.chunk_first.call(null,seq__41142_41207__$1);
var G__41209 = cljs.core.chunk_rest.call(null,seq__41142_41207__$1);
var G__41210 = c__4556__auto___41208;
var G__41211 = cljs.core.count.call(null,c__4556__auto___41208);
var G__41212 = (0);
seq__41142_41169 = G__41209;
chunk__41143_41170 = G__41210;
count__41144_41171 = G__41211;
i__41145_41172 = G__41212;
continue;
} else {
var component__5973__auto___41213 = cljs.core.first.call(null,seq__41142_41207__$1);
speclj.components.install.call(null,component__5973__auto___41213,description__5972__auto____$1);


var G__41214 = cljs.core.next.call(null,seq__41142_41207__$1);
var G__41215 = null;
var G__41216 = (0);
var G__41217 = (0);
seq__41142_41169 = G__41214;
chunk__41143_41170 = G__41215;
count__41144_41171 = G__41216;
i__41145_41172 = G__41217;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41140_41167);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})(),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"boxes","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__41146_41218 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41147_41219 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41147_41219);

try{var seq__41148_41220 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"empty",((function (_STAR_parent_description_STAR__orig_val__41146_41218,_STAR_parent_description_STAR__temp_val__41147_41219,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41114_41161,_STAR_parent_description_STAR__temp_val__41115_41162,description__5972__auto___41160){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var boxes = ttt.web.board.draw_boxes.call(null,ttt.web.board_spec.test_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"board-specs","board-specs",-706078460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null)], null));
var iter__4529__auto__ = (function ttt$web$board_spec$iter__41156(s__41157){
return (new cljs.core.LazySeq(null,(function (){
var s__41157__$1 = s__41157;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__41157__$1);
if(temp__5735__auto__){
var s__41157__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41157__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__41157__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__41159 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__41158 = (0);
while(true){
if((i__41158 < size__4528__auto__)){
var box = cljs.core._nth.call(null,c__4527__auto__,i__41158);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id,(3))));
var y = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id / (3)) | (0))));
cljs.core.chunk_append.call(null,b__41159,(function (){var expected__6057__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__6058__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
})());

var G__41224 = (i__41158 + (1));
i__41158 = G__41224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41159),ttt$web$board_spec$iter__41156.call(null,cljs.core.chunk_rest.call(null,s__41157__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41159),null);
}
} else {
var box = cljs.core.first.call(null,s__41157__$2);
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
})(),ttt$web$board_spec$iter__41156.call(null,cljs.core.rest.call(null,s__41157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,boxes);
});})(_STAR_parent_description_STAR__orig_val__41146_41218,_STAR_parent_description_STAR__temp_val__41147_41219,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41114_41161,_STAR_parent_description_STAR__temp_val__41115_41162,description__5972__auto___41160))
)],null)));
var chunk__41149_41221 = null;
var count__41150_41222 = (0);
var i__41151_41223 = (0);
while(true){
if((i__41151_41223 < count__41150_41222)){
var component__5973__auto___41225 = cljs.core._nth.call(null,chunk__41149_41221,i__41151_41223);
speclj.components.install.call(null,component__5973__auto___41225,description__5972__auto____$1);


var G__41226 = seq__41148_41220;
var G__41227 = chunk__41149_41221;
var G__41228 = count__41150_41222;
var G__41229 = (i__41151_41223 + (1));
seq__41148_41220 = G__41226;
chunk__41149_41221 = G__41227;
count__41150_41222 = G__41228;
i__41151_41223 = G__41229;
continue;
} else {
var temp__5735__auto___41230 = cljs.core.seq.call(null,seq__41148_41220);
if(temp__5735__auto___41230){
var seq__41148_41231__$1 = temp__5735__auto___41230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41148_41231__$1)){
var c__4556__auto___41232 = cljs.core.chunk_first.call(null,seq__41148_41231__$1);
var G__41233 = cljs.core.chunk_rest.call(null,seq__41148_41231__$1);
var G__41234 = c__4556__auto___41232;
var G__41235 = cljs.core.count.call(null,c__4556__auto___41232);
var G__41236 = (0);
seq__41148_41220 = G__41233;
chunk__41149_41221 = G__41234;
count__41150_41222 = G__41235;
i__41151_41223 = G__41236;
continue;
} else {
var component__5973__auto___41237 = cljs.core.first.call(null,seq__41148_41231__$1);
speclj.components.install.call(null,component__5973__auto___41237,description__5972__auto____$1);


var G__41238 = cljs.core.next.call(null,seq__41148_41231__$1);
var G__41239 = null;
var G__41240 = (0);
var G__41241 = (0);
seq__41148_41220 = G__41238;
chunk__41149_41221 = G__41239;
count__41150_41222 = G__41240;
i__41151_41223 = G__41241;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41146_41218);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})()],null)));
var chunk__41117_41164 = null;
var count__41118_41165 = (0);
var i__41119_41166 = (0);
while(true){
if((i__41119_41166 < count__41118_41165)){
var component__5973__auto___41242 = cljs.core._nth.call(null,chunk__41117_41164,i__41119_41166);
speclj.components.install.call(null,component__5973__auto___41242,description__5972__auto___41160);


var G__41243 = seq__41116_41163;
var G__41244 = chunk__41117_41164;
var G__41245 = count__41118_41165;
var G__41246 = (i__41119_41166 + (1));
seq__41116_41163 = G__41243;
chunk__41117_41164 = G__41244;
count__41118_41165 = G__41245;
i__41119_41166 = G__41246;
continue;
} else {
var temp__5735__auto___41247 = cljs.core.seq.call(null,seq__41116_41163);
if(temp__5735__auto___41247){
var seq__41116_41248__$1 = temp__5735__auto___41247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41116_41248__$1)){
var c__4556__auto___41249 = cljs.core.chunk_first.call(null,seq__41116_41248__$1);
var G__41250 = cljs.core.chunk_rest.call(null,seq__41116_41248__$1);
var G__41251 = c__4556__auto___41249;
var G__41252 = cljs.core.count.call(null,c__4556__auto___41249);
var G__41253 = (0);
seq__41116_41163 = G__41250;
chunk__41117_41164 = G__41251;
count__41118_41165 = G__41252;
i__41119_41166 = G__41253;
continue;
} else {
var component__5973__auto___41254 = cljs.core.first.call(null,seq__41116_41248__$1);
speclj.components.install.call(null,component__5973__auto___41254,description__5972__auto___41160);


var G__41255 = cljs.core.next.call(null,seq__41116_41248__$1);
var G__41256 = null;
var G__41257 = (0);
var G__41258 = (0);
seq__41116_41163 = G__41255;
chunk__41117_41164 = G__41256;
count__41118_41165 = G__41257;
i__41119_41166 = G__41258;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41114_41161);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto___41160);
}


//# sourceMappingURL=board_spec.js.map
