import{a as R}from"/build/_shared/chunk-7S4RZ54Q.js";import"/build/_shared/chunk-6QRY2UAU.js";import{a as w}from"/build/_shared/chunk-BC5I37BB.js";import{a as v,b}from"/build/_shared/chunk-UNEBNKOC.js";import{G as q,a as k}from"/build/_shared/chunk-LBP4PHVR.js";import{l as P}from"/build/_shared/chunk-CFMSPZYJ.js";import{c as N,e as A,f as F}from"/build/_shared/chunk-ZZL6GC2B.js";var n=N(A());var e=N(F());var S=()=>{let t=P(),s=t.brandId,d=t.campaignId,r=t.userId,m=t.draftId,a=t.cpp,i=t.currency,g=t.name,[f,u]=(0,n.useState)(!1),[o,l]=(0,n.useState)(0),c=async()=>{let p={search:{type:"3",campaign:d,brand:s,influencer:r}};(await v({method:"post",url:`${b}/api/search-review`,data:p})).data.data.length>0&&u(!0)};return(0,n.useEffect)(()=>{c()},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"w-full mt-4 shadow-xl bg-white rounded-xl",children:(0,e.jsxs)("div",{className:"flex mx-4 gap-4",children:[(0,e.jsx)("div",{onClick:()=>{l(0)},children:(0,e.jsx)(w,{text:"Insights",background:`${o==0?"bg-[#01FFF4]":"bg-gray-100"}`,fontwidth:"font-bold",textColor:`${o==0?"text-black":"text-gray-600"}`})}),(0,e.jsx)("div",{onClick:()=>{l(1)},children:(0,e.jsx)(w,{text:"Payments",background:`${o==1?"bg-[#01FFF4]":"bg-gray-100"}`,fontwidth:"font-bold",textColor:`${o==1?"text-black":"text-gray-600"}`})})]})}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-6 mt-6",children:[o==0?(0,e.jsx)("div",{}):(0,e.jsx)(e.Fragment,{}),o==1?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D,{brandId:s,userId:r,campaignId:d,draftId:m,cpp:a,currency:i,campname:g}),f?null:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-md text-primary font-semibold py-1",children:"Rating"}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-slate-300"}),(0,e.jsx)(R,{campaignId:d,brandId:s,influencerId:r,reviewType:"3"})]}),(0,e.jsx)(E,{brandId:s,userId:r,campaignId:d})]}):(0,e.jsx)(e.Fragment,{})]})]})},T=S,D=t=>{let[s,d]=(0,n.useState)(!1),[r,m]=(0,n.useState)(""),a=(0,n.useRef)(null),[i,g]=(0,n.useState)(0),[f,u]=(0,n.useState)(0),o=async()=>{let l=await v.post(`${b}/api/get-received-payment`,{userId:t.userId,draftId:t.draftId});l.data.status?g(parseInt(l.data.data.totalAmtReq.toString().split(".")[0])):g(0);let c=await v.post(`${b}/api/get-pending-payment`,{userId:t.userId,draftId:t.draftId});c.data.status?u(parseInt(c.data.data.totalAmtReq.toString().split(".")[0])):u(0)};return(0,n.useEffect)(()=>{o()},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-md text-primary font-semibold py-1",children:"Payments"}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-slate-300"}),(0,e.jsxs)("div",{className:"rounded-xl shadow-xl bg-white p-4 mt-2 w-96",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)(k,{icon:q,className:"text-xl text-primary"}),(0,e.jsx)("h2",{className:"text-xl text-primary font-medium px-4",children:"Budget"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("p",{className:"text-md font-bold text-black",children:[t.cpp.toString().split(".")[0]," ",t.currency]})]}),(0,e.jsx)("div",{className:"h-[1px] bg-gray-500 w-full my-2 "}),(0,e.jsxs)("div",{className:"flex my-2",children:[(0,e.jsx)("p",{className:"text-md text-primary",children:"Received"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("p",{className:"text-md font-normal text-black",children:[i," ",t.currency]})]}),(0,e.jsxs)("div",{className:"flex my-2",children:[(0,e.jsx)("p",{className:"text-md text-primary",children:"Pending"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("p",{className:"text-md font-normal text-black",children:[parseInt(t.cpp.toString().split(".")[0])-i," ",t.currency]})]})]}),(0,e.jsxs)("div",{className:"p-4 bg-white mt-2 rounded-md w-96",children:[(0,e.jsx)("p",{className:"text-normal font-semibold py-1 text-primary text-lg",children:"Payment request"}),(0,e.jsx)("button",{onClick:()=>{d(!0)},className:`text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2 ${s?"hidden":""}`,children:"Request"}),(0,e.jsxs)("div",{className:`${s?"":"hidden"}`,children:[(0,e.jsxs)("div",{className:"flex gap-x-4",children:[(0,e.jsx)("p",{children:"Enter Amount : "})," ",(0,e.jsx)("div",{children:(0,e.jsx)("input",{ref:a,type:"number",className:"text-black outline-none border-none rounded-md py-1 px-2 bg-gray-300 w-full"})})]}),r==""||r==null||r==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:r}),(0,e.jsx)("button",{onClick:async()=>{var l,c,p,y,x;if(((l=a.current)==null?void 0:l.value)==null||((c=a.current)==null?void 0:c.value)==null||((p=a.current)==null?void 0:p.value)=="")m("Enter the amount");else if(parseInt((y=a.current)==null?void 0:y.value)>parseInt(t.cpp)-f)m("Your requested is higher then pending amount.");else{let I={userId:t.userId,campaignId:t.campaignId,amtReq:(x=a.current)==null?void 0:x.value,draftId:t.draftId,brandId:t.brandId,paymentType:"1"},h=await v.post(`${b}/api/new-pay-request`,I);if(h.data.status)m(""),a.current.value="";else return m(h.data.message);return d(!1)}},className:"text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2",children:"Request Payment"})]})]})]})})},E=t=>{let[s,d]=(0,n.useState)(null),[r,m]=(0,n.useState)(null),a=(0,n.useRef)(null),i=(0,n.useRef)(null),g=async()=>{var f,u,o,l,c,p,y,x,I;if(((f=a.current)==null?void 0:f.value)==null||((u=a.current)==null?void 0:u.value)==null||((o=a.current)==null?void 0:o.value)=="")d("Fill the message.");else if(((l=i.current)==null?void 0:l.value)==null||((c=i.current)==null?void 0:c.value)==null||((p=i.current)==null?void 0:p.value)==""||((y=i.current)==null?void 0:y.value)=="0")d("Select one reason.");else{let h={type:(x=i.current)==null?void 0:x.value,userId:t.userId,brandId:t.brandId,campaignId:t.campaignId,isBrand:0,message:(I=a.current)==null?void 0:I.value},C=await v({method:"post",url:`${b}/api/add-dispute`,data:h,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});if(C.data.status==!1)return d(C.data.message);d(null),m("Message sent!"),i.current.value="",a.current.value=""}};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-md text-primary font-semibold py-1",children:"Dispute"}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-slate-300"}),(0,e.jsxs)("div",{className:"rounded-xl shadow-xl bg-white p-4 mt-2 w-96",children:[(0,e.jsxs)("select",{ref:i,name:"reason",id:"reason",className:"w-full rounded-md border-none outline-none bg-gray-100 py-2 my-2 px-2",children:[(0,e.jsx)("option",{value:"1",children:"This is bad"}),(0,e.jsx)("option",{value:"2",children:"This is so bad"}),(0,e.jsx)("option",{value:"3",children:"This is extrimily bad"}),(0,e.jsx)("option",{value:"4",children:"I just don't want it"})]}),(0,e.jsx)("textarea",{ref:a,className:"p-4 w-full h-40 outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md resize-none",placeholder:"Your message"}),s==""||s==null||s==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:s}),r==""||r==null||r==null?null:(0,e.jsx)("div",{className:"bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4",children:r}),(0,e.jsx)("div",{onClick:g,children:(0,e.jsx)(w,{text:"Send Message",background:"bg-primary"})})]})]})})};export{T as default};