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

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoCheckbox\": () => (/* binding */ autoCheckbox),\n/* harmony export */   \"automat\": () => (/* binding */ automat),\n/* harmony export */   \"ctrlPressed\": () => (/* binding */ ctrlPressed),\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"mapItems\": () => (/* binding */ mapItems),\n/* harmony export */   \"selectedImgItem\": () => (/* binding */ selectedImgItem),\n/* harmony export */   \"selectedItems\": () => (/* binding */ selectedItems),\n/* harmony export */   \"selectionDiv\": () => (/* binding */ selectionDiv),\n/* harmony export */   \"selectionEnd\": () => (/* binding */ selectionEnd),\n/* harmony export */   \"selectionStart\": () => (/* binding */ selectionStart),\n/* harmony export */   \"setAutomat\": () => (/* binding */ setAutomat),\n/* harmony export */   \"setCtrlPressed\": () => (/* binding */ setCtrlPressed),\n/* harmony export */   \"setSelectedImgItem\": () => (/* binding */ setSelectedImgItem),\n/* harmony export */   \"setSelectedItems\": () => (/* binding */ setSelectedItems),\n/* harmony export */   \"setSelectionEnd\": () => (/* binding */ setSelectionEnd),\n/* harmony export */   \"setSelectionStart\": () => (/* binding */ setSelectionStart),\n/* harmony export */   \"updateSelection\": () => (/* binding */ updateSelection)\n/* harmony export */ });\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ \"./src/items.ts\");\n\nvar map = document.getElementById(\"map\");\nvar items = document.getElementById(\"items\");\nvar autoCheckbox = document.getElementById(\"automat\");\nvar selectionDiv = document.getElementById(\"selection\");\nvar mapItems = [];\nvar selectedItems = [];\nvar selectedImgItem = new _items__WEBPACK_IMPORTED_MODULE_0__.ImgItem();\nvar automat = autoCheckbox.checked;\nvar ctrlPressed = false;\nvar selectionStart = null;\nvar selectionEnd = null;\nfunction setCtrlPressed(b) {\n    ctrlPressed = b;\n}\nfunction setAutomat(b) {\n    automat = b;\n}\nfunction setSelectedItems(a) {\n    selectedItems = a;\n}\nfunction setSelectedImgItem(i) {\n    selectedImgItem = i;\n}\nfunction setSelectionStart(i) {\n    selectionStart = i;\n}\nfunction setSelectionEnd(i) {\n    selectionEnd = i;\n}\nfunction updateSelection() {\n    mapItems.forEach(function (e) {\n        for (var i = 0; i < 30; i++) {\n            e[i].canvas.style.borderColor = \"white\";\n        }\n    });\n    selectedItems.forEach(function (e) {\n        e.canvas.style.borderColor = \"red\";\n    });\n}\n\n\n\n//# sourceURL=webpack://pacman/./src/global.ts?");

/***/ }),

