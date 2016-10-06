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
var args39793 = [];
var len__25865__auto___39799 = arguments.length;
var i__25866__auto___39800 = (0);
while(true){
if((i__25866__auto___39800 < len__25865__auto___39799)){
args39793.push((arguments[i__25866__auto___39800]));

var G__39801 = (i__25866__auto___39800 + (1));
i__25866__auto___39800 = G__39801;
continue;
} else {
}
break;
}

var G__39795 = args39793.length;
switch (G__39795) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39793.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39796 = (function (f,blockable,meta39797){
this.f = f;
this.blockable = blockable;
this.meta39797 = meta39797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39798,meta39797__$1){
var self__ = this;
var _39798__$1 = this;
return (new cljs.core.async.t_cljs$core$async39796(self__.f,self__.blockable,meta39797__$1));
});

cljs.core.async.t_cljs$core$async39796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39798){
var self__ = this;
var _39798__$1 = this;
return self__.meta39797;
});

cljs.core.async.t_cljs$core$async39796.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39796.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39797","meta39797",-1816453768,null)], null);
});

cljs.core.async.t_cljs$core$async39796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39796";

cljs.core.async.t_cljs$core$async39796.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async39796");
});

cljs.core.async.__GT_t_cljs$core$async39796 = (function cljs$core$async$__GT_t_cljs$core$async39796(f__$1,blockable__$1,meta39797){
return (new cljs.core.async.t_cljs$core$async39796(f__$1,blockable__$1,meta39797));
});

}

return (new cljs.core.async.t_cljs$core$async39796(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args39805 = [];
var len__25865__auto___39808 = arguments.length;
var i__25866__auto___39809 = (0);
while(true){
if((i__25866__auto___39809 < len__25865__auto___39808)){
args39805.push((arguments[i__25866__auto___39809]));

var G__39810 = (i__25866__auto___39809 + (1));
i__25866__auto___39809 = G__39810;
continue;
} else {
}
break;
}

var G__39807 = args39805.length;
switch (G__39807) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39805.length)].join('')));

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
var args39812 = [];
var len__25865__auto___39815 = arguments.length;
var i__25866__auto___39816 = (0);
while(true){
if((i__25866__auto___39816 < len__25865__auto___39815)){
args39812.push((arguments[i__25866__auto___39816]));

var G__39817 = (i__25866__auto___39816 + (1));
i__25866__auto___39816 = G__39817;
continue;
} else {
}
break;
}

var G__39814 = args39812.length;
switch (G__39814) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39812.length)].join('')));

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
var args39819 = [];
var len__25865__auto___39822 = arguments.length;
var i__25866__auto___39823 = (0);
while(true){
if((i__25866__auto___39823 < len__25865__auto___39822)){
args39819.push((arguments[i__25866__auto___39823]));

var G__39824 = (i__25866__auto___39823 + (1));
i__25866__auto___39823 = G__39824;
continue;
} else {
}
break;
}

var G__39821 = args39819.length;
switch (G__39821) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39819.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39826 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39826);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39826,ret){
return (function (){
return fn1.call(null,val_39826);
});})(val_39826,ret))
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
var args39827 = [];
var len__25865__auto___39830 = arguments.length;
var i__25866__auto___39831 = (0);
while(true){
if((i__25866__auto___39831 < len__25865__auto___39830)){
args39827.push((arguments[i__25866__auto___39831]));

var G__39832 = (i__25866__auto___39831 + (1));
i__25866__auto___39831 = G__39832;
continue;
} else {
}
break;
}

var G__39829 = args39827.length;
switch (G__39829) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39827.length)].join('')));

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
var n__25705__auto___39834 = n;
var x_39835 = (0);
while(true){
if((x_39835 < n__25705__auto___39834)){
(a[x_39835] = (0));

var G__39836 = (x_39835 + (1));
x_39835 = G__39836;
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

var G__39837 = (i + (1));
i = G__39837;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39841 = (function (alt_flag,flag,meta39842){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta39842 = meta39842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39843,meta39842__$1){
var self__ = this;
var _39843__$1 = this;
return (new cljs.core.async.t_cljs$core$async39841(self__.alt_flag,self__.flag,meta39842__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39843){
var self__ = this;
var _39843__$1 = this;
return self__.meta39842;
});})(flag))
;

cljs.core.async.t_cljs$core$async39841.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39841.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39841.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39842","meta39842",779687193,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39841";

cljs.core.async.t_cljs$core$async39841.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async39841");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39841 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39841(alt_flag__$1,flag__$1,meta39842){
return (new cljs.core.async.t_cljs$core$async39841(alt_flag__$1,flag__$1,meta39842));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39841(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39847 = (function (alt_handler,flag,cb,meta39848){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta39848 = meta39848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39849,meta39848__$1){
var self__ = this;
var _39849__$1 = this;
return (new cljs.core.async.t_cljs$core$async39847(self__.alt_handler,self__.flag,self__.cb,meta39848__$1));
});

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39849){
var self__ = this;
var _39849__$1 = this;
return self__.meta39848;
});

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39848","meta39848",-352703964,null)], null);
});

cljs.core.async.t_cljs$core$async39847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39847";

cljs.core.async.t_cljs$core$async39847.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async39847");
});

cljs.core.async.__GT_t_cljs$core$async39847 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39847(alt_handler__$1,flag__$1,cb__$1,meta39848){
return (new cljs.core.async.t_cljs$core$async39847(alt_handler__$1,flag__$1,cb__$1,meta39848));
});

}

