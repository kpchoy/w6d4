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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(HTMLelements) {\n    this.HTMLelements = HTMLelements;\n  }\n  \n  html(string = null) {\n    if (string === null) {\n      return this.HTMLelement[0].innerHTML;\n    } else {\n      for (var i = 0; i < this.HTMLelements.length; i++) {\n        this.HTMLelements[i].innerHTML = string;\n      }\n    }\n  }\n  \n  empty() {\n    this.html(\"\");\n  }\n  \n  append(arg) {\n    if (typeof arg === \"string\") {\n      for (let i = 0; i < this.HTMLelements.length; i++) {\n        this.HTMLelements[i].innerHTML += arg;  \n      }\n    } else if (arg instanceof HTMLElement) {\n      for (let i = 0; i < this.HTMLelements.length; i++) {\n        this.HTMLelements[i].innerHTML += arg.outerHTML;  \n      }\n    } else if (arg.constructor.name === \"DOMNodeCollection\") {\n      for (let i = 0; i < this.HTMLelements.length; i++) {\n        for (let j = 0; j < arg.HTMLelements.length; j++) {\n          this.HTMLelements[i].innerHTML += arg.HTMLelements[j].outerHTML;\n        }\n      }\n    }\n  }\n  \n  attr(key, val) {\n    if (typeof val === \"string\") {\n      this.HTMLelements.forEach(node => node.setAttribute(key, val));\n    } else {\n      return this.HTMLelements[0].getAttribute(key);\n    }\n  }\n  \n  addClass() {\n    \n  }\n  \n  removeClass() {\n    \n  }\n  \n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./lib/dom_node_collection.js\");\n\n\nwindow.$l = (arg) => {\n  if (typeof arg === \"string\") {\n    return nodefinder(arg);\n  } else if (arg instanceof HTMLElement) {\n    return new DOMNodeCollection([arg]);\n  }\n\n};\n\nfunction nodefinder(selector) {\n  let nodesArray = Array.from(document.querySelectorAll(selector));\n  return new DOMNodeCollection(nodesArray);\n} \n\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });