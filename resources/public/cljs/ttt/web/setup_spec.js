// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.master.spec_helper');
goog.require('ttt.master.core');
goog.require('ttt.web.setup');
ttt.web.setup_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__5972__auto___43739 = speclj.components.new_description.call(null,"TTT Setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43409_43740 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43410_43741 = description__5972__auto___43739;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43410_43741);

try{var seq__43411_43742 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"Status","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43577_43746 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43578_43747 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43578_43747);

try{var seq__43579_43748 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"waiting","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43661_43752 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43662_43753 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43662_43753);

try{var seq__43663_43754 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"welcomes at startup",((function (_STAR_parent_description_STAR__orig_val__43661_43752,_STAR_parent_description_STAR__temp_val__43662_43753,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto__ = new cljs.core.Keyword(null,"waiting","waiting",895906735);
var actual__6058__auto__ = status;
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43661_43752,_STAR_parent_description_STAR__temp_val__43662_43753,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
),speclj.components.new_characteristic.call(null,"click start for user-setup",((function (_STAR_parent_description_STAR__orig_val__43661_43752,_STAR_parent_description_STAR__temp_val__43662_43753,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
var game = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto__ = new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43661_43752,_STAR_parent_description_STAR__temp_val__43662_43753,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
)],null)));
var chunk__43664_43755 = null;
var count__43665_43756 = (0);
var i__43666_43757 = (0);
while(true){
if((i__43666_43757 < count__43665_43756)){
var component__5973__auto___43758 = cljs.core._nth.call(null,chunk__43664_43755,i__43666_43757);
speclj.components.install.call(null,component__5973__auto___43758,description__5972__auto____$2);


var G__43759 = seq__43663_43754;
var G__43760 = chunk__43664_43755;
var G__43761 = count__43665_43756;
var G__43762 = (i__43666_43757 + (1));
seq__43663_43754 = G__43759;
chunk__43664_43755 = G__43760;
count__43665_43756 = G__43761;
i__43666_43757 = G__43762;
continue;
} else {
var temp__5735__auto___43763 = cljs.core.seq.call(null,seq__43663_43754);
if(temp__5735__auto___43763){
var seq__43663_43764__$1 = temp__5735__auto___43763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43663_43764__$1)){
var c__4556__auto___43765 = cljs.core.chunk_first.call(null,seq__43663_43764__$1);
var G__43766 = cljs.core.chunk_rest.call(null,seq__43663_43764__$1);
var G__43767 = c__4556__auto___43765;
var G__43768 = cljs.core.count.call(null,c__4556__auto___43765);
var G__43769 = (0);
seq__43663_43754 = G__43766;
chunk__43664_43755 = G__43767;
count__43665_43756 = G__43768;
i__43666_43757 = G__43769;
continue;
} else {
var component__5973__auto___43770 = cljs.core.first.call(null,seq__43663_43764__$1);
speclj.components.install.call(null,component__5973__auto___43770,description__5972__auto____$2);


var G__43771 = cljs.core.next.call(null,seq__43663_43764__$1);
var G__43772 = null;
var G__43773 = (0);
var G__43774 = (0);
seq__43663_43754 = G__43771;
chunk__43664_43755 = G__43772;
count__43665_43756 = G__43773;
i__43666_43757 = G__43774;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43661_43752);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"user-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43667_43775 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43668_43776 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43668_43776);

try{var seq__43669_43777 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"users: ","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43679_43781 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43680_43782 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43680_43782);

try{var seq__43681_43783 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"0",((function (_STAR_parent_description_STAR__orig_val__43679_43781,_STAR_parent_description_STAR__temp_val__43680_43782,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43667_43775,_STAR_parent_description_STAR__temp_val__43668_43776,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(0));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43787 = (0);
var actual__6058__auto___43788 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___43787,actual__6058__auto___43788)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43787 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43787)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43788 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43788))," (using =)"].join('')));
}

var expected__6057__auto___43789 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___43790 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___43789,actual__6058__auto___43790)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43789 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43789)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43790 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43790))," (using =)"].join('')));
}

