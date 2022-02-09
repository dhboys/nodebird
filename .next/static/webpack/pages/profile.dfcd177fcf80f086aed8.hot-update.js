webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/lib/icons */ "./node_modules/@ant-design/icons/lib/icons/index.js");
/* harmony import */ var _ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\dhboys\\react-nodebird\\prepare\\front\\components\\FollowList.js",
    _this = undefined,
    _s = $RefreshSig$();







var FollowList = function FollowList(_ref) {
  _s();

  var header = _ref.header,
      data = _ref.data;
  var style = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      marginBottom: 20
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: style,
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }, _this),
    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        children: "\uB354 \uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 76
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 23
    }, _this),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        style: {
          marginTop: 20
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_2__["StopOutlined"], {}, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 37
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
            description: item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_s(FollowList, "03TOej/Atx47IHUj0GasUXSIbAc=");

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwic3R5bGUiLCJ1c2VNZW1vIiwibWFyZ2luQm90dG9tIiwiZ3V0dGVyIiwieHMiLCJtZCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIml0ZW0iLCJtYXJnaW5Ub3AiLCJuaWNrbmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNyQyxNQUFNQyxLQUFLLEdBQUdDLHFEQUFPLENBQUM7QUFBQSxXQUFPO0FBQUNDLGtCQUFZLEVBQUU7QUFBZixLQUFQO0FBQUEsR0FBRCxFQUE2QixFQUE3QixDQUFyQjtBQUVBLHNCQUNJLHFFQUFDLHlDQUFEO0FBQ0ksU0FBSyxFQUFFRixLQURYO0FBRUksUUFBSSxFQUFFO0FBQUVHLFlBQU0sRUFBRSxDQUFWO0FBQWFDLFFBQUUsRUFBRSxDQUFqQjtBQUFvQkMsUUFBRSxFQUFFO0FBQXhCLEtBRlY7QUFHSSxRQUFJLEVBQUMsT0FIVDtBQUlJLFVBQU0sZUFBRTtBQUFBLGdCQUFNUDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKWjtBQUtJLFlBQVEsZUFBRTtBQUFLLFdBQUssRUFBRTtBQUFDUSxpQkFBUyxFQUFFLFFBQVo7QUFBc0JDLGNBQU0sRUFBRTtBQUE5QixPQUFaO0FBQUEsNkJBQXFELHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMZDtBQU1JLFlBQVEsTUFOWjtBQU9JLGNBQVUsRUFBRVIsSUFQaEI7QUFRSSxjQUFVLEVBQUUsb0JBQUNTLElBQUQ7QUFBQSwwQkFDUixxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQWxCO0FBQUEsK0JBQ0kscUVBQUMseUNBQUQ7QUFBTSxpQkFBTyxFQUFFLGNBQUMscUVBQUMsd0VBQUQsTUFBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRCxDQUFmO0FBQUEsaUNBQ0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsdUJBQVcsRUFBRUQsSUFBSSxDQUFDRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBO0FBUmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtCSCxDQXJCRDs7R0FBTWIsVTs7S0FBQUEsVTtBQXVCTkEsVUFBVSxDQUFDYyxTQUFYLEdBQXVCO0FBQ25CYixRQUFNLEVBQUVjLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47QUFFbkJmLE1BQUksRUFBRWEsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGSCxDQUF2QjtBQUtlakIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5kZmNkMTc3ZmNmODBmMDg2YWVkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgTGlzdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgRm9sbG93TGlzdCA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHttYXJnaW5Cb3R0b206IDIwfSksIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgIGdyaWQ9e3sgZ3V0dGVyOiA0LCB4czogMiwgbWQ6IDMgfX1cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgICAgICAgICBsb2FkTW9yZT17PGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCd9fT48QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj48L2Rpdj59XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgLz5dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9