import{a as N,b as u}from"/build/_shared/chunk-4I5XS2UB.js";import{a as y}from"/build/_shared/chunk-4R5XGR2B.js";import{P as v,a as i,i as p,z as b}from"/build/_shared/chunk-A6XXWJXG.js";import{h as g,l as w}from"/build/_shared/chunk-P4VL4XDR.js";import{a as d,b as n}from"/build/_shared/chunk-WLYSEPGK.js";import{e as c,g as B,h as x}from"/build/_shared/chunk-EUC6ZTEW.js";var s=c(B());var e=c(x());function S(){return[{rel:"stylesheet",href:y}]}var F=()=>{let h=w().user,[k,f]=(0,s.useState)(!1),[a,A]=(0,s.useState)({}),[$,H]=(0,s.useState)(!1),V=(0,s.useRef)(null),R=(0,s.useRef)(null),[C,l]=(0,s.useState)(!1),[m,I]=(0,s.useState)({}),E=async t=>{let o=await d({method:"post",url:`${n}/api/user-search`,data:{id:t}});l(r=>!0),I(r=>o.data.data[0])},L=async(t,o)=>{let r=await d({method:"post",url:`${n}/api/status-user`,data:{id:t,status:o==1?0:1}});r.data.status?u.success("Successfully updated.",{theme:"dark"}):u.error(r.data.message,{theme:"dark"}),l(U=>!1),window.location.reload()},D=async t=>{let o=await d({method:"post",url:`${n}/api/user-search`,data:{id:t}});f(r=>!0),A(r=>o.data.data[0])};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center py-20 overflow-x-scroll ${k?"grid":"hidden"}`,children:(0,e.jsxs)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80",children:[(0,e.jsx)("div",{className:"w-full grid place-items-center mb-4",children:(0,e.jsx)("img",{src:a.pic==null||a.pic==null||a.pic==""||a.pic=="0"?"/images/avatar/user.png":a.pic,alt:"avatar",className:"w-40 h-40 object-cover object-center rounded-md"})}),(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsxs)("div",{className:"text-white",children:[(0,e.jsxs)("p",{children:["ID : ",a.id]}),(0,e.jsxs)("p",{children:["Name : ",a.userName," "]}),(0,e.jsxs)("p",{children:["Nick Name : ",a.nickName," "]}),(0,e.jsxs)("p",{children:["Code : ",a.bio]}),(0,e.jsxs)("p",{children:["Address : ",a.address]}),(0,e.jsxs)("p",{children:["contact : ",a.contact]}),(0,e.jsxs)("p",{children:["Date of Birth :"," ",new Date(a.dob).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})]}),(0,e.jsxs)("p",{children:["Email : ",a.email]}),(0,e.jsxs)("p",{children:["Bio : ",a.bio]}),(0,e.jsxs)("p",{children:["Career History : ",a.careerHistory]}),(0,e.jsxs)("p",{children:["Rating : ",Number(a.rating).toString().split(".")[0]]})]}),(0,e.jsx)("div",{className:"grid place-items-center w-full",children:(0,e.jsx)(g,{to:`/admin/home/userhandel/${a.id}`,className:"py-2 px-6 rounded-md border border-green-400 bg-green-500 bg-opacity-10 text-green-500 cursor-pointer",children:"View Insights"})}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsxs)("div",{onClick:()=>f(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(i,{icon:v,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]})})]})]})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${C?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsx)("div",{className:"text-white",children:(0,e.jsxs)("p",{children:["Are you Sure you want to change the status of ",m.userName," ","user?"]})}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>l(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(i,{icon:v,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:()=>L(m.id,m.status.code),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(i,{icon:p,className:"w-6"}),(0,e.jsx)("p",{children:"CHANGE"})]})]})]})})}),(0,e.jsxs)("div",{className:"grow bg-[#1b2028] my-2 rounded-md p-4 w-full",children:[(0,e.jsx)("h1",{className:"text-white font-medium text-xl",children:"User"}),(0,e.jsx)("div",{className:"w-full bg-slate-400 h-[1px] my-2"}),(0,e.jsxs)("div",{className:"overflow-x-hidden no-scrollbar",children:[(0,e.jsxs)("div",{className:"bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:"Id"}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-44",children:"Name"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-24",children:"Status"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-32",children:"Action"})]}),h.map((t,o)=>(0,e.jsxs)("div",{className:"bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:t.id}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-44",children:t.userName}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-24",children:Number(t.userStatus)?(0,e.jsx)("div",{className:"w-16 py-1 text-white text-xs bg-green-500 text-center rounded-md font-medium",children:"ACTIVE"}):(0,e.jsx)("div",{className:"w-16 py-1 text-white text-xs bg-rose-500 text-center rounded-md font-medium",children:"INACTIVE"})}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("div",{className:"w-32 flex text-bold text-md gap-4",children:[(0,e.jsx)("div",{className:"text-emerald-500 cursor-pointer",children:(0,e.jsx)(i,{icon:b,onClick:()=>D(t.id)})}),(0,e.jsx)("div",{className:"text-cyan-500 cursor-pointer",children:(0,e.jsx)(i,{icon:p,onClick:()=>E(t.id)})})]})]},o))]}),(0,e.jsx)(N,{})]})]})},T=F;export{T as default,S as links};