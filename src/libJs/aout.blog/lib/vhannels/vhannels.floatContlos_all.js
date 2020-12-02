/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

vhannels.setName(["floatContlos"]);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/** 消息对象
 *
 * 用于显示多种状态的消息，每种状态都可以设定对应显示方式
 *
 * @extends vhannels.ViewGroup
 * @class vhannels.floatContlos.Message
 * @see vhannels.floatContlos.FloatMessage
 * @author fybug
 * @version 0.0.1
 */
var Message = /*#__PURE__*/function (_vhannels$ViewGroup) {
  _inherits(Message, _vhannels$ViewGroup);

  var _super = _createSuper(Message);

  /** 默认处理 */

  /** 消息样式列表 */

  /**
   * @param {{
   *    default:function(string,vhannels.ViewGroup)|undefined,
   *    load:function(string,vhannels.ViewGroup)|undefined,
   *    success:function(string,vhannels.ViewGroup)|undefined,
   *    error:function(string,vhannels.ViewGroup)|undefined,
   *    warning:function(string,vhannels.ViewGroup)|undefined,
   *    destroy:function(vhannels.ViewGroup)
   * }} styrun 每一个状态的显示处理，load/success/error 会额外传入当前请求的消息内容，在有消息的状态没有定义处理的时候会使用默认处理 default
   */
  function Message() {
    var _this;

    var styrun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Message);

    _this = _super.call(this, document.createElement("message"));

    _defineProperty(_assertThisInitialized(_this), "stylemap", {
      /** 表示正在加载中的样式
       *
       * @type function(string,vhannels.ViewGroup)
       */
      load: _classStaticPrivateFieldSpecGet(Message, Message, _nullfun),

      /** 表示成功消息的样式
       *
       * @type function(string,vhannels.ViewGroup)
       */
      success: _classStaticPrivateFieldSpecGet(Message, Message, _nullfun),

      /** 表示错误消息的样式
       *
       * @type function(string,vhannels.ViewGroup)
       */
      error: _classStaticPrivateFieldSpecGet(Message, Message, _nullfun),

      /** 表示警告消息的样式
       *
       * @type function(string,vhannels.ViewGroup)
       */
      warning: _classStaticPrivateFieldSpecGet(Message, Message, _nullfun),

      /** 指示消息如何销毁
       *
       * @type function(vhannels.ViewGroup)
       */
      destroy: function destroy(v) {
        return setTimeout(function () {
          return v.remove();
        }, 600);
      }
    });

    _this.attrs({
      vhannels: "vhannels.floatContlos.FloatMessage.Message"
    });

    if (styrun["default"]) {
      var messagelist = ["load", "success", "error", "warning"];
      messagelist.forEach(function (v) {
        return _this.stylemap[v] = styrun["default"];
      });
      delete styrun["default"];
    }

    _this.stylemap = Object.assign(_this.stylemap, styrun);
    return _this;
  }
  /** 加载中的消息
   *
   * 追加 primary 类，并运行 load 显示处理
   *
   * @param {string} message 消息内容
   *
   * @return this
   */


  _createClass(Message, [{
    key: "message_load",
    value: function message_load(message) {
      this.__toclass("primary");

      this.stylemap.load(message, this);
      return this;
    }
    /** 成功的消息
     *
     * 追加 success 类，并运行 success 显示处理
     *
     * @param {string} message 消息内容
     *
     * @return this
     */

  }, {
    key: "message_success",
    value: function message_success(message) {
      this.__toclass("success");

      this.stylemap.success(message, this);
      return this;
    }
    /** 错误的消息
     *
     * 追加 alert 类，并运行 error 显示处理
     *
     * @param {string} message 消息内容
     *
     * @return this
     */

  }, {
    key: "message_error",
    value: function message_error(message) {
      this.__toclass("alert");

      this.stylemap.error(message, this);
      return this;
    }
    /** 警告的消息
     *
     * 追加 warning 类，并运行 warning 显示处理
     *
     * @param {string} message 消息内容
     *
     * @return this
     */

  }, {
    key: "message_warnning",
    value: function message_warnning(message) {
      this.__toclass("warning");

      this.stylemap.warning(message, this);
      return this;
    }
    /** 销毁当前消息
     *
     * 追加 destroy 类，并运行 destroy 显示处理
     */

  }, {
    key: "message_destroy",
    value: function message_destroy() {
      this["class"](["destroy"]);
      this.stylemap.destroy(this);
    }
    /**
     * @param {"destroy"|"primary"|"secondary"|"success"|"alert"|"warning"} classna
     */

  }, {
    key: "__toclass",
    value: function __toclass(classna) {
      var a = {
        "primary": false,
        "secondary": false,
        "success": false,
        "alert": false,
        "warning": false
      };
      a[classna] = true;
      this["class"]({
        "toggle": a
      });
    }
  }]);

  return Message;
}(vhannels.ViewGroup);
/** @type Message */


