import{a as N,b as u}from"/build/_shared/chunk-BI64PZPG.js";import{a as b}from"/build/_shared/chunk-QJYRTBXE.js";import{a as d,b as n}from"/build/_shared/chunk-UNEBNKOC.js";import{O as v,a as i,i as p,z as g}from"/build/_shared/chunk-LBP4PHVR.js";import{l as w}from"/build/_shared/chunk-CFMSPZYJ.js";import{c,e as B,f as x}from"/build/_shared/chunk-ZZL6GC2B.js";var s=c(B());var e=c(x());function L(){return[{rel:"stylesheet",href:b}]}var S=()=>{let y=w().user,[h,f]=(0,s.useState)(!1),[a,k]=(0,s.useState)({}),[T,$]=(0,s.useState)(!1),H=(0,s.useRef)(null),R=(0,s.useRef)(null),[A,l]=(0,s.useState)(!1),[m,C]=(0,s.useState)({}),I=async t=>{let o=await d({method:"post",url:`${n}/api/user-search`,data:{id:t}});l(r=>!0),C(r=>o.data.data[0])},E=async(t,o)=>{let r=await d({method:"post",url:`${n}/api/status-user`,data:{id:t,status:o==1?0:1}});r.data.status?u.success("Successfully updated.",{theme:"dark"}):u.error(r.data.message,{theme:"dark"}),l(U=>!1),window.location.reload()},D=async t=>{let o=await d({method:"post",url:`${n}/api/user-search`,data:{id:t}});f(r=>!0),k(r=>o.data.data[0])};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center py-20 overflow-x-scroll ${h?"grid":"hidden"}`,children:(0,e.jsxs)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80",children:[(0,e.jsx)("div",{className:"w-full grid place-items-center mb-4",children:(0,e.jsx)("img",{src:a.pic==null||a.pic==null||a.pic==""||a.pic=="0"?"/images/avatar/user.png":a.pic,alt:"avatar",className:"w-40 h-40 object-cover object-center rounded-md"})}),(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsxs)("div",{className:"text-white",children:[(0,e.jsxs)("p",{children:["ID : ",a.id]}),(0,e.jsxs)("p",{children:["Name : ",a.userName," "]}),(0,e.jsxs)("p",{children:["Nick Name : ",a.nickName," "]}),(0,e.jsxs)("p",{children:["Code : ",a.bio]}),(0,e.jsxs)("p",{children:["Address : ",a.address]}),(0,e.jsxs)("p",{children:["contact : ",a.contact]}),(0,e.jsxs)("p",{children:["Date of Birth : ",new Date(a.dob).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})]}),(0,e.jsxs)("p",{children:["Email : ",a.email]}),(0,e.jsxs)("p",{children:["Bio : ",a.bio]}),(0,e.jsxs)("p",{children:["Career History : ",a.careerHistory]}),(0,e.jsxs)("p",{children:["Rating : ",Number(a.rating).toString().split(".")[0]]})]}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsxs)("div",{onClick:()=>f(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(i,{icon:v,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]})})]})]})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${A?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsx)("div",{className:"text-white",children:(0,e.jsxs)("p",{children:["Are you Sure you want to change the status of ",m.userName," user?"]})}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>l(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(i,{icon:v,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:()=>E(m.id,m.status.code),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(i,{icon:p,className:"w-6"}),(0,e.jsx)("p",{children:"CHANGE"})]})]})]})})}),(0,e.jsxs)("div",{className:"grow bg-[#1b2028] my-2 rounded-md p-4 w-full",children:[(0,e.jsx)("h1",{className:"text-white font-medium text-xl",children:"User"}),(0,e.jsx)("div",{className:"w-full bg-slate-400 h-[1px] my-2"}),(0,e.jsxs)("div",{className:"overflow-x-hidden no-scrollbar",children:[(0,e.jsxs)("div",{className:"bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:"Id"}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-44",children:"Name"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-24",children:"Status"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-32",children:"Action"})]}),y.map((t,o)=>(0,e.jsxs)("div",{className:"bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:t.id}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-44",children:t.userName}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-24",children:Number(t.userStatus)?(0,e.jsx)("div",{className:"w-16 py-1 text-white text-xs bg-green-500 text-center rounded-md font-medium",children:"ACTIVE"}):(0,e.jsx)("div",{className:"w-16 py-1 text-white text-xs bg-rose-500 text-center rounded-md font-medium",children:"INACTIVE"})}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("div",{className:"w-32 flex text-bold text-md gap-4",children:[(0,e.jsx)("div",{className:"text-emerald-500 cursor-pointer",children:(0,e.jsx)(i,{icon:g,onClick:()=>D(t.id)})}),(0,e.jsx)("div",{className:"text-cyan-500 cursor-pointer",children:(0,e.jsx)(i,{icon:p,onClick:()=>I(t.id)})})]})]},o))]}),(0,e.jsx)(N,{})]})]})},F=S;export{F as default,L as links};
