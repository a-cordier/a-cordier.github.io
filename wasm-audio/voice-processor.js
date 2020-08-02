(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  /**
   * @license
   * Copyright 2010 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */
  // The Module object: Our interface to the outside world. We import
  // and export values on it. There are various ways Module can be used:
  // 1. Not defined. We create it here
  // 2. A function parameter, function(Module) { ..generated code.. }
  // 3. pre-run appended it, var Module = {}; ..generated code..
  // 4. External script tag defines var Module.
  // We need to check if Module already exists (e.g. case 3 above).
  // Substitution will be replaced with actual code on later stage of the build,
  // this way Closure Compiler will not mangle it (e.g. case 4. above).
  // Note that if you want to run closure, and also to use Module
  // after the generated code, you will need to define   var Module = {};
  // before the code. Then that object will be used in the code, and you
  // can continue to use Module afterwards as well.
  var Module = typeof Module !== 'undefined' ? Module : {}; // --pre-jses are emitted after the Module integration code, so that they can
  // refer to Module (if they choose; they can also define Module)
  // Sometimes an existing Module object exists with properties
  // meant to overwrite the default module functionality. Here
  // we collect those properties and reapply _after_ we configure
  // the current environment's defaults to avoid having to be so
  // defensive during initialization.

  var moduleOverrides = {};
  var key;

  for (key in Module) {
    if (Module.hasOwnProperty(key)) {
      moduleOverrides[key] = Module[key];
    }
  }

  var arguments_ = [];
  var thisProgram = './this.program';
  // setting the ENVIRONMENT setting at compile time (see settings.js).


  var ENVIRONMENT_IS_WEB = false;
  var ENVIRONMENT_IS_WORKER = false;
  var ENVIRONMENT_IS_NODE = false;
  var ENVIRONMENT_IS_SHELL = false;
  ENVIRONMENT_IS_WEB = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
  ENVIRONMENT_IS_WORKER = typeof importScripts === 'function'; // N.b. Electron.js environment is simultaneously a NODE-environment, but
  // also a web environment.

  ENVIRONMENT_IS_NODE = (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && _typeof(process.versions) === 'object' && typeof process.versions.node === 'string';
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER; // `/` should be present at the end if `scriptDirectory` is not empty

  var scriptDirectory = '';

  function locateFile(path) {
    if (Module['locateFile']) {
      return Module['locateFile'](path, scriptDirectory);
    }

    return scriptDirectory + path;
  } // Hooks that are implemented differently in different runtime environments.


  var read_, readBinary;
  var nodeFS;
  var nodePath;

  if (ENVIRONMENT_IS_NODE) {
    if (ENVIRONMENT_IS_WORKER) {
      scriptDirectory = require('path').dirname(scriptDirectory) + '/';
    } else {
      scriptDirectory = __dirname + '/';
    }
    /**
     * @license
     * Copyright 2019 The Emscripten Authors
     * SPDX-License-Identifier: MIT
     */


    read_ = function shell_read(filename, binary) {
      var ret = tryParseAsDataURI(filename);

      if (ret) {
        return binary ? ret : ret.toString();
      }

      if (!nodeFS) nodeFS = require('fs');
      if (!nodePath) nodePath = require('path');
      filename = nodePath['normalize'](filename);
      return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
    };

    readBinary = function readBinary(filename) {
      var ret = read_(filename, true);

      if (!ret.buffer) {
        ret = new Uint8Array(ret);
      }

      assert(ret.buffer);
      return ret;
    };

    if (process['argv'].length > 1) {
      thisProgram = process['argv'][1].replace(/\\/g, '/');
    }

    arguments_ = process['argv'].slice(2);

    if (typeof module !== 'undefined') {
      module['exports'] = Module;
    }

    process['on']('uncaughtException', function (ex) {
      // suppress ExitStatus exceptions from showing an error
      if (!(ex instanceof ExitStatus)) {
        throw ex;
      }
    });
    process['on']('unhandledRejection', abort);

    Module['inspect'] = function () {
      return '[Emscripten Module object]';
    };
  } else if (ENVIRONMENT_IS_SHELL) {
    if (typeof read != 'undefined') {
      read_ = function shell_read(f) {
        var data = tryParseAsDataURI(f);

        if (data) {
          return intArrayToString(data);
        }

        return read(f);
      };
    }

    readBinary = function readBinary(f) {
      var data;
      data = tryParseAsDataURI(f);

      if (data) {
        return data;
      }

      if (typeof readbuffer === 'function') {
        return new Uint8Array(readbuffer(f));
      }

      data = read(f, 'binary');
      assert(_typeof(data) === 'object');
      return data;
    };

    if (typeof scriptArgs != 'undefined') {
      arguments_ = scriptArgs;
    } else if (typeof arguments != 'undefined') {
      arguments_ = arguments;
    }

    if (typeof print !== 'undefined') {
      // Prefer to use print/printErr where they exist, as they usually work better.
      if (typeof console === 'undefined') console =
      /** @type{!Console} */
      {};
      console.log =
      /** @type{!function(this:Console, ...*): undefined} */
      print;
      console.warn = console.error =
      /** @type{!function(this:Console, ...*): undefined} */
      typeof printErr !== 'undefined' ? printErr : print;
    }
  } else // Note that this includes Node.js workers when relevant (pthreads is enabled).
    // Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
    // ENVIRONMENT_IS_NODE.
    if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        // Check worker, not web, since window could be polyfilled
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        // web
        scriptDirectory = document.currentScript.src;
      } // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
      // otherwise, slice off the final part of the url to find the script directory.
      // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
      // and scriptDirectory will correctly be replaced with an empty string.


      if (scriptDirectory.indexOf('blob:') !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/') + 1);
      } else {
        scriptDirectory = '';
      } // Differentiate the Web Worker from the Node Worker case, as reading must
      // be done differently.


      {
        /**
         * @license
         * Copyright 2019 The Emscripten Authors
         * SPDX-License-Identifier: MIT
         */
        read_ = function shell_read(url) {
          try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send(null);
            return xhr.responseText;
          } catch (err) {
            var data = tryParseAsDataURI(url);

            if (data) {
              return intArrayToString(data);
            }

            throw err;
          }
        };

        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function readBinary(url) {
            try {
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, false);
              xhr.responseType = 'arraybuffer';
              xhr.send(null);
              return new Uint8Array(
              /** @type{!ArrayBuffer} */
              xhr.response);
            } catch (err) {
              var data = tryParseAsDataURI(url);

              if (data) {
                return data;
              }

              throw err;
            }
          };
        }
      }
    } // Set up the out() and err() hooks, which are how we can print to stdout or
  // stderr, respectively.


  var out = Module['print'] || console.log.bind(console);
  var err = Module['printErr'] || console.warn.bind(console); // Merge back in the overrides

  for (key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
      Module[key] = moduleOverrides[key];
    }
  } // Free the object hierarchy contained in the overrides, this lets the GC
  // reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.


  moduleOverrides = null; // Emit code to handle expected values on the Module object. This applies Module.x
  // to the proper local x. This has two benefits: first, we only emit it if it is
  // expected to arrive, and second, by using a local everywhere else that can be
  // minified.

  if (Module['arguments']) arguments_ = Module['arguments'];
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];
  /**
   * @license
   * Copyright 2010 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */
  // === Preamble library stuff ===
  // Documentation for the public APIs defined in this file must be updated in:
  //    site/source/docs/api_reference/preamble.js.rst
  // A prebuilt local version of the documentation is available at:
  //    site/build/text/docs/api_reference/preamble.js.txt
  // You can also build docs locally as HTML or other formats in site/
  // An online HTML version (which may be of a different version of Emscripten)
  //    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

  var wasmBinary;
  if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];

  if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) !== 'object') {
    err('no native wasm support detected');
  }


  var wasmMemory; // In fastcomp asm.js, we don't need a wasm Table at all.
  // In the wasm backend, we polyfill the WebAssembly object,
  // so this creates a (non-native-wasm) table for us.

  var wasmTable = new WebAssembly.Table({
    'initial': 94,
    'maximum': 94 + 0,
    'element': 'anyfunc'
  }); //========================================
  // Runtime essentials
  //========================================
  // whether we are quitting the application. no code should run after this.
  // set in exit() and abort()

  var ABORT = false; // set by exit() and abort().  Passed to 'onExit' handler.
  /** @type {function(*, string=)} */

  function assert(condition, text) {
    if (!condition) {
      abort('Assertion failed: ' + text);
    }
  } // Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
  /**
   * @license
   * Copyright 2019 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */
  // runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.
  // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
  // a copy of that string as a Javascript String object.


  var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
  /**
   * @param {number} idx
   * @param {number=} maxBytesToRead
   * @return {string}
   */

  function UTF8ArrayToString(heap, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx; // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
    // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
    // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)

    while (heap[endPtr] && !(endPtr >= endIdx)) {
      ++endPtr;
    }

    if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
      return UTF8Decoder.decode(heap.subarray(idx, endPtr));
    } else {
      var str = ''; // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that

      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heap[idx++];

        if (!(u0 & 0x80)) {
          str += String.fromCharCode(u0);
          continue;
        }

        var u1 = heap[idx++] & 63;

        if ((u0 & 0xE0) == 0xC0) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }

        var u2 = heap[idx++] & 63;

        if ((u0 & 0xF0) == 0xE0) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
        }

        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | ch >> 10, 0xDC00 | ch & 0x3FF);
        }
      }
    }

    return str;
  } // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
  // copy of that string as a Javascript String object.
  // maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
  //                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
  //                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
  //                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
  //                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
  //                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
  //                 throw JS JIT optimizations off, so it is worth to consider consistently using one
  //                 style or the other.

  /**
   * @param {number} ptr
   * @param {number=} maxBytesToRead
   * @return {string}
   */


  function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
  } // Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
  // encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
  // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
  //   outIdx: The starting offset in the array to begin the copying.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array.
  //                    This count should include the null terminator,
  //                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.


  function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
      return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.

    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      var u = str.charCodeAt(i); // possibly a lead surrogate

      if (u >= 0xD800 && u <= 0xDFFF) {
        var u1 = str.charCodeAt(++i);
        u = 0x10000 + ((u & 0x3FF) << 10) | u1 & 0x3FF;
      }

      if (u <= 0x7F) {
        if (outIdx >= endIdx) break;
        heap[outIdx++] = u;
      } else if (u <= 0x7FF) {
        if (outIdx + 1 >= endIdx) break;
        heap[outIdx++] = 0xC0 | u >> 6;
        heap[outIdx++] = 0x80 | u & 63;
      } else if (u <= 0xFFFF) {
        if (outIdx + 2 >= endIdx) break;
        heap[outIdx++] = 0xE0 | u >> 12;
        heap[outIdx++] = 0x80 | u >> 6 & 63;
        heap[outIdx++] = 0x80 | u & 63;
      } else {
        if (outIdx + 3 >= endIdx) break;
        heap[outIdx++] = 0xF0 | u >> 18;
        heap[outIdx++] = 0x80 | u >> 12 & 63;
        heap[outIdx++] = 0x80 | u >> 6 & 63;
        heap[outIdx++] = 0x80 | u & 63;
      }
    } // Null-terminate the pointer to the buffer.


    heap[outIdx] = 0;
    return outIdx - startIdx;
  } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
  // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Returns the number of bytes written, EXCLUDING the null terminator.


  function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
  } // Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.


  function lengthBytesUTF8(str) {
    var len = 0;

    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var u = str.charCodeAt(i); // possibly a lead surrogate

      if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | str.charCodeAt(++i) & 0x3FF;
      if (u <= 0x7F) ++len;else if (u <= 0x7FF) len += 2;else if (u <= 0xFFFF) len += 3;else len += 4;
    }

    return len;
  }
  // a copy of that string as a Javascript String object.


  var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

  function UTF16ToString(ptr) {
    var endPtr = ptr; // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
    // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.

    var idx = endPtr >> 1;

    while (HEAP16[idx]) {
      ++idx;
    }

    endPtr = idx << 1;

    if (endPtr - ptr > 32 && UTF16Decoder) {
      return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
    } else {
      var i = 0;
      var str = '';

      while (1) {
        var codeUnit = HEAP16[ptr + i * 2 >> 1];
        if (codeUnit == 0) return str;
        ++i; // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.

        str += String.fromCharCode(codeUnit);
      }
    }
  } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
  // Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   outPtr: Byte address in Emscripten HEAP where to write the string to.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
  //                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.


  function stringToUTF16(str, outPtr, maxBytesToWrite) {
    // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
    if (maxBytesToWrite === undefined) {
      maxBytesToWrite = 0x7FFFFFFF;
    }

    if (maxBytesToWrite < 2) return 0;
    maxBytesToWrite -= 2; // Null terminator.

    var startPtr = outPtr;
    var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;

    for (var i = 0; i < numCharsToWrite; ++i) {
      // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
      var codeUnit = str.charCodeAt(i); // possibly a lead surrogate

      HEAP16[outPtr >> 1] = codeUnit;
      outPtr += 2;
    } // Null-terminate the pointer to the HEAP.


    HEAP16[outPtr >> 1] = 0;
    return outPtr - startPtr;
  } // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.


  function lengthBytesUTF16(str) {
    return str.length * 2;
  }

  function UTF32ToString(ptr) {
    var i = 0;
    var str = '';

    while (1) {
      var utf32 = HEAP32[ptr + i * 4 >> 2];
      if (utf32 == 0) return str;
      ++i; // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
      // See http://unicode.org/faq/utf_bom.html#utf16-3

      if (utf32 >= 0x10000) {
        var ch = utf32 - 0x10000;
        str += String.fromCharCode(0xD800 | ch >> 10, 0xDC00 | ch & 0x3FF);
      } else {
        str += String.fromCharCode(utf32);
      }
    }
  } // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
  // Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   outPtr: Byte address in Emscripten HEAP where to write the string to.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
  //                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.


  function stringToUTF32(str, outPtr, maxBytesToWrite) {
    // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
    if (maxBytesToWrite === undefined) {
      maxBytesToWrite = 0x7FFFFFFF;
    }

    if (maxBytesToWrite < 4) return 0;
    var startPtr = outPtr;
    var endPtr = startPtr + maxBytesToWrite - 4;

    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var codeUnit = str.charCodeAt(i); // possibly a lead surrogate

      if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
        var trailSurrogate = str.charCodeAt(++i);
        codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | trailSurrogate & 0x3FF;
      }

      HEAP32[outPtr >> 2] = codeUnit;
      outPtr += 4;
      if (outPtr + 4 > endPtr) break;
    } // Null-terminate the pointer to the HEAP.


    HEAP32[outPtr >> 2] = 0;
    return outPtr - startPtr;
  } // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.


  function lengthBytesUTF32(str) {
    var len = 0;

    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var codeUnit = str.charCodeAt(i);
      if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.

      len += 4;
    }

    return len;
  } // Allocate heap space for a JS string, and write it there.
  var WASM_PAGE_SIZE = 65536;

  var /** @type {ArrayBuffer} */
  buffer,
  /** @type {Int8Array} */
  HEAP8,
  /** @type {Uint8Array} */
  HEAPU8,
  /** @type {Int16Array} */
  HEAP16,
  /** @type {Uint16Array} */
  HEAPU16,
  /** @type {Int32Array} */
  HEAP32,
  /** @type {Uint32Array} */
  HEAPU32,
  /** @type {Float32Array} */
  HEAPF32,
  /** @type {Float64Array} */
  HEAPF64;

  function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module['HEAP8'] = HEAP8 = new Int8Array(buf);
    Module['HEAP16'] = HEAP16 = new Int16Array(buf);
    Module['HEAP32'] = HEAP32 = new Int32Array(buf);
    Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
    Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
    Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
    Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
    Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
  }

  var DYNAMIC_BASE = 5253024,
      DYNAMICTOP_PTR = 9984;
  var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 134217728;
  /**
   * @license
   * Copyright 2019 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */
  // In standalone mode, the wasm creates the memory, and the user can't provide it.
  // In non-standalone/normal mode, we create the memory here.

  /**
   * @license
   * Copyright 2019 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */
  // Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
  // memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE,
      'maximum': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
    });
  }

  if (wasmMemory) {
    buffer = wasmMemory.buffer;
  } // If the user provides an incorrect length, just use that length instead rather than providing the user to
  // specifically provide the memory length with Module['INITIAL_MEMORY'].


  INITIAL_INITIAL_MEMORY = buffer.byteLength;
  updateGlobalBufferAndViews(buffer);
  HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
  /**
   * @license
   * Copyright 2019 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */

  /**
   * @license
   * Copyright 2019 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */

  function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
      var callback = callbacks.shift();

      if (typeof callback == 'function') {
        callback(Module); // Pass the module as the first argument.

        continue;
      }

      var func = callback.func;

      if (typeof func === 'number') {
        if (callback.arg === undefined) {
          Module['dynCall_v'](func);
        } else {
          Module['dynCall_vi'](func, callback.arg);
        }
      } else {
        func(callback.arg === undefined ? null : callback.arg);
      }
    }
  }

  var __ATPRERUN__ = []; // functions called before the runtime is initialized

  var __ATINIT__ = []; // functions called during startup

  var __ATMAIN__ = []; // functions called when main() is to be run

  var __ATPOSTRUN__ = []; // functions called after the main() is called

  function preRun() {
    if (Module['preRun']) {
      if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];

      while (Module['preRun'].length) {
        addOnPreRun(Module['preRun'].shift());
      }
    }

    callRuntimeCallbacks(__ATPRERUN__);
  }

  function initRuntime() {
    callRuntimeCallbacks(__ATINIT__);
  }

  function preMain() {
    callRuntimeCallbacks(__ATMAIN__);
  }

  function postRun() {
    if (Module['postRun']) {
      if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];

      while (Module['postRun'].length) {
        addOnPostRun(Module['postRun'].shift());
      }
    }

    callRuntimeCallbacks(__ATPOSTRUN__);
  }

  function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
  }

  function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  }
  // do asynchronous work before running, increment this and
  // decrement it. Incrementing must happen in a place like
  // Module.preRun (used by emcc to add file preloading).
  // Note that you can add dependencies in preRun, even though
  // it happens right before run - run will be postponed until
  // the dependencies are met.

  var runDependencies = 0;
  var runDependencyWatcher = null;
  var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

  function addRunDependency(id) {
    runDependencies++;

    if (Module['monitorRunDependencies']) {
      Module['monitorRunDependencies'](runDependencies);
    }
  }

  function removeRunDependency(id) {
    runDependencies--;

    if (Module['monitorRunDependencies']) {
      Module['monitorRunDependencies'](runDependencies);
    }

    if (runDependencies == 0) {
      if (runDependencyWatcher !== null) {
        clearInterval(runDependencyWatcher);
        runDependencyWatcher = null;
      }

      if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;
        dependenciesFulfilled = null;
        callback(); // can add another dependenciesFulfilled
      }
    }
  }

  Module["preloadedImages"] = {}; // maps url to image data

  Module["preloadedAudios"] = {}; // maps url to audio data

  /** @param {string|number=} what */

  function abort(what) {
    if (Module['onAbort']) {
      Module['onAbort'](what);
    }

    what += '';
    out(what);
    err(what);
    ABORT = true;
    what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.'; // Throw a wasm runtime error, because a JS error might be seen as a foreign
    // exception, which means we'd run destructors on it. We need the error to
    // simply make the program stop.

    throw new WebAssembly.RuntimeError(what);
  }
  /**
   * @license
   * Copyright 2015 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */

  /**
   * @license
   * Copyright 2017 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */

  function hasPrefix(str, prefix) {
    return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
  } // Prefix of data URIs emitted by SINGLE_FILE and related options.


  var dataURIPrefix = 'data:application/octet-stream;base64,'; // Indicates whether filename is a base64 data URI.

  function isDataURI(filename) {
    return hasPrefix(filename, dataURIPrefix);
  }

  var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAAB9wIzYAABf2ABfwF/YAF/AGACf38AYAJ/fwF/YAN/f38Bf2AAAGACf30AYAN/f38AYAR/f39/AGAFf39/f38AYAZ/f39/f38AYAJ/fQF9YAJ/fQF/YAR/f39/AX9gAX0BfWAFf39/f38Bf2ADf399AGAGf3x/f39/AX9gAX8BfWAEf39/fQBgBH9+fn8AYAJ+fwF/YAN/fn8BfmACf38BfWABfAF9YAJ8fwF8YAd/f39/f39/AGAIf39/f39/f38AYAx/f39/f39/f39/f38AYA1/f39/f39/f39/f39/AGAHf39/f39/fwF/YAd/f399fX9/AX9gB39/fH9/f38Bf2AEf35/fwF/YAN/fX0Bf2AGf319fX19AX9gA35/fwF/YAJ9fwF/YAR/f35/AX5gAXwBfmADf39/AX1gBX9/f39/AX1gA399fwF9YAN/fX0BfWAEf319fQF9YAN9fX8BfWAEfX1/fwF9YAJ+fgF8YAF8AXxgAnx8AXwCowYdA2VudhZfZW1iaW5kX3JlZ2lzdGVyX2NsYXNzAB4DZW52Gl9lbWJpbmRfcmVnaXN0ZXJfc21hcnRfcHRyAB0DZW52Il9lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY29uc3RydWN0b3IACwNlbnYVX2VtYmluZF9yZWdpc3Rlcl9lbnVtAAkDZW52G19lbWJpbmRfcmVnaXN0ZXJfZW51bV92YWx1ZQAIA2Vudg1fZW12YWxfZGVjcmVmAAIDZW52EV9lbXZhbF90YWtlX3ZhbHVlAAQDZW52DV9lbXZhbF9pbmNyZWYAAgNlbnYLX2VtdmFsX2NhbGwADgNlbnYYX19jeGFfYWxsb2NhdGVfZXhjZXB0aW9uAAEDZW52C19fY3hhX3Rocm93AAgDZW52H19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfZnVuY3Rpb24AHANlbnYFYWJvcnQABhZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxCGZkX2Nsb3NlAAEWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQhmZF93cml0ZQAOA2VudhVfZW1iaW5kX3JlZ2lzdGVyX3ZvaWQAAwNlbnYVX2VtYmluZF9yZWdpc3Rlcl9ib29sAAoDZW52G19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZwADA2Vudhxf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IhoLCQBBoMkAEC8aC6EJAQN/IwBB8AFrIgEkABAwEDEhAhAxIQMQMhAzEDQQMRA1QQEQNyACEDcgA0GACBA4QQIQABA6EDJBgAgQOxA1QQMQPUEEED9BBRA4QQYQARAyIAFB6AFqEEIgAUHoAWoQQxA1QQdBCBACIAFBADYC7AEgAUEJNgLoASABIAEpA+gBNwPgAUGMCCABQeABahBHIAFBADYC7AEgAUEKNgLoASABIAEpA+gBNwPYAUGUCCABQdgBahBJIAFBADYC7AEgAUELNgLoASABIAEpA+gBNwPQAUGgCCABQdABahBLIAFBADYC7AEgAUEMNgLoASABIAEpA+gBNwPIAUGxCCABQcgBahBLIAFBADYC7AEgAUENNgLoASABIAEpA+gBNwPAAUHCCCABQcABahBJIAFBADYC7AEgAUEONgLoASABIAEpA+gBNwO4AUHOCCABQbgBahBLIAFBADYC7AEgAUEPNgLoASABIAEpA+gBNwOwAUHfCCABQbABahBLIAFBADYC7AEgAUEQNgLoASABIAEpA+gBNwOoAUHwCCABQagBahBRIAFBADYC7AEgAUERNgLoASABIAEpA+gBNwOgAUGBCSABQaABahBLIAFBADYC7AEgAUESNgLoASABIAEpA+gBNwOYAUGUCSABQZgBahBLIAFBADYC7AEgAUETNgLoASABIAEpA+gBNwOQAUGmCSABQZABahBLIAFBADYC7AEgAUEUNgLoASABIAEpA+gBNwOIAUG6CSABQYgBahBLIAFBADYC7AEgAUEVNgLoASABIAEpA+gBNwOAAUHOCSABQYABahBXIAFBADYC7AEgAUEWNgLoASABIAEpA+gBNwN4QdwJIAFB+ABqEFEgAUEANgLsASABQRc2AugBIAEgASkD6AE3A3BB5gkgAUHwAGoQUSABQQA2AuwBIAFBGDYC6AEgASABKQPoATcDaEHzCSABQegAahBLIAFBADYC7AEgAUEZNgLoASABIAEpA+gBNwNgQYsKIAFB4ABqEEsgAUEANgLsASABQRo2AugBIAEgASkD6AE3A1hBowogAUHYAGoQSyABQQA2AuwBIAFBGzYC6AEgASABKQPoATcDUEG6CiABQdAAahBRIAFBADYC7AEgAUEcNgLoASABIAEpA+gBNwNIQcsKIAFByABqEFEgAUEANgLs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QeABakHgyAAgAUHAyAAQeRCDAQsXACAAQeABakHoyAAgAUHAyAAQeRCEAQsMACAAQdQCaiABEHcLPQEBfyMAQRBrIgIkACACIAEpAgA3AwgQMiAAIAIQoAIgAhCsAhCiAkEpIAJBCGoQngJBABALIAJBEGokAAsKACAAIAE2AugCCwoAIAAgATYC7AILFAAgAEGAyQAgAUHAyAAQeTgC5AMLFwAgAEHwAmpB0MgAIAFBwMgAEHkQgQELFwAgAEHwAmpB2MgAIAFBwMgAEHkQggELCgAgACABNgKsAQsKACAAIAE2ArABCwwAIABBiAFqIAEQdwsKACAAIAE2AqgBCz0BAX8jAEEQayICJAAgAiABKQIANwMIEDIgACACEKACIAIQrgIQogJBKiACQQhqEJ4CQQAQCyACQRBqJAALCgAgACABNgLYAQsKACAAIAE2AtwBCwwAIABBtAFqIAEQdwsKACAAIAE2AtQBCwsAIAAoAugDQQNGCzwBAX8jAEEQayICJAAgAiABKQIANwMIEDIgACACELACIAIQsQIQP0ErIAJBCGoQngJBABALIAJBEGokAAsTACAAQQI2AugDIABB4AFqEIUBCz0BAX8jAEEQayICJAAgAiABKQIANwMIEDIgACACELACIAIQtAIQtQJBLCACQQhqEJ4CQQAQCyACQRBqJAALFwAgASABIAJBAnRqIAAgARCaARsqAgALCwAgACABOAIAIAALEAAgBCAAIAEgAhBqIAMQeQsLACAAIAE4AgQgAAsLACAAIAE4AgggAAsLACAAIAE4AgwgAAsLACAAIAE4AhAgAAsLACAAIAE4AhQgAAsLACAAIAE4AhggAAsLACAAIAE4AhwgAAsmACAAKALoA0UEQCAAQeABahCbASAAQfACahCbASAAQQE2AugDCwsjACAAIAEQnAEgAEHUAmogACABEJ0BIAEqAgggASoCDBCeAQskAAJAIAAoAugDQQJHDQAgAEHgAWoQnwFFDQAgAEEDNgLoAwsLCQAgACABNgIACwgAIAAgARB3CygBAX0gACoCACIDIAEgAioCACIBkyAAKgIEIAOTlCACKgIEIAGTlZILCQAgACABOAIQCwgAIAAgARB6CwkAIAAgATgCFAsIACAAIAEQfAsLACAAQSBqIAEQdwsLACAAQSBqIAEQegsLACAAQSBqIAEQ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AAsLACAAKAIAEAUgAAsFAEG8EAsLACAAIAE2AgAgAAs0AQF/IwBBEGsiAiQAIAJBCGogARDIARDLASEBIAAQzAEgARDNARAGNgIAIAJBEGokACAACwwAIAAgARDSARogAAsEACAAC1gBAX8jAEEgayIDJAAgAyABNgIUIABBABDTARogAEGUDjYCACAAQQxqIANBCGogA0EUaiACEMgBENQBIgIgA0EYahDIARDVARogAhDWARogA0EgaiQAIAALAwABCzsBAX8jAEEQayICJAAgAiAAEMgBNgIMIAJBDGogARDIARDIARDOARDPASACQQxqENABIAJBEGokACAACwUAENEBCwcAIAAQyAELDgAgACgCABAHIAAoAgALGQAgACgCACABNgIAIAAgACgCAEEIajYCAAsDAAELBQBBhA4LFAAgACABKAIAIgE2AgAgARAHIAALGwAgACABENcBGiAAIAE2AgggAEHQKjYCACAACx0AIAAgARDIARDYARogAEEEaiACEMgBENkBGiAACxoAIAAgARDIARDaARogACACEMgBENsBGiAACw0AIABBBGoQ3AEaIAALEwAgACABNgIEIABBmCo2AgAgAAsRACAAIAEQyAEoAgA2AgAgAAsPACAAIAEQyAEQ6AEaIAALDwAgACABEMgBEOoBGiAACwoAIAEQyAEaIAALCgAgABDCARogAAsbACAAQZQONgIAIABBDGoQ3gEaIAAQyAEaIAALCgAgABDWARogAAsKACAAEN0BEMkCCykAIABBDGoiABDNARDhASAAEM0BEM0BKAIAEOIBIAAQzQEQ4QEQwgEaCwoAIABBBGoQyAELOAAjAEEQayIBJAAgAUEIaiAAEOwBIAFBCGoQwwEaIAEQ7QEgACABEO4BGiABEMMBGiABQRBqJAALJAEBf0EAIQIgAUGQEBDkAQR/IABBDGoQzQEQ4QEQyAEFIAILCw0AIAAoAgQgASgCBEYLOgEDfyMAQRBrIgEkACABQQhqIABBDGoiAhDNARDmASEDIAIQzQEaIAMgABDNAUEBEOcBIAFBEGokAAsEACAACw4AIAEgAkEUbEEEEPQBCwwAIAAgARDpARogAAsVACAAIAEoAgA2AgAgAUEANgIAIAALHAAgACABKAIANgIAIABBBGogAUEEahDrARogAAsMACAAIAEQ6AEaIAALCwAgACABQS0Q7wELCgAgAEEBEMUBGgscACAAKAIAEAUgACABKAIANgIAIAFBADYCACAAC0ABAn8jAEEQayIDJAAgAxDwASEEIAAgASgCACADQQhqEPEBIANBCGoQ8gEgBBDNASACEQ4AEMUBGiADQRBqJAALKAEBfyMAQRBrIgEkACABIAAQyAE2AgwgAUEMahDQASABQRBqJAAgAAsEAEEACwUAEPMBCwUAQbwPCwsAIAAgASACEPUBCwkAIAAgARD2AQsHACAAEPcBCwcAIAAQyQILDwAgABD5AQRAIAAQxQILCygBAX9BACEBIABBBGoQ+gFBf0YEfyAAIAAoAgAoAggRAgBBAQUgAQsLEwAgACAAKAIAQX9qIgA2AgAgAAsfACAAIAEoAgA2AgAgACABKAIENgIEIAFCADcCACAACx8AIAAQhQIgAUkEQEHQEBCGAgALIAFBnARsQQQQhwILEgAgACACNgIEIAAgATYCACAACy0BAX8jAEEQayIDJAAgAyABNgIMIAAgA0EMaiACEMgBEIgCGiADQRBqJAAgAAsKACAAEM0BKAIACzkBAX8jAEEQayIBJAAgAEEAENMBGiAAQZwRNgIAIABBDGogAUEIahDIASABEIkCGiABQRBqJAAgAAsNACAAQQxqEM0BEMgBCxoBAX8gABDNASgCACEBIAAQzQFBADYCACABCzwBAX8jAEEQayIDJAAgABC+ASIAIAI2AgQgACABNgIAIAMgATYCBCADIAE2AgAgACADEMoBIANBEGokAAsLACAAQQAQigIgAAsHAEHrueUDCxoBAX9BCBAJIgEgABCLAhogAUH4MEEuEAoACwcAIAAQyAILHQAgACABEMgBENgBGiAAQQRqIAIQyAEQjAIaIAALGwAgACABEMgBENsBGiACEMgBGiAAEI0CGiAACycBAX8gABDNASgCACECIAAQzQEgATYCACACBEAgABDhASACEJgCCwsUACAAIAEQzQIaIABB2DA2AgAgAAsRACAAIAEQyAEpAgA3AgAgAAsKACAAEJICGiAACw0AIAAQyAEaIAAQyQILCwAgAEEMahDNARoLOgEDfyMAQRBrIgEkACABQQhqIABBDGoiAhDNARDmASEDIAIQzQEaIAMgABDNAUEBEJECIAFBEGokAAsPACABIAJBnARsQQQQ9AELmAEAIAAQ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IAAgAUEGdkE/cUGAAXI6AAIgACABQQx2QT9xQYABcjoAAUEEDwsQzwJBGTYCAAtBfwUgAgsPCyAAIAE6AABBAQsFABDUAgsUACAARQRAQQAPCyAAIAFBABDVAgvoAQECfyACQQBHIQMCQAJAAkACQCACRQ0AIABBA3FFDQAgAUH/AXEhBANAIAAtAAAgBEYNAiAAQQFqIQAgAkF/aiICQQBHIQMgAkUNASAAQQNxDQALCyADRQ0BCyAALQAAIAFB/wFxRg0BAkAgAkEETwRAIAFB/wFxQYGChAhsIQQDQCAAKAIAIARzIgNBf3MgA0H//ft3anFBgIGChHhxDQIgAEEEaiEAIAJBfGoiAkEDSw0ACwsgAkUNAQsgAUH/AXEhAwNAIAAtAAAgA0YNAiAAQQFqIQAgAkF/aiICDQALC0EADwsgAAt/AgF/AX4gAL0iA0I0iKdB/w9xIgJB/w9HBHwgAkUEQCABIABEAAAAAAAAAABhBH9BAAUgAEQAAAAAAADwQ6IgARDZAiEAIAEoAgBBQGoLNgIAIAAPCyABIAJBgnhqNgIAIANC/////////4eAf4NCgICAgICAgPA/hL8FIAALC1ABAX4CQCADQcAAcQRAIAEgA0FAaq2GIQJCACEBDAELIANFDQAgAiADrSIEhiABQcAAIANrrYiEIQIgASAEhiEBCyAAIAE3AwAgACACNwMIC1ABAX4CQCADQcAAcQRAIAIgA0FAaq2IIQFCACECDAELIANFDQAgAkHAACADa62GIAEgA60iBIiEIQEgAiAEiCECCyAAIAE3AwAgACACNwMIC9kDAgJ/An4jAEEgayICJAACQCABQv///////////wCDIgRCgICAgICAwP9DfCAEQoCAgICAgMCAvH98VARAIAFCBIYgAEI8iIQhBCAAQv//////////D4MiAEKBgICAgICAgAhaBEAgBEKBgICAgICAgMAAfCEFDAILIARCgICAgICAgIBAfSEFIABCgICAgICAgIAIhUIAUg0BIAVCAYMgBXwhBQwBCyAAUCAEQoCAgICAgMD//wBUIARCgICAgICAwP//AFEbRQRAIAFCBIYgAEI8iIRC/////////wODQoCAgICAgID8/wCEIQUMAQtCgICAgICAgPj/ACEFIARC////////v//DAFYNAEIAIQUgBEIwiKciA0GR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AzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAvzAgICfwF+AkAgAkUNACAAIAJqIgNBf2ogAToAACAAIAE6AAAgAkEDSQ0AIANBfmogAToAACAAIAE6AAEgA0F9aiABOgAAIAAgAToAAiACQQdJDQAgA0F8aiABOgAAIAAgAToAAyACQQlJDQAgAEEAIABrQQNxIgRqIgMgAUH/AXFBgYKECGwiATYCACADIAIgBGtBfHEiBGoiAkF8aiABNgIAIARBCUkNACADIAE2AgggAyABNgIEIAJBeGogATYCACACQXRqIAE2AgAgBEEZSQ0AIAMgATYCGCADIAE2AhQgAyABNgIQIAMgATYCDCACQXBqIAE2AgAgAkFsaiABNgIAIAJBaGogATYCACACQWRqIAE2AgAgBCADQQRxQRhyIgRrIgJBIEkNACABrSIFQiCGIAWEIQUgAyAEaiEBA0AgASAFNwMYIAEgBTcDECABIAU3AwggASAFNwMAIAFBIGohASACQWBqIgJBH0sNAAsLIAALWQEBfyAAIAAtAEoiAUF/aiABcjoASiAAKAIAIgFBCHEEQCAAIAFBIHI2AgBBfw8LIABCADcCBCAAIAAoAiwiATYCHCAAIAE2AhQgACABIAAoAjBqNgIQQQALkAEBA38jAEEQayIDJAAgAyABOgAPAkAgACgCECICRQRAQX8hAiAAEIkEDQEgACgCECECCwJAIAAoAhQiBCACTw0AIAFB/wFxIgIgACwAS0YNACAAIARBAWo2AhQgBCABOgAADAELQX8hAiAAIANBD2pBASAAKAIkEQUAQQFHDQAgAy0ADyECCyADQRBqJAAgAgvAAQEEfwJAIAIoAhAiAwR/IAMFQQAhBCACEIkEDQEgAigCEAsgAigCFCIFayABSQRAIAIgACABIAIoAiQRBQAPC0EAIQYCQCACLABLQQBIDQAgASEEA0AgBCIDRQ0BIAAgA0F/aiIEai0AAEEKRw0ACyACIAAgAyACKAIkEQUAIgQgA0kNASABIANrIQEgACADaiEAIAIoAhQhBSADIQYLIAUgACABEIcEGiACIAIoAhQgAWo2AhQgASAGaiEECyAEC5QBAQN/IAAhAQJAAkAgAEEDcUUNACAALQAARQRAQQAPCyAAIQEDQCABQQFqIgFBA3FFDQEgAS0AAA0ACwwBCwNAIAEiAkEEaiEBIAIoAgAiA0F/cyADQf/9+3dqcUGAgYKEeHFFDQALIANB/wFxRQRAIAIgAGsPCwNAIAItAAEhAyACQQFqIgEhAiADDQALCyABIABrCx8AQezNACgCAEUEQEHwzQAgATYCAEHszQAgADYCAAsLBAAjAAsQACMAIABrQXBxIgAkACAACwYAIAAkAAsGACAAQAALCQAgASAAEQEACwkAIAEgABECAAsHACAAEQAACwsAIAEgAiAAEQQACw8AIAEgAiADIAQgABEJAAsLACABIAIgABEDAAsLACABIAIgABEHAAsRACABIAIgAyAEIAUgABEKAAsNACABIAIgAyAAEQgACw0AIAEgAiADIAAREQALDwAgASACIAMgBCAAEQ4ACwcAIAARBgALDQAgASACIAMgABEFAAsNACABIAIgAyAAERcACxMAIAEgAiADIAQgBSAGIAAREgALEwAgASACIAMgBCAFIAYgABELAAsiAQF+IAAgASACrSADrUIghoQgBBCfBCIFQiCIpxAZIAWnCxMAIAAgAacgAUIgiKcgAiADEBoLC9g8FgBBgAgL4gtWb2ljZUtlcm5lbABwcm9jZXNzAHNldE9zYzFNb2RlAHNldE9zYzFTZW1pU2hpZnQAc2V0T3NjMUNlbnRTaGlmdABzZXRPc2MyTW9kZQBzZXRPc2MyU2VtaVNoaWZ0AHNldE9zYzJDZW50U2hpZnQAc2V0T3NjMkFtcGxpdHVkZQBzZXRBbXBsaXR1ZGVBdHRhY2sAc2V0QW1wbGl0dWRlRGVjYXkAc2V0QW1wbGl0dWRlU3VzdGFpbgBzZXRBbXBsaXR1ZGVSZWxlYXNlAHNldEZpbHRlck1vZGUAc2V0Q3V0b2ZmAHNldFJlc29uYW5jZQBzZXRDdXRvZmZFbnZlbG9wZUFtb3VudABzZXRDdXRvZmZFbnZlbG9wZUF0dGFjawBzZXRDdXRvZmZFbnZlbG9wZURlY2F5AHNldExmbzFGcmVxdWVuY3kAc2V0TGZvMU1vZEFtb3VudABzZXRMZm8xTW9kZQBzZXRMZm8xRGVzdGluYXRpb24Ac2V0TGZvMkZyZXF1ZW5jeQBzZXRMZm8yTW9kQW1vdW50AHNldExmbzJNb2RlAHNldExmbzJEZXN0aW5hdGlvbgBpc1N0b3BwZWQAZW50ZXJSZWxlYXNlU3RhZ2UAV2F2ZUZvcm0AU0lORQBTQVcAU1FVQVJFAFRSSUFOR0xFAEZpbHRlck1vZGUATE9XUEFTUwBMT1dQQVNTX1BMVVMAQkFORFBBU1MASElHSFBBU1MAVm9pY2VTdGF0ZQBESVNQT1NFRABTVEFSVEVEAFNUT1BQSU5HAFNUT1BQRUQATGZvRGVzdGluYXRpb24ARlJFUVVFTkNZAE9TQ0lMTEFUT1JfTUlYAENVVE9GRgBSRVNPTkFOQ0UAMTFWb2ljZUtlcm5lbAAYGwAAkgYAAFAxMVZvaWNlS2VybmVsAAD4GwAAqAYAAAAAAACgBgAAUEsxMVZvaWNlS2VybmVsAPgbAADIBgAAAQAAAKAGAABpaQB2AHZpAE4xMGVtc2NyaXB0ZW4zdmFsRQAAGBsAAPAGAAAAAAAAsAcAAC8AAAAwAAAAMQAAADIAAAAzAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUDExVm9pY2VLZXJuZWxOMTBlbXNjcmlwdGVuMTVzbWFydF9wdHJfdHJhaXRJTlNfMTBzaGFyZWRfcHRySVMxX0VFRTExdmFsX2RlbGV0ZXJFTlNfOWFsbG9jYXRvcklTMV9FRUVFAAAAAEAbAAAoBwAAhBUAAE4xMGVtc2NyaXB0ZW4xNXNtYXJ0X3B0cl90cmFpdElOU3QzX18yMTBzaGFyZWRfcHRySTExVm9pY2VLZXJuZWxFRUUxMXZhbF9kZWxldGVyRQAAABgbAAC8BwAATlN0M19fMjEwc2hhcmVkX3B0ckkxMVZvaWNlS2VybmVsRUUAGBsAABgIAABpAGlpaQAAADwIAABhbGxvY2F0b3I8VD46OmFsbG9jYXRlKHNpemVfdCBuKSAnbicgZXhjZWVkcyBtYXhpbXVtIHN1cHBvcnRlZCBzaXplAAAAAAD0CAAANAAAADUAAAA2AAAANwAAADgAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUkxMVZvaWNlS2VybmVsTlNfOWFsbG9jYXRvcklTMV9FRUVFAAAAAEAbAACwCAAAhBUAACAaAAC4BgAApBoAAIwaAACkGgAAdmlpaWlpAAAgGgAAuAYAADwJAABOMTBPc2Np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c3NfdHlwZV9pbmZvRQAAAABAGwAAYBsAAPAYAAAAAAAA5BsAAEcAAABXAAAASQAAAEoAAABPAAAAWAAAAFkAAABaAAAATjEwX19jeHhhYml2MTIxX192bWlfY2xhc3NfdHlwZV9pbmZvRQAAAEAbAAC8GwAA8BgAAAAAAABQGQAARwAAAFsAAABJAAAASgAAAFwAAAB2b2lkAGJvb2wAY2hhcgBzaWduZWQgY2hhcgB1bnNpZ25lZCBjaGFyAHNob3J0AHVuc2lnbmVkIHNob3J0AGludAB1bnNpZ25lZCBpbnQAbG9uZwB1bnNpZ25lZCBsb25nAGZsb2F0AGRvdWJsZQBzdGQ6OnN0cmluZwBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBzdGQ6OndzdHJpbmcAc3RkOjp1MTZzdHJpbmcAc3RkOjp1MzJzdHJpbmcAZW1zY3JpcHRlbjo6dmFsAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4ATlN0M19fMjEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUATlN0M19fMjIxX19iYXNpY19zdHJpbmdfY29tbW9uSUxiMUVFRQAAGBsAAGEfAACcGwAAIh8AAAAAAAABAAAAiB8AAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQAAnBsAAKgfAAAAAAAAAQAAAIgfAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUAAJwbAAAAIAAAAAAAAAEAAACIHwAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEc05TXzExY2hhcl90cmFpdHNJRHNFRU5TXzlhbGxvY2F0b3JJRHNFRUVFAAAAnBsAAFggAAAAAAAAAQAAAIgfAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUAAACcGwAAtCAAAAAAAAABAAAAiB8AAAAAAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ljRUUAABgbAAAQIQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJYUVFAAAYGwAAOCEAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWhFRQAAGBsAAGAhAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lzRUUAABgbAACIIQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJdEVFAAAYGwAAsCEAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWlFRQAAGBsAANghAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lqRUUAABgbAAAAIgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbEVFAAAYGwAAKCIAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SW1FRQAAGBsAAFAiAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lmRUUAABgbAAB4IgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAAAYGwAAoCIAQcjFAAsBBQBB1MUACwE8AEHsxQALCj0AAAA+AAAAtCQAQYTGAAsBAgBBk8YACwX//////wBBiMgACwLcJA==';

  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

  function getBinary() {
    try {
      if (wasmBinary) {
        return new Uint8Array(wasmBinary);
      }

      var binary = tryParseAsDataURI(wasmBinaryFile);

      if (binary) {
        return binary;
      }

      if (readBinary) {
        return readBinary(wasmBinaryFile);
      } else {
        throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
      }
    } catch (err) {
      abort(err);
    }
  }
  // Receives the wasm imports, returns the exports.


  function createWasm() {
    // prepare imports
    var info = {
      'env': asmLibraryArg,
      'wasi_snapshot_preview1': asmLibraryArg
    }; // Load the wasm module and create an instance of using native support in the JS engine.
    // handle a generated wasm instance, receiving its exports and
    // performing other necessary setup

    /** @param {WebAssembly.Module=} module*/

    function receiveInstance(instance, module) {
      var exports = instance.exports;
      Module['asm'] = exports;
      removeRunDependency();
    } // we can't run yet (except in a pthread, where we have a custom sync instantiator)


    addRunDependency();


    function instantiateSync() {
      var instance;
      var module;
      var binary;

      try {
        binary = getBinary();
        module = new WebAssembly.Module(binary);
        instance = new WebAssembly.Instance(module, info);
      } catch (e) {
        var str = e.toString();
        err('failed to compile wasm module: ' + str);

        if (str.indexOf('imported Memory') >= 0 || str.indexOf('memory import') >= 0) {
          err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
        }

        throw e;
      }

      receiveInstance(instance);
    } // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
    // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
    // to any other async startup actions they are performing.


    if (Module['instantiateWasm']) {
      try {
        var exports = Module['instantiateWasm'](info, receiveInstance);
        return exports;
      } catch (e) {
        err('Module.instantiateWasm callback failed with error: ' + e);
        return false;
      }
    }

    instantiateSync();
    return Module['asm']; // exports were assigned here
  } // Globals used by JS i64 conversions

  /* global initializers */

  __ATINIT__.push({
    func: function func() {
      ___wasm_call_ctors();
    }
  });

  function ___cxa_allocate_exception(size) {
    return _malloc(size);
  }

  function ___cxa_throw(ptr, type, destructor) {

    throw ptr;
  }

  function getShiftFromSize(size) {
    switch (size) {
      case 1:
        return 0;

      case 2:
        return 1;

      case 4:
        return 2;

      case 8:
        return 3;

      default:
        throw new TypeError('Unknown type size: ' + size);
    }
  }

  function embind_init_charCodes() {
    var codes = new Array(256);

    for (var i = 0; i < 256; ++i) {
      codes[i] = String.fromCharCode(i);
    }

    embind_charCodes = codes;
  }

  var embind_charCodes = undefined;

  function readLatin1String(ptr) {
    var ret = "";
    var c = ptr;

    while (HEAPU8[c]) {
      ret += embind_charCodes[HEAPU8[c++]];
    }

    return ret;
  }

  var awaitingDependencies = {};
  var registeredTypes = {};
  var typeDependencies = {};
  var char_0 = 48;
  var char_9 = 57;

  function makeLegalFunctionName(name) {
    if (undefined === name) {
      return '_unknown';
    }

    name = name.replace(/[^a-zA-Z0-9_]/g, '$');
    var f = name.charCodeAt(0);

    if (f >= char_0 && f <= char_9) {
      return '_' + name;
    } else {
      return name;
    }
  }

  function createNamedFunction(name, body) {
    name = makeLegalFunctionName(name);
    /*jshint evil:true*/

    return new Function("body", "return function " + name + "() {\n" + "    \"use strict\";" + "    return body.apply(this, arguments);\n" + "};\n")(body);
  }

  function extendError(baseErrorType, errorName) {
    var errorClass = createNamedFunction(errorName, function (message) {
      this.name = errorName;
      this.message = message;
      var stack = new Error(message).stack;

      if (stack !== undefined) {
        this.stack = this.toString() + '\n' + stack.replace(/^Error(:[^\n]*)?\n/, '');
      }
    });
    errorClass.prototype = Object.create(baseErrorType.prototype);
    errorClass.prototype.constructor = errorClass;

    errorClass.prototype.toString = function () {
      if (this.message === undefined) {
        return this.name;
      } else {
        return this.name + ': ' + this.message;
      }
    };

    return errorClass;
  }

  var BindingError = undefined;

  function throwBindingError(message) {
    throw new BindingError(message);
  }

  var InternalError = undefined;

  function throwInternalError(message) {
    throw new InternalError(message);
  }

  function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
    myTypes.forEach(function (type) {
      typeDependencies[type] = dependentTypes;
    });

    function onComplete(typeConverters) {
      var myTypeConverters = getTypeConverters(typeConverters);

      if (myTypeConverters.length !== myTypes.length) {
        throwInternalError('Mismatched type converter count');
      }

      for (var i = 0; i < myTypes.length; ++i) {
        registerType(myTypes[i], myTypeConverters[i]);
      }
    }

    var typeConverters = new Array(dependentTypes.length);
    var unregisteredTypes = [];
    var registered = 0;
    dependentTypes.forEach(function (dt, i) {
      if (registeredTypes.hasOwnProperty(dt)) {
        typeConverters[i] = registeredTypes[dt];
      } else {
        unregisteredTypes.push(dt);

        if (!awaitingDependencies.hasOwnProperty(dt)) {
          awaitingDependencies[dt] = [];
        }

        awaitingDependencies[dt].push(function () {
          typeConverters[i] = registeredTypes[dt];
          ++registered;

          if (registered === unregisteredTypes.length) {
            onComplete(typeConverters);
          }
        });
      }
    });

    if (0 === unregisteredTypes.length) {
      onComplete(typeConverters);
    }
  }
  /** @param {Object=} options */


  function registerType(rawType, registeredInstance, options) {
    options = options || {};

    if (!('argPackAdvance' in registeredInstance)) {
      throw new TypeError('registerType registeredInstance requires argPackAdvance');
    }

    var name = registeredInstance.name;

    if (!rawType) {
      throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
    }

    if (registeredTypes.hasOwnProperty(rawType)) {
      if (options.ignoreDuplicateRegistrations) {
        return;
      } else {
        throwBindingError("Cannot register type '" + name + "' twice");
      }
    }

    registeredTypes[rawType] = registeredInstance;
    delete typeDependencies[rawType];

    if (awaitingDependencies.hasOwnProperty(rawType)) {
      var callbacks = awaitingDependencies[rawType];
      delete awaitingDependencies[rawType];
      callbacks.forEach(function (cb) {
        cb();
      });
    }
  }

  function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
    var shift = getShiftFromSize(size);
    name = readLatin1String(name);
    registerType(rawType, {
      name: name,
      'fromWireType': function fromWireType(wt) {
        // ambiguous emscripten ABI: sometimes return values are
        // true or false, and sometimes integers (0 or 1)
        return !!wt;
      },
      'toWireType': function toWireType(destructors, o) {
        return o ? trueValue : falseValue;
      },
      'argPackAdvance': 8,
      'readValueFromPointer': function readValueFromPointer(pointer) {
        // TODO: if heap is fixed (like in asm.js) this could be executed outside
        var heap;

        if (size === 1) {
          heap = HEAP8;
        } else if (size === 2) {
          heap = HEAP16;
        } else if (size === 4) {
          heap = HEAP32;
        } else {
          throw new TypeError("Unknown boolean type size: " + name);
        }

        return this['fromWireType'](heap[pointer >> shift]);
      },
      destructorFunction: null // This type does not need a destructor

    });
  }

  function ClassHandle_isAliasOf(other) {
    if (!(this instanceof ClassHandle)) {
      return false;
    }

    if (!(other instanceof ClassHandle)) {
      return false;
    }

    var leftClass = this.$$.ptrType.registeredClass;
    var left = this.$$.ptr;
    var rightClass = other.$$.ptrType.registeredClass;
    var right = other.$$.ptr;

    while (leftClass.baseClass) {
      left = leftClass.upcast(left);
      leftClass = leftClass.baseClass;
    }

    while (rightClass.baseClass) {
      right = rightClass.upcast(right);
      rightClass = rightClass.baseClass;
    }

    return leftClass === rightClass && left === right;
  }

  function shallowCopyInternalPointer(o) {
    return {
      count: o.count,
      deleteScheduled: o.deleteScheduled,
      preservePointerOnDelete: o.preservePointerOnDelete,
      ptr: o.ptr,
      ptrType: o.ptrType,
      smartPtr: o.smartPtr,
      smartPtrType: o.smartPtrType
    };
  }

  function throwInstanceAlreadyDeleted(obj) {
    function getInstanceTypeName(handle) {
      return handle.$$.ptrType.registeredClass.name;
    }

    throwBindingError(getInstanceTypeName(obj) + ' instance already deleted');
  }

  var finalizationGroup = false;

  function detachFinalizer(handle) {}

  function runDestructor($$) {
    if ($$.smartPtr) {
      $$.smartPtrType.rawDestructor($$.smartPtr);
    } else {
      $$.ptrType.registeredClass.rawDestructor($$.ptr);
    }
  }

  function releaseClassHandle($$) {
    $$.count.value -= 1;
    var toDelete = 0 === $$.count.value;

    if (toDelete) {
      runDestructor($$);
    }
  }

  function attachFinalizer(handle) {
    if ('undefined' === typeof FinalizationGroup) {
      attachFinalizer = function attachFinalizer(handle) {
        return handle;
      };

      return handle;
    } // If the running environment has a FinalizationGroup (see
    // https://github.com/tc39/proposal-weakrefs), then attach finalizers
    // for class handles.  We check for the presence of FinalizationGroup
    // at run-time, not build-time.


    finalizationGroup = new FinalizationGroup(function (iter) {
      for (var result = iter.next(); !result.done; result = iter.next()) {
        var $$ = result.value;

        if (!$$.ptr) {
          console.warn('object already deleted: ' + $$.ptr);
        } else {
          releaseClassHandle($$);
        }
      }
    });

    attachFinalizer = function attachFinalizer(handle) {
      finalizationGroup.register(handle, handle.$$, handle.$$);
      return handle;
    };

    detachFinalizer = function detachFinalizer(handle) {
      finalizationGroup.unregister(handle.$$);
    };

    return attachFinalizer(handle);
  }

  function ClassHandle_clone() {
    if (!this.$$.ptr) {
      throwInstanceAlreadyDeleted(this);
    }

    if (this.$$.preservePointerOnDelete) {
      this.$$.count.value += 1;
      return this;
    } else {
      var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
        $$: {
          value: shallowCopyInternalPointer(this.$$)
        }
      }));
      clone.$$.count.value += 1;
      clone.$$.deleteScheduled = false;
      return clone;
    }
  }

  function ClassHandle_delete() {
    if (!this.$$.ptr) {
      throwInstanceAlreadyDeleted(this);
    }

    if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
      throwBindingError('Object already scheduled for deletion');
    }

    detachFinalizer(this);
    releaseClassHandle(this.$$);

    if (!this.$$.preservePointerOnDelete) {
      this.$$.smartPtr = undefined;
      this.$$.ptr = undefined;
    }
  }

  function ClassHandle_isDeleted() {
    return !this.$$.ptr;
  }

  var delayFunction = undefined;
  var deletionQueue = [];

  function flushPendingDeletes() {
    while (deletionQueue.length) {
      var obj = deletionQueue.pop();
      obj.$$.deleteScheduled = false;
      obj['delete']();
    }
  }

  function ClassHandle_deleteLater() {
    if (!this.$$.ptr) {
      throwInstanceAlreadyDeleted(this);
    }

    if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
      throwBindingError('Object already scheduled for deletion');
    }

    deletionQueue.push(this);

    if (deletionQueue.length === 1 && delayFunction) {
      delayFunction(flushPendingDeletes);
    }

    this.$$.deleteScheduled = true;
    return this;
  }

  function init_ClassHandle() {
    ClassHandle.prototype['isAliasOf'] = ClassHandle_isAliasOf;
    ClassHandle.prototype['clone'] = ClassHandle_clone;
    ClassHandle.prototype['delete'] = ClassHandle_delete;
    ClassHandle.prototype['isDeleted'] = ClassHandle_isDeleted;
    ClassHandle.prototype['deleteLater'] = ClassHandle_deleteLater;
  }

  function ClassHandle() {}

  var registeredPointers = {};

  function ensureOverloadTable(proto, methodName, humanName) {
    if (undefined === proto[methodName].overloadTable) {
      var prevFunc = proto[methodName]; // Inject an overload resolver function that routes to the appropriate overload based on the number of arguments.

      proto[methodName] = function () {
        // TODO This check can be removed in -O3 level "unsafe" optimizations.
        if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
          throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
        }

        return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
      }; // Move the previous function into the overload table.


      proto[methodName].overloadTable = [];
      proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
    }
  }
  /** @param {number=} numArguments */


  function exposePublicSymbol(name, value, numArguments) {
    if (Module.hasOwnProperty(name)) {
      if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
        throwBindingError("Cannot register public name '" + name + "' twice");
      } // We are exposing a function with the same name as an existing function. Create an overload table and a function selector
      // that routes between the two.


      ensureOverloadTable(Module, name, name);

      if (Module.hasOwnProperty(numArguments)) {
        throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
      } // Add the new function into the overload table.


      Module[name].overloadTable[numArguments] = value;
    } else {
      Module[name] = value;

      if (undefined !== numArguments) {
        Module[name].numArguments = numArguments;
      }
    }
  }
  /** @constructor */


  function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
    this.name = name;
    this.constructor = constructor;
    this.instancePrototype = instancePrototype;
    this.rawDestructor = rawDestructor;
    this.baseClass = baseClass;
    this.getActualType = getActualType;
    this.upcast = upcast;
    this.downcast = downcast;
    this.pureVirtualFunctions = [];
  }

  function upcastPointer(ptr, ptrClass, desiredClass) {
    while (ptrClass !== desiredClass) {
      if (!ptrClass.upcast) {
        throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
      }

      ptr = ptrClass.upcast(ptr);
      ptrClass = ptrClass.baseClass;
    }

    return ptr;
  }

  function constNoSmartPtrRawPointerToWireType(destructors, handle) {
    if (handle === null) {
      if (this.isReference) {
        throwBindingError('null is not a valid ' + this.name);
      }

      return 0;
    }

    if (!handle.$$) {
      throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
    }

    if (!handle.$$.ptr) {
      throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
    }

    var handleClass = handle.$$.ptrType.registeredClass;
    var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
    return ptr;
  }

  function genericPointerToWireType(destructors, handle) {
    var ptr;

    if (handle === null) {
      if (this.isReference) {
        throwBindingError('null is not a valid ' + this.name);
      }

      if (this.isSmartPointer) {
        ptr = this.rawConstructor();

        if (destructors !== null) {
          destructors.push(this.rawDestructor, ptr);
        }

        return ptr;
      } else {
        return 0;
      }
    }

    if (!handle.$$) {
      throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
    }

    if (!handle.$$.ptr) {
      throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
    }

    if (!this.isConst && handle.$$.ptrType.isConst) {
      throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
    }

    var handleClass = handle.$$.ptrType.registeredClass;
    ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);

    if (this.isSmartPointer) {
      // TODO: this is not strictly true
      // We could support BY_EMVAL conversions from raw pointers to smart pointers
      // because the smart pointer can hold a reference to the handle
      if (undefined === handle.$$.smartPtr) {
        throwBindingError('Passing raw pointer to smart pointer is illegal');
      }

      switch (this.sharingPolicy) {
        case 0:
          // NONE
          // no upcasting
          if (handle.$$.smartPtrType === this) {
            ptr = handle.$$.smartPtr;
          } else {
            throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
          }

          break;

        case 1:
          // INTRUSIVE
          ptr = handle.$$.smartPtr;
          break;

        case 2:
          // BY_EMVAL
          if (handle.$$.smartPtrType === this) {
            ptr = handle.$$.smartPtr;
          } else {
            var clonedHandle = handle['clone']();
            ptr = this.rawShare(ptr, __emval_register(function () {
              clonedHandle['delete']();
            }));

            if (destructors !== null) {
              destructors.push(this.rawDestructor, ptr);
            }
          }

          break;

        default:
          throwBindingError('Unsupporting sharing policy');
      }
    }

    return ptr;
  }

  function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
    if (handle === null) {
      if (this.isReference) {
        throwBindingError('null is not a valid ' + this.name);
      }

      return 0;
    }

    if (!handle.$$) {
      throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
    }

    if (!handle.$$.ptr) {
      throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
    }

    if (handle.$$.ptrType.isConst) {
      throwBindingError('Cannot convert argument of type ' + handle.$$.ptrType.name + ' to parameter type ' + this.name);
    }

    var handleClass = handle.$$.ptrType.registeredClass;
    var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
    return ptr;
  }

  function simpleReadValueFromPointer(pointer) {
    return this['fromWireType'](HEAPU32[pointer >> 2]);
  }

  function RegisteredPointer_getPointee(ptr) {
    if (this.rawGetPointee) {
      ptr = this.rawGetPointee(ptr);
    }

    return ptr;
  }

  function RegisteredPointer_destructor(ptr) {
    if (this.rawDestructor) {
      this.rawDestructor(ptr);
    }
  }

  function RegisteredPointer_deleteObject(handle) {
    if (handle !== null) {
      handle['delete']();
    }
  }

  function downcastPointer(ptr, ptrClass, desiredClass) {
    if (ptrClass === desiredClass) {
      return ptr;
    }

    if (undefined === desiredClass.baseClass) {
      return null; // no conversion
    }

    var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);

    if (rv === null) {
      return null;
    }

    return desiredClass.downcast(rv);
  }

  function getInheritedInstanceCount() {
    return Object.keys(registeredInstances).length;
  }

  function getLiveInheritedInstances() {
    var rv = [];

    for (var k in registeredInstances) {
      if (registeredInstances.hasOwnProperty(k)) {
        rv.push(registeredInstances[k]);
      }
    }

    return rv;
  }

  function setDelayFunction(fn) {
    delayFunction = fn;

    if (deletionQueue.length && delayFunction) {
      delayFunction(flushPendingDeletes);
    }
  }

  function init_embind() {
    Module['getInheritedInstanceCount'] = getInheritedInstanceCount;
    Module['getLiveInheritedInstances'] = getLiveInheritedInstances;
    Module['flushPendingDeletes'] = flushPendingDeletes;
    Module['setDelayFunction'] = setDelayFunction;
  }

  var registeredInstances = {};

  function getBasestPointer(class_, ptr) {
    if (ptr === undefined) {
      throwBindingError('ptr should not be undefined');
    }

    while (class_.baseClass) {
      ptr = class_.upcast(ptr);
      class_ = class_.baseClass;
    }

    return ptr;
  }

  function getInheritedInstance(class_, ptr) {
    ptr = getBasestPointer(class_, ptr);
    return registeredInstances[ptr];
  }

  function makeClassHandle(prototype, record) {
    if (!record.ptrType || !record.ptr) {
      throwInternalError('makeClassHandle requires ptr and ptrType');
    }

    var hasSmartPtrType = !!record.smartPtrType;
    var hasSmartPtr = !!record.smartPtr;

    if (hasSmartPtrType !== hasSmartPtr) {
      throwInternalError('Both smartPtrType and smartPtr must be specified');
    }

    record.count = {
      value: 1
    };
    return attachFinalizer(Object.create(prototype, {
      $$: {
        value: record
      }
    }));
  }

  function RegisteredPointer_fromWireType(ptr) {
    // ptr is a raw pointer (or a raw smartpointer)
    // rawPointer is a maybe-null raw pointer
    var rawPointer = this.getPointee(ptr);

    if (!rawPointer) {
      this.destructor(ptr);
      return null;
    }

    var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);

    if (undefined !== registeredInstance) {
      // JS object has been neutered, time to repopulate it
      if (0 === registeredInstance.$$.count.value) {
        registeredInstance.$$.ptr = rawPointer;
        registeredInstance.$$.smartPtr = ptr;
        return registeredInstance['clone']();
      } else {
        // else, just increment reference count on existing object
        // it already has a reference to the smart pointer
        var rv = registeredInstance['clone']();
        this.destructor(ptr);
        return rv;
      }
    }

    function makeDefaultHandle() {
      if (this.isSmartPointer) {
        return makeClassHandle(this.registeredClass.instancePrototype, {
          ptrType: this.pointeeType,
          ptr: rawPointer,
          smartPtrType: this,
          smartPtr: ptr
        });
      } else {
        return makeClassHandle(this.registeredClass.instancePrototype, {
          ptrType: this,
          ptr: ptr
        });
      }
    }

    var actualType = this.registeredClass.getActualType(rawPointer);
    var registeredPointerRecord = registeredPointers[actualType];

    if (!registeredPointerRecord) {
      return makeDefaultHandle.call(this);
    }

    var toType;

    if (this.isConst) {
      toType = registeredPointerRecord.constPointerType;
    } else {
      toType = registeredPointerRecord.pointerType;
    }

    var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);

    if (dp === null) {
      return makeDefaultHandle.call(this);
    }

    if (this.isSmartPointer) {
      return makeClassHandle(toType.registeredClass.instancePrototype, {
        ptrType: toType,
        ptr: dp,
        smartPtrType: this,
        smartPtr: ptr
      });
    } else {
      return makeClassHandle(toType.registeredClass.instancePrototype, {
        ptrType: toType,
        ptr: dp
      });
    }
  }

  function init_RegisteredPointer() {
    RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
    RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
    RegisteredPointer.prototype['argPackAdvance'] = 8;
    RegisteredPointer.prototype['readValueFromPointer'] = simpleReadValueFromPointer;
    RegisteredPointer.prototype['deleteObject'] = RegisteredPointer_deleteObject;
    RegisteredPointer.prototype['fromWireType'] = RegisteredPointer_fromWireType;
  }
  /** @constructor
   @param {*=} pointeeType,
   @param {*=} sharingPolicy,
   @param {*=} rawGetPointee,
   @param {*=} rawConstructor,
   @param {*=} rawShare,
   @param {*=} rawDestructor,
    */


  function RegisteredPointer(name, registeredClass, isReference, isConst, // smart pointer properties
  isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
    this.name = name;
    this.registeredClass = registeredClass;
    this.isReference = isReference;
    this.isConst = isConst; // smart pointer properties

    this.isSmartPointer = isSmartPointer;
    this.pointeeType = pointeeType;
    this.sharingPolicy = sharingPolicy;
    this.rawGetPointee = rawGetPointee;
    this.rawConstructor = rawConstructor;
    this.rawShare = rawShare;
    this.rawDestructor = rawDestructor;

    if (!isSmartPointer && registeredClass.baseClass === undefined) {
      if (isConst) {
        this['toWireType'] = constNoSmartPtrRawPointerToWireType;
        this.destructorFunction = null;
      } else {
        this['toWireType'] = nonConstNoSmartPtrRawPointerToWireType;
        this.destructorFunction = null;
      }
    } else {
      this['toWireType'] = genericPointerToWireType; // Here we must leave this.destructorFunction undefined, since whether genericPointerToWireType returns
      // a pointer that needs to be freed up is runtime-dependent, and cannot be evaluated at registration time.
      // TODO: Create an alternative mechanism that allows removing the use of var destructors = []; array in
      //       craftInvokerFunction altogether.
    }
  }
  /** @param {number=} numArguments */


  function replacePublicSymbol(name, value, numArguments) {
    if (!Module.hasOwnProperty(name)) {
      throwInternalError('Replacing nonexistant public symbol');
    } // If there's an overload table for this symbol, replace the symbol in the overload table instead.


    if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
      Module[name].overloadTable[numArguments] = value;
    } else {
      Module[name] = value;
      Module[name].argCount = numArguments;
    }
  }

  function embind__requireFunction(signature, rawFunction) {
    signature = readLatin1String(signature);

    function makeDynCaller(dynCall) {
      var args = [];

      for (var i = 1; i < signature.length; ++i) {
        args.push('a' + i);
      }

      var name = 'dynCall_' + signature + '_' + rawFunction;
      var body = 'return function ' + name + '(' + args.join(', ') + ') {\n';
      body += '    return dynCall(rawFunction' + (args.length ? ', ' : '') + args.join(', ') + ');\n';
      body += '};\n';
      return new Function('dynCall', 'rawFunction', body)(dynCall, rawFunction);
    }

    var dc = Module['dynCall_' + signature];
    var fp = makeDynCaller(dc);

    if (typeof fp !== "function") {
      throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
    }

    return fp;
  }

  var UnboundTypeError = undefined;

  function getTypeName(type) {
    var ptr = ___getTypeName(type);

    var rv = readLatin1String(ptr);

    _free(ptr);

    return rv;
  }

  function throwUnboundTypeError(message, types) {
    var unboundTypes = [];
    var seen = {};

    function visit(type) {
      if (seen[type]) {
        return;
      }

      if (registeredTypes[type]) {
        return;
      }

      if (typeDependencies[type]) {
        typeDependencies[type].forEach(visit);
        return;
      }

      unboundTypes.push(type);
      seen[type] = true;
    }

    types.forEach(visit);
    throw new UnboundTypeError(message + ': ' + unboundTypes.map(getTypeName).join([', ']));
  }

  function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
    name = readLatin1String(name);
    getActualType = embind__requireFunction(getActualTypeSignature, getActualType);

    if (upcast) {
      upcast = embind__requireFunction(upcastSignature, upcast);
    }

    if (downcast) {
      downcast = embind__requireFunction(downcastSignature, downcast);
    }

    rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
    var legalFunctionName = makeLegalFunctionName(name);
    exposePublicSymbol(legalFunctionName, function () {
      // this code cannot run if baseClassRawType is zero
      throwUnboundTypeError('Cannot construct ' + name + ' due to unbound types', [baseClassRawType]);
    });
    whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function (base) {
      base = base[0];
      var baseClass;
      var basePrototype;

      if (baseClassRawType) {
        baseClass = base.registeredClass;
        basePrototype = baseClass.instancePrototype;
      } else {
        basePrototype = ClassHandle.prototype;
      }

      var constructor = createNamedFunction(legalFunctionName, function () {
        if (Object.getPrototypeOf(this) !== instancePrototype) {
          throw new BindingError("Use 'new' to construct " + name);
        }

        if (undefined === registeredClass.constructor_body) {
          throw new BindingError(name + " has no accessible constructor");
        }

        var body = registeredClass.constructor_body[arguments.length];

        if (undefined === body) {
          throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
        }

        return body.apply(this, arguments);
      });
      var instancePrototype = Object.create(basePrototype, {
        constructor: {
          value: constructor
        }
      });
      constructor.prototype = instancePrototype;
      var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
      var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
      var pointerConverter = new RegisteredPointer(name + '*', registeredClass, false, false, false);
      var constPointerConverter = new RegisteredPointer(name + ' const*', registeredClass, false, true, false);
      registeredPointers[rawType] = {
        pointerType: pointerConverter,
        constPointerType: constPointerConverter
      };
      replacePublicSymbol(legalFunctionName, constructor);
      return [referenceConverter, pointerConverter, constPointerConverter];
    });
  }

  function heap32VectorToArray(count, firstElement) {
    var array = [];

    for (var i = 0; i < count; i++) {
      array.push(HEAP32[(firstElement >> 2) + i]);
    }

    return array;
  }

  function runDestructors(destructors) {
    while (destructors.length) {
      var ptr = destructors.pop();
      var del = destructors.pop();
      del(ptr);
    }
  }

  function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
    assert(argCount > 0);
    var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
    invoker = embind__requireFunction(invokerSignature, invoker);
    var args = [rawConstructor];
    var destructors = [];
    whenDependentTypesAreResolved([], [rawClassType], function (classType) {
      classType = classType[0];
      var humanName = 'constructor ' + classType.name;

      if (undefined === classType.registeredClass.constructor_body) {
        classType.registeredClass.constructor_body = [];
      }

      if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
        throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
      }

      classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
        throwUnboundTypeError('Cannot construct ' + classType.name + ' due to unbound types', rawArgTypes);
      };

      whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
        classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
          if (arguments.length !== argCount - 1) {
            throwBindingError(humanName + ' called with ' + arguments.length + ' arguments, expected ' + (argCount - 1));
          }

          destructors.length = 0;
          args.length = argCount;

          for (var i = 1; i < argCount; ++i) {
            args[i] = argTypes[i]['toWireType'](destructors, arguments[i - 1]);
          }

          var ptr = invoker.apply(null, args);
          runDestructors(destructors);
          return argTypes[0]['fromWireType'](ptr);
        };

        return [];
      });
      return [];
    });
  }

  function new_(constructor, argumentList) {
    if (!(constructor instanceof Function)) {
      throw new TypeError('new_ called with constructor type ' + _typeof(constructor) + " which is not a function");
    }
    /*
     * Previously, the following line was just:
        function dummy() {};
        * Unfortunately, Chrome was preserving 'dummy' as the object's name, even though at creation, the 'dummy' has the
     * correct constructor name.  Thus, objects created with IMVU.new would show up in the debugger as 'dummy', which
     * isn't very helpful.  Using IMVU.createNamedFunction addresses the issue.  Doublely-unfortunately, there's no way
     * to write a test for this behavior.  -NRD 2013.02.22
     */


    var dummy = createNamedFunction(constructor.name || 'unknownFunctionName', function () {});
    dummy.prototype = constructor.prototype;
    var obj = new dummy();
    var r = constructor.apply(obj, argumentList);
    return r instanceof Object ? r : obj;
  }

  function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
    // humanName: a human-readable string name for the function to be generated.
    // argTypes: An array that contains the embind type objects for all types in the function signature.
    //    argTypes[0] is the type object for the function return value.
    //    argTypes[1] is the type object for function this object/class type, or null if not crafting an invoker for a class method.
    //    argTypes[2...] are the actual function parameters.
    // classType: The embind type object for the class to be bound, or null if this is not a method of a class.
    // cppInvokerFunc: JS Function object to the C++-side function that interops into C++ code.
    // cppTargetFunc: Function pointer (an integer to FUNCTION_TABLE) to the target C++ function the cppInvokerFunc will end up calling.
    var argCount = argTypes.length;

    if (argCount < 2) {
      throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
    }

    var isClassMethodFunc = argTypes[1] !== null && classType !== null; // Free functions with signature "void function()" do not need an invoker that marshalls between wire types.
    // TODO: This omits argument count check - enable only at -O3 or similar.
    //    if (ENABLE_UNSAFE_OPTS && argCount == 2 && argTypes[0].name == "void" && !isClassMethodFunc) {
    //       return FUNCTION_TABLE[fn];
    //    }
    // Determine if we need to use a dynamic stack to store the destructors for the function parameters.
    // TODO: Remove this completely once all function invokers are being dynamically generated.

    var needsDestructorStack = false;

    for (var i = 1; i < argTypes.length; ++i) {
      // Skip return value at index 0 - it's not deleted here.
      if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
        // The type does not define a destructor function - must use dynamic stack
        needsDestructorStack = true;
        break;
      }
    }

    var returns = argTypes[0].name !== "void";
    var argsList = "";
    var argsListWired = "";

    for (var i = 0; i < argCount - 2; ++i) {
      argsList += (i !== 0 ? ", " : "") + "arg" + i;
      argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
    }

    var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\n" + "if (arguments.length !== " + (argCount - 2) + ") {\n" + "throwBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n" + "}\n";

    if (needsDestructorStack) {
      invokerFnBody += "var destructors = [];\n";
    }

    var dtorStack = needsDestructorStack ? "destructors" : "null";
    var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
    var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];

    if (isClassMethodFunc) {
      invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
    }

    for (var i = 0; i < argCount - 2; ++i) {
      invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
      args1.push("argType" + i);
      args2.push(argTypes[i + 2]);
    }

    if (isClassMethodFunc) {
      argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
    }

    invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";

    if (needsDestructorStack) {
      invokerFnBody += "runDestructors(destructors);\n";
    } else {
      for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
        // Skip return value at index 0 - it's not deleted here. Also skip class type if not a method.
        var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";

        if (argTypes[i].destructorFunction !== null) {
          invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
          args1.push(paramName + "_dtor");
          args2.push(argTypes[i].destructorFunction);
        }
      }
    }

    if (returns) {
      invokerFnBody += "var ret = retType.fromWireType(rv);\n" + "return ret;\n";
    }

    invokerFnBody += "}\n";
    args1.push(invokerFnBody);
    var invokerFunction = new_(Function, args1).apply(null, args2);
    return invokerFunction;
  }

  function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, // [ReturnType, ThisType, Args...]
  invokerSignature, rawInvoker, context, isPureVirtual) {
    var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
    methodName = readLatin1String(methodName);
    rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
    whenDependentTypesAreResolved([], [rawClassType], function (classType) {
      classType = classType[0];
      var humanName = classType.name + '.' + methodName;

      if (isPureVirtual) {
        classType.registeredClass.pureVirtualFunctions.push(methodName);
      }

      function unboundTypesHandler() {
        throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
      }

      var proto = classType.registeredClass.instancePrototype;
      var method = proto[methodName];

      if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
        // This is the first overload to be registered, OR we are replacing a function in the base class with a function in the derived class.
        unboundTypesHandler.argCount = argCount - 2;
        unboundTypesHandler.className = classType.name;
        proto[methodName] = unboundTypesHandler;
      } else {
        // There was an existing function with the same name registered. Set up a function overload routing table.
        ensureOverloadTable(proto, methodName, humanName);
        proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
      }

      whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
        var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context); // Replace the initial unbound-handler-stub function with the appropriate member function, now that all types
        // are resolved. If multiple overloads are registered for this function, the function goes into an overload table.

        if (undefined === proto[methodName].overloadTable) {
          // Set argCount in case an overload is registered later
          memberFunction.argCount = argCount - 2;
          proto[methodName] = memberFunction;
        } else {
          proto[methodName].overloadTable[argCount - 2] = memberFunction;
        }

        return [];
      });
      return [];
    });
  }

  var emval_free_list = [];
  var emval_handle_array = [{}, {
    value: undefined
  }, {
    value: null
  }, {
    value: true
  }, {
    value: false
  }];

  function __emval_decref(handle) {
    if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
      emval_handle_array[handle] = undefined;
      emval_free_list.push(handle);
    }
  }

  function count_emval_handles() {
    var count = 0;

    for (var i = 5; i < emval_handle_array.length; ++i) {
      if (emval_handle_array[i] !== undefined) {
        ++count;
      }
    }

    return count;
  }

  function get_first_emval() {
    for (var i = 5; i < emval_handle_array.length; ++i) {
      if (emval_handle_array[i] !== undefined) {
        return emval_handle_array[i];
      }
    }

    return null;
  }

  function init_emval() {
    Module['count_emval_handles'] = count_emval_handles;
    Module['get_first_emval'] = get_first_emval;
  }

  function __emval_register(value) {
    switch (value) {
      case undefined:
        {
          return 1;
        }

      case null:
        {
          return 2;
        }

      case true:
        {
          return 3;
        }

      case false:
        {
          return 4;
        }

      default:
        {
          var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
          emval_handle_array[handle] = {
            refcount: 1,
            value: value
          };
          return handle;
        }
    }
  }

  function __embind_register_emval(rawType, name) {
    name = readLatin1String(name);
    registerType(rawType, {
      name: name,
      'fromWireType': function fromWireType(handle) {
        var rv = emval_handle_array[handle].value;

        __emval_decref(handle);

        return rv;
      },
      'toWireType': function toWireType(destructors, value) {
        return __emval_register(value);
      },
      'argPackAdvance': 8,
      'readValueFromPointer': simpleReadValueFromPointer,
      destructorFunction: null // This type does not need a destructor
      // TODO: do we need a deleteObject here?  write a test where
      // emval is passed into JS via an interface

    });
  }

  function enumReadValueFromPointer(name, shift, signed) {
    switch (shift) {
      case 0:
        return function (pointer) {
          var heap = signed ? HEAP8 : HEAPU8;
          return this['fromWireType'](heap[pointer]);
        };

      case 1:
        return function (pointer) {
          var heap = signed ? HEAP16 : HEAPU16;
          return this['fromWireType'](heap[pointer >> 1]);
        };

      case 2:
        return function (pointer) {
          var heap = signed ? HEAP32 : HEAPU32;
          return this['fromWireType'](heap[pointer >> 2]);
        };

      default:
        throw new TypeError("Unknown integer type: " + name);
    }
  }

  function __embind_register_enum(rawType, name, size, isSigned) {
    var shift = getShiftFromSize(size);
    name = readLatin1String(name);

    function ctor() {}

    ctor.values = {};
    registerType(rawType, {
      name: name,
      constructor: ctor,
      'fromWireType': function fromWireType(c) {
        return this.constructor.values[c];
      },
      'toWireType': function toWireType(destructors, c) {
        return c.value;
      },
      'argPackAdvance': 8,
      'readValueFromPointer': enumReadValueFromPointer(name, shift, isSigned),
      destructorFunction: null
    });
    exposePublicSymbol(name, ctor);
  }

  function requireRegisteredType(rawType, humanName) {
    var impl = registeredTypes[rawType];

    if (undefined === impl) {
      throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
    }

    return impl;
  }

  function __embind_register_enum_value(rawEnumType, name, enumValue) {
    var enumType = requireRegisteredType(rawEnumType, 'enum');
    name = readLatin1String(name);
    var Enum = enumType.constructor;
    var Value = Object.create(enumType.constructor.prototype, {
      value: {
        value: enumValue
      },
      constructor: {
        value: createNamedFunction(enumType.name + '_' + name, function () {})
      }
    });
    Enum.values[enumValue] = Value;
    Enum[name] = Value;
  }

  function _embind_repr(v) {
    if (v === null) {
      return 'null';
    }

    var t = _typeof(v);

    if (t === 'object' || t === 'array' || t === 'function') {
      return v.toString();
    } else {
      return '' + v;
    }
  }

  function floatReadValueFromPointer(name, shift) {
    switch (shift) {
      case 2:
        return function (pointer) {
          return this['fromWireType'](HEAPF32[pointer >> 2]);
        };

      case 3:
        return function (pointer) {
          return this['fromWireType'](HEAPF64[pointer >> 3]);
        };

      default:
        throw new TypeError("Unknown float type: " + name);
    }
  }

  function __embind_register_float(rawType, name, size) {
    var shift = getShiftFromSize(size);
    name = readLatin1String(name);
    registerType(rawType, {
      name: name,
      'fromWireType': function fromWireType(value) {
        return value;
      },
      'toWireType': function toWireType(destructors, value) {
        // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
        // avoid the following if() and assume value is of proper type.
        if (typeof value !== "number" && typeof value !== "boolean") {
          throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
        }

        return value;
      },
      'argPackAdvance': 8,
      'readValueFromPointer': floatReadValueFromPointer(name, shift),
      destructorFunction: null // This type does not need a destructor

    });
  }

  function integerReadValueFromPointer(name, shift, signed) {
    // integers are quite common, so generate very specialized functions
    switch (shift) {
      case 0:
        return signed ? function readS8FromPointer(pointer) {
          return HEAP8[pointer];
        } : function readU8FromPointer(pointer) {
          return HEAPU8[pointer];
        };

      case 1:
        return signed ? function readS16FromPointer(pointer) {
          return HEAP16[pointer >> 1];
        } : function readU16FromPointer(pointer) {
          return HEAPU16[pointer >> 1];
        };

      case 2:
        return signed ? function readS32FromPointer(pointer) {
          return HEAP32[pointer >> 2];
        } : function readU32FromPointer(pointer) {
          return HEAPU32[pointer >> 2];
        };

      default:
        throw new TypeError("Unknown integer type: " + name);
    }
  }

  function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
    name = readLatin1String(name);

    if (maxRange === -1) {
      // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
      maxRange = 4294967295;
    }

    var shift = getShiftFromSize(size);

    var fromWireType = function fromWireType(value) {
      return value;
    };

    if (minRange === 0) {
      var bitshift = 32 - 8 * size;

      fromWireType = function fromWireType(value) {
        return value << bitshift >>> bitshift;
      };
    }

    var isUnsignedType = name.indexOf('unsigned') != -1;
    registerType(primitiveType, {
      name: name,
      'fromWireType': fromWireType,
      'toWireType': function toWireType(destructors, value) {
        // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
        // avoid the following two if()s and assume value is of proper type.
        if (typeof value !== "number" && typeof value !== "boolean") {
          throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
        }

        if (value < minRange || value > maxRange) {
          throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
        }

        return isUnsignedType ? value >>> 0 : value | 0;
      },
      'argPackAdvance': 8,
      'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
      destructorFunction: null // This type does not need a destructor

    });
  }

  function __embind_register_memory_view(rawType, dataTypeIndex, name) {
    var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
    var TA = typeMapping[dataTypeIndex];

    function decodeMemoryView(handle) {
      handle = handle >> 2;
      var heap = HEAPU32;
      var size = heap[handle]; // in elements

      var data = heap[handle + 1]; // byte offset into emscripten heap

      return new TA(buffer, data, size);
    }

    name = readLatin1String(name);
    registerType(rawType, {
      name: name,
      'fromWireType': decodeMemoryView,
      'argPackAdvance': 8,
      'readValueFromPointer': decodeMemoryView
    }, {
      ignoreDuplicateRegistrations: true
    });
  }

  function __embind_register_smart_ptr(rawType, rawPointeeType, name, sharingPolicy, getPointeeSignature, rawGetPointee, constructorSignature, rawConstructor, shareSignature, rawShare, destructorSignature, rawDestructor) {
    name = readLatin1String(name);
    rawGetPointee = embind__requireFunction(getPointeeSignature, rawGetPointee);
    rawConstructor = embind__requireFunction(constructorSignature, rawConstructor);
    rawShare = embind__requireFunction(shareSignature, rawShare);
    rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
    whenDependentTypesAreResolved([rawType], [rawPointeeType], function (pointeeType) {
      pointeeType = pointeeType[0];
      var registeredPointer = new RegisteredPointer(name, pointeeType.registeredClass, false, false, // smart pointer properties
      true, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor);
      return [registeredPointer];
    });
  }

  function __embind_register_std_string(rawType, name) {
    name = readLatin1String(name);
    var stdStringIsUTF8 //process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
    = name === "std::string";
    registerType(rawType, {
      name: name,
      'fromWireType': function fromWireType(value) {
        var length = HEAPU32[value >> 2];
        var str;

        if (stdStringIsUTF8) {
          //ensure null termination at one-past-end byte if not present yet
          var endChar = HEAPU8[value + 4 + length];
          var endCharSwap = 0;

          if (endChar != 0) {
            endCharSwap = endChar;
            HEAPU8[value + 4 + length] = 0;
          }

          var decodeStartPtr = value + 4; // Looping here to support possible embedded '0' bytes

          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i;

            if (HEAPU8[currentBytePtr] == 0) {
              var stringSegment = UTF8ToString(decodeStartPtr);

              if (str === undefined) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }

              decodeStartPtr = currentBytePtr + 1;
            }
          }

          if (endCharSwap != 0) {
            HEAPU8[value + 4 + length] = endCharSwap;
          }
        } else {
          var a = new Array(length);

          for (var i = 0; i < length; ++i) {
            a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
          }

          str = a.join('');
        }

        _free(value);

        return str;
      },
      'toWireType': function toWireType(destructors, value) {
        if (value instanceof ArrayBuffer) {
          value = new Uint8Array(value);
        }

        var getLength;
        var valueIsOfTypeString = typeof value === 'string';

        if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
          throwBindingError('Cannot pass non-string to std::string');
        }

        if (stdStringIsUTF8 && valueIsOfTypeString) {
          getLength = function getLength() {
            return lengthBytesUTF8(value);
          };
        } else {
          getLength = function getLength() {
            return value.length;
          };
        } // assumes 4-byte alignment


        var length = getLength();

        var ptr = _malloc(4 + length + 1);

        HEAPU32[ptr >> 2] = length;

        if (stdStringIsUTF8 && valueIsOfTypeString) {
          stringToUTF8(value, ptr + 4, length + 1);
        } else {
          if (valueIsOfTypeString) {
            for (var i = 0; i < length; ++i) {
              var charCode = value.charCodeAt(i);

              if (charCode > 255) {
                _free(ptr);

                throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
              }

              HEAPU8[ptr + 4 + i] = charCode;
            }
          } else {
            for (var i = 0; i < length; ++i) {
              HEAPU8[ptr + 4 + i] = value[i];
            }
          }
        }

        if (destructors !== null) {
          destructors.push(_free, ptr);
        }

        return ptr;
      },
      'argPackAdvance': 8,
      'readValueFromPointer': simpleReadValueFromPointer,
      destructorFunction: function destructorFunction(ptr) {
        _free(ptr);
      }
    });
  }

  function __embind_register_std_wstring(rawType, charSize, name) {
    name = readLatin1String(name);
    var decodeString, encodeString, getHeap, lengthBytesUTF, shift;

    if (charSize === 2) {
      decodeString = UTF16ToString;
      encodeString = stringToUTF16;
      lengthBytesUTF = lengthBytesUTF16;

      getHeap = function getHeap() {
        return HEAPU16;
      };

      shift = 1;
    } else if (charSize === 4) {
      decodeString = UTF32ToString;
      encodeString = stringToUTF32;
      lengthBytesUTF = lengthBytesUTF32;

      getHeap = function getHeap() {
        return HEAPU32;
      };

      shift = 2;
    }

    registerType(rawType, {
      name: name,
      'fromWireType': function fromWireType(value) {
        // Code mostly taken from _embind_register_std_string fromWireType
        var length = HEAPU32[value >> 2];
        var HEAP = getHeap();
        var str; // Ensure null termination at one-past-end byte if not present yet

        var endChar = HEAP[value + 4 + length * charSize >> shift];
        var endCharSwap = 0;

        if (endChar != 0) {
          endCharSwap = endChar;
          HEAP[value + 4 + length * charSize >> shift] = 0;
        }

        var decodeStartPtr = value + 4; // Looping here to support possible embedded '0' bytes

        for (var i = 0; i <= length; ++i) {
          var currentBytePtr = value + 4 + i * charSize;

          if (HEAP[currentBytePtr >> shift] == 0) {
            var stringSegment = decodeString(decodeStartPtr);

            if (str === undefined) {
              str = stringSegment;
            } else {
              str += String.fromCharCode(0);
              str += stringSegment;
            }

            decodeStartPtr = currentBytePtr + charSize;
          }
        }

        if (endCharSwap != 0) {
          HEAP[value + 4 + length * charSize >> shift] = endCharSwap;
        }

        _free(value);

        return str;
      },
      'toWireType': function toWireType(destructors, value) {
        if (!(typeof value === 'string')) {
          throwBindingError('Cannot pass non-string to C++ string type ' + name);
        } // assumes 4-byte alignment


        var length = lengthBytesUTF(value);

        var ptr = _malloc(4 + length + charSize);

        HEAPU32[ptr >> 2] = length >> shift;
        encodeString(value, ptr + 4, length + charSize);

        if (destructors !== null) {
          destructors.push(_free, ptr);
        }

        return ptr;
      },
      'argPackAdvance': 8,
      'readValueFromPointer': simpleReadValueFromPointer,
      destructorFunction: function destructorFunction(ptr) {
        _free(ptr);
      }
    });
  }

  function __embind_register_void(rawType, name) {
    name = readLatin1String(name);
    registerType(rawType, {
      isVoid: true,
      // void return values can be optimized out sometimes
      name: name,
      'argPackAdvance': 0,
      'fromWireType': function fromWireType() {
        return undefined;
      },
      'toWireType': function toWireType(destructors, o) {
        // TODO: assert if anything else is given?
        return undefined;
      }
    });
  }

  function __emval_lookupTypes(argCount, argTypes) {
    var a = new Array(argCount);

    for (var i = 0; i < argCount; ++i) {
      a[i] = requireRegisteredType(HEAP32[(argTypes >> 2) + i], "parameter " + i);
    }

    return a;
  }

  function requireHandle(handle) {
    if (!handle) {
      throwBindingError('Cannot use deleted val. handle = ' + handle);
    }

    return emval_handle_array[handle].value;
  }

  function __emval_call(handle, argCount, argTypes, argv) {
    handle = requireHandle(handle);

    var types = __emval_lookupTypes(argCount, argTypes);

    var args = new Array(argCount);

    for (var i = 0; i < argCount; ++i) {
      var type = types[i];
      args[i] = type['readValueFromPointer'](argv);
      argv += type['argPackAdvance'];
    }

    var rv = handle.apply(undefined, args);
    return __emval_register(rv);
  }

  function __emval_incref(handle) {
    if (handle > 4) {
      emval_handle_array[handle].refcount += 1;
    }
  }

  function __emval_take_value(type, argv) {
    type = requireRegisteredType(type, '_emval_take_value');
    var v = type['readValueFromPointer'](argv);
    return __emval_register(v);
  }

  function _abort() {
    abort();
  }

  function _emscripten_get_sbrk_ptr() {
    return 9984;
  }

  function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.copyWithin(dest, src, src + num);
  }

  function abortOnCannotGrowMemory(requestedSize) {
    abort('OOM');
  }

  function _emscripten_resize_heap(requestedSize) {
    abortOnCannotGrowMemory();
  }
  var SYSCALLS = {
    mappings: {},
    buffers: [null, [], []],
    printChar: function printChar(stream, curr) {
      var buffer = SYSCALLS.buffers[stream];

      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    },
    varargs: undefined,
    get: function get() {
      SYSCALLS.varargs += 4;
      var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
      return ret;
    },
    getStr: function getStr(ptr) {
      var ret = UTF8ToString(ptr);
      return ret;
    },
    get64: function get64(low, high) {
      return low;
    }
  };

  function _fd_close(fd) {
    return 0;
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {}

  function _fd_write(fd, iov, iovcnt, pnum) {
    // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
    var num = 0;

    for (var i = 0; i < iovcnt; i++) {
      var ptr = HEAP32[iov + i * 8 >> 2];
      var len = HEAP32[iov + (i * 8 + 4) >> 2];

      for (var j = 0; j < len; j++) {
        SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
      }

      num += len;
    }

    HEAP32[pnum >> 2] = num;
    return 0;
  }

  function _setTempRet0($i) {
  }

  embind_init_charCodes();
  BindingError = Module['BindingError'] = extendError(Error, 'BindingError');
  InternalError = Module['InternalError'] = extendError(Error, 'InternalError');
  init_ClassHandle();
  init_RegisteredPointer();
  init_embind();
  UnboundTypeError = Module['UnboundTypeError'] = extendError(Error, 'UnboundTypeError');
  init_emval();

  function intArrayToString(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      var chr = array[i];

      if (chr > 0xFF) {

        chr &= 0xFF;
      }

      ret.push(String.fromCharCode(chr));
    }

    return ret.join('');
  } // Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149
  // This code was written by Tyler Akins and has been placed in the
  // public domain.  It would be nice if you left this header intact.
  // Base64 code from Tyler Akins -- http://rumkin.com

  /**
   * Decodes a base64 string.
   * @param {string} input The string to decode.
   */


  var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

    do {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 !== 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 !== 64) {
        output = output + String.fromCharCode(chr3);
      }
    } while (i < input.length);

    return output;
  }; // Converts a string of base64 into a byte array.
  // Throws error on invalid input.

  function intArrayFromBase64(s) {
    if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
      var buf;

      try {
        // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()

        /**@suppress{checkTypes}*/
        buf = Buffer.from(s, 'base64');
      } catch (_) {
        buf = new Buffer(s, 'base64');
      }

      return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
    }

    try {
      var decoded = decodeBase64(s);
      var bytes = new Uint8Array(decoded.length);

      for (var i = 0; i < decoded.length; ++i) {
        bytes[i] = decoded.charCodeAt(i);
      }

      return bytes;
    } catch (_) {
      throw new Error('Converting base64 string to bytes failed.');
    }
  } // If filename is a base64 data URI, parses and returns data (Buffer on node,
  // Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.


  function tryParseAsDataURI(filename) {
    if (!isDataURI(filename)) {
      return;
    }

    return intArrayFromBase64(filename.slice(dataURIPrefix.length));
  }
  var asmLibraryArg = {
    "__cxa_allocate_exception": ___cxa_allocate_exception,
    "__cxa_throw": ___cxa_throw,
    "_embind_register_bool": __embind_register_bool,
    "_embind_register_class": __embind_register_class,
    "_embind_register_class_constructor": __embind_register_class_constructor,
    "_embind_register_class_function": __embind_register_class_function,
    "_embind_register_emval": __embind_register_emval,
    "_embind_register_enum": __embind_register_enum,
    "_embind_register_enum_value": __embind_register_enum_value,
    "_embind_register_float": __embind_register_float,
    "_embind_register_integer": __embind_register_integer,
    "_embind_register_memory_view": __embind_register_memory_view,
    "_embind_register_smart_ptr": __embind_register_smart_ptr,
    "_embind_register_std_string": __embind_register_std_string,
    "_embind_register_std_wstring": __embind_register_std_wstring,
    "_embind_register_void": __embind_register_void,
    "_emval_call": __emval_call,
    "_emval_decref": __emval_decref,
    "_emval_incref": __emval_incref,
    "_emval_take_value": __emval_take_value,
    "abort": _abort,
    "emscripten_get_sbrk_ptr": _emscripten_get_sbrk_ptr,
    "emscripten_memcpy_big": _emscripten_memcpy_big,
    "emscripten_resize_heap": _emscripten_resize_heap,
    "fd_close": _fd_close,
    "fd_seek": _fd_seek,
    "fd_write": _fd_write,
    "memory": wasmMemory,
    "setTempRet0": _setTempRet0,
    "table": wasmTable
  };
  var asm = createWasm();

  var ___wasm_call_ctors = Module["___wasm_call_ctors"] = asm["__wasm_call_ctors"];

  var ___errno_location = Module["___errno_location"] = asm["__errno_location"];

  var _setThrew = Module["_setThrew"] = asm["setThrew"];

  var _malloc = Module["_malloc"] = asm["malloc"];

  var _free = Module["_free"] = asm["free"];

  var ___getTypeName = Module["___getTypeName"] = asm["__getTypeName"];

  var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = asm["__embind_register_native_and_builtin_types"];

  var stackSave = Module["stackSave"] = asm["stackSave"];
  var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];
  var stackRestore = Module["stackRestore"] = asm["stackRestore"];

  var __growWasmMemory = Module["__growWasmMemory"] = asm["__growWasmMemory"];

  var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
  var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
  var dynCall_i = Module["dynCall_i"] = asm["dynCall_i"];
  var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
  var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
  var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
  var dynCall_vif = Module["dynCall_vif"] = asm["dynCall_vif"];
  var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
  var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
  var dynCall_viif = Module["dynCall_viif"] = asm["dynCall_viif"];
  var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
  var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
  var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
  var dynCall_jiji = Module["dynCall_jiji"] = asm["dynCall_jiji"];
  var dynCall_iidiiii = Module["dynCall_iidiiii"] = asm["dynCall_iidiiii"];
  var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
  /**
   * @license
   * Copyright 2010 The Emscripten Authors
   * SPDX-License-Identifier: MIT
   */
  // === Auto-generated postamble setup entry stuff ===

  Module['asm'] = asm;
  var calledRun;
  /**
   * @constructor
   * @this {ExitStatus}
   */

  function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status;
  }

  dependenciesFulfilled = function runCaller() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    if (!calledRun) run();
    if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
  };
  /** @type {function(Array=)} */


  function run(args) {

    if (runDependencies > 0) {
      return;
    }

    preRun();
    if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

    function doRun() {
      // run may have just been called through dependencies being fulfilled just in this very frame,
      // or while the async setStatus time below was happening
      if (calledRun) return;
      calledRun = true;
      Module['calledRun'] = true;
      if (ABORT) return;
      initRuntime();
      preMain();
      if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();
      postRun();
    }

    if (Module['setStatus']) {
      Module['setStatus']('Running...');
      setTimeout(function () {
        setTimeout(function () {
          Module['setStatus']('');
        }, 1);
        doRun();
      }, 1);
    } else {
      doRun();
    }
  }

  Module['run'] = run;

  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];

    while (Module['preInit'].length > 0) {
      Module['preInit'].pop()();
    }
  }
  run(); // {{MODULE_ADDITIONS}}

  /**
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not
   * use this file except in compliance with the License. You may obtain a copy of
   * the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
   * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
   * License for the specific language governing permissions and limitations under
   * the License.
   */
  // Basic byte unit of WASM heap. (16 bit = 2 bytes)
  var BYTES_PER_UNIT = Uint16Array.BYTES_PER_ELEMENT; // 2
  // Byte per audio sample. (32 bit float)

  var BYTES_PER_SAMPLE = Float32Array.BYTES_PER_ELEMENT; // 4
  // The max audio channel on Chrome is 32.

  var MAX_CHANNEL_COUNT = 32; // WebAudio's render quantum size.

  var RENDER_QUANTUM_FRAMES = 128;
  /**
   * A WASM HEAP wrapper for AudioBuffer class. This breaks down the AudioBuffer
   * into an Array of Float32Array for the convinient WASM opearion.
   *
   * @class
   * @dependency wasm A WASM module generated by the emscripten glue code.
   */

  var HeapAudioBuffer = /*#__PURE__*/function () {
    /**
     * @constructor
     * @param  {object} wasm WASM module generated by Emscripten.
     * @param  {number} length Buffer frame length.
     * @param  {number} channelCount Number of channels.
     * @param  {number=} maxChannelCount Maximum number of channels.
     */
    function HeapAudioBuffer(wasm, length, channelCount, maxChannelCount) {
      _classCallCheck(this, HeapAudioBuffer);

      // The |channelCount| must be greater than 0, and less than or equal to
      // the maximum channel count.
      this._isInitialized = false;
      this._module = wasm;
      this._length = length;
      this._maxChannelCount = maxChannelCount ? Math.min(maxChannelCount, MAX_CHANNEL_COUNT) : channelCount;
      this._channelCount = channelCount;

      this._allocateHeap();

      this._isInitialized = true;
    }
    /**
     * Allocates memory in the WASM heap and set up Float32Array views for the
     * channel data.
     *
     * @private
     */


    _createClass(HeapAudioBuffer, [{
      key: "_allocateHeap",
      value: function _allocateHeap() {
        var channelByteSize = this._length * BYTES_PER_SAMPLE; // 512

        var dataByteSize = this._maxChannelCount * channelByteSize; // 1024

        this._dataPtr = this._module._malloc(dataByteSize);
        this._channelData = [];

        for (var i = 0; i < this._channelCount; ++i) {
          var startByteOffset = this._dataPtr + i * channelByteSize;
          var endByteOffset = startByteOffset + channelByteSize; // Get the actual array index by dividing the byte offset by 2 bytes.

          this._channelData[i] = this._module.HEAPF32.subarray(startByteOffset >> BYTES_PER_UNIT, endByteOffset >> BYTES_PER_UNIT);
        }
      }
      /**
       * Adapt the current channel count to the new input buffer.
       *
       * @param  {number} newChannelCount The new channel count.
       */

    }, {
      key: "adaptChannel",
      value: function adaptChannel(newChannelCount) {
        if (newChannelCount < this._maxChannelCount) {
          this._channelCount = newChannelCount;
        }
      }
      /**
       * Getter for the buffer length in frames.
       *
       * @return {?number} Buffer length in frames.
       */

    }, {
      key: "getChannelData",

      /**
       * Returns a Float32Array object for a given channel index. If the channel
       * index is undefined, it returns the reference to the entire array of channel
       * data.
       *
       * @param  {number|undefined} channelIndex Channel index.
       * @return {?Array} a channel data array or an
       * array of channel data.
       */
      value: function getChannelData(channelIndex) {
        if (channelIndex >= this._channelCount) {
          return null;
        }

        return typeof channelIndex === "undefined" ? this._channelData : this._channelData[channelIndex];
      }
      /**
       * Returns the base address of the allocated memory space in the WASM heap.
       *
       * @return {number} WASM Heap address.
       */

    }, {
      key: "getHeapAddress",
      value: function getHeapAddress() {
        return this._dataPtr;
      }
      /**
       * Frees the allocated memory space in the WASM heap.
       */

    }, {
      key: "free",
      value: function free() {
        // this._channelData = null;
        this._module._free(this._dataPtr);
      }
    }, {
      key: "length",
      get: function get() {
        return this._isInitialized ? this._length : null;
      }
      /**
       * Getter for the number of channels.
       *
       * @return {?number} Buffer length in frames.
       */

    }, {
      key: "numberOfChannels",
      get: function get() {
        return this._isInitialized ? this._channelCount : null;
      }
      /**
       * Getter for the maxixmum number of channels allowed for the instance.
       *
       * @return {?number} Buffer length in frames.
       */

    }, {
      key: "maxChannelCount",
      get: function get() {
        return this._isInitialized ? this._maxChannelCount : null;
      }
    }]);

    return HeapAudioBuffer;
  }(); // class HeapAudioBuffer

  /**
   * Simplified buffer used with parameters, that don't need to
   * account for channels
   */


  var HeapParameterBuffer = /*#__PURE__*/function (_HeapAudioBuffer) {
    _inherits(HeapParameterBuffer, _HeapAudioBuffer);

    var _super = _createSuper(HeapParameterBuffer);

    function HeapParameterBuffer(wasm, length) {
      _classCallCheck(this, HeapParameterBuffer);

      return _super.call(this, wasm, length, 1, 1);
    }

    _createClass(HeapParameterBuffer, [{
      key: "getData",
      value: function getData() {
        return this.getChannelData(0);
      }
    }]);

    return HeapParameterBuffer;
  }(HeapAudioBuffer);

  var waveforms = Object.freeze({
    sine: Module.WaveForm.SINE,
    sawtooth: Module.WaveForm.SAW,
    square: Module.WaveForm.SQUARE,
    triangle: Module.WaveForm.TRIANGLE
  });
  var FilterMode = Object.freeze({
    LOWPASS: Module.FilterMode.LOWPASS,
    LOWPASS_PLUS: Module.FilterMode.LOWPASS_PLUS,
    BANDPASS: Module.FilterMode.BANDPASS,
    HIGHPASS: Module.FilterMode.HIGHPASS
  });
  var LfoDestination = Object.freeze({
    FREQUENCY: Module.LfoDestination.FREQUENCY,
    OSCILLATOR_MIX: Module.LfoDestination.OSCILLATOR_MIX,
    CUTOFF: Module.LfoDestination.CUTOFF,
    RESONANCE: Module.LfoDestination.RESONANCE,
    INVERSED_RESONANCE: Module.LfoDestination.INVERSED_RESONANCE
  });

  var VoiceProcessor = /*#__PURE__*/function (_AudioWorkletProcesso) {
    _inherits(VoiceProcessor, _AudioWorkletProcesso);

    var _super = _createSuper(VoiceProcessor);

    _createClass(VoiceProcessor, null, [{
      key: "parameterDescriptors",
      // noinspection JSUnresolvedFunction
      // noinspection JSUnusedGlobalSymbols
      get: function get() {
        return [{
          name: "frequency",
          defaultValue: 440,
          minValue: 0,
          maxValue: 0.5 * sampleRate,
          automationRate: "a-rate"
        }, {
          name: "amplitude",
          defaultValue: 0.5,
          minValue: 0,
          maxValue: 1,
          automationRate: "a-rate"
        }, {
          name: "amplitudeAttack",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "amplitudeDecay",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "amplitudeSustain",
          defaultValue: 0.5,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "amplitudeRelease",
          defaultValue: 0.5,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "cutoff",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "a-rate"
        }, {
          name: "resonance",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "a-rate"
        }, {
          name: "cutoffAttack",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "cutoffDecay",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "cutoffEnvelopeAmount",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "osc1SemiShift",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "osc1CentShift",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "osc2SemiShift",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "osc2CentShift",
          defaultValue: 0,
          minValue: 0,
          maxValue: 127,
          automationRate: "k-rate"
        }, {
          name: "osc2Amplitude",
          defaultValue: 127 / 2,
          minValue: 0,
          maxValue: 127,
          automationRate: "a-rate"
        }, {
          name: "lfo1Frequency",
          defaultValue: 127,
          minValue: 0,
          maxValue: 127,
          automationRate: "a-rate"
        }, {
          name: "lfo1ModAmount",
          defaultValue: 127,
          minValue: 0,
          maxValue: 127,
          automationRate: "a-rate"
        }, {
          name: "lfo2Frequency",
          defaultValue: 127,
          minValue: 0,
          maxValue: 127,
          automationRate: "a-rate"
        }, {
          name: "lfo2ModAmount",
          defaultValue: 127,
          minValue: 0,
          maxValue: 127,
          automationRate: "a-rate"
        }];
      }
    }]);

    function VoiceProcessor() {
      var _this;

      _classCallCheck(this, VoiceProcessor);

      _this = _super.call(this);

      _defineProperty(_assertThisInitialized(_this), "startTime", -1);

      _defineProperty(_assertThisInitialized(_this), "stopTime", undefined);

      _defineProperty(_assertThisInitialized(_this), "outputBuffer", new HeapAudioBuffer(Module, RENDER_QUANTUM_FRAMES, 2, MAX_CHANNEL_COUNT));

      _defineProperty(_assertThisInitialized(_this), "frequencyBuffer", new HeapParameterBuffer(Module, RENDER_QUANTUM_FRAMES));

      _defineProperty(_assertThisInitialized(_this), "oscillatorMixBuffer", new HeapParameterBuffer(Module, RENDER_QUANTUM_FRAMES));

      _defineProperty(_assertThisInitialized(_this), "cutoffBuffer", new HeapParameterBuffer(Module, RENDER_QUANTUM_FRAMES));

      _defineProperty(_assertThisInitialized(_this), "resonanceBuffer", new HeapParameterBuffer(Module, RENDER_QUANTUM_FRAMES));

      _defineProperty(_assertThisInitialized(_this), "lfo1FrequencyBuffer", new HeapParameterBuffer(Module, RENDER_QUANTUM_FRAMES));

      _defineProperty(_assertThisInitialized(_this), "lfo1ModAmountBuffer", new HeapParameterBuffer(Module, RENDER_QUANTUM_FRAMES));

      _defineProperty(_assertThisInitialized(_this), "lfo2FrequencyBuffer", new HeapParameterBuffer(Module, RENDER_QUANTUM_FRAMES));

      _defineProperty(_assertThisInitialized(_this), "lfo2ModAmountBuffer", new HeapParameterBuffer(Module, RENDER_QUANTUM_FRAMES));

      _defineProperty(_assertThisInitialized(_this), "kernel", new Module.VoiceKernel());

      _this.registerPortMessages();

      return _this;
    }

    _createClass(VoiceProcessor, [{
      key: "registerPortMessages",
      value: function registerPortMessages() {
        var _this2 = this;

        this.port.onmessage = function (event) {
          switch (event.data.type) {
            case "START":
              return _this2.startTime = event.data.time;

            case "STOP":
              return _this2.stopTime = event.data.time;

            case "WAVEFORM":
              if (event.data.target === "osc1") {
                var oscillatorMode = waveforms[event.data.waveform];
                return _this2.kernel.setOsc1Mode(oscillatorMode);
              }

              if (event.data.target === "osc2") {
                var _oscillatorMode = waveforms[event.data.waveform];
                return _this2.kernel.setOsc2Mode(_oscillatorMode);
              }

              if (event.data.target === "lfo1") {
                var _oscillatorMode2 = waveforms[event.data.waveform];
                return _this2.kernel.setLfo1Mode(_oscillatorMode2);
              }

              if (event.data.target === "lfo2") {
                var _oscillatorMode3 = waveforms[event.data.waveform];
                return _this2.kernel.setLfo2Mode(_oscillatorMode3);
              }

            case "FILTER_MODE":
              var filterMode = FilterMode[event.data.mode];
              return _this2.kernel.setFilterMode(filterMode);

            case "LFO_DESTINATION":
              if (event.data.target === "lfo1") {
                var lfoDestination = LfoDestination[event.data.destination];
                return _this2.kernel.setLfo1Destination(lfoDestination);
              }

              if (event.data.target === "lfo2") {
                var _lfoDestination = LfoDestination[event.data.destination];
                return _this2.kernel.setLfo2Destination(_lfoDestination);
              }

          }
        };
      }
    }, {
      key: "process",
      value: function process(inputs, outputs, parameters) {
        if (this.startTime > currentTime) {
          return true;
        }

        if (this.kernel.isStopped()) {
          this.outputBuffer.free();
          this.frequencyBuffer.free();
          this.oscillatorMixBuffer.free();
          this.cutoffBuffer.free();
          this.resonanceBuffer.free();
          this.lfo1FrequencyBuffer.free();
          this.lfo1ModAmountBuffer.free();
          this.lfo2FrequencyBuffer.free();
          this.lfo2ModAmountBuffer.free();
          return false;
        }

        if (this.stopTime && this.stopTime <= currentTime) {
          this.kernel.enterReleaseStage();
        }

        var output = outputs[0];
        var channelCount = output.length;
        this.outputBuffer.adaptChannel(channelCount);
        this.frequencyBuffer.getData().set(parameters.frequency);
        this.oscillatorMixBuffer.getData().set(parameters.osc2Amplitude);
        this.cutoffBuffer.getData().set(parameters.cutoff);
        this.resonanceBuffer.getData().set(parameters.resonance);
        this.lfo1FrequencyBuffer.getData().set(parameters.lfo1Frequency);
        this.lfo1ModAmountBuffer.getData().set(parameters.lfo1ModAmount);
        this.lfo2FrequencyBuffer.getData().set(parameters.lfo2Frequency);
        this.lfo2ModAmountBuffer.getData().set(parameters.lfo2ModAmount);
        var _ref = [this.outputBuffer.getHeapAddress(), this.frequencyBuffer.getHeapAddress(), this.oscillatorMixBuffer.getHeapAddress(), this.cutoffBuffer.getHeapAddress(), this.resonanceBuffer.getHeapAddress(), this.lfo1FrequencyBuffer.getHeapAddress(), this.lfo1ModAmountBuffer.getHeapAddress(), this.lfo2FrequencyBuffer.getHeapAddress(), this.lfo2ModAmountBuffer.getHeapAddress()],
            outputPtr = _ref[0],
            frequencyPtr = _ref[1],
            oscillatorMixPtr = _ref[2],
            cutoffPtr = _ref[3],
            resonancePtr = _ref[4],
            lfo1FrequencyPtr = _ref[5],
            lfo1ModAmountptr = _ref[6],
            lfo2FrequencyPtr = _ref[7],
            lfo2ModAmountptr = _ref[8]; // Oscillators parameters

        this.kernel.setAmplitudeAttack(Number(parameters.amplitudeAttack));
        this.kernel.setAmplitudeDecay(Number(parameters.amplitudeDecay));
        this.kernel.setAmplitudeSustain(Number(parameters.amplitudeSustain));
        this.kernel.setAmplitudeRelease(Number(parameters.amplitudeRelease));
        this.kernel.setOsc1SemiShift(Number(parameters.osc1SemiShift));
        this.kernel.setOsc1CentShift(Number(parameters.osc1CentShift));
        this.kernel.setOsc2SemiShift(Number(parameters.osc2SemiShift));
        this.kernel.setOsc2CentShift(Number(parameters.osc2CentShift));
        this.kernel.setOsc2Amplitude(oscillatorMixPtr); // Filter parameters

        this.kernel.setCutoff(cutoffPtr);
        this.kernel.setResonance(resonancePtr);
        this.kernel.setCutoffEnvelopeAmount(Number(parameters.cutoffEnvelopeAmount));
        this.kernel.setCutoffEnvelopeAttack(Number(parameters.cutoffAttack));
        this.kernel.setCutoffEnvelopeDecay(Number(parameters.cutoffDecay)); // LFO parameters

        this.kernel.setLfo1Frequency(lfo1FrequencyPtr);
        this.kernel.setLfo1ModAmount(lfo1ModAmountptr);
        this.kernel.setLfo2Frequency(lfo2FrequencyPtr);
        this.kernel.setLfo2ModAmount(lfo2ModAmountptr);
        this.kernel.process(outputPtr, channelCount, frequencyPtr);

        for (var channel = 0; channel < channelCount; ++channel) {
          output[channel].set(this.outputBuffer.getChannelData(channel)); // wasm to audio thread copy
        }

        return true;
      }
    }]);

    return VoiceProcessor;
  }( /*#__PURE__*/_wrapNativeSuper(AudioWorkletProcessor)); // noinspection JSUnresolvedFunction


  registerProcessor("voice", VoiceProcessor);

})));
