// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28653 = [];
var len__25865__auto___28659 = arguments.length;
var i__25866__auto___28660 = (0);
while(true){
if((i__25866__auto___28660 < len__25865__auto___28659)){
args28653.push((arguments[i__25866__auto___28660]));

var G__28661 = (i__25866__auto___28660 + (1));
i__25866__auto___28660 = G__28661;
continue;
} else {
}
break;
}

var G__28655 = args28653.length;
switch (G__28655) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28653.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28656 = (function (f,blockable,meta28657){
this.f = f;
this.blockable = blockable;
this.meta28657 = meta28657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28658,meta28657__$1){
var self__ = this;
var _28658__$1 = this;
return (new cljs.core.async.t_cljs$core$async28656(self__.f,self__.blockable,meta28657__$1));
});

cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28658){
var self__ = this;
var _28658__$1 = this;
return self__.meta28657;
});

cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28657","meta28657",1703923460,null)], null);
});

cljs.core.async.t_cljs$core$async28656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28656";

cljs.core.async.t_cljs$core$async28656.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28656");
});

cljs.core.async.__GT_t_cljs$core$async28656 = (function cljs$core$async$__GT_t_cljs$core$async28656(f__$1,blockable__$1,meta28657){
return (new cljs.core.async.t_cljs$core$async28656(f__$1,blockable__$1,meta28657));
});

}

return (new cljs.core.async.t_cljs$core$async28656(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args28665 = [];
var len__25865__auto___28668 = arguments.length;
var i__25866__auto___28669 = (0);
while(true){
if((i__25866__auto___28669 < len__25865__auto___28668)){
args28665.push((arguments[i__25866__auto___28669]));

var G__28670 = (i__25866__auto___28669 + (1));
i__25866__auto___28669 = G__28670;
continue;
} else {
}
break;
}

var G__28667 = args28665.length;
switch (G__28667) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28665.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args28672 = [];
var len__25865__auto___28675 = arguments.length;
var i__25866__auto___28676 = (0);
while(true){
if((i__25866__auto___28676 < len__25865__auto___28675)){
args28672.push((arguments[i__25866__auto___28676]));

var G__28677 = (i__25866__auto___28676 + (1));
i__25866__auto___28676 = G__28677;
continue;
} else {
}
break;
}

var G__28674 = args28672.length;
switch (G__28674) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28672.length)].join('')));

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
var args28679 = [];
var len__25865__auto___28682 = arguments.length;
var i__25866__auto___28683 = (0);
while(true){
if((i__25866__auto___28683 < len__25865__auto___28682)){
args28679.push((arguments[i__25866__auto___28683]));

var G__28684 = (i__25866__auto___28683 + (1));
i__25866__auto___28683 = G__28684;
continue;
} else {
}
break;
}

var G__28681 = args28679.length;
switch (G__28681) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28679.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28686 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28686);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28686,ret){
return (function (){
return fn1.call(null,val_28686);
});})(val_28686,ret))
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
var args28687 = [];
var len__25865__auto___28690 = arguments.length;
var i__25866__auto___28691 = (0);
while(true){
if((i__25866__auto___28691 < len__25865__auto___28690)){
args28687.push((arguments[i__25866__auto___28691]));

var G__28692 = (i__25866__auto___28691 + (1));
i__25866__auto___28691 = G__28692;
continue;
} else {
}
break;
}

var G__28689 = args28687.length;
switch (G__28689) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28687.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__25705__auto___28694 = n;
var x_28695 = (0);
while(true){
if((x_28695 < n__25705__auto___28694)){
(a[x_28695] = (0));

var G__28696 = (x_28695 + (1));
x_28695 = G__28696;
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

var G__28697 = (i + (1));
i = G__28697;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28701 = (function (alt_flag,flag,meta28702){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28702 = meta28702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28703,meta28702__$1){
var self__ = this;
var _28703__$1 = this;
return (new cljs.core.async.t_cljs$core$async28701(self__.alt_flag,self__.flag,meta28702__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28703){
var self__ = this;
var _28703__$1 = this;
return self__.meta28702;
});})(flag))
;

cljs.core.async.t_cljs$core$async28701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28701.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28702","meta28702",-557256257,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28701";

cljs.core.async.t_cljs$core$async28701.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28701");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28701 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28701(alt_flag__$1,flag__$1,meta28702){
return (new cljs.core.async.t_cljs$core$async28701(alt_flag__$1,flag__$1,meta28702));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28701(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28707 = (function (alt_handler,flag,cb,meta28708){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28708 = meta28708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28709,meta28708__$1){
var self__ = this;
var _28709__$1 = this;
return (new cljs.core.async.t_cljs$core$async28707(self__.alt_handler,self__.flag,self__.cb,meta28708__$1));
});

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28709){
var self__ = this;
var _28709__$1 = this;
return self__.meta28708;
});

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28708","meta28708",784164229,null)], null);
});

cljs.core.async.t_cljs$core$async28707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28707";

cljs.core.async.t_cljs$core$async28707.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28707");
});

cljs.core.async.__GT_t_cljs$core$async28707 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28707(alt_handler__$1,flag__$1,cb__$1,meta28708){
return (new cljs.core.async.t_cljs$core$async28707(alt_handler__$1,flag__$1,cb__$1,meta28708));
});

}

