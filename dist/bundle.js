/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_clear_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/clear.scss */ \"./scss/clear.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/index.scss */ \"./scss/index.scss\");\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/header.scss */ \"./scss/header.scss\");\n/* harmony import */ var _scss_hero_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/hero.scss */ \"./scss/hero.scss\");\n/* harmony import */ var _scss_introduction_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/introduction.scss */ \"./scss/introduction.scss\");\n/* harmony import */ var _scss_benefits_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/benefits.scss */ \"./scss/benefits.scss\");\n/* harmony import */ var _scss_opportunities_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/opportunities.scss */ \"./scss/opportunities.scss\");\n/* harmony import */ var _scss_tools_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/tools.scss */ \"./scss/tools.scss\");\n/* harmony import */ var _scss_evolve_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/evolve.scss */ \"./scss/evolve.scss\");\n/* harmony import */ var _scss_prose_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/prose.scss */ \"./scss/prose.scss\");\n/* harmony import */ var _scss_users_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scss/users.scss */ \"./scss/users.scss\");\n/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scss/footer.scss */ \"./scss/footer.scss\");\n/* harmony import */ var _scss_toTop_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scss/toTop.scss */ \"./scss/toTop.scss\");\n/* harmony import */ var _utils_getDateInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/getDateInfo */ \"./js/utils/getDateInfo.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log((0,_utils_getDateInfo__WEBPACK_IMPORTED_MODULE_13__.getDateInfo)(\"01.01.2022\"));\n\n// You can find function getDateInfo in directory utils :)\n\ndocument.querySelector(\".toTop\").addEventListener(\"click\", () => {\n    window.scrollTo({ top: 0, behavior: \"smooth\" });\n});\n\nconst headerObserver = new IntersectionObserver(([entry]) => {\n    const header = document.querySelector(\".header\");\n    const logoItem = document.querySelector(\".logoItem\");\n    if (!entry.isIntersecting) {\n        header.classList.add(\"light\");\n        logoItem.classList.add(\"visible\");\n    }\n    if (entry.isIntersecting) {\n        header.classList.remove(\"light\");\n        logoItem.classList.remove(\"visible\");\n    }\n});\n\nheaderObserver.observe(document.querySelector(\".hero\"));\n\nconst burger = document.querySelector(\".header__burger\");\nconst popup = document.querySelector(\".header__popup\");\nburger.addEventListener(\"click\", () => {\n    burger.classList.toggle(\"opened\");\n    burger.classList.toggle(\"closed\");\n    popup.classList.toggle(\"opened\");\n    popup.classList.toggle(\"closed\");\n    if (document.body.style.overflow === \"hidden\") {\n        document.body.style.overflow = \"auto\";\n    } else {\n        document.body.style.overflow = \"hidden\";\n    }\n});\n\npopup.addEventListener(\"click\", (event) => {\n    if (event.target !== document.querySelector(\".header__search_input\")) {\n        burger.classList.toggle(\"opened\");\n        burger.classList.toggle(\"closed\");\n        popup.classList.toggle(\"opened\");\n        popup.classList.toggle(\"closed\");\n        if (document.body.style.overflow === \"hidden\") {\n            document.body.style.overflow = \"auto\";\n        } else {\n            document.body.style.overflow = \"hidden\";\n        }\n    }\n});\n\n\n//# sourceURL=webpack://y/./js/index.js?");

/***/ }),

/***/ "./js/utils/getDateInfo.js":
/*!*********************************!*\
  !*** ./js/utils/getDateInfo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDateInfo\": () => (/* binding */ getDateInfo)\n/* harmony export */ });\nconst getDateInfo = (date) => {\n    const splitedDate = date.split(\".\");\n    const newDate = new Date(\n        Date.parse(`${splitedDate[1]}.${splitedDate[0]}.${splitedDate[2]}`)\n    );\n\n    const year = newDate.toLocaleString(\"ru\", { year: \"numeric\" });\n\n    const month =\n        \"Января,Февраля,Марта,Апреля,Мая,Июня,Июля,Августа,Сентября,Октября,Ноября,Декабря\".split(\n            \",\"\n        )[newDate.getMonth()];\n\n    const weekday = newDate.toLocaleString(\"ru\", { weekday: \"long\" });\n\n    const numberOfWeeks = newDate.getDate();\n\n    return `${weekday[0].toUpperCase() + weekday.slice(1)}, ${Math.ceil(numberOfWeeks / 7)} неделя ${month} ${year} года`;\n};\n\n\n//# sourceURL=webpack://y/./js/utils/getDateInfo.js?");

/***/ }),

/***/ "./scss/benefits.scss":
/*!****************************!*\
  !*** ./scss/benefits.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/benefits.scss?");

/***/ }),

/***/ "./scss/clear.scss":
/*!*************************!*\
  !*** ./scss/clear.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/clear.scss?");

/***/ }),

/***/ "./scss/evolve.scss":
/*!**************************!*\
  !*** ./scss/evolve.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/evolve.scss?");

/***/ }),

/***/ "./scss/footer.scss":
/*!**************************!*\
  !*** ./scss/footer.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/footer.scss?");

/***/ }),

/***/ "./scss/header.scss":
/*!**************************!*\
  !*** ./scss/header.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/header.scss?");

/***/ }),

/***/ "./scss/hero.scss":
/*!************************!*\
  !*** ./scss/hero.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/hero.scss?");

/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/index.scss?");

/***/ }),

/***/ "./scss/introduction.scss":
/*!********************************!*\
  !*** ./scss/introduction.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/introduction.scss?");

/***/ }),

/***/ "./scss/opportunities.scss":
/*!*********************************!*\
  !*** ./scss/opportunities.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/opportunities.scss?");

/***/ }),

/***/ "./scss/prose.scss":
/*!*************************!*\
  !*** ./scss/prose.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/prose.scss?");

/***/ }),

/***/ "./scss/toTop.scss":
/*!*************************!*\
  !*** ./scss/toTop.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/toTop.scss?");

/***/ }),

/***/ "./scss/tools.scss":
/*!*************************!*\
  !*** ./scss/tools.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/tools.scss?");

/***/ }),

/***/ "./scss/users.scss":
/*!*************************!*\
  !*** ./scss/users.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://y/./scss/users.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;