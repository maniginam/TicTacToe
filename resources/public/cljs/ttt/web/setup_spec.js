// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.master.spec_helper');
goog.require('ttt.master.core');
goog.require('ttt.web.setup');
ttt.web.setup_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__5972__auto___41597 = speclj.components.new_description.call(null,"TTT Setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41267_41598 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41268_41599 = description__5972__auto___41597;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41268_41599);

try{var seq__41269_41600 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"Status","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41435_41604 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41436_41605 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41436_41605);

try{var seq__41437_41606 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"waiting","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41519_41610 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41520_41611 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41520_41611);

try{var seq__41521_41612 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"welcomes at startup",((function (_STAR_parent_description_STAR__orig_val__41519_41610,_STAR_parent_description_STAR__temp_val__41520_41611,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto__ = new cljs.core.Keyword(null,"waiting","waiting",895906735);
var actual__6058__auto__ = status;
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41519_41610,_STAR_parent_description_STAR__temp_val__41520_41611,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
),speclj.components.new_characteristic.call(null,"click start for user-setup",((function (_STAR_parent_description_STAR__orig_val__41519_41610,_STAR_parent_description_STAR__temp_val__41520_41611,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
var game = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto__ = new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41519_41610,_STAR_parent_description_STAR__temp_val__41520_41611,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
)],null)));
var chunk__41522_41613 = null;
var count__41523_41614 = (0);
var i__41524_41615 = (0);
while(true){
if((i__41524_41615 < count__41523_41614)){
var component__5973__auto___41616 = cljs.core._nth.call(null,chunk__41522_41613,i__41524_41615);
speclj.components.install.call(null,component__5973__auto___41616,description__5972__auto____$2);


var G__41617 = seq__41521_41612;
var G__41618 = chunk__41522_41613;
var G__41619 = count__41523_41614;
var G__41620 = (i__41524_41615 + (1));
seq__41521_41612 = G__41617;
chunk__41522_41613 = G__41618;
count__41523_41614 = G__41619;
i__41524_41615 = G__41620;
continue;
} else {
var temp__5735__auto___41621 = cljs.core.seq.call(null,seq__41521_41612);
if(temp__5735__auto___41621){
var seq__41521_41622__$1 = temp__5735__auto___41621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41521_41622__$1)){
var c__4556__auto___41623 = cljs.core.chunk_first.call(null,seq__41521_41622__$1);
var G__41624 = cljs.core.chunk_rest.call(null,seq__41521_41622__$1);
var G__41625 = c__4556__auto___41623;
var G__41626 = cljs.core.count.call(null,c__4556__auto___41623);
var G__41627 = (0);
seq__41521_41612 = G__41624;
chunk__41522_41613 = G__41625;
count__41523_41614 = G__41626;
i__41524_41615 = G__41627;
continue;
} else {
var component__5973__auto___41628 = cljs.core.first.call(null,seq__41521_41622__$1);
speclj.components.install.call(null,component__5973__auto___41628,description__5972__auto____$2);


var G__41629 = cljs.core.next.call(null,seq__41521_41622__$1);
var G__41630 = null;
var G__41631 = (0);
var G__41632 = (0);
seq__41521_41612 = G__41629;
chunk__41522_41613 = G__41630;
count__41523_41614 = G__41631;
i__41524_41615 = G__41632;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41519_41610);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"user-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41525_41633 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41526_41634 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41526_41634);

try{var seq__41527_41635 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"users: ","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41537_41639 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41538_41640 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41538_41640);

try{var seq__41539_41641 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"0",((function (_STAR_parent_description_STAR__orig_val__41537_41639,_STAR_parent_description_STAR__temp_val__41538_41640,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41525_41633,_STAR_parent_description_STAR__temp_val__41526_41634,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(0));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41645 = (0);
var actual__6058__auto___41646 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___41645,actual__6058__auto___41646)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41645 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41645)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41646 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41646))," (using =)"].join('')));
}

var expected__6057__auto___41647 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___41648 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___41647,actual__6058__auto___41648)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41647 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41647)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41648 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41648))," (using =)"].join('')));
}

var expected__6057__auto___41649 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___41650 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___41649,actual__6058__auto___41650)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41649 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41649)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41650 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41650))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41537_41639,_STAR_parent_description_STAR__temp_val__41538_41640,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41525_41633,_STAR_parent_description_STAR__temp_val__41526_41634,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
),speclj.components.new_characteristic.call(null,"1",((function (_STAR_parent_description_STAR__orig_val__41537_41639,_STAR_parent_description_STAR__temp_val__41538_41640,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41525_41633,_STAR_parent_description_STAR__temp_val__41526_41634,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(1));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41651 = (1);
var actual__6058__auto___41652 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___41651,actual__6058__auto___41652)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41651 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41651)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41652 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41652))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player-setup","player-setup",-18534652);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41537_41639,_STAR_parent_description_STAR__temp_val__41538_41640,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41525_41633,_STAR_parent_description_STAR__temp_val__41526_41634,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
),speclj.components.new_characteristic.call(null,"2",((function (_STAR_parent_description_STAR__orig_val__41537_41639,_STAR_parent_description_STAR__temp_val__41538_41640,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41525_41633,_STAR_parent_description_STAR__temp_val__41526_41634,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41653 = (2);
var actual__6058__auto___41654 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___41653,actual__6058__auto___41654)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41653 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41653)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41654 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41654))," (using =)"].join('')));
}

var expected__6057__auto___41655 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___41656 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___41655,actual__6058__auto___41656)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41655 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41655)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41656 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41656))," (using =)"].join('')));
}

