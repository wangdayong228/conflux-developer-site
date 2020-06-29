(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{169:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(9),c=(t(0),t(197)),o={},i={id:"js-conflux-sdk/CHANGE_LOG",title:"CHANGE_LOG",description:"change log",source:"@site/docs/js-conflux-sdk/CHANGE_LOG.md",permalink:"/docs/js-conflux-sdk/CHANGE_LOG",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/CHANGE_LOG.md",lastUpdatedAt:1593398293},l=[{value:"v0.10.1",id:"v0101",children:[]},{value:"v0.10.0-alpha",id:"v0100-alpha",children:[]},{value:"v0.9.2",id:"v092",children:[]},{value:"v0.9.1",id:"v091",children:[]},{value:"v0.9.0-beta",id:"v090-beta",children:[]}],b={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"change-log"},"change log"),Object(c.b)("h2",{id:"v0101"},"v0.10.1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add format.bytes")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"format.bytes('abcd'); // <Buffer 61 62 63 64>\nformat.bytes([0, 1, 2, 3]); // <Buffer 00 01 02 03>\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add contract method & event type or signature indexes")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"// solidity\nfunction override(bytes memory str) public\nfunction override(string memory str) public\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"contract.override('str'); // Error: can not determine override\n\ncontract['override(string)']('str'); // specify override method by type\ncontract['0x227ffd52']('str'); // specify override method by signature\n")),Object(c.b)("h2",{id:"v0100-alpha"},"v0.10.0-alpha"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add ",Object(c.b)("inlineCode",{parentName:"li"},"getStatus"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"cfx.getStatus()\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"remove ",Object(c.b)("inlineCode",{parentName:"li"},"getRiskCoefficient")," and replace with ",Object(c.b)("inlineCode",{parentName:"li"},"getConfirmationRiskByHash"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"// old\ncfx.getRiskCoefficient(epochNumber)\n\n// new\ncfx.getConfirmationRiskByHash(blockHash)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"remove ",Object(c.b)("inlineCode",{parentName:"p"},"getAccount")," cause it's internal RPC.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"use ",Object(c.b)("inlineCode",{parentName:"p"},"require")," replace ",Object(c.b)("inlineCode",{parentName:"p"},"import")," to gen code."))),Object(c.b)("h2",{id:"v092"},"v0.9.2"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add defaultStorageLimit and defaultChainId for Conflux")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"// old\nconst cfx = new Conflux({\n  url: 'http://localhost:8000',\n  defaultGasPrice: 100,\n  defaultGas: 100000,\n})\n\n// new\nconst cfx = new Conflux({\n  url: 'http://localhost:8000',\n  defaultGasPrice: 100,\n  defaultGas: 100000,\n  defaultStorageLimit: 4096,\n  defaultChainId: 0,\n})\n")),Object(c.b)("h2",{id:"v091"},"v0.9.1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"abi implicitly converting string to number")),Object(c.b)("p",null,"solidity method: ",Object(c.b)("inlineCode",{parentName:"p"},"function add(uint,uint) public returns (uint);")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"// old\nawait contract.add(1, '2'); // error! can not accept string \n\n// new version\nawait contract.add(1, '2'); // good, converting string to number\n")),Object(c.b)("h2",{id:"v090-beta"},"v0.9.0-beta"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"format nonce as JSBI.BigInt")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"nonce = await cfx.getNextNonce(...)\n\n// old\n100000\n\n// new\nJSBI.BigInt(100000)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"format transaction fields")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'tx = await cfx.getTransactionByHash(txHash)\n// old\n{\n  storageLimit: "0x64",\n  chainId: "0x0",\n  epochHeight: "0x400",\n  ...\n}\n\n// new\n{\n  storageLimit: JSBI.BigInt(100), // JSBI\n  chainId: 0,\n  epochHeight: 1024,\n  ...\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"unit return string")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"// old\nunit.fromCFXToGDrip(123) => JSBI.BigInt(123000000000)\nunit.fromCFXToGDrip('0.1234567891') => Error('Cannot convert JSBI.BigInt')\n\n// new\nunit.fromCFXToGDrip(123) => \"123000000000\"\nunit.fromCFXToGDrip('0.1234567891') => \"123456789.1\"\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'contract fields "code" rename to "bytecode"')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"// old\ncfx.Contract({code, abi, address})\n\n// new\ncfx.Contract({bytecode, abi, address})\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"abi decodeData and decodeLog return object")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"result = contract.abi.decodeData('0x....')\n\n// old\n[\"Tom\", JSBI.BigInt(18)]\n\n// new\n{\n  name: 'func'\n  fullName: 'func(string name, uint age)',\n  type: 'func(string,uint)',\n  signature: '0x812600df',\n  array: [\"Tom\", JSBI.BigInt(18)],\n  object: {\n    name: \"Tom\",\n    age: JSBI.BigInt(18),\n  }\n}\n")))}u.isMDXComponent=!0},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(t),s=r,O=p["".concat(o,".").concat(s)]||p[s]||d[s]||c;return t?a.a.createElement(O,i(i({ref:n},b),{},{components:t})):a.a.createElement(O,i({ref:n},b))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);