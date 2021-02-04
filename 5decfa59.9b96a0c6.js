(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(9),i=(a(0),a(214)),o={id:"common_terms",title:"Common Terms",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Common_Terms.md"},l={id:"conflux-portal/docs/en/portal/Main_Concepts/common_terms",title:"Common Terms",description:"Words are Hard",source:"@site/docs/conflux-portal/docs/en/portal/Main_Concepts/Common_Terms.md",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/common_terms",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Common_Terms.md",lastUpdatedAt:1609812162},c=[{value:"Words are Hard",id:"words-are-hard",children:[{value:"Wallet",id:"wallet",children:[]},{value:"Account",id:"account",children:[]},{value:"Address <em>(&quot;Public Key&quot;)</em>",id:"address-public-key",children:[]},{value:"Public Key",id:"public-key",children:[]},{value:"Private Key",id:"private-key",children:[]},{value:"Keystore File",id:"keystore-file",children:[]},{value:"Mnemonic Phrase / Seed Phrase / Seed Words",id:"mnemonic-phrase--seed-phrase--seed-words",children:[]},{value:"Hardware Wallet:",id:"hardware-wallet",children:[]},{value:"Identicon / AddressIdenticon / AddressIcon:",id:"identicon--addressidenticon--addressicon",children:[]},{value:"Hexadecimal",id:"hexadecimal",children:[]},{value:"Seed",id:"seed",children:[]},{value:"Brain Wallet",id:"brain-wallet",children:[]},{value:"Entropy",id:"entropy",children:[]},{value:"Derive / Derivation",id:"derive--derivation",children:[]},{value:"Encryption",id:"encryption",children:[]},{value:"Encrypted vs Unencrypted Keys",id:"encrypted-vs-unencrypted-keys",children:[]},{value:"Decentralize / Decentralization",id:"decentralize--decentralization",children:[]},{value:"Trustless",id:"trustless",children:[]},{value:"Smart Contracts",id:"smart-contracts",children:[]},{value:"Blockchain",id:"blockchain",children:[]}]}],s={rightToc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"words-are-hard"},"Words are Hard"),Object(i.b)("p",null,"This is a list of terms you might encounter when using the ConfluxPortal interface."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"wallet"},"Wallet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The interface / client / wrapper / holder that you use to manage your account(s)."),Object(i.b)("li",{parentName:"ul"},"Example: ConfluxPortal, your Ledger Hardware Wallet, a Multisig Wallet Contract.")),Object(i.b)("h3",{id:"account"},"Account"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'A public & private keypair that "holds" your funds.'),Object(i.b)("li",{parentName:"ul"},"Your funds are actually stored on the blockchain, not in the wallet or account."),Object(i.b)("li",{parentName:"ul"},"Just like your Reddit account has a ",Object(i.b)("inlineCode",{parentName:"li"},"username (public)")," and  ",Object(i.b)("inlineCode",{parentName:"li"},"password (private)"),", so does your Conflux account. For additional security, you can use a password to encrypt your private key which would result in a ",Object(i.b)("inlineCode",{parentName:"li"}," username (public)")," and ",Object(i.b)("inlineCode",{parentName:"li"}," password (private)")," and ",Object(i.b)("inlineCode",{parentName:"li"}," password for that password (private + more secure)"),". See the ",Object(i.b)("inlineCode",{parentName:"li"}," Keystore File")," section.")),Object(i.b)("h3",{id:"address-public-key"},"Address ",Object(i.b)("em",{parentName:"h3"},'("Public Key")')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You use this to send funds ",Object(i.b)("strong",{parentName:"li"},"to")," an account."),Object(i.b)("li",{parentName:"ul"},'Sometimes referred to as the "public key"'),Object(i.b)("li",{parentName:"ul"},"A string made up of ",Object(i.b)("inlineCode",{parentName:"li"},"0x")," + ",Object(i.b)("inlineCode",{parentName:"li"},"40 hexadecimal characters"),"."),Object(i.b)("li",{parentName:"ul"},"In Conflux, the contract address begins with ",Object(i.b)("inlineCode",{parentName:"li"},"0x8"),"."),Object(i.b)("li",{parentName:"ul"},"In Conflux, the account address begins with ",Object(i.b)("inlineCode",{parentName:"li"},"0x1"),"."),Object(i.b)("li",{parentName:"ul"},"Example: ",Object(i.b)("inlineCode",{parentName:"li"},"0x16a85356dcb5b307096726fb86a78c59d38e08ee"))),Object(i.b)("h3",{id:"public-key"},"Public Key"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In cryptography, you have a keypair: the public and private key."),Object(i.b)("li",{parentName:"ul"},"You can derive a public key from a private key, but cannot derive a private key from a public key."),Object(i.b)("li",{parentName:"ul"},'(Advanced) In Conflux, the address "acts" like the public key, but it\'s not actually the public key.'),Object(i.b)("li",{parentName:"ul"},"(Advanced) In Conflux, the public key is derived from the private key and is 128 hex characters. You then take the ",Object(i.b)("inlineCode",{parentName:"li"},'"SHA3" (Keccak-256)')," hash of this (64 characters), take the last 40 characters, and prefix with ",Object(i.b)("inlineCode",{parentName:"li"},"0x"),", give you your 42-character address.")),Object(i.b)("h3",{id:"private-key"},"Private Key"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You use this to send funds ",Object(i.b)("strong",{parentName:"li"},"from")," an account."),Object(i.b)("li",{parentName:"ul"},"The secret half of your Address / public key."),Object(i.b)("li",{parentName:"ul"},"A string of 64 hexadecimal characters."),Object(i.b)("li",{parentName:"ul"},"(",Object(i.b)("a",{href:"https://crypto.stackexchange.com/questions/30269/are-all-possible-ec-private-keys-valid",target:"_blank"},"Almost"),") every string of 64 hexadecimal characters is a private key."),Object(i.b)("li",{parentName:"ul"},"If you hand-type a private key differently today than yesterday, you will access a different wallet. Never hand type your private key."),Object(i.b)("li",{parentName:"ul"},"This is the string you need to send from your account. Without it you cannot access your funds. Although, you don't need to save this raw, unencrypted private key in this format. You can saving the fancy versions of it (e.g. the Keystore File / Mnemonic Phrase)."),Object(i.b)("li",{parentName:"ul"},"Example: ",Object(i.b)("inlineCode",{parentName:"li"},"afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890"))),Object(i.b)("h3",{id:"keystore-file"},"Keystore File"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Encrypted version of your private key in JSON format (though it does not have a JSON extension)"),Object(i.b)("li",{parentName:"ul"},"A fancy version of your private key that is protected by a password of your choosing."),Object(i.b)("li",{parentName:"ul"},"When combined with the password, it has the private key."),Object(i.b)("li",{parentName:"ul"},"Safer than a private key because you need the password."),Object(i.b)("li",{parentName:"ul"},"File name usually is in the format ",Object(i.b)("inlineCode",{parentName:"li"},"UTC")," + ",Object(i.b)("inlineCode",{parentName:"li"},"--")," + ",Object(i.b)("inlineCode",{parentName:"li"},"DATE_CREATED")," + ",Object(i.b)("inlineCode",{parentName:"li"},"--")," + ",Object(i.b)("inlineCode",{parentName:"li"},"YOUR_ADDRESS_WITHOUT_THE_OX")),Object(i.b)("li",{parentName:"ul"},"Example of File Name: ",Object(i.b)("inlineCode",{parentName:"li"},"UTC--2017-07-02T20-33-09.177Z--06a85356dcb5b307096726fb86a78c59d38e08ee")),Object(i.b)("li",{parentName:"ul"},"Example of Contents: ",Object(i.b)("inlineCode",{parentName:"li"},'{\'{"version":3,"id":"aa811d53-fe9a-44a2-bd1c-e737007b5591","address":"06a85356dcb5b307096726fb86a78c59d38e08ee","Crypto":{"ciphertext":"f5a7cc8d4b8cf93510b0d0d057f3a52ac79fd48e619e0638c4ffd978ca180248","cipherparams":{"iv":"975ab00192e2dd74170e91ca59c0b0bd"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"0210f0d0b99e440dfbceb36373304638bac093a367ee7da6411cd165f7aa907a","n":1024,"r":8,"p":1},"mac":"8197a747a3855a10546a2ff939c36470daed78e393b670efa0c12fe3b23dd7e3"}}\'}\n ')),Object(i.b)("li",{parentName:"ul"},"(pw: ",Object(i.b)("inlineCode",{parentName:"li"},"mypassword"),")")),Object(i.b)("h3",{id:"mnemonic-phrase--seed-phrase--seed-words"},"Mnemonic Phrase / Seed Phrase / Seed Words"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Another fancy version of your private key, that is actually used to derive multiple private keys."),Object(i.b)("li",{parentName:"ul"},"A (typically) 12 or 24 word phrase that allows you to access infinite number of accounts."),Object(i.b)("li",{parentName:"ul"},"Used by Ledger, TREZOR, ConfluxPortal, Jaxx, and others."),Object(i.b)("li",{parentName:"ul"},"Originates from ",Object(i.b)("a",{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank"},"BIP 39 Spec"),"."),Object(i.b)("li",{parentName:"ul"},'The accounts you can access with this phrase are determined by the "path".'),Object(i.b)("li",{parentName:"ul"},"Example 12-words: ",Object(i.b)("inlineCode",{parentName:"li"},"brain surround have swap horror body response double fire dumb bring hazard")),Object(i.b)("li",{parentName:"ul"},"Example 24-words: ",Object(i.b)("inlineCode",{parentName:"li"},"card enrich gesture connect kick topple fan body blind engine lemon swarm venue praise addict agent unaware equal bean sing govern income link leg"))),Object(i.b)("h3",{id:"hardware-wallet"},"Hardware Wallet:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Typically, a single-purpose device that "holds" your private key(s), ensuring your private keys are safe.'),Object(i.b)("li",{parentName:"ul"},"Typically, they use a 24-word phrase. This phrase you should write down (not on your computer) and store separately from your hardware wallet."),Object(i.b)("li",{parentName:"ul"},"If you lose your hardware wallet, you can still gain access to your accounts & funds via the word-phrase you wrote down."),Object(i.b)("li",{parentName:"ul"},"Never type the word-phrase on your computer. It defeats the purpose of your hardware wallet."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://kb.myetherwallet.com/hardware-wallets/",target:"_blank"}," See here for more information about Hardware Wallets"))),Object(i.b)("h3",{id:"identicon--addressidenticon--addressicon"},"Identicon / AddressIdenticon / AddressIcon:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The colorful blob of colors that corresponds to your address."),Object(i.b)("li",{parentName:"ul"},"It is an easy way to see if your address is correct."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"http://i.imgur.com/lHUrIiZ.jpg",target:""}," Example 1 ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"http://i.imgur.com/FvyLewS.jpg",target:""}," Example 2 ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",null,"Note: the above addresses are a single character different but have remarkably different icons & colors. Magic!"))),Object(i.b)("h3",{id:"hexadecimal"},"Hexadecimal"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Used all over Conflux for a variety of things, a hexadecimal string is comprised of the numbers ",Object(i.b)("inlineCode",{parentName:"li"},"0 1 2 3 4 5 6 7 8 9")," and ",Object(i.b)("inlineCode",{parentName:"li"},"A B C D E F"))),Object(i.b)("h3",{id:"seed"},"Seed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The input given to derive a private key. This should always be generated in a truly random way, not something you make up with your measly human brain."),Object(i.b)("li",{parentName:"ul"},"If you chose the seed, it is known as a ",Object(i.b)("inlineCode",{parentName:"li"},"brain wallet"))),Object(i.b)("h3",{id:"brain-wallet"},"Brain Wallet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An account generated from a seed or password or passphrase of your choosing."),Object(i.b)("li",{parentName:"ul"},"Humans are not capable of generating enough entropy and therefore the wallets derived from these phrases are insecure."),Object(i.b)("li",{parentName:"ul"},"Brain wallets can be brute forced by super fast computers."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://www.reddit.com/r/metamask/comments/45y8m7/brain_wallets_are_now_generally_shunned_by/",target:"_blank"}," Brain wallet are insecure. ")),Object(i.b)("li",{parentName:"ul"},"Don't use brain wallets.")),Object(i.b)("h3",{id:"entropy"},"Entropy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Also known as "randomness".'),Object(i.b)("li",{parentName:"ul"},"The more random something is, the more entropy it has, and the more secure it is."),Object(i.b)("li",{parentName:"ul"},'Usually defined in "bits of entropy" or the number of years it would take to brute-force a ',Object(i.b)("strong",{parentName:"li"},"_","_","_","_")," (e.g. private key) derived with that much entropy."),Object(i.b)("li",{parentName:"ul"},"Conflux private keys are 256-bit keys"),Object(i.b)("li",{parentName:"ul"},"24-Word mnemonic phrases are also 256 bits of entropy. 2048 words in the dictionary. 11 bits of entropy (the words). ",Object(i.b)("inlineCode",{parentName:"li"},"11 * 24 = 264"),". The last word is a checksum.")),Object(i.b)("h3",{id:"derive--derivation"},"Derive / Derivation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To derive something is to obtain it from an original source."),Object(i.b)("li",{parentName:"ul"},"For example, if we were to derive a Keystore from a private key and a password, this means that the Keystore is made from these two sources."),Object(i.b)("li",{parentName:"ul"},"The Keystore is a product of the two, thus it is derived from them.")),Object(i.b)("h3",{id:"encryption"},"Encryption"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Encryption is the act of taking a string of letters/numbers, like your private key, and turning them into another string of letters/numbers through a method of private translation."),Object(i.b)("li",{parentName:"ul"},"There are various different encryption methods."),Object(i.b)("li",{parentName:"ul"},"Encryption offers protection against those trying to steal your information!")),Object(i.b)("h3",{id:"encrypted-vs-unencrypted-keys"},"Encrypted vs Unencrypted Keys"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An unencrypted private key is 64 characters long, and it is used to unlock or restore wallets."),Object(i.b)("li",{parentName:"ul"},"An encrypted key is also 64 letters long and is a regular private key that has gone through the process of encryption, as defined above."),Object(i.b)("li",{parentName:"ul"},"For example, if the world \u2018Apple\u2019 was your shortened private key, then it was encrypted three letters down the alphabet, your new shortened encrypted key would be \u2018Dssoh\u2019. Since you know the way to encrypt this key, you could derive the original private key from it by reversing the method of encryption."),Object(i.b)("li",{parentName:"ul"},"Usually encrypted private keys are kept within the extension or device they are encrypted by, and they remain out of sight from the user. This is meant to add another layer of security to keep a user\u2019s wallet information safe.")),Object(i.b)("h3",{id:"decentralize--decentralization"},"Decentralize / Decentralization"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The process of transferring authority of a single entity (ex. Government or large corporation) to multiple smaller entities.")),Object(i.b)("h3",{id:"trustless"},"Trustless"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A distributed trustless consensus which the blockchain is responsible for. Since everyone has a copy of the ledger of all transactions ever executed, there is no need for a third-party. You can verify the transactions yourself, however the Conflux blockchain and Bitcoin blockchain were created to ensure rules and agreements between all parties are executed when all conditions are met.")),Object(i.b)("h3",{id:"smart-contracts"},"Smart Contracts"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A piece of code (or program) that is stored on the blockchain network. Conditions of the contract are predefined by the users, if all conditions are met, certain actions are executed by the contract (program).")),Object(i.b)("h3",{id:"blockchain"},"Blockchain"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A decentralized publicly owned ledger.")),Object(i.b)("p",null,"All feedback, rewrites, clarification, typo-fixing, and requests for additions are more than welcome. ?"))}d.isMDXComponent=!0},214:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(a),p=r,h=b["".concat(o,".").concat(p)]||b[p]||u[p]||i;return a?n.a.createElement(h,l(l({ref:t},s),{},{components:a})):n.a.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);