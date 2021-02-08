// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.game_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.master.spec_helper');
goog.require('ttt.master.game_master');
goog.require('ttt.persistence.mock_db');
goog.require('ttt.master.core');
goog.require('ttt.web.board');
ttt.web.game_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
var description__5972__auto___41933 = speclj.components.new_description.call(null,"Play Game - ","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__41891_41934 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41892_41935 = description__5972__auto___41933;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41892_41935);

try{var seq__41893_41936 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933))
),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"human v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__41915_41940 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41916_41941 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41916_41941);

try{var seq__41917_41942 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__41915_41940,_STAR_parent_description_STAR__temp_val__41916_41941,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"box-played","box-played",405285239),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___41946 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___41947 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___41946,actual__6058__auto___41947)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41946 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41946)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41947 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41947))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41915_41940,_STAR_parent_description_STAR__temp_val__41916_41941,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933))
),speclj.components.new_characteristic.call(null,"O in box 4",((function (_STAR_parent_description_STAR__orig_val__41915_41940,_STAR_parent_description_STAR__temp_val__41916_41941,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"box-played","box-played",405285239),(4),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___41948 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),"O",(5),(6),(7),(8)], null);
var actual__6058__auto___41949 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___41948,actual__6058__auto___41949)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41948 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41948)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41949 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41949))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player1","player1",-1491573636);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41915_41940,_STAR_parent_description_STAR__temp_val__41916_41941,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933))
)],null)));
var chunk__41918_41943 = null;
var count__41919_41944 = (0);
var i__41920_41945 = (0);
while(true){
if((i__41920_41945 < count__41919_41944)){
var component__5973__auto___41950 = cljs.core._nth.call(null,chunk__41918_41943,i__41920_41945);
speclj.components.install.call(null,component__5973__auto___41950,description__5972__auto____$1);


var G__41951 = seq__41917_41942;
var G__41952 = chunk__41918_41943;
var G__41953 = count__41919_41944;
var G__41954 = (i__41920_41945 + (1));
seq__41917_41942 = G__41951;
chunk__41918_41943 = G__41952;
count__41919_41944 = G__41953;
i__41920_41945 = G__41954;
continue;
} else {
var temp__5735__auto___41955 = cljs.core.seq.call(null,seq__41917_41942);
if(temp__5735__auto___41955){
var seq__41917_41956__$1 = temp__5735__auto___41955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41917_41956__$1)){
var c__4556__auto___41957 = cljs.core.chunk_first.call(null,seq__41917_41956__$1);
var G__41958 = cljs.core.chunk_rest.call(null,seq__41917_41956__$1);
var G__41959 = c__4556__auto___41957;
var G__41960 = cljs.core.count.call(null,c__4556__auto___41957);
var G__41961 = (0);
seq__41917_41942 = G__41958;
chunk__41918_41943 = G__41959;
count__41919_41944 = G__41960;
i__41920_41945 = G__41961;
continue;
} else {
var component__5973__auto___41962 = cljs.core.first.call(null,seq__41917_41956__$1);
speclj.components.install.call(null,component__5973__auto___41962,description__5972__auto____$1);


var G__41963 = cljs.core.next.call(null,seq__41917_41956__$1);
var G__41964 = null;
var G__41965 = (0);
var G__41966 = (0);
seq__41917_41942 = G__41963;
chunk__41918_41943 = G__41964;
count__41919_41944 = G__41965;
i__41920_41945 = G__41966;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41915_41940);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})(),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"computer v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__41921_41967 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41922_41968 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41922_41968);

try{var seq__41923_41969 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__41921_41967,_STAR_parent_description_STAR__temp_val__41922_41968,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___41973 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___41974 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___41973,actual__6058__auto___41974)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41973 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41973)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41974 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41974))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41921_41967,_STAR_parent_description_STAR__temp_val__41922_41968,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933))
)],null)));
var chunk__41924_41970 = null;
var count__41925_41971 = (0);
var i__41926_41972 = (0);
while(true){
if((i__41926_41972 < count__41925_41971)){
var component__5973__auto___41975 = cljs.core._nth.call(null,chunk__41924_41970,i__41926_41972);
speclj.components.install.call(null,component__5973__auto___41975,description__5972__auto____$1);


var G__41976 = seq__41923_41969;
var G__41977 = chunk__41924_41970;
var G__41978 = count__41925_41971;
var G__41979 = (i__41926_41972 + (1));
seq__41923_41969 = G__41976;
chunk__41924_41970 = G__41977;
count__41925_41971 = G__41978;
i__41926_41972 = G__41979;
continue;
} else {
var temp__5735__auto___41980 = cljs.core.seq.call(null,seq__41923_41969);
if(temp__5735__auto___41980){
var seq__41923_41981__$1 = temp__5735__auto___41980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41923_41981__$1)){
var c__4556__auto___41982 = cljs.core.chunk_first.call(null,seq__41923_41981__$1);
var G__41983 = cljs.core.chunk_rest.call(null,seq__41923_41981__$1);
var G__41984 = c__4556__auto___41982;
var G__41985 = cljs.core.count.call(null,c__4556__auto___41982);
var G__41986 = (0);
seq__41923_41969 = G__41983;
chunk__41924_41970 = G__41984;
count__41925_41971 = G__41985;
i__41926_41972 = G__41986;
continue;
} else {
var component__5973__auto___41987 = cljs.core.first.call(null,seq__41923_41981__$1);
speclj.components.install.call(null,component__5973__auto___41987,description__5972__auto____$1);


var G__41988 = cljs.core.next.call(null,seq__41923_41981__$1);
var G__41989 = null;
var G__41990 = (0);
var G__41991 = (0);
seq__41923_41969 = G__41988;
chunk__41924_41970 = G__41989;
count__41925_41971 = G__41990;
i__41926_41972 = G__41991;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41921_41967);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})(),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"game over","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__41927_41992 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41928_41993 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41928_41993);

