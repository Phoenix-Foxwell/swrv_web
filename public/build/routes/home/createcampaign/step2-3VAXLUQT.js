import{a as n}from"/build/_shared/chunk-YKAUYMZD.js";import{a as rt}from"/build/_shared/chunk-VLGHPF27.js";import{a as c}from"/build/_shared/chunk-NJKAJ7NJ.js";import"/build/_shared/chunk-R3QALOOK.js";import"/build/_shared/chunk-5ROUF77C.js";import{E as ye,N,P as Ne,V as we,W as w,a as s}from"/build/_shared/chunk-KV6SFFWO.js";import{b as xe,l as be}from"/build/_shared/chunk-P4VL4XDR.js";import{e as B,g as at,h as he}from"/build/_shared/chunk-EUC6ZTEW.js";var l=B(at()),Ee=B(rt()),e=B(he());var st=()=>{let[ke,_]=(0,l.useState)(!1),Ce=["Post","Story","Reel","Video","Audio"],j=be(),b=xe(),o=n(t=>t.campaignTypeId),[E,r]=(0,l.useState)(null),u=(0,l.useRef)(null),[k,C]=(0,l.useState)(null),[De,q]=(0,l.useState)(!1),S=n(t=>t.mendtion),Ae=n(t=>t.removeMeddtion),Ie=n(t=>t.clearMendtion),Me=n(t=>t.addMendtion),m=(0,l.useRef)(null),[D,A]=(0,l.useState)(null),[He,X]=(0,l.useState)(!1),P=n(t=>t.hashtag),Te=n(t=>t.removeHashtag),Le=n(t=>t.clearHashtag),Fe=n(t=>t.addHashtag),f=(0,l.useRef)(null),[I,R]=(0,l.useState)(null),[Be,G]=(0,l.useState)(!1),$=n(t=>t.dos),Se=n(t=>t.removeDos),Pe=n(t=>t.addDos),p=(0,l.useRef)(null),[M,z]=(0,l.useState)(null),[Re,J]=(0,l.useState)(!1),O=n(t=>t.donts),$e=n(t=>t.removeDonts),ze=n(t=>t.addDonts),K=(0,l.useRef)(null),[H,Q]=(0,l.useState)(null),Y=n(t=>t.pdffile),Oe=n(t=>t.addPdfFile),T=n(t=>t.platform),Ye=n(t=>t.setPlatform),L=n(t=>t.media),Ue=n(t=>t.setMedia),g=(0,l.useRef)(null),Ve=n(t=>t.campaignInfo),_e=n(t=>t.setCampaignInfo),F=(0,l.useRef)(null),je=n(t=>t.affiliatedLinks),qe=n(t=>t.setAffiliatedLinks),v=(0,l.useRef)(null),Xe=n(t=>t.discoutCoupon),Ge=n(t=>t.setDiscoutCoupon),d=(0,l.useRef)(null),Je=n(t=>t.target),Ke=n(t=>t.setTarget),i=(0,l.useRef)(null),Qe=n(t=>t.minTarget),We=n(t=>t.setMinTarget),[U,W]=(0,l.useState)(0),Ze=n(t=>t.rating),et=n(t=>t.setRating),tt=t=>{W(t)},[x,V]=(0,l.useState)(null),nt=n(t=>t.approval),lt=n(t=>t.setApproval);return(0,l.useEffect)(()=>{var t,a,h,y;g.current.value=Ve,V(nt),W(Ze),((t=F.current)==null?void 0:t.value)!=null&&(F.current.value=je),((a=v.current)==null?void 0:a.value)!=null&&(v.current.value=Xe),((h=d.current)==null?void 0:h.value)!=null&&(d.current.value=Je.toString()),((y=i.current)==null?void 0:y.value)!=null&&(i.current.value=Qe.toString())},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`h-screen w-full grid place-items-center bg-black bg-opacity-25 fixed top-0 left-0 ${ke?"grid":"hidden"}`,children:(0,e.jsxs)("div",{className:"w-80 bg-white rounded-xl shadow-xl p-4",children:[(0,e.jsx)("h1",{className:"text-center text-xl font-semibold",children:"Are you sure you want to go back."}),(0,e.jsxs)("div",{className:"flex justify-around",children:[(0,e.jsx)("button",{onClick:()=>{b(-1)},className:"bg-green-500 py-2 px-4 text-xl font-medium rounded-md text-white",children:"Yes"}),(0,e.jsx)("button",{onClick:()=>_(!1),className:"bg-red-500 py-2 px-4 text-xl font-medium rounded-md text-white",children:"NO"})]})]})}),(0,e.jsxs)("div",{className:"bg-white shadow-xl rounded-xl px-8 py-4 mt-4",children:[(0,e.jsx)("h2",{className:"text-black tect-xl font-medium text-left",children:o=="1"?"Sponsored post":o=="2"?"Review post":o=="3"?"Discount and Affiliated post":"Contest post"}),(0,e.jsx)("div",{className:"md:flex gap-2 mt-2 grid place-items-center grid-cols-4",children:j.platform.map((t,a)=>(0,e.jsx)("div",{className:` p-2 rounded-lg ${T.includes(t.id)?"bg-white shadow-xl ":"bg-gray-200"} `,onClick:()=>{Ye(t.id)},children:(0,e.jsx)("img",{src:j.platform[a].platformLogoUrl,alt:"error",className:"w-10 h-10"})},a))}),(0,e.jsx)("div",{className:"lg:flex gap-4 mt-4 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4",children:Ce.map((t,a)=>(0,e.jsx)("div",{className:`cursor-pointer text-primary text-lg text-center font-normal w-28 py-1  rounded-xl ${t==L?"bg-white shadow-xl":"bg-gray-100"}`,onClick:()=>{Ue(t)},children:t},a))}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Mentions"}),(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsxs)("div",{className:"bg-[#EEEEEE]  h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll no-scrollbar",children:S.map((t,a)=>(0,e.jsxs)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:[(0,e.jsx)("div",{className:" text-black font-semibold ",children:`@${t}`}),(0,e.jsx)("div",{className:"grid place-items-center cursor-pointer",onClick:()=>Ae(t),children:(0,e.jsx)(s,{icon:w,className:"text-lg font-bold text-red-500"})})]},a))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>q(!0),children:(0,e.jsx)(s,{icon:N})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{className:"text-primary text-center text-md font-normal my-2 w-20 cursor-pointer",onClick:Ie,children:"clear all"})})]}),De?(0,e.jsxs)("div",{className:"mt-4 flex",children:[(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("input",{ref:u,type:"text",className:"bg-gray-200 w-full outline-none rounded-lg px-4 py-2",placeholder:"Mention"})}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsx)("div",{onClick:()=>{u.current.value==""||u.current.value==null||u.current.value==null?C("Mention can't be empty!"):S.includes(u.current.value)?C("Mention already exist add a diffrent one"):u.current.value.indexOf(" ")>=0?C("Mention cannot containt space"):(Me(u.current.value),u.current.value="",q(!1),C(null))},children:(0,e.jsx)(c,{text:"ADD",background:"bg-primary",width:"w-20"})})]}):null,k==""||k==null||k==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md",children:k}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Hashtag"}),(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll no-scrollbar",children:P.map((t,a)=>(0,e.jsxs)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:[(0,e.jsx)("div",{className:" text-black font-semibold ",children:`#${t}`}),(0,e.jsx)("div",{className:"grid place-items-center cursor-pointer",onClick:()=>Te(t),children:(0,e.jsx)(s,{icon:w,className:"text-lg font-bold text-red-500"})})]},a))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>X(!0),children:(0,e.jsx)(s,{icon:N})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("p",{className:"text-primary text-center text-md font-normal my-2 w-20 cursor-pointer",onClick:Le,children:"clear all"})})]}),He?(0,e.jsxs)("div",{className:"mt-4 flex",children:[(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("input",{ref:m,type:"text",className:"bg-gray-200 w-full outline-none rounded-lg px-4 py-2",placeholder:"Hashtag"})}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsx)("div",{onClick:()=>{m.current.value==""||m.current.value==null||m.current.value==null?A("Hashtag can't be empty!"):P.includes(m.current.value)?A("Hashtag already exist add a diffrent one"):m.current.value.indexOf(" ")>=0?A("Hashtag cannot containt space"):(Fe(m.current.value),m.current.value="",X(!1),A(null))},children:(0,e.jsx)(c,{text:"ADD",background:"bg-primary",width:"w-20"})})]}):null,D==""||D==null||D==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md",children:D}),o=="2"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Minimum rating required"}),(0,e.jsx)("div",{className:"w-60",children:(0,e.jsx)(Ee.Rating,{initialValue:U,onClick:tt})})]}):null,o=="3"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Affiliated links (optional)"}),(0,e.jsx)("input",{ref:F,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Discount coupons"}),(0,e.jsx)("input",{ref:v,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"})]}):null,o=="4"?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Target"}),(0,e.jsx)("input",{ref:d,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"})]}),(0,e.jsx)("div",{className:"w-8"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Min target"}),(0,e.jsx)("input",{ref:i,type:"text",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2"})]})]})}):null,(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Campaign info"}),(0,e.jsx)("textarea",{ref:g,className:"p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Attachments"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4",children:[(0,e.jsx)("h3",{className:"text-black font-semibold  text-md",children:Y.length==0?"":Y[0].name}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full",onClick:()=>{K.current.click()},children:(0,e.jsx)(s,{icon:ye})})]}),(0,e.jsx)("div",{className:"hidden",children:(0,e.jsx)("input",{ref:K,type:"file",accept:"application/pdf",onChange:t=>{parseInt((t.target.files[0].size/1024/1024).toString())<4?(Q(null),Oe(t.target.files[0])):Q("Pdf file size must be less then 4 mb")}})}),H==""||H==null||H==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:H}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"You should"}),(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row gap-2",children:[(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{className:"bg-[#EEEEEE] w-full h-10 rounded-lg flex",children:[(0,e.jsx)("div",{className:"grid place-items-center px-4 rounded-lg font-bold text-green-500",children:(0,e.jsx)(s,{icon:we})}),(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("h2",{className:"text-primary text-lg text-left font-medium",children:"Do"})}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>G(!0),children:(0,e.jsx)(s,{icon:N})})]}),(0,e.jsx)("div",{children:$.map((t,a)=>(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex",children:[t,(0,e.jsx)("div",{className:"grow",children:" "}),(0,e.jsx)("div",{className:"grid place-items-center ml-2 cursor-pointer",onClick:()=>Se(t),children:(0,e.jsx)(s,{icon:w,className:"text-lg font-bold text-red-500"})})]})},a))}),Be?(0,e.jsxs)("div",{className:"mt-4 flex",children:[(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("input",{ref:f,type:"text",className:"bg-gray-200 w-full outline-none rounded-lg px-4 py-2",placeholder:"Do's"})}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsx)("div",{onClick:()=>{f.current.value==""||f.current.value==null||f.current.value==null?R("Dos can't be empty!"):$.includes(f.current.value)?R("Dos already exist add a diffrent one"):(Pe(f.current.value),f.current.value="",G(!1),R(null))},children:(0,e.jsx)(c,{text:"ADD",background:"bg-primary",width:"w-20"})})]}):null,I==""||I==null||I==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md",children:I})]}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{className:"bg-[#EEEEEE] w-full h-10 rounded-lg flex",children:[(0,e.jsx)("div",{className:"grid place-items-center px-4 rounded-lg font-bold text-red-500",children:(0,e.jsx)(s,{icon:Ne})}),(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("h2",{className:"text-primary text-lg text-left font-medium",children:"Don't"})}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>J(!0),children:(0,e.jsx)(s,{icon:N})})]}),(0,e.jsx)("div",{children:O.map((t,a)=>(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex",children:[t,(0,e.jsx)("div",{className:"grow",children:" "}),(0,e.jsx)("div",{className:"grid place-items-center ml-2 cursor-pointer",onClick:()=>$e(t),children:(0,e.jsx)(s,{icon:w,className:"text-lg font-bold text-red-500"})})]})},a))}),Re?(0,e.jsxs)("div",{className:"mt-4 flex",children:[(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("input",{ref:p,type:"text",className:"bg-gray-200 w-full outline-none rounded-lg px-4 py-2",placeholder:"Dont's"})}),(0,e.jsx)("div",{className:"w-6"}),(0,e.jsx)("div",{onClick:()=>{p.current.value==""||p.current.value==null||p.current.value==null?z("Donts can't be empty!"):O.includes(p.current.value)?z("Donts already exist add a diffrent one"):(ze(p.current.value),p.current.value="",J(!1),z(null))},children:(0,e.jsx)(c,{text:"ADD",background:"bg-primary",width:"w-20"})})]}):null,M==""||M==null||M==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md",children:M})]})]}),(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row items-center mt-4",children:[(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Does the influencer need to seek an approval of the post before posting"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsx)("div",{onClick:()=>{V(!0)},children:(0,e.jsx)(c,{text:"Yes",textColor:x?"text-white":"text-primary",background:x?"bg-primary":"bg-gray-100",width:"w-20"})}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{onClick:()=>{V(!1)},children:(0,e.jsx)(c,{text:"No",textColor:x==!1?"text-white":"text-primary",background:x==!1?"bg-primary":"bg-gray-100",width:"w-20"})})]})]}),E==""||E==null||E==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:E}),(0,e.jsxs)("div",{className:"flex w-full",children:[(0,e.jsx)("div",{onClick:()=>{_(!0)},className:"w-full",children:(0,e.jsx)(c,{text:"Back",textColor:"text-black",background:"bg-gray-100",width:"w-full"})}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-full",onClick:()=>{var t,a,h,y,Z,ee,te,ne,le,ae,re,se,oe,de,ie,ce,ue,me,fe,pe,ve,ge;T==null||T.length==0||T==null?r("Select a platform"):L==null||L==""||L==null?r("Select a media"):S.length==0?r("please add at least one mendtion"):P.length==0?r("please add at least one hashtag"):((t=g.current)==null?void 0:t.value)==null||((a=g.current)==null?void 0:a.value)==null||((h=g.current)==null?void 0:h.value)==""?r("Add campaign info"):$.length==0?r("please add at least one dos"):O.length==0?r("please add at least one don't"):Y.length==0?r("please add your attachment"):x==null?r("Dose influencer need to seek an approval of the post before posting?"):(_e((y=g.current)==null?void 0:y.value),lt(x),o=="2"?U==0?r("Select minimun rating"):(et(U),b("/home/createcampaign/step3")):o=="3"?((Z=v.current)==null?void 0:Z.value)==null||((ee=v.current)==null?void 0:ee.value)==null||((te=v.current)==null?void 0:te.value)==""?r("Add Discount coupons"):(Ge((ne=v.current)==null?void 0:ne.value),qe((ae=(le=F.current)==null?void 0:le.value)!=null?ae:""),b("/home/createcampaign/step3")):o=="4"?((re=d.current)==null?void 0:re.value)==null||((se=d.current)==null?void 0:se.value)==null||parseInt((oe=d.current)==null?void 0:oe.value)==0||((de=d.current)==null?void 0:de.value)==""?r("Enter target"):((ie=i.current)==null?void 0:ie.value)==null||((ce=i.current)==null?void 0:ce.value)==null||parseInt((ue=i.current)==null?void 0:ue.value)==0||((me=i.current)==null?void 0:me.value)==""?r("Enter min target"):parseInt((fe=i.current)==null?void 0:fe.value)>parseInt((pe=d.current)==null?void 0:pe.value)?r("Target must be gretter then min target."):(We(parseInt((ve=i.current)==null?void 0:ve.value)),Ke(parseInt((ge=d.current)==null?void 0:ge.value)),b("/home/createcampaign/step3")):b("/home/createcampaign/step3"))},children:(0,e.jsx)(c,{text:"Next",textColor:"text-white",background:"bg-primary",width:"w-full"})})]})]})]})},ot=st;export{ot as default};
