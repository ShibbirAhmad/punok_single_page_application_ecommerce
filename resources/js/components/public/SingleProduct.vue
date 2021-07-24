<template>
  <div class="wrapper-wide">
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <frontend-header></frontend-header>
    <div id="container" v-if="!isLoading">
      <div class="container">
        <div class="single-product-box" >
          <div class="row">
            <div class="col-lg-4">
                <div>
              <div class="row product-info">
                <div class="col-lg-6 col-md-6 product-image-viewer"  >
                  <image-zoom v-if="product_images.length"
                    :regular="base_url+product_images[0].product_image"
                    img-class="single_product_image"
                    >
                  </image-zoom>
                  </div>
              </div>
             </div>
            </div>
            <div class="col-lg-4">
               <ul class="list-unstyled description">
                  <li>
                 <h2 class="title" itemprop="name">{{ product.name }}</h2>

                  </li>
                    <li>
                      <h4>
                        <b>Product Code:</b>
                        <span itemprop="mpn">{{ product.product_code }}</span>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <b>Availability:</b>
                        <span class="instock" v-if="product.stock > 0">Stock In <small>({{product.stock }})</small></span>
                        <span class="outstcok" v-else>Stock Out</span>
                      </h4>
                    </li>
                  </ul>
                  <ul class="price-box">
                    <li class="price  ">
                     <h3>
                      <span class="price-old single_p_price" v-if="product.discount">&#2547; {{product.sale_price}}</span>
                      <span class="price-new single_p_price">&#2547; {{product.price}}</span>
                     </h3>
                    </li>
                    <li></li>
                  </ul>
                  <div id="product">
                    <div class="row">
                 <div class="col-lg-6" v-if="product.product_variant.length>0 && product.product_attribute">
                          <div>
                      <!-- <h3 class="subtitle">Available Options</h3> -->
                      <div class="form-group required">
                        <h4 class="control-label">
                          <b>{{ product.product_attribute.attribute.name }}</b>
                        </h4>
                        <select
                          class="form-control"
                          v-model="variant_index"
                          @change="SelectVaraint"
                          name="option[200]"
                        >
                          <option value disabled>--- Please Select ---</option>
                           <option
                            value
                            v-for="(variant,v) in product.product_variant"
                            :key="v"
                            :value="v"
                          >{{variant.variant ? variant.variant.name : ''}}</option>
                        </select>
                      </div>
                    </div>
                   </div>
                       <div class="col-lg-6">
                        <div class>
                          <h4 class="control-label" for="input-quantity">
                            <b>Quantity</b>
                          </h4>
                                <input
                            type="number"
                            name="quantity"
                            v-model="cart.quantity"
                            value="1"
                            class="form-control input_qty"
                            @change="validation"
                            @keyup="validation"
                          />

                          <div @click="cart.quantity += 1" class="incrementor_plus">
                             <i  class="fa fa-plus"></i>
                          </div>
                           <div v-if="cart.quantity > 1" @click=" cart.quantity -= 1 " class="incrementor_minus">
                             <i  class="fa fa-minus"></i>
                          </div>

                          <div class="clear"></div>
                        </div>
                      </div>
                    </div>

                    <div class="row">


                      <div class="col-lg-6">
                        <button
                          @click.prevent="CartToAdd"
                          type="button"
                          id="button-cart"
                          class="btn btn-primary btn-lg btn-block"
                          style="margin-top:38px;"


                        >Add to Bag </button>
                      </div>

                         <div class="col-lg-6">
                        <button
                          @click.prevent="buyNow"
                          type="button"
                          id="button-cart"
                          class="btn btn-primary btn-lg btn-block"
                          style="margin-top:38px;background:#000;"


                        >Buy Now</button>
                      </div>
                    </div>
                  </div>
            </div>
         </div>
        </div>

          <div class="product-details-tabe">
               <ul class="details-tab-menu-list">
                  <li class="details-tab-menu-item"  @click="tab_content=1" :class="{'tab-menu-item-active':tab_content==1}">Description</li>
                    <li class="details-tab-menu-item" @click="tab_content=2" :class="{'tab-menu-item-active':tab_content==2}" >How To Buy</li>
                      <li class="details-tab-menu-item"  @click="tab_content=3" :class="{'tab-menu-item-active':tab_content==3}">Return Policy</li>
                 </ul>
              <div class="product-tab-content">
                <div v-html="product.details" class="product-details" :class="{block:tab_content==1}"></div>
                <div class="how-to-buy" :class="{block:tab_content==2}">
                  <ul>
                    <li class="h-b-li">Select number of product you want to buy.</li>
                    <li class="h-b-li">Click <strong>Add To Cart</strong> Button</li>
                    <li class="h-b-li">Then go to checkout page</li>
                    <li class="h-b-li">If you are a new user, please click on Sign Up.provide us uour valid inormation information.</li>
                    <li class="h-b-li">Complete your checkout, we received your order, and for order confirmation or customer service contact with you</li>
                  </ul>
                </div>
                 <div class="how-to-buy"  :class="{block:tab_content==3}">
                  <ul>
                    <li class="h-b-li">If your product is damaged, defective, incorrect or incomplete at the time of delivery, please file a return request on call to customer care support number within 3 days of the delivery date</li>
                    <li class="h-b-li">Change of mind is not applicable as a Return Reason for this product</li>

                  </ul>
                </div>

              </div>
              </div>


        <div class="row realted-producs">
            <h3 class="title" >Related Products</h3>
             <div class="col-lg-2 col-sm-6 col-md-6 col-xs-6 width-20 small_width" v-for="(product,index) in related_products" :key="index">
            <div class="product-card ">
              <div class="product-card-body">
                <router-link :to="{name: 'single', params: { slug: product.slug } }">
                 <v-lazy-image
                     :src="base_url+product.product_image[0].product_image"
                     :src-placeholder="base_url+'images/preview.png'"
                 />
                </router-link>
                <div class="product-detail small-detail">
                  <h4>   <router-link class="product-link" :to="{name: 'single', params: { slug: product.slug } }">{{ product.name }}</router-link ></h4>
                  <p class="price">
                    <span class="price-new">{{
                      product.price
                    }}</span>
                    <span
                      class="price-old"
                      v-if="product.discount"
                      >&#2547; {{ product.sale_price }}</span
                    >
                    <span v-if="product.discount > 0" class="discount"> <i class="fa fa-star discount_star"> </i> {{ ((product.discount/product.sale_price)*100).toFixed(0) }}%  <span class="d_off">off</span> </span>

                  </p>
                </div>
              </div>
               <div class="product-card-footer">
                    <button class="btn btn-primary btnQuick" style="cursor:pointer" @click="quick_v_product_id=product.id"  >view</button>
              </div>
            </div>
          </div>
           <infinite-loading @infinite="getRelatedProducts">
            <div slot="no-more"></div>
          </infinite-loading>

      </div>

      </div>
    </div>
    <frontend-footer></frontend-footer>
      <quick-view v-if="quick_v_product_id" v-on:clicked="closedModal($event)" :quick_v_p_id="quick_v_product_id">  </quick-view>

  </div>

