(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1097:function(t,a,e){"use strict";e.r(a);var i=e(2),s=e.n(i),r=e(0);s.a.component(r.HasError.name,r.HasError);var o={name:"Profile",created:function(){var t=this;this.getAdmin(),setTimeout((function(){t.loading=!1}),500)},data:function(){return{form:new r.Form({name:"",email:"",image:"",id:""}),loading:!0,error:"",actionText:"Edit",editMode:!1,file:this.$store.state.image_base_link+"images/static/user2-160x160.jpg"}},methods:{updateProfile:function(){var t=this;console.log("add"),this.form.post("/update/admin/"+this.form.id,{transformRequest:[function(t,a){return objectToFormData(t)}]}).then((function(a){"SUCCESS"==a.data.status&&(t.$toasted.show("Your profile was updated.",{type:"success",position:"top-right",duration:1e3}),t.editMode=!1,t.$router.push({name:"adminLogin"}))})).catch((function(a){console.log(a),t.error="some thing want to wrong"}))},uploadImage:function(t){var a=this,e=t.target.files[0],i=new FileReader;i.readAsDataURL(e),i.onload=function(t){var i=new Image;i.onload=function(){return i.width<360&&i.height<360?(a.form.image=e,void(a.file=t.target.result)):(a.disabled=!0,void alert("Image maximu size 360*360px.But Upload imaze size"+i.width+"*"+i.height+"px"))},i.src=t.target.result}},getAdmin:function(){var t=this;axios.get("/single/admin").then((function(a){t.form.name=a.data.admin.name,t.form.email=a.data.admin.email,t.form.id=a.data.admin.id,null!=a.data.admin.image&&(t.file=t.$store.state.image_base_link+a.data.admin.image)}))},edit:function(){1==this.editMode?this.updateProfile():(this.editMode=!0,this.actionText="Update")}},computed:{}},n=(e(731),e(1)),l=Object(n.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"admin"}}},[e("i",{staticClass:"fa fa-arrow-right"})])],1),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 col-lg-offset-3"},[e("div",{staticClass:"box box-primary"},[e("div",{staticClass:"box-body box-profile"},[e("img",{staticClass:"profile-user-img img-responsive img-circle",attrs:{src:t.file,alt:"User profile picture"}}),t._v(" "),t.form.name?e("h3",{staticClass:"profile-username text-center"},[t._v("\n                "+t._s(t.form.name)+"\n              ")]):e("h3",{staticClass:"profile-username text-center"},[t._v(".......")]),t._v(" "),e("p",{staticClass:"text-muted text-center"},[t._v("Admin")]),t._v(" "),e("ul",{staticClass:"list-group list-group-unbordered"},[e("li",{staticClass:"list-group-item"},[e("b",[t._v("Name")]),t._v(" "),t.editMode?e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1):e("div",[t.form.name?e("a",{staticClass:"pull-right text-bold text-black",staticStyle:{"margin-top":"-18px"}},[t._v(t._s(t.form.name))]):e("a",{staticClass:"pull-right"},[t._v("....")])])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("b",[t._v("Email")]),t._v(" "),t.editMode?e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}}),t._v(" "),e("br"),t._v(" "),e("b",[t._v("Upload Image")]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"file",name:"image"},on:{change:t.uploadImage}})])],1):e("div",[t.form.email?e("a",{staticClass:"pull-right text-bold text-black",staticStyle:{"margin-top":"-18px"}},[t._v(t._s(t.form.email))]):e("a",{staticClass:"pull-right"},[t._v("....")])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{class:t.editMode?"col-lg-8":"col-lg-12"},[e("a",{staticClass:"btn btn-primary btn-block",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.edit(a)}}},[e("b",[t._v(t._s(t.actionText))])])]),t._v(" "),t.editMode?e("div",{staticClass:"col-lg-4"},[e("a",{staticClass:"btn btn-danger btn-block",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.editMode=!1,t.actionText="Edit"}}},[e("b",[t._v("cancel")])])]):t._e()])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard ")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Category")])])}],!1,null,"6e1ec808",null);a.default=l.exports},199:function(t,a,e){var i=e(732);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(4)(i,s);i.locals&&(t.exports=i.locals)},731:function(t,a,e){"use strict";var i=e(199);e.n(i).a},732:function(t,a,e){(t.exports=e(3)(!1)).push([t.i,"\n.mb-2[data-v-6e1ec808] {\r\n  margin-bottom: 5px !important;\n}\n.profile-user-img[data-v-6e1ec808]{\r\n  width:100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  border:2px ;\n}\r\n",""])}}]);