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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n  constructor() {\n    let currentTime = new Date ();\n\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    setInterval(this._tick.bind(this), 1000);\n    \n  }\n\n  printTime(clockElement) {\n    let currentTime = [this.hours, this.minutes, this.seconds].join(\":\");\n    currentTime = currentTime.split(\":\").map((el) => {\n      if (el.length === 1) {\n        return \"0\" + el;\n      }\n      return el; \n    });\n\n    currentTime = currentTime.join(\":\");\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(currentTime, clockElement);\n  }\n\n  _tick() {\n    this.seconds++;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this.minutes++;\n    }\n\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this.hours++;\n    }\n\n    if (this.hours === 24) {\n      this.hours = 0;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: attachDogLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachDogLinks\", function() { return attachDogLinks; });\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\nfunction dogLinkCreator() {\n  let names = Object.keys(dogs);\n  const dogLinkArr = [];\n  names.forEach((name) => {\n    let aTag = document.createElement('a');\n    aTag.innerHTML = name;\n    aTag.setAttribute(\"href\", dogs[name]);\n    let liTag = document.createElement('li');\n    liTag.classList.add('dog-link');\n    liTag.append(aTag);\n    dogLinkArr.push(liTag);\n  });\n\n  return dogLinkArr;\n}\n\nconst attachDogLinks = function() {\n  let dogLinks = dogLinkCreator();\n  let ulTag = document.querySelector('.drop-down-dog-list');\n  ulTag.style.display = 'none';\n  dogLinks.forEach((li) => {\n    ulTag.append(li);\n  });\n};\n\nattachDogLinks();\n\nlet dogLinkLi = document.querySelectorAll(\".drop-down-dog-list\");\nlet dogLinkNav = document.querySelector(\".drop-down-dog-nav\")\n\nfunction handleEnter() {\n  dogLinkLi.forEach((el) => {\n    el.style.display = 'block';\n  });\n}\n\nfunction handleLeave() {\n  dogLinkLi.forEach((el) => {\n    el.style.display = 'none';\n  });\n}\n\ndogLinkNav.addEventListener(\"mouseenter\", handleEnter);\n\ndogLinkNav.addEventListener(\"mouseleave\", handleLeave);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nlet clock = new _clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); \nlet clockElement = document.getElementById('clock');\nsetInterval( () => {\n  \n  clock.printTime(clockElement);\n}, 1000);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n    \n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nlet imgTag = document.getElementsByTagName('img');\nimgTag = Array.from(imgTag);\n\n// imgTag.forEach(img => {\n//   img.addEventListener(\"scroll\", () => {\n//     console.log('lol');\n//   });\n// });\n\nwindow.addEventListener('scroll', (e)=> {\n  let y = e.currentTarget.scrollY + 500;\n  debounce(() => {\n    imgTag.forEach(img => {\n      console.log(y);\n      console.log(img.offsetTop);\n      if (Math.abs(y - img.offsetTop) < 500) {\n        img.classList.add('active');\n      } else {\n        img.classList.remove('active');\n      }\n    });\n  })();\n});\n\n// let imgDiv = document.querySelector(\".slide-and-scroll\");\n// imgDiv.addEventListener(\"scroll\", () => {\n//   console.log('test');\n// })\n\n\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let todos = [];\nlet toDoUl = document.querySelector('.todos');\nlet toDoForm = document.querySelector('.add-todo-form');\n\nlet i = 1; \nwhile (localStorage.getItem(`value${i}`)) {\n  let value = localStorage.getItem(`value${i}`);\n  let done = localStorage.getItem(`done${i}`);\n  todos.push({value:value, done: done});\n  i++;\n}\n// console.log(todos);\n\nfunction addCheck(e) {\n  todos[parseInt(e.target.getAttribute('data'))].done = e.target.checked;\n  saveToDo();\n}\n\n\nfunction addToDo() {\n  let input = document.getElementsByName('add-todo')[0];\n  let todo = {value:input.value, done: false};\n  todos.push(todo);\n  \n  saveToDo();\n  \n  input.value = \"\";\n  populateList(todos);\n}\n\nfunction saveToDo() {\n  todos.forEach((el, idx) => {\n    localStorage.setItem(`value${idx}`, el.value);\n    localStorage.setItem(`done${idx}`, el.done);\n  });\n}\n\nfunction populateList(todos) {\n  todos.forEach((el, idx) => {\n    let label = document.createElement('label');\n    let checkbox = document.createElement('input');\n    checkbox.setAttribute('type', 'checkbox');\n    label.innerHTML = el.value;\n    let li = document.querySelector('.todos li');\n    checkbox.setAttribute('data', idx);\n    checkbox.checked = el.done;\n    li.append(checkbox);\n    li.append(label);\n  });\n  \n}\n\n\npopulateList(todos);\nlet checkboxes = document.querySelectorAll(\".todos li input\");\ntoDoForm.addEventListener(\"submit\", addToDo);\n\ncheckboxes.forEach(el => {\n  el.addEventListener(\"change\", (e) => {\n    addCheck(e);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let pTag = document.createElement('p');\n  while (htmlElement.firstChild) {\n    htmlElement.removeChild(htmlElement.firstChild);\n  }\n  pTag.innerHTML += string;\n  htmlElement.append(pTag);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });