import{a as J}from"/build/_shared/chunk-XTP3C3EQ.js";import{a as G}from"/build/_shared/chunk-NJKAJ7NJ.js";import{a as v}from"/build/_shared/chunk-KQNGW2SI.js";import"/build/_shared/chunk-5ROUF77C.js";import{V as b,a as x}from"/build/_shared/chunk-6AVPJ36M.js";import{a as q,b as X}from"/build/_shared/chunk-WI5Z27OJ.js";import{d as $,l as W}from"/build/_shared/chunk-P4VL4XDR.js";import{e as N,g as te,h as P}from"/build/_shared/chunk-EUC6ZTEW.js";var n=N(te());var e=N(P());var ne=()=>{let y=W(),E=y.user.id,ae=y.user.role.code=="50",[p,l]=(0,n.useState)(null),[f,oe]=(0,n.useState)(null),K=J(t=>t.setIndex),h=(0,n.useRef)(null),i=(0,n.useRef)(null),u=(0,n.useRef)(null),d=(0,n.useRef)(null),m=(0,n.useRef)(null),w=(0,n.useRef)(null),A=(0,n.useRef)(null),C=(0,n.useRef)(null),[a,Q]=(0,n.useState)(),[o,Y]=(0,n.useState)(),[r,Z]=(0,n.useState)(),ee=t=>{let s=t.target.value.replace(/[^0-9]/g,"");t.target.value=s};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"p-8 w-full",children:[(0,e.jsx)("h1",{className:"text-2xl text-black font-bold",children:"Documents"}),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"hidden",children:[(0,e.jsx)("input",{type:"file",accept:"*/*",ref:w,onChange:t=>{parseInt((t.target.files[0].size/1024/1024).toString())<4?(l(null),Q(s=>t.target.files[0])):l("File size must be less then 4 mb")}}),(0,e.jsx)("input",{type:"file",accept:"*/*",ref:A,onChange:t=>{parseInt((t.target.files[0].size/1024/1024).toString())<4?(l(null),Y(s=>t.target.files[0])):l("File size must be less then 4 mb")}}),(0,e.jsx)("input",{type:"file",accept:"*/*",ref:C,onChange:t=>{parseInt((t.target.files[0].size/1024/1024).toString())<4?(l(null),Z(s=>t.target.files[0])):l("File size must be less then 4 mb")}})]}),(0,e.jsxs)("div",{className:"flex gap-4 my-2",children:[(0,e.jsx)("div",{className:"w-full text-center bg-gray-100 text-lg font-semibold text-gray-700 rounded-md py-1 cursor-pointer",onClick:()=>{var t;return(t=w.current)==null?void 0:t.click()},children:a==null?(0,e.jsxs)(e.Fragment,{children:["Add Doc ",(0,e.jsx)(x,{className:"mx-2",icon:b})]}):a.name.length<25?a.name:`${a.name.toString().slice(0,25)}...`}),a!=null?(0,e.jsx)("a",{target:"_blank",href:URL.createObjectURL(a),className:"text-white text-center px-4 text-lx font-semibold rounded-md bg-cyan-500  py-2",children:"VIEW"}):null]}),(0,e.jsxs)("div",{className:"flex gap-4 my-2",children:[(0,e.jsx)("div",{className:"w-full text-center bg-gray-100 text-lg font-semibold text-gray-700 rounded-md py-1 cursor-pointer",onClick:()=>{var t;return(t=A.current)==null?void 0:t.click()},children:o==null?(0,e.jsxs)(e.Fragment,{children:["Add Doc ",(0,e.jsx)(x,{className:"mx-2",icon:b})]}):o.name.length<25?o.name:`${o.name.toString().slice(0,25)}...`}),o!=null?(0,e.jsx)("a",{target:"_blank",href:URL.createObjectURL(o),className:"text-white text-center px-4 text-lx font-semibold rounded-md bg-cyan-500  py-2",children:"VIEW"}):null]}),(0,e.jsxs)("div",{className:"flex gap-4 my-2",children:[(0,e.jsx)("div",{className:"w-full text-center bg-gray-100 text-lg font-semibold text-gray-700 rounded-md py-1 cursor-pointer",onClick:()=>{var t;return(t=C.current)==null?void 0:t.click()},children:r==null?(0,e.jsxs)(e.Fragment,{children:["Add Doc ",(0,e.jsx)(x,{className:"mx-2",icon:b})]}):r.name.length<25?r.name:`${r.name.toString().slice(0,25)}...`}),r!=null?(0,e.jsx)("a",{target:"_blank",href:URL.createObjectURL(r),className:"text-white text-center px-4 text-lx font-semibold rounded-md bg-cyan-500 py-2",children:"VIEW"}):null]}),(0,e.jsx)("div",{className:"w-full h-[2px] bg-gray-400 my-4"})]}),(0,e.jsx)("h1",{className:"text-2xl text-black font-bold",children:"Bank Information"}),(0,e.jsxs)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:["Bank Name ",(0,e.jsx)("span",{className:"text-rose-500 text-2xl font-semibold",children:"*"})]}),(0,e.jsx)("input",{ref:i,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"}),(0,e.jsxs)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:["Branch Name ",(0,e.jsx)("span",{className:"text-rose-500 text-2xl font-semibold",children:"*"})]}),(0,e.jsx)("input",{ref:u,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"}),(0,e.jsxs)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:["IFSC/SWIFT/RTN CODE ",(0,e.jsx)("span",{className:"text-rose-500 text-2xl font-semibold",children:"*"})]}),(0,e.jsx)("input",{ref:d,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"}),(0,e.jsxs)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:["Account Number ",(0,e.jsx)("span",{className:"text-rose-500 text-2xl font-semibold",children:"*"})]}),(0,e.jsx)("input",{ref:m,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",onInput:ee}),p==""||p==null||p==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:p}),f==""||f==null||f==null?null:(0,e.jsx)("div",{className:"bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4",children:f}),(0,e.jsx)("div",{onClick:async()=>{var t,c,s,k,I,F,L,S,T,z,H,B,M,O,R,U;if(((t=i.current)==null?void 0:t.value)==null||((c=i.current)==null?void 0:c.value)==null||((s=i.current)==null?void 0:s.value)=="")l("Enter Bank name.");else if(((k=u.current)==null?void 0:k.value)==null||((I=u.current)==null?void 0:I.value)==null||((F=u.current)==null?void 0:F.value)=="")l("Enter Branch name.");else if(((L=d.current)==null?void 0:L.value)==null||((S=d.current)==null?void 0:S.value)==null||((T=d.current)==null?void 0:T.value)=="")l("Enter IFSC code.");else if(((z=m.current)==null?void 0:z.value)==null||((H=m.current)==null?void 0:H.value)==null||((B=m.current)==null?void 0:B.value)=="")l("Enter Account Number.");else{let _=await v(a),D=await v(o),j=await v(r),g={id:E,bankName:(M=i.current)==null?void 0:M.value,branchName:(O=u.current)==null?void 0:O.value,ifsc:(R=d.current)==null?void 0:R.value,acNo:(U=m.current)==null?void 0:U.value};_.status&&(g.doc1=_.data),D.status&&(g.doc2=D.data),j.status&&(g.doc3=j.data);let V=await q({method:"post",url:`${X}/api/updateuser`,data:g,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});if(V.data.status==!1)return l(V.data.message);K(5),h.current.click()}},children:(0,e.jsx)(G,{text:"Next",textColor:"text-white",width:"w-full",background:"bg-primary",fontwidth:"font-bold"})}),(0,e.jsxs)($,{method:"post",className:"hidden",children:[(0,e.jsx)("input",{type:"hidden",name:"id",value:E.toString()}),(0,e.jsx)("button",{ref:h,name:"submit",children:"Submit"})]})]})})},le=ne;export{le as default};