var _nullfun = {
  writable: true,
  value: function value(message, v) {
    return v.querySelector("p").getDom().innerText = message;
  }
};
vhannels.floatContlos.Message = Message;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** 悬浮消息工具
 *
 * 用于包装消息对象
 *
 * @extends vhannels.ViewGroup
 * @class vhannels.floatContlos.FloatMessage
 * @see vhannels.floatContlos.Message
 * @author fybug
 * @version 0.0.1
 */
var FloatMessage = /*#__PURE__*/function (_vhannels$ViewGroup) {
  _inherits(FloatMessage, _vhannels$ViewGroup);

  var _super = _createSuper(FloatMessage);

  /**
   * @param {HTMLElement|vhannels.ViewGroup} dom 容器添加到该节点内
   */
  function FloatMessage() {
    var _this;

    var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vhannels.View.Body;

    _classCallCheck(this, FloatMessage);

    _this = _super.call(this, document.createElement("messagegroup")); // 插入消息容器

    dom.append(_this.getDom()); // 赋予消息组样式

    _this.attrs({
      vhannels: "vhannels.floatContlos.FloatMessage"
    });

    return _this;
  }
  /** 展示消息对象
   *
   * @param {vhannels.floatContlos.Message} message 要展示的消息
   * @param {number|undefined} time 消息展示的时长，不传入则为无限
   *
   * @return vhannels.floatContlos.Message 消息对象
   */


  _createClass(FloatMessage, [{
    key: "showMessage",
    value: function showMessage(message) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      this.append(message);
      setTimeout(function () {
        return message["class"]({
          toggle: {
            "show": true,
            "destroy": false
          }
        });
      }, 10);
      time !== undefined && setTimeout(function () {
        return message.message_destroy();
      }, time + 9);
      return message;
    }
    /** 创建消息对象
     *
     * 创建消息对象并赋予状态处理
     *
     * @param {{
     *    default:function(string,vhannels.ViewGroup)|undefined,
     *    load:function(string,vhannels.ViewGroup)|undefined,
     *    success:function(string,vhannels.ViewGroup)|undefined,
     *    error:function(string,vhannels.ViewGroup)|undefined,
     *    warning:function(string,vhannels.ViewGroup)|undefined,
     *    destroy:function(vhannels.ViewGroup)
     * }} styrun 每一个状态的显示处理，load/success/error 会额外传入当前请求的消息内容，在有消息的状态没有定义处理的时候会使用默认处理 default
     * @param {function(vhannels.ViewGroup)} bestyle 前置渲染，初始化视图的内容，传入消息视图对象
     *
     * @return vhannels.floatContlos.Message 消息对象
     */

  }, {
    key: "createMessage",
    value: function createMessage() {
      var styrun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var bestyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
        return v.append(new vhannels.View(document.createElement("p")));
      };
      var v = new vhannels.floatContlos.Message(styrun);
      bestyle(v);
      return v;
    }
  }]);

  return FloatMessage;
}(vhannels.ViewGroup);
/** @type FloatMessage */


vhannels.floatContlos.FloatMessage = FloatMessage;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

vhannels.setName(["floatContlos"]);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _float = new WeakMap();

var _showlistern = new WeakMap();

var _destroylistern = new WeakMap();

var _showhtml = new WeakMap();

/** 子对话框对象
 *
 * 用于以控件的形式展示子窗口
 *
 * @extends vhannels.ViewGroup
 * @class vhannels.floatContlos.Dialog
 * @see vhannels.floatContlos.FloatDialog
 * @author fybug
 * @version 0.0.1
 */