return (new cljs.core.async.t_cljs$core$async28707(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28710_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28711_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24790__auto__ = wport;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28712 = (i + (1));
i = G__28712;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24790__auto__ = ret;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24778__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24778__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__25872__auto__ = [];
var len__25865__auto___28718 = arguments.length;
var i__25866__auto___28719 = (0);
while(true){
if((i__25866__auto___28719 < len__25865__auto___28718)){
args__25872__auto__.push((arguments[i__25866__auto___28719]));

var G__28720 = (i__25866__auto___28719 + (1));
i__25866__auto___28719 = G__28720;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28715){
var map__28716 = p__28715;
var map__28716__$1 = ((((!((map__28716 == null)))?((((map__28716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28716):map__28716);
var opts = map__28716__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28713){
var G__28714 = cljs.core.first.call(null,seq28713);
var seq28713__$1 = cljs.core.next.call(null,seq28713);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28714,seq28713__$1);
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
var args28721 = [];
var len__25865__auto___28771 = arguments.length;
var i__25866__auto___28772 = (0);
while(true){
if((i__25866__auto___28772 < len__25865__auto___28771)){
args28721.push((arguments[i__25866__auto___28772]));

var G__28773 = (i__25866__auto___28772 + (1));
i__25866__auto___28772 = G__28773;
continue;
} else {
}
break;
}

var G__28723 = args28721.length;
switch (G__28723) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28721.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28608__auto___28775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___28775){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___28775){
return (function (state_28747){
var state_val_28748 = (state_28747[(1)]);
if((state_val_28748 === (7))){
var inst_28743 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
var statearr_28749_28776 = state_28747__$1;
(statearr_28749_28776[(2)] = inst_28743);

(statearr_28749_28776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (1))){
var state_28747__$1 = state_28747;
var statearr_28750_28777 = state_28747__$1;
(statearr_28750_28777[(2)] = null);

(statearr_28750_28777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (4))){
var inst_28726 = (state_28747[(7)]);
var inst_28726__$1 = (state_28747[(2)]);
var inst_28727 = (inst_28726__$1 == null);
var state_28747__$1 = (function (){var statearr_28751 = state_28747;
(statearr_28751[(7)] = inst_28726__$1);

return statearr_28751;
})();
if(cljs.core.truth_(inst_28727)){
var statearr_28752_28778 = state_28747__$1;
(statearr_28752_28778[(1)] = (5));

} else {
var statearr_28753_28779 = state_28747__$1;
(statearr_28753_28779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (13))){
var state_28747__$1 = state_28747;
var statearr_28754_28780 = state_28747__$1;
(statearr_28754_28780[(2)] = null);

(statearr_28754_28780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (6))){
var inst_28726 = (state_28747[(7)]);
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28747__$1,(11),to,inst_28726);
} else {
if((state_val_28748 === (3))){
var inst_28745 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28747__$1,inst_28745);
} else {
if((state_val_28748 === (12))){
var state_28747__$1 = state_28747;
var statearr_28755_28781 = state_28747__$1;
(statearr_28755_28781[(2)] = null);

(statearr_28755_28781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (2))){
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28747__$1,(4),from);
} else {
if((state_val_28748 === (11))){
var inst_28736 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
if(cljs.core.truth_(inst_28736)){
var statearr_28756_28782 = state_28747__$1;
(statearr_28756_28782[(1)] = (12));

} else {
var statearr_28757_28783 = state_28747__$1;
(statearr_28757_28783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (9))){
var state_28747__$1 = state_28747;
var statearr_28758_28784 = state_28747__$1;
(statearr_28758_28784[(2)] = null);

(statearr_28758_28784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (5))){
var state_28747__$1 = state_28747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28759_28785 = state_28747__$1;
(statearr_28759_28785[(1)] = (8));

} else {
var statearr_28760_28786 = state_28747__$1;
(statearr_28760_28786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (14))){
var inst_28741 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
var statearr_28761_28787 = state_28747__$1;
(statearr_28761_28787[(2)] = inst_28741);

(statearr_28761_28787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (10))){
var inst_28733 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
var statearr_28762_28788 = state_28747__$1;
(statearr_28762_28788[(2)] = inst_28733);

(statearr_28762_28788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28748 === (8))){
var inst_28730 = cljs.core.async.close_BANG_.call(null,to);
var state_28747__$1 = state_28747;
var statearr_28763_28789 = state_28747__$1;
(statearr_28763_28789[(2)] = inst_28730);

(statearr_28763_28789[(1)] = (10));


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
});})(c__28608__auto___28775))
;
return ((function (switch__28496__auto__,c__28608__auto___28775){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_28767 = [null,null,null,null,null,null,null,null];
(statearr_28767[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_28767[(1)] = (1));

return statearr_28767;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_28747){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_28747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e28768){if((e28768 instanceof Object)){
var ex__28500__auto__ = e28768;
var statearr_28769_28790 = state_28747;
(statearr_28769_28790[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28791 = state_28747;
state_28747 = G__28791;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_28747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_28747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___28775))
})();
var state__28610__auto__ = (function (){var statearr_28770 = f__28609__auto__.call(null);
(statearr_28770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___28775);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___28775))
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
return (function (p__28979){
var vec__28980 = p__28979;
var v = cljs.core.nth.call(null,vec__28980,(0),null);
var p = cljs.core.nth.call(null,vec__28980,(1),null);
var job = vec__28980;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28608__auto___29166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___29166,res,vec__28980,v,p,job,jobs,results){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___29166,res,vec__28980,v,p,job,jobs,results){
return (function (state_28987){
var state_val_28988 = (state_28987[(1)]);
if((state_val_28988 === (1))){
var state_28987__$1 = state_28987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28987__$1,(2),res,v);
} else {
if((state_val_28988 === (2))){
var inst_28984 = (state_28987[(2)]);
var inst_28985 = cljs.core.async.close_BANG_.call(null,res);
var state_28987__$1 = (function (){var statearr_28989 = state_28987;
(statearr_28989[(7)] = inst_28984);

return statearr_28989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28987__$1,inst_28985);
} else {
return null;
}
}
});})(c__28608__auto___29166,res,vec__28980,v,p,job,jobs,results))
;
return ((function (switch__28496__auto__,c__28608__auto___29166,res,vec__28980,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_28993 = [null,null,null,null,null,null,null,null];
(statearr_28993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_28993[(1)] = (1));

return statearr_28993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_28987){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_28987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e28994){if((e28994 instanceof Object)){
var ex__28500__auto__ = e28994;
var statearr_28995_29167 = state_28987;
(statearr_28995_29167[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29168 = state_28987;
state_28987 = G__29168;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_28987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_28987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___29166,res,vec__28980,v,p,job,jobs,results))
})();
var state__28610__auto__ = (function (){var statearr_28996 = f__28609__auto__.call(null);
(statearr_28996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___29166);

return statearr_28996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___29166,res,vec__28980,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28997){
var vec__28998 = p__28997;
var v = cljs.core.nth.call(null,vec__28998,(0),null);
var p = cljs.core.nth.call(null,vec__28998,(1),null);
var job = vec__28998;
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
var n__25705__auto___29169 = n;
var __29170 = (0);
while(true){
if((__29170 < n__25705__auto___29169)){
var G__29001_29171 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29001_29171) {
case "compute":
var c__28608__auto___29173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29170,c__28608__auto___29173,G__29001_29171,n__25705__auto___29169,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (__29170,c__28608__auto___29173,G__29001_29171,n__25705__auto___29169,jobs,results,process,async){
return (function (state_29014){
var state_val_29015 = (state_29014[(1)]);
if((state_val_29015 === (1))){
var state_29014__$1 = state_29014;
var statearr_29016_29174 = state_29014__$1;
(statearr_29016_29174[(2)] = null);

(statearr_29016_29174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (2))){
var state_29014__$1 = state_29014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29014__$1,(4),jobs);
} else {
if((state_val_29015 === (3))){
var inst_29012 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29014__$1,inst_29012);
} else {
if((state_val_29015 === (4))){
var inst_29004 = (state_29014[(2)]);
var inst_29005 = process.call(null,inst_29004);
var state_29014__$1 = state_29014;
if(cljs.core.truth_(inst_29005)){
var statearr_29017_29175 = state_29014__$1;
(statearr_29017_29175[(1)] = (5));

} else {
var statearr_29018_29176 = state_29014__$1;
(statearr_29018_29176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (5))){
var state_29014__$1 = state_29014;
var statearr_29019_29177 = state_29014__$1;
(statearr_29019_29177[(2)] = null);

(statearr_29019_29177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (6))){
var state_29014__$1 = state_29014;
var statearr_29020_29178 = state_29014__$1;
(statearr_29020_29178[(2)] = null);

(statearr_29020_29178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (7))){
var inst_29010 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
var statearr_29021_29179 = state_29014__$1;
(statearr_29021_29179[(2)] = inst_29010);

(statearr_29021_29179[(1)] = (3));


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
});})(__29170,c__28608__auto___29173,G__29001_29171,n__25705__auto___29169,jobs,results,process,async))
;
return ((function (__29170,switch__28496__auto__,c__28608__auto___29173,G__29001_29171,n__25705__auto___29169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null];
(statearr_29025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_29014){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_29014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__28500__auto__ = e29026;
var statearr_29027_29180 = state_29014;
(statearr_29027_29180[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29181 = state_29014;
state_29014 = G__29181;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_29014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_29014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(__29170,switch__28496__auto__,c__28608__auto___29173,G__29001_29171,n__25705__auto___29169,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_29028 = f__28609__auto__.call(null);
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___29173);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(__29170,c__28608__auto___29173,G__29001_29171,n__25705__auto___29169,jobs,results,process,async))
);


break;
case "async":
var c__28608__auto___29182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29170,c__28608__auto___29182,G__29001_29171,n__25705__auto___29169,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (__29170,c__28608__auto___29182,G__29001_29171,n__25705__auto___29169,jobs,results,process,async){
return (function (state_29041){
var state_val_29042 = (state_29041[(1)]);
if((state_val_29042 === (1))){
var state_29041__$1 = state_29041;
var statearr_29043_29183 = state_29041__$1;
(statearr_29043_29183[(2)] = null);

(statearr_29043_29183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (2))){
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29041__$1,(4),jobs);
} else {
if((state_val_29042 === (3))){
var inst_29039 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29041__$1,inst_29039);
} else {
if((state_val_29042 === (4))){
var inst_29031 = (state_29041[(2)]);
var inst_29032 = async.call(null,inst_29031);
var state_29041__$1 = state_29041;
if(cljs.core.truth_(inst_29032)){
var statearr_29044_29184 = state_29041__$1;
(statearr_29044_29184[(1)] = (5));

} else {
var statearr_29045_29185 = state_29041__$1;
(statearr_29045_29185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (5))){
var state_29041__$1 = state_29041;
var statearr_29046_29186 = state_29041__$1;
(statearr_29046_29186[(2)] = null);

(statearr_29046_29186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (6))){
var state_29041__$1 = state_29041;
var statearr_29047_29187 = state_29041__$1;
(statearr_29047_29187[(2)] = null);

(statearr_29047_29187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (7))){
var inst_29037 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29048_29188 = state_29041__$1;
(statearr_29048_29188[(2)] = inst_29037);

(statearr_29048_29188[(1)] = (3));


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
});})(__29170,c__28608__auto___29182,G__29001_29171,n__25705__auto___29169,jobs,results,process,async))
;
return ((function (__29170,switch__28496__auto__,c__28608__auto___29182,G__29001_29171,n__25705__auto___29169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_29052 = [null,null,null,null,null,null,null];
(statearr_29052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_29052[(1)] = (1));

return statearr_29052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_29041){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_29041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e29053){if((e29053 instanceof Object)){
var ex__28500__auto__ = e29053;
var statearr_29054_29189 = state_29041;
(statearr_29054_29189[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29190 = state_29041;
state_29041 = G__29190;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_29041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_29041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(__29170,switch__28496__auto__,c__28608__auto___29182,G__29001_29171,n__25705__auto___29169,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_29055 = f__28609__auto__.call(null);
(statearr_29055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___29182);

return statearr_29055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(__29170,c__28608__auto___29182,G__29001_29171,n__25705__auto___29169,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29191 = (__29170 + (1));
__29170 = G__29191;
continue;
} else {
}
break;
}

var c__28608__auto___29192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___29192,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___29192,jobs,results,process,async){
return (function (state_29077){
var state_val_29078 = (state_29077[(1)]);
if((state_val_29078 === (1))){
var state_29077__$1 = state_29077;
var statearr_29079_29193 = state_29077__$1;
(statearr_29079_29193[(2)] = null);

(statearr_29079_29193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (2))){
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29077__$1,(4),from);
} else {
if((state_val_29078 === (3))){
var inst_29075 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29077__$1,inst_29075);
} else {
if((state_val_29078 === (4))){
var inst_29058 = (state_29077[(7)]);
var inst_29058__$1 = (state_29077[(2)]);
var inst_29059 = (inst_29058__$1 == null);
var state_29077__$1 = (function (){var statearr_29080 = state_29077;
(statearr_29080[(7)] = inst_29058__$1);

return statearr_29080;
})();
if(cljs.core.truth_(inst_29059)){
var statearr_29081_29194 = state_29077__$1;
(statearr_29081_29194[(1)] = (5));

} else {
var statearr_29082_29195 = state_29077__$1;
(statearr_29082_29195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (5))){
var inst_29061 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29077__$1 = state_29077;
var statearr_29083_29196 = state_29077__$1;
(statearr_29083_29196[(2)] = inst_29061);

(statearr_29083_29196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (6))){
var inst_29063 = (state_29077[(8)]);
var inst_29058 = (state_29077[(7)]);
var inst_29063__$1 = cljs.core.async.chan.call(null,(1));
var inst_29064 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29065 = [inst_29058,inst_29063__$1];
var inst_29066 = (new cljs.core.PersistentVector(null,2,(5),inst_29064,inst_29065,null));
var state_29077__$1 = (function (){var statearr_29084 = state_29077;
(statearr_29084[(8)] = inst_29063__$1);

return statearr_29084;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29077__$1,(8),jobs,inst_29066);
} else {
if((state_val_29078 === (7))){
var inst_29073 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
var statearr_29085_29197 = state_29077__$1;
(statearr_29085_29197[(2)] = inst_29073);

(statearr_29085_29197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (8))){
var inst_29063 = (state_29077[(8)]);
var inst_29068 = (state_29077[(2)]);
var state_29077__$1 = (function (){var statearr_29086 = state_29077;
(statearr_29086[(9)] = inst_29068);

return statearr_29086;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29077__$1,(9),results,inst_29063);
} else {
if((state_val_29078 === (9))){
var inst_29070 = (state_29077[(2)]);
var state_29077__$1 = (function (){var statearr_29087 = state_29077;
(statearr_29087[(10)] = inst_29070);

return statearr_29087;
})();
var statearr_29088_29198 = state_29077__$1;
(statearr_29088_29198[(2)] = null);

(statearr_29088_29198[(1)] = (2));


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
});})(c__28608__auto___29192,jobs,results,process,async))
;
return ((function (switch__28496__auto__,c__28608__auto___29192,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_29092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_29092[(1)] = (1));

return statearr_29092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_29077){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_29077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e29093){if((e29093 instanceof Object)){
var ex__28500__auto__ = e29093;
var statearr_29094_29199 = state_29077;
(statearr_29094_29199[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29200 = state_29077;
state_29077 = G__29200;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_29077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_29077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___29192,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_29095 = f__28609__auto__.call(null);
(statearr_29095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___29192);

return statearr_29095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___29192,jobs,results,process,async))
);


var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__,jobs,results,process,async){
return (function (state_29133){
var state_val_29134 = (state_29133[(1)]);
if((state_val_29134 === (7))){
var inst_29129 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
var statearr_29135_29201 = state_29133__$1;
(statearr_29135_29201[(2)] = inst_29129);

(statearr_29135_29201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (20))){
var state_29133__$1 = state_29133;
var statearr_29136_29202 = state_29133__$1;
(statearr_29136_29202[(2)] = null);

(statearr_29136_29202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (1))){
var state_29133__$1 = state_29133;
var statearr_29137_29203 = state_29133__$1;
(statearr_29137_29203[(2)] = null);

(statearr_29137_29203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (4))){
var inst_29098 = (state_29133[(7)]);
var inst_29098__$1 = (state_29133[(2)]);
var inst_29099 = (inst_29098__$1 == null);
var state_29133__$1 = (function (){var statearr_29138 = state_29133;
(statearr_29138[(7)] = inst_29098__$1);

return statearr_29138;
})();
if(cljs.core.truth_(inst_29099)){
var statearr_29139_29204 = state_29133__$1;
(statearr_29139_29204[(1)] = (5));

} else {
var statearr_29140_29205 = state_29133__$1;
(statearr_29140_29205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (15))){
var inst_29111 = (state_29133[(8)]);
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29133__$1,(18),to,inst_29111);
} else {
if((state_val_29134 === (21))){
var inst_29124 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
var statearr_29141_29206 = state_29133__$1;
(statearr_29141_29206[(2)] = inst_29124);

(statearr_29141_29206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (13))){
var inst_29126 = (state_29133[(2)]);
var state_29133__$1 = (function (){var statearr_29142 = state_29133;
(statearr_29142[(9)] = inst_29126);

return statearr_29142;
})();
var statearr_29143_29207 = state_29133__$1;
(statearr_29143_29207[(2)] = null);

(statearr_29143_29207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (6))){
var inst_29098 = (state_29133[(7)]);
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29133__$1,(11),inst_29098);
} else {
if((state_val_29134 === (17))){
var inst_29119 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
if(cljs.core.truth_(inst_29119)){
var statearr_29144_29208 = state_29133__$1;
(statearr_29144_29208[(1)] = (19));

} else {
var statearr_29145_29209 = state_29133__$1;
(statearr_29145_29209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (3))){
var inst_29131 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29133__$1,inst_29131);
} else {
if((state_val_29134 === (12))){
var inst_29108 = (state_29133[(10)]);
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29133__$1,(14),inst_29108);
} else {
if((state_val_29134 === (2))){
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29133__$1,(4),results);
} else {
if((state_val_29134 === (19))){
var state_29133__$1 = state_29133;
var statearr_29146_29210 = state_29133__$1;
(statearr_29146_29210[(2)] = null);

(statearr_29146_29210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (11))){
var inst_29108 = (state_29133[(2)]);
var state_29133__$1 = (function (){var statearr_29147 = state_29133;
(statearr_29147[(10)] = inst_29108);

return statearr_29147;
})();
var statearr_29148_29211 = state_29133__$1;
(statearr_29148_29211[(2)] = null);

(statearr_29148_29211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (9))){
var state_29133__$1 = state_29133;
var statearr_29149_29212 = state_29133__$1;
(statearr_29149_29212[(2)] = null);

(statearr_29149_29212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (5))){
var state_29133__$1 = state_29133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29150_29213 = state_29133__$1;
(statearr_29150_29213[(1)] = (8));

} else {
var statearr_29151_29214 = state_29133__$1;
(statearr_29151_29214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (14))){
var inst_29113 = (state_29133[(11)]);
var inst_29111 = (state_29133[(8)]);
var inst_29111__$1 = (state_29133[(2)]);
var inst_29112 = (inst_29111__$1 == null);
var inst_29113__$1 = cljs.core.not.call(null,inst_29112);
var state_29133__$1 = (function (){var statearr_29152 = state_29133;
(statearr_29152[(11)] = inst_29113__$1);

(statearr_29152[(8)] = inst_29111__$1);

return statearr_29152;
})();
if(inst_29113__$1){
var statearr_29153_29215 = state_29133__$1;
(statearr_29153_29215[(1)] = (15));

} else {
var statearr_29154_29216 = state_29133__$1;
(statearr_29154_29216[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (16))){
var inst_29113 = (state_29133[(11)]);
var state_29133__$1 = state_29133;
var statearr_29155_29217 = state_29133__$1;
(statearr_29155_29217[(2)] = inst_29113);

(statearr_29155_29217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (10))){
var inst_29105 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
var statearr_29156_29218 = state_29133__$1;
(statearr_29156_29218[(2)] = inst_29105);

(statearr_29156_29218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (18))){
var inst_29116 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
var statearr_29157_29219 = state_29133__$1;
(statearr_29157_29219[(2)] = inst_29116);

(statearr_29157_29219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (8))){
var inst_29102 = cljs.core.async.close_BANG_.call(null,to);
var state_29133__$1 = state_29133;
var statearr_29158_29220 = state_29133__$1;
(statearr_29158_29220[(2)] = inst_29102);

(statearr_29158_29220[(1)] = (10));


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
});})(c__28608__auto__,jobs,results,process,async))
;
return ((function (switch__28496__auto__,c__28608__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_29162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_29162[(1)] = (1));

return statearr_29162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_29133){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_29133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e29163){if((e29163 instanceof Object)){
var ex__28500__auto__ = e29163;
var statearr_29164_29221 = state_29133;
(statearr_29164_29221[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29222 = state_29133;
state_29133 = G__29222;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_29133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_29133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_29165 = f__28609__auto__.call(null);
(statearr_29165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_29165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__,jobs,results,process,async))
);

return c__28608__auto__;
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
var args29223 = [];
var len__25865__auto___29226 = arguments.length;
var i__25866__auto___29227 = (0);
while(true){
if((i__25866__auto___29227 < len__25865__auto___29226)){
args29223.push((arguments[i__25866__auto___29227]));

var G__29228 = (i__25866__auto___29227 + (1));
i__25866__auto___29227 = G__29228;
continue;
} else {
}
break;
}

var G__29225 = args29223.length;
switch (G__29225) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29223.length)].join('')));

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
var args29230 = [];
var len__25865__auto___29233 = arguments.length;
var i__25866__auto___29234 = (0);
while(true){
if((i__25866__auto___29234 < len__25865__auto___29233)){
args29230.push((arguments[i__25866__auto___29234]));

var G__29235 = (i__25866__auto___29234 + (1));
i__25866__auto___29234 = G__29235;
continue;
} else {
}
break;
}

var G__29232 = args29230.length;
switch (G__29232) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29230.length)].join('')));

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
var args29237 = [];
var len__25865__auto___29290 = arguments.length;
var i__25866__auto___29291 = (0);
while(true){
if((i__25866__auto___29291 < len__25865__auto___29290)){
args29237.push((arguments[i__25866__auto___29291]));

var G__29292 = (i__25866__auto___29291 + (1));
i__25866__auto___29291 = G__29292;
continue;
} else {
}
break;
}

var G__29239 = args29237.length;
switch (G__29239) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29237.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28608__auto___29294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___29294,tc,fc){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___29294,tc,fc){
return (function (state_29265){
var state_val_29266 = (state_29265[(1)]);
if((state_val_29266 === (7))){
var inst_29261 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29267_29295 = state_29265__$1;
(statearr_29267_29295[(2)] = inst_29261);

(statearr_29267_29295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (1))){
var state_29265__$1 = state_29265;
var statearr_29268_29296 = state_29265__$1;
(statearr_29268_29296[(2)] = null);

(statearr_29268_29296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (4))){
var inst_29242 = (state_29265[(7)]);
var inst_29242__$1 = (state_29265[(2)]);
var inst_29243 = (inst_29242__$1 == null);
var state_29265__$1 = (function (){var statearr_29269 = state_29265;
(statearr_29269[(7)] = inst_29242__$1);

return statearr_29269;
})();
if(cljs.core.truth_(inst_29243)){
var statearr_29270_29297 = state_29265__$1;
(statearr_29270_29297[(1)] = (5));

} else {
var statearr_29271_29298 = state_29265__$1;
(statearr_29271_29298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (13))){
var state_29265__$1 = state_29265;
var statearr_29272_29299 = state_29265__$1;
(statearr_29272_29299[(2)] = null);

(statearr_29272_29299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (6))){
var inst_29242 = (state_29265[(7)]);
var inst_29248 = p.call(null,inst_29242);
var state_29265__$1 = state_29265;
if(cljs.core.truth_(inst_29248)){
var statearr_29273_29300 = state_29265__$1;
(statearr_29273_29300[(1)] = (9));

} else {
var statearr_29274_29301 = state_29265__$1;
(statearr_29274_29301[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (3))){
var inst_29263 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29265__$1,inst_29263);
} else {
if((state_val_29266 === (12))){
var state_29265__$1 = state_29265;
var statearr_29275_29302 = state_29265__$1;
(statearr_29275_29302[(2)] = null);

(statearr_29275_29302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (2))){
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(4),ch);
} else {
if((state_val_29266 === (11))){
var inst_29242 = (state_29265[(7)]);
var inst_29252 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29265__$1,(8),inst_29252,inst_29242);
} else {
if((state_val_29266 === (9))){
var state_29265__$1 = state_29265;
var statearr_29276_29303 = state_29265__$1;
(statearr_29276_29303[(2)] = tc);

(statearr_29276_29303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (5))){
var inst_29245 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29246 = cljs.core.async.close_BANG_.call(null,fc);
var state_29265__$1 = (function (){var statearr_29277 = state_29265;
(statearr_29277[(8)] = inst_29245);

return statearr_29277;
})();
var statearr_29278_29304 = state_29265__$1;
(statearr_29278_29304[(2)] = inst_29246);

(statearr_29278_29304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (14))){
var inst_29259 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29279_29305 = state_29265__$1;
(statearr_29279_29305[(2)] = inst_29259);

(statearr_29279_29305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (10))){
var state_29265__$1 = state_29265;
var statearr_29280_29306 = state_29265__$1;
(statearr_29280_29306[(2)] = fc);

(statearr_29280_29306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (8))){
var inst_29254 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
if(cljs.core.truth_(inst_29254)){
var statearr_29281_29307 = state_29265__$1;
(statearr_29281_29307[(1)] = (12));

} else {
var statearr_29282_29308 = state_29265__$1;
(statearr_29282_29308[(1)] = (13));

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
});})(c__28608__auto___29294,tc,fc))
;
return ((function (switch__28496__auto__,c__28608__auto___29294,tc,fc){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_29286 = [null,null,null,null,null,null,null,null,null];
(statearr_29286[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_29286[(1)] = (1));

return statearr_29286;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_29265){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_29265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e29287){if((e29287 instanceof Object)){
var ex__28500__auto__ = e29287;
var statearr_29288_29309 = state_29265;
(statearr_29288_29309[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29310 = state_29265;
state_29265 = G__29310;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_29265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_29265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___29294,tc,fc))
})();
var state__28610__auto__ = (function (){var statearr_29289 = f__28609__auto__.call(null);
(statearr_29289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___29294);

return statearr_29289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___29294,tc,fc))
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
var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__){
return (function (state_29374){
var state_val_29375 = (state_29374[(1)]);
if((state_val_29375 === (7))){
var inst_29370 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29376_29397 = state_29374__$1;
(statearr_29376_29397[(2)] = inst_29370);

(statearr_29376_29397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (1))){
var inst_29354 = init;
var state_29374__$1 = (function (){var statearr_29377 = state_29374;
(statearr_29377[(7)] = inst_29354);

return statearr_29377;
})();
var statearr_29378_29398 = state_29374__$1;
(statearr_29378_29398[(2)] = null);

(statearr_29378_29398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (4))){
var inst_29357 = (state_29374[(8)]);
var inst_29357__$1 = (state_29374[(2)]);
var inst_29358 = (inst_29357__$1 == null);
var state_29374__$1 = (function (){var statearr_29379 = state_29374;
(statearr_29379[(8)] = inst_29357__$1);

return statearr_29379;
})();
if(cljs.core.truth_(inst_29358)){
var statearr_29380_29399 = state_29374__$1;
(statearr_29380_29399[(1)] = (5));

} else {
var statearr_29381_29400 = state_29374__$1;
(statearr_29381_29400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (6))){
var inst_29354 = (state_29374[(7)]);
var inst_29357 = (state_29374[(8)]);
var inst_29361 = (state_29374[(9)]);
var inst_29361__$1 = f.call(null,inst_29354,inst_29357);
var inst_29362 = cljs.core.reduced_QMARK_.call(null,inst_29361__$1);
var state_29374__$1 = (function (){var statearr_29382 = state_29374;
(statearr_29382[(9)] = inst_29361__$1);

return statearr_29382;
})();
if(inst_29362){
var statearr_29383_29401 = state_29374__$1;
(statearr_29383_29401[(1)] = (8));

} else {
var statearr_29384_29402 = state_29374__$1;
(statearr_29384_29402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (3))){
var inst_29372 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29374__$1,inst_29372);
} else {
if((state_val_29375 === (2))){
var state_29374__$1 = state_29374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29374__$1,(4),ch);
} else {
if((state_val_29375 === (9))){
var inst_29361 = (state_29374[(9)]);
var inst_29354 = inst_29361;
var state_29374__$1 = (function (){var statearr_29385 = state_29374;
(statearr_29385[(7)] = inst_29354);

return statearr_29385;
})();
var statearr_29386_29403 = state_29374__$1;
(statearr_29386_29403[(2)] = null);

(statearr_29386_29403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (5))){
var inst_29354 = (state_29374[(7)]);
var state_29374__$1 = state_29374;
var statearr_29387_29404 = state_29374__$1;
(statearr_29387_29404[(2)] = inst_29354);

(statearr_29387_29404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (10))){
var inst_29368 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29388_29405 = state_29374__$1;
(statearr_29388_29405[(2)] = inst_29368);

(statearr_29388_29405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (8))){
var inst_29361 = (state_29374[(9)]);
var inst_29364 = cljs.core.deref.call(null,inst_29361);
var state_29374__$1 = state_29374;
var statearr_29389_29406 = state_29374__$1;
(statearr_29389_29406[(2)] = inst_29364);

(statearr_29389_29406[(1)] = (10));


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
});})(c__28608__auto__))
;
return ((function (switch__28496__auto__,c__28608__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28497__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28497__auto____0 = (function (){
var statearr_29393 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29393[(0)] = cljs$core$async$reduce_$_state_machine__28497__auto__);

(statearr_29393[(1)] = (1));

return statearr_29393;
});
var cljs$core$async$reduce_$_state_machine__28497__auto____1 = (function (state_29374){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_29374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e29394){if((e29394 instanceof Object)){
var ex__28500__auto__ = e29394;
var statearr_29395_29407 = state_29374;
(statearr_29395_29407[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29408 = state_29374;
state_29374 = G__29408;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28497__auto__ = function(state_29374){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28497__auto____1.call(this,state_29374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28497__auto____0;
cljs$core$async$reduce_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28497__auto____1;
return cljs$core$async$reduce_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_29396 = f__28609__auto__.call(null);
(statearr_29396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_29396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__))
);

return c__28608__auto__;
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
var args29409 = [];
var len__25865__auto___29461 = arguments.length;
var i__25866__auto___29462 = (0);
while(true){
if((i__25866__auto___29462 < len__25865__auto___29461)){
args29409.push((arguments[i__25866__auto___29462]));

var G__29463 = (i__25866__auto___29462 + (1));
i__25866__auto___29462 = G__29463;
continue;
} else {
}
break;
}

var G__29411 = args29409.length;
switch (G__29411) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29409.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__){
return (function (state_29436){
var state_val_29437 = (state_29436[(1)]);
if((state_val_29437 === (7))){
var inst_29418 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29438_29465 = state_29436__$1;
(statearr_29438_29465[(2)] = inst_29418);

(statearr_29438_29465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (1))){
var inst_29412 = cljs.core.seq.call(null,coll);
var inst_29413 = inst_29412;
var state_29436__$1 = (function (){var statearr_29439 = state_29436;
(statearr_29439[(7)] = inst_29413);

return statearr_29439;
})();
var statearr_29440_29466 = state_29436__$1;
(statearr_29440_29466[(2)] = null);

(statearr_29440_29466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (4))){
var inst_29413 = (state_29436[(7)]);
var inst_29416 = cljs.core.first.call(null,inst_29413);
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29436__$1,(7),ch,inst_29416);
} else {
if((state_val_29437 === (13))){
var inst_29430 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29441_29467 = state_29436__$1;
(statearr_29441_29467[(2)] = inst_29430);

(statearr_29441_29467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (6))){
var inst_29421 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
if(cljs.core.truth_(inst_29421)){
var statearr_29442_29468 = state_29436__$1;
(statearr_29442_29468[(1)] = (8));

} else {
var statearr_29443_29469 = state_29436__$1;
(statearr_29443_29469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (3))){
var inst_29434 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29436__$1,inst_29434);
} else {
if((state_val_29437 === (12))){
var state_29436__$1 = state_29436;
var statearr_29444_29470 = state_29436__$1;
(statearr_29444_29470[(2)] = null);

(statearr_29444_29470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (2))){
var inst_29413 = (state_29436[(7)]);
var state_29436__$1 = state_29436;
if(cljs.core.truth_(inst_29413)){
var statearr_29445_29471 = state_29436__$1;
(statearr_29445_29471[(1)] = (4));

} else {
var statearr_29446_29472 = state_29436__$1;
(statearr_29446_29472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (11))){
var inst_29427 = cljs.core.async.close_BANG_.call(null,ch);
var state_29436__$1 = state_29436;
var statearr_29447_29473 = state_29436__$1;
(statearr_29447_29473[(2)] = inst_29427);

(statearr_29447_29473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (9))){
var state_29436__$1 = state_29436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29448_29474 = state_29436__$1;
(statearr_29448_29474[(1)] = (11));

} else {
var statearr_29449_29475 = state_29436__$1;
(statearr_29449_29475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (5))){
var inst_29413 = (state_29436[(7)]);
var state_29436__$1 = state_29436;
var statearr_29450_29476 = state_29436__$1;
(statearr_29450_29476[(2)] = inst_29413);

(statearr_29450_29476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (10))){
var inst_29432 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29451_29477 = state_29436__$1;
(statearr_29451_29477[(2)] = inst_29432);

(statearr_29451_29477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (8))){
var inst_29413 = (state_29436[(7)]);
var inst_29423 = cljs.core.next.call(null,inst_29413);
var inst_29413__$1 = inst_29423;
var state_29436__$1 = (function (){var statearr_29452 = state_29436;
(statearr_29452[(7)] = inst_29413__$1);

return statearr_29452;
})();
var statearr_29453_29478 = state_29436__$1;
(statearr_29453_29478[(2)] = null);

(statearr_29453_29478[(1)] = (2));


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
});})(c__28608__auto__))
;
return ((function (switch__28496__auto__,c__28608__auto__){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_29457 = [null,null,null,null,null,null,null,null];
(statearr_29457[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_29457[(1)] = (1));

return statearr_29457;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_29436){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_29436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e29458){if((e29458 instanceof Object)){
var ex__28500__auto__ = e29458;
var statearr_29459_29479 = state_29436;
(statearr_29459_29479[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29480 = state_29436;
state_29436 = G__29480;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_29436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_29436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_29460 = f__28609__auto__.call(null);
(statearr_29460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_29460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__))
);

return c__28608__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25453__auto__ = (((_ == null))?null:_);
var m__25454__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,_);
} else {
var m__25454__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29706 = (function (mult,ch,cs,meta29707){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29707 = meta29707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29708,meta29707__$1){
var self__ = this;
var _29708__$1 = this;
return (new cljs.core.async.t_cljs$core$async29706(self__.mult,self__.ch,self__.cs,meta29707__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29708){
var self__ = this;
var _29708__$1 = this;
return self__.meta29707;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29707","meta29707",1345207050,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29706";

cljs.core.async.t_cljs$core$async29706.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29706");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29706 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29706(mult__$1,ch__$1,cs__$1,meta29707){
return (new cljs.core.async.t_cljs$core$async29706(mult__$1,ch__$1,cs__$1,meta29707));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29706(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28608__auto___29931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___29931,cs,m,dchan,dctr,done){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___29931,cs,m,dchan,dctr,done){
return (function (state_29843){
var state_val_29844 = (state_29843[(1)]);
if((state_val_29844 === (7))){
var inst_29839 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29845_29932 = state_29843__$1;
(statearr_29845_29932[(2)] = inst_29839);

(statearr_29845_29932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (20))){
var inst_29742 = (state_29843[(7)]);
var inst_29754 = cljs.core.first.call(null,inst_29742);
var inst_29755 = cljs.core.nth.call(null,inst_29754,(0),null);
var inst_29756 = cljs.core.nth.call(null,inst_29754,(1),null);
var state_29843__$1 = (function (){var statearr_29846 = state_29843;
(statearr_29846[(8)] = inst_29755);

return statearr_29846;
})();
if(cljs.core.truth_(inst_29756)){
var statearr_29847_29933 = state_29843__$1;
(statearr_29847_29933[(1)] = (22));

} else {
var statearr_29848_29934 = state_29843__$1;
(statearr_29848_29934[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (27))){
var inst_29791 = (state_29843[(9)]);
var inst_29784 = (state_29843[(10)]);
var inst_29711 = (state_29843[(11)]);
var inst_29786 = (state_29843[(12)]);
var inst_29791__$1 = cljs.core._nth.call(null,inst_29784,inst_29786);
var inst_29792 = cljs.core.async.put_BANG_.call(null,inst_29791__$1,inst_29711,done);
var state_29843__$1 = (function (){var statearr_29849 = state_29843;
(statearr_29849[(9)] = inst_29791__$1);

return statearr_29849;
})();
if(cljs.core.truth_(inst_29792)){
var statearr_29850_29935 = state_29843__$1;
(statearr_29850_29935[(1)] = (30));

} else {
var statearr_29851_29936 = state_29843__$1;
(statearr_29851_29936[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (1))){
var state_29843__$1 = state_29843;
var statearr_29852_29937 = state_29843__$1;
(statearr_29852_29937[(2)] = null);

(statearr_29852_29937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (24))){
var inst_29742 = (state_29843[(7)]);
var inst_29761 = (state_29843[(2)]);
var inst_29762 = cljs.core.next.call(null,inst_29742);
var inst_29720 = inst_29762;
var inst_29721 = null;
var inst_29722 = (0);
var inst_29723 = (0);
var state_29843__$1 = (function (){var statearr_29853 = state_29843;
(statearr_29853[(13)] = inst_29723);

(statearr_29853[(14)] = inst_29722);

(statearr_29853[(15)] = inst_29721);

(statearr_29853[(16)] = inst_29720);

(statearr_29853[(17)] = inst_29761);

return statearr_29853;
})();
var statearr_29854_29938 = state_29843__$1;
(statearr_29854_29938[(2)] = null);

(statearr_29854_29938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (39))){
var state_29843__$1 = state_29843;
var statearr_29858_29939 = state_29843__$1;
(statearr_29858_29939[(2)] = null);

(statearr_29858_29939[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (4))){
var inst_29711 = (state_29843[(11)]);
var inst_29711__$1 = (state_29843[(2)]);
var inst_29712 = (inst_29711__$1 == null);
var state_29843__$1 = (function (){var statearr_29859 = state_29843;
(statearr_29859[(11)] = inst_29711__$1);

return statearr_29859;
})();
if(cljs.core.truth_(inst_29712)){
var statearr_29860_29940 = state_29843__$1;
(statearr_29860_29940[(1)] = (5));

} else {
var statearr_29861_29941 = state_29843__$1;
(statearr_29861_29941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (15))){
var inst_29723 = (state_29843[(13)]);
var inst_29722 = (state_29843[(14)]);
var inst_29721 = (state_29843[(15)]);
var inst_29720 = (state_29843[(16)]);
var inst_29738 = (state_29843[(2)]);
var inst_29739 = (inst_29723 + (1));
var tmp29855 = inst_29722;
var tmp29856 = inst_29721;
var tmp29857 = inst_29720;
var inst_29720__$1 = tmp29857;
var inst_29721__$1 = tmp29856;
var inst_29722__$1 = tmp29855;
var inst_29723__$1 = inst_29739;
var state_29843__$1 = (function (){var statearr_29862 = state_29843;
(statearr_29862[(13)] = inst_29723__$1);

(statearr_29862[(14)] = inst_29722__$1);

(statearr_29862[(15)] = inst_29721__$1);

(statearr_29862[(18)] = inst_29738);

(statearr_29862[(16)] = inst_29720__$1);

return statearr_29862;
})();
var statearr_29863_29942 = state_29843__$1;
(statearr_29863_29942[(2)] = null);

(statearr_29863_29942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (21))){
var inst_29765 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29867_29943 = state_29843__$1;
(statearr_29867_29943[(2)] = inst_29765);

(statearr_29867_29943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (31))){
var inst_29791 = (state_29843[(9)]);
var inst_29795 = done.call(null,null);
var inst_29796 = cljs.core.async.untap_STAR_.call(null,m,inst_29791);
var state_29843__$1 = (function (){var statearr_29868 = state_29843;
(statearr_29868[(19)] = inst_29795);

return statearr_29868;
})();
var statearr_29869_29944 = state_29843__$1;
(statearr_29869_29944[(2)] = inst_29796);

(statearr_29869_29944[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (32))){
var inst_29783 = (state_29843[(20)]);
var inst_29785 = (state_29843[(21)]);
var inst_29784 = (state_29843[(10)]);
var inst_29786 = (state_29843[(12)]);
var inst_29798 = (state_29843[(2)]);
var inst_29799 = (inst_29786 + (1));
var tmp29864 = inst_29783;
var tmp29865 = inst_29785;
var tmp29866 = inst_29784;
var inst_29783__$1 = tmp29864;
var inst_29784__$1 = tmp29866;
var inst_29785__$1 = tmp29865;
var inst_29786__$1 = inst_29799;
var state_29843__$1 = (function (){var statearr_29870 = state_29843;
(statearr_29870[(20)] = inst_29783__$1);

(statearr_29870[(21)] = inst_29785__$1);

(statearr_29870[(22)] = inst_29798);

(statearr_29870[(10)] = inst_29784__$1);

(statearr_29870[(12)] = inst_29786__$1);

return statearr_29870;
})();
var statearr_29871_29945 = state_29843__$1;
(statearr_29871_29945[(2)] = null);

(statearr_29871_29945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (40))){
var inst_29811 = (state_29843[(23)]);
var inst_29815 = done.call(null,null);
var inst_29816 = cljs.core.async.untap_STAR_.call(null,m,inst_29811);
var state_29843__$1 = (function (){var statearr_29872 = state_29843;
(statearr_29872[(24)] = inst_29815);

return statearr_29872;
})();
var statearr_29873_29946 = state_29843__$1;
(statearr_29873_29946[(2)] = inst_29816);

(statearr_29873_29946[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (33))){
var inst_29802 = (state_29843[(25)]);
var inst_29804 = cljs.core.chunked_seq_QMARK_.call(null,inst_29802);
var state_29843__$1 = state_29843;
if(inst_29804){
var statearr_29874_29947 = state_29843__$1;
(statearr_29874_29947[(1)] = (36));

} else {
var statearr_29875_29948 = state_29843__$1;
(statearr_29875_29948[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (13))){
var inst_29732 = (state_29843[(26)]);
var inst_29735 = cljs.core.async.close_BANG_.call(null,inst_29732);
var state_29843__$1 = state_29843;
var statearr_29876_29949 = state_29843__$1;
(statearr_29876_29949[(2)] = inst_29735);

(statearr_29876_29949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (22))){
var inst_29755 = (state_29843[(8)]);
var inst_29758 = cljs.core.async.close_BANG_.call(null,inst_29755);
var state_29843__$1 = state_29843;
var statearr_29877_29950 = state_29843__$1;
(statearr_29877_29950[(2)] = inst_29758);

(statearr_29877_29950[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (36))){
var inst_29802 = (state_29843[(25)]);
var inst_29806 = cljs.core.chunk_first.call(null,inst_29802);
var inst_29807 = cljs.core.chunk_rest.call(null,inst_29802);
var inst_29808 = cljs.core.count.call(null,inst_29806);
var inst_29783 = inst_29807;
var inst_29784 = inst_29806;
var inst_29785 = inst_29808;
var inst_29786 = (0);
var state_29843__$1 = (function (){var statearr_29878 = state_29843;
(statearr_29878[(20)] = inst_29783);

(statearr_29878[(21)] = inst_29785);

(statearr_29878[(10)] = inst_29784);

(statearr_29878[(12)] = inst_29786);

return statearr_29878;
})();
var statearr_29879_29951 = state_29843__$1;
(statearr_29879_29951[(2)] = null);

(statearr_29879_29951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (41))){
var inst_29802 = (state_29843[(25)]);
var inst_29818 = (state_29843[(2)]);
var inst_29819 = cljs.core.next.call(null,inst_29802);
var inst_29783 = inst_29819;
var inst_29784 = null;
var inst_29785 = (0);
var inst_29786 = (0);
var state_29843__$1 = (function (){var statearr_29880 = state_29843;
(statearr_29880[(20)] = inst_29783);

(statearr_29880[(21)] = inst_29785);

(statearr_29880[(27)] = inst_29818);

(statearr_29880[(10)] = inst_29784);

(statearr_29880[(12)] = inst_29786);

return statearr_29880;
})();
var statearr_29881_29952 = state_29843__$1;
(statearr_29881_29952[(2)] = null);

(statearr_29881_29952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (43))){
var state_29843__$1 = state_29843;
var statearr_29882_29953 = state_29843__$1;
(statearr_29882_29953[(2)] = null);

(statearr_29882_29953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (29))){
var inst_29827 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29883_29954 = state_29843__$1;
(statearr_29883_29954[(2)] = inst_29827);

(statearr_29883_29954[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (44))){
var inst_29836 = (state_29843[(2)]);
var state_29843__$1 = (function (){var statearr_29884 = state_29843;
(statearr_29884[(28)] = inst_29836);

return statearr_29884;
})();
var statearr_29885_29955 = state_29843__$1;
(statearr_29885_29955[(2)] = null);

(statearr_29885_29955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (6))){
var inst_29775 = (state_29843[(29)]);
var inst_29774 = cljs.core.deref.call(null,cs);
var inst_29775__$1 = cljs.core.keys.call(null,inst_29774);
var inst_29776 = cljs.core.count.call(null,inst_29775__$1);
var inst_29777 = cljs.core.reset_BANG_.call(null,dctr,inst_29776);
var inst_29782 = cljs.core.seq.call(null,inst_29775__$1);
var inst_29783 = inst_29782;
var inst_29784 = null;
var inst_29785 = (0);
var inst_29786 = (0);
var state_29843__$1 = (function (){var statearr_29886 = state_29843;
(statearr_29886[(29)] = inst_29775__$1);

(statearr_29886[(30)] = inst_29777);

(statearr_29886[(20)] = inst_29783);

(statearr_29886[(21)] = inst_29785);

(statearr_29886[(10)] = inst_29784);

(statearr_29886[(12)] = inst_29786);

return statearr_29886;
})();
var statearr_29887_29956 = state_29843__$1;
(statearr_29887_29956[(2)] = null);

(statearr_29887_29956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (28))){
var inst_29783 = (state_29843[(20)]);
var inst_29802 = (state_29843[(25)]);
var inst_29802__$1 = cljs.core.seq.call(null,inst_29783);
var state_29843__$1 = (function (){var statearr_29888 = state_29843;
(statearr_29888[(25)] = inst_29802__$1);

return statearr_29888;
})();
if(inst_29802__$1){
var statearr_29889_29957 = state_29843__$1;
(statearr_29889_29957[(1)] = (33));

} else {
var statearr_29890_29958 = state_29843__$1;
(statearr_29890_29958[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (25))){
var inst_29785 = (state_29843[(21)]);
var inst_29786 = (state_29843[(12)]);
var inst_29788 = (inst_29786 < inst_29785);
var inst_29789 = inst_29788;
var state_29843__$1 = state_29843;
if(cljs.core.truth_(inst_29789)){
var statearr_29891_29959 = state_29843__$1;
(statearr_29891_29959[(1)] = (27));

} else {
var statearr_29892_29960 = state_29843__$1;
(statearr_29892_29960[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (34))){
var state_29843__$1 = state_29843;
var statearr_29893_29961 = state_29843__$1;
(statearr_29893_29961[(2)] = null);

(statearr_29893_29961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (17))){
var state_29843__$1 = state_29843;
var statearr_29894_29962 = state_29843__$1;
(statearr_29894_29962[(2)] = null);

(statearr_29894_29962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (3))){
var inst_29841 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29843__$1,inst_29841);
} else {
if((state_val_29844 === (12))){
var inst_29770 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29895_29963 = state_29843__$1;
(statearr_29895_29963[(2)] = inst_29770);

(statearr_29895_29963[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (2))){
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29843__$1,(4),ch);
} else {
if((state_val_29844 === (23))){
var state_29843__$1 = state_29843;
var statearr_29896_29964 = state_29843__$1;
(statearr_29896_29964[(2)] = null);

(statearr_29896_29964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (35))){
var inst_29825 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29897_29965 = state_29843__$1;
(statearr_29897_29965[(2)] = inst_29825);

(statearr_29897_29965[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (19))){
var inst_29742 = (state_29843[(7)]);
var inst_29746 = cljs.core.chunk_first.call(null,inst_29742);
var inst_29747 = cljs.core.chunk_rest.call(null,inst_29742);
var inst_29748 = cljs.core.count.call(null,inst_29746);
var inst_29720 = inst_29747;
var inst_29721 = inst_29746;
var inst_29722 = inst_29748;
var inst_29723 = (0);
var state_29843__$1 = (function (){var statearr_29898 = state_29843;
(statearr_29898[(13)] = inst_29723);

(statearr_29898[(14)] = inst_29722);

(statearr_29898[(15)] = inst_29721);

(statearr_29898[(16)] = inst_29720);

return statearr_29898;
})();
var statearr_29899_29966 = state_29843__$1;
(statearr_29899_29966[(2)] = null);

(statearr_29899_29966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (11))){
var inst_29720 = (state_29843[(16)]);
var inst_29742 = (state_29843[(7)]);
var inst_29742__$1 = cljs.core.seq.call(null,inst_29720);
var state_29843__$1 = (function (){var statearr_29900 = state_29843;
(statearr_29900[(7)] = inst_29742__$1);

return statearr_29900;
})();
if(inst_29742__$1){
var statearr_29901_29967 = state_29843__$1;
(statearr_29901_29967[(1)] = (16));

} else {
var statearr_29902_29968 = state_29843__$1;
(statearr_29902_29968[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (9))){
var inst_29772 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29903_29969 = state_29843__$1;
(statearr_29903_29969[(2)] = inst_29772);

(statearr_29903_29969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (5))){
var inst_29718 = cljs.core.deref.call(null,cs);
var inst_29719 = cljs.core.seq.call(null,inst_29718);
var inst_29720 = inst_29719;
var inst_29721 = null;
var inst_29722 = (0);
var inst_29723 = (0);
var state_29843__$1 = (function (){var statearr_29904 = state_29843;
(statearr_29904[(13)] = inst_29723);

(statearr_29904[(14)] = inst_29722);

(statearr_29904[(15)] = inst_29721);

(statearr_29904[(16)] = inst_29720);

return statearr_29904;
})();
var statearr_29905_29970 = state_29843__$1;
(statearr_29905_29970[(2)] = null);

(statearr_29905_29970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (14))){
var state_29843__$1 = state_29843;
var statearr_29906_29971 = state_29843__$1;
(statearr_29906_29971[(2)] = null);

(statearr_29906_29971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (45))){
var inst_29833 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29907_29972 = state_29843__$1;
(statearr_29907_29972[(2)] = inst_29833);

(statearr_29907_29972[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (26))){
var inst_29775 = (state_29843[(29)]);
var inst_29829 = (state_29843[(2)]);
var inst_29830 = cljs.core.seq.call(null,inst_29775);
var state_29843__$1 = (function (){var statearr_29908 = state_29843;
(statearr_29908[(31)] = inst_29829);

return statearr_29908;
})();
if(inst_29830){
var statearr_29909_29973 = state_29843__$1;
(statearr_29909_29973[(1)] = (42));

} else {
var statearr_29910_29974 = state_29843__$1;
(statearr_29910_29974[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (16))){
var inst_29742 = (state_29843[(7)]);
var inst_29744 = cljs.core.chunked_seq_QMARK_.call(null,inst_29742);
var state_29843__$1 = state_29843;
if(inst_29744){
var statearr_29911_29975 = state_29843__$1;
(statearr_29911_29975[(1)] = (19));

} else {
var statearr_29912_29976 = state_29843__$1;
(statearr_29912_29976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (38))){
var inst_29822 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29913_29977 = state_29843__$1;
(statearr_29913_29977[(2)] = inst_29822);

(statearr_29913_29977[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (30))){
var state_29843__$1 = state_29843;
var statearr_29914_29978 = state_29843__$1;
(statearr_29914_29978[(2)] = null);

(statearr_29914_29978[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (10))){
var inst_29723 = (state_29843[(13)]);
var inst_29721 = (state_29843[(15)]);
var inst_29731 = cljs.core._nth.call(null,inst_29721,inst_29723);
var inst_29732 = cljs.core.nth.call(null,inst_29731,(0),null);
var inst_29733 = cljs.core.nth.call(null,inst_29731,(1),null);
var state_29843__$1 = (function (){var statearr_29915 = state_29843;
(statearr_29915[(26)] = inst_29732);

return statearr_29915;
})();
if(cljs.core.truth_(inst_29733)){
var statearr_29916_29979 = state_29843__$1;
(statearr_29916_29979[(1)] = (13));

} else {
var statearr_29917_29980 = state_29843__$1;
(statearr_29917_29980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (18))){
var inst_29768 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29918_29981 = state_29843__$1;
(statearr_29918_29981[(2)] = inst_29768);

(statearr_29918_29981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (42))){
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29843__$1,(45),dchan);
} else {
if((state_val_29844 === (37))){
var inst_29802 = (state_29843[(25)]);
var inst_29811 = (state_29843[(23)]);
var inst_29711 = (state_29843[(11)]);
var inst_29811__$1 = cljs.core.first.call(null,inst_29802);
var inst_29812 = cljs.core.async.put_BANG_.call(null,inst_29811__$1,inst_29711,done);
var state_29843__$1 = (function (){var statearr_29919 = state_29843;
(statearr_29919[(23)] = inst_29811__$1);

return statearr_29919;
})();
if(cljs.core.truth_(inst_29812)){
var statearr_29920_29982 = state_29843__$1;
(statearr_29920_29982[(1)] = (39));

} else {
var statearr_29921_29983 = state_29843__$1;
(statearr_29921_29983[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (8))){
var inst_29723 = (state_29843[(13)]);
var inst_29722 = (state_29843[(14)]);
var inst_29725 = (inst_29723 < inst_29722);
var inst_29726 = inst_29725;
var state_29843__$1 = state_29843;
if(cljs.core.truth_(inst_29726)){
var statearr_29922_29984 = state_29843__$1;
(statearr_29922_29984[(1)] = (10));

} else {
var statearr_29923_29985 = state_29843__$1;
(statearr_29923_29985[(1)] = (11));

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
});})(c__28608__auto___29931,cs,m,dchan,dctr,done))
;
return ((function (switch__28496__auto__,c__28608__auto___29931,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28497__auto__ = null;
var cljs$core$async$mult_$_state_machine__28497__auto____0 = (function (){
var statearr_29927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29927[(0)] = cljs$core$async$mult_$_state_machine__28497__auto__);

(statearr_29927[(1)] = (1));

return statearr_29927;
});
var cljs$core$async$mult_$_state_machine__28497__auto____1 = (function (state_29843){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_29843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e29928){if((e29928 instanceof Object)){
var ex__28500__auto__ = e29928;
var statearr_29929_29986 = state_29843;
(statearr_29929_29986[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29987 = state_29843;
state_29843 = G__29987;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28497__auto__ = function(state_29843){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28497__auto____1.call(this,state_29843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28497__auto____0;
cljs$core$async$mult_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28497__auto____1;
return cljs$core$async$mult_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___29931,cs,m,dchan,dctr,done))
})();
var state__28610__auto__ = (function (){var statearr_29930 = f__28609__auto__.call(null);
(statearr_29930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___29931);

return statearr_29930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___29931,cs,m,dchan,dctr,done))
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
var args29988 = [];
var len__25865__auto___29991 = arguments.length;
var i__25866__auto___29992 = (0);
while(true){
if((i__25866__auto___29992 < len__25865__auto___29991)){
args29988.push((arguments[i__25866__auto___29992]));

var G__29993 = (i__25866__auto___29992 + (1));
i__25866__auto___29992 = G__29993;
continue;
} else {
}
break;
}

var G__29990 = args29988.length;
switch (G__29990) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29988.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,state_map);
} else {
var m__25454__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,mode);
} else {
var m__25454__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___30005 = arguments.length;
var i__25866__auto___30006 = (0);
while(true){
if((i__25866__auto___30006 < len__25865__auto___30005)){
args__25872__auto__.push((arguments[i__25866__auto___30006]));

var G__30007 = (i__25866__auto___30006 + (1));
i__25866__auto___30006 = G__30007;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((3) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25873__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29999){
var map__30000 = p__29999;
var map__30000__$1 = ((((!((map__30000 == null)))?((((map__30000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30000):map__30000);
var opts = map__30000__$1;
var statearr_30002_30008 = state;
(statearr_30002_30008[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30000,map__30000__$1,opts){
return (function (val){
var statearr_30003_30009 = state;
(statearr_30003_30009[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30000,map__30000__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30004_30010 = state;
(statearr_30004_30010[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29995){
var G__29996 = cljs.core.first.call(null,seq29995);
var seq29995__$1 = cljs.core.next.call(null,seq29995);
var G__29997 = cljs.core.first.call(null,seq29995__$1);
var seq29995__$2 = cljs.core.next.call(null,seq29995__$1);
var G__29998 = cljs.core.first.call(null,seq29995__$2);
var seq29995__$3 = cljs.core.next.call(null,seq29995__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29996,G__29997,G__29998,seq29995__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30176 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30177){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30177 = meta30177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30178,meta30177__$1){
var self__ = this;
var _30178__$1 = this;
return (new cljs.core.async.t_cljs$core$async30176(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30177__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30178){
var self__ = this;
var _30178__$1 = this;
return self__.meta30177;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30176.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30176.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30177","meta30177",1298926778,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30176";

cljs.core.async.t_cljs$core$async30176.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30176");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30176 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30176(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30177){
return (new cljs.core.async.t_cljs$core$async30176(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30177));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30176(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28608__auto___30341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___30341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___30341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30278){
var state_val_30279 = (state_30278[(1)]);
if((state_val_30279 === (7))){
var inst_30194 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30280_30342 = state_30278__$1;
(statearr_30280_30342[(2)] = inst_30194);

(statearr_30280_30342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (20))){
var inst_30206 = (state_30278[(7)]);
var state_30278__$1 = state_30278;
var statearr_30281_30343 = state_30278__$1;
(statearr_30281_30343[(2)] = inst_30206);

(statearr_30281_30343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (27))){
var state_30278__$1 = state_30278;
var statearr_30282_30344 = state_30278__$1;
(statearr_30282_30344[(2)] = null);

(statearr_30282_30344[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (1))){
var inst_30182 = (state_30278[(8)]);
var inst_30182__$1 = calc_state.call(null);
var inst_30184 = (inst_30182__$1 == null);
var inst_30185 = cljs.core.not.call(null,inst_30184);
var state_30278__$1 = (function (){var statearr_30283 = state_30278;
(statearr_30283[(8)] = inst_30182__$1);

return statearr_30283;
})();
if(inst_30185){
var statearr_30284_30345 = state_30278__$1;
(statearr_30284_30345[(1)] = (2));

} else {
var statearr_30285_30346 = state_30278__$1;
(statearr_30285_30346[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (24))){
var inst_30238 = (state_30278[(9)]);
var inst_30252 = (state_30278[(10)]);
var inst_30229 = (state_30278[(11)]);
var inst_30252__$1 = inst_30229.call(null,inst_30238);
var state_30278__$1 = (function (){var statearr_30286 = state_30278;
(statearr_30286[(10)] = inst_30252__$1);

return statearr_30286;
})();
if(cljs.core.truth_(inst_30252__$1)){
var statearr_30287_30347 = state_30278__$1;
(statearr_30287_30347[(1)] = (29));

} else {
var statearr_30288_30348 = state_30278__$1;
(statearr_30288_30348[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (4))){
var inst_30197 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30197)){
var statearr_30289_30349 = state_30278__$1;
(statearr_30289_30349[(1)] = (8));

} else {
var statearr_30290_30350 = state_30278__$1;
(statearr_30290_30350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (15))){
var inst_30223 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30223)){
var statearr_30291_30351 = state_30278__$1;
(statearr_30291_30351[(1)] = (19));

} else {
var statearr_30292_30352 = state_30278__$1;
(statearr_30292_30352[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (21))){
var inst_30228 = (state_30278[(12)]);
var inst_30228__$1 = (state_30278[(2)]);
var inst_30229 = cljs.core.get.call(null,inst_30228__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30230 = cljs.core.get.call(null,inst_30228__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30231 = cljs.core.get.call(null,inst_30228__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30278__$1 = (function (){var statearr_30293 = state_30278;
(statearr_30293[(13)] = inst_30230);

(statearr_30293[(12)] = inst_30228__$1);

(statearr_30293[(11)] = inst_30229);

return statearr_30293;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30278__$1,(22),inst_30231);
} else {
if((state_val_30279 === (31))){
var inst_30260 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30260)){
var statearr_30294_30353 = state_30278__$1;
(statearr_30294_30353[(1)] = (32));

} else {
var statearr_30295_30354 = state_30278__$1;
(statearr_30295_30354[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (32))){
var inst_30237 = (state_30278[(14)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30278__$1,(35),out,inst_30237);
} else {
if((state_val_30279 === (33))){
var inst_30228 = (state_30278[(12)]);
var inst_30206 = inst_30228;
var state_30278__$1 = (function (){var statearr_30296 = state_30278;
(statearr_30296[(7)] = inst_30206);

return statearr_30296;
})();
var statearr_30297_30355 = state_30278__$1;
(statearr_30297_30355[(2)] = null);

(statearr_30297_30355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (13))){
var inst_30206 = (state_30278[(7)]);
var inst_30213 = inst_30206.cljs$lang$protocol_mask$partition0$;
var inst_30214 = (inst_30213 & (64));
var inst_30215 = inst_30206.cljs$core$ISeq$;
var inst_30216 = (inst_30214) || (inst_30215);
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30216)){
var statearr_30298_30356 = state_30278__$1;
(statearr_30298_30356[(1)] = (16));

} else {
var statearr_30299_30357 = state_30278__$1;
(statearr_30299_30357[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (22))){
var inst_30238 = (state_30278[(9)]);
var inst_30237 = (state_30278[(14)]);
var inst_30236 = (state_30278[(2)]);
var inst_30237__$1 = cljs.core.nth.call(null,inst_30236,(0),null);
var inst_30238__$1 = cljs.core.nth.call(null,inst_30236,(1),null);
var inst_30239 = (inst_30237__$1 == null);
var inst_30240 = cljs.core._EQ_.call(null,inst_30238__$1,change);
var inst_30241 = (inst_30239) || (inst_30240);
var state_30278__$1 = (function (){var statearr_30300 = state_30278;
(statearr_30300[(9)] = inst_30238__$1);

(statearr_30300[(14)] = inst_30237__$1);

return statearr_30300;
})();
if(cljs.core.truth_(inst_30241)){
var statearr_30301_30358 = state_30278__$1;
(statearr_30301_30358[(1)] = (23));

} else {
var statearr_30302_30359 = state_30278__$1;
(statearr_30302_30359[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (36))){
var inst_30228 = (state_30278[(12)]);
var inst_30206 = inst_30228;
var state_30278__$1 = (function (){var statearr_30303 = state_30278;
(statearr_30303[(7)] = inst_30206);

return statearr_30303;
})();
var statearr_30304_30360 = state_30278__$1;
(statearr_30304_30360[(2)] = null);

(statearr_30304_30360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (29))){
var inst_30252 = (state_30278[(10)]);
var state_30278__$1 = state_30278;
var statearr_30305_30361 = state_30278__$1;
(statearr_30305_30361[(2)] = inst_30252);

(statearr_30305_30361[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (6))){
var state_30278__$1 = state_30278;
var statearr_30306_30362 = state_30278__$1;
(statearr_30306_30362[(2)] = false);

(statearr_30306_30362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (28))){
var inst_30248 = (state_30278[(2)]);
var inst_30249 = calc_state.call(null);
var inst_30206 = inst_30249;
var state_30278__$1 = (function (){var statearr_30307 = state_30278;
(statearr_30307[(7)] = inst_30206);

(statearr_30307[(15)] = inst_30248);

return statearr_30307;
})();
var statearr_30308_30363 = state_30278__$1;
(statearr_30308_30363[(2)] = null);

(statearr_30308_30363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (25))){
var inst_30274 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30309_30364 = state_30278__$1;
(statearr_30309_30364[(2)] = inst_30274);

(statearr_30309_30364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (34))){
var inst_30272 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30310_30365 = state_30278__$1;
(statearr_30310_30365[(2)] = inst_30272);

(statearr_30310_30365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (17))){
var state_30278__$1 = state_30278;
var statearr_30311_30366 = state_30278__$1;
(statearr_30311_30366[(2)] = false);

(statearr_30311_30366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (3))){
var state_30278__$1 = state_30278;
var statearr_30312_30367 = state_30278__$1;
(statearr_30312_30367[(2)] = false);

(statearr_30312_30367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (12))){
var inst_30276 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30278__$1,inst_30276);
} else {
if((state_val_30279 === (2))){
var inst_30182 = (state_30278[(8)]);
var inst_30187 = inst_30182.cljs$lang$protocol_mask$partition0$;
var inst_30188 = (inst_30187 & (64));
var inst_30189 = inst_30182.cljs$core$ISeq$;
var inst_30190 = (inst_30188) || (inst_30189);
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30190)){
var statearr_30313_30368 = state_30278__$1;
(statearr_30313_30368[(1)] = (5));

} else {
var statearr_30314_30369 = state_30278__$1;
(statearr_30314_30369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (23))){
var inst_30237 = (state_30278[(14)]);
var inst_30243 = (inst_30237 == null);
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30243)){
var statearr_30315_30370 = state_30278__$1;
(statearr_30315_30370[(1)] = (26));

} else {
var statearr_30316_30371 = state_30278__$1;
(statearr_30316_30371[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (35))){
var inst_30263 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30263)){
var statearr_30317_30372 = state_30278__$1;
(statearr_30317_30372[(1)] = (36));

} else {
var statearr_30318_30373 = state_30278__$1;
(statearr_30318_30373[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (19))){
var inst_30206 = (state_30278[(7)]);
var inst_30225 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30206);
var state_30278__$1 = state_30278;
var statearr_30319_30374 = state_30278__$1;
(statearr_30319_30374[(2)] = inst_30225);

(statearr_30319_30374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (11))){
var inst_30206 = (state_30278[(7)]);
var inst_30210 = (inst_30206 == null);
var inst_30211 = cljs.core.not.call(null,inst_30210);
var state_30278__$1 = state_30278;
if(inst_30211){
var statearr_30320_30375 = state_30278__$1;
(statearr_30320_30375[(1)] = (13));

} else {
var statearr_30321_30376 = state_30278__$1;
(statearr_30321_30376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (9))){
var inst_30182 = (state_30278[(8)]);
var state_30278__$1 = state_30278;
var statearr_30322_30377 = state_30278__$1;
(statearr_30322_30377[(2)] = inst_30182);

(statearr_30322_30377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (5))){
var state_30278__$1 = state_30278;
var statearr_30323_30378 = state_30278__$1;
(statearr_30323_30378[(2)] = true);

(statearr_30323_30378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (14))){
var state_30278__$1 = state_30278;
var statearr_30324_30379 = state_30278__$1;
(statearr_30324_30379[(2)] = false);

(statearr_30324_30379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (26))){
var inst_30238 = (state_30278[(9)]);
var inst_30245 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30238);
var state_30278__$1 = state_30278;
var statearr_30325_30380 = state_30278__$1;
(statearr_30325_30380[(2)] = inst_30245);

(statearr_30325_30380[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (16))){
var state_30278__$1 = state_30278;
var statearr_30326_30381 = state_30278__$1;
(statearr_30326_30381[(2)] = true);

(statearr_30326_30381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (38))){
var inst_30268 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30327_30382 = state_30278__$1;
(statearr_30327_30382[(2)] = inst_30268);

(statearr_30327_30382[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (30))){
var inst_30230 = (state_30278[(13)]);
var inst_30238 = (state_30278[(9)]);
var inst_30229 = (state_30278[(11)]);
var inst_30255 = cljs.core.empty_QMARK_.call(null,inst_30229);
var inst_30256 = inst_30230.call(null,inst_30238);
var inst_30257 = cljs.core.not.call(null,inst_30256);
var inst_30258 = (inst_30255) && (inst_30257);
var state_30278__$1 = state_30278;
var statearr_30328_30383 = state_30278__$1;
(statearr_30328_30383[(2)] = inst_30258);

(statearr_30328_30383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (10))){
var inst_30182 = (state_30278[(8)]);
var inst_30202 = (state_30278[(2)]);
var inst_30203 = cljs.core.get.call(null,inst_30202,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30204 = cljs.core.get.call(null,inst_30202,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30205 = cljs.core.get.call(null,inst_30202,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30206 = inst_30182;
var state_30278__$1 = (function (){var statearr_30329 = state_30278;
(statearr_30329[(16)] = inst_30204);

(statearr_30329[(17)] = inst_30205);

(statearr_30329[(7)] = inst_30206);

(statearr_30329[(18)] = inst_30203);

return statearr_30329;
})();
var statearr_30330_30384 = state_30278__$1;
(statearr_30330_30384[(2)] = null);

(statearr_30330_30384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (18))){
var inst_30220 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30331_30385 = state_30278__$1;
(statearr_30331_30385[(2)] = inst_30220);

(statearr_30331_30385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (37))){
var state_30278__$1 = state_30278;
var statearr_30332_30386 = state_30278__$1;
(statearr_30332_30386[(2)] = null);

(statearr_30332_30386[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (8))){
var inst_30182 = (state_30278[(8)]);
var inst_30199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30182);
var state_30278__$1 = state_30278;
var statearr_30333_30387 = state_30278__$1;
(statearr_30333_30387[(2)] = inst_30199);

(statearr_30333_30387[(1)] = (10));


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
});})(c__28608__auto___30341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28496__auto__,c__28608__auto___30341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28497__auto__ = null;
var cljs$core$async$mix_$_state_machine__28497__auto____0 = (function (){
var statearr_30337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30337[(0)] = cljs$core$async$mix_$_state_machine__28497__auto__);

(statearr_30337[(1)] = (1));

return statearr_30337;
});
var cljs$core$async$mix_$_state_machine__28497__auto____1 = (function (state_30278){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_30278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e30338){if((e30338 instanceof Object)){
var ex__28500__auto__ = e30338;
var statearr_30339_30388 = state_30278;
(statearr_30339_30388[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30389 = state_30278;
state_30278 = G__30389;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28497__auto__ = function(state_30278){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28497__auto____1.call(this,state_30278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28497__auto____0;
cljs$core$async$mix_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28497__auto____1;
return cljs$core$async$mix_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___30341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28610__auto__ = (function (){var statearr_30340 = f__28609__auto__.call(null);
(statearr_30340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___30341);

return statearr_30340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___30341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30390 = [];
var len__25865__auto___30393 = arguments.length;
var i__25866__auto___30394 = (0);
while(true){
if((i__25866__auto___30394 < len__25865__auto___30393)){
args30390.push((arguments[i__25866__auto___30394]));

var G__30395 = (i__25866__auto___30394 + (1));
i__25866__auto___30394 = G__30395;
continue;
} else {
}
break;
}

var G__30392 = args30390.length;
switch (G__30392) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30390.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v);
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
var args30398 = [];
var len__25865__auto___30523 = arguments.length;
var i__25866__auto___30524 = (0);
while(true){
if((i__25866__auto___30524 < len__25865__auto___30523)){
args30398.push((arguments[i__25866__auto___30524]));

var G__30525 = (i__25866__auto___30524 + (1));
i__25866__auto___30524 = G__30525;
continue;
} else {
}
break;
}

var G__30400 = args30398.length;
switch (G__30400) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30398.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24790__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24790__auto__,mults){
return (function (p1__30397_SHARP_){
if(cljs.core.truth_(p1__30397_SHARP_.call(null,topic))){
return p1__30397_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30397_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24790__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30401 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30402){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30402 = meta30402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30403,meta30402__$1){
var self__ = this;
var _30403__$1 = this;
return (new cljs.core.async.t_cljs$core$async30401(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30402__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30403){
var self__ = this;
var _30403__$1 = this;
return self__.meta30402;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30401.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30401.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30401.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30401.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30401.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30401.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30401.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30402","meta30402",-264016962,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30401";

cljs.core.async.t_cljs$core$async30401.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30401");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30401 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30401(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30402){
return (new cljs.core.async.t_cljs$core$async30401(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30402));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30401(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28608__auto___30527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___30527,mults,ensure_mult,p){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___30527,mults,ensure_mult,p){
return (function (state_30475){
var state_val_30476 = (state_30475[(1)]);
if((state_val_30476 === (7))){
var inst_30471 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30477_30528 = state_30475__$1;
(statearr_30477_30528[(2)] = inst_30471);

(statearr_30477_30528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (20))){
var state_30475__$1 = state_30475;
var statearr_30478_30529 = state_30475__$1;
(statearr_30478_30529[(2)] = null);

(statearr_30478_30529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (1))){
var state_30475__$1 = state_30475;
var statearr_30479_30530 = state_30475__$1;
(statearr_30479_30530[(2)] = null);

(statearr_30479_30530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (24))){
var inst_30454 = (state_30475[(7)]);
var inst_30463 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30454);
var state_30475__$1 = state_30475;
var statearr_30480_30531 = state_30475__$1;
(statearr_30480_30531[(2)] = inst_30463);

(statearr_30480_30531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (4))){
var inst_30406 = (state_30475[(8)]);
var inst_30406__$1 = (state_30475[(2)]);
var inst_30407 = (inst_30406__$1 == null);
var state_30475__$1 = (function (){var statearr_30481 = state_30475;
(statearr_30481[(8)] = inst_30406__$1);

return statearr_30481;
})();
if(cljs.core.truth_(inst_30407)){
var statearr_30482_30532 = state_30475__$1;
(statearr_30482_30532[(1)] = (5));

} else {
var statearr_30483_30533 = state_30475__$1;
(statearr_30483_30533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (15))){
var inst_30448 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30484_30534 = state_30475__$1;
(statearr_30484_30534[(2)] = inst_30448);

(statearr_30484_30534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (21))){
var inst_30468 = (state_30475[(2)]);
var state_30475__$1 = (function (){var statearr_30485 = state_30475;
(statearr_30485[(9)] = inst_30468);

return statearr_30485;
})();
var statearr_30486_30535 = state_30475__$1;
(statearr_30486_30535[(2)] = null);

(statearr_30486_30535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (13))){
var inst_30430 = (state_30475[(10)]);
var inst_30432 = cljs.core.chunked_seq_QMARK_.call(null,inst_30430);
var state_30475__$1 = state_30475;
if(inst_30432){
var statearr_30487_30536 = state_30475__$1;
(statearr_30487_30536[(1)] = (16));

} else {
var statearr_30488_30537 = state_30475__$1;
(statearr_30488_30537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (22))){
var inst_30460 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30460)){
var statearr_30489_30538 = state_30475__$1;
(statearr_30489_30538[(1)] = (23));

} else {
var statearr_30490_30539 = state_30475__$1;
(statearr_30490_30539[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (6))){
var inst_30406 = (state_30475[(8)]);
var inst_30454 = (state_30475[(7)]);
var inst_30456 = (state_30475[(11)]);
var inst_30454__$1 = topic_fn.call(null,inst_30406);
var inst_30455 = cljs.core.deref.call(null,mults);
var inst_30456__$1 = cljs.core.get.call(null,inst_30455,inst_30454__$1);
var state_30475__$1 = (function (){var statearr_30491 = state_30475;
(statearr_30491[(7)] = inst_30454__$1);

(statearr_30491[(11)] = inst_30456__$1);

return statearr_30491;
})();
if(cljs.core.truth_(inst_30456__$1)){
var statearr_30492_30540 = state_30475__$1;
(statearr_30492_30540[(1)] = (19));

} else {
var statearr_30493_30541 = state_30475__$1;
(statearr_30493_30541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (25))){
var inst_30465 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30494_30542 = state_30475__$1;
(statearr_30494_30542[(2)] = inst_30465);

(statearr_30494_30542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (17))){
var inst_30430 = (state_30475[(10)]);
var inst_30439 = cljs.core.first.call(null,inst_30430);
var inst_30440 = cljs.core.async.muxch_STAR_.call(null,inst_30439);
var inst_30441 = cljs.core.async.close_BANG_.call(null,inst_30440);
var inst_30442 = cljs.core.next.call(null,inst_30430);
var inst_30416 = inst_30442;
var inst_30417 = null;
var inst_30418 = (0);
var inst_30419 = (0);
var state_30475__$1 = (function (){var statearr_30495 = state_30475;
(statearr_30495[(12)] = inst_30416);

(statearr_30495[(13)] = inst_30418);

(statearr_30495[(14)] = inst_30441);

(statearr_30495[(15)] = inst_30419);

(statearr_30495[(16)] = inst_30417);

return statearr_30495;
})();
var statearr_30496_30543 = state_30475__$1;
(statearr_30496_30543[(2)] = null);

(statearr_30496_30543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (3))){
var inst_30473 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30475__$1,inst_30473);
} else {
if((state_val_30476 === (12))){
var inst_30450 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30497_30544 = state_30475__$1;
(statearr_30497_30544[(2)] = inst_30450);

(statearr_30497_30544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (2))){
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30475__$1,(4),ch);
} else {
if((state_val_30476 === (23))){
var state_30475__$1 = state_30475;
var statearr_30498_30545 = state_30475__$1;
(statearr_30498_30545[(2)] = null);

(statearr_30498_30545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (19))){
var inst_30406 = (state_30475[(8)]);
var inst_30456 = (state_30475[(11)]);
var inst_30458 = cljs.core.async.muxch_STAR_.call(null,inst_30456);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30475__$1,(22),inst_30458,inst_30406);
} else {
if((state_val_30476 === (11))){
var inst_30416 = (state_30475[(12)]);
var inst_30430 = (state_30475[(10)]);
var inst_30430__$1 = cljs.core.seq.call(null,inst_30416);
var state_30475__$1 = (function (){var statearr_30499 = state_30475;
(statearr_30499[(10)] = inst_30430__$1);

return statearr_30499;
})();
if(inst_30430__$1){
var statearr_30500_30546 = state_30475__$1;
(statearr_30500_30546[(1)] = (13));

} else {
var statearr_30501_30547 = state_30475__$1;
(statearr_30501_30547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (9))){
var inst_30452 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30502_30548 = state_30475__$1;
(statearr_30502_30548[(2)] = inst_30452);

(statearr_30502_30548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (5))){
var inst_30413 = cljs.core.deref.call(null,mults);
var inst_30414 = cljs.core.vals.call(null,inst_30413);
var inst_30415 = cljs.core.seq.call(null,inst_30414);
var inst_30416 = inst_30415;
var inst_30417 = null;
var inst_30418 = (0);
var inst_30419 = (0);
var state_30475__$1 = (function (){var statearr_30503 = state_30475;
(statearr_30503[(12)] = inst_30416);

(statearr_30503[(13)] = inst_30418);

(statearr_30503[(15)] = inst_30419);

(statearr_30503[(16)] = inst_30417);

return statearr_30503;
})();
var statearr_30504_30549 = state_30475__$1;
(statearr_30504_30549[(2)] = null);

(statearr_30504_30549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (14))){
var state_30475__$1 = state_30475;
var statearr_30508_30550 = state_30475__$1;
(statearr_30508_30550[(2)] = null);

(statearr_30508_30550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (16))){
var inst_30430 = (state_30475[(10)]);
var inst_30434 = cljs.core.chunk_first.call(null,inst_30430);
var inst_30435 = cljs.core.chunk_rest.call(null,inst_30430);
var inst_30436 = cljs.core.count.call(null,inst_30434);
var inst_30416 = inst_30435;
var inst_30417 = inst_30434;
var inst_30418 = inst_30436;
var inst_30419 = (0);
var state_30475__$1 = (function (){var statearr_30509 = state_30475;
(statearr_30509[(12)] = inst_30416);

(statearr_30509[(13)] = inst_30418);

(statearr_30509[(15)] = inst_30419);

(statearr_30509[(16)] = inst_30417);

return statearr_30509;
})();
var statearr_30510_30551 = state_30475__$1;
(statearr_30510_30551[(2)] = null);

(statearr_30510_30551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (10))){
var inst_30416 = (state_30475[(12)]);
var inst_30418 = (state_30475[(13)]);
var inst_30419 = (state_30475[(15)]);
var inst_30417 = (state_30475[(16)]);
var inst_30424 = cljs.core._nth.call(null,inst_30417,inst_30419);
var inst_30425 = cljs.core.async.muxch_STAR_.call(null,inst_30424);
var inst_30426 = cljs.core.async.close_BANG_.call(null,inst_30425);
var inst_30427 = (inst_30419 + (1));
var tmp30505 = inst_30416;
var tmp30506 = inst_30418;
var tmp30507 = inst_30417;
var inst_30416__$1 = tmp30505;
var inst_30417__$1 = tmp30507;
var inst_30418__$1 = tmp30506;
var inst_30419__$1 = inst_30427;
var state_30475__$1 = (function (){var statearr_30511 = state_30475;
(statearr_30511[(12)] = inst_30416__$1);

(statearr_30511[(13)] = inst_30418__$1);

(statearr_30511[(17)] = inst_30426);

(statearr_30511[(15)] = inst_30419__$1);

(statearr_30511[(16)] = inst_30417__$1);

return statearr_30511;
})();
var statearr_30512_30552 = state_30475__$1;
(statearr_30512_30552[(2)] = null);

(statearr_30512_30552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (18))){
var inst_30445 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30513_30553 = state_30475__$1;
(statearr_30513_30553[(2)] = inst_30445);

(statearr_30513_30553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (8))){
var inst_30418 = (state_30475[(13)]);
var inst_30419 = (state_30475[(15)]);
var inst_30421 = (inst_30419 < inst_30418);
var inst_30422 = inst_30421;
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30422)){
var statearr_30514_30554 = state_30475__$1;
(statearr_30514_30554[(1)] = (10));

} else {
var statearr_30515_30555 = state_30475__$1;
(statearr_30515_30555[(1)] = (11));

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
});})(c__28608__auto___30527,mults,ensure_mult,p))
;
return ((function (switch__28496__auto__,c__28608__auto___30527,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_30519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30519[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_30519[(1)] = (1));

return statearr_30519;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_30475){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_30475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e30520){if((e30520 instanceof Object)){
var ex__28500__auto__ = e30520;
var statearr_30521_30556 = state_30475;
(statearr_30521_30556[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30557 = state_30475;
state_30475 = G__30557;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_30475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_30475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___30527,mults,ensure_mult,p))
})();
var state__28610__auto__ = (function (){var statearr_30522 = f__28609__auto__.call(null);
(statearr_30522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___30527);

return statearr_30522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___30527,mults,ensure_mult,p))
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
var args30558 = [];
var len__25865__auto___30561 = arguments.length;
var i__25866__auto___30562 = (0);
while(true){
if((i__25866__auto___30562 < len__25865__auto___30561)){
args30558.push((arguments[i__25866__auto___30562]));

var G__30563 = (i__25866__auto___30562 + (1));
i__25866__auto___30562 = G__30563;
continue;
} else {
}
break;
}

var G__30560 = args30558.length;
switch (G__30560) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30558.length)].join('')));

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
var args30565 = [];
var len__25865__auto___30568 = arguments.length;
var i__25866__auto___30569 = (0);
while(true){
if((i__25866__auto___30569 < len__25865__auto___30568)){
args30565.push((arguments[i__25866__auto___30569]));

var G__30570 = (i__25866__auto___30569 + (1));
i__25866__auto___30569 = G__30570;
continue;
} else {
}
break;
}

var G__30567 = args30565.length;
switch (G__30567) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30565.length)].join('')));

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
var args30572 = [];
var len__25865__auto___30643 = arguments.length;
var i__25866__auto___30644 = (0);
while(true){
if((i__25866__auto___30644 < len__25865__auto___30643)){
args30572.push((arguments[i__25866__auto___30644]));

var G__30645 = (i__25866__auto___30644 + (1));
i__25866__auto___30644 = G__30645;
continue;
} else {
}
break;
}

var G__30574 = args30572.length;
switch (G__30574) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30572.length)].join('')));

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
var c__28608__auto___30647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___30647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___30647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30613){
var state_val_30614 = (state_30613[(1)]);
if((state_val_30614 === (7))){
var state_30613__$1 = state_30613;
var statearr_30615_30648 = state_30613__$1;
(statearr_30615_30648[(2)] = null);

(statearr_30615_30648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (1))){
var state_30613__$1 = state_30613;
var statearr_30616_30649 = state_30613__$1;
(statearr_30616_30649[(2)] = null);

(statearr_30616_30649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (4))){
var inst_30577 = (state_30613[(7)]);
var inst_30579 = (inst_30577 < cnt);
var state_30613__$1 = state_30613;
if(cljs.core.truth_(inst_30579)){
var statearr_30617_30650 = state_30613__$1;
(statearr_30617_30650[(1)] = (6));

} else {
var statearr_30618_30651 = state_30613__$1;
(statearr_30618_30651[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (15))){
var inst_30609 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30619_30652 = state_30613__$1;
(statearr_30619_30652[(2)] = inst_30609);

(statearr_30619_30652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (13))){
var inst_30602 = cljs.core.async.close_BANG_.call(null,out);
var state_30613__$1 = state_30613;
var statearr_30620_30653 = state_30613__$1;
(statearr_30620_30653[(2)] = inst_30602);

(statearr_30620_30653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (6))){
var state_30613__$1 = state_30613;
var statearr_30621_30654 = state_30613__$1;
(statearr_30621_30654[(2)] = null);

(statearr_30621_30654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (3))){
var inst_30611 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30613__$1,inst_30611);
} else {
if((state_val_30614 === (12))){
var inst_30599 = (state_30613[(8)]);
var inst_30599__$1 = (state_30613[(2)]);
var inst_30600 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30599__$1);
var state_30613__$1 = (function (){var statearr_30622 = state_30613;
(statearr_30622[(8)] = inst_30599__$1);

return statearr_30622;
})();
if(cljs.core.truth_(inst_30600)){
var statearr_30623_30655 = state_30613__$1;
(statearr_30623_30655[(1)] = (13));

} else {
var statearr_30624_30656 = state_30613__$1;
(statearr_30624_30656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (2))){
var inst_30576 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30577 = (0);
var state_30613__$1 = (function (){var statearr_30625 = state_30613;
(statearr_30625[(7)] = inst_30577);

(statearr_30625[(9)] = inst_30576);

return statearr_30625;
})();
var statearr_30626_30657 = state_30613__$1;
(statearr_30626_30657[(2)] = null);

(statearr_30626_30657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (11))){
var inst_30577 = (state_30613[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30613,(10),Object,null,(9));
var inst_30586 = chs__$1.call(null,inst_30577);
var inst_30587 = done.call(null,inst_30577);
var inst_30588 = cljs.core.async.take_BANG_.call(null,inst_30586,inst_30587);
var state_30613__$1 = state_30613;
var statearr_30627_30658 = state_30613__$1;
(statearr_30627_30658[(2)] = inst_30588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (9))){
var inst_30577 = (state_30613[(7)]);
var inst_30590 = (state_30613[(2)]);
var inst_30591 = (inst_30577 + (1));
var inst_30577__$1 = inst_30591;
var state_30613__$1 = (function (){var statearr_30628 = state_30613;
(statearr_30628[(7)] = inst_30577__$1);

(statearr_30628[(10)] = inst_30590);

return statearr_30628;
})();
var statearr_30629_30659 = state_30613__$1;
(statearr_30629_30659[(2)] = null);

(statearr_30629_30659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (5))){
var inst_30597 = (state_30613[(2)]);
var state_30613__$1 = (function (){var statearr_30630 = state_30613;
(statearr_30630[(11)] = inst_30597);

return statearr_30630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30613__$1,(12),dchan);
} else {
if((state_val_30614 === (14))){
var inst_30599 = (state_30613[(8)]);
var inst_30604 = cljs.core.apply.call(null,f,inst_30599);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30613__$1,(16),out,inst_30604);
} else {
if((state_val_30614 === (16))){
var inst_30606 = (state_30613[(2)]);
var state_30613__$1 = (function (){var statearr_30631 = state_30613;
(statearr_30631[(12)] = inst_30606);

return statearr_30631;
})();
var statearr_30632_30660 = state_30613__$1;
(statearr_30632_30660[(2)] = null);

(statearr_30632_30660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (10))){
var inst_30581 = (state_30613[(2)]);
var inst_30582 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30613__$1 = (function (){var statearr_30633 = state_30613;
(statearr_30633[(13)] = inst_30581);

return statearr_30633;
})();
var statearr_30634_30661 = state_30613__$1;
(statearr_30634_30661[(2)] = inst_30582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (8))){
var inst_30595 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30635_30662 = state_30613__$1;
(statearr_30635_30662[(2)] = inst_30595);

(statearr_30635_30662[(1)] = (5));


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
});})(c__28608__auto___30647,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28496__auto__,c__28608__auto___30647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_30639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30639[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_30639[(1)] = (1));

return statearr_30639;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_30613){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_30613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e30640){if((e30640 instanceof Object)){
var ex__28500__auto__ = e30640;
var statearr_30641_30663 = state_30613;
(statearr_30641_30663[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30664 = state_30613;
state_30613 = G__30664;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_30613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_30613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___30647,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28610__auto__ = (function (){var statearr_30642 = f__28609__auto__.call(null);
(statearr_30642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___30647);

return statearr_30642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___30647,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30666 = [];
var len__25865__auto___30724 = arguments.length;
var i__25866__auto___30725 = (0);
while(true){
if((i__25866__auto___30725 < len__25865__auto___30724)){
args30666.push((arguments[i__25866__auto___30725]));

var G__30726 = (i__25866__auto___30725 + (1));
i__25866__auto___30725 = G__30726;
continue;
} else {
}
break;
}

var G__30668 = args30666.length;
switch (G__30668) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30666.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___30728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___30728,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___30728,out){
return (function (state_30700){
var state_val_30701 = (state_30700[(1)]);
if((state_val_30701 === (7))){
var inst_30680 = (state_30700[(7)]);
var inst_30679 = (state_30700[(8)]);
var inst_30679__$1 = (state_30700[(2)]);
var inst_30680__$1 = cljs.core.nth.call(null,inst_30679__$1,(0),null);
var inst_30681 = cljs.core.nth.call(null,inst_30679__$1,(1),null);
var inst_30682 = (inst_30680__$1 == null);
var state_30700__$1 = (function (){var statearr_30702 = state_30700;
(statearr_30702[(9)] = inst_30681);

(statearr_30702[(7)] = inst_30680__$1);

(statearr_30702[(8)] = inst_30679__$1);

return statearr_30702;
})();
if(cljs.core.truth_(inst_30682)){
var statearr_30703_30729 = state_30700__$1;
(statearr_30703_30729[(1)] = (8));

} else {
var statearr_30704_30730 = state_30700__$1;
(statearr_30704_30730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (1))){
var inst_30669 = cljs.core.vec.call(null,chs);
var inst_30670 = inst_30669;
var state_30700__$1 = (function (){var statearr_30705 = state_30700;
(statearr_30705[(10)] = inst_30670);

return statearr_30705;
})();
var statearr_30706_30731 = state_30700__$1;
(statearr_30706_30731[(2)] = null);

(statearr_30706_30731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (4))){
var inst_30670 = (state_30700[(10)]);
var state_30700__$1 = state_30700;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30700__$1,(7),inst_30670);
} else {
if((state_val_30701 === (6))){
var inst_30696 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30707_30732 = state_30700__$1;
(statearr_30707_30732[(2)] = inst_30696);

(statearr_30707_30732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (3))){
var inst_30698 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30700__$1,inst_30698);
} else {
if((state_val_30701 === (2))){
var inst_30670 = (state_30700[(10)]);
var inst_30672 = cljs.core.count.call(null,inst_30670);
var inst_30673 = (inst_30672 > (0));
var state_30700__$1 = state_30700;
if(cljs.core.truth_(inst_30673)){
var statearr_30709_30733 = state_30700__$1;
(statearr_30709_30733[(1)] = (4));

} else {
var statearr_30710_30734 = state_30700__$1;
(statearr_30710_30734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (11))){
var inst_30670 = (state_30700[(10)]);
var inst_30689 = (state_30700[(2)]);
var tmp30708 = inst_30670;
var inst_30670__$1 = tmp30708;
var state_30700__$1 = (function (){var statearr_30711 = state_30700;
(statearr_30711[(11)] = inst_30689);

(statearr_30711[(10)] = inst_30670__$1);

return statearr_30711;
})();
var statearr_30712_30735 = state_30700__$1;
(statearr_30712_30735[(2)] = null);

(statearr_30712_30735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (9))){
var inst_30680 = (state_30700[(7)]);
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30700__$1,(11),out,inst_30680);
} else {
if((state_val_30701 === (5))){
var inst_30694 = cljs.core.async.close_BANG_.call(null,out);
var state_30700__$1 = state_30700;
var statearr_30713_30736 = state_30700__$1;
(statearr_30713_30736[(2)] = inst_30694);

(statearr_30713_30736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (10))){
var inst_30692 = (state_30700[(2)]);
var state_30700__$1 = state_30700;
var statearr_30714_30737 = state_30700__$1;
(statearr_30714_30737[(2)] = inst_30692);

(statearr_30714_30737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30701 === (8))){
var inst_30670 = (state_30700[(10)]);
var inst_30681 = (state_30700[(9)]);
var inst_30680 = (state_30700[(7)]);
var inst_30679 = (state_30700[(8)]);
var inst_30684 = (function (){var cs = inst_30670;
var vec__30675 = inst_30679;
var v = inst_30680;
var c = inst_30681;
return ((function (cs,vec__30675,v,c,inst_30670,inst_30681,inst_30680,inst_30679,state_val_30701,c__28608__auto___30728,out){
return (function (p1__30665_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30665_SHARP_);
});
;})(cs,vec__30675,v,c,inst_30670,inst_30681,inst_30680,inst_30679,state_val_30701,c__28608__auto___30728,out))
})();
var inst_30685 = cljs.core.filterv.call(null,inst_30684,inst_30670);
var inst_30670__$1 = inst_30685;
var state_30700__$1 = (function (){var statearr_30715 = state_30700;
(statearr_30715[(10)] = inst_30670__$1);

return statearr_30715;
})();
var statearr_30716_30738 = state_30700__$1;
(statearr_30716_30738[(2)] = null);

(statearr_30716_30738[(1)] = (2));


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
});})(c__28608__auto___30728,out))
;
return ((function (switch__28496__auto__,c__28608__auto___30728,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_30720 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30720[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_30720[(1)] = (1));

return statearr_30720;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_30700){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_30700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e30721){if((e30721 instanceof Object)){
var ex__28500__auto__ = e30721;
var statearr_30722_30739 = state_30700;
(statearr_30722_30739[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30740 = state_30700;
state_30700 = G__30740;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_30700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_30700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___30728,out))
})();
var state__28610__auto__ = (function (){var statearr_30723 = f__28609__auto__.call(null);
(statearr_30723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___30728);

return statearr_30723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___30728,out))
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
var args30741 = [];
var len__25865__auto___30790 = arguments.length;
var i__25866__auto___30791 = (0);
while(true){
if((i__25866__auto___30791 < len__25865__auto___30790)){
args30741.push((arguments[i__25866__auto___30791]));

var G__30792 = (i__25866__auto___30791 + (1));
i__25866__auto___30791 = G__30792;
continue;
} else {
}
break;
}

var G__30743 = args30741.length;
switch (G__30743) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30741.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___30794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___30794,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___30794,out){
return (function (state_30767){
var state_val_30768 = (state_30767[(1)]);
if((state_val_30768 === (7))){
var inst_30749 = (state_30767[(7)]);
var inst_30749__$1 = (state_30767[(2)]);
var inst_30750 = (inst_30749__$1 == null);
var inst_30751 = cljs.core.not.call(null,inst_30750);
var state_30767__$1 = (function (){var statearr_30769 = state_30767;
(statearr_30769[(7)] = inst_30749__$1);

return statearr_30769;
})();
if(inst_30751){
var statearr_30770_30795 = state_30767__$1;
(statearr_30770_30795[(1)] = (8));

} else {
var statearr_30771_30796 = state_30767__$1;
(statearr_30771_30796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30768 === (1))){
var inst_30744 = (0);
var state_30767__$1 = (function (){var statearr_30772 = state_30767;
(statearr_30772[(8)] = inst_30744);

return statearr_30772;
})();
var statearr_30773_30797 = state_30767__$1;
(statearr_30773_30797[(2)] = null);

(statearr_30773_30797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30768 === (4))){
var state_30767__$1 = state_30767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30767__$1,(7),ch);
} else {
if((state_val_30768 === (6))){
var inst_30762 = (state_30767[(2)]);
var state_30767__$1 = state_30767;
var statearr_30774_30798 = state_30767__$1;
(statearr_30774_30798[(2)] = inst_30762);

(statearr_30774_30798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30768 === (3))){
var inst_30764 = (state_30767[(2)]);
var inst_30765 = cljs.core.async.close_BANG_.call(null,out);
var state_30767__$1 = (function (){var statearr_30775 = state_30767;
(statearr_30775[(9)] = inst_30764);

return statearr_30775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30767__$1,inst_30765);
} else {
if((state_val_30768 === (2))){
var inst_30744 = (state_30767[(8)]);
var inst_30746 = (inst_30744 < n);
var state_30767__$1 = state_30767;
if(cljs.core.truth_(inst_30746)){
var statearr_30776_30799 = state_30767__$1;
(statearr_30776_30799[(1)] = (4));

} else {
var statearr_30777_30800 = state_30767__$1;
(statearr_30777_30800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30768 === (11))){
var inst_30744 = (state_30767[(8)]);
var inst_30754 = (state_30767[(2)]);
var inst_30755 = (inst_30744 + (1));
var inst_30744__$1 = inst_30755;
var state_30767__$1 = (function (){var statearr_30778 = state_30767;
(statearr_30778[(10)] = inst_30754);

(statearr_30778[(8)] = inst_30744__$1);

return statearr_30778;
})();
var statearr_30779_30801 = state_30767__$1;
(statearr_30779_30801[(2)] = null);

(statearr_30779_30801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30768 === (9))){
var state_30767__$1 = state_30767;
var statearr_30780_30802 = state_30767__$1;
(statearr_30780_30802[(2)] = null);

(statearr_30780_30802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30768 === (5))){
var state_30767__$1 = state_30767;
var statearr_30781_30803 = state_30767__$1;
(statearr_30781_30803[(2)] = null);

(statearr_30781_30803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30768 === (10))){
var inst_30759 = (state_30767[(2)]);
var state_30767__$1 = state_30767;
var statearr_30782_30804 = state_30767__$1;
(statearr_30782_30804[(2)] = inst_30759);

(statearr_30782_30804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30768 === (8))){
var inst_30749 = (state_30767[(7)]);
var state_30767__$1 = state_30767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30767__$1,(11),out,inst_30749);
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
});})(c__28608__auto___30794,out))
;
return ((function (switch__28496__auto__,c__28608__auto___30794,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_30786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30786[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_30786[(1)] = (1));

return statearr_30786;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_30767){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_30767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e30787){if((e30787 instanceof Object)){
var ex__28500__auto__ = e30787;
var statearr_30788_30805 = state_30767;
(statearr_30788_30805[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30806 = state_30767;
state_30767 = G__30806;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_30767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_30767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___30794,out))
})();
var state__28610__auto__ = (function (){var statearr_30789 = f__28609__auto__.call(null);
(statearr_30789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___30794);

return statearr_30789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___30794,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30814 = (function (map_LT_,f,ch,meta30815){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30815 = meta30815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30816,meta30815__$1){
var self__ = this;
var _30816__$1 = this;
return (new cljs.core.async.t_cljs$core$async30814(self__.map_LT_,self__.f,self__.ch,meta30815__$1));
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30816){
var self__ = this;
var _30816__$1 = this;
return self__.meta30815;
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30817 = (function (map_LT_,f,ch,meta30815,_,fn1,meta30818){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30815 = meta30815;
this._ = _;
this.fn1 = fn1;
this.meta30818 = meta30818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30819,meta30818__$1){
var self__ = this;
var _30819__$1 = this;
return (new cljs.core.async.t_cljs$core$async30817(self__.map_LT_,self__.f,self__.ch,self__.meta30815,self__._,self__.fn1,meta30818__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30819){
var self__ = this;
var _30819__$1 = this;
return self__.meta30818;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30817.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30807_SHARP_){
return f1.call(null,(((p1__30807_SHARP_ == null))?null:self__.f.call(null,p1__30807_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30817.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30815","meta30815",-1002893388,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30814","cljs.core.async/t_cljs$core$async30814",-2037389985,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30818","meta30818",999714517,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30817";

cljs.core.async.t_cljs$core$async30817.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30817");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30817 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30817(map_LT___$1,f__$1,ch__$1,meta30815__$1,___$2,fn1__$1,meta30818){
return (new cljs.core.async.t_cljs$core$async30817(map_LT___$1,f__$1,ch__$1,meta30815__$1,___$2,fn1__$1,meta30818));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30817(self__.map_LT_,self__.f,self__.ch,self__.meta30815,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24778__auto__ = ret;
if(cljs.core.truth_(and__24778__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24778__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30815","meta30815",-1002893388,null)], null);
});

cljs.core.async.t_cljs$core$async30814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30814";

cljs.core.async.t_cljs$core$async30814.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30814");
});

cljs.core.async.__GT_t_cljs$core$async30814 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30814(map_LT___$1,f__$1,ch__$1,meta30815){
return (new cljs.core.async.t_cljs$core$async30814(map_LT___$1,f__$1,ch__$1,meta30815));
});

}

return (new cljs.core.async.t_cljs$core$async30814(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30823 = (function (map_GT_,f,ch,meta30824){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30824 = meta30824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30825,meta30824__$1){
var self__ = this;
var _30825__$1 = this;
return (new cljs.core.async.t_cljs$core$async30823(self__.map_GT_,self__.f,self__.ch,meta30824__$1));
});

cljs.core.async.t_cljs$core$async30823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30825){
var self__ = this;
var _30825__$1 = this;
return self__.meta30824;
});

cljs.core.async.t_cljs$core$async30823.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30823.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30823.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30824","meta30824",-1817986474,null)], null);
});

cljs.core.async.t_cljs$core$async30823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30823";

cljs.core.async.t_cljs$core$async30823.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30823");
});

cljs.core.async.__GT_t_cljs$core$async30823 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30823(map_GT___$1,f__$1,ch__$1,meta30824){
return (new cljs.core.async.t_cljs$core$async30823(map_GT___$1,f__$1,ch__$1,meta30824));
});

}

return (new cljs.core.async.t_cljs$core$async30823(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30829 = (function (filter_GT_,p,ch,meta30830){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30830 = meta30830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30831,meta30830__$1){
var self__ = this;
var _30831__$1 = this;
return (new cljs.core.async.t_cljs$core$async30829(self__.filter_GT_,self__.p,self__.ch,meta30830__$1));
});

cljs.core.async.t_cljs$core$async30829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30831){
var self__ = this;
var _30831__$1 = this;
return self__.meta30830;
});

cljs.core.async.t_cljs$core$async30829.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30829.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30829.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30830","meta30830",-726631752,null)], null);
});

cljs.core.async.t_cljs$core$async30829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30829";

cljs.core.async.t_cljs$core$async30829.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async30829");
});

cljs.core.async.__GT_t_cljs$core$async30829 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30829(filter_GT___$1,p__$1,ch__$1,meta30830){
return (new cljs.core.async.t_cljs$core$async30829(filter_GT___$1,p__$1,ch__$1,meta30830));
});

}

return (new cljs.core.async.t_cljs$core$async30829(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30832 = [];
var len__25865__auto___30876 = arguments.length;
var i__25866__auto___30877 = (0);
while(true){
if((i__25866__auto___30877 < len__25865__auto___30876)){
args30832.push((arguments[i__25866__auto___30877]));

var G__30878 = (i__25866__auto___30877 + (1));
i__25866__auto___30877 = G__30878;
continue;
} else {
}
break;
}

var G__30834 = args30832.length;
switch (G__30834) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30832.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___30880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___30880,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___30880,out){
return (function (state_30855){
var state_val_30856 = (state_30855[(1)]);
if((state_val_30856 === (7))){
var inst_30851 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30857_30881 = state_30855__$1;
(statearr_30857_30881[(2)] = inst_30851);

(statearr_30857_30881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (1))){
var state_30855__$1 = state_30855;
var statearr_30858_30882 = state_30855__$1;
(statearr_30858_30882[(2)] = null);

(statearr_30858_30882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (4))){
var inst_30837 = (state_30855[(7)]);
var inst_30837__$1 = (state_30855[(2)]);
var inst_30838 = (inst_30837__$1 == null);
var state_30855__$1 = (function (){var statearr_30859 = state_30855;
(statearr_30859[(7)] = inst_30837__$1);

return statearr_30859;
})();
if(cljs.core.truth_(inst_30838)){
var statearr_30860_30883 = state_30855__$1;
(statearr_30860_30883[(1)] = (5));

} else {
var statearr_30861_30884 = state_30855__$1;
(statearr_30861_30884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (6))){
var inst_30837 = (state_30855[(7)]);
var inst_30842 = p.call(null,inst_30837);
var state_30855__$1 = state_30855;
if(cljs.core.truth_(inst_30842)){
var statearr_30862_30885 = state_30855__$1;
(statearr_30862_30885[(1)] = (8));

} else {
var statearr_30863_30886 = state_30855__$1;
(statearr_30863_30886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (3))){
var inst_30853 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30855__$1,inst_30853);
} else {
if((state_val_30856 === (2))){
var state_30855__$1 = state_30855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30855__$1,(4),ch);
} else {
if((state_val_30856 === (11))){
var inst_30845 = (state_30855[(2)]);
var state_30855__$1 = state_30855;
var statearr_30864_30887 = state_30855__$1;
(statearr_30864_30887[(2)] = inst_30845);

(statearr_30864_30887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (9))){
var state_30855__$1 = state_30855;
var statearr_30865_30888 = state_30855__$1;
(statearr_30865_30888[(2)] = null);

(statearr_30865_30888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (5))){
var inst_30840 = cljs.core.async.close_BANG_.call(null,out);
var state_30855__$1 = state_30855;
var statearr_30866_30889 = state_30855__$1;
(statearr_30866_30889[(2)] = inst_30840);

(statearr_30866_30889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (10))){
var inst_30848 = (state_30855[(2)]);
var state_30855__$1 = (function (){var statearr_30867 = state_30855;
(statearr_30867[(8)] = inst_30848);

return statearr_30867;
})();
var statearr_30868_30890 = state_30855__$1;
(statearr_30868_30890[(2)] = null);

(statearr_30868_30890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30856 === (8))){
var inst_30837 = (state_30855[(7)]);
var state_30855__$1 = state_30855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30855__$1,(11),out,inst_30837);
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
});})(c__28608__auto___30880,out))
;
return ((function (switch__28496__auto__,c__28608__auto___30880,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_30872 = [null,null,null,null,null,null,null,null,null];
(statearr_30872[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_30872[(1)] = (1));

return statearr_30872;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_30855){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_30855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e30873){if((e30873 instanceof Object)){
var ex__28500__auto__ = e30873;
var statearr_30874_30891 = state_30855;
(statearr_30874_30891[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30892 = state_30855;
state_30855 = G__30892;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_30855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_30855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___30880,out))
})();
var state__28610__auto__ = (function (){var statearr_30875 = f__28609__auto__.call(null);
(statearr_30875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___30880);

return statearr_30875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___30880,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30893 = [];
var len__25865__auto___30896 = arguments.length;
var i__25866__auto___30897 = (0);
while(true){
if((i__25866__auto___30897 < len__25865__auto___30896)){
args30893.push((arguments[i__25866__auto___30897]));

var G__30898 = (i__25866__auto___30897 + (1));
i__25866__auto___30897 = G__30898;
continue;
} else {
}
break;
}

var G__30895 = args30893.length;
switch (G__30895) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30893.length)].join('')));

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
var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__){
return (function (state_31065){
var state_val_31066 = (state_31065[(1)]);
if((state_val_31066 === (7))){
var inst_31061 = (state_31065[(2)]);
var state_31065__$1 = state_31065;
var statearr_31067_31108 = state_31065__$1;
(statearr_31067_31108[(2)] = inst_31061);

(statearr_31067_31108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (20))){
var inst_31031 = (state_31065[(7)]);
var inst_31042 = (state_31065[(2)]);
var inst_31043 = cljs.core.next.call(null,inst_31031);
var inst_31017 = inst_31043;
var inst_31018 = null;
var inst_31019 = (0);
var inst_31020 = (0);
var state_31065__$1 = (function (){var statearr_31068 = state_31065;
(statearr_31068[(8)] = inst_31017);

(statearr_31068[(9)] = inst_31018);

(statearr_31068[(10)] = inst_31020);

(statearr_31068[(11)] = inst_31042);

(statearr_31068[(12)] = inst_31019);

return statearr_31068;
})();
var statearr_31069_31109 = state_31065__$1;
(statearr_31069_31109[(2)] = null);

(statearr_31069_31109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (1))){
var state_31065__$1 = state_31065;
var statearr_31070_31110 = state_31065__$1;
(statearr_31070_31110[(2)] = null);

(statearr_31070_31110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (4))){
var inst_31006 = (state_31065[(13)]);
var inst_31006__$1 = (state_31065[(2)]);
var inst_31007 = (inst_31006__$1 == null);
var state_31065__$1 = (function (){var statearr_31071 = state_31065;
(statearr_31071[(13)] = inst_31006__$1);

return statearr_31071;
})();
if(cljs.core.truth_(inst_31007)){
var statearr_31072_31111 = state_31065__$1;
(statearr_31072_31111[(1)] = (5));

} else {
var statearr_31073_31112 = state_31065__$1;
(statearr_31073_31112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (15))){
var state_31065__$1 = state_31065;
var statearr_31077_31113 = state_31065__$1;
(statearr_31077_31113[(2)] = null);

(statearr_31077_31113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (21))){
var state_31065__$1 = state_31065;
var statearr_31078_31114 = state_31065__$1;
(statearr_31078_31114[(2)] = null);

(statearr_31078_31114[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (13))){
var inst_31017 = (state_31065[(8)]);
var inst_31018 = (state_31065[(9)]);
var inst_31020 = (state_31065[(10)]);
var inst_31019 = (state_31065[(12)]);
var inst_31027 = (state_31065[(2)]);
var inst_31028 = (inst_31020 + (1));
var tmp31074 = inst_31017;
var tmp31075 = inst_31018;
var tmp31076 = inst_31019;
var inst_31017__$1 = tmp31074;
var inst_31018__$1 = tmp31075;
var inst_31019__$1 = tmp31076;
var inst_31020__$1 = inst_31028;
var state_31065__$1 = (function (){var statearr_31079 = state_31065;
(statearr_31079[(8)] = inst_31017__$1);

(statearr_31079[(9)] = inst_31018__$1);

(statearr_31079[(10)] = inst_31020__$1);

(statearr_31079[(14)] = inst_31027);

(statearr_31079[(12)] = inst_31019__$1);

return statearr_31079;
})();
var statearr_31080_31115 = state_31065__$1;
(statearr_31080_31115[(2)] = null);

(statearr_31080_31115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (22))){
var state_31065__$1 = state_31065;
var statearr_31081_31116 = state_31065__$1;
(statearr_31081_31116[(2)] = null);

(statearr_31081_31116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (6))){
var inst_31006 = (state_31065[(13)]);
var inst_31015 = f.call(null,inst_31006);
var inst_31016 = cljs.core.seq.call(null,inst_31015);
var inst_31017 = inst_31016;
var inst_31018 = null;
var inst_31019 = (0);
var inst_31020 = (0);
var state_31065__$1 = (function (){var statearr_31082 = state_31065;
(statearr_31082[(8)] = inst_31017);

(statearr_31082[(9)] = inst_31018);

(statearr_31082[(10)] = inst_31020);

(statearr_31082[(12)] = inst_31019);

return statearr_31082;
})();
var statearr_31083_31117 = state_31065__$1;
(statearr_31083_31117[(2)] = null);

(statearr_31083_31117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (17))){
var inst_31031 = (state_31065[(7)]);
var inst_31035 = cljs.core.chunk_first.call(null,inst_31031);
var inst_31036 = cljs.core.chunk_rest.call(null,inst_31031);
var inst_31037 = cljs.core.count.call(null,inst_31035);
var inst_31017 = inst_31036;
var inst_31018 = inst_31035;
var inst_31019 = inst_31037;
var inst_31020 = (0);
var state_31065__$1 = (function (){var statearr_31084 = state_31065;
(statearr_31084[(8)] = inst_31017);

(statearr_31084[(9)] = inst_31018);

(statearr_31084[(10)] = inst_31020);

(statearr_31084[(12)] = inst_31019);

return statearr_31084;
})();
var statearr_31085_31118 = state_31065__$1;
(statearr_31085_31118[(2)] = null);

(statearr_31085_31118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (3))){
var inst_31063 = (state_31065[(2)]);
var state_31065__$1 = state_31065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31065__$1,inst_31063);
} else {
if((state_val_31066 === (12))){
var inst_31051 = (state_31065[(2)]);
var state_31065__$1 = state_31065;
var statearr_31086_31119 = state_31065__$1;
(statearr_31086_31119[(2)] = inst_31051);

(statearr_31086_31119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (2))){
var state_31065__$1 = state_31065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31065__$1,(4),in$);
} else {
if((state_val_31066 === (23))){
var inst_31059 = (state_31065[(2)]);
var state_31065__$1 = state_31065;
var statearr_31087_31120 = state_31065__$1;
(statearr_31087_31120[(2)] = inst_31059);

(statearr_31087_31120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (19))){
var inst_31046 = (state_31065[(2)]);
var state_31065__$1 = state_31065;
var statearr_31088_31121 = state_31065__$1;
(statearr_31088_31121[(2)] = inst_31046);

(statearr_31088_31121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (11))){
var inst_31017 = (state_31065[(8)]);
var inst_31031 = (state_31065[(7)]);
var inst_31031__$1 = cljs.core.seq.call(null,inst_31017);
var state_31065__$1 = (function (){var statearr_31089 = state_31065;
(statearr_31089[(7)] = inst_31031__$1);

return statearr_31089;
})();
if(inst_31031__$1){
var statearr_31090_31122 = state_31065__$1;
(statearr_31090_31122[(1)] = (14));

} else {
var statearr_31091_31123 = state_31065__$1;
(statearr_31091_31123[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (9))){
var inst_31053 = (state_31065[(2)]);
var inst_31054 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31065__$1 = (function (){var statearr_31092 = state_31065;
(statearr_31092[(15)] = inst_31053);

return statearr_31092;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31093_31124 = state_31065__$1;
(statearr_31093_31124[(1)] = (21));

} else {
var statearr_31094_31125 = state_31065__$1;
(statearr_31094_31125[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (5))){
var inst_31009 = cljs.core.async.close_BANG_.call(null,out);
var state_31065__$1 = state_31065;
var statearr_31095_31126 = state_31065__$1;
(statearr_31095_31126[(2)] = inst_31009);

(statearr_31095_31126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (14))){
var inst_31031 = (state_31065[(7)]);
var inst_31033 = cljs.core.chunked_seq_QMARK_.call(null,inst_31031);
var state_31065__$1 = state_31065;
if(inst_31033){
var statearr_31096_31127 = state_31065__$1;
(statearr_31096_31127[(1)] = (17));

} else {
var statearr_31097_31128 = state_31065__$1;
(statearr_31097_31128[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (16))){
var inst_31049 = (state_31065[(2)]);
var state_31065__$1 = state_31065;
var statearr_31098_31129 = state_31065__$1;
(statearr_31098_31129[(2)] = inst_31049);

(statearr_31098_31129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31066 === (10))){
var inst_31018 = (state_31065[(9)]);
var inst_31020 = (state_31065[(10)]);
var inst_31025 = cljs.core._nth.call(null,inst_31018,inst_31020);
var state_31065__$1 = state_31065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31065__$1,(13),out,inst_31025);
} else {
if((state_val_31066 === (18))){
var inst_31031 = (state_31065[(7)]);
var inst_31040 = cljs.core.first.call(null,inst_31031);
var state_31065__$1 = state_31065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31065__$1,(20),out,inst_31040);
} else {
if((state_val_31066 === (8))){
var inst_31020 = (state_31065[(10)]);
var inst_31019 = (state_31065[(12)]);
var inst_31022 = (inst_31020 < inst_31019);
var inst_31023 = inst_31022;
var state_31065__$1 = state_31065;
if(cljs.core.truth_(inst_31023)){
var statearr_31099_31130 = state_31065__$1;
(statearr_31099_31130[(1)] = (10));

} else {
var statearr_31100_31131 = state_31065__$1;
(statearr_31100_31131[(1)] = (11));

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
});})(c__28608__auto__))
;
return ((function (switch__28496__auto__,c__28608__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_31104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31104[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__);

(statearr_31104[(1)] = (1));

return statearr_31104;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____1 = (function (state_31065){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_31065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e31105){if((e31105 instanceof Object)){
var ex__28500__auto__ = e31105;
var statearr_31106_31132 = state_31065;
(statearr_31106_31132[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31133 = state_31065;
state_31065 = G__31133;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__ = function(state_31065){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____1.call(this,state_31065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_31107 = f__28609__auto__.call(null);
(statearr_31107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_31107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto__))
);

return c__28608__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31134 = [];
var len__25865__auto___31137 = arguments.length;
var i__25866__auto___31138 = (0);
while(true){
if((i__25866__auto___31138 < len__25865__auto___31137)){
args31134.push((arguments[i__25866__auto___31138]));

var G__31139 = (i__25866__auto___31138 + (1));
i__25866__auto___31138 = G__31139;
continue;
} else {
}
break;
}

var G__31136 = args31134.length;
switch (G__31136) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31134.length)].join('')));

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
var args31141 = [];
var len__25865__auto___31144 = arguments.length;
var i__25866__auto___31145 = (0);
while(true){
if((i__25866__auto___31145 < len__25865__auto___31144)){
args31141.push((arguments[i__25866__auto___31145]));

var G__31146 = (i__25866__auto___31145 + (1));
i__25866__auto___31145 = G__31146;
continue;
} else {
}
break;
}

var G__31143 = args31141.length;
switch (G__31143) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31141.length)].join('')));

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
var args31148 = [];
var len__25865__auto___31199 = arguments.length;
var i__25866__auto___31200 = (0);
while(true){
if((i__25866__auto___31200 < len__25865__auto___31199)){
args31148.push((arguments[i__25866__auto___31200]));

var G__31201 = (i__25866__auto___31200 + (1));
i__25866__auto___31200 = G__31201;
continue;
} else {
}
break;
}

var G__31150 = args31148.length;
switch (G__31150) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31148.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___31203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___31203,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___31203,out){
return (function (state_31174){
var state_val_31175 = (state_31174[(1)]);
if((state_val_31175 === (7))){
var inst_31169 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31176_31204 = state_31174__$1;
(statearr_31176_31204[(2)] = inst_31169);

(statearr_31176_31204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (1))){
var inst_31151 = null;
var state_31174__$1 = (function (){var statearr_31177 = state_31174;
(statearr_31177[(7)] = inst_31151);

return statearr_31177;
})();
var statearr_31178_31205 = state_31174__$1;
(statearr_31178_31205[(2)] = null);

(statearr_31178_31205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (4))){
var inst_31154 = (state_31174[(8)]);
var inst_31154__$1 = (state_31174[(2)]);
var inst_31155 = (inst_31154__$1 == null);
var inst_31156 = cljs.core.not.call(null,inst_31155);
var state_31174__$1 = (function (){var statearr_31179 = state_31174;
(statearr_31179[(8)] = inst_31154__$1);

return statearr_31179;
})();
if(inst_31156){
var statearr_31180_31206 = state_31174__$1;
(statearr_31180_31206[(1)] = (5));

} else {
var statearr_31181_31207 = state_31174__$1;
(statearr_31181_31207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (6))){
var state_31174__$1 = state_31174;
var statearr_31182_31208 = state_31174__$1;
(statearr_31182_31208[(2)] = null);

(statearr_31182_31208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (3))){
var inst_31171 = (state_31174[(2)]);
var inst_31172 = cljs.core.async.close_BANG_.call(null,out);
var state_31174__$1 = (function (){var statearr_31183 = state_31174;
(statearr_31183[(9)] = inst_31171);

return statearr_31183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31174__$1,inst_31172);
} else {
if((state_val_31175 === (2))){
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31174__$1,(4),ch);
} else {
if((state_val_31175 === (11))){
var inst_31154 = (state_31174[(8)]);
var inst_31163 = (state_31174[(2)]);
var inst_31151 = inst_31154;
var state_31174__$1 = (function (){var statearr_31184 = state_31174;
(statearr_31184[(10)] = inst_31163);

(statearr_31184[(7)] = inst_31151);

return statearr_31184;
})();
var statearr_31185_31209 = state_31174__$1;
(statearr_31185_31209[(2)] = null);

(statearr_31185_31209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (9))){
var inst_31154 = (state_31174[(8)]);
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31174__$1,(11),out,inst_31154);
} else {
if((state_val_31175 === (5))){
var inst_31151 = (state_31174[(7)]);
var inst_31154 = (state_31174[(8)]);
var inst_31158 = cljs.core._EQ_.call(null,inst_31154,inst_31151);
var state_31174__$1 = state_31174;
if(inst_31158){
var statearr_31187_31210 = state_31174__$1;
(statearr_31187_31210[(1)] = (8));

} else {
var statearr_31188_31211 = state_31174__$1;
(statearr_31188_31211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (10))){
var inst_31166 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31189_31212 = state_31174__$1;
(statearr_31189_31212[(2)] = inst_31166);

(statearr_31189_31212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (8))){
var inst_31151 = (state_31174[(7)]);
var tmp31186 = inst_31151;
var inst_31151__$1 = tmp31186;
var state_31174__$1 = (function (){var statearr_31190 = state_31174;
(statearr_31190[(7)] = inst_31151__$1);

return statearr_31190;
})();
var statearr_31191_31213 = state_31174__$1;
(statearr_31191_31213[(2)] = null);

(statearr_31191_31213[(1)] = (2));


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
});})(c__28608__auto___31203,out))
;
return ((function (switch__28496__auto__,c__28608__auto___31203,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_31195 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31195[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_31195[(1)] = (1));

return statearr_31195;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_31174){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_31174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e31196){if((e31196 instanceof Object)){
var ex__28500__auto__ = e31196;
var statearr_31197_31214 = state_31174;
(statearr_31197_31214[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31215 = state_31174;
state_31174 = G__31215;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_31174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_31174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___31203,out))
})();
var state__28610__auto__ = (function (){var statearr_31198 = f__28609__auto__.call(null);
(statearr_31198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___31203);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___31203,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31216 = [];
var len__25865__auto___31286 = arguments.length;
var i__25866__auto___31287 = (0);
while(true){
if((i__25866__auto___31287 < len__25865__auto___31286)){
args31216.push((arguments[i__25866__auto___31287]));

var G__31288 = (i__25866__auto___31287 + (1));
i__25866__auto___31287 = G__31288;
continue;
} else {
}
break;
}

var G__31218 = args31216.length;
switch (G__31218) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31216.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___31290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___31290,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___31290,out){
return (function (state_31256){
var state_val_31257 = (state_31256[(1)]);
if((state_val_31257 === (7))){
var inst_31252 = (state_31256[(2)]);
var state_31256__$1 = state_31256;
var statearr_31258_31291 = state_31256__$1;
(statearr_31258_31291[(2)] = inst_31252);

(statearr_31258_31291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (1))){
var inst_31219 = (new Array(n));
var inst_31220 = inst_31219;
var inst_31221 = (0);
var state_31256__$1 = (function (){var statearr_31259 = state_31256;
(statearr_31259[(7)] = inst_31220);

(statearr_31259[(8)] = inst_31221);

return statearr_31259;
})();
var statearr_31260_31292 = state_31256__$1;
(statearr_31260_31292[(2)] = null);

(statearr_31260_31292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (4))){
var inst_31224 = (state_31256[(9)]);
var inst_31224__$1 = (state_31256[(2)]);
var inst_31225 = (inst_31224__$1 == null);
var inst_31226 = cljs.core.not.call(null,inst_31225);
var state_31256__$1 = (function (){var statearr_31261 = state_31256;
(statearr_31261[(9)] = inst_31224__$1);

return statearr_31261;
})();
if(inst_31226){
var statearr_31262_31293 = state_31256__$1;
(statearr_31262_31293[(1)] = (5));

} else {
var statearr_31263_31294 = state_31256__$1;
(statearr_31263_31294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (15))){
var inst_31246 = (state_31256[(2)]);
var state_31256__$1 = state_31256;
var statearr_31264_31295 = state_31256__$1;
(statearr_31264_31295[(2)] = inst_31246);

(statearr_31264_31295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (13))){
var state_31256__$1 = state_31256;
var statearr_31265_31296 = state_31256__$1;
(statearr_31265_31296[(2)] = null);

(statearr_31265_31296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (6))){
var inst_31221 = (state_31256[(8)]);
var inst_31242 = (inst_31221 > (0));
var state_31256__$1 = state_31256;
if(cljs.core.truth_(inst_31242)){
var statearr_31266_31297 = state_31256__$1;
(statearr_31266_31297[(1)] = (12));

} else {
var statearr_31267_31298 = state_31256__$1;
(statearr_31267_31298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (3))){
var inst_31254 = (state_31256[(2)]);
var state_31256__$1 = state_31256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31256__$1,inst_31254);
} else {
if((state_val_31257 === (12))){
var inst_31220 = (state_31256[(7)]);
var inst_31244 = cljs.core.vec.call(null,inst_31220);
var state_31256__$1 = state_31256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31256__$1,(15),out,inst_31244);
} else {
if((state_val_31257 === (2))){
var state_31256__$1 = state_31256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31256__$1,(4),ch);
} else {
if((state_val_31257 === (11))){
var inst_31236 = (state_31256[(2)]);
var inst_31237 = (new Array(n));
var inst_31220 = inst_31237;
var inst_31221 = (0);
var state_31256__$1 = (function (){var statearr_31268 = state_31256;
(statearr_31268[(7)] = inst_31220);

(statearr_31268[(10)] = inst_31236);

(statearr_31268[(8)] = inst_31221);

return statearr_31268;
})();
var statearr_31269_31299 = state_31256__$1;
(statearr_31269_31299[(2)] = null);

(statearr_31269_31299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (9))){
var inst_31220 = (state_31256[(7)]);
var inst_31234 = cljs.core.vec.call(null,inst_31220);
var state_31256__$1 = state_31256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31256__$1,(11),out,inst_31234);
} else {
if((state_val_31257 === (5))){
var inst_31220 = (state_31256[(7)]);
var inst_31224 = (state_31256[(9)]);
var inst_31221 = (state_31256[(8)]);
var inst_31229 = (state_31256[(11)]);
var inst_31228 = (inst_31220[inst_31221] = inst_31224);
var inst_31229__$1 = (inst_31221 + (1));
var inst_31230 = (inst_31229__$1 < n);
var state_31256__$1 = (function (){var statearr_31270 = state_31256;
(statearr_31270[(12)] = inst_31228);

(statearr_31270[(11)] = inst_31229__$1);

return statearr_31270;
})();
if(cljs.core.truth_(inst_31230)){
var statearr_31271_31300 = state_31256__$1;
(statearr_31271_31300[(1)] = (8));

} else {
var statearr_31272_31301 = state_31256__$1;
(statearr_31272_31301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (14))){
var inst_31249 = (state_31256[(2)]);
var inst_31250 = cljs.core.async.close_BANG_.call(null,out);
var state_31256__$1 = (function (){var statearr_31274 = state_31256;
(statearr_31274[(13)] = inst_31249);

return statearr_31274;
})();
var statearr_31275_31302 = state_31256__$1;
(statearr_31275_31302[(2)] = inst_31250);

(statearr_31275_31302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (10))){
var inst_31240 = (state_31256[(2)]);
var state_31256__$1 = state_31256;
var statearr_31276_31303 = state_31256__$1;
(statearr_31276_31303[(2)] = inst_31240);

(statearr_31276_31303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31257 === (8))){
var inst_31220 = (state_31256[(7)]);
var inst_31229 = (state_31256[(11)]);
var tmp31273 = inst_31220;
var inst_31220__$1 = tmp31273;
var inst_31221 = inst_31229;
var state_31256__$1 = (function (){var statearr_31277 = state_31256;
(statearr_31277[(7)] = inst_31220__$1);

(statearr_31277[(8)] = inst_31221);

return statearr_31277;
})();
var statearr_31278_31304 = state_31256__$1;
(statearr_31278_31304[(2)] = null);

(statearr_31278_31304[(1)] = (2));


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
});})(c__28608__auto___31290,out))
;
return ((function (switch__28496__auto__,c__28608__auto___31290,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_31282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31282[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_31282[(1)] = (1));

return statearr_31282;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_31256){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_31256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e31283){if((e31283 instanceof Object)){
var ex__28500__auto__ = e31283;
var statearr_31284_31305 = state_31256;
(statearr_31284_31305[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31306 = state_31256;
state_31256 = G__31306;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_31256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_31256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___31290,out))
})();
var state__28610__auto__ = (function (){var statearr_31285 = f__28609__auto__.call(null);
(statearr_31285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___31290);

return statearr_31285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___31290,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31307 = [];
var len__25865__auto___31381 = arguments.length;
var i__25866__auto___31382 = (0);
while(true){
if((i__25866__auto___31382 < len__25865__auto___31381)){
args31307.push((arguments[i__25866__auto___31382]));

var G__31383 = (i__25866__auto___31382 + (1));
i__25866__auto___31382 = G__31383;
continue;
} else {
}
break;
}

var G__31309 = args31307.length;
switch (G__31309) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31307.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___31385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___31385,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___31385,out){
return (function (state_31351){
var state_val_31352 = (state_31351[(1)]);
if((state_val_31352 === (7))){
var inst_31347 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31353_31386 = state_31351__$1;
(statearr_31353_31386[(2)] = inst_31347);

(statearr_31353_31386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (1))){
var inst_31310 = [];
var inst_31311 = inst_31310;
var inst_31312 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31351__$1 = (function (){var statearr_31354 = state_31351;
(statearr_31354[(7)] = inst_31312);

(statearr_31354[(8)] = inst_31311);

return statearr_31354;
})();
var statearr_31355_31387 = state_31351__$1;
(statearr_31355_31387[(2)] = null);

(statearr_31355_31387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (4))){
var inst_31315 = (state_31351[(9)]);
var inst_31315__$1 = (state_31351[(2)]);
var inst_31316 = (inst_31315__$1 == null);
var inst_31317 = cljs.core.not.call(null,inst_31316);
var state_31351__$1 = (function (){var statearr_31356 = state_31351;
(statearr_31356[(9)] = inst_31315__$1);

return statearr_31356;
})();
if(inst_31317){
var statearr_31357_31388 = state_31351__$1;
(statearr_31357_31388[(1)] = (5));

} else {
var statearr_31358_31389 = state_31351__$1;
(statearr_31358_31389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (15))){
var inst_31341 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31359_31390 = state_31351__$1;
(statearr_31359_31390[(2)] = inst_31341);

(statearr_31359_31390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (13))){
var state_31351__$1 = state_31351;
var statearr_31360_31391 = state_31351__$1;
(statearr_31360_31391[(2)] = null);

(statearr_31360_31391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (6))){
var inst_31311 = (state_31351[(8)]);
var inst_31336 = inst_31311.length;
var inst_31337 = (inst_31336 > (0));
var state_31351__$1 = state_31351;
if(cljs.core.truth_(inst_31337)){
var statearr_31361_31392 = state_31351__$1;
(statearr_31361_31392[(1)] = (12));

} else {
var statearr_31362_31393 = state_31351__$1;
(statearr_31362_31393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (3))){
var inst_31349 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31351__$1,inst_31349);
} else {
if((state_val_31352 === (12))){
var inst_31311 = (state_31351[(8)]);
var inst_31339 = cljs.core.vec.call(null,inst_31311);
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31351__$1,(15),out,inst_31339);
} else {
if((state_val_31352 === (2))){
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31351__$1,(4),ch);
} else {
if((state_val_31352 === (11))){
var inst_31319 = (state_31351[(10)]);
var inst_31315 = (state_31351[(9)]);
var inst_31329 = (state_31351[(2)]);
var inst_31330 = [];
var inst_31331 = inst_31330.push(inst_31315);
var inst_31311 = inst_31330;
var inst_31312 = inst_31319;
var state_31351__$1 = (function (){var statearr_31363 = state_31351;
(statearr_31363[(7)] = inst_31312);

(statearr_31363[(11)] = inst_31331);

(statearr_31363[(12)] = inst_31329);

(statearr_31363[(8)] = inst_31311);

return statearr_31363;
})();
var statearr_31364_31394 = state_31351__$1;
(statearr_31364_31394[(2)] = null);

(statearr_31364_31394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (9))){
var inst_31311 = (state_31351[(8)]);
var inst_31327 = cljs.core.vec.call(null,inst_31311);
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31351__$1,(11),out,inst_31327);
} else {
if((state_val_31352 === (5))){
var inst_31319 = (state_31351[(10)]);
var inst_31312 = (state_31351[(7)]);
var inst_31315 = (state_31351[(9)]);
var inst_31319__$1 = f.call(null,inst_31315);
var inst_31320 = cljs.core._EQ_.call(null,inst_31319__$1,inst_31312);
var inst_31321 = cljs.core.keyword_identical_QMARK_.call(null,inst_31312,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31322 = (inst_31320) || (inst_31321);
var state_31351__$1 = (function (){var statearr_31365 = state_31351;
(statearr_31365[(10)] = inst_31319__$1);

return statearr_31365;
})();
if(cljs.core.truth_(inst_31322)){
var statearr_31366_31395 = state_31351__$1;
(statearr_31366_31395[(1)] = (8));

} else {
var statearr_31367_31396 = state_31351__$1;
(statearr_31367_31396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (14))){
var inst_31344 = (state_31351[(2)]);
var inst_31345 = cljs.core.async.close_BANG_.call(null,out);
var state_31351__$1 = (function (){var statearr_31369 = state_31351;
(statearr_31369[(13)] = inst_31344);

return statearr_31369;
})();
var statearr_31370_31397 = state_31351__$1;
(statearr_31370_31397[(2)] = inst_31345);

(statearr_31370_31397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (10))){
var inst_31334 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31371_31398 = state_31351__$1;
(statearr_31371_31398[(2)] = inst_31334);

(statearr_31371_31398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (8))){
var inst_31319 = (state_31351[(10)]);
var inst_31315 = (state_31351[(9)]);
var inst_31311 = (state_31351[(8)]);
var inst_31324 = inst_31311.push(inst_31315);
var tmp31368 = inst_31311;
var inst_31311__$1 = tmp31368;
var inst_31312 = inst_31319;
var state_31351__$1 = (function (){var statearr_31372 = state_31351;
(statearr_31372[(7)] = inst_31312);

(statearr_31372[(14)] = inst_31324);

(statearr_31372[(8)] = inst_31311__$1);

return statearr_31372;
})();
var statearr_31373_31399 = state_31351__$1;
(statearr_31373_31399[(2)] = null);

(statearr_31373_31399[(1)] = (2));


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
});})(c__28608__auto___31385,out))
;
return ((function (switch__28496__auto__,c__28608__auto___31385,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_31377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31377[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_31377[(1)] = (1));

return statearr_31377;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_31351){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_31351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e31378){if((e31378 instanceof Object)){
var ex__28500__auto__ = e31378;
var statearr_31379_31400 = state_31351;
(statearr_31379_31400[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31401 = state_31351;
state_31351 = G__31401;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_31351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_31351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___31385,out))
})();
var state__28610__auto__ = (function (){var statearr_31380 = f__28609__auto__.call(null);
(statearr_31380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___31385);

return statearr_31380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___31385,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1475620899438