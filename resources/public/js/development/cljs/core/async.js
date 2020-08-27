// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23514 = arguments.length;
switch (G__23514) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23515 = (function (f,blockable,meta23516){
this.f = f;
this.blockable = blockable;
this.meta23516 = meta23516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23517,meta23516__$1){
var self__ = this;
var _23517__$1 = this;
return (new cljs.core.async.t_cljs$core$async23515(self__.f,self__.blockable,meta23516__$1));
});

cljs.core.async.t_cljs$core$async23515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23517){
var self__ = this;
var _23517__$1 = this;
return self__.meta23516;
});

cljs.core.async.t_cljs$core$async23515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23516","meta23516",483653184,null)], null);
});

cljs.core.async.t_cljs$core$async23515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23515";

cljs.core.async.t_cljs$core$async23515.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23515");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23515.
 */
cljs.core.async.__GT_t_cljs$core$async23515 = (function cljs$core$async$__GT_t_cljs$core$async23515(f__$1,blockable__$1,meta23516){
return (new cljs.core.async.t_cljs$core$async23515(f__$1,blockable__$1,meta23516));
});

}

return (new cljs.core.async.t_cljs$core$async23515(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23521 = arguments.length;
switch (G__23521) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23524 = arguments.length;
switch (G__23524) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23527 = arguments.length;
switch (G__23527) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23529 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23529);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23529,ret){
return (function (){
return fn1.call(null,val_23529);
});})(val_23529,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23531 = arguments.length;
switch (G__23531) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23533 = n;
var x_23534 = (0);
while(true){
if((x_23534 < n__4607__auto___23533)){
(a[x_23534] = (0));

var G__23535 = (x_23534 + (1));
x_23534 = G__23535;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23536 = (i + (1));
i = G__23536;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23537 = (function (flag,meta23538){
this.flag = flag;
this.meta23538 = meta23538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23539,meta23538__$1){
var self__ = this;
var _23539__$1 = this;
return (new cljs.core.async.t_cljs$core$async23537(self__.flag,meta23538__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23539){
var self__ = this;
var _23539__$1 = this;
return self__.meta23538;
});})(flag))
;

cljs.core.async.t_cljs$core$async23537.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23537.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23538","meta23538",1202450812,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23537";

cljs.core.async.t_cljs$core$async23537.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23537");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23537.
 */
cljs.core.async.__GT_t_cljs$core$async23537 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23537(flag__$1,meta23538){
return (new cljs.core.async.t_cljs$core$async23537(flag__$1,meta23538));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23537(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23540 = (function (flag,cb,meta23541){
this.flag = flag;
this.cb = cb;
this.meta23541 = meta23541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23542,meta23541__$1){
var self__ = this;
var _23542__$1 = this;
return (new cljs.core.async.t_cljs$core$async23540(self__.flag,self__.cb,meta23541__$1));
});

cljs.core.async.t_cljs$core$async23540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23542){
var self__ = this;
var _23542__$1 = this;
return self__.meta23541;
});

cljs.core.async.t_cljs$core$async23540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23541","meta23541",432069458,null)], null);
});

cljs.core.async.t_cljs$core$async23540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23540";

cljs.core.async.t_cljs$core$async23540.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23540");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23540.
 */
cljs.core.async.__GT_t_cljs$core$async23540 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23540(flag__$1,cb__$1,meta23541){
return (new cljs.core.async.t_cljs$core$async23540(flag__$1,cb__$1,meta23541));
});

}

