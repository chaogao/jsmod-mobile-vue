(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("jsmod-mobile", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["jsmod-mobile"] = factory(require("vue"));
	else
		root["jsmod-mobile"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialog_vue___default.a; });


var ModDialogClass = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_0__dialog_vue___default.a);

/* harmony default export */ __webpack_exports__["b"] = ({
  show: function show(propsData) {
    propsData.value = true;

    return new ModDialogClass({
      el: document.createElement('div'),
      propsData: propsData
    });
  }
});



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__carousel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_item_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__carousel_item_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__carousel_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel_item_vue___default.a; });






/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__button_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button_vue___default.a; });




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__alert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_vue___default.a; });


var ModAlertClass = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_0__alert_vue___default.a);

/* harmony default export */ __webpack_exports__["b"] = ({
  show: function show(propsData) {
    propsData.value = true;

    return new ModAlertClass({
      el: document.createElement('div'),
      propsData: propsData
    });
  }
});



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirm_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__confirm_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__confirm_vue___default.a; });


var ModConfirmClass = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_0__confirm_vue___default.a);

/* harmony default export */ __webpack_exports__["b"] = ({
  show: function show(propsData) {
    propsData.value = true;

    return new ModConfirmClass({
      el: document.createElement('div'),
      propsData: propsData
    });
  }
});



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toast_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toast_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__toast_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__toast_vue___default.a; });


var ModToastClass = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_0__toast_vue___default.a);

/* harmony default export */ __webpack_exports__["b"] = ({
  show: function show(propsData) {
    propsData.value = true;

    return new ModToastClass({
      el: document.createElement('div'),
      propsData: propsData
    });
  }
});



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__image_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__image_vue___default.a; });




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__spin_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__spin_vue___default.a; });




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DIALOG_ZINDEX_BEGIN = 10000;

var dialogArr = {};
var zIndexOffset = 0;

