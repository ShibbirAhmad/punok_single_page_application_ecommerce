(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling_offer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/selling_offer/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/selling_offer/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.loading = false;
    }, 500);
    this.sellingOfferList();
  },
  data: function data() {
    return {
      sellingOffer: {},
      name: '',
      loading: true
    };
  },
  methods: {
    sellingOfferList: function sellingOfferList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/selling/offer/list?page=' + page).then(function (resp) {
        console.log(resp);

        if (resp.data.success == "OK") {
          _this2.sellingOffer = resp.data.sellingOffer;
        }
      })["catch"]();
    },
    deActive: function deActive(offer) {
      var _this3 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "Do you want de-active this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(function (result) {
        if (result.value) {
          axios.get('/selling/offer/deactive/' + offer.id).then(function (resp) {
            if (resp.data.success == 'OK') {
              _this3.sellingOfferList();

              _this3.$toasted.show(resp.data.message, {
                position: 'top-center',
                type: 'success',
                duration: 4000
              });
            } else {
              _this3.$toasted.show('some thing want to wrong', {
                position: 'top-center',
                type: 'error',
                duration: 4000
              });
            }
          })["catch"](function (error) {
            _this3.$toasted.show('some thing want to wrong', {
              position: 'top-center',
              type: 'error',
              duration: 4000
            });
          });
        } else {
          _this3.$toasted.show('OK ! no action here', {
            position: 'top-center',
            type: 'info',
            duration: 3000
          });
        }
      });
    },
    active: function active(offer) {
      var _this4 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "Do you want active this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(function (result) {
        if (result.value) {
          axios.get('/selling/offer/active/' + offer.id).then(function (resp) {
            if (resp.data.success == 'OK') {
              _this4.sellingOfferList();

              _this4.$toasted.show(resp.data.message, {
                position: 'top-center',
                type: 'success',
                duration: 4000
              });
            } else {
              _this4.$toasted.show('some thing want to wrong', {
                position: 'top-center',
                type: 'error',
                duration: 4000
              });
            }
          })["catch"](function (error) {
            _this4.$toasted.show('some thing want to wrong', {
              position: 'top-center',
              type: 'error',
              duration: 4000
            });
          });
        } else {
          _this4.$toasted.show('Ok ! no action here', {
            position: 'top-center',
            type: 'info',
            duration: 3000
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/selling_offer/index.vue?vue&type=template&id=0ff7f275&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/selling_offer/index.vue?vue&type=template&id=0ff7f275& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        _c("section", { staticClass: "content-header" }, [
          _c(
            "h1",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "add_selling_offer" } }
                },
                [_c("i", { staticClass: "fa fa-plus" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-lg-10" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      { staticClass: "table table-responsive text-center " },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm.loading
                              ? _c("h1", [
                                  _c("i", {
                                    staticClass: "fa fa-spin fa-spinner"
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.sellingOffer.data, function(
                              offer,
                              index
                            ) {
                              return _c("tr", { key: index }, [
                                _c("td", [_vm._v(_vm._s(index))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(offer.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(offer.order_by))]),
                                _vm._v(" "),
                                _c("td", [
                                  offer.status == 1
                                    ? _c(
                                        "span",
                                        { staticClass: "bage btn-success" },
                                        [_vm._v("Active")]
                                      )
                                    : _c(
                                        "span",
                                        { staticClass: "bage btn-warning" },
                                        [_vm._v("De-Active")]
                                      )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(offer.expire_date))]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-success",
                                        attrs: {
                                          to: {
                                            name: "edit_selling_offer",
                                            params: { id: offer.id }
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-edit" })]
                                    ),
                                    _vm._v(" "),
                                    offer.status == 0
                                      ? _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-warning ",
                                            on: {
                                              click: function($event) {
                                                return _vm.active(offer)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-check"
                                            })
                                          ]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-warning ",
                                            on: {
                                              click: function($event) {
                                                return _vm.deActive(offer)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-ban"
                                            })
                                          ]
                                        )
                                  ],
                                  1
                                )
                              ])
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.sellingOffer },
                            on: {
                              "pagination-change-page": this.sellingOfferList
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-lg-6 mt-1",
                          staticStyle: {
                            "margin-top": "25px",
                            "text-align": "right"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v("\n                      Showing "),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.sellingOffer.from))
                            ]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.sellingOffer.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [
                              _vm._v(_vm._s(_vm.sellingOffer.total))
                            ]),
                            _vm._v(" entries\n                    ")
                          ])
                        ]
                      )
                    ])
                  ])
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
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Selling Offer ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("h3", { staticClass: "box-title" }, [_vm._v("Office_sale")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Order By")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Expire Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/selling_offer/index.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/selling_offer/index.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0ff7f275___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0ff7f275& */ "./resources/js/components/admin/selling_offer/index.vue?vue&type=template&id=0ff7f275&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/selling_offer/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0ff7f275___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0ff7f275___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/selling_offer/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/selling_offer/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/selling_offer/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/selling_offer/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/selling_offer/index.vue?vue&type=template&id=0ff7f275&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/selling_offer/index.vue?vue&type=template&id=0ff7f275& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ff7f275___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0ff7f275& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/selling_offer/index.vue?vue&type=template&id=0ff7f275&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ff7f275___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0ff7f275___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);