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
  var gridStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      gutter: 4,
      xs: 2,
      md: 3
    };
  }, []);
  var loadMoreStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      textAlign: 'center',
      margin: '10px 0'
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: style,
    grid: gridStyle,
    size: "small",
    header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }, _this),
    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: loadMoreStyle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        children: "\uB354 \uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 50
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
            lineNumber: 23,
            columnNumber: 37
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
            description: item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(FollowList, "PX7JGIKzG3Gs5e3UFt7LIdjLlzI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwic3R5bGUiLCJ1c2VNZW1vIiwibWFyZ2luQm90dG9tIiwiZ3JpZFN0eWxlIiwiZ3V0dGVyIiwieHMiLCJtZCIsImxvYWRNb3JlU3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJpdGVtIiwibWFyZ2luVG9wIiwibmlja25hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDckMsTUFBTUMsS0FBSyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTztBQUFDQyxrQkFBWSxFQUFFO0FBQWYsS0FBUDtBQUFBLEdBQUQsRUFBNkIsRUFBN0IsQ0FBckI7QUFDQSxNQUFNQyxTQUFTLEdBQUdGLHFEQUFPLENBQUM7QUFBQSxXQUFPO0FBQUVHLFlBQU0sRUFBRSxDQUFWO0FBQWFDLFFBQUUsRUFBRSxDQUFqQjtBQUFvQkMsUUFBRSxFQUFFO0FBQXhCLEtBQVA7QUFBQSxHQUFELEVBQXNDLEVBQXRDLENBQXpCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHTixxREFBTyxDQUFDO0FBQUEsV0FBTztBQUFDTyxlQUFTLEVBQUUsUUFBWjtBQUFzQkMsWUFBTSxFQUFFO0FBQTlCLEtBQVA7QUFBQSxHQUFELEVBQWtELEVBQWxELENBQTdCO0FBR0Esc0JBQ0kscUVBQUMseUNBQUQ7QUFDSSxTQUFLLEVBQUVULEtBRFg7QUFFSSxRQUFJLEVBQUVHLFNBRlY7QUFHSSxRQUFJLEVBQUMsT0FIVDtBQUlJLFVBQU0sZUFBRTtBQUFBLGdCQUFNTDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKWjtBQUtJLFlBQVEsZUFBRTtBQUFLLFdBQUssRUFBRVMsYUFBWjtBQUFBLDZCQUEyQixxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTGQ7QUFNSSxZQUFRLE1BTlo7QUFPSSxjQUFVLEVBQUVSLElBUGhCO0FBUUksY0FBVSxFQUFFLG9CQUFDVyxJQUFEO0FBQUEsMEJBQ1IscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBSyxFQUFFO0FBQUVDLG1CQUFTLEVBQUU7QUFBYixTQUFsQjtBQUFBLCtCQUNJLHFFQUFDLHlDQUFEO0FBQU0saUJBQU8sRUFBRSxjQUFDLHFFQUFDLHdFQUFELE1BQWtCLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUQsQ0FBZjtBQUFBLGlDQUNJLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLHVCQUFXLEVBQUVELElBQUksQ0FBQ0U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQTtBQVJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0F4QkQ7O0dBQU1mLFU7O0tBQUFBLFU7QUEwQk5BLFVBQVUsQ0FBQ2dCLFNBQVgsR0FBdUI7QUFDbkJmLFFBQU0sRUFBRWdCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47QUFFbkJqQixNQUFJLEVBQUVlLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkgsQ0FBdkI7QUFLZW5CLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuOTRmMmI0ZjVkNGU2MTMwNzMyY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIExpc3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU3RvcE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7bWFyZ2luQm90dG9tOiAyMH0pLCBbXSk7XHJcbiAgICBjb25zdCBncmlkU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH0pLCBbXSk7XHJcbiAgICBjb25zdCBsb2FkTW9yZVN0eWxlID0gdXNlTWVtbygoKSA9PiAoe3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCd9KSwgW10pO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICBncmlkPXtncmlkU3R5bGV9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cclxuICAgICAgICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e2xvYWRNb3JlU3R5bGV9PjxCdXR0b24+642UIOuztOq4sDwvQnV0dG9uPjwvZGl2Pn1cclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiAvPl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=