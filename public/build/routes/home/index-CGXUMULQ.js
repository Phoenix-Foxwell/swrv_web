import{a as X,c as Y}from"/build/_shared/chunk-HRPMO3WX.js";import"/build/_shared/chunk-WOJ3VDUN.js";import"/build/_shared/chunk-OISB2DV6.js";import"/build/_shared/chunk-6EK5NIKP.js";import{a as M}from"/build/_shared/chunk-OE53NSQW.js";import{a as U}from"/build/_shared/chunk-6ONMTUBQ.js";import{b as P}from"/build/_shared/chunk-XLGCWUM4.js";import{a as h,b as v}from"/build/_shared/chunk-MNPIC26H.js";import{a as B}from"/build/_shared/chunk-PO5G3Y6Y.js";import{L as R,a as f,m as b,s as O,x as T}from"/build/_shared/chunk-VYXQYHL2.js";import{b as k,h as I,l as D}from"/build/_shared/chunk-BDKSMX4O.js";import{c as g,d as j,e as w}from"/build/_shared/chunk-7UEYUE33.js";var p=g(j());var _=B()(s=>({isOpen:!0,change:a=>s(n=>({isOpen:a}))})),C=_;var c=g(w()),H=s=>{let a=()=>{let n=Math.floor(s.star),e=s.star-n,t=[];for(let r=0;r<n;r++)t.push((0,c.jsx)(f,{className:"text-xs text-pink-500",icon:b},r));e>0&&t.push((0,c.jsx)(f,{className:"text-xs text-pink-500",icon:b,style:{width:`${e*100}%`}},n));for(let r=0;r<5-n;r++)t.push((0,c.jsx)(f,{className:"text-xs text-gray-300",icon:b},5+r));return(0,c.jsx)(c.Fragment,{children:t})};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"bg-white rounded-xl shadow-xl w-64 my-2 h-full flex flex-col",children:[(0,c.jsx)("img",{src:s.image,alt:"error",className:"w-full h-40 object-cover rounded-t-md"}),(0,c.jsx)("div",{className:"grow"}),(0,c.jsxs)("div",{className:"px-4 pb-2",children:[(0,c.jsxs)("div",{className:"flex items-start my-2 justify-between",children:[(0,c.jsxs)("div",{className:"grow",children:[(0,c.jsx)("p",{className:"text-black font-semibold text-sm text-left",children:s.name.split("@")[0]}),(0,c.jsx)("div",{className:"flex",children:(0,c.jsx)(a,{})})]}),(0,c.jsx)("div",{children:(0,c.jsxs)("p",{className:"text-black font-bold  text-md text-right",children:["3500 ",s.currency,(0,c.jsx)("br",{})," ",s.dob]})})]}),(0,c.jsxs)("div",{className:"my-4",children:[(0,c.jsxs)("div",{className:"bg-gray-200  rounded-md py-2 flex justify-around",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"text-center text-sm font-semibold",children:"2 00 5887"}),(0,c.jsx)("p",{className:"text-center text-xs font-normal",children:"Reach"})]}),(0,c.jsx)("div",{className:"h-10 w-[1px] bg-slate-900"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"text-center text-sm font-semibold",children:"1 34 9887"}),(0,c.jsx)("p",{className:"text-center text-xs font-normal",children:"Impression"})]})]}),(0,c.jsx)("div",{className:"bg-gray-200 text-center text-sm font-semibold rounded-md py-2 mt-2",children:(0,c.jsxs)("p",{children:["SWRV score :  ",(0,c.jsx)("span",{className:"font-normal",children:"2005887"})]})})]})]})]})})},$=H;var y=g(j());var F=function(s,a){return(F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(s,a)},W,N,V=(function(s){(function(){var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if(i==="string"||i==="number")e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if(i==="object")for(var d in r)a.call(r,d)&&r[d]&&e.push(d)}}return e.join(" ")}s.exports?(n.default=n,s.exports=n):window.classNames=n})()}(N={path:W,exports:{},require:function(s,a){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(a==null&&N.path)}},N.exports),N.exports);function A(s,a,n){var e,t,r,i,l;function d(){var m=Date.now()-i;m<a&&m>=0?e=setTimeout(d,a-m):(e=null,n||(l=s.apply(r,t),r=t=null))}a==null&&(a=100);var u=function(){r=this,t=arguments,i=Date.now();var m=n&&!e;return e||(e=setTimeout(d,a)),m&&(l=s.apply(r,t),r=t=null),l};return u.clear=function(){e&&(clearTimeout(e),e=null)},u.flush=function(){e&&(l=s.apply(r,t),r=t=null,clearTimeout(e),e=null)},u}A.debounce=A;var q=A;(function(s,a){a===void 0&&(a={});var n=a.insertAt;if(s&&typeof document<"u"){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=s:t.appendChild(document.createTextNode(s))}})(`.indiana-scroll-container {
  overflow: auto; }
  .indiana-scroll-container--dragging {
    scroll-behavior: auto !important; }
    .indiana-scroll-container--dragging > * {
      pointer-events: none;
      cursor: -webkit-grab;
      cursor: grab; }
  .indiana-scroll-container--hide-scrollbars {
    overflow: hidden;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; }
    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {
      display: none !important;
      height: 0 !important;
      width: 0 !important;
      background: transparent !important;
      -webkit-appearance: none !important; }
  .indiana-scroll-container--native-scroll {
    overflow: auto; }

.indiana-dragging {
  cursor: -webkit-grab;
  cursor: grab; }
`);var E,z=(E="indiana-scroll-container",function(s,a){if(!s)return E;var n;typeof s=="string"?n=s:a=s;var e=E;return n&&(e+="__"+n),e+(a?Object.keys(a).reduce(function(t,r){var i=a[r];return i&&(t+=" "+(typeof i=="boolean"?e+"--"+r:e+"--"+r+"_"+i)),t},""):"")}),J=function(s){function a(n){var e=s.call(this,n)||this;return e.onEndScroll=function(){e.scrolling=!1,!e.pressed&&e.started&&e.processEnd()},e.onScroll=function(t){var r=e.container.current;r.scrollLeft===e.scrollLeft&&r.scrollTop===e.scrollTop||(e.scrolling=!0,e.processScroll(t),e.onEndScroll())},e.onTouchStart=function(t){var r=e.props.nativeMobileScroll;if(e.isDraggable(t.target))if(e.internal=!0,r&&e.scrolling)e.pressed=!0;else{var i=t.touches[0];e.processClick(t,i.clientX,i.clientY),!r&&e.props.stopPropagation&&t.stopPropagation()}},e.onTouchEnd=function(t){var r=e.props.nativeMobileScroll;e.pressed&&(!e.started||e.scrolling&&r?e.pressed=!1:e.processEnd(),e.forceUpdate())},e.onTouchMove=function(t){var r=e.props.nativeMobileScroll;if(e.pressed&&(!r||!e.isMobile)){var i=t.touches[0];i&&e.processMove(t,i.clientX,i.clientY),t.preventDefault(),e.props.stopPropagation&&t.stopPropagation()}},e.onMouseDown=function(t){e.isDraggable(t.target)&&e.isScrollable()&&(e.internal=!0,e.props.buttons.indexOf(t.button)!==-1&&(e.processClick(t,t.clientX,t.clientY),t.preventDefault(),e.props.stopPropagation&&t.stopPropagation()))},e.onMouseMove=function(t){e.pressed&&(e.processMove(t,t.clientX,t.clientY),t.preventDefault(),e.props.stopPropagation&&t.stopPropagation())},e.onMouseUp=function(t){e.pressed&&(e.started?e.processEnd():(e.internal=!1,e.pressed=!1,e.forceUpdate(),e.props.onClick&&e.props.onClick(t)),t.preventDefault(),e.props.stopPropagation&&t.stopPropagation())},e.container=y.default.createRef(),e.onEndScroll=q(e.onEndScroll,300),e.scrolling=!1,e.started=!1,e.pressed=!1,e.internal=!1,e.getRef=e.getRef.bind(e),e}return function(n,e){function t(){this.constructor=n}F(n,e),n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(a,s),a.prototype.componentDidMount=function(){var n=this.props.nativeMobileScroll,e=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),e.addEventListener("touchstart",this.onTouchStart,{passive:!1}),e.addEventListener("mousedown",this.onMouseDown,{passive:!1}),n&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())},a.prototype.componentWillUnmount=function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)},a.prototype.getElement=function(){return this.container.current},a.prototype.isMobileDevice=function(){return window.orientation!==void 0||navigator.userAgent.indexOf("IEMobile")!==-1},a.prototype.isDraggable=function(n){var e=this.props.ignoreElements;if(e){var t=n.closest(e);return t===null||t.contains(this.getElement())}return!0},a.prototype.isScrollable=function(){var n=this.container.current;return n&&(n.scrollWidth>n.clientWidth||n.scrollHeight>n.clientHeight)},a.prototype.processClick=function(n,e,t){var r=this.container.current;this.scrollLeft=r.scrollLeft,this.scrollTop=r.scrollTop,this.clientX=e,this.clientY=t,this.pressed=!0},a.prototype.processStart=function(n){n===void 0&&(n=!0);var e=this.props.onStartScroll;this.started=!0,n&&document.body.classList.add("indiana-dragging"),e&&e({external:!this.internal}),this.forceUpdate()},a.prototype.processScroll=function(n){if(this.started){var e=this.props.onScroll;e&&e({external:!this.internal})}else this.processStart(!1)},a.prototype.processMove=function(n,e,t){var r=this.props,i=r.horizontal,l=r.vertical,d=r.activationDistance,u=r.onScroll,m=this.container.current;this.started?(i&&(m.scrollLeft-=e-this.clientX),l&&(m.scrollTop-=t-this.clientY),u&&u({external:!this.internal}),this.clientX=e,this.clientY=t,this.scrollLeft=m.scrollLeft,this.scrollTop=m.scrollTop):(i&&Math.abs(e-this.clientX)>d||l&&Math.abs(t-this.clientY)>d)&&(this.clientX=e,this.clientY=t,this.processStart())},a.prototype.processEnd=function(){var n=this.props.onEndScroll;this.container.current&&n&&n({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("indiana-dragging"),this.forceUpdate()},a.prototype.getRef=function(n){[this.container,this.props.innerRef].forEach(function(e){e&&(typeof e=="function"?e(n):e.current=n)})},a.prototype.render=function(){var n=this.props,e=n.children,t=n.draggingClassName,r=n.className,i=n.style,l=n.hideScrollbars,d=n.component;return y.default.createElement(d,{className:V(r,this.pressed&&t,z({dragging:this.pressed,"hide-scrollbars":l,"native-scroll":this.isMobile})),style:i,ref:this.getRef,onScroll:this.onScroll},e)},a.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},component:"div",buttons:[0]},a}(y.PureComponent),L=J;var o=g(w());var G=()=>{let s=D(),n=s.user.profileCompleteness,e=s.user.role.code!=10,t=C(d=>d.isOpen),r=C(d=>d.change),i=k(),l=async()=>{};return(0,p.useEffect)(()=>{r(n!="1"),l()},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"overflow-hidden",children:[t?(0,o.jsx)(Q,{}):null,(0,o.jsx)(Z,{isBrand:e}),e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Y,{platform:s.platform,country:s.country,category:s.category}),(0,o.jsx)(re,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ee,{}),(0,o.jsx)(te,{}),(0,o.jsx)(oe,{}),(0,o.jsx)(ne,{})]})]})})},K=G,Q=()=>{let s=C(a=>a.change);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"w-full bg-secondary rounded-xl p-2 my-4 flex",children:[(0,o.jsxs)("div",{className:"flex grow flex-col md:flex-row",children:[(0,o.jsx)("div",{className:"grow grid place-items-center",children:(0,o.jsxs)("div",{className:"py-10 md:w-[400px]",children:[(0,o.jsx)("h1",{className:"text-2xl text-white font-bold",children:"Please Complete Your Profile"}),(0,o.jsx)("h1",{className:"text-md text-white font-normal",children:"Your linked social media accounts are under verification. You'll be notified within 24 hours."})]})}),(0,o.jsx)("div",{className:"xl:w-96 grid place-items-center",children:(0,o.jsx)(I,{to:"/home/profilecomplete",children:(0,o.jsx)(U,{text:"Click here to complete",textColor:"text-white",background:"bg-primary"})})})]}),(0,o.jsxs)("div",{onClick:()=>{s(!1)},children:[" ",(0,o.jsx)(f,{className:"text-white text-2xl font-bold",icon:R})," "]})]})})},Z=s=>{let a=k(),[n,e]=(0,p.useState)([]),t=[{image:"74.jfif",id:"74"},{image:"75.jfif",id:"75"},{image:"76.jfif",id:"76"},{image:"77.jfif",id:"77"},{image:"78.jfif",id:"78"},{image:"79.jfif",id:"79"},{image:"80.jfif",id:"80"},{image:"81.jfif",id:"81"},{image:"82.jfif",id:"82"},{image:"83.jfif",id:"83"},{image:"84.jfif",id:"84"},{image:"85.jfif",id:"85"},{image:"86.jfif",id:"86"},{image:"87.jfif",id:"87"},{image:"88.jfif",id:"88"}],r=async()=>{let i=await h({method:"post",url:`${v}/api/search-brand`});e(i.data.data)};return(0,p.useEffect)(()=>{r()},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"grid place-items-center w-full mt-10",children:[(0,o.jsx)("h1",{className:"text-4xl text-primary font-bold text-center",children:"Welcome to SWRV"}),(0,o.jsx)("h1",{className:"text-xl text-primary font-normal text-center",children:"Reach the next billion"})]}),s.isBrand?(0,o.jsx)(L,{className:"flex gap-6 items-center mb-6 overflow-x-scroll no-scrollbar mt-6",children:t.map((i,l)=>(0,o.jsx)("div",{className:"block shrink-0 cursor-pointer",onClick:()=>{a(`/home/user/${i.id}`)},children:(0,o.jsx)("img",{src:`/images/inf/${i.image}`,alt:"error",className:"rounded-md w-40 h-40 object-center object-cover"})},l))}):(0,o.jsx)(L,{className:"flex gap-6 items-center mb-6 overflow-x-scroll no-scrollbar mt-6",children:n.slice(0,10).map((i,l)=>(0,o.jsx)("div",{className:"block shrink-0 cursor-pointer",onClick:()=>{a(`/home/brand/${i.id}`)},children:(0,o.jsx)("img",{src:i.logo,alt:"error",className:"rounded-md w-40 h-40 object-center object-cover"})},l))})]})})},ee=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"w-full rounded-xl flex flex-col md:flex-row bg-yellow-500 mt-12",children:[(0,o.jsx)("div",{className:"grow grid place-items-center",children:(0,o.jsx)("img",{src:"/images/cashgirl.png",alt:"error",className:"md:h-80"})}),(0,o.jsx)("div",{className:"p-4 md:p-12 bg-[#F7941D] rounded-r-xl grid place-items-center",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-2xl text-black font-bold text-left",children:"To earn more money?"}),(0,o.jsx)("h1",{className:"text-md text-black font-normal text-left md:w-80",children:"Search, apply for brands campaigns and create more great content."})]})})]})}),te=()=>{let[s,a]=(0,p.useState)([]),[n,e]=(0,p.useState)([]);return(0,p.useEffect)(()=>{(async()=>{let r=await h({method:"post",url:`${v}/api/get-top-campaigns`});a(r.data.data.campaigns)})()},[]),(0,p.useEffect)(()=>{(async()=>{let r=await Promise.all(s.map(async(i,l)=>{let d=[];for(let x=0;x<i.platforms.length;x++)d.push(i.platforms[x].platformLogoUrl);let u=await P(i.campaignTypeId),m=i.brand.length==0||i.brand==null||i.brand==null||i.brand==""||i.brand.logo=="0"||i.brand.logo==null||i.brand.logo==null||i.brand.logo==""?"/images/avatar/user.png":i.brand.logo;return(0,o.jsx)("div",{children:(0,o.jsx)(M,{id:i.id,title:i.name,weburl:i.brand.webUrl,platforms:d,maxval:i.costPerPost.split(".")[0],category:u,image:m,name:i.brand.name,currency:i.currency.code,btntext:"View More & Learn"})},l)}));e(r)})()},[s]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8",children:[(0,o.jsxs)("div",{className:"w-60 rounded-xl text-xl font-bold text-black p-2",children:[" ",(0,o.jsx)(f,{icon:T,className:"text-md text-secondary"})," ","Sponsored Posts"," "]}),(0,o.jsx)("div",{className:"flex gap-x-10 flex-wrap gap-y-6",children:n})]})})},oe=()=>{let[s,a]=(0,p.useState)([]),[n,e]=(0,p.useState)([]);return(0,p.useEffect)(()=>{(async()=>{let r=await h({method:"post",url:`${v}/api/campaign-search`});a(r.data.data)})()},[]),(0,p.useEffect)(()=>{(async()=>{let r=0,i=await Promise.all(s.map(async(l,d)=>{if(r>=5)return null;r++;let u=[];for(let S=0;S<l.platforms.length;S++)u.push(l.platforms[S].platformLogoUrl);let m=await P(l.campaignTypeId),x=l.brand.length==0||l.brand==null||l.brand==null||l.brand==""||l.brand.logo=="0"||l.brand.logo==null||l.brand.logo==null||l.brand.logo==""?"/images/avatar/user.png":l.brand.logo;return(0,o.jsx)("div",{children:(0,o.jsx)(M,{id:l.id,title:l.campaignName,weburl:l.brand.webUrl,platforms:u,maxval:l.costPerPost.split(".")[0],category:m,image:x,name:l.brand.name,currency:l.currency.code,btntext:"View More & Learn"})},d)}));e(i)})()},[s]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8",children:[(0,o.jsxs)("div",{className:"w-60 rounded-xl text-xl font-bold text-black",children:[" ",(0,o.jsx)(f,{icon:O,className:"text-md text-secondary"})," ","New Campaign"," "]}),(0,o.jsx)("div",{className:"flex gap-x-10 flex-wrap gap-y-6",children:n})]})})},ne=()=>{let[s,a]=(0,p.useState)([]),n=async()=>{let e=await h({method:"post",url:`${v}/api/get-top-brands`,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});a(e.data.data)};return(0,p.useEffect)(()=>{n()},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8",children:[(0,o.jsxs)("div",{className:"w-60  rounded-xl text-xl font-bold text-black my-4",children:[" ",(0,o.jsx)(f,{icon:b,className:"text-md text-secondary"})," ","Top brands"," "]}),(0,o.jsx)("div",{className:"flex gap-x-10 flex-wrap gap-y-6",children:s.map((e,t)=>(0,o.jsx)("div",{children:(0,o.jsx)(X,{id:e.id,email:e.email,image:e.logo,name:e.name,website:e.webUrl})},t))})]})})},re=()=>{let[s,a]=(0,p.useState)([]),n=async()=>{let e=await h({method:"post",url:`${v}/api/user-search`,data:{role:10},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});for(let t=0;t<5;t++)a(r=>[...r,e.data.data[t]])};return(0,p.useEffect)(()=>{n()},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4 lg:px-14 py-8",children:[(0,o.jsxs)("div",{className:"w-60 rounded-xl text-xl font-bold text-black p-2",children:[" ",(0,o.jsx)(f,{icon:T,className:"text-md text-secondary"})," ","Top influencer"," "]}),(0,o.jsx)("div",{className:"flex gap-x-10 flex-wrap",children:s.map((e,t)=>{let r=e.pic=="0"||e.pic==null||e.pic==null||e.pic==""?"/images/avatar/user.png":e.pic;return(0,o.jsx)("div",{children:(0,o.jsx)($,{star:parseInt(e.rating),image:r,name:e.userName,currency:e.currency.code,dob:e.dob})},t)})})]})})};export{K as default};
