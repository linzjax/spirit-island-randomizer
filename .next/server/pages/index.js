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

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"thirteen\": \"Home_thirteen__cMI_k\",\n\t\"rotate\": \"Home_rotate____XsI\",\n\t\"content\": \"Home_content__Zy02X\",\n\t\"vercelLogo\": \"Home_vercelLogo__dtSk9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlyaXQtaXNsYW5kLXJhbmRvbWl6ZXIvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzJmZDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwiY2VudGVyXCI6IFwiSG9tZV9jZW50ZXJfXzRCRmdDXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIixcblx0XCJ0aGlydGVlblwiOiBcIkhvbWVfdGhpcnRlZW5fX2NNSV9rXCIsXG5cdFwicm90YXRlXCI6IFwiSG9tZV9yb3RhdGVfX19fWHNJXCIsXG5cdFwiY29udGVudFwiOiBcIkhvbWVfY29udGVudF9fWnkwMlhcIixcblx0XCJ2ZXJjZWxMb2dvXCI6IFwiSG9tZV92ZXJjZWxMb2dvX19kdFNrOVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var utils_choose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/choose */ \"./utils/choose.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nfunction Home() {\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        spirits: []\n    });\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setLoading(true);\n        setResults((0,utils_choose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            numberOfPlayers: 2,\n            includeBlightCard: true,\n            includeAdversary: true,\n            includeScenario: true\n        }));\n        setLoading(false);\n    }, {});\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \"Loading...\"\n    }, void 0, false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Spirit Island Game Randomizer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Spirit Island Game Randomizer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Spirit Island Game Randomizer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: \"Loading...\"\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Spirits\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: results.spirits.map((spirit)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            spirit.name,\n                                            spirit.aspect && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    \" - Aspect: \",\n                                                    spirit.aspect.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            results.blightCard && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Blight\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: results.blightCard.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true),\n                            results.adversary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Adversary\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: results.adversary.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true),\n                            results.scenario && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Scenario\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: results.scenario.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ljacks/personal/spirit-island/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPTUE7QUFQc0I7QUFHaUI7QUFDTjtBQUNJO0FBSTVCLFNBQVNNLE9BQU87SUFDN0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ3JDSyxTQUFTLEVBQUU7SUFDYjtJQUNBLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTlDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RNLFdBQVcsSUFBSTtRQUNmSCxXQUNFTCx3REFBWUEsQ0FBQztZQUNYUyxpQkFBaUI7WUFDakJDLG1CQUFtQixJQUFJO1lBQ3ZCQyxrQkFBa0IsSUFBSTtZQUN0QkMsaUJBQWlCLElBQUk7UUFDdkI7UUFFRkosV0FBVyxLQUFLO0lBQ2xCLEdBQUcsQ0FBQztJQUVKLElBQUlELFdBQVcscUJBQU87a0JBQUU7O0lBRXhCLHFCQUNFOzswQkFDRSw4REFBQ1Qsa0RBQUlBOztrQ0FDSCw4REFBQ2U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtDLFdBQVd0QixxRUFBVzs7a0NBQzFCLDhEQUFDdUI7a0NBQUc7Ozs7OztvQkFDSGYsMEJBQ0M7a0NBQUU7c0RBRUY7OzBDQUNFLDhEQUFDZ0I7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQ0VwQixRQUFRRSxPQUFPLENBQUNtQixHQUFHLENBQUMsQ0FBQ0MsU0FBVztvQ0FDL0IscUJBQ0UsOERBQUNDOzs0Q0FDRUQsT0FBT1gsSUFBSTs0Q0FDWFcsT0FBT0UsTUFBTSxrQkFDWiw4REFBQ0M7O29EQUFLO29EQUFZSCxPQUFPRSxNQUFNLENBQUNiLElBQUk7Ozs7Ozs7Ozs7Ozs7Z0NBSTVDOzs7Ozs7NEJBRURYLFFBQVEwQixVQUFVLGtCQUNqQjs7a0RBQ0UsOERBQUNQO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNRO2tEQUFHM0IsUUFBUTBCLFVBQVUsQ0FBQ2YsSUFBSTs7Ozs7Ozs7NEJBRzlCWCxRQUFRNEIsU0FBUyxrQkFDaEI7O2tEQUNFLDhEQUFDVDtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDUTtrREFBRzNCLFFBQVE0QixTQUFTLENBQUNqQixJQUFJOzs7Ozs7Ozs0QkFHN0JYLFFBQVE2QixRQUFRLGtCQUNmOztrREFDRSw4REFBQ1Y7a0RBQUc7Ozs7OztrREFDSiw4REFBQ1E7a0RBQUczQixRQUFRNkIsUUFBUSxDQUFDbEIsSUFBSTs7Ozs7Ozs7O29DQUloQzs7Ozs7Ozs7O0FBSVQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwaXJpdC1pc2xhbmQtcmFuZG9taXplci8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBjaG9vc2VSZXN1bHQgZnJvbSBcInV0aWxzL2Nob29zZVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKHtcbiAgICBzcGlyaXRzOiBbXVxuICB9KVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHNldFJlc3VsdHMoXG4gICAgICBjaG9vc2VSZXN1bHQoe1xuICAgICAgICBudW1iZXJPZlBsYXllcnM6IDIsXG4gICAgICAgIGluY2x1ZGVCbGlnaHRDYXJkOiB0cnVlLFxuICAgICAgICBpbmNsdWRlQWR2ZXJzYXJ5OiB0cnVlLFxuICAgICAgICBpbmNsdWRlU2NlbmFyaW86IHRydWVcbiAgICAgIH0pXG4gICAgKVxuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIH0sIHt9KVxuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8PkxvYWRpbmcuLi48Lz5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNwaXJpdCBJc2xhbmQgR2FtZSBSYW5kb21pemVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNwaXJpdCBJc2xhbmQgR2FtZSBSYW5kb21pemVyXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMT5TcGlyaXQgSXNsYW5kIEdhbWUgUmFuZG9taXplcjwvaDE+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPD5Mb2FkaW5nLi4uPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMj5TcGlyaXRzPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Jlc3VsdHMuc3Bpcml0cy5tYXAoKHNwaXJpdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIHtzcGlyaXQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAge3NwaXJpdC5hc3BlY3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAtIEFzcGVjdDoge3NwaXJpdC5hc3BlY3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAge3Jlc3VsdHMuYmxpZ2h0Q2FyZCAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgyPkJsaWdodDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e3Jlc3VsdHMuYmxpZ2h0Q2FyZC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Jlc3VsdHMuYWR2ZXJzYXJ5ICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDI+QWR2ZXJzYXJ5PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57cmVzdWx0cy5hZHZlcnNhcnkubmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtyZXN1bHRzLnNjZW5hcmlvICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDI+U2NlbmFyaW88L2gyPlxuICAgICAgICAgICAgICAgIDxwPntyZXN1bHRzLnNjZW5hcmlvLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJzdHlsZXMiLCJjaG9vc2VSZXN1bHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInNwaXJpdHMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibnVtYmVyT2ZQbGF5ZXJzIiwiaW5jbHVkZUJsaWdodENhcmQiLCJpbmNsdWRlQWR2ZXJzYXJ5IiwiaW5jbHVkZVNjZW5hcmlvIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImgyIiwidWwiLCJtYXAiLCJzcGlyaXQiLCJsaSIsImFzcGVjdCIsInNwYW4iLCJibGlnaHRDYXJkIiwicCIsImFkdmVyc2FyeSIsInNjZW5hcmlvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utils/choose.ts":
/*!*************************!*\
  !*** ./utils/choose.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst chooseOption = (list)=>{\n    return list.splice(Math.floor(Math.random() * list.length), 1)[0];\n};\nconst spiritList = [\n    {\n        name: \"Lightning's Swift Strike\",\n        aspects: [\n            {\n                name: \"Standard\"\n            },\n            {\n                name: \"Pandemonium\"\n            },\n            {\n                name: \"Wind\"\n            }\n        ]\n    },\n    {\n        name: \"River Surges in Sunlight\",\n        aspects: [\n            {\n                name: \"Standard\"\n            },\n            {\n                name: \"Sunshine\"\n            }\n        ]\n    },\n    {\n        name: \"Vital Strength of the Earth\",\n        aspects: [\n            {\n                name: \"Standard\"\n            },\n            {\n                name: \"Resilience\"\n            }\n        ]\n    },\n    {\n        name: \"Shadows Flicker Like Flame\",\n        aspects: [\n            {\n                name: \"Standard\"\n            },\n            {\n                name: \"Madness\"\n            },\n            {\n                name: \"Reach\"\n            }\n        ]\n    },\n    {\n        name: \"Thunderspeaker\"\n    },\n    {\n        name: \"A Spread of Rampant Green\"\n    },\n    {\n        name: \"Ocean's Hungry Grasp\"\n    },\n    {\n        name: \"Bringer of Dreams and Nightmares\"\n    },\n    {\n        name: \"Stone's Unyielding Defiance\"\n    },\n    {\n        name: \"Shifting Memory of Ages\"\n    },\n    {\n        name: \"Grinning Trickster Stirs Up Trouble\"\n    },\n    {\n        name: \"Lure of the Deep Wilderness\"\n    },\n    {\n        name: \"Many Minds Move as One\"\n    },\n    {\n        name: \"Volcano Looming High\"\n    },\n    {\n        name: \"Shroud of Silent Mist\"\n    },\n    {\n        name: \"Vengeance as a Burning Plague\"\n    },\n    {\n        name: \"Starlight Seeks Its Form\"\n    },\n    {\n        name: \"Fractured Days Split the Sky\"\n    }\n];\nconst chooseSpirits = (numberOfPlayers)=>{\n    let spirits = [];\n    for(let i = 0; i < numberOfPlayers; i++){\n        spirits.push(chooseOption(spiritList));\n    }\n    return spirits;\n};\nconst adversaryList = [\n    {\n        name: \"Brandenburg-Prussia\"\n    },\n    {\n        name: \"England\"\n    },\n    {\n        name: \"Sweden\"\n    },\n    {\n        name: \"Habsburg Monarchy\"\n    },\n    {\n        name: \"Russia\"\n    }\n];\nconst chooseAdversary = ()=>chooseOption(adversaryList);\nconst scenarioList = [\n    {\n        name: \"Blitz\"\n    },\n    {\n        name: \"Guard the Isle's Heart\"\n    },\n    {\n        name: \"Rituals of Terror\"\n    },\n    {\n        name: \"Dahan Insurrection\"\n    },\n    {\n        name: \"Elemental Invocation\"\n    },\n    {\n        name: \"Despicable Theft\"\n    },\n    {\n        name: \"The Great River\"\n    }\n];\nconst chooseScenario = ()=>chooseOption(scenarioList);\nconst blightCardList = [\n    {\n        name: \"Downward Spiral\"\n    },\n    {\n        name: \"Memory Fades to Dust\"\n    },\n    {\n        name: \"Thriving Communities\"\n    },\n    {\n        name: \"Unnatural Proliferation\"\n    },\n    {\n        name: \"All Things Weaken\"\n    },\n    {\n        name: \"Power Corrodes the Spirit\"\n    },\n    {\n        name: \"Untended Land Crumbles\"\n    },\n    {\n        name: \"Invaders Find the Land to Their Liking\"\n    },\n    {\n        name: \"Strong Earth Shatters Slowly\"\n    }\n];\nconst chooseBlight = ()=>chooseOption(blightCardList);\nconst chooseResults = ({ numberOfPlayers , includeAdversary , includeScenario , includeBlightCard  })=>{\n    const spirits = chooseSpirits(numberOfPlayers);\n    const finalSpiritList = spirits.map((spirit)=>{\n        if (spirit.aspects) {\n            const aspect = chooseOption(spirit.aspects);\n            return {\n                name: spirit.name,\n                aspect: aspect\n            };\n        }\n        return spirit;\n    });\n    const results = {\n        spirits: finalSpiritList\n    };\n    if (includeAdversary) {\n        results[\"adversary\"] = chooseAdversary();\n    }\n    if (includeScenario) {\n        results[\"scenario\"] = chooseScenario();\n    }\n    if (includeBlightCard) {\n        results[\"blightCard\"] = chooseBlight();\n    }\n    return results;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseResults);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPbEIsT0FBTyxFQUFFO1lBQ2xCLE1BQU1tQixTQUFTNUIsYUFBYTJCLE9BQU9sQixPQUFPO1lBQzFDLE9BQU87Z0JBQ0xELE1BQU1tQixPQUFPbkIsSUFBSTtnQkFDakJvQixRQUFRQTtZQUNWO1FBQ0YsQ0FBQztRQUVELE9BQU9EO0lBQ1Q7SUFFQSxNQUFNRSxVQUFxQjtRQUN6QmpCLFNBQVNhO0lBQ1g7SUFFQSxJQUFJSCxrQkFBa0I7UUFDcEJPLE9BQU8sQ0FBQyxZQUFZLEdBQUdiO0lBQ3pCLENBQUM7SUFFRCxJQUFJTyxpQkFBaUI7UUFDbkJNLE9BQU8sQ0FBQyxXQUFXLEdBQUdYO0lBQ3hCLENBQUM7SUFFRCxJQUFJTSxtQkFBbUI7UUFDckJLLE9BQU8sQ0FBQyxhQUFhLEdBQUdUO0lBQzFCLENBQUM7SUFFRCxPQUFPUztBQUNUO0FBRUEsaUVBQWVSLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlyaXQtaXNsYW5kLXJhbmRvbWl6ZXIvLi91dGlscy9jaG9vc2UudHM/OWZiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTcGlyaXQsXG4gIEFkdmVyc2FyeSxcbiAgU2NlbmFyaW8sXG4gIEJsaWdodENhcmQsXG4gIEdhbWVTZXR1cCxcbiAgR2FtZVNldHVwT3B0aW9uc1xufSBmcm9tIFwiLi4vdHlwZXMvaW5kZXhcIlxuXG5jb25zdCBjaG9vc2VPcHRpb24gPSAoXG4gIGxpc3Q6IEFycmF5PFNwaXJpdCB8IEFkdmVyc2FyeSB8IFNjZW5hcmlvIHwgQmxpZ2h0Q2FyZD5cbikgPT4ge1xuICByZXR1cm4gbGlzdC5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGgpLCAxKVswXVxufVxuXG5jb25zdCBzcGlyaXRMaXN0OiBTcGlyaXRbXSA9IFtcbiAge1xuICAgIG5hbWU6IFwiTGlnaHRuaW5nJ3MgU3dpZnQgU3RyaWtlXCIsXG4gICAgYXNwZWN0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlN0YW5kYXJkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUGFuZGVtb25pdW1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJXaW5kXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJpdmVyIFN1cmdlcyBpbiBTdW5saWdodFwiLFxuICAgIGFzcGVjdHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJTdGFuZGFyZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlN1bnNoaW5lXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZpdGFsIFN0cmVuZ3RoIG9mIHRoZSBFYXJ0aFwiLFxuICAgIGFzcGVjdHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJTdGFuZGFyZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlJlc2lsaWVuY2VcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU2hhZG93cyBGbGlja2VyIExpa2UgRmxhbWVcIixcbiAgICBhc3BlY3RzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiU3RhbmRhcmRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJNYWRuZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUmVhY2hcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGh1bmRlcnNwZWFrZXJcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBIFNwcmVhZCBvZiBSYW1wYW50IEdyZWVuXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiT2NlYW4ncyBIdW5ncnkgR3Jhc3BcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCcmluZ2VyIG9mIERyZWFtcyBhbmQgTmlnaHRtYXJlc1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlN0b25lJ3MgVW55aWVsZGluZyBEZWZpYW5jZVwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNoaWZ0aW5nIE1lbW9yeSBvZiBBZ2VzXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR3Jpbm5pbmcgVHJpY2tzdGVyIFN0aXJzIFVwIFRyb3VibGVcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMdXJlIG9mIHRoZSBEZWVwIFdpbGRlcm5lc3NcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNYW55IE1pbmRzIE1vdmUgYXMgT25lXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVm9sY2FubyBMb29taW5nIEhpZ2hcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTaHJvdWQgb2YgU2lsZW50IE1pc3RcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWZW5nZWFuY2UgYXMgYSBCdXJuaW5nIFBsYWd1ZVwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlN0YXJsaWdodCBTZWVrcyBJdHMgRm9ybVwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZyYWN0dXJlZCBEYXlzIFNwbGl0IHRoZSBTa3lcIlxuICB9XG5dXG5cbmNvbnN0IGNob29zZVNwaXJpdHM6IChudW1iZXJPZlBsYXllcnM6IG51bWJlcikgPT4gU3Bpcml0W10gPSAoXG4gIG51bWJlck9mUGxheWVyc1xuKSA9PiB7XG4gIGxldCBzcGlyaXRzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBsYXllcnM7IGkrKykge1xuICAgIHNwaXJpdHMucHVzaChjaG9vc2VPcHRpb24oc3Bpcml0TGlzdCkpXG4gIH1cbiAgcmV0dXJuIHNwaXJpdHNcbn1cblxuY29uc3QgYWR2ZXJzYXJ5TGlzdDogQWR2ZXJzYXJ5W10gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkJyYW5kZW5idXJnLVBydXNzaWFcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFbmdsYW5kXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3dlZGVuXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSGFic2J1cmcgTW9uYXJjaHlcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSdXNzaWFcIlxuICB9XG5dXG5cbmNvbnN0IGNob29zZUFkdmVyc2FyeTogKCkgPT4gQWR2ZXJzYXJ5ID0gKCkgPT4gY2hvb3NlT3B0aW9uKGFkdmVyc2FyeUxpc3QpXG5cbmNvbnN0IHNjZW5hcmlvTGlzdDogU2NlbmFyaW9bXSA9IFtcbiAge1xuICAgIG5hbWU6IFwiQmxpdHpcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHdWFyZCB0aGUgSXNsZSdzIEhlYXJ0XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUml0dWFscyBvZiBUZXJyb3JcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEYWhhbiBJbnN1cnJlY3Rpb25cIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFbGVtZW50YWwgSW52b2NhdGlvblwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRlc3BpY2FibGUgVGhlZnRcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUaGUgR3JlYXQgUml2ZXJcIlxuICB9XG5dXG5cbmNvbnN0IGNob29zZVNjZW5hcmlvOiAoKSA9PiBTY2VuYXJpbyA9ICgpID0+IGNob29zZU9wdGlvbihzY2VuYXJpb0xpc3QpXG5cbmNvbnN0IGJsaWdodENhcmRMaXN0OiBCbGlnaHRDYXJkW10gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkRvd253YXJkIFNwaXJhbFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1lbW9yeSBGYWRlcyB0byBEdXN0XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGhyaXZpbmcgQ29tbXVuaXRpZXNcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJVbm5hdHVyYWwgUHJvbGlmZXJhdGlvblwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFsbCBUaGluZ3MgV2Vha2VuXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUG93ZXIgQ29ycm9kZXMgdGhlIFNwaXJpdFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlVudGVuZGVkIExhbmQgQ3J1bWJsZXNcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJJbnZhZGVycyBGaW5kIHRoZSBMYW5kIHRvIFRoZWlyIExpa2luZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlN0cm9uZyBFYXJ0aCBTaGF0dGVycyBTbG93bHlcIlxuICB9XG5dXG5cbmNvbnN0IGNob29zZUJsaWdodDogKCkgPT4gQmxpZ2h0Q2FyZCA9ICgpID0+IGNob29zZU9wdGlvbihibGlnaHRDYXJkTGlzdClcblxuY29uc3QgY2hvb3NlUmVzdWx0czogKGFyZ3M6IEdhbWVTZXR1cE9wdGlvbnMpID0+IEdhbWVTZXR1cCA9ICh7XG4gIG51bWJlck9mUGxheWVycyxcbiAgaW5jbHVkZUFkdmVyc2FyeSxcbiAgaW5jbHVkZVNjZW5hcmlvLFxuICBpbmNsdWRlQmxpZ2h0Q2FyZFxufSkgPT4ge1xuICBjb25zdCBzcGlyaXRzID0gY2hvb3NlU3Bpcml0cyhudW1iZXJPZlBsYXllcnMpXG5cbiAgY29uc3QgZmluYWxTcGlyaXRMaXN0ID0gc3Bpcml0cy5tYXAoKHNwaXJpdCkgPT4ge1xuICAgIGlmIChzcGlyaXQuYXNwZWN0cykge1xuICAgICAgY29uc3QgYXNwZWN0ID0gY2hvb3NlT3B0aW9uKHNwaXJpdC5hc3BlY3RzKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogc3Bpcml0Lm5hbWUsXG4gICAgICAgIGFzcGVjdDogYXNwZWN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwaXJpdFxuICB9KVxuXG4gIGNvbnN0IHJlc3VsdHM6IEdhbWVTZXR1cCA9IHtcbiAgICBzcGlyaXRzOiBmaW5hbFNwaXJpdExpc3RcbiAgfVxuXG4gIGlmIChpbmNsdWRlQWR2ZXJzYXJ5KSB7XG4gICAgcmVzdWx0c1tcImFkdmVyc2FyeVwiXSA9IGNob29zZUFkdmVyc2FyeSgpXG4gIH1cblxuICBpZiAoaW5jbHVkZVNjZW5hcmlvKSB7XG4gICAgcmVzdWx0c1tcInNjZW5hcmlvXCJdID0gY2hvb3NlU2NlbmFyaW8oKVxuICB9XG5cbiAgaWYgKGluY2x1ZGVCbGlnaHRDYXJkKSB7XG4gICAgcmVzdWx0c1tcImJsaWdodENhcmRcIl0gPSBjaG9vc2VCbGlnaHQoKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hvb3NlUmVzdWx0c1xuIl0sIm5hbWVzIjpbImNob29zZU9wdGlvbiIsImxpc3QiLCJzcGxpY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzcGlyaXRMaXN0IiwibmFtZSIsImFzcGVjdHMiLCJjaG9vc2VTcGlyaXRzIiwibnVtYmVyT2ZQbGF5ZXJzIiwic3Bpcml0cyIsImkiLCJwdXNoIiwiYWR2ZXJzYXJ5TGlzdCIsImNob29zZUFkdmVyc2FyeSIsInNjZW5hcmlvTGlzdCIsImNob29zZVNjZW5hcmlvIiwiYmxpZ2h0Q2FyZExpc3QiLCJjaG9vc2VCbGlnaHQiLCJjaG9vc2VSZXN1bHRzIiwiaW5jbHVkZUFkdmVyc2FyeSIsImluY2x1ZGVTY2VuYXJpbyIsImluY2x1ZGVCbGlnaHRDYXJkIiwiZmluYWxTcGlyaXRMaXN0IiwibWFwIiwic3Bpcml0IiwiYXNwZWN0IiwicmVzdWx0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/choose.ts\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();