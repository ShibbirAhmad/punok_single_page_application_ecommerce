(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/offer/Offer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/offer/Offer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.offerList();
    }, 500); // this.getResults();
  },
  data: function data() {
    return {
      offers: {},
      loading: true,
      basePath: this.$store.state.image_base_link
    };
  },
  methods: {
    offerList: function offerList() {
      var _this2 = this;

      axios.get('/list/offer').then(function (resp) {
        if (resp.data.status == 'SUCCESS') {
          _this2.offers = resp.data.offers;
          _this2.loading = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deActive: function deActive(offer) {
      var _this3 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't de-active this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(function (result) {
        if (result.value) {
          axios.get('/deActive/offer/' + offer.id).then(function (resp) {
            //  console.log(resp)
            if (resp.data.status == 'SUCCESS') {
              _this3.offerList();

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
            // console.log(error)
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
        text: "You won't active this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(function (result) {
        if (result.value) {
          axios.get('/active/offer/' + offer.id).then(function (resp) {
            if (resp.data.status == 'SUCCESS') {
              _this4.offerList();

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
    },
    remove: function remove(offer) {
      var _this5 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(function (result) {
        if (result.value) {
          axios.get('/delete/offer/' + offer.id).then(function (resp) {
            console.log(resp);

            if (resp.data.status == 'SUCCESS') {
              _this5.offerList();

              _this5.$toasted.show(resp.data.message, {
                position: 'top-center',
                type: 'success',
                duration: 4000
              });
            } else {
              _this5.$toasted.show('some thing want to wrong', {
                position: 'top-center',
                type: 'error',
                duration: 4000
              });
            }
          })["catch"](function (error) {
            _this5.$toasted.show('some thing want to wrong', {
              position: 'top-center',
              type: 'error',
              duration: 4000
            });
          });
        } else {
          _this5.$toasted.show('Ok ! no action here', {
            position: 'top-center',
            type: 'info',
            duration: 3000
          });
        }
      });
    },
    getPagination: function getPagination() {
      var _this6 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loading = true;
      axios.get('/list/offer?page=' + page).then(function (response) {
        _this6.loading = false;
        _this6.offers = response.data.offers;
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/offer/Offer.vue?vue&type=template&id=147006ce&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/offer/Offer.vue?vue&type=template&id=147006ce&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "offerAdd" } }
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
              _c("div", { staticClass: "col-lg-8 col-lg-offset-1" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("table", { staticClass: "table" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm.loading
                            ? _c("h1", { staticClass: "text-center" }, [
                                _c("i", {
                                  staticClass: "fa fa-spin fa-spinner"
                                })
                              ])
                            : _vm._l(_vm.offers.data, function(offer, index) {
                                return _c("tr", [
                                  _c("td", { attrs: { scope: "row" } }, [
                                    _vm._v(_vm._s(index + 1))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("img", {
                                      staticStyle: { width: "100px" },
                                      attrs: {
                                        src: _vm.basePath + offer.image,
                                        alt: "User Image"
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\n                                         " +
                                        _vm._s(offer.url) +
                                        "\n                                        "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    offer.status == 1
                                      ? _c("span", { staticClass: "badge" }, [
                                          _vm._v("Active")
                                        ])
                                      : _c(
                                          "span",
                                          { staticClass: "badge badge-danger" },
                                          [_vm._v("De-active")]
                                        )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-sm btn-success",
                                          attrs: {
                                            to: {
                                              name: "edit_offer",
                                              params: { id: offer.id }
                                            }
                                          }
                                        },
                                        [_c("i", { staticClass: "fa fa-edit" })]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-danger btn-sm",
                                          on: {
                                            click: function($event) {
                                              return _vm.remove(offer)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      offer.status == 1
                                        ? _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-warning",
                                              attrs: { title: "De-active" },
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
                                        : _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-primary",
                                              attrs: { title: "active" },
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
                                    ],
                                    1
                                  )
                                ])
                              })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.offers },
                            on: { "pagination-change-page": _vm.getPagination }
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
                            _vm._v("Showing "),
                            _c("strong", [_vm._v(_vm._s(_vm.offers.from))]),
                            _vm._v(
                              " to\n                                            "
                            ),
                            _c("strong", [_vm._v(_vm._s(_vm.offers.to))]),
                            _vm._v(
                              " of total\n                                            "
                            ),
                            _c("strong", [_vm._v(_vm._s(_vm.offers.total))]),
                            _vm._v(
                              " entries\n                                        "
                            )
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
      _c("li", { staticClass: "active" }, [_vm._v("Offer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Offer  table")])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Image ")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Url")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/offer/Offer.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/admin/offer/Offer.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Offer_vue_vue_type_template_id_147006ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Offer.vue?vue&type=template&id=147006ce&scoped=true& */ "./resources/js/components/admin/offer/Offer.vue?vue&type=template&id=147006ce&scoped=true&");
/* harmony import */ var _Offer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Offer.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/offer/Offer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Offer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Offer_vue_vue_type_template_id_147006ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Offer_vue_vue_type_template_id_147006ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "147006ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/offer/Offer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/offer/Offer.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/offer/Offer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Offer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/offer/Offer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/offer/Offer.vue?vue&type=template&id=147006ce&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/offer/Offer.vue?vue&type=template&id=147006ce&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_template_id_147006ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Offer.vue?vue&type=template&id=147006ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/offer/Offer.vue?vue&type=template&id=147006ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_template_id_147006ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_template_id_147006ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);