var InjectTools = {
  append: function append($el) {
    if (!this.$root) {
      this.createRoot();
    }

    $el.style.zIndex = DIALOG_ZINDEX_BEGIN + zIndexOffset;
    zIndexOffset += 1;
    this.$root.appendChild($el);

    return $el.style.zIndex;
  },
  createRoot: function createRoot() {
    this.$root = document.createElement('div');
    this.$root.classList.add('jsmod-dialog-placement');
    document.body.appendChild(this.$root);
  },
  remove: function remove($el) {
    this.$root.removeChild($el);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    }
  },

  data: function data() {
    return {
      calcWidth: undefined,
      calcHeight: undefined
    };
  },
  beforeMount: function beforeMount() {
    if (this.$el) {
      this.__jsmod_dialog_zindex = InjectTools.append(this.$el);
    }
  },
  mounted: function mounted() {
    if (this.$el && !this.__jsmod_dialog_zindex) {
      this.__jsmod_dialog_zindex = InjectTools.append(this.$el);
    }
  },
  destroyed: function destroyed() {
    InjectTools.remove(this.$el);
  },


  methods: {
    getWidth: function getWidth() {
      if (this.width && typeof this.width == 'number') {
        return this.width;
      }

      if (this.width && typeof this.width == 'string' && /%$/.test(this.width) && !isNaN(parseInt(this.width))) {

        return window.innerWidth * parseInt(this.width) / 100;
      }

      return undefined;
    },
    getHeight: function getHeight() {
      if (this.height && typeof this.height == 'number') {
        return this.height;
      }

      if (this.height && typeof this.height == 'string' && /%$/.test(this.height) && !isNaN(parseInt(this.height))) {

        return window.innerHeight * parseInt(this.height) / 100;
      }

      return undefined;
    },
    calcLayout: function calcLayout() {
      this.calcWidth = this.getWidth();
      this.calcHeight = this.getHeight();
      this.onCalced && this.onCalced();
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_array_from__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);





var Swiper = function () {
  function Swiper(options) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Swiper);

    this._default = {
      container: '.jsmod-carousel',
      item: '.jsmod-carousel-item',
      direction: 'vertical',
      activeClass: 'active',
      threshold: 50,
      duration: 300,
      auto: false,
      loop: false,
      interval: 3000,
      height: 'auto',
      minMovingDistance: 0,
      preventScrollY: false,
      enableTouch: true
    };
    this._options = __WEBPACK_IMPORTED_MODULE_3_object_assign___default()(this._default, options);
    this._options.height = this._options.height.replace('px', '');
    this._start = {};
    this._move = {};
    this._end = {};
    this._eventHandlers = {};
    this._prev = this._current = this._goto = 0;
    this._width = this._height = this._distance = 0;
    this._offset = [];
    this.$box = this._options.container;
    this.$container = this._options.container.querySelector('.jsmod-carousel-swiper');
    this.$items = this.$container.querySelectorAll(this._options.item);
    this.count = this.$items.length;
    this.realCount = this.$items.length;
    this._position = [];
    this._firstItemIndex = 0;
    if (!this.count) {
      return;
    }
    this._init();
    this._auto();
    this._options.enableTouch && this._bind();
    this._onResize();
    return this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Swiper, [{
    key: '_auto',
    value: function _auto() {
      var me = this;
      me.stop();
      if (me._options.interval > 0) {
        me.timer = setTimeout(function () {
          me.next();
        }, me._options.interval);
      }
    }
  }, {
    key: 'updateItemWidth',
    value: function updateItemWidth() {
      this._width = this.$box.offsetWidth || document.documentElement.offsetWidth;
      this._distance = this._options.direction === 'horizontal' ? this._width : this._height;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.timer && clearTimeout(this.timer);
    }
  }, {
    key: '_loop',
    value: function _loop() {
      return this._options.loop && this.realCount >= 3;
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      var me = this;
      this.resizeHandler = function () {
        setTimeout(function () {
          me.updateItemWidth();
          me._setOffset();
          me._setTransform();
        }, 100);
      };
      window.addEventListener('orientationchange', this.resizeHandler, false);
    }
  }, {
    key: '_init',
    value: function _init() {
      this._height = this._options.height === 'auto' ? 'auto' : this._options.height - 0;
      this.updateItemWidth();
      this._initPosition();
      this._activate(this._current);
      this._setOffset();
      this._setTransform();
      if (this._loop()) {
        this._loopRender();
      }
    }
  }, {
    key: '_initPosition',
    value: function _initPosition() {
      for (var i = 0; i < this.realCount; i++) {
        this._position.push(i);
      }
    }
  }, {
    key: '_movePosition',
    value: function _movePosition(position) {
      var me = this;
      if (position > 0) {
        var firstIndex = me._position.splice(0, 1);
        me._position.push(firstIndex[0]);
      } else if (position < 0) {
        var lastIndex = me._position.pop();
        me._position.unshift(lastIndex);
      }
    }
  }, {
    key: '_setOffset',
    value: function _setOffset() {
      var me = this;
      var index = me._position.indexOf(me._current);
      me._offset = [];
      __WEBPACK_IMPORTED_MODULE_2_array_from___default()(me.$items).forEach(function ($item, key) {
        me._offset.push((key - index) * me._distance);
      });
    }
  }, {
    key: '_setTransition',
    value: function _setTransition(duration) {
      duration = duration || this._options.duration || 'none';
      var transition = duration === 'none' ? 'none' : duration + 'ms';
      __WEBPACK_IMPORTED_MODULE_2_array_from___default()(this.$items).forEach(function ($item, key) {
        $item.style.webkitTransition = transition;
        $item.style.transition = transition;
      });
    }
  }, {
    key: '_setTransform',
    value: function _setTransform(offset) {
      var me = this;
      offset = offset || 0;
      __WEBPACK_IMPORTED_MODULE_2_array_from___default()(me.$items).forEach(function ($item, key) {
        var distance = me._offset[key] + offset;
        var transform = 'translate3d(' + distance + 'px, 0, 0)';
        if (me._options.direction === 'vertical') {
          transform = 'translate3d(0, ' + distance + 'px, 0)';
        }
        $item.style.webkitTransform = transform;
        $item.style.transform = transform;
      });
    }
  }, {
    key: '_bind',
    value: function _bind() {
      var me = this;
      me.touchstartHandler = function (e) {
        me.stop();
        me._start.x = e.changedTouches[0].pageX;
        me._start.y = e.changedTouches[0].pageY;
        me._setTransition('none');
      };
      me.touchmoveHandler = function (e) {
        me._move.x = e.changedTouches[0].pageX;
        me._move.y = e.changedTouches[0].pageY;
        var distanceX = me._move.x - me._start.x;
        var distanceY = me._move.y - me._start.y;
        var distance = distanceY;
        var noScrollerY = Math.abs(distanceX) > Math.abs(distanceY);
        if (me._options.direction === 'horizontal' && noScrollerY) {
          distance = distanceX;
        }
        if (me._options.direction == 'vertical' && me._options.preventScrollY) {
          noScrollerY = true;
        }
        if ((me._options.minMovingDistance && Math.abs(distance) >= me._options.minMovingDistance || !me._options.minMovingDistance) && noScrollerY) {
          me._setTransform(distance);
        }

        noScrollerY && e.preventDefault();
      };

      me.touchendHandler = function (e) {
        me._end.x = e.changedTouches[0].pageX;
        me._end.y = e.changedTouches[0].pageY;

        var distance = me._end.y - me._start.y;
        if (me._options.direction === 'horizontal') {
          distance = me._end.x - me._start.x;
        }

        distance = me.getDistance(distance);
        if (distance !== 0 && me._options.minMovingDistance && Math.abs(distance) < me._options.minMovingDistance) {
          return;
        }
        if (distance > me._options.threshold) {
          me.move(-1);
        } else if (distance < -me._options.threshold) {
          me.move(1);
        } else {
          me.move(0);
        }

        me._loopRender();
      };

      me.transitionEndHandler = function (e) {
        me._activate(me._current);
        var cb = me._eventHandlers.swiped;
        cb && cb.apply(me, [me._prev % me.count, me._current % me.count]);
        me._auto();
        me._loopRender();
        e.preventDefault();
      };
      me.$container.addEventListener('touchstart', me.touchstartHandler, false);
      me.$container.addEventListener('touchmove', me.touchmoveHandler, false);
      me.$container.addEventListener('touchend', me.touchendHandler, false);
      me.$items[1] && me.$items[1].addEventListener('webkitTransitionEnd', me.transitionEndHandler, false);
    }
  }, {
    key: '_loopRender',
    value: function _loopRender() {
      var me = this;
      if (me._loop()) {
        if (me._offset[me._offset.length - 1] === 0) {
          me.$container.appendChild(me.$items[0]);
          me._loopEvent(1);
        } else if (me._offset[0] === 0) {
          me.$container.insertBefore(me.$items[me.$items.length - 1], me.$container.firstChild);
          me._loopEvent(-1);
        }
      }
    }
  }, {
    key: '_loopEvent',
    value: function _loopEvent(num) {
      var me = this;
      me._itemDestoy();
      me.$items = me.$container.querySelectorAll(me._options.item);
      me.$items[1] && me.$items[1].addEventListener('webkitTransitionEnd', me.transitionEndHandler, false);
      me._movePosition(num);
      me._setOffset();
      me._setTransform();
    }
  }, {
    key: 'getDistance',
    value: function getDistance(distance) {
      if (this._loop()) {
        return distance;
      } else {
        if (distance > 0 && this._current === 0) {
          return 0;
        } else if (distance < 0 && this._current === this.realCount - 1) {
          return 0;
        } else {
          return distance;
        }
      }
    }
  }, {
    key: 'getCurrent',
    value: function getCurrent() {
      return this._current;
    }
  }, {
    key: '_moveIndex',
    value: function _moveIndex(num) {
      if (num !== 0) {
        this._prev = this._current;
        this._current += this.realCount;
        this._current += num;
        this._current %= this.realCount;
      }
    }
  }, {
    key: '_activate',
    value: function _activate(index) {
      var clazz = this._options.activeClass;
      Array.prototype.forEach.call(this.$items, function ($item, key) {
        $item.classList.remove(clazz);
        if (index === Number($item.dataset.index)) {
          $item.classList.add(clazz);
        }
      });
    }
  }, {
    key: 'go',
    value: function go(index, options) {
      var me = this;
      me.stop();

      index = index || 0;
      index += this.realCount;
      index = index % this.realCount;
      index = this._position.indexOf(index) - this._position.indexOf(this._current);

      me._moveIndex(index);
      me._setOffset();
      me._setTransition(options && options.duration);
      me._setTransform();
      me._auto();
      return this;
    }
  }, {
    key: 'next',
    value: function next() {
      this.move(1);
      return this;
    }
  }, {
    key: 'pre',
    value: function pre() {
      this.move(-1);
      return this;
    }
  }, {
    key: 'move',
    value: function move(num) {
      this.go(this._current + num);
      return this;
    }
  }, {
    key: 'on',
    value: function on(event, callback) {
      if (this._eventHandlers[event]) {
        console.error('[swiper] event ' + event + ' is already register');
      }
      if (typeof callback !== 'function') {
        console.error('[swiper] parameter callback must be a function');
      }
      this._eventHandlers[event] = callback;
      return this;
    }
  }, {
    key: '_itemDestoy',
    value: function _itemDestoy() {
      var _this = this;

      this.$items.length && __WEBPACK_IMPORTED_MODULE_2_array_from___default()(this.$items).forEach(function (item) {
        item.removeEventListener('webkitTransitionEnd', _this.transitionEndHandler, false);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.stop();
      this._current = 0;
      this._setTransform(0);
      window.removeEventListener('orientationchange', this.resizeHandler, false);
      this.$container.removeEventListener('touchstart', this.touchstartHandler, false);
      this.$container.removeEventListener('touchmove', this.touchmoveHandler, false);
      this.$container.removeEventListener('touchend', this.touchendHandler, false);
      this._itemDestoy();

      if (this._options.loop && this.count === 2) {
        var $item = this.$container.querySelector(this._options.item + '-clone');
        $item && this.$container.removeChild($item);
        $item = this.$container.querySelector(this._options.item + '-clone');
        $item && this.$container.removeChild($item);
      }
    }
  }]);

  return Swiper;
}();

/* harmony default export */ __webpack_exports__["a"] = (Swiper);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(11)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(56)
  , hide      = __webpack_require__(60)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(53)
  , IE8_DOM_DEFINE = __webpack_require__(61)
  , toPrimitive    = __webpack_require__(72)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(62)
  , defined = __webpack_require__(17);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ?
			'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	/*
	This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	- galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
	me.isBadAndroid = (function() {
		var appVersion = window.navigator.appVersion;
		// Android browser is not a chrome browser.
		if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
			var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
			if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
				return parseFloat(safariVersion[1]) < 535.19;
			} else {
				return true;
			}
		} else {
			return false;
		}
	})();

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();
function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS
		disablePointer : !utils.hasPointer,
		disableTouch : utils.hasPointer || !utils.hasTouch,
		disableMouse : utils.hasPointer || utils.hasTouch,
		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true,
		bindToWrapper: typeof window.onmousedown === "undefined"
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

	// Some defaults
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.2.0',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);
		clearTimeout(this.resizeTimeout);
 		this.resizeTimeout = null;
		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
		  // for button property
		  // http://unixpapa.com/js/mouse.html
		  var button;
	    if (!e.which) {
	      /* IE case */
	      button = (e.button < 2) ? 0 :
	               ((e.button == 4) ? 1 : 2);
	    } else {
	      /* All others */
	      button = e.button;
	    }
			if ( button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this._transitionTime();
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}

/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;
		var transitionType = this.options.useTransition && easing.style;
		if ( !time || transitionType ) {
				if(transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		var durationProp = utils.style.transitionDuration;
		this.scrollerStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.scrollerStyle[durationProp] === '0.0001ms') {
					self.scrollerStyle[durationProp] = '0s';
				}
			});
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},
	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			if (that.indicators) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = null;
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			if(!that.options.snap) {
				that._execEvent('scrollEnd');
			}
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
		this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( this.enabled && !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		var durationProp = utils.style.transitionDuration;
		this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
		// remove 0.0001ms
		var self = this;
		if(utils.isBadAndroid) {
			rAF(function() {
				if(self.wrapperStyle[durationProp] === '0.0001ms') {
					self.wrapperStyle[durationProp] = '0s';
				}
			});
		}
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.fadeScrollbars ) {
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
		}
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		this.indicatorStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.indicatorStyle[durationProp] === '0.0001ms') {
					self.indicatorStyle[durationProp] = '0s';
				}
			});
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( true ) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return IScroll; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__banner_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__banner_vue___default.a; });




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layer_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layer_vue___default.a; });




/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_item_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tab_item_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tab_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__tab_item_vue___default.a; });





