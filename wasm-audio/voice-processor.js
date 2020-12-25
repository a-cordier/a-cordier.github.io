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
    RESONANCE: 3,
    OSC1_CYCLE: 4,
    OSC2_CYCLE: 5
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
    maxValue: LfoDestinationParam.OSC_2_CYCLE,
    automationRate: "k-rate"
  }, {
    name: "lfo2Destination",
    defaultValue: LfoDestinationParam.CUTOFF,
    minValue: LfoDestinationParam.FREQUENCY,
    maxValue: LfoDestinationParam.OSC_2_CYCLE,
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
    name: "osc1Cycle",
    defaultValue: 127 / 2,
    minValue: 5,
    maxValue: 122,
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
    name: "osc2Cycle",
    defaultValue: 127 / 2,
    minValue: 5,
    maxValue: 122,
    automationRate: "k-rate"
  }, {
    name: "osc2Amplitude",
    defaultValue: 127 / 2,
    minValue: 0,
    maxValue: 127,
    automationRate: "a-rate"
  }, {
    name: "noiseLevel",
    defaultValue: 0,
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
    } // include: node_shell_read.js


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
    }; // end include: node_shell_read.js


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
      } else if (typeof document !== 'undefined' && document.currentScript) {
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
        // include: web_or_worker_shell_read.js
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
    abort('no native wasm support detected');
  } // include: runtime_safe_heap.js
  // Wasm globals


  var wasmMemory; //========================================
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
  } // end include: runtime_strings.js
  // a copy of that string as a Javascript String object.


  var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

  function UTF16ToString(ptr, maxBytesToRead) {
    var endPtr = ptr; // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
    // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.

    var idx = endPtr >> 1;
    var maxIdx = idx + maxBytesToRead / 2; // If maxBytesToRead is not passed explicitly, it will be undefined, and this
    // will always evaluate to true. This saves on code size.

    while (!(idx >= maxIdx) && HEAPU16[idx]) {
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
        if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
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

  function UTF32ToString(ptr, maxBytesToRead) {
    var i = 0;
    var str = ''; // If maxBytesToRead is not passed explicitly, it will be undefined, and this
    // will always evaluate to true. This saves on code size.

    while (!(i >= maxBytesToRead / 4)) {
      var utf32 = HEAP32[ptr + i * 4 >> 2];
      if (utf32 == 0) break;
      ++i; // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
      // See http://unicode.org/faq/utf_bom.html#utf16-3

      if (utf32 >= 0x10000) {
        var ch = utf32 - 0x10000;
        str += String.fromCharCode(0xD800 | ch >> 10, 0xDC00 | ch & 0x3FF);
      } else {
        str += String.fromCharCode(utf32);
      }
    }

    return str;
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
  var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 134217728; // In non-standalone/normal mode, we create the memory here.
  // include: runtime_init_memory.js
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
  updateGlobalBufferAndViews(buffer); // end include: runtime_init_memory.js
  // include: runtime_init_table.js
  // In regular non-RELOCATABLE mode the table is exported
  // from the wasm module and this will be assigned once
  // the exports are available.

  var wasmTable; // end include: runtime_init_table.js
  // include: runtime_stack_check.js
  // end include: runtime_stack_check.js
  // include: runtime_assertions.js
  // end include: runtime_assertions.js

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
  } // include: runtime_math.js
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
  // end include: runtime_math.js
  // A counter of dependencies for calling run(). If we need to
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
    err(what);
    ABORT = true;
    what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.'; // Use a wasm runtime error, because a JS error might be seen as a foreign
    // exception, which means we'd run destructors on it. We need the error to
    // simply make the program stop.

    var e = new WebAssembly.RuntimeError(what); // Throw the error whether or not MODULARIZE is set because abort is used
    // in code paths apart from instantiation where an exception is expected
    // to be thrown when abort is called.

    throw e;
  } // {{MEM_INITIALIZER}}
  // include: memoryprofiler.js
  // end include: memoryprofiler.js
  // include: URIUtils.js


  function hasPrefix(str, prefix) {
    return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
  } // Prefix of data URIs emitted by SINGLE_FILE and related options.


  var dataURIPrefix = 'data:application/octet-stream;base64,'; // Indicates whether filename is a base64 data URI.

  function isDataURI(filename) {
    return hasPrefix(filename, dataURIPrefix);
  }


  var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABioKAgAAmYAABf2ABfwF/YAJ/fwBgAX8AYAAAYAJ/fQBgAn9/AX9gBH9/f38AYAN/f38Bf2AFf39/f38AYAF/AX1gA39/fwBgBn9/f39/fwBgAX0BfWACf30BfWADf319AX9gBH99fX8BfWABfAF8YAJ/fQF/YAF8AX1gAnx8AXxgCH9/f39/f39/AGANf39/f39/f39/f39/fwBgA39/fQBgBH9/f38Bf2AFf39/f38Bf2AHf39/fX1/fwF/YAd/fX19fX19AX9gAn1/AX9gA39/fwF9YAV/f39/fwF9YAN/fX8BfWADf319AX1gBH99fX0BfWADfX1/AX1gBH19f38BfWACfX8BfGACfH8BfAKFhICAABIDZW52Fl9lbWJpbmRfcmVnaXN0ZXJfY2xhc3MAFgNlbnYVX2VtYmluZF9yZWdpc3Rlcl9lbnVtAAcDZW52G19lbWJpbmRfcmVnaXN0ZXJfZW51bV92YWx1ZQALA2VudiJfZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NvbnN0cnVjdG9yAAwDZW52BHRpbWUAAQNlbnYfX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19mdW5jdGlvbgAVA2VudhVfZW1iaW5kX3JlZ2lzdGVyX3ZvaWQAAgNlbnYVX2VtYmluZF9yZWdpc3Rlcl9ib29sAAkDZW52G19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZwACA2VudhxfZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nAAsDZW52Fl9lbWJpbmRfcmVnaXN0ZXJfZW12YWwAAgNlbnYYX2VtYmluZF9yZWdpc3Rlcl9pbnRlZ2VyAAkDZW52Fl9lbWJpbmRfcmVnaXN0ZXJfZmxvYXQACwNlbnYcX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldwALA2VudgVhYm9ydAAEA2VudhZlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwAAEDZW52FWVtc2NyaXB0ZW5fbWVtY3B5X2JpZwAIA2VudgZtZW1vcnkCAYAQgBADqoOAgACoAwQNIg0jBA8EBAQEBAQEBAQEBAQEAQQAAAAAAAAAAQAAAwYDBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgECAwIDCwoDAgICAgMEAQYIAAQB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ABAFIAJBEGokAAsNACAAQZQEaiABNgIACz0BAX8jAEEQayICJAAgAiABKQIANwMIECkgACACEM4BIAIQzwEQyQFBJiACQQhqENEBQQAQBSACQRBqJAALDQAgAEGYBGogATYCAAsNACAAQZwEaiABNgIACxUAIABBJGogARBeIABB7ABqIAEQYAsNACAAQaQEaiABNgIACw0AIABBqARqIAE2AgALDQAgAEGsBGogATYCAAsNACAAQaAEaiABNgIACw0AIABBsARqIAE2AgALDQAgAEG0BGogATYCAAsNACAAQbgEaiABNgIACw0AIABBvARqIAE2AgALDQAgAEHABGogATYCAAsMACAAQYADaiABEGELPQEBfyMAQRBrIgIkACACIAEpAgA3AwgQKSAAIAIQ0wEgAhDUARDJAUEnIAJBCGoQ1gFBABAFIAJBEGokAAsNACAAQcQEaiABNgIACw0AIABByARqIAE2AgALDQAgAEHMBGogATYCAAsNACAAQdAEaiABNgIACw0AIABB1ARqIAE2AgALDQAgAEHYBGogATYCAAsNACAAQdwEaiABNgIACwwAIABBuAFqIAEQXgsKACAAIAE2AtwBCz0BAX8jAEEQayICJAAgAiABKQIANwMIECkgACACENkBIAIQ2gEQyQFBKCACQQhqENwBQQAQBSACQRBqJAALDQAgAEHgBGogATYCAAsNACAAQeQEaiABNgIACwwAIABB4AFqIAEQXgsKACAAIAE2AoQCCwsAIAAoAowEQQNGCz0BAX8jAEEQayICJAAgAiABKQIANwMIECkgACACEN8BIAIQ4AEQ4QFBKSACQQhqEOMBQQAQBSACQRBqJAALEgAgAEECNgKMBCAAQYgCahBiCz0BAX8jAEEQayICJAAgAiABKQIANwMIECkgACACEOYBIAIQ5wEQ6AFBKiACQQhqEOoBQQAQBSACQRBqJAALJQACQCAAKAKMBA0AIABBiAJqEHcgAEGUA2oQdyAAQQE2AowECwuVAgEBfyAAQZAEaiABEHggAhB5IAAQeiAAIABB7ARqIgIqAgAQeyAAQewAaiIBIAIqAgAQfCAAIABB8ARqIgIqAgAQfSABIAIqAgAQfiAAIABB9ARqIgIqAgAQfyABIAIqAgAQgAEgAEEkaiICIABB+ARqIgMqAgAQeyABIAMqAgAQgQEg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ByADIAdqIQggCCQADwsMAQF/ELECIQAgAA8LDAEBfxCyAiEAIAAPCwwBAX8QswIhACAADwsMAQF/ELQCIQAgAA8LDAEBfxC1AiEAIAAPCwwBAX8QtgIhACAADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQtwIhBBC4AiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQuQIhBBC6AiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQuwIhBBC8AiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQvQIhBBC+AiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQvwIhBBDAAiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQwQIhBBDCAiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQwwIhBBDEAiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQxQIhBBDGAiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQxwIhBBDIAiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQyQIhBBDKAiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwtHAQh/IwAhAUEQIQIgASACayEDIAMkACADIAA2AgwQywIhBBDMAiEFIAMoAgwhBiAEIAUgBhANQRAhByADIAdqIQggCCQADwsQAQJ/Qfw3IQAgACEBIAEP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bnZlbG9wZUF0dGFjawBzZXRDdXRvZmZFbnZlbG9wZURlY2F5AHNldExmbzFGcmVxdWVuY3kAc2V0TGZvMU1vZEFtb3VudABzZXRMZm8xTW9kZQBzZXRMZm8xRGVzdGluYXRpb24Ac2V0TGZvMkZyZXF1ZW5jeQBzZXRMZm8yTW9kQW1vdW50AHNldExmbzJNb2RlAHNldExmbzJEZXN0aW5hdGlvbgBpc1N0b3BwZWQAZW50ZXJSZWxlYXNlU3RhZ2UAV2F2ZUZvcm0AU0lORQBTQVcAU1FVQVJFAFRSSUFOR0xFAEZpbHRlck1vZGUATE9XUEFTUwBMT1dQQVNTX1BMVVMAQkFORFBBU1MASElHSFBBU1MAVm9pY2VTdGF0ZQBESVNQT1NFRABTVEFSVEVEAFNUT1BQSU5HAFNUT1BQRUQATGZvRGVzdGluYXRpb24ARlJFUVVFTkNZAE9TQ0lMTEFUT1JfTUlYAENVVE9GRgBSRVNPTkFOQ0UAT1NDMV9DWUNMRQBPU0MyX0NZQ0xFAE41Vm9pY2U2S2VybmVsRQD0HAAA0AYAAFBONVZvaWNlNktlcm5lbEUAAAAA1B0AAOgGAAAAAAAA4AYAAFBLTjVWb2ljZTZLZXJuZWxFAAAA1B0AAAwHAAABAAAA4AYAAGlpAHYAdmkA/AYAAIwcAACMHAAAaWlmZgAAAAAAAAAA/BsAAPwGAACAHAAAaBwAAIAcAAB2aWlpaWkAAPwbAAD8BgAAjAcAAE4xME9zY2lsbGF0b3I0TW9kZUUAqBwAAHgHAAB2aWlpAAAAAPwbAAD8BgAAgBwAAPwbAAD8BgAAxAcAAE42RmlsdGVyNE1vZGVFAACoHAAAtAcAAPwbAAD8BgAA9AcAAE41Vm9pY2UxNExmb0Rlc3RpbmF0aW9uRQAAAACoHAAA2AcAABQcAAD8BgAAaWlpAPwbAAD8BgAAdmlpAE41Vm9pY2U1U3RhdGVFAACoHAAAFAgAAHZvaWQAYm9vbABjaGFyAHNpZ25lZCBjaGFyAHVuc2lnbmVkIGNoYXIAc2hvcnQAdW5zaWduZWQgc2hvcnQAaW50AHVuc2lnbmVkIGludABsb25nAHVuc2lnbmVkIGxvbmcAZmxvYXQAZG91YmxlAHN0ZDo6c3RyaW5nAHN0ZDo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXI+AHN0ZDo6d3N0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBlbXNjcmlwdGVuOjp2YWwAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8Y2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxmbG9hdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQBOU3QzX18yMjFfX2Jhc2ljX3N0cmluZ19jb21tb25JTGIxRUVFAAD0HAAAgQsAAHgdAABCCwAAAAAAAAEAAACoCwAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAAB4HQAAyAsAAAAAAAABAAAAqAsAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAAeB0AACAMAAAAAAAAAQAAAKgLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURzTlNfMTFjaGFyX3RyYWl0c0lEc0VFTlNfOWFsbG9jYXRvcklEc0VFRUUAAAB4HQAAeAwAAAAAAAABAAAAqAsAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRGlOU18xMWNoYXJfdHJhaXRzSURpRUVOU185YWxsb2NhdG9ySURpRUVFRQAAAHgdAADUDAAAAAAAAAEAAACoCwAAAAAAAE4xMGVtc2NyaXB0ZW4zdmFsRQAA9BwAADANAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ljRUUAAPQcAABMDQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJYUVFAAD0HAAAdA0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWhFRQAA9BwAAJwNAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lzRUUAAPQcAADEDQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJdEVFAAD0HAAA7A0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWlFRQAA9BwAABQOAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lqRUUAAPQcAAA8DgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbEVFAAD0HAAAZA4AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SW1FRQAA9BwAAIwOAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lmRUUAAPQcAAC0DgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAAD0HAAA3A4AAAAAAAAAAAAAAAAAAAAAAAAAAPA/AAAAAAAA+D8AAAAAAAAAAAbQz0Pr/Uw+AAAAAAAAAAAAAABAA7jiPwMAAAAEAAAABAAAAAYAAACD+aIARE5uAPwpFQDRVycA3TT1AGLbwAA8mZUAQZBDAGNR/gC73qsAt2HFADpuJADSTUIASQbgAAnqLgAcktEA6x3+ACmxHADoPqcA9TWCAES7LgCc6YQAtCZwAEF+XwDWkTkAU4M5AJz0OQCLX4QAKPm9APgfOwDe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AAAALgAAAC8AAABBAAAAAEHoOwsEYCBQAABB8DsL8AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=';

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
      wasmTable = Module['asm']['__indirect_function_table'];
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
      return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
    }

    return Module['dynCall_' + sig].call(null, ptr);
  }

  function dynCall(sig, ptr, args) {
    // Without WASM_BIGINT support we cannot directly call function with i64 as
    // part of thier signature, so we rely the dynCall functions generated by
    // wasm-emscripten-finalize
    if (sig.indexOf('j') != -1) {
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

  function getDynCaller(sig, ptr) {
    assert(sig.indexOf('j') >= 0, 'getDynCaller should only be called with i64 sigs');
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
      if (signature.indexOf('j') != -1) {
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
          var decodeStartPtr = value + 4; // Looping here to support possible embedded '0' bytes

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
        var str;
        var decodeStartPtr = value + 4; // Looping here to support possible embedded '0' bytes

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

  function _abort() {
    abort();
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

  function _time(ptr) {
    var ret = Date.now() / 1000 | 0;

    if (ptr) {
      HEAP32[ptr >> 2] = ret;
    }

    return ret;
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

  __ATINIT__.push({
    func: function func() {
      ___wasm_call_ctors();
    }
  });

  var asmLibraryArg = {
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
    "_embind_register_std_string": __embind_register_std_string,
    "_embind_register_std_wstring": __embind_register_std_wstring,
    "_embind_register_void": __embind_register_void,
    "abort": _abort,
    "emscripten_memcpy_big": _emscripten_memcpy_big,
    "emscripten_resize_heap": _emscripten_resize_heap,
    "memory": wasmMemory,
    "time": _time
  };
  var asm = createWasm();
  /** @type {function(...*):?} */

  var ___wasm_call_ctors = Module["___wasm_call_ctors"] = asm["__wasm_call_ctors"];
  /** @type {function(...*):?} */


  var ___getTypeName = Module["___getTypeName"] = asm["__getTypeName"];
  /** @type {function(...*):?} */


  var ___embind_register_native_and_builtin_types = Module["___embind_register_native_and_builtin_types"] = asm["__embind_register_native_and_builtin_types"];
  /** @type {function(...*):?} */


  var ___errno_location = Module["___errno_location"] = asm["__errno_location"];
  /** @type {function(...*):?} */


  var _malloc = Module["_malloc"] = asm["malloc"];
  /** @type {function(...*):?} */


  var stackSave = Module["stackSave"] = asm["stackSave"];
  /** @type {function(...*):?} */

  var stackRestore = Module["stackRestore"] = asm["stackRestore"];
  /** @type {function(...*):?} */

  var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];
  /** @type {function(...*):?} */

  var _free = Module["_free"] = asm["free"]; // === Auto-generated postamble setup entry stuff ===


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
  run();

  var _Object$freeze, _Object$freeze2, _Object$freeze3;
  var waveforms = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, WaveFormParam.SINE, Module.WaveForm.SINE), _defineProperty(_Object$freeze, WaveFormParam.SAWTOOTH, Module.WaveForm.SAW), _defineProperty(_Object$freeze, WaveFormParam.SQUARE, Module.WaveForm.SQUARE), _defineProperty(_Object$freeze, WaveFormParam.TRIANGLE, Module.WaveForm.TRIANGLE), _Object$freeze));
  var FilterMode = Object.freeze((_Object$freeze2 = {}, _defineProperty(_Object$freeze2, FilterModeParam.LOWPASS, Module.FilterMode.LOWPASS), _defineProperty(_Object$freeze2, FilterModeParam.LOWPASS_PLUS, Module.FilterMode.LOWPASS_PLUS), _defineProperty(_Object$freeze2, FilterModeParam.BANDPASS, Module.FilterMode.BANDPASS), _defineProperty(_Object$freeze2, FilterModeParam.HIGHPASS, Module.FilterMode.HIGHPASS), _Object$freeze2));
  var LfoDestination = Object.freeze((_Object$freeze3 = {}, _defineProperty(_Object$freeze3, LfoDestinationParam.FREQUENCY, Module.LfoDestination.FREQUENCY), _defineProperty(_Object$freeze3, LfoDestinationParam.OSCILLATOR_MIX, Module.LfoDestination.OSCILLATOR_MIX), _defineProperty(_Object$freeze3, LfoDestinationParam.CUTOFF, Module.LfoDestination.CUTOFF), _defineProperty(_Object$freeze3, LfoDestinationParam.RESONANCE, Module.LfoDestination.RESONANCE), _defineProperty(_Object$freeze3, LfoDestinationParam.OSC1_CYCLE, Module.LfoDestination.OSC1_CYCLE), _defineProperty(_Object$freeze3, LfoDestinationParam.OSC2_CYCLE, Module.LfoDestination.OSC2_CYCLE), _Object$freeze3));

  function createParameterBuffers() {
    var parameterDescriptors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return new Map(parameterDescriptors.map(toParameterBufferEntry));
  }

  function toParameterBufferEntry(descriptor) {
    return [descriptor.name, new HeapParameterBuffer(Module, RENDER_QUANTUM_FRAMES)];
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
  /**
   * When a number of voices are stacked together,
   * long time release values may lead to buffer overflow.
   * Let's start with a dummy way of mitigating this by
   * lower release value for each new voice we stack.
   */


  var voiceCount = 0;

  function adaptRelease(parameters) {
    return [kValueOf(parameters.amplitudeRelease) / voiceCount];
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

      _defineProperty(_assertThisInitialized(_this), "outputBuffer", new HeapAudioBuffer(Module, RENDER_QUANTUM_FRAMES, 2, MAX_CHANNEL_COUNT));

      _defineProperty(_assertThisInitialized(_this), "parameterBuffers", createParameterBuffers(automatedParameterDescriptors));

      _defineProperty(_assertThisInitialized(_this), "kernel", new Module.VoiceKernel(sampleRate, RENDER_QUANTUM_FRAMES));

      _defineProperty(_assertThisInitialized(_this), "isStopping", false);

      _defineProperty(_assertThisInitialized(_this), "isStarted", false);

      return _this;
    }

    _createClass(VoiceProcessor, [{
      key: "process",
      value: function process(inputs, outputs, parameters) {
        if (isStarting(parameters)) {
          return true;
        }

        if (!this.isStarted) {
          this.isStarted = true;
          ++voiceCount;
        }

        if (this.kernel.isStopped()) {
          this.freeBuffers();
          --voiceCount;
          return false;
        }

        var output = outputs[0];
        var channelCount = output.length;
        this.allocateBuffers(channelCount, parameters);

        if (isStopping(parameters) && !this.isStopping) {
          this.kernel.enterReleaseStage();
          this.isStopping = true;
        } // Envelope parameters


        this.kernel.setAmplitudeAttack(this.parameterBuffers.get("amplitudeAttack").getHeapAddress());
        this.kernel.setAmplitudeDecay(this.parameterBuffers.get("amplitudeDecay").getHeapAddress());
        this.kernel.setAmplitudeSustain(this.parameterBuffers.get("amplitudeSustain").getHeapAddress());
        this.kernel.setAmplitudeRelease(this.parameterBuffers.get("amplitudeRelease").getHeapAddress()); // First oscillator parameters

        this.kernel.setOsc1Mode(waveforms[kValueOf(parameters.osc1)]);
        this.kernel.setOsc1SemiShift(this.parameterBuffers.get("osc1SemiShift").getHeapAddress());
        this.kernel.setOsc1CentShift(this.parameterBuffers.get("osc1CentShift").getHeapAddress());
        this.kernel.setOsc1Cycle(this.parameterBuffers.get("osc1Cycle").getHeapAddress()); // Second oscillator parameters

        this.kernel.setOsc2Mode(waveforms[kValueOf(parameters.osc2)]);
        this.kernel.setOsc2SemiShift(this.parameterBuffers.get("osc2SemiShift").getHeapAddress());
        this.kernel.setOsc2CentShift(this.parameterBuffers.get("osc2CentShift").getHeapAddress());
        this.kernel.setOsc2Cycle(this.parameterBuffers.get("osc2Cycle").getHeapAddress());
        this.kernel.setOsc2Amplitude(this.parameterBuffers.get("osc2Amplitude").getHeapAddress());
        this.kernel.setNoiseLevel(this.parameterBuffers.get("noiseLevel").getHeapAddress()); // Filter parameters

        this.kernel.setFilterMode(FilterMode[kValueOf(parameters.filterMode)]);
        this.kernel.setCutoff(this.parameterBuffers.get("cutoff").getHeapAddress());
        this.kernel.setResonance(this.parameterBuffers.get("resonance").getHeapAddress()); // Filter cutoff modulation parameters

        this.kernel.setCutoffEnvelopeAmount(this.parameterBuffers.get("cutoffEnvelopeAmount").getHeapAddress());
        this.kernel.setCutoffEnvelopeAttack(this.parameterBuffers.get("cutoffAttack").getHeapAddress());
        this.kernel.setCutoffEnvelopeDecay(this.parameterBuffers.get("cutoffDecay").getHeapAddress()); // First LFO parameters

        this.kernel.setLfo1Destination(LfoDestination[kValueOf(parameters.lfo1Destination)]);
        this.kernel.setLfo1Mode(waveforms[kValueOf(parameters.lfo1Mode)]);
        this.kernel.setLfo1Frequency(this.parameterBuffers.get("lfo1Frequency").getHeapAddress());
        this.kernel.setLfo1ModAmount(this.parameterBuffers.get("lfo1ModAmount").getHeapAddress()); // Second LFO parameters

        this.kernel.setLfo2Destination(LfoDestination[kValueOf(parameters.lfo2Destination)]);
        this.kernel.setLfo2Mode(waveforms[kValueOf(parameters.lfo2Mode)]);
        this.kernel.setLfo2Frequency(this.parameterBuffers.get("lfo2Frequency").getHeapAddress());
        this.kernel.setLfo2ModAmount(this.parameterBuffers.get("lfo2ModAmount").getHeapAddress()); // Web Assembly computation

        this.kernel.process(this.outputBuffer.getHeapAddress(), channelCount, this.parameterBuffers.get("frequency").getHeapAddress()); // Web Audio rendering

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
          var values = name === "amplitudeRelease" ? adaptRelease(parameters) : parameters[name];
          buffer.getData().set(values);
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

})));