var expected__6057__auto___41657 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___41658 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___41657,actual__6058__auto___41658)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41657 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41657)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41658 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41658))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41537_41639,_STAR_parent_description_STAR__temp_val__41538_41640,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41525_41633,_STAR_parent_description_STAR__temp_val__41526_41634,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
)],null)));
var chunk__41540_41642 = null;
var count__41541_41643 = (0);
var i__41542_41644 = (0);
while(true){
if((i__41542_41644 < count__41541_41643)){
var component__5973__auto___41659 = cljs.core._nth.call(null,chunk__41540_41642,i__41542_41644);
speclj.components.install.call(null,component__5973__auto___41659,description__5972__auto____$3);


var G__41660 = seq__41539_41641;
var G__41661 = chunk__41540_41642;
var G__41662 = count__41541_41643;
var G__41663 = (i__41542_41644 + (1));
seq__41539_41641 = G__41660;
chunk__41540_41642 = G__41661;
count__41541_41643 = G__41662;
i__41542_41644 = G__41663;
continue;
} else {
var temp__5735__auto___41664 = cljs.core.seq.call(null,seq__41539_41641);
if(temp__5735__auto___41664){
var seq__41539_41665__$1 = temp__5735__auto___41664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41539_41665__$1)){
var c__4556__auto___41666 = cljs.core.chunk_first.call(null,seq__41539_41665__$1);
var G__41667 = cljs.core.chunk_rest.call(null,seq__41539_41665__$1);
var G__41668 = c__4556__auto___41666;
var G__41669 = cljs.core.count.call(null,c__4556__auto___41666);
var G__41670 = (0);
seq__41539_41641 = G__41667;
chunk__41540_41642 = G__41668;
count__41541_41643 = G__41669;
i__41542_41644 = G__41670;
continue;
} else {
var component__5973__auto___41671 = cljs.core.first.call(null,seq__41539_41665__$1);
speclj.components.install.call(null,component__5973__auto___41671,description__5972__auto____$3);


var G__41672 = cljs.core.next.call(null,seq__41539_41665__$1);
var G__41673 = null;
var G__41674 = (0);
var G__41675 = (0);
seq__41539_41641 = G__41672;
chunk__41540_41642 = G__41673;
count__41541_41643 = G__41674;
i__41542_41644 = G__41675;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41537_41639);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__41528_41636 = null;
var count__41529_41637 = (0);
var i__41530_41638 = (0);
while(true){
if((i__41530_41638 < count__41529_41637)){
var component__5973__auto___41676 = cljs.core._nth.call(null,chunk__41528_41636,i__41530_41638);
speclj.components.install.call(null,component__5973__auto___41676,description__5972__auto____$2);


var G__41677 = seq__41527_41635;
var G__41678 = chunk__41528_41636;
var G__41679 = count__41529_41637;
var G__41680 = (i__41530_41638 + (1));
seq__41527_41635 = G__41677;
chunk__41528_41636 = G__41678;
count__41529_41637 = G__41679;
i__41530_41638 = G__41680;
continue;
} else {
var temp__5735__auto___41681 = cljs.core.seq.call(null,seq__41527_41635);
if(temp__5735__auto___41681){
var seq__41527_41682__$1 = temp__5735__auto___41681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41527_41682__$1)){
var c__4556__auto___41683 = cljs.core.chunk_first.call(null,seq__41527_41682__$1);
var G__41684 = cljs.core.chunk_rest.call(null,seq__41527_41682__$1);
var G__41685 = c__4556__auto___41683;
var G__41686 = cljs.core.count.call(null,c__4556__auto___41683);
var G__41687 = (0);
seq__41527_41635 = G__41684;
chunk__41528_41636 = G__41685;
count__41529_41637 = G__41686;
i__41530_41638 = G__41687;
continue;
} else {
var component__5973__auto___41688 = cljs.core.first.call(null,seq__41527_41682__$1);
speclj.components.install.call(null,component__5973__auto___41688,description__5972__auto____$2);


var G__41689 = cljs.core.next.call(null,seq__41527_41682__$1);
var G__41690 = null;
var G__41691 = (0);
var G__41692 = (0);
seq__41527_41635 = G__41689;
chunk__41528_41636 = G__41690;
count__41529_41637 = G__41691;
i__41530_41638 = G__41692;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41525_41633);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"level-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41543_41693 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41544_41694 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41544_41694);

try{var seq__41545_41695 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"level selected:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41555_41699 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41556_41700 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41556_41700);

try{var seq__41557_41701 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__41555_41699,_STAR_parent_description_STAR__temp_val__41556_41700,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41543_41693,_STAR_parent_description_STAR__temp_val__41544_41694,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"easy");

var click_easy = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41705 = new cljs.core.Keyword(null,"easy","easy",315769928);
var actual__6058__auto___41706 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__6057__auto___41705,actual__6058__auto___41706)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41705 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41705)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41706 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41706))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41555_41699,_STAR_parent_description_STAR__temp_val__41556_41700,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41543_41693,_STAR_parent_description_STAR__temp_val__41544_41694,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__41555_41699,_STAR_parent_description_STAR__temp_val__41556_41700,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41543_41693,_STAR_parent_description_STAR__temp_val__41544_41694,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"medium");

var click_medium = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41707 = new cljs.core.Keyword(null,"medium","medium",-1864319384);
var actual__6058__auto___41708 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__6057__auto___41707,actual__6058__auto___41708)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41707 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41707)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41708 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41708))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41555_41699,_STAR_parent_description_STAR__temp_val__41556_41700,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41543_41693,_STAR_parent_description_STAR__temp_val__41544_41694,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__41555_41699,_STAR_parent_description_STAR__temp_val__41556_41700,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41543_41693,_STAR_parent_description_STAR__temp_val__41544_41694,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"hard");

