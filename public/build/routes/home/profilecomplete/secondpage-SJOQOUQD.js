import{a as B}from"/build/_shared/chunk-XTP3C3EQ.js";import{a as V}from"/build/_shared/chunk-7JVNITDC.js";import{a as X}from"/build/_shared/chunk-NJKAJ7NJ.js";import{a as M,b as P}from"/build/_shared/chunk-WI5Z27OJ.js";import"/build/_shared/chunk-5ROUF77C.js";import{N as g,a as p}from"/build/_shared/chunk-6AVPJ36M.js";import{b as F,d as I,l as H}from"/build/_shared/chunk-P4VL4XDR.js";import{e as x,g as Q,h as L}from"/build/_shared/chunk-EUC6ZTEW.js";var C=x(V()),l=x(Q());var e=x(L());var W=()=>{let u=H(),k=u.user.id,D=u.currency,R=u.category,j=u.languages,A=u.market,q=B(t=>t.setIndex),Z=F(),[f,i]=(0,l.useState)(null),[d,N]=(0,l.useState)([]),[n,E]=(0,l.useState)([]),[s,$]=(0,l.useState)([]),[m,S]=(0,l.useState)([]),[c,O]=(0,l.useState)([]),[U,b]=(0,l.useState)(!1),[z,y]=(0,l.useState)(!1),[G,w]=(0,l.useState)(!1),[J,h]=(0,l.useState)(!1),[K,v]=(0,l.useState)(!1),T=(0,l.useRef)(null);return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:"p-8 w-full mx-auto",children:(0,e.jsxs)("div",{className:"w-full max-w-[400px] mx-auto",children:[(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg mt-4",children:"Main market"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:m.map((t,o)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.name} - [${t.code}]`})},o))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{h(!0)},children:(0,e.jsx)(p,{icon:g})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${J?"":"hidden"} grid place-items-center bg-red-500`,onClick:t=>h(!1),children:(0,e.jsxs)("div",{className:"bg-white p-10 cursor-pointer",onClick:t=>t.stopPropagation(),children:[(0,e.jsx)("div",{className:"overflow-y-scroll no-scrollbar w-80 h-[350px]",children:A.map((t,o)=>(0,e.jsxs)("h1",{onClick:()=>{if(m.includes(t)){let r=m.filter(a=>a!=t);S(r)}else S([t])},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${m.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.code," - ",t.name]},o))}),(0,e.jsx)("div",{onClick:()=>{h(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",children:"Close"})]})}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Other markets"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:c.map((t,o)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.name} - [${t.code}]`})},o))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{v(!0)},children:(0,e.jsx)(p,{icon:g})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${K?"":"hidden"} grid place-items-center`,onClick:t=>v(!1),children:(0,e.jsxs)("div",{className:"bg-white p-10 cursor-pointer",onClick:t=>t.stopPropagation(),children:[(0,e.jsx)("div",{className:"w-80 overflow-y-scroll no-scrollbar h-[350px]",children:A.map((t,o)=>(0,e.jsxs)("h1",{onClick:()=>{if(c.includes(t)){let r=c.filter(a=>a!=t);O(r)}else O([...c,t])},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${c.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.code," - ",t.name," "]},o))}),(0,e.jsx)("div",{onClick:()=>{v(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",children:"Close"})]})}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Category"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:n.map((t,o)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.categoryName} - [${t.categoryCode}]`})},o))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{y(!0)},children:(0,e.jsx)(p,{icon:g})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${z?"":"hidden"} grid place-items-center`,onClick:t=>y(!1),children:(0,e.jsxs)("div",{className:"bg-white p-10 cursor-pointer",onClick:t=>t.stopPropagation(),children:[(0,e.jsx)("div",{className:"w-80 overflow-y-scroll no-scrollbar h-[350px]",children:R.map((t,o)=>(0,e.jsxs)("h1",{onClick:()=>{if(n.includes(t)){let r=n.filter(a=>a!=t);E(r)}else E([...n,t])},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${n.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.categoryCode," - ",t.categoryName,"   "]},o))}),(0,e.jsx)("div",{onClick:()=>{y(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",children:"Close"})]})}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Account currency"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:d.map((t,o)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-32",children:`${t.currencyName} - [${t.currencyCode}]`})},o))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{b(!0)},children:(0,e.jsx)(p,{icon:g})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${U?"":"hidden"} grid place-items-center`,onClick:t=>b(!1),children:(0,e.jsxs)("div",{className:"bg-white p-10 cursor-pointer",onClick:t=>t.stopPropagation(),children:[(0,e.jsx)("div",{className:"overflow-y-scroll no-scrollbar h-[350px]",children:D.map((t,o)=>(0,e.jsxs)("h1",{onClick:()=>{if(d.includes(t)){let r=d.filter(a=>a!=t);N(r)}else N([t])},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${d.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.currencyCode," - ",t.currencyName,"  ",C.default.decode(t.currencyAsciiSymbol)," "]},o))}),(0,e.jsx)("div",{onClick:()=>{b(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",children:"Close"})]})}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Languages"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:s.map((t,o)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-32",children:`${t.languageName} - [${t.languageCode}]`})},o))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{w(!0)},children:(0,e.jsx)(p,{icon:g})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${G?"":"hidden"} grid place-items-center`,onClick:t=>w(!1),children:(0,e.jsxs)("div",{className:"bg-white p-10 cursor-pointer",onClick:t=>t.stopPropagation(),children:[(0,e.jsx)("div",{className:"w-80 overflow-y-scroll no-scrollbar h-[350px]",children:j.map((t,o)=>(0,e.jsxs)("h1",{onClick:()=>{if(s.includes(t)){let r=s.filter(a=>a!=t);$(r)}else $([...s,t])},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${s.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.languageCode," - ",t.languageName,"  ",C.default.decode(t.languageAsciiSymbol)," "]},o))}),(0,e.jsx)("div",{onClick:()=>{w(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",children:"Close"})]})}),f==""||f==null||f==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:f}),(0,e.jsx)("div",{onClick:async()=>{let t=o=>{let r="";for(let a=0;a<o.length;a++)a==o.length-1?r+=o[a].id:r+=o[a].id+",";return r};if(d.length==0)i("Select the currecny.");else if(n.length==0)i("Select the category.");else if(s.length==0)i("Select the languages.");else if(m.length==0)i("Select the main market.");else if(c.length==0)i("Select the other markder");else{let o={id:k,currencyId:d[0].id,languages:t(s),categories:t(n),marketId:m[0].id,markets:t(c)},r=await M({method:"post",url:`${P}/api/updateuser`,data:o,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});if(r.data.status==!1)return i(r.data.message);q(3),T.current.click()}},children:(0,e.jsx)(X,{text:"Next",textColor:"text-white",width:"w-full",background:"bg-primary",fontwidth:"font-bold"})}),(0,e.jsxs)(I,{method:"post",className:"hidden",children:[(0,e.jsx)("input",{type:"hidden",name:"id",value:k.toString()}),(0,e.jsx)("button",{ref:T,name:"submit",children:"Submit"})]})]})})})},Y=W;export{Y as default};
