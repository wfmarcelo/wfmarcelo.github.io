webpackJsonp([0],{26:function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}Object.defineProperty(b,"__esModule",{value:!0}),c.d(b,"NegotiationService",function(){return h});var e=c(5),f=c(1),g=c(2);let h=class{constructor(){this._http=new e.a}getWeekNegotiations(){return this._http.get("http://localhost:3000/negotiations/week").then((a)=>a.map((a)=>new f.a(new Date(a.date),a.amount,a.price)),()=>{throw new g.a("Was not possible to get week negotiations")})}getPreviousWeekNegotiations(){return this._http.get("http://localhost:3000/negotiations/previous").then((a)=>a.map((a)=>new f.a(new Date(a.date),a.amount,a.price)),()=>{throw new g.a("Was not possible to get previous week negotiations")})}getLateWeekNegotiations(){return this._http.get("http://localhost:3000/negotiations/late").then((a)=>a.map((a)=>new f.a(new Date(a.date),a.amount,a.price)),()=>{throw new g.a("Was not possible to get late week negotiations")})}getPeriodNegotiations(){var a=this;return d(function*(){try{let b=yield Promise.all([a.getWeekNegotiations(),a.getPreviousWeekNegotiations(),a.getLateWeekNegotiations()]);return b.reduce(function(a,b){return a.concat(b)},[]).sort(function(c,a){return a.date.getTime()-c.date.getTime()})}catch(a){throw console.log(a),new g.a("It was not possible to get the period negotiations")}})()}}}});