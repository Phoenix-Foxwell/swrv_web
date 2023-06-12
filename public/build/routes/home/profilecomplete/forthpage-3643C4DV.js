import{a as P}from"/build/_shared/chunk-XTP3C3EQ.js";import{a as H}from"/build/_shared/chunk-NJKAJ7NJ.js";import{a as w,b as C}from"/build/_shared/chunk-WI5Z27OJ.js";import"/build/_shared/chunk-5ROUF77C.js";import{N,T as B,a as g}from"/build/_shared/chunk-6AVPJ36M.js";import{b as O,d as $,l as T}from"/build/_shared/chunk-P4VL4XDR.js";import{e as h,g as Z,h as M}from"/build/_shared/chunk-EUC6ZTEW.js";var r=h(Z());var e=h(M());var _=()=>{let b=T(),k=b.user.id,D=b.country,A=["MALE","FEMALE","TRANSGENDER"],G=b.user.role.code=="50",[s,j]=(0,r.useState)([]),[R,x]=(0,r.useState)(!1),[d,E]=(0,r.useState)([]),[X,y]=(0,r.useState)(!1),[u,a]=(0,r.useState)(""),[p,S]=(0,r.useState)(null),[q,m]=(0,r.useState)(!1),[L,z]=(0,r.useState)([]),[n,U]=(0,r.useState)(null),[c,J]=(0,r.useState)(),K=t=>{J(t.target.value.replace(/\D/g,""))},i=(0,r.useRef)(null),Q=async(t,o)=>{let l=await w.post(`${C}/api/get-city`,{search:t,countryId:o});z(l.data.data)},V=P(t=>t.setIndex),te=O(),[v,W]=(0,r.useState)(!1),Y=()=>{W(!v)},F=(0,r.useRef)(null);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${q?"grid":"hidden"}`,onClick:t=>m(!1),children:(0,e.jsx)("div",{className:"bg-white shadow-md w-80 rounded-lg p-4",onClick:t=>t.stopPropagation(),children:L.length==0?(0,e.jsxs)("div",{className:"min-h-96",children:[(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:"No city found with this name"}),(0,e.jsx)("button",{className:"px-2 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4 cursor-pointer",onClick:()=>{m(!1)},children:"Close"})]}):(0,e.jsxs)("div",{className:"h-[350px] overflow-y-scroll no-scrollbar",children:[L.map((t,o)=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{onClick:()=>{U(t),m(!1),i.current.value=""},className:"my-6 cursor-pointer bg-white rounded-md py-1 border-2 text-center font-normal text-md hover:border-emerald-500",children:[t.name," - ",t.code]},o)})),(0,e.jsx)("div",{onClick:()=>{m(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",children:"Close"})]})})}),(0,e.jsx)("div",{className:"p-8 w-full",children:(0,e.jsx)("div",{className:"flex w-full",children:(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg mt-4",children:"Country"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:s.map((t,o)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.name} - [${t.code}]`})},o))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{x(!0)},children:(0,e.jsx)(g,{icon:N})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${R?"":"hidden"} grid place-items-center`,onClick:t=>x(!1),children:(0,e.jsxs)("div",{className:"bg-white p-10 cursor-pointer",onClick:t=>t.stopPropagation(),children:[(0,e.jsx)("div",{className:"overflow-y-scroll no-scrollbar w-80 h-[350px]",children:D.map((t,o)=>(0,e.jsxs)("h1",{onClick:()=>{j(l=>[t])},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${s.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.code," - ",t.name]},o))}),(0,e.jsx)("div",{onClick:()=>{x(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",children:"Close"})]})}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Gender"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:d.map((t,o)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:t})},o))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{y(!0)},children:(0,e.jsx)(g,{icon:N})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${X?"":"hidden"} grid place-items-center`,onClick:t=>y(!1),children:(0,e.jsxs)("div",{className:"bg-white p-10 cursor-pointer",onClick:t=>t.stopPropagation(),children:[(0,e.jsx)("div",{className:"min-h-80 overflow-y-scroll no-scrollbar w-80",children:A.map((t,o)=>(0,e.jsx)("h1",{onClick:()=>{if(d.includes(t)){let l=d.filter(f=>f!=t);E(l)}else E([t])},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${d.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:t},o))}),(0,e.jsx)("div",{onClick:()=>{y(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center cursor-pointer",children:"Close"})]})}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"City"}),(0,e.jsxs)("div",{className:"w-full bg-[#EEEEEE] rounded-md flex p-2",children:[(0,e.jsx)("div",{className:"grow",children:(0,e.jsx)("input",{ref:i,className:"h-full w-full outline-none focus:border-gray-300 bg-transparent"})}),(0,e.jsx)("div",{className:"bg-white text-bold p-2 rounded-md grid place-items-center w-8 h-8 cursor-pointer",onClick:()=>{var t,o,l,f,I;s.length==0?a("Select the country first"):((t=i.current)==null?void 0:t.value)==null||((o=i.current)==null?void 0:o.value)==null||((l=i.current)==null?void 0:l.value)==""?S("Enter the city name"):(m(!0),S(null),Q((I=(f=i.current)==null?void 0:f.value)!=null?I:"",s[0].id))},children:(0,e.jsx)(g,{icon:B})})]}),p==""||p==null||p==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:p}),n==""||n==null||n==null?null:(0,e.jsxs)("div",{className:"bg-white bg-opacity-10 border-2 text-center border-black rounded-md text-black text-md font-normal text-md my-4",children:[n.name," - ",n.code]}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Phone number"}),(0,e.jsxs)("div",{className:"p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex",children:[(0,e.jsx)("div",{className:"text-center text-black font-normal text-md mr-4",children:n==null?0:n.country.isd}),(0,e.jsx)("input",{onChange:K,value:c,type:"text",maxLength:10,className:"w-full outline-none bg-transparent focus:border-gray-300 rounded-md resize-none"})]}),(0,e.jsxs)("div",{className:"flex gap-2 mt-4 items-center",children:[(0,e.jsx)("div",{children:(0,e.jsx)("input",{checked:v,onChange:Y,type:"checkbox",name:"check2"})}),(0,e.jsx)("p",{className:"text-left text-[10px] text-black font-normal",children:"The above details are true and correct"})]}),u==""||u==null||u==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:u}),(0,e.jsx)("div",{className:"w-full",onClick:async()=>{if(s.length==0)a("Select the country");else if(A.length==0)a("Select your gender");else if(n==null||s==null)a("Select the city");else if(c==null||c==null||c==0)a("Fill the contact number");else if(c.toString().length!=10)a("Enter a 10 digit valid contact number");else if(!v)a("Check the box in order to procide");else{let t={id:k,cityId:n.id,userContact:c,userGender:d[0]=="MALE"?"1":d[0]=="FEMALE"?"2":"3"},o=await w({method:"post",url:`${C}/api/updateuser`,data:t,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});if(o.data.status==!1)return a(o.data.message);V(5),F.current.click()}},children:(0,e.jsx)(H,{text:"Next",textColor:"text-white",width:"w-full",background:"bg-primary",fontwidth:"font-bold"})}),(0,e.jsx)("div",{className:"hidden",children:(0,e.jsxs)($,{method:"post",className:"hidden",children:[(0,e.jsx)("input",{type:"hidden",name:"id",value:k.toString()}),(0,e.jsx)("input",{type:"hidden",name:"address",value:G?"/home/profilecomplete/fifthpage":"/home"}),(0,e.jsx)("button",{ref:F,name:"submit",children:"Submit"})]})})]})})})]})},ee=_;export{ee as default};
