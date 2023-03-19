/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/common.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search_button.png */ \"./src/assets/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: 14px;\\n  background-color: #141414;\\n  color: white;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: min-content;\\n  margin: 0 auto;\\n}\\n\\n.item-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n.item-list {\\n  position: relative;\\n  display: grid;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(4, 250px);\\n  grid-column-gap: 56px;\\n  grid-row-gap: 64px;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 250px;\\n  height: 375px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 24px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n  line-height: 1.2;\\n}\\n\\n.item-score {\\n  display: flex;\\n  align-items: center;\\n  gap: 6px;\\n\\n  margin-top: 8px;\\n  font-size: 1rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: 'loading';\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: whitesmoke;\\n}\\n\\nbutton.primary {\\n  height: max-content;\\n  padding: 12px;\\n  background-color: transparent;\\n  border: 1px solid whitesmoke;\\n  transition: all 0.2s ease-in;\\n}\\n\\nbutton.primary:hover {\\n  background-color: #232323;\\n}\\n\\nbutton.primary:active {\\n  background-color: whitesmoke;\\n  color: #232323;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #232323, #303030, #232323, #303030);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\n\\nheader {\\n  width: 100%;\\n  min-width: 1200px;\\n  height: 72px;\\n  background-color: #141414;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 1px solid #383838;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #232323;\\n  padding: 8px;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box > input {\\n  width: 250px;\\n  background: #232323;\\n  color: white;\\n  border: 0;\\n}\\n\\nheader .search-box > #search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n.error-message {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  text-align: center;\\n}\\n\\n.error-message h3 {\\n  font-size: 24px;\\n  margin-bottom: 24px;\\n}\\n\\n.error-message p {\\n  font-size: 14px;\\n  line-height: 1.5;\\n}\\n\\n.placeholder-thumbnail {\\n  background-color: #232323;\\n}\\n\\n.item-thumbnail {\\n  background-color: #232323;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: '';\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/common.css?");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/domSelector */ \"./src/utils/domSelector.ts\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavBar */ \"./src/components/NavBar.ts\");\n/* harmony import */ var _components_MovieListContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MovieListContainer */ \"./src/components/MovieListContainer.ts\");\n/* harmony import */ var _components_MovieTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MovieTitle */ \"./src/components/MovieTitle.ts\");\n/* harmony import */ var _components_MovieListContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MovieListContent */ \"./src/components/MovieListContent.ts\");\n/* harmony import */ var _components_InvalidMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/InvalidMessage */ \"./src/components/InvalidMessage.ts\");\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain/MovieList */ \"./src/domain/MovieList.ts\");\n\n\n\n\n\n\n\n(0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_0__.$)('#app').insertAdjacentHTML('afterbegin', _components_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"].template());\n_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addEventToSearchInput();\n_domain_MovieList__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getMovieData();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/App.ts?");

/***/ }),

/***/ "./src/api/HTTPError.ts":
/*!******************************!*\
  !*** ./src/api/HTTPError.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass HTTPError extends Error {\n    constructor(statusCode, message) {\n        super(message);\n        this.name = 'HTTPError';\n        this.statusCode = statusCode;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTTPError);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/HTTPError.ts?");

/***/ }),

/***/ "./src/api/fetchAPI.ts":
/*!*****************************!*\
  !*** ./src/api/fetchAPI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAPI\": () => (/* binding */ fetchAPI)\n/* harmony export */ });\n/* harmony import */ var _HTTPError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTTPError */ \"./src/api/HTTPError.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _constants_invalidMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/invalidMessage */ \"./src/constants/invalidMessage.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nfunction fetchAPI(endpoint) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const response = yield fetch(endpoint);\n        if (!response.ok) {\n            if (response.status >= _constants__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS_BAD_REQUEST &&\n                response.status < _constants__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS_INTERNAL_SERVER_ERROR) {\n                throw new _HTTPError__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS_BAD_REQUEST);\n            }\n            else if (response.status >= _constants__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS_INTERNAL_SERVER_ERROR) {\n                throw new _HTTPError__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS_INTERNAL_SERVER_ERROR);\n            }\n        }\n        const contentType = response.headers.get('Content-Type');\n        if (!contentType || !contentType.includes('application/json')) {\n            throw new Error(_constants_invalidMessage__WEBPACK_IMPORTED_MODULE_2__.INVALID_JSON_RESPONSE);\n        }\n        const data = yield response.json();\n        return data;\n    });\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/fetchAPI.ts?");

