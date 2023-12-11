import{r as J,j as o,d as P2}from"./app-507ae73f.js";import{A as Ne}from"./ApplicationLogo-8566a54f.js";import{t as be}from"./transition-31713d59.js";const M1=J.createContext(),F2=({children:c})=>{const[a,e]=J.useState(!1),r=()=>{e(s=>!s)};return o.jsx(M1.Provider,{value:{open:a,setOpen:e,toggleOpen:r},children:o.jsx("div",{className:"relative",children:c})})},Se=({children:c})=>{const{open:a,setOpen:e,toggleOpen:r}=J.useContext(M1);return o.jsxs(o.Fragment,{children:[o.jsx("div",{onClick:r,children:c}),a&&o.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>e(!1)})]})},ke=({align:c="right",width:a="48",contentClasses:e="py-1 bg-white dark:bg-gray-700",children:r})=>{const{open:s,setOpen:f}=J.useContext(M1);let i="origin-top";c==="left"?i="origin-top-left left-0":c==="right"&&(i="origin-top-right right-0");let n="";return a==="48"&&(n="w-48"),o.jsx(o.Fragment,{children:o.jsx(be,{as:J.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:o.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${i} ${n}`,onClick:()=>f(!1),children:o.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+e,children:r})})})})},we=({className:c="",children:a,...e})=>o.jsx(P2,{...e,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "+c,children:a});F2.Trigger=Se;F2.Content=ke;F2.Link=we;const a2=F2;function O({active:c=!1,className:a="",children:e,...r}){return o.jsx(P2,{...r,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(c?"border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ")+a,children:e})}function P({active:c=!1,className:a="",children:e,...r}){return o.jsx(P2,{...r,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${c?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${a}`,children:e})}function k4(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function m(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?k4(Object(e),!0).forEach(function(r){u(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):k4(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function w2(c){"@babel/helpers - typeof";return w2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},w2(c)}function Ae(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function w4(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function ye(c,a,e){return a&&w4(c.prototype,a),e&&w4(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function p1(c,a){return Fe(c)||Be(c,a)||Z4(c,a)||Re()}function t2(c){return Pe(c)||Te(c)||Z4(c)||De()}function Pe(c){if(Array.isArray(c))return f1(c)}function Fe(c){if(Array.isArray(c))return c}function Te(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Be(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,f=!1,i,n;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){f=!0,n=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(f)throw n}}return r}}function Z4(c,a){if(c){if(typeof c=="string")return f1(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f1(c,a)}}function f1(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function De(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var A4=function(){},C1={},c3={},a3=null,e3={mark:A4,measure:A4};try{typeof window<"u"&&(C1=window),typeof document<"u"&&(c3=document),typeof MutationObserver<"u"&&(a3=MutationObserver),typeof performance<"u"&&(e3=performance)}catch{}var Ee=C1.navigator||{},y4=Ee.userAgent,P4=y4===void 0?"":y4,U=C1,p=c3,F4=a3,p2=e3;U.document;var D=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",r3=~P4.indexOf("MSIE")||~P4.indexOf("Trident/"),C2,u2,L2,d2,g2,F="___FONT_AWESOME___",n1=16,s3="fa",i3="svg-inline--fa",_="data-fa-i2svg",l1="data-fa-pseudo-element",Ue="data-fa-pseudo-element-pending",u1="data-prefix",L1="data-icon",T4="fontawesome-i2svg",qe="async",$e=["HTML","HEAD","STYLE","SCRIPT"],f3=function(){try{return!0}catch{return!1}}(),M="classic",C="sharp",d1=[M,C];function m2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[M]}})}var i2=m2((C2={},u(C2,M,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),u(C2,C,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),C2)),f2=m2((u2={},u(u2,M,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(u2,C,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),u2)),n2=m2((L2={},u(L2,M,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(L2,C,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),L2)),Ge=m2((d2={},u(d2,M,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(d2,C,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),d2)),We=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,n3="fa-layers-text",Oe=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ie=m2((g2={},u(g2,M,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(g2,C,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),g2)),l3=[1,2,3,4,5,6,7,8,9,10],je=l3.concat([11,12,13,14,15,16,17,18,19,20]),_e=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],I={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l2=new Set;Object.keys(f2[M]).map(l2.add.bind(l2));Object.keys(f2[C]).map(l2.add.bind(l2));var Xe=[].concat(d1,t2(l2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",I.GROUP,I.SWAP_OPACITY,I.PRIMARY,I.SECONDARY]).concat(l3.map(function(c){return"".concat(c,"x")})).concat(je.map(function(c){return"w-".concat(c)})),r2=U.FontAwesomeConfig||{};function Ye(c){var a=p.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Ke(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(p&&typeof p.querySelector=="function"){var Qe=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qe.forEach(function(c){var a=p1(c,2),e=a[0],r=a[1],s=Ke(Ye(e));s!=null&&(r2[r]=s)})}var o3={styleDefault:"solid",familyDefault:"classic",cssPrefix:s3,replacementClass:i3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};r2.familyPrefix&&(r2.cssPrefix=r2.familyPrefix);var Z=m(m({},o3),r2);Z.autoReplaceSvg||(Z.observeMutations=!1);var z={};Object.keys(o3).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(e){Z[c]=e,s2.forEach(function(r){return r(z)})},get:function(){return Z[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){Z.cssPrefix=a,s2.forEach(function(e){return e(z)})},get:function(){return Z.cssPrefix}});U.FontAwesomeConfig=z;var s2=[];function Je(c){return s2.push(c),function(){s2.splice(s2.indexOf(c),1)}}var E=n1,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ze(c){if(!(!c||!D)){var a=p.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=p.head.childNodes,r=null,s=e.length-1;s>-1;s--){var f=e[s],i=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=f)}return p.head.insertBefore(a,r),c}}var cr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function o2(){for(var c=12,a="";c-- >0;)a+=cr[Math.random()*62|0];return a}function c2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function g1(c){return c.classList?c2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function t3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ar(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(t3(c[e]),'" ')},"").trim()}function T2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function x1(c){return c.size!==y.size||c.x!==y.x||c.y!==y.y||c.rotate!==y.rotate||c.flipX||c.flipY}function er(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(f," ").concat(i," ").concat(n)},H={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:H}}function rr(c){var a=c.transform,e=c.width,r=e===void 0?n1:e,s=c.height,f=s===void 0?n1:s,i=c.startCentered,n=i===void 0?!1:i,l="";return n&&r3?l+="translate(".concat(a.x/E-r/2,"em, ").concat(a.y/E-f/2,"em) "):n?l+="translate(calc(-50% + ".concat(a.x/E,"em), calc(-50% + ").concat(a.y/E,"em)) "):l+="translate(".concat(a.x/E,"em, ").concat(a.y/E,"em) "),l+="scale(".concat(a.size/E*(a.flipX?-1:1),", ").concat(a.size/E*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var sr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function m3(){var c=s3,a=i3,e=z.cssPrefix,r=z.replacementClass,s=sr;if(e!==c||r!==a){var f=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");s=s.replace(f,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(n,".".concat(r))}return s}var B4=!1;function e1(){z.autoAddCss&&!B4&&(Ze(m3()),B4=!0)}var ir={mixout:function(){return{dom:{css:m3,insertCss:e1}}},hooks:function(){return{beforeDOMElementCreation:function(){e1()},beforeI2svg:function(){e1()}}}},T=U||{};T[F]||(T[F]={});T[F].styles||(T[F].styles={});T[F].hooks||(T[F].hooks={});T[F].shims||(T[F].shims=[]);var k=T[F],H3=[],fr=function c(){p.removeEventListener("DOMContentLoaded",c),A2=1,H3.map(function(a){return a()})},A2=!1;D&&(A2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),A2||p.addEventListener("DOMContentLoaded",fr));function nr(c){D&&(A2?setTimeout(c,0):H3.push(c))}function H2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,f=s===void 0?[]:s;return typeof c=="string"?t3(c):"<".concat(a," ").concat(ar(r),">").concat(f.map(H2).join(""),"</").concat(a,">")}function D4(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var lr=function(a,e){return function(r,s,f,i){return a.call(e,r,s,f,i)}},r1=function(a,e,r,s){var f=Object.keys(a),i=f.length,n=s!==void 0?lr(e,s):e,l,H,t;for(r===void 0?(l=1,t=a[f[0]]):(l=0,t=r);l<i;l++)H=f[l],t=n(t,a[H],H,a);return t};function or(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var f=c.charCodeAt(e++);(f&64512)==56320?a.push(((s&1023)<<10)+(f&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function o1(c){var a=or(c);return a.length===1?a[0].toString(16):null}function tr(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function R4(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function t1(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,f=R4(a);typeof k.hooks.addPack=="function"&&!s?k.hooks.addPack(c,R4(a)):k.styles[c]=m(m({},k.styles[c]||{}),f),c==="fas"&&t1("fa",a)}var x2,N2,b2,Y=k.styles,mr=k.shims,Hr=(x2={},u(x2,M,Object.values(n2[M])),u(x2,C,Object.values(n2[C])),x2),N1=null,z3={},v3={},V3={},h3={},M3={},zr=(N2={},u(N2,M,Object.keys(i2[M])),u(N2,C,Object.keys(i2[C])),N2);function vr(c){return~Xe.indexOf(c)}function Vr(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!vr(s)?s:null}var p3=function(){var a=function(f){return r1(Y,function(i,n,l){return i[l]=r1(n,f,{}),i},{})};z3=a(function(s,f,i){if(f[3]&&(s[f[3]]=i),f[2]){var n=f[2].filter(function(l){return typeof l=="number"});n.forEach(function(l){s[l.toString(16)]=i})}return s}),v3=a(function(s,f,i){if(s[i]=i,f[2]){var n=f[2].filter(function(l){return typeof l=="string"});n.forEach(function(l){s[l]=i})}return s}),M3=a(function(s,f,i){var n=f[2];return s[i]=i,n.forEach(function(l){s[l]=i}),s});var e="far"in Y||z.autoFetchSvg,r=r1(mr,function(s,f){var i=f[0],n=f[1],l=f[2];return n==="far"&&!e&&(n="fas"),typeof i=="string"&&(s.names[i]={prefix:n,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:n,iconName:l}),s},{names:{},unicodes:{}});V3=r.names,h3=r.unicodes,N1=B2(z.styleDefault,{family:z.familyDefault})};Je(function(c){N1=B2(c.styleDefault,{family:z.familyDefault})});p3();function b1(c,a){return(z3[c]||{})[a]}function hr(c,a){return(v3[c]||{})[a]}function j(c,a){return(M3[c]||{})[a]}function C3(c){return V3[c]||{prefix:null,iconName:null}}function Mr(c){var a=h3[c],e=b1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function q(){return N1}var S1=function(){return{prefix:null,iconName:null,rest:[]}};function B2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?M:e,s=i2[r][c],f=f2[r][c]||f2[r][s],i=c in k.styles?c:null;return f||i||null}var E4=(b2={},u(b2,M,Object.keys(n2[M])),u(b2,C,Object.keys(n2[C])),b2);function D2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,f=(a={},u(a,M,"".concat(z.cssPrefix,"-").concat(M)),u(a,C,"".concat(z.cssPrefix,"-").concat(C)),a),i=null,n=M;(c.includes(f[M])||c.some(function(H){return E4[M].includes(H)}))&&(n=M),(c.includes(f[C])||c.some(function(H){return E4[C].includes(H)}))&&(n=C);var l=c.reduce(function(H,t){var v=Vr(z.cssPrefix,t);if(Y[t]?(t=Hr[n].includes(t)?Ge[n][t]:t,i=t,H.prefix=t):zr[n].indexOf(t)>-1?(i=t,H.prefix=B2(t,{family:n})):v?H.iconName=v:t!==z.replacementClass&&t!==f[M]&&t!==f[C]&&H.rest.push(t),!s&&H.prefix&&H.iconName){var V=i==="fa"?C3(H.iconName):{},h=j(H.prefix,H.iconName);V.prefix&&(i=null),H.iconName=V.iconName||h||H.iconName,H.prefix=V.prefix||H.prefix,H.prefix==="far"&&!Y.far&&Y.fas&&!z.autoFetchSvg&&(H.prefix="fas")}return H},S1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&n===C&&(Y.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=j(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=q()||"fas"),l}var pr=function(){function c(){Ae(this,c),this.definitions={}}return ye(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),f=0;f<r;f++)s[f]=arguments[f];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(n){e.definitions[n]=m(m({},e.definitions[n]||{}),i[n]),t1(n,i[n]);var l=n2[M][n];l&&t1(l,i[n]),p3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(f){var i=s[f],n=i.prefix,l=i.iconName,H=i.icon,t=H[2];e[n]||(e[n]={}),t.length>0&&t.forEach(function(v){typeof v=="string"&&(e[n][v]=H)}),e[n][l]=H}),e}}]),c}(),U4=[],K={},Q={},Cr=Object.keys(Q);function ur(c,a){var e=a.mixoutsTo;return U4=c,K={},Object.keys(Q).forEach(function(r){Cr.indexOf(r)===-1&&delete Q[r]}),U4.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),w2(s[i])==="object"&&Object.keys(s[i]).forEach(function(n){e[i]||(e[i]={}),e[i][n]=s[i][n]})}),r.hooks){var f=r.hooks();Object.keys(f).forEach(function(i){K[i]||(K[i]=[]),K[i].push(f[i])})}r.provides&&r.provides(Q)}),e}function m1(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var f=K[c]||[];return f.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function X(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=K[c]||[];s.forEach(function(f){f.apply(null,e)})}function B(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q[c]?Q[c].apply(null,a):void 0}function H1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||q();if(a)return a=j(e,a)||a,D4(u3.definitions,e,a)||D4(k.styles,e,a)}var u3=new pr,Lr=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,X("noAuto")},dr={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(X("beforeI2svg",a),B("pseudoElements2svg",a),B("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,nr(function(){xr({autoReplaceSvgRoot:e}),X("watch",a)})}},gr={icon:function(a){if(a===null)return null;if(w2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:j(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=B2(a[0]);return{prefix:r,iconName:j(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(We))){var s=D2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||q(),iconName:j(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var f=q();return{prefix:f,iconName:j(f,a)||a}}}},N={noAuto:Lr,config:z,dom:dr,parse:gr,library:u3,findIconDefinition:H1,toHtml:H2},xr=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?p:e;(Object.keys(k.styles).length>0||z.autoFetchSvg)&&D&&z.autoReplaceSvg&&N.dom.i2svg({node:r})};function R2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return H2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(D){var r=p.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Nr(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,f=c.styles,i=c.transform;if(x1(i)&&e.found&&!r.found){var n=e.width,l=e.height,H={x:n/l/2,y:.5};s.style=T2(m(m({},f),{},{"transform-origin":"".concat(H.x+i.x/16,"em ").concat(H.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function br(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,f=c.symbol,i=f===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(e):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},s),{},{id:i}),children:r}]}]}function k1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,f=c.iconName,i=c.transform,n=c.symbol,l=c.title,H=c.maskId,t=c.titleId,v=c.extra,V=c.watchable,h=V===void 0?!1:V,d=r.found?r:e,b=d.width,S=d.height,w=s==="fak",L=[z.replacementClass,f?"".concat(z.cssPrefix,"-").concat(f):""].filter(function(R){return v.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(v.classes).join(" "),g={children:[],attributes:m(m({},v.attributes),{},{"data-prefix":s,"data-icon":f,class:L,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(S)})},A=w&&!~v.classes.indexOf("fa-fw")?{width:"".concat(b/S*16*.0625,"em")}:{};h&&(g.attributes[_]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(t||o2())},children:[l]}),delete g.attributes.title);var x=m(m({},g),{},{prefix:s,iconName:f,main:e,mask:r,maskId:H,transform:i,symbol:n,styles:m(m({},A),v.styles)}),G=r.found&&e.found?B("generateAbstractMask",x)||{children:[],attributes:{}}:B("generateAbstractIcon",x)||{children:[],attributes:{}},W=G.children,a1=G.attributes;return x.children=W,x.attributes=a1,n?br(x):Nr(x)}function q4(c){var a=c.content,e=c.width,r=c.height,s=c.transform,f=c.title,i=c.extra,n=c.watchable,l=n===void 0?!1:n,H=m(m(m({},i.attributes),f?{title:f}:{}),{},{class:i.classes.join(" ")});l&&(H[_]="");var t=m({},i.styles);x1(s)&&(t.transform=rr({transform:s,startCentered:!0,width:e,height:r}),t["-webkit-transform"]=t.transform);var v=T2(t);v.length>0&&(H.style=v);var V=[];return V.push({tag:"span",attributes:H,children:[a]}),f&&V.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),V}function Sr(c){var a=c.content,e=c.title,r=c.extra,s=m(m(m({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),f=T2(r.styles);f.length>0&&(s.style=f);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var s1=k.styles;function z1(c){var a=c[0],e=c[1],r=c.slice(4),s=p1(r,1),f=s[0],i=null;return Array.isArray(f)?i={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(I.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(I.SECONDARY),fill:"currentColor",d:f[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(I.PRIMARY),fill:"currentColor",d:f[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:f}},{found:!0,width:a,height:e,icon:i}}var kr={found:!1,width:512,height:512};function wr(c,a){!f3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function v1(c,a){var e=a;return a==="fa"&&z.styleDefault!==null&&(a=q()),new Promise(function(r,s){if(B("missingIconAbstract"),e==="fa"){var f=C3(c)||{};c=f.iconName||c,a=f.prefix||a}if(c&&a&&s1[a]&&s1[a][c]){var i=s1[a][c];return r(z1(i))}wr(c,a),r(m(m({},kr),{},{icon:z.showMissingIcons&&c?B("missingIconAbstract")||{}:{}}))})}var $4=function(){},V1=z.measurePerformance&&p2&&p2.mark&&p2.measure?p2:{mark:$4,measure:$4},e2='FA "6.5.1"',Ar=function(a){return V1.mark("".concat(e2," ").concat(a," begins")),function(){return L3(a)}},L3=function(a){V1.mark("".concat(e2," ").concat(a," ends")),V1.measure("".concat(e2," ").concat(a),"".concat(e2," ").concat(a," begins"),"".concat(e2," ").concat(a," ends"))},w1={begin:Ar,end:L3},S2=function(){};function G4(c){var a=c.getAttribute?c.getAttribute(_):null;return typeof a=="string"}function yr(c){var a=c.getAttribute?c.getAttribute(u1):null,e=c.getAttribute?c.getAttribute(L1):null;return a&&e}function Pr(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function Fr(){if(z.autoReplaceSvg===!0)return k2.replace;var c=k2[z.autoReplaceSvg];return c||k2.replace}function Tr(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function Br(c){return p.createElement(c)}function d3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Tr:Br:e;if(typeof c=="string")return p.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var f=c.children||[];return f.forEach(function(i){s.appendChild(d3(i,{ceFn:r}))}),s}function Dr(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var k2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(d3(s),e)}),e.getAttribute(_)===null&&z.keepOriginalSource){var r=p.createComment(Dr(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~g1(e).indexOf(z.replacementClass))return k2.replace(a);var s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var f=r[0].attributes.class.split(" ").reduce(function(n,l){return l===z.replacementClass||l.match(s)?n.toSvg.push(l):n.toNode.push(l),n},{toNode:[],toSvg:[]});r[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",f.toNode.join(" "))}var i=r.map(function(n){return H2(n)}).join(`
`);e.setAttribute(_,""),e.innerHTML=i}};function W4(c){c()}function g3(c,a){var e=typeof a=="function"?a:S2;if(c.length===0)e();else{var r=W4;z.mutateApproach===qe&&(r=U.requestAnimationFrame||W4),r(function(){var s=Fr(),f=w1.begin("mutate");c.map(s),f(),e()})}}var A1=!1;function x3(){A1=!0}function h1(){A1=!1}var y2=null;function O4(c){if(F4&&z.observeMutations){var a=c.treeCallback,e=a===void 0?S2:a,r=c.nodeCallback,s=r===void 0?S2:r,f=c.pseudoElementsCallback,i=f===void 0?S2:f,n=c.observeMutationsRoot,l=n===void 0?p:n;y2=new F4(function(H){if(!A1){var t=q();c2(H).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!G4(v.addedNodes[0])&&(z.searchPseudoElements&&i(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&z.searchPseudoElements&&i(v.target.parentNode),v.type==="attributes"&&G4(v.target)&&~_e.indexOf(v.attributeName))if(v.attributeName==="class"&&yr(v.target)){var V=D2(g1(v.target)),h=V.prefix,d=V.iconName;v.target.setAttribute(u1,h||t),d&&v.target.setAttribute(L1,d)}else Pr(v.target)&&s(v.target)})}}),D&&y2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Rr(){y2&&y2.disconnect()}function Er(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var f=s.split(":"),i=f[0],n=f.slice(1);return i&&n.length>0&&(r[i]=n.join(":").trim()),r},{})),e}function Ur(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=D2(g1(c));return s.prefix||(s.prefix=q()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=hr(s.prefix,c.innerText)||b1(s.prefix,o1(c.innerText))),!s.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function qr(c){var a=c2(c.attributes).reduce(function(s,f){return s.name!=="class"&&s.name!=="style"&&(s[f.name]=f.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return z.autoA11y&&(e?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||o2()):(a["aria-hidden"]="true",a.focusable="false")),a}function $r(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function I4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ur(c),r=e.iconName,s=e.prefix,f=e.rest,i=qr(c),n=m1("parseNodeAttributes",{},c),l=a.styleParser?Er(c):[];return m({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:l,attributes:i}},n)}var Gr=k.styles;function N3(c){var a=z.autoReplaceSvg==="nest"?I4(c,{styleParser:!1}):I4(c);return~a.extra.classes.indexOf(n3)?B("generateLayersText",c,a):B("generateSvgReplacementMutation",c,a)}var $=new Set;d1.map(function(c){$.add("fa-".concat(c))});Object.keys(i2[M]).map($.add.bind($));Object.keys(i2[C]).map($.add.bind($));$=t2($);function j4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var e=p.documentElement.classList,r=function(v){return e.add("".concat(T4,"-").concat(v))},s=function(v){return e.remove("".concat(T4,"-").concat(v))},f=z.autoFetchSvg?$:d1.map(function(t){return"fa-".concat(t)}).concat(Object.keys(Gr));f.includes("fa")||f.push("fa");var i=[".".concat(n3,":not([").concat(_,"])")].concat(f.map(function(t){return".".concat(t,":not([").concat(_,"])")})).join(", ");if(i.length===0)return Promise.resolve();var n=[];try{n=c2(c.querySelectorAll(i))}catch{}if(n.length>0)r("pending"),s("complete");else return Promise.resolve();var l=w1.begin("onTree"),H=n.reduce(function(t,v){try{var V=N3(v);V&&t.push(V)}catch(h){f3||h.name==="MissingIcon"&&console.error(h)}return t},[]);return new Promise(function(t,v){Promise.all(H).then(function(V){g3(V,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),t()})}).catch(function(V){l(),v(V)})})}function Wr(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N3(c).then(function(e){e&&g3([e],a)})}function Or(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:H1(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:H1(s||{})),c(r,m(m({},e),{},{mask:s}))}}var Ir=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?y:r,f=e.symbol,i=f===void 0?!1:f,n=e.mask,l=n===void 0?null:n,H=e.maskId,t=H===void 0?null:H,v=e.title,V=v===void 0?null:v,h=e.titleId,d=h===void 0?null:h,b=e.classes,S=b===void 0?[]:b,w=e.attributes,L=w===void 0?{}:w,g=e.styles,A=g===void 0?{}:g;if(a){var x=a.prefix,G=a.iconName,W=a.icon;return R2(m({type:"icon"},a),function(){return X("beforeDOMElementCreation",{iconDefinition:a,params:e}),z.autoA11y&&(V?L["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(d||o2()):(L["aria-hidden"]="true",L.focusable="false")),k1({icons:{main:z1(W),mask:l?z1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:G,transform:m(m({},y),s),symbol:i,title:V,maskId:t,titleId:d,extra:{attributes:L,styles:A,classes:S}})})}},jr={mixout:function(){return{icon:Or(Ir)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=j4,e.nodeCallback=Wr,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?p:r,f=e.callback,i=f===void 0?function(){}:f;return j4(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,f=r.title,i=r.titleId,n=r.prefix,l=r.transform,H=r.symbol,t=r.mask,v=r.maskId,V=r.extra;return new Promise(function(h,d){Promise.all([v1(s,n),t.iconName?v1(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var S=p1(b,2),w=S[0],L=S[1];h([e,k1({icons:{main:w,mask:L},prefix:n,iconName:s,transform:l,symbol:H,maskId:v,title:f,titleId:i,extra:V,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,f=e.main,i=e.transform,n=e.styles,l=T2(n);l.length>0&&(s.style=l);var H;return x1(i)&&(H=B("generateAbstractTransformGrouping",{main:f,transform:i,containerWidth:f.width,iconWidth:f.width})),r.push(H||f.icon),{children:r,attributes:s}}}},_r={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,f=s===void 0?[]:s;return R2({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(n){Array.isArray(n)?n.map(function(l){i=i.concat(l.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(t2(f)).join(" ")},children:i}]})}}}},Xr={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,f=s===void 0?null:s,i=r.classes,n=i===void 0?[]:i,l=r.attributes,H=l===void 0?{}:l,t=r.styles,v=t===void 0?{}:t;return R2({type:"counter",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:r}),Sr({content:e.toString(),title:f,extra:{attributes:H,styles:v,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(t2(n))}})})}}}},Yr={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,f=s===void 0?y:s,i=r.title,n=i===void 0?null:i,l=r.classes,H=l===void 0?[]:l,t=r.attributes,v=t===void 0?{}:t,V=r.styles,h=V===void 0?{}:V;return R2({type:"text",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:r}),q4({content:e,transform:m(m({},y),f),title:n,extra:{attributes:v,styles:h,classes:["".concat(z.cssPrefix,"-layers-text")].concat(t2(H))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,f=r.transform,i=r.extra,n=null,l=null;if(r3){var H=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();n=t.width/H,l=t.height/H}return z.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,q4({content:e.innerHTML,width:n,height:l,transform:f,title:s,extra:i,watchable:!0})])}}},Kr=new RegExp('"',"ug"),_4=[1105920,1112319];function Qr(c){var a=c.replace(Kr,""),e=tr(a,0),r=e>=_4[0]&&e<=_4[1],s=a.length===2?a[0]===a[1]:!1;return{value:o1(s?a[0]:a),isSecondary:r||s}}function X4(c,a){var e="".concat(Ue).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var f=c2(c.children),i=f.filter(function(W){return W.getAttribute(l1)===a})[0],n=U.getComputedStyle(c,a),l=n.getPropertyValue("font-family").match(Oe),H=n.getPropertyValue("font-weight"),t=n.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&t!=="none"&&t!==""){var v=n.getPropertyValue("content"),V=~["Sharp"].indexOf(l[2])?C:M,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?f2[V][l[2].toLowerCase()]:Ie[V][H],d=Qr(v),b=d.value,S=d.isSecondary,w=l[0].startsWith("FontAwesome"),L=b1(h,b),g=L;if(w){var A=Mr(b);A.iconName&&A.prefix&&(L=A.iconName,h=A.prefix)}if(L&&!S&&(!i||i.getAttribute(u1)!==h||i.getAttribute(L1)!==g)){c.setAttribute(e,g),i&&c.removeChild(i);var x=$r(),G=x.extra;G.attributes[l1]=a,v1(L,h).then(function(W){var a1=k1(m(m({},x),{},{icons:{main:W,mask:S1()},prefix:h,iconName:g,extra:G,watchable:!0})),R=p.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(R,c.firstChild):c.appendChild(R),R.outerHTML=a1.map(function(xe){return H2(xe)}).join(`