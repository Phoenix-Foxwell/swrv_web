import{a as Ae}from"/build/_shared/chunk-B3S7VSSR.js";import{a as Te}from"/build/_shared/chunk-Q6LUUP3W.js";import{a as Be}from"/build/_shared/chunk-2UGBSXMX.js";import{a as de}from"/build/_shared/chunk-UUYQFIW2.js";import{a as k}from"/build/_shared/chunk-NJKAJ7NJ.js";import{b as Ie}from"/build/_shared/chunk-W35VEOBV.js";import{a as X,b as G}from"/build/_shared/chunk-R3QALOOK.js";import{D as J,L as ne,N as ee,O as oe,a as f,b as V}from"/build/_shared/chunk-KV6SFFWO.js";import{h as Fe,l as Ee}from"/build/_shared/chunk-P4VL4XDR.js";import{e as W,g as Re,h as re}from"/build/_shared/chunk-EUC6ZTEW.js";var le=W(Be()),r=W(Re());var w=W(re()),$e=l=>(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:"bg-white rounded-xl shadow-xl p-4 w-64",children:[(0,w.jsxs)("div",{className:"flex items-end gap-x-3",children:[(0,w.jsx)("div",{children:(0,w.jsx)("img",{src:l.image,alt:"error",className:"object-cover w-16 h-16 rounded"})}),(0,w.jsx)("p",{className:"text-black font-semibold text-xl content-end text-left",children:l.name})]}),(0,w.jsxs)("p",{className:"text-black font-semibold text-xs text-left mt-2",children:["email : ",l.email]}),(0,w.jsxs)("p",{className:"text-black font-semibold text-xs text-left mt-2",children:["Website : ",l.website]}),(0,w.jsx)(Fe,{to:`/home/brand/${l.id}`,children:(0,w.jsx)(k,{text:"View",textColor:"text-black",background:"bg-[#01FFF4]",width:"w-full",margin:"my-2",fontwidth:"font-bold"})})]})});var e=W(re());var Le=()=>{let l=Ee(),o=l.user.role.code!=10,[d,x]=(0,r.useState)(!1);return(0,e.jsx)(e.Fragment,{children:o?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"flex my-6 md:flex-row flex-col",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-2xl font-bold text-black text-left mt-4",children:"Find Influencer"}),(0,e.jsx)("p",{className:"text-md font-normal text-black text-left",children:"Here you can manage all the influecner."})]})}),(0,e.jsx)(He,{platform:l.platform,country:l.country,category:l.category})]})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex my-6 md:flex-row flex-col",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("h1",{className:"text-2xl font-bold text-black text-left mt-4",children:["Find ",d?"brand":"campaign"]}),(0,e.jsxs)("p",{className:"text-md font-normal text-black text-left",children:["Here you can search manage all the"," ",d?"brand":"campaign"," that you are participating in."]})]}),(0,e.jsx)("div",{className:"hidden md:block md:grow"}),(0,e.jsxs)("div",{className:"flex justify-center",children:[(0,e.jsx)("div",{onClick:()=>{x(!1)},children:(0,e.jsx)(k,{height:"h-12",text:"Campaign",fontwidth:"font-bold",background:d?"bg-gray-300":"bg-cyan-300",textColor:d?"text-gray-600":"text-black"})}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsx)("div",{onClick:()=>{x(!0)},children:(0,e.jsx)(k,{height:"h-12",text:"Brand",fontwidth:"font-bold",background:d?"bg-cyan-300":"bg-gray-300",textColor:d?"text-black":"text-gray-600"})})]})]}),d?(0,e.jsx)(De,{}):(0,e.jsx)(Me,{platform:l.platform,country:l.country,category:l.category})]})})})},lt=Le,Me=l=>{let o=l.country,d=l.platform,x=l.category,[v,n]=(0,r.useState)(0),[b,y]=(0,r.useState)(!1),[S,p]=(0,r.useState)([]),N=(0,r.useRef)(null),[i,P]=(0,r.useState)([]),[O,Q]=(0,r.useState)(!1),[m,R]=(0,r.useState)([]),[u,B]=(0,r.useState)([]),[Y,L]=(0,r.useState)(!1),[F,C]=(0,r.useState)(null),M=(0,r.useRef)(null),H=(0,r.useRef)(null),I=(0,r.useRef)(null),T=(0,r.useRef)(null),A=(0,r.useRef)(null),te=async()=>{var h,E,se,ce,ie,me,ue,fe,pe,ge,xe,ve,be,ye,he,we,Ne,Ce,ke,Se;C(null);let t={active:b?"1":"0"};N.current.value!=null&&N.current.value!=null&&N.current.value!=""&&(t.name=N.current.value),((h=M.current)==null?void 0:h.value)!=null&&((E=M.current)==null?void 0:E.value)!=null&&((se=M.current)==null?void 0:se.value)!=""&&(t.minReach=(ce=M.current)==null?void 0:ce.value),((ie=H.current)==null?void 0:ie.value)!=null&&((me=H.current)==null?void 0:me.value)!=null&&((ue=H.current)==null?void 0:ue.value)!=""&&(t.maxReach=(fe=H.current)==null?void 0:fe.value),((pe=I.current)==null?void 0:pe.value)!=null&&((ge=I.current)==null?void 0:ge.value)!=null&&((xe=I.current)==null?void 0:xe.value)!=""&&(t.costPerPost=(ve=I.current)==null?void 0:ve.value),((be=T.current)==null?void 0:be.value)!=null&&((ye=T.current)==null?void 0:ye.value)!=null&&((he=T.current)==null?void 0:he.value)!=""&&(t.minTarget=(we=T.current)==null?void 0:we.value),((Ne=A.current)==null?void 0:Ne.value)!=null&&((Ce=A.current)==null?void 0:Ce.value)!=null&&((ke=A.current)==null?void 0:ke.value)!=""&&(t.totalTarget=(Se=A.current)==null?void 0:Se.value);let s=await X.post(`${G}/api/campaign-search`,t);if(s.data.status==!1)return C(s.data.message);p(s.data.data)},Z=async()=>{C(null);let t={active:b?"1":"0"};u.length!=0&&(t.category=u[0].id),m.length!=0&&(t.platform=m.join(",")),i.length!=0&&(t.country=i[0].id);let s=await X.post(`${G}/api/campaign-search`,t);if(s.data.status==!1)return C(s.data.message);p(s.data.data)},D=()=>{p([])},[$,K]=(0,r.useState)(!1),[ae,j]=(0,r.useState)(!1),[z,q]=(0,r.useState)(null),[a,c]=de("CampaignSearch",{defaultValue:[]}),g=(0,r.useRef)(null),U=t=>{if(t==""||t==null||t==null)return q("Enter the Filter name");if(u.length==0)return q("Select the category");if(m.length==0)return q("Select the platform");if(i.length==0)return q("Select the country");for(let h=0;h<a.length;h++)if(t==a[h].name)return q("Filter name already exist.");let s={name:t,country:i,platform:m,category:u,active:b};c([...a,s]),g.current.value="",j(!1)},Pe=t=>{B(t.category),R(t.platform),P(t.country),y(t.active),K(!1)};function _(t){let s=t.keyCode||t.which,h=String.fromCharCode(s);/^[0-9\b]*$/.test(h)||t.preventDefault()}return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"rounded-xl shadow-xl p-6 bg-white",children:[(0,e.jsxs)("div",{className:"flex px-2 my-4",children:[(0,e.jsx)("h2",{className:"text-black text-xl text-left font-bold",children:"Filter"}),(0,e.jsx)("div",{className:"grow"}),v==0?(0,e.jsxs)("div",{className:"flex gap-x-2",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{j(!ae)},children:"Save filter"}),(0,e.jsxs)("div",{className:`w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${ae?"":"hidden"}`,children:[(0,e.jsx)("p",{className:"text-center text-sm text-slate-900 font-semibold my-2",children:"Filter name"}),(0,e.jsx)("input",{ref:g,type:"text",className:"bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"}),z==""||z==null||z==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2",children:z}),(0,e.jsx)("button",{onClick:()=>{U(g.current.value)},className:"text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500",children:"SAVE"}),(0,e.jsx)("button",{onClick:()=>{j(!1)},className:"text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1",children:"Close"})]})]}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{K(!$)},children:["Saved filter",(0,e.jsx)(f,{icon:V})," "]}),(0,e.jsx)("div",{className:`w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${$?"":"hidden"}`,children:a.map((t,s)=>(0,e.jsx)("div",{className:"w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer",onClick:()=>{Pe(t)},children:t.name},s))})]})]}):null]}),v==1?(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{className:"w-full flex flex-wrap gap-6 justify-between",children:[(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Search"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:N,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Start typing to search.."})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Min Reach"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:M,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Min Reach",onKeyDown:_})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Max Reach"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:H,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Max Reach",onKeyDown:_})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Cost Per Post"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:I,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Cost Per Post",onKeyDown:_})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Min Target"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:T,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Min Target",onKeyDown:_})})]}),(0,e.jsxs)("div",{className:"w-80",children:[(0,e.jsx)("p",{className:"text-xl font-semibold text-primary",children:"Total target"}),(0,e.jsx)("div",{className:"bg-gray-200 rounded-md py-1 px-4 flex items-center",children:(0,e.jsx)("input",{ref:A,type:"text",className:"bg-transparent w-full outline-none py-1 px-2",placeholder:"Total Target",onKeyDown:_})})]})]}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)(le.default,{onChange:()=>y(!b),checked:b,checkedIcon:!1,uncheckedIcon:!1,onColor:"#03125E"}),(0,e.jsx)("p",{className:"text-primary font-bold text-ld ml-2",children:"Show only active campaigns"})]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("div",{className:"text-primary text-sm font-semibold cursor-pointer",onClick:()=>{n(0)},children:[(0,e.jsx)(f,{icon:V})," Normal filter"]}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)(f,{onClick:D,className:"text-primary text-2xl mx-2",icon:J}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:()=>{te()},children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-32"})})]})]}):null,v==0?(0,e.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-y-4",children:[(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Category"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 w-full relative",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:u.map((t,s)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.categoryName} - [${t.categoryCode}]`})},s))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{L(!Y)},children:(0,e.jsx)(f,{icon:Y?oe:ee})}),(0,e.jsx)("div",{className:`bg-gray-200 w-full h-80 overflow-y-scroll no-scrollbar absolute top-12 z-50 rounded-lg ${Y?"":"hidden"}`,children:(0,e.jsxs)("div",{className:"min-h-80 w-full p-4 overflow-y-scroll no-scrollbar",children:[x.map((t,s)=>(0,e.jsxs)("h1",{onClick:()=>{if(u.includes(t)){let h=u.filter(E=>E!=t);B(h)}else B([t]);L(!1)},className:`text-lg text-left text-gray-600 font-semibold cursor-pointer w-full my-2 border-b-2 ${u.includes(t)?"border-green-500 text-green-500":"border-gray-500 text-black"}  no-scrollbar`,children:[t.categoryCode," - ",t.categoryName," "]},s)),(0,e.jsx)("div",{onClick:()=>L(!1),className:"text-rose-500 text-center font-semibold text-lg bg border-2 border-rose-500 rounded-md bg-rose-500 bg-opacity-20",children:"Close"})]})})]}),(0,e.jsxs)("div",{className:"flex mt-8",children:[(0,e.jsx)(le.default,{onChange:()=>y(!b),checked:b,checkedIcon:!1,uncheckedIcon:!1,onColor:"#03125E"}),(0,e.jsx)("p",{className:"text-primary font-bold text-ld ml-2",children:"Show only active campaigns"})]})]}),(0,e.jsxs)("div",{className:"ml-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Platforms"}),(0,e.jsx)("div",{className:"gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar pb-4",children:d.map((t,s)=>(0,e.jsx)("div",{className:`shrink-0 p-1 w-10 h-10 shadow-lg rounded-full ${m.includes(t.id)?"border-2 border-blue-500":""} `,onClick:()=>{if(m.includes(t.id)){let h=m.filter(E=>E!=t.id);R(h)}else R([...m,t.id])},children:(0,e.jsx)("img",{src:d[s].platformLogoUrl,alt:"error",className:"object-cover rounded-full w-full h-full inline-block"})},s))})]}),(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("p",{className:"text-primary text-left font-bold text-lg",children:"Country"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full relative",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:i.map((t,s)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.name} - [${t.code}]`})},s))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{Q(!O)},children:(0,e.jsx)(f,{icon:O?oe:ee})}),(0,e.jsxs)("div",{className:`bg-gray-200 w-full h-80 overflow-y-scroll no-scrollbar absolute top-12 z-50 rounded-lg p-4 ${O?"":"hidden"}`,children:[" ",(0,e.jsx)("div",{className:"min-h-80 overflow-y-scroll no-scrollbar",children:o.map((t,s)=>(0,e.jsxs)("h1",{onClick:()=>{if(i.includes(t)){let h=i.filter(E=>E!=t);P(h)}else P([t]);Q(!1)},className:`text-lg text-gray-600 text-left font-semibold  w-full my-2 border-b-2 ${i.includes(t)?"border-green-500 text-green-500":"border-gray-400 text-black"}  no-scrollbar`,children:[t.code," - ",t.name]},s))})]})]}),(0,e.jsxs)("div",{className:"flex mt-4 items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-md font-semibold cursor-pointer",onClick:()=>{n(1)},children:[(0,e.jsx)(f,{icon:V})," ","Advanced filter"]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(f,{onClick:D,className:"text-primary text-2xl",icon:J}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:Z,children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold"})})]})]})]}):null,F==""||F==null||F==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:F})]}),S.length!=0?(0,e.jsx)(Ke,{data:S}):null]})})},He=l=>{let o=l.country,d=l.platform,x=l.category,[v,n]=(0,r.useState)(1),[b,y]=(0,r.useState)(!1),[S,p]=(0,r.useState)([]),N=(0,r.useRef)(null),[i,P]=(0,r.useState)([]),[O,Q]=(0,r.useState)(!1),[m,R]=(0,r.useState)([]),[u,B]=(0,r.useState)([]),[Y,L]=(0,r.useState)(!1),[F,C]=(0,r.useState)(null),M=async a=>{if(C(null),N.current.value="",a==""||a==null||a==null)return C("Fill the field to start searching");let c={search:a,role:10},g=await X.post(`${G}/api/user-search`,c);if(g.data.status==!1)return p([]),C(g.data.message);p(g.data.data)},H=async()=>{if(C(null),u.length==0)return p([]),C("Select the category");if(m.length==0)return p([]),C("Select the platform");if(i.length==0)return p([]),C("Select the country");let a={active:b?"1":"0",role:10};u.length!=0&&(a.category=u[0].id),m.length!=0&&(a.platform=m.join(",")),i.length!=0&&(a.country=i[0].id);let c=await X.post(`${G}/api/user-search`,a);if(c.data.status==!1)return C(c.data.message);p(c.data.data)},I=()=>{p([])},[T,A]=(0,r.useState)(!1),[te,Z]=(0,r.useState)(!1),[D,$]=(0,r.useState)(null),[K,ae]=de("InfluencerSearch",{defaultValue:[]}),j=(0,r.useRef)(null),z=a=>{if(a==""||a==null||a==null)return $("Enter the Filter name");if(u.length==0)return $("Select the category");if(m.length==0)return $("Select the platform");if(i.length==0)return $("Select the country");for(let g=0;g<K.length;g++)if(a==K[g].name)return $("Filter name already exist.");let c={name:a,country:i,platform:m,category:u,active:b};ae([...K,c]),j.current.value="",Z(!1)},q=a=>{B(a.category),R(a.platform),P(a.country),y(a.active),A(!1)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"rounded-xl shadow-xl p-6 bg-white",children:[(0,e.jsxs)("div",{className:"flex px-2 my-4",children:[(0,e.jsx)("h2",{className:"text-black text-xl text-left font-bold",children:"Filter"}),(0,e.jsx)("div",{className:"grow"}),v==1?(0,e.jsxs)("div",{className:"flex gap-x-2",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{Z(!te)},children:"Save filter"}),(0,e.jsxs)("div",{className:`w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${te?"":"hidden"}`,children:[(0,e.jsx)("p",{className:"text-center text-sm text-slate-900 font-semibold my-2",children:"Filter name"}),(0,e.jsx)("input",{ref:j,type:"text",className:"bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"}),D==""||D==null||D==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2",children:D}),(0,e.jsx)("button",{onClick:()=>{z(j.current.value)},className:"text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500",children:"SAVE"}),(0,e.jsx)("button",{onClick:()=>{Z(!1)},className:"text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1",children:"Close"})]})]}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{A(!T)},children:["Saved filter",(0,e.jsx)(f,{icon:V})," "]}),(0,e.jsx)("div",{className:`w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${T?"":"hidden"}`,children:K.map((a,c)=>(0,e.jsx)("div",{className:"w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer",onClick:()=>{q(a)},children:a.name},c))})]})]}):null]}),v==0?(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsx)("div",{className:"grid place-items-start lg:place-content-center",children:(0,e.jsxs)("div",{className:"bg-gray-200 rounded-md py-1 px-4 w-full flex items-center",children:[(0,e.jsx)(f,{className:"text-gray-600",icon:ne}),(0,e.jsx)("input",{ref:N,type:"text",className:"bg-transparent w-full outline-none py-1 px-2"})]})}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-sm font-semibold cursor-pointer",onClick:()=>{n(1)},children:[(0,e.jsx)(f,{icon:V})," Advanced filter"]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(f,{onClick:I,className:"text-primary text-2xl mx-2",icon:J}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:()=>{M(N.current.value)},children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-32"})})]})]}):null,v==1?(0,e.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-y-4",children:[(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Category"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:u.map((a,c)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${a.categoryName} - [${a.categoryCode}]`})},c))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{L(!0)},children:(0,e.jsx)(f,{icon:ee})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${Y?"":"hidden"} grid place-items-center`,children:(0,e.jsx)("div",{className:"bg-white p-10 cursor-pointer",children:(0,e.jsxs)("div",{className:"min-h-80 w-80 overflow-y-scroll no-scrollbar",children:[x.map((a,c)=>(0,e.jsxs)("h1",{onClick:()=>{if(u.includes(a)){let g=u.filter(U=>U!=a);B(g)}else B([a]);L(!1)},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${u.includes(a)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[a.categoryCode," - ",a.categoryName," "]},c)),(0,e.jsx)("div",{onClick:()=>L(!1),className:"text-center font-semibold text-lg bg border-2 border-rose-500 rounded-md bg-rose-500 bg-opacity-20 text-rose-500",children:"Close"})]})})}),(0,e.jsxs)("div",{className:"flex mt-8",children:[(0,e.jsx)(le.default,{onChange:()=>y(!b),checked:b,checkedIcon:!1,uncheckedIcon:!1,onColor:"#03125E"}),(0,e.jsx)("p",{className:"text-primary font-bold text-ld ml-2",children:"Show only active influecner"})]})]}),(0,e.jsxs)("div",{className:"ml-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Platforms"}),(0,e.jsx)("div",{className:"gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar pb-2",children:d.map((a,c)=>(0,e.jsx)("div",{className:`p-1 shrink-0 w-10 h-10 rounded-full  ${m.includes(a.id)?" border-2 border-blue-500":""} `,onClick:()=>{if(m.includes(a.id)){let g=m.filter(U=>U!=a.id);R(g)}else R([...m,a.id])},children:(0,e.jsx)("img",{src:d[c].platformLogoUrl,alt:"error",className:"object-cover w-full h-full inline-block rounded-full"})},c))})]}),(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("p",{className:"text-primary text-left font-bold text-lg",children:"Country"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:i.map((a,c)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${a.name} - [${a.code}]`})},c))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{Q(!0)},children:(0,e.jsx)(f,{icon:ee})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${O?"":"hidden"} grid place-items-center`,children:(0,e.jsx)("div",{className:"bg-white p-10 cursor-pointer",children:(0,e.jsx)("div",{className:"min-h-80 overflow-y-scroll no-scrollbar w-80",children:o.map((a,c)=>(0,e.jsxs)("h1",{onClick:()=>{if(i.includes(a)){let g=i.filter(U=>U!=a);P(g)}else P([a]);Q(!1)},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${i.includes(a)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[a.code," - ",a.name]},c))})})}),(0,e.jsxs)("div",{className:"flex mt-4 items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-md font-semibold cursor-pointer",onClick:()=>{n(0)},children:[(0,e.jsx)(f,{icon:V})," Text search"," "]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(f,{onClick:I,className:"text-primary text-2xl",icon:J}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:H,children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold"})})]})]})]}):null,F==""||F==null||F==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:F})]}),S.length!=0?(0,e.jsx)(qe,{data:S}):null]})})},De=()=>{let[l,o]=(0,r.useState)([]),[d,x]=(0,r.useState)(null),v=()=>{o([])},n=(0,r.useRef)(null),b=async y=>{if(x(null),n.current.value="",y==""||y==null||y==null)return x("Fill the field to start searching");let S={search:y},p=await X.post(`${G}/api/search-brand`,S);if(p.data.status==!1)return x(p.data.message);o(p.data.data)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"rounded-xl shadow-xl p-6 bg-white",children:[(0,e.jsx)("h2",{className:"text-black text-xl text-left font-bold mt-2",children:"Filter"}),(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsx)("div",{className:"grid place-items-start lg:place-content-center",children:(0,e.jsxs)("div",{className:"bg-gray-200 rounded-md py-1 px-4 w-full flex items-center mt-2",children:[(0,e.jsx)(f,{className:"text-gray-600",icon:ne}),(0,e.jsx)("input",{ref:n,type:"text",className:"bg-transparent w-full outline-none py-1 px-2"})]})}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(f,{onClick:v,className:"text-primary text-2xl mx-2",icon:J}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:()=>{b(n.current.value)},children:(0,e.jsx)(k,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-32"})})]})]}),d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d})]})}),l.length!=0?(0,e.jsx)(je,{data:l}):null]})},Ke=l=>{let[o,d]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{let v=await Promise.all(l.data.map(async(n,b)=>{let y=[];for(let N=0;N<n.platforms.length;N++)y.push(n.platforms[N].platformLogoUrl);let S=n.brand.length==0||n.brand==null||n.brand==null||n.brand==""||n.brand.logo=="0"||n.brand.logo==null||n.brand.logo==null||n.brand.logo==""?"/images/avatar/user.png":n.brand.logo,p=await Ie(n.campaignTypeId);return(0,e.jsx)("div",{className:"h-full",children:(0,e.jsx)(Te,{id:n.id,title:n.campaignName,weburl:n.brand.webUrl,platforms:y,maxval:n.costPerPost.split(".")[0],category:p,image:S,name:n.brand.name,currency:n.currency.code,btntext:"Learn More & Apply"})},n.id)}));d(v)})()},[l.data]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-6 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 text-md font-bold text-primary p-2 my-2",children:["Found: ",l.data.length," Campaigns"," "]}),(0,e.jsx)("div",{className:"flex flex-wrap gap-x-6 gap-y-6",children:o})]})})},je=l=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-6 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 text-md font-bold text-primary p-2 my-2",children:["Found: ",l.data.length," Brand"," "]}),(0,e.jsx)("div",{className:"flex gap-6 flex-wrap",children:l.data.map((o,d)=>{let x=o.logo,v=o.name,n=o.email;return(0,e.jsx)("div",{children:(0,e.jsx)($e,{id:o.id,image:x,name:v,email:n,website:o.webUrl})},d)})})]})}),qe=l=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-6 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 text-md font-bold text-primary p-2 my-2",children:["Found: ",l.data.length," Influencer"," "]}),(0,e.jsx)("div",{className:"grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:l.data.map((o,d)=>{let x=o.pic=="0"||o.pic==null||o.pic==null||o.pic==""?"/images/inf/inf14.png":o.pic,v=o.userName;return(0,e.jsx)("div",{children:(0,e.jsx)(Ae,{id:o.id,image:x,name:v,star:parseInt(o.rating),bio:o.bio})},d)})})]})});export{$e as a,lt as b,He as c};