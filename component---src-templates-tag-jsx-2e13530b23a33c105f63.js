(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return b});var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(56),c=n.n(i),p=n(197),l=n(17),u=n.n(l),m=n(226),f=n(227),d=n(228),h=n(230),g=n(215),E=n(217),v=n(248),y=n(250),N=n(229),x=n(277),C=n(81),O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.tag,n=e.nodes,a=e.page,r=e.pages,o=e.total,i=e.limit,l=e.prev,O=e.next,b=this.props.data.authors.edges;return s.a.createElement(C.default,{location:this.props.location},s.a.createElement(m.a,{isOpen:this.state.menuOpen},s.a.createElement(c.a,{title:'Posts tagged as "'+t+'" | '+u.a.siteTitle}),s.a.createElement(d.a,null,s.a.createElement("div",{className:"tag-template"},s.a.createElement(h.a,{className:"tag-head",cover:t.featureImage},s.a.createElement(g.a,null,s.a.createElement(E.a,{logo:u.a.siteLogo,title:u.a.siteTitle}),u.a.siteNavigation?s.a.createElement(f.a,null):""),s.a.createElement("div",{className:"vertical"},s.a.createElement("div",{className:"main-header-content inner"},s.a.createElement(v.a,{text:t}),s.a.createElement(y.a,{text:t.description||"A "+o+"-post collection"})))),s.a.createElement(x.a,{page:a,pages:r,total:o,limit:i,prev:l,next:O},s.a.createElement(p.a,{postEdges:n,postAuthors:b}))),s.a.createElement(N.a,{copyright:u.a.copyright,promoteGatsby:u.a.promoteGatsby}))))},t}(s.a.Component),b="333490751";t.default=O},193:function(e,t,n){},194:function(e,t,n){},197:function(e,t,n){"use strict";n(181);var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(36),c=(n(193),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,n=e.name;return t&&n?s.a.createElement("img",{className:"author-thumb",src:t,alt:n,"data-pin-nopin":"true"}):null},t}(s.a.Component)),p=n(198),l=n(17),u=n.n(l),m=n(199),f=n(200),d=n(201),h=n(202),g=n(203),E=(n(194),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=(e=this.props.postEdges,t=this.props.postAuthors,e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:g.a.getAuthor(t,e.node.frontmatter.author,u.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}}));return s.a.createElement("div",null,n.map(function(e){var t=e.title,n=e.path,a=e.excerpt,r=e.author,o=e.tags,l=e.date,u=e.timeToRead,g=e.post_class?e.post_class:"post";return s.a.createElement(f.a,{className:g,key:t},s.a.createElement(d.a,null,s.a.createElement("h2",{className:"post-title"},s.a.createElement(i.Link,{to:n},t))),s.a.createElement("section",{className:"post-excerpt"},s.a.createElement("p",null,a," ",s.a.createElement(i.Link,{className:"read-more",to:n},"»"))),s.a.createElement("footer",{className:"post-meta"},s.a.createElement(c,{avatar:r.image,name:r.name}),s.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),s.a.createElement(p.a,{prefix:" on ",tags:o}),s.a.createElement("span",{style:{paddingLeft:6,paddingRight:6,fontSize:13}},"•"),s.a.createElement(h.a,{date:l}),s.a.createElement("span",{style:{paddingLeft:6,paddingRight:6,fontSize:13}},"•"),s.a.createElement("span",{style:{fontSize:13}},u+" min read")))}))},t}(s.a.Component));t.a=E},213:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(182),c=n.n(i),p=(n(214),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=c()("content",this.props.className);return s.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(s.a.Component));t.a=p},214:function(e,t,n){},215:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(182),c=n.n(i),p=(n(216),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return s.a.createElement("nav",{className:a},t)},t}(s.a.Component));t.a=p},216:function(e,t,n){},217:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(36),c=(n(218),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?s.a.createElement(i.Link,{className:"blog-logo",to:n||"/"},s.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=c},218:function(e,t,n){},248:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(249),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?s.a.createElement("h1",{className:"page-title"},e):null},t}(s.a.Component));t.a=i},249:function(e,t,n){},250:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=(n(251),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?s.a.createElement("h2",{className:"page-description"},e):null},t}(s.a.Component));t.a=i},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},277:function(e,t,n){"use strict";var a=n(5),r=n.n(a),o=n(0),s=n.n(o),i=n(213),c=(n(18),n(36)),p=(n(252),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=Object.assign({},this.props);return delete t.style,delete t.className,delete t.text,delete t.url,s.a.createElement(c.Link,Object.assign({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(s.a.Component)),l=(n(253),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return s.a.createElement("nav",{className:"pagination"},s.a.createElement(p,{className:"newer-posts",url:a,text:"← Newer Posts"}),s.a.createElement("span",{className:"page-number"},"Page"," ",t," ","of"," ",n),s.a.createElement(p,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(s.a.Component)),u=(n(254),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next,o=e.children,c="";return t>1&&(c+=" paged"),s.a.createElement(i.a,{className:c},s.a.createElement("div",{className:"extra-pagination inner"},s.a.createElement(l,{page:t,pages:n,prev:a,next:r})),o,s.a.createElement(l,{page:t,pages:n,prev:a,next:r}))},t}(s.a.Component));t.a=u}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-2e13530b23a33c105f63.js.map