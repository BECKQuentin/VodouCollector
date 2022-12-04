(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bookmark_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/bookmark_controller.js",
	"./media_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/media_controller.js",
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

    function connect() {}
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

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/media_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/media_controller.js ***!
  \******************************************************************************************************************/
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
    value: function connect() {
      console.log('connected');
    }

    // saveBookmark(e) {
    //     let button = e.currentTarget
    //     fetch(e.currentTarget.dataset.url).then( (response) => {
    //         button.querySelector('i').classList.toggle('fa-regular')
    //         button.querySelector('i').classList.toggle('fa-solid')
    //
    //         if (button.querySelector('i').classList.contains('fa-regular')) {
    //             button.title = 'Ajouter aux favoris';
    //         } else {
    //             button.title = 'Retirer des favoris';
    //         }
    //
    //         return response.blob();
    //     })
    // }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);


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

    function connect() {}
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
/* harmony import */ var _styles_base_responsive_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/base/responsive.scss */ "./assets/styles/base/responsive.scss");
/* harmony import */ var _styles_base_toolbar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/base/toolbar.scss */ "./assets/styles/base/toolbar.scss");
/* harmony import */ var _styles_objects_form_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/objects/form.css */ "./assets/styles/objects/form.css");
/* harmony import */ var _styles_objects_media_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/objects/media.scss */ "./assets/styles/objects/media.scss");
/* harmony import */ var _styles_objects_objects_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/objects/objects.scss */ "./assets/styles/objects/objects.scss");
/* harmony import */ var _styles_objects_tags_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/objects/tags.css */ "./assets/styles/objects/tags.css");
/* harmony import */ var _styles_search_search_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/search/search.scss */ "./assets/styles/search/search.scss");
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

/***/ "./assets/styles/objects/tags.css":
/*!****************************************!*\
  !*** ./assets/styles/objects/tags.css ***!
  \****************************************/
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

/***/ "./assets/styles/base/responsive.scss":
/*!********************************************!*\
  !*** ./assets/styles/base/responsive.scss ***!
  \********************************************/
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


/***/ }),

