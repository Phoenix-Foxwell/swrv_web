import{a as u}from"/build/_shared/chunk-57PMQZPE.js";import{a as y}from"/build/_shared/chunk-DKPU7JMR.js";import{a as p}from"/build/_shared/chunk-6ONMTUBQ.js";import{a as h,b as w}from"/build/_shared/chunk-MNPIC26H.js";import{a as c,t as m}from"/build/_shared/chunk-B53UXM73.js";import{a as f,g as x,k as b}from"/build/_shared/chunk-WLPYV2BQ.js";import{c as i,d as v,e as C}from"/build/_shared/chunk-7UEYUE33.js";var l=i(v());var e=i(C());var N=()=>{let[n,s]=(0,l.useState)(!1),t=b(),d=t.userdata.role.code=="50",a=t.camp.campaigns,r=t.userdata.profileCompleteness==1||t.userdata.profileCompleteness=="1",[o,g]=(0,l.useState)(null),A=f();return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex my-6 md:flex-row flex-col",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-2xl font-bold text-black text-left mt-4",children:"My campaigns"}),(0,e.jsx)("p",{className:"text-md font-normal text-black text-left",children:"Here you can manage all the campaigns that you are participating in."})]}),(0,e.jsx)("div",{className:"hidden md:block md:grow"})]}),d?(0,e.jsxs)("div",{className:"bg-white shadow-xl rounded-xl p-6",children:[(0,e.jsx)("h1",{className:"text-black text-center font-bold text-2xl",children:"Would you like to collaborate ?"}),(0,e.jsx)("div",{className:"w-full text-center bg-red",children:(0,e.jsx)("div",{onClick:()=>{r?(g(null),A("/home/createcampaign")):g("Complete your profile first.")},children:(0,e.jsx)(p,{text:"Create Campaign",textColor:"text-white",background:"bg-secondary"})})}),o==""||o==null||o==null?null:(0,e.jsx)("div",{className:"bg-rose-500 bg-opacity-10 border-2 text-center border-rose-500 rounded-md text-rose-500 text-lg font-normal text-md my-4",children:o})]}):null,d?(0,e.jsx)("div",{children:n?(0,e.jsx)(U,{}):(0,e.jsx)(P,{camp:a})}):(0,e.jsx)(B,{userid:t.userdata.id})]})})},k=N,P=n=>{let s=n.camp;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 rounded-xl text-xl font-bold text-black p-2 my-4",children:[" ",(0,e.jsx)(c,{icon:m,className:"text-md text-secondary"})," ","Your Campaign"," "]}),s.length==0?(0,e.jsx)("h1",{className:"text-black font-medium text-xl text-center",children:"Here is no campaign created.."}):null,(0,e.jsx)("div",{className:"flex gap-6 flex-wrap",children:s.map((t,d)=>{let a=[];for(let o=0;o<t.platforms.length;o++)a.push(t.platforms[o].platformLogoUrl);let r=t.brand.length==0||t.brand==null||t.brand==null||t.brand==""||t.brand.logo=="0"||t.brand.logo==null||t.brand.logo==null||t.brand.logo==""?"/images/avatar/user.png":t.brand.logo;return(0,e.jsx)("div",{children:(0,e.jsx)(y,{id:t.id,currency:t.currency.code,platforms:a,maxval:t.costPerPost.split(".")[0],weburl:t.brand.webUrl,category:t.type.name,image:r,name:t.brand.name,title:t.name,btntext:"View"})},d)})})]})})},U=()=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center",children:[(0,e.jsx)(u,{}),(0,e.jsx)(u,{})]})}),B=n=>{let[s,t]=(0,l.useState)([]),d=async()=>{let a={search:{status:"3",influencer:n.userid,fromUser:n.userid}},r=await h({method:"post",url:`${w}/api/search-invite`,data:a,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});t(r.data.data)};return(0,l.useEffect)(()=>{d()},[]),(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 rounded-xl text-xl font-bold text-black p-2 my-4",children:[" ",(0,e.jsx)(c,{icon:m,className:"text-md text-secondary"})," ","Your Campaign"," "]}),s.length==0?(0,e.jsx)("h1",{className:"text-black font-medium text-xl text-center",children:"You haven't collaborated in any campaign."}):null,(0,e.jsx)("div",{className:"flex flex-wrap gap-6 px-20",children:s.map((a,r)=>{let o=a.brand.length==0||a.brand==null||a.brand==null||a.brand==""||a.brand.logo=="0"||a.brand.logo==null||a.brand.logo==null||a.brand.logo==""?"/images/avatar/user.png":a.brand.logo;return(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"bg-white rounded-xl shadow-xl p-4 w-64 my-2",children:[(0,e.jsxs)("div",{className:"flex items-end gap-x-3",children:[(0,e.jsx)("div",{children:(0,e.jsx)("img",{src:o,alt:"error",className:"object-cover w-16 h-16 rounded"})}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl content-end text-left",children:a.brand.name})]}),(0,e.jsxs)("p",{className:"text-black font-semibold text-xs text-left mt-2",children:["email : ",a.brand.email]}),(0,e.jsx)(x,{to:`/home/campaigns/${a.campaign.id}`,children:(0,e.jsx)(p,{text:"View",textColor:"text-black",background:"bg-[#01FFF4]",width:"w-full",margin:"my-2",fontwidth:"font-bold"})})]})},r)})})]})};export{k as default};