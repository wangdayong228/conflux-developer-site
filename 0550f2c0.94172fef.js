(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),c=n(9),o=(n(0),n(214)),a={id:"accessing_accounts",title:"Accessing Accounts",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Accessing_Accounts.md"},s={id:"conflux-portal/docs/en/portal/Main_Concepts/accessing_accounts",title:"Accessing Accounts",description:"User accounts are used in a variety of contexts in Conflux, they serve as neat",source:"@site/docs/conflux-portal/docs/en/portal/Main_Concepts/Accessing_Accounts.md",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/accessing_accounts",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Main_Concepts/Accessing_Accounts.md",lastUpdatedAt:1609812162,sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/getting_started"},next:{title:"Sending Transactions",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/sending_transactions"}},i=[],u={rightToc:i};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"User accounts are used in a variety of contexts in Conflux, they serve as neat\nidentifiers, but no use is as important as calling ",Object(o.b)("em",{parentName:"p"},"wallet methods"),". These\nmethods involve a signature or transaction approval. All of those methods\nrequire the sending account as a function parameter:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cfx_sendTransaction"))),Object(o.b)("p",null,"Once you've ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/conflux-portal/docs/en/portal/Main_Concepts/getting_started"}),"connected to a user"),", you can always re-check\nthe current account by checking ",Object(o.b)("inlineCode",{parentName:"p"},"conflux.selectedAddress"),". "),Object(o.b)("p",null,"If you'd like to be notified when the address changes, we have an event you can\nsubscribe to: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"conflux.on('accountsChanged', function (accounts) {\n  // Time to reload your interface with accounts[0]!\n})\n")),Object(o.b)("p",null,"If the first account in the returned array isn't the account you expected, you\nshould notify the user! In the future, the accounts array may contain more than\none account. However, the first account in the array will continue to be\nconsidered as the user's \"selected\" account. "))}l.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return n?c.a.createElement(b,s(s({ref:t},u),{},{components:n})):c.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);