import{a}from"/build/_shared/chunk-5VZ5YK5L.js";import{a as w}from"/build/_shared/chunk-NJKAJ7NJ.js";import{a as N}from"/build/_shared/chunk-KJTVB6JA.js";import"/build/_shared/chunk-5ROUF77C.js";import{E as T,O as b,Q as L,X as j,a as s}from"/build/_shared/chunk-A6XXWJXG.js";import{b as I,l as E}from"/build/_shared/chunk-P4VL4XDR.js";import{a as i,b as c}from"/build/_shared/chunk-WLYSEPGK.js";import{e as h,g as ct,h as S}from"/build/_shared/chunk-EUC6ZTEW.js";var P=h(ct());var e=h(S());var mt=()=>{let l=E(),y=l.userdata.id,R=l.userdata.brandId,A=I(),O=a(t=>t.dos),F=a(t=>t.donts),m=a(t=>t.pdffile),p=a(t=>t.image),B=a(t=>t.platform).join(),C=a(t=>t.campaignTypeId),gt=a(t=>t.media),g=a(t=>t.campaignInfo),D=a(t=>t.approval)?"1":"0",ut=a(t=>t.discoutCoupon),ft=a(t=>t.affiliatedLinks),$=a(t=>t.target).toString(),U=a(t=>t.minTarget).toString(),H=a(t=>t.rating).toString(),M=a(t=>t.mendtion).join(),X=a(t=>t.hashtag).join(),G=a(t=>t.dos).join(),q=a(t=>t.donts).join(),K=a(t=>t.audience).join(),Y=a(t=>t.infLocation).id,z=a(t=>t.tilldate),J=a(t=>t.maxInf).toString(),Q=a(t=>t.remuneration),xt=a(t=>t.remunerationType),u=a(t=>t.campaignName),V=a(t=>t.planedBudget).toString(),W=a(t=>t.costPerPost).toString(),k=a(t=>t.startDate),Z=a(t=>t.endDate),_=a(t=>t.minReach).toString(),tt=a(t=>t.maxReact).toString(),et=a(t=>t.publicGlobally)?"1":"2",at=a(t=>t.brandinfo),ot=a(t=>t.campaginPurpose),nt=a(t=>t.lat),st=a(t=>t.long),it=a(t=>t.radius),[d,f]=(0,P.useState)(null);async function lt(){let t={userId:y,brandUserId:y,brandId:R,cityId:"1",campaignTypeId:C,campaignName:u,campaignInfo:g,startAt:k,endAt:Z,minReach:_,maxReach:tt,costPerPost:W,totalBudget:V,minEligibleRating:H,currencyId:"3",categories:Y,platforms:B,mentions:M,hashtags:X,dos:G,donts:q,totalParticipants:J,remunerationCash:Q,geoLat:nt.toString(),geoLng:st.toString(),geoRadiusKm:it.toString(),postApproval:D,audienceLocations:K,inviteStartAt:k,inviteEndAt:z,purpose:ot,isPublic:et,campaignStatus:"1"};C=="4"&&(t.minTarget=U,t.maxTarget=$);let o=await i({method:"post",url:`${c}/api/add-campaign`,data:t,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});if(o.data.status==!1)return f(o.data.message);let n=o.data.data.campaign.id,x=await N(m[0]);if(x.status){let dt={campaignId:n,title:`attachemtn${n}`,url:x.data};await i({method:"post",url:`${c}/api/add-campaign-attachment`,data:dt,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});for(let r=0;r<p.length;r++){let v=await N(p[r]);if(v.status){let rt={campaignId:n,title:`moodboard${n}${r}`,url:v.data};await i({method:"post",url:`${c}/api/add-campaign-attachment`,data:rt,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}})}else f(v.data)}return await i({method:"post",url:"http://bluelemontech.in:5563/notification/send",data:{title:"New Campaign Created",body:u,to:"/topics/influencer"}}),A(`/home/createcampaign/inviteinf/${o.data.data.campaign.id}`)}else f(x.data)}return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"flex gap-x-4 flex-col lg:flex-row",children:[(0,e.jsxs)("div",{className:"bg-white shadow-xl rounded-xl px-8 py-4 mt-4",children:[(0,e.jsxs)("div",{className:"flex items-end gap-x-3",children:[(0,e.jsx)("div",{className:"flex",children:(0,e.jsx)("img",{src:l.userdata.brand.logo,alt:"error",className:"object-cover w-16 h-16 rounded"})}),(0,e.jsx)("p",{className:"text-lg",children:l.userdata.brand.name})]}),(0,e.jsx)("p",{className:"text-lg mt-2 font-semibold",children:u}),(0,e.jsx)("h3",{className:"text-black font-bold text-md text-left mt-4",children:"Info"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xs text-left",children:at}),(0,e.jsx)("h3",{className:"text-black font-bold text-md text-left mt-4",children:"campaign Information"}),g,(0,e.jsx)("p",{className:"text-black font-semibold text-xs text-left"}),(0,e.jsx)("h3",{className:"text-black font-bold text-md text-left mt-4",children:"Mood boards"}),(0,e.jsx)("div",{className:"flex gap-x-4  overflow-x-scroll no-scrollbar w-[300px] lg:w-[600px] md:w-[400px]",children:p.map((t,o)=>{var n=URL.createObjectURL(t);return(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"w-32 h-32 bg-gray-200 rounded-xl grid place-items-center relative",children:(0,e.jsx)("div",{className:"top-0 left-0 absolute h-full w-full",children:(0,e.jsx)("img",{src:n,alt:"error",className:"w-full h-full rounded-xl object-cover"})})})},o)})}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Attachments"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4",children:[(0,e.jsx)("h3",{className:"text-black font-semibold  text-md",children:m.length==0?"":m[0].name}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full",children:(0,e.jsx)(s,{icon:T})})]}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"You should"}),(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row gap-2",children:[(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{className:"bg-[#EEEEEE] w-full h-10 rounded-lg flex",children:[(0,e.jsx)("div",{className:"grid place-items-center px-4 rounded-lg font-bold text-green-500",children:(0,e.jsx)(s,{icon:j})}),(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("h2",{className:"text-primary text-lg text-left font-medium",children:"Do"})}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",children:(0,e.jsx)(s,{icon:b})})]}),(0,e.jsx)("div",{children:O.map((t,o)=>(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex",children:[t,(0,e.jsx)("div",{className:"grow",children:" "})]})},o))})]}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{className:"bg-[#EEEEEE] w-full h-10 rounded-lg flex",children:[(0,e.jsx)("div",{className:"grid place-items-center px-4 rounded-lg font-bold text-red-500",children:(0,e.jsx)(s,{icon:L})}),(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("h2",{className:"text-primary text-lg text-left font-medium",children:"Don't"})}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",children:(0,e.jsx)(s,{icon:b})})]}),(0,e.jsx)("div",{children:F.map((t,o)=>(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex",children:[t,(0,e.jsx)("div",{className:"grow",children:" "})]})},o))})]})]})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-medium",children:"Campaign Summary"}),(0,e.jsx)("h3",{className:"text-black font-bold text-md text-left mt-4",children:"Congratulations"}),(0,e.jsx)("p",{className:"text-black font-semibold text-xs text-left",children:g}),d==""||d==null||d==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:d}),(0,e.jsxs)("div",{className:"flex w-full mt-10",children:[(0,e.jsx)("div",{onClick:()=>{A(-1)},className:"w-full",children:(0,e.jsx)(w,{text:"Back",textColor:"text-black",background:"bg-gray-100",width:"w-full",fontwidth:"font-bold"})}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-full",onClick:()=>{lt()},children:(0,e.jsx)(w,{text:"Create",textColor:"text-white",background:"bg-secondary",width:"w-full",fontwidth:"font-bold"})})]})]})})]})})},pt=mt;export{pt as default};