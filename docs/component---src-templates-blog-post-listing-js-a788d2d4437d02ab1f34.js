(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{219:function(e,t,a){"use strict";a.r(t),a(234);var n=a(1),l=a.n(n),i=a(221),r=a(224),o=a.n(r),c=a(222);t.default=function(e){e.data;var t=e.pageContext,a=e.location,n=t.group,r=t.index,s=(t.first,t.last,t.pageCount);console.log("What is index "+r+" and what is pageCount "+s);var u=r==s?null:"/blog/"+(r+1).toString(),g=r-1,m=g>=1?1==g?"/blog":"/blog/"+g.toString():null;return l.a.createElement(c.a,{location:a},l.a.createElement("section",{className:"uk-section"},n.map(function(e){var t=e.node;return l.a.createElement("article",{key:t.id,className:"uk-article"},l.a.createElement("h1",{className:"uk-article-title"},l.a.createElement(i.Link,{to:"/blog/"+t.postSlug,className:"uk-link-heading"},t.postTitle)),l.a.createElement("div",{className:"uk-article-meta"},o()(t.datePosted).fromNow()),l.a.createElement("div",{className:"uk-margin",dangerouslySetInnerHTML:{__html:t.contentPreview.childMarkdownRemark.html}}),l.a.createElement("hr",{className:"uk-divider-small"}))}),l.a.createElement("div",{"data-uk-grid":"",className:"uk-margin"},m?l.a.createElement(i.Link,{to:m},"< Newer Posts"):null,u?l.a.createElement(i.Link,{to:u,className:"uk-width-expand uk-text-right"},"Older Posts >"):null)))}},227:function(e,t,a){"use strict";var n=a(106);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},233:function(e,t,a){a(34)&&"g"!=/./g.flags&&a(107).f(RegExp.prototype,"flags",{configurable:!0,get:a(227)})},234:function(e,t,a){"use strict";a(233);var n=a(106),l=a(227),i=a(34),r=/./.toString,o=function(e){a(67)(RegExp.prototype,"toString",e,!0)};a(18)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?o(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?l.call(e):void 0)}):"toString"!=r.name&&o(function(){return r.call(this)})}}]);
//# sourceMappingURL=component---src-templates-blog-post-listing-js-a788d2d4437d02ab1f34.js.map