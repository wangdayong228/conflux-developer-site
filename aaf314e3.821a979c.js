(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(199)),l={id:"experimental_api",title:"Experimental APIs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Experimental_APIs.md"},c={id:"conflux-portal/docs/en/portal/API_Reference/experimental_api",title:"Experimental APIs",description:"wallet_watchAsset",source:"@site/docs/conflux-portal/docs/en/portal/API_Reference/Experimental_APIs.md",permalink:"/docs/conflux-portal/docs/en/portal/API_Reference/experimental_api",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Experimental_APIs.md",lastUpdatedAt:1592901160},i=[{value:"wallet_watchAsset",id:"wallet_watchasset",children:[]}],s={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"wallet_watchasset"},"wallet_watchAsset"),Object(o.b)("p",null,"Most all Conflux wallets display some set of tokens, usually from a centrally\ncurated registry of tokens. "),Object(o.b)("p",null,"At ConfluxPortal, we believe the future of tokens has the potential to be much\nbigger than any one party can curate, and we want to enable this explosion of\ncreativity.  "),Object(o.b)("p",null,"In support of this goal, we have implemented support for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/estebanmino/EIPs/blob/master/EIPS/eip-747.md"}),"EIP\n747"),", which\nprovides a way for your site to suggest a token that a user might want to track\nin their wallet. "),Object(o.b)("p",null,"The code is simple:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'conflux.sendAsync({\n    method: \'metamask_watchAsset\',\n    params: {\n        "type":"ERC20", // Initially only supports ERC20, but eventually more!\n        "options":{\n            "address": tokenAddress, // The address that the token is at.\n            "symbol": tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.\n            "decimals": tokenDecimals, // The number of decimals in the token\n            "image": tokenImage, // A string url of the token logo\n        },\n    },\n    id: Math.round(Math.random() * 100000),\n}, (err, addedBoolean) => {\n\n})\n')),Object(o.b)("p",null,"We even created a sample Dapp so developers could suggest their tokens to users\nwith a simple hyperlink, without a line of code. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MetaMask/Add-Token"}),"Visit it\nhere"),". "))}p.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);