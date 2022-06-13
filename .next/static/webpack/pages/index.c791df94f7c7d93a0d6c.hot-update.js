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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0EsWUFBSSxFQUFDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUEsa0JBREY7QUFZRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7S0FoQ1NGLFE7O0FBdURNQSx1RUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM3OTFkZjk0ZjdjN2Q5M2EwZDZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWVldHVwczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgXHJcbiAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vcHJvc1xyXG4vL2V4Y3V0ZXMgZmlyc3QgZHVyaW5nIGJ1aWxkIHByb2Nlc3MsIG5vdCBleGN1dGUgb24gY2xpZW50IHNpZGVcclxuLy9hbGxvd3MgdXMgdG8gcmVtb3ZlIHVzZWVmZmVjdCBhbmQgdXNlc3RhdGVcclxuLy8gc2V0cyBwcm9wcyB0aGVuIHJldHVybiBldmVyeXRoaW5nLCBncmVhdCBmb3IgU0VPIHRvIGhhdmUgZXZlcnl0aGluZyBsb2FkZWQgaW50byBhcHBcclxuLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJIG9yIHJlYWQgZmlsZXMgZnJvbSBmaWxlc3lzdGVtXHJcbi8vbXVzdCByZXR1cm4gb2JqZWN0IGFuZCB1c3VhbGx5IHNldCBwcm9wcyBwcm9wZXJpdHlcclxuLy9vcHRpb25hbCBmb3Igd2hhdCB3ZSBjYWxsIGluc2lkZSBwcm9wcyBvYmplY3RcclxuLy9jYW4gb25seSBiZSBjYWxsZWQgaW4gcGFnZXNcclxuXHJcbi8vY29uc1xyXG4vL2NvdWxkIGJlIG91dGRhdGVkIGRhdGEsIGdlbmVyYXRlZCBkdXJpbmcgYnVpbGQgcHJvY2Vzc1xyXG4vL2lmIHdlIGhhdmUgbW9yZSBtZWV0dXBzIHRoZW4gd2Ugd291bGRudCBzZWUgbmV3IG9uZXMgY3JlYXRlZFxyXG5cclxuLy9zb2x1dGlvblxyXG4vL3dlIGNhbiBwYXNzIGluIHJldmFsaWRhdGUgdG8gcmVidWlsZCBzaXRlIHRvIGZldGNoIGN1cnJlbnQgZGF0YSBldmVyeSBfXyBzZWNvbmRzIG9uIHNlcnZlclxyXG4vL2Zhc3RlciBhbGxvd3MgZm9yIGNhY2hpbmcgb24gY2RuIGluc3RlYWQgb2YgcmVnZW5lcmF0aW5nIGV2ZXJ5dGltZVxyXG5cclxuLy90aGlzIGNvZGUgaXNudCBydW4gb24gY2xpZW50IHNvIHdlIGNhbiB3cml0ZSBzZXJ2ZXIgY29kZSBoZXJlIHRvIGNhbGwgb3VyIG93biBhcGkgd2l0aG91dCBoYXZpbmcgdG8gZmV0Y2ggb3V0c2lkZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy9mZXRjaCBkYXRhIGZyb20gb3VyIEFQSSB3aXRob3V0IGNhbGxpbmcgZmV0Y2ggb3IgdXNpbmcgYXhpb3NcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgJ21vbmdvZGIrc3J2Oi8vam9yZGFuMTIzNDpqb3JkYW4xMjM0QGNsdXN0ZXIwLm90bWUyLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICBjbGllbnQuY2xvc2UoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgfSkpLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcblxyXG4vL0FsdGVybmF0aXZlIHRvIGdldFN0YXRpY1Byb3BzKCksIG5vdCBiZXN0IGNob2ljZSBpbiB0aGlzIGNhc2VcclxuLy9kb2VzIG5vdCBydW4gZHVyaW5nIGJ1aWxkIHByb2Nlc3MgYnV0IGluc3RlYWQgYWx3YXlzIG9uIHNlcnZlciBhZnRlciBkZXBsb3ltZW50XHJcbi8vcnVucyBmb3IgZXZlcnkgcmVxdWVzdFxyXG4vL2lkZWFsIGlmIHlvdSBuZWVkIGFjY2VzcyB0byByZXEsIHJlcyBhbmQgZGF0YSB1cGRhdGVzIG11bHRpcGxlIHRpbWVzIHBlciBzZWNvbmRcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgLy9vcHRpb25hbCBwcm9wIGFjY2Vzc2libGUgY2FsbGVkIGNvbnRleHRcclxuLy8gICAvL2hhdmUgYWNjZXNzIHRvIHJlcSBhbmQgcmVzIG9mIHJlcXVlc3RzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHRoZSBzZXJ2ZXIgc2lkZSBwcm9wcyBvciBhdXRoIGFuZCBjb29raWVzXHJcbi8vICAgLy9kb250IHJldHVybiByZXMgb2JqZWN0IGJ1dCBwcm9wcyBvYmplY3QgaW5zdGVhZFxyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAvL2ZldGNoIGRhdGEgZnJvbSBBUEkgb3IgZmlsZXN5c3RlbVxyXG4vLyAgIC8vb25seSBydW5zIG9uIHNlcnZlclxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTXHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuLy8gICB7XHJcbi8vICAgICBpZDogJ20xJyxcclxuLy8gICAgIHRpdGxlOiAnRmlyc3QgbWVldHVwJyxcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjIwODMxNjUxOTUtMzQyNGVkMTI5NjIwP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05OTcmcT04MCcsXHJcbi8vICAgICBhZGRyZXNzOiAnMTIzNDUgQnJvb2tseW4gc3QgTmV3IFlvcmssIE5ldyBZb3JrJyxcclxuLy8gICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBvdXIgZmlyc3QgbWVldCB1cCcsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogJ20yJyxcclxuLy8gICAgIHRpdGxlOiAnU2Vjb25kIG1lZXR1cCcsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE3MjA5ODA2ODk4LTJiZTBhMGNhZjUxOT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTk3JnE9ODAnLFxyXG4vLyAgICAgYWRkcmVzczogJzEyMzQ1IEJyb29rbHluIHN0IE5ldyBZb3JrLCBOZXcgWW9yaycsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgb3VyIHNlY29uZCBtZWV0IHVwJyxcclxuLy8gICB9LFxyXG4vLyBdO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9