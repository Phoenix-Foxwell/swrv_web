import{b as N,l as n}from"/build/_shared/chunk-P4VL4XDR.js";import{a as y,b as g}from"/build/_shared/chunk-WLYSEPGK.js";import{e as x,g as A,h as v}from"/build/_shared/chunk-EUC6ZTEW.js";var t=x(A());var e=x(v());var T=()=>{let r=n().user[0],w=n().id,H=n().user[0].role.code!=10,[a,L]=(0,t.useState)(""),[R,h]=(0,t.useState)(null),l=(0,t.useRef)(null),o=(0,t.useRef)(null),s=(0,t.useRef)(null),c=(0,t.useRef)(null),u=(0,t.useRef)(null),d=(0,t.useRef)(null),b=(0,t.useRef)(null),i=(0,t.useRef)(null),m=(0,t.useRef)(null),p=(0,t.useRef)(null),f=N();(0,t.useEffect)(()=>{H&&f(`/home/brandedit/${r.brand.id}`),l.current.value=r.userName,o.current.value=r.knownAs,s.current.value=r.website,c.current.value=r.address,u.current.value=r.pic,d.current.value=r.bio,b.current.value=r.personalHistory,i.current.value=r.careerHistory,m.current.value=r.ifsc,p.current.value=r.acNo},[]);let E=async()=>{let k=await y({method:"post",url:`${g}/api/edit-user`,data:{id:w,update:{userName:l.current.value,userKnownAs:o.current.value,userWebUrl:s.current.value,userFullPostalAddress:c.current.value,userPicUrl:u.current.value,userBioInfo:d.current.value,personalHistory:b.current.value,careerHistory:i.current.value,ifsc:m.current.value,acNo:p.current.value}}});k.data.status==!1?L(k.data.message):f(-1)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"w-full mt-6 bg-white rounded-lg shadow-xl px-6 py-4",children:[(0,e.jsx)("h1",{className:"text-black font-medium text-xl",children:"Edit User"}),(0,e.jsx)("div",{className:"w-full bg-slate-800 h-[1px] my-2"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"User Name"}),(0,e.jsx)("input",{ref:l,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"User Known As"}),(0,e.jsx)("input",{ref:o,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md resize-none"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"User Web Page"}),(0,e.jsx)("input",{ref:s,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"User Full Address"}),(0,e.jsx)("textarea",{ref:c,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md h-32 resize-none"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"User Pic Link"}),(0,e.jsx)("input",{ref:u,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"User Bio Info"}),(0,e.jsx)("textarea",{ref:d,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md h-32 resize-none"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"User Personal History"}),(0,e.jsx)("textarea",{ref:b,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md h-32 resize-none"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"User Career History"}),(0,e.jsx)("textarea",{ref:i,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md h-32 resize-none"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"Bank Swift/Routing/Ifsc No."}),(0,e.jsx)("input",{ref:m,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md"}),".",(0,e.jsx)("p",{className:"text-black font-semibold text-xl",children:"Bank AC No."}),(0,e.jsx)("input",{ref:p,className:"p-2 w-96 outline-none bg-transparent text-black border-2 border-black block my-4 rounded-md"}),a==""||a==null||a==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:a}),(0,e.jsx)("button",{className:"text-white py-2 px-4 rounded-md bg-cyan-500 w-96 text-center",onClick:E,children:"UPDATE"})]})})},U=T;export{U as default};