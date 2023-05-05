/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/playerCar */ \"./src/scripts/playerCar.js\");\n// import Example from './scripts/exsample';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('Hello from index.js!');\n\n  // getiing canvas\n  const screen = document.getElementById('screen');\n  const ctx = screen.getContext(\"2d\");\n\n  // creating player car\n  const playerCar = new _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  // creating starting position for players car\n  // let startingPos = [0, 600];\n\n  // function runAnimation(car) {\n  //     // clean canvas before each frame\n  //     ctx.clearRect(0, 0, screen.width, screen.height);\n\n  //     // draw canvas using playercar as img, starting pos as position\n  //     ctx.drawImage(car.carImg, startingPos[0], startingPos[1], 55, 90);\n  //     // checking if it is still inside field\n  //     if (startingPos[0] < 650){\n  //         startingPos[0] += 1;\n  //     }\n  //     // request animation from canvas\n  //     requestAnimationFrame(() => runAnimation(car));\n  // }\n  // runAnimation(playerCar);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUM0QztBQUU1Q0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQzs7RUFFbkM7RUFDQSxNQUFNQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNoRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQzs7RUFFbkM7RUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSVQsMERBQVMsQ0FBQyxDQUFDOztFQUVqQztFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcnF1ZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gJy4vc2NyaXB0cy9leHNhbXBsZSc7XG5pbXBvcnQgUGxheWVyQ2FyIGZyb20gJy4vc2NyaXB0cy9wbGF5ZXJDYXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGluZGV4LmpzIScpXG5cbiAgICAvLyBnZXRpaW5nIGNhbnZhc1xuICAgIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKTtcbiAgICBjb25zdCBjdHggPSBzY3JlZW4uZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgLy8gY3JlYXRpbmcgcGxheWVyIGNhclxuICAgIGNvbnN0IHBsYXllckNhciA9IG5ldyBQbGF5ZXJDYXIoKTtcbiAgICBcbiAgICAvLyBjcmVhdGluZyBzdGFydGluZyBwb3NpdGlvbiBmb3IgcGxheWVycyBjYXJcbiAgICAvLyBsZXQgc3RhcnRpbmdQb3MgPSBbMCwgNjAwXTtcblxuICAgIC8vIGZ1bmN0aW9uIHJ1bkFuaW1hdGlvbihjYXIpIHtcbiAgICAvLyAgICAgLy8gY2xlYW4gY2FudmFzIGJlZm9yZSBlYWNoIGZyYW1lXG4gICAgLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgc2NyZWVuLndpZHRoLCBzY3JlZW4uaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgLy8gICAgIC8vIGRyYXcgY2FudmFzIHVzaW5nIHBsYXllcmNhciBhcyBpbWcsIHN0YXJ0aW5nIHBvcyBhcyBwb3NpdGlvblxuICAgIC8vICAgICBjdHguZHJhd0ltYWdlKGNhci5jYXJJbWcsIHN0YXJ0aW5nUG9zWzBdLCBzdGFydGluZ1Bvc1sxXSwgNTUsIDkwKTtcbiAgICAvLyAgICAgLy8gY2hlY2tpbmcgaWYgaXQgaXMgc3RpbGwgaW5zaWRlIGZpZWxkXG4gICAgLy8gICAgIGlmIChzdGFydGluZ1Bvc1swXSA8IDY1MCl7XG4gICAgLy8gICAgICAgICBzdGFydGluZ1Bvc1swXSArPSAxO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC8vIHJlcXVlc3QgYW5pbWF0aW9uIGZyb20gY2FudmFzXG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBydW5BbmltYXRpb24oY2FyKSk7XG4gICAgLy8gfVxuICAgIC8vIHJ1bkFuaW1hdGlvbihwbGF5ZXJDYXIpO1xuXG59KSJdLCJuYW1lcyI6WyJQbGF5ZXJDYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic2NyZWVuIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicGxheWVyQ2FyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/playerCar.js":
/*!**********************************!*\
  !*** ./src/scripts/playerCar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PlayerCar {\n  constructor() {\n    const playerCar = new Image();\n    playerCar.src = \"resources/playerCarImage.png\";\n    this.carImg = playerCar;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerCar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXJDYXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVMsQ0FBQztFQUNaQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixNQUFNQyxTQUFTLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDN0JELFNBQVMsQ0FBQ0UsR0FBRyxHQUFHLDhCQUE4QjtJQUM5QyxJQUFJLENBQUNDLE1BQU0sR0FBR0gsU0FBUztFQUMzQjtBQUNKO0FBRUEsK0RBQWVGLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3JxdWUvLi9zcmMvc2NyaXB0cy9wbGF5ZXJDYXIuanM/YjRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXJDYXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgY29uc3QgcGxheWVyQ2FyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllckNhci5zcmMgPSBcInJlc291cmNlcy9wbGF5ZXJDYXJJbWFnZS5wbmdcIjtcbiAgICAgICAgdGhpcy5jYXJJbWcgPSBwbGF5ZXJDYXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDYXI7Il0sIm5hbWVzIjpbIlBsYXllckNhciIsImNvbnN0cnVjdG9yIiwicGxheWVyQ2FyIiwiSW1hZ2UiLCJzcmMiLCJjYXJJbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/playerCar.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3JxdWUvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;