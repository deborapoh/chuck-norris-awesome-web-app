(this["webpackJsonpchuck-norris-awesome-web-app"]=this["webpackJsonpchuck-norris-awesome-web-app"]||[]).push([[4],{105:function(n,t,e){"use strict";var r=e(31),a=e(27),i=e(28),c=e(32),o=e(29),u=e(33),f=e(0),l=e(30),s=e(21),p=e(1),d=e(20),b=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(e[r[a]]=n[r[a]])}return e},v=e.n(d).a||d,h=function(n,t){return Object(s.b)(Object.assign(Object.assign({},p.a),{locale:"en"}),Object(p.c)(),n,t)},m=function(n){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,n),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(n){var t=this.props,e=t.values,r=b(t,["values"]),a=n.values,i=b(n,["values"]);return!v(a,e)||!v(r,i)}},{key:"render",value:function(){var n=this;return f.createElement(l.a.Consumer,null,(function(t){n.props.defaultMessage||Object(p.h)(t);var e=t||{},a=e.formatMessage,i=void 0===a?h:a,c=e.textComponent,o=void 0===c?f.Fragment:c,u=n.props,l=u.id,s=u.description,d=u.defaultMessage,b=u.values,v=u.children,m=u.tagName,g=void 0===m?o:m,x=i({id:l,description:s,defaultMessage:d},b);return Array.isArray(x)||(x=[x]),"function"===typeof v?v.apply(void 0,Object(r.a)(x)):g?f.createElement.apply(f,[g,null].concat(Object(r.a)(x))):x}))}}]),t}(f.Component);m.displayName="FormattedMessage",m.defaultProps={values:{}},t.a=m},79:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(93),c=e(91),o=e(24),u=e(25),f=e(83);function l(){var n=Object(o.a)(["\n  ","\n"]);return l=function(){return n},n}function s(){var n=Object(o.a)(["\n  ","\n  margin-top: 24px;\n"]);return s=function(){return n},n}function p(){var n=Object(o.a)(["\n  font-size: 16px;\n  color: ",";\n"]);return p=function(){return n},n}var d=Object(u.b)(p(),f.a.font),b=u.c.div(s(),d),v=u.c.a(l(),d),h=function(n){var t=n.name,e=n.url;return a.a.createElement(b,null,a.a.createElement(v,{href:e,title:t},t)," from ",a.a.createElement(v,{href:"https://www.flaticon.com/br/",title:"www.flaticon.com"},"www.flaticon.com"))};function m(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70px;\n  height: 70px;\n  margin: 30px 0 30px 0;\n  background-image: url(",");\n  background-repeat: no-repeat;\n"]);return m=function(){return n},n}function g(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  width: 90vw;\n  height: 85vh;\n  padding: 0 5vw 0 5vw;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  background-color: ",";\n  font-size: 24px;\n  font-weight: 500;\n  color: ",";\n"]);return g=function(){return n},n}var x=u.c.div(g(),f.a.white,f.a.font),w=(u.c.div(m(),(function(n){return n.icon_url})),e(85)),O=e(90),j=e(92),y=e(9),k=e(86);t.default=function(n){var t=n.history;return a.a.createElement(w.a,null,a.a.createElement(i.a,{to:function(n){n.stopPropagation(),n.preventDefault(),t.goBack()}}),a.a.createElement(O.a,null,Object(k.a)({id:"thanks.index.title"})),a.a.createElement(j.a,null,Object(k.a)({id:"thanks.index.subtitle"})),a.a.createElement(x,null,y.a.ICON_THANKS.map((function(n){return a.a.createElement(h,{key:n.name,name:n.name,url:n.url})}))),a.a.createElement(c.a,null))}},83:function(n,t,e){"use strict";t.a={white:"#ffffff",font:"#3a3a3a",black:"#000000",darkGray:"#191919",lightGray:"#f7f7f7",mediumGray:"#cfd8dc",green:"#00bbc4"}},85:function(n,t,e){"use strict";var r=e(24),a=e(25),i=e(83);function c(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n"]);return c=function(){return n},n}var o=a.c.div(c(),i.a.green);t.a=o},86:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(0),a=e.n(r),i=e(105),c=function(n){return a.a.createElement(i.a,n)}},87:function(n,t,e){"use strict";e.d(t,"b",(function(){return h})),e.d(t,"c",(function(){return m})),e.d(t,"a",(function(){return g})),e.d(t,"d",(function(){return x}));var r=e(24),a=e(25),i=e(83),c=e(88),o=e.n(c),u=e(89),f=e.n(u);function l(){var n=Object(r.a)(["\n  margin: auto;\n  width: 30px;\n  height: 30px;\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n  transform: rotate(90deg);\n  margin: auto;\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  background-color: ",";\n  top: 40px;\n  left: 24px;\n  z-index: 1;\n"]);return p=function(){return n},n}function d(){var n=Object(r.a)(["\n  position: absolute;\n  bottom: 40px;\n  background-color: ",";\n  color: ",";\n"]);return d=function(){return n},n}function b(){var n=Object(r.a)(["\n  display: flex;\n  width: ",";\n  height: ",";\n  font-size: ",";\n  font-weight: ",";\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  font-family: Poppins, sans-serif;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);\n"]);return b=function(){return n},n}var v=a.c.button(b(),(function(n){return n.width||"300px"}),(function(n){return n.width||"48px"}),(function(n){return n.fontSize||"24px"}),(function(n){return n.fontWeight||"500px"})),h=Object(a.c)(v)(d(),i.a.green,i.a.white),m=Object(a.c)(v)(p(),i.a.white),g=a.c.img.attrs({src:o.a})(s()),x=a.c.img.attrs({src:f.a})(l())},88:function(n,t,e){n.exports=e.p+"static/media/arrow-left.aa762d26.svg"},89:function(n,t,e){n.exports=e.p+"static/media/thank-you.971f1582.svg"},90:function(n,t,e){"use strict";var r=e(24),a=e(25),i=e(83);function c(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100px;\n  margin-top: 80px;\n  font-size: 29px;\n  font-weight: 800;\n  color: ",";\n"]);return c=function(){return n},n}var o=a.c.div(c(),i.a.white);t.a=o},91:function(n,t,e){"use strict";var r=e(0),a=e.n(r),i=e(24),c=e(25),o=e(83);function u(){var n=Object(i.a)(["\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  background-color: ",";\n  height: 10px;\n  width: 100%;\n"]);return u=function(){return n},n}var f=c.c.div(u(),o.a.green);t.a=function(){return a.a.createElement(f,null)}},92:function(n,t,e){"use strict";var r=e(24),a=e(25),i=e(83);function c(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: center;\n  width: 70vw;\n  height: 100px;\n  font-size: 24px;\n  color: ",";\n"]);return c=function(){return n},n}var o=a.c.div(c(),i.a.white);t.a=o},93:function(n,t,e){"use strict";var r=e(0),a=e.n(r),i=e(87);t.a=function(n){var t=n.to;return a.a.createElement(i.c,{onClick:t},a.a.createElement(i.a,{alt:"back"}))}}}]);
//# sourceMappingURL=4.a46cf480.chunk.js.map