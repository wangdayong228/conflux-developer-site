(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var r=n(2),o=n(9),a=(n(0),n(209)),i=n(212),c={id:"conflux_overview",title:"Conflux Overview",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/overview.md",keywords:["conflux","overview"]},s={id:"introduction/en/conflux_overview",title:"Conflux Overview",description:"Conflux is a new secure and reliable public blockchain with very high",source:"@site/docs/introduction/en/overview.md",permalink:"/docs/introduction/en/conflux_overview",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/overview.md",lastUpdatedAt:1593504776,sidebar:"docs",next:{title:"Installation",permalink:"/docs/conflux-doc/docs/installation"}},l=[],u={rightToc:l};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Conflux is a new secure and reliable public blockchain with very high\nperformance and scalability. It can achieve the same level of decentralization\nand security as Bitcoin and Ethereum but provide more than two orders of\nmagnitude improvement on transaction throughput (TPS) and finality latency.  "),Object(a.b)("p",null,"The major superiority of Conflux hinges on its novel design of consensus\nprotocol, authenticated storage, and transaction relay protocol. In Conflux\nledger, blocks are organized as ",Object(a.b)("strong",{parentName:"p"},"TreeGraph")," where each block references some\nother blocks with one of them being its parent block. By only looking at the\nblocks linked with parent edges, the ledger appears to be a tree structure\n(parental tree), while by looking at all the blocks, it appears to be a directed\nacyclic graph. This is also the reason that we call the ledger structure of\nConflux as TreeGraph. "),Object(a.b)("img",{alt:"TreeGraph ",src:Object(i.a)("img/tree_graph.jpg")}),Object(a.b)("p",null,"The consensus algorithm of Conflux, which is called\n",Object(a.b)("strong",{parentName:"p"},"Greedy-Heaviest-Adaptive-SubTree")," (GHAST), enables all the nodes in the\nblockchain network to consistently agree on a ",Object(a.b)("strong",{parentName:"p"},"pivot chain")," of blocks by\napplying the ",Object(a.b)("em",{parentName:"p"},"heaviest subtree rule")," on the parental tree in the ledger, and in\nturn reach the consensus on the total order of all the blocks based on the pivot\nchain. GHAST also allows the Conflux nodes to detect some attacks (e.g., balance\nattack that tries to generate two balanced subtrees) that may hurt the liveness,\ni.e., the ability to confirm transactions, and thwart these attacks by\nadaptively adjusting the weights of the blocks.  "),Object(a.b)("p",null,"The TreeGraph ledger and the GHAST consensus algorithm make Conflux nodes be\nable to quickly generate new blocks without worrying about that the existence of\nforks in the ledger may harm the security of the network, and hence enable the\nsystem to achieve both the high throughput and the low transaction confirmation\nlatency.  "),Object(a.b)("p",null,"Conflux employs account model and supports the smart contract. Its smart\ncontract is compatible with Solidity, which is Turing complete, as used in\nEthereum. Conflux uses merkle patricia tree as the major structure for its\nauthenticated storage used for the states of the accounts and the smart\ncontracts. Instead of using a single multi-version merkle tree, Conflux uses\nmultiple merkle trees for each version of the states. High-level speaking, it\nconsists of a snapshot tree and the delta trees. The delta tree is always held\nin memory and it contains all the state updates from the last snapshot. The\nsnapshot tree, instead, is read-only during the execution of the transactions.\nThis design makes the transaction execution in Conflux more efficient because it\ncan utilize the memory more effectively when accessing the state in the storage.\nThe delta tree typically contains the most frequently accessed data, and since\nthe state size is small in delta tree, the depth of the tree can also be\nshallow, which makes the memory be able to hold more effective data.  "),Object(a.b)("p",null,"In addition, Conflux employs a novel transaction relay protocol to improve the\neffective utilization of the network bandwidth for transaction propagation\nsince, in Conflux, the network bandwidth could become the real bottleneck. In\norder to reduce the redundant transaction propagation, a Conflux node first\nsends out to its peers an announcement containing the transaction ids that the\npeers may not have seen before, and then let the peers request the transactions\nthat they really need. Conflux introduces an efficient encoding for the\ntransaction id to achieve a good trade-off between the size and the security.  "))}h.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,f=h["".concat(i,".").concat(p)]||h[p]||d[p]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";var r=n(0),o=n(56);t.a=function(){return Object(r.useContext)(o.a)}},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(215);var r=n(210);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},215:function(e,t,n){"use strict";var r=n(17),o=n(35),a=n(216),i="".startsWith;r(r.P+r.F*n(217)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},216:function(e,t,n){var r=n(71),o=n(27);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},217:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);