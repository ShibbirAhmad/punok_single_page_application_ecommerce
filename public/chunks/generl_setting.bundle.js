(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1109:function(t,e,i){"use strict";i.r(e);var o=i(2),a=i.n(o),r=i(0),s=i(15),n=i.n(s);a.a.component(r.HasError.name,r.HasError);var l={name:"subCategory",created:function(){this.getGeneralSetting()},data:function(){return{form:new r.Form({id:"",logo:"",icon:"",title:"",invoice_address_details:"",header_contact_number:""}),editor:n.a,editorConfig:{},error:"",loading:!0,disabled:!1,logo_width:155,logo_height:60,ilogo_size:550,logo_size_text:"Image size must be 150*40px",icon_width:32,icon_height:32,icono_size:550,icon_size_text:"Image size must be 32*32px",base_url:this.$store.state.image_base_link,preview_logo:this.$store.state.image_base_link+"images/no_image.jpg",preview_icon:this.$store.state.image_base_link+"images/no_image.jpg"}},methods:{getGeneralSetting:function(){var t=this;axios.get("/api/get/site/info").then((function(e){console.log(e),"OK"==e.data.status&&(t.form.id=e.data.setting.id,t.form.title=e.data.setting.title,t.form.logo=e.data.setting.logo,t.form.icon=e.data.setting.icon,t.form.wallet_point_value=e.data.setting.wallet_point_value,t.form.header_contact_number=e.data.setting.header_contact_number,t.form.invoice_address_details=e.data.setting.invoice_address_details,t.form.logo&&(t.preview_logo=t.base_url+t.form.logo),t.form.icon&&(t.preview_icon=t.base_url+t.form.icon))}))},updateGeneralSetting:function(){var t=this;this.form.post("/api/edit/site/info/"+this.form.id,{transformRequest:[function(t,e){return objectToFormData(t)}]}).then((function(e){console.log(e),"SUCCESS"==e.data.status?(t.$toasted.show(e.data.message,{type:"success",position:"top-center",duration:4e3}),t.getGeneralSetting()):t.error="some thing want to wrong"})).catch((function(e){t.error=e.response.data.errors,t.$toasted.show("some thing want to wrong",{type:"error",position:"top-center",duration:5e3})}))},uploadLogo:function(t){var e=this,i=t.target.files[0];if(i.type.match("image.*"))if(i.size/1024>this.logo_size)Swal.fire({type:"warning",text:"File size can not be bigger then ".concat(this.logo_size,"KB. maximum file size is 500k KB")});else{var o=new FileReader;o.readAsDataURL(i),o.onload=function(t){var o=new Image;o.onload=function(){return console.log(o.width,o.height),o.width==e.logo_width&&o.height==e.logo_height?void e.setLogo(i,t):(e.disabled=!0,void Swal.fire({type:"error",text:"Image size need "+e.logo_width+"*"+e.logo_height+"px. But Upload imaze size "+o.width+"*"+o.height+"px"}))},o.src=t.target.result}}else Swal.fire({type:"warning",text:"this is not any kind of image"})},setLogo:function(t,e){this.disabled=!1,this.form.logo=t,this.preview_logo=e.target.result},uploadIcon:function(t){var e=this,i=t.target.files[0];if(i.type.match("image.*"))if(i.size/1024>this.logo_size)Swal.fire({type:"warning",text:"File size can not be bigger then ".concat(this.logo_size,"KB. maximum file size is 500k KB")});else{var o=new FileReader;o.readAsDataURL(i),o.onload=function(t){var o=new Image;o.onload=function(){return console.log(o.width,o.height),o.width==e.icon_width&&o.height==e.icon_height?void e.setIcon(i,t):(e.disabled=!0,void Swal.fire({type:"error",text:"Image size need "+e.icon_width+"*"+e.icon_height+"px. But Upload imaze size "+o.width+"*"+o.height+"px"}))},o.src=t.target.result}}else Swal.fire({type:"warning",text:"this is not any kind of image"})},setIcon:function(t,e){this.disabled=!1,this.form.icon=t,this.preview_icon=e.target.result},clickImage:function(){document.getElementById("uploadLogo").click()},clickFavicon:function(){document.getElementById("upload_icon").click()}}},c=(i(749),i(1)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("admin-main"),t._v(" "),i("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),i("section",{staticClass:"content"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-8 col-lg-offset-2"},[i("div",{staticClass:"box box-primary"},[t._m(1),t._v(" "),i("div",{staticClass:"box-body"},[t.error?i("div",{staticClass:"alert-danger alert"},[t._v(t._s(t.error))]):t._e(),t._v(" "),i("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateGeneralSetting(e)},keydown:function(e){return t.form.onKeydown(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12"},[i("div",{staticClass:"form-group"},[i("label",[t._v(" Title ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("header_contact_number")},attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"header_contact_number"}})],1),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v(" Upload Favicon ")]),t._v(" "),i("img",{attrs:{id:"preview_icon",src:t.preview_icon},on:{click:t.clickFavicon}}),t._v(" "),i("input",{attrs:{id:"upload_icon",type:"file",name:"icon"},on:{change:t.uploadIcon}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"logo"}},[t._v("Upload Logo")]),t._v(" "),i("img",{attrs:{id:"preview_logo",src:t.preview_logo},on:{click:t.clickImage}}),t._v(" "),i("input",{staticClass:"form-control",attrs:{id:"uploadLogo",type:"file",name:"logo"},on:{change:t.uploadLogo}})]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v(" Header Contact Number ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.header_contact_number,expression:"form.header_contact_number"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("header_contact_number")},attrs:{type:"text"},domProps:{value:t.form.header_contact_number},on:{input:function(e){e.target.composing||t.$set(t.form,"header_contact_number",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"header_contact_number"}})],1)]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[t._m(2),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.wallet_point_value,expression:"form.wallet_point_value"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("wallet_point_value")},attrs:{type:"text"},domProps:{value:t.form.wallet_point_value},on:{input:function(e){e.target.composing||t.$set(t.form,"wallet_point_value",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"wallet_point_value"}})],1)])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"invoice"}},[t._v("Invoice Address Details ")]),t._v(" "),i("ckeditor",{class:{"is-invalid":t.form.errors.has("invoice_address_details")},attrs:{editor:t.editor,name:"invoice_address_details",config:t.editorConfig},model:{value:t.form.invoice_address_details,callback:function(e){t.$set(t.form,"invoice_address_details",e)},expression:"form.invoice_address_details"}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"invoice_address_details"}})],1)])]),t._v(" "),i("div",{staticClass:"form-group text-center"},[i("button",{staticClass:"btn btn-primary ",attrs:{disabled:t.form.busy||t.disabled,type:"submit"}},[t.form.busy?i("i",{staticClass:"fa fa-spin fa-spinner"}):t._e(),t._v("Submit\n                ")])])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content-header"},[e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-dashboard"}),this._v("Dashboard\n          ")])]),this._v(" "),e("li",{staticClass:"active"},[this._v("General Setting")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-header text-center with-border"},[e("h3",{staticClass:"box-title "},[this._v("\n                General Information\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v(" wallet point value "),e("small",[this._v(" ex: 2 point = 1 Taka")])])}],!1,null,null,null);e.default=d.exports},208:function(t,e,i){var o=i(750);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(4)(o,a);o.locals&&(t.exports=o.locals)},749:function(t,e,i){"use strict";var o=i(208);i.n(o).a},750:function(t,e,i){(t.exports=i(3)(!1)).push([t.i,"\n#uploadLogo {\r\n    display: none;\n}\n#preview_logo {\r\n    border: 1px solid #ddd;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    margin-left:25px;\n}\n#upload_icon {\r\n    display: none;\n}\n#preview_icon {\r\n    padding: 15px;\r\n    cursor: pointer;\r\n    margin-left:50px;\n}\r\n\r\n",""])}}]);