/***/ }),

/***/ "./src/api/generateUrl.ts":
/*!********************************!*\
  !*** ./src/api/generateUrl.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateUrl\": () => (/* binding */ generateUrl)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n\nfunction generateUrl(endpoint, queryParams) {\n    const queryString = Object.entries(queryParams)\n        .map(([key, value]) => `${key}=${value}`)\n        .join('&');\n    return `${_constants__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL}${endpoint}?api_key=${\"bb0e5d518972b18236295da31a05cb07\"}&language=ko-KR&${queryString}`;\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/generateUrl.ts?");

/***/ }),

/***/ "./src/api/movieAPI.ts":
/*!*****************************!*\
  !*** ./src/api/movieAPI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPopularMovieData\": () => (/* binding */ fetchPopularMovieData),\n/* harmony export */   \"fetchSearchedMovieData\": () => (/* binding */ fetchSearchedMovieData)\n/* harmony export */ });\n/* harmony import */ var _utils_camelCaseConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/camelCaseConverter */ \"./src/utils/camelCaseConverter.ts\");\n/* harmony import */ var _generateUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateUrl */ \"./src/api/generateUrl.ts\");\n/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchAPI */ \"./src/api/fetchAPI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nfunction fetchPopularMovieData(currentPage) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const apiUrl = (0,_generateUrl__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('movie/popular', { page: currentPage });\n        const data = yield (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)(apiUrl);\n        const movieData = (0,_utils_camelCaseConverter__WEBPACK_IMPORTED_MODULE_0__.convertKeysToCamelCase)(data);\n        return movieData.results;\n    });\n}\nfunction fetchSearchedMovieData(searchQuery, currentPage) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const apiUrl = (0,_generateUrl__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('search/movie', {\n            query: searchQuery,\n            page: currentPage,\n            include_adult: false,\n        });\n        const data = yield (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)(apiUrl);\n        const movieData = (0,_utils_camelCaseConverter__WEBPACK_IMPORTED_MODULE_0__.convertKeysToCamelCase)(data);\n        return movieData.results;\n    });\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/movieAPI.ts?");

/***/ }),

/***/ "./src/assets/index.ts":
/*!*****************************!*\
  !*** ./src/assets/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EmptyStar\": () => (/* reexport default export from named module */ _star_empty_png__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"FilledStar\": () => (/* reexport default export from named module */ _star_filled_png__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   \"Logo\": () => (/* reexport default export from named module */ _logo_png__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"SearchButton\": () => (/* reexport default export from named module */ _search_button_png__WEBPACK_IMPORTED_MODULE_1__)\n/* harmony export */ });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _search_button_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_button.png */ \"./src/assets/search_button.png\");\n/* harmony import */ var _star_empty_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star_empty.png */ \"./src/assets/star_empty.png\");\n/* harmony import */ var _star_filled_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star_filled.png */ \"./src/assets/star_filled.png\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/index.ts?");

/***/ }),

