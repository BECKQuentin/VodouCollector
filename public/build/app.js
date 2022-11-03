(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bookmark_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/bookmark_controller.js",
	"./pagination_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pagination_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/bookmark_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/bookmark_controller.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value:
    // connect() {
    //     // this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    //     console.log('ok')
    // }

    function connect() {
      console.log('connected');
    }
  }, {
    key: "saveBookmark",
    value: function saveBookmark(e) {
      var button = e.currentTarget;
      fetch(e.currentTarget.dataset.url).then(function (response) {
        button.querySelector('i').classList.toggle('fa-regular');
        button.querySelector('i').classList.toggle('fa-solid');
        if (button.querySelector('i').classList.contains('fa-regular')) {
          button.title = 'Ajouter aux favoris';
        } else {
          button.title = 'Retirer des favoris';
        }
        return response.blob();
      });
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_15__.Controller);
_defineProperty(_default, "targets", ['button']);
_defineProperty(_default, "values", {
  url: String,
  interval: Number,
  params: Object
});


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pagination_controller.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/pagination_controller.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value:
    // connect() {
    //     // this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    //     console.log('ok')
    // }
    // static targets = [
    //     'button'
    // ]
    // static values = {
    //     url: String,
    //     interval: Number,
    //     params: Object,
    // }

    function connect() {
      console.log('connected');
    }
  }, {
    key: "modifyPagination",
    value: function modifyPagination(e) {
      var value = e.currentTarget.innerText;
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _styles_base_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/base/style.scss */ "./assets/styles/base/style.scss");
/* harmony import */ var _styles_base_home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/base/home.scss */ "./assets/styles/base/home.scss");
/* harmony import */ var _styles_base_responsive_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/base/responsive.css */ "./assets/styles/base/responsive.css");
/* harmony import */ var _styles_base_toolbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/base/toolbar.css */ "./assets/styles/base/toolbar.css");
/* harmony import */ var _styles_objects_form_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/objects/form.css */ "./assets/styles/objects/form.css");
/* harmony import */ var _styles_objects_media_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/objects/media.css */ "./assets/styles/objects/media.css");
/* harmony import */ var _styles_objects_objects_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/objects/objects.css */ "./assets/styles/objects/objects.css");
/* harmony import */ var _styles_objects_tags_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/objects/tags.css */ "./assets/styles/objects/tags.css");
/* harmony import */ var _styles_search_search_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/search/search.css */ "./assets/styles/search/search.css");
/* harmony import */ var _styles_site_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/site/style.css */ "./assets/styles/site/style.css");
/* harmony import */ var _styles_bundles_captcha_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/bundles/captcha.css */ "./assets/styles/bundles/captcha.css");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_tool_formObjects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/tool/formObjects */ "./assets/js/tool/formObjects.js");
/* harmony import */ var _js_tool_formObjects__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_js_tool_formObjects__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _js_site_statistics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/site/statistics */ "./assets/js/site/statistics.js");
/* harmony import */ var _js_site_statistics__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_js_site_statistics__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_16__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)














// start the Stimulus application
// import './js/tool/search';


// import './js/site/style';




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/site/statistics.js":
/*!**************************************!*\
  !*** ./assets/js/site/statistics.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function strToDom(str) {
  return document.createRange().createContextualFragment(str).firstChild;
}
function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}
var Point = /*#__PURE__*/function () {
  "use strict";

  function Point(x, y) {
    _classCallCheck(this, Point);
    this.x = x;
    this.y = y;
  }
  _createClass(Point, [{
    key: "toSvgPath",
    value: function toSvgPath() {
      return "".concat(this.x, " ").concat(this.y);
    }
  }], [{
    key: "fromAngle",
    value: function fromAngle(angle) {
      return new Point(Math.cos(angle), Math.sin(angle));
    }
  }]);
  return Point;
}();
/**
 * @property {number[]} data
 * @property {SVGPathElement[]} paths
 */
