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

/***/ "./src/modules/mobileNav.js":
/*!**********************************!*\
  !*** ./src/modules/mobileNav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mobileNav)
/* harmony export */ });
function mobileNav() {
  // Toggle mobile navigation (modal) when hamburger button is clicked
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileNavContainer = document.getElementById("mobileNavContainer");
  const closeBtn = document.getElementById("closeBtn");
  closeBtn.addEventListener("click", () => {
    mobileNavContainer.close();
    mobileNavContainer.style.display = "none";
  });
  hamburgerBtn.addEventListener("click", () => {
    if (mobileNavContainer.open) {
      mobileNavContainer.close();
      mobileNavContainer.style.display = "none";
    } else {
      mobileNavContainer.showModal();
      mobileNavContainer.style.display = "grid";
    }
  });
  const navItems = document.querySelectorAll(".mobile-nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      if (mobileNavContainer.open) {
        mobileNavContainer.close();
        mobileNavContainer.style.display = "none";
      }
    });
  });
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
/* harmony import */ var _modules_mobileNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mobileNav */ "./src/modules/mobileNav.js");




document.addEventListener("DOMContentLoaded", () => {
  (0,_modules_cursor__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_navFollower__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mobileNav__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VixRQUFRLEdBQUcvQixRQUFRLENBQUNnQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7RUFDdkRELFFBQVEsQ0FBQ0UsT0FBTyxDQUFFQyxJQUFJLElBQUs7SUFDekJBLElBQUksQ0FBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ25DeUIsWUFBWSxDQUFDRixJQUFJLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0o7Ozs7Ozs7Ozs7O0FDL0NBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNjO0FBQ0E7QUFDSjtBQUU1Q2xDLFFBQVEsQ0FBQ1csZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRGIsMkRBQWdCLENBQUMsQ0FBQztFQUNsQnFDLGdFQUFXLENBQUMsQ0FBQztFQUNiWiw4REFBUyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tb2R1bGVzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbW9kdWxlcy9tb2JpbGVOYXYuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21vZHVsZXMvbmF2Rm9sbG93ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZ1bmN0aW9uIHRvIGluaXRpYWxpemUgY3Vyc29yIGZ1bmN0aW9uYWxpdHlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVDdXJzb3IoKSB7XG4gIGNvbnN0IG1haW5DdXJzb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5DdXJzb3JcIik7XG4gIGNvbnN0IHNlY29uZGFyeUN1cnNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kYXJ5Q3Vyc29yXCIpO1xuICBjb25zdCBwb3NpdGlvblJlZiA9IHtcbiAgICBtb3VzZVg6IDAsXG4gICAgbW91c2VZOiAwLFxuICAgIGRlc3RpbmF0aW9uWDogMCxcbiAgICBkZXN0aW5hdGlvblk6IDAsXG4gICAgZGlzdGFuY2VYOiAwLFxuICAgIGRpc3RhbmNlWTogMCxcbiAgICBrZXk6IC0xLFxuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XG4gICAgY29uc3QgbW91c2VYID0gY2xpZW50WDtcbiAgICBjb25zdCBtb3VzZVkgPSBjbGllbnRZO1xuXG4gICAgcG9zaXRpb25SZWYubW91c2VYID0gbW91c2VYIC0gc2Vjb25kYXJ5Q3Vyc29yLmNsaWVudFdpZHRoIC8gMjtcbiAgICBwb3NpdGlvblJlZi5tb3VzZVkgPSBtb3VzZVkgLSBzZWNvbmRhcnlDdXJzb3IuY2xpZW50SGVpZ2h0IC8gMjtcblxuICAgIG1haW5DdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7XG4gICAgICBtb3VzZVggLSBtYWluQ3Vyc29yLmNsaWVudFdpZHRoIC8gMlxuICAgIH1weCwgJHttb3VzZVkgLSBtYWluQ3Vyc29yLmNsaWVudEhlaWdodCAvIDJ9cHgsIDApYDtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZm9sbG93TW91c2UoKSB7XG4gICAgcG9zaXRpb25SZWYua2V5ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZvbGxvd01vdXNlKTtcblxuICAgIGNvbnN0IHsgbW91c2VYLCBtb3VzZVksIGRlc3RpbmF0aW9uWCwgZGVzdGluYXRpb25ZLCBkaXN0YW5jZVgsIGRpc3RhbmNlWSB9ID1cbiAgICAgIHBvc2l0aW9uUmVmO1xuXG4gICAgaWYgKCFkZXN0aW5hdGlvblggfHwgIWRlc3RpbmF0aW9uWSkge1xuICAgICAgcG9zaXRpb25SZWYuZGVzdGluYXRpb25YID0gbW91c2VYO1xuICAgICAgcG9zaXRpb25SZWYuZGVzdGluYXRpb25ZID0gbW91c2VZO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvblJlZi5kaXN0YW5jZVggPSAobW91c2VYIC0gZGVzdGluYXRpb25YKSAqIDAuMztcbiAgICAgIHBvc2l0aW9uUmVmLmRpc3RhbmNlWSA9IChtb3VzZVkgLSBkZXN0aW5hdGlvblkpICogMC4zO1xuXG4gICAgICBpZiAoXG4gICAgICAgIE1hdGguYWJzKHBvc2l0aW9uUmVmLmRpc3RhbmNlWCkgKyBNYXRoLmFicyhwb3NpdGlvblJlZi5kaXN0YW5jZVkpIDxcbiAgICAgICAgMC4xXG4gICAgICApIHtcbiAgICAgICAgcG9zaXRpb25SZWYuZGVzdGluYXRpb25YID0gbW91c2VYO1xuICAgICAgICBwb3NpdGlvblJlZi5kZXN0aW5hdGlvblkgPSBtb3VzZVk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvblJlZi5kZXN0aW5hdGlvblggKz0gZGlzdGFuY2VYO1xuICAgICAgICBwb3NpdGlvblJlZi5kZXN0aW5hdGlvblkgKz0gZGlzdGFuY2VZO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlY29uZGFyeUN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtkZXN0aW5hdGlvblh9cHgsICR7ZGVzdGluYXRpb25ZfXB4LCAwIClgO1xuICB9XG5cbiAgZm9sbG93TW91c2UoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vYmlsZU5hdigpIHtcbiAgLy8gVG9nZ2xlIG1vYmlsZSBuYXZpZ2F0aW9uIChtb2RhbCkgd2hlbiBoYW1idXJnZXIgYnV0dG9uIGlzIGNsaWNrZWRcbiAgY29uc3QgaGFtYnVyZ2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJCdG5cIik7XG4gIGNvbnN0IG1vYmlsZU5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlTmF2Q29udGFpbmVyXCIpO1xuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VCdG5cIik7XG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2JpbGVOYXZDb250YWluZXIuY2xvc2UoKTtcbiAgICBtb2JpbGVOYXZDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBoYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAobW9iaWxlTmF2Q29udGFpbmVyLm9wZW4pIHtcbiAgICAgIG1vYmlsZU5hdkNvbnRhaW5lci5jbG9zZSgpO1xuICAgICAgbW9iaWxlTmF2Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9iaWxlTmF2Q29udGFpbmVyLnNob3dNb2RhbCgpO1xuICAgICAgbW9iaWxlTmF2Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2JpbGUtbmF2LWl0ZW1cIik7XG4gIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAobW9iaWxlTmF2Q29udGFpbmVyLm9wZW4pIHtcbiAgICAgICAgbW9iaWxlTmF2Q29udGFpbmVyLmNsb3NlKCk7XG4gICAgICAgIG1vYmlsZU5hdkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2Rm9sbG93ZXIoKSB7XG4gIC8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBhY3RpdmUgY2xhc3NcbiAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlKHNlbGVjdGVkSXRlbSkge1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbVwiKTtcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgIHNlbGVjdGVkSXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gY2hhbmdlIGFjdGl2ZSBjbGFzcyBiYXNlZCBvbiBzY3JvbGwgcG9zaXRpb25cbiAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlQnlTY3JvbGwoKSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xuXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xuICAgICAgY29uc3Qgc2VjdGlvbkJvdHRvbSA9IHNlY3Rpb25Ub3AgKyBzZWN0aW9uLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaHJlZj1cIiMke3NlY3Rpb24uaWR9XCJdIGxpYCk7XG5cbiAgICAgIC8vIEFkanVzdCBmb3Igc2VjdGlvbiBwYWRkaW5nXG4gICAgICBjb25zdCBwYWRkaW5nVG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5wYWRkaW5nVG9wLCAxMCk7XG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tID0gcGFyc2VJbnQoXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikucGFkZGluZ0JvdHRvbSxcbiAgICAgICAgMTAsXG4gICAgICApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIG5hdkl0ZW0gJiZcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPj0gc2VjdGlvblRvcCAtIHBhZGRpbmdUb3AgJiZcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPD0gc2VjdGlvbkJvdHRvbSAtIHBhZGRpbmdCb3R0b21cbiAgICAgICkge1xuICAgICAgICBjaGFuZ2VBY3RpdmUobmF2SXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBFdmVudCBsaXN0ZW5lciBmb3Igc2Nyb2xsIGV2ZW50c1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICBjaGFuZ2VBY3RpdmVCeVNjcm9sbCgpO1xuICB9KTtcblxuICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgbmF2aWdhdGlvbiBpdGVtc1xuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWl0ZW1cIik7XG4gIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VBY3RpdmUoaXRlbSk7XG4gICAgfSk7XG4gIH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgaW5pdGlhbGl6ZUN1cnNvciBmcm9tIFwiLi9tb2R1bGVzL2N1cnNvclwiO1xuaW1wb3J0IG5hdkZvbGxvd2VyIGZyb20gXCIuL21vZHVsZXMvbmF2Rm9sbG93ZXJcIjtcbmltcG9ydCBtb2JpbGVOYXYgZnJvbSBcIi4vbW9kdWxlcy9tb2JpbGVOYXZcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBpbml0aWFsaXplQ3Vyc29yKCk7XG4gIG5hdkZvbGxvd2VyKCk7XG4gIG1vYmlsZU5hdigpO1xufSk7XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUN1cnNvciIsIm1haW5DdXJzb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Vjb25kYXJ5Q3Vyc29yIiwicG9zaXRpb25SZWYiLCJtb3VzZVgiLCJtb3VzZVkiLCJkZXN0aW5hdGlvblgiLCJkZXN0aW5hdGlvblkiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJrZXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImZvbGxvd01vdXNlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiTWF0aCIsImFicyIsIm1vYmlsZU5hdiIsImhhbWJ1cmdlckJ0biIsIm1vYmlsZU5hdkNvbnRhaW5lciIsImNsb3NlQnRuIiwiY2xvc2UiLCJkaXNwbGF5Iiwib3BlbiIsInNob3dNb2RhbCIsIm5hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwibmF2Rm9sbG93ZXIiLCJjaGFuZ2VBY3RpdmUiLCJzZWxlY3RlZEl0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjaGFuZ2VBY3RpdmVCeVNjcm9sbCIsInNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsInNlY3Rpb25zIiwic2VjdGlvbiIsInNlY3Rpb25Ub3AiLCJvZmZzZXRUb3AiLCJzZWN0aW9uQm90dG9tIiwibmF2SXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsInBhZGRpbmdUb3AiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJwYWRkaW5nQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==