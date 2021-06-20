(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{102:function(t,a,e){var s=e(538);"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(4)(s,r);s.locals&&(t.exports=s.locals)},24:function(t,a,e){"use strict";var s={created:function(){this.$store.dispatch("merchant"),this.$store.dispatch("general_setting")},data:function(){return{merchant:{},base_url:this.$store.state.image_base_link}},methods:{logout:function(){var t=this;axios.get("/api/merchant/logout").then((function(a){console.log(a),"OK"==a.data.status&&(localStorage.removeItem("merchant_token"),t.$store.commit("merchant",null),t.$router.push({name:"merchant_login"}),t.$toasted.show("Logout successfully ! login again to come back .",{type:"error",position:"top-center",duration:1e4}))})).catch()}},computed:{getMerchant:function(){return this.$store.getters.merchant},general_setting:function(){return this.$store.getters.general_setting}}},r=e(1),o=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("header",{staticClass:"main-header"},[e("a",{staticClass:"logo",attrs:{href:""}},[t._m(0),t._v(" "),e("span",{staticClass:"logo-lg"},[e("b",[t._v(t._s(t.general_setting.title))])])]),t._v(" "),e("nav",{staticClass:"navbar navbar-static-top"},[t._m(1),t._v(" "),e("div",{staticClass:"navbar-custom-menu"},[e("ul",{staticClass:"nav navbar-nav"},[e("li",{staticClass:"dropdown user user-menu"},[e("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[e("img",{staticClass:"user-image",attrs:{src:t.base_url+t.getMerchant.image}}),t._v(" "),e("span",{staticClass:"hidden-xs"},[t._v(t._s(t.getMerchant.name))])]),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",{staticClass:"user-header"},[e("img",{staticClass:"img-circle",attrs:{src:t.base_url+t.getMerchant.image,alt:"User Image"}}),t._v(" "),e("p",[t._v("\n                "+t._s(t.getMerchant.name)+" - Merchant\n                "),e("small",[t._v("Member since "+t._s(t.getMerchant.created_at))])])]),t._v(" "),e("li",{staticClass:"user-footer"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_profile"}}},[t._v(" profile ")])],1),t._v(" "),e("div",{staticClass:"col-md-6"},[e("router-link",{staticClass:"btn btn-primary ",attrs:{to:{name:"merchant_password_edit"}}},[t._v("change password")])],1),t._v(" "),e("div",{staticClass:"col-md-3"},[e("a",{staticClass:"btn btn-danger ",on:{click:t.logout}},[t._v(" logout ")])])])])])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"logo-mini"},[a("b",[this._v("A")]),this._v("LT")])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"sidebar-toggle",attrs:{href:"#","data-toggle":"push-menu",role:"button"}},[a("span",{staticClass:"sr-only"},[this._v("Toggle navigation")])])}],!1,null,null,null);a.a=o.exports},537:function(t,a,e){"use strict";var s=e(102);e.n(s).a},538:function(t,a,e){(t.exports=e(3)(!1)).push([t.i,"\n.mb-2[data-v-370aa922] {\r\n  margin-bottom: 5px !important;\n}\r\n",""])},971:function(t,a,e){"use strict";e.r(a);var s=e(2),r=e.n(s),o=e(0),n=e(24);r.a.component(o.HasError.name,o.HasError);var i={created:function(){var t=this;setTimeout((function(){t.loading=!1}),500),this.getmerchant()},data:function(){return{form:new o.Form({name:"",email:"",phone:"",company_name:"",address:"",image:""}),base_url:this.$store.state.image_base_link,loading:!0,errors:[],preview_image:""}},methods:{getmerchant:function(){var t=this;axios.get("/api/get/single/merchant").then((function(a){"OK"==a.data.status&&(t.form.name=a.data.merchant.name,t.form.email=a.data.merchant.email,t.form.phone=a.data.merchant.phone,t.form.company_name=a.data.merchant.company_name,t.form.address=a.data.merchant.address,t.form.image=a.data.merchant.image)}))},uploadImage:function(t){var a=this,e=t.target.files[0],s=new FileReader;s.readAsDataURL(e),s.onload=function(t){var s=new Image;s.onload=function(){console.log(s.width+"-"+s.height)},s.src=t.target.result,a.preview_image=t.target.result,a.form.image=e}}},computed:{},components:{navbar:n.a}},m=(e(537),e(1)),l=Object(m.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("navbar"),t._v(" "),e("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 col-lg-offset-2"},[e("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),e("div",{staticClass:"box-body"},[t.loading?e("h1",[e("i",{staticClass:"fa fa-spinner fa-spin"})]):e("form",{attrs:{enctype:"multipart/form-data"},on:{keydown:function(a){return t.form.onKeydown(a)}}},[t.errors?e("ul",{staticClass:"list-group"},t._l(t.errors,(function(a,s){return e("li",{key:s,staticClass:"list-group-item"},[t._v("\n                    "+t._s(a.name)+"\n                  ")])})),0):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",autofocus:"",autocomplete:"off",placeholder:"name"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email",autofocus:"",autocomplete:"off",placeholder:"email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phone"}},[t._v("Phone")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone")},attrs:{type:"text",autocomplete:"off",autofocus:"",name:"phone",id:""},domProps:{value:t.form.phone},on:{input:function(a){a.target.composing||t.$set(t.form,"phone",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"phone"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"company_name"}},[t._v("Compnay Name ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company_name,expression:"form.company_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("company_name")},attrs:{type:"text",autocomplete:"off",autofocus:"",name:"company_name"},domProps:{value:t.form.company_name},on:{input:function(a){a.target.composing||t.$set(t.form,"company_name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"company_name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[t._v("Address")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{placeholder:"write title about this merchant",name:"address",rows:"3"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"address"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[t.form.image?e("img",{staticClass:"image-responsive",staticStyle:{width:"250px",height:"250px","margin-left":"100px"},attrs:{src:this.base_url+t.form.image}}):e("img",{staticClass:"image-responsive",staticStyle:{width:"250px",height:"250px","margin-left":"100px"},attrs:{src:this.base_url+"images/noimage.png"}})]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"text-center"},[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"merchant_dashboard"}}},[t._v("Go Back")])],1)])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"content-header"},[a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Merchant")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Profile")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border text-center"},[a("h3",{staticClass:"box-title"},[this._v("Your Information")])])}],!1,null,"370aa922",null);a.default=l.exports}}]);