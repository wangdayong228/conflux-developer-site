(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(215)),c={},i={id:"js-conflux-sdk/docs/quick_start",title:"quick_start",description:"Quickstart",source:"@site/docs/js-conflux-sdk/docs/quick_start.md",permalink:"/docs/js-conflux-sdk/docs/quick_start",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/docs/quick_start.md",lastUpdatedAt:1615796018},l=[{value:"Install",id:"install",children:[]},{value:"Using Conflux",id:"using-conflux",children:[{value:"Povider: Official testnet",id:"povider-official-testnet",children:[]}]},{value:"Getting balance",id:"getting-balance",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"quickstart"},"Quickstart"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"All code starting with a $ is meant to run on your terminal. All code starting with a > is meant to run in a node.js interpreter.")),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("p",null,"Install the SDK with npm."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install js-conflux-sdk\n")),Object(a.b)("h2",{id:"using-conflux"},"Using Conflux"),Object(a.b)("p",null,"This library depends on a connection to an Conflux node. These connections normally called Providers and there are several ways to configure them. This guide will use Conflux testnet provider ",Object(a.b)("inlineCode",{parentName:"p"},"https://test.confluxrpc.org/v2"),"."),Object(a.b)("h3",{id:"povider-official-testnet"},"Povider: Official testnet"),Object(a.b)("p",null,"The quickest way to interact with the Conflux blockchain is using a remote node provider, like official testnet. You can connect to a remote node by specifying the endpoint."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// import Conflux Class\nconst { Conflux } = require('js-conflux-sdk');\n// initialize a Conflux object\nconst conflux = new Conflux({\n    url: 'https://test.confluxrpc.org/2', // testnet provider\n    logger: console, // for debug: this will log all the RPC request and response to console\n    networkId: 1,\n    // timeout: 300 * 1000, // request timeout in ms, default 300*1000 ms === 5 minute\n});\n")),Object(a.b)("h2",{id:"getting-balance"},"Getting balance"),Object(a.b)("p",null,"Then we can use the Conflux instance get blockchain data."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"async function main() {\n  // use conflux to get balance (in Drip) of a conflux address\n  const address = 'cfxtest:aak2rra2njvd77ezwjvx04kkds9fzagfe6d5r8e957';\n  const balance = await conflux.getBalance(address);\n  console.log(balance);\n}\n\nmain();\n")),Object(a.b)("p",null,"The conflux instance have a lot methods that correspond to Conflux RPC methods, such as ",Object(a.b)("inlineCode",{parentName:"p"},"getBalance")," map to RPC ",Object(a.b)("inlineCode",{parentName:"p"},"cfx_getBalance"),". Call these methods will return a promise or thenable, which means you can use it with ES6 ",Object(a.b)("inlineCode",{parentName:"p"},"async/await")," syntax."),Object(a.b)("p",null,"For the detail documentation of Conflux methods and options, you can check with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/json_rpc"}),"fullnode RPC")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/js-conflux-sdk/docs/javascript_sdk"}),"JS-SDK API")))}u.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);