var PieChart = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  _inherits(PieChart, _HTMLElement);
  var _super = _createSuper(PieChart);
  function PieChart() {
    var _this$getAttribute, _this$getAttribute$sp, _this$getAttribute2, _this$getAttribute3;
    var _this;
    _classCallCheck(this, PieChart);
    _this = _super.call(this);
    var shadow = _this.attachShadow({
      mode: 'open'
    });
    var colors = ['#FAAA32', '#3EFA7D', '#FA6A25', '#0C94FA', '#FA1F19', '#0CFAE2', '#AB6D23', '#FFCD5C', '#9558F5', '#1E4463', '#B0413E', '#ADB04F', '#2C75B0'];
    var donut = (_this$getAttribute = _this.getAttribute('donut')) !== null && _this$getAttribute !== void 0 ? _this$getAttribute : '0.005';
    var labels = (_this$getAttribute$sp = (_this$getAttribute2 = _this.getAttribute('labels')) === null || _this$getAttribute2 === void 0 ? void 0 : _this$getAttribute2.split(';')) !== null && _this$getAttribute$sp !== void 0 ? _this$getAttribute$sp : [];
    var data = _this.getAttribute('data').split(';').map(function (v) {
      return parseFloat(v);
    });
    var svg = strToDom("<svg viewBox=\"-1 -1 2 2\">\n<g mask=\"url(#graphMask)\">\n   \n</g>\n<mask id=\"graphMask\">\n    <rect x=\"-1\" y=\"-1\" width=\"2\" height=\"2\" fill=\"white\" />\n   <circle r=\"".concat(donut, "\" fill=\"black\" />   \n</mask>\n                            </svg>"));
    var pathGroup = svg.querySelector('g');
    var maskGroup = svg.querySelector('mask');
    var gap = (_this$getAttribute3 = _this.getAttribute('gap')) !== null && _this$getAttribute3 !== void 0 ? _this$getAttribute3 : '0.015';

    //On crée les chemins
    _this.paths = data.map(function (_, k) {
      var color = colors[k % (colors.length - 1)];
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('fill', color);
      pathGroup.appendChild(path);
      path.addEventListener('mouseover', function () {
        return _this.handlePathHover(k);
      });
      path.addEventListener('mouseout', function () {
        return _this.handlePathOut(k);
      });
      return path;
    });

    //On crée les lines
    _this.lines = data.map(function () {
      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('stroke', '#000');
      line.setAttribute('stroke-width', gap);
      line.setAttribute('x1', 0);
      line.setAttribute('y1', 0);
      maskGroup.appendChild(line);
      return line;
    });

    //On crée les labels
    _this.labels = labels.map(function (label, k) {
      var div = document.createElement('div');
      div.innerText = label;
      shadow.appendChild(div);
      return div;
    });
    var style = document.createElement('style');
    style.innerHTML = "\n            :host {     \n                display: block;           \n                position: relative;\n            }\n            path {\n                cursor: pointer;\n                transition: opacity 0.5;\n            }\n            path:hover {\n                opacity: 0.5;\n            }\n            div {\n                position: absolute;\n                color: black;                \n                top: 0;\n                left: 0;\n                font-size: 0.8rem;\n                padding: 0.1em .3em;\n                transform: translate(-50%, -50%);\n                background-color: var(---tooltip-bg, #FFF);\n                opacity: 0;\n                transition: opacity 0.3s;\n            }\n            .is-active {\n                opacity: 1;\n            }\n        ";
    shadow.appendChild(style);
    shadow.appendChild(svg);
    return _this;
  }
  _createClass(PieChart, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      var data = this.getAttribute('data').split(';').map(function (v) {
        return parseFloat(v);
      });
      var now = Date.now();
      var duration = 1000;
      var draw = function draw() {
        var t = (Date.now() - now) / duration;
        if (t < 1) {
          _this2.draw(data, easeOutExpo(t));
          window.requestAnimationFrame(draw);
        } else {
          _this2.draw(data, 1);
        }
      };
      window.requestAnimationFrame(draw);
    }
  }, {
    key: "draw",
    value: function draw(data) {
      var progress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var total = data.reduce(function (acc, v) {
        return acc + v;
      }, 0);
      var angle = 0;
      var start = new Point(1, 0);
      for (var k = 0; k < data.length; k++) {
        var ratio = data[k] / total * progress;
        this.positionLabel(this.labels[k], angle + ratio * Math.PI);
        angle += ratio * 2 * Math.PI;
        var end = Point.fromAngle(angle);
        var largeFlag = ratio > .5 ? '1' : '0';
        this.paths[k].setAttribute('d', "M 0 0L ".concat(start.toSvgPath(), " A 1 1 0 ").concat(largeFlag, " 1 ").concat(end.toSvgPath(), " L 0 0"));
        this.lines[k].setAttribute('x2', end.x);
        this.lines[k].setAttribute('y2', end.y);
        start = end;
      }
    }

    /**
     * Gère l'effet au survol de la section du graph
     * @param k
     */
  }, {
    key: "handlePathHover",
    value: function handlePathHover(k) {
      var _this$labels$k;
      // this.dispatchEvent(new CustomEvent('sectionhover', {detail: k}))
      (_this$labels$k = this.labels[k]) === null || _this$labels$k === void 0 ? void 0 : _this$labels$k.classList.add('is-active');
    }

    /**
     * Gère l'effet lors de la sortie du survol de la section du graph
     * @param {number} k
     */
  }, {
    key: "handlePathOut",
    value: function handlePathOut(k) {
      var _this$labels$k2;
      (_this$labels$k2 = this.labels[k]) === null || _this$labels$k2 === void 0 ? void 0 : _this$labels$k2.classList.remove('is-active');
    }

    /**
     * Poistionne le label correctement
     * @param {HTMLDivElement|undefined} label
     * @param {number} angle
     */
  }, {
    key: "positionLabel",
    value: function positionLabel(label, angle) {
      if (!label || !angle) {
        return;
      }
      var point = Point.fromAngle(angle);
      label.style.setProperty('top', "".concat((point.y * 0.9 * 0.5 + 0.5) * 100, "%"));
      label.style.setProperty('left', "".concat((point.x * 0.9 * 0.5 + 0.5) * 100, "%"));
    }
  }]);
  return PieChart;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('pie-chart', PieChart);

