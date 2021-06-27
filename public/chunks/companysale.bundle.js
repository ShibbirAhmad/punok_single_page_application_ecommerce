(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companysale"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/CompanySale.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/CompanySale.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-bootstrap-datetimepicker */ "./node_modules/vue-bootstrap-datetimepicker/dist/vue-bootstrap-datetimepicker.js");
/* harmony import */ var vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.companyList();
  },
  data: function data() {
    return {
      companies: {},
      loading: true,
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        date: "",
        company_id: "",
        credit_in: "Cash",
        comment: "",
        amount: ""
      }),
      options: {
        format: "YYYY-MM-DD",
        useCurrent: true
      }
    };
  },
  methods: {
    getPayment: function getPayment() {
      var _this = this;

      this.form.post("/api/get/company/sale/payment", {
        transformRequest: [function (data, headers) {
          return objectToFormData(data);
        }]
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });

          _this.form.date = '';
          _this.form.amount = '';
          _this.form.comment = '';

          _this.$modal.hide("payment_modal");

          _this.companyList();
        }
      });
    },
    companyList: function companyList() {
      var _this2 = this;

      axios.get("/company").then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this2.companies = resp.data.companies;
          _this2.loading = false;
        }
      });
    },
    totalPurchase: function totalPurchase($sales) {
      var total = 0;
      $sales.forEach(function (sale) {
        total += sale.total;
      });
      return total;
    },
    totalPaid: function totalPaid(company) {
      var total_partial_paid = 0;
      var total_sale_paid = 0;
      company.payments.forEach(function (payment) {
        total_partial_paid += payment.amount;
      });
      company.sales.forEach(function (sale) {
        total_sale_paid += sale.paid;
      });
      var total_paid = parseInt(total_sale_paid) + parseInt(total_partial_paid);
      return total_paid;
    },
    dueStillNow: function dueStillNow(company) {
      var total_paid = 0;
      var total_due = 0;
      company.payments.forEach(function (payment) {
        total_paid += payment.amount;
      });
      company.sales.forEach(function (sale) {
        total_due += sale.total - sale.paid;
      });
      var due_amount = total_due - total_paid;
      return due_amount;
    },
    showModal: function showModal($id) {
      this.form.company_id = $id;
      this.$modal.show("payment_modal");
    }
  },
  components: {
    HasError: vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/CompanySale.vue?vue&type=template&id=1524f147&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/sale/CompanySale.vue?vue&type=template&id=1524f147&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "AddCompanySale" } }
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
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "\n                    table\n                    text-center\n                    table-hover table-striped table-bordered\n                  "
                      },
                      [
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
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.companies, function(company, index) {
                              return _c("tr", { key: index }, [
                                _c("td", { attrs: { scope: "row" } }, [
                                  _vm._v(_vm._s(index + 1))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticStyle: {
                                          color: "blue !important",
                                          "font-size": "14px"
                                        },
                                        attrs: {
                                          to: {
                                            name: "company_sale_details",
                                            params: { id: company.id }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          " +
                                            _vm._s(company.name) +
                                            "\n                        "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(company.phone))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(company.address))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                        total sale\n                        "
                                  ),
                                  _c(
                                    "span",
                                    { staticClass: "badge badge-danger" },
                                    [
                                      _vm._v(
                                        "\n                          ৳ " +
                                          _vm._s(
                                            _vm.totalPurchase(company.sales)
                                          ) +
                                          "\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(
                                    "  ||\n\n                        due\n                        "
                                  ),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "badge badge-warning s_d_n"
                                    },
                                    [
                                      _vm._v(
                                        "\n                          ৳ " +
                                          _vm._s(_vm.dueStillNow(company)) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "span",
                                    { staticClass: "badge badge-success" },
                                    [
                                      _vm._v(
                                        " ৳ " +
                                          _vm._s(_vm.totalPaid(company)) +
                                          " "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-success btn-sm",
                                        on: {
                                          click: function($event) {
                                            return _vm.showModal(company.id)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          get paid\n                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-primary btn-sm",
                                        attrs: {
                                          to: {
                                            name: "company_payment_details",
                                            params: { id: company.id }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          Payment Details\n                        "
                                        )
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
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { name: "payment_modal", width: 400, height: 370 } },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.getPayment($event)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "card", staticStyle: { padding: "20px" } },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Date")]),
                        _vm._v(" "),
                        _c("date-picker", {
                          class: { "is-invaid": _vm.form.errors.has("date") },
                          attrs: { required: "", config: _vm.options },
                          model: {
                            value: _vm.form.date,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "date", $$v)
                            },
                            expression: "form.date"
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "date" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Amount")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.amount,
                            expression: "form.amount"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.form.amount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "amount", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v(" Credit In ")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.credit_in,
                                expression: "form.credit_in"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("credit_in")
                            },
                            attrs: { name: "credit_in" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "credit_in",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "Cash" } }, [
                              _vm._v("Cash")
                            ]),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "Bkash(personal)" } },
                              [_vm._v("Bkash(personal)")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "Bkash(merchant)" } },
                              [_vm._v("Bkash(merchant)")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Bank(SIBL)" } }, [
                              _vm._v("Bank(SIBL)")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Bank(AIBL)" } }, [
                              _vm._v("Bank(AIBL)")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "credit_in" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Comment")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.comment,
                            expression: "form.comment"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.comment },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "comment", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-block",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("\n            Submit\n          ")]
                    )
                  ])
                ]
              )
            ]
          )
        ]
      )
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
      _c("li", { staticClass: "active" }, [_vm._v("Company_Sale")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Company Sales")])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Due")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Paid")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/sale/CompanySale.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/sale/CompanySale.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanySale_vue_vue_type_template_id_1524f147_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySale.vue?vue&type=template&id=1524f147&scoped=true& */ "./resources/js/components/admin/sale/CompanySale.vue?vue&type=template&id=1524f147&scoped=true&");
/* harmony import */ var _CompanySale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySale.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/sale/CompanySale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanySale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanySale_vue_vue_type_template_id_1524f147_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanySale_vue_vue_type_template_id_1524f147_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1524f147",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/sale/CompanySale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/sale/CompanySale.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/sale/CompanySale.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/CompanySale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/sale/CompanySale.vue?vue&type=template&id=1524f147&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/admin/sale/CompanySale.vue?vue&type=template&id=1524f147&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySale_vue_vue_type_template_id_1524f147_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySale.vue?vue&type=template&id=1524f147&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/sale/CompanySale.vue?vue&type=template&id=1524f147&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySale_vue_vue_type_template_id_1524f147_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySale_vue_vue_type_template_id_1524f147_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);