return (new cljs.core.async.t_cljs$core$async39847(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39850_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39850_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39851_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39851_SHARP_,port], null));
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
var G__39852 = (i + (1));
i = G__39852;
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
var len__25865__auto___39858 = arguments.length;
var i__25866__auto___39859 = (0);
while(true){
if((i__25866__auto___39859 < len__25865__auto___39858)){
args__25872__auto__.push((arguments[i__25866__auto___39859]));

var G__39860 = (i__25866__auto___39859 + (1));
i__25866__auto___39859 = G__39860;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39855){
var map__39856 = p__39855;
var map__39856__$1 = ((((!((map__39856 == null)))?((((map__39856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39856):map__39856);
var opts = map__39856__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39853){
var G__39854 = cljs.core.first.call(null,seq39853);
var seq39853__$1 = cljs.core.next.call(null,seq39853);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39854,seq39853__$1);
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
var args39861 = [];
var len__25865__auto___39911 = arguments.length;
var i__25866__auto___39912 = (0);
while(true){
if((i__25866__auto___39912 < len__25865__auto___39911)){
args39861.push((arguments[i__25866__auto___39912]));

var G__39913 = (i__25866__auto___39912 + (1));
i__25866__auto___39912 = G__39913;
continue;
} else {
}
break;
}

var G__39863 = args39861.length;
switch (G__39863) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39861.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28608__auto___39915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___39915){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___39915){
return (function (state_39887){
var state_val_39888 = (state_39887[(1)]);
if((state_val_39888 === (7))){
var inst_39883 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39889_39916 = state_39887__$1;
(statearr_39889_39916[(2)] = inst_39883);

(statearr_39889_39916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (1))){
var state_39887__$1 = state_39887;
var statearr_39890_39917 = state_39887__$1;
(statearr_39890_39917[(2)] = null);

(statearr_39890_39917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (4))){
var inst_39866 = (state_39887[(7)]);
var inst_39866__$1 = (state_39887[(2)]);
var inst_39867 = (inst_39866__$1 == null);
var state_39887__$1 = (function (){var statearr_39891 = state_39887;
(statearr_39891[(7)] = inst_39866__$1);

return statearr_39891;
})();
if(cljs.core.truth_(inst_39867)){
var statearr_39892_39918 = state_39887__$1;
(statearr_39892_39918[(1)] = (5));

} else {
var statearr_39893_39919 = state_39887__$1;
(statearr_39893_39919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (13))){
var state_39887__$1 = state_39887;
var statearr_39894_39920 = state_39887__$1;
(statearr_39894_39920[(2)] = null);

(statearr_39894_39920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (6))){
var inst_39866 = (state_39887[(7)]);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39887__$1,(11),to,inst_39866);
} else {
if((state_val_39888 === (3))){
var inst_39885 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39887__$1,inst_39885);
} else {
if((state_val_39888 === (12))){
var state_39887__$1 = state_39887;
var statearr_39895_39921 = state_39887__$1;
(statearr_39895_39921[(2)] = null);

(statearr_39895_39921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (2))){
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39887__$1,(4),from);
} else {
if((state_val_39888 === (11))){
var inst_39876 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39876)){
var statearr_39896_39922 = state_39887__$1;
(statearr_39896_39922[(1)] = (12));

} else {
var statearr_39897_39923 = state_39887__$1;
(statearr_39897_39923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (9))){
var state_39887__$1 = state_39887;
var statearr_39898_39924 = state_39887__$1;
(statearr_39898_39924[(2)] = null);

(statearr_39898_39924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (5))){
var state_39887__$1 = state_39887;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39899_39925 = state_39887__$1;
(statearr_39899_39925[(1)] = (8));

} else {
var statearr_39900_39926 = state_39887__$1;
(statearr_39900_39926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (14))){
var inst_39881 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39901_39927 = state_39887__$1;
(statearr_39901_39927[(2)] = inst_39881);

(statearr_39901_39927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (10))){
var inst_39873 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39902_39928 = state_39887__$1;
(statearr_39902_39928[(2)] = inst_39873);

(statearr_39902_39928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (8))){
var inst_39870 = cljs.core.async.close_BANG_.call(null,to);
var state_39887__$1 = state_39887;
var statearr_39903_39929 = state_39887__$1;
(statearr_39903_39929[(2)] = inst_39870);

(statearr_39903_39929[(1)] = (10));


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
});})(c__28608__auto___39915))
;
return ((function (switch__28496__auto__,c__28608__auto___39915){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_39907 = [null,null,null,null,null,null,null,null];
(statearr_39907[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_39907[(1)] = (1));

return statearr_39907;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_39887){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_39887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e39908){if((e39908 instanceof Object)){
var ex__28500__auto__ = e39908;
var statearr_39909_39930 = state_39887;
(statearr_39909_39930[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39931 = state_39887;
state_39887 = G__39931;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_39887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_39887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___39915))
})();
var state__28610__auto__ = (function (){var statearr_39910 = f__28609__auto__.call(null);
(statearr_39910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___39915);

return statearr_39910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___39915))
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
return (function (p__40119){
var vec__40120 = p__40119;
var v = cljs.core.nth.call(null,vec__40120,(0),null);
var p = cljs.core.nth.call(null,vec__40120,(1),null);
var job = vec__40120;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28608__auto___40306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___40306,res,vec__40120,v,p,job,jobs,results){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___40306,res,vec__40120,v,p,job,jobs,results){
return (function (state_40127){
var state_val_40128 = (state_40127[(1)]);
if((state_val_40128 === (1))){
var state_40127__$1 = state_40127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40127__$1,(2),res,v);
} else {
if((state_val_40128 === (2))){
var inst_40124 = (state_40127[(2)]);
var inst_40125 = cljs.core.async.close_BANG_.call(null,res);
var state_40127__$1 = (function (){var statearr_40129 = state_40127;
(statearr_40129[(7)] = inst_40124);

return statearr_40129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40127__$1,inst_40125);
} else {
return null;
}
}
});})(c__28608__auto___40306,res,vec__40120,v,p,job,jobs,results))
;
return ((function (switch__28496__auto__,c__28608__auto___40306,res,vec__40120,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_40133 = [null,null,null,null,null,null,null,null];
(statearr_40133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_40133[(1)] = (1));

return statearr_40133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_40127){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_40127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e40134){if((e40134 instanceof Object)){
var ex__28500__auto__ = e40134;
var statearr_40135_40307 = state_40127;
(statearr_40135_40307[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40308 = state_40127;
state_40127 = G__40308;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_40127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_40127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___40306,res,vec__40120,v,p,job,jobs,results))
})();
var state__28610__auto__ = (function (){var statearr_40136 = f__28609__auto__.call(null);
(statearr_40136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___40306);

return statearr_40136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___40306,res,vec__40120,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40137){
var vec__40138 = p__40137;
var v = cljs.core.nth.call(null,vec__40138,(0),null);
var p = cljs.core.nth.call(null,vec__40138,(1),null);
var job = vec__40138;
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
var n__25705__auto___40309 = n;
var __40310 = (0);
while(true){
if((__40310 < n__25705__auto___40309)){
var G__40141_40311 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40141_40311) {
case "compute":
var c__28608__auto___40313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40310,c__28608__auto___40313,G__40141_40311,n__25705__auto___40309,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (__40310,c__28608__auto___40313,G__40141_40311,n__25705__auto___40309,jobs,results,process,async){
return (function (state_40154){
var state_val_40155 = (state_40154[(1)]);
if((state_val_40155 === (1))){
var state_40154__$1 = state_40154;
var statearr_40156_40314 = state_40154__$1;
(statearr_40156_40314[(2)] = null);

(statearr_40156_40314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40155 === (2))){
var state_40154__$1 = state_40154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40154__$1,(4),jobs);
} else {
if((state_val_40155 === (3))){
var inst_40152 = (state_40154[(2)]);
var state_40154__$1 = state_40154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40154__$1,inst_40152);
} else {
if((state_val_40155 === (4))){
var inst_40144 = (state_40154[(2)]);
var inst_40145 = process.call(null,inst_40144);
var state_40154__$1 = state_40154;
if(cljs.core.truth_(inst_40145)){
var statearr_40157_40315 = state_40154__$1;
(statearr_40157_40315[(1)] = (5));

} else {
var statearr_40158_40316 = state_40154__$1;
(statearr_40158_40316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40155 === (5))){
var state_40154__$1 = state_40154;
var statearr_40159_40317 = state_40154__$1;
(statearr_40159_40317[(2)] = null);

(statearr_40159_40317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40155 === (6))){
var state_40154__$1 = state_40154;
var statearr_40160_40318 = state_40154__$1;
(statearr_40160_40318[(2)] = null);

(statearr_40160_40318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40155 === (7))){
var inst_40150 = (state_40154[(2)]);
var state_40154__$1 = state_40154;
var statearr_40161_40319 = state_40154__$1;
(statearr_40161_40319[(2)] = inst_40150);

(statearr_40161_40319[(1)] = (3));


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
});})(__40310,c__28608__auto___40313,G__40141_40311,n__25705__auto___40309,jobs,results,process,async))
;
return ((function (__40310,switch__28496__auto__,c__28608__auto___40313,G__40141_40311,n__25705__auto___40309,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_40165 = [null,null,null,null,null,null,null];
(statearr_40165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_40165[(1)] = (1));

return statearr_40165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_40154){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_40154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e40166){if((e40166 instanceof Object)){
var ex__28500__auto__ = e40166;
var statearr_40167_40320 = state_40154;
(statearr_40167_40320[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40321 = state_40154;
state_40154 = G__40321;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_40154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_40154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(__40310,switch__28496__auto__,c__28608__auto___40313,G__40141_40311,n__25705__auto___40309,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_40168 = f__28609__auto__.call(null);
(statearr_40168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___40313);

return statearr_40168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(__40310,c__28608__auto___40313,G__40141_40311,n__25705__auto___40309,jobs,results,process,async))
);


break;
case "async":
var c__28608__auto___40322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40310,c__28608__auto___40322,G__40141_40311,n__25705__auto___40309,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (__40310,c__28608__auto___40322,G__40141_40311,n__25705__auto___40309,jobs,results,process,async){
return (function (state_40181){
var state_val_40182 = (state_40181[(1)]);
if((state_val_40182 === (1))){
var state_40181__$1 = state_40181;
var statearr_40183_40323 = state_40181__$1;
(statearr_40183_40323[(2)] = null);

(statearr_40183_40323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40182 === (2))){
var state_40181__$1 = state_40181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40181__$1,(4),jobs);
} else {
if((state_val_40182 === (3))){
var inst_40179 = (state_40181[(2)]);
var state_40181__$1 = state_40181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40181__$1,inst_40179);
} else {
if((state_val_40182 === (4))){
var inst_40171 = (state_40181[(2)]);
var inst_40172 = async.call(null,inst_40171);
var state_40181__$1 = state_40181;
if(cljs.core.truth_(inst_40172)){
var statearr_40184_40324 = state_40181__$1;
(statearr_40184_40324[(1)] = (5));

} else {
var statearr_40185_40325 = state_40181__$1;
(statearr_40185_40325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40182 === (5))){
var state_40181__$1 = state_40181;
var statearr_40186_40326 = state_40181__$1;
(statearr_40186_40326[(2)] = null);

(statearr_40186_40326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40182 === (6))){
var state_40181__$1 = state_40181;
var statearr_40187_40327 = state_40181__$1;
(statearr_40187_40327[(2)] = null);

(statearr_40187_40327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40182 === (7))){
var inst_40177 = (state_40181[(2)]);
var state_40181__$1 = state_40181;
var statearr_40188_40328 = state_40181__$1;
(statearr_40188_40328[(2)] = inst_40177);

(statearr_40188_40328[(1)] = (3));


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
});})(__40310,c__28608__auto___40322,G__40141_40311,n__25705__auto___40309,jobs,results,process,async))
;
return ((function (__40310,switch__28496__auto__,c__28608__auto___40322,G__40141_40311,n__25705__auto___40309,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_40192 = [null,null,null,null,null,null,null];
(statearr_40192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_40192[(1)] = (1));

return statearr_40192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_40181){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_40181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e40193){if((e40193 instanceof Object)){
var ex__28500__auto__ = e40193;
var statearr_40194_40329 = state_40181;
(statearr_40194_40329[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40330 = state_40181;
state_40181 = G__40330;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_40181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_40181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(__40310,switch__28496__auto__,c__28608__auto___40322,G__40141_40311,n__25705__auto___40309,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_40195 = f__28609__auto__.call(null);
(statearr_40195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___40322);

return statearr_40195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(__40310,c__28608__auto___40322,G__40141_40311,n__25705__auto___40309,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40331 = (__40310 + (1));
__40310 = G__40331;
continue;
} else {
}
break;
}

var c__28608__auto___40332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___40332,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___40332,jobs,results,process,async){
return (function (state_40217){
var state_val_40218 = (state_40217[(1)]);
if((state_val_40218 === (1))){
var state_40217__$1 = state_40217;
var statearr_40219_40333 = state_40217__$1;
(statearr_40219_40333[(2)] = null);

(statearr_40219_40333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (2))){
var state_40217__$1 = state_40217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40217__$1,(4),from);
} else {
if((state_val_40218 === (3))){
var inst_40215 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40217__$1,inst_40215);
} else {
if((state_val_40218 === (4))){
var inst_40198 = (state_40217[(7)]);
var inst_40198__$1 = (state_40217[(2)]);
var inst_40199 = (inst_40198__$1 == null);
var state_40217__$1 = (function (){var statearr_40220 = state_40217;
(statearr_40220[(7)] = inst_40198__$1);

return statearr_40220;
})();
if(cljs.core.truth_(inst_40199)){
var statearr_40221_40334 = state_40217__$1;
(statearr_40221_40334[(1)] = (5));

} else {
var statearr_40222_40335 = state_40217__$1;
(statearr_40222_40335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (5))){
var inst_40201 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40217__$1 = state_40217;
var statearr_40223_40336 = state_40217__$1;
(statearr_40223_40336[(2)] = inst_40201);

(statearr_40223_40336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (6))){
var inst_40203 = (state_40217[(8)]);
var inst_40198 = (state_40217[(7)]);
var inst_40203__$1 = cljs.core.async.chan.call(null,(1));
var inst_40204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40205 = [inst_40198,inst_40203__$1];
var inst_40206 = (new cljs.core.PersistentVector(null,2,(5),inst_40204,inst_40205,null));
var state_40217__$1 = (function (){var statearr_40224 = state_40217;
(statearr_40224[(8)] = inst_40203__$1);

return statearr_40224;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40217__$1,(8),jobs,inst_40206);
} else {
if((state_val_40218 === (7))){
var inst_40213 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
var statearr_40225_40337 = state_40217__$1;
(statearr_40225_40337[(2)] = inst_40213);

(statearr_40225_40337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (8))){
var inst_40203 = (state_40217[(8)]);
var inst_40208 = (state_40217[(2)]);
var state_40217__$1 = (function (){var statearr_40226 = state_40217;
(statearr_40226[(9)] = inst_40208);

return statearr_40226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40217__$1,(9),results,inst_40203);
} else {
if((state_val_40218 === (9))){
var inst_40210 = (state_40217[(2)]);
var state_40217__$1 = (function (){var statearr_40227 = state_40217;
(statearr_40227[(10)] = inst_40210);

return statearr_40227;
})();
var statearr_40228_40338 = state_40217__$1;
(statearr_40228_40338[(2)] = null);

(statearr_40228_40338[(1)] = (2));


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
});})(c__28608__auto___40332,jobs,results,process,async))
;
return ((function (switch__28496__auto__,c__28608__auto___40332,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0 = (function (){
var statearr_40232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_40232[(1)] = (1));

return statearr_40232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_40217){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_40217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e40233){if((e40233 instanceof Object)){
var ex__28500__auto__ = e40233;
var statearr_40234_40339 = state_40217;
(statearr_40234_40339[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40340 = state_40217;
state_40217 = G__40340;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_40217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_40217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___40332,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_40235 = f__28609__auto__.call(null);
(statearr_40235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___40332);

return statearr_40235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___40332,jobs,results,process,async))
);


var c__28608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto__,jobs,results,process,async){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto__,jobs,results,process,async){
return (function (state_40273){
var state_val_40274 = (state_40273[(1)]);
if((state_val_40274 === (7))){
var inst_40269 = (state_40273[(2)]);
var state_40273__$1 = state_40273;
var statearr_40275_40341 = state_40273__$1;
(statearr_40275_40341[(2)] = inst_40269);

(statearr_40275_40341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (20))){
var state_40273__$1 = state_40273;
var statearr_40276_40342 = state_40273__$1;
(statearr_40276_40342[(2)] = null);

(statearr_40276_40342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (1))){
var state_40273__$1 = state_40273;
var statearr_40277_40343 = state_40273__$1;
(statearr_40277_40343[(2)] = null);

(statearr_40277_40343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (4))){
var inst_40238 = (state_40273[(7)]);
var inst_40238__$1 = (state_40273[(2)]);
var inst_40239 = (inst_40238__$1 == null);
var state_40273__$1 = (function (){var statearr_40278 = state_40273;
(statearr_40278[(7)] = inst_40238__$1);

return statearr_40278;
})();
if(cljs.core.truth_(inst_40239)){
var statearr_40279_40344 = state_40273__$1;
(statearr_40279_40344[(1)] = (5));

} else {
var statearr_40280_40345 = state_40273__$1;
(statearr_40280_40345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (15))){
var inst_40251 = (state_40273[(8)]);
var state_40273__$1 = state_40273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40273__$1,(18),to,inst_40251);
} else {
if((state_val_40274 === (21))){
var inst_40264 = (state_40273[(2)]);
var state_40273__$1 = state_40273;
var statearr_40281_40346 = state_40273__$1;
(statearr_40281_40346[(2)] = inst_40264);

(statearr_40281_40346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (13))){
var inst_40266 = (state_40273[(2)]);
var state_40273__$1 = (function (){var statearr_40282 = state_40273;
(statearr_40282[(9)] = inst_40266);

return statearr_40282;
})();
var statearr_40283_40347 = state_40273__$1;
(statearr_40283_40347[(2)] = null);

(statearr_40283_40347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (6))){
var inst_40238 = (state_40273[(7)]);
var state_40273__$1 = state_40273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40273__$1,(11),inst_40238);
} else {
if((state_val_40274 === (17))){
var inst_40259 = (state_40273[(2)]);
var state_40273__$1 = state_40273;
if(cljs.core.truth_(inst_40259)){
var statearr_40284_40348 = state_40273__$1;
(statearr_40284_40348[(1)] = (19));

} else {
var statearr_40285_40349 = state_40273__$1;
(statearr_40285_40349[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (3))){
var inst_40271 = (state_40273[(2)]);
var state_40273__$1 = state_40273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40273__$1,inst_40271);
} else {
if((state_val_40274 === (12))){
var inst_40248 = (state_40273[(10)]);
var state_40273__$1 = state_40273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40273__$1,(14),inst_40248);
} else {
if((state_val_40274 === (2))){
var state_40273__$1 = state_40273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40273__$1,(4),results);
} else {
if((state_val_40274 === (19))){
var state_40273__$1 = state_40273;
var statearr_40286_40350 = state_40273__$1;
(statearr_40286_40350[(2)] = null);

(statearr_40286_40350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (11))){
var inst_40248 = (state_40273[(2)]);
var state_40273__$1 = (function (){var statearr_40287 = state_40273;
(statearr_40287[(10)] = inst_40248);

return statearr_40287;
})();
var statearr_40288_40351 = state_40273__$1;
(statearr_40288_40351[(2)] = null);

(statearr_40288_40351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (9))){
var state_40273__$1 = state_40273;
var statearr_40289_40352 = state_40273__$1;
(statearr_40289_40352[(2)] = null);

(statearr_40289_40352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (5))){
var state_40273__$1 = state_40273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40290_40353 = state_40273__$1;
(statearr_40290_40353[(1)] = (8));

} else {
var statearr_40291_40354 = state_40273__$1;
(statearr_40291_40354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (14))){
var inst_40253 = (state_40273[(11)]);
var inst_40251 = (state_40273[(8)]);
var inst_40251__$1 = (state_40273[(2)]);
var inst_40252 = (inst_40251__$1 == null);
var inst_40253__$1 = cljs.core.not.call(null,inst_40252);
var state_40273__$1 = (function (){var statearr_40292 = state_40273;
(statearr_40292[(11)] = inst_40253__$1);

(statearr_40292[(8)] = inst_40251__$1);

return statearr_40292;
})();
if(inst_40253__$1){
var statearr_40293_40355 = state_40273__$1;
(statearr_40293_40355[(1)] = (15));

} else {
var statearr_40294_40356 = state_40273__$1;
(statearr_40294_40356[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (16))){
var inst_40253 = (state_40273[(11)]);
var state_40273__$1 = state_40273;
var statearr_40295_40357 = state_40273__$1;
(statearr_40295_40357[(2)] = inst_40253);

(statearr_40295_40357[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (10))){
var inst_40245 = (state_40273[(2)]);
var state_40273__$1 = state_40273;
var statearr_40296_40358 = state_40273__$1;
(statearr_40296_40358[(2)] = inst_40245);

(statearr_40296_40358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (18))){
var inst_40256 = (state_40273[(2)]);
var state_40273__$1 = state_40273;
var statearr_40297_40359 = state_40273__$1;
(statearr_40297_40359[(2)] = inst_40256);

(statearr_40297_40359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40274 === (8))){
var inst_40242 = cljs.core.async.close_BANG_.call(null,to);
var state_40273__$1 = state_40273;
var statearr_40298_40360 = state_40273__$1;
(statearr_40298_40360[(2)] = inst_40242);

(statearr_40298_40360[(1)] = (10));


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
var statearr_40302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40302[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__);

(statearr_40302[(1)] = (1));

return statearr_40302;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1 = (function (state_40273){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_40273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e40303){if((e40303 instanceof Object)){
var ex__28500__auto__ = e40303;
var statearr_40304_40361 = state_40273;
(statearr_40304_40361[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40362 = state_40273;
state_40273 = G__40362;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__ = function(state_40273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1.call(this,state_40273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__,jobs,results,process,async))
})();
var state__28610__auto__ = (function (){var statearr_40305 = f__28609__auto__.call(null);
(statearr_40305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_40305;
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
var args40363 = [];
var len__25865__auto___40366 = arguments.length;
var i__25866__auto___40367 = (0);
while(true){
if((i__25866__auto___40367 < len__25865__auto___40366)){
args40363.push((arguments[i__25866__auto___40367]));

var G__40368 = (i__25866__auto___40367 + (1));
i__25866__auto___40367 = G__40368;
continue;
} else {
}
break;
}

var G__40365 = args40363.length;
switch (G__40365) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40363.length)].join('')));

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
var args40370 = [];
var len__25865__auto___40373 = arguments.length;
var i__25866__auto___40374 = (0);
while(true){
if((i__25866__auto___40374 < len__25865__auto___40373)){
args40370.push((arguments[i__25866__auto___40374]));

var G__40375 = (i__25866__auto___40374 + (1));
i__25866__auto___40374 = G__40375;
continue;
} else {
}
break;
}

var G__40372 = args40370.length;
switch (G__40372) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40370.length)].join('')));

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
var args40377 = [];
var len__25865__auto___40430 = arguments.length;
var i__25866__auto___40431 = (0);
while(true){
if((i__25866__auto___40431 < len__25865__auto___40430)){
args40377.push((arguments[i__25866__auto___40431]));

var G__40432 = (i__25866__auto___40431 + (1));
i__25866__auto___40431 = G__40432;
continue;
} else {
}
break;
}

var G__40379 = args40377.length;
switch (G__40379) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40377.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28608__auto___40434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___40434,tc,fc){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___40434,tc,fc){
return (function (state_40405){
var state_val_40406 = (state_40405[(1)]);
if((state_val_40406 === (7))){
var inst_40401 = (state_40405[(2)]);
var state_40405__$1 = state_40405;
var statearr_40407_40435 = state_40405__$1;
(statearr_40407_40435[(2)] = inst_40401);

(statearr_40407_40435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (1))){
var state_40405__$1 = state_40405;
var statearr_40408_40436 = state_40405__$1;
(statearr_40408_40436[(2)] = null);

(statearr_40408_40436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (4))){
var inst_40382 = (state_40405[(7)]);
var inst_40382__$1 = (state_40405[(2)]);
var inst_40383 = (inst_40382__$1 == null);
var state_40405__$1 = (function (){var statearr_40409 = state_40405;
(statearr_40409[(7)] = inst_40382__$1);

return statearr_40409;
})();
if(cljs.core.truth_(inst_40383)){
var statearr_40410_40437 = state_40405__$1;
(statearr_40410_40437[(1)] = (5));

} else {
var statearr_40411_40438 = state_40405__$1;
(statearr_40411_40438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (13))){
var state_40405__$1 = state_40405;
var statearr_40412_40439 = state_40405__$1;
(statearr_40412_40439[(2)] = null);

(statearr_40412_40439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (6))){
var inst_40382 = (state_40405[(7)]);
var inst_40388 = p.call(null,inst_40382);
var state_40405__$1 = state_40405;
if(cljs.core.truth_(inst_40388)){
var statearr_40413_40440 = state_40405__$1;
(statearr_40413_40440[(1)] = (9));

} else {
var statearr_40414_40441 = state_40405__$1;
(statearr_40414_40441[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (3))){
var inst_40403 = (state_40405[(2)]);
var state_40405__$1 = state_40405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40405__$1,inst_40403);
} else {
if((state_val_40406 === (12))){
var state_40405__$1 = state_40405;
var statearr_40415_40442 = state_40405__$1;
(statearr_40415_40442[(2)] = null);

(statearr_40415_40442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (2))){
var state_40405__$1 = state_40405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40405__$1,(4),ch);
} else {
if((state_val_40406 === (11))){
var inst_40382 = (state_40405[(7)]);
var inst_40392 = (state_40405[(2)]);
var state_40405__$1 = state_40405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40405__$1,(8),inst_40392,inst_40382);
} else {
if((state_val_40406 === (9))){
var state_40405__$1 = state_40405;
var statearr_40416_40443 = state_40405__$1;
(statearr_40416_40443[(2)] = tc);

(statearr_40416_40443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (5))){
var inst_40385 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40386 = cljs.core.async.close_BANG_.call(null,fc);
var state_40405__$1 = (function (){var statearr_40417 = state_40405;
(statearr_40417[(8)] = inst_40385);

return statearr_40417;
})();
var statearr_40418_40444 = state_40405__$1;
(statearr_40418_40444[(2)] = inst_40386);

(statearr_40418_40444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (14))){
var inst_40399 = (state_40405[(2)]);
var state_40405__$1 = state_40405;
var statearr_40419_40445 = state_40405__$1;
(statearr_40419_40445[(2)] = inst_40399);

(statearr_40419_40445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (10))){
var state_40405__$1 = state_40405;
var statearr_40420_40446 = state_40405__$1;
(statearr_40420_40446[(2)] = fc);

(statearr_40420_40446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40406 === (8))){
var inst_40394 = (state_40405[(2)]);
var state_40405__$1 = state_40405;
if(cljs.core.truth_(inst_40394)){
var statearr_40421_40447 = state_40405__$1;
(statearr_40421_40447[(1)] = (12));

} else {
var statearr_40422_40448 = state_40405__$1;
(statearr_40422_40448[(1)] = (13));

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
});})(c__28608__auto___40434,tc,fc))
;
return ((function (switch__28496__auto__,c__28608__auto___40434,tc,fc){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_40426 = [null,null,null,null,null,null,null,null,null];
(statearr_40426[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_40426[(1)] = (1));

return statearr_40426;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_40405){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_40405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e40427){if((e40427 instanceof Object)){
var ex__28500__auto__ = e40427;
var statearr_40428_40449 = state_40405;
(statearr_40428_40449[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40450 = state_40405;
state_40405 = G__40450;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_40405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_40405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___40434,tc,fc))
})();
var state__28610__auto__ = (function (){var statearr_40429 = f__28609__auto__.call(null);
(statearr_40429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___40434);

return statearr_40429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___40434,tc,fc))
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
return (function (state_40514){
var state_val_40515 = (state_40514[(1)]);
if((state_val_40515 === (7))){
var inst_40510 = (state_40514[(2)]);
var state_40514__$1 = state_40514;
var statearr_40516_40537 = state_40514__$1;
(statearr_40516_40537[(2)] = inst_40510);

(statearr_40516_40537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (1))){
var inst_40494 = init;
var state_40514__$1 = (function (){var statearr_40517 = state_40514;
(statearr_40517[(7)] = inst_40494);

return statearr_40517;
})();
var statearr_40518_40538 = state_40514__$1;
(statearr_40518_40538[(2)] = null);

(statearr_40518_40538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (4))){
var inst_40497 = (state_40514[(8)]);
var inst_40497__$1 = (state_40514[(2)]);
var inst_40498 = (inst_40497__$1 == null);
var state_40514__$1 = (function (){var statearr_40519 = state_40514;
(statearr_40519[(8)] = inst_40497__$1);

return statearr_40519;
})();
if(cljs.core.truth_(inst_40498)){
var statearr_40520_40539 = state_40514__$1;
(statearr_40520_40539[(1)] = (5));

} else {
var statearr_40521_40540 = state_40514__$1;
(statearr_40521_40540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (6))){
var inst_40494 = (state_40514[(7)]);
var inst_40497 = (state_40514[(8)]);
var inst_40501 = (state_40514[(9)]);
var inst_40501__$1 = f.call(null,inst_40494,inst_40497);
var inst_40502 = cljs.core.reduced_QMARK_.call(null,inst_40501__$1);
var state_40514__$1 = (function (){var statearr_40522 = state_40514;
(statearr_40522[(9)] = inst_40501__$1);

return statearr_40522;
})();
if(inst_40502){
var statearr_40523_40541 = state_40514__$1;
(statearr_40523_40541[(1)] = (8));

} else {
var statearr_40524_40542 = state_40514__$1;
(statearr_40524_40542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (3))){
var inst_40512 = (state_40514[(2)]);
var state_40514__$1 = state_40514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40514__$1,inst_40512);
} else {
if((state_val_40515 === (2))){
var state_40514__$1 = state_40514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40514__$1,(4),ch);
} else {
if((state_val_40515 === (9))){
var inst_40501 = (state_40514[(9)]);
var inst_40494 = inst_40501;
var state_40514__$1 = (function (){var statearr_40525 = state_40514;
(statearr_40525[(7)] = inst_40494);

return statearr_40525;
})();
var statearr_40526_40543 = state_40514__$1;
(statearr_40526_40543[(2)] = null);

(statearr_40526_40543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (5))){
var inst_40494 = (state_40514[(7)]);
var state_40514__$1 = state_40514;
var statearr_40527_40544 = state_40514__$1;
(statearr_40527_40544[(2)] = inst_40494);

(statearr_40527_40544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (10))){
var inst_40508 = (state_40514[(2)]);
var state_40514__$1 = state_40514;
var statearr_40528_40545 = state_40514__$1;
(statearr_40528_40545[(2)] = inst_40508);

(statearr_40528_40545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (8))){
var inst_40501 = (state_40514[(9)]);
var inst_40504 = cljs.core.deref.call(null,inst_40501);
var state_40514__$1 = state_40514;
var statearr_40529_40546 = state_40514__$1;
(statearr_40529_40546[(2)] = inst_40504);

(statearr_40529_40546[(1)] = (10));


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
var statearr_40533 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40533[(0)] = cljs$core$async$reduce_$_state_machine__28497__auto__);

(statearr_40533[(1)] = (1));

return statearr_40533;
});
var cljs$core$async$reduce_$_state_machine__28497__auto____1 = (function (state_40514){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_40514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e40534){if((e40534 instanceof Object)){
var ex__28500__auto__ = e40534;
var statearr_40535_40547 = state_40514;
(statearr_40535_40547[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40548 = state_40514;
state_40514 = G__40548;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28497__auto__ = function(state_40514){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28497__auto____1.call(this,state_40514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28497__auto____0;
cljs$core$async$reduce_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28497__auto____1;
return cljs$core$async$reduce_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_40536 = f__28609__auto__.call(null);
(statearr_40536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_40536;
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
var args40549 = [];
var len__25865__auto___40601 = arguments.length;
var i__25866__auto___40602 = (0);
while(true){
if((i__25866__auto___40602 < len__25865__auto___40601)){
args40549.push((arguments[i__25866__auto___40602]));

var G__40603 = (i__25866__auto___40602 + (1));
i__25866__auto___40602 = G__40603;
continue;
} else {
}
break;
}

var G__40551 = args40549.length;
switch (G__40551) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40549.length)].join('')));

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
return (function (state_40576){
var state_val_40577 = (state_40576[(1)]);
if((state_val_40577 === (7))){
var inst_40558 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
var statearr_40578_40605 = state_40576__$1;
(statearr_40578_40605[(2)] = inst_40558);

(statearr_40578_40605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (1))){
var inst_40552 = cljs.core.seq.call(null,coll);
var inst_40553 = inst_40552;
var state_40576__$1 = (function (){var statearr_40579 = state_40576;
(statearr_40579[(7)] = inst_40553);

return statearr_40579;
})();
var statearr_40580_40606 = state_40576__$1;
(statearr_40580_40606[(2)] = null);

(statearr_40580_40606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (4))){
var inst_40553 = (state_40576[(7)]);
var inst_40556 = cljs.core.first.call(null,inst_40553);
var state_40576__$1 = state_40576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40576__$1,(7),ch,inst_40556);
} else {
if((state_val_40577 === (13))){
var inst_40570 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
var statearr_40581_40607 = state_40576__$1;
(statearr_40581_40607[(2)] = inst_40570);

(statearr_40581_40607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (6))){
var inst_40561 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
if(cljs.core.truth_(inst_40561)){
var statearr_40582_40608 = state_40576__$1;
(statearr_40582_40608[(1)] = (8));

} else {
var statearr_40583_40609 = state_40576__$1;
(statearr_40583_40609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (3))){
var inst_40574 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40576__$1,inst_40574);
} else {
if((state_val_40577 === (12))){
var state_40576__$1 = state_40576;
var statearr_40584_40610 = state_40576__$1;
(statearr_40584_40610[(2)] = null);

(statearr_40584_40610[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (2))){
var inst_40553 = (state_40576[(7)]);
var state_40576__$1 = state_40576;
if(cljs.core.truth_(inst_40553)){
var statearr_40585_40611 = state_40576__$1;
(statearr_40585_40611[(1)] = (4));

} else {
var statearr_40586_40612 = state_40576__$1;
(statearr_40586_40612[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (11))){
var inst_40567 = cljs.core.async.close_BANG_.call(null,ch);
var state_40576__$1 = state_40576;
var statearr_40587_40613 = state_40576__$1;
(statearr_40587_40613[(2)] = inst_40567);

(statearr_40587_40613[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (9))){
var state_40576__$1 = state_40576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40588_40614 = state_40576__$1;
(statearr_40588_40614[(1)] = (11));

} else {
var statearr_40589_40615 = state_40576__$1;
(statearr_40589_40615[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (5))){
var inst_40553 = (state_40576[(7)]);
var state_40576__$1 = state_40576;
var statearr_40590_40616 = state_40576__$1;
(statearr_40590_40616[(2)] = inst_40553);

(statearr_40590_40616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (10))){
var inst_40572 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
var statearr_40591_40617 = state_40576__$1;
(statearr_40591_40617[(2)] = inst_40572);

(statearr_40591_40617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (8))){
var inst_40553 = (state_40576[(7)]);
var inst_40563 = cljs.core.next.call(null,inst_40553);
var inst_40553__$1 = inst_40563;
var state_40576__$1 = (function (){var statearr_40592 = state_40576;
(statearr_40592[(7)] = inst_40553__$1);

return statearr_40592;
})();
var statearr_40593_40618 = state_40576__$1;
(statearr_40593_40618[(2)] = null);

(statearr_40593_40618[(1)] = (2));


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
var statearr_40597 = [null,null,null,null,null,null,null,null];
(statearr_40597[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_40597[(1)] = (1));

return statearr_40597;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_40576){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_40576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e40598){if((e40598 instanceof Object)){
var ex__28500__auto__ = e40598;
var statearr_40599_40619 = state_40576;
(statearr_40599_40619[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40620 = state_40576;
state_40576 = G__40620;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_40576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_40576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_40600 = f__28609__auto__.call(null);
(statearr_40600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_40600;
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
if(typeof cljs.core.async.t_cljs$core$async40846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40846 = (function (mult,ch,cs,meta40847){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta40847 = meta40847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40848,meta40847__$1){
var self__ = this;
var _40848__$1 = this;
return (new cljs.core.async.t_cljs$core$async40846(self__.mult,self__.ch,self__.cs,meta40847__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40848){
var self__ = this;
var _40848__$1 = this;
return self__.meta40847;
});})(cs))
;

cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40846.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40846.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40847","meta40847",2100191908,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40846";

cljs.core.async.t_cljs$core$async40846.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async40846");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40846 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40846(mult__$1,ch__$1,cs__$1,meta40847){
return (new cljs.core.async.t_cljs$core$async40846(mult__$1,ch__$1,cs__$1,meta40847));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40846(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28608__auto___41071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___41071,cs,m,dchan,dctr,done){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___41071,cs,m,dchan,dctr,done){
return (function (state_40983){
var state_val_40984 = (state_40983[(1)]);
if((state_val_40984 === (7))){
var inst_40979 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_40985_41072 = state_40983__$1;
(statearr_40985_41072[(2)] = inst_40979);

(statearr_40985_41072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (20))){
var inst_40882 = (state_40983[(7)]);
var inst_40894 = cljs.core.first.call(null,inst_40882);
var inst_40895 = cljs.core.nth.call(null,inst_40894,(0),null);
var inst_40896 = cljs.core.nth.call(null,inst_40894,(1),null);
var state_40983__$1 = (function (){var statearr_40986 = state_40983;
(statearr_40986[(8)] = inst_40895);

return statearr_40986;
})();
if(cljs.core.truth_(inst_40896)){
var statearr_40987_41073 = state_40983__$1;
(statearr_40987_41073[(1)] = (22));

} else {
var statearr_40988_41074 = state_40983__$1;
(statearr_40988_41074[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (27))){
var inst_40926 = (state_40983[(9)]);
var inst_40851 = (state_40983[(10)]);
var inst_40924 = (state_40983[(11)]);
var inst_40931 = (state_40983[(12)]);
var inst_40931__$1 = cljs.core._nth.call(null,inst_40924,inst_40926);
var inst_40932 = cljs.core.async.put_BANG_.call(null,inst_40931__$1,inst_40851,done);
var state_40983__$1 = (function (){var statearr_40989 = state_40983;
(statearr_40989[(12)] = inst_40931__$1);

return statearr_40989;
})();
if(cljs.core.truth_(inst_40932)){
var statearr_40990_41075 = state_40983__$1;
(statearr_40990_41075[(1)] = (30));

} else {
var statearr_40991_41076 = state_40983__$1;
(statearr_40991_41076[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (1))){
var state_40983__$1 = state_40983;
var statearr_40992_41077 = state_40983__$1;
(statearr_40992_41077[(2)] = null);

(statearr_40992_41077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (24))){
var inst_40882 = (state_40983[(7)]);
var inst_40901 = (state_40983[(2)]);
var inst_40902 = cljs.core.next.call(null,inst_40882);
var inst_40860 = inst_40902;
var inst_40861 = null;
var inst_40862 = (0);
var inst_40863 = (0);
var state_40983__$1 = (function (){var statearr_40993 = state_40983;
(statearr_40993[(13)] = inst_40901);

(statearr_40993[(14)] = inst_40861);

(statearr_40993[(15)] = inst_40860);

(statearr_40993[(16)] = inst_40863);

(statearr_40993[(17)] = inst_40862);

return statearr_40993;
})();
var statearr_40994_41078 = state_40983__$1;
(statearr_40994_41078[(2)] = null);

(statearr_40994_41078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (39))){
var state_40983__$1 = state_40983;
var statearr_40998_41079 = state_40983__$1;
(statearr_40998_41079[(2)] = null);

(statearr_40998_41079[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (4))){
var inst_40851 = (state_40983[(10)]);
var inst_40851__$1 = (state_40983[(2)]);
var inst_40852 = (inst_40851__$1 == null);
var state_40983__$1 = (function (){var statearr_40999 = state_40983;
(statearr_40999[(10)] = inst_40851__$1);

return statearr_40999;
})();
if(cljs.core.truth_(inst_40852)){
var statearr_41000_41080 = state_40983__$1;
(statearr_41000_41080[(1)] = (5));

} else {
var statearr_41001_41081 = state_40983__$1;
(statearr_41001_41081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (15))){
var inst_40861 = (state_40983[(14)]);
var inst_40860 = (state_40983[(15)]);
var inst_40863 = (state_40983[(16)]);
var inst_40862 = (state_40983[(17)]);
var inst_40878 = (state_40983[(2)]);
var inst_40879 = (inst_40863 + (1));
var tmp40995 = inst_40861;
var tmp40996 = inst_40860;
var tmp40997 = inst_40862;
var inst_40860__$1 = tmp40996;
var inst_40861__$1 = tmp40995;
var inst_40862__$1 = tmp40997;
var inst_40863__$1 = inst_40879;
var state_40983__$1 = (function (){var statearr_41002 = state_40983;
(statearr_41002[(14)] = inst_40861__$1);

(statearr_41002[(15)] = inst_40860__$1);

(statearr_41002[(16)] = inst_40863__$1);

(statearr_41002[(18)] = inst_40878);

(statearr_41002[(17)] = inst_40862__$1);

return statearr_41002;
})();
var statearr_41003_41082 = state_40983__$1;
(statearr_41003_41082[(2)] = null);

(statearr_41003_41082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (21))){
var inst_40905 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_41007_41083 = state_40983__$1;
(statearr_41007_41083[(2)] = inst_40905);

(statearr_41007_41083[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (31))){
var inst_40931 = (state_40983[(12)]);
var inst_40935 = done.call(null,null);
var inst_40936 = cljs.core.async.untap_STAR_.call(null,m,inst_40931);
var state_40983__$1 = (function (){var statearr_41008 = state_40983;
(statearr_41008[(19)] = inst_40935);

return statearr_41008;
})();
var statearr_41009_41084 = state_40983__$1;
(statearr_41009_41084[(2)] = inst_40936);

(statearr_41009_41084[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (32))){
var inst_40926 = (state_40983[(9)]);
var inst_40925 = (state_40983[(20)]);
var inst_40923 = (state_40983[(21)]);
var inst_40924 = (state_40983[(11)]);
var inst_40938 = (state_40983[(2)]);
var inst_40939 = (inst_40926 + (1));
var tmp41004 = inst_40925;
var tmp41005 = inst_40923;
var tmp41006 = inst_40924;
var inst_40923__$1 = tmp41005;
var inst_40924__$1 = tmp41006;
var inst_40925__$1 = tmp41004;
var inst_40926__$1 = inst_40939;
var state_40983__$1 = (function (){var statearr_41010 = state_40983;
(statearr_41010[(9)] = inst_40926__$1);

(statearr_41010[(20)] = inst_40925__$1);

(statearr_41010[(21)] = inst_40923__$1);

(statearr_41010[(11)] = inst_40924__$1);

(statearr_41010[(22)] = inst_40938);

return statearr_41010;
})();
var statearr_41011_41085 = state_40983__$1;
(statearr_41011_41085[(2)] = null);

(statearr_41011_41085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (40))){
var inst_40951 = (state_40983[(23)]);
var inst_40955 = done.call(null,null);
var inst_40956 = cljs.core.async.untap_STAR_.call(null,m,inst_40951);
var state_40983__$1 = (function (){var statearr_41012 = state_40983;
(statearr_41012[(24)] = inst_40955);

return statearr_41012;
})();
var statearr_41013_41086 = state_40983__$1;
(statearr_41013_41086[(2)] = inst_40956);

(statearr_41013_41086[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (33))){
var inst_40942 = (state_40983[(25)]);
var inst_40944 = cljs.core.chunked_seq_QMARK_.call(null,inst_40942);
var state_40983__$1 = state_40983;
if(inst_40944){
var statearr_41014_41087 = state_40983__$1;
(statearr_41014_41087[(1)] = (36));

} else {
var statearr_41015_41088 = state_40983__$1;
(statearr_41015_41088[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (13))){
var inst_40872 = (state_40983[(26)]);
var inst_40875 = cljs.core.async.close_BANG_.call(null,inst_40872);
var state_40983__$1 = state_40983;
var statearr_41016_41089 = state_40983__$1;
(statearr_41016_41089[(2)] = inst_40875);

(statearr_41016_41089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (22))){
var inst_40895 = (state_40983[(8)]);
var inst_40898 = cljs.core.async.close_BANG_.call(null,inst_40895);
var state_40983__$1 = state_40983;
var statearr_41017_41090 = state_40983__$1;
(statearr_41017_41090[(2)] = inst_40898);

(statearr_41017_41090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (36))){
var inst_40942 = (state_40983[(25)]);
var inst_40946 = cljs.core.chunk_first.call(null,inst_40942);
var inst_40947 = cljs.core.chunk_rest.call(null,inst_40942);
var inst_40948 = cljs.core.count.call(null,inst_40946);
var inst_40923 = inst_40947;
var inst_40924 = inst_40946;
var inst_40925 = inst_40948;
var inst_40926 = (0);
var state_40983__$1 = (function (){var statearr_41018 = state_40983;
(statearr_41018[(9)] = inst_40926);

(statearr_41018[(20)] = inst_40925);

(statearr_41018[(21)] = inst_40923);

(statearr_41018[(11)] = inst_40924);

return statearr_41018;
})();
var statearr_41019_41091 = state_40983__$1;
(statearr_41019_41091[(2)] = null);

(statearr_41019_41091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (41))){
var inst_40942 = (state_40983[(25)]);
var inst_40958 = (state_40983[(2)]);
var inst_40959 = cljs.core.next.call(null,inst_40942);
var inst_40923 = inst_40959;
var inst_40924 = null;
var inst_40925 = (0);
var inst_40926 = (0);
var state_40983__$1 = (function (){var statearr_41020 = state_40983;
(statearr_41020[(9)] = inst_40926);

(statearr_41020[(20)] = inst_40925);

(statearr_41020[(21)] = inst_40923);

(statearr_41020[(11)] = inst_40924);

(statearr_41020[(27)] = inst_40958);

return statearr_41020;
})();
var statearr_41021_41092 = state_40983__$1;
(statearr_41021_41092[(2)] = null);

(statearr_41021_41092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (43))){
var state_40983__$1 = state_40983;
var statearr_41022_41093 = state_40983__$1;
(statearr_41022_41093[(2)] = null);

(statearr_41022_41093[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (29))){
var inst_40967 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_41023_41094 = state_40983__$1;
(statearr_41023_41094[(2)] = inst_40967);

(statearr_41023_41094[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (44))){
var inst_40976 = (state_40983[(2)]);
var state_40983__$1 = (function (){var statearr_41024 = state_40983;
(statearr_41024[(28)] = inst_40976);

return statearr_41024;
})();
var statearr_41025_41095 = state_40983__$1;
(statearr_41025_41095[(2)] = null);

(statearr_41025_41095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (6))){
var inst_40915 = (state_40983[(29)]);
var inst_40914 = cljs.core.deref.call(null,cs);
var inst_40915__$1 = cljs.core.keys.call(null,inst_40914);
var inst_40916 = cljs.core.count.call(null,inst_40915__$1);
var inst_40917 = cljs.core.reset_BANG_.call(null,dctr,inst_40916);
var inst_40922 = cljs.core.seq.call(null,inst_40915__$1);
var inst_40923 = inst_40922;
var inst_40924 = null;
var inst_40925 = (0);
var inst_40926 = (0);
var state_40983__$1 = (function (){var statearr_41026 = state_40983;
(statearr_41026[(9)] = inst_40926);

(statearr_41026[(30)] = inst_40917);

(statearr_41026[(20)] = inst_40925);

(statearr_41026[(21)] = inst_40923);

(statearr_41026[(11)] = inst_40924);

(statearr_41026[(29)] = inst_40915__$1);

return statearr_41026;
})();
var statearr_41027_41096 = state_40983__$1;
(statearr_41027_41096[(2)] = null);

(statearr_41027_41096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (28))){
var inst_40923 = (state_40983[(21)]);
var inst_40942 = (state_40983[(25)]);
var inst_40942__$1 = cljs.core.seq.call(null,inst_40923);
var state_40983__$1 = (function (){var statearr_41028 = state_40983;
(statearr_41028[(25)] = inst_40942__$1);

return statearr_41028;
})();
if(inst_40942__$1){
var statearr_41029_41097 = state_40983__$1;
(statearr_41029_41097[(1)] = (33));

} else {
var statearr_41030_41098 = state_40983__$1;
(statearr_41030_41098[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (25))){
var inst_40926 = (state_40983[(9)]);
var inst_40925 = (state_40983[(20)]);
var inst_40928 = (inst_40926 < inst_40925);
var inst_40929 = inst_40928;
var state_40983__$1 = state_40983;
if(cljs.core.truth_(inst_40929)){
var statearr_41031_41099 = state_40983__$1;
(statearr_41031_41099[(1)] = (27));

} else {
var statearr_41032_41100 = state_40983__$1;
(statearr_41032_41100[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (34))){
var state_40983__$1 = state_40983;
var statearr_41033_41101 = state_40983__$1;
(statearr_41033_41101[(2)] = null);

(statearr_41033_41101[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (17))){
var state_40983__$1 = state_40983;
var statearr_41034_41102 = state_40983__$1;
(statearr_41034_41102[(2)] = null);

(statearr_41034_41102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (3))){
var inst_40981 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40983__$1,inst_40981);
} else {
if((state_val_40984 === (12))){
var inst_40910 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_41035_41103 = state_40983__$1;
(statearr_41035_41103[(2)] = inst_40910);

(statearr_41035_41103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (2))){
var state_40983__$1 = state_40983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40983__$1,(4),ch);
} else {
if((state_val_40984 === (23))){
var state_40983__$1 = state_40983;
var statearr_41036_41104 = state_40983__$1;
(statearr_41036_41104[(2)] = null);

(statearr_41036_41104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (35))){
var inst_40965 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_41037_41105 = state_40983__$1;
(statearr_41037_41105[(2)] = inst_40965);

(statearr_41037_41105[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (19))){
var inst_40882 = (state_40983[(7)]);
var inst_40886 = cljs.core.chunk_first.call(null,inst_40882);
var inst_40887 = cljs.core.chunk_rest.call(null,inst_40882);
var inst_40888 = cljs.core.count.call(null,inst_40886);
var inst_40860 = inst_40887;
var inst_40861 = inst_40886;
var inst_40862 = inst_40888;
var inst_40863 = (0);
var state_40983__$1 = (function (){var statearr_41038 = state_40983;
(statearr_41038[(14)] = inst_40861);

(statearr_41038[(15)] = inst_40860);

(statearr_41038[(16)] = inst_40863);

(statearr_41038[(17)] = inst_40862);

return statearr_41038;
})();
var statearr_41039_41106 = state_40983__$1;
(statearr_41039_41106[(2)] = null);

(statearr_41039_41106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (11))){
var inst_40882 = (state_40983[(7)]);
var inst_40860 = (state_40983[(15)]);
var inst_40882__$1 = cljs.core.seq.call(null,inst_40860);
var state_40983__$1 = (function (){var statearr_41040 = state_40983;
(statearr_41040[(7)] = inst_40882__$1);

return statearr_41040;
})();
if(inst_40882__$1){
var statearr_41041_41107 = state_40983__$1;
(statearr_41041_41107[(1)] = (16));

} else {
var statearr_41042_41108 = state_40983__$1;
(statearr_41042_41108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (9))){
var inst_40912 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_41043_41109 = state_40983__$1;
(statearr_41043_41109[(2)] = inst_40912);

(statearr_41043_41109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (5))){
var inst_40858 = cljs.core.deref.call(null,cs);
var inst_40859 = cljs.core.seq.call(null,inst_40858);
var inst_40860 = inst_40859;
var inst_40861 = null;
var inst_40862 = (0);
var inst_40863 = (0);
var state_40983__$1 = (function (){var statearr_41044 = state_40983;
(statearr_41044[(14)] = inst_40861);

(statearr_41044[(15)] = inst_40860);

(statearr_41044[(16)] = inst_40863);

(statearr_41044[(17)] = inst_40862);

return statearr_41044;
})();
var statearr_41045_41110 = state_40983__$1;
(statearr_41045_41110[(2)] = null);

(statearr_41045_41110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (14))){
var state_40983__$1 = state_40983;
var statearr_41046_41111 = state_40983__$1;
(statearr_41046_41111[(2)] = null);

(statearr_41046_41111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (45))){
var inst_40973 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_41047_41112 = state_40983__$1;
(statearr_41047_41112[(2)] = inst_40973);

(statearr_41047_41112[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (26))){
var inst_40915 = (state_40983[(29)]);
var inst_40969 = (state_40983[(2)]);
var inst_40970 = cljs.core.seq.call(null,inst_40915);
var state_40983__$1 = (function (){var statearr_41048 = state_40983;
(statearr_41048[(31)] = inst_40969);

return statearr_41048;
})();
if(inst_40970){
var statearr_41049_41113 = state_40983__$1;
(statearr_41049_41113[(1)] = (42));

} else {
var statearr_41050_41114 = state_40983__$1;
(statearr_41050_41114[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (16))){
var inst_40882 = (state_40983[(7)]);
var inst_40884 = cljs.core.chunked_seq_QMARK_.call(null,inst_40882);
var state_40983__$1 = state_40983;
if(inst_40884){
var statearr_41051_41115 = state_40983__$1;
(statearr_41051_41115[(1)] = (19));

} else {
var statearr_41052_41116 = state_40983__$1;
(statearr_41052_41116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (38))){
var inst_40962 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_41053_41117 = state_40983__$1;
(statearr_41053_41117[(2)] = inst_40962);

(statearr_41053_41117[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (30))){
var state_40983__$1 = state_40983;
var statearr_41054_41118 = state_40983__$1;
(statearr_41054_41118[(2)] = null);

(statearr_41054_41118[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (10))){
var inst_40861 = (state_40983[(14)]);
var inst_40863 = (state_40983[(16)]);
var inst_40871 = cljs.core._nth.call(null,inst_40861,inst_40863);
var inst_40872 = cljs.core.nth.call(null,inst_40871,(0),null);
var inst_40873 = cljs.core.nth.call(null,inst_40871,(1),null);
var state_40983__$1 = (function (){var statearr_41055 = state_40983;
(statearr_41055[(26)] = inst_40872);

return statearr_41055;
})();
if(cljs.core.truth_(inst_40873)){
var statearr_41056_41119 = state_40983__$1;
(statearr_41056_41119[(1)] = (13));

} else {
var statearr_41057_41120 = state_40983__$1;
(statearr_41057_41120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (18))){
var inst_40908 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_41058_41121 = state_40983__$1;
(statearr_41058_41121[(2)] = inst_40908);

(statearr_41058_41121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (42))){
var state_40983__$1 = state_40983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40983__$1,(45),dchan);
} else {
if((state_val_40984 === (37))){
var inst_40851 = (state_40983[(10)]);
var inst_40942 = (state_40983[(25)]);
var inst_40951 = (state_40983[(23)]);
var inst_40951__$1 = cljs.core.first.call(null,inst_40942);
var inst_40952 = cljs.core.async.put_BANG_.call(null,inst_40951__$1,inst_40851,done);
var state_40983__$1 = (function (){var statearr_41059 = state_40983;
(statearr_41059[(23)] = inst_40951__$1);

return statearr_41059;
})();
if(cljs.core.truth_(inst_40952)){
var statearr_41060_41122 = state_40983__$1;
(statearr_41060_41122[(1)] = (39));

} else {
var statearr_41061_41123 = state_40983__$1;
(statearr_41061_41123[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (8))){
var inst_40863 = (state_40983[(16)]);
var inst_40862 = (state_40983[(17)]);
var inst_40865 = (inst_40863 < inst_40862);
var inst_40866 = inst_40865;
var state_40983__$1 = state_40983;
if(cljs.core.truth_(inst_40866)){
var statearr_41062_41124 = state_40983__$1;
(statearr_41062_41124[(1)] = (10));

} else {
var statearr_41063_41125 = state_40983__$1;
(statearr_41063_41125[(1)] = (11));

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
});})(c__28608__auto___41071,cs,m,dchan,dctr,done))
;
return ((function (switch__28496__auto__,c__28608__auto___41071,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28497__auto__ = null;
var cljs$core$async$mult_$_state_machine__28497__auto____0 = (function (){
var statearr_41067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41067[(0)] = cljs$core$async$mult_$_state_machine__28497__auto__);

(statearr_41067[(1)] = (1));

return statearr_41067;
});
var cljs$core$async$mult_$_state_machine__28497__auto____1 = (function (state_40983){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_40983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e41068){if((e41068 instanceof Object)){
var ex__28500__auto__ = e41068;
var statearr_41069_41126 = state_40983;
(statearr_41069_41126[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41127 = state_40983;
state_40983 = G__41127;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28497__auto__ = function(state_40983){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28497__auto____1.call(this,state_40983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28497__auto____0;
cljs$core$async$mult_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28497__auto____1;
return cljs$core$async$mult_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___41071,cs,m,dchan,dctr,done))
})();
var state__28610__auto__ = (function (){var statearr_41070 = f__28609__auto__.call(null);
(statearr_41070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___41071);

return statearr_41070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___41071,cs,m,dchan,dctr,done))
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
var args41128 = [];
var len__25865__auto___41131 = arguments.length;
var i__25866__auto___41132 = (0);
while(true){
if((i__25866__auto___41132 < len__25865__auto___41131)){
args41128.push((arguments[i__25866__auto___41132]));

var G__41133 = (i__25866__auto___41132 + (1));
i__25866__auto___41132 = G__41133;
continue;
} else {
}
break;
}

var G__41130 = args41128.length;
switch (G__41130) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41128.length)].join('')));

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
var len__25865__auto___41145 = arguments.length;
var i__25866__auto___41146 = (0);
while(true){
if((i__25866__auto___41146 < len__25865__auto___41145)){
args__25872__auto__.push((arguments[i__25866__auto___41146]));

var G__41147 = (i__25866__auto___41146 + (1));
i__25866__auto___41146 = G__41147;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((3) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25873__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41139){
var map__41140 = p__41139;
var map__41140__$1 = ((((!((map__41140 == null)))?((((map__41140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41140):map__41140);
var opts = map__41140__$1;
var statearr_41142_41148 = state;
(statearr_41142_41148[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__41140,map__41140__$1,opts){
return (function (val){
var statearr_41143_41149 = state;
(statearr_41143_41149[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41140,map__41140__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_41144_41150 = state;
(statearr_41144_41150[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41135){
var G__41136 = cljs.core.first.call(null,seq41135);
var seq41135__$1 = cljs.core.next.call(null,seq41135);
var G__41137 = cljs.core.first.call(null,seq41135__$1);
var seq41135__$2 = cljs.core.next.call(null,seq41135__$1);
var G__41138 = cljs.core.first.call(null,seq41135__$2);
var seq41135__$3 = cljs.core.next.call(null,seq41135__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41136,G__41137,G__41138,seq41135__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41316 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41317){
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
this.meta41317 = meta41317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41318,meta41317__$1){
var self__ = this;
var _41318__$1 = this;
return (new cljs.core.async.t_cljs$core$async41316(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41317__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41318){
var self__ = this;
var _41318__$1 = this;
return self__.meta41317;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41316.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41316.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41317","meta41317",346896800,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41316";

cljs.core.async.t_cljs$core$async41316.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async41316");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41316 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41316(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41317){
return (new cljs.core.async.t_cljs$core$async41316(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41317));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41316(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28608__auto___41481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___41481,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___41481,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41418){
var state_val_41419 = (state_41418[(1)]);
if((state_val_41419 === (7))){
var inst_41334 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41420_41482 = state_41418__$1;
(statearr_41420_41482[(2)] = inst_41334);

(statearr_41420_41482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (20))){
var inst_41346 = (state_41418[(7)]);
var state_41418__$1 = state_41418;
var statearr_41421_41483 = state_41418__$1;
(statearr_41421_41483[(2)] = inst_41346);

(statearr_41421_41483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (27))){
var state_41418__$1 = state_41418;
var statearr_41422_41484 = state_41418__$1;
(statearr_41422_41484[(2)] = null);

(statearr_41422_41484[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (1))){
var inst_41322 = (state_41418[(8)]);
var inst_41322__$1 = calc_state.call(null);
var inst_41324 = (inst_41322__$1 == null);
var inst_41325 = cljs.core.not.call(null,inst_41324);
var state_41418__$1 = (function (){var statearr_41423 = state_41418;
(statearr_41423[(8)] = inst_41322__$1);

return statearr_41423;
})();
if(inst_41325){
var statearr_41424_41485 = state_41418__$1;
(statearr_41424_41485[(1)] = (2));

} else {
var statearr_41425_41486 = state_41418__$1;
(statearr_41425_41486[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (24))){
var inst_41369 = (state_41418[(9)]);
var inst_41378 = (state_41418[(10)]);
var inst_41392 = (state_41418[(11)]);
var inst_41392__$1 = inst_41369.call(null,inst_41378);
var state_41418__$1 = (function (){var statearr_41426 = state_41418;
(statearr_41426[(11)] = inst_41392__$1);

return statearr_41426;
})();
if(cljs.core.truth_(inst_41392__$1)){
var statearr_41427_41487 = state_41418__$1;
(statearr_41427_41487[(1)] = (29));

} else {
var statearr_41428_41488 = state_41418__$1;
(statearr_41428_41488[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (4))){
var inst_41337 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41337)){
var statearr_41429_41489 = state_41418__$1;
(statearr_41429_41489[(1)] = (8));

} else {
var statearr_41430_41490 = state_41418__$1;
(statearr_41430_41490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (15))){
var inst_41363 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41363)){
var statearr_41431_41491 = state_41418__$1;
(statearr_41431_41491[(1)] = (19));

} else {
var statearr_41432_41492 = state_41418__$1;
(statearr_41432_41492[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (21))){
var inst_41368 = (state_41418[(12)]);
var inst_41368__$1 = (state_41418[(2)]);
var inst_41369 = cljs.core.get.call(null,inst_41368__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41370 = cljs.core.get.call(null,inst_41368__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41371 = cljs.core.get.call(null,inst_41368__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41418__$1 = (function (){var statearr_41433 = state_41418;
(statearr_41433[(9)] = inst_41369);

(statearr_41433[(12)] = inst_41368__$1);

(statearr_41433[(13)] = inst_41370);

return statearr_41433;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41418__$1,(22),inst_41371);
} else {
if((state_val_41419 === (31))){
var inst_41400 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41400)){
var statearr_41434_41493 = state_41418__$1;
(statearr_41434_41493[(1)] = (32));

} else {
var statearr_41435_41494 = state_41418__$1;
(statearr_41435_41494[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (32))){
var inst_41377 = (state_41418[(14)]);
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41418__$1,(35),out,inst_41377);
} else {
if((state_val_41419 === (33))){
var inst_41368 = (state_41418[(12)]);
var inst_41346 = inst_41368;
var state_41418__$1 = (function (){var statearr_41436 = state_41418;
(statearr_41436[(7)] = inst_41346);

return statearr_41436;
})();
var statearr_41437_41495 = state_41418__$1;
(statearr_41437_41495[(2)] = null);

(statearr_41437_41495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (13))){
var inst_41346 = (state_41418[(7)]);
var inst_41353 = inst_41346.cljs$lang$protocol_mask$partition0$;
var inst_41354 = (inst_41353 & (64));
var inst_41355 = inst_41346.cljs$core$ISeq$;
var inst_41356 = (inst_41354) || (inst_41355);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41356)){
var statearr_41438_41496 = state_41418__$1;
(statearr_41438_41496[(1)] = (16));

} else {
var statearr_41439_41497 = state_41418__$1;
(statearr_41439_41497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (22))){
var inst_41378 = (state_41418[(10)]);
var inst_41377 = (state_41418[(14)]);
var inst_41376 = (state_41418[(2)]);
var inst_41377__$1 = cljs.core.nth.call(null,inst_41376,(0),null);
var inst_41378__$1 = cljs.core.nth.call(null,inst_41376,(1),null);
var inst_41379 = (inst_41377__$1 == null);
var inst_41380 = cljs.core._EQ_.call(null,inst_41378__$1,change);
var inst_41381 = (inst_41379) || (inst_41380);
var state_41418__$1 = (function (){var statearr_41440 = state_41418;
(statearr_41440[(10)] = inst_41378__$1);

(statearr_41440[(14)] = inst_41377__$1);

return statearr_41440;
})();
if(cljs.core.truth_(inst_41381)){
var statearr_41441_41498 = state_41418__$1;
(statearr_41441_41498[(1)] = (23));

} else {
var statearr_41442_41499 = state_41418__$1;
(statearr_41442_41499[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (36))){
var inst_41368 = (state_41418[(12)]);
var inst_41346 = inst_41368;
var state_41418__$1 = (function (){var statearr_41443 = state_41418;
(statearr_41443[(7)] = inst_41346);

return statearr_41443;
})();
var statearr_41444_41500 = state_41418__$1;
(statearr_41444_41500[(2)] = null);

(statearr_41444_41500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (29))){
var inst_41392 = (state_41418[(11)]);
var state_41418__$1 = state_41418;
var statearr_41445_41501 = state_41418__$1;
(statearr_41445_41501[(2)] = inst_41392);

(statearr_41445_41501[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (6))){
var state_41418__$1 = state_41418;
var statearr_41446_41502 = state_41418__$1;
(statearr_41446_41502[(2)] = false);

(statearr_41446_41502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (28))){
var inst_41388 = (state_41418[(2)]);
var inst_41389 = calc_state.call(null);
var inst_41346 = inst_41389;
var state_41418__$1 = (function (){var statearr_41447 = state_41418;
(statearr_41447[(7)] = inst_41346);

(statearr_41447[(15)] = inst_41388);

return statearr_41447;
})();
var statearr_41448_41503 = state_41418__$1;
(statearr_41448_41503[(2)] = null);

(statearr_41448_41503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (25))){
var inst_41414 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41449_41504 = state_41418__$1;
(statearr_41449_41504[(2)] = inst_41414);

(statearr_41449_41504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (34))){
var inst_41412 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41450_41505 = state_41418__$1;
(statearr_41450_41505[(2)] = inst_41412);

(statearr_41450_41505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (17))){
var state_41418__$1 = state_41418;
var statearr_41451_41506 = state_41418__$1;
(statearr_41451_41506[(2)] = false);

(statearr_41451_41506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (3))){
var state_41418__$1 = state_41418;
var statearr_41452_41507 = state_41418__$1;
(statearr_41452_41507[(2)] = false);

(statearr_41452_41507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (12))){
var inst_41416 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41418__$1,inst_41416);
} else {
if((state_val_41419 === (2))){
var inst_41322 = (state_41418[(8)]);
var inst_41327 = inst_41322.cljs$lang$protocol_mask$partition0$;
var inst_41328 = (inst_41327 & (64));
var inst_41329 = inst_41322.cljs$core$ISeq$;
var inst_41330 = (inst_41328) || (inst_41329);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41330)){
var statearr_41453_41508 = state_41418__$1;
(statearr_41453_41508[(1)] = (5));

} else {
var statearr_41454_41509 = state_41418__$1;
(statearr_41454_41509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (23))){
var inst_41377 = (state_41418[(14)]);
var inst_41383 = (inst_41377 == null);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41383)){
var statearr_41455_41510 = state_41418__$1;
(statearr_41455_41510[(1)] = (26));

} else {
var statearr_41456_41511 = state_41418__$1;
(statearr_41456_41511[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (35))){
var inst_41403 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41403)){
var statearr_41457_41512 = state_41418__$1;
(statearr_41457_41512[(1)] = (36));

} else {
var statearr_41458_41513 = state_41418__$1;
(statearr_41458_41513[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (19))){
var inst_41346 = (state_41418[(7)]);
var inst_41365 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41346);
var state_41418__$1 = state_41418;
var statearr_41459_41514 = state_41418__$1;
(statearr_41459_41514[(2)] = inst_41365);

(statearr_41459_41514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (11))){
var inst_41346 = (state_41418[(7)]);
var inst_41350 = (inst_41346 == null);
var inst_41351 = cljs.core.not.call(null,inst_41350);
var state_41418__$1 = state_41418;
if(inst_41351){
var statearr_41460_41515 = state_41418__$1;
(statearr_41460_41515[(1)] = (13));

} else {
var statearr_41461_41516 = state_41418__$1;
(statearr_41461_41516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (9))){
var inst_41322 = (state_41418[(8)]);
var state_41418__$1 = state_41418;
var statearr_41462_41517 = state_41418__$1;
(statearr_41462_41517[(2)] = inst_41322);

(statearr_41462_41517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (5))){
var state_41418__$1 = state_41418;
var statearr_41463_41518 = state_41418__$1;
(statearr_41463_41518[(2)] = true);

(statearr_41463_41518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (14))){
var state_41418__$1 = state_41418;
var statearr_41464_41519 = state_41418__$1;
(statearr_41464_41519[(2)] = false);

(statearr_41464_41519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (26))){
var inst_41378 = (state_41418[(10)]);
var inst_41385 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41378);
var state_41418__$1 = state_41418;
var statearr_41465_41520 = state_41418__$1;
(statearr_41465_41520[(2)] = inst_41385);

(statearr_41465_41520[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (16))){
var state_41418__$1 = state_41418;
var statearr_41466_41521 = state_41418__$1;
(statearr_41466_41521[(2)] = true);

(statearr_41466_41521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (38))){
var inst_41408 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41467_41522 = state_41418__$1;
(statearr_41467_41522[(2)] = inst_41408);

(statearr_41467_41522[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (30))){
var inst_41369 = (state_41418[(9)]);
var inst_41378 = (state_41418[(10)]);
var inst_41370 = (state_41418[(13)]);
var inst_41395 = cljs.core.empty_QMARK_.call(null,inst_41369);
var inst_41396 = inst_41370.call(null,inst_41378);
var inst_41397 = cljs.core.not.call(null,inst_41396);
var inst_41398 = (inst_41395) && (inst_41397);
var state_41418__$1 = state_41418;
var statearr_41468_41523 = state_41418__$1;
(statearr_41468_41523[(2)] = inst_41398);

(statearr_41468_41523[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (10))){
var inst_41322 = (state_41418[(8)]);
var inst_41342 = (state_41418[(2)]);
var inst_41343 = cljs.core.get.call(null,inst_41342,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41344 = cljs.core.get.call(null,inst_41342,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41345 = cljs.core.get.call(null,inst_41342,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41346 = inst_41322;
var state_41418__$1 = (function (){var statearr_41469 = state_41418;
(statearr_41469[(16)] = inst_41344);

(statearr_41469[(7)] = inst_41346);

(statearr_41469[(17)] = inst_41345);

(statearr_41469[(18)] = inst_41343);

return statearr_41469;
})();
var statearr_41470_41524 = state_41418__$1;
(statearr_41470_41524[(2)] = null);

(statearr_41470_41524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (18))){
var inst_41360 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41471_41525 = state_41418__$1;
(statearr_41471_41525[(2)] = inst_41360);

(statearr_41471_41525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (37))){
var state_41418__$1 = state_41418;
var statearr_41472_41526 = state_41418__$1;
(statearr_41472_41526[(2)] = null);

(statearr_41472_41526[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (8))){
var inst_41322 = (state_41418[(8)]);
var inst_41339 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41322);
var state_41418__$1 = state_41418;
var statearr_41473_41527 = state_41418__$1;
(statearr_41473_41527[(2)] = inst_41339);

(statearr_41473_41527[(1)] = (10));


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
});})(c__28608__auto___41481,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28496__auto__,c__28608__auto___41481,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28497__auto__ = null;
var cljs$core$async$mix_$_state_machine__28497__auto____0 = (function (){
var statearr_41477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41477[(0)] = cljs$core$async$mix_$_state_machine__28497__auto__);

(statearr_41477[(1)] = (1));

return statearr_41477;
});
var cljs$core$async$mix_$_state_machine__28497__auto____1 = (function (state_41418){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_41418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e41478){if((e41478 instanceof Object)){
var ex__28500__auto__ = e41478;
var statearr_41479_41528 = state_41418;
(statearr_41479_41528[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41529 = state_41418;
state_41418 = G__41529;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28497__auto__ = function(state_41418){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28497__auto____1.call(this,state_41418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28497__auto____0;
cljs$core$async$mix_$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28497__auto____1;
return cljs$core$async$mix_$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___41481,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28610__auto__ = (function (){var statearr_41480 = f__28609__auto__.call(null);
(statearr_41480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___41481);

return statearr_41480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___41481,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args41530 = [];
var len__25865__auto___41533 = arguments.length;
var i__25866__auto___41534 = (0);
while(true){
if((i__25866__auto___41534 < len__25865__auto___41533)){
args41530.push((arguments[i__25866__auto___41534]));

var G__41535 = (i__25866__auto___41534 + (1));
i__25866__auto___41534 = G__41535;
continue;
} else {
}
break;
}

var G__41532 = args41530.length;
switch (G__41532) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41530.length)].join('')));

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
var args41538 = [];
var len__25865__auto___41663 = arguments.length;
var i__25866__auto___41664 = (0);
while(true){
if((i__25866__auto___41664 < len__25865__auto___41663)){
args41538.push((arguments[i__25866__auto___41664]));

var G__41665 = (i__25866__auto___41664 + (1));
i__25866__auto___41664 = G__41665;
continue;
} else {
}
break;
}

var G__41540 = args41538.length;
switch (G__41540) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41538.length)].join('')));

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
return (function (p1__41537_SHARP_){
if(cljs.core.truth_(p1__41537_SHARP_.call(null,topic))){
return p1__41537_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41537_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24790__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41541 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41542){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41542 = meta41542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41543,meta41542__$1){
var self__ = this;
var _41543__$1 = this;
return (new cljs.core.async.t_cljs$core$async41541(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41542__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41543){
var self__ = this;
var _41543__$1 = this;
return self__.meta41542;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41541.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41542","meta41542",-970245881,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41541";

cljs.core.async.t_cljs$core$async41541.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async41541");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41541 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41541(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41542){
return (new cljs.core.async.t_cljs$core$async41541(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41542));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41541(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28608__auto___41667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___41667,mults,ensure_mult,p){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___41667,mults,ensure_mult,p){
return (function (state_41615){
var state_val_41616 = (state_41615[(1)]);
if((state_val_41616 === (7))){
var inst_41611 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
var statearr_41617_41668 = state_41615__$1;
(statearr_41617_41668[(2)] = inst_41611);

(statearr_41617_41668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (20))){
var state_41615__$1 = state_41615;
var statearr_41618_41669 = state_41615__$1;
(statearr_41618_41669[(2)] = null);

(statearr_41618_41669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (1))){
var state_41615__$1 = state_41615;
var statearr_41619_41670 = state_41615__$1;
(statearr_41619_41670[(2)] = null);

(statearr_41619_41670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (24))){
var inst_41594 = (state_41615[(7)]);
var inst_41603 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41594);
var state_41615__$1 = state_41615;
var statearr_41620_41671 = state_41615__$1;
(statearr_41620_41671[(2)] = inst_41603);

(statearr_41620_41671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (4))){
var inst_41546 = (state_41615[(8)]);
var inst_41546__$1 = (state_41615[(2)]);
var inst_41547 = (inst_41546__$1 == null);
var state_41615__$1 = (function (){var statearr_41621 = state_41615;
(statearr_41621[(8)] = inst_41546__$1);

return statearr_41621;
})();
if(cljs.core.truth_(inst_41547)){
var statearr_41622_41672 = state_41615__$1;
(statearr_41622_41672[(1)] = (5));

} else {
var statearr_41623_41673 = state_41615__$1;
(statearr_41623_41673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (15))){
var inst_41588 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
var statearr_41624_41674 = state_41615__$1;
(statearr_41624_41674[(2)] = inst_41588);

(statearr_41624_41674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (21))){
var inst_41608 = (state_41615[(2)]);
var state_41615__$1 = (function (){var statearr_41625 = state_41615;
(statearr_41625[(9)] = inst_41608);

return statearr_41625;
})();
var statearr_41626_41675 = state_41615__$1;
(statearr_41626_41675[(2)] = null);

(statearr_41626_41675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (13))){
var inst_41570 = (state_41615[(10)]);
var inst_41572 = cljs.core.chunked_seq_QMARK_.call(null,inst_41570);
var state_41615__$1 = state_41615;
if(inst_41572){
var statearr_41627_41676 = state_41615__$1;
(statearr_41627_41676[(1)] = (16));

} else {
var statearr_41628_41677 = state_41615__$1;
(statearr_41628_41677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (22))){
var inst_41600 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
if(cljs.core.truth_(inst_41600)){
var statearr_41629_41678 = state_41615__$1;
(statearr_41629_41678[(1)] = (23));

} else {
var statearr_41630_41679 = state_41615__$1;
(statearr_41630_41679[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (6))){
var inst_41596 = (state_41615[(11)]);
var inst_41546 = (state_41615[(8)]);
var inst_41594 = (state_41615[(7)]);
var inst_41594__$1 = topic_fn.call(null,inst_41546);
var inst_41595 = cljs.core.deref.call(null,mults);
var inst_41596__$1 = cljs.core.get.call(null,inst_41595,inst_41594__$1);
var state_41615__$1 = (function (){var statearr_41631 = state_41615;
(statearr_41631[(11)] = inst_41596__$1);

(statearr_41631[(7)] = inst_41594__$1);

return statearr_41631;
})();
if(cljs.core.truth_(inst_41596__$1)){
var statearr_41632_41680 = state_41615__$1;
(statearr_41632_41680[(1)] = (19));

} else {
var statearr_41633_41681 = state_41615__$1;
(statearr_41633_41681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (25))){
var inst_41605 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
var statearr_41634_41682 = state_41615__$1;
(statearr_41634_41682[(2)] = inst_41605);

(statearr_41634_41682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (17))){
var inst_41570 = (state_41615[(10)]);
var inst_41579 = cljs.core.first.call(null,inst_41570);
var inst_41580 = cljs.core.async.muxch_STAR_.call(null,inst_41579);
var inst_41581 = cljs.core.async.close_BANG_.call(null,inst_41580);
var inst_41582 = cljs.core.next.call(null,inst_41570);
var inst_41556 = inst_41582;
var inst_41557 = null;
var inst_41558 = (0);
var inst_41559 = (0);
var state_41615__$1 = (function (){var statearr_41635 = state_41615;
(statearr_41635[(12)] = inst_41581);

(statearr_41635[(13)] = inst_41556);

(statearr_41635[(14)] = inst_41558);

(statearr_41635[(15)] = inst_41559);

(statearr_41635[(16)] = inst_41557);

return statearr_41635;
})();
var statearr_41636_41683 = state_41615__$1;
(statearr_41636_41683[(2)] = null);

(statearr_41636_41683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (3))){
var inst_41613 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41615__$1,inst_41613);
} else {
if((state_val_41616 === (12))){
var inst_41590 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
var statearr_41637_41684 = state_41615__$1;
(statearr_41637_41684[(2)] = inst_41590);

(statearr_41637_41684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (2))){
var state_41615__$1 = state_41615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41615__$1,(4),ch);
} else {
if((state_val_41616 === (23))){
var state_41615__$1 = state_41615;
var statearr_41638_41685 = state_41615__$1;
(statearr_41638_41685[(2)] = null);

(statearr_41638_41685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (19))){
var inst_41596 = (state_41615[(11)]);
var inst_41546 = (state_41615[(8)]);
var inst_41598 = cljs.core.async.muxch_STAR_.call(null,inst_41596);
var state_41615__$1 = state_41615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41615__$1,(22),inst_41598,inst_41546);
} else {
if((state_val_41616 === (11))){
var inst_41556 = (state_41615[(13)]);
var inst_41570 = (state_41615[(10)]);
var inst_41570__$1 = cljs.core.seq.call(null,inst_41556);
var state_41615__$1 = (function (){var statearr_41639 = state_41615;
(statearr_41639[(10)] = inst_41570__$1);

return statearr_41639;
})();
if(inst_41570__$1){
var statearr_41640_41686 = state_41615__$1;
(statearr_41640_41686[(1)] = (13));

} else {
var statearr_41641_41687 = state_41615__$1;
(statearr_41641_41687[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (9))){
var inst_41592 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
var statearr_41642_41688 = state_41615__$1;
(statearr_41642_41688[(2)] = inst_41592);

(statearr_41642_41688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (5))){
var inst_41553 = cljs.core.deref.call(null,mults);
var inst_41554 = cljs.core.vals.call(null,inst_41553);
var inst_41555 = cljs.core.seq.call(null,inst_41554);
var inst_41556 = inst_41555;
var inst_41557 = null;
var inst_41558 = (0);
var inst_41559 = (0);
var state_41615__$1 = (function (){var statearr_41643 = state_41615;
(statearr_41643[(13)] = inst_41556);

(statearr_41643[(14)] = inst_41558);

(statearr_41643[(15)] = inst_41559);

(statearr_41643[(16)] = inst_41557);

return statearr_41643;
})();
var statearr_41644_41689 = state_41615__$1;
(statearr_41644_41689[(2)] = null);

(statearr_41644_41689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (14))){
var state_41615__$1 = state_41615;
var statearr_41648_41690 = state_41615__$1;
(statearr_41648_41690[(2)] = null);

(statearr_41648_41690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (16))){
var inst_41570 = (state_41615[(10)]);
var inst_41574 = cljs.core.chunk_first.call(null,inst_41570);
var inst_41575 = cljs.core.chunk_rest.call(null,inst_41570);
var inst_41576 = cljs.core.count.call(null,inst_41574);
var inst_41556 = inst_41575;
var inst_41557 = inst_41574;
var inst_41558 = inst_41576;
var inst_41559 = (0);
var state_41615__$1 = (function (){var statearr_41649 = state_41615;
(statearr_41649[(13)] = inst_41556);

(statearr_41649[(14)] = inst_41558);

(statearr_41649[(15)] = inst_41559);

(statearr_41649[(16)] = inst_41557);

return statearr_41649;
})();
var statearr_41650_41691 = state_41615__$1;
(statearr_41650_41691[(2)] = null);

(statearr_41650_41691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (10))){
var inst_41556 = (state_41615[(13)]);
var inst_41558 = (state_41615[(14)]);
var inst_41559 = (state_41615[(15)]);
var inst_41557 = (state_41615[(16)]);
var inst_41564 = cljs.core._nth.call(null,inst_41557,inst_41559);
var inst_41565 = cljs.core.async.muxch_STAR_.call(null,inst_41564);
var inst_41566 = cljs.core.async.close_BANG_.call(null,inst_41565);
var inst_41567 = (inst_41559 + (1));
var tmp41645 = inst_41556;
var tmp41646 = inst_41558;
var tmp41647 = inst_41557;
var inst_41556__$1 = tmp41645;
var inst_41557__$1 = tmp41647;
var inst_41558__$1 = tmp41646;
var inst_41559__$1 = inst_41567;
var state_41615__$1 = (function (){var statearr_41651 = state_41615;
(statearr_41651[(13)] = inst_41556__$1);

(statearr_41651[(14)] = inst_41558__$1);

(statearr_41651[(15)] = inst_41559__$1);

(statearr_41651[(16)] = inst_41557__$1);

(statearr_41651[(17)] = inst_41566);

return statearr_41651;
})();
var statearr_41652_41692 = state_41615__$1;
(statearr_41652_41692[(2)] = null);

(statearr_41652_41692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (18))){
var inst_41585 = (state_41615[(2)]);
var state_41615__$1 = state_41615;
var statearr_41653_41693 = state_41615__$1;
(statearr_41653_41693[(2)] = inst_41585);

(statearr_41653_41693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41616 === (8))){
var inst_41558 = (state_41615[(14)]);
var inst_41559 = (state_41615[(15)]);
var inst_41561 = (inst_41559 < inst_41558);
var inst_41562 = inst_41561;
var state_41615__$1 = state_41615;
if(cljs.core.truth_(inst_41562)){
var statearr_41654_41694 = state_41615__$1;
(statearr_41654_41694[(1)] = (10));

} else {
var statearr_41655_41695 = state_41615__$1;
(statearr_41655_41695[(1)] = (11));

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
});})(c__28608__auto___41667,mults,ensure_mult,p))
;
return ((function (switch__28496__auto__,c__28608__auto___41667,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_41659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41659[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_41659[(1)] = (1));

return statearr_41659;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_41615){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_41615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e41660){if((e41660 instanceof Object)){
var ex__28500__auto__ = e41660;
var statearr_41661_41696 = state_41615;
(statearr_41661_41696[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41697 = state_41615;
state_41615 = G__41697;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_41615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_41615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___41667,mults,ensure_mult,p))
})();
var state__28610__auto__ = (function (){var statearr_41662 = f__28609__auto__.call(null);
(statearr_41662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___41667);

return statearr_41662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___41667,mults,ensure_mult,p))
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
var args41698 = [];
var len__25865__auto___41701 = arguments.length;
var i__25866__auto___41702 = (0);
while(true){
if((i__25866__auto___41702 < len__25865__auto___41701)){
args41698.push((arguments[i__25866__auto___41702]));

var G__41703 = (i__25866__auto___41702 + (1));
i__25866__auto___41702 = G__41703;
continue;
} else {
}
break;
}

var G__41700 = args41698.length;
switch (G__41700) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41698.length)].join('')));

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
var args41705 = [];
var len__25865__auto___41708 = arguments.length;
var i__25866__auto___41709 = (0);
while(true){
if((i__25866__auto___41709 < len__25865__auto___41708)){
args41705.push((arguments[i__25866__auto___41709]));

var G__41710 = (i__25866__auto___41709 + (1));
i__25866__auto___41709 = G__41710;
continue;
} else {
}
break;
}

var G__41707 = args41705.length;
switch (G__41707) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41705.length)].join('')));

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
var args41712 = [];
var len__25865__auto___41783 = arguments.length;
var i__25866__auto___41784 = (0);
while(true){
if((i__25866__auto___41784 < len__25865__auto___41783)){
args41712.push((arguments[i__25866__auto___41784]));

var G__41785 = (i__25866__auto___41784 + (1));
i__25866__auto___41784 = G__41785;
continue;
} else {
}
break;
}

var G__41714 = args41712.length;
switch (G__41714) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41712.length)].join('')));

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
var c__28608__auto___41787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___41787,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___41787,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41753){
var state_val_41754 = (state_41753[(1)]);
if((state_val_41754 === (7))){
var state_41753__$1 = state_41753;
var statearr_41755_41788 = state_41753__$1;
(statearr_41755_41788[(2)] = null);

(statearr_41755_41788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (1))){
var state_41753__$1 = state_41753;
var statearr_41756_41789 = state_41753__$1;
(statearr_41756_41789[(2)] = null);

(statearr_41756_41789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (4))){
var inst_41717 = (state_41753[(7)]);
var inst_41719 = (inst_41717 < cnt);
var state_41753__$1 = state_41753;
if(cljs.core.truth_(inst_41719)){
var statearr_41757_41790 = state_41753__$1;
(statearr_41757_41790[(1)] = (6));

} else {
var statearr_41758_41791 = state_41753__$1;
(statearr_41758_41791[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (15))){
var inst_41749 = (state_41753[(2)]);
var state_41753__$1 = state_41753;
var statearr_41759_41792 = state_41753__$1;
(statearr_41759_41792[(2)] = inst_41749);

(statearr_41759_41792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (13))){
var inst_41742 = cljs.core.async.close_BANG_.call(null,out);
var state_41753__$1 = state_41753;
var statearr_41760_41793 = state_41753__$1;
(statearr_41760_41793[(2)] = inst_41742);

(statearr_41760_41793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (6))){
var state_41753__$1 = state_41753;
var statearr_41761_41794 = state_41753__$1;
(statearr_41761_41794[(2)] = null);

(statearr_41761_41794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (3))){
var inst_41751 = (state_41753[(2)]);
var state_41753__$1 = state_41753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41753__$1,inst_41751);
} else {
if((state_val_41754 === (12))){
var inst_41739 = (state_41753[(8)]);
var inst_41739__$1 = (state_41753[(2)]);
var inst_41740 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41739__$1);
var state_41753__$1 = (function (){var statearr_41762 = state_41753;
(statearr_41762[(8)] = inst_41739__$1);

return statearr_41762;
})();
if(cljs.core.truth_(inst_41740)){
var statearr_41763_41795 = state_41753__$1;
(statearr_41763_41795[(1)] = (13));

} else {
var statearr_41764_41796 = state_41753__$1;
(statearr_41764_41796[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (2))){
var inst_41716 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41717 = (0);
var state_41753__$1 = (function (){var statearr_41765 = state_41753;
(statearr_41765[(7)] = inst_41717);

(statearr_41765[(9)] = inst_41716);

return statearr_41765;
})();
var statearr_41766_41797 = state_41753__$1;
(statearr_41766_41797[(2)] = null);

(statearr_41766_41797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (11))){
var inst_41717 = (state_41753[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41753,(10),Object,null,(9));
var inst_41726 = chs__$1.call(null,inst_41717);
var inst_41727 = done.call(null,inst_41717);
var inst_41728 = cljs.core.async.take_BANG_.call(null,inst_41726,inst_41727);
var state_41753__$1 = state_41753;
var statearr_41767_41798 = state_41753__$1;
(statearr_41767_41798[(2)] = inst_41728);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41753__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (9))){
var inst_41717 = (state_41753[(7)]);
var inst_41730 = (state_41753[(2)]);
var inst_41731 = (inst_41717 + (1));
var inst_41717__$1 = inst_41731;
var state_41753__$1 = (function (){var statearr_41768 = state_41753;
(statearr_41768[(10)] = inst_41730);

(statearr_41768[(7)] = inst_41717__$1);

return statearr_41768;
})();
var statearr_41769_41799 = state_41753__$1;
(statearr_41769_41799[(2)] = null);

(statearr_41769_41799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (5))){
var inst_41737 = (state_41753[(2)]);
var state_41753__$1 = (function (){var statearr_41770 = state_41753;
(statearr_41770[(11)] = inst_41737);

return statearr_41770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41753__$1,(12),dchan);
} else {
if((state_val_41754 === (14))){
var inst_41739 = (state_41753[(8)]);
var inst_41744 = cljs.core.apply.call(null,f,inst_41739);
var state_41753__$1 = state_41753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41753__$1,(16),out,inst_41744);
} else {
if((state_val_41754 === (16))){
var inst_41746 = (state_41753[(2)]);
var state_41753__$1 = (function (){var statearr_41771 = state_41753;
(statearr_41771[(12)] = inst_41746);

return statearr_41771;
})();
var statearr_41772_41800 = state_41753__$1;
(statearr_41772_41800[(2)] = null);

(statearr_41772_41800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (10))){
var inst_41721 = (state_41753[(2)]);
var inst_41722 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41753__$1 = (function (){var statearr_41773 = state_41753;
(statearr_41773[(13)] = inst_41721);

return statearr_41773;
})();
var statearr_41774_41801 = state_41753__$1;
(statearr_41774_41801[(2)] = inst_41722);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41753__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41754 === (8))){
var inst_41735 = (state_41753[(2)]);
var state_41753__$1 = state_41753;
var statearr_41775_41802 = state_41753__$1;
(statearr_41775_41802[(2)] = inst_41735);

(statearr_41775_41802[(1)] = (5));


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
});})(c__28608__auto___41787,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28496__auto__,c__28608__auto___41787,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_41779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41779[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_41779[(1)] = (1));

return statearr_41779;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_41753){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_41753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e41780){if((e41780 instanceof Object)){
var ex__28500__auto__ = e41780;
var statearr_41781_41803 = state_41753;
(statearr_41781_41803[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41804 = state_41753;
state_41753 = G__41804;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_41753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_41753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___41787,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28610__auto__ = (function (){var statearr_41782 = f__28609__auto__.call(null);
(statearr_41782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___41787);

return statearr_41782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___41787,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args41806 = [];
var len__25865__auto___41864 = arguments.length;
var i__25866__auto___41865 = (0);
while(true){
if((i__25866__auto___41865 < len__25865__auto___41864)){
args41806.push((arguments[i__25866__auto___41865]));

var G__41866 = (i__25866__auto___41865 + (1));
i__25866__auto___41865 = G__41866;
continue;
} else {
}
break;
}

var G__41808 = args41806.length;
switch (G__41808) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41806.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___41868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___41868,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___41868,out){
return (function (state_41840){
var state_val_41841 = (state_41840[(1)]);
if((state_val_41841 === (7))){
var inst_41819 = (state_41840[(7)]);
var inst_41820 = (state_41840[(8)]);
var inst_41819__$1 = (state_41840[(2)]);
var inst_41820__$1 = cljs.core.nth.call(null,inst_41819__$1,(0),null);
var inst_41821 = cljs.core.nth.call(null,inst_41819__$1,(1),null);
var inst_41822 = (inst_41820__$1 == null);
var state_41840__$1 = (function (){var statearr_41842 = state_41840;
(statearr_41842[(7)] = inst_41819__$1);

(statearr_41842[(8)] = inst_41820__$1);

(statearr_41842[(9)] = inst_41821);

return statearr_41842;
})();
if(cljs.core.truth_(inst_41822)){
var statearr_41843_41869 = state_41840__$1;
(statearr_41843_41869[(1)] = (8));

} else {
var statearr_41844_41870 = state_41840__$1;
(statearr_41844_41870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (1))){
var inst_41809 = cljs.core.vec.call(null,chs);
var inst_41810 = inst_41809;
var state_41840__$1 = (function (){var statearr_41845 = state_41840;
(statearr_41845[(10)] = inst_41810);

return statearr_41845;
})();
var statearr_41846_41871 = state_41840__$1;
(statearr_41846_41871[(2)] = null);

(statearr_41846_41871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (4))){
var inst_41810 = (state_41840[(10)]);
var state_41840__$1 = state_41840;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41840__$1,(7),inst_41810);
} else {
if((state_val_41841 === (6))){
var inst_41836 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41847_41872 = state_41840__$1;
(statearr_41847_41872[(2)] = inst_41836);

(statearr_41847_41872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (3))){
var inst_41838 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41840__$1,inst_41838);
} else {
if((state_val_41841 === (2))){
var inst_41810 = (state_41840[(10)]);
var inst_41812 = cljs.core.count.call(null,inst_41810);
var inst_41813 = (inst_41812 > (0));
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41813)){
var statearr_41849_41873 = state_41840__$1;
(statearr_41849_41873[(1)] = (4));

} else {
var statearr_41850_41874 = state_41840__$1;
(statearr_41850_41874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (11))){
var inst_41810 = (state_41840[(10)]);
var inst_41829 = (state_41840[(2)]);
var tmp41848 = inst_41810;
var inst_41810__$1 = tmp41848;
var state_41840__$1 = (function (){var statearr_41851 = state_41840;
(statearr_41851[(10)] = inst_41810__$1);

(statearr_41851[(11)] = inst_41829);

return statearr_41851;
})();
var statearr_41852_41875 = state_41840__$1;
(statearr_41852_41875[(2)] = null);

(statearr_41852_41875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (9))){
var inst_41820 = (state_41840[(8)]);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41840__$1,(11),out,inst_41820);
} else {
if((state_val_41841 === (5))){
var inst_41834 = cljs.core.async.close_BANG_.call(null,out);
var state_41840__$1 = state_41840;
var statearr_41853_41876 = state_41840__$1;
(statearr_41853_41876[(2)] = inst_41834);

(statearr_41853_41876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (10))){
var inst_41832 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41854_41877 = state_41840__$1;
(statearr_41854_41877[(2)] = inst_41832);

(statearr_41854_41877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (8))){
var inst_41810 = (state_41840[(10)]);
var inst_41819 = (state_41840[(7)]);
var inst_41820 = (state_41840[(8)]);
var inst_41821 = (state_41840[(9)]);
var inst_41824 = (function (){var cs = inst_41810;
var vec__41815 = inst_41819;
var v = inst_41820;
var c = inst_41821;
return ((function (cs,vec__41815,v,c,inst_41810,inst_41819,inst_41820,inst_41821,state_val_41841,c__28608__auto___41868,out){
return (function (p1__41805_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41805_SHARP_);
});
;})(cs,vec__41815,v,c,inst_41810,inst_41819,inst_41820,inst_41821,state_val_41841,c__28608__auto___41868,out))
})();
var inst_41825 = cljs.core.filterv.call(null,inst_41824,inst_41810);
var inst_41810__$1 = inst_41825;
var state_41840__$1 = (function (){var statearr_41855 = state_41840;
(statearr_41855[(10)] = inst_41810__$1);

return statearr_41855;
})();
var statearr_41856_41878 = state_41840__$1;
(statearr_41856_41878[(2)] = null);

(statearr_41856_41878[(1)] = (2));


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
});})(c__28608__auto___41868,out))
;
return ((function (switch__28496__auto__,c__28608__auto___41868,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_41860 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41860[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_41860[(1)] = (1));

return statearr_41860;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_41840){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_41840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e41861){if((e41861 instanceof Object)){
var ex__28500__auto__ = e41861;
var statearr_41862_41879 = state_41840;
(statearr_41862_41879[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41880 = state_41840;
state_41840 = G__41880;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_41840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_41840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___41868,out))
})();
var state__28610__auto__ = (function (){var statearr_41863 = f__28609__auto__.call(null);
(statearr_41863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___41868);

return statearr_41863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___41868,out))
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
var args41881 = [];
var len__25865__auto___41930 = arguments.length;
var i__25866__auto___41931 = (0);
while(true){
if((i__25866__auto___41931 < len__25865__auto___41930)){
args41881.push((arguments[i__25866__auto___41931]));

var G__41932 = (i__25866__auto___41931 + (1));
i__25866__auto___41931 = G__41932;
continue;
} else {
}
break;
}

var G__41883 = args41881.length;
switch (G__41883) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41881.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___41934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___41934,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___41934,out){
return (function (state_41907){
var state_val_41908 = (state_41907[(1)]);
if((state_val_41908 === (7))){
var inst_41889 = (state_41907[(7)]);
var inst_41889__$1 = (state_41907[(2)]);
var inst_41890 = (inst_41889__$1 == null);
var inst_41891 = cljs.core.not.call(null,inst_41890);
var state_41907__$1 = (function (){var statearr_41909 = state_41907;
(statearr_41909[(7)] = inst_41889__$1);

return statearr_41909;
})();
if(inst_41891){
var statearr_41910_41935 = state_41907__$1;
(statearr_41910_41935[(1)] = (8));

} else {
var statearr_41911_41936 = state_41907__$1;
(statearr_41911_41936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (1))){
var inst_41884 = (0);
var state_41907__$1 = (function (){var statearr_41912 = state_41907;
(statearr_41912[(8)] = inst_41884);

return statearr_41912;
})();
var statearr_41913_41937 = state_41907__$1;
(statearr_41913_41937[(2)] = null);

(statearr_41913_41937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (4))){
var state_41907__$1 = state_41907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41907__$1,(7),ch);
} else {
if((state_val_41908 === (6))){
var inst_41902 = (state_41907[(2)]);
var state_41907__$1 = state_41907;
var statearr_41914_41938 = state_41907__$1;
(statearr_41914_41938[(2)] = inst_41902);

(statearr_41914_41938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (3))){
var inst_41904 = (state_41907[(2)]);
var inst_41905 = cljs.core.async.close_BANG_.call(null,out);
var state_41907__$1 = (function (){var statearr_41915 = state_41907;
(statearr_41915[(9)] = inst_41904);

return statearr_41915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41907__$1,inst_41905);
} else {
if((state_val_41908 === (2))){
var inst_41884 = (state_41907[(8)]);
var inst_41886 = (inst_41884 < n);
var state_41907__$1 = state_41907;
if(cljs.core.truth_(inst_41886)){
var statearr_41916_41939 = state_41907__$1;
(statearr_41916_41939[(1)] = (4));

} else {
var statearr_41917_41940 = state_41907__$1;
(statearr_41917_41940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (11))){
var inst_41884 = (state_41907[(8)]);
var inst_41894 = (state_41907[(2)]);
var inst_41895 = (inst_41884 + (1));
var inst_41884__$1 = inst_41895;
var state_41907__$1 = (function (){var statearr_41918 = state_41907;
(statearr_41918[(10)] = inst_41894);

(statearr_41918[(8)] = inst_41884__$1);

return statearr_41918;
})();
var statearr_41919_41941 = state_41907__$1;
(statearr_41919_41941[(2)] = null);

(statearr_41919_41941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (9))){
var state_41907__$1 = state_41907;
var statearr_41920_41942 = state_41907__$1;
(statearr_41920_41942[(2)] = null);

(statearr_41920_41942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (5))){
var state_41907__$1 = state_41907;
var statearr_41921_41943 = state_41907__$1;
(statearr_41921_41943[(2)] = null);

(statearr_41921_41943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (10))){
var inst_41899 = (state_41907[(2)]);
var state_41907__$1 = state_41907;
var statearr_41922_41944 = state_41907__$1;
(statearr_41922_41944[(2)] = inst_41899);

(statearr_41922_41944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (8))){
var inst_41889 = (state_41907[(7)]);
var state_41907__$1 = state_41907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41907__$1,(11),out,inst_41889);
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
});})(c__28608__auto___41934,out))
;
return ((function (switch__28496__auto__,c__28608__auto___41934,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_41926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41926[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_41926[(1)] = (1));

return statearr_41926;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_41907){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_41907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e41927){if((e41927 instanceof Object)){
var ex__28500__auto__ = e41927;
var statearr_41928_41945 = state_41907;
(statearr_41928_41945[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41946 = state_41907;
state_41907 = G__41946;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_41907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_41907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___41934,out))
})();
var state__28610__auto__ = (function (){var statearr_41929 = f__28609__auto__.call(null);
(statearr_41929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___41934);

return statearr_41929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___41934,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41954 = (function (map_LT_,f,ch,meta41955){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41955 = meta41955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41956,meta41955__$1){
var self__ = this;
var _41956__$1 = this;
return (new cljs.core.async.t_cljs$core$async41954(self__.map_LT_,self__.f,self__.ch,meta41955__$1));
});

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41956){
var self__ = this;
var _41956__$1 = this;
return self__.meta41955;
});

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41957 = (function (map_LT_,f,ch,meta41955,_,fn1,meta41958){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41955 = meta41955;
this._ = _;
this.fn1 = fn1;
this.meta41958 = meta41958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41959,meta41958__$1){
var self__ = this;
var _41959__$1 = this;
return (new cljs.core.async.t_cljs$core$async41957(self__.map_LT_,self__.f,self__.ch,self__.meta41955,self__._,self__.fn1,meta41958__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41959){
var self__ = this;
var _41959__$1 = this;
return self__.meta41958;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41957.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41947_SHARP_){
return f1.call(null,(((p1__41947_SHARP_ == null))?null:self__.f.call(null,p1__41947_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41957.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41955","meta41955",1541598620,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41954","cljs.core.async/t_cljs$core$async41954",-1523204007,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41958","meta41958",-435435877,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41957";

cljs.core.async.t_cljs$core$async41957.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async41957");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41957 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41957(map_LT___$1,f__$1,ch__$1,meta41955__$1,___$2,fn1__$1,meta41958){
return (new cljs.core.async.t_cljs$core$async41957(map_LT___$1,f__$1,ch__$1,meta41955__$1,___$2,fn1__$1,meta41958));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41957(self__.map_LT_,self__.f,self__.ch,self__.meta41955,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41955","meta41955",1541598620,null)], null);
});

cljs.core.async.t_cljs$core$async41954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41954";

cljs.core.async.t_cljs$core$async41954.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async41954");
});

cljs.core.async.__GT_t_cljs$core$async41954 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41954(map_LT___$1,f__$1,ch__$1,meta41955){
return (new cljs.core.async.t_cljs$core$async41954(map_LT___$1,f__$1,ch__$1,meta41955));
});

}

return (new cljs.core.async.t_cljs$core$async41954(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41963 = (function (map_GT_,f,ch,meta41964){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta41964 = meta41964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41965,meta41964__$1){
var self__ = this;
var _41965__$1 = this;
return (new cljs.core.async.t_cljs$core$async41963(self__.map_GT_,self__.f,self__.ch,meta41964__$1));
});

cljs.core.async.t_cljs$core$async41963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41965){
var self__ = this;
var _41965__$1 = this;
return self__.meta41964;
});

cljs.core.async.t_cljs$core$async41963.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41963.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41963.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41964","meta41964",442797660,null)], null);
});

cljs.core.async.t_cljs$core$async41963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41963";

cljs.core.async.t_cljs$core$async41963.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async41963");
});

cljs.core.async.__GT_t_cljs$core$async41963 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41963(map_GT___$1,f__$1,ch__$1,meta41964){
return (new cljs.core.async.t_cljs$core$async41963(map_GT___$1,f__$1,ch__$1,meta41964));
});

}

return (new cljs.core.async.t_cljs$core$async41963(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41969 = (function (filter_GT_,p,ch,meta41970){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta41970 = meta41970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41971,meta41970__$1){
var self__ = this;
var _41971__$1 = this;
return (new cljs.core.async.t_cljs$core$async41969(self__.filter_GT_,self__.p,self__.ch,meta41970__$1));
});

cljs.core.async.t_cljs$core$async41969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41971){
var self__ = this;
var _41971__$1 = this;
return self__.meta41970;
});

cljs.core.async.t_cljs$core$async41969.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41969.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41969.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41969.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41970","meta41970",-533739544,null)], null);
});

cljs.core.async.t_cljs$core$async41969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41969";

cljs.core.async.t_cljs$core$async41969.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async41969");
});

cljs.core.async.__GT_t_cljs$core$async41969 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41969(filter_GT___$1,p__$1,ch__$1,meta41970){
return (new cljs.core.async.t_cljs$core$async41969(filter_GT___$1,p__$1,ch__$1,meta41970));
});

}

return (new cljs.core.async.t_cljs$core$async41969(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args41972 = [];
var len__25865__auto___42016 = arguments.length;
var i__25866__auto___42017 = (0);
while(true){
if((i__25866__auto___42017 < len__25865__auto___42016)){
args41972.push((arguments[i__25866__auto___42017]));

var G__42018 = (i__25866__auto___42017 + (1));
i__25866__auto___42017 = G__42018;
continue;
} else {
}
break;
}

var G__41974 = args41972.length;
switch (G__41974) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41972.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___42020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___42020,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___42020,out){
return (function (state_41995){
var state_val_41996 = (state_41995[(1)]);
if((state_val_41996 === (7))){
var inst_41991 = (state_41995[(2)]);
var state_41995__$1 = state_41995;
var statearr_41997_42021 = state_41995__$1;
(statearr_41997_42021[(2)] = inst_41991);

(statearr_41997_42021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41996 === (1))){
var state_41995__$1 = state_41995;
var statearr_41998_42022 = state_41995__$1;
(statearr_41998_42022[(2)] = null);

(statearr_41998_42022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41996 === (4))){
var inst_41977 = (state_41995[(7)]);
var inst_41977__$1 = (state_41995[(2)]);
var inst_41978 = (inst_41977__$1 == null);
var state_41995__$1 = (function (){var statearr_41999 = state_41995;
(statearr_41999[(7)] = inst_41977__$1);

return statearr_41999;
})();
if(cljs.core.truth_(inst_41978)){
var statearr_42000_42023 = state_41995__$1;
(statearr_42000_42023[(1)] = (5));

} else {
var statearr_42001_42024 = state_41995__$1;
(statearr_42001_42024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41996 === (6))){
var inst_41977 = (state_41995[(7)]);
var inst_41982 = p.call(null,inst_41977);
var state_41995__$1 = state_41995;
if(cljs.core.truth_(inst_41982)){
var statearr_42002_42025 = state_41995__$1;
(statearr_42002_42025[(1)] = (8));

} else {
var statearr_42003_42026 = state_41995__$1;
(statearr_42003_42026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41996 === (3))){
var inst_41993 = (state_41995[(2)]);
var state_41995__$1 = state_41995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41995__$1,inst_41993);
} else {
if((state_val_41996 === (2))){
var state_41995__$1 = state_41995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41995__$1,(4),ch);
} else {
if((state_val_41996 === (11))){
var inst_41985 = (state_41995[(2)]);
var state_41995__$1 = state_41995;
var statearr_42004_42027 = state_41995__$1;
(statearr_42004_42027[(2)] = inst_41985);

(statearr_42004_42027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41996 === (9))){
var state_41995__$1 = state_41995;
var statearr_42005_42028 = state_41995__$1;
(statearr_42005_42028[(2)] = null);

(statearr_42005_42028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41996 === (5))){
var inst_41980 = cljs.core.async.close_BANG_.call(null,out);
var state_41995__$1 = state_41995;
var statearr_42006_42029 = state_41995__$1;
(statearr_42006_42029[(2)] = inst_41980);

(statearr_42006_42029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41996 === (10))){
var inst_41988 = (state_41995[(2)]);
var state_41995__$1 = (function (){var statearr_42007 = state_41995;
(statearr_42007[(8)] = inst_41988);

return statearr_42007;
})();
var statearr_42008_42030 = state_41995__$1;
(statearr_42008_42030[(2)] = null);

(statearr_42008_42030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41996 === (8))){
var inst_41977 = (state_41995[(7)]);
var state_41995__$1 = state_41995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41995__$1,(11),out,inst_41977);
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
});})(c__28608__auto___42020,out))
;
return ((function (switch__28496__auto__,c__28608__auto___42020,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_42012 = [null,null,null,null,null,null,null,null,null];
(statearr_42012[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_42012[(1)] = (1));

return statearr_42012;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_41995){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_41995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e42013){if((e42013 instanceof Object)){
var ex__28500__auto__ = e42013;
var statearr_42014_42031 = state_41995;
(statearr_42014_42031[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42032 = state_41995;
state_41995 = G__42032;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_41995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_41995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___42020,out))
})();
var state__28610__auto__ = (function (){var statearr_42015 = f__28609__auto__.call(null);
(statearr_42015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___42020);

return statearr_42015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___42020,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42033 = [];
var len__25865__auto___42036 = arguments.length;
var i__25866__auto___42037 = (0);
while(true){
if((i__25866__auto___42037 < len__25865__auto___42036)){
args42033.push((arguments[i__25866__auto___42037]));

var G__42038 = (i__25866__auto___42037 + (1));
i__25866__auto___42037 = G__42038;
continue;
} else {
}
break;
}

var G__42035 = args42033.length;
switch (G__42035) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42033.length)].join('')));

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
return (function (state_42205){
var state_val_42206 = (state_42205[(1)]);
if((state_val_42206 === (7))){
var inst_42201 = (state_42205[(2)]);
var state_42205__$1 = state_42205;
var statearr_42207_42248 = state_42205__$1;
(statearr_42207_42248[(2)] = inst_42201);

(statearr_42207_42248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (20))){
var inst_42171 = (state_42205[(7)]);
var inst_42182 = (state_42205[(2)]);
var inst_42183 = cljs.core.next.call(null,inst_42171);
var inst_42157 = inst_42183;
var inst_42158 = null;
var inst_42159 = (0);
var inst_42160 = (0);
var state_42205__$1 = (function (){var statearr_42208 = state_42205;
(statearr_42208[(8)] = inst_42182);

(statearr_42208[(9)] = inst_42157);

(statearr_42208[(10)] = inst_42158);

(statearr_42208[(11)] = inst_42160);

(statearr_42208[(12)] = inst_42159);

return statearr_42208;
})();
var statearr_42209_42249 = state_42205__$1;
(statearr_42209_42249[(2)] = null);

(statearr_42209_42249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (1))){
var state_42205__$1 = state_42205;
var statearr_42210_42250 = state_42205__$1;
(statearr_42210_42250[(2)] = null);

(statearr_42210_42250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (4))){
var inst_42146 = (state_42205[(13)]);
var inst_42146__$1 = (state_42205[(2)]);
var inst_42147 = (inst_42146__$1 == null);
var state_42205__$1 = (function (){var statearr_42211 = state_42205;
(statearr_42211[(13)] = inst_42146__$1);

return statearr_42211;
})();
if(cljs.core.truth_(inst_42147)){
var statearr_42212_42251 = state_42205__$1;
(statearr_42212_42251[(1)] = (5));

} else {
var statearr_42213_42252 = state_42205__$1;
(statearr_42213_42252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (15))){
var state_42205__$1 = state_42205;
var statearr_42217_42253 = state_42205__$1;
(statearr_42217_42253[(2)] = null);

(statearr_42217_42253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (21))){
var state_42205__$1 = state_42205;
var statearr_42218_42254 = state_42205__$1;
(statearr_42218_42254[(2)] = null);

(statearr_42218_42254[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (13))){
var inst_42157 = (state_42205[(9)]);
var inst_42158 = (state_42205[(10)]);
var inst_42160 = (state_42205[(11)]);
var inst_42159 = (state_42205[(12)]);
var inst_42167 = (state_42205[(2)]);
var inst_42168 = (inst_42160 + (1));
var tmp42214 = inst_42157;
var tmp42215 = inst_42158;
var tmp42216 = inst_42159;
var inst_42157__$1 = tmp42214;
var inst_42158__$1 = tmp42215;
var inst_42159__$1 = tmp42216;
var inst_42160__$1 = inst_42168;
var state_42205__$1 = (function (){var statearr_42219 = state_42205;
(statearr_42219[(14)] = inst_42167);

(statearr_42219[(9)] = inst_42157__$1);

(statearr_42219[(10)] = inst_42158__$1);

(statearr_42219[(11)] = inst_42160__$1);

(statearr_42219[(12)] = inst_42159__$1);

return statearr_42219;
})();
var statearr_42220_42255 = state_42205__$1;
(statearr_42220_42255[(2)] = null);

(statearr_42220_42255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (22))){
var state_42205__$1 = state_42205;
var statearr_42221_42256 = state_42205__$1;
(statearr_42221_42256[(2)] = null);

(statearr_42221_42256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (6))){
var inst_42146 = (state_42205[(13)]);
var inst_42155 = f.call(null,inst_42146);
var inst_42156 = cljs.core.seq.call(null,inst_42155);
var inst_42157 = inst_42156;
var inst_42158 = null;
var inst_42159 = (0);
var inst_42160 = (0);
var state_42205__$1 = (function (){var statearr_42222 = state_42205;
(statearr_42222[(9)] = inst_42157);

(statearr_42222[(10)] = inst_42158);

(statearr_42222[(11)] = inst_42160);

(statearr_42222[(12)] = inst_42159);

return statearr_42222;
})();
var statearr_42223_42257 = state_42205__$1;
(statearr_42223_42257[(2)] = null);

(statearr_42223_42257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (17))){
var inst_42171 = (state_42205[(7)]);
var inst_42175 = cljs.core.chunk_first.call(null,inst_42171);
var inst_42176 = cljs.core.chunk_rest.call(null,inst_42171);
var inst_42177 = cljs.core.count.call(null,inst_42175);
var inst_42157 = inst_42176;
var inst_42158 = inst_42175;
var inst_42159 = inst_42177;
var inst_42160 = (0);
var state_42205__$1 = (function (){var statearr_42224 = state_42205;
(statearr_42224[(9)] = inst_42157);

(statearr_42224[(10)] = inst_42158);

(statearr_42224[(11)] = inst_42160);

(statearr_42224[(12)] = inst_42159);

return statearr_42224;
})();
var statearr_42225_42258 = state_42205__$1;
(statearr_42225_42258[(2)] = null);

(statearr_42225_42258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (3))){
var inst_42203 = (state_42205[(2)]);
var state_42205__$1 = state_42205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42205__$1,inst_42203);
} else {
if((state_val_42206 === (12))){
var inst_42191 = (state_42205[(2)]);
var state_42205__$1 = state_42205;
var statearr_42226_42259 = state_42205__$1;
(statearr_42226_42259[(2)] = inst_42191);

(statearr_42226_42259[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (2))){
var state_42205__$1 = state_42205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42205__$1,(4),in$);
} else {
if((state_val_42206 === (23))){
var inst_42199 = (state_42205[(2)]);
var state_42205__$1 = state_42205;
var statearr_42227_42260 = state_42205__$1;
(statearr_42227_42260[(2)] = inst_42199);

(statearr_42227_42260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (19))){
var inst_42186 = (state_42205[(2)]);
var state_42205__$1 = state_42205;
var statearr_42228_42261 = state_42205__$1;
(statearr_42228_42261[(2)] = inst_42186);

(statearr_42228_42261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (11))){
var inst_42171 = (state_42205[(7)]);
var inst_42157 = (state_42205[(9)]);
var inst_42171__$1 = cljs.core.seq.call(null,inst_42157);
var state_42205__$1 = (function (){var statearr_42229 = state_42205;
(statearr_42229[(7)] = inst_42171__$1);

return statearr_42229;
})();
if(inst_42171__$1){
var statearr_42230_42262 = state_42205__$1;
(statearr_42230_42262[(1)] = (14));

} else {
var statearr_42231_42263 = state_42205__$1;
(statearr_42231_42263[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (9))){
var inst_42193 = (state_42205[(2)]);
var inst_42194 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42205__$1 = (function (){var statearr_42232 = state_42205;
(statearr_42232[(15)] = inst_42193);

return statearr_42232;
})();
if(cljs.core.truth_(inst_42194)){
var statearr_42233_42264 = state_42205__$1;
(statearr_42233_42264[(1)] = (21));

} else {
var statearr_42234_42265 = state_42205__$1;
(statearr_42234_42265[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (5))){
var inst_42149 = cljs.core.async.close_BANG_.call(null,out);
var state_42205__$1 = state_42205;
var statearr_42235_42266 = state_42205__$1;
(statearr_42235_42266[(2)] = inst_42149);

(statearr_42235_42266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (14))){
var inst_42171 = (state_42205[(7)]);
var inst_42173 = cljs.core.chunked_seq_QMARK_.call(null,inst_42171);
var state_42205__$1 = state_42205;
if(inst_42173){
var statearr_42236_42267 = state_42205__$1;
(statearr_42236_42267[(1)] = (17));

} else {
var statearr_42237_42268 = state_42205__$1;
(statearr_42237_42268[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (16))){
var inst_42189 = (state_42205[(2)]);
var state_42205__$1 = state_42205;
var statearr_42238_42269 = state_42205__$1;
(statearr_42238_42269[(2)] = inst_42189);

(statearr_42238_42269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42206 === (10))){
var inst_42158 = (state_42205[(10)]);
var inst_42160 = (state_42205[(11)]);
var inst_42165 = cljs.core._nth.call(null,inst_42158,inst_42160);
var state_42205__$1 = state_42205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42205__$1,(13),out,inst_42165);
} else {
if((state_val_42206 === (18))){
var inst_42171 = (state_42205[(7)]);
var inst_42180 = cljs.core.first.call(null,inst_42171);
var state_42205__$1 = state_42205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42205__$1,(20),out,inst_42180);
} else {
if((state_val_42206 === (8))){
var inst_42160 = (state_42205[(11)]);
var inst_42159 = (state_42205[(12)]);
var inst_42162 = (inst_42160 < inst_42159);
var inst_42163 = inst_42162;
var state_42205__$1 = state_42205;
if(cljs.core.truth_(inst_42163)){
var statearr_42239_42270 = state_42205__$1;
(statearr_42239_42270[(1)] = (10));

} else {
var statearr_42240_42271 = state_42205__$1;
(statearr_42240_42271[(1)] = (11));

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
var statearr_42244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42244[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__);

(statearr_42244[(1)] = (1));

return statearr_42244;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____1 = (function (state_42205){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_42205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e42245){if((e42245 instanceof Object)){
var ex__28500__auto__ = e42245;
var statearr_42246_42272 = state_42205;
(statearr_42246_42272[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42273 = state_42205;
state_42205 = G__42273;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__ = function(state_42205){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____1.call(this,state_42205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28497__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto__))
})();
var state__28610__auto__ = (function (){var statearr_42247 = f__28609__auto__.call(null);
(statearr_42247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto__);

return statearr_42247;
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
var args42274 = [];
var len__25865__auto___42277 = arguments.length;
var i__25866__auto___42278 = (0);
while(true){
if((i__25866__auto___42278 < len__25865__auto___42277)){
args42274.push((arguments[i__25866__auto___42278]));

var G__42279 = (i__25866__auto___42278 + (1));
i__25866__auto___42278 = G__42279;
continue;
} else {
}
break;
}

var G__42276 = args42274.length;
switch (G__42276) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42274.length)].join('')));

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
var args42281 = [];
var len__25865__auto___42284 = arguments.length;
var i__25866__auto___42285 = (0);
while(true){
if((i__25866__auto___42285 < len__25865__auto___42284)){
args42281.push((arguments[i__25866__auto___42285]));

var G__42286 = (i__25866__auto___42285 + (1));
i__25866__auto___42285 = G__42286;
continue;
} else {
}
break;
}

var G__42283 = args42281.length;
switch (G__42283) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42281.length)].join('')));

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
var args42288 = [];
var len__25865__auto___42339 = arguments.length;
var i__25866__auto___42340 = (0);
while(true){
if((i__25866__auto___42340 < len__25865__auto___42339)){
args42288.push((arguments[i__25866__auto___42340]));

var G__42341 = (i__25866__auto___42340 + (1));
i__25866__auto___42340 = G__42341;
continue;
} else {
}
break;
}

var G__42290 = args42288.length;
switch (G__42290) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42288.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___42343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___42343,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___42343,out){
return (function (state_42314){
var state_val_42315 = (state_42314[(1)]);
if((state_val_42315 === (7))){
var inst_42309 = (state_42314[(2)]);
var state_42314__$1 = state_42314;
var statearr_42316_42344 = state_42314__$1;
(statearr_42316_42344[(2)] = inst_42309);

(statearr_42316_42344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42315 === (1))){
var inst_42291 = null;
var state_42314__$1 = (function (){var statearr_42317 = state_42314;
(statearr_42317[(7)] = inst_42291);

return statearr_42317;
})();
var statearr_42318_42345 = state_42314__$1;
(statearr_42318_42345[(2)] = null);

(statearr_42318_42345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42315 === (4))){
var inst_42294 = (state_42314[(8)]);
var inst_42294__$1 = (state_42314[(2)]);
var inst_42295 = (inst_42294__$1 == null);
var inst_42296 = cljs.core.not.call(null,inst_42295);
var state_42314__$1 = (function (){var statearr_42319 = state_42314;
(statearr_42319[(8)] = inst_42294__$1);

return statearr_42319;
})();
if(inst_42296){
var statearr_42320_42346 = state_42314__$1;
(statearr_42320_42346[(1)] = (5));

} else {
var statearr_42321_42347 = state_42314__$1;
(statearr_42321_42347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42315 === (6))){
var state_42314__$1 = state_42314;
var statearr_42322_42348 = state_42314__$1;
(statearr_42322_42348[(2)] = null);

(statearr_42322_42348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42315 === (3))){
var inst_42311 = (state_42314[(2)]);
var inst_42312 = cljs.core.async.close_BANG_.call(null,out);
var state_42314__$1 = (function (){var statearr_42323 = state_42314;
(statearr_42323[(9)] = inst_42311);

return statearr_42323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42314__$1,inst_42312);
} else {
if((state_val_42315 === (2))){
var state_42314__$1 = state_42314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42314__$1,(4),ch);
} else {
if((state_val_42315 === (11))){
var inst_42294 = (state_42314[(8)]);
var inst_42303 = (state_42314[(2)]);
var inst_42291 = inst_42294;
var state_42314__$1 = (function (){var statearr_42324 = state_42314;
(statearr_42324[(7)] = inst_42291);

(statearr_42324[(10)] = inst_42303);

return statearr_42324;
})();
var statearr_42325_42349 = state_42314__$1;
(statearr_42325_42349[(2)] = null);

(statearr_42325_42349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42315 === (9))){
var inst_42294 = (state_42314[(8)]);
var state_42314__$1 = state_42314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42314__$1,(11),out,inst_42294);
} else {
if((state_val_42315 === (5))){
var inst_42291 = (state_42314[(7)]);
var inst_42294 = (state_42314[(8)]);
var inst_42298 = cljs.core._EQ_.call(null,inst_42294,inst_42291);
var state_42314__$1 = state_42314;
if(inst_42298){
var statearr_42327_42350 = state_42314__$1;
(statearr_42327_42350[(1)] = (8));

} else {
var statearr_42328_42351 = state_42314__$1;
(statearr_42328_42351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42315 === (10))){
var inst_42306 = (state_42314[(2)]);
var state_42314__$1 = state_42314;
var statearr_42329_42352 = state_42314__$1;
(statearr_42329_42352[(2)] = inst_42306);

(statearr_42329_42352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42315 === (8))){
var inst_42291 = (state_42314[(7)]);
var tmp42326 = inst_42291;
var inst_42291__$1 = tmp42326;
var state_42314__$1 = (function (){var statearr_42330 = state_42314;
(statearr_42330[(7)] = inst_42291__$1);

return statearr_42330;
})();
var statearr_42331_42353 = state_42314__$1;
(statearr_42331_42353[(2)] = null);

(statearr_42331_42353[(1)] = (2));


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
});})(c__28608__auto___42343,out))
;
return ((function (switch__28496__auto__,c__28608__auto___42343,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_42335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42335[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_42335[(1)] = (1));

return statearr_42335;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_42314){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_42314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e42336){if((e42336 instanceof Object)){
var ex__28500__auto__ = e42336;
var statearr_42337_42354 = state_42314;
(statearr_42337_42354[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42355 = state_42314;
state_42314 = G__42355;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_42314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_42314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___42343,out))
})();
var state__28610__auto__ = (function (){var statearr_42338 = f__28609__auto__.call(null);
(statearr_42338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___42343);

return statearr_42338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___42343,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42356 = [];
var len__25865__auto___42426 = arguments.length;
var i__25866__auto___42427 = (0);
while(true){
if((i__25866__auto___42427 < len__25865__auto___42426)){
args42356.push((arguments[i__25866__auto___42427]));

var G__42428 = (i__25866__auto___42427 + (1));
i__25866__auto___42427 = G__42428;
continue;
} else {
}
break;
}

var G__42358 = args42356.length;
switch (G__42358) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42356.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___42430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___42430,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___42430,out){
return (function (state_42396){
var state_val_42397 = (state_42396[(1)]);
if((state_val_42397 === (7))){
var inst_42392 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
var statearr_42398_42431 = state_42396__$1;
(statearr_42398_42431[(2)] = inst_42392);

(statearr_42398_42431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (1))){
var inst_42359 = (new Array(n));
var inst_42360 = inst_42359;
var inst_42361 = (0);
var state_42396__$1 = (function (){var statearr_42399 = state_42396;
(statearr_42399[(7)] = inst_42360);

(statearr_42399[(8)] = inst_42361);

return statearr_42399;
})();
var statearr_42400_42432 = state_42396__$1;
(statearr_42400_42432[(2)] = null);

(statearr_42400_42432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (4))){
var inst_42364 = (state_42396[(9)]);
var inst_42364__$1 = (state_42396[(2)]);
var inst_42365 = (inst_42364__$1 == null);
var inst_42366 = cljs.core.not.call(null,inst_42365);
var state_42396__$1 = (function (){var statearr_42401 = state_42396;
(statearr_42401[(9)] = inst_42364__$1);

return statearr_42401;
})();
if(inst_42366){
var statearr_42402_42433 = state_42396__$1;
(statearr_42402_42433[(1)] = (5));

} else {
var statearr_42403_42434 = state_42396__$1;
(statearr_42403_42434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (15))){
var inst_42386 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
var statearr_42404_42435 = state_42396__$1;
(statearr_42404_42435[(2)] = inst_42386);

(statearr_42404_42435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (13))){
var state_42396__$1 = state_42396;
var statearr_42405_42436 = state_42396__$1;
(statearr_42405_42436[(2)] = null);

(statearr_42405_42436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (6))){
var inst_42361 = (state_42396[(8)]);
var inst_42382 = (inst_42361 > (0));
var state_42396__$1 = state_42396;
if(cljs.core.truth_(inst_42382)){
var statearr_42406_42437 = state_42396__$1;
(statearr_42406_42437[(1)] = (12));

} else {
var statearr_42407_42438 = state_42396__$1;
(statearr_42407_42438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (3))){
var inst_42394 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42396__$1,inst_42394);
} else {
if((state_val_42397 === (12))){
var inst_42360 = (state_42396[(7)]);
var inst_42384 = cljs.core.vec.call(null,inst_42360);
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42396__$1,(15),out,inst_42384);
} else {
if((state_val_42397 === (2))){
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42396__$1,(4),ch);
} else {
if((state_val_42397 === (11))){
var inst_42376 = (state_42396[(2)]);
var inst_42377 = (new Array(n));
var inst_42360 = inst_42377;
var inst_42361 = (0);
var state_42396__$1 = (function (){var statearr_42408 = state_42396;
(statearr_42408[(10)] = inst_42376);

(statearr_42408[(7)] = inst_42360);

(statearr_42408[(8)] = inst_42361);

return statearr_42408;
})();
var statearr_42409_42439 = state_42396__$1;
(statearr_42409_42439[(2)] = null);

(statearr_42409_42439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (9))){
var inst_42360 = (state_42396[(7)]);
var inst_42374 = cljs.core.vec.call(null,inst_42360);
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42396__$1,(11),out,inst_42374);
} else {
if((state_val_42397 === (5))){
var inst_42364 = (state_42396[(9)]);
var inst_42360 = (state_42396[(7)]);
var inst_42361 = (state_42396[(8)]);
var inst_42369 = (state_42396[(11)]);
var inst_42368 = (inst_42360[inst_42361] = inst_42364);
var inst_42369__$1 = (inst_42361 + (1));
var inst_42370 = (inst_42369__$1 < n);
var state_42396__$1 = (function (){var statearr_42410 = state_42396;
(statearr_42410[(11)] = inst_42369__$1);

(statearr_42410[(12)] = inst_42368);

return statearr_42410;
})();
if(cljs.core.truth_(inst_42370)){
var statearr_42411_42440 = state_42396__$1;
(statearr_42411_42440[(1)] = (8));

} else {
var statearr_42412_42441 = state_42396__$1;
(statearr_42412_42441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (14))){
var inst_42389 = (state_42396[(2)]);
var inst_42390 = cljs.core.async.close_BANG_.call(null,out);
var state_42396__$1 = (function (){var statearr_42414 = state_42396;
(statearr_42414[(13)] = inst_42389);

return statearr_42414;
})();
var statearr_42415_42442 = state_42396__$1;
(statearr_42415_42442[(2)] = inst_42390);

(statearr_42415_42442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (10))){
var inst_42380 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
var statearr_42416_42443 = state_42396__$1;
(statearr_42416_42443[(2)] = inst_42380);

(statearr_42416_42443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (8))){
var inst_42360 = (state_42396[(7)]);
var inst_42369 = (state_42396[(11)]);
var tmp42413 = inst_42360;
var inst_42360__$1 = tmp42413;
var inst_42361 = inst_42369;
var state_42396__$1 = (function (){var statearr_42417 = state_42396;
(statearr_42417[(7)] = inst_42360__$1);

(statearr_42417[(8)] = inst_42361);

return statearr_42417;
})();
var statearr_42418_42444 = state_42396__$1;
(statearr_42418_42444[(2)] = null);

(statearr_42418_42444[(1)] = (2));


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
});})(c__28608__auto___42430,out))
;
return ((function (switch__28496__auto__,c__28608__auto___42430,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_42422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42422[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_42422[(1)] = (1));

return statearr_42422;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_42396){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_42396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e42423){if((e42423 instanceof Object)){
var ex__28500__auto__ = e42423;
var statearr_42424_42445 = state_42396;
(statearr_42424_42445[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42446 = state_42396;
state_42396 = G__42446;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_42396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_42396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___42430,out))
})();
var state__28610__auto__ = (function (){var statearr_42425 = f__28609__auto__.call(null);
(statearr_42425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___42430);

return statearr_42425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___42430,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42447 = [];
var len__25865__auto___42521 = arguments.length;
var i__25866__auto___42522 = (0);
while(true){
if((i__25866__auto___42522 < len__25865__auto___42521)){
args42447.push((arguments[i__25866__auto___42522]));

var G__42523 = (i__25866__auto___42522 + (1));
i__25866__auto___42522 = G__42523;
continue;
} else {
}
break;
}

var G__42449 = args42447.length;
switch (G__42449) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42447.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28608__auto___42525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28608__auto___42525,out){
return (function (){
var f__28609__auto__ = (function (){var switch__28496__auto__ = ((function (c__28608__auto___42525,out){
return (function (state_42491){
var state_val_42492 = (state_42491[(1)]);
if((state_val_42492 === (7))){
var inst_42487 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
var statearr_42493_42526 = state_42491__$1;
(statearr_42493_42526[(2)] = inst_42487);

(statearr_42493_42526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (1))){
var inst_42450 = [];
var inst_42451 = inst_42450;
var inst_42452 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42491__$1 = (function (){var statearr_42494 = state_42491;
(statearr_42494[(7)] = inst_42452);

(statearr_42494[(8)] = inst_42451);

return statearr_42494;
})();
var statearr_42495_42527 = state_42491__$1;
(statearr_42495_42527[(2)] = null);

(statearr_42495_42527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (4))){
var inst_42455 = (state_42491[(9)]);
var inst_42455__$1 = (state_42491[(2)]);
var inst_42456 = (inst_42455__$1 == null);
var inst_42457 = cljs.core.not.call(null,inst_42456);
var state_42491__$1 = (function (){var statearr_42496 = state_42491;
(statearr_42496[(9)] = inst_42455__$1);

return statearr_42496;
})();
if(inst_42457){
var statearr_42497_42528 = state_42491__$1;
(statearr_42497_42528[(1)] = (5));

} else {
var statearr_42498_42529 = state_42491__$1;
(statearr_42498_42529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (15))){
var inst_42481 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
var statearr_42499_42530 = state_42491__$1;
(statearr_42499_42530[(2)] = inst_42481);

(statearr_42499_42530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (13))){
var state_42491__$1 = state_42491;
var statearr_42500_42531 = state_42491__$1;
(statearr_42500_42531[(2)] = null);

(statearr_42500_42531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (6))){
var inst_42451 = (state_42491[(8)]);
var inst_42476 = inst_42451.length;
var inst_42477 = (inst_42476 > (0));
var state_42491__$1 = state_42491;
if(cljs.core.truth_(inst_42477)){
var statearr_42501_42532 = state_42491__$1;
(statearr_42501_42532[(1)] = (12));

} else {
var statearr_42502_42533 = state_42491__$1;
(statearr_42502_42533[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (3))){
var inst_42489 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42491__$1,inst_42489);
} else {
if((state_val_42492 === (12))){
var inst_42451 = (state_42491[(8)]);
var inst_42479 = cljs.core.vec.call(null,inst_42451);
var state_42491__$1 = state_42491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42491__$1,(15),out,inst_42479);
} else {
if((state_val_42492 === (2))){
var state_42491__$1 = state_42491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42491__$1,(4),ch);
} else {
if((state_val_42492 === (11))){
var inst_42455 = (state_42491[(9)]);
var inst_42459 = (state_42491[(10)]);
var inst_42469 = (state_42491[(2)]);
var inst_42470 = [];
var inst_42471 = inst_42470.push(inst_42455);
var inst_42451 = inst_42470;
var inst_42452 = inst_42459;
var state_42491__$1 = (function (){var statearr_42503 = state_42491;
(statearr_42503[(7)] = inst_42452);

(statearr_42503[(11)] = inst_42471);

(statearr_42503[(12)] = inst_42469);

(statearr_42503[(8)] = inst_42451);

return statearr_42503;
})();
var statearr_42504_42534 = state_42491__$1;
(statearr_42504_42534[(2)] = null);

(statearr_42504_42534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (9))){
var inst_42451 = (state_42491[(8)]);
var inst_42467 = cljs.core.vec.call(null,inst_42451);
var state_42491__$1 = state_42491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42491__$1,(11),out,inst_42467);
} else {
if((state_val_42492 === (5))){
var inst_42452 = (state_42491[(7)]);
var inst_42455 = (state_42491[(9)]);
var inst_42459 = (state_42491[(10)]);
var inst_42459__$1 = f.call(null,inst_42455);
var inst_42460 = cljs.core._EQ_.call(null,inst_42459__$1,inst_42452);
var inst_42461 = cljs.core.keyword_identical_QMARK_.call(null,inst_42452,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42462 = (inst_42460) || (inst_42461);
var state_42491__$1 = (function (){var statearr_42505 = state_42491;
(statearr_42505[(10)] = inst_42459__$1);

return statearr_42505;
})();
if(cljs.core.truth_(inst_42462)){
var statearr_42506_42535 = state_42491__$1;
(statearr_42506_42535[(1)] = (8));

} else {
var statearr_42507_42536 = state_42491__$1;
(statearr_42507_42536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (14))){
var inst_42484 = (state_42491[(2)]);
var inst_42485 = cljs.core.async.close_BANG_.call(null,out);
var state_42491__$1 = (function (){var statearr_42509 = state_42491;
(statearr_42509[(13)] = inst_42484);

return statearr_42509;
})();
var statearr_42510_42537 = state_42491__$1;
(statearr_42510_42537[(2)] = inst_42485);

(statearr_42510_42537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (10))){
var inst_42474 = (state_42491[(2)]);
var state_42491__$1 = state_42491;
var statearr_42511_42538 = state_42491__$1;
(statearr_42511_42538[(2)] = inst_42474);

(statearr_42511_42538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (8))){
var inst_42455 = (state_42491[(9)]);
var inst_42451 = (state_42491[(8)]);
var inst_42459 = (state_42491[(10)]);
var inst_42464 = inst_42451.push(inst_42455);
var tmp42508 = inst_42451;
var inst_42451__$1 = tmp42508;
var inst_42452 = inst_42459;
var state_42491__$1 = (function (){var statearr_42512 = state_42491;
(statearr_42512[(7)] = inst_42452);

(statearr_42512[(14)] = inst_42464);

(statearr_42512[(8)] = inst_42451__$1);

return statearr_42512;
})();
var statearr_42513_42539 = state_42491__$1;
(statearr_42513_42539[(2)] = null);

(statearr_42513_42539[(1)] = (2));


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
});})(c__28608__auto___42525,out))
;
return ((function (switch__28496__auto__,c__28608__auto___42525,out){
return (function() {
var cljs$core$async$state_machine__28497__auto__ = null;
var cljs$core$async$state_machine__28497__auto____0 = (function (){
var statearr_42517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42517[(0)] = cljs$core$async$state_machine__28497__auto__);

(statearr_42517[(1)] = (1));

return statearr_42517;
});
var cljs$core$async$state_machine__28497__auto____1 = (function (state_42491){
while(true){
var ret_value__28498__auto__ = (function (){try{while(true){
var result__28499__auto__ = switch__28496__auto__.call(null,state_42491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28499__auto__;
}
break;
}
}catch (e42518){if((e42518 instanceof Object)){
var ex__28500__auto__ = e42518;
var statearr_42519_42540 = state_42491;
(statearr_42519_42540[(5)] = ex__28500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42541 = state_42491;
state_42491 = G__42541;
continue;
} else {
return ret_value__28498__auto__;
}
break;
}
});
cljs$core$async$state_machine__28497__auto__ = function(state_42491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28497__auto____1.call(this,state_42491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28497__auto____0;
cljs$core$async$state_machine__28497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28497__auto____1;
return cljs$core$async$state_machine__28497__auto__;
})()
;})(switch__28496__auto__,c__28608__auto___42525,out))
})();
var state__28610__auto__ = (function (){var statearr_42520 = f__28609__auto__.call(null);
(statearr_42520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28608__auto___42525);

return statearr_42520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28610__auto__);
});})(c__28608__auto___42525,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1475623453127