(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.customerList();
    this.getMembership();
  },
  data: function data() {
    return {
      customers: {},
      search: "",
      memberExist: "",
      customer_type: "",
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        type: "silver",
        customer_id: ""
      }),
      memerships: ""
    };
  },
  methods: {
    getMembership: function getMembership() {
      var _this = this;

      axios.get("/api/get/membership/list").then(function (resp) {
        _this.memerships = resp.data.memberships;
      });
    },
    deleteMemebership: function deleteMemebership($user_id) {
      var _this2 = this;

      axios.get("/api/remove/membership/" + $user_id).then(function (resp) {
        console.log(resp);

        if (resp.data.success == "OK") {
          _this2.$toasted.show(resp.data.message, {
            type: 'success',
            position: 'top-center',
            duration: 3000
          });

          _this2.customerList();

          _this2.getMembership();
        }
      });
    },
    addMembership: function addMembership() {
      var _this3 = this;

      this.form.post("/api/apply/membership", {
        transformRequest: [function (data, headers) {
          return objectToFormData(data);
        }]
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.success == "OK") {
          _this3.customerList();

          _this3.getMembership();

          _this3.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });

          _this3.$modal.hide("membership");

          _this3.form.customer_id = "";
        }

        if (resp.data.success == "update") {
          _this3.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });

          _this3.customerList();

          _this3.getMembership();

          _this3.$modal.hide("membership");

          _this3.form.customer_id = "";
        }
      });
    },
    filterMembership: function filterMembership(user_id) {
      if (this.memerships.length > 0) {
        var type = "none";
        this.memerships.forEach(function (item) {
          if (user_id == item.customer_id) {
            type = item.type;
          }
        });
        return type;
      }
    },
    filterButtonText: function filterButtonText(user_id) {
      var menberhsip = false;

      if (this.memerships.length > 0) {
        this.memerships.forEach(function (item) {
          if (user_id == item.customer_id) {
            menberhsip = true;
          }
        });
        return menberhsip;
      }
    },
    displayModal: function displayModal(user_id) {
      var _this4 = this;

      if (user_id == 0) {
        alert("this customer isn't retail customer ");
        return;
      }

      if (this.memerships.length > 0) {
        this.memerships.forEach(function (element) {
          if (element.customer_id == user_id) {
            _this4.form.type = element.type;
          }
        });
      } //note: customer_id = customer.user_id


      this.form.customer_id = user_id;
      this.$modal.show("membership");
    },
    customerList: function customerList() {
      var _this5 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/list/customer?page=" + page).then(function (resp) {
        if (resp.data.status == "SUCCESS") {
          _this5.customers = resp.data.customers;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    searchData: function searchData() {
      var _this6 = this;

      if (this.search.length >= 2) {
        axios.get("/search/customer/" + this.search).then(function (resp) {
          if (resp.data.success == "OK") {
            _this6.customers = resp.data.customers;
            console.log(resp);
          }
        });
      } else {
        this.customerList();
      }
    },
    exportData: function exportData() {
      if (this.customer_type == "all") {
        window.open("/api/export/customers", "_blank");
      } else if (this.customer_type == "retail") {
        window.open("/api/export/retail/customers", "_blank");
      } else if (this.customer_type == "wholesale") {
        window.open("/api/customers/export/wholesale", "_blank");
      } else if (this.customer_type == "officesale") {
        window.open("/api/export//customers/officesale", "_blank");
      } else {
        Swal.fire({
          title: " sorry :) something went wrong",
          icon: "error"
        });
      }
    }
  },
  components: {
    HasError: vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/index.vue?vue&type=template&id=d0e30b28&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/customer/index.vue?vue&type=template&id=d0e30b28& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-lg-11 col-md-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _c("h3", { staticClass: "box-title" }, [
                      _vm._v("Customer table")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "row",
                        staticStyle: {
                          "margin-bottom": "5px",
                          "margin-top": "10px"
                        }
                      },
                      [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.customer_type,
                                  expression: "customer_type"
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
                                    _vm.customer_type = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                  _vm.exportData
                                ]
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { disabled: "", value: "" } },
                                [
                                  _vm._v(
                                    "\n                        Select export customer type\n                      "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "all" } }, [
                                _vm._v("all customers")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "retail" } }, [
                                _vm._v("retail customers")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "wholesale" } }, [
                                _vm._v("wholeSale customers")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "officesale" } }, [
                                _vm._v(
                                  "\n                        Export officeSale customers\n                      "
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-3" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.search,
                                expression: "search"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "customer name or 01xxxxxxxxx",
                              id: ""
                            },
                            domProps: { value: _vm.search },
                            on: {
                              keyup: _vm.searchData,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.search = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm._m(1)
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-striped table-bordered table-hover"
                      },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.customers.data, function(customer, index) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { scope: "row" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(customer.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(customer.phone))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      customer.customer_city
                                        ? customer.customer_city.name
                                        : "null"
                                    ) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(customer.address))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", { staticClass: "badge" }, [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(
                                        _vm.filterMembership(customer.user_id)
                                      ) +
                                      "\n                        "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm.filterButtonText(customer.user_id) == true
                                  ? _c("div", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-danger",
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteMemebership(
                                                customer.user_id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                            Remove MemberShip\n                          "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-success",
                                          on: {
                                            click: function($event) {
                                              return _vm.displayModal(
                                                customer.user_id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                            Change MemberShip\n                          "
                                          )
                                        ]
                                      )
                                    ])
                                  : _c(
                                      "a",
                                      {
                                        staticClass: "btn btn-success",
                                        on: {
                                          click: function($event) {
                                            return _vm.displayModal(
                                              customer.user_id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          Add MemberShip\n                        "
                                        )
                                      ]
                                    )
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-4" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.customers, limit: 3 },
                            on: { "pagination-change-page": _vm.customerList }
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
                            _c("strong", [_vm._v(_vm._s(_vm.customers.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.customers.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.customers.total))]),
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
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { name: "membership", width: 200, height: 150 } }, [
        _c("div", { staticClass: "card", staticStyle: { padding: "20px" } }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addMembership($event)
                }
              }
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Membership type")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.type,
                            expression: "form.type"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("type") },
                        attrs: { name: "type", required: "" },
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
                              "type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "silver" } }, [
                          _vm._v("Silver")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "gold" } }, [
                          _vm._v("Gold")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "platinum" } }, [
                          _vm._v("Platinum")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "type" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group text-center" }, [
                  _c("input", {
                    staticClass: "btn btn-success",
                    attrs: { type: "submit", value: "apply" }
                  })
                ])
              ])
            ]
          )
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
    return _c(
      "section",
      {
        staticClass: "content-header",
        staticStyle: { "margin-bottom": "20px" }
      },
      [
        _c("h1"),
        _vm._v(" "),
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-dashboard" }),
              _vm._v("Dashboard")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "active" }, [_vm._v("Customer")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-1", staticStyle: { "margin-left": "-23px" } },
      [
        _c(
          "button",
          { staticClass: "btn btn-success", attrs: { type: "submit" } },
          [_vm._v("\n                      search\n                    ")]
        )
      ]
    )
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("City")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Membership")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/customer/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/customer/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d0e30b28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d0e30b28& */ "./resources/js/components/admin/customer/index.vue?vue&type=template&id=d0e30b28&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/customer/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d0e30b28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d0e30b28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/customer/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/customer/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/customer/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/customer/index.vue?vue&type=template&id=d0e30b28&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/customer/index.vue?vue&type=template&id=d0e30b28& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d0e30b28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d0e30b28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/customer/index.vue?vue&type=template&id=d0e30b28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d0e30b28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d0e30b28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);