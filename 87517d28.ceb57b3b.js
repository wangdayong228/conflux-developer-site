(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(202)),o={},c={id:"conflux-rust/changelogs/CHANGELOG-0.6.x",title:"CHANGELOG-0.6.x",description:"0.6.3",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-0.6.x.md",permalink:"/docs/conflux-rust/changelogs/CHANGELOG-0.6.x",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/changelogs/CHANGELOG-0.6.x.md",lastUpdatedAt:1603980656},l=[{value:"Improvements",id:"improvements",children:[]},{value:"Improvement",id:"improvement",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Incompatible Changes",id:"incompatible-changes",children:[]},{value:"Improvements",id:"improvements-1",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"063"},"0.6.3"),Object(i.b)("h2",{id:"improvements"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Block info returned by rpc methods ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getBlockByEpochNumber"),", ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getBlockByHash"),", ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getBlockByHashWithPivotAssumption")," add one new field ",Object(i.b)("inlineCode",{parentName:"p"},"gasUsed")," (backward compatible)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Revise ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getStorageRoot")," output. Now it always returns a JSON objects with three fields ",Object(i.b)("inlineCode",{parentName:"p"},'"delta"'),", ",Object(i.b)("inlineCode",{parentName:"p"},'"intermediate"'),", and ",Object(i.b)("inlineCode",{parentName:"p"},'"snapshot"'),". These fields are either ",Object(i.b)("inlineCode",{parentName:"p"},"null"),", ",Object(i.b)("inlineCode",{parentName:"p"},'"TOMBSTONE"'),", or a hash string (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},'"0x0240a5a3486ac1cee71db22b8e12f1bb6ac9f207ecd81b06031c407663c20a94"'),")."))),Object(i.b)("h1",{id:"062"},"0.6.2"),Object(i.b)("h2",{id:"improvement"},"Improvement"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Start stratum services automatically if ",Object(i.b)("inlineCode",{parentName:"li"},"mining_author")," is set.\nUse ",Object(i.b)("inlineCode",{parentName:"li"},"mining_type")," to allow start CPU mining or disable mining manually."),Object(i.b)("li",{parentName:"ul"},"Add rpc method ",Object(i.b)("inlineCode",{parentName:"li"},"tx_inspect_pending")," to help developer get their pending info."),Object(i.b)("li",{parentName:"ul"},"Debug rpc ",Object(i.b)("inlineCode",{parentName:"li"},"txpool_inspect")," ",Object(i.b)("inlineCode",{parentName:"li"},"txpool_content")," ",Object(i.b)("inlineCode",{parentName:"li"},"getTransactionsFromPool")," add an optional parameter ",Object(i.b)("inlineCode",{parentName:"li"},"address")," to enable filter by account  ")),Object(i.b)("h1",{id:"060"},"0.6.0"),Object(i.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix inconsistent logics for TrackTouched.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make sure all internal account exists at genesis block, otherwise some\nreadonly operation may crash.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix incorrect usages of require() in vm operations. In most cases creation of\nbasic account in its absense is undesired, especially when the address is a\ncontract. When a user account is to be created, the address space is checked.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix issue in processing snapshot chunk boundary which caused crash. The bug\nwas caused by a wrong assumption of the uniqueness of the trie proof key.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix incorrect receipt in refunding code collateral when contract suicides.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix crash when a contract suicides during creation.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fix db error handling for EVM create / call.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Prevent crashes due to unchecked address space."))),Object(i.b)("h2",{id:"incompatible-changes"},"Incompatible Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change StorageValue serialization to reduce space.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Changed COMMISSION_PRIVILEGE_STORAGE_VALUE.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Remove address from Account rlp format, which was included unexpectedly\nbefore.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Changed RewardInfo struct to add author info.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Invalid address in transaction execution will trigger an error. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The SELFDECONSTRUCT operation will fail if refund to invalid address.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change the logic when reentrancy happens. (Message call with empty data and <= 2300 gas is exempt from reentrancy check.)"))),Object(i.b)("h2",{id:"improvements-1"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Unify all public rpc with hex number, the following fields from RPC will be changed from decimal to hexadecimal:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"BlameInfo.blame"),Object(i.b)("li",{parentName:"ul"},"Block.blame"),Object(i.b)("li",{parentName:"ul"},"CallRequest.storageLimit"),Object(i.b)("li",{parentName:"ul"},"ConsensusGraphBlockState.blockStatus"),Object(i.b)("li",{parentName:"ul"},"EpochNumber::Num"),Object(i.b)("li",{parentName:"ul"},"Receipt.index"),Object(i.b)("li",{parentName:"ul"},"Receipt.epochNumber"),Object(i.b)("li",{parentName:"ul"},"Receipt.outcomeStatus"),Object(i.b)("li",{parentName:"ul"},"Status.pendingTxNumber"),Object(i.b)("li",{parentName:"ul"},"SyncGraphBlockState.timestamp"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rename local rpc send_transaction with cfx_sendTransaction.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Improve the performance of the consensus layer for unstable TreeGraph scenarios. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Complete the protocol version mechanism for node communications and bump\nthe protocol version to V2. The change is backwards-compatible except for\nmsgid::THROTTLE (0xfe).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add chain_id field into sync protocol and light protocol handshake message\nso that peers can disconnect peers from another Conflux chain, e.g. testnet,\nanother testnet.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Keep network_id the same as chain_id. Setting network_id is only for local\nexperimental purposes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Improve the transaction replacement rule in tx-pool: now a transaction can\nreplace one with same sender and nonce by higher gas-price or by same gas-price\nand larger epoch height.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change the nonce to 256 bits from 64 bits")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Introduce nonce based lower bound in the PoW difficulty calculation. This\nwill help to defend against block withholding attack among mining pools in\nfuture. With this change and careful PoW design, a mining pool can withhold\nthe top 128 bits of the nonce as the server nonce and the participants of\nthe pool will not be able to tell whether they mined a block or not.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Improve the stratum protocol to make it more consistent with the convention.\nNow the stratum protocol can correctly work with an external miner.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Separate ",Object(i.b)("inlineCode",{parentName:"p"},"deposit_list")," and ",Object(i.b)("inlineCode",{parentName:"p"},"vote_stake_list")," from ",Object(i.b)("inlineCode",{parentName:"p"},"Account")," and adjust the gas cost for ",Object(i.b)("inlineCode",{parentName:"p"},"withdraw"),", ",Object(i.b)("inlineCode",{parentName:"p"},"deposit"),", ",Object(i.b)("inlineCode",{parentName:"p"},"vote_lock")," internal contract call. Now, the gas cost for there three functions is related with the length of ",Object(i.b)("inlineCode",{parentName:"p"},"deposit_list")," or ",Object(i.b)("inlineCode",{parentName:"p"},"vote_stake_list"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Disable transaction index persistence by default. This will reduce the disk usage\nfor miners. If you want to reliably serve transaction-related RPCs, you should\nset ",Object(i.b)("inlineCode",{parentName:"p"},"persist_tx_index=true")," in the configuration file manually.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A new RPC ctx_getBlockRewardInfo to query block reward information inside a\ngiven epoch.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Compute transaction root and receipts root by a simple MPT where the key is\nthe index in big endian bytes representation of fixed length with leading zero\nand the value is the bytes representation of the corresponding data, e.g.\ntransaction hash for transaction root, Receipt rlp for block receipts root.\nThe receipts root is the Merkle root of the simple MPT of block receipts roots.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use raw bytes in blame vec hash calculation instead of rlp because each\nelement of the vec is fixed length H256.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add support for CHAINID, SELFBALANCE, BEGINSUB, JUMPSUB, RETURNSUB opcodes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"NUMBER opcode in call_virtual() now returns the correct block number.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"BLOCKHASH opcode now returns the last block hash (i.e., ",Object(i.b)("inlineCode",{parentName:"p"},"blockhash(block.number - 1)"),")\nor zero if not querying the last block hash.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Disable reentrancy of contract calling through other contracts. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change the default value of ",Object(i.b)("inlineCode",{parentName:"p"},"from_epoch")," in RPC ",Object(i.b)("inlineCode",{parentName:"p"},"cfx_getLogs"),' from "earliest" to "latest_checkpoint".\nNow if no ',Object(i.b)("inlineCode",{parentName:"p"},"from_epoch")," is specified, it will only return logs after the latest checkpoint.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Improve archive and full node log filtering. Change ",Object(i.b)("inlineCode",{parentName:"p"},"filter.to_epoch")," default to ",Object(i.b)("inlineCode",{parentName:"p"},'"latest_state"'),". Limit ",Object(i.b)("inlineCode",{parentName:"p"},"filter.block_hashes")," to up to 128 items.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change internal contracts address to 0x088800...")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enable overflow-checks for release build, to make sure that underflow is\nimpossible.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Reduce the lock dependency between the transaction pool and the consensus engine to improve the performance.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Transaction pool will not start until the node finishes the catch-up. This\navoids inconsistent transaction pool issues during the catch up.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"New cfx_clientVersion() rpc call to return a string with versions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change CREATE/CREATE2 maximum code size from 24K to 48K"))))}b.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);