(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order_shipment_return"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "subCategory",
  created: function created() {
    this.getOrderShipmentReturn();
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        id: "",
        order_info: "",
        shipment_info: "",
        return_policy: ""
      }),
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default.a,
      editorConfig: {},
      error: "",
      loading: true
    };
  },
  methods: {
    getOrderShipmentReturn: function getOrderShipmentReturn() {
      var _this = this;

      axios.get("/api/get/shipment/order/return").then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this.form.id = resp.data.setting.id;
          _this.form.order_info = resp.data.setting.order_info;
          _this.form.shipment_info = resp.data.setting.shipment_info;
          _this.form.return_policy = resp.data.setting.return_policy;
          _this.loading = false;
        }
      });
    },
    updateOrderShipmentReturn: function updateOrderShipmentReturn() {
      var _this2 = this;

      this.form.post("/api/edit/shipment/return/order/" + this.form.id, {
        transformRequest: [function (data, headers) {
          return objectToFormData(data);
        }]
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this2.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });

          _this2.getOrderShipmentReturn();
        } else {
          _this2.error = "some thing want to wrong";
        }
      })["catch"](function (error) {
        _this2.error = error.response.data.errors;

        _this2.$toasted.show("some thing want to wrong", {
          type: "error",
          position: "top-center",
          duration: 5000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=template&id=03184e68&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=template&id=03184e68& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("admin-main"),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-lg-8 col-lg-offset-2" }, [
              _c("div", { staticClass: "box box-primary" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "box-body" }, [
                  _vm.error
                    ? _c("div", { staticClass: "alert-danger alert" }, [
                        _vm._v(_vm._s(_vm.error))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateOrderShipmentReturn($event)
                        },
                        keydown: function($event) {
                          return _vm.form.onKeydown($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "invoice" } }, [
                                _vm._v("Order Details ")
                              ]),
                              _vm._v(" "),
                              _c("ckeditor", {
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "order_info"
                                  )
                                },
                                attrs: {
                                  editor: _vm.editor,
                                  name: "order_info",
                                  config: _vm.editorConfig
                                },
                                model: {
                                  value: _vm.form.order_info,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "order_info", $$v)
                                  },
                                  expression: "form.order_info"
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "order_info" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "invoice" } }, [
                                _vm._v("Shipment Details ")
                              ]),
                              _vm._v(" "),
                              _c("ckeditor", {
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "shipment_info"
                                  )
                                },
                                attrs: {
                                  editor: _vm.editor,
                                  name: "shipment_info",
                                  config: _vm.editorConfig
                                },
                                model: {
                                  value: _vm.form.shipment_info,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "shipment_info", $$v)
                                  },
                                  expression: "form.shipment_info"
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "shipment_info"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "invoice" } }, [
                                _vm._v("Return Policy ")
                              ]),
                              _vm._v(" "),
                              _c("ckeditor", {
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "return_policy"
                                  )
                                },
                                attrs: {
                                  editor: _vm.editor,
                                  name: "return_policy",
                                  config: _vm.editorConfig
                                },
                                model: {
                                  value: _vm.form.return_policy,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "return_policy", $$v)
                                  },
                                  expression: "form.return_policy"
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "return_policy"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group text-center" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  disabled: _vm.form.busy,
                                  type: "submit"
                                }
                              },
                              [
                                _vm.form.busy
                                  ? _c("i", {
                                      staticClass: "fa fa-spin fa-spinner"
                                    })
                                  : _vm._e(),
                                _vm._v("Submit\n                      ")
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-dashboard" }),
            _vm._v("Dashboard ")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("setting")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header text-center with-border" }, [
      _c("h3", { staticClass: "box-title" }, [
        _vm._v("Order Shipment And Return Policy")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/page_info/OrderShipmentReturn.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/page_info/OrderShipmentReturn.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderShipmentReturn_vue_vue_type_template_id_03184e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderShipmentReturn.vue?vue&type=template&id=03184e68& */ "./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=template&id=03184e68&");
/* harmony import */ var _OrderShipmentReturn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderShipmentReturn.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderShipmentReturn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderShipmentReturn_vue_vue_type_template_id_03184e68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderShipmentReturn_vue_vue_type_template_id_03184e68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/page_info/OrderShipmentReturn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderShipmentReturn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderShipmentReturn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderShipmentReturn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=template&id=03184e68&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=template&id=03184e68& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderShipmentReturn_vue_vue_type_template_id_03184e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderShipmentReturn.vue?vue&type=template&id=03184e68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/page_info/OrderShipmentReturn.vue?vue&type=template&id=03184e68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderShipmentReturn_vue_vue_type_template_id_03184e68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderShipmentReturn_vue_vue_type_template_id_03184e68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);