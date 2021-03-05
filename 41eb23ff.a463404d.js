(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var c=t(2),a=t(9),o=(t(0),t(215)),l={id:"cli_sub_commands",title:"CLI Sub-commands",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/cli.md",keywords:["conflux","cli","sdk"]},r={id:"conflux-doc/docs/cli_sub_commands",title:"CLI Sub-commands",description:"Conflux CLI sub-commands is a collection of command line interfaces which allows you to interact with a local or remote Conflux node.",source:"@site/docs/conflux-doc/docs/cli.md",permalink:"/docs/conflux-doc/docs/cli_sub_commands",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/cli.md",lastUpdatedAt:1612409520,sidebar:"docs",previous:{title:"Publish-Subscribe API",permalink:"/docs/conflux-doc/docs/pubsub"},next:{title:"Javascript SDK",permalink:"/docs/js-conflux-sdk/docs/javascript_sdk"}},i=[{value:"Manage Accounts",id:"manage-accounts",children:[{value:"new",id:"new",children:[]},{value:"list",id:"list",children:[]},{value:"import",id:"import",children:[]}]},{value:"Public APIs",id:"public-apis",children:[{value:"Get balance",id:"get-balance",children:[]},{value:"Get nonce",id:"get-nonce",children:[]},{value:"Get current epoch number",id:"get-current-epoch-number",children:[]},{value:"Get block(s)",id:"get-blocks",children:[]},{value:"Get transaction",id:"get-transaction",children:[]},{value:"Get receipt",id:"get-receipt",children:[]},{value:"Send signed transaction",id:"send-signed-transaction",children:[]},{value:"Misc",id:"misc",children:[]}]},{value:"Private APIs",id:"private-apis",children:[{value:"net",id:"net",children:[]},{value:"txpool",id:"txpool",children:[]},{value:"sync-phase",id:"sync-phase",children:[]},{value:"Send transaction",id:"send-transaction",children:[]}]}],s={rightToc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(c.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Conflux CLI sub-commands is a collection of command line interfaces which allows you to interact with a local or remote Conflux node."),Object(o.b)("h2",{id:"manage-accounts"},"Manage Accounts"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"account")," sub-command allows you to manage accounts at local machine."),Object(o.b)("h3",{id:"new"},"new"),Object(o.b)("p",null,"Create a new account at local machine."),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-text"}),"$ ./conflux.exe account new --help\nconflux.exe-account-new\nCreate a new account (and its associated key) for the given --chain (default conflux).\n\nUSAGE:\n    conflux.exe account new [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --keys-iterations <NUM>    Specify the number of iterations to use when deriving key from the password (bigger is more secure). [default: 10240]\n        --password <FILE>          Provide a file containing a password for unlocking an account. Leading and trailing whitespace is trimmed.\n")),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe account new")),Object(o.b)("h3",{id:"list"},"list"),Object(o.b)("p",null,"List all accounts at local machine."),Object(o.b)("h4",{id:"usage-1"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-text"}),"$ ./conflux.exe account list --help\nconflux.exe-account-list\nList existing accounts of the given --chain (default conflux).\n\nUSAGE:\n    conflux.exe account list\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n")),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe account list")),Object(o.b)("h3",{id:"import"},"import"),Object(o.b)("p",null,"Import accounts from JSON UTC keystore files."),Object(o.b)("h4",{id:"usage-2"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-text"}),"$ ./conflux.exe account import --help\nconflux.exe-account-import\nImport accounts from JSON UTC keystore files to the specified --chain (default conflux)\n\nUSAGE:\n    conflux.exe account import --import-path <PATH>...\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --import-path <PATH>...    A list of file paths to import.\n")),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe account import --import-path ./keystores")),Object(o.b)("h2",{id:"public-apis"},"Public APIs"),Object(o.b)("p",null,"Public API allows you to interact with a local or remote Conflux node via HTTP connection in JSON-RPC protocol. All public APIs are under ",Object(o.b)("inlineCode",{parentName:"p"},"rpc")," sub-command, and access to the JSON-RPC API at local machine with default ",Object(o.b)("inlineCode",{parentName:"p"},"url")," option."),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-text"}),"OPTIONS:\n        --url <url>    URL of RPC server [default: http://localhost:12539]\n")),Object(o.b)("p",null,"To access JSON-RPC API of remote Conflux node, please specify the  correct ",Object(o.b)("inlineCode",{parentName:"p"},"--url")," option (e.g. ",Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"http://10.1.5.6:12537"}),"http://10.1.5.6:12537"),"). By default, JSON-RPC is enabled only for local access for security consideration. You can manually enable remote access by configuring ",Object(o.b)("inlineCode",{parentName:"p"},"jsonrpc_http_port")," in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"default.toml"))," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-toml"}),"# jsonrpc_tcp_port=12536\njsonrpc_http_port=12537\n# jsonrpc_local_tcp_port=12538\njsonrpc_local_http_port=12539\n")),Object(o.b)("p",null,"All available commands are as following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-text"}),"$ ./conflux.exe rpc --help\nconflux.exe-rpc\nRPC based subcommands to query blockchain information and send transactions\n\nUSAGE:\n    conflux.exe rpc [OPTIONS] <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --url <url>    URL of RPC server [default: http://localhost:12539]\n\nSUBCOMMANDS:\n    balance                  Get balance of specified account\n    best-block-hash          Get the best block hash\n    block-by-epoch           Get block by epoch\n    block-by-hash            Get block by hash\n    block-with-assumption    Get block by hash with pivot chain assumption\n    blocks                   Get blocks of specified epoch\n    call                     Executes a new message call immediately without creating a transaction\n    code                     Get bytecode of specified contract\n    local                    Local subcommands (requires jsonrpc_local_http_port configured)\n    epoch                    Get epoch number\n    estimate-gas             Executes a call request immediately without creating a transaction and returns the gas used\n    help                     Prints this message or the help of the given subcommand(s)\n    nonce                    Get nonce of specified account\n    price                    Get recent mean gas price\n    receipt                  Get receipt by transaction hash\n    send                     Send a signed transaction and return its hash\n    tx                       Get transaction by hash\n")),Object(o.b)("h3",{id:"get-balance"},"Get balance"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe rpc balance --address cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg")),Object(o.b)("h3",{id:"get-nonce"},"Get nonce"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe rpc nonce --address cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg")),Object(o.b)("h3",{id:"get-current-epoch-number"},"Get current epoch number"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe rpc epoch")),Object(o.b)("h3",{id:"get-blocks"},"Get block(s)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Get Best block hash: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc best-block-hash")),Object(o.b)("li",{parentName:"ul"},"Get block by epoch: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc block-by-epoch --epoch latest_state")),Object(o.b)("li",{parentName:"ul"},"Get block by height: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc block-by-epoch --epoch 0x10")),Object(o.b)("li",{parentName:"ul"},"Get blocks in epoch: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc blocks --epoch latest_state"))),Object(o.b)("h3",{id:"get-transaction"},"Get transaction"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe rpc tx --hash 0x718532fe76dbd8c4208c6c5a79588db35c0bf97e7d8a0faa5988ba66ad88b74c")),Object(o.b)("h3",{id:"get-receipt"},"Get receipt"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe rpc receipt --hash 0x718532fe76dbd8c4208c6c5a79588db35c0bf97e7d8a0faa5988ba66ad88b74c")),Object(o.b)("h3",{id:"send-signed-transaction"},"Send signed transaction"),Object(o.b)("p",null,"Send a signed transaction which encoded in HEX format. Generally, this API is used for Java-Script API to send encoded transaction. To send a transaction with CLI, suggest to use private API ",Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"#send-transaction"}),"send transaction"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe rpc send --raw-bytes 0x...")),Object(o.b)("h3",{id:"misc"},"Misc"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Get contract code: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc code --address cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp")),Object(o.b)("li",{parentName:"ul"},"Get recent mean gas price: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc price"))),Object(o.b)("h2",{id:"private-apis"},"Private APIs"),Object(o.b)("p",null,"Private API allows you to interact with local Conflux node ",Object(o.b)("strong",{parentName:"p"},"only")," via HTTP connection in JSON-RPC protocol. Private APIs are provided for user to manage the local Conflux node, and requires the ",Object(o.b)("inlineCode",{parentName:"p"},"jsonrpc_local_http_port")," configured in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"default.toml"))," configuration file."),Object(o.b)("p",null,"In addition, private APIs also helps developers to debug, test, and monitor the runtime of Conflux node."),Object(o.b)("p",null,"All private APIs are under ",Object(o.b)("inlineCode",{parentName:"p"},"local")," sub-command, and access to the JSON-RPC API at local machine with default ",Object(o.b)("inlineCode",{parentName:"p"},"url")," option."),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-text"}),"$ ./conflux.exe rpc local --help\nconflux.exe-rpc-local\nDebug subcommands (requires jsonrpc_local_http_port configured)\n\nUSAGE:\n    conflux.exe rpc local [OPTIONS] <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --url <url>    URL of RPC server [default: http://localhost:12539]\n\nSUBCOMMANDS:\n    consensus-graph-state    Get the consensus graph state\n    help                     Prints this message or the help of the given subcommand(s)\n    net                      Network subcommands\n    send                     Send a transaction and return its hash\n    sync-phase               Get the current synchronization phase\n    test                     Test subcommands (used for test purpose only)\n    txpool                   Transaction pool subcommands\n")),Object(o.b)("h3",{id:"net"},"net"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"net")," sub-command helps you to inspect the P2P network status."),Object(o.b)("h4",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"List all connected P2P nodes: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc local net session")),Object(o.b)("li",{parentName:"ul"},"List a single P2P node: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc local net session --id <node_id>")),Object(o.b)("li",{parentName:"ul"},"Check network egress: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc local net throttling"))),Object(o.b)("h3",{id:"txpool"},"txpool"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"txpool")," sub-command helps you to inspect the transaction pool."),Object(o.b)("h4",{id:"examples-1"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"List transaction pool status: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc local txpool status")),Object(o.b)("li",{parentName:"ul"},"List transactions in details: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc local txpool content")),Object(o.b)("li",{parentName:"ul"},"List summary of transactions: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc local txpool inspect")),Object(o.b)("li",{parentName:"ul"},"Inspect a transaction in detail: ",Object(o.b)("inlineCode",{parentName:"li"},"./conflux.exe rpc local txpool inspect-one --hash <tx_hash>"))),Object(o.b)("h3",{id:"sync-phase"},"sync-phase"),Object(o.b)("p",null,"Get the synchronization phase of local conflux node."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe rpc local sync-phase")),Object(o.b)("h3",{id:"send-transaction"},"Send transaction"),Object(o.b)("p",null,"Send a transaction to local Conflux node."),Object(o.b)("h4",{id:"usage-3"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{className:"language-text"}),"$ ./conflux.exe rpc local send --help\nconflux.exe-rpc-local-send\nSend a transaction and return its hash\n\nUSAGE:\n    conflux.exe rpc local send [OPTIONS] --from <ADDRESS> --value <HEX>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --data <HEX>           Hash of the method signature and encoded parameters\n        --from <ADDRESS>       Transaction from address\n        --gas <HEX>            Gas provided for transaction execution [default: 0x5208]\n        --gas-price <HEX>      Transaction gas price [default: 0x2540BE400]\n        --nonce <HEX>          Transaction nonce\n        --to <ADDRESS>         Transaction to address (empty to create contract)\n        --url <url>            URL of RPC server [default: http://localhost:12537]\n        --value <HEX>          value sent with this transaction\n")),Object(o.b)("h4",{id:"example-3"},"Example"),Object(o.b)("p",null,"Alice transfer 5 Drip (1 CFX = 10^18 Drip) to Bob. Note, the address of Alice must exist at local machine, otherwise please ",Object(o.b)("a",Object(c.a)({parentName:"p"},{href:"#new"}),"create")," account for alice at first."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe rpc local send --from <alice_address> --to <bob_address> --value 0x5 --password 123456")),Object(o.b)("p",null,"Alice create a contract with gas 3,000,000. You can use ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"solc"))," to compile contract to get the bytecodes."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"./conflux.exe rpc local send --from <alice_address> --value 0x0 --gas 0x\u202d2DC6C0\u202c --data <HEX_contract_bytecodes> --password 123456")))}p.isMDXComponent=!0},215:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var c=t(0),a=t.n(c);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,c,a=function(e,n){if(null==e)return{};var t,c,a={},o=Object.keys(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)t=o[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(t),d=c,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return t?a.a.createElement(m,r(r({ref:n},s),{},{components:t})):a.a.createElement(m,r({ref:n},s))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:c,l[1]=r;for(var s=2;s<o;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);