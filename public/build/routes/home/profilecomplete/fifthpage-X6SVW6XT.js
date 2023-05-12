import{a as T}from"/build/_shared/chunk-GPE2LF2N.js";import{a as V}from"/build/_shared/chunk-U4HZTU65.js";import{a as B}from"/build/_shared/chunk-BC5I37BB.js";import{a as U,b as F}from"/build/_shared/chunk-UNEBNKOC.js";import"/build/_shared/chunk-2LR2MXSV.js";import{d as k,l as L}from"/build/_shared/chunk-CFMSPZYJ.js";import{c as d,e as P,f as S}from"/build/_shared/chunk-ZZL6GC2B.js";var n=d(P());var H=d(V()),e=d(S());var $=()=>{let m=L(),f=m.user.id,D=m.user.brand.id,[i,r]=(0,n.useState)(null),[u,p]=(0,n.useState)(null),M=T(t=>t.setIndex),g=(0,n.useRef)(null),o=(0,n.useRef)(null),a=(0,n.useRef)(null),[l,v]=(0,n.useState)(),O=t=>{v(t.target.value.replace(/\D/g,""))},[c,R]=(0,n.useState)([]);return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"p-8 w-full",children:[(0,e.jsx)("h1",{className:"text-2xl text-black font-bold",children:"Invite users"}),(0,e.jsx)("div",{className:"flex w-full",children:(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Username"}),(0,e.jsx)("input",{ref:o,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Email"}),(0,e.jsx)("input",{ref:a,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"contact number"}),(0,e.jsx)("input",{onChange:O,value:l,type:"text",maxLength:10,className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("button",{onClick:async()=>{var t,s,b,x,E,y,h,w,N,A,I;if(((t=o.current)==null?void 0:t.value)==null||((s=o.current)==null?void 0:s.value)==null||((b=o.current)==null?void 0:b.value)=="")r("Enter the user ");else if(((x=a.current)==null?void 0:x.value)==null||((E=a.current)==null?void 0:E.value)==null||((y=a.current)==null?void 0:y.value)=="")r("Fill the Brand info");else if(!H.validate((h=a.current)==null?void 0:h.value))r("Enter valid email");else if(l==null||l==null||l==0)r("Fill the contact number");else if(l.toString().length!=10)r("Enter a 10 degit valid contact number");else{let j={userId:f,brandId:D,name:(w=o.current)==null?void 0:w.value,email:(N=a.current)==null?void 0:N.value,contact:l},C=await U({method:"post",url:`${F}/api/send-brand-invite`,data:j});if(C.data.status==!1)return r(C.data.message);{let q={name:(A=o.current)==null?void 0:A.value,email:(I=a.current)==null?void 0:I.value,number:l.toString()};return R([...c,q]),r(null),v(0),o.current.value="",a.current.value="",p("User invited successfully")}}},className:"text-white rounded-lg bg-secondary py-1 px-4 font-semibold text-lg",children:"Invite"})]}),i==""||i==null||i==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:i}),u==""||u==null||u==null?null:(0,e.jsx)("div",{className:"bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4",children:u}),c.map((t,s)=>(0,e.jsx)("div",{className:"my-4 bg-gray-200 shadow-md rounded-md py-1 px-4",children:(0,e.jsxs)("p",{className:"text-slate-900 text-md",children:[s+1,": ",t.name," - ",t.email," "]})},s)),(0,e.jsx)("div",{onClick:()=>{c.length==0?(p(null),r("Invite at least one user")):(M(5),g.current.click())},children:(0,e.jsx)(B,{text:"Next",textColor:"text-white",width:"w-full",background:"bg-primary",fontwidth:"font-bold"})}),(0,e.jsxs)(k,{method:"post",className:"hidden",children:[(0,e.jsx)("input",{type:"hidden",name:"id",value:f.toString()}),(0,e.jsx)("button",{ref:g,name:"submit",children:"Submit"})]})]})})]})})},z=$;export{z as default};
