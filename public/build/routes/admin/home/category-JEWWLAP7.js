import{a as U,b as i}from"/build/_shared/chunk-4I5XS2UB.js";import{a as V}from"/build/_shared/chunk-4R5XGR2B.js";import{D as L,P as h,S as B,a as d,i as O,z as j}from"/build/_shared/chunk-A6XXWJXG.js";import{l as R}from"/build/_shared/chunk-P4VL4XDR.js";import{a as n,b as l}from"/build/_shared/chunk-WLYSEPGK.js";import{e as F,g as te,h as H}from"/build/_shared/chunk-EUC6ZTEW.js";var r=F(te());var e=F(H());function ae(){return[{rel:"stylesheet",href:V}]}var re=()=>{var T,M;let W=R().cateogry,[X,S]=(0,r.useState)(!1),[N,q]=(0,r.useState)({}),[z,C]=(0,r.useState)(!1),c=(0,r.useRef)(null),m=(0,r.useRef)(null),[E,k]=(0,r.useState)({categoryName:((T=c.current)==null?void 0:T.value)||"",categoryCode:((M=m.current)==null?void 0:M.value)||""}),[s,w]=(0,r.useState)(""),G=async t=>{let a=await n({method:"post",url:`${l}/api/get-category-byid`,data:{id:t}});C(o=>!0),k(o=>a.data.data[0])},[J,I]=(0,r.useState)(!1),[$,K]=(0,r.useState)({}),P=async t=>{let a=await n({method:"post",url:`${l}/api/get-category-byid`,data:{id:t}});I(o=>!0),K(o=>a.data.data[0])},Q=async t=>{let a=await n({method:"post",url:`${l}/api/del-category`,data:{id:t}});a.data.status?i.success("Successfully Deleted.",{theme:"dark"}):i.error(a.data.message,{theme:"dark"}),I(o=>!1),window.location.reload()},Y=async t=>{let a=await n({method:"post",url:`${l}/api/get-category-byid`,data:{id:t}});S(o=>!0),q(o=>a.data.data[0])},Z=async t=>{var a,o,p,g,f,y,b,x;if(((a=c.current)==null?void 0:a.value)==null||((o=c.current)==null?void 0:o.value)==null||((p=c.current)==null?void 0:p.value)=="")w("Enter the name.");else if(((g=m.current)==null?void 0:g.value)==null||((f=m.current)==null?void 0:f.value)==null||((y=m.current)==null?void 0:y.value)=="")w("Enter the code.");else{let D=await n({method:"post",url:`${l}/api/upd-category`,data:{categoryName:(b=c.current)==null?void 0:b.value,categoryCode:(x=m.current)==null?void 0:x.value,id:t}});D.data.status?i.success("Successfully updated.",{theme:"dark"}):i.error(D.data.message,{theme:"dark"}),C(de=>!1),window.location.reload()}},[_,A]=(0,r.useState)(!1),u=(0,r.useRef)(null),v=(0,r.useRef)(null),ee=async()=>{var t,a,o,p,g,f,y,b;if(((t=u.current)==null?void 0:t.value)==null||((a=u.current)==null?void 0:a.value)==null||((o=u.current)==null?void 0:o.value)=="")w("Enter the name.");else if(((p=v.current)==null?void 0:p.value)==null||((g=v.current)==null?void 0:g.value)==null||((f=v.current)==null?void 0:f.value)=="")w("Enter the code.");else{let x=await n({method:"post",url:`${l}/api/add-category`,data:{categoryName:(y=u.current)==null?void 0:y.value,categoryCode:(b=v.current)==null?void 0:b.value}});x.data.status?i.success("Successfully added.",{theme:"dark"}):i.error(x.data.message,{theme:"dark"}),A(D=>!1),window.location.reload()}};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${X?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsxs)("div",{className:"text-white",children:[(0,e.jsxs)("p",{children:["ID : ",N.id]}),(0,e.jsxs)("p",{children:["Name : ",N.categoryName," "]}),(0,e.jsxs)("p",{children:["Code : ",N.categoryCode]})]}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{onClick:()=>S(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(d,{icon:h,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]})]})})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${J?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsx)("div",{className:"text-white",children:(0,e.jsxs)("p",{children:["Are you Sure you want to delete ",$.name,"?"]})}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>I(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(d,{icon:h,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:()=>Q($.id),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(d,{icon:L,className:"w-6"}),(0,e.jsx)("p",{children:"Delete"})]})]})]})})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${z?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsxs)("div",{className:"text-white",children:[(0,e.jsx)("input",{ref:c,type:"text",name:"name",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the name..",autoComplete:"off",value:E.categoryName,onChange:t=>k(a=>({...a,categoryName:t.target.value}))}),(0,e.jsx)("input",{ref:m,type:"text",name:"code",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the code..",autoComplete:"off",value:E.categoryCode,onChange:t=>k(a=>({...a,categoryCode:t.target.value}))})]}),s==""||s==null||s==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:s}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>C(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(d,{icon:h,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:()=>Z(E.id),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(d,{icon:B,className:"w-6"}),(0,e.jsx)("p",{children:"SUBMIT"})]})]})]})})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${_?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsxs)("div",{className:"text-white",children:[(0,e.jsx)("input",{ref:u,type:"text",name:"name",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the name..",autoComplete:"off"}),(0,e.jsx)("input",{ref:v,type:"text",name:"code",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the code..",autoComplete:"off"})]}),s==""||s==null||s==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:s}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>A(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(d,{icon:h,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:ee,className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(d,{icon:B,className:"w-6"}),(0,e.jsx)("p",{children:"SUBMIT"})]})]})]})})}),(0,e.jsxs)("div",{className:"grow bg-[#1b2028] my-2 rounded-md p-4 w-full",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)("h1",{className:"text-white font-medium text-xl",children:"Category"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("button",{onClick:()=>A(!0),className:"bg-green-600 py-1 px-2 text-sm text-white rounded-md",children:"ADD NEW"})]}),(0,e.jsx)("div",{className:"w-full bg-slate-400 h-[1px] my-2"}),(0,e.jsxs)("div",{className:"overflow-x-hidden no-scrollbar",children:[(0,e.jsxs)("div",{className:"bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:"Id"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-40",children:"Title"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-32",children:"Action"})]}),W.map((t,a)=>(0,e.jsxs)("div",{className:"bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:t.id}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-40",children:t.categoryName}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("div",{className:"w-32 flex text-bold text-md gap-4",children:[(0,e.jsx)("div",{className:"text-cyan-500 cursor-pointer",onClick:()=>G(t.id),children:(0,e.jsx)(d,{icon:O})}),(0,e.jsx)("div",{className:"text-emerald-500 cursor-pointer",children:(0,e.jsx)(d,{icon:j,onClick:()=>Y(t.id)})}),(0,e.jsx)("div",{className:"text-rose-500 cursor-pointer",children:(0,e.jsx)(d,{icon:L,onClick:()=>P(t.id)})})]})]},a))]}),(0,e.jsx)(U,{})]})]})},oe=re;export{oe as default,ae as links};