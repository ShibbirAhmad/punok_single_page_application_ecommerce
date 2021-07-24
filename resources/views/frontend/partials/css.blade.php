<!-- CSS Part Start-->
<link rel="stylesheet" type="text/css" href="{{asset('frontend/js/bootstrap/css/bootstrap.min.css')}}" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="{{asset('frontend/css/stylesheet.css')}}" />
{{-- <link rel="stylesheet" type="text/css" href="{{asset('frontend/css/owl.carousel.css')}}" /> --}}
<link rel="stylesheet" type="text/css" href="{{asset('frontend/css/owl.transitions.css')}}"/>
<link rel="stylesheet" type="text/css" href="{{asset('frontend/css/responsive.css')}}"/>
<link rel="stylesheet" type="text/css" href="{{asset('frontend/css/stylesheet-skin3.css')}}"/>
<link href='https://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="{{asset('frontend/css/scrol.css')}}"/>
<link rel="stylesheet" href="{{ asset('admin/css/sweetalert2.css') }}">
{{-- <link rel="stylesheet" type="text/css" href="{{asset('frontend/css/customize.css')}}"/> --}}
<link rel="stylesheet" type="text/css" href="{{asset('frontend/css/header.css')}}"/>


{{-- <script type="text/javascript" src="{{asset('frontend/js/jquery-2.1.1.min.js')}}"></script> --}}
<script src="{{asset('admin/js/objectToFormData.js')}}"></script>


{{-- <script type="text/javascript" src="{{asset('frontend/js/custome.js')}}"></script> --}}
<script src="{{ asset('admin/js/sweetalert2.all.js') }}"></script>
<?php

$color=App\Models\BackgroundAndColor::first();


?>
<style>



:root {
    --primary-color: <?php echo $color->primary_color; ?>;
    --body-backgroud: <?php echo $color->primary_background_color; ?>;
     --primary-text-color: <?php echo $color->primary_text_color ?>;
    --menu-text-color: <?php echo $color->menu_text_color ?>;
    --menu-background: <?php echo $color->menu_background_color ?>;

}

body{
    overflow-x: hidden;
}

a{
    color: var(--primary-color)
}

.tab-content {
    display: block !important;

}

.list-group .active {
    background: var(--primary-color) !important;
}

.caption {
    text-align: center;
}

.product {
    height: 100%;

    border: 1px solid #ddd;
    margin-bottom: 20px;
}

.product-content {
    margin-top: 7px;
}

.single-product.mt-2 {
    margin-top: 20px;
}

.slider_background{
    background:var(--primary-color);
    margin-left: 0px;
    margin-right: 0px;
}

span.outstcok {
    background: yellow;
    color: #000;
}

.product-side-category {
    margin-left: 8px;
    margin-top: 7px;
}

.toasted.toasted-primary.success {
    width: 400px;
    height: 55px;
    font-size: 18px;
}

.toasted.toasted-primary.error {
    width: 400px;
    height: 55px;
    font-size: 18px;
    font-weight: bolder;
}

.image img {
    max-width: 200px;
    max-height: 200px;
}

table img.img-thumbnail {
    width: 50px;
    height: 50px;
}

.product-content .product-thumb {

    margin-bottom: 12px;
}

.quantityUpdat {
    font-size: 20px;
    cursor: pointer;
}

.cart-empy {
    text-align: center;
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
}

.cart-empy p {
    margin-top: 0px;
    font-size: 20px;
}

.cart-empy img {
    margin-bottom: 0px;
    margin-top: 0;
}

.custom-box {

    width: 100%;
    height: auto !important;
    background: #fff !important;
    padding: 25px 40px !important;
    margin: auto;
    border-radius: 10px !important;
    box-shadow: 3px 3px 3px #ddd !important;

}


.custom-box .title {
    text-align: center;
    text-transform: uppercase;
    border-bottom: 2px solid var(--primary-color);
}

.is-invalid {
    border: 1px solid red;
}

.invalid-feedback {
    color: red;
}

.cart-total {
    background: #fff;
    width: 100%;
    padding: 5px;
    font-size: 20px;
}

span.badge-danger {
    background: red;
}

span.badge-success {
    background: var(--primary-color);
}

span.badge-warning {
    background: #f39c12;
    color: #000 !important;
}

span.badge-primary {
    background: #3c8dbc;
}

.related_products .sub-title {
    text-align: center;
    border-bottom: 2px solid #ddd;
    margin-bottom: 45px;
}

    .search-content {
            position: absolute;
            z-index: 1000;
            top: 44%;
            width: 34%;
            height: auto;
            overflow-y: scroll;
            margin-left: 11%;
     }

.search-content li:hover {

    background: var(--primary-color);
    color: #fff;

}

.search-content li .search-router-link:hover {

    color: #fff;

}

.search-content li .search-router-link {

    color: #000;

}


.btnQuick:hover {
  background: #ff4d03;
}


.displayeBlok{
  display: none;
}



.product-header {
    position: relative;
    padding: 0px;
    margin: 0px 0px 20px 0px;
    line-height: normal;
    font-size: 20px;
    color: #000000;
    border-bottom: 2px solid #ddd;
    padding-bottom: 3px;
}

nav#top li a {
    color: #fff !important;
}

#header .htop {
    background-color: var(--primary-color);
}

.left-top {
    background-color: var(--primary-color)!important;
}

#header .button-search {
    width: 69px !important;

    color: #fff;
    background: var(--primary-color);
}

/*
start left sideb bar css */
ul.side-nav {
    width: 267px;
    height: 450px;
    list-style: none;
    background: #c2eaaa;
    box-shadow: 3px 4px 7px 1px #ddd;
    border-radius: 4px
}

ul.side-nav li {
    line-height: 4rem;
    border-bottom: 1px solid #f6f6f6;

    position: relative;
    left: -23px;
    vertical-align: middle;
    cursor: pointer;
    transition: 3ms;
}

ul.side-nav .nav-main-item {
    color: #000;
    font-size: 14px;
    margin-left: 14px;
    transition: 3ms;

}

.side-nav li:hover {
    background-color: #fff;
}

.nav-main-item:hover {
    color: var(--primary-color);


}

