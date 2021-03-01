(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carier_detail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.getCarrierDetails();
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_3__["Form"]({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: '',
        file: ''
      }),
      title: "",
      vacency: "",
      deadline: "",
      description: "",
      image: "",
      image_base_link: this.$store.state.image_base_link
    };
  },
  methods: {
    getCarrierDetails: function getCarrierDetails() {
      var _this = this;

      axios.get('/_public/carrier/details/' + this.$route.params.id).then(function (resp) {
        if (resp.data.success == "OK") {
          _this.title = resp.data.carrier.title;
          _this.description = resp.data.carrier.description;
          _this.deadline = resp.data.carrier.deadline;
          _this.vacency = resp.data.carrier.vacency;
          _this.image = resp.data.carrier.image;
        }
      })["catch"]();
    },
    uploadFile: function uploadFile(e) {
      var file = e.target.files[0];
      this.form.file = file;
    },
    applyJob: function applyJob() {
      var _this2 = this;

      this.form.post('/_public/api/carrier/apply/by/job/' + this.$route.params.id, {
        transformRequest: [function (data, headers) {
          return objectToFormData(data);
        }]
      }).then(function (resp) {
        if (resp.data.success == "OK") {
          _this2.$toasted.show('Thanks for apply. we will notice your application', {
            type: 'success',
            duration: 6000,
            position: 'top-center'
          });

          _this2.$router.push({
            name: 'carrier_public'
          });
        } else {
          _this2.$toasted.show('sorry :) try agian ', {
            type: 'error',
            duration: 4000,
            position: 'top-center'
          });
        }
      });
    }
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.contact-li {\r\n  list-style-type: none;\r\n\r\n  margin-top: 10px;\n}\np {\r\n    font-size: 18px;\r\n    line-height: 24px;\n}\n.btnSubmit{\r\n    background:#FF4D03 ;\r\n    color:#fff;\r\n    width: 100px;\r\n    border-radius: 5px;\r\n    margin-top: 10px;\r\n    border: 1px dashed;\n}\n.feature_image{ \r\n  width: 250px; \r\n  height: 200px; \r\n  border-radius: 10px ;\n}\n@media screen and (max-width: 350px) {\np {\r\n      font-size: 14px;\r\n      line-height: 24px;\n}\n.feature_image {\r\n    width: 205px;\r\n    height: 132px;\r\n    border-radius: 10px;\n}\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierDetails.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=template&id=751b04ec&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=template&id=751b04ec& ***!
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
    { staticClass: "wrapper-wide" },
    [
      _c("frontend-header"),
      _vm._v(" "),
      _c("div", { attrs: { id: "container" } }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            {
              staticClass: "row bg-white shadow",
              staticStyle: { margin: "20px" }
            },
            [
              _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-4" }, [
                _c(
                  "div",
                  {
                    staticClass: "job_info",
                    staticStyle: { "margin-top": "20px" }
                  },
                  [
                    _c("h4", { staticClass: "heading" }, [
                      _vm._v(_vm._s(_vm.title))
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("i", { staticClass: "fa fa-briefcase" }),
                      _vm._v(
                        " Number of vacency :\n              " +
                          _vm._s(_vm.vacency) +
                          "\n            "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _c("p", [
                      _c("i", {
                        staticClass: "fa fa-calendar",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(
                        " Deadline :\n              " +
                          _vm._s(_vm.deadline) +
                          "\n            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "feature_image",
                      attrs: {
                        src: _vm.image
                          ? _vm.image_base_link + _vm.image
                          : _vm.image_base_link + "images/no_image.jpg"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-8 col-md-8 col-sm-8" }, [
                _c(
                  "div",
                  {
                    staticClass: "job_desc",
                    staticStyle: { "margin-top": "20px" }
                  },
                  [
                    _c("h4", { staticClass: "heading" }, [
                      _vm._v("Job Description")
                    ]),
                    _vm._v(" "),
                    _c("p", {
                      staticStyle: {
                        "word-break": "break-all",
                        padding: "10px"
                      },
                      domProps: { innerHTML: _vm._s(_vm.description) }
                    })
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "row bg-white shadow",
              staticStyle: { margin: "20px" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-lg-8 col-sm-8" }, [
                _c(
                  "div",
                  {
                    staticClass: "job_desc",
                    staticStyle: {
                      "margin-bottom": "25px",
                      "margin-top": "20px"
                    }
                  },
                  [
                    _c(
                      "form",
                      {
                        attrs: {
                          method: "post",
                          enctype: "multipart/form-data"
                        },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.applyJob($event)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v(" Name")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.name,
                                  expression: "form.name"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("name")
                              },
                              attrs: {
                                autofocus: "",
                                placeholder: "write full name",
                                type: "text",
                                name: "name"
                              },
                              domProps: { value: _vm.form.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "name" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "email" } }, [
                              _vm._v(" Email")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.email,
                                  expression: "form.email"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("email")
                              },
                              attrs: {
                                autofocus: "",
                                name: "email",
                                placeholder: " example@gmail.com ",
                                type: "emial"
                              },
                              domProps: { value: _vm.form.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "email" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "phone" } }, [
                              _vm._v(" Phone")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.phone,
                                  expression: "form.phone"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("phone")
                              },
                              attrs: {
                                autofocus: "",
                                name: "phone",
                                placeholder: "+88 01xxxxxxxxx ",
                                type: "text"
                              },
                              domProps: { value: _vm.form.phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "phone",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "phone" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Applying For ")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.subject,
                                  expression: "form.subject"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("subject")
                              },
                              attrs: {
                                placeholder: "applying for  the post of.......",
                                autofocus: "",
                                type: "text"
                              },
                              domProps: { value: _vm.form.subject },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "subject",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "subject" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Write Cover Letter")
                            ]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.message,
                                  expression: "form.message"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("message")
                              },
                              attrs: {
                                autofocus: "",
                                placeholder:
                                  "write cover letter and describe yourself",
                                rows: "5"
                              },
                              domProps: { value: _vm.form.message },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "message",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "message" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("CV/Resume file (doc, pdf)")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("file")
                              },
                              attrs: { type: "file", name: "file" },
                              on: { change: _vm.uploadFile }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "file" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btnSubmit btn-lg",
                            attrs: { disabled: _vm.form.busy, type: "submit" }
                          },
                          [
                            _vm.form.busy
                              ? _c("i", { staticClass: "fa fa-spiner" })
                              : _vm._e(),
                            _vm._v("Send")
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("frontend-footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", {
        staticClass: "fa fa-lg fa-map-marker",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v("\n              Mirpur-10,Dhaka\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4 col-lg-4 col-sm-4" }, [
      _c(
        "div",
        { staticClass: "job_info", staticStyle: { "margin-top": "20px" } },
        [
          _c("h4", { staticClass: "heading" }, [_vm._v("Apply Now!")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n              We are really excited that you are trying to apply to us. But\n              sincerely, we are looking for you. Let’s talk, let’s collaborate\n              for something new, something exciting!\n            "
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/carrier/CarrierDetails.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/public/carrier/CarrierDetails.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarrierDetails_vue_vue_type_template_id_751b04ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarrierDetails.vue?vue&type=template&id=751b04ec& */ "./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=template&id=751b04ec&");
/* harmony import */ var _CarrierDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarrierDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CarrierDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarrierDetails.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CarrierDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarrierDetails_vue_vue_type_template_id_751b04ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarrierDetails_vue_vue_type_template_id_751b04ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/carrier/CarrierDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierDetails.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=template&id=751b04ec&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=template&id=751b04ec& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_template_id_751b04ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarrierDetails.vue?vue&type=template&id=751b04ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/carrier/CarrierDetails.vue?vue&type=template&id=751b04ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_template_id_751b04ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarrierDetails_vue_vue_type_template_id_751b04ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);