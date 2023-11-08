webpackJsonp([1],[,function(a,b,c){"use strict";c.d(b,"a",function(){return e});var d=c(4);let e=class{constructor(a=d.a("date"),b=d.a("amount"),c=d.a("price")){Object.assign(this,{_amount:b,_price:c}),this._date=new Date(a.getTime()),Object.freeze(this)}get volume(){return this._amount*this._price}get date(){return new Date(this._date.getTime())}get amount(){return this._amount}get price(){return this._price}equals(a){return JSON.stringify(this)==JSON.stringify(a)}}},function(a,b,c){"use strict";function d(a){return a instanceof f||Object.getPrototypeOf(a)instanceof f}c.d(b,"a",function(){return e}),b.b=function(a){return d(a)?a.message:(console.log(a),"It was not possible to complete the operation.")};let e=class extends Error{constructor(a=""){super(a),this.name=this.constructor.name}};const f=e},,function(a,b){"use strict";b.a=function(a){throw new Error(`${a} is required`)}},function(a,b,c){"use strict";c.d(b,"a",function(){return d});let d=class{get(a){return fetch(a).then((a)=>this._handleErrors(a)).then((a)=>a.json())}_handleErrors(a){if(!a.ok)throw new Error(a.statusText);return a}}},function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a=500){return function(b,c,d){const e=d.value;let f=0;return d.value=function(...b){event&&event.preventDefault(),clearTimeout(f),f=setTimeout(()=>e.apply(this,b),a)},d}}function f(a,b){document.querySelector(b.selector).addEventListener(b.event,(c)=>{b.prevent&&c.preventDefault(),a[b.propertyKey](c)})}function g(a=L.a("event"),b=L.a("selector"),c=!0){return function(d,e,f){return Reflect.defineMetadata("bindEvent",{event:a,selector:b,prevent:c,propertyKey:e},Object.getPrototypeOf(d),e),f}}function h(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function i(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}Object.defineProperty(b,"__esModule",{value:!0});var j=c(1);let k=class{constructor(a){this._connection=a,this._store="negotiations"}add(a){return new Promise((b,c)=>{const d=this._connection.transaction([this._store],"readwrite").objectStore(this._store).add(a);d.onsuccess=()=>b(),d.onerror=(a)=>{console.log(a.target.error),c("It was not possible to save the negotiation")}})}deleteAll(){return new Promise((a,b)=>{const c=this._connection.transaction([this._store],"readwrite").objectStore(this._store).clear();c.onsuccess=()=>a(),c.onerror=(a)=>{console.log(a.target.error),b("It was not possible to delete the negotiations")}})}getAll(){return new Promise((a,b)=>{const c=[],d=this._connection.transaction([this._store],"readwrite").objectStore(this._store).openCursor();d.onsuccess=(b)=>{const d=b.target.result;if(d){const a=new j.a(d.value._date,d.value._amount,d.value._price);c.push(a),d.continue()}else a(c)},d.onerror=(a)=>{console.log(a.target.error),b("It was not possible to retrieve the negotiations")}})}},l=class{constructor(){this._negotiations=[],Object.freeze(this)}get volumeTotal(){return this._negotiations.reduce((a,b)=>a+b.volume,0)}add(a){this._negotiations.push(a)}empties(){this._negotiations.length=0}toArray(){return[].concat(this._negotiations)}};var m=c(1);let n=class{constructor(a){this._element=document.querySelector(a)}update(a){this._element.innerHTML=this.template(a)}template(){throw new Error("This method must be implemented.")}},o=class extends n{template(a){return a.text?`<p class="alert alert-info">${a.text}</p>`:`<p></p>`}};var p=c(2);let q=class extends p.a{constructor(){super("Date must be in dd/mm/yyyy format"),this.name=this.constructor.name}},r=class{constructor(){throw new Error("This class cannot be instantiated")}static toText(a){return`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`}static toDate(a){if(!/\d{2}\/\d{2}\/\d{4}$/.test(a))throw new q;return new Date(...a.split("/").reverse().map((a,b)=>a-b%2))}},s=class extends n{template(a){return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>PRICE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${a.toArray().map((a)=>`
                    <tr>
                        <td>${r.toText(a.date)}</td>
                        <td>${a.amount}</td>
                        <td>${a.price}</td>
                        <td>${a.volume}</td>
                    </tr>
                    `).join("")}
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${a.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>
        `}},t=class{constructor(a=""){this._text=a}get text(){return this._text}set text(a){this._text=a}},u=class a{static create(b,c,d){return new Proxy(b,{get(b,e){return a._isFunction(b[e])&&c.includes(e)?function(){b[e].apply(b,arguments),d(b)}:b[e]},set(a,b,e){const f=Reflect.set(a,b,e);return c.includes(b)&&d(a),f}})}static _isFunction(a){return typeof a==typeof Function}},v=class{constructor(a,b,...c){const d=u.create(a,c,(a)=>{b.update(a)});return b.update(a),d}};const w=["negotiations"];let x=null,y=null,z=class a{constructor(){throw new Error("It is not possible to create instances of this class")}static getConnection(){return new Promise((b,c)=>{if(x)return b(x);const d=indexedDB.open("jscangaceiro",2);d.onupgradeneeded=(b)=>{a._createStores(b.target.result)},d.onsuccess=(a)=>{x=a.target.result,y=x.close.bind(x),x.close=()=>{throw new Error("You cannot close the connection directly")},b(x)},d.onerror=(a)=>{console.log(a.target.error),c(a.target.error.name)}})}static closeConnection(){x&&y()}static _createStores(a){w.forEach((b)=>{a.objectStoreNames.contains(b)&&a.deleteObjectStore(b),a.createObjectStore(b,{autoIncrement:!0})})}},A=(()=>{var a=d(function*(){let a=yield z.getConnection();return new k(a)});return function(){return a.apply(this,arguments)}})();var B,C,D,E,F,G,H,I,J=c(2),K=c(5),L=c(4);let M=(B=function(...a){const b=a.map((a)=>document.querySelector(a));return function(a){const c=a,d=function(){const a=new c(...b);Object.getOwnPropertyNames(c.prototype).forEach((b)=>{Reflect.hasMetadata("bindEvent",a,b)&&f(a,Reflect.getMetadata("bindEvent",a,b))})};return d.prototype=c.prototype,d}}("#date","#amount","#price"),C=g("submit",".form"),D=e(),E=g("click","#button-delete"),F=g("click","#button-import"),G=e(1500),B(H=(I=class{constructor(a,b,c){Object.assign(this,{_inputDate:a,_inputAmount:b,_inputPrice:c}),this._negotiations=new v(new l(),new s("#negotiations"),"add","empties"),this._message=new v(new t(),new o("#messageView"),"text"),this._init()}add(){var a=this;return h(function*(){try{alert("testing bundle");const b=a._createNegotiation(),c=yield A();yield c.add(b),a._negotiations.add(b),a._message.text="Negotiation added successfully",a._resetForm()}catch(b){a._message.text=J.b(b)}})()}delete(){var a=this;return h(function*(){try{const b=yield A();yield b.deleteAll(),a._negotiations.empties(),a._message.text="Negotiations deleted successfully"}catch(b){a._message.text=J.b(b)}})()}importNegotiations(){var a=this;return h(function*(){try{const{NegotiationService:b}=yield c.e(0).then(c.bind(null,26)),d=new b,e=yield d.getPeriodNegotiations();console.log(e),e.filter(function(b){return!a._negotiations.toArray().some(function(a){return b.equals(a)})}).forEach(function(b){return a._negotiations.add(b)}),a._message.text="Period negotiations imported successfully"}catch(b){a._message.text=J.b(b)}})()}_init(){var a=this;return h(function*(){try{const b=yield A(),c=yield b.getAll();c.forEach(function(b){return a._negotiations.add(b)})}catch(b){a._message.text=J.b(b)}})()}_createNegotiation(){return console.log(this),new m.a(r.toDate(this._inputDate.value),parseInt(this._inputAmount.value),parseFloat(this._inputPrice.value))}_resetForm(){this._inputDate.value="",this._inputAmount.value=1,this._inputPrice.value=0,this._inputDate.focus()}},i(I.prototype,"add",[C,D],Object.getOwnPropertyDescriptor(I.prototype,"add"),I.prototype),i(I.prototype,"delete",[E],Object.getOwnPropertyDescriptor(I.prototype,"delete"),I.prototype),i(I.prototype,"importNegotiations",[F,G],Object.getOwnPropertyDescriptor(I.prototype,"importNegotiations"),I.prototype),I))||H);(function(a){var b=c(7),d=c.n(b),e=c(8),f=c.n(e),g=c(3),h=c.n(g),i=c(9),j=c.n(i);a("h1").on("click",()=>alert("Foi clicado!")),console.log("Fun\xE7\xE3o adicionada pelo bootstrap:"),console.log(a("h1").modal);const k=new M,l=new m.a(new Date(),1,200),n=new Headers;n.set("Content-Type","application/json");const o=JSON.stringify(l);fetch("http://localhost:3000/negotiations",{method:"POST",headers:n,body:o}).then(()=>console.log("Dado enviado com sucesso"))}).call(b,c(0))},function(){},function(){},function(){}],[6]);