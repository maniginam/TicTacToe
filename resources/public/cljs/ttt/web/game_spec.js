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
var description__5972__auto___44075 = speclj.components.new_description.call(null,"Play Game - ","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__44033_44076 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__44034_44077 = description__5972__auto___44075;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__44034_44077);

try{var seq__44035_44078 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075))
),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"human v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__44057_44082 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__44058_44083 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__44058_44083);

try{var seq__44059_44084 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__44057_44082,_STAR_parent_description_STAR__temp_val__44058_44083,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"box-played","box-played",405285239),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___44088 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___44089 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___44088,actual__6058__auto___44089)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___44088 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___44088)),speclj.platform.endl,"     got: ",(((actual__6058__auto___44089 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___44089))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__44057_44082,_STAR_parent_description_STAR__temp_val__44058_44083,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075))
),speclj.components.new_characteristic.call(null,"O in box 4",((function (_STAR_parent_description_STAR__orig_val__44057_44082,_STAR_parent_description_STAR__temp_val__44058_44083,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"box-played","box-played",405285239),(4),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___44090 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),"O",(5),(6),(7),(8)], null);
var actual__6058__auto___44091 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___44090,actual__6058__auto___44091)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___44090 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___44090)),speclj.platform.endl,"     got: ",(((actual__6058__auto___44091 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___44091))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player1","player1",-1491573636);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__44057_44082,_STAR_parent_description_STAR__temp_val__44058_44083,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075))
)],null)));
var chunk__44060_44085 = null;
var count__44061_44086 = (0);
var i__44062_44087 = (0);
while(true){
if((i__44062_44087 < count__44061_44086)){
var component__5973__auto___44092 = cljs.core._nth.call(null,chunk__44060_44085,i__44062_44087);
speclj.components.install.call(null,component__5973__auto___44092,description__5972__auto____$1);


var G__44093 = seq__44059_44084;
var G__44094 = chunk__44060_44085;
var G__44095 = count__44061_44086;
var G__44096 = (i__44062_44087 + (1));
seq__44059_44084 = G__44093;
chunk__44060_44085 = G__44094;
count__44061_44086 = G__44095;
i__44062_44087 = G__44096;
continue;
} else {
var temp__5735__auto___44097 = cljs.core.seq.call(null,seq__44059_44084);
if(temp__5735__auto___44097){
var seq__44059_44098__$1 = temp__5735__auto___44097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44059_44098__$1)){
var c__4556__auto___44099 = cljs.core.chunk_first.call(null,seq__44059_44098__$1);
var G__44100 = cljs.core.chunk_rest.call(null,seq__44059_44098__$1);
var G__44101 = c__4556__auto___44099;
var G__44102 = cljs.core.count.call(null,c__4556__auto___44099);
var G__44103 = (0);
seq__44059_44084 = G__44100;
chunk__44060_44085 = G__44101;
count__44061_44086 = G__44102;
i__44062_44087 = G__44103;
continue;
} else {
var component__5973__auto___44104 = cljs.core.first.call(null,seq__44059_44098__$1);
speclj.components.install.call(null,component__5973__auto___44104,description__5972__auto____$1);


var G__44105 = cljs.core.next.call(null,seq__44059_44098__$1);
var G__44106 = null;
var G__44107 = (0);
var G__44108 = (0);
seq__44059_44084 = G__44105;
chunk__44060_44085 = G__44106;
count__44061_44086 = G__44107;
i__44062_44087 = G__44108;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__44057_44082);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})(),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"computer v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__44063_44109 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__44064_44110 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__44064_44110);

try{var seq__44065_44111 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__44063_44109,_STAR_parent_description_STAR__temp_val__44064_44110,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___44115 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___44116 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___44115,actual__6058__auto___44116)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___44115 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___44115)),speclj.platform.endl,"     got: ",(((actual__6058__auto___44116 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___44116))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__44063_44109,_STAR_parent_description_STAR__temp_val__44064_44110,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075))
)],null)));
var chunk__44066_44112 = null;
var count__44067_44113 = (0);
var i__44068_44114 = (0);
while(true){
if((i__44068_44114 < count__44067_44113)){
var component__5973__auto___44117 = cljs.core._nth.call(null,chunk__44066_44112,i__44068_44114);
speclj.components.install.call(null,component__5973__auto___44117,description__5972__auto____$1);


var G__44118 = seq__44065_44111;
var G__44119 = chunk__44066_44112;
var G__44120 = count__44067_44113;
var G__44121 = (i__44068_44114 + (1));
seq__44065_44111 = G__44118;
chunk__44066_44112 = G__44119;
count__44067_44113 = G__44120;
i__44068_44114 = G__44121;
continue;
} else {
var temp__5735__auto___44122 = cljs.core.seq.call(null,seq__44065_44111);
if(temp__5735__auto___44122){
var seq__44065_44123__$1 = temp__5735__auto___44122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44065_44123__$1)){
var c__4556__auto___44124 = cljs.core.chunk_first.call(null,seq__44065_44123__$1);
var G__44125 = cljs.core.chunk_rest.call(null,seq__44065_44123__$1);
var G__44126 = c__4556__auto___44124;
var G__44127 = cljs.core.count.call(null,c__4556__auto___44124);
var G__44128 = (0);
seq__44065_44111 = G__44125;
chunk__44066_44112 = G__44126;
count__44067_44113 = G__44127;
i__44068_44114 = G__44128;
continue;
} else {
var component__5973__auto___44129 = cljs.core.first.call(null,seq__44065_44123__$1);
speclj.components.install.call(null,component__5973__auto___44129,description__5972__auto____$1);


var G__44130 = cljs.core.next.call(null,seq__44065_44123__$1);
var G__44131 = null;
var G__44132 = (0);
var G__44133 = (0);
seq__44065_44111 = G__44130;
chunk__44066_44112 = G__44131;
count__44067_44113 = G__44132;
i__44068_44114 = G__44133;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__44063_44109);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})(),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"game over","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__44069_44134 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__44070_44135 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__44070_44135);