/***/ "./src/components/InvalidMessage.ts":
/*!******************************************!*\
  !*** ./src/components/InvalidMessage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_HTTPError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/HTTPError */ \"./src/api/HTTPError.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _constants_invalidMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/invalidMessage */ \"./src/constants/invalidMessage.ts\");\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n/* harmony import */ var _MovieListContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MovieListContainer */ \"./src/components/MovieListContainer.ts\");\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/MovieList */ \"./src/domain/MovieList.ts\");\n\n\n\n\n\n\nclass InvalidMessage {\n    constructor() {\n        this.init();\n        this.messageContainer = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_3__.$)('.error-message');\n    }\n    static getInstance() {\n        if (!InvalidMessage.instance) {\n            InvalidMessage.instance = new InvalidMessage();\n        }\n        return InvalidMessage.instance;\n    }\n    init() {\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_5__[\"default\"].on('movieListReset', () => {\n            this.clear();\n        });\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_5__[\"default\"].on(_constants__WEBPACK_IMPORTED_MODULE_1__.MOVIE_LIST_ERROR, (event) => {\n            const { error } = event.detail;\n            this.handleError(error);\n        });\n    }\n    render(type, message) {\n        const heading = _constants_invalidMessage__WEBPACK_IMPORTED_MODULE_2__.INVALID_MESSAGE[type].HEADING;\n        const template = `\n      <h3>${typeof heading === 'function' && message ? heading(message) : heading}</h3>\n      <p>${_constants_invalidMessage__WEBPACK_IMPORTED_MODULE_2__.INVALID_MESSAGE[type].CONTENT}</p>`;\n        this.messageContainer.insertAdjacentHTML('beforeend', template);\n        this.messageContainer.classList.remove('hide');\n    }\n    clear() {\n        this.messageContainer.textContent = '';\n    }\n    handleError(error) {\n        _MovieListContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].hideListContainer();\n        if (error instanceof _api_HTTPError__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.render(_constants_invalidMessage__WEBPACK_IMPORTED_MODULE_2__.HTTP_ERROR_CODE[error.statusCode]);\n            return;\n        }\n        if (error.message === _constants_invalidMessage__WEBPACK_IMPORTED_MODULE_2__.INVALID_JSON_RESPONSE) {\n            this.render(_constants_invalidMessage__WEBPACK_IMPORTED_MODULE_2__.INVALID_JSON_RESPONSE);\n            return;\n        }\n        alert(error.message);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvalidMessage.getInstance());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/InvalidMessage.ts?");

/***/ }),

/***/ "./src/components/MovieItem.ts":
/*!*************************************!*\
  !*** ./src/components/MovieItem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.ts\");\n\n\n\nclass MovieItem {\n    static getInstance() {\n        if (!MovieItem.instance) {\n            MovieItem.instance = new MovieItem();\n        }\n        return MovieItem.instance;\n    }\n    template() {\n        return `\n      <li>\n        <a href=\"#\">\n          <div class=\"item-card\">\n            <div class=\"item-thumbnail skeleton\"></div>\n            <p class=\"item-title skeleton\"></p>\n            <p class=\"item-score skeleton\"></p>\n          </div>\n        </a>\n      </li>`;\n    }\n    posterImageTemplate(title, imagePath) {\n        return imagePath\n            ? `\n        <img\n          class=\"item-thumbnail\"\n          src=\"${_constants__WEBPACK_IMPORTED_MODULE_0__.POSTER_BASE_URL}${imagePath}\"\n          loading=\"lazy\"\n          alt=\"${title}\"\n        />`\n            : `<div class=\"item-thumbnail\"></div>`;\n    }\n    scoreTemplate(voteAverage) {\n        return `\n      <img src=\"${voteAverage ? _assets__WEBPACK_IMPORTED_MODULE_2__.FilledStar : _assets__WEBPACK_IMPORTED_MODULE_2__.EmptyStar}\" alt=\"별점\" />${voteAverage}\n    `;\n    }\n    render(target, movie) {\n        const itemThumbnail = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_1__.$)('.item-thumbnail', target);\n        itemThumbnail.classList.remove('skeleton');\n        itemThumbnail.insertAdjacentHTML('beforeend', this.posterImageTemplate(movie.title, movie.posterPath));\n        const itemTitle = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_1__.$)('.item-title', target);\n        itemTitle.classList.remove('skeleton');\n        itemTitle.textContent = movie.title;\n        const itemScore = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_1__.$)('.item-score', target);\n        itemScore.classList.remove('skeleton');\n        itemScore.insertAdjacentHTML('beforeend', this.scoreTemplate(movie.voteAverage));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieItem.getInstance());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieItem.ts?");

/***/ }),

