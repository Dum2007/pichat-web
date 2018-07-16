/*! @wireapp/cbor v3.0.17 */
var CBOR =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Type = (function () {
    function Type() {
        throw new Error("Can't create instance of singleton");
    }
    Type.major = function (type) {
        switch (type) {
            case Type.ARRAY:
                return 4;
            case Type.BOOL:
                return 7;
            case Type.BREAK:
                return 7;
            case Type.BYTES:
                return 2;
            case Type.FLOAT16:
                return 7;
            case Type.FLOAT32:
                return 7;
            case Type.FLOAT64:
                return 7;
            case Type.UINT8:
                return 0;
            case Type.UINT16:
                return 0;
            case Type.UINT32:
                return 0;
            case Type.UINT64:
                return 0;
            case Type.INT8:
                return 1;
            case Type.INT16:
                return 1;
            case Type.INT32:
                return 1;
            case Type.INT64:
                return 1;
            case Type.NULL:
                return 7;
            case Type.OBJECT:
                return 5;
            case Type.TAGGED:
                return 6;
            case Type.TEXT:
                return 3;
            case Type.UNDEFINED:
                return 7;
            default:
                throw new TypeError('Invalid CBOR type');
        }
    };
    Type.ARRAY = 1;
    Type.BOOL = 2;
    Type.BREAK = 3;
    Type.BYTES = 4;
    Type.FLOAT16 = 5;
    Type.FLOAT32 = 6;
    Type.FLOAT64 = 7;
    Type.UINT8 = 8;
    Type.UINT16 = 9;
    Type.UINT32 = 10;
    Type.UINT64 = 11;
    Type.INT8 = 12;
    Type.INT16 = 13;
    Type.INT32 = 14;
    Type.INT64 = 15;
    Type.NULL = 16;
    Type.OBJECT = 17;
    Type.TAGGED = 18;
    Type.TEXT = 19;
    Type.UNDEFINED = 20;
    return Type;
}());
exports.default = Type;
//# sourceMappingURL=Type.js.map

/***/ }),
/* 1 */
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
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Object.setPrototypeOf(_this, BaseError.prototype);
        _this.message = message;
        _this.name = _this.constructor.name;
        return _this;
    }
    return BaseError;
}(Error));
exports.default = BaseError;
//# sourceMappingURL=BaseError.js.map