ul.left-sub-menu {
    position: fixed;
    box-shadow: 3px 4px 7px 1px #ddd;
    background: #c2eaaa;
    width: 195px;
    z-index: 100;
    list-style: none;
    top: 120px;
    max-height: 420px;
    display: none;
    left: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 420px;
}

ul.left-sub-menu .last-sider-bar {
    border: 1px solid #ddd;
    border-left: none;
    border-top: none;
    left: 52rem;
    position: fixed;
    background: #c2eaaa;
    list-style: none;
    top: 130px;
    max-height: 420px;
    display: none;

    overflow-y: scroll;
    overflow-x: hidden;
    height: 420px;
    width: 195px;
}

ul.left-sub-menu .last-sider-bar li {
    border: none;
    left: -15px;
}

ul.side-nav li:hover>.left-sub-menu {
    display: block;
}

.left-sub-menu li:hover>.last-sider-bar {
    display: block;
}

.show-sub {
    display: none;
    float: right;
    margin-top: 17px
}



.menu-show {
    display: block;
}

.category_icon_image {
    max-width: 20px;
    max-height: 20px;
}

.pull-right {
    background: var(--primary-color) !important;
}

.chat-icon {
    float: right !important;
    position: fixed;
    text-align: right;
    left: 93%;
    z-index: 10000;
    top: 283px;
    vertical-align: middle;

    width: 75px;
    height: 120px;
    text-align: center;

    background: transparent;
    padding: 30px 0px;
    border: 2px solid var(--primary-color)
}

.product_carousel.sale_campaign h3 {
    font-weight: bold;
    text-transform: uppercase;
    color: var(--primary-color);

}
.sale_campaign{
    margin-bottom: 40px;
    text-align: center;
    padding: 0px;
    background-color: #fff;

}
 .wrapper-wide{
    background-color:var( --body-backgroud);
}
.container{
    padding-left: 0;
    padding-right: 0;
}
.product-card {
    width: 100%;
    height: 270px;
    background: #F4F1F0;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 6px;
}
.best-selling .product-card img{
    border-radius: 40px;;
}

.product-card:hover>.product-card-footer{
    display: block;
    margin-top: -45px;
    animation: fly 1s ease 1;
}

@keyframes fly {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0);
    }
  }

.product-card-body img {
    padding: 10px;
    width: 100%;
    height: 180px;
    transition: .3s;
}
.product-card-body img:hover {
   transform: scale(1.5);
}

.product-detail h4 {
    font-size: 12px;
    padding: 5px;
}
.product-card-footer {
    display: none;
    background: var(--primary-color);
    padding: 5px;
    transition: .5s;
}
.detls_prodcut{
    color:#fff ;
    background:transparent;
}
.best-selling .product-card {
    width: 220px;
}
.banner img{
    max-width: 165px;
    max-height: 165px;
     border: 1px solid #eee;
     border-radius: 5px;
}
.product-link{
    color: #000;
    transition: .3s;
}
.product-link:hover {
    color: var(--primary-color);
}
.category-heading{
    display: inline;
    font-weight: bold;

}

.s-category{
    display: inline;
    float: right;
}

.sub-category-name:hover {
    color: var(--primary-color);

}
.c-v-all {
    background: #000;
    color: #fff;
    padding: 5px 18px;
    width: 22px;
    height: 38px;
    display: inline;
    border-radius: 4px;
    transition: .5s;
}
.c-v-all:hover {

    border-radius:0px;
    color: #fff;
    background: var(--primary-color);

}

.c-product {
    margin-top: 10px;
}
.c-product-header {
    margin-bottom: 8px;
    padding: 6px 0px;
    border-bottom: 1px solid #ddd;
}
.single-product-box {
    background: #fff;
    padding: 15px 25px;

   border-radius: 5px;
   height: auto;
}
.product-description{
      background: #fff;
      padding: 15px 25px;
      box-shadow: 3px 3px 3px #ddd;
      border-radius: 5px;
      height: auto;
      margin-top: 20px;
}
.realted-producs{
    margin-top: 20px;
}
.realted-producs h3{
    margin-left: 15px;
}
.bg-white{
    background: #fff;
}
.shadow{
     box-shadow: 3px 3px 3px #ddd;
}
.c-box{
    padding: 20px 25px;
}
.cart-dropdown {
    position: absolute;
    width: 350px;
    right: 0;
    height: 400px;

    z-index: 999;
}
.cart {
    position: fixed;
    z-index: 999999999999999999;
    right: 0;
    background: #fff;
    bottom: 0;
    height: 80%;
    width: 0px;
    transition: .5s;
    margin-bottom: 5%;
}
.colapse-cart{
    width: 400px;
}
.cart-header {
    padding: 15px 15px;
    background: #000;
   text-transform: uppercase;
    font-weight: bold;
    color: var(--primary-color);
}
.cart-body {
    padding: 15px 15px;
    max-height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.placebtn{
    text-transform: uppercase;
    color: var(--primary-color);
    font-size: 18px;
}
.placebtn:hover{
    color: var(--primary-color);
}
.cart-footer{
    position:absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #000000;
}
.cart-fiiter{
    padding: 15px 15px ;
}
 #exitcart {

    cursor: pointer;
}

.cart-open {
    position: fixed;
    right: 0;
    z-index: 999;

    top: 50%;

    width: 80px;
   background: var(--primary-color);
    text-align: center;
    height: 120px;
    cursor: pointer;
}
.cart-open i {
    font-size: 25px;
}
.cart-item-total {
    color: #fff;
}
.user-side-bar {
    padding: 10px 10px;
    margin-bottom: 30px;
}
.profile.clearfix {
    text-align: center;
}
.order-histrory {
    padding: 10px 20px;
    margin-left: 25px;
}
.overlaw-offer {

    opacity: 0;
    position: absolute;
    top: 49%;
    left: 49%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    background: var(--primary-color);
    transition:  .5s;
    width: 165px;
    height: 165px;

}
.overlaw-offer:hover{

 width: 100px;
 opacity: .7;
}
.overlaw-offer-height:hover{
  height: 80px;
   width: 165px;
}
.sub-category-name {
    margin-right: 8px;
    background: #fff;
    padding: 5px 4px;
    font-size: 13px;
    font-weight: bold;
    width: 250px;
    color: var(--primary-color);
}

