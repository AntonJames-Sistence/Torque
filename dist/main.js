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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/playerCar */ \"./src/scripts/playerCar.js\");\n// import Example from './scripts/exsample';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('Hello from index.js!');\n\n  // getiing canvas\n  const screen = document.getElementById('screen');\n  const context = screen.getContext(\"2d\");\n  const keys = {};\n\n  // creating player car\n  const playerCar = new _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](screen, context);\n\n  // prevent classic bug when we call drawImage before loading img and loading players car\n  playerCar.carImg.onload = function () {\n    context.drawImage(playerCar.carImg, playerCar.carX, playerCar.carY, 55, 90);\n  };\n  function updatePlayerCar() {\n    if (keys[\"ArrowRight\"] === true) {\n      // right move\n      if (playerCar.carX > playerCar.screen.width - 65) {\n        playerCar.carX = playerCar.screen.width - 55;\n      } else {\n        playerCar.carX += 10;\n      }\n    }\n    if (keys[\"ArrowLeft\"] === true) {\n      // left move\n      if (playerCar.carX < 10) {\n        playerCar.carX = 0;\n      } else {\n        playerCar.carX -= 10;\n      }\n    }\n    if (keys[\"ArrowUp\"] === true) {\n      // move up\n      if (playerCar.carY < 10) {\n        playerCar.carY = 0;\n      } else {\n        playerCar.carY -= 10;\n      }\n    }\n    if (keys[\"ArrowDown\"] === true) {\n      // move down\n      if (playerCar.carY > playerCar.screen.height - 100) {\n        playerCar.carY = playerCar.screen.height - 90;\n      } else {\n        playerCar.carY += 10;\n      }\n    }\n    playerCar.drive();\n  }\n\n  // add listener for keyDown process\n  document.addEventListener(\"keydown\", event => {\n    keys[event.code] = true; // {ArrowRight: false} or another arrow\n  });\n  // add listener for keyUp process\n  document.addEventListener(\"keyup\", event => {\n    keys[event.code] = false; // {ArrowUp: true}\n  });\n  // logic for main game loop\n  function play() {\n    // our animation basics\n    requestAnimationFrame(play);\n    // clear canvas before next frame\n    context.clearRect(0, 0, screen.width, screen.height);\n    // debugger\n    updatePlayerCar(playerCar);\n  }\n\n  // start of the game\n  play();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxJQUFJLENBQUM7SUFDM0I7SUFDQWYsT0FBTyxDQUFDaUIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVuQixNQUFNLENBQUNZLEtBQUssRUFBRVosTUFBTSxDQUFDYSxNQUFNLENBQUM7SUFDcEQ7SUFDQUYsZUFBZSxDQUFDTixTQUFTLENBQUM7RUFDOUI7O0VBRUE7RUFDQVksSUFBSSxDQUFDLENBQUM7QUFFVixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3JxdWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhzYW1wbGUnO1xuaW1wb3J0IFBsYXllckNhciBmcm9tICcuL3NjcmlwdHMvcGxheWVyQ2FyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBpbmRleC5qcyEnKVxuXG4gICAgLy8gZ2V0aWluZyBjYW52YXNcbiAgICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJyk7XG4gICAgY29uc3QgY29udGV4dCA9IHNjcmVlbi5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjb25zdCBrZXlzID0ge307XG5cbiAgICAvLyBjcmVhdGluZyBwbGF5ZXIgY2FyXG4gICAgY29uc3QgcGxheWVyQ2FyID0gbmV3IFBsYXllckNhcihzY3JlZW4sIGNvbnRleHQpO1xuXG4gICAgLy8gcHJldmVudCBjbGFzc2ljIGJ1ZyB3aGVuIHdlIGNhbGwgZHJhd0ltYWdlIGJlZm9yZSBsb2FkaW5nIGltZyBhbmQgbG9hZGluZyBwbGF5ZXJzIGNhclxuICAgIHBsYXllckNhci5jYXJJbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHBsYXllckNhci5jYXJJbWcsIHBsYXllckNhci5jYXJYLCBwbGF5ZXJDYXIuY2FyWSwgNTUsIDkwKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheWVyQ2FyKCl7XG5cbiAgICAgICAgaWYgKGtleXNbXCJBcnJvd1JpZ2h0XCJdID09PSB0cnVlKSB7IC8vIHJpZ2h0IG1vdmVcbiAgICAgICAgICAgIGlmIChwbGF5ZXJDYXIuY2FyWCA+IChwbGF5ZXJDYXIuc2NyZWVuLndpZHRoIC0gNjUpKXtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDYXIuY2FyWCA9IHBsYXllckNhci5zY3JlZW4ud2lkdGggLSA1NTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyQ2FyLmNhclggKz0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5c1tcIkFycm93TGVmdFwiXSA9PT0gdHJ1ZSkgeyAvLyBsZWZ0IG1vdmVcbiAgICAgICAgICAgIGlmIChwbGF5ZXJDYXIuY2FyWCA8IDEwKXtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDYXIuY2FyWCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllckNhci5jYXJYIC09IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleXNbXCJBcnJvd1VwXCJdID09PSB0cnVlKSB7IC8vIG1vdmUgdXBcbiAgICAgICAgICAgIGlmIChwbGF5ZXJDYXIuY2FyWSA8IDEwKXtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDYXIuY2FyWSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllckNhci5jYXJZIC09IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleXNbXCJBcnJvd0Rvd25cIl0gPT09IHRydWUpIHsgLy8gbW92ZSBkb3duXG4gICAgICAgICAgICBpZiAocGxheWVyQ2FyLmNhclkgPiBwbGF5ZXJDYXIuc2NyZWVuLmhlaWdodC0xMDApe1xuICAgICAgICAgICAgICAgIHBsYXllckNhci5jYXJZID0gcGxheWVyQ2FyLnNjcmVlbi5oZWlnaHQtOTA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllckNhci5jYXJZICs9IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyQ2FyLmRyaXZlKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIGFkZCBsaXN0ZW5lciBmb3Iga2V5RG93biBwcm9jZXNzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgIChldmVudCkgPT4ge1xuICAgICAgICAgICAga2V5c1tldmVudC5jb2RlXSA9IHRydWU7IC8vIHtBcnJvd1JpZ2h0OiBmYWxzZX0gb3IgYW5vdGhlciBhcnJvd1xuICAgICAgICB9XG4gICAgKTtcbiAgICAvLyBhZGQgbGlzdGVuZXIgZm9yIGtleVVwIHByb2Nlc3NcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImtleXVwXCIsXG4gICAgICAgIChldmVudCkgPT4ge1xuICAgICAgICAgICAga2V5c1tldmVudC5jb2RlXSA9IGZhbHNlOyAvLyB7QXJyb3dVcDogdHJ1ZX1cbiAgICAgICAgfVxuICAgICk7XG4gICAgLy8gbG9naWMgZm9yIG1haW4gZ2FtZSBsb29wXG4gICAgZnVuY3Rpb24gcGxheSgpe1xuICAgICAgICAvLyBvdXIgYW5pbWF0aW9uIGJhc2ljc1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocGxheSk7XG4gICAgICAgIC8vIGNsZWFyIGNhbnZhcyBiZWZvcmUgbmV4dCBmcmFtZVxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzY3JlZW4ud2lkdGgsIHNjcmVlbi5oZWlnaHQpO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB1cGRhdGVQbGF5ZXJDYXIocGxheWVyQ2FyKTtcbiAgICB9XG5cbiAgICAvLyBzdGFydCBvZiB0aGUgZ2FtZVxuICAgIHBsYXkoKTtcblxufSkiXSwibmFtZXMiOlsiUGxheWVyQ2FyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJrZXlzIiwicGxheWVyQ2FyIiwiY2FySW1nIiwib25sb2FkIiwiZHJhd0ltYWdlIiwiY2FyWCIsImNhclkiLCJ1cGRhdGVQbGF5ZXJDYXIiLCJ3aWR0aCIsImhlaWdodCIsImRyaXZlIiwiZXZlbnQiLCJjb2RlIiwicGxheSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/playerCar.js":
/*!**********************************!*\
  !*** ./src/scripts/playerCar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PlayerCar {\n  constructor(screen, context) {\n    const playerCarImg = new Image();\n    playerCarImg.src = \"resources/playerCarImage.png\";\n    this.carImg = playerCarImg;\n    this.carX = 320;\n    this.carY = 600;\n    this.width = 55;\n    this.height = 90;\n    this.context = context;\n    this.screen = screen;\n  }\n\n  // simple reDraw\n  drive() {\n    this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerCar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXJDYXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVMsQ0FBQztFQUNaQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUN6QixNQUFNQyxZQUFZLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDaENELFlBQVksQ0FBQ0UsR0FBRyxHQUFHLDhCQUE4QjtJQUNqRCxJQUFJLENBQUNDLE1BQU0sR0FBR0gsWUFBWTtJQUMxQixJQUFJLENBQUNJLElBQUksR0FBRyxHQUFHO0lBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUcsR0FBRztJQUNmLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQ1IsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0VBQ3hCOztFQUVBO0VBQ0FVLEtBQUtBLENBQUEsRUFBRTtJQUNILElBQUksQ0FBQ1QsT0FBTyxDQUFDVSxTQUFTLENBQUMsSUFBSSxDQUFDTixNQUFNLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7RUFDdEY7QUFFSjtBQUVBLCtEQUFlWCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9ycXVlLy4vc3JjL3NjcmlwdHMvcGxheWVyQ2FyLmpzP2I0ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyQ2FyIHtcbiAgICBjb25zdHJ1Y3RvcihzY3JlZW4sIGNvbnRleHQpIHsgXG4gICAgICAgIGNvbnN0IHBsYXllckNhckltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXJDYXJJbWcuc3JjID0gXCJyZXNvdXJjZXMvcGxheWVyQ2FySW1hZ2UucG5nXCI7XG4gICAgICAgIHRoaXMuY2FySW1nID0gcGxheWVyQ2FySW1nO1xuICAgICAgICB0aGlzLmNhclggPSAzMjA7XG4gICAgICAgIHRoaXMuY2FyWSA9IDYwMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDU1O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDkwO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcbiAgICB9XG5cbiAgICAvLyBzaW1wbGUgcmVEcmF3XG4gICAgZHJpdmUoKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmNhckltZywgdGhpcy5jYXJYLCB0aGlzLmNhclksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyQ2FyOyJdLCJuYW1lcyI6WyJQbGF5ZXJDYXIiLCJjb25zdHJ1Y3RvciIsInNjcmVlbiIsImNvbnRleHQiLCJwbGF5ZXJDYXJJbWciLCJJbWFnZSIsInNyYyIsImNhckltZyIsImNhclgiLCJjYXJZIiwid2lkdGgiLCJoZWlnaHQiLCJkcml2ZSIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/playerCar.js\n");

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