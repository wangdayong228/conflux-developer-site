(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),c=n(9),a=(n(0),n(207)),o={},l={id:"js-conflux-sdk/README",title:"README",description:"js-conflux-sdk",source:"@site/docs/js-conflux-sdk/README.md",permalink:"/docs/js-conflux-sdk/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/README.md",lastUpdatedAt:1605523774},i=[{value:"npm",id:"npm",children:[]},{value:"1.0 Key features",id:"10-key-features",children:[]},{value:"Quick Usage",id:"quick-usage",children:[{value:"Nodejs",id:"nodejs",children:[]},{value:"Frontend",id:"frontend",children:[]}]},{value:"Documentation",id:"documentation",children:[]},{value:"TODO",id:"todo",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"js-conflux-sdk"},"js-conflux-sdk"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/js-conflux-sdk.svg",alt:"npm"})))),Object(a.b)("h2",{id:"npm"},Object(a.b)("a",Object(r.a)({parentName:"h2"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/npm/dm/js-conflux-sdk.svg",alt:"npm"})))),Object(a.b)("p",null,"JavaScript Conflux Software Development Kit"),Object(a.b)("h2",{id:"10-key-features"},"1.0 Key features"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add ",Object(a.b)("inlineCode",{parentName:"li"},"cfx.wallet")," to manage multiple accounts, which has replace v0.13's ",Object(a.b)("inlineCode",{parentName:"li"},"cfx.Account"),"."),Object(a.b)("li",{parentName:"ol"},"Add ",Object(a.b)("inlineCode",{parentName:"li"},"cfx.InternalContract(name)")," to interact with Conflux internal contracts."),Object(a.b)("li",{parentName:"ol"},"Add websocket provider, support pub/sub"),Object(a.b)("li",{parentName:"ol"},"Provide ",Object(a.b)("inlineCode",{parentName:"li"},"Drip")," to easily convert unit between CFX, Drip, Gdrip"),Object(a.b)("li",{parentName:"ol"},"Use ",Object(a.b)("inlineCode",{parentName:"li"},"JSBI")," for front-end, native ",Object(a.b)("inlineCode",{parentName:"li"},"BigInt")," for back-end")),Object(a.b)("p",null,"Check the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/js-conflux-sdk/CHANGE_LOG"}),"complete changelog")),Object(a.b)("h2",{id:"quick-usage"},"Quick Usage"),Object(a.b)("h3",{id:"nodejs"},"Nodejs"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const { Conflux } = require('js-conflux-sdk');\n\nconst conflux = new Conflux({\n  url: 'http://test.confluxrpc.org',\n  logger: console, // for debug\n});\n")),Object(a.b)("p",null,"require deep nested file/dir  "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const util = require('js-conflux-sdk/src/util');\n")),Object(a.b)("h3",{id:"frontend"},"Frontend"),Object(a.b)("h4",{id:"umd"},"umd"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Conflux } from 'js-conflux-sdk/dist/js-conflux-sdk.umd.min.js';\n")),Object(a.b)("p",null,"or if your bundler supports the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package.json#browser"}),Object(a.b)("inlineCode",{parentName:"a"},"browser")," field")," in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"  "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Conflux } from 'js-conflux-sdk';\n")),Object(a.b)("p",null,"or  "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script type="text/javascript" src="node_modules/js-conflux-sdk/dist/js-conflux-sdk.umd.min.js"><\/script>\n<script type="text/javascript">\n  const conflux = new window.Conflux.Conflux({\n    url: \'http://test.confluxrpc.org\',\n    logger: console,\n  });\n<\/script>\n')),Object(a.b)("h2",{id:"documentation"},"Documentation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/js-conflux-sdk/docs/quick_intro"}),"Quick Intro (Recommend to read)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/js-conflux-sdk/docs/how_to_send_tx"}),"Complete document for send transaction")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/js-conflux-sdk/docs/interact_with_contract"}),"Interacting with contract")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/js-conflux-sdk/docs/javascript_sdk"}),"API"))),Object(a.b)("h2",{id:"todo"},"TODO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"support ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-23.md"}),"CIP 23"))))}u.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,j=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?c.a.createElement(j,l(l({ref:t},s),{},{components:n})):c.a.createElement(j,l({ref:t},s))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);