try{var seq__41929_41994 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X wins",((function (_STAR_parent_description_STAR__orig_val__41927_41992,_STAR_parent_description_STAR__temp_val__41928_41993,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"X",(3),(4),(5),(6),(7),(8)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___41998 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___41999 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___41998,actual__6058__auto___41999)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41998 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41998)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41999 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41999))," (using =)"].join('')));
}

var expected__6057__auto___42000 = new cljs.core.Keyword(null,"game-over","game-over",-607322695);
var actual__6058__auto___42001 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___42000,actual__6058__auto___42001)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42000 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42000)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42001 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42001))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41927_41992,_STAR_parent_description_STAR__temp_val__41928_41993,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41891_41934,_STAR_parent_description_STAR__temp_val__41892_41935,description__5972__auto___41933))
)],null)));
var chunk__41930_41995 = null;
var count__41931_41996 = (0);
var i__41932_41997 = (0);
while(true){
if((i__41932_41997 < count__41931_41996)){
var component__5973__auto___42002 = cljs.core._nth.call(null,chunk__41930_41995,i__41932_41997);
speclj.components.install.call(null,component__5973__auto___42002,description__5972__auto____$1);


var G__42003 = seq__41929_41994;
var G__42004 = chunk__41930_41995;
var G__42005 = count__41931_41996;
var G__42006 = (i__41932_41997 + (1));
seq__41929_41994 = G__42003;
chunk__41930_41995 = G__42004;
count__41931_41996 = G__42005;
i__41932_41997 = G__42006;
continue;
} else {
var temp__5735__auto___42007 = cljs.core.seq.call(null,seq__41929_41994);
if(temp__5735__auto___42007){
var seq__41929_42008__$1 = temp__5735__auto___42007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41929_42008__$1)){
var c__4556__auto___42009 = cljs.core.chunk_first.call(null,seq__41929_42008__$1);
var G__42010 = cljs.core.chunk_rest.call(null,seq__41929_42008__$1);
var G__42011 = c__4556__auto___42009;
var G__42012 = cljs.core.count.call(null,c__4556__auto___42009);
var G__42013 = (0);
seq__41929_41994 = G__42010;
chunk__41930_41995 = G__42011;
count__41931_41996 = G__42012;
i__41932_41997 = G__42013;
continue;
} else {
var component__5973__auto___42014 = cljs.core.first.call(null,seq__41929_42008__$1);
speclj.components.install.call(null,component__5973__auto___42014,description__5972__auto____$1);


var G__42015 = cljs.core.next.call(null,seq__41929_42008__$1);
var G__42016 = null;
var G__42017 = (0);
var G__42018 = (0);
seq__41929_41994 = G__42015;
chunk__41930_41995 = G__42016;
count__41931_41996 = G__42017;
i__41932_41997 = G__42018;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41927_41992);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})()],null)));
var chunk__41894_41937 = null;
var count__41895_41938 = (0);
var i__41896_41939 = (0);
while(true){
if((i__41896_41939 < count__41895_41938)){
var component__5973__auto___42019 = cljs.core._nth.call(null,chunk__41894_41937,i__41896_41939);
speclj.components.install.call(null,component__5973__auto___42019,description__5972__auto___41933);


var G__42020 = seq__41893_41936;
var G__42021 = chunk__41894_41937;
var G__42022 = count__41895_41938;
var G__42023 = (i__41896_41939 + (1));
seq__41893_41936 = G__42020;
chunk__41894_41937 = G__42021;
count__41895_41938 = G__42022;
i__41896_41939 = G__42023;
continue;
} else {
var temp__5735__auto___42024 = cljs.core.seq.call(null,seq__41893_41936);
if(temp__5735__auto___42024){
var seq__41893_42025__$1 = temp__5735__auto___42024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41893_42025__$1)){
var c__4556__auto___42026 = cljs.core.chunk_first.call(null,seq__41893_42025__$1);
var G__42027 = cljs.core.chunk_rest.call(null,seq__41893_42025__$1);
var G__42028 = c__4556__auto___42026;
var G__42029 = cljs.core.count.call(null,c__4556__auto___42026);
var G__42030 = (0);
seq__41893_41936 = G__42027;
chunk__41894_41937 = G__42028;
count__41895_41938 = G__42029;
i__41896_41939 = G__42030;
continue;
} else {
var component__5973__auto___42031 = cljs.core.first.call(null,seq__41893_42025__$1);
speclj.components.install.call(null,component__5973__auto___42031,description__5972__auto___41933);


var G__42032 = cljs.core.next.call(null,seq__41893_42025__$1);
var G__42033 = null;
var G__42034 = (0);
var G__42035 = (0);
seq__41893_41936 = G__42032;
chunk__41894_41937 = G__42033;
count__41895_41938 = G__42034;
i__41896_41939 = G__42035;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41891_41934);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto___41933);
}


//# sourceMappingURL=game_spec.js.map
