import{a as n}from"/build/_shared/chunk-E52NATUX.js";import{a as Te}from"/build/_shared/chunk-GRL7GYK3.js";import{a as b}from"/build/_shared/chunk-2MWJU3AL.js";import"/build/_shared/chunk-DG4O4KXK.js";import{b as ne,l as re}from"/build/_shared/chunk-Q24O5NQK.js";import{d as y,f as Be,g as le}from"/build/_shared/chunk-EO7COENX.js";var a=y(Be()),se=y(Te());var e=y(le());var He=()=>{let oe=re().user,[ue,me]=(0,a.useState)(""),[E,ce]=(0,a.useState)(""),[w,ie]=(0,a.useState)(""),[C,de]=(0,a.useState)(""),[S,pe]=(0,a.useState)(""),[I,ve]=(0,a.useState)(""),[P,fe]=(0,a.useState)(""),[M,xe]=(0,a.useState)(""),D=ne(),[N,k]=(0,a.useState)(!1),[x,r]=(0,a.useState)(null),u=(0,a.useRef)(null),ge=n(t=>t.campaignName),he=n(t=>t.setCampaignName),i=(0,a.useRef)(null),ye=n(t=>t.planedBudget),Ne=n(t=>t.setPlanedBudget),l=(0,a.useRef)(null),be=n(t=>t.costPerPost),Ee=n(t=>t.setCostPerPost),m=(0,a.useRef)(null),we=n(t=>t.startDate),Ce=n(t=>t.setStartDate),c=(0,a.useRef)(null),Se=n(t=>t.endDate),Ie=n(t=>t.setEndDate),s=(0,a.useRef)(null),Pe=n(t=>t.minReach),Me=n(t=>t.setMinReach),o=(0,a.useRef)(null),De=n(t=>t.maxReact),ke=n(t=>t.setMaxReact),Le=n(t=>t.publicGlobally),Re=n(t=>t.setPublicGlobally);return(0,a.useEffect)(()=>{var t,g,h,d,p,v,f;me(oe.brand.name),((t=u.current)==null?void 0:t.value)!=null&&(u.current.value=ge),((g=i.current)==null?void 0:g.value)!=null&&(i.current.value=ye.toString()),((h=l.current)==null?void 0:h.value)!=null&&(l.current.value=be.toString()),((d=m.current)==null?void 0:d.value)!=null&&(m.current.value=we),((p=c.current)==null?void 0:p.value)!=null&&(c.current.value=Se),((v=s.current)==null?void 0:v.value)!=null&&(s.current.value=Pe.toString()),((f=o.current)==null?void 0:f.value)!=null&&(o.current.value=De.toString()),k(Le)},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"flex gap-x-4 flex-col lg:flex-row",children:[(0,e.jsxs)("div",{className:"bg-white shadow-xl rounded-xl px-8 py-4 mt-4",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-medium",children:"Create campaign"}),(0,e.jsx)("p",{className:"text-primary text-md font-normal",children:"The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population."}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Campaign name"}),(0,e.jsx)("input",{ref:u,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",onChange:t=>ce(t.target.value)}),(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Planed budget"}),(0,e.jsx)("input",{ref:i,type:"number",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2  lg:w-72",onChange:t=>ie(t.target.value)})]}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Cost per post"}),(0,e.jsx)("input",{ref:l,type:"number",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72",onChange:t=>de(t.target.value)})]})]}),(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Start date"}),(0,e.jsx)("input",{type:"date",ref:m,className:"bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 w-full p-2 lg:w-72",onChange:t=>pe(t.target.value)})]}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"End date"}),(0,e.jsx)("input",{ref:c,type:"date",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72",onChange:t=>ve(t.target.value)})]})]}),(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Min reach"}),(0,e.jsx)("input",{ref:s,type:"number",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72",onChange:t=>fe(t.target.value)})]}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Max reach"}),(0,e.jsx)("input",{ref:o,type:"number",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 lg:w-72",onChange:t=>xe(t.target.value)})]})]}),(0,e.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,e.jsx)(se.default,{onChange:()=>k(!N),checked:N,checkedIcon:!1,uncheckedIcon:!1,onColor:"#03125E"}),(0,e.jsxs)("div",{className:"grow",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-medium",children:"Public globally"}),(0,e.jsx)("p",{className:"text-primary text-md font-normal",children:"The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population."})]})]})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-medium",children:"Campaign Summary"}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Brand name"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:ue})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Campaign name"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:E==""?"--------":E})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Planed budget"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:w==""?"--------":w})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Cost per post"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:C==""?"--------":C})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Start date"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:S==""?"--------":new Date(S).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"long",day:"numeric"})})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"End date"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:I==""?"--------":new Date(I).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"long",day:"numeric"})})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Min reach"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:P==""?"--------":P})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Max reach"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:M==""?"--------":M})]}),x==""||x==null||x==null?null:(0,e.jsx)("div",{className:"my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md",children:x}),(0,e.jsxs)("div",{className:"flex w-full",children:[(0,e.jsx)("div",{onClick:()=>{D(-1)},className:"w-full",children:(0,e.jsx)(b,{text:"Back",textColor:"text-black",background:"bg-gray-100",width:"w-full",fontwidth:"font-bold"})}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-full",onClick:()=>{var d,p,v,f,L,R,B,T,H,G,A,F,U,_,q,j,z,J,K,O,Q,V,W,X,Y,Z,$,ee,te,ae;let t=new Date(m.current.value),g=new Date(c.current.value),h=t>g;((d=u.current)==null?void 0:d.value)==null||((p=u.current)==null?void 0:p.value)==null||((v=u.current)==null?void 0:v.value)==""?r("Enter campaign name"):((f=u.current)==null?void 0:f.value.length)<4?r("Campaign should be more then 3 character."):((L=i.current)==null?void 0:L.value)==null||((R=i.current)==null?void 0:R.value)==null||((B=i.current)==null?void 0:B.value)==""||parseInt((T=i.current)==null?void 0:T.value)==0?r("Enter planed budget"):((H=l.current)==null?void 0:H.value)==null||((G=l.current)==null?void 0:G.value)==null||((A=l.current)==null?void 0:A.value)==""||parseInt((F=l.current)==null?void 0:F.value)==0?r("Enter planed cost per post"):((U=m.current)==null?void 0:U.value)==null||((_=m.current)==null?void 0:_.value)==null||((q=m.current)==null?void 0:q.value)==""?r("Enter planed starting date"):((j=c.current)==null?void 0:j.value)==null||((z=c.current)==null?void 0:z.value)==null||((J=c.current)==null?void 0:J.value)==""?r("Enter planed end date"):((K=s.current)==null?void 0:K.value)==null||((O=s.current)==null?void 0:O.value)==null||((Q=s.current)==null?void 0:Q.value)==""||parseInt((V=s.current)==null?void 0:V.value)==0?r("Enter planed min reach"):((W=o.current)==null?void 0:W.value)==null||((X=o.current)==null?void 0:X.value)==null||((Y=o.current)==null?void 0:Y.value)==""||parseInt((Z=o.current)==null?void 0:Z.value)==0?r("Enter planed max reach"):parseInt(($=s.current)==null?void 0:$.value)>parseInt((ee=o.current)==null?void 0:ee.value)?r("Max react should be gretter then min reach"):h?r("Start date should be less then end date"):(he(u.current.value),Ne(parseInt(l.current.value)),Ee(parseInt(l.current.value)),Ce(m.current.value),Ie(c.current.value),Me(parseInt((te=s.current)==null?void 0:te.value)),ke(parseInt((ae=o.current)==null?void 0:ae.value)),Re(N),D("/home/createcampaign/step5"))},children:(0,e.jsx)(b,{text:"Next",textColor:"text-white",background:"bg-secondary",width:"w-full",fontwidth:"font-bold"})})]})]})})]})})},Ge=He;export{Ge as default};