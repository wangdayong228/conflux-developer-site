(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(2),o=t(9),i=(t(0),t(214)),c={},r={id:"js-conflux-sdk/docs/how_to_send_tx",title:"how_to_send_tx",description:"How to send a Conflux Transaction",source:"@site/docs/js-conflux-sdk/docs/how_to_send_tx.md",permalink:"/docs/js-conflux-sdk/docs/how_to_send_tx",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/docs/how_to_send_tx.md",lastUpdatedAt:1612238453},s=[{value:"Send transaction simple",id:"send-transaction-simple",children:[{value:"Transaction&#39;s stage",id:"transactions-stage",children:[]}]},{value:"Send transaction complete",id:"send-transaction-complete",children:[]},{value:"How much <code>gas</code> and <code>storageLimit</code> a transaction need",id:"how-much-gas-and-storagelimit-a-transaction-need",children:[{value:"<code>gasPrice</code>",id:"gasprice",children:[]},{value:"<code>gas</code>",id:"gas",children:[]},{value:"<code>storageLimit</code>",id:"storagelimit",children:[]}]},{value:"SendRawTransaction",id:"sendrawtransaction",children:[{value:"Why my transaction is always pending ?",id:"why-my-transaction-is-always-pending-",children:[]},{value:"Why my transaction failed?",id:"why-my-transaction-failed",children:[]},{value:"How to send a transaction with a note",id:"how-to-send-a-transaction-with-a-note",children:[]}]}],l={rightToc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"how-to-send-a-conflux-transaction"},"How to send a Conflux Transaction"),Object(i.b)("h2",{id:"send-transaction-simple"},"Send transaction simple"),Object(i.b)("p",null,"It can be very easy to send a simple transaction(transfer some CFX to another address), all you need is ",Object(i.b)("inlineCode",{parentName:"p"},"from"),", ",Object(i.b)("inlineCode",{parentName:"p"},"to"),", ",Object(i.b)("inlineCode",{parentName:"p"},"value")," and ",Object(i.b)("inlineCode",{parentName:"p"},"from"),"'s privateKey."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst PRIVATE_KEY = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef'; // sender private key\nconst ADDRESS = 'cfxtest:aaawgvnhveawgvnhveawgvnhveawgvnhvey1umfzwp';\n\nasync function main() {\n  const conflux = new Conflux({ \n    url: 'http://test.confluxrpc.org',\n    networkId: 1,\n  });\n  \n  const sender = conflux.wallet.addPrivateKey(PRIVATE_KEY); // add private to local wallet\n  const transactionHash = await conflux.sendTransaction({\n    from: sender.address, // account address or instance which added into conflux.wallet\n    to: ADDRESS, // receiver address\n    value: Drip.fromCFX(0.1), // 0.1 CFX = 100000000000000000 Drip\n  });\n  \n  console.log(transactionHash); // suggest store transactionHash in disk !!!\n  // 0x22e5ffefe4da995ebcb2847762b7acb1c03fd17c9ab010272965fa63c9590d6e\n  \n  // you might need wait seconds here...\n  await new Promise(resolve => setTimeout(resolve, 60 * 1000));\n\n  const transaction = await conflux.getTransactionByHash(txHash);\n  console.log(transaction); // get transaction from remote\n  /*\n  {\n    nonce: 13584n,\n    gasPrice: 1n,\n    gas: 75000n,\n    value: 100000000000000000n,\n    storageLimit: 2048n,\n    epochHeight: 1344622,\n    chainId: 1,\n    v: 1,\n    status: 0,\n    transactionIndex: 3,\n    blockHash: '0x4ee16b530f6b6951122c1305b262eef5251ebff03498bc510610ed45fb72a014',\n    contractCreated: null,\n    data: '0x',\n    from: 'cfxtest:aasm4c231py7j34fghntcfkdt2nm9xv1tu6jd3r1s7',\n    hash: '0x22e5ffefe4da995ebcb2847762b7acb1c03fd17c9ab010272965fa63c9590d6e',\n    r: '0x162f2b49022528ba65fa35be2b93b8554d1910f7993201f1e755e5a29c7f8a53',\n    s: '0x2106ce156aea46ffe8438b8a4057e116b4d1c8551158ae2cf1e4679924e433d8',\n    to: 'cfxtest:aaawgvnhveawgvnhveawgvnhveawgvnhvey1umfzwp'\n  }\n  */\n\n  const receipt = await conflux.getTransactionReceipt(txHash);\n  console.log(receipt); // get receipt from remote\n  /*\n  {\n    index: 3,\n    epochNumber: 1344628,\n    outcomeStatus: 0,\n    gasUsed: 54349n,\n    gasFee: 56250n,\n    blockHash: '0x4ee16b530f6b6951122c1305b262eef5251ebff03498bc510610ed45fb72a014',\n    contractCreated: null,\n    from: 'cfxtest:aasm4c231py7j34fghntcfkdt2nm9xv1tu6jd3r1s7',\n    logs: [],\n    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n    stateRoot: '0xf8d93f9f783605572fb48beb81e7450b25eae2eeb28310429c862a5c1956bd71',\n    to: 'cfxtest:aaawgvnhveawgvnhveawgvnhveawgvnhvey1umfzwp',\n    transactionHash: '0x22e5ffefe4da995ebcb2847762b7acb1c03fd17c9ab010272965fa63c9590d6e',\n    txExecErrorMsg: null\n  }\n  */\n}\n\nmain();\n")),Object(i.b)("p",null,"If you can get the transaction receipt and it's ",Object(i.b)("inlineCode",{parentName:"p"},"outcomeStatus")," is ",Object(i.b)("inlineCode",{parentName:"p"},"0"),", congratulate you have send a transaction successfully."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: before sending transaction, you should add an account to wallet with ",Object(i.b)("inlineCode",{parentName:"p"},"conflux.wallet.addPrivateKey(PRIVATE_KEY)"))),Object(i.b)("h3",{id:"transactions-stage"},"Transaction's stage"),Object(i.b)("p",null,"After sending, a transaction could be in several different states, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/send_transaction#track-my-transaction"}),"here")," is a detail explanation of transaction life cycle."),Object(i.b)("p",null,"You can get a transaction's state by it ",Object(i.b)("inlineCode",{parentName:"p"},"status")," or it's receipt's ",Object(i.b)("inlineCode",{parentName:"p"},"outcomeStatus"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"tx.status")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"null")," The tx has not mined or executed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0")," Tx execute success"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1")," Tx execute failed")),Object(i.b)("p",null,"Only after a transaction executed, you can get it's receipt. The ",Object(i.b)("inlineCode",{parentName:"p"},"receipt.outcomeStatus")," may have two value:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"0")," Tx execute success"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1")," Tx execute failed")),Object(i.b)("p",null,"Correspond to transaction stages, the SDK has provide several advanced ",Object(i.b)("inlineCode",{parentName:"p"},"sendTransaction")," usage:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst PRIVATE_KEY = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef'; // sender private key\nconst ADDRESS = 'cfxtest:aaawgvnhveawgvnhveawgvnhveawgvnhvey1umfzwp';\n\nasync function main() {\n  const conflux = new Conflux({ \n    url: 'http://test.confluxrpc.org',\n    networkId: 1,\n  });\n  \n  const sender = conflux.wallet.addPrivateKey(PRIVATE_KEY);\n  \n  const pendingTransaction = conflux.sendTransaction({\n    from: sender.address, // account address or instance which added into conflux.wallet\n    to: ADDRESS, // receiver address\n    value: Drip.fromCFX(0.1), // 0.1 CFX = 100000000000000000 Drip\n  }); // NOTE: without await, transaction not send yet\n\n  const transactionHash = await pendingTransaction; // send and await endpoint return transaction hash\n  console.log(transactionHash);\n\n  // usually wait about 2 seconds\n  const packedTransaction = await pendingTransaction.get(); // await endpoint packed transaction\n  console.log(packedTransaction); // `blockHash` might still be `null`\n\n  // usually wait about 5 seconds\n  const minedTransaction = await pendingTransaction.mined(); // await transaction mined\n  console.log(minedTransaction); // already have `blockHash`\n  \n  // usually wait about 10 seconds\n  const executedReceipt = await pendingTransaction.executed(); // await transaction executed\n  console.log(executedReceipt); // if `outcomeStatus` equal 0, return receipt, else throw error\n\n  // usually wait about 50 seconds\n  const confirmedReceipt = await pendingTransaction.confirmed(); // await transaction confirmed\n  console.log(confirmedReceipt); // usually same as executedReceipt, but transaction block risk is <= 1e-8\n}\n\nmain();\n")),Object(i.b)("p",null,"Note: the ",Object(i.b)("inlineCode",{parentName:"p"},"mined"),", ",Object(i.b)("inlineCode",{parentName:"p"},"executed"),", ",Object(i.b)("inlineCode",{parentName:"p"},"confirmed")," methods maybe will take a long time, and will be timeout."),Object(i.b)("h2",{id:"send-transaction-complete"},"Send transaction complete"),Object(i.b)("p",null,"Besides ",Object(i.b)("inlineCode",{parentName:"p"},"from"),", ",Object(i.b)("inlineCode",{parentName:"p"},"to"),", ",Object(i.b)("inlineCode",{parentName:"p"},"value")," there are several other fields could be filled with:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"nonce"),": optional, the nonce of a transaction to keep the order of your sending transactions, increase one by one. If missing, the result of cfx_getNextNonce will be automatically filled in and it works for general scenarios. Some cases, like sending a lot of transactions in a short period. It's recommended to maintain the nonce on your own."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gasPrice"),": optional, the price in Drip that you would like to pay for each gas consumed. If missing, the result of cfx_gasPrice will be automatically filled in, which is the median of recent transactions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gas"),": optional, the max gas you would like to use in the transaction. After the end of transaction processing, the unused gas will be refunded if used_gas >= gas * 0.75. If missing, the result of cfx_estimateGasAndCollateral will be automatically filled in and it works for general scenarios."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"to"),": the receiver of the transaction, could be a personal account(start with 1) or contract(start with 8). Leave a null here to deploy a contract."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"value"),": the value (in Drip) to be transferred."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storageLimit"),": optional, the max storage (in Byte) you would like to collateralize in the transaction. If missing, the result of cfx_estimateGasAndCollateral will be automatically filled in and it works for general senarios."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"epochHeight"),": optional, a transaction is can be verified only in epochs in the range ","[epochHeight - 10000, epochHeight + 10000]",", so it's a timeout mechanism. If missing, the result of cfx_epochNumber will be automatically filled in and it works for general scenarios."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": optional, it's either an attached message of a transaction or a function signature of a contract call. If missing, a null will be filled into it."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chainId"),": optional, it used for dealing with a hard fork or preventing a transaction replay attack. If missing SDK will get it from RPC."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": The sender account(with private key) to sign the transaction.")),Object(i.b)("p",null,"Compare with ethereum Conflux transaction have three new field: ",Object(i.b)("inlineCode",{parentName:"p"},"storageLimit"),", ",Object(i.b)("inlineCode",{parentName:"p"},"epochHeight"),", ",Object(i.b)("inlineCode",{parentName:"p"},"chainId")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst PRIVATE_KEY = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef'; // sender private key\nconst ADDRESS = 'cfxtest:aaawgvnhveawgvnhveawgvnhveawgvnhvey1umfzwp';\n\nasync function main() {\n  const conflux = new Conflux({ url: 'http://test.confluxrpc.org' });\n  const account = conflux.wallet.addPrivateKey(PRIVATE_KEY); // create account instance and add to wallet\n  \n  const estimate = await conflux.estimateGasAndCollateral({ to, value });\n  const status = await conflux.getStatus();\n\n  const transactionHash = await conflux.sendTransaction({\n    from: account.address, // sender address which added into conflux.wallet\n    to: ADDRESS, // receiver address\n    value: Drip.fromCFX(0.1), // 0.1 CFX = 100000000000000000 Drip\n    data: null,\n    gas: estimate.gasUsed,\n    storageLimit: 0,\n    chainId: status.chainId,\n    nonce: await conflux.getNextNonce(account.address),\n    gasPrice: await conflux.getGasPrice(),\n    epochHeight: await conflux.getEpochNumber(),\n  }); \n  \n  console.log(transactionHash);\n}\n\nmain();\n")),Object(i.b)("h2",{id:"how-much-gas-and-storagelimit-a-transaction-need"},"How much ",Object(i.b)("inlineCode",{parentName:"h2"},"gas")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"storageLimit")," a transaction need"),Object(i.b)("p",null,"If you are just transfer CFX, the gas should be ",Object(i.b)("inlineCode",{parentName:"p"},"21000"),", if you are interact with a contract it's a little complicated.\nNormally you can estimate it by call ",Object(i.b)("inlineCode",{parentName:"p"},"estimateGasAndCollateral"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const conflux = new Conflux({\n    url: 'http://test.confluxrpc.org',\n    logger: console, // for debug\n    defaultGasPrice: 1,\n    defaultGasRatio: 1.1,\n    defaultStorageRatio: 1.1,\n    networkId: 1,\n});\n")),Object(i.b)("h3",{id:"gasprice"},Object(i.b)("inlineCode",{parentName:"h3"},"gasPrice")),Object(i.b)("p",null,"When sending transaction if you specify the ",Object(i.b)("inlineCode",{parentName:"p"},"gasPrice")," it will be used, if not it will try to use ",Object(i.b)("inlineCode",{parentName:"p"},"cfx.defaultGasPrice")," you can specify it when you initiallize the cfx object."),Object(i.b)("p",null,"If both ",Object(i.b)("inlineCode",{parentName:"p"},"gasPrice")," and ",Object(i.b)("inlineCode",{parentName:"p"},"defaultGasPrice")," is not specified, the SDK will fill the result of ",Object(i.b)("inlineCode",{parentName:"p"},"getGasPrice()")," to it."),Object(i.b)("p",null,"Currentlly set the gasPrice to ",Object(i.b)("inlineCode",{parentName:"p"},"1 Drip")," will enough to send most transactions."),Object(i.b)("h3",{id:"gas"},Object(i.b)("inlineCode",{parentName:"h3"},"gas")),Object(i.b)("p",null,"First you can specify the tx.",Object(i.b)("inlineCode",{parentName:"p"},"gas"),", if you don't it will use the result of ",Object(i.b)("inlineCode",{parentName:"p"},"estimateGasAndCollateral.gasUsed"),", and this value will be multiply a ratio ",Object(i.b)("inlineCode",{parentName:"p"},"defaultGasRatio")," (default 1.1), because the estimate result sometimes are not accurate, normally estimated ",Object(i.b)("inlineCode",{parentName:"p"},"gasUsed")," will not enough."),Object(i.b)("h3",{id:"storagelimit"},Object(i.b)("inlineCode",{parentName:"h3"},"storageLimit")),Object(i.b)("p",null,"Same as ",Object(i.b)("inlineCode",{parentName:"p"},"gas")," you can specify ",Object(i.b)("inlineCode",{parentName:"p"},"storageLimit")," when you send transaction (unit is Byte), if not"),Object(i.b)("h2",{id:"sendrawtransaction"},"SendRawTransaction"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"sendTransaction")," will get ",Object(i.b)("inlineCode",{parentName:"p"},"from"),"'s privateKey from wallet, use it sign transaction and invoke ",Object(i.b)("inlineCode",{parentName:"p"},"sendRawTransaction")," method, if you have a raw transaction you can use it directly. the ",Object(i.b)("inlineCode",{parentName:"p"},"sendRawTransaction")," method also can use ",Object(i.b)("inlineCode",{parentName:"p"},"get"),", ",Object(i.b)("inlineCode",{parentName:"p"},"mined"),", ",Object(i.b)("inlineCode",{parentName:"p"},"executed"),", ",Object(i.b)("inlineCode",{parentName:"p"},"confirmed")," method."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux, Transaction } = require('js-conflux-sdk');\n\nconst PRIVATE_KEY = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef'; // sender private key\nconst ADDRESS = 'cfxtest:aaawgvnhveawgvnhveawgvnhveawgvnhvey1umfzwp';\n\nasync function main() {\n  const conflux = new Conflux({ \n    url: 'http://test.confluxrpc.org',\n    networkId: 1,\n  });\n\n  const transaction = new Transaction({\n    to: ADDRESS, // receiver address\n    nonce: 1, // sender next nonce\n    value: 1,\n    gas: 21000,\n    gasPrice: 1,\n    storageLimit: 0,\n    epochHeight: 100,\n    chainId: 1, // endpoint status.chainId\n    data: '0x'\n  });\n\n  transaction.sign(PRIVATE_KEY); // sender privateKey\n\n  const transactionHash = await conflux.sendRawTransaction(transaction.serialize());\n  console.log(transactionHash)\n}\n\nmain();\n")),Object(i.b)("h3",{id:"why-my-transaction-is-always-pending-"},"Why my transaction is always pending ?"),Object(i.b)("p",null,"If your transaction alway pending in the pool, normally you have use a incorrect ",Object(i.b)("inlineCode",{parentName:"p"},"nonce")," or your ",Object(i.b)("inlineCode",{parentName:"p"},"balance")," is not enough. You can get the transaction info by it's hash, and check it's nonce with your account's nonce, and check your balance is enough to cover the value + gasPrice * gas + storageLimit."),Object(i.b)("h3",{id:"why-my-transaction-failed"},"Why my transaction failed?"),Object(i.b)("p",null,"If your transaction is failed, you can find reason in below ways:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Is your balance is enough cover your tx: check ",Object(i.b)("inlineCode",{parentName:"li"},"value"),", ",Object(i.b)("inlineCode",{parentName:"li"},"gas"),", ",Object(i.b)("inlineCode",{parentName:"li"},"storageLimit")),Object(i.b)("li",{parentName:"ol"},"Is your ",Object(i.b)("inlineCode",{parentName:"li"},"gas")," is enough, is your ",Object(i.b)("inlineCode",{parentName:"li"},"storageLimit")," enough"),Object(i.b)("li",{parentName:"ol"},"Check receipt's ",Object(i.b)("inlineCode",{parentName:"li"},"txExecErrorMsg")," for detail error message")),Object(i.b)("h3",{id:"how-to-send-a-transaction-with-a-note"},"How to send a transaction with a note"),Object(i.b)("p",null,"If you want send a transaction with a note, you can specify it through ",Object(i.b)("inlineCode",{parentName:"p"},"data"),", the tricky is you need convert your message to a hex string."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux, format } = require('js-conflux-sdk');\n\nconst PRIVATE_KEY = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef'; // sender private key\n\nasync function main() {\n  const conflux = new Conflux({ \n    url: 'http://test.confluxrpc.org',\n    networkId: 1,\n  });\n  const account = conflux.wallet.addPrivateKey(PRIVATE_KEY); // create account instance and add to wallet\n \n  const transactionHash = await conflux.sendTransaction({\n    from: account.address,\n    to: account.address, // if data is not contract bytecode, must have `to` address\n    data: format.bytes('Hello World')\n  });\n  console.log(transactionHash); \n}\n\nmain()\n")))}d.isMDXComponent=!0},214:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},b=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(t),p=a,f=b["".concat(c,".").concat(p)]||b[p]||u[p]||i;return t?o.a.createElement(f,r(r({ref:n},l),{},{components:t})):o.a.createElement(f,r({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);