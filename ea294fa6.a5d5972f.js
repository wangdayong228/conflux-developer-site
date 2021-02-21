(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(214)),c={},o={id:"conflux-rust/changelogs/CHANGELOG-1.1.x",title:"CHANGELOG-1.1.x",description:"1.1.2",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-1.1.x.md",permalink:"/docs/conflux-rust/changelogs/CHANGELOG-1.1.x",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/changelogs/CHANGELOG-1.1.x.md",lastUpdatedAt:1613940648},l=[{value:"Improvements",id:"improvements",children:[]},{value:"Incompatible Changes",id:"incompatible-changes",children:[]},{value:"Improvements",id:"improvements-1",children:[]},{value:"Incompatible changes",id:"incompatible-changes-1",children:[]},{value:"Improvements",id:"improvements-2",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"112"},"1.1.2"),Object(i.b)("h2",{id:"improvements"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add parameters to independently configure the garbage collection time of different kinds of data (like receipts,\ntransaction, block traces, e.t.c.)."),Object(i.b)("li",{parentName:"ul"},"Add new fields ",Object(i.b)("inlineCode",{parentName:"li"},"latestCheckpoint"),", ",Object(i.b)("inlineCode",{parentName:"li"},"latestConfirmed"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"latestState")," in ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getStatus"),".")),Object(i.b)("h1",{id:"111"},"1.1.1"),Object(i.b)("h2",{id:"incompatible-changes"},"Incompatible Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CIP-37: Conflux to shift to base32 address format. The hex address format similar to Ethereum is deprecated in rpc interactions to full node.")),Object(i.b)("h2",{id:"improvements-1"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reduce delay in logs pub-sub; now we send logs immediately after they become available."),Object(i.b)("li",{parentName:"ul"},"Implement Execution Trace functionality. It includes detailed call/create/return/internal_transfer events being triggered by a transfer. Inspecting the trace information will enable the applications like conflux-scan to be able to track all transfers of CFX accurately. "),Object(i.b)("li",{parentName:"ul"},"Support CIP-37 address format in ",Object(i.b)("inlineCode",{parentName:"li"},"mining_author")," configuration."),Object(i.b)("li",{parentName:"ul"},"Include ",Object(i.b)("inlineCode",{parentName:"li"},"networkId")," in ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getStatus")," response."),Object(i.b)("li",{parentName:"ul"},"Include ",Object(i.b)("inlineCode",{parentName:"li"},"address")," in ",Object(i.b)("inlineCode",{parentName:"li"},"RpcAccount"),"."),Object(i.b)("li",{parentName:"ul"},"New RPC ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getSupplyinfo")," to get the total CFX supply and the circulating CFX supply.")),Object(i.b)("h1",{id:"110"},"1.1.0"),Object(i.b)("h2",{id:"incompatible-changes-1"},"Incompatible changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CIP-38: Reduce the block base reward to 2 CFX from the epoch number 3,615,000."),Object(i.b)("li",{parentName:"ul"},"CIP-39: Blocks from the height 3,615,000 (included) are required to set the first element of their ",Object(i.b)("inlineCode",{parentName:"li"},"custom")," field in the header to ",Object(i.b)("inlineCode",{parentName:"li"},"[1]"),".")),Object(i.b)("h2",{id:"improvements-2"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Return the ",Object(i.b)("inlineCode",{parentName:"li"},"custom")," field in the block header for related RPCs (",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHash"),", ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption"),", ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),").")))}p.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);