/***/ "./assets/styles/base/toolbar.scss":
/*!*****************************************!*\
  !*** ./assets/styles/base/toolbar.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/objects/media.scss":
/*!******************************************!*\
  !*** ./assets/styles/objects/media.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/objects/objects.scss":
/*!********************************************!*\
  !*** ./assets/styles/objects/objects.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/search/search.scss":
/*!******************************************!*\
  !*** ./assets/styles/search/search.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_function-name_js-node_modules_core-js_internals_object-792382","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-0f55ce","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-97205b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBSztNQUN4RW1DLEtBQUssQ0FBQ0csS0FBSyxDQUFDd0IsV0FBVyxDQUFDLE1BQU0sWUFBSyxDQUFDRCxLQUFLLENBQUNqRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxPQUFLO0lBQzdFO0VBQUM7RUFBQTtBQUFBLGlDQXhKa0JtRSxXQUFXO0FBNEpsQ0MsY0FBYyxDQUFDQyxNQUFNLENBQUMsV0FBVyxFQUFFN0QsUUFBUSxDQUFDOztBQUc1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Jvb2ttYXJrX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL21lZGlhX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3BhZ2luYXRpb25fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NpdGUvc3RhdGlzdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdG9vbC9mb3JtT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2J1bmRsZXMvY2FwdGNoYS5jc3M/ZDI0NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL29iamVjdHMvZm9ybS5jc3M/NDMzYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL29iamVjdHMvdGFncy5jc3M/MDA5NCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NpdGUvc3R5bGUuY3NzPzcwMTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jhc2UvaG9tZS5zY3NzPzg0MjkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9iYXNlL3Jlc3BvbnNpdmUuc2Nzcz83ZGYwIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYmFzZS9zdHlsZS5zY3NzPzZhYjMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9iYXNlL3Rvb2xiYXIuc2Nzcz9lNjZlIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvb2JqZWN0cy9tZWRpYS5zY3NzPzlmMWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9vYmplY3RzL29iamVjdHMuc2Nzcz8yZjgzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc2VhcmNoL3NlYXJjaC5zY3NzPzI0NWYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2Jvb2ttYXJrX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9ib29rbWFya19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9tZWRpYV9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbWVkaWFfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vcGFnaW5hdGlvbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcGFnaW5hdGlvbl9jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuXHJcbiAgICAvLyBjb25uZWN0KCkge1xyXG4gICAgLy8gICAgIC8vIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ29rJylcclxuICAgIC8vIH1cclxuICAgIHN0YXRpYyB0YXJnZXRzID0gW1xyXG4gICAgICAgICdidXR0b24nXHJcbiAgICBdXHJcbiAgICBzdGF0aWMgdmFsdWVzID0ge1xyXG4gICAgICAgIHVybDogU3RyaW5nLFxyXG4gICAgICAgIGludGVydmFsOiBOdW1iZXIsXHJcbiAgICAgICAgcGFyYW1zOiBPYmplY3QsXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUJvb2ttYXJrKGUpIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0XHJcbiAgICAgICAgZmV0Y2goZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXJsKS50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1yZWd1bGFyJylcclxuICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1zb2xpZCcpXHJcblxyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXJlZ3VsYXInKSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRpdGxlID0gJ0Fqb3V0ZXIgYXV4IGZhdm9yaXMnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRpdGxlID0gJ1JldGlyZXIgZGVzIGZhdm9yaXMnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcblxyXG5cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2F2ZUJvb2ttYXJrKGUpIHtcclxuICAgIC8vICAgICBsZXQgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0XHJcbiAgICAvLyAgICAgZmV0Y2goZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXJsKS50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgIC8vICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1yZWd1bGFyJylcclxuICAgIC8vICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1zb2xpZCcpXHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICBpZiAoYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXJlZ3VsYXInKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgYnV0dG9uLnRpdGxlID0gJ0Fqb3V0ZXIgYXV4IGZhdm9yaXMnO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgYnV0dG9uLnRpdGxlID0gJ1JldGlyZXIgZGVzIGZhdm9yaXMnO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcblxyXG4gICAgLy8gY29ubmVjdCgpIHtcclxuICAgIC8vICAgICAvLyB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdvaycpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBzdGF0aWMgdGFyZ2V0cyA9IFtcclxuICAgIC8vICAgICAnYnV0dG9uJ1xyXG4gICAgLy8gXVxyXG4gICAgLy8gc3RhdGljIHZhbHVlcyA9IHtcclxuICAgIC8vICAgICB1cmw6IFN0cmluZyxcclxuICAgIC8vICAgICBpbnRlcnZhbDogTnVtYmVyLFxyXG4gICAgLy8gICAgIHBhcmFtczogT2JqZWN0LFxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbm5lY3QoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vZGlmeVBhZ2luYXRpb24oZSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC5pbm5lclRleHQ7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2Jhc2Uvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Jhc2UvaG9tZS5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYmFzZS9yZXNwb25zaXZlLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9iYXNlL3Rvb2xiYXIuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL29iamVjdHMvZm9ybS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9vYmplY3RzL21lZGlhLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9vYmplY3RzL29iamVjdHMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL29iamVjdHMvdGFncy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zZWFyY2gvc2VhcmNoLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zaXRlL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2J1bmRsZXMvY2FwdGNoYS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG4vLyBpbXBvcnQgJy4vanMvdG9vbC9zZWFyY2gnO1xuaW1wb3J0ICcuL2pzL3Rvb2wvZm9ybU9iamVjdHMnO1xuaW1wb3J0ICcuL2pzL3NpdGUvc3RhdGlzdGljcyc7XG4vLyBpbXBvcnQgJy4vanMvc2l0ZS9zdHlsZSc7XG5cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbic7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImZ1bmN0aW9uIHN0clRvRG9tKHN0cikge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cikuZmlyc3RDaGlsZDtcclxufVxyXG5mdW5jdGlvbiBlYXNlT3V0RXhwbyh4KSB7XHJcbiAgICByZXR1cm4geCA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogeClcclxufVxyXG5cclxuY2xhc3MgUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICB9XHJcbiAgICB0b1N2Z1BhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9YFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tQW5nbGUoYW5nbGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KE1hdGguY29zKGFuZ2xlKSwgTWF0aC5zaW4oYW5nbGUpKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBkYXRhXHJcbiAqIEBwcm9wZXJ0eSB7U1ZHUGF0aEVsZW1lbnRbXX0gcGF0aHNcclxuICovXHJcbmNsYXNzIFBpZUNoYXJ0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSlcclxuICAgICAgICBjb25zdCBjb2xvcnMgPSBbJyNGQUFBMzInLCAnIzNFRkE3RCcsICcjRkE2QTI1JywgJyMwQzk0RkEnLCAnI0ZBMUYxOScsICcjMENGQUUyJywgJyNBQjZEMjMnLCAnI0ZGQ0Q1QycsICcjOTU1OEY1JywgJyMxRTQ0NjMnLCAnI0IwNDEzRScsICcjQURCMDRGJywgJyMyQzc1QjAnXTtcclxuICAgICAgICBjb25zdCBkb251dCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkb251dCcpID8/ICcwLjAwNSdcclxuICAgICAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbGFiZWxzJyk/LnNwbGl0KCc7JykgPz8gW11cclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEnKS5zcGxpdCgnOycpLm1hcCh2ID0+IHBhcnNlRmxvYXQodikpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gc3RyVG9Eb20oYDxzdmcgdmlld0JveD1cIi0xIC0xIDIgMlwiPlxyXG48ZyBtYXNrPVwidXJsKCNncmFwaE1hc2spXCI+XHJcbiAgIFxyXG48L2c+XHJcbjxtYXNrIGlkPVwiZ3JhcGhNYXNrXCI+XHJcbiAgICA8cmVjdCB4PVwiLTFcIiB5PVwiLTFcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIyXCIgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgPGNpcmNsZSByPVwiJHtkb251dH1cIiBmaWxsPVwiYmxhY2tcIiAvPiAgIFxyXG48L21hc2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gKVxyXG4gICAgICAgIGNvbnN0IHBhdGhHcm91cCA9IHN2Zy5xdWVyeVNlbGVjdG9yKCdnJylcclxuICAgICAgICBjb25zdCBtYXNrR3JvdXAgPSBzdmcucXVlcnlTZWxlY3RvcignbWFzaycpXHJcbiAgICAgICAgY29uc3QgZ2FwID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2dhcCcpID8/ICcwLjAxNSdcclxuXHJcblxyXG4gICAgICAgIC8vT24gY3LDqWUgbGVzIGNoZW1pbnNcclxuICAgICAgICB0aGlzLnBhdGhzID0gZGF0YS5tYXAoKF8sIGspID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnNbayAlIChjb2xvcnMubGVuZ3RoIC0gMSldXHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKVxyXG4gICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGNvbG9yKVxyXG4gICAgICAgICAgICBwYXRoR3JvdXAuYXBwZW5kQ2hpbGQocGF0aClcclxuICAgICAgICAgICAgcGF0aC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB0aGlzLmhhbmRsZVBhdGhIb3ZlcihrKSlcclxuICAgICAgICAgICAgcGF0aC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHRoaXMuaGFuZGxlUGF0aE91dChrKSlcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGhcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL09uIGNyw6llIGxlcyBsaW5lc1xyXG4gICAgICAgIHRoaXMubGluZXMgPSBkYXRhLm1hcCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2xpbmUnKVxyXG4gICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJyMwMDAnKVxyXG4gICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgZ2FwKVxyXG4gICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZSgneDEnLCAwKVxyXG4gICAgICAgICAgICBsaW5lLnNldEF0dHJpYnV0ZSgneTEnLCAwKVxyXG4gICAgICAgICAgICBtYXNrR3JvdXAuYXBwZW5kQ2hpbGQobGluZSlcclxuICAgICAgICAgICAgcmV0dXJuIGxpbmVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL09uIGNyw6llIGxlcyBsYWJlbHNcclxuICAgICAgICB0aGlzLmxhYmVscyA9IGxhYmVscy5tYXAoKGxhYmVsLCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGRpdi5pbm5lclRleHQgPSBsYWJlbFxyXG4gICAgICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgICAgICAgICByZXR1cm4gZGl2XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXHJcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA6aG9zdCB7ICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMWVtIC4zZW07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLS10b29sdGlwLWJnLCAjRkZGKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgICAgIHNoYWRvdy5hcHBlbmRDaGlsZChzdHlsZSlcclxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3ZnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YScpLnNwbGl0KCc7JykubWFwKHYgPT4gcGFyc2VGbG9hdCh2KSlcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSAxMDAwXHJcbiAgICAgICAgY29uc3QgZHJhdyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IChEYXRlLm5vdygpIC0gbm93KSAvIGR1cmF0aW9uXHJcbiAgICAgICAgICAgIGlmKHQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoZGF0YSwgZWFzZU91dEV4cG8odCkpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoZGF0YSwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoZGF0YSwgcHJvZ3Jlc3MgPSAxKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gZGF0YS5yZWR1Y2UoKGFjYyx2KSA9PiBhY2MgKyB2LCAwKVxyXG4gICAgICAgIGxldCBhbmdsZSA9IDBcclxuICAgICAgICBsZXQgc3RhcnQgPSBuZXcgUG9pbnQoMSwgMClcclxuICAgICAgICBmb3IoIGxldCBrID0gMDsgayA8IGRhdGEubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcmF0aW8gPSAoZGF0YVtrXSAvIHRvdGFsKSAqIHByb2dyZXNzXHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uTGFiZWwodGhpcy5sYWJlbHNba10sIGFuZ2xlICsgcmF0aW8gKiBNYXRoLlBJKVxyXG5cclxuICAgICAgICAgICAgYW5nbGUgKz0gcmF0aW8gKiAyICpNYXRoLlBJXHJcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IFBvaW50LmZyb21BbmdsZShhbmdsZSlcclxuICAgICAgICAgICAgY29uc3QgbGFyZ2VGbGFnID0gcmF0aW8gPiAuNSA/ICcxJyA6ICcwJ1xyXG4gICAgICAgICAgICB0aGlzLnBhdGhzW2tdLnNldEF0dHJpYnV0ZSgnZCcsIGBNIDAgMEwgJHtzdGFydC50b1N2Z1BhdGgoKX0gQSAxIDEgMCAke2xhcmdlRmxhZ30gMSAke2VuZC50b1N2Z1BhdGgoKX0gTCAwIDBgKVxyXG4gICAgICAgICAgICB0aGlzLmxpbmVzW2tdLnNldEF0dHJpYnV0ZSgneDInLCBlbmQueClcclxuICAgICAgICAgICAgdGhpcy5saW5lc1trXS5zZXRBdHRyaWJ1dGUoJ3kyJywgZW5kLnkpXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gZW5kXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR8OocmUgbCdlZmZldCBhdSBzdXJ2b2wgZGUgbGEgc2VjdGlvbiBkdSBncmFwaFxyXG4gICAgICogQHBhcmFtIGtcclxuICAgICAqL1xyXG4gICAgaGFuZGxlUGF0aEhvdmVyKGspIHtcclxuICAgICAgICAvLyB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZWN0aW9uaG92ZXInLCB7ZGV0YWlsOiBrfSkpXHJcbiAgICAgICAgdGhpcy5sYWJlbHNba10/LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHw6hyZSBsJ2VmZmV0IGxvcnMgZGUgbGEgc29ydGllIGR1IHN1cnZvbCBkZSBsYSBzZWN0aW9uIGR1IGdyYXBoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0ga1xyXG4gICAgICovXHJcbiAgICBoYW5kbGVQYXRoT3V0KGspIHtcclxuICAgICAgICB0aGlzLmxhYmVsc1trXT8uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvaXN0aW9ubmUgbGUgbGFiZWwgY29ycmVjdGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fHVuZGVmaW5lZH0gbGFiZWxcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxyXG4gICAgICovXHJcbiAgICBwb3NpdGlvbkxhYmVsKGxhYmVsLCBhbmdsZSkge1xyXG4gICAgICAgIGlmICghbGFiZWwgfHwgIWFuZ2xlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSBQb2ludC5mcm9tQW5nbGUoYW5nbGUpXHJcbiAgICAgICAgbGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIGAkeyhwb2ludC55ICogMC45ICogMC41ICsgMC41KSAqIDEwMCB9JWApXHJcbiAgICAgICAgbGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnLCBgJHsocG9pbnQueCAqIDAuOSAqIDAuNSArIDAuNSkgKiAxMDAgfSVgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwaWUtY2hhcnQnLCBQaWVDaGFydClcclxuXHJcblxyXG4vLyAvL0FmZmljaGFnZSBkZXMgbMOpZ2VuZGVzXHJcbi8vIGNvbnN0IGNoYXJ0TWF0ZXJpYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXJ0TWF0ZXJpYWxzJyk7XHJcbi8vIGNoYXJ0TWF0ZXJpYWxzLmFkZEV2ZW50TGlzdGVuZXIoJ3NlY3Rpb25ob3ZlcicsIGUgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ1N1cnZvbMOpJywgZS5kZXRhaWwpO1xyXG4vLyB9KVxyXG5cclxuIiwiXHJcblxyXG4vL0RJU0FCTEVEIElOUFVUIEVMRU1FTlQgRk9SIEVYUE9TSVRJT04gT1IgTk9UXHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3RzX2Zvcm1fZmxvb3InKS5kaXNhYmxlZCA9IHRydWU7XHJcbi8vXHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtX2NoZWNrYm94X2V4cG9zZWQnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICBsZXQgaXNFeHBvc2VkVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3RzX2Zvcm1faXNFeHBvc2VkVGVtcCcpO1xyXG4vLyAgICAgbGV0IGlzRXhwb3NlZFBlcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0c19mb3JtX2lzRXhwb3NlZFBlcm0nKTtcclxuLy9cclxuLy8gICAgIGlmKGlzRXhwb3NlZFRlbXAuY2hlY2tlZCB8fCBpc0V4cG9zZWRQZXJtLmNoZWNrZWQpIHtcclxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0c19mb3JtX2Zsb29yJykuZGlzYWJsZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0c19mb3JtX3Nob3dDYXNlQ29kZScpLmRpc2FibGVkID0gdHJ1ZTtcclxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0c19mb3JtX3NoZWxmJykuZGlzYWJsZWQgPSB0cnVlO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0c19mb3JtX2Zsb29yJykuZGlzYWJsZWQgPSB0cnVlO1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3RzX2Zvcm1fc2hvd0Nhc2VDb2RlJykuZGlzYWJsZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0c19mb3JtX3NoZWxmJykuZGlzYWJsZWQgPSBmYWxzZTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlIiwiYnV0dG9uIiwiY3VycmVudFRhcmdldCIsImZldGNoIiwiZGF0YXNldCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInRpdGxlIiwiYmxvYiIsIlN0cmluZyIsImludGVydmFsIiwiTnVtYmVyIiwicGFyYW1zIiwiT2JqZWN0IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiaW5uZXJUZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RyVG9Eb20iLCJzdHIiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiZmlyc3RDaGlsZCIsImVhc2VPdXRFeHBvIiwieCIsIk1hdGgiLCJwb3ciLCJQb2ludCIsInkiLCJhbmdsZSIsImNvcyIsInNpbiIsIlBpZUNoYXJ0Iiwic2hhZG93IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImNvbG9ycyIsImRvbnV0IiwiZ2V0QXR0cmlidXRlIiwibGFiZWxzIiwic3BsaXQiLCJkYXRhIiwibWFwIiwidiIsInBhcnNlRmxvYXQiLCJzdmciLCJwYXRoR3JvdXAiLCJtYXNrR3JvdXAiLCJnYXAiLCJwYXRocyIsIl8iLCJrIiwiY29sb3IiLCJsZW5ndGgiLCJwYXRoIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUGF0aEhvdmVyIiwiaGFuZGxlUGF0aE91dCIsImxpbmVzIiwibGluZSIsImxhYmVsIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiaW5uZXJIVE1MIiwibm93IiwiRGF0ZSIsImR1cmF0aW9uIiwiZHJhdyIsInQiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcm9ncmVzcyIsInRvdGFsIiwicmVkdWNlIiwiYWNjIiwic3RhcnQiLCJyYXRpbyIsInBvc2l0aW9uTGFiZWwiLCJQSSIsImVuZCIsImZyb21BbmdsZSIsImxhcmdlRmxhZyIsInRvU3ZnUGF0aCIsImFkZCIsInJlbW92ZSIsInBvaW50Iiwic2V0UHJvcGVydHkiLCJIVE1MRWxlbWVudCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==