/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (typeof Array.from === 'function' ?
  Array.from :
  __webpack_require__(31)
);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from
module.exports = (function() {
  var isCallable = function(fn) {
    return typeof fn === 'function';
  };
  var toInteger = function (value) {
    var number = Number(value);
    if (isNaN(number)) { return 0; }
    if (number === 0 || !isFinite(number)) { return number; }
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
  };
  var maxSafeInteger = Math.pow(2, 53) - 1;
  var toLength = function (value) {
    var len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
  };
  var iteratorProp = function(value) {
    if(value != null) {
      if(['string','number','boolean','symbol'].indexOf(typeof value) > -1){
        return Symbol.iterator;
      } else if (
        (typeof Symbol !== 'undefined') &&
        ('iterator' in Symbol) &&
        (Symbol.iterator in value)
      ) {
        return Symbol.iterator;
      }
      // Support "@@iterator" placeholder, Gecko 27 to Gecko 35
      else if ('@@iterator' in value) {
        return '@@iterator';
      }
    }
  };
  var getMethod = function(O, P) {
    // Assert: IsPropertyKey(P) is true.
    if (O != null && P != null) {
      // Let func be GetV(O, P).
      var func = O[P];
      // ReturnIfAbrupt(func).
      // If func is either undefined or null, return undefined.
      if(func == null) {
        return void 0;
      }
      // If IsCallable(func) is false, throw a TypeError exception.
      if (!isCallable(func)) {
        throw new TypeError(func + ' is not a function');
      }
      return func;
    }
  };
  var iteratorStep = function(iterator) {
    // Let result be IteratorNext(iterator).
    // ReturnIfAbrupt(result).
    var result = iterator.next();
    // Let done be IteratorComplete(result).
    // ReturnIfAbrupt(done).
    var done = Boolean(result.done);
    // If done is true, return false.
    if(done) {
      return false;
    }
    // Return result.
    return result;
  };

  // The length property of the from method is 1.
  return function from(items /*, mapFn, thisArg */ ) {
    'use strict';

    // 1. Let C be the this value.
    var C = this;

    // 2. If mapfn is undefined, let mapping be false.
    var mapFn = arguments.length > 1 ? arguments[1] : void 0;

    var T;
    if (typeof mapFn !== 'undefined') {
      // 3. else
      //   a. If IsCallable(mapfn) is false, throw a TypeError exception.
      if (!isCallable(mapFn)) {
        throw new TypeError(
          'Array.from: when provided, the second argument must be a function'
        );
      }

      //   b. If thisArg was supplied, let T be thisArg; else let T
      //      be undefined.
      if (arguments.length > 2) {
        T = arguments[2];
      }
      //   c. Let mapping be true (implied by mapFn)
    }

    var A, k;

    // 4. Let usingIterator be GetMethod(items, @@iterator).
    // 5. ReturnIfAbrupt(usingIterator).
    var usingIterator = getMethod(items, iteratorProp(items));

    // 6. If usingIterator is not undefined, then
    if (usingIterator !== void 0) {
      // a. If IsConstructor(C) is true, then
      //   i. Let A be the result of calling the [[Construct]]
      //      internal method of C with an empty argument list.
      // b. Else,
      //   i. Let A be the result of the abstract operation ArrayCreate
      //      with argument 0.
      // c. ReturnIfAbrupt(A).
      A = isCallable(C) ? Object(new C()) : [];

      // d. Let iterator be GetIterator(items, usingIterator).
      var iterator = usingIterator.call(items);

      // e. ReturnIfAbrupt(iterator).
      if (iterator == null) {
        throw new TypeError(
          'Array.from requires an array-like or iterable object'
        );
      }

      // f. Let k be 0.
      k = 0;

      // g. Repeat
      var next, nextValue;
      while (true) {
        // i. Let Pk be ToString(k).
        // ii. Let next be IteratorStep(iterator).
        // iii. ReturnIfAbrupt(next).
        next = iteratorStep(iterator);

        // iv. If next is false, then
        if (!next) {

          // 1. Let setStatus be Set(A, "length", k, true).
          // 2. ReturnIfAbrupt(setStatus).
          A.length = k;

          // 3. Return A.
          return A;
        }
        // v. Let nextValue be IteratorValue(next).
        // vi. ReturnIfAbrupt(nextValue)
        nextValue = next.value;

        // vii. If mapping is true, then
        //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
        //   2. If mappedValue is an abrupt completion, return
        //      IteratorClose(iterator, mappedValue).
        //   3. Let mappedValue be mappedValue.[[value]].
        // viii. Else, let mappedValue be nextValue.
        // ix.  Let defineStatus be the result of
        //      CreateDataPropertyOrThrow(A, Pk, mappedValue).
        // x. [TODO] If defineStatus is an abrupt completion, return
        //    IteratorClose(iterator, defineStatus).
        if (mapFn) {
          A[k] = mapFn.call(T, nextValue, k);
        }
        else {
          A[k] = nextValue;
        }
        // xi. Increase k by 1.
        k++;
      }
      // 7. Assert: items is not an Iterable so assume it is
      //    an array-like object.
    } else {

      // 8. Let arrayLike be ToObject(items).
      var arrayLike = Object(items);

      // 9. ReturnIfAbrupt(items).
      if (items == null) {
        throw new TypeError(
          'Array.from requires an array-like object - not null or undefined'
        );
      }

      // 10. Let len be ToLength(Get(arrayLike, "length")).
      // 11. ReturnIfAbrupt(len).
      var len = toLength(arrayLike.length);

      // 12. If IsConstructor(C) is true, then
      //     a. Let A be Construct(C, «len»).
      // 13. Else
      //     a. Let A be ArrayCreate(len).
      // 14. ReturnIfAbrupt(A).
      A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 15. Let k be 0.
      k = 0;
      // 16. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = arrayLike[k];
        if (mapFn) {
          A[k] = mapFn.call(T, kValue, k);
        }
        else {
          A[k] = kValue;
        }
        k++;
      }
      // 17. Let setStatus be Set(A, "length", len, true).
      // 18. ReturnIfAbrupt(setStatus).
      A.length = len;
      // 19. Return A.
    }
    return A;
  };
})();


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(6);





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: '80%'
    },
    useIscroll: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    btn: {
      type: String,
      default: '确认'
    },
    onClick: {
      type: Function,
      default: function _default() {}
    }
  },

  data: function data() {
    return {
      canShow: false,
      buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: '0px 0px 10px 10px',
        padding: '10px 0',
        color: '#108ee9'
      }
    };
  },
  created: function created() {
    if (this.value !== undefined) {
      this.canShow = this.value;
    }
  },


  watch: {
    value: function value(val) {
      this.canShow = val;
    },
    canShow: function canShow() {
      this.$emit('input', this.canShow);
    }
  },

  methods: {
    onFooterClick: function onFooterClick() {
      var returnValue = this.onClick();
      var e = new Event('click');

      this.$emit('click', e);

      if (returnValue !== false && e.cancelable === false) {
        this.canShow = false;
      }
    },
    hide: function hide() {
      this.canShow = false;
    }
  },

  components: {
    ModDialog: __WEBPACK_IMPORTED_MODULE_0__dialog__["a" /* ModDialog */],
    ModButton: __WEBPACK_IMPORTED_MODULE_1__button__["a" /* ModButton */]
  }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image__ = __webpack_require__(13);





