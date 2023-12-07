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

/***/ "./src/modules/navFollower.js":
/*!************************************!*\
  !*** ./src/modules/navFollower.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navFollower)
/* harmony export */ });
function navFollower() {
  // function to change active class
  function changeActive(selectedItem) {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => item.classList.remove("active"));
    selectedItem.classList.add("active");
  }

  // Function to change active class based on scroll position
  function changeActiveByScroll() {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;
      const navItem = document.querySelector(`[href="#${section.id}"] li`);

      // Adjust for section padding
      const paddingTop = parseInt(getComputedStyle(section).paddingTop, 10);
      const paddingBottom = parseInt(getComputedStyle(section).paddingBottom, 10);
      if (navItem && scrollPosition >= sectionTop - paddingTop && scrollPosition <= sectionBottom - paddingBottom) {
        changeActive(navItem);
      }
    });
  }

  // Event listener for scroll events
  document.addEventListener("scroll", () => {
    changeActiveByScroll();
  });

  // Event listener for navigation items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      changeActive(item);
    });
  });
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
/* harmony import */ var _modules_navFollower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navFollower */ "./src/modules/navFollower.js");



document.addEventListener("DOMContentLoaded", () => {
  (0,_modules_cursor__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_navFollower__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsQ0FBQztFQUN2REQsUUFBUSxDQUFDRSxPQUFPLENBQUVDLElBQUksSUFBSztJQUN6QkEsSUFBSSxDQUFDbEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDbkNhLFlBQVksQ0FBQ0ssSUFBSSxDQUFDO0lBQ3BCLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKOzs7Ozs7Ozs7OztBQy9DQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNjO0FBQ0E7QUFFaEQ3QixRQUFRLENBQUNXLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDbERiLDJEQUFnQixDQUFDLENBQUM7RUFDbEJ5QixnRUFBVyxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tb2R1bGVzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbW9kdWxlcy9uYXZGb2xsb3dlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSBjdXJzb3IgZnVuY3Rpb25hbGl0eVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZUN1cnNvcigpIHtcbiAgY29uc3QgbWFpbkN1cnNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkN1cnNvclwiKTtcbiAgY29uc3Qgc2Vjb25kYXJ5Q3Vyc29yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRhcnlDdXJzb3JcIik7XG4gIGNvbnN0IHBvc2l0aW9uUmVmID0ge1xuICAgIG1vdXNlWDogMCxcbiAgICBtb3VzZVk6IDAsXG4gICAgZGVzdGluYXRpb25YOiAwLFxuICAgIGRlc3RpbmF0aW9uWTogMCxcbiAgICBkaXN0YW5jZVg6IDAsXG4gICAgZGlzdGFuY2VZOiAwLFxuICAgIGtleTogLTEsXG4gIH07XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZTtcbiAgICBjb25zdCBtb3VzZVggPSBjbGllbnRYO1xuICAgIGNvbnN0IG1vdXNlWSA9IGNsaWVudFk7XG5cbiAgICBwb3NpdGlvblJlZi5tb3VzZVggPSBtb3VzZVggLSBzZWNvbmRhcnlDdXJzb3IuY2xpZW50V2lkdGggLyAyO1xuICAgIHBvc2l0aW9uUmVmLm1vdXNlWSA9IG1vdXNlWSAtIHNlY29uZGFyeUN1cnNvci5jbGllbnRIZWlnaHQgLyAyO1xuXG4gICAgbWFpbkN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtcbiAgICAgIG1vdXNlWCAtIG1haW5DdXJzb3IuY2xpZW50V2lkdGggLyAyXG4gICAgfXB4LCAke21vdXNlWSAtIG1haW5DdXJzb3IuY2xpZW50SGVpZ2h0IC8gMn1weCwgMClgO1xuICB9KTtcblxuICBmdW5jdGlvbiBmb2xsb3dNb3VzZSgpIHtcbiAgICBwb3NpdGlvblJlZi5rZXkgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm9sbG93TW91c2UpO1xuXG4gICAgY29uc3QgeyBtb3VzZVgsIG1vdXNlWSwgZGVzdGluYXRpb25YLCBkZXN0aW5hdGlvblksIGRpc3RhbmNlWCwgZGlzdGFuY2VZIH0gPVxuICAgICAgcG9zaXRpb25SZWY7XG5cbiAgICBpZiAoIWRlc3RpbmF0aW9uWCB8fCAhZGVzdGluYXRpb25ZKSB7XG4gICAgICBwb3NpdGlvblJlZi5kZXN0aW5hdGlvblggPSBtb3VzZVg7XG4gICAgICBwb3NpdGlvblJlZi5kZXN0aW5hdGlvblkgPSBtb3VzZVk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uUmVmLmRpc3RhbmNlWCA9IChtb3VzZVggLSBkZXN0aW5hdGlvblgpICogMC4zO1xuICAgICAgcG9zaXRpb25SZWYuZGlzdGFuY2VZID0gKG1vdXNlWSAtIGRlc3RpbmF0aW9uWSkgKiAwLjM7XG5cbiAgICAgIGlmIChcbiAgICAgICAgTWF0aC5hYnMocG9zaXRpb25SZWYuZGlzdGFuY2VYKSArIE1hdGguYWJzKHBvc2l0aW9uUmVmLmRpc3RhbmNlWSkgPFxuICAgICAgICAwLjFcbiAgICAgICkge1xuICAgICAgICBwb3NpdGlvblJlZi5kZXN0aW5hdGlvblggPSBtb3VzZVg7XG4gICAgICAgIHBvc2l0aW9uUmVmLmRlc3RpbmF0aW9uWSA9IG1vdXNlWTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uUmVmLmRlc3RpbmF0aW9uWCArPSBkaXN0YW5jZVg7XG4gICAgICAgIHBvc2l0aW9uUmVmLmRlc3RpbmF0aW9uWSArPSBkaXN0YW5jZVk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2Vjb25kYXJ5Q3Vyc29yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke2Rlc3RpbmF0aW9uWH1weCwgJHtkZXN0aW5hdGlvbll9cHgsIDAgKWA7XG4gIH1cblxuICBmb2xsb3dNb3VzZSgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2Rm9sbG93ZXIoKSB7XG4gIC8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBhY3RpdmUgY2xhc3NcbiAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlKHNlbGVjdGVkSXRlbSkge1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbVwiKTtcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgIHNlbGVjdGVkSXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gY2hhbmdlIGFjdGl2ZSBjbGFzcyBiYXNlZCBvbiBzY3JvbGwgcG9zaXRpb25cbiAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlQnlTY3JvbGwoKSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xuXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xuICAgICAgY29uc3Qgc2VjdGlvbkJvdHRvbSA9IHNlY3Rpb25Ub3AgKyBzZWN0aW9uLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaHJlZj1cIiMke3NlY3Rpb24uaWR9XCJdIGxpYCk7XG5cbiAgICAgIC8vIEFkanVzdCBmb3Igc2VjdGlvbiBwYWRkaW5nXG4gICAgICBjb25zdCBwYWRkaW5nVG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5wYWRkaW5nVG9wLCAxMCk7XG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tID0gcGFyc2VJbnQoXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikucGFkZGluZ0JvdHRvbSxcbiAgICAgICAgMTAsXG4gICAgICApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIG5hdkl0ZW0gJiZcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPj0gc2VjdGlvblRvcCAtIHBhZGRpbmdUb3AgJiZcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPD0gc2VjdGlvbkJvdHRvbSAtIHBhZGRpbmdCb3R0b21cbiAgICAgICkge1xuICAgICAgICBjaGFuZ2VBY3RpdmUobmF2SXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBFdmVudCBsaXN0ZW5lciBmb3Igc2Nyb2xsIGV2ZW50c1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICBjaGFuZ2VBY3RpdmVCeVNjcm9sbCgpO1xuICB9KTtcblxuICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgbmF2aWdhdGlvbiBpdGVtc1xuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWl0ZW1cIik7XG4gIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VBY3RpdmUoaXRlbSk7XG4gICAgfSk7XG4gIH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgaW5pdGlhbGl6ZUN1cnNvciBmcm9tIFwiLi9tb2R1bGVzL2N1cnNvclwiO1xuaW1wb3J0IG5hdkZvbGxvd2VyIGZyb20gXCIuL21vZHVsZXMvbmF2Rm9sbG93ZXJcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBpbml0aWFsaXplQ3Vyc29yKCk7XG4gIG5hdkZvbGxvd2VyKClcbn0pO1xuIl0sIm5hbWVzIjpbImluaXRpYWxpemVDdXJzb3IiLCJtYWluQ3Vyc29yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlY29uZGFyeUN1cnNvciIsInBvc2l0aW9uUmVmIiwibW91c2VYIiwibW91c2VZIiwiZGVzdGluYXRpb25YIiwiZGVzdGluYXRpb25ZIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwia2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJmb2xsb3dNb3VzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIk1hdGgiLCJhYnMiLCJuYXZGb2xsb3dlciIsImNoYW5nZUFjdGl2ZSIsInNlbGVjdGVkSXRlbSIsIm5hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY2hhbmdlQWN0aXZlQnlTY3JvbGwiLCJzY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJzZWN0aW9ucyIsInNlY3Rpb24iLCJzZWN0aW9uVG9wIiwib2Zmc2V0VG9wIiwic2VjdGlvbkJvdHRvbSIsIm5hdkl0ZW0iLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJwYWRkaW5nVG9wIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFkZGluZ0JvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=