/***/ "./src/items.ts":
/*!**********************!*\
  !*** ./src/items.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImgItem\": () => (/* binding */ ImgItem),\n/* harmony export */   \"MapItem\": () => (/* binding */ MapItem)\n/* harmony export */ });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n\nvar MapItem = /** @class */ (function () {\n    function MapItem(x, y) {\n        var _this = this;\n        this.x = x;\n        this.y = y;\n        this.canvas = document.createElement(\"canvas\");\n        this.canvas.width = 25;\n        this.canvas.height = 25;\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.addEventListener(\"mousedown\", function (e) { return _this.click(_this.canvas, e); });\n        this.canvas.addEventListener(\"mouseup\", function () { return _this.unClick(_this.canvas); });\n    }\n    MapItem.prototype.click = function (canvas, e) {\n        var _this = this;\n        console.log(_global__WEBPACK_IMPORTED_MODULE_0__.selectedItems, e.button);\n        if (e.button == 2) {\n            return;\n        }\n        (0,_global__WEBPACK_IMPORTED_MODULE_0__.setSelectionStart)(this);\n        (0,_global__WEBPACK_IMPORTED_MODULE_0__.setSelectionEnd)(null);\n        if (!_global__WEBPACK_IMPORTED_MODULE_0__.ctrlPressed) {\n            (0,_global__WEBPACK_IMPORTED_MODULE_0__.setSelectedItems)([this]);\n        }\n        else {\n            if (this.canvas.style.borderColor == \"red\") {\n                var temp = _global__WEBPACK_IMPORTED_MODULE_0__.selectedItems.filter(function (obj) {\n                    return obj !== _this;\n                });\n                (0,_global__WEBPACK_IMPORTED_MODULE_0__.setSelectedItems)(temp);\n            }\n            else {\n                _global__WEBPACK_IMPORTED_MODULE_0__.selectedItems.push(this);\n            }\n        }\n        console.log(this.x, this.y, _global__WEBPACK_IMPORTED_MODULE_0__.ctrlPressed);\n        (0,_global__WEBPACK_IMPORTED_MODULE_0__.updateSelection)();\n    };\n    MapItem.prototype.unClick = function (canvas) {\n        console.log(\"unclick\");\n        _global__WEBPACK_IMPORTED_MODULE_0__.selectedItems.push(this);\n        (0,_global__WEBPACK_IMPORTED_MODULE_0__.setSelectionEnd)(this);\n        (0,_global__WEBPACK_IMPORTED_MODULE_0__.updateSelection)();\n    };\n    MapItem.prototype.setBgImage = function (img) {\n        this.context.putImageData(img, 0, 0);\n    };\n    return MapItem;\n}());\n\nvar img = new Image();\nimg.src = \"./sprites.png\";\nimg.crossOrigin = \"Anonymous\";\nvar ImgItem = /** @class */ (function () {\n    function ImgItem() {\n        var _this = this;\n        this.canvas = document.createElement(\"canvas\");\n        this.canvas.width = 25;\n        this.canvas.height = 25;\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.addEventListener(\"click\", function () { return _this.click(); });\n    }\n    ImgItem.prototype.draw = function (i, j) {\n        this.context.drawImage(img, 1 + 48 * j, 1 + 48 * i, 47, 47, 0, 0, 25, 25);\n    };\n    ImgItem.prototype.click = function () {\n        var _this = this;\n        (0,_global__WEBPACK_IMPORTED_MODULE_0__.setSelectedImgItem)(this);\n        _global__WEBPACK_IMPORTED_MODULE_0__.selectedItems.forEach(function (e) {\n            e.setBgImage(_this.context.getImageData(0, 0, 25, 25));\n        });\n        if (_global__WEBPACK_IMPORTED_MODULE_0__.automat) {\n            console.log(_global__WEBPACK_IMPORTED_MODULE_0__.automat);\n            var x = _global__WEBPACK_IMPORTED_MODULE_0__.selectedItems[_global__WEBPACK_IMPORTED_MODULE_0__.selectedItems.length - 1].x;\n            var y = _global__WEBPACK_IMPORTED_MODULE_0__.selectedItems[_global__WEBPACK_IMPORTED_MODULE_0__.selectedItems.length - 1].y;\n            var selected = void 0;\n            if (y == 29) {\n                selected = _global__WEBPACK_IMPORTED_MODULE_0__.mapItems[x + 1][0];\n            }\n            else {\n                selected = _global__WEBPACK_IMPORTED_MODULE_0__.mapItems[x][y + 1];\n            }\n            (0,_global__WEBPACK_IMPORTED_MODULE_0__.setSelectedItems)([selected]);\n        }\n        else {\n            (0,_global__WEBPACK_IMPORTED_MODULE_0__.setSelectedItems)([]);\n        }\n        (0,_global__WEBPACK_IMPORTED_MODULE_0__.updateSelection)();\n    };\n    return ImgItem;\n}());\n\n\n\n//# sourceURL=webpack://pacman/./src/items.ts?");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ \"./src/start.ts\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n\n\n_global__WEBPACK_IMPORTED_MODULE_1__.autoCheckbox.onchange = function () {\n    (0,_global__WEBPACK_IMPORTED_MODULE_1__.setAutomat)(_global__WEBPACK_IMPORTED_MODULE_1__.autoCheckbox.checked);\n};\ndocument.onkeydown = function (e) {\n    console.log(e.key);\n    switch (e.key) {\n        case \"Control\":\n            (0,_global__WEBPACK_IMPORTED_MODULE_1__.setCtrlPressed)(true);\n            break;\n        case \"Meta\":\n            (0,_global__WEBPACK_IMPORTED_MODULE_1__.setCtrlPressed)(true);\n            break;\n        case \"Delete\":\n            deletePressed();\n            break;\n        default:\n            break;\n    }\n};\ndocument.onkeyup = function (e) {\n    console.log(e.key);\n    switch (e.key) {\n        case \"Control\":\n            (0,_global__WEBPACK_IMPORTED_MODULE_1__.setCtrlPressed)(false);\n            break;\n        case \"Meta\":\n            (0,_global__WEBPACK_IMPORTED_MODULE_1__.setCtrlPressed)(false);\n            break;\n        default:\n            break;\n    }\n};\nvar startX = 0;\nvar startY = 0;\nvar mouseDown = false;\n_global__WEBPACK_IMPORTED_MODULE_1__.map.addEventListener(\"mousedown\", function (e) {\n    console.log(\"downnnncdddd\");\n    e.preventDefault();\n    if (e.button == 2) {\n        showMenu();\n    }\n    else {\n        mouseDown = true;\n        _global__WEBPACK_IMPORTED_MODULE_1__.selectionDiv.style.display = \"block\";\n        _global__WEBPACK_IMPORTED_MODULE_1__.selectionDiv.style.top = e.clientY + \"px\";\n        _global__WEBPACK_IMPORTED_MODULE_1__.selectionDiv.style.left = e.clientX + \"px\";\n        startX = e.clientX;\n        startY = e.clientY;\n    }\n});\ndocument\n    .getElementById(\"menu-container\")\n    .addEventListener(\"mousedown\", function (e) {\n    hideMenu();\n});\n// document.addEventListener(\"mousemove\", (e)=> {\n//   if (mouseDown) {\n//     selectionDiv.style.width = Math.abs(startX - e.clientX) + \"px\";\n//     selectionDiv.style.height = Math.abs(startY - e.clientY) + \"px\";\n//   }\n// });\ndocument.addEventListener(\"mouseup\", function (e) {\n    console.log(\"upp\");\n    mouseDown = false;\n    _global__WEBPACK_IMPORTED_MODULE_1__.selectionDiv.style.width = \"0px\";\n    _global__WEBPACK_IMPORTED_MODULE_1__.selectionDiv.style.height = \"0px\";\n    _global__WEBPACK_IMPORTED_MODULE_1__.selectionDiv.style.display = \"none\";\n    if (_global__WEBPACK_IMPORTED_MODULE_1__.selectionEnd != null) {\n        for (var i = _global__WEBPACK_IMPORTED_MODULE_1__.selectionStart.x; i <= _global__WEBPACK_IMPORTED_MODULE_1__.selectionEnd.x; i++) {\n            for (var j = _global__WEBPACK_IMPORTED_MODULE_1__.selectionStart.y; j <= _global__WEBPACK_IMPORTED_MODULE_1__.selectionEnd.y; j++) {\n                _global__WEBPACK_IMPORTED_MODULE_1__.selectedItems.push(_global__WEBPACK_IMPORTED_MODULE_1__.mapItems[i][j]);\n            }\n        }\n    }\n    (0,_global__WEBPACK_IMPORTED_MODULE_1__.updateSelection)();\n});\nfunction showMenu() {\n    document.getElementById(\"menu-container\").style.display = \"block\";\n}\nfunction hideMenu() {\n    document.getElementById(\"menu-container\").style.display = \"none\";\n}\nfunction deletePressed() {\n    console.log(\"ddd\");\n    _global__WEBPACK_IMPORTED_MODULE_1__.selectedItems.forEach(function (e) {\n        e.context.clearRect(0, 0, 25, 25);\n    });\n    (0,_global__WEBPACK_IMPORTED_MODULE_1__.setSelectedItems)([]);\n    (0,_global__WEBPACK_IMPORTED_MODULE_1__.updateSelection)();\n}\ndocument.getElementById(\"delete\").addEventListener(\"mousedown\", function () {\n    console.log(\"dddddddd\");\n    deletePressed();\n});\n(0,_start__WEBPACK_IMPORTED_MODULE_0__.createMap)();\n(0,_start__WEBPACK_IMPORTED_MODULE_0__.createImgItems)();\n\n\n//# sourceURL=webpack://pacman/./src/script.ts?");

