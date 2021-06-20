(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Add",
  created: function created() {
    this.others();
    this.edit();
  },
  data: function data() {
    var _Form;

    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]((_Form = {
        customer_mobile: "",
        customer_name: "",
        customer_address: "",
        city: "",
        courier: "",
        products: [],
        shipping_cost: 0
      }, _defineProperty(_Form, "courier", ""), _defineProperty(_Form, "total", 0), _defineProperty(_Form, "discount", 0), _defineProperty(_Form, "paid", 0), _defineProperty(_Form, "paid_by", ""), _defineProperty(_Form, "due", 0), _defineProperty(_Form, "order_type", ""), _defineProperty(_Form, "sub_city", ""), _Form)),
      attribute_id: "",
      variant_id: "",
      product_code: "",
      city_id: "",
      courier_id: "",
      shipping_cost: "",
      products: [],
      product_attributes: null,
      product_variants: null,
      cities: null,
      couriers: null,
      product_quantity: 1,
      error: "",
      loading: true,
      sub_cities: ""
    };
  },
  methods: {
    //method initial for get data
    edit: function edit() {
      var _this = this;

      axios.get("/order/view/" + this.$route.params.id).then(function (resp) {
        console.log(resp);
        console.log(resp.data.order.cutomer_phone);

        if (resp.data.status == "SUCCESS") {
          var _console;

          var order = resp.data.order;
          _this.form.customer_mobile = order.cutomer_phone;
          _this.form.customer_name = order.customer.name;
          _this.form.customer_address = order.customer.address;
          _this.form.city = order.city_id;
          _this.form.shipping_cost = order.shipping_cost;
          _this.form.courier = order.courier_id;
          _this.form.paid = order.paid;
          _this.form.discount = order.discount;
          _this.form.total = order.total;
          _this.form.order_type = order.order_type;
          _this.form.due = parseInt(order.total) - (parseInt(order.paid) + parseInt(order.discount)) + parseInt(order.shipping_cost);

          if (order.paid_by) {
            _this.form.paid_by = order.paid_by;
          } //problem is there product attribute


          var products = [];

          for (var i = 0; i < resp.data.items.length; i++) {
            products[i] = {
              product_id: resp.data.items[i].product.id,
              name: resp.data.items[i].product.name,
              //product name
              product_code: resp.data.items[i].product_code,
              quantity: resp.data.items[i].quantity,
              price: resp.data.items[i].price,
              variants: resp.data.items[i].product.product_variant
            };

            _this.products.push(products[i]);

            _this.form.products.push(products[i]);

            _this.form.products[i].total = resp.data.items[i].total;
            _this.form.products[i].variant_id = resp.data.items[i].variant_id;
            _this.form.products[i].attribute_id = resp.data.items[i].attribute_id;
          }

          (_console = console).log.apply(_console, products);

          console.log(products);

          _this.cityWiseSubCity();

          _this.form.sub_city = order.sub_city_id;
          _this.loading = false;
        }
      });
    },
    //method initial for submit data
    add: function add() {
      var _this2 = this;

      this.form.post("/update/order/" + this.$route.params.id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this2.$router.push({
            name: "order"
          });

          _this2.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 2000
          }); //other wise success, show a error

        } else {
          _this2.$toasted.show(resp.data, {
            type: "error",
            position: "top-center",
            duration: 4000
          });
        }
      })["catch"](function (error) {
        _this2.error = "Missing submit information. please check all field below and try again";
      });
    },
    //method iniital for get other data to create order, like cit, courier and other.......
    others: function others() {
      var _this3 = this;

      axios.get("/others") //success resp only
      .then(function (resp) {
        if (resp.data.status == "SUCCESS") {
          _this3.cities = resp.data.cities;
          _this3.couriers = resp.data.couriers;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    //method initial for search product
    searchProduct: function searchProduct() {
      var _this4 = this;

      var length = this.product_code.length; //  alert(length)

      if (length == 4) {
        axios.get("/search/product/with/code/" + this.product_code).then(function (resp) {
          //when resp success
          if (resp.data.status == "SUCCESS") {
            var product = {
              product_id: "",
              price: "",
              quantity: 1,
              attribute_id: "",
              variant_id: "",
              total: ""
            };

            for (var i = 0; i < resp.data.product.length; i++) {
              //check the product stcok availity
              _this4.products.push(resp.data.product[i]);

              product.product_id = resp.data.product[i].id;
              product.price = resp.data.product[i].price;
              product.total = resp.data.product[i].price;
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
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    //method initial search customer
    searchCustomer: function searchCustomer() {
      var _this5 = this;

      if (this.form.customer_mobile.length == 11) {
        axios.get("/search/customer/with/phone/number/" + this.form.customer_mobile).then(function (resp) {
          //when com data from t resp
          if (resp.data) {
            if (resp.data.customer) {
              _this5.form.customer_name = resp.data.customer.name, _this5.form.customer_address = resp.data.customer.address;
              _this5.form.city = resp.data.customer.city_id;
            }

            _this5.$toasted.show(resp.data.message, {
              type: "error",
              position: "top-center",
              duration: 4000
            });
          }
        })["catch"](function (error) {//console.log(error);
        });
      }
    },
    //set product attribute
    attribute: function attribute(index) {
      this.form.products[index].attribute_id = this.attribute_id;
    },
    //set product variant
    variant: function variant(index) {
      this.form.products[index].variant_id = this.variant_id;
    },
    //when chage qauntity
    quantity: function quantity(index) {
      this.form.products[index].total = this.form.products[index].price * this.form.products[index].quantity;
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
      this.form.due = parseInt(this.form.total) - parseInt(this.form.discount) - parseInt(this.form.paid) + parseInt(this.form.shipping_cost);
    },
    //select city
    selectCity: function selectCity() {
      var id = this.form.city;
      var cities = this.cities;

      for (var i = 0; i < cities.length; i++) {
        if (cities[i].id == id) {
          this.form.shipping_cost = parseInt(cities[i].delivery_charge);
        }
      }

      this.totalCalculation();
      this.cityWiseSubCity();
    },
    remove: function remove(index) {
      // console.log(index);
      console.log(this.form.products[index]);
      this.form.products.splice(index, 1);
      this.products.splice(index, 1);
      this.totalCalculation();
    },
    cityWiseSubCity: function cityWiseSubCity() {
      var _this6 = this;

      axios.get('/api/city/wise/sub/city/' + this.form.city).then(function (resp) {
        _this6.form.sub_city = "";

        if (resp.data.length) {
          _this6.sub_cities = resp.data;
        } else {
          _this6.form.sub_city = "";
          _this6.sub_cities = "";
          alert('No sub city under selected city');
        }

        console.log(resp);
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  computed: {},
  components: {
    datePicker: vue_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_2___default.a
  }
}); //Date picker

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-64a43854] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-64a43854] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.autocomplete li[data-v-64a43854]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Edit.vue?vue&type=template&id=64a43854&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/Edit.vue?vue&type=template&id=64a43854&scoped=true& ***!
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
      _c("div", { staticClass: "content-wrapper" }, [
        _c("section", { staticClass: "content-header" }, [
          _c(
            "h1",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "order" } }
                },
                [_c("i", { staticClass: "fa fa-arrow-right" })]
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
            attrs: { id: "ProductSearch" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.searchProduct($event)
              }
            }
          }),
          _vm._v(" "),
          _vm.loading
            ? _c("h1", [_c("i", { staticClass: "fa fa-spin fa-spinner" })])
            : _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.add($event)
                    },
                    keydown: function($event) {
                      return _vm.form.onKeydown($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row justify-content-center" }, [
                    _vm.error
                      ? _c(
                          "div",
                          {
                            staticClass: "alert alert-danger alert-dismissible",
                            attrs: { role: "alert" }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm.error) +
                                "\n            "
                            ),
                            _c(
                              "span",
                              {
                                staticClass: "close",
                                staticStyle: { color: "#fff" },
                                attrs: {
                                  "aria-hidden": "true",
                                  "data-dismiss": "alert",
                                  "aria-label": "Close"
                                }
                              },
                              [_vm._v("×")]
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
                              _c("label", [_vm._v("Customer_mobile")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.customer_mobile,
                                    expression: "form.customer_mobile"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "customer_mobile"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "customer_mobile",
                                  autofocus: "",
                                  autocomplete: "off",
                                  placeholder:
                                    "Enter customer 11 digit mobile number"
                                },
                                domProps: { value: _vm.form.customer_mobile },
                                on: {
                                  keyup: _vm.searchCustomer,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "customer_mobile",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "customer_mobile"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Name")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.customer_name,
                                    expression: "form.customer_name"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "customer_name"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "name",
                                  autofocus: "",
                                  autocomplete: "off",
                                  placeholder: "Name"
                                },
                                domProps: { value: _vm.form.customer_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "customer_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "customer_name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Address")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.customer_address,
                                    expression: "form.customer_address"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "customer_address"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "address",
                                  autofocus: "",
                                  autocomplete: "off",
                                  placeholder: "address"
                                },
                                domProps: { value: _vm.form.customer_address },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "customer_address",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "customer_address"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("City")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.city,
                                      expression: "form.city"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("city")
                                  },
                                  attrs: { name: "city", id: "" },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.form,
                                          "city",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      _vm.selectCity
                                    ]
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("select city")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.cities, function(city) {
                                    return _c(
                                      "option",
                                      { domProps: { value: city.id } },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(city.name) +
                                            "\n                    "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "city" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Sub City")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.sub_city,
                                      expression: "form.sub_city"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "sub_city"
                                    )
                                  },
                                  attrs: { name: "sub_city" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "sub_city",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { disabled: "", value: "" } },
                                    [_vm._v("select sub city")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.sub_cities, function(sub_city) {
                                    return _vm.sub_cities.length > 0
                                      ? _c(
                                          "option",
                                          {
                                            key: sub_city.id,
                                            domProps: { value: sub_city.id }
                                          },
                                          [_vm._v(_vm._s(sub_city.name))]
                                        )
                                      : _vm._e()
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "sub_city" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Shipping_cost")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.shipping_cost,
                                    expression: "form.shipping_cost"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "shipping_cost"
                                  )
                                },
                                attrs: { type: "text", name: "shipping_cost" },
                                domProps: { value: _vm.form.shipping_cost },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "shipping_cost",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "shipping_cost"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Courier")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.courier,
                                      expression: "form.courier"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("courier")
                                  },
                                  attrs: { name: "courier" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "courier",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("select courier")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.couriers, function(courier) {
                                    return _c(
                                      "option",
                                      { domProps: { value: courier.id } },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(courier.name) +
                                            "\n                    "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "courier" }
                              })
                            ],
                            1
                          )
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
                            _c("label", [_vm._v("Product")]),
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
                                form: "ProductSearch"
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
                              _c("table", { staticClass: "table" }, [
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
                                            _c("td", [
                                              _vm._v(_vm._s(index + 1))
                                            ]),
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
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.form.products[index]
                                                          .attribute_id,
                                                      expression:
                                                        "form.products[index].attribute_id"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  on: {
                                                    change: function($event) {
                                                      var $$selectedVal = Array.prototype.filter
                                                        .call(
                                                          $event.target.options,
                                                          function(o) {
                                                            return o.selected
                                                          }
                                                        )
                                                        .map(function(o) {
                                                          var val =
                                                            "_value" in o
                                                              ? o._value
                                                              : o.value
                                                          return val
                                                        })
                                                      _vm.$set(
                                                        _vm.form.products[
                                                          index
                                                        ],
                                                        "attribute_id",
                                                        $event.target.multiple
                                                          ? $$selectedVal
                                                          : $$selectedVal[0]
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [_vm._v("select attribute")]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    product.attributes,
                                                    function(
                                                      product_attribute,
                                                      index
                                                    ) {
                                                      return product.attributes
                                                        ? _c(
                                                            "option",
                                                            {
                                                              key: index,
                                                              domProps: {
                                                                value:
                                                                  product_attribute
                                                                    .attribute
                                                                    .id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                " +
                                                                  _vm._s(
                                                                    product_attribute
                                                                      .attribute
                                                                      .name
                                                                  ) +
                                                                  "\n                              "
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    }
                                                  )
                                                ],
                                                2
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.form.products[index]
                                                          .variant_id,
                                                      expression:
                                                        "form.products[index].variant_id"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  on: {
                                                    change: function($event) {
                                                      var $$selectedVal = Array.prototype.filter
                                                        .call(
                                                          $event.target.options,
                                                          function(o) {
                                                            return o.selected
                                                          }
                                                        )
                                                        .map(function(o) {
                                                          var val =
                                                            "_value" in o
                                                              ? o._value
                                                              : o.value
                                                          return val
                                                        })
                                                      _vm.$set(
                                                        _vm.form.products[
                                                          index
                                                        ],
                                                        "variant_id",
                                                        $event.target.multiple
                                                          ? $$selectedVal
                                                          : $$selectedVal[0]
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [_vm._v("select attribute")]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    product.variants,
                                                    function(
                                                      product_variant,
                                                      index
                                                    ) {
                                                      return product.variants
                                                        ? _c(
                                                            "option",
                                                            {
                                                              key: index,
                                                              domProps: {
                                                                value:
                                                                  product_variant
                                                                    .variant.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                " +
                                                                  _vm._s(
                                                                    product_variant
                                                                      .variant
                                                                      .name
                                                                  ) +
                                                                  "\n                              "
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    }
                                                  )
                                                ],
                                                2
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
                                                        .quantity,
                                                    expression:
                                                      "form.products[index].quantity"
                                                  }
                                                ],
                                                staticStyle: { width: "50px" },
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
                                                    if (
                                                      $event.target.composing
                                                    ) {
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
                                              _vm.form.order_type == 3
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.products[
                                                            index
                                                          ].price,
                                                        expression:
                                                          "form.products[index].price"
                                                      }
                                                    ],
                                                    domProps: {
                                                      value:
                                                        _vm.form.products[index]
                                                          .price
                                                    },
                                                    on: {
                                                      keyup: function($event) {
                                                        _vm.totalCalculation &&
                                                          _vm.quantity(index)
                                                      },
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form.products[
                                                            index
                                                          ],
                                                          "price",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                : _c("strong", [
                                                    _vm._v(
                                                      _vm._s(product.price)
                                                    )
                                                  ])
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
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
                                        _vm.products.length > 0
                                          ? _c("tr", [
                                              _c("td", {
                                                attrs: { colspan: "5" }
                                              }),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v("Total Amount")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [_vm._v(_vm._s(_vm.form.total))]
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.products.length > 0
                                          ? _c("tr", [
                                              _c("td", {
                                                attrs: { colspan: "5" }
                                              }),
                                              _vm._v(" "),
                                              _c("td", [_vm._v("Discout")]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.discount,
                                                        expression:
                                                          "form.discount"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    staticStyle: {
                                                      width: "60px"
                                                    },
                                                    domProps: {
                                                      value: _vm.form.discount
                                                    },
                                                    on: {
                                                      keyup:
                                                        _vm.totalCalculation,
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "discount",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.products.length > 0
                                          ? _c("tr", [
                                              _c("td", {
                                                attrs: { colspan: "5" }
                                              }),
                                              _vm._v(" "),
                                              _c("td", [_vm._v("Paid")]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: _vm.form.paid,
                                                        expression: "form.paid"
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    domProps: {
                                                      value: _vm.form.paid
                                                    },
                                                    on: {
                                                      keyup:
                                                        _vm.totalCalculation,
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.form,
                                                          "paid",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", { attrs: { colspan: "5" } }),
                                          _vm._v(" "),
                                          _c("td", [_vm._v("Paid By")]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { colspan: "2" } },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c(
                                                    "select",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.form.paid_by,
                                                          expression:
                                                            "form.paid_by"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      class: {
                                                        "is-invalid": _vm.form.errors.has(
                                                          "paid_by"
                                                        )
                                                      },
                                                      attrs: {
                                                        name: "debit_from",
                                                        id: ""
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$selectedVal = Array.prototype.filter
                                                            .call(
                                                              $event.target
                                                                .options,
                                                              function(o) {
                                                                return o.selected
                                                              }
                                                            )
                                                            .map(function(o) {
                                                              var val =
                                                                "_value" in o
                                                                  ? o._value
                                                                  : o.value
                                                              return val
                                                            })
                                                          _vm.$set(
                                                            _vm.form,
                                                            "paid_by",
                                                            $event.target
                                                              .multiple
                                                              ? $$selectedVal
                                                              : $$selectedVal[0]
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "Cash"
                                                          }
                                                        },
                                                        [_vm._v("Cash")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value:
                                                              "Bkash(personal)"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Bkash(personal)"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value:
                                                              "Bkash(merchant)"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Bkash(merchant)"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "Bank(SIBL)"
                                                          }
                                                        },
                                                        [_vm._v("Bank(SIBL)")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "Bank(AIBL)"
                                                          }
                                                        },
                                                        [_vm._v("Bank(AIBL)")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("has-error", {
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "paid_by"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm.products.length > 0
                                          ? _c("tr", [
                                              _c("td", {
                                                attrs: { colspan: "5" }
                                              }),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v("Shipping_charge")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.form.shipping_cost
                                                    )
                                                  )
                                                ]
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.products.length > 0
                                          ? _c("tr", [
                                              _c("td", {
                                                attrs: { colspan: "5" }
                                              }),
                                              _vm._v(" "),
                                              _c("td", [_vm._v("Amoutn due")]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { attrs: { colspan: "2" } },
                                                [_vm._v(_vm._s(_vm.form.due))]
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-success",
                                            staticStyle: {
                                              "margin-top": "12px"
                                            },
                                            attrs: { type: "submit" }
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
                              ])
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
      _c("li", { staticClass: "active" }, [_vm._v("Order")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Customer information")])
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
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", [_vm._v("Attribute")]),
        _vm._v(" "),
        _c("th", [_vm._v("Variant")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("total")]),
        _vm._v(" "),
        _c("th", [_vm._v("Remove")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/order/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/order/Edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_64a43854_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=64a43854&scoped=true& */ "./resources/js/components/admin/order/Edit.vue?vue&type=template&id=64a43854&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_64a43854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css& */ "./resources/js/components/admin/order/Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_64a43854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_64a43854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64a43854",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/order/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64a43854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Edit.vue?vue&type=style&index=0&id=64a43854&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64a43854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64a43854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64a43854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64a43854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_64a43854_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/order/Edit.vue?vue&type=template&id=64a43854&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/order/Edit.vue?vue&type=template&id=64a43854&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_64a43854_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=64a43854&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/Edit.vue?vue&type=template&id=64a43854&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_64a43854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_64a43854_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);