.product-details-tabe {
    background: #fff;
    margin-top: 25px;
    padding: px;
    box-shadow: 3px 3px 3px #ddd;
    border-radius: 10px;
}
ul.details-tab-menu-list {
    width: 100%;
    display: flex;
    text-transform: uppercase;
    background: #ddd;
    border-radius: 2px;
}

.details-tab-menu-item {
    padding: 10px;
    color: #000;
    font-weight: bolder;
    cursor: pointer;
}


.tab-menu-item-active {
    border-bottom: 4px solid var(--primary-color);
}
.product-tab-content {
    padding: 15px 15px;
    min-height: 250px;
}
.product-details{
    display: none;
}
.how-to-buy{
    display: none;
}
.block{
    display: block;
}
li.h-b-li {
    list-style-type: square;
    padding: 2px;

}
.product-thumb .image:hover {
    transform: scaleX(-1);
}

.banner .row{
 background: #fff;
 padding: 12px 12px;
 border-radius: 10px
}




img.responsive-image.choosed-thumb {
    max-width: 60px !important;
}

img.zoomer-control.responsive-image {
    max-width: 40px !important;
}

.nav-active {
    display: block !important;
}

.product-card-footer {
    padding: 0px;
}

.btnQuick:hover {
    background: var(--primary-color);
}




.parallax_inside {

    position: absolute;
    width: 40%;
    height: 200px;
}

.parallax_content {

    margin: 10px;
    position: absolute;

    width: 96%;
    height: 175px;
    text-align: center;

}

.parallax_content h4 {
    margin-top: 30px;
}

.parallax_offer {
    margin-top: 15px !important;
    margin-bottom: 15px !important;
}




/* menu css....... */

.category-menu {
 margin-top: 10px;
    width: 250px;
    background: var(--menu-background) !important;
    min-height: 450px;
    margin-left: -28px;
}

.menu-heading {
    background: var(--primary-color);
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
}

img.category-img {
    width: 20px;
    height: 20px;
}

.category-menu-list {
    margin: 0;
    padding: 0;
    background: #fff;
    min-height: 450px;
}

.category-name {
     padding: 9px;
    vertical-align: middle;
    font-size: 14px;
    border: 1px solid var(--primary-color);
}

.category-link {
    color: #000;
}

li.category-name:hover {
    box-shadow: 3px 3px 3px 3px #ddd;
    transition: .3s;
    color: #000;
}

ul.sub-category-menu-list {
    min-width: 850px;
    z-index: 9;
    position: absolute;
    min-height: 450px;
    background: #fff;
    display: none;
    TOP: 5%;
    left: 90%;
    flex-wrap: wrap;
    padding: 20px 20px;
    max-height: 450px;
    overflow-y: auto;
    box-shadow: 4px 4px 4px 4px #ddd;

}

li.category-name:hover>.sub-category-menu-list {
    display: flex;
}

.sub-category-link {
    color: #000;
    border-bottom: 1px solid #ddd;
}

ul.sub-sub-category-list {
    margin-top: 10px;
    padding: 0px 20px;
}

.slider {
    margin-top: 10px;
}
.nav-active {
    display: block !important;
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999999999999;
}

.q-i-d {
    cursor: pointer;

}

ul.p-image-name li {
    padding: 5px 2px;
    font-size: 12px;
}

button.btn.btn-primary.btnQuick {
    background: var(--primary-color);
}

li {
    list-style: none;
}

.header {
    position: relative;
    width: 100%;
    box-shadow: 2px 2px 2px #ddd;
    border-bottom: 1px solid #ddd;

}

.header-top {
    width: 100%;
    height: 29px;
    display: flex;
    background: var(--primary-color);
    border-bottom: 1px solid #ddd;
    color: #fff;

}

.header-top-left {
    display: flex;
    list-style: none;
}

.header-top li {
    padding: 5px 4px;
    font-size: 14px;
}

.flex {
    display: flex;
}

.header-top-right {
    margin-left: auto;
    display: flex;
}

.header-top li span {
    padding-right: 9px;
    padding: 3px;
}

.header-top li i {
    color: #fff;
}

.main-header {
    background: #fff;
}

.main-header li {
    padding: 5px 4px;
    font-size: 14px;
}

img.site-logo {
    max-width: 180px;
    max-height: 60px;
    margin-left: 18%;
}


.search-input {
    width: 38%;
    height: 35px;
    border-radius: 5px;
    transition: .5s;
    background-color: #F7F8FA;
    border: 1px solid #ddd;
    padding: 10px;
    position: absolute;
    top: 15%;
    margin-left:11%;
}


.search-btn {
    height: 35px;
    border-radius: 5px;
    transition: .5s;
    background-color: #F7F8FA;
    border: 1px solid #ddd;
    border: none;
    right: 9px;
    background: var(--primary-color);
    color: #fff;
    width: 64px;
    position: absolute;
    top: 15%;
    left: 64%;
}


.main-header-left {
    display: flex;
}

.main-header-right {
    display: flex;
    margin-left: auto;
    padding: 13px;
}


.main-header-right li {

    font-size: 28px;
    padding: 10px 12px;
}

.main-header-right li i {
    color: var(--primary-color);

}

.menu {
    position: relative;
    width: 100%;
}

.menu-list {
    width: 100%;
    position: relative;
    background: var(--primary-color);
    height: 40px;
    display: flex;
    justify-content: center;
}

.menu-item {
    padding: 10px 15px;
    font-size: 14px;
    transition: .5s;
}

.menu-item::after {
  font-size: 10px;
}

.menu-item-link {
    color: #fff;
    transition: .3s;
}

.menu-item-link:hover {
    color: #fff;

}

.menu-icon {
    display: none;
}

.sub-item-list {
    display: flex;
    width: 90%;
    min-height: 400px;
    height: auto;
    position: absolute;
    background: #fff;
    left: 5%;
    flex-direction: row;
    opacity: 0;
    visibility: hidden;
    box-shadow: 1px 0px 1px 1px #eee;
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 600px;
    overflow-y: scroll;
    z-index: 99999999999;
    margin-top: 30px;
}

.menu-item:hover>.sub-item-list {
    opacity: 1;
    visibility: visible;
}

.sub-item {
    width: 200px;
    min-height: 220px;
    margin-top: 10px;

}

