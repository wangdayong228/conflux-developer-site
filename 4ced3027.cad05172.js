(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(2),c=t(9),o=(t(0),t(207)),r={},i={id:"js-conflux-sdk/docs/quick_intro",title:"quick_intro",description:"Quick intro",source:"@site/docs/js-conflux-sdk/docs/quick_intro.md",permalink:"/docs/js-conflux-sdk/docs/quick_intro",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/docs/quick_intro.md",lastUpdatedAt:1606130071},l=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Install",id:"install",children:[]},{value:"Initialize",id:"initialize",children:[]},{value:"Send JSON-RPC request",id:"send-json-rpc-request",children:[]},{value:"Conflux address",id:"conflux-address",children:[]},{value:"Send Transaction",id:"send-transaction",children:[]},{value:"chainId",id:"chainid",children:[]},{value:"Hex value and epochNumber and tags",id:"hex-value-and-epochnumber-and-tags",children:[]},{value:"JSBI",id:"jsbi",children:[]},{value:"Drip",id:"drip",children:[]},{value:"Websocket provider",id:"websocket-provider",children:[]},{value:"Pub/Sub",id:"pubsub",children:[]},{value:"Interact with contract",id:"interact-with-contract",children:[]}],s={rightToc:l};function b(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"quick-intro"},"Quick intro"),Object(o.b)("p",null,"This is the javascript SDK for Conflux network. You can use it interact with Conflux node.\nHere is a quick introduction for how to use it."),Object(o.b)("h3",{id:"pre-requisite"},"Pre-requisite"),Object(o.b)("p",null,"Here are some pre requisite to use this SDK."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Node.js environment to install this SDK"),Object(o.b)("li",{parentName:"ol"},"Conflux account with some CFX (Use Conflux Portal to create account and get testnet CFX)"),Object(o.b)("li",{parentName:"ol"},"Conflux RPC endpoint, for example ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://test.confluxrpc.org"}),"http://test.confluxrpc.org")," is a testnet RPC endpoint")),Object(o.b)("h3",{id:"install"},"Install"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install js-conflux-sdk\n")),Object(o.b)("h3",{id:"initialize"},"Initialize"),Object(o.b)("p",null,"With a RPC endpoint we can initialize a Conflux object, which can be used to send JSON RPC request."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Conflux } = require('js-conflux-sdk');\n// initialize a Conflux object\nconst conflux = new Conflux({\n    url: 'http://test.confluxrpc.org',\n    logger: console, // for debug\n});\n")),Object(o.b)("p",null,"Besides ",Object(o.b)("inlineCode",{parentName:"p"},"url")," and ",Object(o.b)("inlineCode",{parentName:"p"},"logger")," you can pass ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../api.md"}),"other options")," to initialize a Conflux object"),Object(o.b)("h3",{id:"send-json-rpc-request"},"Send JSON-RPC request"),Object(o.b)("p",null,"There are a lot methods on cfx object which are one-to-one with Conflux node RPC methods.\nAll conflux methods will return a promise, so you can use it with ",Object(o.b)("inlineCode",{parentName:"p"},"async/await")," syntax."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nasync function main() {\n  // get balance\n  const balance = await conflux.getBalance('0x1386B4185A223EF49592233b69291bbe5a80C527');\n  console.log(balance.toString()); // 10098788868004995614504\n}\n\nmain();\n")),Object(o.b)("p",null,"Besides balance you can get a lot blockchain information through it, for example: nonce, block, transaction, receipt and so on.\nYou can check ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../api.md"}),"API")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/json_rpc"}),"RPC")),Object(o.b)("h3",{id:"conflux-address"},"Conflux address"),Object(o.b)("p",null,"In Conflux network there are three kind address:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Normal address ",Object(o.b)("inlineCode",{parentName:"li"},"0x1")," prefix: ",Object(o.b)("inlineCode",{parentName:"li"},"0x1386B4185A223EF49592233b69291bbe5a80C527")),Object(o.b)("li",{parentName:"ul"},"Contract address ",Object(o.b)("inlineCode",{parentName:"li"},"0x8")," prefix: ",Object(o.b)("inlineCode",{parentName:"li"},"0x80a17fd515c1fc819e87e606c058490ac1f14ca7")),Object(o.b)("li",{parentName:"ul"},"Internal contract address ",Object(o.b)("inlineCode",{parentName:"li"},"0x0888")," prefix: ",Object(o.b)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000000"))),Object(o.b)("p",null,"So normally a ethereum's address cann't used as conflux address, otherwise it starts with ",Object(o.b)("inlineCode",{parentName:"p"},"0x1")),Object(o.b)("p",null,"Notice: one address can have two form ",Object(o.b)("inlineCode",{parentName:"p"},"checksumed")," and ",Object(o.b)("inlineCode",{parentName:"p"},"not checksumed"),", these two actually are same account. For example\n",Object(o.b)("inlineCode",{parentName:"p"},"0x1386B4185A223EF49592233b69291bbe5a80C527")," and ",Object(o.b)("inlineCode",{parentName:"p"},"0x1386b4185a223ef49592233b69291bbe5a80c527")," which point to same account."),Object(o.b)("h3",{id:"send-transaction"},"Send Transaction"),Object(o.b)("p",null,"For detail explanation of send transaction check ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/js-conflux-sdk/docs/how_to_send_tx"}),"here")),Object(o.b)("h3",{id:"chainid"},"chainId"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"chainId")," is used to distinguish different network and prevent replay attack, currently:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"mainnet is ",Object(o.b)("inlineCode",{parentName:"li"},"1029")),Object(o.b)("li",{parentName:"ul"},"testnet is ",Object(o.b)("inlineCode",{parentName:"li"},"1"))),Object(o.b)("h3",{id:"hex-value-and-epochnumber-and-tags"},"Hex value and epochNumber and tags"),Object(o.b)("p",null,"You can find the epochNumber doc at official developer ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/json_rpc#hex-value-encoding"}),"RPC doc")),Object(o.b)("h3",{id:"jsbi"},"JSBI"),Object(o.b)("p",null,"Because in blockchain world there are a lot big numbers (uint256), Javascript's native number cann't work with them, so we use JSBI to handle these big number.\nFor how to use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/jsbi"}),"JSBI")," check it's documentation"),Object(o.b)("p",null,"Note: jsbi currently cann't pretty log, you need convert it to string before log."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const max = JSBI.BigInt(Number.MAX_SAFE_INTEGER);\nconsole.log(String(max));\n// \u2192 '9007199254740991'\nconsole.log(max.toString()); // directly log a jsbi is very ugly\n// JSBI(2) [ -1, 2097151, sign: false ]\n")),Object(o.b)("h3",{id:"drip"},"Drip"),Object(o.b)("p",null,"In Conflux network there are there unit: CFX, Drip, Gdrip. Drip is the minimum unit in Conflux  1 CFX=10^18Drip, 1Gdrip=10^9Drip. When getting account's balance, send transaction, specify gasPrice, all unit will be Drip.\nThe SDK has provide a class Drip, which can use to easily convert between different unit."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import {Drip} from "js-conflux-sdk"\n\nlet drip1 = Drip.fromCFX(1);\nconsole.log(drip1);\n// 1000-000-000-000-000-000\nlet drip2 = Drip.fromGDrip(1);\nconsole.log(drip1);\n// 1000-000-000\nlet drip3 = new Drip(1);\nconsole.log(drip3);\n// 1\nconsole.log(drip3.toCFX());\n// 1\nconsole.log(drip1.toGdrip());\n// 1000-000-000\n')),Object(o.b)("h3",{id:"websocket-provider"},"Websocket provider"),Object(o.b)("p",null,"The SDK also provide a websocket provider, and the default Conflux node ws port is ",Object(o.b)("inlineCode",{parentName:"p"},"12535"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux } = require('js-conflux-sdk');\n\nasync function main() {\n  // initialize a Conflux object\n  const cfx = new Conflux({\n      url: 'ws://localhost:12535',\n      logger: console, // for debug\n  });\n  // get balance\n  const balance = await cfx.getBalance('0x1386B4185A223EF49592233b69291bbe5a80C527');\n  console.log(balance.toString()); // 10098788868004995614504\n\n  // you need manual close the websocket connection\n  cfx.close();\n}\n\nmain();\n")),Object(o.b)("h3",{id:"pubsub"},"Pub/Sub"),Object(o.b)("p",null,"Conflux node support pub/sub makes it possible to query certain items on an ongoing basis, without polling through the JSON-RPC HTTP interface, currently three topics are supported: ",Object(o.b)("inlineCode",{parentName:"p"},"newHeads"),", ",Object(o.b)("inlineCode",{parentName:"p"},"epochs"),", ",Object(o.b)("inlineCode",{parentName:"p"},"logs"),", for detail explain of Pub/Sub check the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/pubsub"}),"official doc")),Object(o.b)("p",null,"Use JS SDK it will be very easy to use Pub/Sub."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux } = require('js-conflux-sdk');\n\nasync function main() {\n  const cfx = new Conflux({\n      url: 'ws://localhost:12535',\n  });\n  // sub\n  let newHeadEmitter = await cfx.subscribeNewHeads();\n  newHeadEmitter.on('data', console.log);\n  let logEmitter = await cfx.subscribeLogs();\n  logEmitter.on('data', console.log);\n  let epochEmitter = await cfx.subscribeEpochs();\n  epochEmitter.on('data', console.log);\n  // unsubscribe\n  cfx.unsubscribe(epochEmitter);\n}\n\nmain();\n")),Object(o.b)("h3",{id:"interact-with-contract"},"Interact with contract"),Object(o.b)("p",null,"You can use this SDK get and update contract state, we have a complete ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/js-conflux-sdk/docs/interact_with_contract"}),"documentation")," for you."))}b.isMDXComponent=!0},207:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var a=t(0),c=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),b=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=b(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(t),d=a,f=u["".concat(r,".").concat(d)]||u[d]||p[d]||o;return t?c.a.createElement(f,i(i({ref:n},s),{},{components:t})):c.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<o;s++)r[s]=t[s];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);