/***/ }),
/* 2 */
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
var BaseError_1 = __webpack_require__(1);
var DecodeError = (function (_super) {
    __extends(DecodeError, _super);
    function DecodeError(message, extra) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.extra = extra;
        Object.setPrototypeOf(_this, DecodeError.prototype);
        _this.extra = extra;
        return _this;
    }
    DecodeError.INT_OVERFLOW = 'Integer overflow';
    DecodeError.INVALID_TYPE = 'Invalid type';
    DecodeError.TOO_LONG = 'Field too long';
    DecodeError.TOO_NESTED = 'Object nested too deep';
    DecodeError.UNEXPECTED_EOF = 'Unexpected end-of-buffer';
    DecodeError.UNEXPECTED_TYPE = 'Unexpected type';
    return DecodeError;
}(BaseError_1.default));
exports.default = DecodeError;
//# sourceMappingURL=DecodeError.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseError_1 = __webpack_require__(1);
exports.BaseError = BaseError_1.default;
var DecodeError_1 = __webpack_require__(2);
exports.DecodeError = DecodeError_1.default;
var Decoder_1 = __webpack_require__(4);
exports.Decoder = Decoder_1.default;
var Encoder_1 = __webpack_require__(5);
exports.Encoder = Encoder_1.default;
var Type_1 = __webpack_require__(0);
exports.Type = Type_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DecodeError_1 = __webpack_require__(2);
var Type_1 = __webpack_require__(0);
var BYTES_IN_MEGABYTE = 0x100000;
var DEFAULT_CONFIG = {
    max_array_length: 1000,
    max_bytes_length: 5 * BYTES_IN_MEGABYTE,
    max_nesting: 16,
    max_object_size: 1000,
    max_text_length: 5 * BYTES_IN_MEGABYTE,
};
var Decoder = (function () {
    function Decoder(buffer, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        this.buffer = buffer;
        this.config = config;
        this.view = new DataView(this.buffer);
    }
    Decoder._check_overflow = function (int, overflow) {
        if (int > overflow) {
            throw new DecodeError_1.default(DecodeError_1.default.INT_OVERFLOW);
        }
        return int;
    };
    Decoder.prototype._advance = function (bytes) {
        this.view = new DataView(this.buffer, this.view.byteOffset + bytes);
    };
    Object.defineProperty(Decoder.prototype, "_available", {
        get: function () {
            return this.view.byteLength;
        },
        enumerable: true,
        configurable: true
    });
    Decoder.prototype._read = function (bytes, closure) {
        if (this._available < bytes) {
            throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_EOF);
        }
        var value = closure();
        this._advance(bytes);
        return value;
    };
    Decoder.prototype._u8 = function () {
        var _this = this;
        return this._read(1, function () { return _this.view.getUint8(0); });
    };
    Decoder.prototype._u16 = function () {
        var _this = this;
        return this._read(2, function () { return _this.view.getUint16(0); });
    };
    Decoder.prototype._u32 = function () {
        var _this = this;
        return this._read(4, function () { return _this.view.getUint32(0); });
    };
    Decoder.prototype._u64 = function () {
        var _this = this;
        var r64 = function () { return _this.view.getUint32(0) * Math.pow(2, 32) + _this.view.getUint32(4); };
        return this._read(8, r64);
    };
    Decoder.prototype._f32 = function () {
        var _this = this;
        return this._read(4, function () { return _this.view.getFloat32(0); });
    };
    Decoder.prototype._f64 = function () {
        var _this = this;
        return this._read(8, function () { return _this.view.getFloat64(0); });
    };
    Decoder.prototype._read_length = function (minor) {
        if (0 <= minor && minor <= 23) {
            return minor;
        }
        switch (minor) {
            case 24:
                return this._u8();
            case 25:
                return this._u16();
            case 26:
                return this._u32();
            case 27:
                return Decoder._check_overflow(this._u64(), Number.MAX_SAFE_INTEGER);
        }
        throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE);
    };
    Decoder.prototype._bytes = function (minor, max_len) {
        var _this = this;
        var len = this._read_length(minor);
        if (len > max_len) {
            throw new DecodeError_1.default(DecodeError_1.default.TOO_LONG);
        }
        var callback = function () { return _this.buffer.slice(_this.view.byteOffset, _this.view.byteOffset + len); };
        return this._read(len, callback);
    };
    Decoder.prototype._read_type_info = function () {
        var type = this._u8();
        var major = (type & 0xe0) >> 5;
        var minor = type & 0x1f;
        switch (major) {
            case 0: {
                if (0 <= minor && minor <= 24) {
                    return [Type_1.default.UINT8, minor];
                }
                else {
                    switch (minor) {
                        case 25:
                            return [Type_1.default.UINT16, minor];
                        case 26:
                            return [Type_1.default.UINT32, minor];
                        case 27:
                            return [Type_1.default.UINT64, minor];
                        default:
                            throw new DecodeError_1.default(DecodeError_1.default.INVALID_TYPE);
                    }
                }
            }
            case 1: {
                if (0 <= minor && minor <= 24) {
                    return [Type_1.default.INT8, minor];
                }
                else {
                    switch (minor) {
                        case 25:
                            return [Type_1.default.INT16, minor];
                        case 26:
                            return [Type_1.default.INT32, minor];
                        case 27:
                            return [Type_1.default.INT64, minor];
                        default:
                            throw new DecodeError_1.default(DecodeError_1.default.INVALID_TYPE);
                    }
                }
            }
            case 2:
                return [Type_1.default.BYTES, minor];
            case 3:
                return [Type_1.default.TEXT, minor];
            case 4:
                return [Type_1.default.ARRAY, minor];
            case 5:
                return [Type_1.default.OBJECT, minor];
            case 7:
                switch (minor) {
                    case 20:
                    case 21:
                        return [Type_1.default.BOOL, minor];
                    case 22:
                        return [Type_1.default.NULL, minor];
                    case 25:
                        return [Type_1.default.FLOAT16, minor];
                    case 26:
                        return [Type_1.default.FLOAT32, minor];
                    case 27:
                        return [Type_1.default.FLOAT64, minor];
                    case 31:
                        return [Type_1.default.BREAK, minor];
                }
                break;
        }
        throw new DecodeError_1.default(DecodeError_1.default.INVALID_TYPE);
    };
    Decoder.prototype._type_info_with_assert = function (expected) {
        var _a = this._read_type_info(), type = _a[0], minor = _a[1];
        if (!Array.isArray(expected)) {
            expected = [expected];
        }
        if (!expected.some(function (error) { return type === error; })) {
            throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE, [type, minor]);
        }
        return [type, minor];
    };
    Decoder.prototype._read_unsigned = function (type, minor) {
        switch (type) {
            case Type_1.default.UINT8:
                return minor <= 23 ? minor : this._u8();
            case Type_1.default.UINT16:
                return this._u16();
            case Type_1.default.UINT32:
                return this._u32();
            case Type_1.default.UINT64:
                return this._u64();
        }
        throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE, [type, minor]);
    };
    Decoder.prototype._read_signed = function (overflow, type, minor) {
        switch (type) {
            case Type_1.default.INT8:
                if (minor <= 23) {
                    return -1 - minor;
                }
                return -1 - Decoder._check_overflow(this._u8(), overflow);
            case Type_1.default.INT16:
                return -1 - Decoder._check_overflow(this._u16(), overflow);
            case Type_1.default.INT32:
                return -1 - Decoder._check_overflow(this._u32(), overflow);
            case Type_1.default.INT64:
                return -1 - Decoder._check_overflow(this._u64(), overflow);
            case Type_1.default.UINT8:
            case Type_1.default.UINT16:
            case Type_1.default.UINT32:
            case Type_1.default.UINT64:
                return Decoder._check_overflow(this._read_unsigned(type, minor), overflow);
        }
        throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE, [type, minor]);
    };
    Decoder.prototype._skip_until_break = function (type) {
        for (;;) {
            var _a = this._read_type_info(), t = _a[0], minor = _a[1];
            if (t === Type_1.default.BREAK) {
                return;
            }
            if (t !== type || minor === 31) {
                throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE);
            }
            var len = this._read_length(minor);
            this._advance(len);
        }
    };
    Decoder.prototype._skip_value = function (level) {
        if (level === 0) {
            throw new DecodeError_1.default(DecodeError_1.default.TOO_NESTED);
        }
        var _a = this._read_type_info(), type = _a[0], minor = _a[1];
        var len;
        switch (type) {
            case Type_1.default.UINT8:
            case Type_1.default.UINT16:
            case Type_1.default.UINT32:
            case Type_1.default.UINT64:
            case Type_1.default.INT8:
            case Type_1.default.INT16:
            case Type_1.default.INT32:
            case Type_1.default.INT64:
                this._read_length(minor);
                return true;
            case Type_1.default.BOOL:
            case Type_1.default.NULL:
                return true;
            case Type_1.default.BREAK:
                return false;
            case Type_1.default.FLOAT16:
                this._advance(2);
                return true;
            case Type_1.default.FLOAT32:
                this._advance(4);
                return true;
            case Type_1.default.FLOAT64:
                this._advance(8);
                return true;
            case Type_1.default.BYTES:
            case Type_1.default.TEXT:
                if (minor === 31) {
                    this._skip_until_break(type);
                    return true;
                }
                len = this._read_length(minor);
                this._advance(len);
                return true;
            case Type_1.default.ARRAY:
            case Type_1.default.OBJECT:
                if (minor === 31) {
                    while (this._skip_value(level - 1)) {
                    }
                    return true;
                }
                len = this._read_length(minor);
                while (len--) {
                    this._skip_value(level - 1);
                }
                return true;
            default:
                return false;
        }
    };
    Decoder.prototype.u8 = function () {
        var _a = this._type_info_with_assert([Type_1.default.UINT8]), type = _a[0], minor = _a[1];
        return this._read_unsigned(type, minor);
    };
    Decoder.prototype.u16 = function () {
        var _a = this._type_info_with_assert([Type_1.default.UINT8, Type_1.default.UINT16]), type = _a[0], minor = _a[1];
        return this._read_unsigned(type, minor);
    };
    Decoder.prototype.u32 = function () {
        var _a = this._type_info_with_assert([Type_1.default.UINT8, Type_1.default.UINT16, Type_1.default.UINT32]), type = _a[0], minor = _a[1];
        return this._read_unsigned(type, minor);
    };
    Decoder.prototype.u64 = function () {
        var _a = this._type_info_with_assert([Type_1.default.UINT8, Type_1.default.UINT16, Type_1.default.UINT32, Type_1.default.UINT64]), type = _a[0], minor = _a[1];
        return this._read_unsigned(type, minor);
    };
    Decoder.prototype.i8 = function () {
        var _a = this._type_info_with_assert([Type_1.default.INT8, Type_1.default.UINT8]), type = _a[0], minor = _a[1];
        return this._read_signed(127, type, minor);
    };
    Decoder.prototype.i16 = function () {
        var _a = this._type_info_with_assert([Type_1.default.INT8, Type_1.default.INT16, Type_1.default.UINT8, Type_1.default.UINT16]), type = _a[0], minor = _a[1];
        return this._read_signed(32767, type, minor);
    };
    Decoder.prototype.i32 = function () {
        var _a = this._type_info_with_assert([
            Type_1.default.INT8,
            Type_1.default.INT16,
            Type_1.default.INT32,
            Type_1.default.UINT8,
            Type_1.default.UINT16,
            Type_1.default.UINT32,
        ]), type = _a[0], minor = _a[1];
        return this._read_signed(2147483647, type, minor);
    };
    Decoder.prototype.i64 = function () {
        var _a = this._type_info_with_assert([
            Type_1.default.INT8,
            Type_1.default.INT16,
            Type_1.default.INT32,
            Type_1.default.INT64,
            Type_1.default.UINT8,
            Type_1.default.UINT16,
            Type_1.default.UINT32,
            Type_1.default.UINT64,
        ]), type = _a[0], minor = _a[1];
        return this._read_signed(Number.MAX_SAFE_INTEGER, type, minor);
    };
    Decoder.prototype.unsigned = function () {
        return this.u64();
    };
    Decoder.prototype.int = function () {
        return this.i64();
    };
    Decoder.prototype.f16 = function () {
        this._type_info_with_assert(Type_1.default.FLOAT16);
        var half = this._u16();
        var exp = (half >> 10) & 0x1f;
        var mant = half & 0x3ff;
        var ldexp = function (significand, exponent) { return significand * Math.pow(2, exponent); };
        var val;
        switch (exp) {
            case 0:
                val = ldexp(mant, -24);
                break;
            case 31:
                val = mant === 0 ? Number.POSITIVE_INFINITY : Number.NaN;
                break;
            default:
                val = ldexp(mant + 1024, exp - 25);
                break;
        }
        return half & 0x8000 ? -val : val;
    };
    Decoder.prototype.f32 = function () {
        this._type_info_with_assert(Type_1.default.FLOAT32);
        return this._f32();
    };
    Decoder.prototype.f64 = function () {
        this._type_info_with_assert(Type_1.default.FLOAT64);
        return this._f64();
    };
    Decoder.prototype.bool = function () {
        var _a = this._type_info_with_assert(Type_1.default.BOOL), _ = _a[0], minor = _a[1];
        switch (minor) {
            case 20:
                return false;
            case 21:
                return true;
            default:
                throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE);
        }
    };
    Decoder.prototype.bytes = function () {
        var _a = this._type_info_with_assert(Type_1.default.BYTES), _ = _a[0], minor = _a[1];
        if (minor === 31) {
            throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE);
        }
        return this._bytes(minor, this.config.max_bytes_length);
    };
    Decoder.prototype.text = function () {
        var _a = this._type_info_with_assert(Type_1.default.TEXT), _ = _a[0], minor = _a[1];
        if (minor === 31) {
            throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE);
        }
        var array = new Uint8Array(this._bytes(minor, this.config.max_text_length));
        var utf8 = array.reduce(function (previousValue, char) { return previousValue + String.fromCharCode(char); }, '');
        return decodeURIComponent(escape(utf8));
    };
    Decoder.prototype.optional = function (closure) {
        try {
            return closure();
        }
        catch (error) {
            if (error instanceof DecodeError_1.default && error.extra && error.extra[0] === Type_1.default.NULL) {
                return null;
            }
            throw error;
        }
    };
    Decoder.prototype.array = function () {
        var _a = this._type_info_with_assert(Type_1.default.ARRAY), _ = _a[0], minor = _a[1];
        if (minor === 31) {
            throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE);
        }
        var len = this._read_length(minor);
        if (len > this.config.max_array_length) {
            throw new DecodeError_1.default(DecodeError_1.default.TOO_LONG);
        }
        return len;
    };
    Decoder.prototype.object = function () {
        var _a = this._type_info_with_assert(Type_1.default.OBJECT), _ = _a[0], minor = _a[1];
        if (minor === 31) {
            throw new DecodeError_1.default(DecodeError_1.default.UNEXPECTED_TYPE);
        }
        var len = this._read_length(minor);
        if (len > this.config.max_object_size) {
            throw new DecodeError_1.default(DecodeError_1.default.TOO_LONG);
        }
        return len;
    };
    Decoder.prototype.skip = function () {
        return this._skip_value(this.config.max_nesting);
    };
    return Decoder;
}());
exports.default = Decoder;
//# sourceMappingURL=Decoder.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = __webpack_require__(0);
var Encoder = (function () {
    function Encoder() {
        this.buffer = new ArrayBuffer(4);
        this.view = new DataView(this.buffer);
    }
    Encoder.prototype.get_buffer = function () {
        return this.buffer.slice(0, this.view.byteOffset);
    };
    Encoder.prototype._new_buffer_length = function (need_nbytes) {
        return ~~Math.max(this.buffer.byteLength * 1.5, this.buffer.byteLength + need_nbytes);
    };
    Encoder.prototype._grow_buffer = function (need_nbytes) {
        var new_len = this._new_buffer_length(need_nbytes);
        var new_buf = new ArrayBuffer(new_len);
        new Uint8Array(new_buf).set(new Uint8Array(this.buffer));
        this.buffer = new_buf;
        this.view = new DataView(this.buffer, this.view.byteOffset);
    };
    Encoder.prototype._ensure = function (bytes) {
        if (!(this.view.byteLength < bytes)) {
            return;
        }
        return this._grow_buffer(bytes);
    };
    Encoder.prototype._advance = function (bytes) {
        this.view = new DataView(this.buffer, this.view.byteOffset + bytes);
    };
    Encoder.prototype._write = function (bytes, callback) {
        this._ensure(bytes);
        callback();
        return this._advance(bytes);
    };
    Encoder.prototype._write_type_and_len = function (type, len) {
        var major = Type_1.default.major(type) << 5;
        if (0 <= len && len <= 23) {
            return this._u8(major | len);
        }
        else if (24 <= len && len <= 255) {
            this._u8(major | 24);
            return this._u8(len);
        }
        else if (0x100 <= len && len <= 0xffff) {
            this._u8(major | 25);
            return this._u16(len);
        }
        else if (0x10000 <= len && len <= 0xffffffff) {
            this._u8(major | 26);
            return this._u32(len);
        }
        else if (len <= Number.MAX_SAFE_INTEGER) {
            this._u8(major | 27);
            return this._u64(len);
        }
        throw new RangeError('Invalid size for CBOR object');
    };
    Encoder.prototype._u8 = function (value) {
        var _this = this;
        return this._write(1, function () { return _this.view.setUint8(0, value); });
    };
    Encoder.prototype._u16 = function (value) {
        var _this = this;
        return this._write(2, function () { return _this.view.setUint16(0, value); });
    };
    Encoder.prototype._u32 = function (value) {
        var _this = this;
        return this._write(4, function () { return _this.view.setUint32(0, value); });
    };
    Encoder.prototype._u64 = function (value) {
        var _this = this;
        var low = value % Math.pow(2, 32);
        var high = (value - low) / Math.pow(2, 32);
        var w64 = function () {
            _this.view.setUint32(0, high);
            return _this.view.setUint32(4, low);
        };
        return this._write(8, w64);
    };
    Encoder.prototype._f32 = function (value) {
        var _this = this;
        return this._write(4, function () { return _this.view.setFloat32(0, value); });
    };
    Encoder.prototype._f64 = function (value) {
        var _this = this;
        return this._write(8, function () { return _this.view.setFloat64(0, value); });
    };
    Encoder.prototype._bytes = function (value) {
        var nbytes = value.byteLength;
        this._ensure(nbytes);
        new Uint8Array(this.buffer, this.view.byteOffset).set(value);
        return this._advance(nbytes);
    };
    Encoder.prototype.u8 = function (value) {
        if (0 <= value && value <= 23) {
            this._u8(value);
        }
        else if (24 <= value && value <= 255) {
            this._u8(24);
            this._u8(value);
        }
        else {
            throw new RangeError('Invalid u8');
        }
        return this;
    };
    Encoder.prototype.u16 = function (value) {
        if (0 <= value && value <= 23) {
            this._u8(value);
        }
        else if (24 <= value && value <= 255) {
            this._u8(24);
            this._u8(value);
        }
        else if (0x100 <= value && value <= 0xffff) {
            this._u8(25);
            this._u16(value);
        }
        else {
            throw new RangeError('Invalid u16');
        }
        return this;
    };
    Encoder.prototype.u32 = function (value) {
        if (0 <= value && value <= 23) {
            this._u8(value);
        }
        else if (24 <= value && value <= 255) {
            this._u8(24);
            this._u8(value);
        }
        else if (0x100 <= value && value <= 0xffff) {
            this._u8(25);
            this._u16(value);
        }
        else if (0x10000 <= value && value <= 0xffffffff) {
            this._u8(26);
            this._u32(value);
        }
        else {
            throw new RangeError('Invalid u32');
        }
        return this;
    };
    Encoder.prototype.u64 = function (value) {
        if (0 <= value && value <= 23) {
            this._u8(value);
        }
        else if (24 <= value && value <= 255) {
            this._u8(24);
            this._u8(value);
        }
        else if (0x100 <= value && value <= 0xffff) {
            this._u8(25);
            this._u16(value);
        }
        else if (0x10000 <= value && value <= 0xffffffff) {
            this._u8(26);
            this._u32(value);
        }
        else if (value <= Number.MAX_SAFE_INTEGER) {
            this._u8(27);
            this._u64(value);
        }
        else {
            throw new RangeError('Invalid unsigned integer');
        }
        return this;
    };
    Encoder.prototype.i8 = function (value) {
        if (value >= 0) {
            this._u8(value);
            return this;
        }
        value = -1 - value;
        if (0 <= value && value <= 23) {
            this._u8(0x20 | value);
        }
        else if (24 <= value && value <= 255) {
            this._u8(0x20 | 24);
            this._u8(value);
        }
        else {
            throw new RangeError('Invalid i8');
        }
        return this;
    };
    Encoder.prototype.i16 = function (value) {
        if (value >= 0) {
            this._u16(value);
            return this;
        }
        value = -1 - value;
        if (0 <= value && value <= 23) {
            this._u8(0x20 | value);
        }
        else if (24 <= value && value <= 255) {
            this._u8(0x20 | 24);
            this._u8(value);
        }
        else if (0x100 <= value && value <= 0xffff) {
            this._u8(0x20 | 25);
            this._u16(value);
        }
        else {
            throw new RangeError('Invalid i16');
        }
        return this;
    };
    Encoder.prototype.i32 = function (value) {
        if (value >= 0) {
            this._u32(value);
            return this;
        }
        value = -1 - value;
        if (0 <= value && value <= 23) {
            this._u8(0x20 | value);
        }
        else if (24 <= value && value <= 255) {
            this._u8(0x20 | 24);
            this._u8(value);
        }
        else if (0x100 <= value && value <= 0xffff) {
            this._u8(0x20 | 25);
            this._u16(value);
        }
        else if (0x10000 <= value && value <= 0xffffffff) {
            this._u8(0x20 | 26);
            this._u32(value);
        }
        else {
            throw new RangeError('Invalid i32');
        }
        return this;
    };
    Encoder.prototype.i64 = function (value) {
        if (value >= 0) {
            this._u64(value);
            return this;
        }
        value = -1 - value;
        if (0 <= value && value <= 23) {
            this._u8(0x20 | value);
        }
        else if (24 <= value && value <= 255) {
            this._u8(0x20 | 24);
            this._u8(value);
        }
        else if (0x100 <= value && value <= 0xffff) {
            this._u8(0x20 | 25);
            this._u16(value);
        }
        else if (0x10000 <= value && value <= 0xffffffff) {
            this._u8(0x20 | 26);
            this._u32(value);
        }
        else if (value <= Number.MAX_SAFE_INTEGER) {
            this._u8(0x20 | 27);
            this._u64(value);
        }
        else {
            throw new RangeError('Invalid i64');
        }
        return this;
    };
    Encoder.prototype.f32 = function (value) {
        this._u8(0xe0 | 26);
        this._f32(value);
        return this;
    };
    Encoder.prototype.f64 = function (value) {
        this._u8(0xe0 | 27);
        this._f64(value);
        return this;
    };
    Encoder.prototype.bool = function (value) {
        this._u8(0xe0 | (value ? 21 : 20));
        return this;
    };
    Encoder.prototype.bytes = function (value) {
        this._write_type_and_len(Type_1.default.BYTES, value.byteLength);
        this._bytes(value);
        return this;
    };
    Encoder.prototype.text = function (value) {
        var utf8 = unescape(encodeURIComponent(value));
        this._write_type_and_len(Type_1.default.TEXT, utf8.length);
        this._bytes(new Uint8Array(utf8.split('').map(function (char) { return char.charCodeAt(0); })));
        return this;
    };
    Encoder.prototype.null = function () {
        this._u8(0xe0 | 22);
        return this;
    };
    Encoder.prototype.undefined = function () {
        this._u8(0xe0 | 23);
        return this;
    };
    Encoder.prototype.array = function (len) {
        this._write_type_and_len(Type_1.default.ARRAY, len);
        return this;
    };
    Encoder.prototype.array_begin = function () {
        this._u8(0x9f);
        return this;
    };
    Encoder.prototype.array_end = function () {
        this._u8(0xff);
        return this;
    };
    Encoder.prototype.object = function (len) {
        this._write_type_and_len(Type_1.default.OBJECT, len);
        return this;
    };
    Encoder.prototype.object_begin = function () {
        this._u8(0xbf);
        return this;
    };
    Encoder.prototype.object_end = function () {
        this._u8(0xff);
        return this;
    };
    return Encoder;
}());
exports.default = Encoder;
//# sourceMappingURL=Encoder.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=cbor.bundle.js.map