.sub-item-link {
    font-weight: bold;
    text-transform: uppercase;
    color: #000;
    font-size: 15px;
}

.sub-item-link:hover {
    color: var(--primary-color);

}

.sub-sub-item {
    text-transform: none;
    padding: 3px 0px !important;

}

.sub-sub-item-link {
    color: #000000;
    font-size: 14px;
    transition: .5s;
}

.sub-sub-item-link:hover {
    color: var(--primary-color);
}

.sub-sub-item-list {
    padding: 0px 15px;
    margin-top: 5px;
}

#toggle-menu {
    display: none;
}

.sub-menu-icon {
    display: none;
}


/* =========FOR ICON ROTATE======== */
.rotate {
    transform: rotate(180deg);
}
span.price-new {
    color: var(--primary-color);
}


#footer .fpart-first {
    padding-bottom: 10px !important;
}

#footer .column a {
    text-decoration: none;
    display: block;
    padding: 3px 0;
    line-height: 24px;
    font-size: 12px;
}

#footer .line {
    width: 72px;
    height: 2px;
    background: var(--primary-color);
    margin-top: -10px;
    margin-bottom: 12px;
}

#footer .social-icon {
    margin: 30px;
}

#footer .social-wrape {
    float: left;
    width: 40px;
    height: 40px;
    border: 2px dashed;
    border-radius: 50%;
    margin-left: 10px;
}

#footer .social-wrape:hover {
    background: var(--primary-color);
}

#footer .f_info_left {
    position: absolute;
    margin-top: 15px;
    margin-left: 400px;
    color: #fff;
    font-size:17px;
}

#footer .f_info_right {
    float: right;
    margin-top: 15px;
    margin-right:30px;
    color:#fff;
    font-size:17px;

}

#footer .f-icon {
    margin: 11px;
    cursor: pointer;
    color: white;
}

#footer #powered {
    border-bottom-color: var(--primary-color);
    margin-top: -20px;
}

#footer .powered_text p {
    line-height: 18px;
    margin: -19px;
}


.footer_info_row{
  margin-left: 0px !important;
  margin-right: 0px !important;
  background: var(--primary-color);
  height: 50px;
  width: 100%;
  margin-top:0px;

}

#footer .email_icon_container {
    background: var(--primary-color);
    float: right;
    margin-top: -34px;
    padding: 7px 17px;
}

#footer .email_icon_container i {
    color: #fff;
}
.sub-sub-category-name {
    color: #000;
}
.s-menu {
    position: absolute;
    display: flex;
    right: 15%;
    top: 52%;
}

.s-menu li {
    background: var(--primary-color);
    color: #fff;
    padding: 5px 10px;
    margin-right: 15px;
    border-radius: 10px;
    font-size: 12px;
}
.s-menu li a{
    color: #fff;
}
.product-thumb.clearfix {

    background: #F4F1F0;
    height: 290px;
    border:none !important;
    box-shadow: none !important;
}
.sale_campaign{
    padding: 5px 5px;
}



#_qvm .modal_overlay{
      background: #00000073;
}
#_qvm .quick_view_image {
  width: 250px !important;
  height: 250px !important;
}

#_qvm .close_sign {
  font-size: 40px !important;
  margin-top: -19px !important;
  color: var(--primary-color) !important;
}

#_qvm .animator {
  margin-top: 100px;
  padding: 100px;
}

#_qvm .animator i {
  font-size: 70px;
}

#_qvm .modal-body h4 p {
  margin-left: 20px !important;
}

#_qvm .modal-dialog {
  width: 90% !important;
  position: absolute;
  left: 10%;
  transition: .3s;
}

#_qvm .quick_content{
  background: #fff;
}
#_qvm .quick_description {
  font-size: 14px;
}



#_qvm .r_p_title{
  font-size: 12px ;
  color: var(--primary-color);
}

#_qvm .r_p_image {
   width:110px;
   height:100px;
   border-radius: 5px;
}

#_qvm .r_p_button {
    margin-left: 35px;
    border-radius: 5px;
}

#_qvm .r_p_button:hover {
    border-radius: 50px;
    background: var(--primary-color);
}
#_qvm .related_quick_row[data-v-587a0637] {
    margin: 5px;
    max-height: 180px;
    overflow-y: scroll;
}

#_qvm .r_quick_body {
    padding: 15px 10px;
}

.main-header-right li {
    font-size: 16px;
    padding: 12px 14px;
}

#_qvm .col-md-2 {
    margin-bottom: 25px;
}
.btn-primary{
    background: var(--primary-color) !important;
}
.cart-header {
    padding: 15px 15px;
   background: var(--primary-color);
   color: #fff;
}
.cart-footer {
   color: #fff;

    background-color: var(--primary-color);
}
.placebtn{
    color: #fff;
}
.btn_search{
    background: var(--primary-color) !important;
}
.show{

    display: block;

}
.hide{
    display:none;
}



.slider_imge {
    height: 200px;
    min-height: 200px !important;
}
.s-menu{
    display: none;
}
.campaign-text{
    text-align: left !important;
}
.__sub_category{
    display: none;
}

}

.__sub_category {
    min-height: 589px;
    max-height: 600px;
    background: #fff;
    box-shadow: 3px 3px 3px #ddd;
    width: 190px;
    text-align: left;
    margin: 0;
    padding: 0;
    margin-top: -8px;
}

.__sub-category_name {
    padding: 10px;
}
.__sub-category_name::before {content: "•"; color: green;
  display: inline-block; width: 1.5em;
 }

 .__sub-category_name::after {content: "•"; color: blue;
  float: right; width: 1em;
 }

.__sub-category_name:hover{
    color: var(--primary-color)
}

.__list_headig {
    padding: 10px 10px;
    background:var(--primary-color);
    width: 190px;
    color: #fff;
}

.__sub_category_link {
    color: #000;
   padding: 8px;
   }


.__product_category{
    margin-bottom: 50px;
}


/* start responsieve side menu css  */



/* =========START THE  MENU RESPONISVE CSS======== */


.slider_row{
  margin-top: -11px;
}

.arrival_heading{
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 0px;

}

.new_arrival_section{
  margin-top: 0px;
  margin-bottom:0px;
}

.owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: -22px !important;
}

.new_arrival_container{
    width: 180px;
    height: 300px;

}


