(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{198:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(0),s=t.n(o),c=t(281),i=t.n(c),l=t(36),u=(t(242),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props,n=e.prefix,t=e.tags;return t?s.a.createElement("span",null,n,t.map(function(e,n,t){return s.a.createElement("span",{key:e},s.a.createElement(l.Link,{key:e,to:"/tags/"+i.a.kebabCase(e)},e),n!==t.length-1?", ":"")})):null},n}(o.Component));n.a=u},199:function(e,n,t){"use strict";t(181);var r=t(5),a=t.n(r),o=t(0),s=t.n(o),c=t(36),i=(t(243),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props,n=e.name,t=e.url;return n&&t?s.a.createElement(c.Link,{to:t},n):null},n}(s.a.Component));n.a=i},200:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(0),s=t.n(o),c=(t(244),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props,n=e.children,t=e.className;return s.a.createElement("article",{className:t},n)},n}(s.a.Component));n.a=c},201:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(0),s=t.n(o),c=(t(245),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props.children;return s.a.createElement("header",{className:"post-header"},e)},n}(s.a.Component));n.a=c},202:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(0),s=t.n(o),c=t(283),i=t.n(c),l=(t(246),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props.date;return s.a.createElement("time",{className:"post-date",dateTime:i()(new Date(e)).format("YYYY-MM-DD")},i()(new Date(e)).format("DD MMMM YYYY"))},n}(s.a.Component));n.a=l},203:function(e,n,t){"use strict";t(83);var r=function(e){return function(n){return n.uid===e}},a=function(e){return e.map(function(e){return e.node})},o=function(){function e(){}return e.hasAuthor=function(e,n){var t=a(e);return Boolean(t.find(r(n)))},e.getAuthor=function(e,n,t){var o=a(e);return this.hasAuthor(e,n)?o.find(r(n)):o.find(r(t))},e}();n.a=o},226:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(0),s=t.n(o),c=t(182),i=t.n(c),l=(t(307),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props,n=e.children,t=e.isOpen,r=e.className,a=i()(r,t?"nav-opened":"nav-closed");return s.a.createElement("div",{className:a},n)},n}(s.a.Component));n.a=l},227:function(e,n,t){"use strict";t.d(n,"a",function(){return i});t(84);var r,a=t(5),o=t.n(a),s=t(0),c=t.n(s),i=(t(308),function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).handleClick=function(){var e=document.querySelector(".c-overlay-nav"),n=document.querySelector(".c-overlay-content"),t=document.querySelector(".c-primary-nav"),a=document.querySelector(".c-nav-trigger");a.hasClass("close-nav")?(a.removeClass("close-nav"),r(n.querySelector("span"),{translateZ:0,scaleX:1,scaleY:1},500,"easeInCubic",function(){t.removeClass("fade-in"),r(e.querySelector("span"),{translateZ:0,scaleX:0,scaleY:0},0);n.addClass("is-hidden"),["transitionend","webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd"].forEach(function(e){n.addEventListener(e,function(){r(n.querySelector("span"),{translateZ:0,scaleX:0,scaleY:0},0,function(){n.removeClass("is-hidden")})})}),document.querySelector("html").hasClass("no-csstransitions")&&r(n.querySelector("span"),{translateZ:0,scaleX:0,scaleY:0},0,function(){n.removeClass("is-hidden")})})):(a.addClass("close-nav"),r(e.querySelector("span"),{translateZ:0,scaleX:1,scaleY:1},500,"easeInCubic",function(){t.addClass("fade-in")}))},n}o()(n,e);var a=n.prototype;return a.componentDidMount=function(){if(window){var e=function(){var e=2*Math.sqrt(Math.pow(window.innerHeight,2)+Math.pow(window.innerWidth,2));r(o.querySelector("span"),{scaleX:0,scaleY:0,translateZ:0},50),r(o.querySelector("span"),{height:e+"px",width:e+"px",top:-e/2+"px",left:-e/2+"px"},0),r(s.querySelector("span"),{scaleX:0,scaleY:0,translateZ:0},50),r(s.querySelector("span"),{height:e+"px",width:e+"px",top:-e/2+"px",left:-e/2+"px"},0)};r=t(309),t(310);var n=document.querySelectorAll(".js-nav-link"),a=document.querySelector(".js-nav-trigger"),o=document.querySelector(".c-overlay-nav"),s=document.querySelector(".c-overlay-content");e(),window.addEventListener("resize",function(){window.requestAnimationFrame(e)}),n.forEach(function(e){return e.addEventListener("click",function(){return a.click()})})}},a.render=function(){return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("ul",{className:"c-primary-nav"},c.a.createElement("li",null,c.a.createElement("a",{className:"js-nav-link",href:"https://this.rivki.id/"},"Home")),c.a.createElement("li",null,c.a.createElement("a",{className:"js-nav-link",href:"https://this.rivki.id/about"},"About page")),c.a.createElement("li",null,c.a.createElement("a",{className:"js-nav-link",href:"/"},"Blog")))),c.a.createElement("div",{className:"c-overlay-nav"},c.a.createElement("span",null)),c.a.createElement("div",{className:"c-overlay-content"},c.a.createElement("span",null)),c.a.createElement("a",{href:"#0",className:"c-nav-trigger js-nav-trigger",onClick:this.handleClick},"Menu",c.a.createElement("span",{className:"c-icon"})))},n}(c.a.Component))},228:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(0),s=t.n(o),c=(t(311),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"site-wrapper"},e)},n}(s.a.Component));n.a=c},229:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(0),s=t.n(o),c=(t(312),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props.promoteGatsby,n=this.props.copyright,t=n.label,r=n.url,a=n.year;return s.a.createElement("footer",{className:"site-footer clearfix"},s.a.createElement("section",{className:"copyright"},s.a.createElement("a",{href:r||"/"},t)," ","©"," ",a||(new Date).getFullYear()),s.a.createElement(function(e){return e.show?s.a.createElement("section",{className:"poweredby"},"Proudly published with"," ",s.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e}))},n}(o.Component));n.a=c},230:function(e,n,t){"use strict";var r=t(5),a=t.n(r),o=t(0),s=t.n(o),c=t(182),i=t.n(c),l=(t(313),function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props,n=e.children,t=e.cover,r=i()("main-header",this.props.className,{"no-cover":!t});return s.a.createElement("header",{className:r,style:t?{backgroundImage:'url("'+t+'")'}:null},n)},n}(s.a.Component));n.a=l},242:function(e,n,t){},243:function(e,n,t){},244:function(e,n,t){},245:function(e,n,t){},246:function(e,n,t){},307:function(e,n,t){},308:function(e,n,t){},310:function(e,n,t){t(21),t(85),HTMLElement.prototype.hasClass=function(e){var n,t=this.className.split(" ");for(n=0;n<t.length;n++)if(t[n]===e)return!0;return!1},HTMLElement.prototype.addClass=function(e){this.hasClass(e)||(this.className=(this.className+" "+e).trim())},HTMLElement.prototype.removeClass=function(e){var n,t="",r=this.className.replace(/\s{2,}/g," ").split(" ");for(n=0;n<r.length;n++)r[n]!==e&&(t+=r[n]+" ");this.className=t.trim()}},311:function(e,n,t){},312:function(e,n,t){},313:function(e,n,t){}}]);
//# sourceMappingURL=1-45ddc25b8dd60b6d113d.js.map