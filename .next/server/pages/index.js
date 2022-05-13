"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/header.js":
/*!*************************!*\
  !*** ./pages/header.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \" test \"\n    }, void 0, false, {\n        fileName: \"/Users/srilokh/Library/CloudStorage/Box-Box/Projects/Portfolio-Website/pages/header.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxTQUFTQSxNQUFNLEdBQUU7SUFDYixxQkFDSSw4REFBQ0MsR0FBQztrQkFBQyxRQUFNOzs7OztZQUFJLENBQ2hCO0NBQ0o7QUFFRCxpRUFBZUQsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vcGFnZXMvaGVhZGVyLmpzP2Y5YjkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSGVhZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHA+IHRlc3QgPC9wPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIkhlYWRlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/header.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./pages/header.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(\"github\")\n                    ,\n                    children: \"Sign Out\"\n                }, void 0, false, {\n                    fileName: \"/Users/srilokh/Library/CloudStorage/Box-Box/Projects/Portfolio-Website/pages/index.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/srilokh/Library/CloudStorage/Box-Box/Projects/Portfolio-Website/pages/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"github\")\n                ,\n                children: \"Sign in with Github\"\n            }, void 0, false, {\n                fileName: \"/Users/srilokh/Library/CloudStorage/Box-Box/Projects/Portfolio-Website/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/srilokh/Library/CloudStorage/Box-Box/Projects/Portfolio-Website/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBRStCO0FBQ1o7QUFFakMsU0FBU0ssSUFBSSxHQUFHO0lBQzdCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEdBQUUsR0FBR04sMkRBQVUsRUFBRTtJQUV0QyxJQUFHTSxPQUFPLEVBQUM7UUFDVCxxQkFFSTs7OEJBQ0EsOERBQUNDLFFBQU07b0JBQUNDLE9BQU8sRUFBRSxJQUFNTix3REFBTyxDQUFDLFFBQVEsQ0FBQztvQkFBQTs4QkFBRSxVQUFROzs7Ozt3QkFBUzs4QkFDM0QsOERBQUNILCtDQUFNOzs7O3dCQUFHOzt3QkFDUCxDQUNOO0tBQ0Y7SUFDRCxxQkFDRTs7MEJBQ0ksOERBQUNRLFFBQU07Z0JBQUNDLE9BQU8sRUFBRSxJQUFNUCx1REFBTSxDQUFDLFFBQVEsQ0FBQztnQkFBQTswQkFBRSxxQkFBbUI7Ozs7O29CQUFTOzBCQUNyRSw4REFBQ0YsK0NBQU07Ozs7b0JBQUc7O29CQUNQLENBQ1I7Q0FFRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuXG5pbXBvcnQge3VzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IEdpdEh1YiBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1Yic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGlmKHNlc3Npb24pe1xuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgICAgPD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KFwiZ2l0aHViXCIpfT5TaWduIE91dDwvYnV0dG9uPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbiAgfVxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oXCJnaXRodWJcIil9PlNpZ24gaW4gd2l0aCBHaXRodWI8L2J1dHRvbj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8Lz5cbiAgKVxuXG59Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwiR2l0SHViIiwiSG9tZSIsImRhdGEiLCJzZXNzaW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();