var click_hard = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41709 = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__6058__auto___41710 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__6057__auto___41709,actual__6058__auto___41710)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41709 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41709)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41710 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41710))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41555_41699,_STAR_parent_description_STAR__temp_val__41556_41700,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41543_41693,_STAR_parent_description_STAR__temp_val__41544_41694,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
)],null)));
var chunk__41558_41702 = null;
var count__41559_41703 = (0);
var i__41560_41704 = (0);
while(true){
if((i__41560_41704 < count__41559_41703)){
var component__5973__auto___41711 = cljs.core._nth.call(null,chunk__41558_41702,i__41560_41704);
speclj.components.install.call(null,component__5973__auto___41711,description__5972__auto____$3);


var G__41712 = seq__41557_41701;
var G__41713 = chunk__41558_41702;
var G__41714 = count__41559_41703;
var G__41715 = (i__41560_41704 + (1));
seq__41557_41701 = G__41712;
chunk__41558_41702 = G__41713;
count__41559_41703 = G__41714;
i__41560_41704 = G__41715;
continue;
} else {
var temp__5735__auto___41716 = cljs.core.seq.call(null,seq__41557_41701);
if(temp__5735__auto___41716){
var seq__41557_41717__$1 = temp__5735__auto___41716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41557_41717__$1)){
var c__4556__auto___41718 = cljs.core.chunk_first.call(null,seq__41557_41717__$1);
var G__41719 = cljs.core.chunk_rest.call(null,seq__41557_41717__$1);
var G__41720 = c__4556__auto___41718;
var G__41721 = cljs.core.count.call(null,c__4556__auto___41718);
var G__41722 = (0);
seq__41557_41701 = G__41719;
chunk__41558_41702 = G__41720;
count__41559_41703 = G__41721;
i__41560_41704 = G__41722;
continue;
} else {
var component__5973__auto___41723 = cljs.core.first.call(null,seq__41557_41717__$1);
speclj.components.install.call(null,component__5973__auto___41723,description__5972__auto____$3);


var G__41724 = cljs.core.next.call(null,seq__41557_41717__$1);
var G__41725 = null;
var G__41726 = (0);
var G__41727 = (0);
seq__41557_41701 = G__41724;
chunk__41558_41702 = G__41725;
count__41559_41703 = G__41726;
i__41560_41704 = G__41727;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41555_41699);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__41546_41696 = null;
var count__41547_41697 = (0);
var i__41548_41698 = (0);
while(true){
if((i__41548_41698 < count__41547_41697)){
var component__5973__auto___41728 = cljs.core._nth.call(null,chunk__41546_41696,i__41548_41698);
speclj.components.install.call(null,component__5973__auto___41728,description__5972__auto____$2);


var G__41729 = seq__41545_41695;
var G__41730 = chunk__41546_41696;
var G__41731 = count__41547_41697;
var G__41732 = (i__41548_41698 + (1));
seq__41545_41695 = G__41729;
chunk__41546_41696 = G__41730;
count__41547_41697 = G__41731;
i__41548_41698 = G__41732;
continue;
} else {
var temp__5735__auto___41733 = cljs.core.seq.call(null,seq__41545_41695);
if(temp__5735__auto___41733){
var seq__41545_41734__$1 = temp__5735__auto___41733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41545_41734__$1)){
var c__4556__auto___41735 = cljs.core.chunk_first.call(null,seq__41545_41734__$1);
var G__41736 = cljs.core.chunk_rest.call(null,seq__41545_41734__$1);
var G__41737 = c__4556__auto___41735;
var G__41738 = cljs.core.count.call(null,c__4556__auto___41735);
var G__41739 = (0);
seq__41545_41695 = G__41736;
chunk__41546_41696 = G__41737;
count__41547_41697 = G__41738;
i__41548_41698 = G__41739;
continue;
} else {
var component__5973__auto___41740 = cljs.core.first.call(null,seq__41545_41734__$1);
speclj.components.install.call(null,component__5973__auto___41740,description__5972__auto____$2);


var G__41741 = cljs.core.next.call(null,seq__41545_41734__$1);
var G__41742 = null;
var G__41743 = (0);
var G__41744 = (0);
seq__41545_41695 = G__41741;
chunk__41546_41696 = G__41742;
count__41547_41697 = G__41743;
i__41548_41698 = G__41744;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41543_41693);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"board-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41561_41745 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41562_41746 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41562_41746);

try{var seq__41563_41747 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"board-size:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41573_41751 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41574_41752 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41574_41752);

try{var seq__41575_41753 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__41573_41751,_STAR_parent_description_STAR__temp_val__41574_41752,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41561_41745,_STAR_parent_description_STAR__temp_val__41562_41746,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(3));

var three_by_three = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41757 = (3);
var actual__6058__auto___41758 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__6057__auto___41757,actual__6058__auto___41758)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41757 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41757)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41758 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41758))," (using =)"].join('')));
}

