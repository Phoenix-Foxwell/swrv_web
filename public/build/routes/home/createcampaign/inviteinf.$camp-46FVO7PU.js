import{a as O}from"/build/_shared/chunk-UUYQFIW2.js";import{a as oe}from"/build/_shared/chunk-2UGBSXMX.js";import{a as I}from"/build/_shared/chunk-NJKAJ7NJ.js";import{D as H,M as K,O as V,a as c,b as $,m as U}from"/build/_shared/chunk-A6XXWJXG.js";import{h as j,l as z}from"/build/_shared/chunk-P4VL4XDR.js";import{a as w,b as N}from"/build/_shared/chunk-WLYSEPGK.js";import{e as A,g as ne,h as G}from"/build/_shared/chunk-EUC6ZTEW.js";var o=A(ne()),Q=A(oe());var e=A(G());var le=()=>{let r=z(),n=r.user.id,u=r.campid;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(de,{platform:r.platform,country:r.country,category:r.category,brandUserId:n,campaignId:u})})},se=le,de=r=>{let n=r.country,u=r.platform,f=r.category,[b,k]=(0,o.useState)(1),[v,S]=(0,o.useState)(!1),[d,i]=(0,o.useState)([]),m=(0,o.useRef)(null),[l,L]=(0,o.useState)([]),[W,P]=(0,o.useState)(!1),[g,R]=(0,o.useState)([]),[x,T]=(0,o.useState)([]),[Y,B]=(0,o.useState)(!1),[C,p]=(0,o.useState)(null),Z=async t=>{if(p(null),m.current.value="",t==""||t==null||t==null)return p("Fill the field to start searching");let a={search:t,role:10},s=await w.post(`${N}/api/user-search`,a);if(s.data.status==!1)return i([]),p(s.data.message);i(s.data.data)},ee=async()=>{if(p(null),x.length==0)return i([]),p("Select the category");if(g.length==0)return i([]),p("Select the platform");if(l.length==0)return i([]),p("Select the country");let t={country:l[0].id,platform:g.join(","),category:x[0].id,active:v?"1":"0",role:10},a=await w.post(`${N}/api/user-search`,t);if(a.data.status==!1)return p(a.data.message);i(a.data.data)},D=()=>{i([])},[_,J]=(0,o.useState)(!1),[X,M]=(0,o.useState)(!1),[F,y]=(0,o.useState)(null),[E,te]=O("InfluencerSearch",{defaultValue:[]}),q=(0,o.useRef)(null),re=t=>{if(t==""||t==null||t==null)return y("Enter the Filter name");if(x.length==0)return y("Select the category");if(g.length==0)return y("Select the platform");if(l.length==0)return y("Select the country");for(let s=0;s<E.length;s++)if(t==E[s].name)return y("Filter name already exist.");let a={name:t,country:l,platform:g,category:x,active:v};te([...E,a]),q.current.value="",M(!1)},ae=t=>{T(t.category),R(t.platform),L(t.country),S(t.active),J(!1)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex w-full my-4",children:[(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(j,{to:"/home/mycampaings",className:"rounded-lg py-1 px-2 text-white bg-secondary text-lg",children:"Skip This Step"})]}),(0,e.jsxs)("div",{className:"rounded-xl shadow-xl p-6 bg-white mt-6",children:[(0,e.jsxs)("div",{className:"flex px-2 my-4",children:[(0,e.jsx)("h2",{className:"text-black text-xl text-left font-bold",children:"Filter"}),(0,e.jsx)("div",{className:"grow"}),b==1?(0,e.jsxs)("div",{className:"flex gap-x-2",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{M(!X)},children:"Save filter"}),(0,e.jsxs)("div",{className:`w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${X?"":"hidden"}`,children:[(0,e.jsx)("p",{className:"text-center text-sm text-slate-900 font-semibold my-2",children:"Filter name"}),(0,e.jsx)("input",{ref:q,type:"text",className:"bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"}),F==""||F==null||F==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2",children:F}),(0,e.jsx)("button",{onClick:()=>{re(q.current.value)},className:"text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500",children:"SAVE"}),(0,e.jsx)("button",{onClick:()=>{M(!1)},className:"text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1",children:"Close"})]})]}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{J(!_)},children:["Saved filter",(0,e.jsx)(c,{icon:$})," "]}),(0,e.jsx)("div",{className:`w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${_?"":"hidden"}`,children:E.map((t,a)=>(0,e.jsx)("div",{className:"w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer",onClick:()=>{ae(t)},children:t.name},a))})]})]}):null]}),b==0?(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsx)("div",{className:"grid place-items-start lg:place-content-center",children:(0,e.jsxs)("div",{className:"bg-gray-200 rounded-md py-1 px-4 w-full flex items-center",children:[(0,e.jsx)(c,{className:"text-gray-600",icon:K}),(0,e.jsx)("input",{ref:m,type:"text",className:"bg-transparent w-full outline-none py-1 px-2"})]})}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-sm font-semibold cursor-pointer",onClick:()=>{k(1)},children:[(0,e.jsx)(c,{icon:$})," Advanced filter"]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(c,{onClick:D,className:"text-primary text-2xl mx-2",icon:H}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:()=>{Z(m.current.value)},children:(0,e.jsx)(I,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-32"})})]})]}):null,b==1?(0,e.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-y-4",children:[(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Category"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:x.map((t,a)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.categoryName} - [${t.categoryCode}]`})},a))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{B(!0)},children:(0,e.jsx)(c,{icon:V})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${Y?"":"hidden"} grid place-items-center`,children:(0,e.jsx)("div",{className:"bg-white p-6 rounded-md cursor-pointer",children:(0,e.jsxs)("div",{className:"min-h-80 w-80 overflow-y-scroll no-scrollbar",children:[f.map((t,a)=>(0,e.jsxs)("h1",{onClick:()=>{if(x.includes(t)){let s=x.filter(h=>h!=t);T(s)}else T([t]);B(!1)},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${x.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.categoryCode," - ",t.categoryName," "]},a)),(0,e.jsx)("button",{onClick:()=>B(!1),className:"w-full border-red-500 border-2 rounded-md text-center text-rose-500 text-xl py bg-rose-500 bg-opacity-20",children:"Close"})]})})}),(0,e.jsxs)("div",{className:"flex mt-8",children:[(0,e.jsx)(Q.default,{onChange:()=>S(!v),checked:v,checkedIcon:!1,uncheckedIcon:!1,onColor:"#03125E"}),(0,e.jsx)("p",{className:"text-primary font-bold text-ld ml-2",children:"Show only active influecner"})]})]}),(0,e.jsxs)("div",{className:"ml-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Platforms"}),(0,e.jsx)("div",{className:"gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar pb-4",children:u.map((t,a)=>(0,e.jsx)("div",{className:`shrink-0 p-1 w-10 h-10 shadow-lg rounded-full ${g.includes(t.id)?"border-2 border-blue-500":""} `,onClick:()=>{if(g.includes(t.id)){let s=g.filter(h=>h!=t.id);R(s)}else R([...g,t.id])},children:(0,e.jsx)("img",{src:u[a].platformLogoUrl,alt:"error",className:"object-cover rounded-full w-full h-full inline-block"})},a))})]}),(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("p",{className:"text-primary text-left font-bold text-lg",children:"Country"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:l.map((t,a)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.name} - [${t.code}]`})},a))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{P(!0)},children:(0,e.jsx)(c,{icon:V})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${W?"":"hidden"} grid place-items-center`,children:(0,e.jsx)("div",{className:"bg-white p-6 cursor-pointer rounded-md",children:(0,e.jsxs)("div",{className:"min-h-80 overflow-y-scroll no-scrollbar w-80 h-[400px]",children:[n.map((t,a)=>(0,e.jsxs)("h1",{onClick:()=>{if(l.includes(t)){let s=l.filter(h=>h!=t);L(s)}else L([t]);P(!1)},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${l.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.code," - ",t.name]},a)),(0,e.jsx)("button",{onClick:()=>P(!1),className:"w-full border-red-500 border-2 rounded-md text-center text-rose-500 text-xl py bg-rose-500 bg-opacity-20",children:"Close"})]})})}),(0,e.jsxs)("div",{className:"flex mt-4 items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-md font-semibold cursor-pointer",onClick:()=>{k(0)},children:[(0,e.jsx)(c,{icon:$})," Text search"," "]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(c,{onClick:D,className:"text-primary text-2xl",icon:H}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:ee,children:(0,e.jsx)(I,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold"})})]})]})]}):null,C==""||C==null||C==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:C})]}),d.length!=0?(0,e.jsx)(ie,{campaignId:r.campaignId,brandUserId:r.brandUserId,data:d}):null]})})},ie=r=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-6 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 text-md font-bold text-primary p-2 my-2",children:["Found: ",r.data.length," Influencer"," "]}),r.data.length==0?(0,e.jsx)("div",{}):(0,e.jsx)("div",{className:"grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:r.data.map((n,u)=>{let f=n.pic=="0"||n.pic==null||n.pic==null||n.pic==""?"/images/inf/inf14.png":n.pic,b=n.userName;return(0,e.jsx)("div",{children:(0,e.jsx)(ce,{id:n.id,image:f,name:b,star:parseInt(n.rating),bio:n.bio,campaignId:r.campaignId,brandUserId:r.brandUserId})},u)})})]})}),ce=r=>{let[n,u]=(0,o.useState)(null),[f,b]=(0,o.useState)(null),k=()=>{let d=Math.floor(r.star),i=r.star-d,m=[];for(let l=0;l<d;l++)m.push((0,e.jsx)(c,{className:"text-xs text-pink-500",icon:U},l));i>0&&m.push((0,e.jsx)(c,{className:"text-xs text-pink-500",icon:U,style:{width:`${i*100}%`}},d));for(let l=0;l<5-d;l++)m.push((0,e.jsx)(c,{className:"text-xs text-gray-300",icon:U},5+l));return(0,e.jsx)(e.Fragment,{children:m})},v=async()=>{if((await w.post(`${N}/api/search-invite`,{search:{status:"1",campaign:r.campaignId,influencer:r.id}})).data.status)u("Invite already sent.");else{let i={campaignId:r.campaignId,influencerId:r.id,fromUserId:r.brandUserId,toUserId:r.id,inviteMessage:"A brand invited you to there campaign."},m=await w.post(`${N}/api/add-invite`,i);m.data.status==!1?u(m.data.message):b("Request has been sent.")}};function S(d){return d.length>100?d.substring(0,100)+"...":d}return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-xl shadow-xl w-64 my-2",children:[(0,e.jsx)("img",{src:r.image,alt:"error",className:"w-full h-40 object-cover rounded-t-md"}),(0,e.jsxs)("div",{className:"px-4 pb-2",children:[(0,e.jsx)("div",{className:"flex items-start justify-between",children:(0,e.jsxs)("div",{className:"grow",children:[(0,e.jsx)("p",{className:"text-black font-semibold text-lg text-left",children:r.name.toString().split("@")[0]}),(0,e.jsx)("p",{className:"text-black font-semibold text-sm text-left mt-2",children:S(r.bio)}),(0,e.jsx)("div",{className:"flex",children:(0,e.jsx)(k,{})})]})}),n==""||n==null||n==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:n}),(0,e.jsx)("div",{onClick:v,children:(0,e.jsx)(I,{text:"Invite",textColor:"text-white",background:"bg-secondary",width:"w-full",margin:"my-2",fontwidth:"font-bold"})}),(0,e.jsx)(j,{to:`/home/myuser/${r.id}`,children:(0,e.jsx)(I,{text:"View Profile",textColor:"text-black",background:"bg-[#01FFF4]",width:"w-full",margin:"my-2",fontwidth:"font-bold"})}),f==""||f==null||f==null?null:(0,e.jsx)("div",{className:"bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4",children:f})]})]})})};export{se as default};
