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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/playerCar */ \"./src/scripts/playerCar.js\");\n/* harmony import */ var _scripts_competitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/competitor */ \"./src/scripts/competitor.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('Hello from index.js!');\n\n  // getiing canvas\n  const screen = document.getElementById('screen');\n  const context = screen.getContext(\"2d\");\n\n  // creating player car\n  const playerCar = new _scripts_playerCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](screen, context);\n\n  // creating competitors cars 5 with random positions\n\n  const competitors = [];\n  for (let i = 0; i < 5; i++) {\n    // maybe refactor inside for loop for collision logic\n    competitors.push(new _scripts_competitor__WEBPACK_IMPORTED_MODULE_1__[\"default\"](screen, context));\n  }\n  function runGame() {\n    if (keys[\"ArrowRight\"] && playerCar.carX < playerCar.screen.width - 65) {\n      playerCar.carX += 5; // right move\n    }\n\n    if (keys[\"ArrowLeft\"] && playerCar.carX > 10) {\n      playerCar.carX -= 5; // left move\n    }\n\n    if (keys[\"ArrowUp\"] && playerCar.carY > 10) {\n      playerCar.carY -= 5; // move up with speed 5 for now\n    }\n\n    if (keys[\"ArrowDown\"] && playerCar.carY < playerCar.screen.height - 90) {\n      playerCar.carY += 5; // move down\n    }\n\n    for (let i = 0; i < competitors.length; i++) {\n      let currentCar = competitors[i];\n      if (currentCar.carY < currentCar.screen.height) {\n        if (currentCar.carY >= playerCar.carY - 90 && currentCar.carY <= playerCar.carY && currentCar.carX >= playerCar.carX - 45 && currentCar.carX <= playerCar.carX + 45) {\n          console.log('hit another car');\n          currentCar.drive();\n        } else {\n          currentCar.carY += 3;\n          currentCar.drive();\n        }\n      } else {\n        let randImg = Math.floor(Math.random() * 4);\n        currentCar.carImg.src = `resources/car${randImg}.png`;\n        currentCar.carX = Math.random() * (screen.width - 65 - 10) + 10;\n        currentCar.carY = Math.random() * (-200 - 100) - 200;\n      }\n    }\n\n    // draw players car\n    playerCar.drive();\n  }\n  const keys = {};\n\n  // add listener for keyDown process\n  document.addEventListener(\"keydown\", event => {\n    keys[event.code] = true; // {ArrowRight: false} or another arrow\n  });\n  // add listener for keyUp process\n  document.addEventListener(\"keyup\", event => {\n    keys[event.code] = false; // {ArrowUp: true}\n  });\n\n  // logic for main game loop\n  function play() {\n    // our animation basics\n    requestAnimationFrame(play);\n    // clear canvas before next frame\n    context.clearRect(0, 0, screen.width, screen.height);\n    runGame();\n  }\n\n  // start of the game\n  play();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXlDO0FBQ0s7QUFFOUNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7O0VBRW5DO0VBQ0EsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDaEQsTUFBTUMsT0FBTyxHQUFHRixNQUFNLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUM7O0VBRXZDO0VBQ0EsTUFBTUMsU0FBUyxHQUFHLElBQUlWLDBEQUFNLENBQUNNLE1BQU0sRUFBRUUsT0FBTyxDQUFDOztFQUU3Qzs7RUFFQSxNQUFNRyxXQUFXLEdBQUcsRUFBRTtFQUN0QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFDO0lBQUU7SUFDekJELFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLElBQUlaLDJEQUFVLENBQUNLLE1BQU0sRUFBRUUsT0FBTyxDQUFDLENBQUM7RUFDckQ7RUFHQSxTQUFTTSxPQUFPQSxDQUFBLEVBQUU7SUFFZCxJQUFLQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQU1MLFNBQVMsQ0FBQ00sSUFBSSxHQUFJTixTQUFTLENBQUNKLE1BQU0sQ0FBQ1csS0FBSyxHQUFHLEVBQUksRUFBRTtNQUN0RVAsU0FBUyxDQUFDTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0I7O0lBRUEsSUFBS0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFNTCxTQUFTLENBQUNNLElBQUksR0FBRyxFQUFHLEVBQUU7TUFDMUNOLFNBQVMsQ0FBQ00sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdCOztJQUVBLElBQUtELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBTUwsU0FBUyxDQUFDUSxJQUFJLEdBQUcsRUFBRyxFQUFFO01BQ3hDUixTQUFTLENBQUNRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3Qjs7SUFFQSxJQUFLSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQU1MLFNBQVMsQ0FBQ1EsSUFBSSxHQUFHUixTQUFTLENBQUNKLE1BQU0sQ0FBQ2EsTUFBTSxHQUFDLEVBQUcsRUFBRTtNQUN0RVQsU0FBUyxDQUFDUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekI7O0lBR0EsS0FBSSxJQUFJTixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELFdBQVcsQ0FBQ1MsTUFBTSxFQUFFUixDQUFDLEVBQUUsRUFBQztNQUN2QyxJQUFJUyxVQUFVLEdBQUdWLFdBQVcsQ0FBQ0MsQ0FBQyxDQUFDO01BRS9CLElBQUlTLFVBQVUsQ0FBQ0gsSUFBSSxHQUFHRyxVQUFVLENBQUNmLE1BQU0sQ0FBQ2EsTUFBTSxFQUFDO1FBQzNDLElBQU9FLFVBQVUsQ0FBQ0gsSUFBSSxJQUFJUixTQUFTLENBQUNRLElBQUksR0FBQyxFQUFFLElBQU1HLFVBQVUsQ0FBQ0gsSUFBSSxJQUFJUixTQUFTLENBQUNRLElBQUssSUFDOUVHLFVBQVUsQ0FBQ0wsSUFBSSxJQUFJTixTQUFTLENBQUNNLElBQUksR0FBQyxFQUFFLElBQU1LLFVBQVUsQ0FBQ0wsSUFBSSxJQUFJTixTQUFTLENBQUNNLElBQUksR0FBQyxFQUFJLEVBQUU7VUFFbkZaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO1VBQzlCZ0IsVUFBVSxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLE1BQU07VUFDSEQsVUFBVSxDQUFDSCxJQUFJLElBQUksQ0FBQztVQUNwQkcsVUFBVSxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUN0QjtNQUNKLENBQUMsTUFBTTtRQUNILElBQUlDLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0NMLFVBQVUsQ0FBQ00sTUFBTSxDQUFDQyxHQUFHLEdBQUksZ0JBQWVMLE9BQVEsTUFBSztRQUNyREYsVUFBVSxDQUFDTCxJQUFJLEdBQUdRLElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSXBCLE1BQU0sQ0FBQ1csS0FBSyxHQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO1FBQzdESSxVQUFVLENBQUNILElBQUksR0FBR00sSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFFLEdBQUc7TUFDdkQ7SUFDSjs7SUFFQTtJQUNBaEIsU0FBUyxDQUFDWSxLQUFLLENBQUMsQ0FBQztFQUNyQjtFQUVBLE1BQU1QLElBQUksR0FBRyxDQUFDLENBQUM7O0VBRWY7RUFDQWIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FDckIsU0FBUyxFQUNSMEIsS0FBSyxJQUFLO0lBQ1BkLElBQUksQ0FBQ2MsS0FBSyxDQUFDQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztFQUM3QixDQUNKLENBQUM7RUFDRDtFQUNBNUIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FDckIsT0FBTyxFQUNOMEIsS0FBSyxJQUFLO0lBQ1BkLElBQUksQ0FBQ2MsS0FBSyxDQUFDQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztFQUM5QixDQUNKLENBQUM7O0VBRUQ7RUFDQSxTQUFTQyxJQUFJQSxDQUFBLEVBQUU7SUFDWDtJQUNBQyxxQkFBcUIsQ0FBQ0QsSUFBSSxDQUFDO0lBQzNCO0lBQ0F2QixPQUFPLENBQUN5QixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTNCLE1BQU0sQ0FBQ1csS0FBSyxFQUFFWCxNQUFNLENBQUNhLE1BQU0sQ0FBQztJQUNwREwsT0FBTyxDQUFDLENBQUM7RUFDYjs7RUFFQTtFQUNBaUIsSUFBSSxDQUFDLENBQUM7QUFFVixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3JxdWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vc2NyaXB0cy9wbGF5ZXJDYXInO1xuaW1wb3J0IENvbXBldGl0b3IgZnJvbSAnLi9zY3JpcHRzL2NvbXBldGl0b3InO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGluZGV4LmpzIScpXG5cbiAgICAvLyBnZXRpaW5nIGNhbnZhc1xuICAgIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKTtcbiAgICBjb25zdCBjb250ZXh0ID0gc2NyZWVuLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIC8vIGNyZWF0aW5nIHBsYXllciBjYXJcbiAgICBjb25zdCBwbGF5ZXJDYXIgPSBuZXcgUGxheWVyKHNjcmVlbiwgY29udGV4dCk7XG5cbiAgICAvLyBjcmVhdGluZyBjb21wZXRpdG9ycyBjYXJzIDUgd2l0aCByYW5kb20gcG9zaXRpb25zXG5cbiAgICBjb25zdCBjb21wZXRpdG9ycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXsgLy8gbWF5YmUgcmVmYWN0b3IgaW5zaWRlIGZvciBsb29wIGZvciBjb2xsaXNpb24gbG9naWNcbiAgICAgICAgY29tcGV0aXRvcnMucHVzaChuZXcgQ29tcGV0aXRvcihzY3JlZW4sIGNvbnRleHQpKTtcbiAgICB9XG4gICAgXG5cbiAgICBmdW5jdGlvbiBydW5HYW1lKCl7XG5cbiAgICAgICAgaWYgKChrZXlzW1wiQXJyb3dSaWdodFwiXSkgJiYgKHBsYXllckNhci5jYXJYIDwgKHBsYXllckNhci5zY3JlZW4ud2lkdGggLSA2NSkpKSB7IFxuICAgICAgICAgICAgICAgIHBsYXllckNhci5jYXJYICs9IDU7IC8vIHJpZ2h0IG1vdmVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoa2V5c1tcIkFycm93TGVmdFwiXSkgJiYgKHBsYXllckNhci5jYXJYID4gMTApKSB7IFxuICAgICAgICAgICAgICAgIHBsYXllckNhci5jYXJYIC09IDU7IC8vIGxlZnQgbW92ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChrZXlzW1wiQXJyb3dVcFwiXSkgJiYgKHBsYXllckNhci5jYXJZID4gMTApKSB7IFxuICAgICAgICAgICAgICAgIHBsYXllckNhci5jYXJZIC09IDU7IC8vIG1vdmUgdXAgd2l0aCBzcGVlZCA1IGZvciBub3dcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoa2V5c1tcIkFycm93RG93blwiXSkgJiYgKHBsYXllckNhci5jYXJZIDwgcGxheWVyQ2FyLnNjcmVlbi5oZWlnaHQtOTApKSB7IFxuICAgICAgICAgICAgcGxheWVyQ2FyLmNhclkgKz0gNTsgLy8gbW92ZSBkb3duXG4gICAgICAgIH1cblxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb21wZXRpdG9ycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY3VycmVudENhciA9IGNvbXBldGl0b3JzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudENhci5jYXJZIDwgY3VycmVudENhci5zY3JlZW4uaGVpZ2h0KXtcbiAgICAgICAgICAgICAgICBpZiAoICgoY3VycmVudENhci5jYXJZID49IHBsYXllckNhci5jYXJZLTkwKSAmJiAoY3VycmVudENhci5jYXJZIDw9IHBsYXllckNhci5jYXJZKSlcbiAgICAgICAgICAgICAgICAmJiAoKGN1cnJlbnRDYXIuY2FyWCA+PSBwbGF5ZXJDYXIuY2FyWC00NSkgJiYgKGN1cnJlbnRDYXIuY2FyWCA8PSBwbGF5ZXJDYXIuY2FyWCs0NSkpICl7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCBhbm90aGVyIGNhcicpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FyLmRyaXZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhci5jYXJZICs9IDM7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXIuZHJpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCByYW5kSW1nID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICAgICAgICAgICAgY3VycmVudENhci5jYXJJbWcuc3JjID0gYHJlc291cmNlcy9jYXIke3JhbmRJbWd9LnBuZ2A7XG4gICAgICAgICAgICAgICAgY3VycmVudENhci5jYXJYID0gTWF0aC5yYW5kb20oKSAqIChzY3JlZW4ud2lkdGgtNjUgLSAxMCkgKyAxMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FyLmNhclkgPSBNYXRoLnJhbmRvbSgpICogKC0yMDAgLSAxMDApIC0yMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkcmF3IHBsYXllcnMgY2FyXG4gICAgICAgIHBsYXllckNhci5kcml2ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGtleXMgPSB7fTtcblxuICAgIC8vIGFkZCBsaXN0ZW5lciBmb3Iga2V5RG93biBwcm9jZXNzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgIChldmVudCkgPT4ge1xuICAgICAgICAgICAga2V5c1tldmVudC5jb2RlXSA9IHRydWU7IC8vIHtBcnJvd1JpZ2h0OiBmYWxzZX0gb3IgYW5vdGhlciBhcnJvd1xuICAgICAgICB9XG4gICAgKTtcbiAgICAvLyBhZGQgbGlzdGVuZXIgZm9yIGtleVVwIHByb2Nlc3NcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImtleXVwXCIsXG4gICAgICAgIChldmVudCkgPT4ge1xuICAgICAgICAgICAga2V5c1tldmVudC5jb2RlXSA9IGZhbHNlOyAvLyB7QXJyb3dVcDogdHJ1ZX1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBsb2dpYyBmb3IgbWFpbiBnYW1lIGxvb3BcbiAgICBmdW5jdGlvbiBwbGF5KCl7XG4gICAgICAgIC8vIG91ciBhbmltYXRpb24gYmFzaWNzXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShwbGF5KTtcbiAgICAgICAgLy8gY2xlYXIgY2FudmFzIGJlZm9yZSBuZXh0IGZyYW1lXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNjcmVlbi53aWR0aCwgc2NyZWVuLmhlaWdodCk7XG4gICAgICAgIHJ1bkdhbWUoKTtcbiAgICB9XG5cbiAgICAvLyBzdGFydCBvZiB0aGUgZ2FtZVxuICAgIHBsYXkoKTtcblxufSkiXSwibmFtZXMiOlsiUGxheWVyIiwiQ29tcGV0aXRvciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJzY3JlZW4iLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGxheWVyQ2FyIiwiY29tcGV0aXRvcnMiLCJpIiwicHVzaCIsInJ1bkdhbWUiLCJrZXlzIiwiY2FyWCIsIndpZHRoIiwiY2FyWSIsImhlaWdodCIsImxlbmd0aCIsImN1cnJlbnRDYXIiLCJkcml2ZSIsInJhbmRJbWciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjYXJJbWciLCJzcmMiLCJldmVudCIsImNvZGUiLCJwbGF5IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/competitor.js":
/*!***********************************!*\
  !*** ./src/scripts/competitor.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Competitor {\n  constructor(screen, context) {\n    const competitorImg = new Image();\n    let randImg = Math.floor(Math.random() * 4);\n    competitorImg.src = `resources/car${randImg}.png`;\n    this.carImg = competitorImg;\n    this.carX = Math.random() * (screen.width - 65 - 10) + 10; // add randomized starting x pos\n    this.carY = Math.random() * (-200 - 100) - 200; // add random y pos\n    this.width = 55;\n    this.height = 90;\n    this.context = context;\n    this.screen = screen;\n  }\n  drive() {\n    this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Competitor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb21wZXRpdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVLENBQUM7RUFDYkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFQyxPQUFPLEVBQUM7SUFDeEIsTUFBTUMsYUFBYSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLElBQUlDLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0NMLGFBQWEsQ0FBQ00sR0FBRyxHQUFJLGdCQUFlSixPQUFRLE1BQUs7SUFDakQsSUFBSSxDQUFDSyxNQUFNLEdBQUdQLGFBQWE7SUFFM0IsSUFBSSxDQUFDUSxJQUFJLEdBQUdMLElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSVAsTUFBTSxDQUFDVyxLQUFLLEdBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELElBQUksQ0FBQ0MsSUFBSSxHQUFHUCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDSSxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0UsTUFBTSxHQUFHLEVBQUU7SUFFaEIsSUFBSSxDQUFDWixPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDRCxNQUFNLEdBQUdBLE1BQU07RUFDeEI7RUFFQWMsS0FBS0EsQ0FBQSxFQUFFO0lBQ0gsSUFBSSxDQUFDYixPQUFPLENBQUNjLFNBQVMsQ0FBQyxJQUFJLENBQUNOLE1BQU0sRUFBRSxJQUFJLENBQUNDLElBQUksRUFBRSxJQUFJLENBQUNFLElBQUksRUFBRSxJQUFJLENBQUNELEtBQUssRUFBRSxJQUFJLENBQUNFLE1BQU0sQ0FBQztFQUN0RjtBQUNKO0FBRUEsK0RBQWVmLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3JxdWUvLi9zcmMvc2NyaXB0cy9jb21wZXRpdG9yLmpzP2IxMDkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29tcGV0aXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2NyZWVuLCBjb250ZXh0KXtcbiAgICAgICAgY29uc3QgY29tcGV0aXRvckltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgcmFuZEltZyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICBjb21wZXRpdG9ySW1nLnNyYyA9IGByZXNvdXJjZXMvY2FyJHtyYW5kSW1nfS5wbmdgO1xuICAgICAgICB0aGlzLmNhckltZyA9IGNvbXBldGl0b3JJbWc7XG5cbiAgICAgICAgdGhpcy5jYXJYID0gTWF0aC5yYW5kb20oKSAqIChzY3JlZW4ud2lkdGgtNjUgLSAxMCkgKyAxMDsgLy8gYWRkIHJhbmRvbWl6ZWQgc3RhcnRpbmcgeCBwb3NcbiAgICAgICAgdGhpcy5jYXJZID0gTWF0aC5yYW5kb20oKSAqICgtMjAwIC0gMTAwKSAtMjAwOyAvLyBhZGQgcmFuZG9tIHkgcG9zXG4gICAgICAgIHRoaXMud2lkdGggPSA1NTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA5MDtcblxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcbiAgICB9XG5cbiAgICBkcml2ZSgpe1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuY2FySW1nLCB0aGlzLmNhclgsIHRoaXMuY2FyWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGV0aXRvcjsiXSwibmFtZXMiOlsiQ29tcGV0aXRvciIsImNvbnN0cnVjdG9yIiwic2NyZWVuIiwiY29udGV4dCIsImNvbXBldGl0b3JJbWciLCJJbWFnZSIsInJhbmRJbWciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcmMiLCJjYXJJbWciLCJjYXJYIiwid2lkdGgiLCJjYXJZIiwiaGVpZ2h0IiwiZHJpdmUiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/competitor.js\n");

/***/ }),