var expected__6057__auto___43791 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___43792 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___43791,actual__6058__auto___43792)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43791 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43791)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43792 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43792))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43679_43781,_STAR_parent_description_STAR__temp_val__43680_43782,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43667_43775,_STAR_parent_description_STAR__temp_val__43668_43776,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
),speclj.components.new_characteristic.call(null,"1",((function (_STAR_parent_description_STAR__orig_val__43679_43781,_STAR_parent_description_STAR__temp_val__43680_43782,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43667_43775,_STAR_parent_description_STAR__temp_val__43668_43776,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(1));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43793 = (1);
var actual__6058__auto___43794 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___43793,actual__6058__auto___43794)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43793 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43793)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43794 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43794))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player-setup","player-setup",-18534652);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43679_43781,_STAR_parent_description_STAR__temp_val__43680_43782,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43667_43775,_STAR_parent_description_STAR__temp_val__43668_43776,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
),speclj.components.new_characteristic.call(null,"2",((function (_STAR_parent_description_STAR__orig_val__43679_43781,_STAR_parent_description_STAR__temp_val__43680_43782,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43667_43775,_STAR_parent_description_STAR__temp_val__43668_43776,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43795 = (2);
var actual__6058__auto___43796 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___43795,actual__6058__auto___43796)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43795 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43795)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43796 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43796))," (using =)"].join('')));
}

var expected__6057__auto___43797 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___43798 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___43797,actual__6058__auto___43798)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43797 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43797)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43798 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43798))," (using =)"].join('')));
}

