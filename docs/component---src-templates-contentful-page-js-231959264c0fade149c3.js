(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var i=a(33),r=a.n(i),s=a(1),n=a.n(s),l=a(0),o=a(226),d=a.n(o),u=a(222),c={data:l.object.isRequired},f=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.render=function(){var e=this.props.data.page,t=e.id,a=e.title,i=(e.slug,e.headerImage,e.body);return n.a.createElement(u.a,{location:this.props.location},n.a.createElement("section",{key:t,className:"uk-section uk-padding-remove"},n.a.createElement("h1",null,a),this.renderHeaderImage(),n.a.createElement("article",{className:"uk-article uk-margin"},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.childMarkdownRemark.html}}))))},a.renderHeaderImage=function(){var e=this.props.data.page.headerImage;return e?n.a.createElement(d.a,{fluid:e.fluid,style:{minHeight:"250px"}}):null},t}(n.a.Component);f.propTypes=c,t.default=f;var p="3340661114"},226:function(e,t,a){"use strict";var i=a(5);t.__esModule=!0,t.default=void 0;var r,s=i(a(33)),n=i(a(53)),l=i(a(223)),o=i(a(52)),d=i(a(1)),u=i(a(0)),c=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[],g=null,m=function(){if(null!==g)return g;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return g=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.opacity?e.opacity:"1";return"<img "+n+l+t+a+s+r+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},b=function(e){var t=e.style,a=e.onLoad,i=(0,l.default)(e,["style","onLoad"]);return d.default.createElement("img",(0,o.default)({},i,{onLoad:a,style:(0,o.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};b.propTypes={style:u.default.object,onLoad:u.default.func};var w=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,s=!1;return!p(t)&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,s=!0),"undefined"==typeof window&&(i=!1,r=!1),a.state={isVisible:i,imgLoaded:r,IOSupported:s},a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])}(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},a.render=function(){var e,t=this,a=c(this.props),i=a.title,r=a.alt,s=a.className,n=a.outerWrapperClassName,l=a.style,u=void 0===l?{}:l,f=a.imgStyle,p=void 0===f?{}:f,h=a.placeholderStyle,g=void 0===h?{}:h,w=a.fluid,v=a.fixed,S=a.backgroundColor,E=a.Tag;e="boolean"==typeof S?"lightgray":S;var L=(0,o.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},p,g),R=(0,o.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},p);if(w){var I=w;return I.srcWebp&&I.srcSetWebp&&m()&&(I.src=I.srcWebp,I.srcSet=I.srcSetWebp),d.default.createElement(E,{className:(n||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},d.default.createElement(E,{className:(s||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},u),ref:this.handleRef},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(b,{alt:r,title:i,src:I.base64,style:L}),I.tracedSVG&&d.default.createElement(b,{alt:r,title:i,src:I.tracedSVG,style:L}),e&&d.default.createElement(E,{title:i,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement(b,{alt:r,title:i,srcSet:I.srcSet,src:I.src,sizes:I.sizes,style:R,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,o.default)({alt:r,title:i},I))}})))}if(v){var k=v,W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},u);return"inherit"===u.display&&delete W.display,k.srcWebp&&k.srcSetWebp&&m()&&(k.src=k.srcWebp,k.srcSet=k.srcSetWebp),d.default.createElement(E,{className:(n||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},d.default.createElement(E,{className:(s||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef},k.base64&&d.default.createElement(b,{alt:r,title:i,src:k.base64,style:L}),k.tracedSVG&&d.default.createElement(b,{alt:r,title:i,src:k.tracedSVG,style:L}),e&&d.default.createElement(E,{title:i,style:{backgroundColor:e,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&d.default.createElement(b,{alt:r,title:i,width:k.width,height:k.height,srcSet:k.srcSet,src:k.src,style:R,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,o.default)({alt:r,title:i,width:k.width,height:k.height},k))}})))}return null},t}(d.default.Component);w.defaultProps={fadeIn:!0,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});w.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),outerWrapperClassName:u.default.oneOfType([u.default.string,u.default.object]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,position:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,Tag:u.default.string};var E=w;t.default=E}}]);
//# sourceMappingURL=component---src-templates-contentful-page-js-231959264c0fade149c3.js.map