/***/ "./src/scripts/playerCar.js":
/*!**********************************!*\
  !*** ./src/scripts/playerCar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor(screen, context) {\n    const playerCarImg = new Image();\n    playerCarImg.src = \"resources/playerCarImage.png\";\n    this.carImg = playerCarImg;\n    this.carX = 320;\n    this.carY = 600;\n    this.width = 55;\n    this.height = 90;\n    this.context = context;\n    this.screen = screen;\n  }\n\n  // simple reDraw\n  drive() {\n    this.context.drawImage(this.carImg, this.carX, this.carY, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXJDYXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUN6QixNQUFNQyxZQUFZLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDaENELFlBQVksQ0FBQ0UsR0FBRyxHQUFHLDhCQUE4QjtJQUNqRCxJQUFJLENBQUNDLE1BQU0sR0FBR0gsWUFBWTtJQUUxQixJQUFJLENBQUNJLElBQUksR0FBRyxHQUFHO0lBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUcsR0FBRztJQUNmLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBRWhCLElBQUksQ0FBQ1IsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0VBQ3hCOztFQUVBO0VBQ0FVLEtBQUtBLENBQUEsRUFBRTtJQUNILElBQUksQ0FBQ1QsT0FBTyxDQUFDVSxTQUFTLENBQUMsSUFBSSxDQUFDTixNQUFNLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7RUFDdEY7QUFFSjtBQUVBLCtEQUFlWCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9ycXVlLy4vc3JjL3NjcmlwdHMvcGxheWVyQ2FyLmpzP2I0ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY3JlZW4sIGNvbnRleHQpIHsgXG4gICAgICAgIGNvbnN0IHBsYXllckNhckltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXJDYXJJbWcuc3JjID0gXCJyZXNvdXJjZXMvcGxheWVyQ2FySW1hZ2UucG5nXCI7XG4gICAgICAgIHRoaXMuY2FySW1nID0gcGxheWVyQ2FySW1nO1xuXG4gICAgICAgIHRoaXMuY2FyWCA9IDMyMDtcbiAgICAgICAgdGhpcy5jYXJZID0gNjAwO1xuICAgICAgICB0aGlzLndpZHRoID0gNTU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gOTA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcbiAgICB9XG5cbiAgICAvLyBzaW1wbGUgcmVEcmF3XG4gICAgZHJpdmUoKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmNhckltZywgdGhpcy5jYXJYLCB0aGlzLmNhclksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsInNjcmVlbiIsImNvbnRleHQiLCJwbGF5ZXJDYXJJbWciLCJJbWFnZSIsInNyYyIsImNhckltZyIsImNhclgiLCJjYXJZIiwid2lkdGgiLCJoZWlnaHQiLCJkcml2ZSIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/playerCar.js\n");

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