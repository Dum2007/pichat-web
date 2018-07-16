var PriorityQueue =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Priority;
(function (Priority) {
    Priority[Priority["LOW"] = 0] = "LOW";
    Priority[Priority["MEDIUM"] = 5] = "MEDIUM";
    Priority[Priority["HIGH"] = 9] = "HIGH";
})(Priority || (Priority = {}));
exports.default = Priority;
//# sourceMappingURL=Priority.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Priority_1 = __webpack_require__(0);
var Item = (function () {
    function Item() {
        this.fn = function () { };
        this.priority = Priority_1.default.MEDIUM;
        this.reject = function () { };
        this.resolve = function () { };
        this.retry = Infinity;
        this.timestamp = 0;
    }
    return Item;
}());
exports.default = Item;
//# sourceMappingURL=Item.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(1);
exports.Item = Item_1.default;
var Priority_1 = __webpack_require__(0);
exports.Priority = Priority_1.default;
var PriorityQueue_1 = __webpack_require__(3);
exports.PriorityQueue = PriorityQueue_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(1);
var Priority_1 = __webpack_require__(0);
var PriorityQueue = (function () {
    function PriorityQueue(config) {
        this.config = {
            comparator: function (a, b) {
                if (a.priority === b.priority) {
                    return a.timestamp - b.timestamp;
                }
                return b.priority - a.priority;
            },
            maxRetries: Infinity,
            retryDelay: 1000,
        };
        this.isPending = false;
        this.queue = [];
        this.config = Object.assign(this.config, config);
    }
    PriorityQueue.prototype.add = function (thunkedPromise, priority, label) {
        var _this = this;
        if (priority === void 0) { priority = Priority_1.default.MEDIUM; }
        if (typeof thunkedPromise !== 'function') {
            thunkedPromise = function () { return thunkedPromise; };
        }
        return new Promise(function (resolve, reject) {
            var queueObject = new Item_1.default();
            queueObject.fn = thunkedPromise;
            queueObject.label = label;
            queueObject.priority = priority;
            queueObject.reject = reject;
            queueObject.resolve = resolve;
            queueObject.retry = Number(_this.config.maxRetries) >= 0 ? Number(_this.config.maxRetries) : queueObject.retry;
            queueObject.timestamp = Date.now() + _this.size;
            _this.queue.push(queueObject);
            _this.queue.sort(_this.config.comparator);
            _this.run();
        });
    };
    PriorityQueue.prototype.delete = function (label) {
        this.queue = this.queue.filter(function (item) { return item.label !== label; });
    };
    PriorityQueue.prototype.deleteAll = function () {
        this.queue = [];
    };
    Object.defineProperty(PriorityQueue.prototype, "all", {
        get: function () {
            return this.queue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PriorityQueue.prototype, "first", {
        get: function () {
            return this.queue[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PriorityQueue.prototype, "last", {
        get: function () {
            return this.queue[this.queue.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PriorityQueue.prototype, "size", {
        get: function () {
            return this.queue.length;
        },
        enumerable: true,
        configurable: true
    });
    PriorityQueue.prototype.resolveItems = function () {
        var _this = this;
        var queueObject = this.first;
        if (!queueObject) {
            return;
        }
        Promise.resolve(queueObject.fn())
            .then(function (result) {
            return { shouldContinue: true, wrappedResolve: function () { return queueObject.resolve(result); } };
        })
            .catch(function (error) {
            if (queueObject.retry > 0) {
                queueObject.retry -= 1;
                setTimeout(function () { return _this.resolveItems(); }, _this.config.retryDelay || 1000);
                return { shouldContinue: false };
            }
            else {
                queueObject.reject(error);
                return { shouldContinue: true };
            }
        })
            .then(function (_a) {
            var shouldContinue = _a.shouldContinue, wrappedResolve = _a.wrappedResolve;
            if (shouldContinue) {
                if (wrappedResolve) {
                    wrappedResolve();
                }
                _this.isPending = false;
                var nextItem = _this.queue.shift();
                if (nextItem) {
                    _this.resolveItems();
                }
            }
        });
    };
    PriorityQueue.prototype.run = function () {
        if (!this.isPending && this.first) {
            this.isPending = true;
            this.resolveItems();
        }
    };
    PriorityQueue.prototype.toString = function () {
        return this.queue
            .map(function (item, index) {
            return "\"" + index + "\": " + item.fn.toString().replace(/(\r\n|\n|\r|\s+)/gm, '');
        })
            .join('\r\n');
    };
    return PriorityQueue;
}());
exports.default = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=priority-queue.bundle.js.map