var expected__6057__auto___43799 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___43800 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___43799,actual__6058__auto___43800)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43799 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43799)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43800 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43800))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43679_43781,_STAR_parent_description_STAR__temp_val__43680_43782,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43667_43775,_STAR_parent_description_STAR__temp_val__43668_43776,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
)],null)));
var chunk__43682_43784 = null;
var count__43683_43785 = (0);
var i__43684_43786 = (0);
while(true){
if((i__43684_43786 < count__43683_43785)){
var component__5973__auto___43801 = cljs.core._nth.call(null,chunk__43682_43784,i__43684_43786);
speclj.components.install.call(null,component__5973__auto___43801,description__5972__auto____$3);


var G__43802 = seq__43681_43783;
var G__43803 = chunk__43682_43784;
var G__43804 = count__43683_43785;
var G__43805 = (i__43684_43786 + (1));
seq__43681_43783 = G__43802;
chunk__43682_43784 = G__43803;
count__43683_43785 = G__43804;
i__43684_43786 = G__43805;
continue;
} else {
var temp__5735__auto___43806 = cljs.core.seq.call(null,seq__43681_43783);
if(temp__5735__auto___43806){
var seq__43681_43807__$1 = temp__5735__auto___43806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43681_43807__$1)){
var c__4556__auto___43808 = cljs.core.chunk_first.call(null,seq__43681_43807__$1);
var G__43809 = cljs.core.chunk_rest.call(null,seq__43681_43807__$1);
var G__43810 = c__4556__auto___43808;
var G__43811 = cljs.core.count.call(null,c__4556__auto___43808);
var G__43812 = (0);
seq__43681_43783 = G__43809;
chunk__43682_43784 = G__43810;
count__43683_43785 = G__43811;
i__43684_43786 = G__43812;
continue;
} else {
var component__5973__auto___43813 = cljs.core.first.call(null,seq__43681_43807__$1);
speclj.components.install.call(null,component__5973__auto___43813,description__5972__auto____$3);


var G__43814 = cljs.core.next.call(null,seq__43681_43807__$1);
var G__43815 = null;
var G__43816 = (0);
var G__43817 = (0);
seq__43681_43783 = G__43814;
chunk__43682_43784 = G__43815;
count__43683_43785 = G__43816;
i__43684_43786 = G__43817;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43679_43781);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__43670_43778 = null;
var count__43671_43779 = (0);
var i__43672_43780 = (0);
while(true){
if((i__43672_43780 < count__43671_43779)){
var component__5973__auto___43818 = cljs.core._nth.call(null,chunk__43670_43778,i__43672_43780);
speclj.components.install.call(null,component__5973__auto___43818,description__5972__auto____$2);


var G__43819 = seq__43669_43777;
var G__43820 = chunk__43670_43778;
var G__43821 = count__43671_43779;
var G__43822 = (i__43672_43780 + (1));
seq__43669_43777 = G__43819;
chunk__43670_43778 = G__43820;
count__43671_43779 = G__43821;
i__43672_43780 = G__43822;
continue;
} else {
var temp__5735__auto___43823 = cljs.core.seq.call(null,seq__43669_43777);
if(temp__5735__auto___43823){
var seq__43669_43824__$1 = temp__5735__auto___43823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43669_43824__$1)){
var c__4556__auto___43825 = cljs.core.chunk_first.call(null,seq__43669_43824__$1);
var G__43826 = cljs.core.chunk_rest.call(null,seq__43669_43824__$1);
var G__43827 = c__4556__auto___43825;
var G__43828 = cljs.core.count.call(null,c__4556__auto___43825);
var G__43829 = (0);
seq__43669_43777 = G__43826;
chunk__43670_43778 = G__43827;
count__43671_43779 = G__43828;
i__43672_43780 = G__43829;
continue;
} else {
var component__5973__auto___43830 = cljs.core.first.call(null,seq__43669_43824__$1);
speclj.components.install.call(null,component__5973__auto___43830,description__5972__auto____$2);


var G__43831 = cljs.core.next.call(null,seq__43669_43824__$1);
var G__43832 = null;
var G__43833 = (0);
var G__43834 = (0);
seq__43669_43777 = G__43831;
chunk__43670_43778 = G__43832;
count__43671_43779 = G__43833;
i__43672_43780 = G__43834;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43667_43775);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"level-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43685_43835 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43686_43836 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43686_43836);

try{var seq__43687_43837 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"level selected:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43697_43841 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43698_43842 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43698_43842);

try{var seq__43699_43843 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__43697_43841,_STAR_parent_description_STAR__temp_val__43698_43842,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43685_43835,_STAR_parent_description_STAR__temp_val__43686_43836,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"easy");

var click_easy = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43847 = new cljs.core.Keyword(null,"easy","easy",315769928);
var actual__6058__auto___43848 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__6057__auto___43847,actual__6058__auto___43848)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43847 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43847)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43848 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43848))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43697_43841,_STAR_parent_description_STAR__temp_val__43698_43842,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43685_43835,_STAR_parent_description_STAR__temp_val__43686_43836,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__43697_43841,_STAR_parent_description_STAR__temp_val__43698_43842,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43685_43835,_STAR_parent_description_STAR__temp_val__43686_43836,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"medium");

var click_medium = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43849 = new cljs.core.Keyword(null,"medium","medium",-1864319384);
var actual__6058__auto___43850 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__6057__auto___43849,actual__6058__auto___43850)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43849 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43849)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43850 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43850))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43697_43841,_STAR_parent_description_STAR__temp_val__43698_43842,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43685_43835,_STAR_parent_description_STAR__temp_val__43686_43836,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__43697_43841,_STAR_parent_description_STAR__temp_val__43698_43842,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43685_43835,_STAR_parent_description_STAR__temp_val__43686_43836,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"hard");

