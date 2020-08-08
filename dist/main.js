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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/modules/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/modules/main.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\nconst navbar = () => {\r\n\tconst menu = document.getElementById('myMenu');\r\n\tmenu.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\tconst contact = document.getElementById('contact');\r\n\tcontact.addEventListener('click',_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n}\r\nfunction init() {\r\n\tObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tnavbar();\r\n}\r\ninit();\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createContact = (e) => {\r\n  e.preventDefault();\r\n  const h2 = document.createElement('h2');\r\n  h2.textContent = 'Have a question or want to learn more? Contact us!';\r\n  let p = document.createElement('p');\r\n  p.textContent = 'Email: sweetnofood@gmail.com';\r\n  p.className = 'fs-20';\r\n  h2.className = 'fs-20';\r\n  p.classList.add('mgl');\r\n  p.classList.add('mgt');\r\n  h2.classList.add('mgl');\r\n  h2.classList.add('mgt');\r\n  const content = document.querySelector('main');\r\n  content.innerHTML = ''\r\n  const div = document.createElement('div');\r\n  div.classList.add('main-para');\r\n  div.appendChild(h2);\r\n  div.appendChild(p);\r\n  div.appendChild(p);\r\n  content.appendChild(div);\r\n  return content;\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createContact);\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createHeader = () => {\r\n  const header = document.createElement('header');\r\n  header.innerHTML = `<div class=\"logo\"><img src=\"../src/images/logo.PNG\" alt=\"logo\" width=\"60\" height=\"40\"></div>\r\n  <input type=\"checkbox\" id=\"nav-toggle\" class=\"nav-toggle\">\r\n  <nav>\r\n    <ul>\r\n    <li><a href=\"\" class=\"fs-20\">Home</a></li>\r\n    <li><a href=\"#\" class=\"fs-20\" id=\"myMenu\" >Menu</a></li>\r\n    <li><a href=\"#\" class=\"fs-20\" id=\"contact\">Contact Us</a></li>\r\n    </ul>\r\n  </nav>\r\n  <label for=\"nav-toggle\" class=\"nav-toggle-label\" id=\"navtoggle\">\r\n    <span>\r\n      <i class=\"fas fa-bars fs-20\"></i>\r\n    </span>\r\n  </label>`\r\n  return header;\r\n}\r\nconst createFooter = () => {\r\n  const footer = document.createElement('footer');\r\n  footer.innerHTML = `<div class=\"foot\">\r\n                        <div class=\"row jc-center\">\r\n                          <div class=\"c-l-12 fs-20\">\r\n                              ©2020 Delicious Restaurant. All rights reserved.\r\n                          </div>\r\n                        </div>\r\n                      </div>`;\r\n                      return footer;\r\n}\r\nconst createHomepage = () => {\r\n  const main = document.createElement('main');\r\n  const sect = document.createElement('section');\r\n  const article = document.createElement('article');\r\n  main.appendChild(sect);\r\n  sect.appendChild(article);\r\n  const mainPage = document.createElement('div');\r\n  mainPage.className = 'mainpage';\r\n  article.appendChild(mainPage);\r\n  const h2 = document.createElement('h2');\r\n  h2.className = 'family-Arial  white main-para';\r\n  h2.textContent = 'Tiresome and hungry just give us a call and wait for a while we’ll be there at your door.';\r\n  mainPage.appendChild(h2);\r\n  return main;\r\n}\r\nconst loadMainPage = () => {\r\n  const content = document.getElementById('content');\r\n\tconst header = createHeader();\r\n  content.appendChild(header);\r\n  const main = createHomepage();\r\n  content.appendChild(main);\r\n  const footer = createFooter();\r\n  content.appendChild(footer);\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadMainPage);\r\n\n\n//# sourceURL=webpack:///./src/modules/main.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createMenu = () => {\r\n  const row = document.createElement('div');\r\n  row.classList.add('row');\r\n  row.innerHTML = `<div class=\" c-l-4 c-m-4 c-s-12 c-12 \">\r\n                    <h3><a href=\"#\" class=\" maroon fs-20\">Breakfast</a></h3>\r\n                    <img class=\"imagestyle\"   src=\"https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/115956675_2684358875213617_6003907689016524595_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=101&_nc_ohc=vZGTvoAawH4AX9rkGpU&oh=84b726fb950a17c7ed8381bb228a8ba0&oe=5F48BAC0\" style=\"width:90%;\" alt=\"image\">\r\n                  </div>\r\n                  <div class=\" c-l-4 c-m-4 c-s-12 c-12 \">\r\n                    <h3><a href=\"#\" class=\" maroon fs-20\">Luch</a></h3>\r\n                    <img class=\"imagestyle\"  src=\"https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/116337328_295301585046368_8067738148308813203_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=CAj0aj5HMTcAX8zeWFp&oh=64acb5492d72817129c9635265f931cd&oe=5F484228\" style=\"width:90%;\" alt=\"image\">\r\n                  </div>\r\n                  <div class=\" c-l-4 c-m-4 c-s-12 c-12 \">\r\n                    <h3><a href=\"#\" class=\" maroon fs-20\">Dinner</a></h3>\r\n                    <img class=\"imagestyle\" src=\"https://scontent-xsp1-2.cdninstagram.com/v/t51.2885-15/e35/109696460_741304829979989_7568604957456882165_n.jpg?_nc_ht=scontent-xsp1-2.cdninstagram.com&_nc_cat=105&_nc_ohc=ZDdrcDwBq4wAX9ckQjH&oh=8e836ac9411e3b296911a3304ea2db44&oe=5F492C40\" style=\"width:90%;\" alt=\"image\">\r\n                  </div> `\r\n                   const content = document.querySelector('main');\r\n                   content.innerHTML = '';\r\n   content.appendChild(row);\r\n   row.style.marginTop = '2rem';\r\n   return content;\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createMenu);\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ })

/******/ });