// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.board.board');
goog.require('cljs.core');
ttt.board.board.player1_piece = "X";
ttt.board.board.player2_piece = "O";
ttt.board.board.pieces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),"X",new cljs.core.Keyword(null,"player2","player2",-226422775),"O"], null);
ttt.board.board.player_nums = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1","player1",-1491573636),(1),new cljs.core.Keyword(null,"player2","player2",-226422775),(2)], null);
ttt.board.board.game_pieces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player1-piece","player1-piece",-1527699560),"X",new cljs.core.Keyword(null,"player2-piece","player2-piece",1696687601),"O"], null);
ttt.board.board.create_board = (function ttt$board$board$create_board(size){
var box_count = (size * size);
var board = cljs.core.vec.call(null,cljs.core.range.call(null,box_count));
return board;
});
ttt.board.board.get_rows = (function ttt$board$board$get_rows(board){
var size = cljs.core.count.call(null,board);
var grid_size = (Math.sqrt(size) | (0));
var rows = (function (){var iter__4529__auto__ = (function ttt$board$board$get_rows_$_iter__55577(s__55578){
return (new cljs.core.LazySeq(null,(function (){
var s__55578__$1 = s__55578;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__55578__$1);
if(temp__5735__auto__){
var s__55578__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55578__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__55578__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__55580 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__55579 = (0);
while(true){
if((i__55579 < size__4528__auto__)){
var row = cljs.core._nth.call(null,c__4527__auto__,i__55579);
cljs.core.chunk_append.call(null,b__55580,cljs.core.subvec.call(null,board,(row * grid_size),((row + (1)) * grid_size)));

var G__55581 = (i__55579 + (1));
i__55579 = G__55581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55580),ttt$board$board$get_rows_$_iter__55577.call(null,cljs.core.chunk_rest.call(null,s__55578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55580),null);
}
} else {
var row = cljs.core.first.call(null,s__55578__$2);
return cljs.core.cons.call(null,cljs.core.subvec.call(null,board,(row * grid_size),((row + (1)) * grid_size)),ttt$board$board$get_rows_$_iter__55577.call(null,cljs.core.rest.call(null,s__55578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),grid_size));
})();
return rows;
});
ttt.board.board.did_row_win_QMARK_ = (function ttt$board$board$did_row_win_QMARK_(board){
var rows = ttt.board.board.get_rows.call(null,board);
var wins_by_row = (function (){var iter__4529__auto__ = (function ttt$board$board$did_row_win_QMARK__$_iter__55583(s__55584){
return (new cljs.core.LazySeq(null,(function (){
var s__55584__$1 = s__55584;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__55584__$1);
if(temp__5735__auto__){
var s__55584__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55584__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__55584__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__55586 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__55585 = (0);
while(true){
if((i__55585 < size__4528__auto__)){
var row = cljs.core._nth.call(null,c__4527__auto__,i__55585);
cljs.core.chunk_append.call(null,b__55586,cljs.core.every_QMARK_.call(null,((function (i__55585,row,c__4527__auto__,size__4528__auto__,b__55586,s__55584__$2,temp__5735__auto__,rows){
return (function (p1__55582_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,row),p1__55582_SHARP_);
});})(i__55585,row,c__4527__auto__,size__4528__auto__,b__55586,s__55584__$2,temp__5735__auto__,rows))
,cljs.core.rest.call(null,row)));

var G__55587 = (i__55585 + (1));
i__55585 = G__55587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55586),ttt$board$board$did_row_win_QMARK__$_iter__55583.call(null,cljs.core.chunk_rest.call(null,s__55584__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55586),null);
}
} else {
var row = cljs.core.first.call(null,s__55584__$2);
return cljs.core.cons.call(null,cljs.core.every_QMARK_.call(null,((function (row,s__55584__$2,temp__5735__auto__,rows){
return (function (p1__55582_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,row),p1__55582_SHARP_);
});})(row,s__55584__$2,temp__5735__auto__,rows))
,cljs.core.rest.call(null,row)),ttt$board$board$did_row_win_QMARK__$_iter__55583.call(null,cljs.core.rest.call(null,s__55584__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,rows);
})();
return (!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.true_QMARK_,wins_by_row))));
});
ttt.board.board.get_columns = (function ttt$board$board$get_columns(board){
var size = cljs.core.count.call(null,board);
var grid_size = (Math.sqrt(size) | (0));
var columns = (function (){var iter__4529__auto__ = (function ttt$board$board$get_columns_$_iter__55589(s__55590){
return (new cljs.core.LazySeq(null,(function (){
var s__55590__$1 = s__55590;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__55590__$1);
if(temp__5735__auto__){
var s__55590__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55590__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__55590__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__55592 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__55591 = (0);
while(true){
if((i__55591 < size__4528__auto__)){
var column = cljs.core._nth.call(null,c__4527__auto__,i__55591);
cljs.core.chunk_append.call(null,b__55592,cljs.core.map.call(null,((function (i__55591,column,c__4527__auto__,size__4528__auto__,b__55592,s__55590__$2,temp__5735__auto__,size,grid_size){
return (function (p1__55588_SHARP_){
return cljs.core.nth.call(null,board,p1__55588_SHARP_);
});})(i__55591,column,c__4527__auto__,size__4528__auto__,b__55592,s__55590__$2,temp__5735__auto__,size,grid_size))
,cljs.core.take.call(null,grid_size,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,grid_size),column))));

var G__55593 = (i__55591 + (1));
i__55591 = G__55593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55592),ttt$board$board$get_columns_$_iter__55589.call(null,cljs.core.chunk_rest.call(null,s__55590__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55592),null);
}
} else {
var column = cljs.core.first.call(null,s__55590__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (column,s__55590__$2,temp__5735__auto__,size,grid_size){
return (function (p1__55588_SHARP_){
return cljs.core.nth.call(null,board,p1__55588_SHARP_);
});})(column,s__55590__$2,temp__5735__auto__,size,grid_size))
,cljs.core.take.call(null,grid_size,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,grid_size),column))),ttt$board$board$get_columns_$_iter__55589.call(null,cljs.core.rest.call(null,s__55590__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),grid_size));
})();
return columns;
});
ttt.board.board.did_col_win_QMARK_ = (function ttt$board$board$did_col_win_QMARK_(board){
var columns = ttt.board.board.get_columns.call(null,board);
var wins_by_col = (function (){var iter__4529__auto__ = (function ttt$board$board$did_col_win_QMARK__$_iter__55595(s__55596){
return (new cljs.core.LazySeq(null,(function (){
var s__55596__$1 = s__55596;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__55596__$1);
if(temp__5735__auto__){
var s__55596__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55596__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__55596__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__55598 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__55597 = (0);
while(true){
if((i__55597 < size__4528__auto__)){
var column = cljs.core._nth.call(null,c__4527__auto__,i__55597);
cljs.core.chunk_append.call(null,b__55598,cljs.core.every_QMARK_.call(null,((function (i__55597,column,c__4527__auto__,size__4528__auto__,b__55598,s__55596__$2,temp__5735__auto__,columns){
return (function (p1__55594_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,column),p1__55594_SHARP_);
});})(i__55597,column,c__4527__auto__,size__4528__auto__,b__55598,s__55596__$2,temp__5735__auto__,columns))
,cljs.core.rest.call(null,column)));

var G__55599 = (i__55597 + (1));
i__55597 = G__55599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55598),ttt$board$board$did_col_win_QMARK__$_iter__55595.call(null,cljs.core.chunk_rest.call(null,s__55596__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55598),null);
}
} else {
var column = cljs.core.first.call(null,s__55596__$2);
return cljs.core.cons.call(null,cljs.core.every_QMARK_.call(null,((function (column,s__55596__$2,temp__5735__auto__,columns){
return (function (p1__55594_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,column),p1__55594_SHARP_);
});})(column,s__55596__$2,temp__5735__auto__,columns))
,cljs.core.rest.call(null,column)),ttt$board$board$did_col_win_QMARK__$_iter__55595.call(null,cljs.core.rest.call(null,s__55596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,columns);
})();
return (!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.true_QMARK_,wins_by_col))));
});
ttt.board.board.get_diagonals = (function ttt$board$board$get_diagonals(board){
var size = cljs.core.count.call(null,board);
var grid_size = (Math.sqrt(size) | (0));
var diagonal1 = cljs.core.map.call(null,(function (p1__55600_SHARP_){
return cljs.core.nth.call(null,board,p1__55600_SHARP_);
}),cljs.core.take.call(null,grid_size,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(grid_size + (1))),(0))));
var diagonal2 = cljs.core.map.call(null,(function (p1__55601_SHARP_){
return cljs.core.nth.call(null,board,p1__55601_SHARP_);
}),cljs.core.take.call(null,grid_size,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(grid_size - (1))),(grid_size - (1)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diagonal1,diagonal2], null);
});
ttt.board.board.get_all_lines = (function ttt$board$board$get_all_lines(board){
var rows = ttt.board.board.get_rows.call(null,board);
var cols = ttt.board.board.get_columns.call(null,board);
var diags = ttt.board.board.get_diagonals.call(null,board);
return cljs.core.concat.call(null,rows,cols,diags);
});
ttt.board.board.line_is_winner_QMARK_ = (function ttt$board$board$line_is_winner_QMARK_(board,line){
var test = cljs.core.nth.call(null,board,cljs.core.first.call(null,line));
var others = cljs.core.map.call(null,(function (p1__55602_SHARP_){
return cljs.core.nth.call(null,board,p1__55602_SHARP_);
}),cljs.core.rest.call(null,line));
return cljs.core.every_QMARK_.call(null,(function (p1__55603_SHARP_){
return cljs.core._EQ_.call(null,test,p1__55603_SHARP_);
}),others);
});
ttt.board.board.get_winning_line = (function ttt$board$board$get_winning_line(board){
var empty_board = ttt.board.board.create_board.call(null,Math.sqrt(cljs.core.count.call(null,board)));
var winning_lines = ttt.board.board.get_all_lines.call(null,empty_board);
var wins = cljs.core.mapcat.call(null,(function (p1__55604_SHARP_){
if(ttt.board.board.line_is_winner_QMARK_.call(null,board,p1__55604_SHARP_)){
return p1__55604_SHARP_;
} else {
return null;
}
}),winning_lines);
return wins;
});
ttt.board.board.did_diagonal_win_QMARK_ = (function ttt$board$board$did_diagonal_win_QMARK_(board){
var diagonals = ttt.board.board.get_diagonals.call(null,board);
var diagonal1 = cljs.core.first.call(null,diagonals);
var diagonal2 = cljs.core.second.call(null,diagonals);
var diag1_win_QMARK_ = cljs.core.every_QMARK_.call(null,(function (p1__55605_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,diagonal1),p1__55605_SHARP_);
}),diagonal1);
var diag2_win_QMARK_ = cljs.core.every_QMARK_.call(null,(function (p1__55606_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,diagonal2),p1__55606_SHARP_);
}),diagonal2);
return ((diag1_win_QMARK_) || (diag2_win_QMARK_));
});
ttt.board.board.is_win_QMARK_ = (function ttt$board$board$is_win_QMARK_(board){
return ((ttt.board.board.did_row_win_QMARK_.call(null,board)) || (ttt.board.board.did_col_win_QMARK_.call(null,board)) || (ttt.board.board.did_diagonal_win_QMARK_.call(null,board)));
});
ttt.board.board.winning_line_index = (function ttt$board$board$winning_line_index(board){
var lines = ttt.board.board.get_all_lines.call(null,board);
var indexes = cljs.core.range.call(null,(0),cljs.core.count.call(null,lines));
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function ttt$board$board$winning_line_index_$_iter__55607(s__55608){
return (new cljs.core.LazySeq(null,(function (){
var s__55608__$1 = s__55608;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__55608__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var line = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__55608__$1,line,xs__6292__auto__,temp__5735__auto__,lines,indexes){
return (function ttt$board$board$winning_line_index_$_iter__55607_$_iter__55609(s__55610){
return (new cljs.core.LazySeq(null,((function (s__55608__$1,line,xs__6292__auto__,temp__5735__auto__,lines,indexes){
return (function (){
var s__55610__$1 = s__55610;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__55610__$1);
if(temp__5735__auto____$1){
var s__55610__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55610__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__55610__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__55612 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__55611 = (0);
while(true){
if((i__55611 < size__4528__auto__)){
var index = cljs.core._nth.call(null,c__4527__auto__,i__55611);
cljs.core.chunk_append.call(null,b__55612,((ttt.board.board.is_win_QMARK_.call(null,line))?index:null));

var G__55613 = (i__55611 + (1));
i__55611 = G__55613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55612),ttt$board$board$winning_line_index_$_iter__55607_$_iter__55609.call(null,cljs.core.chunk_rest.call(null,s__55610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55612),null);
}
} else {
var index = cljs.core.first.call(null,s__55610__$2);
return cljs.core.cons.call(null,((ttt.board.board.is_win_QMARK_.call(null,line))?index:null),ttt$board$board$winning_line_index_$_iter__55607_$_iter__55609.call(null,cljs.core.rest.call(null,s__55610__$2)));
}
} else {
return null;
}
break;
}
});})(s__55608__$1,line,xs__6292__auto__,temp__5735__auto__,lines,indexes))
,null,null));
});})(s__55608__$1,line,xs__6292__auto__,temp__5735__auto__,lines,indexes))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,indexes));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,ttt$board$board$winning_line_index_$_iter__55607.call(null,cljs.core.rest.call(null,s__55608__$1)));
} else {
var G__55614 = cljs.core.rest.call(null,s__55608__$1);
s__55608__$1 = G__55614;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,lines);
})()));
});
ttt.board.board.is_vector_win_QMARK_ = (function ttt$board$board$is_vector_win_QMARK_(row){
return cljs.core.every_QMARK_.call(null,(function (p1__55615_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,row),p1__55615_SHARP_);
}),cljs.core.rest.call(null,row));
});
ttt.board.board.is_winning_move_QMARK_ = (function ttt$board$board$is_winning_move_QMARK_(board){
var rows = ttt.board.board.get_rows.call(null,board);
var columns = ttt.board.board.get_columns.call(null,board);
var diagonals = ttt.board.board.get_diagonals.call(null,board);
return cljs.core.map.call(null,(function (p1__55616_SHARP_,p2__55617_SHARP_){
return cljs.core.filter.call(null,ttt.board.board.is_vector_win_QMARK_.call(null,p1__55616_SHARP_),p2__55617_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,columns,diagonals], null));
});
ttt.board.board.put_piece_on_board = (function ttt$board$board$put_piece_on_board(board,box_played,game_piece){
return cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([box_played,game_piece]),board);
});
ttt.board.board.open_boxes = (function ttt$board$board$open_boxes(board){
return cljs.core.filter.call(null,(function (p1__55618_SHARP_){
return cljs.core.int_QMARK_.call(null,p1__55618_SHARP_);
}),board);
});
ttt.board.board.played_boxes = (function ttt$board$board$played_boxes(board){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__55619_SHARP_,p2__55620_SHARP_){
if((!(cljs.core.int_QMARK_.call(null,p1__55619_SHARP_)))){
return p2__55620_SHARP_;
} else {
return null;
}
}),board,cljs.core.vec.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,board)))));
});
ttt.board.board.full_board_QMARK_ = (function ttt$board$board$full_board_QMARK_(board){
return cljs.core.empty_QMARK_.call(null,ttt.board.board.open_boxes.call(null,board));
});
ttt.board.board.empty_board_QMARK_ = (function ttt$board$board$empty_board_QMARK_(board){
return cljs.core.every_QMARK_.call(null,cljs.core.int_QMARK_,board);
});
ttt.board.board.does_box_exist_QMARK_ = (function ttt$board$board$does_box_exist_QMARK_(box,board){
return (((box >= (0))) && ((box < cljs.core.count.call(null,board))));
});
ttt.board.board.is_box_open_QMARK_ = (function ttt$board$board$is_box_open_QMARK_(board,played_box){
var open_boxes = ttt.board.board.open_boxes.call(null,board);
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [played_box], null),cljs.core.filter.call(null,(function (p1__55621_SHARP_){
return cljs.core._EQ_.call(null,played_box,p1__55621_SHARP_);
}),open_boxes));
});
ttt.board.board.is_good_box_QMARK_ = (function ttt$board$board$is_good_box_QMARK_(board,box){
return ((ttt.board.board.does_box_exist_QMARK_.call(null,box,board)) && (ttt.board.board.is_box_open_QMARK_.call(null,board,box)));
});

//# sourceMappingURL=board.js.map
