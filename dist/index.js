var t=Object.defineProperty,e=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s;import{css as l,LitElement as h,html as a}from"lit-element/lit-element.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=t=>e=>{return"function"==typeof e?(i=t,s=e,window.customElements.define(i,s),s):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i,s},c=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol();class u{constructor(t,e){if(e!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return c&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const v=new Map,f=t=>(t=>{let e=v.get(t);return void 0===e&&v.set(t,e=new u(t,p)),e})("string"==typeof t?t:t+""),m=c?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return f(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var y,g,b,w;const S={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},P=(t,e)=>e!==t&&(e==e||t==t),O={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:P};class x extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=O){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||O}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(m(t))}else void 0!==t&&e.push(m(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{c?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=O){var s,o;const r=this.constructor.Πp(t,i);if(void 0!==r&&!0===i.reflect){const n=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:S.toAttribute)(e,i.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null}}K(t,e){var i,s,o;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,h=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:S.fromAttribute;this.Πh=n,this[n]=h(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||P)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}"Πq"(){return t=this,e=null,i=function*(){this.isUpdatePending=!0;try{for(yield this.Πg;this.Πo;)yield this.Πo}catch(e){Promise.reject(e)}const t=this.performUpdate();return null!=t&&(yield t),!this.isUpdatePending},new Promise(((s,o)=>{var r=t=>{try{l(i.next(t))}catch(e){o(e)}},n=t=>{try{l(i.throw(t))}catch(e){o(e)}},l=t=>t.done?s(t.value):Promise.resolve(t.value).then(r,n);l((i=i.apply(t,e)).next())}));var t,e,i}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(s){throw e=!1,this.Π$(),s}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var k,E,C,_;x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},null===(g=(y=globalThis).reactiveElementPlatformSupport)||void 0===g||g.call(y,{ReactiveElement:x}),(null!==(b=(w=globalThis).reactiveElementVersions)&&void 0!==b?b:w.reactiveElementVersions=[]).push("1.0.0-rc.2");const U=globalThis.trustedTypes,A=U?U.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,H="?"+$,j=`<${H}>`,T=document,N=(t="")=>T.createComment(t),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,z=/>/g,I=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,q=/'/g,W=/"/g,B=/^(?:script|style|textarea)$/i,V=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),J=new WeakMap,Z=T.createTreeWalker(T,129,null,!1);class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,l=this.parts,[h,a]=((t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",n=M;for(let h=0;h<i;h++){const e=t[h];let i,l,a=-1,d=0;for(;d<e.length&&(n.lastIndex=d,l=n.exec(e),null!==l);)d=n.lastIndex,n===M?"!--"===l[1]?n=D:void 0!==l[1]?n=z:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=I):void 0!==l[3]&&(n=I):n===I?">"===l[0]?(n=null!=o?o:M,a=-1):void 0===l[1]?a=-2:(a=n.lastIndex-l[2].length,i=l[1],n=void 0===l[3]?I:'"'===l[3]?W:q):n===W||n===q?n=I:n===D||n===z?n=M:(n=I,o=void 0);const c=n===I&&t[h+1].startsWith("/>")?" ":"";r+=n===M?e+j:a>=0?(s.push(i),e.slice(0,a)+"$lit$"+e.slice(a)+$+c):e+$+(-2===a?(s.push(void 0),h):c)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==A?A.createHTML(l):l,s]})(t,e);if(this.el=F.createElement(h,i),Z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Z.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=a[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?et:"@"===e[1]?it:Y})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(B.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=U?U.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],N()),Z.nextNode(),l.push({type:2,index:++o});s.append(t[e],N())}}}else if(8===s.nodeType)if(s.data===H)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)l.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){var o,r,n,l;if(e===V)return e;let h=void 0!==s?null===(o=i.Σi)||void 0===o?void 0:o[s]:i.Σo;const a=L(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(r=null==h?void 0:h.O)||void 0===r||r.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,i,s)),void 0!==s?(null!==(n=(l=i).Σi)&&void 0!==n?n:l.Σi=[])[s]=h:i.Σo=h),void 0!==h&&(e=G(t,h.S(t,e.values),h,s)),e}class Q{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(i,!0);Z.currentNode=o;let r=Z.nextNode(),n=0,l=0,h=s[0];for(;void 0!==h;){if(n===h.index){let e;2===h.type?e=new X(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new st(r,this,t)),this.l.push(e),h=s[++l]}n!==(null==h?void 0:h.index)&&(r=Z.nextNode(),n++)}return o}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class X{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=G(this,t,e),L(t)?t===K||null==t||""===t?(this.H!==K&&this.R(),this.H=K):t!==this.H&&t!==V&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return R(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(T.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=F.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(i);else{const t=new Q(o,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new F(t)),e}g(t){R(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const o of t)s===e.length?e.push(i=new X(this.k(N()),this.k(N()),this,this.options)):i=e[s],i.I(o),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class Y{constructor(t,e,i,s,o){this.type=1,this.H=K,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(K),this.strings=i):this.H=K}get tagName(){return this.element.tagName}I(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=G(this,t,e,0),r=!L(t)||t!==this.H&&t!==V,r&&(this.H=t);else{const s=t;let n,l;for(t=o[0],n=0;n<o.length-1;n++)l=G(this,s[i+n],e,n),l===V&&(l=this.H[n]),r||(r=!L(l)||l!==this.H[n]),l===K?t=K:t!==K&&(t+=(null!=l?l:"")+o[n+1]),this.H[n]=l}r&&!s&&this.W(t)}W(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===K?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}W(t){t&&t!==K?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class it extends Y{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=G(this,t,e,0))&&void 0!==i?i:K)===V)return;const s=this.H,o=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==K&&(s===K||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){G(this,t)}}null===(E=(k=globalThis).litHtmlPlatformSupport)||void 0===E||E.call(k,F,X),(null!==(C=(_=globalThis).litHtmlVersions)&&void 0!==C?C:_.litHtmlVersions=[]).push("2.0.0-rc.3");const ot=l`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1.2;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt=(t,l)=>{return"method"===l.kind&&l.descriptor&&!("value"in l.descriptor)?(h=((t,e)=>{for(var i in e||(e={}))o.call(e,i)&&n(t,i,e[i]);if(s)for(var i of s(e))r.call(e,i)&&n(t,i,e[i]);return t})({},l),e(h,i({finisher(e){e.createProperty(l.key,t)}}))):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:l.key,initializer(){"function"==typeof l.initializer&&(this[l.key]=l.initializer.call(this))},finisher(e){e.createProperty(l.key,t)}};var h};function nt(t){return(e,i)=>{return void 0!==i?(s=t,o=i,void e.constructor.createProperty(o,s)):rt(t,e);var s,o}}var lt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor;let at,dt=class extends h{render(){return a` <lit-link href="/"> </lit-link> `}};dt.styles=[ot],dt=((t,e,i,s)=>{for(var o,r=s>1?void 0:s?ht(e,i):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(s?o(e,i,r):o(r))||r);return s&&r&&lt(e,i,r),r})([d("page-header")],dt);const ct={},pt=function(t,e){if(!e)return t();if(void 0===at){const t=document.createElement("link").relList;at=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in ct)return;ct[t]=!0;const e=t.endsWith(".css"),i=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${i}`))return;const s=document.createElement("link");return s.rel=e?"stylesheet":at,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e?new Promise(((t,e)=>{s.addEventListener("load",t),s.addEventListener("error",e)})):void 0}))).then((()=>t()))};var ut=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,ft=(t,e,i,s)=>{for(var o,r=s>1?void 0:s?vt(e,i):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(s?o(e,i,r):o(r))||r);return s&&r&&ut(e,i,r),r};const mt=()=>pt((()=>import("./404.js")),void 0),yt=()=>pt((()=>import("./lit-home.js")),void 0),gt=()=>pt((()=>import("./post-1.js")),void 0);let bt=class extends h{constructor(){super(),this.history=[],this.pathname="",this._handleLocationChange=this._handleLocationChange.bind(this),this._handlePopState=this._handlePopState.bind(this),this._renderPage=this._renderPage.bind(this);const t=window.location.href.replace("http://localhost:3000","");this.history.push(t),this.pathname=t,window.addEventListener("locationchange",this._handleLocationChange),window.addEventListener("popstate",this._handlePopState)}_handleLocationChange(t){const{href:e}=t.detail;console.log(e),e&&(!e.startsWith("http")||e.startsWith("http://localhost:3000")?this.history[this.history.length-1]!==e&&(window.history.pushState({},"",e),this.history.push(e),this.pathname=window.location.pathname):window.location.href=e)}_handlePopState(){const{pathname:t}=window.location,e=this.history[this.history.length],i=this.history.findIndex((e=>e===t));i||this.history.push(t),i&&e!==t&&(this.history=this.history.splice(0,i),this.history.push(t)),this.pathname=t}_renderPage(){const t=window.location.pathname.split("/");switch(t[t.length-1]){case"":return yt(),a`<lit-home></lit-home>`;case"post-1":return gt(),a`<post-1></post-1>`;default:return mt(),a`<page-404></page-404>`}}render(){return this._renderPage()}};ft([nt()],bt.prototype,"pathname",2),bt=ft([d("root-router")],bt);var wt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,Pt=(t,e,i,s)=>{for(var o,r=s>1?void 0:s?St(e,i):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(s?o(e,i,r):o(r))||r);return s&&r&&wt(e,i,r),r};let Ot=class extends h{constructor(){super(),this.href=""}_onClick(t){t.preventDefault();const e=new CustomEvent("locationchange",{bubbles:!0,composed:!0,detail:{href:this.href}});window.dispatchEvent(e)}render(){return a`
            <!-- <link rel="prefetch" href="/${this.href}" /> -->
            <a id="link-element" href=${this.href} @click=${this._onClick}>
                <slot></slot>
            </a>
        `}};Ot.styles=[ot],Pt([nt()],Ot.prototype,"href",2),Ot=Pt([d("lit-link")],Ot);var xt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor;let Et=class extends h{constructor(){super()}render(){return a`
            <style>
                ${ot}
            </style>
            <page-header></page-header>
            <root-router></root-router>
        `}};Et=((t,e,i,s)=>{for(var o,r=s>1?void 0:s?kt(e,i):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(s?o(e,i,r):o(r))||r);return s&&r&&xt(e,i,r),r})([d("root-element")],Et);export{nt as e,d as n,ot as r};
