webpackJsonp([0x4d422fad1a8d8000],{"./node_modules/gatsby-link/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.navigateTo=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/react/react.js"),f=o(c),d=n("./node_modules/react-router-dom/index.js"),p=n("./node_modules/prop-types/index.js"),b=o(p),y="",_={activeClassName:b.default.string,activeStyle:b.default.object,exact:b.default.bool,strict:b.default.bool,isActive:b.default.func,location:b.default.object},g=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={to:y+e.to},n}return i(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){this.props.to!==e.to&&(this.setState({to:y+e.to}),___loader.enqueue(this.state.to))}},{key:"componentDidMount",value:function(){___loader.enqueue(this.state.to)}},{key:"render",value:function(){var e=this,t=this.props,n=t.onClick,o=r(t,["onClick"]);if(Object.keys(_).some(function(t){return e.props[t]}))var a=d.NavLink;else var a=d.Link;return f.default.createElement(a,u({onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var o=e.state.to;if(o.split("#").length>1&&(o=o.split("#").slice(0,-1).join("")),o===window.location.pathname){var r=e.state.to.split("#").slice(1).join("#"),a=document.getElementById(r);if(null!==a)return a.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}})},o,{to:this.state.to}))}}]),t}(f.default.Component);g.contextTypes={router:b.default.object},t.default=g;t.navigateTo=function(e){window.___navigateTo(y+e)}},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/Users/Bay/gatsby-blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/Users/Bay/gatsby-blog/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/Users/Bay/gatsby-blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["C:/Users/Bay/gatsby-blog/node_modules/babel-preset-env/lib/index.js","C:/Users/Bay/gatsby-blog/node_modules/babel-preset-stage-0/lib/index.js","C:/Users/Bay/gatsby-blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/blogPost.js':function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("./node_modules/react/react.js"),c=r(s),f=n("./node_modules/gatsby-link/index.js"),d=(r(f),n("./node_modules/prop-types/index.js")),p=o(d),b={data:p.object.isRequired},y=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.data.contentfulBlogPost,t=e.postTitle,n=e.datePosted,o=e.postContent,r=e.author;return c.default.createElement("div",null,c.default.createElement("div",{style:{display:"flex",alignItems:"center"}},c.default.createElement("h4",null,t)),c.default.createElement("div",null,c.default.createElement("p",null,"Posted By: ",r.name),c.default.createElement("img",{src:r.avatar.file.url})),c.default.createElement("div",null,c.default.createElement("span",null,"Date Posted: ",n),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:o.postContent}})))}}]),t}(c.default.Component);y.propTypes=b,t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-templates-blog-post-js-da09d353c9541144197f.js.map