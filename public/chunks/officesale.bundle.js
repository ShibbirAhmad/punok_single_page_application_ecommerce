(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["officesale"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/OfficeSale.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/OfficeSale.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Index */ "./resources/js/components/admin/Index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Index: _Index__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.saleList();
  },
  data: function data() {
    return {
      sales: {},
      loading: true,
      item: 20,
      sale_type: 1,
      start_date: "",
      end_date: "",
      data_search: "",
      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false
      }
    };
  },
  methods: {
    saleSearch: function saleSearch() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.data_search.length > 1) {
        this.loading = true;
        axios.get("/api/office/sale/search/data/" + this.data_search + "?page=" + page).then(function (resp) {
          if (resp.data.status == "OK") {
            _this.sales = resp.data.sales;
            _this.loading = false;
          } else {
            _this.saleList();
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        this.saleList();
      }
    },
    filterOfficeSale: function filterOfficeSale() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      //fetch data
      axios.get("/api/officeSale/date/wise/filter?page=" + page, {
        //send data
        params: {
          start_date: this.start_date,
          end_date: this.end_date,
          item: this.item
        }
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this2.sales = resp.data.sales;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saleList: function saleList() {
      var _this3 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/office/sales/list?page=" + page, {
        params: {
          item: this.item,
          sale_type: this.sale_type
        }
      }).then(function (resp) {
        console.log(resp); //  console.log(resp.data.admins.data)

        if (resp.data.status == "SUCCESS") {
          _this3.sales = resp.data.sales;
          _this3.loading = false;
        } else {
          _this3.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        _this3.$toasted.show("some thing want to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    itemPerPage: function itemPerPage() {
      var _this4 = this;

      this.loading = true;
      this.$Progress.start();
      axios.get("/list/purchase", {
        params: {
          item: this.item
        }
      }).then(function (resp) {
        console.log(resp); //  console.log(resp.data.admins.data)

        if (resp.data.status == "SUCCESS") {
          _this4.purchases = resp.data.purchases;
          _this4.loading = false;

          _this4.$Progress.finish();
        } else {
          _this4.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        _this4.$toasted.show("some thing want to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    }
  },
  watch: {
    start_date: function start_date(value) {
      if (value.length > 1) {
        this.filterOfficeSale();
      }
    },
    end_date: function end_date(value) {
      if (value.length > 1) {
        this.filterOfficeSale();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/OfficeSale.vue?vue&type=template&id=11368290&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/OfficeSale.vue?vue&type=template&id=11368290&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "AddSale" } }
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
              _c("div", { staticClass: "col-lg-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-bsale" }, [
                    _c("h3", { staticClass: "box-title" }, [
                      _vm._v("Office_sale")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: { "margin-top": "10px" }
                      },
                      [
                        _c("div", { staticClass: "col-lg-4" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data_search,
                                expression: "data_search"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { placeholder: "enter name, phone" },
                            domProps: { value: _vm.data_search },
                            on: {
                              keyup: _vm.saleSearch,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.data_search = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.filterOfficeSale($event)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-lg-5" },
                                  [
                                    _c("date-picker", {
                                      attrs: {
                                        autocomplete: "off",
                                        placeholder: "start-date",
                                        config: _vm.options
                                      },
                                      model: {
                                        value: _vm.start_date,
                                        callback: function($$v) {
                                          _vm.start_date = $$v
                                        },
                                        expression: "start_date"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-lg-5",
                                    staticStyle: { "margin-left": "-20px" }
                                  },
                                  [
                                    _c("date-picker", {
                                      attrs: {
                                        autocomplete: "off",
                                        placeholder: "end-date",
                                        config: _vm.options
                                      },
                                      model: {
                                        value: _vm.end_date,
                                        callback: function($$v) {
                                          _vm.end_date = $$v
                                        },
                                        expression: "end_date"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-2" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.item,
                                  expression: "item"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.item = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  _vm.saleList
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "10" } }, [
                                _vm._v("10")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "20" } }, [
                                _vm._v("20")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "40" } }, [
                                _vm._v("40")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "60" } }, [
                                _vm._v("60")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "80" } }, [
                                _vm._v("80")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "100" } }, [
                                _vm._v("100")
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("table", { staticClass: "table" }, [
                      _vm._m(1),
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
                            : _vm._l(_vm.sales.data, function(sale, index) {
                                return _c("tr", { key: index }, [
                                  _c("td", { attrs: { scope: "row" } }, [
                                    _vm._v(_vm._s(index + 1))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s("S-" + sale.id))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(sale.name ? sale.name : ""))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        sale.mobile_no ? sale.mobile_no : ""
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(sale.address ? sale.address : "")
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(sale.created_at))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\n                        Total: " +
                                        _vm._s(
                                          parseInt(sale.total) -
                                            parseInt(sale.discount)
                                        ) +
                                        ",\n                        "
                                    ),
                                    _c("strong", [
                                      _vm._v("Paid: " + _vm._s(sale.paid) + ",")
                                    ]),
                                    _vm._v(
                                      "\n                        Due:\n                        " +
                                        _vm._s(
                                          parseInt(sale.total) -
                                            parseInt(sale.paid) -
                                            parseInt(sale.discount)
                                        ) +
                                        "\n                      "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-primary btn-sm",
                                          attrs: {
                                            to: {
                                              name: "ViewSale",
                                              params: { id: sale.id }
                                            }
                                          }
                                        },
                                        [_c("i", { staticClass: "fa fa-eye" })]
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
                            attrs: { data: _vm.sales, limit: 3 },
                            on: { "pagination-change-page": _vm.saleList }
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
                            _c("strong", [_vm._v(_vm._s(_vm.sales.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.sales.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.sales.total))]),
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
      _c("li", { staticClass: "active" }, [_vm._v("Sale")])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Invoice")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Number")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/sale/OfficeSale.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/sale/OfficeSale.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OfficeSale_vue_vue_type_template_id_11368290_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfficeSale.vue?vue&type=template&id=11368290&scoped=true& */ "./resources/js/components/admin/sale/OfficeSale.vue?vue&type=template&id=11368290&scoped=true&");
/* harmony import */ var _OfficeSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfficeSale.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/sale/OfficeSale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OfficeSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfficeSale_vue_vue_type_template_id_11368290_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OfficeSale_vue_vue_type_template_id_11368290_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11368290",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/sale/OfficeSale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/sale/OfficeSale.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/sale/OfficeSale.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfficeSale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/OfficeSale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/sale/OfficeSale.vue?vue&type=template&id=11368290&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/admin/sale/OfficeSale.vue?vue&type=template&id=11368290&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeSale_vue_vue_type_template_id_11368290_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfficeSale.vue?vue&type=template&id=11368290&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/OfficeSale.vue?vue&type=template&id=11368290&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeSale_vue_vue_type_template_id_11368290_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfficeSale_vue_vue_type_template_id_11368290_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);