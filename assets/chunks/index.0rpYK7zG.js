import{m as C,aE as Q,aF as A,au as j,j as N,P as x,h,S as R,y as E}from"./framework.uae2PiAn.js";var _;const O=typeof window<"u",L=e=>typeof e=="string",W=()=>{};O&&((_=window==null?void 0:window.navigator)!=null&&_.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function v(e){return typeof e=="function"?e():C(e)}function $(e){return e}function y(e){return Q()?(A(e),!0):!1}function B(e,n=!0){j()?N(e):n?e():x(e)}function q(e,n,t={}){const{immediate:r=!0}=t,a=h(!1);let s=null;function o(){s&&(clearTimeout(s),s=null)}function i(){a.value=!1,o()}function l(...c){o(),a.value=!0,s=setTimeout(()=>{a.value=!1,s=null,e(...c)},v(n))}return r&&(a.value=!0,O&&l()),y(i),{isPending:R(a),start:l,stop:i}}function S(e){var n;const t=v(e);return(n=t==null?void 0:t.$el)!=null?n:t}const T=O?window:void 0;function J(...e){let n,t,r,a;if(L(e[0])||Array.isArray(e[0])?([t,r,a]=e,n=T):[n,t,r,a]=e,!n)return W;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},i=(u,f,p,d)=>(u.addEventListener(f,p,d),()=>u.removeEventListener(f,p,d)),l=E(()=>[S(n),v(a)],([u,f])=>{o(),u&&s.push(...t.flatMap(p=>r.map(d=>i(u,p,d,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return y(c),c}function F(e,n=!1){const t=h(),r=()=>t.value=!!e();return r(),B(r,n),t}const w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m="__vueuse_ssr_handlers__";w[m]=w[m]||{};var b=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,U=(e,n)=>{var t={};for(var r in e)z.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&b)for(var r of b(e))n.indexOf(r)<0&&M.call(e,r)&&(t[r]=e[r]);return t};function X(e,n,t={}){const r=t,{window:a=T}=r,s=U(r,["window"]);let o;const i=F(()=>a&&"ResizeObserver"in a),l=()=>{o&&(o.disconnect(),o=void 0)},c=E(()=>S(e),f=>{l(),i.value&&a&&f&&(o=new ResizeObserver(n),o.observe(f,s))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return y(u),{isSupported:i,stop:u}}var g;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(g||(g={}));var k=Object.defineProperty,I=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,P=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,D=(e,n)=>{for(var t in n||(n={}))G.call(n,t)&&P(e,t,n[t]);if(I)for(var t of I(n))H.call(n,t)&&P(e,t,n[t]);return e};const K={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};D({linear:$},K);export{X as a,q as b,O as i,J as u};