return (new cljs.core.async.t_cljs$core$async23540(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23543_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23544_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23545 = (i + (1));
i = G__23545;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23551 = arguments.length;
var i__4731__auto___23552 = (0);
while(true){
if((i__4731__auto___23552 < len__4730__auto___23551)){
args__4736__auto__.push((arguments[i__4731__auto___23552]));

var G__23553 = (i__4731__auto___23552 + (1));
i__4731__auto___23552 = G__23553;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23548){
var map__23549 = p__23548;
var map__23549__$1 = (((((!((map__23549 == null))))?(((((map__23549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23549):map__23549);
var opts = map__23549__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23546){
var G__23547 = cljs.core.first.call(null,seq23546);
var seq23546__$1 = cljs.core.next.call(null,seq23546);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23547,seq23546__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23555 = arguments.length;
switch (G__23555) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23454__auto___23601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___23601){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___23601){
return (function (state_23579){
var state_val_23580 = (state_23579[(1)]);
if((state_val_23580 === (7))){
var inst_23575 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
var statearr_23581_23602 = state_23579__$1;
(statearr_23581_23602[(2)] = inst_23575);

(statearr_23581_23602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (1))){
var state_23579__$1 = state_23579;
var statearr_23582_23603 = state_23579__$1;
(statearr_23582_23603[(2)] = null);

(statearr_23582_23603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (4))){
var inst_23558 = (state_23579[(7)]);
var inst_23558__$1 = (state_23579[(2)]);
var inst_23559 = (inst_23558__$1 == null);
var state_23579__$1 = (function (){var statearr_23583 = state_23579;
(statearr_23583[(7)] = inst_23558__$1);

return statearr_23583;
})();
if(cljs.core.truth_(inst_23559)){
var statearr_23584_23604 = state_23579__$1;
(statearr_23584_23604[(1)] = (5));

} else {
var statearr_23585_23605 = state_23579__$1;
(statearr_23585_23605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (13))){
var state_23579__$1 = state_23579;
var statearr_23586_23606 = state_23579__$1;
(statearr_23586_23606[(2)] = null);

(statearr_23586_23606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (6))){
var inst_23558 = (state_23579[(7)]);
var state_23579__$1 = state_23579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23579__$1,(11),to,inst_23558);
} else {
if((state_val_23580 === (3))){
var inst_23577 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23579__$1,inst_23577);
} else {
if((state_val_23580 === (12))){
var state_23579__$1 = state_23579;
var statearr_23587_23607 = state_23579__$1;
(statearr_23587_23607[(2)] = null);

(statearr_23587_23607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (2))){
var state_23579__$1 = state_23579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23579__$1,(4),from);
} else {
if((state_val_23580 === (11))){
var inst_23568 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
if(cljs.core.truth_(inst_23568)){
var statearr_23588_23608 = state_23579__$1;
(statearr_23588_23608[(1)] = (12));

} else {
var statearr_23589_23609 = state_23579__$1;
(statearr_23589_23609[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (9))){
var state_23579__$1 = state_23579;
var statearr_23590_23610 = state_23579__$1;
(statearr_23590_23610[(2)] = null);

(statearr_23590_23610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (5))){
var state_23579__$1 = state_23579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23591_23611 = state_23579__$1;
(statearr_23591_23611[(1)] = (8));

} else {
var statearr_23592_23612 = state_23579__$1;
(statearr_23592_23612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (14))){
var inst_23573 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
var statearr_23593_23613 = state_23579__$1;
(statearr_23593_23613[(2)] = inst_23573);

(statearr_23593_23613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (10))){
var inst_23565 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
var statearr_23594_23614 = state_23579__$1;
(statearr_23594_23614[(2)] = inst_23565);

(statearr_23594_23614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (8))){
var inst_23562 = cljs.core.async.close_BANG_.call(null,to);
var state_23579__$1 = state_23579;
var statearr_23595_23615 = state_23579__$1;
(statearr_23595_23615[(2)] = inst_23562);

(statearr_23595_23615[(1)] = (10));


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
});})(c__23454__auto___23601))
;
return ((function (switch__23359__auto__,c__23454__auto___23601){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_23596 = [null,null,null,null,null,null,null,null];
(statearr_23596[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_23596[(1)] = (1));

return statearr_23596;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_23579){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_23579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e23597){if((e23597 instanceof Object)){
var ex__23363__auto__ = e23597;
var statearr_23598_23616 = state_23579;
(statearr_23598_23616[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23617 = state_23579;
state_23579 = G__23617;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_23579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_23579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___23601))
})();
var state__23456__auto__ = (function (){var statearr_23599 = f__23455__auto__.call(null);
(statearr_23599[(6)] = c__23454__auto___23601);

return statearr_23599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___23601))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23618){
var vec__23619 = p__23618;
var v = cljs.core.nth.call(null,vec__23619,(0),null);
var p = cljs.core.nth.call(null,vec__23619,(1),null);
var job = vec__23619;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23454__auto___23790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___23790,res,vec__23619,v,p,job,jobs,results){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___23790,res,vec__23619,v,p,job,jobs,results){
return (function (state_23626){
var state_val_23627 = (state_23626[(1)]);
if((state_val_23627 === (1))){
var state_23626__$1 = state_23626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23626__$1,(2),res,v);
} else {
if((state_val_23627 === (2))){
var inst_23623 = (state_23626[(2)]);
var inst_23624 = cljs.core.async.close_BANG_.call(null,res);
var state_23626__$1 = (function (){var statearr_23628 = state_23626;
(statearr_23628[(7)] = inst_23623);

return statearr_23628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23626__$1,inst_23624);
} else {
return null;
}
}
});})(c__23454__auto___23790,res,vec__23619,v,p,job,jobs,results))
;
return ((function (switch__23359__auto__,c__23454__auto___23790,res,vec__23619,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0 = (function (){
var statearr_23629 = [null,null,null,null,null,null,null,null];
(statearr_23629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__);

(statearr_23629[(1)] = (1));

return statearr_23629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1 = (function (state_23626){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_23626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e23630){if((e23630 instanceof Object)){
var ex__23363__auto__ = e23630;
var statearr_23631_23791 = state_23626;
(statearr_23631_23791[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23792 = state_23626;
state_23626 = G__23792;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = function(state_23626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1.call(this,state_23626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___23790,res,vec__23619,v,p,job,jobs,results))
})();
var state__23456__auto__ = (function (){var statearr_23632 = f__23455__auto__.call(null);
(statearr_23632[(6)] = c__23454__auto___23790);

return statearr_23632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___23790,res,vec__23619,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23633){
var vec__23634 = p__23633;
var v = cljs.core.nth.call(null,vec__23634,(0),null);
var p = cljs.core.nth.call(null,vec__23634,(1),null);
var job = vec__23634;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___23793 = n;
var __23794 = (0);
while(true){
if((__23794 < n__4607__auto___23793)){
var G__23637_23795 = type;
var G__23637_23796__$1 = (((G__23637_23795 instanceof cljs.core.Keyword))?G__23637_23795.fqn:null);
switch (G__23637_23796__$1) {
case "compute":
var c__23454__auto___23798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23794,c__23454__auto___23798,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (__23794,c__23454__auto___23798,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async){
return (function (state_23650){
var state_val_23651 = (state_23650[(1)]);
if((state_val_23651 === (1))){
var state_23650__$1 = state_23650;
var statearr_23652_23799 = state_23650__$1;
(statearr_23652_23799[(2)] = null);

(statearr_23652_23799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (2))){
var state_23650__$1 = state_23650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23650__$1,(4),jobs);
} else {
if((state_val_23651 === (3))){
var inst_23648 = (state_23650[(2)]);
var state_23650__$1 = state_23650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23650__$1,inst_23648);
} else {
if((state_val_23651 === (4))){
var inst_23640 = (state_23650[(2)]);
var inst_23641 = process.call(null,inst_23640);
var state_23650__$1 = state_23650;
if(cljs.core.truth_(inst_23641)){
var statearr_23653_23800 = state_23650__$1;
(statearr_23653_23800[(1)] = (5));

} else {
var statearr_23654_23801 = state_23650__$1;
(statearr_23654_23801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (5))){
var state_23650__$1 = state_23650;
var statearr_23655_23802 = state_23650__$1;
(statearr_23655_23802[(2)] = null);

(statearr_23655_23802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (6))){
var state_23650__$1 = state_23650;
var statearr_23656_23803 = state_23650__$1;
(statearr_23656_23803[(2)] = null);

(statearr_23656_23803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (7))){
var inst_23646 = (state_23650[(2)]);
var state_23650__$1 = state_23650;
var statearr_23657_23804 = state_23650__$1;
(statearr_23657_23804[(2)] = inst_23646);

(statearr_23657_23804[(1)] = (3));


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
});})(__23794,c__23454__auto___23798,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async))
;
return ((function (__23794,switch__23359__auto__,c__23454__auto___23798,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0 = (function (){
var statearr_23658 = [null,null,null,null,null,null,null];
(statearr_23658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__);

(statearr_23658[(1)] = (1));

return statearr_23658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1 = (function (state_23650){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_23650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e23659){if((e23659 instanceof Object)){
var ex__23363__auto__ = e23659;
var statearr_23660_23805 = state_23650;
(statearr_23660_23805[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23806 = state_23650;
state_23650 = G__23806;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = function(state_23650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1.call(this,state_23650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__;
})()
;})(__23794,switch__23359__auto__,c__23454__auto___23798,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async))
})();
var state__23456__auto__ = (function (){var statearr_23661 = f__23455__auto__.call(null);
(statearr_23661[(6)] = c__23454__auto___23798);

return statearr_23661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(__23794,c__23454__auto___23798,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async))
);


break;
case "async":
var c__23454__auto___23807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23794,c__23454__auto___23807,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (__23794,c__23454__auto___23807,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async){
return (function (state_23674){
var state_val_23675 = (state_23674[(1)]);
if((state_val_23675 === (1))){
var state_23674__$1 = state_23674;
var statearr_23676_23808 = state_23674__$1;
(statearr_23676_23808[(2)] = null);

(statearr_23676_23808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (2))){
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23674__$1,(4),jobs);
} else {
if((state_val_23675 === (3))){
var inst_23672 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23674__$1,inst_23672);
} else {
if((state_val_23675 === (4))){
var inst_23664 = (state_23674[(2)]);
var inst_23665 = async.call(null,inst_23664);
var state_23674__$1 = state_23674;
if(cljs.core.truth_(inst_23665)){
var statearr_23677_23809 = state_23674__$1;
(statearr_23677_23809[(1)] = (5));

} else {
var statearr_23678_23810 = state_23674__$1;
(statearr_23678_23810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (5))){
var state_23674__$1 = state_23674;
var statearr_23679_23811 = state_23674__$1;
(statearr_23679_23811[(2)] = null);

(statearr_23679_23811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (6))){
var state_23674__$1 = state_23674;
var statearr_23680_23812 = state_23674__$1;
(statearr_23680_23812[(2)] = null);

(statearr_23680_23812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23675 === (7))){
var inst_23670 = (state_23674[(2)]);
var state_23674__$1 = state_23674;
var statearr_23681_23813 = state_23674__$1;
(statearr_23681_23813[(2)] = inst_23670);

(statearr_23681_23813[(1)] = (3));


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
});})(__23794,c__23454__auto___23807,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async))
;
return ((function (__23794,switch__23359__auto__,c__23454__auto___23807,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0 = (function (){
var statearr_23682 = [null,null,null,null,null,null,null];
(statearr_23682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__);

(statearr_23682[(1)] = (1));

return statearr_23682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1 = (function (state_23674){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_23674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e23683){if((e23683 instanceof Object)){
var ex__23363__auto__ = e23683;
var statearr_23684_23814 = state_23674;
(statearr_23684_23814[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23815 = state_23674;
state_23674 = G__23815;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = function(state_23674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1.call(this,state_23674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__;
})()
;})(__23794,switch__23359__auto__,c__23454__auto___23807,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async))
})();
var state__23456__auto__ = (function (){var statearr_23685 = f__23455__auto__.call(null);
(statearr_23685[(6)] = c__23454__auto___23807);

return statearr_23685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(__23794,c__23454__auto___23807,G__23637_23795,G__23637_23796__$1,n__4607__auto___23793,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23637_23796__$1)].join('')));

}

var G__23816 = (__23794 + (1));
__23794 = G__23816;
continue;
} else {
}
break;
}

var c__23454__auto___23817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___23817,jobs,results,process,async){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___23817,jobs,results,process,async){
return (function (state_23707){
var state_val_23708 = (state_23707[(1)]);
if((state_val_23708 === (7))){
var inst_23703 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
var statearr_23709_23818 = state_23707__$1;
(statearr_23709_23818[(2)] = inst_23703);

(statearr_23709_23818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (1))){
var state_23707__$1 = state_23707;
var statearr_23710_23819 = state_23707__$1;
(statearr_23710_23819[(2)] = null);

(statearr_23710_23819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (4))){
var inst_23688 = (state_23707[(7)]);
var inst_23688__$1 = (state_23707[(2)]);
var inst_23689 = (inst_23688__$1 == null);
var state_23707__$1 = (function (){var statearr_23711 = state_23707;
(statearr_23711[(7)] = inst_23688__$1);

return statearr_23711;
})();
if(cljs.core.truth_(inst_23689)){
var statearr_23712_23820 = state_23707__$1;
(statearr_23712_23820[(1)] = (5));

} else {
var statearr_23713_23821 = state_23707__$1;
(statearr_23713_23821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (6))){
var inst_23688 = (state_23707[(7)]);
var inst_23693 = (state_23707[(8)]);
var inst_23693__$1 = cljs.core.async.chan.call(null,(1));
var inst_23694 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23695 = [inst_23688,inst_23693__$1];
var inst_23696 = (new cljs.core.PersistentVector(null,2,(5),inst_23694,inst_23695,null));
var state_23707__$1 = (function (){var statearr_23714 = state_23707;
(statearr_23714[(8)] = inst_23693__$1);

return statearr_23714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23707__$1,(8),jobs,inst_23696);
} else {
if((state_val_23708 === (3))){
var inst_23705 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23707__$1,inst_23705);
} else {
if((state_val_23708 === (2))){
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23707__$1,(4),from);
} else {
if((state_val_23708 === (9))){
var inst_23700 = (state_23707[(2)]);
var state_23707__$1 = (function (){var statearr_23715 = state_23707;
(statearr_23715[(9)] = inst_23700);

return statearr_23715;
})();
var statearr_23716_23822 = state_23707__$1;
(statearr_23716_23822[(2)] = null);

(statearr_23716_23822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (5))){
var inst_23691 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23707__$1 = state_23707;
var statearr_23717_23823 = state_23707__$1;
(statearr_23717_23823[(2)] = inst_23691);

(statearr_23717_23823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (8))){
var inst_23693 = (state_23707[(8)]);
var inst_23698 = (state_23707[(2)]);
var state_23707__$1 = (function (){var statearr_23718 = state_23707;
(statearr_23718[(10)] = inst_23698);

return statearr_23718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23707__$1,(9),results,inst_23693);
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
});})(c__23454__auto___23817,jobs,results,process,async))
;
return ((function (switch__23359__auto__,c__23454__auto___23817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0 = (function (){
var statearr_23719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__);

(statearr_23719[(1)] = (1));

return statearr_23719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1 = (function (state_23707){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_23707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e23720){if((e23720 instanceof Object)){
var ex__23363__auto__ = e23720;
var statearr_23721_23824 = state_23707;
(statearr_23721_23824[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23825 = state_23707;
state_23707 = G__23825;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = function(state_23707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1.call(this,state_23707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___23817,jobs,results,process,async))
})();
var state__23456__auto__ = (function (){var statearr_23722 = f__23455__auto__.call(null);
(statearr_23722[(6)] = c__23454__auto___23817);

return statearr_23722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___23817,jobs,results,process,async))
);


var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__,jobs,results,process,async){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__,jobs,results,process,async){
return (function (state_23760){
var state_val_23761 = (state_23760[(1)]);
if((state_val_23761 === (7))){
var inst_23756 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
var statearr_23762_23826 = state_23760__$1;
(statearr_23762_23826[(2)] = inst_23756);

(statearr_23762_23826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (20))){
var state_23760__$1 = state_23760;
var statearr_23763_23827 = state_23760__$1;
(statearr_23763_23827[(2)] = null);

(statearr_23763_23827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (1))){
var state_23760__$1 = state_23760;
var statearr_23764_23828 = state_23760__$1;
(statearr_23764_23828[(2)] = null);

(statearr_23764_23828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (4))){
var inst_23725 = (state_23760[(7)]);
var inst_23725__$1 = (state_23760[(2)]);
var inst_23726 = (inst_23725__$1 == null);
var state_23760__$1 = (function (){var statearr_23765 = state_23760;
(statearr_23765[(7)] = inst_23725__$1);

return statearr_23765;
})();
if(cljs.core.truth_(inst_23726)){
var statearr_23766_23829 = state_23760__$1;
(statearr_23766_23829[(1)] = (5));

} else {
var statearr_23767_23830 = state_23760__$1;
(statearr_23767_23830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (15))){
var inst_23738 = (state_23760[(8)]);
var state_23760__$1 = state_23760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23760__$1,(18),to,inst_23738);
} else {
if((state_val_23761 === (21))){
var inst_23751 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
var statearr_23768_23831 = state_23760__$1;
(statearr_23768_23831[(2)] = inst_23751);

(statearr_23768_23831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (13))){
var inst_23753 = (state_23760[(2)]);
var state_23760__$1 = (function (){var statearr_23769 = state_23760;
(statearr_23769[(9)] = inst_23753);

return statearr_23769;
})();
var statearr_23770_23832 = state_23760__$1;
(statearr_23770_23832[(2)] = null);

(statearr_23770_23832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (6))){
var inst_23725 = (state_23760[(7)]);
var state_23760__$1 = state_23760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23760__$1,(11),inst_23725);
} else {
if((state_val_23761 === (17))){
var inst_23746 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
if(cljs.core.truth_(inst_23746)){
var statearr_23771_23833 = state_23760__$1;
(statearr_23771_23833[(1)] = (19));

} else {
var statearr_23772_23834 = state_23760__$1;
(statearr_23772_23834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (3))){
var inst_23758 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23760__$1,inst_23758);
} else {
if((state_val_23761 === (12))){
var inst_23735 = (state_23760[(10)]);
var state_23760__$1 = state_23760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23760__$1,(14),inst_23735);
} else {
if((state_val_23761 === (2))){
var state_23760__$1 = state_23760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23760__$1,(4),results);
} else {
if((state_val_23761 === (19))){
var state_23760__$1 = state_23760;
var statearr_23773_23835 = state_23760__$1;
(statearr_23773_23835[(2)] = null);

(statearr_23773_23835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (11))){
var inst_23735 = (state_23760[(2)]);
var state_23760__$1 = (function (){var statearr_23774 = state_23760;
(statearr_23774[(10)] = inst_23735);

return statearr_23774;
})();
var statearr_23775_23836 = state_23760__$1;
(statearr_23775_23836[(2)] = null);

(statearr_23775_23836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (9))){
var state_23760__$1 = state_23760;
var statearr_23776_23837 = state_23760__$1;
(statearr_23776_23837[(2)] = null);

(statearr_23776_23837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (5))){
var state_23760__$1 = state_23760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23777_23838 = state_23760__$1;
(statearr_23777_23838[(1)] = (8));

} else {
var statearr_23778_23839 = state_23760__$1;
(statearr_23778_23839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (14))){
var inst_23740 = (state_23760[(11)]);
var inst_23738 = (state_23760[(8)]);
var inst_23738__$1 = (state_23760[(2)]);
var inst_23739 = (inst_23738__$1 == null);
var inst_23740__$1 = cljs.core.not.call(null,inst_23739);
var state_23760__$1 = (function (){var statearr_23779 = state_23760;
(statearr_23779[(11)] = inst_23740__$1);

(statearr_23779[(8)] = inst_23738__$1);

return statearr_23779;
})();
if(inst_23740__$1){
var statearr_23780_23840 = state_23760__$1;
(statearr_23780_23840[(1)] = (15));

} else {
var statearr_23781_23841 = state_23760__$1;
(statearr_23781_23841[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (16))){
var inst_23740 = (state_23760[(11)]);
var state_23760__$1 = state_23760;
var statearr_23782_23842 = state_23760__$1;
(statearr_23782_23842[(2)] = inst_23740);

(statearr_23782_23842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (10))){
var inst_23732 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
var statearr_23783_23843 = state_23760__$1;
(statearr_23783_23843[(2)] = inst_23732);

(statearr_23783_23843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (18))){
var inst_23743 = (state_23760[(2)]);
var state_23760__$1 = state_23760;
var statearr_23784_23844 = state_23760__$1;
(statearr_23784_23844[(2)] = inst_23743);

(statearr_23784_23844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23761 === (8))){
var inst_23729 = cljs.core.async.close_BANG_.call(null,to);
var state_23760__$1 = state_23760;
var statearr_23785_23845 = state_23760__$1;
(statearr_23785_23845[(2)] = inst_23729);

(statearr_23785_23845[(1)] = (10));


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
}
}
}
}
});})(c__23454__auto__,jobs,results,process,async))
;
return ((function (switch__23359__auto__,c__23454__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0 = (function (){
var statearr_23786 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__);

(statearr_23786[(1)] = (1));

return statearr_23786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1 = (function (state_23760){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_23760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e23787){if((e23787 instanceof Object)){
var ex__23363__auto__ = e23787;
var statearr_23788_23846 = state_23760;
(statearr_23788_23846[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23847 = state_23760;
state_23760 = G__23847;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__ = function(state_23760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1.call(this,state_23760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__,jobs,results,process,async))
})();
var state__23456__auto__ = (function (){var statearr_23789 = f__23455__auto__.call(null);
(statearr_23789[(6)] = c__23454__auto__);

return statearr_23789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__,jobs,results,process,async))
);

return c__23454__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23849 = arguments.length;
switch (G__23849) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23852 = arguments.length;
switch (G__23852) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23855 = arguments.length;
switch (G__23855) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23454__auto___23904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___23904,tc,fc){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___23904,tc,fc){
return (function (state_23881){
var state_val_23882 = (state_23881[(1)]);
if((state_val_23882 === (7))){
var inst_23877 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23883_23905 = state_23881__$1;
(statearr_23883_23905[(2)] = inst_23877);

(statearr_23883_23905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (1))){
var state_23881__$1 = state_23881;
var statearr_23884_23906 = state_23881__$1;
(statearr_23884_23906[(2)] = null);

(statearr_23884_23906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (4))){
var inst_23858 = (state_23881[(7)]);
var inst_23858__$1 = (state_23881[(2)]);
var inst_23859 = (inst_23858__$1 == null);
var state_23881__$1 = (function (){var statearr_23885 = state_23881;
(statearr_23885[(7)] = inst_23858__$1);

return statearr_23885;
})();
if(cljs.core.truth_(inst_23859)){
var statearr_23886_23907 = state_23881__$1;
(statearr_23886_23907[(1)] = (5));

} else {
var statearr_23887_23908 = state_23881__$1;
(statearr_23887_23908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (13))){
var state_23881__$1 = state_23881;
var statearr_23888_23909 = state_23881__$1;
(statearr_23888_23909[(2)] = null);

(statearr_23888_23909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (6))){
var inst_23858 = (state_23881[(7)]);
var inst_23864 = p.call(null,inst_23858);
var state_23881__$1 = state_23881;
if(cljs.core.truth_(inst_23864)){
var statearr_23889_23910 = state_23881__$1;
(statearr_23889_23910[(1)] = (9));

} else {
var statearr_23890_23911 = state_23881__$1;
(statearr_23890_23911[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (3))){
var inst_23879 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23881__$1,inst_23879);
} else {
if((state_val_23882 === (12))){
var state_23881__$1 = state_23881;
var statearr_23891_23912 = state_23881__$1;
(statearr_23891_23912[(2)] = null);

(statearr_23891_23912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (2))){
var state_23881__$1 = state_23881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23881__$1,(4),ch);
} else {
if((state_val_23882 === (11))){
var inst_23858 = (state_23881[(7)]);
var inst_23868 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23881__$1,(8),inst_23868,inst_23858);
} else {
if((state_val_23882 === (9))){
var state_23881__$1 = state_23881;
var statearr_23892_23913 = state_23881__$1;
(statearr_23892_23913[(2)] = tc);

(statearr_23892_23913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (5))){
var inst_23861 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23862 = cljs.core.async.close_BANG_.call(null,fc);
var state_23881__$1 = (function (){var statearr_23893 = state_23881;
(statearr_23893[(8)] = inst_23861);

return statearr_23893;
})();
var statearr_23894_23914 = state_23881__$1;
(statearr_23894_23914[(2)] = inst_23862);

(statearr_23894_23914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (14))){
var inst_23875 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23895_23915 = state_23881__$1;
(statearr_23895_23915[(2)] = inst_23875);

(statearr_23895_23915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (10))){
var state_23881__$1 = state_23881;
var statearr_23896_23916 = state_23881__$1;
(statearr_23896_23916[(2)] = fc);

(statearr_23896_23916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (8))){
var inst_23870 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
if(cljs.core.truth_(inst_23870)){
var statearr_23897_23917 = state_23881__$1;
(statearr_23897_23917[(1)] = (12));

} else {
var statearr_23898_23918 = state_23881__$1;
(statearr_23898_23918[(1)] = (13));

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
});})(c__23454__auto___23904,tc,fc))
;
return ((function (switch__23359__auto__,c__23454__auto___23904,tc,fc){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_23899 = [null,null,null,null,null,null,null,null,null];
(statearr_23899[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_23899[(1)] = (1));

return statearr_23899;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_23881){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_23881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e23900){if((e23900 instanceof Object)){
var ex__23363__auto__ = e23900;
var statearr_23901_23919 = state_23881;
(statearr_23901_23919[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23920 = state_23881;
state_23881 = G__23920;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_23881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_23881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___23904,tc,fc))
})();
var state__23456__auto__ = (function (){var statearr_23902 = f__23455__auto__.call(null);
(statearr_23902[(6)] = c__23454__auto___23904);

return statearr_23902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___23904,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__){
return (function (state_23941){
var state_val_23942 = (state_23941[(1)]);
if((state_val_23942 === (7))){
var inst_23937 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
var statearr_23943_23961 = state_23941__$1;
(statearr_23943_23961[(2)] = inst_23937);

(statearr_23943_23961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (1))){
var inst_23921 = init;
var state_23941__$1 = (function (){var statearr_23944 = state_23941;
(statearr_23944[(7)] = inst_23921);

return statearr_23944;
})();
var statearr_23945_23962 = state_23941__$1;
(statearr_23945_23962[(2)] = null);

(statearr_23945_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (4))){
var inst_23924 = (state_23941[(8)]);
var inst_23924__$1 = (state_23941[(2)]);
var inst_23925 = (inst_23924__$1 == null);
var state_23941__$1 = (function (){var statearr_23946 = state_23941;
(statearr_23946[(8)] = inst_23924__$1);

return statearr_23946;
})();
if(cljs.core.truth_(inst_23925)){
var statearr_23947_23963 = state_23941__$1;
(statearr_23947_23963[(1)] = (5));

} else {
var statearr_23948_23964 = state_23941__$1;
(statearr_23948_23964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (6))){
var inst_23921 = (state_23941[(7)]);
var inst_23924 = (state_23941[(8)]);
var inst_23928 = (state_23941[(9)]);
var inst_23928__$1 = f.call(null,inst_23921,inst_23924);
var inst_23929 = cljs.core.reduced_QMARK_.call(null,inst_23928__$1);
var state_23941__$1 = (function (){var statearr_23949 = state_23941;
(statearr_23949[(9)] = inst_23928__$1);

return statearr_23949;
})();
if(inst_23929){
var statearr_23950_23965 = state_23941__$1;
(statearr_23950_23965[(1)] = (8));

} else {
var statearr_23951_23966 = state_23941__$1;
(statearr_23951_23966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (3))){
var inst_23939 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23941__$1,inst_23939);
} else {
if((state_val_23942 === (2))){
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23941__$1,(4),ch);
} else {
if((state_val_23942 === (9))){
var inst_23928 = (state_23941[(9)]);
var inst_23921 = inst_23928;
var state_23941__$1 = (function (){var statearr_23952 = state_23941;
(statearr_23952[(7)] = inst_23921);

return statearr_23952;
})();
var statearr_23953_23967 = state_23941__$1;
(statearr_23953_23967[(2)] = null);

(statearr_23953_23967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (5))){
var inst_23921 = (state_23941[(7)]);
var state_23941__$1 = state_23941;
var statearr_23954_23968 = state_23941__$1;
(statearr_23954_23968[(2)] = inst_23921);

(statearr_23954_23968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (10))){
var inst_23935 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
var statearr_23955_23969 = state_23941__$1;
(statearr_23955_23969[(2)] = inst_23935);

(statearr_23955_23969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (8))){
var inst_23928 = (state_23941[(9)]);
var inst_23931 = cljs.core.deref.call(null,inst_23928);
var state_23941__$1 = state_23941;
var statearr_23956_23970 = state_23941__$1;
(statearr_23956_23970[(2)] = inst_23931);

(statearr_23956_23970[(1)] = (10));


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
});})(c__23454__auto__))
;
return ((function (switch__23359__auto__,c__23454__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23360__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23360__auto____0 = (function (){
var statearr_23957 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23957[(0)] = cljs$core$async$reduce_$_state_machine__23360__auto__);

(statearr_23957[(1)] = (1));

return statearr_23957;
});
var cljs$core$async$reduce_$_state_machine__23360__auto____1 = (function (state_23941){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_23941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e23958){if((e23958 instanceof Object)){
var ex__23363__auto__ = e23958;
var statearr_23959_23971 = state_23941;
(statearr_23959_23971[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23972 = state_23941;
state_23941 = G__23972;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23360__auto__ = function(state_23941){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23360__auto____1.call(this,state_23941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23360__auto____0;
cljs$core$async$reduce_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23360__auto____1;
return cljs$core$async$reduce_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__))
})();
var state__23456__auto__ = (function (){var statearr_23960 = f__23455__auto__.call(null);
(statearr_23960[(6)] = c__23454__auto__);

return statearr_23960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__))
);

return c__23454__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__,f__$1){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__,f__$1){
return (function (state_23978){
var state_val_23979 = (state_23978[(1)]);
if((state_val_23979 === (1))){
var inst_23973 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23978__$1 = state_23978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23978__$1,(2),inst_23973);
} else {
if((state_val_23979 === (2))){
var inst_23975 = (state_23978[(2)]);
var inst_23976 = f__$1.call(null,inst_23975);
var state_23978__$1 = state_23978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23978__$1,inst_23976);
} else {
return null;
}
}
});})(c__23454__auto__,f__$1))
;
return ((function (switch__23359__auto__,c__23454__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23360__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23360__auto____0 = (function (){
var statearr_23980 = [null,null,null,null,null,null,null];
(statearr_23980[(0)] = cljs$core$async$transduce_$_state_machine__23360__auto__);

(statearr_23980[(1)] = (1));

return statearr_23980;
});
var cljs$core$async$transduce_$_state_machine__23360__auto____1 = (function (state_23978){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_23978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e23981){if((e23981 instanceof Object)){
var ex__23363__auto__ = e23981;
var statearr_23982_23984 = state_23978;
(statearr_23982_23984[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23985 = state_23978;
state_23978 = G__23985;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23360__auto__ = function(state_23978){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23360__auto____1.call(this,state_23978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23360__auto____0;
cljs$core$async$transduce_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23360__auto____1;
return cljs$core$async$transduce_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__,f__$1))
})();
var state__23456__auto__ = (function (){var statearr_23983 = f__23455__auto__.call(null);
(statearr_23983[(6)] = c__23454__auto__);

return statearr_23983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__,f__$1))
);

return c__23454__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23987 = arguments.length;
switch (G__23987) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__){
return (function (state_24012){
var state_val_24013 = (state_24012[(1)]);
if((state_val_24013 === (7))){
var inst_23994 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24014_24035 = state_24012__$1;
(statearr_24014_24035[(2)] = inst_23994);

(statearr_24014_24035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (1))){
var inst_23988 = cljs.core.seq.call(null,coll);
var inst_23989 = inst_23988;
var state_24012__$1 = (function (){var statearr_24015 = state_24012;
(statearr_24015[(7)] = inst_23989);

return statearr_24015;
})();
var statearr_24016_24036 = state_24012__$1;
(statearr_24016_24036[(2)] = null);

(statearr_24016_24036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (4))){
var inst_23989 = (state_24012[(7)]);
var inst_23992 = cljs.core.first.call(null,inst_23989);
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24012__$1,(7),ch,inst_23992);
} else {
if((state_val_24013 === (13))){
var inst_24006 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24017_24037 = state_24012__$1;
(statearr_24017_24037[(2)] = inst_24006);

(statearr_24017_24037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (6))){
var inst_23997 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
if(cljs.core.truth_(inst_23997)){
var statearr_24018_24038 = state_24012__$1;
(statearr_24018_24038[(1)] = (8));

} else {
var statearr_24019_24039 = state_24012__$1;
(statearr_24019_24039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (3))){
var inst_24010 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24012__$1,inst_24010);
} else {
if((state_val_24013 === (12))){
var state_24012__$1 = state_24012;
var statearr_24020_24040 = state_24012__$1;
(statearr_24020_24040[(2)] = null);

(statearr_24020_24040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (2))){
var inst_23989 = (state_24012[(7)]);
var state_24012__$1 = state_24012;
if(cljs.core.truth_(inst_23989)){
var statearr_24021_24041 = state_24012__$1;
(statearr_24021_24041[(1)] = (4));

} else {
var statearr_24022_24042 = state_24012__$1;
(statearr_24022_24042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (11))){
var inst_24003 = cljs.core.async.close_BANG_.call(null,ch);
var state_24012__$1 = state_24012;
var statearr_24023_24043 = state_24012__$1;
(statearr_24023_24043[(2)] = inst_24003);

(statearr_24023_24043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (9))){
var state_24012__$1 = state_24012;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24024_24044 = state_24012__$1;
(statearr_24024_24044[(1)] = (11));

} else {
var statearr_24025_24045 = state_24012__$1;
(statearr_24025_24045[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (5))){
var inst_23989 = (state_24012[(7)]);
var state_24012__$1 = state_24012;
var statearr_24026_24046 = state_24012__$1;
(statearr_24026_24046[(2)] = inst_23989);

(statearr_24026_24046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (10))){
var inst_24008 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24027_24047 = state_24012__$1;
(statearr_24027_24047[(2)] = inst_24008);

(statearr_24027_24047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (8))){
var inst_23989 = (state_24012[(7)]);
var inst_23999 = cljs.core.next.call(null,inst_23989);
var inst_23989__$1 = inst_23999;
var state_24012__$1 = (function (){var statearr_24028 = state_24012;
(statearr_24028[(7)] = inst_23989__$1);

return statearr_24028;
})();
var statearr_24029_24048 = state_24012__$1;
(statearr_24029_24048[(2)] = null);

(statearr_24029_24048[(1)] = (2));


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
});})(c__23454__auto__))
;
return ((function (switch__23359__auto__,c__23454__auto__){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_24030 = [null,null,null,null,null,null,null,null];
(statearr_24030[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_24030[(1)] = (1));

return statearr_24030;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_24012){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_24012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e24031){if((e24031 instanceof Object)){
var ex__23363__auto__ = e24031;
var statearr_24032_24049 = state_24012;
(statearr_24032_24049[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24050 = state_24012;
state_24012 = G__24050;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_24012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_24012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__))
})();
var state__23456__auto__ = (function (){var statearr_24033 = f__23455__auto__.call(null);
(statearr_24033[(6)] = c__23454__auto__);

return statearr_24033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__))
);

return c__23454__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24051 = (function (ch,cs,meta24052){
this.ch = ch;
this.cs = cs;
this.meta24052 = meta24052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24053,meta24052__$1){
var self__ = this;
var _24053__$1 = this;
return (new cljs.core.async.t_cljs$core$async24051(self__.ch,self__.cs,meta24052__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24053){
var self__ = this;
var _24053__$1 = this;
return self__.meta24052;
});})(cs))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24051.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24052","meta24052",878447799,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24051";

cljs.core.async.t_cljs$core$async24051.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24051");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24051.
 */
cljs.core.async.__GT_t_cljs$core$async24051 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24051(ch__$1,cs__$1,meta24052){
return (new cljs.core.async.t_cljs$core$async24051(ch__$1,cs__$1,meta24052));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24051(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23454__auto___24273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___24273,cs,m,dchan,dctr,done){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___24273,cs,m,dchan,dctr,done){
return (function (state_24188){
var state_val_24189 = (state_24188[(1)]);
if((state_val_24189 === (7))){
var inst_24184 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
var statearr_24190_24274 = state_24188__$1;
(statearr_24190_24274[(2)] = inst_24184);

(statearr_24190_24274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (20))){
var inst_24087 = (state_24188[(7)]);
var inst_24099 = cljs.core.first.call(null,inst_24087);
var inst_24100 = cljs.core.nth.call(null,inst_24099,(0),null);
var inst_24101 = cljs.core.nth.call(null,inst_24099,(1),null);
var state_24188__$1 = (function (){var statearr_24191 = state_24188;
(statearr_24191[(8)] = inst_24100);

return statearr_24191;
})();
if(cljs.core.truth_(inst_24101)){
var statearr_24192_24275 = state_24188__$1;
(statearr_24192_24275[(1)] = (22));

} else {
var statearr_24193_24276 = state_24188__$1;
(statearr_24193_24276[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (27))){
var inst_24056 = (state_24188[(9)]);
var inst_24131 = (state_24188[(10)]);
var inst_24129 = (state_24188[(11)]);
var inst_24136 = (state_24188[(12)]);
var inst_24136__$1 = cljs.core._nth.call(null,inst_24129,inst_24131);
var inst_24137 = cljs.core.async.put_BANG_.call(null,inst_24136__$1,inst_24056,done);
var state_24188__$1 = (function (){var statearr_24194 = state_24188;
(statearr_24194[(12)] = inst_24136__$1);

return statearr_24194;
})();
if(cljs.core.truth_(inst_24137)){
var statearr_24195_24277 = state_24188__$1;
(statearr_24195_24277[(1)] = (30));

} else {
var statearr_24196_24278 = state_24188__$1;
(statearr_24196_24278[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (1))){
var state_24188__$1 = state_24188;
var statearr_24197_24279 = state_24188__$1;
(statearr_24197_24279[(2)] = null);

(statearr_24197_24279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (24))){
var inst_24087 = (state_24188[(7)]);
var inst_24106 = (state_24188[(2)]);
var inst_24107 = cljs.core.next.call(null,inst_24087);
var inst_24065 = inst_24107;
var inst_24066 = null;
var inst_24067 = (0);
var inst_24068 = (0);
var state_24188__$1 = (function (){var statearr_24198 = state_24188;
(statearr_24198[(13)] = inst_24068);

(statearr_24198[(14)] = inst_24065);

(statearr_24198[(15)] = inst_24066);

(statearr_24198[(16)] = inst_24106);

(statearr_24198[(17)] = inst_24067);

return statearr_24198;
})();
var statearr_24199_24280 = state_24188__$1;
(statearr_24199_24280[(2)] = null);

(statearr_24199_24280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (39))){
var state_24188__$1 = state_24188;
var statearr_24203_24281 = state_24188__$1;
(statearr_24203_24281[(2)] = null);

(statearr_24203_24281[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (4))){
var inst_24056 = (state_24188[(9)]);
var inst_24056__$1 = (state_24188[(2)]);
var inst_24057 = (inst_24056__$1 == null);
var state_24188__$1 = (function (){var statearr_24204 = state_24188;
(statearr_24204[(9)] = inst_24056__$1);

return statearr_24204;
})();
if(cljs.core.truth_(inst_24057)){
var statearr_24205_24282 = state_24188__$1;
(statearr_24205_24282[(1)] = (5));

} else {
var statearr_24206_24283 = state_24188__$1;
(statearr_24206_24283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (15))){
var inst_24068 = (state_24188[(13)]);
var inst_24065 = (state_24188[(14)]);
var inst_24066 = (state_24188[(15)]);
var inst_24067 = (state_24188[(17)]);
var inst_24083 = (state_24188[(2)]);
var inst_24084 = (inst_24068 + (1));
var tmp24200 = inst_24065;
var tmp24201 = inst_24066;
var tmp24202 = inst_24067;
var inst_24065__$1 = tmp24200;
var inst_24066__$1 = tmp24201;
var inst_24067__$1 = tmp24202;
var inst_24068__$1 = inst_24084;
var state_24188__$1 = (function (){var statearr_24207 = state_24188;
(statearr_24207[(18)] = inst_24083);

(statearr_24207[(13)] = inst_24068__$1);

(statearr_24207[(14)] = inst_24065__$1);

(statearr_24207[(15)] = inst_24066__$1);

(statearr_24207[(17)] = inst_24067__$1);

return statearr_24207;
})();
var statearr_24208_24284 = state_24188__$1;
(statearr_24208_24284[(2)] = null);

(statearr_24208_24284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (21))){
var inst_24110 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
var statearr_24212_24285 = state_24188__$1;
(statearr_24212_24285[(2)] = inst_24110);

(statearr_24212_24285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (31))){
var inst_24136 = (state_24188[(12)]);
var inst_24140 = done.call(null,null);
var inst_24141 = cljs.core.async.untap_STAR_.call(null,m,inst_24136);
var state_24188__$1 = (function (){var statearr_24213 = state_24188;
(statearr_24213[(19)] = inst_24140);

return statearr_24213;
})();
var statearr_24214_24286 = state_24188__$1;
(statearr_24214_24286[(2)] = inst_24141);

(statearr_24214_24286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (32))){
var inst_24128 = (state_24188[(20)]);
var inst_24131 = (state_24188[(10)]);
var inst_24129 = (state_24188[(11)]);
var inst_24130 = (state_24188[(21)]);
var inst_24143 = (state_24188[(2)]);
var inst_24144 = (inst_24131 + (1));
var tmp24209 = inst_24128;
var tmp24210 = inst_24129;
var tmp24211 = inst_24130;
var inst_24128__$1 = tmp24209;
var inst_24129__$1 = tmp24210;
var inst_24130__$1 = tmp24211;
var inst_24131__$1 = inst_24144;
var state_24188__$1 = (function (){var statearr_24215 = state_24188;
(statearr_24215[(20)] = inst_24128__$1);

(statearr_24215[(10)] = inst_24131__$1);

(statearr_24215[(11)] = inst_24129__$1);

(statearr_24215[(22)] = inst_24143);

(statearr_24215[(21)] = inst_24130__$1);

return statearr_24215;
})();
var statearr_24216_24287 = state_24188__$1;
(statearr_24216_24287[(2)] = null);

(statearr_24216_24287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (40))){
var inst_24156 = (state_24188[(23)]);
var inst_24160 = done.call(null,null);
var inst_24161 = cljs.core.async.untap_STAR_.call(null,m,inst_24156);
var state_24188__$1 = (function (){var statearr_24217 = state_24188;
(statearr_24217[(24)] = inst_24160);

return statearr_24217;
})();
var statearr_24218_24288 = state_24188__$1;
(statearr_24218_24288[(2)] = inst_24161);

(statearr_24218_24288[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (33))){
var inst_24147 = (state_24188[(25)]);
var inst_24149 = cljs.core.chunked_seq_QMARK_.call(null,inst_24147);
var state_24188__$1 = state_24188;
if(inst_24149){
var statearr_24219_24289 = state_24188__$1;
(statearr_24219_24289[(1)] = (36));

} else {
var statearr_24220_24290 = state_24188__$1;
(statearr_24220_24290[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (13))){
var inst_24077 = (state_24188[(26)]);
var inst_24080 = cljs.core.async.close_BANG_.call(null,inst_24077);
var state_24188__$1 = state_24188;
var statearr_24221_24291 = state_24188__$1;
(statearr_24221_24291[(2)] = inst_24080);

(statearr_24221_24291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (22))){
var inst_24100 = (state_24188[(8)]);
var inst_24103 = cljs.core.async.close_BANG_.call(null,inst_24100);
var state_24188__$1 = state_24188;
var statearr_24222_24292 = state_24188__$1;
(statearr_24222_24292[(2)] = inst_24103);

(statearr_24222_24292[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (36))){
var inst_24147 = (state_24188[(25)]);
var inst_24151 = cljs.core.chunk_first.call(null,inst_24147);
var inst_24152 = cljs.core.chunk_rest.call(null,inst_24147);
var inst_24153 = cljs.core.count.call(null,inst_24151);
var inst_24128 = inst_24152;
var inst_24129 = inst_24151;
var inst_24130 = inst_24153;
var inst_24131 = (0);
var state_24188__$1 = (function (){var statearr_24223 = state_24188;
(statearr_24223[(20)] = inst_24128);

(statearr_24223[(10)] = inst_24131);

(statearr_24223[(11)] = inst_24129);

(statearr_24223[(21)] = inst_24130);

return statearr_24223;
})();
var statearr_24224_24293 = state_24188__$1;
(statearr_24224_24293[(2)] = null);

(statearr_24224_24293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (41))){
var inst_24147 = (state_24188[(25)]);
var inst_24163 = (state_24188[(2)]);
var inst_24164 = cljs.core.next.call(null,inst_24147);
var inst_24128 = inst_24164;
var inst_24129 = null;
var inst_24130 = (0);
var inst_24131 = (0);
var state_24188__$1 = (function (){var statearr_24225 = state_24188;
(statearr_24225[(20)] = inst_24128);

(statearr_24225[(27)] = inst_24163);

(statearr_24225[(10)] = inst_24131);

(statearr_24225[(11)] = inst_24129);

(statearr_24225[(21)] = inst_24130);

return statearr_24225;
})();
var statearr_24226_24294 = state_24188__$1;
(statearr_24226_24294[(2)] = null);

(statearr_24226_24294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (43))){
var state_24188__$1 = state_24188;
var statearr_24227_24295 = state_24188__$1;
(statearr_24227_24295[(2)] = null);

(statearr_24227_24295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (29))){
var inst_24172 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
var statearr_24228_24296 = state_24188__$1;
(statearr_24228_24296[(2)] = inst_24172);

(statearr_24228_24296[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (44))){
var inst_24181 = (state_24188[(2)]);
var state_24188__$1 = (function (){var statearr_24229 = state_24188;
(statearr_24229[(28)] = inst_24181);

return statearr_24229;
})();
var statearr_24230_24297 = state_24188__$1;
(statearr_24230_24297[(2)] = null);

(statearr_24230_24297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (6))){
var inst_24120 = (state_24188[(29)]);
var inst_24119 = cljs.core.deref.call(null,cs);
var inst_24120__$1 = cljs.core.keys.call(null,inst_24119);
var inst_24121 = cljs.core.count.call(null,inst_24120__$1);
var inst_24122 = cljs.core.reset_BANG_.call(null,dctr,inst_24121);
var inst_24127 = cljs.core.seq.call(null,inst_24120__$1);
var inst_24128 = inst_24127;
var inst_24129 = null;
var inst_24130 = (0);
var inst_24131 = (0);
var state_24188__$1 = (function (){var statearr_24231 = state_24188;
(statearr_24231[(20)] = inst_24128);

(statearr_24231[(10)] = inst_24131);

(statearr_24231[(11)] = inst_24129);

(statearr_24231[(29)] = inst_24120__$1);

(statearr_24231[(30)] = inst_24122);

(statearr_24231[(21)] = inst_24130);

return statearr_24231;
})();
var statearr_24232_24298 = state_24188__$1;
(statearr_24232_24298[(2)] = null);

(statearr_24232_24298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (28))){
var inst_24128 = (state_24188[(20)]);
var inst_24147 = (state_24188[(25)]);
var inst_24147__$1 = cljs.core.seq.call(null,inst_24128);
var state_24188__$1 = (function (){var statearr_24233 = state_24188;
(statearr_24233[(25)] = inst_24147__$1);

return statearr_24233;
})();
if(inst_24147__$1){
var statearr_24234_24299 = state_24188__$1;
(statearr_24234_24299[(1)] = (33));

} else {
var statearr_24235_24300 = state_24188__$1;
(statearr_24235_24300[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (25))){
var inst_24131 = (state_24188[(10)]);
var inst_24130 = (state_24188[(21)]);
var inst_24133 = (inst_24131 < inst_24130);
var inst_24134 = inst_24133;
var state_24188__$1 = state_24188;
if(cljs.core.truth_(inst_24134)){
var statearr_24236_24301 = state_24188__$1;
(statearr_24236_24301[(1)] = (27));

} else {
var statearr_24237_24302 = state_24188__$1;
(statearr_24237_24302[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (34))){
var state_24188__$1 = state_24188;
var statearr_24238_24303 = state_24188__$1;
(statearr_24238_24303[(2)] = null);

(statearr_24238_24303[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (17))){
var state_24188__$1 = state_24188;
var statearr_24239_24304 = state_24188__$1;
(statearr_24239_24304[(2)] = null);

(statearr_24239_24304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (3))){
var inst_24186 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24188__$1,inst_24186);
} else {
if((state_val_24189 === (12))){
var inst_24115 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
var statearr_24240_24305 = state_24188__$1;
(statearr_24240_24305[(2)] = inst_24115);

(statearr_24240_24305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (2))){
var state_24188__$1 = state_24188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24188__$1,(4),ch);
} else {
if((state_val_24189 === (23))){
var state_24188__$1 = state_24188;
var statearr_24241_24306 = state_24188__$1;
(statearr_24241_24306[(2)] = null);

(statearr_24241_24306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (35))){
var inst_24170 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
var statearr_24242_24307 = state_24188__$1;
(statearr_24242_24307[(2)] = inst_24170);

(statearr_24242_24307[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (19))){
var inst_24087 = (state_24188[(7)]);
var inst_24091 = cljs.core.chunk_first.call(null,inst_24087);
var inst_24092 = cljs.core.chunk_rest.call(null,inst_24087);
var inst_24093 = cljs.core.count.call(null,inst_24091);
var inst_24065 = inst_24092;
var inst_24066 = inst_24091;
var inst_24067 = inst_24093;
var inst_24068 = (0);
var state_24188__$1 = (function (){var statearr_24243 = state_24188;
(statearr_24243[(13)] = inst_24068);

(statearr_24243[(14)] = inst_24065);

(statearr_24243[(15)] = inst_24066);

(statearr_24243[(17)] = inst_24067);

return statearr_24243;
})();
var statearr_24244_24308 = state_24188__$1;
(statearr_24244_24308[(2)] = null);

(statearr_24244_24308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (11))){
var inst_24065 = (state_24188[(14)]);
var inst_24087 = (state_24188[(7)]);
var inst_24087__$1 = cljs.core.seq.call(null,inst_24065);
var state_24188__$1 = (function (){var statearr_24245 = state_24188;
(statearr_24245[(7)] = inst_24087__$1);

return statearr_24245;
})();
if(inst_24087__$1){
var statearr_24246_24309 = state_24188__$1;
(statearr_24246_24309[(1)] = (16));

} else {
var statearr_24247_24310 = state_24188__$1;
(statearr_24247_24310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (9))){
var inst_24117 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
var statearr_24248_24311 = state_24188__$1;
(statearr_24248_24311[(2)] = inst_24117);

(statearr_24248_24311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (5))){
var inst_24063 = cljs.core.deref.call(null,cs);
var inst_24064 = cljs.core.seq.call(null,inst_24063);
var inst_24065 = inst_24064;
var inst_24066 = null;
var inst_24067 = (0);
var inst_24068 = (0);
var state_24188__$1 = (function (){var statearr_24249 = state_24188;
(statearr_24249[(13)] = inst_24068);

(statearr_24249[(14)] = inst_24065);

(statearr_24249[(15)] = inst_24066);

(statearr_24249[(17)] = inst_24067);

return statearr_24249;
})();
var statearr_24250_24312 = state_24188__$1;
(statearr_24250_24312[(2)] = null);

(statearr_24250_24312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (14))){
var state_24188__$1 = state_24188;
var statearr_24251_24313 = state_24188__$1;
(statearr_24251_24313[(2)] = null);

(statearr_24251_24313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (45))){
var inst_24178 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
var statearr_24252_24314 = state_24188__$1;
(statearr_24252_24314[(2)] = inst_24178);

(statearr_24252_24314[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (26))){
var inst_24120 = (state_24188[(29)]);
var inst_24174 = (state_24188[(2)]);
var inst_24175 = cljs.core.seq.call(null,inst_24120);
var state_24188__$1 = (function (){var statearr_24253 = state_24188;
(statearr_24253[(31)] = inst_24174);

return statearr_24253;
})();
if(inst_24175){
var statearr_24254_24315 = state_24188__$1;
(statearr_24254_24315[(1)] = (42));

} else {
var statearr_24255_24316 = state_24188__$1;
(statearr_24255_24316[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (16))){
var inst_24087 = (state_24188[(7)]);
var inst_24089 = cljs.core.chunked_seq_QMARK_.call(null,inst_24087);
var state_24188__$1 = state_24188;
if(inst_24089){
var statearr_24256_24317 = state_24188__$1;
(statearr_24256_24317[(1)] = (19));

} else {
var statearr_24257_24318 = state_24188__$1;
(statearr_24257_24318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (38))){
var inst_24167 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
var statearr_24258_24319 = state_24188__$1;
(statearr_24258_24319[(2)] = inst_24167);

(statearr_24258_24319[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (30))){
var state_24188__$1 = state_24188;
var statearr_24259_24320 = state_24188__$1;
(statearr_24259_24320[(2)] = null);

(statearr_24259_24320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (10))){
var inst_24068 = (state_24188[(13)]);
var inst_24066 = (state_24188[(15)]);
var inst_24076 = cljs.core._nth.call(null,inst_24066,inst_24068);
var inst_24077 = cljs.core.nth.call(null,inst_24076,(0),null);
var inst_24078 = cljs.core.nth.call(null,inst_24076,(1),null);
var state_24188__$1 = (function (){var statearr_24260 = state_24188;
(statearr_24260[(26)] = inst_24077);

return statearr_24260;
})();
if(cljs.core.truth_(inst_24078)){
var statearr_24261_24321 = state_24188__$1;
(statearr_24261_24321[(1)] = (13));

} else {
var statearr_24262_24322 = state_24188__$1;
(statearr_24262_24322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (18))){
var inst_24113 = (state_24188[(2)]);
var state_24188__$1 = state_24188;
var statearr_24263_24323 = state_24188__$1;
(statearr_24263_24323[(2)] = inst_24113);

(statearr_24263_24323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (42))){
var state_24188__$1 = state_24188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24188__$1,(45),dchan);
} else {
if((state_val_24189 === (37))){
var inst_24056 = (state_24188[(9)]);
var inst_24156 = (state_24188[(23)]);
var inst_24147 = (state_24188[(25)]);
var inst_24156__$1 = cljs.core.first.call(null,inst_24147);
var inst_24157 = cljs.core.async.put_BANG_.call(null,inst_24156__$1,inst_24056,done);
var state_24188__$1 = (function (){var statearr_24264 = state_24188;
(statearr_24264[(23)] = inst_24156__$1);

return statearr_24264;
})();
if(cljs.core.truth_(inst_24157)){
var statearr_24265_24324 = state_24188__$1;
(statearr_24265_24324[(1)] = (39));

} else {
var statearr_24266_24325 = state_24188__$1;
(statearr_24266_24325[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24189 === (8))){
var inst_24068 = (state_24188[(13)]);
var inst_24067 = (state_24188[(17)]);
var inst_24070 = (inst_24068 < inst_24067);
var inst_24071 = inst_24070;
var state_24188__$1 = state_24188;
if(cljs.core.truth_(inst_24071)){
var statearr_24267_24326 = state_24188__$1;
(statearr_24267_24326[(1)] = (10));

} else {
var statearr_24268_24327 = state_24188__$1;
(statearr_24268_24327[(1)] = (11));

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
});})(c__23454__auto___24273,cs,m,dchan,dctr,done))
;
return ((function (switch__23359__auto__,c__23454__auto___24273,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23360__auto__ = null;
var cljs$core$async$mult_$_state_machine__23360__auto____0 = (function (){
var statearr_24269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24269[(0)] = cljs$core$async$mult_$_state_machine__23360__auto__);

(statearr_24269[(1)] = (1));

return statearr_24269;
});
var cljs$core$async$mult_$_state_machine__23360__auto____1 = (function (state_24188){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_24188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e24270){if((e24270 instanceof Object)){
var ex__23363__auto__ = e24270;
var statearr_24271_24328 = state_24188;
(statearr_24271_24328[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24329 = state_24188;
state_24188 = G__24329;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23360__auto__ = function(state_24188){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23360__auto____1.call(this,state_24188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23360__auto____0;
cljs$core$async$mult_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23360__auto____1;
return cljs$core$async$mult_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___24273,cs,m,dchan,dctr,done))
})();
var state__23456__auto__ = (function (){var statearr_24272 = f__23455__auto__.call(null);
(statearr_24272[(6)] = c__23454__auto___24273);

return statearr_24272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___24273,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24331 = arguments.length;
switch (G__24331) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24343 = arguments.length;
var i__4731__auto___24344 = (0);
while(true){
if((i__4731__auto___24344 < len__4730__auto___24343)){
args__4736__auto__.push((arguments[i__4731__auto___24344]));

var G__24345 = (i__4731__auto___24344 + (1));
i__4731__auto___24344 = G__24345;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24337){
var map__24338 = p__24337;
var map__24338__$1 = (((((!((map__24338 == null))))?(((((map__24338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24338):map__24338);
var opts = map__24338__$1;
var statearr_24340_24346 = state;
(statearr_24340_24346[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24338,map__24338__$1,opts){
return (function (val){
var statearr_24341_24347 = state;
(statearr_24341_24347[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24338,map__24338__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24342_24348 = state;
(statearr_24342_24348[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24333){
var G__24334 = cljs.core.first.call(null,seq24333);
var seq24333__$1 = cljs.core.next.call(null,seq24333);
var G__24335 = cljs.core.first.call(null,seq24333__$1);
var seq24333__$2 = cljs.core.next.call(null,seq24333__$1);
var G__24336 = cljs.core.first.call(null,seq24333__$2);
var seq24333__$3 = cljs.core.next.call(null,seq24333__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24334,G__24335,G__24336,seq24333__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24349 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24350){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24350 = meta24350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24351,meta24350__$1){
var self__ = this;
var _24351__$1 = this;
return (new cljs.core.async.t_cljs$core$async24349(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24350__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24351){
var self__ = this;
var _24351__$1 = this;
return self__.meta24350;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24349.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24349.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24350","meta24350",-1827292775,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24349";

cljs.core.async.t_cljs$core$async24349.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24349");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24349.
 */
cljs.core.async.__GT_t_cljs$core$async24349 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24349(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24350){
return (new cljs.core.async.t_cljs$core$async24349(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24350));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24349(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23454__auto___24513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___24513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___24513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24453){
var state_val_24454 = (state_24453[(1)]);
if((state_val_24454 === (7))){
var inst_24368 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
var statearr_24455_24514 = state_24453__$1;
(statearr_24455_24514[(2)] = inst_24368);

(statearr_24455_24514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (20))){
var inst_24380 = (state_24453[(7)]);
var state_24453__$1 = state_24453;
var statearr_24456_24515 = state_24453__$1;
(statearr_24456_24515[(2)] = inst_24380);

(statearr_24456_24515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (27))){
var state_24453__$1 = state_24453;
var statearr_24457_24516 = state_24453__$1;
(statearr_24457_24516[(2)] = null);

(statearr_24457_24516[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (1))){
var inst_24355 = (state_24453[(8)]);
var inst_24355__$1 = calc_state.call(null);
var inst_24357 = (inst_24355__$1 == null);
var inst_24358 = cljs.core.not.call(null,inst_24357);
var state_24453__$1 = (function (){var statearr_24458 = state_24453;
(statearr_24458[(8)] = inst_24355__$1);

return statearr_24458;
})();
if(inst_24358){
var statearr_24459_24517 = state_24453__$1;
(statearr_24459_24517[(1)] = (2));

} else {
var statearr_24460_24518 = state_24453__$1;
(statearr_24460_24518[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (24))){
var inst_24427 = (state_24453[(9)]);
var inst_24413 = (state_24453[(10)]);
var inst_24404 = (state_24453[(11)]);
var inst_24427__$1 = inst_24404.call(null,inst_24413);
var state_24453__$1 = (function (){var statearr_24461 = state_24453;
(statearr_24461[(9)] = inst_24427__$1);

return statearr_24461;
})();
if(cljs.core.truth_(inst_24427__$1)){
var statearr_24462_24519 = state_24453__$1;
(statearr_24462_24519[(1)] = (29));

} else {
var statearr_24463_24520 = state_24453__$1;
(statearr_24463_24520[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (4))){
var inst_24371 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
if(cljs.core.truth_(inst_24371)){
var statearr_24464_24521 = state_24453__$1;
(statearr_24464_24521[(1)] = (8));

} else {
var statearr_24465_24522 = state_24453__$1;
(statearr_24465_24522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (15))){
var inst_24398 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
if(cljs.core.truth_(inst_24398)){
var statearr_24466_24523 = state_24453__$1;
(statearr_24466_24523[(1)] = (19));

} else {
var statearr_24467_24524 = state_24453__$1;
(statearr_24467_24524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (21))){
var inst_24403 = (state_24453[(12)]);
var inst_24403__$1 = (state_24453[(2)]);
var inst_24404 = cljs.core.get.call(null,inst_24403__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24405 = cljs.core.get.call(null,inst_24403__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24406 = cljs.core.get.call(null,inst_24403__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24453__$1 = (function (){var statearr_24468 = state_24453;
(statearr_24468[(12)] = inst_24403__$1);

(statearr_24468[(11)] = inst_24404);

(statearr_24468[(13)] = inst_24405);

return statearr_24468;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24453__$1,(22),inst_24406);
} else {
if((state_val_24454 === (31))){
var inst_24435 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
if(cljs.core.truth_(inst_24435)){
var statearr_24469_24525 = state_24453__$1;
(statearr_24469_24525[(1)] = (32));

} else {
var statearr_24470_24526 = state_24453__$1;
(statearr_24470_24526[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (32))){
var inst_24412 = (state_24453[(14)]);
var state_24453__$1 = state_24453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24453__$1,(35),out,inst_24412);
} else {
if((state_val_24454 === (33))){
var inst_24403 = (state_24453[(12)]);
var inst_24380 = inst_24403;
var state_24453__$1 = (function (){var statearr_24471 = state_24453;
(statearr_24471[(7)] = inst_24380);

return statearr_24471;
})();
var statearr_24472_24527 = state_24453__$1;
(statearr_24472_24527[(2)] = null);

(statearr_24472_24527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (13))){
var inst_24380 = (state_24453[(7)]);
var inst_24387 = inst_24380.cljs$lang$protocol_mask$partition0$;
var inst_24388 = (inst_24387 & (64));
var inst_24389 = inst_24380.cljs$core$ISeq$;
var inst_24390 = (cljs.core.PROTOCOL_SENTINEL === inst_24389);
var inst_24391 = ((inst_24388) || (inst_24390));
var state_24453__$1 = state_24453;
if(cljs.core.truth_(inst_24391)){
var statearr_24473_24528 = state_24453__$1;
(statearr_24473_24528[(1)] = (16));

} else {
var statearr_24474_24529 = state_24453__$1;
(statearr_24474_24529[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (22))){
var inst_24413 = (state_24453[(10)]);
var inst_24412 = (state_24453[(14)]);
var inst_24411 = (state_24453[(2)]);
var inst_24412__$1 = cljs.core.nth.call(null,inst_24411,(0),null);
var inst_24413__$1 = cljs.core.nth.call(null,inst_24411,(1),null);
var inst_24414 = (inst_24412__$1 == null);
var inst_24415 = cljs.core._EQ_.call(null,inst_24413__$1,change);
var inst_24416 = ((inst_24414) || (inst_24415));
var state_24453__$1 = (function (){var statearr_24475 = state_24453;
(statearr_24475[(10)] = inst_24413__$1);

(statearr_24475[(14)] = inst_24412__$1);

return statearr_24475;
})();
if(cljs.core.truth_(inst_24416)){
var statearr_24476_24530 = state_24453__$1;
(statearr_24476_24530[(1)] = (23));

} else {
var statearr_24477_24531 = state_24453__$1;
(statearr_24477_24531[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (36))){
var inst_24403 = (state_24453[(12)]);
var inst_24380 = inst_24403;
var state_24453__$1 = (function (){var statearr_24478 = state_24453;
(statearr_24478[(7)] = inst_24380);

return statearr_24478;
})();
var statearr_24479_24532 = state_24453__$1;
(statearr_24479_24532[(2)] = null);

(statearr_24479_24532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (29))){
var inst_24427 = (state_24453[(9)]);
var state_24453__$1 = state_24453;
var statearr_24480_24533 = state_24453__$1;
(statearr_24480_24533[(2)] = inst_24427);

(statearr_24480_24533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (6))){
var state_24453__$1 = state_24453;
var statearr_24481_24534 = state_24453__$1;
(statearr_24481_24534[(2)] = false);

(statearr_24481_24534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (28))){
var inst_24423 = (state_24453[(2)]);
var inst_24424 = calc_state.call(null);
var inst_24380 = inst_24424;
var state_24453__$1 = (function (){var statearr_24482 = state_24453;
(statearr_24482[(7)] = inst_24380);

(statearr_24482[(15)] = inst_24423);

return statearr_24482;
})();
var statearr_24483_24535 = state_24453__$1;
(statearr_24483_24535[(2)] = null);

(statearr_24483_24535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (25))){
var inst_24449 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
var statearr_24484_24536 = state_24453__$1;
(statearr_24484_24536[(2)] = inst_24449);

(statearr_24484_24536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (34))){
var inst_24447 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
var statearr_24485_24537 = state_24453__$1;
(statearr_24485_24537[(2)] = inst_24447);

(statearr_24485_24537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (17))){
var state_24453__$1 = state_24453;
var statearr_24486_24538 = state_24453__$1;
(statearr_24486_24538[(2)] = false);

(statearr_24486_24538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (3))){
var state_24453__$1 = state_24453;
var statearr_24487_24539 = state_24453__$1;
(statearr_24487_24539[(2)] = false);

(statearr_24487_24539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (12))){
var inst_24451 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24453__$1,inst_24451);
} else {
if((state_val_24454 === (2))){
var inst_24355 = (state_24453[(8)]);
var inst_24360 = inst_24355.cljs$lang$protocol_mask$partition0$;
var inst_24361 = (inst_24360 & (64));
var inst_24362 = inst_24355.cljs$core$ISeq$;
var inst_24363 = (cljs.core.PROTOCOL_SENTINEL === inst_24362);
var inst_24364 = ((inst_24361) || (inst_24363));
var state_24453__$1 = state_24453;
if(cljs.core.truth_(inst_24364)){
var statearr_24488_24540 = state_24453__$1;
(statearr_24488_24540[(1)] = (5));

} else {
var statearr_24489_24541 = state_24453__$1;
(statearr_24489_24541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (23))){
var inst_24412 = (state_24453[(14)]);
var inst_24418 = (inst_24412 == null);
var state_24453__$1 = state_24453;
if(cljs.core.truth_(inst_24418)){
var statearr_24490_24542 = state_24453__$1;
(statearr_24490_24542[(1)] = (26));

} else {
var statearr_24491_24543 = state_24453__$1;
(statearr_24491_24543[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (35))){
var inst_24438 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
if(cljs.core.truth_(inst_24438)){
var statearr_24492_24544 = state_24453__$1;
(statearr_24492_24544[(1)] = (36));

} else {
var statearr_24493_24545 = state_24453__$1;
(statearr_24493_24545[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (19))){
var inst_24380 = (state_24453[(7)]);
var inst_24400 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24380);
var state_24453__$1 = state_24453;
var statearr_24494_24546 = state_24453__$1;
(statearr_24494_24546[(2)] = inst_24400);

(statearr_24494_24546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (11))){
var inst_24380 = (state_24453[(7)]);
var inst_24384 = (inst_24380 == null);
var inst_24385 = cljs.core.not.call(null,inst_24384);
var state_24453__$1 = state_24453;
if(inst_24385){
var statearr_24495_24547 = state_24453__$1;
(statearr_24495_24547[(1)] = (13));

} else {
var statearr_24496_24548 = state_24453__$1;
(statearr_24496_24548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (9))){
var inst_24355 = (state_24453[(8)]);
var state_24453__$1 = state_24453;
var statearr_24497_24549 = state_24453__$1;
(statearr_24497_24549[(2)] = inst_24355);

(statearr_24497_24549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (5))){
var state_24453__$1 = state_24453;
var statearr_24498_24550 = state_24453__$1;
(statearr_24498_24550[(2)] = true);

(statearr_24498_24550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (14))){
var state_24453__$1 = state_24453;
var statearr_24499_24551 = state_24453__$1;
(statearr_24499_24551[(2)] = false);

(statearr_24499_24551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (26))){
var inst_24413 = (state_24453[(10)]);
var inst_24420 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24413);
var state_24453__$1 = state_24453;
var statearr_24500_24552 = state_24453__$1;
(statearr_24500_24552[(2)] = inst_24420);

(statearr_24500_24552[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (16))){
var state_24453__$1 = state_24453;
var statearr_24501_24553 = state_24453__$1;
(statearr_24501_24553[(2)] = true);

(statearr_24501_24553[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (38))){
var inst_24443 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
var statearr_24502_24554 = state_24453__$1;
(statearr_24502_24554[(2)] = inst_24443);

(statearr_24502_24554[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (30))){
var inst_24413 = (state_24453[(10)]);
var inst_24404 = (state_24453[(11)]);
var inst_24405 = (state_24453[(13)]);
var inst_24430 = cljs.core.empty_QMARK_.call(null,inst_24404);
var inst_24431 = inst_24405.call(null,inst_24413);
var inst_24432 = cljs.core.not.call(null,inst_24431);
var inst_24433 = ((inst_24430) && (inst_24432));
var state_24453__$1 = state_24453;
var statearr_24503_24555 = state_24453__$1;
(statearr_24503_24555[(2)] = inst_24433);

(statearr_24503_24555[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (10))){
var inst_24355 = (state_24453[(8)]);
var inst_24376 = (state_24453[(2)]);
var inst_24377 = cljs.core.get.call(null,inst_24376,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24378 = cljs.core.get.call(null,inst_24376,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24379 = cljs.core.get.call(null,inst_24376,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24380 = inst_24355;
var state_24453__$1 = (function (){var statearr_24504 = state_24453;
(statearr_24504[(7)] = inst_24380);

(statearr_24504[(16)] = inst_24377);

(statearr_24504[(17)] = inst_24378);

(statearr_24504[(18)] = inst_24379);

return statearr_24504;
})();
var statearr_24505_24556 = state_24453__$1;
(statearr_24505_24556[(2)] = null);

(statearr_24505_24556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (18))){
var inst_24395 = (state_24453[(2)]);
var state_24453__$1 = state_24453;
var statearr_24506_24557 = state_24453__$1;
(statearr_24506_24557[(2)] = inst_24395);

(statearr_24506_24557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (37))){
var state_24453__$1 = state_24453;
var statearr_24507_24558 = state_24453__$1;
(statearr_24507_24558[(2)] = null);

(statearr_24507_24558[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24454 === (8))){
var inst_24355 = (state_24453[(8)]);
var inst_24373 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24355);
var state_24453__$1 = state_24453;
var statearr_24508_24559 = state_24453__$1;
(statearr_24508_24559[(2)] = inst_24373);

(statearr_24508_24559[(1)] = (10));


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
});})(c__23454__auto___24513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23359__auto__,c__23454__auto___24513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23360__auto__ = null;
var cljs$core$async$mix_$_state_machine__23360__auto____0 = (function (){
var statearr_24509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24509[(0)] = cljs$core$async$mix_$_state_machine__23360__auto__);

(statearr_24509[(1)] = (1));

return statearr_24509;
});
var cljs$core$async$mix_$_state_machine__23360__auto____1 = (function (state_24453){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_24453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e24510){if((e24510 instanceof Object)){
var ex__23363__auto__ = e24510;
var statearr_24511_24560 = state_24453;
(statearr_24511_24560[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24561 = state_24453;
state_24453 = G__24561;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23360__auto__ = function(state_24453){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23360__auto____1.call(this,state_24453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23360__auto____0;
cljs$core$async$mix_$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23360__auto____1;
return cljs$core$async$mix_$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___24513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23456__auto__ = (function (){var statearr_24512 = f__23455__auto__.call(null);
(statearr_24512[(6)] = c__23454__auto___24513);

return statearr_24512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___24513,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24563 = arguments.length;
switch (G__24563) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24567 = arguments.length;
switch (G__24567) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24565_SHARP_){
if(cljs.core.truth_(p1__24565_SHARP_.call(null,topic))){
return p1__24565_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24565_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24568 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24569){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24569 = meta24569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24570,meta24569__$1){
var self__ = this;
var _24570__$1 = this;
return (new cljs.core.async.t_cljs$core$async24568(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24569__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24570){
var self__ = this;
var _24570__$1 = this;
return self__.meta24569;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24568.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24568.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24569","meta24569",1323933849,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24568";

cljs.core.async.t_cljs$core$async24568.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24568");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24568.
 */
cljs.core.async.__GT_t_cljs$core$async24568 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24568(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24569){
return (new cljs.core.async.t_cljs$core$async24568(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24569));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24568(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23454__auto___24688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___24688,mults,ensure_mult,p){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___24688,mults,ensure_mult,p){
return (function (state_24642){
var state_val_24643 = (state_24642[(1)]);
if((state_val_24643 === (7))){
var inst_24638 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24644_24689 = state_24642__$1;
(statearr_24644_24689[(2)] = inst_24638);

(statearr_24644_24689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (20))){
var state_24642__$1 = state_24642;
var statearr_24645_24690 = state_24642__$1;
(statearr_24645_24690[(2)] = null);

(statearr_24645_24690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (1))){
var state_24642__$1 = state_24642;
var statearr_24646_24691 = state_24642__$1;
(statearr_24646_24691[(2)] = null);

(statearr_24646_24691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (24))){
var inst_24621 = (state_24642[(7)]);
var inst_24630 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24621);
var state_24642__$1 = state_24642;
var statearr_24647_24692 = state_24642__$1;
(statearr_24647_24692[(2)] = inst_24630);

(statearr_24647_24692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (4))){
var inst_24573 = (state_24642[(8)]);
var inst_24573__$1 = (state_24642[(2)]);
var inst_24574 = (inst_24573__$1 == null);
var state_24642__$1 = (function (){var statearr_24648 = state_24642;
(statearr_24648[(8)] = inst_24573__$1);

return statearr_24648;
})();
if(cljs.core.truth_(inst_24574)){
var statearr_24649_24693 = state_24642__$1;
(statearr_24649_24693[(1)] = (5));

} else {
var statearr_24650_24694 = state_24642__$1;
(statearr_24650_24694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (15))){
var inst_24615 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24651_24695 = state_24642__$1;
(statearr_24651_24695[(2)] = inst_24615);

(statearr_24651_24695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (21))){
var inst_24635 = (state_24642[(2)]);
var state_24642__$1 = (function (){var statearr_24652 = state_24642;
(statearr_24652[(9)] = inst_24635);

return statearr_24652;
})();
var statearr_24653_24696 = state_24642__$1;
(statearr_24653_24696[(2)] = null);

(statearr_24653_24696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (13))){
var inst_24597 = (state_24642[(10)]);
var inst_24599 = cljs.core.chunked_seq_QMARK_.call(null,inst_24597);
var state_24642__$1 = state_24642;
if(inst_24599){
var statearr_24654_24697 = state_24642__$1;
(statearr_24654_24697[(1)] = (16));

} else {
var statearr_24655_24698 = state_24642__$1;
(statearr_24655_24698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (22))){
var inst_24627 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24627)){
var statearr_24656_24699 = state_24642__$1;
(statearr_24656_24699[(1)] = (23));

} else {
var statearr_24657_24700 = state_24642__$1;
(statearr_24657_24700[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (6))){
var inst_24623 = (state_24642[(11)]);
var inst_24621 = (state_24642[(7)]);
var inst_24573 = (state_24642[(8)]);
var inst_24621__$1 = topic_fn.call(null,inst_24573);
var inst_24622 = cljs.core.deref.call(null,mults);
var inst_24623__$1 = cljs.core.get.call(null,inst_24622,inst_24621__$1);
var state_24642__$1 = (function (){var statearr_24658 = state_24642;
(statearr_24658[(11)] = inst_24623__$1);

(statearr_24658[(7)] = inst_24621__$1);

return statearr_24658;
})();
if(cljs.core.truth_(inst_24623__$1)){
var statearr_24659_24701 = state_24642__$1;
(statearr_24659_24701[(1)] = (19));

} else {
var statearr_24660_24702 = state_24642__$1;
(statearr_24660_24702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (25))){
var inst_24632 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24661_24703 = state_24642__$1;
(statearr_24661_24703[(2)] = inst_24632);

(statearr_24661_24703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (17))){
var inst_24597 = (state_24642[(10)]);
var inst_24606 = cljs.core.first.call(null,inst_24597);
var inst_24607 = cljs.core.async.muxch_STAR_.call(null,inst_24606);
var inst_24608 = cljs.core.async.close_BANG_.call(null,inst_24607);
var inst_24609 = cljs.core.next.call(null,inst_24597);
var inst_24583 = inst_24609;
var inst_24584 = null;
var inst_24585 = (0);
var inst_24586 = (0);
var state_24642__$1 = (function (){var statearr_24662 = state_24642;
(statearr_24662[(12)] = inst_24586);

(statearr_24662[(13)] = inst_24585);

(statearr_24662[(14)] = inst_24583);

(statearr_24662[(15)] = inst_24608);

(statearr_24662[(16)] = inst_24584);

return statearr_24662;
})();
var statearr_24663_24704 = state_24642__$1;
(statearr_24663_24704[(2)] = null);

(statearr_24663_24704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (3))){
var inst_24640 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24642__$1,inst_24640);
} else {
if((state_val_24643 === (12))){
var inst_24617 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24664_24705 = state_24642__$1;
(statearr_24664_24705[(2)] = inst_24617);

(statearr_24664_24705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (2))){
var state_24642__$1 = state_24642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24642__$1,(4),ch);
} else {
if((state_val_24643 === (23))){
var state_24642__$1 = state_24642;
var statearr_24665_24706 = state_24642__$1;
(statearr_24665_24706[(2)] = null);

(statearr_24665_24706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (19))){
var inst_24623 = (state_24642[(11)]);
var inst_24573 = (state_24642[(8)]);
var inst_24625 = cljs.core.async.muxch_STAR_.call(null,inst_24623);
var state_24642__$1 = state_24642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24642__$1,(22),inst_24625,inst_24573);
} else {
if((state_val_24643 === (11))){
var inst_24583 = (state_24642[(14)]);
var inst_24597 = (state_24642[(10)]);
var inst_24597__$1 = cljs.core.seq.call(null,inst_24583);
var state_24642__$1 = (function (){var statearr_24666 = state_24642;
(statearr_24666[(10)] = inst_24597__$1);

return statearr_24666;
})();
if(inst_24597__$1){
var statearr_24667_24707 = state_24642__$1;
(statearr_24667_24707[(1)] = (13));

} else {
var statearr_24668_24708 = state_24642__$1;
(statearr_24668_24708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (9))){
var inst_24619 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24669_24709 = state_24642__$1;
(statearr_24669_24709[(2)] = inst_24619);

(statearr_24669_24709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (5))){
var inst_24580 = cljs.core.deref.call(null,mults);
var inst_24581 = cljs.core.vals.call(null,inst_24580);
var inst_24582 = cljs.core.seq.call(null,inst_24581);
var inst_24583 = inst_24582;
var inst_24584 = null;
var inst_24585 = (0);
var inst_24586 = (0);
var state_24642__$1 = (function (){var statearr_24670 = state_24642;
(statearr_24670[(12)] = inst_24586);

(statearr_24670[(13)] = inst_24585);

(statearr_24670[(14)] = inst_24583);

(statearr_24670[(16)] = inst_24584);

return statearr_24670;
})();
var statearr_24671_24710 = state_24642__$1;
(statearr_24671_24710[(2)] = null);

(statearr_24671_24710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (14))){
var state_24642__$1 = state_24642;
var statearr_24675_24711 = state_24642__$1;
(statearr_24675_24711[(2)] = null);

(statearr_24675_24711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (16))){
var inst_24597 = (state_24642[(10)]);
var inst_24601 = cljs.core.chunk_first.call(null,inst_24597);
var inst_24602 = cljs.core.chunk_rest.call(null,inst_24597);
var inst_24603 = cljs.core.count.call(null,inst_24601);
var inst_24583 = inst_24602;
var inst_24584 = inst_24601;
var inst_24585 = inst_24603;
var inst_24586 = (0);
var state_24642__$1 = (function (){var statearr_24676 = state_24642;
(statearr_24676[(12)] = inst_24586);

(statearr_24676[(13)] = inst_24585);

(statearr_24676[(14)] = inst_24583);

(statearr_24676[(16)] = inst_24584);

return statearr_24676;
})();
var statearr_24677_24712 = state_24642__$1;
(statearr_24677_24712[(2)] = null);

(statearr_24677_24712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (10))){
var inst_24586 = (state_24642[(12)]);
var inst_24585 = (state_24642[(13)]);
var inst_24583 = (state_24642[(14)]);
var inst_24584 = (state_24642[(16)]);
var inst_24591 = cljs.core._nth.call(null,inst_24584,inst_24586);
var inst_24592 = cljs.core.async.muxch_STAR_.call(null,inst_24591);
var inst_24593 = cljs.core.async.close_BANG_.call(null,inst_24592);
var inst_24594 = (inst_24586 + (1));
var tmp24672 = inst_24585;
var tmp24673 = inst_24583;
var tmp24674 = inst_24584;
var inst_24583__$1 = tmp24673;
var inst_24584__$1 = tmp24674;
var inst_24585__$1 = tmp24672;
var inst_24586__$1 = inst_24594;
var state_24642__$1 = (function (){var statearr_24678 = state_24642;
(statearr_24678[(12)] = inst_24586__$1);

(statearr_24678[(17)] = inst_24593);

(statearr_24678[(13)] = inst_24585__$1);

(statearr_24678[(14)] = inst_24583__$1);

(statearr_24678[(16)] = inst_24584__$1);

return statearr_24678;
})();
var statearr_24679_24713 = state_24642__$1;
(statearr_24679_24713[(2)] = null);

(statearr_24679_24713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (18))){
var inst_24612 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24680_24714 = state_24642__$1;
(statearr_24680_24714[(2)] = inst_24612);

(statearr_24680_24714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (8))){
var inst_24586 = (state_24642[(12)]);
var inst_24585 = (state_24642[(13)]);
var inst_24588 = (inst_24586 < inst_24585);
var inst_24589 = inst_24588;
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24589)){
var statearr_24681_24715 = state_24642__$1;
(statearr_24681_24715[(1)] = (10));

} else {
var statearr_24682_24716 = state_24642__$1;
(statearr_24682_24716[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__23454__auto___24688,mults,ensure_mult,p))
;
return ((function (switch__23359__auto__,c__23454__auto___24688,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_24683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24683[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_24683[(1)] = (1));

return statearr_24683;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_24642){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_24642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e24684){if((e24684 instanceof Object)){
var ex__23363__auto__ = e24684;
var statearr_24685_24717 = state_24642;
(statearr_24685_24717[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24718 = state_24642;
state_24642 = G__24718;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_24642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_24642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___24688,mults,ensure_mult,p))
})();
var state__23456__auto__ = (function (){var statearr_24686 = f__23455__auto__.call(null);
(statearr_24686[(6)] = c__23454__auto___24688);

return statearr_24686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___24688,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24720 = arguments.length;
switch (G__24720) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24723 = arguments.length;
switch (G__24723) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24726 = arguments.length;
switch (G__24726) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23454__auto___24793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___24793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___24793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24765){
var state_val_24766 = (state_24765[(1)]);
if((state_val_24766 === (7))){
var state_24765__$1 = state_24765;
var statearr_24767_24794 = state_24765__$1;
(statearr_24767_24794[(2)] = null);

(statearr_24767_24794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (1))){
var state_24765__$1 = state_24765;
var statearr_24768_24795 = state_24765__$1;
(statearr_24768_24795[(2)] = null);

(statearr_24768_24795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (4))){
var inst_24729 = (state_24765[(7)]);
var inst_24731 = (inst_24729 < cnt);
var state_24765__$1 = state_24765;
if(cljs.core.truth_(inst_24731)){
var statearr_24769_24796 = state_24765__$1;
(statearr_24769_24796[(1)] = (6));

} else {
var statearr_24770_24797 = state_24765__$1;
(statearr_24770_24797[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (15))){
var inst_24761 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24771_24798 = state_24765__$1;
(statearr_24771_24798[(2)] = inst_24761);

(statearr_24771_24798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (13))){
var inst_24754 = cljs.core.async.close_BANG_.call(null,out);
var state_24765__$1 = state_24765;
var statearr_24772_24799 = state_24765__$1;
(statearr_24772_24799[(2)] = inst_24754);

(statearr_24772_24799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (6))){
var state_24765__$1 = state_24765;
var statearr_24773_24800 = state_24765__$1;
(statearr_24773_24800[(2)] = null);

(statearr_24773_24800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (3))){
var inst_24763 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24765__$1,inst_24763);
} else {
if((state_val_24766 === (12))){
var inst_24751 = (state_24765[(8)]);
var inst_24751__$1 = (state_24765[(2)]);
var inst_24752 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24751__$1);
var state_24765__$1 = (function (){var statearr_24774 = state_24765;
(statearr_24774[(8)] = inst_24751__$1);

return statearr_24774;
})();
if(cljs.core.truth_(inst_24752)){
var statearr_24775_24801 = state_24765__$1;
(statearr_24775_24801[(1)] = (13));

} else {
var statearr_24776_24802 = state_24765__$1;
(statearr_24776_24802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (2))){
var inst_24728 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24729 = (0);
var state_24765__$1 = (function (){var statearr_24777 = state_24765;
(statearr_24777[(9)] = inst_24728);

(statearr_24777[(7)] = inst_24729);

return statearr_24777;
})();
var statearr_24778_24803 = state_24765__$1;
(statearr_24778_24803[(2)] = null);

(statearr_24778_24803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (11))){
var inst_24729 = (state_24765[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24765,(10),Object,null,(9));
var inst_24738 = chs__$1.call(null,inst_24729);
var inst_24739 = done.call(null,inst_24729);
var inst_24740 = cljs.core.async.take_BANG_.call(null,inst_24738,inst_24739);
var state_24765__$1 = state_24765;
var statearr_24779_24804 = state_24765__$1;
(statearr_24779_24804[(2)] = inst_24740);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (9))){
var inst_24729 = (state_24765[(7)]);
var inst_24742 = (state_24765[(2)]);
var inst_24743 = (inst_24729 + (1));
var inst_24729__$1 = inst_24743;
var state_24765__$1 = (function (){var statearr_24780 = state_24765;
(statearr_24780[(10)] = inst_24742);

(statearr_24780[(7)] = inst_24729__$1);

return statearr_24780;
})();
var statearr_24781_24805 = state_24765__$1;
(statearr_24781_24805[(2)] = null);

(statearr_24781_24805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (5))){
var inst_24749 = (state_24765[(2)]);
var state_24765__$1 = (function (){var statearr_24782 = state_24765;
(statearr_24782[(11)] = inst_24749);

return statearr_24782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24765__$1,(12),dchan);
} else {
if((state_val_24766 === (14))){
var inst_24751 = (state_24765[(8)]);
var inst_24756 = cljs.core.apply.call(null,f,inst_24751);
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24765__$1,(16),out,inst_24756);
} else {
if((state_val_24766 === (16))){
var inst_24758 = (state_24765[(2)]);
var state_24765__$1 = (function (){var statearr_24783 = state_24765;
(statearr_24783[(12)] = inst_24758);

return statearr_24783;
})();
var statearr_24784_24806 = state_24765__$1;
(statearr_24784_24806[(2)] = null);

(statearr_24784_24806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (10))){
var inst_24733 = (state_24765[(2)]);
var inst_24734 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24765__$1 = (function (){var statearr_24785 = state_24765;
(statearr_24785[(13)] = inst_24733);

return statearr_24785;
})();
var statearr_24786_24807 = state_24765__$1;
(statearr_24786_24807[(2)] = inst_24734);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (8))){
var inst_24747 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24787_24808 = state_24765__$1;
(statearr_24787_24808[(2)] = inst_24747);

(statearr_24787_24808[(1)] = (5));


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
});})(c__23454__auto___24793,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23359__auto__,c__23454__auto___24793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_24788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24788[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_24788[(1)] = (1));

return statearr_24788;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_24765){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_24765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e24789){if((e24789 instanceof Object)){
var ex__23363__auto__ = e24789;
var statearr_24790_24809 = state_24765;
(statearr_24790_24809[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24810 = state_24765;
state_24765 = G__24810;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_24765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_24765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___24793,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23456__auto__ = (function (){var statearr_24791 = f__23455__auto__.call(null);
(statearr_24791[(6)] = c__23454__auto___24793);

return statearr_24791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___24793,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24813 = arguments.length;
switch (G__24813) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23454__auto___24867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___24867,out){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___24867,out){
return (function (state_24845){
var state_val_24846 = (state_24845[(1)]);
if((state_val_24846 === (7))){
var inst_24825 = (state_24845[(7)]);
var inst_24824 = (state_24845[(8)]);
var inst_24824__$1 = (state_24845[(2)]);
var inst_24825__$1 = cljs.core.nth.call(null,inst_24824__$1,(0),null);
var inst_24826 = cljs.core.nth.call(null,inst_24824__$1,(1),null);
var inst_24827 = (inst_24825__$1 == null);
var state_24845__$1 = (function (){var statearr_24847 = state_24845;
(statearr_24847[(7)] = inst_24825__$1);

(statearr_24847[(9)] = inst_24826);

(statearr_24847[(8)] = inst_24824__$1);

return statearr_24847;
})();
if(cljs.core.truth_(inst_24827)){
var statearr_24848_24868 = state_24845__$1;
(statearr_24848_24868[(1)] = (8));

} else {
var statearr_24849_24869 = state_24845__$1;
(statearr_24849_24869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (1))){
var inst_24814 = cljs.core.vec.call(null,chs);
var inst_24815 = inst_24814;
var state_24845__$1 = (function (){var statearr_24850 = state_24845;
(statearr_24850[(10)] = inst_24815);

return statearr_24850;
})();
var statearr_24851_24870 = state_24845__$1;
(statearr_24851_24870[(2)] = null);

(statearr_24851_24870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (4))){
var inst_24815 = (state_24845[(10)]);
var state_24845__$1 = state_24845;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24845__$1,(7),inst_24815);
} else {
if((state_val_24846 === (6))){
var inst_24841 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24852_24871 = state_24845__$1;
(statearr_24852_24871[(2)] = inst_24841);

(statearr_24852_24871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (3))){
var inst_24843 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24845__$1,inst_24843);
} else {
if((state_val_24846 === (2))){
var inst_24815 = (state_24845[(10)]);
var inst_24817 = cljs.core.count.call(null,inst_24815);
var inst_24818 = (inst_24817 > (0));
var state_24845__$1 = state_24845;
if(cljs.core.truth_(inst_24818)){
var statearr_24854_24872 = state_24845__$1;
(statearr_24854_24872[(1)] = (4));

} else {
var statearr_24855_24873 = state_24845__$1;
(statearr_24855_24873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (11))){
var inst_24815 = (state_24845[(10)]);
var inst_24834 = (state_24845[(2)]);
var tmp24853 = inst_24815;
var inst_24815__$1 = tmp24853;
var state_24845__$1 = (function (){var statearr_24856 = state_24845;
(statearr_24856[(10)] = inst_24815__$1);

(statearr_24856[(11)] = inst_24834);

return statearr_24856;
})();
var statearr_24857_24874 = state_24845__$1;
(statearr_24857_24874[(2)] = null);

(statearr_24857_24874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (9))){
var inst_24825 = (state_24845[(7)]);
var state_24845__$1 = state_24845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24845__$1,(11),out,inst_24825);
} else {
if((state_val_24846 === (5))){
var inst_24839 = cljs.core.async.close_BANG_.call(null,out);
var state_24845__$1 = state_24845;
var statearr_24858_24875 = state_24845__$1;
(statearr_24858_24875[(2)] = inst_24839);

(statearr_24858_24875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (10))){
var inst_24837 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24859_24876 = state_24845__$1;
(statearr_24859_24876[(2)] = inst_24837);

(statearr_24859_24876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (8))){
var inst_24815 = (state_24845[(10)]);
var inst_24825 = (state_24845[(7)]);
var inst_24826 = (state_24845[(9)]);
var inst_24824 = (state_24845[(8)]);
var inst_24829 = (function (){var cs = inst_24815;
var vec__24820 = inst_24824;
var v = inst_24825;
var c = inst_24826;
return ((function (cs,vec__24820,v,c,inst_24815,inst_24825,inst_24826,inst_24824,state_val_24846,c__23454__auto___24867,out){
return (function (p1__24811_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24811_SHARP_);
});
;})(cs,vec__24820,v,c,inst_24815,inst_24825,inst_24826,inst_24824,state_val_24846,c__23454__auto___24867,out))
})();
var inst_24830 = cljs.core.filterv.call(null,inst_24829,inst_24815);
var inst_24815__$1 = inst_24830;
var state_24845__$1 = (function (){var statearr_24860 = state_24845;
(statearr_24860[(10)] = inst_24815__$1);

return statearr_24860;
})();
var statearr_24861_24877 = state_24845__$1;
(statearr_24861_24877[(2)] = null);

(statearr_24861_24877[(1)] = (2));


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
});})(c__23454__auto___24867,out))
;
return ((function (switch__23359__auto__,c__23454__auto___24867,out){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_24862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24862[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_24862[(1)] = (1));

return statearr_24862;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_24845){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_24845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e24863){if((e24863 instanceof Object)){
var ex__23363__auto__ = e24863;
var statearr_24864_24878 = state_24845;
(statearr_24864_24878[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24879 = state_24845;
state_24845 = G__24879;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_24845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_24845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___24867,out))
})();
var state__23456__auto__ = (function (){var statearr_24865 = f__23455__auto__.call(null);
(statearr_24865[(6)] = c__23454__auto___24867);

return statearr_24865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___24867,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24881 = arguments.length;
switch (G__24881) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23454__auto___24926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___24926,out){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___24926,out){
return (function (state_24905){
var state_val_24906 = (state_24905[(1)]);
if((state_val_24906 === (7))){
var inst_24887 = (state_24905[(7)]);
var inst_24887__$1 = (state_24905[(2)]);
var inst_24888 = (inst_24887__$1 == null);
var inst_24889 = cljs.core.not.call(null,inst_24888);
var state_24905__$1 = (function (){var statearr_24907 = state_24905;
(statearr_24907[(7)] = inst_24887__$1);

return statearr_24907;
})();
if(inst_24889){
var statearr_24908_24927 = state_24905__$1;
(statearr_24908_24927[(1)] = (8));

} else {
var statearr_24909_24928 = state_24905__$1;
(statearr_24909_24928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (1))){
var inst_24882 = (0);
var state_24905__$1 = (function (){var statearr_24910 = state_24905;
(statearr_24910[(8)] = inst_24882);

return statearr_24910;
})();
var statearr_24911_24929 = state_24905__$1;
(statearr_24911_24929[(2)] = null);

(statearr_24911_24929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (4))){
var state_24905__$1 = state_24905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24905__$1,(7),ch);
} else {
if((state_val_24906 === (6))){
var inst_24900 = (state_24905[(2)]);
var state_24905__$1 = state_24905;
var statearr_24912_24930 = state_24905__$1;
(statearr_24912_24930[(2)] = inst_24900);

(statearr_24912_24930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (3))){
var inst_24902 = (state_24905[(2)]);
var inst_24903 = cljs.core.async.close_BANG_.call(null,out);
var state_24905__$1 = (function (){var statearr_24913 = state_24905;
(statearr_24913[(9)] = inst_24902);

return statearr_24913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24905__$1,inst_24903);
} else {
if((state_val_24906 === (2))){
var inst_24882 = (state_24905[(8)]);
var inst_24884 = (inst_24882 < n);
var state_24905__$1 = state_24905;
if(cljs.core.truth_(inst_24884)){
var statearr_24914_24931 = state_24905__$1;
(statearr_24914_24931[(1)] = (4));

} else {
var statearr_24915_24932 = state_24905__$1;
(statearr_24915_24932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (11))){
var inst_24882 = (state_24905[(8)]);
var inst_24892 = (state_24905[(2)]);
var inst_24893 = (inst_24882 + (1));
var inst_24882__$1 = inst_24893;
var state_24905__$1 = (function (){var statearr_24916 = state_24905;
(statearr_24916[(8)] = inst_24882__$1);

(statearr_24916[(10)] = inst_24892);

return statearr_24916;
})();
var statearr_24917_24933 = state_24905__$1;
(statearr_24917_24933[(2)] = null);

(statearr_24917_24933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (9))){
var state_24905__$1 = state_24905;
var statearr_24918_24934 = state_24905__$1;
(statearr_24918_24934[(2)] = null);

(statearr_24918_24934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (5))){
var state_24905__$1 = state_24905;
var statearr_24919_24935 = state_24905__$1;
(statearr_24919_24935[(2)] = null);

(statearr_24919_24935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (10))){
var inst_24897 = (state_24905[(2)]);
var state_24905__$1 = state_24905;
var statearr_24920_24936 = state_24905__$1;
(statearr_24920_24936[(2)] = inst_24897);

(statearr_24920_24936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (8))){
var inst_24887 = (state_24905[(7)]);
var state_24905__$1 = state_24905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24905__$1,(11),out,inst_24887);
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
});})(c__23454__auto___24926,out))
;
return ((function (switch__23359__auto__,c__23454__auto___24926,out){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_24921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24921[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_24921[(1)] = (1));

return statearr_24921;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_24905){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_24905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e24922){if((e24922 instanceof Object)){
var ex__23363__auto__ = e24922;
var statearr_24923_24937 = state_24905;
(statearr_24923_24937[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24938 = state_24905;
state_24905 = G__24938;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_24905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_24905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___24926,out))
})();
var state__23456__auto__ = (function (){var statearr_24924 = f__23455__auto__.call(null);
(statearr_24924[(6)] = c__23454__auto___24926);

return statearr_24924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___24926,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24940 = (function (f,ch,meta24941){
this.f = f;
this.ch = ch;
this.meta24941 = meta24941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24942,meta24941__$1){
var self__ = this;
var _24942__$1 = this;
return (new cljs.core.async.t_cljs$core$async24940(self__.f,self__.ch,meta24941__$1));
});

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24942){
var self__ = this;
var _24942__$1 = this;
return self__.meta24941;
});

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24943 = (function (f,ch,meta24941,_,fn1,meta24944){
this.f = f;
this.ch = ch;
this.meta24941 = meta24941;
this._ = _;
this.fn1 = fn1;
this.meta24944 = meta24944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24945,meta24944__$1){
var self__ = this;
var _24945__$1 = this;
return (new cljs.core.async.t_cljs$core$async24943(self__.f,self__.ch,self__.meta24941,self__._,self__.fn1,meta24944__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24945){
var self__ = this;
var _24945__$1 = this;
return self__.meta24944;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24943.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24943.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24939_SHARP_){
return f1.call(null,(((p1__24939_SHARP_ == null))?null:self__.f.call(null,p1__24939_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24943.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24941","meta24941",196853681,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24940","cljs.core.async/t_cljs$core$async24940",-1552397303,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24944","meta24944",-1162847966,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24943";

cljs.core.async.t_cljs$core$async24943.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24943");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24943.
 */
cljs.core.async.__GT_t_cljs$core$async24943 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24943(f__$1,ch__$1,meta24941__$1,___$2,fn1__$1,meta24944){
return (new cljs.core.async.t_cljs$core$async24943(f__$1,ch__$1,meta24941__$1,___$2,fn1__$1,meta24944));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24943(self__.f,self__.ch,self__.meta24941,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24941","meta24941",196853681,null)], null);
});

cljs.core.async.t_cljs$core$async24940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24940";

cljs.core.async.t_cljs$core$async24940.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24940");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24940.
 */
cljs.core.async.__GT_t_cljs$core$async24940 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24940(f__$1,ch__$1,meta24941){
return (new cljs.core.async.t_cljs$core$async24940(f__$1,ch__$1,meta24941));
});

}

return (new cljs.core.async.t_cljs$core$async24940(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24946 = (function (f,ch,meta24947){
this.f = f;
this.ch = ch;
this.meta24947 = meta24947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24948,meta24947__$1){
var self__ = this;
var _24948__$1 = this;
return (new cljs.core.async.t_cljs$core$async24946(self__.f,self__.ch,meta24947__$1));
});

cljs.core.async.t_cljs$core$async24946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24948){
var self__ = this;
var _24948__$1 = this;
return self__.meta24947;
});

cljs.core.async.t_cljs$core$async24946.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24946.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24946.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24947","meta24947",-1940816570,null)], null);
});

cljs.core.async.t_cljs$core$async24946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24946";

cljs.core.async.t_cljs$core$async24946.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24946");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24946.
 */
cljs.core.async.__GT_t_cljs$core$async24946 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24946(f__$1,ch__$1,meta24947){
return (new cljs.core.async.t_cljs$core$async24946(f__$1,ch__$1,meta24947));
});

}

return (new cljs.core.async.t_cljs$core$async24946(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24949 = (function (p,ch,meta24950){
this.p = p;
this.ch = ch;
this.meta24950 = meta24950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24951,meta24950__$1){
var self__ = this;
var _24951__$1 = this;
return (new cljs.core.async.t_cljs$core$async24949(self__.p,self__.ch,meta24950__$1));
});

cljs.core.async.t_cljs$core$async24949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24951){
var self__ = this;
var _24951__$1 = this;
return self__.meta24950;
});

cljs.core.async.t_cljs$core$async24949.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24949.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24949.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24950","meta24950",-221730886,null)], null);
});

cljs.core.async.t_cljs$core$async24949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24949";

cljs.core.async.t_cljs$core$async24949.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24949");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24949.
 */
cljs.core.async.__GT_t_cljs$core$async24949 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24949(p__$1,ch__$1,meta24950){
return (new cljs.core.async.t_cljs$core$async24949(p__$1,ch__$1,meta24950));
});

}

return (new cljs.core.async.t_cljs$core$async24949(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24953 = arguments.length;
switch (G__24953) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23454__auto___24993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___24993,out){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___24993,out){
return (function (state_24974){
var state_val_24975 = (state_24974[(1)]);
if((state_val_24975 === (7))){
var inst_24970 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24976_24994 = state_24974__$1;
(statearr_24976_24994[(2)] = inst_24970);

(statearr_24976_24994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (1))){
var state_24974__$1 = state_24974;
var statearr_24977_24995 = state_24974__$1;
(statearr_24977_24995[(2)] = null);

(statearr_24977_24995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (4))){
var inst_24956 = (state_24974[(7)]);
var inst_24956__$1 = (state_24974[(2)]);
var inst_24957 = (inst_24956__$1 == null);
var state_24974__$1 = (function (){var statearr_24978 = state_24974;
(statearr_24978[(7)] = inst_24956__$1);

return statearr_24978;
})();
if(cljs.core.truth_(inst_24957)){
var statearr_24979_24996 = state_24974__$1;
(statearr_24979_24996[(1)] = (5));

} else {
var statearr_24980_24997 = state_24974__$1;
(statearr_24980_24997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (6))){
var inst_24956 = (state_24974[(7)]);
var inst_24961 = p.call(null,inst_24956);
var state_24974__$1 = state_24974;
if(cljs.core.truth_(inst_24961)){
var statearr_24981_24998 = state_24974__$1;
(statearr_24981_24998[(1)] = (8));

} else {
var statearr_24982_24999 = state_24974__$1;
(statearr_24982_24999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (3))){
var inst_24972 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24974__$1,inst_24972);
} else {
if((state_val_24975 === (2))){
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24974__$1,(4),ch);
} else {
if((state_val_24975 === (11))){
var inst_24964 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24983_25000 = state_24974__$1;
(statearr_24983_25000[(2)] = inst_24964);

(statearr_24983_25000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (9))){
var state_24974__$1 = state_24974;
var statearr_24984_25001 = state_24974__$1;
(statearr_24984_25001[(2)] = null);

(statearr_24984_25001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (5))){
var inst_24959 = cljs.core.async.close_BANG_.call(null,out);
var state_24974__$1 = state_24974;
var statearr_24985_25002 = state_24974__$1;
(statearr_24985_25002[(2)] = inst_24959);

(statearr_24985_25002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (10))){
var inst_24967 = (state_24974[(2)]);
var state_24974__$1 = (function (){var statearr_24986 = state_24974;
(statearr_24986[(8)] = inst_24967);

return statearr_24986;
})();
var statearr_24987_25003 = state_24974__$1;
(statearr_24987_25003[(2)] = null);

(statearr_24987_25003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (8))){
var inst_24956 = (state_24974[(7)]);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24974__$1,(11),out,inst_24956);
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
});})(c__23454__auto___24993,out))
;
return ((function (switch__23359__auto__,c__23454__auto___24993,out){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_24988 = [null,null,null,null,null,null,null,null,null];
(statearr_24988[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_24988[(1)] = (1));

return statearr_24988;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_24974){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_24974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e24989){if((e24989 instanceof Object)){
var ex__23363__auto__ = e24989;
var statearr_24990_25004 = state_24974;
(statearr_24990_25004[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25005 = state_24974;
state_24974 = G__25005;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_24974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_24974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___24993,out))
})();
var state__23456__auto__ = (function (){var statearr_24991 = f__23455__auto__.call(null);
(statearr_24991[(6)] = c__23454__auto___24993);

return statearr_24991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___24993,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25007 = arguments.length;
switch (G__25007) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto__){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto__){
return (function (state_25070){
var state_val_25071 = (state_25070[(1)]);
if((state_val_25071 === (7))){
var inst_25066 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
var statearr_25072_25110 = state_25070__$1;
(statearr_25072_25110[(2)] = inst_25066);

(statearr_25072_25110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (20))){
var inst_25036 = (state_25070[(7)]);
var inst_25047 = (state_25070[(2)]);
var inst_25048 = cljs.core.next.call(null,inst_25036);
var inst_25022 = inst_25048;
var inst_25023 = null;
var inst_25024 = (0);
var inst_25025 = (0);
var state_25070__$1 = (function (){var statearr_25073 = state_25070;
(statearr_25073[(8)] = inst_25022);

(statearr_25073[(9)] = inst_25024);

(statearr_25073[(10)] = inst_25023);

(statearr_25073[(11)] = inst_25047);

(statearr_25073[(12)] = inst_25025);

return statearr_25073;
})();
var statearr_25074_25111 = state_25070__$1;
(statearr_25074_25111[(2)] = null);

(statearr_25074_25111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (1))){
var state_25070__$1 = state_25070;
var statearr_25075_25112 = state_25070__$1;
(statearr_25075_25112[(2)] = null);

(statearr_25075_25112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (4))){
var inst_25011 = (state_25070[(13)]);
var inst_25011__$1 = (state_25070[(2)]);
var inst_25012 = (inst_25011__$1 == null);
var state_25070__$1 = (function (){var statearr_25076 = state_25070;
(statearr_25076[(13)] = inst_25011__$1);

return statearr_25076;
})();
if(cljs.core.truth_(inst_25012)){
var statearr_25077_25113 = state_25070__$1;
(statearr_25077_25113[(1)] = (5));

} else {
var statearr_25078_25114 = state_25070__$1;
(statearr_25078_25114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (15))){
var state_25070__$1 = state_25070;
var statearr_25082_25115 = state_25070__$1;
(statearr_25082_25115[(2)] = null);

(statearr_25082_25115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (21))){
var state_25070__$1 = state_25070;
var statearr_25083_25116 = state_25070__$1;
(statearr_25083_25116[(2)] = null);

(statearr_25083_25116[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (13))){
var inst_25022 = (state_25070[(8)]);
var inst_25024 = (state_25070[(9)]);
var inst_25023 = (state_25070[(10)]);
var inst_25025 = (state_25070[(12)]);
var inst_25032 = (state_25070[(2)]);
var inst_25033 = (inst_25025 + (1));
var tmp25079 = inst_25022;
var tmp25080 = inst_25024;
var tmp25081 = inst_25023;
var inst_25022__$1 = tmp25079;
var inst_25023__$1 = tmp25081;
var inst_25024__$1 = tmp25080;
var inst_25025__$1 = inst_25033;
var state_25070__$1 = (function (){var statearr_25084 = state_25070;
(statearr_25084[(8)] = inst_25022__$1);

(statearr_25084[(9)] = inst_25024__$1);

(statearr_25084[(10)] = inst_25023__$1);

(statearr_25084[(12)] = inst_25025__$1);

(statearr_25084[(14)] = inst_25032);

return statearr_25084;
})();
var statearr_25085_25117 = state_25070__$1;
(statearr_25085_25117[(2)] = null);

(statearr_25085_25117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (22))){
var state_25070__$1 = state_25070;
var statearr_25086_25118 = state_25070__$1;
(statearr_25086_25118[(2)] = null);

(statearr_25086_25118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (6))){
var inst_25011 = (state_25070[(13)]);
var inst_25020 = f.call(null,inst_25011);
var inst_25021 = cljs.core.seq.call(null,inst_25020);
var inst_25022 = inst_25021;
var inst_25023 = null;
var inst_25024 = (0);
var inst_25025 = (0);
var state_25070__$1 = (function (){var statearr_25087 = state_25070;
(statearr_25087[(8)] = inst_25022);

(statearr_25087[(9)] = inst_25024);

(statearr_25087[(10)] = inst_25023);

(statearr_25087[(12)] = inst_25025);

return statearr_25087;
})();
var statearr_25088_25119 = state_25070__$1;
(statearr_25088_25119[(2)] = null);

(statearr_25088_25119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (17))){
var inst_25036 = (state_25070[(7)]);
var inst_25040 = cljs.core.chunk_first.call(null,inst_25036);
var inst_25041 = cljs.core.chunk_rest.call(null,inst_25036);
var inst_25042 = cljs.core.count.call(null,inst_25040);
var inst_25022 = inst_25041;
var inst_25023 = inst_25040;
var inst_25024 = inst_25042;
var inst_25025 = (0);
var state_25070__$1 = (function (){var statearr_25089 = state_25070;
(statearr_25089[(8)] = inst_25022);

(statearr_25089[(9)] = inst_25024);

(statearr_25089[(10)] = inst_25023);

(statearr_25089[(12)] = inst_25025);

return statearr_25089;
})();
var statearr_25090_25120 = state_25070__$1;
(statearr_25090_25120[(2)] = null);

(statearr_25090_25120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (3))){
var inst_25068 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25070__$1,inst_25068);
} else {
if((state_val_25071 === (12))){
var inst_25056 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
var statearr_25091_25121 = state_25070__$1;
(statearr_25091_25121[(2)] = inst_25056);

(statearr_25091_25121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (2))){
var state_25070__$1 = state_25070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25070__$1,(4),in$);
} else {
if((state_val_25071 === (23))){
var inst_25064 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
var statearr_25092_25122 = state_25070__$1;
(statearr_25092_25122[(2)] = inst_25064);

(statearr_25092_25122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (19))){
var inst_25051 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
var statearr_25093_25123 = state_25070__$1;
(statearr_25093_25123[(2)] = inst_25051);

(statearr_25093_25123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (11))){
var inst_25022 = (state_25070[(8)]);
var inst_25036 = (state_25070[(7)]);
var inst_25036__$1 = cljs.core.seq.call(null,inst_25022);
var state_25070__$1 = (function (){var statearr_25094 = state_25070;
(statearr_25094[(7)] = inst_25036__$1);

return statearr_25094;
})();
if(inst_25036__$1){
var statearr_25095_25124 = state_25070__$1;
(statearr_25095_25124[(1)] = (14));

} else {
var statearr_25096_25125 = state_25070__$1;
(statearr_25096_25125[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (9))){
var inst_25058 = (state_25070[(2)]);
var inst_25059 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25070__$1 = (function (){var statearr_25097 = state_25070;
(statearr_25097[(15)] = inst_25058);

return statearr_25097;
})();
if(cljs.core.truth_(inst_25059)){
var statearr_25098_25126 = state_25070__$1;
(statearr_25098_25126[(1)] = (21));

} else {
var statearr_25099_25127 = state_25070__$1;
(statearr_25099_25127[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (5))){
var inst_25014 = cljs.core.async.close_BANG_.call(null,out);
var state_25070__$1 = state_25070;
var statearr_25100_25128 = state_25070__$1;
(statearr_25100_25128[(2)] = inst_25014);

(statearr_25100_25128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (14))){
var inst_25036 = (state_25070[(7)]);
var inst_25038 = cljs.core.chunked_seq_QMARK_.call(null,inst_25036);
var state_25070__$1 = state_25070;
if(inst_25038){
var statearr_25101_25129 = state_25070__$1;
(statearr_25101_25129[(1)] = (17));

} else {
var statearr_25102_25130 = state_25070__$1;
(statearr_25102_25130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (16))){
var inst_25054 = (state_25070[(2)]);
var state_25070__$1 = state_25070;
var statearr_25103_25131 = state_25070__$1;
(statearr_25103_25131[(2)] = inst_25054);

(statearr_25103_25131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25071 === (10))){
var inst_25023 = (state_25070[(10)]);
var inst_25025 = (state_25070[(12)]);
var inst_25030 = cljs.core._nth.call(null,inst_25023,inst_25025);
var state_25070__$1 = state_25070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25070__$1,(13),out,inst_25030);
} else {
if((state_val_25071 === (18))){
var inst_25036 = (state_25070[(7)]);
var inst_25045 = cljs.core.first.call(null,inst_25036);
var state_25070__$1 = state_25070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25070__$1,(20),out,inst_25045);
} else {
if((state_val_25071 === (8))){
var inst_25024 = (state_25070[(9)]);
var inst_25025 = (state_25070[(12)]);
var inst_25027 = (inst_25025 < inst_25024);
var inst_25028 = inst_25027;
var state_25070__$1 = state_25070;
if(cljs.core.truth_(inst_25028)){
var statearr_25104_25132 = state_25070__$1;
(statearr_25104_25132[(1)] = (10));

} else {
var statearr_25105_25133 = state_25070__$1;
(statearr_25105_25133[(1)] = (11));

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
}
}
}
}
}
}
});})(c__23454__auto__))
;
return ((function (switch__23359__auto__,c__23454__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23360__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23360__auto____0 = (function (){
var statearr_25106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25106[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23360__auto__);

(statearr_25106[(1)] = (1));

return statearr_25106;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23360__auto____1 = (function (state_25070){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_25070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e25107){if((e25107 instanceof Object)){
var ex__23363__auto__ = e25107;
var statearr_25108_25134 = state_25070;
(statearr_25108_25134[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25135 = state_25070;
state_25070 = G__25135;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23360__auto__ = function(state_25070){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23360__auto____1.call(this,state_25070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23360__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23360__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto__))
})();
var state__23456__auto__ = (function (){var statearr_25109 = f__23455__auto__.call(null);
(statearr_25109[(6)] = c__23454__auto__);

return statearr_25109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto__))
);

return c__23454__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25137 = arguments.length;
switch (G__25137) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25140 = arguments.length;
switch (G__25140) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25143 = arguments.length;
switch (G__25143) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23454__auto___25190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___25190,out){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___25190,out){
return (function (state_25167){
var state_val_25168 = (state_25167[(1)]);
if((state_val_25168 === (7))){
var inst_25162 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25169_25191 = state_25167__$1;
(statearr_25169_25191[(2)] = inst_25162);

(statearr_25169_25191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (1))){
var inst_25144 = null;
var state_25167__$1 = (function (){var statearr_25170 = state_25167;
(statearr_25170[(7)] = inst_25144);

return statearr_25170;
})();
var statearr_25171_25192 = state_25167__$1;
(statearr_25171_25192[(2)] = null);

(statearr_25171_25192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (4))){
var inst_25147 = (state_25167[(8)]);
var inst_25147__$1 = (state_25167[(2)]);
var inst_25148 = (inst_25147__$1 == null);
var inst_25149 = cljs.core.not.call(null,inst_25148);
var state_25167__$1 = (function (){var statearr_25172 = state_25167;
(statearr_25172[(8)] = inst_25147__$1);

return statearr_25172;
})();
if(inst_25149){
var statearr_25173_25193 = state_25167__$1;
(statearr_25173_25193[(1)] = (5));

} else {
var statearr_25174_25194 = state_25167__$1;
(statearr_25174_25194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (6))){
var state_25167__$1 = state_25167;
var statearr_25175_25195 = state_25167__$1;
(statearr_25175_25195[(2)] = null);

(statearr_25175_25195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (3))){
var inst_25164 = (state_25167[(2)]);
var inst_25165 = cljs.core.async.close_BANG_.call(null,out);
var state_25167__$1 = (function (){var statearr_25176 = state_25167;
(statearr_25176[(9)] = inst_25164);

return statearr_25176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25167__$1,inst_25165);
} else {
if((state_val_25168 === (2))){
var state_25167__$1 = state_25167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25167__$1,(4),ch);
} else {
if((state_val_25168 === (11))){
var inst_25147 = (state_25167[(8)]);
var inst_25156 = (state_25167[(2)]);
var inst_25144 = inst_25147;
var state_25167__$1 = (function (){var statearr_25177 = state_25167;
(statearr_25177[(10)] = inst_25156);

(statearr_25177[(7)] = inst_25144);

return statearr_25177;
})();
var statearr_25178_25196 = state_25167__$1;
(statearr_25178_25196[(2)] = null);

(statearr_25178_25196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (9))){
var inst_25147 = (state_25167[(8)]);
var state_25167__$1 = state_25167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25167__$1,(11),out,inst_25147);
} else {
if((state_val_25168 === (5))){
var inst_25147 = (state_25167[(8)]);
var inst_25144 = (state_25167[(7)]);
var inst_25151 = cljs.core._EQ_.call(null,inst_25147,inst_25144);
var state_25167__$1 = state_25167;
if(inst_25151){
var statearr_25180_25197 = state_25167__$1;
(statearr_25180_25197[(1)] = (8));

} else {
var statearr_25181_25198 = state_25167__$1;
(statearr_25181_25198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (10))){
var inst_25159 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25182_25199 = state_25167__$1;
(statearr_25182_25199[(2)] = inst_25159);

(statearr_25182_25199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (8))){
var inst_25144 = (state_25167[(7)]);
var tmp25179 = inst_25144;
var inst_25144__$1 = tmp25179;
var state_25167__$1 = (function (){var statearr_25183 = state_25167;
(statearr_25183[(7)] = inst_25144__$1);

return statearr_25183;
})();
var statearr_25184_25200 = state_25167__$1;
(statearr_25184_25200[(2)] = null);

(statearr_25184_25200[(1)] = (2));


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
});})(c__23454__auto___25190,out))
;
return ((function (switch__23359__auto__,c__23454__auto___25190,out){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_25185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25185[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_25185[(1)] = (1));

return statearr_25185;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_25167){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_25167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e25186){if((e25186 instanceof Object)){
var ex__23363__auto__ = e25186;
var statearr_25187_25201 = state_25167;
(statearr_25187_25201[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25202 = state_25167;
state_25167 = G__25202;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_25167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_25167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___25190,out))
})();
var state__23456__auto__ = (function (){var statearr_25188 = f__23455__auto__.call(null);
(statearr_25188[(6)] = c__23454__auto___25190);

return statearr_25188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___25190,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25204 = arguments.length;
switch (G__25204) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23454__auto___25270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___25270,out){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___25270,out){
return (function (state_25242){
var state_val_25243 = (state_25242[(1)]);
if((state_val_25243 === (7))){
var inst_25238 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
var statearr_25244_25271 = state_25242__$1;
(statearr_25244_25271[(2)] = inst_25238);

(statearr_25244_25271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (1))){
var inst_25205 = (new Array(n));
var inst_25206 = inst_25205;
var inst_25207 = (0);
var state_25242__$1 = (function (){var statearr_25245 = state_25242;
(statearr_25245[(7)] = inst_25207);

(statearr_25245[(8)] = inst_25206);

return statearr_25245;
})();
var statearr_25246_25272 = state_25242__$1;
(statearr_25246_25272[(2)] = null);

(statearr_25246_25272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (4))){
var inst_25210 = (state_25242[(9)]);
var inst_25210__$1 = (state_25242[(2)]);
var inst_25211 = (inst_25210__$1 == null);
var inst_25212 = cljs.core.not.call(null,inst_25211);
var state_25242__$1 = (function (){var statearr_25247 = state_25242;
(statearr_25247[(9)] = inst_25210__$1);

return statearr_25247;
})();
if(inst_25212){
var statearr_25248_25273 = state_25242__$1;
(statearr_25248_25273[(1)] = (5));

} else {
var statearr_25249_25274 = state_25242__$1;
(statearr_25249_25274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (15))){
var inst_25232 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
var statearr_25250_25275 = state_25242__$1;
(statearr_25250_25275[(2)] = inst_25232);

(statearr_25250_25275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (13))){
var state_25242__$1 = state_25242;
var statearr_25251_25276 = state_25242__$1;
(statearr_25251_25276[(2)] = null);

(statearr_25251_25276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (6))){
var inst_25207 = (state_25242[(7)]);
var inst_25228 = (inst_25207 > (0));
var state_25242__$1 = state_25242;
if(cljs.core.truth_(inst_25228)){
var statearr_25252_25277 = state_25242__$1;
(statearr_25252_25277[(1)] = (12));

} else {
var statearr_25253_25278 = state_25242__$1;
(statearr_25253_25278[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (3))){
var inst_25240 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25242__$1,inst_25240);
} else {
if((state_val_25243 === (12))){
var inst_25206 = (state_25242[(8)]);
var inst_25230 = cljs.core.vec.call(null,inst_25206);
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25242__$1,(15),out,inst_25230);
} else {
if((state_val_25243 === (2))){
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25242__$1,(4),ch);
} else {
if((state_val_25243 === (11))){
var inst_25222 = (state_25242[(2)]);
var inst_25223 = (new Array(n));
var inst_25206 = inst_25223;
var inst_25207 = (0);
var state_25242__$1 = (function (){var statearr_25254 = state_25242;
(statearr_25254[(7)] = inst_25207);

(statearr_25254[(8)] = inst_25206);

(statearr_25254[(10)] = inst_25222);

return statearr_25254;
})();
var statearr_25255_25279 = state_25242__$1;
(statearr_25255_25279[(2)] = null);

(statearr_25255_25279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (9))){
var inst_25206 = (state_25242[(8)]);
var inst_25220 = cljs.core.vec.call(null,inst_25206);
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25242__$1,(11),out,inst_25220);
} else {
if((state_val_25243 === (5))){
var inst_25210 = (state_25242[(9)]);
var inst_25207 = (state_25242[(7)]);
var inst_25215 = (state_25242[(11)]);
var inst_25206 = (state_25242[(8)]);
var inst_25214 = (inst_25206[inst_25207] = inst_25210);
var inst_25215__$1 = (inst_25207 + (1));
var inst_25216 = (inst_25215__$1 < n);
var state_25242__$1 = (function (){var statearr_25256 = state_25242;
(statearr_25256[(12)] = inst_25214);

(statearr_25256[(11)] = inst_25215__$1);

return statearr_25256;
})();
if(cljs.core.truth_(inst_25216)){
var statearr_25257_25280 = state_25242__$1;
(statearr_25257_25280[(1)] = (8));

} else {
var statearr_25258_25281 = state_25242__$1;
(statearr_25258_25281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (14))){
var inst_25235 = (state_25242[(2)]);
var inst_25236 = cljs.core.async.close_BANG_.call(null,out);
var state_25242__$1 = (function (){var statearr_25260 = state_25242;
(statearr_25260[(13)] = inst_25235);

return statearr_25260;
})();
var statearr_25261_25282 = state_25242__$1;
(statearr_25261_25282[(2)] = inst_25236);

(statearr_25261_25282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (10))){
var inst_25226 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
var statearr_25262_25283 = state_25242__$1;
(statearr_25262_25283[(2)] = inst_25226);

(statearr_25262_25283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (8))){
var inst_25215 = (state_25242[(11)]);
var inst_25206 = (state_25242[(8)]);
var tmp25259 = inst_25206;
var inst_25206__$1 = tmp25259;
var inst_25207 = inst_25215;
var state_25242__$1 = (function (){var statearr_25263 = state_25242;
(statearr_25263[(7)] = inst_25207);

(statearr_25263[(8)] = inst_25206__$1);

return statearr_25263;
})();
var statearr_25264_25284 = state_25242__$1;
(statearr_25264_25284[(2)] = null);

(statearr_25264_25284[(1)] = (2));


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
});})(c__23454__auto___25270,out))
;
return ((function (switch__23359__auto__,c__23454__auto___25270,out){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_25265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25265[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_25265[(1)] = (1));

return statearr_25265;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_25242){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_25242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e25266){if((e25266 instanceof Object)){
var ex__23363__auto__ = e25266;
var statearr_25267_25285 = state_25242;
(statearr_25267_25285[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25286 = state_25242;
state_25242 = G__25286;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_25242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_25242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___25270,out))
})();
var state__23456__auto__ = (function (){var statearr_25268 = f__23455__auto__.call(null);
(statearr_25268[(6)] = c__23454__auto___25270);

return statearr_25268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___25270,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25288 = arguments.length;
switch (G__25288) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23454__auto___25358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23454__auto___25358,out){
return (function (){
var f__23455__auto__ = (function (){var switch__23359__auto__ = ((function (c__23454__auto___25358,out){
return (function (state_25330){
var state_val_25331 = (state_25330[(1)]);
if((state_val_25331 === (7))){
var inst_25326 = (state_25330[(2)]);
var state_25330__$1 = state_25330;
var statearr_25332_25359 = state_25330__$1;
(statearr_25332_25359[(2)] = inst_25326);

(statearr_25332_25359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (1))){
var inst_25289 = [];
var inst_25290 = inst_25289;
var inst_25291 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25330__$1 = (function (){var statearr_25333 = state_25330;
(statearr_25333[(7)] = inst_25291);

(statearr_25333[(8)] = inst_25290);

return statearr_25333;
})();
var statearr_25334_25360 = state_25330__$1;
(statearr_25334_25360[(2)] = null);

(statearr_25334_25360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (4))){
var inst_25294 = (state_25330[(9)]);
var inst_25294__$1 = (state_25330[(2)]);
var inst_25295 = (inst_25294__$1 == null);
var inst_25296 = cljs.core.not.call(null,inst_25295);
var state_25330__$1 = (function (){var statearr_25335 = state_25330;
(statearr_25335[(9)] = inst_25294__$1);

return statearr_25335;
})();
if(inst_25296){
var statearr_25336_25361 = state_25330__$1;
(statearr_25336_25361[(1)] = (5));

} else {
var statearr_25337_25362 = state_25330__$1;
(statearr_25337_25362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (15))){
var inst_25320 = (state_25330[(2)]);
var state_25330__$1 = state_25330;
var statearr_25338_25363 = state_25330__$1;
(statearr_25338_25363[(2)] = inst_25320);

(statearr_25338_25363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (13))){
var state_25330__$1 = state_25330;
var statearr_25339_25364 = state_25330__$1;
(statearr_25339_25364[(2)] = null);

(statearr_25339_25364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (6))){
var inst_25290 = (state_25330[(8)]);
var inst_25315 = inst_25290.length;
var inst_25316 = (inst_25315 > (0));
var state_25330__$1 = state_25330;
if(cljs.core.truth_(inst_25316)){
var statearr_25340_25365 = state_25330__$1;
(statearr_25340_25365[(1)] = (12));

} else {
var statearr_25341_25366 = state_25330__$1;
(statearr_25341_25366[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (3))){
var inst_25328 = (state_25330[(2)]);
var state_25330__$1 = state_25330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25330__$1,inst_25328);
} else {
if((state_val_25331 === (12))){
var inst_25290 = (state_25330[(8)]);
var inst_25318 = cljs.core.vec.call(null,inst_25290);
var state_25330__$1 = state_25330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25330__$1,(15),out,inst_25318);
} else {
if((state_val_25331 === (2))){
var state_25330__$1 = state_25330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25330__$1,(4),ch);
} else {
if((state_val_25331 === (11))){
var inst_25294 = (state_25330[(9)]);
var inst_25298 = (state_25330[(10)]);
var inst_25308 = (state_25330[(2)]);
var inst_25309 = [];
var inst_25310 = inst_25309.push(inst_25294);
var inst_25290 = inst_25309;
var inst_25291 = inst_25298;
var state_25330__$1 = (function (){var statearr_25342 = state_25330;
(statearr_25342[(11)] = inst_25308);

(statearr_25342[(7)] = inst_25291);

(statearr_25342[(12)] = inst_25310);

(statearr_25342[(8)] = inst_25290);

return statearr_25342;
})();
var statearr_25343_25367 = state_25330__$1;
(statearr_25343_25367[(2)] = null);

(statearr_25343_25367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (9))){
var inst_25290 = (state_25330[(8)]);
var inst_25306 = cljs.core.vec.call(null,inst_25290);
var state_25330__$1 = state_25330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25330__$1,(11),out,inst_25306);
} else {
if((state_val_25331 === (5))){
var inst_25294 = (state_25330[(9)]);
var inst_25298 = (state_25330[(10)]);
var inst_25291 = (state_25330[(7)]);
var inst_25298__$1 = f.call(null,inst_25294);
var inst_25299 = cljs.core._EQ_.call(null,inst_25298__$1,inst_25291);
var inst_25300 = cljs.core.keyword_identical_QMARK_.call(null,inst_25291,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25301 = ((inst_25299) || (inst_25300));
var state_25330__$1 = (function (){var statearr_25344 = state_25330;
(statearr_25344[(10)] = inst_25298__$1);

return statearr_25344;
})();
if(cljs.core.truth_(inst_25301)){
var statearr_25345_25368 = state_25330__$1;
(statearr_25345_25368[(1)] = (8));

} else {
var statearr_25346_25369 = state_25330__$1;
(statearr_25346_25369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (14))){
var inst_25323 = (state_25330[(2)]);
var inst_25324 = cljs.core.async.close_BANG_.call(null,out);
var state_25330__$1 = (function (){var statearr_25348 = state_25330;
(statearr_25348[(13)] = inst_25323);

return statearr_25348;
})();
var statearr_25349_25370 = state_25330__$1;
(statearr_25349_25370[(2)] = inst_25324);

(statearr_25349_25370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (10))){
var inst_25313 = (state_25330[(2)]);
var state_25330__$1 = state_25330;
var statearr_25350_25371 = state_25330__$1;
(statearr_25350_25371[(2)] = inst_25313);

(statearr_25350_25371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25331 === (8))){
var inst_25294 = (state_25330[(9)]);
var inst_25298 = (state_25330[(10)]);
var inst_25290 = (state_25330[(8)]);
var inst_25303 = inst_25290.push(inst_25294);
var tmp25347 = inst_25290;
var inst_25290__$1 = tmp25347;
var inst_25291 = inst_25298;
var state_25330__$1 = (function (){var statearr_25351 = state_25330;
(statearr_25351[(7)] = inst_25291);

(statearr_25351[(8)] = inst_25290__$1);

(statearr_25351[(14)] = inst_25303);

return statearr_25351;
})();
var statearr_25352_25372 = state_25330__$1;
(statearr_25352_25372[(2)] = null);

(statearr_25352_25372[(1)] = (2));


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
});})(c__23454__auto___25358,out))
;
return ((function (switch__23359__auto__,c__23454__auto___25358,out){
return (function() {
var cljs$core$async$state_machine__23360__auto__ = null;
var cljs$core$async$state_machine__23360__auto____0 = (function (){
var statearr_25353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25353[(0)] = cljs$core$async$state_machine__23360__auto__);

(statearr_25353[(1)] = (1));

return statearr_25353;
});
var cljs$core$async$state_machine__23360__auto____1 = (function (state_25330){
while(true){
var ret_value__23361__auto__ = (function (){try{while(true){
var result__23362__auto__ = switch__23359__auto__.call(null,state_25330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23362__auto__;
}
break;
}
}catch (e25354){if((e25354 instanceof Object)){
var ex__23363__auto__ = e25354;
var statearr_25355_25373 = state_25330;
(statearr_25355_25373[(5)] = ex__23363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25374 = state_25330;
state_25330 = G__25374;
continue;
} else {
return ret_value__23361__auto__;
}
break;
}
});
cljs$core$async$state_machine__23360__auto__ = function(state_25330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23360__auto____1.call(this,state_25330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23360__auto____0;
cljs$core$async$state_machine__23360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23360__auto____1;
return cljs$core$async$state_machine__23360__auto__;
})()
;})(switch__23359__auto__,c__23454__auto___25358,out))
})();
var state__23456__auto__ = (function (){var statearr_25356 = f__23455__auto__.call(null);
(statearr_25356[(6)] = c__23454__auto___25358);

return statearr_25356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23456__auto__);
});})(c__23454__auto___25358,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1598038765993
