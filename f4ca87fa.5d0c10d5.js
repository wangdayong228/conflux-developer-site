(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),c=(n(0),n(215)),a={},l={id:"go-conflux-sdk/changeLog",title:"changeLog",description:"Go-conflux-sdk Change Log",source:"@site/docs/go-conflux-sdk/changeLog.md",permalink:"/docs/go-conflux-sdk/changeLog",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/go-conflux-sdk/changeLog.md",lastUpdatedAt:1615259338},i=[{value:"v1.0.0",id:"v100",children:[]},{value:"v0.4.11",id:"v0411",children:[]},{value:"v0.4.10",id:"v0410",children:[]},{value:"v0.4.9",id:"v049",children:[]}],u={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"go-conflux-sdk-change-log"},"Go-conflux-sdk Change Log"),Object(c.b)("h2",{id:"v100"},"v1.0.0"),Object(c.b)("p",null,"Note: v1.0.0 is not impatable with v0.x, the changes are"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Change address format follow ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"}),"CIP-37")),Object(c.b)("li",{parentName:"ul"},"Unmarshal logfilter according to full node struct"),Object(c.b)("li",{parentName:"ul"},"RPC functions follow rule: input and output to be value or pointer according to whether it could be nil")),Object(c.b)("h2",{id:"v0411"},"v0.4.11"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fix bug")),Object(c.b)("h2",{id:"v0410"},"v0.4.10"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Support rpc block_trace"),Object(c.b)("li",{parentName:"ul"},"Fix amount of TIME_WAIT when concurrency request")),Object(c.b)("h2",{id:"v049"},"v0.4.9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Support sdk.Client.GetSupplyInfo"),Object(c.b)("li",{parentName:"ul"},"Support internal contract")))}p.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,s=b["".concat(a,".").concat(d)]||b[d]||f[d]||c;return n?o.a.createElement(s,l(l({ref:t},u),{},{components:n})):o.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);