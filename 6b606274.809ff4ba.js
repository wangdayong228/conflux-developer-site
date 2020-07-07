(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(9),a=(r(0),r(199)),c={},o={id:"conflux-rust/util/hibitset/README",title:"README",description:"hibitset",source:"@site/docs/conflux-rust/util/hibitset/README.md",permalink:"/docs/conflux-rust/util/hibitset/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/util/hibitset/README.md",lastUpdatedAt:1594102532},s=[{value:"Usage",id:"usage",children:[]},{value:"License",id:"license",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"hibitset"},"hibitset"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://travis-ci.org/slide-rs/hibitset"}),Object(a.b)("img",Object(n.a)({parentName:"a"},{src:"https://travis-ci.org/slide-rs/hibitset.svg",alt:"Build Status"}))),"\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://crates.io/crates/hibitset"}),Object(a.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/crates/v/hibitset.svg?maxAge=2592000",alt:"Crates.io"})))),Object(a.b)("p",null,"Provides hierarchical bit sets, which allow very fast iteration on\nsparse data structures."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Just add this to your ",Object(a.b)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[dependencies]\nhibitset = "0.6"\n')),Object(a.b)("h2",{id:"license"},"License"),Object(a.b)("p",null,"This library is licensed under the Apache License 2.0,\nsee ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"LICENSE"}),"the LICENSE file")," for more information."))}u.isMDXComponent=!0},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return r?i.a.createElement(d,o(o({ref:t},l),{},{components:r})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);