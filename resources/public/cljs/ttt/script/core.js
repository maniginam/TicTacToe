// Compiled by ClojureScript 1.10.773 {}
goog.provide('script.core');
goog.require('cljs.core');
goog.require('sablono.core');
script.core.file_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"restart?","restart?",1861076105),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"waiting","waiting",895906735),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"ready-to-play","ready-to-play",161594201)],["/player-setup.html","/continue?.html","/board-setup.html","/level-setup.html","/index.html","/user-setup.html","/ttt.html","/game-over.html","/ttt.html"]);
if((typeof script !== 'undefined') && (typeof script.core !== 'undefined') && (typeof script.core.app_state !== 'undefined')){
} else {
script.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"waiting","waiting",895906735)], null));
}
cljs.core.println.call(null,cljs.core.deref.call(null,script.core.app_state));
script.core.welcome = (function script$core$welcome(data){
return sablono.core.create_element.call(null,"div",({"className": "welcome"}),sablono.core.create_element.call(null,"h1",null,"Welcome to Tic Tac Toe!"),sablono.core.create_element.call(null,"form",({"action": "/ttt/setup", "method": "get"}),sablono.core.create_element.call(null,"button",({"type": "submit", "formAction": "/ttt/setup", "formMethod": "get"}),"Let's Play!")));
});
script.core.render_BANG_ = (function script$core$render_BANG_(){
return ReactDOM.render(script.core.welcome.call(null,script.core.app_state),document.getElementById("ttt"));
});
cljs.core.add_watch.call(null,script.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return script.core.render_BANG_.call(null);
}));
script.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map
