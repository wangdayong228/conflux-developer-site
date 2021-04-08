(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{200:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(2),o=t(9),a=(t(0),t(219)),c={},i={id:"js-conflux-sdk/docs/error_handling",title:"error_handling",description:"Use try-catch to get RPC error",source:"@site/docs/js-conflux-sdk/docs/error_handling.md",permalink:"/docs/js-conflux-sdk/docs/error_handling",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/docs/error_handling.md",lastUpdatedAt:1616480795},s=[{value:"Use try-catch to get RPC error",id:"use-try-catch-to-get-rpc-error",children:[]},{value:"Common Errors",id:"common-errors",children:[]}],l={rightToc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"use-try-catch-to-get-rpc-error"},"Use try-catch to get RPC error"),Object(a.b)("p",null,"You can use js-conflux-sdk with async/await syntax, which means you can use try-catch to catch the error.\nNormally errors returned from RPC server will include ",Object(a.b)("inlineCode",{parentName:"p"},"code")," and ",Object(a.b)("inlineCode",{parentName:"p"},"message")," field, and optionally ",Object(a.b)("inlineCode",{parentName:"p"},"data")," field will\nalso been returned."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"try {\n    cfx.getBalance('cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91');\n} catch(e) {\n    console.log(e.message);\n    console.log(e.code);\n    console.log(e.data);\n}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"data")," field maybe a plain text string, also can be a hex encoded string."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"console.log(e.data);\n// You should connect a node with version 1.1.1 or pass a valid hex value\nconsole.log(e.data);\n// 0x5265766572746564\n// For hex string you can use hex decode to convert it to plain string\n// For example in node.js you can decode like this\nBuffer.from(e.data.slice(2), 'hex').toString()\n")),Object(a.b)("h3",{id:"common-errors"},"Common Errors"),Object(a.b)("h5",{id:"method-not-found"},Object(a.b)("inlineCode",{parentName:"h5"},"Method not found")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Method not found")," means you send a RPC request, and the request's method is not supported by the server.\nIf you are invoke ",Object(a.b)("inlineCode",{parentName:"p"},"cfx.sendTransaction()")," and seen this error, normally because ",Object(a.b)("inlineCode",{parentName:"p"},"cfx.wallet")," doesn't have\nthe account ",Object(a.b)("inlineCode",{parentName:"p"},"tx.from"),", you should add it to wallet through ",Object(a.b)("inlineCode",{parentName:"p"},"cfx.addPrivateKey()"),"."),Object(a.b)("h5",{id:"0x-prefix-is-missing"},Object(a.b)("inlineCode",{parentName:"h5"},"0x prefix is missing")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"0x prefix is missing")," means the RPC server expect a hex encoded string, but the request params is not passed correctly."),Object(a.b)("p",null,"Notes: If you use ",Object(a.b)("inlineCode",{parentName:"p"},"js-conflux-sdk")," version ",Object(a.b)("inlineCode",{parentName:"p"},"1.5.10 or above"),", it will use the new CIP37 format address for RPC request parameters.\nIt only work with conflux node version ",Object(a.b)("inlineCode",{parentName:"p"},"1.1.1")," or above, if you use newer version SDK with ",Object(a.b)("inlineCode",{parentName:"p"},"1.1.0")," or below you will seen this error\n",Object(a.b)("inlineCode",{parentName:"p"},"0x prefix is missing"),". To resolve it you need use a newer version RPC work with it."))}d.isMDXComponent=!0},219:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),b=r,f=u["".concat(c,".").concat(b)]||u[b]||p[b]||a;return t?o.a.createElement(f,i(i({ref:n},l),{},{components:t})):o.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);