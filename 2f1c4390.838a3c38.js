(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(210)),c={id:"best_practices",title:"Best Practices",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Best_Practices.md"},i={id:"conflux-portal/docs/en/portal/best_practices",title:"Best Practices",description:"Call contract method with contractInstance.contractMethod(...)",source:"@site/docs/conflux-portal/docs/en/portal/Best_Practices.md",permalink:"/docs/conflux-portal/docs/en/portal/best_practices",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Best_Practices.md",lastUpdatedAt:1609812162},l=[{value:"Call contract method with <code>contractInstance.contractMethod(...)</code>",id:"call-contract-method-with-contractinstancecontractmethod",children:[]},{value:"Default Token List",id:"default-token-list",children:[]},{value:"Defining Your App&#39;s Icon",id:"defining-your-apps-icon",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"call-contract-method-with-contractinstancecontractmethod"},"Call contract method with ",Object(o.b)("inlineCode",{parentName:"h2"},"contractInstance.contractMethod(...)")),Object(o.b)("p",null,"There are two ways to call a contract method."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"contractInstance.contractMethod(params).sendTransaction(...)...")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"cfx.sendTransaction({..., data: contractInstance.contractMethod(params).data})..."))),Object(o.b)("p",null,"Please use the first one. Portal can read the params and display them in the\nuser confirmation popup so that users can get more information about what's\ndapps' requests, for example, how much token/cfx the transaction costs."),Object(o.b)("h2",{id:"default-token-list"},"Default Token List"),Object(o.b)("p",null,"If you're a major and popular token, you may qualify to be listed in our\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/yqrashawn/cfx-contract-metadata"}),"cfx-contract-metadata"),"\nregistry. This is a centralized solution and takes a larger toll on our\ndevelopment team, so we prefer to avoid the politics of picking and choosing\ntokens that get auto-detected in users' accounts, so please see if the EIP-747\nmethod above can suit your needs before submitting a new token there for\ninclusion. "),Object(o.b)("p",null,"If you have a user on your site, asking them to click once to add a token is a\nsmall burden on them, and allows you to leverage the trusting relationship you\nalready have with your user instead of our central repository. "),Object(o.b)("h2",{id:"defining-your-apps-icon"},"Defining Your App's Icon"),Object(o.b)("p",null,"When your site makes a login request to a Confluxi Portal user, Confluxi Portal may\nrender a modal that display's your site icon. "),Object(o.b)("p",null,"We retrieve this icon using the HTML selector ",Object(o.b)("inlineCode",{parentName:"p"},'head > link[rel="shortcut\nicon"]'),", so to customize this icon for your site, just make sure to follow the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Favicon"}),"favicon standard"),", and make sure to have\na ",Object(o.b)("inlineCode",{parentName:"p"},"link")," tag within your site's ",Object(o.b)("inlineCode",{parentName:"p"},"head")," with ",Object(o.b)("inlineCode",{parentName:"p"},'rel = "shortcut icon"'),", like this. "),Object(o.b)("p",null,"The tag's ",Object(o.b)("inlineCode",{parentName:"p"},"href")," attribute will be used for assigning the site icon."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<head>\n  <link rel="shortcut icon" href="https://your-site.com/your-icon.png">\n</head>\n')))}u.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(h,i(i({ref:t},s),{},{components:n})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);