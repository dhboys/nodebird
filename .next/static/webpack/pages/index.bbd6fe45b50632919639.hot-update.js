webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/forms/LoginForm */ "./components/forms/LoginForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\dhboys\\react-nodebird\\prepare\\front\\components\\AppLayout.js",
    _this = undefined,
    _s = $RefreshSig$();










var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  var SearchInputStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      verticalAlign: 'middle;'
    };
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoggedIn = _useState[0],
      setIsLoggedIn = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
      mode: "horizontal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "\uB178\uB4DC\uBC84\uB4DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 39
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
          style: SearchInputStyle,
          enterButton: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 38
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      gutter: 8,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 6,
        children: isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
          setIsLoggedIn: setIsLoggedIn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 33
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
          setIsLoggedIn: setIsLoggedIn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 81
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 12,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 24,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
          href: "https://velog.io/@dhboys",
          target: "_blank",
          rel: "noreferrer noopener",
          children: "Made by dhboys"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);
};

_s(AppLayout, "ex+ZaCVcVX0ze3B05XkNbgnqZ/4=");

_c = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c;

$RefreshReg$(_c, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJTZWFyY2hJbnB1dFN0eWxlIiwidXNlTWVtbyIsInZlcnRpY2FsQWxpZ24iLCJ1c2VTdGF0ZSIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFJQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM5QixNQUFNQyxnQkFBZ0IsR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU87QUFBQ0MsbUJBQWEsRUFBRTtBQUFoQixLQUFQO0FBQUEsR0FBRCxFQUFvQyxFQUFwQyxDQUFoQzs7QUFDQSxrQkFBb0NDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0Esc0JBQ0k7QUFBQSw0QkFDRSxxRUFBQyx5Q0FBRDtBQUFNLFVBQUksRUFBQyxZQUFYO0FBQUEsOEJBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsK0JBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLCtCQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQU9FLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLCtCQUNJLHFFQUFDLDBDQUFELENBQU8sTUFBUDtBQUFjLGVBQUssRUFBRUwsZ0JBQXJCO0FBQXVDLHFCQUFXO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFVRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFlRSxxRUFBQyx3Q0FBRDtBQUFLLFlBQU0sRUFBRSxDQUFiO0FBQUEsOEJBQ0kscUVBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRSxDQUFqQjtBQUFBLGtCQUNLSSxVQUFVLGdCQUFHLHFFQUFDLG9EQUFEO0FBQWEsdUJBQWEsRUFBRUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxnQkFBbUQscUVBQUMsbUVBQUQ7QUFBVyx1QkFBYSxFQUFFQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJLHFFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsRUFBakI7QUFBQSxrQkFDS047QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFPSSxxRUFBQyx3Q0FBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQWEsVUFBRSxFQUFFLENBQWpCO0FBQUEsK0JBQ0k7QUFBRyxjQUFJLEVBQUMsMEJBQVI7QUFBbUMsZ0JBQU0sRUFBQyxRQUExQztBQUFtRCxhQUFHLEVBQUMscUJBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOEJILENBakNEOztHQUFNRCxTOztLQUFBQSxTO0FBbUNOQSxTQUFTLENBQUNRLFNBQVYsR0FBc0I7QUFDbEJQLFVBQVEsRUFBRVEsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURQLENBQXRCO0FBSWVYLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJiZDZmZTQ1YjUwNjMyOTE5NjM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1zL0xvZ2luRm9ybSc7XHJcblxyXG5cclxuICAgIFxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgU2VhcmNoSW5wdXRTdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHt2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlOyd9KSxbXSk7IFxyXG4gICAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PiAgXHJcbiAgICAgICAgICA8TWVudSBtb2RlPSdob3Jpem9udGFsJz5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+64W465Oc67KE65OcPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT5Qcm9maWxlPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+ICAgXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHN0eWxlPXtTZWFyY2hJbnB1dFN0eWxlfSBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT4gIFxyXG4gICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT5TaWduIFVwPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyA8VXNlclByb2ZpbGUgc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn0gLz4gOiA8TG9naW5Gb3JtIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59IC8+fVxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly92ZWxvZy5pby9AZGhib3lzJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub3JlZmVycmVyIG5vb3BlbmVyJz5NYWRlIGJ5IGRoYm95czwvYT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=