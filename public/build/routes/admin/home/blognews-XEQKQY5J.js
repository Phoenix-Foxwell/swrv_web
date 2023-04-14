import{a as ie}from"/build/_shared/chunk-XLGCWUM4.js";import{a as Ee,b as p}from"/build/_shared/chunk-NJD3OTYN.js";import{a as Te}from"/build/_shared/chunk-QJYRTBXE.js";import{a as u,b as m}from"/build/_shared/chunk-MNPIC26H.js";import{A as Ne,D as oe,O as Z,R as se,a as s,j as we}from"/build/_shared/chunk-B53UXM73.js";import{k as he}from"/build/_shared/chunk-WLPYV2BQ.js";import{c as ne,d as $e,e as ye}from"/build/_shared/chunk-7UEYUE33.js";var a=ne($e());var e=ne(ye());function je(){return[{rel:"stylesheet",href:Te}]}var ze=()=>{var me,pe,fe,ve,be,ge,xe;let De=he().neb,[i,de]=(0,a.useState)(null),ee=(0,a.useRef)(null),[d,te]=(0,a.useState)(null),[Ce,ce]=(0,a.useState)(!1),[f,Le]=(0,a.useState)({}),[Ie,re]=(0,a.useState)(!1),v=(0,a.useRef)(null),b=(0,a.useRef)(null),g=(0,a.useRef)(null),x=(0,a.useRef)(null),ke=(0,a.useRef)(null),h=(0,a.useRef)(null),y=(0,a.useRef)(null),[n,w]=(0,a.useState)({title:((me=v.current)==null?void 0:me.value)||"",titleDesc:((pe=b.current)==null?void 0:pe.value)||"",description:((fe=g.current)==null?void 0:fe.value)||"",shortDesc:((ve=x.current)==null?void 0:ve.value)||"",imageUrl:((be=ke.current)==null?void 0:be.value)||"",type:((ge=h.current)==null?void 0:ge.value)||"",dateTime:((xe=y.current)==null?void 0:xe.value)||""}),[c,l]=(0,a.useState)(""),Ae=async t=>{let r=await u({method:"post",url:`${m}/api/get-neb-byid`,data:{id:t}});re(o=>!0),w(o=>r.data.data[0])},[Se,ae]=(0,a.useState)(!1),[ue,Ue]=(0,a.useState)({}),Me=async t=>{let r=await u({method:"post",url:`${m}/api/get-neb-byid`,data:{id:t}});ae(o=>!0),Ue(o=>r.data.data[0])},Re=async t=>{let r=await u({method:"post",url:`${m}/api/del-neb`,data:{id:t}});r.data.status?p.success("Successfully Deleted.",{theme:"dark"}):p.error(r.data.message,{theme:"dark"}),ae(o=>!1),window.location.reload()},Be=async t=>{let r=await u({method:"post",url:`${m}/api/get-neb-byid`,data:{id:t}});ce(o=>!0),Le(o=>r.data.data[0])},Fe=async t=>{var r,o,k,A,S,U,M,R,B,F,H,O,$,j,z,G,V,W,_,P,X,q,J,N;if(((r=v.current)==null?void 0:r.value)==null||((o=v.current)==null?void 0:o.value)==null||((k=v.current)==null?void 0:k.value)=="")l("Enter the title.");else if(((A=b.current)==null?void 0:A.value)==null||((S=b.current)==null?void 0:S.value)==null||((U=b.current)==null?void 0:U.value)=="")l("Enter the title description.");else if(((M=x.current)==null?void 0:M.value)==null||((R=x.current)==null?void 0:R.value)==null||((B=x.current)==null?void 0:B.value)=="")l("Enter the short description.");else if(((F=g.current)==null?void 0:F.value)==null||((H=g.current)==null?void 0:H.value)==null||((O=g.current)==null?void 0:O.value)=="")l("Enter the description.");else if((($=h.current)==null?void 0:$.value)==null||((j=h.current)==null?void 0:j.value)==null||((z=h.current)==null?void 0:z.value)=="")l("Enter the type.");else if(((G=y.current)==null?void 0:G.value)==null||((V=y.current)==null?void 0:V.value)==null||((W=y.current)==null?void 0:W.value)=="")l("Enter the date.");else{let K={title:(_=v.current)==null?void 0:_.value,titleDesc:(P=b.current)==null?void 0:P.value,shortDesc:(X=x.current)==null?void 0:X.value,dateTime:(q=y.current)==null?void 0:q.value,description:(J=g.current)==null?void 0:J.value,type:(N=h.current)==null?void 0:N.value,id:t};if(i==null)K.imageUrl=n.imageUrl;else{let Y=await ie(i);if(Y.status)K.imageUrl=Y.data;else return l(Y.data)}let Q=await u({method:"post",url:`${m}/api/upd-neb`,data:K});Q.data.status?p.success("Successfully Updated.",{theme:"dark"}):p.error(Q.data.message,{theme:"dark"}),re(Y=>!1),window.location.reload()}},[He,le]=(0,a.useState)(!1),E=(0,a.useRef)(null),T=(0,a.useRef)(null),D=(0,a.useRef)(null),C=(0,a.useRef)(null),L=(0,a.useRef)(null),I=(0,a.useRef)(null),Oe=async()=>{var t,r,o,k,A,S,U,M,R,B,F,H,O,$,j,z,G,V,W,_,P,X,q,J;if(((t=E.current)==null?void 0:t.value)==null||((r=E.current)==null?void 0:r.value)==null||((o=E.current)==null?void 0:o.value)=="")l("Enter the title.");else if(((k=T.current)==null?void 0:k.value)==null||((A=T.current)==null?void 0:A.value)==null||((S=T.current)==null?void 0:S.value)=="")l("Enter the title description.");else if(((U=C.current)==null?void 0:U.value)==null||((M=C.current)==null?void 0:M.value)==null||((R=C.current)==null?void 0:R.value)=="")l("Enter the short description.");else if(((B=D.current)==null?void 0:B.value)==null||((F=D.current)==null?void 0:F.value)==null||((H=D.current)==null?void 0:H.value)=="")l("Enter the description.");else if(((O=L.current)==null?void 0:O.value)==null||(($=L.current)==null?void 0:$.value)==null||((j=L.current)==null?void 0:j.value)=="")l("Enter the type.");else if(((z=I.current)==null?void 0:z.value)==null||((G=I.current)==null?void 0:G.value)==null||((V=I.current)==null?void 0:V.value)=="")l("Enter the date.");else if(i==null||i==null)l("Select the image..");else{let N=await ie(i);if(N.status){let K={title:(W=E.current)==null?void 0:W.value,titleDesc:(_=T.current)==null?void 0:_.value,shortDesc:(P=C.current)==null?void 0:P.value,dateTime:(X=I.current)==null?void 0:X.value,description:(q=D.current)==null?void 0:q.value,type:(J=L.current)==null?void 0:J.value,imageUrl:N.data},Q=await u({method:"post",url:`${m}/api/add-neb`,data:K});Q.data.status?p.success("Successfully added.",{theme:"dark"}):p.error(Q.data.message,{theme:"dark"}),le(Y=>!1),window.location.reload()}else l(N.data)}};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center overflow-y-scroll py-20 ${Ce?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4 w-96 ",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsx)("div",{className:"w-full grid place-items-center mb-4",children:(0,e.jsx)("img",{src:f.imageUrl,alt:"avatar",className:"w-56 h-56 object-cover object-center rounded-md"})}),(0,e.jsxs)("div",{className:"text-white grid place-items-center",children:[(0,e.jsxs)("p",{children:[f.title," "]}),(0,e.jsx)("p",{children:new Date(f.dateTime).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),(0,e.jsx)("p",{children:f.titleDesc}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsx)("p",{children:f.shortDesc}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsx)("p",{children:f.description})]}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsxs)("div",{onClick:()=>ce(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:Z,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]})})]})})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center ${Se?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsx)("div",{className:"text-white",children:(0,e.jsxs)("p",{children:["Are you Sure you want to delete ",ue.title,"?"]})}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>ae(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:Z,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:()=>Re(ue.id),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:oe,className:"w-6"}),(0,e.jsx)("p",{children:"Delete"})]})]})]})})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center overflow-y-scroll py-20 ${Ie?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80 ",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsx)("div",{className:"w-full grid place-items-center mb-4",children:(0,e.jsx)("img",{src:i==null?n.imageUrl:URL.createObjectURL(i),alt:"avatar",className:"w-40 h-40 object-cover object-center rounded-md"})}),(0,e.jsx)("div",{className:"hidden",children:(0,e.jsx)("input",{type:"file",accept:"image/*",ref:ee,onChange:t=>{parseInt((t.target.files[0].size/1024/1024).toString())<4?(te(null),de(t.target.files[0])):te("Image file size must be less then 4 mb")}})}),(0,e.jsxs)("div",{className:"text-white",children:[d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d}),(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("button",{onClick:()=>{var t;(t=ee.current)==null||t.click()},className:"text-white bg-green-600 rounded-md py-1 px-2 mx-auto text-sm",children:"UPLOAD IMAGE"})}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Title"}),(0,e.jsx)("input",{ref:v,type:"text",name:"name",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the name..",autoComplete:"off",value:n.title,onChange:t=>w(r=>({...r,title:t.target.value}))}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Title Description"}),(0,e.jsx)("textarea",{ref:b,className:"h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the number..",autoComplete:"off",value:n.titleDesc,onChange:t=>w(r=>({...r,titleDesc:t.target.value}))}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Short Description"}),(0,e.jsx)("textarea",{ref:x,className:"h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the position..",autoComplete:"off",value:n.shortDesc,onChange:t=>w(r=>({...r,shortDesc:t.target.value}))}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Description"}),(0,e.jsx)("textarea",{ref:g,className:"h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the position..",autoComplete:"off",value:n.description,onChange:t=>w(r=>({...r,description:t.target.value}))}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Date"}),(0,e.jsx)("input",{ref:y,type:"date",name:`dob\r
                            `,className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the dob..",autoComplete:"off",value:n.dateTime.substring(0,10),onChange:t=>w(r=>({...r,dateTime:t.target.value}))}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Type"}),(0,e.jsxs)("select",{ref:h,name:"type",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",children:[(0,e.jsx)("option",{selected:n.type==1,value:"1",className:"bg-[#31353f]",children:"BLOG"}),(0,e.jsx)("option",{selected:n.type==2,value:"2",className:"bg-[#31353f]",children:"NEWS"}),(0,e.jsx)("option",{selected:n.type==3,value:"3",className:"bg-[#31353f]",children:"EVENT"})]})]}),c==""||c==null||c==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:c}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>re(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:Z,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:()=>Fe(n.id),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:se,className:"w-6"}),(0,e.jsx)("p",{children:"SUBMIT"})]})]})]})})}),(0,e.jsx)("div",{className:`fixed h-full w-full bg-slate-800 bg-opacity-40 top-0 left-0 place-items-center py-20 overflow-x-scroll ${He?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-[#31353f] rounded-lg p-4 w-80",children:(0,e.jsxs)("div",{className:"mx-auto",children:[(0,e.jsx)("div",{className:`${i==null?"hidden":""} w-full grid place-items-center mb-4`,children:(0,e.jsx)("img",{src:i==null?"/images/avatar/user.png":URL.createObjectURL(i),alt:"avatar",className:"w-40 h-40 object-cover object-center rounded-md"})}),(0,e.jsx)("div",{className:"hidden",children:(0,e.jsx)("input",{type:"file",accept:"image/*",ref:ee,onChange:t=>{parseInt((t.target.files[0].size/1024/1024).toString())<4?(te(null),de(t.target.files[0])):te("Image file size must be less then 4 mb")}})}),(0,e.jsxs)("div",{className:"text-white",children:[d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d}),(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("button",{onClick:()=>{var t;(t=ee.current)==null||t.click()},className:"text-white bg-green-600 rounded-md py-1 px-2 mx-auto text-sm",children:"UPLOAD IMAGE"})}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Title"}),(0,e.jsx)("input",{ref:E,type:"text",name:"name",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the name..",autoComplete:"off"}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Title Description"}),(0,e.jsx)("textarea",{ref:T,className:"h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the number..",autoComplete:"off"}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Short Description"}),(0,e.jsx)("textarea",{ref:C,className:"h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the position..",autoComplete:"off"}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Description"}),(0,e.jsx)("textarea",{ref:D,className:"h-44 py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the position..",autoComplete:"off"}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Date"}),(0,e.jsx)("input",{ref:I,type:"date",name:`dob\r
                            `,className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",placeholder:"Enter the dob..",autoComplete:"off"}),(0,e.jsx)("p",{className:"text-white text-sm font-semibold text-left",children:"Type"}),(0,e.jsxs)("select",{ref:L,name:"type",className:"py-1 px-2 rounded-md border border-white w-full my-2 bg-transparent outline-none focus:bg-transparent fill-none",children:[(0,e.jsx)("option",{selected:n.type==1,value:"1",className:"bg-[#31353f]",children:"BLOG"}),(0,e.jsx)("option",{selected:n.type==2,value:"2",className:"bg-[#31353f]",children:"NEWS"}),(0,e.jsx)("option",{selected:n.type==3,value:"3",className:"bg-[#31353f]",children:"EVENT"})]})]}),c==""||c==null||c==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:c}),(0,e.jsx)("div",{className:"w-full h-[1px] bg-gray-300 my-2"}),(0,e.jsxs)("div",{className:"flex w-full justify-between",children:[(0,e.jsxs)("div",{onClick:()=>le(!1),className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300 hover:border hover:border-rose-400 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:Z,className:"w-6"}),(0,e.jsx)("p",{children:"CLOSE"})]}),(0,e.jsxs)("div",{onClick:Oe,className:"text-sm flex gap-2 items-center my-1 b  py-1 px-2 rounded-md border border-gray-300hover:border hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-500 text-gray-300 cursor-pointer",children:[(0,e.jsx)(s,{icon:se,className:"w-6"}),(0,e.jsx)("p",{children:"SUBMIT"})]})]})]})})}),(0,e.jsxs)("div",{className:"grow bg-[#1b2028] my-2 rounded-md p-4 w-full",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)("h1",{className:"text-white font-medium text-xl",children:"NEWS EVENT BLOG"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("button",{onClick:()=>le(!0),className:"bg-green-600 py-1 px-2 text-sm text-white rounded-md",children:"ADD NEW"})]}),(0,e.jsx)("div",{className:"w-full bg-slate-400 h-[1px] my-2"}),(0,e.jsxs)("div",{className:"overflow-x-hidden no-scrollbar",children:[(0,e.jsxs)("div",{className:"bg-[#31353f]  rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:"Id"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-32",children:"Name"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-24",children:"Type"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-32",children:"Action"})]}),De.map((t,r)=>(0,e.jsxs)("div",{className:"bg-[#31353f] hover:bg-slate-800 rounded-md flex px-4 py-2 my-2 text-white font-medium text-md flex-nowrap",children:[(0,e.jsx)("div",{className:"w-14",children:t.id}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-32",children:t.title}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"w-24",children:t.type==1?(0,e.jsx)("div",{className:"w-14 py-1 text-white text-xs bg-red-500 text-center rounded-md font-medium",children:"BLOG"}):t.type==2?(0,e.jsx)("div",{className:"w-14 py-1 text-white text-xs bg-green-500 text-center rounded-md font-medium",children:"NEWS"}):(0,e.jsx)("div",{className:"w-14 py-1 text-white text-xs bg-blue-500 text-center rounded-md font-medium",children:"EVENT"})}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("div",{className:"w-32 flex text-bold text-md gap-4",children:[(0,e.jsx)("div",{className:"text-cyan-500 cursor-pointer",onClick:()=>Ae(t.id),children:(0,e.jsx)(s,{icon:we})}),(0,e.jsx)("div",{className:"text-emerald-500 cursor-pointer",children:(0,e.jsx)(s,{icon:Ne,onClick:()=>Be(t.id)})}),(0,e.jsx)("div",{className:"text-rose-500 cursor-pointer",children:(0,e.jsx)(s,{icon:oe,onClick:()=>Me(t.id)})})]})]},r))]}),(0,e.jsx)(Ee,{})]})]})},Ge=ze;export{Ge as default,je as links};