var expected__6057__auto___41759 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___41760 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__6057__auto___41759,actual__6058__auto___41760)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41759 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41759)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41760 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41760))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41573_41751,_STAR_parent_description_STAR__temp_val__41574_41752,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41561_41745,_STAR_parent_description_STAR__temp_val__41562_41746,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
),speclj.components.new_characteristic.call(null,"2x2 with entry as string",((function (_STAR_parent_description_STAR__orig_val__41573_41751,_STAR_parent_description_STAR__temp_val__41574_41752,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41561_41745,_STAR_parent_description_STAR__temp_val__41562_41746,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var two_by_two = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41761 = (2);
var actual__6058__auto___41762 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__6057__auto___41761,actual__6058__auto___41762)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41761 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41761)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41762 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41762))," (using =)"].join('')));
}

var expected__6057__auto___41763 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null);
var actual__6058__auto___41764 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__6057__auto___41763,actual__6058__auto___41764)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41763 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41763)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41764 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41764))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41573_41751,_STAR_parent_description_STAR__temp_val__41574_41752,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41561_41745,_STAR_parent_description_STAR__temp_val__41562_41746,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
)],null)));
var chunk__41576_41754 = null;
var count__41577_41755 = (0);
var i__41578_41756 = (0);
while(true){
if((i__41578_41756 < count__41577_41755)){
var component__5973__auto___41765 = cljs.core._nth.call(null,chunk__41576_41754,i__41578_41756);
speclj.components.install.call(null,component__5973__auto___41765,description__5972__auto____$3);


var G__41766 = seq__41575_41753;
var G__41767 = chunk__41576_41754;
var G__41768 = count__41577_41755;
var G__41769 = (i__41578_41756 + (1));
seq__41575_41753 = G__41766;
chunk__41576_41754 = G__41767;
count__41577_41755 = G__41768;
i__41578_41756 = G__41769;
continue;
} else {
var temp__5735__auto___41770 = cljs.core.seq.call(null,seq__41575_41753);
if(temp__5735__auto___41770){
var seq__41575_41771__$1 = temp__5735__auto___41770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41575_41771__$1)){
var c__4556__auto___41772 = cljs.core.chunk_first.call(null,seq__41575_41771__$1);
var G__41773 = cljs.core.chunk_rest.call(null,seq__41575_41771__$1);
var G__41774 = c__4556__auto___41772;
var G__41775 = cljs.core.count.call(null,c__4556__auto___41772);
var G__41776 = (0);
seq__41575_41753 = G__41773;
chunk__41576_41754 = G__41774;
count__41577_41755 = G__41775;
i__41578_41756 = G__41776;
continue;
} else {
var component__5973__auto___41777 = cljs.core.first.call(null,seq__41575_41771__$1);
speclj.components.install.call(null,component__5973__auto___41777,description__5972__auto____$3);


var G__41778 = cljs.core.next.call(null,seq__41575_41771__$1);
var G__41779 = null;
var G__41780 = (0);
var G__41781 = (0);
seq__41575_41753 = G__41778;
chunk__41576_41754 = G__41779;
count__41577_41755 = G__41780;
i__41578_41756 = G__41781;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41573_41751);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__41564_41748 = null;
var count__41565_41749 = (0);
var i__41566_41750 = (0);
while(true){
if((i__41566_41750 < count__41565_41749)){
var component__5973__auto___41782 = cljs.core._nth.call(null,chunk__41564_41748,i__41566_41750);
speclj.components.install.call(null,component__5973__auto___41782,description__5972__auto____$2);


var G__41783 = seq__41563_41747;
var G__41784 = chunk__41564_41748;
var G__41785 = count__41565_41749;
var G__41786 = (i__41566_41750 + (1));
seq__41563_41747 = G__41783;
chunk__41564_41748 = G__41784;
count__41565_41749 = G__41785;
i__41566_41750 = G__41786;
continue;
} else {
var temp__5735__auto___41787 = cljs.core.seq.call(null,seq__41563_41747);
if(temp__5735__auto___41787){
var seq__41563_41788__$1 = temp__5735__auto___41787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41563_41788__$1)){
var c__4556__auto___41789 = cljs.core.chunk_first.call(null,seq__41563_41788__$1);
var G__41790 = cljs.core.chunk_rest.call(null,seq__41563_41788__$1);
var G__41791 = c__4556__auto___41789;
var G__41792 = cljs.core.count.call(null,c__4556__auto___41789);
var G__41793 = (0);
seq__41563_41747 = G__41790;
chunk__41564_41748 = G__41791;
count__41565_41749 = G__41792;
i__41566_41750 = G__41793;
continue;
} else {
var component__5973__auto___41794 = cljs.core.first.call(null,seq__41563_41788__$1);
speclj.components.install.call(null,component__5973__auto___41794,description__5972__auto____$2);


var G__41795 = cljs.core.next.call(null,seq__41563_41788__$1);
var G__41796 = null;
var G__41797 = (0);
var G__41798 = (0);
seq__41563_41747 = G__41795;
chunk__41564_41748 = G__41796;
count__41565_41749 = G__41797;
i__41566_41750 = G__41798;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41561_41745);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"player-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41579_41799 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41580_41800 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41580_41800);

try{var seq__41581_41801 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"human selects:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__41591_41805 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__41592_41806 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__41592_41806);

try{var seq__41593_41807 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__41591_41805,_STAR_parent_description_STAR__temp_val__41592_41806,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41579_41799,_STAR_parent_description_STAR__temp_val__41580_41800,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"X");

var click_X = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41811 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___41812 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__6057__auto___41811,actual__6058__auto___41812)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41811 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41811)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41812 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41812))," (using =)"].join('')));
}