var click_hard = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43851 = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__6058__auto___43852 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__6057__auto___43851,actual__6058__auto___43852)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43851 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43851)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43852 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43852))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43697_43841,_STAR_parent_description_STAR__temp_val__43698_43842,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43685_43835,_STAR_parent_description_STAR__temp_val__43686_43836,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
)],null)));
var chunk__43700_43844 = null;
var count__43701_43845 = (0);
var i__43702_43846 = (0);
while(true){
if((i__43702_43846 < count__43701_43845)){
var component__5973__auto___43853 = cljs.core._nth.call(null,chunk__43700_43844,i__43702_43846);
speclj.components.install.call(null,component__5973__auto___43853,description__5972__auto____$3);


var G__43854 = seq__43699_43843;
var G__43855 = chunk__43700_43844;
var G__43856 = count__43701_43845;
var G__43857 = (i__43702_43846 + (1));
seq__43699_43843 = G__43854;
chunk__43700_43844 = G__43855;
count__43701_43845 = G__43856;
i__43702_43846 = G__43857;
continue;
} else {
var temp__5735__auto___43858 = cljs.core.seq.call(null,seq__43699_43843);
if(temp__5735__auto___43858){
var seq__43699_43859__$1 = temp__5735__auto___43858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43699_43859__$1)){
var c__4556__auto___43860 = cljs.core.chunk_first.call(null,seq__43699_43859__$1);
var G__43861 = cljs.core.chunk_rest.call(null,seq__43699_43859__$1);
var G__43862 = c__4556__auto___43860;
var G__43863 = cljs.core.count.call(null,c__4556__auto___43860);
var G__43864 = (0);
seq__43699_43843 = G__43861;
chunk__43700_43844 = G__43862;
count__43701_43845 = G__43863;
i__43702_43846 = G__43864;
continue;
} else {
var component__5973__auto___43865 = cljs.core.first.call(null,seq__43699_43859__$1);
speclj.components.install.call(null,component__5973__auto___43865,description__5972__auto____$3);


var G__43866 = cljs.core.next.call(null,seq__43699_43859__$1);
var G__43867 = null;
var G__43868 = (0);
var G__43869 = (0);
seq__43699_43843 = G__43866;
chunk__43700_43844 = G__43867;
count__43701_43845 = G__43868;
i__43702_43846 = G__43869;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43697_43841);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__43688_43838 = null;
var count__43689_43839 = (0);
var i__43690_43840 = (0);
while(true){
if((i__43690_43840 < count__43689_43839)){
var component__5973__auto___43870 = cljs.core._nth.call(null,chunk__43688_43838,i__43690_43840);
speclj.components.install.call(null,component__5973__auto___43870,description__5972__auto____$2);


var G__43871 = seq__43687_43837;
var G__43872 = chunk__43688_43838;
var G__43873 = count__43689_43839;
var G__43874 = (i__43690_43840 + (1));
seq__43687_43837 = G__43871;
chunk__43688_43838 = G__43872;
count__43689_43839 = G__43873;
i__43690_43840 = G__43874;
continue;
} else {
var temp__5735__auto___43875 = cljs.core.seq.call(null,seq__43687_43837);
if(temp__5735__auto___43875){
var seq__43687_43876__$1 = temp__5735__auto___43875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43687_43876__$1)){
var c__4556__auto___43877 = cljs.core.chunk_first.call(null,seq__43687_43876__$1);
var G__43878 = cljs.core.chunk_rest.call(null,seq__43687_43876__$1);
var G__43879 = c__4556__auto___43877;
var G__43880 = cljs.core.count.call(null,c__4556__auto___43877);
var G__43881 = (0);
seq__43687_43837 = G__43878;
chunk__43688_43838 = G__43879;
count__43689_43839 = G__43880;
i__43690_43840 = G__43881;
continue;
} else {
var component__5973__auto___43882 = cljs.core.first.call(null,seq__43687_43876__$1);
speclj.components.install.call(null,component__5973__auto___43882,description__5972__auto____$2);


var G__43883 = cljs.core.next.call(null,seq__43687_43876__$1);
var G__43884 = null;
var G__43885 = (0);
var G__43886 = (0);
seq__43687_43837 = G__43883;
chunk__43688_43838 = G__43884;
count__43689_43839 = G__43885;
i__43690_43840 = G__43886;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43685_43835);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"board-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43703_43887 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43704_43888 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43704_43888);

try{var seq__43705_43889 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"board-size:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43715_43893 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43716_43894 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43716_43894);

try{var seq__43717_43895 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__43715_43893,_STAR_parent_description_STAR__temp_val__43716_43894,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43703_43887,_STAR_parent_description_STAR__temp_val__43704_43888,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(3));

var three_by_three = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43899 = (3);
var actual__6058__auto___43900 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__6057__auto___43899,actual__6058__auto___43900)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43899 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43899)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43900 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43900))," (using =)"].join('')));
}

