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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/playerCar */ \"./src/scripts/playerCar.js\");\n// import Example from './scripts/exsample';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('Hello from index.js!');\n\n  // getiing canvas\n  const screen = document.getElementById('screen');\n  const ctx = screen.getContext(\"2d\");\n\n  // creating player car\n  const playerCar = new _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  // prevent classic bug when we call drawImage before loading img and loading players car\n  playerCar.carImg.addEventListener(\"load\", () => {\n    ctx.drawImage(playerCar.carImg, playerCar.carX, playerCar.carY, 55, 90);\n  });\n\n  // creating starting position for players car\n  // let startingPos = [0, 600];\n\n  // function runAnimation(car) {\n  //     // clean canvas before each frame\n  //     ctx.clearRect(0, 0, screen.width, screen.height);\n\n  //     // draw canvas using playercar as img, starting pos as position\n  //     ctx.drawImage(car.carImg, startingPos[0], startingPos[1], 55, 90);\n  //     // checking if it is still inside field\n  //     if (startingPos[0] < 650){\n  //         startingPos[0] += 1;\n  //     }\n  //     // request animation from canvas\n  //     requestAnimationFrame(() => runAnimation(car));\n  // }\n  // runAnimation(playerCar);\n  // debugger\n\n  document.addEventListener(\"keydown\", function (event) {\n    if (event.code === \"ArrowRight\") {\n      // debugger\n      playerCar.moveRight(screen, ctx, 50);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUM0QztBQUU1Q0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQzs7RUFFbkM7RUFDQSxNQUFNQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNoRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQzs7RUFFbkM7RUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSVQsMERBQVMsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0FTLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDUixnQkFBZ0IsQ0FDN0IsTUFBTSxFQUNOLE1BQU07SUFDRkssR0FBRyxDQUFDSSxTQUFTLENBQUNGLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFRCxTQUFTLENBQUNHLElBQUksRUFBRUgsU0FBUyxDQUFDSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUMzRSxDQUNKLENBQUM7O0VBSUQ7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFHQVosUUFBUSxDQUFDQyxnQkFBZ0IsQ0FDckIsU0FBUyxFQUNULFVBQVNZLEtBQUssRUFBQztJQUNYLElBQUlBLEtBQUssQ0FBQ0MsSUFBSSxLQUFLLFlBQVksRUFBRTtNQUM3QjtNQUNBTixTQUFTLENBQUNPLFNBQVMsQ0FBQ1gsTUFBTSxFQUFFRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ3hDO0VBQ0osQ0FDSixDQUFDO0FBRUwsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9ycXVlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9zY3JpcHRzL2V4c2FtcGxlJztcbmltcG9ydCBQbGF5ZXJDYXIgZnJvbSAnLi9zY3JpcHRzL3BsYXllckNhcic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIGZyb20gaW5kZXguanMhJylcblxuICAgIC8vIGdldGlpbmcgY2FudmFzXG4gICAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpO1xuICAgIGNvbnN0IGN0eCA9IHNjcmVlbi5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAvLyBjcmVhdGluZyBwbGF5ZXIgY2FyXG4gICAgY29uc3QgcGxheWVyQ2FyID0gbmV3IFBsYXllckNhcigpO1xuICAgIC8vIHByZXZlbnQgY2xhc3NpYyBidWcgd2hlbiB3ZSBjYWxsIGRyYXdJbWFnZSBiZWZvcmUgbG9hZGluZyBpbWcgYW5kIGxvYWRpbmcgcGxheWVycyBjYXJcbiAgICBwbGF5ZXJDYXIuY2FySW1nLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwibG9hZFwiLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHBsYXllckNhci5jYXJJbWcsIHBsYXllckNhci5jYXJYLCBwbGF5ZXJDYXIuY2FyWSwgNTUsIDkwKTtcbiAgICAgICAgfVxuICAgICk7XG5cblxuICAgIFxuICAgIC8vIGNyZWF0aW5nIHN0YXJ0aW5nIHBvc2l0aW9uIGZvciBwbGF5ZXJzIGNhclxuICAgIC8vIGxldCBzdGFydGluZ1BvcyA9IFswLCA2MDBdO1xuXG4gICAgLy8gZnVuY3Rpb24gcnVuQW5pbWF0aW9uKGNhcikge1xuICAgIC8vICAgICAvLyBjbGVhbiBjYW52YXMgYmVmb3JlIGVhY2ggZnJhbWVcbiAgICAvLyAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzY3JlZW4ud2lkdGgsIHNjcmVlbi5oZWlnaHQpO1xuICAgICAgICBcbiAgICAvLyAgICAgLy8gZHJhdyBjYW52YXMgdXNpbmcgcGxheWVyY2FyIGFzIGltZywgc3RhcnRpbmcgcG9zIGFzIHBvc2l0aW9uXG4gICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UoY2FyLmNhckltZywgc3RhcnRpbmdQb3NbMF0sIHN0YXJ0aW5nUG9zWzFdLCA1NSwgOTApO1xuICAgIC8vICAgICAvLyBjaGVja2luZyBpZiBpdCBpcyBzdGlsbCBpbnNpZGUgZmllbGRcbiAgICAvLyAgICAgaWYgKHN0YXJ0aW5nUG9zWzBdIDwgNjUwKXtcbiAgICAvLyAgICAgICAgIHN0YXJ0aW5nUG9zWzBdICs9IDE7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLy8gcmVxdWVzdCBhbmltYXRpb24gZnJvbSBjYW52YXNcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJ1bkFuaW1hdGlvbihjYXIpKTtcbiAgICAvLyB9XG4gICAgLy8gcnVuQW5pbWF0aW9uKHBsYXllckNhcik7XG4gICAgLy8gZGVidWdnZXJcbiAgICBcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwia2V5ZG93blwiLFxuICAgICAgICBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIHBsYXllckNhci5tb3ZlUmlnaHQoc2NyZWVuLCBjdHgsIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbn0pIl0sIm5hbWVzIjpbIlBsYXllckNhciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJzY3JlZW4iLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJwbGF5ZXJDYXIiLCJjYXJJbWciLCJkcmF3SW1hZ2UiLCJjYXJYIiwiY2FyWSIsImV2ZW50IiwiY29kZSIsIm1vdmVSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/playerCar.js":
/*!**********************************!*\
  !*** ./src/scripts/playerCar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PlayerCar {\n  constructor() {\n    const playerCarImg = new Image();\n    playerCarImg.src = \"resources/playerCarImage.png\";\n    this.carImg = playerCarImg;\n    this.carX = 0;\n    this.carY = 600;\n  }\n  moveRight(screen, ctx, distance) {\n    ctx.clearRect(0, 0, screen.width, screen.height);\n\n    // update position to the right\n    this.carX += distance;\n    // draw player car\n    ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerCar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXJDYXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVMsQ0FBQztFQUNaQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixNQUFNQyxZQUFZLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDaENELFlBQVksQ0FBQ0UsR0FBRyxHQUFHLDhCQUE4QjtJQUNqRCxJQUFJLENBQUNDLE1BQU0sR0FBR0gsWUFBWTtJQUMxQixJQUFJLENBQUNJLElBQUksR0FBRyxDQUFDO0lBQ2IsSUFBSSxDQUFDQyxJQUFJLEdBQUcsR0FBRztFQUNuQjtFQUVBQyxTQUFTQSxDQUFDQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsUUFBUSxFQUFDO0lBQzVCRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFSCxNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDSyxNQUFNLENBQUM7O0lBRTVDO0lBQ0EsSUFBSSxDQUFDUixJQUFJLElBQUlLLFFBQVE7SUFDckI7SUFDQUQsR0FBRyxDQUFDSyxTQUFTLENBQUMsSUFBSSxDQUFDVixNQUFNLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUNoRTtBQUtKO0FBRUEsK0RBQWVQLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3JxdWUvLi9zcmMvc2NyaXB0cy9wbGF5ZXJDYXIuanM/YjRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXJDYXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgY29uc3QgcGxheWVyQ2FySW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllckNhckltZy5zcmMgPSBcInJlc291cmNlcy9wbGF5ZXJDYXJJbWFnZS5wbmdcIjtcbiAgICAgICAgdGhpcy5jYXJJbWcgPSBwbGF5ZXJDYXJJbWc7XG4gICAgICAgIHRoaXMuY2FyWCA9IDA7XG4gICAgICAgIHRoaXMuY2FyWSA9IDYwMDtcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoc2NyZWVuLCBjdHgsIGRpc3RhbmNlKXtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzY3JlZW4ud2lkdGgsIHNjcmVlbi5oZWlnaHQpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb24gdG8gdGhlIHJpZ2h0XG4gICAgICAgICAgICB0aGlzLmNhclggKz0gZGlzdGFuY2U7XG4gICAgICAgICAgICAvLyBkcmF3IHBsYXllciBjYXJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYXJJbWcsIHRoaXMuY2FyWCwgdGhpcy5jYXJZLCA1NSwgOTApO1xuICAgIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDYXI7Il0sIm5hbWVzIjpbIlBsYXllckNhciIsImNvbnN0cnVjdG9yIiwicGxheWVyQ2FySW1nIiwiSW1hZ2UiLCJzcmMiLCJjYXJJbWciLCJjYXJYIiwiY2FyWSIsIm1vdmVSaWdodCIsInNjcmVlbiIsImN0eCIsImRpc3RhbmNlIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/playerCar.js\n");

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