var ALLOW_SCALE_TYPES = ['cover', 'contain', 'none'];

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModCarousel: __WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* ModCarousel */],
    ModCarouselItem: __WEBPACK_IMPORTED_MODULE_0__carousel__["b" /* ModCarouselItem */],
    ModImage: __WEBPACK_IMPORTED_MODULE_1__image__["a" /* ModImage */]
  },

  props: {
    list: {
      type: Array
    },

    height: {
      type: Number,
      default: 200
    },

    ratio: {
      type: Number
    },

    loadedStep: {
      type: Number,
      default: 2
    },

    scale: {
      type: String,
      validator: function validator(value) {
        return ALLOW_SCALE_TYPES.indexOf(value) > -1;
      },

      default: 'cover'
    },

    interval: {
      type: Number,
      default: 3000
    },

    current: {
      type: Number,
      default: 0
    },

    background: {
      type: String,
      default: '#fff'
    }
  },

  data: function data() {
    return {
      index: this.current,
      loadedIndex: 0
    };
  },


  methods: {
    onClick: function onClick(index, item) {
      this.$emit('click', {
        index: index,
        item: item
      });
    },
    calcAuto: function calcAuto(key) {
      return key <= this.index + this.loadedStep;
    },
    onLoaded: function onLoaded(key) {
      if (key > this.loadedIndex) {
        this.loadedIndex = key;
      }
    }
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spin__ = __webpack_require__(14);





var BUTTON_STATES = ['default', 'loading', 'disabeld'];

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModSpin: __WEBPACK_IMPORTED_MODULE_1__spin__["a" /* ModSpin */]
  },

  computed: {
    buttonClass: function buttonClass() {
      var arr = ['jsmod-button'];

      this.inline && arr.push('jsmod-button-inline');
      this.status == 'disabeld' && arr.push('jsmod-button-disabled');

      arr.push('jsmod-button-border');
      this.status != 'disabeld' && this.isPress && arr.push('jsmod-button-pressing');

      this.class && arr.push(this.class);

      return arr;
    },
    _style: function _style() {
      var obj = {};

      if (this.color) {
        obj.color = this.color;
      }

      if (this.backgroundColor) {
        obj.backgroundColor = this.backgroundColor;
      }

      if (this.border) {
        obj.borderColor = this.border;
      } else if (this.customStyle && this.customStyle.backgroundColor) {
        obj.borderColor = this.customStyle.backgroundColor;
      } else {
        obj.borderColor = this.backgroundColor;
      }

      return obj;
    }
  },

  methods: {
    _onClick: function _onClick(e) {
      if (this.status != 'loading' && this.status != 'disabeld') {
        this.$emit('click');
        this.onClick(e);
      }
    }
  },

  data: function data() {
    return {
      isPress: false
    };
  },


  props: {
    status: {
      type: String,
      validator: function validator(value) {
        return BUTTON_STATES.indexOf(value) > -1;
      },

      default: 'default'
    },

    backgroundColor: {
      type: String,
      default: '#108ee9'
    },

    color: {
      type: String
    },

    border: {
      type: [Boolean, String]
    },

    inline: {
      type: Boolean,
      default: false
    },

    onClick: {
      type: Function,
      default: function _default() {}
    },

    href: {
      type: [String, Object],
      default: 'javascript:void(0)'
    },

    customStyle: {
      type: Object
    },

    class: {
      type: String
    }
  }

});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_utils_swiper__ = __webpack_require__(16);




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    height: {
      type: Number,
      default: 200
    },
    ratio: {
      type: Number
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    auto: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 0
    },
    threshold: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 300
    },
    current: {
      type: Number,
      default: 0
    },
    preventScrollY: {
      type: Boolean,
      default: true
    },
    value: {
      type: [Number, String],
      default: 0
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.createSwiper(_this.currentInner);
    });

    this.childrenLength = this.$children.length;

    this.getOffsetWidth();
    this.onEvents();

    this.$watch('childrenLength', function () {
      _this.createSwiper(_this.currentInner);
    });
  },
  destroyed: function destroyed() {
    this.offEvents();
  },
  created: function created() {
    this.currentInner = this.current || this.value;
  },
  updated: function updated() {
    this.childrenLength = this.$children.length;
  },
  data: function data() {
    return {
      currentInner: 0,
      childrenLength: 0,
      offsetWidth: 0
    };
  },


  methods: {
    onResize: function onResize() {
      this.getOffsetWidth();
    },
    offEvents: function offEvents() {
      window.removeEventListener('resize', this.onResize);
    },
    onEvents: function onEvents() {
      window.addEventListener('resize', this.onResize);
    },
    getOffsetWidth: function getOffsetWidth() {
      this.offsetWidth = this.$el.offsetWidth;
    },
    pre: function pre() {
      this.swiper && this.swiper.pre();
    },
    next: function next() {
      this.swiper && this.swiper.next();
    },
    createSwiper: function createSwiper(idx) {
      var self = this;

      this.swiper && this.swiper.destroy();
      this.swiper = new __WEBPACK_IMPORTED_MODULE_0__components_utils_swiper__["a" /* default */]({
        container: this.$el,
        direction: this.direction,
        loop: this.loop,
        interval: this.interval,
        threshold: this.threshold,
        duration: this.duration,
        height: this.calcHeight,
        preventScrollY: this.preventScrollY
      }).on('swiped', function (prev, index) {
        self.currentInner = index;
        self.$emit('swiped', {
          index: self.currentInner
        });
      });

      if (idx && idx > 0) {
        this.swiper.go(idx, {
          duration: 'none'
        });
      }
    }
  },

  watch: {
    currentInner: function currentInner(value) {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.swiper.getCurrent() != _this2.currentInner) {
          _this2.swiper && _this2.swiper.go(_this2.currentInner);
        }
      });

      this.$emit('input', value);
    },
    value: function value(val) {
      this.currentInner = parseInt(val);
    }
  },

  computed: {
    calcHeight: function calcHeight() {
      var height = 'auto';

      if (typeof this.height == 'number') {
        height = this.height + 'px';
      } else if (this.height != 'auto') {
        height = this.height;
      }

      if (this.ratio && this.offsetWidth) {
        height = this.offsetWidth * this.ratio + 'px';
      }

      return height;
    }
  }

});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(6);





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: '80%'
    },
    useIscroll: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    btnOk: {
      type: String,
      default: '确认'
    },
    btnNo: {
      type: String,
      default: '取消'
    },
    content: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: function _default() {}
    }
  },

  data: function data() {
    return {
      canShow: false,
      buttonNoStyle: {
        flex: 1,
        padding: '10px 0',
        color: '#999',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRight: '1px solid #efefef',
        borderRadius: '0'
      },
      buttonOkStyle: {
        flex: 1,
        padding: '10px 0',
        color: '#108ee9',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: '0'
      }
    };
  },
  created: function created() {
    if (this.value !== undefined) {
      this.canShow = this.value;
    }
  },


  watch: {
    value: function value(val) {
      this.canShow = val;
    },
    canShow: function canShow() {
      this.$emit('input', this.canShow);
    }
  },

  methods: {
    _onBtnOk: function _onBtnOk() {
      var returnValue = this.onClick({
        type: true
      });

      this.$emit('click', {
        type: true
      });

      if (returnValue !== false) {
        this.canShow = false;
      }
    },
    _onBtnNo: function _onBtnNo() {
      var returnValue = this.onClick({
        type: false
      });

      this.$emit('click', {
        type: false
      });

      if (returnValue !== false) {
        this.canShow = false;
      }
    },
    hide: function hide() {
      this.canShow = false;
    }
  },

  components: {
    'mod-dialog': __WEBPACK_IMPORTED_MODULE_0__dialog__["a" /* ModDialog */]
  }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dialog_mixin__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iscroll__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iscroll__);





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    html: String,
    header: String,
    footer: String,
    useIscroll: {
      type: Boolean,
      default: true
    },
    useMask: {
      type: Boolean,
      default: true
    },
    isScrollAble: {
      type: Boolean,
      default: false
    },
    isMaskClickHide: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    value: {
      type: Boolean,
      default: false
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    soltBackgroundColor: {
      type: String,
      default: '#fff'
    }
  },

  data: function data() {
    return {
      calcWidth: undefined,
      calcHeight: undefined,
      canShow: false
    };
  },


  watch: {
    value: {
      handler: function handler(val) {
        this.canShow = val;
      },
      immediate: true
    },

    canShow: function canShow() {
      this.$emit('input', this.canShow);

      if (this.canShow) {
        this.$emit('onShow');
      } else {
        this.$emit('onHide');
      }
    }
  },

  created: function created() {
    if (typeof this.value !== 'undefined') {
      this.canShow = this.value;
    }
  },
  mounted: function mounted() {
    this.canShow && this.calc();
    this.onEvents();
  },
  destroyed: function destroyed() {
    this.offEvents();
  },
  updated: function updated() {
    var _this = this;

    if (this.canShow) {
      this.$nextTick(function () {
        _this.calc();
      });
    }
  },


  computed: {
    htmlStyle: function htmlStyle() {
      var obj = {
        backgroundColor: this.backgroundColor
      };

      obj.width = this.calcWidth + 'px';
      obj.height = this.calcHeight + 'px';

      return obj;
    }
  },

  methods: {
    maskHide: function maskHide(e) {
      if (!this.isMaskClickHide) {
        return;
      }
      if (e.target.classList.contains('jsmod-mask')) {
        this.canShow = false;
      }
    },
    onTouchmove: function onTouchmove(e) {
      if (e.target == e.currentTarget) {
        !this.isScrollAble && e.preventDefault();
      }
    },
    hide: function hide() {
      this.canShow = false;
    },
    offEvents: function offEvents() {
      window.removeEventListener('resize', this.onResize);
    },
    onEvents: function onEvents() {
      window.addEventListener('resize', this.onResize);
    },
    onResize: function onResize() {
      this.calc();
    },
    getWidth: function getWidth() {
      if (this.width && typeof this.width == 'number') {
        return this.width;
      }

      if (this.width && typeof this.width == 'string' && /%$/.test(this.width) && !isNaN(parseInt(this.width))) {

        return window.innerWidth * parseInt(this.width) / 100;
      }

      return undefined;
    },
    getHeight: function getHeight() {
      if (this.height && typeof this.height == 'number') {
        return this.height;
      }

      if (this.height && typeof this.height == 'string' && /%$/.test(this.height) && !isNaN(parseInt(this.height))) {

        return window.innerHeight * parseInt(this.height) / 100;
      }

      return undefined;
    },
    calc: function calc() {
      var _this2 = this;

      this.calcWidth = this.getWidth();
      this.calcHeight = this.getHeight();

      if (this.useIscroll && this.useMask) {
        this.$nextTick(function () {
          _this2.createIScroll();
        });
      }
    },
    createIScroll: function createIScroll() {
      if (!this.iscroll) {
        this.iscroll = new __WEBPACK_IMPORTED_MODULE_1_iscroll___default.a(this.$refs.soltContent, {
          mouseWheel: true,
          scrollbars: true,
          click: true
        });
      }

      this.iscroll.refresh();
    },
    removeIScroll: function removeIScroll() {
      this.iscroll && this.iscroll.destroy();
      this.iscroll = null;
    }
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_dialog_mixin__["a" /* default */]]
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_load_gif__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_load_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_load_gif__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scale__ = __webpack_require__(44);





