(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1085:function(t,e,o){"use strict";o.r(e);var a=o(2),r=o.n(a),s=o(0),i=o(13),n=o.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.component(s.HasError.name,s.HasError);var l={name:"Add",data:function(){return{form:new s.Form({type:1,name:"",mobile_no:"",address:"",products:[],exchanage_products:[],AmountTotal:0,paid:0,due:0,discount:0,company_id:"",paid_by:"Cash",invoice_no:"",partials_paid_by:"",partials_payment_amount:0,sale_total:0,exchange_total:0}),paid_by_options:["Cash","Bkash(personal)","Bkash(merchant)","Bank"],companies:"",error:"",productItems:[],automcomplete:!1,search:"",validationPreview:!0,submitValidation:!0,preview_products:{product_name:"",product_id:"",product_code:"",price:"",quantity:"",total:"",alert_quantity:"",stock:""},add_to_exchnage:1}},methods:{add:function(){var t=this;this.$Progress.start(),this.form.post("/sale/exchange/store").then((function(e){console.log(e),t.$Progress.finish(),console.log(e),"SUCCESS"==e.data.status?(console.log(e),1==t.form.type?t.$router.push({name:"officeSale"}):t.$router.push({name:"compnaySale"}),t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="do not saved data. please try again"})).catch((function(e){t.$Progress.finish(),console.log(e),t.error="some thing want to wrong"}))},autocompleteSearh:function(){var t=this,e=this.search.length;this.validation(),e>=4?(axios.get("/search/single/product/"+this.search).then((function(e){if(console.log(e),e.data.product){var o=e.data.product;if(o.stock<=0&&1==t.add_to_exchnage)return void t.$toasted.show("".concat(o.name,"-").concat(o.product_code,"-Stock Out"),{type:"error",position:"top-center",duration:4e3});t.preview_products.product_name=o.name,t.preview_products.product_id=o.id,t.preview_products.product_code=o.product_code,t.preview_products.stock=o.stock,t.preview_products.price=o.price,t.preview_products.quantity=1,t.preview_products.total=parseInt(o.price)*parseInt(1),document.getElementById("product_quanitty").focus(),t.search=o.product_code+"-"+o.name,t.validationPreview=!1}else t.$toasted.show("".concat(t.search,"-Not Found"),{type:"error",position:"top-center",duration:4e3})})).catch((function(t){console.log(t)})),this.automcomplete=!0):this.automcomplete=!1},total:function(){if(parseInt(this.preview_products.quantity)>parseInt(this.preview_products.stock)&&1==this.add_to_exchnage&&(this.$toasted.show("product max quantity ".concat(this.preview_products.stock),{type:"error",position:"top-center",duration:3e3}),this.preview_products.quantity=this.preview_products.stock),this.preview_products.price.length<=0)return this.$toasted.show("sorry! price filed fille up first",{type:"error",position:"top-center",duration:3e3}),this.$refs.price.focus(),void this.validation();var t=this.preview_products.price,e=this.preview_products.quantity;e<=1&&(e=1);var o=parseInt(t)*parseInt(e);this.preview_products.total=parseInt(o),this.validation()},productAdd:function(){this.totalAmount(),this.form.products.length<=0&&2==this.add_to_exchnage?this.$toasted.show("First add sale amount",{type:"error",position:"top-center",duration:4e3}):(1==this.add_to_exchnage?this.form.products.push(this.preview_products):this.form.exchanage_products.push(this.preview_products),this.preview_products={product_id:"",product_code:"",product_name:"",price:"",total:"",quantity:"",alert_quantity:"",stock:""},this.search="",this.totalAmount(),this.amountDue(),this.validation(),this.finalValidation())},validation:function(){return this.preview_products.price.length>0&&this.preview_products.quantity.length>0&&this.preview_products.product_id&&this.search.length>0||parseInt(this.preview_products.quantity)<=parseInt(this.preview_products.stock)&&1==this.add_to_exchnage?void(this.validationPreview=!1):void(this.validationPreview=!0)},finalValidation:function(){return this.form.products.length<=0&&this.form.exchanage_products.length<=0&&this.form.sale_total<this.form.exchange_total&&this.form.name.length<=0&&11!=this.form.mobile_no.length&&this.form.address.length<=0?void(this.submitValidation=!0):this.submitValidation=!1},totalAmount:function(){var t=0;this.form.products;this.form.products.length>0&&this.form.products.forEach((function(e){t+=parseInt(e.price)*parseInt(e.quantity)}));var e=0;this.form.exchanage_products.length>0&&this.form.exchanage_products.forEach((function(t){e+=parseInt(t.price)*parseInt(t.quantity)})),this.form.sale_total=parseInt(t),this.form.exchange_total=parseInt(e),this.form.AmountTotal=parseInt(t)-parseInt(e),this.form.due=parseInt(t)-parseInt(e),e>t&&this.$toasted.show("Sale amount low, exchange amount many",{type:"error",position:"top-center",duration:4e3})},amountDue:function(){var t=this.form.paid,e=this.form.AmountTotal,o=parseInt(e)-parseInt(t)-parseInt(this.form.discount);this.form.due=o},cancel:function(t){1==this.add_to_exchnage?this.form.products.splice(t,1):this.form.exchanage_products.splice(t,1),this.totalAmount(),this.amountDue(),this.validation(),this.finalValidation()},pDate:function(){var t=new Date,e=t.getMonth()+1,o=t.getDate(),a=t.getFullYear()+"-"+((""+e).length<2?"0":"")+e+"-"+((""+o).length<2?"0":"")+o;this.purchase_date=a},partialsPayment:function(){var t=this,e={};this.paid_by_options.forEach((function(o){o!=t.form.paid_by&&(e[o]=o)})),Swal.fire({title:"Partials Payment",input:"select",inputOptions:e,showCancelButton:!0}).then((function(e){e.value&&Swal.fire({title:"Amount",input:"number",showCancelButton:!1}).then((function(o){o.value&&(t.$toasted.show("partials payment.".concat(e.value," : ").concat(o.value),{type:"info",position:"top-center",duration:4e3}),t.form.partials_paid_by=e.value,t.form.partials_payment_amount=o.value,console.log(c(o.value)),t.form.paid=parseInt(o.value)+parseInt(t.form.paid),t.form.due=parseInt(t.form.AmountTotal)-parseInt(t.form.paid))}))}))},searchCustomer:function(){var t=this;11==this.form.mobile_no.length&&axios.get("/search/customer/with/phone/number/"+this.form.mobile_no).then((function(e){console.log(e),e.data.customer?(t.form.name=e.data.customer.name,t.form.address=e.data.customer.address,t.$toasted.show("Registered customer",{type:"info",position:"top-center",duration:3e3})):t.$toasted.show("New Customer",{type:"info",position:"top-center",duration:3e3}),t.finalValidation()})).catch((function(t){}))}},computed:{},components:{datePicker:n.a}},d=(o(709),o(1)),p=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("admin-main"),t._v(" "),o("div",{staticClass:"content-wrapper"},[o("section",{staticClass:"content-header"},[o("h1",[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"officeSale"}}},[o("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),o("section",{staticClass:"content"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),o("div",{staticClass:"box-body"},[t.error?o("div",{staticClass:"alert-danger alert"},[t._v(t._s(t.error))]):t._e(),t._v(" "),o("div",{staticClass:"row"},[1==t.form.type?o("div",[o("div",{staticClass:"col-lg-3"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Mobile_no ")]),t._v(" "),o("small",{staticStyle:{float:"right"}},[t._v(t._s(t.form.mobile_no.length)+"/11")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile_no,expression:"form.mobile_no"}],staticClass:"form-control",attrs:{placeholder:"017xx-xxxxxx",autocomplete:"off",type:"text",maxlength:"11",autofocus:""},domProps:{value:t.form.mobile_no},on:{keyup:t.searchCustomer,input:function(e){e.target.composing||t.$set(t.form,"mobile_no",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-lg-3"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{placeholder:"Name"},domProps:{value:t.form.name},on:{keyup:t.finalValidation,input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Address")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",attrs:{placeholder:"address"},domProps:{value:t.form.address},on:{keyup:t.finalValidation,input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}})])])]):o("div",[o("div",{staticClass:"col-lg-5"},[o("label",[t._v("Company")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.company_id,expression:"form.company_id"}],staticClass:"form-control",on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"company_id",e.target.multiple?o:o[0])},t.finalValidation]}},[o("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select Company")]),t._v(" "),t._l(t.companies,(function(e){return o("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                        "+t._s(e.name)+"\n                      ")])}))],2)]),t._v(" "),o("div",{staticClass:"col-lg-5"},[o("label",[t._v("Invoice_no")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.invoice_no,expression:"form.invoice_no"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.invoice_no},on:{keydown:t.finalValidation,input:function(e){e.target.composing||t.$set(t.form,"invoice_no",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"product_information"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-3"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Product_code | Barcode ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{autocomplete:"off",name:"product",placeholder:"type product code"},domProps:{value:t.search},on:{keyup:t.autocompleteSearh,input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-lg-2"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Price")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.preview_products.price,expression:"preview_products.price"}],ref:"price",staticClass:"form-control",attrs:{type:"text",name:"price",autocomplete:"off",placeholder:"price"},domProps:{value:t.preview_products.price},on:{keyup:t.total,input:function(e){e.target.composing||t.$set(t.preview_products,"price",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-lg-2"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Quantity")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.preview_products.quantity,expression:"preview_products.quantity"}],staticClass:"form-control",attrs:{type:"text",name:"quantity",autocomplete:"off",placeholder:"max quantity:"+t.preview_products.stock+" pcs",id:"product_quanitty"},domProps:{value:t.preview_products.quantity},on:{keyup:t.total,input:function(e){e.target.composing||t.$set(t.preview_products,"quantity",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-lg-2"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Total")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.preview_products.total,expression:"preview_products.total"}],staticClass:"form-control",attrs:{type:"text",name:"total",autocomplete:"off",placeholder:"total",readonly:""},domProps:{value:t.preview_products.total},on:{input:function(e){e.target.composing||t.$set(t.preview_products,"total",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-lg-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Add Type")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.add_to_exchnage,expression:"add_to_exchnage"}],staticClass:"form-control",on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.add_to_exchnage=e.target.multiple?o:o[0]},t.validation]}},[o("option",{attrs:{value:"1"}},[t._v("To Sale Product")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("To Exchange Product")])])])]),t._v(" "),o("div",{staticClass:"col-lg-1"},[o("button",{staticClass:"btn btn-success btn-sm",staticStyle:{"margin-top":"25px"},attrs:{disabled:t.validationPreview},on:{click:t.productAdd}},[t._v("\n                      Add\n                    ")])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[t.form.products.length>0?o("div",{staticClass:"product_preview"},[o("h4",{staticClass:"text-uppercase text-center"},[t._v("Sale Product")]),t._v(" "),o("table",{staticClass:"table"},[t._m(2),t._v(" "),o("tbody",[t._l(t.form.products,(function(e,a){return o("tr",[o("td",[t._v(t._s(a+1))]),t._v(" "),o("td",[t._v("\n                            "+t._s(e.product_code+"-"+e.product_name)+"\n                          ")]),t._v(" "),o("td",[t._v(t._s(e.price))]),t._v(" "),o("td",[t._v(t._s(e.quantity))]),t._v(" "),o("td",[t._v(t._s(e.total))]),t._v(" "),o("td",{staticClass:"text-danger",on:{click:function(e){return t.cancel(a)}}},[o("i",{staticClass:"fa fa-trash"})])])})),t._v(" "),o("tr",[o("td",{attrs:{colspan:"3"}}),t._v(" "),o("td",[t._v("Total Amount")]),t._v(" "),o("td",[t._v(t._s(this.form.sale_total))])])],2)])]):t._e()]),t._v(" "),o("div",{staticClass:"col-lg-6"},[t.form.exchanage_products.length>0?o("div",{staticClass:"product_preview"},[o("h4",{staticClass:"text-uppercase text-center"},[t._v("Exchange Product")]),t._v(" "),o("table",{staticClass:"table"},[t._m(3),t._v(" "),o("tbody",[t._l(t.form.exchanage_products,(function(e,a){return o("tr",{key:a},[o("td",[t._v(t._s(a+1))]),t._v(" "),o("td",[t._v("\n                            "+t._s(e.product_code+"-"+e.product_name)+"\n                          ")]),t._v(" "),o("td",[t._v(t._s(e.price))]),t._v(" "),o("td",[t._v(t._s(e.quantity))]),t._v(" "),o("td",[t._v(t._s(e.total))]),t._v(" "),o("td",{staticClass:"text-danger",on:{click:function(e){return t.cancel(a)}}},[o("i",{staticClass:"fa fa-trash"})])])})),t._v(" "),o("tr",[o("td",{attrs:{colspan:"3"}}),t._v(" "),o("td",[t._v("Total Amount")]),t._v(" "),o("td",[t._v(t._s(this.form.exchange_total))])])],2)])]):t._e()])]),t._v(" "),t.form.products.length>0||t.form.exchanage_products.length>0?o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("table",[o("tr",[o("td",{attrs:{colspan:"3"}},[t._v("Sale Amount")]),t._v(" "),o("td",{attrs:{colspan:"3"}}),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sale_total,expression:"form.sale_total"}],staticClass:"form-control",attrs:{readonly:"",placeholder:"Paid"},domProps:{value:t.form.sale_total},on:{input:function(e){e.target.composing||t.$set(t.form,"sale_total",e.target.value)}}})])]),t._v(" "),o("tr",[o("td",{attrs:{colspan:"3"}},[t._v("Exchange Amount")]),t._v(" "),o("td",{attrs:{colspan:"3"}}),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.exchange_total,expression:"form.exchange_total"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Paid"},domProps:{value:t.form.exchange_total},on:{input:function(e){e.target.composing||t.$set(t.form,"exchange_total",e.target.value)}}})])]),t._v(" "),o("tr",[o("td",{attrs:{colspan:"3"}},[t._v("Total")]),t._v(" "),o("td",{attrs:{colspan:"3"}}),t._v(" "),o("td",[o("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.form.AmountTotal}})])]),t._v(" "),o("tr",[o("td",{attrs:{colspan:"3"}},[t._v("Discount")]),t._v(" "),o("td",{attrs:{colspan:"3"}}),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discount,expression:"form.discount"}],staticClass:"form-control",attrs:{placeholder:"paid"},domProps:{value:t.form.discount},on:{keyup:t.amountDue,input:function(e){e.target.composing||t.$set(t.form,"discount",e.target.value)}}})])]),t._v(" "),o("tr",[o("td",{attrs:{colspan:"3"}},[t._v("Paid")]),t._v(" "),o("td",{attrs:{colspan:"3"}}),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.paid,expression:"form.paid"}],staticClass:"form-control",attrs:{placeholder:"Paid"},domProps:{value:t.form.paid},on:{keyup:t.amountDue,input:function(e){e.target.composing||t.$set(t.form,"paid",e.target.value)}}})])]),t._v(" "),o("tr",[o("td",{attrs:{colspan:"3"}},[t._v("Paid_by")]),t._v(" "),o("td",{attrs:{colspan:"3"}}),t._v(" "),o("td",{staticStyle:{display:"flex"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.paid_by,expression:"form.paid_by"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"paid_by",e.target.multiple?o:o[0])}}},t._l(t.paid_by_options,(function(e,a){return o("option",{key:a,domProps:{value:e}},[t._v("\n                            "+t._s(e)+"\n                          ")])})),0)])]),t._v(" "),o("tr",[o("td",{attrs:{colspan:"3"}},[t._v("Amount Due")]),t._v(" "),o("td",{attrs:{colspan:"3"}}),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.due,expression:"form.due"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.form.due},on:{input:function(e){e.target.composing||t.$set(t.form,"due",e.target.value)}}})])])])])]):t._e(),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{disabled:t.submitValidation,type:"submit"},on:{click:function(e){return t.add()}}},[t._v("\n                Submit\n              ")])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("Sale")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[this._v("Add Sale(Exchange)")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("#")]),t._v(" "),o("th",[t._v("Product")]),t._v(" "),o("th",[t._v("price")]),t._v(" "),o("th",[t._v("quantity")]),t._v(" "),o("th",[t._v("total")]),t._v(" "),o("th",[t._v("X")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("#")]),t._v(" "),o("th",[t._v("Product")]),t._v(" "),o("th",[t._v("price")]),t._v(" "),o("th",[t._v("quantity")]),t._v(" "),o("th",[t._v("total")]),t._v(" "),o("th",[t._v("X")])])])}],!1,null,"3735d21a",null);e.default=p.exports},188:function(t,e,o){var a=o(710);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(4)(a,r);a.locals&&(t.exports=a.locals)},709:function(t,e,o){"use strict";var a=o(188);o.n(a).a},710:function(t,e,o){(t.exports=o(3)(!1)).push([t.i,"\n.mb-2[data-v-3735d21a] {\r\n  margin-bottom: 5px !important;\n}\n.autocomplete[data-v-3735d21a] {\r\n  max-height: 120px;\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 454;\n}\n.autocomplete li[data-v-3735d21a]:hover {\r\n  background: #222d32;\r\n  color: #ffffff;\n}\r\n",""])}}]);