// //Affichage des légendes
// const chartMaterials = document.querySelector('#chartMaterials');
// chartMaterials.addEventListener('sectionhover', e => {
//     console.log('Survolé', e.detail);
// })

/***/ }),

/***/ "./assets/js/tool/formObjects.js":
/*!***************************************!*\
  !*** ./assets/js/tool/formObjects.js ***!
  \***************************************/
/***/ (() => {

//DISABLED INPUT ELEMENT FOR EXPOSITION OR NOT
// document.getElementById('objects_form_floor').disabled = true;
//
// document.getElementById('form_checkbox_exposed').onclick = function() {
//     let isExposedTemp = document.getElementById('objects_form_isExposedTemp');
//     let isExposedPerm = document.getElementById('objects_form_isExposedPerm');
//
//     if(isExposedTemp.checked || isExposedPerm.checked) {
//         document.getElementById('objects_form_floor').disabled = false;
//         document.getElementById('objects_form_showCaseCode').disabled = true;
//         document.getElementById('objects_form_shelf').disabled = true;
//     } else {
//         document.getElementById('objects_form_floor').disabled = true;
//         document.getElementById('objects_form_showCaseCode').disabled = false;
//         document.getElementById('objects_form_shelf').disabled = false;
//     }
//
// }

/***/ }),

