import{a as Q}from"/build/_shared/chunk-UUYQFIW2.js";import{a as le}from"/build/_shared/chunk-2UGBSXMX.js";import{a as N}from"/build/_shared/chunk-NJKAJ7NJ.js";import{D as q,L as O,N as j,a as d,b as $,m as U}from"/build/_shared/chunk-6AVPJ36M.js";import{a as E,b as A}from"/build/_shared/chunk-WI5Z27OJ.js";import{h as M,l as G}from"/build/_shared/chunk-P4VL4XDR.js";import{e as F,g as ne,h as K}from"/build/_shared/chunk-EUC6ZTEW.js";var l=F(ne()),W=F(le());var e=F(K());var oe=()=>{let r=G(),n=r.user.id,m=r.campid;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(de,{platform:r.platform,country:r.country,category:r.category,brandUserId:n,campaignId:m})})},se=oe,de=r=>{let n=r.country,m=r.platform,u=r.category,[b,I]=(0,l.useState)(1),[v,c]=(0,l.useState)(!1),[g,s]=(0,l.useState)([]),i=(0,l.useRef)(null),[f,L]=(0,l.useState)([]),[Y,H]=(0,l.useState)(!1),[x,P]=(0,l.useState)([]),[p,R]=(0,l.useState)([]),[Z,V]=(0,l.useState)(!1),[k,y]=(0,l.useState)(null),_=async t=>{if(i.current.value="",t==""||t==null||t==null)return y("Fill the field to start searching");let a={search:t,role:10},o=await E.post(`${A}/api/user-search`,a);if(o.data.status==!1)return s([o.data.data]),y(o.data.message);s(o.data.data)},ee=async()=>{if(p.length==0)return s([]),y("Select the category");if(x.length==0)return s([]),y("Select the platform");if(f.length==0)return s([]),y("Select the country");let t={country:f[0].id,platform:x.join(","),category:p[0].id,active:v?"1":"0",role:10},a=await E.post(`${A}/api/user-search`,t);if(a.data.status==!1)return y(a.data.message);s(a.data.data)},D=()=>{s([])},[J,X]=(0,l.useState)(!1),[z,T]=(0,l.useState)(!1),[S,h]=(0,l.useState)(null),[C,te]=Q("InfluencerSearch",{defaultValue:[]}),B=(0,l.useRef)(null),re=t=>{if(t==""||t==null||t==null)return h("Enter the Filter name");if(p.length==0)return h("Select the category");if(x.length==0)return h("Select the platform");if(f.length==0)return h("Select the country");for(let o=0;o<C.length;o++)if(t==C[o].name)return h("Filter name already exist.");let a={name:t,country:f,platform:x,category:p,active:v};te([...C,a]),B.current.value="",T(!1)},ae=t=>{R(t.category),P(t.platform),L(t.country),c(t.active),X(!1)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex w-full my-4",children:[(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(M,{to:"/home/mycampaings",className:"rounded-lg py-1 px-2 text-white bg-secondary text-lg",children:"Skip This Step"})]}),(0,e.jsxs)("div",{className:"rounded-xl shadow-xl p-6 bg-white mt-6",children:[(0,e.jsxs)("div",{className:"flex px-2 my-4",children:[(0,e.jsx)("h2",{className:"text-black text-xl text-left font-bold",children:"Filter"}),(0,e.jsx)("div",{className:"grow"}),b==1?(0,e.jsxs)("div",{className:"flex gap-x-2",children:[(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{T(!z)},children:"Save filter"}),(0,e.jsxs)("div",{className:`w-80 right-0 max-h-56 overflow-y-scroll no-scrollbar p-2 bg-gray-100 shadow-xl absolute translate-y-2 rounded-lg ${z?"":"hidden"}`,children:[(0,e.jsx)("p",{className:"text-center text-sm text-slate-900 font-semibold my-2",children:"Filter name"}),(0,e.jsx)("input",{ref:B,type:"text",className:"bg-transparent w-full outline-none border-2 rounded-md my-2 border-green-500 px-2 py-1"}),S==""||S==null||S==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-2",children:S}),(0,e.jsx)("button",{onClick:()=>{re(B.current.value)},className:"text-center font-semibold text-md text-green-500 hover:text-white w-full hover:bg-green-500 border border-green-500",children:"SAVE"}),(0,e.jsx)("button",{onClick:()=>{T(!1)},className:"text-center font-semibold text-md text-red-500 hover:text-white w-full hover:bg-red-500 border border-red-500 my-1",children:"Close"})]})]}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("button",{className:"bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center",onClick:()=>{X(!J)},children:["Saved filter",(0,e.jsx)(d,{icon:$})," "]}),(0,e.jsx)("div",{className:`w-full max-h-56 overflow-y-scroll no-scrollbar p-2 bg-white shadow-xl absolute translate-y-2 rounded-lg ${J?"":"hidden"}`,children:C.map((t,a)=>(0,e.jsx)("div",{className:"w-full text-slate-900 py-1 text-center text hover:bg-green-500 hover:bg-opacity-20 rounded-md hover:border-l-2 hover:border-green-400 cursor-pointer",onClick:()=>{ae(t)},children:t.name},a))})]})]}):null]}),b==0?(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsx)("div",{className:"grid place-items-start lg:place-content-center",children:(0,e.jsxs)("div",{className:"bg-gray-200 rounded-md py-1 px-4 w-full flex items-center",children:[(0,e.jsx)(d,{className:"text-gray-600",icon:O}),(0,e.jsx)("input",{ref:i,type:"text",className:"bg-transparent w-full outline-none py-1 px-2"})]})}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-sm font-semibold cursor-pointer",onClick:()=>{I(1)},children:[(0,e.jsx)(d,{icon:$})," Advanced filter"]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(d,{onClick:D,className:"text-primary text-2xl mx-2",icon:q}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:()=>{_(i.current.value)},children:(0,e.jsx)(N,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-32"})})]})]}):null,b==1?(0,e.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-y-4",children:[(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Category"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:p.map((t,a)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.categoryName} - [${t.categoryCode}]`})},a))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{V(!0)},children:(0,e.jsx)(d,{icon:j})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${Z?"":"hidden"} grid place-items-center`,children:(0,e.jsx)("div",{className:"bg-white p-10 cursor-pointer",children:(0,e.jsx)("div",{className:"min-h-80 w-80 overflow-y-scroll no-scrollbar",children:u.map((t,a)=>(0,e.jsxs)("h1",{onClick:()=>{if(p.includes(t)){let o=p.filter(w=>w!=t);R(o)}else R([t]);V(!1)},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${p.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.categoryCode," - ",t.categoryName," "]},a))})})}),(0,e.jsxs)("div",{className:"flex mt-8",children:[(0,e.jsx)(W.default,{onChange:()=>c(!v),checked:v,checkedIcon:!1,uncheckedIcon:!1,onColor:"#03125E"}),(0,e.jsx)("p",{className:"text-primary font-bold text-ld ml-2",children:"Show only active influecner"})]})]}),(0,e.jsxs)("div",{className:"ml-2",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-bold mb",children:"Platforms"}),(0,e.jsx)("div",{className:"gap-2 flex  overflow-x-scroll flex-nowrap no-scrollbar pb-4",children:m.map((t,a)=>(0,e.jsx)("div",{className:`shrink-0 p-1 w-10 h-10 shadow-lg rounded-full ${x.includes(t.id)?"border-2 border-blue-500":""} `,onClick:()=>{if(x.includes(t.id)){let o=x.filter(w=>w!=t.id);P(o)}else P([...x,t.id])},children:(0,e.jsx)("img",{src:m[a].platformLogoUrl,alt:"error",className:"object-cover rounded-full w-full h-full inline-block"})},a))})]}),(0,e.jsxs)("div",{className:"px-2",children:[(0,e.jsx)("p",{className:"text-primary text-left font-bold text-lg",children:"Country"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:f.map((t,a)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.name} - [${t.code}]`})},a))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{H(!0)},children:(0,e.jsx)(d,{icon:j})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${Y?"":"hidden"} grid place-items-center`,children:(0,e.jsx)("div",{className:"bg-white p-10 cursor-pointer",children:(0,e.jsx)("div",{className:"min-h-80 overflow-y-scroll no-scrollbar w-80",children:n.map((t,a)=>(0,e.jsxs)("h1",{onClick:()=>{if(f.includes(t)){let o=f.filter(w=>w!=t);L(o)}else L([t]);H(!1)},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${f.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.code," - ",t.name]},a))})})}),(0,e.jsxs)("div",{className:"flex mt-4 items-center",children:[(0,e.jsxs)("div",{className:"text-primary text-md font-semibold cursor-pointer",onClick:()=>{I(0)},children:[(0,e.jsx)(d,{icon:$})," Text search"," "]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)(d,{onClick:D,className:"text-primary text-2xl",icon:q}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("div",{onClick:ee,children:(0,e.jsx)(N,{text:"Search",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold"})})]})]})]}):null,k==""||k==null||k==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:k})]}),g.length!=0?(0,e.jsx)(ie,{campaignId:r.campaignId,brandUserId:r.brandUserId,data:g}):null]})})},ie=r=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-6 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 text-md font-bold text-primary p-2 my-2",children:["Found: ",r.data.length," Influencer"," "]}),(0,e.jsx)("div",{className:"grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:r.data.map((n,m)=>{let u=n.pic=="0"||n.pic==null||n.pic==null||n.pic==""?"/images/inf/inf14.png":n.pic,b=n.userName;return(0,e.jsx)("div",{children:(0,e.jsx)(ce,{id:n.id,image:u,name:b,star:parseInt(n.rating),bio:n.bio,campaignId:r.campaignId,brandUserId:r.brandUserId})},m)})})]})}),ce=r=>{let[n,m]=(0,l.useState)(null),[u,b]=(0,l.useState)(null),I=()=>{let c=Math.floor(r.star),g=r.star-c,s=[];for(let i=0;i<c;i++)s.push((0,e.jsx)(d,{className:"text-xs text-pink-500",icon:U},i));g>0&&s.push((0,e.jsx)(d,{className:"text-xs text-pink-500",icon:U,style:{width:`${g*100}%`}},c));for(let i=0;i<5-c;i++)s.push((0,e.jsx)(d,{className:"text-xs text-gray-300",icon:U},5+i));return(0,e.jsx)(e.Fragment,{children:s})},v=async()=>{let c={campaignId:r.campaignId,influencerId:r.id,fromUserId:r.brandUserId,toUserId:r.id,inviteMessage:"A brand invited you to there campaign."},g=await E.post(`${A}/api/add-invite`,c);g.data.status==!1?m(g.data.message):b("Request has been sent.")};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-xl shadow-xl w-64 my-2",children:[(0,e.jsx)("img",{src:r.image,alt:"error",className:"w-full h-40 object-cover rounded-t-md"}),(0,e.jsxs)("div",{className:"flex gap-1 -translate-y-5 pl-4",children:[(0,e.jsx)("div",{className:"border p-1 bg-white border-blue-500 rounded-full",children:(0,e.jsx)("img",{src:"/images/media/instagram.png",alt:"error",className:"w-6 h-6 rounded-full"})}),(0,e.jsx)("div",{className:"border p-1 border-blue-500 bg-white rounded-full",children:(0,e.jsx)("img",{src:"/images/media/youtube.png",alt:"error",className:"w-6 h-6 rounded-full"})})]}),(0,e.jsxs)("div",{className:"px-4 pb-2",children:[(0,e.jsx)("div",{className:"flex items-start justify-between",children:(0,e.jsxs)("div",{className:"grow",children:[(0,e.jsx)("p",{className:"text-black font-semibold text-lg text-left",children:r.name.split("@")[0]}),(0,e.jsx)("p",{className:"text-black font-semibold text-sm text-left mt-2",children:r.bio}),(0,e.jsx)("div",{className:"flex",children:(0,e.jsx)(I,{})})]})}),n==""||n==null||n==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:n}),(0,e.jsx)("div",{onClick:v,children:(0,e.jsx)(N,{text:"Invite",textColor:"text-white",background:"bg-secondary",width:"w-full",margin:"my-2",fontwidth:"font-bold"})}),(0,e.jsx)(M,{to:`/home/myuser/${r.id}`,children:(0,e.jsx)(N,{text:"View Profile",textColor:"text-black",background:"bg-[#01FFF4]",width:"w-full",margin:"my-2",fontwidth:"font-bold"})}),u==""||u==null||u==null?null:(0,e.jsx)("div",{className:"bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4",children:u})]})]})})};export{se as default};
