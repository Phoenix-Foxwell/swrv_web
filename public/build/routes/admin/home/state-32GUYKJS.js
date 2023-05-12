import{a as O,b as i}from"/build/_shared/chunk-BI64PZPG.js";import{a as j}from"/build/_shared/chunk-QJYRTBXE.js";import{a as n,b as l}from"/build/_shared/chunk-UNEBNKOC.js";import{D as H,O as h,R as B,a as s}from"/build/_shared/chunk-LBP4PHVR.js";import{l as M}from"/build/_shared/chunk-CFMSPZYJ.js";import{c as L,e as W,f as R}from"/build/_shared/chunk-ZZL6GC2B.js";var r=L(W());var e=L(R());function Y(){return[{rel:"stylesheet",href:j}]}var Z=()=>{var $,T;let U=M().state,[V,D]=(0,r.useState)(!1),[N,X]=(0,r.useState)({}),[q,C]=(0,r.useState)(!1),c=(0,r.useRef)(null),m=(0,r.useRef)(null),[E,k]=(0,r.useState)({categoryName:(($=c.current)==null?void 0:$.value)||"",categoryCode:((T=m.current)==null?void 0:T.value)||""}),[d,w]=(0,r.useState)(""),ee=async t=>{let a=await n({method:"post",url:`${l}/api/get-category-byid`,data:{id:t}});C(o=>!0),k(o=>a.data.data[0])},[z,I]=(0,r.useState)(!1),[A,G]=(0,r.useState)({}),te=async t=>{let a=await n({method:"post",url:`${l}/api/get-category-byid`,data:{id:t}});I(o=>!0),G(o=>a.data.data[0])},J=async t=>{let a=await n({method:"post",url:`${l}/api/del-category`,data:{id:t}});a.data.status?i.success("Successfully Deleted.",{theme:"dark"}):i.error(a.data.message,{theme:"dark"}),I(o=>!1),window.location.reload()},ae=async t=>{let a=await n({method:"post",url:`${l}/api/get-category-byid`,data:{id:t}});D(o=>!0),X(o=>a.data.data[0])},K=async t=>{var a,o,p,f,g,y,b,x;if(((a=c.current)==null?void 0:a.value)==null||((o=c.current)==null?void 0:o.value)==null||((p=c.current)==null?void 0:p.value)=="")w("Enter the name.");else if(((f=m.current)==null?void 0:f.value)==null||((g=m.current)==null?void 0:g.value)==null||((y=m.current)==null?void 0:y.value)=="")w("Enter the code.");else{let S=await n({method:"post",url:`${l}/api/upd-category`,data:{categoryName:(b=c.current)==null?void 0:b.value,categoryCode:(x=m.current)==null?void 0:x.value,id:t}});S.data.status?i.success("Successfully updated.",{theme:"dark"}):i.error(S.data.message,{theme:"dark"}),C(re=>!1),window.location.reload()}},[P,F]=(0,r.useState)(!1),u=(0,r.useRef)(null),v=(0,r.useRef)(null),Q=async()=>{var t,a,o,p,f,g,y,b;if(((t=u.current)==null?void 0:t.value)==null||((a=u.current)==null?void 0:a.value)==null||((o=u.current)==null?void 0:o.value)=="")w("Enter the name.");else if(((p=v.current)==null?void 0:p.value)==null||((f=v.current)==null?void 0:f.value)==null||((g=v.current)==null?void 0:g.value)=="")w("Enter the code.");else{let x=await n({method:"post",url:`${l}/api/add-category`,data:{categoryName:(y=u.current)==null?void 0:y.value,categoryCode:(b=v.current)==null?void 0:b.value}});x.data.status?i.success("Successfully added.",{theme:"dark"}):i.error(x.data.message,{theme:"dark"}),F(S=>!1),window.location.reload()}};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${V?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsxs)("div",{className:"text-white",children:[(0,e.jsxs)("p",{children:["ID : ",N.id]}),(0,e.jsxs)("p",{children:["Name : ",N.categoryName," "]}),(0,e.jsxs)("p",{children:["Code : ",N.categoryCode]})]}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{onClick:()=>D(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:h,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]})]})})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${z?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsx)("div",{className:"text-white",children:(0,e.jsxs)("p",{children:["Are you Sure you want to delete ",A.name,"?"]})}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>I(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:h,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:()=>J(A.id),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:H,className:"w-6"}),(0,e.jsx)("p",{children:"Delete"})]})]})]})})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${q?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsxs)("div",{className:"text-white",children:[(0,e.jsx)("input",{ref:c,type:"text",name:"name",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the name..",autoComplete:"off",value:E.categoryName,onChange:t=>k(a=>({...a,categoryName:t.target.value}))}),(0,e.jsx)("input",{ref:m,type:"text",name:"code",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the code..",autoComplete:"off",value:E.categoryCode,onChange:t=>k(a=>({...a,categoryCode:t.target.value}))})]}),d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>C(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:h,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:()=>K(E.id),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:B,className:"w-6"}),(0,e.jsx)("p",{children:"SUBMIT"})]})]})]})})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${P?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsxs)("div",{className:"text-white",children:[(0,e.jsx)("input",{ref:u,type:"text",name:"name",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the name..",autoComplete:"off"}),(0,e.jsx)("input",{ref:v,type:"text",name:"code",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the code..",autoComplete:"off"})]}),d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>F(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:h,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:Q,className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:B,className:"w-6"}),(0,e.jsx)("p",{children:"SUBMIT"})]})]})]})})}),(0,e.jsxs)("div",{className:"grow bg-[#1b2028] my-2 rounded-md p-4 w-full",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)("h1",{className:"text-white font-medium text-xl",children:"State"}),(0,e.jsx)("div",{className:"grow"})]}),(0,e.jsx)("div",{className:"w-full bg-slate-400 h-[1px] my-2"}),(0,e.jsxs)("div",{className:"overflow-x-hidden no-scrollbar",children:[(0,e.jsxs)("div",{className:"bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:"Id"}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-44",children:"State Name"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-60",children:"Country"})]}),U.map((t,a)=>(0,e.jsxs)("div",{className:"bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:t.id}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-44",children:t.name}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-60",children:t.country.name})]},a))]}),(0,e.jsx)(O,{})]})]})},_=Z;export{_ as default,Y as links};