/***/ "./assets/styles/base/responsive.css":
/*!*******************************************!*\
  !*** ./assets/styles/base/responsive.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/base/toolbar.css":
/*!****************************************!*\
  !*** ./assets/styles/base/toolbar.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/bundles/captcha.css":
/*!*******************************************!*\
  !*** ./assets/styles/bundles/captcha.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/objects/form.css":
/*!****************************************!*\
  !*** ./assets/styles/objects/form.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/objects/media.css":
/*!*****************************************!*\
  !*** ./assets/styles/objects/media.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/objects/objects.css":
/*!*******************************************!*\
  !*** ./assets/styles/objects/objects.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/objects/tags.css":
/*!****************************************!*\
  !*** ./assets/styles/objects/tags.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/search/search.css":
/*!*****************************************!*\
  !*** ./assets/styles/search/search.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/site/style.css":
/*!**************************************!*\
  !*** ./assets/styles/site/style.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/base/home.scss":
/*!**************************************!*\
  !*** ./assets/styles/base/home.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/base/style.scss":
/*!***************************************!*\
  !*** ./assets/styles/base/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-0f55ce","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-97205b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9ib29rbWFya19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9wYWdpbmF0aW9uX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaXRlL3N0YXRpc3RpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Rvb2wvZm9ybU9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9iYXNlL3Jlc3BvbnNpdmUuY3NzP2M2MWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9iYXNlL3Rvb2xiYXIuY3NzP2UyOTEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9idW5kbGVzL2NhcHRjaGEuY3NzP2QyNDYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9vYmplY3RzL2Zvcm0uY3NzPzQzM2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9vYmplY3RzL21lZGlhLmNzcz82ODFkIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvb2JqZWN0cy9vYmplY3RzLmNzcz8wZDExIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvb2JqZWN0cy90YWdzLmNzcz8wMDk0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc2VhcmNoL3NlYXJjaC5jc3M/NGNlNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NpdGUvc3R5bGUuY3NzPzcwMTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jhc2UvaG9tZS5zY3NzPzg0MjkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9iYXNlL3N0eWxlLnNjc3M/NmFiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYm9va21hcmtfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Jvb2ttYXJrX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3BhZ2luYXRpb25fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3BhZ2luYXRpb25fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcblxyXG4gICAgLy8gY29ubmVjdCgpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdvaycpXHJcbiAgICAvLyB9XHJcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcclxuICAgICAgICAnYnV0dG9uJ1xyXG4gICAgXVxyXG4gICAgc3RhdGljIHZhbHVlcyA9IHtcclxuICAgICAgICB1cmw6IFN0cmluZyxcclxuICAgICAgICBpbnRlcnZhbDogTnVtYmVyLFxyXG4gICAgICAgIHBhcmFtczogT2JqZWN0LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUJvb2ttYXJrKGUpIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgZmV0Y2goZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXJsKS50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1yZWd1bGFyJylcclxuICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1zb2xpZCcpXHJcblxyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXJlZ3VsYXInKSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRpdGxlID0gJ0Fqb3V0ZXIgYXV4IGZhdm9yaXMnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRpdGxlID0gJ1JldGlyZXIgZGVzIGZhdm9yaXMnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcblxyXG4gICAgLy8gY29ubmVjdCgpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdvaycpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBzdGF0aWMgdGFyZ2V0cyA9IFtcclxuICAgIC8vICAgICAnYnV0dG9uJ1xyXG4gICAgLy8gXVxyXG4gICAgLy8gc3RhdGljIHZhbHVlcyA9IHtcclxuICAgIC8vICAgICB1cmw6IFN0cmluZyxcclxuICAgIC8vICAgICBpbnRlcnZhbDogTnVtYmVyLFxyXG4gICAgLy8gICAgIHBhcmFtczogT2JqZWN0LFxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpXHJcbiAgICB9XHJcblxyXG4gICAgbW9kaWZ5UGFnaW5hdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2Jhc2Uvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Jhc2UvaG9tZS5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYmFzZS9yZXNwb25zaXZlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Jhc2UvdG9vbGJhci5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9vYmplY3RzL2Zvcm0uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvb2JqZWN0cy9tZWRpYS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9vYmplY3RzL29iamVjdHMuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvb2JqZWN0cy90YWdzLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NlYXJjaC9zZWFyY2guY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc2l0ZS9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9idW5kbGVzL2NhcHRjaGEuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuLy8gaW1wb3J0ICcuL2pzL3Rvb2wvc2VhcmNoJztcbmltcG9ydCAnLi9qcy90b29sL2Zvcm1PYmplY3RzJztcbmltcG9ydCAnLi9qcy9zaXRlL3N0YXRpc3RpY3MnO1xuLy8gaW1wb3J0ICcuL2pzL3NpdGUvc3R5bGUnO1xuXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4nO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJmdW5jdGlvbiBzdHJUb0RvbShzdHIpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHIpLmZpcnN0Q2hpbGQ7XHJcbn1cclxuZnVuY3Rpb24gZWFzZU91dEV4cG8oeCkge1xyXG4gICAgcmV0dXJuIHggPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0xMCAqIHgpXHJcbn1cclxuXHJcbmNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgfVxyXG4gICAgdG9TdmdQYXRoKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnh9ICR7dGhpcy55fWBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUFuZ2xlKGFuZ2xlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gZGF0YVxyXG4gKiBAcHJvcGVydHkge1NWR1BhdGhFbGVtZW50W119IHBhdGhzXHJcbiAqL1xyXG5jbGFzcyBQaWVDaGFydCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pXHJcbiAgICAgICAgY29uc3QgY29sb3JzID0gWycjRkFBQTMyJywgJyMzRUZBN0QnLCAnI0ZBNkEyNScsICcjMEM5NEZBJywgJyNGQTFGMTknLCAnIzBDRkFFMicsICcjQUI2RDIzJywgJyNGRkNENUMnLCAnIzk1NThGNScsICcjMUU0NDYzJywgJyNCMDQxM0UnLCAnI0FEQjA0RicsICcjMkM3NUIwJ107XHJcbiAgICAgICAgY29uc3QgZG9udXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZG9udXQnKSA/PyAnMC4wMDUnXHJcbiAgICAgICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xhYmVscycpPy5zcGxpdCgnOycpID8/IFtdXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhJykuc3BsaXQoJzsnKS5tYXAodiA9PiBwYXJzZUZsb2F0KHYpKVxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IHN0clRvRG9tKGA8c3ZnIHZpZXdCb3g9XCItMSAtMSAyIDJcIj5cclxuPGcgbWFzaz1cInVybCgjZ3JhcGhNYXNrKVwiPlxyXG4gICBcclxuPC9nPlxyXG48bWFzayBpZD1cImdyYXBoTWFza1wiPlxyXG4gICAgPHJlY3QgeD1cIi0xXCIgeT1cIi0xXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgIDxjaXJjbGUgcj1cIiR7ZG9udXR9XCIgZmlsbD1cImJsYWNrXCIgLz4gICBcclxuPC9tYXNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+YClcclxuICAgICAgICBjb25zdCBwYXRoR3JvdXAgPSBzdmcucXVlcnlTZWxlY3RvcignZycpXHJcbiAgICAgICAgY29uc3QgbWFza0dyb3VwID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoJ21hc2snKVxyXG4gICAgICAgIGNvbnN0IGdhcCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdnYXAnKSA/PyAnMC4wMTUnXHJcblxyXG5cclxuICAgICAgICAvL09uIGNyw6llIGxlcyBjaGVtaW5zXHJcbiAgICAgICAgdGhpcy5wYXRocyA9IGRhdGEubWFwKChfLCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW2sgJSAoY29sb3JzLmxlbmd0aCAtIDEpXVxyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJylcclxuICAgICAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBjb2xvcilcclxuICAgICAgICAgICAgcGF0aEdyb3VwLmFwcGVuZENoaWxkKHBhdGgpXHJcbiAgICAgICAgICAgIHBhdGguYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gdGhpcy5oYW5kbGVQYXRoSG92ZXIoaykpXHJcbiAgICAgICAgICAgIHBhdGguYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB0aGlzLmhhbmRsZVBhdGhPdXQoaykpXHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy9PbiBjcsOpZSBsZXMgbGluZXNcclxuICAgICAgICB0aGlzLmxpbmVzID0gZGF0YS5tYXAoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdsaW5lJylcclxuICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcjMDAwJylcclxuICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIGdhcClcclxuICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3gxJywgMClcclxuICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoJ3kxJywgMClcclxuICAgICAgICAgICAgbWFza0dyb3VwLmFwcGVuZENoaWxkKGxpbmUpXHJcbiAgICAgICAgICAgIHJldHVybiBsaW5lXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy9PbiBjcsOpZSBsZXMgbGFiZWxzXHJcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBsYWJlbHMubWFwKChsYWJlbCwgaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkaXYuaW5uZXJUZXh0ID0gbGFiZWxcclxuICAgICAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKGRpdilcclxuICAgICAgICAgICAgcmV0dXJuIGRpdlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgOmhvc3QgeyAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjazsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjFlbSAuM2VtO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0tdG9vbHRpcC1iZywgI0ZGRik7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGUpXHJcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKHN2ZylcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEnKS5zcGxpdCgnOycpLm1hcCh2ID0+IHBhcnNlRmxvYXQodikpXHJcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMTAwMFxyXG4gICAgICAgIGNvbnN0IGRyYXcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSAoRGF0ZS5ub3coKSAtIG5vdykgLyBkdXJhdGlvblxyXG4gICAgICAgICAgICBpZih0IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KGRhdGEsIGVhc2VPdXRFeHBvKHQpKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KGRhdGEsIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGRhdGEsIHByb2dyZXNzID0gMSkge1xyXG5cclxuICAgICAgICBjb25zdCB0b3RhbCA9IGRhdGEucmVkdWNlKChhY2MsdikgPT4gYWNjICsgdiwgMClcclxuICAgICAgICBsZXQgYW5nbGUgPSAwXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbmV3IFBvaW50KDEsIDApXHJcbiAgICAgICAgZm9yKCBsZXQgayA9IDA7IGsgPCBkYXRhLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gKGRhdGFba10gLyB0b3RhbCkgKiBwcm9ncmVzc1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkxhYmVsKHRoaXMubGFiZWxzW2tdLCBhbmdsZSArIHJhdGlvICogTWF0aC5QSSlcclxuXHJcbiAgICAgICAgICAgIGFuZ2xlICs9IHJhdGlvICogMiAqTWF0aC5QSVxyXG4gICAgICAgICAgICBjb25zdCBlbmQgPSBQb2ludC5mcm9tQW5nbGUoYW5nbGUpXHJcbiAgICAgICAgICAgIGNvbnN0IGxhcmdlRmxhZyA9IHJhdGlvID4gLjUgPyAnMScgOiAnMCdcclxuICAgICAgICAgICAgdGhpcy5wYXRoc1trXS5zZXRBdHRyaWJ1dGUoJ2QnLCBgTSAwIDBMICR7c3RhcnQudG9TdmdQYXRoKCl9IEEgMSAxIDAgJHtsYXJnZUZsYWd9IDEgJHtlbmQudG9TdmdQYXRoKCl9IEwgMCAwYClcclxuICAgICAgICAgICAgdGhpcy5saW5lc1trXS5zZXRBdHRyaWJ1dGUoJ3gyJywgZW5kLngpXHJcbiAgICAgICAgICAgIHRoaXMubGluZXNba10uc2V0QXR0cmlidXRlKCd5MicsIGVuZC55KVxyXG4gICAgICAgICAgICBzdGFydCA9IGVuZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEfDqHJlIGwnZWZmZXQgYXUgc3Vydm9sIGRlIGxhIHNlY3Rpb24gZHUgZ3JhcGhcclxuICAgICAqIEBwYXJhbSBrXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVBhdGhIb3ZlcihrKSB7XHJcbiAgICAgICAgLy8gdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VjdGlvbmhvdmVyJywge2RldGFpbDoga30pKVxyXG4gICAgICAgIHRoaXMubGFiZWxzW2tdPy5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR8OocmUgbCdlZmZldCBsb3JzIGRlIGxhIHNvcnRpZSBkdSBzdXJ2b2wgZGUgbGEgc2VjdGlvbiBkdSBncmFwaFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGtcclxuICAgICAqL1xyXG4gICAgaGFuZGxlUGF0aE91dChrKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbHNba10/LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb2lzdGlvbm5lIGxlIGxhYmVsIGNvcnJlY3RlbWVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudHx1bmRlZmluZWR9IGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcclxuICAgICAqL1xyXG4gICAgcG9zaXRpb25MYWJlbChsYWJlbCwgYW5nbGUpIHtcclxuICAgICAgICBpZiAoIWxhYmVsIHx8ICFhbmdsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50ID0gUG9pbnQuZnJvbUFuZ2xlKGFuZ2xlKVxyXG4gICAgICAgIGxhYmVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBgJHsocG9pbnQueSAqIDAuOSAqIDAuNSArIDAuNSkgKiAxMDAgfSVgKVxyXG4gICAgICAgIGxhYmVsLnN0eWxlLnNldFByb3BlcnR5KCdsZWZ0JywgYCR7KHBvaW50LnggKiAwLjkgKiAwLjUgKyAwLjUpICogMTAwIH0lYClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncGllLWNoYXJ0JywgUGllQ2hhcnQpXHJcblxyXG5cclxuLy8gLy9BZmZpY2hhZ2UgZGVzIGzDqWdlbmRlc1xyXG4vLyBjb25zdCBjaGFydE1hdGVyaWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFydE1hdGVyaWFscycpO1xyXG4vLyBjaGFydE1hdGVyaWFscy5hZGRFdmVudExpc3RlbmVyKCdzZWN0aW9uaG92ZXInLCBlID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdTdXJ2b2zDqScsIGUuZGV0YWlsKTtcclxuLy8gfSlcclxuXHJcbiIsIi8vRElTQUJMRUQgSU5QVVQgRUxFTUVOVCBGT1IgRVhQT1NJVElPTiBPUiBOT1RcclxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iamVjdHNfZm9ybV9mbG9vcicpLmRpc2FibGVkID0gdHJ1ZTtcclxuLy9cclxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1fY2hlY2tib3hfZXhwb3NlZCcpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgIGxldCBpc0V4cG9zZWRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iamVjdHNfZm9ybV9pc0V4cG9zZWRUZW1wJyk7XHJcbi8vICAgICBsZXQgaXNFeHBvc2VkUGVybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3RzX2Zvcm1faXNFeHBvc2VkUGVybScpO1xyXG4vL1xyXG4vLyAgICAgaWYoaXNFeHBvc2VkVGVtcC5jaGVja2VkIHx8IGlzRXhwb3NlZFBlcm0uY2hlY2tlZCkge1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3RzX2Zvcm1fZmxvb3InKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3RzX2Zvcm1fc2hvd0Nhc2VDb2RlJykuZGlzYWJsZWQgPSB0cnVlO1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3RzX2Zvcm1fc2hlbGYnKS5kaXNhYmxlZCA9IHRydWU7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3RzX2Zvcm1fZmxvb3InKS5kaXNhYmxlZCA9IHRydWU7XHJcbi8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iamVjdHNfZm9ybV9zaG93Q2FzZUNvZGUnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3RzX2Zvcm1fc2hlbGYnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbnNvbGUiLCJsb2ciLCJlIiwiYnV0dG9uIiwiY3VycmVudFRhcmdldCIsImZldGNoIiwiZGF0YXNldCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInRpdGxlIiwiYmxvYiIsIlN0cmluZyIsImludGVydmFsIiwiTnVtYmVyIiwicGFyYW1zIiwiT2JqZWN0IiwidmFsdWUiLCJpbm5lclRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdHJUb0RvbSIsInN0ciIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJmaXJzdENoaWxkIiwiZWFzZU91dEV4cG8iLCJ4IiwiTWF0aCIsInBvdyIsIlBvaW50IiwieSIsImFuZ2xlIiwiY29zIiwic2luIiwiUGllQ2hhcnQiLCJzaGFkb3ciLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiY29sb3JzIiwiZG9udXQiLCJnZXRBdHRyaWJ1dGUiLCJsYWJlbHMiLCJzcGxpdCIsImRhdGEiLCJtYXAiLCJ2IiwicGFyc2VGbG9hdCIsInN2ZyIsInBhdGhHcm91cCIsIm1hc2tHcm91cCIsImdhcCIsInBhdGhzIiwiXyIsImsiLCJjb2xvciIsImxlbmd0aCIsInBhdGgiLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQYXRoSG92ZXIiLCJoYW5kbGVQYXRoT3V0IiwibGluZXMiLCJsaW5lIiwibGFiZWwiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJpbm5lckhUTUwiLCJub3ciLCJEYXRlIiwiZHVyYXRpb24iLCJkcmF3IiwidCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByb2dyZXNzIiwidG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJzdGFydCIsInJhdGlvIiwicG9zaXRpb25MYWJlbCIsIlBJIiwiZW5kIiwiZnJvbUFuZ2xlIiwibGFyZ2VGbGFnIiwidG9TdmdQYXRoIiwiYWRkIiwicmVtb3ZlIiwicG9pbnQiLCJzZXRQcm9wZXJ0eSIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwic291cmNlUm9vdCI6IiJ9