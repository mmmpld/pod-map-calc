(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Yl(e,a){const n=Object.create(null),t=e.split(",");for(let s=0;s<t.length;s++)n[t[s]]=!0;return a?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Qe={},kt=[],Za=()=>{},qH=()=>!1,UH=/^on[^a-z]/,Hi=e=>UH.test(e),Jl=e=>e.startsWith("onUpdate:"),sa=Object.assign,Zl=(e,a)=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)},FH=Object.prototype.hasOwnProperty,Le=(e,a)=>FH.call(e,a),Me=Array.isArray,St=e=>pi(e)==="[object Map]",J1=e=>pi(e)==="[object Set]",ye=e=>typeof e=="function",Je=e=>typeof e=="string",eo=e=>typeof e=="symbol",ze=e=>e!==null&&typeof e=="object",Z1=e=>ze(e)&&ye(e.then)&&ye(e.catch),ec=Object.prototype.toString,pi=e=>ec.call(e),VH=e=>pi(e).slice(8,-1),ac=e=>pi(e)==="[object Object]",ao=e=>Je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ws=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mi=e=>{const a=Object.create(null);return n=>a[n]||(a[n]=e(n))},_H=/-(\w)/g,Wa=mi(e=>e.replace(_H,(a,n)=>n?n.toUpperCase():"")),WH=/\B([A-Z])/g,Rt=mi(e=>e.replace(WH,"-$1").toLowerCase()),Sn=mi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wi=mi(e=>e?`on${Sn(e)}`:""),os=(e,a)=>!Object.is(e,a),zs=(e,a)=>{for(let n=0;n<e.length;n++)e[n](a)},$s=(e,a,n)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:n})},il=e=>{const a=parseFloat(e);return isNaN(a)?e:a},zH=e=>{const a=Je(e)?Number(e):NaN;return isNaN(a)?e:a};let ur;const ll=()=>ur||(ur=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function no(e){if(Me(e)){const a={};for(let n=0;n<e.length;n++){const t=e[n],s=Je(t)?XH(t):no(t);if(s)for(const i in s)a[i]=s[i]}return a}else{if(Je(e))return e;if(ze(e))return e}}const QH=/;(?![^(]*\))/g,OH=/:([^]+)/,KH=/\/\*[^]*?\*\//g;function XH(e){const a={};return e.replace(KH,"").split(QH).forEach(n=>{if(n){const t=n.split(OH);t.length>1&&(a[t[0].trim()]=t[1].trim())}}),a}function to(e){let a="";if(Je(e))a=e;else if(Me(e))for(let n=0;n<e.length;n++){const t=to(e[n]);t&&(a+=t+" ")}else if(ze(e))for(const n in e)e[n]&&(a+=n+" ");return a.trim()}const jH="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$H=Yl(jH);function nc(e){return!!e||e===""}const be=e=>Je(e)?e:e==null?"":Me(e)||ze(e)&&(e.toString===ec||!ye(e.toString))?JSON.stringify(e,tc,2):String(e),tc=(e,a)=>a&&a.__v_isRef?tc(e,a.value):St(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((n,[t,s])=>(n[`${t} =>`]=s,n),{})}:J1(a)?{[`Set(${a.size})`]:[...a.values()]}:ze(a)&&!Me(a)&&!ac(a)?String(a):a;let Ea;class sc{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ea,!a&&Ea&&(this.index=(Ea.scopes||(Ea.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const n=Ea;try{return Ea=this,a()}finally{Ea=n}}}on(){Ea=this}off(){Ea=this.parent}stop(a){if(this._active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function so(e){return new sc(e)}function YH(e,a=Ea){a&&a.active&&a.effects.push(e)}function JH(){return Ea}function Da(e){Ea&&Ea.cleanups.push(e)}const io=e=>{const a=new Set(e);return a.w=0,a.n=0,a},ic=e=>(e.w&In)>0,lc=e=>(e.n&In)>0,ZH=({deps:e})=>{if(e.length)for(let a=0;a<e.length;a++)e[a].w|=In},e0=e=>{const{deps:a}=e;if(a.length){let n=0;for(let t=0;t<a.length;t++){const s=a[t];ic(s)&&!lc(s)?s.delete(e):a[n++]=s,s.w&=~In,s.n&=~In}a.length=n}},Ys=new WeakMap;let Jt=0,In=1;const ol=30;let ja;const at=Symbol(""),rl=Symbol("");class lo{constructor(a,n=null,t){this.fn=a,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,YH(this,t)}run(){if(!this.active)return this.fn();let a=ja,n=Rn;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=ja,ja=this,Rn=!0,In=1<<++Jt,Jt<=ol?ZH(this):Hr(this),this.fn()}finally{Jt<=ol&&e0(this),In=1<<--Jt,ja=this.parent,Rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ja===this?this.deferStop=!0:this.active&&(Hr(this),this.onStop&&this.onStop(),this.active=!1)}}function Hr(e){const{deps:a}=e;if(a.length){for(let n=0;n<a.length;n++)a[n].delete(e);a.length=0}}let Rn=!0;const oc=[];function Bt(){oc.push(Rn),Rn=!1}function It(){const e=oc.pop();Rn=e===void 0?!0:e}function ba(e,a,n){if(Rn&&ja){let t=Ys.get(e);t||Ys.set(e,t=new Map);let s=t.get(n);s||t.set(n,s=io()),rc(s)}}function rc(e,a){let n=!1;Jt<=ol?lc(e)||(e.n|=In,n=!ic(e)):n=!e.has(ja),n&&(e.add(ja),ja.deps.push(e))}function An(e,a,n,t,s,i){const l=Ys.get(e);if(!l)return;let o=[];if(a==="clear")o=[...l.values()];else if(n==="length"&&Me(e)){const r=Number(t);l.forEach((c,u)=>{(u==="length"||u>=r)&&o.push(c)})}else switch(n!==void 0&&o.push(l.get(n)),a){case"add":Me(e)?ao(n)&&o.push(l.get("length")):(o.push(l.get(at)),St(e)&&o.push(l.get(rl)));break;case"delete":Me(e)||(o.push(l.get(at)),St(e)&&o.push(l.get(rl)));break;case"set":St(e)&&o.push(l.get(at));break}if(o.length===1)o[0]&&cl(o[0]);else{const r=[];for(const c of o)c&&r.push(...c);cl(io(r))}}function cl(e,a){const n=Me(e)?e:[...e];for(const t of n)t.computed&&pr(t);for(const t of n)t.computed||pr(t)}function pr(e,a){(e!==ja||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function a0(e,a){var n;return(n=Ys.get(e))==null?void 0:n.get(a)}const n0=Yl("__proto__,__v_isRef,__isVue"),cc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(eo)),t0=oo(),s0=oo(!1,!0),i0=oo(!0),mr=l0();function l0(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...n){const t=De(this);for(let i=0,l=this.length;i<l;i++)ba(t,"get",i+"");const s=t[a](...n);return s===-1||s===!1?t[a](...n.map(De)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...n){Bt();const t=De(this)[a].apply(this,n);return It(),t}}),e}function o0(e){const a=De(this);return ba(a,"has",e),a.hasOwnProperty(e)}function oo(e=!1,a=!1){return function(t,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return a;if(s==="__v_raw"&&i===(e?a?S0:mc:a?pc:Hc).get(t))return t;const l=Me(t);if(!e){if(l&&Le(mr,s))return Reflect.get(mr,s,i);if(s==="hasOwnProperty")return o0}const o=Reflect.get(t,s,i);return(eo(s)?cc.has(s):n0(s))||(e||ba(t,"get",s),a)?o:Xe(o)?l&&ao(s)?o:o.value:ze(o)?e?Ts(o):xa(o):o}}const r0=dc(),c0=dc(!0);function dc(e=!1){return function(n,t,s,i){let l=n[t];if(yt(l)&&Xe(l)&&!Xe(s))return!1;if(!e&&(!Js(s)&&!yt(s)&&(l=De(l),s=De(s)),!Me(n)&&Xe(l)&&!Xe(s)))return l.value=s,!0;const o=Me(n)&&ao(t)?Number(t)<n.length:Le(n,t),r=Reflect.set(n,t,s,i);return n===De(i)&&(o?os(s,l)&&An(n,"set",t,s):An(n,"add",t,s)),r}}function d0(e,a){const n=Le(e,a);e[a];const t=Reflect.deleteProperty(e,a);return t&&n&&An(e,"delete",a,void 0),t}function u0(e,a){const n=Reflect.has(e,a);return(!eo(a)||!cc.has(a))&&ba(e,"has",a),n}function H0(e){return ba(e,"iterate",Me(e)?"length":at),Reflect.ownKeys(e)}const uc={get:t0,set:r0,deleteProperty:d0,has:u0,ownKeys:H0},p0={get:i0,set(e,a){return!0},deleteProperty(e,a){return!0}},m0=sa({},uc,{get:s0,set:c0}),ro=e=>e,hi=e=>Reflect.getPrototypeOf(e);function Es(e,a,n=!1,t=!1){e=e.__v_raw;const s=De(e),i=De(a);n||(a!==i&&ba(s,"get",a),ba(s,"get",i));const{has:l}=hi(s),o=t?ro:n?Ho:rs;if(l.call(s,a))return o(e.get(a));if(l.call(s,i))return o(e.get(i));e!==s&&e.get(a)}function ws(e,a=!1){const n=this.__v_raw,t=De(n),s=De(e);return a||(e!==s&&ba(t,"has",e),ba(t,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Rs(e,a=!1){return e=e.__v_raw,!a&&ba(De(e),"iterate",at),Reflect.get(e,"size",e)}function hr(e){e=De(e);const a=De(this);return hi(a).has.call(a,e)||(a.add(e),An(a,"add",e,e)),this}function Ar(e,a){a=De(a);const n=De(this),{has:t,get:s}=hi(n);let i=t.call(n,e);i||(e=De(e),i=t.call(n,e));const l=s.call(n,e);return n.set(e,a),i?os(a,l)&&An(n,"set",e,a):An(n,"add",e,a),this}function Nr(e){const a=De(this),{has:n,get:t}=hi(a);let s=n.call(a,e);s||(e=De(e),s=n.call(a,e)),t&&t.call(a,e);const i=a.delete(e);return s&&An(a,"delete",e,void 0),i}function fr(){const e=De(this),a=e.size!==0,n=e.clear();return a&&An(e,"clear",void 0,void 0),n}function Bs(e,a){return function(t,s){const i=this,l=i.__v_raw,o=De(l),r=a?ro:e?Ho:rs;return!e&&ba(o,"iterate",at),l.forEach((c,u)=>t.call(s,r(c),r(u),i))}}function Is(e,a,n){return function(...t){const s=this.__v_raw,i=De(s),l=St(i),o=e==="entries"||e===Symbol.iterator&&l,r=e==="keys"&&l,c=s[e](...t),u=n?ro:a?Ho:rs;return!a&&ba(i,"iterate",r?rl:at),{next(){const{value:H,done:p}=c.next();return p?{value:H,done:p}:{value:o?[u(H[0]),u(H[1])]:u(H),done:p}},[Symbol.iterator](){return this}}}}function bn(e){return function(...a){return e==="delete"?!1:this}}function h0(){const e={get(i){return Es(this,i)},get size(){return Rs(this)},has:ws,add:hr,set:Ar,delete:Nr,clear:fr,forEach:Bs(!1,!1)},a={get(i){return Es(this,i,!1,!0)},get size(){return Rs(this)},has:ws,add:hr,set:Ar,delete:Nr,clear:fr,forEach:Bs(!1,!0)},n={get(i){return Es(this,i,!0)},get size(){return Rs(this,!0)},has(i){return ws.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Bs(!0,!1)},t={get(i){return Es(this,i,!0,!0)},get size(){return Rs(this,!0)},has(i){return ws.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Is(i,!1,!1),n[i]=Is(i,!0,!1),a[i]=Is(i,!1,!0),t[i]=Is(i,!0,!0)}),[e,n,a,t]}const[A0,N0,f0,M0]=h0();function co(e,a){const n=a?e?M0:f0:e?N0:A0;return(t,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?t:Reflect.get(Le(n,s)&&s in t?n:t,s,i)}const C0={get:co(!1,!1)},g0={get:co(!1,!0)},k0={get:co(!0,!1)},Hc=new WeakMap,pc=new WeakMap,mc=new WeakMap,S0=new WeakMap;function T0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function v0(e){return e.__v_skip||!Object.isExtensible(e)?0:T0(VH(e))}function xa(e){return yt(e)?e:uo(e,!1,uc,C0,Hc)}function x0(e){return uo(e,!1,m0,g0,pc)}function Ts(e){return uo(e,!0,p0,k0,mc)}function uo(e,a,n,t,s){if(!ze(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const l=v0(e);if(l===0)return e;const o=new Proxy(e,l===2?t:n);return s.set(e,o),o}function Tt(e){return yt(e)?Tt(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function Js(e){return!!(e&&e.__v_isShallow)}function hc(e){return Tt(e)||yt(e)}function De(e){const a=e&&e.__v_raw;return a?De(a):e}function Ac(e){return $s(e,"__v_skip",!0),e}const rs=e=>ze(e)?xa(e):e,Ho=e=>ze(e)?Ts(e):e;function Nc(e){Rn&&ja&&(e=De(e),rc(e.dep||(e.dep=io())))}function fc(e,a){e=De(e);const n=e.dep;n&&cl(n)}function Xe(e){return!!(e&&e.__v_isRef===!0)}function ae(e){return Mc(e,!1)}function ie(e){return Mc(e,!0)}function Mc(e,a){return Xe(e)?e:new y0(e,a)}class y0{constructor(a,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?a:De(a),this._value=n?a:rs(a)}get value(){return Nc(this),this._value}set value(a){const n=this.__v_isShallow||Js(a)||yt(a);a=n?a:De(a),os(a,this._rawValue)&&(this._rawValue=a,this._value=n?a:rs(a),fc(this))}}function Ra(e){return Xe(e)?e.value:e}const D0={get:(e,a,n)=>Ra(Reflect.get(e,a,n)),set:(e,a,n,t)=>{const s=e[a];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(e,a,n,t)}};function Cc(e){return Tt(e)?e:new Proxy(e,D0)}function po(e){const a=Me(e)?new Array(e.length):{};for(const n in e)a[n]=gc(e,n);return a}class b0{constructor(a,n,t){this._object=a,this._key=n,this._defaultValue=t,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return a0(De(this._object),this._key)}}class P0{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function _(e,a,n){return Xe(e)?e:ye(e)?new P0(e):ze(e)&&arguments.length>1?gc(e,a,n):ae(e)}function gc(e,a,n){const t=e[a];return Xe(t)?t:new b0(e,a,n)}class E0{constructor(a,n,t,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new lo(a,()=>{this._dirty||(this._dirty=!0,fc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=t}get value(){const a=De(this);return Nc(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function w0(e,a,n=!1){let t,s;const i=ye(e);return i?(t=e,s=Za):(t=e.get,s=e.set),new E0(t,s,i||!s,n)}function Bn(e,a,n,t){let s;try{s=t?e(...t):e()}catch(i){Ai(i,a,n)}return s}function _a(e,a,n,t){if(ye(e)){const i=Bn(e,a,n,t);return i&&Z1(i)&&i.catch(l=>{Ai(l,a,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(_a(e[i],a,n,t));return s}function Ai(e,a,n,t=!0){const s=a?a.vnode:null;if(a){let i=a.parent;const l=a.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,l,o)===!1)return}i=i.parent}const r=a.appContext.config.errorHandler;if(r){Bn(r,null,10,[e,l,o]);return}}R0(e,n,s,t)}function R0(e,a,n,t=!0){console.error(e)}let cs=!1,dl=!1;const Aa=[];let on=0;const vt=[];let mn=null,jn=0;const kc=Promise.resolve();let mo=null;function _e(e){const a=mo||kc;return e?a.then(this?e.bind(this):e):a}function B0(e){let a=on+1,n=Aa.length;for(;a<n;){const t=a+n>>>1;ds(Aa[t])<e?a=t+1:n=t}return a}function ho(e){(!Aa.length||!Aa.includes(e,cs&&e.allowRecurse?on+1:on))&&(e.id==null?Aa.push(e):Aa.splice(B0(e.id),0,e),Sc())}function Sc(){!cs&&!dl&&(dl=!0,mo=kc.then(vc))}function I0(e){const a=Aa.indexOf(e);a>on&&Aa.splice(a,1)}function L0(e){Me(e)?vt.push(...e):(!mn||!mn.includes(e,e.allowRecurse?jn+1:jn))&&vt.push(e),Sc()}function Mr(e,a=cs?on+1:0){for(;a<Aa.length;a++){const n=Aa[a];n&&n.pre&&(Aa.splice(a,1),a--,n())}}function Tc(e){if(vt.length){const a=[...new Set(vt)];if(vt.length=0,mn){mn.push(...a);return}for(mn=a,mn.sort((n,t)=>ds(n)-ds(t)),jn=0;jn<mn.length;jn++)mn[jn]();mn=null,jn=0}}const ds=e=>e.id==null?1/0:e.id,G0=(e,a)=>{const n=ds(e)-ds(a);if(n===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return n};function vc(e){dl=!1,cs=!0,Aa.sort(G0);const a=Za;try{for(on=0;on<Aa.length;on++){const n=Aa[on];n&&n.active!==!1&&Bn(n,null,14)}}finally{on=0,Aa.length=0,Tc(),cs=!1,mo=null,(Aa.length||vt.length)&&vc()}}function q0(e,a,...n){if(e.isUnmounted)return;const t=e.vnode.props||Qe;let s=n;const i=a.startsWith("update:"),l=i&&a.slice(7);if(l&&l in t){const u=`${l==="modelValue"?"model":l}Modifiers`,{number:H,trim:p}=t[u]||Qe;p&&(s=n.map(m=>Je(m)?m.trim():m)),H&&(s=n.map(il))}let o,r=t[o=Wi(a)]||t[o=Wi(Wa(a))];!r&&i&&(r=t[o=Wi(Rt(a))]),r&&_a(r,e,6,s);const c=t[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,_a(c,e,6,s)}}function xc(e,a,n=!1){const t=a.emitsCache,s=t.get(e);if(s!==void 0)return s;const i=e.emits;let l={},o=!1;if(!ye(e)){const r=c=>{const u=xc(c,a,!0);u&&(o=!0,sa(l,u))};!n&&a.mixins.length&&a.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!i&&!o?(ze(e)&&t.set(e,null),null):(Me(i)?i.forEach(r=>l[r]=null):sa(l,i),ze(e)&&t.set(e,l),l)}function Ni(e,a){return!e||!Hi(a)?!1:(a=a.slice(2).replace(/Once$/,""),Le(e,a[0].toLowerCase()+a.slice(1))||Le(e,Rt(a))||Le(e,a))}let Ba=null,yc=null;function Zs(e){const a=Ba;return Ba=e,yc=e&&e.type.__scopeId||null,a}function He(e,a=Ba,n){if(!a||e._n)return e;const t=(...s)=>{t._d&&Rr(-1);const i=Zs(a);let l;try{l=e(...s)}finally{Zs(i),t._d&&Rr(1)}return l};return t._n=!0,t._c=!0,t._d=!0,t}function zi(e){const{type:a,vnode:n,proxy:t,withProxy:s,props:i,propsOptions:[l],slots:o,attrs:r,emit:c,render:u,renderCache:H,data:p,setupState:m,ctx:h,inheritAttrs:A}=e;let f,M;const g=Zs(e);try{if(n.shapeFlag&4){const x=s||t;f=ln(u.call(x,x,H,i,m,p,h)),M=r}else{const x=a;f=ln(x.length>1?x(i,{attrs:r,slots:o,emit:c}):x(i,null)),M=a.props?r:U0(r)}}catch(x){ss.length=0,Ai(x,e,1),f=d(en)}let k=f;if(M&&A!==!1){const x=Object.keys(M),{shapeFlag:v}=k;x.length&&v&7&&(l&&x.some(Jl)&&(M=F0(M,l)),k=Nn(k,M))}return n.dirs&&(k=Nn(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),f=k,Zs(g),f}const U0=e=>{let a;for(const n in e)(n==="class"||n==="style"||Hi(n))&&((a||(a={}))[n]=e[n]);return a},F0=(e,a)=>{const n={};for(const t in e)(!Jl(t)||!(t.slice(9)in a))&&(n[t]=e[t]);return n};function V0(e,a,n){const{props:t,children:s,component:i}=e,{props:l,children:o,patchFlag:r}=a,c=i.emitsOptions;if(a.dirs||a.transition)return!0;if(n&&r>=0){if(r&1024)return!0;if(r&16)return t?Cr(t,l,c):!!l;if(r&8){const u=a.dynamicProps;for(let H=0;H<u.length;H++){const p=u[H];if(l[p]!==t[p]&&!Ni(c,p))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:t===l?!1:t?l?Cr(t,l,c):!0:!!l;return!1}function Cr(e,a,n){const t=Object.keys(a);if(t.length!==Object.keys(e).length)return!0;for(let s=0;s<t.length;s++){const i=t[s];if(a[i]!==e[i]&&!Ni(n,i))return!0}return!1}function _0({vnode:e,parent:a},n){for(;a&&a.subTree===e;)(e=a.vnode).el=n,a=a.parent}const W0=e=>e.__isSuspense;function z0(e,a){a&&a.pendingBranch?Me(e)?a.effects.push(...e):a.effects.push(e):L0(e)}function ka(e,a){return Ao(e,null,a)}const Ls={};function ce(e,a,n){return Ao(e,a,n)}function Ao(e,a,{immediate:n,deep:t,flush:s,onTrack:i,onTrigger:l}=Qe){var o;const r=JH()===((o=ua)==null?void 0:o.scope)?ua:null;let c,u=!1,H=!1;if(Xe(e)?(c=()=>e.value,u=Js(e)):Tt(e)?(c=()=>e,t=!0):Me(e)?(H=!0,u=e.some(x=>Tt(x)||Js(x)),c=()=>e.map(x=>{if(Xe(x))return x.value;if(Tt(x))return Jn(x);if(ye(x))return Bn(x,r,2)})):ye(e)?a?c=()=>Bn(e,r,2):c=()=>{if(!(r&&r.isUnmounted))return p&&p(),_a(e,r,3,[m])}:c=Za,a&&t){const x=c;c=()=>Jn(x())}let p,m=x=>{p=g.onStop=()=>{Bn(x,r,4)}},h;if(ms)if(m=Za,a?n&&_a(a,r,3,[c(),H?[]:void 0,m]):c(),s==="sync"){const x=Ip();h=x.__watcherHandles||(x.__watcherHandles=[])}else return Za;let A=H?new Array(e.length).fill(Ls):Ls;const f=()=>{if(g.active)if(a){const x=g.run();(t||u||(H?x.some((v,D)=>os(v,A[D])):os(x,A)))&&(p&&p(),_a(a,r,3,[x,A===Ls?void 0:H&&A[0]===Ls?[]:A,m]),A=x)}else g.run()};f.allowRecurse=!!a;let M;s==="sync"?M=f:s==="post"?M=()=>va(f,r&&r.suspense):(f.pre=!0,r&&(f.id=r.uid),M=()=>ho(f));const g=new lo(c,M);a?n?f():A=g.run():s==="post"?va(g.run.bind(g),r&&r.suspense):g.run();const k=()=>{g.stop(),r&&r.scope&&Zl(r.scope.effects,g)};return h&&h.push(k),k}function Q0(e,a,n){const t=this.proxy,s=Je(e)?e.includes(".")?Dc(t,e):()=>t[e]:e.bind(t,t);let i;ye(a)?i=a:(i=a.handler,n=a);const l=ua;Dt(this);const o=Ao(s,i.bind(t),n);return l?Dt(l):nt(),o}function Dc(e,a){const n=a.split(".");return()=>{let t=e;for(let s=0;s<n.length&&t;s++)t=t[n[s]];return t}}function Jn(e,a){if(!ze(e)||e.__v_skip||(a=a||new Set,a.has(e)))return e;if(a.add(e),Xe(e))Jn(e.value,a);else if(Me(e))for(let n=0;n<e.length;n++)Jn(e[n],a);else if(J1(e)||St(e))e.forEach(n=>{Jn(n,a)});else if(ac(e))for(const n in e)Jn(e[n],a);return e}function $e(e,a){const n=Ba;if(n===null)return e;const t=ki(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<a.length;i++){let[l,o,r,c=Qe]=a[i];l&&(ye(l)&&(l={mounted:l,updated:l}),l.deep&&Jn(o),s.push({dir:l,instance:t,value:o,oldValue:void 0,arg:r,modifiers:c}))}return e}function Wn(e,a,n,t){const s=e.dirs,i=a&&a.dirs;for(let l=0;l<s.length;l++){const o=s[l];i&&(o.oldValue=i[l].value);let r=o.dir[t];r&&(Bt(),_a(r,n,8,[e.el,o,e,a]),It())}}function bc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fa(()=>{e.isMounted=!0}),Sa(()=>{e.isUnmounting=!0}),e}const Ua=[Function,Array],Pc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ua,onEnter:Ua,onAfterEnter:Ua,onEnterCancelled:Ua,onBeforeLeave:Ua,onLeave:Ua,onAfterLeave:Ua,onLeaveCancelled:Ua,onBeforeAppear:Ua,onAppear:Ua,onAfterAppear:Ua,onAppearCancelled:Ua},O0={name:"BaseTransition",props:Pc,setup(e,{slots:a}){const n=To(),t=bc();let s;return()=>{const i=a.default&&No(a.default(),!0);if(!i||!i.length)return;let l=i[0];if(i.length>1){for(const A of i)if(A.type!==en){l=A;break}}const o=De(e),{mode:r}=o;if(t.isLeaving)return Qi(l);const c=gr(l);if(!c)return Qi(l);const u=us(c,o,t,n);Hs(c,u);const H=n.subTree,p=H&&gr(H);let m=!1;const{getTransitionKey:h}=c.type;if(h){const A=h();s===void 0?s=A:A!==s&&(s=A,m=!0)}if(p&&p.type!==en&&(!$n(c,p)||m)){const A=us(p,o,t,n);if(Hs(p,A),r==="out-in")return t.isLeaving=!0,A.afterLeave=()=>{t.isLeaving=!1,n.update.active!==!1&&n.update()},Qi(l);r==="in-out"&&c.type!==en&&(A.delayLeave=(f,M,g)=>{const k=Ec(t,p);k[String(p.key)]=p,f._leaveCb=()=>{M(),f._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return l}}},K0=O0;function Ec(e,a){const{leavingVNodes:n}=e;let t=n.get(a.type);return t||(t=Object.create(null),n.set(a.type,t)),t}function us(e,a,n,t){const{appear:s,mode:i,persisted:l=!1,onBeforeEnter:o,onEnter:r,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:H,onLeave:p,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:A,onAppear:f,onAfterAppear:M,onAppearCancelled:g}=a,k=String(e.key),x=Ec(n,e),v=(C,S)=>{C&&_a(C,t,9,S)},D=(C,S)=>{const b=S[1];v(C,S),Me(C)?C.every(w=>w.length<=1)&&b():C.length<=1&&b()},E={mode:i,persisted:l,beforeEnter(C){let S=o;if(!n.isMounted)if(s)S=A||o;else return;C._leaveCb&&C._leaveCb(!0);const b=x[k];b&&$n(e,b)&&b.el._leaveCb&&b.el._leaveCb(),v(S,[C])},enter(C){let S=r,b=c,w=u;if(!n.isMounted)if(s)S=f||r,b=M||c,w=g||u;else return;let P=!1;const B=C._enterCb=F=>{P||(P=!0,F?v(w,[C]):v(b,[C]),E.delayedLeave&&E.delayedLeave(),C._enterCb=void 0)};S?D(S,[C,B]):B()},leave(C,S){const b=String(e.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return S();v(H,[C]);let w=!1;const P=C._leaveCb=B=>{w||(w=!0,S(),B?v(h,[C]):v(m,[C]),C._leaveCb=void 0,x[b]===e&&delete x[b])};x[b]=e,p?D(p,[C,P]):P()},clone(C){return us(C,a,n,t)}};return E}function Qi(e){if(fi(e))return e=Nn(e),e.children=null,e}function gr(e){return fi(e)?e.children?e.children[0]:void 0:e}function Hs(e,a){e.shapeFlag&6&&e.component?Hs(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function No(e,a=!1,n){let t=[],s=0;for(let i=0;i<e.length;i++){let l=e[i];const o=n==null?l.key:String(n)+String(l.key!=null?l.key:i);l.type===me?(l.patchFlag&128&&s++,t=t.concat(No(l.children,a,o))):(a||l.type!==en)&&t.push(o!=null?Nn(l,{key:o}):l)}if(s>1)for(let i=0;i<t.length;i++)t[i].patchFlag=-2;return t}function X0(e,a){return ye(e)?(()=>sa({name:e.name},a,{setup:e}))():e}const Qs=e=>!!e.type.__asyncLoader,fi=e=>e.type.__isKeepAlive;function wc(e,a){Bc(e,"a",a)}function Rc(e,a){Bc(e,"da",a)}function Bc(e,a,n=ua){const t=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Mi(a,t,n),n){let s=n.parent;for(;s&&s.parent;)fi(s.parent.vnode)&&j0(t,a,n,s),s=s.parent}}function j0(e,a,n,t){const s=Mi(a,e,t,!0);Gc(()=>{Zl(t[a],s)},n)}function Mi(e,a,n=ua,t=!1){if(n){const s=n[e]||(n[e]=[]),i=a.__weh||(a.__weh=(...l)=>{if(n.isUnmounted)return;Bt(),Dt(n);const o=_a(a,n,e,l);return nt(),It(),o});return t?s.unshift(i):s.push(i),i}}const Tn=e=>(a,n=ua)=>(!ms||e==="sp")&&Mi(e,(...t)=>a(...t),n),Ci=Tn("bm"),fa=Tn("m"),Ic=Tn("bu"),Lc=Tn("u"),Sa=Tn("bum"),Gc=Tn("um"),$0=Tn("sp"),Y0=Tn("rtg"),J0=Tn("rtc");function Z0(e,a=ua){Mi("ec",e,a)}const fo="components",ep="directives";function qc(e,a){return Mo(fo,e,!0,a)||e}const Uc=Symbol.for("v-ndc");function ap(e){return Je(e)?Mo(fo,e,!1)||e:e||Uc}function Ia(e){return Mo(ep,e)}function Mo(e,a,n=!0,t=!1){const s=Ba||ua;if(s){const i=s.type;if(e===fo){const o=wp(i,!1);if(o&&(o===a||o===Wa(a)||o===Sn(Wa(a))))return i}const l=kr(s[e]||i[e],a)||kr(s.appContext[e],a);return!l&&t?i:l}}function kr(e,a){return e&&(e[a]||e[Wa(a)]||e[Sn(Wa(a))])}function Sr(e,a,n,t){let s;const i=n&&n[t];if(Me(e)||Je(e)){s=new Array(e.length);for(let l=0,o=e.length;l<o;l++)s[l]=a(e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=a(l+1,l,void 0,i&&i[l])}else if(ze(e))if(e[Symbol.iterator])s=Array.from(e,(l,o)=>a(l,o,void 0,i&&i[o]));else{const l=Object.keys(e);s=new Array(l.length);for(let o=0,r=l.length;o<r;o++){const c=l[o];s[o]=a(e[c],c,o,i&&i[o])}}else s=[];return n&&(n[t]=s),s}const ul=e=>e?$c(e)?ki(e)||e.proxy:ul(e.parent):null,ns=sa(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ul(e.parent),$root:e=>ul(e.root),$emit:e=>e.emit,$options:e=>Co(e),$forceUpdate:e=>e.f||(e.f=()=>ho(e.update)),$nextTick:e=>e.n||(e.n=_e.bind(e.proxy)),$watch:e=>Q0.bind(e)}),Oi=(e,a)=>e!==Qe&&!e.__isScriptSetup&&Le(e,a),np={get({_:e},a){const{ctx:n,setupState:t,data:s,props:i,accessCache:l,type:o,appContext:r}=e;let c;if(a[0]!=="$"){const m=l[a];if(m!==void 0)switch(m){case 1:return t[a];case 2:return s[a];case 4:return n[a];case 3:return i[a]}else{if(Oi(t,a))return l[a]=1,t[a];if(s!==Qe&&Le(s,a))return l[a]=2,s[a];if((c=e.propsOptions[0])&&Le(c,a))return l[a]=3,i[a];if(n!==Qe&&Le(n,a))return l[a]=4,n[a];Hl&&(l[a]=0)}}const u=ns[a];let H,p;if(u)return a==="$attrs"&&ba(e,"get",a),u(e);if((H=o.__cssModules)&&(H=H[a]))return H;if(n!==Qe&&Le(n,a))return l[a]=4,n[a];if(p=r.config.globalProperties,Le(p,a))return p[a]},set({_:e},a,n){const{data:t,setupState:s,ctx:i}=e;return Oi(s,a)?(s[a]=n,!0):t!==Qe&&Le(t,a)?(t[a]=n,!0):Le(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(i[a]=n,!0)},has({_:{data:e,setupState:a,accessCache:n,ctx:t,appContext:s,propsOptions:i}},l){let o;return!!n[l]||e!==Qe&&Le(e,l)||Oi(a,l)||(o=i[0])&&Le(o,l)||Le(t,l)||Le(ns,l)||Le(s.config.globalProperties,l)},defineProperty(e,a,n){return n.get!=null?e._.accessCache[a]=0:Le(n,"value")&&this.set(e,a,n.value,null),Reflect.defineProperty(e,a,n)}};function Tr(e){return Me(e)?e.reduce((a,n)=>(a[n]=null,a),{}):e}let Hl=!0;function tp(e){const a=Co(e),n=e.proxy,t=e.ctx;Hl=!1,a.beforeCreate&&vr(a.beforeCreate,e,"bc");const{data:s,computed:i,methods:l,watch:o,provide:r,inject:c,created:u,beforeMount:H,mounted:p,beforeUpdate:m,updated:h,activated:A,deactivated:f,beforeDestroy:M,beforeUnmount:g,destroyed:k,unmounted:x,render:v,renderTracked:D,renderTriggered:E,errorCaptured:C,serverPrefetch:S,expose:b,inheritAttrs:w,components:P,directives:B,filters:F}=a;if(c&&sp(c,t,null),l)for(const U in l){const L=l[U];ye(L)&&(t[U]=L.bind(n))}if(s){const U=s.call(n,n);ze(U)&&(e.data=xa(U))}if(Hl=!0,i)for(const U in i){const L=i[U],j=ye(L)?L.bind(n,n):ye(L.get)?L.get.bind(n,n):Za,Y=!ye(L)&&ye(L.set)?L.set.bind(n):Za,O=N({get:j,set:Y});Object.defineProperty(t,U,{enumerable:!0,configurable:!0,get:()=>O.value,set:de=>O.value=de})}if(o)for(const U in o)Fc(o[U],t,n,U);if(r){const U=ye(r)?r.call(n):r;Reflect.ownKeys(U).forEach(L=>{Oe(L,U[L])})}u&&vr(u,e,"c");function q(U,L){Me(L)?L.forEach(j=>U(j.bind(n))):L&&U(L.bind(n))}if(q(Ci,H),q(fa,p),q(Ic,m),q(Lc,h),q(wc,A),q(Rc,f),q(Z0,C),q(J0,D),q(Y0,E),q(Sa,g),q(Gc,x),q($0,S),Me(b))if(b.length){const U=e.exposed||(e.exposed={});b.forEach(L=>{Object.defineProperty(U,L,{get:()=>n[L],set:j=>n[L]=j})})}else e.exposed||(e.exposed={});v&&e.render===Za&&(e.render=v),w!=null&&(e.inheritAttrs=w),P&&(e.components=P),B&&(e.directives=B)}function sp(e,a,n=Za){Me(e)&&(e=pl(e));for(const t in e){const s=e[t];let i;ze(s)?"default"in s?i=Re(s.from||t,s.default,!0):i=Re(s.from||t):i=Re(s),Xe(i)?Object.defineProperty(a,t,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):a[t]=i}}function vr(e,a,n){_a(Me(e)?e.map(t=>t.bind(a.proxy)):e.bind(a.proxy),a,n)}function Fc(e,a,n,t){const s=t.includes(".")?Dc(n,t):()=>n[t];if(Je(e)){const i=a[e];ye(i)&&ce(s,i)}else if(ye(e))ce(s,e.bind(n));else if(ze(e))if(Me(e))e.forEach(i=>Fc(i,a,n,t));else{const i=ye(e.handler)?e.handler.bind(n):a[e.handler];ye(i)&&ce(s,i,e)}}function Co(e){const a=e.type,{mixins:n,extends:t}=a,{mixins:s,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,o=i.get(a);let r;return o?r=o:!s.length&&!n&&!t?r=a:(r={},s.length&&s.forEach(c=>ei(r,c,l,!0)),ei(r,a,l)),ze(a)&&i.set(a,r),r}function ei(e,a,n,t=!1){const{mixins:s,extends:i}=a;i&&ei(e,i,n,!0),s&&s.forEach(l=>ei(e,l,n,!0));for(const l in a)if(!(t&&l==="expose")){const o=ip[l]||n&&n[l];e[l]=o?o(e[l],a[l]):a[l]}return e}const ip={data:xr,props:yr,emits:yr,methods:Zt,computed:Zt,beforeCreate:ga,created:ga,beforeMount:ga,mounted:ga,beforeUpdate:ga,updated:ga,beforeDestroy:ga,beforeUnmount:ga,destroyed:ga,unmounted:ga,activated:ga,deactivated:ga,errorCaptured:ga,serverPrefetch:ga,components:Zt,directives:Zt,watch:op,provide:xr,inject:lp};function xr(e,a){return a?e?function(){return sa(ye(e)?e.call(this,this):e,ye(a)?a.call(this,this):a)}:a:e}function lp(e,a){return Zt(pl(e),pl(a))}function pl(e){if(Me(e)){const a={};for(let n=0;n<e.length;n++)a[e[n]]=e[n];return a}return e}function ga(e,a){return e?[...new Set([].concat(e,a))]:a}function Zt(e,a){return e?sa(Object.create(null),e,a):a}function yr(e,a){return e?Me(e)&&Me(a)?[...new Set([...e,...a])]:sa(Object.create(null),Tr(e),Tr(a??{})):a}function op(e,a){if(!e)return a;if(!a)return e;const n=sa(Object.create(null),e);for(const t in a)n[t]=ga(e[t],a[t]);return n}function Vc(){return{app:null,config:{isNativeTag:qH,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rp=0;function cp(e,a){return function(t,s=null){ye(t)||(t=sa({},t)),s!=null&&!ze(s)&&(s=null);const i=Vc(),l=new Set;let o=!1;const r=i.app={_uid:rp++,_component:t,_props:s,_container:null,_context:i,_instance:null,version:Lp,get config(){return i.config},set config(c){},use(c,...u){return l.has(c)||(c&&ye(c.install)?(l.add(c),c.install(r,...u)):ye(c)&&(l.add(c),c(r,...u))),r},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),r},component(c,u){return u?(i.components[c]=u,r):i.components[c]},directive(c,u){return u?(i.directives[c]=u,r):i.directives[c]},mount(c,u,H){if(!o){const p=d(t,s);return p.appContext=i,u&&a?a(p,c):e(p,c,H),o=!0,r._container=c,c.__vue_app__=r,ki(p.component)||p.component.proxy}},unmount(){o&&(e(null,r._container),delete r._container.__vue_app__)},provide(c,u){return i.provides[c]=u,r},runWithContext(c){ai=r;try{return c()}finally{ai=null}}};return r}}let ai=null;function Oe(e,a){if(ua){let n=ua.provides;const t=ua.parent&&ua.parent.provides;t===n&&(n=ua.provides=Object.create(t)),n[e]=a}}function Re(e,a,n=!1){const t=ua||Ba;if(t||ai){const s=t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:ai._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ye(a)?a.call(t&&t.proxy):a}}function dp(e,a,n,t=!1){const s={},i={};$s(i,gi,1),e.propsDefaults=Object.create(null),_c(e,a,s,i);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);n?e.props=t?s:x0(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function up(e,a,n,t){const{props:s,attrs:i,vnode:{patchFlag:l}}=e,o=De(s),[r]=e.propsOptions;let c=!1;if((t||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let H=0;H<u.length;H++){let p=u[H];if(Ni(e.emitsOptions,p))continue;const m=a[p];if(r)if(Le(i,p))m!==i[p]&&(i[p]=m,c=!0);else{const h=Wa(p);s[h]=ml(r,o,h,m,e,!1)}else m!==i[p]&&(i[p]=m,c=!0)}}}else{_c(e,a,s,i)&&(c=!0);let u;for(const H in o)(!a||!Le(a,H)&&((u=Rt(H))===H||!Le(a,u)))&&(r?n&&(n[H]!==void 0||n[u]!==void 0)&&(s[H]=ml(r,o,H,void 0,e,!0)):delete s[H]);if(i!==o)for(const H in i)(!a||!Le(a,H))&&(delete i[H],c=!0)}c&&An(e,"set","$attrs")}function _c(e,a,n,t){const[s,i]=e.propsOptions;let l=!1,o;if(a)for(let r in a){if(Ws(r))continue;const c=a[r];let u;s&&Le(s,u=Wa(r))?!i||!i.includes(u)?n[u]=c:(o||(o={}))[u]=c:Ni(e.emitsOptions,r)||(!(r in t)||c!==t[r])&&(t[r]=c,l=!0)}if(i){const r=De(n),c=o||Qe;for(let u=0;u<i.length;u++){const H=i[u];n[H]=ml(s,r,H,c[H],e,!Le(c,H))}}return l}function ml(e,a,n,t,s,i){const l=e[n];if(l!=null){const o=Le(l,"default");if(o&&t===void 0){const r=l.default;if(l.type!==Function&&!l.skipFactory&&ye(r)){const{propsDefaults:c}=s;n in c?t=c[n]:(Dt(s),t=c[n]=r.call(null,a),nt())}else t=r}l[0]&&(i&&!o?t=!1:l[1]&&(t===""||t===Rt(n))&&(t=!0))}return t}function Wc(e,a,n=!1){const t=a.propsCache,s=t.get(e);if(s)return s;const i=e.props,l={},o=[];let r=!1;if(!ye(e)){const u=H=>{r=!0;const[p,m]=Wc(H,a,!0);sa(l,p),m&&o.push(...m)};!n&&a.mixins.length&&a.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!r)return ze(e)&&t.set(e,kt),kt;if(Me(i))for(let u=0;u<i.length;u++){const H=Wa(i[u]);Dr(H)&&(l[H]=Qe)}else if(i)for(const u in i){const H=Wa(u);if(Dr(H)){const p=i[u],m=l[H]=Me(p)||ye(p)?{type:p}:sa({},p);if(m){const h=Er(Boolean,m.type),A=Er(String,m.type);m[0]=h>-1,m[1]=A<0||h<A,(h>-1||Le(m,"default"))&&o.push(H)}}}const c=[l,o];return ze(e)&&t.set(e,c),c}function Dr(e){return e[0]!=="$"}function br(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function Pr(e,a){return br(e)===br(a)}function Er(e,a){return Me(a)?a.findIndex(n=>Pr(n,e)):ye(a)&&Pr(a,e)?0:-1}const zc=e=>e[0]==="_"||e==="$stable",go=e=>Me(e)?e.map(ln):[ln(e)],Hp=(e,a,n)=>{if(a._n)return a;const t=He((...s)=>go(a(...s)),n);return t._c=!1,t},Qc=(e,a,n)=>{const t=e._ctx;for(const s in e){if(zc(s))continue;const i=e[s];if(ye(i))a[s]=Hp(s,i,t);else if(i!=null){const l=go(i);a[s]=()=>l}}},Oc=(e,a)=>{const n=go(a);e.slots.default=()=>n},pp=(e,a)=>{if(e.vnode.shapeFlag&32){const n=a._;n?(e.slots=De(a),$s(a,"_",n)):Qc(a,e.slots={})}else e.slots={},a&&Oc(e,a);$s(e.slots,gi,1)},mp=(e,a,n)=>{const{vnode:t,slots:s}=e;let i=!0,l=Qe;if(t.shapeFlag&32){const o=a._;o?n&&o===1?i=!1:(sa(s,a),!n&&o===1&&delete s._):(i=!a.$stable,Qc(a,s)),l=a}else a&&(Oc(e,a),l={default:1});if(i)for(const o in s)!zc(o)&&!(o in l)&&delete s[o]};function hl(e,a,n,t,s=!1){if(Me(e)){e.forEach((p,m)=>hl(p,a&&(Me(a)?a[m]:a),n,t,s));return}if(Qs(t)&&!s)return;const i=t.shapeFlag&4?ki(t.component)||t.component.proxy:t.el,l=s?null:i,{i:o,r}=e,c=a&&a.r,u=o.refs===Qe?o.refs={}:o.refs,H=o.setupState;if(c!=null&&c!==r&&(Je(c)?(u[c]=null,Le(H,c)&&(H[c]=null)):Xe(c)&&(c.value=null)),ye(r))Bn(r,o,12,[l,u]);else{const p=Je(r),m=Xe(r);if(p||m){const h=()=>{if(e.f){const A=p?Le(H,r)?H[r]:u[r]:r.value;s?Me(A)&&Zl(A,i):Me(A)?A.includes(i)||A.push(i):p?(u[r]=[i],Le(H,r)&&(H[r]=u[r])):(r.value=[i],e.k&&(u[e.k]=r.value))}else p?(u[r]=l,Le(H,r)&&(H[r]=l)):m&&(r.value=l,e.k&&(u[e.k]=l))};l?(h.id=-1,va(h,n)):h()}}}const va=z0;function hp(e){return Ap(e)}function Ap(e,a){const n=ll();n.__VUE__=!0;const{insert:t,remove:s,patchProp:i,createElement:l,createText:o,createComment:r,setText:c,setElementText:u,parentNode:H,nextSibling:p,setScopeId:m=Za,insertStaticContent:h}=e,A=(T,y,R,G=null,V=null,X=null,ee=!1,Z=null,se=!!y.dynamicChildren)=>{if(T===y)return;T&&!$n(T,y)&&(G=Se(T),de(T,V,X,!0),T=null),y.patchFlag===-2&&(se=!1,y.dynamicChildren=null);const{type:J,ref:pe,shapeFlag:ue}=y;switch(J){case vs:f(T,y,R,G);break;case en:M(T,y,R,G);break;case Ki:T==null&&g(y,R,G,ee);break;case me:P(T,y,R,G,V,X,ee,Z,se);break;default:ue&1?v(T,y,R,G,V,X,ee,Z,se):ue&6?B(T,y,R,G,V,X,ee,Z,se):(ue&64||ue&128)&&J.process(T,y,R,G,V,X,ee,Z,se,re)}pe!=null&&V&&hl(pe,T&&T.ref,X,y||T,!y)},f=(T,y,R,G)=>{if(T==null)t(y.el=o(y.children),R,G);else{const V=y.el=T.el;y.children!==T.children&&c(V,y.children)}},M=(T,y,R,G)=>{T==null?t(y.el=r(y.children||""),R,G):y.el=T.el},g=(T,y,R,G)=>{[T.el,T.anchor]=h(T.children,y,R,G,T.el,T.anchor)},k=({el:T,anchor:y},R,G)=>{let V;for(;T&&T!==y;)V=p(T),t(T,R,G),T=V;t(y,R,G)},x=({el:T,anchor:y})=>{let R;for(;T&&T!==y;)R=p(T),s(T),T=R;s(y)},v=(T,y,R,G,V,X,ee,Z,se)=>{ee=ee||y.type==="svg",T==null?D(y,R,G,V,X,ee,Z,se):S(T,y,V,X,ee,Z,se)},D=(T,y,R,G,V,X,ee,Z)=>{let se,J;const{type:pe,props:ue,shapeFlag:he,transition:Te,dirs:Ee}=T;if(se=T.el=l(T.type,X,ue&&ue.is,ue),he&8?u(se,T.children):he&16&&C(T.children,se,null,G,V,X&&pe!=="foreignObject",ee,Z),Ee&&Wn(T,null,G,"created"),E(se,T,T.scopeId,ee,G),ue){for(const Ve in ue)Ve!=="value"&&!Ws(Ve)&&i(se,Ve,null,ue[Ve],X,T.children,G,V,z);"value"in ue&&i(se,"value",null,ue.value),(J=ue.onVnodeBeforeMount)&&sn(J,G,T)}Ee&&Wn(T,null,G,"beforeMount");const We=(!V||V&&!V.pendingBranch)&&Te&&!Te.persisted;We&&Te.beforeEnter(se),t(se,y,R),((J=ue&&ue.onVnodeMounted)||We||Ee)&&va(()=>{J&&sn(J,G,T),We&&Te.enter(se),Ee&&Wn(T,null,G,"mounted")},V)},E=(T,y,R,G,V)=>{if(R&&m(T,R),G)for(let X=0;X<G.length;X++)m(T,G[X]);if(V){let X=V.subTree;if(y===X){const ee=V.vnode;E(T,ee,ee.scopeId,ee.slotScopeIds,V.parent)}}},C=(T,y,R,G,V,X,ee,Z,se=0)=>{for(let J=se;J<T.length;J++){const pe=T[J]=Z?wn(T[J]):ln(T[J]);A(null,pe,y,R,G,V,X,ee,Z)}},S=(T,y,R,G,V,X,ee)=>{const Z=y.el=T.el;let{patchFlag:se,dynamicChildren:J,dirs:pe}=y;se|=T.patchFlag&16;const ue=T.props||Qe,he=y.props||Qe;let Te;R&&zn(R,!1),(Te=he.onVnodeBeforeUpdate)&&sn(Te,R,y,T),pe&&Wn(y,T,R,"beforeUpdate"),R&&zn(R,!0);const Ee=V&&y.type!=="foreignObject";if(J?b(T.dynamicChildren,J,Z,R,G,Ee,X):ee||L(T,y,Z,null,R,G,Ee,X,!1),se>0){if(se&16)w(Z,y,ue,he,R,G,V);else if(se&2&&ue.class!==he.class&&i(Z,"class",null,he.class,V),se&4&&i(Z,"style",ue.style,he.style,V),se&8){const We=y.dynamicProps;for(let Ve=0;Ve<We.length;Ve++){const la=We[Ve],Xa=ue[la],Ht=he[la];(Ht!==Xa||la==="value")&&i(Z,la,Xa,Ht,V,T.children,R,G,z)}}se&1&&T.children!==y.children&&u(Z,y.children)}else!ee&&J==null&&w(Z,y,ue,he,R,G,V);((Te=he.onVnodeUpdated)||pe)&&va(()=>{Te&&sn(Te,R,y,T),pe&&Wn(y,T,R,"updated")},G)},b=(T,y,R,G,V,X,ee)=>{for(let Z=0;Z<y.length;Z++){const se=T[Z],J=y[Z],pe=se.el&&(se.type===me||!$n(se,J)||se.shapeFlag&70)?H(se.el):R;A(se,J,pe,null,G,V,X,ee,!0)}},w=(T,y,R,G,V,X,ee)=>{if(R!==G){if(R!==Qe)for(const Z in R)!Ws(Z)&&!(Z in G)&&i(T,Z,R[Z],null,ee,y.children,V,X,z);for(const Z in G){if(Ws(Z))continue;const se=G[Z],J=R[Z];se!==J&&Z!=="value"&&i(T,Z,J,se,ee,y.children,V,X,z)}"value"in G&&i(T,"value",R.value,G.value)}},P=(T,y,R,G,V,X,ee,Z,se)=>{const J=y.el=T?T.el:o(""),pe=y.anchor=T?T.anchor:o("");let{patchFlag:ue,dynamicChildren:he,slotScopeIds:Te}=y;Te&&(Z=Z?Z.concat(Te):Te),T==null?(t(J,R,G),t(pe,R,G),C(y.children,R,pe,V,X,ee,Z,se)):ue>0&&ue&64&&he&&T.dynamicChildren?(b(T.dynamicChildren,he,R,V,X,ee,Z),(y.key!=null||V&&y===V.subTree)&&ko(T,y,!0)):L(T,y,R,pe,V,X,ee,Z,se)},B=(T,y,R,G,V,X,ee,Z,se)=>{y.slotScopeIds=Z,T==null?y.shapeFlag&512?V.ctx.activate(y,R,G,ee,se):F(y,R,G,V,X,ee,se):ne(T,y,se)},F=(T,y,R,G,V,X,ee)=>{const Z=T.component=yp(T,G,V);if(fi(T)&&(Z.ctx.renderer=re),Dp(Z),Z.asyncDep){if(V&&V.registerDep(Z,q),!T.el){const se=Z.subTree=d(en);M(null,se,y,R)}return}q(Z,T,y,R,V,X,ee)},ne=(T,y,R)=>{const G=y.component=T.component;if(V0(T,y,R))if(G.asyncDep&&!G.asyncResolved){U(G,y,R);return}else G.next=y,I0(G.update),G.update();else y.el=T.el,G.vnode=y},q=(T,y,R,G,V,X,ee)=>{const Z=()=>{if(T.isMounted){let{next:pe,bu:ue,u:he,parent:Te,vnode:Ee}=T,We=pe,Ve;zn(T,!1),pe?(pe.el=Ee.el,U(T,pe,ee)):pe=Ee,ue&&zs(ue),(Ve=pe.props&&pe.props.onVnodeBeforeUpdate)&&sn(Ve,Te,pe,Ee),zn(T,!0);const la=zi(T),Xa=T.subTree;T.subTree=la,A(Xa,la,H(Xa.el),Se(Xa),T,V,X),pe.el=la.el,We===null&&_0(T,la.el),he&&va(he,V),(Ve=pe.props&&pe.props.onVnodeUpdated)&&va(()=>sn(Ve,Te,pe,Ee),V)}else{let pe;const{el:ue,props:he}=y,{bm:Te,m:Ee,parent:We}=T,Ve=Qs(y);if(zn(T,!1),Te&&zs(Te),!Ve&&(pe=he&&he.onVnodeBeforeMount)&&sn(pe,We,y),zn(T,!0),ue&&Ae){const la=()=>{T.subTree=zi(T),Ae(ue,T.subTree,T,V,null)};Ve?y.type.__asyncLoader().then(()=>!T.isUnmounted&&la()):la()}else{const la=T.subTree=zi(T);A(null,la,R,G,T,V,X),y.el=la.el}if(Ee&&va(Ee,V),!Ve&&(pe=he&&he.onVnodeMounted)){const la=y;va(()=>sn(pe,We,la),V)}(y.shapeFlag&256||We&&Qs(We.vnode)&&We.vnode.shapeFlag&256)&&T.a&&va(T.a,V),T.isMounted=!0,y=R=G=null}},se=T.effect=new lo(Z,()=>ho(J),T.scope),J=T.update=()=>se.run();J.id=T.uid,zn(T,!0),J()},U=(T,y,R)=>{y.component=T;const G=T.vnode.props;T.vnode=y,T.next=null,up(T,y.props,G,R),mp(T,y.children,R),Bt(),Mr(),It()},L=(T,y,R,G,V,X,ee,Z,se=!1)=>{const J=T&&T.children,pe=T?T.shapeFlag:0,ue=y.children,{patchFlag:he,shapeFlag:Te}=y;if(he>0){if(he&128){Y(J,ue,R,G,V,X,ee,Z,se);return}else if(he&256){j(J,ue,R,G,V,X,ee,Z,se);return}}Te&8?(pe&16&&z(J,V,X),ue!==J&&u(R,ue)):pe&16?Te&16?Y(J,ue,R,G,V,X,ee,Z,se):z(J,V,X,!0):(pe&8&&u(R,""),Te&16&&C(ue,R,G,V,X,ee,Z,se))},j=(T,y,R,G,V,X,ee,Z,se)=>{T=T||kt,y=y||kt;const J=T.length,pe=y.length,ue=Math.min(J,pe);let he;for(he=0;he<ue;he++){const Te=y[he]=se?wn(y[he]):ln(y[he]);A(T[he],Te,R,null,V,X,ee,Z,se)}J>pe?z(T,V,X,!0,!1,ue):C(y,R,G,V,X,ee,Z,se,ue)},Y=(T,y,R,G,V,X,ee,Z,se)=>{let J=0;const pe=y.length;let ue=T.length-1,he=pe-1;for(;J<=ue&&J<=he;){const Te=T[J],Ee=y[J]=se?wn(y[J]):ln(y[J]);if($n(Te,Ee))A(Te,Ee,R,null,V,X,ee,Z,se);else break;J++}for(;J<=ue&&J<=he;){const Te=T[ue],Ee=y[he]=se?wn(y[he]):ln(y[he]);if($n(Te,Ee))A(Te,Ee,R,null,V,X,ee,Z,se);else break;ue--,he--}if(J>ue){if(J<=he){const Te=he+1,Ee=Te<pe?y[Te].el:G;for(;J<=he;)A(null,y[J]=se?wn(y[J]):ln(y[J]),R,Ee,V,X,ee,Z,se),J++}}else if(J>he)for(;J<=ue;)de(T[J],V,X,!0),J++;else{const Te=J,Ee=J,We=new Map;for(J=Ee;J<=he;J++){const Pa=y[J]=se?wn(y[J]):ln(y[J]);Pa.key!=null&&We.set(Pa.key,J)}let Ve,la=0;const Xa=he-Ee+1;let Ht=!1,rr=0;const Kt=new Array(Xa);for(J=0;J<Xa;J++)Kt[J]=0;for(J=Te;J<=ue;J++){const Pa=T[J];if(la>=Xa){de(Pa,V,X,!0);continue}let tn;if(Pa.key!=null)tn=We.get(Pa.key);else for(Ve=Ee;Ve<=he;Ve++)if(Kt[Ve-Ee]===0&&$n(Pa,y[Ve])){tn=Ve;break}tn===void 0?de(Pa,V,X,!0):(Kt[tn-Ee]=J+1,tn>=rr?rr=tn:Ht=!0,A(Pa,y[tn],R,null,V,X,ee,Z,se),la++)}const cr=Ht?Np(Kt):kt;for(Ve=cr.length-1,J=Xa-1;J>=0;J--){const Pa=Ee+J,tn=y[Pa],dr=Pa+1<pe?y[Pa+1].el:G;Kt[J]===0?A(null,tn,R,dr,V,X,ee,Z,se):Ht&&(Ve<0||J!==cr[Ve]?O(tn,R,dr,2):Ve--)}}},O=(T,y,R,G,V=null)=>{const{el:X,type:ee,transition:Z,children:se,shapeFlag:J}=T;if(J&6){O(T.component.subTree,y,R,G);return}if(J&128){T.suspense.move(y,R,G);return}if(J&64){ee.move(T,y,R,re);return}if(ee===me){t(X,y,R);for(let ue=0;ue<se.length;ue++)O(se[ue],y,R,G);t(T.anchor,y,R);return}if(ee===Ki){k(T,y,R);return}if(G!==2&&J&1&&Z)if(G===0)Z.beforeEnter(X),t(X,y,R),va(()=>Z.enter(X),V);else{const{leave:ue,delayLeave:he,afterLeave:Te}=Z,Ee=()=>t(X,y,R),We=()=>{ue(X,()=>{Ee(),Te&&Te()})};he?he(X,Ee,We):We()}else t(X,y,R)},de=(T,y,R,G=!1,V=!1)=>{const{type:X,props:ee,ref:Z,children:se,dynamicChildren:J,shapeFlag:pe,patchFlag:ue,dirs:he}=T;if(Z!=null&&hl(Z,null,R,T,!0),pe&256){y.ctx.deactivate(T);return}const Te=pe&1&&he,Ee=!Qs(T);let We;if(Ee&&(We=ee&&ee.onVnodeBeforeUnmount)&&sn(We,y,T),pe&6)ke(T.component,R,G);else{if(pe&128){T.suspense.unmount(R,G);return}Te&&Wn(T,null,y,"beforeUnmount"),pe&64?T.type.remove(T,y,R,V,re,G):J&&(X!==me||ue>0&&ue&64)?z(J,y,R,!1,!0):(X===me&&ue&384||!V&&pe&16)&&z(se,y,R),G&&Ne(T)}(Ee&&(We=ee&&ee.onVnodeUnmounted)||Te)&&va(()=>{We&&sn(We,y,T),Te&&Wn(T,null,y,"unmounted")},R)},Ne=T=>{const{type:y,el:R,anchor:G,transition:V}=T;if(y===me){Be(R,G);return}if(y===Ki){x(T);return}const X=()=>{s(R),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(T.shapeFlag&1&&V&&!V.persisted){const{leave:ee,delayLeave:Z}=V,se=()=>ee(R,X);Z?Z(T.el,X,se):se()}else X()},Be=(T,y)=>{let R;for(;T!==y;)R=p(T),s(T),T=R;s(y)},ke=(T,y,R)=>{const{bum:G,scope:V,update:X,subTree:ee,um:Z}=T;G&&zs(G),V.stop(),X&&(X.active=!1,de(ee,T,y,R)),Z&&va(Z,y),va(()=>{T.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},z=(T,y,R,G=!1,V=!1,X=0)=>{for(let ee=X;ee<T.length;ee++)de(T[ee],y,R,G,V)},Se=T=>T.shapeFlag&6?Se(T.component.subTree):T.shapeFlag&128?T.suspense.next():p(T.anchor||T.el),ia=(T,y,R)=>{T==null?y._vnode&&de(y._vnode,null,null,!0):A(y._vnode||null,T,y,null,null,null,R),Mr(),Tc(),y._vnode=T},re={p:A,um:de,m:O,r:Ne,mt:F,mc:C,pc:L,pbc:b,n:Se,o:e};let K,Ae;return a&&([K,Ae]=a(re)),{render:ia,hydrate:K,createApp:cp(ia,K)}}function zn({effect:e,update:a},n){e.allowRecurse=a.allowRecurse=n}function ko(e,a,n=!1){const t=e.children,s=a.children;if(Me(t)&&Me(s))for(let i=0;i<t.length;i++){const l=t[i];let o=s[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[i]=wn(s[i]),o.el=l.el),n||ko(l,o)),o.type===vs&&(o.el=l.el)}}function Np(e){const a=e.slice(),n=[0];let t,s,i,l,o;const r=e.length;for(t=0;t<r;t++){const c=e[t];if(c!==0){if(s=n[n.length-1],e[s]<c){a[t]=s,n.push(t);continue}for(i=0,l=n.length-1;i<l;)o=i+l>>1,e[n[o]]<c?i=o+1:l=o;c<e[n[i]]&&(i>0&&(a[t]=n[i-1]),n[i]=t)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=a[l];return n}const fp=e=>e.__isTeleport,ts=e=>e&&(e.disabled||e.disabled===""),wr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Al=(e,a)=>{const n=e&&e.to;return Je(n)?a?a(n):null:n},Mp={__isTeleport:!0,process(e,a,n,t,s,i,l,o,r,c){const{mc:u,pc:H,pbc:p,o:{insert:m,querySelector:h,createText:A,createComment:f}}=c,M=ts(a.props);let{shapeFlag:g,children:k,dynamicChildren:x}=a;if(e==null){const v=a.el=A(""),D=a.anchor=A("");m(v,n,t),m(D,n,t);const E=a.target=Al(a.props,h),C=a.targetAnchor=A("");E&&(m(C,E),l=l||wr(E));const S=(b,w)=>{g&16&&u(k,b,w,s,i,l,o,r)};M?S(n,D):E&&S(E,C)}else{a.el=e.el;const v=a.anchor=e.anchor,D=a.target=e.target,E=a.targetAnchor=e.targetAnchor,C=ts(e.props),S=C?n:D,b=C?v:E;if(l=l||wr(D),x?(p(e.dynamicChildren,x,S,s,i,l,o),ko(e,a,!0)):r||H(e,a,S,b,s,i,l,o,!1),M)C||Gs(a,n,v,c,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const w=a.target=Al(a.props,h);w&&Gs(a,w,null,c,0)}else C&&Gs(a,D,E,c,1)}Kc(a)},remove(e,a,n,t,{um:s,o:{remove:i}},l){const{shapeFlag:o,children:r,anchor:c,targetAnchor:u,target:H,props:p}=e;if(H&&i(u),(l||!ts(p))&&(i(c),o&16))for(let m=0;m<r.length;m++){const h=r[m];s(h,a,n,!0,!!h.dynamicChildren)}},move:Gs,hydrate:Cp};function Gs(e,a,n,{o:{insert:t},m:s},i=2){i===0&&t(e.targetAnchor,a,n);const{el:l,anchor:o,shapeFlag:r,children:c,props:u}=e,H=i===2;if(H&&t(l,a,n),(!H||ts(u))&&r&16)for(let p=0;p<c.length;p++)s(c[p],a,n,2);H&&t(o,a,n)}function Cp(e,a,n,t,s,i,{o:{nextSibling:l,parentNode:o,querySelector:r}},c){const u=a.target=Al(a.props,r);if(u){const H=u._lpa||u.firstChild;if(a.shapeFlag&16)if(ts(a.props))a.anchor=c(l(e),a,o(e),n,t,s,i),a.targetAnchor=H;else{a.anchor=l(e);let p=H;for(;p;)if(p=l(p),p&&p.nodeType===8&&p.data==="teleport anchor"){a.targetAnchor=p,u._lpa=a.targetAnchor&&l(a.targetAnchor);break}c(H,a,u,n,t,s,i)}Kc(a)}return a.anchor&&l(a.anchor)}const gp=Mp;function Kc(e){const a=e.ctx;if(a&&a.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",a.uid),n=n.nextSibling;a.ut()}}const me=Symbol.for("v-fgt"),vs=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),Ki=Symbol.for("v-stc"),ss=[];let $a=null;function ge(e=!1){ss.push($a=e?null:[])}function kp(){ss.pop(),$a=ss[ss.length-1]||null}let ps=1;function Rr(e){ps+=e}function Xc(e){return e.dynamicChildren=ps>0?$a||kt:null,kp(),ps>0&&$a&&$a.push(e),e}function Mt(e,a,n,t,s,i){return Xc(aa(e,a,n,t,s,i,!0))}function Pe(e,a,n,t,s){return Xc(d(e,a,n,t,s,!0))}function Nl(e){return e?e.__v_isVNode===!0:!1}function $n(e,a){return e.type===a.type&&e.key===a.key}const gi="__vInternal",jc=({key:e})=>e??null,Os=({ref:e,ref_key:a,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Je(e)||Xe(e)||ye(e)?{i:Ba,r:e,k:a,f:!!n}:e:null);function aa(e,a=null,n=null,t=0,s=null,i=e===me?0:1,l=!1,o=!1){const r={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&jc(a),ref:a&&Os(a),scopeId:yc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:t,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ba};return o?(So(r,n),i&128&&e.normalize(r)):n&&(r.shapeFlag|=Je(n)?8:16),ps>0&&!l&&$a&&(r.patchFlag>0||i&6)&&r.patchFlag!==32&&$a.push(r),r}const d=Sp;function Sp(e,a=null,n=null,t=0,s=null,i=!1){if((!e||e===Uc)&&(e=en),Nl(e)){const o=Nn(e,a,!0);return n&&So(o,n),ps>0&&!i&&$a&&(o.shapeFlag&6?$a[$a.indexOf(e)]=o:$a.push(o)),o.patchFlag|=-2,o}if(Rp(e)&&(e=e.__vccOpts),a){a=Tp(a);let{class:o,style:r}=a;o&&!Je(o)&&(a.class=to(o)),ze(r)&&(hc(r)&&!Me(r)&&(r=sa({},r)),a.style=no(r))}const l=Je(e)?1:W0(e)?128:fp(e)?64:ze(e)?4:ye(e)?2:0;return aa(e,a,n,t,s,l,i,!0)}function Tp(e){return e?hc(e)||gi in e?sa({},e):e:null}function Nn(e,a,n=!1){const{props:t,ref:s,patchFlag:i,children:l}=e,o=a?te(t||{},a):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&jc(o),ref:a&&a.ref?n&&s?Me(s)?s.concat(Os(a)):[s,Os(a)]:Os(a):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nn(e.ssContent),ssFallback:e.ssFallback&&Nn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function we(e=" ",a=0){return d(vs,null,e,a)}function Qn(e="",a=!1){return a?(ge(),Pe(en,null,e)):d(en,null,e)}function ln(e){return e==null||typeof e=="boolean"?d(en):Me(e)?d(me,null,e.slice()):typeof e=="object"?wn(e):d(vs,null,String(e))}function wn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nn(e)}function So(e,a){let n=0;const{shapeFlag:t}=e;if(a==null)a=null;else if(Me(a))n=16;else if(typeof a=="object")if(t&65){const s=a.default;s&&(s._c&&(s._d=!1),So(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=a._;!s&&!(gi in a)?a._ctx=Ba:s===3&&Ba&&(Ba.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else ye(a)?(a={default:a,_ctx:Ba},n=32):(a=String(a),t&64?(n=16,a=[we(a)]):n=8);e.children=a,e.shapeFlag|=n}function te(...e){const a={};for(let n=0;n<e.length;n++){const t=e[n];for(const s in t)if(s==="class")a.class!==t.class&&(a.class=to([a.class,t.class]));else if(s==="style")a.style=no([a.style,t.style]);else if(Hi(s)){const i=a[s],l=t[s];l&&i!==l&&!(Me(i)&&i.includes(l))&&(a[s]=i?[].concat(i,l):l)}else s!==""&&(a[s]=t[s])}return a}function sn(e,a,n,t=null){_a(e,a,7,[n,t])}const vp=Vc();let xp=0;function yp(e,a,n){const t=e.type,s=(a?a.appContext:e.appContext)||vp,i={uid:xp++,vnode:e,type:t,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new sc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wc(t,s),emitsOptions:xc(t,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:t.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=q0.bind(null,i),e.ce&&e.ce(i),i}let ua=null;const To=()=>ua||Ba;let vo,pt,Br="__VUE_INSTANCE_SETTERS__";(pt=ll()[Br])||(pt=ll()[Br]=[]),pt.push(e=>ua=e),vo=e=>{pt.length>1?pt.forEach(a=>a(e)):pt[0](e)};const Dt=e=>{vo(e),e.scope.on()},nt=()=>{ua&&ua.scope.off(),vo(null)};function $c(e){return e.vnode.shapeFlag&4}let ms=!1;function Dp(e,a=!1){ms=a;const{props:n,children:t}=e.vnode,s=$c(e);dp(e,n,s,a),pp(e,t);const i=s?bp(e,a):void 0;return ms=!1,i}function bp(e,a){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ac(new Proxy(e.ctx,np));const{setup:t}=n;if(t){const s=e.setupContext=t.length>1?Ep(e):null;Dt(e),Bt();const i=Bn(t,e,0,[e.props,s]);if(It(),nt(),Z1(i)){if(i.then(nt,nt),a)return i.then(l=>{Ir(e,l,a)}).catch(l=>{Ai(l,e,0)});e.asyncDep=i}else Ir(e,i,a)}else Yc(e,a)}function Ir(e,a,n){ye(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:ze(a)&&(e.setupState=Cc(a)),Yc(e,n)}let Lr;function Yc(e,a,n){const t=e.type;if(!e.render){if(!a&&Lr&&!t.render){const s=t.template||Co(e).template;if(s){const{isCustomElement:i,compilerOptions:l}=e.appContext.config,{delimiters:o,compilerOptions:r}=t,c=sa(sa({isCustomElement:i,delimiters:o},l),r);t.render=Lr(s,c)}}e.render=t.render||Za}Dt(e),Bt(),tp(e),It(),nt()}function Pp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,n){return ba(e,"get","$attrs"),a[n]}}))}function Ep(e){const a=n=>{e.exposed=n||{}};return{get attrs(){return Pp(e)},slots:e.slots,emit:e.emit,expose:a}}function ki(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Cc(Ac(e.exposed)),{get(a,n){if(n in a)return a[n];if(n in ns)return ns[n](e)},has(a,n){return n in a||n in ns}}))}function wp(e,a=!0){return ye(e)?e.displayName||e.name:e.name||a&&e.__name}function Rp(e){return ye(e)&&"__vccOpts"in e}const N=(e,a)=>w0(e,a,ms);function Gn(e,a,n){const t=arguments.length;return t===2?ze(a)&&!Me(a)?Nl(a)?d(e,null,[a]):d(e,a):d(e,null,a):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&Nl(n)&&(n=[n]),d(e,a,n))}const Bp=Symbol.for("v-scx"),Ip=()=>Re(Bp),Lp="3.3.4",Gp="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,Gr=Yn&&Yn.createElement("template"),qp={insert:(e,a,n)=>{a.insertBefore(e,n||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,n,t)=>{const s=a?Yn.createElementNS(Gp,e):Yn.createElement(e,n?{is:n}:void 0);return e==="select"&&t&&t.multiple!=null&&s.setAttribute("multiple",t.multiple),s},createText:e=>Yn.createTextNode(e),createComment:e=>Yn.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Yn.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,n,t,s,i){const l=n?n.previousSibling:a.lastChild;if(s&&(s===i||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gr.innerHTML=t?`<svg>${e}</svg>`:e;const o=Gr.content;if(t){const r=o.firstChild;for(;r.firstChild;)o.appendChild(r.firstChild);o.removeChild(r)}a.insertBefore(o,n)}return[l?l.nextSibling:a.firstChild,n?n.previousSibling:a.lastChild]}};function Up(e,a,n){const t=e._vtc;t&&(a=(a?[a,...t]:[...t]).join(" ")),a==null?e.removeAttribute("class"):n?e.setAttribute("class",a):e.className=a}function Fp(e,a,n){const t=e.style,s=Je(n);if(n&&!s){if(a&&!Je(a))for(const i in a)n[i]==null&&fl(t,i,"");for(const i in n)fl(t,i,n[i])}else{const i=t.display;s?a!==n&&(t.cssText=n):a&&e.removeAttribute("style"),"_vod"in e&&(t.display=i)}}const qr=/\s*!important$/;function fl(e,a,n){if(Me(n))n.forEach(t=>fl(e,a,t));else if(n==null&&(n=""),a.startsWith("--"))e.setProperty(a,n);else{const t=Vp(e,a);qr.test(n)?e.setProperty(Rt(t),n.replace(qr,""),"important"):e[t]=n}}const Ur=["Webkit","Moz","ms"],Xi={};function Vp(e,a){const n=Xi[a];if(n)return n;let t=Wa(a);if(t!=="filter"&&t in e)return Xi[a]=t;t=Sn(t);for(let s=0;s<Ur.length;s++){const i=Ur[s]+t;if(i in e)return Xi[a]=i}return a}const Fr="http://www.w3.org/1999/xlink";function _p(e,a,n,t,s){if(t&&a.startsWith("xlink:"))n==null?e.removeAttributeNS(Fr,a.slice(6,a.length)):e.setAttributeNS(Fr,a,n);else{const i=$H(a);n==null||i&&!nc(n)?e.removeAttribute(a):e.setAttribute(a,i?"":n)}}function Wp(e,a,n,t,s,i,l){if(a==="innerHTML"||a==="textContent"){t&&l(t,s,i),e[a]=n??"";return}const o=e.tagName;if(a==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(a);return}let r=!1;if(n===""||n==null){const c=typeof e[a];c==="boolean"?n=nc(n):n==null&&c==="string"?(n="",r=!0):c==="number"&&(n=0,r=!0)}try{e[a]=n}catch{}r&&e.removeAttribute(a)}function ft(e,a,n,t){e.addEventListener(a,n,t)}function zp(e,a,n,t){e.removeEventListener(a,n,t)}function Qp(e,a,n,t,s=null){const i=e._vei||(e._vei={}),l=i[a];if(t&&l)l.value=t;else{const[o,r]=Op(a);if(t){const c=i[a]=jp(t,s);ft(e,o,c,r)}else l&&(zp(e,o,l,r),i[a]=void 0)}}const Vr=/(?:Once|Passive|Capture)$/;function Op(e){let a;if(Vr.test(e)){a={};let t;for(;t=e.match(Vr);)e=e.slice(0,e.length-t[0].length),a[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rt(e.slice(2)),a]}let ji=0;const Kp=Promise.resolve(),Xp=()=>ji||(Kp.then(()=>ji=0),ji=Date.now());function jp(e,a){const n=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=n.attached)return;_a($p(t,n.value),a,5,[t])};return n.value=e,n.attached=Xp(),n}function $p(e,a){if(Me(a)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},a.map(t=>s=>!s._stopped&&t&&t(s))}else return a}const _r=/^on[a-z]/,Yp=(e,a,n,t,s=!1,i,l,o,r)=>{a==="class"?Up(e,t,s):a==="style"?Fp(e,n,t):Hi(a)?Jl(a)||Qp(e,a,n,t,l):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Jp(e,a,t,s))?Wp(e,a,t,i,l,o,r):(a==="true-value"?e._trueValue=t:a==="false-value"&&(e._falseValue=t),_p(e,a,t,s))};function Jp(e,a,n,t){return t?!!(a==="innerHTML"||a==="textContent"||a in e&&_r.test(a)&&ye(n)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA"||_r.test(a)&&Je(n)?!1:a in e}const Pn="transition",Xt="animation",cn=(e,{slots:a})=>Gn(K0,Zc(e),a);cn.displayName="Transition";const Jc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zp=cn.props=sa({},Pc,Jc),On=(e,a=[])=>{Me(e)?e.forEach(n=>n(...a)):e&&e(...a)},Wr=e=>e?Me(e)?e.some(a=>a.length>1):e.length>1:!1;function Zc(e){const a={};for(const P in e)P in Jc||(a[P]=e[P]);if(e.css===!1)return a;const{name:n="v",type:t,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:r=i,appearActiveClass:c=l,appearToClass:u=o,leaveFromClass:H=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=em(s),A=h&&h[0],f=h&&h[1],{onBeforeEnter:M,onEnter:g,onEnterCancelled:k,onLeave:x,onLeaveCancelled:v,onBeforeAppear:D=M,onAppear:E=g,onAppearCancelled:C=k}=a,S=(P,B,F)=>{En(P,B?u:o),En(P,B?c:l),F&&F()},b=(P,B)=>{P._isLeaving=!1,En(P,H),En(P,m),En(P,p),B&&B()},w=P=>(B,F)=>{const ne=P?E:g,q=()=>S(B,P,F);On(ne,[B,q]),zr(()=>{En(B,P?r:i),pn(B,P?u:o),Wr(ne)||Qr(B,t,A,q)})};return sa(a,{onBeforeEnter(P){On(M,[P]),pn(P,i),pn(P,l)},onBeforeAppear(P){On(D,[P]),pn(P,r),pn(P,c)},onEnter:w(!1),onAppear:w(!0),onLeave(P,B){P._isLeaving=!0;const F=()=>b(P,B);pn(P,H),ad(),pn(P,p),zr(()=>{P._isLeaving&&(En(P,H),pn(P,m),Wr(x)||Qr(P,t,f,F))}),On(x,[P,F])},onEnterCancelled(P){S(P,!1),On(k,[P])},onAppearCancelled(P){S(P,!0),On(C,[P])},onLeaveCancelled(P){b(P),On(v,[P])}})}function em(e){if(e==null)return null;if(ze(e))return[$i(e.enter),$i(e.leave)];{const a=$i(e);return[a,a]}}function $i(e){return zH(e)}function pn(e,a){a.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(a)}function En(e,a){a.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(a),n.size||(e._vtc=void 0))}function zr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let am=0;function Qr(e,a,n,t){const s=e._endId=++am,i=()=>{s===e._endId&&t()};if(n)return setTimeout(i,n);const{type:l,timeout:o,propCount:r}=ed(e,a);if(!l)return t();const c=l+"end";let u=0;const H=()=>{e.removeEventListener(c,p),i()},p=m=>{m.target===e&&++u>=r&&H()};setTimeout(()=>{u<r&&H()},o+1),e.addEventListener(c,p)}function ed(e,a){const n=window.getComputedStyle(e),t=h=>(n[h]||"").split(", "),s=t(`${Pn}Delay`),i=t(`${Pn}Duration`),l=Or(s,i),o=t(`${Xt}Delay`),r=t(`${Xt}Duration`),c=Or(o,r);let u=null,H=0,p=0;a===Pn?l>0&&(u=Pn,H=l,p=i.length):a===Xt?c>0&&(u=Xt,H=c,p=r.length):(H=Math.max(l,c),u=H>0?l>c?Pn:Xt:null,p=u?u===Pn?i.length:r.length:0);const m=u===Pn&&/\b(transform|all)(,|$)/.test(t(`${Pn}Property`).toString());return{type:u,timeout:H,propCount:p,hasTransform:m}}function Or(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((n,t)=>Kr(n)+Kr(e[t])))}function Kr(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ad(){return document.body.offsetHeight}const nd=new WeakMap,td=new WeakMap,sd={name:"TransitionGroup",props:sa({},Zp,{tag:String,moveClass:String}),setup(e,{slots:a}){const n=To(),t=bc();let s,i;return Lc(()=>{if(!s.length)return;const l=e.moveClass||`${e.name||"v"}-move`;if(!om(s[0].el,n.vnode.el,l))return;s.forEach(sm),s.forEach(im);const o=s.filter(lm);ad(),o.forEach(r=>{const c=r.el,u=c.style;pn(c,l),u.transform=u.webkitTransform=u.transitionDuration="";const H=c._moveCb=p=>{p&&p.target!==c||(!p||/transform$/.test(p.propertyName))&&(c.removeEventListener("transitionend",H),c._moveCb=null,En(c,l))};c.addEventListener("transitionend",H)})}),()=>{const l=De(e),o=Zc(l);let r=l.tag||me;s=i,i=a.default?No(a.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&Hs(u,us(u,o,t,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];Hs(u,us(u,o,t,n)),nd.set(u,u.el.getBoundingClientRect())}return d(r,null,i)}}},nm=e=>delete e.mode;sd.props;const tm=sd;function sm(e){const a=e.el;a._moveCb&&a._moveCb(),a._enterCb&&a._enterCb()}function im(e){td.set(e,e.el.getBoundingClientRect())}function lm(e){const a=nd.get(e),n=td.get(e),t=a.left-n.left,s=a.top-n.top;if(t||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${t}px,${s}px)`,i.transitionDuration="0s",e}}function om(e,a,n){const t=e.cloneNode();e._vtc&&e._vtc.forEach(l=>{l.split(/\s+/).forEach(o=>o&&t.classList.remove(o))}),n.split(/\s+/).forEach(l=>l&&t.classList.add(l)),t.style.display="none";const s=a.nodeType===1?a:a.parentNode;s.appendChild(t);const{hasTransform:i}=ed(t);return s.removeChild(t),i}const Xr=e=>{const a=e.props["onUpdate:modelValue"]||!1;return Me(a)?n=>zs(a,n):a};function rm(e){e.target.composing=!0}function jr(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const cm={created(e,{modifiers:{lazy:a,trim:n,number:t}},s){e._assign=Xr(s);const i=t||s.props&&s.props.type==="number";ft(e,a?"change":"input",l=>{if(l.target.composing)return;let o=e.value;n&&(o=o.trim()),i&&(o=il(o)),e._assign(o)}),n&&ft(e,"change",()=>{e.value=e.value.trim()}),a||(ft(e,"compositionstart",rm),ft(e,"compositionend",jr),ft(e,"change",jr))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:n,trim:t,number:s}},i){if(e._assign=Xr(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||t&&e.value.trim()===a||(s||e.type==="number")&&il(e.value)===a))return;const l=a??"";e.value!==l&&(e.value=l)}},dm=["ctrl","shift","alt","meta"],um={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>dm.some(n=>e[`${n}Key`]&&!a.includes(n))},$r=(e,a)=>(n,...t)=>{for(let s=0;s<a.length;s++){const i=um[a[s]];if(i&&i(n,a))return}return e(n,...t)},un={beforeMount(e,{value:a},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&a?n.beforeEnter(e):jt(e,a)},mounted(e,{value:a},{transition:n}){n&&a&&n.enter(e)},updated(e,{value:a,oldValue:n},{transition:t}){!a!=!n&&(t?a?(t.beforeEnter(e),jt(e,!0),t.enter(e)):t.leave(e,()=>{jt(e,!1)}):jt(e,a))},beforeUnmount(e,{value:a}){jt(e,a)}};function jt(e,a){e.style.display=a?e._vod:"none"}const Hm=sa({patchProp:Yp},qp);let Yr;function pm(){return Yr||(Yr=hp(Hm))}const mm=(...e)=>{const a=pm().createApp(...e),{mount:n}=a;return a.mount=t=>{const s=hm(t);if(!s)return;const i=a._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const l=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},a};function hm(e){return Je(e)?document.querySelector(e):e}function fn(e,a){let n;function t(){n=so(),n.run(()=>a.length?a(()=>{n==null||n.stop(),t()}):a())}ce(e,s=>{s&&!n?t():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),Da(()=>{n==null||n.stop()})}const je=typeof window<"u",xo=je&&"IntersectionObserver"in window,Am=je&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function Jr(e,a,n){Nm(e,a),a.set(e,n)}function Nm(e,a){if(a.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function fm(e,a,n){var t=id(e,a,"set");return Mm(e,t,n),n}function Mm(e,a,n){if(a.set)a.set.call(e,n);else{if(!a.writable)throw new TypeError("attempted to set read only private field");a.value=n}}function Kn(e,a){var n=id(e,a,"get");return Cm(e,n)}function id(e,a,n){if(!a.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return a.get(e)}function Cm(e,a){return a.get?a.get.call(e):a.value}function ld(e,a,n){const t=a.length-1;if(t<0)return e===void 0?n:e;for(let s=0;s<t;s++){if(e==null)return n;e=e[a[s]]}return e==null||e[a[t]]===void 0?n:e[a[t]]}function qn(e,a){if(e===a)return!0;if(e instanceof Date&&a instanceof Date&&e.getTime()!==a.getTime()||e!==Object(e)||a!==Object(a))return!1;const n=Object.keys(e);return n.length!==Object.keys(a).length?!1:n.every(t=>qn(e[t],a[t]))}function bt(e,a,n){return e==null||!a||typeof a!="string"?n:e[a]!==void 0?e[a]:(a=a.replace(/\[(\w+)\]/g,".$1"),a=a.replace(/^\./,""),ld(e,a.split("."),n))}function na(e,a,n){if(a==null)return e===void 0?n:e;if(e!==Object(e)){if(typeof a!="function")return n;const s=a(e,n);return typeof s>"u"?n:s}if(typeof a=="string")return bt(e,a,n);if(Array.isArray(a))return ld(e,a,n);if(typeof a!="function")return n;const t=a(e,n);return typeof t>"u"?n:t}function Ya(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,t)=>a+t)}function le(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${a}`:void 0}function Ml(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Cl(e){return e&&"$el"in e?e.$el:e}const Zr=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),gl=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function od(e){return Object.keys(e)}function Zn(e,a){return a.every(n=>e.hasOwnProperty(n))}function Lt(e,a,n){const t=Object.create(null),s=Object.create(null);for(const i in e)a.some(l=>l instanceof RegExp?l.test(i):l===i)&&!(n!=null&&n.some(l=>l===i))?t[i]=e[i]:s[i]=e[i];return[t,s]}function Hn(e,a){const n={...e};return a.forEach(t=>delete n[t]),n}function lt(e){return Lt(e,["class","style","id",/^data-/])}function ya(e){return e==null?[]:Array.isArray(e)?e:[e]}function oa(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(a,Math.min(n,e))}function e1(e){const a=e.toString().trim();return a.includes(".")?a.length-a.indexOf(".")-1:0}function a1(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,a-e.length))}function gm(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let t=0;for(;t<e.length;)n.push(e.substr(t,a)),t+=a;return n}function n1(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<a)return`${e} B`;const n=a===1024?["Ki","Mi","Gi"]:["k","M","G"];let t=-1;for(;Math.abs(e)>=a&&t<n.length-1;)e/=a,++t;return`${e.toFixed(1)} ${n[t]}B`}function Va(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const t={};for(const s in e)t[s]=e[s];for(const s in a){const i=e[s],l=a[s];if(Ml(i)&&Ml(l)){t[s]=Va(i,l,n);continue}if(Array.isArray(i)&&Array.isArray(l)&&n){t[s]=n(i,l);continue}t[s]=l}return t}function rd(e){return e.map(a=>a.type===me?rd(a.children):a).flat()}function tt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(tt.cache.has(e))return tt.cache.get(e);const a=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return tt.cache.set(e,a),a}tt.cache=new Map;function is(e,a){if(!a||typeof a!="object")return[];if(Array.isArray(a))return a.map(n=>is(e,n)).flat(1);if(Array.isArray(a.children))return a.children.map(n=>is(e,n)).flat(1);if(a.component){if(Object.getOwnPropertySymbols(a.component.provides).includes(e))return[a.component];if(a.component.subTree)return is(e,a.component.subTree).flat(1)}return[]}var qs=new WeakMap,mt=new WeakMap;class km{constructor(a){Jr(this,qs,{writable:!0,value:[]}),Jr(this,mt,{writable:!0,value:0}),this.size=a}push(a){Kn(this,qs)[Kn(this,mt)]=a,fm(this,mt,(Kn(this,mt)+1)%this.size)}values(){return Kn(this,qs).slice(Kn(this,mt)).concat(Kn(this,qs).slice(0,Kn(this,mt)))}}function Sm(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function yo(e){const a=xa({}),n=N(e);return ka(()=>{for(const t in n.value)a[t]=n.value[t]},{flush:"sync"}),po(a)}function ni(e,a){return e.includes(a)}const Tm=/^on[^a-z]/,Do=e=>Tm.test(e);function cd(e){return e[2].toLowerCase()+e.slice(3)}const rn=()=>[Function,Array];function t1(e,a){return a="on"+Sn(a),!!(e[a]||e[`${a}Once`]||e[`${a}Capture`]||e[`${a}OnceCapture`]||e[`${a}CaptureOnce`])}function bo(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),t=1;t<a;t++)n[t-1]=arguments[t];if(Array.isArray(e))for(const s of e)s(...n);else typeof e=="function"&&e(...n)}function hs(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(t=>`${t}${a?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function dd(e,a,n){let t,s=e.indexOf(document.activeElement);const i=a==="next"?1:-1;do s+=i,t=e[s];while((!t||t.offsetParent==null||!((n==null?void 0:n(t))??!0))&&s<e.length&&s>=0);return t}function ti(e,a){var t,s,i,l;const n=hs(e);if(!a)(e===document.activeElement||!e.contains(document.activeElement))&&((t=n[0])==null||t.focus());else if(a==="first")(s=n[0])==null||s.focus();else if(a==="last")(i=n.at(-1))==null||i.focus();else if(typeof a=="number")(l=n[a])==null||l.focus();else{const o=dd(n,a);o?o.focus():ti(e,a==="next"?"first":"last")}}function Us(e){return e==null||typeof e=="string"&&e.trim()===""}function ud(){}function Pt(e,a){if(!(je&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${a})`)))return null;try{return!!e&&e.matches(a)}catch{return null}}const Hd=["top","bottom"],vm=["start","end","left","right"];function kl(e,a){let[n,t]=e.split(" ");return t||(t=ni(Hd,n)?"start":ni(vm,n)?"top":"center"),{side:Sl(n,a),align:Sl(t,a)}}function Sl(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}function Yi(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Ji(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function s1(e){return{side:e.align,align:e.side}}function i1(e){return ni(Hd,e.side)?"y":"x"}class xt{constructor(a){let{x:n,y:t,width:s,height:i}=a;this.x=n,this.y=t,this.width=s,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function l1(e,a){return{x:{before:Math.max(0,a.left-e.left),after:Math.max(0,e.right-a.right)},y:{before:Math.max(0,a.top-e.top),after:Math.max(0,e.bottom-a.bottom)}}}function Po(e){const a=e.getBoundingClientRect(),n=getComputedStyle(e),t=n.transform;if(t){let s,i,l,o,r;if(t.startsWith("matrix3d("))s=t.slice(9,-1).split(/, /),i=+s[0],l=+s[5],o=+s[12],r=+s[13];else if(t.startsWith("matrix("))s=t.slice(7,-1).split(/, /),i=+s[0],l=+s[3],o=+s[4],r=+s[5];else return new xt(a);const c=n.transformOrigin,u=a.x-o-(1-i)*parseFloat(c),H=a.y-r-(1-l)*parseFloat(c.slice(c.indexOf(" ")+1)),p=i?a.width/i:e.offsetWidth+1,m=l?a.height/l:e.offsetHeight+1;return new xt({x:u,y:H,width:p,height:m})}else return new xt(a)}function et(e,a,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let t;try{t=e.animate(a,n)}catch{return{finished:Promise.resolve()}}return typeof t.finished>"u"&&(t.finished=new Promise(s=>{t.onfinish=()=>{s(t)}})),t}const Ks=new WeakMap;function xm(e,a){Object.keys(a).forEach(n=>{if(Do(n)){const t=cd(n),s=Ks.get(e);if(a[n]==null)s==null||s.forEach(i=>{const[l,o]=i;l===t&&(e.removeEventListener(t,o),s.delete(i))});else if(!s||![...s].some(i=>i[0]===t&&i[1]===a[n])){e.addEventListener(t,a[n]);const i=s||new Set;i.add([t,a[n]]),Ks.has(e)||Ks.set(e,i)}}else a[n]==null?e.removeAttribute(n):e.setAttribute(n,a[n])})}function ym(e,a){Object.keys(a).forEach(n=>{if(Do(n)){const t=cd(n),s=Ks.get(e);s==null||s.forEach(i=>{const[l,o]=i;l===t&&(e.removeEventListener(t,o),s.delete(i))})}else e.removeAttribute(n)})}function Dm(e,a){a=Array.isArray(a)?a.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${a.at(-1)}'`:`'${a}'`}const si=.20689655172413793,bm=e=>e>si**3?Math.cbrt(e):e/(3*si**2)+4/29,Pm=e=>e>si?e**3:3*si**2*(e-4/29);function pd(e){const a=bm,n=a(e[1]);return[116*n-16,500*(a(e[0]/.95047)-n),200*(n-a(e[2]/1.08883))]}function md(e){const a=Pm,n=(e[0]+16)/116;return[a(n+e[1]/500)*.95047,a(n),a(n-e[2]/200)*1.08883]}const Em=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],wm=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Rm=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Bm=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function hd(e){const a=Array(3),n=wm,t=Em;for(let s=0;s<3;++s)a[s]=Math.round(oa(n(t[s][0]*e[0]+t[s][1]*e[1]+t[s][2]*e[2]))*255);return{r:a[0],g:a[1],b:a[2]}}function Eo(e){let{r:a,g:n,b:t}=e;const s=[0,0,0],i=Bm,l=Rm;a=i(a/255),n=i(n/255),t=i(t/255);for(let o=0;o<3;++o)s[o]=l[o][0]*a+l[o][1]*n+l[o][2]*t;return s}function o1(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}const r1=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Im={rgb:(e,a,n,t)=>({r:e,g:a,b:n,a:t}),rgba:(e,a,n,t)=>({r:e,g:a,b:n,a:t}),hsl:(e,a,n,t)=>c1({h:e,s:a,l:n,a:t}),hsla:(e,a,n,t)=>c1({h:e,s:a,l:n,a:t}),hsv:(e,a,n,t)=>Mn({h:e,s:a,v:n,a:t}),hsva:(e,a,n,t)=>Mn({h:e,s:a,v:n,a:t})};function hn(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&r1.test(e)){const{groups:a}=e.match(r1),{fn:n,values:t}=a,s=t.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return Im[n](...s)}else if(typeof e=="string"){let a=e.startsWith("#")?e.slice(1):e;return[3,4].includes(a.length)?a=a.split("").map(n=>n+n).join(""):[6,8].includes(a.length),Cd(a)}else if(typeof e=="object"){if(Zn(e,["r","g","b"]))return e;if(Zn(e,["h","s","l"]))return Mn(wo(e));if(Zn(e,["h","s","v"]))return Mn(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Mn(e){const{h:a,s:n,v:t,a:s}=e,i=o=>{const r=(o+a/60)%6;return t-t*n*Math.max(Math.min(r,4-r,1),0)},l=[i(5),i(3),i(1)].map(o=>Math.round(o*255));return{r:l[0],g:l[1],b:l[2],a:s}}function c1(e){return Mn(wo(e))}function Si(e){if(!e)return{h:0,s:1,v:1,a:1};const a=e.r/255,n=e.g/255,t=e.b/255,s=Math.max(a,n,t),i=Math.min(a,n,t);let l=0;s!==i&&(s===a?l=60*(0+(n-t)/(s-i)):s===n?l=60*(2+(t-a)/(s-i)):s===t&&(l=60*(4+(a-n)/(s-i)))),l<0&&(l=l+360);const o=s===0?0:(s-i)/s,r=[l,o,s];return{h:r[0],s:r[1],v:r[2],a:e.a}}function Ad(e){const{h:a,s:n,v:t,a:s}=e,i=t-t*n/2,l=i===1||i===0?0:(t-i)/Math.min(i,1-i);return{h:a,s:l,l:i,a:s}}function wo(e){const{h:a,s:n,l:t,a:s}=e,i=t+n*Math.min(t,1-t),l=i===0?0:2-2*t/i;return{h:a,s:l,v:i,a:s}}function Nd(e){let{r:a,g:n,b:t,a:s}=e;return s===void 0?`rgb(${a}, ${n}, ${t})`:`rgba(${a}, ${n}, ${t}, ${s})`}function fd(e){return Nd(Mn(e))}function Fs(e){const a=Math.round(e).toString(16);return("00".substr(0,2-a.length)+a).toUpperCase()}function Md(e){let{r:a,g:n,b:t,a:s}=e;return`#${[Fs(a),Fs(n),Fs(t),s!==void 0?Fs(Math.round(s*255)):""].join("")}`}function Cd(e){e=Gm(e);let[a,n,t,s]=gm(e,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:a,g:n,b:t,a:s}}function Lm(e){const a=Cd(e);return Si(a)}function gd(e){return Md(Mn(e))}function Gm(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(a=>a+a).join("")),e.length!==6&&(e=a1(a1(e,6),8,"F")),e}function qm(e,a){const n=pd(Eo(e));return n[0]=n[0]+a*10,hd(md(n))}function Um(e,a){const n=pd(Eo(e));return n[0]=n[0]-a*10,hd(md(n))}function Tl(e){const a=hn(e);return Eo(a)[1]}function Fm(e,a){const n=Tl(e),t=Tl(a),s=Math.max(n,t),i=Math.min(n,t);return(s+.05)/(i+.05)}function I(e,a){return n=>Object.keys(e).reduce((t,s)=>{const l=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return n&&s in n?t[s]={...l,default:n[s]}:t[s]=l,a&&!t[s].source&&(t[s].source=a),t},{})}const oe=I({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function La(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=I(e.props??{},e.name)();const a=Object.keys(e.props);e.filterProps=function(t){return Lt(t,a,["class","style"])},e.props._as=String,e.setup=function(t,s){const i=Io();if(!i.value)return e._setup(t,s);const{props:l,provideSubDefaults:o}=jm(t,t._as??e.name,i),r=e._setup(l,s);return o(),r}}return e}function W(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return a=>(e?La:X0)(a)}function Vm(e,a){return a.props=e,a}function an(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return W()({name:n??Sn(Wa(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...oe()},setup(t,s){let{slots:i}=s;return()=>{var l;return Gn(t.tag,{class:[e,t.class],style:t.style},(l=i.default)==null?void 0:l.call(i))}}})}function kd(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const a=e.getRootNode();return a!==document&&a.getRootNode({composed:!0})!==document?null:a}const As="cubic-bezier(0.4, 0, 0.2, 1)",_m="cubic-bezier(0.0, 0, 0.2, 1)",Wm="cubic-bezier(0.4, 0, 1, 1)";function ra(e,a){const n=To();if(!n)throw new Error(`[Vuetify] ${e} ${a||"must be called from inside a setup function"}`);return n}function vn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const a=ra(e).type;return tt((a==null?void 0:a.aliasName)||(a==null?void 0:a.name))}let Sd=0,Xs=new WeakMap;function Ma(){const e=ra("getUid");if(Xs.has(e))return Xs.get(e);{const a=Sd++;return Xs.set(e,a),a}}Ma.reset=()=>{Sd=0,Xs=new WeakMap};function Ro(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(a?zm(e):Bo(e))return e;e=e.parentElement}return document.scrollingElement}function ii(e,a){const n=[];if(a&&e&&!a.contains(e))return n;for(;e&&(Bo(e)&&n.push(e),e!==a);)e=e.parentElement;return n}function Bo(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const a=window.getComputedStyle(e);return a.overflowY==="scroll"||a.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function zm(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const a=window.getComputedStyle(e);return["scroll","auto"].includes(a.overflowY)}function Qm(e){const{provides:a}=ra("injectSelf");if(a&&e in a)return a[e]}function Om(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function $(e){const a=ra("useRender");a.render=e}const Ns=Symbol.for("vuetify:defaults");function Km(e){return ae(e)}function Io(){const e=Re(Ns);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Ze(e,a){const n=Io(),t=ae(e),s=N(()=>{if(Ra(a==null?void 0:a.disabled))return n.value;const l=Ra(a==null?void 0:a.scoped),o=Ra(a==null?void 0:a.reset),r=Ra(a==null?void 0:a.root);let c=Va(t.value,{prev:n.value});if(l)return c;if(o||r){const u=Number(o||1/0);for(let H=0;H<=u&&!(!c||!("prev"in c));H++)c=c.prev;return c&&typeof r=="string"&&r in c&&(c=Va(Va(c,{prev:c}),c[r])),c}return c.prev?Va(c.prev,c):c});return Oe(Ns,s),s}function Xm(e,a){var n,t;return typeof((n=e.props)==null?void 0:n[a])<"u"||typeof((t=e.props)==null?void 0:t[tt(a)])<"u"}function jm(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Io();const t=ra("useDefaults");if(a=a??t.type.name??t.type.__name,!a)throw new Error("[Vuetify] Could not determine component name");const s=N(()=>{var r;return(r=n.value)==null?void 0:r[e._as??a]}),i=new Proxy(e,{get(r,c){var H,p,m,h;const u=Reflect.get(r,c);return c==="class"||c==="style"?[(H=s.value)==null?void 0:H[c],u].filter(A=>A!=null):typeof c=="string"&&!Xm(t.vnode,c)?((p=s.value)==null?void 0:p[c])??((h=(m=n.value)==null?void 0:m.global)==null?void 0:h[c])??u:u}}),l=ie();ka(()=>{if(s.value){const r=Object.entries(s.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});r.length&&(l.value=Object.fromEntries(r))}});function o(){fn(l,()=>{var r;Ze(Va(((r=Qm(Ns))==null?void 0:r.value)??{},l.value))})}return{props:i,provideSubDefaults:o}}const Ti=["sm","md","lg","xl","xxl"],vl=Symbol.for("vuetify:display"),d1={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},$m=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:d1;return Va(d1,e)};function u1(e){return je&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function H1(e){return je&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function p1(e){const a=je&&!e?window.navigator.userAgent:"ssr";function n(h){return!!a.match(h)}const t=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),l=n(/electron/i),o=n(/chrome/i),r=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),H=n(/win/i),p=n(/mac/i),m=n(/linux/i);return{android:t,ios:s,cordova:i,electron:l,chrome:o,edge:r,firefox:c,opera:u,win:H,mac:p,linux:m,touch:Am,ssr:a==="ssr"}}function Ym(e,a){const{thresholds:n,mobileBreakpoint:t}=$m(e),s=ie(H1(a)),i=ie(p1(a)),l=xa({}),o=ie(u1(a));function r(){s.value=H1(),o.value=u1()}function c(){r(),i.value=p1()}return ka(()=>{const u=o.value<n.sm,H=o.value<n.md&&!u,p=o.value<n.lg&&!(H||u),m=o.value<n.xl&&!(p||H||u),h=o.value<n.xxl&&!(m||p||H||u),A=o.value>=n.xxl,f=u?"xs":H?"sm":p?"md":m?"lg":h?"xl":"xxl",M=typeof t=="number"?t:n[t],g=o.value<M;l.xs=u,l.sm=H,l.md=p,l.lg=m,l.xl=h,l.xxl=A,l.smAndUp=!u,l.mdAndUp=!(u||H),l.lgAndUp=!(u||H||p),l.xlAndUp=!(u||H||p||m),l.smAndDown=!(p||m||h||A),l.mdAndDown=!(m||h||A),l.lgAndDown=!(h||A),l.xlAndDown=!A,l.name=f,l.height=s.value,l.width=o.value,l.mobile=g,l.mobileBreakpoint=t,l.platform=i.value,l.thresholds=n}),je&&window.addEventListener("resize",r,{passive:!0}),{...po(l),update:c,ssr:!!a}}function ot(){const e=Re(vl);if(!e)throw new Error("Could not find Vuetify display injection");return e}const Jm={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar"},Zm={component:e=>Gn(Go,{...e,class:"mdi"})},Ce=[String,Function,Object,Array],xl=Symbol.for("vuetify:icons"),vi=I({icon:{type:Ce},tag:{type:String,required:!0}},"icon"),yl=W()({name:"VComponentIcon",props:vi(),setup(e,a){let{slots:n}=a;return()=>{const t=e.icon;return d(e.tag,null,{default:()=>{var s;return[e.icon?d(t,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),Lo=La({name:"VSvgIcon",inheritAttrs:!1,props:vi(),setup(e,a){let{attrs:n}=a;return()=>d(e.tag,te(n,{style:null}),{default:()=>[d("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(t=>Array.isArray(t)?d("path",{d:t[0],"fill-opacity":t[1]},null):d("path",{d:t},null)):d("path",{d:e.icon},null)])]})}}),eh=La({name:"VLigatureIcon",props:vi(),setup(e){return()=>d(e.tag,null,{default:()=>[e.icon]})}}),Go=La({name:"VClassIcon",props:vi(),setup(e){return()=>d(e.tag,{class:e.icon},null)}}),ah={svg:{component:Lo},class:{component:Go}};function nh(e){return Va({defaultSet:"mdi",sets:{...ah,mdi:Zm},aliases:{...Jm,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},e)}const th=e=>{const a=Re(xl);if(!a)throw new Error("Missing Vuetify Icons provide!");return{iconData:N(()=>{var r;const t=Ra(e);if(!t)return{component:yl};let s=t;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(r=a.aliases)==null?void 0:r[s.slice(1)])),!s)throw new Error(`Could not find aliased icon "${t}"`);if(Array.isArray(s))return{component:Lo,icon:s};if(typeof s!="string")return{component:yl,icon:s};const i=Object.keys(a.sets).find(c=>typeof s=="string"&&s.startsWith(`${c}:`)),l=i?s.slice(i.length+1):s;return{component:a.sets[i??a.defaultSet].component,icon:l}})}},sh={badge:"Badge",open:"Open",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{ok:"OK",cancel:"Cancel",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},ih={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function fe(e,a,n){let t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:H=>H,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:H=>H;const i=ra("useProxiedModel"),l=ae(e[a]!==void 0?e[a]:n),o=tt(a),c=N(o!==a?()=>{var H,p,m,h;return e[a],!!(((H=i.vnode.props)!=null&&H.hasOwnProperty(a)||(p=i.vnode.props)!=null&&p.hasOwnProperty(o))&&((m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${a}`)||(h=i.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${o}`)))}:()=>{var H,p;return e[a],!!((H=i.vnode.props)!=null&&H.hasOwnProperty(a)&&((p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${a}`)))});fn(()=>!c.value,()=>{ce(()=>e[a],H=>{l.value=H})});const u=N({get(){const H=e[a];return t(c.value?H:l.value)},set(H){const p=s(H),m=De(c.value?e[a]:l.value);m===p||t(m)===H||(l.value=p,i==null||i.emit(`update:${a}`,p))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?e[a]:l.value}),u}const m1="$vuetify.",h1=(e,a)=>e.replace(/\{(\d+)\}/g,(n,t)=>String(a[+t])),Td=(e,a,n)=>function(t){for(var s=arguments.length,i=new Array(s>1?s-1:0),l=1;l<s;l++)i[l-1]=arguments[l];if(!t.startsWith(m1))return h1(t,i);const o=t.replace(m1,""),r=e.value&&n.value[e.value],c=a.value&&n.value[a.value];let u=bt(r,o,null);return u||(`${t}${e.value}`,u=bt(c,o,null)),u||(u=t),typeof u!="string"&&(u=t),h1(u,i)};function vd(e,a){return(n,t)=>new Intl.NumberFormat([e.value,a.value],t).format(n)}function Zi(e,a,n){const t=fe(e,a,e[a]??n.value);return t.value=e[a]??n.value,ce(n,s=>{e[a]==null&&(t.value=n.value)}),t}function xd(e){return a=>{const n=Zi(a,"locale",e.current),t=Zi(a,"fallback",e.fallback),s=Zi(a,"messages",e.messages);return{name:"vuetify",current:n,fallback:t,messages:s,t:Td(n,t,s),n:vd(n,t),provide:xd({current:n,fallback:t,messages:s})}}}function lh(e){const a=ie((e==null?void 0:e.locale)??"en"),n=ie((e==null?void 0:e.fallback)??"en"),t=ae({en:sh,...e==null?void 0:e.messages});return{name:"vuetify",current:a,fallback:n,messages:t,t:Td(a,n,t),n:vd(a,n),provide:xd({current:a,fallback:n,messages:t})}}const Et=Symbol.for("vuetify:locale");function oh(e){return e.name!=null}function rh(e){const a=e!=null&&e.adapter&&oh(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:lh(e),n=dh(a,e);return{...a,...n}}function Ta(){const e=Re(Et);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function ch(e){const a=Re(Et);if(!a)throw new Error("[Vuetify] Could not find injected locale instance");const n=a.provide(e),t=uh(n,a.rtl,e),s={...n,...t};return Oe(Et,s),s}function dh(e,a){const n=ae((a==null?void 0:a.rtl)??ih),t=N(()=>n.value[e.current.value]??!1);return{isRtl:t,rtl:n,rtlClasses:N(()=>`v-locale--is-${t.value?"rtl":"ltr"}`)}}function uh(e,a,n){const t=N(()=>n.rtl??a.value[e.current.value]??!1);return{isRtl:t,rtl:a,rtlClasses:N(()=>`v-locale--is-${t.value?"rtl":"ltr"}`)}}function Ha(){const e=Re(Et);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const ht=2.4,A1=.2126729,N1=.7151522,f1=.072175,Hh=.55,ph=.58,mh=.57,hh=.62,Vs=.03,M1=1.45,Ah=5e-4,Nh=1.25,fh=1.25,C1=.078,g1=12.82051282051282,_s=.06,k1=.001;function S1(e,a){const n=(e.r/255)**ht,t=(e.g/255)**ht,s=(e.b/255)**ht,i=(a.r/255)**ht,l=(a.g/255)**ht,o=(a.b/255)**ht;let r=n*A1+t*N1+s*f1,c=i*A1+l*N1+o*f1;if(r<=Vs&&(r+=(Vs-r)**M1),c<=Vs&&(c+=(Vs-c)**M1),Math.abs(c-r)<Ah)return 0;let u;if(c>r){const H=(c**Hh-r**ph)*Nh;u=H<k1?0:H<C1?H-H*g1*_s:H-_s}else{const H=(c**hh-r**mh)*fh;u=H>-k1?0:H>-C1?H-H*g1*_s:H+_s}return u*100}const fs=Symbol.for("vuetify:theme"),Ie=I({theme:String},"theme"),$t={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function Mh(){var n,t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$t;if(!e)return{...$t,isDisabled:!0};const a={};for(const[s,i]of Object.entries(e.themes??{})){const l=i.dark||s==="dark"?(n=$t.themes)==null?void 0:n.dark:(t=$t.themes)==null?void 0:t.light;a[s]=Va(l,i)}return Va($t,{...e,themes:a})}function Ch(e){const a=Mh(e),n=ae(a.defaultTheme),t=ae(a.themes),s=N(()=>{const u={};for(const[H,p]of Object.entries(t.value)){const m=u[H]={...p,colors:{...p.colors}};if(a.variations)for(const h of a.variations.colors){const A=m.colors[h];if(A)for(const f of["lighten","darken"]){const M=f==="lighten"?qm:Um;for(const g of Ya(a.variations[f],1))m.colors[`${h}-${f}-${g}`]=Md(M(hn(A),g))}}for(const h of Object.keys(m.colors)){if(/^on-[a-z]/.test(h)||m.colors[`on-${h}`])continue;const A=`on-${h}`,f=hn(m.colors[h]),M=Math.abs(S1(hn(0),f)),g=Math.abs(S1(hn(16777215),f));m.colors[A]=g>Math.min(M,50)?"#fff":"#000"}}return u}),i=N(()=>s.value[n.value]),l=N(()=>{const u=[];i.value.dark&&Xn(u,":root",["color-scheme: dark"]),Xn(u,":root",T1(i.value));for(const[h,A]of Object.entries(s.value))Xn(u,`.v-theme--${h}`,[`color-scheme: ${A.dark?"dark":"normal"}`,...T1(A)]);const H=[],p=[],m=new Set(Object.values(s.value).flatMap(h=>Object.keys(h.colors)));for(const h of m)/^on-[a-z]/.test(h)?Xn(p,`.${h}`,[`color: rgb(var(--v-theme-${h})) !important`]):(Xn(H,`.bg-${h}`,[`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${h})) !important`,`color: rgb(var(--v-theme-on-${h})) !important`]),Xn(p,`.text-${h}`,[`color: rgb(var(--v-theme-${h})) !important`]),Xn(p,`.border-${h}`,[`--v-border-color: var(--v-theme-${h})`]));return u.push(...H,...p),u.map((h,A)=>A===0?h:`    ${h}`).join("")});function o(){return{style:[{children:l.value,id:"vuetify-theme-stylesheet",nonce:a.cspNonce||!1}]}}function r(u){if(a.isDisabled)return;const H=u._context.provides.usehead;if(H)if(H.push){const m=H.push(o);je&&ce(l,()=>{m.patch(o)})}else je?(H.addHeadObjs(N(o)),ka(()=>H.updateDOM())):H.addHeadObjs(o());else{let h=function(){if(typeof document<"u"&&!m){const A=document.createElement("style");A.type="text/css",A.id="vuetify-theme-stylesheet",a.cspNonce&&A.setAttribute("nonce",a.cspNonce),m=A,document.head.appendChild(m)}m&&(m.innerHTML=l.value)};var p=h;let m=je?document.getElementById("vuetify-theme-stylesheet"):null;je?ce(l,h,{immediate:!0}):h()}}const c=N(()=>a.isDisabled?void 0:`v-theme--${n.value}`);return{install:r,isDisabled:a.isDisabled,name:n,themes:t,current:i,computedThemes:s,themeClasses:c,styles:l,global:{name:n,current:i}}}function Ge(e){ra("provideTheme");const a=Re(fs,null);if(!a)throw new Error("Could not find Vuetify theme injection");const n=N(()=>e.theme??(a==null?void 0:a.name.value)),t=N(()=>a.isDisabled?void 0:`v-theme--${n.value}`),s={...a,name:n,themeClasses:t};return Oe(fs,s),s}function yd(){ra("useTheme");const e=Re(fs,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function Xn(e,a,n){e.push(`${a} {
`,...n.map(t=>`  ${t};
`),`}
`)}function T1(e){const a=e.dark?2:1,n=e.dark?1:2,t=[];for(const[s,i]of Object.entries(e.colors)){const l=hn(i);t.push(`--v-theme-${s}: ${l.r},${l.g},${l.b}`),s.startsWith("on-")||t.push(`--v-theme-${s}-overlay-multiplier: ${Tl(i)>.18?a:n}`)}for(const[s,i]of Object.entries(e.variables)){const l=typeof i=="string"&&i.startsWith("#")?hn(i):void 0,o=l?`${l.r}, ${l.g}, ${l.b}`:void 0;t.push(`--v-${s}: ${o??i}`)}return t}const Dl={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function gh(e,a){const n=[];let t=[];const s=Dd(e),i=bd(e),l=s.getDay()-Dl[a.slice(-2).toUpperCase()],o=i.getDay()-Dl[a.slice(-2).toUpperCase()];for(let r=0;r<l;r++){const c=new Date(s);c.setDate(c.getDate()-(l-r)),t.push(c)}for(let r=1;r<=i.getDate();r++){const c=new Date(e.getFullYear(),e.getMonth(),r);t.push(c),t.length===7&&(n.push(t),t=[])}for(let r=1;r<7-o;r++){const c=new Date(i);c.setDate(c.getDate()+r),t.push(c)}return n.push(t),n}function Dd(e){return new Date(e.getFullYear(),e.getMonth(),1)}function bd(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function kh(e){const a=e.split("-").map(Number);return new Date(a[0],a[1]-1,a[2])}const Sh=/([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))/;function Th(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let a;if(Sh.test(e))return kh(e);if(a=Date.parse(e),!isNaN(a))return new Date(a)}return null}const v1=new Date(2e3,0,2);function vh(e){const a=Dl[e.slice(-2).toUpperCase()];return Ya(7).map(n=>{const t=new Date(v1);return t.setDate(v1.getDate()+a+n),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(t)})}function xh(e,a,n){const t=new Date(e);let s={};switch(a){case"fullDateWithWeekday":s={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":s={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":s={};break;case"monthAndDate":s={month:"long",day:"numeric"};break;case"monthAndYear":s={month:"long",year:"numeric"};break;case"dayOfMonth":s={day:"numeric"};break;default:s={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,s).format(t)}function yh(e,a){const n=new Date(e);return n.setDate(n.getDate()+a),n}function Dh(e,a){const n=new Date(e);return n.setMonth(n.getMonth()+a),n}function bh(e){return e.getFullYear()}function Ph(e){return e.getMonth()}function Eh(e){return new Date(e.getFullYear(),0,1)}function wh(e){return new Date(e.getFullYear(),11,31)}function Rh(e,a){return bl(e,a[0])&&Ih(e,a[1])}function Bh(e){const a=new Date(e);return a instanceof Date&&!isNaN(a.getTime())}function bl(e,a){return e.getTime()>a.getTime()}function Ih(e,a){return e.getTime()<a.getTime()}function x1(e,a){return e.getTime()===a.getTime()}function Lh(e,a){return e.getDate()===a.getDate()&&e.getMonth()===a.getMonth()&&e.getFullYear()===a.getFullYear()}function Gh(e,a){return e.getMonth()===a.getMonth()&&e.getFullYear()===a.getFullYear()}function qh(e,a,n){const t=new Date(e),s=new Date(a);return n==="month"?t.getMonth()-s.getMonth()+(t.getFullYear()-s.getFullYear())*12:Math.floor((t.getTime()-s.getTime())/(1e3*60*60*24))}function Uh(e,a){const n=new Date(e);return n.setFullYear(a),n}class Fh{constructor(a){this.locale=a.locale}date(a){return Th(a)}toJsDate(a){return a}addDays(a,n){return yh(a,n)}addMonths(a,n){return Dh(a,n)}getWeekArray(a){return gh(a,this.locale)}startOfMonth(a){return Dd(a)}endOfMonth(a){return bd(a)}format(a,n){return xh(a,n,this.locale)}isEqual(a,n){return x1(a,n)}isValid(a){return Bh(a)}isWithinRange(a,n){return Rh(a,n)}isAfter(a,n){return bl(a,n)}isBefore(a,n){return!bl(a,n)&&!x1(a,n)}isSameDay(a,n){return Lh(a,n)}isSameMonth(a,n){return Gh(a,n)}setYear(a,n){return Uh(a,n)}getDiff(a,n,t){return qh(a,n,t)}getWeekdays(){return vh(this.locale)}getYear(a){return bh(a)}getMonth(a){return Ph(a)}startOfYear(a){return Eh(a)}endOfYear(a){return wh(a)}}const y1=Symbol.for("vuetify:date-adapter");function Vh(e){return Va({adapter:Fh,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"nn-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e)}function dn(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=ae(),t=ae();if(je){const s=new ResizeObserver(i=>{e==null||e(i,s),i.length&&(a==="content"?t.value=i[0].contentRect:t.value=i[0].target.getBoundingClientRect())});Sa(()=>{s.disconnect()}),ce(n,(i,l)=>{l&&(s.unobserve(Cl(l)),t.value=void 0),i&&s.observe(Cl(i))},{flush:"post"})}return{resizeRef:n,contentRect:Ts(t)}}const li=Symbol.for("vuetify:layout"),Pd=Symbol.for("vuetify:layout-item"),D1=1e3,Ed=I({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Gt=I({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function _h(){const e=Re(li);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function qt(e){const a=Re(li);if(!a)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${Ma()}`,t=ra("useLayoutItem");Oe(Pd,{id:n});const s=ie(!1);Rc(()=>s.value=!0),wc(()=>s.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:l}=a.register(t,{...e,active:N(()=>s.value?!1:e.active.value),id:n});return Sa(()=>a.unregister(n)),{layoutItemStyles:i,layoutRect:a.layoutRect,layoutItemScrimStyles:l}}const Wh=(e,a,n,t)=>{let s={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...s}}];for(const l of e){const o=a.get(l),r=n.get(l),c=t.get(l);if(!o||!r||!c)continue;const u={...s,[o.value]:parseInt(s[o.value],10)+(c.value?parseInt(r.value,10):0)};i.push({id:l,layer:u}),s=u}return i};function wd(e){const a=Re(li,null),n=N(()=>a?a.rootZIndex.value-100:D1),t=ae([]),s=xa(new Map),i=xa(new Map),l=xa(new Map),o=xa(new Map),r=xa(new Map),{resizeRef:c,contentRect:u}=dn(),H=N(()=>{const D=new Map,E=e.overlaps??[];for(const C of E.filter(S=>S.includes(":"))){const[S,b]=C.split(":");if(!t.value.includes(S)||!t.value.includes(b))continue;const w=s.get(S),P=s.get(b),B=i.get(S),F=i.get(b);!w||!P||!B||!F||(D.set(b,{position:w.value,amount:parseInt(B.value,10)}),D.set(S,{position:P.value,amount:-parseInt(F.value,10)}))}return D}),p=N(()=>{const D=[...new Set([...l.values()].map(C=>C.value))].sort((C,S)=>C-S),E=[];for(const C of D){const S=t.value.filter(b=>{var w;return((w=l.get(b))==null?void 0:w.value)===C});E.push(...S)}return Wh(E,s,i,o)}),m=N(()=>!Array.from(r.values()).some(D=>D.value)),h=N(()=>p.value[p.value.length-1].layer),A=N(()=>({"--v-layout-left":le(h.value.left),"--v-layout-right":le(h.value.right),"--v-layout-top":le(h.value.top),"--v-layout-bottom":le(h.value.bottom),...m.value?void 0:{transition:"none"}})),f=N(()=>p.value.slice(1).map((D,E)=>{let{id:C}=D;const{layer:S}=p.value[E],b=i.get(C),w=s.get(C);return{id:C,...S,size:Number(b.value),position:w.value}})),M=D=>f.value.find(E=>E.id===D),g=ra("createLayout"),k=ie(!1);fa(()=>{k.value=!0}),Oe(li,{register:(D,E)=>{let{id:C,order:S,position:b,layoutSize:w,elementSize:P,active:B,disableTransitions:F,absolute:ne}=E;l.set(C,S),s.set(C,b),i.set(C,w),o.set(C,B),F&&r.set(C,F);const U=is(Pd,g==null?void 0:g.vnode).indexOf(D);U>-1?t.value.splice(U,0,C):t.value.push(C);const L=N(()=>f.value.findIndex(de=>de.id===C)),j=N(()=>n.value+p.value.length*2-L.value*2),Y=N(()=>{const de=b.value==="left"||b.value==="right",Ne=b.value==="right",Be=b.value==="bottom",ke={[b.value]:0,zIndex:j.value,transform:`translate${de?"X":"Y"}(${(B.value?0:-110)*(Ne||Be?-1:1)}%)`,position:ne.value||n.value!==D1?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!k.value)return ke;const z=f.value[L.value];if(!z)throw new Error(`[Vuetify] Could not find layout item "${C}"`);const Se=H.value.get(C);return Se&&(z[Se.position]+=Se.amount),{...ke,height:de?`calc(100% - ${z.top}px - ${z.bottom}px)`:P.value?`${P.value}px`:void 0,left:Ne?void 0:`${z.left}px`,right:Ne?`${z.right}px`:void 0,top:b.value!=="bottom"?`${z.top}px`:void 0,bottom:b.value!=="top"?`${z.bottom}px`:void 0,width:de?P.value?`${P.value}px`:void 0:`calc(100% - ${z.left}px - ${z.right}px)`}}),O=N(()=>({zIndex:j.value-1}));return{layoutItemStyles:Y,layoutItemScrimStyles:O,zIndex:j}},unregister:D=>{l.delete(D),s.delete(D),i.delete(D),o.delete(D),r.delete(D),t.value=t.value.filter(E=>E!==D)},mainRect:h,mainStyles:A,getLayoutItem:M,items:f,layoutRect:u,rootZIndex:n});const x=N(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),v=N(()=>({zIndex:n.value,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:x,layoutStyles:v,getLayoutItem:M,items:f,layoutRect:u,layoutRef:c}}function Rd(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:a,...n}=e,t=Va(a,n),{aliases:s={},components:i={},directives:l={}}=t,o=Km(t.defaults),r=Ym(t.display,t.ssr),c=Ch(t.theme),u=nh(t.icons),H=rh(t.locale),p=Vh(t.date);return{install:h=>{for(const A in l)h.directive(A,l[A]);for(const A in i)h.component(A,i[A]);for(const A in s)h.component(A,La({...s[A],name:A,aliasName:s[A].name}));if(c.install(h),h.provide(Ns,o),h.provide(vl,r),h.provide(fs,c),h.provide(xl,u),h.provide(Et,H),h.provide(y1,p),je&&t.ssr)if(h.$nuxt)h.$nuxt.hook("app:suspense:resolve",()=>{r.update()});else{const{mount:A}=h;h.mount=function(){const f=A(...arguments);return _e(()=>r.update()),h.mount=A,f}}Ma.reset(),h.mixin({computed:{$vuetify(){return xa({defaults:At.call(this,Ns),display:At.call(this,vl),theme:At.call(this,fs),icons:At.call(this,xl),locale:At.call(this,Et),date:At.call(this,y1)})}}})},defaults:o,display:r,theme:c,icons:u,locale:H,date:p}}const zh="3.3.13";Rd.version=zh;function At(e){var t,s;const a=this.$,n=((t=a.parent)==null?void 0:t.provides)??((s=a.vnode.appContext)==null?void 0:s.provides);if(n&&e in n)return n[e]}const Qh=I({...oe(),...Ed({fullHeight:!0}),...Ie()},"VApp"),Bd=W()({name:"VApp",props:Qh(),setup(e,a){let{slots:n}=a;const t=Ge(e),{layoutClasses:s,layoutStyles:i,getLayoutItem:l,items:o,layoutRef:r}=wd(e),{rtlClasses:c}=Ha();return $(()=>{var u;return d("div",{ref:r,class:["v-application",t.themeClasses.value,s.value,c.value,e.class],style:[i.value,e.style]},[d("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:l,items:o,theme:t}}});const ve=I({tag:{type:String,default:"div"}},"tag"),Id=I({text:String,...oe(),...ve()},"VToolbarTitle"),qo=W()({name:"VToolbarTitle",props:Id(),setup(e,a){let{slots:n}=a;return $(()=>{const t=!!(n.default||n.text||e.text);return d(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[t&&d("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(s=n.default)==null?void 0:s.call(n)])]}})}),{}}}),Oh=I({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function Ga(e,a,n){return W()({name:e,props:Oh({mode:n,origin:a}),setup(t,s){let{slots:i}=s;const l={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:r,offsetLeft:c,offsetWidth:u,offsetHeight:H}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${r}px`,o.style.left=`${c}px`,o.style.width=`${u}px`,o.style.height=`${H}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:r,top:c,left:u,width:H,height:p}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=r||"",o.style.top=c||"",o.style.left=u||"",o.style.width=H||"",o.style.height=p||""}}};return()=>{const o=t.group?tm:cn;return Gn(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:l},i.default)}}})}function Ld(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return W()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,s){let{slots:i}=s;return()=>Gn(cn,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},i.default)}})}function Gd(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Wa(`offset-${n}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[n]:l.style[n]}},onEnter(l){const o=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const r=`${l[t]}px`;l.style[n]="0",l.offsetHeight,l.style.transition=o.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[n]=r})},onAfterEnter:i,onEnterCancelled:i,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[n]:l.style[n]},l.style.overflow="hidden",l.style[n]=`${l[t]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(l){e&&l._parent&&l._parent.classList.remove(e),i(l)}function i(l){const o=l._initialStyle[n];l.style.overflow=l._initialStyle.overflow,o!=null&&(l.style[n]=o),delete l._initialStyle}}const Kh=I({target:Object},"v-dialog-transition"),xi=W()({name:"VDialogTransition",props:Kh(),setup(e,a){let{slots:n}=a;const t={onBeforeEnter(s){s.style.pointerEvents="none",s.style.visibility="hidden"},async onEnter(s,i){var p;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),s.style.visibility="";const{x:l,y:o,sx:r,sy:c,speed:u}=P1(e.target,s),H=et(s,[{transform:`translate(${l}px, ${o}px) scale(${r}, ${c})`,opacity:0},{}],{duration:225*u,easing:_m});(p=b1(s))==null||p.forEach(m=>{et(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*u,easing:As})}),H.finished.then(()=>i())},onAfterEnter(s){s.style.removeProperty("pointer-events")},onBeforeLeave(s){s.style.pointerEvents="none"},async onLeave(s,i){var p;await new Promise(m=>requestAnimationFrame(m));const{x:l,y:o,sx:r,sy:c,speed:u}=P1(e.target,s);et(s,[{},{transform:`translate(${l}px, ${o}px) scale(${r}, ${c})`,opacity:0}],{duration:125*u,easing:Wm}).finished.then(()=>i()),(p=b1(s))==null||p.forEach(m=>{et(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*u,easing:As})})},onAfterLeave(s){s.style.removeProperty("pointer-events")}};return()=>e.target?d(cn,te({name:"dialog-transition"},t,{css:!1}),n):d(cn,{name:"dialog-transition"},n)}});function b1(e){var n;const a=(n=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:n.children;return a&&[...a]}function P1(e,a){const n=e.getBoundingClientRect(),t=Po(a),[s,i]=getComputedStyle(a).transformOrigin.split(" ").map(M=>parseFloat(M)),[l,o]=getComputedStyle(a).getPropertyValue("--v-overlay-anchor-origin").split(" ");let r=n.left+n.width/2;l==="left"||o==="left"?r-=n.width/2:(l==="right"||o==="right")&&(r+=n.width/2);let c=n.top+n.height/2;l==="top"||o==="top"?c-=n.height/2:(l==="bottom"||o==="bottom")&&(c+=n.height/2);const u=n.width/t.width,H=n.height/t.height,p=Math.max(1,u,H),m=u/p||0,h=H/p||0,A=t.width*t.height/(window.innerWidth*window.innerHeight),f=A>.12?Math.min(1.5,(A-.12)*10+1):1;return{x:r-(s+t.left),y:c-(i+t.top),sx:m,sy:h,speed:f}}const Xh=Ga("fab-transition","center center","out-in"),jh=Ga("dialog-bottom-transition"),$h=Ga("dialog-top-transition"),Pl=Ga("fade-transition"),Uo=Ga("scale-transition"),Yh=Ga("scroll-x-transition"),Jh=Ga("scroll-x-reverse-transition"),Zh=Ga("scroll-y-transition"),e5=Ga("scroll-y-reverse-transition"),a5=Ga("slide-x-transition"),n5=Ga("slide-x-reverse-transition"),Fo=Ga("slide-y-transition"),t5=Ga("slide-y-reverse-transition"),yi=Ld("expand-transition",Gd()),Vo=Ld("expand-x-transition",Gd("",!0)),s5=I({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Ue=W(!1)({name:"VDefaultsProvider",props:s5(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:s,reset:i,root:l,scoped:o}=po(e);return Ze(t,{reset:i,root:l,scoped:o,disabled:s}),()=>{var r;return(r=n.default)==null?void 0:r.call(n)}}});const za=I({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Qa(e){return{dimensionStyles:N(()=>({height:le(e.height),maxHeight:le(e.maxHeight),maxWidth:le(e.maxWidth),minHeight:le(e.minHeight),minWidth:le(e.minWidth),width:le(e.width)}))}}function i5(e){return{aspectStyles:N(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const qd=I({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...oe(),...za()},"VResponsive"),El=W()({name:"VResponsive",props:qd(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=i5(e),{dimensionStyles:s}=Qa(e);return $(()=>{var i;return d("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[d("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&d("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),xn=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Ja=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:s,...i}=e,{component:l=cn,...o}=typeof t=="object"?t:{};return Gn(l,te(typeof t=="string"?{name:s?"":t}:o,i,{disabled:s}),n)};function l5(e,a){if(!xo)return;const n=a.modifiers||{},t=a.value,{handler:s,options:i}=typeof t=="object"?t:{handler:t,options:{}},l=new IntersectionObserver(function(){var H;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;const c=(H=e._observe)==null?void 0:H[a.instance.$.uid];if(!c)return;const u=o.some(p=>p.isIntersecting);s&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&s(u,o,r),u&&n.once?Ud(e,a):c.init=!0},i);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:l},l.observe(e)}function Ud(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const Fd={mounted:l5,unmounted:Ud},Di=Fd,Vd=I({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...qd(),...oe(),...xn()},"VImg"),it=W()({name:"VImg",directives:{intersect:Di},props:Vd(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const s=ie(""),i=ae(),l=ie(e.eager?"loading":"idle"),o=ie(),r=ie(),c=N(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),u=N(()=>c.value.aspect||o.value/r.value||0);ce(()=>e.src,()=>{H(l.value!=="idle")}),ce(u,(C,S)=>{!C&&S&&i.value&&f(i.value)}),Ci(()=>H());function H(C){if(!(e.eager&&C)&&!(xo&&!C&&!e.eager)){if(l.value="loading",c.value.lazySrc){const S=new Image;S.src=c.value.lazySrc,f(S,null)}c.value.src&&_e(()=>{var S,b;if(n("loadstart",((S=i.value)==null?void 0:S.currentSrc)||c.value.src),(b=i.value)!=null&&b.complete){if(i.value.naturalWidth||m(),l.value==="error")return;u.value||f(i.value,null),p()}else u.value||f(i.value),h()})}}function p(){var C;h(),l.value="loaded",n("load",((C=i.value)==null?void 0:C.currentSrc)||c.value.src)}function m(){var C;l.value="error",n("error",((C=i.value)==null?void 0:C.currentSrc)||c.value.src)}function h(){const C=i.value;C&&(s.value=C.currentSrc||C.src)}let A=-1;function f(C){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const b=()=>{clearTimeout(A);const{naturalHeight:w,naturalWidth:P}=C;w||P?(o.value=P,r.value=w):!C.complete&&l.value==="loading"&&S!=null?A=window.setTimeout(b,S):(C.currentSrc.endsWith(".svg")||C.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,r.value=1)};b()}const M=N(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),g=()=>{var b;if(!c.value.src||l.value==="idle")return null;const C=d("img",{class:["v-img__img",M.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:i,onLoad:p,onError:m},null),S=(b=t.sources)==null?void 0:b.call(t);return d(Ja,{transition:e.transition,appear:!0},{default:()=>[$e(S?d("picture",{class:"v-img__picture"},[S,C]):C,[[un,l.value==="loaded"]])]})},k=()=>d(Ja,{transition:e.transition},{default:()=>[c.value.lazySrc&&l.value!=="loaded"&&d("img",{class:["v-img__img","v-img__img--preload",M.value],src:c.value.lazySrc,alt:e.alt},null)]}),x=()=>t.placeholder?d(Ja,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&d("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,v=()=>t.error?d(Ja,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&d("div",{class:"v-img__error"},[t.error()])]}):null,D=()=>e.gradient?d("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,E=ie(!1);{const C=ce(u,S=>{S&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{E.value=!0})}),C())})}return $(()=>{const[C]=El.filterProps(e);return $e(d(El,te({class:["v-img",{"v-img--booting":!E.value},e.class],style:[{width:le(e.width==="auto"?o.value:e.width)},e.style]},C,{aspectRatio:u.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>d(me,null,[d(g,null,null),d(k,null,null),d(D,null,null),d(x,null,null),d(v,null,null)]),default:t.default}),[[Ia("intersect"),{handler:H,options:e.options},null,{once:!0}]])}),{currentSrc:s,image:i,state:l,naturalWidth:o,naturalHeight:r}}}),qa=I({border:[Boolean,Number,String]},"border");function Oa(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn();return{borderClasses:N(()=>{const t=Xe(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`border-${i}`);return s})}}function _o(e){return yo(()=>{const a=[],n={};return e.value.background&&(o1(e.value.background)?n.backgroundColor=e.value.background:a.push(`bg-${e.value.background}`)),e.value.text&&(o1(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function Na(e,a){const n=N(()=>({text:Xe(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=_o(n);return{textColorClasses:t,textColorStyles:s}}function ea(e,a){const n=N(()=>({background:Xe(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=_o(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const ca=I({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function ma(e){return{elevationClasses:N(()=>{const n=Xe(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Ke=I({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ye(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn();return{roundedClasses:N(()=>{const t=Xe(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`rounded-${i}`);return s})}}const o5=[null,"prominent","default","comfortable","compact"],_d=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>o5.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...qa(),...oe(),...ca(),...Ke(),...ve({tag:"header"}),...Ie()},"VToolbar"),wl=W()({name:"VToolbar",props:_d(),setup(e,a){var m;let{slots:n}=a;const{backgroundColorClasses:t,backgroundColorStyles:s}=ea(_(e,"color")),{borderClasses:i}=Oa(e),{elevationClasses:l}=ma(e),{roundedClasses:o}=Ye(e),{themeClasses:r}=Ge(e),{rtlClasses:c}=Ha(),u=ie(!!(e.extended||(m=n.extension)!=null&&m.call(n))),H=N(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),p=N(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ze({VBtn:{variant:"text"}}),$(()=>{var M;const h=!!(e.title||n.title),A=!!(n.image||e.image),f=(M=n.extension)==null?void 0:M.call(n);return u.value=!!(e.extended||f),d(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},t.value,i.value,l.value,o.value,r.value,c.value,e.class],style:[s.value,e.style]},{default:()=>[A&&d("div",{key:"image",class:"v-toolbar__image"},[n.image?d(Ue,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):d(it,{key:"image-img",cover:!0,src:e.image},null)]),d(Ue,{defaults:{VTabs:{height:le(H.value)}}},{default:()=>{var g,k,x;return[d("div",{class:"v-toolbar__content",style:{height:le(H.value)}},[n.prepend&&d("div",{class:"v-toolbar__prepend"},[(g=n.prepend)==null?void 0:g.call(n)]),h&&d(qo,{key:"title",text:e.title},{text:n.title}),(k=n.default)==null?void 0:k.call(n),n.append&&d("div",{class:"v-toolbar__append"},[(x=n.append)==null?void 0:x.call(n)])])]}}),d(Ue,{defaults:{VTabs:{height:le(p.value)}}},{default:()=>[d(yi,null,{default:()=>[u.value&&d("div",{class:"v-toolbar__extension",style:{height:le(p.value)}},[f])]})]})]})}),{contentHeight:H,extensionHeight:p}}}),r5=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function c5(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=a;let t=0;const s=ae(null),i=ie(0),l=ie(0),o=ie(0),r=ie(!1),c=ie(!1),u=N(()=>Number(e.scrollThreshold)),H=N(()=>oa((u.value-i.value)/u.value||0)),p=()=>{const m=s.value;!m||n&&!n.value||(t=i.value,i.value="window"in m?m.pageYOffset:m.scrollTop,c.value=i.value<t,o.value=Math.abs(i.value-u.value))};return ce(c,()=>{l.value=l.value||i.value}),ce(r,()=>{l.value=0}),fa(()=>{ce(()=>e.scrollTarget,m=>{var A;const h=m?document.querySelector(m):window;h&&h!==s.value&&((A=s.value)==null||A.removeEventListener("scroll",p),s.value=h,s.value.addEventListener("scroll",p,{passive:!0}))},{immediate:!0})}),Sa(()=>{var m;(m=s.value)==null||m.removeEventListener("scroll",p)}),n&&ce(n,p,{immediate:!0}),{scrollThreshold:u,currentScroll:i,currentThreshold:o,isScrollActive:r,scrollRatio:H,isScrollingUp:c,savedScroll:l}}function rt(){const e=ie(!1);return fa(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:N(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ts(e)}}const d5=I({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},..._d(),...Gt(),...r5(),height:{type:[Number,String],default:64}},"VAppBar"),u5=W()({name:"VAppBar",props:d5(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=ae(),s=fe(e,"modelValue"),i=N(()=>{var g;const M=new Set(((g=e.scrollBehavior)==null?void 0:g.split(" "))??[]);return{hide:M.has("hide"),inverted:M.has("inverted"),collapse:M.has("collapse"),elevate:M.has("elevate"),fadeImage:M.has("fade-image")}}),l=N(()=>{const M=i.value;return M.hide||M.inverted||M.collapse||M.elevate||M.fadeImage||!s.value}),{currentScroll:o,scrollThreshold:r,isScrollingUp:c,scrollRatio:u}=c5(e,{canScroll:l}),H=N(()=>e.collapse||i.value.collapse&&(i.value.inverted?u.value>0:u.value===0)),p=N(()=>e.flat||i.value.elevate&&(i.value.inverted?o.value>0:o.value===0)),m=N(()=>i.value.fadeImage?i.value.inverted?1-u.value:u.value:void 0),h=N(()=>{var k,x;if(i.value.hide&&i.value.inverted)return 0;const M=((k=t.value)==null?void 0:k.contentHeight)??0,g=((x=t.value)==null?void 0:x.extensionHeight)??0;return M+g});fn(N(()=>!!e.scrollBehavior),()=>{ka(()=>{i.value.hide?i.value.inverted?s.value=o.value>r.value:s.value=c.value||o.value<r.value:s.value=!0})});const{ssrBootStyles:A}=rt(),{layoutItemStyles:f}=qt({id:e.name,order:N(()=>parseInt(e.order,10)),position:_(e,"location"),layoutSize:h,elementSize:ie(void 0),active:s,absolute:_(e,"absolute")});return $(()=>{const[M]=wl.filterProps(e);return d(wl,te({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...f.value,"--v-toolbar-image-opacity":m.value,height:void 0,...A.value},e.style]},M,{collapse:H.value,flat:p.value}),n)}),{}}});const H5=[null,"default","comfortable","compact"],da=I({density:{type:String,default:"default",validator:e=>H5.includes(e)}},"density");function Ca(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn();return{densityClasses:N(()=>`${a}--density-${e.density}`)}}const p5=["elevated","flat","tonal","outlined","text","plain"];function ct(e,a){return d(me,null,[e&&d("span",{key:"overlay",class:`${a}__overlay`},null),d("span",{key:"underlay",class:`${a}__underlay`},null)])}const Ka=I({color:String,variant:{type:String,default:"elevated",validator:e=>p5.includes(e)}},"variant");function dt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn();const n=N(()=>{const{variant:i}=Ra(e);return`${a}--variant-${i}`}),{colorClasses:t,colorStyles:s}=_o(N(()=>{const{variant:i,color:l}=Ra(e);return{[["elevated","flat"].includes(i)?"background":"text"]:l}}));return{colorClasses:t,colorStyles:s,variantClasses:n}}const Wd=I({divided:Boolean,...qa(),...oe(),...da(),...ca(),...Ke(),...ve(),...Ie(),...Ka()},"VBtnGroup"),Rl=W()({name:"VBtnGroup",props:Wd(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{densityClasses:s}=Ca(e),{borderClasses:i}=Oa(e),{elevationClasses:l}=ma(e),{roundedClasses:o}=Ye(e);Ze({VBtn:{height:"auto",color:_(e,"color"),density:_(e,"density"),flat:!0,variant:_(e,"variant")}}),$(()=>d(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,s.value,l.value,o.value,e.class],style:e.style},n))}}),Ut=I({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ft=I({value:null,disabled:Boolean,selectedClass:String},"group-item");function Vt(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=ra("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Ma();Oe(Symbol.for(`${a.description}:id`),s);const i=Re(a,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const l=_(e,"value"),o=N(()=>!!(i.disabled.value||e.disabled));i.register({id:s,value:l,disabled:o},t),Sa(()=>{i.unregister(s)});const r=N(()=>i.isSelected(s)),c=N(()=>r.value&&[i.selectedClass.value,e.selectedClass]);return ce(r,u=>{t.emit("group:selected",{value:u})}),{id:s,isSelected:r,toggle:()=>i.select(s,!r.value),select:u=>i.select(s,u),selectedClass:c,value:l,disabled:o,group:i}}function ut(e,a){let n=!1;const t=xa([]),s=fe(e,"modelValue",[],p=>p==null?[]:zd(t,ya(p)),p=>{const m=h5(t,p);return e.multiple?m:m[0]}),i=ra("useGroup");function l(p,m){const h=p,A=Symbol.for(`${a.description}:id`),M=is(A,i==null?void 0:i.vnode).indexOf(m);M>-1?t.splice(M,0,h):t.push(h)}function o(p){if(n)return;r();const m=t.findIndex(h=>h.id===p);t.splice(m,1)}function r(){const p=t.find(m=>!m.disabled);p&&e.mandatory==="force"&&!s.value.length&&(s.value=[p.id])}fa(()=>{r()}),Sa(()=>{n=!0});function c(p,m){const h=t.find(A=>A.id===p);if(!(m&&(h!=null&&h.disabled)))if(e.multiple){const A=s.value.slice(),f=A.findIndex(g=>g===p),M=~f;if(m=m??!M,M&&e.mandatory&&A.length<=1||!M&&e.max!=null&&A.length+1>e.max)return;f<0&&m?A.push(p):f>=0&&!m&&A.splice(f,1),s.value=A}else{const A=s.value.includes(p);if(e.mandatory&&A)return;s.value=m??!A?[p]:[]}}function u(p){if(e.multiple,s.value.length){const m=s.value[0],h=t.findIndex(M=>M.id===m);let A=(h+p)%t.length,f=t[A];for(;f.disabled&&A!==h;)A=(A+p)%t.length,f=t[A];if(f.disabled)return;s.value=[t[A].id]}else{const m=t.find(h=>!h.disabled);m&&(s.value=[m.id])}}const H={register:l,unregister:o,selected:s,select:c,disabled:_(e,"disabled"),prev:()=>u(t.length-1),next:()=>u(1),isSelected:p=>s.value.includes(p),selectedClass:N(()=>e.selectedClass),items:N(()=>t),getItemIndex:p=>m5(t,p)};return Oe(a,H),H}function m5(e,a){const n=zd(e,[a]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function zd(e,a){const n=[];return a.forEach(t=>{const s=e.find(l=>qn(t,l.value)),i=e[t];(s==null?void 0:s.value)!=null?n.push(s.id):i!=null&&n.push(i.id)}),n}function h5(e,a){const n=[];return a.forEach(t=>{const s=e.findIndex(i=>i.id===t);if(~s){const i=e[s];n.push(i.value!=null?i.value:s)}}),n}const Wo=Symbol.for("vuetify:v-btn-toggle"),A5=I({...Wd(),...Ut()},"VBtnToggle"),N5=W()({name:"VBtnToggle",props:A5(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{isSelected:t,next:s,prev:i,select:l,selected:o}=ut(e,Wo);return $(()=>{const[r]=Rl.filterProps(e);return d(Rl,te({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:t,next:s,prev:i,select:l,selected:o})]}})}),{next:s,prev:i,select:l}}});const f5=["x-small","small","default","large","x-large"],yn=I({size:{type:[String,Number],default:"default"}},"size");function _t(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn();return yo(()=>{let n,t;return ni(f5,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:le(e.size),height:le(e.size)}),{sizeClasses:n,sizeStyles:t}})}const M5=I({color:String,start:Boolean,end:Boolean,icon:Ce,...oe(),...yn(),...ve({tag:"i"}),...Ie()},"VIcon"),Fe=W()({name:"VIcon",props:M5(),setup(e,a){let{attrs:n,slots:t}=a;const s=ae(),{themeClasses:i}=Ge(e),{iconData:l}=th(N(()=>s.value||e.icon)),{sizeClasses:o}=_t(e),{textColorClasses:r,textColorStyles:c}=Na(_(e,"color"));return $(()=>{var H,p;const u=(H=t.default)==null?void 0:H.call(t);return u&&(s.value=(p=rd(u).filter(m=>m.type===vs&&m.children&&typeof m.children=="string")[0])==null?void 0:p.children),d(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",i.value,o.value,r.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:le(e.size),height:le(e.size),width:le(e.size)},c.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[u]})}),{}}});function zo(e,a){const n=ae(),t=ie(!1);if(xo){const s=new IntersectionObserver(i=>{e==null||e(i,s),t.value=!!i.find(l=>l.isIntersecting)},a);Sa(()=>{s.disconnect()}),ce(n,(i,l)=>{l&&(s.unobserve(l),t.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:n,isIntersecting:t}}const C5=I({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...oe(),...yn(),...ve({tag:"div"}),...Ie()},"VProgressCircular"),Qo=W()({name:"VProgressCircular",props:C5(),setup(e,a){let{slots:n}=a;const t=20,s=2*Math.PI*t,i=ae(),{themeClasses:l}=Ge(e),{sizeClasses:o,sizeStyles:r}=_t(e),{textColorClasses:c,textColorStyles:u}=Na(_(e,"color")),{textColorClasses:H,textColorStyles:p}=Na(_(e,"bgColor")),{intersectionRef:m,isIntersecting:h}=zo(),{resizeRef:A,contentRect:f}=dn(),M=N(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),g=N(()=>Number(e.width)),k=N(()=>r.value?Number(e.size):f.value?f.value.width:Math.max(g.value,32)),x=N(()=>t/(1-g.value/k.value)*2),v=N(()=>g.value/k.value*x.value),D=N(()=>le((100-M.value)/100*s));return ka(()=>{m.value=i.value,A.value=i.value}),$(()=>d(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,o.value,c.value,e.class],style:[r.value,u.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:M.value},{default:()=>[d("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${x.value} ${x.value}`},[d("circle",{class:["v-progress-circular__underlay",H.value],style:p.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":v.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),d("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":v.value,"stroke-dasharray":s,"stroke-dashoffset":D.value},null)]),n.default&&d("div",{class:"v-progress-circular__content"},[n.default({value:M.value})])]})),{}}});const E1={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Un=I({location:String},"location");function Fn(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Ha();return{locationStyles:N(()=>{if(!e.location)return{};const{side:i,align:l}=kl(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function o(c){return n?n(c):0}const r={};return i!=="center"&&(a?r[E1[i]]=`calc(100% - ${o(i)}px)`:r[i]=0),l!=="center"?a?r[E1[l]]=`calc(100% - ${o(l)}px)`:r[l]=0:(i==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),r})}}const g5=I({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...oe(),...Un({location:"top"}),...Ke(),...ve(),...Ie()},"VProgressLinear"),Oo=W()({name:"VProgressLinear",props:g5(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"modelValue"),{isRtl:s,rtlClasses:i}=Ha(),{themeClasses:l}=Ge(e),{locationStyles:o}=Fn(e),{textColorClasses:r,textColorStyles:c}=Na(e,"color"),{backgroundColorClasses:u,backgroundColorStyles:H}=ea(N(()=>e.bgColor||e.color)),{backgroundColorClasses:p,backgroundColorStyles:m}=ea(e,"color"),{roundedClasses:h}=Ye(e),{intersectionRef:A,isIntersecting:f}=zo(),M=N(()=>parseInt(e.max,10)),g=N(()=>parseInt(e.height,10)),k=N(()=>parseFloat(e.bufferValue)/M.value*100),x=N(()=>parseFloat(t.value)/M.value*100),v=N(()=>s.value!==e.reverse),D=N(()=>e.indeterminate?"fade-transition":"slide-x-transition"),E=N(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function C(S){if(!A.value)return;const{left:b,right:w,width:P}=A.value.getBoundingClientRect(),B=v.value?P-S.clientX+(w-P):S.clientX-b;t.value=Math.round(B/P*M.value)}return $(()=>d(e.tag,{ref:A,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&f.value,"v-progress-linear--reverse":v.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},h.value,l.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?le(g.value):0,"--v-progress-linear-height":le(g.value),...o.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:x.value,onClick:e.clickable&&C},{default:()=>[e.stream&&d("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...c.value,[v.value?"left":"right"]:le(-g.value),borderTop:`${le(g.value/2)} dotted`,opacity:E.value,top:`calc(50% - ${le(g.value/4)})`,width:le(100-k.value,"%"),"--v-progress-linear-stream-to":le(g.value*(v.value?1:-1))}},null),d("div",{class:["v-progress-linear__background",u.value],style:[H.value,{opacity:E.value,width:le(e.stream?k.value:100,"%")}]},null),d(cn,{name:D.value},{default:()=>[e.indeterminate?d("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(S=>d("div",{key:S,class:["v-progress-linear__indeterminate",S,p.value],style:m.value},null))]):d("div",{class:["v-progress-linear__determinate",p.value],style:[m.value,{width:le(x.value,"%")}]},null)]}),n.default&&d("div",{class:"v-progress-linear__content"},[n.default({value:x.value,buffer:k.value})])]})),{}}}),bi=I({loading:[Boolean,String]},"loader");function xs(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn();return{loaderClasses:N(()=>({[`${a}--loading`]:e.loading}))}}function Pi(e,a){var t;let{slots:n}=a;return d("div",{class:`${e.name}__loader`},[((t=n.default)==null?void 0:t.call(n,{color:e.color,isActive:e.active}))||d(Oo,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const k5=["static","relative","fixed","absolute","sticky"],Wt=I({position:{type:String,validator:e=>k5.includes(e)}},"position");function zt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn();return{positionClasses:N(()=>e.position?`${a}--${e.position}`:void 0)}}function Qd(){var e,a;return(a=(e=ra("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function ys(e,a){const n=ap("RouterLink"),t=N(()=>!!(e.href||e.to)),s=N(()=>(t==null?void 0:t.value)||t1(a,"click")||t1(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:s,href:_(e,"href")};const i=e.to?n.useLink(e):void 0;return{isLink:t,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&N(()=>{var l,o;return e.exact?(l=i.isExactActive)==null?void 0:l.value:(o=i.isActive)==null?void 0:o.value}),href:N(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const Ds=I({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let el=!1;function S5(e,a){let n=!1,t,s;je&&(_e(()=>{window.addEventListener("popstate",i),t=e==null?void 0:e.beforeEach((l,o,r)=>{el?n?a(r):r():setTimeout(()=>n?a(r):r()),el=!0}),s=e==null?void 0:e.afterEach(()=>{el=!1})}),Da(()=>{window.removeEventListener("popstate",i),t==null||t(),s==null||s()}));function i(l){var o;(o=l.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}function T5(e,a){ce(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&a&&_e(()=>{a(!0)})},{immediate:!0})}const Bl=Symbol("rippleStop"),v5=80;function w1(e,a){e.style.transform=a,e.style.webkitTransform=a}function Il(e){return e.constructor.name==="TouchEvent"}function Od(e){return e.constructor.name==="KeyboardEvent"}const x5=function(e,a){var H;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!Od(e)){const p=a.getBoundingClientRect(),m=Il(e)?e.touches[e.touches.length-1]:e;t=m.clientX-p.left,s=m.clientY-p.top}let i=0,l=.3;(H=a._ripple)!=null&&H.circle?(l=.15,i=a.clientWidth/2,i=n.center?i:i+Math.sqrt((t-i)**2+(s-i)**2)/4):i=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const o=`${(a.clientWidth-i*2)/2}px`,r=`${(a.clientHeight-i*2)/2}px`,c=n.center?o:`${t-i}px`,u=n.center?r:`${s-i}px`;return{radius:i,scale:l,x:c,y:u,centerX:o,centerY:r}},oi={show(e,a){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((m=a==null?void 0:a._ripple)!=null&&m.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:i,scale:l,x:o,y:r,centerX:c,centerY:u}=x5(e,a,n),H=`${i*2}px`;s.className="v-ripple__animation",s.style.width=H,s.style.height=H,a.appendChild(t);const p=window.getComputedStyle(a);p&&p.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),w1(s,`translate(${o}, ${r}) scale3d(${l},${l},${l})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),w1(s,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function Kd(e){return typeof e>"u"||!!e}function Ms(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[Bl])){if(e[Bl]=!0,Il(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||Od(e),n._ripple.class&&(a.class=n._ripple.class),Il(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{oi.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},v5)}else oi.show(e,n,a)}}function R1(e){e[Bl]=!0}function wa(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{wa(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),oi.hide(a)}}function Xd(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let Cs=!1;function jd(e){!Cs&&(e.keyCode===Zr.enter||e.keyCode===Zr.space)&&(Cs=!0,Ms(e))}function $d(e){Cs=!1,wa(e)}function Yd(e){Cs&&(Cs=!1,wa(e))}function Jd(e,a,n){const{value:t,modifiers:s}=a,i=Kd(t);if(i||oi.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Ml(t)&&t.class&&(e._ripple.class=t.class),i&&!n){if(s.stop){e.addEventListener("touchstart",R1,{passive:!0}),e.addEventListener("mousedown",R1);return}e.addEventListener("touchstart",Ms,{passive:!0}),e.addEventListener("touchend",wa,{passive:!0}),e.addEventListener("touchmove",Xd,{passive:!0}),e.addEventListener("touchcancel",wa),e.addEventListener("mousedown",Ms),e.addEventListener("mouseup",wa),e.addEventListener("mouseleave",wa),e.addEventListener("keydown",jd),e.addEventListener("keyup",$d),e.addEventListener("blur",Yd),e.addEventListener("dragstart",wa,{passive:!0})}else!i&&n&&Zd(e)}function Zd(e){e.removeEventListener("mousedown",Ms),e.removeEventListener("touchstart",Ms),e.removeEventListener("touchend",wa),e.removeEventListener("touchmove",Xd),e.removeEventListener("touchcancel",wa),e.removeEventListener("mouseup",wa),e.removeEventListener("mouseleave",wa),e.removeEventListener("keydown",jd),e.removeEventListener("keyup",$d),e.removeEventListener("dragstart",wa),e.removeEventListener("blur",Yd)}function y5(e,a){Jd(e,a,!1)}function D5(e){delete e._ripple,Zd(e)}function b5(e,a){if(a.value===a.oldValue)return;const n=Kd(a.oldValue);Jd(e,a,n)}const Vn={mounted:y5,unmounted:D5,updated:b5},Ko=I({active:{type:Boolean,default:void 0},symbol:{type:null,default:Wo},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ce,appendIcon:Ce,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...qa(),...oe(),...da(),...za(),...ca(),...Ft(),...bi(),...Un(),...Wt(),...Ke(),...Ds(),...yn(),...ve({tag:"button"}),...Ie(),...Ka({variant:"elevated"})},"VBtn"),ta=W()({name:"VBtn",directives:{Ripple:Vn},props:Ko(),emits:{"group:selected":e=>!0},setup(e,a){let{attrs:n,slots:t}=a;const{themeClasses:s}=Ge(e),{borderClasses:i}=Oa(e),{colorClasses:l,colorStyles:o,variantClasses:r}=dt(e),{densityClasses:c}=Ca(e),{dimensionStyles:u}=Qa(e),{elevationClasses:H}=ma(e),{loaderClasses:p}=xs(e),{locationStyles:m}=Fn(e),{positionClasses:h}=zt(e),{roundedClasses:A}=Ye(e),{sizeClasses:f,sizeStyles:M}=_t(e),g=Vt(e,e.symbol,!1),k=ys(e,n),x=N(()=>{var S;return e.active!==void 0?e.active:k.isLink.value?(S=k.isActive)==null?void 0:S.value:g==null?void 0:g.isSelected.value}),v=N(()=>(g==null?void 0:g.disabled.value)||e.disabled),D=N(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),E=N(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function C(S){var b;v.value||k.isLink.value&&(S.metaKey||S.ctrlKey||S.shiftKey||S.button!==0||n.target==="_blank")||((b=k.navigate)==null||b.call(k,S),g==null||g.toggle())}return T5(k,g==null?void 0:g.select),$(()=>{var F,ne;const S=k.isLink.value?"a":e.tag,b=!!(e.prependIcon||t.prepend),w=!!(e.appendIcon||t.append),P=!!(e.icon&&e.icon!==!0),B=(g==null?void 0:g.isSelected.value)&&(!k.isLink.value||((F=k.isActive)==null?void 0:F.value))||!g||((ne=k.isActive)==null?void 0:ne.value);return $e(d(S,{type:S==="a"?void 0:"button",class:["v-btn",g==null?void 0:g.selectedClass.value,{"v-btn--active":x.value,"v-btn--block":e.block,"v-btn--disabled":v.value,"v-btn--elevated":D.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},s.value,i.value,B?l.value:void 0,c.value,H.value,p.value,h.value,A.value,f.value,r.value,e.class],style:[B?o.value:void 0,u.value,m.value,M.value,e.style],disabled:v.value||void 0,href:k.href.value,onClick:C,value:E.value},{default:()=>{var q;return[ct(!0,"v-btn"),!e.icon&&b&&d("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?d(Ue,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):d(Fe,{key:"prepend-icon",icon:e.prependIcon},null)]),d("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&P?d(Fe,{key:"content-icon",icon:e.icon},null):d(Ue,{key:"content-defaults",disabled:!P,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var U;return[((U=t.default)==null?void 0:U.call(t))??e.text]}})]),!e.icon&&w&&d("span",{key:"append",class:"v-btn__append"},[t.append?d(Ue,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):d(Fe,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&d("span",{key:"loader",class:"v-btn__loader"},[((q=t.loader)==null?void 0:q.call(t))??d(Qo,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ia("ripple"),!v.value&&e.ripple,null]])}),{}}}),P5=I({...Ko({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),E5=W()({name:"VAppBarNavIcon",props:P5(),setup(e,a){let{slots:n}=a;return $(()=>d(ta,te(e,{class:["v-app-bar-nav-icon"]}),n)),{}}}),w5=W()({name:"VAppBarTitle",props:Id(),setup(e,a){let{slots:n}=a;return $(()=>d(qo,te(e,{class:"v-app-bar-title"}),n)),{}}});const eu=an("v-alert-title"),R5=["success","info","warning","error"],B5=I({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Ce,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>R5.includes(e)},...oe(),...da(),...za(),...ca(),...Un(),...Wt(),...Ke(),...ve(),...Ie(),...Ka({variant:"flat"})},"VAlert"),I5=W()({name:"VAlert",props:B5(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:n,slots:t}=a;const s=fe(e,"modelValue"),i=N(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),l=N(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:o}=Ge(e),{colorClasses:r,colorStyles:c,variantClasses:u}=dt(l),{densityClasses:H}=Ca(e),{dimensionStyles:p}=Qa(e),{elevationClasses:m}=ma(e),{locationStyles:h}=Fn(e),{positionClasses:A}=zt(e),{roundedClasses:f}=Ye(e),{textColorClasses:M,textColorStyles:g}=Na(_(e,"borderColor")),{t:k}=Ta(),x=N(()=>({"aria-label":k(e.closeLabel),onClick(v){s.value=!1,n("click:close",v)}}));return()=>{const v=!!(t.prepend||i.value),D=!!(t.title||e.title),E=!!(t.close||e.closable);return s.value&&d(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},o.value,r.value,H.value,m.value,A.value,f.value,u.value,e.class],style:[c.value,p.value,h.value,e.style],role:"alert"},{default:()=>{var C,S;return[ct(!1,"v-alert"),e.border&&d("div",{key:"border",class:["v-alert__border",M.value],style:g.value},null),v&&d("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?d(Ue,{key:"prepend-defaults",disabled:!i.value,defaults:{VIcon:{density:e.density,icon:i.value,size:e.prominent?44:28}}},t.prepend):d(Fe,{key:"prepend-icon",density:e.density,icon:i.value,size:e.prominent?44:28},null)]),d("div",{class:"v-alert__content"},[D&&d(eu,{key:"title"},{default:()=>{var b;return[((b=t.title)==null?void 0:b.call(t))??e.title]}}),((C=t.text)==null?void 0:C.call(t))??e.text,(S=t.default)==null?void 0:S.call(t)]),t.append&&d("div",{key:"append",class:"v-alert__append"},[t.append()]),E&&d("div",{key:"close",class:"v-alert__close"},[t.close?d(Ue,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var b;return[(b=t.close)==null?void 0:b.call(t,{props:x.value})]}}):d(ta,te({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},x.value),null)])]}})}}});const L5=I({text:String,clickable:Boolean,...oe(),...Ie()},"VLabel"),Qt=W()({name:"VLabel",props:L5(),setup(e,a){let{slots:n}=a;return $(()=>{var t;return d("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(t=n.default)==null?void 0:t.call(n)])}),{}}});const au=Symbol.for("vuetify:selection-control-group"),Xo=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:Ce,trueIcon:Ce,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:qn},...oe(),...da(),...Ie()},"SelectionControlGroup"),G5=I({...Xo({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),nu=W()({name:"VSelectionControlGroup",props:G5(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"modelValue"),s=Ma(),i=N(()=>e.id||`v-selection-control-group-${s}`),l=N(()=>e.name||i.value),o=new Set;return Oe(au,{modelValue:t,forceUpdate:()=>{o.forEach(r=>r())},onForceUpdate:r=>{o.add(r),Da(()=>{o.delete(r)})}}),Ze({[e.defaultsTarget]:{color:_(e,"color"),disabled:_(e,"disabled"),density:_(e,"density"),error:_(e,"error"),inline:_(e,"inline"),modelValue:t,multiple:N(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),name:l,falseIcon:_(e,"falseIcon"),trueIcon:_(e,"trueIcon"),readonly:_(e,"readonly"),ripple:_(e,"ripple"),type:_(e,"type"),valueComparator:_(e,"valueComparator")}}),$(()=>{var r;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(r=n.default)==null?void 0:r.call(n)])}),{}}}),Ei=I({label:String,trueValue:null,falseValue:null,value:null,...oe(),...Xo()},"VSelectionControl");function q5(e){const a=Re(au,void 0),{densityClasses:n}=Ca(e),t=fe(e,"modelValue"),s=N(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=N(()=>e.falseValue!==void 0?e.falseValue:!1),l=N(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),o=N({get(){const H=a?a.modelValue.value:t.value;return l.value?H.some(p=>e.valueComparator(p,s.value)):e.valueComparator(H,s.value)},set(H){if(e.readonly)return;const p=H?s.value:i.value;let m=p;l.value&&(m=H?[...ya(t.value),p]:ya(t.value).filter(h=>!e.valueComparator(h,s.value))),a?a.modelValue.value=m:t.value=m}}),{textColorClasses:r,textColorStyles:c}=Na(N(()=>o.value&&!e.error&&!e.disabled?e.color:void 0)),u=N(()=>o.value?e.trueIcon:e.falseIcon);return{group:a,densityClasses:n,trueValue:s,falseValue:i,model:o,textColorClasses:r,textColorStyles:c,icon:u}}const wt=W()({name:"VSelectionControl",directives:{Ripple:Vn},inheritAttrs:!1,props:Ei(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:n,slots:t}=a;const{group:s,densityClasses:i,icon:l,model:o,textColorClasses:r,textColorStyles:c,trueValue:u}=q5(e),H=Ma(),p=N(()=>e.id||`input-${H}`),m=ie(!1),h=ie(!1),A=ae();s==null||s.onForceUpdate(()=>{A.value&&(A.value.checked=o.value)});function f(k){m.value=!0,Pt(k.target,":focus-visible")!==!1&&(h.value=!0)}function M(){m.value=!1,h.value=!1}function g(k){e.readonly&&s&&_e(()=>s.forceUpdate()),o.value=k.target.checked}return $(()=>{var E,C;const k=t.label?t.label({label:e.label,props:{for:p.value}}):e.label,[x,v]=lt(n),D=d("input",te({ref:A,checked:o.value,disabled:!!(e.readonly||e.disabled),id:p.value,onBlur:M,onFocus:f,onInput:g,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:u.value,name:e.name,"aria-checked":e.type==="checkbox"?o.value:void 0},v),null);return d("div",te({class:["v-selection-control",{"v-selection-control--dirty":o.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":m.value,"v-selection-control--focus-visible":h.value,"v-selection-control--inline":e.inline},i.value,e.class]},x,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",r.value],style:c.value},[(E=t.default)==null?void 0:E.call(t),$e(d("div",{class:["v-selection-control__input"]},[((C=t.input)==null?void 0:C.call(t,{model:o,textColorClasses:r,textColorStyles:c,inputNode:D,icon:l.value,props:{onFocus:f,onBlur:M,id:p.value}}))??d(me,null,[l.value&&d(Fe,{key:"icon",icon:l.value},null),D])]),[[Ia("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),k&&d(Qt,{for:p.value,clickable:!0},{default:()=>[k]})])}),{isFocused:m,input:A}}}),tu=I({indeterminate:Boolean,indeterminateIcon:{type:Ce,default:"$checkboxIndeterminate"},...Ei({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Cn=W()({name:"VCheckboxBtn",props:tu(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"indeterminate"),s=fe(e,"modelValue");function i(r){t.value&&(t.value=!1)}const l=N(()=>t.value?e.indeterminateIcon:e.falseIcon),o=N(()=>t.value?e.indeterminateIcon:e.trueIcon);return $(()=>d(wt,te(e,{modelValue:s.value,"onUpdate:modelValue":[r=>s.value=r,i],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:l.value,trueIcon:o.value,"aria-checked":t.value?"mixed":void 0}),n)),{}}});function su(e){const{t:a}=Ta();function n(t){let{name:s}=t;const i={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[s],l=e[`onClick:${s}`],o=l&&i?a(`$vuetify.input.${i}`,e.label??""):void 0;return d(Fe,{icon:e[`${s}Icon`],"aria-label":o,onClick:l},null)}return{InputIcon:n}}const U5=I({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...oe(),...xn({transition:{component:Fo,leaveAbsolute:!0,group:!0}})},"VMessages"),iu=W()({name:"VMessages",props:U5(),setup(e,a){let{slots:n}=a;const t=N(()=>ya(e.messages)),{textColorClasses:s,textColorStyles:i}=Na(N(()=>e.color));return $(()=>d(Ja,{transition:e.transition,tag:"div",class:["v-messages",s.value,e.class],style:[i.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&t.value.map((l,o)=>d("div",{class:"v-messages__message",key:`${o}-${t.value}`},[n.message?n.message({message:l}):l]))]})),{}}}),wi=I({focused:Boolean,"onUpdate:focused":rn()},"focus");function _n(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn();const n=fe(e,"focused"),t=N(()=>({[`${a}--focused`]:n.value}));function s(){n.value=!0}function i(){n.value=!1}return{focusClasses:t,isFocused:n,focus:s,blur:i}}const lu=Symbol.for("vuetify:form"),F5=I({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function V5(e){const a=fe(e,"modelValue"),n=N(()=>e.disabled),t=N(()=>e.readonly),s=ie(!1),i=ae([]),l=ae([]);async function o(){const u=[];let H=!0;l.value=[],s.value=!0;for(const p of i.value){const m=await p.validate();if(m.length>0&&(H=!1,u.push({id:p.id,errorMessages:m})),!H&&e.fastFail)break}return l.value=u,s.value=!1,{valid:H,errors:l.value}}function r(){i.value.forEach(u=>u.reset())}function c(){i.value.forEach(u=>u.resetValidation())}return ce(i,()=>{let u=0,H=0;const p=[];for(const m of i.value)m.isValid===!1?(H++,p.push({id:m.id,errorMessages:m.errorMessages})):m.isValid===!0&&u++;l.value=p,a.value=H>0?!1:u===i.value.length?!0:null},{deep:!0}),Oe(lu,{register:u=>{let{id:H,validate:p,reset:m,resetValidation:h}=u;i.value.some(A=>A.id===H),i.value.push({id:H,validate:p,reset:m,resetValidation:h,isValid:null,errorMessages:[]})},unregister:u=>{i.value=i.value.filter(H=>H.id!==u)},update:(u,H,p)=>{const m=i.value.find(h=>h.id===u);m&&(m.isValid=H,m.errorMessages=p)},isDisabled:n,isReadonly:t,isValidating:s,isValid:a,items:i,validateOn:_(e,"validateOn")}),{errors:l,isDisabled:n,isReadonly:t,isValidating:s,isValid:a,items:i,validate:o,reset:r,resetValidation:c}}function Ri(){return Re(lu,null)}const ou=I({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...wi()},"validation");function ru(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vn(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ma();const t=fe(e,"modelValue"),s=N(()=>e.validationValue===void 0?t.value:e.validationValue),i=Ri(),l=ae([]),o=ie(!0),r=N(()=>!!(ya(t.value===""?null:t.value).length||ya(s.value===""?null:s.value).length)),c=N(()=>!!(e.disabled??(i==null?void 0:i.isDisabled.value))),u=N(()=>!!(e.readonly??(i==null?void 0:i.isReadonly.value))),H=N(()=>e.errorMessages.length?ya(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):l.value),p=N(()=>{let x=(e.validateOn??(i==null?void 0:i.validateOn.value))||"input";x==="lazy"&&(x="input lazy");const v=new Set((x==null?void 0:x.split(" "))??[]);return{blur:v.has("blur")||v.has("input"),input:v.has("input"),submit:v.has("submit"),lazy:v.has("lazy")}}),m=N(()=>e.error||e.errorMessages.length?!1:e.rules.length?o.value?l.value.length||p.value.lazy?null:!0:!l.value.length:!0),h=ie(!1),A=N(()=>({[`${a}--error`]:m.value===!1,[`${a}--dirty`]:r.value,[`${a}--disabled`]:c.value,[`${a}--readonly`]:u.value})),f=N(()=>e.name??Ra(n));Ci(()=>{i==null||i.register({id:f.value,validate:k,reset:M,resetValidation:g})}),Sa(()=>{i==null||i.unregister(f.value)}),fa(async()=>{p.value.lazy||await k(!0),i==null||i.update(f.value,m.value,H.value)}),fn(()=>p.value.input,()=>{ce(s,()=>{if(s.value!=null)k();else if(e.focused){const x=ce(()=>e.focused,v=>{v||k(),x()})}})}),fn(()=>p.value.blur,()=>{ce(()=>e.focused,x=>{x||k()})}),ce(m,()=>{i==null||i.update(f.value,m.value,H.value)});function M(){t.value=null,_e(g)}function g(){o.value=!0,p.value.lazy?l.value=[]:k(!0)}async function k(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const v=[];h.value=!0;for(const D of e.rules){if(v.length>=+(e.maxErrors??1))break;const C=await(typeof D=="function"?D:()=>D)(s.value);if(C!==!0){if(C!==!1&&typeof C!="string"){console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`);continue}v.push(C||"")}}return l.value=v,h.value=!1,o.value=x,l.value}return{errorMessages:H,isDirty:r,isDisabled:c,isReadonly:u,isPristine:o,isValid:m,isValidating:h,reset:M,resetValidation:g,validate:k,validationClasses:A}}const Dn=I({id:String,appendIcon:Ce,centerAffix:{type:Boolean,default:!0},prependIcon:Ce,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":rn(),"onClick:append":rn(),...oe(),...da(),...ou()},"VInput"),pa=W()({name:"VInput",props:{...Dn()},emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:n,slots:t,emit:s}=a;const{densityClasses:i}=Ca(e),{rtlClasses:l}=Ha(),{InputIcon:o}=su(e),r=Ma(),c=N(()=>e.id||`input-${r}`),u=N(()=>`${c.value}-messages`),{errorMessages:H,isDirty:p,isDisabled:m,isReadonly:h,isPristine:A,isValid:f,isValidating:M,reset:g,resetValidation:k,validate:x,validationClasses:v}=ru(e,"v-input",c),D=N(()=>({id:c,messagesId:u,isDirty:p,isDisabled:m,isReadonly:h,isPristine:A,isValid:f,isValidating:M,reset:g,resetValidation:k,validate:x})),E=N(()=>{var C;return(C=e.errorMessages)!=null&&C.length||!A.value&&H.value.length?H.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return $(()=>{var P,B,F,ne;const C=!!(t.prepend||e.prependIcon),S=!!(t.append||e.appendIcon),b=E.value.length>0,w=!e.hideDetails||e.hideDetails==="auto"&&(b||!!t.details);return d("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix},i.value,l.value,v.value,e.class],style:e.style},[C&&d("div",{key:"prepend",class:"v-input__prepend"},[(P=t.prepend)==null?void 0:P.call(t,D.value),e.prependIcon&&d(o,{key:"prepend-icon",name:"prepend"},null)]),t.default&&d("div",{class:"v-input__control"},[(B=t.default)==null?void 0:B.call(t,D.value)]),S&&d("div",{key:"append",class:"v-input__append"},[e.appendIcon&&d(o,{key:"append-icon",name:"append"},null),(F=t.append)==null?void 0:F.call(t,D.value)]),w&&d("div",{class:"v-input__details"},[d(iu,{id:u.value,active:b,messages:E.value},{message:t.message}),(ne=t.details)==null?void 0:ne.call(t,D.value)])])}),{reset:g,resetValidation:k,validate:x}}}),_5=I({...Dn(),...Hn(tu(),["inline"])},"VCheckbox"),W5=W()({name:"VCheckbox",inheritAttrs:!1,props:_5(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,a){let{attrs:n,slots:t}=a;const s=fe(e,"modelValue"),{isFocused:i,focus:l,blur:o}=_n(e),r=Ma(),c=N(()=>e.id||`checkbox-${r}`);return $(()=>{const[u,H]=lt(n),[p,m]=pa.filterProps(e),[h,A]=Cn.filterProps(e);return d(pa,te({class:["v-checkbox",e.class]},u,p,{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,id:c.value,focused:i.value,style:e.style}),{...t,default:f=>{let{id:M,messagesId:g,isDisabled:k,isReadonly:x}=f;return d(Cn,te(h,{id:M.value,"aria-describedby":g.value,disabled:k.value,readonly:x.value},H,{modelValue:s.value,"onUpdate:modelValue":v=>s.value=v,onFocus:l,onBlur:o}),t)}})}),{}}});const z5=I({start:Boolean,end:Boolean,icon:Ce,image:String,...oe(),...da(),...Ke(),...yn(),...ve(),...Ie(),...Ka({variant:"flat"})},"VAvatar"),Ln=W()({name:"VAvatar",props:z5(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{colorClasses:s,colorStyles:i,variantClasses:l}=dt(e),{densityClasses:o}=Ca(e),{roundedClasses:r}=Ye(e),{sizeClasses:c,sizeStyles:u}=_t(e);return $(()=>d(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,o.value,r.value,c.value,l.value,e.class],style:[i.value,u.value,e.style]},{default:()=>{var H;return[e.image?d(it,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?d(Fe,{key:"icon",icon:e.icon},null):(H=n.default)==null?void 0:H.call(n),ct(!1,"v-avatar")]}})),{}}});const cu=Symbol.for("vuetify:v-chip-group"),Q5=I({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:qn},...oe(),...Ut({selectedClass:"v-chip--selected"}),...ve(),...Ie(),...Ka({variant:"tonal"})},"VChipGroup"),O5=W()({name:"VChipGroup",props:Q5(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{isSelected:s,select:i,next:l,prev:o,selected:r}=ut(e,cu);return Ze({VChip:{color:_(e,"color"),disabled:_(e,"disabled"),filter:_(e,"filter"),variant:_(e,"variant")}}),$(()=>d(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},t.value,e.class],style:e.style},{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:s,select:i,next:l,prev:o,selected:r.value})]}})),{}}}),K5=I({activeClass:String,appendAvatar:String,appendIcon:Ce,closable:Boolean,closeIcon:{type:Ce,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:Ce,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:rn(),onClickOnce:rn(),...qa(),...oe(),...da(),...ca(),...Ft(),...Ke(),...Ds(),...yn(),...ve({tag:"span"}),...Ie(),...Ka({variant:"tonal"})},"VChip"),xe=W()({name:"VChip",directives:{Ripple:Vn},props:K5(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,a){let{attrs:n,emit:t,slots:s}=a;const{t:i}=Ta(),{borderClasses:l}=Oa(e),{colorClasses:o,colorStyles:r,variantClasses:c}=dt(e),{densityClasses:u}=Ca(e),{elevationClasses:H}=ma(e),{roundedClasses:p}=Ye(e),{sizeClasses:m}=_t(e),{themeClasses:h}=Ge(e),A=fe(e,"modelValue"),f=Vt(e,cu,!1),M=ys(e,n),g=N(()=>e.link!==!1&&M.isLink.value),k=N(()=>!e.disabled&&e.link!==!1&&(!!f||e.link||M.isClickable.value)),x=N(()=>({"aria-label":i(e.closeLabel),onClick(E){E.stopPropagation(),A.value=!1,t("click:close",E)}}));function v(E){var C;t("click",E),k.value&&((C=M.navigate)==null||C.call(M,E),f==null||f.toggle())}function D(E){(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),v(E))}return()=>{const E=M.isLink.value?"a":e.tag,C=!!(e.appendIcon||e.appendAvatar),S=!!(C||s.append),b=!!(s.close||e.closable),w=!!(s.filter||e.filter)&&f,P=!!(e.prependIcon||e.prependAvatar),B=!!(P||s.prepend),F=!f||f.isSelected.value;return A.value&&$e(d(E,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":k.value,"v-chip--filter":w,"v-chip--pill":e.pill},h.value,l.value,F?o.value:void 0,u.value,H.value,p.value,m.value,c.value,f==null?void 0:f.selectedClass.value,e.class],style:[F?r.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:M.href.value,tabindex:k.value?0:void 0,onClick:v,onKeydown:k.value&&!g.value&&D},{default:()=>{var ne;return[ct(k.value,"v-chip"),w&&d(Vo,{key:"filter"},{default:()=>[$e(d("div",{class:"v-chip__filter"},[s.filter?d(Ue,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},s.filter):d(Fe,{key:"filter-icon",icon:e.filterIcon},null)]),[[un,f.isSelected.value]])]}),B&&d("div",{key:"prepend",class:"v-chip__prepend"},[s.prepend?d(Ue,{key:"prepend-defaults",disabled:!P,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},s.prepend):d(me,null,[e.prependIcon&&d(Fe,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&d(Ln,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),d("div",{class:"v-chip__content"},[((ne=s.default)==null?void 0:ne.call(s,{isSelected:f==null?void 0:f.isSelected.value,selectedClass:f==null?void 0:f.selectedClass.value,select:f==null?void 0:f.select,toggle:f==null?void 0:f.toggle,value:f==null?void 0:f.value.value,disabled:e.disabled}))??e.text]),S&&d("div",{key:"append",class:"v-chip__append"},[s.append?d(Ue,{key:"append-defaults",disabled:!C,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},s.append):d(me,null,[e.appendIcon&&d(Fe,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&d(Ln,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),b&&d("div",te({key:"close",class:"v-chip__close"},x.value),[s.close?d(Ue,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},s.close):d(Fe,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ia("ripple"),k.value&&e.ripple,null]])}}});const Ll=Symbol.for("vuetify:list");function du(){const e=Re(Ll,{hasPrepend:ie(!1),updateHasPrepend:()=>null}),a={hasPrepend:ie(!1),updateHasPrepend:n=>{n&&(a.hasPrepend.value=n)}};return Oe(Ll,a),e}function uu(){return Re(Ll,null)}const X5={open:e=>{let{id:a,value:n,opened:t,parents:s}=e;if(n){const i=new Set;i.add(a);let l=s.get(a);for(;l!=null;)i.add(l),l=s.get(l);return i}else return t.delete(a),t},select:()=>null},Hu={open:e=>{let{id:a,value:n,opened:t,parents:s}=e;if(n){let i=s.get(a);for(t.add(a);i!=null&&i!==a;)t.add(i),i=s.get(i);return t}else t.delete(a);return t},select:()=>null},j5={open:Hu.open,select:e=>{let{id:a,value:n,opened:t,parents:s}=e;if(!n)return t;const i=[];let l=s.get(a);for(;l!=null;)i.push(l),l=s.get(l);return new Set(i)}},jo=e=>{const a={select:n=>{let{id:t,value:s,selected:i}=n;if(t=De(t),e&&!s){const l=Array.from(i.entries()).reduce((o,r)=>{let[c,u]=r;return u==="on"?[...o,c]:o},[]);if(l.length===1&&l[0]===t)return i}return i.set(t,s?"on":"off"),i},in:(n,t,s)=>{let i=new Map;for(const l of n||[])i=a.select({id:l,value:!0,selected:new Map(i),children:t,parents:s});return i},out:n=>{const t=[];for(const[s,i]of n.entries())i==="on"&&t.push(s);return t}};return a},pu=e=>{const a=jo(e);return{select:t=>{let{selected:s,id:i,...l}=t;i=De(i);const o=s.has(i)?new Map([[i,s.get(i)]]):new Map;return a.select({...l,id:i,selected:o})},in:(t,s,i)=>{let l=new Map;return t!=null&&t.length&&(l=a.in(t.slice(0,1),s,i)),l},out:(t,s,i)=>a.out(t,s,i)}},$5=e=>{const a=jo(e);return{select:t=>{let{id:s,selected:i,children:l,...o}=t;return s=De(s),l.has(s)?i:a.select({id:s,selected:i,children:l,...o})},in:a.in,out:a.out}},Y5=e=>{const a=pu(e);return{select:t=>{let{id:s,selected:i,children:l,...o}=t;return s=De(s),l.has(s)?i:a.select({id:s,selected:i,children:l,...o})},in:a.in,out:a.out}},J5=e=>{const a={select:n=>{let{id:t,value:s,selected:i,children:l,parents:o}=n;t=De(t);const r=new Map(i),c=[t];for(;c.length;){const H=c.shift();i.set(H,s?"on":"off"),l.has(H)&&c.push(...l.get(H))}let u=o.get(t);for(;u;){const H=l.get(u),p=H.every(h=>i.get(h)==="on"),m=H.every(h=>!i.has(h)||i.get(h)==="off");i.set(u,p?"on":m?"off":"indeterminate"),u=o.get(u)}return e&&!s&&Array.from(i.entries()).reduce((p,m)=>{let[h,A]=m;return A==="on"?[...p,h]:p},[]).length===0?r:i},in:(n,t,s)=>{let i=new Map;for(const l of n||[])i=a.select({id:l,value:!0,selected:new Map(i),children:t,parents:s});return i},out:(n,t)=>{const s=[];for(const[i,l]of n.entries())l==="on"&&!t.has(i)&&s.push(i);return s}};return a},gs=Symbol.for("vuetify:nested"),mu={id:ie(),root:{register:()=>null,unregister:()=>null,parents:ae(new Map),children:ae(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:ae(new Set),selected:ae(new Map),selectedValues:ae([])}},Z5=I({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),e2=e=>{let a=!1;const n=ae(new Map),t=ae(new Map),s=fe(e,"opened",e.opened,H=>new Set(H),H=>[...H.values()]),i=N(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Y5(e.mandatory);case"leaf":return $5(e.mandatory);case"independent":return jo(e.mandatory);case"single-independent":return pu(e.mandatory);case"classic":default:return J5(e.mandatory)}}),l=N(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return j5;case"single":return X5;case"multiple":default:return Hu}}),o=fe(e,"selected",e.selected,H=>i.value.in(H,n.value,t.value),H=>i.value.out(H,n.value,t.value));Sa(()=>{a=!0});function r(H){const p=[];let m=H;for(;m!=null;)p.unshift(m),m=t.value.get(m);return p}const c=ra("nested"),u={id:ie(),root:{opened:s,selected:o,selectedValues:N(()=>{const H=[];for(const[p,m]of o.value.entries())m==="on"&&H.push(p);return H}),register:(H,p,m)=>{p&&H!==p&&t.value.set(H,p),m&&n.value.set(H,[]),p!=null&&n.value.set(p,[...n.value.get(p)||[],H])},unregister:H=>{if(a)return;n.value.delete(H);const p=t.value.get(H);if(p){const m=n.value.get(p)??[];n.value.set(p,m.filter(h=>h!==H))}t.value.delete(H),s.value.delete(H)},open:(H,p,m)=>{c.emit("click:open",{id:H,value:p,path:r(H),event:m});const h=l.value.open({id:H,value:p,opened:new Set(s.value),children:n.value,parents:t.value,event:m});h&&(s.value=h)},openOnSelect:(H,p,m)=>{const h=l.value.select({id:H,value:p,selected:new Map(o.value),opened:new Set(s.value),children:n.value,parents:t.value,event:m});h&&(s.value=h)},select:(H,p,m)=>{c.emit("click:select",{id:H,value:p,path:r(H),event:m});const h=i.value.select({id:H,value:p,selected:new Map(o.value),children:n.value,parents:t.value,event:m});h&&(o.value=h),u.root.openOnSelect(H,p,m)},children:n,parents:t}};return Oe(gs,u),u.root},hu=(e,a)=>{const n=Re(gs,mu),t=Symbol(Ma()),s=N(()=>e.value!==void 0?e.value:t),i={...n,id:s,open:(l,o)=>n.root.open(s.value,l,o),openOnSelect:(l,o)=>n.root.openOnSelect(s.value,l,o),isOpen:N(()=>n.root.opened.value.has(s.value)),parent:N(()=>n.root.parents.value.get(s.value)),select:(l,o)=>n.root.select(s.value,l,o),isSelected:N(()=>n.root.selected.value.get(De(s.value))==="on"),isIndeterminate:N(()=>n.root.selected.value.get(s.value)==="indeterminate"),isLeaf:N(()=>!n.root.children.value.get(s.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(s.value,n.id.value,a),Sa(()=>{!n.isGroupActivator&&n.root.unregister(s.value)}),a&&Oe(gs,i),i},a2=()=>{const e=Re(gs,mu);Oe(gs,{...e,isGroupActivator:!0})},n2=La({name:"VListGroupActivator",setup(e,a){let{slots:n}=a;return a2(),()=>{var t;return(t=n.default)==null?void 0:t.call(n)}}}),t2=I({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Ce,default:"$collapse"},expandIcon:{type:Ce,default:"$expand"},prependIcon:Ce,appendIcon:Ce,fluid:Boolean,subgroup:Boolean,title:String,value:null,...oe(),...ve()},"VListGroup"),Gl=W()({name:"VListGroup",props:t2(),setup(e,a){let{slots:n}=a;const{isOpen:t,open:s,id:i}=hu(_(e,"value"),!0),l=N(()=>`v-list-group--id-${String(i.value)}`),o=uu(),{isBooted:r}=rt();function c(m){s(!t.value,m)}const u=N(()=>({onClick:c,class:"v-list-group__header",id:l.value})),H=N(()=>t.value?e.collapseIcon:e.expandIcon),p=N(()=>({VListItem:{active:t.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&H.value,appendIcon:e.appendIcon||!e.subgroup&&H.value,title:e.title,value:e.value}}));return $(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":t.value},e.class],style:e.style},{default:()=>[n.activator&&d(Ue,{defaults:p.value},{default:()=>[d(n2,null,{default:()=>[n.activator({props:u.value,isOpen:t.value})]})]}),d(Ja,{transition:{component:yi},disabled:!r.value},{default:()=>{var m;return[$e(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":l.value},[(m=n.default)==null?void 0:m.call(n)]),[[un,t.value]])]}})]})),{}}});const Au=an("v-list-item-subtitle"),Nu=an("v-list-item-title"),s2=I({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Ce,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Ce,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:rn(),onClickOnce:rn(),...qa(),...oe(),...da(),...za(),...ca(),...Ke(),...Ds(),...ve(),...Ie(),...Ka({variant:"text"})},"VListItem"),gn=W()({name:"VListItem",directives:{Ripple:Vn},props:s2(),emits:{click:e=>!0},setup(e,a){let{attrs:n,slots:t,emit:s}=a;const i=ys(e,n),l=N(()=>e.value===void 0?i.href.value:e.value),{select:o,isSelected:r,isIndeterminate:c,isGroupActivator:u,root:H,parent:p,openOnSelect:m}=hu(l,!1),h=uu(),A=N(()=>{var L;return e.active!==!1&&(e.active||((L=i.isActive)==null?void 0:L.value)||r.value)}),f=N(()=>e.link!==!1&&i.isLink.value),M=N(()=>!e.disabled&&e.link!==!1&&(e.link||i.isClickable.value||e.value!=null&&!!h)),g=N(()=>e.rounded||e.nav),k=N(()=>e.color??e.activeColor),x=N(()=>({color:A.value?k.value??e.baseColor:e.baseColor,variant:e.variant}));ce(()=>{var L;return(L=i.isActive)==null?void 0:L.value},L=>{L&&p.value!=null&&H.open(p.value,!0),L&&m(L)},{immediate:!0});const{themeClasses:v}=Ge(e),{borderClasses:D}=Oa(e),{colorClasses:E,colorStyles:C,variantClasses:S}=dt(x),{densityClasses:b}=Ca(e),{dimensionStyles:w}=Qa(e),{elevationClasses:P}=ma(e),{roundedClasses:B}=Ye(g),F=N(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ne=N(()=>({isActive:A.value,select:o,isSelected:r.value,isIndeterminate:c.value}));function q(L){var j;s("click",L),!(u||!M.value)&&((j=i.navigate)==null||j.call(i,L),e.value!=null&&o(!r.value,L))}function U(L){(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),q(L))}return $(()=>{const L=f.value?"a":e.tag,j=t.title||e.title,Y=t.subtitle||e.subtitle,O=!!(e.appendAvatar||e.appendIcon),de=!!(O||t.append),Ne=!!(e.prependAvatar||e.prependIcon),Be=!!(Ne||t.prepend);return h==null||h.updateHasPrepend(Be),e.activeColor&&Dm("active-color",["color","base-color"]),$e(d(L,{class:["v-list-item",{"v-list-item--active":A.value,"v-list-item--disabled":e.disabled,"v-list-item--link":M.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Be&&(h==null?void 0:h.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&A.value},v.value,D.value,E.value,b.value,P.value,F.value,B.value,S.value,e.class],style:[C.value,w.value,e.style],href:i.href.value,tabindex:M.value?h?-2:0:void 0,onClick:q,onKeydown:M.value&&!f.value&&U},{default:()=>{var ke;return[ct(M.value||A.value,"v-list-item"),Be&&d("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?d(Ue,{key:"prepend-defaults",disabled:!Ne,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var z;return[(z=t.prepend)==null?void 0:z.call(t,ne.value)]}}):d(me,null,[e.prependAvatar&&d(Ln,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(Fe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[j&&d(Nu,{key:"title"},{default:()=>{var z;return[((z=t.title)==null?void 0:z.call(t,{title:e.title}))??e.title]}}),Y&&d(Au,{key:"subtitle"},{default:()=>{var z;return[((z=t.subtitle)==null?void 0:z.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(ke=t.default)==null?void 0:ke.call(t,ne.value)]),de&&d("div",{key:"append",class:"v-list-item__append"},[t.append?d(Ue,{key:"append-defaults",disabled:!O,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var z;return[(z=t.append)==null?void 0:z.call(t,ne.value)]}}):d(me,null,[e.appendIcon&&d(Fe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(Ln,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[Ia("ripple"),M.value&&e.ripple]])}),{}}}),i2=I({color:String,inset:Boolean,sticky:Boolean,title:String,...oe(),...ve()},"VListSubheader"),fu=W()({name:"VListSubheader",props:i2(),setup(e,a){let{slots:n}=a;const{textColorClasses:t,textColorStyles:s}=Na(_(e,"color"));return $(()=>{const i=!!(n.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var l;return[i&&d("div",{class:"v-list-subheader__text"},[((l=n.default)==null?void 0:l.call(n))??e.title])]}})}),{}}});const l2=I({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...oe(),...Ie()},"VDivider"),ri=W()({name:"VDivider",props:l2(),setup(e,a){let{attrs:n}=a;const{themeClasses:t}=Ge(e),{textColorClasses:s,textColorStyles:i}=Na(_(e,"color")),l=N(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=le(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=le(e.thickness)),o});return $(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,s.value,e.class],style:[l.value,i.value,e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}}),o2=I({items:Array},"VListChildren"),Mu=W()({name:"VListChildren",props:o2(),setup(e,a){let{slots:n}=a;return du(),()=>{var t,s;return((t=n.default)==null?void 0:t.call(n))??((s=e.items)==null?void 0:s.map(i=>{var m,h;let{children:l,props:o,type:r,raw:c}=i;if(r==="divider")return((m=n.divider)==null?void 0:m.call(n,{props:o}))??d(ri,o,null);if(r==="subheader")return((h=n.subheader)==null?void 0:h.call(n,{props:o}))??d(fu,o,null);const u={subtitle:n.subtitle?A=>{var f;return(f=n.subtitle)==null?void 0:f.call(n,{...A,item:c})}:void 0,prepend:n.prepend?A=>{var f;return(f=n.prepend)==null?void 0:f.call(n,{...A,item:c})}:void 0,append:n.append?A=>{var f;return(f=n.append)==null?void 0:f.call(n,{...A,item:c})}:void 0,title:n.title?A=>{var f;return(f=n.title)==null?void 0:f.call(n,{...A,item:c})}:void 0},[H,p]=Gl.filterProps(o);return l?d(Gl,te({value:o==null?void 0:o.value},H),{activator:A=>{let{props:f}=A;return n.header?n.header({props:{...o,...f}}):d(gn,te(o,f),u)},default:()=>d(Mu,{items:l},n)}):n.item?n.item({props:o}):d(gn,o,u)}))}}}),Cu=I({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function Ct(e,a){const n=na(a,e.itemTitle,a),t=e.returnObject?a:na(a,e.itemValue,n),s=na(a,e.itemChildren),i=e.itemProps===!0?typeof a=="object"&&a!=null&&!Array.isArray(a)?"children"in a?Lt(a,["children"])[1]:a:void 0:na(a,e.itemProps),l={title:n,value:t,...i};return{title:String(l.title??""),value:l.value,props:l,children:Array.isArray(s)?gu(e,s):void 0,raw:a}}function gu(e,a){const n=[];for(const t of a)n.push(Ct(e,t));return n}function $o(e){const a=N(()=>gu(e,e.items));return r2(a,n=>Ct(e,n))}function r2(e,a){function n(s){return s.filter(i=>i!==null||e.value.some(l=>l.value===null)).map(i=>e.value.find(o=>qn(i,o.value))??a(i))}function t(s){return s.map(i=>{let{value:l}=i;return l})}return{items:e,transformIn:n,transformOut:t}}function c2(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function d2(e,a){const n=na(a,e.itemType,"item"),t=c2(a)?a:na(a,e.itemTitle),s=na(a,e.itemValue,void 0),i=na(a,e.itemChildren),l=e.itemProps===!0?Lt(a,["children"])[1]:na(a,e.itemProps),o={title:t,value:s,...l};return{type:n,title:o.title,value:o.value,props:o,children:n==="item"&&i?ku(e,i):void 0,raw:a}}function ku(e,a){const n=[];for(const t of a)n.push(d2(e,t));return n}function u2(e){return{items:N(()=>ku(e,e.items))}}const H2=I({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Z5({selectStrategy:"single-leaf",openStrategy:"list"}),...qa(),...oe(),...da(),...za(),...ca(),itemType:{type:String,default:"type"},...Cu(),...Ke(),...ve(),...Ie(),...Ka({variant:"text"})},"VList"),Bi=W()({name:"VList",props:H2(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,a){let{slots:n}=a;const{items:t}=u2(e),{themeClasses:s}=Ge(e),{backgroundColorClasses:i,backgroundColorStyles:l}=ea(_(e,"bgColor")),{borderClasses:o}=Oa(e),{densityClasses:r}=Ca(e),{dimensionStyles:c}=Qa(e),{elevationClasses:u}=ma(e),{roundedClasses:H}=Ye(e),{open:p,select:m}=e2(e),h=N(()=>e.lines?`v-list--${e.lines}-line`:void 0),A=_(e,"activeColor"),f=_(e,"baseColor"),M=_(e,"color");du(),Ze({VListGroup:{activeColor:A,baseColor:f,color:M},VListItem:{activeClass:_(e,"activeClass"),activeColor:A,baseColor:f,color:M,density:_(e,"density"),disabled:_(e,"disabled"),lines:_(e,"lines"),nav:_(e,"nav"),variant:_(e,"variant")}});const g=ie(!1),k=ae();function x(S){g.value=!0}function v(S){g.value=!1}function D(S){var b;!g.value&&!(S.relatedTarget&&((b=k.value)!=null&&b.contains(S.relatedTarget)))&&C()}function E(S){if(k.value){if(S.key==="ArrowDown")C("next");else if(S.key==="ArrowUp")C("prev");else if(S.key==="Home")C("first");else if(S.key==="End")C("last");else return;S.preventDefault()}}function C(S){if(k.value)return ti(k.value,S)}return $(()=>d(e.tag,{ref:k,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,i.value,o.value,r.value,u.value,h.value,H.value,e.class],style:[l.value,c.value,e.style],tabindex:e.disabled||g.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:x,onFocusout:v,onFocus:D,onKeydown:E},{default:()=>[d(Mu,{items:t.value},n)]})),{open:p,select:m,focus:C}}}),p2=an("v-list-img"),m2=I({start:Boolean,end:Boolean,...oe(),...ve()},"VListItemAction"),h2=W()({name:"VListItemAction",props:m2(),setup(e,a){let{slots:n}=a;return $(()=>d(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},n)),{}}}),A2=I({start:Boolean,end:Boolean,...oe(),...ve()},"VListItemMedia"),N2=W()({name:"VListItemMedia",props:A2(),setup(e,a){let{slots:n}=a;return $(()=>d(e.tag,{class:["v-list-item-media",{"v-list-item-media--start":e.start,"v-list-item-media--end":e.end},e.class],style:e.style},n)),{}}});function al(e,a){return{x:e.x+a.x,y:e.y+a.y}}function f2(e,a){return{x:e.x-a.x,y:e.y-a.y}}function B1(e,a){if(e.side==="top"||e.side==="bottom"){const{side:n,align:t}=e,s=t==="left"?0:t==="center"?a.width/2:t==="right"?a.width:t,i=n==="top"?0:n==="bottom"?a.height:n;return al({x:s,y:i},a)}else if(e.side==="left"||e.side==="right"){const{side:n,align:t}=e,s=n==="left"?0:n==="right"?a.width:n,i=t==="top"?0:t==="center"?a.height/2:t==="bottom"?a.height:t;return al({x:s,y:i},a)}return al({x:a.width/2,y:a.height/2},a)}const Su={static:g2,connected:S2},M2=I({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Su},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function C2(e,a){const n=ae({}),t=ae();je&&(fn(()=>!!(a.isActive.value&&e.locationStrategy),i=>{var l,o;ce(()=>e.locationStrategy,i),Da(()=>{t.value=void 0}),typeof e.locationStrategy=="function"?t.value=(l=e.locationStrategy(a,e,n))==null?void 0:l.updateLocation:t.value=(o=Su[e.locationStrategy](a,e,n))==null?void 0:o.updateLocation}),window.addEventListener("resize",s,{passive:!0}),Da(()=>{window.removeEventListener("resize",s),t.value=void 0}));function s(i){var l;(l=t.value)==null||l.call(t,i)}return{contentStyles:n,updateLocation:t}}function g2(){}function k2(e,a){a?e.style.removeProperty("left"):e.style.removeProperty("right");const n=Po(e);return a?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function S2(e,a,n){Om(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:s,preferredOrigin:i}=yo(()=>{const h=kl(a.location,e.isRtl.value),A=a.origin==="overlap"?h:a.origin==="auto"?Yi(h):kl(a.origin,e.isRtl.value);return h.side===A.side&&h.align===Ji(A).align?{preferredAnchor:s1(h),preferredOrigin:s1(A)}:{preferredAnchor:h,preferredOrigin:A}}),[l,o,r,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>N(()=>{const A=parseFloat(a[h]);return isNaN(A)?1/0:A})),u=N(()=>{if(Array.isArray(a.offset))return a.offset;if(typeof a.offset=="string"){const h=a.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof a.offset=="number"?[a.offset,0]:[0,0]});let H=!1;const p=new ResizeObserver(()=>{H&&m()});ce([e.activatorEl,e.contentEl],(h,A)=>{let[f,M]=h,[g,k]=A;g&&p.unobserve(g),f&&p.observe(f),k&&p.unobserve(k),M&&p.observe(M)},{immediate:!0}),Da(()=>{p.disconnect()});function m(){if(H=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>H=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const h=e.activatorEl.value.getBoundingClientRect(),A=k2(e.contentEl.value,e.isRtl.value),f=ii(e.contentEl.value),M=12;f.length||(f.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(A.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),A.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const g=f.reduce((w,P)=>{const B=P.getBoundingClientRect(),F=new xt({x:P===document.documentElement?0:B.x,y:P===document.documentElement?0:B.y,width:P.clientWidth,height:P.clientHeight});return w?new xt({x:Math.max(w.left,F.left),y:Math.max(w.top,F.top),width:Math.min(w.right,F.right)-Math.max(w.left,F.left),height:Math.min(w.bottom,F.bottom)-Math.max(w.top,F.top)}):F},void 0);g.x+=M,g.y+=M,g.width-=M*2,g.height-=M*2;let k={anchor:s.value,origin:i.value};function x(w){const P=new xt(A),B=B1(w.anchor,h),F=B1(w.origin,P);let{x:ne,y:q}=f2(B,F);switch(w.anchor.side){case"top":q-=u.value[0];break;case"bottom":q+=u.value[0];break;case"left":ne-=u.value[0];break;case"right":ne+=u.value[0];break}switch(w.anchor.align){case"top":q-=u.value[1];break;case"bottom":q+=u.value[1];break;case"left":ne-=u.value[1];break;case"right":ne+=u.value[1];break}return P.x+=ne,P.y+=q,P.width=Math.min(P.width,r.value),P.height=Math.min(P.height,c.value),{overflows:l1(P,g),x:ne,y:q}}let v=0,D=0;const E={x:0,y:0},C={x:!1,y:!1};let S=-1;for(;!(S++>10);){const{x:w,y:P,overflows:B}=x(k);v+=w,D+=P,A.x+=w,A.y+=P;{const F=i1(k.anchor),ne=B.x.before||B.x.after,q=B.y.before||B.y.after;let U=!1;if(["x","y"].forEach(L=>{if(L==="x"&&ne&&!C.x||L==="y"&&q&&!C.y){const j={anchor:{...k.anchor},origin:{...k.origin}},Y=L==="x"?F==="y"?Ji:Yi:F==="y"?Yi:Ji;j.anchor=Y(j.anchor),j.origin=Y(j.origin);const{overflows:O}=x(j);(O[L].before<=B[L].before&&O[L].after<=B[L].after||O[L].before+O[L].after<(B[L].before+B[L].after)/2)&&(k=j,U=C[L]=!0)}}),U)continue}B.x.before&&(v+=B.x.before,A.x+=B.x.before),B.x.after&&(v-=B.x.after,A.x-=B.x.after),B.y.before&&(D+=B.y.before,A.y+=B.y.before),B.y.after&&(D-=B.y.after,A.y-=B.y.after);{const F=l1(A,g);E.x=g.width-F.x.before-F.x.after,E.y=g.height-F.y.before-F.y.after,v+=F.x.before,A.x+=F.x.before,D+=F.y.before,A.y+=F.y.before}break}const b=i1(k.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${k.anchor.side} ${k.anchor.align}`,transformOrigin:`${k.origin.side} ${k.origin.align}`,top:le(nl(D)),left:e.isRtl.value?void 0:le(nl(v)),right:e.isRtl.value?le(nl(-v)):void 0,minWidth:le(b==="y"?Math.min(l.value,h.width):l.value),maxWidth:le(I1(oa(E.x,l.value===1/0?0:l.value,r.value))),maxHeight:le(I1(oa(E.y,o.value===1/0?0:o.value,c.value)))}),{available:E,contentBox:A}}return ce(()=>[s.value,i.value,a.offset,a.minWidth,a.minHeight,a.maxWidth,a.maxHeight],()=>m()),_e(()=>{const h=m();if(!h)return;const{available:A,contentBox:f}=h;f.height>A.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function nl(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function I1(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ql=!0;const ci=[];function T2(e){!ql||ci.length?(ci.push(e),Ul()):(ql=!1,e(),Ul())}let L1=-1;function Ul(){cancelAnimationFrame(L1),L1=requestAnimationFrame(()=>{const e=ci.shift();e&&e(),ci.length?Ul():ql=!0})}const js={none:null,close:y2,block:D2,reposition:b2},v2=I({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in js}},"VOverlay-scroll-strategies");function x2(e,a){if(!je)return;let n;ka(async()=>{n==null||n.stop(),a.isActive.value&&e.scrollStrategy&&(n=so(),await _e(),n.active&&n.run(()=>{var t;typeof e.scrollStrategy=="function"?e.scrollStrategy(a,e,n):(t=js[e.scrollStrategy])==null||t.call(js,a,e,n)}))}),Da(()=>{n==null||n.stop()})}function y2(e){function a(n){e.isActive.value=!1}Tu(e.activatorEl.value??e.contentEl.value,a)}function D2(e,a){var l;const n=(l=e.root.value)==null?void 0:l.offsetParent,t=[...new Set([...ii(e.activatorEl.value,a.contained?n:void 0),...ii(e.contentEl.value,a.contained?n:void 0)])].filter(o=>!o.classList.contains("v-overlay-scroll-blocked")),s=window.innerWidth-document.documentElement.offsetWidth,i=(o=>Bo(o)&&o)(n||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),t.forEach((o,r)=>{o.style.setProperty("--v-body-scroll-x",le(-o.scrollLeft)),o.style.setProperty("--v-body-scroll-y",le(-o.scrollTop)),o!==document.documentElement&&o.style.setProperty("--v-scrollbar-offset",le(s)),o.classList.add("v-overlay-scroll-blocked")}),Da(()=>{t.forEach((o,r)=>{const c=parseFloat(o.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(o.style.getPropertyValue("--v-body-scroll-y"));o.style.removeProperty("--v-body-scroll-x"),o.style.removeProperty("--v-body-scroll-y"),o.style.removeProperty("--v-scrollbar-offset"),o.classList.remove("v-overlay-scroll-blocked"),o.scrollLeft=-c,o.scrollTop=-u}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function b2(e,a,n){let t=!1,s=-1,i=-1;function l(o){T2(()=>{var u,H;const r=performance.now();(H=(u=e.updateLocation).value)==null||H.call(u,o),t=(performance.now()-r)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?o=>o():requestIdleCallback)(()=>{n.run(()=>{Tu(e.activatorEl.value??e.contentEl.value,o=>{t?(cancelAnimationFrame(s),s=requestAnimationFrame(()=>{s=requestAnimationFrame(()=>{l(o)})})):l(o)})})}),Da(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(s)})}function Tu(e,a){const n=[document,...ii(e)];n.forEach(t=>{t.addEventListener("scroll",a,{passive:!0})}),Da(()=>{n.forEach(t=>{t.removeEventListener("scroll",a)})})}const Fl=Symbol.for("vuetify:v-menu"),vu=I({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function xu(e,a){const n={},t=s=>()=>{if(!je)return Promise.resolve(!0);const i=s==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(l=>{const o=parseInt(e[s]??0,10);n[s]=window.setTimeout(()=>{a==null||a(i),l(i)},o)})};return{runCloseDelay:t("closeDelay"),runOpenDelay:t("openDelay")}}const P2=I({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...vu()},"VOverlay-activator");function E2(e,a){let{isActive:n,isTop:t}=a;const s=ae();let i=!1,l=!1,o=!0;const r=N(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),c=N(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!r.value),{runOpenDelay:u,runCloseDelay:H}=xu(e,k=>{k===(e.openOnHover&&i||r.value&&l)&&!(e.openOnHover&&n.value&&!t.value)&&(n.value!==k&&(o=!0),n.value=k)}),p={onClick:k=>{k.stopPropagation(),s.value=k.currentTarget||k.target,n.value=!n.value},onMouseenter:k=>{var x;(x=k.sourceCapabilities)!=null&&x.firesTouchEvents||(i=!0,s.value=k.currentTarget||k.target,u())},onMouseleave:k=>{i=!1,H()},onFocus:k=>{Pt(k.target,":focus-visible")!==!1&&(l=!0,k.stopPropagation(),s.value=k.currentTarget||k.target,u())},onBlur:k=>{l=!1,k.stopPropagation(),H()}},m=N(()=>{const k={};return c.value&&(k.onClick=p.onClick),e.openOnHover&&(k.onMouseenter=p.onMouseenter,k.onMouseleave=p.onMouseleave),r.value&&(k.onFocus=p.onFocus,k.onBlur=p.onBlur),k}),h=N(()=>{const k={};if(e.openOnHover&&(k.onMouseenter=()=>{i=!0,u()},k.onMouseleave=()=>{i=!1,H()}),r.value&&(k.onFocusin=()=>{l=!0,u()},k.onFocusout=()=>{l=!1,H()}),e.closeOnContentClick){const x=Re(Fl,null);k.onClick=()=>{n.value=!1,x==null||x.closeParents()}}return k}),A=N(()=>{const k={};return e.openOnHover&&(k.onMouseenter=()=>{o&&(i=!0,o=!1,u())},k.onMouseleave=()=>{i=!1,H()}),k});ce(t,k=>{k&&(e.openOnHover&&!i&&(!r.value||!l)||r.value&&!l&&(!e.openOnHover||!i))&&(n.value=!1)});const f=ae();ka(()=>{f.value&&_e(()=>{s.value=Cl(f.value)})});const M=ra("useActivator");let g;return ce(()=>!!e.activator,k=>{k&&je?(g=so(),g.run(()=>{w2(e,M,{activatorEl:s,activatorEvents:m})})):g&&g.stop()},{flush:"post",immediate:!0}),Da(()=>{g==null||g.stop()}),{activatorEl:s,activatorRef:f,activatorEvents:m,contentEvents:h,scrimEvents:A}}function w2(e,a,n){let{activatorEl:t,activatorEvents:s}=n;ce(()=>e.activator,(r,c)=>{if(c&&r!==c){const u=o(c);u&&l(u)}r&&_e(()=>i())},{immediate:!0}),ce(()=>e.activatorProps,()=>{i()}),Da(()=>{l()});function i(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&xm(r,te(s.value,c))}function l(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&ym(r,te(s.value,c))}function o(){var u,H;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,c;if(r)if(r==="parent"){let p=(H=(u=a==null?void 0:a.proxy)==null?void 0:u.$el)==null?void 0:H.parentNode;for(;p.hasAttribute("data-no-activator");)p=p.parentNode;c=p}else typeof r=="string"?c=document.querySelector(r):"$el"in r?c=r.$el:c=r;return t.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:null,t.value}}function yu(){if(!je)return ie(!1);const{ssr:e}=ot();if(e){const a=ie(!1);return fa(()=>{a.value=!0}),a}else return ie(!0)}const Ii=I({eager:Boolean},"lazy");function Yo(e,a){const n=ie(!1),t=N(()=>n.value||e.eager||a.value);ce(a,()=>n.value=!0);function s(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:t,onAfterLeave:s}}function Ot(){const a=ra("useScopeId").vnode.scopeId;return{scopeId:a?{[a]:""}:void 0}}const G1=Symbol.for("vuetify:stack"),Yt=xa([]);function R2(e,a,n){const t=ra("useStack"),s=!n,i=Re(G1,void 0),l=xa({activeChildren:new Set});Oe(G1,l);const o=ie(+a.value);fn(e,()=>{var H;const u=(H=Yt.at(-1))==null?void 0:H[1];o.value=u?u+10:+a.value,s&&Yt.push([t.uid,o.value]),i==null||i.activeChildren.add(t.uid),Da(()=>{if(s){const p=De(Yt).findIndex(m=>m[0]===t.uid);Yt.splice(p,1)}i==null||i.activeChildren.delete(t.uid)})});const r=ie(!0);s&&ka(()=>{var H;const u=((H=Yt.at(-1))==null?void 0:H[0])===t.uid;setTimeout(()=>r.value=u)});const c=N(()=>!l.activeChildren.size);return{globalTop:Ts(r),localTop:c,stackStyles:N(()=>({zIndex:o.value}))}}function B2(e){return{teleportTarget:N(()=>{const n=e.value;if(n===!0||!je)return;const t=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(t==null)return;let s=t.querySelector(":scope > .v-overlay-container");return s||(s=document.createElement("div"),s.className="v-overlay-container",t.appendChild(s)),s})}}function I2(){return!0}function Du(e,a,n){if(!e||bu(e,n)===!1)return!1;const t=kd(a);if(typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&t.host===e.target)return!1;const s=(typeof n.value=="object"&&n.value.include||(()=>[]))();return s.push(a),!s.some(i=>i==null?void 0:i.contains(e.target))}function bu(e,a){return(typeof a.value=="object"&&a.value.closeConditional||I2)(e)}function L2(e,a,n){const t=typeof n.value=="function"?n.value:n.value.handler;a._clickOutside.lastMousedownWasOutside&&Du(e,a,n)&&setTimeout(()=>{bu(e,n)&&t&&t(e)},0)}function q1(e,a){const n=kd(e);a(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&a(n)}const Pu={mounted(e,a){const n=s=>L2(s,e,a),t=s=>{e._clickOutside.lastMousedownWasOutside=Du(s,e,a)};q1(e,s=>{s.addEventListener("click",n,!0),s.addEventListener("mousedown",t,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[a.instance.$.uid]={onClick:n,onMousedown:t}},unmounted(e,a){e._clickOutside&&(q1(e,n=>{var i;if(!n||!((i=e._clickOutside)!=null&&i[a.instance.$.uid]))return;const{onClick:t,onMousedown:s}=e._clickOutside[a.instance.$.uid];n.removeEventListener("click",t,!0),n.removeEventListener("mousedown",s,!0)}),delete e._clickOutside[a.instance.$.uid])}};function G2(e){const{modelValue:a,color:n,...t}=e;return d(cn,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&d("div",te({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},t),null)]})}const bs=I({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...P2(),...oe(),...za(),...Ii(),...M2(),...v2(),...Ie(),...xn()},"VOverlay"),kn=W()({name:"VOverlay",directives:{ClickOutside:Pu},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...bs()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,a){let{slots:n,attrs:t,emit:s}=a;const i=fe(e,"modelValue"),l=N({get:()=>i.value,set:j=>{j&&e.disabled||(i.value=j)}}),{teleportTarget:o}=B2(N(()=>e.attach||e.contained)),{themeClasses:r}=Ge(e),{rtlClasses:c,isRtl:u}=Ha(),{hasContent:H,onAfterLeave:p}=Yo(e,l),m=ea(N(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:h,localTop:A,stackStyles:f}=R2(l,_(e,"zIndex"),e._disableGlobalStack),{activatorEl:M,activatorRef:g,activatorEvents:k,contentEvents:x,scrimEvents:v}=E2(e,{isActive:l,isTop:A}),{dimensionStyles:D}=Qa(e),E=yu(),{scopeId:C}=Ot();ce(()=>e.disabled,j=>{j&&(l.value=!1)});const S=ae(),b=ae(),{contentStyles:w,updateLocation:P}=C2(e,{isRtl:u,contentEl:b,activatorEl:M,isActive:l});x2(e,{root:S,contentEl:b,activatorEl:M,isActive:l,updateLocation:P});function B(j){s("click:outside",j),e.persistent?L():l.value=!1}function F(){return l.value&&h.value}je&&ce(l,j=>{j?window.addEventListener("keydown",ne):window.removeEventListener("keydown",ne)},{immediate:!0});function ne(j){var Y,O;j.key==="Escape"&&h.value&&(e.persistent?L():(l.value=!1,(Y=b.value)!=null&&Y.contains(document.activeElement)&&((O=M.value)==null||O.focus())))}const q=Qd();fn(()=>e.closeOnBack,()=>{S5(q,j=>{h.value&&l.value?(j(!1),e.persistent?L():l.value=!1):j()})});const U=ae();ce(()=>l.value&&(e.absolute||e.contained)&&o.value==null,j=>{if(j){const Y=Ro(S.value);Y&&Y!==document.scrollingElement&&(U.value=Y.scrollTop)}});function L(){e.noClickAnimation||b.value&&et(b.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:As})}return $(()=>{var j;return d(me,null,[(j=n.activator)==null?void 0:j.call(n,{isActive:l.value,props:te({ref:g},k.value,e.activatorProps)}),E.value&&H.value&&d(gp,{disabled:!o.value,to:o.value},{default:()=>[d("div",te({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},r.value,c.value,e.class],style:[f.value,{top:le(U.value)},e.style],ref:S},C,t),[d(G2,te({color:m,modelValue:l.value&&!!e.scrim},v.value),null),d(Ja,{appear:!0,persisted:!0,transition:e.transition,target:M.value,onAfterLeave:()=>{p(),s("afterLeave")}},{default:()=>{var Y;return[$e(d("div",te({ref:b,class:["v-overlay__content",e.contentClass],style:[D.value,w.value]},x.value,e.contentProps),[(Y=n.default)==null?void 0:Y.call(n,{isActive:l})]),[[un,l.value],[Ia("click-outside"),{handler:B,closeConditional:F,include:()=>[M.value]}]])]}})])]})])}),{activatorEl:M,animateClick:L,contentEl:b,globalTop:h,localTop:A,updateLocation:P}}}),tl=Symbol("Forwarded refs");function sl(e,a){let n=e;for(;n;){const t=Reflect.getOwnPropertyDescriptor(n,a);if(t)return t;n=Object.getPrototypeOf(n)}}function nn(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),t=1;t<a;t++)n[t-1]=arguments[t];return e[tl]=n,new Proxy(e,{get(s,i){if(Reflect.has(s,i))return Reflect.get(s,i);if(!(typeof i=="symbol"||i.startsWith("__"))){for(const l of n)if(l.value&&Reflect.has(l.value,i)){const o=Reflect.get(l.value,i);return typeof o=="function"?o.bind(l.value):o}}},has(s,i){if(Reflect.has(s,i))return!0;if(typeof i=="symbol"||i.startsWith("__"))return!1;for(const l of n)if(l.value&&Reflect.has(l.value,i))return!0;return!1},set(s,i,l){if(Reflect.has(s,i))return Reflect.set(s,i,l);if(typeof i=="symbol"||i.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,i))return Reflect.set(o.value,i,l);return!1},getOwnPropertyDescriptor(s,i){var o;const l=Reflect.getOwnPropertyDescriptor(s,i);if(l)return l;if(!(typeof i=="symbol"||i.startsWith("__"))){for(const r of n){if(!r.value)continue;const c=sl(r.value,i)??("_"in r.value?sl((o=r.value._)==null?void 0:o.setupState,i):void 0);if(c)return c}for(const r of n){const c=r.value&&r.value[tl];if(!c)continue;const u=c.slice();for(;u.length;){const H=u.shift(),p=sl(H.value,i);if(p)return p;const m=H.value&&H.value[tl];m&&u.push(...m)}}}}})}const q2=I({id:String,...Hn(bs({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:xi}}),["absolute"])},"VMenu"),Li=W()({name:"VMenu",props:q2(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"modelValue"),{scopeId:s}=Ot(),i=Ma(),l=N(()=>e.id||`v-menu-${i}`),o=ae(),r=Re(Fl,null),c=ie(0);Oe(Fl,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(t.value=!1,r==null||r.closeParents())},40)}});async function u(A){var g,k,x;const f=A.relatedTarget,M=A.target;await _e(),t.value&&f!==M&&((g=o.value)!=null&&g.contentEl)&&((k=o.value)!=null&&k.globalTop)&&![document,o.value.contentEl].includes(M)&&!o.value.contentEl.contains(M)&&((x=hs(o.value.contentEl)[0])==null||x.focus())}ce(t,A=>{A?(r==null||r.register(),document.addEventListener("focusin",u,{once:!0})):(r==null||r.unregister(),document.removeEventListener("focusin",u))});function H(){r==null||r.closeParents()}function p(A){var f,M,g;e.disabled||A.key==="Tab"&&(dd(hs((f=o.value)==null?void 0:f.contentEl,!1),A.shiftKey?"prev":"next",x=>x.tabIndex>=0)||(t.value=!1,(g=(M=o.value)==null?void 0:M.activatorEl)==null||g.focus()))}function m(A){var M;if(e.disabled)return;const f=(M=o.value)==null?void 0:M.contentEl;f&&t.value?A.key==="ArrowDown"?(A.preventDefault(),ti(f,"next")):A.key==="ArrowUp"&&(A.preventDefault(),ti(f,"prev")):["ArrowDown","ArrowUp"].includes(A.key)&&(t.value=!0,A.preventDefault(),setTimeout(()=>setTimeout(()=>m(A))))}const h=N(()=>te({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":l.value,onKeydown:m},e.activatorProps));return $(()=>{const[A]=kn.filterProps(e);return d(kn,te({ref:o,class:["v-menu",e.class],style:e.style},A,{modelValue:t.value,"onUpdate:modelValue":f=>t.value=f,absolute:!0,activatorProps:h.value,"onClick:outside":H,onKeydown:p},s),{activator:n.activator,default:function(){for(var f=arguments.length,M=new Array(f),g=0;g<f;g++)M[g]=arguments[g];return d(Ue,{root:"VMenu"},{default:()=>{var k;return[(k=n.default)==null?void 0:k.call(n,...M)]}})}})}),nn({id:l,ΨopenChildren:c},o)}});const U2=I({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...oe(),...xn({transition:{component:Fo}})},"VCounter"),Gi=W()({name:"VCounter",functional:!0,props:U2(),setup(e,a){let{slots:n}=a;const t=N(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return $(()=>d(Ja,{transition:e.transition},{default:()=>[$e(d("div",{class:["v-counter",e.class],style:e.style},[n.default?n.default({counter:t.value,max:e.max,value:e.value}):t.value]),[[un,e.active]])]})),{}}});const F2=I({floating:Boolean,...oe()},"VFieldLabel"),es=W()({name:"VFieldLabel",props:F2(),setup(e,a){let{slots:n}=a;return $(()=>d(Qt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}}),V2=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],qi=I({appendInnerIcon:Ce,bgColor:String,clearable:Boolean,clearIcon:{type:Ce,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Ce,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>V2.includes(e)},"onClick:clear":rn(),"onClick:appendInner":rn(),"onClick:prependInner":rn(),...oe(),...bi(),...Ke(),...Ie()},"VField"),Ps=W()({name:"VField",inheritAttrs:!1,props:{id:String,...wi(),...qi()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:n,emit:t,slots:s}=a;const{themeClasses:i}=Ge(e),{loaderClasses:l}=xs(e),{focusClasses:o,isFocused:r,focus:c,blur:u}=_n(e),{InputIcon:H}=su(e),{roundedClasses:p}=Ye(e),{rtlClasses:m}=Ha(),h=N(()=>e.dirty||e.active),A=N(()=>!e.singleLine&&!!(e.label||s.label)),f=Ma(),M=N(()=>e.id||`input-${f}`),g=N(()=>`${M.value}-messages`),k=ae(),x=ae(),v=ae(),D=N(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:E,backgroundColorStyles:C}=ea(_(e,"bgColor")),{textColorClasses:S,textColorStyles:b}=Na(N(()=>e.error||e.disabled?void 0:h.value&&r.value?e.color:e.baseColor));ce(h,B=>{if(A.value){const F=k.value.$el,ne=x.value.$el;requestAnimationFrame(()=>{const q=Po(F),U=ne.getBoundingClientRect(),L=U.x-q.x,j=U.y-q.y-(q.height/2-U.height/2),Y=U.width/.75,O=Math.abs(Y-q.width)>1?{maxWidth:le(Y)}:void 0,de=getComputedStyle(F),Ne=getComputedStyle(ne),Be=parseFloat(de.transitionDuration)*1e3||150,ke=parseFloat(Ne.getPropertyValue("--v-field-label-scale")),z=Ne.getPropertyValue("color");F.style.visibility="visible",ne.style.visibility="hidden",et(F,{transform:`translate(${L}px, ${j}px) scale(${ke})`,color:z,...O},{duration:Be,easing:As,direction:B?"normal":"reverse"}).finished.then(()=>{F.style.removeProperty("visibility"),ne.style.removeProperty("visibility")})})}},{flush:"post"});const w=N(()=>({isActive:h,isFocused:r,controlRef:v,blur:u,focus:c}));function P(B){B.target!==document.activeElement&&B.preventDefault()}return $(()=>{var L,j,Y;const B=e.variant==="outlined",F=s["prepend-inner"]||e.prependInnerIcon,ne=!!(e.clearable||s.clear),q=!!(s["append-inner"]||e.appendInnerIcon||ne),U=s.label?s.label({...w.value,label:e.label,props:{for:M.value}}):e.label;return d("div",te({class:["v-field",{"v-field--active":h.value,"v-field--appended":q,"v-field--center-affix":e.centerAffix??!D.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":F,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!U,[`v-field--variant-${e.variant}`]:!0},i.value,E.value,o.value,l.value,p.value,m.value,e.class],style:[C.value,e.style],onClick:P},n),[d("div",{class:"v-field__overlay"},null),d(Pi,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:s.loader}),F&&d("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&d(H,{key:"prepend-icon",name:"prependInner"},null),(L=s["prepend-inner"])==null?void 0:L.call(s,w.value)]),d("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&A.value&&d(es,{key:"floating-label",ref:x,class:[S.value],floating:!0,for:M.value,style:b.value},{default:()=>[U]}),d(es,{ref:k,for:M.value},{default:()=>[U]}),(j=s.default)==null?void 0:j.call(s,{...w.value,props:{id:M.value,class:"v-field__input","aria-describedby":g.value},focus:c,blur:u})]),ne&&d(Vo,{key:"clear"},{default:()=>[$e(d("div",{class:"v-field__clearable",onMousedown:O=>{O.preventDefault(),O.stopPropagation()}},[s.clear?s.clear():d(H,{name:"clear"},null)]),[[un,e.dirty]])]}),q&&d("div",{key:"append",class:"v-field__append-inner"},[(Y=s["append-inner"])==null?void 0:Y.call(s,w.value),e.appendInnerIcon&&d(H,{key:"append-icon",name:"appendInner"},null)]),d("div",{class:["v-field__outline",S.value],style:b.value},[B&&d(me,null,[d("div",{class:"v-field__outline__start"},null),A.value&&d("div",{class:"v-field__outline__notch"},[d(es,{ref:x,floating:!0,for:M.value},{default:()=>[U]})]),d("div",{class:"v-field__outline__end"},null)]),D.value&&A.value&&d(es,{ref:x,floating:!0,for:M.value},{default:()=>[U]})])])}),{controlRef:v}}});function Jo(e){const a=Object.keys(Ps.props).filter(n=>!Do(n)&&n!=="class"&&n!=="style");return Lt(e,a)}const _2=["color","file","time","date","datetime-local","week","month"],Ui=I({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Dn(),...qi()},"VTextField"),ha=W()({name:"VTextField",directives:{Intersect:Di},inheritAttrs:!1,props:Ui(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:n,emit:t,slots:s}=a;const i=fe(e,"modelValue"),{isFocused:l,focus:o,blur:r}=_n(e),c=N(()=>typeof e.counterValue=="function"?e.counterValue(i.value):(i.value??"").toString().length),u=N(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),H=N(()=>["plain","underlined"].includes(e.variant));function p(D,E){var C,S;!e.autofocus||!D||(S=(C=E[0].target)==null?void 0:C.focus)==null||S.call(C)}const m=ae(),h=ae(),A=ae(),f=N(()=>_2.includes(e.type)||e.persistentPlaceholder||l.value||e.active);function M(){var D;A.value!==document.activeElement&&((D=A.value)==null||D.focus()),l.value||o()}function g(D){t("mousedown:control",D),D.target!==A.value&&(M(),D.preventDefault())}function k(D){M(),t("click:control",D)}function x(D){D.stopPropagation(),M(),_e(()=>{i.value=null,bo(e["onClick:clear"],D)})}function v(D){var C;const E=D.target;if(i.value=E.value,(C=e.modelModifiers)!=null&&C.trim&&["text","search","password","tel","url"].includes(e.type)){const S=[E.selectionStart,E.selectionEnd];_e(()=>{E.selectionStart=S[0],E.selectionEnd=S[1]})}}return $(()=>{const D=!!(s.counter||e.counter||e.counterValue),E=!!(D||s.details),[C,S]=lt(n),[{modelValue:b,...w}]=pa.filterProps(e),[P]=Jo(e);return d(pa,te({ref:m,modelValue:i.value,"onUpdate:modelValue":B=>i.value=B,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},C,w,{centerAffix:!H.value,focused:l.value}),{...s,default:B=>{let{id:F,isDisabled:ne,isDirty:q,isReadonly:U,isValid:L}=B;return d(Ps,te({ref:h,onMousedown:g,onClick:k,"onClick:clear":x,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},P,{id:F.value,active:f.value||q.value,dirty:q.value||e.dirty,disabled:ne.value,focused:l.value,error:L.value===!1}),{...s,default:j=>{let{props:{class:Y,...O}}=j;const de=$e(d("input",te({ref:A,value:i.value,onInput:v,autofocus:e.autofocus,readonly:U.value,disabled:ne.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:M,onBlur:r},O,S),null),[[Ia("intersect"),{handler:p},null,{once:!0}]]);return d(me,null,[e.prefix&&d("span",{class:"v-text-field__prefix"},[d("span",{class:"v-text-field__prefix__text"},[e.prefix])]),s.default?d("div",{class:Y,"data-no-activator":""},[s.default(),de]):Nn(de,{class:Y}),e.suffix&&d("span",{class:"v-text-field__suffix"},[d("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:E?B=>{var F;return d(me,null,[(F=s.details)==null?void 0:F.call(s,B),D&&d(me,null,[d("span",null,null),d(Gi,{active:e.persistentCounter||l.value,value:c.value,max:u.value},s.counter)])])}:void 0})}),nn({},m,h,A)}});const W2=I({renderless:Boolean,...oe()},"VVirtualScrollItem"),z2=W()({name:"VVirtualScrollItem",inheritAttrs:!1,props:W2(),emits:{"update:height":e=>!0},setup(e,a){let{attrs:n,emit:t,slots:s}=a;const{resizeRef:i,contentRect:l}=dn(void 0,"border");ce(()=>{var o;return(o=l.value)==null?void 0:o.height},o=>{o!=null&&t("update:height",o)}),$(()=>{var o,r;return e.renderless?d(me,null,[(o=s.default)==null?void 0:o.call(s,{itemRef:i})]):d("div",te({ref:i,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(r=s.default)==null?void 0:r.call(s)])})}}),U1=-1,F1=1,Q2=I({itemHeight:{type:[Number,String],default:48}},"virtual");function O2(e,a,n){const t=ie(0),s=ie(e.itemHeight),i=N({get:()=>parseInt(s.value??0,10),set(E){s.value=E}}),l=ae(),{resizeRef:o,contentRect:r}=dn();ka(()=>{o.value=l.value});const c=ot(),u=new Map;let H=Array.from({length:a.value.length});const p=N(()=>{const E=(!r.value||l.value===document.documentElement?c.height.value:r.value.height)-((n==null?void 0:n.value)??0);return Math.ceil(E/i.value*1.7+1)});function m(E,C){i.value=Math.max(i.value,C),H[E]=C,u.set(a.value[E],C)}function h(E){return H.slice(0,E).reduce((C,S)=>C+(S||i.value),0)}function A(E){const C=a.value.length;let S=0,b=0;for(;b<E&&S<C;)b+=H[S++]||i.value;return S-1}let f=0;function M(){if(!l.value||!r.value)return;const E=r.value.height-56,C=l.value.scrollTop,S=C<f?U1:F1,b=A(C+E/2),w=Math.round(p.value/3),P=b-w,B=t.value+w*2-1;S===U1&&b<=B?t.value=oa(P,0,a.value.length):S===F1&&b>=B&&(t.value=oa(P,0,a.value.length-p.value)),f=C}function g(E){if(!l.value)return;const C=h(E);l.value.scrollTop=C}const k=N(()=>Math.min(a.value.length,t.value+p.value)),x=N(()=>a.value.slice(t.value,k.value).map((E,C)=>({raw:E,index:C+t.value}))),v=N(()=>h(t.value)),D=N(()=>h(a.value.length)-h(k.value));return ce(()=>a.value.length,()=>{H=Ya(a.value.length).map(()=>i.value),u.forEach((E,C)=>{const S=a.value.indexOf(C);S===-1?u.delete(C):H[S]=E})}),{containerRef:l,computedItems:x,itemHeight:i,paddingTop:v,paddingBottom:D,scrollToIndex:g,handleScroll:M,handleItemResize:m}}const K2=I({items:{type:Array,default:()=>[]},renderless:Boolean,...Q2(),...oe(),...za()},"VVirtualScroll"),Fi=W()({name:"VVirtualScroll",props:K2(),setup(e,a){let{slots:n}=a;const t=ra("VVirtualScroll"),{dimensionStyles:s}=Qa(e),{containerRef:i,handleScroll:l,handleItemResize:o,scrollToIndex:r,paddingTop:c,paddingBottom:u,computedItems:H}=O2(e,_(e,"items"));return fn(()=>e.renderless,()=>{fa(()=>{var p;i.value=Ro(t.vnode.el,!0),(p=i.value)==null||p.addEventListener("scroll",l)}),Da(()=>{var p;(p=i.value)==null||p.removeEventListener("scroll",l)})}),$(()=>{const p=H.value.map(m=>d(z2,{key:m.index,renderless:e.renderless,"onUpdate:height":h=>o(m.index,h)},{default:h=>{var A;return(A=n.default)==null?void 0:A.call(n,{item:m.raw,index:m.index,...h})}}));return e.renderless?d(me,null,[d("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:le(c.value)}},null),p,d("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:le(u.value)}},null)]):d("div",{ref:i,class:["v-virtual-scroll",e.class],onScroll:l,style:[s.value,e.style]},[d("div",{class:"v-virtual-scroll__container",style:{paddingTop:le(c.value),paddingBottom:le(u.value)}},[p])])}),{scrollToIndex:r}}});function Zo(e,a){const n=ie(!1);let t;function s(o){cancelAnimationFrame(t),n.value=!0,t=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{n.value=!1})})}async function i(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(n.value){const r=ce(n,()=>{r(),o()})}else o()})}async function l(o){var u,H;if(o.key==="Tab"&&((u=a.value)==null||u.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const r=(H=e.value)==null?void 0:H.$el;if(!r)return;(o.key==="Home"||o.key==="End")&&r.scrollTo({top:o.key==="Home"?0:r.scrollHeight,behavior:"smooth"}),await i();const c=r.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const p=r.getBoundingClientRect().top;for(const m of c)if(m.getBoundingClientRect().top>=p){m.focus();break}}else{const p=r.getBoundingClientRect().bottom;for(const m of[...c].reverse())if(m.getBoundingClientRect().bottom<=p){m.focus();break}}}return{onListScroll:s,onListKeydown:l}}const er=I({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Ce,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:qn},itemColor:String,...Cu({itemChildren:!1})},"Select"),X2=I({...er(),...Hn(Ui({modelValue:null,role:"button"}),["validationValue","dirty","appendInnerIcon"]),...xn({transition:{component:xi}})},"VSelect"),gt=W()({name:"VSelect",props:X2(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:n}=a;const{t}=Ta(),s=ae(),i=ae(),l=fe(e,"menu"),o=N({get:()=>l.value,set:q=>{var U;l.value&&!q&&((U=i.value)!=null&&U.ΨopenChildren)||(l.value=q)}}),{items:r,transformIn:c,transformOut:u}=$o(e),H=fe(e,"modelValue",[],q=>c(q===null?[null]:ya(q)),q=>{const U=u(q);return e.multiple?U:U[0]??null}),p=Ri(),m=N(()=>H.value.map(q=>r.value.find(U=>{const L=na(U.raw,e.itemValue),j=na(q.raw,e.itemValue);return L===void 0||j===void 0?!1:e.returnObject?e.valueComparator(L,j):e.valueComparator(U.value,q.value)})||q)),h=N(()=>m.value.map(q=>q.props.value)),A=ie(!1),f=N(()=>o.value?e.closeText:e.openText);let M="",g;const k=N(()=>e.hideSelected?r.value.filter(q=>!m.value.some(U=>U===q)):r.value),x=N(()=>e.hideNoData&&!r.value.length||e.readonly||(p==null?void 0:p.isReadonly.value)),v=ae(),{onListScroll:D,onListKeydown:E}=Zo(v,s);function C(q){e.openOnClear&&(o.value=!0)}function S(){x.value||(o.value=!o.value)}function b(q){var O,de;if(!q.key||e.readonly||p!=null&&p.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(q.key)&&q.preventDefault(),["Enter","ArrowDown"," "].includes(q.key)&&(o.value=!0),["Escape","Tab"].includes(q.key)&&(o.value=!1),q.key==="Home"?(O=v.value)==null||O.focus("first"):q.key==="End"&&((de=v.value)==null||de.focus("last"));const U=1e3;function L(Ne){const Be=Ne.key.length===1,ke=!Ne.ctrlKey&&!Ne.metaKey&&!Ne.altKey;return Be&&ke}if(e.multiple||!L(q))return;const j=performance.now();j-g>U&&(M=""),M+=q.key.toLowerCase(),g=j;const Y=r.value.find(Ne=>Ne.title.toLowerCase().startsWith(M));Y!==void 0&&(H.value=[Y])}function w(q){if(e.multiple){const U=h.value.findIndex(L=>e.valueComparator(L,q.value));if(U===-1)H.value=[...H.value,q];else{const L=[...H.value];L.splice(U,1),H.value=L}}else H.value=[q],o.value=!1}function P(q){var U;(U=v.value)!=null&&U.$el.contains(q.relatedTarget)||(o.value=!1)}function B(){var q;A.value&&((q=s.value)==null||q.focus())}function F(q){A.value=!0}function ne(q){if(q==null)H.value=[];else if(Pt(s.value,":autofill")||Pt(s.value,":-webkit-autofill")){const U=r.value.find(L=>L.title===q);U&&w(U)}else s.value&&(s.value.value="")}return $(()=>{const q=!!(e.chips||n.chip),U=!!(!e.hideNoData||k.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),L=H.value.length>0,[j]=ha.filterProps(e),Y=L||!A.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return d(ha,te({ref:s},j,{modelValue:H.value.map(O=>O.props.value).join(", "),"onUpdate:modelValue":ne,focused:A.value,"onUpdate:focused":O=>A.value=O,validationValue:H.externalValue,dirty:L,class:["v-select",{"v-select--active-menu":o.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":H.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:Y,"onClick:clear":C,"onMousedown:control":S,onBlur:P,onKeydown:b,"aria-label":t(f.value),title:t(f.value)}),{...n,default:()=>d(me,null,[d(Li,te({ref:i,modelValue:o.value,"onUpdate:modelValue":O=>o.value=O,activator:"parent",contentClass:"v-select__content",disabled:x.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:B},e.menuProps),{default:()=>[U&&d(Bi,{ref:v,selected:h.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:O=>O.preventDefault(),onKeydown:E,onFocusin:F,onScrollPassive:D,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var O,de,Ne;return[(O=n["prepend-item"])==null?void 0:O.call(n),!k.value.length&&!e.hideNoData&&(((de=n["no-data"])==null?void 0:de.call(n))??d(gn,{title:t(e.noDataText)},null)),d(Fi,{renderless:!0,items:k.value},{default:Be=>{var re;let{item:ke,index:z,itemRef:Se}=Be;const ia=te(ke.props,{ref:Se,key:z,onClick:()=>w(ke)});return((re=n.item)==null?void 0:re.call(n,{item:ke,index:z,props:ia}))??d(gn,ia,{prepend:K=>{let{isSelected:Ae}=K;return d(me,null,[e.multiple&&!e.hideSelected?d(Cn,{key:ke.value,modelValue:Ae,ripple:!1,tabindex:"-1"},null):void 0,ke.props.prependIcon&&d(Fe,{icon:ke.props.prependIcon},null)])}})}}),(Ne=n["append-item"])==null?void 0:Ne.call(n)]}})]}),m.value.map((O,de)=>{var ke;function Ne(z){z.stopPropagation(),z.preventDefault(),w(O)}const Be={"onClick:close":Ne,onMousedown(z){z.preventDefault(),z.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return d("div",{key:O.value,class:"v-select__selection"},[q?n.chip?d(Ue,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:O.title}}},{default:()=>{var z;return[(z=n.chip)==null?void 0:z.call(n,{item:O,index:de,props:Be})]}}):d(xe,te({key:"chip",closable:e.closableChips,size:"small",text:O.title},Be),null):((ke=n.selection)==null?void 0:ke.call(n,{item:O,index:de}))??d("span",{class:"v-select__selection-text"},[O.title,e.multiple&&de<m.value.length-1&&d("span",{class:"v-select__selection-comma"},[we(",")])])])})]),"append-inner":function(){var Be;for(var O=arguments.length,de=new Array(O),Ne=0;Ne<O;Ne++)de[Ne]=arguments[Ne];return d(me,null,[(Be=n["append-inner"])==null?void 0:Be.call(n,...de),e.menuIcon?d(Fe,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),nn({isFocused:A,menu:o,select:w},s)}}),j2=(e,a,n)=>e==null||a==null?-1:e.toString().toLocaleLowerCase().indexOf(a.toString().toLocaleLowerCase()),ar=I({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function $2(e,a,n){var o;const t=[],s=(n==null?void 0:n.default)??j2,i=n!=null&&n.filterKeys?ya(n.filterKeys):!1,l=Object.keys((n==null?void 0:n.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let r=0;r<e.length;r++){const c=e[r],u={},H={};let p=-1;if(a&&!(n!=null&&n.noFilter)){if(typeof c=="object"){const A=i||Object.keys(c);for(const f of A){const M=na(c,f,c),g=(o=n==null?void 0:n.customKeyFilter)==null?void 0:o[f];if(p=g?g(M,a,c):s(M,a,c),p!==-1&&p!==!1)g?u[f]=p:H[f]=p;else if((n==null?void 0:n.filterMode)==="every")continue e}}else p=s(c,a,c),p!==-1&&p!==!1&&(H.title=p);const m=Object.keys(H).length,h=Object.keys(u).length;if(!m&&!h||(n==null?void 0:n.filterMode)==="union"&&h!==l&&!m||(n==null?void 0:n.filterMode)==="intersection"&&(h!==l||!m))continue}t.push({index:r,matches:{...H,...u}})}return t}function nr(e,a,n,t){const s=ae([]),i=ae(new Map),l=N(()=>t!=null&&t.transform?Ra(a).map(t==null?void 0:t.transform):Ra(a));ka(()=>{const r=typeof n=="function"?n():Ra(n),c=typeof r!="string"&&typeof r!="number"?"":String(r),u=$2(l.value,c,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),H=Ra(a),p=[],m=new Map;u.forEach(h=>{let{index:A,matches:f}=h;const M=H[A];p.push(M),m.set(M.value,f)}),s.value=p,i.value=m});function o(r){return i.value.get(r.value)}return{filteredItems:s,filteredMatches:i,getMatches:o}}function Y2(e,a,n){if(a==null)return e;if(Array.isArray(a))throw new Error("Multiple matches is not implemented");return typeof a=="number"&&~a?d(me,null,[d("span",{class:"v-autocomplete__unmask"},[e.substr(0,a)]),d("span",{class:"v-autocomplete__mask"},[e.substr(a,n)]),d("span",{class:"v-autocomplete__unmask"},[e.substr(a+n)])]):e}const J2=I({autoSelectFirst:{type:[Boolean,String]},search:String,...ar({filterKeys:["title"]}),...er(),...Hn(Ui({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...xn({transition:!1})},"VAutocomplete"),Z2=W()({name:"VAutocomplete",props:J2(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:n}=a;const{t}=Ta(),s=ae(),i=ie(!1),l=ie(!0),o=ie(!1),r=ae(),c=fe(e,"menu"),u=N({get:()=>c.value,set:re=>{var K;c.value&&!re&&((K=r.value)!=null&&K.ΨopenChildren)||(c.value=re)}}),H=ie(-1),p=N(()=>{var re;return(re=s.value)==null?void 0:re.color}),m=N(()=>u.value?e.closeText:e.openText),{items:h,transformIn:A,transformOut:f}=$o(e),{textColorClasses:M,textColorStyles:g}=Na(p),k=fe(e,"search",""),x=fe(e,"modelValue",[],re=>A(re===null?[null]:ya(re)),re=>{const K=f(re);return e.multiple?K:K[0]??null}),v=Ri(),{filteredItems:D,getMatches:E}=nr(e,h,()=>l.value?"":k.value),C=N(()=>x.value.map(re=>h.value.find(K=>{const Ae=na(K.raw,e.itemValue),T=na(re.raw,e.itemValue);return Ae===void 0||T===void 0?!1:e.returnObject?e.valueComparator(Ae,T):e.valueComparator(K.value,re.value)})||re)),S=N(()=>e.hideSelected?D.value.filter(re=>!C.value.some(K=>K.value===re.value)):D.value),b=N(()=>C.value.map(re=>re.props.value)),w=N(()=>C.value[H.value]),P=N(()=>{var K;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&k.value===((K=S.value[0])==null?void 0:K.title))&&S.value.length>0&&!l.value&&!o.value}),B=N(()=>e.hideNoData&&!h.value.length||e.readonly||(v==null?void 0:v.isReadonly.value)),F=ae(),{onListScroll:ne,onListKeydown:q}=Zo(F,s);function U(re){e.openOnClear&&(u.value=!0),k.value=""}function L(){B.value||(u.value=!0)}function j(re){B.value||(i.value&&(re.preventDefault(),re.stopPropagation()),u.value=!u.value)}function Y(re){var T,y,R;if(e.readonly||v!=null&&v.isReadonly.value)return;const K=s.value.selectionStart,Ae=b.value.length;if((H.value>-1||["Enter","ArrowDown","ArrowUp"].includes(re.key))&&re.preventDefault(),["Enter","ArrowDown"].includes(re.key)&&(u.value=!0),["Escape"].includes(re.key)&&(u.value=!1),P.value&&["Enter","Tab"].includes(re.key)&&ia(D.value[0]),re.key==="ArrowDown"&&P.value&&((T=F.value)==null||T.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(re.key)){if(H.value<0){re.key==="Backspace"&&!k.value&&(H.value=Ae-1);return}const G=H.value;w.value&&ia(w.value),H.value=G>=Ae-1?Ae-2:G}if(re.key==="ArrowLeft"){if(H.value<0&&K>0)return;const G=H.value>-1?H.value-1:Ae-1;C.value[G]?H.value=G:(H.value=-1,s.value.setSelectionRange((y=k.value)==null?void 0:y.length,(R=k.value)==null?void 0:R.length))}if(re.key==="ArrowRight"){if(H.value<0)return;const G=H.value+1;C.value[G]?H.value=G:(H.value=-1,s.value.setSelectionRange(0,0))}}}function O(re){k.value=re.target.value}function de(re){if(Pt(s.value,":autofill")||Pt(s.value,":-webkit-autofill")){const K=h.value.find(Ae=>Ae.title===re.target.value);K&&ia(K)}}function Ne(){var re;i.value&&(l.value=!0,(re=s.value)==null||re.focus())}function Be(re){i.value=!0,setTimeout(()=>{o.value=!0})}function ke(re){o.value=!1}function z(re){(re==null||re===""&&!e.multiple)&&(x.value=[])}const Se=ie(!1);function ia(re){if(e.multiple){const K=b.value.findIndex(Ae=>e.valueComparator(Ae,re.value));if(K===-1)x.value=[...x.value,re];else{const Ae=[...x.value];Ae.splice(K,1),x.value=Ae}}else x.value=[re],Se.value=!0,k.value=re.title,u.value=!1,l.value=!0,_e(()=>Se.value=!1)}return ce(i,(re,K)=>{var Ae;re!==K&&(re?(Se.value=!0,k.value=e.multiple?"":String(((Ae=C.value.at(-1))==null?void 0:Ae.props.title)??""),l.value=!0,_e(()=>Se.value=!1)):(!e.multiple&&!k.value?x.value=[]:P.value&&!o.value&&!C.value.some(T=>{let{value:y}=T;return y===S.value[0].value})&&ia(S.value[0]),u.value=!1,k.value="",H.value=-1))}),ce(k,re=>{!i.value||Se.value||(re&&(u.value=!0),l.value=!re)}),$(()=>{const re=!!(e.chips||n.chip),K=!!(!e.hideNoData||S.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),Ae=x.value.length>0,[T]=ha.filterProps(e);return d(ha,te({ref:s},T,{modelValue:k.value,"onUpdate:modelValue":z,focused:i.value,"onUpdate:focused":y=>i.value=y,validationValue:x.externalValue,dirty:Ae,onInput:O,onChange:de,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":u.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!n.selection,"v-autocomplete--selecting-index":H.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:Ae?void 0:e.placeholder,"onClick:clear":U,"onMousedown:control":L,onKeydown:Y}),{...n,default:()=>d(me,null,[d(Li,te({ref:r,modelValue:u.value,"onUpdate:modelValue":y=>u.value=y,activator:"parent",contentClass:"v-autocomplete__content",disabled:B.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ne},e.menuProps),{default:()=>[K&&d(Bi,{ref:F,selected:b.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:y=>y.preventDefault(),onKeydown:q,onFocusin:Be,onFocusout:ke,onScrollPassive:ne,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var y,R,G;return[(y=n["prepend-item"])==null?void 0:y.call(n),!S.value.length&&!e.hideNoData&&(((R=n["no-data"])==null?void 0:R.call(n))??d(gn,{title:t(e.noDataText)},null)),d(Fi,{renderless:!0,items:S.value},{default:V=>{var J;let{item:X,index:ee,itemRef:Z}=V;const se=te(X.props,{ref:Z,key:ee,active:P.value&&ee===0?!0:void 0,onClick:()=>ia(X)});return((J=n.item)==null?void 0:J.call(n,{item:X,index:ee,props:se}))??d(gn,se,{prepend:pe=>{let{isSelected:ue}=pe;return d(me,null,[e.multiple&&!e.hideSelected?d(Cn,{key:X.value,modelValue:ue,ripple:!1,tabindex:"-1"},null):void 0,X.props.prependIcon&&d(Fe,{icon:X.props.prependIcon},null)])},title:()=>{var pe,ue;return l.value?X.title:Y2(X.title,(pe=E(X))==null?void 0:pe.title,((ue=k.value)==null?void 0:ue.length)??0)}})}}),(G=n["append-item"])==null?void 0:G.call(n)]}})]}),C.value.map((y,R)=>{var X;function G(ee){ee.stopPropagation(),ee.preventDefault(),ia(y)}const V={"onClick:close":G,onMousedown(ee){ee.preventDefault(),ee.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return d("div",{key:y.value,class:["v-autocomplete__selection",R===H.value&&["v-autocomplete__selection--selected",M.value]],style:R===H.value?g.value:{}},[re?n.chip?d(Ue,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:y.title}}},{default:()=>{var ee;return[(ee=n.chip)==null?void 0:ee.call(n,{item:y,index:R,props:V})]}}):d(xe,te({key:"chip",closable:e.closableChips,size:"small",text:y.title},V),null):((X=n.selection)==null?void 0:X.call(n,{item:y,index:R}))??d("span",{class:"v-autocomplete__selection-text"},[y.title,e.multiple&&R<C.value.length-1&&d("span",{class:"v-autocomplete__selection-comma"},[we(",")])])])})]),"append-inner":function(){var V;for(var y=arguments.length,R=new Array(y),G=0;G<y;G++)R[G]=arguments[G];return d(me,null,[(V=n["append-inner"])==null?void 0:V.call(n,...R),e.menuIcon?d(Fe,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:j,onClick:ud,"aria-label":t(m.value),title:t(m.value)},null):void 0])}})}),nn({isFocused:i,isPristine:l,menu:u,search:k,filteredItems:D,select:ia},s)}});const eA=I({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Ce,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...oe(),...Un({location:"top end"}),...Ke(),...ve(),...Ie(),...xn({transition:"scale-rotate-transition"})},"VBadge"),aA=W()({name:"VBadge",inheritAttrs:!1,props:eA(),setup(e,a){const{backgroundColorClasses:n,backgroundColorStyles:t}=ea(_(e,"color")),{roundedClasses:s}=Ye(e),{t:i}=Ta(),{textColorClasses:l,textColorStyles:o}=Na(_(e,"textColor")),{themeClasses:r}=yd(),{locationStyles:c}=Fn(e,!0,u=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(u)?+(e.offsetY??0):["left","right"].includes(u)?+(e.offsetX??0):0));return $(()=>{const u=Number(e.content),H=!e.max||isNaN(u)?e.content:u<=+e.max?u:`${e.max}+`,[p,m]=Lt(a.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return d(e.tag,te({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},m,{style:e.style}),{default:()=>{var h,A;return[d("div",{class:"v-badge__wrapper"},[(A=(h=a.slots).default)==null?void 0:A.call(h),d(Ja,{transition:e.transition},{default:()=>{var f,M;return[$e(d("span",te({class:["v-badge__badge",r.value,n.value,s.value,l.value],style:[t.value,o.value,e.inline?{}:c.value],"aria-atomic":"true","aria-label":i(e.label,u),"aria-live":"polite",role:"status"},p),[e.dot?void 0:a.slots.badge?(M=(f=a.slots).badge)==null?void 0:M.call(f):e.icon?d(Fe,{icon:e.icon},null):H]),[[un,e.modelValue]])]}})])]}})}),{}}});const nA=I({color:String,density:String,...oe()},"VBannerActions"),Eu=W()({name:"VBannerActions",props:nA(),setup(e,a){let{slots:n}=a;return Ze({VBtn:{color:e.color,density:e.density,variant:"text"}}),$(()=>{var t;return d("div",{class:["v-banner-actions",e.class],style:e.style},[(t=n.default)==null?void 0:t.call(n)])}),{}}}),wu=an("v-banner-text"),tA=I({avatar:String,color:String,icon:Ce,lines:String,stacked:Boolean,sticky:Boolean,text:String,...qa(),...oe(),...da(),...za(),...ca(),...Un(),...Wt(),...Ke(),...ve(),...Ie()},"VBanner"),sA=W()({name:"VBanner",props:tA(),setup(e,a){let{slots:n}=a;const{borderClasses:t}=Oa(e),{densityClasses:s}=Ca(e),{mobile:i}=ot(),{dimensionStyles:l}=Qa(e),{elevationClasses:o}=ma(e),{locationStyles:r}=Fn(e),{positionClasses:c}=zt(e),{roundedClasses:u}=Ye(e),{themeClasses:H}=Ge(e),p=_(e,"color"),m=_(e,"density");Ze({VBannerActions:{color:p,density:m}}),$(()=>{const h=!!(e.text||n.text),A=!!(e.avatar||e.icon),f=!!(A||n.prepend);return d(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||i.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},t.value,s.value,o.value,c.value,u.value,H.value,e.class],style:[l.value,r.value,e.style],role:"banner"},{default:()=>{var M;return[f&&d("div",{key:"prepend",class:"v-banner__prepend"},[n.prepend?d(Ue,{key:"prepend-defaults",disabled:!A,defaults:{VAvatar:{color:p.value,density:m.value,icon:e.icon,image:e.avatar}}},n.prepend):d(Ln,{key:"prepend-avatar",color:p.value,density:m.value,icon:e.icon,image:e.avatar},null)]),d("div",{class:"v-banner__content"},[h&&d(wu,{key:"text"},{default:()=>{var g;return[((g=n.text)==null?void 0:g.call(n))??e.text]}}),(M=n.default)==null?void 0:M.call(n)]),n.actions&&d(Eu,{key:"actions"},n.actions)]}})})}});const iA=I({bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...qa(),...oe(),...da(),...ca(),...Ke(),...Gt({name:"bottom-navigation"}),...ve({tag:"header"}),...Ut({modelValue:!0,selectedClass:"v-btn--selected"}),...Ie()},"VBottomNavigation"),lA=W()({name:"VBottomNavigation",props:iA(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{themeClasses:t}=yd(),{borderClasses:s}=Oa(e),{backgroundColorClasses:i,backgroundColorStyles:l}=ea(_(e,"bgColor")),{densityClasses:o}=Ca(e),{elevationClasses:r}=ma(e),{roundedClasses:c}=Ye(e),{ssrBootStyles:u}=rt(),H=N(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),p=_(e,"active"),{layoutItemStyles:m}=qt({id:e.name,order:N(()=>parseInt(e.order,10)),position:N(()=>"bottom"),layoutSize:N(()=>p.value?H.value:0),elementSize:H,active:p,absolute:_(e,"absolute")});return ut(e,Wo),Ze({VBtn:{color:_(e,"color"),density:_(e,"density"),stacked:N(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),$(()=>d(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":p.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},t.value,i.value,s.value,o.value,r.value,c.value,e.class],style:[l.value,m.value,{height:le(H.value),transform:`translateY(${le(p.value?0:100,"%")})`},u.value,e.style]},{default:()=>[n.default&&d("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}});const oA=I({divider:[Number,String],...oe()},"VBreadcrumbsDivider"),Ru=W()({name:"VBreadcrumbsDivider",props:oA(),setup(e,a){let{slots:n}=a;return $(()=>{var t;return d("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((t=n==null?void 0:n.default)==null?void 0:t.call(n))??e.divider])}),{}}}),rA=I({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...oe(),...Ds(),...ve({tag:"li"})},"VBreadcrumbsItem"),Bu=W()({name:"VBreadcrumbsItem",props:rA(),setup(e,a){let{slots:n,attrs:t}=a;const s=ys(e,t),i=N(()=>{var c;return e.active||((c=s.isActive)==null?void 0:c.value)}),l=N(()=>i.value?e.activeColor:e.color),{textColorClasses:o,textColorStyles:r}=Na(l);return $(()=>d(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":i.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:i.value&&e.activeClass},o.value,e.class],style:[r.value,e.style],"aria-current":i.value?"page":void 0},{default:()=>{var c,u;return[s.isLink.value?d("a",{class:"v-breadcrumbs-item--link",href:s.href.value,"aria-current":i.value?"page":void 0,onClick:s.navigate},[((u=n.default)==null?void 0:u.call(n))??e.title]):((c=n.default)==null?void 0:c.call(n))??e.title]}})),{}}}),cA=I({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:Ce,items:{type:Array,default:()=>[]},...oe(),...da(),...Ke(),...ve({tag:"ul"})},"VBreadcrumbs"),dA=W()({name:"VBreadcrumbs",props:cA(),setup(e,a){let{slots:n}=a;const{backgroundColorClasses:t,backgroundColorStyles:s}=ea(_(e,"bgColor")),{densityClasses:i}=Ca(e),{roundedClasses:l}=Ye(e);Ze({VBreadcrumbsDivider:{divider:_(e,"divider")},VBreadcrumbsItem:{activeClass:_(e,"activeClass"),activeColor:_(e,"activeColor"),color:_(e,"color"),disabled:_(e,"disabled")}});const o=N(()=>e.items.map(r=>typeof r=="string"?{item:{title:r},raw:r}:{item:r,raw:r}));return $(()=>{const r=!!(n.prepend||e.icon);return d(e.tag,{class:["v-breadcrumbs",t.value,i.value,l.value,e.class],style:[s.value,e.style]},{default:()=>{var c;return[r&&d("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[n.prepend?d(Ue,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},n.prepend):d(Fe,{key:"prepend-icon",start:!0,icon:e.icon},null)]),o.value.map((u,H,p)=>{let{item:m,raw:h}=u;return d(me,null,[d(Bu,te({key:m.title,disabled:H>=p.length-1},m),{default:n.title?()=>{var A;return(A=n.title)==null?void 0:A.call(n,{item:h,index:H})}:void 0}),H<p.length-1&&d(Ru,null,{default:n.divider?()=>{var A;return(A=n.divider)==null?void 0:A.call(n,{item:h,index:H})}:void 0})])}),(c=n.default)==null?void 0:c.call(n)]}})}),{}}});const Iu=W()({name:"VCardActions",props:oe(),setup(e,a){let{slots:n}=a;return Ze({VBtn:{variant:"text"}}),$(()=>{var t;return d("div",{class:["v-card-actions",e.class],style:e.style},[(t=n.default)==null?void 0:t.call(n)])}),{}}}),Lu=an("v-card-subtitle"),Gu=an("v-card-title"),uA=I({appendAvatar:String,appendIcon:Ce,prependAvatar:String,prependIcon:Ce,subtitle:String,title:String,...oe(),...da()},"VCardItem"),qu=W()({name:"VCardItem",props:uA(),setup(e,a){let{slots:n}=a;return $(()=>{var c;const t=!!(e.prependAvatar||e.prependIcon),s=!!(t||n.prepend),i=!!(e.appendAvatar||e.appendIcon),l=!!(i||n.append),o=!!(e.title||n.title),r=!!(e.subtitle||n.subtitle);return d("div",{class:["v-card-item",e.class],style:e.style},[s&&d("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?d(Ue,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):t&&d(Ln,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),d("div",{class:"v-card-item__content"},[o&&d(Gu,{key:"title"},{default:()=>{var u;return[((u=n.title)==null?void 0:u.call(n))??e.title]}}),r&&d(Lu,{key:"subtitle"},{default:()=>{var u;return[((u=n.subtitle)==null?void 0:u.call(n))??e.subtitle]}}),(c=n.default)==null?void 0:c.call(n)]),l&&d("div",{key:"append",class:"v-card-item__append"},[n.append?d(Ue,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):i&&d(Ln,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Uu=an("v-card-text"),HA=I({appendAvatar:String,appendIcon:Ce,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:Ce,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...qa(),...oe(),...da(),...za(),...ca(),...bi(),...Un(),...Wt(),...Ke(),...Ds(),...ve(),...Ie(),...Ka({variant:"elevated"})},"VCard"),pA=W()({name:"VCard",directives:{Ripple:Vn},props:HA(),setup(e,a){let{attrs:n,slots:t}=a;const{themeClasses:s}=Ge(e),{borderClasses:i}=Oa(e),{colorClasses:l,colorStyles:o,variantClasses:r}=dt(e),{densityClasses:c}=Ca(e),{dimensionStyles:u}=Qa(e),{elevationClasses:H}=ma(e),{loaderClasses:p}=xs(e),{locationStyles:m}=Fn(e),{positionClasses:h}=zt(e),{roundedClasses:A}=Ye(e),f=ys(e,n),M=N(()=>e.link!==!1&&f.isLink.value),g=N(()=>!e.disabled&&e.link!==!1&&(e.link||f.isClickable.value));return $(()=>{const k=M.value?"a":e.tag,x=!!(t.title||e.title),v=!!(t.subtitle||e.subtitle),D=x||v,E=!!(t.append||e.appendAvatar||e.appendIcon),C=!!(t.prepend||e.prependAvatar||e.prependIcon),S=!!(t.image||e.image),b=D||C||E,w=!!(t.text||e.text);return $e(d(k,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},s.value,i.value,l.value,c.value,H.value,p.value,h.value,A.value,r.value,e.class],style:[o.value,u.value,m.value,e.style],href:f.href.value,onClick:g.value&&f.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var P;return[S&&d("div",{key:"image",class:"v-card__image"},[t.image?d(Ue,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):d(it,{key:"image-img",cover:!0,src:e.image},null)]),d(Pi,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),b&&d(qu,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),w&&d(Uu,{key:"text"},{default:()=>{var B;return[((B=t.text)==null?void 0:B.call(t))??e.text]}}),(P=t.default)==null?void 0:P.call(t),t.actions&&d(Iu,null,{default:t.actions}),ct(g.value,"v-card")]}}),[[Ia("ripple"),g.value&&e.ripple]])}),{}}});const mA=e=>{const{touchstartX:a,touchendX:n,touchstartY:t,touchendY:s}=e,i=.5,l=16;e.offsetX=n-a,e.offsetY=s-t,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&n<a-l&&e.left(e),e.right&&n>a+l&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&s<t-l&&e.up(e),e.down&&s>t+l&&e.down(e))};function hA(e,a){var t;const n=e.changedTouches[0];a.touchstartX=n.clientX,a.touchstartY=n.clientY,(t=a.start)==null||t.call(a,{originalEvent:e,...a})}function AA(e,a){var t;const n=e.changedTouches[0];a.touchendX=n.clientX,a.touchendY=n.clientY,(t=a.end)==null||t.call(a,{originalEvent:e,...a}),mA(a)}function NA(e,a){var t;const n=e.changedTouches[0];a.touchmoveX=n.clientX,a.touchmoveY=n.clientY,(t=a.move)==null||t.call(a,{originalEvent:e,...a})}function fA(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>hA(n,a),touchend:n=>AA(n,a),touchmove:n=>NA(n,a)}}function MA(e,a){var o;const n=a.value,t=n!=null&&n.parent?e.parentElement:e,s=(n==null?void 0:n.options)??{passive:!0},i=(o=a.instance)==null?void 0:o.$.uid;if(!t||!i)return;const l=fA(a.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[i]=l,od(l).forEach(r=>{t.addEventListener(r,l[r],s)})}function CA(e,a){var i,l;const n=(i=a.value)!=null&&i.parent?e.parentElement:e,t=(l=a.instance)==null?void 0:l.$.uid;if(!(n!=null&&n._touchHandlers)||!t)return;const s=n._touchHandlers[t];od(s).forEach(o=>{n.removeEventListener(o,s[o])}),delete n._touchHandlers[t]}const tr={mounted:MA,unmounted:CA},gA=tr,Fu=Symbol.for("vuetify:v-window"),Vu=Symbol.for("vuetify:v-window-group"),_u=I({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...oe(),...ve(),...Ie()},"VWindow"),di=W()({name:"VWindow",directives:{Touch:tr},props:_u(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{isRtl:s}=Ha(),{t:i}=Ta(),l=ut(e,Vu),o=ae(),r=N(()=>s.value?!e.reverse:e.reverse),c=ie(!1),u=N(()=>{const x=e.direction==="vertical"?"y":"x",D=(r.value?!c.value:c.value)?"-reverse":"";return`v-window-${x}${D}-transition`}),H=ie(0),p=ae(void 0),m=N(()=>l.items.value.findIndex(x=>l.selected.value.includes(x.id)));ce(m,(x,v)=>{const D=l.items.value.length,E=D-1;D<=2?c.value=x<v:x===E&&v===0?c.value=!0:x===0&&v===E?c.value=!1:c.value=x<v}),Oe(Fu,{transition:u,isReversed:c,transitionCount:H,transitionHeight:p,rootRef:o});const h=N(()=>e.continuous||m.value!==0),A=N(()=>e.continuous||m.value!==l.items.value.length-1);function f(){h.value&&l.prev()}function M(){A.value&&l.next()}const g=N(()=>{const x=[],v={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:l.prev,ariaLabel:i("$vuetify.carousel.prev")};x.push(h.value?n.prev?n.prev({props:v}):d(ta,v,null):d("div",null,null));const D={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:l.next,ariaLabel:i("$vuetify.carousel.next")};return x.push(A.value?n.next?n.next({props:D}):d(ta,D,null):d("div",null,null)),x}),k=N(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?f():M()},right:()=>{r.value?M():f()},start:v=>{let{originalEvent:D}=v;D.stopPropagation()}},...e.touch===!0?{}:e.touch});return $(()=>$e(d(e.tag,{ref:o,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var x,v;return[d("div",{class:"v-window__container",style:{height:p.value}},[(x=n.default)==null?void 0:x.call(n,{group:l}),e.showArrows!==!1&&d("div",{class:"v-window__controls"},[g.value])]),(v=n.additional)==null?void 0:v.call(n,{group:l})]}}),[[Ia("touch"),k.value]])),{group:l}}}),kA=I({color:String,cycle:Boolean,delimiterIcon:{type:Ce,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],..._u({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),SA=W()({name:"VCarousel",props:kA(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"modelValue"),{t:s}=Ta(),i=ae();let l=-1;ce(t,r),ce(()=>e.interval,r),ce(()=>e.cycle,c=>{c?r():window.clearTimeout(l)}),fa(o);function o(){!e.cycle||!i.value||(l=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function r(){window.clearTimeout(l),window.requestAnimationFrame(o)}return $(()=>{const[c]=di.filterProps(e);return d(di,te({ref:i},c,{modelValue:t.value,"onUpdate:modelValue":u=>t.value=u,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:le(e.height)},e.style]}),{default:n.default,additional:u=>{let{group:H}=u;return d(me,null,[!e.hideDelimiters&&d("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[H.items.value.length>0&&d(Ue,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[H.items.value.map((p,m)=>{const h={id:`carousel-item-${p.id}`,"aria-label":s("$vuetify.carousel.ariaLabel.delimiter",m+1,H.items.value.length),class:[H.isSelected(p.id)&&"v-btn--active"],onClick:()=>H.select(p.id,!0)};return n.item?n.item({props:h,item:p}):d(ta,te(p,h),null)})]})]),e.progress&&d(Oo,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(H.getItemIndex(t.value)+1)/H.items.value.length*100},null)])},prev:n.prev,next:n.next})}),{}}}),Wu=I({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...oe(),...Ft(),...Ii()},"VWindowItem"),ks=W()({name:"VWindowItem",directives:{Touch:gA},props:Wu(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:n}=a;const t=Re(Fu),s=Vt(e,Vu),{isBooted:i}=rt();if(!t||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const l=ie(!1),o=N(()=>i.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!l.value||!t||(l.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function c(){var h;l.value||!t||(l.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=le((h=t.rootRef.value)==null?void 0:h.clientHeight)),t.transitionCount.value+=1)}function u(){r()}function H(h){l.value&&_e(()=>{!o.value||!l.value||!t||(t.transitionHeight.value=le(h.clientHeight))})}const p=N(()=>{const h=t.isReversed.value?e.reverseTransition:e.transition;return o.value?{name:typeof h!="string"?t.transition.value:h,onBeforeEnter:c,onAfterEnter:r,onEnterCancelled:u,onBeforeLeave:c,onAfterLeave:r,onLeaveCancelled:u,onEnter:H}:!1}),{hasContent:m}=Yo(e,s.isSelected);return $(()=>d(Ja,{transition:p.value,disabled:!i.value},{default:()=>{var h;return[$e(d("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[m.value&&((h=n.default)==null?void 0:h.call(n))]),[[un,s.isSelected.value]])]}})),{groupItem:s}}}),TA=I({...Vd(),...Wu()},"VCarouselItem"),vA=W()({name:"VCarouselItem",inheritAttrs:!1,props:TA(),setup(e,a){let{slots:n,attrs:t}=a;$(()=>{const[s]=it.filterProps(e),[i]=ks.filterProps(e);return d(ks,te({class:"v-carousel-item"},i),{default:()=>[d(it,te(t,s),n)]})})}});const xA=an("v-code");const yA=I({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...oe()},"VColorPickerCanvas"),DA=La({name:"VColorPickerCanvas",props:yA(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,a){let{emit:n}=a;const t=ie(!1),s=ie(!1),i=ae({x:0,y:0}),l=N(()=>{const{x:M,y:g}=i.value,k=parseInt(e.dotSize,10)/2;return{width:le(e.dotSize),height:le(e.dotSize),transform:`translate(${le(M-k)}, ${le(g-k)})`}}),o=ae(),r=ie(parseFloat(e.width)),c=ie(parseFloat(e.height)),{resizeRef:u}=dn(M=>{var x;if(!((x=u.value)!=null&&x.offsetParent))return;const{width:g,height:k}=M[0].contentRect;r.value=g,c.value=k});function H(M,g,k){const{left:x,top:v,width:D,height:E}=k;i.value={x:oa(M-x,0,D),y:oa(g-v,0,E)}}function p(M){e.disabled||!o.value||H(M.clientX,M.clientY,o.value.getBoundingClientRect())}function m(M){M.preventDefault(),!e.disabled&&(t.value=!0,window.addEventListener("mousemove",h),window.addEventListener("mouseup",A),window.addEventListener("touchmove",h),window.addEventListener("touchend",A))}function h(M){if(e.disabled||!o.value)return;t.value=!0;const g=Sm(M);H(g.clientX,g.clientY,o.value.getBoundingClientRect())}function A(){window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",A),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",A)}ce(i,()=>{var k,x;if(s.value){s.value=!1;return}if(!o.value)return;const{x:M,y:g}=i.value;n("update:color",{h:((k=e.color)==null?void 0:k.h)??0,s:oa(M,0,r.value)/r.value,v:1-oa(g,0,c.value)/c.value,a:((x=e.color)==null?void 0:x.a)??1})});function f(){var v;if(!o.value)return;const M=o.value,g=M.getContext("2d");if(!g)return;const k=g.createLinearGradient(0,0,M.width,0);k.addColorStop(0,"hsla(0, 0%, 100%, 1)"),k.addColorStop(1,`hsla(${((v=e.color)==null?void 0:v.h)??0}, 100%, 50%, 1)`),g.fillStyle=k,g.fillRect(0,0,M.width,M.height);const x=g.createLinearGradient(0,0,0,M.height);x.addColorStop(0,"hsla(0, 0%, 100%, 0)"),x.addColorStop(1,"hsla(0, 0%, 0%, 1)"),g.fillStyle=x,g.fillRect(0,0,M.width,M.height)}return ce(()=>{var M;return(M=e.color)==null?void 0:M.h},f,{immediate:!0}),ce(()=>[r.value,c.value],(M,g)=>{f(),i.value={x:i.value.x*M[0]/g[0],y:i.value.y*M[1]/g[1]}},{flush:"post"}),ce(()=>e.color,()=>{if(t.value){t.value=!1;return}s.value=!0,i.value=e.color?{x:e.color.s*r.value,y:(1-e.color.v)*c.value}:{x:0,y:0}},{deep:!0,immediate:!0}),fa(()=>f()),$(()=>d("div",{ref:u,class:["v-color-picker-canvas",e.class],style:e.style,onClick:p,onMousedown:m,onTouchstart:m},[d("canvas",{ref:o,width:r.value,height:c.value},null),e.color&&d("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:l.value},null)])),{}}});function bA(e,a){if(a){const{a:n,...t}=e;return t}return e}function PA(e,a){if(a==null||typeof a=="string"){const n=gd(e);return e.a===1?n.slice(0,7):n}if(typeof a=="object"){let n;return Zn(a,["r","g","b"])?n=Mn(e):Zn(a,["h","s","l"])?n=Ad(e):Zn(a,["h","s","v"])&&(n=e),bA(n,!Zn(a,["a"])&&e.a===1)}return e}const ls={h:0,s:0,v:1,a:1},Vl={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,a)=>({...e,r:Number(a)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,a)=>({...e,g:Number(a)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,a)=>({...e,b:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:Mn,from:Si};var Y1;const EA={...Vl,inputs:(Y1=Vl.inputs)==null?void 0:Y1.slice(0,3)},_l={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,a)=>({...e,h:Number(a)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,a)=>({...e,s:Number(a)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,a)=>({...e,l:Number(a)})},{label:"A",max:1,step:.01,getValue:e=>{let{a}=e;return a!=null?Math.round(a*100)/100:1},getColor:(e,a)=>({...e,a:Number(a)})}],to:Ad,from:wo},wA={..._l,inputs:_l.inputs.slice(0,3)},zu={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,a)=>a}],to:gd,from:Lm},RA={...zu,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,a)=>a}]},st={rgb:EA,rgba:Vl,hsl:wA,hsla:_l,hex:RA,hexa:zu},BA=e=>{let{label:a,...n}=e;return d("div",{class:"v-color-picker-edit__input"},[d("input",n,null),d("span",null,[a])])},IA=I({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(st).includes(e)},modes:{type:Array,default:()=>Object.keys(st),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(st).includes(a))},...oe()},"VColorPickerEdit"),LA=La({name:"VColorPickerEdit",props:IA(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,a){let{emit:n}=a;const t=N(()=>e.modes.map(i=>({...st[i],name:i}))),s=N(()=>{var o;const i=t.value.find(r=>r.name===e.mode);if(!i)return[];const l=e.color?i.to(e.color):null;return(o=i.inputs)==null?void 0:o.map(r=>{let{getValue:c,getColor:u,...H}=r;return{...i.inputProps,...H,disabled:e.disabled,value:l&&c(l),onChange:p=>{const m=p.target;m&&n("update:color",i.from(u(l??ls,m.value)))}}})});return $(()=>{var i;return d("div",{class:["v-color-picker-edit",e.class],style:e.style},[(i=s.value)==null?void 0:i.map(l=>d(BA,l,null)),t.value.length>1&&d(ta,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const l=t.value.findIndex(o=>o.name===e.mode);n("update:mode",t.value[(l+1)%t.value.length].name)}},null)])}),{}}});const sr=Symbol.for("vuetify:v-slider");function Wl(e,a,n){const t=n==="vertical",s=a.getBoundingClientRect(),i="touches"in e?e.touches[0]:e;return t?i.clientY-(s.top+s.height/2):i.clientX-(s.left+s.width/2)}function GA(e,a){return"touches"in e&&e.touches.length?e.touches[0][a]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][a]:e[a]}const Qu=I({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...Ke(),...ca({elevation:2})},"Slider"),Ou=e=>{const a=N(()=>parseFloat(e.min)),n=N(()=>parseFloat(e.max)),t=N(()=>+e.step>0?parseFloat(e.step):0),s=N(()=>Math.max(e1(t.value),e1(a.value)));function i(l){if(l=parseFloat(l),t.value<=0)return l;const o=oa(l,a.value,n.value),r=a.value%t.value,c=Math.round((o-r)/t.value)*t.value+r;return parseFloat(Math.min(c,n.value).toFixed(s.value))}return{min:a,max:n,step:t,decimals:s,roundValue:i}},Ku=e=>{let{props:a,steps:n,onSliderStart:t,onSliderMove:s,onSliderEnd:i,getActiveThumb:l}=e;const{isRtl:o}=Ha(),r=_(a,"reverse"),c=N(()=>{let z=o.value?"rtl":"ltr";return a.reverse&&(z=z==="rtl"?"ltr":"rtl"),z}),{min:u,max:H,step:p,decimals:m,roundValue:h}=n,A=N(()=>parseInt(a.thumbSize,10)),f=N(()=>parseInt(a.tickSize,10)),M=N(()=>parseInt(a.trackSize,10)),g=N(()=>(H.value-u.value)/p.value),k=_(a,"disabled"),x=N(()=>a.direction==="vertical"),v=N(()=>a.error||a.disabled?void 0:a.thumbColor??a.color),D=N(()=>a.error||a.disabled?void 0:a.trackColor??a.color),E=N(()=>a.error||a.disabled?void 0:a.trackFillColor??a.color),C=ie(!1),S=ie(0),b=ae(),w=ae();function P(z){var G;const Se=a.direction==="vertical",ia=Se?"top":"left",re=Se?"height":"width",K=Se?"clientY":"clientX",{[ia]:Ae,[re]:T}=(G=b.value)==null?void 0:G.$el.getBoundingClientRect(),y=GA(z,K);let R=Math.min(Math.max((y-Ae-S.value)/T,0),1)||0;return(Se||c.value==="rtl")&&(R=1-R),h(u.value+R*(H.value-u.value))}const B=z=>{i({value:P(z)}),C.value=!1,S.value=0},F=z=>{w.value=l(z),w.value&&(w.value.focus(),C.value=!0,w.value.contains(z.target)?S.value=Wl(z,w.value,a.direction):(S.value=0,s({value:P(z)})),t({value:P(z)}))},ne={passive:!0,capture:!0};function q(z){s({value:P(z)})}function U(z){z.stopPropagation(),z.preventDefault(),B(z),window.removeEventListener("mousemove",q,ne),window.removeEventListener("mouseup",U)}function L(z){var Se;B(z),window.removeEventListener("touchmove",q,ne),(Se=z.target)==null||Se.removeEventListener("touchend",L)}function j(z){var Se;F(z),window.addEventListener("touchmove",q,ne),(Se=z.target)==null||Se.addEventListener("touchend",L,{passive:!1})}function Y(z){z.preventDefault(),F(z),window.addEventListener("mousemove",q,ne),window.addEventListener("mouseup",U,{passive:!1})}const O=z=>{const Se=(z-u.value)/(H.value-u.value)*100;return oa(isNaN(Se)?0:Se,0,100)},de=_(a,"showTicks"),Ne=N(()=>de.value?a.ticks?Array.isArray(a.ticks)?a.ticks.map(z=>({value:z,position:O(z),label:z.toString()})):Object.keys(a.ticks).map(z=>({value:parseFloat(z),position:O(parseFloat(z)),label:a.ticks[z]})):g.value!==1/0?Ya(g.value+1).map(z=>{const Se=u.value+z*p.value;return{value:Se,position:O(Se)}}):[]:[]),Be=N(()=>Ne.value.some(z=>{let{label:Se}=z;return!!Se})),ke={activeThumbRef:w,color:_(a,"color"),decimals:m,disabled:k,direction:_(a,"direction"),elevation:_(a,"elevation"),hasLabels:Be,horizontalDirection:c,isReversed:r,min:u,max:H,mousePressed:C,numTicks:g,onSliderMousedown:Y,onSliderTouchstart:j,parsedTicks:Ne,parseMouseMove:P,position:O,readonly:_(a,"readonly"),rounded:_(a,"rounded"),roundValue:h,showTicks:de,startOffset:S,step:p,thumbSize:A,thumbColor:v,thumbLabel:_(a,"thumbLabel"),ticks:_(a,"ticks"),tickSize:f,trackColor:D,trackContainerRef:b,trackFillColor:E,trackSize:M,vertical:x};return Oe(sr,ke),ke},qA=I({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...oe()},"VSliderThumb"),zl=W()({name:"VSliderThumb",directives:{Ripple:Vn},props:qA(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n,emit:t}=a;const s=Re(sr),{rtlClasses:i}=Ha();if(!s)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:l,step:o,vertical:r,disabled:c,thumbSize:u,thumbLabel:H,direction:p,readonly:m,elevation:h,isReversed:A,horizontalDirection:f,mousePressed:M,decimals:g}=s,{textColorClasses:k,textColorStyles:x}=Na(l),{pageup:v,pagedown:D,end:E,home:C,left:S,right:b,down:w,up:P}=gl,B=[v,D,E,C,S,b,w,P],F=N(()=>o.value?[1,2,3]:[1,5,10]);function ne(U,L){if(!B.includes(U.key))return;U.preventDefault();const j=o.value||.1,Y=(e.max-e.min)/j;if([S,b,w,P].includes(U.key)){const de=(f.value==="rtl"?[S,P]:[b,P]).includes(U.key)?1:-1,Ne=U.shiftKey?2:U.ctrlKey?1:0;L=L+de*j*F.value[Ne]}else if(U.key===C)L=e.min;else if(U.key===E)L=e.max;else{const O=U.key===D?1:-1;L=L-O*j*(Y>100?Y/10:10)}return Math.max(e.min,Math.min(e.max,L))}function q(U){const L=ne(U,e.modelValue);L!=null&&t("update:modelValue",L)}return $(()=>{const U=le(r.value||A.value?100-e.position:e.position,"%"),{elevationClasses:L}=ma(N(()=>c.value?void 0:h.value));return d("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&M.value},e.class,i.value],style:[{"--v-slider-thumb-position":U,"--v-slider-thumb-size":le(u.value)},e.style],role:"slider",tabindex:c.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!m.value,"aria-orientation":p.value,onKeydown:m.value?void 0:q},[d("div",{class:["v-slider-thumb__surface",k.value,L.value],style:{...x.value}},null),$e(d("div",{class:["v-slider-thumb__ripple",k.value],style:x.value},null),[[Ia("ripple"),e.ripple,null,{circle:!0,center:!0}]]),d(Uo,{origin:"bottom center"},{default:()=>{var j;return[$e(d("div",{class:"v-slider-thumb__label-container"},[d("div",{class:["v-slider-thumb__label"]},[d("div",null,[((j=n["thumb-label"])==null?void 0:j.call(n,{modelValue:e.modelValue}))??e.modelValue.toFixed(o.value?g.value:1)])])]),[[un,H.value&&e.focused||H.value==="always"]])]}})])}),{}}});const UA=I({start:{type:Number,required:!0},stop:{type:Number,required:!0},...oe()},"VSliderTrack"),Xu=W()({name:"VSliderTrack",props:UA(),emits:{},setup(e,a){let{slots:n}=a;const t=Re(sr);if(!t)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:s,horizontalDirection:i,parsedTicks:l,rounded:o,showTicks:r,tickSize:c,trackColor:u,trackFillColor:H,trackSize:p,vertical:m,min:h,max:A}=t,{roundedClasses:f}=Ye(o),{backgroundColorClasses:M,backgroundColorStyles:g}=ea(H),{backgroundColorClasses:k,backgroundColorStyles:x}=ea(u),v=N(()=>`inset-${m.value?"block-end":"inline-start"}`),D=N(()=>m.value?"height":"width"),E=N(()=>({[v.value]:"0%",[D.value]:"100%"})),C=N(()=>e.stop-e.start),S=N(()=>({[v.value]:le(e.start,"%"),[D.value]:le(C.value,"%")})),b=N(()=>r.value?(m.value?l.value.slice().reverse():l.value).map((P,B)=>{var q;const F=m.value?"bottom":"margin-inline-start",ne=P.value!==h.value&&P.value!==A.value?le(P.position,"%"):void 0;return d("div",{key:P.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":P.position>=e.start&&P.position<=e.stop,"v-slider-track__tick--first":P.value===h.value,"v-slider-track__tick--last":P.value===A.value}],style:{[F]:ne}},[(P.label||n["tick-label"])&&d("div",{class:"v-slider-track__tick-label"},[((q=n["tick-label"])==null?void 0:q.call(n,{tick:P,index:B}))??P.label])])}):[]);return $(()=>d("div",{class:["v-slider-track",f.value,e.class],style:[{"--v-slider-track-size":le(p.value),"--v-slider-tick-size":le(c.value),direction:m.value?void 0:i.value},e.style]},[d("div",{class:["v-slider-track__background",k.value,{"v-slider-track__background--opacity":!!s.value||!H.value}],style:{...E.value,...x.value}},null),d("div",{class:["v-slider-track__fill",M.value],style:{...S.value,...g.value}},null),r.value&&d("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":r.value==="always"}]},[b.value])])),{}}}),FA=I({...wi(),...Qu(),...Dn(),modelValue:{type:[Number,String],default:0}},"VSlider"),Ql=W()({name:"VSlider",props:FA(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,a){let{slots:n,emit:t}=a;const s=ae(),{rtlClasses:i}=Ha(),l=Ou(e),o=fe(e,"modelValue",void 0,D=>l.roundValue(D??l.min.value)),{min:r,max:c,mousePressed:u,roundValue:H,onSliderMousedown:p,onSliderTouchstart:m,trackContainerRef:h,position:A,hasLabels:f,readonly:M}=Ku({props:e,steps:l,onSliderStart:()=>{t("start",o.value)},onSliderEnd:D=>{let{value:E}=D;const C=H(E);o.value=C,t("end",C)},onSliderMove:D=>{let{value:E}=D;return o.value=H(E)},getActiveThumb:()=>{var D;return(D=s.value)==null?void 0:D.$el}}),{isFocused:g,focus:k,blur:x}=_n(e),v=N(()=>A(o.value));return $(()=>{const[D,E]=pa.filterProps(e),C=!!(e.label||n.label||n.prepend);return d(pa,te({class:["v-slider",{"v-slider--has-labels":!!n["tick-label"]||f.value,"v-slider--focused":g.value,"v-slider--pressed":u.value,"v-slider--disabled":e.disabled},i.value,e.class],style:e.style},D,{focused:g.value}),{...n,prepend:C?S=>{var b,w;return d(me,null,[((b=n.label)==null?void 0:b.call(n,S))??e.label?d(Qt,{id:S.id.value,class:"v-slider__label",text:e.label},null):void 0,(w=n.prepend)==null?void 0:w.call(n,S)])}:void 0,default:S=>{let{id:b,messagesId:w}=S;return d("div",{class:"v-slider__container",onMousedown:M.value?void 0:p,onTouchstartPassive:M.value?void 0:m},[d("input",{id:b.value,name:e.name||b.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:o.value},null),d(Xu,{ref:h,start:0,stop:v.value},{"tick-label":n["tick-label"]}),d(zl,{ref:s,"aria-describedby":w.value,focused:g.value,min:r.value,max:c.value,modelValue:o.value,"onUpdate:modelValue":P=>o.value=P,position:v.value,elevation:e.elevation,onFocus:k,onBlur:x},{"thumb-label":n["thumb-label"]})])}})}),{}}}),VA=I({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...oe()},"VColorPickerPreview"),_A=La({name:"VColorPickerPreview",props:VA(),emits:{"update:color":e=>!0},setup(e,a){let{emit:n}=a;return $(()=>{var t,s;return d("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[d("div",{class:"v-color-picker-preview__dot"},[d("div",{style:{background:fd(e.color??ls)}},null)]),d("div",{class:"v-color-picker-preview__sliders"},[d(Ql,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(t=e.color)==null?void 0:t.h,"onUpdate:modelValue":i=>n("update:color",{...e.color??ls,h:i}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&d(Ql,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((s=e.color)==null?void 0:s.a)??1,"onUpdate:modelValue":i=>n("update:color",{...e.color??ls,a:i}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}});const WA=Object.freeze({base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"}),zA=Object.freeze({base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"}),QA=Object.freeze({base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"}),OA=Object.freeze({base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"}),KA=Object.freeze({base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"}),XA=Object.freeze({base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"}),jA=Object.freeze({base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"}),$A=Object.freeze({base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"}),YA=Object.freeze({base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"}),JA=Object.freeze({base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"}),ZA=Object.freeze({base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"}),eN=Object.freeze({base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"}),aN=Object.freeze({base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"}),nN=Object.freeze({base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"}),tN=Object.freeze({base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"}),sN=Object.freeze({base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"}),iN=Object.freeze({base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"}),lN=Object.freeze({base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"}),oN=Object.freeze({base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"}),rN=Object.freeze({black:"#000000",white:"#ffffff",transparent:"#ffffff00"}),cN=Object.freeze({red:WA,pink:zA,purple:QA,deepPurple:OA,indigo:KA,blue:XA,lightBlue:jA,cyan:$A,teal:YA,green:JA,lightGreen:ZA,lime:eN,yellow:aN,amber:nN,orange:tN,deepOrange:sN,brown:iN,blueGrey:lN,grey:oN,shades:rN}),dN=I({swatches:{type:Array,default:()=>uN(cN)},disabled:Boolean,color:Object,maxHeight:[Number,String],...oe()},"VColorPickerSwatches");function uN(e){return Object.keys(e).map(a=>{const n=e[a];return n.base?[n.base,n.darken4,n.darken3,n.darken2,n.darken1,n.lighten1,n.lighten2,n.lighten3,n.lighten4,n.lighten5]:[n.black,n.white,n.transparent]})}const HN=La({name:"VColorPickerSwatches",props:dN(),emits:{"update:color":e=>!0},setup(e,a){let{emit:n}=a;return $(()=>d("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:le(e.maxHeight)},e.style]},[d("div",null,[e.swatches.map(t=>d("div",{class:"v-color-picker-swatches__swatch"},[t.map(s=>{const i=hn(s),l=Si(i),o=Nd(i);return d("div",{class:"v-color-picker-swatches__color",onClick:()=>l&&n("update:color",l)},[d("div",{style:{background:o}},[e.color&&qn(e.color,l)?d(Fe,{size:"x-small",icon:"$success",color:Fm(s,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}});const ju=I({color:String,...qa(),...oe(),...za(),...ca(),...Un(),...Wt(),...Ke(),...ve(),...Ie()},"VSheet"),Ol=W()({name:"VSheet",props:ju(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{backgroundColorClasses:s,backgroundColorStyles:i}=ea(_(e,"color")),{borderClasses:l}=Oa(e),{dimensionStyles:o}=Qa(e),{elevationClasses:r}=ma(e),{locationStyles:c}=Fn(e),{positionClasses:u}=zt(e),{roundedClasses:H}=Ye(e);return $(()=>d(e.tag,{class:["v-sheet",t.value,s.value,l.value,r.value,u.value,H.value,e.class],style:[i.value,o.value,c.value,e.style]},n)),{}}}),pN=I({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(st).includes(e)},modes:{type:Array,default:()=>Object.keys(st),validator:e=>Array.isArray(e)&&e.every(a=>Object.keys(st).includes(a))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...Hn(ju({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker"),mN=La({name:"VColorPicker",props:pN(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const a=fe(e,"mode"),n=ae(null),t=fe(e,"modelValue",void 0,l=>{if(l==null||l==="")return null;let o;try{o=Si(hn(l))}catch{return null}return n.value&&(o={...o,h:n.value.h},n.value=null),o},l=>l?PA(l,e.modelValue):null),{rtlClasses:s}=Ha(),i=l=>{t.value=l,n.value=l};return fa(()=>{e.modes.includes(a.value)||(a.value=e.modes[0])}),Ze({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),$(()=>{const[l]=Ol.filterProps(e);return d(Ol,te({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",s.value,e.class],style:[{"--v-color-picker-color-hsv":fd({...t.value??ls,a:1})},e.style]},l,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&d(DA,{key:"canvas",color:t.value,"onUpdate:color":i,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&d("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&d(_A,{key:"preview",color:t.value,"onUpdate:color":i,hideAlpha:!a.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&d(LA,{key:"edit",modes:e.modes,mode:a.value,"onUpdate:mode":o=>a.value=o,color:t.value,"onUpdate:color":i,disabled:e.disabled},null)]),e.showSwatches&&d(HN,{key:"swatches",color:t.value,"onUpdate:color":i,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}});function hN(e,a,n){if(a==null)return e;if(Array.isArray(a))throw new Error("Multiple matches is not implemented");return typeof a=="number"&&~a?d(me,null,[d("span",{class:"v-combobox__unmask"},[e.substr(0,a)]),d("span",{class:"v-combobox__mask"},[e.substr(a,n)]),d("span",{class:"v-combobox__unmask"},[e.substr(a+n)])]):e}const AN=I({autoSelectFirst:{type:[Boolean,String]},delimiters:Array,...ar({filterKeys:["title"]}),...er({hideNoData:!0,returnObject:!0}),...Hn(Ui({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...xn({transition:!1})},"VCombobox"),NN=W()({name:"VCombobox",props:AN(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,a){var re;let{emit:n,slots:t}=a;const{t:s}=Ta(),i=ae(),l=ie(!1),o=ie(!0),r=ie(!1),c=ae(),u=fe(e,"menu"),H=N({get:()=>u.value,set:K=>{var Ae;u.value&&!K&&((Ae=c.value)!=null&&Ae.ΨopenChildren)||(u.value=K)}}),p=ie(-1);let m=!1;const h=N(()=>{var K;return(K=i.value)==null?void 0:K.color}),A=N(()=>H.value?e.closeText:e.openText),{items:f,transformIn:M,transformOut:g}=$o(e),{textColorClasses:k,textColorStyles:x}=Na(h),v=fe(e,"modelValue",[],K=>M(ya(K)),K=>{const Ae=g(K);return e.multiple?Ae:Ae[0]??null}),D=Ri(),E=ie(e.multiple?"":((re=v.value[0])==null?void 0:re.title)??""),C=N({get:()=>E.value,set:K=>{var Ae;if(E.value=K,e.multiple||(v.value=[Ct(e,K)]),K&&e.multiple&&((Ae=e.delimiters)!=null&&Ae.length)){const T=K.split(new RegExp(`(?:${e.delimiters.join("|")})+`));T.length>1&&(T.forEach(y=>{y=y.trim(),y&&ke(Ct(e,y))}),E.value="")}K||(p.value=-1),o.value=!K}});ce(E,K=>{m?_e(()=>m=!1):l.value&&!H.value&&(H.value=!0),n("update:search",K)}),ce(v,K=>{var Ae;e.multiple||(E.value=((Ae=K[0])==null?void 0:Ae.title)??"")});const{filteredItems:S,getMatches:b}=nr(e,f,()=>o.value?"":C.value),w=N(()=>v.value.map(K=>f.value.find(Ae=>{const T=na(Ae.raw,e.itemValue),y=na(K.raw,e.itemValue);return T===void 0||y===void 0?!1:e.returnObject?e.valueComparator(T,y):e.valueComparator(Ae.value,K.value)})||K)),P=N(()=>e.hideSelected?S.value.filter(K=>!w.value.some(Ae=>Ae.value===K.value)):S.value),B=N(()=>w.value.map(K=>K.props.value)),F=N(()=>w.value[p.value]),ne=N(()=>{var Ae;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&C.value===((Ae=P.value[0])==null?void 0:Ae.title))&&P.value.length>0&&!o.value&&!r.value}),q=N(()=>e.hideNoData&&!f.value.length||e.readonly||(D==null?void 0:D.isReadonly.value)),U=ae(),{onListScroll:L,onListKeydown:j}=Zo(U,i);function Y(K){m=!0,e.openOnClear&&(H.value=!0)}function O(){q.value||(H.value=!0)}function de(K){q.value||(l.value&&(K.preventDefault(),K.stopPropagation()),H.value=!H.value)}function Ne(K){var y;if(e.readonly||D!=null&&D.isReadonly.value)return;const Ae=i.value.selectionStart,T=B.value.length;if((p.value>-1||["Enter","ArrowDown","ArrowUp"].includes(K.key))&&K.preventDefault(),["Enter","ArrowDown"].includes(K.key)&&(H.value=!0),["Escape"].includes(K.key)&&(H.value=!1),["Enter","Escape","Tab"].includes(K.key)&&(ne.value&&["Enter","Tab"].includes(K.key)&&ke(S.value[0]),o.value=!0),K.key==="ArrowDown"&&ne.value&&((y=U.value)==null||y.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(K.key)){if(p.value<0){K.key==="Backspace"&&!C.value&&(p.value=T-1);return}const R=p.value;F.value&&ke(F.value),p.value=R>=T-1?T-2:R}if(K.key==="ArrowLeft"){if(p.value<0&&Ae>0)return;const R=p.value>-1?p.value-1:T-1;w.value[R]?p.value=R:(p.value=-1,i.value.setSelectionRange(C.value.length,C.value.length))}if(K.key==="ArrowRight"){if(p.value<0)return;const R=p.value+1;w.value[R]?p.value=R:(p.value=-1,i.value.setSelectionRange(0,0))}K.key==="Enter"&&C.value&&(ke(Ct(e,C.value)),C.value="")}}function Be(){var K;l.value&&(o.value=!0,(K=i.value)==null||K.focus())}function ke(K){if(e.multiple){const Ae=B.value.findIndex(T=>e.valueComparator(T,K.value));if(Ae===-1)v.value=[...v.value,K];else{const T=[...v.value];T.splice(Ae,1),v.value=T}C.value=""}else v.value=[K],E.value=K.title,_e(()=>{H.value=!1,o.value=!0})}function z(K){l.value=!0,setTimeout(()=>{r.value=!0})}function Se(K){r.value=!1}function ia(K){(K==null||K===""&&!e.multiple)&&(v.value=[])}return ce(S,K=>{!K.length&&e.hideNoData&&(H.value=!1)}),ce(l,(K,Ae)=>{K||K===Ae||(p.value=-1,H.value=!1,ne.value&&!r.value&&!w.value.some(T=>{let{value:y}=T;return y===P.value[0].value})?ke(P.value[0]):e.multiple&&C.value&&(v.value=[...v.value,Ct(e,C.value)],C.value=""))}),$(()=>{const K=!!(e.chips||t.chip),Ae=!!(!e.hideNoData||P.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),T=v.value.length>0,[y]=ha.filterProps(e);return d(ha,te({ref:i},y,{modelValue:C.value,"onUpdate:modelValue":[R=>C.value=R,ia],focused:l.value,"onUpdate:focused":R=>l.value=R,validationValue:v.externalValue,dirty:T,class:["v-combobox",{"v-combobox--active-menu":H.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!t.selection,"v-combobox--selecting-index":p.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:T?void 0:e.placeholder,"onClick:clear":Y,"onMousedown:control":O,onKeydown:Ne}),{...t,default:()=>d(me,null,[d(Li,te({ref:c,modelValue:H.value,"onUpdate:modelValue":R=>H.value=R,activator:"parent",contentClass:"v-combobox__content",disabled:q.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Be},e.menuProps),{default:()=>[Ae&&d(Bi,{ref:U,selected:B.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:R=>R.preventDefault(),onKeydown:j,onFocusin:z,onFocusout:Se,onScrollPassive:L,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var R,G,V;return[(R=t["prepend-item"])==null?void 0:R.call(t),!P.value.length&&!e.hideNoData&&(((G=t["no-data"])==null?void 0:G.call(t))??d(gn,{title:s(e.noDataText)},null)),d(Fi,{renderless:!0,items:P.value},{default:X=>{var pe;let{item:ee,index:Z,itemRef:se}=X;const J=te(ee.props,{ref:se,key:Z,active:ne.value&&Z===0?!0:void 0,onClick:()=>ke(ee)});return((pe=t.item)==null?void 0:pe.call(t,{item:ee,index:Z,props:J}))??d(gn,J,{prepend:ue=>{let{isSelected:he}=ue;return d(me,null,[e.multiple&&!e.hideSelected?d(Cn,{key:ee.value,modelValue:he,ripple:!1,tabindex:"-1"},null):void 0,ee.props.prependIcon&&d(Fe,{icon:ee.props.prependIcon},null)])},title:()=>{var ue,he;return o.value?ee.title:hN(ee.title,(ue=b(ee))==null?void 0:ue.title,((he=C.value)==null?void 0:he.length)??0)}})}}),(V=t["append-item"])==null?void 0:V.call(t)]}})]}),w.value.map((R,G)=>{var ee;function V(Z){Z.stopPropagation(),Z.preventDefault(),ke(R)}const X={"onClick:close":V,onMousedown(Z){Z.preventDefault(),Z.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return d("div",{key:R.value,class:["v-combobox__selection",G===p.value&&["v-combobox__selection--selected",k.value]],style:G===p.value?x.value:{}},[K?t.chip?d(Ue,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:R.title}}},{default:()=>{var Z;return[(Z=t.chip)==null?void 0:Z.call(t,{item:R,index:G,props:X})]}}):d(xe,te({key:"chip",closable:e.closableChips,size:"small",text:R.title},X),null):((ee=t.selection)==null?void 0:ee.call(t,{item:R,index:G}))??d("span",{class:"v-combobox__selection-text"},[R.title,e.multiple&&G<w.value.length-1&&d("span",{class:"v-combobox__selection-comma"},[we(",")])])])})]),"append-inner":function(){var X;for(var R=arguments.length,G=new Array(R),V=0;V<R;V++)G[V]=arguments[V];return d(me,null,[(X=t["append-inner"])==null?void 0:X.call(t,...G),(!e.hideNoData||e.items.length)&&e.menuIcon?d(Fe,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:de,onClick:ud,"aria-label":s(A.value),title:s(A.value)},null):void 0])}})}),nn({isFocused:l,isPristine:o,menu:H,search:C,selectionIndex:p,filteredItems:S,select:ke},i)}});const fN=I({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...bs({origin:"center center",scrollStrategy:"block",transition:{component:xi},zIndex:2400})},"VDialog"),MN=W()({name:"VDialog",props:fN(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"modelValue"),{scopeId:s}=Ot(),i=ae();function l(r){var H,p;const c=r.relatedTarget,u=r.target;if(c!==u&&((H=i.value)!=null&&H.contentEl)&&((p=i.value)!=null&&p.globalTop)&&![document,i.value.contentEl].includes(u)&&!i.value.contentEl.contains(u)){const m=hs(i.value.contentEl);if(!m.length)return;const h=m[0],A=m[m.length-1];c===h?A.focus():h.focus()}}je&&ce(()=>t.value&&e.retainFocus,r=>{r?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0}),ce(t,async r=>{var c,u;await _e(),r?(c=i.value.contentEl)==null||c.focus({preventScroll:!0}):(u=i.value.activatorEl)==null||u.focus({preventScroll:!0})});const o=N(()=>te({"aria-haspopup":"dialog","aria-expanded":String(t.value)},e.activatorProps));return $(()=>{const[r]=kn.filterProps(e);return d(kn,te({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},r,{modelValue:t.value,"onUpdate:modelValue":c=>t.value=c,"aria-modal":"true",activatorProps:o.value,role:"dialog"},s),{activator:n.activator,default:function(){for(var c=arguments.length,u=new Array(c),H=0;H<c;H++)u[H]=arguments[H];return d(Ue,{root:"VDialog"},{default:()=>{var p;return[(p=n.default)==null?void 0:p.call(n,...u)]}})}})}),nn({},i)}});const Ss=Symbol.for("vuetify:v-expansion-panel"),CN=["default","accordion","inset","popout"],gN=I({color:String,variant:{type:String,default:"default",validator:e=>CN.includes(e)},readonly:Boolean,...oe(),...Ut(),...ve(),...Ie()},"VExpansionPanels"),kN=W()({name:"VExpansionPanels",props:gN(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;ut(e,Ss);const{themeClasses:t}=Ge(e),s=N(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return Ze({VExpansionPanel:{color:_(e,"color")},VExpansionPanelTitle:{readonly:_(e,"readonly")}}),$(()=>d(e.tag,{class:["v-expansion-panels",t.value,s.value,e.class],style:e.style},n)),{}}}),SN=I({...oe(),...Ii()},"VExpansionPanelText"),$u=W()({name:"VExpansionPanelText",props:SN(),setup(e,a){let{slots:n}=a;const t=Re(Ss);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:i}=Yo(e,t.isSelected);return $(()=>d(yi,{onAfterLeave:i},{default:()=>{var l;return[$e(d("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&s.value&&d("div",{class:"v-expansion-panel-text__wrapper"},[(l=n.default)==null?void 0:l.call(n)])]),[[un,t.isSelected.value]])]}})),{}}}),Yu=I({color:String,expandIcon:{type:Ce,default:"$expand"},collapseIcon:{type:Ce,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...oe()},"VExpansionPanelTitle"),Ju=W()({name:"VExpansionPanelTitle",directives:{Ripple:Vn},props:Yu(),setup(e,a){let{slots:n}=a;const t=Re(Ss);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:i}=ea(e,"color"),l=N(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return $(()=>{var o;return $e(d("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value},s.value,e.class],style:[i.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[d("span",{class:"v-expansion-panel-title__overlay"},null),(o=n.default)==null?void 0:o.call(n,l.value),!e.hideActions&&d("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(l.value):d(Fe,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Ia("ripple"),e.ripple]])}),{}}}),TN=I({title:String,text:String,bgColor:String,...oe(),...ca(),...Ft(),...Ii(),...Ke(),...ve(),...Yu()},"VExpansionPanel"),vN=W()({name:"VExpansionPanel",props:TN(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:n}=a;const t=Vt(e,Ss),{backgroundColorClasses:s,backgroundColorStyles:i}=ea(e,"bgColor"),{elevationClasses:l}=ma(e),{roundedClasses:o}=Ye(e),r=N(()=>(t==null?void 0:t.disabled.value)||e.disabled),c=N(()=>t.group.items.value.reduce((p,m,h)=>(t.group.selected.value.includes(m.id)&&p.push(h),p),[])),u=N(()=>{const p=t.group.items.value.findIndex(m=>m.id===t.id);return!t.isSelected.value&&c.value.some(m=>m-p===1)}),H=N(()=>{const p=t.group.items.value.findIndex(m=>m.id===t.id);return!t.isSelected.value&&c.value.some(m=>m-p===-1)});return Oe(Ss,t),Ze({VExpansionPanelText:{eager:_(e,"eager")}}),$(()=>{const p=!!(n.text||e.text),m=!!(n.title||e.title);return d(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":u.value,"v-expansion-panel--after-active":H.value,"v-expansion-panel--disabled":r.value},o.value,s.value,e.class],style:[i.value,e.style]},{default:()=>{var h;return[d("div",{class:["v-expansion-panel__shadow",...l.value]},null),m&&d(Ju,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),p&&d($u,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(h=n.default)==null?void 0:h.call(n)]}})}),{}}});const xN=I({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...Dn({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ya(e).every(a=>a!=null&&typeof a=="object")},...qi({clearable:!0})},"VFileInput"),yN=W()({name:"VFileInput",inheritAttrs:!1,props:xN(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:n,emit:t,slots:s}=a;const{t:i}=Ta(),l=fe(e,"modelValue"),{isFocused:o,focus:r,blur:c}=_n(e),u=N(()=>typeof e.showSize!="boolean"?e.showSize:void 0),H=N(()=>(l.value??[]).reduce((S,b)=>{let{size:w=0}=b;return S+w},0)),p=N(()=>n1(H.value,u.value)),m=N(()=>(l.value??[]).map(S=>{const{name:b="",size:w=0}=S;return e.showSize?`${b} (${n1(w,u.value)})`:b})),h=N(()=>{var b;const S=((b=l.value)==null?void 0:b.length)??0;return e.showSize?i(e.counterSizeString,S,p.value):i(e.counterString,S)}),A=ae(),f=ae(),M=ae(),g=N(()=>o.value||e.active),k=N(()=>["plain","underlined"].includes(e.variant));function x(){var S;M.value!==document.activeElement&&((S=M.value)==null||S.focus()),o.value||r()}function v(S){E(S)}function D(S){t("mousedown:control",S)}function E(S){var b;(b=M.value)==null||b.click(),t("click:control",S)}function C(S){S.stopPropagation(),x(),_e(()=>{l.value=[],bo(e["onClick:clear"],S)})}return ce(l,S=>{(!Array.isArray(S)||!S.length)&&M.value&&(M.value.value="")}),$(()=>{const S=!!(s.counter||e.counter),b=!!(S||s.details),[w,P]=lt(n),[{modelValue:B,...F}]=pa.filterProps(e),[ne]=Jo(e);return d(pa,te({ref:A,modelValue:l.value,"onUpdate:modelValue":q=>l.value=q,class:["v-file-input",{"v-text-field--plain-underlined":k.value},e.class],style:e.style,"onClick:prepend":v},w,F,{centerAffix:!k.value,focused:o.value}),{...s,default:q=>{let{id:U,isDisabled:L,isDirty:j,isReadonly:Y,isValid:O}=q;return d(Ps,te({ref:f,"prepend-icon":e.prependIcon,onMousedown:D,onClick:E,"onClick:clear":C,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},ne,{id:U.value,active:g.value||j.value,dirty:j.value,disabled:L.value,focused:o.value,error:O.value===!1}),{...s,default:de=>{var ke;let{props:{class:Ne,...Be}}=de;return d(me,null,[d("input",te({ref:M,type:"file",readonly:Y.value,disabled:L.value,multiple:e.multiple,name:e.name,onClick:z=>{z.stopPropagation(),Y.value&&z.preventDefault(),x()},onChange:z=>{if(!z.target)return;const Se=z.target;l.value=[...Se.files??[]]},onFocus:x,onBlur:c},Be,P),null),d("div",{class:Ne},[!!((ke=l.value)!=null&&ke.length)&&(s.selection?s.selection({fileNames:m.value,totalBytes:H.value,totalBytesReadable:p.value}):e.chips?m.value.map(z=>d(xe,{key:z,size:"small",color:e.color},{default:()=>[z]})):m.value.join(", "))])])}})},details:b?q=>{var U,L;return d(me,null,[(U=s.details)==null?void 0:U.call(s,q),S&&d(me,null,[d("span",null,null),d(Gi,{active:!!((L=l.value)!=null&&L.length),value:h.value},s.counter)])])}:void 0})}),nn({},A,f,M)}});const DN=I({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...qa(),...oe(),...ca(),...Gt(),...Ke(),...ve({tag:"footer"}),...Ie()},"VFooter"),bN=W()({name:"VFooter",props:DN(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{backgroundColorClasses:s,backgroundColorStyles:i}=ea(_(e,"color")),{borderClasses:l}=Oa(e),{elevationClasses:o}=ma(e),{roundedClasses:r}=Ye(e),c=ie(32),{resizeRef:u}=dn(m=>{m.length&&(c.value=m[0].target.clientHeight)}),H=N(()=>e.height==="auto"?c.value:parseInt(e.height,10)),{layoutItemStyles:p}=qt({id:e.name,order:N(()=>parseInt(e.order,10)),position:N(()=>"bottom"),layoutSize:H,elementSize:N(()=>e.height==="auto"?void 0:H.value),active:N(()=>e.app),absolute:_(e,"absolute")});return $(()=>d(e.tag,{ref:u,class:["v-footer",t.value,s.value,l.value,o.value,r.value,e.class],style:[i.value,e.app?p.value:{height:le(e.height)},e.style]},n)),{}}}),PN=I({...oe(),...F5()},"VForm"),Zu=W()({name:"VForm",props:PN(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,a){let{slots:n,emit:t}=a;const s=V5(e),i=ae();function l(r){r.preventDefault(),s.reset()}function o(r){const c=r,u=s.validate();c.then=u.then.bind(u),c.catch=u.catch.bind(u),c.finally=u.finally.bind(u),t("submit",c),c.defaultPrevented||u.then(H=>{var m;let{valid:p}=H;p&&((m=i.value)==null||m.submit())}),c.preventDefault()}return $(()=>{var r;return d("form",{ref:i,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:l,onSubmit:o},[(r=n.default)==null?void 0:r.call(n,s)])}),nn(s,i)}});const EN=I({fluid:{type:Boolean,default:!1},...oe(),...ve()},"VContainer"),eH=W()({name:"VContainer",props:EN(),setup(e,a){let{slots:n}=a;const{rtlClasses:t}=Ha();return $(()=>d(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},n)),{}}}),aH=(()=>Ti.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),nH=(()=>Ti.reduce((e,a)=>{const n="offset"+Sn(a);return e[n]={type:[String,Number],default:null},e},{}))(),tH=(()=>Ti.reduce((e,a)=>{const n="order"+Sn(a);return e[n]={type:[String,Number],default:null},e},{}))(),V1={col:Object.keys(aH),offset:Object.keys(nH),order:Object.keys(tH)};function wN(e,a,n){let t=e;if(!(n==null||n===!1)){if(a){const s=a.replace(e,"");t+=`-${s}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const RN=["auto","start","end","center","baseline","stretch"],BN=I({cols:{type:[Boolean,String,Number],default:!1},...aH,offset:{type:[String,Number],default:null},...nH,order:{type:[String,Number],default:null},...tH,alignSelf:{type:String,default:null,validator:e=>RN.includes(e)},...oe(),...ve()},"VCol"),as=W()({name:"VCol",props:BN(),setup(e,a){let{slots:n}=a;const t=N(()=>{const s=[];let i;for(i in V1)V1[i].forEach(o=>{const r=e[o],c=wN(i,o,r);c&&s.push(c)});const l=s.some(o=>o.startsWith("v-col-"));return s.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return Gn(e.tag,{class:[t.value,e.class],style:e.style},(s=n.default)==null?void 0:s.call(n))}}}),ir=["start","end","center"],sH=["space-between","space-around","space-evenly"];function lr(e,a){return Ti.reduce((n,t)=>{const s=e+Sn(t);return n[s]=a(),n},{})}const IN=[...ir,"baseline","stretch"],iH=e=>IN.includes(e),lH=lr("align",()=>({type:String,default:null,validator:iH})),LN=[...ir,...sH],oH=e=>LN.includes(e),rH=lr("justify",()=>({type:String,default:null,validator:oH})),GN=[...ir,...sH,"stretch"],cH=e=>GN.includes(e),dH=lr("alignContent",()=>({type:String,default:null,validator:cH})),_1={align:Object.keys(lH),justify:Object.keys(rH),alignContent:Object.keys(dH)},qN={align:"align",justify:"justify",alignContent:"align-content"};function UN(e,a,n){let t=qN[e];if(n!=null){if(a){const s=a.replace(e,"");t+=`-${s}`}return t+=`-${n}`,t.toLowerCase()}}const FN=I({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:iH},...lH,justify:{type:String,default:null,validator:oH},...rH,alignContent:{type:String,default:null,validator:cH},...dH,...oe(),...ve()},"VRow"),Kl=W()({name:"VRow",props:FN(),setup(e,a){let{slots:n}=a;const t=N(()=>{const s=[];let i;for(i in _1)_1[i].forEach(l=>{const o=e[l],r=UN(i,l,o);r&&s.push(r)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return Gn(e.tag,{class:["v-row",t.value,e.class],style:e.style},(s=n.default)==null?void 0:s.call(n))}}}),VN=an("v-spacer","div","VSpacer"),_N=I({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...vu()},"VHover"),WN=W()({name:"VHover",props:_N(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"modelValue"),{runOpenDelay:s,runCloseDelay:i}=xu(e,l=>!e.disabled&&(t.value=l));return()=>{var l;return(l=n.default)==null?void 0:l.call(n,{isHovering:t.value,props:{onMouseenter:s,onMouseleave:i}})}}});const uH=Symbol.for("vuetify:v-item-group"),zN=I({...oe(),...Ut({selectedClass:"v-item--selected"}),...ve(),...Ie()},"VItemGroup"),QN=W()({name:"VItemGroup",props:zN(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{isSelected:s,select:i,next:l,prev:o,selected:r}=ut(e,uH);return()=>d(e.tag,{class:["v-item-group",t.value,e.class],style:e.style},{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:s,select:i,next:l,prev:o,selected:r.value})]}})}}),ON=W()({name:"VItem",props:Ft(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:n}=a;const{isSelected:t,select:s,toggle:i,selectedClass:l,value:o,disabled:r}=Vt(e,uH);return()=>{var c;return(c=n.default)==null?void 0:c.call(n,{isSelected:t.value,selectedClass:l.value,select:s,toggle:i,value:o.value,disabled:r.value})}}});const KN=an("v-kbd");const XN=I({...oe(),...Ed()},"VLayout"),jN=W()({name:"VLayout",props:XN(),setup(e,a){let{slots:n}=a;const{layoutClasses:t,layoutStyles:s,getLayoutItem:i,items:l,layoutRef:o}=wd(e);return $(()=>{var r;return d("div",{ref:o,class:[t.value,e.class],style:[s.value,e.style]},[(r=n.default)==null?void 0:r.call(n)])}),{getLayoutItem:i,items:l}}});const $N=I({position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...oe(),...Gt()},"VLayoutItem"),YN=W()({name:"VLayoutItem",props:$N(),setup(e,a){let{slots:n}=a;const{layoutItemStyles:t}=qt({id:e.name,order:N(()=>parseInt(e.order,10)),position:_(e,"position"),elementSize:_(e,"size"),layoutSize:_(e,"size"),active:_(e,"modelValue"),absolute:_(e,"absolute")});return()=>{var s;return d("div",{class:["v-layout-item",e.class],style:[t.value,e.style]},[(s=n.default)==null?void 0:s.call(n)])}}}),JN=I({modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...oe(),...za(),...ve(),...xn({transition:"fade-transition"})},"VLazy"),ZN=W()({name:"VLazy",directives:{intersect:Di},props:JN(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{dimensionStyles:t}=Qa(e),s=fe(e,"modelValue");function i(l){s.value||(s.value=l)}return $(()=>$e(d(e.tag,{class:["v-lazy",e.class],style:[t.value,e.style]},{default:()=>[s.value&&d(Ja,{transition:e.transition,appear:!0},{default:()=>{var l;return[(l=n.default)==null?void 0:l.call(n)]}})]}),[[Ia("intersect"),{handler:i,options:e.options},null]])),{}}});const ef=I({locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...oe()},"VLocaleProvider"),af=W()({name:"VLocaleProvider",props:ef(),setup(e,a){let{slots:n}=a;const{rtlClasses:t}=ch(e);return $(()=>{var s;return d("div",{class:["v-locale-provider",t.value,e.class],style:e.style},[(s=n.default)==null?void 0:s.call(n)])}),{}}});const nf=I({scrollable:Boolean,...oe(),...ve({tag:"main"})},"VMain"),HH=W()({name:"VMain",props:nf(),setup(e,a){let{slots:n}=a;const{mainStyles:t}=_h(),{ssrBootStyles:s}=rt();return $(()=>d(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,s.value,e.style]},{default:()=>{var i,l;return[e.scrollable?d("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(l=n.default)==null?void 0:l.call(n)]}})),{}}});function tf(e){let{rootEl:a,isSticky:n,layoutItemStyles:t}=e;const s=ie(!1),i=ie(0),l=N(()=>{const c=typeof s.value=="boolean"?"top":s.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,s.value?{[c]:le(i.value)}:{top:t.value.top}]});fa(()=>{ce(n,c=>{c?window.addEventListener("scroll",r,{passive:!0}):window.removeEventListener("scroll",r)},{immediate:!0})}),Sa(()=>{window.removeEventListener("scroll",r)});let o=0;function r(){const c=o>window.scrollY?"up":"down",u=a.value.getBoundingClientRect(),H=parseFloat(t.value.top??0),p=window.scrollY-Math.max(0,i.value-H),m=u.height+Math.max(i.value,H)-window.scrollY-window.innerHeight,h=parseFloat(getComputedStyle(a.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-H?(s.value="top",i.value=H):c==="up"&&s.value==="bottom"||c==="down"&&s.value==="top"?(i.value=window.scrollY+u.top-h,s.value=!0):c==="down"&&m<=0?(i.value=0,s.value="bottom"):c==="up"&&p<=0&&(h?s.value!=="top"&&(i.value=-p+h+H,s.value="top"):(i.value=u.top+p,s.value="top")),o=window.scrollY}return{isStuck:s,stickyStyles:l}}const sf=100,lf=20;function W1(e){const a=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*a}function z1(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let a=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const t=W1(a),s=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);a+=(s-t)*Math.abs(s),n===e.length-1&&(a*=.5)}return W1(a)*1e3}function of(){const e={};function a(s){Array.from(s.changedTouches).forEach(i=>{(e[i.identifier]??(e[i.identifier]=new km(lf))).push([s.timeStamp,i])})}function n(s){Array.from(s.changedTouches).forEach(i=>{delete e[i.identifier]})}function t(s){var c;const i=(c=e[s])==null?void 0:c.values().reverse();if(!i)throw new Error(`No samples for touch id ${s}`);const l=i[0],o=[],r=[];for(const u of i){if(l[0]-u[0]>sf)break;o.push({t:u[0],d:u[1].clientX}),r.push({t:u[0],d:u[1].clientY})}return{x:z1(o),y:z1(r),get direction(){const{x:u,y:H}=this,[p,m]=[Math.abs(u),Math.abs(H)];return p>m&&u>=0?"right":p>m&&u<=0?"left":m>p&&H>=0?"down":m>p&&H<=0?"up":rf()}}}return{addMovement:a,endTouch:n,getVelocity:t}}function rf(){throw new Error}function cf(e){let{isActive:a,isTemporary:n,width:t,touchless:s,position:i}=e;fa(()=>{window.addEventListener("touchstart",M,{passive:!0}),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",k,{passive:!0})}),Sa(()=>{window.removeEventListener("touchstart",M),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",k)});const l=N(()=>["left","right"].includes(i.value)),{addMovement:o,endTouch:r,getVelocity:c}=of();let u=!1;const H=ie(!1),p=ie(0),m=ie(0);let h;function A(v,D){return(i.value==="left"?v:i.value==="right"?document.documentElement.clientWidth-v:i.value==="top"?v:i.value==="bottom"?document.documentElement.clientHeight-v:Nt())-(D?t.value:0)}function f(v){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const E=i.value==="left"?(v-m.value)/t.value:i.value==="right"?(document.documentElement.clientWidth-v-m.value)/t.value:i.value==="top"?(v-m.value)/t.value:i.value==="bottom"?(document.documentElement.clientHeight-v-m.value)/t.value:Nt();return D?Math.max(0,Math.min(1,E)):E}function M(v){if(s.value)return;const D=v.changedTouches[0].clientX,E=v.changedTouches[0].clientY,C=25,S=i.value==="left"?D<C:i.value==="right"?D>document.documentElement.clientWidth-C:i.value==="top"?E<C:i.value==="bottom"?E>document.documentElement.clientHeight-C:Nt(),b=a.value&&(i.value==="left"?D<t.value:i.value==="right"?D>document.documentElement.clientWidth-t.value:i.value==="top"?E<t.value:i.value==="bottom"?E>document.documentElement.clientHeight-t.value:Nt());(S||b||a.value&&n.value)&&(u=!0,h=[D,E],m.value=A(l.value?D:E,a.value),p.value=f(l.value?D:E),r(v),o(v))}function g(v){const D=v.changedTouches[0].clientX,E=v.changedTouches[0].clientY;if(u){if(!v.cancelable){u=!1;return}const S=Math.abs(D-h[0]),b=Math.abs(E-h[1]);(l.value?S>b&&S>3:b>S&&b>3)?(H.value=!0,u=!1):(l.value?b:S)>3&&(u=!1)}if(!H.value)return;v.preventDefault(),o(v);const C=f(l.value?D:E,!1);p.value=Math.max(0,Math.min(1,C)),C>1?m.value=A(l.value?D:E,!0):C<0&&(m.value=A(l.value?D:E,!1))}function k(v){if(u=!1,!H.value)return;o(v),H.value=!1;const D=c(v.changedTouches[0].identifier),E=Math.abs(D.x),C=Math.abs(D.y);(l.value?E>C&&E>400:C>E&&C>3)?a.value=D.direction===({left:"right",right:"left",top:"down",bottom:"up"}[i.value]||Nt()):a.value=p.value>.5}const x=N(()=>H.value?{transform:i.value==="left"?`translateX(calc(-100% + ${p.value*t.value}px))`:i.value==="right"?`translateX(calc(100% - ${p.value*t.value}px))`:i.value==="top"?`translateY(calc(-100% + ${p.value*t.value}px))`:i.value==="bottom"?`translateY(calc(100% - ${p.value*t.value}px))`:Nt(),transition:"none"}:void 0);return{isDragging:H,dragProgress:p,dragStyles:x}}function Nt(){throw new Error}const df=["start","end","left","right","top","bottom"],uf=I({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>df.includes(e)},sticky:Boolean,...qa(),...oe(),...ca(),...Gt(),...Ke(),...ve({tag:"nav"}),...Ie()},"VNavigationDrawer"),Hf=W()({name:"VNavigationDrawer",props:uf(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,a){let{attrs:n,emit:t,slots:s}=a;const{isRtl:i}=Ha(),{themeClasses:l}=Ge(e),{borderClasses:o}=Oa(e),{backgroundColorClasses:r,backgroundColorStyles:c}=ea(_(e,"color")),{elevationClasses:u}=ma(e),{mobile:H}=ot(),{roundedClasses:p}=Ye(e),m=Qd(),h=fe(e,"modelValue",null,j=>!!j),{ssrBootStyles:A}=rt(),{scopeId:f}=Ot(),M=ae(),g=ie(!1),k=N(()=>e.rail&&e.expandOnHover&&g.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),x=N(()=>Sl(e.location,i.value)),v=N(()=>!e.permanent&&(H.value||e.temporary)),D=N(()=>e.sticky&&!v.value&&x.value!=="bottom");e.expandOnHover&&e.rail!=null&&ce(g,j=>t("update:rail",!j)),e.disableResizeWatcher||ce(v,j=>!e.permanent&&_e(()=>h.value=!j)),!e.disableRouteWatcher&&m&&ce(m.currentRoute,()=>v.value&&(h.value=!1)),ce(()=>e.permanent,j=>{j&&(h.value=!0)}),Ci(()=>{e.modelValue!=null||v.value||(h.value=e.permanent||!H.value)});const{isDragging:E,dragProgress:C,dragStyles:S}=cf({isActive:h,isTemporary:v,width:k,touchless:_(e,"touchless"),position:x}),b=N(()=>{const j=v.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):k.value;return E.value?j*C.value:j}),{layoutItemStyles:w,layoutItemScrimStyles:P}=qt({id:e.name,order:N(()=>parseInt(e.order,10)),position:x,layoutSize:b,elementSize:k,active:N(()=>h.value||E.value),disableTransitions:N(()=>E.value),absolute:N(()=>e.absolute||D.value&&typeof B.value!="string")}),{isStuck:B,stickyStyles:F}=tf({rootEl:M,isSticky:D,layoutItemStyles:w}),ne=ea(N(()=>typeof e.scrim=="string"?e.scrim:null)),q=N(()=>({...E.value?{opacity:C.value*.2,transition:"none"}:void 0,...P.value}));Ze({VList:{bgColor:"transparent"}});function U(){g.value=!0}function L(){g.value=!1}return $(()=>{const j=s.image||e.image;return d(me,null,[d(e.tag,te({ref:M,onMouseenter:U,onMouseleave:L,class:["v-navigation-drawer",`v-navigation-drawer--${x.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":g.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":v.value,"v-navigation-drawer--active":h.value,"v-navigation-drawer--sticky":D.value},l.value,r.value,o.value,u.value,p.value,e.class],style:[c.value,w.value,S.value,A.value,F.value,e.style]},f,n),{default:()=>{var Y,O,de,Ne;return[j&&d("div",{key:"image",class:"v-navigation-drawer__img"},[s.image?(Y=s.image)==null?void 0:Y.call(s,{image:e.image}):d("img",{src:e.image,alt:""},null)]),s.prepend&&d("div",{class:"v-navigation-drawer__prepend"},[(O=s.prepend)==null?void 0:O.call(s)]),d("div",{class:"v-navigation-drawer__content"},[(de=s.default)==null?void 0:de.call(s)]),s.append&&d("div",{class:"v-navigation-drawer__append"},[(Ne=s.append)==null?void 0:Ne.call(s)])]}}),d(cn,{name:"fade-transition"},{default:()=>[v.value&&(E.value||h.value)&&!!e.scrim&&d("div",te({class:["v-navigation-drawer__scrim",ne.backgroundColorClasses.value],style:[q.value,ne.backgroundColorStyles.value],onClick:()=>h.value=!1},f),null)]})])}),{isStuck:B}}}),pf=La({name:"VNoSsr",setup(e,a){let{slots:n}=a;const t=yu();return()=>{var s;return t.value&&((s=n.default)==null?void 0:s.call(n))}}});function mf(){const e=ae([]);Ic(()=>e.value=[]);function a(n,t){e.value[t]=n}return{refs:e,updateRef:a}}const hf=I({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:Ce,default:"$first"},prevIcon:{type:Ce,default:"$prev"},nextIcon:{type:Ce,default:"$next"},lastIcon:{type:Ce,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...qa(),...oe(),...da(),...ca(),...Ke(),...yn(),...ve({tag:"nav"}),...Ie(),...Ka({variant:"text"})},"VPagination"),Af=W()({name:"VPagination",props:hf(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,a){let{slots:n,emit:t}=a;const s=fe(e,"modelValue"),{t:i,n:l}=Ta(),{isRtl:o}=Ha(),{themeClasses:r}=Ge(e),{width:c}=ot(),u=ie(-1);Ze(void 0,{scoped:!0});const{resizeRef:H}=dn(C=>{if(!C.length)return;const{target:S,contentRect:b}=C[0],w=S.querySelector(".v-pagination__list > *");if(!w)return;const P=b.width,B=w.offsetWidth+parseFloat(getComputedStyle(w).marginRight)*2;u.value=A(P,B)}),p=N(()=>parseInt(e.length,10)),m=N(()=>parseInt(e.start,10)),h=N(()=>e.totalVisible?parseInt(e.totalVisible,10):u.value>=0?u.value:A(c.value,58));function A(C,S){const b=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((C-S*b)/S).toFixed(2)))}const f=N(()=>{if(p.value<=0||isNaN(p.value)||p.value>Number.MAX_SAFE_INTEGER)return[];if(h.value<=1)return[s.value];if(p.value<=h.value)return Ya(p.value,m.value);const C=h.value%2===0,S=C?h.value/2:Math.floor(h.value/2),b=C?S:S+1,w=p.value-S;if(b-s.value>=0)return[...Ya(Math.max(1,h.value-1),m.value),e.ellipsis,p.value];if(s.value-w>=(C?1:0)){const P=h.value-1,B=p.value-P+m.value;return[m.value,e.ellipsis,...Ya(P,B)]}else{const P=Math.max(1,h.value-3),B=P===1?s.value:s.value-Math.ceil(P/2)+m.value;return[m.value,e.ellipsis,...Ya(P,B),e.ellipsis,p.value]}});function M(C,S,b){C.preventDefault(),s.value=S,b&&t(b,S)}const{refs:g,updateRef:k}=mf();Ze({VPaginationBtn:{color:_(e,"color"),border:_(e,"border"),density:_(e,"density"),size:_(e,"size"),variant:_(e,"variant"),rounded:_(e,"rounded"),elevation:_(e,"elevation")}});const x=N(()=>f.value.map((C,S)=>{const b=w=>k(w,S);if(typeof C=="string")return{isActive:!1,key:`ellipsis-${S}`,page:C,props:{ref:b,ellipsis:!0,icon:!0,disabled:!0}};{const w=C===s.value;return{isActive:w,key:C,page:l(C),props:{ref:b,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:w?e.activeColor:e.color,ariaCurrent:w,ariaLabel:i(w?e.currentPageAriaLabel:e.pageAriaLabel,C),onClick:P=>M(P,C)}}}})),v=N(()=>{const C=!!e.disabled||s.value<=m.value,S=!!e.disabled||s.value>=m.value+p.value-1;return{first:e.showFirstLastPage?{icon:o.value?e.lastIcon:e.firstIcon,onClick:b=>M(b,m.value,"first"),disabled:C,ariaLabel:i(e.firstAriaLabel),ariaDisabled:C}:void 0,prev:{icon:o.value?e.nextIcon:e.prevIcon,onClick:b=>M(b,s.value-1,"prev"),disabled:C,ariaLabel:i(e.previousAriaLabel),ariaDisabled:C},next:{icon:o.value?e.prevIcon:e.nextIcon,onClick:b=>M(b,s.value+1,"next"),disabled:S,ariaLabel:i(e.nextAriaLabel),ariaDisabled:S},last:e.showFirstLastPage?{icon:o.value?e.firstIcon:e.lastIcon,onClick:b=>M(b,m.value+p.value-1,"last"),disabled:S,ariaLabel:i(e.lastAriaLabel),ariaDisabled:S}:void 0}});function D(){var S;const C=s.value-m.value;(S=g.value[C])==null||S.$el.focus()}function E(C){C.key===gl.left&&!e.disabled&&s.value>+e.start?(s.value=s.value-1,_e(D)):C.key===gl.right&&!e.disabled&&s.value<m.value+p.value-1&&(s.value=s.value+1,_e(D))}return $(()=>d(e.tag,{ref:H,class:["v-pagination",r.value,e.class],style:e.style,role:"navigation","aria-label":i(e.ariaLabel),onKeydown:E,"data-test":"v-pagination-root"},{default:()=>[d("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&d("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(v.value.first):d(ta,te({_as:"VPaginationBtn"},v.value.first),null)]),d("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(v.value.prev):d(ta,te({_as:"VPaginationBtn"},v.value.prev),null)]),x.value.map((C,S)=>d("li",{key:C.key,class:["v-pagination__item",{"v-pagination__item--is-active":C.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(C):d(ta,te({_as:"VPaginationBtn"},C.props),{default:()=>[C.page]})])),d("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(v.value.next):d(ta,te({_as:"VPaginationBtn"},v.value.next),null)]),e.showFirstLastPage&&d("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(v.value.last):d(ta,te({_as:"VPaginationBtn"},v.value.last),null)])])]})),{}}});function Nf(e){return Math.floor(Math.abs(e))*Math.sign(e)}const ff=I({scale:{type:[Number,String],default:.5},...oe()},"VParallax"),Mf=W()({name:"VParallax",props:ff(),setup(e,a){let{slots:n}=a;const{intersectionRef:t,isIntersecting:s}=zo(),{resizeRef:i,contentRect:l}=dn(),{height:o}=ot(),r=ae();ka(()=>{var m;t.value=i.value=(m=r.value)==null?void 0:m.$el});let c;ce(s,m=>{m?(c=Ro(t.value),c=c===document.scrollingElement?document:c,c.addEventListener("scroll",p,{passive:!0}),p()):c.removeEventListener("scroll",p)}),Sa(()=>{c==null||c.removeEventListener("scroll",p)}),ce(o,p),ce(()=>{var m;return(m=l.value)==null?void 0:m.height},p);const u=N(()=>1-oa(+e.scale));let H=-1;function p(){s.value&&(cancelAnimationFrame(H),H=requestAnimationFrame(()=>{var v;const m=((v=r.value)==null?void 0:v.$el).querySelector(".v-img__img");if(!m)return;const h=c instanceof Document?document.documentElement.clientHeight:c.clientHeight,A=c instanceof Document?window.scrollY:c.scrollTop,f=t.value.getBoundingClientRect().top+A,M=l.value.height,g=f+(M-h)/2,k=Nf((A-g)*u.value),x=Math.max(1,(u.value*(h-M)+M)/M);m.style.setProperty("transform",`translateY(${k}px) scale(${x})`)}))}return $(()=>d(it,{class:["v-parallax",{"v-parallax--active":s.value},e.class],style:e.style,ref:r,cover:!0,onLoadstart:p,onLoad:p},n)),{}}}),Cf=I({...Ei({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),gf=W()({name:"VRadio",props:Cf(),setup(e,a){let{slots:n}=a;return $(()=>d(wt,te(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),n)),{}}});const kf=I({height:{type:[Number,String],default:"auto"},...Dn(),...Hn(Xo(),["multiple"]),trueIcon:{type:Ce,default:"$radioOn"},falseIcon:{type:Ce,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Sf=W()({name:"VRadioGroup",inheritAttrs:!1,props:kf(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:n,slots:t}=a;const s=Ma(),i=N(()=>e.id||`radio-group-${s}`),l=fe(e,"modelValue");return $(()=>{const[o,r]=lt(n),[c,u]=pa.filterProps(e),[H,p]=wt.filterProps(e),m=t.label?t.label({label:e.label,props:{for:i.value}}):e.label;return d(pa,te({class:["v-radio-group",e.class],style:e.style},o,c,{modelValue:l.value,"onUpdate:modelValue":h=>l.value=h,id:i.value}),{...t,default:h=>{let{id:A,messagesId:f,isDisabled:M,isReadonly:g}=h;return d(me,null,[m&&d(Qt,{id:A.value},{default:()=>[m]}),d(nu,te(H,{id:A.value,"aria-describedby":f.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:M.value,readonly:g.value,"aria-labelledby":m?A.value:void 0,multiple:!1},r,{modelValue:l.value,"onUpdate:modelValue":k=>l.value=k}),t)])}})}),{}}}),Tf=I({...wi(),...Dn(),...Qu(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),vf=W()({name:"VRangeSlider",props:Tf(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,a){let{slots:n,emit:t}=a;const s=ae(),i=ae(),l=ae(),{rtlClasses:o}=Ha();function r(S){if(!s.value||!i.value)return;const b=Wl(S,s.value.$el,e.direction),w=Wl(S,i.value.$el,e.direction),P=Math.abs(b),B=Math.abs(w);return P<B||P===B&&b<0?s.value.$el:i.value.$el}const c=Ou(e),u=fe(e,"modelValue",void 0,S=>S!=null&&S.length?S.map(b=>c.roundValue(b)):[0,0]),{activeThumbRef:H,hasLabels:p,max:m,min:h,mousePressed:A,onSliderMousedown:f,onSliderTouchstart:M,position:g,trackContainerRef:k}=Ku({props:e,steps:c,onSliderStart:()=>{t("start",u.value)},onSliderEnd:S=>{var P;let{value:b}=S;const w=H.value===((P=s.value)==null?void 0:P.$el)?[b,u.value[1]]:[u.value[0],b];!e.strict&&w[0]<w[1]&&(u.value=w),t("end",u.value)},onSliderMove:S=>{var B,F,ne,q;let{value:b}=S;const[w,P]=u.value;!e.strict&&w===P&&w!==h.value&&(H.value=b>w?(B=i.value)==null?void 0:B.$el:(F=s.value)==null?void 0:F.$el,(ne=H.value)==null||ne.focus()),H.value===((q=s.value)==null?void 0:q.$el)?u.value=[Math.min(b,P),P]:u.value=[w,Math.max(w,b)]},getActiveThumb:r}),{isFocused:x,focus:v,blur:D}=_n(e),E=N(()=>g(u.value[0])),C=N(()=>g(u.value[1]));return $(()=>{const[S,b]=pa.filterProps(e),w=!!(e.label||n.label||n.prepend);return d(pa,te({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!n["tick-label"]||p.value,"v-slider--focused":x.value,"v-slider--pressed":A.value,"v-slider--disabled":e.disabled},o.value,e.class],style:e.style,ref:l},S,{focused:x.value}),{...n,prepend:w?P=>{var B,F;return d(me,null,[((B=n.label)==null?void 0:B.call(n,P))??e.label?d(Qt,{class:"v-slider__label",text:e.label},null):void 0,(F=n.prepend)==null?void 0:F.call(n,P)])}:void 0,default:P=>{var ne,q;let{id:B,messagesId:F}=P;return d("div",{class:"v-slider__container",onMousedown:f,onTouchstartPassive:M},[d("input",{id:`${B.value}_start`,name:e.name||B.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:u.value[0]},null),d("input",{id:`${B.value}_stop`,name:e.name||B.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:u.value[1]},null),d(Xu,{ref:k,start:E.value,stop:C.value},{"tick-label":n["tick-label"]}),d(zl,{ref:s,"aria-describedby":F.value,focused:x&&H.value===((ne=s.value)==null?void 0:ne.$el),modelValue:u.value[0],"onUpdate:modelValue":U=>u.value=[U,u.value[1]],onFocus:U=>{var L,j,Y,O;v(),H.value=(L=s.value)==null?void 0:L.$el,u.value[0]===u.value[1]&&u.value[1]===h.value&&U.relatedTarget!==((j=i.value)==null?void 0:j.$el)&&((Y=s.value)==null||Y.$el.blur(),(O=i.value)==null||O.$el.focus())},onBlur:()=>{D(),H.value=void 0},min:h.value,max:u.value[1],position:E.value},{"thumb-label":n["thumb-label"]}),d(zl,{ref:i,"aria-describedby":F.value,focused:x&&H.value===((q=i.value)==null?void 0:q.$el),modelValue:u.value[1],"onUpdate:modelValue":U=>u.value=[u.value[0],U],onFocus:U=>{var L,j,Y,O;v(),H.value=(L=i.value)==null?void 0:L.$el,u.value[0]===u.value[1]&&u.value[0]===m.value&&U.relatedTarget!==((j=s.value)==null?void 0:j.$el)&&((Y=i.value)==null||Y.$el.blur(),(O=s.value)==null||O.$el.focus())},onBlur:()=>{D(),H.value=void 0},min:u.value[0],max:m.value,position:C.value},{"thumb-label":n["thumb-label"]})])}})}),{}}});const xf=I({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:Ce,default:"$ratingEmpty"},fullIcon:{type:Ce,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...oe(),...da(),...yn(),...ve(),...Ie()},"VRating"),yf=W()({name:"VRating",props:xf(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{t}=Ta(),{themeClasses:s}=Ge(e),i=fe(e,"modelValue"),l=N(()=>oa(parseFloat(i.value),0,+e.length)),o=N(()=>Ya(Number(e.length),1)),r=N(()=>o.value.flatMap(A=>e.halfIncrements?[A-.5,A]:[A])),c=ie(-1),u=N(()=>r.value.map(A=>{const f=e.hover&&c.value>-1,M=l.value>=A,g=c.value>=A,x=(f?g:M)?e.fullIcon:e.emptyIcon,v=e.activeColor??e.color,D=M||g?v:e.color;return{isFilled:M,isHovered:g,icon:x,color:D}})),H=N(()=>[0,...r.value].map(A=>{function f(){c.value=A}function M(){c.value=-1}function g(){e.disabled||e.readonly||(i.value=l.value===A&&e.clearable?0:A)}return{onMouseenter:e.hover?f:void 0,onMouseleave:e.hover?M:void 0,onClick:g}})),p=N(()=>e.name??`v-rating-${Ma()}`);function m(A){var C,S;let{value:f,index:M,showStar:g=!0}=A;const{onMouseenter:k,onMouseleave:x,onClick:v}=H.value[M+1],D=`${p.value}-${String(f).replace(".","-")}`,E={color:(C=u.value[M])==null?void 0:C.color,density:e.density,disabled:e.disabled,icon:(S=u.value[M])==null?void 0:S.icon,ripple:e.ripple,size:e.size,variant:"plain"};return d(me,null,[d("label",{for:D,class:{"v-rating__item--half":e.halfIncrements&&f%1>0,"v-rating__item--full":e.halfIncrements&&f%1===0},onMouseenter:k,onMouseleave:x,onClick:v},[d("span",{class:"v-rating__hidden"},[t(e.itemAriaLabel,f,e.length)]),g?n.item?n.item({...u.value[M],props:E,value:f,index:M,rating:l.value}):d(ta,te({"aria-label":t(e.itemAriaLabel,f,e.length)},E),null):void 0]),d("input",{class:"v-rating__hidden",name:p.value,id:D,type:"radio",value:f,checked:l.value===f,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function h(A){return n["item-label"]?n["item-label"](A):A.label?d("span",null,[A.label]):d("span",null,[we(" ")])}return $(()=>{var f;const A=!!((f=e.itemLabels)!=null&&f.length)||n["item-label"];return d(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},s.value,e.class],style:e.style},{default:()=>[d(m,{value:0,index:-1,showStar:!1},null),o.value.map((M,g)=>{var k,x;return d("div",{class:"v-rating__wrapper"},[A&&e.itemLabelPosition==="top"?h({value:M,index:g,label:(k=e.itemLabels)==null?void 0:k[g]}):void 0,d("div",{class:"v-rating__item"},[e.halfIncrements?d(me,null,[d(m,{value:M-.5,index:g*2},null),d(m,{value:M,index:g*2+1},null)]):d(m,{value:M,index:g},null)]),A&&e.itemLabelPosition==="bottom"?h({value:M,index:g,label:(x=e.itemLabels)==null?void 0:x[g]}):void 0])})]})}),{}}});function Q1(e){const n=Math.abs(e);return Math.sign(e)*(n/((1/.501-2)*(1-n)+1))}function O1(e){let{selectedElement:a,containerSize:n,contentSize:t,isRtl:s,currentScrollOffset:i,isHorizontal:l}=e;const o=l?a.clientWidth:a.clientHeight,r=l?a.offsetLeft:a.offsetTop,c=s&&l?t-r-o:r,u=n+i,H=o+c,p=o*.4;return c<=i?i=Math.max(c-p,0):u<=H&&(i=Math.min(i-(u-H-p),t-n)),i}function Df(e){let{selectedElement:a,containerSize:n,contentSize:t,isRtl:s,isHorizontal:i}=e;const l=i?a.clientWidth:a.clientHeight,o=i?a.offsetLeft:a.offsetTop,r=s&&i?t-o-l/2-n/2:o+l/2-n/2;return Math.min(t-n,Math.max(0,r))}const pH=Symbol.for("vuetify:v-slide-group"),mH=I({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:pH},nextIcon:{type:Ce,default:"$next"},prevIcon:{type:Ce,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...oe(),...ve(),...Ut({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Xl=W()({name:"VSlideGroup",props:mH(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{isRtl:t}=Ha(),{mobile:s}=ot(),i=ut(e,e.symbol),l=ie(!1),o=ie(0),r=ie(0),c=ie(0),u=N(()=>e.direction==="horizontal"),{resizeRef:H,contentRect:p}=dn(),{resizeRef:m,contentRect:h}=dn(),A=N(()=>i.selected.value.length?i.items.value.findIndex(Y=>Y.id===i.selected.value[0]):-1),f=N(()=>i.selected.value.length?i.items.value.findIndex(Y=>Y.id===i.selected.value[i.selected.value.length-1]):-1);if(je){let Y=-1;ce(()=>[i.selected.value,p.value,h.value,u.value],()=>{cancelAnimationFrame(Y),Y=requestAnimationFrame(()=>{if(p.value&&h.value){const O=u.value?"width":"height";r.value=p.value[O],c.value=h.value[O],l.value=r.value+1<c.value}if(A.value>=0&&m.value){const O=m.value.children[f.value];A.value===0||!l.value?o.value=0:e.centerActive?o.value=Df({selectedElement:O,containerSize:r.value,contentSize:c.value,isRtl:t.value,isHorizontal:u.value}):l.value&&(o.value=O1({selectedElement:O,containerSize:r.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:o.value,isHorizontal:u.value}))}})})}const M=ie(!1);let g=0,k=0;function x(Y){const O=u.value?"clientX":"clientY";k=(t.value&&u.value?-1:1)*o.value,g=Y.touches[0][O],M.value=!0}function v(Y){if(!l.value)return;const O=u.value?"clientX":"clientY",de=t.value&&u.value?-1:1;o.value=de*(k+g-Y.touches[0][O])}function D(Y){const O=c.value-r.value;o.value<0||!l.value?o.value=0:o.value>=O&&(o.value=O),M.value=!1}function E(){H.value&&(H.value[u.value?"scrollLeft":"scrollTop"]=0)}const C=ie(!1);function S(Y){if(C.value=!0,!(!l.value||!m.value)){for(const O of Y.composedPath())for(const de of m.value.children)if(de===O){o.value=O1({selectedElement:de,containerSize:r.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:o.value,isHorizontal:u.value});return}}}function b(Y){C.value=!1}function w(Y){var O;!C.value&&!(Y.relatedTarget&&((O=m.value)!=null&&O.contains(Y.relatedTarget)))&&B()}function P(Y){m.value&&(u.value?Y.key==="ArrowRight"?B(t.value?"prev":"next"):Y.key==="ArrowLeft"&&B(t.value?"next":"prev"):Y.key==="ArrowDown"?B("next"):Y.key==="ArrowUp"&&B("prev"),Y.key==="Home"?B("first"):Y.key==="End"&&B("last"))}function B(Y){var O,de,Ne,Be,ke;if(m.value)if(!Y)(O=hs(m.value)[0])==null||O.focus();else if(Y==="next"){const z=(de=m.value.querySelector(":focus"))==null?void 0:de.nextElementSibling;z?z.focus():B("first")}else if(Y==="prev"){const z=(Ne=m.value.querySelector(":focus"))==null?void 0:Ne.previousElementSibling;z?z.focus():B("last")}else Y==="first"?(Be=m.value.firstElementChild)==null||Be.focus():Y==="last"&&((ke=m.value.lastElementChild)==null||ke.focus())}function F(Y){const O=o.value+(Y==="prev"?-1:1)*r.value;o.value=oa(O,0,c.value-r.value)}const ne=N(()=>{let Y=o.value>c.value-r.value?-(c.value-r.value)+Q1(c.value-r.value-o.value):-o.value;o.value<=0&&(Y=Q1(-o.value));const O=t.value&&u.value?-1:1;return{transform:`translate${u.value?"X":"Y"}(${O*Y}px)`,transition:M.value?"none":"",willChange:M.value?"transform":""}}),q=N(()=>({next:i.next,prev:i.prev,select:i.select,isSelected:i.isSelected})),U=N(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!s.value;case!0:return l.value||Math.abs(o.value)>0;case"mobile":return s.value||l.value||Math.abs(o.value)>0;default:return!s.value&&(l.value||Math.abs(o.value)>0)}}),L=N(()=>Math.abs(o.value)>0),j=N(()=>c.value>Math.abs(o.value)+r.value);return $(()=>d(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!u.value,"v-slide-group--has-affixes":U.value,"v-slide-group--is-overflowing":l.value},e.class],style:e.style,tabindex:C.value||i.selected.value.length?-1:0,onFocus:w},{default:()=>{var Y,O,de;return[U.value&&d("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!L.value}],onClick:()=>F("prev")},[((Y=n.prev)==null?void 0:Y.call(n,q.value))??d(Pl,null,{default:()=>[d(Fe,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),d("div",{key:"container",ref:H,class:"v-slide-group__container",onScroll:E},[d("div",{ref:m,class:"v-slide-group__content",style:ne.value,onTouchstartPassive:x,onTouchmovePassive:v,onTouchendPassive:D,onFocusin:S,onFocusout:b,onKeydown:P},[(O=n.default)==null?void 0:O.call(n,q.value)])]),U.value&&d("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!j.value}],onClick:()=>F("next")},[((de=n.next)==null?void 0:de.call(n,q.value))??d(Pl,null,{default:()=>[d(Fe,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:i.selected,scrollTo:F,scrollOffset:o,focus:B}}}),bf=W()({name:"VSlideGroupItem",props:Ft(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:n}=a;const t=Vt(e,pH);return()=>{var s;return(s=n.default)==null?void 0:s.call(n,{isSelected:t.isSelected.value,select:t.select,toggle:t.toggle,selectedClass:t.selectedClass.value})}}});const Pf=I({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Un({location:"bottom"}),...Wt(),...Ke(),...Ka(),...Ie(),...Hn(bs({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Ef=W()({name:"VSnackbar",props:Pf(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"modelValue"),{locationStyles:s}=Fn(e),{positionClasses:i}=zt(e),{scopeId:l}=Ot(),{themeClasses:o}=Ge(e),{colorClasses:r,colorStyles:c,variantClasses:u}=dt(e),{roundedClasses:H}=Ye(e),p=ae();ce(t,h),ce(()=>e.timeout,h),fa(()=>{t.value&&h()});let m=-1;function h(){window.clearTimeout(m);const f=Number(e.timeout);!t.value||f===-1||(m=window.setTimeout(()=>{t.value=!1},f))}function A(){window.clearTimeout(m)}return $(()=>{const[f]=kn.filterProps(e);return d(kn,te({ref:p,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},i.value,e.class],style:e.style},f,{modelValue:t.value,"onUpdate:modelValue":M=>t.value=M,contentProps:te({class:["v-snackbar__wrapper",o.value,r.value,H.value,u.value],style:[s.value,c.value],onPointerenter:A,onPointerleave:h},f.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},l),{default:()=>[ct(!1,"v-snackbar"),n.default&&d("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.default()]),n.actions&&d(Ue,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[d("div",{class:"v-snackbar__actions"},[n.actions()])]})],activator:n.activator})}),nn({},p)}});const wf=I({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Dn(),...Ei()},"VSwitch"),jl=W()({name:"VSwitch",inheritAttrs:!1,props:wf(),emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,a){let{attrs:n,slots:t}=a;const s=fe(e,"indeterminate"),i=fe(e,"modelValue"),{loaderClasses:l}=xs(e),{isFocused:o,focus:r,blur:c}=_n(e),u=N(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),H=Ma(),p=N(()=>e.id||`switch-${H}`);function m(){s.value&&(s.value=!1)}return $(()=>{const[h,A]=lt(n),[f,M]=pa.filterProps(e),[g,k]=wt.filterProps(e),x=ae();function v(D){var E,C;D.stopPropagation(),D.preventDefault(),(C=(E=x.value)==null?void 0:E.input)==null||C.click()}return d(pa,te({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":s.value},l.value,e.class],style:e.style},h,f,{id:p.value,focused:o.value}),{...t,default:D=>{let{id:E,messagesId:C,isDisabled:S,isReadonly:b,isValid:w}=D;return d(wt,te({ref:x},g,{modelValue:i.value,"onUpdate:modelValue":[P=>i.value=P,m],id:E.value,"aria-describedby":C.value,type:"checkbox","aria-checked":s.value?"mixed":void 0,disabled:S.value,readonly:b.value,onFocus:r,onBlur:c},A),{...t,default:()=>d("div",{class:"v-switch__track",onClick:v},null),input:P=>{let{inputNode:B,icon:F}=P;return d(me,null,[B,d("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":F||e.loading}]},[d(Uo,null,{default:()=>[e.loading?d(Pi,{name:"v-switch",active:!0,color:w.value===!1?void 0:u.value},{default:ne=>t.loader?t.loader(ne):d(Qo,{active:ne.isActive,color:ne.color,indeterminate:!0,size:"16",width:"2"},null)}):F&&d(Fe,{key:F,icon:F,size:"x-small"},null)]})])])}})}})}),{}}});const Rf=I({color:String,height:[Number,String],window:Boolean,...oe(),...ca(),...Gt(),...Ke(),...ve(),...Ie()},"VSystemBar"),Bf=W()({name:"VSystemBar",props:Rf(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{backgroundColorClasses:s,backgroundColorStyles:i}=ea(_(e,"color")),{elevationClasses:l}=ma(e),{roundedClasses:o}=Ye(e),{ssrBootStyles:r}=rt(),c=N(()=>e.height??(e.window?32:24)),{layoutItemStyles:u}=qt({id:e.name,order:N(()=>parseInt(e.order,10)),position:ie("top"),layoutSize:c,elementSize:c,active:N(()=>!0),absolute:_(e,"absolute")});return $(()=>d(e.tag,{class:["v-system-bar",{"v-system-bar--window":e.window},t.value,s.value,l.value,o.value,e.class],style:[i.value,u.value,r.value,e.style]},n)),{}}});const hH=Symbol.for("vuetify:v-tabs"),If=I({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Hn(Ko({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ui=W()({name:"VTab",props:If(),setup(e,a){let{slots:n,attrs:t}=a;const{textColorClasses:s,textColorStyles:i}=Na(e,"sliderColor"),l=N(()=>e.direction==="horizontal"),o=ie(!1),r=ae(),c=ae();function u(H){var m,h;let{value:p}=H;if(o.value=p,p){const A=(h=(m=r.value)==null?void 0:m.$el.parentElement)==null?void 0:h.querySelector(".v-tab--selected .v-tab__slider"),f=c.value;if(!A||!f)return;const M=getComputedStyle(A).color,g=A.getBoundingClientRect(),k=f.getBoundingClientRect(),x=l.value?"x":"y",v=l.value?"X":"Y",D=l.value?"right":"bottom",E=l.value?"width":"height",C=g[x],S=k[x],b=C>S?g[D]-k[D]:g[x]-k[x],w=Math.sign(b)>0?l.value?"right":"bottom":Math.sign(b)<0?l.value?"left":"top":"center",B=(Math.abs(b)+(Math.sign(b)<0?g[E]:k[E]))/Math.max(g[E],k[E]),F=g[E]/k[E],ne=1.5;et(f,{backgroundColor:[M,"currentcolor"],transform:[`translate${v}(${b}px) scale${v}(${F})`,`translate${v}(${b/ne}px) scale${v}(${(B-1)/ne+1})`,"none"],transformOrigin:Array(3).fill(w)},{duration:225,easing:As})}}return $(()=>{const[H]=ta.filterProps(e);return d(ta,te({symbol:hH,ref:r,class:["v-tab",e.class],style:e.style,tabindex:o.value?0:-1,role:"tab","aria-selected":String(o.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},H,t,{"onGroup:selected":u}),{default:()=>{var p;return[((p=n.default)==null?void 0:p.call(n))??e.text,!e.hideSlider&&d("div",{ref:c,class:["v-tab__slider",s.value],style:i.value},null)]}})}),{}}});function Lf(e){return e?e.map(a=>typeof a=="string"?{title:a,value:a}:a):[]}const Gf=I({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...mH({mandatory:"force"}),...da(),...ve()},"VTabs"),AH=W()({name:"VTabs",props:Gf(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"modelValue"),s=N(()=>Lf(e.items)),{densityClasses:i}=Ca(e),{backgroundColorClasses:l,backgroundColorStyles:o}=ea(_(e,"bgColor"));return Ze({VTab:{color:_(e,"color"),direction:_(e,"direction"),stacked:_(e,"stacked"),fixed:_(e,"fixedTabs"),sliderColor:_(e,"sliderColor"),hideSlider:_(e,"hideSlider")}}),$(()=>{const[r]=Xl.filterProps(e);return d(Xl,te(r,{modelValue:t.value,"onUpdate:modelValue":c=>t.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},i.value,l.value,e.class],style:[{"--v-tabs-height":le(e.height)},o.value,e.style],role:"tablist",symbol:hH}),{default:()=>[n.default?n.default():s.value.map(c=>d(ui,te(c,{key:c.title}),null))]})}),{}}});const NH=I({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...oe(),...da(),...ve(),...Ie()},"VTable"),$l=W()({name:"VTable",props:NH(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{densityClasses:s}=Ca(e);return $(()=>d(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!n.top,"v-table--has-bottom":!!n.bottom,"v-table--hover":e.hover},t.value,s.value,e.class],style:e.style},{default:()=>{var i,l,o;return[(i=n.top)==null?void 0:i.call(n),n.default?d("div",{class:"v-table__wrapper",style:{height:le(e.height)}},[d("table",null,[n.default()])]):(l=n.wrapper)==null?void 0:l.call(n),(o=n.bottom)==null?void 0:o.call(n)]}})),{}}});const qf=I({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Dn(),...qi()},"VTextarea"),Uf=W()({name:"VTextarea",directives:{Intersect:Di},inheritAttrs:!1,props:qf(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:n,emit:t,slots:s}=a;const i=fe(e,"modelValue"),{isFocused:l,focus:o,blur:r}=_n(e),c=N(()=>typeof e.counterValue=="function"?e.counterValue(i.value):(i.value||"").toString().length),u=N(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function H(w,P){var B,F;!e.autofocus||!w||(F=(B=P[0].target)==null?void 0:B.focus)==null||F.call(B)}const p=ae(),m=ae(),h=ie(""),A=ae(),f=N(()=>e.persistentPlaceholder||l.value||e.active);function M(){var w;A.value!==document.activeElement&&((w=A.value)==null||w.focus()),l.value||o()}function g(w){M(),t("click:control",w)}function k(w){t("mousedown:control",w)}function x(w){w.stopPropagation(),M(),_e(()=>{i.value="",bo(e["onClick:clear"],w)})}function v(w){var B;const P=w.target;if(i.value=P.value,(B=e.modelModifiers)!=null&&B.trim){const F=[P.selectionStart,P.selectionEnd];_e(()=>{P.selectionStart=F[0],P.selectionEnd=F[1]})}}const D=ae(),E=ae(+e.rows),C=N(()=>["plain","underlined"].includes(e.variant));ka(()=>{e.autoGrow||(E.value=+e.rows)});function S(){e.autoGrow&&_e(()=>{if(!D.value||!m.value)return;const w=getComputedStyle(D.value),P=getComputedStyle(m.value.$el),B=parseFloat(w.getPropertyValue("--v-field-padding-top"))+parseFloat(w.getPropertyValue("--v-input-padding-top"))+parseFloat(w.getPropertyValue("--v-field-padding-bottom")),F=D.value.scrollHeight,ne=parseFloat(w.lineHeight),q=Math.max(parseFloat(e.rows)*ne+B,parseFloat(P.getPropertyValue("--v-input-control-height"))),U=parseFloat(e.maxRows)*ne+B||1/0,L=oa(F??0,q,U);E.value=Math.floor((L-B)/ne),h.value=le(L)})}fa(S),ce(i,S),ce(()=>e.rows,S),ce(()=>e.maxRows,S),ce(()=>e.density,S);let b;return ce(D,w=>{w?(b=new ResizeObserver(S),b.observe(D.value)):b==null||b.disconnect()}),Sa(()=>{b==null||b.disconnect()}),$(()=>{const w=!!(s.counter||e.counter||e.counterValue),P=!!(w||s.details),[B,F]=lt(n),[{modelValue:ne,...q}]=pa.filterProps(e),[U]=Jo(e);return d(pa,te({ref:p,modelValue:i.value,"onUpdate:modelValue":L=>i.value=L,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":C.value},e.class],style:e.style},B,q,{centerAffix:E.value===1&&!C.value,focused:l.value}),{...s,default:L=>{let{isDisabled:j,isDirty:Y,isReadonly:O,isValid:de}=L;return d(Ps,te({ref:m,style:{"--v-textarea-control-height":h.value},onClick:g,onMousedown:k,"onClick:clear":x,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},U,{active:f.value||Y.value,centerAffix:E.value===1&&!C.value,dirty:Y.value||e.dirty,disabled:j.value,focused:l.value,error:de.value===!1}),{...s,default:Ne=>{let{props:{class:Be,...ke}}=Ne;return d(me,null,[e.prefix&&d("span",{class:"v-text-field__prefix"},[e.prefix]),$e(d("textarea",te({ref:A,class:Be,value:i.value,onInput:v,autofocus:e.autofocus,readonly:O.value,disabled:j.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:M,onBlur:r},ke,F),null),[[Ia("intersect"),{handler:H},null,{once:!0}]]),e.autoGrow&&$e(d("textarea",{class:[Be,"v-textarea__sizer"],"onUpdate:modelValue":z=>i.value=z,ref:D,readonly:!0,"aria-hidden":"true"},null),[[cm,i.value]]),e.suffix&&d("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:P?L=>{var j;return d(me,null,[(j=s.details)==null?void 0:j.call(s,L),w&&d(me,null,[d("span",null,null),d(Gi,{active:e.persistentCounter||l.value,value:c.value,max:u.value},s.counter)])])}:void 0})}),nn({},p,m,A)}});const Ff=I({withBackground:Boolean,...oe(),...Ie(),...ve()},"VThemeProvider"),Vf=W()({name:"VThemeProvider",props:Ff(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e);return()=>{var s;return e.withBackground?d(e.tag,{class:["v-theme-provider",t.value,e.class],style:e.style},{default:()=>{var i;return[(i=n.default)==null?void 0:i.call(n)]}}):(s=n.default)==null?void 0:s.call(n)}}});const _f=I({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...oe(),...da(),...ve(),...Ie()},"VTimeline"),Wf=W()({name:"VTimeline",props:_f(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=Ge(e),{densityClasses:s}=Ca(e),{rtlClasses:i}=Ha();Ze({VTimelineDivider:{lineColor:_(e,"lineColor")},VTimelineItem:{density:_(e,"density"),lineInset:_(e,"lineInset")}});const l=N(()=>{const r=e.side?e.side:e.density!=="default"?"end":null;return r&&`v-timeline--side-${r}`}),o=N(()=>{const r=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return r;case"start":return r[0];case"end":return r[1];default:return null}});return $(()=>d(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,o.value,{"v-timeline--inset-line":!!e.lineInset},t.value,s.value,l.value,i.value,e.class],style:[{"--v-timeline-line-thickness":le(e.lineThickness)},e.style]},n)),{}}}),zf=I({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:Ce,iconColor:String,lineColor:String,...oe(),...Ke(),...yn(),...ca()},"VTimelineDivider"),Qf=W()({name:"VTimelineDivider",props:zf(),setup(e,a){let{slots:n}=a;const{sizeClasses:t,sizeStyles:s}=_t(e,"v-timeline-divider__dot"),{backgroundColorStyles:i,backgroundColorClasses:l}=ea(_(e,"dotColor")),{roundedClasses:o}=Ye(e,"v-timeline-divider__dot"),{elevationClasses:r}=ma(e),{backgroundColorClasses:c,backgroundColorStyles:u}=ea(_(e,"lineColor"));return $(()=>d("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[d("div",{class:["v-timeline-divider__before",c.value],style:u.value},null),!e.hideDot&&d("div",{key:"dot",class:["v-timeline-divider__dot",r.value,o.value,t.value],style:s.value},[d("div",{class:["v-timeline-divider__inner-dot",l.value,o.value],style:i.value},[n.default?d(Ue,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},n.default):d(Fe,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),d("div",{class:["v-timeline-divider__after",c.value],style:u.value},null)])),{}}}),Of=I({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:Ce,iconColor:String,lineInset:[Number,String],...oe(),...za(),...ca(),...Ke(),...yn(),...ve()},"VTimelineItem"),Kf=W()({name:"VTimelineItem",props:Of(),setup(e,a){let{slots:n}=a;const{dimensionStyles:t}=Qa(e),s=ie(0),i=ae();return ce(i,l=>{var o;l&&(s.value=((o=l.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:o.getBoundingClientRect().width)??0)},{flush:"post"}),$(()=>{var l,o;return d("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":le(s.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${le(e.lineInset)})`:le(0)},e.style]},[d("div",{class:"v-timeline-item__body",style:t.value},[(l=n.default)==null?void 0:l.call(n)]),d(Qf,{ref:i,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:n.icon}),e.density!=="compact"&&d("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((o=n.opposite)==null?void 0:o.call(n))])])}),{}}}),Xf=I({...oe(),...Ka({variant:"text"})},"VToolbarItems"),jf=W()({name:"VToolbarItems",props:Xf(),setup(e,a){let{slots:n}=a;return Ze({VBtn:{color:_(e,"color"),height:"inherit",variant:_(e,"variant")}}),$(()=>{var t;return d("div",{class:["v-toolbar-items",e.class],style:e.style},[(t=n.default)==null?void 0:t.call(n)])}),{}}});const $f=I({id:String,text:String,...Hn(bs({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),Yf=W()({name:"VTooltip",props:$f(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=fe(e,"modelValue"),{scopeId:s}=Ot(),i=Ma(),l=N(()=>e.id||`v-tooltip-${i}`),o=ae(),r=N(()=>e.location.split(" ").length>1?e.location:e.location+" center"),c=N(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),u=N(()=>e.transition?e.transition:t.value?"scale-transition":"fade-transition"),H=N(()=>te({"aria-describedby":l.value},e.activatorProps));return $(()=>{const[p]=kn.filterProps(e);return d(kn,te({ref:o,class:["v-tooltip",e.class],style:e.style,id:l.value},p,{modelValue:t.value,"onUpdate:modelValue":m=>t.value=m,transition:u.value,absolute:!0,location:r.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:H.value,_disableGlobalStack:!0},s),{activator:n.activator,default:function(){var f;for(var m=arguments.length,h=new Array(m),A=0;A<m;A++)h[A]=arguments[A];return((f=n.default)==null?void 0:f.call(n,...h))??e.text}})}),nn({},o)}}),Jf=W()({name:"VValidation",props:ou(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=ru(e,"validation");return()=>{var s;return(s=n.default)==null?void 0:s.call(n,t)}}}),Zf=Object.freeze(Object.defineProperty({__proto__:null,VAlert:I5,VAlertTitle:eu,VApp:Bd,VAppBar:u5,VAppBarNavIcon:E5,VAppBarTitle:w5,VAutocomplete:Z2,VAvatar:Ln,VBadge:aA,VBanner:sA,VBannerActions:Eu,VBannerText:wu,VBottomNavigation:lA,VBreadcrumbs:dA,VBreadcrumbsDivider:Ru,VBreadcrumbsItem:Bu,VBtn:ta,VBtnGroup:Rl,VBtnToggle:N5,VCard:pA,VCardActions:Iu,VCardItem:qu,VCardSubtitle:Lu,VCardText:Uu,VCardTitle:Gu,VCarousel:SA,VCarouselItem:vA,VCheckbox:W5,VCheckboxBtn:Cn,VChip:xe,VChipGroup:O5,VClassIcon:Go,VCode:xA,VCol:as,VColorPicker:mN,VCombobox:NN,VComponentIcon:yl,VContainer:eH,VCounter:Gi,VDefaultsProvider:Ue,VDialog:MN,VDialogBottomTransition:jh,VDialogTopTransition:$h,VDialogTransition:xi,VDivider:ri,VExpandTransition:yi,VExpandXTransition:Vo,VExpansionPanel:vN,VExpansionPanelText:$u,VExpansionPanelTitle:Ju,VExpansionPanels:kN,VFabTransition:Xh,VFadeTransition:Pl,VField:Ps,VFieldLabel:es,VFileInput:yN,VFooter:bN,VForm:Zu,VHover:WN,VIcon:Fe,VImg:it,VInput:pa,VItem:ON,VItemGroup:QN,VKbd:KN,VLabel:Qt,VLayout:jN,VLayoutItem:YN,VLazy:ZN,VLigatureIcon:eh,VList:Bi,VListGroup:Gl,VListImg:p2,VListItem:gn,VListItemAction:h2,VListItemMedia:N2,VListItemSubtitle:Au,VListItemTitle:Nu,VListSubheader:fu,VLocaleProvider:af,VMain:HH,VMenu:Li,VMessages:iu,VNavigationDrawer:Hf,VNoSsr:pf,VOverlay:kn,VPagination:Af,VParallax:Mf,VProgressCircular:Qo,VProgressLinear:Oo,VRadio:gf,VRadioGroup:Sf,VRangeSlider:vf,VRating:yf,VResponsive:El,VRow:Kl,VScaleTransition:Uo,VScrollXReverseTransition:Jh,VScrollXTransition:Yh,VScrollYReverseTransition:e5,VScrollYTransition:Zh,VSelect:gt,VSelectionControl:wt,VSelectionControlGroup:nu,VSheet:Ol,VSlideGroup:Xl,VSlideGroupItem:bf,VSlideXReverseTransition:n5,VSlideXTransition:a5,VSlideYReverseTransition:t5,VSlideYTransition:Fo,VSlider:Ql,VSnackbar:Ef,VSpacer:VN,VSvgIcon:Lo,VSwitch:jl,VSystemBar:Bf,VTab:ui,VTable:$l,VTabs:AH,VTextField:ha,VTextarea:Uf,VThemeProvider:Vf,VTimeline:Wf,VTimelineItem:Kf,VToolbar:wl,VToolbarItems:jf,VToolbarTitle:qo,VTooltip:Yf,VValidation:Jf,VVirtualScroll:Fi,VWindow:di,VWindowItem:ks},Symbol.toStringTag,{value:"Module"}));function eM(e,a){const n=a.modifiers||{},t=a.value,{once:s,immediate:i,...l}=n,o=!Object.keys(l).length,{handler:r,options:c}=typeof t=="object"?t:{handler:t,options:{attributes:(l==null?void 0:l.attr)??o,characterData:(l==null?void 0:l.char)??o,childList:(l==null?void 0:l.child)??o,subtree:(l==null?void 0:l.sub)??o}},u=new MutationObserver(function(){let H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],p=arguments.length>1?arguments[1]:void 0;r==null||r(H,p),s&&fH(e,a)});i&&(r==null||r([],u)),e._mutate=Object(e._mutate),e._mutate[a.instance.$.uid]={observer:u},u.observe(e,c)}function fH(e,a){var n;(n=e._mutate)!=null&&n[a.instance.$.uid]&&(e._mutate[a.instance.$.uid].observer.disconnect(),delete e._mutate[a.instance.$.uid])}const aM={mounted:eM,unmounted:fH};function nM(e,a){var s,i;const n=a.value,t={passive:!((s=a.modifiers)!=null&&s.active)};window.addEventListener("resize",n,t),e._onResize=Object(e._onResize),e._onResize[a.instance.$.uid]={handler:n,options:t},(i=a.modifiers)!=null&&i.quiet||n()}function tM(e,a){var s;if(!((s=e._onResize)!=null&&s[a.instance.$.uid]))return;const{handler:n,options:t}=e._onResize[a.instance.$.uid];window.removeEventListener("resize",n,t),delete e._onResize[a.instance.$.uid]}const sM={mounted:nM,unmounted:tM};function MH(e,a){const{self:n=!1}=a.modifiers??{},t=a.value,s=typeof t=="object"&&t.options||{passive:!0},i=typeof t=="function"||"handleEvent"in t?t:t.handler,l=n?e:a.arg?document.querySelector(a.arg):window;l&&(l.addEventListener("scroll",i,s),e._onScroll=Object(e._onScroll),e._onScroll[a.instance.$.uid]={handler:i,options:s,target:n?void 0:l})}function CH(e,a){var i;if(!((i=e._onScroll)!=null&&i[a.instance.$.uid]))return;const{handler:n,options:t,target:s=e}=e._onScroll[a.instance.$.uid];s.removeEventListener("scroll",n,t),delete e._onScroll[a.instance.$.uid]}function iM(e,a){a.value!==a.oldValue&&(CH(e,a),MH(e,a))}const lM={mounted:MH,unmounted:CH,updated:iM},oM=Object.freeze(Object.defineProperty({__proto__:null,ClickOutside:Pu,Intersect:Fd,Mutate:aM,Resize:sM,Ripple:Vn,Scroll:lM,Touch:tr},Symbol.toStringTag,{value:"Module"}));const rM=I({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),gH=Symbol.for("vuetify:data-table-pagination");function cM(e){const a=fe(e,"page",void 0,t=>+(t??1)),n=fe(e,"itemsPerPage",void 0,t=>+(t??10));return{page:a,itemsPerPage:n}}function dM(e){const{page:a,itemsPerPage:n,itemsLength:t}=e,s=N(()=>n.value===-1?0:n.value*(a.value-1)),i=N(()=>n.value===-1?t.value:Math.min(t.value,s.value+n.value)),l=N(()=>n.value===-1||t.value===0?1:Math.ceil(t.value/n.value));ka(()=>{a.value>l.value&&(a.value=l.value)});function o(p){n.value=p,a.value=1}function r(){a.value=oa(a.value+1,1,l.value)}function c(){a.value=oa(a.value-1,1,l.value)}function u(p){a.value=oa(p,1,l.value)}const H={page:a,itemsPerPage:n,startIndex:s,stopIndex:i,pageCount:l,itemsLength:t,nextPage:r,prevPage:c,setPage:u,setItemsPerPage:o};return Oe(gH,H),H}function uM(){const e=Re(gH);if(!e)throw new Error("Missing pagination!");return e}function HM(e){const{items:a,startIndex:n,stopIndex:t,itemsPerPage:s}=e;return{paginatedItems:N(()=>s.value<=0?a.value:a.value.slice(n.value,t.value))}}const kH=I({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),K1=W()({name:"VDataTableFooter",props:kH(),setup(e,a){let{slots:n}=a;const{t}=Ta(),{page:s,pageCount:i,startIndex:l,stopIndex:o,itemsLength:r,itemsPerPage:c,setItemsPerPage:u}=uM(),H=N(()=>e.itemsPerPageOptions.map(p=>({...p,title:t(p.title)})));return()=>{var p;return d("div",{class:"v-data-table-footer"},[(p=n.prepend)==null?void 0:p.call(n),d("div",{class:"v-data-table-footer__items-per-page"},[d("span",null,[t(e.itemsPerPageText)]),d(gt,{items:H.value,modelValue:c.value,"onUpdate:modelValue":m=>u(Number(m)),density:"compact",variant:"outlined","hide-details":!0},null)]),d("div",{class:"v-data-table-footer__info"},[d("div",null,[t(e.pageText,r.value?l.value+1:0,o.value,r.value)])]),d("div",{class:"v-data-table-footer__pagination"},[d(ta,{icon:e.firstIcon,variant:"plain",onClick:()=>s.value=1,disabled:s.value===1,"aria-label":t(e.firstPageLabel)},null),d(ta,{icon:e.prevIcon,variant:"plain",onClick:()=>s.value=Math.max(1,s.value-1),disabled:s.value===1,"aria-label":t(e.prevPageLabel)},null),e.showCurrentPage&&d("span",{key:"page",class:"v-data-table-footer__page"},[s.value]),d(ta,{icon:e.nextIcon,variant:"plain",onClick:()=>s.value=Math.min(i.value,s.value+1),disabled:s.value===i.value,"aria-label":t(e.nextPageLabel)},null),d(ta,{icon:e.lastIcon,variant:"plain",onClick:()=>s.value=i.value,disabled:s.value===i.value,"aria-label":t(e.lastPageLabel)},null)])])}}}),or=Vm({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,a)=>{let{slots:n,attrs:t}=a;const s=e.tag??"td";return d(s,te({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:le(e.height),width:le(e.width),left:le(e.fixedOffset||null)}},t),{default:()=>{var i;return[(i=n.default)==null?void 0:i.call(n)]}})}),pM=I({headers:{type:Array,default:()=>[]}},"DataTable-header"),SH=Symbol.for("vuetify:data-table-headers");function mM(e,a){const n=ae([]),t=ae([]);ka(()=>{var m,h,A;const i=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],l=i.flatMap((f,M)=>f.map(g=>({column:g,row:M}))),o=i.length,r={title:"",sortable:!1},c={...r,width:48};if((m=a==null?void 0:a.groupBy)!=null&&m.value.length){const f=l.findIndex(M=>{let{column:g}=M;return g.key==="data-table-group"});f<0?l.unshift({column:{...r,key:"data-table-group",title:"Group",rowspan:o},row:0}):l.splice(f,1,{column:{...r,...l[f].column},row:l[f].row})}if((h=a==null?void 0:a.showSelect)!=null&&h.value){const f=l.findIndex(M=>{let{column:g}=M;return g.key==="data-table-select"});f<0?l.unshift({column:{...c,key:"data-table-select",rowspan:o},row:0}):l.splice(f,1,{column:{...c,...l[f].column},row:l[f].row})}if((A=a==null?void 0:a.showExpand)!=null&&A.value){const f=l.findIndex(M=>{let{column:g}=M;return g.key==="data-table-expand"});f<0?l.push({column:{...c,key:"data-table-expand",rowspan:o},row:0}):l.splice(f,1,{column:{...c,...l[f].column},row:l[f].row})}const u=Ya(o).map(()=>[]),H=Ya(o).fill(0);l.forEach(f=>{let{column:M,row:g}=f,k=M.key;k==null&&(k="");for(let x=g;x<=g+(M.rowspan??1)-1;x++)u[x].push({...M,key:k,fixedOffset:H[x],sortable:M.sortable??!!M.key}),H[x]+=Number(M.width??0)}),u.forEach(f=>{for(let M=f.length;M--;M>=0)if(f[M].fixed){f[M].lastFixed=!0;return}});const p=new Set;n.value=u.map(f=>{const M=[];for(const g of f)p.has(g.key)||(p.add(g.key),M.push(g));return M}),t.value=u.at(-1)??[]});const s={headers:n,columns:t};return Oe(SH,s),s}function Vi(){const e=Re(SH);if(!e)throw new Error("Missing headers!");return e}const hM={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:a,value:n}=e;return new Set(n?[(t=a[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:a}=e;return a}},TH={showSelectAll:!0,allSelected:e=>{let{currentPage:a}=e;return a},select:e=>{let{items:a,value:n,selected:t}=e;for(const s of a)n?t.add(s.value):t.delete(s.value);return t},selectAll:e=>{let{value:a,currentPage:n,selected:t}=e;return TH.select({items:n,value:a,selected:t})}},vH={showSelectAll:!0,allSelected:e=>{let{allItems:a}=e;return a},select:e=>{let{items:a,value:n,selected:t}=e;for(const s of a)n?t.add(s.value):t.delete(s.value);return t},selectAll:e=>{let{value:a,allItems:n,selected:t}=e;return vH.select({items:n,value:a,selected:t})}},AM=I({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]}},"DataTable-select"),xH=Symbol.for("vuetify:data-table-selection");function NM(e,a){let{allItems:n,currentPage:t}=a;const s=fe(e,"modelValue",e.modelValue,f=>new Set(f),f=>[...f.values()]),i=N(()=>n.value.filter(f=>f.selectable)),l=N(()=>t.value.filter(f=>f.selectable)),o=N(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return hM;case"all":return vH;case"page":default:return TH}});function r(f){return ya(f).every(M=>s.value.has(M.value))}function c(f){return ya(f).some(M=>s.value.has(M.value))}function u(f,M){const g=o.value.select({items:f,value:M,selected:new Set(s.value)});s.value=g}function H(f){u([f],!r([f]))}function p(f){const M=o.value.selectAll({value:f,allItems:i.value,currentPage:l.value,selected:new Set(s.value)});s.value=M}const m=N(()=>s.value.size>0),h=N(()=>{const f=o.value.allSelected({allItems:i.value,currentPage:l.value});return r(f)}),A={toggleSelect:H,select:u,selectAll:p,isSelected:r,isSomeSelected:c,someSelected:m,allSelected:h,showSelectAll:o.value.showSelectAll};return Oe(xH,A),A}function _i(){const e=Re(xH);if(!e)throw new Error("Missing selection!");return e}const fM=I({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),yH=Symbol.for("vuetify:data-table-sort");function MM(e){const a=fe(e,"sortBy"),n=_(e,"mustSort"),t=_(e,"multiSort");return{sortBy:a,mustSort:n,multiSort:t}}function CM(e){const{sortBy:a,mustSort:n,multiSort:t,page:s}=e,i=r=>{let c=a.value.map(H=>({...H}))??[];const u=c.find(H=>H.key===r.key);u?u.order==="desc"?n.value?u.order="asc":c=c.filter(H=>H.key!==r.key):u.order="desc":t.value?c=[...c,{key:r.key,order:"asc"}]:c=[{key:r.key,order:"asc"}],a.value=c,s&&(s.value=1)};function l(r){return!!a.value.find(c=>c.key===r.key)}const o={sortBy:a,toggleSort:i,isSorted:l};return Oe(yH,o),o}function gM(){const e=Re(yH);if(!e)throw new Error("Missing sort!");return e}function kM(e,a,n){const t=Ta();return{sortedItems:N(()=>n.value.length?SM(a.value,n.value,t.current.value,e.customKeySort):a.value)}}function SM(e,a,n,t){const s=new Intl.Collator(n,{sensitivity:"accent",usage:"sort"});return[...e].sort((i,l)=>{for(let o=0;o<a.length;o++){const r=a[o].key,c=a[o].order??"asc";if(c===!1)continue;let u=bt(i.raw,r),H=bt(l.raw,r);if(c==="desc"&&([u,H]=[H,u]),t!=null&&t[r]){const p=t[r](u,H);if(!p)continue;return p}if(u instanceof Date&&H instanceof Date)return u.getTime()-H.getTime();if([u,H]=[u,H].map(p=>p!=null?p.toString().toLocaleLowerCase():p),u!==H)return Us(u)&&Us(H)?0:Us(u)?-1:Us(H)?1:!isNaN(u)&&!isNaN(H)?Number(u)-Number(H):s.compare(u,H)}return 0})}const DH=I({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:Ce,default:"$sortAsc"},sortDescIcon:{type:Ce,default:"$sortDesc"},...bi()},"VDataTableHeaders"),X1=W()({name:"VDataTableHeaders",props:DH(),setup(e,a){let{slots:n,emit:t}=a;const{toggleSort:s,sortBy:i,isSorted:l}=gM(),{someSelected:o,allSelected:r,selectAll:c,showSelectAll:u}=_i(),{columns:H,headers:p}=Vi(),{loaderClasses:m}=xs(e),h=(x,v)=>{if(!(!e.sticky&&!x.fixed))return{position:"sticky",zIndex:x.fixed?4:e.sticky?3:void 0,left:x.fixed?le(x.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${v})`:void 0}};function A(x){const v=i.value.find(D=>D.key===x.key);return v?v.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:f,backgroundColorStyles:M}=ea(e,"color"),g=N(()=>({headers:p.value,columns:H.value,toggleSort:s,isSorted:l,sortBy:i.value,someSelected:o.value,allSelected:r.value,selectAll:c,getSortIcon:A,getFixedStyles:h})),k=x=>{let{column:v,x:D,y:E}=x;const C=v.key==="data-table-select"||v.key==="data-table-expand";return d(or,{tag:"th",align:v.align,class:["v-data-table__th",{"v-data-table__th--sortable":v.sortable,"v-data-table__th--sorted":l(v)},m.value],style:{width:le(v.width),minWidth:le(v.width),...h(v,E)},colspan:v.colspan,rowspan:v.rowspan,onClick:v.sortable?()=>s(v):void 0,lastFixed:v.lastFixed,noPadding:C},{default:()=>{var w;const S=`column.${v.key}`,b={column:v,selectAll:c,isSorted:l,toggleSort:s,sortBy:i.value,someSelected:o.value,allSelected:r.value,getSortIcon:A};return n[S]?n[S](b):v.key==="data-table-select"?((w=n["column.data-table-select"])==null?void 0:w.call(n,b))??(u&&d(Cn,{modelValue:r.value,indeterminate:o.value&&!r.value,"onUpdate:modelValue":c},null)):d("div",{class:"v-data-table-header__content"},[d("span",null,[v.title]),v.sortable&&d(Fe,{key:"icon",class:"v-data-table-header__sort-icon",icon:A(v)},null),e.multiSort&&l(v)&&d("div",{key:"badge",class:["v-data-table-header__sort-badge",...f.value],style:M.value},[i.value.findIndex(P=>P.key===v.key)+1])])}})};$(()=>d(me,null,[n.headers?n.headers(g.value):p.value.map((x,v)=>d("tr",null,[x.map((D,E)=>d(k,{column:D,x:E,y:v},null))])),e.loading&&d("tr",{class:"v-data-table-progress"},[d("th",{colspan:H.value.length},[d(Pi,{name:"v-data-table-progress",active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:n.loader})])])]))}}),TM=I({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),bH=Symbol.for("vuetify:data-table-group");function vM(e){return{groupBy:fe(e,"groupBy")}}function xM(e){const{groupBy:a,sortBy:n}=e,t=ae(new Set),s=N(()=>a.value.map(c=>({...c,order:c.order??!1})).concat(n.value));function i(c){return t.value.has(c.id)}function l(c){const u=new Set(t.value);i(c)?u.delete(c.id):u.add(c.id),t.value=u}function o(c){function u(H){const p=[];for(const m of H.items)"type"in m&&m.type==="group"?p.push(...u(m)):p.push(m);return p}return u({type:"group",items:c,id:"dummy",key:"dummy",value:"dummy",depth:0})}const r={sortByWithGroups:s,toggleGroup:l,opened:t,groupBy:a,extractRows:o,isGroupOpen:i};return Oe(bH,r),r}function PH(){const e=Re(bH);if(!e)throw new Error("Missing group!");return e}function yM(e,a){if(!e.length)return[];const n=new Map;for(const t of e){const s=bt(t.raw,a);n.has(s)||n.set(s,[]),n.get(s).push(t)}return n}function EH(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!a.length)return[];const s=yM(e,a[0]),i=[],l=a.slice(1);return s.forEach((o,r)=>{const c=a[0],u=`${t}_${c}_${r}`;i.push({depth:n,id:u,key:c,value:r,items:l.length?EH(o,l,n+1,u):o,type:"group"})}),i}function wH(e,a){const n=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&n.push(t),(a.has(t.id)||t.value==null)&&n.push(...wH(t.items,a))):n.push(t);return n}function DM(e,a,n){return{flatItems:N(()=>{if(!a.value.length)return e.value;const s=EH(e.value,a.value.map(i=>i.key));return wH(s,n.value)})}}const bM=I({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),PM=W()({name:"VDataTableGroupHeaderRow",props:bM(),setup(e,a){let{slots:n}=a;const{isGroupOpen:t,toggleGroup:s,extractRows:i}=PH(),{isSelected:l,isSomeSelected:o,select:r}=_i(),{columns:c}=Vi(),u=N(()=>i([e.item]));return()=>d("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map(H=>{var p,m;if(H.key==="data-table-group"){const h=t(e.item)?"$expand":"$next",A=()=>s(e.item);return((p=n["data-table-group"])==null?void 0:p.call(n,{item:e.item,count:u.value.length,props:{icon:h,onClick:A}}))??d(or,{class:"v-data-table-group-header-row__column"},{default:()=>[d(ta,{size:"small",variant:"text",icon:h,onClick:A},null),d("span",null,[e.item.value]),d("span",null,[we("("),u.value.length,we(")")])]})}if(H.key==="data-table-select"){const h=l(u.value),A=o(u.value)&&!h,f=M=>r(u.value,M);return((m=n["data-table-select"])==null?void 0:m.call(n,{props:{modelValue:h,indeterminate:A,"onUpdate:modelValue":f}}))??d("td",null,[d(Cn,{modelValue:h,indeterminate:A,"onUpdate:modelValue":f},null)])}return d("td",null,null)})])}}),EM=I({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),RH=Symbol.for("vuetify:datatable:expanded");function wM(e){const a=_(e,"expandOnClick"),n=fe(e,"expanded",e.expanded,o=>new Set(o),o=>[...o.values()]);function t(o,r){const c=new Set(n.value);r?c.add(o.value):c.delete(o.value),n.value=c}function s(o){return n.value.has(o.value)}function i(o){t(o,!s(o))}const l={expand:t,expanded:n,expandOnClick:a,isExpanded:s,toggleExpand:i};return Oe(RH,l),l}function BH(){const e=Re(RH);if(!e)throw new Error("foo");return e}const RM=I({index:Number,item:Object,onClick:Function},"VDataTableRow"),BM=La({name:"VDataTableRow",props:RM(),setup(e,a){let{slots:n}=a;const{isSelected:t,toggleSelect:s}=_i(),{isExpanded:i,toggleExpand:l}=BH(),{columns:o}=Vi();$(()=>d("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!e.onClick}],onClick:e.onClick},[e.item&&o.value.map((r,c)=>d(or,{align:r.align,fixed:r.fixed,fixedOffset:r.fixedOffset,lastFixed:r.lastFixed,noPadding:r.key==="data-table-select"||r.key==="data-table-expand",width:r.width},{default:()=>{var m,h;const u=e.item,H=`item.${r.key}`,p={index:e.index,item:e.item,columns:o.value,isSelected:t,toggleSelect:s,isExpanded:i,toggleExpand:l};return n[H]?n[H](p):r.key==="data-table-select"?((m=n["item.data-table-select"])==null?void 0:m.call(n,p))??d(Cn,{disabled:!u.selectable,modelValue:t([u]),onClick:$r(()=>s(u),["stop"])},null):r.key==="data-table-expand"?((h=n["item.data-table-expand"])==null?void 0:h.call(n,p))??d(ta,{icon:i(u)?"$collapse":"$expand",size:"small",variant:"text",onClick:$r(()=>l(u),["stop"])},null):na(u.columns,r.key)}}))]))}}),IH=I({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number,"onClick:row":Function},"VDataTableRows"),j1=W()({name:"VDataTableRows",props:IH(),setup(e,a){let{emit:n,slots:t}=a;const{columns:s}=Vi(),{expandOnClick:i,toggleExpand:l,isExpanded:o}=BH(),{isSelected:r,toggleSelect:c}=_i(),{toggleGroup:u,isGroupOpen:H}=PH(),{t:p}=Ta();return $(()=>{var m;return e.loading&&t.loading?d("tr",{class:"v-data-table-rows-loading",key:"loading"},[d("td",{colspan:s.value.length},[t.loading()])]):!e.loading&&!e.items.length&&!e.hideNoData?d("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[d("td",{colspan:s.value.length},[((m=t["no-data"])==null?void 0:m.call(t))??p(e.noDataText)])]):d(me,null,[e.items.map((h,A)=>{var g;if(h.type==="group")return t["group-header"]?t["group-header"]({index:A,item:h,columns:s.value,isExpanded:o,toggleExpand:l,isSelected:r,toggleSelect:c,toggleGroup:u,isGroupOpen:H}):d(PM,{key:`group-header_${h.id}`,item:h},t);const f={index:A,item:h,columns:s.value,isExpanded:o,toggleExpand:l,isSelected:r,toggleSelect:c},M={...f,props:{key:`item_${h.key??h.index}`,onClick:i.value||e["onClick:row"]?k=>{var x;i.value&&l(h),(x=e["onClick:row"])==null||x.call(e,k,{item:h})}:void 0,index:A,item:h}};return d(me,null,[t.item?t.item(M):d(BM,M.props,t),o(h)&&((g=t["expanded-row"])==null?void 0:g.call(t,f))])})])}),{}}}),IM=I({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataTable-items");function LM(e,a,n,t){const s=e.returnObject?a:na(a,e.itemValue),i=na(a,e.itemSelectable,!0),l=t.reduce((o,r)=>(o[r.key]=na(a,r.value??r.key),o),{});return{type:"item",key:e.returnObject?na(a,e.itemValue):s,index:n,value:s,selectable:i,columns:l,raw:a}}function GM(e,a,n){return a.map((t,s)=>LM(e,t,s,n))}function qM(e,a){return{items:N(()=>GM(e,e.items,a.value))}}function UM(e){let{page:a,itemsPerPage:n,sortBy:t,groupBy:s,search:i}=e;const l=ra("VDataTable"),o=N(()=>({page:a.value,itemsPerPage:n.value,sortBy:t.value,groupBy:s.value,search:i.value}));ce(()=>i==null?void 0:i.value,()=>{a.value=1});let r=null;ce(o,()=>{qn(r,o.value)||(l.emit("update:options",o.value),r=o.value)},{deep:!0,immediate:!0})}const FM=I({...IH(),width:[String,Number],search:String,...EM(),...TM(),...pM(),...IM(),...AM(),...fM(),...DH(),...NH()},"DataTable"),VM=I({...rM(),...FM(),...ar(),...kH()},"VDataTable"),_M=W()({name:"VDataTable",props:VM(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,a){let{emit:n,slots:t}=a;const{groupBy:s}=vM(e),{sortBy:i,multiSort:l,mustSort:o}=MM(e),{page:r,itemsPerPage:c}=cM(e),{columns:u,headers:H}=mM(e,{groupBy:s,showSelect:_(e,"showSelect"),showExpand:_(e,"showExpand")}),{items:p}=qM(e,u),m=_(e,"search"),{filteredItems:h}=nr(e,p,m,{transform:Ne=>Ne.columns}),{toggleSort:A}=CM({sortBy:i,multiSort:l,mustSort:o,page:r}),{sortByWithGroups:f,opened:M,extractRows:g,isGroupOpen:k,toggleGroup:x}=xM({groupBy:s,sortBy:i}),{sortedItems:v}=kM(e,h,f),{flatItems:D}=DM(v,s,M),E=N(()=>D.value.length),{startIndex:C,stopIndex:S,pageCount:b,setItemsPerPage:w}=dM({page:r,itemsPerPage:c,itemsLength:E}),{paginatedItems:P}=HM({items:D,startIndex:C,stopIndex:S,itemsPerPage:c}),B=N(()=>g(P.value)),{isSelected:F,select:ne,selectAll:q,toggleSelect:U,someSelected:L,allSelected:j}=NM(e,{allItems:p,currentPage:B}),{isExpanded:Y,toggleExpand:O}=wM(e);UM({page:r,itemsPerPage:c,sortBy:i,groupBy:s,search:m}),Ze({VDataTableRows:{hideNoData:_(e,"hideNoData"),noDataText:_(e,"noDataText"),loading:_(e,"loading"),loadingText:_(e,"loadingText")}});const de=N(()=>({page:r.value,itemsPerPage:c.value,sortBy:i.value,pageCount:b.value,toggleSort:A,setItemsPerPage:w,someSelected:L.value,allSelected:j.value,isSelected:F,select:ne,selectAll:q,toggleSelect:U,isExpanded:Y,toggleExpand:O,isGroupOpen:k,toggleGroup:x,items:B.value,groupedItems:P.value,columns:u.value,headers:H.value}));return $(()=>{const[Ne]=K1.filterProps(e),[Be]=X1.filterProps(e),[ke]=j1.filterProps(e),[z]=$l.filterProps(e);return d($l,te({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},z),{top:()=>{var Se;return(Se=t.top)==null?void 0:Se.call(t,de.value)},default:()=>{var Se,ia,re,K;return t.default?t.default(de.value):d(me,null,[(Se=t.colgroup)==null?void 0:Se.call(t,de.value),d("thead",null,[d(X1,Be,t)]),(ia=t.thead)==null?void 0:ia.call(t,de.value),d("tbody",null,[t.body?t.body(de.value):d(j1,te(ke,{items:P.value}),t)]),(re=t.tbody)==null?void 0:re.call(t,de.value),(K=t.tfoot)==null?void 0:K.call(t,de.value)])},bottom:()=>t.bottom?t.bottom(de.value):d(me,null,[d(K1,Ne,{prepend:t["footer.prepend"]})])})}),{}}}),WM=Rd({components:{...Zf,VDataTable:_M},directives:oM,theme:{defaultTheme:"dark"}}),zM=`45
Greetings, stranger. I'm not surprised 
to see your kind here. Many 
adventurers have traveled this way 
since the recent troubles began.
 
No doubt you've heard about the 
tragedy that befell the town of 
Tristram. Some say that Diablo, the 
Lord of Terror, walks the world again.
 
I don't know if I believe that, but a Dark 
Wanderer did travel this route a few 
weeks ago. He was headed east to the 
mountain pass guarded by the Rogue 
Monastery.
 
Maybe it's nothing, but evil seems to 
have trailed in his wake. You see, 
shortly after the Wanderer went 
through, the Monastery's Gates to the 
pass were closed and strange 
creatures began ravaging the 
countryside.
 
Until it's safer outside the camp and the 
gates are re-opened, I'll remain here 
with my caravan. I hope to leave for 
Lut Gholein before the shadow that fell 
over Tristram consumes us all.  If 
you're still alive then, I'll take you 
along.
 
You should talk to Akara, too. She 
seems to be the leader of this camp. 
Maybe she can tell you more.
`,QM=`45
Well met, noble Paladin. It's been a 
while since I've seen any of your kind in 
the west. It would be an honor to aid 
you in any way that I can.
 
No doubt you've heard about the 
tragedy that befell the town of 
Tristram. Some say that Diablo, the 
Lord of Terror, walks the world again.
 
I don't know if I believe that, but a Dark 
Wanderer did travel this route a few 
weeks ago. He was headed east to the 
mountain pass guarded by the Rogue 
Monastery.
 
Maybe it's nothing, but evil seems to 
have trailed in his wake. You see, 
shortly after the Wanderer went 
through, the Monastery's Gates to the 
pass were closed and strange 
creatures began ravaging the 
countryside.
 
Until it's safer outside the camp and the 
gates are re-opened, I'll remain here 
with my caravan. I hope to leave for 
Lut Gholein before the shadow that fell 
over Tristram consumes us all.  If 
you're still alive then, I'll take you 
along.
 
You should talk to Akara, too. She 
seems to be the leader of this camp. 
Maybe she can tell you more.
`,OM=`51
I've been leading my trade caravan 
across the eastern deserts for more 
than twenty years now. I've been 
attacked by bandits and outlaws more 
times than I can remember. But never 
when a Paladin accompanied me. 
 
Indeed, your Order has saved me from 
losing a small fortune over the years. I 
just hope you can discover what's 
going on around here and get the 
Gates to the East opened up!
`,KM=`85
Cain seems to have great wisdom 
regarding the supernatural. I hope I 
never live to be that wise...
`,XM=`58
Akara is the Rogues' High Priestess. She 
sells the few magic items in her 
possession and can even heal your 
wounds. She is very wise and will help 
you if she can.
`,jM=`66
The fiery Kashya commands the Rogue 
archers in battle. I've only spoken to 
her a few times, though. I get the 
feeling that she doesn't like outsiders 
very much.
`,$M=`88
Charsi seems to be a very sweet girl. 
She's the smith around here and can 
help you by trading weapons and 
armor.
`,YM=`55
Gheed is a wandering merchant of 
questionable character who is traveling 
along with my caravan to the East. He 
will buy and sell most anything.
 
He's greedy, but his wares are beyond 
reproach. I would suggest keeping both 
eyes open when you deal with him.
`,JM=`71
To the east are lands of great 
mystery... and the Jewel City of the 
Desert, Lut Gholein.
`,ZM=`68
I'll gladly take you eastward, if you can 
drive the Evil from the Monastery.  
Then, the Rogues may re-open the pass 
through the mountains.
`,e3=`70
It's easy to become lost in the 
wilderness on the way to the Citadel. 
After you have come to the Cairn 
Stones, you must remember that the 
path continues through the caves.
`,a3=`35
I am Akara, High Priestess of the 
Sisterhood of the Sightless Eye. I 
welcome you, traveler, to our camp, 
but I'm afraid I can offer you but poor 
shelter within these rickety walls.
 
You see, our ancient Sisterhood has 
fallen under a strange curse. The 
mighty Citadel from which we have 
guarded the gates to the East for 
generations, has been corrupted by the 
evil Demoness, Andariel.
 
I still can't believe it... but she turned 
many of our sister Rogues against us 
and drove us from our ancestral home. 
Now the last defenders of the 
Sisterhood are either dead or scattered 
throughout the wilderness.
 
I implore you, stranger. Please help us. 
Find a way to lift this terrible curse and 
we will pledge our loyalty to you for all 
time.
`,n3=`34
Greetings, young Sorceress. It is good 
to see more of your kind at work in the 
world these dark days. In my opinion, 
the world needs more women to fight 
against the great shadow. But I am 
forgetting my manners... 
 
I am Akara, High Priestess of the 
Sisterhood of the Sightless Eye. I 
welcome you, traveler, to our camp, 
but I'm afraid I can offer you but poor 
shelter within these rickety walls.
 
You see, our ancient Sisterhood has 
fallen under a strange curse. The 
mighty Citadel from which we have 
guarded the gates to the East for 
generations, has been corrupted by the 
evil Demoness, Andariel.
 
I still can't believe it... but she turned 
many of our sister Rogues against us 
and drove us from our ancestral home. 
Now the last defenders of the 
Sisterhood are either dead or scattered 
throughout the wilderness.
 
I implore you, stranger: please help us. 
Find a way to lift this terrible curse and 
we will pledge our loyalty to you for all 
time.
`,t3=`42
The Sisterhood of the Sightless Eye has 
a long and distinguished history. Over 
the generations our Order has become 
a deadly fighting force as well as a 
bastion for women who sought to forge 
their own destiny.
 
Yet beware, young one, the lure of 
power and knowledge can lead to 
disaster. I have seen ambition foul the 
bravest of hearts and recklessness dull 
hard-won wisdom.
 
You would do well to tread lightly upon 
the dark path you have chosen to 
explore.
`,s3=`49
I understand that Cain is the last 
descendant of the ancient Horadrim 
and that his knowledge of their lore is 
vast. He could prove to be very useful 
in discerning the nature of our current 
crisis.
`,i3=`49
Kashya has always been fiercely loyal, 
but I fear her anger and frustration 
over these recent events will lead her 
into harm's way. She is highly 
protective of the few Rogues remaining 
under her command and will not send 
them into combat unless there is dire 
need.
`,l3=`46
Charsi is young and innocent. However, 
I believe her Barbarian blood thrills to 
the prospect of adventure and danger. 
She takes great pride in her work and 
finds comfort in the fact that her 
weapons and armor are helping to end 
this evil plague.
`,o3=`48
Though he has only been our guest for 
a short time, I sense that Warriv has 
faced many harrowing trials. Though 
he knows, as I do, that a terrible evil 
has blanketed the land, his only real 
concern is to reach the eastern trading 
ports with his caravan.
`,r3=`53
To be honest, I have done my best to 
stay clear of Gheed. He wears 
dishonesty about himself like a cloak 
and seeks only to better his situation 
by preying on the misfortunes of 
others.
`,c3=`55
The wilderness is overrun with Evil and 
the minions of Hell have taken our 
rightful home. We must purge all Evil 
from the Monastery and restore order 
to the world.
`,d3=`53
I often dream of the day we reclaim our 
own. The Sightless Eye sees through 
the mist of time a great glory ahead, 
but how far ahead the Eye cannot 
discern.
`,u3=`67
Our mental discipline is matched only by 
our skill in archery... I only hope these 
are enough to withstand this awful 
trial.
`,H3=`59
Beware that you do not suffer the fate 
of the corrupted Rogues. To lose one's 
life is a tragedy, but to lose one's soul 
is even worse.
`,p3=`41
Even though the corrupted ones were 
once of our Order, you need not shy 
from slaying them, for they stand 
between you and Andariel.
 
Perhaps, when the Demon Queen is 
dead, our Sisters will return to life, but 
more likely they will be forever bound 
to their unholy pact.
`,m3=`56
Welcome, outlander, to our glorious 
hovel. I know you're here to challenge 
the evil that's driven us from our 
ancestral home.
 
But, know this. Akara may be our 
spiritual leader, but I command the 
Rogues in battle. It will take more than 
just killing a few beasts in the 
wilderness to earn my trust.
`,h3=`55
Well, well, I never expected to see an 
Amazon in these lands. You're very 
brave to have come here. Many of my 
fellow Sisters have fallen under some 
dark spell, and if you're not careful you 
may fall prey to it as well.
`,A3=`60
When I was very young, Akara told me 
tales of the Amazons' fearlessness in 
battle and of their skills with spears 
and bows. I like to think we Rogues 
have much in common with you 
Amazons.
`,N3=`64
Some of my Rogues told me of Deckard 
Cain. They said that he is a man of 
great wisdom. Personally, I don't know 
how wise he could possibly be if he 
never learned how to wage battle 
himself.
`,f3=`57
Akara has been like a mother to me for 
as long as I can remember. She is wise 
and good, but I don't think she has the 
steel to retake our Monastery by force.
`,M3=`89
I don't trust many outlanders, but 
Warriv seems fine. He never says much 
to me, though.
`,C3=`66
Before our exile, Charsi, our blacksmith, 
could fashion any implement of war.
 
Here in the camp, she merely makes do. 
Her best tools remain within the 
Monastery.
`,g3=`58
Gheed is a pig. I've been tempted to 
throw him out of the camp many times, 
but Charsi seems to think that he's 
good company. I don't trust the man, 
but if she's comforted by him, then I'll 
desist.
`,k3=`76
If we could only find out how Andariel 
has managed to corrupt our Sisters, 
then, perhaps, we could drive out the 
evil clouding their minds.
`,S3=`68
In this camp, those of us who have 
remained true to our Order are forced 
to live among common traders and 
farm animals.
 
Welcome to our circle of suffering.
`,T3=`67
Perhaps Tristram deserved its fate... 
for letting Evil loose upon the land. I 
only hope we don't suffer the same.
`,v3=`71
Some evenings we gather at the bonfire 
to retell epic tales... and try to forget 
about the terrible events that led to 
losing the Monastery.
`,x3=`47
Hi there. I'm Charsi, the blacksmith here 
in camp. It's good to see some strong 
adventurers around here.
 
Many of our Sisters fought bravely 
against Diablo when he first attacked 
the town of Tristram. They came back 
to us true veterans, bearing some 
really powerful items. Seems like their 
victory was short-lived, though... Most 
of them are now corrupted by Andariel.
`,y3=`54
Wow. You're a Barbarian, huh? It's 
really great to meet you. I've seen a 
few of your kind around here lately. I'm 
a little jealous... I wish I could go off 
adventuring with you.
 
Oh, by the way... I'm Charsi, the 
blacksmith here in camp.
`,D3=`57
You know, I've been with the Sisters for 
as long as I can remember. But Akara 
told me that my real parents were 
Barbarians from the northern tribes 
and that they were killed when I was 
very young.
 
Sometimes I wonder what my life would 
have been like if I had been raised as a 
Barbarian.
 
I don't know. I love being a blacksmith... 
but sometimes I just want to get out 
and explore the world, you know?
`,b3=`86
I don't really know anything about Cain. 
He seems to have a lot of secrets... 
That makes me nervous.
`,P3=`51
Oh, Kashya's fantastic. Sure, she's a 
little hard on outsiders, but who can 
blame her? All she wants is to protect 
our Order. But now that our Sisters 
have turned against us... I think this 
whole mess has hardened her heart.
`,E3=`64
Akara, our priestess and seer, is most 
upset by the corruption of our Sisters. 
I fear that she blames herself.
`,w3=`80
Warriv's all right, I guess. He seems too 
serious most of the time. I haven't 
really talked to him all that much.
`,R3=`60
Oh, I like Gheed. He's very funny. He 
has all sorts of interesting stories from 
the places he's been. I wish I could see 
the sights he has.
`,B3=`84
I don't know why some of my Sisters 
chose to follow Andariel. Those who 
strayed were among our finest 
warriors.
`,I3=`48
Good day to you partner! I'm Gheed and 
I can already tell that I'll be your best 
friend in this forsaken camp.
 
A spare weapon, some gold, a small 
gem is all I want in exchange for the 
equipment you'll need on whatever 
quests you might undertake.
 
Now, now, now... Don't be shy, all of my 
items are guaranteed for life and come 
with a two-day warranty!
`,L3=`46
A Necromancer! I hoped I'd never have 
to lay my eyes on one of your kind 
again. ... The recent troubles in this 
area have brought out all kinds, I see. 
Nevertheless, your money's good...
 
A spare weapon, some gold, a small 
gem is all I want in exchange for the 
equipment you'll need on whatever 
quests you might undertake!
 
Now, now, now... Don't be shy, all of my 
items are guaranteed for life and come 
with a two-day warranty!
`,G3=`74
Don't think you can fool me, 
Necromancer. I've seen what your kind 
can do. If you're involved in any of the 
evil out there, I don't even want to 
know. Trade quickly and be about your 
business!
`,q3=`57
That old coot, Cain, is as crazy as a wet 
Quill Rat. I hear he survived whatever 
happened in Tristram. Personally, I 
wouldn't trust a thing he has to say.
`,U3=`55
Akara and Kashya are Sisters in the 
Order of the Sightless Eye, but they are 
worlds apart. Akara is a slow river of 
magic, and Kashya, a viper of war. 
They're both deeply devoted to their 
religious order, yet the corruption of 
their Sisters pains them both to no 
end.
`,F3=`52
Charsi is a fine girl..., but she has no 
business savvy! I know she means well, 
but the prices she charges for weapons 
and armor will never earn her a profit.
 
As long as I keep filling her mind with 
stories of adventure, she'll never catch 
on to the fact that I'm raking in gold 
hand over fist!
`,V3=`55
Warriv was kind enough to let me travel 
with his caravan, but don't let him drag 
you into a search for a new Eastern 
trade route.
 
I'm making a fortune right here... from 
the Rogues, of course! You, on the 
other hand, always get my best prices!
`,_3=`61
Andariel's demonic forces have taken up 
residence in the forests as well as the 
Monastery. Uh-uh. I won't be venturing 
out of the camp. So, if you need 
anything, I'll be right here.
`,W3=`58
When - or if - I get to Lut Gholein, I'm 
going to find the largest bowl of 
Narlant weed and smoke 'til all earthly 
sense has left my body.
`,z3=`43
Long ago, the Soulstones were given to 
the Horadrim by the Archangel Tyrael. 
They were used to bind the three Prime 
Evils. I now know that even these holy 
artifacts were no match for Diablo's 
power.
 
I hope that his two brothers are more 
securely held... but I fear the worst.
`,Q3=`54
It takes time to master your skills... and 
use will hone your technique. But take 
care to choose your new skills wisely.
`,O3=`52
You may recover some mysterious 
things from the demons you kill. Some 
of great use to you... some of great 
peril! Bring them to me and I'll reveal 
their secrets.
`,K3=`46
Have I told you about the Horadrim? 
They were an ancient confederation of 
mage-clans who sought to bind the 
three Prime Evils for eternity. The 
Horadrim are now nearly forgotten... 
and it appears that the bonds they 
wove are unravelling!
 
As the last of the Horadrim, I pray that 
I can help you remedy their failure.
`,X3=`43
Long ago, Diablo and his brothers were 
cast out of Hell by the Lesser Evils. It 
seems that Hell's balance has shifted, 
as Andariel is now aligned with the 
Lord of Terror. Her presence here in 
the mortal realm does not bode well for 
us.
`,j3=`90
Turn back! I can tell that you need more 
experience to fight safely in the next 
wilderness.
`,$3=`46
Halt! You should complete Akara's quest 
before venturing further. Search for 
the Den in the wilderness closer to 
camp.
`,Y3=`116
Beware! The evil is strong ahead.
`,J3=`92
Beware! Beyond lies mortal danger for 
the likes of you!
`,Z3=`88
Take care! The Corrupted Rogues in the 
wilderness ahead are not to be trifled 
with.
`,eC=`43
There is a place of great evil in the 
wilderness. Kashya's Rogue scouts 
have informed me that a cave nearby is 
filled with shadowy creatures and 
horrors from beyond the grave.
 
I fear that these creatures are massing 
for an attack against our encampment. 
If you are sincere about helping us, 
find the dark labyrinth and destroy the 
foul beasts.
 
May the Great Eye watch over you.
`,aC=`46
I should add that many Rogue scouts 
have died in that horrible place. We 
cannot afford to lose any more. If you 
choose to enter that Den of Evil, you 
must do so alone.
`,nC=`87
The demons in that cave have claimed 
many of my finest archers. I wonder 
how you will fare!
`,tC=`95
The beasts from the cave have begun to 
roam throughout the countryside. 
You'd better be careful out there.
`,sC=`95
You seem like a noble warrior. I hope 
you can help us.
`,iC=`67
You're a brave soul! I'd sooner thrust 
my sacred scepter into the foulest, 
carbuncular trull than set one boot 
into that cave.
`,lC=`122
One who seeks that cave, seeks death.
`,oC=`85
Your task is not complete until you have 
killed all the demons in that cave.
`,rC=`111
You'd better come through on this. Your 
reputation depends on it.
`,cC=`148
You haven't cleared the cave, yet? Do 
you need anything?
`,dC=`73
Demons still befouling that cave, huh? I 
think you might need a new weapon.
`,uC=`124
One who hesitates... does so with good 
reason.
`,HC=`65
You have cleansed the Den of Evil. 
You've earned my trust and may yet 
restore my faith in humanity.
 
Your reward is training in the skill of 
your choice.
`,pC=`74
Hmm. I'm surprised you survived that 
test, outlander. Go see Akara. She may 
reward you.
`,mC=`94
You are truly brave and skillful...  Akara 
was worried about you.
`,hC=`87
The only good demon is a dead one, I 
say.
 
By the way, did you happen to find 
anything in that cave you'd like to sell?
`,AC=`120
...That which does not kill you makes 
you stronger.
`,NC=`56
My Rogue scouts have just reported an 
abomination in the Monastery 
graveyard!
 
Apparently, Andariel is not content to 
take only our living. Blood Raven, one 
of our finest captains in the battle 
against Diablo at Tristram, was also 
one of the first to be corrupted by 
Andariel.
 
Now, you'll find her in the Monastery 
graveyard raising our dead as 
zombies!
 
We cannot abide this defilement! If you 
are truly our ally, you will help us 
destroy her.
`,fC=`80
Death has done nothing to weaken 
Blood Raven's combat skills. If 
anything, she's more deadly than ever.
`,MC=`99
Blood Raven was the leader of a Rogue 
band that once fought Diablo at 
Tristram.
`,CC=`94
I'm sorry... The undead are bad for 
trade. I have a strict no-return policy.
`,gC=`51
Blood Raven fought valiantly against 
Diablo in the catacombs beneath 
Tristram... She was never quite the 
same afterwards. It is now obvious she 
brought an evil influence back with her.
`,kC=`140
Hmmm...
 
How can one kill what is already dead?
`,SC=`99
Each moment you delay adds another 
undead Sister to Blood Raven's army.
`,TC=`70
If you fail to destroy Blood Raven, I fear 
that our Order will perish forever.
`,vC=`68
Akara felt something was wrong even 
before Andariel descended upon us. 
She feared that Blood Raven had 
stumbled upon some evil force beneath 
Tristram.
 
I wish we had acted then...
`,xC=`77
I wonder if that old gossip, Melra, is 
among the undead? Oh, she had dirt on 
everybody.
`,yC=`86
When the dead return to prey upon the 
living, it is a terror beyond 
understanding.
`,DC=`55
I can hardly believe that you've defeated 
Blood Raven!
 
Though she was once my closest friend, 
I pray that her tortured spirit remains 
banished forever.
 
You have earned my respect, stranger... 
and the allegiance of the Rogues. I 
have placed several of my best 
warriors at your disposal.
`,bC=`122
Andariel must be made to pay for her 
sacrilege!
`,PC=`77
Kashya wishes to reward you for your 
defeat of Blood Raven. I thank you, 
too, even though Blood Raven was once 
my friend.
`,EC=`148
Some of those gals weren't so nice the 
first time around.
`,wC=`104
You've done well, stranger. I hope all 
your efforts are worth it.
`,RC=`50
It is clear that we are facing an Evil 
difficult to comprehend, let alone 
combat.
 
There is only one Horadrim sage, 
schooled in the most arcane history 
and lore, who could advise us... His 
name is Deckard Cain.
 
You must go to Tristram and find him, 
my friend. I pray that he still lives.
`,BC=`90
The bark of Inifuss holds mystical 
runes.
 
Akara can translate them... into our 
revenge!
`,IC=`42
Tristram is too far to journey by foot...  
Cain would likely be dead, when you 
arrived. However, there is a magical 
portal that will take you there 
instantly.
 
To open it, one must stand within the 
circle of Cairn Stones and touch them 
in a certain order. The proper order 
can be found in the runes written on 
the bark of the Tree of Inifuss.
 
You must find the sacred Tree of Inifuss 
and bring back its bark. I will translate 
the runes to unlock the Stones' mystic 
pattern.
`,LC=`117
If you bring back the bark of Inifuss, 
Akara will tell you how to get to 
Tristram.
`,GC=`68
Months ago, I came across a few 
survivors from Tristram. They said 
that Cain had gone half-mad and could 
no longer distinguish fact from 
fantasy.
`,qC=`98
I would sooner micturate in a tankard 
of my own ale than journey to 
Tristram!
`,UC=`150
Without the bark of Inifuss you can't 
find Cain.
`,FC=`76
How will you find Cain without going to 
Tristram? Finding the Tree of Inifuss is 
the first step on your journey.
`,VC=`96
The Tree of Inifuss is hard to find, but 
you'll know it when you see it.
`,_C=`99
Barking up the wrong tree, huh? You'll 
find it, just keep looking.
`,WC=`70
He who seeks that which cannot be 
found must look inside himself for 
further guidance... or look harder!
`,zC=`82
With this scroll you may open a portal 
back to Tristram. Only Akara can 
decipher its logic.
`,QC=`168
Get this to Akara.
 
Only she can understand it.
`,OC=`72
Look, friend... I trade a lot of strange 
items, but I'm not going to start 
dealing in bark. Okay?
`,KC=`86
This looks like gibberish to me. Akara 
may know what to make of it.
`,XC=`64
Ah, very good. I have translated the 
runes on this scroll. You must find the 
Cairn Stones and touch them in the 
order that I have written.
`,jC=`103
Deckard Cain has crucial knowledge 
about the Evils we face. You must find 
him!
`,$C=`92
I have heard that Tristram is now in 
ruins! Without Cain I fear for the ruin 
of all of us.
`,YC=`68
I'm told that Tristram now resembles a 
mead hall... after a Barbarian wedding! 
I will wait here for your most glorious 
return.
`,JC=`82
It is too dangerous to travel to 
Tristram. I won't be leaving here until 
the way is clear!
`,ZC=`64
If he still lives, Deckard Cain may be in 
grave peril! You must hurry to Tristram 
before all is lost!
`,eg=`82
You have risked your life to rescue 
Cain. For that we thank you.
 
We must seek his counsel immediately.
`,ag=`78
Again, you amaze me, outlander.
 
The Sisterhood is grateful to you for 
delivering Cain to us. I believe Akara 
has something to tell you.
`,ng=`53
Ah, Cain is here... another customer. I 
haven't been this pleased since a 
love-starved maiden let down a bit 
more than her hair.
`,tg=`102
Akara wishes to reward you for your 
bravery in returning Deckard Cain.
`,sg=`80
Only a brave adventurer could return 
with Deckard Cain. Akara has a reward 
for your valor.
`,ig=`74
As a token of my gratitude, I will 
identify items for you at no charge.
`,lg=`82
...I thank you, friend, for coming to my 
aid.
`,og=`75
Oh... Blessings on the Rogues! They 
finally rescued me from that cursed 
place!
`,rg=`33
Regrettably, I could do nothing to 
prevent the disaster which devastated 
Tristram. It would appear that our 
greatest fears have come to pass. 
Diablo, the Lord of Terror, has once 
again been set loose upon the world!
 
As you know, some time ago Diablo was 
slain beneath Tristram.  And when our 
hero emerged triumphant from the 
labyrinth beneath town, we held a 
grand celebration that lasted several 
days.
 
Yet, as the weeks passed, our hero 
became increasingly aloof. He kept his 
distance from the rest of the townsfolk 
and seemed to lapse into a dark, 
brooding depression. I thought that 
perhaps his ordeal had been so 
disturbing that he simply could not put 
it out of his mind.
 
The hero seemed more tormented every 
passing day. I remember he awoke 
many times -- screaming in the night -- 
always something about 'the East'.
 
One day, he simply left. And shortly 
thereafter Tristram was attacked by 
legions of foul demons. Many were 
slain, and the demons left me to die in 
that cursed cage.
 
I believe now that Tristram's hero was 
that Dark Wanderer who passed this 
way before the Monastery fell.
 
I fear even worse, my friend... I fear 
that Diablo has taken possession of the 
hero who sought to slay him. If true, 
Diablo will become more powerful than 
ever before.
 
You must stop him or all will be lost.
`,cg=`36
...And so it came to pass that the 
Countess, who once bathed in the 
rejuvenating blood of a hundred 
virgins, was buried alive... And her 
castle in which so many cruel deeds 
took place fell rapidly into ruin. Rising 
over the buried dungeons in that 
god-forsaken wilderness, a solitary 
tower, like some monument to Evil, is 
all that remains.
 
The Countess' fortune was believed to 
be divided among the clergy, although 
some say that more remains unfound, 
still buried alongside the rotting skulls 
that bear mute witness to the 
inhumanity of the human creature.
`,dg=`110
The only wealth you're likely to find 
there is a wealth of vermin.
`,ug=`70
That old tower is as rotten on the inside 
as it appears on the outside. I heard 
that several Sisters came to a 
gruesome end when a stairwell 
collapsed on them.
`,Hg=`67
The dangers there are not solely 
architectural. Once inside that 
wretched place, many succumb to a 
vile miasma.
`,pg=`60
That tower marks a place of danger. 
There is an epic poem about it...  How 
much sorrow one can stand was tested 
there.
`,mg=`81
Rumors of treasure are no different 
from rumors of any other kind. They 
hold false promise to those who should 
know better.
`,hg=`78
The tome speaks of treasure. Yet, all we 
have found are death, delirium, and 
disappointment.
`,Ag=`151
Have you suddenly lost your taste for 
wealth?
`,Ng=`94
Quickly in and quickly out is all the 
advice I can give you.
`,fg=`118
Better an empty pocket than a full 
grave.
`,Mg=`170
You're not ready to give up, are you?
`,Cg=`140
There is no more I can tell you about 
that ancient tower.
`,gg=`79
Guess what! I've named a boil on my 
ass after you. It, too, bothers me every 
time I sit down.
`,kg=`79
Your rewards are well-earned. To us, 
the tower was nothing more than a 
headstone looming over a long 
forgotten grave.
`,Sg=`62
Remember. Wealth is as insubstantial 
as a cloud and passes as quickly. 
Ignore Gheed. All that twitters is not 
bold.
`,Tg=`68
Warriv's advice is like corpse gas; it 
befouls the air for a moment and then 
it disappears.
`,vg=`58
I thought the stories of treasure in the 
tower were nothing but lies. I am glad 
you found something of value in that 
death-trap. Would that our Sisters had 
been so fortunate.
`,xg=`126
Those riches will serve you well on the 
long road ahead.
`,yg=`69
Well done, my friend. Courage and 
opportunity together have created in 
you a kind of alchemy.
`,Dg=`66
When I fled the Monastery, I left behind 
the Horadric Malus, my enchanted 
smithing hammer. If you can retrieve it 
for me, I'll use its magic to strengthen 
your equipment.
`,bg=`51
The Malus was forged and enchanted by 
the ancient Horadric Mages during the 
Sin Wars. When their union dissolved, 
the Malus was entrusted to the 
Sisterhood guarding the pass into the 
East.
`,Pg=`59
The retrieval of the Horadric Malus is 
not without risk. Our Monastery is 
filled with voracious hellspawn. You'd 
best be careful, my friend.
`,Eg=`61
Charsi is wasting her time and talents 
using an inferior hammer! Had she the 
Horadric Malus, she could make the 
steel sing and craft you a suit of armor 
as impenetrable as the Great Eye.
`,wg=`87
The Monastery can confuse even those 
who know it well. Stay alert in there.
`,Rg=`74
Charsi talks of nothing anymore, but 
this Horadric Malus. Between you and 
her my ears need a rest.
 
Just find it and bring it back quickly.
`,Bg=`74
I have offered my nomadic phallus, but 
to no avail.
`,Ig=`68
Just as an archer needs bow and arrow, 
or a draughtsman pen and paper, so 
Charsi needs the Horadric Malus with 
which to ply her trade.
`,Lg=`57
The Malus has eluded you so far. Well, 
search thoroughly in the Barracks... 
That is where the Rogues kept their 
forge.
`,Gg=`98
If you can't carry out this quest, how 
will you face the greater evils ahead?
`,qg=`71
To do battle with Andariel requires 
more than thick skin and a strong will. 
You'll want armor and weaponry forged 
with the hammer's enchantments.
`,Ug=`89
The Malus is a Horadric artifact of 
great power. Please bring it back.
`,Fg=`90
I have heard that you bear us no Malus.
`,Vg=`120
What better opportunity to show your 
mettle?
`,_g=`59
The magical effects imbued by the 
Malus are impossible to predict, but 
are always to the good.
`,Wg=`57
Well done, my friend. But remember, the 
return of the Horadric Malus is but one 
step in reclaiming the Monastery.
`,zg=`74
Now that the Horadric Malus is back in 
our possession, we shall use it to 
deliver a great blow against the Evil 
which torments this land.
`,Qg=`72
Oh! Thanks so much for returning the 
Horadric Malus! I will now imbue one of 
your items with magical powers.
`,Og=`120
I guess it's too late to take back some 
of the names I called you.
`,Kg=`118
I am glad the hammer has returned and 
you with it.
`,Xg=`34
It is certain that we face the demon 
queen, Andariel, who has corrupted the 
Rogue Sisterhood and defiled their 
ancestral Monastery. This does not 
bode well for us, my friend.
 
Ancient Horadric texts record that 
Andariel and the other Lesser Evils 
once overthrew the three Prime Evils -- 
Diablo, Mephisto and Baal -- banishing 
them from Hell to our world. Here, they 
caused mankind untold anguish and 
suffering before they were finally 
bound within the Soulstones.
 
Andariel's presence here could mean 
that the forces of Hell are once again 
aligned behind Diablo and his Brothers. 
If this is true, then I fear for us all.
 
You must kill her before the Monastery 
becomes a permanent outpost of Hell 
and the way east lost forever.
`,jg=`45
Diablo is heading east for some foul 
purpose. And the only passage east is 
through the Monastery gate. 
Obviously, Diablo summoned Andariel 
to block any pursuit.
 
For her part Andariel hopes to win 
Diablo's favor... the lesser demons are 
always vying for positions of power 
within the unholy hierarchy!
`,$g=`63
Andariel has desecrated all we hold 
dear. She must not be permitted to 
serve Diablo.
 
Destroy her! Her corruption of our 
Order must be undone!
`,Yg=`132
Send Andariel back to the Hell she came 
from!
`,Jg=`71
You're going after Andariel?
 
... One of my wagon wheels is in need of 
repair. I'll be under the wagon, if I'm 
needed.
`,Zg=`72
The mapmakers tell us the shortest 
distance between two points is a 
straight line.
 
Our way east is a line that runs through 
Andariel's stronghold, the Monastery.
`,ek=`81
I can imagine a thousand different ways 
to kill Andariel. You need only choose 
one.
`,ak=`48
It is clear that Andariel is acting on 
behalf of Diablo to prevent anyone 
from following him eastward. Her 
defeat would allow you to continue the 
pursuit.
 
Ancient lore has it that while Andariel 
was spawned in the Burning Hells, she 
is not fond of fire.
`,nk=`57
You have done much to help us, but I 
sense that this has only fueled 
Andariel's fury. She will not stop until 
we are all dead.
 
You must kill Andariel before her army 
can gain the upper hand.
`,tk=`72
Have you stumbled upon that Demon 
Queen, yet? I hear she's quite the 
beauty... as far as Maidens of Anguish 
go, that is.
`,sk=`108
If you are the hero that you seem to be, 
now is the time to prove it.
`,ik=`90
May I remind you that my caravan can 
only go east, if the Monastery is 
cleansed?
`,lk=`126
Deckard Cain has important information 
about Andariel.
`,ok=`64
Finally, we may rejoice!
 
We owe you a debt we can never repay. 
I only hope that in time we will be able 
to rebuild our Order.
 
All our thanks go with you, my friend.
`,rk=`86
You'll probably go east now... It was 
good to know you. I hope you'll come 
back if you ever need anything.
`,ck=`44
Andariel's death brings about renewed 
life for us all. We mourn the loss of our 
dear Sisters, but at least now we can 
get on with our lives.
 
I... may have misjudged you, outlander. 
You are a true hero and testament to 
the noble spirit which has inspired our 
Order for generations.
 
Fare well... my friend.
`,dk=`100
I'm going to party like it's 999!
`,uk=`82
The caravan is prepared. We may now 
journey eastward to Lut Gholein.
`,Hk=`38
This is a great victory indeed, but many 
more battles await. I will accompany 
you on your journey, lending what 
assistance I can... 
 
Remember... Diablo is still out there, 
seeking something in the desert. I'm 
afraid that this nightmare will not end 
until you find what it is that he seeks.
`,pk=`600
Halt.
`,mk=`290
You may not pass.
`,hk=`255
Welcome to the palace.
`,Ak=`255
You may enter the palace.
`,Nk=`290
Stay out of trouble.
`,fk=`58
I'll bet you wonder how this town 
manages to stay safe with all the 
trouble going on out in the desert. 
Well, I can tell you that it's got nothing 
to do with the local town guards... 
they're all in the palace for some 
reason.
 
Jerhyn hired me and my mercenaries to 
help keep the peace around here. We're 
not cheap, but we're the best this 
wasteland has to offer.
`,Mk=`85
We do a good job in town, but beyond 
the city gates, you'll find all manner of 
demons.
`,Ck=`52
The local guards were all relocated to 
the palace after the troubles began. No 
one really knows why. Actually, all of 
the town's brothel girls have been 
hiding out in the palace's cellar lately, 
so I assume that the guards have been 
assigned to 'protect them' with their 
lives.
`,gk=`75
I might spare you a few of my men. 
Why, enough gold can muster an army.
`,kk=`61
Jerhyn's got a nice little trading post 
going here. Despite his youth, he is a 
clever businessman. As you can see by 
that palace, he's done quite well for 
himself.
`,Sk=`99
We're keeping the town safe and tight, 
but I've got a hunch there's something 
Jerhyn's not telling us.
`,Tk=`44
Ah, Elzix is quite a character. I had a 
few run-ins with his band of outlaws in 
my younger years. Now, he's as settled 
as the dunes out there. The Desert Rain 
Inn is his pride and joy these days.
`,vk=`53
Atma seems to be a fine woman. But I'm 
sure the loss of her family has made 
her lonely. Perhaps I should go over 
and console her when I get off duty 
tonight...
`,xk=`72
Geglash is an imposing warrior, but he's 
never been able to back down from a 
fight. One of these days, his pride will 
be the death of him.
`,yk=`67
Meshif has sailed all around the 
southern seas and visited many 
strange lands. It must be driving him 
mad, having to stay anchored here.
`,Dk=`70
I haven't talked much to Fara. She 
keeps to herself most of the time. I get 
the feeling that she doesn't like us 
mercenary types much.
`,bk=`73
I'd stay clear of Lysander, if I were you. 
He's always mixing his damned potions 
and chemicals. I wouldn't be surprised 
if he winds up blowing himself to 
smithereens!
`,Pk=`85
Drognan's a mystery to me. Then again, 
I never did trust mages much.
`,Ek=`61
Hmm... You look like a sturdy 
adventurer.
 
You know, I used to be quite the 
scoundrel in my day. I led the fiercest 
group of bandits who ever terrorized 
these sands!
 
Nowadays, I run this here Inn and 
pretty much stay out of trouble.
 
My days of adventuring are behind me.
`,wk=`48
Ah... You must be one of the new 
heroes who've come to rid our city of 
evil. Under any other circumstances, I'd 
be surprised to see one of your kind in 
the city. But lately... Oh, never mind all 
that...
 
You know, I used to be quite the 
scoundrel in my day. I led the fiercest 
group of bandits who ever terrorized 
these sands!
 
Nowadays, I run this here Inn and 
pretty much stay out of trouble.
 
My days of adventuring are behind me.
`,Rk=`52
You know, I've lost a number of body 
parts over the years. An eye here, a leg 
there...
 
Say, do you know any spells that'd grow 
them back for me? Hmm... On second 
thought, I'll leave well enough alone.
`,Bk=`90
What tales Drognan can tell... You 
would do well to listen carefully to that 
wizened wizard.
`,Ik=`80
There are many ancient tombs in the 
desert. Most of them are already 
plundered, but I imagine that some 
have remained hidden.
`,Lk=`67
I miss the brothels that used to do 
business here.
 
You know, all of the ladies fled to the 
palace as soon as the trouble in the 
desert started. You'd think that they 
could at least come out once in a while 
now that Greiz and his men have things 
relatively under control.
`,Gk=`71
Atma... Now, there's a fine woman. 
Lately, though, she's only thinking 
about revenge. She has reason 
enough...
`,qk=`71
We've all fared well under Jerhyn's 
leadership. The town has remained 
safe throughout this whole mess; and 
yet the lad still seems very upset about 
something.
`,Uk=`88
Geglash is a fool who would fight his 
own shadow if he could. Fighting's all 
he ever thinks about!
`,Fk=`74
Meshif is a wise Captain, I think. Wise 
enough to know silver from tin and 
truth from dung, that's for sure.
`,Vk=`65
Fara is a good woman. She seems very 
sad, but seldom speaks of her past. 
She's good to the poor and helps 
people when she can. That makes her 
all right in my book.
`,_k=`70
That Lysander's a grumpy old cuss. 
You'd better not disturb him while he's 
working on his potions, or... BOOM! 
You could get blasted to the moon.
`,Wk=`62
Now that Andariel is dead, I can return 
and outfit the Rogues properly. Once 
I've made some trades here, I'll be free 
to head back to their Monastery. Let 
me know if you want to travel along.
`,zk=`106
Caravans take people where they want 
to go - until they get there.
`,Qk=`80
By ship is the only way eastward from 
here. I believe Captain Meshif has a 
small trading vessel moored at the 
docks.
`,Ok=`70
There used to be a lot of brothels 
here... I guess the troubles scared all 
the women away, or maybe they're 
'safe' in Jerhyn's palace.
`,Kk=`53
That old desert fox, Elzix, is as crafty 
as they come. Years back, he made off 
with a small fortune of my caravan's 
wares. I certainly never expected to see 
him so... domesticated.
`,Xk=`57
Jerhyn has his father's strength and 
wits. He's young, but he rules this 
place with wisdom and care. I think 
he'll grow into a fine Sultan... Provided 
we all survive this crisis.
`,jk=`59
You'll forgive me if I seem upset. I've 
suffered a loss recently, but that's not 
your problem.
 
It's a relief to see some proper warriors 
come through here. My name is Atma. I 
run the tavern here in Lut Gholein.
`,$k=`86
Evil has laid siege to Lut Gholein and 
you may be our last hope...
`,Yk=`56
This public house used to be quite lively, 
until this plague of evil. Luckily, I've 
managed to save away a tidy nest egg. 
Unfortunately, I couldn't save 
everything I cared for...
`,Jk=`57
In addition to my public house, there 
used to be several brothels doing 
business here. When the troubles first 
started in the desert, the harem guilds 
sought sanctuary within the palace.
 
Of course, Jerhyn was glad to oblige. I'll 
bet they're finding many ways to repay 
him for his protection.
`,Zk=`70
Geglash may seem like a sot, but he's a 
brave man. All this trouble has driven 
him to drinking more than his usual.
`,eS=`64
Elzix and I have reached an 
understanding over the years. He 
sends travelers to me for drink and 
entertainment, and I send them back to 
him for a soft bed. The travelers often 
trade their wares for lodging.
`,aS=`89
Meshif seldom patronizes my 
establishment. I think he prefers to 
stay out there on his leaky ship.
`,nS=`71
Oh, Lysander is cranky, but he's a good 
old man. He used to give me medicines 
when... my son was ill.
`,tS=`78
Drognan is a very private person. He's 
always studying ancient scrolls and 
such. He may be a mystery to me 
forever.
`,sS=`57
Bah! I don't know why you people keep 
pestering me.
 
Greiz seems to have this place locked 
down nice and tight. Not that I couldn't 
have done the same! I've proven my 
valor in combat plenty of times.
`,iS=`43
Hey, you're a Barbarian, aren't ya? 
Ferocious as the wild beasts of the 
north, that's what they say. I suppose 
you've come to help save this city. You 
needn't bother.
 
Greiz seems to have this place locked 
down nice and tight. Not that I couldn't 
have done the same! I've proven my 
valor in combat plenty of times.
`,lS=`46
Hey, I heard that you Barbarians can 
wield multiple weapons at once. I never 
learned to fight two-handed. Carrying a 
sword and a wineskin at the same time 
is all I can ever handle.
`,oS=`53
Sure, I hear lots of what goes on. Did 
you hear about the harem guilds? They 
were the only ones allowed to hide out 
in the palace when the raids started!
 
Ah... It figures.
`,rS=`64
I've killed plenty of those demons out in 
the desert. It doesn't seem to slow 
them down any, though... they just 
keep coming back for more.
`,cS=`55
Have you found those big sand maggots 
yet? Arrows and all that don't work so 
well against them. Best thing is to hack 
'em with a sword or such.
`,dS=`58
There are some ancient tombs out there 
in the desert. You have to go pretty far 
to find them, though. Rumor has it that 
they're crawling with walking corpses 
now.
 
As if the Saber Cats and Claw Vipers 
weren't bad enough.
`,uS=`67
Yeah. Meshif's okay, I guess. But I'll be 
damned if I ever get on his ship. I don't 
even like to drink water.
`,HS=`52
Jerhyn's been acting strange lately. I 
can't imagine why he recalled the town 
guards into the palace. If there is 
something wrong in there, I hope he 
doesn't expect me to handle it.
`,pS=`57
I've seen Fara defend herself against a 
few drunken ruffians. She's got moves 
I've never even seen before. Wherever 
she's from, she sure learned how to 
fight there.
`,mS=`83
I've got no time for old alchemists. 
Lysander would be completely useless 
in a real fight.
`,hS=`63
Greetings. I'm Meshif, captain of this 
ship here. I make port runs around the 
Twin Seas and occasionally out to 
Kingsport in Westmarch.
 
I haven't sailed anywhere lately, 
though... Jerhyn has ordered me to 
stay docked here in case of emergency.
`,AS=`54
Greetings, Amazon. I haven't seen one 
of your kind in many years.... It's good 
to know that warriors of your caliber 
are protecting this city.
 
I'm Meshif, captain of this ship here. I 
make port runs around the Twin Seas 
and occasionally out to Kingsport in 
Westmarch.
 
I haven't sailed anywhere lately, 
though... Jerhyn has ordered me to 
stay docked here in case of emergency.
`,NS=`62
I was wondering if you've heard any 
news from Kurast? I know you 
Amazons travel extensively. Have you 
been there recently?
 
Hmm... Well, I hope the port opens 
soon. I need to get home to Kurast and 
find out what's been happening there.
`,fS=`72
There's something Jerhyn's not telling 
me, I just don't know what. To my eye, 
things here in town don't look that bad, 
especially since Warriv's caravan route 
opened up.
`,MS=`65
I've been all around the seas in these 
parts. It's dangerous sailing west this 
time of year, though. Until the season 
changes, the caravan through the 
desert is the main trade route to 
Westmarch.
`,CS=`75
My ship is the only way East from here. 
Still, Lord Jerhyn tells me that I may 
not leave until the current crisis is 
over.
`,gS=`65
Oh, I've known Elzix for years. He 
always offers me a free room at his Inn 
when I dock here, but I prefer the 
comforts of my own cabin.
`,kS=`61
Warriv is a good friend. We've shared 
many tales, he and I. If we had it all to 
do over again, I believe we'd both be 
explorers of some renown.
`,SS=`69
Greiz seems to be a dependable fellow. I 
hope he can handle it if those things in 
the desert decide to attack this town.
`,TS=`130
Atma serves a fine ale in her 
establishment.
`,vS=`70
Hah! That braggart Geglash says he 
fears neither man nor beast. Yet, when 
I offer to take him out to sea, he 
quakes with fear.
`,xS=`130
The lady Fara has a proud, noble air 
about her.
`,yS=`41
Greetings, honored traveler. I am 
Jerhyn, Lord of Lut Gholein, and I bid 
you welcome to my fair port-city. I'm 
glad to know that once again caravans 
are free to travel through the Western 
Pass.
 
For some time now, we have been under 
siege by an evil power that I cannot 
identify. Strange... It all began when a 
Dark Wanderer came this way, looking 
for the Tomb of Tal Rasha. No one 
knows exactly where Tal Rasha, Keeper 
of Baal, is entombed, but it is certain 
to be far out in the desert.
 
Now, my people whisper tales of the 
dead rising from their tombs and 
horrible creatures lurking amongst the 
moonlit dunes. Even I have witnessed 
things which I cannot explain. I've 
ordered the port closed and all trade 
ships moored until I am sure that my 
city is safe.
 
Atma, the tavernkeeper, has an 
important mission for you. Go see her 
immediately. You'll find her on the 
other side of town.
 
Now, I must return to the palace. I 
apologize, but I can't invite you in. 
Things are... rather a mess right now.
`,DS=`51
For trade in magic and the like, see 
Drognan or Lysander. Drognan is the 
wisest man I know - without equal in 
magic and ancient lore. Poor Lysander 
is nearly deaf, but he's a reliable potion 
chemist.
 
For travel back west, see Warriv, whom 
you already know.
 
Our own Fara is a fine and honest 
armorer, and she can heal wounds as 
well.
 
Elzix is the Innkeeper and may also 
have some items to trade.
 
Greiz, the mercenary captain I hired to 
secure the gates of Lut Gholein, keeps 
order in town, as well.
 
There are others here, too. I'm sure 
you'll meet most of them. Just look 
around...
`,bS=`117
Things are getting worse by the hour. I 
know everything looks fine, but trust 
me, it isn't!
`,PS=`117
Things are getting worse by the hour. I 
know everything looks fine, but trust 
me, it isn't!
`,ES=`63
To any who aid me in the defense of Lut 
Gholein, I pledge my support. Passage 
East, wealth, honor - all are due to 
those who help my city.
`,wS=`71
You seem very capable, but no offense 
is intended when I say that I must 
choose my confidants carefully. It 
wouldn't do to have rumors sending 
everyone into a panic.
`,RS=`87
Even though he was once a bandit, I 
permitted Elzix to take over the Desert 
Rain Inn. He has been quite civilized 
ever since.
`,BS=`76
When you arrived, Warriv's caravan had 
been long overdue. With all of the evil 
that's arisen in the land, I'm surprised 
he got through at all.
`,IS=`77
Meshif is an honorable man, but I fear 
that he is growing impatient with me 
about impounding his ship. I dare not 
tell him what's really happening in this 
city.
`,LS=`98
The woman, Atma, may have some 
useful gossip for you. She can always 
be found near her public house.
`,GS=`81
I know much about the ancient 
religions. I was trained as a Paladin of 
Zakarum in the Eastern Kurast temple 
many years ago.
`,qS=`103
Welcome, brother Paladin.
 
I am Fara. I was once a devout 
champion of Zakarum.
`,US=`67
Perhaps, in time, you will play a part in 
reclaiming our Order's honor and 
spirit. You are an inspiration to me, 
brother Paladin.
`,FS=`60
The shrines in the desert are leftover 
artifacts from the great Sin War that 
ravaged these lands almost a thousand 
years ago. They still function, but most 
travelers believe them only to be 
remnants of the distant past.
`,VS=`54
I've no love for brothels, as they can 
lead honorable men to do dishonorable 
things. Since the local harems took up 
hiding in the palace, however, there 
seems to be a rise in foul tempers.
`,_S=`66
When the Three Evils were bound ages 
ago, Mephisto, the Lord of Hatred, was 
moved to Kurast and bound by the 
holiest of magics.
`,WS=`79
Warriv may not remember me, but I 
helped him out when I was a young 
Paladin. There's no need for me to 
remind him. The rewards for honor will 
not come in this life.
`,zS=`68
Greiz is a fine warrior and leader, but in 
his heart, he will always be a 
mercenary for hire. I cannot be loyal to 
those who have no loyalty to 
themselves.
`,QS=`90
Atma is a good, loving woman. But I 
fear she will succumb to her despair 
and hatred.
`,OS=`95
Geglash is too confident in his abilities. 
A warrior's true strength is in his 
heart.
`,KS=`94
Meshif is an honest man as far as I can 
tell. He has never pestered me about 
my past.
`,XS=`61
How do I know I can trust you? Hmm?
 
You may be as shifty as that pack rat, 
Elzix, who runs the Inn. But, if you 
need a potion, though, I suppose I can 
make you one... for a price, of course.
`,jS=`109
Potions are delicate mixtures. They're 
just as liable to go off in your face as 
anything.
`,$S=`65
Ah... The sweetest desert flower - that's 
Atma. Even my strongest brew can't 
bring back her family, though.
`,YS=`86
There are some ancient enchanted 
fountains in the desert that can heal 
your wounds - if you drink enough from 
them.
`,JS=`71
Oh. Deafness has its advantages, you 
know. I'm no longer forced to overhear 
the tedious gossip of others.
`,ZS=`54
I never patronized the brothels, mind 
you. But since those ladies took up 
hiding in the palace, there certainly has 
been less scenery to feast my eyes on.
`,eT=`95
Oh... I have great faith in Greiz. He 
seems to have things well in hand.
`,aT=`90
I've traded my potions to Warriv many 
times. Yes. They seem to fetch a good 
price in the western lands.
`,nT=`71
I've sold many sea-sickness potions to 
Meshif over the years. It seems that 
many of his passengers don't take well 
to the rocking of his ship on the open 
seas.
`,tT=`58
Oh... Young Jerhyn used to purchase 
minor love potions from me, hoping to 
win the favors of the harem girls.
 
But now that the girls have taken up 
residence in the palace, he doesn't 
come around here anymore. Well, 
well... I've always said, 'alchemy is no 
substitute for experience'.
`,sT=`57
Drognan? Oh.. He's a good friend of 
mine. I help him find exotic spell 
components and alchemical books from 
time to time. I think he used to be a 
sorcerer of great renown, but he 
doesn't like to talk about his past.
`,iT=`61
I've heard that you are responsible for 
banishing Andariel back to the Burning 
Hells. I'm impressed, stranger. That 
couldn't have been easy.
 
My name is Drognan and I know what 
you're up against, my friend.
 
You ought to look over my inventory of 
items for trade.
`,lT=`50
Welcome, young Sorceress, to Lut 
Gholein. I hope your skills are a match 
for the horrors that lie beyond the 
city's walls. A mage of your limited 
experience may find the evil too great 
to withstand alone.
 
My name is Drognan and I know what 
you're up against, my friend.
 
You ought to look over my inventory of 
items for trade.
`,oT=`74
Many of the Mage Clans feel that 
women shouldn't practice magic 
openly. But since you've made it this 
far, I must say that you have proven 
your right to do so.
`,rT=`57
The Horadrim were a powerful Order, 
although maybe too prideful. Tal Rasha 
was one of their Order. And that 
should tell you something.
 
Any man who believes himself strong 
enough to contain one of the Prime 
Evils is in for a rude awakening, I 
should think.
`,cT=`78
I have heard of your friend, Cain. He is 
the last of the Horadrim. You would do 
well to heed whatever advice he has to 
give you.
`,dT=`53
Not long ago, one of my Vizjerei 
comrades, who I believed had died in 
Tristram, came to this city. He seemed 
quite insane, so I dismissed much of 
what he said.
 
However, he was able to talk his way 
into Jerhyn's palace. No one has seen 
him since. I fear that fool may have 
found something in the palace that led 
to his doom.
`,uT=`68
I've been practicing magic for more 
years than you could know. I'm older 
than I look, though not so old that I 
can't conjure up a few sparks.
`,HT=`67
Elzix is a sly one, I'll give him that. Of 
course, he never tries to cheat me. He 
knows what my magic skills can do.
`,pT=`86
Demons have spread throughout the 
desert wasteland and threaten to 
engulf our quiet port-city.
`,mT=`88
Meshif and his vessel should remain 
here, lest we risk taking demonic 
stowaways to other lands.
`,hT=`58
When the recent troubles began, Lord 
Jerhyn came seeking my council. I 
advised him to close the port and put 
the town under strict watch.
 
Lately, though, he's been occupied 
within the palace. I doubt his whores 
could divert him from his civic duties 
for this long, though.
`,AT=`68
Lysander is harmless enough. We keep 
each other company with our mutual 
interests, yet I don't think he could 
handle the enormity of our present 
situation.
`,NT=`48
Greetings, my friend. Have you spoken 
to Jerhyn yet? He's quite a remarkable 
leader for being such a young man. 
Then again, the old blood has always 
run strong in this land.
`,fT=`71
There is something about Fara that 
troubles me. Her manner is strange for 
a lonely desert-maid.
`,MT=`70
Elzix is quite a scoundrel, but I like him 
all the same.
`,CT=`59
I talked at length with Warriv as we 
crossed the desert from Khanduras. He 
has many fascinating tales of the 
dangers in the desert. His experience 
may be useful to you.
`,gT=`57
Meshif is an interesting man. Part of 
him longs for the freedom of the open 
seas... Yet his heart belongs in his 
homeland.
`,kT=`42
I thank you, mortal, for my freedom. 
But I did expect you earlier.
 
I am the Archangel Tyrael. I came here 
to prevent Diablo from freeing his 
brother, Baal. But I have failed. Now, 
Terror and Destruction roam free 
throughout your world.
 
Even now, they head towards the 
Eastern capital of Kurast - to the very 
heart of the Zakarum Temple. There 
they hope to find their eldest brother, 
Mephisto, the Lord of Hatred who was 
imprisoned there ages ago.
 
If the three Prime Evils unite, they will 
be invincible. Though it is unclear as to 
what their aims are, it is certain that 
they must be stopped at all costs.
 
I am broken and the energies that tie 
me to this world are diminishing 
rapidly.
 
You must take up this quest and 
prevent the Three Brothers from 
reuniting. You must cross the sea and 
search for Diablo and Baal in Kurast.
 
Now hurry, mortal... Time is running 
out for all of us!
`,ST=`50
Hey, hero! You're asking for trouble, if 
you leave town now.
`,TT=`50
I don't expect this of you, but if you 
want to help me, I would be grateful.
 
In the sewers below our city, there lurks 
a horrid creature that hungers for 
human flesh. The creature has killed 
many, including my son and my 
husband.
 
If you destroy it, I will reward you. 
Please be careful though, that beast 
has taken enough from us already.
 
The sewer entrance is through the trap 
door just up the street.
`,vT=`52
I've personally found some of that 
devil's victims washed up out of the 
sewer. Often, they are missing limbs or 
a head, and their bodies have always 
been skinned.
 
At first the creature raided the town at 
night... That's how Atma lost her 
family. Now we've got him barricaded 
in the sewers.
 
You're safe up here on the surface, but 
every now and again some fool wants 
to be a hero and heads down to the 
waste tunnels with a pig-sticker.
`,xT=`68
I hear that the creature kills his victims 
in order to hack off their limbs! I guess 
that makes me a less likely candidate, 
eh?
`,yT=`84
I've heard tales of walking corpses out 
in the desert at night, though I've never 
actually seen one.
`,DT=`77
Hey... Don't touch my drink or I'll bore a 
hole into your skull with my thumb.
`,bT=`54
I believe that the creature you refer to 
is one of the ancient Horadric 
mummies from the tombs that lie 
buried beneath the desert sands. It is 
unusual for one of his kind to be so far 
away from his resting place. I sense in 
this entity a restless and malevolent 
spirit.
`,PT=`62
The creature makes its lair in the 
tunnels beneath this city. He butchered 
my husband and son... I simply cannot 
bear to talk about it...
`,ET=`63
There are two entrances to the sewers, 
I believe. One of them is right near 
here, down by the water beneath the 
docks. I can see it from my ship, and 
you can bet I keep an eye on it every 
night.
`,wT=`53
Fara and I have been talking about the 
creature recently. From my studies, I 
have deduced that it is Radament the 
Fallen, an ancient Horadric mummy 
that has for some reason left his tomb 
to prey on mortals.
 
I'm doing some more research now. If 
you check back later, I may have some 
more insight as to his nature.
`,RT=`94
I hear that beast is after body parts. 
Does he eat them? Oooh... Ghastly!
`,BT=`48
The Horadrim used to mummify their 
highest mages, and infuse them with 
spells that would allow them to protect 
their tombs, even after death.
 
I have no idea why one of them would 
be acting so malevolently. Perhaps 
Drognan or Fara would know more 
about this.
`,IT=`90
Death is not afraid of the living, but the 
living abhor death.
`,LT=`55
I noticed a rotting, human arm floating 
in the harbor this morning. I suspected 
foul play, so I told Greiz. He didn't 
seem too concerned since there haven't 
been any folk reported missing lately.
`,GT=`83
I am starting to have second thoughts 
about my request... I couldn't bear the 
thought of you losing your life on my 
behalf.
 
Please be careful.
`,qT=`69
We've been meaning to send an 
organized group down there to kill that 
thing, but it would be dangerous. We 
just can't afford the chance of losing 
any men with all the trouble that's 
going on in the desert.
`,UT=`65
Ah-hah! Back for a small shot of 
courage... Believe me, it doesn't help 
for long.
 
Drinks, barkeep!
`,FT=`69
If you're going to fight that thing, use 
some common sense. Be knowledgeable 
about what harms the undead. Poison, 
for instance, will have little effect.
`,VT=`64
Huh? Peppermint? Oh, Radament! Yes, 
yes. Ooh, a foul creature...
 
Some of my exploding potions should do 
quite nicely against him. They usually 
work well against the undead.
`,_T=`49
I've just been reading something 
interesting about this sort of undead. 
Apparently, certain Horadric funereal 
priests altered the bodies of their dead 
mages with magical and surgical 
techniques -- often replacing body 
parts with those of animals.
 
This was thought to augment their 
powers, and raise their status in the 
afterlife.
`,WT=`68
Drognan told me something interesting 
earlier today. It might explain why 
Radament is so restless, and it might 
have something to do with why he is 
stealing human body parts.
`,zT=`41
The Horadric mummies were created to 
protect the tombs, but Radament is far 
from his burial chamber. Given the 
aberrations that have been witnessed 
lately, it comes as no surprise that 
even the ancient guardian spells have 
begun to unravel. Be wary of this as 
you venture farther into the desert.
`,QT=`76
You've killed Radament, eh? That's quite 
a nice piece of work! If you ever need a 
job as a mercenary, I'd be happy to 
sign ya' up.
`,OT=`52
From what you tell me, it would seem 
that Radament was bent on the task of 
reviving his own mummified corpse 
with the flesh of the living.
 
This is very unusual indeed. It takes an 
incredible magic power to alter the 
singular purpose of an undead mind.
 
Perhaps there is a power at work here 
which is beyond my ken.
`,KT=`61
Uh... Little of what I am able to hear is 
of any value. Radament's death, 
however, is news worth hearing. I'm 
sure Atma will be glad to hear of this.
`,XT=`62
Good job mate! At night out on my ship, 
I was often awakened by that fiend's 
awful moaning. I bet I rest easier now.
`,jT=`41
Whoah oh... 'Radament the Fallen', is it?
 
I've fallen off many a barstool and no 
one calls me 'Geglash the Fallen'. They 
might go so far as to say, 'Geglash, 
you've fallen!'
`,$T=`70
We ran into one of those old tomb 
guardians when I ran with my bandits. 
I know they aren't easy foes to face, so 
you sure have my respect. Have you 
told Atma yet?
`,YT=`142
Atma's been telling everyone what 
you've done for her.
`,JT=`102
As you have helped Atma and all of us, 
so shall I help you.
`,ZT=`57
If you haven't already, tell Atma that 
Radament is dead. It may help to ease 
the weight of her mourning.
`,ev=`50
They say that the taste of vengeance is 
bittersweet, but I find it to my liking. 
 
In addition to my undying gratitude, I 
have spoken on your behalf with the 
rest of the townspeople. The 
merchants have agreed to show their 
gratitude by offering their wares and 
services at lower rates.
 
Oh... Jerhyn wants to see you, too. 
You'll find him in front of the palace.
`,av=`37
Ahh... The lost Horadric Scroll! What a 
fortunate turn of events...
 
As the last living Horadrim, I alone have 
knowledge of its meaning. Now, to read 
the Horadric runes it bears. Hmmm...
 
The Horadric Mages, after binding Baal 
within Tal Rasha, magically sealed off 
his Burial Chamber from the mortal 
realm. Those same Mages also crafted 
fearsome Horadric Staves and imbued 
them with the special power to open 
the Chamber's hidden door.
 
After nearly losing one to the thievery 
of a rogue sorcerer, they divided all 
the Horadric Staves into two parts - 
wooden shaft and metal headpiece - 
hiding them separately to safeguard 
them.
 
The Horadrim foresaw our current 
plight and designed the hiding places 
to reveal themselves to worthy heroes 
like you.
 
Collect both parts of a Horadric Staff 
and unite them using a Horadric Cube. 
Then, you may enter Tal Rasha's Burial 
Chamber.
`,nv=`50
The Viper Amulet you bear is actually 
the headpiece of a Horadric Staff!
 
Yes... You have an uncanny knack for 
finding rare and valuable artifacts. Of 
course, you'll have to use a Horadric 
Cube to combine the headpiece with the 
shaft.
`,tv=`56
The Staff of Kings! You astound me, my 
friend. You have discovered the shaft 
portion of a Horadric Staff.
 
I trust you know how to use a Horadric 
Cube to unite the shaft with its 
headpiece.
`,sv=`40
You have quite a treasure there in that 
Horadric Cube. According to Horadric 
lore, the Cube can restore a Horadric 
Staff.
 
To do it - use the Cube as you would a 
scroll. When the Cube opens, place 
both pieces of the Staff into it and use 
the Cube's transmute power.
 
You'll be pleased to know that the Cube 
has other alchemical uses as well...
 
Six gems plus one sword transmute into 
a socketed long sword.
 
You may also transmute two quivers of 
crossbow bolts into one quiver of 
arrows, while two quivers of arrows 
yield one quiver of bolts.
 
I must leave it to you to discover other 
formulae.
`,iv=`46
Excellent! You have a Horadric Staff.
 
Carry it with you into Tal Rasha's Tomb. 
Find within the Tomb the chamber 
whose floor is inset with the Circle of 
Seven Symbols.
 
Place the Staff into the receptacle you 
find there. That will open the secret 
passage into Tal Rasha's Burial 
Chamber.
 
But, be prepared for a fight - you'll 
likely have to kill Tal Rasha to destroy 
Baal.
`,lv=`110
My astrologers failed to predict this 
eclipse. You should seek Drognan's 
advice.
`,ov=`71
This midday darkness reeks of foul 
magic! My men and I are trying to keep 
the peace, but this kind of thing really 
scares people.
`,rv=`65
Two men arrived late last night bearing 
a story about evil magic. They said 
they saw a gathering of giant snake 
creatures performing some arcane 
ritual. They sound like the Serpent Men 
of the desert.
`,cv=`72
The sun has grown disgusted with the 
terrible deeds it must shine upon each 
day. Damnation is upon us all.
`,dv=`121
Drognan, the wizard, will have some 
idea as to what is happening.
`,uv=`100
This whole place is one big ale fog.
`,Hv=`70
This unnatural nightfall is no doubt 
caused by evil sorcery. Drognan might 
know what we are dealing with.
`,pv=`65
Claw Vipers! This outer darkness 
mirrors the inner blackness of their 
souls. It is they who have eclipsed the 
sun, I'll wager. They are a venomous 
band.
`,mv=`77
I've been researching this lengthy 
eclipse and I believe it to be the work 
of Claw Vipers.
 
Find their temple beneath the desert 
sands and you may find the source of 
this curse.
`,hv=`76
This permanent darkness is very 
unsettling. Hmmm... It would make 
navigation by stars easier for me, 
though.
`,Av=`62
Drognan may have some advice on this 
matter. Hmm... I think I'll speak with 
him myself.
`,Nv=`130
This eclipse is a definite manifestation 
of evil.
`,fv=`73
Don't worry! My men and I have an iron 
grip on this town. If those cursed Claw 
Vipers are plotting anything against 
us, we'll be prepared for 'em.
`,Mv=`73
The calculated coldness of the reptilian 
brain makes the Claw Vipers uncanny 
adversaries.
`,Cv=`49
It's strange when the morning after the 
night before... is still the same night.
`,gv=`105
I've had about enough of this darkness. 
I don't even know what day it is 
anymore.
`,kv=`77
The Claw Vipers practice evil magic. 
They have also been known to kidnap 
travelers and sacrifice them to their 
dark gods.
`,Sv=`82
Well... I don't know much about the 
habits of Claw Vipers, to be honest. 
Drognan will probably know something 
about the nature of the magic at work.
`,Tv=`51
I've discovered a reference to a similar 
eclipse several hundred years ago. It 
says that some desert-dwelling snake 
demons had erected an evil altar, 
which caused the sun to go black.
 
Perhaps we are dealing with something 
similar here. Look for an altar in the 
Claw Viper temple.
`,vv=`94
I usually charge for rooms by the night.
 
But I may have to soon change that.
`,xv=`57
The source of this spell is probably a 
magical altar. It will not be enough to 
kill the Claw Vipers. To reverse the 
spell you must destroy the altar.
`,yv=`80
I was going to go to bed, but then I 
realized that I have no idea what time 
it is. It could be the crack of dawn, for 
all I know.
`,Dv=`96
The sun again shines on Lut Gholein! I'm 
beginning to like you, traveler.
`,bv=`219
I'm glad that's over with!
`,Pv=`74
Ahh... It takes but one eye to revel in 
the beauty of our restored sun.
`,Ev=`60
So, this is daylight... It's over-rated.
`,wv=`80
With renewed daylight, one may gather 
the wits that were scattered about like 
restrictive undergarments in the 
darkness.
`,Rv=`130
So... Did you plunder any booty?
`,Bv=`132
You have done well to restore light to 
our world.
`,Iv=`87
Drognan seems to have taken you into 
his confidence. This is good, for you 
will benefit from his wisdom.
`,Lv=`69
Ahhh... Claw Vipers are fond of magical 
artifacts. Did you happen to find one in 
their temple?
`,Gv=`69
You did well in destroying the Claw 
Vipers. We are all glad to see the sun 
returned to its former glory.
`,qv=`48
I've been speaking with Lord Jerhyn, and 
I sense that he is becoming more and 
more agitated by something. You 
should try to talk to him again.
 
If he still won't take you into his 
confidence, seek to prove yourself a bit 
more. I gather that his respect for you 
is growing.
`,Uv=`41
I've been researching the old records, 
trying to find the location of Tal 
Rasha's Tomb. Though I haven't found 
the Tomb, itself, I may have a good 
lead for you.
 
The great Vizjerei Summoner, Horazon, 
built his Arcane Sanctuary somewhere 
around here. He was a powerful 
spellcaster and kept demons as slaves 
within the Sanctuary. He kept a close 
eye on great events, too -- such as the 
imprisonment of Baal within Tal 
Rasha's Tomb.
 
If you could find Horazon's Sanctuary, 
I'm sure that it would hold some clue 
as to the Tomb's location. Though I 
doubt Horazon is still alive, you must 
proceed with caution. There's no telling 
what could be waiting inside.
 
When I spoke of this with Lord Jerhyn, 
he asked that I send you to him. 
Perhaps he knows of a secret entrance 
or the like.
`,Fv=`46
Ah, the ancient mage Horazon! He 
believed that he could bend Evil forces 
to his will. What he didn't know was 
that Evil uses man, not the reverse.
 
The Vizjerei still revere him as a symbol 
of man's ability to triumph over other 
worldly forces. The Church of Light, 
however, cites him as an example of 
man's folly.
`,Vv=`89
The only thing in Jerhyn's cellar are the 
harem girls that have been hiding there 
since the troubles began.
`,_v=`62
An 'Arcane Sanctuary' under the 
palace? I'd heard that there were some 
underground cellar levels that Jerhyn 
used as chambers for his treasure and 
such, but no Arcane Sanctuary.
`,Wv=`44
When the troubles began here, I allowed 
the terrified Harem guilds to join me 
within the safety of the palace. All was 
fine, until one night...
 
Screams echoed up the stairwells from 
the harem. My guards arrived to find 
the poor girls being slaughtered by a 
merciless band of hell-spawned 
demons. My brave guardsmen tried to 
push the demons back into the 
mysterious rift from which they came.
 
Ever since, my men have fought a losing 
battle. Demons have continued to pour 
through the rift into the palace. 
Ultimately, I hired Greiz and his 
mercenaries to help protect the rest of 
my fair city.
 
Drognan believes that the Arcane 
Sanctuary lies buried underneath this 
palace, since Lut Gholein occupies the 
site of an ancient Vizjerei fortress.
 
My palace is open to you now... Take 
care.
`,zv=`45
I very much doubt that Horazon still 
lives in his Sanctuary. He possessed 
great power and influence over 
demons, but even that may not have 
been enough in the end. One of his 
notoriety cannot easily remove himself 
from the vengeful reach of Hell.
`,Qv=`60
Look, look... I'm just about as tough and 
arrogant as they come, but you'd never 
catch me trying to tame a demon for a 
pet. That's just asking for a lot of 
trouble.
`,Ov=`75
Arcane Sanctuary? That place sounds 
awful! Even if you find a way into it, 
what makes you think you'll be able to 
leave again?
`,Kv=`73
A careful caravan gives wide berth to 
sleeping bandits. If Horazon is gone, 
let him remain so.
`,Xv=`49
Horazon found it necessary to lock 
himself up for all time, just to protect 
himself from those angry demons. 
Such is the fate of one who practices 
the summoning arts... that, or eternal 
damnation. There's old summoners and 
bold summoners, but no old, bold 
summoners.
`,jv=`42
Nearly a thousand years ago, Horazon 
rose to the fore of the Vizjerei mage 
clan. Horazon used the knowledge of 
the Vizjerei to summon and control 
demons from Hell.
 
Though a powerful Summoner, Horazon 
feared that the Lords of Hell would 
punish him for enslaving their 
brethren. Thus, the Summoner created 
for himself an Arcane Sanctuary.
 
He believed that his Sanctuary would 
not only protect him from Hell's 
vengeance, but also allow him to 
continue his studies free from the 
ravages of time and disease.
 
Horazon had crafted many wondrous 
scrying devices through which he 
observed the events of the world 
outside. It is certain that he took 
careful study of Tal Rasha's 
imprisonment and recorded the 
location of his forgotten Tomb.
 
The Arcane Sanctuary was believed to 
have been constructed here in Lut 
Gholein. An entrance may be hidden 
somewhere in the palace, as that 
building is very old, and was once a 
Vizjerei fortress.
`,$v=`57
Ahh... The legend of Horazon is an old 
one, especially around these parts. You 
wouldn't believe the feats and strange 
events that are attributed to him.
`,Yv=`63
I understand that you've been talking to 
Jerhyn. Well, if so, then you're the first 
in a long while... since the trouble 
began, actually.
 
Do us a favor and try to find out what's 
got Jerhyn so edgy all the time. OK?
`,Jv=`48
There was an eastern mage... a Vizjerei, 
I believe... who visited me almost a 
year ago. He was very interested in the 
history of this site, and he seemed 
particularly fascinated with the palace 
architecture.
 
I gave him a tour. When he found the 
ancient seals over a passageway in the 
cellar, he became very agitated. He 
asked for some time alone to study 
them, and I granted it.
 
Shortly after, he left with no further 
word and I never saw him again. Odd... 
Don't you think?
`,Zv=`61
What's got you so occupied in the 
palace? Don't tell me you're finding the 
Harems more compelling than killing 
demons? That would be out of 
character for one such as yourself.
`,ex=`63
I am certain that you will find the 
information you need when you find 
Horazon's Journal. I suggest you find it 
quickly, for Diablo may be getting 
closer to freeing his brother as we 
speak.
`,ax=`68
Huh? The horizon is always out of 
reach, you should know that. Oh, 
Horazon! Oh, I see. Uh.
 
Yes. Well. He was insane. Brilliant, yes, 
but... total lunatic.
`,nx=`57
Even a sanctuary such as Horazon's 
can be breached by the tentacles of 
Evil. Such a haven could have become a 
chamber of unspeakable horrors. Be 
wary of what you may unleash!
`,tx=`49
All my years of brawling, of pummeling 
both the unsuspecting and the 
deserving, have yielded two insights. 
You can either fight or you can run. All 
other strategies are variations of 
these.
`,sx=`77
So... Now that you're such a pal of 
Jerhyn, why don't you ask him if I can 
set sail one of these days? I'm running 
out of patience.
`,ix=`87
So you've been in the palace, have you? 
Tell me, why does Jerhyn keep that 
place locked up so tight?
`,lx=`87
Fate is like a caged gorilla. It will pelt 
you with dung if you mock it.
`,ox=`51
I've been thinking about the problems in 
Jerhyn's palace. Perhaps this has 
occurred to you as well...
 
If those cellar passageways lead to the 
Arcane Sanctuary, then that is where 
the demons came from. Horazon's 
haven must have been breached!
`,rx=`37
Seekers of the Tomb of Tal Rasha will 
find it through the Portal. But know 
that the glowing glyphs recorded here 
in my Arcane Sanctuary are the signs 
of the six False Tombs.
 
The missing Seventh Sign marks the 
Tomb of Tal Rasha... Of the Horadrim 
he might be called the foremost.
 
It was a shining - but brief - moment for 
the Mage Clans when they set aside 
their differences and worked together 
against the common enemy.
 
The Horadrim relentlessly pursued the 
Three across the desolate Empires of 
the East, and even into the uncharted 
lands of the West, leaving the 
Archangel Tyrael's hands unblemished.
 
Presuming the Three to be vanquished, 
the Horadrim's unstable fellowship 
began to dissipate. Abandoning their 
sacred charge to safeguard the three 
Soulstones, the disparate Mage Clans 
began to squabble amongst each other 
over petty differences.
 
Their conflicts not only dissolved their 
brotherhood, but strengthened the 
Evils which they had buried beneath the 
cold earth.
`,cx=`59
Unbelievable! The Harem girls are dead! 
The palace guards have been fighting 
off demons from the cellar. How could 
that happen without my knowledge?
`,dx=`62
I thank you for your heroic aid! I'm also 
glad that you found something you 
were looking for. The journal should 
help you find the True Tomb of Tal 
Rasha. Hopefully, there is still time to 
get there before Diablo.
 
Go now. And good luck.
`,ux=`55
You have found Horazon's Journal. 
Excellent... But, I must caution you.
 
The mark of the True Tomb of Tal 
Rasha, is sought, if not already known, 
by Diablo. I needn't elaborate on the 
implications of that.
`,Hx=`71
News of the tragedy in the palace is 
spreading fast. How awful! And to 
think, this whole time I thought Jerhyn 
and his guards were in there playing 
with the harem girls.
`,px=`60
Hah! I wish Jerhyn would've let me in the 
palace. I would've saved those girls and 
kicked demon ass back to the fire-pits 
o' Hell!
`,mx=`52
So... Now we know Jerhyn's little secret. 
Well... I guess I can see why he wanted 
me to stay, though... I'm just glad it 
didn't come to that. Now he tells me to 
wait some more, in case you need to 
get out of here.
 
Well, for you I'll do it. Maybe they'll 
mention me in the epic ballads, eh?
`,hx=`67
Well, the news going around town is 
very unsettling. Apparently, we were in 
more danger than anyone thought.
 
Good work friend... you may have saved 
all our skins.
`,Ax=`64
Faith is stronger than any armor. The 
shield will protect the body, but Faith 
will strengthen the courageous heart.
`,Nx=`55
Horazon's urinal? Oh, journal! Yes, 
well... Glad you found it. Such a shame 
about those poor harem girls, huh? I 
shall miss them deeply... I mean their 
conversations, of course.
`,fx=`62
Oh, those poor women! Will the 
slaughter never end? Thank you once 
again for protecting our city.
`,Mx=`57
You must move quickly now, friend, for 
Diablo is undoubtedly close to finding 
what he seeks. Find the Tomb of Tal 
Rasha before he frees the Lord of 
Destruction.
`,Cx=`89
That guy really talks like that? Sounds 
like either Horazon has gone stir-crazy 
or that's some impostor.
`,gx=`57
The man you describe is probably not 
Horazon.
 
He sounds like the very mage who came 
around here a while ago. He was very 
curious about this palace and seemed 
especially interested in the seal on the 
passageway in the cellar. He left 
shortly after that. I wonder how he got 
down there? The seal was never 
broken...
 
That mage spoke a great deal to 
Drognan. Why don't you ask him about 
it?
`,kx=`47
Yes... The man you speak of sounds like 
the mage who came here many months 
ago. He claimed to have fought Diablo 
in the passages beneath Tristram.
 
No doubt the fool wandered into 
Horazon's Sanctuary and lost whatever 
was left of his ravaged mind. He is 
beyond salvation. 
 
It is possible that the fool has been 
possessed by the spirit of Horazon. If 
that's true, then you'd better put an 
end to his tortured existence.
 
Once done, I believe the demons who 
were summoned and imprisoned within 
the Sanctuary will cease to exist as 
well.
`,Sx=`57
Ah, yes. I remember. There was a... 
fellow around here many months ago 
who asked almost as many questions 
about Horazon as you.
 
So... He discovered enough to assume 
Horazon's place in the Arcane 
Sanctuary, huh? What a fool!
`,Tx=`72
Ah, yes. As a ship captain I am well 
aware of the phenomenon of a false 
Horazon.
 
Sorry, just a little joke.
`,vx=`99
There's nothing more dreadful than a 
powerful being driven by a frayed 
mind.
`,xx=`105
You always seem to find the worst 
trouble. I don't know how you handle it.
`,yx=`38
So! Horazon's crazy, eh? I'd be 
surprised if he wasn't. All those 
centuries without ale would drive 
anyone to drink... but then you couldn't 
drink. And that would drive you to 
drink... Hah?... What was the question?
`,Dx=`63
Hmmm... That doesn't sound like 
Horazon. I'll agree that he may have 
gone mad, but from what you tell me, I 
don't think that's the case. Talk to 
Drognan... he may know more than I.
`,bx=`106
Ugh... Crazy mages give me the creeps.
 
Just kill him and get on with your 
business.
`,Px=`45
The appearance of the mage you 
describe sounds like one I met back in 
Tristram. Many Vizjerei came to fight 
against Diablo, the Lord of Terror. 
Perhaps, this is one of them.
 
You know, fate seems to have frowned 
upon all of the heroes who confronted 
that terrible Evil. Take care or the 
same may happen to you.
`,Ex=`76
So, Horazon's been dead for some time. 
I take it you at least found what you 
were looking for.
`,wx=`60
The way I see it... Well, it's all pretty 
blurry.
`,Rx=`63
The demonic force that was emanating 
from the corrupted Sanctuary has 
dissipated. I thank you greatly for your 
help. Now, we can look to rebuilding 
our lives.
 
All will be for nothing, though, if you do 
not stop the greater Evil which is 
rapidly gaining ground.
`,Bx=`83
Larger forces are moving inexorably 
towards us. You must now make haste 
to the Tombs.
`,Ix=`65
You make me long for the days of glory. 
When I had both hands, both eyes and 
more of a foot...
`,Lx=`84
I guess you'll be heading to the Tombs 
now? I hear that they're in the deepest 
desert regions.
`,Gx=`100
Well! You've got what you're after. Now 
get a move on before it's too late.
`,qx=`103
Huhhh... Such is always the fate of 
those who meddle with evil.
`,Ux=`89
You're more the hero than I could have 
dreamed. Perhaps, there is hope for us 
after all.
`,Fx=`74
I feel no pity for that would-be 
Summoner. His terrible ambition for 
demonic power was his undoing. You 
merely hastened the inevitable.
`,Vx=`48
I hope that this false Summoner found 
peace in death. Unfortunately, it is 
more likely that he will be dragged 
down into Hell by the demons he was 
bound to.
 
Let this be a lesson to you... Demonic 
magic is a quick path, but its powers 
are seductive and deadly.
`,_x=`45
I have heard of your many deeds of skill 
and bravery. I feel I can trust you with 
something I have been hesitant to 
speak of...
 
Drognan and I have concluded that the 
Dark Wanderer who passed through 
here recently was Diablo, himself! 
Drognan believes that Diablo is 
searching the desert for the secret 
tomb where the great Horadric mage, 
Tal Rasha, keeps Baal imprisoned.
 
You must find Diablo and put an end to 
the terrible evil that has fallen upon 
our city. Drognan is wise and is sure to 
have some helpful advice for you as to 
how Tal Rasha's tomb may be found.
 
It may take you quite some time to find 
The Tomb. May you be ready when you 
do.
`,Wx=`53
It is well-known that there are seven 
great Horadric tombs hidden beneath 
the sands in the furthest reaches of 
the desert. One of them surely must be 
Tal Rasha's prison. You must explore 
each of the tombs to find Tal Rasha's 
exact location.
 
Of course, Diablo is searching for the 
Tomb as well... No one can guess as to 
what terrors he has unleashed in his 
search.
`,zx=`59
So... You're going to search for the 
Seven Tombs, huh? Don't you know 
that they're just desert legends passed 
between merchants and travelers? No 
one really believes that they exist.
`,Qx=`61
Be very careful, my friend. I think I've 
seen enough recently not to doubt that 
these Tombs exist. And if they do, 
they're most certainly guarded by 
terrible creatures.
`,Ox=`67
I've heard legends of the Tomb of Tal 
Rasha, but I thought they were just old 
tales meant to scare young children.
`,Kx=`59
Ohh... I'd go with ya' to those tombs... 
But... umm... I don't like all that living 
dead stuff.
`,Xx=`84
I'm sorry, I can't help you much here. 
Now, if the tombs were across the 
ocean, then I'd be the guy to talk to.
`,jx=`57
Legend has it that Tal Rasha lies 
imprisoned within his tomb, forever 
struggling to keep the Lord of 
Destruction bound. His was a selfless 
act, although perhaps foolhardy.
`,$x=`56
When Tal Rasha chose to embody the 
spirit of Baal, he knew his doom was to 
wrestle eternally against the will of the 
greater Evil. Look around you and ask 
yourself, 'Has the battle been won or 
lost?'
`,Yx=`55
Tal Rasha's tomb is hidden deep in the 
desert among six others. Tal Rasha's 
symbol marks the True Tomb. If you 
want to know what that symbol is, you 
should be able to find it within the 
legendary Arcane Sanctuary.
`,Jx=`57
Diablo nears his goal. We have little 
time to lose.
 
Remember, my friend, that Andariel 
gave herself willingly to Diablo's cause. 
It would be prudent to assume that the 
other Evils will attempt to aid their 
master as well.
`,Zx=`106
If you're going into the deep desert, why 
not hire a few of my men to watch your 
back?
`,ey=`47
You have done very well. Few could have 
come this far, let alone discover the 
True Tomb of Tal Rasha. Unfortunately, 
I hear that Diablo and Baal have eluded 
your grasp. This is most unfortunate...
 
If you wish to travel East, I have 
authorized Meshif to give you passage 
by sea. I imagine he should be very 
anxious to leave by now.
 
Good luck on your quest, and thank you 
again for saving my beloved city. You 
will always be welcome in Lut Gholein, 
my friend.
`,ay=`71
I heard that Diablo has managed to 
best you, at least for the time being. I 
hope you catch up with him soon, and 
send him back to Hell for good!
`,ny=`70
I'm sorry things didn't turn out as you 
had hoped. Go and remember us 
fondly. You know, you bothered me far 
less than most.
`,ty=`64
You have proven to be the greatest of 
heroes, and I am honored to call you 
friend. Thank you for bringing peace to 
our lives again.
`,sy=`68
Never fear, my friend. You did the best 
you could.
 
I suspect that Diablo and Baal are now 
heading east, towards Kurast. You'll 
find them... I know you will.
`,iy=`46
This is terrible news! Baal is in 
possession of one of mankind's most 
powerful mages, and the Lord of Terror 
guides his path. They must be stopped, 
for I am sure they mean to free their 
elder brother Mephisto, the Lord of 
Hatred, who lies imprisoned under the 
corrupted city of Kurast.
 
I fear you are walking into a great evil, 
but your faith can save you. May you 
walk in the light always.
`,ly=`54
You're an inspiration! And such a hero 
that it makes me look twice as bad...
 
Ahh, you're OK... Hey! Just save some 
glory for us little guys, huh?
`,oy=`51
This is a serious setback... It is most 
unfortunate that Tal Rasha has been 
consumed by Baal's destructive 
influence. There are many secrets 
known to the Horadrim, which could be 
used by Baal against us.
 
You must travel east by sea to Kurast 
and stop Diablo and Baal before they 
free their eldest brother, Mephisto.
 
Hahh... The lands of the eastern Empire 
are not the same as they used to be. 
There has been little word for some 
time.
 
Speed is of the essence. Go quickly, my 
friend. May the fates smile on you.
`,ry=`82
Jerhyn tells me I should take you east to 
Kurast. I haven't been there for several 
years, but rumor has it that things are 
pretty grim.
`,cy=`51
I've heard that your foe got away from 
you this time. Well, look at it this way... 
you've got the demons on the run. If 
you're going to be leaving, then... Well, 
thanks for your help.
`,dy=`39
The Archangel Tyrael was the one who 
gave the Soulstones to the Horadrim 
two hundred and sixty years ago.
 
It is highly unusual for the forces of 
Heaven to so directly interfere with 
man's destiny, but Tyrael was said to 
act of his own volition. We have never 
been able to discern why.
 
Perhaps, he goes against the consensus 
of Heaven because he doubts our 
ability to defend ourselves, or perhaps, 
he sees more threat than his peers.
 
Where the actions of Hell often seem 
straightforwardly bent on destruction, 
the motives of Heaven are 
unfathomable.
 
Now make haste... Both Diablo and Baal 
must be stopped before they join with 
their brother, Mephisto. If the three 
Prime Evils unite once again, the world 
as we know it will be no more.
`,uy=`48
Greetings, hero. I've heard of your 
exploits and... I'm quite impressed. 
Very few mortals are capable of 
dealing with the Three and their 
minions as you have.
 
My name is Natalya. I am a hunter of 
Evil, part of an ancient Order sworn to 
hunt down corrupted sorcerers.
 
If I could, I would gladly join your quest 
to stop the Three. But I must wait here 
for further news. I can't predict what 
will happen, but the danger is greater 
than we can know.
 
Until I receive my orders, I'll assist you 
with the information I have.
`,Hy=`74
Asheara...? Oh, she's is a tough-talking 
mage, but I'd wager she's never faced 
true Evil.
 
Pampering drunken mercenaries is one 
thing, but standing face to face with a 
hell-spawned demon is another.
`,py=`69
I've heard the name of Deckard Cain 
many times. He's the last of the 
Horadrim, and thus, I must honor him. 
You must be powerful, indeed, if one 
such as he accompanies you.
`,my=`100
Hratli is a master craftsman. My Order 
could make use of one with his unique 
skills.
`,hy=`67
My Order has been keeping watch over 
Ormus for many years, now. He seems 
to champion the cause of good, but 
who knows what shadow lurks within 
his soul?
`,Ay=`45
I've not set foot in glorious Kurast for 
many years. But I never would have 
imagined it could be so corrupted.
 
Certainly, this must be Mephisto's work! 
You'd best get going, my friend. Diablo 
and Baal are still out there and you 
must find them.
`,Ny=`62
Seeing his homeland in such a state 
must be horrifying to Meshif. I'm 
surprised he's willing to remain here in 
order to help you.
`,fy=`82
Asheara seems like a very tough 
woman. I'd be careful around her if I 
were you.
`,My=`53
Drognan told me of Hratli when we were 
in Lut Gholein. He said that he weaves 
magic into his forge and produces 
mystical weapons and armor.
 
His skills could be quite useful to you. 
`,Cy=`44
Judging from his dress and strange 
markings, I would guess that Ormus is 
from the ancient Taan mage-clan. Yet 
none of the others here seem to know 
that he is a sorcerer.
 
The Taan were once as powerful as the 
Vizjerei clan, but their studies were 
even more secretive. I wonder what 
he's hiding.
`,gy=`49
Have you met, Natalya? She appears to 
be a member of the Khral-Harzhek, a 
secret order that has been around for 
centuries... almost as long as the 
Horadrim, itself.
 
Her presence here makes me uneasy, 
for they are traditionally sworn to hunt 
down Magi who have betrayed the trust 
of their order.
 
I wonder why she is here.
`,ky=`73
Ormus would like you to think him mad. 
Better to watch his actions than listen 
to his words.
`,Sy=`33
Welcome to Kurast, traveler. Few come 
willingly to this ancient city anymore. I 
hope you brought your wits with you, 
for sanity is in short supply here.
 
My name is Hratli. I am a sorcerer 
skilled in metal work. It'd be a pleasure 
to help you... I don't have many 
customers these days.
 
As you can see, the populace has been 
brutally decimated by the forces of 
Mephisto. The canals run red with 
blood and demons roam the land.
 
The wretched jungle-hell has already 
reclaimed much of Kurast. The only 
safety you'll find is here at the 
dockside, where a magical warding 
holds the jungle evils at bay... but I 
don't know how long it will last.
 
To make matters worse, the Children of 
Zakarum are in league with the forces 
of Mephisto. The Zakarum have 
concentrated their power in the Temple 
City of Travincal, located within Kurast 
deep in the jungle wilderness.
 
It's true... Their zeal is unmatched. But I 
say the so-called 'Warriors of Light' are 
nothing more than the twisted puppets 
of a hidden hand.
`,Ty=`33
Welcome to Kurast, young Sorceress. 
Few come willingly to this ancient city 
anymore. I hope you brought your wits 
with you, for sanity is in short supply 
here.
 
My name is Hratli. I am a sorcerer 
skilled in metal work. It'd be a pleasure 
to help you... I don't have many 
customers these days.
 
Though my own magic is only useful for 
making enchanted weapons, I'll bet 
yours will put an end to this terrible 
evil once and for all. May the spirits of 
Skatsim watch over and protect you.
 
As you can see, the populace has been 
brutally decimated by the forces of 
Mephisto. The canals run red with 
blood and demons roam the land.
 
The wretched jungle-hell has already 
reclaimed much of Kurast. The only 
safety you'll find is here at the 
dockside, where a magical warding 
holds the jungle evils at bay... but I 
don't know how long it will last.
 
To make matters worse, the Children of 
Zakarum are in league with the forces 
of Mephisto. The Zakarum have 
concentrated their power in the Temple 
City of Travincal, located within Kurast 
deep in the jungle wilderness.
 
It's true... Their zeal is unmatched. But I 
say the so-called 'Warriors of Light' are 
nothing more than the twisted puppets 
of a hidden hand.
`,vy=`48
You're very brave to have come here. In 
the old days, mages who didn't belong 
to one of the great Mage Clans were 
hunted down as renegades. But now, 
the Mage Clans have little authority.
`,xy=`53
Within the Temple City stands a tower 
built long ago by the Horadrim to 
imprison the... Well, you'll discover 
more about it soon enough.
`,yy=`60
If you are another follower of Zakarum, 
I've told you people before I don't want 
your Towering Spire or anything else 
you have to sell!
`,Dy=`74
Some find my prices unreasonable. That 
is because I am unreasonable.
`,by=`76
You'll find that the Zakarumites have 
the persistence of zombies, but without 
the charisma.
`,Py=`60
Asheara leads the mercenary company 
known as the Iron Wolves. You can hire 
some of them, but many are occupied 
securing the dockside.
`,Ey=`74
Alkor is a potion dealer given over to a 
life steeped in ceaseless study and 
dissipation.
`,wy=`58
Ormus is a man of many mysteries. I 
sense strong magic about him, but he's 
never spoken of it to me.
`,Ry=`49
I trust you already know Meshif. But did 
you know that he was born and raised 
here?
 
I suspect that like many of us his spirit 
is near broken at the sight of Kurast's 
decline. Only our brand of gallows 
humor saves us from utter despair.
`,By=`55
This, Cain, whom you brought with you. 
He has the bearing of great power, yet 
I sense no magic about him. He is an 
enigma to me.
`,Iy=`49
Natalya is a quiet one. She arrived here 
about a week ago and has pretty much 
kept to herself. She's inquired about 
my weapons a few times, so I assume 
that she's a warrior of some sort.
`,Ly=`51
Well, I gave you my word, and brought 
you here as promised.
 
But by all that's still holy, I wish I'd 
never returned to this accursed place. 
This fetid jungle can't be the fair 
Kurast I left behind.
 
I don't know what all this evil is, my 
friend, but it's obvious that you must 
stop it. I only pray that you can before 
the jungle consumes the last vestiges 
of my beloved homeland.
`,Gy=`47
Being a Barbarian, I'm sure you've seen 
many strange sights in the northlands.
 
But by all that's still holy, I wish I'd 
never returned to this accursed place. 
This fetid jungle can't be the fair 
Kurast I left behind!
 
I don't know what all this evil is, my 
friend, but it's obvious that you must 
stop it. I only pray that you can before 
the jungle consumes the last vestiges 
of my beloved homeland.
 
If this evil isn't contained, it could 
spread north to your homeland, too. 
Then the whole world would fall under 
the shadow of the Three.
`,qy=`63
It takes great courage and generosity 
to defend a land and a people that are 
not your own. Perhaps, when this curse 
is lifted, my people can do something 
for yours in return.
`,Uy=`72
I shouldn't have boasted so much about 
Kurast on the journey here. Oh... Much 
has changed since I left.
`,Fy=`99
The dockside is apparently the only 
civilized area left in Kurast.
`,Vy=`88
If you are planning to carry on your 
wild ways here, you may need the 
assistance of Asheara's Iron Wolf 
mercenaries.
`,_y=`75
Your companion, Cain, must have 
known that he would be in grave 
danger here. You are great, indeed, to 
elicit such loyalty.
`,Wy=`81
Hratli seems to be the only one left here 
with any common sense. Yet how 
sensible is it to remain here?
`,zy=`80
I went to speak with old Alkor, but I 
disturbed his studies. He doesn't seem 
to like visitors.
`,Qy=`73
Trying to get information out of Ormus 
is like straining water from a rock. His 
damned riddles are almost as 
confusing as our current state of 
affairs.
`,Oy=`75
That woman, Natalya, seems to be 
waiting for something important to 
happen. She's a strange one, I think.
`,Ky=`68
All through my childhood, Kurast was a 
paradise. The once perfumed air now 
reeks of putrefaction.
`,Xy=`54
Hello, there. You must be a great 
adventurer to risk coming here.
 
My name's Asheara, and I lead the 
mercenary band of mages known as 
the Iron Wolves. We've been hunting 
down demons in the jungle for months, 
but no matter how many of them we 
kill, they just keep comin'. Seems this 
whole place has been overrun by evil.
 
Rumor has it that you've come here to 
help. If that's true, then I'll let you hire 
some of my mercenaries.
 
But be careful... If you piss them off, 
they can be worse than those monsters 
out in the jungle.
`,jy=`50
Hello, there. You must be an Amazon. 
I've heard about your people... nomadic 
warriors without peer.
 
My name's Asheara, and I lead the 
mercenary band of mages known as 
the Iron Wolves. We've been hunting 
down demons in the jungle for months, 
but no matter how many of them we 
kill, they just keep comin'. Seems this 
whole place has been overrun by evil.
 
Rumor has it that you've come here to 
help. If that's true, then I'll let you hire 
some of my mercenaries.
 
But be careful... If you piss them off, 
they can be worse than those monsters 
out in the jungle.
`,$y=`66
Your skills are unique indeed. They are 
neither sorcery, nor physical, but seem 
to be a harmonious blend of the two. 
The Iron Wolves could learn much from 
your kind.
`,Yy=`160
Why fight fair, when you can hire some 
of us?
`,Jy=`107
No one comes to Kurast anymore 
without good reason.  You must be 
seeking fame and fortune.
`,Zy=`137
The Iron Wolves and I have made a 
good living around here lately.
`,eD=`110
The jungle can take you down fast. Try 
to avoid getting trapped out there if 
you can.
`,aD=`90
Hratli may be a bit too clever for his 
own good. Still, I'd trust his work 
anytime.
`,nD=`77
Hratli thinks he's so funny. The other 
day he said, 'Asheara, I don't recognize 
you without that big gash on your 
face.'
`,tD=`97
Meshif says he used to live here. I'm 
surprised he came back. I'll bet he 
wishes he hadn't.
`,sD=`78
I invited Natalya to join the Iron Wolves 
and she began lecturing me about the 
'dangers of magic'. Who the hell does 
she think she is, anyway?
`,iD=`61
Damn it, I wish you people would just 
leave me alone! I...
 
Oh, you're new here, aren't you?
 
I am Alkor, the Alchemist. I dabble in 
potions and salves, and I can sell you 
some if you really need them.
 
But don't make a habit of coming here. I 
don't like to be disturbed while I'm 
studying!
`,lD=`48
Damn it, I wish you people would just 
leave me alone! I...
 
Oh, you're a Necromancer, aren't you? 
I've heard that your kind use powerful 
potions and such to wake the dead and 
control spirits. I'd love to discuss what 
components you use some time.
 
I am Alkor, the Alchemist. I dabble in 
potions and salves, myself, and I can 
sell you some if you really need them.
 
...Feel free to drop by anytime.
`,oD=`55
Even I can tell that the evil in the jungle 
is growing. I hope you survive out 
there, my pasty friend. I'd still like to 
discuss what components are best 
used in necromantic potions.
`,rD=`151
Care to take a gander at my Grimoire?
`,cD=`90
I've never claimed that you'd live forever 
after trying one of my potions! Merely 
that you might look as though you had.
`,dD=`105
I keep a library of tomes - heretical, 
exegetical, hermeneutical and 
pharmaceutical.
`,uD=`50
There was a very fat man here recently 
asking after the Golden Bird of Ku 
Y'Leh. Have you heard of it? He kept 
muttering about ashes. I would imagine 
one Golden Bird's ash-hole to be about 
the same as another, wouldn't you?
`,HD=`150
I hope you don't object to my badgering 
the witless.
`,pD=`115
You came here with Meshif? That old 
'tour-guide to the stupid'!
 
I'm surprised you made it here in one 
piece.
`,mD=`98
Oh, Asheara's a good customer. She 
buys a potion of manliness from me 
every week.
`,hD=`82
Hratli's only good for making his silly 
magic weapons. It's not like he's got 
the stones to actually go out and use 
them on anything.
`,AD=`88
Oh, Ormus has been talking in riddles 
for years. I think he does it to cover up 
the fact that he's got nothing 
intelligent to say.
`,ND=`52
Yes, Natalya is a cute girl. However, I 
think she could use a special potion.
 
Let me see here, 'Radiant Beauty'... No. 
'Ray of Sunshine'... No, that's not it.
 
Ah, here it is: 'Relax Frosty Bitch'. This 
should help her out.
`,fD=`38
You now speak to Ormus.
 
He was once a great mage, but now 
lives like a rat in a sinking vessel. You 
have questions for Ormus and doubt in 
yourself. Ormus sees a strange 
dichotomy in you... as he does in all 
would-be heroes.
 
Speak to him and he may grant you 
wisdom in turn. Or turn from him and 
seek wisdom in thyself.
`,MD=`37
You now speak to Ormus, good Paladin.
 
He was once a great mage, but now 
lives like a rat in a sinking vessel. You 
have questions for Ormus and doubt in 
yourself. Ormus sees a strange 
dichotomy in you... as he does in all 
would-be heroes.
 
Speak to him and he may grant you 
wisdom in turn. Or turn from him and 
seek wisdom in thyself.
`,CD=`68
The Church which you serve is 
corrupted by evil. Yet the holy 
disciplines it taught you may yet save 
us all.
 
This is a strange time for heroes, 
Ormus thinks.
`,gD=`65
Your salvation can only be reached 
through Hatred. A strange fate, but a 
true one.
`,kD=`52
How does one destroy Destruction? How 
does one force Terror to flee in fear? 
You have great tasks ahead of you, 
Ormus thinks.
`,SD=`72
The Church of Light harbors the darkest 
shadow of all. Tread lightly.
`,TD=`89
When speaking of the dead, it is best to 
remain cryptic.
`,vD=`84
The Travincal can be breached by the 
loss of one's wits, not by the use of 
them.
`,xD=`95
Alkor is able to explain things much 
more clearly than Ormus.
`,yD=`58
For one who spends so much time away 
from home, Meshif has taken Kurast's 
corruption the hardest.
`,DD=`91
Asheara is both proud and 
self-conscious of her womanhood.
`,bD=`65
Deckard Cain... Ormus has no time for 
the last son of the Horadrim. Pride led 
that holy Order to failure.
`,PD=`63
Hratli suspects that Ormus is a mage. 
He can suspect whatever he wants, 
Ormus will not show him the true 
magic.
`,ED=`53
Back in Lut Gholein Meshif told me he 
had a fondness for jade figurines. On 
his trading voyages he collected an odd 
assortment of such small statues.
 
I would show him your figurine. 
`,wD=`160
Only Deckard Cain can make sense of 
this.
`,RD=`73
Praise you! That jade figurine will 
complete the set I was collecting.
 
Here! I've had this statuette of a golden 
bird for years, but I consider it a fair 
exchange.
`,BD=`89
I'm having fun just watching you run 
from place to place searching for a 
Golden Bird. Some hero you are.
`,ID=`47
I've read legends about a sage named 
Ku Y'leh, who studied the mysteries of 
life beyond death.
 
If I remember correctly, his ashes were 
ensconced within a golden statuette. It 
was a very strange tale.
`,LD=`134
You will have to take Ku Y'leh's ashes to 
Alkor.
`,GD=`96
Such a beautiful statuette... But, you'd 
think it would've been better cared for. 
There's a compartment here that's full 
o' dust.
`,qD=`73
Ah, the Golden Bird of Ku Y'leh.  Thank 
you, my friend. 
 
Busy yourself while I experiment with 
the ashes within it. Then, return and 
see what I have made for you.
`,UD=`51
Ku Y'leh, in searching for immortal 
youth, found only an early death. His 
apprentices, seeking to live forever, 
burned his body in order to derive 
benefit from his ashes.
`,FD=`50
Ku Y'leh was a powerful sage who was 
rumored to have brewed a potion of 
immortality. In an ironic twist of fate, 
he was murdered before his potent 
elixir could take effect.
`,VD=`78
Don't tell me you believe in all of that 
'life after death' nonsense. You should 
be more concerned with avoiding death 
than making plans for after it finds 
you.
`,_D=`120
From the ashes of Ku Y'leh I have mixed 
for you a potion.
`,WD=`94
Immortality is definitely not for me.
 
Can you imagine having to wake up 
every night just to piss for the next 
thousand years?
`,zD=`63
So, Meshif had the Golden Bird all 
along. I wonder if he knows what he 
gave up for that jade figurine.
`,QD=`54
Ormus remembers the tale of Ku Y'leh. 
That venerable sage forgot that there 
is no life beyond death. There is only 
life.
 
Once prolonged unnaturally, it can 
become a living hell.
`,OD=`67
I must admit, your foolish quest made 
little sense to me. But now I see the 
value of your actions. I believe you do 
possess great wisdom.
`,KD=`33
Never forget that your ultimate purpose 
here in Kurast is to destroy Mephisto. 
The ancient Horadrim imprisoned the 
Lord of Hatred inside the Guardian 
Tower that is located within the Temple 
City of Travincal.
 
Know this, friend. The only way to gain 
entry to Mephisto's prison is to destroy 
the artifact known as the Compelling 
Orb.
 
Mephisto used this device to control the 
Zakarum Priests and their followers. 
The Orb can only be destroyed with an 
ancient flail imbued with the spirit of 
the one incorruptible priest.
 
Soon after his imprisonment, Mephisto 
worked his evil corruption on the 
Zakarum priesthood. All were turned to 
his dark ways, save one - Khalim, the 
Que-Hegan of the High Council.
 
Mephisto directed the other Council 
priests to slay and dismember Khalim 
and then scatter his remains across 
the Kingdom. The Priest Sankekur 
succeeded Khalim as Que-Hegan, 
eventually becoming the embodiment of 
Mephisto here on the mortal plane.
 
The corrupted High Council fashioned 
an Orb to control the rest of the 
Zakarum faithful and used their powers 
to hide the lair of their master from 
mortals.
 
Your task is to collect the scattered 
relics of Khalim - his Heart, his Brain, 
and his Eye. Then, using the Horadric 
Cube, transmute Khalim's Flail with his 
relics.
 
Once this is accomplished, you must 
destroy the Compelling Orb with 
Khalim's Will to open the way into the 
corrupt sanctum of Mephisto.
`,XD=`61
You have found Khalim's Heart, and it 
still bears the courage to face 
Mephisto!
 
Place it in the Horadric Cube along with 
Khalim's other relics - the Eye, the 
Brain, and the Flail.
`,jD=`52
Ahh... Khalim's Eye! Only it can reveal 
the true path to Mephisto.
 
Place the Eye in the Horadric Cube 
along with Khalim's other relics - the 
Heart, the Brain, and the Flail.
`,$D=`58
This is most fortunate! Khalim's Brain 
knows Mephisto's weakness.
 
Place it in the Horadric Cube along with 
Khalim's other relics - the Eye, the 
Heart, and the Flail.
`,YD=`46
Once properly imbued, Khalim's Flail can 
destroy the Compelling Orb and reveal 
the way to Mephisto.
 
Place it into the Horadric Cube along 
with Khalim's relics - his Heart, his 
Brain, and his Eye. Then, transmute 
them to carry out Khalim's Will.
`,JD=`54
Masterfully done, hero! You have 
crafted Khalim's Will. Employ it to 
destroy the Compelling Orb and open 
the way to Mephisto. 
 
May the true Light guide your way.
`,ZD=`56
It pains me to waste time with you, so 
I'll get right to the point.
 
There is a very special book which you 
must find for me. It was written long 
ago by a sage known as Lam Esen, who 
studied Skatsimi magic and the effects 
of the Prime Evils on the mortal world. 
The Black Book was lost when the 
Children of Zakarum took over this 
land.
 
Now, you must reclaim it without delay! 
Its knowledge may aid us in this dark 
time ahead.
`,e4=`73
The Black Book contains powerful 
secrets of Skatsim, the Old Religion, 
long eclipsed by Zakarum.
 
I should warn you. The Black Book is 
much sought after by both good and 
evil. Be wary.
`,a4=`62
The Children of Zakarum believe that 
the Black Book is filled with 
blasphemous heresy. In truth, the book 
may contain the secrets to our ultimate 
redemption.
`,n4=`73
Oh. No one really believes that the Black 
Book exists. It's just a symbol of 
Zakarum's anti-Skatsim propaganda.
`,t4=`102
Many things can be found in the city of 
Kurast. The book may be there.
`,s4=`54
We have long sought the Black Book of 
Lam Esen. Rumors of its whereabouts 
spread as fast as jungle plagues. If you 
find it, take it to Alkor.
`,i4=`72
The Black Book is a powerful source of 
information. The Zakarum will do 
everything in their power to stop you 
from obtaining it.
`,l4=`81
I've heard of the Black Book. My Order's 
code is based on many of its passages. 
If you find it, I will be greatly 
impressed.
`,o4=`104
Did I neglect to mention that the book 
contains useful information about the 
Prime Evils?
`,r4=`55
Even if you find the sacred Book, you 
must still traverse the jungle of 
meaning within it. That journey could 
prove to be far more perilous.
`,c4=`56
Kurast was once the greatest city in the 
world. Now it is hard to tell where the 
jungle stops and the city begins. The 
jungle grows rampant on the soil 
enriched by the blood of my fellow 
citizens.
`,d4=`68
I believe I can trust you now.
 
When you first arrived, I suspected you 
a spy for the Zakarum, the false 
religion whose faithful are now under 
the sway of a mysterious power. 
They've made a mockery of the Old 
Religion of Skatsim.
`,u4=`62
Not getting much help?
 
You know, people are like rugs. Hang 
them out a window and shake 'em a 
couple times. You'll be surprised how 
much dirt comes out.
`,H4=`81
I heard that there are ruined temples in 
Kurast. Perhaps you will find the Black 
Book in one of them.
`,p4=`105
I hope you find the Black Book soon. I 
could use something to read while I 
wait for my orders.
`,m4=`83
You have found the Book! It should give 
all of us here some insight into the 
nature of the Prime Evils...
 
Ah, but as for you...
`,h4=`70
Why is the Black Book of Lam Esen like 
a coffin? Simple. Each holds the shape 
of our future.
`,A4=`75
Thank all that's holy. You've returned 
with the Black Book! Maybe now you 
can put an end to the Evil that has 
destroyed my homeland.
`,N4=`135
The Iron Wolves are very impressed by 
your skills.
`,f4=`74
We have the Book. Now we must see if 
we can bear its revelations.
`,M4=`86
You have found a source of information 
powerful enough to turn the tide 
against the Zakarum.
`,C4=`89
So, you've returned with the Book. You 
surprise me. You must be very 
resourceful.
`,g4=`45
As I told you before, I placed an 
enchantment upon the dockside in 
order to keep the demons at bay. But 
lately, the enchantment seems to be 
weakening.
 
If memory serves me correctly, there is 
a holy Skatsimi blade that could 
revitalize the enchantment. The blade 
is called the Gidbinn.
 
Find it, and our sanctuary here will 
remain safe.
`,k4=`66
Have you not heard of the Gidbinn? 
Well, allow me to reduce your 
ignorance on the subject.
 
The Gidbinn is an enchanted dagger - a 
religious artifact greatly valued by the 
Old Religion, Skatsim.
`,S4=`64
Ormus is familiar with the Gidbinn. But 
how would a powerful Skatsimi artifact 
aid an unbeliever like you?
`,T4=`66
The Gidbinn is one of the few remaining 
relics of Skatsim, the Old Religion. It is 
reputed to have great powers.
`,v4=`107
The Gidbinn will reinforce the 
enchantments that protect the 
dockside from the evil that infests 
Kurast.
`,x4=`54
As far as we know, the Gidbinn is in the 
possession of the Children of Light. 
They do not wish it to fall into the 
hands of those who can restore its 
powers.
 
You may not believe it, but Ormus is the 
one who can use the Gidbinn to protect 
us.
`,y4=`55
I've done some research on the Taan 
mage-clan, and it seems that most of 
their magical studies were focused on 
Skatsimi rites.
 
If anyone is qualified to use the powers 
of the Gidbinn, it would be Ormus.
`,D4=`73
Don't let the Gidbinn's size fool you. 
Though it is only a small dagger, it 
holds tremendous power when in the 
hands of a true Skatsimi mage.
`,b4=`70
Legend has it that the Skatsimi priests 
placed great power within the small 
blade. Power enough to repel this 
terrible jungle-curse which encroaches 
on our sanctuary.
`,P4=`83
If we are to have peace from the 
shadow, you must find the weapon 
which will destroy the Light.
`,E4=`67
The jungle is like nothing you've ever 
seen before. Imagine Paradise 
festering like a wound... then bursting!
`,w4=`145
I'm certain that the Gidbinn is very 
closely guarded.
`,R4=`70
Once the Gidbinn is found, Ormus will 
use it to strengthen the protective 
barrier around the dockside.
`,B4=`75
Since you haven't come across the 
Gidbinn yet, the dagger must be deeper 
in the jungle nearer Kurast.
`,I4=`97
You'd best get back out there and find 
that blade. The jungle creeps further 
into this camp by the hour.
`,L4=`77
Hah! You have stolen the fabled blade 
from right under Zakarum's nose! This 
is a great day, indeed!
`,G4=`41
You have done well, noble hero. Ormus 
congratulates you. The old spirits of 
Skatsim will watch over you for 
returning their sacred blade.
 
Now, after all these years, Ormus will 
once again use his powers to protect 
the innocent from the shadow. The 
spell that protects the dockside shall 
now be reinforced.
`,q4=`79
With any luck, the spirits of Skatsim will 
grant us revenge upon the powers that 
ravaged this land.
`,U4=`99
Now that fewer of the Iron Wolves are 
needed to guard the dockside, some of 
them have volunteered to accompany 
you free of charge.
`,F4=`80
The Gidbinn's magic can only be 
channeled through Ormus.
 
Take it to him. He has the necessary 
knowledge about the ancient Skatsimi 
magics.
`,V4=`62
Who could have foreseen that the Old 
Religion would play such an effective 
role in our war against the Three? 
Again, your efforts amaze me, my 
friend.
`,_4=`67
You are truly amazing, stranger. There 
are precious few items in the world 
that would tempt me to go up against 
the Children of Zakarum and their 
midget minions.
`,W4=`101
This magic ring does me no good.
 
Here... Wear it proudly!
`,z4=`36
You have done well, my friend. Your 
courage and valor are an inspiration to 
us all.
 
But now the time has come to face 
those responsible for the evil that has 
stifled our land. You must destroy the 
High Council of Zakarum!
 
Long ago, these elders were charged 
with the stewardship of Mephisto, the 
Lord of Hatred, who was imprisoned 
within the Guardian Tower.
 
Through the generations, these pious 
men slowly fell more and more under 
the sway of Mephisto's malevolent 
power and the Council became an evil 
mockery of its former glory. 
 
It is Mephisto's Hatred that has 
corrupted Zakarum and turned its 
devout followers into paranoid 
fanatics. That is why you must travel 
to the Temple City of Travincal and 
slay the Council.
 
Once they are gone, Mephisto's hold 
over this land and its people will be 
broken!
`,Q4=`84
The Black Book contains some vague 
prophecies regarding this undertaking. 
I'm not so sure it will turn out well for 
you.
`,O4=`90
I am but a potion dealer and an avid 
reader of occult books. What do I know 
of the Travincal?
`,K4=`54
You must know that the Guardian Tower 
in the Temple City was built by the 
Horadrim for one purpose - to hold 
Mephisto. Once the Council is dead, 
you may enter the Tower.
`,X4=`54
You must know that the Guardian Tower 
in the Temple City was built by the 
Horadrim for one purpose -  to hold 
Mephisto. Once the Council is dead, 
you may enter the Tower.
`,j4=`68
There is only one way to the Temple 
City. You will have to cross many rivers 
and streams, but you'll find it. A great 
tower stands at its center.
`,$4=`113
It has been said that Ormus speaks 
most clearly when his ideas are utterly 
mad.
`,Y4=`89
The Children of Zakarum who guard the 
Tower square can be killed, but their 
numbers are vast. You must destroy 
their Council.
`,J4=`105
There are many zealots among the 
followers of Zakarum. It will be difficult 
to get past them.
`,Z4=`104
Remember. You can always find 
sanctuary here with us.
`,eb=`75
This has been a trying time for all of us, 
but I sense this nightmare is coming to 
an end.
`,ab=`63
Ormus tells me that the Council is 
comprised of tremendously powerful 
priests. It will be difficult to best them.
`,nb=`93
The Temple City is well guarded. You'd 
best keep your wits about you.
`,tb=`100
You are incredibly brave to venture into 
the lion's den. I wish you luck.
`,sb=`95
Beware the followers of Zakarum. Their 
fanaticism is their greatest weapon.
`,ib=`111
Kill as many as you can. I have a 
morbid love of excess.
`,lb=`91
If only we could have found the Black 
Book. I feel as though a malevolent 
hand has led us away from it.
`,ob=`49
If you die on this quest, I will 
commemorate your sacrifice in an epic 
poem. You will not need a potion to 
achieve immortality. Ormus' words will 
do that.
`,rb=`110
Within the Temple City is a courtyard. 
The Council resides there.
`,cb=`107
I have heard rumors that the Prime 
Evils are here seeking their Brother.
`,db=`161
The Iron Wolves and I are at the ready 
to aid you.
`,ub=`139
Things are getting wilder than Ladies 
Night at the Slippery Fist.
`,Hb=`65
The followers of Zakarum demand 
complete allegiance to their creed. 
They have slaughtered many of their 
own for minor grievances.
 
They will not hesitate to kill you.
`,pb=`75
After having served Mephisto all these 
years, the Council must be twisted by 
hatred and evil.
`,mb=`81
Sankekur may be using a Compelling 
Orb to control the minds of the 
Children of Zakarum.
`,hb=`80
I respect your need to do this. Honor 
demands that you see this through. Yet 
your chances are so slim...
`,Ab=`80
I respect your need to do this. Honor 
demands that you see this through. Yet 
your chances are so slim...
`,Nb=`91
You've accomplished the impossible! By 
killing the Council, the curse of 
Zakarum will be lifted and our land will 
be free!
 
Oh. Thank you!
`,fb=`40
Ormus is grateful to you, stranger. You 
have broken the long, dark reign of 
Zakarum and delivered the first 
paralyzing blow against the Three.
 
Yet still, the true test lies ahead. For he 
whom the Council guarded still lives 
within the Blackened Tower.
`,Mb=`76
It seems the jungle is already dying 
back. You've broken the curse, my 
friend! May the Light bless you!
`,Cb=`125
The sun has set on the Religion of Light.
`,gb=`68
The followers of Zakarum lacked all 
sense of moderation. The collapse of 
their tainted religion gives me hope.
`,kb=`48
Ridding Kurast of the Council of 
Zakarum was essential. Still, there is 
more you must do. The Compelling Orb, 
too, must be destroyed.
 
Diablo and Baal must be close to finding 
their brother, Mephisto, by now. You've 
no time to waste.
`,Sb=`88
I can hardly believe you did it. Your 
power blankets you like a shining aura.
`,Tb=`53
Diablo and Baal have surely found the 
Temple City by now. They seek to free 
their Brother, Mephisto, who was 
imprisoned by the Horadrim in the 
Temple's Guardian Tower.
 
You must reach him before his Brothers 
do and prevent them from releasing 
Hatred upon the world.
`,vb=`90
The hidden ways of the Tower are long 
forgotten. Though... it is rumored to 
have been built as far below the 
ground as above it.
`,xb=`114
We have seen Diablo, but remain unsure 
of his Brothers' whereabouts.
`,yb=`52
Make haste! Though the Three are sure 
to reunite, it is uncertain as to what 
they have planned once they do.
 
Be cautious, my friend. Though you are 
mighty, no mortal can stand alone 
against the power of the Prime Evils.
`,Db=`52
Make haste! Though the Three are sure 
to reunite, it is uncertain as to what 
they have planned once they do.
 
Be cautious, my friend. Though you are 
mighty, no mortal can stand alone 
against the power of the Prime Evils.
`,bb=`66
Be careful when you return to the 
Tower. Though many of the followers 
of Zakarum have fled, there's no telling 
what horrors still lurk inside it.
`,Pb=`116
Move quickly, my friend, and end this 
curse once and for all!
`,Eb=`60
I sent a few of my Iron Wolves on a 
scouting mission into the jungle near 
the Temple City... They encountered 
two cloaked men who attacked them 
with horrifying powers.
 
My men barely survived. I have to 
assume that the two strangers are 
Diablo and Baal.
 
You'd better hurry. They're close to 
finding their brother.
`,wb=`93
Many Iron Wolves have disappeared in 
Travincal. The Evil is still strong there.
`,Rb=`43
Mephisto, along with Baal, was 
originally captured in the desert near 
Lut Gholein. But imprisoning two of the 
Brothers together was far too 
dangerous.
 
The Horadrim built the Guardian Tower 
to hold Mephisto. When Zakarum came 
to power in this land, it took over the 
Temple City without paying any heed to 
what was locked within the Tower.
 
And it became their doom.
`,Bb=`73
I hear there is a little family reunion 
about to take place in Kurast. The 
Three brothers draw close.
`,Ib=`116
You must reach Mephisto before his 
brothers do.
`,Lb=`50
The ancient Horadrim always feared 
that the Three would escape their 
prisons and unite. I can't believe that I, 
the last of their Order, have seen it 
come to pass.
 
You are the only one who can prevent 
this, my friend. The final hour draws 
near.
`,Gb=`75
Now you rush to face Mephisto. Don't 
give in to your hatred. That is his 
greatest weapon against you.
`,qb=`75
Now you rush to face Mephisto. Don't 
give in to your hatred. That is his 
greatest weapon against you.
`,Ub=`68
Well, the good news is that events are 
unfolding just as Lam Esen foretold. 
The bad news is that the story ends in 
our utter ruin!
`,Fb=`80
I'm afraid both fear and a large dose of 
elixir preclude me from answering.
`,Vb=`59
I understand that the great Patriarch of 
Zakarum, Sankekur, now embodies 
Mephisto.
 
You must overcome Hatred lest Terror 
and Destruction claim us all!
`,_b=`77
I am loath to describe what will happen 
if Diablo and Baal release Mephisto.
`,Wb=`110
I ought to return to the ship. We may 
have to sail from here very quickly.
`,zb=`110
I ought to return to the ship. We may 
have to sail from here very quickly.
`,Qb=`80
The sudden reduction in our ranks 
makes us eager to destroy Diablo and 
his brothers. Vengeance for the Iron 
Wolves!
`,Ob=`200
We will fight to the death.
`,Kb=`58
Why build a Tower to place the beast 
below ground? At times I believe the 
Horadrim lacked common sense.
`,Xb=`106
Shouldn't you be running frantically up 
and down stairs about now?
`,jb=`96
Search the Tower thoroughly. Mephisto 
must not escape.
`,$b=`96
Search the Tower thoroughly. Mephisto 
must not escape.
`,Yb=`55
Beware, my friend. Sankekur may be the 
most powerful mortal in the world. He 
controls thousands of fanatical 
worshippers and embodies the Lord of 
Hatred, himself. His death will be no 
easy task.
`,Jb=`55
Beware, my friend. Sankekur may be the 
most powerful mortal in the world. He 
controls thousands of fanatical 
worshippers and embodies the Lord of 
Hatred himself. His death will be no 
easy task.
`,Zb=`71
Your news is great indeed. You have 
saved us all. I would smile, but I'm 
afraid my face might collapse.
`,eP=`48
You have defeated a Prime Evil in 
combat. Ormus is impressed beyond 
words. But staying here will not end 
this conflict.
 
You must enter the Infernal Gate and 
stop Diablo once and for all.
`,aP=`70
Ahh... Now, Kurast can begin the task 
of rekindling its former glory... I thank 
you.
`,nP=`65
Well done, my friend. You are a great 
champion of Order. Please, consider 
yourself an honorary Iron Wolf.
`,tP=`121
It looks like you're going to Hell before 
me.
 
Put in a good word.
`,sP=`42
Our faith in you was well deserved. But 
Diablo has made his way to Hell; and it 
is likely that Baal followed him there.
 
Enter the Infernal Gate and kill the Lord 
of Terror before all is lost. Only then 
will our world be saved!
`,iP=`55
Word is spreading fast that you killed 
Mephisto. I'd be honored to fight 
beside you in Hell, but I've just received 
my mission orders.
 
I'll be travelling to the Barbarian lands 
of the North, but I can't tell you why. 
With luck, our paths will cross again. 
Farewell.
`,lP=`43
It is good to see you again, hero.
 
Mephisto's defeat is a great victory for 
the Light. I knew that you would 
eventually find your way here. The 
Pandemonium Fortress is the last 
bastion of Heaven's power before the 
Gates of the Burning Hells.
 
This place has been hallowed by the 
blood of thousands of champions of 
the Light, many of whom were mortal, 
like yourself. Now the final battle 
against the Prime Evils draws near... 
and you must face it alone. 
 
I have been forbidden to aid you 
directly, save for a few bits of wisdom. 
For this is the hour of mortal Man's 
triumph...your triumph.
 
May the Light protect you and the 
powers of Heaven shine upon your 
path...
`,oP=`62
Long ago, I swore an oath to watch 
over the Horadrim and their 
descendants.
 
As Deckard Cain is the last of their 
esteemed Order, I will not allow him to 
perish here so far from the lands of his 
birth.
 
Be at ease, hero, I know that he is your 
friend. He shall come to no harm.
`,rP=`41
Can you believe this place? Did you ever 
dare to dream that you'd one day 
stand upon the crossroads between 
Heaven and Hell? This Pandemonium 
Fortress is truly miraculous.
 
However, your journey is not yet over. 
Diablo still roams free in Hell, 
marshalling his demonic forces. Only 
when he is beaten will our world finally 
have peace.
 
Hurry now... the sands of time slow for 
no one! 
`,cP=`48
I have read much about the enigmatic 
Archangel Tyrael. He was revered in 
Horadrim lore both for his compassion 
for mortals and his unquenchable 
spirit.
 
It was rumored that he went against the 
wishes of Heaven and gave the 
Horadrim the original Soulstones in 
order to trap Diablo and his Brothers.
`,dP=`72
Halt! Before venturing into Diablo's lair, 
go to the Hellforge with Mephisto's 
Soulstone.
 
Place the stone on the Hellforge and 
use the Hellforge Hammer to destroy 
it.
`,uP=`66
Proceed, hero, into Terror's lair.
 
Know that Diablo's innermost sanctum 
is hidden by five seals.
 
Only by opening each of these seals can 
you clear your way to the final battle.
`,HP=`42
There is a dark, tortured soul who was 
trapped within this forsaken realm long 
ago. He was called Izual by mortal 
men, and in ages past he was my most 
trusted Lieutenant.
 
Yet, against my wishes he led an 
ill-fated assault upon the fiery 
Hellforge, itself.
 
Despite his valor and strength, Izual 
was captured by the Prime Evils and 
twisted by their perverse power. They 
forced him to betray his own kind and 
give up Heaven's most guarded 
secrets.
 
He became a corrupt shadow of his 
former self - a fallen angel trusted 
neither by Heaven nor Hell.
 
For his transgressions, Izual's spirit 
was bound within the form of a terrible 
creature which was summoned from 
the Abyss. His maddened spirit has 
resided within that tortured husk for 
many ages now.
 
It seems to me that he has suffered 
long enough. I implore you, hero, find 
Izual and release him from his cruel 
imprisonment.
 
Put an end to his guilt and suffering.
`,pP=`59
Though Izual no longer carries the 
Angelic Runeblade, Azurewrath, he may 
still possess great strength and power 
within his new form.
 
Also, he may not be able to tell friend 
from foe while in his present state. If 
you find him, he will almost certainly be 
hostile.
 
Proceed with the utmost caution.
`,mP=`54
Tyrael has asked you to confront Izual 
the Fallen? He must have great faith in 
your abilities!
 
I trust you know what you're doing... Be 
careful. You're our last hope.
`,hP=`75
You mustn't delay, mortal hero. Izual 
must be put to rest, but Diablo still 
lurks within this realm.
 
Go now... Hurry!
`,AP=`83
Having trouble finding the Fallen Angel, 
eh?
 
You'd better hurry. It's beginning to feel 
like some great evil is permeating the 
air around here.
`,NP=`47
Tyrael was a fool to have trusted me!
 
You see, it was I who told Diablo and his 
Brothers about the Soulstones and how 
to corrupt them. It was I who helped 
the Prime Evils mastermind their own 
exile to your world.
 
The plan we set in motion so long ago 
cannot be stopped by any mortal 
agency.  Hell, itself, is poised to spill 
forth into your world like a tidal wave 
of blood and nightmares.
 
You and all your kind... are doomed.
`,fP=`53
Thank you, hero, for putting Izual's 
tortured spirit to rest. May the Light 
protect you and the powers of Heaven 
shine upon your path.
 
But, if what you tell me is true, then I 
fear that we have been played for fools 
all along.
 
Izual helped Diablo and his Brothers 
trick me into using the Soulstones 
against them... Now the Stones' powers 
are corrupted.
 
With the combined powers of the 
Soulstones under their control, the 
Prime Evils will be able to turn the 
mortal world into a permanent outpost 
of Hell!
`,MP=`68
You're lucky to be alive, my friend! It is 
imperative that you find and stop 
Diablo!
 
You should speak of this with Tyrael. He 
will know what to make of this.
`,CP=`53
The time has come for you to destroy 
Mephisto's Soulstone!
 
Take the Stone to the Hellforge. Place it 
upon the forge and strike it soundly 
with the Hammer.
 
Only by doing this can you prevent 
Mephisto from manifesting in this 
world ever again.
`,gP=`50
The time has come to destroy 
Mephisto's Soulstone! 
 
Although I picked it up before entering 
the Infernal Gate, I believe you should 
carry out this crucial mission.
 
Take the Stone to the Hellforge.  Place 
it upon the forge and strike it soundly 
with the Hammer.
 
Only by doing this can you prevent 
Mephisto from manifesting in this 
world ever again.
`,kP=`70
Congratulations, hero!
 
Surely, even Diablo, himself, sensed the 
fury unleashed when you smashed his 
Brother's Soulstone.
`,SP=`48
The time has come to hunt down and 
destroy Diablo, himself.
 
But beware, the Lord of Terror is not to 
be underestimated. He single-handedly 
destroyed the town of Tristram and 
corrupted the last noble hero who tried 
to stop him.
 
This time, you must defeat him for 
good. Only by destroying the Soulstone 
which he carries will his spirit be 
banished forever.
 
Good luck! Though this be our darkest 
hour, it may yet be your greatest 
moment.
`,TP=`54
You don't have time to dally about here!
 
Diablo awaits you in Hell. Remember... 
Diablo's greatest weapon against you is 
Terror.
 
Don't give in to your fears. Resist his 
power and put an end to him for good!
`,vP=`48
The time has come to hunt down and 
destroy Diablo, himself.
 
But beware, the Lord of Terror is not to 
be underestimated. He single-handedly 
destroyed the town of Tristram and 
corrupted the last noble hero who tried 
to stop him.
 
This time, you must defeat him for 
good. Only by destroying the Soulstone 
which he carries will his spirit be 
banished forever.
 
Good luck! Though this be our darkest 
hour, it may yet be your greatest 
moment.
`,xP=`62
Praise be to the Light! You have 
accomplished the impossible!
 
Diablo and Mephisto have been 
banished back into the Black Abyss 
that spawned them and the corrupted 
Soulstones are no more.
 
You've done well, hero. For now, you 
should rejoice.
`,yP=`42
I knew there was great potential in you, 
my friend. You've done a fantastic job.
 
Though my ancestors often struggled 
against the Three Evils and their 
minions, I've always lived a shut-in, 
scholarly life. I'm glad that my wisdom 
aided you.
 
Now, I wish to leave this place. Though 
Heaven's Gates are a marvel to behold, 
I hope I won't have to see them again 
for many, many years.
`,DP="CHAT HELP",bP="CHAT COMMANDS",PP="To select a Character, left-click on the Character portrait to highlight it with an aura. To deselect any highlighted character, left-click on their portrait.",EP="The buttons located under the Chat Window on the left side of the screen have the following functions:",wP="SEND displays your message to everyone in your chat Channel, regardless of what character portrait is currently selected. This button is activated as soon as you start typing in the Text Box.",RP="WHISPER sends your message only to the character that you have selected. This button is activated as soon as you start typing in the Text Box and have another character selected.",BP="SQUELCH filters out incoming messages from the character that you have selected. Characters that you have squelched are marked with a red X graphic. This button is activated as soon as you select another character.",IP="UNSQUELCH allows you to again receive incoming messages from a character that has been squelched.",LP="EMOTE lets you perform an action that the whole room can <see> as represented through text.",GP="For example, if Doomhammer wants to greet all the players in the chat Channel, he could type, <waves hello.> and then click the EMOTE button. Everyone in the Channel will then receive the message, <Doomhammer waves hello.> This button is activated as soon as you start typing in the Text Box.",qP="ÿc5Gray Textÿc4 indicates when someone Joins or Leaves the chat Channel.",UP="ÿc7Gold Textÿc4 indicates the name of the player speaking.",FP="ÿc0White Textÿc4 indicates what you or others have said out loud to the entire chat Channel.",VP="ÿc2Green Textÿc4 indicates what you have <whispered> to a specific person, or any message that has been <whispered> to you, in the chat Channel.",_P="ÿc3Blue Textÿc4 represents actions that have been taken by people in the chat Channel.",WP="ÿc1Red Textÿc4 represents error messages sent directly from battle.net.",zP="THE DIALOGUE WINDOW",QP="This window on the right side of the screen is used to display and enter both game and profile information. Unlike the Chat Window, this area changes depending on what function you have activated. The buttons for these functions are discussed in detail in the following section:",OP="CREATE",KP="Lets you form a new game for other players to join. There are several choices listed below that you need to make when creating a new game, although many of them are optional.",XP="Game Name is how you want your game to be displayed in the Join Game screen. It can be cryptic or descriptive, although certain words and names are restricted.",jP="Password gives you the option to make your game Private. Other players who wish to join your game will need to know the password you have selected.",$P="Game Description lets you say something about the game you are forming. This is a good way to advertise for the kind of player or character you want to join your game.",YP="Maximum Number of Players sets a limit as to how many characters can be in your game at any one time. The default setting is 4. You can change the number of players, up to a maximum of 8, by clicking the Up or Down arrows next to the box.",JP="Character Difference sets a range above and below the level of your character that other characters joining your game must fall into. The default setting is set at 4 to determine who can join your game.",ZP="To set no level restrictions, click the check box next to this option. The displayed number 4 means that any character joining your game must be within 4 levels of your character. You can change the level difference by clicking the Up or Down arrows next to the box.",eE="Normal, Nightmare and Hell sets the difficulty levels at which you can play. The default setting is Normal. Characters must meet certain requirements to start games with the Nightmare and Hell difficulties. Until those requirements are met, these options will be non-selectable.",aE="JOIN",nE="Lets you enter an existing game. Games that are listed in this screen are considered Public and can be can be joined any time they have space for a player within them.",tE="Selecting a game from this list will display information on the game, including the characters and the elapsed time of the game. To join a Private game, you will be required to enter the name of the game and its assigned password.",sE="CHANNEL",iE="Lets you join an existing chat Channel or gives you the opportunity to create a Channel of your own. To enter an established Public Channel, select one from the Channels list and click the OK button. To enter a Private Channel, you will need to enter the name of the Channel that you wish to enter.",lE="If you wish to start your own Channel, enter the name of the Channel that you wish to create in the Channel Name Field. If this channel does not exist, you will automatically create that Channel.",oE="LADDER",rE="Allows you to view your character's ranking in the Diablo II Ladders for your Realm.",cE="The STANDARD LADDER displays the top characters, ranked by experience. The default setting displays overall rankings, but you can view sorted lists after selecting the By Class option.",dE="The HARDCORE LADDER displays the top Hardcore characters, ranked by experience. The default setting displays overall rankings, but you can view sorted lists after selecting By Class option.",uE="QUIT closes the Battle.net chat interface and returns you to the Character Selection screen. Although you are still connected to Battle.net, you cannot chat or start games until you have selected a character.",HE="ADVANCED COMMANDS",pE="When using advanced commands, you may also use character names for people in the same Realm, and character names @Realm for people in another Realm.",mE="Wherever a command below calls for the use of <accountname>, please use either <charactername>, <charactername@Realm>, or <*accountname>.",hE="You can access any of these advanced features by entering the following commands in the Text Box where you normally type messages:",AE="/whisper <*accountname>, /w <*accountname>",NE="/msg <*accountname>, /m <*accountname>",fE="Sends a private message to another user on battle.net",ME="/me, /emote",CE="Allows you to perform an action in the chat room.",gE="/squelch <*accountname>",kE="/ignore <*accountname>",SE="Allows you to ignore messages from the indicated user.",TE="/unsquelch <*accountname>",vE="/unignore <*accountname>",xE="Allows you to again receive messages from this user.",yE="/away <reason>",DE="Lets other people who send you messages know that you are away from your keyboard and cannot respond. You may provide a reason for your absence, by typing it after the /away command. To turn off this auto message when you return to your keyboard, enter just /away by itself.",bE="/dnd",PE="Lets other people who send you messages know that you do not wish to be disturbed. You may provide a reason for your absence, by typing it after the /dnd command. To turn off this auto message when you return to your keyboard, enter just /dnd by itself.",EE="/channel <channelname>, /join <channelname>",wE="Takes you to the battle.net Channel of your choice. If you wanted to enter the technical support Channel, you would simply type /channel technical support. If you attempt to join a Channel that does not exist, you will automatically create that Channel.",RE="/who <channelname>",BE="Provides you with a list of the battle.net account names of the players that are currently in the requested battle.net Channel.",IE="/ban <*accountname>",LE="Bans an account from entering a private Channel and can only be issued by the Channel operator. Use /unban <accountname> to allow accounts banned from a private Channel back into that Channel.",GE="ctrl+c, ctrl+x ctrl+v",qE="Use these commands to copy, cut, and paste highlighted text. Use ctrl+a to select all text in the text field. Use ctrl+m to toggle music off/on. Use ctrl+n to paste the account name of a selected character.",UE="/designate <*accountname>",FE="Designates the player of your choice to become the next Channel operator, which will take effect after the current Channel operator leaves the Channel and can only be issued by the current Channel operator.",VE="/kick <*accountname>",_E="Kicks an account from a private Channel and can only be issued by the Channel operator. The kicked player, however, can immediately rejoin the channel.",WE="/rejoin, resign",zE="Causes a Channel operator to rejoin the Channel, appearing at the end/bottom of the list instead of the front/top of the list. Only the Channel operator can issue this command.",QE="/whois <*accountname>, /where <*accountname>",OE="/whereis <*accountname>",KE="Searches for another player in all battle.net Public Chat channels and all Blizzard games, telling you their account name, account number and current location.",XE="/whoami",jE="Provides you with your current account number and location on battle.net.",$E="/d2notify",YE="Toggles battle.net Join/Leave notifications in the Chat Channel.",JE="/help, /?",ZE="Accesses the general battle.net help text.",ew="/time",aw="Provides you with the current battle.net time and your current Local time.",nw="/users",tw="Provides the number of users, games, and channels that are currently active across all of battle.net.",sw="/stats <*accountname> <programID>",iw="Provides you with the Ladder statistics for other Blizzard games supported over battle.net. The program ID for each game is as follows; StarCraft < STAR>, Brood War <STARX>, and Warcraft II: battle.net Edition <W2BN>.",lw="Right-clicking on your own character allows you to edit your own profile.",ow="Using the 'Tab' key in the battle.net chat room cycles through the last 10 commands you have issued.",rw="If you need further help, please go to the TECHNICAL SUPPORT Channel on battle.net, consult the Diablo II manual or go to the Blizzard technical support page at http://www.blizzard.com/support/",cw="BATTLE.NET COMMANDS",dw="/whisper, /msg, /reply",uw="/me",Hw="/away",pw="/squelch, /unsquelch",mw="/ban, /unban, /kick",hw="/channel",Aw="/whois, /where, /whoami",Nw="/d2notify",fw="/designate, /rejoin",Mw="/time",Cw="/who, /users",gw="/stats",kw="Travincal",Sw="Harem",Tw="Sewers",vw="Act 2 Prologue",xw="Radament's Lair",yw="The Horadric Staff",Dw="Tainted Sun",bw="Arcane Sanctuary",Pw="The Summoner",Ew="The Seven Tombs",ww="Act 3 Prologue",Rw="Lam Esen's Tome",Bw="Khalim's Will",Iw="Blade of the Old Religion",Lw="The Golden Bird",Gw="The Blackened Temple",qw="The Guardian",Uw="Act 4 Prologue",Fw="The Fallen Angel",Vw="Terror's End",_w="Hell's Forge",Ww="Lut Gholein",zw="Find Radament's Lair in the Lut Gholein sewers.",Qw="Kill Radament.",Ow="Return to Atma for a reward.",Kw="Show the scroll to Cain in Lut Gholein.",Xw="Search the Halls of the Dead under the Dry Hills for the Cube. Search the Maggot Lair under the Far Oasis for the Shaft. Search the Claw Viper Temple for the Headpiece.",jw="Use the Horadric Cube to restore the Staff.",$w="Take the Staff into Tal Rasha's Tomb.",Yw="Take the artifacts to Cain in Lut Gholein.",Jw="Look for the source of the darkness.",Zw="Ask Drognan about the strange darkness.",eR="Destroy the Serpent Altar in the Claw Viper Temple beneath the Valley of Snakes.",aR="Speak with the townsfolk in Lut Gholein.",nR="Look for the Arcane Sanctuary within the Palace.",tR="Talk to Drognan.",sR="Find Horazon's Journal.",iR="Continue the search for the Seventh Tomb.",lR="Beware the Summoner.",oR="Kill the Summoner.",rR="Return to town for more information.",cR="Find Tal Rasha's Tomb.",dR="The Symbol of the True Tomb of Tal Rasha.",uR="Kill Duriel.",HR="Explore Tal Rasha'a Chamber.",pR="Talk to Jerhyn.",mR="Talk to Jerhyn.",hR="Talk to Meshif.",AR="Jungle Village",NR="Search the six temples in the Bazaar, Upper Kurast, and the Causeway for Lam Esen's Tome.",fR="Talk to Alkor.",MR="Find Khalim's relics. Search for his Eye in the Spider Cavern.",CR="Search for Khalim's Brain in the Flayer Dungeon.",gR="Search for Khalim's Flail in Travincal. Beware the High Council.",kR="Search for Khalim's Heart in the Sewers under the Kurast Bazaar.",SR="Transmute Khalim's relics - the Flail, Eye, Heart, and Brain - with the Horadric Cube.",TR="Use Khalim's Will to smash the Compelling Orb.",vR="Ask Cain about Khalim's relics.",xR="Look for the Gidbinn in the Flayer Jungle.",yR="Pick up the Gidbinn.",DR="Return the Gidbinn to Ormus.",bR="Talk to Asheara.",PR="Talk to Ormus.",ER="Ask Cain about the Jade Figurine.",wR="Show Meshif the Figurine.",RR="Ask Cain about the Golden Bird.",BR="Give the Golden Bird to Alkor.",IR="Return to Alkor for reward.",LR="Find the Blackened Temple within Travincal.",GR="Kill the High Council.",qR="Ask Cain for help.",UR="Smash the Compelling Orb with Khalim's Will to open the way to Mephisto's Durance.",FR="Search for Mephisto in his Durance.",VR="Kill Mephisto.",_R="Ask around the Docks about the Gidbinn.",WR="Ask Ormus about the Blackened Temple.",zR="Ormus has news about the Guardian.",QR="Look for Izual in the Plains of Despair.",OR="Destroy the demon that holds Izual's soul.",KR="Talk to Izual's Spirit.",XR="See Tyrael for reward.",jR="Take Mephisto's Soulstone to the Hellforge.",$R="Destroy Mephisto's Soulstone at the Hellforge.",YR="Use the Hellforge Hammer on the Forge.",JR="Consult with Cain.",ZR="Find Diablo in his Sanctuary.",e6="Kill Diablo.",a6="Break the remaining %d seals.",n6="Break the final seal.",t6="Asheara",s6="Hratli",i6="Alkor",l6="Ormus",o6="Natalya",r6="Tyrael",c6="Izual",d6="Izual",u6="Jamella",H6="Halbu",p6="Hadriel",m6="Hazade",h6="Alhizeer",A6="Azrael",N6="Ahsab",f6="Chalan",M6="Haseen",C6="Razan",g6="Emilio",k6="Pratham",S6="Fazel",T6="Jemali",v6="Kasim",x6="Gulzar",y6="Mizan",D6="Leharas",b6="Durga",P6="Neeraj",E6="Ilzan",w6="Zanarhi",R6="Waheed",B6="Vikhyat",I6="Jelani",L6="Barani",G6="Jabari",q6="Devak",U6="Raldin",F6="Telash",V6="Ajheed",_6="Narphet",W6="Khaleel",z6="Phaet",Q6="Geshef",O6="Vanji",K6="Haphet",X6="Thadar",j6="Yatiraj",$6="Rhadge",Y6="Yashied",J6="Jarulf",Z6="Flux",e7="Scorch",a7="Khalim's Flail",n7="Khalim's Will",t7="Khalim's Flail",s7="Khalim's Will",i7="Khalim's Eye",l7="Khalim's Brain",o7="Khalim's Heart",r7="Impossible.",c7="I can't.",d7="Help Me!",u7="Help!",H7="Follow Me.",p7="Come on.",m7="This is for you.",h7="This is yours.",A7="Thank you.",N7="Thanks.",f7="Oops.",M7="Forgive me.",C7="Goodbye.",g7="Bye.",k7="Die!",S7="Time to Die!",T7="Not enough mana.",v7="I need mana.",x7="I can't use this yet.",y7="I am overburdened.",D7="I can't carry anymore.",b7="Not in Town.",P7="Not Here.",E7="I can't do that here.",w7="It's Locked.",R7="I need a key.",B7="I shall purge this land of the shadow.",I7="Beware foul demons and beasts.",L7="I will cleanse thiw widerness.",G7="Evil beware!",q7="My enemies beware.",U7="I hear foul creatures about.",F7="There are many foes here.",V7="Evil Dwells within this cave.",_7="This place is trouble.",W7="I sense death within this place.",z7="I sense great sorrow and misery.",Q7="I shall meet death head-on.",O7="This holy place has been desecrated!",K7="There is dark magic at work here.",X7="Too many empty graves.",j7="So, this is the site of Andariel's atrocities.",$7="The Monastery reeks with evil and corruption.",Y7="Even the Light cannot pierce this gloom.",J7="Ah, the Monastery... Andariel's stronghold!",Z7="This place has the stench of demons about it.",e8="What's that smell?",a8="The stench of poison...",n8="This tower shall be cleansed of evil.",t8="This place holds many secrets.",s8="This place reeks of death.",i8="What nightmarish tortures took place here?",l8="No one should ever be caged.",o8="This is no place for a warrior to die.",r8="If there was magic here, it's long gone now.",c8="Ah, the slow torture of caged starvation.",d8="Removed",u8="This place is eerie.",H8="So cold and damp under the earth.",p8="There is great evil here.",m8="This place chills me to the bone.",h8="I sense a demonic presence here.",A8="Perhaps now the Sisters will trust me.",N8="The Rogues are safe for the moment.",f8="My duty here is done.",M8="This cave has been purged of evil.",C8="Is that enough to earn the Rogues' trust?",g8="Rest in peace, Sister.",k8="Good riddance, Blood Raven.",S8="Sisters, there was no other way.",T8="Rest now, Blood Raven.",v8="Blood Raven... rest well.",x8="What a strange-looking tree...",y8="This tree is one of a kind.",D8="This tree bristles with magic!",b8="This ancient tree has an aura of magic about it.",P8="This tree shines with inner spirits.",E8="These stones serve some magical purpose...",w8="These magic stones are ancient.",R8="Maybe Akara could dispel the mystery of these stones.",B8="These stones radiate powerful magic.",I8="I sense many spirits around the stones.",L8="It's as if a great war were fought here.",G8="The land here is dead and lifeless.",q8="What a tragic end to Tristram!",U8="Tristram was no match for Diablo's fury.",F8="All that's left of proud Tristram are ghosts and ashes.",V8="Deckard Cain, go to the Rogues' camp without delay!",_8="Deckard Cain, you've got to get out of here!",W8="Deckard Cain, leave quickly!",z8="Deckard Cain, get to the Rogue camp!",Q8="Deckard Cain, if you value your life, leave here immediately.",O8="The Sisters will be glad to have this back!",K8="I should take this to Charsi.",X8="This will help the Sisters turn the tide against evil.",j8="I hope the Sisters appreciate this thing...",$8="All this for a hammer?",Y8="The Tower's trove... for the taking!",J8="This is reward enough!",Z8="This tower has its charms...",eB="I hope to find other such treasures!",aB="Treasure hunting... bah... Treasure finding... yes.",nB="This Maiden shall inflict no more anguish.",tB="Let the gate be opened!",sB="My work here is finished.",iB="The evil queen has fallen.",lB="Back to the hell that spawned you, Andariel.",oB="This place disgusts me.",rB="Ugh... The tell-tale stench of a carnivore's lair.",cB="The foul stench of evil assails me.",dB="I sense strange magic here.",uB="I sense a powerful undead being within this place.",HB="Atma has been avenged.",pB="I've just about had my fill of the walking dead.",mB="I pray that Atma will rest easy now.",hB="What a misguided monster.",AB="What a waste of undead flesh.",NB="Great. An eclipse. This just keeps getting better and better.",fB="What is wrong with the sun?",MB="What Evil taints the light of the sun?",CB="Only powerful magic can conjure an eclipse.",gB="Only the darkest magics can turn the sun black.",kB="I hope I know what I'm doing!",SB="The sun has never shone here!",TB="Light guide my way in this accursed place.",vB="I sense strong magic within this place.",xB="This place is as dark as a tomb.",yB="Let there be light.",DB="It is good to know that the sun shines once again.",bB="The Light can never be extinguished by evil.",PB="Who would have thought that such primitive beings could cause so much trouble!",EB="What a pity. I was beginning to enjoy the darkness.",wB="Am I the first to find this Arcane fortress?",RB="One could get lost in here.",BB="This surely is the product of a twisted mind!",IB="This place actually... distorts reality. Fascinating.",LB="This is fantastic! I wish I had time to study this bizarre dimension.",GB="What a freak!",qB="Stand aside, old fool. I have no time for your babblings.",UB="Surely the evil here has driven you mad.",FB="Is this truly Horazon?",VB="This bumbling fool cannot be the mighty Horazon!",_B="Good riddance, freak.",WB="I hate staining my hands with the blood of foul sorcerers.",zB="Rest in peace, tortured soul.",QB="That couldn't have been Horazon. Poor wretch.",OB="He was not Horazon. He was a deluded fool who got too close to true power!",KB="This has got to be the right place.",XB="This tomb is very ornate. This must be Tal Rasha's resting place.",jB="Is this the tomb I seek?",$B="This tomb has Horadric markings. I wonder if this is Tal Rasha's tomb?",YB="This could be Tal Rasha's tomb. However, I'm sensing very strange energies here.",JB="Should I enter...?  Diablo and Baal may have laid a trap...",ZB="Such a cold breeze... Tal Rasha must be kept here.",eI="Here, at last, is a fitting testament in stone to Tal Rasha's sacrifice.",aI="This must be the true Tomb of Tal Rasha!",nI="I sense an incredible aura about this tomb. The Horadrim hid something powerful inside.",tI="This is not good. Will this madness ever end?",sI="I have failed. Diablo has freed his accursed brother. The world remains at their mercy.",iI="I shall honor Tal Rasha's sacrifice by destroying all the Prime Evils.",lI="Diablo and Baal have escaped me!  Next time... vengeance!",oI="I came too late. Now... Destruction is let loose upon the world once more.",rI="Not in Game",cI="I hope the secrets within this book can help us.",dI="I hope this book is worth all the trouble.",uI="The Black Book... It's heresy to the Zakarum High Council.",HI="This tome has the weight of knowledge about it.",pI="This ancient book radiates arcane power!",mI="All this trouble over a tattered book.",hI="May this book lift the shadow from Kurast.",AI="May the Black Book deliver us from evil!",NI="May the Black Book bring a black day to hell!",fI="Once the book has served its purpose, I shall delve into its secrets.",MI="Whoa.... What died down here?",CI="Cough... The stench down here is choking!",gI="The smell of death... or worse... surrounds me.",kI="It smells worse than rotting reagents down here.",SI="It's been years since I waded through sewers for fun.",TI="I hope this does something good...",vI="This will drain out some of the filth.",xI="This appears to control the ancient valves.",yI="This looks promising.",DI="This looks like what I've been searching for.",bI="Eureka!",PI="Good. Now I can get out of here and get some fresh air!",EI="This trove will help lift the curse from Kurast!",wI="I hope these items can aid me against the demons.",RI="Great. More junk. Just what I'd expect to find in a sewer...",BI="This dagger will separate the faithful from the fallen.",II="This holy blade does not belong in the hands of the Zakarum.",LI="This blade shall pierce the heart of evil!",GI="I must take this to Ormus.",qI="This is a powerful weapon. Perhaps Ormus can tell me more about it.",UI="A worthless statue. Perhaps I can trade this for something better.",FI="Such a dark temple for a Religion of Light...",VI="The spirits of nature have fled this dreaded place.",_I="This corrupted temple was once the shining heart of my religion...",WI="I sense tremendous evil within this place.",zI="This temple exudes darkness.",QI="Skatsim's reign is renewed!",OI="The dark powers here will no longer poison the land.",KI="The Temple shall shine anew with the Light.",XI="The Temple's power is annulled.",jI="The Temple's dark power is broken.",$I="This must be where Mephisto is.",YI="The final resting place of Hatred itself.",JI="This must be where the Horadrim imprisoned Mephisto.",ZI="Ah... Mephisto's prison.",eL="The Tower that holds Mephisto....",aL="Success... But still there's something not right.",nL="Maybe now the world will have peace.",tL="The Lord of Hatred shall darken the world no longer.",sL="Mephisto shall no longer darken our souls with hatred.",iL="Good journey, Mephisto. Give my regards to the abyss.",lL="Goodbye, Izual.",oL="Even Fallen Angels deserve freedom.",rL="How can one who was once so holy fall so far from righteousness?",cL="He was corrupted to the core. I pity him.",dL="Bah! Izual was weak. He squandered his infernal power.",uL="          ",HL="          ",pL="          ",mL="          ",hL="    ",AL="           ",NL="           ",fL="    ",ML="     ",CL="                       ",gL="                       ",kL="     ",SL="           ",TL="           ",vL="                                                             ",xL="           ",yL="         ",DL="                   ",bL="                              ",PL="         ",EL="         ",wL="                           ",RL="                           ",BL="         ",IL="         ",LL="           ",GL="                                 ",qL="         ",UL="    ",FL="                     ",VL="                     ",_L="    ",WL="              ",zL="                       ",QL="                       ",OL="          ",KL="            ",XL="                   ",jL="                                     ",$L="            ",YL="           ",JL="                   ",ZL="                   ",e9="           ",a9="                ",n9="                ",t9="                ",s9="         ",i9="    ",l9="                     ",o9="                     ",r9="    ",c9="        ",d9="                 ",u9="                                      ",H9="        ",p9="           ",m9="           ",h9="           ",A9="           ",N9="          ",f9="                           ",M9="                           ",C9="          ",g9="         ",k9="         ",S9="                ",T9="         ",v9="     ",x9="     ",y9="     ",D9="     ",b9="    ",P9="    ",E9="    ",w9="    ",R9="       ",B9="                                ",I9="                                ",L9="       ",G9="            ",q9="                    ",U9="                    ",F9="            ",V9="       ",_9="                ",W9="                                               ",z9="       ",Q9="   ",O9="                         ",K9="                         ",X9="   ",j9="       ",$9="                ",Y9="                ",J9="       ",Z9="       ",eG="                ",aG="                ",nG="       ",tG="               ",sG="                                ",iG="                                ",lG="               ",oG="              ",rG="              ",cG="              ",dG="              ",uG="           ",HG="                     ",pG="                                            ",mG="           ",hG="          ",AG="          ",NG="          ",fG="          ",MG="         ",CG="         ",gG="         ",kG="         ",SG="           ",TG="                 ",vG="                 ",xG="           ",yG="     ",DG="     ",bG="                           ",PG="     ",EG="              ",wG="              ",RG="              ",BG="              ",IG="             ",LG="             ",GG="             ",qG="             ",UG="           ",FG="                  ",VG="                       ",_G="           ",WG="           ",zG="                      ",QG="                                      ",OG="           ",KG="             ",XG="                      ",jG="                      ",$G="             ",YG="          ",JG="                    ",ZG="                                          ",eq="          ",aq="          ",nq="          ",tq="          ",sq="          ",iq="             ",lq="             ",oq="             ",rq="             ",cq="                   ",dq="                           ",uq="                                        ",Hq="         ",pq="               ",mq="                       ",hq="                                       ",Aq="               ",Nq="               ",fq="               ",Mq="               ",Cq="               ",gq="            ",kq="                            ",Sq="                                         ",Tq="            ",vq="          ",xq="          ",yq="          ",Dq="          ",bq="          ",Pq="          ",Eq="          ",wq="          ",Rq="    ",Bq="    ",Iq="    ",Lq="    ",Gq="            ",qq="            ",Uq="            ",Fq="            ",Vq="      ",_q="      ",Wq="      ",zq="      ",Qq="                ",Oq="                ",Kq="                ",Xq="                ",jq="                ",$q="                        ",Yq="                                    ",Jq="                ",Zq="          ",eU="          ",aU="          ",nU="          ",tU="          ",sU="          ",iU="          ",lU="          ",oU="          ",rU="          ",cU="          ",dU="          ",uU="             ",HU="             ",pU="             ",mU="             ",hU="         ",AU="         ",NU="         ",fU="         ",MU="            ",CU="            ",gU="            ",kU="            ",SU="            ",TU="            ",vU="            ",xU="            ",yU="              ",DU="              ",bU="              ",PU="              ",EU="             ",wU="             ",RU="             ",BU="             ",IU="Ravens: ",LU="Spikes: ",GU="Stars: ",qU="Wolf: ",UU="Wolves: ",FU="Shoots ",VU=" Times",_U=" Spikes",WU="Eagle Orb",zU="Sacred Globe",QU="Smoked Sphere",OU="Clasped Orb",KU="Jared's Stone",XU="Preserved Head",jU="Zombie Head",$U="Unraveller Head",YU="Gargoyle Head",JU="Demon Head",ZU="Wolf Head",eF="Hawk Helm",aF="Antlers",nF="Falcon Mask",tF="Spirit Mask",sF="Wraps",iF="Knuckles",lF="Slashers",oF="Splay",rF="Hook",cF="Shank",dF="Claws",uF="(Amazon Only)",HF="(Sorceress Only)",pF="(Necromancer Only)",mF="(Paladin Only)",hF="(Barbarian Only)",AF="(Druid Only)",NF="(Assassin Only)",fF="Claw Class",MF="Rot Walker",CF="Reanimated Horde",gF="Prowling Dead",kF="Unholy Corpse",SF="Defiled Warrior",TF="Crush Beast",vF="Blood Bringer",xF="Gore Bearer",yF="Demon Steed",DF="Wailing Spirit",bF="Life Seeker",PF="Life Stealer",EF="Deathly Visage",wF="Bound Spirit",RF="Banished Soul",BF="Death",IF="Enslaved",LF="Slayer",GF="Ice Boar",qF="Fire Boar",UF="Hell Spawn",FF="Ice Spawn",VF="Greater Hell Spawn",_F="Greater Ice Spawn",WF="Fanatic Enslaved",zF="Berserker Slayer",QF="Consumed Fire Boar",OF="Consumed Ice Boar",KF="Frenzied Hell Spawn",XF="Frenzied Ice Spawn",jF="Insane Hell Spawn",$F="Insane Ice Spawn",YF="Succubus",JF="Vile Temptress",ZF="Stygian Harlot",eV="           ",aV="           ",nV="Siren",tV="Vile Witch",sV="Stygian Fury",iV="         ",lV="          ",oV="Overseer",rV="Lasher",cV="Overlord",dV="Blood Boss",uV="Hell Whip",HV="Demon Portal",pV="Demon Portal",mV="Demon Imp",hV="Demon Rascal",AV="Demon Gremlin",NV="Demon Trickster",fV="Demon Sprite",MV="     ",CV="     ",gV="      ",kV="                ",SV="             ",TV="          ",vV="            ",xV="                 ",yV="                                                           ",DV="          ",bV="         ",PV="                            ",EV="                                     ",wV="            ",RV="          ",BV="                  ",IV="    ",LV="   ",GV="              ",qV="              ",UV="             ",FV="           ",VV="             ",_V="       ",WV="    ",zV="     ",QV="   ",OV="      ",KV="             ",XV="   ",jV="   ",$V="   ",YV="   ",JV="   ",ZV="                              ",e_="                             ",a_="                                 ",n_="                                ",t_="                            ",s_="                      ",i_="                        ",l_="                                                                  ",o_="                               ",r_="                     ",c_="                                      ",d_="                     ",u_="                      ",H_="                                 ",p_="      ",m_="              ",h_="     ",A_="             ",N_="           ",f_="                 ",M_="               ",C_="                                                 ",g_="                     ",k_="                            ",S_="                    ",T_="                  ",v_="    ",x_="%0 %1",y_="%0 %1",D_="%0 %1",b_="%0 %1",P_="%0 %1",E_="%0 %1 %2",w_="%0 %1",R_="%0 %1",B_="%0 %1",I_="%0 %1",L_="%0 %1",G_="%0 %1",q_="%0 %1",U_="%0 %1 %2",F_="Damaged",V_="Cracked",__="Crude",W_="Superior",z_="Gemmed",Q_="Resilient",O_="Sturdy",K_="Strong",X_="Glorious",j_="Blessed",$_="Saintly",Y_="Holy",J_="Devious",Z_="Fortified",eW="Urgent",aW="Fleet",nW="Muscular",tW="Jagged",sW="Deadly",iW="Vicious",lW="Brutal",oW="Massive",rW="Savage",cW="Merciless",dW="Vulpine",uW="Swift",HW="Artful",pW="Skillful",mW="Adroit",hW="Tireless",AW="Rugged",NW="Bronze",fW="Iron",MW="Steel",CW="Silver",gW="Gold",kW="Platinum",SW="Meteoric",TW="Sharp",vW="Fine",xW="Howling",yW="Fortuitous",DW="Brilliant",bW="Omniscient",PW="Sage",EW="Shrewd",wW="Vivid",RW="Glimmering",BW="Glowing",IW="Bright",LW="Solar",GW="Forceful",qW="Dazzling",UW="Fascinating",FW="Prismatic",VW="Azure",_W="Lapis",WW="Cobalt",zW="Indigo",QW="Sapphire",OW="Cerulean",KW="Red",XW="Crimson",jW="Burgundy",$W="Garnet",YW="Russet",JW="Ruby",ZW="Vermilion",ez="Orange",az="Ocher",nz="Tangerine",tz="Coral",sz="Crackling",iz="Amber",lz="Forked",oz="Green",rz="Beryl",cz="Jade",dz="Viridian",uz="Vital",Hz="Emerald",pz="Enduring",mz="Kicking",hz="Triumphant",Az="Mighty",Nz="Energizing",fz="Strengthening",Mz="Empowering",Cz="Brisk",gz="Tough",kz="Hardy",Sz="Robust",Tz="Cap",vz="Skull Cap",xz="Helm",yz="Full Helm",Dz="Great Helm",bz="Crown",Pz="Mask",Ez="Quilted Armor",wz="Leather Armor",Rz="Hard Leather Armor",Bz="Studded Leather",Iz="Ring Mail",Lz="Scale Mail",Gz="Chain Mail",qz="Breast Plate",Uz="Splint Mail",Fz="Plate Mail",Vz="Field Plate",_z="Gothic Plate",Wz="Full Plate Mail",zz="Ancient Armor",Qz="Light Plate",Oz="Buckler",Kz="Small Shield",Xz="Large Shield",jz="Kite Shield",$z="Tower Shield",Yz="Gothic Shield",Jz="Leather Gloves",Zz="Heavy Gloves",eQ="Chain Gloves",aQ="Light Gauntlets",nQ="Gauntlets",tQ="Boots",sQ="Heavy Boots",iQ="Chain Boots",lQ="Light Plated Boots",oQ="Greaves",rQ="Sash",cQ="Light Belt",dQ="Belt",uQ="Heavy Belt",HQ="Plated Belt",pQ="Bone Helm",mQ="Bone Shield",hQ="Spiked Shield",AQ="Hand Axe",NQ="Axe",fQ="Military Pick",MQ="War Axe",CQ="Large Axe",gQ="Broad Axe",kQ="Battle Axe",SQ="Great Axe",TQ="Giant Axe",vQ="Wand",xQ="Yew Wand",yQ="Bone Wand",DQ="Grim Wand",bQ="Club",PQ="Scepter",EQ="Grand Scepter",wQ="War Scepter",RQ="Spiked Club",BQ="Mace",IQ="Morning Star",LQ="Flail",GQ="War Hammer",qQ="Maul",UQ="Great Maul",FQ="Short Sword",VQ="Scimitar",_Q="Sabre",WQ="Falchion",zQ="Crystal Sword",QQ="Broad Sword",OQ="Long Sword",KQ="War Sword",XQ="Claymore",jQ="Giant Sword",$Q="Bastard Sword",YQ="Flamberge",JQ="Great Sword",ZQ="Dagger",eO="Dirk",aO="Kris",nO="Blade",tO="Throwing Knife",sO="Throwing Axe",iO="Balanced Knife",lO="Balanced Axe",oO="Javelin",rO="Pilum",cO="Short Spear",dO="Glaive",uO="Throwing Spear",HO="Spear",pO="Trident",mO="Brandistock",hO="Spetum",AO="Pike",NO="Bardiche",fO="Voulge",MO="Scythe",CO="Poleaxe",gO="Halberd",kO="War Scythe",SO="Short Staff",TO="Long Staff",vO="Gnarled Staff",xO="Battle Staff",yO="War Staff",DO="Short Bow",bO="Hunter's Bow",PO="Long Bow",EO="Composite Bow",wO="Short Battle Bow",RO="Long Battle Bow",BO="Short War Bow",IO="Long War Bow",LO="Light Crossbow",GO="Crossbow",qO="Heavy Crossbow",UO="Repeating Crossbow",FO="Barbed Shield",VO="Grim Shield",_O="Grim Helm",WO="War Belt",zO="Battle Belt",QO="Mesh Belt",OO="Sharkskin Belt",KO="Demonhide Sash",XO="War Boots",jO="Battle Boots",$O="Mesh Boots",YO="Sharkskin Boots",JO="Demonhide Boots",ZO="War Gauntlets",eK="Battle Gauntlets",aK="Heavy Bracers",nK="Sharkskin Gloves",tK="Demonhide Gloves",sK="Ancient Shield",iK="Pavise",lK="Dragon Shield",oK="Scutum",rK="Round Shield",cK="Defender",dK="Mage Plate",uK="Ornate Plate",HK="Chaos Armor",pK="Embossed Plate",mK="Sharktooth Armor",hK="Templar Coat",AK="Russet Armor",NK="Cuirass",fK="Mesh Armor",MK="Tigulated Mail",CK="Linked Mail",gK="Trellised Armor",kK="Demonhide Armor",SK="Serpentskin Armor",TK="Ghost Armor",vK="Death Mask",xK="Grand Crown",yK="Winged Helm",DK="Basinet",bK="Casque",PK="Sallet",EK="War Hat",wK="Strangling Gas Potion",RK="Fulminating Potion",BK="Choking Gas Potion",IK="Exploding Potion",LK="Rancid Gas Potion",GK="Oil Potion",qK="Gidbinn",UK="The Gidbinn",FK="Decoy Gidbinn",VK="Wirt's Leg",_K="Horadric Malus",WK="Horadric Malus",zK="Hell Forge Hammer",QK="Horadric Staff",OK="Shaft of the Horadric Staff",KK="orifice",XK="Elixir",jK="Tome of Town Portal",$K="Scroll of Town Portal",YK="Tome of Identify",JK="Scroll of Identify",ZK="Right Click to Use",eX="Right Click to Open",aX="Right Click to Read",nX="Insert Scrolls",tX="Stamina Potion",sX="Antidote Potion",iX="Rejuvenation Potion",lX="Full Rejuvenation Potion",oX="Thawing Potion",rX="Amulet",cX="Top of the Horadric Staff",dX="Ring",uX="Gold",HX="Scroll of Inifuss",pX="Key to the Cairn Stones",mX="Arrows",hX="Torch",AX="Bolts",NX="Key",fX="Key",MX="The Black Tower Key",CX=`Right Click to permanently add 20 to Life
Potion of Life`,gX="shrine",kX="A Jade Figurine",SX="The Golden Bird",TX="Lam Esen's Tome",vX="Lam Esen's Tome",xX="Horadric Cube",yX="Horadric Scroll",DX="Mephisto's Soulstone",bX=`Right Click to learn skill of your choice
Book of Skill`,PX="Ear",EX="Chipped Amethyst",wX="Flawed Amethyst",RX="Amethyst",BX="Flawless Amethyst",IX="Perfect Amethyst",LX="Chipped Topaz",GX="Flawed Topaz",qX="Topaz",UX="Flawless Topaz",FX="Perfect Topaz",VX="Chipped Sapphire",_X="Flawed Sapphire",WX="Sapphire",zX="Flawless Sapphire",QX="Perfect Sapphire",OX="Chipped Emerald",KX="Flawed Emerald",XX="Flawless Emerald",jX="Emerald",$X="Perfect Emerald",YX="Chipped Ruby",JX="Flawed Ruby",ZX="Ruby",ej="Flawless Ruby",aj="Perfect Ruby",nj="Chipped Diamond",tj="Flawed Diamond",sj="Diamond",ij="Flawless Diamond",lj="Perfect Diamond",oj="Minor Healing Potion",rj="Light Healing Potion",cj="Healing Potion",dj="Greater Healing Potion",uj="Super Healing Potion",Hj="Minor Mana Potion",pj="Light Mana Potion",mj="Mana Potion",hj="Greater Mana Potion",Aj="Super Mana Potion",Nj="Herb",fj="Chipped Skull",Mj="Flawed Skull",Cj="Skull",gj="Flawless Skull",kj="Perfect Skull",Sj="Beast",Tj="Eagle",vj="Raven",xj="Viper",yj="Ghoul",Dj="Skull",bj="Blood",Pj="Dread",Ej="Doom",wj="Grim",Rj="Bone",Bj="Death",Ij="Shadow",Lj="Storm",Gj="Rune",qj="Plague",Uj="Stone",Fj="Wraith",Vj="Spirit",_j="Demon",Wj="Cruel",zj="Empyrian",Qj="Bramble",Oj="Pain",Kj="Loath",Xj="Glyph",jj="Imp",$j="Fiend",Yj="Hailstone",Jj="Gale",Zj="Dire",e$="Soul",a$="Brimstone",n$="Corpse",t$="Carrion",s$="Armageddon",i$="Havoc",l$="Bitter",o$="Entropy",r$="Chaos",c$="Order",d$="Rift",u$="Corruption",H$="Bite",p$="Scratch",m$="Scalpel",h$="Fang",A$="Gutter",N$="Thirst",f$="Razor",M$="Scythe",C$="Edge",g$="Saw",k$="Splitter",S$="Cleaver",T$="Sever",v$="Sunder",x$="Rend",y$="Mangler",D$="Slayer",b$="Reaver",P$="Spawn",E$="Gnash",w$="Star",R$="Blow",B$="Smasher",I$="Bane",L$="Crusher",G$="Breaker",q$="Grinder",U$="Crack",F$="Mallet",V$="Knell",_$="Lance",W$="Spike",z$="Impaler",Q$="Skewer",O$="Prod",K$="Scourge",X$="Wand",j$="Wrack",$$="Barb",Y$="Needle",J$="Dart",Z$="Bolt",eY="Quarrel",aY="Fletch",nY="Flight",tY="Nock",sY="Horn",iY="Stinger",lY="Quill",oY="Goad",rY="Branch",cY="Spire",dY="Song",uY="Call",HY="Cry",pY="Spell",mY="Chant",hY="Weaver",AY="Gnarl",NY="Visage",fY="Crest",MY="Circlet",CY="Veil",gY="Hood",kY="Mask",SY="Brow",TY="Casque",vY="Visor",xY="Cowl",yY="Hide",DY="Pelt",bY="Carapace",PY="Coat",EY="Wrap",wY="Suit",RY="Cloak",BY="Shroud",IY="Jack",LY="Mantle",GY="Guard",qY="Badge",UY="Rock",FY="Aegis",VY="Ward",_Y="Tower",WY="Shield",zY="Wing",QY="Mark",OY="Emblem",KY="Hand",XY="Fist",jY="Claw",$Y="Clutches",YY="Grip",JY="Grasp",ZY="Hold",eJ="Touch",aJ="Finger",nJ="Knuckle",tJ="Shank",sJ="Spur",iJ="Tread",lJ="Stalker",oJ="Greaves",rJ="Blazer",cJ="Nails",dJ="Trample",uJ="Brogues",HJ="Track",pJ="Slippers",mJ="Clasp",hJ="Buckle",AJ="Harness",NJ="Lock",fJ="Fringe",MJ="Winding",CJ="Chain",gJ="Strap",kJ="Lash",SJ="Cord",TJ="Knot",vJ="Circle",xJ="Loop",yJ="Eye",DJ="Turn",bJ="Spiral",PJ="Coil",EJ="Gyre",wJ="Band",RJ="Whorl",BJ="Talisman",IJ="Heart",LJ="Noose",GJ="Necklace",qJ="Collar",UJ="Beads",FJ="Torc",VJ="Gorget",_J="Scarab",WJ="Wood",zJ="Brand",QJ="Bludgeon",OJ="Cudgel",KJ="Loom",XJ="Harp",jJ="Master",$J="Bar",YJ="Hew",JJ="Crook",ZJ="Mar",eZ="Shell",aZ="Stake",nZ="Picket",tZ="Pale",sZ="Flange",iZ="Infernal",lZ="Angelic",oZ="Arctic",rZ="Ward",cZ="Tooth",dZ="Collar",uZ="Lightbrand",HZ="Barb",pZ="Orb",mZ="Rule",hZ="Crowbill",AZ="Visor",NZ="Cranium",fZ="Headgear",MZ="Hand",CZ="Sickle",gZ="Horn",kZ="Sign",SZ="Icon",TZ="Claw",vZ="Cuff",xZ="Parry",yZ="Fetlock",DZ="Rod",bZ="Mesh",PZ="Spine",EZ="Shelter",wZ="Torch",RZ="Hauberk",BZ="Guard",IZ="Mantle",LZ="Furs",GZ="Deathwand",qZ="Cudgel",UZ="Pincers",FZ="Coil",VZ="Case",_Z="Ambush",WZ="Diadem",zZ="Visage",QZ="Hobnails",OZ="Gage",KZ="Buckle",XZ="Hatchet",jZ="Touch",$Z="Halo",YZ="Binding",JZ="Head",ZZ="Horns",eee="Snare",aee="Robe",nee="Sigil",tee="Weird",see="Sabot",iee="Wings",lee="Mitts",oee="Flesh",ree="Cord",cee="Seal",dee="Skull",uee="Wrap",Hee="Guard",pee="Deathspade",mee="Bladebone",hee="Skull Splitter",Aee="Rakescar",Nee="Goreshovel",fee="Brainhew",Mee="Maelstrom",Cee="Gravenspine",gee="Felloak",kee="Rusthandle",See="Stormeye",Tee="Stoutnail",vee="Crushflange",xee="Bloodrise",yee="Ironstone",Dee="Bonesnap",bee="Steeldriver",Pee="Gleamscythe",Eee="Azurewrath",wee="Hellplague",Ree="Shadowfang",Bee="Soulflay",Iee="Blacktongue",Lee="Ripsaw",Gee="Gull",qee="Razortine",Uee="Bloodthief",Fee="Steelgoad",Vee="Woestave",_ee="Pluckeye",Wee="Witherstring",zee="Raven Claw",Qee="Rogue's Bow",Oee="Stormstrike",Kee="Wizendraw",Xee="Hellclap",jee="Blastbark",$ee="Leadcrow",Yee="Ichorsting",Jee="Hellcast",Zee="Doomslinger",eae="Tarnhelm",aae="Duskdeep",nae="Wormskull",tae="Howltusk",sae="Greyform",iae="Twitchthroe",lae="Darkglow",oae="Hawkmail",rae="Venom Ward",cae="Iceblink",dae="Boneflesh",uae="Rockfleece",Hae="Rattlecage",pae="Goldskin",mae="Stormguild",hae="Steelclash",Aae="Bloodfist",Nae="Magefist",fae="Frostburn",Mae="Hotspur",Cae="Gorefoot",gae="Tearhaunch",kae="Snakecord",Sae="Nightsmoke",Tae="Goldwrap",vae="Bladebuckle",xae="Nagelring",yae="Gorgethroat",Dae="Gloom",bae="Gray",Pae="Dire",Eae="Black",wae="Shadow",Rae="Haze",Bae="Wind",Iae="Storm",Lae="Warp",Gae="Night",qae="Moon",Uae="Star",Fae="Pit",Vae="Flame",_ae="Ice",Wae="Seethe",zae="Sharp",Qae="Ash",Oae="Blade",Kae="Steel",Xae="Stone",jae="Rust",$ae="Mold",Yae="Blight",Jae="Plague",Zae="Rot",ene="Ooze",ane="Puke",nne="Snot",tne="Bile",sne="Blood",ine="Pulse",lne="Gut",one="Gore",rne="Flesh",cne="Bone",dne="Spine",une="Mind",Hne="Spirit",pne="Soul",mne="Wrath",hne="Grief",Ane="Foul",Nne="Vile",fne="Sin",Mne="Chaos",Cne="Dread",gne="Doom",kne="Bane",Sne="Death",Tne="Viper",vne="Dragon",xne="Devil",yne="Touch",Dne="Spell",bne="Feast",Pne="Wound",Ene="Grin",wne="Maim",Rne="Hack",Bne="Bite",Ine="Rend",Lne="Burn",Gne="Ripper",qne="Kill",Une="Call",Fne="Vex",Vne="Jade",_ne="Web",Wne="Shield",zne="Killer",Qne="Razor",One="Drinker",Kne="Shifter",Xne="Crawler",jne="Dancer",$ne="Bender",Yne="Weaver",Jne="Eater",Zne="Widow",ete="Maggot",ate="Spawn",nte="Wight",tte="Grumble",ste="Growler",ite="Snarl",lte="Wolf",ote="Crow",rte="Raven",cte="Hawk",dte="Cloud",ute="Bang",Hte="Head",pte="Skull",mte="Brow",hte="Eye",Ate="Maw",Nte="Tongue",fte="Fang",Mte="Horn",Cte="Thorn",gte="Claw",kte="Fist",Ste="Heart",Tte="Shank",vte="Skin",xte="Wing",yte="Pox",Dte="Fester",bte="Blister",Pte="Pus",Ete="Slime",wte="Drool",Rte="Froth",Bte="Sludge",Ite="Venom",Lte="Poison",Gte="Shard",qte="Flame",Ute="Maul",Fte="Thirst",Vte="Lust",_te="the Quick",Wte="Taintbreeder",zte="Stormtree",Qte="Bishibosh",Ote="Bonebreaker",Kte="Coldcrow",Xte="Rakanishu",jte="Griswold",$te="Bone Ash",Yte="Radament",Jte="Fangskin",Zte="Beetleburst",ese="Creeping Feature",ase="Deckard Cain",nse="Gheed",tse="Akara",sse="Kashya",ise="Charsi",lse="Warriv",ose="Warriv",rse="Rogue",cse="Stygian Doll",dse="Soul Killer",use="Flayer",Hse="Fetish",pse="Rat Man",mse="Dark Familiar",hse="Blood Diver",Ase="Gloombat",Nse="Desert Wing",fse="The Banished",Mse="Blood Lord",Cse="Dark Lord",gse="Night Lord",kse="Ghoul Lord",Sse="Spikefist",Tse="Thrasher",vse="Bramble Hulk",xse="Thorned Hulk",yse="Spider Magus",Dse="Flame Spider",bse="Poison Spinner",Pse="Sand Fisher",Ese="Arach",wse="Blood Wing",Rse="Blood Hook",Bse="Feeder",Ise="Sucker",Lse="Winged Nightmare",Gse="Hell Buzzard",qse="Undead Scavenger",Use="Carrion Bird",Fse="Unraveler",Vse="Guardian",_se="Hollow One",Wse="Bone Scarab",zse="Steel Scarab",Qse="Scarab",Ose="Death Beetle",Kse="Dung Soldier",Xse="Hell Swarm",jse="Plague Bugs",$se="Black Locusts",Yse="Itchies",Jse="Hell Cat",Zse="Night Tiger",eie="Saber Cat",aie="Huntress",nie="Cliff Lurker",tie="Tree Lurker",sie="Cave Leaper",iie="Tomb Creeper",lie="Sand Leaper",oie="Tomb Viper",rie="Pit Viper",cie="Salamander",die="Claw Viper",uie="Serpent Magus",Hie="Blood Maggot",pie="Giant Lamprey",mie="Devourer",hie="Rock Worm",Aie="Sand Maggot",Nie="Bush Barb",fie="Razor Spine",Mie="Thorn Beast",Cie="Spike Fiend",gie="Quill Rat",kie="Hell Clan",Sie="Moon Clan",Tie="Night Clan",vie="Death Clan",xie="Blood Clan",yie="Temple Guard",Die="Doom Ape",bie="Jungle Hunter",Pie="Rock Dweller",Eie="Dune Beast",wie="Flesh Hunter",Rie="Black Rogue",Bie="Dark Stalker",Iie="Vile Hunter",Lie="Dark Hunter",Gie="Dark Shape",qie="Apparition",Uie="Specter",Fie="Ghost",Vie="Assailant",_ie="Infidel",Wie="Invader",zie="Marauder",Qie="Sand Raider",Oie="Gargantuan Beast",Kie="Wailing Beast",Xie="Yeti",jie="Crusher",$ie="Brute",Yie="Cloud Stalker",Jie="Black Vulture",Zie="Black Raptor",ele="Blood Hawk",ale="Foul Crow",nle="Plague Bearer",tle="Ghoul",sle="Drowned Carcass",ile="Hungry Dead",lle="Zombie",ole="Skeleton",rle="Horror",cle="Returned",dle="Burning Dead",ule="Bone Warrior",Hle="Damned",ple="Disfigured",mle="Misshapen",hle="Tainted",Ale="Afflicted",Nle="Andariel",fle="Natalya",Mle="Drognan",Cle="Atma",gle="Fara",kle="Lysander",Sle="Jerhyn",Tle="Jerhyn",vle="Geglash",xle="Elzix",yle="Greiz",Dle="Meshif",ble="Camel",Ple="Cadaver",Ele="Preserved Dead",wle="Embalmed",Rle="Dried Corpse",Ble="Decayed",Ile="Urdar",Lle="Mauler",Gle="Gorebelly",qle="Blunderbore",Ule="Blood Maggot Young",Fle="Giant Lamprey Young",Vle="Devourer Young",_le="Rock Worm Young",Wle="Sand Maggot Young",zle="Blood Maggot Egg",Qle="Giant Lamprey Egg",Ole="Devourer Egg",Kle="Rock Worm Egg",Xle="Sand Maggot Egg",jle="Maggot",$le="Duriel",Yle="Blood Hawk Nest",Jle="Flying Scimitar",Zle="Cloud Stalker Nest",eoe="Black Raptor Nest",aoe="Foul Crow Nest",noe="Diablo",toe="Baal",soe="Mephisto",ioe="Cantor",loe="Heirophant",ooe="Sexton",roe="Zealot",coe="Faithful",doe="Zakarumite",uoe="Black Soul",Hoe="Burning Soul",poe="Swamp Ghost",moe="Gloam",hoe="Warped Shaman",Aoe="Dark Shaman",Noe="Devilkin Shaman",foe="Carver Shaman",Moe="Fallen Shaman",Coe="Warped One",goe="Dark One",koe="Devilkin",Soe="Carver",Toe="Fallen",voe="Returned Archer",xoe="Horror Archer",yoe="Burning Dead Archer",Doe="Bone Archer",boe="Corpse Archer",Poe="Skeleton Archer",Eoe="Flesh Lancer",woe="Black Lancer",Roe="Dark Lancer",Boe="Vile Lancer",Ioe="Dark Spearwoman",Loe="Flesh Archer",Goe="Black Archer",qoe="Dark Ranger",Uoe="Vile Archer",Foe="Dark Archer",Voe="The Summoner",_oe="Stygian Doll Shaman",Woe="Soul Killer Shaman",zoe="Flayer Shaman",Qoe="Fetish Shaman",Ooe="RatMan Shaman",Koe="Horror Mage",Xoe="Burning Dead Mage",joe="Bone Mage",$oe="Corpse Mage",Yoe="Returned Mage",Joe="Gargoyle Trap",Zoe="Blood Raven",ere="Flavie",are="Kaelan",nre="Meshif",tre="Stygian Watcher",sre="River Stalker",ire="Water Watcher",lre="Stygian Watcher",ore="River Stalker",rre="Water Watcher",cre="Night Marauder",dre="Fire Golem",ure="Iron Golem",Hre="Blood Golem",pre="Clay Golem",mre="Blood Maggot Queen",hre="Giant Lamprey Queen",Are="Devourer Queen",Nre="Rock Worm Queen",fre="Sand Maggot Queen",Mre="Barbed Giant",Cre="Razor Beast",gre="Thorn Brute",kre="Spike Giant",Sre="Quill Bear",Tre="Dark Wanderer",vre="Dark Wanderer",xre="Hell Slinger",yre="Night Slinger",Dre="Spear Cat",bre="Slinger",Pre="Fire Tower",Ere="Lightning Spire",wre="Pit Lord",Rre="Balrog",Bre="Venom Lord",Ire="Inviso Spawner",Lre="Oblivion Knight",Gre="Mage",qre="Abyss Knight",Ure="Doom Knight",Fre="Fighter",Vre="Maw Fiend",_re="Corpse Spitter",Wre="Corpulent",zre="Storm Caster",Qre="Strangler",Ore="Doom Caster",Kre="Grotesque Wyrm",Xre="Stygian Dog",jre="Flesh Beast",$re="Grotesque",Yre="Stygian Hag",Jre="Flesh Spawner",Zre="Rogue Scout",e1e="Blood Wing Nest",a1e="Blood Hook Nest",n1e="Feeder Nest",t1e="Sucker Nest",s1e="Necromage",i1e="Necroskeleton",l1e="Trapped Soul",o1e="Valkyrie",r1e="Decoy",c1e="Extra Strong",d1e="Extra Fast",u1e="Cursed",H1e="Magic Resistant",p1e="Fire Enchanted",m1e="Cold Enchanted",h1e="Lightning Enchanted",A1e="Mana Burn",N1e="Spectral Hit",f1e="Teleportation",M1e="Stone Skin",C1e="Multiple Shots",g1e="Thief",k1e="Aura Enchanted",S1e="Champion",T1e="Minion",v1e="Barrel",x1e="Lever",y1e="an Exploding Barrel",D1e="Closed Door",b1e="Portal to ",P1e="Open Door",E1e="Blocked Door",w1e="Locked Door",R1e="Cairn Stone",B1e="Cairn Stone",I1e="Cairn Stone",L1e="Cairn Stone",G1e="Cairn Stone",q1e="Cairn Stone",U1e="Crate",F1e="Casket",V1e="Cabinet",_1e="Vase",W1e="Tree of Inifuss",z1e="Corpse",Q1e="Dead Rogue",O1e="Dead Rogue",K1e="The Moldy Tome",X1e="Cain's Gibbet",j1e="Mummy Sarcophagus",$1e="Armor Stand",Y1e="Weapon Rack",J1e="Sarcophagus",Z1e="Large Urn",ece="Canopic Jar",ace="Obelisk",nce="Undefiled Grave",tce="Shrine",sce="Urn",ice="Waypoint",lce="Well",oce="Bag",rce="Chest",cce="Chest",dce="Locked Chest",uce="Horazon's Journal",Hce="shrine",pce="Stair",mce="Coffin",hce="Bookshelf",Ace="Fire",Nce="Chest",fce="Guard Corpse",Mce="Bowl",Cce="Jug",gce="Ambient Sound",kce="Rat's Nest",Sce="Well",Tce="Door",vce="Skeleton",xce="Skullpile",yce="Cocoon",Dce="Cow",bce="Shrine",Pce="Bed",Ece="Chest",wce="Your Private Stash",Rce="Holyshrine",Bce="Body",Ice="Compelling Orb",Lce="Basket",Gce="Basket",qce="Rock Pile",Uce="Horazon's Journal",Fce="Eunuch",Vce="Portal",_ce="Sarcophagus",Wce="Stash",zce="Suffering Soul",Qce="Tainted Sun Altar",Oce="Hellforge",Kce="Corpsefire",Xce="fissure",jce="Bone Chest",$ce="Casket",Yce="Hung Skeleton",Jce="Pillar",Zce="Hydra",ede="a Turret",ade="Cost: ",nde="Repair cost: ",tde="Sell value: ",sde="Identify cost: ",ide="Item cannot be traded here.",lde="trade/repair",ode="Buy",rde="Sell",cde="Heal :",dde="Repair",ude="Next Page",Hde="Previous Page",pde="Accept Trade",mde="     Your Gold: ",hde="Which item should be imbued?",Ade="Yes",Nde="No",fde="Gold:",Mde="Sell",Cde="Buy",gde="Hire",kde="Identify",Sde="Repair",Tde="This Mercenary will replace your current one.",vde="Waiting for confirmation of transaction...",xde="Sync error on transaction, please try again.",yde="Invalid item detected, player will be dropped.",Dde="You do not have enough free space to do that.",bde="You already have the maximum number of Mercenaries.",Pde="That item has just been traded.",Ede="You do not have enough room for the gold.",wde="Something tells me that you do not have that item.",Rde="I cannot complete that request.",Bde="You do not have enough gold for that.",Ide="She cannot come right now.  Try again later.",Lde="Your Gold: %d     Hire which Mercenary?",Gde="There are no Mercenaries left to hire.",qde="Life",Ude="Def",Fde="Lvl",Vde="Cost",_de="Damage",Wde="Fire Arrow",zde="Cold Arrow",Qde="Jab Attack",Ode="Poison Resistant",Kde="Lightning",Xde="Cold",jde="Fire",$de="Lightning, Fast Cast",Yde="Cold, Fast Cast",Jde="Fire, Fast Cast",Zde="talk",eue="go east",aue="go west",nue="sail east",tue="sail west",sue="important news",iue="urgent news",lue="pressing matters",oue="important news",rue="urgent matters",cue="tell me more",due="about the merchants",uue="the townspeople",Hue="leave",pue="gossip",mue="trade",hue="hire",Aue="gamble",Nue="introduction",fue="cancel",Mue="ok",Cue="CANCEL",gue="Continue",kue="_",Sue="Music",Tue="Sound",vue="Gamma",xue="Render",yue="Previous Menu",Due="Configure Controls",bue="Aliza",Pue="Amplisa",Eue="Annor",wue="Abhaya",Rue="Elly",Bue="Paige",Iue="Basanti",Lue="Blaise",Gue="Kyoko",que="Klaudia",Uue="Kundri",Fue="Kyle",Vue="Visala",_ue="Elexa",Wue="Floria",zue="Fiona",Que="Gwinni",Oue="Gaile",Kue="Hannah",Xue="Heather",jue="Iantha",$ue="Diane",Yue="Isolde",Jue="Divo",Zue="Ithera",eHe="Itonya",aHe="Liene",nHe="Maeko",tHe="Mahala",sHe="Liaza",iHe="Meghan",lHe="Olena",oHe="Oriana",rHe="Ryann",cHe="Rozene",dHe="Raissa",uHe="Sharyn",HHe="Shikha",pHe="Debi",mHe="Tylena",hHe="Wendy",AHe="I feel much stronger now",NHe="Socketed",fHe="Requirements not met",MHe="Unidentified",CHe="Charges:",gHe="Durability:",kHe="Required Strength:",SHe="Required Dexterity:",THe="Damage:",vHe="Defense:",xHe="Quantity:",yHe="of",DHe="to",bHe="One-Hand Damage:",PHe="Two-Hand Damage:",EHe="Throw Damage:",wHe="Smite Damage:",RHe="Required Level:",BHe="Points:",IHe="Heals 35% Life and Mana",LHe="Heals 100% Life and Mana",GHe="to Strength",qHe="to Dexterity",UHe="to Vitality",FHe="to Energy",VHe="to Mana",_He="to Maximum Damage",WHe="to Minimum Damage",zHe="to Attack Rating",QHe="Defense",OHe="Fire Resist",KHe="Cold Resist",XHe="Lightning Resist",jHe="Magic Resist",$He="Poison Resist",YHe="to Maximum Fire Damage",JHe="to Minimum Fire Damage",ZHe="to Maximum Lightning Damage",e0e="to Minimum Lightning Damage",a0e="to Maximum Cold Damage",n0e="to Minimum Cold Damage",t0e="to Life",s0e="Attacker Takes Damage of",i0e="Extra Gold from Monsters",l0e="Better Chance of Getting Magic Items",o0e="Knockback",r0e="Elixir of Strength",c0e="Elixir of Dexterity",d0e="Elixir of Energy",u0e="Elixir of Vitality",H0e="Elixir of Mana",p0e="Elixir of Life",m0e="Sec. Duration",h0e="Increase Maximum Life",A0e="Increase Maximum Mana",N0e="Increase Maximum Durability",f0e="Enhanced Maximum Damage",M0e="Enhanced Minimum Damage",C0e="Replenish Life",g0e="Replenish Mana",k0e="Heal 1/4 Life",S0e="Heal 1/2 Life",T0e="Restore Full Life",v0e="Replenish 1/4 Mana",x0e="Replenish 1/2 Life",y0e="Restore Full Mana",D0e="Magic Damage Reduced by",b0e="Damage Reduced by",P0e="Enhanced Defense",E0e="Drain Life",w0e="Drain Mana",R0e="Mana stolen per hit",B0e="Life stolen per hit",I0e="to Amazon Skill Levels",L0e="to Paladin Skill Levels",G0e="to Necromancer Skill Levels",q0e="to Sorceress Skill Levels",U0e="to Barbarian Skill Levels",F0e="to Light Radius",V0e="Increased Chance of Blocking",_0e="Requirements",W0e="to Fire Skills",z0e="Attacker Takes Lightning Damage of",Q0e="to All Skills",O0e="Freezes target",K0e="Chance of Open Wounds",X0e="Invisibility",j0e="Neutral Invisibility",$0e="No Mana Healing",Y0e="No Life Healing",J0e="Poison Length Reduced by",Z0e="Hit Causes Monster to Flee",epe="Heal Stamina Plus",ape="Damage Taken Goes To Mana",npe="Heal Life Plus",tpe="Ignore Target's Defense",spe="Half Poison Duration",ipe="Prevent Monster Heal",lpe="Half Freeze Duration",ope="Bonus to Attack Rating",rpe="to Monster Defense Per Hit",cpe="Damage to Demons",dpe="Damage to Undead",upe="Regenerate Mana",Hpe="to Maximum Poison Damage",ppe="to Minimum Poison Damage",mpe="to Attack Rating against Demons",hpe="to Attack Rating against Undead",Ape="Slightly Increased Attack Speed",Npe="Increased Attack Speed",fpe="Greatly Increased Attack Speed",Mpe="Fast Hit Recovery",Cpe="Faster Hit Recovery",gpe="Fastest Hit Recovery",kpe="Fast Run/Walk",Spe="Faster Run/Walk",Tpe="Fastest Run/Walk",vpe="Fast Cast Rate",xpe="Faster Cast Rate",ype="Fastest Cast Rate",Dpe="Fast Block Rate",bpe="Faster Block Rate",Ppe="Fastest Block Rate",Epe="Throwable",wpe="Damage",Rpe="Chance of Crushing Blow",Bpe="Maximum Stamina",Ipe="Kick Damage",Lpe="to Mana after each Kill",Gpe="Fire Absorb",qpe="Fire Absorb",Upe="Lightning Absorb",Fpe="Lightning Absorb",Vpe="Magic Absorb",_pe="Magic Absorb",Wpe="Cold Absorb",zpe="Cold Absorb",Qpe="Target Defense",Ope="Extra Bloody",Kpe="Deadly Strike",Xpe="Slows Target by",jpe="Blessed Aim",$pe="Defiance",Ype="to Maximum Fire Resist",Jpe="to Maximum Cold Resist",Zpe="to Maximum Lightning Resist",eme="to Maximum Magic Resist",ame="to Maximum Poison Resist",nme="Cannot Be Frozen",tme="Defense vs. Missile",sme="Defense vs. Melee",ime="Life after each Demon Kill",lme="Hit Blinds Target",ome="Slower Stamina Drain",rme="Chance to Reanimate Target",cme="Piercing Attack",dme="Fires Magic Arrows",ume="Fires Explosive Arrows or Bolts",Hme="All Resistances +%d",pme="+%d to All Skill Levels",mme="+%d fire damage",hme="Adds %d-%d fire damage",Ame="+%d cold damage",Nme="Adds %d-%d cold damage",fme="+%d lightning damage",Mme="Adds %d-%d lightning damage",Cme="+%d magic damage",gme="Adds %d-%d magic damage",kme="+%d poison damage over %d seconds",Sme="Adds %d-%d poison damage over %d seconds",Tme="+%d damage",vme="Adds %d-%d damage",xme="Enhanced damage",yme="Can Be Inserted in Socketed",Dme="Weapons, Shields or Helms",bme=`Helm: adds to strength
Shield: adds to shield's defense rating
Weapon: adds to attack rating
`,Pme=`Helm: adds to maximum mana
Shield: adds resistance to cold
Weapon: adds cold damage to attack
`,Eme=`Helm: adds to dexterity
Shield: adds resistance to poison
Weapon: adds poison damage to attack
`,wme=`Helm: adds to maximum life
Shield: adds resistance to fire
Weapon: adds fire damage to attack
`,Rme=`Helm: adds to attack rating
Shield: adds to all resistances
Weapon: adds to damage vs. undead
`,Bme=`Helm: adds to chance to find magic items
Shield: adds resistance to lightning
Weapon: adds lightning damage to attack
`,Ime=`Helm: adds mana and life regeneration
Shield: adds attacker takes damage
Weapon: adds mana and life steal to attack
`,Lme=" dropped due to timeout.",Gme=" dropped due to errors.",qme="%s joined our world. Diablo's minions grow stronger.",Ume="%s left our world. Diablo's minions weaken.",Fme="%s(%s) joined our world. Diablo's minions grow stronger.",Vme="%s(%s) left our world. Diablo's minions weaken.",_me=" is not in the game.",Wme=" is not logged in.",zme=" was slain by ",Qme=" was slain by ",Ome=" was slain.",Kme="Wrong type of Gem.",Xme="Realm is going down in %d minutes.",jme=" is not listening to you.",$me="Player",Yme=" whispers: ",Jme=" shouts: ",Zme=" )",ehe="ÿc0You whispered to ÿc1%sÿc0: %s",ahe="Working...",nhe="Null Shrine",the="Refilling Shrine",she="Health Shrine",ihe="Mana Shrine",lhe="Health Exchange Shrine",ohe="Mana Exchange Shrine",rhe="Armor Shrine",che="Combat Shrine",dhe="Resist Fire Shrine",uhe="Resist Cold Shrine",Hhe="Resist Lightning Shrine",phe="Resist Poison Shrine",mhe="Skill Shrine",hhe="Mana Recharge Shrine",Ahe="Stamina Shrine",Nhe="Experience Shrine",fhe="Enirhs Shrine",Mhe="Portal Shrine",Che="Gem Shrine",ghe="Fire Shrine",khe="Monster Shrine",She="Exploding Shrine",The="Poison Shrine",vhe="You feel nothing.",xhe="You feel refreshed.",yhe="You feel healthy.",Dhe="You feel recharged.",bhe="You feel incredibly healthy.",Phe="You feel infused with energy.",Ehe="Your skin hardens.",whe="You feel ready for battle.",Rhe="You no longer fear fire.",Bhe="You no longer fear cold.",Ihe="You no longer fear lightning.",Lhe="You no longer fear poison.",Ghe="You feel more skillful.",qhe="Your spiritual force recovers quickly.",Uhe="The weight of the world seems lighter.",Fhe="Your experience teaches you well.",Vhe="Your sense of identity is subtly changed.",_he="The freedom to go home...",Whe="A marvelous gem...",zhe="A fiery death...",Qhe="Death's advocate approaches.",Ohe="A circle of flame...",Khe="A circle of death...",Xhe="Activate the stones in",jhe="this order.",$he="The Horadric Malus has been returned to the Monastery.",Yhe="The scroll of Inifuss has been returned to the Tree.",Jhe="The minions of Diablo have taken back Lam Esen's Tome.",Zhe="The Townspeople",e5e="introduction",a5e="Act 1 Prologue",n5e="Den of Evil",t5e="Sisters' Burial Grounds",s5e="Tools of the Trade",i5e="The Search for Cain",l5e="The Forgotten Tower",o5e="Sisters to the Slaughter",r5e="Speech",c5e="New Entry",d5e="Quest Status",u5e="No active quests.",H5e="Invalid Quest Value",p5e="Invalid State",m5e="Quest completed.",h5e="You cannot complete this quest in this game. Another player completed it first.",A5e="You completed this quest in a previous game.",N5e="You cannot complete this quest in this game. You can complete it by creating a new game.",f5e="You cannot complete this quest in this game. You can complete it by creating a new game or joining a different game.",M5e="You cannot complete this quest in this game. Cain was rescued without your help.",C5e="You must be level 8 to complete this quest. You can complete it by creating a new game or joining a different game when you are at least level 8.",g5e="The person with the malus quit the game.",k5e="The person with the horadric scroll quit the game.",S5e="Look for the Den in the wilderness outside the Rogues' Camp.",T5e="Kill all the monsters in the Den.",v5e="",x5e="Monsters remaining: ",y5e="One monster left.",D5e="Return to Akara for a reward.",b5e="Look for Blood Raven in the Burial Grounds next to the Cold Plains.",P5e="Kill Blood Raven.",E5e="Return to Kashya for a reward.",w5e="Go through the Underground Passage to the Dark Wood, search for the Tree of Inifuss, and recover the Scroll.",R5e="Take the Scroll of Inifuss to Akara.",B5e="Go to the Cairn Stones in the Stony Field. Touch the Stones in the order found on the Scroll of Inifuss. Enter the portal to Tristram, but beware the danger that lies ahead.",I5e="Find and rescue Deckard Cain.",L5e="Cain has been rescued and is now at the Rogue Encampment.",G5e="Visit Cain and Akara in the Rogue Encampment.",q5e="Talk to Akara for a reward.",U5e="Look for the Tower in the Black Marsh beyond the Dark Wood.",F5e="Explore the cellar dungeons beneath the Tower ruins.",V5e="Explore the cellar dungeons beneath the Tower ruins.",_5e="Dispose of the evil Countess.",W5e="Look for the Horadric Malus in the Monastery Barracks. Beware of the Smith that guards it.",z5e="Return the Horadric Malus to Charsi.",Q5e="Charsi will imbue an item with magical power.",O5e="Find Andariel's Lair in the depths of the Monastery Catacombs.",K5e="Kill Andariel.",X5e="Return to Warriv to take the Caravan East.",j5e="Return to Warriv to take the Caravan East.",$5e="None",Y5e="Mouse 1",J5e="Mouse 2",Z5e="Cancel",e2e="Mouse 3",a2e="Mouse 4",n2e="Mouse 5",t2e="Mouse Wheel Up",s2e="Mouse Wheel Down",i2e="Kana",l2e="Junja",o2e="Final",r2e="Kanji",c2e="Escape",d2e="Convert",u2e="Non-Convert",H2e="Accept",p2e="Mode Change",m2e="Left",h2e="Up",A2e="Right",N2e="Down",f2e="Select",M2e="Execute",C2e="Left Windows",g2e="Right Windows",k2e="Apps Menu",S2e="Num Lock",T2e="Backspace",v2e="Tab",x2e="Clear",y2e="Enter",D2e="Shift",b2e="Ctrl",P2e="Alt",E2e="Pause",w2e="Caps Lock",R2e="Space",B2e="Page Up",I2e="Page Down",L2e="End",G2e="Home",q2e="P - Tell Ken",U2e="Print Screen",F2e="Insert",V2e="Delete",_2e="Help",W2e="Num Pad 0",z2e="Num Pad 1",Q2e="Num Pad 2",O2e="Num Pad 3",K2e="Num Pad 4",X2e="Num Pad 5",j2e="Num Pad 6",$2e="Num Pad 7",Y2e="Num Pad 8",J2e="Num Pad 9",Z2e="Num Pad *",eAe="Num Pad +",aAe="Separator",nAe="Num Pad -",tAe="Num Pad .",sAe="Num Pad /",iAe="F1",lAe="F2",oAe="F3",rAe="F4",cAe="F5",dAe="F6",uAe="F7",HAe="F8",pAe="F9",mAe="F10",hAe="F11",AAe="F12",NAe="F13",fAe="F14",MAe="F15",CAe="F16",gAe="F17",kAe="F18",SAe="F19",TAe="F20",vAe="F21",xAe="F22",yAe="F23",DAe="F24",bAe="Scroll Lock",PAe=";",EAe="=",wAe=",",RAe="-",BAe=".",IAe="/",LAe="~",GAe="[",qAe="\\",UAe="]",FAe="'",VAe="m3",_Ae="m4",WAe="m5",zAe="mwu",QAe="mwd",OAe="kna",KAe="jun",XAe="fin",jAe="kji",$Ae="esc",YAe="con",JAe="ncn",ZAe="acc",eNe="mdc",aNe="lft",nNe="rgt",tNe="Dwn",sNe="Slt",iNe="exc",lNe="lwn",oNe="rwn",rNe="apm",cNe="nml",dNe="bks",uNe="clr",HNe="ent",pNe="sft",mNe="ctl",hNe="pse",ANe="clk",NNe="spc",fNe="pup",MNe="pdn",CNe="hme",gNe="psn",kNe="ins",SNe="del",TNe="hel",vNe="np0",xNe="np1",yNe="np2",DNe="np3",bNe="np4",PNe="np5",ENe="np6",wNe="np7",RNe="np8",BNe="np9",INe="slk",LNe="Option",GNe="Command",qNe="Opt",UNe="Cmd",FNe="Function",VNe="Key/Button One",_Ne="Key/Button Two",WNe="Character Screen",zNe="Inventory Screen",QNe="Party Screen",ONe="Message Log",KNe="Quest Log",XNe="Chat",jNe="Automap",$Ne="Center Automap",YNe="Micromap",JNe="Help Screen",ZNe="Skill Tree",efe="Skill Speed Bar",afe="Skill 1",nfe="Skill 2",tfe="Skill 3",sfe="Skill 4",ife="Skill 5",lfe="Skill 6",ofe="Skill 7",rfe="Skill 8",cfe="Select Previous Skill",dfe="Select Next Skill",ufe="Show Belt",Hfe="Use Belt 1",pfe="Use Belt 2",mfe="Use Belt 3",hfe="Use Belt 4",Afe="Use Belt 5",Nfe="Use Belt 6",ffe="Use Belt 7",Mfe="Use Belt 8",Cfe="Use Belt 9",gfe="Use Belt 10",kfe="Use Belt 11",Sfe="Use Belt 12",Tfe="Say 'Help'",vfe="Say 'Follow me'",xfe="Say 'This is for you'",yfe="Say 'Thanks'",Dfe="Say 'Sorry'",bfe="Say 'Bye'",Pfe="Say 'Now you die'",Efe="Run",wfe="Toggle Run/Walk",Rfe="Stand Still",Bfe="Show Items",Ife="Clear Screen",Lfe="Screen Shot",Gfe="Default",qfe="Accept",Ufe="Cancel",Ffe="No keys were assigned because you neglected to assign one or more keys.",Vfe="Keys assigned.",_fe="Cannot assign to mouse button",Wfe="Cannot assign to mouse wheel",zfe="Cannot assign to this key",Qfe="Clear key",Ofe="Clear Messages",Kfe="Show Portraits",Xfe="Fade Automap",jfe="Names on Automap",$fe="Party on Automap",Yfe="New Stats",Jfe="New Skill",Zfe="Warps",eMe="No Warps",aMe="Choose your destination",nMe="No Other Waypoints Activated",tMe="MAX",sMe="MAX",iMe="ÿc",lMe=" ",oMe="-",rMe=":",cMe=`
`,dMe="|",uMe="/",HMe="%",pMe="+",mMe="to",hMe="Players",AMe="Dwell",NMe="Larva",fMe="Barbarian",MMe="Paladin",CMe="Necromancer",gMe="Sorceress",kMe="Amazon",SMe="Druid",TMe="Assassin",vMe="Nest",xMe="No Party",yMe="Party  #",DMe="imbue",bMe="No Magic, Socketed, Rare, Unique, or Set Items. No Jewelry or Throwing Weapons.",PMe="Use Gem",EMe="Identify Items",wMe="Identify Items: ",RMe="Cannot repair unidentified items",BMe=" permits you to loot his corpse.",IMe=" permits you to loot her corpse.",LMe=" has expressed hostility towards you.",GMe=" is no longer hostile towards you.",qMe=" invites you to ally against the forces of evil.",UMe=" has cancelled the party invite.",FMe=" has joined your party to fight the forces of evil.",VMe="You are now allied with ",_Me=" has left your party.",WMe="How much Gold would you like to drop?",zMe="Drop Gold",QMe="Message Log",OMe="Armor",KMe="Weapons",XMe="Magic",jMe="Misc",$Me="trade",YMe="accept trade",JMe="agree to trade",ZMe="asking other player to trade",e3e=" is busy",a3e="One of you has too much stuff",n3e="How much Gold would you like to offer?",t3e="You must wait a short time to trade with that player.",s3e=": ",i3e="How much Gold would you like to deposit?",l3e="How much Gold would you like to withdraw?",o3e="Gold Max: %d",r3e="Golem",c3e="Skeleton",d3e="Mage",u3e="Revived",H3e="Valkyrie",p3e="Level",m3e="Experience",h3e="Next Level",A3e="Strength",N3e="Damage",f3e="Dexterity",M3e=`%s
Attack Rating`,C3e="Defense",g3e=`%s
Rating`,k3e="Vitality",S3e="Stamina",T3e="Life",v3e="Energy",x3e="Mana",y3e=`Fire
Resistance`,D3e=`Cold
Resistance`,b3e=`Lightning
Resistance`,P3e=`Poison
Resistance`,E3e="Stat Points",w3e="Remaining",R3e="Mace Class",B3e="Axe Class",I3e="Sword Class",L3e="Dagger Class",G3e="Equip to Throw",q3e="Javelin Class",U3e="Spear Class",F3e="Bow Class",V3e="Staff Class",_3e="Polearm Class",W3e="Crossbow Class",z3e="Fastest Attack Speed",Q3e="Very Fast Attack Speed",O3e="Fast Attack Speed",K3e="Normal Attack Speed",X3e="Slow Attack Speed",j3e="Very Slow Attack Speed",$3e="Slowest Attack Speed",Y3e="(Necromancer Only)",J3e="(Paladin Only)",Z3e="(Sorceress Only)",eCe="Damage to Undead",aCe="Gold",nCe="Invite this player ",tCe="to join your party.",sCe="Accept this player's ",iCe="invitation to form a party.",lCe="Cancel your invitation",oCe="to this player.",rCe="Click to go hostile",cCe="with this player.",dCe="Click to go neutral",uCe="with this player.",HCe="Click to allow this player",pCe="to loot your corpse.",mCe="Click to disallow this player",hCe="from looting your corpse.",ACe="Click to allow this player",NCe="to hear you.",fCe="Click to stop this player",MCe="from hearing you.",CCe="Click to squelch this player.",gCe="Click to un-squelch this player.",kCe="Remove yourself from party.",SCe="Must be toggled in town.",TCe="Both players must be at least level 9",vCe="to go hostile with each other",xCe="Withdraw",yCe="Drop Gold",DCe="Deposit",bCe="Offer",PCe="Gold in Stash:",ECe="Trade Gold",wCe="Cancel",RCe="ACCEPT TRADE",BCe="The True Tomb is Hidden.",ICe=" has items in his box.",LCe="You have items in your box.",GCe=" - Free for you",qCe="Act 1",UCe="Act 2",FCe="Act 3",VCe="Act 4",_Ce="Level",WCe="cancel",zCe="close",QCe="Close",OCe="In your party",KCe="In a party",XCe="INVITE",jCe="ACCEPT",$Ce="LEAVE",YCe="CLOSE",JCe="Amazon",ZCe="Sorceress",ege="Barbarian",age="Necromancer",nge="Paladin",tge="Average chance to hit",sge="level %d monster: %d%%",ige="Average chance a level %d",lge="monster will hit you: %d%%",oge="Experience: %u / %u",rge="Stamina: %d / %d",cge="Life: %d / %d",dge="Mana: %d / %d",uge="Open Mini Panel",Hge="Close Mini Panel",pge="Character",mge="Inventory",hge="Skill Tree",Age="Party Screen",Nge="Automap",fge="Message Log",Mge="Quest Log",Cge="Game Menu (Esc)",gge="Help",kge=" (%s)",Sge="Run",Tge="Walk",vge="Game: ",xge="Password: ",yge="Difficulty: %s",Dge="Quantity : %d",bge="Level ",Pge=" percent",Ege="Required Level : ",wge="Quantity ",Rge="Char Info",Bge="Quests",Ige="Unused",Lge="Inventory",Gge="Menu",qge="Automap",Uge="Unused",Fge="Skill Tree",Vge="Your stash is full.",_ge="Diablo II Help",Wge="Hold Down <%s> to Run",zge="Hold down <%s> to highlight items on the ground",Qge="Hold down <%s> to attack while standing still",Oge="Hit <%s> to toggle the automap on and off",Kge="Hit <Esc> to bring up the Game Menu",Xge="Hit <Enter> to go into chat mode",jge="Use F1-F8 to set your Left or Right Mouse Button Skills.",$ge="Hit <%s> to toggle this screen open and closed",Yge="Life Orb",Jge="Left Mouse-",Zge="Button Skill",eke="(Click to Change)",ake="Right Mouse-",nke="Run/Walk",tke="Toggle",ske="Stamina Bar",ike="Experience",lke="Bar",oke="Mini-Panel",rke="(opens Character,",cke="Inventory, and",dke="other screens)",uke="Belt",Hke="Mana Orb",pke="",mke="Skill Tab 1",hke="Skill Tab 2",Ake="Skill Tab 3",Nke="Skill",fke="Choices",Mke="Remaining",Cke="Skills",gke="Spells",kke="Javelin",Ske="and Spear",Tke="Passive",vke="and Magic",xke="Bow and",yke="Crossbow",Dke="Defensive",bke="Auras",Pke="Offensive",Eke="Combat",wke="Summoning",Rke="Poison",Bke="and Bone",Ike="Curses",Lke="Warcries",Gke="Combat",qke="Masteries",Uke="Cold",Fke="Lightning",Vke="Fire",_ke="",Wke="Next Level",zke="Current Skill Level: ",Qke="Mana Cost: ",Oke="Damage: ",Kke="Fire Damage: ",Xke="Cold Damage: ",jke="Lightning Damage: ",$ke="Poison Damage: ",Yke=" arrows",Jke="To Attack Rating: ",Zke=" hits",eSe="-",aSe="Cold Length: ",nSe="Poison Length: ",tSe=" second",sSe=" seconds",iSe="First Level",lSe="Radius: ",oSe=" squares",rSe="Duration: ",cSe="Defense: ",dSe="Attack: ",uSe=" percent",HSe=" percent chance",pSe="Enemy Defense: ",mSe=" yards",hSe=" bolts",ASe=" teeth",NSe="Freeze Length: ",fSe="Attack Bonus: ",MSe="Defense Bonus: ",CSe="Fire Damage",gSe="Weakens Enemies by ",kSe=" per second",SSe="Continuous Fire Damage: ",TSe=" yard",vSe="Damage Taken: ",xSe="Target's Damage: ",ySe="Magic Damage: ",DSe="Absorbs ",bSe=" damage",PSe="Life: ",ESe=" skeleton mage",wSe=" skeleton magi",RSe="Golem Level: ",BSe=" percent of corpse Life",ISe=" damage to Self",LSe="Stun Length: ",GSe=" percent of shield strength",qSe="Heals: ",USe="Resist Fire: ",FSe="Resist Cold: ",VSe="Resist Lightning: ",_Se="Resist All: ",WSe=" percent damage returned",zSe="Range: ",QSe="Target's Attack: ",OSe="Enemy runs up to ",KSe="Enemy runs for ",XSe=" per target",jSe="Multiple Hits",$Se="Freezes for ",YSe="over ",JSe=" poison damage",ZSe="Chance of losing durability: ",eTe="Target stutters for ",aTe="Ranged attacks slowed to ",nTe="Average ",tTe="Stamina Recovery Rate: ",sTe="Velocity: ",iTe="Stamina Bonus: ",lTe="Releases ",oTe=" charged bolts",rTe="Duration reduced by ",cTe="Elemental Damages: ",dTe="Chance uninterruptable ",uTe="Enemies slowed ",HTe="Remains target for ",pTe=" percent of attack damage",mTe="Converts ",hTe=" percent damage to life",ATe="Fire Duration: ",NTe="Fire Explosion Damage: ",fTe="Lightning Bolt Damage: ",MTe="Reduces curse duration by ",CTe="Attacks up to ",gTe=" targets",kTe="Mana Recovery Rate: ",STe="Walk/Run Speed: ",TTe="Resistances: ",vTe="Holy Bolt Damage: ",xTe=" mana per knockback",yTe=" skeleton total",DTe="Skeletons: ",bTe="Magi: ",PTe="Monsters: ",ETe="Lowers Maximum Resistances ",wTe="Chance to convert: ",RTe="Max Life: ",BTe="Max Mana: ",ITe="Max Stamina: ",LTe=" percent fire damage",GTe=" monster",qTe=" monsters",UTe="Attack Speed: ",FTe="Life/Mana Recovered: ",VTe=" points",_Te="Chance to redeem soul: ",WTe="Successful Blocking: ",zTe=" per yard",QTe="Thorns damage",OTe="Hydra Fire Damage: ",KTe="Resist Elemental Damage: ",XTe="Minimum Mana Required to Cast: ",jTe="Maximum Level Reached",$Te=" (item)",YTe="You have been granted this skill by an item",JTe="You have not learned this skill yet",ZTe="Attack",eve="normal attack",ave="normal attack",nve="Attack",tve="Kick",sve="kick target",ive="kick target",lve="kick target",ove="Throw",rve="throw equipped item",cve="throw equipped item",dve="Throw",uve="Unsummon",Hve="releases a summoned creature",pve=`of one of your creatures
relinquishes control`,mve="Unsummon",hve="Left Hand Throw",Ave="throw left hand item",Nve="throw left hand item",fve="Left Throw",Mve="Left Hand Swing",Cve="swing left hand weapon",gve="swing left hand weapon",kve="Left Swing",Sve="Magic Arrow",Tve="creates a magical arrow",vve=`that does extra damage
creates a magical arrow or bolt`,xve="Magic Arrow",yve="Fire Arrow",Dve="enchants arrows with flame",bve=`always hits
or bolts with fire
magically enhances your arrows`,Pve="Fire Arrow",Eve="Inner Sight",wve="illuminates and weakens nearby monsters",Rve=`for you and your party
making them easier to hit
illuminates nearby enemies`,Bve="Inner Sight",Ive="Critical Strike",Lve="passive - chance of doing double damage",Gve="passive - your attacks have a chance to do double damage",qve="Critical Strike",Uve="Jab",Fve="rapid attacks with a thrusting weapon",Vve=`using a javelin or spear class weapon
attacks with a series of rapid thrusts`,_ve="Jab",Wve="Cold Arrow",zve="enchants arrows to slow targets",Qve=`always hits
cold arrows only do half of their regular damage
by adding cold damage and a slowing effect
magically enhances your arrows or bolts`,Ove="Cold Arrow",Kve="Multiple Shot",Xve="fires multiple arrows",jve=`or bolt into many
magically splits one arrow`,$ve="Multiple Shot",Yve="Dodge",Jve="passive - dodges melee attacks",Zve=`or standing still
a melee attack when attacking
passive - you have a chance to dodge`,exe="Dodge",axe="Power Strike",nxe="adds lightning damage",txe=`javelin and spear class weapons
adds lightning damage to attacks with`,sxe="Power Strike",ixe="Poison Javelin",lxe="adds poison damage",oxe=`to leave a trail of poison clouds
magically enhances your javelin`,rxe="Poison Javelin",cxe="Exploding Arrow",dxe="enchant arrows to explode",uxe=`always hits
contact, damaging all nearby enemies
enchants an arrow or bolt that explodes on`,Hxe="Exploding",pxe="Slow Missiles",mxe="slows ranged attacks of enemies",hxe="illuminates nearby enemies and slows their ranged attacks",Axe="Slow Missiles",Nxe="Avoid",fxe="passive - dodges missiles",Mxe=`when attacking or standing still
passive - you have a chance to dodge enemy missiles`,Cxe="Avoid",gxe="Impale",kxe="increases damage but degrades weapon",Sxe="increases attack damage but rapidly degrades the weapon",Txe="Impale",vxe="Lightning Bolt",xxe="changes a thrown javelin into lightning",yxe="magically converts your javelin into a bolt of lightning",Dxe="Lightning Bolt",bxe="Ice Arrow",Pxe="enchants arrows to freeze enemies",Exe=`always hits
to freeze your enemies
magically enhances your arrow or bolt`,wxe="Ice Arrow",Rxe="Guided Arrow",Bxe="enchants arrows to seek enemies",Ixe=`always hits
or seek one of its own
to track your target
enhances your arrows and bolts`,Lxe="Guided Arrow",Gxe="Penetrate",qxe="passive - increases attack rating",Uxe="passive - increases your attack rating",Fxe="Penetrate",Vxe="Charged Strike",_xe="enchants thrusting weapons with charged bolts",Wxe=`and releases charged bolts upon impact
adds lightning damage to javelin and spear class weapons`,zxe="Charged Strike",Qxe="Plague Javelin",Oxe="enchants javelins with poison explosions",Kxe=`expanding clouds of poison upon impact
magically enhances your javelin to release`,Xxe="Plague Javelin",jxe="Strafe",$xe="enchants arrows to strike multiple targets",Yxe=`that target multiple nearby enemies
magically splits one arrow into several`,Jxe="Strafe",Zxe="Immolation Arrow",eye="enchants arrows to burn enemies",aye=`always hits
creates a pyre upon impact
cause severe fire damage and
enhances arrows or bolts to`,nye="Immolation",tye="Decoy",sye="creates a duplicate of yourself",iye=`that draws fire from enemies
creates a duplicate of yourself`,lye="Decoy",oye="Evade",rye="passive - dodges when moving",cye=`when walking or running
a melee or missile attack
passive - you have a chance to dodge`,dye="Evade",uye="Fend",Hye="attacks all adjacent targets",pye="attacks all adjacent targets",mye="Fend",hye="Freezing Arrow",Aye="enchants arrows to freeze multiple monsters",Nye=`always hits
to freeze entire groups of monsters
magically enhances an arrow or bolt`,fye="Freezing Arrow",Mye="Valkyrie",Cye="summons a powerful Valkyrie ally",gye="summons a powerful Valkyrie ally",kye="Valkyrie",Sye="Pierce",Tye="passive - missiles may continue through enemies",vye=`pass through enemies that they hit
passive - your missiles have a chance to`,xye="Pierce",yye="Lightning Strike",Dye="enchants thrusting weapons with chain lightning",bye=`and releases chain lightning upon impact
adds lightning damage to javelin and spear class weapons`,Pye="Light'ng Strike",Eye="Lightning Fury",wye="a lightning bolt that splits on impact",Rye=`bolt of lightning that splits on impact
changes a thrown javelin into a powerful`,Bye="Lightning Fury",Iye="Fire Bolt",Lye="creates a missile of flame",Gye="creates a magical flaming missile",qye="Fire Bolt",Uye="Warmth",Fye="passive - increases mana recovery rate",Vye="passive - increases the rate at which you recover mana",_ye="Warmth",Wye="Charged Bolt",zye="creates multiple deadly sparks",Qye=`bolts of electrical energy
creates multiple, randomly directed`,Oye="Charged Bolt",Kye="Ice Bolt",Xye="creates a shard of ice that slows enemies",jye=`that damages and slows your enemies
creates a magical bolt of ice`,$ye="Ice Bolt",Yye="Frozen Armor",Jye="improves defense and freezes attacker",Zye=`and freezes enemies that hit you
increases your defense rating`,eDe="Frozen Armor",aDe="Inferno",nDe="creates a jet of flame",tDe=`to scorch your enemies
creates a continuous jet of flame`,sDe="Inferno",iDe="Static Field",lDe="creates a field of deadly sparks",oDe=`of all nearby enemies
creates an electrical field that reduces life`,rDe="Static Field",cDe="Telekinesis",dDe="moves objects with your mind",uDe=`and knock back enemies
pick up items, use objects,
uses the power of your mind to`,HDe="Telekinesis",pDe="Frost Nova",mDe="creates a freezing ring",hDe=`and slows all nearby enemies
creates an expanding ring of ice that damages`,ADe="Frost Nova",NDe="Ice Blast",fDe="creates an ice bolt that freezes enemies",MDe=`damages and freezes your enemy
creates a magical sphere of ice that`,CDe="Ice Blast",gDe="Blaze",kDe="creates fire in your wake",SDe=`in your wake to scorch your enemies
creates a wall of fire`,TDe="Blaze",vDe="Fire Ball",xDe="creates an explosive sphere of fire",yDe=`to engulf your enemies
creates an explosive sphere of fiery death`,DDe="Fire Ball",bDe="Nova",PDe="creates an electrically charged ring",EDe=`to shock nearby enemies
creates an expanding ring of lightning`,wDe="Nova",RDe="Lightning",BDe="creates a bolt of lightning",IDe=`to lay waste to your enemies
creates a powerful lightning bolt`,LDe="Lightning",GDe="Shiver Armor",qDe="freezes and damages attackers",UDe=`freezes and damages enemies that hit you
increases your defense rating`,FDe="Shiver Armor",VDe="Fire Wall",_De="creates a wall of flame",WDe=`blocks or burns your enemies
creates a wall of flame that`,zDe="Fire Wall",QDe="Enchant",ODe="enchants melee or ranged weapons with fire",KDe=`adds one-third fire damage to ranged weapons
adds fire damage to melee weapons
enchants equipped weapon of targeted character or minion`,XDe="Enchant",jDe="Chain Lightning",$De="creates a bolt of lightning that arcs",YDe=`arcs through several targets
creates a bolt of lightning that`,JDe="Chain Lightning",ZDe="Teleport",e4e="instantly moves to destination",a4e="instantly moves to a destination within your line of sight",n4e="Teleport",t4e="Glacial Spike",s4e="creates a freezing comet of ice",i4e=`that freezes or kills nearby enemies
creates a magical ice comet`,l4e="Glacial Spike",o4e="Meteor",r4e="summons a meteor from the heavens",c4e=`to crush and incinerate your enemies
summons a meteor from the heavens`,d4e="Meteor",u4e="Thunder Storm",H4e="summons a powerful tempest",p4e=`your enemies with bolts of lightning
summons a deadly thunderstorm that strikes`,m4e="Thunder Storm",h4e="Energy Shield",A4e="uses your mana as a shield",N4e=`instead of health when you take damage
creates a magical shield that consumes mana`,f4e="Energy Shield",M4e="Blizzard",C4e="summons a massive ice storm",g4e="summons massive shards of ice to destroy your enemies",k4e="Blizzard",S4e="Chilling Armor",T4e="retaliates against ranged attackers",v4e=`against ranged attackers
increases defense and discharges an ice bolt in retaliation`,x4e="Chill'n Armor",y4e="Fire Mastery",D4e="passive - increases fire damage",b4e="passive - increases all damage caused by your fire spells",P4e="Fire Mastery",E4e="Hydra",w4e="summons multi-headed fire beast",R4e=`to reduce your enemies to ashes
summons a multi-headed beast of flame`,B4e="Hydra",I4e="Lightning Mastery",L4e="passive - reduces cost of lightning spells",G4e=`to cast your lightning spells
passive - reduces the mana required`,q4e="Lightning Mastery",U4e="Frozen Orb",F4e="creates a globe of frozen death",V4e=`to lay waste to your enemies
creates a magical globe that sprays a torrent of ice bolts`,_4e="Frozen Orb",W4e="Cold Mastery",z4e="passive - cold attacks become piercing",Q4e=`by piercing enemies' resistances to cold
passive - increases the damage of your cold attacks`,O4e="Cold Mastery",K4e="Amplify Damage",X4e="curse - amplifies damage taken by enemies",j4e=`the non-magic damage they receive
curses a group of enemies, increasing`,$4e="Amplify",Y4e="Teeth",J4e="fires barbed teeth",Z4e="fires a barrage of summoned barbed teeth",ebe="Teeth",abe="Bone Armor",nbe="creates a damage absorbing bone shell",tbe=`that absorbs melee damage
creates an orbiting shield of bone`,sbe="Bone Armor",ibe="Skeleton Mastery",lbe="passive - better skeletons and revived creatures",obe=`of raised skeletons and revived creatures
passive - increases life and damage`,rbe="Skeleton Mastery",cbe="Raise Skeleton",dbe="reanimate skeletal warrior from target corpse",ube=`fights for you
this raises a skeleton warrior that
cast on the corpse of a slain monster,`,Hbe="Raise Skeleton",pbe="Dim Vision",mbe="curse - reduces vision of monsters",hbe=`reducing their vision radius
curses a group of monsters,`,Abe="Dim Vision",Nbe="Weaken",fbe="curse - reduces damage done by enemies",Mbe=`reducing the amount of damage they inflict
curses a group of enemies,`,Cbe="Weaken",gbe="Poison Dagger",kbe="next dagger attack poisons target",Sbe="adds poison to your dagger attacks",Tbe="Poison Dagger",vbe="Corpse Explosion",xbe="turns a corpse into a bomb",ybe=`it explodes, damaging nearby enemies
cast on the corpse of a slain monster,`,Dbe="Corpse Exp.",bbe="Clay Golem",Pbe="creates a golem to fight for you",Ebe=`to fight by your side
creates a golem from the earth`,wbe="Clay Golem",Rbe="Iron Maiden",Bbe="curse - enemies damage themselves",Ibe=`to damage themselves when damaging others
curses a group of enemies, causing them`,Lbe="Iron Maiden",Gbe="Terror",qbe="curse - monsters run away in fear",Ube=`causing them to flee in terror
curses a group of monsters,`,Fbe="Terror",Vbe="Bone Wall",_be="creates an impassable barrier",Wbe=`of bone and debris
creates an impassable barrier`,zbe="Bone Wall",Qbe="Golem Mastery",Obe="Enhances Speed and Life of Golems",Kbe="Enhances Speed and Life of all your Golems",Xbe="Golem Mastery",jbe="Raise Skeletal Mage",$be="reanimate skeletal mage from target corpse",Ybe=`fights for you
this raises a skeleton mage that
cast on the corpse of a slain monster,`,Jbe="Skeletal Mage",Zbe="Confuse",ePe="curse - monster attacks random targets",aPe="curses a monster to force it to attack random targets",nPe="Confuse",tPe="Life Tap",sPe="curse - enemies return life to attacker",iPe=`damaging them gives the attacker life
curses a group of monsters so that`,lPe="Life Tap",oPe="Poison Explosion",rPe="turns a corpse into a poison gas bomb",cPe=`that poisons nearby monsters
toxic gas is released
cast on the corpse of a slain monster,`,dPe="Poison Exp.",uPe="Bone Spear",HPe="summons a deadly spike of bone",pPe="summons a deadly spike of bone to impale your enemies",mPe="Bone Spear",hPe="Blood Golem",APe="a golem that shares life and damage",NPe=`it steals and damage it receives
creates a golem that shares with you the life`,fPe="Blood Golem",MPe="Attract",CPe="curse - monster becomes universal target",gPe=`this curse may not be overridden by another curse
target of all nearby monsters
curses a monster to becomes the`,kPe="Attract",SPe="Decrepify",TPe="curse - greatly slows and weakens enemies",vPe=`slow, weak and take amplified damage
curses a group of enemies to make them`,xPe="Decrepify",yPe="Bone Prison",DPe="creates a barrier of bone around target",bPe="creates a barrier of fossilized bone around your target",PPe="Bone Prison",EPe="Summon Resist",wPe="passive - summoned monsters gain resistances",RPe=`of all summoned creatures
passive - increases the resistances`,BPe="Summon Resist",IPe="Iron Golem",LPe="creates a golem from an item",GPe=`the properties of the item
transforms a metallic item into a golem that gains`,qPe="Iron Golem",UPe="Lower Resist",FPe="curse - lowers enemies resistance to magic",VPe=`lowers maximum resistances of hostile players
lowers resistances of monsters
curses an enemy to take more damage from all magical attacks`,_Pe="Lower Resist",WPe="Poison Nova",zPe="emits an expanding ring of poison",QPe="emits an expanding ring of concentrated poison",OPe="Poison Nova",KPe="Bone Spirit",XPe="releases an undead specter",jPe=`tracks its target or finds one of its own
releases a spirit of the restless undead that`,$Pe="Bone Spirit",YPe="Fire Golem",JPe="creates a golem of fire",ZPe=`it receives from fire into life
creates a golem that converts the damage`,eEe="Fire Golem",aEe="Revive",nEe="raises a monster to fight for you",tEe=`to fight by your side
returns a monster to life`,sEe="Revive",iEe="Sacrifice",lEe="increased accuracy and damage",oEe=`at the cost of life
increased accuracy and damage`,rEe="Sacrifice",cEe="Smite",dEe="shield bash",uEe=`by bashing it with your shield
temporarily stun your enemy`,HEe="Smite",pEe="Might",mEe="aura - increases damage",hEe=`done by you and your party
when active, aura increases the damage`,AEe="Might",NEe="Prayer",fEe="aura - regenerates life",MEe=`the life of you and your party
when active, aura slowly regenerates`,CEe="Prayer",gEe="Resist Fire",kEe="aura - protects against fire damage",SEe=`done to you and your party
when active, aura decreases fire damage`,TEe="Resist Fire",vEe="Holy Bolt",xEe="divine energy that damages undead",yEe=`or heals allies
that damages undead enemies
a bolt of divine energy`,DEe="Holy Bolt",bEe="Holy Fire",PEe="aura - flames damage nearby enemies",EEe=`with heavenly flames
when active, aura damages nearby enemies`,wEe="Holy Fire",REe="Thorns",BEe="aura - reflects damage back at enemies",IEe=`back at your attacker
when active, aura reflects damage done to you`,LEe="Thorns",GEe="Defiance",qEe="aura - increases defense",UEe=`of you and your party
when active, aura increases the defense rating`,FEe="Defiance",VEe="Resist Cold",_Ee="aura - protects against cold damage",WEe=`done to you and your party
when active, aura decreases cold damage`,zEe="Resist Cold",QEe="Zeal",OEe="attacks multiple adjacent enemies",KEe=`with a single attack
allows you to attack multiple adjacent enemies`,XEe="Zeal",jEe="Charge",$Ee="charge and attack target",YEe="charge into battle and attack an enemy",JEe="Charge",ZEe="Blessed Aim",ewe="aura - increases your attack rating",awe=`for you and your party
when active, aura increases the attack rating`,nwe="Blessed Aim",twe="Cleansing",swe="aura - reduces poison and curse duration",iwe=`will remain poisoned or cursed
of time you and your party
when active, aura reduces the length`,lwe="Cleansing",owe="Resist Lightning",rwe="aura - protects against lightning damage",cwe=`done to you and your party
when active, aura decreases lightning damage`,dwe="R. Lightning",uwe="Vengeance",Hwe="attacks add elemental damage",pwe=`to each successful attack
fire, lightning and cold damage are added`,mwe="Vengeance",hwe="Blessed Hammer",Awe="summon a spiraling magic hammer",Nwe=`150 Percent Damage to Undead
spirals outwards damaging enemies it hits
summons an ethereal hammer that`,fwe="B. Hammer",Mwe="Concentration",Cwe="aura - increases your attack ability",gwe=`that the attack will be interrupted for you and your party 
when active, aura increases the damage and decreases the chance`,kwe="Concentration",Swe="Holy Freeze",Twe="aura - freezes nearby monsters",vwe="when active, aura freezes nearby monsters",xwe="Holy Freeze",ywe="Vigor",Dwe="aura - increases speed and stamina recovery",bwe=`and movement speed for you and your party
when active, aura increases stamina recovery rate, maximum stamina`,Pwe="Vigor",Ewe="Conversion",wwe="Change allegiance of monsters",Rwe=`other foul demons and beasts
converts monsters to fight against`,Bwe="Conversion",Iwe="Holy Shield",Lwe="enhances your shield",Gwe="enhances your shield with divine power",qwe="Holy Shield",Uwe="Holy Shock",Fwe="aura - lightning damages nearby enemies",Vwe=`to damage nearby enemies
when active, aura causes pulses of electricity`,_we="Holy Shock",Wwe="Sanctuary",zwe="aura - repels and damages undead",Qwe=`and knocks them back
when active, aura damages the undead`,Owe="Sanctuary",Kwe="Meditation",Xwe="aura - increases mana recovery",jwe=`for you and your party
when active, aura increases mana recovery`,$we="Meditation",Ywe="Fist of the Heavens",Jwe="target is banished",Zwe=`seek out nearby enemies
lightning strikes your target as holy bolts`,eRe="Heaven's Fist",aRe="Fanaticism",nRe="aura - increases attack speed",tRe=`and attack rating for you and your party
when active, aura increases attack speed`,sRe="Fanaticism",iRe="Conviction",lRe="aura  - weakens enemies",oRe=`and resistances of nearby enemies
when active, aura reduces the defenses`,rRe="Conviction",cRe="Redemption",dRe="aura - redeems the dead for mana and life",uRe=`life and mana to you and your party
the souls of slain enemies to give
when active, aura attempts to redeem`,HRe="Redemption",pRe="Salvation",mRe="aura - protects against elemental damage",hRe=`done to you and your party
when active, aura decreases fire, cold and lightning damage`,ARe="Salvation",NRe="Bash",fRe="powerful blow that increases damage",MRe=`to enemies and knocks them back
powerful blow that increases the damage done`,CRe="Bash",gRe="Sword Mastery",kRe="passive - improves sword fighting skill",SRe="passive - improves sword fighting skill",TRe="Sword Mastery",vRe="Axe Mastery",xRe="passive - improves axe fighting skill",yRe="passive - improves axe fighting skill",DRe="Axe Mastery",bRe="Mace Mastery",PRe="passive - improves mace fighting skill",ERe="passive - improves mace fighting skill",wRe="Mace Mastery",RRe="Howl",BRe="frightens nearby monsters",IRe=`scrambling away in fear
sends nearby monsters`,LRe="Howl",GRe="Find Potion",qRe="targets corpses to find potions",URe=`for a chance to find a potion
use on the corpse of a slain monster`,FRe="Find Potion",VRe="Leap",_Re="jumps over obstacles",WRe=`or into the fray
leaps away from danger`,zRe="Leap",QRe="Double Swing",ORe="swings two weapons at once",KRe=`or one target twice
attacks two targets if possible,
when two weapons are equipped`,XRe="Double Swing",jRe="Pole Arm Mastery",$Re="passive - improves pole arm skill",YRe="passive - improves pole arm skill",JRe="Pole Arm Mastery",ZRe="Throwing Mastery",e6e="passive - improves thrown weapon skill",a6e="passive - improves thrown weapon skill",n6e="Throwing Mastery",t6e="Spear Mastery",s6e="passive - improves spear fighting skill",i6e="passive - improves spear fighting skill",l6e="Spear Mastery",o6e="Taunt",r6e="causes a monster to attack",c6e="enrages a monster into relentlessly attacking",d6e="Taunt",u6e="Shout",H6e="alerts party and improves defense",p6e=`rating of you and your party
warns of impending danger and improves the defense`,m6e="Shout",h6e="Stun",A6e="stuns your target",N6e=`and increases your attack rating
stuns your target for a short time`,f6e="Stun",M6e="Double Throw",C6e="throw two weapons at once",g6e=`throwing weapons at the same time
allows you to throw two different`,k6e="Double Throw",S6e="Increased Stamina",T6e="passive - increases stamina",v6e="passive - increases your stamina",x6e="Increased Stamina",y6e="Find Item",D6e="targets corpses to find items",b6e=`to find hidden treasures
use on the corpse of a slain monster`,P6e="Find Item",E6e="Leap Attack",w6e="leaps and attacks target enemy",R6e=`in one swift assault
leaps to and attacks target enemy`,B6e="Leap Attack",I6e="Concentrate",L6e="attack that is not interruptible",G6e=`improves attack and defense rating
attack that is not interruptible and`,q6e="Concentrate",U6e="Iron Skin",F6e="passive - improves defense rating",V6e="passive - improves defense rating",_6e="Iron Skin",W6e="Battle Cry",z6e="reduces enemy effectiveness",Q6e=`enemies' defense rating and damage
fearsome cry that decreases`,O6e="Battle Cry",K6e="Frenzy",X6e="successful double swing hit increases speed",j6e=`requires you to equip two weapons
each successful attack increases your overall speed
allows you to swing two weapons at once`,$6e="Frenzy",Y6e="Increased Speed",J6e="passive - increases walk and run speed",Z6e="passive - increases walk and run speed",e7e="Increased Speed",a7e="Battle Orders",n7e="improves life, mana and stamina of party",t7e=`stamina of you and your party
improves the maximum mana, life and`,s7e="Battle Orders",i7e="Grim Ward",l7e="creates a frightening totem",o7e=`that causes nearby monsters to flee
to create a frightening totem
use on the corpse of a slain monster`,r7e="Grim Ward",c7e="Whirlwind",d7e="whirling dance of death",u7e=`legions of your enemies
that cuts a path through the
a whirling dance of death`,H7e="Whirlwind",p7e="Berserk",m7e="powerful but reckless attack",h7e=`but decreases defense rating
that increases damage and attack rating
a powerful but reckless attack`,A7e="Berserk",N7e="Natural Resistance",f7e="passive - increases natural resistances",M7e=`to elemental and poison damage
passive - increases natural resistances`,C7e="Natural Resistance",g7e="War Cry",k7e="injures and stuns nearby enemies",S7e="injures and stuns all nearby enemies",T7e="War Cry",v7e="Battle Command",x7e="increases skill levels",y7e="increases all current skill levels for you and your party",D7e="Battle Cmd",b7e="Scroll of Identify",P7e="identify a magic item's properties",E7e="identify a magic item's properties",w7e="Identify",R7e="Tome of Identify",B7e="identify a magic item's properties",I7e="identify a magic item's properties",L7e="Identify",G7e="Scroll of Townportal",q7e="create a magic portal to the nearest town",U7e="create a magic portal to the nearest town",F7e="Townportal",V7e="Tome of Townportal",_7e="create a magic portal to the nearest town",W7e="create a magic portal to the nearest town",z7e="Townportal",Q7e="Ormus has the key that opens this door.",O7e="Lady %s",K7e="Lord %s",X7e="Hardcore",j7e="Level %d",$7e="Tristram",Y7e="Cathedral",J7e="Barracks",Z7e="Mausoleum",e8e="Crypt",a8e="Death takes its toll of %d Gold",n8e="You have lost experience",t8e="Your deeds of valor will be remembered",s8e="%d Seconds Until Game Ends",i8e="Congratulations!",l8e="You Have Vanquished Diablo",o8e="Will Henceforth Be Known As",r8e="Unable to remove message filter.",c8e="By logging on to Battle.net, you are certifying that you have read and agree to its current Terms of Service",d8e="an evil force",u8e="an evil force",H8e="an evil force",p8e="Right click to make",m8e="Not in Beta.",h8e="No Level Name",A8e="End of Beta",N8e=`40
Praise be to the Light! You have 
accomplished the impossible!
 
Diablo and Mephisto have been 
banished back into the Black Abyss 
that spawned them, and the corrupted 
Soulstones are no more.
 
However, while you were fighting here, 
Baal remained behind in the mortal 
realm, building an army of hellish 
minions. Now, Baal's army is searching 
for the Worldstone, the ancient source 
of all the Soulstones and their power, 
while leaving behind a wake of 
destruction. They have forged deeply 
into the Barbarian homelands, heading 
directly for the summit of Mount 
Arreat!
 
Baal knows, mortal hero! That is the 
very site of the blessed Worldstone!
 
Now, enter the portal I have opened for 
you. It will take you to the Barbarian 
city of Harrogath, the last bastion of 
Order on the slopes of Arreat.
`,f8e=`40
I knew there was great potential in you, 
my friend. You've done a fantastic job.
 
Though my ancestors often struggled 
against the Three Evils and their 
minions, I've always lived a shut-in, 
scholarly life. I'm glad that my wisdom 
aided you.
 
Now, I wish to leave this place. Though 
Heaven's Gates are a marvel to behold, 
I hope I won't have to see them again 
for many, many years.
 
Please talk to Tyrael about leaving this 
place now!
`,M8e=`35
We are the spirits of the Nephalem, the 
Ancient Ones. We have been chosen to 
guard sacred Mount Arreat, wherein 
the Worldstone rests. Few are worthy 
to stand in its presence; fewer still can 
comprehend its true purpose.
 
Before you enter, you must defeat us.
`,C8e=`39
I am amazed to find this place so 
untouched. Everything else in the path 
of Baal the Lord of Destruction lies in 
ruin. 
 
These Barbarians must indeed be the 
legendary guardians of Mount Arreat. 
They are a proud, hardy people. Don't 
expect to be greeted warmly -- 
strangers here rarely are.
 
Perhaps I can gain their trust. I'll spend 
some time with the townsfolk and try 
to understand them better. I'll let you 
know what I discover.
`,g8e=`52
With hellspawn, size is no measure of 
their threat. Demons half the size of 
men can kill with a gesture, while 
hellish pack animals trample any who 
stand in their way.
`,k8e=`55
Though these Barbarians are known 
throughout the kingdoms as ferocious 
fighters, they are also capable of great 
compassion.
 
They have trained throughout history 
for a battle their legends foretell will 
decide the fate of the world.
`,S8e=`55
The angel Tyrael has watched over the 
guardians of Arreat throughout 
history. I do not believe that Baal and 
Tyrael have come to fight over a paltry 
few souls.
 
They are here to settle a conflict as old 
as time itself.
`,T8e=`44
During my time with the Horadrim, we 
often debated the nature of Mount 
Arreat.
 
We knew that the Barbarian clans 
zealously guarded the mountain as 
their sacred duty. However, many 
dismissed their zeal as simple 
superstition...combined with an inborn 
hostility toward outsiders.
 
Those Horadrim who trekked up Arreat 
were never heard from again...Still, I 
do not believe they died at the hands of 
Barbarians.
`,v8e=`41
All users of the magical arts know of 
Mount Arreat, but few understand its 
true nature. It is the nexus of an 
unfathomable magic.
 
It bodes ill that the Lord of Destruction 
races to its summit with such purpose. 
I fear for the whole world should Baal 
gain what he seeks.
`,x8e=`59
I have spent decades trying to 
understand the forces at work in this 
world. But in the face of all that is 
transpiring, I realize how meager my 
knowledge is.
 
I will be of assistance where I can, my 
friend.
`,y8e=`54
Though the Elder Council of Harrogath 
is gone, there are many capable young 
leaders to take their place.
 
Anya certainly has enough courage and 
intelligence to lead them all, if they can 
survive this catastrophe.
`,D8e=`53
Ah, Anya. Such a fine example of 
feminine strength...
 
She reminds me of the Zakarum 
priestesses I knew in my youth. They 
don't take vows of chastity, you know.
`,b8e=`65
It is fortunate that this town has such a 
talented smith.
 
The quality of Larzuk's work surely 
complements your skills. In fact, he 
would have been quite welcome 
amongst the Horadrim.
`,P8e=`54
It is my belief that the Soulstones are at 
the center of this conflict. If only that 
fool Marius had not intervened, Baal 
would still be imprisoned within Tal 
Rasha.
`,E8e=`54
You have proven yourself a true hero to 
me and my people.
 
These are dark times, warrior. I hope 
you can bring an end to Baal's reign of 
destruction. 
 
Our Council of Elders is gone -- my 
father, Aust, among them. The one 
thing that keeps us from total despair 
is the promise of vengeance against 
Baal.
`,w8e=`45
Now that the Elders are all dead, I don't 
know who will guide our people through 
this dark time. I was to be next in line 
after my father, but this burden is too 
great for me to shoulder alone. 
 
We are a people of strong blood. I shall 
do what I can and let fate do the rest.
`,R8e=`82
Baal's minions are not to be trifled with. 
In their bloodlust they will sacrifice 
themselves to destroy you.
`,B8e=`60
Many outsiders believe that the 
fantastic stories about our ancestors, 
the Ancients, are but fables. However, I 
believe that the Ancients were more 
than human -- that mankind has fallen 
from what it once was.
`,I8e=`58
When I was a child, the Elders told us 
stories about the mountain and its 
power...and how the Barbarian people 
are bound to it as protectors.
 
Baal is not just taking our land -- with 
every step he takes up the mountain, 
he takes a part of who we are as a 
people.
`,L8e=`72
I am truly glad you are here, warrior. 
Perhaps things would be different now 
if we had asked for assistance from 
the neighboring kingdoms.
 
Our foolish, foolish pride...
`,G8e=`54
My father, Aust, was among those 
Elders wise enough to see that we 
would need outside help to deal with 
Baal's legions. He believed that this 
conflict would affect the entire world, 
not just our homeland. He said that 
Mount Arreat is as necessary to the 
world's survival as food and water is to 
our own.
 
I believe this to be true.
`,q8e=`50
Qual-Kehk's confidence in his abilities 
once bordered on arrogance, but in the 
early days of the siege, he was 
humbled by Baal. While he saved us 
from immediate destruction, a third of 
our warriors were lost.
 
None felt those losses more than he. 
Though he may not admit it, your 
presence gives him hope, warrior.
`,U8e=`78
If Larzuk could sing or dance half as 
well as he smiths, he'd be married by 
now.
 
...Just look at those shoulders.
`,F8e=`57
Nihlathak was the last of our Elders, 
whose charge it was to safeguard the 
mountain. He alone tried to guide us 
through the most desperate time in our 
history -- but he was just as helpless as 
the rest of us.
 
I cannot forgive his betrayal, but I can 
learn from it.
`,V8e=`60
Our people believe that the Ancients 
protecting Mount Arreat have the 
power to stop Baal. Unfortunately, the 
Lord of Destruction has shown great 
power to undermine our faith.
`,_8e=`55
I am Larzuk, the armorer. My ancestors 
were some of the finest craftsmen in 
Harrogath. 
 
Regretfully, my supplies run lower with 
every passing day, yet the demons 
beyond the walls have not weakened. 
 
I fear the time is near when I must put 
down my hammer and take up a sword, 
instead.
`,W8e=`42
So, you're an Amazon. I have heard 
rumors about your kind. Your unusual 
weapons could prove a challenge to my 
skills, but I'm prepared to meet it.
 
I am Larzuk, the armorer. My ancestors 
were some of the finest craftsmen in 
Harrogath. Regretfully, my supplies run 
lower with every passing day, yet the 
demons beyond the walls have not 
weakened. I fear the time is near when 
I must put down my hammer and take 
up a sword, instead.
`,z8e=`65
I've heard that you Amazons excel at 
killing from a distance. From what I've 
seen, that's the best way to deal with 
Hell's minions. 
 
Are all of your kind so...big?
`,Q8e=`65
Why did you ever leave your beautiful 
islands to come to this frozen 
battleground? Perhaps if we both 
survive this, we'll travel back there 
together.
`,O8e=`75
Has that infernal howling been keeping 
you awake at night, too? Some think 
it's the howling of animals, but those 
sounds don't come from any beast I've 
ever known.
`,K8e=`69
Demonic forces have been using our 
own towers and barricades against us. 
You know, it would be wise to cut the 
demons down in the open before they 
can mount those fortifications.
`,X8e=`70
Nihlathak's despair is infectious -- and 
his behavior does not befit an Elder of 
his stature. I think we'd be better off 
without him.
`,j8e=`63
I've offered Qual-Kehk my ideas on how 
to break the siege, but he dismisses 
them. Is it because I lack scars of 
battle, or does he think I'm a couple 
arrows short of a quiver?
`,$8e=`64
Legend has it that the top of Mount 
Arreat is guarded by the spirits of our 
ancestors. Though our people are 
forbidden to climb to the mountain's 
summit, some foreign travelers have 
made the attempt.
 
None have ever returned.
`,Y8e=`66
This is a lively town during our victory 
celebrations. We Barbarians train long 
and hard from childhood to become 
warriors, and we celebrate with equal 
fervor.
 
You didn't happen to bring along any 
ale to trade?
`,J8e=`54
Every day, one of my friends dies 
fighting outside the town walls, while I 
tend my anvil here unscathed. If only 
we didn't need weapons so badly, I 
could be out doing my share of the 
fighting. 
 
Good luck to you, warrior.
`,Z8e=`56
Just so you know...The gold you pay me 
doesn't line my pockets. Much of it 
goes to buy the raw metal I need to 
melt down for weapons and armor. The 
rest -- well, all I can spare -- goes to 
Malah and Qual-Kehk for other 
supplies.
`,eBe=`35
I, Malah, welcome you to Harrogath, 
the last stronghold of Order on Mount 
Arreat. You have come to the right 
place if you intend to defeat Baal the 
Lord of Destruction.
 
Baal has laid waste to our mountain 
and its denizens. His minions continue 
to attack our town, while Qual-Kehk 
and his men have proven helpless to 
stop them. Baal is still out on the 
mountain looking for something -- but I 
know not what. 
 
All of the Elders, save Nihlathak, 
sacrificed themselves to place a 
protective ward around Harrogath.
 
Some of us here, certainly Nihlathak, do 
not appreciate your presence. We are a 
proud people, and it is not easy for us 
to accept aid. I, however, am glad you 
are here.
 
If you need healing or a potion, please 
come to me. See Larzuk for weapons, 
armor, and repairs. Nihlathak, despite 
his disposition, may be of some 
assistance with other wares. Finally, 
Qual-Kehk, our Man-At-Arms, leads 
Harrogath's remaining forces against 
Baal.
`,aBe=`36
A Sorceress...Here in Harrogath?
 
There was a time, child, when I thought 
I was destined to follow your kind's 
path. However, my powers never 
developed beyond the simplest of 
spells. Although I can heal almost any 
wound with time and energy, there is 
little I can do to help against Baal.
 
But enough of that...I spend too much 
time in reflection and have forgotten 
my manners.
 
I, Malah, welcome you to Harrogath, 
the last stronghold of Order on Mount 
Arreat. You have come to the right 
place, if you intend to defeat Baal the 
Lord of Destruction.
 
Baal has laid waste to our mountain 
and its denizens. His minions continue 
to attack our town, while Qual-Kehk 
and his men have proven helpless to 
stop them. Baal is still out on the 
mountain looking for something -- but I 
know not what. 
 
All of the Elders, save Nihlathak, 
sacrificed themselves to place a 
protective ward around Harrogath.
 
Some of us here, certainly Nihlathak, do 
not appreciate your presence. We are a 
proud people, and it is not easy for us 
to accept aid. I, however, am glad you 
are here.
 
If you need healing or a potion, please 
come to me. See Larzuk for weapons, 
armor, and repairs. Nihlathak, despite 
his disposition, may be of some 
assistance with other wares. Finally, 
Qual-Kehk, our Man-At-Arms, leads 
Harrogath's remaining forces against 
Baal.
`,nBe=`34
You have traveled far only to return 
home to us, Barbarian. Ohh...Much has 
happened in Harrogath since you left. 
Our homeland is hardly recognizable 
with so much evil about.
 
Yet, I've managed to survive so far. 
You've seen your share of suffering as 
well, I'm sure. Seeing you again -- alive 
-- does my heart good. I shall pray that 
you can help us out of this hell.
 
Baal has laid waste to our mountain 
and its denizens. His minions continue 
to attack our town, while Qual-Kehk 
and his men have proven helpless to 
stop them. Baal is still out on the 
mountain looking for something -- but I 
know not what.
 
Nihlathak is the last survivor of the 
Council of Elders, but I'm afraid he has 
not been himself lately. The other 
Elders sacrificed themselves to place a 
protective ward around Harrogath. If 
Nihlathak is curt with you, it is because 
he feels responsible for our situation. 
He does not relish sending more of our 
people out to die.
 
So much has changed since you left 
that I see little hope for us in this life.
 
If you need healing or a potion, please 
come to me. See Larzuk for weapons, 
armor, and repairs. Nihlathak, despite 
his disposition, may be of some 
assistance with other wares. Finally, 
Qual-Kehk, our Man-At-Arms, leads 
Harrogath's remaining forces against 
Baal.
`,tBe=`53
I'm aware of the amazing magical 
powers a Sorceress can channel. If we 
survive Baal's wrath, I would be most 
honored if you could demonstrate and 
perhaps teach me something of what 
you know. 
 
I may be old, but I'm not dead.
`,sBe=`42
I know you and my son, Bannuk, did not 
part on the best of terms. He did not 
understand the wanderlust that drove 
you to leave your homeland. However, 
even though Bannuk could never admit 
it to me, as he grew older I could see 
that same desire in his eyes.
 
Oh...It's a pity I didn't encourage him to 
go with you. He might still be alive 
today.
`,iBe=`57
Though once considered shelter by our 
people, the Ice Caves offer no refuge 
from the dark horde. There are 
creatures there that will freeze your 
heart before feasting upon it.
`,lBe=`107
On the battlefield, turning your back on 
even the dead is unwise.
`,oBe=`60
This battle plays mind tricks on our 
warriors. Those fortunate enough to 
have returned from the mountainside 
claim to have seen angels in flight.
 
Fly they might, but that certainly does 
not make them angels.
`,rBe=`53
Perhaps you have heard the accounts 
of my son's horrible death at the hands 
of Baal's minions. He was my last living 
child...
 
The oath of compassion I have taken as 
a healer extends only to humankind.
 
Cut them down, warrior. All of them!
`,cBe=`78
The catapults are infernal machines 
made of demon flesh fused with steel.
 
Be wary of them.
`,dBe=`60
Qual-Kehk is a worthy leader, but the 
losses have borne heavily upon him. He 
is only impatient because he judges the 
worth of a warrior by action, not 
words.
 
You must prove yourself worthy of his 
trust.
`,uBe=`52
Larzuk possesses a good soul, but at 
times his mind seems quite unsound. 
 
He once asked me for twenty of my 
finest sheepskins. He said he would fill 
them with hot air and float like a cloud 
above the battlefield to spy on Baal's 
legions! 
 
I worry the siege has driven him mad.
`,HBe=`90
Be cautious, warrior.
 
Though I am an experienced healer, 
resurrection is beyond my powers.
`,pBe=`53
I pray for the day when the fields are 
covered in snow unstained by the blood 
of our own. Perhaps that day will come 
soon...Perhaps never...
 
Oh...But I forget myself. How may I aid 
your quest?
`,mBe=`64
Your gold is most helpful. Medical 
supplies for our wounded are scarce 
and very expensive.
 
When we can find a supplier, oh, we 
must pay dearly for what we need.
`,hBe=`44
With the exception of Qual-Kehk, the 
townspeople do not see what I see -- 
the massacre we face.
 
Our bravest, strongest heroes hobble 
back to me begging for help. I do what 
I can -- healing and bandaging some, 
preparing the others for what lies 
beyond.
`,ABe=`43
Well, well. The siege has everything in 
short supply...except fools. 
 
Why would you seek this place, 
stranger? Are you a vulture come to 
loot the bodies of our fallen warriors? 
 
Regardless, this is no place to make a 
name for yourself. The mountain is 
ours to protect. It is only a matter of 
time before Hell's legions are routed.
`,NBe=`54
Well, well...An Assassin!
 
Heh, heh...While I am sure we are all 
grateful for your presence in our 
troubled town, you need not have made 
the journey.
 
I can personally say that your skills are 
not required here. You would serve 
your clan better elsewhere.
`,fBe=`45
Ahhh, a Necromancer.
 
While I admire your courage in seeking 
out the darker side of magic, we really 
have little need of your skills. The 
battle will turn soon enough without 
your meddling. 
 
Yet, I should have expected to see your 
kind here. You are like a moth to the 
flame -- drawn to all this death. It 
feeds you in more ways than one, does 
it not?
`,MBe=`49
If you're looking for cases of 
treacherous magic, Assassin, take a 
hard look at Larzuk. He was the only 
one in town who escaped the Red Fever 
last spring. He claimed his good 
fortune was due to 'hand washing' 
before meals.
 
Hmmm...Very suspicious...
`,CBe=`48
Why would you seek this place, 
stranger? Are you a vulture come to 
loot the bodies of our fallen warriors? 
 
Regardless, this is no place to make a 
name for yourself. The mountain is 
ours to protect. It is only a matter of 
time before Hell's legions are routed.
`,gBe=`67
Qual-Kehk is useless. He has blindly 
sent our warriors to their deaths, 
assuming Baal's legions would fight as 
men do. Of course, everyone knows 
they do not.
`,kBe=`57
The demon hordes have grown powerful 
beyond measure, aided by our foolish 
mistakes. But I may have found a way 
to correct those mistakes...
`,SBe=`37
Oh yes...I remember our warriors as 
children. Malah would set their broken 
bones and give them powders for their 
fevers. Now, they return to her with 
wounds that will never heal.
 
I am tired...Please...leave me.
`,TBe=`133
If you have nothing useful for me, be on 
your way!
`,vBe=`81
Anya's father was my good friend. 
There are so many to mourn...I have 
no time for you!
`,xBe=`53
I have long been criticized, but 
especially of late -- since the deaths of 
my fellow Elders. Through it all, I have 
learned one thing. Each man must do 
what's right, no matter what others 
may think.
`,yBe=`65
The Council of Elders always believed 
itself prepared for the coming of the 
Three. Obviously, we were not prepared 
enough.
`,DBe=`45
I am Qual-Kehk, the Senior Man-At-Arms 
of Harrogath.
 
You have the look of a warrior...An 
extra soldier will be useful. But don't 
expect anyone to mourn if you get 
yourself killed. 
 
Baal is true to his namesake. He has 
ravaged through our lands like a 
merciless plague.
 
The protective ward laid down by our 
lost Elders helps hold the evil at bay, 
but Baal's siege has taken its toll all 
the same.
 
Most of my men are now dead. Others 
are trapped in the mountain passes.
 
But I swear we are not beaten yet! We 
will fight to the end to protect this 
mountain!
`,bBe=`42
A Paladin! I have long heard of your 
people.
 
As a young warrior I even considered 
the pilgrimage to Kurast. But I was 
younger then and foolish. My place has 
always been here -- protecting 
Harrogath, and Mount Arreat with it.
 
I am Qual-Kehk, the Senior Man-At-Arms 
of Harrogath.
 
You have the look of a warrior...An 
extra soldier will be useful. But don't 
expect anyone to mourn if you get 
yourself killed. 
 
Baal is true to his namesake. He has 
ravaged through our lands like a 
merciless plague.
 
The protective ward laid down by our 
lost Elders helps hold the evil at bay, 
but Baal's siege has taken its toll all 
the same.
 
Most of my men are now dead. Others 
are trapped in the mountain passes.
 
But I swear we are not beaten yet! We 
will fight to the end to protect this 
mountain!
`,PBe=`42
A Druid in Harrogath! Have things truly 
come to this?
 
After the Mage Wars, I assumed Druids 
would never be seen in Harrogath 
again. You take a big chance coming 
here! 
 
To be honest, I have never been 
comfortable with your shape-shifting 
kind, but I do respect your search for 
balance and peace. So, if you trust us 
enough to enter our gates, I trust you 
enough to let you stay.
 
I am Qual-Kehk, the Senior Man-At-Arms 
of Harrogath.
 
You have the look of a warrior...An 
extra soldier will be useful. But don't 
expect anyone to mourn if you get 
yourself killed. 
 
Baal is true to his namesake. He has 
ravaged through our lands like a 
merciless plague.
 
The protective ward laid down by our 
lost Elders helps hold the evil at bay, 
but Baal's siege has taken its toll all 
the same.
 
Most of my men are now dead. Others 
are trapped in the mountain passes.
 
But I swear we are not beaten yet! We 
will fight to the end to protect this 
mountain!
`,EBe=`67
It would be an honor to have a warrior 
of the Light fighting side-by-side with 
my men.
 
I can see your faith gives you great 
strength, Paladin, but don't expect it to 
keep you out of harm's way.
`,wBe=`61
Harrogath has great need of your 
powers, noble Druid. However, in the 
face of this supernatural onslaught, 
are your natural powers up to the 
task?
`,RBe=`44
The death of Malah's son was a great 
tragedy. He was our finest archer.
 
While leading a successful campaign 
against Baal's forces, he was impaled 
on a demon's spear. The wound was 
such that...Well, even Malah herself 
acknowledges that quick death was a 
blessing.
`,BBe=`57
We have lost many well-trained warriors 
to Baal's siege machines. Their range is 
great. Though, they are vulnerable if 
you close the distance quickly enough.
`,IBe=`96
Baal's legions seem countless, but 
slaying their commanders takes some 
of the fight out of them.
`,LBe=`58
Early on, parties of our best scouts 
were ambushed by demons that 
spawned from the very air around 
them. Survivors often mentioned a 
strange creature floating in the 
distance.
 
Perhaps taking it down could prevent 
some nasty surprises.
`,GBe=`57
This is unlike any battle I have ever 
fought. While we ration food and 
water, the demon hordes feast nightly 
on the flesh and blood of our dead.
`,qBe=`48
Larzuk is a talented blacksmith, but his 
head is full of some strange ideas. 
 
Just the other day he came to me with a 
plan to break the siege. He wanted to 
fill large pipes with exploding powders 
and steel balls, then...Well, like I said, 
strange.
`,UBe=`46
Our Elders were wise leaders in more 
peaceful times, but now the survival of 
our people has fallen to me. My men 
and I will fight to the death, but there's 
no way to ensure the outcome.
 
I used to believe that nothing could 
break through our guard and assault 
the holy mountain. I know now that I 
was horribly mistaken.
`,FBe=`45
If you're here to defeat Baal, you must 
prove it!
 
As we speak, Harrogath is under siege 
by Baal's demons. Catapults rain death 
just outside the town walls.
 
Baal himself travels up the sacred 
mountain, having left in charge here 
one of his most vicious generals, Shenk 
the Overseer. A ruthless taskmaster, 
he lashes his own minions into suicidal 
frenzies on the battlefield.
 
If you wish to prove yourself to us, 
destroy the monster, Shenk, that 
commands those infernal catapults 
outside Harrogath.  If you manage to 
do this, return to me.
`,VBe=`150
Uh...Did I mention there were catapults?
`,_Be=`83
I believe that stopping the siege on 
Harrogath is the only way for you to 
earn the trust of these people.
`,WBe=`84
You've proven your skill at rescuing fair 
maidens...but how are you at killing 
vicious beasts?
`,zBe=`77
Qual-Kehk and his men have been 
fighting to break the siege for some 
time. Where many have failed, you may 
succeed.
`,QBe=`70
After so many have died, who are you 
to think you can accomplish what our 
proud warriors could not?
`,OBe=`66
About to face Shenk the Overseer and 
stop the siege, are you? You should 
ask Malah to perform your last rites 
before you go, stranger.
`,KBe=`90
What's the matter, hero? Questioning 
your fortitude? I know we are.
`,XBe=`105
I understand your reluctance, but now 
is the time to strike.
`,jBe=`66
Those demons have been out there 
since before your arrival. Can you do 
nothing to stop them?
 
Your task is a simple one, warrior. Find 
Shenk and destroy him.
`,$Be=`64
This may not be very encouraging, but 
you have fared better than the others 
who passed through those gates.
 
In regards to Shenk the Overseer, 
remember: a general is nothing without 
his men.
`,YBe=`78
What are you still doing here? I thought 
you were going off to die.
 
Go...Be quick about it.
`,JBe=`93
So, you still live. You're either quick or a 
coward.
`,ZBe=`63
You're an even greater warrior than I 
expected...Sorry for underestimating 
you.
 
As a token of my appreciation, I will 
craft sockets into an item of your 
choosing, and from now on, you'll get 
the best price for all my wares.
`,eIe=`60
Those catapults were like nothing I have 
ever seen before. You have prevailed 
against Shenk, my friend, but Baal is 
still far ahead of you.
`,aIe=`108
I was starting to wonder how long it 
would take you to stop those beasts.
 
Good job.
`,nIe=`94
Oh...At last, the siege is ended. You 
truly are an angel.
 
I thank you.
`,tIe=`65
Ending the siege does not earn 
immediate respect, outsider.
 
Respect only comes with sacrifice -- 
something I'm sure you know nothing 
of.
`,sIe=`68
So...You managed to stop the siege.
 
You are more powerful than I gave you 
credit for. You have rightfully earned 
my respect.
`,iIe=`58
My concerns have turned to my men 
taken prisoner on the battlefield by 
Baal's demons. I hate to think what's 
happened to them.
 
As you journey up the mountain, keep 
your eyes open for my soldiers and 
bring them back to me if you can.
`,lIe=`85
Those of my men fortunate enough to 
escape on their own told me that they 
were held captive in the highlands and 
plateaus.
`,oIe=`74
I know firsthand that captivity is a sad 
fate for a man. Find them quickly.
`,rIe=`85
If those men are being treated like I 
was, you must find them. They won't 
survive much longer.
`,cIe=`73
I crafted the swords and armor for 
Qual-Kehk's men. They were like 
brothers to me. I can't imagine the pain 
they must be suffering.
 
Save them if you can!
`,dIe=`84
Qual-Kehk's men have been imprisoned 
for some time. They are certain to be 
tired and weak.
 
You must protect them once you free 
them.
`,uIe=`94
You have proven you can take life, 
warrior, but can you save it as well?
`,HIe=`95
They say that discretion, not 
procrastination, is the better part of 
valor.
`,pIe=`78
More of my men are still alive out there. 
I am certain of it!
 
Find them. Free them from their cages 
and bring them back to me.
`,mIe=`63
If you are having trouble finding 
Qual-Kehk's soldiers, you should talk to 
Malah. She healed those who made it 
back before. Perhaps she would have 
some advice.
`,hIe=`115
Well, you found me on the mountain; I'm 
sure you'll find them too.
`,AIe=`76
As a kid, I used to play soldier among 
the barricades on the mountain. 
There's no easy way through that maze 
of walls.
`,NIe=`67
Soldiers who made it back told of a 
system of barricades placed among the 
mountain passes. They said that is 
where the prisoners are held.
`,fIe=`52
Did you ever stop to think why these 
demons are capturing Qual-Kehk's 
men? Why they are attacking us? Have 
you considered what Baal wants with 
the mountain?
 
No. You've not. You have no idea what 
you are dealing with.
`,MIe=`51
Thank you for rescuing my men. They 
have spoken well of your bravery in 
battle. Perhaps there is hope for us 
after all. 
 
If you wish, you may hire some of my 
mercenaries that you saved. And 
please...take this set of runes. I had 
been saving them for a socketed shield, 
but I think you'll make better use of 
them.
 
Be sure to set them in the right order 
for their fullest effect.
`,CIe=`80
You've become a hero to this town, my 
friend. The shadows have lifted ever 
since you brought the Light to 
Harrogath.
`,gIe=`107
I'm sure those men appreciate the 
freedom you gave them...as much as I 
do.
`,kIe=`55
Since your arrival, Cain has spoken of 
your deeds in the Southern Kingdoms, 
defeating both Mephisto and Diablo. At 
first, I scoffed at his tales, but I'm 
finding them more believable with every 
passing day.
`,SIe=`73
You have inspired the people in this 
town -- not only those you rescued, but 
those you've helped in other ways as 
well.
`,TIe=`72
So. You brought the lost sheep home to 
the shepherd. Well done.
`,vIe=`43
There is a matter which I hesitate to 
share, but I believe you are the only 
one who can help me now.
 
Anya, the young alchemist and 
daughter to one of our slain Elders, 
has been missing for some time. She is 
a strong, crafty woman with a spirit 
like no other.
 
One night, just before your arrival, I 
overheard her and Nihlathak arguing 
about her father's death. The next 
morning she was gone.
 
Nihlathak has his own tale as to where 
she went and why. Don't believe him! I 
fear he is at the root of her 
disappearance.
 
Please, if you can, search for Anya and 
bring her back to us. She'll know what 
to do about Nihlathak.
`,xIe=`94
When you talk to Nihlathak, be careful. 
There is no telling what he will say or 
do.
`,yIe=`59
I would listen to Malah. Nihlathak 
speaks with a venomous tongue and 
acts as if the entire weight of this town 
rests upon his shoulders.
 
Perhaps there is more going on here 
than we know.
`,DIe=`57
Anya is an amazing alchemist, 
especially for her young age. As long 
as I've known her, she's never let 
anything stop her from pursuing what 
she believed in. 
 
I wouldn't doubt that Nihlathak is 
involved. Ever since her father died, 
they haven't gotten along.
`,bIe=`41
Anya! Who have you been talking to? 
Likely it was that meddling Malah. 
 
Well, I'll tell you what really happened. 
Anya came to me for guidance, after 
receiving a vision that her mother and 
younger brother were trapped in the 
lands beyond the Ice Caves. She had 
decided to go rescue them. 
 
I told her that her quest was a foolish 
one and that she would be safer 
staying within the city walls. However, 
she is a willful girl and would not listen 
to me. 
 
The next morning, she was gone. No 
one is more distraught than I over 
losing her. 
 
However, if you feel the need to be 
Malah's errand child, I won't try to stop 
you.
`,PIe=`43
Anya's father, Aust, was our wisest 
Elder. He was killed along with the 
other Elders who erected the ward that 
protects this city. The ward has kept 
Baal's demons out of Harrogath, but at 
a costly sacrifice. 
 
Nihlathak, on the other hand, was the 
only Elder to escape the demons. 
Somehow, he alone managed to find 
sanctuary, while the others died 
around him.
 
Ever since that day, Nihlathak and Anya 
have been at odds.
`,EIe=`52
If it were anyone else, I would assume 
her dead. However, Anya is not so 
easily beaten. I know she must be alive.
`,wIe=`60
Nihlathak's story does sound 
reasonable, considering what I've 
heard about Anya. However, the best 
lies are often hidden within truth.
`,RIe=`56
As the daughter of Elder Aust, Anya is 
the only person, besides Nihlathak, 
who has any real knowledge of Mount 
Arreat's secrets. I'd hate to see our 
fate in the hands of Nihlathak alone.
`,BIe=`46
Look, I've told you! She's dead! If you 
knew what was good for you, you'd 
concentrate your efforts on saving 
Harrogath -- not on lost causes like 
Anya.
`,IIe=`81
It seems like everyone feels Nihlathak 
played a part in Anya's disappearance.
 
Why would he do such a thing?
`,LIe=`56
So! That snake Nihlathak was behind 
Anya's disappearance...and he trapped 
her with a freezing curse.
 
Here. Take this potion to Anya and give 
it to her. That should release her.
`,GIe=`54
Goodness! Anya frozen by that fallen 
Barbarian, Nihlathak...Perhaps Malah 
can help you where I cannot.
`,qIe=`80
Poor Anya! I should've known Nihlathak 
was a traitor...
 
If you find him alive, kill him for me!
`,UIe=`70
The snake has slipped our grasp! While 
you were gone, Nihlathak disappeared.
 
I'll bet Anya knows how to track him 
down.
`,FIe=`50
Hero. Nihlathak did this to me!
 
If you've come to help me, my only hope 
lies with Malah.
 
Please...Tell her you've found me...
`,VIe=`48
Thank you so much for bringing Anya 
back to us. I have devised this spell to 
increase your resistances as a token of 
my thanks. I know it isn't much, but I 
hope you find it helpful.
 
Please go talk to Anya. She has urgent 
news concerning Nihlathak.
`,_Ie=`62
For one so young, Anya commands 
great respect. Now that she is here, I 
will make it a point to talk to her about 
Mount Arreat.
 
You should do the same.
`,WIe=`67
I never liked Nihlathak, but I never 
suspected that he'd betray us! I just 
can't understand how an Elder could do 
such a thing.
`,zIe=`140
Your rescue of Anya was quite an 
accomplishment.
`,QIe=`80
Thank you, hero, for rescuing me.
 
To show my personal gratitude, I give 
you this. I had it custom-made for you 
by Larzuk.
`,OIe=`43
Nihlathak told me he struck a deal with 
Baal to protect Harrogath. In exchange 
for the demon's mercy, the misguided 
fool plans to give Baal the Relic of the 
Ancients, our most holy totem!
 
Doing so will allow Baal to enter Mount 
Arreat unchallenged by the Ancients. I 
tried to stop Nihlathak, but he 
imprisoned me in that icy tomb.
 
Nihlathak must be stopped before he 
dooms the whole world. As much as I 
would love to strangle the life out of 
him, I'm afraid I haven't the strength.
 
You must go to his lair through this 
portal I've opened, kill him, and then 
bring back the Relic of the Ancients.
 
Stop Nihlathak from destroying what we 
have striven for eons to protect.
`,KIe=`90
As noble as Nihlathak's intentions are, 
nothing can excuse his actions.
`,XIe=`50
Regretfully, I know very little about this 
Relic. However, if what the others say 
is true, then Baal must not gain 
possession of it.
 
Stop Nihlathak...before all is lost.
`,jIe=`65
My worst fear has come true. Nihlathak 
has gone mad.
 
You must stop him, before he gives the 
Relic to the Lord of Destruction!
`,$Ie=`56
Now, rescuing Anya -- that's good. 
Talking to me while Nihlathak hands 
over the Relic to Baal -- uh...that's bad!
`,YIe=`60
I saw Nihlathak leave town just before 
you found Anya. He must be held 
accountable for his criminal deeds.
 
Find him and bring him back, if you can. 
Likely, he won't come willingly, and 
you'll be forced to kill him.
 
So be it.
`,JIe=`55
Nihlathak is a traitor! If Baal gets the 
Relic, he shall enter the mountain and 
wreak havoc there!
 
I cannot believe that Nihlathak would 
give the Relic to Baal in any kind of 
trade. He's truly insane if he believes 
that he can deal with the Lord of 
Destruction.
`,ZIe=`58
Ohh...This is a truly horrible turn of 
events.
 
I know it seems you have always been 
one step behind, my friend. But look at 
it this way...You have evil on the run.
`,eLe=`160
...What's there to talk about?
 
Kill Nihlathak!
`,aLe=`63
Nihlathak was never the kindest man. 
But for him to betray the whole world...
 
Ahh...Where shall his soul finally rest?
`,nLe=`65
My advice is to go in quick and hit hard. 
Nihlathak can't be half as tough as the 
beasts you've faced out there.
`,tLe=`55
You have stopped Nihlathak, but he 
didn't have the Relic! He must have 
already given it to Baal. Now, Baal will 
not be tested when he reaches Arreat's 
summit.
 
...Damn Nihlathak!
 
I do thank you for trying, though. 
Please, allow me to honor your courage 
by magically inscribing your name onto 
an item of your choosing. It's the least 
I can do.
`,sLe=`90
Beware! Baal grows stronger with every 
passing moment.
`,iLe=`93
Hmmm...What does Baal plan to do 
inside Mount Arreat?
`,lLe=`65
So, the Relic is lost. Do not dwell on 
failures past. It is your future that 
matters more.
`,oLe=`57
Nihlathak was a vile demon that shall 
find his home among the tortured 
minions of Hell!
 
You battled the Darkness without fear. I 
laud your skill and courage.
`,rLe=`37
Every time I hear of you, warrior, your 
deeds become more legendary.
 
But take heed. You are approaching the 
very summit of Mount Arreat. I have 
never dared venture there. It is sacred 
-- our most holy place. The legends say 
it is guarded by the Ancient Ones, who 
block the path of all who are unworthy.
 
Your reputation here does not 
matter...It will be the Ancients who 
determine your worthiness.
 
Good luck.
`,cLe=`63
The Ancients are not our enemies. 
Remember that! They are our 
ancestors -- our gods.
`,dLe=`90
A test of mettle is a fitting rite of 
passage for a Barbarian hero.
`,uLe=`72
You wouldn't have to test yourself 
against the Ancients if it weren't for 
Nihlathak's treachery. He was a fool 
and deserves to suffer for eternity.
`,HLe=`75
Every night, I've prayed to the Ancients 
to bring us peace...and now you must 
fight them.
 
Huh...Who shall I pray to now, warrior?
`,pLe=`65
By reaching the summit, you cease 
being just a simple warrior. When you 
come back, you will be far more.
`,mLe=`114
I warned you!
 
The Ancients are not like the demons 
you're accustomed to fighting.
`,hLe=`52
We have come too far to be defeated 
now, my friend. I have seen you 
complete many difficult quests. Though 
this may be your greatest trial, it is not 
beyond your reach.
`,ALe=`71
Look. I must apologize.
 
I feel responsible for your current 
struggle. If I had only stopped 
Nihlathak from giving Baal the Relic, 
you would not have to fight those 
ghosts.
`,NLe=`70
You've walked on the burial grounds of 
our greatest ancestors. I'm not sure 
whether I should bow before you or 
revile you for committing sacrilege.
 
Tread lightly when you walk with gods.
`,fLe=`68
Do not doubt yourself. I believe you are 
worthy to pass through the Ancients' 
gates, but you must believe, as well.
`,MLe=`75
Besting the Ancients in battle is a 
mighty feat indeed. I hope this means 
you're ready to battle Baal.
`,CLe=`67
You have proven yourself to these 
people. They look to you as their 
warrior, their champion.
`,gLe=`82
You stand before me a worthy hero -- 
and on you rests the last hope of our 
people.
 
Bear it well, warrior.
`,kLe=`82
The Ancients have honored you, and in 
turn, so do we. I have no remaining 
doubts about you, now.
`,SLe=`60
I knew the Ancients would find you 
worthy of Mount Arreat's secrets. Now, 
stop Baal before he destroys all that is 
sacred.
`,TLe=`31
You are a worthy hero! We augment 
your skill and grant you entry to the 
interior of Mount Arreat, wherein lies 
the Worldstone.
 
Beware. You will not be alone. Baal the 
Lord of Destruction is already inside. 
 
The Archangel Tyrael has always been 
our benefactor, but even he cannot 
help us now. For Baal blocks Tyrael's 
spiritual presence from entering the 
chamber of the Worldstone. Only you, 
mortal, have the power to defeat Baal 
now.
 
Baal threatens the Worldstone -- and 
through it, the mortal realm, itself. You 
must stop him before he gains full 
control of the sacred stone. With it 
under his control, Baal could shatter 
the boundaries between this world and 
the Burning Hells, thus allowing the 
hordes of the Prime Evils to pour forth 
into the mortal realm like an 
unstoppable tide!
 
If you are weak, the world as you know 
it could be lost forever. You must NOT 
fail!
`,vLe=`51
Remember this. Baal once possessed Tal 
Rasha, one of the most powerful of the 
ancient Horadrim.
 
Your battles with Mephisto and Diablo 
will pale in comparison to your battle 
with Baal.
 
The Lord of Destruction aided by Tal 
Rasha's knowledge...The mountain 
itself will tremble when you clash.
`,xLe=`59
I may be just an armorer, but I know 
this...Baal plans to destroy the world 
with the secrets contained in that 
mountain. It doesn't take a genius to 
know he has to be stopped.
`,yLe=`70
You knew it would eventually come down 
to this. Kill Baal! Finish the game!
`,DLe=`60
Baal has blocked Tyrael from entering 
the Worldstone Chamber? This truly 
has become a battle against Hell.
 
Whether or not it was the Heavens' 
decree, this is your fight now -- your 
destiny.
`,bLe=`63
You have ventured to a place beyond 
legend. You rush to face an evil few 
can even imagine.
 
Be careful, my friend, and may the Light 
watch over you.
`,PLe=`40
I am impressed, mortal. You have 
overcome the greatest challenge this 
world has ever faced and defeated the 
last of the Prime Evils. However, we are 
too late to save the Worldstone. Baal's 
destructive touch has corrupted it 
completely.
 
Given enough time, the Worldstone's 
energies will drain away and the 
barriers between the worlds will 
shatter -- the powers of Hell will flood 
into this...Sanctuary...and eradicate 
your people and everything you've 
labored to build.
 
Therefore, I must destroy the corrupted 
Worldstone before the powers of Hell 
take root. This act will change your 
world forever -- with consequences 
even I cannot foresee. However, it is 
the only way to ensure mankind's 
survival.
 
Go now, mortal. I have opened a portal 
that will lead you to safety.
 
May the Eternal Light shine upon you 
and your descendants for what you've 
done this day. The continued survival 
of mankind is your legacy! Above all 
else, you have earned a rest from this 
endless battle.
`,ELe=`53
You have done the impossible, hero. 
Your defeat of the last of the three 
Prime Evils is a great victory for the 
Light. 
 
Strange that you say that the 
Worldstone must be destroyed. The 
prophecies said nothing about that.
 
Perhaps all we have fought for will be 
lost...or perhaps we'll never need fight 
again!
`,wLe=`40
I knew in time you would defeat Baal. 
You have done everything you set out 
to do, my friend.
 
Ever since you rescued me from 
Tristram, I have believed in you. It has 
been a supreme honor to aid you along 
the way. 
 
So...The Worldstone was corrupted by 
Baal. And now Tyrael must destroy it. 
Worry not. Through whatever lies 
ahead I have faith that the Light will 
guide us both.
 
Go, now, back to the Worldstone 
chamber, and enter the portal Tyrael 
has opened for you.
`,RLe=`74
The Ancients themselves will envy our 
songs about you.
 
Please, don't forget about us! Farewell, 
my friend.
`,BLe=`48
If Tyrael says the Worldstone must be 
destroyed, then it must. We cannot let 
Baal's corruption prevail!
 
The world will change, true -- but who is 
to say it isn't for the better?
`,ILe=`60
The destruction of the Worldstone does 
not bode well for our world. But I'll try 
not to worry...
 
After all, we have warriors like you 
fighting for us and for the Light.
 
Farewell!
`,LLe="Katar",GLe="Wrist Blade",qLe="Cestus",ULe="Claws",FLe="Blade Talons",VLe="Scissors Katar",_Le="Stag Bow",WLe="Reflex Bow",zLe="Maiden Spear",QLe="Maiden Pike",OLe="Maiden Javelin",KLe="Glowing Orb",XLe="Crystalline Globe",jLe="Cloudy Sphere",$Le="Sparkling Ball",YLe="Swirling Crystal",JLe="Ashwood Bow",ZLe="Ceremonial Bow",e9e="Ceremonial Spear",a9e="Ceremonial Pike",n9e="Ceremonial Javelin",t9e="Heavenly Stone",s9e="Eldritch Orb",i9e="Demon Heart",l9e="Vortex Orb",o9e="Dimensional Shard",r9e="Matriarchal Bow",c9e="Grand Matron Bow",d9e="Matriarchal Spear",u9e="Matriarchal Pike",H9e="Matriarchal Javelin",p9e="Jawbone Cap",m9e="Fanged Helm",h9e="Horned Helm",A9e="Assault Helmet",N9e="Avenger Guard",f9e="Targe",M9e="Rondache",C9e="Heraldic Shield",g9e="Aerin Shield",k9e="Crown Shield",S9e="Circlet",T9e="Coronet",v9e="Tiara",x9e="Diadem",y9e="Shako",D9e="Hydraskull",b9e="Armet",P9e="Giant Conch",E9e="Spired Helm",w9e="Corona",R9e="Demonhead",B9e="Dusk Shroud",I9e="Wyrmhide",L9e="Scarab Husk",G9e="Wire Fleece",q9e="Diamond Mail",U9e="Loricated Mail",F9e="Boneweave",V9e="Great Hauberk",_9e="Balrog Skin",W9e="Hellforge Plate",z9e="Kraken Shell",Q9e="Lacquered Plate",O9e="Shadow Plate",K9e="Sacred Armor",X9e="Archon Plate",j9e="Heater",$9e="Luna",Y9e="Hyperion",J9e="Monarch",Z9e="Aegis",eGe="Ward",aGe="Bramble Mitts",nGe="Vampirebone Gloves",tGe="Vambraces",sGe="Crusader Gauntlets",iGe="Ogre Gauntlets",lGe="Wyrmhide Boots",oGe="Scarabshell Boots",rGe="Boneweave Boots",cGe="Mirrored Boots",dGe="Myrmidon Greaves",uGe="Spiderweb Sash",HGe="Vampirefang Belt",pGe="Mithril Coil",mGe="Troll Belt",hGe="Colossus Girdle",AGe="Bone Visage",NGe="Troll Nest",fGe="Blade Barrier",MGe="Sacred Feathers",CGe="Griffon Headdress",gGe="Hunter's Guise",kGe="Alpha Helm",SGe="Totemic Mask",TGe="Jawbone Visor",vGe="Lion Helm",xGe="Rage Mask",yGe="Savage Helmet",DGe="Slayer Guard",bGe="Akaran Targe",PGe="Akaran Rondache",EGe="Protector Shield",wGe="Gilded Shield",RGe="Royal Shield",BGe="Mummified Trophy",IGe="Fetish Trophy",LGe="Sexton Trophy",GGe="Cantor Trophy",qGe="Hierophant Trophy",UGe="Sky Spirit",FGe="Sun Spirit",VGe="Earth Spirit",_Ge="Blood Spirit",WGe="Dream Spirit",zGe="Carnage Helm",QGe="Fury Visor",OGe="Destroyer Helm",KGe="Conqueror Crown",XGe="Guardian Crown",jGe="Sacred Targe",$Ge="Sacred Rondache",YGe="Zakarum Shield",JGe="Vortex Shield",ZGe="Minion Skull",eqe="Hellspawn Skull",aqe="Overseer Skull",nqe="Succubus Skull",tqe="Bloodlord Skull",sqe="Jewel",iqe="Small Charm",lqe="Large Charm",oqe="Grand Charm",rqe="Keep in Inventory to Gain Bonus",cqe=`Keep it to thaw Anya
Malah's Potion`,dqe="Zod Rune",uqe="Cham Rune",Hqe="Jah Rune",pqe="Ber Rune",mqe="Sur Rune",hqe="Lo Rune",Aqe="Ohm Rune",Nqe="Vex Rune",fqe="Gul Rune",Mqe="Ist Rune",Cqe="Mal Rune",gqe="Um Rune",kqe="Pul Rune",Sqe="Lem Rune",Tqe="Fal Rune",vqe="Ko Rune",xqe="Lum Rune",yqe="Io Rune",Dqe="Hel Rune",bqe="Dol Rune",Pqe="Shael Rune",Eqe="Sol Rune",wqe="Amn Rune",Rqe="Thul Rune",Bqe="Ort Rune",Iqe="Ral Rune",Lqe="Tal Rune",Gqe="Ith Rune",qqe="Eth Rune",Uqe="Nef Rune",Fqe="Tir Rune",Vqe="Eld Rune",_qe="El Rune",Wqe="Zod",zqe="Cham",Qqe="Jah",Oqe="Ber",Kqe="Sur",Xqe="Lo",jqe="Ohm",$qe="Vex",Yqe="Gul",Jqe="Ist",Zqe="Mal",eUe="Um",aUe="Pul",nUe="Lem",tUe="Fal",sUe="Ko",iUe="Lum",lUe="Io",oUe="Hel",rUe="Dol",cUe="Shael",dUe="Sol",uUe="Amn",HUe="Thul",pUe="Ort",mUe="Ral",hUe="Tal",AUe="Ith",NUe="Eth",fUe="Nef",MUe="Tir",CUe="Eld",gUe="El",kUe="'",SUe="Ancients' Pledge",TUe="Armageddon",vUe="Authority",xUe="Beast",yUe="Beauty",DUe="Black",bUe="Blood",PUe="Bone",EUe="Bramble",wUe="Brand",RUe="Breath of the Dying",BUe="Broken Promise",IUe="Call to Arms",LUe="Chains of Honor",GUe="Chance",qUe="Chaos",UUe="Crescent Moon",FUe="Darkness",VUe="Daylight",_Ue="Death",WUe="Deception",zUe="Delirium",QUe="Desire",OUe="Despair",KUe="Destruction",XUe="Doom",jUe="Dragon",$Ue="Dread",YUe="Dream",JUe="Duress",ZUe="Edge",eFe="Elation",aFe="Enigma",nFe="Enlightenment",tFe="Envy",sFe="Eternity",iFe="Exile",lFe="Faith",oFe="Famine",rFe="Flame",cFe="Fortitude",dFe="Fortune",uFe="Friendship",HFe="Fury",pFe="Gloom",mFe="Glory",hFe="Grief",AFe="Hand of Justice",NFe="Harmony",fFe="Hatred",MFe="Heart of the Oak",CFe="Heaven's Will",gFe="Holy Tears",kFe="Holy Thunder",SFe="Honor",TFe="Revenge",vFe="Humility",xFe="Hunger",yFe="Ice",DFe="Infinity",bFe="Innocence",PFe="Insight",EFe="Jealousy",wFe="Judgement",RFe="King's Grace",BFe="Kingslayer",IFe="Knight's Vigil",LFe="Knowledge",GFe="Last Wish",qFe="Law",UFe="Lawbringer",FFe="Leaf",VFe="Lightning",_Fe="Lionheart",WFe="Lore",zFe="Love",QFe="Loyalty",OFe="Lust",KFe="Madness",XFe="Malice",jFe="Melody",$Fe="Memory",YFe="Mist",JFe="Morning",ZFe="Mystery",eVe="Myth",aVe="Nadir",nVe="Nature's Kingdom",tVe="Night",sVe="Oath",iVe="Obedience",lVe="Oblivion",oVe="Obsession",rVe="Passion",cVe="Patience",dVe="Patter",uVe="Peace",HVe="Voice of Reason",pVe="Penitence",mVe="Peril",hVe="Pestilence",AVe="Phoenix",NVe="Piety",fVe="Pillar of Faith",MVe="Plague",CVe="Praise",gVe="Prayer",kVe="Pride",SVe="Principle",TVe="Prowess in Battle",vVe="Prudence",xVe="Punishment",yVe="Purity",DVe="Question",bVe="Radiance",PVe="Rain",EVe="Reason",wVe="Red",RVe="Rhyme",BVe="Rift",IVe="Sanctuary",LVe="Serendipity",GVe="Shadow",qVe="Shadow of Doubt",UVe="Silence",FVe="Siren's Song",VVe="Smoke",_Ve="Sorrow",WVe="Spirit",zVe="Splendor",QVe="Starlight",OVe="Stealth",KVe="Steel",XVe="Still Water",jVe="Sting",$Ve="Stone",YVe="Storm",JVe="Strength",ZVe="Tempest",e_e="Temptation",a_e="Terror",n_e="Thirst",t_e="Thought",s_e="Thunder",i_e="Time",l_e="Tradition",o_e="Treachery",r_e="Trust",c_e="Truth",d_e="Unbending Will",u_e="Valor",H_e="Vengeance",p_e="Venom",m_e="Victory",h_e="Voice",A_e="Void",N_e="War",f_e="Water",M_e="Wealth",C_e="Whisper",g_e="White",k_e="Wind",S_e="Wings of Hope",T_e="Wisdom",v_e="Woe",x_e="Wonder",y_e="Wrath",D_e="Youth",b_e="Zephyr",P_e="Spleen",E_e="Scalp",w_e="Soul",R_e="Quill",B_e="Fang",I_e="Flag",L_e="Tail",G_e="Horn",q_e="Eye",U_e="Jawbone",F_e="Brain",V_e="Heart",__e="Stout",W_e="Antimagic",z_e="Null",Q_e="Godly",O_e="Ivory",K_e="Eburine",X_e="Blanched",j_e="Stalwart",$_e="Burly",Y_e="Dense",J_e="Thin",Z_e="Compact",eWe="Pestilent",aWe="Toxic",nWe="Corrosive",tWe="Foul",sWe="Septic",iWe="Shocking",lWe="Arcing",oWe="Buzzing",rWe="Static",cWe="Condensing",dWe="Flaming",uWe="Smoking",HWe="Smoldering",pWe="Fiery",mWe="Hibernal",hWe="Boreal",AWe="Shivering",NWe="Snowy",fWe="Mnemonic",MWe="Visionary",CWe="Eagleeye",gWe="Hawkeye",kWe="Falconeye",SWe="Sparroweye",TWe="Robineye",vWe="Paradox",xWe="Howling",yWe="Yelling",DWe="Calling",bWe="Alarming",PWe="Fool's",EWe="Faithful",wWe="Righteous",RWe="Honorable",BWe="Enlightened",IWe="Psychic",LWe="Cunning",GWe="Entrapping",qWe="Communal",UWe="Feral",FWe="Spiritual",VWe="Furious",_We="Raging",WWe="Echoing",zWe="Resonant",QWe="Sounding",OWe="Mojo",KWe="Venomous",XWe="Noxious",jWe="Fungal",$We="Cursing",YWe="Blighting",JWe="Hexing",ZWe="Glacial",eze="Freezing",aze="Chilling",nze="Powered",tze="Charged",sze="Sparking",ize="Volcanic",lze="Blazing",oze="Burning",rze="Diamond",cze="Celestial",dze="Elysian",uze="Astral",Hze="Unearthly",pze="Arcadian",mze="Aureolic",hze="Victorious",Aze="Ambergris",Nze="Camphor",fze="Chromatic",Mze="Scintillating",Cze="Turquoise",gze="Jacinth",kze="Zircon",Sze="Felicitous",Tze="Lucky",vze="Wailing",xze="Screaming",yze="Argent",Dze="Tin",bze="Nickel",Pze="Maroon",Eze="Chestnut",wze="Vigorous",Rze="Brown",Bze="Dun",Ize="Realgar",Lze="Rusty",Gze="Cinnabar",qze="Vermilion",Uze="Carmine",Fze="Carbuncle",Vze="Serrated",_ze="Scarlet",Wze="Bloody",zze="Sanguinary",Qze="Pearl",Oze="Divine",Kze="Hallowed",Xze="Sacred",jze="Pure",$ze="Consecrated",Yze="Lunar",Jze="Frantic",Zze="Hellacious",eQe="Quixotic",aQe="Smiting",nQe="Stellar",tQe="Stinging",sQe="Singing",iQe="Timeless",lQe="Original",oQe="Corporal",rQe="Lawful",cQe="Chaotic",dQe="Fierce",uQe="Ferocious",HQe="Perpetual",pQe="Everlasting",mQe="Laden",hQe="Pernicious",AQe="Harmful",NQe="Evil",fQe="Insidious",MQe="Malicious",CQe="Spiteful",gQe="Precocious",kQe="Majestic",SQe="Sanguine",TQe="Monumental",vQe="Irresistible",xQe="Festering",yQe="Musty",DQe="Dusty",bQe="Decaying",PQe="Rotting",EQe="Infectious",wQe="Foggy",RQe="Cloudy",BQe="Hazy",IQe="Punishing",LQe="Obsidian",GQe="Royal",qQe="Frigid",UQe="Moldy",FQe="Gaudy",VQe="Impeccable",_Qe="Soulless",WQe="Heated",zQe="Lasting",QQe="Scorched",OQe="Marred",KQe="Lilac",XQe="Rose",jQe="Shimmering",$Qe="Wicked",YQe="Strange",JQe="Repulsive",ZQe="Reclusive",eOe="Rude",aOe="Hermetic",nOe="Rainbow",tOe="Colorful",sOe="Odiferous",iOe="Grinding",lOe="to Druid Skills",oOe="to Assassin Skills",rOe=" Sockets",cOe=" to Attack Rating vs. Demons",dOe=" to Attack Rating vs. Undead",uOe=" to Damage vs. Demons",HOe=" percent to Attack Rating",pOe=" to Javelin and Spear Skills",mOe=" to Passive and Magic Skills",hOe=" to Bow and Crossbow Skills",AOe=" to Defensive Aura Skills",NOe=" to Offensive Aura Skills",fOe=" to Combat Skills",MOe=" to Summoning Skills",COe=" to Poison and Bone Skills",gOe=" to Curses",kOe=" to Warcry Skills",SOe=" to Combat Skills",TOe=" to Masteries Skills",vOe=" to Cold Skills",xOe=" to Lightning Skills",yOe=" to Fire Skills",DOe=" to Summoning Skills",bOe=" to Shape-Shifting Skills",POe=" to Elemental Skills",EOe=" to Trap Skills",wOe=" to Shadow Discipline Skills",ROe=" to Martial Art Skills",BOe="(Based on Character Level)",IOe="(Increases During Nighttime)",LOe="(Increases During Daytime)",GOe="(Increases Near Dawn)",qOe="(Increases Near Dusk)",UOe=" Charges of",FOe="Increased Stack Size",VOe="Indestructible",_Oe="Repairs %d durability per second",WOe="Repairs %d durability in %d seconds",zOe="Replenishes quantity",QOe="Cast a Level %d",OOe="When You Swing",KOe="When You Get Hit",XOe="When You Hit an Enemy",jOe="Charges",$Oe="Level",YOe="Per Level",JOe="(%d/%d Charges)",ZOe="(",eKe=")",aKe="Stealth",nKe="Immunity to Poison",tKe="Cursed",sKe="Per Player in Party",iKe="Orb Class",lKe=" Elemental Damage",oKe="Helms:",rKe="Shields:",cKe="Weapons:",dKe="Armor:",uKe="Adds to Strength",HKe="Adds to Defense Rating",pKe="Adds to Attack Rating",mKe="Adds to Maximum Mana",hKe="Adds Resistance to Cold",AKe="Adds Cold Damage to Attack",NKe="Adds to Dexterity",fKe="Adds Resistance to Poison",MKe="Adds Poison Damage to Attack",CKe="Adds to Maximum Life",gKe="Adds Resistance to Fire",kKe="Adds Fire Damage to Attack",SKe="Adds to Attack Rating",TKe="Adds to All Resistances",vKe="Adds to Damage vs. Undead",xKe="Adds to Chance to Find Magic Items",yKe="Adds Resistance to Lightning",DKe="Adds Lightning Damage to Attack",bKe="Adds Mana and Life Regeneration",PKe="Adds Attacker Takes Damage",EKe="Adds Mana and Life Steal to Attack",wKe="Coldkill",RKe="Islestrike",BKe="Spellsteel",IKe="Stormrider",LKe="Fleshrender",GKe="Moonfall",qKe="Earthshaker",UKe="Bloodletter",FKe="Hexfire",VKe="Riftslash",_Ke="Headstriker",WKe="Cloudcrack",zKe="Swordguard",QKe="Spineripper",OKe="Stormspike",KKe="Ribcracker",XKe="Warpspear",jKe="Skull Collector",$Ke="Skystrike",YKe="Endlesshail",JKe="Vampire Gaze",ZKe="Gore Rider",eXe="Lava Gout",aXe="Visceratuant",nXe="Shaftstop",tXe="Blackhorn",sXe="Magewrath",iXe="Cliffkiller",lXe="Riphook",oXe="Razorswitch",rXe="Meatscrape",cXe="Deathbit",dXe="Warshrike",uXe="Gut Siphon",HXe="Razor's Edge",pXe="Stone Rattle",mXe="Marrow Grinder",hXe="Demon Limb",AXe="Steel Shade",NXe="Fleshbone",fXe="Odium",MXe="Bonehew",CXe="Steelrend",gXe="Shadow Dancer",kXe="Soul Drainer",SXe="Rune Master",TXe="Death Cleaver",vXe="Leviathan",xXe="Dawn Bringer",yXe="Dragontooth",DXe="Wisp Projector",bXe="Lacerator",PXe="Viperfork",EXe="Spirit Keeper",wXe="Hellrack",RXe="Rockhew",BXe="Catgut",IXe="Ghostflame",LXe="Shadow Killer",GXe="Eaglewind",qXe="Windhammer",UXe="Thunderstroke",FXe="Giant Maimer",VXe="Bloodmoon",_Xe="Djinn Slayer",WXe="Cranebeak",zXe="Warhound",QXe="Gulletwound",OXe="Darksoul",KXe="Earth Shifter",XXe="Fleshripper",jXe="Stonerage",$Xe="Jade Talon",YXe="Wraithfang",JXe="Blade Master",ZXe="Cerebus' Bite",eje="Sinblade",aje="Rune Slayer",nje="Excalibur",tje="Stoneraven",sje="Moonrend",ije="Nightsummon",lje="Bonescalpel",oje="Snake Tongue",rje="Lifechoke",cje="Carnage Leaver",dje="Ghost Leach",uje="Soul Reaper",Hje="Stormwillow",pje="Moon Shadow",mje="Strong Oak",hje="Demonweb",Aje="Shade Falcon",Nje="Glimmershred",fje="Wraith Flight",Mje="Windstrike",Cje="Titan's Fist",gje="Hadeshorn",kje="Rockstopper",Sje="Stealskull",Tje="Iron Pelt",vje="Spirit Forge",xje="Toothrow",yje="Corpsemourn",Dje="Stormchaser",bje="Gravepalm",Pje="Ghoulhide",Eje="Hellmouth",wje="Infernostride",Rje="Waterwalk",Bje="Silkweave",Ije="War Traveler",Lje="Razortail",Gje="Gloom's Trap",qje="Snowclash",Uje="Lance Guard",Fje="Boneflame",Vje="Steel Pillar",_je="Darkfear",Wje="Dragonscale",zje="Ravenlore",Qje="Boneshade",Oje="Nethercrow",Kje="Flamebellow",Xje="Death's Fathom",jje="Wolfhowl",$je="Stormlash",Yje="Frostwind",Jje="Marrowwalk",Zje="Metalite's Girth",e$e="Giant Skull",a$e="Astreon's Iron Ward",n$e="Drakeflame",t$e="Skulltred",s$e="Rings",i$e="Metalgrid",l$e="Stormshield",o$e="Armor",r$e="Windforce",c$e="Eaglehorn",d$e="Gimmershred",u$e="Widowmaker",H$e="Stormspire",p$e="Wizardspike",m$e="Doombringer",h$e="Lightsabre",A$e="Hellslayer",N$e="Endlesshail",f$e="Riftlash",M$e="Credendum",C$e="Bartuc's Chop Chop",g$e="Annihilus",k$e="Doomseer",S$e="Terra's Guardian",T$e="Triad's Foliage",v$e="Malignant Skull",x$e="Apocrypha",y$e="Homunculus",D$e="Xenos",b$e="Nagas",P$e="%0 %1",E$e=" Kick",w$e=" Kicks",R$e="Pet Life: ",B$e="Wolf Defense: ",I$e="Passive Bonus to Wolves and Bears",L$e=" per hit",G$e=" hit",q$e="%d Percent Chance of Critical Strike",U$e="Mana Cost Per Raven: ",F$e="Kurast Shield",V$e="Hatchet Hands",_$e="Kick Damage: ",W$e="Kick Damage:",z$e="Percent Chance to Cast",Q$e="Frozen Anya",O$e="Larzuk will add sockets to the item of your choice.",K$e="Find Nihlathak in the Halls of Vaught.",X$e="Rescue Anya.",j$e="Free the soldiers from their prison and lead them back to town.",$$e="Anya will personalize an item for you.",Y$e="Kill Baal in the Worldstone Chamber before he corrupts it.",J$e="Find Baal's Throne Room.",Z$e="THE SISTER'S LAMENT",eYe="DESERT JOURNEY",aYe="MEPHISTO'S JUNGLE",nYe="ENTER HELL",tYe="TERROR'S END",sYe="SEARCH FOR BAAL",iYe="DESTRUCTION'S END",lYe="Say 'Retreat'",oYe=`Right Click to Cast
Scroll of Resistance`,rYe="Death Mage",cYe="Abaddon",dYe="Pit of Acheron",uYe="Infernal Pit",HYe=" per blade",pYe="Can be Inserted into Socketed Items",mYe="Kill Baal's Minions.",hYe="%d%% Chance to cast level %d %s on attack",AYe="%d%% Chance to cast level %d %s on striking",NYe="%d%% Chance to cast level %d %s when struck",fYe="Keep in inventory to gain bonus",MYe="Defensive",CYe="Offensive",gYe="Combat",kYe="Elemental Charge-up Damage: ",SYe="Retreat!",TYe="Run away!",vYe="So, it begins.",xYe="They'll never see me coming.",yYe="So dark... perfect.",DYe="So, this is where evil hides.",bYe="Whose handiwork lies buried here?",PYe="Planting the dead... How odd.",EYe="Such corruption in this place...",wYe="Evil flows from here.",RYe="Who would want to remember this place?",BYe="I can smell why this tower was abandoned.",IYe="Try and cage me, demons.",LYe="Bars can't hold a force of nature.",GYe="I don't like it down here.",qYe="The supernatural is strong here.",UYe="The Rogues' test is done.",FYe="Bah! Is that all of them?",VYe="What I kill stays dead.",_Ye="Your time is past, Blood Raven.",WYe="How has this tree escaped corruption?",zYe="This dead tree teems with energy.",QYe="These stones hold an ancient power.",OYe="Such stones are common back home.",KYe="Tristram... The first to fall to Diablo's wrath.",XYe="Ruins... the fate of all cities.",jYe="Cain! Go to the Rogue camp.",$Ye="Deckard Cain, leave this place!",YYe="A Malus! This should go to Charsi.",JYe="Charsi will be thankful to get this Malus.",ZYe="Death becomes you, Andariel.",eJe="Your reign is over, Andariel.",aJe="Why must evil hide in such wretched places?",nJe="Face the light or lurk in darkness.",tJe="Vengeance... for Atma.",sJe="Return to dust, Radament.",iJe="An eclipse... never a good omen.",lJe="Strange... an unexpected eclipse.",oJe="Dark magic in a darker tomb...",rJe="Snakes... I hate snakes.",cJe="Serpents! I expected worse.",dJe="The sun warms the world once more.",uJe="The Sanctuary - Horazon's obsession.",HJe="This was not designed by nature's Architect.",pJe="Summoner, the dark magics have corrupted you.",mJe="This place would drive anyone mad.",hJe="Horazon. Your decoy is dead.",AJe="Now I can leave this twisted nightmare.",NJe="The Horadrim have left their mark here.",fJe="These Horadric markings are mysterious.",MJe="I can sense Tal Rasha's presence now.",CJe="So, Tal Rasha... This is your resting place.",gJe="I shall track the Prime Evils to the ends of the world.",kJe="Diablo... I will find you yet.",SJe="Black books make for dark thoughts.",TJe="An ancient manuscript...  This could be useful.",vJe="Ormus... You have strange taste in books.",xJe="Ormus... study the book well.",yJe="And I thought the Forgotten Tower stank.",DJe="This smells worse than the sewers of Lut Gohlein.",bJe="Levers are made to be pulled.",PJe="Finally... The drain lever.",EJe="This is one drain I don't mind cleaning out.",wJe="From trash to treasure...",RJe="What a delicious blade! I should consult Ormus.",BJe="Ormus may know something about this unusual blade.",IJe="Hmm, a jade statue. What should I do with it?",LJe="It looks like jade. Perhaps it's worth something.",GJe="I dread this place of darkness.",qJe="This temple is a nest of evil.",UJe="The dark magic here is dispelled.",FJe="There is hope once again.",VJe="Mephisto... I'm coming for you.",_Je="Hatred stirs within me.",WJe="Mephisto's hatred was a poisonous void.",zJe="Corruption... take flight.",QJe="I have no pity for him. Oblivion is his reward.",OJe="Terror stalks Hell no more.",KJe="Eternal suffering would be too brief for you, Diablo.",XJe="Lord Diablo I have bested you.",jJe="Let Diablo's death end the reign of the Three!",$Je="The reign of Terror has ended.",YJe="A hero's mistake is finally corrected.",JJe="Thus ends the plague of Terror.",ZJe="My magic will break the siege.",eZe="The time has come to cleanse my homeland!",aZe="It takes more than a siege to stop me.",nZe="Baal. I'm coming for you.",tZe="The siege must be stopped.",sZe="You'll pay for your atrocities, Baal.",iZe="Baal! Nothing will stand in my way.",lZe="Harrogath can rest easier now.",oZe="The siege is broken.",rZe="My, my, what a messy little demon.",cZe="Harrogath is free of your kind, demon.",dZe="Oops...Did I do that?",uZe="Shenk, your command has ended.",HZe="The catapults have been silenced.",pZe="Could this be a trap?",mZe="A coward's hiding place.",hZe="Ahh, the familiar scent of death.",AZe="By the Light! What is this place?",NZe="...Nihlathak's home away from home.",fZe="I should have known...",MZe="Nihlathak... you can't hide from me.",CZe="Your power was no match for mine.",gZe="A fitting death for a traitor.",kZe="You were a sad little man, Nihlathak.",SZe="Nihlathak. What led you to this end?",TZe="Conspiring with Baal... What a tragic mistake.",vZe="You Dark Mages are all alike - obsessed with power.",xZe="Betrayer, you've reaped your reward.",yZe="The fabled home of the Ancients.",DZe="The guardians of Mount Arreat await.",bZe="The resting place of the Ancients...",PZe="The summit - The Barbarian holy ground.",EZe="The fabled home of the Ancients.",wZe="I shall prove worthy.",RZe="At last...The summit of Mount Arreat.",BZe="The power of the Worldstone washes over me.",IZe="The halls of the Ancients... Magnificent.",LZe="So, this is what the Ancients guard.",GZe="The Worldstone! Praise the Light.",qZe="The Worldstone!",UZe="The Worldstone. What power.",FZe="The legendary Worldstone - guardian of the Natural realm.",VZe="The last of the Three has fallen.",_Ze="The Prime Evils are no more.",WZe="Baal, never doubt my skills.",zZe="Baal, you shall no longer taint this mortal realm.",QZe="My work here is truly done.",OZe="The Evil brotherhood is no more.",KZe="Baal! Join your brothers in oblivion.",XZe="Raven",jZe="summon ravens",$Ze=`the eyes of your enemies
summon ravens to peck out`,YZe="Raven",JZe="Werewolf",ZZe="transform into a werewolf",eea="transform into a werewolf",aea="Werewolf",nea="Lycanthropy",tea="passive - improves shape-shifting ability",sea=`when in werewolf or werebear form
passive - improves duration and life`,iea="Lycanthropy",lea="Firestorm",oea="unleash fiery chaos",rea="unleash fiery chaos to burn your enemies",cea="Firestorm",dea="Oak Sage",uea="summon the spirit of the oak",Hea=`life for you and your party
summon a spirit pet that increases`,pea="Oak Sage",mea="Summon Spirit Wolf",hea="summon a wolf",Aea=`to fight by your side
summon a wolf with teleporting ability`,Nea="Sum Spt Wolf",fea="Werebear",Mea="transform into a werebear",Cea="transform into a werebear",gea="Werebear",kea="Molten Boulder",Sea="launch a molten boulder",Tea=`that knocks back your enemies
launch a boulder of flaming hot magma`,vea="Molten Boulder",xea="Arctic Blast",yea="shoot a jet of ice",Dea=`to burn your enemies with frost
blast a continuous jet of ice`,bea="Arctic Blast",Pea="Carrion Vine",Eea="summon corpse eating vine",wea=`and replenishes your life
summon a vine that eats corpses`,Rea="Carrion Vine",Bea="Feral Rage",Iea="life-stealing rage attack - werewolf form",Lea=`with successive hits
increasing amounts of life from your enemies
go into a frenzied rage to steal
when in werewolf form,`,Gea="Feral Rage",qea="Maul",Uea="maul your enemies - werebear form",Fea=`with successive hits
for increasing extra damage
maul your enemies
when in werebear form,`,Vea="Maul",_ea="Fissure",Wea="open the earth to burn enemies",zea=`burning them to a crisp
open volcanic vents below your enemies,`,Qea="Fissure",Oea="Cyclone Armor",Kea="shield from elemental damage",Xea=`fire, cold, and lightning
shield yourself from damage caused by`,jea="Cyclone Armor",$ea="Heart of Wolverine",Yea="summon a wolverine spirit",Jea=`of you and your party
to the damage and attack rating
summon a spirit pet that adds`,Zea="Wolverine Hrt",eaa="Summon Dire Wolf",aaa="summon an enraged wolf",naa=`it does to enemies
eating corpses to increase damage
summon a wolf that becomes enraged,`,taa="Summon D Wolf",saa="Rabies",iaa="bite causes disease - werewolf form",laa=`that spreads to other monsters
to inflict them with disease
bite your enemies
when in werewolf form,`,oaa="Rabies",raa="Fire Claws",caa="fiery, mauling attack",daa=`with a fiery claw attack
form, maul your enemies
when in werewolf or werebear`,uaa="Fire Claws",Haa="Twister",paa="release several small whirlwinds",maa=`cut a path through your enemies
release several small whirlwinds that`,haa="Twister",Aaa="Solar Creeper",Naa="summon corpse eating vine",faa=`and replenishes your mana
summon a vine that eats corpses`,Maa="Sol Creep",Caa="Hunger",gaa="life-and-mana-stealing bite",kaa=`to gain life and mana
form, bite your enemies
when in werewolf or werebear`,Saa="Hunger",Taa="Shock Wave",vaa="create shock waves - werebear form",xaa=`that stuns nearby enemies
stomp to create a shock wave
when in werebear form,`,yaa="Shock Wave",Daa="Volcano",baa="create a volcano",Paa=`and destruction over your enemies
summon forth a volcano to rain death`,Eaa="Volcano",waa="Tornado",Raa="create a tornado",Baa=`to blast your enemies
create a funnel of wind and debris`,Iaa="Tornado",Laa="Spirit of Barbs",Gaa="summon a spirit pet of thorns",qaa=`back at your enemies
taken by you and your party
summon spirit pet that reflects damage`,Uaa="Spirit Barbs",Faa="Summon Grizzly",Vaa="summon a grizzly bear",_aa="summon a ferocious grizzly bear",Waa="Summon Grizzly",zaa="Fury",Qaa="multiple attacks - werewolf Form",Oaa=`or one target multiple times
either multiple adjacent targets
when in werewolf form, attack`,Kaa="Fury",Xaa="Armageddon",jaa="rain fire on your enemies",$aa=`destruction on nearby enemies
create a meteor shower to rain fiery`,Yaa="Armageddon",Jaa="Hurricane",Zaa="create a massive wind storm",ena=`debris to pound your enemies to bits
create a massive storm of wind and`,ana="Hurricane",nna="Fire Blast",tna="throw a fire bomb",sna=`to blast your enemies to bits
throw a fire bomb`,ina="Fire Blast",lna="Claw Mastery",ona="passive - improves claw-class weapons ability",rna=`with claw-class weapons
passive - improves your skill`,cna="Claw Mastery",dna="Psychic Hammer",una="a mind blast to crush your enemies",Hna=`to crush and knock back your enemies
to create a psychic blast
use the power of your mind`,pna="Psyc Hammer",mna="Tiger Strike",hna=`increases damage of finishing moves

Charge-up Skill`,Ana=`normal attack to release charges
must use a dragon finishing move or
to finishing moves
consecutive hits add damage bonuses

Charge-up Skill
`,Nna="Tiger Strike",fna="Dragon Talon",Mna=`kick your enemies

Finishing Move`,Cna=`adds charged-up bonuses to the kick
kick your enemies out of your way

Finishing Move
`,gna="Dragon Talon",kna="Shock Web",Sna="throw a web of lightning",Tna=`to shock your enemies
throw a web of lightning`,vna="Shock Web",xna="Blade Sentinel",yna="set a spinning blade",Dna=`between you and target point
set a spinning blade to patrol`,bna="Blade Sentinel",Pna="Burst of Speed",Ena="increases attack and movement speed",wna=`for a period of time
increases attack and movement speed`,Rna="Burst of Speed",Bna="Fists of Fire",Ina=`adds fire damage to finishing moves

Charge-up Skill`,Lna=`normal attack to release charges
must use a dragon finishing move or
can only be used with claw-class weapons
to finishing moves
consecutive hits add fire damage

Charge-up Skill
`,Gna="Fists of Fire",qna="Dragon Claw",Una=`double claw attack

Finishing Move`,Fna=`adds charged-up bonuses to both claw attacks
with your dual claw-class weapons
slice and dice your enemies

Finishing Move
`,Vna="Dragon Claw",_na="Charged Bolt Sentry",Wna="a trap that emits charged bolts",zna=`at enemies that pass near
a trap that emits charged bolts`,Qna="Charged Bolt",Ona="Wake of Fire",Kna="a trap that emits waves of fire",Xna="a trap that emits waves of fire",jna="Wake of Fire",$na="Weapon Block",Yna="passive - block with two claw-class weapons",Jna=`you are using dual claw-class weapons
passive - chance to block when`,Zna="Wpn Block",eta="Cloak of Shadows",ata="blind your enemies",nta=`lowering their defenses for a period of time
cast a shadow to blind nearby enemies`,tta="Cloak of Shdws",sta="Cobra Strike",ita=` adds life and mana stealing to finishing moves

Charge-up Skill`,lta=`normal attack to release charges
must use a dragon finishing move or
to finishing moves
consecutive hits add life and mana stealing

Charge-up Skill
`,ota="Cobra Strike",rta="Blade Fury",cta="throw spinning blades",dta=`to slice up your enemies
throw spinning blades`,uta="Blade Fury",Hta="Fade",pta="temporary resist all",mta=`for a period of time
raise all resistances and resist curses`,hta="Fade",Ata="Shadow Warrior",Nta="summon a shadow of yourself",fta=`your skills and fights by your side
summon a shadow of yourself that mimics`,Mta="Shdw Warrior",Cta="Claws of Thunder",gta=`adds lightning damage to finishing moves
 
Charge-up Skill`,kta=`normal attack to release charges
must use a dragon finishing move or
can only be used with claw-class weapons
to finishing moves
consecutive hits add lightning damage

Charge-up Skill
`,Sta="Thunder Claws",Tta="Dragon Tail",vta=`explosive kick

Finishing Move`,xta=`adds charged-up bonuses to the kick
knock back your enemies with an explosive kick

Finishing Move
`,yta="Dragon Tail",Dta="Lightning Sentry",bta="a trap that emits lightning",Pta=`to scorch passing enemies
a trap that shoots lightning`,Eta="Lightning Sentry",wta="Wake of Inferno",Rta="trap that sprays fire",Bta="trap that sprays fire at passing enemies",Ita="Wake of Inferno",Lta="Mind Blast",Gta="compelling psionic blast",qta=`and convert the feeble-minded
stun a group of enemies
using the power of your mind`,Uta="Mind Blast",Fta="Blades of Ice",Vta=`adds cold damage to finishing moves

Charge-up Skill`,_ta=`normal attack to release charges
must use a dragon finishing move or
can only be used with claw-class weapons
to finishing moves
consecutive hits add cold damage

Charge-up Skill
`,Wta="Blades of Ice",zta="Dragon Flight",Qta=`teleport and kick enemies

Finishing Move`,Ota=`adds charged-up bonuses to the kick
and destroy them with a kick
teleport to your enemies

Finishing Move
`,Kta="Dragon Flight",Xta="Death Sentry",jta="trap that explodes nearby corpses",$ta=`or explodes nearby corpses laying waste to more enemies
trap that shoots lightning at your enemies`,Yta="Death Sentry",Jta="Blade Shield",Zta="spinning blades of defense",esa=`who stray too close
spinning blades slice enemies`,asa="Blade Shield",nsa="Venom",tsa="poison your weapon",ssa="add poison damage to your weapons",isa="Venom",lsa="Shadow Master",osa="summon your shadow",rsa=`to fight by your side
summon a powerful shadow of yourself`,csa="Shdw Master",dsa="Phoenix Strike",usa=`adds elemental novas to finishing moves

Charge-up Skill`,Hsa=`normal attack to release charges
must use a dragon finishing move or
adds elemental novas to finishing moves

Charge-up Skill
`,psa="Phnx Strike",msa=" per kick",hsa="Life Steal: ",Asa="Chance to stun: ",Nsa="Chance to afflict target: ",fsa="Charge 1 - ",Msa="Charge 2 - ",Csa="Charge 3 - ",gsa="Adds ",ksa="Finishing Move Bonuses",Ssa=" percent life stealing",Tsa=" percent life and mana stealing ",vsa="burning damage",xsa=" percent damage",ysa="Lowers Resistance ",Dsa=" to melee attacks",bsa="Mana Steal: ",Psa="Feral Pets: ",Esa=" Percent Attack",wsa=" Percent Life",Rsa=" Percent Damage",Bsa="Finishing Move - ",Isa="Mana Recovered: ",Lsa="meteor damage: ",Gsa="chain lightning damage: ",qsa="chaos ice bolt damage: ",Usa="lightning damage: ",Fsa="nova damage: ",Vsa="charged bolt damage: ",_sa="fire damage: ",Wsa="fire damage radius: ",zsa="burning duration: ",Qsa="cold damage: ",Osa="cold damage radius: ",Ksa="freeze duration: ",Xsa="Raven",jsa="Wolf",$sa="Bear",Ysa="Poison Creeper",Jsa="Carrion Vine",Zsa="Solar Creeper",eia="Spirit of Barbs",aia="Heart of Wolverine",nia="Vine",tia="Spirit",sia="Dire Wolf",iia="Warrior",lia="Shadow",oia="Master",ria="Eagle",cia="Wolf",dia="Bear",uia="Catapult",Hia="Catapult",pia="Catapult",mia="Catapult",hia="Catapult",Aia="Snow Drifter",Nia="Abominable",fia="Chilled Froth",Mia="Frozen Abyss",Cia="Warped Fallen Wolfrider",gia="Darkone Wolfrider",kia="Devilkin Wolfrider",Sia="Carver Wolfrider",Tia="Fallen Wolfrider",via="Ghostly",xia="Fanatic",yia="Possessed",Dia="Berserker",bia="Larzuk",Pia="Anya",Eia="Malah",wia="Nihlathak",Ria="Barbarian Captive",Bia="Moe",Iia="Curly",Lia="Larry",Gia="Pindleskin",qia="Frozenstein",Uia="(Druid Only)",Fia="(Assassin Only)",Via="(Amazon Only)",_ia="(Barbarian Only)",Wia="Summoning",zia="Shape",Qia="Shifting",Oia="Elemental",Kia="Traps",Xia="Shadow",jia="Disciplines",$ia="Martial",Yia="Arts",Jia="Chest",Zia="Wooden Chest",ela="Burial Chest",ala="Burial Chest",nla="Chest",tla="Chest",sla="Chest",ila="Wooden Chest",lla="Chest",ola="Pyre of Flesh",rla="Burning Pit",cla="Town Flag",dla="Chandelier",ula="Jar",Hla="Jar",pla="Jar",mla="Swinging Heads",hla="Pole",Ala="Skulls and Rocks",Nla="Hell Gate",fla="Main Gate",Mla="Banner",Cla="Banner",gla="Pole",kla="Stash",Sla="Debris",Tla="Wooden Chest",vla="Wooden Chest",xla="Hidden Stash",yla="Torch",Dla="Torch",bla="Tomb",Pla="Tomb",Ela="Tomb",wla="Torch",Rla="Torch",Bla="Torch",Ila="Smoke",Lla="Dead Barbarian",Gla="Dead Barbarian",qla="Cage",Ula="Shrine",Fla="Jar",Vla="Jar",_la="Jar",Wla="Jar",zla="Evil Urn",Qla="Altar",Ola="Death Pole",Kla="Death Pole",Xla="Chest",jla="Skulls and Rocks",$la="Jar",Yla="Torch",Jla="Torch",Zla="Fire",eoa="Torch",aoa="Health Shrine",noa="Barrel",toa="Hidden Stash",soa="Shrine",ioa="Shrine",loa="Fire Pit",ooa="Torch Pit",roa="Hidden Stash",coa="Hidden Stash",doa="Box",uoa="Tomb",Hoa="Tomb",poa="Tomb",moa="Tomb",hoa="Tomb",Aoa="Corpse",Noa="Candles",foa="Shrub",Moa="Shrub",Coa="Corpse",goa="Altar of the Heavens",koa="Hidden Stash",Soa="Weapon Rack",Toa="Weapon Rack",voa="Armor Stand",xoa="Armor Stand",yoa="Siege on Harrogath",Doa="Stop the Siege by killing Shenk the Overseer in the Bloody Foothills.",boa="Kill Shenk the Overseer.",Poa="Go talk to Larzuk for your reward.",Eoa="Rescue on Mount Arreat",woa="Find the Soldiers in the Frigid Highlands.",Roa="Rescue %d more Soldiers in the Frigid Highlands.",Boa="Return to Qual-Kehk for your reward.",Ioa="Apply the Runes to a Socketed item in this order:",Loa="Prison of Ice",Goa="Look for Anya under the Crystalline Passage by the Frozen River.",qoa="Talk to Malah.",Uoa="Use the potion Malah gave you to thaw Anya.",Foa="Talk to Malah for your reward.",Voa="Talk to Anya.",_oa="Betrayal of Harrogath",Woa="Take Anya's portal to Nihlathak's Temple.",zoa="Kill Nihlathak.",Qoa="Talk to Anya before you continue through the Crystalline Passage, past the Glacial Trail, to proceed up Mount Arreat to the Summit.",Ooa="Rite of Passage",Koa="Travel through the Ancient's Way to find the Ancients at the Arreat Summit.",Xoa="Consult with the Ancients by activating the Altar of the Heavens.",joa="Defeat all three Ancients without leaving Mount Arreat.",$oa="Eve of Destruction",Yoa="Consult with the Ancients.",Joa="Kill Baal.",Zoa="Talk to Tyreal.",era="Take Tyreal's Portal to Safety.",ara="Harrogath",nra="Drop Potion on Portrait to Heal",tra="Right-click to Open Inventory (%s)",sra="Dismiss",ira="Dismiss Hireling",lra="Rehire",ora="Resurrect",rra="Resurrect %s: %d",cra="Thanks.",dra="Thank you.",ura="I needed that.",Hra="It is good to work for someone who cares.",pra="Good for you.",mra="I sense danger.",hra="I hate these vermin.",Ara="I have a bad feeling about this.",Nra="Beware!",fra="I detest spiders.",Mra="Eek, snakes!",Cra="I am more experienced.",gra="I am hurt!",kra="Help!",Sra="I am dying.",Tra="Help me!",vra="Good morning.",xra="Good afternoon.",yra="Good evening.",Dra="Hello.",bra="Skill 9",Pra="Skill 10",Era="Skill 11",wra="Skill 12",Rra="Skill 13",Bra="Skill 14",Ira="Skill 15",Lra="Skill 16",Gra="Toggle MiniMap",qra="Swap Weapons",Ura="Hireling Screen",Fra="Hireling Inventory",Vra="Hireling",_ra="add sockets",Wra="personalize",zra="Choose the item to which you wish to add sockets.",Qra="Varaya",Ora="Khan",Kra="Klisk",Xra="Bors",jra="Brom",$ra="Wiglaf",Yra="Hrothgar",Jra="Scyld",Zra="Healfdane",e1a="Heorogar",a1a="Halgaunt",n1a="Hygelac",t1a="Egtheow",s1a="Bohdan",i1a="Wulfgar",l1a="Hild",o1a="Heatholaf",r1a="Weder",c1a="Vikhyat",d1a="Unferth",u1a="Sigemund",H1a="Heremod",p1a="Hengest",m1a="Folcwald",h1a="Frisian",A1a="Hnaef",N1a="Guthlaf",f1a="Oslaf",M1a="Yrmenlaf",C1a="Garmund",g1a="Lanth",k1a="Eadgils",S1a="Onela",T1a="Damien",v1a="Tryneus",x1a="Klar",y1a="Wulf",D1a="Bulwye",b1a="Lief",P1a="Magnus",E1a="Klatu",w1a="Drus",R1a="Hoku",B1a="Kord",I1a="Uther",L1a="Ip",G1a="Ulf",q1a="Tharr",U1a="Kaelim",F1a="Ulric",V1a="Alaric",_1a="Ethelred",W1a="Caden",z1a="Elgifu",Q1a="Tostig",O1a="Alcuin",K1a="Emund",X1a="Sigurd",j1a="Gorm",$1a="Hollis",Y1a="Ragnar",J1a="Torkel",Z1a="Wulfstan",eca="Alban",aca="Barloc",nca="Bill",tca="Theodoric",sca="Bartuc's Cut-Throat",ica="Fire Damage Reduced by",lca="Cold Damage Reduced by",oca="Lightning Damage Reduced by",rca="Poison Damage Reduced by",cca="Absorbs Magic Damage",dca="Absorbs Fire Damage",uca="Absorbs Cold Damage",Hca="Absorbs Lightning Damage",pca="Absorbs Poison Damage",mca="Void",hca=" to your attack",Aca="+%d to Javelin and Spear Skills",Nca="+%d to Passive and Magic Skills",fca="+%d to Bow and Crossbow Skills",Mca="+%d to Defensive Auras",Cca="+%d to Offensive Auras",gca="+%d to Summoning Skills",kca="+%d to Poison and Bone Skills",Sca="+%d to Curses",Tca="+%d to Warcries",vca="+%d to Combat Skills",xca="+%d to Masteries",yca="+%d to Cold Skills",Dca="+%d to Lightning Skills",bca="+%d to Fire Skills",Pca="+%d to Summoning Skills",Eca="+%d to Shape Shifting Skills",wca="+%d to Elemental Skills",Rca="+%d to Traps",Bca="+%d to Shadow Disciplines",Ica="+%d to Martial Arts",Lca="No Magic, Socketed, Rare, Unique, or Set Items. No Jewelry.",Gca="Undead",qca="Demon",Uca="",Fca="",Vca="Immune to Fire",_ca="Immune to Cold",Wca="Immune to Lightning",zca="Immune to Poison",Qca="Immune to Physical",Oca="Immune to Magic",Kca="%s's",Xca="%s'",jca="%0",$ca="The EXPANSION LADDER displays the top characters, ranked by experience. The default setting displays overall rankings, but you can view sorted lists after selecting the By Class option.",Yca="The EXPANSION HARDCORE LADDER displays the top Hardcore characters, ranked by experience. The default setting displays overall rankings, but you can view sorted lists after selecting By Class option.",Jca="Druid",Zca="Assassin",eda="Druid",ada="Assassin",nda="%s: %d%%",tda="Average chance %s will hit you: %d%%",sda=`Chance to Block: %d%%
Average chance %s will hit you: %d%%`,ida="%s permits you to loot his corpse.",lda="%s permits you to loot her corpse.",oda="%s no longer allows you to access his corpse.",rda="%s no longer allows you to access her corpse.",cda="You are hostile towards each other.",dda="%s is hostile to you, but you are friendly to him.",uda="%s is hostile to you, but you are friendly to her.",Hda="%s is friendly to you, but you are hostile to her.",pda="You are friendly to each other.",mda="You may loot each other's corpse.",hda="%s may loot your corpse, but you may not loot his.",Ada="%s may loot your corpse, but you may not loot hers.",Nda="%s may not loot your corpse, but you may loot his.",fda="%s may not loot your corpse, but you may loot hers.",Mda="Neither of you may loot the other's corpse.",Cda=" ",gda=" ",kda=" ",Sda=" ",Tda=" ",vda=" ",xda=" ",yda=" ",Dda=" ",bda=" ",Pda=" ",Eda=" ",wda=" ",Rda=" ",Bda=" ",Ida=" ",Lda=" ",Gda=" ",qda=" ",Uda=" ",Fda=" ",Vda=" ",_da=" ",Wda=" ",zda=" ",Qda=" ",Oda=" ",Kda=" ",Xda=" ",jda=" ",$da=`or bolts with fire
magically enhances your arrows`,Yda=" ",Jda=" ",Zda=" ",eua=`cold arrows only do half of their regular damage
by adding cold damage and a slowing effect
magically enhances your arrows or bolts`,aua=" ",nua=" ",tua=" ",sua=" ",iua=" ",lua=" ",oua=" ",rua=" ",cua=" ",dua=" ",uua=" ",Hua=`cold arrows only do half of their regular damage
by adding cold damage and a slowing effect
magically enhances your arrows or bolts`,pua=" ",mua=" ",hua=" ",Aua=" ",Nua=" ",fua=" ",Mua=" ",Cua=" ",gua=" ",kua=" ",Sua=" ",Tua=" ",vua=" ",xua=" ",yua=" ",Dua=" ",bua=" ",Pua=" ",Eua=" ",wua=`contact, damaging all nearby enemies
enchants an arrow or bolt that explodes on`,Rua=" ",Bua=" ",Iua=" ",Lua=" ",Gua=" ",qua=" ",Uua=" ",Fua=" ",Vua=" ",_ua=" ",Wua=" ",zua=" ",Qua=" ",Oua=" ",Kua=" ",Xua=" ",jua=" ",$ua=" ",Yua=" ",Jua=`to freeze your enemies
magically enhances your arrow or bolt`,Zua=" ",eHa=" ",aHa=" ",nHa=" ",tHa=" ",sHa=" ",iHa=" ",lHa=" ",oHa=" ",rHa=" ",cHa=" ",dHa=" ",uHa=" ",HHa=" ",pHa=" ",mHa=" ",hHa=" ",AHa=" ",NHa=" ",fHa=" ",MHa=" ",CHa=" ",gHa=" ",kHa=`creates a pyre upon impact
cause severe fire damage and
enhances arrows or bolts to`,SHa=" ",THa=" ",vHa=" ",xHa=" ",yHa=" ",DHa=" ",bHa=" ",PHa=" ",EHa=" ",wHa=" ",RHa=" ",BHa=" ",IHa=" ",LHa=" ",GHa=" ",qHa=`to freeze entire groups of monsters
magically enhances an arrow or bolt`,UHa=" ",FHa=" ",VHa=" ",_Ha=" ",WHa=" ",zHa=" ",QHa=" ",OHa=" ",KHa=" ",XHa=" ",jHa=" ",$Ha=" ",YHa=" ",JHa=" ",ZHa=" ",e0a=" ",a0a=" ",n0a=" ",t0a=" ",s0a=" ",i0a=" ",l0a=" ",o0a=" ",r0a=" ",c0a=" ",d0a=" ",u0a=" ",H0a=" ",p0a=" ",m0a=" ",h0a=" ",A0a=" ",N0a=" ",f0a=" ",M0a=" ",C0a=" ",g0a=" ",k0a=" ",S0a=" ",T0a=" ",v0a=" ",x0a=" ",y0a=" ",D0a=`of all nearby enemies
creates an electrical field that reduces life`,b0a=" ",P0a=" ",E0a=" ",w0a=" ",R0a=" ",B0a=" ",I0a=" ",L0a=" ",G0a=" ",q0a=" ",U0a=" ",F0a=" ",V0a=" ",_0a=" ",W0a=" ",z0a=" ",Q0a=" ",O0a=" ",K0a=" ",X0a=" ",j0a=" ",$0a=" ",Y0a=" ",J0a=" ",Z0a=" ",epa=" ",apa=" ",npa=" ",tpa=" ",spa=" ",ipa=" ",lpa=" ",opa=" ",rpa=" ",cpa=" ",dpa=" ",upa=" ",Hpa=" ",ppa=" ",mpa=" ",hpa=" ",Apa=" ",Npa=" ",fpa=" ",Mpa=" ",Cpa=" ",gpa=" ",kpa=" ",Spa=" ",Tpa=" ",vpa=" ",xpa=" ",ypa=" ",Dpa=" ",bpa=" ",Ppa=" ",Epa=" ",wpa=" ",Rpa=" ",Bpa=" ",Ipa=" ",Lpa=" ",Gpa=" ",qpa=" ",Upa=" ",Fpa=" ",Vpa=" ",_pa=" ",Wpa=" ",zpa=" ",Qpa=" ",Opa=" ",Kpa=" ",Xpa=" ",jpa=" ",$pa=" ",Ypa=" ",Jpa=" ",Zpa=" ",ema=" ",ama=" ",nma=" ",tma="passive - increases lightning damage",sma="passive - increases all damage caused by your lightning spells",ima=" ",lma=" ",oma=" ",rma=" ",cma=" ",dma=" ",uma=" ",Hma=" ",pma=" ",mma=" ",hma=" ",Ama=" ",Nma=" ",fma=" ",Mma=" ",Cma=" ",gma=" ",kma=" ",Sma=" ",Tma=" ",vma=" ",xma=" ",yma=" ",Dma=" ",bma=" ",Pma=" ",Ema=" ",wma=" ",Rma=" ",Bma=" ",Ima=" ",Lma=" ",Gma=" ",qma=" ",Uma=" ",Fma=" ",Vma=" ",_ma=" ",Wma=" ",zma=" ",Qma=" ",Oma=" ",Kma=" ",Xma=" ",jma=" ",$ma=" ",Yma=" ",Jma=" ",Zma=" ",eha=" ",aha=" ",nha=" ",tha=" ",sha=" ",iha=" ",lha=" ",oha=" ",rha=" ",cha=" ",dha=" ",uha=" ",Hha=" ",pha=" ",mha=" ",hha=" ",Aha=" ",Nha=" ",fha=" ",Mha=" ",Cha=" ",gha=" ",kha=" ",Sha=" ",Tha=" ",vha=" ",xha=" ",yha=" ",Dha=" ",bha=" ",Pha=" ",Eha=" ",wha=" ",Rha=" ",Bha=" ",Iha=" ",Lha=" ",Gha=" ",qha=" ",Uha=" ",Fha=" ",Vha=" ",_ha=`this curse may not be overridden by another curse
target of all nearby monsters
curses a monster to become the`,Wha=" ",zha=" ",Qha=" ",Oha=" ",Kha=" ",Xha=" ",jha=" ",$ha=" ",Yha=" ",Jha=" ",Zha=" ",e5a=" ",a5a=" ",n5a=" ",t5a=" ",s5a=" ",i5a=" ",l5a=" ",o5a=" ",r5a=" ",c5a=" ",d5a=" ",u5a=" ",H5a=" ",p5a=" ",m5a=" ",h5a=" ",A5a=" ",N5a=" ",f5a=" ",M5a=" ",C5a=" ",g5a=" ",k5a=" ",S5a=" ",T5a=" ",v5a=" ",x5a=" ",y5a=" ",D5a=" ",b5a=" ",P5a=" ",E5a=" ",w5a=" ",R5a=" ",B5a=" ",I5a=" ",L5a=" ",G5a=" ",q5a=" ",U5a=" ",F5a=" ",V5a=" ",_5a=" ",W5a=" ",z5a=" ",Q5a=" ",O5a=" ",K5a=" ",X5a=" ",j5a=" ",$5a=" ",Y5a=" ",J5a=" ",Z5a=" ",e2a=" ",a2a=" ",n2a=" ",t2a=" ",s2a=" ",i2a=" ",l2a=" ",o2a=" ",r2a=" ",c2a=" ",d2a=" ",u2a=" ",H2a=" ",p2a=" ",m2a=" ",h2a=" ",A2a=" ",N2a=" ",f2a=" ",M2a=" ",C2a=" ",g2a=" ",k2a=" ",S2a=" ",T2a=" ",v2a=" ",x2a=" ",y2a=" ",D2a=" ",b2a=" ",P2a=" ",E2a=" ",w2a=" ",R2a=" ",B2a=" ",I2a=" ",L2a=" ",G2a=" ",q2a=" ",U2a=" ",F2a=" ",V2a=" ",_2a=" ",W2a=" ",z2a=" ",Q2a=" ",O2a=" ",K2a=" ",X2a=" ",j2a=" ",$2a=" ",Y2a=" ",J2a=" ",Z2a=" ",eAa=" ",aAa=" ",nAa=" ",tAa=" ",sAa=" ",iAa=" ",lAa=" ",oAa=" ",rAa=`adds lightning damage to your attack
to damage nearby enemies
when active, aura causes pulses of electricity`,cAa=" ",dAa=" ",uAa=" ",HAa=" ",pAa=" ",mAa=" ",hAa=" ",AAa=" ",NAa=" ",fAa=" ",MAa=" ",CAa=" ",gAa=" ",kAa=" ",SAa="aura - increases attack speed and damage",TAa=`and attack rating for you and your party
when active, aura increases damage, attack speed,`,vAa=" ",xAa=" ",yAa="aura - weakens enemies",DAa=" ",bAa=" ",PAa=" ",EAa=" ",wAa=`you life and mana
the souls of slain enemies to give
when active, aura attempts to redeem`,RAa=" ",BAa=" ",IAa=" ",LAa=" ",GAa=" ",qAa=" ",UAa=" ",FAa=" ",VAa=" ",_Aa=" ",WAa=" ",zAa=" ",QAa=" ",OAa=" ",KAa=" ",XAa=" ",jAa=" ",$Aa=" ",YAa=" ",JAa=" ",ZAa=" ",eNa=" ",aNa=" ",nNa=" ",tNa=" ",sNa=" ",iNa=" ",lNa=" ",oNa=" ",rNa=" ",cNa=" ",dNa=" ",uNa=" ",HNa=" ",pNa=" ",mNa=" ",hNa=" ",ANa=" ",NNa=" ",fNa=" ",MNa=" ",CNa=" ",gNa=" ",kNa=" ",SNa=" ",TNa=" ",vNa=" ",xNa=" ",yNa=" ",DNa=" ",bNa=" ",PNa=" ",ENa=" ",wNa=" ",RNa=" ",BNa=" ",INa=" ",LNa=" ",GNa=" ",qNa=" ",UNa=" ",FNa=" ",VNa=" ",_Na=" ",WNa=" ",zNa=" ",QNa=" ",ONa=" ",KNa=" ",XNa=" ",jNa=" ",$Na=" ",YNa=" ",JNa=" ",ZNa=" ",efa=" ",afa=" ",nfa=" ",tfa=" ",sfa=" ",ifa=" ",lfa=" ",ofa=" ",rfa=" ",cfa=" ",dfa=" ",ufa=" ",Hfa=" ",pfa=" ",mfa=" ",hfa=" ",Afa=" ",Nfa=" ",ffa=" ",Mfa=" ",Cfa=" ",gfa=" ",kfa=" ",Sfa=" ",Tfa=" ",vfa=" ",xfa=" ",yfa=" ",Dfa=" ",bfa=" ",Pfa=" ",Efa=" ",wfa=" ",Rfa=" ",Bfa=" ",Ifa=" ",Lfa=" ",Gfa=" ",qfa=" ",Ufa=" ",Ffa=" ",Vfa=" ",_fa=" ",Wfa=" ",zfa=" ",Qfa=" ",Ofa=" ",Kfa=" ",Xfa=" ",jfa=" ",$fa="You must wait a short time to declare hostility with that player.",Yfa="CHAT",Jfa="NEWS",Zfa="LADDER",eMa="LADDER CHARACTER",aMa="%s Receives Bonuses From:",nMa="Damage per Level",tMa="Elemental Damage per Level",sMa="Fire Damage per Level",iMa="Cold Damage per Level",lMa="Lightning Damage per Level",oMa="Poison Damage per Level",rMa="Magic Damage per Level",cMa="Yards per Level",dMa="Rate of Fire per Level",uMa="Attack Rating per Level",HMa="Attack Speed per Level",pMa="Defense per Level",mMa="Mana Cost per Level",hMa="Missiles per Level",AMa="+1 Missile per Level",NMa="+1 Missile per %d Levels",fMa="Bolts per Level",MMa="+1 Bolt per Level",CMa="+1 Bolt per %d Levels",gMa="Shots per Level",kMa="+1 Shot per Level",SMa="+1 Shot per %d Levels",TMa="Life per Level",vMa="Walk/Run Speed per Level",xMa="Duration per Level",yMa="Cold Length per Level",DMa="Freeze Length per Level",bMa="Poison Length per Level",PMa="Converts %d%% Physical Damage to Magic Damage per Level",EMa="Converts %d%% Physical Damage to Elemental Damage per Level",wMa="Converts %d%% Physical Damage to Elemental Damage",RMa="Converts %d%% Physical Damage to Magic Damage",BMa="Second per Level",IMa="Seconds per Level",LMa="Damage Absorbed per Level",GMa="Weapon Damage",qMa="Holy Bolt Damage per Level",UMa="Life Healed per Level",FMa="Life Healed Every 2 Seconds",VMa="Your Damage: ",_Ma="Party Damage: ",WMa="Average Fire Damage per Second per Level",zMa="Slows Enemies: ",QMa="Corpse Explosion Damage: ",OMa="Level %d %s Aura When Equipped",KMa="to all Attributes",XMa="to Experience Gained",jMa="Life after each Kill",$Ma="Reduces all Vendor Prices",YMa="Slain Monsters Rest in Peace",JMa="to Attack Rating versus",ZMa="to Damage versus",e3a="Slaying:",a3a="Reanimate as:",n3a="to Enemy Cold Resistance",t3a="to Enemy Fire Resistance",s3a="to Enemy Lightning Resistance",i3a="to Enemy Poison Resistance",l3a="to Fire Skill Damage",o3a="to Cold Skill Damage",r3a="to Lightning Skill Damage",c3a="to Poison Skill Damage",d3a="%d%% Chance to cast level %d %s when you Die",u3a="%d%% Chance to cast level %d %s when you Level-Up",H3a="%d%% Chance to cast level %d %s when you Kill an Enemy",p3a="Werewolf",m3a="transform into a werewolf",h3a="transform into a werewolf",A3a="Werewolf",N3a=" skeleton mage",f3a=" skeleton magi",M3a="+%d to Summoning Skills",C3a="%d Stones of Jordan Sold to Merchants",g3a="Diablo Walks the Earth",k3a="Hellspawn Skull",S3a="Trap Door",T3a="Legendary Mallet",v3a=`your life and mana
the souls of slain enemies to give
when active, aura attempts to redeem`,x3a="Fiend",y3a="Wraith",D3a="Chance to Block: ",b3a="over ",P3a="Explore Tal Rasha's Tomb",E3a="/reply",w3a="Allows you to reply to a whisper without typing the account name",R3a="ÿc9 Yellow Textÿc4 represents special messages sent directly from battle.net",B3a="Game Time:",I3a="You must use *account names for anyone on battle.net including people in a different game such as Starcraft.",L3a="ÿc5Gray Textÿc4 also represents actions that have been taken by people in the chat Channel.",G3a="ÿc3Blue Textÿc4 represents special messages sent directly from battle.net or messages from a Blizzard Representative.",q3a="Helms:",U3a="Shields:",F3a="Weapons:",V3a="Armor:",_3a="EXPANSION CHARACTER",W3a="Lowers Resistance ",z3a="Can be Inserted into Socketed Items",Q3a=" to melee attacks",O3a="%d Percent Chance of Critical Strike",K3a="Say 'Retreat'",X3a="Ghostly",j3a="Fanatic",$3a="Possessed",Y3a="Berserker",J3a="Defensive",Z3a="Offensive",eCa="Combat",aCa="(Based on Character Level)",nCa="Rank",tCa="Key of Terror",sCa="Key of Hate",iCa="Key of Destruction",lCa="Diablo's Horn",oCa="Baal's Eye",rCa="Mephisto's Brain",cCa="Standard of Heroes",dCa="Lilith",uCa=`Right-click to reset Stat/Skill Points