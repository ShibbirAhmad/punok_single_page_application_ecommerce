(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1037:function(t,a,e){"use strict";e.r(a);var r=e(2),o=e.n(r),s=e(0);o.a.component(s.HasError.name,s.HasError);var n={name:"Edit",created:function(){var t=this;this.getCourier(),setTimeout((function(){t.loading=!1}),500)},data:function(){return{form:new s.Form({name:"",delivery_charge:""}),loading:!0,error:""}},methods:{getCourier:function(){var t=this;axios.get("/edit/courier/"+this.$route.params.id).then((function(a){"SUCCESS"==a.data.status?t.form.name=a.data.courier.name:t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})})).catch((function(a){console.log(a),t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})}))},update:function(){var t=this;this.form.post("/update/courier/"+this.$route.params.id,{transformRequest:[function(t,a){return objectToFormData(t)}],onUploadProgress:function(t){console.log(t)}}).then((function(a){console.log(a),"SUCCESS"==a.data.status?(t.$router.push({name:"courier"}),t.$toasted.show(a.data.message,{type:"success",position:"top-center",duration:4e3})):t.error="some thing want to wrong"})).catch((function(a){console.log(a),t.error="some thing want to wrong"}))}},computed:{}},i=e(1),c=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"courier"}}},[e("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 col-lg-offset-2"},[e("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),e("div",{staticClass:"box-body"},[t.loading?e("h1",[e("i",{staticClass:"fa fa-spinner fa-spin"})]):e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.update(a)},keydown:function(a){return t.form.onKeydown(a)}}},[t.error?e("div",{staticClass:"alert-danger alert"},[t._v("\n                                    "+t._s(t.error)+"\n                                ")]):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"Ex:sundarban"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?e("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                                ")])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Edit Courier")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[this._v("Edit Courier")])])}],!1,null,null,null);a.default=c.exports}}]);