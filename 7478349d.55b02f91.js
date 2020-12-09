(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(2),a=n(9),l=(n(0),n(209)),r={},o={id:"conflux-rust/changelogs/CHANGELOG-1.0.x",title:"CHANGELOG-1.0.x",description:"1.1.0",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-1.0.x.md",permalink:"/docs/conflux-rust/changelogs/CHANGELOG-1.0.x",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/changelogs/CHANGELOG-1.0.x.md",lastUpdatedAt:1607498295},c=[{value:"Incompatible changes",id:"incompatible-changes",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Improvements",id:"improvements-1",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Improvements",id:"improvements-2",children:[]},{value:"Bug Fixes",id:"bug-fixes-1",children:[]},{value:"Light nodes",id:"light-nodes",children:[]},{value:"Improvement",id:"improvement",children:[]},{value:"Bug Fixes",id:"bug-fixes-2",children:[]},{value:"Incompatible changes",id:"incompatible-changes-1",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"110"},"1.1.0"),Object(l.b)("h2",{id:"incompatible-changes"},"Incompatible changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CIP-38: Reduce the block base reward to 2 CFX from the epoch number 3,615,000."),Object(l.b)("li",{parentName:"ul"},"CIP-39: Blocks from the height 3,615,000 (included) are required to set the first element of their ",Object(l.b)("inlineCode",{parentName:"li"},"custom")," field in the header to ",Object(l.b)("inlineCode",{parentName:"li"},"[1]"),".")),Object(l.b)("h2",{id:"improvements"},"Improvements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Return the ",Object(l.b)("inlineCode",{parentName:"li"},"custom")," field in the block header for related RPCs (",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHash"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),").")),Object(l.b)("h1",{id:"104"},"1.0.4"),Object(l.b)("h2",{id:"improvements-1"},"Improvements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Add config parameter ",Object(l.b)("inlineCode",{parentName:"li"},"executive_trace")," to allow storing block execution traces. (default is ",Object(l.b)("inlineCode",{parentName:"li"},"false"),")"),Object(l.b)("li",{parentName:"ul"},"Add config parameter ",Object(l.b)("inlineCode",{parentName:"li"},"enable_tracing")," to allow public access to ",Object(l.b)("inlineCode",{parentName:"li"},"trace_*")," RPC APIs. (default is ",Object(l.b)("inlineCode",{parentName:"li"},"false"),")"),Object(l.b)("li",{parentName:"ul"},"Add new rpc ",Object(l.b)("inlineCode",{parentName:"li"},"trace_block")," for archive/full nodes. (only works for blocks processed after setting ",Object(l.b)("inlineCode",{parentName:"li"},"executive_trace"),")"),Object(l.b)("li",{parentName:"ul"},"Use 0 as default for storage limit in ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_sendTransaction")," and ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_signTransaction"),".")),Object(l.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Change the ",Object(l.b)("inlineCode",{parentName:"li"},"blame")," field returned from the ",Object(l.b)("inlineCode",{parentName:"li"},"newHeads")," pub-sub to hex."),Object(l.b)("li",{parentName:"ul"},"Fix an issue where the ",Object(l.b)("inlineCode",{parentName:"li"},"logs")," pub-sub API would skip logs."),Object(l.b)("li",{parentName:"ul"},"Fix an issue where if miners submit the nonce solution to multiple nodes, some of these nodes may stop mining (Issue #1985).")),Object(l.b)("h1",{id:"103"},"1.0.3"),Object(l.b)("h2",{id:"improvements-2"},"Improvements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Support ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_gasPrice"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getAccumulateInterestRate"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getInterestRate"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_checkBalanceAgainstTransaction")," on light nodes."),Object(l.b)("li",{parentName:"ul"},"Add the following new fields in the return value of ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getTransactionReceipt"),": ",Object(l.b)("inlineCode",{parentName:"li"},"gasCoveredBySponsor"),", ",Object(l.b)("inlineCode",{parentName:"li"},"storageCollateralized"),", ",Object(l.b)("inlineCode",{parentName:"li"},"storageCoveredBySponsor"),", ",Object(l.b)("inlineCode",{parentName:"li"},"storageReleased"),"."),Object(l.b)("li",{parentName:"ul"},"Add new rpc ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getDepositList")," and ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getVoteList")," in archive/full/light nodes.")),Object(l.b)("h1",{id:"102"},"1.0.2"),Object(l.b)("h2",{id:"bug-fixes-1"},"Bug Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fix bugs in whitelist removal at contract removal.")),Object(l.b)("h1",{id:"101"},"1.0.1"),Object(l.b)("h2",{id:"light-nodes"},"Light nodes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fix the following RPCs on light nodes: ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_epochNumber"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getNextNonce"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_GetBlockByHash"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getBlocksByEpoch"),"."),Object(l.b)("li",{parentName:"ul"},"Make ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getTransactionReceipt")," return null instead of timeout on light nodes to increase compatibility with js-conflux-sdk."),Object(l.b)("li",{parentName:"ul"},"Fix bug where light nodes disconnect peers if the user queries the genesis block."),Object(l.b)("li",{parentName:"ul"},"Add periodic heartbeat messages to the light protocol.")),Object(l.b)("h1",{id:"100"},"1.0.0"),Object(l.b)("h2",{id:"improvement"},"Improvement"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Start stratum services automatically if ",Object(l.b)("inlineCode",{parentName:"li"},"mining_author")," is set.\nUse ",Object(l.b)("inlineCode",{parentName:"li"},"mining_type")," to allow start CPU mining or disable mining manually."),Object(l.b)("li",{parentName:"ul"},"block info returned by rpc methods ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHash"),", ",Object(l.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption")," add one new field ",Object(l.b)("inlineCode",{parentName:"li"},"gasUsed")," (backward compatible)")),Object(l.b)("h2",{id:"bug-fixes-2"},"Bug Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fix bug where users need to restart node before they can use a newly created account to send transactions."),Object(l.b)("li",{parentName:"ul"},"Fix code() return value for uninitialized contract."),Object(l.b)("li",{parentName:"ul"},"Fix bug in kill_account after which the contract account is revived by simple transaction."),Object(l.b)("li",{parentName:"ul"},"Fix missing StorageKey conversion from bytes of DepositList and VoteList.")),Object(l.b)("h2",{id:"incompatible-changes-1"},"Incompatible changes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CIP-5 Fix corner case in MPT key encoding."),Object(l.b)("li",{parentName:"ul"},"CIP-8 Move all the collateral settlement to the end of execution."),Object(l.b)("li",{parentName:"ul"},"CIP-10 Base mining reward finalization."),Object(l.b)("li",{parentName:"ul"},"CIP-12 Allow non-zero collateral contract to be killed."),Object(l.b)("li",{parentName:"ul"},"CIP-13 Use Big-Endian MPT Keys."),Object(l.b)("li",{parentName:"ul"},"CIP-16 Collect suicide logic at the end of transaction processing."),Object(l.b)("li",{parentName:"ul"},"CIP-26 Use timestamp from pivot block as TIMESTAMP (opcode 42)."),Object(l.b)("li",{parentName:"ul"},"CIP-27 Remove sponsor whitelist keys at contract deletion."),Object(l.b)("li",{parentName:"ul"},"Set snapshot epoch count to 2000."),Object(l.b)("li",{parentName:"ul"},"Update code collateral calculation to a more reasonable method.")))}s.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,d=u["".concat(r,".").concat(m)]||u[m]||p[m]||l;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var b=2;b<l;b++)r[b]=n[b];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);