.new_arrival_card{
    width: 180px;
    height: 180px;
    background: #F4F1F0;
    border-radius: 50%;
}

.new_arrival_card_body img{

    width: 130px;
    height: 130px;
    margin: 24px;
    border-radius: 50%;

}

.vhl-navigation[data-v-8b923bbc] {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: -70px !important;
}

.arrival_link{
    font-size: 14px;
    margin: 5px;

}

   .banner_title{
      margin-left: 3px;
      font-weight: bold;
    }


.nav-active {
  display: block !important;
}

.offer_collection{

    margin-left: 0px;
    margin-right: -10px;
    margin-bottom: 50px;
}

.collection_left{
    background-size: cover;
    height: 324px;
    width:48%;
}

.collection_right{
    background-size: cover;
    height: 324px;
    width:48%;
    margin-left: 30px;
}

.container_offer_header{
    margin-top: 185px;
    background: #eb3e41;
    width: 95%;
    height: 108px;
    opacity: 0.8;
}

.container_offer_header p{
    padding-top: 30px;
    color:#fff;
}

.container_offer_header h4{
    font-weight: bold;
    color:#fff;
}
.collection_content{
  background: #fff;
  margin-top:30px;
  margin-left:-20px;
  display: flex;
}

.collect_sub_data {
  float:right;
}
.collect_sub_data .p1{
    font-size: 12px;
    padding: 3px;
    line-height: 15px;
    padding-top: 8px;
}

.collect_sub_data .p2{
    font-size: 18px;
    padding: 6px;
    line-height: 5px;
    padding-top: 6px;
}

.btn_more{
    background: #4D4D4D;
    width: 120px;
    color: #fff;
}
.btn_more:hover>.arrow_right_icon{
    margin-left: 20px;
}

.arrow_right_icon{
  padding-left: 10px;
}

.collection_content img{
    width: 100px;
    height: 105px;
    padding: 3px;

}


.parallax_background {
  width: 99.4%;
  height: 300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px 0px;
}

.btn_shop_now{
    background: #000;
    width: 200px;
    margin-top: 12%;
    margin-right: 25%;
    height: 40px;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 400;
    color:#fff;

}

.btn_shop_now:hover{

    width: 210px;
    color:greenyellow;

}


.caegories_and_new_product_row{
  margin-bottom: 50px;
}

.random_heading{
  font-weight: bold;
}

.new_random_heading{
  font-weight: bold;
}

.new_random_card{
    width: 180px;
    height:270px;
    background: #F4F1F0;
}

.new_random_card_body img{
    width: 160px;
    height: 170px;
    margin: 10px;
}

.new_random_link{
    font-size: 14px;
    color: #000;

}

.banner_container{
  margin-top:50px;
}

.banner_image{
    width: 120px;
    height: 120px;

}

.campaign_clock{
   position: absolute;
   margin-top: -38px;
   margin-left: -107px;
}




.service_row {
    width: 100%;
    height: 135px;
    margin-top: 50px;
    margin-bottom: 50px;

}


.service_outer {

    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #C0C4C8;
    margin: 20px 80px;


}

.service_inner {

    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--primary-color);
    margin: 6.5px 6px;

}


.service_icon {
    margin: 12px;
    color: #fff;
    font-size: 35px;
}

.service_container h4{
    margin-top: -10px;
}

.service_container p{
    font-size: 14px;
    line-height: 12px;
}

.service_outer:hover>.service_inner>.service_icon {

    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    cursor: pointer;
    transition: 0.5s;

}


.single_product_image{
    width: 350px;
    height: 350px ;
}







.discount {
    background: red;
    border-radius: 100%;
    color: #fff;
    display: block;
    font-size: 12px;
    font-weight: 700;
    height: 50px;
    width: 50px;
    line-height: 40px;
    position: absolute;
    right:-2px;
    text-align: center;
    top: 22px;
    transform: translate(-50%, -50%) rotate(-30deg);

}

.discount_star {
    position: absolute;
    z-index: -5;
    margin: -9px;
    color: red;
    font-size: 30px;
}

.d_off{
    position: absolute;
    margin-left: -20px;
    margin-top: 15px;
}

.best_selling_discount{
     background: red;
     border-radius: 100%;
     color: #fff;
     display: block;
     font-size: 12px;
     font-weight: 700;
     height: 50px;
     width: 50px;
     line-height: 40px;
     position: absolute;
     right:-2px;
     text-align: center;
     top: 22px;
     transform: translate(-50%, -50%) rotate(-30deg);
}

.best_s_star {
    position: absolute;
    z-index: -5;
    margin: -9px;
    color: red;
    font-size: 30px;
}


.flas_selling_discount {
    background: red;
    border-radius: 100%;
    color: #fff;
    display: block;
    font-size: 12px;
    font-weight: 700;
    height: 50px;
    width: 50px;
    line-height: 40px;
    position: absolute;
    right: -5px;
    text-align: center;
    top: 29px;
    transform: translate(-50%, -50%) rotate(-30deg);
}

.flash_s_star {
    position: absolute;
    z-index: -5;
    margin: -9px;
    color: red;
    font-size: 30px;
}


.new_product_discount {
    background: red;
    border-radius: 100%;
    color: #fff;
    display: block;
    font-size: 12px;
    font-weight: 700;
    height: 50px;
    width: 50px;
    line-height: 40px;
    position: absolute;
    right: 9px;
    top:29px;
    text-align: center;
    transform: translate(-50%, -50%) rotate(-30deg);
}

.new_p_star {
    position: absolute;
    z-index: -5;
    margin: -9px;
    color: red;
    font-size: 30px;
}







 .__footer_nav {
     display: none;
 }



    .incrementor_minus , .incrementor_plus {
        display: none;
    }



