(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1096:function(t,a,s){"use strict";s.r(a);var i={created:function(){var t=this;setTimeout((function(){t.adminList()}),500)},data:function(){return{admins:{},loading:!0,basePath:this.$store.getters.image_base_link,item:"",search:""}},methods:{adminList:function(){var t=this;axios.get("/list/admin").then((function(a){"SUCCESS"==a.data.status&&(t.admins=a.data.admins,t.loading=!1)})).catch((function(t){console.log(t)}))},searchAdmin:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/search/admin/"+this.search+"?page="+a).then((function(a){console.log(a),"OK"==a.data.status?t.admins=a.data.admins:t.adminList()})).catch()},deActive:function(t){var a=this;Swal.fire({title:"Are you sure?",text:"You won't de-active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(s){s.value?axios.get("/deactive/admin/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.adminList(),a.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):a.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){a.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):a.$toasted.show("OK ! no action here",{position:"top-center",type:"info",duration:3e3})}))},active:function(t){var a=this;Swal.fire({title:"Are you sure?",text:"You won't active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(s){s.value?axios.get("/active/admin/"+t.id).then((function(t){"SUCCESS"==t.data.status?(a.adminList(),a.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):a.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){a.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):a.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))},getPagination:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,axios.get("/list/admin?page="+a).then((function(a){t.loading=!1,t.admins=a.data.admins}))}},computed:{}},e=s(1),n=Object(e.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"adminAdd"}}},[s("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8 col-lg-offset-1"},[s("div",{staticClass:"box box-primary"},[s("div",{staticClass:"box-header with-border"},[s("h3",{staticClass:"box-title"},[t._v("Admin table")]),t._v(" "),s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-md-2",staticStyle:{"margin-left":"10px"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],staticClass:"form-control",attrs:{id:""},on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.item=a.target.multiple?s:s[0]},t.adminList]}},[s("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),s("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),s("option",{attrs:{value:"40"}},[t._v("40")]),t._v(" "),s("option",{attrs:{value:"50"}},[t._v("50")])])]),t._v(" "),s("div",{staticClass:"col-md-5"}),t._v(" "),s("div",{staticClass:"col-md-5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"type  name or email"},domProps:{value:t.search},on:{keyup:t.searchAdmin,input:function(a){a.target.composing||(t.search=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table"},[t._m(1),t._v(" "),s("tbody",[t.loading?s("h1",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.admins.data,(function(a,i){return s("tr",{key:i},[s("td",{attrs:{scope:"row"}},[t._v(t._s(i+1))]),t._v(" "),s("td",[t._v(t._s(a.name))]),t._v(" "),s("td",[t._v(t._s(a.email))]),t._v(" "),s("td",[a.image?s("img",{staticClass:"img-circle small-image",attrs:{src:t.basePath+a.image,alt:"admin Image"}}):s("img",{staticClass:"img-circle small-image",attrs:{src:t.basePath+"images/static/noimage.png",alt:"admin Image"}})]),t._v(" "),s("td",[1==a.status?s("span",{staticClass:"badge"},[t._v("Active")]):s("span",{staticClass:"badge text-bold"},[t._v("De-Active")])]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-success btn-sm",attrs:{to:{name:"editAdmin",params:{adminId:a.id}}}},[s("i",{staticClass:"fa fa-edit"})]),t._v(" "),1==a.status?s("a",{staticClass:"btn btn-warning btn-sm",attrs:{title:"De-active"},on:{click:function(s){return t.deActive(a)}}},[s("i",{staticClass:"fa fa-ban"})]):s("a",{staticClass:"btn btn-primary btn-sm",attrs:{title:"active"},on:{click:function(s){return t.active(a)}}},[s("i",{staticClass:"fa fa-check"})]),t._v(" "),1==a.status?s("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"AssignRoleAdmin",params:{id:a.id}},title:"Assign Role"}},[t._v("Role")]):t._e(),t._v(" "),s("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:{name:"assign_admin_permission",params:{id:a.id}}}},[t._v("Permissions\n                        ")])],1)])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("pagination",{attrs:{data:t.admins},on:{"pagination-change-page":t.getPagination}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing "),s("strong",[t._v(t._s(t.admins.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.admins.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.admins.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Admin")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Email")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Image")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"4f651a80",null);a.default=n.exports}}]);