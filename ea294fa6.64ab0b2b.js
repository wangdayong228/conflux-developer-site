(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(210)),c={},i={id:"conflux-rust/changelogs/CHANGELOG-1.1.x",title:"CHANGELOG-1.1.x",description:"1.1.1",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-1.1.x.md",permalink:"/docs/conflux-rust/changelogs/CHANGELOG-1.1.x",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/changelogs/CHANGELOG-1.1.x.md",lastUpdatedAt:1609922472},l=[{value:"Improvements",id:"improvements",children:[]},{value:"Incompatible changes",id:"incompatible-changes",children:[]},{value:"Improvements",id:"improvements-1",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"111"},"1.1.1"),Object(a.b)("h2",{id:"improvements"},"Improvements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Reduce delay in logs pub-sub; now we send logs immediately after they become available."),Object(a.b)("li",{parentName:"ul"},"Implement Execution Trace functionality. It includes detailed call/create/return/internal_transfer events being triggered by a transfer. Inspecting the trace information will enable the applications like conflux-scan to be able to track all transfers of CFX accurately. ")),Object(a.b)("h1",{id:"110"},"1.1.0"),Object(a.b)("h2",{id:"incompatible-changes"},"Incompatible changes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CIP-38: Reduce the block base reward to 2 CFX from the epoch number 3,615,000."),Object(a.b)("li",{parentName:"ul"},"CIP-39: Blocks from the height 3,615,000 (included) are required to set the first element of their ",Object(a.b)("inlineCode",{parentName:"li"},"custom")," field in the header to ",Object(a.b)("inlineCode",{parentName:"li"},"[1]"),".")),Object(a.b)("h2",{id:"improvements-1"},"Improvements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Return the ",Object(a.b)("inlineCode",{parentName:"li"},"custom")," field in the block header for related RPCs (",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHash"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),").")))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,f=b["".concat(c,".").concat(m)]||b[m]||s[m]||a;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);