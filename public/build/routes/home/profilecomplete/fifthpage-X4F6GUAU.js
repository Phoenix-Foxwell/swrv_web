import{a as O}from"/build/_shared/chunk-XTP3C3EQ.js";import{a as G}from"/build/_shared/chunk-HKPUGHCD.js";import{a as M}from"/build/_shared/chunk-NJKAJ7NJ.js";import"/build/_shared/chunk-5ROUF77C.js";import{d as F,l as B}from"/build/_shared/chunk-P4VL4XDR.js";import{a as H,b as D}from"/build/_shared/chunk-WLYSEPGK.js";import{e as u,g as X,h as T}from"/build/_shared/chunk-EUC6ZTEW.js";var n=u(X());var R=u(G()),e=u(T());var J=()=>{let m=B(),f=m.user.id,W=m.user.brand.id,[i,r]=(0,n.useState)(null),[d,p]=(0,n.useState)(null),j=O(a=>a.setIndex),g=(0,n.useRef)(null),o=(0,n.useRef)(null),t=(0,n.useRef)(null),[s,b]=(0,n.useState)(),q=a=>{b(a.target.value.replace(/\D/g,""))},[c,P]=(0,n.useState)([]),[V,v]=(0,n.useState)(!1);return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"p-8 w-full",children:[(0,e.jsx)("h1",{className:"text-2xl text-black font-bold",children:"Invite users"}),(0,e.jsx)("div",{className:"flex w-full",children:(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:["Username  ",(0,e.jsx)("span",{className:"text-rose-500 text-2xl font-semibold",children:"*"})]}),(0,e.jsx)("input",{ref:o,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"}),(0,e.jsxs)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:["Email  ",(0,e.jsx)("span",{className:"text-rose-500 text-2xl font-semibold",children:"*"})]}),(0,e.jsx)("input",{ref:t,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"}),(0,e.jsxs)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:["Contact number  ",(0,e.jsx)("span",{className:"text-rose-500 text-2xl font-semibold",children:"*"})]}),(0,e.jsx)("input",{onChange:q,value:s,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("div",{className:"grow"}),V?(0,e.jsx)("button",{className:"text-white rounded-lg bg-secondary py-1 px-4 font-semibold text-lg",children:"Sending..."}):(0,e.jsx)("button",{onClick:async()=>{var a,l,x,h,y,E,N,w,I,A,C,S,k,L;if(v(!0),r(null),((a=o.current)==null?void 0:a.value)==null||((l=o.current)==null?void 0:l.value)==null||((x=o.current)==null?void 0:x.value)=="")r("Enter the user ");else if(((h=t.current)==null?void 0:h.value)==null||((y=t.current)==null?void 0:y.value)==null||((E=t.current)==null?void 0:E.value)=="")r("Fill the Brand info");else if(!R.validate((N=t.current)==null?void 0:N.value))r("Enter valid email");else if(((w=t.current)==null?void 0:w.value.toString().endsWith("@gmail.com"))||((I=t.current)==null?void 0:I.value.toString().endsWith("@yahoo.com"))||((A=t.current)==null?void 0:A.value.toString().endsWith("@hotmail.com")))r("Enter Brand email");else if(s==null||s==null||s==0)r("Fill the contact number");else{let $={userId:f,brandId:W,name:(C=o.current)==null?void 0:C.value,email:(S=t.current)==null?void 0:S.value,contact:s},U=await H({method:"post",url:`${D}/api/send-brand-invite`,data:$});if(U.data.status==!1)return r(U.data.message);{let z={name:(k=o.current)==null?void 0:k.value,email:(L=t.current)==null?void 0:L.value,number:s.toString()};return P([...c,z]),r(null),b(0),o.current.value="",t.current.value="",v(!1),p("User invited successfully")}}},className:"text-white rounded-lg bg-secondary py-1 px-4 font-semibold text-lg",children:"Invite"})]}),i==""||i==null||i==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:i}),d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4",children:d}),c.map((a,l)=>(0,e.jsx)("div",{className:"my-4 bg-gray-200 shadow-md rounded-md py-1 px-4",children:(0,e.jsxs)("p",{className:"text-slate-900 text-md",children:[l+1,": ",a.name," - ",a.email," "]})},l)),(0,e.jsx)("div",{onClick:()=>{c.length==0?(p(null),r("Invite at least one user")):(j(6),g.current.click())},children:(0,e.jsx)(M,{text:"Next",textColor:"text-white",width:"w-full",background:"bg-primary",fontwidth:"font-bold"})}),(0,e.jsxs)(F,{method:"post",className:"hidden",children:[(0,e.jsx)("input",{type:"hidden",name:"id",value:f.toString()}),(0,e.jsx)("button",{ref:g,name:"submit",children:"Submit"})]})]})})]})})},K=J;export{K as default};
