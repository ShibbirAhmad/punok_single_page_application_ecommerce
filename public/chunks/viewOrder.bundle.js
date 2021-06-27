(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewOrder"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.getDetails();
    this.$store.dispatch("general_setting");
  },
  data: function data() {
    return {
      order: "",
      items: "",
      loading: true,
      base_url: this.$store.state.image_base_link,
      isLoading: true,
      fullPage: true
    };
  },
  methods: {
    getDetails: function getDetails() {
      var _this = this;

      axios.get("/order/view/" + this.$route.params.id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this.order = resp.data.order;
          _this.items = resp.data.items;
          _this.isLoading = false;
        } else {
          _this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        console.log(error);

        _this.$toasted.show("some thing want to wrong", {
          type: "error",
          position: "top-center",
          duration: 4000
        });
      });
    },
    print: function print(order_id) {
      window.open("/order/invoice/print/" + order_id, "_SELF");
    },
    back: function back() {
      //   console.log(window.history);
      window.history.back();
    },
    formateDate: function formateDate(date) {
      var d = new Date(date);
      var month = d.getMonth();
      var day = d.getDate();
      var year = d.getFullYear();
      var output = (("" + day).length < 2 ? "0" : "") + day + "-" + (("" + month).length < 2 ? "0" : "") + month + "-" + year;
      return output;
    },
    updateResellerCommision: function updateResellerCommision() {
      var _this2 = this;

      var commission = document.getElementById("reseller_order_commision").value;

      if (parseInt(commission) <= 0) {
        console.log(commission);
        alert("Commison can not be equal or smaller 0");
        return;
      }

      axios.get("/update/commision/reseller/order/" + this.order.id, {
        params: {
          commission: commission
        }
      }).then(function (resp) {
        if (resp.data) {
          _this2.$toasted.show(resp.data, {
            type: "info",
            position: "top-center",
            duration: 5000
          });
        }
      });
    },
    itemReturn: function itemReturn(item_id) {
      var _this3 = this;

      if (confirm("are you confirm")) {
        this.isLoading = true;
        axios.get("/order/return/item/" + item_id).then(function (resp) {
          console.log(resp);

          if (resp.data.success == "OK") {
            _this3.$toasted.show(resp.data.message, {
              type: "info",
              position: "top-center",
              duration: 5000
            });

            _this3.getDetails();
          } else {
            _this3.$toasted.show(resp.data, {
              type: "error",
              position: "top-center",
              duration: 5000
            });
          }
        })["catch"](function (e) {
          _this3.isLoading = false;
        });
      }
    }
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  computed: {
    general_setting: function general_setting() {
      return this.$store.getters.general_setting;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-95102a1e] {\r\n  margin-bottom: 5px !important;\n}\n.bottomBtn[data-v-95102a1e] {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\n}\n.head_title[data-v-95102a1e] {\r\n  margin-left: 27px;\r\n  margin-top: -12px;\n}\n.address_line[data-v-95102a1e] {\r\n  line-height: 15px;\n}\np[data-v-95102a1e] {\r\n  line-height: 10px;\r\n  font-size: 14px;\n}\n.m_logo[data-v-95102a1e] {\r\n  margin-left: -11px;\r\n  margin-top: -21px;\r\n  height: 80px;\n}\n.m_title[data-v-95102a1e] {\r\n  margin-top: -15px;\r\n  font-size: 11px;\n}\ntable[data-v-95102a1e] {\r\n  margin-top: 20px;\n}\n@media print {\n*[data-v-95102a1e] {\r\n    margin: 0;\r\n    padding: 0;\n}\ntable[data-v-95102a1e] {\r\n    margin-top: 20px !important;\n}\n.m_title[data-v-95102a1e] {\r\n    margin-top: -15px;\r\n    font-size: 10px;\n}\n.navbar[data-v-95102a1e] {\r\n    display: none;\n}\n.m_logo[data-v-95102a1e] {\r\n    height: 80px;\n}\n.print_info_container[data-v-95102a1e] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 10px 10px !important;\r\n    margin-top: 20px;\n}\n.col-sm-1[data-v-95102a1e] {\r\n    display: none;\n}\n.address_line[data-v-95102a1e] {\r\n    line-height: 15px;\n}\np[data-v-95102a1e] {\r\n    line-height: 16px;\r\n    font-size: 14px;\n}\n.logo[data-v-95102a1e] {\r\n    width: 40% !important;\n}\n.description[data-v-95102a1e] {\r\n    width: 40% !important;\n}\n.col-lg-2[data-v-95102a1e] {\r\n    width: 20% !important;\r\n    margin-top: 20px !important;\n}\n.invoice-header[data-v-95102a1e] {\r\n    display: block;\n}\n.box[data-v-95102a1e] {\r\n    border-top: none;\n}\nfooter[data-v-95102a1e] {\r\n    border-top: none !important;\n}\n.bottomBtn[data-v-95102a1e] {\r\n    display: none;\n}\n}\nsmall.badge.badge-danger[data-v-95102a1e] {\r\n  display: flex;\r\n  background: red;\r\n  width: 63px;\r\n  flex-direction: row;\n}\nsmall.badge.badge-success[data-v-95102a1e] {\r\n  display: flex;\r\n  background: green;\r\n  width: 63px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "content-wrapper" },
        [
          _c("loading", {
            attrs: {
              active: _vm.isLoading,
              "can-cancel": true,
              "is-full-page": _vm.fullPage
            },
            on: {
              "update:active": function($event) {
                _vm.isLoading = $event
              }
            }
          }),
          _vm._v(" "),
          _c("section", { staticClass: "content-header" }),
          _vm._v(" "),
          _c("section", { staticClass: "content" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-lg-11" }, [
                  _c("div", { staticClass: "box box-primary" }, [
                    _c("div", { staticClass: "box-header" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "row print_info_container" }, [
                        _c("div", { staticClass: "col-md-1 col-sm-1" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-3 col-sm-3 description" },
                          [
                            _c("div", [
                              _c("p", [
                                _vm._v(
                                  "Name: " + _vm._s(_vm.order.customer.name)
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                        Mobile No:\n                        "
                                ),
                                _c("strong", [
                                  _vm._v(
                                    " " + _vm._s(_vm.order.cutomer_phone) + " "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "address_line" }, [
                                _vm._v(
                                  "\n                        Address:\n\n                        "
                                ),
                                _c("span", [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(_vm.order.customer.address) +
                                      "\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _vm.order.sub_city
                                  ? _c("span", [
                                      _vm._v(
                                        _vm._s("," + _vm.order.sub_city.name)
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("strong", [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s("," + _vm.order.city.name) +
                                      "\n                        "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                        Invoice No: "
                                ),
                                _c("strong", [
                                  _vm._v(
                                    " " + _vm._s(_vm.order.invoice_no) + " "
                                  )
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-sm-3 logo" }, [
                          _c("img", {
                            staticClass: "m_logo",
                            attrs: {
                              src: _vm.base_url + _vm.general_setting.logo,
                              alt: "logo"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-md-4 col-sm-4 address",
                            staticStyle: { "margin-left": "27px" }
                          },
                          [
                            _c("p", {
                              staticClass: "address_line",
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.general_setting.invoice_address_details
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("\n                      Date:"),
                              _c("strong", [
                                _vm._v(" " + _vm._s(_vm.order.created_at))
                              ])
                            ]),
                            _vm._v(" "),
                            _vm.order.order_type == 4 &&
                            Object.keys(_vm.order.reseller_order_details).length
                              ? _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Reseller Commision")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticStyle: { display: "flex" } },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "reseller_order_commision"
                                        },
                                        domProps: {
                                          value:
                                            _vm.order.reseller_order_details
                                              .total_amount
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary text-uppercase",
                                          on: {
                                            click: _vm.updateResellerCommision
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                          update\n                        "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-1 col-sm-1" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-1" }),
                        _vm._v(" "),
                        _vm.isLoading
                          ? _c("h1", [
                              _c("i", { staticClass: "fa fa-spin fa-spinner" })
                            ])
                          : _c("div", { staticClass: "col-lg-10" }, [
                              _c("table", { staticClass: "table" }, [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", [_vm._v("#")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Product")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Image")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Size")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("P_code")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Qty")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Price")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Total")]),
                                    _vm._v(" "),
                                    _vm.order.status == 4 ? _c("th") : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  [
                                    _vm._l(_vm.items, function(item, index) {
                                      return _c("tr", { key: index }, [
                                        _c("td", [_vm._v(_vm._s(index + 1))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                            " +
                                              _vm._s(item.product.name) +
                                              "\n                            "
                                          ),
                                          _vm.order.status == 4 ||
                                          _vm.order.status == 5
                                            ? _c("div", [
                                                item.status == 2
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "badge badge-danger"
                                                      },
                                                      [_vm._v("Returned")]
                                                    )
                                                  : _vm._e()
                                              ])
                                            : _vm._e()
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          item.product.product_image.length > 0
                                            ? _c("img", {
                                                staticStyle: {
                                                  width: "60px",
                                                  height: "50px"
                                                },
                                                attrs: {
                                                  src:
                                                    _vm.base_url +
                                                    item.product
                                                      .product_image[0]
                                                      .product_image
                                                }
                                              })
                                            : _vm._e()
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("strong", [
                                            item.variant
                                              ? _c("b", [
                                                  _vm._v(
                                                    "[" +
                                                      _vm._s(
                                                        item.variant.name
                                                      ) +
                                                      "]"
                                                  )
                                                ])
                                              : _c("b", [_vm._v("-")])
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(item.product.product_code)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(item.quantity))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(item.price))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(item.quantity * item.price)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm.order.status == 4 &&
                                        item.status == 1
                                          ? _c("td", [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-danger",
                                                  staticStyle: {
                                                    cursor: "pointer"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.itemReturn(
                                                        item.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Return")]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    }),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(0),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(_vm._s(_vm.order.total))
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(1),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(_vm._s(_vm.order.discount))
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(2),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(_vm._s(_vm.order.paid))
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(3),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(
                                            _vm._s(_vm.order.shipping_cost)
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "6" } }),
                                      _vm._v(" "),
                                      _vm._m(4),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("b", [
                                          _vm._v(
                                            _vm._s(
                                              parseInt(_vm.order.total) -
                                                (parseInt(_vm.order.discount) +
                                                  parseInt(_vm.order.paid)) +
                                                parseInt(
                                                  _vm.order.shipping_cost
                                                )
                                            )
                                          )
                                        ])
                                      ])
                                    ])
                                  ],
                                  2
                                )
                              ])
                            ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-lg-2",
                            staticStyle: {
                              "margin-left": "27px",
                              "text-align": "center"
                            }
                          },
                          [
                            _vm.order.approved_by != null
                              ? _c(
                                  "h6",
                                  { staticStyle: { "margin-bottom": "0" } },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(_vm.order.approved_by.name) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(5)
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row bottomBtn" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success print",
                              on: {
                                click: function($event) {
                                  return _vm.print(_vm.order.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-print" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-warning back",
                              on: { click: _vm.back }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-arrow-circle-right"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _vm.order.status != 5 && _vm.order.status != 4
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-success back",
                                  attrs: {
                                    to: {
                                      name: "orderEdit",
                                      params: { id: _vm.order.id }
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-edit" })]
                              )
                            : _vm._e()
                        ],
                        1
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
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Sub Total")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Discount")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Paid")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Shiiping_cost")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Amount Due")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h5",
      { staticStyle: { "border-top": "2px dotted #000", "margin-top": "25" } },
      [_c("strong", [_vm._v("Approved By")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/order/View.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/order/View.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=95102a1e&scoped=true& */ "./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& */ "./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95102a1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/View.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/order/View.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=style&index=0&id=95102a1e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_95102a1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=95102a1e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/View.vue?vue&type=template&id=95102a1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_95102a1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);