@media only screen and (max-width: 900px) {


    .header-top {
        display: none;
    }

    #toggle-menu {
        display: block;
        position: absolute;
        left: 2%;
        font-size: 30px
    }

    img.site-logo {
        position: absolute;
        left: 28%;
        top: 2%;
    }

    .main-header-left {

        width: 100%;
        position: absolute;
        z-index: 999999999;
        background: #F7F8FA;
        justify-content: center;
        position: absolute;
        height: 45px;
    }

    .main-header-right {
        z-index: 99999999999;
        top: -10%;
        position: absolute;
        right: 0;
    }

    .menu-item:hover>.sub-item-list {
        opacity: 1;
        visibility: visible;
    }

    /* =========MAIN MENU DIFFRENT STYLE IN  RESPONSIVE VIEW======== */
    .menu-list {
        display: flex;
        flex-direction: column;
        width: 80%;
        min-height: 600px;
        display: none;
        opacity: 1;
        transition: .2s;
        justify-content: left !important;
        height: 100vh;
        position: fixed;
        z-index: 7777777777;
        top: 0;
        overflow-y: scroll;
      }




    }




    .collapse-manu {
        display: block;;
        opacity: 1;
    }

    .menu-overlaw {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: rgb(0, 0, 0, 0.5);
        top: 0;
        z-index: 0;

    }

    .menu-item {
        padding: 10px 10px;
        display: flex;
    }


    .main-header {
        height:75px;
    }


    .sub-item {
        width: auto;
        min-height: auto;
        font-weight: normal;
        text-transform: none;
        padding: 8px 12px !important;
    }

    .sub-item-link {
        color: #000;
        font-size: 12px;
    }




}


@media only screen and (max-width: 850px) {


    .nav-list {
        width: 100% !important;
        height: 100vh !important;
        width: 100% !important;
        background-color: var(--primary-color) !important;
        flex-direction: column !important;
        display: none !important;


    }

    .nav-list li {
        font-size: 16px;
        left: 0px !important;
        border-bottom: 1px solid #fff;
        color: #000000;
    }

    .nav-list li .nav-router {
        text-align: left !important;
        color: #000000;
    }

    .nav-list li:hover>.sub-menu {
        display: none;
    }

    .menu-icons {
        display: block;
        top: -203px;
    }

    body {
        overflow-x: hidden;
    }


}



