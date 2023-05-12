import{a as T}from"/build/_shared/chunk-AJSSHKA4.js";import{a as w}from"/build/_shared/chunk-BC5I37BB.js";import{a as f,b as h}from"/build/_shared/chunk-UNEBNKOC.js";import{J as y,X as C,a as l,s as N}from"/build/_shared/chunk-LBP4PHVR.js";import{b as q,h as B,l as O}from"/build/_shared/chunk-CFMSPZYJ.js";import{c as b,e as $,f as v}from"/build/_shared/chunk-ZZL6GC2B.js";var n=b($());var o=b(v()),L=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"bg-white rounded-xl shadow-xl p-4 w-64 my-2",children:[(0,o.jsxs)("div",{className:"flex items-end gap-x-3",children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/images/brand/adidas.jpg",alt:"error",className:"object-cover w-16 h-16 rounded"})}),(0,o.jsx)("p",{className:"text-black font-semibold text-xl content-end text-left",children:"Adidas Cases"})]}),(0,o.jsx)("p",{className:"text-black font-semibold text-md text-left my-4",children:"Lulu 50% off - SPORTS WEEK"}),(0,o.jsxs)("div",{className:"flex justify-center items-center gap-x-2",children:[(0,o.jsx)("img",{src:"/images/media/facebook.png",alt:"error",className:"w-6 h-6 grow"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-sm font-bold text-black",children:"POST"}),(0,o.jsx)("p",{className:"text-xs font-normal text-black",children:"Category: Consumer Electronics"})]}),(0,o.jsx)("p",{className:"text-black font-semibold text-sm text-left my-4",children:"61K Reach"})]}),(0,o.jsxs)("div",{className:"flex justify-center items-center gap-x-2",children:[(0,o.jsx)("img",{src:"/images/media/instagram.png",alt:"error",className:"w-6 h-6 grow"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"text-sm font-bold text-black",children:"POST"}),(0,o.jsx)("p",{className:"text-xs font-normal text-black",children:"Category: Consumer Electronics"})]}),(0,o.jsx)("p",{className:"text-black font-semibold text-sm text-left my-4",children:"61K Reach"})]}),(0,o.jsx)(w,{text:"View",textColor:"text-black",background:"bg-[#01FFF4]",width:"w-full",margin:"my-2",fontwidth:"font-bold"})]})}),A=L;var e=b(v());var M=()=>{let[u,i]=(0,n.useState)(!1),t=O(),p=t.userdata.role.code=="50",a=t.camp.campaigns,c=t.userdata.profileCompleteness==1||t.userdata.profileCompleteness=="1",[s,d]=(0,n.useState)(null),g=q();return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex my-6 md:flex-row flex-col",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-2xl font-bold text-black text-left mt-4",children:"My campaigns"}),(0,e.jsx)("p",{className:"text-md font-normal text-black text-left",children:"Here you can manage all the campaigns that you are participating in."})]}),(0,e.jsx)("div",{className:"hidden md:block md:grow"})]}),p?(0,e.jsxs)("div",{className:"bg-white shadow-xl rounded-xl p-6",children:[(0,e.jsx)("h1",{className:"text-black text-center font-bold text-2xl",children:"Would you like to collaborate ?"}),(0,e.jsx)("div",{className:"w-full text-center bg-red",children:(0,e.jsx)("div",{onClick:()=>{c?(d(null),g("/home/createcampaign")):d("Complete your profile first.")},children:(0,e.jsx)(w,{text:"Create Campaign",textColor:"text-white",background:"bg-secondary"})})}),s==""||s==null||s==null?null:(0,e.jsx)("div",{className:"bg-rose-500 bg-opacity-10 border-2 text-center border-rose-500 rounded-md text-rose-500 text-lg font-normal text-md my-4",children:s})]}):null,p?(0,e.jsx)("div",{children:u?(0,e.jsx)(X,{}):(0,e.jsx)(S,{camp:a})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Y,{userid:t.userdata.id}),(0,e.jsx)(K,{userId:t.userdata.id})]})]})})},H=M,S=u=>{let i=u.camp;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 rounded-xl text-xl font-bold text-black p-2 my-4",children:[" ",(0,e.jsx)(l,{icon:N,className:"text-md text-secondary"})," ","Your Campaign"," "]}),i.length==0?(0,e.jsx)("h1",{className:"text-black font-medium text-xl text-center",children:"Here is no campaign created.."}):null,(0,e.jsx)("div",{className:"flex gap-6 flex-wrap",children:i.map((t,p)=>{let a=[];for(let s=0;s<t.platforms.length;s++)a.push(t.platforms[s].platformLogoUrl);let c=t.brand.length==0||t.brand==null||t.brand==null||t.brand==""||t.brand.logo=="0"||t.brand.logo==null||t.brand.logo==null||t.brand.logo==""?"/images/avatar/user.png":t.brand.logo;return(0,e.jsx)("div",{children:(0,e.jsx)(T,{id:t.id,currency:t.currency.code,platforms:a,maxval:t.costPerPost.split(".")[0],weburl:t.brand.webUrl,category:t.type.name,image:c,name:t.brand.name,title:t.name,btntext:"View"})},p)})})]})})},X=()=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center",children:[(0,e.jsx)(A,{}),(0,e.jsx)(A,{})]})}),Y=u=>{let[i,t]=(0,n.useState)([]),p=async()=>{let a={search:{status:"3",influencer:u.userid}},c=await f({method:"post",url:`${h}/api/search-invite`,data:a,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});t(c.data.data)};return(0,n.useEffect)(()=>{p()},[]),(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 rounded-xl text-xl font-bold text-black p-2 my-4",children:[" ",(0,e.jsx)(l,{icon:N,className:"text-md text-secondary"})," ","Active Campaign"," "]}),i.length==0?(0,e.jsx)("h1",{className:"text-black font-medium text-xl text-center",children:"You haven't collaborated in any campaign."}):null,(0,e.jsx)("div",{className:"flex flex-wrap gap-6",children:i.map((a,c)=>{let s=a.brand.length==0||a.brand==null||a.brand==null||a.brand==""||a.brand.logo=="0"||a.brand.logo==null||a.brand.logo==null||a.brand.logo==""?"/images/avatar/user.png":a.brand.logo;return(0,e.jsxs)("div",{className:"bg-white rounded-xl shadow-xl p-4 w-64 my-2 h-full",children:[(0,e.jsxs)("div",{className:"flex items-end gap-x-3 h-full",children:[(0,e.jsx)("div",{children:(0,e.jsx)("img",{src:s,alt:"error",className:"object-cover w-16 h-16 rounded"})}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl content-end text-left",children:a.brand.name})]}),(0,e.jsx)("p",{className:"text-gray-700 font-semibold text-xl text-left mt-2",children:a.campaign.name}),(0,e.jsxs)("p",{className:"text-black font-semibold text-xs text-left mt-2",children:["email : ",a.brand.email]}),(0,e.jsx)(B,{to:`/home/campaigns/${a.campaign.id}`,children:(0,e.jsx)(w,{text:"View",textColor:"text-black",background:"bg-[#01FFF4]",width:"w-full",margin:"my-2",fontwidth:"font-bold"})})]},c)})})]})},K=u=>{let[i,t]=(0,n.useState)([]),[p,a]=(0,n.useState)(!1),[c,s]=(0,n.useState)(!1),[d,g]=(0,n.useState)(null),x=(0,n.useRef)(null),[k,I]=(0,n.useState)(null),D=async()=>{let r={search:{status:"1",influencer:u.userId}},m=await f({method:"post",url:`${h}/api/search-invite`,data:r});t(m.data.data)};(0,n.useEffect)(()=>{D()},[]);let E=async()=>{let r={id:k,status:"3"},m=await f.post(`${h}/api/update-invite`,r);if(m.data.staus==!1)return g(m.data.message);a(!1),window.location.reload()},U=async()=>{var j,F,P,R;if(((j=x.current)==null?void 0:j.value)==null||((F=x.current)==null?void 0:F.value)==null||((P=x.current)==null?void 0:P.value)=="")return g("Fell the reason.");let r={id:k,status:"5",rejectReason:(R=x.current)==null?void 0:R.value},m=await f.post(`${h}/api/update-invite`,r);if(m.data.staus==!1)return g(m.data.message);x.current.value=="",s(!1),window.location.reload()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${p?"grid":"hidden"}`,children:(0,e.jsxs)("div",{className:"bg-white w-72 shadow-lg p-4 rounded-lg",children:[(0,e.jsx)("p",{className:"text-center font-medium text-2xl",children:"Accept"}),(0,e.jsx)("div",{className:"w-full bg-gray-400 h-[1px] my-2"}),(0,e.jsx)("p",{className:"text-center font-medium text-gray-800",children:"Are you sure you want to accept this?"}),d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d}),(0,e.jsxs)("div",{className:"flex mt-2",children:[(0,e.jsxs)("button",{onClick:()=>{a(!1)},className:"bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500",children:[(0,e.jsx)(l,{className:"mx-2",icon:y}),"Cancel"]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("button",{onClick:E,className:"bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",children:[(0,e.jsx)(l,{className:"mx-2",icon:C}),"Accept"]})]})]})}),(0,e.jsx)("div",{className:`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${c?"grid":"hidden"}`,children:(0,e.jsxs)("div",{className:"bg-white w-72 shadow-lg p-4 rounded-lg",children:[(0,e.jsx)("p",{className:"text-center font-medium text-2xl",children:"Reject"}),(0,e.jsx)("div",{className:"w-full bg-gray-400 h-[1px] my-2"}),(0,e.jsx)("input",{ref:x,type:"text",className:"w-full bg-gray-200 rounded-lg  px-2 py-1 my-2 outline-none",placeholder:"Enter the reason of rejection."}),d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d}),(0,e.jsxs)("div",{className:"flex mt-2",children:[(0,e.jsxs)("button",{onClick:()=>{s(!1)},className:"bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500",children:[(0,e.jsx)(l,{className:"mx-2",icon:y}),"Cancel"]}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("button",{onClick:U,className:"bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",children:[(0,e.jsx)(l,{className:"mx-2",icon:C}),"Reject"]})]})]})}),(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 rounded-xl text-xl font-bold text-black p-2 my-4",children:[" ",(0,e.jsx)(l,{icon:N,className:"text-md text-secondary"})," ","Your Campaign"," "]}),i.length==0?(0,e.jsx)("h1",{className:"text-black font-medium text-xl text-center",children:"You haven't got any request from the campaign."}):null,(0,e.jsx)("div",{className:"flex flex-wrap gap-6",children:i.map((r,m)=>(0,e.jsxs)("div",{className:"p-4 bg-white rounded-lg shadow-lg",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)("img",{src:r.brand.logo,alt:"influencer pic",className:"w-10 h-10 shrink-0 rounded-md object-center object-cover"}),(0,e.jsxs)("div",{className:"ml-2",children:[(0,e.jsx)("p",{className:"text-md font-medium",children:r.brand.name.toString().split("@")[0]}),(0,e.jsx)("p",{className:"text-sm font-medium",children:r.brand.email})]})]}),(0,e.jsx)("p",{className:"mt-2 text-md font-medium",children:"Message"}),(0,e.jsx)("p",{className:"text-sm font-medium",children:r.inviteMessage}),(0,e.jsxs)("div",{className:"flex gap-4 mt-2",children:[(0,e.jsxs)("button",{onClick:()=>{I(r.id),a(!0)},className:"bg-white  text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500",children:[(0,e.jsx)(l,{className:"mx-2",icon:C}),"Accept"]}),(0,e.jsxs)("button",{onClick:()=>{I(r.id),s(!0)},className:"bg-white  text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500",children:[(0,e.jsx)(l,{className:"mx-2",icon:y}),"Reject"]})]}),(0,e.jsx)("div",{})]},m))})]})]})};export{H as default};
