import{a as d,b as s}from"/build/_shared/chunk-U7IUWNDJ.js";import{h as o}from"/build/_shared/chunk-BDKSMX4O.js";import{c as r,e as a}from"/build/_shared/chunk-7UEYUE33.js";var t=r(a()),m=l=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"w-full px-6 sm:px-16",children:[l.error?(0,t.jsx)("h1",{className:"border-2 border-rose-500 border-l-4 w-full text-center rounded-md text-2xl font-semibold  bg-rose-500 bg-opacity-10 text-rose-500",children:"Error 404 Post not found"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"md:h-[550px] w-full relative",children:[(0,t.jsx)("img",{src:l.image,alt:"error",className:"h-full w-full rounded-lg inline-block relative object-cover object-top"}),(0,t.jsx)("div",{className:"w-full mx-auto absolute bottom-0 hidden md:block",children:(0,t.jsxs)("div",{className:"w-full md:w-3/5 lg:w-4/6 mx-auto  pt-8 ",children:[(0,t.jsx)("h1",{className:"text-white text-2xl font-semibold md:w-96 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",children:l.title}),(0,t.jsx)("h1",{className:"text-white text-lg font-semibold md:w-96 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",children:l.date.toString().split(" ")[0]}),(0,t.jsx)("p",{className:"text-md font-semibold text-white py-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",children:l.shorttitle})]})})]}),(0,t.jsx)("div",{className:"w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8",children:(0,t.jsx)("p",{className:"text-md font-semibold text-primary py-10",children:l.description})})]}),(0,t.jsx)("div",{className:"bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6",children:(0,t.jsxs)("div",{className:"w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8",children:[(0,t.jsx)("h3",{className:"text-primary text-3xl font-bold",children:"Top picks"}),(0,t.jsx)("div",{className:"h-[1px] bg-gray-600 w-full my-2"}),l.relatedArtical.splice(2,2).map((e,i)=>(0,t.jsx)("div",{children:(0,t.jsx)(o,{to:`/blogs/bloginfo/${e.id}`,children:(0,t.jsx)(s,{title:`${e.shortDesc.toString().substring(0,50)}...`,time:e.dateTime,imageUrl:e.imageUrl})},i)},i))]})}),(0,t.jsxs)("div",{className:"w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8",children:[(0,t.jsx)("h3",{className:"text-primary text-3xl font-bold",children:"Related article"}),(0,t.jsx)("div",{className:"h-[1px] bg-gray-600 w-full my-2"}),(0,t.jsx)("div",{className:"flex gap-6 justify-center flex-wrap",children:l.relatedArtical.splice(0,3).map((e,i)=>(0,t.jsx)("div",{children:(0,t.jsx)(o,{to:`/blogs/bloginfo/${e.id}`,children:(0,t.jsx)(d,{title:`${e.shortDesc.toString().substring(0,50)}...`,time:e.dateTime,imageUrl:e.imageUrl})},i)},i))})]})]})}),p=m;export{p as a};
