(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1013:function(t,a,s){"use strict";s.r(a);var e;function i(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}var n={created:function(){var t=this;setTimeout((function(){t.dueList()}),100)},data:function(){return{credit_dues:{},loading:!0,current_date:"",item:20,search:"",status:"all",options:{format:"YYYY-MM-DD",useCurrent:!1},start_date:"",end_date:""}},methods:(e={getPaid:function(){},dueList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,axios.get("/api/credit/due?page="+a,{params:{item:this.item}}).then((function(a){t.credit_dues=a.data,t.loading=!1})).catch((function(t){console.log(t)}))},searchCredit:function(){this.search.length>=2?(this.status="search",this.dueList()):(this.status="all",this.dueList())}},i(e,"getPaid",(function(t,a){var s=this;Swal.fire({html:'\n          <label>Amount</label>\n          <input id="amount" value='.concat(this.credit_dues.data[a].amount,' class="swal2-input">\n          <label>Paid By</label>\n          <select id="paid_by" class="swal2-input">\n          <option value="Cash">Cash</option>\n          <option value="Bkash(personal)">Bkash(personal)</option>\n          <option value="Bkash(merchant)">Bkash(merchant)</option>\n          <option value="Bank(AIBL)">Bank(AIBL)</option>\n          <option value="Bank(SIBL)">Bank(SIBL)</option>\n\n          </select>\n          '),showCancelButton:!0}).then((function(e){if(e.value){var i=document.getElementById("amount").value,n=document.getElementById("paid_by").value;i>0&&i.length>0&&n.length>0&&axios.get("/api/due/to/paid/"+t,{params:{paid_by:n,amount:i}}).then((function(t){console.log(t),"SUCCESS"==t.data.status?(Swal.fire({type:"info",text:t.data.message}),1==t.data.due.status?s.credit_dues.data.splice(a,1):(console.log(s.credit_dues.data[a].amount),s.credit_dues.data[a].amount=t.data.due.amount)):Swal.fire({type:"warning",text:t.data})})).catch((function(t){console.log(t)}))}console.log(e)}))})),i(e,"clearAll",(function(){this.$Progress.start(),this.status="all",this.search="",this.start_date="",this.end_date="",this.dueList(),this.$Progress.finish()})),e)},o=(s(597),s(1)),r=Object(o.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("admin-main"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("section",{staticClass:"content-header"},[s("h1",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"creditAdd"}}},[s("i",{staticClass:"fa fa-plus"})]),t._v(" "),s("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"debit"}}},[t._v("Debit")])],1),t._v(" "),t._m(0)]),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-11"},[s("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),s("div",{staticClass:"box-body"},[s("table",{staticClass:"table"},[t._m(2),t._v(" "),s("tbody",[t.loading?s("h1",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.credit_dues.data,(function(a,e){return s("tr",{key:e},[s("td",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),t._v(" "),s("td",[t._v(t._s(a.created_at))]),t._v(" "),s("td",[t._v(t._s(a.customer_name))]),t._v(" "),s("td",[t._v(t._s(a.customer_mobile_no))]),t._v(" "),s("td",[s("router-link",{attrs:{to:{name:"ViewSale",params:{id:a.memo_no}}}},[t._v("\n                        \n                        "+t._s("S-")+" "+t._s(a.memo_no?a.memo_no:"")+"\n                        \n                          ")])],1),t._v(" "),s("td",[t._v(t._s(a.amount))]),t._v(" "),s("td",[s("a",{staticClass:"btn btn-sm btn-success",attrs:{id:"paid"},on:{click:function(s){return t.getPaid(a.id,e)}}},[t._v("Get Paid")])])])}))],2)])]),t._v(" "),s("div",{staticClass:"box-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("pagination",{attrs:{data:t.credit_dues},on:{"pagination-change-page":t.dueList}})],1),t._v(" "),s("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[s("p",[t._v("\n                      Showing "),s("strong",[t._v(t._s(t.credit_dues.from))]),t._v(" to\n                      "),s("strong",[t._v(t._s(t.credit_dues.to))]),t._v(" of total\n                      "),s("strong",[t._v(t._s(t.credit_dues.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),a("li",{staticClass:"active"},[this._v("Credit")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("h3",{staticClass:"box-title"},[this._v("Due Table")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",[t._v("Date")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Customer Name")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Mobile No")]),t._v(" "),s("th",[t._v("Memo Number")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,"5d09a1e0",null);a.default=r.exports},132:function(t,a,s){var e=s(598);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(4)(e,i);e.locals&&(t.exports=e.locals)},597:function(t,a,s){"use strict";var e=s(132);s.n(e).a},598:function(t,a,s){(t.exports=s(3)(!1)).push([t.i,"\nlabel[data-v-5d09a1e0] {\r\n  position: absolute;\r\n  text-align: left;\r\n  margin-bottom: 0px;\n}\r\n",""])}}]);