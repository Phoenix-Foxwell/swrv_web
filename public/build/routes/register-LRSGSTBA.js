import{a as S,b as O,c as P}from"/build/_shared/chunk-NIGJXJWR.js";import{a as v}from"/build/_shared/chunk-NJKAJ7NJ.js";import{a as I,b as E}from"/build/_shared/chunk-VJBGBMKQ.js";import{a as L}from"/build/_shared/chunk-AVOLL3DH.js";import"/build/_shared/chunk-2LSTMGAV.js";import"/build/_shared/chunk-5ROUF77C.js";import{a as x,j as h,z as b}from"/build/_shared/chunk-KV6SFFWO.js";import{b as A,d as N,h as C,l as k,m as B}from"/build/_shared/chunk-P4VL4XDR.js";import{e as i,g as M,h as p}from"/build/_shared/chunk-EUC6ZTEW.js";var t=i(M());var e=i(p()),R=o=>{let r=A(),[a,c]=(0,t.useState)(!1),n=(0,t.useRef)(null);(0,t.useEffect)(()=>{o.isBrand?(n.current.value="brand",c(!0)):(n.current.value="inf",c(!1))},[]);let[m,y]=(0,t.useState)(null),[f,$]=(0,t.useState)(!1),T=()=>{$(!f)},[u,F]=(0,t.useState)(!1),j=()=>{F(!u)},H=async(g,l)=>{let w={email:g,password:l,"confirm-password":l,isBrand:"0",isInfluencer:"1"},s=await I({method:"post",url:`${E}/api/register`,data:w,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});s.data.status?r(`/extra/socialregister/${s.data.data.id}`):y(s.data.message)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"w-full px-6 sm:px-16 grid  lg:grid-cols-3  md:w-4/6 lg:w-full mx-auto mb-20 mt-4",children:[(0,e.jsxs)("div",{className:"hidden flex-col lg:flex",children:[(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("img",{src:"/images/avatar/login.png",alt:"err",className:"justify-self-end w-[250px] h-[400px]"})]})]}),(0,e.jsxs)("div",{className:"bg-white rounded-xl shadow-xl py-6 px-10",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)("div",{className:"w-full",onClick:()=>{n.current.value="inf",c(!1)},children:(0,e.jsx)(v,{width:"w-full",text:"Influencer",background:`${a?"":"bg-secondary"}`,textColor:`${a?"text-primary":"text-white"}`,borderColor:`${a?"border-primary":""}`,fontwidth:"font-bold"})}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-full",onClick:()=>{n.current.value="brand",c(!0)},children:(0,e.jsx)(v,{width:"w-full",text:"Brand",textColor:`${a?"text-white":"text-primary"}`,background:`${a?"bg-secondary":""}`,borderColor:`${a?"":"border-primary"}`,fontwidth:"font-bold"})})]}),(0,e.jsxs)(N,{method:"post",children:[(0,e.jsx)("input",{name:"cat",ref:n,type:"hidden"}),(0,e.jsx)("p",{className:"text-black text-left font-bold text-lg mt-4",children:"Join"}),(0,e.jsxs)("p",{className:"text-black text-left font-normal text-lg",children:[" ",a?"Brand Email":"Email"]}),(0,e.jsx)("input",{name:"email",type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",placeholder:"example@mail.com"}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg mt-4",children:"Password"}),(0,e.jsxs)("div",{className:"bg-gray-200 rounded-md px-4 py-2 flex",children:[(0,e.jsx)("input",{name:"password",type:f?"text":"password",className:"bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full",placeholder:"8 character"}),(0,e.jsx)("div",{className:"text-gray-600 text-center px-1 rounded-md shadow-lg text-md cursor-pointer",onClick:T,children:(0,e.jsx)(x,{icon:f?b:h})})]}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg mt-4",children:"Confirm password"}),(0,e.jsxs)("div",{className:"bg-gray-200 rounded-md px-4 py-2 flex",children:[(0,e.jsx)("input",{name:"repassword",type:u?"text":"password",className:"bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full",placeholder:"8 character"}),(0,e.jsx)("div",{className:"text-gray-600 text-center px-1 rounded-md shadow-lg text-md cursor-pointer",onClick:j,children:(0,e.jsx)(x,{icon:u?b:h})})]}),a?null:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:"grid place-items-center py-4",children:(0,e.jsxs)("div",{className:"flex content-center gap-4",children:[(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  allign-center",children:"Login with"})}),(0,e.jsx)("div",{onClick:async()=>{var s;let g=new S,l=await O(P,g),w=((s=l.user.displayName)==null?void 0:s.trim().split(" ").join("").toLowerCase().trim())+"SWRV123@#";try{await H(l.user.email,w)}catch(D){y(D.toString())}},children:(0,e.jsx)("img",{src:"/images/icons/google.png",alt:"error",className:"w-10 h-10 cursor-pointer"})})]})})}),m==""||m==null||m==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:m}),o.message&&(0,e.jsx)("p",{className:"w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500",children:o.message}),(0,e.jsx)("div",{className:"h-4"}),(0,e.jsx)("button",{className:"w-full inline black rounded-lg bg-primary shadow-lg text-center font-bold text-white text-md py-2 ",children:"Create Account"}),(0,e.jsxs)("div",{className:"flex gap-4 content-start mt-4",children:[(0,e.jsx)("div",{children:(0,e.jsx)("input",{type:"checkbox",name:"check1"})}),(0,e.jsx)("label",{className:"text-left text-[10px] text-black font-normal",children:"I agree with Terms of use and acknowledge that my personal data is being collected and processed in accordance with Privacy policy"})]}),(0,e.jsxs)("div",{className:"flex gap-4 mt-4 items-start",children:[(0,e.jsx)("div",{children:(0,e.jsx)("input",{type:"checkbox",name:"check2"})}),(0,e.jsx)("p",{className:"text-left text-[10px] text-black font-normal",children:"Also, I confirm I am of eligible age"})]}),(0,e.jsxs)("div",{className:"text-black text-left font-normal text-lg mt-8 flex flex-wrap gap-x-4 w-full",children:[(0,e.jsx)("p",{className:" whitespace-nowrap",children:"I\u2019m already registered."}),(0,e.jsx)(C,{to:"/login",className:"block  whitespace-nowrap",children:(0,e.jsx)("span",{className:"font-bold",children:"Let me Log in"})})]})]})]}),(0,e.jsx)("div",{className:"hidden lg:block"})]})})};var d=i(p());var U=()=>{let o=k(),r=B();return(0,d.jsxs)("div",{className:"bg-[#eeeeee] min-h-screen",children:[(0,d.jsx)(L,{}),(0,d.jsx)(R,{isBrand:!!o.brand,message:r==null?void 0:r.message})]})},X=U;export{X as default};