/***/ "./src/components/MovieListContainer.ts":
/*!**********************************************!*\
  !*** ./src/components/MovieListContainer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/MovieList */ \"./src/domain/MovieList.ts\");\n\n\n\nclass MovieListContainer {\n    constructor() {\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_0__.$)('main').insertAdjacentHTML('beforeend', this.template());\n        this.init();\n        this.listContainer = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_0__.$)('.item-view');\n        this.moreButton = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_0__.$)('#more-button');\n        this.addEventToMoreButton();\n    }\n    static getInstance() {\n        if (!MovieListContainer.instance) {\n            MovieListContainer.instance = new MovieListContainer();\n        }\n        return MovieListContainer.instance;\n    }\n    template() {\n        return `\n      <section class=\"item-view\">\n        <h2 id=\"movie-list-title\">지금 인기 있는 영화</h2>\n        <ul class=\"item-list\"></ul>\n        <button id=\"more-button\" class=\"btn primary full-width\">더 보기</button>\n      </section>\n      <div class=\"error-message hide\"></div>\n    `;\n    }\n    init() {\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(_constants__WEBPACK_IMPORTED_MODULE_1__.MOVIE_LIST_RESET, () => {\n            this.showListContainer();\n        });\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(_constants__WEBPACK_IMPORTED_MODULE_1__.MOVIE_LIST_LOADING, () => {\n            this.hideMoreButton();\n        });\n    }\n    addEventToMoreButton() {\n        this.moreButton.addEventListener('click', () => {\n            _domain_MovieList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getMovieData();\n        });\n    }\n    showListContainer() {\n        this.listContainer.classList.remove('hide');\n    }\n    hideListContainer() {\n        this.listContainer.classList.add('hide');\n    }\n    showMoreButton() {\n        this.moreButton.classList.remove('hide');\n    }\n    hideMoreButton() {\n        this.moreButton.classList.add('hide');\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieListContainer.getInstance());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieListContainer.ts?");

/***/ }),

/***/ "./src/components/MovieListContent.ts":
/*!********************************************!*\
  !*** ./src/components/MovieListContent.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _constants_invalidMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/invalidMessage */ \"./src/constants/invalidMessage.ts\");\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n/* harmony import */ var _MovieListContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieListContainer */ \"./src/components/MovieListContainer.ts\");\n/* harmony import */ var _MovieItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MovieItem */ \"./src/components/MovieItem.ts\");\n/* harmony import */ var _InvalidMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InvalidMessage */ \"./src/components/InvalidMessage.ts\");\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domain/MovieList */ \"./src/domain/MovieList.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nclass MovieListContent {\n    constructor() {\n        this.renderSkeleton = () => {\n            this.itemList.insertAdjacentHTML('beforeend', _MovieItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"].template().repeat(_constants__WEBPACK_IMPORTED_MODULE_0__.MOVIE_MAX_COUNT));\n        };\n        this.clearListContent = () => {\n            this.itemList.replaceChildren();\n        };\n        this.init();\n        this.itemList = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.$)('.item-list');\n    }\n    static getInstance() {\n        if (!MovieListContent.instance) {\n            MovieListContent.instance = new MovieListContent();\n        }\n        return MovieListContent.instance;\n    }\n    init() {\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_6__[\"default\"].on(_constants__WEBPACK_IMPORTED_MODULE_0__.MOVIE_LIST_RESET, this.clearListContent);\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_6__[\"default\"].on(_constants__WEBPACK_IMPORTED_MODULE_0__.MOVIE_LIST_LOADING, this.renderSkeleton);\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_6__[\"default\"].on(_constants__WEBPACK_IMPORTED_MODULE_0__.MOVIE_LIST_LOADED, (event) => {\n            const { movies, searchQuery } = event.detail;\n            this.loadMovies(movies, searchQuery);\n        });\n    }\n    loadMovies(movies, searchQuery) {\n        return __awaiter(this, void 0, void 0, function* () {\n            _MovieListContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showMoreButton();\n            if (movies.length !== 20) {\n                _MovieListContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hideMoreButton();\n            }\n            if (searchQuery && !movies.length) {\n                _MovieListContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hideListContainer();\n                _InvalidMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"].render(_constants_invalidMessage__WEBPACK_IMPORTED_MODULE_1__.NO_SEARCH_RESULT, searchQuery);\n                return;\n            }\n            this.renderMovies(movies);\n        });\n    }\n    renderMovies(movies) {\n        const items = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_2__.$$)('.item-card');\n        const extraItems = _constants__WEBPACK_IMPORTED_MODULE_0__.MOVIE_MAX_COUNT - movies.length;\n        items.splice(items.length - extraItems).forEach((element) => {\n            element.remove();\n        });\n        items.slice(-movies.length).forEach((child, key) => {\n            _MovieItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"].render(child, movies[key]);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieListContent.getInstance());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieListContent.ts?");

/***/ }),

