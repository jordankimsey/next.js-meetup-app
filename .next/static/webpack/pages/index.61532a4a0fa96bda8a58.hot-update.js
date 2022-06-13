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
        name: "description",
        content: ""
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
      lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBU0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0tBN0JTRixROztBQW9ETUEsdUVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MTUzMmE0YTBmYTk2YmRhOGE1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PScnLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy9wcm9zXHJcbi8vZXhjdXRlcyBmaXJzdCBkdXJpbmcgYnVpbGQgcHJvY2Vzcywgbm90IGV4Y3V0ZSBvbiBjbGllbnQgc2lkZVxyXG4vL2FsbG93cyB1cyB0byByZW1vdmUgdXNlZWZmZWN0IGFuZCB1c2VzdGF0ZVxyXG4vLyBzZXRzIHByb3BzIHRoZW4gcmV0dXJuIGV2ZXJ5dGhpbmcsIGdyZWF0IGZvciBTRU8gdG8gaGF2ZSBldmVyeXRoaW5nIGxvYWRlZCBpbnRvIGFwcFxyXG4vL2ZldGNoIGRhdGEgZnJvbSBhbiBBUEkgb3IgcmVhZCBmaWxlcyBmcm9tIGZpbGVzeXN0ZW1cclxuLy9tdXN0IHJldHVybiBvYmplY3QgYW5kIHVzdWFsbHkgc2V0IHByb3BzIHByb3Blcml0eVxyXG4vL29wdGlvbmFsIGZvciB3aGF0IHdlIGNhbGwgaW5zaWRlIHByb3BzIG9iamVjdFxyXG4vL2NhbiBvbmx5IGJlIGNhbGxlZCBpbiBwYWdlc1xyXG5cclxuLy9jb25zXHJcbi8vY291bGQgYmUgb3V0ZGF0ZWQgZGF0YSwgZ2VuZXJhdGVkIGR1cmluZyBidWlsZCBwcm9jZXNzXHJcbi8vaWYgd2UgaGF2ZSBtb3JlIG1lZXR1cHMgdGhlbiB3ZSB3b3VsZG50IHNlZSBuZXcgb25lcyBjcmVhdGVkXHJcblxyXG4vL3NvbHV0aW9uXHJcbi8vd2UgY2FuIHBhc3MgaW4gcmV2YWxpZGF0ZSB0byByZWJ1aWxkIHNpdGUgdG8gZmV0Y2ggY3VycmVudCBkYXRhIGV2ZXJ5IF9fIHNlY29uZHMgb24gc2VydmVyXHJcbi8vZmFzdGVyIGFsbG93cyBmb3IgY2FjaGluZyBvbiBjZG4gaW5zdGVhZCBvZiByZWdlbmVyYXRpbmcgZXZlcnl0aW1lXHJcblxyXG4vL3RoaXMgY29kZSBpc250IHJ1biBvbiBjbGllbnQgc28gd2UgY2FuIHdyaXRlIHNlcnZlciBjb2RlIGhlcmUgdG8gY2FsbCBvdXIgb3duIGFwaSB3aXRob3V0IGhhdmluZyB0byBmZXRjaCBvdXRzaWRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvL2ZldGNoIGRhdGEgZnJvbSBvdXIgQVBJIHdpdGhvdXQgY2FsbGluZyBmZXRjaCBvciB1c2luZyBheGlvc1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAnbW9uZ29kYitzcnY6Ly9qb3JkYW4xMjM0OmpvcmRhbjEyMzRAY2x1c3RlcjAub3RtZTIubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICB9KSksXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbi8vQWx0ZXJuYXRpdmUgdG8gZ2V0U3RhdGljUHJvcHMoKSwgbm90IGJlc3QgY2hvaWNlIGluIHRoaXMgY2FzZVxyXG4vL2RvZXMgbm90IHJ1biBkdXJpbmcgYnVpbGQgcHJvY2VzcyBidXQgaW5zdGVhZCBhbHdheXMgb24gc2VydmVyIGFmdGVyIGRlcGxveW1lbnRcclxuLy9ydW5zIGZvciBldmVyeSByZXF1ZXN0XHJcbi8vaWRlYWwgaWYgeW91IG5lZWQgYWNjZXNzIHRvIHJlcSwgcmVzIGFuZCBkYXRhIHVwZGF0ZXMgbXVsdGlwbGUgdGltZXMgcGVyIHNlY29uZFxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICAvL29wdGlvbmFsIHByb3AgYWNjZXNzaWJsZSBjYWxsZWQgY29udGV4dFxyXG4vLyAgIC8vaGF2ZSBhY2Nlc3MgdG8gcmVxIGFuZCByZXMgb2YgcmVxdWVzdHMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgdGhlIHNlcnZlciBzaWRlIHByb3BzIG9yIGF1dGggYW5kIGNvb2tpZXNcclxuLy8gICAvL2RvbnQgcmV0dXJuIHJlcyBvYmplY3QgYnV0IHByb3BzIG9iamVjdCBpbnN0ZWFkXHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgIC8vZmV0Y2ggZGF0YSBmcm9tIEFQSSBvciBmaWxlc3lzdGVtXHJcbi8vICAgLy9vbmx5IHJ1bnMgb24gc2VydmVyXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFNcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAnbTEnLFxyXG4vLyAgICAgdGl0bGU6ICdGaXJzdCBtZWV0dXAnLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMjA4MzE2NTE5NS0zNDI0ZWQxMjk2MjA/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTk5NyZxPTgwJyxcclxuLy8gICAgIGFkZHJlc3M6ICcxMjM0NSBCcm9va2x5biBzdCBOZXcgWW9yaywgTmV3IFlvcmsnLFxyXG4vLyAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIG91ciBmaXJzdCBtZWV0IHVwJyxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAnbTInLFxyXG4vLyAgICAgdGl0bGU6ICdTZWNvbmQgbWVldHVwJyxcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTcyMDk4MDY4OTgtMmJlMGEwY2FmNTE5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05OTcmcT04MCcsXHJcbi8vICAgICBhZGRyZXNzOiAnMTIzNDUgQnJvb2tseW4gc3QgTmV3IFlvcmssIE5ldyBZb3JrJyxcclxuLy8gICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBvdXIgc2Vjb25kIG1lZXQgdXAnLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=