try{var seq__44071_44136 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X wins",((function (_STAR_parent_description_STAR__orig_val__44069_44134,_STAR_parent_description_STAR__temp_val__44070_44135,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"X",(3),(4),(5),(6),(7),(8)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___44140 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___44141 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___44140,actual__6058__auto___44141)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___44140 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___44140)),speclj.platform.endl,"     got: ",(((actual__6058__auto___44141 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___44141))," (using =)"].join('')));
}

var expected__6057__auto___44142 = new cljs.core.Keyword(null,"game-over","game-over",-607322695);
var actual__6058__auto___44143 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___44142,actual__6058__auto___44143)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___44142 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___44142)),speclj.platform.endl,"     got: ",(((actual__6058__auto___44143 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___44143))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__44069_44134,_STAR_parent_description_STAR__temp_val__44070_44135,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__44033_44076,_STAR_parent_description_STAR__temp_val__44034_44077,description__5972__auto___44075))
)],null)));
var chunk__44072_44137 = null;
var count__44073_44138 = (0);
var i__44074_44139 = (0);
while(true){
if((i__44074_44139 < count__44073_44138)){
var component__5973__auto___44144 = cljs.core._nth.call(null,chunk__44072_44137,i__44074_44139);
speclj.components.install.call(null,component__5973__auto___44144,description__5972__auto____$1);


var G__44145 = seq__44071_44136;
var G__44146 = chunk__44072_44137;
var G__44147 = count__44073_44138;
var G__44148 = (i__44074_44139 + (1));
seq__44071_44136 = G__44145;
chunk__44072_44137 = G__44146;
count__44073_44138 = G__44147;
i__44074_44139 = G__44148;
continue;
} else {
var temp__5735__auto___44149 = cljs.core.seq.call(null,seq__44071_44136);
if(temp__5735__auto___44149){
var seq__44071_44150__$1 = temp__5735__auto___44149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44071_44150__$1)){
var c__4556__auto___44151 = cljs.core.chunk_first.call(null,seq__44071_44150__$1);
var G__44152 = cljs.core.chunk_rest.call(null,seq__44071_44150__$1);
var G__44153 = c__4556__auto___44151;
var G__44154 = cljs.core.count.call(null,c__4556__auto___44151);
var G__44155 = (0);
seq__44071_44136 = G__44152;
chunk__44072_44137 = G__44153;
count__44073_44138 = G__44154;
i__44074_44139 = G__44155;
continue;
} else {
var component__5973__auto___44156 = cljs.core.first.call(null,seq__44071_44150__$1);
speclj.components.install.call(null,component__5973__auto___44156,description__5972__auto____$1);


var G__44157 = cljs.core.next.call(null,seq__44071_44150__$1);
var G__44158 = null;
var G__44159 = (0);
var G__44160 = (0);
seq__44071_44136 = G__44157;
chunk__44072_44137 = G__44158;
count__44073_44138 = G__44159;
i__44074_44139 = G__44160;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__44069_44134);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})()],null)));
var chunk__44036_44079 = null;
var count__44037_44080 = (0);
var i__44038_44081 = (0);
while(true){
if((i__44038_44081 < count__44037_44080)){
var component__5973__auto___44161 = cljs.core._nth.call(null,chunk__44036_44079,i__44038_44081);
speclj.components.install.call(null,component__5973__auto___44161,description__5972__auto___44075);


var G__44162 = seq__44035_44078;
var G__44163 = chunk__44036_44079;
var G__44164 = count__44037_44080;
var G__44165 = (i__44038_44081 + (1));
seq__44035_44078 = G__44162;
chunk__44036_44079 = G__44163;
count__44037_44080 = G__44164;
i__44038_44081 = G__44165;
continue;
} else {
var temp__5735__auto___44166 = cljs.core.seq.call(null,seq__44035_44078);
if(temp__5735__auto___44166){
var seq__44035_44167__$1 = temp__5735__auto___44166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44035_44167__$1)){
var c__4556__auto___44168 = cljs.core.chunk_first.call(null,seq__44035_44167__$1);
var G__44169 = cljs.core.chunk_rest.call(null,seq__44035_44167__$1);
var G__44170 = c__4556__auto___44168;
var G__44171 = cljs.core.count.call(null,c__4556__auto___44168);
var G__44172 = (0);
seq__44035_44078 = G__44169;
chunk__44036_44079 = G__44170;
count__44037_44080 = G__44171;
i__44038_44081 = G__44172;
continue;
} else {
var component__5973__auto___44173 = cljs.core.first.call(null,seq__44035_44167__$1);
speclj.components.install.call(null,component__5973__auto___44173,description__5972__auto___44075);


var G__44174 = cljs.core.next.call(null,seq__44035_44167__$1);
var G__44175 = null;
var G__44176 = (0);
var G__44177 = (0);
seq__44035_44078 = G__44174;
chunk__44036_44079 = G__44175;
count__44037_44080 = G__44176;
i__44038_44081 = G__44177;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__44033_44076);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto___44075);
}


//# sourceMappingURL=game_spec.js.map
