import{a as l}from"/build/_shared/chunk-E52NATUX.js";import{a as p}from"/build/_shared/chunk-2MWJU3AL.js";import"/build/_shared/chunk-DG4O4KXK.js";import{N as B,W as $,a as u}from"/build/_shared/chunk-6AX3ZL3J.js";import{b as I}from"/build/_shared/chunk-Q24O5NQK.js";import{d as c,f as _,g as k}from"/build/_shared/chunk-EO7COENX.js";var s=c(_());var e=c(k()),j=()=>{let[f,z]=(0,s.useState)(""),[g,A]=(0,s.useState)(""),F=l(t=>t.mendtion),L=l(t=>t.hashtag),P=l(t=>t.dos),S=l(t=>t.donts),[m,o]=(0,s.useState)(null),[d,x]=(0,s.useState)(null),v=l(t=>t.image),T=l(t=>t.addImage),M=l(t=>t.removeImage),n=(0,s.useRef)(null),H=l(t=>t.brandinfo),R=l(t=>t.setBrandinfo),i=(0,s.useRef)(null),U=l(t=>t.campaginPurpose),Y=l(t=>t.setCampaginPurpose),h=(0,s.useRef)(null);(0,s.useEffect)(()=>{n.current.value=H,i.current.value=U},[]);let N=I();return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"flex gap-x-4 flex-col lg:flex-row",children:[(0,e.jsxs)("div",{className:"bg-white shadow-xl rounded-xl px-8 py-4 mt-4",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-medium",children:"Create campaign"}),(0,e.jsx)("p",{className:"text-primary text-md font-normal",children:"The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population."}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Brand info"}),(0,e.jsx)("textarea",{ref:n,className:"p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none",onChange:t=>z(t.target.value)}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Campaign purpose"}),(0,e.jsx)("textarea",{ref:i,className:"p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none",onChange:t=>A(t.target.value)}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Mood boards"}),(0,e.jsx)("div",{className:"hidden",children:(0,e.jsx)("input",{type:"file",accept:"image/*",ref:h,onChange:t=>{parseInt((t.target.files[0].size/1024/1024).toString())<4?(x(null),T(t.target.files[0])):x("Image file size must be less then 4 mb")}})}),(0,e.jsxs)("div",{className:"flex gap-x-4  overflow-x-scroll no-scrollbar w-[300px] lg:w-[600px] md:w-[400px]",children:[v.map((t,a)=>{var r=URL.createObjectURL(t);return(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"w-32 h-32 bg-gray-200 rounded-xl grid place-items-center relative",children:[(0,e.jsx)("div",{className:"top-0 left-0 absolute h-full w-full",children:(0,e.jsx)("img",{src:r,alt:"error",className:"w-full h-full rounded-xl object-cover"})}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:()=>{M(t)},children:(0,e.jsx)(u,{className:"text-red-500 font-bold text-xl top-0 right-0 absolute",icon:$})})]})},a)}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"w-32 h-32 bg-gray-200 rounded-xl grid place-items-center cursor-pointer",onClick:()=>{var t;(t=h.current)==null||t.click()},children:(0,e.jsx)(u,{icon:B,className:"text-gray-400 text-3xl font-bold text-center"})})})]}),d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"lg:w-80 bg-white shadow-lx rounded-xl p-4 mt-4",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-medium",children:"Campaign Summary"}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Brand info"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:f==""?"--------":f})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Campaign purpose"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:g==""?"--------":g})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Hashtags"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:L.map((t,a,r)=>`${t}${r.length==a?"":","}`)})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Mentions"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:F.map((t,a,r)=>`${t}${r.length==a?"":","}`)})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"You should do:"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:P.map((t,a,r)=>`${t}${r.length==a?"":","}`)})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"You should don't:"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:S.map((t,a,r)=>`${t}${r.length==a?"":","}`)})]}),m==""||m==null||m==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:m}),(0,e.jsxs)("div",{className:"flex w-full",children:[(0,e.jsx)("div",{onClick:()=>{N(-1)},className:"w-full",children:(0,e.jsx)(p,{text:"Back",textColor:"text-black",background:"bg-gray-100",width:"w-full",fontwidth:"font-bold"})}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-full",onClick:()=>{var t,a,r,b,y,w,C,E;((t=n.current)==null?void 0:t.value)==null||((a=n.current)==null?void 0:a.value)==null||((r=n.current)==null?void 0:r.value)==""?o("Fill the Brand Info"):((b=i.current)==null?void 0:b.value)==null||((y=i.current)==null?void 0:y.value)==null||((w=i.current)==null?void 0:w.value)==""?o("Fill the Campaign Purpose."):v.length==0?o("Select at least one image."):(R((C=n.current)==null?void 0:C.value),Y((E=i.current)==null?void 0:E.value),o(null),N("/home/createcampaign/step6"))},children:(0,e.jsx)(p,{text:"Next",textColor:"text-white",background:"bg-secondary",width:"w-full",fontwidth:"font-bold"})})]})]})})]})})},O=j;export{O as default};