/***/ "./src/components/MovieTitle.ts":
/*!**************************************!*\
  !*** ./src/components/MovieTitle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/MovieList */ \"./src/domain/MovieList.ts\");\n\n\n\nclass MovieTitle {\n    constructor() {\n        this.init();\n        this.title = (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_0__.$)('#movie-list-title');\n    }\n    static getInstance() {\n        if (!MovieTitle.instance) {\n            MovieTitle.instance = new MovieTitle();\n        }\n        return MovieTitle.instance;\n    }\n    init() {\n        _domain_MovieList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(_constants__WEBPACK_IMPORTED_MODULE_1__.MOVIE_LIST_RESET, (event) => {\n            const searchQuery = event.detail;\n            this.render(searchQuery);\n        });\n    }\n    render(searchQuery) {\n        this.title.textContent = searchQuery ? `\"${searchQuery}\" 검색 결과` : '지금 인기 있는 영화';\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieTitle.getInstance());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieTitle.ts?");

/***/ }),

/***/ "./src/components/NavBar.ts":
/*!**********************************!*\
  !*** ./src/components/NavBar.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_domSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domSelector */ \"./src/utils/domSelector.ts\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.ts\");\n/* harmony import */ var _domain_MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/MovieList */ \"./src/domain/MovieList.ts\");\n\n\n\nconst NavBar = {\n    template() {\n        return `\n      <header>\n        <h1><a href=\"\"><img src=\"${_assets__WEBPACK_IMPORTED_MODULE_1__.Logo}\" alt=\"MovieList 로고\" /></a></h1>\n        <form class=\"search-box\">\n          <input id=\"search-input\" name=\"search-input\" type=\"text\" placeholder=\"검색\" />\n          <button id=\"search-button\">검색</button>\n        </form>\n      </header>`;\n    },\n    addEventToSearchInput() {\n        (0,_utils_domSelector__WEBPACK_IMPORTED_MODULE_0__.$)('.search-box').addEventListener('submit', (event) => {\n            event.preventDefault();\n            const target = event.target;\n            const inputElement = target['search-input'];\n            const searchQuery = inputElement.value.trim();\n            if (searchQuery === '')\n                return;\n            _domain_MovieList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init(searchQuery);\n            _domain_MovieList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getMovieData();\n        });\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/NavBar.ts?");

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_BASE_URL\": () => (/* binding */ API_BASE_URL),\n/* harmony export */   \"HTTP_STATUS_BAD_REQUEST\": () => (/* binding */ HTTP_STATUS_BAD_REQUEST),\n/* harmony export */   \"HTTP_STATUS_INTERNAL_SERVER_ERROR\": () => (/* binding */ HTTP_STATUS_INTERNAL_SERVER_ERROR),\n/* harmony export */   \"MOVIE_LIST_ERROR\": () => (/* binding */ MOVIE_LIST_ERROR),\n/* harmony export */   \"MOVIE_LIST_LOADED\": () => (/* binding */ MOVIE_LIST_LOADED),\n/* harmony export */   \"MOVIE_LIST_LOADING\": () => (/* binding */ MOVIE_LIST_LOADING),\n/* harmony export */   \"MOVIE_LIST_RESET\": () => (/* binding */ MOVIE_LIST_RESET),\n/* harmony export */   \"MOVIE_MAX_COUNT\": () => (/* binding */ MOVIE_MAX_COUNT),\n/* harmony export */   \"POSTER_BASE_URL\": () => (/* binding */ POSTER_BASE_URL)\n/* harmony export */ });\nconst MOVIE_MAX_COUNT = 20;\nconst POSTER_BASE_URL = 'https://www.themoviedb.org/t/p/original';\nconst API_BASE_URL = 'https://api.themoviedb.org/3/';\nconst HTTP_STATUS_BAD_REQUEST = 400;\nconst HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;\nconst MOVIE_LIST_RESET = 'movieListReset';\nconst MOVIE_LIST_LOADING = 'movieListLoading';\nconst MOVIE_LIST_LOADED = 'movieListLoaded';\nconst MOVIE_LIST_ERROR = 'movieListError';\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/index.ts?");

