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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
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

/***/ })
/******/ ]);
