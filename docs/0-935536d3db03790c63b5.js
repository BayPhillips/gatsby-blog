(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(e,a,t){"use strict";t(67);var n=t(57),r=t(5);a.__esModule=!0,a.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},a.PageRenderer=a.StaticQuery=a.StaticQueryContext=void 0;var i=r(t(1)),o=r(t(0)),u=n(t(285));a.Link=u.default,a.withPrefix=u.withPrefix,a.push=u.push,a.replace=u.replace,a.navigateTo=u.navigateTo;var l=r(t(274)),s=r(t(59)),c=r(t(273)),m=function(e){var a=e.location,t=s.default.getResourcesForPathname(a.pathname);return i.default.createElement(c.default,{pages:l.default,location:a,pageResources:t})};a.PageRenderer=m,m.propTypes={location:o.default.shape({pathname:o.default.string.isRequired}).isRequired};var d=i.default.createContext({});a.StaticQueryContext=d;var p=function(e){return i.default.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.default.createElement("div",null,"Loading (StaticQuery)")})};a.StaticQuery=p,p.propTypes={data:o.default.object,query:o.default.string.isRequired,render:o.default.func,children:o.default.func}},222:function(e,a,t){"use strict";var n=t(270),r=t(1),i=t.n(r),o=t(0),u=t.n(o),l=t(269),s=t.n(l),c=(t(258),t(33)),m=t.n(c),d=t(221),p=function(e){function a(){return e.apply(this,arguments)||this}m()(a,e);var t=a.prototype;return t.render=function(){return this.props.menu.node.items,i.a.createElement("div",{className:"uk-container uk-margin"},i.a.createElement("nav",{className:"uk-navbar-container uk-navbar-transparent uk-hidden@s","data-uk-navbar":!0},i.a.createElement("div",{className:"uk-navbar-left uk-dark"},i.a.createElement("button",{className:"uk-navbar-toggle uk-button","data-uk-navbar-toggle-icon":!0,"data-uk-toggle":"target: #mobile-menu",href:"#"},"Menu")),i.a.createElement("div",{className:"uk-navbar-center"},i.a.createElement("a",{href:"/",className:"uk-navbar-item uk-logo"},"Bay Phillips"))),i.a.createElement("nav",{className:"uk-navbar-container uk-navbar-transparent uk-visible@s","data-uk-navbar":!0},i.a.createElement("div",{className:"uk-navbar-left"},i.a.createElement(d.Link,{to:"/",className:"uk-navbar-item uk-logo"},"Bay Phillips"),i.a.createElement("ul",{className:"uk-navbar-nav"},this.renderNavigationMenuItems())),i.a.createElement("div",{className:"uk-navbar-right"},this.renderSocialMediaLinks())),i.a.createElement("div",{id:"mobile-menu","data-uk-offcanvas":"overlay: true"},i.a.createElement("div",{className:"uk-offcanvas-bar"},i.a.createElement("button",{className:"uk-offcanvas-close",type:"button","data-uk-close":!0}),i.a.createElement("ul",{className:"uk-nav uk-nav-primary"},this.renderNavigationMenuItems()),this.renderSocialMediaLinks())),i.a.createElement("hr",{className:"uk-margin-remove"}))},t.renderNavigationMenuItems=function(){return this.props.menu.node.items.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d.Link,{to:"/"+e.page.slug},e.name))})},t.renderSocialMediaLinks=function(){return i.a.createElement("ul",{className:"uk-iconnav"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.github.com/bayphillips",target:"_blank",className:"uk-icon-link","data-uk-icon":"icon: github"})),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.facebook.com/bay.phillips",target:"_blank",className:"uk-icon-link","data-uk-icon":"icon: facebook"})),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.twitter.com/bayphillips",target:"_blank",className:"uk-icon-link","data-uk-icon":"icon: twitter"})),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.instagram.com/bayphillips",target:"_blank",className:"uk-icon-link","data-uk-icon":"icon: instagram"})))},a}(i.a.Component),f=function(e){function a(){return e.apply(this,arguments)||this}return m()(a,e),a.prototype.render=function(){return i.a.createElement("footer",{className:"uk-container",key:"mainFooter"})},a}(i.a.Component),g=t(257),h=t.n(g),k=t(253),v=t.n(k);t(252),t(250),t(248),"function"==typeof h.a.use&&h.a.use(v.a);var b=function(e){var a=e.children;return i.a.createElement(d.StaticQuery,{query:"1822354247",render:function(e){return i.a.createElement("div",null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),i.a.createElement(p,{menu:e.menu.edges[0]}),i.a.createElement("div",{className:"uk-container"},a),i.a.createElement(f,null))},data:n})};b.propTypes={children:u.a.func},a.a=b},248:function(e,a,t){},270:function(e){e.exports={data:{site:{siteMetadata:{title:"Bay Phillips | Software Engineer in NYC",description:"Personal blog for Bay Phillips, a software engineer based out of NYC building native applications.",keywords:"ios, swift, fullstack, engineer, engineering manager, nyc, new york city, cooking, Plated"}},menu:{edges:[{node:{id:"d6647d0f-86bd-5e71-9580-a3bedd0c8862",name:"Main menu",items:[{id:"dbe2e08e-0980-53eb-bea3-3aef69c5a7e2",name:"Blog",page:{id:"ac6baf54-1e24-5ebf-aa5e-5871382557be",slug:"blog"}},{id:"92fc5b24-5a5a-522d-a28a-e0d6c0248d8d",name:"About me",page:{id:"50ea8df4-af58-59ac-b0f8-3fb12a89e274",slug:"about"}}]}}]}}}},272:function(e,a,t){"use strict";var n=t(5);a.__esModule=!0,a.default=function(){return null},a.getIsInitialized=a.getPageQueryData=a.getStaticQueryData=void 0,n(t(52));var r={},i={};a.getStaticQueryData=function(){return r},a.getPageQueryData=function(){return i},a.getIsInitialized=function(){return!1}},273:function(e,a,t){"use strict";var n=t(57),r=t(5);a.__esModule=!0,a.default=void 0;var i=r(t(52)),o=r(t(223)),u=r(t(33)),l=r(t(53)),s=r(t(60)),c=r(t(1)),m=r(t(109)),d=t(221),p=n(t(272)),f=function(e){var a,t;return null===(a=e.pageResources)||void 0===a?void 0:null===(t=a.page)||void 0===t?void 0:t.path},g=function(e){function a(a){var t;return t=e.call(this,a)||this,(0,s.default)((0,l.default)((0,l.default)(t)),"handleMittEvent",function(e,a){}),t.state={staticQueryData:(0,p.getStaticQueryData)(),pageQueryData:(0,p.getPageQueryData)(),path:null},t}(0,u.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){},t.componentWillUnmount=function(){},t.componentDidUpdate=function(){var e=this.state.path,a=f(this.props);e!==a&&(this.unregisterPath(e),this.registerPath(a))},t.registerPath=function(e){},t.unregisterPath=function(e){},t.render=function(){var e=this.state.pageQueryData[f(this.props)],a=this.props,t=(a.pages,(0,o.default)(a,["pages"]));return e?c.default.createElement(d.StaticQueryContext.Provider,{value:this.state.staticQueryData},c.default.createElement(m.default,(0,i.default)({},t,e))):c.default.createElement("div",null)},a}(c.default.Component);a.default=g},274:function(e){e.exports=[{componentChunkName:"component---src-templates-blog-post-listing-js",jsonName:"blog-c06",path:"/blog"},{componentChunkName:"component---src-templates-contentful-page-js",jsonName:"about-771",path:"/about"},{componentChunkName:"component---src-templates-contentful-page-js",jsonName:"reach-out-a80",path:"/reach-out"},{componentChunkName:"component---src-templates-blog-post-js",jsonName:"blog-the-move-to-gatsbyjs-604",path:"/blog/the-move-to-gatsbyjs/"},{componentChunkName:"component---src-pages-404-js",jsonName:"404-22d",path:"/404/"},{componentChunkName:"component---src-pages-index-js",jsonName:"index",path:"/"},{componentChunkName:"component---src-pages-404-js",jsonName:"404-html-516",path:"/404.html"}]}}]);
//# sourceMappingURL=0-935536d3db03790c63b5.js.map