import{a as C}from"/build/_shared/chunk-FORNLVTX.js";import{a as f,b as x}from"/build/_shared/chunk-MNPIC26H.js";import"/build/_shared/chunk-PO5G3Y6Y.js";import{b as N,l as b}from"/build/_shared/chunk-BDKSMX4O.js";import{c as y,d as I,e as U}from"/build/_shared/chunk-7UEYUE33.js";var o=y(I());var e=y(U());var M=()=>{let t=b(),s=t.user.id,[d,g]=(0,o.useState)([]),[m,u]=(0,o.useState)([]),h=N(),w=C(a=>a.changeTab),[l,r]=(0,o.useState)(),c=async()=>{let a={search:{fromToUser:o.useId}},i=await f.post(`${x}/api/search-chat`,a);if(i.data.status==!0)for(let n=0;n<i.data.data.length;n++){let v=i.data.data[n].fromUser.id,p=i.data.data[n].toUser.id;v==s&&(d.includes(p)||(g([...d,p]),u([...m,i.data.data[n]]))),p==s&&(d.includes(v)||(g([...d,v]),u([...m,i.data.data[n]])))}};return(0,o.useEffect)(()=>{c()}),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:"my-4",children:m.length==0?(0,e.jsxs)("div",{className:"w-full bg-white rounded-lg shadow-xl  p-2 overflow-y-scroll no-scrollbar py-10 ",children:[(0,e.jsx)("h1",{className:"text-center text-2xl",children:"No Message"}),(0,e.jsx)("p",{className:"text-center text-md",children:"Search user and start message."}),(0,e.jsx)("div",{className:"text-center mt-6",children:(0,e.jsx)("button",{className:"text-white bg-primary py-1 px-2 text-xl font-semibold rounded-md",onClick:()=>{w(2),h("/home/findcampaign")},children:"Search"})})]}):(0,e.jsxs)("div",{className:"flex gap-4 flex-col xl:flex-row",children:[(0,e.jsxs)("div",{className:"w-full flex lg:flex-row flex-col gap-4",children:[(0,e.jsx)("div",{className:"w-full bg-white rounded-lg shadow-xl lg:w-80 p-2 max-h-screen overflow-y-scroll no-scrollbar min-h-screen",children:m.map((a,i)=>(0,e.jsx)("div",{onClick:()=>{g(n=>[]),u(n=>[]),r({name:a.fromUser.id==s?a.toUser.name.toString().split("@")[0]:a.fromUser.name.toString().split("@")[0],avatar:a.fromUser.id==s?a.toUser.pic:a.fromUser.pic,userid:a.fromUser.id==s?a.toUser.id:a.fromUser.id,index:i.toString()})},children:(0,e.jsx)(S,{active:(l==null?void 0:l.index)==i.toString(),name:a.fromUser.id==s?a.toUser.name.toString().split("@")[0]:a.fromUser.name.toString().split("@")[0],message:`${a.fromUser.id==s?"you: ":""} ${a.comment}`,url:a.fromUser.id==s?a.toUser.pic:a.fromUser.pic})},i))}),l!=null?(0,e.jsx)(k,{avatar:l.avatar,id:l.userid,userId:s,name:l.name,useravatar:t.user.pic}):null]}),l!=null?(0,e.jsx)($,{id:l.userid}):null]})})})},A=M,S=t=>{let s=t.url==""||t.url=="0"||t.url==null||t.url==null?"/images/avatar/user.png":t.url;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:`flex w-full py-2 my-1 border-b-2 rounded-md ${t.active?"bg-gray-200 px-4":"border-slate-200"}`,children:[(0,e.jsx)("img",{src:s,alt:"user images",className:"w-10 h-10 object-cover rounded-lg shrink-0"}),(0,e.jsx)("div",{className:"w-2"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-md font-medium  leading-none text-slate-800",children:t.name}),(0,e.jsx)("p",{className:"text-sm font-normal leading-none text-slate-600",children:t.message})]})]})})},T=t=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"w-full flex items-start my-4",children:[(0,e.jsx)("div",{className:`grow ${t.user?"":"hidden"}`}),(0,e.jsx)("img",{src:t.avatar,alt:"avatar",className:`w-10 h-10 rounded-md ${t.user?"order-3":""}`}),(0,e.jsx)("div",{className:`w-4 ${t.user?"order-2":""}`}),(0,e.jsxs)("div",{className:"max-w-4/5 bg-gray-200 rounded-md p-2 order-1",children:[(0,e.jsx)("p",{className:`text-xs text-gray-700 font-normal ${t.user?"text-right":"text-left"}`,children:t.time}),(0,e.jsx)("p",{className:`text-md text-gray-900 font-normal text-left ${t.user?"text-right":"text-left"}`,children:t.message})]})]})}),$=t=>{let[s,d]=(0,o.useState)(null),g=async()=>{let u=await f({method:"post",url:`${x}/api/getuser`,data:{id:t.id}});u.data.status==!0&&d(u.data.data[0])};(0,o.useEffect)(()=>{g()},[]);let m=N();return(0,e.jsx)(e.Fragment,{children:s==null?(0,e.jsx)("div",{className:"bg-white rounded-lg shadow-xl",children:(0,e.jsx)("h1",{className:"text-center font-semibold text-rose-500 p-4",children:"No user found"})}):(0,e.jsxs)("div",{className:"bg-white rounded-lg shadow-xl flex w-full xl:w-80 xl:flex-col flex-col sm:flex-row items-start p-4 xl:px-0 xl:pt-0",children:[(0,e.jsx)("div",{className:"w-80 h-80 shrink-0 mx-auto",children:(0,e.jsx)("img",{src:s.pic,alt:"error",className:"w-full h-80 object-cover rounded-lg"})}),(0,e.jsxs)("div",{className:"px-4 mt-6 sm:mt-0 grow w-full",children:[(0,e.jsx)("p",{className:"text-left font-semibold text-lg text-slate-800",children:s.userName.toString().split("@")[0]}),(0,e.jsx)("p",{className:"text-left font-semibold text-sm text-slate-600 mt-4",children:"Bio"}),(0,e.jsx)("p",{className:"text-left font-normal text-sm text-slate-600 mt-4",children:s.bio}),(0,e.jsx)("button",{onClick:()=>{m("/home/branduser")},className:" mt-2 w-full py-2 text-center text-primary font-semibold text-lg bg-[#01FFF4] rounded-md",children:"View profile"}),(0,e.jsx)("div",{className:"h-[1px] bg-slate-400 my-4 w-full"})]})]})})},k=t=>{let s=(0,o.useRef)(null),d=(0,o.useRef)(null),[g,m]=(0,o.useState)([]),[u,h]=(0,o.useState)(!1),w=async()=>{m([]);let r={search:{fromUser:t.id,toUser:t.userId}},c={search:{fromUser:t.userId,toUser:t.id}},a=await f({method:"post",url:`${x}/api/search-chat`,data:r}),i=await f({method:"post",url:`${x}/api/search-chat`,data:c});m(n=>[...n,...a.data.data,...i.data.data]),m(n=>n.sort((v,p)=>new Date(p.updatedAt).getTime()-new Date(v.updatedAt).getTime()))};(0,o.useEffect)(()=>{var r;s.current.scrollTop=(r=s.current)==null?void 0:r.scrollHeight,w()},[u]);let l=async r=>{let c={campaignDraftId:"0",fromUserId:t.userId,toUserId:t.id,comment:r},a=await f({method:"post",url:`${x}/api/add-chat`,data:c,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});h(!u)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-lg shadow-xl w-full p-4 max-h-screen flex flex-col",children:[(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsx)("img",{src:t.avatar,className:"w-10 h-10 rounded-md",alt:"avatar"}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("p",{className:"text-md font-semibold text-slate-900 ",children:t.name})]}),(0,e.jsx)("div",{className:"w-full h-[2px] my-2 bg-slate-300"}),(0,e.jsx)("div",{ref:s,className:"w-full h-full overflow-y-scroll grow no-scrollbar",children:g.reverse().map((r,c)=>(0,e.jsx)("div",{children:(0,e.jsx)(T,{avatar:r.fromUser.id==t.userId?t.useravatar:t.avatar,message:r.comment,time:r.updatedAt,user:r.fromUser.id==t.userId})},c))}),(0,e.jsx)("div",{className:"w-full px-4 py-2",children:(0,e.jsxs)("div",{className:" bg-gray-200 rounded-md px-2 py-2 flex",children:[(0,e.jsx)("input",{ref:d,type:"text",className:"py-1 w-full px-2 bg-transparent outline-none",placeholder:"type something"}),(0,e.jsx)("div",{className:"w-4"}),(0,e.jsx)("button",{className:"bg-primary rounded-md text-white  text-md py-1 px-4 font-semibold",onClick:async()=>{var r,c,a,i;((r=d.current)==null?void 0:r.value)==null||((c=d.current)==null?void 0:c.value)==null||((a=d.current)==null?void 0:a.value)==""||(await l((i=d.current)==null?void 0:i.value),d.current.value="")},children:"SEND"})]})})]})})};export{A as default};
