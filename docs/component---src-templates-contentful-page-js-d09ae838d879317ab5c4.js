webpackJsonp([0xd60a9d8ce9b8],{106:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var n=a(26),r=i(n),s=a(43),l=i(s),d=a(42),u=i(d),c=a(59),f=i(c),p=a(58),h=i(p),y=a(2),g=i(y),b=a(7),m=i(b),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],j=function(e,t){o().observe(e),L.push([e,t])},_=null,I=function(){if(null!==_)return _;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return _=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+s+t+a+n+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},z=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,h.default)({},i,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};z.propTypes={style:m.default.object,onLoad:m.default.func};var R=function(e){function t(a){(0,r.default)(this,t);var i=(0,l.default)(this,e.call(this,a)),o=!0,n=!0,s=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,n=!1,s=!0),"undefined"==typeof window&&(o=!1,n=!1),i.state={isVisible:o,imgLoaded:n,IOSupported:s},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,o=t.className,n=t.outerWrapperClassName,r=t.style,s=void 0===r?{}:r,l=t.imgStyle,d=void 0===l?{}:l,u=t.placeholderStyle,c=void 0===u?{}:u,f=t.sizes,p=t.resolutions,y=t.backgroundColor,b=t.Tag,m=void 0;m="boolean"==typeof y?"lightgray":y;var w=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,c),S=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(f){var E=f;return E.srcWebp&&E.srcSetWebp&&I()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),g.default.createElement(b,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},g.default.createElement(b,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},g.default.createElement(b,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&g.default.createElement(z,{alt:i,title:a,src:E.base64,style:w}),E.tracedSVG&&g.default.createElement(z,{alt:i,title:a,src:E.tracedSVG,style:w}),m&&g.default.createElement(b,{title:a,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(z,{alt:i,title:a,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:S,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,h.default)({alt:i,title:a},E))}})))}if(p){var L=p,j=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},s);return"inherit"===s.display&&delete j.display,L.srcWebp&&L.srcSetWebp&&I()&&(L.src=L.srcWebp,L.srcSet=L.srcSetWebp),g.default.createElement(b,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},g.default.createElement(b,{className:(o?o:"")+" gatsby-image-wrapper",style:j,ref:this.handleRef},L.base64&&g.default.createElement(z,{alt:i,title:a,src:L.base64,style:w}),L.tracedSVG&&g.default.createElement(z,{alt:i,title:a,src:L.tracedSVG,style:w}),m&&g.default.createElement(b,{title:a,style:{backgroundColor:m,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&g.default.createElement(z,{alt:i,title:a,width:L.width,height:L.height,srcSet:L.srcSet,src:L.src,style:S,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,h.default)({alt:i,title:a,width:L.width,height:L.height},L))}})))}return null},t}(g.default.Component);R.defaultProps={fadeIn:!0,alt:"",Tag:"div"},R.propTypes={responsiveResolution:m.default.object,responsiveSizes:m.default.object,resolutions:m.default.object,sizes:m.default.object,fadeIn:m.default.bool,title:m.default.string,alt:m.default.string,className:m.default.oneOfType([m.default.string,m.default.object]),outerWrapperClassName:m.default.oneOfType([m.default.string,m.default.object]),style:m.default.object,imgStyle:m.default.object,placeholderStyle:m.default.object,position:m.default.string,backgroundColor:m.default.oneOfType([m.default.string,m.default.bool]),onLoad:m.default.func,Tag:m.default.string},t.default=R},211:function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=a(2),d=o(l),u=a(24),c=(o(u),a(7)),f=i(c),p=a(106),h=o(p),y={data:f.object.isRequired},g=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.data.page,t=e.id,a=e.title,i=(e.slug,e.headerImage,e.body);return d.default.createElement("section",{key:t,className:"uk-section uk-padding-remove"},d.default.createElement("h1",null,a),this.renderHeaderImage(),d.default.createElement("div",null,d.default.createElement("div",{dangerouslySetInnerHTML:{__html:i.childMarkdownRemark.html}})))},t.prototype.renderHeaderImage=function(){var e=this.props.data.page.headerImage;return e?d.default.createElement(h.default,{sizes:e.sizes}):null},t}(d.default.Component);g.propTypes=y,t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-contentful-page-js-d09ae838d879317ab5c4.js.map