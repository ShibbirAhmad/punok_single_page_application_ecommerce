(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company_sale_details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
      company: '',
      loading: true,
      item: 20,
      sale_type: 2,
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
    saleList: function saleList() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('/api/company/sale/details/' + this.$route.params.id + '?page=' + page).then(function (resp) {
        console.log(resp);
        _this.sales = resp.data.sales;
        _this.company = resp.data.company;
        _this.loading = false;
      });
    },
    saleSearch: function saleSearch() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.data_search.length > 1) {
        this.loading = true;
        axios.get("/api/company/sale/search/data/" + this.data_search + "?page=" + page).then(function (resp) {
          if (resp.data.status == "OK") {
            _this2.sales = resp.data.sales;
            _this2.loading = false;
          }
        })["catch"](function (error) {
          console.log(error);
          alert("some thing went wrong");
        });
      } else {
        this.saleList();
      }
    },
    filterCompanySale: function filterCompanySale() {
      var _this3 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      //fetch data
      axios.get("/api/company/sale/date/wise/filter?page=" + page, {
        //send data
        params: {
          start_date: this.start_date,
          end_date: this.end_date,
          item: this.item
        }
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this3.sales = resp.data.sales;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    totalPaid: function totalPaid() {
      var paid = 0;
      this.sales.data.forEach(function (sale) {
        paid += sale.paid;
      });
      return paid;
    },
    totalPurchase: function totalPurchase() {
      var total = 0;
      this.sales.data.forEach(function (sale) {
        total += sale.total;
      });
      return total;
    },
    totalDue: function totalDue() {
      var due = 0;
      this.sales.data.forEach(function (sale) {
        due += sale.total - sale.paid;
      });
      return due;
    },
    //method iniitial for sale paid
    paid: function paid(sale_id, index) {
      var _this4 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You wan't make this paid",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        if (result.value) {
          axios.get("/sale/paid/" + sale_id).then(function (resp) {
            if (resp.data.success == "OK") {
              _this4.sales.data[index].status = 2;

              _this4.$toasted.show(resp.data.message, {
                position: "top-center",
                type: "success",
                duration: 2000
              });
            } //  console.log(sale_id);

          })["catch"](function (error) {
            _this4.$toasted.show("some thing went to wrong", {
              position: "top-center",
              type: "error",
              duration: 4000
            });
          });
        } else {
          _this4.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000
          });
        }
      });
    },
    returned: function returned(sale_id, index) {
      var _this5 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You wan't make this return",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        if (result.value) {
          axios.get("/sale/returned/" + sale_id).then(function (resp) {
            // console.log(resp)
            if (resp.data.success == "OK") {
              _this5.sales.data[index].status = 2;

              _this5.$toasted.show(resp.data.message, {
                position: "top-center",
                type: "success",
                duration: 2000
              });
            }
          })["catch"](function (error) {// console.log(error)
          });
        } else {
          _this5.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000
          });
        }
      });
    }
  },
  watch: {
    start_date: function start_date(value) {
      if (value.length > 1) {
        this.filterCompanySale();
      }
    },
    end_date: function end_date(value) {
      if (value.length > 1) {
        this.filterCompanySale();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=template&id=35300a2b&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=template&id=35300a2b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "compnaySale" } }
                },
                [_c("i", { staticClass: "fa fa-arrow-left" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("ol", { staticClass: "breadcrumb" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("li", { staticClass: "active" }, [
              _vm._v(_vm._s(_vm.company.name))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-lg-10 col-md-10" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c(
                    "div",
                    { staticClass: "box-header with-border text-center" },
                    [
                      _c("h3", { staticClass: "box-title" }, [
                        _vm._v(_vm._s(_vm.company.name) + " ")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table  table-hover table-striped table-bordered"
                      },
                      [
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
                                    _c("td", [_vm._v(_vm._s(sale.created_at))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(sale.invoice_no))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(" ৳ " + _vm._s(sale.total))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " ৳ " + _vm._s(sale.total - sale.paid)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      sale.status == 1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-primary"
                                            },
                                            [_vm._v("Initial")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      sale.status == 2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-success"
                                            },
                                            [_vm._v("Paid")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      sale.status == 3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-danger"
                                            },
                                            [_vm._v("Retruned")]
                                          )
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-sm",
                                            attrs: {
                                              to: {
                                                name: "ViewSale",
                                                params: { id: sale.id }
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-eye"
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                }),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { attrs: { colspan: "3" } }),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  { staticClass: "badge badge-success" },
                                  [_vm._v(" ৳ " + _vm._s(_vm.totalPurchase()))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  { staticClass: "badge badge-warning" },
                                  [_vm._v(" ৳ " + _vm._s(_vm.totalDue()) + " ")]
                                )
                              ])
                            ])
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
                            attrs: { data: _vm.sales },
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
    return _c("li", [
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-dashboard" }),
        _vm._v("Dashboard")
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Invoice")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Purchase ")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Due")]),
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

/***/ "./resources/js/components/admin/sale/CompanySaleDetails.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/admin/sale/CompanySaleDetails.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanySaleDetails_vue_vue_type_template_id_35300a2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySaleDetails.vue?vue&type=template&id=35300a2b&scoped=true& */ "./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=template&id=35300a2b&scoped=true&");
/* harmony import */ var _CompanySaleDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySaleDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanySaleDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanySaleDetails_vue_vue_type_template_id_35300a2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanySaleDetails_vue_vue_type_template_id_35300a2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35300a2b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/sale/CompanySaleDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySaleDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=template&id=35300a2b&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=template&id=35300a2b&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleDetails_vue_vue_type_template_id_35300a2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySaleDetails.vue?vue&type=template&id=35300a2b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/CompanySaleDetails.vue?vue&type=template&id=35300a2b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleDetails_vue_vue_type_template_id_35300a2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySaleDetails_vue_vue_type_template_id_35300a2b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);