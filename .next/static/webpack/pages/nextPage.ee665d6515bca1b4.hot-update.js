"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/nextPage",{

/***/ "./components/PageCard.jsx":
/*!*********************************!*\
  !*** ./components/PageCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\nconst PageCard = (param)=>/*#__PURE__*/ {\n    let { imgUrl , title , subtitle , index  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_1__.fadeIn)(\"up\", \"spring\", index * 0.5, 1),\n        className: \"flex md:flex-row flex-col gap-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-half flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 md:ml-[31px] flex flex-col max-w-[125px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"font-normal lg:text-[20px] text-[13px] text-white\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/vatsalajha/Documents/HackcorruptionProject/HC/HC/components/PageCard.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-[4px] font-normal lg:text-[5px] text-[5px] text-secondary-white\",\n                            children: subtitle\n                        }, void 0, false, {\n                            fileName: \"/Users/vatsalajha/Documents/HackcorruptionProject/HC/HC/components/PageCard.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vatsalajha/Documents/HackcorruptionProject/HC/HC/components/PageCard.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:flex hidden items-center justify-center w-[25px] h-[25px] rounded-full bg-transparent border-[1px] border-white\"\n                }, void 0, false, {\n                    fileName: \"/Users/vatsalajha/Documents/HackcorruptionProject/HC/HC/components/PageCard.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vatsalajha/Documents/HackcorruptionProject/HC/HC/components/PageCard.jsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vatsalajha/Documents/HackcorruptionProject/HC/HC/components/PageCard.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = PageCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageCard);\nvar _c;\n$RefreshReg$(_c, \"PageCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFdUM7QUFFRTtBQUV6QyxNQUFNRSxXQUFXLHVCQUNmO1FBRGdCLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRTtXQUNsRCw4REFBQ04scURBQVU7UUFDVFEsVUFBVVAscURBQU1BLENBQUMsTUFBTSxVQUFVSyxRQUFRLEtBQUs7UUFDOUNHLFdBQVU7a0JBT1YsNEVBQUNGO1lBQUlFLFdBQVU7OzhCQUNiLDhEQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUNYTDs7Ozs7O3NDQUVILDhEQUFDTzs0QkFBRUYsV0FBVTtzQ0FDVko7Ozs7Ozs7Ozs7Ozs4QkFJTCw4REFBQ0U7b0JBQ0NFLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0o7S0E5QlJQO0FBaUNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnZUNhcmQuanN4P2VmZmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuaW1wb3J0IHsgZmFkZUluIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuY29uc3QgUGFnZUNhcmQgPSAoeyBpbWdVcmwsIHRpdGxlLCBzdWJ0aXRsZSwgaW5kZXggfSkgPT4gKFxuICA8bW90aW9uLmRpdlxuICAgIHZhcmlhbnRzPXtmYWRlSW4oJ3VwJywgJ3NwcmluZycsIGluZGV4ICogMC41LCAxKX1cbiAgICBjbGFzc05hbWU9XCJmbGV4IG1kOmZsZXgtcm93IGZsZXgtY29sIGdhcC00XCJcbiAgPlxuICAgIHsvKiA8aW1nXG4gICAgICBzcmM9e2ltZ1VybH1cbiAgICAgIGFsdD1cInBsYW5ldC0wMVwiXG4gICAgICBjbGFzc05hbWU9XCJtZDp3LVsyNzBweF0gdy1mdWxsIGgtWzI1MHB4XSByb3VuZGVkLVszMnB4XSBvYmplY3QtY292ZXJcIlxuICAgIC8+ICovfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1oYWxmIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6bWwtWzMxcHhdIGZsZXggZmxleC1jb2wgbWF4LXctWzEyNXB4XVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgbGc6dGV4dC1bMjBweF0gdGV4dC1bMTNweF0gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtWzRweF0gZm9udC1ub3JtYWwgbGc6dGV4dC1bNXB4XSB0ZXh0LVs1cHhdIHRleHQtc2Vjb25kYXJ5LXdoaXRlXCI+XG4gICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJsZzpmbGV4IGhpZGRlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1bMjVweF0gaC1bMjVweF0gcm91bmRlZC1mdWxsIGJnLXRyYW5zcGFyZW50IGJvcmRlci1bMXB4XSBib3JkZXItd2hpdGVcIlxuICAgICAgPlxuICAgICAgICB7LyogPGltZ1xuICAgICAgICAgIHNyYz1cIi9hcnJvdy5zdmdcIlxuICAgICAgICAgIGFsdD1cImFycm93XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs0MCVdIGgtWzQwJV0gb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ2FyZDtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJmYWRlSW4iLCJQYWdlQ2FyZCIsImltZ1VybCIsInRpdGxlIiwic3VidGl0bGUiLCJpbmRleCIsImRpdiIsInZhcmlhbnRzIiwiY2xhc3NOYW1lIiwiaDQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PageCard.jsx\n"));

/***/ })

});