var ALLOW_SCALE_TYPES = ['cover', 'contain', 'none'];

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    src: {
      type: String
    },

    scale: {
      type: String,
      validator: function validator(value) {
        return ALLOW_SCALE_TYPES.indexOf(value) > -1;
      },

      default: 'cover'
    },

    width: {
      type: [String, Number],
      default: 'auto'
    },

    height: {
      type: [String, Number],
      default: 'auto'
    },

    ratio: {
      type: Number
    },

    auto: {
      type: Boolean,
      default: true
    },

    class: {
      type: String
    },

    clickReload: {
      type: Boolean,
      default: false
    },

    showLoading: {
      type: Boolean,
      default: true
    },

    loadingStyle: {
      type: Object
    },

    loadingUrl: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_0__styles_load_gif___default.a
    }
  },

  data: function data() {
    return {
      offsetWidth: 0,
      isLoading: 0,
      isLoaded: 0,
      isError: 0,
      imageScaleStyle: {}
    };
  },
  mounted: function mounted() {
    this.getOffsetWidth();
    this.auto && this.loadImage();
    this.onEvents();
  },
  destroyed: function destroyed() {
    this.offEvents();
  },


  methods: {
    getOffsetWidth: function getOffsetWidth() {
      this.offsetWidth = this.$el.offsetWidth;
    },
    onResize: function onResize() {
      this.getOffsetWidth();
    },
    offEvents: function offEvents() {
      window.removeEventListener('resize', this.onResize);
    },
    onEvents: function onEvents() {
      window.addEventListener('resize', this.onResize);
    },
    loadImage: function loadImage() {
      var _this = this;

      this.isLoading = 1;
      this.isLoaded = 0;
      this.isError = 0;

      this.$nextTick(function () {
        var img = _this.$refs.img;

        if (img.complete) {
          _this.loadSuccess();
        } else {
          img.onload = function () {
            _this.loadSuccess();
          };

          img.onerror = function () {
            _this.loaderror();
          };
        }
      });
    },
    loadSuccess: function loadSuccess() {
      this.isLoading = 0;
      this.isLoaded = 1;
      this.setImageScale();
      this.$emit('loaded');
    },
    setImageScale: function setImageScale() {
      var _this2 = this;

      this.imageScaleStyle = {};
      this.$nextTick(function () {
        _this2.imageScaleStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__scale__["a" /* default */])(_this2.$refs.img, _this2.$el.offsetWidth, _this2.$el.offsetHeight, _this2.scale);
      });
    },
    loaderror: function loaderror() {
      this.isError = 1;
      this.isLoading = 0;
      this.isLoaded = 0;
    }
  },

  watch: {
    offsetWidth: function offsetWidth() {
      this.isLoaded && this.setImageScale();
    },
    width: function width() {
      this.isLoaded && this.setImageScale();
    },
    height: function height() {
      this.isLoaded && this.setImageScale();
    },
    ratio: function ratio() {
      this.isLoaded && this.setImageScale();
    },
    scale: function scale() {
      this.isLoaded && this.setImageScale();
    },
    src: function src() {
      this.auto && this.loadImage();
    },
    auto: function auto() {
      if (this.auto) {
        this.loadImage();
      }
    }
  },

  computed: {
    imageStyle: function imageStyle() {
      var obj = {};

      if (typeof this.width == 'number') {
        obj.width = this.width + 'px';
      } else if (this.width != 'auto') {
        obj.width = this.width;
      }

      if (typeof this.height == 'number') {
        obj.height = this.height + 'px';
      } else if (this.height != 'auto') {
        obj.height = this.height;
      }

      if (this.ratio && this.offsetWidth) {
        obj.height = this.offsetWidth * this.ratio + 'px';
      }

      return obj;
    },
    imgClass: function imgClass() {
      return this.isLoading ? 'jsmod-image-img-loading' : 'jsmod-image-img-loaded';
    },
    className: function className() {
      return this.class;
    }
  },

  created: function created() {}
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dialog_mixin__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_show_mixin__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iscroll__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_iscroll__);






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    useMask: {
      type: Boolean,
      default: true
    },

    coverScreen: {
      type: Boolean,
      default: false
    },

    isMaskClickHide: {
      type: Boolean,
      default: true
    },

    useIscroll: {
      type: Boolean,
      default: true
    },

    direction: {
      type: String,
      default: 'vertical'
    },

    verticalPosition: {
      type: String,
      default: 'bottom'
    },

    horizontalPosition: {
      type: String,
      default: 'left'
    }
  },

  data: function data() {
    return {
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    };
  },
  updated: function updated() {
    this.canShow && this.calcLayout();
  },
  mounted: function mounted() {
    this.canShow && this.calcLayout();

    this.onEvents();
  },
  destroyed: function destroyed() {
    this.offEvents();
  },


  computed: {
    layerStyle: function layerStyle() {
      var obj = {};

      if (this.direction == 'vertical') {
        obj.height = this.calcHeight + 'px';

        if (this.coverScreen) {
          obj.height = this.winHeight + 'px';
        }

        obj.maxHeight = this.winHeight + 'px';
        obj.width = '100%';

        if (this.verticalPosition == 'top') {
          obj.top = 0;
          obj.bottom = 'auto';
        } else {
          obj.top = 'auto';
          obj.bottom = 0;
        }
      } else {
        obj.width = this.calcWidth + 'px';

        if (this.coverScreen) {
          obj.width = this.winWidth + 'px';
        }

        obj.maxWidth = this.winWidth + 'px';
        obj.height = '100%';

        if (this.horizontalPosition == 'left') {
          obj.left = 0;
          obj.right = 'auto';
        } else {
          obj.left = 'auto';
          obj.right = 0;
        }
      }

      if (this.useIscroll) {
        obj.overflow = 'hidden';
      } else {
        obj.overflow = 'auto';
      }

      return obj;
    }
  },

  methods: {
    onCalced: function onCalced() {
      var _this = this;

      if (this.useIscroll && this.canShow) {
        this.$nextTick(function () {
          _this.createIScroll();
        });
      }
    },
    offEvents: function offEvents() {
      window.removeEventListener('resize', this.onResize);
    },
    onEvents: function onEvents() {
      window.addEventListener('resize', this.onResize);
    },
    onResize: function onResize() {
      if (this.canShow) {
        this.calcLayout();
      }

      this.winHeight = window.innerHeight;
      this.winWidth = window.innerWidth;
    },
    removeIScroll: function removeIScroll() {
      this.iscroll && this.iscroll.destroy();
      this.iscroll = null;
    },
    maskHide: function maskHide(e) {
      if (!this.isMaskClickHide) {
        return;
      }

      if (e.target.classList.contains('jsmod-mask')) {
        this.canShow = false;
      }
    },
    createIScroll: function createIScroll() {
      if (!this.iscroll) {
        this.iscroll = new __WEBPACK_IMPORTED_MODULE_2_iscroll___default.a(this.$refs.slotContent, {
          mouseWheel: true,
          scrollbars: true,
          click: true
        });
      }

      this.iscroll.refresh();
    }
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_1__utils_show_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__utils_dialog_mixin__["a" /* default */]]
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    inline: {
      type: Boolean,
      default: true
    },

    size: {
      type: Number,
      default: 16
    },

    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    getStyle: function getStyle() {
      var obj = {};

      obj.width = this.size + 'px';
      obj.height = this.size + 'px';
      obj.fill = this.color;
      obj.display = 'block';
      return obj;
    },
    getOutStyle: function getOutStyle() {
      var obj = {};

      if (this.inline) {
        obj.display = 'inline-block';
      }

      return obj;
    }
  },

  data: function data() {
    return {
      borderSize: parseInt(this.size / 8)
    };
  }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ModTabItem',

  props: {
    label: {
      type: String
    }
  },

  data: function data() {
    return {
      height: 0
    };
  },
  updated: function updated() {
    var height = this.$el.offsetHeight;

    if (height != this.height) {
      this.height = height;
      this.$parent.updateHeight();
    }
  },
  mounted: function mounted() {
    this.$parent.updateTabs(this.$el.offsetHeight);
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_utils_swiper__ = __webpack_require__(16);




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },

    tabClass: {
      type: String
    },

    tabWrapClass: {
      type: String
    },

    enableTouch: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      tabs: [],
      currentInner: this.activeIndex,
      height: 0
    };
  },


  computed: {
    containerStyle: function containerStyle() {
      var obj = {};

      obj.height = this.height + 'px';

      return obj;
    }
  },

  mounted: function mounted() {
    this.updateHeight();
    this.onEvents();
  },
  destroyed: function destroyed() {
    this.offEvents();
  },


  watch: {
    currentInner: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          _this.updateHeight();
        });

        this.toIndex(this.currentInner);

        this.$emit('active', {
          activeIndex: this.currentInner
        });
      },


      immediate: false
    }
  },

  methods: {
    onResize: function onResize() {
      this.updateHeight();
    },
    offEvents: function offEvents() {
      window.removeEventListener('resize', this.onResize);
    },
    onEvents: function onEvents() {
      window.addEventListener('resize', this.onResize);
    },
    getTabs: function getTabs() {
      return this.$children.filter(function (item) {
        return item.$options.name == 'ModTabItem';
      });
    },
    getTabsIndex: function getTabsIndex(idx) {
      var tabs = this.getTabs();

      return tabs[idx];
    },
    updateHeight: function updateHeight() {
      var tab = this.getTabsIndex(this.currentInner);

      this.height = tab.$el.offsetHeight;
    },
    createSwiper: function createSwiper(idx) {
      var self = this;

      this.swiper && this.swiper.destroy();
      this.swiper = new __WEBPACK_IMPORTED_MODULE_0__components_utils_swiper__["a" /* default */]({
        container: this.$el,
        direction: 'horizontal',
        item: '.jsmod-tab-item',
        interval: 0,
        height: 'auto',
        enableTouch: this.enableTouch
      }).on('swiped', function (prev, index) {
        self.currentInner = index;
      });

      if (idx && idx > 0) {
        this.swiper.go(idx, {
          duration: 'none'
        });
      }
    },
    toIndex: function toIndex(idx) {
      this.swiper && this.swiper.go(idx);
    },
    updateTabs: function updateTabs(height) {
      var _this2 = this;

      var tabs = this.getTabs();

      this.tabs = [];

      tabs.forEach(function (item) {
        _this2.tabs.push({
          label: item.label
        });
      });

      this.createSwiper(this.currentInner);
    }
  }

});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spin__ = __webpack_require__(14);





