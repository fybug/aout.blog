!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){vhannels.setName(["floatContlos"]),n(1),n(2),n(3)},function(t,e,n){},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e,n){if(t!==e)throw new TypeError("Private static access of wrong provenance");return n.get?n.get.call(t):n.value}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(p,vhannels.ViewGroup);var e,n,c,a=i(p);function p(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r(this,p),l(s(t=a.call(this,document.createElement("message"))),"stylemap",{load:f(p,p,y),success:f(p,p,y),error:f(p,p,y),warning:f(p,p,y),destroy:function(t){return setTimeout((function(){return t.remove()}),350)}}),t.attrs({vhannels:"vhannels.floatContlos.FloatMessage.Message"}),e.default){var n=["load","success","error","warning"];n.forEach((function(n){return t.stylemap[n]=e.default})),delete e.default}return t.stylemap=Object.assign(t.stylemap,e),t}return e=p,(n=[{key:"message_load",value:function(t){return this.__toclass("primary"),this.stylemap.load(t,this),this}},{key:"message_success",value:function(t){return this.__toclass("success"),this.stylemap.success(t,this),this}},{key:"message_error",value:function(t){return this.__toclass("alert"),this.stylemap.error(t,this),this}},{key:"message_warnning",value:function(t){return this.__toclass("warning"),this.stylemap.warning(t,this),this}},{key:"message_destroy",value:function(){this.class(["destroy"]),this.stylemap.destroy(this)}},{key:"__toclass",value:function(t){var e={primary:!1,secondary:!1,success:!1,alert:!1,warning:!1};e[t]=!0,this.class({toggle:e})}}])&&o(e.prototype,n),c&&o(e,c),p}(),y={writable:!0,value:function(t,e){return e.querySelector("p").getDom().innerText=t}};vhannels.floatContlos.Message=p},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(a,vhannels.ViewGroup);var e,n,c,s=i(a);function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vhannels.View.Body;return r(this,a),t=s.call(this,document.createElement("messagegroup")),e.append(t.getDom()),t.attrs({vhannels:"vhannels.floatContlos.FloatMessage"}),t}return e=a,(n=[{key:"showMessage",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return this.append(t),setTimeout((function(){return t.class({toggle:{show:!0,destroy:!1}})}),10),void 0!==e&&setTimeout((function(){return t.message_destroy()}),e+9),t}},{key:"createMessage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t.append(document.createElement("p"))},n=new vhannels.floatContlos.Message(t);return e(n),n}}])&&o(e.prototype,n),c&&o(e,c),a}();vhannels.floatContlos.FloatMessage=a}]);
