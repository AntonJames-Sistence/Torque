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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/playerCar */ \"./src/scripts/playerCar.js\");\n// import Example from './scripts/exsample';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('Hello from index.js!');\n\n  // getiing canvas\n  const screen = document.getElementById('screen');\n  const ctx = screen.getContext(\"2d\");\n\n  // creating player car\n  const playerCar = new _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  // prevent classic bug when we call drawImage before loading img and loading players car\n  playerCar.carImg.addEventListener(\"load\", () => {\n    ctx.drawImage(playerCar.carImg, playerCar.carX, playerCar.carY, 55, 90);\n  });\n\n  // event listener for moving players car\n  document.addEventListener(\"keydown\", function (event) {\n    // check for right arrow to move right\n    if (event.code === \"ArrowRight\") {\n      playerCar.moveRight(screen, ctx, 50);\n    } else if (event.code === \"ArrowLeft\") {\n      playerCar.moveLeft(screen, ctx, 50);\n    } else if (event.code === \"ArrowUp\") {\n      playerCar.moveUp(screen, ctx, 50);\n    } else if (event.code === \"ArrowDown\") {\n      playerCar.moveDown(screen, ctx, 50);\n    }\n    ;\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUM0QztBQUU1Q0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQzs7RUFFbkM7RUFDQSxNQUFNQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNoRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQzs7RUFFbkM7RUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSVQsMERBQVMsQ0FBQyxDQUFDO0VBQ2pDO0VBQ0FTLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDUixnQkFBZ0IsQ0FDN0IsTUFBTSxFQUNOLE1BQU07SUFDRkssR0FBRyxDQUFDSSxTQUFTLENBQUNGLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFRCxTQUFTLENBQUNHLElBQUksRUFBRUgsU0FBUyxDQUFDSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUMzRSxDQUNKLENBQUM7O0VBR0Q7RUFDQVosUUFBUSxDQUFDQyxnQkFBZ0IsQ0FDckIsU0FBUyxFQUNULFVBQVNZLEtBQUssRUFBQztJQUNYO0lBQ0EsSUFBSUEsS0FBSyxDQUFDQyxJQUFJLEtBQUssWUFBWSxFQUFFO01BQzdCTixTQUFTLENBQUNPLFNBQVMsQ0FBQ1gsTUFBTSxFQUFFRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ3hDLENBQUMsTUFBTSxJQUFJTyxLQUFLLENBQUNDLElBQUksS0FBSyxXQUFXLEVBQUU7TUFDbkNOLFNBQVMsQ0FBQ1EsUUFBUSxDQUFDWixNQUFNLEVBQUVFLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFDdkMsQ0FBQyxNQUFNLElBQUlPLEtBQUssQ0FBQ0MsSUFBSSxLQUFLLFNBQVMsRUFBRTtNQUNqQ04sU0FBUyxDQUFDUyxNQUFNLENBQUNiLE1BQU0sRUFBRUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNyQyxDQUFDLE1BQU0sSUFBSU8sS0FBSyxDQUFDQyxJQUFJLEtBQUssV0FBVyxFQUFFO01BQ25DTixTQUFTLENBQUNVLFFBQVEsQ0FBQ2QsTUFBTSxFQUFFRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ3ZDO0lBQUM7RUFFTCxDQUNKLENBQUM7QUFFTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3JxdWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhzYW1wbGUnO1xuaW1wb3J0IFBsYXllckNhciBmcm9tICcuL3NjcmlwdHMvcGxheWVyQ2FyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBpbmRleC5qcyEnKVxuXG4gICAgLy8gZ2V0aWluZyBjYW52YXNcbiAgICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJyk7XG4gICAgY29uc3QgY3R4ID0gc2NyZWVuLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIC8vIGNyZWF0aW5nIHBsYXllciBjYXJcbiAgICBjb25zdCBwbGF5ZXJDYXIgPSBuZXcgUGxheWVyQ2FyKCk7XG4gICAgLy8gcHJldmVudCBjbGFzc2ljIGJ1ZyB3aGVuIHdlIGNhbGwgZHJhd0ltYWdlIGJlZm9yZSBsb2FkaW5nIGltZyBhbmQgbG9hZGluZyBwbGF5ZXJzIGNhclxuICAgIHBsYXllckNhci5jYXJJbWcuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJsb2FkXCIsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UocGxheWVyQ2FyLmNhckltZywgcGxheWVyQ2FyLmNhclgsIHBsYXllckNhci5jYXJZLCA1NSwgOTApO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIFxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIGZvciBtb3ZpbmcgcGxheWVycyBjYXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHJpZ2h0IGFycm93IHRvIG1vdmUgcmlnaHRcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgICAgICAgIHBsYXllckNhci5tb3ZlUmlnaHQoc2NyZWVuLCBjdHgsIDUwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIHBsYXllckNhci5tb3ZlTGVmdChzY3JlZW4sIGN0eCwgNTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jb2RlID09PSBcIkFycm93VXBcIikge1xuICAgICAgICAgICAgICAgIHBsYXllckNhci5tb3ZlVXAoc2NyZWVuLCBjdHgsIDUwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICAgICAgICAgIHBsYXllckNhci5tb3ZlRG93bihzY3JlZW4sIGN0eCwgNTApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgKTtcblxufSkiXSwibmFtZXMiOlsiUGxheWVyQ2FyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInBsYXllckNhciIsImNhckltZyIsImRyYXdJbWFnZSIsImNhclgiLCJjYXJZIiwiZXZlbnQiLCJjb2RlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJtb3ZlVXAiLCJtb3ZlRG93biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/playerCar.js":
/*!**********************************!*\
  !*** ./src/scripts/playerCar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PlayerCar {\n  constructor() {\n    const playerCarImg = new Image();\n    playerCarImg.src = \"resources/playerCarImage.png\";\n    this.carImg = playerCarImg;\n    this.carX = 320;\n    this.carY = 600;\n  }\n\n  // eventually I would need to calibrate moving mechanics to look better on canvas size\n  moveRight(screen, ctx, distance) {\n    // clear canvas before next frame\n    ctx.clearRect(0, 0, screen.width, screen.height);\n    // update position to the right\n\n    // draw player car if it is inside canvas borders\n    if (this.carX < screen.width - 100) {\n      // return here to calibrate later\n      this.carX += distance;\n      ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);\n    } else {\n      ctx.drawImage(this.carImg, 645, this.carY, 55, 90);\n    }\n  }\n  moveLeft(screen, ctx, distance) {\n    ctx.clearRect(0, 0, screen.width, screen.height);\n    if (this.carX >= 10) {\n      this.carX -= distance;\n      ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);\n    } else {\n      ctx.drawImage(this.carImg, 0, this.carY, 55, 90);\n    }\n  }\n  moveUp(screen, ctx, distance) {\n    ctx.clearRect(0, 0, screen.width, screen.height);\n    if (this.carY > 0) {\n      this.carY -= distance;\n      ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);\n    } else {\n      ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);\n    }\n  }\n  moveDown(screen, ctx, distance) {\n    ctx.clearRect(0, 0, screen.width, screen.height);\n    if (this.carY < 600) {\n      this.carY += distance;\n      ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);\n    } else {\n      ctx.drawImage(this.carImg, this.carX, this.carY, 55, 90);\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerCar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVILE1BQU0sQ0FBQ0ksS0FBSyxFQUFFSixNQUFNLENBQUNLLE1BQU0sQ0FBQztJQUVoRCxJQUFJLElBQUksQ0FBQ1AsSUFBSSxHQUFHLEdBQUcsRUFBRTtNQUNqQixJQUFJLENBQUNBLElBQUksSUFBSUksUUFBUTtNQUNyQkQsR0FBRyxDQUFDSyxTQUFTLENBQUMsSUFBSSxDQUFDVixNQUFNLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUM1RCxDQUFDLE1BQU07TUFDSEcsR0FBRyxDQUFDSyxTQUFTLENBQUMsSUFBSSxDQUFDVixNQUFNLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUM1RDtFQUVKO0FBS0o7QUFFQSwrREFBZVAsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcnF1ZS8uL3NyYy9zY3JpcHRzL3BsYXllckNhci5qcz9iNGQzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllckNhciB7XG4gICAgY29uc3RydWN0b3IoKSB7IFxuICAgICAgICBjb25zdCBwbGF5ZXJDYXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGxheWVyQ2FySW1nLnNyYyA9IFwicmVzb3VyY2VzL3BsYXllckNhckltYWdlLnBuZ1wiO1xuICAgICAgICB0aGlzLmNhckltZyA9IHBsYXllckNhckltZztcbiAgICAgICAgdGhpcy5jYXJYID0gMzIwO1xuICAgICAgICB0aGlzLmNhclkgPSA2MDA7XG4gICAgfVxuXG4gICAgLy8gZXZlbnR1YWxseSBJIHdvdWxkIG5lZWQgdG8gY2FsaWJyYXRlIG1vdmluZyBtZWNoYW5pY3MgdG8gbG9vayBiZXR0ZXIgb24gY2FudmFzIHNpemVcbiAgICBtb3ZlUmlnaHQoc2NyZWVuLCBjdHgsIGRpc3RhbmNlKXtcbiAgICAgICAgLy8gY2xlYXIgY2FudmFzIGJlZm9yZSBuZXh0IGZyYW1lXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgc2NyZWVuLndpZHRoLCBzY3JlZW4uaGVpZ2h0KTtcbiAgICAgICAgLy8gdXBkYXRlIHBvc2l0aW9uIHRvIHRoZSByaWdodFxuICAgICAgICBcbiAgICAgICAgLy8gZHJhdyBwbGF5ZXIgY2FyIGlmIGl0IGlzIGluc2lkZSBjYW52YXMgYm9yZGVyc1xuICAgICAgICBpZiAodGhpcy5jYXJYIDwgc2NyZWVuLndpZHRoLTEwMCkgeyAvLyByZXR1cm4gaGVyZSB0byBjYWxpYnJhdGUgbGF0ZXJcbiAgICAgICAgICAgIHRoaXMuY2FyWCArPSBkaXN0YW5jZTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYXJJbWcsIHRoaXMuY2FyWCwgdGhpcy5jYXJZLCA1NSwgOTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhckltZywgNjQ1LCB0aGlzLmNhclksIDU1LCA5MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlTGVmdChzY3JlZW4sIGN0eCwgZGlzdGFuY2Upe1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHNjcmVlbi53aWR0aCwgc2NyZWVuLmhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FyWCA+PSAxMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJYIC09IGRpc3RhbmNlO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhckltZywgdGhpcy5jYXJYLCB0aGlzLmNhclksIDU1LCA5MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FySW1nLCAwLCB0aGlzLmNhclksIDU1LCA5MCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgbW92ZVVwKHNjcmVlbiwgY3R4LCBkaXN0YW5jZSl7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgc2NyZWVuLndpZHRoLCBzY3JlZW4uaGVpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5jYXJZID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJZIC09IGRpc3RhbmNlO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhckltZywgdGhpcy5jYXJYLCB0aGlzLmNhclksIDU1LCA5MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FySW1nLCB0aGlzLmNhclgsIHRoaXMuY2FyWSwgNTUsIDkwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBtb3ZlRG93bihzY3JlZW4sIGN0eCwgZGlzdGFuY2Upe1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHNjcmVlbi53aWR0aCwgc2NyZWVuLmhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FyWSA8IDYwMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJZICs9IGRpc3RhbmNlO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhckltZywgdGhpcy5jYXJYLCB0aGlzLmNhclksIDU1LCA5MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FySW1nLCB0aGlzLmNhclgsIHRoaXMuY2FyWSwgNTUsIDkwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyQ2FyOyJdLCJuYW1lcyI6WyJQbGF5ZXJDYXIiLCJjb25zdHJ1Y3RvciIsInBsYXllckNhckltZyIsIkltYWdlIiwic3JjIiwiY2FySW1nIiwiY2FyWCIsImNhclkiLCJtb3ZlUmlnaHQiLCJzY3JlZW4iLCJjdHgiLCJkaXN0YW5jZSIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwibW92ZUxlZnQiLCJtb3ZlVXAiLCJtb3ZlRG93biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/playerCar.js\n");

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