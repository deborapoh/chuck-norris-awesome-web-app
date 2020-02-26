(this["webpackJsonpchuck-norris-awesome-web-app"]=this["webpackJsonpchuck-norris-awesome-web-app"]||[]).push([[4],{78:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),c=e(86),o=function(n){var t=n.to;return a.a.createElement(c.c,{onClick:t},a.a.createElement(c.d,{alt:"thanks"}))},i=e(90),u=e(11),s=e.n(u),f=e(14),l=e(9),p=e(7),d=e(24),h=e(25);function b(){var n=Object(d.a)(["\n  width: 40px;\n  height: 40px;\n  margin-bottom: 5px;\n  color: black;\n"]);return b=function(){return n},n}function g(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  width: 140px;\n  height: 90px;\n  margin: 10px 0 24px 0;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);\n"]);return g=function(){return n},n}function x(){var n=Object(d.a)(["\n  ","\n  display: flex;\n  flex-wrap: wrap;\n  width: 90vw;\n  height: 60vh;\n  justify-content: space-around;\n  overflow-y: scroll;\n"]);return x=function(){return n},n}function v(){var n=Object(d.a)(["\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none;\n"]);return v=function(){return n},n}var m=Object(h.b)(v()),w=h.c.div(x(),m),j=h.c.div(g()),O=h.c.img(b()),y=e(12),k=e(85),E=e(89),C=e(26),S=function(n){var t=n.icon,e=n.description,c=Object(r.useContext)(C.a).setSelectedCategory,o=Object(p.f)();t=t||y.a.CATEGORIES.newCategory;var i=void 0!==y.a.CATEGORIES[e]?Object(k.a)({id:"category.".concat(e)}):e;return a.a.createElement(j,{onClick:function(){c(e),o.push("".concat(y.a.ROUTES.JOKE,"/").concat(e))}},a.a.createElement(O,{src:t}),i)};S.defaultProps={description:"Category not found"};var z=function(){var n=Object(r.useState)([]),t=Object(l.a)(n,2),e=t[0],c=t[1];return Object(r.useEffect)((function(){(function(){var n=Object(f.a)(s.a.mark((function n(){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.Categories.get();case 2:t=n.sent,c(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),a.a.createElement(w,null,e.length>0&&e.map((function(n){return a.a.createElement(S,{key:n,icon:y.a.CATEGORIES[n],description:n})})))},G=e(83);function R(){var n=Object(d.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: center;\n  width: 70vw;\n  height: 100px;\n  font-size: 24px;\n  color: ",";\n"]);return R=function(){return n},n}function J(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100px;\n  margin-top: 80px;\n  font-size: 29px;\n  font-weight: 800;\n  color: ",";\n"]);return J=function(){return n},n}function T(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100vw;\n  height: 70vh;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  background-color: ",";\n"]);return T=function(){return n},n}var _=h.c.div(T(),G.a.white),A=h.c.div(J(),G.a.white),I=h.c.div(R(),G.a.white),P=e(84);t.default=function(){return a.a.createElement(P.a,null,a.a.createElement(o,null),a.a.createElement(A,null,Object(k.a)({id:"home.title"})),a.a.createElement(I,null,Object(k.a)({id:"home.subtitle"})),a.a.createElement(_,null,a.a.createElement(z,null)),a.a.createElement(i.a,null))}},83:function(n,t,e){"use strict";t.a={white:"#ffffff",darkRed:"#a60d0d",font:"#3a3a3a",orangeRed:"#ff4500",black:"#000000",darkGray:"#191919",lightGray:"#f7f7f7",mediumGray:"#cfd8dc",green:"#00bbc4"}},84:function(n,t,e){"use strict";var r=e(24),a=e(25),c=e(83);function o(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n"]);return o=function(){return n},n}var i=a.c.div(o(),c.a.green);t.a=i},85:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e(0),a=e.n(r),c=e(116),o=function(n){return a.a.createElement(c.a,n)}},86:function(n,t,e){"use strict";e.d(t,"b",(function(){return g})),e.d(t,"c",(function(){return x})),e.d(t,"a",(function(){return v})),e.d(t,"d",(function(){return m}));var r=e(24),a=e(25),c=e(83),o=e(87),i=e.n(o),u=e(88),s=e.n(u);function f(){var n=Object(r.a)(["\n  margin: auto;\n  width: 30px;\n  height: 30px;\n"]);return f=function(){return n},n}function l(){var n=Object(r.a)(["\n  transform: rotate(90deg);\n  margin: auto;\n"]);return l=function(){return n},n}function p(){var n=Object(r.a)(["\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  background-color: ",";\n  top: 40px;\n  left: 24px;\n  z-index: 1;\n"]);return p=function(){return n},n}function d(){var n=Object(r.a)(["\n  position: absolute;\n  bottom: 40px;\n  background-color: ",";\n  color: ",";\n"]);return d=function(){return n},n}function h(){var n=Object(r.a)(["\n  display: flex;\n  width: ",";\n  height: ",";\n  font-size: ",";\n  font-weight: ",";\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  font-family: Poppins, sans-serif;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);\n"]);return h=function(){return n},n}var b=a.c.button(h(),(function(n){return n.width||"300px"}),(function(n){return n.width||"48px"}),(function(n){return n.fontSize||"24px"}),(function(n){return n.fontWeight||"500px"})),g=Object(a.c)(b)(d(),c.a.green,c.a.white),x=Object(a.c)(b)(p(),c.a.white),v=a.c.img.attrs({src:i.a})(l()),m=a.c.img.attrs({src:s.a})(f())},87:function(n,t,e){n.exports=e.p+"static/media/arrow-left.aa762d26.svg"},88:function(n,t,e){n.exports=e.p+"static/media/thank-you.971f1582.svg"},89:function(n,t,e){"use strict";var r=e(11),a=e.n(r),c=e(14),o=e(91),i=e.n(o),u=function(){var n=Object(c.a)(a.a.mark((function n(t,e){var r,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.get(t);case 3:return r=n.sent,c=r.data,n.abrupt("return",e?c[e]:c);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.abrupt("return",!1);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t,e){return n.apply(this,arguments)}}(),s={Categories:{get:function(){return Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u("".concat("https://api.chucknorris.io","/jokes/categories"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}},Jokes:{get_random:function(){return Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u("".concat("https://api.chucknorris.io","/jokes/random"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},get_random_by_category:function(n){return Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u("".concat("https://api.chucknorris.io","/jokes/random?category=").concat(n));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}};t.a=s},90:function(n,t,e){"use strict";var r=e(0),a=e.n(r),c=e(24),o=e(25),i=e(83);function u(){var n=Object(c.a)(["\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  background-color: ",";\n  height: 10px;\n  width: 100%;\n"]);return u=function(){return n},n}var s=o.c.div(u(),i.a.green);t.a=function(){return a.a.createElement(s,null)}}}]);
//# sourceMappingURL=4.3f6f9c23.chunk.js.map