</template>


<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import imageZoom from 'vue-image-zoomer';
import 'lazysizes'

export default {
  beforeCreated() {
    this.validation();
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.validation();
    }, 200);
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
      disabled: true,
      variant_index: "",
      base_url: this.$store.state.image_base_link,
       cart: {
        product_id: "",
        variant_id: "",
        attrribute_id: "",
        quantity: 1,
      },
      related_products: [],
      page: 1,
      tab_content:1,
      quick_v_product_id:"",
      o_modal:false,
      zoomerOptions: {
        zoomFactor: 4,
        pane: "pane",
        hoverDelay: 300,
        namespace: "zoomer-left",
        move_by_click: true,
        scroll_items: 4,
        choosed_thumb_border_color: "#ff3d00",
        scroller_position: "bottom",

        // zoomer_pane_position: "right",
      },
    };
  },
  methods: {

    CartToAdd() {
      axios
        .get("/_public/addToCart", {
          params: {
            slug: this.$route.params.slug,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
         // console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "success",
              duration: 2000,
            });
            this.$store.dispatch("getCartContent");
          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "error",
              duration: 4000,
            });
          }
        })
        .then((error) => {
          // console.log(error);
        });
    },
     buyNow() {
      axios
        .get("/_public/addToCart", {
          params: {
            slug: this.$route.params.slug,
            attribute_id: this.cart.attrribute_id,
            variant_id: this.cart.variant_id,
            quantity: this.cart.quantity,
          },
        })
        .then((resp) => {
         // console.log(resp);
          if (resp.data.status == "SUCCESS") {
              this.$store.dispatch("getCartContent");
              this.$toasted.show(resp.data.message, {
              position: "bottom-left",
              type: "success",
              duration: 2000,
            });

             let user=this.user;
              if(user.mobile_no){
                  this.$router.push({ name: "Chekout" });
              }else{
                this.$router.push({ name: "otpLogin" });
              }

          } else if (resp.data.status == "error") {
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "error",
              duration: 4000,
            });
          }
        })
        .then((error) => {
          // console.log(error);
        });
    },
    validation() {
      if (this.cart.quantity < 1) {
        this.cart.quantity = 1;
        alert("Quantity at least 1");
        return;
      }
      if (this.product.product_attribute) {
        if (this.cart.attrribute_id < 1) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
      } else {
        this.disabled = false;
      }
    },
    SelectVaraint() {
     // this.product.product_variant.length=0;
      let index = this.variant_index;
      let variant_id = this.product.product_variant[index].variant_id;
      let attribute_id = this.product.product_variant[index].variant.attribute_id;
      this.cart.attrribute_id = attribute_id;
      this.cart.variant_id = variant_id;
      this.validation();
    },

    getRelatedProducts($state) {
      axios
        .get("/_public/related/products/?page="+this.page, {
          params: {
            product_slug: this.$route.params.slug,
          },
        })
        .then((resp) => {
          if (resp.data.data.length) {
            this.page += 1;
            this.related_products.push(...resp.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((error) => {
         // console.log(error);
        });
    },
  closedModal(close){
       this.quick_v_product_id="";
    },




  },

  mounted() {
    this.getRelatedProducts();
    this.$store.dispatch("product_images", this.$route.params.slug);
    this.$store.dispatch("single_product", this.$route.params.slug);
    this.$store.dispatch("user");

  },

  computed: {
    product() {
      return this.$store.getters.single_product;
    },
    product_images(){

      return this.$store.getters.product_images;
    },
     user() {
      return this.$store.getters.user;
    },

  },

  components: {
    Loading,
    imageZoom
  },

  watch:{
    product_images:function(value){

      if(Object.keys(value).length>0){
       this.isLoading=false;
      }

    }
  }
};
</script>

<style scoped>
img.responsive-image.preview-box {
  width: 350px !important;
  height: 350px !important;

}

.product-details-tabe {
  margin-top: 20px;
}


.btnQuick:hover{

   background: #ff4d03;

}

.v-lazy-image {
  filter: blur(1px);
  transition: filter 0.5s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}


</style>