/***/ }),

/***/ "./src/constants/invalidMessage.ts":
/*!*****************************************!*\
  !*** ./src/constants/invalidMessage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HTTP_ERROR_CODE\": () => (/* binding */ HTTP_ERROR_CODE),\n/* harmony export */   \"INVALID_JSON_RESPONSE\": () => (/* binding */ INVALID_JSON_RESPONSE),\n/* harmony export */   \"INVALID_MESSAGE\": () => (/* binding */ INVALID_MESSAGE),\n/* harmony export */   \"INVALID_MESSAGE_TYPES\": () => (/* binding */ INVALID_MESSAGE_TYPES),\n/* harmony export */   \"NO_SEARCH_RESULT\": () => (/* binding */ NO_SEARCH_RESULT)\n/* harmony export */ });\nconst NO_SEARCH_RESULT = 'NO_SEARCH_RESULT';\nconst ERROR_400_RANGE = 'ERROR_400_RANGE';\nconst ERROR_500_RANGE = 'ERROR_500_RANGE';\nconst INVALID_JSON_RESPONSE = 'INVALID_JSON_RESPONSE';\nconst HTTP_ERROR_CODE = {\n    400: ERROR_400_RANGE,\n    500: ERROR_500_RANGE,\n};\nconst INVALID_MESSAGE_TYPES = [\n    NO_SEARCH_RESULT,\n    ERROR_400_RANGE,\n    ERROR_500_RANGE,\n    INVALID_JSON_RESPONSE,\n];\nconst INVALID_MESSAGE = {\n    NO_SEARCH_RESULT: {\n        HEADING: (searchKey) => `입력하신 검색어 \"${searchKey}\"(와)과 일치하는 결과가 없습니다.`,\n        CONTENT: '다른 키워드를 입력해 보세요.',\n    },\n    ERROR_400_RANGE: {\n        HEADING: '요청하신 작업을 할 수 없습니다.',\n        CONTENT: '다시 시도해 주세요.',\n    },\n    ERROR_500_RANGE: {\n        HEADING: '서비스 이용에 불편을 드려 죄송합니다.',\n        CONTENT: '새로고침 단추를 클릭하거나 나중에 다시 시도해 주세요.',\n    },\n    INVALID_JSON_RESPONSE: {\n        HEADING: '서비스 이용에 불편을 드려 죄송합니다.',\n        CONTENT: '서버에서 문제가 발생해서 요청하신 데이터를 가져올 수 없습니다.<br>새로고침 단추를 클릭하거나 나중에 다시 시도해 주세요.',\n    },\n};\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/invalidMessage.ts?");

/***/ }),

