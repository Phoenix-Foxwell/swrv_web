var o=[60,60,24,7,4.345238095238096,12];function l(r){return r instanceof Date?r:!isNaN(r)||/^\d+$/.test(r)?new Date(parseInt(r)):(r=(r||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(r))}function i(r,t){var e=r<0?1:0;r=Math.abs(r);for(var n=r,a=0;r>=o[a]&&a<o.length;a++)r/=o[a];return r=Math.floor(r),a*=2,r>(a===0?9:1)&&(a+=1),t(r,a,n)[e].replace("%s",r.toString())}function c(r,t){var e=t?l(t):new Date;return(+e-+l(r))/1e3}var u={},f=function(r,t){u[r]=t},m=function(r){return u[r]||u.en_US};var x=function(r,t,e){var n=c(r,e&&e.relativeDate);return i(n,m(t))};var g=["second","minute","hour","day","week","month","year"];function v(r,t){if(t===0)return["just now","right now"];var e=g[Math.floor(t/2)];return r>1&&(e+="s"),[r+" "+e+" ago","in "+r+" "+e]}var s=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"];function p(r,t){if(t===0)return["\u521A\u521A","\u7247\u523B\u540E"];var e=s[~~(t/2)];return[r+" "+e+"\u524D",r+" "+e+"\u540E"]}f("en_US",v);f("zh_CN",p);export{x as a};