var expected__6057__auto___41813 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___41814 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__6057__auto___41813,actual__6058__auto___41814)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41813 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41813)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41814 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41814))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41591_41805,_STAR_parent_description_STAR__temp_val__41592_41806,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41579_41799,_STAR_parent_description_STAR__temp_val__41580_41800,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__41591_41805,_STAR_parent_description_STAR__temp_val__41592_41806,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41579_41799,_STAR_parent_description_STAR__temp_val__41580_41800,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"O");

var click_O = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___41815 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___41816 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__6057__auto___41815,actual__6058__auto___41816)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41815 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41815)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41816 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41816))," (using =)"].join('')));
}

var expected__6057__auto___41817 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___41818 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__6057__auto___41817,actual__6058__auto___41818)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___41817 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___41817)),speclj.platform.endl,"     got: ",(((actual__6058__auto___41818 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___41818))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__41591_41805,_STAR_parent_description_STAR__temp_val__41592_41806,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__41579_41799,_STAR_parent_description_STAR__temp_val__41580_41800,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__41435_41604,_STAR_parent_description_STAR__temp_val__41436_41605,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__41267_41598,_STAR_parent_description_STAR__temp_val__41268_41599,description__5972__auto___41597))
)],null)));
var chunk__41594_41808 = null;
var count__41595_41809 = (0);
var i__41596_41810 = (0);
while(true){
if((i__41596_41810 < count__41595_41809)){
var component__5973__auto___41819 = cljs.core._nth.call(null,chunk__41594_41808,i__41596_41810);
speclj.components.install.call(null,component__5973__auto___41819,description__5972__auto____$3);


var G__41820 = seq__41593_41807;
var G__41821 = chunk__41594_41808;
var G__41822 = count__41595_41809;
var G__41823 = (i__41596_41810 + (1));
seq__41593_41807 = G__41820;
chunk__41594_41808 = G__41821;
count__41595_41809 = G__41822;
i__41596_41810 = G__41823;
continue;
} else {
var temp__5735__auto___41824 = cljs.core.seq.call(null,seq__41593_41807);
if(temp__5735__auto___41824){
var seq__41593_41825__$1 = temp__5735__auto___41824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41593_41825__$1)){
var c__4556__auto___41826 = cljs.core.chunk_first.call(null,seq__41593_41825__$1);
var G__41827 = cljs.core.chunk_rest.call(null,seq__41593_41825__$1);
var G__41828 = c__4556__auto___41826;
var G__41829 = cljs.core.count.call(null,c__4556__auto___41826);
var G__41830 = (0);
seq__41593_41807 = G__41827;
chunk__41594_41808 = G__41828;
count__41595_41809 = G__41829;
i__41596_41810 = G__41830;
continue;
} else {
var component__5973__auto___41831 = cljs.core.first.call(null,seq__41593_41825__$1);
speclj.components.install.call(null,component__5973__auto___41831,description__5972__auto____$3);


var G__41832 = cljs.core.next.call(null,seq__41593_41825__$1);
var G__41833 = null;
var G__41834 = (0);
var G__41835 = (0);
seq__41593_41807 = G__41832;
chunk__41594_41808 = G__41833;
count__41595_41809 = G__41834;
i__41596_41810 = G__41835;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41591_41805);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__41582_41802 = null;
var count__41583_41803 = (0);
var i__41584_41804 = (0);
while(true){
if((i__41584_41804 < count__41583_41803)){
var component__5973__auto___41836 = cljs.core._nth.call(null,chunk__41582_41802,i__41584_41804);
speclj.components.install.call(null,component__5973__auto___41836,description__5972__auto____$2);


var G__41837 = seq__41581_41801;
var G__41838 = chunk__41582_41802;
var G__41839 = count__41583_41803;
var G__41840 = (i__41584_41804 + (1));
seq__41581_41801 = G__41837;
chunk__41582_41802 = G__41838;
count__41583_41803 = G__41839;
i__41584_41804 = G__41840;
continue;
} else {
var temp__5735__auto___41841 = cljs.core.seq.call(null,seq__41581_41801);
if(temp__5735__auto___41841){
var seq__41581_41842__$1 = temp__5735__auto___41841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41581_41842__$1)){
var c__4556__auto___41843 = cljs.core.chunk_first.call(null,seq__41581_41842__$1);
var G__41844 = cljs.core.chunk_rest.call(null,seq__41581_41842__$1);
var G__41845 = c__4556__auto___41843;
var G__41846 = cljs.core.count.call(null,c__4556__auto___41843);
var G__41847 = (0);
seq__41581_41801 = G__41844;
chunk__41582_41802 = G__41845;
count__41583_41803 = G__41846;
i__41584_41804 = G__41847;
continue;
} else {
var component__5973__auto___41848 = cljs.core.first.call(null,seq__41581_41842__$1);
speclj.components.install.call(null,component__5973__auto___41848,description__5972__auto____$2);


var G__41849 = cljs.core.next.call(null,seq__41581_41842__$1);
var G__41850 = null;
var G__41851 = (0);
var G__41852 = (0);
seq__41581_41801 = G__41849;
chunk__41582_41802 = G__41850;
count__41583_41803 = G__41851;
i__41584_41804 = G__41852;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41579_41799);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})()],null)));
var chunk__41438_41607 = null;
var count__41439_41608 = (0);
var i__41440_41609 = (0);
while(true){
if((i__41440_41609 < count__41439_41608)){
var component__5973__auto___41853 = cljs.core._nth.call(null,chunk__41438_41607,i__41440_41609);
speclj.components.install.call(null,component__5973__auto___41853,description__5972__auto____$1);


var G__41854 = seq__41437_41606;
var G__41855 = chunk__41438_41607;
var G__41856 = count__41439_41608;
var G__41857 = (i__41440_41609 + (1));
seq__41437_41606 = G__41854;
chunk__41438_41607 = G__41855;
count__41439_41608 = G__41856;
i__41440_41609 = G__41857;
continue;
} else {
var temp__5735__auto___41858 = cljs.core.seq.call(null,seq__41437_41606);
if(temp__5735__auto___41858){
var seq__41437_41859__$1 = temp__5735__auto___41858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41437_41859__$1)){
var c__4556__auto___41860 = cljs.core.chunk_first.call(null,seq__41437_41859__$1);
var G__41861 = cljs.core.chunk_rest.call(null,seq__41437_41859__$1);
var G__41862 = c__4556__auto___41860;
var G__41863 = cljs.core.count.call(null,c__4556__auto___41860);
var G__41864 = (0);
seq__41437_41606 = G__41861;
chunk__41438_41607 = G__41862;
count__41439_41608 = G__41863;
i__41440_41609 = G__41864;
continue;
} else {
var component__5973__auto___41865 = cljs.core.first.call(null,seq__41437_41859__$1);
speclj.components.install.call(null,component__5973__auto___41865,description__5972__auto____$1);


var G__41866 = cljs.core.next.call(null,seq__41437_41859__$1);
var G__41867 = null;
var G__41868 = (0);
var G__41869 = (0);
seq__41437_41606 = G__41866;
chunk__41438_41607 = G__41867;
count__41439_41608 = G__41868;
i__41440_41609 = G__41869;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41435_41604);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})()],null)));
var chunk__41270_41601 = null;
var count__41271_41602 = (0);
var i__41272_41603 = (0);
while(true){
if((i__41272_41603 < count__41271_41602)){
var component__5973__auto___41870 = cljs.core._nth.call(null,chunk__41270_41601,i__41272_41603);
speclj.components.install.call(null,component__5973__auto___41870,description__5972__auto___41597);


var G__41871 = seq__41269_41600;
var G__41872 = chunk__41270_41601;
var G__41873 = count__41271_41602;
var G__41874 = (i__41272_41603 + (1));
seq__41269_41600 = G__41871;
chunk__41270_41601 = G__41872;
count__41271_41602 = G__41873;
i__41272_41603 = G__41874;
continue;
} else {
var temp__5735__auto___41875 = cljs.core.seq.call(null,seq__41269_41600);
if(temp__5735__auto___41875){
var seq__41269_41876__$1 = temp__5735__auto___41875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41269_41876__$1)){
var c__4556__auto___41877 = cljs.core.chunk_first.call(null,seq__41269_41876__$1);
var G__41878 = cljs.core.chunk_rest.call(null,seq__41269_41876__$1);
var G__41879 = c__4556__auto___41877;
var G__41880 = cljs.core.count.call(null,c__4556__auto___41877);
var G__41881 = (0);
seq__41269_41600 = G__41878;
chunk__41270_41601 = G__41879;
count__41271_41602 = G__41880;
i__41272_41603 = G__41881;
continue;
} else {
var component__5973__auto___41882 = cljs.core.first.call(null,seq__41269_41876__$1);
speclj.components.install.call(null,component__5973__auto___41882,description__5972__auto___41597);


var G__41883 = cljs.core.next.call(null,seq__41269_41876__$1);
var G__41884 = null;
var G__41885 = (0);
var G__41886 = (0);
seq__41269_41600 = G__41883;
chunk__41270_41601 = G__41884;
count__41271_41602 = G__41885;
i__41272_41603 = G__41886;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__41267_41598);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto___41597);
}


//# sourceMappingURL=setup_spec.js.map
