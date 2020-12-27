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


  var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABioKAgAAmYAABf2ABfwF/YAJ/fwBgAX8AYAAAYAJ/fwF/YAJ/fQBgA39/fwF/YAR/f39/AGAFf39/f38AYAF/AX1gA39/fwBgBn9/f39/fwBgAX0BfWACf30BfWADf319AX9gBH99fX8BfWABfAF8YAJ/fQF/YAR/fX19AX1gAXwBfWACfHwBfGAIf39/f39/f38AYA1/f39/f39/f39/f39/AGADf399AGAEf39/fwF/YAV/f39/fwF/YAd/f399fX9/AX9gB399fX19fX0Bf2ACfX8Bf2ADf39/AX1gBX9/f39/AX1gA399fwF9YAN/fX0BfWADfX1/AX1gBH19f38BfWACfX8BfGACfH8BfAKFhICAABIDZW52Fl9lbWJpbmRfcmVnaXN0ZXJfY2xhc3MAFwNlbnYVX2VtYmluZF9yZWdpc3Rlcl9lbnVtAAgDZW52G19lbWJpbmRfcmVnaXN0ZXJfZW51bV92YWx1ZQALA2VudiJfZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NvbnN0cnVjdG9yAAwDZW52BHRpbWUAAQNlbnYfX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19mdW5jdGlvbgAWA2VudhVfZW1iaW5kX3JlZ2lzdGVyX3ZvaWQAAgNlbnYVX2VtYmluZF9yZWdpc3Rlcl9ib29sAAkDZW52G19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZwACA2VudhxfZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nAAsDZW52Fl9lbWJpbmRfcmVnaXN0ZXJfZW12YWwAAgNlbnYYX2VtYmluZF9yZWdpc3Rlcl9pbnRlZ2VyAAkDZW52Fl9lbWJpbmRfcmVnaXN0ZXJfZmxvYXQACwNlbnYcX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldwALA2VudgVhYm9ydAAEA2VudhZlbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwAAEDZW52FWVtc2NyaXB0ZW5fbWVtY3B5X2JpZwAHA2VudgZtZW1vcnkCAYAQgBADzYOAgADLAwQNIg0jBA8EBAQEBAQEBAQEBAQEAQQAAAAAAAAAAQAAAwUDCAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgECAwIDCwoDAgICAQMEAQUHAAQB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IgIkACACIAEpAgA3AwgQKSAAIAIQ6gEgAhDrARDsAUElIAJBCGoQ7gFBABAFIAJBEGokAAsNACAAQYQEaiABNgIACz0BAX8jAEEQayICJAAgAiABKQIANwMIECkgACACEPEBIAIQ8gEQ7AFBJiACQQhqEPQBQQAQBSACQRBqJAALDQAgAEGIBGogATYCAAsNACAAQYwEaiABNgIACxUAIABBJGogARBeIABB7ABqIAEQYAsNACAAQZQEaiABNgIACw0AIABBmARqIAE2AgALDQAgAEGcBGogATYCAAsNACAAQZAEaiABNgIACw0AIABBoARqIAE2AgALDQAgAEGkBGogATYCAAsNACAAQagEaiABNgIACw0AIABBrARqIAE2AgALDQAgAEGwBGogATYCAAsZACAAQYADahBhIgAgASAAKAIAKAIEEQIACz0BAX8jAEEQayICJAAgAiABKQIANwMIECkgACACEPYBIAIQ9wEQ7AFBJyACQQhqEPkBQQAQBSACQRBqJAALDQAgAEG0BGogATYCAAsNACAAQbgEaiABNgIACw0AIABBvARqIAE2AgALDQAgAEHABGogATYCAAsNACAAQcQEaiABNgIACw0AIABByARqIAE2AgALDQAgAEHMBGogATYCAAsMACAAQbgBaiABEF4LCgAgACABNgLcAQs9AQF/IwBBEGsiAiQAIAIgASkCADcDCBApIAAgAhD8ASACEP0BEOwBQSggAkEIahD/AUEAEAUgAkEQaiQACw0AIABB0ARqIAE2AgALDQAgAEHUBGogATYCAAsMACAAQeABaiABEF4LCgAgACABNgKEAgsLACAAKAL8A0EDRgs9AQF/IwBBEGsiAiQAIAIgASkCADcDCBApIAAgAhCCAiACEIMCEIQCQSkgAkEIahCGAkEAEAUgAkEQaiQACxIAIABBAjYC/AMgAEGIAmoQYgs9AQF/IwBBEGsiAiQAIAIgASkCADcDCBApIAAgAhCJAiACEIoCEIsCQSogAkEIahCNAkEAEAUgAkEQaiQACyUAAkAgACgC/AMNACAAQYgCahB3IABBhANqEHcgAEEBNgL8AwsLlQIBAX8gAEGABGogARB4IAIQeSAAEHogACAAQdwEaiICKgIAEHsgAEHsAGoiASACKgIAEHwgACAAQeAEaiICKgIAEH0gASACKgIAEH4g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orYLCwAgALsgAbcQoQMLBwAgABCdAwtiAQF9AkAgASACXUEBcw0AIAEgApUiASABkiABIAGUk0MAAIC/kg8LQwAAAAAhAwJAQwAAgD8gApMgAV1BAXMNACABQwAAgL+SIAKVIgEgASABIAGUkpJDAACAP5IhAwsgAwsMABCcA7JDAAAAMJQLCQAgACABOAJICy4AIAAgAUMAAAA/lCIBEI0BQwAAgD8gACoCSJOUIABBJGogARCNASAAKgJIlJILBwAgABCqAQsEACAACwUAQeANCw4AIABBgANqELABGiAACwUAQeANCwUAQfwNCwUAQaAOCwsAIABBABCxASAACyoBAX8gABCyASgCACECIAAQsgEgATYCAAJAIAJFDQAgABCzASACELQBCwsHACAAELUBCwcAIAAQtgELDwACQCABRQ0AIAEQqQMLCwQAIAALBAAgAAsEACAAC4cCAQN/IwBBEGsiAyQAIAAgARDBARogAEEkaiABEMEBGiAAQcgAaiABEMEBIQQgAEHsAGogARDCARogAEG4AWogARDBARogAEHgAWogARDBARogAEGIAmogAUMAAIA/QwAAAABDAAAAP0MAAAA/Q2ZmZj8QwwEaIANBCGoQxAEgAEGAA2ogA0EIahDFARogA0EIahDGARogAEGEA2ogAUMAAIA/QwAAAABDCtcjPEMAAABAQwAAAAAQwwEaAkACQCACQwAAgE9dIAJDAAAAAGBxRQ0AIAKpIQUMAQtBACEFCyAAIAU2ArgFIAAgATgCtAUgAEEANgL8AyAEQQQQXiADQRBqJAAgAAsEAEEDCwUAEL8BCwUAQcQOCz4BAX8jAEEQayIDJAAgAyABEL0BOAIMIAMgAhC9ATgCCCADQQxqIANBCGogABEFABC+ASEAIANBEGokACAACwcAIAAQwAELBAAgAAsFAEG4DgsEACAACzwAIABCADcCBCAAIAE4AiAgAEKAgID4g4CAgD83AhggAEEUakEANgIAIABBDGpCADcCAEEAEAQQmwMgAAsXACAAIAEQwQEaIABBJGogARDBARogAAvYAQECfyAAQQA2AgggACABOAIAIABBDGohBwJAAkAgASAElCIEi0MAAABPXUUNACAEqCEIDAELQYCAgIB4IQgLIAdBASAIQwAAAAAgAkEBQQIQxwEaIABBMGohBwJAAkAgASAFlCIFi0MAAABPXUUNACAFqCEIDAELQYCAgIB4IQgLIAdBASAIIAIgA0ECQQMQxwEaIABB1ABqIQcCQAJAIAEgBpQiAYtDAAAAT11FDQAgAaghCAwBC0GAgICAeCEICyAHQQEgCCADQwAAAABBBEEFEMcBGiAACxAAIABBGBCoAxDIARDJARoLMwEBfyMAQRBrIgIkACACIAEQygE2AgwgACACQQxqIAEQywEQzAEQzQEaIAJBEGokACAACwsAIABBABDOASAAC0YAIABBADYCDCAAIAI2AgggACAEOAIEIAAgAzgCACADIAQgAhATIQMgACAGNgIgIAAgBTYCHCAAIAE2AhggACADOAIUIAALCQAgAEEAEM8BCy0BAX8jAEEQayICJAAgAiABNgIMIAAgAkEMaiACQQhqENABGiACQRBqJAAgAAsaAQF/IAAQ2AEoAgAhASAAENgBQQA2AgAgAQsHACAAENkBCwQAIAALGgAgACABENoBENsBGiAAIAIQzAEQ3AEaIAALKgEBfyAAENgBKAIAIQIgABDYASABNgIAAkAgAkUNACAAENkBIAIQ4AELCyoAIAAQ0QEaIABCADcCCCAAIAE2AgQgAEHUDjYCACAAQRBqQgA3AgAgAAsbACAAIAEQ1AEQ1QEaIAIQ1gEaIAAQ1wEaIAALCwAgAEEANgIAIAALswECA30BfCAAIAAqAggiBCABIASTIAQgACoCDCIFkyADuyIHRAAAAAAAAPA/IAK7oaMgB6C2lJIgApSSIgQ4AgggACAFIAQgBZMgApSSIgU4AgwgACAAKgIQIgMgBSADkyAClJIiAzgCECAAIAAqAhQiBiADIAaTIAKUkiICOAIUAkACQAJAAkACQCAAKAIEDgQABAECAwsgBQ8LIAEgApMPCyAEIAKTDwtDAAAAACECCyACCwkAIAAgATYCBAsEACAACxEAIAAgARDUASgCADYCACAACwQAIAALBAAgAAsHACAAEN0BCwcAIAAQ3gELBAAgAAsRACAAIAEQ2gEoAgA2AgAgAAsRACAAIAEQzAFBABDfARogAAsEACAACwQAIAALBAAgAAsPAAJAIAFFDQAgARCpAwsLBABBBQsFABDpAQsFAEGkDwtLAQF/IAEQ5gEgACgCBCIFQQF1aiEBIAAoAgAhAAJAIAVBAXFFDQAgASgCACAAaigCACEA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IAE2AhAgAyABNgIMIAJBcGogATYCACACQWxqIAE2AgAgAkFoaiABNgIAIAJBZGogATYCACAEIANBBHFBGHIiBWsiAkEgSQ0AIAGtIgZCIIYgBoQhBiADIAVqIQEDQCABIAY3AxggASAGNwMQIAEgBjcDCCABIAY3AwAgAUEgaiEBIAJBYGoiAkEfSw0ACwsgAAubAQEDfyAAIQECQAJAIABBA3FFDQACQCAALQAADQAgACAAaw8LIAAhAQNAIAFBAWoiAUEDcUUNASABLQAARQ0CDAALAAsDQCABIgJBBGohASACKAIAIgNBf3MgA0H//ft3anFBgIGChHhxRQ0ACwJAIANB/wFxDQAgAiAAaw8LA0AgAi0AASEDIAJBAWoiASECIAMNAAsLIAEgAGsLBAAjAAsGACAAJAALEgECfyMAIABrQXBxIgEkACABCwuxuYCAAAMAQYAIC6g0Vm9pY2VLZXJuZWwAcHJvY2VzcwBzZXRPc2MxTW9kZQBzZXRPc2MxU2VtaVNoaWZ0AHNldE9zYzFDZW50U2hpZnQAc2V0T3NjMUN5Y2xlAHNldE9zYzJNb2RlAHNldE9zYzJTZW1pU2hpZnQAc2V0T3NjMkNlbnRTaGlmdABzZXRPc2MyQ3ljbGUAc2V0T3NjMkFtcGxpdHVkZQBzZXROb2lzZUxldmVsAHNldEFtcGxpdHVkZUF0dGFjawBzZXRBbXBsaXR1ZGVEZWNheQBzZXRBbXBsaXR1ZGVTdXN0YWluAHNldEFtcGxpdHVkZVJlbGVhc2UAc2V0RmlsdGVyTW9kZQBzZXRDdXRvZmYAc2V0UmVzb25hbmNlAHNldEN1dG9mZkVudmVsb3BlQW1vdW50AHNldEN1dG9mZkVudmVsb3BlQXR0YWNrAHNldEN1dG9mZkVudmVsb3BlRGVjYXkAc2V0TGZvMUZyZXF1ZW5jeQBzZXRMZm8xTW9kQW1vdW50AHNldExmbzFNb2RlAHNldExmbzFEZXN0aW5hdGlvbgBzZXRMZm8yRnJlcXVlbmN5AHNldExmbzJNb2RBbW91bnQAc2V0TGZvMk1vZGUAc2V0TGZvMkRlc3RpbmF0aW9uAGlzU3RvcHBlZABlbnRlclJlbGVhc2VTdGFnZQBXYXZlRm9ybQBTSU5FAFNBVwBTUVVBUkUAVFJJQU5HTEUARmlsdGVyTW9kZQBMT1dQQVNTAExPV1BBU1NfUExVUwBCQU5EUEFTUwBISUdIUEFTUwBWb2ljZVN0YXRlAERJU1BPU0VEAFNUQVJURUQAU1RPUFBJTkcAU1RPUFBFRABMZm9EZXN0aW5hdGlvbgBGUkVRVUVOQ1kAT1NDSUxMQVRPUl9NSVgAQ1VUT0ZGAFJFU09OQU5DRQBPU0MxX0NZQ0xFAE9TQzJfQ1lDTEUATjVWb2ljZTZLZXJuZWxFADQdAADQBgAAUE41Vm9pY2U2S2VybmVsRQAAAAAUHgAA6AYAAAAAAADgBgAAUEtONVZvaWNlNktlcm5lbEUAAAAUHgAADAcAAAEAAADgBgAAaWkAdgB2aQD8BgAAzBwAAMwcAABpaWZmAAAAAAAAAAB4BwAAKwAAACwAAABONkZpbHRlcjE0UmVzb25hbnRLZXJuZWxFAAAAXB0AAFwHAAAAAAAAAAAAAAAAAAAAAAAAPBwAAPwGAADAHAAAqBwAAMAcAAB2aWlpaWkAADwcAAD8BgAAzAcAAE4xME9zY2lsbGF0b3I0TW9kZUUA6BwAALgHAAB2aWlpAAAAADwcAAD8BgAAwBwAADwcAAD8BgAABAgAAE42RmlsdGVyNE1vZGVFAADoHAAA9AcAADwcAAD8BgAANAgAAE41Vm9pY2UxNExmb0Rlc3RpbmF0aW9uRQAAAADoHAAAGAgAAFQcAAD8BgAAaWlpADwcAAD8BgAAdmlpAE41Vm9pY2U1U3RhdGVFAADoHAAAVAgAAHZvaWQAYm9vbABjaGFyAHNpZ25lZCBjaGFyAHVuc2lnbmVkIGNoYXIAc2hvcnQAdW5zaWduZWQgc2hvcnQAaW50AHVuc2lnbmVkIGludABsb25nAHVuc2lnbmVkIGxvbmcAZmxvYXQAZG91YmxlAHN0ZDo6c3RyaW5nAHN0ZDo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXI+AHN0ZDo6d3N0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBlbXNjcmlwdGVuOjp2YWwAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8Y2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxmbG9hdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQBOU3QzX18yMjFfX2Jhc2ljX3N0cmluZ19jb21tb25JTGIxRUVFAAA0HQAAwQsAALgdAACCCwAAAAAAAAEAAADoCwAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAAC4HQAACAwAAAAAAAABAAAA6AsAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAAuB0AAGAMAAAAAAAAAQAAAOgLAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURzTlNfMTFjaGFyX3RyYWl0c0lEc0VFTlNfOWFsbG9jYXRvcklEc0VFRUUAAAC4HQAAuAwAAAAAAAABAAAA6AsAAAAAAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRGlOU18x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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=';

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
