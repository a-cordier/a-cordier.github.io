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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

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

  var BooleanParam = Object.freeze({
    TRUE: 1,
    FALSE: 0
  });
  var WaveFormParam = Object.freeze({
    SINE: 0,
    SAWTOOTH: 1,
    SQUARE: 2,
    TRIANGLE: 3
  });
  var FilterModeParam = Object.freeze({
    LOWPASS: 0,
    LOWPASS_PLUS: 1,
    BANDPASS: 2,
    HIGHPASS: 3
  });
  var LfoDestinationParam = Object.freeze({
    FREQUENCY: 0,
    OSCILLATOR_MIX: 1,
    CUTOFF: 2,
    RESONANCE: 3
  });
  var staticParameterDescriptors = [{
    name: "startTime",
    defaultValue: -1,
    minValue: 0,
    automationRate: "k-rate"
  }, {
    name: "stopped",
    defaultValue: BooleanParam.TRUE,
    minValue: BooleanParam.FALSE,
    maxValue: BooleanParam.TRUE,
    automationRate: "k-rate"
  }, {
    name: "stopTime",
    defaultValue: -1,
    minValue: 0,
    automationRate: "k-rate"
  }, {
    name: "osc1",
    defaultValue: WaveFormParam.SINE,
    minValue: BooleanParam.SINE,
    maxValue: BooleanParam.TRIANGLE,
    automationRate: "k-rate"
  }, {
    name: "osc2",
    defaultValue: WaveFormParam.SINE,
    minValue: BooleanParam.SINE,
    maxValue: BooleanParam.TRIANGLE,
    automationRate: "k-rate"
  }, {
    name: "lfo1Mode",
    defaultValue: WaveFormParam.SINE,
    minValue: BooleanParam.SINE,
    maxValue: BooleanParam.TRIANGLE,
    automationRate: "k-rate"
  }, {
    name: "lfo2Mode",
    defaultValue: WaveFormParam.SINE,
    minValue: BooleanParam.SINE,
    maxValue: BooleanParam.TRIANGLE,
    automationRate: "k-rate"
  }, {
    name: "lfo1Destination",
    defaultValue: LfoDestinationParam.OSCILLATOR_MIX,
    minValue: LfoDestinationParam.FREQUENCY,
    maxValue: LfoDestinationParam.RESONANCE,
    automationRate: "k-rate"
  }, {
    name: "lfo2Destination",
    defaultValue: LfoDestinationParam.CUTOFF,
    minValue: LfoDestinationParam.FREQUENCY,
    maxValue: LfoDestinationParam.RESONANCE,
    automationRate: "k-rate"
  }, {
    name: "filterMode",
    defaultValue: FilterModeParam.LOWPASS,
    minValue: FilterModeParam.LOWPASS,
    maxValue: FilterModeParam.HIGHPASS,
    automationRate: "k-rate"
  }];
  var automatedParameterDescriptors = [{
    name: "frequency",
    defaultValue: 440,
    minValue: 0,
    maxValue: 16744,
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

  var Module = function () {
    var _scriptDir = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('voice-processor.js', document.baseURI).href));
    return function (Module) {
      Module = Module || {};
      var Module = typeof Module !== "undefined" ? Module : {};
      var readyPromiseResolve, readyPromiseReject;
      Module["ready"] = new Promise(function (resolve, reject) {
        readyPromiseResolve = resolve;
        readyPromiseReject = reject;
      });
      var moduleOverrides = {};
      var key;

      for (key in Module) {
        if (Module.hasOwnProperty(key)) {
          moduleOverrides[key] = Module[key];
        }
      }

      var arguments_ = [];
      var thisProgram = "./this.program";

      var quit_ = function quit_(status, toThrow) {
        throw toThrow;
      };

      var ENVIRONMENT_IS_WEB = false;
      var ENVIRONMENT_IS_WORKER = false;
      var ENVIRONMENT_IS_NODE = false;
      var ENVIRONMENT_IS_SHELL = false;
      ENVIRONMENT_IS_WEB = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
      ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
      ENVIRONMENT_IS_NODE = (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && _typeof(process.versions) === "object" && typeof process.versions.node === "string";
      ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
      var scriptDirectory = "";

      function locateFile(path) {
        if (Module["locateFile"]) {
          return Module["locateFile"](path, scriptDirectory);
        }

        return scriptDirectory + path;
      }

      var read_, readBinary;
      var nodeFS;
      var nodePath;

      if (ENVIRONMENT_IS_NODE) {
        if (ENVIRONMENT_IS_WORKER) {
          scriptDirectory = require("path").dirname(scriptDirectory) + "/";
        } else {
          scriptDirectory = __dirname + "/";
        }

        read_ = function shell_read(filename, binary) {
          var ret = tryParseAsDataURI(filename);

          if (ret) {
            return binary ? ret : ret.toString();
          }

          if (!nodeFS) nodeFS = require("fs");
          if (!nodePath) nodePath = require("path");
          filename = nodePath["normalize"](filename);
          return nodeFS["readFileSync"](filename, binary ? null : "utf8");
        };

        readBinary = function readBinary(filename) {
          var ret = read_(filename, true);

          if (!ret.buffer) {
            ret = new Uint8Array(ret);
          }

          assert(ret.buffer);
          return ret;
        };

        if (process["argv"].length > 1) {
          thisProgram = process["argv"][1].replace(/\\/g, "/");
        }

        arguments_ = process["argv"].slice(2);
        process["on"]("uncaughtException", function (ex) {
          if (!(ex instanceof ExitStatus)) {
            throw ex;
          }
        });
        process["on"]("unhandledRejection", abort);

        quit_ = function quit_(status) {
          process["exit"](status);
        };

        Module["inspect"] = function () {
          return "[Emscripten Module object]";
        };
      } else if (ENVIRONMENT_IS_SHELL) {
        if (typeof read != "undefined") {
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

          if (typeof readbuffer === "function") {
            return new Uint8Array(readbuffer(f));
          }

          data = read(f, "binary");
          assert(_typeof(data) === "object");
          return data;
        };

        if (typeof scriptArgs != "undefined") {
          arguments_ = scriptArgs;
        } else if (typeof arguments != "undefined") {
          arguments_ = arguments;
        }

        if (typeof quit === "function") {
          quit_ = function quit_(status) {
            quit(status);
          };
        }

        if (typeof print !== "undefined") {
          if (typeof console === "undefined") console = {};
          console.log = print;
          console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
        }
      } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
        if (ENVIRONMENT_IS_WORKER) {
          scriptDirectory = self.location.href;
        } else if (typeof document !== "undefined" && document.currentScript) {
          scriptDirectory = document.currentScript.src;
        }

        if (_scriptDir) {
          scriptDirectory = _scriptDir;
        }

        if (scriptDirectory.indexOf("blob:") !== 0) {
          scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
        } else {
          scriptDirectory = "";
        }

        {
          read_ = function shell_read(url) {
            try {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
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
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
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
      }

      var out = Module["print"] || console.log.bind(console);
      var err = Module["printErr"] || console.warn.bind(console);

      for (key in moduleOverrides) {
        if (moduleOverrides.hasOwnProperty(key)) {
          Module[key] = moduleOverrides[key];
        }
      }

      moduleOverrides = null;
      if (Module["arguments"]) arguments_ = Module["arguments"];
      if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
      if (Module["quit"]) quit_ = Module["quit"];
      var wasmBinary;
      if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
      var noExitRuntime;
      if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];

      if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) !== "object") {
        abort("no native wasm support detected");
      }

      var wasmMemory;
      var ABORT = false;

      function assert(condition, text) {
        if (!condition) {
          abort("Assertion failed: " + text);
        }
      }

      var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

      function UTF8ArrayToString(heap, idx, maxBytesToRead) {
        var endIdx = idx + maxBytesToRead;
        var endPtr = idx;

        while (heap[endPtr] && !(endPtr >= endIdx)) {
          ++endPtr;
        }

        if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
          return UTF8Decoder.decode(heap.subarray(idx, endPtr));
        } else {
          var str = "";

          while (idx < endPtr) {
            var u0 = heap[idx++];

            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }

            var u1 = heap[idx++] & 63;

            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }

            var u2 = heap[idx++] & 63;

            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
            }

            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
        }

        return str;
      }

      function UTF8ToString(ptr, maxBytesToRead) {
        return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
      }

      function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
        if (!(maxBytesToWrite > 0)) return 0;
        var startIdx = outIdx;
        var endIdx = outIdx + maxBytesToWrite - 1;

        for (var i = 0; i < str.length; ++i) {
          var u = str.charCodeAt(i);

          if (u >= 55296 && u <= 57343) {
            var u1 = str.charCodeAt(++i);
            u = 65536 + ((u & 1023) << 10) | u1 & 1023;
          }

          if (u <= 127) {
            if (outIdx >= endIdx) break;
            heap[outIdx++] = u;
          } else if (u <= 2047) {
            if (outIdx + 1 >= endIdx) break;
            heap[outIdx++] = 192 | u >> 6;
            heap[outIdx++] = 128 | u & 63;
          } else if (u <= 65535) {
            if (outIdx + 2 >= endIdx) break;
            heap[outIdx++] = 224 | u >> 12;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63;
          } else {
            if (outIdx + 3 >= endIdx) break;
            heap[outIdx++] = 240 | u >> 18;
            heap[outIdx++] = 128 | u >> 12 & 63;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63;
          }
        }

        heap[outIdx] = 0;
        return outIdx - startIdx;
      }

      function stringToUTF8(str, outPtr, maxBytesToWrite) {
        return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
      }

      function lengthBytesUTF8(str) {
        var len = 0;

        for (var i = 0; i < str.length; ++i) {
          var u = str.charCodeAt(i);
          if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
          if (u <= 127) ++len;else if (u <= 2047) len += 2;else if (u <= 65535) len += 3;else len += 4;
        }

        return len;
      }

      var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;

      function UTF16ToString(ptr, maxBytesToRead) {
        var endPtr = ptr;
        var idx = endPtr >> 1;
        var maxIdx = idx + maxBytesToRead / 2;

        while (!(idx >= maxIdx) && HEAPU16[idx]) {
          ++idx;
        }

        endPtr = idx << 1;

        if (endPtr - ptr > 32 && UTF16Decoder) {
          return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
        } else {
          var i = 0;
          var str = "";

          while (1) {
            var codeUnit = HEAP16[ptr + i * 2 >> 1];
            if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
            ++i;
            str += String.fromCharCode(codeUnit);
          }
        }
      }

      function stringToUTF16(str, outPtr, maxBytesToWrite) {
        if (maxBytesToWrite === undefined) {
          maxBytesToWrite = 2147483647;
        }

        if (maxBytesToWrite < 2) return 0;
        maxBytesToWrite -= 2;
        var startPtr = outPtr;
        var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;

        for (var i = 0; i < numCharsToWrite; ++i) {
          var codeUnit = str.charCodeAt(i);
          HEAP16[outPtr >> 1] = codeUnit;
          outPtr += 2;
        }

        HEAP16[outPtr >> 1] = 0;
        return outPtr - startPtr;
      }

      function lengthBytesUTF16(str) {
        return str.length * 2;
      }

      function UTF32ToString(ptr, maxBytesToRead) {
        var i = 0;
        var str = "";

        while (!(i >= maxBytesToRead / 4)) {
          var utf32 = HEAP32[ptr + i * 4 >> 2];
          if (utf32 == 0) break;
          ++i;

          if (utf32 >= 65536) {
            var ch = utf32 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          } else {
            str += String.fromCharCode(utf32);
          }
        }

        return str;
      }

      function stringToUTF32(str, outPtr, maxBytesToWrite) {
        if (maxBytesToWrite === undefined) {
          maxBytesToWrite = 2147483647;
        }

        if (maxBytesToWrite < 4) return 0;
        var startPtr = outPtr;
        var endPtr = startPtr + maxBytesToWrite - 4;

        for (var i = 0; i < str.length; ++i) {
          var codeUnit = str.charCodeAt(i);

          if (codeUnit >= 55296 && codeUnit <= 57343) {
            var trailSurrogate = str.charCodeAt(++i);
            codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
          }

          HEAP32[outPtr >> 2] = codeUnit;
          outPtr += 4;
          if (outPtr + 4 > endPtr) break;
        }

        HEAP32[outPtr >> 2] = 0;
        return outPtr - startPtr;
      }

      function lengthBytesUTF32(str) {
        var len = 0;

        for (var i = 0; i < str.length; ++i) {
          var codeUnit = str.charCodeAt(i);
          if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
          len += 4;
        }

        return len;
      }

      var WASM_PAGE_SIZE = 65536;
      var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

      function updateGlobalBufferAndViews(buf) {
        buffer = buf;
        Module["HEAP8"] = HEAP8 = new Int8Array(buf);
        Module["HEAP16"] = HEAP16 = new Int16Array(buf);
        Module["HEAP32"] = HEAP32 = new Int32Array(buf);
        Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
        Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
        Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
        Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
        Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
      }

      var INITIAL_INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 134217728;

      if (Module["wasmMemory"]) {
        wasmMemory = Module["wasmMemory"];
      } else {
        wasmMemory = new WebAssembly.Memory({
          "initial": INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE,
          "maximum": INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
        });
      }

      if (wasmMemory) {
        buffer = wasmMemory.buffer;
      }

      INITIAL_INITIAL_MEMORY = buffer.byteLength;
      updateGlobalBufferAndViews(buffer);
      var wasmTable;
      var __ATPRERUN__ = [];
      var __ATINIT__ = [];
      var __ATMAIN__ = [];
      var __ATPOSTRUN__ = [];

      function preRun() {
        if (Module["preRun"]) {
          if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];

          while (Module["preRun"].length) {
            addOnPreRun(Module["preRun"].shift());
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
        if (Module["postRun"]) {
          if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];

          while (Module["postRun"].length) {
            addOnPostRun(Module["postRun"].shift());
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

      var runDependencies = 0;
      var runDependencyWatcher = null;
      var dependenciesFulfilled = null;

      function addRunDependency(id) {
        runDependencies++;

        if (Module["monitorRunDependencies"]) {
          Module["monitorRunDependencies"](runDependencies);
        }
      }

      function removeRunDependency(id) {
        runDependencies--;

        if (Module["monitorRunDependencies"]) {
          Module["monitorRunDependencies"](runDependencies);
        }

        if (runDependencies == 0) {
          if (runDependencyWatcher !== null) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null;
          }

          if (dependenciesFulfilled) {
            var callback = dependenciesFulfilled;
            dependenciesFulfilled = null;
            callback();
          }
        }
      }

      Module["preloadedImages"] = {};
      Module["preloadedAudios"] = {};

      function abort(what) {
        if (Module["onAbort"]) {
          Module["onAbort"](what);
        }

        what += "";
        err(what);
        ABORT = true;
        what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
        var e = new WebAssembly.RuntimeError(what);
        readyPromiseReject(e);
        throw e;
      }

      function hasPrefix(str, prefix) {
        return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
      }

      var dataURIPrefix = "data:application/octet-stream;base64,";

      function isDataURI(filename) {
        return hasPrefix(filename, dataURIPrefix);
      }

      var wasmBinaryFile = "data:application/octet-stream;base64,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BSAACxEAAAtJAQJ/IAAoAgQiBUEIdSEGIAAoAgAiACABIAVBAXEEfyACKAIAIAZqKAIABSAGCyACaiADQQIgBUECcRsgBCAAKAIAKAIYEQUAC6MBACAAQQE6ADUCQCAAKAIEIAJHDQAgAEEBOgA0IAAoAhAiAkUEQCAAQQE2AiQgACADNgIYIAAgATYCECADQQFHDQEgACgCMEEBRw0BIABBAToANg8LIAEgAkYEQCAAKAIYIgJBAkYEQCAAIAM2AhggAyECCyAAKAIwQQFHDQEgAkEBRw0BIABBAToANg8LIABBAToANiAAIAAoAiRBAWo2AiQLC10BAX8gACgCECIDRQRAIABBATYCJCAAIAI2AhggACABNgIQDwsCQCABIANGBEAgACgCGEECRw0BIAAgAjYCGA8LIABBAToANiAAQQI2AhggACAAKAIkQQFqNgIkCwvWAgEBfwJAIAFFDQAgACABaiICQX9qQQA6AAAgAEEAOgAAIAFBA0kNACACQX5qQQA6AAAgAEEAOgABIAJBfWpBADoAACAAQQA6AAIgAUEHSQ0AIAJBfGpBADoAACAAQQA6AAMgAUEJSQ0AIABBACAAa0EDcSICaiIAQQA2AgAgACABIAJrQXxxIgJqIgFBfGpBADYCACACQQlJDQAgAEEANgIIIABBADYCBCABQXhqQQA2AgAgAUF0akEANgIAIAJBGUkNACAAQQA2AhggAEEANgIUIABBADYCECAAQQA2AgwgAUFwakEANgIAIAFBbGpBADYCACABQWhqQQA2AgAgAUFkakEANgIAIAIgAEEEcUEYciICayIBQSBJDQAgACACaiEAA0AgAEIANwMYIABCADcDECAAQgA3AwggAEIANwMAIABBIGohACABQWBqIgFBH0sNAAsLC/oMAQd/AkAgAEUNACAAQXhqIgMgAEF8aigCACIBQXhxIgBqIQUCQCABQQFxDQAgAUEDcUUNASADIAMoAgAiAmsiA0GsPCgCACIESQ0BIAAgAmohACADQbA8KAIARwRAIAJB/wFNBEAgAygCCCIEIAJBA3YiAkEDdEHEPGpHGiAEIAMoAgwiAUYEQEGcPEGcPCgCAEF+IAJ3cTYCAAwDCyAEIAE2AgwgASAENgIIDAILIAMoAhghBgJAIAMgAygCDCIBRwRAIAQgAygCCCICTQRAIAIoAgwa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CwoAIAAgATYCpAELCgAgACABNgKEAQsKACAAIAE2ApQECwoAIAAgATYCkAQLCgAgACABNgKMBAsKACAAIAE2AogECwoAIAAgATYChAQLCgAgACABNgKABAsKACAAIAE2AvwDCwoAIAAgATYCxAILBQBBpA0LCgAgACABNgL4AwsKACAAIAE2AvQDCwoAIAAgATYC8AMLCgAgACABNgLsAwsKACAAIAE2AuADCwoAIAAgATYC6AMLCgAgACABNgLkAwsQACAAIAE2AiAgACABNgJgC5ABAQN/IAAhAQJAAkAgAEEDcUUNACAALQAARQRAQQAPCwNAIAFBAWoiAUEDcUUNASABLQAADQALDAELA0AgASICQQRqIQEgAigCACIDQX9zIANB//37d2pxQYCBgoR4cUUNAAsgA0H/AXFFBEAgAiAAaw8LA0AgAi0AASEDIAJBAWoiASECIAMNAAsLIAEgAGsLggQBA38gAkGABE8EQCAAIAEgAhALGiAADwsgACACaiEDAkAgACABc0EDcUUEQAJAIAJBAUgEQCAAIQIMAQsgAEEDcUUEQCAAIQIMAQsgACECA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA08NASACQQNxDQALCwJAIANBfHEiBEHAAEkNACACIARBQGoiBUsNAANAIAIgASgCADYCACACIAEoAgQ2AgQgAiABKAIINgIIIAIgASgCDDYCDCACIAEoAhA2AhAgAiABKAIUNgIUIAIgASgCGDYCGCACIAEoAhw2AhwgAiABKAIgNgIgIAIgASgCJDYCJCACIAEoAig2AiggAiABKAIsNgIsIAIgASgCMDYCMCACIAEoAjQ2AjQgAiABKAI4NgI4IAIgASgCPDYCPCABQUBrIQEgAkFAayICIAVNDQALCyACIARPDQEDQCACIAEoAgA2AgAgAUEEaiEBIAJBBGoiAiAESQ0ACwwBCyADQQRJBEAgACECDAELIANBfGoiBCAASQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAiABLQABOgABIAIgAS0AAjoAAiACIAEtAAM6AAMgAUEEaiEBIAJBBGoiAiAETQ0ACwsgAiADSQRAA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgIgA0cNAAsLIAALCgAgACABNgLcAwsaACAAIAEoAgggBRASBEAg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QQogAEEAEABBCBAQIgBBADYCBCAAQSI2AgBBpA1BnQtBA0GsDkHUDkEIIABBABAAQQgQECIAQQA2AgQgAEEjNgIAQaQNQakLQQNBjA9B1A5BHyAAQQAQAEEIEBAiAEEANgIEIABBJDYCAEGkDUG8C0ECQbwPQcQPQSUgAEEAEABBCBAQIgBBADYCBCAAQSY2AgBBpA1BxgtBAkHID0HQD0EnIABBABAACwufMwUAQYAIC8IVVm9pY2VLZXJuZWwAcHJvY2VzcwBzZXRPc2MxTW9kZQBzZXRPc2MxU2VtaVNoaWZ0AHNldE9zYzFDZW50U2hpZnQAc2V0T3NjMk1vZGUAc2V0T3NjMlNlbWlTaGlmdABzZXRPc2MyQ2VudFNoaWZ0AHNldE9zYzJBbXBsaXR1ZGUAc2V0QW1wbGl0dWRlQXR0YWNrAHNldEFtcGxpdHVkZURlY2F5AHNldEFtcGxpdHVkZVN1c3RhaW4Ac2V0QW1wbGl0dWRlUmVsZWFzZQBzZXRGaWx0ZXJNb2RlAHNldEN1dG9mZgBzZXRSZXNvbmFuY2UAc2V0Q3V0b2ZmRW52ZWxvcGVBbW91bnQAc2V0Q3V0b2ZmRW52ZWxvcGVBdHRhY2sAc2V0Q3V0b2ZmRW52ZWxvcGVEZWNheQBzZXRMZm8xRnJlcXVlbmN5AHNldExmbzFNb2RBbW91bnQAc2V0TGZvMU1vZGUAc2V0TGZvMURlc3RpbmF0aW9uAHNldExmbzJGcmVxdWVuY3kAc2V0TGZvMk1vZEFtb3VudABzZXRMZm8yTW9kZQBzZXRMZm8yRGVzdGluYXRpb24AaXNTdG9wcGVkAGVudGVyUmVsZWFzZVN0YWdlAFdhdmVGb3JtAFNJTkUAU0FXAFNRVUFSRQBUUklBTkdMRQBGaWx0ZXJNb2RlAExPV1BBU1MATE9XUEFTU19QTFVTAEJBTkRQQVNTAEhJR0hQQVNTAFZvaWNlU3RhdGUARElTUE9TRUQAU1RBUlRFRABTVE9QUElORwBTVE9QUEVEAExmb0Rlc3RpbmF0aW9uAEZSRVFVRU5DWQBPU0NJTExBVE9SX01JWABDVVRPRkYAUkVTT05BTkNFAE41Vm9pY2U2S2VybmVsRQAAALQcAACSBgAAUE41Vm9pY2U2S2VybmVsRQAAAACUHQAArAYAAAAAAACkBgAAUEtONVZvaWNlNktlcm5lbEUAAACUHQAA0AYAAAEAAACkBgAAaWkAdgB2aQDABgAATBwAAEwcAABpaWZmAAAAALwbAADABgAAQBwAACgcAABAHAAAdmlpaWlpAAC8GwAAwAYAAEwHAABOMTBPc2NpbGxhdG9yNE1vZGVFAGgcAAA4BwAAdmlpaQAAAAC8GwAAwAYAAEAcAAC8GwAAwAYAAIQHAABONkZpbHRlcjRNb2RlRQAAaBwAAHQHAAC8GwAAwAYAALQHAABONVZvaWNlMTRMZm9EZXN0aW5hdGlvbkUAAAAAaBwAAJgHAADUGwAAwAYAAGlpaQC8GwAAwAYAAHZpaQBONVZvaWNlNVN0YXRlRQAAaBwAANQHAAB2b2lkAGJvb2wAY2hhcgBzaWduZWQgY2hhcgB1bnNpZ25lZCBjaGFyAHNob3J0AHVuc2lnbmVkIHNob3J0AGludAB1bnNpZ25lZCBpbnQAbG9uZwB1bnNpZ25lZCBsb25nAGZsb2F0AGRvdWJsZQBzdGQ6OnN0cmluZwBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBzdGQ6OndzdHJpbmcAc3RkOjp1MTZzdHJpbmcAc3RkOjp1MzJzdHJpbmcAZW1zY3JpcHRlbjo6dmFsAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4ATlN0M19fMjEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUATlN0M19fMjIxX19iYXNpY19zdHJpbmdfY29tbW9uSUxiMUVFRQAAtBwAAEELAAA4HQAAAgsAAAAAAAABAAAAaAsAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQAAOB0AAIgLAAAAAAAAAQAAAGgLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUAADgdAADgCwAAAAAAAAEAAABoCwAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEc05TXzExY2hhcl90cmFpdHNJRHNFRU5TXzlhbGxvY2F0b3JJRHNFRUVFAAAAOB0AADgMAAAAAAAAAQAAAGgLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUAAAA4HQAAlAwAAAAAAAABAAAAaAsAAAAAAABOMTBlbXNjcmlwdGVuM3ZhbEUAALQcAADwDAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJY0VFAAC0HAAADA0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWFFRQAAtBwAADQNAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0loRUUAALQcAABcDQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJc0VFAAC0HAAAhA0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXRFRQAAtBwAAKwNAABOMTBl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";

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

      function createWasm() {
        var info = {
          "a": asmLibraryArg
        };

        function receiveInstance(instance, module) {
          var exports = instance.exports;
          Module["asm"] = exports;
          wasmTable = Module["asm"]["r"];
          removeRunDependency();
        }

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
            err("failed to compile wasm module: " + str);

            if (str.indexOf("imported Memory") >= 0 || str.indexOf("memory import") >= 0) {
              err("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).");
            }

            throw e;
          }

          receiveInstance(instance);
        }

        if (Module["instantiateWasm"]) {
          try {
            var exports = Module["instantiateWasm"](info, receiveInstance);
            return exports;
          } catch (e) {
            err("Module.instantiateWasm callback failed with error: " + e);
            return false;
          }
        }

        instantiateSync();
        return Module["asm"];
      }

      function callRuntimeCallbacks(callbacks) {
        while (callbacks.length > 0) {
          var callback = callbacks.shift();

          if (typeof callback == "function") {
            callback(Module);
            continue;
          }

          var func = callback.func;

          if (typeof func === "number") {
            if (callback.arg === undefined) {
              wasmTable.get(func)();
            } else {
              wasmTable.get(func)(callback.arg);
            }
          } else {
            func(callback.arg === undefined ? null : callback.arg);
          }
        }
      }

      function dynCallLegacy(sig, ptr, args) {
        if (args && args.length) {
          return Module["dynCall_" + sig].apply(null, [ptr].concat(args));
        }

        return Module["dynCall_" + sig].call(null, ptr);
      }

      function dynCall(sig, ptr, args) {
        if (sig.indexOf("j") != -1) {
          return dynCallLegacy(sig, ptr, args);
        }

        return wasmTable.get(ptr).apply(null, args);
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
            throw new TypeError("Unknown type size: " + size);
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
          return "_unknown";
        }

        name = name.replace(/[^a-zA-Z0-9_]/g, "$");
        var f = name.charCodeAt(0);

        if (f >= char_0 && f <= char_9) {
          return "_" + name;
        } else {
          return name;
        }
      }

      function createNamedFunction(name, body) {
        name = makeLegalFunctionName(name);
        return new Function("body", "return function " + name + "() {\n" + '    "use strict";' + "    return body.apply(this, arguments);\n" + "};\n")(body);
      }

      function extendError(baseErrorType, errorName) {
        var errorClass = createNamedFunction(errorName, function (message) {
          this.name = errorName;
          this.message = message;
          var stack = new Error(message).stack;

          if (stack !== undefined) {
            this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
          }
        });
        errorClass.prototype = Object.create(baseErrorType.prototype);
        errorClass.prototype.constructor = errorClass;

        errorClass.prototype.toString = function () {
          if (this.message === undefined) {
            return this.name;
          } else {
            return this.name + ": " + this.message;
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
            throwInternalError("Mismatched type converter count");
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

      function registerType(rawType, registeredInstance, options) {
        options = options || {};

        if (!("argPackAdvance" in registeredInstance)) {
          throw new TypeError("registerType registeredInstance requires argPackAdvance");
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
          "fromWireType": function fromWireType(wt) {
            return !!wt;
          },
          "toWireType": function toWireType(destructors, o) {
            return o ? trueValue : falseValue;
          },
          "argPackAdvance": 8,
          "readValueFromPointer": function readValueFromPointer(pointer) {
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

            return this["fromWireType"](heap[pointer >> shift]);
          },
          destructorFunction: null
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

        throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
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
        if ("undefined" === typeof FinalizationGroup) {
          attachFinalizer = function attachFinalizer(handle) {
            return handle;
          };

          return handle;
        }

        finalizationGroup = new FinalizationGroup(function (iter) {
          for (var result = iter.next(); !result.done; result = iter.next()) {
            var $$ = result.value;

            if (!$$.ptr) {
              console.warn("object already deleted: " + $$.ptr);
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
          throwBindingError("Object already scheduled for deletion");
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
          obj["delete"]();
        }
      }

      function ClassHandle_deleteLater() {
        if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
        }

        if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
          throwBindingError("Object already scheduled for deletion");
        }

        deletionQueue.push(this);

        if (deletionQueue.length === 1 && delayFunction) {
          delayFunction(flushPendingDeletes);
        }

        this.$$.deleteScheduled = true;
        return this;
      }

      function init_ClassHandle() {
        ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
        ClassHandle.prototype["clone"] = ClassHandle_clone;
        ClassHandle.prototype["delete"] = ClassHandle_delete;
        ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
        ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
      }

      function ClassHandle() {}

      var registeredPointers = {};

      function ensureOverloadTable(proto, methodName, humanName) {
        if (undefined === proto[methodName].overloadTable) {
          var prevFunc = proto[methodName];

          proto[methodName] = function () {
            if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
              throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
            }

            return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
          };

          proto[methodName].overloadTable = [];
          proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
        }
      }

      function exposePublicSymbol(name, value, numArguments) {
        if (Module.hasOwnProperty(name)) {
          if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
            throwBindingError("Cannot register public name '" + name + "' twice");
          }

          ensureOverloadTable(Module, name, name);

          if (Module.hasOwnProperty(numArguments)) {
            throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
          }

          Module[name].overloadTable[numArguments] = value;
        } else {
          Module[name] = value;

          if (undefined !== numArguments) {
            Module[name].numArguments = numArguments;
          }
        }
      }

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
            throwBindingError("null is not a valid " + this.name);
          }

          return 0;
        }

        if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
        }

        if (!handle.$$.ptr) {
          throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
        }

        var handleClass = handle.$$.ptrType.registeredClass;
        var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
        return ptr;
      }

      function genericPointerToWireType(destructors, handle) {
        var ptr;

        if (handle === null) {
          if (this.isReference) {
            throwBindingError("null is not a valid " + this.name);
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
          throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
        }

        if (!this.isConst && handle.$$.ptrType.isConst) {
          throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
        }

        var handleClass = handle.$$.ptrType.registeredClass;
        ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);

        if (this.isSmartPointer) {
          if (undefined === handle.$$.smartPtr) {
            throwBindingError("Passing raw pointer to smart pointer is illegal");
          }

          switch (this.sharingPolicy) {
            case 0:
              if (handle.$$.smartPtrType === this) {
                ptr = handle.$$.smartPtr;
              } else {
                throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
              }

              break;

            case 1:
              ptr = handle.$$.smartPtr;
              break;

            case 2:
              if (handle.$$.smartPtrType === this) {
                ptr = handle.$$.smartPtr;
              } else {
                var clonedHandle = handle["clone"]();
                ptr = this.rawShare(ptr, __emval_register(function () {
                  clonedHandle["delete"]();
                }));

                if (destructors !== null) {
                  destructors.push(this.rawDestructor, ptr);
                }
              }

              break;

            default:
              throwBindingError("Unsupporting sharing policy");
          }
        }

        return ptr;
      }

      function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
        if (handle === null) {
          if (this.isReference) {
            throwBindingError("null is not a valid " + this.name);
          }

          return 0;
        }

        if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
        }

        if (!handle.$$.ptr) {
          throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
        }

        if (handle.$$.ptrType.isConst) {
          throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
        }

        var handleClass = handle.$$.ptrType.registeredClass;
        var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
        return ptr;
      }

      function simpleReadValueFromPointer(pointer) {
        return this["fromWireType"](HEAPU32[pointer >> 2]);
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
          handle["delete"]();
        }
      }

      function downcastPointer(ptr, ptrClass, desiredClass) {
        if (ptrClass === desiredClass) {
          return ptr;
        }

        if (undefined === desiredClass.baseClass) {
          return null;
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
        Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
        Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
        Module["flushPendingDeletes"] = flushPendingDeletes;
        Module["setDelayFunction"] = setDelayFunction;
      }

      var registeredInstances = {};

      function getBasestPointer(class_, ptr) {
        if (ptr === undefined) {
          throwBindingError("ptr should not be undefined");
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
          throwInternalError("makeClassHandle requires ptr and ptrType");
        }

        var hasSmartPtrType = !!record.smartPtrType;
        var hasSmartPtr = !!record.smartPtr;

        if (hasSmartPtrType !== hasSmartPtr) {
          throwInternalError("Both smartPtrType and smartPtr must be specified");
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
        var rawPointer = this.getPointee(ptr);

        if (!rawPointer) {
          this.destructor(ptr);
          return null;
        }

        var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);

        if (undefined !== registeredInstance) {
          if (0 === registeredInstance.$$.count.value) {
            registeredInstance.$$.ptr = rawPointer;
            registeredInstance.$$.smartPtr = ptr;
            return registeredInstance["clone"]();
          } else {
            var rv = registeredInstance["clone"]();
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
        RegisteredPointer.prototype["argPackAdvance"] = 8;
        RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
        RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
        RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
      }

      function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
        this.name = name;
        this.registeredClass = registeredClass;
        this.isReference = isReference;
        this.isConst = isConst;
        this.isSmartPointer = isSmartPointer;
        this.pointeeType = pointeeType;
        this.sharingPolicy = sharingPolicy;
        this.rawGetPointee = rawGetPointee;
        this.rawConstructor = rawConstructor;
        this.rawShare = rawShare;
        this.rawDestructor = rawDestructor;

        if (!isSmartPointer && registeredClass.baseClass === undefined) {
          if (isConst) {
            this["toWireType"] = constNoSmartPtrRawPointerToWireType;
            this.destructorFunction = null;
          } else {
            this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
            this.destructorFunction = null;
          }
        } else {
          this["toWireType"] = genericPointerToWireType;
        }
      }

      function replacePublicSymbol(name, value, numArguments) {
        if (!Module.hasOwnProperty(name)) {
          throwInternalError("Replacing nonexistant public symbol");
        }

        if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
          Module[name].overloadTable[numArguments] = value;
        } else {
          Module[name] = value;
          Module[name].argCount = numArguments;
        }
      }

      function getDynCaller(sig, ptr) {
        assert(sig.indexOf("j") >= 0, "getDynCaller should only be called with i64 sigs");
        var argCache = [];
        return function () {
          argCache.length = arguments.length;

          for (var i = 0; i < arguments.length; i++) {
            argCache[i] = arguments[i];
          }

          return dynCall(sig, ptr, argCache);
        };
      }

      function embind__requireFunction(signature, rawFunction) {
        signature = readLatin1String(signature);

        function makeDynCaller() {
          if (signature.indexOf("j") != -1) {
            return getDynCaller(signature, rawFunction);
          }

          return wasmTable.get(rawFunction);
        }

        var fp = makeDynCaller();

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
        throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
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
          throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
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
          var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
          var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
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
          var humanName = "constructor " + classType.name;

          if (undefined === classType.registeredClass.constructor_body) {
            classType.registeredClass.constructor_body = [];
          }

          if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
            throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
          }

          classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
            throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
          };

          whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
            classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
              if (arguments.length !== argCount - 1) {
                throwBindingError(humanName + " called with " + arguments.length + " arguments, expected " + (argCount - 1));
              }

              destructors.length = 0;
              args.length = argCount;

              for (var i = 1; i < argCount; ++i) {
                args[i] = argTypes[i]["toWireType"](destructors, arguments[i - 1]);
              }

              var ptr = invoker.apply(null, args);
              runDestructors(destructors);
              return argTypes[0]["fromWireType"](ptr);
            };

            return [];
          });
          return [];
        });
      }

      function new_(constructor, argumentList) {
        if (!(constructor instanceof Function)) {
          throw new TypeError("new_ called with constructor type " + _typeof(constructor) + " which is not a function");
        }

        var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function () {});
        dummy.prototype = constructor.prototype;
        var obj = new dummy();
        var r = constructor.apply(obj, argumentList);
        return r instanceof Object ? r : obj;
      }

      function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
        var argCount = argTypes.length;

        if (argCount < 2) {
          throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
        }

        var isClassMethodFunc = argTypes[1] !== null && classType !== null;
        var needsDestructorStack = false;

        for (var i = 1; i < argTypes.length; ++i) {
          if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
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

      function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
        var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
        methodName = readLatin1String(methodName);
        rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
        whenDependentTypesAreResolved([], [rawClassType], function (classType) {
          classType = classType[0];
          var humanName = classType.name + "." + methodName;

          if (isPureVirtual) {
            classType.registeredClass.pureVirtualFunctions.push(methodName);
          }

          function unboundTypesHandler() {
            throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
          }

          var proto = classType.registeredClass.instancePrototype;
          var method = proto[methodName];

          if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
            unboundTypesHandler.argCount = argCount - 2;
            unboundTypesHandler.className = classType.name;
            proto[methodName] = unboundTypesHandler;
          } else {
            ensureOverloadTable(proto, methodName, humanName);
            proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
          }

          whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
            var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);

            if (undefined === proto[methodName].overloadTable) {
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
        Module["count_emval_handles"] = count_emval_handles;
        Module["get_first_emval"] = get_first_emval;
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
          "fromWireType": function fromWireType(handle) {
            var rv = emval_handle_array[handle].value;

            __emval_decref(handle);

            return rv;
          },
          "toWireType": function toWireType(destructors, value) {
            return __emval_register(value);
          },
          "argPackAdvance": 8,
          "readValueFromPointer": simpleReadValueFromPointer,
          destructorFunction: null
        });
      }

      function enumReadValueFromPointer(name, shift, signed) {
        switch (shift) {
          case 0:
            return function (pointer) {
              var heap = signed ? HEAP8 : HEAPU8;
              return this["fromWireType"](heap[pointer]);
            };

          case 1:
            return function (pointer) {
              var heap = signed ? HEAP16 : HEAPU16;
              return this["fromWireType"](heap[pointer >> 1]);
            };

          case 2:
            return function (pointer) {
              var heap = signed ? HEAP32 : HEAPU32;
              return this["fromWireType"](heap[pointer >> 2]);
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
          "fromWireType": function fromWireType(c) {
            return this.constructor.values[c];
          },
          "toWireType": function toWireType(destructors, c) {
            return c.value;
          },
          "argPackAdvance": 8,
          "readValueFromPointer": enumReadValueFromPointer(name, shift, isSigned),
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
        var enumType = requireRegisteredType(rawEnumType, "enum");
        name = readLatin1String(name);
        var Enum = enumType.constructor;
        var Value = Object.create(enumType.constructor.prototype, {
          value: {
            value: enumValue
          },
          constructor: {
            value: createNamedFunction(enumType.name + "_" + name, function () {})
          }
        });
        Enum.values[enumValue] = Value;
        Enum[name] = Value;
      }

      function _embind_repr(v) {
        if (v === null) {
          return "null";
        }

        var t = _typeof(v);

        if (t === "object" || t === "array" || t === "function") {
          return v.toString();
        } else {
          return "" + v;
        }
      }

      function floatReadValueFromPointer(name, shift) {
        switch (shift) {
          case 2:
            return function (pointer) {
              return this["fromWireType"](HEAPF32[pointer >> 2]);
            };

          case 3:
            return function (pointer) {
              return this["fromWireType"](HEAPF64[pointer >> 3]);
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
          "fromWireType": function fromWireType(value) {
            return value;
          },
          "toWireType": function toWireType(destructors, value) {
            if (typeof value !== "number" && typeof value !== "boolean") {
              throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
            }

            return value;
          },
          "argPackAdvance": 8,
          "readValueFromPointer": floatReadValueFromPointer(name, shift),
          destructorFunction: null
        });
      }

      function integerReadValueFromPointer(name, shift, signed) {
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

        var isUnsignedType = name.indexOf("unsigned") != -1;
        registerType(primitiveType, {
          name: name,
          "fromWireType": fromWireType,
          "toWireType": function toWireType(destructors, value) {
            if (typeof value !== "number" && typeof value !== "boolean") {
              throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
            }

            if (value < minRange || value > maxRange) {
              throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
            }

            return isUnsignedType ? value >>> 0 : value | 0;
          },
          "argPackAdvance": 8,
          "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
          destructorFunction: null
        });
      }

      function __embind_register_memory_view(rawType, dataTypeIndex, name) {
        var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
        var TA = typeMapping[dataTypeIndex];

        function decodeMemoryView(handle) {
          handle = handle >> 2;
          var heap = HEAPU32;
          var size = heap[handle];
          var data = heap[handle + 1];
          return new TA(buffer, data, size);
        }

        name = readLatin1String(name);
        registerType(rawType, {
          name: name,
          "fromWireType": decodeMemoryView,
          "argPackAdvance": 8,
          "readValueFromPointer": decodeMemoryView
        }, {
          ignoreDuplicateRegistrations: true
        });
      }

      function __embind_register_std_string(rawType, name) {
        name = readLatin1String(name);
        var stdStringIsUTF8 = name === "std::string";
        registerType(rawType, {
          name: name,
          "fromWireType": function fromWireType(value) {
            var length = HEAPU32[value >> 2];
            var str;

            if (stdStringIsUTF8) {
              var decodeStartPtr = value + 4;

              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i;

                if (i == length || HEAPU8[currentBytePtr] == 0) {
                  var maxRead = currentBytePtr - decodeStartPtr;
                  var stringSegment = UTF8ToString(decodeStartPtr, maxRead);

                  if (str === undefined) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }

                  decodeStartPtr = currentBytePtr + 1;
                }
              }
            } else {
              var a = new Array(length);

              for (var i = 0; i < length; ++i) {
                a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
              }

              str = a.join("");
            }

            _free(value);

            return str;
          },
          "toWireType": function toWireType(destructors, value) {
            if (value instanceof ArrayBuffer) {
              value = new Uint8Array(value);
            }

            var getLength;
            var valueIsOfTypeString = typeof value === "string";

            if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
              throwBindingError("Cannot pass non-string to std::string");
            }

            if (stdStringIsUTF8 && valueIsOfTypeString) {
              getLength = function getLength() {
                return lengthBytesUTF8(value);
              };
            } else {
              getLength = function getLength() {
                return value.length;
              };
            }

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

                    throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
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
          "argPackAdvance": 8,
          "readValueFromPointer": simpleReadValueFromPointer,
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
          "fromWireType": function fromWireType(value) {
            var length = HEAPU32[value >> 2];
            var HEAP = getHeap();
            var str;
            var decodeStartPtr = value + 4;

            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i * charSize;

              if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                var maxReadBytes = currentBytePtr - decodeStartPtr;
                var stringSegment = decodeString(decodeStartPtr, maxReadBytes);

                if (str === undefined) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }

                decodeStartPtr = currentBytePtr + charSize;
              }
            }

            _free(value);

            return str;
          },
          "toWireType": function toWireType(destructors, value) {
            if (!(typeof value === "string")) {
              throwBindingError("Cannot pass non-string to C++ string type " + name);
            }

            var length = lengthBytesUTF(value);

            var ptr = _malloc(4 + length + charSize);

            HEAPU32[ptr >> 2] = length >> shift;
            encodeString(value, ptr + 4, length + charSize);

            if (destructors !== null) {
              destructors.push(_free, ptr);
            }

            return ptr;
          },
          "argPackAdvance": 8,
          "readValueFromPointer": simpleReadValueFromPointer,
          destructorFunction: function destructorFunction(ptr) {
            _free(ptr);
          }
        });
      }

      function __embind_register_void(rawType, name) {
        name = readLatin1String(name);
        registerType(rawType, {
          isVoid: true,
          name: name,
          "argPackAdvance": 0,
          "fromWireType": function fromWireType() {
            return undefined;
          },
          "toWireType": function toWireType(destructors, o) {
            return undefined;
          }
        });
      }

      function _abort() {
        abort();
      }

      function _emscripten_memcpy_big(dest, src, num) {
        HEAPU8.copyWithin(dest, src, src + num);
      }

      function abortOnCannotGrowMemory(requestedSize) {
        abort("OOM");
      }

      function _emscripten_resize_heap(requestedSize) {
        abortOnCannotGrowMemory();
      }

      embind_init_charCodes();
      BindingError = Module["BindingError"] = extendError(Error, "BindingError");
      InternalError = Module["InternalError"] = extendError(Error, "InternalError");
      init_ClassHandle();
      init_RegisteredPointer();
      init_embind();
      UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
      init_emval();

      function intArrayToString(array) {
        var ret = [];

        for (var i = 0; i < array.length; i++) {
          var chr = array[i];

          if (chr > 255) {

            chr &= 255;
          }

          ret.push(String.fromCharCode(chr));
        }

        return ret.join("");
      }

      var decodeBase64 = typeof atob === "function" ? atob : function (input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

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
      };

      function intArrayFromBase64(s) {
        if (typeof ENVIRONMENT_IS_NODE === "boolean" && ENVIRONMENT_IS_NODE) {
          var buf;

          try {
            buf = Buffer.from(s, "base64");
          } catch (_) {
            buf = new Buffer(s, "base64");
          }

          return new Uint8Array(buf["buffer"], buf["byteOffset"], buf["byteLength"]);
        }

        try {
          var decoded = decodeBase64(s);
          var bytes = new Uint8Array(decoded.length);

          for (var i = 0; i < decoded.length; ++i) {
            bytes[i] = decoded.charCodeAt(i);
          }

          return bytes;
        } catch (_) {
          throw new Error("Converting base64 string to bytes failed.");
        }
      }

      function tryParseAsDataURI(filename) {
        if (!isDataURI(filename)) {
          return;
        }

        return intArrayFromBase64(filename.slice(dataURIPrefix.length));
      }

      __ATINIT__.push({
        func: function func() {
          ___wasm_call_ctors();
        }
      });

      var asmLibraryArg = {
        "k": __embind_register_bool,
        "q": __embind_register_class,
        "p": __embind_register_class_constructor,
        "b": __embind_register_class_function,
        "j": __embind_register_emval,
        "f": __embind_register_enum,
        "c": __embind_register_enum_value,
        "i": __embind_register_float,
        "e": __embind_register_integer,
        "d": __embind_register_memory_view,
        "h": __embind_register_std_string,
        "g": __embind_register_std_wstring,
        "l": __embind_register_void,
        "o": _abort,
        "m": _emscripten_memcpy_big,
        "n": _emscripten_resize_heap,
        "a": wasmMemory
      };
      var asm = createWasm();

      var ___wasm_call_ctors = Module["___wasm_call_ctors"] = asm["s"];

      var ___getTypeName = Module["___getTypeName"] = asm["t"];

      var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = asm["u"];

      var _malloc = Module["_malloc"] = asm["v"];

      var _free = Module["_free"] = asm["w"];

      var calledRun;

      function ExitStatus(status) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" + status + ")";
        this.status = status;
      }

      dependenciesFulfilled = function runCaller() {
        if (!calledRun) run();
        if (!calledRun) dependenciesFulfilled = runCaller;
      };

      function run(args) {

        if (runDependencies > 0) {
          return;
        }

        preRun();
        if (runDependencies > 0) return;

        function doRun() {
          if (calledRun) return;
          calledRun = true;
          Module["calledRun"] = true;
          if (ABORT) return;
          initRuntime();
          preMain();
          readyPromiseResolve(Module);
          if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
          postRun();
        }

        if (Module["setStatus"]) {
          Module["setStatus"]("Running...");
          setTimeout(function () {
            setTimeout(function () {
              Module["setStatus"]("");
            }, 1);
            doRun();
          }, 1);
        } else {
          doRun();
        }
      }

      Module["run"] = run;

      if (Module["preInit"]) {
        if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];

        while (Module["preInit"].length > 0) {
          Module["preInit"].pop()();
        }
      }

      noExitRuntime = true;
      run();
      return Module.ready;
    };
  }();

  Module().then(function (wasm) {
    var _Object$freeze, _Object$freeze2, _Object$freeze3;

    var waveforms = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, WaveFormParam.SINE, wasm.WaveForm.SINE), _defineProperty(_Object$freeze, WaveFormParam.SAWTOOTH, wasm.WaveForm.SAW), _defineProperty(_Object$freeze, WaveFormParam.SQUARE, wasm.WaveForm.SQUARE), _defineProperty(_Object$freeze, WaveFormParam.TRIANGLE, wasm.WaveForm.TRIANGLE), _Object$freeze));
    var FilterMode = Object.freeze((_Object$freeze2 = {}, _defineProperty(_Object$freeze2, FilterModeParam.LOWPASS, wasm.FilterMode.LOWPASS), _defineProperty(_Object$freeze2, FilterModeParam.LOWPASS_PLUS, wasm.FilterMode.LOWPASS_PLUS), _defineProperty(_Object$freeze2, FilterModeParam.BANDPASS, wasm.FilterMode.BANDPASS), _defineProperty(_Object$freeze2, FilterModeParam.HIGHPASS, wasm.FilterMode.HIGHPASS), _Object$freeze2));
    var LfoDestination = Object.freeze((_Object$freeze3 = {}, _defineProperty(_Object$freeze3, LfoDestinationParam.FREQUENCY, wasm.LfoDestination.FREQUENCY), _defineProperty(_Object$freeze3, LfoDestinationParam.OSCILLATOR_MIX, wasm.LfoDestination.OSCILLATOR_MIX), _defineProperty(_Object$freeze3, LfoDestinationParam.CUTOFF, wasm.LfoDestination.CUTOFF), _defineProperty(_Object$freeze3, LfoDestinationParam.RESONANCE, wasm.LfoDestination.RESONANCE), _Object$freeze3));

    function createParameterBuffers() {
      var parameterDescriptors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return new Map(parameterDescriptors.map(toParameterBufferEntry));
    }

    function toParameterBufferEntry(descriptor) {
      return [descriptor.name, new HeapParameterBuffer(wasm, RENDER_QUANTUM_FRAMES)];
    }

    function kValueOf(param) {
      return param[0];
    }

    function isStarting(parameters) {
      return parameters.startTime >= currentTime;
    }

    function isStopping(parameters) {
      return kValueOf(parameters.stopped) === BooleanParam.TRUE && parameters.stopTime <= currentTime;
    }

    var VoiceProcessor = /*#__PURE__*/function (_AudioWorkletProcesso) {
      _inherits(VoiceProcessor, _AudioWorkletProcesso);

      var _super = _createSuper(VoiceProcessor);

      function VoiceProcessor() {
        var _this;

        _classCallCheck(this, VoiceProcessor);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));

        _defineProperty(_assertThisInitialized(_this), "outputBuffer", new HeapAudioBuffer(wasm, RENDER_QUANTUM_FRAMES, 2, MAX_CHANNEL_COUNT));

        _defineProperty(_assertThisInitialized(_this), "parameterBuffers", createParameterBuffers(automatedParameterDescriptors));

        _defineProperty(_assertThisInitialized(_this), "kernel", new wasm.VoiceKernel(sampleRate, RENDER_QUANTUM_FRAMES));

        return _this;
      }

      _createClass(VoiceProcessor, [{
        key: "process",
        value: function process(inputs, outputs, parameters) {
          if (isStarting(parameters)) {
            return true;
          }

          if (this.kernel.isStopped()) {
            this.freeBuffers();
            return false;
          }

          if (isStopping(parameters)) {
            this.kernel.enterReleaseStage();
          }

          var output = outputs[0];
          var channelCount = output.length;
          this.allocateBuffers(channelCount, parameters); // Static parameters

          this.kernel.setOsc1Mode(waveforms[kValueOf(parameters.osc1)]);
          this.kernel.setOsc2Mode(waveforms[kValueOf(parameters.osc2)]);
          this.kernel.setFilterMode(FilterMode[kValueOf(parameters.filterMode)]);
          this.kernel.setLfo1Mode(waveforms[kValueOf(parameters.lfo1Mode)]);
          this.kernel.setLfo1Mode(waveforms[kValueOf(parameters.lfo2Mode)]);
          this.kernel.setLfo2Destination(LfoDestination[kValueOf(parameters.lfo1Destination)]);
          this.kernel.setLfo2Destination(LfoDestination[kValueOf(parameters.lfo2Destination)]); // Oscillators parameters

          this.kernel.setAmplitudeAttack(this.parameterBuffers.get("amplitudeAttack").getHeapAddress());
          this.kernel.setAmplitudeDecay(this.parameterBuffers.get("amplitudeDecay").getHeapAddress());
          this.kernel.setAmplitudeSustain(this.parameterBuffers.get("amplitudeSustain").getHeapAddress());
          this.kernel.setAmplitudeRelease(this.parameterBuffers.get("amplitudeRelease").getHeapAddress());
          this.kernel.setOsc1SemiShift(this.parameterBuffers.get("osc1SemiShift").getHeapAddress());
          this.kernel.setOsc1CentShift(this.parameterBuffers.get("osc1CentShift").getHeapAddress());
          this.kernel.setOsc2SemiShift(this.parameterBuffers.get("osc2SemiShift").getHeapAddress());
          this.kernel.setOsc2CentShift(this.parameterBuffers.get("osc2CentShift").getHeapAddress());
          this.kernel.setOsc2Amplitude(this.parameterBuffers.get("osc2Amplitude").getHeapAddress()); // Filter parameters

          this.kernel.setCutoff(this.parameterBuffers.get("cutoff").getHeapAddress());
          this.kernel.setResonance(this.parameterBuffers.get("resonance").getHeapAddress());
          this.kernel.setCutoffEnvelopeAmount(this.parameterBuffers.get("cutoffEnvelopeAmount").getHeapAddress());
          this.kernel.setCutoffEnvelopeAttack(this.parameterBuffers.get("cutoffAttack").getHeapAddress());
          this.kernel.setCutoffEnvelopeDecay(this.parameterBuffers.get("cutoffDecay").getHeapAddress()); // LFO parameters

          this.kernel.setLfo1Frequency(this.parameterBuffers.get("lfo1Frequency").getHeapAddress());
          this.kernel.setLfo1ModAmount(this.parameterBuffers.get("lfo1ModAmount").getHeapAddress());
          this.kernel.setLfo2Frequency(this.parameterBuffers.get("lfo2Frequency").getHeapAddress());
          this.kernel.setLfo2ModAmount(this.parameterBuffers.get("lfo2ModAmount").getHeapAddress()); // Web Assembly rendering

          this.kernel.process(this.outputBuffer.getHeapAddress(), channelCount, this.parameterBuffers.get("frequency").getHeapAddress());

          for (var channel = 0; channel < channelCount; ++channel) {
            output[channel].set(this.outputBuffer.getChannelData(channel));
          }

          return true;
        }
      }, {
        key: "allocateBuffers",
        value: function allocateBuffers(channelCount, parameters) {
          this.outputBuffer.adaptChannel(channelCount);
          this.parameterBuffers.forEach(function (buffer, name) {
            buffer.getData().set(parameters[name]);
          });
        }
      }, {
        key: "freeBuffers",
        value: function freeBuffers() {
          this.outputBuffer.free();
          this.parameterBuffers.forEach(function (buffer) {
            buffer.free();
          });
        }
      }], [{
        key: "parameterDescriptors",
        get: function get() {
          return [].concat(_toConsumableArray(staticParameterDescriptors), _toConsumableArray(automatedParameterDescriptors));
        }
      }]);

      return VoiceProcessor;
    }( /*#__PURE__*/_wrapNativeSuper(AudioWorkletProcessor)); // noinspection JSUnresolvedFunction


    registerProcessor("voice", VoiceProcessor);
  });

})));