var Dialog = /*#__PURE__*/function (_vhannels$ViewGroup) {
  _inherits(Dialog, _vhannels$ViewGroup);

  var _super = _createSuper(Dialog);

  /** 当前所属的容器
   * @type vhannels.floatContlos.FloatDialog
   */

  /** 展示监听
   * @type function(vhannels.floatContlos.Dialog)
   */

  /** 销毁监听
   * @type function(vhannels.floatContlos.Dialog)
   */

  /** 内容初始化方法
   * @type function(vhannels.floatContlos.Dialog):(string|[Element|[vhannels.ViewGroup)
   */

  /*--------------------------------------------------------------------------------------------*/

  /**
   * 通过传入的对象来指定控件的属性
   *
   * @param {{}} attrs 属性映射，属性名: 属性值
   */
  function Dialog() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Dialog);

    _this = _super.call(this, document.createElement("dialog"));

    _float.set(_assertThisInitialized(_this), {
      writable: true,
      value: undefined
    });

    _showlistern.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(d) {
        return void 0;
      }
    });

    _destroylistern.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(d) {
        return void 0;
      }
    });

    _showhtml.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(d) {
        return "";
      }
    });

    _this.attrs({
      "vhannels": "vhannels.floatContlos.FloatDialog.Dialog"
    });

    _this.attrs(attrs);

    _this.getDom().addEventListener("click", function (e) {
      return e.stopPropagation();
    });

    return _this;
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 展示的 html
   *
   * 每次展示的时候使用该方法重新生成 html 内容或者 dom 对象
   *
   * @param {function(vhannels.floatContlos.Dialog):(string|[Element]|[vhannels.ViewGroup])} html 生成 html 内容的方法
   * @return this
   */


  _createClass(Dialog, [{
    key: "show_Html",
    value: function show_Html(html) {
      _classPrivateFieldSet(this, _showhtml, html);

      return this;
    }
    /** 展示监听
     *
     * 控件展示时的监听，参数传入控件本身
     *
     * @param {function(vhannels.floatContlos.Dialog)} run 监听方法
     * @return this
     */

  }, {
    key: "showListern",
    value: function showListern(run) {
      _classPrivateFieldSet(this, _showlistern, run);

      return this;
    }
    /** 销毁监听
     *
     * 控件销毁时的监听，参数传入控件本身
     *
     * @param {function(vhannels.floatContlos.Dialog)} run 监听方法
     * @return this
     */

  }, {
    key: "destroyListern",
    value: function destroyListern(run) {
      _classPrivateFieldSet(this, _destroylistern, run);

      return this;
    }
    /*--------------------------------------------------------------------------------------------*/

    /** 绑定对话框容器
     *
     * @param {vhannels.floatContlos.FloatDialog} flo 对话框容器对象
     * @return this
     */

  }, {
    key: "__binFloatDialog",
    value: function __binFloatDialog(flo) {
      _classPrivateFieldSet(this, _float, flo);

      return this;
    }
    /** 展示对话框
     * @return this
     */

  }, {
    key: "__show",
    value: function __show() {
      var _this2 = this;

      var ht = _classPrivateFieldGet(this, _showhtml).call(this, this);

      if (typeof ht === "string") this.setHtml(ht);else this.append.apply(this, _toConsumableArray(ht));

      _classPrivateFieldGet(this, _showlistern).call(this, this);

      setTimeout(function () {
        return _this2["class"]({
          toggle: {
            "show": true
          }
        });
      }, 1);
      return this;
    }
    /** 销毁对话框 */

  }, {
    key: "__destroy",
    value: function __destroy() {
      var _this3 = this;

      this["class"]({
        toggle: {
          "show": false
        }
      });
      setTimeout(function () {
        _classPrivateFieldGet(_this3, _destroylistern).call(_this3, _this3);

        _classPrivateFieldSet(_this3, _float, undefined);

        _this3.setHtml("");

        _this3.remove();
      }, 300);
    }
  }]);

  return Dialog;
}(vhannels.ViewGroup);
/** @type Dialog */


vhannels.floatContlos.Dialog = Dialog;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _showlistern = new WeakMap();

var _destroylistern = new WeakMap();

var _nowdialog = new WeakMap();

var _canend = new WeakMap();

/** 悬浮对话框工具
 *
 * 用于容纳对话框对象，并且提供展示与销毁的方法<br/>
 * 一次只能使用一个对话框对象，不可堆积多个
 *
 * @extends vhannels.ViewGroup
 * @class vhannels.floatContlos.FloatDialog
 * @see vhannels.floatContlos.Dialog
 * @author fybug
 * @version 0.0.1
 */
