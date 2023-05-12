import{b as Ke,e as Ue,f as Ze}from"/build/_shared/chunk-ZZL6GC2B.js";var oo=Ke(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var f=Ze(),d=Ue(),l=function(){return l=Object.assign||function(e){for(var o,s=1,r=arguments.length;s<r;s++)for(var t in o=arguments[s])Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);return e},l.apply(this,arguments)};function Ce(e,o,s){if(s||arguments.length===2)for(var r,t=0,m=o.length;t<m;t++)!r&&t in o||(r||(r=Array.prototype.slice.call(o,0,t)),r[t]=o[t]);return e.concat(r||Array.prototype.slice.call(o))}function we(e){var o=e.size,s=o===void 0?25:o,r=e.SVGstrokeColor,t=r===void 0?"currentColor":r,m=e.SVGstorkeWidth,V=m===void 0?0:m,_=e.SVGclassName,i=_===void 0?"star-svg":_,k=e.SVGstyle;return f.jsx("svg",l({className:i,style:k,stroke:t,fill:"currentColor",strokeWidth:V,viewBox:"0 0 24 24",width:s,height:s,xmlns:"http://www.w3.org/2000/svg"},{children:f.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function De(e,o){switch(o.type){case"PointerMove":return l(l({},e),{hoverValue:o.payload,hoverIndex:o.index});case"PointerLeave":return l(l({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return l(l({},e),{valueIndex:e.hoverIndex,ratingValue:o.payload});default:return e}}var Xe="style-module_starRatingWrap__q-lJC",Ye="style-module_simpleStarRating__nWUxf",Qe="style-module_fillIcons__6---A",$e="style-module_emptyIcons__Bg-FZ",eo="style-module_tooltip__tKc3i";function Ve(){return typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||typeof navigator<"u"&&navigator.maxTouchPoints>0}(function(e,o){o===void 0&&(o={});var s=o.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",s==="top"&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}})(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),j.Rating=function(e){var o,s,r=e.onClick,t=e.onPointerMove,m=e.onPointerEnter,V=e.onPointerLeave,_=e.initialValue,i=_===void 0?0:_,k=e.iconsCount,u=k===void 0?5:k,P=e.size,A=P===void 0?40:P,L=e.readonly,C=L!==void 0&&L,R=e.rtl,S=R!==void 0&&R,T=e.customIcons,W=T===void 0?[]:T,z=e.allowFraction,v=z!==void 0&&z,ke=e.style,B=e.className,Se=B===void 0?"react-simple-star-rating":B,E=e.transition,be=E!==void 0&&E,F=e.allowHover,q=F===void 0||F,O=e.disableFillHover,H=O!==void 0&&O,J=e.fillIcon,Me=J===void 0?null:J,K=e.fillColor,Ge=K===void 0?"#ffbc0b":K,U=e.fillColorArray,Ie=U===void 0?[]:U,Ne=e.fillStyle,Z=e.fillClassName,je=Z===void 0?"filled-icons":Z,D=e.emptyIcon,Pe=D===void 0?null:D,X=e.emptyColor,Ae=X===void 0?"#cccccc":X,Le=e.emptyStyle,Y=e.emptyClassName,Re=Y===void 0?"empty-icons":Y,Q=e.allowTitleTag,Te=Q===void 0||Q,$=e.showTooltip,We=$!==void 0&&$,ee=e.tooltipDefaultText,ze=ee===void 0?"Your Rate":ee,oe=e.tooltipArray,b=oe===void 0?[]:oe,Be=e.tooltipStyle,te=e.tooltipClassName,Ee=te===void 0?"react-simple-star-rating-tooltip":te,ne=e.SVGclassName,re=ne===void 0?"star-svg":ne,ie=e.titleSeparator,Fe=ie===void 0?"out of":ie,le=e.SVGstyle,ae=e.SVGstorkeWidth,se=ae===void 0?0:ae,ce=e.SVGstrokeColor,de=ce===void 0?"currentColor":ce,ue=d.useReducer(De,{hoverIndex:0,valueIndex:0,ratingValue:i,hoverValue:null}),M=ue[0],c=M.ratingValue,a=M.hoverValue,N=M.hoverIndex,pe=M.valueIndex,G=ue[1];d.useEffect(function(){i&&G({type:"MouseClick",payload:0})},[i]);var h=d.useMemo(function(){return v?2*u:u},[v,u]),g=d.useMemo(function(){return i>h?0:v||Math.floor(i)===i?Math.round(i/u*100):2*Math.ceil(i)*10},[v,i,u,h]),fe=d.useMemo(function(){return(v?2*i-1:i-1)||0},[v,i]),x=d.useCallback(function(n){return u%2!=0?n/2/10:n*u/100},[u]),he=function(n){for(var y=n.clientX,p=n.currentTarget.children[0].getBoundingClientRect(),Oe=p.left,He=p.right,Je=p.width,ge=S?He-y:y-Oe,I=h,xe=Math.round(Je/h),w=0;w<=h;w+=1)if(ge<=xe*w){I=w===0&&ge<xe?0:w;break}var _e=I-1;I>0&&(G({type:"PointerMove",payload:100*I/h,index:_e}),t&&a&&t(x(a),_e,n))},ye=function(n){a&&(G({type:"MouseClick",payload:a}),r&&r(x(a),N,n))},qe=d.useMemo(function(){if(q){if(H){var n=c&&c||g;return a&&a>n?a:n}return a&&a||c&&c||g}return c&&c||g},[q,H,a,c,g]);d.useEffect(function(){b.length>h&&console.error("tooltipArray Array length is bigger then Icons Count length.")},[b.length,h]);var me=d.useCallback(function(n){return a&&n[N]||c&&n[pe]||i&&n[fe]},[a,N,c,pe,i,fe]),ve=d.useMemo(function(){return a&&x(a)||c&&x(c)||i&&x(g)},[a,x,c,i,g]);return f.jsxs("span",l({className:Xe,style:{direction:"".concat(S?"rtl":"ltr")}},{children:[f.jsxs("span",l({className:"".concat(Ye," ").concat(Se),style:l({cursor:C?"":"pointer"},ke),onPointerMove:C?void 0:he,onPointerEnter:C?void 0:function(n){m&&m(n),Ve()&&he(n)},onPointerLeave:C?void 0:function(n){Ve()&&ye(),G({type:"PointerLeave"}),V&&V(n)},onClick:C?void 0:ye,"aria-hidden":"true"},{children:[f.jsx("span",l({className:"".concat($e," ").concat(Re),style:l({color:Ae},Le)},{children:Ce([],Array(u),!0).map(function(n,y){var p;return f.jsx(d.Fragment,{children:((p=W[y])===null||p===void 0?void 0:p.icon)||Pe||f.jsx(we,{SVGclassName:re,SVGstyle:le,SVGstorkeWidth:se,SVGstrokeColor:de,size:A})},y)})})),f.jsx("span",l({className:"".concat(Qe," ").concat(je),style:l((o={},o[S?"right":"left"]=0,o.color=me(Ie)||Ge,o.transition=be?"width .2s ease, color .2s ease":"",o.width="".concat(qe,"%"),o),Ne),title:Te?"".concat(ve," ").concat(Fe," ").concat(u):void 0},{children:Ce([],Array(u),!0).map(function(n,y){var p;return f.jsx(d.Fragment,{children:((p=W[y])===null||p===void 0?void 0:p.icon)||Me||f.jsx(we,{SVGclassName:re,SVGstyle:le,SVGstorkeWidth:se,SVGstrokeColor:de,size:A})},y)})}))]})),We&&f.jsx("span",l({className:"".concat(eo," ").concat(Ee),style:l((s={},s[S?"marginRight":"marginLeft"]=20,s),Be)},{children:(b.length>0?me(b):ve)||ze}))]}))}});export{oo as a};
