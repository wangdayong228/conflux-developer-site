(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),i=(n(0),n(214)),o={},c={id:"conflux-rust/changelogs/CHANGELOG-1.1.x",title:"CHANGELOG-1.1.x",description:"1.1.2",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-1.1.x.md",permalink:"/docs/conflux-rust/changelogs/CHANGELOG-1.1.x",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/changelogs/CHANGELOG-1.1.x.md",lastUpdatedAt:1612773885},l=[{value:"Incompatible Changes",id:"incompatible-changes",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Incompatible changes",id:"incompatible-changes-1",children:[]},{value:"Improvements",id:"improvements-1",children:[]}],u={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"112"},"1.1.2"),Object(i.b)("h1",{id:"111"},"1.1.1"),Object(i.b)("h2",{id:"incompatible-changes"},"Incompatible Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CIP-37: Conflux to shift to base32 address format. The hex address format similar to Ethereum is deprecated in rpc interactions to full node.")),Object(i.b)("h2",{id:"improvements"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reduce delay in logs pub-sub; now we send logs immediately after they become available."),Object(i.b)("li",{parentName:"ul"},"Implement Execution Trace functionality. It includes detailed call/create/return/internal_transfer events being triggered by a transfer. Inspecting the trace information will enable the applications like conflux-scan to be able to track all transfers of CFX accurately. "),Object(i.b)("li",{parentName:"ul"},"Support CIP-37 address format in ",Object(i.b)("inlineCode",{parentName:"li"},"mining_author")," configuration."),Object(i.b)("li",{parentName:"ul"},"Include ",Object(i.b)("inlineCode",{parentName:"li"},"networkId")," in ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getStatus")," response."),Object(i.b)("li",{parentName:"ul"},"Include ",Object(i.b)("inlineCode",{parentName:"li"},"address")," in ",Object(i.b)("inlineCode",{parentName:"li"},"RpcAccount"),"."),Object(i.b)("li",{parentName:"ul"},"New RPC ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getSupplyinfo")," to get the total CFX supply and the circulating CFX supply.")),Object(i.b)("h1",{id:"110"},"1.1.0"),Object(i.b)("h2",{id:"incompatible-changes-1"},"Incompatible changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CIP-38: Reduce the block base reward to 2 CFX from the epoch number 3,615,000."),Object(i.b)("li",{parentName:"ul"},"CIP-39: Blocks from the height 3,615,000 (included) are required to set the first element of their ",Object(i.b)("inlineCode",{parentName:"li"},"custom")," field in the header to ",Object(i.b)("inlineCode",{parentName:"li"},"[1]"),".")),Object(i.b)("h2",{id:"improvements-1"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Return the ",Object(i.b)("inlineCode",{parentName:"li"},"custom")," field in the block header for related RPCs (",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHash"),", ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption"),", ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),").")))}b.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);