var FloatDialog = /*#__PURE__*/function (_vhannels$ViewGroup) {
  _inherits(FloatDialog, _vhannels$ViewGroup);

  var _super = _createSuper(FloatDialog);

  /** 展示监听
   * @type function(vhannels.floatContlos.Dialog)
   */

  /** 销毁监听
   * @type function(vhannels.floatContlos.Dialog)
   */

  /** 子控件
   * @type vhannels.floatContlos.Dialog
   */

  /**
   * @type boolean
   */

  /*--------------------------------------------------------------------------------------------*/

  /**
   * @param {Element|vhannels.ViewGroup} dom
   */
  function FloatDialog() {
    var _this;

    var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vhannels.View.Body;

    _classCallCheck(this, FloatDialog);

    _this = _super.call(this, document.createElement("floatdialog"));

    _showlistern.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(d) {
        return void 0;
      }
    });

    _destroylistern.set(_assertThisInitialized(_this), {
      writable: true,
      value: function value(d) {
        return void 0;
      }
    });

    _nowdialog.set(_assertThisInitialized(_this), {
      writable: true,
      value: undefined
    });

    _canend.set(_assertThisInitialized(_this), {
      writable: true,
      value: false
    });

    FloatDialog.__toViewGroup(dom).append(_assertThisInitialized(_this));

    _this.attrs({
      "vhannels": "vhannels.floatContlos.FloatDialog"
    }); // 关闭监听


    _this.getDom().addEventListener("click", function (e) {
      if (_classPrivateFieldGet(_assertThisInitialized(_this), _canend)) _this.destroy();
    });

    return _this;
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 展示监听
   *
   * 控件展示时的监听，参数传入当前子控件
   *
   * @param {function(vhannels.floatContlos.Dialog)} run 监听方法
   * @return this
   */


  _createClass(FloatDialog, [{
    key: "showListern",
    value: function showListern(run) {
      _classPrivateFieldSet(this, _showlistern, run);

      return this;
    }
    /** 销毁监听
     *
     * 控件销毁时的监听，参数传入当前子控件
     *
     * @param {function(vhannels.floatContlos.Dialog)} run 监听方法
     * @return this
     */

  }, {
    key: "destroyListern",
    value: function destroyListern(run) {
      _classPrivateFieldSet(this, _destroylistern, run);

      return this;
    }
    /*--------------------------------------------------------------------------------------------*/

    /** 展示对话框和容器
     *
     * 展示容器后使用 {@link vhannels.floatContlos.Dialog.__show} 方法展示对话框
     *
     * @param {vhannels.floatContlos.Dialog} dailog 对话框对象
     * @param {boolean} canhide 是否可以通过外部关闭
     *
     * @return boolean
     */

  }, {
    key: "show",
    value: function show(dailog) {
      var canhide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // 一次只能展示一个
      if (_classPrivateFieldGet(this, _nowdialog) !== undefined) return false;

      _classPrivateFieldSet(this, _canend, canhide); // 展示容器


      this["class"]({
        toggle: {
          "show": true,
          "canend": canhide
        }
      });
      this.append(dailog); // 启动监听

      _classPrivateFieldSet(this, _nowdialog, dailog);

      _classPrivateFieldGet(this, _showlistern).call(this, dailog);

      dailog.__binFloatDialog(this);

      dailog.__show();

      return true;
    }
    /** 销毁对话框容器
     *
     * 使用 {@link vhannels.floatContlos.Dialog.__destroy} 方法销毁对话框后隐藏容器
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      _classPrivateFieldGet(this, _nowdialog).__destroy();

      setTimeout(function () {
        _this2["class"]({
          toggle: {
            "show": false
          }
        });

        _classPrivateFieldGet(_this2, _destroylistern).call(_this2, _classPrivateFieldGet(_this2, _nowdialog));

        _classPrivateFieldSet(_this2, _nowdialog, undefined);
      }, 300);
    }
  }]);

  return FloatDialog;
}(vhannels.ViewGroup);
/** @type FloatDialog */


vhannels.floatContlos.FloatDialog = FloatDialog;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

__webpack_require__(4);

/***/ })
/******/ ]);
