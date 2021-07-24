(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single_product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_image_zoomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-image-zoomer */ "./node_modules/vue-image-zoomer/dist/vueImageZoom.js");
/* harmony import */ var vue_image_zoomer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_image_zoomer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  beforeCreated: function beforeCreated() {
    var _this = this;

    this.validation();
    window.scrollTo(0, 0);
    setTimeout(function () {
      _this.validation();
    }, 200);
  },
  data: function data() {
    return {
      isLoading: true,
      fullPage: true,
      disabled: true,
      variant_index: "",
      base_url: this.$store.state.image_base_link,
      cart: {
        product_id: "",
        variant_id: "",
        attrribute_id: "",
        quantity: 1
      },
      related_products: [],
      page: 1,
      tab_content: 1,
      quick_v_product_id: "",
      o_modal: false,
      zoomerOptions: {
        zoomFactor: 4,
        pane: "pane",
        hoverDelay: 300,
        namespace: "zoomer-left",
        move_by_click: true,
        scroll_items: 4,
        choosed_thumb_border_color: "#ff3d00",
        scroller_position: "bottom" // zoomer_pane_position: "right",

      }
    };
  },
  methods: {
    CartToAdd: function CartToAdd() {
      var _this2 = this;

      axios.get("/_public/addToCart", {
        params: {
          slug: this.$route.params.slug,
          attribute_id: this.cart.attrribute_id,
          variant_id: this.cart.variant_id,
          quantity: this.cart.quantity
        }
      }).then(function (resp) {
        // console.log(resp);
        if (resp.data.status == "SUCCESS") {
          _this2.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "success",
            duration: 2000
          });

          _this2.$store.dispatch("getCartContent");
        } else if (resp.data.status == "error") {
          _this2.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "error",
            duration: 4000
          });
        }
      }).then(function (error) {// console.log(error);
      });
    },
    buyNow: function buyNow() {
      var _this3 = this;

      axios.get("/_public/addToCart", {
        params: {
          slug: this.$route.params.slug,
          attribute_id: this.cart.attrribute_id,
          variant_id: this.cart.variant_id,
          quantity: this.cart.quantity
        }
      }).then(function (resp) {
        // console.log(resp);
        if (resp.data.status == "SUCCESS") {
          _this3.$store.dispatch("getCartContent");

          _this3.$toasted.show(resp.data.message, {
            position: "bottom-left",
            type: "success",
            duration: 2000
          });

          var user = _this3.user;

          if (user.mobile_no) {
            _this3.$router.push({
              name: "Chekout"
            });
          } else {
            _this3.$router.push({
              name: "otpLogin"
            });
          }
        } else if (resp.data.status == "error") {
          _this3.$toasted.show(resp.data.message, {
            position: "top-center",
            type: "error",
            duration: 4000
          });
        }
      }).then(function (error) {// console.log(error);
      });
    },
    validation: function validation() {
      if (this.cart.quantity < 1) {
        this.cart.quantity = 1;
        alert("Quantity at least 1");
        return;
      }

      if (this.product.product_attribute) {
        if (this.cart.attrribute_id < 1) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      } else {
        this.disabled = false;
      }
    },
    SelectVaraint: function SelectVaraint() {
      // this.product.product_variant.length=0;
      var index = this.variant_index;
      var variant_id = this.product.product_variant[index].variant_id;
      var attribute_id = this.product.product_variant[index].variant.attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },
    getRelatedProducts: function getRelatedProducts($state) {
      var _this4 = this;

      axios.get("/_public/related/products/?page=" + this.page, {
        params: {
          product_slug: this.$route.params.slug
        }
      }).then(function (resp) {
        if (resp.data.data.length) {
          var _this4$related_produc;

          _this4.page += 1;

          (_this4$related_produc = _this4.related_products).push.apply(_this4$related_produc, _toConsumableArray(resp.data.data));

          $state.loaded();
        } else {
          $state.complete();
        }
      })["catch"](function (error) {// console.log(error);
      });
    },
    closedModal: function closedModal(close) {
      this.quick_v_product_id = "";
    }
  },
  mounted: function mounted() {
    this.getRelatedProducts();
    this.$store.dispatch("product_images", this.$route.params.slug);
    this.$store.dispatch("single_product", this.$route.params.slug);
    this.$store.dispatch("user");
  },
  computed: {
    product: function product() {
      return this.$store.getters.single_product;
    },
    product_images: function product_images() {
      return this.$store.getters.product_images;
    },
    user: function user() {
      return this.$store.getters.user;
    }
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a,
    imageZoom: vue_image_zoomer__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  watch: {
    product_images: function product_images(value) {
      if (Object.keys(value).length > 0) {
        this.isLoading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg.responsive-image.preview-box[data-v-6e453e8c] {\r\n  width: 350px !important;\r\n  height: 350px !important;\n}\n.product-details-tabe[data-v-6e453e8c] {\r\n  margin-top: 20px;\n}\n.btnQuick[data-v-6e453e8c]:hover{\r\n\r\n   background: #ff4d03;\n}\n.v-lazy-image[data-v-6e453e8c] {\r\n  filter: blur(1px);\r\n  transition: filter 0.5s;\n}\n.v-lazy-image-loaded[data-v-6e453e8c] {\r\n  filter: blur(0);\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrapper-wide" },
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
      _c("frontend-header"),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("div", { attrs: { id: "container" } }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "single-product-box" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("div", [
                      _c("div", { staticClass: "row product-info" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-6 col-md-6 product-image-viewer"
                          },
                          [
                            _vm.product_images.length
                              ? _c("image-zoom", {
                                  attrs: {
                                    regular:
                                      _vm.base_url +
                                      _vm.product_images[0].product_image,
                                    "img-class": "single_product_image"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("ul", { staticClass: "list-unstyled description" }, [
                      _c("li", [
                        _c(
                          "h2",
                          { staticClass: "title", attrs: { itemprop: "name" } },
                          [_vm._v(_vm._s(_vm.product.name))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("h4", [
                          _c("b", [_vm._v("Product Code:")]),
                          _vm._v(" "),
                          _c("span", { attrs: { itemprop: "mpn" } }, [
                            _vm._v(_vm._s(_vm.product.product_code))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("h4", [
                          _c("b", [_vm._v("Availability:")]),
                          _vm._v(" "),
                          _vm.product.stock > 0
                            ? _c("span", { staticClass: "instock" }, [
                                _vm._v("Stock In "),
                                _c("small", [
                                  _vm._v("(" + _vm._s(_vm.product.stock) + ")")
                                ])
                              ])
                            : _c("span", { staticClass: "outstcok" }, [
                                _vm._v("Stock Out")
                              ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "price-box" }, [
                      _c("li", { staticClass: "price  " }, [
                        _c("h3", [
                          _vm.product.discount
                            ? _c(
                                "span",
                                { staticClass: "price-old single_p_price" },
                                [_vm._v("৳ " + _vm._s(_vm.product.sale_price))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "price-new single_p_price" },
                            [_vm._v("৳ " + _vm._s(_vm.product.price))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li")
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "product" } }, [
                      _c("div", { staticClass: "row" }, [
                        _vm.product.product_variant.length > 0 &&
                        _vm.product.product_attribute
                          ? _c("div", { staticClass: "col-lg-6" }, [
                              _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "form-group required" },
                                  [
                                    _c("h4", { staticClass: "control-label" }, [
                                      _c("b", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.product.product_attribute
                                              .attribute.name
                                          )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.variant_index,
                                            expression: "variant_index"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { name: "option[200]" },
                                        on: {
                                          change: [
                                            function($event) {
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
                                              _vm.variant_index = $event.target
                                                .multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            },
                                            _vm.SelectVaraint
                                          ]
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { value: "", disabled: "" }
                                          },
                                          [_vm._v("--- Please Select ---")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.product.product_variant,
                                          function(variant, v) {
                                            return _c(
                                              "option",
                                              {
                                                key: v,
                                                attrs: { value: "" },
                                                domProps: { value: v }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    variant.variant
                                                      ? variant.variant.name
                                                      : ""
                                                  )
                                                )
                                              ]
                                            )
                                          }
                                        )
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c("div", {}, [
                            _vm._m(0),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.cart.quantity,
                                  expression: "cart.quantity"
                                }
                              ],
                              staticClass: "form-control input_qty",
                              attrs: {
                                type: "number",
                                name: "quantity",
                                value: "1"
                              },
                              domProps: { value: _vm.cart.quantity },
                              on: {
                                change: _vm.validation,
                                keyup: _vm.validation,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.cart,
                                    "quantity",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "incrementor_plus",
                                on: {
                                  click: function($event) {
                                    _vm.cart.quantity += 1
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-plus" })]
                            ),
                            _vm._v(" "),
                            _vm.cart.quantity > 1
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "incrementor_minus",
                                    on: {
                                      click: function($event) {
                                        _vm.cart.quantity -= 1
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-minus" })]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "clear" })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-lg btn-block",
                              staticStyle: { "margin-top": "38px" },
                              attrs: { type: "button", id: "button-cart" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.CartToAdd($event)
                                }
                              }
                            },
                            [_vm._v("Add to Bag ")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-lg btn-block",
                              staticStyle: {
                                "margin-top": "38px",
                                background: "#000"
                              },
                              attrs: { type: "button", id: "button-cart" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.buyNow($event)
                                }
                              }
                            },
                            [_vm._v("Buy Now")]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "product-details-tabe" }, [
                _c("ul", { staticClass: "details-tab-menu-list" }, [
                  _c(
                    "li",
                    {
                      staticClass: "details-tab-menu-item",
                      class: { "tab-menu-item-active": _vm.tab_content == 1 },
                      on: {
                        click: function($event) {
                          _vm.tab_content = 1
                        }
                      }
                    },
                    [_vm._v("Description")]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "details-tab-menu-item",
                      class: { "tab-menu-item-active": _vm.tab_content == 2 },
                      on: {
                        click: function($event) {
                          _vm.tab_content = 2
                        }
                      }
                    },
                    [_vm._v("How To Buy")]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "details-tab-menu-item",
                      class: { "tab-menu-item-active": _vm.tab_content == 3 },
                      on: {
                        click: function($event) {
                          _vm.tab_content = 3
                        }
                      }
                    },
                    [_vm._v("Return Policy")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "product-tab-content" }, [
                  _c("div", {
                    staticClass: "product-details",
                    class: { block: _vm.tab_content == 1 },
                    domProps: { innerHTML: _vm._s(_vm.product.details) }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "how-to-buy",
                      class: { block: _vm.tab_content == 2 }
                    },
                    [_vm._m(1)]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "how-to-buy",
                      class: { block: _vm.tab_content == 3 }
                    },
                    [_vm._m(2)]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row realted-producs" },
                [
                  _c("h3", { staticClass: "title" }, [
                    _vm._v("Related Products")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.related_products, function(product, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass:
                          "col-lg-2 col-sm-6 col-md-6 col-xs-6 width-20 small_width"
                      },
                      [
                        _c("div", { staticClass: "product-card " }, [
                          _c(
                            "div",
                            { staticClass: "product-card-body" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "single",
                                      params: { slug: product.slug }
                                    }
                                  }
                                },
                                [
                                  _c("v-lazy-image", {
                                    attrs: {
                                      src:
                                        _vm.base_url +
                                        product.product_image[0].product_image,
                                      "src-placeholder":
                                        _vm.base_url + "images/preview.png"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "product-detail small-detail" },
                                [
                                  _c(
                                    "h4",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "product-link",
                                          attrs: {
                                            to: {
                                              name: "single",
                                              params: { slug: product.slug }
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(product.name))]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "price" }, [
                                    _c("span", { staticClass: "price-new" }, [
                                      _vm._v(_vm._s(product.price))
                                    ]),
                                    _vm._v(" "),
                                    product.discount
                                      ? _c(
                                          "span",
                                          { staticClass: "price-old" },
                                          [
                                            _vm._v(
                                              "৳ " + _vm._s(product.sale_price)
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    product.discount > 0
                                      ? _c(
                                          "span",
                                          { staticClass: "discount" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-star discount_star"
                                            }),
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  (
                                                    (product.discount /
                                                      product.sale_price) *
                                                    100
                                                  ).toFixed(0)
                                                ) +
                                                "%  "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "d_off" },
                                              [_vm._v("off")]
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "product-card-footer" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary btnQuick",
                                staticStyle: { cursor: "pointer" },
                                on: {
                                  click: function($event) {
                                    _vm.quick_v_product_id = product.id
                                  }
                                }
                              },
                              [_vm._v("view")]
                            )
                          ])
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "infinite-loading",
                    { on: { infinite: _vm.getRelatedProducts } },
                    [_c("div", { attrs: { slot: "no-more" }, slot: "no-more" })]
                  )
                ],
                2
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("frontend-footer"),
      _vm._v(" "),
      _vm.quick_v_product_id
        ? _c("quick-view", {
            attrs: { quick_v_p_id: _vm.quick_v_product_id },
            on: {
              clicked: function($event) {
                return _vm.closedModal($event)
              }
            }
          })
        : _vm._e()
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
      "h4",
      { staticClass: "control-label", attrs: { for: "input-quantity" } },
      [_c("b", [_vm._v("Quantity")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v("Select number of product you want to buy.")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v("Click "),
        _c("strong", [_vm._v("Add To Cart")]),
        _vm._v(" Button")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [_vm._v("Then go to checkout page")]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "If you are a new user, please click on Sign Up.provide us uour valid inormation information."
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "Complete your checkout, we received your order, and for order confirmation or customer service contact with you"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "If your product is damaged, defective, incorrect or incomplete at the time of delivery, please file a return request on call to customer care support number within 3 days of the delivery date"
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "h-b-li" }, [
        _vm._v(
          "Change of mind is not applicable as a Return Reason for this product"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& */ "./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&");
/* harmony import */ var _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e453e8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/SingleProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=style&index=0&id=6e453e8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6e453e8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/SingleProduct.vue?vue&type=template&id=6e453e8c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6e453e8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);