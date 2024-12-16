(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7275:(e,a,t)=>{Promise.resolve().then(t.bind(t,2377))},7401:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});var r=t(2115);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((e,a,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===a).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.forwardRef)((e,a)=>{let{color:t="currentColor",size:l=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:d="",children:c,iconNode:u,...h}=e;return(0,r.createElement)("svg",{ref:a,...i,width:l,height:l,stroke:t,strokeWidth:o?24*Number(n)/Number(l):n,className:s("lucide",d),...h},[...u.map(e=>{let[a,t]=e;return(0,r.createElement)(a,t)}),...Array.isArray(c)?c:[c]])}),o=(e,a)=>{let t=(0,r.forwardRef)((t,i)=>{let{className:o,...d}=t;return(0,r.createElement)(n,{ref:i,iconNode:a,className:s("lucide-".concat(l(e)),o),...d})});return t.displayName="".concat(e),t}},2377:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>v});var r=t(5155),l=t(2115);let s=e=>{let{prefersReducedMotion:a=!1}=e,[t,s]=(0,l.useState)(0);return(0,l.useEffect)(()=>{if(a)return;let e=!1,t=()=>{e||(window.requestAnimationFrame(()=>{s(window.scrollY),e=!1}),e=!0)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[a]),(0,r.jsxs)("div",{className:"text-center relative",children:[(0,r.jsxs)("h1",{className:"text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 relative",children:[(0,r.jsx)("span",{className:"block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600",style:{transform:a?"none":"translateY(".concat(.1*t,"px)")},children:"Create moments"}),(0,r.jsx)("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600",style:{transform:a?"none":"translateY(".concat(.05*t,"px)")},children:"for what matters"})]}),(0,r.jsx)("p",{className:"mb-12 relative",style:{transform:a?"none":"translateY(".concat(.02*t,"px)")},children:(0,r.jsx)("span",{className:"text-2xl md:text-3xl text-gray-400 font-light",children:"When making time means being present"})}),(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center gap-4 mb-16",children:[(0,r.jsxs)("button",{className:"group px-8 py-3 text-white rounded-lg font-medium bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 relative overflow-hidden",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"}),(0,r.jsx)("span",{className:"relative",children:"Sign in with SSO"})]}),(0,r.jsxs)("button",{className:"group px-8 py-3 rounded-lg font-medium text-gray-300 bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 relative overflow-hidden",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-teal-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"}),(0,r.jsx)("span",{className:"relative",children:"View Design System"})]})]})]})};var i=t(7401);let n=(0,i.A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),o=(0,i.A)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),d=(0,i.A)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),c=(0,i.A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),u=()=>(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-24",children:[{icon:n,label:"Request Time Off",ariaLabel:"Request Time Off Action"},{icon:o,label:"View Team Calendar",ariaLabel:"View Team Calendar Action"},{icon:d,label:"Check Holiday Calendar",ariaLabel:"Check Holiday Calendar Action"}].map(e=>(0,r.jsxs)("button",{className:"group relative flex items-center justify-between p-4 rounded-lg border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300","aria-label":e.ariaLabel,children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 relative",children:[(0,r.jsxs)("div",{className:"w-10 h-10 flex items-center justify-center relative",children:[(0,r.jsx)("div",{className:"absolute inset-0 rounded-full bg-purple-900/20 group-hover:bg-purple-800/30 transition-all duration-300"}),(0,r.jsx)(e.icon,{className:"w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-all duration-300 relative",strokeWidth:1.5})]}),(0,r.jsx)("span",{className:"text-gray-300 group-hover:text-purple-300 transition-colors duration-300",children:e.label})]}),(0,r.jsx)(c,{className:"w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300"})]},e.label))}),h=e=>{let{Icon:a,title:t,description:l,tag:s,ariaLabel:i}=e;return(0,r.jsxs)("div",{className:"group rounded-lg p-6 border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300","aria-label":i,children:[(0,r.jsxs)("div",{className:"relative w-12 h-12 mb-6",children:[(0,r.jsx)("div",{className:"absolute inset-0 rounded-full bg-purple-900/20 group-hover:bg-purple-800/30 transition-all duration-300"}),(0,r.jsx)("div",{className:"relative w-full h-full flex items-center justify-center",children:(0,r.jsx)(a,{className:"w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-all duration-300",strokeWidth:1.5,"aria-hidden":"true"})})]}),(0,r.jsx)("h3",{className:"text-lg font-semibold text-white mb-2",children:t}),(0,r.jsx)("p",{className:"text-sm mb-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300",children:l}),s&&(0,r.jsx)("span",{className:"inline-block text-xs font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-300",children:s})]})},p=(0,i.A)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),m=(0,i.A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),g=e=>{let{show:a,onToggle:t,ariaLabel:l}=e;return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("button",{onClick:t,className:"flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative group px-4 py-2 rounded-lg","aria-expanded":a,"aria-haspopup":"true","aria-label":l||"Language selector",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gray-800/0 group-hover:bg-gray-800/50 rounded-lg transition-all duration-300"}),(0,r.jsx)(p,{className:"w-5 h-5 relative"}),(0,r.jsx)(m,{className:"w-4 h-4 relative transition-transform duration-300 ".concat(a?"rotate-180":"")})]}),a&&(0,r.jsx)("div",{className:"absolute right-0 mt-2 py-2 w-48 rounded-lg border border-gray-800/50 bg-gray-900/95 backdrop-blur-lg transform-gpu transition-all duration-300",children:["English","Espa\xf1ol","Fran\xe7ais"].map(e=>(0,r.jsx)("button",{className:"w-full px-4 py-2 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200",children:e},e))})]})},x=(0,i.A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),b=(0,i.A)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);function v(){let[e,a]=(0,l.useState)(!1),[t,i]=(0,l.useState)(!1),[n,d]=(0,l.useState)(0),[c,m]=(0,l.useState)(!1);(0,l.useRef)(null),(0,l.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)");m(e.matches);let t=e=>m(e.matches);e.addEventListener("change",t),a(!0);let r=!1,l=()=>{r||(window.requestAnimationFrame(()=>{d(window.scrollY),r=!1}),r=!0)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l),e.removeEventListener("change",t)}},[]);let v=[{icon:x,title:"Smart Calendar",description:"Intelligent planning that puts your time first",tag:"AI-powered scheduling",ariaLabel:"Smart Calendar Feature"},{icon:p,title:"Region Aware",description:"Seamlessly adapts to your location and policies",tag:"Global support",ariaLabel:"Region Awareness Feature"},{icon:o,title:"Team Sync",description:"Keep your team aligned while you're away",tag:"Real-time updates",ariaLabel:"Team Synchronization Feature"}];return(0,r.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950",children:[(0,r.jsxs)("div",{className:"fixed inset-0 opacity-30",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-teal-900/20 to-purple-900/20"}),(0,r.jsx)("div",{className:"absolute inset-0 backdrop-blur-3xl"}),!c&&(0,r.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent opacity-50 animate-pulse"})})]}),(0,r.jsx)("header",{className:"sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800/50",children:(0,r.jsx)("div",{className:"relative max-w-6xl mx-auto px-4",children:(0,r.jsxs)("div",{className:"flex justify-between items-center h-16",children:[(0,r.jsxs)("span",{className:"text-xl font-semibold text-teal-500 flex items-center gap-2 relative group",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-teal-500/10 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"}),(0,r.jsx)(b,{className:"w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300"}),(0,r.jsx)("span",{className:"relative",children:"alfie"})]}),(0,r.jsx)(g,{show:t,onToggle:()=>i(!t),ariaLabel:"Select language"})]})})}),(0,r.jsx)("main",{className:"relative max-w-6xl mx-auto px-4",children:(0,r.jsxs)("div",{className:"py-24",children:[(0,r.jsx)(s,{prefersReducedMotion:c}),(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:"grid md:grid-cols-3 gap-5",children:v.map(e=>(0,r.jsx)(h,{Icon:e.icon,icon:e.icon,title:e.title,description:e.description,tag:e.tag,ariaLabel:e.ariaLabel},e.title))})]})})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[441,517,358],()=>a(7275)),_N_E=e.O()}]);