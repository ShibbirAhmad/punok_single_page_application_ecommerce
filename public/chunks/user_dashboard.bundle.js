(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{28:function(t,s,a){"use strict";var e={crated:function(){this.$store.dispatch("user")},data:function(){return{base_url:this.$store.state.image_base_link}},methods:{colorChange:function(){}},computed:{user:function(){return this.$store.getters.user}}},n=(a(470),a(1)),r=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"col-md-2 "},[a("div",{staticClass:"user_sidebar"},[a("ul",{staticClass:"list-group",attrs:{id:"list_group"}},[a("li",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-user customer_icon"}),t._v(" "),a("p",{staticClass:"customer_name"},[t._v(" "+t._s(t.user.name)+" ")])]),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"UserDashboard"}}},[a("i",{staticClass:"fa fa-dashboard "}),t._v(" Dashboard\n                ")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"UserProfile"}}},[a("i",{staticClass:"fa fa-user "}),t._v(" Profile\n                ")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"UserProfileEdit"}}},[a("i",{staticClass:"fa fa-edit "}),t._v(" Edit Profile")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"PasswordEdit"}}},[a("i",{staticClass:"fa fa-key "}),t._v(" Change Password")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"user_new_password_set"}}},[a("i",{staticClass:"fa fa-key "}),t._v(" Set New Password")])],1)])])])])}),[],!1,null,"d0712876",null);s.a=r.exports},470:function(t,s,a){"use strict";var e=a(60);a.n(e).a},471:function(t,s,a){(t.exports=a(3)(!1)).push([t.i,"\n.user_sidebar[data-v-d0712876]{\r\n\r\n    margin-top:25px;\r\n    height: 350px;\r\n    background: #F9DFC0;\n}\n.list-group[data-v-d0712876]{\r\n    padding-top:25px;\n}\nul li a[data-v-d0712876]{\r\n     color: #fff;\r\n    background-color: #dd8a24;\r\n    padding: 10px;\r\n    float: left;\r\n    display: block;\r\n    width: 100%;\r\n    margin-top:5px;\n}\n.router-link-exact-active[data-v-d0712876] {\r\n   background-color: #ff4d0c !important;\n}\ni[data-v-d0712876] {\r\n   font-size:14px;\n}\n.customer_icon[data-v-d0712876]{\r\n   font-size:80px;\n}\n.customer_name[data-v-d0712876]{\r\n   font-size:18px;\r\n   color:#000;\r\n   text-transform: uppercase;\n}\r\n\r\n\r\n",""])},503:function(t,s,a){"use strict";var e=a(85);a.n(e).a},504:function(t,s,a){(t.exports=a(3)(!1)).push([t.i,"\n.user_profile_icon{\n\n    width: 80px; height: 80px\n}\n@media screen  and ( max-width:650) {\n.user_profile_icon {\n\n        width: 50px; height: 50px;\n}\n}\n\n\n",""])},60:function(t,s,a){var e=a(471);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(4)(e,n);e.locals&&(t.exports=e.locals)},85:function(t,s,a){var e=a(504);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(4)(e,n);e.locals&&(t.exports=e.locals)},949:function(t,s,a){"use strict";a.r(s);var e={props:["categories"],created:function(){this.getOrderList(),this.$store.dispatch("user")},data:function(){return{order_lists:{},loading:!0}},methods:{getOrderList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/_public/customer/order/list?page="+s).then((function(s){"SUCCESS"==s.data.status&&(t.order_lists=s.data.orders,t.loading=!1)}))},orderDate:function(t){var s=new Date(t);console.log(s);var a=s.getMonth(),e=s.getDate(),n=s.getFullYear();return"".concat(2==e.toString().length?e:"0"+e,"-").concat(2==a.toString().length?a:"0"+a,"-").concat(n)}},computed:{user:function(){return this.$store.getters.user}},components:{sidebar:a(28).a}},n=(a(503),a(1)),r=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrapper-wide"},[a("frontend-header"),t._v(" "),a("div",{attrs:{id:"container"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row",staticStyle:{"min-height":"400px"}},[a("sidebar"),t._v(" "),a("div",{staticClass:"col-md-10 col-sm-10"},[a("h4",{staticClass:"heading"}),t._v(" "),a("br"),t._v(" "),a("table",{staticClass:"table table-hover table-bordered table-striped"},[t._m(0),t._v(" "),a("tbody",{staticClass:"table-responsive "},[t.loading?a("h1",[a("i",{staticClass:"fa fa-spin fa-spinner"})]):t._l(t.order_lists.data,(function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(e+1))]),t._v(" "),a("td",[t._v(" "+t._s(s.invoice_no))]),t._v(" "),a("td",{staticClass:"text-left"},[t._v("\n                    "+t._s(parseInt(s.total)-(parseInt(s.discount)+parseInt(s.paid))+parseInt(s.shipping_cost))+"\n                  ")]),t._v(" "),a("td",[a("span",{staticClass:"badge badge-success "},[t._v(" "+t._s(s.discount)+" ")])]),t._v(" "),a("td",[1==s.status?a("span",{staticClass:"badge badge-info "},[t._v("New")]):t._e(),t._v(" "),2==s.status?a("span",{staticClass:"badge badge-warning"},[t._v("Pending")]):t._e(),t._v(" "),3==s.status?a("span",{staticClass:"badge badge-success"},[t._v("Approved")]):t._e(),t._v(" "),4==s.status?a("span",{staticClass:"badge badge-success"},[t._v("Shipment")]):t._e(),t._v(" "),5==s.status?a("span",{staticClass:"badge badge-success"},[t._v("Delivered")]):t._e(),t._v(" "),6==s.status?a("span",{staticClass:"badge badge-danger"},[t._v("Cancel")]):t._e(),t._v(" "),7==s.status?a("span",{staticClass:"badge badge-danger"},[t._v("Return")]):t._e()]),t._v(" "),a("td",[t._v(t._s(s.created_at))]),t._v(" "),a("td",[a("router-link",{staticClass:"btn btn-info btn-sm",attrs:{to:{name:"order_details",params:{id:s.id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)])}))],2)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("pagination",{attrs:{data:t.order_lists},on:{"pagination-change-page":t.getOrderList}})],1),t._v(" "),a("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[a("p",[t._v("\n                  Showing\n                  "),a("strong",[t._v(t._s(t.order_lists.from))]),t._v(" to\n                  "),a("strong",[t._v(t._s(t.order_lists.to))]),t._v(" of total\n                  "),a("strong",[t._v(t._s(t.order_lists.total))]),t._v(" entries\n                ")])])])])],1)]),t._v(" "),a("frontend-footer")],1)],1)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("td",[t._v("#")]),t._v(" "),a("td",[t._v("Invoice_no")]),t._v(" "),a("td",[t._v("Amount")]),t._v(" "),a("td",[t._v("Discount")]),t._v(" "),a("td",[t._v("Status")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td",[t._v(" Action ")])])])}],!1,null,null,null);s.default=r.exports}}]);