@media screen and (max-width: 768px) {

 .menu-item:hover>.sub-item-list {
     display: none;
 }

.menu-item {
        padding: 10px 15px;
        display: flex;
    }


   .sub-menu-icon {
        display: block;
    }

    .menu-icon {
        display: block;
        color: #fff;
        justify-content: space-between;
        margin-left: auto;
        font-size: 17px;
        margin-right: 10px;
    }

     .cart-open {
            display: none;
      }

      .colapse-cart {
            width: 95%;
            margin-bottom: 20%;
            height: 70%;
        }

        ul.p-image-name li {
            padding: 0px 5px !important;
            font-size: 12px;
        }

       .main-header-right {
           display: none;
       }

        .__footer_nav {
            width: 100%;
            position: fixed;
            bottom: 0;
            background: #fff;
            height: 4.5rem;
            z-index: 99999999999999999;
            left: 0;
            box-shadow: 5px 10px 18px #333e48;
            padding-top: .45rem;
            color: #333;
            display: block;
        }

        .__footer_nav ul {
            display: flex;
            list-style: none;
            margin-top: 8px;
        }

       .__footer_nav ul li {
            font-size: 1.55rem;
            width: 18%;
            padding-left: 1rem;
        }

        .footer_icon{
            font-size: 24px ;
            color: var(--primary-color) ;
            cursor: pointer;
        }

           .customize_c_item{
            margin-top: 8px;
            background: var(--primary-color);
            border-radius: 50%;
            position: absolute;
            width: 14px;
            height: 14px;
            color: #fff;
            padding: 7px 4.5px;
            margin-left: 18px;
            font-size: 10px;
       }




       .header_search_form{
            display: none;
        }

         .search_toggle{
            display: block ;
        }

       .subscribe-input {
              width: 80% !important;
             margin-left: -12px;

          }

        .footer_info_row{
             height: 80px;
             margin-top:-5px;
           }

        .end_footer p{
            text-align: center;
            font-size: 16px;
        }
        #footer .f_info_left {
            margin-top: 15px;
            margin-left: 10%;

        }

        #footer .f_info_right {
            padding-top: 25px;
            margin-right: 23%;
            color:#fff;
        }

        /* header respoonsive */
        img.site-logo {
            position: absolute;
            left: 6%;
            top: 2%;
        }

        /* header section responsive */

        .main-header-right li {
            font-size: 16px;
            padding: 15px 10px;
        }


        span.price-new {
        color: var(--primary-color);
        font-size:12px ;
        margin-left:-5% ;
        }

        .single_p_price {
                font-size: 20px !important;
                margin-left: -35% !important;
                padding: 0px 45px;
            }
       /* new arrival section responsive issue */

       .arrival_heading {
        text-transform: uppercase;
        margin-top: 5px;
        font-size: 12px;
      }

       .new_arrival_section{
        margin-top: 0px;
        margin-bottom:20px;
        }

        .new_arrival_container{
            width: 130px;
            height: 200px;
        }

        .new_arrival_card{
            width: 120px;
            height: 120px;
            background: #F4F1F0;
            border-radius: 50%;
        }

        .new_arrival_card_body img{
            width: 90px;
            height: 90px;
            margin: 15px;
            border-radius: 50%;
        }

        .vhl-item[data-v-8b923bbc] {
            box-sizing: content-box;
            padding-top: 0px !important;
            padding-bottom: 20px !important;
            z-index: 1;
            min-height: 1px;
        }

        .arrival_link{
            font-size: 11px;
            font-weight:normal;
            text-transform: none;
            line-height:15px;

        }

        /* service section responsive */

        .service_container{
        width:50%;
        float: left;
        }

        .service_outer{
            margin: 20px 100px;
        }


        .parallax_background{
            width: 100%;
            margin-left: -5px ;
        }

        .btn_shop_now{
            margin-top: 25%;
           margin-right: 40%;
        }
      /* collection responsive */
      .offer_collection{
        margin-bottom: 10px;
        }
        .collection_left{
            margin-left: -5px;
            width:100%;
            height:600px !important ;

        }

        .collection_right{
            width: 100%;
            height:600px !important ;
            margin-left: -5px;
            margin-top: 20px;
        }

        .container_offer_header {
            text-align: center;
            margin-top: 160px;
            width: 80%;
            margin-left: 10%;
            height: 108px;
        }

        .collection_content {
            display: block;
            background: #fff;
            margin: 1%;
            width: 48%;
            float: left;
        }
        .collection_content img {
            width: 100%;
            height: 200px;
            padding: 10px;
        }

         .collect_sub_data {
             text-align: center;
             float: none;
         }

          .collect_sub_data .p1 {
               font-size: 14px;
            }

         .collect_sub_data .p2 {
            font-size: 16px;
            padding: 5px;
            line-height: 7px;
            padding-top: 0px;
        }

         .btn_more{
            margin-bottom:10px;
        }


       /* campaign responsive */

        .campaign_clock {
            position: absolute;
            margin-top: -36px;
            margin-left:22% ;
         }

         .random_heading{
            text-align: center;
         }

            .arrow_icon{
            display: inline-block;
            }

            .sub_category_view{
            display: none;
            margin-top: 15px;
            }


            .sub-category-name {
                border-bottom: 1px solid #ff4d03;
                background: #fff;
                padding: 0px 7px;
                font-size: 13px;
                font-weight: bold;
                margin-left: 5px;
                float: left;
                margin-bottom: 10px;
                border-block-end-style: none;
            }


            .c-v-all {
                background: #000;
                color: #fff;
                padding: 5px 13px;
                width: 22px;
                height: 38px;
                display: inline;
                border-radius: 4px;
                transition: .5s;
            }


            .search-content {
                    text-align: left;
                }

            .product-image-viewe {
                width: 85% ;
                margin-bottom: 60px !important;

            }

            img.responsive-image.preview-box {
                width: 85%;
                margin-bottom: 25px !important;
            }


            /* starte the custome nav css*/

            header.main-menu {
                position: relative;
                left: 0;
                top: 0;

            }

            nav.menu {
                display: flex;
                width: 100%;
            }

            ul.nav-list {
                display: flex;
                width: 100%;
                height: 40px;
                width: 100%;
                background-color: var(--primary-color);

            }

            ul.nav-list li {
                line-height: 2.5rem;
                position: relative;
                text-align: center;
                top: 9px;
                left: 9rem;


            }

            ul.nav-list li .nav-item {
                color: #fff;
                padding: 0 12px;
            }

            .menu-icons {
                color: var(--primary-color);
                font-size: 4rem;
                position: absolute;
                top: -40px;
                z-index: 1500;
                right: 2rem;
                transform: translateY(50%);
                display: none;
            }

            .sub-menu {
                background-color: #fff;
                color: #fff;
                top: 29px;
                left: 12px;
                width: 170px;
                z-index: 100000000;
                position: absolute;
                border-top: 3px solid var(--primary-color);
                font-size: 12px;
                text-align: left;
                display: none;
                border-bottom: 1px solid #ddd;
                border-right: 1px solid #ddd;
                border-left: 1px solid #ddd;


            }

            .sub-menu .sub-menu {

                top: 0px;
                left: 162px;
                border-top: none;
                border-top: 2px solid var(--primary-color)
            }

            .sub-menu::before {
                content: "";
                position: absolute;
                top: -16px;
                left: 0;
                border: 7px solid transparent;
                border-bottom-color: #fff;
            }

            .sub-menu .sub-menu::before {

                top: -4px;
                left: -14px;
                border: 7px solid transparent;
                border-right-color: #fff;
            }

            .nav-list li:hover>.sub-menu {
                display: block;
            }

            ul.sub-menu li {
                text-align: left;
                padding: 5px 0 0;
                border-bottom: 1px solid #ddd;
                background: #fff;
                margin-left: 5px;
                left: 0px;
            }

            .nav-router {
                color: #000;
            }



       /* in small view device quick view button won't display */

            .btnQuick{

                display: none ;
            }


            /* frontend common responsive issue is start from here  */

            img.responsive-image.preview-box
            {
            width: 85%;
            margin-left: 20px;
            }


            /* landing responsive code is start from here  */

            .container{
            margin:5px;
            }
            .banner_container{
            margin-left:-13px;
            }


        .banner img {
            max-width: 120px;
            max-height: 130px;
            border: 1px solid #eee;
            border-radius: 5px;
            }


            .c-product-header{

                display:none ;
            }


           .product-card {
            width:100%;
            height: auto;
            background: #F4F1F0;
            border: 1px solid #ddd;
            text-align: center;
            padding-top: 5px;
            margin-bottom: 15px;
            }


            .product-card:hover>.product-card-footer{
                display: none;
            }

            .product-card p {
            font-size: 13px;
            margin-top: -15px;

            }

            .product-detail h4 {
            font-size: 16px;
            padding-bottom: 10px;
            margin-top: -5px;
            }

            .product-card-body img {
                width: 95% !important;
                height: 100% !important;
                padding: 5px 0px !important;
            }




        /* contact us responsive code is here  */
        .address_container {
            margin-top: 30px;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px !important;
        }
        .contact_row {
            margin-top: -15px !important;
        }
        p {
            position: relative;
            font-size: 13px;
            line-height: 15px ;
        }
        .box {
            margin: 10px;
        }



        /* single display product responsive isssue is start from here ; */



        .product-details{
            margin-left:0px;
        }

        .product-details ul {

        list-style: none;
        margin-left: -16px;
        margin-right: 3px;

        }

        .r_title {
            margin-left:20px;
        }

        .single_product_heading h4 { font-size: 16px ; }

        .list-unstyled h2 { font-size: 20px ; }



        .details-tab-menu-list li{

            font-size: 11px !important;

        }

        /* cart responsive is start from here */

        .cart_row{
            padding-bottom: 25px;
        }

        .cart_responsive_item {

                margin-left: 260px;
                margin-top: -54px;

        }

        .cart_responsive_price{
            margin-left: 270px;
            margin-top: -44px;

        }


        .cart_responsive_total{

            margin-left: 310px;
            margin-top: -24px;
        }

        .cart_responsive_remove{

            cursor: pointer;
            margin-left: 350px;
            margin-top: -24px;
        }



        /* blog responsive issue is start from here */

        .desc_info p {
            font-size: 12px;
            line-height: 24px;
            font-style: normal;
        }
        .feature_image {
            width: 311px !important;
            height: 230px !important;
            margin-top: 18px !important;
            border: 3px dashed;
        }


        /* carrier details page responsive is here */

        .carrier_description {
            font-size: 14px;
            line-height: 24px;
        }


        .carrier_feature_image {
        width: 205px;
        height: 132px;
        border-radius: 10px;
        }

        /* cart responsive is start from here */

        .cart-open {
            height: 70px;
        }

        .cart-open i {
            font-size: 18px;
        }

        .cart-total {
            background: #fff;
            width: 100%;
            padding: 0px;
            border: 1px solid #ddd ;
            font-size: 14px;
        }


        .cart-total h5 {
            margin-top: 2px !important;
            font-size: 14px;
        }


        /* footer responsive code is start from  here */
        .quick_link{
            margin-left:25px;
        }

        .news_letter{
            margin-left: 25px;
        }


        #short_desc_footer{
            font-size: 16px !important;
            line-height: 24px !important;
            padding-right: 10px;
        }


       .search-input {
            width: 80%;
            left: -7%;
            margin-top: -60px;
            position:fixed;
        }
        .search-btn{
            position:fixed;
            display: block;
            top: 3.5%;
            left: 76%;
        }

        .search-content {
            z-index:1000;
            top: 107%;
            width: 87%;
            margin-left: -47%;
        }


    }



  .flip-card { font-size: 1.5rem !important; }