/***/ "./src/domain/MovieList.ts":
/*!*********************************!*\
  !*** ./src/domain/MovieList.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/EventEmitter */ \"./src/utils/EventEmitter.ts\");\n/* harmony import */ var _api_movieAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/movieAPI */ \"./src/api/movieAPI.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass MovieList {\n    constructor() {\n        this.currentPage = 1;\n        this.searchQuery = '';\n    }\n    static getInstance() {\n        if (!MovieList.instance) {\n            MovieList.instance = new MovieList();\n        }\n        return MovieList.instance;\n    }\n    init(searchQuery = '') {\n        this.currentPage = 1;\n        this.searchQuery = searchQuery;\n        _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].emit(_constants__WEBPACK_IMPORTED_MODULE_0__.MOVIE_LIST_RESET, searchQuery);\n    }\n    increaseCurrentPage() {\n        this.currentPage += 1;\n    }\n    processMovieData(fetchFunction) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const moviesData = yield fetchFunction();\n            this.increaseCurrentPage();\n            const movies = moviesData.map((movie) => ({\n                id: movie.id,\n                title: movie.title,\n                voteAverage: Math.round(movie.voteAverage * 10) / 10,\n                posterPath: movie.posterPath,\n            }));\n            return movies;\n        });\n    }\n    getPopularMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return this.processMovieData(() => (0,_api_movieAPI__WEBPACK_IMPORTED_MODULE_2__.fetchPopularMovieData)(this.currentPage));\n        });\n    }\n    getSearchedMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return this.processMovieData(() => (0,_api_movieAPI__WEBPACK_IMPORTED_MODULE_2__.fetchSearchedMovieData)(this.searchQuery, this.currentPage));\n        });\n    }\n    getMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].emit(_constants__WEBPACK_IMPORTED_MODULE_0__.MOVIE_LIST_LOADING);\n            try {\n                const movies = this.searchQuery !== ''\n                    ? yield this.getSearchedMovieData()\n                    : yield this.getPopularMovieData();\n                _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].emit(_constants__WEBPACK_IMPORTED_MODULE_0__.MOVIE_LIST_LOADED, { movies, searchQuery: this.searchQuery });\n            }\n            catch (error) {\n                _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].emit(_constants__WEBPACK_IMPORTED_MODULE_0__.MOVIE_LIST_ERROR, { error });\n            }\n        });\n    }\n    on(eventName, callback) {\n        _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(eventName, callback);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieList.getInstance());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/MovieList.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.ts */ \"./src/App.ts\");\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/common.css */ \"./src/css/common.css\");\n\n\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.js?");

/***/ }),

/***/ "./src/utils/EventEmitter.ts":
/*!***********************************!*\
  !*** ./src/utils/EventEmitter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass EventEmitter extends EventTarget {\n    constructor() {\n        super();\n    }\n    static getInstance() {\n        if (!EventEmitter.instance) {\n            EventEmitter.instance = new EventEmitter();\n        }\n        return EventEmitter.instance;\n    }\n    on(eventName, callback) {\n        this.addEventListener(eventName, callback);\n    }\n    emit(eventName, data) {\n        const event = new CustomEvent(eventName, { detail: data });\n        this.dispatchEvent(event);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventEmitter.getInstance());\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/EventEmitter.ts?");

/***/ }),

/***/ "./src/utils/camelCaseConverter.ts":
/*!*****************************************!*\
  !*** ./src/utils/camelCaseConverter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertKeysToCamelCase\": () => (/* binding */ convertKeysToCamelCase)\n/* harmony export */ });\nfunction convertKeysToCamelCase(obj) {\n    if (typeof obj !== 'object' || obj === null) {\n        return obj;\n    }\n    if (Array.isArray(obj)) {\n        return obj.map(convertKeysToCamelCase);\n    }\n    const camelCaseObj = {};\n    for (const key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n            const value = obj[key];\n            const camelCaseKey = key.replace(/(_\\w)/g, (match) => match[1].toUpperCase());\n            camelCaseObj[camelCaseKey] = convertKeysToCamelCase(value);\n        }\n    }\n    return camelCaseObj;\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/camelCaseConverter.ts?");

/***/ }),

/***/ "./src/utils/domSelector.ts":
/*!**********************************!*\
  !*** ./src/utils/domSelector.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$)\n/* harmony export */ });\nfunction $(selector, target = document) {\n    const element = target.querySelector(selector);\n    if (!element) {\n        throw new Error(`DOM에 ${selector} 요소가 존재하지 않습니다.`);\n    }\n    return element;\n}\nfunction $$(selector, target = document) {\n    return Array.from(target.querySelectorAll(selector));\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/domSelector.ts?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/search_button.png":
/*!**************************************!*\
  !*** ./src/assets/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f11f1878bfceaa3c9672.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/search_button.png?");

/***/ }),

/***/ "./src/assets/star_empty.png":
/*!***********************************!*\
  !*** ./src/assets/star_empty.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c9611deedf4b85849c9.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_empty.png?");

/***/ }),

/***/ "./src/assets/star_filled.png":
/*!************************************!*\
  !*** ./src/assets/star_filled.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_filled.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;