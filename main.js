/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/cursor.js":
/*!*******************************!*\
  !*** ./src/modules/cursor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeCursor)
/* harmony export */ });
// cursor.js

// function to initialize cursor functionality
function initializeCursor() {
  const mainCursor = document.getElementById("mainCursor");
  const secondaryCursor = document.getElementById("secondaryCursor");
  const positionRef = {
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  };
  document.addEventListener("mousemove", e => {
    const {
      clientX,
      clientY
    } = e;
    const mouseX = clientX;
    const mouseY = clientY;
    positionRef.mouseX = mouseX - secondaryCursor.clientWidth / 2;
    positionRef.mouseY = mouseY - secondaryCursor.clientHeight / 2;
    mainCursor.style.transform = `translate3d(${mouseX - mainCursor.clientWidth / 2}px, ${mouseY - mainCursor.clientHeight / 2}px, 0)`;
  });
  function followMouse() {
    positionRef.key = requestAnimationFrame(followMouse);
    const {
      mouseX,
      mouseY,
      destinationX,
      destinationY,
      distanceX,
      distanceY
    } = positionRef;
    if (!destinationX || !destinationY) {
      positionRef.destinationX = mouseX;
      positionRef.destinationY = mouseY;
    } else {
      positionRef.distanceX = (mouseX - destinationX) * 0.3;
      positionRef.distanceY = (mouseY - destinationY) * 0.3;
      if (Math.abs(positionRef.distanceX) + Math.abs(positionRef.distanceY) < 0.1) {
        positionRef.destinationX = mouseX;
        positionRef.destinationY = mouseY;
      } else {
        positionRef.destinationX += distanceX;
        positionRef.destinationY += distanceY;
      }
    }
    secondaryCursor.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0 )`;
  }
  followMouse();
}

/***/ }),

/***/ "./src/stylesheets/styles.css":
/*!************************************!*\
  !*** ./src/stylesheets/styles.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/styles.css */ "./src/stylesheets/styles.css");
/* harmony import */ var _modules_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cursor */ "./src/modules/cursor.js");
// main.js




// function to change active class
function changeActive(selectedItem) {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => item.classList.remove("active"));
  selectedItem.classList.add("active");
}
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    changeActive(item);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  (0,_modules_cursor__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ2UsU0FBU0EsZ0JBQWdCQSxDQUFBLEVBQUc7RUFDekMsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDeEQsTUFBTUMsZUFBZSxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztFQUNsRSxNQUFNRSxXQUFXLEdBQUc7SUFDbEJDLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLFlBQVksRUFBRSxDQUFDO0lBQ2ZDLFlBQVksRUFBRSxDQUFDO0lBQ2ZDLFNBQVMsRUFBRSxDQUFDO0lBQ1pDLFNBQVMsRUFBRSxDQUFDO0lBQ1pDLEdBQUcsRUFBRSxDQUFDO0VBQ1IsQ0FBQztFQUVEVixRQUFRLENBQUNXLGdCQUFnQixDQUFDLFdBQVcsRUFBR0MsQ0FBQyxJQUFLO0lBQzVDLE1BQU07TUFBRUMsT0FBTztNQUFFQztJQUFRLENBQUMsR0FBR0YsQ0FBQztJQUM5QixNQUFNUixNQUFNLEdBQUdTLE9BQU87SUFDdEIsTUFBTVIsTUFBTSxHQUFHUyxPQUFPO0lBRXRCWCxXQUFXLENBQUNDLE1BQU0sR0FBR0EsTUFBTSxHQUFHRixlQUFlLENBQUNhLFdBQVcsR0FBRyxDQUFDO0lBQzdEWixXQUFXLENBQUNFLE1BQU0sR0FBR0EsTUFBTSxHQUFHSCxlQUFlLENBQUNjLFlBQVksR0FBRyxDQUFDO0lBRTlEakIsVUFBVSxDQUFDa0IsS0FBSyxDQUFDQyxTQUFTLEdBQUksZUFDNUJkLE1BQU0sR0FBR0wsVUFBVSxDQUFDZ0IsV0FBVyxHQUFHLENBQ25DLE9BQU1WLE1BQU0sR0FBR04sVUFBVSxDQUFDaUIsWUFBWSxHQUFHLENBQUUsUUFBTztFQUNyRCxDQUFDLENBQUM7RUFFRixTQUFTRyxXQUFXQSxDQUFBLEVBQUc7SUFDckJoQixXQUFXLENBQUNPLEdBQUcsR0FBR1UscUJBQXFCLENBQUNELFdBQVcsQ0FBQztJQUVwRCxNQUFNO01BQUVmLE1BQU07TUFBRUMsTUFBTTtNQUFFQyxZQUFZO01BQUVDLFlBQVk7TUFBRUMsU0FBUztNQUFFQztJQUFVLENBQUMsR0FDeEVOLFdBQVc7SUFFYixJQUFJLENBQUNHLFlBQVksSUFBSSxDQUFDQyxZQUFZLEVBQUU7TUFDbENKLFdBQVcsQ0FBQ0csWUFBWSxHQUFHRixNQUFNO01BQ2pDRCxXQUFXLENBQUNJLFlBQVksR0FBR0YsTUFBTTtJQUNuQyxDQUFDLE1BQU07TUFDTEYsV0FBVyxDQUFDSyxTQUFTLEdBQUcsQ0FBQ0osTUFBTSxHQUFHRSxZQUFZLElBQUksR0FBRztNQUNyREgsV0FBVyxDQUFDTSxTQUFTLEdBQUcsQ0FBQ0osTUFBTSxHQUFHRSxZQUFZLElBQUksR0FBRztNQUVyRCxJQUNFYyxJQUFJLENBQUNDLEdBQUcsQ0FBQ25CLFdBQVcsQ0FBQ0ssU0FBUyxDQUFDLEdBQUdhLElBQUksQ0FBQ0MsR0FBRyxDQUFDbkIsV0FBVyxDQUFDTSxTQUFTLENBQUMsR0FDakUsR0FBRyxFQUNIO1FBQ0FOLFdBQVcsQ0FBQ0csWUFBWSxHQUFHRixNQUFNO1FBQ2pDRCxXQUFXLENBQUNJLFlBQVksR0FBR0YsTUFBTTtNQUNuQyxDQUFDLE1BQU07UUFDTEYsV0FBVyxDQUFDRyxZQUFZLElBQUlFLFNBQVM7UUFDckNMLFdBQVcsQ0FBQ0ksWUFBWSxJQUFJRSxTQUFTO01BQ3ZDO0lBQ0Y7SUFFQVAsZUFBZSxDQUFDZSxLQUFLLENBQUNDLFNBQVMsR0FBSSxlQUFjWixZQUFhLE9BQU1DLFlBQWEsU0FBUTtFQUMzRjtFQUVBWSxXQUFXLENBQUMsQ0FBQztBQUNmOzs7Ozs7Ozs7OztBQzFEQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRWtDO0FBQ2M7O0FBRWhEO0FBQ0EsU0FBU0ksWUFBWUEsQ0FBQ0MsWUFBWSxFQUFFO0VBQ2xDLE1BQU1DLFFBQVEsR0FBR3pCLFFBQVEsQ0FBQzBCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztFQUN2REQsUUFBUSxDQUFDRSxPQUFPLENBQUVDLElBQUksSUFBS0EsSUFBSSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUMzRE4sWUFBWSxDQUFDSyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDdEM7QUFFQSxNQUFNTixRQUFRLEdBQUd6QixRQUFRLENBQUMwQixnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7QUFDdkRELFFBQVEsQ0FBQ0UsT0FBTyxDQUFFQyxJQUFJLElBQUs7RUFDekJBLElBQUksQ0FBQ2pCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ25DWSxZQUFZLENBQUNLLElBQUksQ0FBQztFQUNwQixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjVCLFFBQVEsQ0FBQ1csZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRGIsMkRBQWdCLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tb2R1bGVzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY3Vyc29yLmpzXG5cbi8vIGZ1bmN0aW9uIHRvIGluaXRpYWxpemUgY3Vyc29yIGZ1bmN0aW9uYWxpdHlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVDdXJzb3IoKSB7XG4gIGNvbnN0IG1haW5DdXJzb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5DdXJzb3JcIik7XG4gIGNvbnN0IHNlY29uZGFyeUN1cnNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kYXJ5Q3Vyc29yXCIpO1xuICBjb25zdCBwb3NpdGlvblJlZiA9IHtcbiAgICBtb3VzZVg6IDAsXG4gICAgbW91c2VZOiAwLFxuICAgIGRlc3RpbmF0aW9uWDogMCxcbiAgICBkZXN0aW5hdGlvblk6IDAsXG4gICAgZGlzdGFuY2VYOiAwLFxuICAgIGRpc3RhbmNlWTogMCxcbiAgICBrZXk6IC0xLFxuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XG4gICAgY29uc3QgbW91c2VYID0gY2xpZW50WDtcbiAgICBjb25zdCBtb3VzZVkgPSBjbGllbnRZO1xuXG4gICAgcG9zaXRpb25SZWYubW91c2VYID0gbW91c2VYIC0gc2Vjb25kYXJ5Q3Vyc29yLmNsaWVudFdpZHRoIC8gMjtcbiAgICBwb3NpdGlvblJlZi5tb3VzZVkgPSBtb3VzZVkgLSBzZWNvbmRhcnlDdXJzb3IuY2xpZW50SGVpZ2h0IC8gMjtcblxuICAgIG1haW5DdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7XG4gICAgICBtb3VzZVggLSBtYWluQ3Vyc29yLmNsaWVudFdpZHRoIC8gMlxuICAgIH1weCwgJHttb3VzZVkgLSBtYWluQ3Vyc29yLmNsaWVudEhlaWdodCAvIDJ9cHgsIDApYDtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZm9sbG93TW91c2UoKSB7XG4gICAgcG9zaXRpb25SZWYua2V5ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZvbGxvd01vdXNlKTtcblxuICAgIGNvbnN0IHsgbW91c2VYLCBtb3VzZVksIGRlc3RpbmF0aW9uWCwgZGVzdGluYXRpb25ZLCBkaXN0YW5jZVgsIGRpc3RhbmNlWSB9ID1cbiAgICAgIHBvc2l0aW9uUmVmO1xuXG4gICAgaWYgKCFkZXN0aW5hdGlvblggfHwgIWRlc3RpbmF0aW9uWSkge1xuICAgICAgcG9zaXRpb25SZWYuZGVzdGluYXRpb25YID0gbW91c2VYO1xuICAgICAgcG9zaXRpb25SZWYuZGVzdGluYXRpb25ZID0gbW91c2VZO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvblJlZi5kaXN0YW5jZVggPSAobW91c2VYIC0gZGVzdGluYXRpb25YKSAqIDAuMztcbiAgICAgIHBvc2l0aW9uUmVmLmRpc3RhbmNlWSA9IChtb3VzZVkgLSBkZXN0aW5hdGlvblkpICogMC4zO1xuXG4gICAgICBpZiAoXG4gICAgICAgIE1hdGguYWJzKHBvc2l0aW9uUmVmLmRpc3RhbmNlWCkgKyBNYXRoLmFicyhwb3NpdGlvblJlZi5kaXN0YW5jZVkpIDxcbiAgICAgICAgMC4xXG4gICAgICApIHtcbiAgICAgICAgcG9zaXRpb25SZWYuZGVzdGluYXRpb25YID0gbW91c2VYO1xuICAgICAgICBwb3NpdGlvblJlZi5kZXN0aW5hdGlvblkgPSBtb3VzZVk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvblJlZi5kZXN0aW5hdGlvblggKz0gZGlzdGFuY2VYO1xuICAgICAgICBwb3NpdGlvblJlZi5kZXN0aW5hdGlvblkgKz0gZGlzdGFuY2VZO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlY29uZGFyeUN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtkZXN0aW5hdGlvblh9cHgsICR7ZGVzdGluYXRpb25ZfXB4LCAwIClgO1xuICB9XG5cbiAgZm9sbG93TW91c2UoKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbWFpbi5qc1xuXG5pbXBvcnQgXCIuL3N0eWxlc2hlZXRzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBpbml0aWFsaXplQ3Vyc29yIGZyb20gXCIuL21vZHVsZXMvY3Vyc29yXCI7XG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBhY3RpdmUgY2xhc3NcbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZShzZWxlY3RlZEl0ZW0pIHtcbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1pdGVtXCIpO1xuICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICBzZWxlY3RlZEl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1pdGVtXCIpO1xubmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlQWN0aXZlKGl0ZW0pO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGluaXRpYWxpemVDdXJzb3IoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImluaXRpYWxpemVDdXJzb3IiLCJtYWluQ3Vyc29yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlY29uZGFyeUN1cnNvciIsInBvc2l0aW9uUmVmIiwibW91c2VYIiwibW91c2VZIiwiZGVzdGluYXRpb25YIiwiZGVzdGluYXRpb25ZIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwia2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJmb2xsb3dNb3VzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIk1hdGgiLCJhYnMiLCJjaGFuZ2VBY3RpdmUiLCJzZWxlY3RlZEl0ZW0iLCJuYXZJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=