(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5075)}])},2362:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var s=i(5893),r=i(1664);function a(e){var t=e.item;return(0,s.jsx)(r.default,{href:t.link||"",children:(0,s.jsxs)("a",{title:t.title,className:"card",children:[(0,s.jsx)("div",{className:"card__img",children:(0,s.jsx)("img",{src:t.img,alt:t.title,width:"260",height:"146",loading:"lazy"})}),(0,s.jsxs)("div",{className:"card__data",children:[(0,s.jsx)("h2",{className:"card__title t-ellipsis",children:t.title}),(0,s.jsx)("p",{children:t.categories})]})]})})}function n(e){var t=e.data,i=e.className;return(0,s.jsx)("div",{className:"grid "+(i||""),children:t.map((function(e){return(0,s.jsx)(a,{item:e},e.title)}))})}},8052:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var s=i(5893),r=i(7294),a=i(1163),n=i(9008),l=i(1664),c=i(7421),o=i(5434),d=[{text:"Blog",link:"/blog"}];function h(e){var t=e.onClick,i=e.theme,r=e.en,n=e.fr,h=(0,a.useRouter)(),m=(0,c.$G)(),u=(m.t,m.i18n);return(0,s.jsx)("header",{className:"header",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(l.default,{href:"/",children:(0,s.jsx)("a",{className:"logo",children:(0,s.jsx)("img",{src:"/images/logo.png",alt:"Tripser logo",title:"Home",width:"30",height:"30"})})}),(0,s.jsx)("div",{className:"links",children:d.map((function(e){return(0,s.jsx)(l.default,{href:e.link,children:(0,s.jsx)("a",{children:e.text})},e.text)}))}),(0,s.jsxs)("div",{className:"actions",children:[(0,s.jsx)("button",{onClick:function(){var e="en"===u.language?"fr":"en";u.changeLanguage(e),window.localStorage.setItem("lang",e),h.pathname.includes("/blog/")&&h.push("/blog/".concat("en"===e?r:n))},children:u.language}),(0,s.jsx)("button",{onClick:t,className:"btn",title:"dark"===i?"Switch to light mode":"Switch to dark mode","aria-label":"dark"===i?"Switch to light mode":"Switch to dark mode",children:"dark"===i?(0,s.jsx)(o.Dq,{title:"Dark mode","aria-labelledby":"Dark mode"}):(0,s.jsx)(o.EWX,{title:"Light mode","aria-labelledby":"Light mode"})})]})]})})}var m=i(7735),u=i(8193);function p(){var e=(0,a.useRouter)(),t=e.pathname.split("/").filter((function(e){return e}));return"/"!==e.route?(0,s.jsx)("div",{className:"breadcrumb",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/",children:"Home"})}),t.map((function(e,i){return(0,s.jsx)("li",{children:i===t.length-1?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.rYR,{}),e.replace(/-/g," ")]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.rYR,{}),(0,s.jsx)(l.default,{href:"/".concat(e),children:(0,s.jsx)("a",{children:e.replace(/-/g," ")})})]})},e)}))]})}):null}var g=[{link:"https://instagram.com/tripserblog/",title:"Instagram",icon:m.Pno},{link:"https://pinterest.com/tripserblog/",title:"Pinterest",icon:m.tvq},{link:"mailto:tripser.blog@gmail.com",title:"Mail",icon:m.IeF}];function x(){var e=(0,c.$G)().t;return(0,s.jsx)("footer",{id:"contact",className:"contact",children:(0,s.jsxs)("div",{className:"container","data-aos":"fade-right",children:[(0,s.jsx)(p,{}),(0,s.jsx)("p",{className:"mb-5",children:e("contact")}),(0,s.jsx)("div",{className:"mb-10",children:g.map((function(e){var t=e.icon;return(0,s.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"btn mb-4 mr-4",children:[(0,s.jsx)(t,{title:e.title,"aria-labelledby":e.title}),(0,s.jsx)("span",{className:"ml-1",children:e.title})]},e.link)}))}),(0,s.jsxs)("p",{className:"contact__copy",children:["\xa9 ",(new Date).getFullYear()," | Tripser"]})]})})}function j(e){var t=e.title,i=e.subtitle,r=e.splash;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"splash","data-aos":"fade-up",children:[(0,s.jsx)("img",{src:r,alt:t,width:"300",height:"150",itemProp:"image"}),(0,s.jsxs)("div",{className:"splash__headings",children:[(0,s.jsx)("h1",{itemProp:"headline name",children:t}),i?(0,s.jsx)("p",{children:i}):null]})]})})}function f(e){var t=e.title,i=e.subtitle,l=e.description,c=e.img,o=e.splash,d=e.url,m=e.children,u=e.itemtype,p=e.published,g=e.modified,f=e.lang,b=e.en,v=e.fr,N=(0,r.useState)(""),w=N[0],_=N[1],k=(0,a.useRouter)();(0,r.useEffect)((function(){var e=window.localStorage.getItem("theme");_(e)}),[]);var y=c?c.startsWith("http")?c:"https://tripser.github.io".concat(c):null;return(0,s.jsxs)("main",{className:w,itemScope:!!u||void 0,itemType:u?"http://schema.org/"+u:void 0,children:[(0,s.jsxs)(n.default,{children:[f?(0,s.jsx)("meta",{property:"og:locale",content:{en:"en_GB",fr:"fr_FR"}[f]},"og:locale"):null,(0,s.jsx)("title",{children:"".concat(t).concat("/"!==k.pathname?" | Tripser":"")},"title"),(0,s.jsx)("meta",{name:"description",content:l},"description"),(0,s.jsx)("meta",{property:"og:title",content:"".concat(t).concat("/"!==k.pathname?" | Tripser":"")},"og:title"),(0,s.jsx)("meta",{property:"og:description",content:l},"og:description"),(0,s.jsx)("meta",{property:"og:url",content:d||"https://tripser.github.io"},"og:url"),(0,s.jsx)("meta",{property:"og:image",content:y||"https://tripser.github.io/images/tripser.jpg"},"og:image"),(0,s.jsx)("meta",{property:"twitter:title",content:"".concat(t).concat("/"!==k.pathname?" | Tripser":"")},"twitter:title"),(0,s.jsx)("meta",{property:"twitter:description",content:l},"twitter:description"),(0,s.jsx)("meta",{property:"twitter:url",content:d||"https://tripser.github.io"},"twitter:url"),(0,s.jsx)("meta",{property:"twitter:image",content:y||"https://tripser.github.io/images/tripser.jpg"},"twitter:image"),p?(0,s.jsx)("meta",{property:"article:published_time",content:p}):null,g?(0,s.jsx)("meta",{property:"article:modified_time",content:g}):null]}),(0,s.jsx)(h,{onClick:function(){var e="light"===w?"dark":"light";window.localStorage.setItem("theme",e),_(e)},theme:w,en:b,fr:v}),(0,s.jsxs)("div",{className:"new-stack",children:[(0,s.jsx)(j,{title:t,subtitle:i,splash:o}),(0,s.jsx)("div",{className:"body",children:m})]}),(0,s.jsx)(x,{}),(0,s.jsx)("div",{id:"ie-banner",children:"Please open this website with a recent browser for the best experience. Avoid Internet Explorer at all costs."})]})}},5075:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return o},default:function(){return d}});var s=i(5893),r=i(1664),a=i(7421),n=i(8193),l=i(8052),c=i(2362),o=!0;function d(e){var t=e.title,i=e.description,o=e.splash,d=e.articles,h=(0,a.$G)(),m=h.t,u=h.i18n,p=d.filter((function(e){return e.lang===u.language}));return(0,s.jsx)(l.Z,{title:t,subtitle:m("subtitle"),description:i,splash:o,children:(0,s.jsxs)("div",{className:"home-page",children:[(0,s.jsxs)("section",{id:"blog",className:"blog",children:[(0,s.jsx)("div",{className:"home-shapes"}),(0,s.jsxs)("div",{className:"container mt-3","data-aos":"fade-right",children:[(0,s.jsx)("h2",{children:m("articles.latest-articles")}),(0,s.jsx)("p",{className:"mb-10",children:m("articles.discover-articles")}),(0,s.jsx)(c.Z,{data:p.slice(0,3),className:"mt-10 mb-10"}),(0,s.jsx)("div",{className:"btn-wrapper-right",children:(0,s.jsx)(r.default,{href:"/blog",children:(0,s.jsxs)("a",{className:"btn",children:[m("articles.check-articles"),(0,s.jsx)(n.rYR,{className:"ml-1"})]})})})]})]}),(0,s.jsxs)("section",{id:"about",className:"about",children:[(0,s.jsx)("div",{className:"home-shapes"}),(0,s.jsx)("div",{className:"container","data-aos":"fade-right",children:(0,s.jsxs)("div",{className:"cols cols-lg",children:[(0,s.jsxs)("div",{className:"col centered-v",children:[(0,s.jsx)("h2",{children:m("about.intro")}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:m("about.body")}})]}),(0,s.jsx)("div",{className:"col centered-v",children:(0,s.jsx)("img",{src:"/images/exploring.svg",alt:"developer thinking next to a computer",width:"270",height:"112",loading:"lazy",className:"about__img mt-5 mb-5"})})]})})]})]})})}}},function(e){e.O(0,[415,228,617,949,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);