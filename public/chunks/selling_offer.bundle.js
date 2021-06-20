(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1068:function(t,s,e){"use strict";e.r(s);var i={mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),500),this.sellingOfferList()},data:function(){return{sellingOffer:{},name:"",loading:!0}},methods:{sellingOfferList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get("/selling/offer/list?page="+s).then((function(s){console.log(s),"OK"==s.data.success&&(t.sellingOffer=s.data.sellingOffer)})).catch()},deActive:function(t){var s=this;Swal.fire({title:"Are you sure?",text:"Do you want de-active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(e){e.value?axios.get("/selling/offer/deactive/"+t.id).then((function(t){"OK"==t.data.success?(s.sellingOfferList(),s.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):s.$toasted.show("OK ! no action here",{position:"top-center",type:"info",duration:3e3})}))},active:function(t){var s=this;Swal.fire({title:"Are you sure?",text:"Do you want active this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then((function(e){e.value?axios.get("/selling/offer/active/"+t.id).then((function(t){"OK"==t.data.success?(s.sellingOfferList(),s.$toasted.show(t.data.message,{position:"top-center",type:"success",duration:4e3})):s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})).catch((function(t){s.$toasted.show("some thing want to wrong",{position:"top-center",type:"error",duration:4e3})})):s.$toasted.show("Ok ! no action here",{position:"top-center",type:"info",duration:3e3})}))}}},a=e(1),n=Object(a.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("admin-main"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"content-header"},[e("h1",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"add_selling_offer"}}},[e("i",{staticClass:"fa fa-plus"})])],1),t._v(" "),t._m(0)]),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),e("div",{staticClass:"box-body"},[e("table",{staticClass:"table table-responsive text-center "},[t._m(2),t._v(" "),e("tbody",[t.loading?e("h1",[e("i",{staticClass:"fa fa-spin fa-spinner"})]):t._e(),t._v(" "),t._l(t.sellingOffer.data,(function(s,i){return e("tr",{key:i},[e("td",[t._v(t._s(i))]),t._v(" "),e("td",[t._v(t._s(s.name))]),t._v(" "),e("td",[t._v(t._s(s.order_by))]),t._v(" "),e("td",[1==s.status?e("span",{staticClass:"bage btn-success"},[t._v("Active")]):e("span",{staticClass:"bage btn-warning"},[t._v("De-Active")])]),t._v(" "),e("td",[t._v(t._s(s.expire_date))]),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"edit_selling_offer",params:{id:s.id}}}},[e("i",{staticClass:"fa fa-edit"})]),t._v(" "),0==s.status?e("button",{staticClass:"btn btn-warning ",on:{click:function(e){return t.active(s)}}},[e("i",{staticClass:"fa fa-check"})]):e("button",{staticClass:"btn btn-warning ",on:{click:function(e){return t.deActive(s)}}},[e("i",{staticClass:"fa fa-ban"})])],1)])}))],2)])]),t._v(" "),e("div",{staticClass:"box-footer"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("pagination",{attrs:{data:t.sellingOffer},on:{"pagination-change-page":this.sellingOfferList}})],1),t._v(" "),e("div",{staticClass:"col-lg-6 mt-1",staticStyle:{"margin-top":"25px","text-align":"right"}},[e("p",[t._v("\n                      Showing "),e("strong",[t._v(t._s(t.sellingOffer.from))]),t._v(" to\n                      "),e("strong",[t._v(t._s(t.sellingOffer.to))]),t._v(" of total\n                      "),e("strong",[t._v(t._s(t.sellingOffer.total))]),t._v(" entries\n                    ")])])])])])])])])])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{staticClass:"breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard")])]),this._v(" "),s("li",{staticClass:"active"},[this._v("Selling Offer ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"box-header with-border"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h3",{staticClass:"box-title"},[this._v("Office_sale")])]),this._v(" "),s("div",{staticClass:"col-lg-4"}),this._v(" "),s("div",{staticClass:"col-lg-2"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Order By")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Expire Date")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],!1,null,null,null);s.default=n.exports}}]);