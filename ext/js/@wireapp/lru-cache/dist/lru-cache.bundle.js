/*! @wireapp/lru-cache v2.1.5 */
var LRUCache =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LRUCache = (function () {
    function LRUCache(capacity) {
        if (capacity === void 0) { capacity = 100; }
        this.capacity = capacity;
        this.map = {};
        this.head = null;
        this.end = null;
    }
    LRUCache.prototype.delete = function (key) {
        var node = this.map[key];
        if (node) {
            this.remove(node);
            delete this.map[node.key];
            return true;
        }
        return false;
    };
    LRUCache.prototype.get = function (key) {
        var node = this.map[key];
        if (node) {
            this.remove(node);
            this.setHead(node);
            return node.value;
        }
        return undefined;
    };
    LRUCache.prototype.getAll = function () {
        var _this = this;
        return Object.keys(this.map).map(function (id) {
            var node = _this.map[id];
            return _a = {},
                _a[id] = node.value,
                _a;
            var _a;
        });
    };
    LRUCache.prototype.keys = function () {
        var keys = [];
        var entry = this.head;
        while (entry) {
            keys.push(entry.key);
            entry = entry.next;
        }
        return keys;
    };
    LRUCache.prototype.latest = function () {
        if (this.head) {
            return this.head.value;
        }
        return null;
    };
    LRUCache.prototype.oldest = function () {
        if (this.end) {
            return this.end.value;
        }
        return null;
    };
    LRUCache.prototype.remove = function (node) {
        if (node.previous) {
            node.previous.next = node.next;
        }
        else {
            this.head = node.next;
        }
        if (node.next !== null) {
            node.next.previous = node.previous;
        }
        else {
            this.end = node.previous;
        }
        return node;
    };
    LRUCache.prototype.set = function (key, value) {
        var old = this.map[key];
        var removedNode;
        if (old) {
            old.value = value;
            removedNode = this.remove(old);
            this.setHead(old);
            return removedNode.value;
        }
        else {
            var created = {
                key: key,
                value: value,
                next: null,
                previous: null,
            };
            if (Object.keys(this.map).length >= this.capacity) {
                if (this.end) {
                    delete this.map[this.end.key];
                    removedNode = this.remove(this.end);
                }
            }
            this.setHead(created);
            this.map[key] = created;
            if (removedNode) {
                return removedNode.value;
            }
        }
        return undefined;
    };
    LRUCache.prototype.setHead = function (node) {
        node.next = this.head;
        node.previous = null;
        if (this.head) {
            this.head.previous = node;
        }
        this.head = node;
        if (!this.end) {
            this.end = this.head;
        }
    };
    LRUCache.prototype.size = function () {
        return Object.keys(this.map).length;
    };
    LRUCache.prototype.toString = function () {
        var string = '(newest) ';
        var entry = this.head;
        while (entry) {
            string += String(entry.key) + ":" + entry.value;
            entry = entry.next;
            if (entry) {
                string += ' > ';
            }
        }
        return string + " (oldest)";
    };
    return LRUCache;
}());
exports.default = LRUCache;
//# sourceMappingURL=LRUCache.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=lru-cache.bundle.js.map