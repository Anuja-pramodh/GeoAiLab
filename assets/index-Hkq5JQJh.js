(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ks={exports:{}},bi={},Xs={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Od=Symbol.for("react.portal"),Bd=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),$d=Symbol.for("react.context"),Vd=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),Qd=Symbol.for("react.memo"),Yd=Symbol.for("react.lazy"),Pa=Symbol.iterator;function Kd(e){return e===null||typeof e!="object"?null:(e=Pa&&e[Pa]||e["@@iterator"],typeof e=="function"?e:null)}var qs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zs=Object.assign,Js={};function xn(e,t,n){this.props=e,this.context=t,this.refs=Js,this.updater=n||qs}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eu(){}eu.prototype=xn.prototype;function No(e,t,n){this.props=e,this.context=t,this.refs=Js,this.updater=n||qs}var Fo=No.prototype=new eu;Fo.constructor=No;Zs(Fo,xn.prototype);Fo.isPureReactComponent=!0;var za=Array.isArray,tu=Object.prototype.hasOwnProperty,Ro={current:null},nu={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)tu.call(t,r)&&!nu.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:pr,type:e,key:l,ref:o,props:i,_owner:Ro.current}}function Xd(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bo(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function qd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Aa=/\/+/g;function Ji(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qd(""+e.key):t.toString(36)}function Wr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case pr:case Od:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ji(o,0):r,za(i)?(n="",e!=null&&(n=e.replace(Aa,"$&/")+"/"),Wr(i,t,n,"",function(c){return c})):i!=null&&(bo(i)&&(i=Xd(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Aa,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",za(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Ji(l,s);o+=Wr(l,t,n,u,i)}else if(u=Kd(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Ji(l,s++),o+=Wr(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function _r(e,t,n){if(e==null)return e;var r=[],i=0;return Wr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},$r={transition:null},Jd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:$r,ReactCurrentOwner:Ro};function iu(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:_r,forEach:function(e,t,n){_r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _r(e,function(){t++}),t},toArray:function(e){return _r(e,function(t){return t})||[]},only:function(e){if(!bo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=xn;A.Fragment=Bd;A.Profiler=Hd;A.PureComponent=No;A.StrictMode=Ud;A.Suspense=Gd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jd;A.act=iu;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zs({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Ro.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)tu.call(t,u)&&!nu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:pr,type:e.type,key:i,ref:l,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:$d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wd,_context:e},e.Consumer=e};A.createElement=ru;A.createFactory=function(e){var t=ru.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Vd,render:e}};A.isValidElement=bo;A.lazy=function(e){return{$$typeof:Yd,_payload:{_status:-1,_result:e},_init:Zd}};A.memo=function(e,t){return{$$typeof:Qd,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=$r.transition;$r.transition={};try{e()}finally{$r.transition=t}};A.unstable_act=iu;A.useCallback=function(e,t){return de.current.useCallback(e,t)};A.useContext=function(e){return de.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return de.current.useDeferredValue(e)};A.useEffect=function(e,t){return de.current.useEffect(e,t)};A.useId=function(){return de.current.useId()};A.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return de.current.useMemo(e,t)};A.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};A.useRef=function(e){return de.current.useRef(e)};A.useState=function(e){return de.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return de.current.useTransition()};A.version="18.3.1";Xs.exports=A;var v=Xs.exports;const ef=Md(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=v,nf=Symbol.for("react.element"),rf=Symbol.for("react.fragment"),lf=Object.prototype.hasOwnProperty,of=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,af={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)lf.call(t,r)&&!af.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:nf,type:e,key:l,ref:o,props:i,_owner:of.current}}bi.Fragment=rf;bi.jsx=lu;bi.jsxs=lu;Ks.exports=bi;var a=Ks.exports,ou={exports:{}},_e={},au={exports:{}},su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,L){var z=F.length;F.push(L);e:for(;0<z;){var Q=z-1>>>1,J=F[Q];if(0<i(J,L))F[Q]=L,F[z]=J,z=Q;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var L=F[0],z=F.pop();if(z!==L){F[0]=z;e:for(var Q=0,J=F.length,kr=J>>>1;Q<kr;){var Rt=2*(Q+1)-1,Zi=F[Rt],bt=Rt+1,Sr=F[bt];if(0>i(Zi,z))bt<J&&0>i(Sr,Zi)?(F[Q]=Sr,F[bt]=z,Q=bt):(F[Q]=Zi,F[Rt]=z,Q=Rt);else if(bt<J&&0>i(Sr,z))F[Q]=Sr,F[bt]=z,Q=bt;else break e}}return L}function i(F,L){var z=F.sortIndex-L.sortIndex;return z!==0?z:F.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],p=1,m=null,g=3,y=!1,w=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(F){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=F)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function k(F){if(x=!1,h(F),!w)if(n(u)!==null)w=!0,Xi(_);else{var L=n(c);L!==null&&qi(k,L.startTime-F)}}function _(F,L){w=!1,x&&(x=!1,f(R),R=-1),y=!0;var z=g;try{for(h(L),m=n(u);m!==null&&(!(m.expirationTime>L)||F&&!ye());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,g=m.priorityLevel;var J=Q(m.expirationTime<=L);L=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(u)&&r(u),h(L)}else r(u);m=n(u)}if(m!==null)var kr=!0;else{var Rt=n(c);Rt!==null&&qi(k,Rt.startTime-L),kr=!1}return kr}finally{m=null,g=z,y=!1}}var E=!1,C=null,R=-1,T=5,P=-1;function ye(){return!(e.unstable_now()-P<T)}function Ft(){if(C!==null){var F=e.unstable_now();P=F;var L=!0;try{L=C(!0,F)}finally{L?at():(E=!1,C=null)}}else E=!1}var at;if(typeof d=="function")at=function(){d(Ft)};else if(typeof MessageChannel<"u"){var jn=new MessageChannel,He=jn.port2;jn.port1.onmessage=Ft,at=function(){He.postMessage(null)}}else at=function(){j(Ft,0)};function Xi(F){C=F,E||(E=!0,at())}function qi(F,L){R=j(function(){F(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Xi(_))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var z=g;g=L;try{return F()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,L){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var z=g;g=F;try{return L()}finally{g=z}},e.unstable_scheduleCallback=function(F,L,z){var Q=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Q+z:Q):z=Q,F){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=z+J,F={id:p++,callback:L,priorityLevel:F,startTime:z,expirationTime:J,sortIndex:-1},z>Q?(F.sortIndex=z,t(c,F),n(u)===null&&F===n(c)&&(x?(f(R),R=-1):x=!0,qi(k,z-Q))):(F.sortIndex=J,t(u,F),w||y||(w=!0,Xi(_))),F},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(F){var L=g;return function(){var z=g;g=L;try{return F.apply(this,arguments)}finally{g=z}}}})(su);au.exports=su;var sf=au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf=v,Se=sf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uu=new Set,Yn={};function $t(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)uu.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=Object.prototype.hasOwnProperty,cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ia={},Da={};function df(e){return Pl.call(Da,e)?!0:Pl.call(Ia,e)?!1:cf.test(e)?Da[e]=!0:(Ia[e]=!0,!1)}function ff(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pf(e,t,n,r){if(t===null||typeof t>"u"||ff(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lo=/[\-:]([a-z])/g;function Po(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lo,Po);ie[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lo,Po);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lo,Po);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zo(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pf(t,n,i,r)&&(n=null),r||i===null?df(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ao=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),cu=Symbol.for("react.provider"),du=Symbol.for("react.context"),Io=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),Do=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),fu=Symbol.for("react.offscreen"),Ta=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,el;function An(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?An(e):""}function mf(e){switch(e.tag){case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Qt:return"Portal";case zl:return"Profiler";case Ao:return"StrictMode";case Al:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case du:return(e.displayName||"Context")+".Consumer";case cu:return(e._context.displayName||"Context")+".Provider";case Io:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Do:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function hf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===Ao?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gf(e){var t=pu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=gf(e))}function mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hu(e,t){t=t.checked,t!=null&&zo(e,"checked",t,!1)}function Ml(e,t){hu(e,t);var n=_t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ol(e,t.type,_t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ol(e,t,n){(t!=="number"||ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(In(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_t(n)}}function gu(e,t){var n=_t(t.value),r=_t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,yu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vf=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){vf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function wu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(yf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function To(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,an=null,sn=null;function Ha(e){if(e=gr(e)){if(typeof Vl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ii(t),Vl(e.stateNode,e.type,t))}}function ku(e){an?sn?sn.push(e):sn=[e]:an=e}function Su(){if(an){var e=an,t=sn;if(sn=an=null,Ha(e),t)for(e=0;e<t.length;e++)Ha(t[e])}}function _u(e,t){return e(t)}function ju(){}var rl=!1;function Eu(e,t,n){if(rl)return e(t,n);rl=!0;try{return _u(e,t,n)}finally{rl=!1,(an!==null||sn!==null)&&(ju(),Su())}}function Xn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Gl=!1;if(et)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Gl=!1}function xf(e,t,n,r,i,l,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Bn=!1,li=null,oi=!1,Ql=null,wf={onError:function(e){Bn=!0,li=e}};function kf(e,t,n,r,i,l,o,s,u){Bn=!1,li=null,xf.apply(wf,arguments)}function Sf(e,t,n,r,i,l,o,s,u){if(kf.apply(this,arguments),Bn){if(Bn){var c=li;Bn=!1,li=null}else throw Error(S(198));oi||(oi=!0,Ql=c)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wa(e){if(Vt(e)!==e)throw Error(S(188))}function _f(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Wa(i),e;if(l===r)return Wa(i),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Nu(e){return e=_f(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fu(e);if(t!==null)return t;e=e.sibling}return null}var Ru=Se.unstable_scheduleCallback,$a=Se.unstable_cancelCallback,jf=Se.unstable_shouldYield,Ef=Se.unstable_requestPaint,Y=Se.unstable_now,Cf=Se.unstable_getCurrentPriorityLevel,Mo=Se.unstable_ImmediatePriority,bu=Se.unstable_UserBlockingPriority,ai=Se.unstable_NormalPriority,Nf=Se.unstable_LowPriority,Lu=Se.unstable_IdlePriority,Li=null,Ge=null;function Ff(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Li,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Lf,Rf=Math.log,bf=Math.LN2;function Lf(e){return e>>>=0,e===0?32:31-(Rf(e)/bf|0)|0}var Nr=64,Fr=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Dn(s):(l&=o,l!==0&&(r=Dn(l)))}else o=n&~i,o!==0?r=Dn(o):l!==0&&(r=Dn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),i=1<<n,r|=e[n],t&=~i;return r}function Pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Te(l),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=Pf(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pu(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function Af(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Te(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Oo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Au,Bo,Iu,Du,Tu,Kl=!1,Rr=[],ht=null,gt=null,vt=null,qn=new Map,Zn=new Map,dt=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Va(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function Nn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=gr(t),t!==null&&Bo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Df(e,t,n,r,i){switch(t){case"focusin":return ht=Nn(ht,e,t,n,r,i),!0;case"dragenter":return gt=Nn(gt,e,t,n,r,i),!0;case"mouseover":return vt=Nn(vt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return qn.set(l,Nn(qn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Zn.set(l,Nn(Zn.get(l)||null,e,t,n,r,i)),!0}return!1}function Mu(e){var t=zt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=Cu(n),t!==null){e.blockedOn=t,Tu(e.priority,function(){Iu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$l=r,n.target.dispatchEvent(r),$l=null}else return t=gr(n),t!==null&&Bo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ga(e,t,n){Vr(e)&&n.delete(t)}function Tf(){Kl=!1,ht!==null&&Vr(ht)&&(ht=null),gt!==null&&Vr(gt)&&(gt=null),vt!==null&&Vr(vt)&&(vt=null),qn.forEach(Ga),Zn.forEach(Ga)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,Kl||(Kl=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Tf)))}function Jn(e){function t(i){return Fn(i,e)}if(0<Rr.length){Fn(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&Fn(ht,e),gt!==null&&Fn(gt,e),vt!==null&&Fn(vt,e),qn.forEach(t),Zn.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)Mu(n),n.blockedOn===null&&dt.shift()}var un=lt.ReactCurrentBatchConfig,ui=!0;function Mf(e,t,n,r){var i=D,l=un.transition;un.transition=null;try{D=1,Uo(e,t,n,r)}finally{D=i,un.transition=l}}function Of(e,t,n,r){var i=D,l=un.transition;un.transition=null;try{D=4,Uo(e,t,n,r)}finally{D=i,un.transition=l}}function Uo(e,t,n,r){if(ui){var i=Xl(e,t,n,r);if(i===null)ml(e,t,r,ci,n),Va(e,r);else if(Df(i,e,t,n,r))r.stopPropagation();else if(Va(e,r),t&4&&-1<If.indexOf(e)){for(;i!==null;){var l=gr(i);if(l!==null&&Au(l),l=Xl(e,t,n,r),l===null&&ml(e,t,r,ci,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else ml(e,t,r,null,n)}}var ci=null;function Xl(e,t,n,r){if(ci=null,e=To(r),e=zt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ci=e,null}function Ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cf()){case Mo:return 1;case bu:return 4;case ai:case Nf:return 16;case Lu:return 536870912;default:return 16}default:return 16}}var pt=null,Ho=null,Gr=null;function Bu(){if(Gr)return Gr;var e,t=Ho,n=t.length,r,i="value"in pt?pt.value:pt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Gr=i.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Qa(){return!1}function je(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?br:Qa,this.isPropagationStopped=Qa,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=je(wn),hr=V({},wn,{view:0,detail:0}),Bf=je(hr),ll,ol,Rn,Pi=V({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(ll=e.screenX-Rn.screenX,ol=e.screenY-Rn.screenY):ol=ll=0,Rn=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Ya=je(Pi),Uf=V({},Pi,{dataTransfer:0}),Hf=je(Uf),Wf=V({},hr,{relatedTarget:0}),al=je(Wf),$f=V({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vf=je($f),Gf=V({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qf=je(Gf),Yf=V({},wn,{data:0}),Ka=je(Yf),Kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qf[e])?!!t[e]:!1}function $o(){return Zf}var Jf=V({},hr,{key:function(e){if(e.key){var t=Kf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$o,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ep=je(Jf),tp=V({},Pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=je(tp),np=V({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$o}),rp=je(np),ip=V({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lp=je(ip),op=V({},Pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ap=je(op),sp=[9,13,27,32],Vo=et&&"CompositionEvent"in window,Un=null;et&&"documentMode"in document&&(Un=document.documentMode);var up=et&&"TextEvent"in window&&!Un,Uu=et&&(!Vo||Un&&8<Un&&11>=Un),qa=" ",Za=!1;function Hu(e,t){switch(e){case"keyup":return sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function cp(e,t){switch(e){case"compositionend":return Wu(t);case"keypress":return t.which!==32?null:(Za=!0,qa);case"textInput":return e=t.data,e===qa&&Za?null:e;default:return null}}function dp(e,t){if(Kt)return e==="compositionend"||!Vo&&Hu(e,t)?(e=Bu(),Gr=Ho=pt=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uu&&t.locale!=="ko"?null:t.data;default:return null}}var fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fp[e.type]:t==="textarea"}function $u(e,t,n,r){ku(r),t=di(t,"onChange"),0<t.length&&(n=new Wo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,er=null;function pp(e){tc(e,0)}function zi(e){var t=Zt(e);if(mu(t))return e}function mp(e,t){if(e==="change")return t}var Vu=!1;if(et){var sl;if(et){var ul="oninput"in document;if(!ul){var es=document.createElement("div");es.setAttribute("oninput","return;"),ul=typeof es.oninput=="function"}sl=ul}else sl=!1;Vu=sl&&(!document.documentMode||9<document.documentMode)}function ts(){Hn&&(Hn.detachEvent("onpropertychange",Gu),er=Hn=null)}function Gu(e){if(e.propertyName==="value"&&zi(er)){var t=[];$u(t,er,e,To(e)),Eu(pp,t)}}function hp(e,t,n){e==="focusin"?(ts(),Hn=t,er=n,Hn.attachEvent("onpropertychange",Gu)):e==="focusout"&&ts()}function gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(er)}function vp(e,t){if(e==="click")return zi(t)}function yp(e,t){if(e==="input"||e==="change")return zi(t)}function xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:xp;function tr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pl.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var n=ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ns(n)}}function Qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yu(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ii(e.document)}return t}function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wp(e){var t=Yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qu(n.ownerDocument.documentElement,n)){if(r!==null&&Go(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=rs(n,l);var o=rs(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kp=et&&"documentMode"in document&&11>=document.documentMode,Xt=null,ql=null,Wn=null,Zl=!1;function is(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zl||Xt==null||Xt!==ii(r)||(r=Xt,"selectionStart"in r&&Go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&tr(Wn,r)||(Wn=r,r=di(ql,"onSelect"),0<r.length&&(t=new Wo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},cl={},Ku={};et&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function Ai(e){if(cl[e])return cl[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ku)return cl[e]=t[n];return e}var Xu=Ai("animationend"),qu=Ai("animationiteration"),Zu=Ai("animationstart"),Ju=Ai("transitionend"),ec=new Map,ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){ec.set(e,t),$t(t,[e])}for(var dl=0;dl<ls.length;dl++){var fl=ls[dl],Sp=fl.toLowerCase(),_p=fl[0].toUpperCase()+fl.slice(1);Et(Sp,"on"+_p)}Et(Xu,"onAnimationEnd");Et(qu,"onAnimationIteration");Et(Zu,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(Ju,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function os(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sf(r,t,void 0,e),e.currentTarget=null}function tc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;os(i,s,c),l=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;os(i,s,c),l=u}}}if(oi)throw e=Ql,oi=!1,Ql=null,e}function O(e,t){var n=t[ro];n===void 0&&(n=t[ro]=new Set);var r=e+"__bubble";n.has(r)||(nc(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),nc(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Pr]){e[Pr]=!0,uu.forEach(function(n){n!=="selectionchange"&&(jp.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,pl("selectionchange",!1,t))}}function nc(e,t,n,r){switch(Ou(t)){case 1:var i=Mf;break;case 4:i=Of;break;default:i=Uo}n=i.bind(null,t,n,e),i=void 0,!Gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ml(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=zt(s),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Eu(function(){var c=l,p=To(n),m=[];e:{var g=ec.get(e);if(g!==void 0){var y=Wo,w=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":y=ep;break;case"focusin":w="focus",y=al;break;case"focusout":w="blur",y=al;break;case"beforeblur":case"afterblur":y=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Hf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=rp;break;case Xu:case qu:case Zu:y=Vf;break;case Ju:y=lp;break;case"scroll":y=Bf;break;case"wheel":y=ap;break;case"copy":case"cut":case"paste":y=Qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Xa}var x=(t&4)!==0,j=!x&&e==="scroll",f=x?g!==null?g+"Capture":null:g;x=[];for(var d=c,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=Xn(d,f),k!=null&&x.push(rr(d,k,h)))),j)break;d=d.return}0<x.length&&(g=new y(g,w,null,n,p),m.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==$l&&(w=n.relatedTarget||n.fromElement)&&(zt(w)||w[tt]))break e;if((y||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?zt(w):null,w!==null&&(j=Vt(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(x=Ya,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xa,k="onPointerLeave",f="onPointerEnter",d="pointer"),j=y==null?g:Zt(y),h=w==null?g:Zt(w),g=new x(k,d+"leave",y,n,p),g.target=j,g.relatedTarget=h,k=null,zt(p)===c&&(x=new x(f,d+"enter",w,n,p),x.target=h,x.relatedTarget=j,k=x),j=k,y&&w)t:{for(x=y,f=w,d=0,h=x;h;h=Gt(h))d++;for(h=0,k=f;k;k=Gt(k))h++;for(;0<d-h;)x=Gt(x),d--;for(;0<h-d;)f=Gt(f),h--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break t;x=Gt(x),f=Gt(f)}x=null}else x=null;y!==null&&as(m,g,y,x,!1),w!==null&&j!==null&&as(m,j,w,x,!0)}}e:{if(g=c?Zt(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var _=mp;else if(Ja(g))if(Vu)_=yp;else{_=gp;var E=hp}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=vp);if(_&&(_=_(e,c))){$u(m,_,n,p);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Ol(g,"number",g.value)}switch(E=c?Zt(c):window,e){case"focusin":(Ja(E)||E.contentEditable==="true")&&(Xt=E,ql=c,Wn=null);break;case"focusout":Wn=ql=Xt=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,is(m,n,p);break;case"selectionchange":if(kp)break;case"keydown":case"keyup":is(m,n,p)}var C;if(Vo)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Kt?Hu(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Uu&&n.locale!=="ko"&&(Kt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Kt&&(C=Bu()):(pt=p,Ho="value"in pt?pt.value:pt.textContent,Kt=!0)),E=di(c,R),0<E.length&&(R=new Ka(R,e,null,n,p),m.push({event:R,listeners:E}),C?R.data=C:(C=Wu(n),C!==null&&(R.data=C)))),(C=up?cp(e,n):dp(e,n))&&(c=di(c,"onBeforeInput"),0<c.length&&(p=new Ka("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=C))}tc(m,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Xn(e,n),l!=null&&r.unshift(rr(e,l,i)),l=Xn(e,t),l!=null&&r.push(rr(e,l,i))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function as(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Xn(n,l),u!=null&&o.unshift(rr(n,u,s))):i||(u=Xn(n,l),u!=null&&o.push(rr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ep=/\r\n?/g,Cp=/\u0000|\uFFFD/g;function ss(e){return(typeof e=="string"?e:""+e).replace(Ep,`
`).replace(Cp,"")}function zr(e,t,n){if(t=ss(t),ss(e)!==t&&n)throw Error(S(425))}function fi(){}var Jl=null,eo=null;function to(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var no=typeof setTimeout=="function"?setTimeout:void 0,Np=typeof clearTimeout=="function"?clearTimeout:void 0,us=typeof Promise=="function"?Promise:void 0,Fp=typeof queueMicrotask=="function"?queueMicrotask:typeof us<"u"?function(e){return us.resolve(null).then(e).catch(Rp)}:no;function Rp(e){setTimeout(function(){throw e})}function hl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+kn,ir="__reactProps$"+kn,tt="__reactContainer$"+kn,ro="__reactEvents$"+kn,bp="__reactListeners$"+kn,Lp="__reactHandles$"+kn;function zt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cs(e);e!==null;){if(n=e[Ve])return n;e=cs(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[Ve]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ii(e){return e[ir]||null}var io=[],Jt=-1;function Ct(e){return{current:e}}function B(e){0>Jt||(e.current=io[Jt],io[Jt]=null,Jt--)}function M(e,t){Jt++,io[Jt]=e.current,e.current=t}var jt={},se=Ct(jt),he=Ct(!1),Ot=jt;function pn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function pi(){B(he),B(se)}function ds(e,t,n){if(se.current!==jt)throw Error(S(168));M(se,t),M(he,n)}function rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,hf(e)||"Unknown",i));return V({},n,r)}function mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,Ot=se.current,M(se,e),M(he,he.current),!0}function fs(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=rc(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,B(he),B(se),M(se,e)):B(he),M(he,n)}var Xe=null,Di=!1,gl=!1;function ic(e){Xe===null?Xe=[e]:Xe.push(e)}function Pp(e){Di=!0,ic(e)}function Nt(){if(!gl&&Xe!==null){gl=!0;var e=0,t=D;try{var n=Xe;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,Di=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),Ru(Mo,Nt),i}finally{D=t,gl=!1}}return null}var en=[],tn=0,hi=null,gi=0,Ce=[],Ne=0,Bt=null,qe=1,Ze="";function Lt(e,t){en[tn++]=gi,en[tn++]=hi,hi=e,gi=t}function lc(e,t,n){Ce[Ne++]=qe,Ce[Ne++]=Ze,Ce[Ne++]=Bt,Bt=e;var r=qe;e=Ze;var i=32-Te(r)-1;r&=~(1<<i),n+=1;var l=32-Te(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qe=1<<32-Te(t)+i|n<<i|r,Ze=l+e}else qe=1<<l|n<<i|r,Ze=e}function Qo(e){e.return!==null&&(Lt(e,1),lc(e,1,0))}function Yo(e){for(;e===hi;)hi=en[--tn],en[tn]=null,gi=en[--tn],en[tn]=null;for(;e===Bt;)Bt=Ce[--Ne],Ce[Ne]=null,Ze=Ce[--Ne],Ce[Ne]=null,qe=Ce[--Ne],Ce[Ne]=null}var ke=null,we=null,U=!1,De=null;function oc(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ps(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:qe,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oo(e){if(U){var t=we;if(t){var n=t;if(!ps(e,t)){if(lo(e))throw Error(S(418));t=yt(n.nextSibling);var r=ke;t&&ps(e,t)?oc(r,n):(e.flags=e.flags&-4097|2,U=!1,ke=e)}}else{if(lo(e))throw Error(S(418));e.flags=e.flags&-4097|2,U=!1,ke=e}}}function ms(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Ar(e){if(e!==ke)return!1;if(!U)return ms(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!to(e.type,e.memoizedProps)),t&&(t=we)){if(lo(e))throw ac(),Error(S(418));for(;t;)oc(e,t),t=yt(t.nextSibling)}if(ms(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?yt(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=we;e;)e=yt(e.nextSibling)}function mn(){we=ke=null,U=!1}function Ko(e){De===null?De=[e]:De.push(e)}var zp=lt.ReactCurrentBatchConfig;function bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ir(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hs(e){var t=e._init;return t(e._payload)}function sc(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=St(f,d),f.index=0,f.sibling=null,f}function l(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,k){return d===null||d.tag!==6?(d=_l(h,f.mode,k),d.return=f,d):(d=i(d,h),d.return=f,d)}function u(f,d,h,k){var _=h.type;return _===Yt?p(f,d,h.props.children,k,h.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ut&&hs(_)===d.type)?(k=i(d,h.props),k.ref=bn(f,d,h),k.return=f,k):(k=ei(h.type,h.key,h.props,null,f.mode,k),k.ref=bn(f,d,h),k.return=f,k)}function c(f,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=jl(h,f.mode,k),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function p(f,d,h,k,_){return d===null||d.tag!==7?(d=Mt(h,f.mode,k,_),d.return=f,d):(d=i(d,h),d.return=f,d)}function m(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=_l(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case jr:return h=ei(d.type,d.key,d.props,null,f.mode,h),h.ref=bn(f,null,d),h.return=f,h;case Qt:return d=jl(d,f.mode,h),d.return=f,d;case ut:var k=d._init;return m(f,k(d._payload),h)}if(In(d)||En(d))return d=Mt(d,f.mode,h,null),d.return=f,d;Ir(f,d)}return null}function g(f,d,h,k){var _=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:s(f,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case jr:return h.key===_?u(f,d,h,k):null;case Qt:return h.key===_?c(f,d,h,k):null;case ut:return _=h._init,g(f,d,_(h._payload),k)}if(In(h)||En(h))return _!==null?null:p(f,d,h,k,null);Ir(f,h)}return null}function y(f,d,h,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,s(d,f,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case jr:return f=f.get(k.key===null?h:k.key)||null,u(d,f,k,_);case Qt:return f=f.get(k.key===null?h:k.key)||null,c(d,f,k,_);case ut:var E=k._init;return y(f,d,h,E(k._payload),_)}if(In(k)||En(k))return f=f.get(h)||null,p(d,f,k,_,null);Ir(d,k)}return null}function w(f,d,h,k){for(var _=null,E=null,C=d,R=d=0,T=null;C!==null&&R<h.length;R++){C.index>R?(T=C,C=null):T=C.sibling;var P=g(f,C,h[R],k);if(P===null){C===null&&(C=T);break}e&&C&&P.alternate===null&&t(f,C),d=l(P,d,R),E===null?_=P:E.sibling=P,E=P,C=T}if(R===h.length)return n(f,C),U&&Lt(f,R),_;if(C===null){for(;R<h.length;R++)C=m(f,h[R],k),C!==null&&(d=l(C,d,R),E===null?_=C:E.sibling=C,E=C);return U&&Lt(f,R),_}for(C=r(f,C);R<h.length;R++)T=y(C,f,R,h[R],k),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?R:T.key),d=l(T,d,R),E===null?_=T:E.sibling=T,E=T);return e&&C.forEach(function(ye){return t(f,ye)}),U&&Lt(f,R),_}function x(f,d,h,k){var _=En(h);if(typeof _!="function")throw Error(S(150));if(h=_.call(h),h==null)throw Error(S(151));for(var E=_=null,C=d,R=d=0,T=null,P=h.next();C!==null&&!P.done;R++,P=h.next()){C.index>R?(T=C,C=null):T=C.sibling;var ye=g(f,C,P.value,k);if(ye===null){C===null&&(C=T);break}e&&C&&ye.alternate===null&&t(f,C),d=l(ye,d,R),E===null?_=ye:E.sibling=ye,E=ye,C=T}if(P.done)return n(f,C),U&&Lt(f,R),_;if(C===null){for(;!P.done;R++,P=h.next())P=m(f,P.value,k),P!==null&&(d=l(P,d,R),E===null?_=P:E.sibling=P,E=P);return U&&Lt(f,R),_}for(C=r(f,C);!P.done;R++,P=h.next())P=y(C,f,R,P.value,k),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?R:P.key),d=l(P,d,R),E===null?_=P:E.sibling=P,E=P);return e&&C.forEach(function(Ft){return t(f,Ft)}),U&&Lt(f,R),_}function j(f,d,h,k){if(typeof h=="object"&&h!==null&&h.type===Yt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case jr:e:{for(var _=h.key,E=d;E!==null;){if(E.key===_){if(_=h.type,_===Yt){if(E.tag===7){n(f,E.sibling),d=i(E,h.props.children),d.return=f,f=d;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ut&&hs(_)===E.type){n(f,E.sibling),d=i(E,h.props),d.ref=bn(f,E,h),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}h.type===Yt?(d=Mt(h.props.children,f.mode,k,h.key),d.return=f,f=d):(k=ei(h.type,h.key,h.props,null,f.mode,k),k.ref=bn(f,d,h),k.return=f,f=k)}return o(f);case Qt:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=jl(h,f.mode,k),d.return=f,f=d}return o(f);case ut:return E=h._init,j(f,d,E(h._payload),k)}if(In(h))return w(f,d,h,k);if(En(h))return x(f,d,h,k);Ir(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,h),d.return=f,f=d):(n(f,d),d=_l(h,f.mode,k),d.return=f,f=d),o(f)):n(f,d)}return j}var hn=sc(!0),uc=sc(!1),vi=Ct(null),yi=null,nn=null,Xo=null;function qo(){Xo=nn=yi=null}function Zo(e){var t=vi.current;B(vi),e._currentValue=t}function ao(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){yi=e,Xo=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(Xo!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(yi===null)throw Error(S(308));nn=e,yi.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var At=null;function Jo(e){At===null?At=[e]:At.push(e)}function cc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Jo(t)):(n.next=i.next,i.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nt(e,n)}return i=r.interleaved,i===null?(t.next=t,Jo(r)):(t.next=i.next,i.next=t),r.interleaved=t,nt(e,n)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oo(e,n)}}function gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xi(e,t,n,r){var i=e.updateQueue;ct=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?l=c:o.next=c,o=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==o&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=u))}if(l!==null){var m=i.baseState;o=0,p=c=u=null,s=l;do{var g=s.lane,y=s.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,x=s;switch(g=t,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){m=w.call(y,m,g);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,g=typeof w=="function"?w.call(y,m,g):w,g==null)break e;m=V({},m,g);break e;case 2:ct=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=y,u=m):p=p.next=y,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Ht|=o,e.lanes=o,e.memoizedState=m}}function vs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var vr={},Qe=Ct(vr),lr=Ct(vr),or=Ct(vr);function It(e){if(e===vr)throw Error(S(174));return e}function ta(e,t){switch(M(or,t),M(lr,e),M(Qe,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}B(Qe),M(Qe,t)}function gn(){B(Qe),B(lr),B(or)}function fc(e){It(or.current);var t=It(Qe.current),n=Ul(t,e.type);t!==n&&(M(lr,e),M(Qe,n))}function na(e){lr.current===e&&(B(Qe),B(lr))}var H=Ct(0);function wi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function ra(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var Kr=lt.ReactCurrentDispatcher,yl=lt.ReactCurrentBatchConfig,Ut=0,W=null,q=null,ee=null,ki=!1,$n=!1,ar=0,Ap=0;function le(){throw Error(S(321))}function ia(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function la(e,t,n,r,i,l){if(Ut=l,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kr.current=e===null||e.memoizedState===null?Mp:Op,e=n(r,i),$n){l=0;do{if($n=!1,ar=0,25<=l)throw Error(S(301));l+=1,ee=q=null,t.updateQueue=null,Kr.current=Bp,e=n(r,i)}while($n)}if(Kr.current=Si,t=q!==null&&q.next!==null,Ut=0,ee=q=W=null,ki=!1,t)throw Error(S(300));return e}function oa(){var e=ar!==0;return ar=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Le(){if(q===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,q=e;else{if(e===null)throw Error(S(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function sr(e,t){return typeof t=="function"?t(e):t}function xl(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=q,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,u=null,c=l;do{var p=c.lane;if((Ut&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,o=r):u=u.next=m,W.lanes|=p,Ht|=p}c=c.next}while(c!==null&&c!==l);u===null?o=r:u.next=s,Be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,W.lanes|=l,Ht|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wl(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Be(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function pc(){}function mc(e,t){var n=W,r=Le(),i=t(),l=!Be(r.memoizedState,i);if(l&&(r.memoizedState=i,me=!0),r=r.queue,aa(vc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ur(9,gc.bind(null,n,r,i,t),void 0,null),te===null)throw Error(S(349));Ut&30||hc(n,t,i)}return i}function hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gc(e,t,n,r){t.value=n,t.getSnapshot=r,yc(t)&&xc(e)}function vc(e,t,n){return n(function(){yc(t)&&xc(e)})}function yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function xc(e){var t=nt(e,1);t!==null&&Me(t,e,1,-1)}function ys(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=Tp.bind(null,W,e),[t.memoizedState,e]}function ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wc(){return Le().memoizedState}function Xr(e,t,n,r){var i=$e();W.flags|=e,i.memoizedState=ur(1|t,n,void 0,r===void 0?null:r)}function Ti(e,t,n,r){var i=Le();r=r===void 0?null:r;var l=void 0;if(q!==null){var o=q.memoizedState;if(l=o.destroy,r!==null&&ia(r,o.deps)){i.memoizedState=ur(t,n,l,r);return}}W.flags|=e,i.memoizedState=ur(1|t,n,l,r)}function xs(e,t){return Xr(8390656,8,e,t)}function aa(e,t){return Ti(2048,8,e,t)}function kc(e,t){return Ti(4,2,e,t)}function Sc(e,t){return Ti(4,4,e,t)}function _c(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jc(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4,4,_c.bind(null,t,e),n)}function sa(){}function Ec(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nc(e,t,n){return Ut&21?(Be(n,t)||(n=Pu(),W.lanes|=n,Ht|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Ip(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{D=n,yl.transition=r}}function Fc(){return Le().memoizedState}function Dp(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rc(e))bc(t,n);else if(n=cc(e,t,n,r),n!==null){var i=ce();Me(n,e,r,i),Lc(n,t,r)}}function Tp(e,t,n){var r=kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rc(e))bc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Be(s,o)){var u=t.interleaved;u===null?(i.next=i,Jo(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=cc(e,t,i,r),n!==null&&(i=ce(),Me(n,e,r,i),Lc(n,t,r))}}function Rc(e){var t=e.alternate;return e===W||t!==null&&t===W}function bc(e,t){$n=ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oo(e,n)}}var Si={readContext:be,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Mp={readContext:be,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:xs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4194308,4,_c.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xr(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dp.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:ys,useDebugValue:sa,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=ys(!1),t=e[0];return e=Ip.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=$e();if(U){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),te===null)throw Error(S(349));Ut&30||hc(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,xs(vc.bind(null,r,l,e),[e]),r.flags|=2048,ur(9,gc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=$e(),t=te.identifierPrefix;if(U){var n=Ze,r=qe;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ap++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Op={readContext:be,useCallback:Ec,useContext:be,useEffect:aa,useImperativeHandle:jc,useInsertionEffect:kc,useLayoutEffect:Sc,useMemo:Cc,useReducer:xl,useRef:wc,useState:function(){return xl(sr)},useDebugValue:sa,useDeferredValue:function(e){var t=Le();return Nc(t,q.memoizedState,e)},useTransition:function(){var e=xl(sr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:mc,useId:Fc,unstable_isNewReconciler:!1},Bp={readContext:be,useCallback:Ec,useContext:be,useEffect:aa,useImperativeHandle:jc,useInsertionEffect:kc,useLayoutEffect:Sc,useMemo:Cc,useReducer:wl,useRef:wc,useState:function(){return wl(sr)},useDebugValue:sa,useDeferredValue:function(e){var t=Le();return q===null?t.memoizedState=e:Nc(t,q.memoizedState,e)},useTransition:function(){var e=wl(sr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:pc,useSyncExternalStore:mc,useId:Fc,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function so(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mi={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=kt(e),l=Je(r,i);l.payload=t,n!=null&&(l.callback=n),t=xt(e,l,i),t!==null&&(Me(t,e,i,r),Yr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=kt(e),l=Je(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=xt(e,l,i),t!==null&&(Me(t,e,i,r),Yr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=kt(e),i=Je(n,r);i.tag=2,t!=null&&(i.callback=t),t=xt(e,i,r),t!==null&&(Me(t,e,r,n),Yr(t,e,r))}};function ws(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(i,l):!0}function Pc(e,t,n){var r=!1,i=jt,l=t.contextType;return typeof l=="object"&&l!==null?l=be(l):(i=ge(t)?Ot:se.current,r=t.contextTypes,l=(r=r!=null)?pn(e,i):jt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mi.enqueueReplaceState(t,t.state,null)}function uo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ea(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=be(l):(l=ge(t)?Ot:se.current,i.context=pn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(so(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mi.enqueueReplaceState(i,i.state,null),xi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=mf(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function co(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Up=typeof WeakMap=="function"?WeakMap:Map;function zc(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ji||(ji=!0,ko=r),co(e,t)},n}function Ac(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){co(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){co(e,t),typeof r!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ss(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Up;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=tm.bind(null,e,t,n),t.then(e,e))}function _s(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function js(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var Hp=lt.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?uc(t,null,n,r):hn(t,e.child,n,r)}function Es(e,t,n,r,i){n=n.render;var l=t.ref;return cn(t,i),r=la(e,t,n,r,l,i),n=oa(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(U&&n&&Qo(t),t.flags|=1,ue(e,t,r,i),t.child)}function Cs(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!ga(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ic(e,t,l,r,i)):(e=ei(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(o,r)&&e.ref===t.ref)return rt(e,t,i)}return t.flags|=1,e=St(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ic(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(tr(l,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,rt(e,t,i)}return fo(e,t,n,r,i)}function Dc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(ln,xe),xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(ln,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,M(ln,xe),xe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,M(ln,xe),xe|=r;return ue(e,t,i,n),t.child}function Tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fo(e,t,n,r,i){var l=ge(n)?Ot:se.current;return l=pn(t,l),cn(t,i),n=la(e,t,n,r,l,i),r=oa(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(U&&r&&Qo(t),t.flags|=1,ue(e,t,n,i),t.child)}function Ns(e,t,n,r,i){if(ge(n)){var l=!0;mi(t)}else l=!1;if(cn(t,i),t.stateNode===null)qr(e,t),Pc(t,n,r),uo(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=be(c):(c=ge(n)?Ot:se.current,c=pn(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&ks(t,o,r,c),ct=!1;var g=t.memoizedState;o.state=g,xi(t,r,o,i),u=t.memoizedState,s!==r||g!==u||he.current||ct?(typeof p=="function"&&(so(t,n,p,r),u=t.memoizedState),(s=ct||ws(t,n,s,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,dc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ae(t.type,s),o.props=c,m=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=be(u):(u=ge(n)?Ot:se.current,u=pn(t,u));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||g!==u)&&ks(t,o,r,u),ct=!1,g=t.memoizedState,o.state=g,xi(t,r,o,i);var w=t.memoizedState;s!==m||g!==w||he.current||ct?(typeof y=="function"&&(so(t,n,y,r),w=t.memoizedState),(c=ct||ws(t,n,c,r,g,w,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return po(e,t,n,r,l,i)}function po(e,t,n,r,i,l){Tc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&fs(t,n,!1),rt(e,t,l);r=t.stateNode,Hp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hn(t,e.child,null,l),t.child=hn(t,null,s,l)):ue(e,t,s,l),t.memoizedState=r.state,i&&fs(t,n,!0),t.child}function Mc(e){var t=e.stateNode;t.pendingContext?ds(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ds(e,t.context,!1),ta(e,t.containerInfo)}function Fs(e,t,n,r,i){return mn(),Ko(i),t.flags|=256,ue(e,t,n,r),t.child}var mo={dehydrated:null,treeContext:null,retryLane:0};function ho(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,t,n){var r=t.pendingProps,i=H.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(H,i&1),e===null)return oo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ui(o,r,0,null),e=Mt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ho(n),t.memoizedState=mo,e):ua(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Wp(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=St(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=St(s,l):(l=Mt(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ho(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=mo,r}return l=e.child,e=l.sibling,r=St(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ua(e,t){return t=Ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dr(e,t,n,r){return r!==null&&Ko(r),hn(t,e.child,null,n),e=ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wp(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(S(422))),Dr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ui({mode:"visible",children:r.children},i,0,null),l=Mt(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&hn(t,e.child,null,o),t.child.memoizedState=ho(o),t.memoizedState=mo,l);if(!(t.mode&1))return Dr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(S(419)),r=kl(l,r,void 0),Dr(e,t,o,r)}if(s=(o&e.childLanes)!==0,me||s){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,nt(e,i),Me(r,e,i,-1))}return ha(),r=kl(Error(S(421))),Dr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nm.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,we=yt(i.nextSibling),ke=t,U=!0,De=null,e!==null&&(Ce[Ne++]=qe,Ce[Ne++]=Ze,Ce[Ne++]=Bt,qe=e.id,Ze=e.overflow,Bt=t),t=ua(t,r.children),t.flags|=4096,t)}function Rs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ao(e.return,t,n)}function Sl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Bc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ue(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rs(e,n,t);else if(e.tag===19)Rs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sl(t,!0,n,null,l);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $p(e,t,n){switch(t.tag){case 3:Mc(t),mn();break;case 5:fc(t);break;case 1:ge(t.type)&&mi(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;M(vi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Oc(e,t,n):(M(H,H.current&1),e=rt(e,t,n),e!==null?e.sibling:null);M(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Dc(e,t,n)}return rt(e,t,n)}var Uc,go,Hc,Wc;Uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};go=function(){};Hc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,It(Qe.current);var l=null;switch(n){case"input":i=Tl(e,i),r=Tl(e,r),l=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":i=Bl(e,i),r=Bl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fi)}Hl(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&O("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Wc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vp(e,t,n){var r=t.pendingProps;switch(Yo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&pi(),oe(t),null;case 3:return r=t.stateNode,gn(),B(he),B(se),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(jo(De),De=null))),go(e,t),oe(t),null;case 5:na(t);var i=It(or.current);if(n=t.type,e!==null&&t.stateNode!=null)Hc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=It(Qe.current),Ar(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ve]=t,r[ir]=l,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<Tn.length;i++)O(Tn[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ma(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Ba(r,l),O("invalid",r)}Hl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),i=["children",""+s]):Yn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":Er(r),Oa(r,l,!0);break;case"textarea":Er(r),Ua(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=fi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ve]=t,e[ir]=r,Uc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Wl(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tn.length;i++)O(Tn[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":Ma(e,r),i=Tl(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":Ba(e,r),i=Bl(e,r),O("invalid",e);break;default:i=r}Hl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?wu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&O("scroll",e):u!=null&&zo(e,l,u,o))}switch(n){case"input":Er(e),Oa(e,r,!1);break;case"textarea":Er(e),Ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_t(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?on(e,!!r.multiple,l,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Wc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=It(or.current),It(Qe.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(l=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return oe(t),null;case 13:if(B(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))ac(),mn(),t.flags|=98560,l=!1;else if(l=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Ve]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),l=!1}else De!==null&&(jo(De),De=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Z===0&&(Z=3):ha())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return gn(),go(e,t),e===null&&nr(t.stateNode.containerInfo),oe(t),null;case 10:return Zo(t.type._context),oe(t),null;case 17:return ge(t.type)&&pi(),oe(t),null;case 19:if(B(H),l=t.memoizedState,l===null)return oe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Ln(l,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=wi(e),o!==null){for(t.flags|=128,Ln(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&Y()>yn&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304)}else{if(!r)if(e=wi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!U)return oe(t),null}else 2*Y()-l.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Y(),t.sibling=null,n=H.current,M(H,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ma(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Gp(e,t){switch(Yo(t),t.tag){case 1:return ge(t.type)&&pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),B(he),B(se),ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return gn(),null;case 10:return Zo(t.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var Tr=!1,ae=!1,Qp=typeof WeakSet=="function"?WeakSet:Set,N=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function vo(e,t,n){try{n()}catch(r){G(e,t,r)}}var bs=!1;function Yp(e,t){if(Jl=ui,e=Yu(),Go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,p=0,m=e,g=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(s=o+i),m!==l||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===n&&++c===i&&(s=o),g===l&&++p===r&&(u=o),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(eo={focusedElem:e,selectionRange:n},ui=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,j=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ae(t.type,x),j);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(k){G(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=bs,bs=!1,w}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&vo(t,n,l)}i=i.next}while(i!==r)}}function Oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $c(e){var t=e.alternate;t!==null&&(e.alternate=null,$c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[ir],delete t[ro],delete t[bp],delete t[Lp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function Ls(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(xo(e,t,n),e=e.sibling;e!==null;)xo(e,t,n),e=e.sibling}function wo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wo(e,t,n),e=e.sibling;e!==null;)wo(e,t,n),e=e.sibling}var ne=null,Ie=!1;function st(e,t,n){for(n=n.child;n!==null;)Gc(e,t,n),n=n.sibling}function Gc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Li,n)}catch{}switch(n.tag){case 5:ae||rn(n,t);case 6:var r=ne,i=Ie;ne=null,st(e,t,n),ne=r,Ie=i,ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?hl(e.parentNode,n):e.nodeType===1&&hl(e,n),Jn(e)):hl(ne,n.stateNode));break;case 4:r=ne,i=Ie,ne=n.stateNode.containerInfo,Ie=!0,st(e,t,n),ne=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&vo(n,t,o),i=i.next}while(i!==r)}st(e,t,n);break;case 1:if(!ae&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,st(e,t,n),ae=r):st(e,t,n);break;default:st(e,t,n)}}function Ps(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qp),t.forEach(function(r){var i=rm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ne=s.stateNode,Ie=!1;break e;case 3:ne=s.stateNode.containerInfo,Ie=!0;break e;case 4:ne=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(ne===null)throw Error(S(160));Gc(l,o,i),ne=null,Ie=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){G(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,e),t=t.sibling}function Qc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),We(e),r&4){try{Vn(3,e,e.return),Oi(3,e)}catch(x){G(e,e.return,x)}try{Vn(5,e,e.return)}catch(x){G(e,e.return,x)}}break;case 1:ze(t,e),We(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(ze(t,e),We(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var i=e.stateNode;try{Kn(i,"")}catch(x){G(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&hu(i,l),Wl(s,o);var c=Wl(s,l);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?wu(i,m):p==="dangerouslySetInnerHTML"?yu(i,m):p==="children"?Kn(i,m):zo(i,p,m,c)}switch(s){case"input":Ml(i,l);break;case"textarea":gu(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?on(i,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?on(i,!!l.multiple,l.defaultValue,!0):on(i,!!l.multiple,l.multiple?[]:"",!1))}i[ir]=l}catch(x){G(e,e.return,x)}}break;case 6:if(ze(t,e),We(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){G(e,e.return,x)}}break;case 3:if(ze(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(x){G(e,e.return,x)}break;case 4:ze(t,e),We(e);break;case 13:ze(t,e),We(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(fa=Y())),r&4&&Ps(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||p,ze(t,e),ae=c):ze(t,e),We(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(N=e,p=e.child;p!==null;){for(m=N=p;N!==null;){switch(g=N,y=g.child,g.tag){case 0:case 11:case 14:case 15:Vn(4,g,g.return);break;case 1:rn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){G(r,n,x)}}break;case 5:rn(g,g.return);break;case 22:if(g.memoizedState!==null){As(m);continue}}y!==null?(y.return=g,N=y):As(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=xu("display",o))}catch(x){G(e,e.return,x)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){G(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(t,e),We(e),r&4&&Ps(e);break;case 21:break;default:ze(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Kn(i,""),r.flags&=-33);var l=Ls(e);wo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Ls(e);xo(e,s,o);break;default:throw Error(S(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kp(e,t,n){N=e,Yc(e)}function Yc(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tr;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ae;s=Tr;var c=ae;if(Tr=o,(ae=u)&&!c)for(N=i;N!==null;)o=N,u=o.child,o.tag===22&&o.memoizedState!==null?Is(i):u!==null?(u.return=o,N=u):Is(i);for(;l!==null;)N=l,Yc(l),l=l.sibling;N=i,Tr=s,ae=c}zs(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,N=l):zs(e)}}function zs(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Oi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&vs(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Jn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||t.flags&512&&yo(t)}catch(g){G(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function As(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Is(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oi(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var l=t.return;try{yo(t)}catch(u){G(t,l,u)}break;case 5:var o=t.return;try{yo(t)}catch(u){G(t,o,u)}}}catch(u){G(t,t.return,u)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var Xp=Math.ceil,_i=lt.ReactCurrentDispatcher,ca=lt.ReactCurrentOwner,Re=lt.ReactCurrentBatchConfig,I=0,te=null,X=null,re=0,xe=0,ln=Ct(0),Z=0,cr=null,Ht=0,Bi=0,da=0,Gn=null,pe=null,fa=0,yn=1/0,Ke=null,ji=!1,ko=null,wt=null,Mr=!1,mt=null,Ei=0,Qn=0,So=null,Zr=-1,Jr=0;function ce(){return I&6?Y():Zr!==-1?Zr:Zr=Y()}function kt(e){return e.mode&1?I&2&&re!==0?re&-re:zp.transition!==null?(Jr===0&&(Jr=Pu()),Jr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ou(e.type)),e):1}function Me(e,t,n,r){if(50<Qn)throw Qn=0,So=null,Error(S(185));mr(e,n,r),(!(I&2)||e!==te)&&(e===te&&(!(I&2)&&(Bi|=n),Z===4&&ft(e,re)),ve(e,r),n===1&&I===0&&!(t.mode&1)&&(yn=Y()+500,Di&&Nt()))}function ve(e,t){var n=e.callbackNode;zf(e,t);var r=si(e,e===te?re:0);if(r===0)n!==null&&$a(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$a(n),t===1)e.tag===0?Pp(Ds.bind(null,e)):ic(Ds.bind(null,e)),Fp(function(){!(I&6)&&Nt()}),n=null;else{switch(zu(r)){case 1:n=Mo;break;case 4:n=bu;break;case 16:n=ai;break;case 536870912:n=Lu;break;default:n=ai}n=nd(n,Kc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kc(e,t){if(Zr=-1,Jr=0,I&6)throw Error(S(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=si(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ci(e,r);else{t=r;var i=I;I|=2;var l=qc();(te!==e||re!==t)&&(Ke=null,yn=Y()+500,Tt(e,t));do try{Jp();break}catch(s){Xc(e,s)}while(!0);qo(),_i.current=l,I=i,X!==null?t=0:(te=null,re=0,t=Z)}if(t!==0){if(t===2&&(i=Yl(e),i!==0&&(r=i,t=_o(e,i))),t===1)throw n=cr,Tt(e,0),ft(e,r),ve(e,Y()),n;if(t===6)ft(e,r);else{if(i=e.current.alternate,!(r&30)&&!qp(i)&&(t=Ci(e,r),t===2&&(l=Yl(e),l!==0&&(r=l,t=_o(e,l))),t===1))throw n=cr,Tt(e,0),ft(e,r),ve(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Pt(e,pe,Ke);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=fa+500-Y(),10<t)){if(si(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=no(Pt.bind(null,e,pe,Ke),t);break}Pt(e,pe,Ke);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Te(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xp(r/1960))-r,10<r){e.timeoutHandle=no(Pt.bind(null,e,pe,Ke),r);break}Pt(e,pe,Ke);break;case 5:Pt(e,pe,Ke);break;default:throw Error(S(329))}}}return ve(e,Y()),e.callbackNode===n?Kc.bind(null,e):null}function _o(e,t){var n=Gn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=Ci(e,t),e!==2&&(t=pe,pe=n,t!==null&&jo(t)),e}function jo(e){pe===null?pe=e:pe.push.apply(pe,e)}function qp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Be(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~da,t&=~Bi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function Ds(e){if(I&6)throw Error(S(327));dn();var t=si(e,0);if(!(t&1))return ve(e,Y()),null;var n=Ci(e,t);if(e.tag!==0&&n===2){var r=Yl(e);r!==0&&(t=r,n=_o(e,r))}if(n===1)throw n=cr,Tt(e,0),ft(e,t),ve(e,Y()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,pe,Ke),ve(e,Y()),null}function pa(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(yn=Y()+500,Di&&Nt())}}function Wt(e){mt!==null&&mt.tag===0&&!(I&6)&&dn();var t=I;I|=1;var n=Re.transition,r=D;try{if(Re.transition=null,D=1,e)return e()}finally{D=r,Re.transition=n,I=t,!(I&6)&&Nt()}}function ma(){xe=ln.current,B(ln)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Np(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Yo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pi();break;case 3:gn(),B(he),B(se),ra();break;case 5:na(r);break;case 4:gn();break;case 13:B(H);break;case 19:B(H);break;case 10:Zo(r.type._context);break;case 22:case 23:ma()}n=n.return}if(te=e,X=e=St(e.current,null),re=xe=t,Z=0,cr=null,da=Bi=Ht=0,pe=Gn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}At=null}return e}function Xc(e,t){do{var n=X;try{if(qo(),Kr.current=Si,ki){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ki=!1}if(Ut=0,ee=q=W=null,$n=!1,ar=0,ca.current=null,n===null||n.return===null){Z=1,cr=t,X=null;break}e:{var l=e,o=n.return,s=n,u=t;if(t=re,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=s,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=_s(o);if(y!==null){y.flags&=-257,js(y,o,s,l,t),y.mode&1&&Ss(l,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(u),t.updateQueue=x}else w.add(u);break e}else{if(!(t&1)){Ss(l,c,t),ha();break e}u=Error(S(426))}}else if(U&&s.mode&1){var j=_s(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),js(j,o,s,l,t),Ko(vn(u,s));break e}}l=u=vn(u,s),Z!==4&&(Z=2),Gn===null?Gn=[l]:Gn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=zc(l,u,t);gs(l,f);break e;case 1:s=u;var d=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wt===null||!wt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=Ac(l,s,t);gs(l,k);break e}}l=l.return}while(l!==null)}Jc(n)}catch(_){t=_,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function qc(){var e=_i.current;return _i.current=Si,e===null?Si:e}function ha(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(Ht&268435455)&&!(Bi&268435455)||ft(te,re)}function Ci(e,t){var n=I;I|=2;var r=qc();(te!==e||re!==t)&&(Ke=null,Tt(e,t));do try{Zp();break}catch(i){Xc(e,i)}while(!0);if(qo(),I=n,_i.current=r,X!==null)throw Error(S(261));return te=null,re=0,Z}function Zp(){for(;X!==null;)Zc(X)}function Jp(){for(;X!==null&&!jf();)Zc(X)}function Zc(e){var t=td(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Jc(e):X=t,ca.current=null}function Jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(n=Vp(n,t,xe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function Pt(e,t,n){var r=D,i=Re.transition;try{Re.transition=null,D=1,em(e,t,n,r)}finally{Re.transition=i,D=r}return null}function em(e,t,n,r){do dn();while(mt!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Af(e,l),e===te&&(X=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,nd(ai,function(){return dn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Re.transition,Re.transition=null;var o=D;D=1;var s=I;I|=4,ca.current=null,Yp(e,n),Qc(n,e),wp(eo),ui=!!Jl,eo=Jl=null,e.current=n,Kp(n),Ef(),I=s,D=o,Re.transition=l}else e.current=n;if(Mr&&(Mr=!1,mt=e,Ei=i),l=e.pendingLanes,l===0&&(wt=null),Ff(n.stateNode),ve(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ji)throw ji=!1,e=ko,ko=null,e;return Ei&1&&e.tag!==0&&dn(),l=e.pendingLanes,l&1?e===So?Qn++:(Qn=0,So=e):Qn=0,Nt(),null}function dn(){if(mt!==null){var e=zu(Ei),t=Re.transition,n=D;try{if(Re.transition=null,D=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,Ei=0,I&6)throw Error(S(331));var i=I;for(I|=4,N=e.current;N!==null;){var l=N,o=l.child;if(N.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(N=c;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:Vn(8,p,l)}var m=p.child;if(m!==null)m.return=p,N=m;else for(;N!==null;){p=N;var g=p.sibling,y=p.return;if($c(p),p===c){N=null;break}if(g!==null){g.return=y,N=g;break}N=y}}}var w=l.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}N=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,N=o;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Vn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,N=f;break e}N=l.return}}var d=e.current;for(N=d;N!==null;){o=N;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,N=h;else e:for(o=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oi(9,s)}}catch(_){G(s,s.return,_)}if(s===o){N=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,N=k;break e}N=s.return}}if(I=i,Nt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Li,e)}catch{}r=!0}return r}finally{D=n,Re.transition=t}}return!1}function Ts(e,t,n){t=vn(n,t),t=zc(e,t,1),e=xt(e,t,1),t=ce(),e!==null&&(mr(e,1,t),ve(e,t))}function G(e,t,n){if(e.tag===3)Ts(e,e,n);else for(;t!==null;){if(t.tag===3){Ts(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wt===null||!wt.has(r))){e=vn(n,e),e=Ac(t,e,1),t=xt(t,e,1),e=ce(),t!==null&&(mr(t,1,e),ve(t,e));break}}t=t.return}}function tm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(Z===4||Z===3&&(re&130023424)===re&&500>Y()-fa?Tt(e,0):da|=n),ve(e,t)}function ed(e,t){t===0&&(e.mode&1?(t=Fr,Fr<<=1,!(Fr&130023424)&&(Fr=4194304)):t=1);var n=ce();e=nt(e,t),e!==null&&(mr(e,t,n),ve(e,n))}function nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ed(e,n)}function rm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),ed(e,n)}var td;td=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,$p(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&lc(t,gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var i=pn(t,se.current);cn(t,n),i=la(null,t,r,e,i,n);var l=oa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(l=!0,mi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ea(t),i.updater=Mi,t.stateNode=i,i._reactInternals=t,uo(t,r,e,n),t=po(null,t,r,!0,l,n)):(t.tag=0,U&&l&&Qo(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lm(r),e=Ae(r,e),i){case 0:t=fo(null,t,r,e,n);break e;case 1:t=Ns(null,t,r,e,n);break e;case 11:t=Es(null,t,r,e,n);break e;case 14:t=Cs(null,t,r,Ae(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),fo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),Ns(e,t,r,i,n);case 3:e:{if(Mc(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,i=l.element,dc(e,t),xi(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=vn(Error(S(423)),t),t=Fs(e,t,r,n,i);break e}else if(r!==i){i=vn(Error(S(424)),t),t=Fs(e,t,r,n,i);break e}else for(we=yt(t.stateNode.containerInfo.firstChild),ke=t,U=!0,De=null,n=uc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===i){t=rt(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return fc(t),e===null&&oo(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,to(r,i)?o=null:l!==null&&to(r,l)&&(t.flags|=32),Tc(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&oo(t),null;case 13:return Oc(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),Es(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,M(vi,r._currentValue),r._currentValue=o,l!==null)if(Be(l.value,o)){if(l.children===i.children&&!he.current){t=rt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Je(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),ao(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(S(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ao(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cn(t,n),i=be(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Ae(r,t.pendingProps),i=Ae(r.type,i),Cs(e,t,r,i,n);case 15:return Ic(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),qr(e,t),t.tag=1,ge(r)?(e=!0,mi(t)):e=!1,cn(t,n),Pc(t,r,i),uo(t,r,i,n),po(null,t,r,!0,e,n);case 19:return Bc(e,t,n);case 22:return Dc(e,t,n)}throw Error(S(156,t.tag))};function nd(e,t){return Ru(e,t)}function im(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new im(e,t,n,r)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lm(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Io)return 11;if(e===Do)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ei(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")ga(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yt:return Mt(n.children,i,l,t);case Ao:o=8,i|=8;break;case zl:return e=Fe(12,n,t,i|2),e.elementType=zl,e.lanes=l,e;case Al:return e=Fe(13,n,t,i),e.elementType=Al,e.lanes=l,e;case Il:return e=Fe(19,n,t,i),e.elementType=Il,e.lanes=l,e;case fu:return Ui(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cu:o=10;break e;case du:o=9;break e;case Io:o=11;break e;case Do:o=14;break e;case ut:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Fe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Mt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Ui(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=fu,e.lanes=n,e.stateNode={isHidden:!1},e}function _l(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function om(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function va(e,t,n,r,i,l,o,s,u){return e=new om(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Fe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(l),e}function am(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rd(e){if(!e)return jt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ge(n))return rc(e,n,t)}return t}function id(e,t,n,r,i,l,o,s,u){return e=va(n,r,!0,e,i,l,o,s,u),e.context=rd(null),n=e.current,r=ce(),i=kt(n),l=Je(r,i),l.callback=t??null,xt(n,l,i),e.current.lanes=i,mr(e,i,r),ve(e,r),e}function Hi(e,t,n,r){var i=t.current,l=ce(),o=kt(i);return n=rd(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(i,t,o),e!==null&&(Me(e,i,o,l),Yr(e,i,o)),o}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ms(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ya(e,t){Ms(e,t),(e=e.alternate)&&Ms(e,t)}function sm(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}Wi.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Hi(e,t,null,null)};Wi.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Hi(null,e,null,null)}),t[tt]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Du();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&Mu(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Os(){}function um(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=Ni(o);l.call(c)}}var o=id(t,r,e,0,null,!1,!1,"",Os);return e._reactRootContainer=o,e[tt]=o.current,nr(e.nodeType===8?e.parentNode:e),Wt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Ni(u);s.call(c)}}var u=va(e,0,!1,null,null,!1,!1,"",Os);return e._reactRootContainer=u,e[tt]=u.current,nr(e.nodeType===8?e.parentNode:e),Wt(function(){Hi(t,u,n,r)}),u}function Vi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var u=Ni(o);s.call(u)}}Hi(t,o,e,i)}else o=um(n,t,e,i,r);return Ni(o)}Au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&(Oo(t,n|1),ve(t,Y()),!(I&6)&&(yn=Y()+500,Nt()))}break;case 13:Wt(function(){var r=nt(e,1);if(r!==null){var i=ce();Me(r,e,1,i)}}),ya(e,1)}};Bo=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=ce();Me(t,e,134217728,n)}ya(e,134217728)}};Iu=function(e){if(e.tag===13){var t=kt(e),n=nt(e,t);if(n!==null){var r=ce();Me(n,e,t,r)}ya(e,t)}};Du=function(){return D};Tu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Vl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ii(r);if(!i)throw Error(S(90));mu(r),Ml(r,i)}}}break;case"textarea":gu(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};_u=pa;ju=Wt;var cm={usingClientEntryPoint:!1,Events:[gr,Zt,Ii,ku,Su,pa]},Pn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dm={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Li=Or.inject(dm),Ge=Or}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(t))throw Error(S(200));return am(e,t,null,n)};_e.createRoot=function(e,t){if(!wa(e))throw Error(S(299));var n=!1,r="",i=ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=va(e,1,!1,null,null,n,!1,r,i),e[tt]=t.current,nr(e.nodeType===8?e.parentNode:e),new xa(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Nu(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Wt(e)};_e.hydrate=function(e,t,n){if(!$i(t))throw Error(S(200));return Vi(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!wa(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=ld;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=id(t,null,e,1,n??null,i,!1,l,o),e[tt]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Wi(t)};_e.render=function(e,t,n){if(!$i(t))throw Error(S(200));return Vi(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!$i(e))throw Error(S(40));return e._reactRootContainer?(Wt(function(){Vi(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};_e.unstable_batchedUpdates=pa;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$i(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Vi(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function od(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(od)}catch(e){console.error(e)}}od(),ou.exports=_e;var fm=ou.exports,ad,Bs=fm;ad=Bs.createRoot,Bs.hydrateRoot;/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ka=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,sd=/^[\\/]{2}/;function pm(e,t){return t+e.replace(/\\/g,"/")}var Us="popstate";function Hs(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function mm(e={}){function t(r,i){var c;let l=(c=i.state)==null?void 0:c.masked,{pathname:o,search:s,hash:u}=l||r.location;return Eo("",{pathname:o,search:s,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default",l?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:dr(i)}return gm(t,n,null,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ye(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hm(){return Math.random().toString(36).substring(2,10)}function Ws(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Eo(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Sn(t):t,state:n,key:t&&t.key||r||hm(),mask:i}}function dr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Sn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function gm(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s="POP",u=null,c=p();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function p(){return(o.state||{idx:null}).idx}function m(){s="POP";let j=p(),f=j==null?null:j-c;c=j,u&&u({action:s,location:x.location,delta:f})}function g(j,f){s="PUSH";let d=Hs(j)?j:Eo(x.location,j,f);c=p()+1;let h=Ws(d,c),k=x.createHref(d.mask||d);try{o.pushState(h,"",k)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(k)}l&&u&&u({action:s,location:x.location,delta:1})}function y(j,f){s="REPLACE";let d=Hs(j)?j:Eo(x.location,j,f);c=p();let h=Ws(d,c),k=x.createHref(d.mask||d);o.replaceState(h,"",k),l&&u&&u({action:s,location:x.location,delta:0})}function w(j){return vm(i,j)}let x={get action(){return s},get location(){return e(i,o)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Us,m),u=j,()=>{i.removeEventListener(Us,m),u=null}},createHref(j){return t(i,j)},createURL:w,encodeLocation(j){let f=w(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(j){return o.go(j)}};return x}function vm(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),$(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:dr(t);return i=i.replace(/ $/,"%20"),!n&&sd.test(i)&&(i=r+i),new URL(i,r)}function ud(e,t,n="/"){return ym(e,t,n,!1)}function ym(e,t,n,r,i){let l=typeof t=="string"?Sn(t):t,o=it(l.pathname||"/",n);if(o==null)return null;let s=xm(e),u=null,c=bm(o);for(let p=0;u==null&&p<s.length;++p)u=Rm(s[p],c,r);return u}function xm(e){let t=cd(e);return wm(t),t}function cd(e,t=[],n=[],r="",i=!1){let l=(o,s,u=i,c)=>{let p={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(r)&&u)return;$(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length)}let m=Oe([r,p.relativePath]),g=n.concat(p);o.children&&o.children.length>0&&($(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),cd(o.children,t,g,m,u)),!(o.path==null&&!o.index)&&t.push({path:m,score:Nm(m,o.index),routesMeta:g.map((y,w)=>{let[x,j]=pd(y.relativePath,y.caseSensitive,w===g.length-1);return{...y,matcher:x,compiledParams:j}})})};return e.forEach((o,s)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))l(o,s);else for(let c of dd(o.path))l(o,s,!0,c)}),t}function dd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=dd(r.join("/")),s=[];return s.push(...o.map(u=>u===""?l:[l,u].join("/"))),i&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function wm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var km=/^:[\w-]+$/,Sm=3,_m=2,jm=1,Em=10,Cm=-2,$s=e=>e==="*";function Nm(e,t){let n=e.split("/"),r=n.length;return n.some($s)&&(r+=Cm),t&&(r+=_m),n.filter(i=>!$s(i)).reduce((i,l)=>i+(km.test(l)?Sm:l===""?jm:Em),r)}function Fm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Rm(e,t,n=!1){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,p=l==="/"?t:t.slice(l.length)||"/",m={path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g=u.matcher&&u.compiledParams?fd(m,p,u.matcher,u.compiledParams):Fi(m,p),y=u.route;if(!g&&c&&n&&!r[r.length-1].route.index&&(g=Fi({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!g)return null;Object.assign(i,g.params),o.push({params:i,pathname:Oe([l,g.pathname]),pathnameBase:zm(Oe([l,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(l=Oe([l,g.pathnameBase]))}return o}function Fi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=pd(e.path,e.caseSensitive,e.end);return fd(e,t,n,r)}function fd(e,t,n,r){let i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,{paramName:p,isOptional:m},g)=>{if(p==="*"){let w=s[g]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[g];return m&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:o,pattern:e}}function pd(e,t=!1,n=!0){Ye(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u,c,p)=>{if(r.push({paramName:s,isOptional:u!=null}),u){let m=p.charAt(c+o.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function bm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ye(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function it(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Lm(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Sn(e):e,l;return n?(n=hd(n),n.startsWith("/")?l=Vs(n.substring(1),"/"):l=Vs(n,t)):l=t,{pathname:l,search:Am(r),hash:Im(i)}}function Vs(e,t){let n=Ri(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function El(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function md(e){let t=Pm(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Sa(e,t,n,r=!1){let i;typeof e=="string"?i=Sn(e):(i={...e},$(!i.pathname||!i.pathname.includes("?"),El("?","pathname","search",i)),$(!i.pathname||!i.pathname.includes("#"),El("#","pathname","hash",i)),$(!i.search||!i.search.includes("#"),El("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}s=m>=0?t[m]:"/"}let u=Lm(i,s),c=o&&o!=="/"&&o.endsWith("/"),p=(l||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}var hd=e=>e.replace(/[\\/]{2,}/g,"/"),Oe=e=>hd(e.join("/")),Ri=e=>e.replace(/\/+$/,""),zm=e=>Ri(e).replace(/^\/*/,"/"),Am=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Im=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Dm=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Tm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Mm(e){let t=e.map(n=>n.route.path).filter(Boolean);return Oe(t)||"/"}var gd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function vd(e,t){let n=e;if(typeof n!="string"||!ka.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(gd)try{let l=new URL(window.location.href),o=sd.test(n)?new URL(pm(n,l.protocol)):new URL(n),s=it(o.pathname,t);o.origin===l.origin&&s!=null?n=s+o.search+o.hash:i=!0}catch{Ye(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yd=["POST","PUT","PATCH","DELETE"];new Set(yd);var Om=["GET",...yd];new Set(Om);var Bm=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Um(e){try{return Bm.includes(new URL(e).protocol)}catch{return!1}}var _n=v.createContext(null);_n.displayName="DataRouter";var Gi=v.createContext(null);Gi.displayName="DataRouterState";var xd=v.createContext(!1);function Hm(){return v.useContext(xd)}var wd=v.createContext({isTransitioning:!1});wd.displayName="ViewTransition";var Wm=v.createContext(new Map);Wm.displayName="Fetchers";var $m=v.createContext(null);$m.displayName="Await";var Pe=v.createContext(null);Pe.displayName="Navigation";var yr=v.createContext(null);yr.displayName="Location";var ot=v.createContext({outlet:null,matches:[],isDataRoute:!1});ot.displayName="Route";var _a=v.createContext(null);_a.displayName="RouteError";var kd="REACT_ROUTER_ERROR",Vm="REDIRECT",Gm="ROUTE_ERROR_RESPONSE";function Qm(e){if(e.startsWith(`${kd}:${Vm}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Ym(e){if(e.startsWith(`${kd}:${Gm}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Dm(t.status,t.statusText,t.data)}catch{}}function Km(e,{relative:t}={}){$(xr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=v.useContext(Pe),{hash:i,pathname:l,search:o}=wr(e,{relative:t}),s=l;return n!=="/"&&(s=l==="/"?n:Oe([n,l])),r.createHref({pathname:s,search:o,hash:i})}function xr(){return v.useContext(yr)!=null}function Ue(){return $(xr(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(yr).location}var Sd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _d(e){v.useContext(Pe).static||v.useLayoutEffect(e)}function Qi(){let{isDataRoute:e}=v.useContext(ot);return e?sh():Xm()}function Xm(){$(xr(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(_n),{basename:t,navigator:n}=v.useContext(Pe),{matches:r}=v.useContext(ot),{pathname:i}=Ue(),l=JSON.stringify(md(r)),o=v.useRef(!1);return _d(()=>{o.current=!0}),v.useCallback((u,c={})=>{if(Ye(o.current,Sd),!o.current)return;if(typeof u=="number"){n.go(u);return}let p=Sa(u,JSON.parse(l),i,c.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Oe([t,p.pathname])),(c.replace?n.replace:n.push)(p,c.state,c)},[t,n,l,i,e])}v.createContext(null);function wr(e,{relative:t}={}){let{matches:n}=v.useContext(ot),{pathname:r}=Ue(),i=JSON.stringify(md(n));return v.useMemo(()=>Sa(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function qm(e,t){return jd(e,t)}function jd(e,t,n){var j;$(xr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=v.useContext(Pe),{matches:i}=v.useContext(ot),l=i[i.length-1],o=l?l.params:{},s=l?l.pathname:"/",u=l?l.pathnameBase:"/",c=l&&l.route;{let f=c&&c.path||"";Cd(s,!c||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let p=Ue(),m;if(t){let f=typeof t=="string"?Sn(t):t;$(u==="/"||((j=f.pathname)==null?void 0:j.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${f.pathname}" was given in the \`location\` prop.`),m=f}else m=p;let g=m.pathname||"/",y=g;if(u!=="/"){let f=u.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(f.length).join("/")}let w=n&&n.state.matches.length?n.state.matches.map(f=>Object.assign(f,{route:n.manifest[f.route.id]||f.route})):ud(e,{pathname:y});Ye(c||w!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Ye(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=nh(w&&w.map(f=>Object.assign({},f,{params:Object.assign({},o,f.params),pathname:Oe([u,r.encodeLocation?r.encodeLocation(f.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:Oe([u,r.encodeLocation?r.encodeLocation(f.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathnameBase])})),i,n);return t&&x?v.createElement(yr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...m},navigationType:"POP"}},x):x}function Zm(){let e=ah(),t=Tm(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:l},"ErrorBoundary")," or"," ",v.createElement("code",{style:l},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:i},n):null,o)}var Jm=v.createElement(Zm,null),Ed=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Ym(e.digest);n&&(e=n)}let t=e!==void 0?v.createElement(ot.Provider,{value:this.props.routeContext},v.createElement(_a.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?v.createElement(eh,{error:e},t):t}};Ed.contextType=xd;var Cl=new WeakMap;function eh({children:e,error:t}){let{basename:n}=v.useContext(Pe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Qm(t.digest);if(r){let i=Cl.get(t);if(i)throw i;let l=vd(r.location,n),o=l.absoluteURL||l.to;if(Um(o))throw new Error("Invalid redirect location");if(gd&&!Cl.get(t))if(l.isExternal||r.reloadDocument)window.location.href=o;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:r.replace}));throw Cl.set(t,s),s}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o}`})}}return e}function th({routeContext:e,match:t,children:n}){let r=v.useContext(_n);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(ot.Provider,{value:e},n)}function nh(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,l=r==null?void 0:r.errors;if(l!=null){let p=i.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);$(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),i=i.slice(0,Math.min(i.length,p+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let p=0;p<i.length;p++){let m=i[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(s=p),m.route.id){let{loaderData:g,errors:y}=r,w=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||w){n.isStatic&&(o=!0),s>=0?i=i.slice(0,s+1):i=[i[0]];break}}}}let u=n==null?void 0:n.onError,c=r&&u?(p,m)=>{var g,y;u(p,{location:r.location,params:((y=(g=r.matches)==null?void 0:g[0])==null?void 0:y.params)??{},pattern:Mm(r.matches),errorInfo:m})}:void 0;return i.reduceRight((p,m,g)=>{let y,w=!1,x=null,j=null;r&&(y=l&&m.route.id?l[m.route.id]:void 0,x=m.route.errorElement||Jm,o&&(s<0&&g===0?(Cd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,j=null):s===g&&(w=!0,j=m.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,g+1)),d=()=>{let h;return y?h=x:w?h=j:m.route.Component?h=v.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=p,v.createElement(th,{match:m,routeContext:{outlet:p,matches:f,isDataRoute:r!=null},children:h})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?v.createElement(Ed,{location:r.location,revalidation:r.revalidation,component:x,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:c}):d()},null)}function ja(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rh(e){let t=v.useContext(_n);return $(t,ja(e)),t}function ih(e){let t=v.useContext(Gi);return $(t,ja(e)),t}function lh(e){let t=v.useContext(ot);return $(t,ja(e)),t}function Ea(e){let t=lh(e),n=t.matches[t.matches.length-1];return $(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function oh(){return Ea("useRouteId")}function ah(){var r;let e=v.useContext(_a),t=ih("useRouteError"),n=Ea("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function sh(){let{router:e}=rh("useNavigate"),t=Ea("useNavigate"),n=v.useRef(!1);return _d(()=>{n.current=!0}),v.useCallback(async(i,l={})=>{Ye(n.current,Sd),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...l}))},[e,t])}var Gs={};function Cd(e,t,n){!t&&!Gs[e]&&(Gs[e]=!0,Ye(!1,n))}v.memo(uh);function uh({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:l}){return jd(e,void 0,{manifest:t,state:r,isStatic:i,onError:l})}function ti(e){$(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ch({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:l=!1,useTransitions:o}){$(!xr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:s,navigator:i,static:l,useTransitions:o,future:{}}),[s,i,l,o]);typeof n=="string"&&(n=Sn(n));let{pathname:c="/",search:p="",hash:m="",state:g=null,key:y="default",mask:w}=n,x=v.useMemo(()=>{let j=it(c,s);return j==null?null:{location:{pathname:j,search:p,hash:m,state:g,key:y,mask:w},navigationType:r}},[s,c,p,m,g,y,r,w]);return Ye(x!=null,`<Router basename="${s}"> is not able to match the URL "${c}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:v.createElement(Pe.Provider,{value:u},v.createElement(yr.Provider,{children:t,value:x}))}function dh({children:e,location:t}){return qm(Co(e),t)}function Co(e,t=[]){let n=[];return v.Children.forEach(e,(r,i)=>{if(!v.isValidElement(r))return;let l=[...t,i];if(r.type===v.Fragment){n.push.apply(n,Co(r.props.children,l));return}$(r.type===ti,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Co(r.props.children,l)),n.push(o)}),n}var ni="get",ri="application/x-www-form-urlencoded";function Yi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function fh(e){return Yi(e)&&e.tagName.toLowerCase()==="button"}function ph(e){return Yi(e)&&e.tagName.toLowerCase()==="form"}function mh(e){return Yi(e)&&e.tagName.toLowerCase()==="input"}function hh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gh(e,t){return e.button===0&&(!t||t==="_self")&&!hh(e)}var Br=null;function vh(){if(Br===null)try{new FormData(document.createElement("form"),0),Br=!1}catch{Br=!0}return Br}var yh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nl(e){return e!=null&&!yh.has(e)?(Ye(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ri}"`),null):e}function xh(e,t){let n,r,i,l,o;if(ph(e)){let s=e.getAttribute("action");r=s?it(s,t):null,n=e.getAttribute("method")||ni,i=Nl(e.getAttribute("enctype"))||ri,l=new FormData(e)}else if(fh(e)||mh(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||s.getAttribute("action");if(r=u?it(u,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||ni,i=Nl(e.getAttribute("formenctype"))||Nl(s.getAttribute("enctype"))||ri,l=new FormData(s,e),!vh()){let{name:c,type:p,value:m}=e;if(p==="image"){let g=c?`${c}.`:"";l.append(`${g}x`,"0"),l.append(`${g}y`,"0")}else c&&l.append(c,m)}}else{if(Yi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ni,r=null,i=ri,o=e}return l&&i==="text/plain"&&(o=l,l=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:l,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ca(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nd(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&it(i.pathname,t)==="/"?i.pathname=`${Ri(t)}/_root.${r}`:i.pathname=`${Ri(i.pathname)}.${r}`,i}async function wh(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Sh(e,t,n){let r=await Promise.all(e.map(async i=>{let l=t.routes[i.route.id];if(l){let o=await wh(l,n);return o.links?o.links():[]}return[]}));return Ch(r.flat(1).filter(kh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Qs(e,t,n,r,i,l){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,s=(u,c)=>{var p;return n[c].pathname!==u.pathname||((p=n[c].route.path)==null?void 0:p.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return l==="assets"?t.filter((u,c)=>o(u,c)||s(u,c)):l==="data"?t.filter((u,c)=>{var m;let p=r.routes[u.route.id];if(!p||!p.hasLoader)return!1;if(o(u,c)||s(u,c))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function _h(e,t,{includeHydrateFallback:n}={}){return jh(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let l=[i.module];return i.clientActionModule&&(l=l.concat(i.clientActionModule)),i.clientLoaderModule&&(l=l.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(l=l.concat(i.hydrateFallbackModule)),i.imports&&(l=l.concat(i.imports)),l}).flat(1))}function jh(e){return[...new Set(e)]}function Eh(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Ch(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let l=JSON.stringify(Eh(i));return n.has(l)||(n.add(l),r.push({key:l,link:i})),r},[])}function Na(){let e=v.useContext(_n);return Ca(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Nh(){let e=v.useContext(Gi);return Ca(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Fa=v.createContext(void 0);Fa.displayName="FrameworkContext";function Ki(){let e=v.useContext(Fa);return Ca(e,"You must render this element inside a <HydratedRouter> element"),e}function Fh(e,t){let n=v.useContext(Fa),[r,i]=v.useState(!1),[l,o]=v.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:p,onTouchStart:m}=t,g=v.useRef(null);v.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let x=f=>{f.forEach(d=>{o(d.isIntersecting)})},j=new IntersectionObserver(x,{threshold:.5});return g.current&&j.observe(g.current),()=>{j.disconnect()}}},[e]),v.useEffect(()=>{if(r){let x=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(x)}}},[r]);let y=()=>{i(!0)},w=()=>{i(!1),o(!1)};return n?e!=="intent"?[l,g,{}]:[l,g,{onFocus:zn(s,y),onBlur:zn(u,w),onMouseEnter:zn(c,y),onMouseLeave:zn(p,w),onTouchStart:zn(m,y)}]:[!1,g,{}]}function zn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Rh({page:e,...t}){let n=Hm(),{nonce:r}=Ki(),{router:i}=Na(),l=v.useMemo(()=>ud(i.routes,e,i.basename),[i.routes,e,i.basename]);return l?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(Lh,{page:e,matches:l,...t}):v.createElement(Ph,{page:e,matches:l,...t})):null}function bh(e){let{manifest:t,routeModules:n}=Ki(),[r,i]=v.useState([]);return v.useEffect(()=>{let l=!1;return Sh(e,t,n).then(o=>{l||i(o)}),()=>{l=!0}},[e,t,n]),r}function Lh({page:e,matches:t,...n}){let r=Ue(),{future:i}=Ki(),{basename:l}=Na(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let s=Nd(e,l,i.v8_trailingSlashAwareDataRequests,"rsc"),u=!1,c=[];for(let p of t)typeof p.route.shouldRevalidate=="function"?u=!0:c.push(p.route.id);return u&&c.length>0&&s.searchParams.set("_routes",c.join(",")),[s.pathname+s.search]},[l,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(s=>v.createElement("link",{key:s,rel:"prefetch",as:"fetch",href:s,...n})))}function Ph({page:e,matches:t,...n}){let r=Ue(),{future:i,manifest:l,routeModules:o}=Ki(),{basename:s}=Na(),{loaderData:u,matches:c}=Nh(),p=v.useMemo(()=>Qs(e,t,c,l,r,"data"),[e,t,c,l,r]),m=v.useMemo(()=>Qs(e,t,c,l,r,"assets"),[e,t,c,l,r]),g=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let x=new Set,j=!1;if(t.forEach(d=>{var k;let h=l.routes[d.route.id];!h||!h.hasLoader||(!p.some(_=>_.route.id===d.route.id)&&d.route.id in u&&((k=o[d.route.id])!=null&&k.shouldRevalidate)||h.hasClientLoader?j=!0:x.add(d.route.id))}),x.size===0)return[];let f=Nd(e,s,i.v8_trailingSlashAwareDataRequests,"data");return j&&x.size>0&&f.searchParams.set("_routes",t.filter(d=>x.has(d.route.id)).map(d=>d.route.id).join(",")),[f.pathname+f.search]},[s,i.v8_trailingSlashAwareDataRequests,u,r,l,p,t,e,o]),y=v.useMemo(()=>_h(m,l),[m,l]),w=bh(m);return v.createElement(v.Fragment,null,g.map(x=>v.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),y.map(x=>v.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),w.map(({key:x,link:j})=>v.createElement("link",{key:x,nonce:n.nonce,...j,crossOrigin:j.crossOrigin??n.crossOrigin})))}function zh(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Ah=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ah&&(window.__reactRouterVersion="7.18.2")}catch{}function Ih({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current==null&&(i.current=mm({window:r,v5Compat:!0}));let l=i.current,[o,s]=v.useState({action:l.action,location:l.location}),u=v.useCallback(c=>{n===!1?s(c):v.startTransition(()=>s(c))},[n]);return v.useLayoutEffect(()=>l.listen(u),[l,u]),v.createElement(ch,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:l,useTransitions:n})}var Fd=v.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:l,replace:o,mask:s,state:u,target:c,to:p,preventScrollReset:m,viewTransition:g,defaultShouldRevalidate:y,...w},x){let{basename:j,navigator:f,useTransitions:d}=v.useContext(Pe),h=typeof p=="string"&&ka.test(p),k=vd(p,j);p=k.to;let _=Km(p,{relative:i}),E=Ue(),C=null;if(s){let He=Sa(s,[],E.mask?E.mask.pathname:"/",!0);j!=="/"&&(He.pathname=He.pathname==="/"?j:Oe([j,He.pathname])),C=f.createHref(He)}let[R,T,P]=Fh(r,w),ye=Oh(p,{replace:o,mask:s,state:u,target:c,preventScrollReset:m,relative:i,viewTransition:g,defaultShouldRevalidate:y,useTransitions:d});function Ft(He){t&&t(He),He.defaultPrevented||ye(He)}let at=!(k.isExternal||l),jn=v.createElement("a",{...w,...P,href:(at?C:void 0)||k.absoluteURL||_,onClick:at?Ft:t,ref:zh(x,T),target:c,"data-discover":!h&&n==="render"?"true":void 0});return R&&!h?v.createElement(v.Fragment,null,jn,v.createElement(Rh,{page:_})):jn});Fd.displayName="Link";var Dh=v.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:l,to:o,viewTransition:s,children:u,...c},p){let m=wr(o,{relative:c.relative}),g=Ue(),y=v.useContext(Gi),{navigator:w,basename:x}=v.useContext(Pe),j=y!=null&&$h(m)&&s===!0,f=w.encodeLocation?w.encodeLocation(m).pathname:m.pathname,d=g.pathname,h=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(d=d.toLowerCase(),h=h?h.toLowerCase():null,f=f.toLowerCase()),h&&x&&(h=it(h,x)||h);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let _=d===f||!i&&d.startsWith(f)&&d.charAt(k)==="/",E=h!=null&&(h===f||!i&&h.startsWith(f)&&h.charAt(f.length)==="/"),C={isActive:_,isPending:E,isTransitioning:j},R=_?t:void 0,T;typeof r=="function"?T=r(C):T=[r,_?"active":null,E?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(C):l;return v.createElement(Fd,{...c,"aria-current":R,className:T,ref:p,style:P,to:o,viewTransition:s},typeof u=="function"?u(C):u)});Dh.displayName="NavLink";var Th=v.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:l,method:o=ni,action:s,onSubmit:u,relative:c,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:g,...y},w)=>{let{useTransitions:x}=v.useContext(Pe),j=Hh(),f=Wh(s,{relative:c}),d=o.toLowerCase()==="get"?"get":"post",h=typeof s=="string"&&ka.test(s),k=_=>{if(u&&u(_),_.defaultPrevented)return;_.preventDefault();let E=_.nativeEvent.submitter,C=(E==null?void 0:E.getAttribute("formmethod"))||o,R=()=>j(E||_.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:i,state:l,relative:c,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:g});x&&n!==!1?v.startTransition(()=>R()):R()};return v.createElement("form",{ref:w,method:d,action:f,onSubmit:r?u:k,...y,"data-discover":!h&&e==="render"?"true":void 0})});Th.displayName="Form";function Mh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rd(e){let t=v.useContext(_n);return $(t,Mh(e)),t}function Oh(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:l,relative:o,viewTransition:s,defaultShouldRevalidate:u,useTransitions:c}={}){let p=Qi(),m=Ue(),g=wr(e,{relative:o});return v.useCallback(y=>{if(gh(y,t)){y.preventDefault();let w=n!==void 0?n:dr(m)===dr(g),x=()=>p(e,{replace:w,mask:r,state:i,preventScrollReset:l,relative:o,viewTransition:s,defaultShouldRevalidate:u});c?v.startTransition(()=>x()):x()}},[m,p,g,n,r,i,t,e,l,o,s,u,c])}var Bh=0,Uh=()=>`__${String(++Bh)}__`;function Hh(){let{router:e}=Rd("useSubmit"),{basename:t}=v.useContext(Pe),n=oh(),r=e.fetch,i=e.navigate;return v.useCallback(async(l,o={})=>{let{action:s,method:u,encType:c,formData:p,body:m}=xh(l,t);if(o.navigate===!1){let g=o.fetcherKey||Uh();await r(g,n,o.action||s,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||s,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,t,n])}function Wh(e,{relative:t}={}){let{basename:n}=v.useContext(Pe),r=v.useContext(ot);$(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),l={...wr(e||".",{relative:t})},o=Ue();if(e==null){l.search=o.search;let s=new URLSearchParams(l.search),u=s.getAll("index");if(u.some(p=>p==="")){s.delete("index"),u.filter(m=>m).forEach(m=>s.append("index",m));let p=s.toString();l.search=p?`?${p}`:""}}return(!e||e===".")&&i.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Oe([n,l.pathname])),dr(l)}function $h(e,{relative:t}={}){let n=v.useContext(wd);$(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Rd("useViewTransitionState"),i=wr(e,{relative:t});if(!n.isTransitioning)return!1;let l=it(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=it(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fi(i.pathname,o)!=null||Fi(i.pathname,l)!=null}function Vh(){const{pathname:e}=Ue();return v.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function bd(){const[e,t]=v.useState(typeof window<"u"?window.innerHeight:800);return v.useEffect(()=>{const n=()=>t(window.innerHeight);return n(),window.addEventListener("resize",n),window.addEventListener("orientationchange",n),()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)}},[]),e}const Gh=""+new URL("Home-DhTNN8UQ.mp4",import.meta.url).href;function Qh(){const e=bd();return a.jsxs("div",{className:"page-bg",style:{height:`${e}px`},children:[a.jsx("style",{children:`
        .page-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: -1;
          overflow: hidden;
          background: #0B2545;
        }
        .page-bg__video {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .page-bg__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.8) 100%);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px)
        }
      `}),a.jsx("video",{className:"page-bg__video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",children:a.jsx("source",{src:Gh,type:"video/mp4"})}),a.jsx("div",{className:"page-bg__overlay"})]})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ld=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:l,iconNode:o,...s},u)=>v.createElement("svg",{ref:u,...Kh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ld("lucide",i),...s},[...o.map(([c,p])=>v.createElement(c,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(e,t)=>{const n=v.forwardRef(({className:r,...i},l)=>v.createElement(Xh,{ref:l,iconNode:t,className:Ld(`lucide-${Yh(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=K("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=K("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=K("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=K("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=K("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=K("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=K("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=K("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=K("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=K("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=K("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=K("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=K("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=K("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=K("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=K("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=K("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=K("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=K("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=K("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Dt=e=>{var t;(t=document.getElementById(e))==null||t.scrollIntoView({behavior:"smooth"})},Fl=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"services",label:"Services"},{id:"portfolio",label:"Portfolio"},{id:"gallery",label:"Gallery"},{id:"team",label:"Our Staff"},{id:"contact",label:"Contact Us"}];function cg(){const[e,t]=v.useState(!1),[n,r]=v.useState(!1),[i,l]=v.useState("home"),o=Ue(),s=Qi(),u=o.pathname==="/";v.useEffect(()=>{if(!u){l("");return}const p=()=>{r(window.scrollY>24);let m="";for(const g of Fl){const y=document.getElementById(g.id);y&&y.getBoundingClientRect().top<=120&&(m=g.id)}l(m||"home")};return window.addEventListener("scroll",p),p(),()=>window.removeEventListener("scroll",p)},[u]);const c=p=>{if(t(!1),!u)s("/"),setTimeout(()=>{if(typeof Dt=="function")Dt(p);else{const m=document.getElementById(p);m&&m.scrollIntoView({behavior:"smooth"})}},150);else if(typeof Dt=="function")Dt(p);else{const m=document.getElementById(p);m&&m.scrollIntoView({behavior:"smooth"})}};return a.jsxs("header",{className:`gnav ${n?"gnav--scrolled":""}`,children:[a.jsx("style",{children:`
        .gnav {
          position: fixed;
          top: 0; left: 0; right: 0;
          background: rgba(0, 0, 0, 0.10);
          z-index: 50;
          padding: 20px 0;
          transition: background 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .gnav--scrolled {
          background: rgba(0, 0, 0, 0.50);
          backdrop-filter: blur(10px);
          padding: 20px 0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }
        .gnav__inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .gnav__brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.01em;
          background: none;
          border: none;
          cursor: pointer;
        }
        .gnav__links { display: flex; gap: 30px; }
        .gnav__link {
          background: none;
          border: none;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          padding-bottom: 6px;
          border-bottom: 2px solid transparent;
          opacity: 0.8;
          transition: opacity 0.2s, border-color 0.2s;
        }
        .gnav__link:hover { opacity: 1;  }
        .gnav__link--active { opacity: 1; border-bottom-color: #1D5DA8; }
        .gnav__toggle { display: none; background: none; border: none; color: #fff; cursor: pointer; }
        .gnav__mobile { display: none; }

        @media (max-width: 960px) {
          .gnav__links { display: none; }
          .gnav__toggle { display: block; }
          .gnav__mobile {
            display: flex;
            flex-direction: column;
            max-height: 0;
            overflow: hidden;
            background: rgb(0, 0, 0);
            transition: max-height 0.3s ease;
          }
          .gnav__mobile.is-open { max-height: 420px; padding: 8px 0 16px; }
          .gnav__mobile button {
            background: none; border: none; text-align: left;
            color: #fff; padding: 12px 32px; font-size: 0.9rem;
            font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
            cursor: pointer;
          }
        }
      `}),a.jsxs("div",{className:"gnav__inner",children:[a.jsx("button",{className:"gnav__brand",onClick:()=>c("home"),children:"GeoAi Lab"}),a.jsx("nav",{className:"gnav__links","aria-label":"Primary",children:Fl.map(p=>a.jsx("button",{className:`gnav__link ${i===p.id?"gnav__link--active":""}`,onClick:()=>c(p.id),children:p.label},p.id))}),a.jsx("button",{className:"gnav__toggle","aria-label":e?"Close menu":"Open menu",onClick:()=>t(p=>!p),children:e?a.jsx(La,{size:24}):a.jsx(sg,{size:24})})]}),a.jsx("div",{className:`gnav__mobile ${e?"is-open":""}`,children:Fl.map(p=>a.jsx("button",{onClick:()=>c(p.id),children:p.label},p.id))})]})}function dg(){return a.jsxs("footer",{className:"footer",children:[a.jsx("style",{children:`
        .footer {
          background: #081b33;
          padding: 24px;
          text-align: center;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          border-top:1px solid white;
        }
        .footer p {
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          margin: 0;
        }
      `}),a.jsxs("p",{children:["© ",new Date().getFullYear()," GeoAi Lab — National Building Research Institute"]})]})}function fg(){const e=bd();return a.jsxs("section",{id:"home",className:"hero",style:{height:`${e}px`},children:[a.jsx("style",{children:`
        /* ── Keyframe Animations ───────────────────────────────── */
        @keyframes heroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes heroBounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(8px);
          }
        }

        /* ── Section Base ──────────────────────────────────────── */
        .hero {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: transparent;
          color: #fff;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow: hidden;
          min-height: 60vh; 
        }

        .hero__content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          text-align: center;
          padding: 0 24px;
        }

        /* ── Title Animation ───────────────────────────────────── */
        .hero__title {
          font-size: 6rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.01em;
          background: none;
          border: none;
          animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
        }

        /* ── Subtitle Animation ────────────────────────────────── */
        .hero__subtitle {
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          line-height: 1.7;
          opacity: 0;
          margin: 0 auto 32px;
          max-width: 780px;
          animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        /* ── Actions Row ───────────────────────────────────────── */
        .hero__actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Buttons with Hover Micro-interactions ──────────────── */
        .hero__btn {
          padding: 13px 28px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          opacity: 0;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.25s ease;
        }

        .hero__btn--primary {
          background: #1D5DA8;
          color: #fff;
          animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
        }

        .hero__btn--primary:hover {
          transform: translateY(-4px) scale(1.02);
          background: #2269be;
          box-shadow: 0 10px 25px rgba(29, 93, 168, 0.45);
        }

        .hero__btn--primary:active {
          transform: translateY(-1px) scale(0.99);
        }

        .hero__btn--secondary {
          background: rgba(255, 255, 255, 0.95);
          color: #0B2545;
          backdrop-filter: blur(4px);
          animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.58s forwards;
        }

        .hero__btn--secondary:hover {
          background: #ffffff;
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        .hero__btn--secondary:active {
          transform: translateY(-1px) scale(0.99);
        }

        /* ── Scroll Down Indicator ──────────────────────────────── */
        .hero__scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          backdrop-filter: blur(8px);
          opacity: 0;
          animation: heroFadeIn 0.6s ease 0.75s forwards,
                     heroBounce 2.2s ease-in-out 1.35s infinite;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .hero__scroll:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* ── Mobile Responsive ─────────────────────────────────── */
        @media (max-width: 600px) {
          .hero__btn { width: 100%; text-align: center; }
          .hero__actions { width: 100%; padding: 0 12px; }
        }

        /* ── Reduced Motion Respect ───────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .hero__title,
          .hero__subtitle,
          .hero__btn,
          .hero__scroll {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}),a.jsxs("div",{className:"hero__content",children:[a.jsx("h1",{className:"hero__title",children:"Make Your Geo - Artifact"}),a.jsx("p",{className:"hero__subtitle",children:"Geoinformatics & Intelligence Laboratory (GeoAi Lab) at the National Building Research Institute consists of Geospatial and Remote Sensing Analysts, Cartographers and Visualization Experts, IT & Database Administrators and Software Developers/Programmers trained in geomatics, geography, statistics, and urban informatics."}),a.jsxs("div",{className:"hero__actions",children:[a.jsx("button",{className:"hero__btn hero__btn--primary",onClick:()=>Dt("contact"),children:"Contact Us"}),a.jsx("button",{className:"hero__btn hero__btn--secondary",onClick:()=>Dt("services"),children:"Get a Quotation"})]})]}),a.jsx("button",{className:"hero__scroll","aria-label":"Scroll down",onClick:()=>Dt("about"),children:a.jsx(eg,{size:24})})]})}function b({children:e,delay:t=0,distance:n=60,blur:r=!0,threshold:i=.08}){const l=v.useRef(null),[o,s]=v.useState("below"),[u,c]=v.useState(!1);if(v.useEffect(()=>{c(window.matchMedia("(prefers-reduced-motion: reduce)").matches)},[]),v.useEffect(()=>{const g=l.current;if(!g)return;const y=new IntersectionObserver(([w])=>{w.isIntersecting?s("visible"):s(w.boundingClientRect.top<0?"above":"below")},{threshold:i});return y.observe(g),()=>y.disconnect()},[i]),u)return a.jsx(a.Fragment,{children:e});const p={below:`translateY(${n}px)`,visible:"translateY(0px)",above:`translateY(-${n}px)`},m=o==="visible";return a.jsx("div",{ref:l,style:{opacity:m?1:0,transform:p[o],filter:r?`blur(${m?0:12}px)`:void 0,willChange:"transform, opacity, filter",transition:[`opacity   0.9s cubic-bezier(0.16, 1, 0.3, 1) ${t}ms`,`transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${t}ms`,r&&`filter 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${t}ms`].filter(Boolean).join(", ")},children:e})}const pg=""+new URL("aboutbg-D8t2ei34.jpg",import.meta.url).href;function mg(){return a.jsxs("section",{id:"about",className:"about",style:{background:`url(${pg}) no-repeat center center / cover`},children:[a.jsx("style",{children:`
        .about {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px clamp(24px, 5vw, 80px);
          box-sizing: border-box;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow: hidden;
        }

        /* Screen width එක වැඩි වෙද්දී inner container එක loku වෙනවා */
        .about__inner {
          max-width: clamp(1100px, 85vw, 1600px);
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: clamp(40px, 5vw, 90px);
          align-items: center;
        }

        .about__image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .about__image {
          width: 150%;
          max-width: clamp(280px, 22vw, 480px);
          height: auto;
          object-fit: contain;
          display: block;
        }

        .about__badge {
          display: inline-block;
          font-size: clamp(0.75rem, 0.9vw, 1rem);
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7A1113;
          margin-bottom: 14px;
        }

        /* Main Heading එක scale වීම */
        .about__title {
          font-size: clamp(1.8rem, 3.2vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 20px;
          line-height: 1.2;
        }

        /* Body Text එක scale වීම */
        .about__text {
          color: #000000;
          line-height: 1.8;
          font-size: clamp(1rem, 1.15vw, 1.3rem);
          margin: 0 0 32px;
        }

        /* Button එක scale වීම */
        .about__link {
          display: inline-block;
          padding: clamp(12px, 1vw, 18px) clamp(26px, 2vw, 40px);
          border-radius: 6px;
          background: #0B2545;
          color: #ffffff;
          text-decoration: none;
          font-size: clamp(0.8rem, 0.9vw, 1.05rem);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .about__link:hover {
          background: #133a68;
          transform: translateY(-2px);
        }

        @media (max-width: 800px) {
          .about {
            min-height: 100vh;
            padding: 80px 20px 40px;
          }
          .about__inner {
            grid-template-columns: 1fr;
            gap: 28px;
            text-align: center;
          }
          .about__image {
            max-width: 220px;
            margin: 0 auto;
          }
          .about__link {
            margin: 0 auto;
          }
        }
      `}),a.jsxs("div",{className:"about__inner",children:[a.jsx(b,{direction:"right",distance:60,blur:!1,children:a.jsx("div",{className:"about__image-wrapper",children:a.jsx("img",{src:"https://geoailab.nbro.lk/wp-content/uploads/2025/02/NBRO-Logo-03.png",alt:"National Building Research Institute (NBRO) Logo",className:"about__image"})})}),a.jsxs("div",{children:[a.jsx(b,{delay:0,children:a.jsx("span",{className:"about__badge",children:"With the parenting of"})}),a.jsx(b,{delay:100,children:a.jsx("h2",{className:"about__title",children:"National Building Research Institute"})}),a.jsx(b,{delay:200,children:a.jsx("p",{className:"about__text",children:"NBRI is the designated national focal point for landslide risk management in Sri Lanka. As part of its responsibilities, NBRI carries out landslide-related studies, investigations, mapping, monitoring, early warning and mitigation work, and provides Landslide Risk Assessment Reports as a pre-requisite for approving building permits and development plans. NBRI's expertise extends into environmental management, human settlements planning, engineering project management, geotechnical engineering, and building materials engineering."})}),a.jsx(b,{delay:300,children:a.jsx("a",{className:"about__link",href:"https://nbro.gov.lk/index.php?option=com_content&view=article&id=12&Itemid=166&lang=en",target:"_blank",rel:"noopener noreferrer",children:"About Us"})})]})]})]})}const hg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAkFBMVEX///8xMnwnKHgSFHHw8PWBgaYvMHstLnosLXo+P4JKS4d8fKUiI3ZHR4U1Nn0dHnSoqMIlJncMDnAVF3ILDXC3t8wTFXGJia7Y2OPn5+4ZGnPf3+j5+fvDw9OursY6O4FXV4ycnLnMzNpra5oAAG5xcZ2RkbNhYZS8vM9wcJ/i4upkZZdSUoyRkbTPz9xWVpB3KH3mAAAL1ElEQVR4nO2d6XLivBKGkU1kERyMbcLigbBkYxJC7v/ujp1l2Nyt1mp/1Hl/TNVUBeMHSS2p1d3qdJyr+7ZZDNcv/dWuN2ClxMT9d3rS23b9vMvCIkniNBAR5xUfC26afi876vbCPIlFxM51NYCjC7QrAwyvD7D78HL0n2sDnN+vsnH/8P8rA9w8h4lgwZUCzocsF9UcYBVw2HXztsp662fxz2RgFfDuqf/HzRsrab8aBYd3twl4GwXZauPmrcna3Ibi+N3tApbLuvHdws2bk7S/zcXpu9sGZCwq7ppqxennWJy/u33AEnG8m7ohQNX9m53jOQIsO2r2OHNDAWudBXXv7gaw/MzoRf4Bi9qwmNe+uytAxmLhz9qUvfNyE+QakPHw3dPMf5/U9U7ngOUH8wc3RCfqvucQnmtAxouV80ZcFJe20xtg1YhbN1y/6mcInmXAXd1A5+GzG7IvzZYxyue+BUul7M0NXWldIOPpFZBFT/du+CZh7dznHZCxsC//tLLmq0SG52MMfivezW3zzQbg5NcAIAtsD8RpLht+9gE/sQlJ5FY3Ufcj6fDzDMi4TVMzzGh8PgEZy9a2+D6gV20WkIWWjqkmyOLTJeBKBsgKKx7WSUHm8w3ICgsTogIfj8Oj/Ywx4KsckCXGhHS+KBEn2zUvgMa99IM6/ngyODPbfgBZYWRphkT7yWNxsdk2BnwnAbLQYLa4x3d/h1fOa77EFyDLtGf8KW39Eo36dY4Eb4DsSXPVNstJfPGy3u/sD5DnWivv+YDyBVEGeWSNAR+pgEwwnd3TirI/invgEZ5HQBbs1PkmhP0tyxAbbQz4TPmFfxQrT/hbggEVBeZN9wrIQkVTOiNskOJb1AvrF5A9qRmapbz/jyW9wjNgxFT4+hL/Z7WhHkqe4RmQpQoe4QUUZnb4vTLp5GoM2FcDZCHZqz+XGlARyw+VvQPynHoy8y57smCER3kHZMGK9uB72RaJxNcAICtI54fSDkrjMwe8UQakdVKZ8SLyNQHIgnf5YzeSJYzgxKHcBCAL5ZEKA9xHH8VUU9UIIBeyp67xEcgzctBRI4AslsTTdCWbeIXNczOAbIT3MImFGcvWZ80DBo/YM//gFkZp12UMONECZCE2iHBvubhT4GsMUCC7+z3uBi2UonDMAVMtQDaG7cQObcBMLRquMcAI7GibMfa5WNFH3hggy6GWQBswWqrxNQgINSE+AjPVEP/mAKFRiHqS4w9FviYBxarueW+YnyIaqPI1CVjf3W6w5432/ynAoGZFMsc8oYFGDGOTgHUr0iHiKaS7c9oCGF8eWC6RfWDNn7cckEfnT9sjniYeaPCZA77ggBzVxUyBubASrWB3x4B8gIqfWY35GDYxcjdAE4Cx2q++RTwVeg3oHFBh791BVzF6I7BlgF1kJ6/4Ux2eaQq4tgh4D/dQHurQdWwAomd4aoBID01189raBDhHImJGuqmJbQJcwD1UvGrRddoFiHggE+20xDYBRnAPTbTgKplXQrAG+Ab7KlL9aMwWAT7AT8rVN7q/ahEgfCChu4qp1CJAeMVg0ENbBDiD/b2FQYJQewDhnQQvNOEqGQMipkEN8APsogI9a5PIHBA9bFYAhHOEFDeVp2oPILyZH5tU5GkN4Ax2N8W6cJVaAwivtAUhrAZWa4wMbI213KH/1BpA2GGYGKXJGgMibgYlQNiIZkaVMVoDCO7mNf2hv2oL4Bx0qOlv5r/kGpA6R8/ADEg+6KnLGyBnuO/+W/FbZwqnePJIVeIott8xoOTw5UflbgFxOKmLH510uwYkKdlKZhtFtQ6wNEW4g1xRrQNM11cOGEx0Y/rq1TpA8ayShihX+wBXnRWpUAxRrQPku84tsZIK7XmtA+x17syfcvS8tgGyQad31S3IWGdg4ym/+j9gJc+AV99Fr97I7K66Bctp4uon+qtfql39Yvvqt0vXDVhueO+v3WVx9U6nFrsNC0EUEse0QR2/t+qyCLhd3hE1AAmLt04Hdt2vaC8CyOOtPXANvbDb6RRtPXyhC+6jow6Wt9vw8Rn9m8C0sqgaMnAsZcMHoGRtQHP7lXPV2iNssuDA0rQiQIIQjA4I/QHC+4WkqoIEh6rxZsNIyKq/nqVS/hXo09ZAIKr+wMGE3ykRsBnVzQn5kjdA+ADwJx0bTqExigTyBggnfQTf4a5tDaekCk76iL8LHs7gmHSTmdAX4AbeLfzakAD8CYImQ5qJgjNh+W9OBBzM1WhQOlFw8/yL50XiEIoG0wpo2sM99N8kgCSGGLyMJ0DEK3iYxhnYynys/c2eABN4O39YiCG/QqJ9U5UfQMSldFTvAUuvW+l+tR9ApCD+UdtgCZJZYwmSFM2QEirH+3UkxVV7KvQCiGRqn/Q9LEk507zDyQsgUkLlJKB0jlQ7aizNnCAsvem04gpWKCDV+3IfgPAq5tw6trHUg1xY6shZyPMc9I42V6xDLsRnz8Iz09HCcitSYQ14UaRpipgZnuoYUveAyAisSe3E4mVkZVdr5RwQy7Pn/OLPsdhtHjZRtEr6fKxJLn3WaNkxnVRQ14BoMdu6QrhouIW8dv+FHAOi5bLrCsd1Zk/IJ6LLPi2TY0CGBTCNaj3Wj1gTqlYXdQ04wWIngD0eNlOUnZRcYPtHTgGn6I0YIeBJQq9sVK5P6RQQrecuboFP4RVUU8Wbf1wCopU0GXzBK37rJv3KEdeAC7Ql4CLGkibkkirr3gC7+J1JITKl4Xcaih78SZ+APfwtP5GPomVwy2H4tw2Az3j4IG7uJfesFAphCa4A1/itpJJitrLrGEZ0Q+MIcIEtuJj0OobOsD0XatRqKrmUTR76ssQfwEOqI9gJ4Aypg/r1evI1815yLVgkfF1qU/dMIbsAnFDnTnafk7driWoeySR8+HUhP5rDcTVKhPYBpXycdiPGFr9Ww9vVYMp8LCdeI/lXermbIFga24Az2fhjATW2TtpJWZR7uJ7vVNNQxkfsoJU20gsWudxc2QVcyC8lVbmyBXUIfBOOZDOqVcD1k5RPbb+KL9i/VEhW3jYBn/H1ZyVFjwP4dsc/Wc/tNbWHJ/Xk6Udc9ah9QbloOMOW3tYAtxkhAxB9lVp9EBJreIj0e1uAfcxF/6tEY1y/UhIL0wE4X9gBnA4o2XHU601PRbhNubqQF/IIWwGcjCgZuNFAK1Cii5z6Hinm9U4eC4AbRsr942PNWB7c1X34/bLHOnNqDDh7DEkJ1FzjSqEfbaUrmm+JsOaE1BiQMDl8KVO8qf1YD4TJohKP04tzfGPAW1oCfGiSGtBZoxfaHSMm4gzRE2ChfGfZqSbyRdI/xHR4bMz8ABYGUeWqhGVHPb6k3gtgYeGkSoHw5OhYC/DYXhAAbfCVhNRxaAq4vwmflADN++e31kRbagS4uImL4OT2BylgaGhfDnqQOPRNAf8MX/OiWvpyBUA+MpofTrWlrOi1AGeL9WuSxz9hdQqAfGQwv19qWpCqstAAq5Ezn023w5tdmiXpUcwgHTAa66es1Kq7pOyeSIB8cNeLR1mSxMH5r0YGDAa6sfKwXgk7YBJgVUIC6PFUwGSlGUiO6kVuTGmAsGiAHNyDGmoh9b16AYzU/S9UdXuSDagPwHhpf/gdNMFnRA+AmWI8kqo2MWZNnQMG+jd5UTX/i0z6rgHzdxfW81xbuBHdAgaJ1cULrHkfGokuAaPs2UfzfWu/rE+8dAfIY2ZU/EVZw6yunzoDDKSnddbV7Y8up31HgCJ7NipOpKm394uVjRNAEa5MqqKYaP95hugAUIQ7yxsjJZWIx2PROmCJ59e2XGr6+HRIkrILKILRe5Ot96vZJPuNO7EKePd08+Ydpl7zh1741YxWAR/8zesETftFIuwCtk3z7XsYXjNgqfn90XpDBzDKmnt5ZSkDBnEoHO9mrUoW334skSZh/PzQFqNJU3c3HleuTxxTBHGSh7vJ1qWjxZlmi+HNqsjyIonTNBARryrzlP9EIkjTOCmKLPvsrxf/rYar0Wy6uF+vJ4+r3V1vMOjd3a7e+y/rh8V+5mGm+x9Fh/IE2xP30QAAAABJRU5ErkJggg==",gg=""+new URL("2-Br0Twueg.jpeg",import.meta.url).href,vg=""+new URL("3-CNvKe2kJ.jpg",import.meta.url).href,yg=""+new URL("4-NNCUqv3_.png",import.meta.url).href,xg=""+new URL("5-D28oYSE5.png",import.meta.url).href,wg=""+new URL("6-DyqmvNzd.jpg",import.meta.url).href,kg=[{name:"Engineering and Laboratory Services(Pvt) LTD",logo:hg},{name:"Kahatagaha Graphite",logo:gg},{name:"Waste Management Authority",logo:vg},{name:"Road Development Authority",logo:yg},{name:"Sri Lanka Railway",logo:xg},{name:"Plantation Human Development Trust",logo:wg}],Sg=[{icon:ag,title:"LIDAR DATA ACQUISITION & PROCESSING",text:"High-resolution LiDAR point cloud data capture and processing for accurate terrain representation and orthomosaic maps."},{icon:rg,title:"GROUND CONTROL & ELEVATION DATA COLLECTION",text:"Accurate ground control points and elevation data collection for high-precision mapping and verification."},{icon:lg,title:"2D & 3D MAPPING OUTPUTS",text:"Delivering high-quality 2D and 3D mapping solutions tailored to your project's needs and industry standards."},{icon:Jh,title:"PHOTOGRAMMETRY SURVEY & 3D MODELING",text:"Utilizing drone-based photogrammetry for terrain reconstruction and 3D modeling for various applications."}];function _g(){return a.jsxs("div",{className:"main-container",children:[a.jsx("style",{children:`
        /* ── Main Container Base ───────────────────────────────── */
        .main-container {
          background-color: #FFFFFF;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
        }

        .section-wrapper {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding: 90px 24px;
          box-sizing: border-box;
          gap: 90px;
        }

        /* ── Anchor Scroll Offsets ────────────────────────────── */
        #services,
        #clients {
          scroll-margin-top: 110px;
        }

        /* ── Common Header Styles ─────────────────────────────── */
        .section-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 48px;
        }

        .section-title {
          font-size: clamp(2rem, 3.2vw, 2.8rem);
          font-weight: 800;
          color: #1E293B;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 0.95rem;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Grid Stretch Fix for ScrollReveal Wrappers ───────── */
        .services-grid > *,
        .clients-grid > * {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* ── 1. SERVICES WE OFFER SECTION ──────────────────────── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .service-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 40px 24px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          box-sizing: border-box;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.09);
        }

        .service-icon {
          color: #1D5DA8;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #EFF6FF;
          width: 64px;
          height: 64px;
          border-radius: 12px;
        }

        .service-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #1E293B;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1.45;
          margin: 0 0 14px;
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-text {
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.65;
          margin: 0;
        }

        /* ── 2. OUR CLIENTS SECTION ─────────────────────────────── */
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .client-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 24px 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          box-sizing: border-box;
        }

        .client-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.08);
        }

        .client-logo-wrapper {
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .client-logo {
          max-width: 100%;
          max-height: 80px;
          object-fit: contain;
        }

        .client-name {
          font-size: 0.78rem;
          font-weight: 700;
          color: #334155;
          line-height: 1.35;
          margin: 0;
        }

        /* ── Responsive Rules ──────────────────────────────────── */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .clients-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .section-wrapper {
            padding: 70px 24px;
            gap: 70px;
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .clients-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .section-wrapper {
            padding: 60px 16px;
          }
          #services,
          #clients {
            scroll-margin-top: 90px;
          }
        }
      `}),a.jsxs("div",{className:"section-wrapper",children:[a.jsxs("section",{id:"services",className:"services-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx(b,{delay:0,children:a.jsx("h2",{className:"section-title",children:"Services We Offer"})}),a.jsx(b,{delay:100,children:a.jsx("p",{className:"section-subtitle",children:"Providing top-quality data acquisition and processing services for detailed terrain modeling and analysis."})})]}),a.jsx("div",{className:"services-grid",children:Sg.map((e,t)=>{const n=e.icon;return a.jsx(b,{delay:t%4*120,direction:"up",distance:30,children:a.jsxs("div",{className:"service-card",children:[a.jsx("div",{className:"service-icon",children:a.jsx(n,{size:32,strokeWidth:1.8})}),a.jsx("h3",{className:"service-title",children:e.title}),a.jsx("p",{className:"service-text",children:e.text})]})},t)})})]}),a.jsxs("section",{id:"clients",className:"clients-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsx(b,{delay:0,children:a.jsx("h2",{className:"section-title",children:"Our Clients"})}),a.jsx(b,{delay:100,children:a.jsx("p",{className:"section-subtitle",children:"We provide geospatial solutions and insights to a diverse range of clients, helping them make informed decisions."})})]}),a.jsx("div",{className:"clients-grid",children:kg.map((e,t)=>a.jsx(b,{delay:t%6*100,direction:"up",distance:30,children:a.jsxs("div",{className:"client-card",children:[a.jsx("div",{className:"client-logo-wrapper",children:a.jsx("img",{src:e.logo,alt:e.name,className:"client-logo",onError:n=>{n.target.onerror=null,n.target.src="https://via.placeholder.com/85x85?text=Logo"}})}),a.jsx("p",{className:"client-name",children:e.name})]})},t))})]})]})]})}const jg=""+new URL("1-CteEZfCn.png",import.meta.url).href,Eg=""+new URL("2-Btj7Qm93.png",import.meta.url).href,Cg=""+new URL("3-BcvX8iaB.png",import.meta.url).href,Ng=""+new URL("4-CGcrvV2i.png",import.meta.url).href,Fg=""+new URL("5-B6v8zEe8.png",import.meta.url).href,Rg=""+new URL("6-BoPcjGRw.png",import.meta.url).href,bg=[{title:"Training",image:jg,description:"Businesses in the construction and engineering industry, Agriculture and farming operations, Real estate and property management companies, Infrastructure inspection and maintenance, Media and entertainment industry, Emergency services and disaster management, Energy sector, Transportation and logistics companies and Government agencies and municipalities.",hasLearnMore:!1},{title:"Remote Sensing",image:Eg,description:"Remote Sensing is the science and technology of obtaining information about objects, areas, or phenomena from a distance, typically using aircraft, satellites, drones, or other sensing technologies. Instead of physically being in contact with the subject, remote sensing captures data using sensors that detect energy reflected or emitted from the Earth's surface.",hasLearnMore:!1},{title:"Spatial Database Management",image:Cg,description:"Spatial Database Management refers to the storage, retrieval, and management of spatial data, which includes data that represents objects in a geometric space, such as points, lines, and polygons. Spatial databases extend traditional databases by adding spatial data types along with specialized indexing methods that enable efficient querying of spatial data.",hasLearnMore:!1},{title:"Drone Surveys",image:Ng,description:"The GeoAI Laboratory offers cutting-edge drone survey services that provide high-precision data for a variety of applications. By utilizing advanced drones equipped with RGB, LiDAR, thermal, and multispectral cameras, the lab supports sectors such as urban planning, environmental monitoring, disaster management, agriculture, and construction.",hasLearnMore:!1},{title:"Land Layout Planning",image:Fg,description:"Land Layout Planning is a crucial process in urban development, ensuring the efficient and sustainable use of land for residential, commercial, and recreational purposes. It involves designing the arrangement of plots, roads, utilities, and public spaces to create functional, aesthetically pleasing, and environmentally friendly layouts.",hasLearnMore:!1},{title:"Spatial Data Visualization",image:Rg,description:"Spatial Data Visualization refers to the graphical representation of geographic information and spatial data. It transforms complex data sets into visual formats such as maps, 3D models, charts, and infographics, making it easier to analyze spatial relationships, patterns, and trends.",hasLearnMore:!1}];function Lg(){return a.jsxs("section",{id:"capabilities",className:"capabilities-section",children:[a.jsx("style",{children:`
        /* ── Base Section ──────────────────────────────────────── */
        .capabilities-section {
          background-color: #FFFFFF;
          padding: 100px 24px;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
        }

        .capabilities-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Header ────────────────────────────────────────────── */
        .capabilities-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .capabilities-badge {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3B82F6;
          margin-bottom: 10px;
          display: block;
        }

        .capabilities-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* ── Grid Layout ───────────────────────────────────────── */
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px 36px;
        }

        /* ── Capability Card ───────────────────────────────────── */
        .capability-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }

        .capability-image-box {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          background: transparent;
        }

        .capability-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
          mix-blend-mode: multiply;
        }

        .capability-card:hover .capability-image {
          transform: translateY(-6px);
        }

        .capability-item-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 12px 0;
        }

        .capability-item-desc {
          font-size: 0.88rem;
          line-height: 1.65;
          color: #64748B;
          margin: 0 0 14px 0;
        }

        .capability-learn-more {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2563EB;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .capability-learn-more:hover {
          color: #1D4ED8;
          gap: 10px;
        }

        /* ── Responsive Rules ──────────────────────────────────── */
        @media (max-width: 1024px) {
          .capabilities-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 28px;
          }
        }

        @media (max-width: 640px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
          .capabilities-section {
            padding: 60px 20px;
          }
        }
      `}),a.jsxs("div",{className:"capabilities-container",children:[a.jsxs("div",{className:"capabilities-header",children:[a.jsx(b,{delay:0,children:a.jsx("span",{className:"capabilities-badge",children:"SERVICES"})}),a.jsx(b,{delay:100,children:a.jsx("h2",{className:"capabilities-title",children:"Things we're great at"})})]}),a.jsx("div",{className:"capabilities-grid",children:bg.map((e,t)=>a.jsx(b,{delay:t%3*150,direction:"up",distance:40,children:a.jsxs("div",{className:"capability-card",children:[a.jsx("div",{className:"capability-image-box",children:a.jsx("img",{src:e.image,alt:e.title,className:"capability-image",onError:n=>{n.target.onerror=null,n.target.src="https://via.placeholder.com/200x180?text=Image"}})}),a.jsx("h3",{className:"capability-item-title",children:e.title}),a.jsx("p",{className:"capability-item-desc",children:e.description}),e.hasLearnMore&&a.jsx("a",{href:"#contact",className:"capability-learn-more",children:"Learn more →"})]})},t))})]})]})}const Pg=""+new URL("1-1-E0a3lwkc.png",import.meta.url).href,zg=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),Ag=""+new URL("2-1-lpWAEHPi.png",import.meta.url).href,Ig=Object.freeze(Object.defineProperty({__proto__:null,default:Ag},Symbol.toStringTag,{value:"Module"})),Dg=""+new URL("3-1-HL4RERJF.png",import.meta.url).href,Tg=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),Mg=""+new URL("5 (1)-DWqJckSD.png",import.meta.url).href,Og=Object.freeze(Object.defineProperty({__proto__:null,default:Mg},Symbol.toStringTag,{value:"Module"})),Bg=""+new URL("5-D_OmzI5i.jpg",import.meta.url).href,Ug=Object.freeze(Object.defineProperty({__proto__:null,default:Bg},Symbol.toStringTag,{value:"Module"})),Hg=""+new URL("536163210_122262723284189485_3947337182688082803_n-BQpmyGVC.jpg",import.meta.url).href,Wg=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),$g=""+new URL("679052058_122311537388189485_8172467957558451388_n-DP40fZ5q.jpg",import.meta.url).href,Vg=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),Gg=""+new URL("SLOPE-MAP-4oUKW8q2.jpg",import.meta.url).href,Qg=Object.freeze(Object.defineProperty({__proto__:null,default:Gg},Symbol.toStringTag,{value:"Module"})),Yg=Object.assign({"../assets/images/gallery/1-1.png":zg,"../assets/images/gallery/2-1.png":Ig,"../assets/images/gallery/3-1.png":Tg,"../assets/images/gallery/5 (1).png":Og,"../assets/images/gallery/5.jpg":Ug,"../assets/images/gallery/536163210_122262723284189485_3947337182688082803_n.jpg":Wg,"../assets/images/gallery/679052058_122311537388189485_8172467957558451388_n.jpg":Vg,"../assets/images/gallery/SLOPE-MAP.jpg":Qg}),Ee=Object.values(Yg).map(e=>({image:e.default}));function Kg(){const[e,t]=v.useState(!1),[n,r]=v.useState(null);v.useEffect(()=>(e||n!==null?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e,n]),v.useEffect(()=>{const l=o=>{n!==null&&(o.key==="Escape"&&r(null),o.key==="ArrowRight"&&r(s=>(s+1)%Ee.length),o.key==="ArrowLeft"&&r(s=>(s-1+Ee.length)%Ee.length))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[n]);const i=v.useMemo(()=>Ee.slice(0,8),[]);return a.jsxs("section",{id:"gallery",className:"pg-gallery-section",children:[a.jsx("style",{children:`
        /* ── Base Section ────────────────────────────────────────── */
        .pg-gallery-section {
          background-color: #FFFFFF;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1A202C;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 90px 24px;
          box-sizing: border-box;
        }

        #gallery {
          scroll-margin-top: 50px;
        }

        .pg-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── Grid Layout ───────────────────────────────────────── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: stretch;
        }

        /* ── Center Header Card ────────────────────────────────── */
        .pg-header-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 24px 20px;
        }

        .pg-title {
          font-size: clamp(2rem, 3.2vw, 3rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .pg-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #475569;
          margin: 0;
          max-width: 380px;
        }

        /* ── Image Card Component ───────────────────────────────── */
        .pg-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          aspect-ratio: 16 / 10;
          cursor: pointer;
          height: 100%;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pg-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .pg-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pg-card:hover .pg-card__img {
          transform: scale(1.06);
        }

        .pg-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.5) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .pg-card:hover .pg-card__overlay {
          opacity: 1;
        }

        .pg-card__icon {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── See More Button Container ─────────────────────────── */
        .pg-actions {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }

        .pg-btn-see-more {
          background: #0F172A;
          color: #FFFFFF;
          border: none;
          padding: 16px 38px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pg-btn-see-more:hover {
          background: #1E293B;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.3);
        }

        .pg-btn-see-more:active {
          transform: translateY(0) scale(0.98);
        }

        /* ── Modal & Lightbox Animations ──────────────────────── */
        @keyframes pgFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pgSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Full Gallery Modal Popup ───────────────────────── */
        .pg-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 20px;
          animation: pgFadeIn 0.3s ease forwards;
        }

        .pg-modal-content {
          background: #FFFFFF;
          width: 100%;
          max-width: 1320px;
          height: 88vh;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: pgSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .pg-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 36px;
          border-bottom: 1px solid #E2E8F0;
        }

        .pg-modal-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
        }

        .pg-modal-subtitle {
          font-size: 0.85rem;
          color: #64748B;
          margin-top: 4px;
        }

        .pg-modal-close-btn {
          background: #F1F5F9;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #0F172A;
          transition: all 0.2s ease;
        }

        .pg-modal-close-btn:hover {
          background: #E2E8F0;
          transform: rotate(90deg);
        }

        .pg-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 36px;
        }

        .pg-modal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        /* ── Fullscreen Lightbox Preview ────────────────────── */
        .pg-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1100;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pgFadeIn 0.25s ease forwards;
        }

        .pg-lightbox__img {
          max-width: 90vw;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.8);
          animation: pgSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .pg-lightbox__btn {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          border: none;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .pg-lightbox__btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.08);
        }

        .pg-lightbox__close { top: 30px; right: 30px; }
        .pg-lightbox__prev { left: 30px; }
        .pg-lightbox__next { right: 30px; }

        .pg-lightbox__counter {
          position: absolute;
          bottom: 24px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          letter-spacing: 0.1em;
        }

        /* ── Responsive Rules ────────────────────────────────── */
        @media (max-width: 1024px) {
          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pg-header-card {
            grid-column: span 2;
            padding: 10px 0 20px;
          }
          .pg-gallery-section {
            min-height: auto;
            padding: 70px 24px;
          }
        }

        @media (max-width: 640px) {
          .pg-grid {
            grid-template-columns: 1fr;
          }
          .pg-header-card {
            grid-column: span 1;
          }
          .pg-gallery-section {
            padding: 60px 16px;
          }
          .pg-modal-content {
            height: 95vh;
            border-radius: 16px;
          }
          .pg-modal-header {
            padding: 18px 20px;
          }
          .pg-modal-body {
            padding: 20px;
          }
        }
      `}),a.jsxs("div",{className:"pg-container",children:[a.jsxs("div",{className:"pg-grid",children:[i[0]&&a.jsx(b,{delay:0,direction:"up",distance:30,children:a.jsxs("div",{className:"pg-card",onClick:()=>r(0),children:[a.jsx("img",{src:i[0].image,alt:"Gallery item",className:"pg-card__img"}),a.jsx("div",{className:"pg-card__overlay",children:a.jsx("span",{className:"pg-card__icon",children:a.jsx(Ur,{})})})]})}),a.jsxs("div",{className:"pg-header-card",children:[a.jsx(b,{delay:0,children:a.jsx("h2",{className:"pg-title",children:"Photo Gallery"})}),a.jsx(b,{delay:100,children:a.jsx("p",{className:"pg-description",children:"At GeoAI Laboratory, we have conducted several training and awareness sessions focused on leveraging geospatial technologies and artificial intelligence for real-world applications. These sessions aim to empower participants with cutting-edge tools."})})]}),i[1]&&a.jsx(b,{delay:200,direction:"up",distance:30,children:a.jsxs("div",{className:"pg-card",onClick:()=>r(1),children:[a.jsx("img",{src:i[1].image,alt:"Gallery item",className:"pg-card__img"}),a.jsx("div",{className:"pg-card__overlay",children:a.jsx("span",{className:"pg-card__icon",children:a.jsx(Ur,{})})})]})}),i.slice(2,8).map((l,o)=>a.jsx(b,{delay:o%3*120,direction:"up",distance:30,children:a.jsxs("div",{className:"pg-card",onClick:()=>r(o+2),children:[a.jsx("img",{src:l.image,alt:`Gallery item ${o+3}`,className:"pg-card__img"}),a.jsx("div",{className:"pg-card__overlay",children:a.jsx("span",{className:"pg-card__icon",children:a.jsx(Ur,{})})})]})},o+2))]}),a.jsx("div",{className:"pg-actions",children:a.jsx(b,{delay:200,direction:"up",children:a.jsx("button",{className:"pg-btn-see-more",onClick:()=>t(!0),children:"See More Photos"})})})]}),e&&a.jsx("div",{className:"pg-modal-backdrop",onClick:()=>t(!1),children:a.jsxs("div",{className:"pg-modal-content",onClick:l=>l.stopPropagation(),children:[a.jsxs("div",{className:"pg-modal-header",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"pg-modal-title",children:"All Gallery Photos"}),a.jsxs("div",{className:"pg-modal-subtitle",children:["Showing ",Ee.length," photos from GeoAI Laboratory events"]})]}),a.jsx("button",{className:"pg-modal-close-btn","aria-label":"Close modal",onClick:()=>t(!1),children:a.jsx(Ys,{})})]}),a.jsx("div",{className:"pg-modal-body",children:a.jsx("div",{className:"pg-modal-grid",children:Ee.map((l,o)=>a.jsxs("div",{className:"pg-card",onClick:()=>r(o),children:[a.jsx("img",{src:l.image,alt:`Gallery item ${o+1}`,className:"pg-card__img",loading:"lazy"}),a.jsx("div",{className:"pg-card__overlay",children:a.jsx("span",{className:"pg-card__icon",children:a.jsx(Ur,{})})})]},o))})})]})}),n!==null&&Ee[n]&&a.jsxs("div",{className:"pg-lightbox",onClick:()=>r(null),children:[a.jsx("button",{className:"pg-lightbox__btn pg-lightbox__close",onClick:()=>r(null),children:a.jsx(Ys,{})}),a.jsx("button",{className:"pg-lightbox__btn pg-lightbox__prev",onClick:l=>{l.stopPropagation(),r(o=>(o-1+Ee.length)%Ee.length)},children:a.jsx(Xg,{})}),a.jsx("img",{src:Ee[n].image,alt:"Enlarged view",className:"pg-lightbox__img",onClick:l=>l.stopPropagation()}),a.jsx("button",{className:"pg-lightbox__btn pg-lightbox__next",onClick:l=>{l.stopPropagation(),r(o=>(o+1)%Ee.length)},children:a.jsx(qg,{})}),a.jsxs("div",{className:"pg-lightbox__counter",children:[n+1," / ",Ee.length]})]})]})}function Ur(){return a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),a.jsx("line",{x1:"11",y1:"8",x2:"11",y2:"14"}),a.jsx("line",{x1:"8",y1:"11",x2:"14",y2:"11"})]})}function Ys(){return a.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}function Xg(){return a.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"15 18 9 12 15 6"})})}function qg(){return a.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"9 18 15 12 9 6"})})}const Zg=""+new URL("chinthaka-DmNrHWcR.jpg",import.meta.url).href,Jg=""+new URL("danushka-DMy-e9ul.jpg",import.meta.url).href,e0=""+new URL("dayan-NLcCqoZD.jpg",import.meta.url).href,Mn=""+new URL("giolablogo-BUnK0yeh.png",import.meta.url).href,t0=["All","Leadership","Senior Scientists","Scientists"],fr=[{id:"chinthaka-rathnasiri",name:"Chinthaka Rathnasiri",role:"Director (Technical)",division:"Human Settlements Planning & Training Division",type:"Leadership",email:"chinthaka@nbro.gov.lk",phone:"+94 112 586 946",image:Zg,qualifications:["M.Sc. in Urban Land & Spatial Planning (ITC, Netherlands)","B.Sc. (Hons) in Town & Country Planning (University of Moratuwa)","Chartered Town Planner (ITP Sri Lanka)"],bio:"Over 20 years of experience in spatial planning, hazard mitigation, and institutional leadership. Leading technical operations for human settlements planning and disaster risk reduction.",focusAreas:["Disaster Risk Reduction","Urban Resilient Infrastructure","Geospatial Analytics"]},{id:"danushka-jayathilaka",name:"Danushka Jayathilaka",role:"Senior Scientist",division:"GeoAI & Spatial Data Analytics",type:"Senior Scientists",email:"danushka.j@nbro.gov.lk",phone:"+94 112 501 834",image:Jg,qualifications:["Ph.D. Candidate in Geoinformatics","M.Sc. in GIS & Remote Sensing (University of Peradeniya)","B.Sc. in Surveying Science (Sabaragamuwa University)"],bio:"Specializing in landslide vulnerability modeling, satellite image processing, and integrating machine learning into GIS pipelines for real-time hazard assessment.",focusAreas:["Landslide Susceptibility Mapping","Remote Sensing Analysis","Machine Learning in GIS"]},{id:"dayan-munasinghe",name:"Dayan Munasinghe",role:"Senior Scientist",division:"Geotechnical & Landslide Research Division",type:"Senior Scientists",email:"dayan.m@nbro.gov.lk",phone:"+94 112 500 354",image:e0,qualifications:["M.Sc. in Geotechnical Engineering (University of Moratuwa)","B.Sc. (Hons) in Civil Engineering"],bio:"Focuses on slope stability analysis, early warning instrumentation, and AI-driven geotechnical modeling for mountain hazard management.",focusAreas:["Slope Stability","Early Warning Systems","Geotechnical Instrumentation"]},{id:"sandun-chathuranga",name:"Sandun Chathuranga",role:"Scientist / AI Developer",division:"GeoAI Research Lab",type:"Scientists",email:"sandun.c@nbro.gov.lk",phone:"+94 112 503 826",image:Mn,qualifications:["B.Sc. (Hons) in Computer Science & Artificial Intelligence","Certified Deep Learning Specialist"],bio:"Building computer vision pipelines for automated disaster detection, aerial drone mapping, and deep learning models for landslide prediction.",focusAreas:["Deep Learning","Computer Vision","WebGIS Platforms"]},{id:"chathumini-samarakoon",name:"Chathumini Samarakoon",role:"Scientist / GIS Specialist",division:"Spatial Data Science Division",type:"Scientists",email:"chathumini.s@nbro.gov.lk",phone:"+94 112 503 431",image:Mn,qualifications:["M.Sc. in Geographic Information Systems","B.Sc. in Geology (University of Peradeniya)"],bio:"Expert in spatial database management, environmental modeling, and geospatial web app development for national hazard monitoring.",focusAreas:["Spatial Analysis","Geodatabase Architecture","Web Mapping"]},{id:"shashinika-perera",name:"Shashinika Perera",role:"Scientist / Remote Sensing Specialist",division:"Earth Observation & GIS Unit",type:"Scientists",email:"shashinika.p@nbro.gov.lk",phone:"+94 112 502 611",image:Mn,qualifications:["B.Sc. (Hons) in Geoinformatics","Diploma in Earth Observation & Satellite Data Processing"],bio:"Focuses on radar satellite remote sensing (InSAR) for terrain deformation monitoring and landslide precursor identification.",focusAreas:["InSAR Deformation Processing","Satellite Imagery","Terrain Analysis"]},{id:"chathuranga-kumarasiri",name:"Chathuranga Kumarasiri",role:"Scientist / Software Engineer",division:"Software Development Unit",type:"Scientists",email:"chathuranga.k@nbro.gov.lk",phone:"+94 112 586 946",image:Mn,qualifications:["B.Sc. (Hons) in Software Engineering","Full-Stack Web Development Specialist"],bio:"Designing cloud-native architectures, API services, and interactive dashboards to deliver real-time spatial data to government agencies.",focusAreas:["Cloud Architecture","Full-Stack Web Apps","Geospatial APIs"]}],Rl=fr.find(e=>e.type==="Leadership"),n0=fr.filter(e=>e.type==="Senior Scientists"),r0=fr.filter(e=>e.type==="Scientists");function bl({member:e,isDirector:t=!1,onClick:n}){const r=e.name.split(" ").map(i=>i[0]).join("").slice(0,2);return a.jsxs("div",{className:`team__card ${t?"team__card--director":""}`,onClick:n,children:[a.jsxs("div",{className:"team__avatar-wrapper",children:[e.image?a.jsx("img",{src:e.image,alt:e.name,className:"team__avatar-img",onError:i=>{i.currentTarget.style.display="none",i.currentTarget.nextSibling&&(i.currentTarget.nextSibling.style.display="flex")}}):null,a.jsx("div",{className:"team__avatar-fallback",style:{display:e.image?"none":"flex"},children:r})]}),a.jsx("h3",{children:e.name}),a.jsx("p",{children:e.role}),a.jsx("span",{className:"team__card-hint",children:"Click to view profile"})]})}function Td(){var r,i;const e=Qi(),[t,n]=v.useState(null);return a.jsxs("section",{id:"team",className:"team-section",children:[a.jsx("style",{children:`
        /* ── Base Section Setup ────────────────────────────────── */
        .team-section {
          background-color: #FFFFFF;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 90px 24px;
          box-sizing: border-box;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
        }

        #team {
          scroll-margin-top: 10px;
        }

        .team__inner {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
        }

        /* ── Header ───────────────────────────────────────────── */
        .team__head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 48px;
        }

        .team__badge {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1D5DA8;
          margin-bottom: 12px;
          display: inline-block;
        }

        .team__title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .team__sub {
          font-size: 0.98rem;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Hierarchy Layout Containers ──────────────────────── */
        .team__layout {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Row 1: Director Centered */
        .team__grid--director {
          display: flex;
          justify-content: center;
        }

        .team__grid--director > * {
          max-width: 420px;
          width: 100%;
        }

        /* Row 2: Senior Scientists (2 Columns) */
        .team__grid--seniors {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 360px));
          justify-content: center;
          gap: 24px;
        }

        /* Row 3: Scientists (4 Columns) */
        .team__grid--scientists {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .team__grid--seniors > *,
        .team__grid--scientists > * {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* ── Team Card Component Styles ───────────────────────── */
        .team__card {
          border-radius: 14px;
          padding: 32px 20px 28px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          box-sizing: border-box;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team__card:hover {
          transform: translateY(-6px);
          border-color: #CBD5E1;
        }

        .team__card-hint {
          margin-top: 12px;
          font-size: 0.76rem;
          font-weight: 700;
          color: #1D5DA8;
          opacity: 0;
          transform: translateY(4px);
          transition: all 0.25s ease;
        }

        .team__card:hover .team__card-hint {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Avatar Image & Fallback Setup ───────────────────── */
        .team__avatar-wrapper {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(29, 93, 168, 0.2);
          flex-shrink: 0;
          background-color: #0F172A;
        }

        .team__avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team__avatar-fallback {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #0F172A, #1D5DA8);
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-weight: 800;
          font-size: 1.5rem;
          display: flex;
        }

        .team__card h3 {
          color: #0F172A;
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .team__card p {
          color: #475569;
          font-size: 0.84rem;
          font-weight: 500;
          margin: 0;
          line-height: 1.45;
        }

        /* ── See All Staff Button Styles ───────────────────────── */
        .team__action {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .team__btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #1D5DA8;
          color: #FFFFFF;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 14px rgba(29, 93, 168, 0.25);
        }

        .team__btn:hover {
          background-color: #154680;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(29, 93, 168, 0.35);
        }

        /* ── Slide-Over Drawer ────────────────────────────────── */
        .drawer-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(4px);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .drawer-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        .drawer-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 460px;
          height: 100vh;
          background: #FFFFFF;
          z-index: 10000;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          text-align: left;
        }

        .drawer-panel.open {
          transform: translateX(0);
        }

        .drawer-header {
          padding: 20px 24px;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          background: #FFFFFF;
          z-index: 10;
        }

        .drawer-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
        }

        .close-btn {
          background: #F1F5F9;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          cursor: pointer;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: #E2E8F0;
          color: #0F172A;
        }

        .drawer-body {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .profile-top {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .profile-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #0F172A;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 800;
          box-shadow: 0 4px 14px rgba(29, 93, 168, 0.2);
        }

        .profile-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-title-area h2 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 4px;
        }

        .profile-role {
          font-size: 0.88rem;
          color: #1D5DA8;
          font-weight: 700;
          margin: 0 0 4px;
        }

        .profile-division {
          font-size: 0.78rem;
          color: #64748B;
          margin: 0;
          line-height: 1.4;
        }

        .detail-block {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .detail-heading {
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748B;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .detail-content p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #334155;
          margin: 0;
        }

        .qual-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .qual-item {
          font-size: 0.86rem;
          color: #334155;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #F8FAFC;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #F1F5F9;
        }

        .qual-item svg {
          color: #1D5DA8;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          font-size: 0.78rem;
          font-weight: 600;
          background: #F1F5F9;
          color: #334155;
          padding: 5px 12px;
          border-radius: 6px;
        }

        .contact-box {
          background: #F8FAFC;
          border-radius: 12px;
          padding: 16px;
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.86rem;
          color: #334155;
        }

        .contact-row svg {
          color: #1D5DA8;
        }

        .contact-row a {
          color: #1D5DA8;
          text-decoration: none;
          font-weight: 600;
        }

        /* ── Responsive Rules ────────────────────────────────── */
        @media (max-width: 1024px) {
          .team__grid--scientists {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .team-section {
            min-height: auto;
            padding: 70px 20px;
          }
          .team__grid--seniors,
          .team__grid--scientists {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .drawer-panel {
            max-width: 100%;
          }
        }

        @media (max-width: 540px) {
          .team__grid--seniors,
          .team__grid--scientists {
            grid-template-columns: 1fr;
          }
          .team__grid--director > * {
            max-width: 100%;
          }
        }
      `}),a.jsxs("div",{className:"team__inner",children:[a.jsxs("div",{className:"team__head",children:[a.jsxs(b,{delay:0,children:[a.jsx("span",{className:"team__badge",children:"Our Team"}),a.jsx("h2",{className:"team__title",children:"The People Behind GeoAi Lab"})]}),a.jsx(b,{delay:100,children:a.jsx("p",{className:"team__sub",children:"A multidisciplinary team of scientists, analysts, and engineers driving Sri Lanka's landslide resilience and geospatial research."})})]}),a.jsxs("div",{className:"team__layout",children:[Rl&&a.jsx("div",{className:"team__grid--director",children:a.jsx(b,{delay:150,direction:"up",distance:25,children:a.jsx(bl,{member:Rl,isDirector:!0,onClick:()=>n(Rl)})})}),a.jsx("div",{className:"team__grid--seniors",children:n0.map((l,o)=>a.jsx(b,{delay:200+o*100,direction:"up",distance:25,children:a.jsx(bl,{member:l,onClick:()=>n(l)})},l.id))}),a.jsx("div",{className:"team__grid--scientists",children:r0.map((l,o)=>a.jsx(b,{delay:300+o*80,direction:"up",distance:25,children:a.jsx(bl,{member:l,onClick:()=>n(l)})},l.id))}),a.jsx("div",{className:"team__action",children:a.jsx(b,{delay:450,direction:"up",distance:20,children:a.jsxs("button",{onClick:()=>e("/staff"),className:"team__btn",children:["See All Staff ",a.jsx(Zh,{size:18})]})})})]})]}),a.jsx("div",{className:`drawer-backdrop ${t?"open":""}`,onClick:()=>n(null)}),a.jsx("div",{className:`drawer-panel ${t?"open":""}`,children:t&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"drawer-header",children:[a.jsx("h3",{children:"Staff Profile"}),a.jsx("button",{className:"close-btn",onClick:()=>n(null),"aria-label":"Close panel",children:a.jsx(La,{size:18})})]}),a.jsxs("div",{className:"drawer-body",children:[a.jsxs("div",{className:"profile-top",children:[a.jsx("div",{className:"profile-avatar",children:t.image?a.jsx("img",{src:t.image,alt:t.name}):t.name.split(" ").map(l=>l[0]).join("").slice(0,2)}),a.jsxs("div",{className:"profile-title-area",children:[a.jsx("h2",{children:t.name}),a.jsx("div",{className:"profile-role",children:t.role}),a.jsx("p",{className:"profile-division",children:t.division})]})]}),a.jsxs("div",{className:"detail-block",children:[a.jsxs("h4",{className:"detail-heading",children:[a.jsx(Ad,{size:16})," Overview & Experience"]}),a.jsx("div",{className:"detail-content",children:a.jsx("p",{children:t.bio})})]}),a.jsxs("div",{className:"detail-block",children:[a.jsxs("h4",{className:"detail-heading",children:[a.jsx(Dd,{size:16})," Qualifications"]}),a.jsx("ul",{className:"qual-list",children:(r=t.qualifications)==null?void 0:r.map((l,o)=>a.jsxs("li",{className:"qual-item",children:[a.jsx(Pd,{size:16}),a.jsx("span",{children:l})]},o))})]}),a.jsxs("div",{className:"detail-block",children:[a.jsxs("h4",{className:"detail-heading",children:[a.jsx(zd,{size:16})," Research Focus"]}),a.jsx("div",{className:"tags-container",children:(i=t.focusAreas)==null?void 0:i.map((l,o)=>a.jsx("span",{className:"tag",children:l},o))})]}),a.jsxs("div",{className:"detail-block",children:[a.jsx("h4",{className:"detail-heading",children:"Contact Information"}),a.jsxs("div",{className:"contact-box",children:[a.jsxs("div",{className:"contact-row",children:[a.jsx(Ra,{size:16}),a.jsx("a",{href:`mailto:${t.email}`,children:t.email})]}),a.jsxs("div",{className:"contact-row",children:[a.jsx(ba,{size:16}),a.jsx("span",{children:t.phone})]})]})]})]})]})})]})}function i0(){const[e,t]=v.useState({name:"",email:"",phone:"",message:""}),[n,r]=v.useState({submitting:!1,submitted:!1,error:!1}),i=o=>{const{name:s,value:u}=o.target;t(c=>({...c,[s]:u}))},l=o=>{o.preventDefault(),r({submitting:!0,submitted:!1,error:!1}),fetch("https://script.google.com/macros/s/AKfycbx6znbThUfdpQWP0f24HnhgAqWOS39-brhV8C4Fd7_zbpD9ED6xAcFVfmWdehMHWAwn/exec",{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(e)}).catch(u=>{console.error("Submission error:",u)}),setTimeout(()=>{r({submitting:!1,submitted:!0,error:!1}),t({name:"",email:"",phone:"",message:""})},500)};return a.jsxs("section",{id:"contact",className:"contact-section",children:[a.jsx("style",{children:`
        /* ── Full 100vh Viewport Section Setup ────────────────── */
        .contact-section {
          background-color: #081b33;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          box-sizing: border-box;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
        }

        #contact {
          scroll-margin-top: 10px;
        }

        .contact-container {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
        }

        /* ── Two-Column Grid Layout ────────────────────────────── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 40px;
          align-items: stretch;
        }

        .contact-grid > * {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* ── Interactive Map Container ─────────────────────────── */
        .map-wrapper {
          width: 100%;
          height: 100%;
          min-height: 480px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .map-frame {
          width: 100%;
          height: 100%;
          flex: 1;
          border: 0;
          display: block;
        }

        /* ── Right Content Layout ──────────────────────────────── */
        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: space-between;
        }

        .contact-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #EFF6FF;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }

        .contact-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #EFF6FF;
          margin: 0;
        }

        /* ── Contact Details List ──────────────────────────────── */
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .info-icon {
          color: #1D5DA8;
          background: #EFF6FF;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-text p {
          margin: 0;
          font-size: 0.85rem;
          color: #EFF6FF;
          line-height: 1.45;
        }

        .info-text strong {
          color: #EFF6FF;
          display: block;
          margin-bottom: 2px;
        }

        /* ── Compact Message Form ──────────────────────────────── */
        .contact-form-card {
          background: #F8FAFC;
          border-radius: 14px;
          padding: 22px 24px;
          border: 1px solid #E2E8F0;
        }

        .form-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 14px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-group label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #475569;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #CBD5E1;
          border-radius: 8px;
          font-size: 0.88rem;
          color: #0F172A;
          background: #FFFFFF;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #1D5DA8;
          box-shadow: 0 0 0 3px rgba(29, 93, 168, 0.12);
        }

        .form-textarea {
          resize: vertical;
          min-height: 80px;
        }

        .submit-btn {
          background-color: #1D5DA8;
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background-color 0.2s;
          margin-top: 6px;
        }

        .submit-btn:hover {
          background-color: #154680;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid #ffffff;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: inline-block;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .status-msg {
          margin-top: 10px;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-msg.success {
          color: #16A34A;
        }

        .status-msg.error {
          color: #DC2626;
        }

        @media (max-width: 960px) {
          .contact-section {
            min-height: auto;
            padding: 70px 20px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .map-wrapper {
            min-height: 380px;
          }
        }

        @media (max-width: 540px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full-width {
            grid-column: span 1;
          }
        }
      `}),a.jsx("div",{className:"contact-container",children:a.jsxs("div",{className:"contact-grid",children:[a.jsx(b,{direction:"right",delay:100,distance:30,children:a.jsx("div",{className:"map-wrapper",children:a.jsx("iframe",{title:"NBRO GeoAI Lab Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.970116898492!2d79.8659113!3d6.8942678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bd6b9283f6d%3A0x21c6681f742965c2!2sNational%20Building%20Research%20Institute!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk",className:"map-frame",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}),a.jsxs("div",{className:"contact-content",children:[a.jsx(b,{direction:"up",delay:150,distance:20,children:a.jsxs("div",{children:[a.jsx("h2",{className:"contact-title",children:"Contact us"}),a.jsx("p",{className:"contact-desc",children:"GeoAI Lab specializes in integrating geospatial data with artificial intelligence to drive innovative solutions for urban planning, disaster management, environmental monitoring, and infrastructure development."})]})}),a.jsx(b,{direction:"up",delay:250,distance:20,children:a.jsxs("div",{className:"info-list",children:[a.jsxs("div",{className:"info-item",children:[a.jsx("div",{className:"info-icon",children:a.jsx(ba,{size:18})}),a.jsxs("div",{className:"info-text",children:[a.jsx("p",{children:"+94 112 586 946 / +94 112 501 834"}),a.jsx("p",{children:"+94 112 500 354 / +94 112 503 826"}),a.jsx("p",{children:"+94 112 503 431 / +94 112 502 611"})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("div",{className:"info-icon",children:a.jsx(Ra,{size:18})}),a.jsx("div",{className:"info-text",children:a.jsx("p",{children:"info@nbro.gov.lk / nbro@sltnet.lk"})})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("div",{className:"info-icon",children:a.jsx(og,{size:18})}),a.jsxs("div",{className:"info-text",children:[a.jsx("strong",{children:"General Inquiries"}),a.jsx("p",{children:"99/1, Jawatta Road, Colombo 05, Sri Lanka"})]})]})]})}),a.jsx(b,{direction:"up",delay:350,distance:20,children:a.jsxs("div",{className:"contact-form-card",children:[a.jsx("h3",{className:"form-title",children:"Send us a Message"}),a.jsxs("form",{onSubmit:l,children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Your Name"}),a.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:e.name,onChange:i,placeholder:"John Doe",className:"form-input"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:e.email,onChange:i,placeholder:"john@example.com",className:"form-input"})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{htmlFor:"phone",children:"Phone Number"}),a.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:i,placeholder:"+94 7X XXX XXXX",className:"form-input"})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{htmlFor:"message",children:"Message"}),a.jsx("textarea",{id:"message",name:"message",required:!0,rows:3,value:e.message,onChange:i,placeholder:"How can we help you?",className:"form-textarea"})]})]}),a.jsx("button",{type:"submit",className:"submit-btn",disabled:n.submitting,children:n.submitting?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"btn-spinner"})," Sending..."]}):a.jsxs(a.Fragment,{children:["Send Message ",a.jsx(ug,{size:15})]})}),n.submitted&&a.jsxs("div",{className:"status-msg success",children:[a.jsx(Id,{size:15})," Thank you! Your message has been recorded."]}),n.error&&a.jsx("div",{className:"status-msg error",children:"Failed to send message. Please try again."})]})]})})]})]})})]})}const l0=""+new URL("intro-CfguZtDQ.png",import.meta.url).href;function o0(){return a.jsxs("section",{id:"hero",className:"hero-section",children:[a.jsx("style",{children:`
        /* ── Base Section ──────────────────────────────────────── */
        .hero-section {
          background-color: #FFFFFF;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 60px 24px;
          box-sizing: border-box;
        }

        #hero {
          scroll-margin-top: 110px;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(320px, 560px) 1fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        /* ── Left Card ────────────────────────────────────────── */
        .hero-card {
          background: #FFFFFF;
          border: 1px solid #E8EAF0;
          border-radius: 4px;
          padding: 48px 56px 56px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.06);
          box-sizing: border-box;
        }

        .hero-image-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 44px;
        }

        .hero-image {
          max-width: 100%;
          height: auto;
        }

        .hero-heading {
          font-size: clamp(2.4rem, 4.2vw, 3.4rem);
          font-weight: 800;
          color: #1E2340;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 28px;
        }

        .hero-heading em {
          font-style: italic;
          font-weight: 700;
        }

        .hero-text {
          font-size: 0.95rem;
          line-height: 1.75;
          color: #4B5468;
          text-align: justify;
          margin: 0;
        }

        /* ── Right Watermark Logo ────────────────────────────── */
        .hero-watermark {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
          pointer-events: none;
          user-select: none;
        }

        .hero-watermark-image {
          width: 100%;
          max-width: 480px;
          height: auto;
          object-fit: contain;
        }

        /* ── Responsive Rules ────────────────────────────────── */
        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .hero-watermark {
            display: none;
          }
          .hero-section {
            min-height: auto;
            padding: 70px 24px;
          }
        }

        @media (max-width: 640px) {
          .hero-card {
            padding: 32px 24px 40px;
          }
          .hero-section {
            padding: 50px 16px;
          }
        }
      `}),a.jsxs("div",{className:"hero-container",children:[a.jsx(b,{direction:"up",distance:40,delay:0,children:a.jsxs("div",{className:"hero-card",children:[a.jsx("div",{className:"hero-image-wrap",children:a.jsx("img",{src:l0,alt:"Digital terrain model",className:"hero-image",onError:e=>{e.target.onerror=null,e.target.src="https://via.placeholder.com/380x300?text=DTM+Preview"}})}),a.jsxs("h1",{className:"hero-heading",children:["Make your ",a.jsx("em",{children:"Geoartifact"})]}),a.jsx("p",{className:"hero-text",children:"We provide high-accuracy elevation models tailored to your project needs. Leveraging advanced surveying technologies and geospatial analysis, our solutions deliver detailed terrain data to support planning, engineering, and environmental applications. From digital terrain models to contour mapping, we ensure precise, reliable, and actionable insights for every project."})]})}),a.jsx(b,{direction:"left",distance:50,delay:200,children:a.jsx("div",{className:"hero-watermark",children:a.jsx("img",{src:Mn,alt:"GeoAi Lab logo",className:"hero-watermark-image",onError:e=>{e.target.onerror=null,e.target.src="https://via.placeholder.com/320x360?text=Logo"}})})})]})]})}const a0=""+new URL("1-hJi8f9DE.jpeg",import.meta.url).href,s0=""+new URL("2-BhZY--zG.png",import.meta.url).href,u0=""+new URL("3-BiSUl_y3.jpeg",import.meta.url).href,c0=""+new URL("4-XHuXpvwC.jpeg",import.meta.url).href,d0=[{image:a0,caption:"Orthomosaics",aspect:"4 / 3.1"},{image:s0,caption:"Drone Technology for Construction Site Monitoring",aspect:"4 / 2.8"},{image:u0,caption:"Advanced Aerial Photogrammetry Workshop",aspect:"4 / 4.9"},{image:c0,caption:"Thermal Mapping",aspect:"4 / 1.9"}];function f0(){return a.jsxs("section",{id:"portfolio",className:"portfolio-section",children:[a.jsx("style",{children:`
        /* ── Base Section ──────────────────────────────────────── */
        .portfolio-section {
          background-color: #ffffff;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
          padding: 100px 24px;
        }

        #portfolio {
          scroll-margin-top: 10px;
        }

        .portfolio-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        /* ── Header Row (badge + title on left, description on right) ── */
        .portfolio-header {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
          align-items: end;
          margin-bottom: 56px;
        }

        .portfolio-badge {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1D5DA8;
          display: block;
          margin-bottom: 12px;
        }

        .portfolio-title {
          font-size: clamp(2rem, 3.4vw, 2.75rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .portfolio-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: #475569;
          margin: 0;
        }

        /* ── Masonry Grid (Pinterest-style via CSS columns) ────── */
        .portfolio-grid {
          column-count: 2;
          column-gap: 28px;
        }

        .portfolio-card-wrapper {
          break-inside: avoid;
          margin-bottom: 28px;
        }

        .portfolio-card {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          background: #0F172A;
          cursor: pointer;
        }

        .portfolio-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-card:hover .portfolio-card__img {
          transform: scale(1.05);
        }

        .portfolio-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(15, 23, 42, 0.75) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .portfolio-card:hover .portfolio-card__overlay {
          opacity: 1;
        }

        .portfolio-card__caption {
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 700;
        }

        /* ── Responsive Rules ──────────────────────────────────── */
        @media (max-width: 900px) {
          .portfolio-header {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .portfolio-grid {
            column-count: 1;
          }
          .portfolio-section {
            padding: 60px 16px;
          }
        }
      `}),a.jsxs("div",{className:"portfolio-container",children:[a.jsxs("div",{className:"portfolio-header",children:[a.jsx(b,{delay:0,direction:"up",children:a.jsxs("div",{children:[a.jsx("span",{className:"portfolio-badge",children:"Portfolio"}),a.jsx("h2",{className:"portfolio-title",children:"A Diverse Portfolio of Creative Ventures"})]})}),a.jsx(b,{delay:150,direction:"up",children:a.jsx("p",{className:"portfolio-desc",children:"Discover a showcase of our finest work. From stunning designs to seamless user experiences, explore how we've helped clients like you achieve their goals."})})]}),a.jsx("div",{className:"portfolio-grid",children:d0.map((e,t)=>a.jsx("div",{className:"portfolio-card-wrapper",children:a.jsx(b,{delay:t%2*150,direction:"up",distance:30,children:a.jsxs("div",{className:"portfolio-card",style:{aspectRatio:e.aspect},children:[a.jsx("img",{src:e.image,alt:e.caption,className:"portfolio-card__img",onError:n=>{n.target.onerror=null,n.target.src="https://via.placeholder.com/600x400?text=Project+Image"}}),a.jsx("div",{className:"portfolio-card__overlay",children:a.jsx("span",{className:"portfolio-card__caption",children:e.caption})})]})})},t))})]})]})}const p0=""+new URL("1-CuG2NXjU.jpg",import.meta.url).href,m0=""+new URL("2-DJKBmgsU.jpg",import.meta.url).href,h0=""+new URL("3-Cf_5PaV8.png",import.meta.url).href,g0=""+new URL("4-4OYWaBgu.mp4",import.meta.url).href,v0=""+new URL("5-DPn9ExxH.mp4",import.meta.url).href,y0=""+new URL("6-DUxMZvcT.mp4",import.meta.url).href,x0=[{type:"image",src:p0,title:"Surface Crack Identification Survey",description:"At GeoAi Lab, we go beyond conventional mapping, delivering insights that help detect risks before they become visible problems."},{type:"image",src:m0,title:"Thermal Survey at Karadiyana Waste Management Center",description:"In the wake of the recent fire incident at the Karadiyana Waste Management Site, the GeoAi Lab at the National Building Research Institute – NBRI stepped in to provide technical support to monitoring and response efforts."},{type:"image",src:h0,title:"Full-Day Training on Drone Technology for Urban Informatics and Planning Students",description:"The GeoAI Lab at NBRO successfully conducted a comprehensive full-day training session on drone technology and its applications for 120 undergraduate students from the Urban Informatics and Planning department at the University of Moratuwa."},{type:"video",src:g0,title:"Thermal Survey at Karadiyana Waste Management Center",description:"In the wake of the recent fire incident at the Karadiyana Waste Management Site, the GeoAi Lab at the National Building Research Institute – NBRI stepped in to provide technical support to monitoring and response efforts."},{type:"video",src:v0,title:"Exploring the Legacy of the Nine Arch Bridge",description:"The Nine Arch Bridge, located in the heart of Sri Lanka’s picturesque Ella, is a true marvel of engineering and history. Built during the British colonial era in 1919, this stunning bridge stands as a testament to the ingenuity and craftsmanship of its time."},{type:"video",src:y0,title:"LiDAR Survey at Ella–Wellawaya Bus Accident Site",description:"On September 4th, tragedy struck at the 24th km post of the Ella–Wellawaya road when a bus carrying employees of the Tangalle Urban Council plunged into a precipice. 16 precious lives were lost, and another 16 people were injured."}];function w0(){return a.jsxs("section",{id:"news",className:"news-section",children:[a.jsx("style",{children:`
        /* ── Base Section ──────────────────────────────────────── */
        .news-section {
          background-color: #FFFFFF;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
          padding: 100px 24px;
        }

        #news {
          scroll-margin-top: 110px;
        }

        .news-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        /* ── Header (centered) ──────────────────────────────────── */
        .news-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 64px;
        }

        .news-title {
          font-size: clamp(2rem, 3.4vw, 2.75rem);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }

        .news-subtitle {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #64748B;
          margin: 0;
        }

        /* ── Grid ──────────────────────────────────────────────── */
        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px 36px;
        }

        .news-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .news-card__media {
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 28px;
          background: #0F172A;
          aspect-ratio: 4 / 3;
        }

        .news-card__img,
        .news-card__video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .news-card__title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          text-align: center;
          line-height: 1.3;
          margin: 0 0 14px;
        }

        .news-card__desc {
          font-size: 0.88rem;
          line-height: 1.7;
          color: #64748B;
          text-align: center;
          margin: 0;
        }

        /* ── Responsive Rules ──────────────────────────────────── */
        @media (max-width: 1024px) {
          .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .news-grid {
            grid-template-columns: 1fr;
          }
          .news-section {
            padding: 60px 16px;
          }
        }
      `}),a.jsxs("div",{className:"news-container",children:[a.jsxs("div",{className:"news-header",children:[a.jsx(b,{delay:0,children:a.jsx("h2",{className:"news-title",children:"Latest news"})}),a.jsx(b,{delay:100,children:a.jsx("p",{className:"news-subtitle",children:"Here are some of the most recent headlines from GeoAi Laboratory at National Building Research Institute."})})]}),a.jsx("div",{className:"news-grid",children:x0.map((e,t)=>a.jsx(b,{delay:t%3*120,direction:"up",distance:30,children:a.jsxs("div",{className:"news-card",children:[a.jsx("div",{className:"news-card__media",children:e.type==="video"?a.jsx("video",{className:"news-card__video",src:e.src,controls:!0,preload:"metadata",onError:n=>{n.target.poster="https://via.placeholder.com/500x300?text=Video"}}):a.jsx("img",{className:"news-card__img",src:e.src,alt:e.title,onError:n=>{n.target.onerror=null,n.target.src="https://via.placeholder.com/500x300?text=News+Image"}})}),a.jsx("h3",{className:"news-card__title",children:e.title}),e.description&&a.jsx("p",{className:"news-card__desc",children:e.description})]})},t))})]})]})}function k0(){var o,s;const e=Qi(),[t,n]=v.useState(null),[r,i]=v.useState("All");v.useEffect(()=>{window.scrollTo(0,0)},[]);const l=r==="All"?fr:fr.filter(u=>u.type===r);return a.jsxs("div",{className:"staff-page",children:[a.jsx("style",{children:`
        /* ── Page Setup ────────────────────────────────────────── */
        .staff-page {
          background-color: #F8FAFC;
          min-height: 100vh;
          padding: 60px 24px;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1E293B;
          box-sizing: border-box;
        }

        .staff-container {
          max-width: 1240px;
          margin: 50px auto;
        }

        /* ── Page Header ───────────────────────────────────────── */
        .staff-header {
          margin-bottom: 36px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #1D5DA8;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          margin-bottom: 16px;
          transition: transform 0.2s;
        }

        .back-link:hover {
          transform: translateX(-4px);
        }

        .staff-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }

        .staff-subtitle {
          color: #64748B;
          font-size: 1rem;
          margin: 0;
        }

        /* ── Category Filters ──────────────────────────────────── */
        .filter-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 8px 18px;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          color: #475569;
          font-size: 0.86rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: #CBD5E1;
          color: #0F172A;
        }

        .filter-btn.active {
          background: #1D5DA8;
          color: #FFFFFF;
          border-color: #1D5DA8;
          box-shadow: 0 4px 12px rgba(29, 93, 168, 0.2);
        }

        /* ── Staff Grid ────────────────────────────────────────── */
        .staff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 24px;
        }

        /* ── Staff Card ────────────────────────────────────────── */
        .staff-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          position: relative;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .staff-card:hover {
          transform: translateY(-6px);
          border-color: #CBD5E1;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
        }

        .card-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: #0F172A;
          margin-bottom: 16px;
          overflow: hidden;
          box-shadow: 0 6px 16px rgba(29, 93, 168, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 1.4rem;
          font-weight: 800;
        }

        .card-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 6px;
        }

        .card-role {
          font-size: 0.82rem;
          color: #1D5DA8;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .card-division {
          font-size: 0.78rem;
          color: #64748B;
          margin: 0 0 16px;
          line-height: 1.4;
        }

        .card-action {
          margin-top: auto;
          font-size: 0.82rem;
          font-weight: 700;
          color: #1D5DA8;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        /* ── Slide-Over Backdrop ──────────────────────────────── */
        .drawer-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .drawer-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        /* ── Slide-Over Panel ────────────────────────────────── */
        .drawer-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 460px;
          height: 100vh;
          background: #FFFFFF;
          z-index: 1000;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .drawer-panel.open {
          transform: translateX(0);
        }

        .drawer-header {
          padding: 20px 24px;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          background: #FFFFFF;
          z-index: 10;
        }

        .drawer-header h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
        }

        .close-btn {
          background: #F1F5F9;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          cursor: pointer;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: #E2E8F0;
          color: #0F172A;
        }

        .drawer-body {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .profile-top {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .profile-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #0F172A;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 800;
          box-shadow: 0 4px 14px rgba(29, 93, 168, 0.2);
        }

        .profile-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-title-area h2 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 4px;
        }

        .profile-role {
          font-size: 0.88rem;
          color: #1D5DA8;
          font-weight: 700;
          margin: 0 0 4px;
        }

        .profile-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          background: #EFF6FF;
          color: #1D5DA8;
          padding: 3px 10px;
          border-radius: 12px;
        }

        .detail-block {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .detail-heading {
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748B;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .detail-content p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #334155;
          margin: 0;
        }

        .qual-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .qual-item {
          font-size: 0.86rem;
          color: #334155;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #F8FAFC;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #F1F5F9;
        }

        .qual-item svg {
          color: #1D5DA8;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          font-size: 0.78rem;
          font-weight: 600;
          background: #F1F5F9;
          color: #334155;
          padding: 5px 12px;
          border-radius: 6px;
        }

        .contact-box {
          background: #F8FAFC;
          border-radius: 12px;
          padding: 16px;
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.86rem;
          color: #334155;
        }

        .contact-row svg {
          color: #1D5DA8;
        }

        .contact-row a {
          color: #1D5DA8;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-row a:hover {
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .drawer-panel {
            max-width: 100%;
          }
        }
      `}),a.jsxs("div",{className:"staff-container",children:[a.jsxs("div",{className:"staff-header",children:[a.jsxs("button",{onClick:()=>e("/"),className:"back-link",children:[a.jsx(qh,{size:16})," Back to Overview"]}),a.jsx("h1",{className:"staff-title",children:"All Staff Members"}),a.jsx("p",{className:"staff-subtitle",children:"Explore the complete directory of scientists, researchers, and technical staff."})]}),a.jsx("div",{className:"filter-bar",children:t0.map(u=>a.jsx("button",{className:`filter-btn ${r===u?"active":""}`,onClick:()=>i(u),children:u},u))}),a.jsx("div",{className:"staff-grid",children:l.map(u=>{const c=u.name.split(" ").map(p=>p[0]).join("").slice(0,2);return a.jsxs("div",{className:"staff-card",onClick:()=>n(u),children:[a.jsx("div",{className:"card-avatar",children:u.image?a.jsx("img",{src:u.image,alt:u.name}):a.jsx("span",{children:c})}),a.jsx("h3",{className:"card-name",children:u.name}),a.jsx("div",{className:"card-role",children:u.role}),a.jsx("div",{className:"card-division",children:u.division}),a.jsxs("span",{className:"card-action",children:["View Details ",a.jsx(tg,{size:15})]})]},u.id)})})]}),a.jsx("div",{className:`drawer-backdrop ${t?"open":""}`,onClick:()=>n(null)}),a.jsx("div",{className:`drawer-panel ${t?"open":""}`,children:t&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"drawer-header",children:[a.jsx("h3",{children:"Staff Profile"}),a.jsx("button",{className:"close-btn",onClick:()=>n(null),"aria-label":"Close panel",children:a.jsx(La,{size:18})})]}),a.jsxs("div",{className:"drawer-body",children:[a.jsxs("div",{className:"profile-top",children:[a.jsx("div",{className:"profile-avatar",children:t.image?a.jsx("img",{src:t.image,alt:t.name}):t.name.split(" ").map(u=>u[0]).join("").slice(0,2)}),a.jsxs("div",{className:"profile-title-area",children:[a.jsx("h2",{children:t.name}),a.jsx("div",{className:"profile-role",children:t.role}),a.jsx("span",{className:"profile-badge",children:t.type})]})]}),t.bio&&a.jsxs("div",{className:"detail-block",children:[a.jsxs("h4",{className:"detail-heading",children:[a.jsx(Ad,{size:16})," Overview & Experience"]}),a.jsx("div",{className:"detail-content",children:a.jsx("p",{children:t.bio})})]}),((o=t.qualifications)==null?void 0:o.length)>0&&a.jsxs("div",{className:"detail-block",children:[a.jsxs("h4",{className:"detail-heading",children:[a.jsx(Dd,{size:16})," Qualifications"]}),a.jsx("ul",{className:"qual-list",children:t.qualifications.map((u,c)=>a.jsxs("li",{className:"qual-item",children:[a.jsx(Pd,{size:16}),a.jsx("span",{children:u})]},c))})]}),((s=t.focusAreas)==null?void 0:s.length)>0&&a.jsxs("div",{className:"detail-block",children:[a.jsxs("h4",{className:"detail-heading",children:[a.jsx(zd,{size:16})," Focus Areas"]}),a.jsx("div",{className:"tags-container",children:t.focusAreas.map((u,c)=>a.jsx("span",{className:"tag",children:u},c))})]}),(t.email||t.phone)&&a.jsxs("div",{className:"detail-block",children:[a.jsx("h4",{className:"detail-heading",children:"Contact Information"}),a.jsxs("div",{className:"contact-box",children:[t.email&&a.jsxs("div",{className:"contact-row",children:[a.jsx(Ra,{size:16}),a.jsx("a",{href:`mailto:${t.email}`,children:t.email})]}),t.phone&&a.jsxs("div",{className:"contact-row",children:[a.jsx(ba,{size:16}),a.jsx("span",{children:t.phone})]})]})]})]})]})})]})}const Hr={completed:12,pending:5};function Ll({end:e,duration:t=800}){const[n,r]=v.useState(0),[i,l]=v.useState(!1),o=v.useRef(null);return v.useEffect(()=>{const s=new IntersectionObserver(([u])=>{u.isIntersecting?l(!0):(l(!1),r(0))},{threshold:.3});return o.current&&s.observe(o.current),()=>s.disconnect()},[]),v.useEffect(()=>{if(!i)return;let s=0;const u=e/(t/16),c=setInterval(()=>{s+=u,s>=e?(r(e),clearInterval(c)):r(Math.floor(s))},16);return()=>clearInterval(c)},[i,e,t]),a.jsx("span",{ref:o,children:n})}function S0(){const e=Hr.completed+Hr.pending;return a.jsxs("section",{id:"projects",className:"projects-section",children:[a.jsx("style",{children:`
        .projects-section {
          background-color: #FFFFFF;
          min-height: 30vh;
          display: flex;
          align-items: center;
          justify-content: center;

          box-sizing: border-box;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        #projects {
          scroll-margin-top: 10px;
        }

        .projects-container {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
        }

        /* Header */
        .projects-head {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .projects-badge {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1D5DA8;
          margin-bottom: 12px;
          display: inline-block;
        }

        .projects-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .projects-sub {
          font-size: 0.98rem;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        /* Stats Grid Cards (3 Columns) */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .stat-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-card:hover {
          transform: translateY(-6px);
          border-color: #CBD5E1;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
        }

        .stat-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: #EFF6FF;
          color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .stat-number {
          font-size: 2.75rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .stat-number span {
          color: #000000;
        }

        .stat-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 6px;
        }

        .stat-desc {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),a.jsxs("div",{className:"projects-container",children:[a.jsxs("div",{className:"projects-head",children:[a.jsxs(b,{delay:0,children:[a.jsx("span",{className:"projects-badge",children:"Our Lab Insights"}),a.jsx("h2",{className:"projects-title",children:"Projects Overview & Status"})]}),a.jsx(b,{delay:100,children:a.jsx("p",{className:"projects-sub",children:"An overview of our successfully completed and ongoing research and developmental initiatives."})})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsx(b,{delay:180,direction:"up",distance:20,children:a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon-wrapper",children:a.jsx(ig,{size:24})}),a.jsx("div",{className:"stat-number",children:a.jsx(Ll,{end:e})}),a.jsx("div",{className:"stat-title",children:"All Projects"}),a.jsx("p",{className:"stat-desc",children:"Total undertaken research and developmental initiatives."})]})}),a.jsx(b,{delay:220,direction:"up",distance:20,children:a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon-wrapper",children:a.jsx(Id,{size:24})}),a.jsx("div",{className:"stat-number",children:a.jsx(Ll,{end:Hr.completed})}),a.jsx("div",{className:"stat-title",children:"Completed Projects"}),a.jsx("p",{className:"stat-desc",children:"Successfully deployed AI & geospatial solutions."})]})}),a.jsx(b,{delay:260,direction:"up",distance:20,children:a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon-wrapper",children:a.jsx(ng,{size:24})}),a.jsx("div",{className:"stat-number",children:a.jsx(Ll,{end:Hr.pending})}),a.jsx("div",{className:"stat-title",children:"Ongoing / Pending Projects"}),a.jsx("p",{className:"stat-desc",children:"Active research and development initiatives."})]})})]})]})]})}function _0(){return a.jsxs(a.Fragment,{children:[a.jsx(fg,{}),a.jsx(w0,{}),a.jsx(mg,{}),a.jsx(o0,{}),a.jsx(S0,{}),a.jsx(_g,{}),a.jsx(Lg,{}),a.jsx(f0,{}),a.jsx(Kg,{}),a.jsx(Td,{}),a.jsx(i0,{})]})}function j0(){return a.jsxs("div",{className:"app",style:{scrollBehavior:"smooth"},children:[a.jsx(Vh,{})," ",a.jsx(Qh,{}),a.jsx(cg,{}),a.jsxs(dh,{children:[a.jsx(ti,{path:"/",element:a.jsx(_0,{})}),a.jsx(ti,{path:"/staff",element:a.jsx(k0,{})}),a.jsx(ti,{path:"/team",element:a.jsx(Td,{})})]}),a.jsx(dg,{})]})}ad(document.getElementById("root")).render(a.jsx(ef.StrictMode,{children:a.jsxs(Ih,{basename:"/GeoAiLab",children:[" ",a.jsx(j0,{})]})}));
