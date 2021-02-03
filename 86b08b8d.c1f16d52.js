(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(9),i=(n(0),n(214)),r={id:"send_transaction",title:"My First Transaction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/send_transaction.md",keywords:["conflux","transaction","sdk"]},c={id:"conflux-doc/docs/send_transaction",title:"My First Transaction",description:"This document will guide you through composing and sending your first transaction into the Conflux network. We will introduce the technical details of Conflux transaction and some basic techniques to track the status of sent transactions and handle errors.",source:"@site/docs/conflux-doc/docs/send_transaction.md",permalink:"/docs/conflux-doc/docs/send_transaction",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/send_transaction.md",lastUpdatedAt:1611887628,sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/conflux-doc/docs/get_started"},next:{title:"Run an Independent Chain",permalink:"/docs/conflux-doc/docs/independent_chain"}},l=[{value:"Compose and send my first transaction",id:"compose-and-send-my-first-transaction",children:[{value:"Create an account with Conflux Portal",id:"create-an-account-with-conflux-portal",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Send transaction by JavaScript program",id:"send-transaction-by-javascript-program",children:[]}]},{value:"Track my transaction",id:"track-my-transaction",children:[{value:"1. Rejected by the RPC provider immediately",id:"1-rejected-by-the-rpc-provider-immediately",children:[]},{value:"2. Stuck in the transaction pool",id:"2-stuck-in-the-transaction-pool",children:[]},{value:"3. Mined but skipped",id:"3-mined-but-skipped",children:[]},{value:"4. Mined and executed with some error outcome",id:"4-mined-and-executed-with-some-error-outcome",children:[]},{value:"5. Mined and executed with no error outcome",id:"5-mined-and-executed-with-no-error-outcome",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document will guide you through composing and sending your first transaction into the Conflux network. We will introduce the technical details of Conflux transaction and some basic techniques to track the status of sent transactions and handle errors."),Object(i.b)("p",null,"For common users, it is recommended to use a Conflux wallet like ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-portal"}),"Conflux Portal"),", which is easy, safe and user-friendly."),Object(i.b)("p",null,"For developers who want to compose and send transaction in your own applications, Conflux provides several SDKs in different languages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk"}),"JavaScript: js-conflux-sdk")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/java-conflux-sdk"}),"Java: java-conflux-sdk")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/go-conflux-sdk"}),"Go: go-conflux-sdk"))),Object(i.b)("p",null,"The following document will use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk"}),"js-conflux-sdk")," as an example."),Object(i.b)("h2",{id:"compose-and-send-my-first-transaction"},"Compose and send my first transaction"),Object(i.b)("h3",{id:"create-an-account-with-conflux-portal"},"Create an account with Conflux Portal"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-portal"}),"Conflux Portal"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Generate a new account.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get test-net tokens from the faucet.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Export and copy your private key to somewhere, we'll use it later."))),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm install js-conflux-sdk")),Object(i.b)("h3",{id:"send-transaction-by-javascript-program"},"Send transaction by JavaScript program"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Import ",Object(i.b)("inlineCode",{parentName:"li"},"js-conflux-sdk")," and set a Conflux provider. For the Conflux test-net, there is a node provided at ",Object(i.b)("inlineCode",{parentName:"li"},"https://test.confluxrpc.org"),". It can also be changed to any other Conflux node, even your own.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst cfx = new Conflux({\n  url: 'https://test.confluxrpc.org',\n  defaultGasPrice: 100, // The default gas price of your following transactions\n  defaultGas: 1000000, // The default gas of your following transactions\n  logger: console,\n});\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Paste your private key into the program")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const PRIVATE_KEY = 'Your Private Key';\n// const PRIVATE_KEY = '0x5f15f9e52fc5ec6f77115a9f306c120a7e80d83115212d33a843bb6b7989c261';\nconst account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\nconst receiver = '0x176c45928d7c26b0175dec8bf6051108563c62c5'\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Compose your transaction, here are the fields could be filled with:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nonce"),": optional, the nonce of a transaction to keep the order of your sending transactions, starting with some random large number and increase one by one. If missing, the result of ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_getNextNonce")," will be automatically filled in and it works for general scenarios. Some cases, like sending a lot of transactions in a short period. It's recommended to maintain the nonce on your own."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"gasPrice"),": optional, the price in Drip that you would like to pay for each gas consumed. If missing, the result of ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_gasPrice")," will be automatically filled in, which is the median of recent transactions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"gas"),": optional, the max gas you would like to use in the transaction. After the end of transaction processing, the unused gas will be refunded if ",Object(i.b)("inlineCode",{parentName:"li"},"used_gas >= gas * 0.75"),". If missing, the result of ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_estimateGasAndCollateral")," will be automatically filled in and it works for general scenarios."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"to"),": the receiver of the transaction, could be a personal account (start with ",Object(i.b)("inlineCode",{parentName:"li"},"0x1"),") or contract (start with ",Object(i.b)("inlineCode",{parentName:"li"},"0x8"),"). Leave a null here to deploy a contract."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"value"),": the value (in Drip) to be transferred."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"storageLimit"),": optional, the max storage (in Byte) you would like to collateralize in the transaction. If missing, the result of ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_estimateGasAndCollateral")," will be automatically filled in and it works for general senarios.transactions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"epochHeight"),": optional, a transaction is can be verified only in epochs in the range ",Object(i.b)("inlineCode",{parentName:"li"},"[epochHeight - 100000, epochHeight + 100000]"),", so it's  a timeout mechanism. If missing, the result of ",Object(i.b)("inlineCode",{parentName:"li"},"cfx_epochNumber")," will be automatically filled in and it works for general scenarios."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data"),": optional, it's either an attached message of a transaction or a function signature of a contract call. If missing, a null will be filled into it."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"chainId"),": optional, it used for dealing with a hard fork or preventing a transaction replay attack. If missing, the SDK will get it from RPC. Currently mainnet chainId is 1029, testnet is 1."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"from"),": The sender account(with private key) to sign the transaction.")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let txParams = {\n  from: account, // from account instance and will by sign by account.privateKey\n  // nonce\n  // gasPrice\n  // gas\n  to: receiver, // accept address string or account instance\n  value: Drip.fromCFX(0.125), // use the conversion utility function\n  // storageLimit\n  // epochHeight\n  // data\n};\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Send it away by ",Object(i.b)("inlineCode",{parentName:"li"},"cfx.sendTransaction")," and get the returned transaction hash, then you can view the transaction details by searching the hash on ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://confluxscan.io/"}),"Conflux Scan"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"async function main() {\n  const txHash = await cfx.sendTransaction(txParams);\n  console.log(txHash);\n}\n\nmain().catch(e => console.error(e));\n")),Object(i.b)("h2",{id:"track-my-transaction"},"Track my transaction"),Object(i.b)("p",null,"After sending, the transaction could be in several different states:"),Object(i.b)("h3",{id:"1-rejected-by-the-rpc-provider-immediately"},"1. Rejected by the RPC provider immediately"),Object(i.b)("p",null,"After the provider got the ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," RPC call, it will try to do the basic verification and insert it into the transaction pool. If there an obvious error of the transaction, e.g., RLP decoding error, signature verification error, it will be rejected immediately. Otherwise, it will be inserted into the transaction pool and start to wait to be mined, and the RPC will return a transaction hash."),Object(i.b)("h3",{id:"2-stuck-in-the-transaction-pool"},"2. Stuck in the transaction pool"),Object(i.b)("p",null,"However, the transaction hash you got does not mean it was successfully executed. Conflux will store as many verified transactions in the pool as possible, even transactions whose nonce does not match the expected one or the balance is not enough to pay the ",Object(i.b)("inlineCode",{parentName:"p"},"value + gas * gasPrice + storage_limit * (10^18/1024)"),"."),Object(i.b)("p",null,"So if you wait for 1 minute and still cannot find the transaction in ConfluxScan after sending it, it very likely got stuck in the transaction pool."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getTransactionByHash"),", ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getBalance")," and ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getNextNonce")," to check if your transaction is ready to be packed and mined, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -X POST --data \'{"jsonrpc":"2.0","method":"cfx_getBalance","params":["0xfbe45681ac6c53d5a40475f7526bac1fe7590fb8"],"id":1}\' -H "Content-Type: application/json" https://test.confluxrpc.org\n')),Object(i.b)("p",null,"And compare the result with ",Object(i.b)("inlineCode",{parentName:"p"},"value + gas * gasPrice + storage_limit * (10^18/1024)"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -X POST --data \'{"jsonrpc":"2.0","method":"cfx_getNextNonce","params":["0xfbe45681ac6c53d5a40475f7526bac1fe7590fb8"],"id":1}\' -H "Content-Type: application/json" https://test.confluxrpc.org\n')),Object(i.b)("p",null,"And compare the result with the nonce you filled in."),Object(i.b)("p",null,"You can always get the transaction details by ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getTransactionByHash"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -X POST --data \'{"jsonrpc":"2.0","method":"cfx_getTransactionByHash","params":["0x53fe995edeec7d241791ff32635244e94ecfd722c9fe90f34ddf59082d814514"],"id":1}\' -H "Content-Type: application/json" https://test.confluxrpc.org\n')),Object(i.b)("p",null,"In this situation, you may want to send a new transaction after fixing the nonce or balance problem. Note that, for replacing a transaction in the pool with the same nonce, a higher gasPrice is necessary."),Object(i.b)("h3",{id:"3-mined-but-skipped"},"3. Mined but skipped"),Object(i.b)("p",null,"If you can view the transaction on ConfluxScan but its status always shows \"skip\". Which means it didn't pass the basic verification (etc, nonce doesn't match, balance can't cover the basic fee) in execution engine and got skipped."),Object(i.b)("p",null,"In this situation, you may want to send a new transaction after fixing the nonce or balance problem. Note that, for replacing a transaction in the pool with the same nonce, a higher gasPrice is necessary."),Object(i.b)("h3",{id:"4-mined-and-executed-with-some-error-outcome"},"4. Mined and executed with some error outcome"),Object(i.b)("p",null,"In this case, you'll see an error message on ConfluxScan. This could be in several causes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"EVM error: like assert, require"),Object(i.b)("li",{parentName:"ul"},"balance is enough to pay the basic fee, but not for the whole transaction fee"),Object(i.b)("li",{parentName:"ul"},"storageLimit reached")),Object(i.b)("p",null,"It's a good idea to double-check your contract in Conflux Studio and check the storageLimit and balance issue by ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," RPC."),Object(i.b)("h3",{id:"5-mined-and-executed-with-no-error-outcome"},"5. Mined and executed with no error outcome"),Object(i.b)("p",null,"Congrats! Your first transaction finally got there."))}u.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(r,".").concat(p)]||d[p]||b[p]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);