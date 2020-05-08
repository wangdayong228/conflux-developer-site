(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(9),a=(n(0),n(203)),s={id:"best_practices",title:"Best Practices",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Best_Practices.md"},i={id:"conflux-portal/docs/en/portal/best_practices",title:"Best Practices",description:"## Registering Your Contract's Method Names",source:"@site/docs/conflux-portal/docs/en/portal/Best_Practices.md",permalink:"/docs/conflux-portal/docs/en/portal/best_practices",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Best_Practices.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1585033639},c={};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"user-content-registering-your-contracts-method-names"},"Registering Your Contract's Method Names"),Object(a.b)("p",null,"Conflux Portal uses the parity on-chain registry of function signatures to\ndisplay method names on the confirm screen. For many common method names, like\ntoken methods, this allows Conflux Portal to successfully look up the method\nnames by their ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html"}),"method\nsignature"),"."),Object(a.b)("p",null,"However, sometimes you're using a method that is not in that on-chain registry,\nand Conflux Portal will simply display ","Unknown Function"," to the user.  "),Object(a.b)("p",null,"To add your contract's function names to this registry so it shows in the\nConflux Portal interface, follow the below steps. "),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"We (conflux) don't support below features right now.")," "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Go to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://etherscan.io/address/0x44691b39d1a75dc4e0a0346cbb15e310e6ed1e86#writeContract"}),"mainnet parity signature registration contract on\netherscan")," ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Connect Conflux Portal")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Use etherscan's write contract feature to input the string value (without\nquotes or spaces) to the register function "),Object(a.b)("p",{parentName:"li"},"for example:"),Object(a.b)("p",{parentName:"li"},"getOwners()"),Object(a.b)("p",{parentName:"li"},"execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Press write")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Approve the transaction through Conflux Portal (you only pay gas)"))),Object(a.b)("h3",{id:"user-content-verify"},"Verify"),Object(a.b)("p",null,"web3.sha3('getOwners()') =>\n0xa0e67e2bdc0a6d8a09ccd6c353c9df590807ad66ff5e6630c4f31a86dfa84821"),Object(a.b)("p",null,"take the first 10 characters ","0xa0e67e2b"," and input into ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(o.a)({parentName:"strong"},{href:"https://jennypollack.github.io/function_signature_registry/"}),"this demo\napp")," that checks\nthe on-chain registry")," (mainnet or rinkeby) "),Object(a.b)("h3",{id:"user-content-alternate-steps-using-remixethereumorg"},"Alternate steps using remix.ethereum.org:"),Object(a.b)("p",null,"Paste the contract code from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.bokconsulting.com.au/blog/a-quick-look-at-paritys-signature-registry-contract/"}),"bokky's blog\npost"),"\ninto ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"remix.ethereum.org"}),"remix")," "),Object(a.b)("p",null,"Set the correct compiler version based on the contract."),Object(a.b)("p",null,"Use remix's write functionality to add to the registry."),Object(a.b)("p",null,"You can look at the FUNCTIONHASHES section on remix.conflux.org by loading the\nsignature registry contract, press the Details button on the compile tab. "),Object(a.b)("h3",{id:"user-content-additional-info"},"Additional Info"),Object(a.b)("p",null,"You can also use the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://rinkeby.etherscan.io/address/0x0c0831fb1ec7442485fb41a033ba188389a990b4"}),"signature\nregistry"),"\ndeployed on rinkeby but should note that ",Object(a.b)("strong",{parentName:"p"},"Conflux Portal reads from the mainnet\neth-method-registry endpoint, regardless of user's network")," "),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/danfinlay/eth-method-registry"}),"eth-method-registry")," is used\nto lookup methods in Conflux Portal. "),Object(a.b)("p",null,"This ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://conflux.stackexchange.com/questions/59678/metamask-shows-unknown-function-when-calling-method-send-function"}),"stack\nexchange"),"\nanswer is a good ",Object(a.b)("strong",{parentName:"p"},"tldr"),". "),Object(a.b)("h2",{id:"user-content-registering-tokens-with-users"},"Registering Tokens with Users"),Object(a.b)("p",null,"When a user opens their Conflux Portal, they are shown a variety of assets,\nincluding tokens. By default, Conflux Portal auto-detects some major popular\ntokens and auto-displays them, but for most tokens, the user will need to add\nthe token themselves. "),Object(a.b)("p",null,"While this is possible using our UI with the ","Add Token"," button, that process\ncan be cumbersome, and involves the user interacting with contract addresses,\nand is very error prone. "),Object(a.b)("p",null,"You can greatly improve the security and experience of users adding your token\nto their Conflux Portal by taking advantage of the ","wallet_watchAsset"," API as\ndefined in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/estebanmino/EIPs/blob/master/EIPS/eip-747.md"}),"EIP\n747"),". "),Object(a.b)("h3",{id:"user-content-code-free-example"},"Code-free Example"),Object(a.b)("p",null,"Here are a couple live web applications that let you enter your token details,\nand then share them with a simple web link: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://vittominacori.github.io/watch-token/create.html"}),"Watch Token")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://metamask.github.io/Add-Token/#edit"}),"Add Token App"))),Object(a.b)("h3",{id:"user-content-example"},"Example"),Object(a.b)("p",null,"If you'd like to integrate suggesting a token into your own web app, you can\nfollow this code snippet to implement it: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'const tokenAddress = \'0xd00981105e61274c8a5cd5a88fe7e037d935b513\'\nconst tokenSymbol = \'TUT\'\nconst tokenDecimals = 18\nconst tokenImage = \'http://placekitten.com/200/300\'\n\nconflux.sendAsync({\n    method: \'wallet_watchAsset\',\n    params: {\n      "type":"ERC20",\n      "options":{\n        "address": tokenAddress,\n        "symbol": tokenSymbol,\n        "decimals": tokenDecimals,\n        "image": tokenImage,\n      },\n    },\n    id: Math.round(Math.random() * 100000),\n}, (err, added) => {\n\n  if (added) {\n    console.log(\'Thanks for your interest!\')\n  } else {\n    console.log(\'Your loss!\')\n  }\n\n})\n')),Object(a.b)("h2",{id:"user-content-default-token-list"},"Default Token List"),Object(a.b)("p",null,"If you're a major and popular token, you may qualify to be listed in our\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/yqrashawn/cfx-contract-metadata"}),"cfx-contract-metadata"),"\nregistry. This is a centralized solution and takes a larger toll on our\ndevelopment team, so we prefer to avoid the politics of picking and choosing\ntokens that get auto-detected in users' accounts, so please see if the EIP-747\nmethod above can suit your needs before submitting a new token there for\ninclusion. "),Object(a.b)("p",null,"If you have a user on your site, asking them to click once to add a token is a\nsmall burden on them, and allows you to leverage the trusting relationship you\nalready have with your user instead of our central repository. "),Object(a.b)("h2",{id:"user-content-defining-your-apps-icon"},"Defining Your App's Icon"),Object(a.b)("p",null,"When your site makes a login request to a Confluxi Portal user, Confluxi Portal may\nrender a modal that display's your site icon. "),Object(a.b)("p",null,"We retrieve this icon using the HTML selector ",'head > link[rel="shortcut\nicon"]',", so to customize this icon for your site, just make sure to follow the\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Favicon"}),"favicon standard"),", and make sure to have\na ","link"," tag within your site's ","head"," with ",'rel = "shortcut icon"',", like this. "),Object(a.b)("p",null,"The tag's ","href"," attribute will be used for assigning the site icon."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'<head>\n  <link rel="shortcut icon" href="https://your-site.com/your-icon.png">\n</head>\n')))}l.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(h,i({ref:t},l,{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);