/***/ }),

/***/ "./src/start.ts":
/*!**********************!*\
  !*** ./src/start.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createImgItems\": () => (/* binding */ createImgItems),\n/* harmony export */   \"createMap\": () => (/* binding */ createMap)\n/* harmony export */ });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/global.ts\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ \"./src/items.ts\");\n\n\nfunction createMap() {\n    for (var i = 0; i < 20; i++) {\n        var row = [];\n        for (var j = 0; j < 30; j++) {\n            var mapItem = new _items__WEBPACK_IMPORTED_MODULE_1__.MapItem(i, j);\n            _global__WEBPACK_IMPORTED_MODULE_0__.map.appendChild(mapItem.canvas);\n            row.push(mapItem);\n        }\n        _global__WEBPACK_IMPORTED_MODULE_0__.mapItems.push(row);\n    }\n}\nfunction createImgItems() {\n    var img = new Image();\n    img.src = \"./sprites.png\";\n    img.onload = function () {\n        for (var i = 0; i < 20; i++) {\n            for (var j = 0; j < 16; j++) {\n                var item = new _items__WEBPACK_IMPORTED_MODULE_1__.ImgItem();\n                item.draw(i, j);\n                _global__WEBPACK_IMPORTED_MODULE_0__.items.appendChild(item.canvas);\n            }\n        }\n        for (var i = 0; i < 20; i++) {\n            for (var j = 16; j < 32; j++) {\n                var item = new _items__WEBPACK_IMPORTED_MODULE_1__.ImgItem();\n                item.draw(i, j);\n                _global__WEBPACK_IMPORTED_MODULE_0__.items.appendChild(item.canvas);\n            }\n        }\n    };\n}\n\n\n//# sourceURL=webpack://pacman/./src/start.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.ts");
/******/ 	
/******/ })()
;