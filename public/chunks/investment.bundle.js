(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1123:function(t,s,a){"use strict";a.r(s);var e={created:function(){this.getinvestments()},data:function(){return{investment:{},loading:!0,basePath:this.$store.getters.image_base_link,item:"",search:"",total_investment:"",total_profit_paid:"",total_due_amount:0}},methods:{getinvestments:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/api/company/investor?page="+s).then((function(s){console.log(s),"OK"==s.data.success&&(t.investment=s.data.investment,t.total_investment=s.data.total_investment,t.total_profit_paid=s.data.total_profit_paid,t.loading=!1)})).catch((function(t){console.log(t)}))},totalAmount:function(t){return Object.keys(t).forEach((function(t){console.log(t)})),0}},computed:{}},n=(a(771),a(1)),i=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("admin-main"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"investment_add"}}},[a("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-10 col-lg-offset-1"},[a("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"row total_row"},[t._m(2),t._v(" "),a("div",{staticClass:"col-md-2"}),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h4",[t._v(" Total Investment : "),a("b",{staticClass:"total_style",staticStyle:{color:"green"}},[t._v(" "+t._s(t.total_investment)+" ")])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h4",[t._v(" Total Profit Paid : "),a("b",{staticClass:"total_style",staticStyle:{color:"green"}},[t._v(" "+t._s(t.total_profit_paid))])])])]),t._v(" "),a("table",{staticClass:"table text-center table-striped "},[t._m(3),t._v(" "),a("tbody",[t.loading?a("h1",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.investment.data,(function(s,e){return a("tr",{key:e},[a("td",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"investor_details",params:{id:s.id}}}},[t._v(t._s(s.name)+"\n                        ")])],1),t._v(" "),a("td",[t._v(t._s(s.referance_name))]),t._v(" "),a("td",[t._v(t._s(s.mobile_no))]),t._v(" "),a("td",[t._v(t._s(s.address))]),t._v(" "),a("td",[t._v(t._s(s.invest_amount))]),t._v(" "),a("td",[t._v(t._s(s.profit_margin))]),t._v(" "),a("td",[t._v(t._s(s.profit_paid_amount))])])}))],2)])]),t._v(" "),a("div",{staticClass:"box-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("pagination",{attrs:{data:t.investment},on:{"pagination-change-page":t.getinvestments}})],1),t._v(" "),a("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[a("p",[t._v("\n                      Showing "),a("strong",[t._v(t._s(t.investment.from))]),t._v(" to\n                      "),a("strong",[t._v(t._s(t.investment.to))]),t._v(" of total\n                      "),a("strong",[t._v(t._s(t.investment.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("Investors")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-header with-border text-center"},[s("h3",{staticClass:"box-title heading"},[this._v("Investment Table")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-md-2"},[s("a",{staticClass:"btn btn-success",attrs:{href:"/api/download/all/investment/pdf",target:"_blank"}},[s("i",{staticClass:"fa fa-download"}),this._v(" Export PDF ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Referance Name")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Mobile Number")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Address")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Invested Amount")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Profit Margin")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Profit Paid Amount")])])])}],!1,null,"6363d3ba",null);s.default=i.exports},219:function(t,s,a){var e=a(772);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(4)(e,n);e.locals&&(t.exports=e.locals)},771:function(t,s,a){"use strict";var e=a(219);a.n(e).a},772:function(t,s,a){(t.exports=a(3)(!1)).push([t.i,"\n.box-primary[data-v-6363d3ba] {\r\n  margin-left: -100px;\r\n  overflow-x: scroll;\n}\n.total_style[data-v-6363d3ba] {\r\n  border: 2px solid #ddd;\r\n  padding: 4px 25px;\n}\n.total_row[data-v-6363d3ba] {\r\n  padding-bottom: 20px;\n}\r\n",""])}}]);