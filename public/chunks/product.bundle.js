(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/product.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/product.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    this.productList();
    setTimeout(function () {
      _this.loading = false;
    }, 500); //this.interval = setInterval(() => this.productList(), 3000 );
  },
  data: function data() {
    return {
      products: {},
      loading: true,
      basePath: "storage/",
      search: "",
      item: "30",
      status: "all",
      base_url: this.$store.state.image_base_link
    };
  },
  methods: {
    productList: function productList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$Progress.start();
      axios.get("/list/product?page=" + page, {
        params: {
          status: this.status,
          item: this.item
        }
      }).then(function (resp) {
        // console.log(resp);
        _this2.products = resp.data.products;

        _this2.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);

        _this2.$Progress.finish();
      });
    },
    approved: function approved(product) {
      var _this3 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        if (result.value) {
          axios.get("/approved/product/" + product.id).then(function (resp) {
            //  console.log(resp)
            if (resp.data.status == "SUCCESS") {
              _this3.productList();

              _this3.$toasted.show(resp.data.message, {
                position: "top-center",
                type: "success",
                duration: 4000
              });
            } else {
              _this3.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000
              });
            }
          })["catch"](function (error) {
            // console.log(error)
            _this3.$toasted.show("some thing want to wrong", {
              position: "top-center",
              type: "error",
              duration: 4000
            });
          });
        } else {
          _this3.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000
          });
        }
      });
    },
    pending: function pending(product) {
      var _this4 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't pending this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        if (result.value) {
          axios.get("/pending/product/" + product.id).then(function (resp) {
            if (resp.data.status == "SUCCESS") {
              _this4.productList();

              _this4.$toasted.show(resp.data.message, {
                position: "top-center",
                type: "success",
                duration: 4000
              });
            } else {
              _this4.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000
              });
            }
          })["catch"](function (error) {
            _this4.$toasted.show("some thing want to wrong", {
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
    deny: function deny(product) {
      var _this5 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't deny this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then(function (result) {
        if (result.value) {
          axios.get("/deny/product/" + product.id).then(function (resp) {
            if (resp.data.status == "SUCCESS") {
              _this5.productList();

              _this5.$toasted.show(resp.data.message, {
                position: "top-center",
                type: "success",
                duration: 4000
              });
            } else {
              _this5.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000
              });
            }
          })["catch"](function (error) {
            _this5.$toasted.show("some thing want to wrong", {
              position: "top-center",
              type: "error",
              duration: 4000
            });
          });
        } else {
          _this5.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000
          });
        }
      });
    },
    stockUpdate: function stockUpdate(product) {
      var _this6 = this;

      var stock = prompt("How many stock you want to update ?");
      console.log(stock);
      axios.post("/stock/update/product/" + product.id, {
        stock: stock
      }).then(function (resp) {
        if (resp.data.status == "SUCCESS") {
          _this6.productList();

          _this6.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "success",
            duration: 4000
          });
        } else {
          _this6.$toasted.show("some thing want to wrong", {
            position: "top-center",
            type: "error",
            duration: 4000
          });
        }
      })["catch"](function (error) {
        _this6.$toasted.show("ok ! no action here", {
          position: "top-right",
          type: "info",
          duration: 4000
        });
      });
    },
    getPagination: function getPagination() {
      var _this7 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loading = true;
      this.$Progress.start();
      axios.get("/list/product?page=" + page).then(function (response) {
        _this7.$Progress.finish();

        _this7.loading = false;
        _this7.products = response.data.products;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    itemPerPage: function itemPerPage() {
      var _this8 = this;

      this.loading = true;
      this.$Progress.start();
      axios.get("/list/product", {
        params: {
          item: this.item
        }
      }).then(function (resp) {
        _this8.$Progress.finish();

        _this8.loading = false;

        if (resp.data.status == "SUCCESS") {
          _this8.products = resp.data.products;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    searchProducts: function searchProducts() {
      var _this9 = this;

      if (this.search.length > 1) {
        axios.get('/api/search/seggested/product/with/name/code/' + this.search).then(function (resp) {
          console.log(resp);

          if (resp.data) {
            console.log(resp.data);
            _this9.products = resp.data;
          } else {
            _this9.productList();
          }
        });
      } else {
        this.productList();
      }
    },
    changeDisplay: function changeDisplay(product) {
      var element = document.getElementById(product.id);
      element.classList.toggle("dropbtn-active");
    },
    print: function print(producId) {
      var how_many_times = prompt("How many time you want to print this product barcode?");
      var url = '/product/print/barcode/' + producId + '/' + how_many_times;
      window.open(url, '_blank');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.box[data-v-ef6e0f58]{\r\n  overflow-x:scroll;\n}\n.dropbtn[data-v-ef6e0f58] {\r\n  width: 100% !important;\r\n  margin-bottom: 5px !important;\n}\n.dropbtn-active[data-v-ef6e0f58] {\r\n  display: block !important;\n}\n.dropdown-action[data-v-ef6e0f58] {\r\n  display: none;\r\n  width: 90px;\r\n  position: absolute;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/product.vue?vue&type=template&id=ef6e0f58&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product/product.vue?vue&type=template&id=ef6e0f58&scoped=true& ***!
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
                  attrs: { to: { name: "productAdd" } }
                },
                [_c("i", { staticClass: "fa fa-plus" })]
              ),
              _vm._v(" "),
              _c("strong", [_vm._v("Product'table")])
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
              _c("div", { staticClass: "col-lg-11 col-md-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _c("div", { staticClass: "row" }, [
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
                                function($event) {
                                  return _vm.productList()
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "30" } }, [
                              _vm._v("30")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "50" } }, [
                              _vm._v("50")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "100" } }, [
                              _vm._v("100")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "150" } }, [
                              _vm._v("150")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "200" } }, [
                              _vm._v("200")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4" }, [
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
                            placeholder:
                              "search with product code || product name "
                          },
                          domProps: { value: _vm.search },
                          on: {
                            keyup: function($event) {
                              return _vm.searchProducts()
                            },
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
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.status,
                                expression: "status"
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
                                  _vm.status = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.productList
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "all" } }, [
                              _vm._v("All")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("Approved")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Pending")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Deny")
                            ])
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table text-center table-striped table-hover table-bordered ",
                        attrs: { id: "table" }
                      },
                      [
                        _vm._m(1),
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
                              : _vm._l(_vm.products.data, function(
                                  product,
                                  index
                                ) {
                                  return _c("tr", [
                                    _c("td", { attrs: { scope: "row" } }, [
                                      _vm._v(_vm._s(index + 1))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(product.name))]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticStyle: { width: "100px" } },
                                      [
                                        _c("p", {
                                          staticClass: "barcode",
                                          domProps: {
                                            innerHTML: _vm._s(
                                              product.product_barcode.barcode
                                            )
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "barcode-number" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                product.product_barcode
                                                  .barcode_number
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      product.product_image.length
                                        ? _c("img", {
                                            staticClass: "table-image",
                                            attrs: {
                                              src:
                                                _vm.base_url +
                                                product.product_image[0]
                                                  .product_image,
                                              alt: "product image"
                                            }
                                          })
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(product.sale_price))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "span",
                                        { staticClass: "badge badge-warning" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              product.discount
                                                ? product.discount
                                                : "0"
                                            )
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(product.price))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      product.stock <= 5
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-danger"
                                            },
                                            [_vm._v(_vm._s(product.stock))]
                                          )
                                        : _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-success"
                                            },
                                            [_vm._v(_vm._s(product.stock))]
                                          )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      product.status == 1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-success"
                                            },
                                            [_vm._v("Approved")]
                                          )
                                        : product.status == 2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-primary"
                                            },
                                            [_vm._v("Pending")]
                                          )
                                        : _c(
                                            "span",
                                            {
                                              staticClass: "badge badge-warning"
                                            },
                                            [_vm._v("Deny")]
                                          )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "span",
                                        { staticClass: "badge badge-info" },
                                        [
                                          _vm._v(
                                            " " +
                                              _vm._s(product.wallet_point) +
                                              " "
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-bars",
                                        on: {
                                          click: function($event) {
                                            return _vm.changeDisplay(product)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-action",
                                          attrs: { id: product.id }
                                        },
                                        [
                                          product.status != 1
                                            ? _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "dropdown-item btn btn-success btn-sm dropbtn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.approved(
                                                        product
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Approved")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          product.status != 2
                                            ? _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "dropdown-item btn btn-primary btn-sm dropbtn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.pending(
                                                        product
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Pending")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          product.status != 3
                                            ? _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "dropdown-item btn btn-warning btn-sm dropbtn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.deny(product)
                                                    }
                                                  }
                                                },
                                                [_vm._v("Deny")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "dropdown-item btn btn-warning btn-sm dropbtn",
                                              on: {
                                                click: function($event) {
                                                  if (
                                                    !$event.type.indexOf(
                                                      "key"
                                                    ) &&
                                                    _vm._k(
                                                      $event.keyCode,
                                                      "print",
                                                      undefined,
                                                      $event.key,
                                                      undefined
                                                    )
                                                  ) {
                                                    return null
                                                  }
                                                  return _vm.print(product.id)
                                                }
                                              }
                                            },
                                            [_vm._v("Print")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "btn btn-success btn-sm dropbtn",
                                              attrs: {
                                                to: {
                                                  name: "productEdit",
                                                  params: { id: product.id }
                                                }
                                              }
                                            },
                                            [_vm._v("Edit")]
                                          )
                                        ],
                                        1
                                      )
                                    ])
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
                            attrs: { data: _vm.products, limit: 3 },
                            on: { "pagination-change-page": _vm.productList }
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
                            _vm._v(
                              "\n                      Showing\n                      "
                            ),
                            _c("strong", [_vm._v(_vm._s(_vm.products.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.products.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.products.total))]),
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
          _vm._v("Dashboard ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Product Table")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "5%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("name")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("barcode")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "5%" } }, [_vm._v("image")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "5%" } }, [_vm._v("sale price")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "5%" } }, [_vm._v("discount")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "5%" } }, [_vm._v("price")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "5%" } }, [_vm._v("stock")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "5%" } }, [_vm._v("status")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "5%" } }, [_vm._v("wallet point")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/product/product.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/product/product.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_vue_vue_type_template_id_ef6e0f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.vue?vue&type=template&id=ef6e0f58&scoped=true& */ "./resources/js/components/admin/product/product.vue?vue&type=template&id=ef6e0f58&scoped=true&");
/* harmony import */ var _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/product/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _product_vue_vue_type_style_index_0_id_ef6e0f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css& */ "./resources/js/components/admin/product/product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_vue_vue_type_template_id_ef6e0f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_vue_vue_type_template_id_ef6e0f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ef6e0f58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/product/product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/product/product.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/product/product.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/product/product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/product/product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_ef6e0f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/product.vue?vue&type=style&index=0&id=ef6e0f58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_ef6e0f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_ef6e0f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_ef6e0f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_ef6e0f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_ef6e0f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/product/product.vue?vue&type=template&id=ef6e0f58&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/admin/product/product.vue?vue&type=template&id=ef6e0f58&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_ef6e0f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./product.vue?vue&type=template&id=ef6e0f58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product/product.vue?vue&type=template&id=ef6e0f58&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_ef6e0f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_template_id_ef6e0f58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);