var expected__6057__auto___43901 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___43902 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__6057__auto___43901,actual__6058__auto___43902)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43901 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43901)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43902 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43902))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43715_43893,_STAR_parent_description_STAR__temp_val__43716_43894,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43703_43887,_STAR_parent_description_STAR__temp_val__43704_43888,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
),speclj.components.new_characteristic.call(null,"2x2 with entry as string",((function (_STAR_parent_description_STAR__orig_val__43715_43893,_STAR_parent_description_STAR__temp_val__43716_43894,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43703_43887,_STAR_parent_description_STAR__temp_val__43704_43888,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var two_by_two = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43903 = (2);
var actual__6058__auto___43904 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__6057__auto___43903,actual__6058__auto___43904)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43903 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43903)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43904 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43904))," (using =)"].join('')));
}

var expected__6057__auto___43905 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null);
var actual__6058__auto___43906 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__6057__auto___43905,actual__6058__auto___43906)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43905 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43905)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43906 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43906))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43715_43893,_STAR_parent_description_STAR__temp_val__43716_43894,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43703_43887,_STAR_parent_description_STAR__temp_val__43704_43888,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
)],null)));
var chunk__43718_43896 = null;
var count__43719_43897 = (0);
var i__43720_43898 = (0);
while(true){
if((i__43720_43898 < count__43719_43897)){
var component__5973__auto___43907 = cljs.core._nth.call(null,chunk__43718_43896,i__43720_43898);
speclj.components.install.call(null,component__5973__auto___43907,description__5972__auto____$3);


var G__43908 = seq__43717_43895;
var G__43909 = chunk__43718_43896;
var G__43910 = count__43719_43897;
var G__43911 = (i__43720_43898 + (1));
seq__43717_43895 = G__43908;
chunk__43718_43896 = G__43909;
count__43719_43897 = G__43910;
i__43720_43898 = G__43911;
continue;
} else {
var temp__5735__auto___43912 = cljs.core.seq.call(null,seq__43717_43895);
if(temp__5735__auto___43912){
var seq__43717_43913__$1 = temp__5735__auto___43912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43717_43913__$1)){
var c__4556__auto___43914 = cljs.core.chunk_first.call(null,seq__43717_43913__$1);
var G__43915 = cljs.core.chunk_rest.call(null,seq__43717_43913__$1);
var G__43916 = c__4556__auto___43914;
var G__43917 = cljs.core.count.call(null,c__4556__auto___43914);
var G__43918 = (0);
seq__43717_43895 = G__43915;
chunk__43718_43896 = G__43916;
count__43719_43897 = G__43917;
i__43720_43898 = G__43918;
continue;
} else {
var component__5973__auto___43919 = cljs.core.first.call(null,seq__43717_43913__$1);
speclj.components.install.call(null,component__5973__auto___43919,description__5972__auto____$3);


var G__43920 = cljs.core.next.call(null,seq__43717_43913__$1);
var G__43921 = null;
var G__43922 = (0);
var G__43923 = (0);
seq__43717_43895 = G__43920;
chunk__43718_43896 = G__43921;
count__43719_43897 = G__43922;
i__43720_43898 = G__43923;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43715_43893);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__43706_43890 = null;
var count__43707_43891 = (0);
var i__43708_43892 = (0);
while(true){
if((i__43708_43892 < count__43707_43891)){
var component__5973__auto___43924 = cljs.core._nth.call(null,chunk__43706_43890,i__43708_43892);
speclj.components.install.call(null,component__5973__auto___43924,description__5972__auto____$2);


var G__43925 = seq__43705_43889;
var G__43926 = chunk__43706_43890;
var G__43927 = count__43707_43891;
var G__43928 = (i__43708_43892 + (1));
seq__43705_43889 = G__43925;
chunk__43706_43890 = G__43926;
count__43707_43891 = G__43927;
i__43708_43892 = G__43928;
continue;
} else {
var temp__5735__auto___43929 = cljs.core.seq.call(null,seq__43705_43889);
if(temp__5735__auto___43929){
var seq__43705_43930__$1 = temp__5735__auto___43929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43705_43930__$1)){
var c__4556__auto___43931 = cljs.core.chunk_first.call(null,seq__43705_43930__$1);
var G__43932 = cljs.core.chunk_rest.call(null,seq__43705_43930__$1);
var G__43933 = c__4556__auto___43931;
var G__43934 = cljs.core.count.call(null,c__4556__auto___43931);
var G__43935 = (0);
seq__43705_43889 = G__43932;
chunk__43706_43890 = G__43933;
count__43707_43891 = G__43934;
i__43708_43892 = G__43935;
continue;
} else {
var component__5973__auto___43936 = cljs.core.first.call(null,seq__43705_43930__$1);
speclj.components.install.call(null,component__5973__auto___43936,description__5972__auto____$2);


var G__43937 = cljs.core.next.call(null,seq__43705_43930__$1);
var G__43938 = null;
var G__43939 = (0);
var G__43940 = (0);
seq__43705_43889 = G__43937;
chunk__43706_43890 = G__43938;
count__43707_43891 = G__43939;
i__43708_43892 = G__43940;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43703_43887);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"player-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43721_43941 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43722_43942 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43722_43942);

try{var seq__43723_43943 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"human selects:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__43733_43947 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__43734_43948 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__43734_43948);

try{var seq__43735_43949 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__43733_43947,_STAR_parent_description_STAR__temp_val__43734_43948,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43721_43941,_STAR_parent_description_STAR__temp_val__43722_43942,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"X");

var click_X = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43953 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___43954 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__6057__auto___43953,actual__6058__auto___43954)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43953 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43953)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43954 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43954))," (using =)"].join('')));
}