@media screen and (max-width:600px) {


      .input_qty {
               padding: 10px 130px !important;
           }
           .incrementor_plus {
                display: block ;
                position: absolute;
                margin-top: -8%;
                margin-left: 81%;
                font-size: 20px;
                color: var(--primary-color);
           }
           .incrementor_minus {
                display: block ;
                position: absolute;
                margin-top: -8%;
                margin-left: 5%;
                font-size: 20px;
                color: var(--primary-color);
            }



    .discount {
        margin: -7px;
        right: -24px;
        top: -154px;
    }

    .discount_star {
        font-size:24px;
    }

    .card-body {
    margin:10px;
   }

    .user_profile_icon {
        width: 50px; height: 50px;
    }

    .table_container{
      overflow-x: scroll;
       margin:10px;
    }

       .best_selling_discount{
           right: -18px;
           top: -128px;
           width:42px;
           height: 42px;
           font-size:11px;
           font-weight: 600;
       }

       .best_s_star {
          margin: 2px;
         font-size: 12px;
         color:#fff;
       }

        .flas_selling_discount {
           right: -27px;
           top: -172px;
           width: 50px;
           height: 50px;
           font-size: 11px;
           font-weight: 600;
        }

        .flash_s_star {
            margin: 2px;
            font-size: 12px;
            color:#fff;
        }

        .new_product_discount{
          right: -8px;
          top: -152px;
          width: 42px;
          height: 42px;
          font-size: 11px;
          font-weight: 600;
        }

        .new_p_star {
            margin: 2px;
            font-size: 12px;
            color:#fff;
        }


        .cart-empy img {
            height: 130px;
        }




    }










@media screen and (max-width: 450px) {

    .offer_collection {
        display: none;
    }

    .flip-card { font-size: 1rem !important; }

        .container{
            margin:5px !important;
            }
        .subscribe-input {
            width: 90% !important;
          }

        /* footer responsive  */
        .footer_info_row{
            height: 110px;
             margin-top:-5px;
           }

        .end_footer p{
            text-align: center;
            font-size: 14px !important;
        }
        #footer .f_info_left {
            margin-top: 15px;
            margin-left: 5%;

        }

        #footer .f_info_right {
            padding-top: 25px;
            margin-right: 16%;
            color:#fff;


        }

        .product-detail h4 {
                font-size: 12px;
                padding-bottom: 10px;
                margin-top: -5px;
                }


       /* servie reseponsive */
         .service_outer {
            width: 55px;
            height: 55px;
            margin: 10% 35%;
        }

        .service_inner {
            width: 40px;
            height: 40px;
            margin: 6.5px 6px;

            }

         .service_icon {
            margin: 9px;
            font-size: 22px;
            }

            .service_container p{
            font-size: 12px;
            line-height: 12px;
            }

            .service_container h4 {
                font-size: 14px;
            }



        /* categories and readom section responsive  */
        .banner_image {
                width: 100px;
                height: 100px;
            }
        .new_random_card {
            width: 125px;
            height: 220px;
        }
        .new_random_card_body img {
                    width: 120px;
                    height: 125px;
                    margin: 10px;
                }

        .new_random_link {
                font-size: 12px;
                color: #000;
                text-align: center;
                line-height: 14px;
                margin: 0px 5px;
           }


        /* new arrival responsive issue */
        .new_arrival_section{
            margin-top: -25px !important;
        }
        .new_arrival_container{
            width: 120px;
            height: 190px;
        }

        .new_arrival_card{
            width: 105px;
            height: 105px;
            background: #F4F1F0;
        }

        .new_arrival_card_body img{
            width: 85px;
            height: 85px;
            margin: 10px;
        }


        .collection_content img {
            width: 100%;
            height: 165px;
            padding: 10px;
        }
         /* header-section responsive */
        .main-header-right li {
            font-size: 12px;
            padding: 15px 5px;
        }


       /* parallax responsive  */
       .parallax_background{
            display: none;
        }

        .campaign_clock {
            margin-top: -9%;
            margin-left: 11%;
        }

        .sale_campaign {
            margin-bottom: 20px !important;
        }

        .sale_campaign h3 {
             margin-left: -32%;
            font-size: 14px;
            margin-top: 10px;
            margin-bottom: 15px;
        }

        .product-thumb.clearfix {

            height: 220px !important;

            }


    .single_product_image {
        width: 250px;
        height: 250px;
    }






}




@media screen and (max-width:380px){


        #footer .f_info_right {
            padding-top: 25px;
            margin-right: 10%;
            color:#fff;
        }


        .small_width {
            width: 47.5% !important;
            padding-left: 15px;
            padding-right: 0px;
        }

        .cart_responsive_item {
            margin-left: 200px;
        }

        .cart_responsive_price {
            margin-left: 218px;
        }
        .cart_responsive_total {
            margin-left: 252px;
        }
        .cart_responsive_remove {
                margin-left: 297px;
            }

}




@media screen and (max-width:350px){


    .campaign_clock {
            margin-top: -12%;
            margin-left: 15%;
    }


   .flip-card { font-size: 1rem !important; }

    .flip-clock__slot{
        display: none !important;
    }


   #footer .f_info_left {
            margin-left:2%;
        }


}









</style>