/*! @wireapp/store-engine v0.9.0 */
var StoreEngine =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathValidationError_1 = __webpack_require__(13);
exports.PathValidationError = PathValidationError_1.default;
var RecordAlreadyExistsError_1 = __webpack_require__(4);
exports.RecordAlreadyExistsError = RecordAlreadyExistsError_1.default;
var RecordNotFoundError_1 = __webpack_require__(5);
exports.RecordNotFoundError = RecordNotFoundError_1.default;
var RecordTypeError_1 = __webpack_require__(6);
exports.RecordTypeError = RecordTypeError_1.default;
var UnsupportedError_1 = __webpack_require__(14);
exports.UnsupportedError = UnsupportedError_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var store_1 = __webpack_require__(9);
var engine_1 = __webpack_require__(15);
var error_1 = __webpack_require__(0);
module.exports = {
    Store: {
        ExpiredBundle: store_1.ExpiredBundle,
        RecordAlreadyExistsError: error_1.RecordAlreadyExistsError,
        TransientBundle: store_1.TransientBundle,
        TransientStore: store_1.TransientStore,
    },
    error: {
        PathValidationError: error_1.PathValidationError,
        RecordAlreadyExistsError: error_1.RecordAlreadyExistsError,
        RecordNotFoundError: error_1.RecordNotFoundError,
        RecordTypeError: error_1.RecordTypeError,
        UnsupportedError: error_1.UnsupportedError,
    },
    FileEngine: engine_1.FileEngine,
    FileSystemEngine: engine_1.FileSystemEngine,
    IndexedDBEngine: engine_1.IndexedDBEngine,
    MemoryEngine: engine_1.MemoryEngine,
    LocalStorageEngine: engine_1.LocalStorageEngine,
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isBrowser() {
    return typeof window !== 'undefined';
}
exports.isBrowser = isBrowser;
//# sourceMappingURL=EnvironmentUtil.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TransientBundle = (function () {
    function TransientBundle() {
        this.expires = 0;
    }
    return TransientBundle;
}());
exports.default = TransientBundle;
//# sourceMappingURL=TransientBundle.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RecordAlreadyExistsError = (function (_super) {
    __extends(RecordAlreadyExistsError, _super);
    function RecordAlreadyExistsError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Object.setPrototypeOf(_this, RecordAlreadyExistsError.prototype);
        _this.code = 1;
        _this.message = message;
        _this.name = _this.constructor.name;
        _this.stack = new Error().stack;
        return _this;
    }
    return RecordAlreadyExistsError;
}(Error));
exports.default = RecordAlreadyExistsError;
//# sourceMappingURL=RecordAlreadyExistsError.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RecordNotFoundError = (function (_super) {
    __extends(RecordNotFoundError, _super);
    function RecordNotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Object.setPrototypeOf(_this, RecordNotFoundError.prototype);
        _this.code = 2;
        _this.message = message;
        _this.name = _this.constructor.name;
        _this.stack = new Error().stack;
        return _this;
    }
    return RecordNotFoundError;
}(Error));
exports.default = RecordNotFoundError;
//# sourceMappingURL=RecordNotFoundError.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RecordTypeError = (function (_super) {
    __extends(RecordTypeError, _super);
    function RecordTypeError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Object.setPrototypeOf(_this, RecordTypeError.prototype);
        _this.code = 3;
        _this.message = message;
        _this.name = _this.constructor.name;
        _this.stack = new Error().stack;
        return _this;
    }
    return RecordTypeError;
}(Error));
exports.default = RecordTypeError;
//# sourceMappingURL=RecordTypeError.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*! bro-fs v0.2.2 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fs"] = factory();
	else
		root["fs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Utils
 */

exports.promiseCall = function (obj, method) {
  if (!obj) {
    throw new Error('Can\'t call promisified method \'' + method + '\' of ' + obj);
  }
  var args = [].slice.call(arguments, 2);
  return new Promise(function (resolve, reject) {
    // create error before call to capture stack
    var errback = getErrback(new Error(), method, args, reject);
    var fullArgs = args.concat([resolve, errback]);
    return obj[method].apply(obj, fullArgs);
  });
};

exports.parsePath = function (path) {
  var parts = exports.splitPath(path);
  var fileName = parts.pop();
  var dirPath = parts.join('/');
  return { dirPath: dirPath, fileName: fileName };
};

exports.splitPath = function () {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  path = path.replace(/^\.\//, ''); // remove './' at start
  if (path.length > 1 && path.endsWith('/')) {
    throw new Error('Path can not end with \'/\'');
  }
  return path.split('/').filter(Boolean);
};

/**
 * Convert DOMException to regular error to have normal stack trace
 * Also add some details to error message
 */
function getErrback(err, method, args, reject) {
  return function (e) {
    var argsStr = '';
    try {
      argsStr = JSON.stringify(args);
    } catch (ex) {
      argsStr = args.join(', ');
    }
    err.name = e.name;
    err.message = e.message + ' Call: ' + method + '(' + argsStr + ')';
    reject(err);
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Errors
 */

exports.isNotFoundError = function (e) {
  return e && e.name === 'NotFoundError';
};

exports.isTypeMismatchError = function (e) {
  return e && e.name === 'TypeMismatchError';
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Store link to fs root (singleton)
 */

var root = null;
var type = null;

exports.get = function () {
  if (!root) {
    throw new Error('Filesystem not initialized.');
  } else {
    return root;
  }
};

exports.set = function (newRoot, newType) {
  root = newRoot;
  type = newType;
};

exports.getType = function () {
  return type;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Operations with directories
 */

var utils = __webpack_require__(0);
var errors = __webpack_require__(1);
var root = __webpack_require__(2);

/**
 * Returns DirectoryEntry by path
 * If options.create = true will create missing directories
 *
 * @param {String} path
 * @param {Object} options
 * @param {Boolean} options.create
 * @returns {Promise}
 */
exports.get = function (path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (path && typeof path !== 'string') {
    return path.isDirectory ? Promise.resolve(path) : Promise.reject(new DOMError('TypeMismatchError', 'Expected directory but got file'));
  }
  var parts = utils.splitPath(path);
  return parts.reduce(function (res, dirName) {
    return res.then(function (dir) {
      var task = getChildDir(dir, dirName);
      if (options.create) {
        task = task.catch(function (e) {
          return errors.isNotFoundError(e) ? createChildDir(dir, dirName) : Promise.reject(e);
        });
      }
      return task;
    });
  }, Promise.resolve(root.get()));
};

/**
 * Reads dir entries
 *
 * @param {Object} dir
 */
exports.read = function (dir) {
  return utils.promiseCall(dir.createReader(), 'readEntries');
};

/**
 * Reads dir entries deeply
 *
 * @param {Object} dir
 * @returns {Promise<Array>}
 */
exports.readDeep = function (dir) {
  return exports.read(dir).then(function (entries) {
    var tasks = entries.map(function (entry) {
      if (entry.isDirectory) {
        return exports.readDeep(entry).then(function (subEntries) {
          return Object.assign(entry, { children: subEntries });
        });
      } else {
        return Promise.resolve(entry);
      }
    });
    return Promise.all(tasks);
  });
};

function createChildDir(parent, dirName) {
  return utils.promiseCall(parent, 'getDirectory', dirName, { create: true, exclusive: false });
}

function getChildDir(parent, dirName) {
  return utils.promiseCall(parent, 'getDirectory', dirName, { create: false });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * HTML5 Filesystem API
 * @module fs
 */

var utils = __webpack_require__(0);
var errors = __webpack_require__(1);
var root = __webpack_require__(2);
var file = __webpack_require__(5);
var directory = __webpack_require__(3);
var stat = __webpack_require__(6);
var quota = __webpack_require__(7);

/**
 * Is filesystem API supported by current browser
 *
 * @returns {Boolean}
 */
exports.isSupported = function () {
  return Boolean(window.webkitRequestFileSystem);
};

/**
 * Init filesystem
 *
 * @param {Object} [options]
 * @param {Number} [options.type=window.PERSISTENT] window.PERSISTENT | window.TEMPORARY
 * @param {Number} [options.bytes=1Mb]
 * @param {Boolean} [options.requestQuota=true] show request quota popup for PERSISTENT type.
 * (`false` for Chrome extensions with `unlimitedStorage` permission)
 * @returns {Promise}
 */
exports.init = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var type = options.hasOwnProperty('type') ? options.type : window.PERSISTENT;
  var bytes = options.bytes || 1024 * 1024;
  assertType(type);
  var requestQuota = type === window.PERSISTENT ? options.requestQuota === undefined ? true : options.requestQuota : false;
  return Promise.resolve().then(function () {
    return requestQuota ? quota.requestPersistent(bytes) : bytes;
  })
  // webkitRequestFileSystem always returns fs even if quota not granted
  .then(function (grantedBytes) {
    return utils.promiseCall(window, 'webkitRequestFileSystem', type, grantedBytes);
  }).then(function (fs) {
    root.set(fs.root, type);
    return fs;
  });
};

/**
 * Gets used and granted bytes
 *
 * @returns {Promise<{usedBytes, grantedBytes}>}
 */
exports.usage = function () {
  return quota.usage(root.getType());
};

/**
 * Returns root directory
 *
 * @returns {FileSystemDirectoryEntry}
 */
exports.getRoot = function () {
  return root.get();
};

/**
 * Reads file content
 *
 * @param {String|FileSystemFileEntry} path
 * @param {Object} [options]
 * @param {String} [options.type='Text'] how content should be read: Text|ArrayBuffer|BinaryString|DataURL
 * @returns {Promise<String>}
 */
exports.readFile = function (path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return file.get(path).then(function (fileEntry) {
    return file.read(fileEntry, options);
  });
};

/**
 * Writes data to file
 *
 * @param {String} path
 * @param {String|Blob|File|ArrayBuffer} data
 * @returns {Promise}
 */
exports.writeFile = function (path, data) {
  return file.get(path, { create: true, overwrite: true }).then(function (fileEntry) {
    return file.write(fileEntry, data, { append: false });
  });
};

/**
 * Appends data to file
 *
 * @param {String|FileSystemFileEntry} path
 * @param {String|Blob|File|ArrayBuffer} data
 * @returns {Promise}
 */
exports.appendFile = function (path, data) {
  return file.get(path, { create: true, overwrite: false }).then(function (fileEntry) {
    return file.write(fileEntry, data, { append: true });
  });
};

/**
 * Removes file
 *
 * @param {String|FileSystemFileEntry} path
 * @returns {Promise}
 */
exports.unlink = function (path) {
  return file.get(path).then(function (fileEntry) {
    return utils.promiseCall(fileEntry, 'remove');
  }, function (e) {
    return errors.isNotFoundError(e) ? Promise.resolve(false) : Promise.reject(e);
  });
};

/**
 * Renames file or directory
 *
 * @param {String|FileSystemEntry} oldPath
 * @param {String} newPath
 * @param {Object} [options]
 * @param {Boolean} [options.create=false] create missing directories
 * @returns {Promise<FileSystemEntry>}
 */
exports.rename = function (oldPath, newPath) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return moveOrCopy(oldPath, newPath, 'moveTo', options);
};

/**
 * Copies file or directory
 *
 * @param {String|FileSystemEntry} oldPath
 * @param {String} newPath
 * @param {Object} [options]
 * @param {Boolean} [options.create=false] create missing directories
 * @returns {Promise<FileSystemEntry>}
 */
exports.copy = function (oldPath, newPath) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return moveOrCopy(oldPath, newPath, 'copyTo', options);
};

/**
 * Removes directory recursively
 *
 * @param {String|FileSystemDirectoryEntry} path
 * @returns {Promise}
 */
exports.rmdir = function (path) {
  return directory.get(path).then(function (dir) {
    return dir === root.get() ? Promise.reject('Can not remove root. Use clear() to clear fs.') : utils.promiseCall(dir, 'removeRecursively');
  }, function (e) {
    return errors.isNotFoundError(e) ? Promise.resolve(false) : Promise.reject(e);
  });
};

/**
 * Creates new directory. If directory already exists - it will not be overwritten.
 *
 * @param {String} path
 * @returns {Promise<FileSystemDirectoryEntry>}
 */
exports.mkdir = function (path) {
  return directory.get(path, { create: true });
};

/**
 * Checks that file or directory exists by provided path
 *
 * @param {String} path
 * @returns {Promise<Boolean>}
 */
exports.exists = function (path) {
  return exports.getEntry(path).then(function () {
    return true;
  }, function (e) {
    return errors.isNotFoundError(e) ? false : Promise.reject(e);
  });
};

/**
 * Gets info about file or directory
 *
 * @param {String|FileSystemEntry} path
 * @returns {Promise<StatObject>}
 */
exports.stat = function (path) {
  return exports.getEntry(path).then(function (entry) {
    return stat.get(entry);
  });
};

/**
 * Reads directory content
 *
 * @param {String|FileSystemDirectoryEntry} path
 * @param {Object} [options]
 * @param {Boolean} [options.deep=false] read recursively and attach data as `children` property
 * @returns {Promise<Array<FileSystemEntry>>}
 */
exports.readdir = function (path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return directory.get(path).then(function (dir) {
    return options.deep ? directory.readDeep(dir) : directory.read(dir);
  });
};

/**
 * Clears whole filesystem
 * @returns {Promise}
 */
exports.clear = function () {
  return exports.readdir('/').then(function (entries) {
    var tasks = entries.map(function (entry) {
      return entry.isDirectory ? utils.promiseCall(entry, 'removeRecursively') : utils.promiseCall(entry, 'remove');
    });
    return Promise.all(tasks);
  });
};

/**
 * Gets URL for path
 *
 * @param {String|FileSystemEntry} path
 * @returns {String}
 */
exports.getUrl = function (path) {
  return exports.getEntry(path).then(function (entry) {
    return entry.toURL();
  });
};

/**
 * Gets file or directory
 *
 * @param {String|FileSystemEntry} path
 * @returns {Promise<FileSystemEntry>}
 */
exports.getEntry = function (path) {
  return file.get(path).catch(function (e) {
    return errors.isTypeMismatchError(e) ? directory.get(path) : Promise.reject(e);
  });
};

function moveOrCopy(oldPath, newPath, method, options) {
  if (oldPath === newPath) {
    // runtyper-disable-line
    return Promise.resolve();
  }

  var _utils$parsePath = utils.parsePath(newPath),
      newParentDirPath = _utils$parsePath.dirPath,
      newName = _utils$parsePath.fileName;

  return Promise.all([exports.getEntry(oldPath), directory.get(newParentDirPath, options)]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        enrty = _ref2[0],
        newParent = _ref2[1];

    return utils.promiseCall(enrty, method, newParent, newName);
  });
}

function assertType(type) {
  if (type !== window.PERSISTENT && type !== window.TEMPORARY) {
    throw new Error('Unknown storage type ' + type);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Operations with files
 */

var utils = __webpack_require__(0);
var errors = __webpack_require__(1);
var directory = __webpack_require__(3);

/**
 * Returns FileEntry by path
 * If options.create = true will create missing directories and file
 *
 * @param {String|FileSystemFileEntry} path
 * @param {Object} [options]
 * @param {Boolean} [options.create]
 * @param {Boolean} [options.overwrite]
 * @returns {Promise}
 */
exports.get = function (path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (path && typeof path !== 'string') {
    return path.isFile ? Promise.resolve(path) : Promise.reject(new DOMError('TypeMismatchError', 'Expected file but got directory'));
  }

  var _utils$parsePath = utils.parsePath(path),
      dirPath = _utils$parsePath.dirPath,
      fileName = _utils$parsePath.fileName;

  return Promise.resolve().then(function () {
    return directory.get(dirPath, options);
  }).then(function (dir) {
    if (options.create) {
      if (options.overwrite) {
        return createChildFile(dir, fileName);
      } else {
        return getChildFile(dir, fileName).catch(function (e) {
          return errors.isNotFoundError(e) ? createChildFile(dir, fileName) : Promise.reject(e);
        });
      }
    } else {
      return getChildFile(dir, fileName);
    }
  });
};

/**
 * Writes to fileEntry using fileWriter
 *
 * @param {Object} fileEntry
 * @param {String} data
 * @param {Object} [options]
 * @param {Boolean} [options.append]
 * @param {String} [options.type] mimetype
 * @returns {Promise}
 */
exports.write = function (fileEntry, data) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return utils.promiseCall(fileEntry, 'createWriter').then(function (fileWriter) {
    return new Promise(function (resolve, reject) {
      if (options.append) {
        fileWriter.seek(fileWriter.length);
        fileWriter.onwriteend = resolve;
      } else {
        var truncated = false;
        fileWriter.onwriteend = function () {
          if (!truncated) {
            truncated = true;
            this.truncate(this.position);
          } else {
            resolve();
          }
        };
      }
      fileWriter.onerror = reject;
      var blob = new Blob([data], { type: getMimeTypeByData(data) });
      fileWriter.write(blob);
    });
  }).then(function () {
    return fileEntry;
  });
};

/**
 * Reads from fileEntry
 *
 * @param {Object} fileEntry
 * @param {Object} [options]
 * @param {String} [options.type] how content should be read
 * @returns {Promise<String>}
 */
exports.read = function (fileEntry) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return utils.promiseCall(fileEntry, 'file').then(function (file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        return resolve(reader.result);
      };
      reader.onerror = function () {
        return reject(reader.error);
      };
      // see: https://developer.mozilla.org/ru/docs/Web/API/FileReader
      readAs(options.type, reader, file);
    });
  });
};

