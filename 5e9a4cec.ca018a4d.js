(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return i}));var n=r(2),l=r(9),a=(r(0),r(219)),c={},u={id:"js-conflux-sdk/docs/block_trace",title:"block_trace",description:"block_trace",source:"@site/docs/js-conflux-sdk/docs/block_trace.md",permalink:"/docs/js-conflux-sdk/docs/block_trace",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/docs/block_trace.md",lastUpdatedAt:1619423853},b=[{value:"Call",id:"call",children:[]},{value:"Create",id:"create",children:[]},{value:"CallResult",id:"callresult",children:[]},{value:"CreateResult",id:"createresult",children:[]},{value:"InternalTransferAction",id:"internaltransferaction",children:[]},{value:"CallType",id:"calltype",children:[]},{value:"OutCome",id:"outcome",children:[]}],o={rightToc:b};function i(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"block_trace"},"block_trace"),Object(a.b)("p",null,"Block response data structure"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "transactionTraces": [\n        {\n            "traces": [\n                {\n                    "action": {}\n                }\n            ]\n        }\n    ]    \n}\n')),Object(a.b)("h1",{id:"action-enum"},"Action enum:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Call "),Object(a.b)("li",{parentName:"ol"},"Create"),Object(a.b)("li",{parentName:"ol"},"CallResult"),Object(a.b)("li",{parentName:"ol"},"CreateResult"),Object(a.b)("li",{parentName:"ol"},"InternalTransferAction")),Object(a.b)("h2",{id:"call"},"Call"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pub from: RpcAddress,"),Object(a.b)("li",{parentName:"ul"},"pub to: RpcAddress,"),Object(a.b)("li",{parentName:"ul"},"pub value: U256,"),Object(a.b)("li",{parentName:"ul"},"pub gas: U256,"),Object(a.b)("li",{parentName:"ul"},"pub input: Bytes,"),Object(a.b)("li",{parentName:"ul"},"pub call_type: CallType,")),Object(a.b)("h2",{id:"create"},"Create"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pub from: RpcAddress,"),Object(a.b)("li",{parentName:"ul"},"pub value: U256,"),Object(a.b)("li",{parentName:"ul"},"pub gas: U256,"),Object(a.b)("li",{parentName:"ul"},"pub init: Bytes,")),Object(a.b)("h2",{id:"callresult"},"CallResult"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pub outcome: Outcome,"),Object(a.b)("li",{parentName:"ul"},"pub gas_left: U256,"),Object(a.b)("li",{parentName:"ul"},"pub return_data: Bytes,")),Object(a.b)("h2",{id:"createresult"},"CreateResult"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pub outcome: Outcome,"),Object(a.b)("li",{parentName:"ul"},"pub addr: RpcAddress,"),Object(a.b)("li",{parentName:"ul"},"pub gas_left: U256,"),Object(a.b)("li",{parentName:"ul"},"pub return_data: Bytes,")),Object(a.b)("h2",{id:"internaltransferaction"},"InternalTransferAction"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pub from: RpcAddress,"),Object(a.b)("li",{parentName:"ul"},"pub to: RpcAddress,"),Object(a.b)("li",{parentName:"ul"},"pub value: U256,")),Object(a.b)("h2",{id:"calltype"},"CallType"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"None, 0 "),Object(a.b)("li",{parentName:"ul"},"Call, 1"),Object(a.b)("li",{parentName:"ul"},"CallCode, 2"),Object(a.b)("li",{parentName:"ul"},"DelegateCall, 3"),Object(a.b)("li",{parentName:"ul"},"StaticCall, 4")),Object(a.b)("h2",{id:"outcome"},"OutCome"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Success, 0"),Object(a.b)("li",{parentName:"ul"},"Revert, 1"),Object(a.b)("li",{parentName:"ul"},"Fail, 2")))}i.isMDXComponent=!0},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),l=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=l.a.createContext({}),i=function(e){var t=l.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=i(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=i(r),d=n,O=p["".concat(c,".").concat(d)]||p[d]||s[d]||a;return r?l.a.createElement(O,u(u({ref:t},o),{},{components:r})):l.a.createElement(O,u({ref:t},o))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var u={};for(var b in t)hasOwnProperty.call(t,b)&&(u[b]=t[b]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var o=2;o<a;o++)c[o]=r[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);