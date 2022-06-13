webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\jordan.kimsey\\OneDrive - Accenture\\Desktop\\code\\next-meetup-app\\pages\\index.js";



function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} //pros
//excutes first during build process, not excute on client side
//allows us to remove useeffect and usestate
// sets props then return everything, great for SEO to have everything loaded into app
//fetch data from an API or read files from filesystem
//must return object and usually set props properity
//optional for what we call inside props object
//can only be called in pages
//cons
//could be outdated data, generated during build process
//if we have more meetups then we wouldnt see new ones created
//solution
//we can pass in revalidate to rebuild site to fetch current data every __ seconds on server
//faster allows for caching on cdn instead of regenerating everytime
//this code isnt run on client so we can write server code here to call our own api without having to fetch outside


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage); //Alternative to getStaticProps(), not best choice in this case
//does not run during build process but instead always on server after deployment
//runs for every request
//ideal if you need access to req, res and data updates multiple times per second
// export async function getServerSideProps(context) {
//   //optional prop accessible called context
//   //have access to req and res of requests that can be used for the server side props or auth and cookies
//   //dont return res object but props object instead
//   const req = context.req;
//   const res = context.res;
//   //fetch data from API or filesystem
//   //only runs on server
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }
// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'First meetup',
//     image:
//       'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80',
//     address: '12345 Brooklyn st New York, New York',
//     description: 'This is our first meet up',
//   },
//   {
//     id: 'm2',
//     title: 'Second meetup',
//     image:
//       'https://images.unsplash.com/photo-1517209806898-2be0a0caf519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80',
//     address: '12345 Brooklyn st New York, New York',
//     description: 'This is our second meet up',
//   },
// ];

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQVFELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztLQTVCU0YsUTs7QUFtRE1BLHVFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDNlNmM2NWRmMDcxZmU3N2IyZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SZWFjdCA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vL3Byb3NcclxuLy9leGN1dGVzIGZpcnN0IGR1cmluZyBidWlsZCBwcm9jZXNzLCBub3QgZXhjdXRlIG9uIGNsaWVudCBzaWRlXHJcbi8vYWxsb3dzIHVzIHRvIHJlbW92ZSB1c2VlZmZlY3QgYW5kIHVzZXN0YXRlXHJcbi8vIHNldHMgcHJvcHMgdGhlbiByZXR1cm4gZXZlcnl0aGluZywgZ3JlYXQgZm9yIFNFTyB0byBoYXZlIGV2ZXJ5dGhpbmcgbG9hZGVkIGludG8gYXBwXHJcbi8vZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSSBvciByZWFkIGZpbGVzIGZyb20gZmlsZXN5c3RlbVxyXG4vL211c3QgcmV0dXJuIG9iamVjdCBhbmQgdXN1YWxseSBzZXQgcHJvcHMgcHJvcGVyaXR5XHJcbi8vb3B0aW9uYWwgZm9yIHdoYXQgd2UgY2FsbCBpbnNpZGUgcHJvcHMgb2JqZWN0XHJcbi8vY2FuIG9ubHkgYmUgY2FsbGVkIGluIHBhZ2VzXHJcblxyXG4vL2NvbnNcclxuLy9jb3VsZCBiZSBvdXRkYXRlZCBkYXRhLCBnZW5lcmF0ZWQgZHVyaW5nIGJ1aWxkIHByb2Nlc3NcclxuLy9pZiB3ZSBoYXZlIG1vcmUgbWVldHVwcyB0aGVuIHdlIHdvdWxkbnQgc2VlIG5ldyBvbmVzIGNyZWF0ZWRcclxuXHJcbi8vc29sdXRpb25cclxuLy93ZSBjYW4gcGFzcyBpbiByZXZhbGlkYXRlIHRvIHJlYnVpbGQgc2l0ZSB0byBmZXRjaCBjdXJyZW50IGRhdGEgZXZlcnkgX18gc2Vjb25kcyBvbiBzZXJ2ZXJcclxuLy9mYXN0ZXIgYWxsb3dzIGZvciBjYWNoaW5nIG9uIGNkbiBpbnN0ZWFkIG9mIHJlZ2VuZXJhdGluZyBldmVyeXRpbWVcclxuXHJcbi8vdGhpcyBjb2RlIGlzbnQgcnVuIG9uIGNsaWVudCBzbyB3ZSBjYW4gd3JpdGUgc2VydmVyIGNvZGUgaGVyZSB0byBjYWxsIG91ciBvd24gYXBpIHdpdGhvdXQgaGF2aW5nIHRvIGZldGNoIG91dHNpZGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vZmV0Y2ggZGF0YSBmcm9tIG91ciBBUEkgd2l0aG91dCBjYWxsaW5nIGZldGNoIG9yIHVzaW5nIGF4aW9zXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICdtb25nb2RiK3NydjovL2pvcmRhbjEyMzQ6am9yZGFuMTIzNEBjbHVzdGVyMC5vdG1lMi5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5cclxuLy9BbHRlcm5hdGl2ZSB0byBnZXRTdGF0aWNQcm9wcygpLCBub3QgYmVzdCBjaG9pY2UgaW4gdGhpcyBjYXNlXHJcbi8vZG9lcyBub3QgcnVuIGR1cmluZyBidWlsZCBwcm9jZXNzIGJ1dCBpbnN0ZWFkIGFsd2F5cyBvbiBzZXJ2ZXIgYWZ0ZXIgZGVwbG95bWVudFxyXG4vL3J1bnMgZm9yIGV2ZXJ5IHJlcXVlc3RcclxuLy9pZGVhbCBpZiB5b3UgbmVlZCBhY2Nlc3MgdG8gcmVxLCByZXMgYW5kIGRhdGEgdXBkYXRlcyBtdWx0aXBsZSB0aW1lcyBwZXIgc2Vjb25kXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIC8vb3B0aW9uYWwgcHJvcCBhY2Nlc3NpYmxlIGNhbGxlZCBjb250ZXh0XHJcbi8vICAgLy9oYXZlIGFjY2VzcyB0byByZXEgYW5kIHJlcyBvZiByZXF1ZXN0cyB0aGF0IGNhbiBiZSB1c2VkIGZvciB0aGUgc2VydmVyIHNpZGUgcHJvcHMgb3IgYXV0aCBhbmQgY29va2llc1xyXG4vLyAgIC8vZG9udCByZXR1cm4gcmVzIG9iamVjdCBidXQgcHJvcHMgb2JqZWN0IGluc3RlYWRcclxuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuXHJcbi8vICAgLy9mZXRjaCBkYXRhIGZyb20gQVBJIG9yIGZpbGVzeXN0ZW1cclxuLy8gICAvL29ubHkgcnVucyBvbiBzZXJ2ZXJcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6ICdtMScsXHJcbi8vICAgICB0aXRsZTogJ0ZpcnN0IG1lZXR1cCcsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTIyMDgzMTY1MTk1LTM0MjRlZDEyOTYyMD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTk3JnE9ODAnLFxyXG4vLyAgICAgYWRkcmVzczogJzEyMzQ1IEJyb29rbHluIHN0IE5ldyBZb3JrLCBOZXcgWW9yaycsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgb3VyIGZpcnN0IG1lZXQgdXAnLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6ICdtMicsXHJcbi8vICAgICB0aXRsZTogJ1NlY29uZCBtZWV0dXAnLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNzIwOTgwNjg5OC0yYmUwYTBjYWY1MTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTk5NyZxPTgwJyxcclxuLy8gICAgIGFkZHJlc3M6ICcxMjM0NSBCcm9va2x5biBzdCBOZXcgWW9yaywgTmV3IFlvcmsnLFxyXG4vLyAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIG91ciBzZWNvbmQgbWVldCB1cCcsXHJcbi8vICAgfSxcclxuLy8gXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==