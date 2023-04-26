import{a as k}from"/build/_shared/chunk-T2UW36V2.js";import"/build/_shared/chunk-FZJ3KOTO.js";import{a as I}from"/build/_shared/chunk-6ONMTUBQ.js";import{a as l,b as u}from"/build/_shared/chunk-MNPIC26H.js";import{E as F,a as q}from"/build/_shared/chunk-VYXQYHL2.js";import{l as w}from"/build/_shared/chunk-BDKSMX4O.js";import{c as v,d as C,e as P}from"/build/_shared/chunk-7UEYUE33.js";var a=v(C());var t=v(P());var $=()=>{let e=w(),m=e.brandId,o=e.campaignId,d=e.userId,c=e.draftId,n=e.cpp,p=e.currency,g=e.name,[x,f]=(0,a.useState)(!1),[r,s]=(0,a.useState)(0),i=async()=>{let y={search:{type:"3",campaign:o,brand:m,influencer:d}};(await l({method:"post",url:`${u}/api/search-review`,data:y})).data.data.length>0&&f(!0)};return(0,a.useEffect)(()=>{i()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"w-full mt-4 shadow-xl bg-white rounded-xl",children:(0,t.jsxs)("div",{className:"flex mx-4 gap-4",children:[(0,t.jsx)("div",{onClick:()=>{s(0)},children:(0,t.jsx)(I,{text:"Insights",background:`${r==0?"bg-[#01FFF4]":"bg-gray-100"}`,fontwidth:"font-bold",textColor:`${r==0?"text-black":"text-gray-600"}`})}),(0,t.jsx)("div",{onClick:()=>{s(1)},children:(0,t.jsx)(I,{text:"Payments",background:`${r==1?"bg-[#01FFF4]":"bg-gray-100"}`,fontwidth:"font-bold",textColor:`${r==1?"text-black":"text-gray-600"}`})})]})}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-6",children:[r==0?(0,t.jsx)("div",{}):(0,t.jsx)(t.Fragment,{}),r==1?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E,{brandId:m,userId:d,campaignId:o,draftId:c,cpp:n,currency:p,campname:g}),x?null:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-md text-primary font-semibold py-1",children:"Rating"}),(0,t.jsx)("div",{className:"w-full h-[1px] bg-slate-300"}),(0,t.jsx)(k,{campaignId:o,brandId:m,influencerId:d,reviewType:"3"})]})]}):(0,t.jsx)(t.Fragment,{})]})]})},S=$,E=e=>{let[m,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)(""),n=(0,a.useRef)(null),[p,g]=(0,a.useState)(0),[x,f]=(0,a.useState)(0),r=async()=>{let s=await l.post(`${u}/api/get-received-payment`,{userId:e.userId,draftId:e.draftId});s.data.status?g(parseInt(s.data.data.totalAmtReq.toString().split(".")[0])):g(0);let i=await l.post(`${u}/api/get-pending-payment`,{userId:e.userId,draftId:e.draftId});i.data.status?f(parseInt(i.data.data.totalAmtReq.toString().split(".")[0])):f(0)};return(0,a.useEffect)(()=>{r()},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-md text-primary font-semibold py-1",children:"Payments"}),(0,t.jsx)("div",{className:"w-full h-[1px] bg-slate-300"}),(0,t.jsxs)("div",{className:"rounded-xl shadow-xl bg-white p-4 mt-2 w-96",children:[(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)(q,{icon:F,className:"text-xl text-primary"}),(0,t.jsx)("h2",{className:"text-xl text-primary font-medium px-4",children:"Budget"}),(0,t.jsx)("div",{className:"grow"}),(0,t.jsxs)("p",{className:"text-md font-bold text-black",children:[e.cpp.toString().split(".")[0]," ",e.currency]})]}),(0,t.jsx)("div",{className:"h-[1px] bg-gray-500 w-full my-2 "}),(0,t.jsxs)("div",{className:"flex my-2",children:[(0,t.jsx)("p",{className:"text-md text-primary",children:"Received"}),(0,t.jsx)("div",{className:"grow"}),(0,t.jsxs)("p",{className:"text-md font-normal text-black",children:[p," ",e.currency]})]}),(0,t.jsxs)("div",{className:"flex my-2",children:[(0,t.jsx)("p",{className:"text-md text-primary",children:"Pending"}),(0,t.jsx)("div",{className:"grow"}),(0,t.jsxs)("p",{className:"text-md font-normal text-black",children:[parseInt(e.cpp.toString().split(".")[0])-p," ",e.currency]})]})]}),(0,t.jsxs)("div",{className:"p-4 bg-white mt-2 rounded-md w-96",children:[(0,t.jsx)("p",{className:"text-normal font-semibold py-1 text-primary text-lg",children:"Payment request"}),(0,t.jsx)("button",{onClick:()=>{o(!0)},className:`text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2 ${m?"hidden":""}`,children:"Request"}),(0,t.jsxs)("div",{className:`${m?"":"hidden"}`,children:[(0,t.jsxs)("div",{className:"flex gap-x-4",children:[(0,t.jsx)("p",{children:"Enter Amount : "})," ",(0,t.jsx)("div",{children:(0,t.jsx)("input",{ref:n,type:"number",className:"text-black outline-none border-none rounded-md py-1 px-2 bg-gray-300 w-full"})})]}),d==""||d==null||d==null?null:(0,t.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d}),(0,t.jsx)("button",{onClick:async()=>{var s,i,y,b,h;if(((s=n.current)==null?void 0:s.value)==null||((i=n.current)==null?void 0:i.value)==null||((y=n.current)==null?void 0:y.value)=="")c("Enter the amount");else if(parseInt((b=n.current)==null?void 0:b.value)>parseInt(e.cpp)-x)c("Your requested is higher then pending amount.");else{let R={userId:e.userId,campaignId:e.campaignId,amtReq:(h=n.current)==null?void 0:h.value,draftId:e.draftId,brandId:e.brandId,paymentType:"1"},N=await l.post(`${u}/api/new-pay-request`,R);if(N.data.status)c(""),n.current.value="";else return c(N.data.message);return o(!1)}},className:"text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2",children:"Request Payment"})]})]})]})})};export{S as default};