var TOAST_TYPES = {
  'loading': {
    icon: 'iconjsmod-jiazai',
    content: '加载中',
    timeout: 0
  },

  'success': {
    icon: 'iconjsmod-yuanxingxuanzhong',
    content: '成功',
    timeout: 1500
  },

  'error': {
    icon: 'iconjsmod-guanbi2',
    content: '失败',
    timeout: 1500
  },

  'default': {
    timeout: 1500
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    width: {
      type: [String, Number]
    },
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    useIscroll: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: undefined
    },
    content: {
      type: String,
      default: undefined
    },
    timeout: {
      type: Number,
      default: undefined
    },
    onHide: {
      type: Function,
      default: function _default() {}
    }
  },

  data: function data() {
    return {
      canShow: false
    };
  },
  created: function created() {
    var _this = this;

    if (this.value !== undefined) {
      this.canShow = this.value;
    }

    var timeout = this._timeout;

    if (timeout > 0) {
      this._timer = setTimeout(function () {
        _this.hide();
      }, timeout);
    }
  },


  computed: {
    _timeout: function _timeout() {
      if (this.timeout !== undefined) {
        return this.timeout;
      } else {
        return TOAST_TYPES[this.type] && TOAST_TYPES[this.type].timeout;
      }
    },
    _icon: function _icon() {
      if (this.icon !== undefined) {
        return this.icon;
      } else {
        return TOAST_TYPES[this.type] && TOAST_TYPES[this.type].icon;
      }
    },
    _content: function _content() {
      if (this.content !== undefined) {
        return this.content;
      } else {
        return TOAST_TYPES[this.type] && TOAST_TYPES[this.type].content;
      }
    }
  },

  watch: {
    value: function value(val) {
      this.canShow = val;
    },
    timeout: function timeout(val) {
      var _this2 = this;

      this._timer && clearTimeout(this._timer);

      this._timer = setTimeout(function () {
        _this2.hide();
      }, this.timeout);
    },
    canShow: function canShow(val) {
      var _this3 = this;

      this.$emit('input', this.canShow);

      if (this.canShow == false) {
        this.$emit('hide');
        this.onHide();
      }

      if (val === true && this._timeout > 0) {
        this._timer && clearTimeout(this._timer);

        this._timer = setTimeout(function () {
          _this3.hide();
        }, this._timeout);
      }
    }
  },

  methods: {
    hide: function hide() {
      this.canShow = false;
    }
  },

  components: {
    'mod-dialog': __WEBPACK_IMPORTED_MODULE_0__dialog__["a" /* ModDialog */],
    'mod-spin': __WEBPACK_IMPORTED_MODULE_1__spin__["a" /* ModSpin */]
  }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (img, iwidth, iheight, scale) {
  if (scale == 'none') {
    return {};
  }

  var _w = img.width,
      _h = img.height,
      _scale = _h / _w,
      _finalWidth = void 0,
      _finalHeight = void 0,
      moveLeft = void 0,
      moveTop = void 0;

  var maxRatio = Math.max(iwidth / _w, iheight / _h);

  if (scale == 'contain') {
    maxRatio = Math.min(iwidth / _w, iheight / _h);
  }

  _finalWidth = parseInt(maxRatio * _w, 10) || iwidth;
  _finalHeight = parseInt(maxRatio * _h, 10) || iheight;

  moveTop = parseInt((iheight - _finalHeight) / 2, 10);
  moveLeft = parseInt((iwidth - _finalWidth) / 2, 10);

  return {
    width: _finalWidth + 'px',
    height: _finalHeight + 'px',
    marginTop: moveTop + 'px',
    marginLeft: moveLeft + 'px'
  };
});;

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var InjectTools = {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      canShow: false
    };
  },
  created: function created() {
    if (typeof this.value !== 'undefined') {
      this.canShow = this.value;
    }
  },


  watch: {
    value: {
      handler: function handler(val) {
        this.canShow = val;
      },
      immediate: true
    },

    canShow: function canShow() {
      this.$emit('input', this.canShow);

      if (this.canShow) {
        this.$emit('onShow');
      } else {
        this.$emit('onHide');
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (InjectTools);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dialog__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_alert__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_confirm__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_toast__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_carousel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_banner__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_layer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_image__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tab__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_utils_styl__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_utils_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__styles_utils_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__styles_transition_styl__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__styles_transition_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__styles_transition_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_iconfont_iconfont_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_iconfont_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__styles_iconfont_iconfont_css__);



























var Components = {
  ModDialog: __WEBPACK_IMPORTED_MODULE_1__components_dialog__["a" /* ModDialog */],
  ModAlert: __WEBPACK_IMPORTED_MODULE_2__components_alert__["a" /* ModAlert */],
  ModConfirm: __WEBPACK_IMPORTED_MODULE_3__components_confirm__["a" /* ModConfirm */],
  ModToast: __WEBPACK_IMPORTED_MODULE_4__components_toast__["a" /* ModToast */],
  ModButton: __WEBPACK_IMPORTED_MODULE_5__components_button__["a" /* ModButton */],
  ModCarousel: __WEBPACK_IMPORTED_MODULE_6__components_carousel__["a" /* ModCarousel */],
  ModCarouselItem: __WEBPACK_IMPORTED_MODULE_6__components_carousel__["b" /* ModCarouselItem */],
  ModBanner: __WEBPACK_IMPORTED_MODULE_7__components_banner__["a" /* ModBanner */],
  ModLayer: __WEBPACK_IMPORTED_MODULE_8__components_layer__["a" /* ModLayer */],
  ModImage: __WEBPACK_IMPORTED_MODULE_9__components_image__["a" /* ModImage */],
  ModTab: __WEBPACK_IMPORTED_MODULE_10__components_tab__["a" /* ModTab */],
  ModTabItem: __WEBPACK_IMPORTED_MODULE_10__components_tab__["b" /* ModTabItem */]
};

var install = function install(Vue, options) {
  if (install.installed) {
    return;
  }

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(Components).forEach(function (key) {
    return Vue.component(key, Components[key]);
  });

  Vue.prototype.$jsmod = {
    'dialog': __WEBPACK_IMPORTED_MODULE_1__components_dialog__["b" /* default */],
    'alert': __WEBPACK_IMPORTED_MODULE_2__components_alert__["b" /* default */],
    'confirm': __WEBPACK_IMPORTED_MODULE_3__components_confirm__["b" /* default */],
    'toast': __WEBPACK_IMPORTED_MODULE_4__components_toast__["b" /* default */]
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  install: install
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(47);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(4).Object.keys;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21)
  , toLength  = __webpack_require__(70)
  , toIndex   = __webpack_require__(69);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(52);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12)
  , document = __webpack_require__(11).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 59 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(19)
  , createDesc = __webpack_require__(66);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(10)(function(){
  return Object.defineProperty(__webpack_require__(57)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(55);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(59)
  , toIObject    = __webpack_require__(21)
  , arrayIndexOf = __webpack_require__(54)(false)
  , IE_PROTO     = __webpack_require__(67)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(63)
  , enumBugKeys = __webpack_require__(58);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(18)
  , core    = __webpack_require__(4)
  , fails   = __webpack_require__(10);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(68)('keys')
  , uid    = __webpack_require__(73);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(20)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(18);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', {defineProperty: __webpack_require__(19).f});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(71)
  , $keys    = __webpack_require__(64);

__webpack_require__(65)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhOgAKAKIFAERERIWFhWVlZdbW1qampv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAFACwAAAAAOgAKAAADawi6XCUwSheqvY7ozd34YMiMgCOdAnWtGed6YUw2Dxqpq9W6GxyDs4XJBsHlAjsewfcbBBVDojGX5DF/z1JNWjjqCspeoQl8Rm1TFji8HJOd5i2660Wuw1dZnFike6svbmRZZyhpGHdKeSEJACH5BAUKAAUALAAAAAA6AAoAAANrOLpcBTBKJ6q9LujNHflgyIyDI50Ada0Z53phTDYPGqmr1bobHIOzhckGweUEO17A9yMEFUOiMZfkMX/PUk1aOOoKyl6hCXxGbVMWOLwck53mLbrrRa7DV1mcWKR7qy9uZFlnKGkYd0p5IQkAIfkEBQoABQAsAAAAADoACgAAA2tIulw1MEoHqr1O6M1d+GDIjIQjnQN1rRnnemFMNg8aqavVuhscg7OFyQbB5QA7nsD3CwQVQ6Ixl+Qxf89STVo46grKXqEJfEZtUxY4vByTneYtuutFrsNXWZxYpHurL25kWWcoaRh3SnkhCQAh+QQFCgAFACwAAAAAOgAKAAADaxi6XEUwSjeqvQ7ozZ34YMiMgSOdBHWtGed6YUw2Dxqpq9W6GxyDs4XJBsHlBjsewPcTBBVDojGX5DF/z1JNWjjqCspeoQl8Rm1TFji8HJOd5i2660Wuw1dZnFike6svbmRZZyhpGHdKeSEJACH5BAUKAAUALAAAAAA6AAoAAANrKLpcFTBKR6q9bujNHfhgyIyCI50Bda0Z53phTDYPGqmr1bobHIOzhckGweUIO97A9wMEFUOiMZfkMX/PUk1aOOoKyl6hCXxGbVMWOLwck53mLbrrRa7DV1mcWKR7qy9uZFlnKGkYd0p5IQkAOw=="

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(80)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(78)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(116),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(109),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(115),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(111),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(79)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(110),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(113),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(84)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(112),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(114),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(76)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(104),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('mod-dialog', {
    attrs: {
      "width": _vm.width,
      "useMask": false,
      "useIscroll": false,
      "soltBackgroundColor": 'rgba(0, 0, 0, 0)',
      "backgroundColor": 'rgba(0, 0, 0, 0)'
    },
    model: {
      value: (_vm.canShow),
      callback: function($$v) {
        _vm.canShow = $$v
      },
      expression: "canShow"
    }
  }, [_c('div', {
    staticClass: "jsmod-totast"
  }, [(_vm._icon) ? _c('div', {
    staticClass: "jsmod-toast-icon"
  }, [(this.type == 'loading') ? _c('mod-spin', {
    attrs: {
      "size": 24
    }
  }) : _c('i', {
    class: ['iconjsmod ' + _vm._icon]
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "jsmod-toast-content"
  }, [_vm._v("\n      " + _vm._s(_vm._content) + "\n    ")])])])
},staticRenderFns: []}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "jsmod-carousel"
  }, [_c('div', {
    staticClass: "jsmod-carousel-swiper",
    style: ({
      height: _vm.calcHeight
    })
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("ext")], 2)
},staticRenderFns: []}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('mod-carousel', {
    attrs: {
      "ratio": _vm.ratio,
      "loop": true,
      "height": _vm.height,
      "interval": _vm.interval,
      "current": _vm.current
    },
    model: {
      value: (_vm.index),
      callback: function($$v) {
        _vm.index = $$v
      },
      expression: "index"
    }
  }, [_vm._l((_vm.list), function(item, key) {
    return _c('mod-carousel-item', {
      key: key
    }, [_c('a', {
      staticClass: "jsmod-banner-link",
      style: ({
        background: _vm.background
      }),
      attrs: {
        "href": item.href ? item.href : 'javascript:void(0)'
      },
      on: {
        "click": function($event) {
          _vm.onClick(key, item)
        }
      }
    }, [_c('mod-image', {
      attrs: {
        "auto": _vm.calcAuto(key),
        "scale": _vm.scale,
        "height": "100%",
        "src": item.src
      },
      on: {
        "loaded": function () {
          _vm.onLoaded(key)
        }
      }
    }, [(item.text) ? _c('div', {
      staticClass: "jsmod-banner-bottom-text"
    }, [_vm._v(_vm._s(item.text))]) : _vm._e()])], 1)])
  }), _vm._v(" "), _c('div', {
    staticClass: "jsmod-banner-ext",
    slot: "ext"
  }, [_c('span', {
    staticClass: "jsmod-banner-ext-current"
  }, [_vm._v(_vm._s(_vm.index + 1))]), _vm._v(" / " + _vm._s(_vm.list.length) + "\n  ")])], 2)
},staticRenderFns: []}

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports={render:function (){
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['jsmod-image', _vm.className],
    style: (_vm.imageStyle)
  }, [(_vm.showLoading && _vm.isLoading) ? _c('div', {
    staticClass: "jsmod-image-loading",
    style: ([{
      backgroundImage: 'url(' + _vm.loadingUrl + ')'
    }, _vm.loadingStyle])
  }) : _vm._e(), _vm._v(" "), (_vm.isLoading || _vm.isLoaded) ? _c('img', {
    ref: "img",
    class: _vm.imgClass,
    style: (_vm.imageScaleStyle),
    attrs: {
      "src": _vm.src
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.isError) ? _c('div', {
    staticClass: "jsmod-image-error"
  }, [_vm._t("error", [_c('div', {
    staticClass: "jsmod-image-error-inner",
    on: {
      "click": function () {
        this$1.clickReload && this$1.loadImage()
      }
    }
  }, [_c('div', {
    staticClass: "jsmod-image-error-inner-content"
  }, [_c('i', {
    class: ['iconjsmod', 'iconjsmod-guanbi2']
  }), _vm._v("加载失败\n        ")])])])], 2) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('mod-dialog', {
    attrs: {
      "background-color": "rgba(0, 0, 0, 0)",
      "width": _vm.width,
      "isMaskClickHide": false,
      "useIscroll": _vm.useIscroll
    },
    model: {
      value: (_vm.canShow),
      callback: function($$v) {
        _vm.canShow = $$v
      },
      expression: "canShow"
    }
  }, [_c('div', {
    slot: "header"
  }, [_c('div', {
    staticClass: "jsmod-alert-title"
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "jsmod-alert-content"
  }, [_vm._t("default", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])], 2), _vm._v(" "), _c('div', {
    slot: "footer"
  }, [_c('mod-button', {
    attrs: {
      "customStyle": _vm.buttonStyle
    },
    on: {
      "click": _vm.onFooterClick
    }
  }, [_vm._v("\n      " + _vm._s(_vm.btn) + "\n    ")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "jsmod-carousel-item"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.useMask ? 'jsmod-mask' : 'jsmod-mask-none'
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.canShow),
      expression: "canShow"
    }],
    class: [
      'jsmod-mask',
      {
        'jsmod-mask-none': !_vm.useMask
      },
      _vm.direction == 'vertical' ? 'jsmod-layer-vertical' : 'jsmod-layer-horizontal',
      'jsmod-layer-vertical-' + _vm.verticalPosition,
      'jsmod-layer-horizontal-' + _vm.horizontalPosition
    ],
    on: {
      "click": _vm.maskHide
    }
  }, [_c('div', {
    ref: "slotContent",
    class: ['jsmod-layer-content'],
    style: (_vm.layerStyle)
  }, [_c('div', {
    ref: "slotInner"
  }, [_vm._t("default")], 2)])])])
},staticRenderFns: []}

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.useMask ? 'jsmod-mask' : 'jsmod-mask-none'
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.canShow),
      expression: "canShow"
    }],
    class: ['jsmod-mask', {
      'jsmod-mask-none': !_vm.useMask
    }],
    on: {
      "touchmove": _vm.onTouchmove,
      "click": _vm.maskHide
    }
  }, [_c('div', {
    ref: "htmlContent",
    class: ['jsmod-dialog-html', {
      'jsmod-dialog-html-none-mask': !_vm.useMask
    }],
    style: (_vm.htmlStyle)
  }, [_c('div', {
    ref: "headerContent",
    staticClass: "jsmod-dialog-solt-header"
  }, [_vm._t("header", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.header)
    }
  })])], 2), _vm._v(" "), _c('div', {
    ref: "soltContent",
    staticClass: "jsmod-dialog-solt-content",
    style: ({
      overflow: _vm.useIscroll && _vm.useMask ? 'hidden' : 'auto',
      backgroundColor: _vm.soltBackgroundColor
    })
  }, [_c('div', {
    ref: "soltContentInner"
  }, [_vm._t("default", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.html)
    }
  })])], 2)]), _vm._v(" "), _c('div', {
    ref: "footerContent"
  }, [_vm._t("footer", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.footer)
    }
  })])], 2)])])])
},staticRenderFns: []}

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "jsmod-tab-item"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['jsmod-spin-wrap', 'jsmod-loading', {
      'jsmod-spin-wrap-inline': _vm.inline
    }],
    style: (_vm.getOutStyle)
  }, [_c('svg', {
    style: (_vm.getStyle),
    attrs: {
      "t": "1496912495627",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "p-id": "3668"
    }
  }, [_c('path', {
    attrs: {
      "d": "M515.698303 969.127499c-97.187972 0-191.279691-31.134554-270.406182-90.479422-96.67193-72.245926-159.45708-178.206619-176.658492-297.928439s13.245087-238.9276 85.663027-335.59953C304.120947 45.239711 588.288258 4.644381 787.99664 154.124643c83.770872 62.78515 143.459768 153.092558 168.2298 254.580884 4.300353 17.373425-6.364522 34.918864-23.737947 39.047203-17.373425 4.128339-34.918864-6.364522-39.047203-23.737947-21.157736-86.867126-72.417941-164.44549-144.147825-218.285906C578.139425 77.750378 334.395431 112.669242 206.244919 283.823282c-62.097094 82.910801-88.243239 185.087183-73.450025 287.607593s68.461616 193.34386 151.372417 255.440954c171.326054 128.322526 414.898035 93.403662 543.220561-77.922392 33.542752-44.895683 56.592642-95.123803 68.289602-149.308248 3.78431-17.373425 21.157736-28.554342 38.359147-24.770032 17.373425 3.78431 28.554342 20.985721 24.770032 38.359147-13.761129 63.473207-40.59533 122.130018-79.814547 174.422308-72.417941 96.67193-178.378633 159.45708-298.100454 176.658492C559.217873 967.579372 537.372081 969.127499 515.698303 969.127499z",
      "p-id": "3669"
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "jsmod-tab"
  }, [_c('div', {
    class: ['jsmod-tab-card', _vm.tabWrapClass]
  }, _vm._l((_vm.tabs), function(item, idx) {
    return _c('div', {
      class: ['jsmod-tab-card-item', _vm.tabClass],
      on: {
        "click": function($event) {
          _vm.currentInner = idx
        }
      }
    }, [_vm._t("tab", [_c('div', {
      class: {
        'jsmod-tab-card-item-default': true, 'jsmod-tab-card-item-default-active': idx == _vm.currentInner
      }
    }, [_vm._v("\n          " + _vm._s(item.label) + "\n        ")])], {
      label: item.label,
      data: item.data,
      active: idx == _vm.currentInner
    })], 2)
  })), _vm._v(" "), _c('div', {
    ref: "container",
    class: ['jsmod-tab-container', 'jsmod-carousel-swiper'],
    style: (_vm.containerStyle)
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('mod-dialog', {
    attrs: {
      "background-color": "rgba(0, 0, 0, 0)",
      "width": _vm.width,
      "isMaskClickHide": false,
      "useIscroll": _vm.useIscroll
    },
    model: {
      value: (_vm.canShow),
      callback: function($$v) {
        _vm.canShow = $$v
      },
      expression: "canShow"
    }
  }, [_c('div', {
    slot: "header"
  }, [_c('div', {
    staticClass: "jsmod-confirm-title"
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "jsmod-confirm-content"
  }, [_vm._t("default", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])], 2), _vm._v(" "), _c('div', {
    slot: "footer"
  }, [_c('div', {
    staticClass: "jsmod-confirm-footer"
  }, [_c('mod-button', {
    attrs: {
      "customStyle": _vm.buttonNoStyle
    },
    on: {
      "click": _vm._onBtnNo
    }
  }, [_vm._v("\n        " + _vm._s(_vm.btnNo) + "\n      ")]), _vm._v(" "), _c('mod-button', {
    attrs: {
      "customStyle": _vm.buttonOkStyle
    },
    on: {
      "click": _vm._onBtnOk
    }
  }, [_vm._v("\n        " + _vm._s(_vm.btnOk) + "\n      ")])], 1)])])
},staticRenderFns: []}

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    class: _vm.buttonClass,
    style: ([_vm._style, _vm.customStyle]),
    attrs: {
      "href": _vm.href
    },
    on: {
      "touchstart": function($event) {
        _vm.isPress = true
      },
      "touchend": function($event) {
        _vm.isPress = false
      },
      "click": _vm._onClick
    }
  }, [(_vm.status == 'loading') ? _c('mod-spin', {
    staticClass: "jsmod-button-spin"
  }) : _vm._e(), _vm._v(" "), (_vm.status != 'loading') ? _c('span', {
    staticClass: "jsmod-button-text"
  }, [_vm._t("default")], 2) : _c('span', {
    staticClass: "jsmod-button-text-loading"
  }, [_vm._t("loading")], 2)], 1)
},staticRenderFns: []}

/***/ })
/******/ ]);
});
//# sourceMappingURL=jsmod.mobile.js.map