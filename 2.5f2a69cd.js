(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{224:function(e,t,a){"use strict";var n=a(0),r=a(231);t.a=function(){return Object(n.useContext)(r.a)}},225:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(226),o=a(220),l=a(216),i=a(218),s="",u="dark",d=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),o(s)}),[]),d=Object(n.useCallback)((function(){c(u),o(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?u:s)}))}),[]),{isDarkTheme:r===u,setLightTheme:i,setDarkTheme:d}},m=a(231);var f=function(e){var t=d(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(m.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},h=(a(227),a(221),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}}),v=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var b=function(e){var t=h(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(v.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},p=a(232),g=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=(t=void 0===t?{}:t).id,r=Object(n.useState)(!0),c=r[0],o=r[1];return Object(n.useEffect)((function(){if(a){var e=localStorage.getItem("docusaurus.announcement.id"),t=a!==e;localStorage.setItem("docusaurus.announcement.id",a),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&o(!1)}}),[]),{isAnnouncementBarClosed:c,closeAnnouncementBar:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),o(!0)}}};var k=function(e){var t=g(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar;return r.a.createElement(p.a.Provider,{value:{isAnnouncementBarClosed:a,closeAnnouncementBar:n}},e.children)},E=a(233),_=a(128),O=a.n(_);var y=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,n=a.content,c=a.backgroundColor,o=a.textColor,i=Object(E.a)(),s=i.isAnnouncementBarClosed,u=i.closeAnnouncementBar;return!n||s?null:r.a.createElement("div",{className:O.a.announcementBar,style:{backgroundColor:c,color:o},role:"banner"},r.a.createElement("div",{className:O.a.announcementBarContent,dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("button",{type:"button",className:O.a.announcementBarClose,onClick:u,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},j=a(2),C=(a(234),a(9)),N=a(217),w=a.n(N),T=a(219),S=function(){return null},B=a(253),x=a.n(B),L=a(129),M=a.n(L),D=function(){return r.a.createElement("span",{className:w()(M.a.toggle,M.a.moon)})},P=function(){return r.a.createElement("span",{className:w()(M.a.toggle,M.a.sun)})},I=function(e){var t=Object(l.a)().isClient;return r.a.createElement(x.a,Object(j.a)({disabled:!t,icons:{checked:r.a.createElement(D,null),unchecked:r.a.createElement(P,null)}},e))},A=a(224),X=a(238);var F=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},R=a(239),H=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],l=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),m=d[0],f=d[1],h=Object(n.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]),v=Object(X.b)(),b=F(v.hash),p=b[0],g=b[1];return Object(R.a)((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<m))){if(o)return l(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-m,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,m]),Object(n.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&l(!0)}),[p]),{navbarRef:h,isNavbarVisible:a}},U=a(240),G=a(241),Y=a(130),V=a.n(Y);function W(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,o=e.label,l=e.activeClassName,s=void 0===l?"navbar__link--active":l,u=e.prependBaseUrlToHref,d=Object(C.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),m=Object(i.a)(n),f=Object(i.a)(t),h=Object(i.a)(c,!0);return r.a.createElement(T.a,Object(j.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:u?h:c}:Object.assign({isNavLink:!0,activeClassName:s,to:m},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(f)}}:null),d),o)}function J(e){var t=e.items,a=e.position,n=e.className,c=Object(C.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),w()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:w()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(W,Object(j.a)({className:o(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(C.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(W,Object(j.a)({activeClassName:"dropdown__link--active",className:o(a,!0)},n)))})))):r.a.createElement(W,Object(j.a)({className:o(n)},c))}function K(e){var t=e.items,a=(e.position,e.className),n=Object(C.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),w()("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(W,Object(j.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=Object(C.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(W,Object(j.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(W,Object(j.a)({className:c(a)},n)))}var q=function(){var e,t,a=Object(l.a)(),c=a.siteConfig.themeConfig,o=c.navbar,i=(o=void 0===o?{}:o).title,s=o.links,u=void 0===s?[]:s,d=o.hideOnScroll,m=void 0!==d&&d,f=c.disableDarkMode,h=void 0!==f&&f,v=a.isClient,b=Object(n.useState)(!1),p=b[0],g=b[1],k=Object(n.useState)(!1),E=k[0],_=k[1],O=Object(A.a)(),y=O.isDarkTheme,C=O.setLightTheme,N=O.setDarkTheme,B=H(m),x=B.navbarRef,L=B.isNavbarVisible,M=Object(G.a)(),D=M.logoLink,P=M.logoLinkProps,X=M.logoImageUrl,F=M.logoAlt;Object(U.a)(p);var R=Object(n.useCallback)((function(){g(!0)}),[g]),Y=Object(n.useCallback)((function(){g(!1)}),[g]),W=Object(n.useCallback)((function(e){return e.target.checked?N():C()}),[C,N]);return r.a.createElement("nav",{ref:x,className:w()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":p},e[V.a.navbarHideable]=m,e[V.a.navbarHidden]=!L,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:R,onKeyDown:R},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(T.a,Object(j.a)({className:"navbar__brand",to:D},P),null!=X&&r.a.createElement("img",{key:v,className:"navbar__logo",src:X,alt:F}),null!=i&&r.a.createElement("strong",{className:w()("navbar__title",(t={},t[V.a.hideLogoText]=E,t))},i)),u.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(J,Object(j.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(J,Object(j.a)({},e,{key:t}))})),!h&&r.a.createElement(I,{className:V.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:W}),r.a.createElement(S,{handleSearchBarToggle:_,isSearchBarExpanded:E}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(T.a,Object(j.a)({className:"navbar__brand",onClick:Y,to:D},P),null!=X&&r.a.createElement("img",{key:v,className:"navbar__logo",src:X,alt:F}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!h&&p&&r.a.createElement(I,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:W})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(K,Object(j.a)({},e,{onClick:Y,key:t}))})))))))},z=a(131),Q=a.n(z);function Z(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(C.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(i.a)(t),s=Object(i.a)(a,!0);return r.a.createElement(T.a,Object(j.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?s:a}:{to:l},o),n)}var $=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var ee=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,o=n.links,s=void 0===o?[]:o,u=n.logo,d=void 0===u?{}:u,m=Object(i.a)(d.src);return a?r.a.createElement("footer",{className:w()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(Z,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:Q.a.footerLogoLink},r.a.createElement($,{alt:d.alt,url:m})):r.a.createElement($,{alt:d.alt,url:m})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(132);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,u=a.themeConfig.image,d=a.url,m=e.children,h=e.title,v=e.noFooter,p=e.description,g=e.image,E=e.keywords,_=e.permalink,O=e.version,j=h?h+" | "+s:s,C=g||u,N=d+Object(i.a)(C);Object(o.a)(C)||(N=C);var w=Object(i.a)(n);return r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(k,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),j&&r.a.createElement("title",null,j),j&&r.a.createElement("meta",{property:"og:title",content:j}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:N}),C&&r.a.createElement("meta",{property:"twitter:image",content:N}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),_&&r.a.createElement("meta",{property:"og:url",content:d+_}),_&&r.a.createElement("link",{rel:"canonical",href:d+_}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(y,null),r.a.createElement(q,null),r.a.createElement("div",{className:"main-wrapper"},m),!v&&r.a.createElement(ee,null))))}},231:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},232:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=r},233:function(e,t,a){"use strict";var n=a(0),r=a(232);t.a=function(){return Object(n.useContext)(r.a)}},234:function(e,t,a){var n=a(6),r=a(246),c=a(23).f,o=a(229).f,l=a(71),i=a(79),s=n.RegExp,u=s,d=s.prototype,m=/a/g,f=/a/g,h=new s(m)!==m;if(a(12)&&(!h||a(18)((function(){return f[a(3)("match")]=!1,s(m)!=m||s(f)==f||"/a/i"!=s(m,"i")})))){s=function(e,t){var a=this instanceof s,n=l(e),c=void 0===t;return!a&&n&&e.constructor===s&&c?e:r(h?new u(n&&!c?e.source:e,t):u((n=e instanceof s)?e.source:e,n&&c?i.call(e):t),a?this:d,s)};for(var v=function(e){e in s||c(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},b=o(u),p=0;b.length>p;)v(b[p++]);d.constructor=s,s.prototype=d,a(13)(n,"RegExp",s)}a(85)("RegExp")},238:function(e,t,a){"use strict";var n=a(38);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e}))},239:function(e,t,a){"use strict";var n=a(0),r=a(57),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r}},240:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},241:function(e,t,a){"use strict";var n=a(216),r=a(224),c=a(218),o=a(220);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.navbar,a=(t=void 0===t?{}:t).logo,l=void 0===a?{}:a,i=Object(r.a)().isDarkTheme,s=Object(c.a)(l.href||"/"),u={};l.target?u={target:l.target}:Object(o.a)(s)||(u={rel:"noopener noreferrer",target:"_blank"});var d=l.srcDark&&i?l.srcDark:l.src;return{logoLink:s,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:l.alt}}},246:function(e,t,a){var n=a(11),r=a(247).set;e.exports=function(e,t,a){var c,o=t.constructor;return o!==a&&"function"==typeof o&&(c=o.prototype)!==a.prototype&&n(c)&&r&&r(e,c),e}},247:function(e,t,a){var n=a(11),r=a(8),c=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(28)(Function.call,a(235).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return c(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:c}},253:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(217)),i=m(a(15)),s=m(a(254)),u=m(a(255)),d=a(256);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},254:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},255:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},256:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);