function getMimeTypeByData(data) {
  if (typeof data === 'string') {
    return 'text/plain';
  } else {
    return 'application/octet-binary';
  }
}

function readAs(type, reader, file) {
  switch (type) {
    case 'ArrayBuffer':
      return reader.readAsArrayBuffer(file);
    case 'BinaryString':
      return reader.readAsBinaryString(file);
    case 'DataURL':
      return reader.readAsDataURL(file);
    case 'Text':
    default:
      return reader.readAsText(file);
  }
}

function createChildFile(parent, fileName) {
  return utils.promiseCall(parent, 'getFile', fileName, { create: true, exclusive: false });
}

function getChildFile(parent, fileName) {
  return utils.promiseCall(parent, 'getFile', fileName, { create: false });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Stat for file or directory
 */

var utils = __webpack_require__(0);

/**
 * Gets stat info
 *
 * @param {FileSystemEntry} entry
 * @returns {Promise<StatObject>}
 */
exports.get = function (entry) {
  return utils.promiseCall(entry, 'getMetadata').then(function (metadata) {
    return {
      isFile: entry.isFile,
      isDirectory: entry.isDirectory,
      name: entry.name,
      fullPath: entry.fullPath,
      modificationTime: metadata.modificationTime,
      size: metadata.size
    };
  });
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Requesting quota
 */

var utils = __webpack_require__(0);

exports.requestPersistent = function (bytes) {
  var storage = getStorageByType(window.PERSISTENT);
  return utils.promiseCall(storage, 'requestQuota', bytes).then(function (grantedBytes) {
    return grantedBytes > 0 ? Promise.resolve(grantedBytes) : Promise.reject('Quota not granted');
  });
};

exports.usage = function (type) {
  var storage = getStorageByType(type);
  return utils.promiseCall(storage, 'queryUsageAndQuota').then(function (usedBytes, grantedBytes) {
    return { usedBytes: usedBytes, grantedBytes: grantedBytes };
  });
};

function getStorageByType(type) {
  return type === window.PERSISTENT ? navigator.webkitPersistentStorage : navigator.webkitTemporaryStorage;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=bro-fs.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = Dexie;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpiredBundle_1 = __webpack_require__(10);
exports.ExpiredBundle = ExpiredBundle_1.default;
var TransientBundle_1 = __webpack_require__(3);
exports.TransientBundle = TransientBundle_1.default;
var TransientStore_1 = __webpack_require__(11);
exports.TransientStore = TransientStore_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpiredBundle = (function () {
    function ExpiredBundle() {
        this.cacheKey = '';
        this.primaryKey = '';
    }
    return ExpiredBundle;
}());
exports.default = ExpiredBundle;
//# sourceMappingURL=ExpiredBundle.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TransientBundle_1 = __webpack_require__(3);
var events_1 = __webpack_require__(12);
var error_1 = __webpack_require__(0);
var TransientStore = (function (_super) {
    __extends(TransientStore, _super);
    function TransientStore(engine) {
        var _this = _super.call(this) || this;
        _this.engine = engine;
        _this.bundles = {};
        _this.tableName = '';
        return _this;
    }
    TransientStore.prototype.init = function (tableName) {
        var _this = this;
        this.tableName = tableName;
        var cacheKeys = [];
        return this.engine
            .readAllPrimaryKeys(this.tableName)
            .then(function (primaryKeys) {
            var readBundles = [];
            primaryKeys.forEach(function (primaryKey) {
                var cacheKey = _this.constructCacheKey(primaryKey);
                cacheKeys.push(cacheKey);
                readBundles.push(_this.engine.read(_this.tableName, primaryKey));
            });
            return Promise.all(readBundles);
        })
            .then(function (bundles) {
            var _loop_1 = function (index) {
                var bundle = bundles[index];
                var cacheKey = cacheKeys[index];
                _this.startTimer(cacheKey).then(function () {
                    _this.bundles[cacheKey] = bundle;
                });
            };
            for (var index in bundles) {
                _loop_1(index);
            }
            return bundles;
        });
    };
    TransientStore.prototype.constructCacheKey = function (primaryKey) {
        return this.engine.storeName + "@" + this.tableName + "@" + primaryKey;
    };
    TransientStore.prototype.constructPrimaryKey = function (cacheKey) {
        return cacheKey.replace(this.engine.storeName + "@" + this.tableName + "@", '');
    };
    TransientStore.prototype.createTransientBundle = function (record, ttl) {
        return {
            expires: Date.now() + ttl,
            payload: record,
        };
    };
    TransientStore.prototype.get = function (primaryKey) {
        var _this = this;
        return this.getFromCache(primaryKey)
            .then(function (cachedBundle) {
            return cachedBundle !== undefined ? cachedBundle : _this.getFromStore(primaryKey);
        })
            .catch(function (error) {
            if (error instanceof error_1.RecordNotFoundError) {
                return undefined;
            }
            throw error;
        });
    };
    TransientStore.prototype.getFromCache = function (primaryKey) {
        var cacheBundle = this.bundles[this.constructCacheKey(primaryKey)];
        return Promise.resolve(cacheBundle);
    };
    TransientStore.prototype.getFromStore = function (primaryKey) {
        return this.engine.read(this.tableName, primaryKey);
    };
    TransientStore.prototype.set = function (primaryKey, record, ttl) {
        var _this = this;
        var bundle = this.createTransientBundle(record, ttl);
        return new Promise(function (resolve, reject) {
            _this.getFromCache(primaryKey).then(function (cachedBundle) {
                if (cachedBundle) {
                    var message = "Record with primary key \"" + primaryKey + "\" already exists in table \"" + _this.tableName + "\" of database \"" + _this.engine.storeName + "\".";
                    reject(new error_1.RecordAlreadyExistsError(message));
                }
                else {
                    _this.save(primaryKey, bundle)
                        .then(function (cacheKey) { return Promise.all([cacheKey, _this.startTimer(cacheKey)]); })
                        .then(function (_a) {
                        var cacheKey = _a[0], bundle = _a[1];
                        resolve(_this.saveInCache(cacheKey, bundle));
                    });
                }
            });
        });
    };
    TransientStore.prototype.save = function (primaryKey, bundle) {
        var cacheKey = this.constructCacheKey(primaryKey);
        return Promise.all([this.saveInStore(primaryKey, bundle), this.saveInCache(cacheKey, bundle)]).then(function () { return cacheKey; });
    };
    TransientStore.prototype.saveInStore = function (primaryKey, bundle) {
        return this.engine.create(this.tableName, primaryKey, bundle);
    };
    TransientStore.prototype.saveInCache = function (cacheKey, bundle) {
        return (this.bundles[cacheKey] = bundle);
    };
    TransientStore.prototype.delete = function (primaryKey) {
        var cacheKey = this.constructCacheKey(primaryKey);
        return Promise.all([this.deleteFromStore(primaryKey), this.deleteFromCache(cacheKey)]).then(function () { return cacheKey; });
    };
    TransientStore.prototype.deleteFromStore = function (primaryKey) {
        return this.engine.delete(this.tableName, primaryKey);
    };
    TransientStore.prototype.deleteFromCache = function (cacheKey) {
        var timeoutID = this.bundles[cacheKey] && this.bundles[cacheKey].timeoutID;
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        delete this.bundles[cacheKey];
        return cacheKey;
    };
    TransientStore.prototype.expireBundle = function (cacheKey) {
        var expiredBundle = {
            cacheKey: cacheKey,
            payload: this.bundles[cacheKey].payload,
            primaryKey: this.constructPrimaryKey(cacheKey),
        };
        return this.delete(expiredBundle.primaryKey).then(function () { return expiredBundle; });
    };
    TransientStore.prototype.startTimer = function (cacheKey) {
        var _this = this;
        var primaryKey = this.constructPrimaryKey(cacheKey);
        return this.get(primaryKey).then(function (bundle) {
            if (!bundle) {
                bundle = new TransientBundle_1.default();
                bundle.expires = 0;
                bundle.payload = undefined;
            }
            var expires = bundle.expires, timeoutID = bundle.timeoutID;
            var timespan = expires - Date.now();
            if (expires <= 0) {
                _this.expireBundle(cacheKey);
            }
            else if (!timeoutID) {
                bundle.timeoutID = setTimeout(function () {
                    _this.expireBundle(cacheKey).then(function (expiredBundle) {
                        _this.emit(TransientStore.TOPIC.EXPIRED, expiredBundle);
                    });
                }, timespan);
            }
            return bundle;
        });
    };
    TransientStore.TOPIC = {
        EXPIRED: 'expired',
    };
    return TransientStore;
}(events_1.EventEmitter));
exports.default = TransientStore;
//# sourceMappingURL=TransientStore.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PathValidationError = (function (_super) {
    __extends(PathValidationError, _super);
    function PathValidationError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Object.setPrototypeOf(_this, PathValidationError.prototype);
        _this.message = message;
        _this.name = _this.constructor.name;
        _this.stack = new Error().stack;
        return _this;
    }
    return PathValidationError;
}(Error));
exports.default = PathValidationError;
//# sourceMappingURL=PathValidationError.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UnsupportedError = (function (_super) {
    __extends(UnsupportedError, _super);
    function UnsupportedError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Object.setPrototypeOf(_this, UnsupportedError.prototype);
        _this.code = 4;
        _this.message = message;
        _this.name = _this.constructor.name;
        _this.stack = new Error().stack;
        return _this;
    }
    return UnsupportedError;
}(Error));
exports.default = UnsupportedError;
//# sourceMappingURL=UnsupportedError.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FileEngine_1 = __webpack_require__(16);
exports.FileEngine = FileEngine_1.default;
var FileSystemEngine_1 = __webpack_require__(19);
exports.FileSystemEngine = FileSystemEngine_1.default;
var IndexedDBEngine_1 = __webpack_require__(20);
exports.IndexedDBEngine = IndexedDBEngine_1.default;
var MemoryEngine_1 = __webpack_require__(22);
exports.MemoryEngine = MemoryEngine_1.default;
var LocalStorageEngine_1 = __webpack_require__(23);
exports.LocalStorageEngine = LocalStorageEngine_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __webpack_require__(17);
var error_1 = __webpack_require__(0);
var EnvironmentUtil_1 = __webpack_require__(2);
var path = __webpack_require__(18);
var FileEngine = (function () {
    function FileEngine(baseDirectory) {
        if (baseDirectory === void 0) { baseDirectory = ''; }
        this.baseDirectory = baseDirectory;
        this.storeName = '';
        this.options = {
            fileExtension: '.dat',
        };
    }
    FileEngine.prototype.init = function (storeName, options) {
        if (storeName === void 0) { storeName = ''; }
        if (EnvironmentUtil_1.isBrowser()) {
            var message = "Node.js' File System Module is not available on your platform.";
            throw new error_1.UnsupportedError(message);
        }
        this.storeName = path.normalize(path.join(this.baseDirectory, storeName));
        this.options = __assign({}, this.options, options);
        return Promise.resolve(storeName);
    };
    FileEngine.prototype.purge = function () {
        return fs.remove(this.storeName);
    };
    FileEngine.prototype.resolvePath = function (tableName, primaryKey) {
        var _this = this;
        var isPathTraversal = function () {
            var testPaths = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                testPaths[_i] = arguments[_i];
            }
            for (var _a = 0, testPaths_1 = testPaths; _a < testPaths_1.length; _a++) {
                var testPath = testPaths_1[_a];
                if (typeof testPath !== 'undefined' &&
                    (testPath.includes('.') || testPath.includes('/') || testPath.includes('\\'))) {
                    return true;
                }
            }
            return false;
        };
        return new Promise(function (resolve, reject) {
            if (isPathTraversal(tableName, primaryKey || '')) {
                var message = "Path traversal has been detected on \"" + path.join(tableName, String(primaryKey)) + "\".";
                return reject(new error_1.PathValidationError(message));
            }
            var filePath = path.join(_this.storeName, tableName, primaryKey ? "" + primaryKey + _this.options.fileExtension : '');
            var nonPrintableCharacters = new RegExp('[^\x20-\x7E]+', 'gm');
            if (filePath.match(nonPrintableCharacters)) {
                var message = "Cannot create file with path \"" + filePath + "\".";
                return reject(new error_1.PathValidationError(message));
            }
            return resolve(filePath);
        });
    };
    FileEngine.prototype.create = function (tableName, primaryKey, entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (entity) {
                _this.resolvePath(tableName, primaryKey)
                    .then(function (filePath) {
                    if (typeof entity === 'object') {
                        try {
                            entity = JSON.stringify(entity);
                        }
                        catch (error) {
                            entity = entity.toString();
                        }
                    }
                    fs.writeFile(filePath, entity, { flag: 'wx' }, function (error) {
                        if (error) {
                            if (error.code === 'ENOENT') {
                                fs
                                    .outputFile(filePath, entity)
                                    .then(function () { return resolve(primaryKey); })
                                    .catch(function (error) { return reject(error); });
                            }
                            else if (error.code === 'EEXIST') {
                                var message = "Record \"" + primaryKey + "\" already exists in \"" + tableName + "\". You need to delete the record first if you want to overwrite it.";
                                reject(new error_1.RecordAlreadyExistsError(message));
                            }
                            else {
                                reject(error);
                            }
                        }
                        else {
                            resolve(primaryKey);
                        }
                    });
                })
                    .catch(reject);
            }
            else {
                var message = "Record \"" + primaryKey + "\" cannot be saved in \"" + tableName + "\" because it's \"undefined\" or \"null\".";
                reject(new error_1.RecordTypeError(message));
            }
        });
    };
    FileEngine.prototype.delete = function (tableName, primaryKey) {
        return this.resolvePath(tableName, primaryKey).then(function (file) {
            return fs
                .remove(file)
                .then(function () { return primaryKey; })
                .catch(function () { return false; });
        });
    };
    FileEngine.prototype.deleteAll = function (tableName) {
        return this.resolvePath(tableName).then(function (directory) {
            return fs
                .remove(directory)
                .then(function () { return true; })
                .catch(function () { return false; });
        });
    };
    FileEngine.prototype.read = function (tableName, primaryKey) {
        return this.resolvePath(tableName, primaryKey).then(function (file) {
            return new Promise(function (resolve, reject) {
                fs.readFile(file, { encoding: 'utf8', flag: 'r' }, function (error, data) {
                    if (error) {
                        if (error.code === 'ENOENT') {
                            var message = "Record \"" + primaryKey + "\" in \"" + tableName + "\" could not be found.";
                            reject(new error_1.RecordNotFoundError(message));
                        }
                        else {
                            reject(error);
                        }
                    }
                    else {
                        try {
                            data = JSON.parse(data);
                        }
                        catch (error) {
                        }
                        resolve(data);
                    }
                });
            });
        });
    };
    FileEngine.prototype.readAll = function (tableName) {
        var _this = this;
        return this.resolvePath(tableName).then(function (directory) {
            return new Promise(function (resolve, reject) {
                fs.readdir(directory, function (error, files) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        var recordNames = files.map(function (file) { return path.basename(file, path.extname(file)); });
                        var promises = recordNames.map(function (primaryKey) { return _this.read(tableName, primaryKey); });
                        Promise.all(promises).then(function (records) { return resolve(records); });
                    }
                });
            });
        });
    };
    FileEngine.prototype.readAllPrimaryKeys = function (tableName) {
        return this.resolvePath(tableName).then(function (directory) {
            return new Promise(function (resolve) {
                fs.readdir(directory, function (error, files) {
                    if (error) {
                        if (error.code === 'ENOENT') {
                            resolve([]);
                        }
                        else {
                            throw error;
                        }
                    }
                    else {
                        var fileNames = files.map(function (file) { return path.parse(file).name; });
                        resolve(fileNames);
                    }
                });
            });
        });
    };
    FileEngine.prototype.append = function (tableName, primaryKey, additions) {
        var _this = this;
        return this.resolvePath(tableName, primaryKey).then(function (file) {
            return _this.read(tableName, primaryKey)
                .then(function (record) {
                if (typeof record === 'string') {
                    record += additions;
                }
                else {
                    var message = "Cannot append text to record \"" + primaryKey + "\" because it's not a string.";
                    throw new error_1.RecordTypeError(message);
                }
                return record;
            })
                .then(function (updatedRecord) { return fs.outputFile(file, updatedRecord); })
                .then(function () { return primaryKey; });
        });
    };
    FileEngine.prototype.update = function (tableName, primaryKey, changes) {
        var _this = this;
        return this.resolvePath(tableName, primaryKey).then(function (file) {
            return _this.read(tableName, primaryKey)
                .then(function (record) {
                if (typeof record === 'string') {
                    record = JSON.parse(record);
                }
                var updatedRecord = __assign({}, record, changes);
                return JSON.stringify(updatedRecord);
            })
                .then(function (updatedRecord) { return fs.outputFile(file, updatedRecord); })
                .then(function () { return primaryKey; });
        });
    };
    FileEngine.prototype.updateOrCreate = function (tableName, primaryKey, changes) {
        var _this = this;
        return this.update(tableName, primaryKey, changes)
            .catch(function (error) {
            if (error instanceof error_1.RecordNotFoundError) {
                return _this.create(tableName, primaryKey, changes);
            }
            throw error;
        })
            .then(function () { return primaryKey; });
    };
    return FileEngine;
}());
exports.default = FileEngine;
//# sourceMappingURL=FileEngine.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
var error_1 = __webpack_require__(0);
var EnvironmentUtil_1 = __webpack_require__(2);
var fs = __webpack_require__(7);
var TEN_MEGABYTES = 1024 * 1024 * 10;
var FileSystemEngine = (function () {
    function FileSystemEngine() {
        this.storeName = '';
        this.config = {
            fileExtension: '.dat',
            type: typeof window === 'undefined' ? 0 : window.TEMPORARY,
            size: TEN_MEGABYTES,
        };
    }
    FileSystemEngine.prototype.init = function (storeName, options) {
        if (storeName === void 0) { storeName = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var message, fileSystem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!EnvironmentUtil_1.isBrowser() || !fs.isSupported()) {
                            message = "File and Directory Entries API is not available on your platform.";
                            throw new error_1.UnsupportedError(message);
                        }
                        this.config = Object.assign({}, this.config, options);
                        this.storeName = storeName;
                        return [4, fs.init({ type: this.config.type, bytes: this.config.size })];
                    case 1:
                        fileSystem = _a.sent();
                        return [4, fs.mkdir(this.storeName)];
                    case 2:
                        _a.sent();
                        return [2, fileSystem];
                }
            });
        });
    };
    FileSystemEngine.prototype.createDirectoryPath = function (tableName) {
        return this.storeName + "/" + tableName;
    };
    FileSystemEngine.prototype.createFilePath = function (tableName, primaryKey) {
        var directory = this.createDirectoryPath(tableName);
        return directory + "/" + primaryKey + this.config.fileExtension;
    };
    FileSystemEngine.prototype.append = function (tableName, primaryKey, additions) {
        return __awaiter(this, void 0, void 0, function () {
            var filePath;
            return __generator(this, function (_a) {
                filePath = this.createFilePath(tableName, primaryKey);
                return [2, this.read(tableName, primaryKey)
                        .then(function (record) {
                        if (typeof record === 'string') {
                            record += additions;
                        }
                        else {
                            var message = "Cannot append text to record \"" + primaryKey + "\" because it's not a string.";
                            throw new _1.RecordTypeError(message);
                        }
                        return record;
                    })
                        .then(function (updatedRecord) { return fs.writeFile(filePath, updatedRecord); })
                        .then(function () { return primaryKey; })];
            });
        });
    };
    FileSystemEngine.prototype.createDirectory = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            var directoryPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        directoryPath = this.createDirectoryPath(tableName);
                        return [4, fs.mkdir(directoryPath)];
                    case 1:
                        _a.sent();
                        return [2, directoryPath];
                }
            });
        });
    };
    FileSystemEngine.prototype.create = function (tableName, primaryKey, entity) {
        return __awaiter(this, void 0, void 0, function () {
            var message, filePath, isExistent, message, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!entity) {
                            message = "Record \"" + primaryKey + "\" cannot be saved in \"" + tableName + "\" because it's \"undefined\" or \"null\".";
                            throw new _1.RecordTypeError(message);
                        }
                        filePath = this.createFilePath(tableName, primaryKey);
                        return [4, fs.exists(filePath)];
                    case 1:
                        isExistent = _a.sent();
                        if (!isExistent) return [3, 2];
                        message = "Record \"" + primaryKey + "\" already exists in \"" + tableName + "\". You need to delete the record first if you want to overwrite it.";
                        throw new error_1.RecordAlreadyExistsError(message);
                    case 2:
                        data = void 0;
                        try {
                            data = JSON.stringify(entity);
                        }
                        catch (error) {
                            data = entity;
                        }
                        return [4, fs.writeFile(filePath, data)];
                    case 3:
                        _a.sent();
                        return [2, primaryKey];
                }
            });
        });
    };
    FileSystemEngine.prototype.delete = function (tableName, primaryKey) {
        return __awaiter(this, void 0, void 0, function () {
            var filePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filePath = this.createFilePath(tableName, primaryKey);
                        return [4, fs.unlink(filePath)];
                    case 1:
                        _a.sent();
                        return [2, primaryKey];
                }
            });
        });
    };
    FileSystemEngine.prototype.deleteAll = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            var primaryKeys, promises, _i, primaryKeys_1, primaryKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.readAllPrimaryKeys(tableName)];
                    case 1:
                        primaryKeys = _a.sent();
                        promises = [];
                        for (_i = 0, primaryKeys_1 = primaryKeys; _i < primaryKeys_1.length; _i++) {
                            primaryKey = primaryKeys_1[_i];
                            promises.push(this.delete(tableName, primaryKey));
                        }
                        return [2, Promise.all(promises)
                                .then(function () { return true; })
                                .catch(function () { return false; })];
                }
            });
        });
    };
    FileSystemEngine.prototype.read = function (tableName, primaryKey) {
        return __awaiter(this, void 0, void 0, function () {
            var filePath, data, error_2, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filePath = this.createFilePath(tableName, primaryKey);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, fs.readFile(filePath, { type: 'Text' })];
                    case 2:
                        data = _a.sent();
                        try {
                            return [2, JSON.parse(data)];
                        }
                        catch (error) {
                            return [2, data];
                        }
                        return [3, 4];
                    case 3:
                        error_2 = _a.sent();
                        message = "Record \"" + primaryKey + "\" in \"" + tableName + "\" could not be found.";
                        throw new error_1.RecordNotFoundError(message);
                    case 4: return [2];
                }
            });
        });
    };
    FileSystemEngine.prototype.readAll = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            var primaryKeys, promises, _i, primaryKeys_2, primaryKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.readAllPrimaryKeys(tableName)];
                    case 1:
                        primaryKeys = _a.sent();
                        promises = [];
                        for (_i = 0, primaryKeys_2 = primaryKeys; _i < primaryKeys_2.length; _i++) {
                            primaryKey = primaryKeys_2[_i];
                            promises.push(this.read(tableName, primaryKey));
                        }
                        return [2, Promise.all(promises)];
                }
            });
        });
    };
    FileSystemEngine.prototype.readAllPrimaryKeys = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            var directoryPath, entries, error_3, names, primaryKeys, _i, _a, name_1, nameWithoutExtension;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        directoryPath = this.createDirectoryPath(tableName);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, fs.readdir(directoryPath, { deep: true })];
                    case 2:
                        entries = _b.sent();
                        return [3, 4];
                    case 3:
                        error_3 = _b.sent();
                        entries = [];
                        return [3, 4];
                    case 4:
                        names = entries.map(function (entry) { return entry.name; });
                        primaryKeys = [];
                        for (_i = 0, _a = names.sort(); _i < _a.length; _i++) {
                            name_1 = _a[_i];
                            nameWithoutExtension = name_1.substr(0, name_1.indexOf('.'));
                            primaryKeys.push(nameWithoutExtension);
                        }
                        return [2, primaryKeys];
                }
            });
        });
    };
    FileSystemEngine.prototype.update = function (tableName, primaryKey, changes) {
        var filePath = this.createFilePath(tableName, primaryKey);
        return this.read(tableName, primaryKey)
            .then(function (record) {
            if (typeof record === 'string') {
                record = JSON.parse(record);
            }
            var updatedRecord = __assign({}, record, changes);
            return JSON.stringify(updatedRecord);
        })
            .then(function (updatedRecord) { return fs.writeFile(filePath, updatedRecord); })
            .then(function () { return primaryKey; });
    };
    FileSystemEngine.prototype.purge = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fs.rmdir(this.storeName)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    FileSystemEngine.prototype.updateOrCreate = function (tableName, primaryKey, changes) {
        var _this = this;
        return this.update(tableName, primaryKey, changes)
            .catch(function (error) {
            if (error instanceof error_1.RecordNotFoundError) {
                return _this.create(tableName, primaryKey, changes);
            }
            throw error;
        })
            .then(function () { return primaryKey; });
    };
    return FileSystemEngine;
}());
exports.default = FileSystemEngine;
//# sourceMappingURL=FileSystemEngine.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dexie_1 = __webpack_require__(8);
var RecordAlreadyExistsError_1 = __webpack_require__(4);
var RecordTypeError_1 = __webpack_require__(6);
var RecordNotFoundError_1 = __webpack_require__(5);
var error_1 = __webpack_require__(0);
var IndexedDBEngine = (function () {
    function IndexedDBEngine() {
        this.storeName = '';
    }
    IndexedDBEngine.prototype.canUseIndexedDB = function () {
        var platform = typeof global === 'undefined' ? window : global;
        if ('indexedDB' in platform) {
            return new Promise(function (resolve) {
                var name = 'test';
                var DBOpenRequest = platform.indexedDB.open(name);
                DBOpenRequest.onerror = function () { return resolve(false); };
                DBOpenRequest.onsuccess = function () {
                    var db = DBOpenRequest.result;
                    db.close();
                    var deleteRequest = platform.indexedDB.deleteDatabase(name);
                    deleteRequest.onerror = function () { return resolve(false); };
                    deleteRequest.onsuccess = function () { return resolve(true); };
                };
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    IndexedDBEngine.prototype.validateIndexedDBSupport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, unsupportedError, canUseIndexedDB, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = "IndexedDB is not available on your platform.";
                        unsupportedError = new error_1.UnsupportedError(message);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.canUseIndexedDB()];
                    case 2:
                        canUseIndexedDB = _a.sent();
                        if (!canUseIndexedDB) {
                            throw unsupportedError;
                        }
                        return [3, 4];
                    case 3:
                        error_2 = _a.sent();
                        throw unsupportedError;
                    case 4: return [2];
                }
            });
        });
    };
    IndexedDBEngine.prototype.init = function (storeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.validateIndexedDBSupport()];
                    case 1:
                        _a.sent();
                        this.db = new dexie_1.default(storeName);
                        this.storeName = this.db.name;
                        return [2, Promise.resolve(this.db)];
                }
            });
        });
    };
    IndexedDBEngine.prototype.initWithDb = function (db) {
        this.db = db;
        this.storeName = this.db.name;
        return Promise.resolve(this.db);
    };
    IndexedDBEngine.prototype.purge = function () {
        return this.db ? this.db.delete() : dexie_1.default.delete(this.storeName);
    };
    IndexedDBEngine.prototype.create = function (tableName, primaryKey, entity) {
        if (entity) {
            return this.db[tableName].add(entity, primaryKey).catch(function (error) {
                if (error instanceof dexie_1.default.ConstraintError) {
                    var message_1 = "Record \"" + primaryKey + "\" already exists in \"" + tableName + "\". You need to delete the record first if you want to overwrite it.";
                    throw new RecordAlreadyExistsError_1.default(message_1);
                }
                else {
                    throw error;
                }
            });
        }
        var message = "Record \"" + primaryKey + "\" cannot be saved in \"" + tableName + "\" because it's \"undefined\" or \"null\".";
        return Promise.reject(new RecordTypeError_1.default(message));
    };
    IndexedDBEngine.prototype.delete = function (tableName, primaryKey) {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.db[tableName].delete(primaryKey); })
            .then(function () { return primaryKey; });
    };
    IndexedDBEngine.prototype.deleteAll = function (tableName) {
        return this.db[tableName].clear().then(function () { return true; });
    };
    IndexedDBEngine.prototype.read = function (tableName, primaryKey) {
        return this.db[tableName].get(primaryKey).then(function (record) {
            if (record) {
                return record;
            }
            var message = "Record \"" + primaryKey + "\" in \"" + tableName + "\" could not be found.";
            throw new RecordNotFoundError_1.default(message);
        });
    };
    IndexedDBEngine.prototype.readAll = function (tableName) {
        return this.db[tableName].toArray();
    };
    IndexedDBEngine.prototype.readAllPrimaryKeys = function (tableName) {
        return this.db[tableName].toCollection().keys();
    };
    IndexedDBEngine.prototype.update = function (tableName, primaryKey, changes) {
        return this.db[tableName].update(primaryKey, changes).then(function (updatedRecords) {
            if (updatedRecords === 0) {
                var message = "Record \"" + primaryKey + "\" in \"" + tableName + "\" could not be found.";
                throw new RecordNotFoundError_1.default(message);
            }
            return primaryKey;
        });
    };
    IndexedDBEngine.prototype.updateOrCreate = function (tableName, primaryKey, changes) {
        return this.db[tableName].put(changes, primaryKey);
    };
    IndexedDBEngine.prototype.append = function (tableName, primaryKey, additions) {
        var _this = this;
        return this.db[tableName].get(primaryKey).then(function (record) {
            if (typeof record === 'string') {
                record += additions;
            }
            else {
                var message = "Cannot append text to record \"" + primaryKey + "\" because it's not a string.";
                throw new RecordTypeError_1.default(message);
            }
            return _this.updateOrCreate(tableName, primaryKey, record);
        });
    };
    return IndexedDBEngine;
}());
exports.default = IndexedDBEngine;
//# sourceMappingURL=IndexedDBEngine.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = __webpack_require__(0);
var MemoryEngine = (function () {
    function MemoryEngine() {
        this.storeName = '';
        this.stores = {};
    }
    MemoryEngine.prototype.init = function (storeName) {
        this.storeName = storeName;
        this.stores[this.storeName] = this.stores[this.storeName] || {};
        return Promise.resolve();
    };
    MemoryEngine.prototype.purge = function () {
        delete this.stores[this.storeName];
        return Promise.resolve();
    };
    MemoryEngine.prototype.prepareTable = function (tableName) {
        if (!this.stores[this.storeName][tableName]) {
            this.stores[this.storeName][tableName] = {};
        }
    };
    MemoryEngine.prototype.create = function (tableName, primaryKey, entity) {
        if (entity) {
            this.prepareTable(tableName);
            var record = this.stores[this.storeName][tableName][primaryKey];
            if (record) {
                var message_1 = "Record \"" + primaryKey + "\" already exists in \"" + tableName + "\". You need to delete the record first if you want to overwrite it.";
                var error = new error_1.RecordAlreadyExistsError(message_1);
                return Promise.reject(error);
            }
            this.stores[this.storeName][tableName][primaryKey] = entity;
            return Promise.resolve(primaryKey);
        }
        var message = "Record \"" + primaryKey + "\" cannot be saved in \"" + tableName + "\" because it's \"undefined\" or \"null\".";
        return Promise.reject(new error_1.RecordTypeError(message));
    };
    MemoryEngine.prototype.delete = function (tableName, primaryKey) {
        var _this = this;
        this.prepareTable(tableName);
        return Promise.resolve().then(function () {
            delete _this.stores[_this.storeName][tableName][primaryKey];
            return primaryKey;
        });
    };
    MemoryEngine.prototype.deleteAll = function (tableName) {
        var _this = this;
        return Promise.resolve().then(function () {
            delete _this.stores[_this.storeName][tableName];
            return true;
        });
    };
    MemoryEngine.prototype.read = function (tableName, primaryKey) {
        this.prepareTable(tableName);
        var record = this.stores[this.storeName][tableName][primaryKey];
        if (record) {
            return Promise.resolve(record);
        }
        else {
            var message = "Record \"" + primaryKey + "\" in \"" + tableName + "\" could not be found.";
            return Promise.reject(new error_1.RecordNotFoundError(message));
        }
    };
    MemoryEngine.prototype.readAll = function (tableName) {
        this.prepareTable(tableName);
        var promises = [];
        for (var _i = 0, _a = Object.keys(this.stores[this.storeName][tableName]); _i < _a.length; _i++) {
            var primaryKey = _a[_i];
            promises.push(this.read(tableName, primaryKey));
        }
        return Promise.all(promises);
    };
    MemoryEngine.prototype.readAllPrimaryKeys = function (tableName) {
        this.prepareTable(tableName);
        return Promise.resolve(Object.keys(this.stores[this.storeName][tableName]));
    };
    MemoryEngine.prototype.update = function (tableName, primaryKey, changes) {
        var _this = this;
        this.prepareTable(tableName);
        return this.read(tableName, primaryKey)
            .then(function (entity) {
            return Object.assign(entity, changes);
        })
            .then(function (updatedEntity) {
            _this.stores[_this.storeName][tableName][primaryKey] = updatedEntity;
            return primaryKey;
        });
    };
    MemoryEngine.prototype.updateOrCreate = function (tableName, primaryKey, changes) {
        var _this = this;
        this.prepareTable(tableName);
        return this.update(tableName, primaryKey, changes)
            .catch(function (error) {
            if (error instanceof error_1.RecordNotFoundError) {
                return _this.create(tableName, primaryKey, changes);
            }
            throw error;
        })
            .then(function () { return primaryKey; });
    };
    MemoryEngine.prototype.append = function (tableName, primaryKey, additions) {
        var _this = this;
        this.prepareTable(tableName);
        return this.read(tableName, primaryKey).then(function (record) {
            if (typeof record === 'string') {
                record += additions;
            }
            else {
                var message = "Cannot append text to record \"" + primaryKey + "\" because it's not a string.";
                throw new error_1.RecordTypeError(message);
            }
            _this.stores[_this.storeName][tableName][primaryKey] = record;
            return primaryKey;
        });
    };
    return MemoryEngine;
}());
exports.default = MemoryEngine;
//# sourceMappingURL=MemoryEngine.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = __webpack_require__(0);
var EnvironmentUtil_1 = __webpack_require__(2);
var LocalStorageEngine = (function () {
    function LocalStorageEngine() {
        this.storeName = '';
    }
    LocalStorageEngine.prototype.init = function (storeName) {
        if (!EnvironmentUtil_1.isBrowser() || !window.localStorage) {
            var message = "LocalStorage is not available on your platform.";
            throw new error_1.UnsupportedError(message);
        }
        this.storeName = storeName;
        return Promise.resolve();
    };
    LocalStorageEngine.prototype.purge = function () {
        window.localStorage.clear();
        return Promise.resolve();
    };
    LocalStorageEngine.prototype.createKey = function (tableName, primaryKey) {
        return this.storeName + "@" + tableName + "@" + primaryKey;
    };
    LocalStorageEngine.prototype.create = function (tableName, primaryKey, entity) {
        if (entity) {
            var key_1 = this.createKey(tableName, primaryKey);
            return this.read(tableName, primaryKey)
                .catch(function (error) {
                if (error instanceof error_1.RecordNotFoundError) {
                    return undefined;
                }
                throw error;
            })
                .then(function (record) {
                if (record) {
                    var message_1 = "Record \"" + primaryKey + "\" already exists in \"" + tableName + "\". You need to delete the record first if you want to overwrite it.";
                    throw new error_1.RecordAlreadyExistsError(message_1);
                }
                else {
                    if (typeof record === 'string') {
                        window.localStorage.setItem(key_1, String(entity));
                    }
                    else {
                        window.localStorage.setItem(key_1, JSON.stringify(entity));
                    }
                    return primaryKey;
                }
            });
        }
        var message = "Record \"" + primaryKey + "\" cannot be saved in \"" + tableName + "\" because it's \"undefined\" or \"null\".";
        return Promise.reject(new error_1.RecordTypeError(message));
    };
    LocalStorageEngine.prototype.delete = function (tableName, primaryKey) {
        var _this = this;
        return Promise.resolve().then(function () {
            var key = _this.createKey(tableName, primaryKey);
            window.localStorage.removeItem(key);
            return primaryKey;
        });
    };
    LocalStorageEngine.prototype.deleteAll = function (tableName) {
        var _this = this;
        return Promise.resolve().then(function () {
            Object.keys(localStorage).forEach(function (key) {
                var prefix = _this.storeName + "@" + tableName + "@";
                if (key.startsWith(prefix)) {
                    localStorage.removeItem(key);
                }
            });
            return true;
        });
    };
    LocalStorageEngine.prototype.read = function (tableName, primaryKey) {
        var _this = this;
        return Promise.resolve().then(function () {
            var key = _this.storeName + "@" + tableName + "@" + primaryKey;
            var record = window.localStorage.getItem(key);
            if (record) {
                try {
                    return JSON.parse(record);
                }
                catch (error) {
                    return record;
                }
            }
            var message = "Record \"" + primaryKey + "\" in \"" + tableName + "\" could not be found.";
            throw new error_1.RecordNotFoundError(message);
        });
    };
    LocalStorageEngine.prototype.readAll = function (tableName) {
        var _this = this;
        var promises = [];
        Object.keys(localStorage).forEach(function (key) {
            var prefix = _this.storeName + "@" + tableName + "@";
            if (key.startsWith(prefix)) {
                var primaryKey = key.replace(prefix, '');
                promises.push(_this.read(tableName, primaryKey));
            }
        });
        return Promise.all(promises);
    };
    LocalStorageEngine.prototype.readAllPrimaryKeys = function (tableName) {
        var _this = this;
        var primaryKeys = [];
        Object.keys(localStorage).forEach(function (primaryKey) {
            var prefix = _this.storeName + "@" + tableName + "@";
            if (primaryKey.startsWith(prefix)) {
                primaryKeys.push(primaryKey.replace(prefix, ''));
            }
        });
        return Promise.resolve(primaryKeys);
    };
    LocalStorageEngine.prototype.update = function (tableName, primaryKey, changes) {
        var _this = this;
        return this.read(tableName, primaryKey)
            .then(function (entity) {
            return Object.assign(entity, changes);
        })
            .then(function (updatedEntity) {
            return _this.create(tableName, primaryKey, updatedEntity).catch(function (error) {
                if (error instanceof error_1.RecordAlreadyExistsError) {
                    return _this.delete(tableName, primaryKey).then(function () { return _this.create(tableName, primaryKey, updatedEntity); });
                }
                else {
                    throw error;
                }
            });
        });
    };
    LocalStorageEngine.prototype.updateOrCreate = function (tableName, primaryKey, changes) {
        var _this = this;
        return this.update(tableName, primaryKey, changes)
            .catch(function (error) {
            if (error instanceof error_1.RecordNotFoundError) {
                return _this.create(tableName, primaryKey, changes);
            }
            throw error;
        })
            .then(function () { return primaryKey; });
    };
    LocalStorageEngine.prototype.append = function (tableName, primaryKey, additions) {
        var _this = this;
        return this.read(tableName, primaryKey).then(function (record) {
            if (typeof record === 'string') {
                record += additions;
            }
            else {
                var message = "Cannot append text to record \"" + primaryKey + "\" because it's not a string.";
                throw new error_1.RecordTypeError(message);
            }
            var key = _this.createKey(tableName, primaryKey);
            window.localStorage.setItem(key, record);
            return primaryKey;
        });
    };
    return LocalStorageEngine;
}());
exports.default = LocalStorageEngine;
//# sourceMappingURL=LocalStorageEngine.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=store-engine.bundle.js.map