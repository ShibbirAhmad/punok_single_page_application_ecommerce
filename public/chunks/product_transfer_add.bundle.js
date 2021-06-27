(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product_transfer_add"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product_transfer/Add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product_transfer/Add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Add",
  created: function created() {
    this.getShowromList();
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        showroom_id: "select showroom",
        products: [],
        status: 0,
        total: 0,
        comment: ""
      }),
      search_product_code: "",
      product_code: "",
      products: [],
      product_quantity: 1,
      errors: [],
      product_per_page: 10,
      base_link: this.$store.state.image_base_link,
      showrooms: "",
      manager_name: "",
      manager_phone: "",
      address: "",
      item: 10
    };
  },
  //method initial for submit data
  methods: {
    getShowromList: function getShowromList() {
      var _this = this;

      axios.get("/api/showroom/list").then(function (resp) {
        if (resp.data.status == "SUCCESS") {
          _this.showrooms = resp.data.showrooms;
          _this.loading = false;
        }
      });
    },
    showroomInformation: function showroomInformation($id) {
      var _this2 = this;

      //collecting showroom details
      this.showrooms.forEach(function (element) {
        if (element.id == $id) {
          console.log(element);
          _this2.address = element.address;
          _this2.manager_name = element.manager.name;
          _this2.manager_phone = element.manager.phone;
        }
      });
    },
    transferProductsIntoShowroom: function transferProductsIntoShowroom() {
      var _this3 = this;

      if (_typeof(this.form.showroom_id) === _typeof("string")) {
        window.alert("please,select any showroom");
        return;
      } //start progress bar when submit fomr


      this.$Progress.start();
      this.form.post("/api/transfer/product/into/showroom").then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          //end progress bar when success resp
          _this3.$Progress.finish();

          _this3.$router.push({
            name: "product_transfer"
          });

          _this3.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 3000
          }); //other wise success, show a error

        } else {
          _this3.$toasted.show(resp.data.message, {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        _this3.errors = [];

        _this3.errors.push(error.response.data.errors);

        _this3.$Progress.finish();
      });
    },
    //method initial for search product
    searchProduct: function searchProduct() {
      var _this4 = this;

      var length = this.product_code.length;
      console.log(length); //  alert(length)

      if (length == 4) {
        this.$Progress.start();
        axios.get("/search/product/with/code/" + this.product_code).then(function (resp) {
          console.log(resp);

          if (resp.data.status == "SUCCESS") {
            _this4.product_code = "";
            var product = {
              id: "",
              price: "",
              sale_price: "",
              quantity: 1,
              total: ""
            };

            for (var i = 0; i < resp.data.product.length; i++) {
              //check the product stcok availity
              if (resp.data.product[i].stock <= 0) {
                return Swal.fire({
                  type: "warning",
                  title: "Wopps....",
                  html: "".concat(resp.data.product[i].name, " - <strong> ").concat(resp.data.product[i].product_code, " </strong> in <b>stcok not available</b>.")
                });
              }

              product.id = resp.data.product[i].id;
              product.price = resp.data.product[i].sale_price;
              product.sale_price = resp.data.product[i].sale_price;
              product.purchase_price = resp.data.product[i].purchase_price;
              product.total = resp.data.product[i].sale_price;
              console.log(_this4.products.push(resp.data.product[i]));
            }

            _this4.form.products.push(product);

            _this4.totalCalculation();
          } //when not resp success
          else {
              _this4.$toasted.show("Product not found with " + _this4.product_code, {
                position: "top-center",
                type: "danger",
                duration: 2000
              });
            }

          _this4.$Progress.finish();
        })["catch"](function (error) {
          console.log(error);

          _this4.$Progress.finish();
        });
      }
    },
    //when chage qauntity
    quantity: function quantity(index) {
      if (parseInt(this.products[index].stock) < parseInt(this.form.products[index].quantity)) {
        alert("max quantity ".concat(this.form.products[index].stock));
        this.form.products[index].quantity = this.form.products[index].stock;
        return;
      }

      this.form.products[index].total = parseInt(this.form.products[index].price) * parseInt(this.form.products[index].quantity);
      this.totalCalculation();
    },
    priceChange: function priceChange(index) {
      this.form.products[index].total = parseInt(this.form.products[index].price) * parseInt(this.form.products[index].quantity);
      this.totalCalculation();
    },
    //total amount calculation
    totalCalculation: function totalCalculation() {
      var products = this.form.products;
      var total = 0;

      for (var i = 0; i < products.length; i++) {
        total += parseInt(products[i].price) * parseInt(products[i].quantity);
      }

      this.form.total = parseInt(total);
    },
    remove: function remove(index) {
      // console.log(index);
      console.log(this.form.products[index]);
      this.form.products.splice(index, 1);
      this.products.splice(index, 1);
      this.totalCalculation();
    }
  }
}); //Date picker

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product_transfer/Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product_transfer/Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-0c44b710] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-0c44b710] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.fa-search[data-v-0c44b710] {\r\n  height: 33px;\r\n  width: 60px;\r\n  margin-left: -25px;\n}\n.autocomplete li[data-v-0c44b710]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\n.suggest-product img[data-v-0c44b710] {\r\n  width: 120px;\r\n  height: 120px;\n}\n.suggest-product[data-v-0c44b710] {\r\n  background: #ecf0f5;\r\n  text-align: center;\r\n  padding: 20px;\r\n  box-shadow: 0px 0px 1px 2px #ddd;\n}\n.add-item.text-center[data-v-0c44b710] {\r\n  background: #fff;\r\n  width: block;\r\n  padding: 6px 5px;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  margin-bottom: 18px;\n}\n.form-group.product-search[data-v-0c44b710] {\r\n  width: 80%;\r\n  left: 10%;\r\n  position: relative;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product_transfer/Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product_transfer/Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product_transfer/Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product_transfer/Add.vue?vue&type=template&id=0c44b710&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/product_transfer/Add.vue?vue&type=template&id=0c44b710&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
                  staticClass: "btn btn-primary ",
                  attrs: { to: { name: "product_transfer" } }
                },
                [_c("i", { staticClass: "fa fa-arrow-left" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("form", {
            attrs: { id: "searchProductform" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.searchProduct($event)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.transferProductsIntoShowroom($event)
                },
                keydown: function($event) {
                  return _vm.form.onKeydown($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row justify-content-center" }, [
                _vm.errors.length
                  ? _c(
                      "div",
                      {
                        staticClass: "alert alert-danger alert-dismissible",
                        attrs: { role: "alert" }
                      },
                      [
                        _c(
                          "ul",
                          _vm._l(_vm.errors, function(error) {
                            return _c("div", [
                              _c("li", [_vm._v(_vm._s(error))]),
                              _vm._v(" "),
                              _c("br")
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "box box-primary" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Showroom")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.showroom_id,
                                  expression: "form.showroom_id"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("showroom_id")
                              },
                              attrs: { name: "showroom_id", required: "" },
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
                                    _vm.$set(
                                      _vm.form,
                                      "showroom_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.showroomInformation(
                                      _vm.form.showroom_id
                                    )
                                  }
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { disabled: "" } }, [
                                _vm._v("select showroom")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.showrooms, function(showroom, s_idx) {
                                return _c(
                                  "option",
                                  {
                                    key: s_idx,
                                    domProps: { value: showroom.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                          " +
                                        _vm._s(showroom.name) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "showroom_id" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Manager Name ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.manager_name,
                              expression: "manager_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: _vm.manager_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.manager_name = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Manager Phone ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.manager_phone,
                              expression: "manager_phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: _vm.manager_phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.manager_phone = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Address ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.address,
                              expression: "address"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: _vm.address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.address = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" Comments(optional) ")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.comment,
                              expression: "form.comment"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "comment", rows: "3" },
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
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-8" }, [
                  _c("div", { staticClass: "box box-success" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Scan Barcode || prodcut code")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_code,
                              expression: "product_code"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name",
                            autofocus: "",
                            autocomplete: "off",
                            placeholder: "Enter Product Code",
                            form: "searchProductform"
                          },
                          domProps: { value: _vm.product_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.product_code = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-striped table-hover table-bordered "
                            },
                            [
                              _vm._m(3),
                              _vm._v(" "),
                              _vm.products.length > 0
                                ? _c(
                                    "tbody",
                                    [
                                      _vm._l(_vm.products, function(
                                        product,
                                        index
                                      ) {
                                        return _c("tr", { key: index }, [
                                          _c("td", [_vm._v(_vm._s(index))]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(
                                                  product.name +
                                                    "-" +
                                                    product.product_code
                                                ) +
                                                "\n                            "
                                            ),
                                            _c("input", {
                                              attrs: { type: "hidden" },
                                              domProps: { value: product.id }
                                            })
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.form.products[index]
                                                      .quantity,
                                                  expression:
                                                    "form.products[index].quantity"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              staticStyle: { width: "70px" },
                                              attrs: { type: "number" },
                                              domProps: {
                                                value:
                                                  _vm.form.products[index]
                                                    .quantity
                                              },
                                              on: {
                                                keyup: function($event) {
                                                  return _vm.quantity(index)
                                                },
                                                change: function($event) {
                                                  return _vm.quantity(index)
                                                },
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.form.products[index],
                                                    "quantity",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-danger"
                                              },
                                              [_vm._v(_vm._s(product.stock))]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-success "
                                              },
                                              [
                                                _vm._v(
                                                  " ৳ " +
                                                    _vm._s(
                                                      product.purchase_price
                                                    ) +
                                                    "  "
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.form.products[index]
                                                      .price,
                                                  expression:
                                                    "form.products[index].price"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              staticStyle: { width: "80px" },
                                              attrs: { type: "number" },
                                              domProps: {
                                                value:
                                                  _vm.form.products[index].price
                                              },
                                              on: {
                                                keyup: function($event) {
                                                  return _vm.priceChange(index)
                                                },
                                                change: function($event) {
                                                  return _vm.quantity(index)
                                                },
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.form.products[index],
                                                    "price",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "  ৳ " +
                                                _vm._s(
                                                  _vm.form.products[index].total
                                                )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-danger btn-sm",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.remove(index)
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-trash"
                                                })
                                              ]
                                            )
                                          ])
                                        ])
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-success",
                                          staticStyle: { "margin-top": "12px" },
                                          attrs: {
                                            type: "submit",
                                            disabled: _vm.form.busy
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                          Submit\n                        "
                                          )
                                        ]
                                      )
                                    ],
                                    2
                                  )
                                : _vm._e()
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
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
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("product transfer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Showroom Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Product information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "3%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%", title: "purchase price " } }, [
          _vm._v("Root Purchase Price")
        ]),
        _vm._v(" "),
        _c(
          "th",
          { attrs: { width: "15%", title: " assign showroom purchase price" } },
          [_vm._v("Outlet Purchase Price")]
        ),
        _vm._v(" "),
        _c("th", [_vm._v("total")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "5%" } }, [_vm._v("Remove")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/product_transfer/Add.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/product_transfer/Add.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_0c44b710_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=0c44b710&scoped=true& */ "./resources/js/components/admin/product_transfer/Add.vue?vue&type=template&id=0c44b710&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/product_transfer/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_0c44b710_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css& */ "./resources/js/components/admin/product_transfer/Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_0c44b710_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_0c44b710_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c44b710",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/product_transfer/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/product_transfer/Add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/product_transfer/Add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product_transfer/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/product_transfer/Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/product_transfer/Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0c44b710_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product_transfer/Add.vue?vue&type=style&index=0&id=0c44b710&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0c44b710_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0c44b710_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0c44b710_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0c44b710_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_0c44b710_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/product_transfer/Add.vue?vue&type=template&id=0c44b710&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/admin/product_transfer/Add.vue?vue&type=template&id=0c44b710&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_0c44b710_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=0c44b710&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/product_transfer/Add.vue?vue&type=template&id=0c44b710&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_0c44b710_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_0c44b710_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);