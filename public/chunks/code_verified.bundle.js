(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{951:function(t,o,e){"use strict";e.r(o);var s=e(11),a=e.n(s),r=(e(18),e(0)),n={created:function(){},data:function(){return{form:new r.Form({code:""})}},methods:{submit:function(){var t=this;this.form.post("/_public/api/user/password/verify/code/"+this.$route.params.mobile_no).then((function(o){console.log(o),"SUCCESS"==o.data.status?(t.$toasted.show(o.data.message,{type:"success",position:"top-center",duration:2e3}),t.$router.push({name:"NewPasswordUser"})):t.$toasted.show(o.data.message,{type:"error",position:"top-center",duration:3e3})})).catch((function(o){console.log(o),t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:2e3})}))}},components:{Loading:a.a,HasError:r.HasError}},i=e(1),c=Object(i.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"wrapper-wide"},[e("frontend-header"),t._v(" "),e("div",{attrs:{id:"container"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3"}),t._v(" "),e("div",{staticClass:"col-sm-12 col-lg-5",attrs:{id:"content"}},[e("div",{staticClass:"custom-box"},[e("h2",{staticClass:"title"},[t._v("Code Verification")]),t._v(" "),e("form",{on:{submit:function(o){return o.preventDefault(),t.submit(o)}}},[e("div",{staticClass:"form-grop"},[e("label",{staticClass:"control-label",attrs:{for:"input-email"}},[t._v("Code")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("code")},attrs:{type:"text",name:"code",placeholder:"xxxxx",autocomplete:"off",autofocus:""},domProps:{value:t.form.code},on:{input:function(o){o.target.composing||t.$set(t.form,"code",o.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"code"}})],1),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn btn-block btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t.form.busy?e("i",{staticClass:"fa fa-spinner fa-spin"}):t._e(),t._v("Verify\n              ")])])])])])])]),t._v(" "),e("frontend-footer")],1)}),[],!1,null,null,null);o.default=c.exports}}]);