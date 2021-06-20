(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1130:function(t,r,o){"use strict";o.r(r);var a=o(2),e=o.n(a),s=o(0);e.a.component(s.HasError.name,s.HasError);var i={name:"Add",created:function(){this.cDate()},data:function(){return{form:new s.Form({invoice_no:"",product_name:"",company_id:this.$route.params.id,date:"",qty:"",cost_per_qty:""}),loading:!0,error:"",options:{format:"YYYY-MM-DD",useCurrent:!1},loaners:""}},methods:{addPrint:function(){var t=this;this.form.post("/api/add/product/for/print").then((function(r){console.log(r),"OK"==r.data.success?(t.$router.push({name:"print_house_details",params:{id:t.$route.params.id}}),t.$toasted.show(r.data.message,{type:"success",position:"top-right",duration:4e3})):t.error="some thing want to wrong"})).catch((function(r){console.log(r),t.error="some thing want to wrong"}))},cDate:function(){var t=new Date,r=t.getMonth()+1,o=t.getDate(),a=t.getFullYear()+"-"+((""+r).length<2?"0":"")+r+"-"+((""+o).length<2?"0":"")+o;this.form.date=a,this.loading=!1}}},n=(o(785),o(1)),c=Object(n.a)(i,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("admin-main"),t._v(" "),o("div",{staticClass:"content-wrapper"},[o("section",{staticClass:"content-header"},[o("h1",[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"print_house_details",params:{id:t.$route.params.id}}}},[o("i",{staticClass:"fa fa-arrow-left"})])],1),t._v(" "),t._m(0)]),t._v(" "),o("section",{staticClass:"content"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-6 col-lg-offset-2"},[o("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),o("div",{staticClass:"box-body"},[t.loading?o("h1",[o("i",{staticClass:"fa fa-spinner fa-spin"})]):o("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(r){return r.preventDefault(),t.addPrint(r)},keydown:function(r){return t.form.onKeydown(r)}}},[t.error?o("div",{staticClass:"alert-danger alert"},[t._v("\n                  "+t._s(t.error)+"\n                ")]):t._e(),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Date")]),t._v(" "),o("date-picker",{class:{"is-invalid":t.form.errors.has("date")},attrs:{autocomplete:"off",config:t.options},model:{value:t.form.date,callback:function(r){t.$set(t.form,"date",r)},expression:"form.date"}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"date"}})],1)]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",[t._v(" Invoice")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.invoice_no,expression:"form.invoice_no"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("invoice_no")},attrs:{type:"text",name:"invoice_no",placeholder:"invoice no"},domProps:{value:t.form.invoice_no},on:{input:function(r){r.target.composing||t.$set(t.form,"invoice_no",r.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"invoice_no"}})],1)])]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Product Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.product_name,expression:"form.product_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("product_name")},attrs:{type:"text",name:"product_name",placeholder:"Ex: t-shirt"},domProps:{value:t.form.product_name},on:{input:function(r){r.target.composing||t.$set(t.form,"product_name",r.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"product_name"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v(" Quantity ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.qty,expression:"form.qty"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("qty")},attrs:{type:"text",name:"qty",autocomplete:"off",placeholder:"5000"},domProps:{value:t.form.qty},on:{input:function(r){r.target.composing||t.$set(t.form,"qty",r.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"qty"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Cost Per Item ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cost_per_qty,expression:"form.cost_per_qty"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("cost_per_qty")},attrs:{type:"text",name:"cost_per_qty",autocomplete:"off",placeholder:"25"},domProps:{value:t.form.cost_per_qty},on:{input:function(r){r.target.composing||t.$set(t.form,"cost_per_qty",r.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"cost_per_qty"}})],1),t._v(" "),o("div",{staticClass:"form-group text-center"},[o("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?o("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                  ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,r=this._self._c||t;return r("ol",{staticClass:"breadcrumb"},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),r("li",{staticClass:"active"},[this._v("Print")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"box-header with-border text-center"},[r("h3",{staticClass:"box-title"},[this._v("Add Product For Print")])])}],!1,null,"2fb56cf2",null);r.default=c.exports},226:function(t,r,o){var a=o(786);"string"==typeof a&&(a=[[t.i,a,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};o(4)(a,e);a.locals&&(t.exports=a.locals)},785:function(t,r,o){"use strict";var a=o(226);o.n(a).a},786:function(t,r,o){(t.exports=o(3)(!1)).push([t.i,"\n.mb-2[data-v-2fb56cf2] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])}}]);