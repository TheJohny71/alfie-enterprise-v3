(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{2712:(e,r,t)=>{Promise.resolve().then(t.bind(t,6926))},6926:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var a=t(5155),n=t(5984),s=t(98),i=t(9749);function o(){return(0,a.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950",children:[(0,a.jsx)("header",{className:"sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800/50",children:(0,a.jsx)("div",{className:"max-w-6xl mx-auto px-4",children:(0,a.jsx)("div",{className:"flex justify-between items-center h-16",children:(0,a.jsxs)("span",{className:"text-xl font-semibold text-purple-500 flex items-center gap-2",children:[(0,a.jsx)(s.A,{className:"w-5 h-5"}),"alfie calendar"]})})})}),(0,a.jsx)("main",{className:"max-w-6xl mx-auto px-4 py-8",children:(0,a.jsx)(i.Z,{className:"border-gray-800/50 bg-gray-800/30 backdrop-blur-sm",children:(0,a.jsx)("div",{className:"p-6",children:(0,a.jsx)(n.V,{mode:"month"})})})})]})}},5984:(e,r,t)=>{"use strict";t.d(r,{V:()=>l});var a=t(5155),n=t(2115),s=t(3518),i=t(6967),o=t(1567),c=t(3312);function l(e){let{mode:r="month",className:t}=e,[l,d]=(0,n.useState)(new Date),[u,g]=(0,n.useState)(null),m=e=>new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),h=e=>new Date(e.getFullYear(),e.getMonth(),1).getDay();return(0,a.jsxs)("div",{className:(0,o.cn)("w-full space-y-4",t),children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold text-gray-900",children:l.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(c.$,{variant:"ghost",size:"icon",onClick:()=>{d(new Date(l.getFullYear(),l.getMonth()-1))},children:(0,a.jsx)(s.A,{className:"h-4 w-4"})}),(0,a.jsx)(c.$,{variant:"ghost",size:"icon",onClick:()=>{d(new Date(l.getFullYear(),l.getMonth()+1))},children:(0,a.jsx)(i.A,{className:"h-4 w-4"})})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-7 gap-px rounded-lg bg-gray-200",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(e=>(0,a.jsx)("div",{className:"bg-gray-50 py-2 text-center text-sm font-medium text-gray-500",children:e},e)),(()=>{let e=m(l),r=h(l),t=[];for(let e=0;e<r;e++)t.push((0,a.jsx)("div",{className:"h-24 border border-gray-100 bg-gray-50"},"empty-".concat(e)));for(let r=1;r<=e;r++){let e=new Date(l.getFullYear(),l.getMonth(),r),n=(null==u?void 0:u.toDateString())===e.toDateString(),s=new Date().toDateString()===e.toDateString();t.push((0,a.jsx)("button",{onClick:()=>g(e),className:(0,o.cn)("h-24 border border-gray-100 p-2 transition-colors","focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50",n&&"bg-accent/10 border-accent/20",s&&"font-semibold"),children:(0,a.jsx)("span",{className:(0,o.cn)("inline-flex h-6 w-6 items-center justify-center rounded-full",s&&"bg-accent/10 text-accent"),children:r})},r))}return t})()]})]})}},3312:(e,r,t)=>{"use strict";t.d(r,{$:()=>c});var a=t(5155),n=t(2115),s=t(1027),i=t(1567);let o=(0,s.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",primary:"bg-primary text-primary-foreground hover:bg-primary/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,r)=>{let{className:t,variant:n,size:s,asChild:c=!1,...l}=e;return(0,a.jsx)("button",{className:(0,i.cn)(o({variant:n,size:s,className:t})),ref:r,...l})});c.displayName="Button"},9749:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var a=t(5155),n=t(2115),s=t(1027),i=t(1567);let o=(0,s.F)("rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md",{variants:{variant:{feature:"bg-white border-accent/10",info:"bg-gray-50 border-gray-100",action:"bg-white border-gray-200"}},defaultVariants:{variant:"feature"}}),c=n.forwardRef((e,r)=>{let{className:t,variant:n,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,i.cn)(o({variant:n,className:t})),...s})});c.displayName="Card"},1567:(e,r,t)=>{"use strict";t.d(r,{cn:()=>s});var a=t(3463),n=t(9795);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,a.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[665,441,517,358],()=>r(2712)),_N_E=e.O()}]);