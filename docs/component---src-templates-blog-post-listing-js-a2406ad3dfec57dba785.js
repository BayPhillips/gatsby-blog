(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{220:function(e,t,a){"use strict";a.r(t),a(274);var n=a(1),o=a.n(n),r=a(221),i=a(223),l=a.n(i),s=a(222);t.default=function(e){e.data;var t=e.pageContext,a=e.location,n=t.group,i=t.index,c=(t.first,t.last,i==t.pageCount?null:"/blog/"+(i+1).toString()),u=i-1,g=u>=1?1==u?"/blog":"/blog/"+u.toString():null,m=i>1?"Blog | Page "+i:"Blog";return o.a.createElement(s.a,{location:a,title:m,description:"Various blog posts regarding programming, technology and random musings of someone who's not that interesting..."},o.a.createElement("section",{className:"uk-section"},n.map(function(e){var t=e.node;return o.a.createElement("article",{key:t.id,className:"uk-article"},o.a.createElement("h1",{className:"uk-article-title"},o.a.createElement(r.Link,{to:"/blog/"+t.postSlug,className:"uk-link-heading"},t.postTitle)),o.a.createElement("div",{className:"uk-article-meta"},l()(t.datePosted).fromNow()),o.a.createElement("div",{className:"uk-margin",dangerouslySetInnerHTML:{__html:t.contentPreview.childMarkdownRemark.html}}),o.a.createElement("hr",{className:"uk-divider-small"}))}),o.a.createElement("div",{"data-uk-grid":"",className:"uk-margin"},g?o.a.createElement(r.Link,{to:g},"< Newer Posts"):null,c?o.a.createElement(r.Link,{to:c,className:"uk-width-expand uk-text-right"},"Older Posts >"):null)))}},231:function(e,t,a){"use strict";var n=a(106);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},273:function(e,t,a){a(34)&&"g"!=/./g.flags&&a(107).f(RegExp.prototype,"flags",{configurable:!0,get:a(231)})},274:function(e,t,a){"use strict";a(273);var n=a(106),o=a(231),r=a(34),i=/./.toString,l=function(e){a(67)(RegExp.prototype,"toString",e,!0)};a(18)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?l(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?o.call(e):void 0)}):"toString"!=i.name&&l(function(){return i.call(this)})}}]);
//# sourceMappingURL=component---src-templates-blog-post-listing-js-a2406ad3dfec57dba785.js.map