/******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************!*\
  !*** ./src/main/resources/static/entry/entry.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hello = __webpack_require__(/*! ./hello */ 2);
	
	var _hello2 = _interopRequireDefault(_hello);
	
	var _developer = __webpack_require__(/*! ./developer */ 1);
	
	var _developer2 = _interopRequireDefault(_developer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by KimYJ on 2017-03-04.
	 */
	var main = { hello: _hello2.default };
	//main.word = world;
	
	var dev = new _developer2.default('hansung', 'dell', 'es6', [1, 2, 3, 4]);
	main.dev = dev.getDeveloperItem();
	
	document.write('' + _hello2.default);
	document.write(main.dev);
	document.write('set 이전의 project = ' + dev.project);
	dev.project = 'SpringBoot-Webpack';
	document.write('set 이후의 project = ' + dev.project);
	
	console.log('reduce result = ' + dev.reduceArrayProject());
	console.log('generator result = ' + dev.doGenerator());
	
	exports.default = main.dev;

/***/ },
/* 1 */
/*!******************************************************!*\
  !*** ./src/main/resources/static/entry/developer.js ***!
  \******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var test1 = 'test1';
	var test2 = 'test2';
	window.test5 = test1; //window 객체만 전역으로 들어간다.(this는 이미 있는 객체만 된다)
	
	var Developer = function () {
	    function Developer(keyboard, monitor) {
	        var project = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';
	        var arrayProject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
	
	        _classCallCheck(this, Developer);
	
	        this._keyboard = keyboard;
	        this._monitor = monitor;
	        this._project = project;
	        this._arrayProject = arrayProject;
	        this.initBtn();
	    }
	
	    _createClass(Developer, [{
	        key: 'getDeveloperItem',
	        value: function getDeveloperItem() {
	            var message = 'My keyboard is ' + this._keyboard + ' and my monitor is ' + this._monitor;
	            return message;
	        }
	    }, {
	        key: 'reduceArrayProject',
	        value: function reduceArrayProject() {
	            return this._arrayProject.reduce(function (a, b) {
	                return a + b;
	            });
	        }
	    }, {
	        key: 'initBtn',
	        value: function initBtn() {
	            //버튼 이벤트 하나의 메소드로 묶을 수 있음
	            var btn = document.querySelector('button');
	            btn.addEventListener('click', function (e) {
	                //e => 마우스 이벤트
	                alert('success btn!');
	            });
	        }
	
	        /*doGenerator() { //제너레이터 적용
	            let self = this;
	            let generator  = { *x() { return yield self._arrayProject; } };
	        }*/
	
	        /*[Symbol.iterator]() { //제너레이터용 클래스에서 사용할 때
	            var index = 0;
	            var data  = this._arrayProject;
	             return {
	                next: () => ({ value: data[++index], done: !(index in data) })
	            };
	        };*/
	
	    }, {
	        key: 'project',
	        get: function get() {
	            return this._project;
	        },
	        set: function set(value) {
	            this._project = value;
	        }
	    }]);
	
	    return Developer;
	}();
	
	exports.default = Developer;

/***/ },
/* 2 */
/*!**************************************************!*\
  !*** ./src/main/resources/static/entry/hello.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by KimYJ on 2017-03-04.
	 */
	exports.default = 'ES6 Test!';

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map