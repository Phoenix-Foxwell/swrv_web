import{a as Ae}from"/build/_shared/chunk-JA7NR2MW.js";import{a as Be}from"/build/_shared/chunk-OISB2DV6.js";import{a as de}from"/build/_shared/chunk-6EK5NIKP.js";import{a as Te}from"/build/_shared/chunk-OE53NSQW.js";import{a as k}from"/build/_shared/chunk-6ONMTUBQ.js";import{b as Ie}from"/build/_shared/chunk-XLGCWUM4.js";import{a as W,b as X}from"/build/_shared/chunk-MNPIC26H.js";import{B as G,J as ne,K as ee,L as oe,a as u,b as U}from"/build/_shared/chunk-VYXQYHL2.js";import{h as Fe,l as Ee}from"/build/_shared/chunk-BDKSMX4O.js";import{c as z,d as Re,e as re}from"/build/_shared/chunk-7UEYUE33.js";var le=z(Be()),r=z(Re());var N=z(re()),$e=l=>(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:"bg-white rounded-xl shadow-xl p-4 w-64",children:[(0,N.jsxs)("div",{className:"flex items-end gap-x-3",children:[(0,N.jsx)("div",{children:(0,N.jsx)("img",{src:l.image,alt:"error",className:"object-cover w-16 h-16 rounded"})}),(0,N.jsx)("p",{className:"text-black font-semibold text-xl content-end text-left",children:l.name})]}),(0,N.jsxs)("p",{className:"text-black font-semibold text-xs text-left mt-2",children:["email : ",l.email]}),(0,N.jsxs)("p",{className:"text-black font-semibold text-xs text-left mt-2",children:["Website : ",l.website]}),(0,N.jsx)(Fe,{to:`/home/brand/${l.id}`,children:(0,N.jsx)(k,{text:"View",textColor:"text-black",background:"bg-[#01FFF4]",width:"w-full",margin:"my-2",fontwidth:"font-bold"})})]})});var e=z(re());var Le=()=>{let l=Ee(),o=l.user.role.code!=10,[d,y]=(0,r.useState)(!1);return(0,e.jsx)(e.Fragment,{children:o?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"flex my-6 md:flex-row flex-col",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-2xl font-bold text-black text-left mt-4",children:"Find Influencer"}),(0,e.jsx)("p",{className:"text-md font-normal text-black text-left",children:"Here you can manage all the influecner."})]})}),(0,e.jsx)(He,{platform:l.platform,country:l.country,category:l.category})]})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex my-6 md:flex-row flex-col",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h1",{className:"text-2xl font-bold text-black text-left mt-4",children:["Find ",d?"brand":"campaign"]}),(0,e.jsxs)("p",{className:"text-md font-normal text-black text-left",children:["Here you can search manage all the"," ",d?"brand":"campaign"," that you are participating in."]})]}),(0,e.jsx)("div",{className:"hidden md:block md:grow"}),(0,e.jsxs)("div",{className:"flex justify-center",children:[(0,e.jsx)("div",{onClick:()=>{y(!1)},children:(0,e.jsx)(k,{height:"h-12",text:"Campaign",fontwidth:"font-bold",background:d?"bg-gray-300":"bg-cyan-300",textColor:d?"text-gray-600":"text-black"})}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsx)("div",{onClick:()=>{y(!0)},children:(0,e.jsx)(k,{height:"h-12",text:"Brand",fontwidth:"font-bold",background:d?"bg-cyan-300":"bg-gray-300",textColor:d?"text-black":"text-gray-600"})})]})]}),d?(0,e.jsx)(De,{}):(0,e.jsx)(Me,{platform:l.platform,country:l.country,category:l.category})]})})})},lt=Le,Me=l=>{let o=l.country,d=l.platform,y=l.category,[x,n]=(0,r.useState)(0),[v,b]=(0,r.useState)(!1),[S,p]=(0,r.useState)([]),C=(0,r.useRef)(null),[g,P]=(0,r.useState)([]),[J,O]=(0,r.useState)(!1),[f,R]=(0,r.useState)([]),[i,B]=(0,r.useState)([]),[Q,Y]=(0,r.useState)(!1),[F,h]=(0,r.useState)(null),L=(0,r.useRef)(null),M=(0,r.useRef)(null),I=(0,r.useRef)(null),T=(0,r.useRef)(null),A=(0,r.useRef)(null),te=async()=>{var w,E,se,ce,ie,me,ue,pe,fe,ge,xe,ve,ye,be,he,we,Ne,Ce,ke,Se;h("");let t={active:v?"1":"0"};C.current.value!=null&&C.current.value!=null&&C.current.value!=""&&(t.name=C.current.value),((w=L.current)==null?void 0:w.value)!=null&&((E=L.current)==null?void 0:E.value)!=null&&((se=L.current)==null?void 0:se.value)!=""&&(t.minReach=(ce=L.current)==null?void 0:ce.value),((ie=M.current)==null?void 0:ie.value)!=null&&((me=M.current)==null?void 0:me.value)!=null&&((ue=M.current)==null?void 0:ue.value)!=""&&(t.maxReach=(pe=M.current)==null?void 0:pe.value),((fe=I.current)==null?void 0:fe.value)!=null&&((ge=I.current)==null?void 0:ge.value)!=null&&((xe=I.current)==null?void 0:xe.value)!=""&&(t.costPerPost=(ve=I.current)==null?void 0:ve.value),((ye=T.current)==null?void 0:ye.value)!=null&&((be=T.current)==null?void 0:be.value)!=null&&((he=T.current)==null?void 0:he.value)!=""&&(t.minTarget=(we=T.current)==null?void 0:we.value),((Ne=A.current)==null?void 0:Ne.value)!=null&&((Ce=A.current)==null?void 0:Ce.value)!=null&&((ke=A.current)==null?void 0:ke.value)!=""&&(t.totalTarget=(Se=A.current)==null?void 0:Se.value);let s=await W.post(`${X}/api/campaign-search`,t);if(s.data.status==!1)return h(s.data.message);p(s.data.data)},Z=async()=>{if(h(""),i.length==0)return h("Select the category");if(f.length==0)return h("Select the platform");if(g.length==0)return h("Select the country");let t={country:i[0].id,platform:f.join(","),category:i[0].id,active:v?"1":"0"},s=await W.post(`${X}/api/campaign-search`,t);if(s.data.status==!1)return h(s.data.message);p(s.data.data)},H=()=>{p([])},[$,D]=(0,r.useState)(!1),[ae,K]=(0,r.useState)(!1),[V,j]=(0,r.useState)(null),[a,c]=de("CampaignSearch",{defaultValue:[]}),m=(0,r.useRef)(null),q=t=>{if(t==""||t==null||t==null)return j("Enter the Filter name");if(i.length==0)return j("Select the category");if(f.length==0)return j("Select the platform");if(g.length==0)return j("Select the country");for(let w=0;w<a.length;w++)if(t==a[w].name)return j("Filter name already exist.");let s={name:t,country:g,platform:f,category:i,active:v};c([...a,s]),m.current.value="",K(!1)},Pe=t=>{B(t.category),R(t.platform),P(t.country),b(t.active),D(!1)};function _(t){let s=t.keyCode||t.which,w=String.fromCharCode(s);/^[0-9\b]*$/.test(w)||t.preventDefault()}return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"rounded-xl shadow-xl p-6 bg-white",children:[(0,e.jsxs)("div",{className:"flex px-2 my-4",children:[(0,e.jsx)("h2",{className:"text-black text-xl text-left font-bold",children:"Filter"}),(0,e.jsx)("div",{className:"grow"}),x==0?(0,e.jsxs)("div",{className:"flex gap-x-2",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{K(!ae)},children:"Save filter"}),(0,e.jsxs)("div",{className:`w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${ae?"":"hidden"}`,children:[(0,e.jsx)("p",{className:"text-center text-sm text-slate-900 font-semibold my-2",children:"Filter name"}),(0,e.jsx)("input",{ref:m,type:"text",className:"bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"}),V==""||V==null||V==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2",children:V}),(0,e.jsx)("button",{onClick:()=>{q(m.current.value)},className:"text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500",children:"SAVE"}),(0,e.jsx)("button",{onClick:()=>{K(!1)},className:"text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1",children:"Close"})]})]}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{D(!$)},children:["Saved filter",(0,e.jsx)(u,{icon:U})," "]}),(0,e.jsx)("div",{className:`w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${$?"":"hidden"}`,children:a.map((t,s)=>(0,e.jsx)("div",{className:"w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer",onClick:()=>{Pe(t)},children:t.name},s))})]})]}):null]}),x==1?(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{className:"w-full flex flex-wrap gap-6 justify-between",children:[(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Search"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:C,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Start typing to search.."})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Min Reach"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:L,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Min Reach",onKeyDown:_})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Max Reach"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:M,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Max Reach",onKeyDown:_})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Cost Per Post"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:I,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Cost Per Post",onKeyDown:_})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Min Target"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:T,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Min Target",onKeyDown:_})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Total target"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:A,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Total Target",onKeyDown:_})})]})]}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)(le.default,{onChange:()=>b(!v),checked:v,checkedIcon:!1,uncheckedIcon:!1,onColor:"#03125E"}),(0,e.jsx)("p",{className:"text-primary font-bold text-ld ml-2",children:"Show only active campaigns"})]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("div",{className:"text-primary text-sm font-semibold cursor-pointer",onClick:()=>{n(0)},children:[(0,e.jsx)(u,{icon:U})," Normal filter"]}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)(u,{onClick:H,className:"text-primary text-2xl mx-2",icon:G}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:()=>{te()},children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-32"})})]})]}):null,x==0?(0,e.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-y-4",children:[(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Category"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 w-full relative",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:i.map((t,s)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.categoryName} - [${t.categoryCode}]`})},s))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{Y(!Q)},children:(0,e.jsx)(u,{icon:Q?oe:ee})}),(0,e.jsx)("div",{className:`bg-gray-200 w-full h-80 overflow-y-scroll no-scrollbar absolute top-12 z-50 rounded-lg ${Q?"":"hidden"}`,children:(0,e.jsx)("div",{className:"min-h-80 w-full p-4 overflow-y-scroll no-scrollbar",children:y.map((t,s)=>(0,e.jsxs)("h1",{onClick:()=>{if(i.includes(t)){let w=i.filter(E=>E!=t);B(w)}else B([t]);Y(!1)},className:`text-lg text-left text-gray-600 font-semibold cursor-pointer w-full my-2 border-b-2 ${i.includes(t)?"border-green-500 text-green-500":"border-gray-500 text-black"}  no-scrollbar`,children:[t.categoryCode," - ",t.categoryName," "]},s))})})]}),(0,e.jsxs)("div",{className:"flex mt-8",children:[(0,e.jsx)(le.default,{onChange:()=>b(!v),checked:v,checkedIcon:!1,uncheckedIcon:!1,onColor:"#03125E"}),(0,e.jsx)("p",{className:"text-primary font-bold text-ld ml-2",children:"Show only active campaigns"})]})]}),(0,e.jsxs)("div",{className:"ml-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Platforms"}),(0,e.jsx)("div",{className:"gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar py-2",children:d.map((t,s)=>(0,e.jsx)("div",{className:`shrink-0 p-1 w-10 h-10 shadow-lg rounded-lg ${f.includes(t.id)?"bg-white ":"bg-gray-200"} `,onClick:()=>{if(f.includes(t.id)){let w=f.filter(E=>E!=t.id);R(w)}else R([...f,t.id])},children:(0,e.jsx)("img",{src:d[s].platformLogoUrl,alt:"error",className:"object-cover w-full h-full inline-block"})},s))})]}),(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("p",{className:"text-primary text-left font-bold text-lg",children:"Country"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full relative",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:g.map((t,s)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.name} - [${t.code}]`})},s))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{O(!J)},children:(0,e.jsx)(u,{icon:J?oe:ee})}),(0,e.jsxs)("div",{className:`bg-gray-200 w-full h-80 overflow-y-scroll no-scrollbar absolute top-12 z-50 rounded-lg p-4 ${J?"":"hidden"}`,children:[" ",(0,e.jsx)("div",{className:"min-h-80 overflow-y-scroll no-scrollbar",children:o.map((t,s)=>(0,e.jsxs)("h1",{onClick:()=>{if(g.includes(t)){let w=g.filter(E=>E!=t);P(w)}else P([t]);O(!1)},className:`text-lg text-gray-600 text-left font-semibold  w-full my-2 border-b-2 ${g.includes(t)?"border-green-500 text-green-500":"border-gray-400 text-black"}  no-scrollbar`,children:[t.code," - ",t.name]},s))})]})]}),(0,e.jsxs)("div",{className:"flex mt-4 items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-md font-semibold cursor-pointer",onClick:()=>{n(1)},children:[(0,e.jsx)(u,{icon:U})," ","Advanced filter"]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(u,{onClick:H,className:"text-primary text-2xl",icon:G}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:Z,children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold"})})]})]})]}):null,F==""||F==null||F==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:F})]}),S.length!=0?(0,e.jsx)(Ke,{data:S}):null]})})},He=l=>{let o=l.country,d=l.platform,y=l.category,[x,n]=(0,r.useState)(1),[v,b]=(0,r.useState)(!1),[S,p]=(0,r.useState)([]),C=(0,r.useRef)(null),[g,P]=(0,r.useState)([]),[J,O]=(0,r.useState)(!1),[f,R]=(0,r.useState)([]),[i,B]=(0,r.useState)([]),[Q,Y]=(0,r.useState)(!1),[F,h]=(0,r.useState)(null),L=async a=>{if(C.current.value="",a==""||a==null||a==null)return h("Fill the field to start searching");let c={search:a,role:10},m=await W.post(`${X}/api/user-search`,c);if(m.data.status==!1)return p([m.data.data]),h(m.data.message);p(m.data.data)},M=async()=>{if(i.length==0)return p([]),h("Select the category");if(f.length==0)return p([]),h("Select the platform");if(g.length==0)return p([]),h("Select the country");let a={country:g[0].id,platform:f.join(","),category:i[0].id,active:v?"1":"0"},c=await W.post(`${X}/api/user-search`,a);if(c.data.status==!1)return h(c.data.message);p(c.data.data)},I=()=>{p([])},[T,A]=(0,r.useState)(!1),[te,Z]=(0,r.useState)(!1),[H,$]=(0,r.useState)(null),[D,ae]=de("InfluencerSearch",{defaultValue:[]}),K=(0,r.useRef)(null),V=a=>{if(a==""||a==null||a==null)return $("Enter the Filter name");if(i.length==0)return $("Select the category");if(f.length==0)return $("Select the platform");if(g.length==0)return $("Select the country");for(let m=0;m<D.length;m++)if(a==D[m].name)return $("Filter name already exist.");let c={name:a,country:g,platform:f,category:i,active:v};ae([...D,c]),K.current.value="",Z(!1)},j=a=>{B(a.category),R(a.platform),P(a.country),b(a.active),A(!1)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"rounded-xl shadow-xl p-6 bg-white",children:[(0,e.jsxs)("div",{className:"flex px-2 my-4",children:[(0,e.jsx)("h2",{className:"text-black text-xl text-left font-bold",children:"Filter"}),(0,e.jsx)("div",{className:"grow"}),x==1?(0,e.jsxs)("div",{className:"flex gap-x-2",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{Z(!te)},children:"Save filter"}),(0,e.jsxs)("div",{className:`w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${te?"":"hidden"}`,children:[(0,e.jsx)("p",{className:"text-center text-sm text-slate-900 font-semibold my-2",children:"Filter name"}),(0,e.jsx)("input",{ref:K,type:"text",className:"bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"}),H==""||H==null||H==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2",children:H}),(0,e.jsx)("button",{onClick:()=>{V(K.current.value)},className:"text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500",children:"SAVE"}),(0,e.jsx)("button",{onClick:()=>{Z(!1)},className:"text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1",children:"Close"})]})]}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{A(!T)},children:["Saved filter",(0,e.jsx)(u,{icon:U})," "]}),(0,e.jsx)("div",{className:`w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${T?"":"hidden"}`,children:D.map((a,c)=>(0,e.jsx)("div",{className:"w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer",onClick:()=>{j(a)},children:a.name},c))})]})]}):null]}),x==0?(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsx)("div",{className:"grid place-items-start lg:place-content-center",children:(0,e.jsxs)("div",{className:"bg-gray-200 rounded-md py-1 px-4 w-full flex items-center",children:[(0,e.jsx)(u,{className:"text-gray-600",icon:ne}),(0,e.jsx)("input",{ref:C,type:"text",className:"bg-transparent w-full outline-none py-1 px-2"})]})}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-sm font-semibold cursor-pointer",onClick:()=>{n(1)},children:[(0,e.jsx)(u,{icon:U})," Advanced filter"]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(u,{onClick:I,className:"text-primary text-2xl mx-2",icon:G}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:()=>{L(C.current.value)},children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-32"})})]})]}):null,x==1?(0,e.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-y-4",children:[(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Category"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:i.map((a,c)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${a.categoryName} - [${a.categoryCode}]`})},c))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{Y(!0)},children:(0,e.jsx)(u,{icon:ee})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${Q?"":"hidden"} grid place-items-center`,children:(0,e.jsx)("div",{className:"bg-white p-10 cursor-pointer",children:(0,e.jsx)("div",{className:"min-h-80 w-80 overflow-y-scroll no-scrollbar",children:y.map((a,c)=>(0,e.jsxs)("h1",{onClick:()=>{if(i.includes(a)){let m=i.filter(q=>q!=a);B(m)}else B([a]);Y(!1)},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${i.includes(a)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[a.categoryCode," - ",a.categoryName," "]},c))})})}),(0,e.jsxs)("div",{className:"flex mt-8",children:[(0,e.jsx)(le.default,{onChange:()=>b(!v),checked:v,checkedIcon:!1,uncheckedIcon:!1,onColor:"#03125E"}),(0,e.jsx)("p",{className:"text-primary font-bold text-ld ml-2",children:"Show only active influecner"})]})]}),(0,e.jsxs)("div",{className:"ml-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Platforms"}),(0,e.jsx)("div",{className:"gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar py-2",children:d.map((a,c)=>(0,e.jsx)("div",{className:`shrink-0 p-1 w-10 h-10 shadow-lg rounded-lg ${f.includes(a.id)?"bg-white ":"bg-gray-200"} `,onClick:()=>{if(f.includes(a.id)){let m=f.filter(q=>q!=a.id);R(m)}else R([...f,a.id])},children:(0,e.jsx)("img",{src:d[c].platformLogoUrl,alt:"error",className:"object-cover w-full h-full inline-block"})},c))})]}),(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("p",{className:"text-primary text-left font-bold text-lg",children:"Country"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:g.map((a,c)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${a.name} - [${a.code}]`})},c))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{O(!0)},children:(0,e.jsx)(u,{icon:ee})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${J?"":"hidden"} grid place-items-center`,children:(0,e.jsx)("div",{className:"bg-white p-10 cursor-pointer",children:(0,e.jsx)("div",{className:"min-h-80 overflow-y-scroll no-scrollbar w-80",children:o.map((a,c)=>(0,e.jsxs)("h1",{onClick:()=>{if(g.includes(a)){let m=g.filter(q=>q!=a);P(m)}else P([a]);O(!1)},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${g.includes(a)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[a.code," - ",a.name]},c))})})}),(0,e.jsxs)("div",{className:"flex mt-4 items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-md font-semibold cursor-pointer",onClick:()=>{n(0)},children:[(0,e.jsx)(u,{icon:U})," Text search"," "]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(u,{onClick:I,className:"text-primary text-2xl",icon:G}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:M,children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold"})})]})]})]}):null,F==""||F==null||F==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:F})]}),S.length!=0?(0,e.jsx)(qe,{data:S}):null]})})},De=()=>{let[l,o]=(0,r.useState)([]),[d,y]=(0,r.useState)(null),x=()=>{o([])},n=(0,r.useRef)(null),v=async b=>{if(n.current.value="",b==""||b==null||b==null)return y("Fill the field to start searching");let S={search:b},p=await W.post(`${X}/api/search-brand`,S);if(p.data.status==!1)return y(p.data.message);o(p.data.data)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"rounded-xl shadow-xl p-6 bg-white",children:[(0,e.jsx)("h2",{className:"text-black text-xl text-left font-bold mt-2",children:"Filter"}),(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsx)("div",{className:"grid place-items-start lg:place-content-center",children:(0,e.jsxs)("div",{className:"bg-gray-200 rounded-md py-1 px-4 w-full flex items-center mt-2",children:[(0,e.jsx)(u,{className:"text-gray-600",icon:ne}),(0,e.jsx)("input",{ref:n,type:"text",className:"bg-transparent w-full outline-none py-1 px-2"})]})}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(u,{onClick:x,className:"text-primary text-2xl mx-2",icon:G}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:()=>{v(n.current.value)},children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-32"})})]})]}),d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d})]})}),l.length!=0?(0,e.jsx)(je,{data:l}):null]})},Ke=l=>{let[o,d]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{let x=await Promise.all(l.data.map(async(n,v)=>{let b=[];for(let C=0;C<n.platforms.length;C++)b.push(n.platforms[C].platformLogoUrl);let S=n.brand.length==0||n.brand==null||n.brand==null||n.brand==""||n.brand.logo=="0"||n.brand.logo==null||n.brand.logo==null||n.brand.logo==""?"/images/avatar/user.png":n.brand.logo,p=await Ie(n.campaignTypeId);return(0,e.jsx)("div",{className:"h-full",children:(0,e.jsx)(Te,{id:n.id,title:n.campaignName,weburl:n.brand.webUrl,platforms:b,maxval:n.costPerPost.split(".")[0],category:p,image:S,name:n.brand.name,currency:n.currency.code,btntext:"Learn More & Apply"})},n.id)}));d(x)})()},[l.data]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-6 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 text-md font-bold text-primary p-2 my-2",children:["Found: ",l.data.length," Campaigns"," "]}),(0,e.jsx)("div",{className:"flex flex-wrap gap-x-6 gap-y-6",children:o})]})})},je=l=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-6 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 text-md font-bold text-primary p-2 my-2",children:["Found: ",l.data.length," Brand"," "]}),(0,e.jsx)("div",{className:"flex gap-6 flex-wrap",children:l.data.map((o,d)=>{let y=o.logo,x=o.name,n=o.email;return(0,e.jsx)("div",{children:(0,e.jsx)($e,{id:o.id,image:y,name:x,email:n,website:o.webUrl})},d)})})]})}),qe=l=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-6 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 text-md font-bold text-primary p-2 my-2",children:["Found: ",l.data.length," Influencer"," "]}),(0,e.jsx)("div",{className:"grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:l.data.map((o,d)=>{let y=o.pic=="0"||o.pic==null||o.pic==null||o.pic==""?"/images/inf/inf14.png":o.pic,x=o.userName;return(0,e.jsx)("div",{children:(0,e.jsx)(Ae,{id:o.id,image:y,name:x,star:parseInt(o.rating),bio:o.bio})},d)})})]})});export{$e as a,lt as b,He as c};