var expected__6057__auto___43955 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___43956 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__6057__auto___43955,actual__6058__auto___43956)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43955 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43955)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43956 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43956))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43733_43947,_STAR_parent_description_STAR__temp_val__43734_43948,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43721_43941,_STAR_parent_description_STAR__temp_val__43722_43942,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__43733_43947,_STAR_parent_description_STAR__temp_val__43734_43948,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43721_43941,_STAR_parent_description_STAR__temp_val__43722_43942,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"O");

var click_O = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___43957 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___43958 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__6057__auto___43957,actual__6058__auto___43958)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43957 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43957)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43958 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43958))," (using =)"].join('')));
}

var expected__6057__auto___43959 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___43960 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__6057__auto___43959,actual__6058__auto___43960)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43959 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43959)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43960 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43960))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__43733_43947,_STAR_parent_description_STAR__temp_val__43734_43948,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__43721_43941,_STAR_parent_description_STAR__temp_val__43722_43942,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__43577_43746,_STAR_parent_description_STAR__temp_val__43578_43747,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__43409_43740,_STAR_parent_description_STAR__temp_val__43410_43741,description__5972__auto___43739))
)],null)));
var chunk__43736_43950 = null;
var count__43737_43951 = (0);
var i__43738_43952 = (0);
while(true){
if((i__43738_43952 < count__43737_43951)){
var component__5973__auto___43961 = cljs.core._nth.call(null,chunk__43736_43950,i__43738_43952);
speclj.components.install.call(null,component__5973__auto___43961,description__5972__auto____$3);


var G__43962 = seq__43735_43949;
var G__43963 = chunk__43736_43950;
var G__43964 = count__43737_43951;
var G__43965 = (i__43738_43952 + (1));
seq__43735_43949 = G__43962;
chunk__43736_43950 = G__43963;
count__43737_43951 = G__43964;
i__43738_43952 = G__43965;
continue;
} else {
var temp__5735__auto___43966 = cljs.core.seq.call(null,seq__43735_43949);
if(temp__5735__auto___43966){
var seq__43735_43967__$1 = temp__5735__auto___43966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43735_43967__$1)){
var c__4556__auto___43968 = cljs.core.chunk_first.call(null,seq__43735_43967__$1);
var G__43969 = cljs.core.chunk_rest.call(null,seq__43735_43967__$1);
var G__43970 = c__4556__auto___43968;
var G__43971 = cljs.core.count.call(null,c__4556__auto___43968);
var G__43972 = (0);
seq__43735_43949 = G__43969;
chunk__43736_43950 = G__43970;
count__43737_43951 = G__43971;
i__43738_43952 = G__43972;
continue;
} else {
var component__5973__auto___43973 = cljs.core.first.call(null,seq__43735_43967__$1);
speclj.components.install.call(null,component__5973__auto___43973,description__5972__auto____$3);


var G__43974 = cljs.core.next.call(null,seq__43735_43967__$1);
var G__43975 = null;
var G__43976 = (0);
var G__43977 = (0);
seq__43735_43949 = G__43974;
chunk__43736_43950 = G__43975;
count__43737_43951 = G__43976;
i__43738_43952 = G__43977;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43733_43947);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__43724_43944 = null;
var count__43725_43945 = (0);
var i__43726_43946 = (0);
while(true){
if((i__43726_43946 < count__43725_43945)){
var component__5973__auto___43978 = cljs.core._nth.call(null,chunk__43724_43944,i__43726_43946);
speclj.components.install.call(null,component__5973__auto___43978,description__5972__auto____$2);


var G__43979 = seq__43723_43943;
var G__43980 = chunk__43724_43944;
var G__43981 = count__43725_43945;
var G__43982 = (i__43726_43946 + (1));
seq__43723_43943 = G__43979;
chunk__43724_43944 = G__43980;
count__43725_43945 = G__43981;
i__43726_43946 = G__43982;
continue;
} else {
var temp__5735__auto___43983 = cljs.core.seq.call(null,seq__43723_43943);
if(temp__5735__auto___43983){
var seq__43723_43984__$1 = temp__5735__auto___43983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43723_43984__$1)){
var c__4556__auto___43985 = cljs.core.chunk_first.call(null,seq__43723_43984__$1);
var G__43986 = cljs.core.chunk_rest.call(null,seq__43723_43984__$1);
var G__43987 = c__4556__auto___43985;
var G__43988 = cljs.core.count.call(null,c__4556__auto___43985);
var G__43989 = (0);
seq__43723_43943 = G__43986;
chunk__43724_43944 = G__43987;
count__43725_43945 = G__43988;
i__43726_43946 = G__43989;
continue;
} else {
var component__5973__auto___43990 = cljs.core.first.call(null,seq__43723_43984__$1);
speclj.components.install.call(null,component__5973__auto___43990,description__5972__auto____$2);


var G__43991 = cljs.core.next.call(null,seq__43723_43984__$1);
var G__43992 = null;
var G__43993 = (0);
var G__43994 = (0);
seq__43723_43943 = G__43991;
chunk__43724_43944 = G__43992;
count__43725_43945 = G__43993;
i__43726_43946 = G__43994;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43721_43941);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})()],null)));
var chunk__43580_43749 = null;
var count__43581_43750 = (0);
var i__43582_43751 = (0);
while(true){
if((i__43582_43751 < count__43581_43750)){
var component__5973__auto___43995 = cljs.core._nth.call(null,chunk__43580_43749,i__43582_43751);
speclj.components.install.call(null,component__5973__auto___43995,description__5972__auto____$1);


var G__43996 = seq__43579_43748;
var G__43997 = chunk__43580_43749;
var G__43998 = count__43581_43750;
var G__43999 = (i__43582_43751 + (1));
seq__43579_43748 = G__43996;
chunk__43580_43749 = G__43997;
count__43581_43750 = G__43998;
i__43582_43751 = G__43999;
continue;
} else {
var temp__5735__auto___44000 = cljs.core.seq.call(null,seq__43579_43748);
if(temp__5735__auto___44000){
var seq__43579_44001__$1 = temp__5735__auto___44000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43579_44001__$1)){
var c__4556__auto___44002 = cljs.core.chunk_first.call(null,seq__43579_44001__$1);
var G__44003 = cljs.core.chunk_rest.call(null,seq__43579_44001__$1);
var G__44004 = c__4556__auto___44002;
var G__44005 = cljs.core.count.call(null,c__4556__auto___44002);
var G__44006 = (0);
seq__43579_43748 = G__44003;
chunk__43580_43749 = G__44004;
count__43581_43750 = G__44005;
i__43582_43751 = G__44006;
continue;
} else {
var component__5973__auto___44007 = cljs.core.first.call(null,seq__43579_44001__$1);
speclj.components.install.call(null,component__5973__auto___44007,description__5972__auto____$1);


var G__44008 = cljs.core.next.call(null,seq__43579_44001__$1);
var G__44009 = null;
var G__44010 = (0);
var G__44011 = (0);
seq__43579_43748 = G__44008;
chunk__43580_43749 = G__44009;
count__43581_43750 = G__44010;
i__43582_43751 = G__44011;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43577_43746);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})()],null)));
var chunk__43412_43743 = null;
var count__43413_43744 = (0);
var i__43414_43745 = (0);
while(true){
if((i__43414_43745 < count__43413_43744)){
var component__5973__auto___44012 = cljs.core._nth.call(null,chunk__43412_43743,i__43414_43745);
speclj.components.install.call(null,component__5973__auto___44012,description__5972__auto___43739);


var G__44013 = seq__43411_43742;
var G__44014 = chunk__43412_43743;
var G__44015 = count__43413_43744;
var G__44016 = (i__43414_43745 + (1));
seq__43411_43742 = G__44013;
chunk__43412_43743 = G__44014;
count__43413_43744 = G__44015;
i__43414_43745 = G__44016;
continue;
} else {
var temp__5735__auto___44017 = cljs.core.seq.call(null,seq__43411_43742);
if(temp__5735__auto___44017){
var seq__43411_44018__$1 = temp__5735__auto___44017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43411_44018__$1)){
var c__4556__auto___44019 = cljs.core.chunk_first.call(null,seq__43411_44018__$1);
var G__44020 = cljs.core.chunk_rest.call(null,seq__43411_44018__$1);
var G__44021 = c__4556__auto___44019;
var G__44022 = cljs.core.count.call(null,c__4556__auto___44019);
var G__44023 = (0);
seq__43411_43742 = G__44020;
chunk__43412_43743 = G__44021;
count__43413_43744 = G__44022;
i__43414_43745 = G__44023;
continue;
} else {
var component__5973__auto___44024 = cljs.core.first.call(null,seq__43411_44018__$1);
speclj.components.install.call(null,component__5973__auto___44024,description__5972__auto___43739);


var G__44025 = cljs.core.next.call(null,seq__43411_44018__$1);
var G__44026 = null;
var G__44027 = (0);
var G__44028 = (0);
seq__43411_43742 = G__44025;
chunk__43412_43743 = G__44026;
count__43413_43744 = G__44027;
i__43414_43745 = G__44028;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__43409_43740);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto___43739);
}


//# sourceMappingURL=setup_spec.js.map
