<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div class="row slider_row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <carousel
          v-if="sliders"
          :items="1"
          :nav="false"
          :autoplay="true"
          :autoplayTimeout="2000"
        >
          <a v-for="slider in sliders" :href="slider.url" :key="slider.id">
            <img :src="base_url + slider.image" />
          </a>
        </carousel>
      </div>
    </div>

    <div class="container">
      <div class="new_arrival_section">
        <h4 class="arrival_heading">Top Selling Products</h4>
        <div class="row">
          <vue-horizontal-list
            :items="best_selling_produtcs"
            :options="new_arrival_options"
          >
            <template v-slot:default="{ item }">
              <div class="col-lg-2 col-md-6 item">
                <div class="new_arrival_container">
                  <div class="new_arrival_card">
                    <div class="new_arrival_card_body text-center">
                      <router-link
                        :to="{
                          name: 'single',
                          params: { slug: item.slug },
                        }"
                      >
                        <img
                          v-if="item.product_image.length"
                          :src="base_url + item.product_image[0].product_image"
                        />
                      </router-link>
                      <p class="arrival_link">
                        <router-link
                          :to="{
                            name: 'single',
                            params: { slug: item.slug },
                          }"
                          >{{ item.name }}</router-link
                        >
                      </p>
                      <p class="price">
                        <span class="price-new"> &#2547; {{ item.price }}</span>
                        <span class="price-old" v-if="item.discount">
                          &#2547; {{ item.sale_price }}</span
                        >

                        <span
                          v-if="item.discount > 0"
                          class="best_selling_discount"
                        >
                          <i class="fa fa-star best_s_star"> </i>
                          {{
                            (
                              (item.discount / item.sale_price) *
                              100
                            ).toFixed(0)
                          }}% <span class="d_off">off</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </vue-horizontal-list>
        </div>
      </div>

      <div>
        <div
          class="product_carousel sale_campaign"
          v-if="campaign.campaign_products.length > 0"
          v-for="(campaign, index) in sale_campaign"
          :key="index"
          :style="{
            backgroundColor: campaign.background_color,
            border: campaign.border_width + 'px solid ' + campaign.border_color,
          }"
        >
          <div>
            <h3>{{ campaign.name }}</h3>
            <span class="campaign_clock">
              <flip-countdown
                :deadline="campaign.expired_date + ' 00:00:00'"
              ></flip-countdown>
            </span>
          </div>
          <carousel
            v-if="Object.keys(campaign.campaign_products).length"
            :nav="false"
            :autoplay="true"
            :autoplayTimeout="4000"
            :responsive="{ 0: { items: 2 }, 600: { items: 5 } }"
          >
            <div
              class="product-thumb clearfix"
              v-for="campaign_product in campaign.campaign_products"
              :key="campaign_product.id"
            >
              <div class="image">
                <router-link
                  :to="{
                    name: 'single',
                    params: { slug: campaign_product.slug },
                  }"
                >
                  <img
                    v-if="campaign_product.product_image"
                    :src="
                      base_url + campaign_product.product_image[0].product_image
                    "
                    :alt="campaign_product.name"
                    :title="campaign_product.name"
                    class="img-responsive"
                  />
                </router-link>
              </div>
              <div class="caption">
                <h4>
                  <router-link
                    :to="{
                      name: 'single',
                      params: { slug: campaign_product.slug },
                    }"
                    >{{ campaign_product.name }}</router-link
                  >
                </h4>
                <p class="price">
                  <span class="price-new">
                    &#2547; {{ campaign_product.price }}</span
                  >
                  <span class="price-old" v-if="campaign_product.discount">
                    &#2547; {{ campaign_product.sale_price }}</span
                  >

                       <span
                          v-if="campaign_product.discount > 0"
                          class="flas_selling_discount"
                        >
                          <i class="fa fa-star flash_s_star"> </i>
                          {{
                            (
                              (campaign_product.discount / campaign_product.sale_price) *
                              100
                            ).toFixed(0)
                          }}% <span class="d_off">off</span>
                        </span>
                </p>
              </div>
            </div>
          </carousel>
        </div>

        <div
          :style="{ backgroundImage: `url(${base_url + buy_get.banner})` }"
          class="parallax_background text-center"
        >
          <h2>
            <router-link
              class="btn btn_shop_now"
              :to="{ name: 'single', params: { slug: buy_get_p.slug } }"
              >SHOP NOW ></router-link
            >
          </h2>
        </div>

        <div class="row offer_collection">
          <div
            :style="{
              backgroundImage: `url(${
                base_url + occasion_campaign.background_image
              })`,
            }"
            class="col-lg-6 col-sm-12 col-md-6 collection_left"
          >
            <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="container_offer_header text-center">
                  <p>{{ occasion_campaign.quote }}</p>
                  <h4>{{ occasion_campaign.heading }}</h4>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="collection_content">
                  <img
                    v-if="occasion_p_top.product_image.length"
                    :src="
                      base_url + occasion_p_top.product_image[0].product_image
                    "
                  />

                  <div class="collect_sub_data text-center">
                    <p class="p1">{{ occasion_p_top.name }}</p>
                    <p class="p2">&#2547; {{ occasion_p_top.price }}</p>
                    <router-link
                      class="btn btn_more"
                      :to="{
                        name: 'single',
                        params: { slug: occasion_p_top.slug },
                      }"
                    >
                      More
                      <i class="fa fa-xs fa-arrow-right arrow_right_icon"></i>
                    </router-link>
                  </div>
                </div>

                <div class="collection_content">
                  <img
                    v-if="occasion_p_bottom.product_image.length"
                    :src="
                      base_url +
                      occasion_p_bottom.product_image[0].product_image
                    "
                  />

                  <div class="collect_sub_data text-center">
                    <p class="p1">{{ occasion_p_bottom.name }}</p>
                    <p class="p2">&#2547; {{ occasion_p_bottom.price }}</p>
                    <router-link
                      class="btn btn_more"
                      :to="{
                        name: 'single',
                        params: { slug: occasion_p_bottom.slug },
                      }"
                    >
                      More
                      <i class="fa fa-xs fa-arrow-right arrow_right_icon"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            :style="{
              backgroundImage: `url(${
                base_url + seasion_campaign.background_image
              })`,
            }"
            class="col-lg-6 col-sm-12 col-md-6 collection_right"
          >
            <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="container_offer_header text-center">
                  <p>{{ seasion_campaign.quote }}</p>
                  <h4>{{ seasion_campaign.heading }}</h4>
                </div>
              </div>
              <div class="col-md-6 col-xs-12 col-sm-12">
                <div class="collection_content">
                  <img
                    v-if="seasion_p_top.product_image.length"
                    :src="
                      base_url + seasion_p_top.product_image[0].product_image
                    "
                  />

                  <div class="collect_sub_data text-center">
                    <p class="p1">{{ seasion_p_top.name }}</p>
                    <p class="p2">&#2547; {{ seasion_p_top.price }}</p>
                    <router-link
                      class="btn btn_more"
                      :to="{
                        name: 'single',
                        params: { slug: seasion_p_top.slug },
                      }"
                    >
                      More
                      <i class="fa fa-xs fa-arrow-right arrow_right_icon"></i>
                    </router-link>
                  </div>
                </div>

                <div class="collection_content">
                  <img
                    v-if="seasion_p_bottom.product_image.length"
                    :src="
                      base_url + seasion_p_bottom.product_image[0].product_image
                    "
                  />

                  <div class="collect_sub_data text-center">
                    <p class="p1">{{ seasion_p_bottom.name }}</p>
                    <p class="p2">&#2547; {{ seasion_p_bottom.price }}</p>
                    <router-link
                      class="btn btn_more"
                      :to="{
                        name: 'single',
                        params: { slug: seasion_p_bottom.slug },
                      }"
                    >
                      More
                      <i class="fa fa-xs fa-arrow-right arrow_right_icon"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row caegories_and_new_product_row">
          <h4 class="random_heading">What's Hot</h4>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <h4 class="new_random_heading">New Products</h4>
            <vue-horizontal-list
              :items="new_rendom_products"
              :options="new_random_options"
            >
              <template v-slot:default="{ item }">
                <div class="col-lg-2 col-md-6 item">
                  <div class="new_random_card">
                    <div class="new_random_card_body text-center">
                      <router-link
                        :to="{
                          name: 'single',
                          params: { slug: item.slug },
                        }"
                      >
                        <img
                          v-if="item.product_image.length"
                          :src="base_url + item.product_image[0].product_image"
                        />
                      </router-link>
                      <p class="new_random_link">
                        <router-link
                          :to="{
                            name: 'single',
                            params: { slug: item.slug },
                          }"
                          >{{ item.name }}</router-link
                        >
                      </p>
                      <p class="price">
                        <span class="price-new"> &#2547; {{ item.price }}</span>
                        <span class="price-old" v-if="item.discount">
                          &#2547; {{ item.sale_price }}</span
                        >

                        <span
                          v-if="item.discount > 0"
                          class="new_product_discount" >
                          <i class="fa fa-star new_p_star"> </i>
                          {{
                            (
                              (item.discount / item.sale_price) *
                              100
                            ).toFixed(0)
                          }}% <span class="d_off">off</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </template>
            </vue-horizontal-list>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <h4 class="banner_title">Categories</h4>
            <div class="banner_container">
              <div
                class="col-lg-2 col-md-2 col-sm-6 col-xs-4"
                v-for="offer in getOffers"
                :key="offer.id"
              >
                <a :href="offer.url" target="_blank" class="">
                  <img
                    title="offer"
                    class="banner_image"
                    :src="base_url + offer.image"
                  />
                  <div
                    class="overlaw-offer"
                    :class="{ 'overlaw-offer-height': offer.id % 2 == 0 }"
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-if="isScroll > 0">
          <div
            class="c-product"
            v-for="(sub_category, idx) in home_page_products"
            :key="idx"
            v-if="sub_category.products.length"
          >
            <div class="c-product-header">
              <h4 class="category-heading">{{ sub_category.name }}</h4>
              <div
                class="s-category"
                v-if="sub_category.sub_sub_category.length > 0"
              >
                <div
                  :id="'subCategoryNameView' + sub_category.id"
                  class="sub_category_view"
                >
                  <router-link
                    :to="{
                      name: 'PublicSubSUbCategory',
                      params: { slug: sub_sub_category.slug },
                    }"
                    class="sub-category-name"
                    v-for="(
                      sub_sub_category, index
                    ) in sub_category.sub_sub_category"
                    :key="index"
                    v-if="index <= 7"
                    >{{ sub_sub_category.name }}</router-link
                  >

                  <router-link
                    :to="{
                      name: 'PublicSubCategory',
                      params: { slug: sub_category.slug },
                    }"
                    class="c-v-all"
                    >View All
                  </router-link>
                </div>
              </div>
            </div>

            <div class="row">
              <div
                class="col-lg-2 col-sm-4 col-md-2 col-xs-6 width-20 small_width"
                v-for="(product, index) in sub_category.products"
                :key="index"
                v-if="index < 10"
              >
                <div class="product-card">
                  <div class="product-card-body">
                    <router-link
                      :to="{ name: 'single', params: { slug: product.slug } }"
                    >
                      <v-lazy-image
                        v-if="product.product_image.length"
                        :src="base_url + product.product_image[0].product_image"
                        :src-placeholder="base_url + 'images/preview.png'"
                      />
                    </router-link>
                    <div class="product-detail">
                      <h4>
                        <router-link
                          class="product-link"
                          :to="{
                            name: 'single',
                            params: { slug: product.slug },
                          }"
                          >{{ product.name }}</router-link
                        >
                      </h4>
                      <p class="price">
                        <span class="price-new"
                          >&#2547; {{ product.price }}</span
                        >
                        <span class="price-old" v-if="product.discount">
                          &#2547;{{ product.sale_price }}</span>
                        <span
                          v-if="product.discount > 0"
                          class="discount"
                        >
                          <i class="fa fa-star discount_star"> </i>
                          {{
                            (
                              (product.discount / product.sale_price) *
                              100
                            ).toFixed(0)
                          }}% <span class="d_off">off</span>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="product-card-footer">
                    <button
                      class="btn btn-primary btnQuick"
                      style="cursor: pointer"
                      @click="quick_v_product_id = product.id"
                    >
                      view
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <infinite-loading @distange="0.5" @infinite="home_page_product">
            <div slot="no-more"></div>
          </infinite-loading>
        </div>
      </div>

      <div class="row service_row">
        <div class="col-md-3 col-sm-6 text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner">
                <i class="fa fa-thumbs-up service_icon"> </i>
              </div>
            </div>
            <h4>High-quality Goods</h4>
            <p>Enjoy top quality items for less</p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner">
                <i class="fa fa-headphones service_icon"> </i>
              </div>
            </div>
            <h4>24/7 Livechat</h4>
            <p>Get instant assistance whenever you need it</p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner">
                <i class="fa fa-truck service_icon"> </i>
              </div>
            </div>
            <h4>Express Shipping</h4>
            <p>Fast & reliable delivery options</p>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 text-center">
          <div class="service_container">
            <div class="service_outer">
              <div class="service_inner">
                <i class="fa fa-credit-card service_icon"> </i>
              </div>
            </div>
            <h4>Secure Payment</h4>
            <p>Multiple safe payment methods</p>
          </div>
        </div>
      </div>
    </div>

    <frontend-footer v-if="isScroll > 0"></frontend-footer>
    <quick-view
      v-if="quick_v_product_id"
      v-on:clicked="closedModal($event)"
      :quick_v_p_id="quick_v_product_id"
    >
    </quick-view>
  </div>
</template>

<script>
import Vue from "vue";
import FlipCountdown from "vue2-flip-countdown";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import carousel from "vue-owl-carousel";
import VueHorizontalList from "vue-horizontal-list";
Vue.use(Loading);

export default {

  created() {
    this.getOccatoinCampaign();
    this.getSeasionCampaign();
    this.getBuyGetCampaign();
  },
  data() {
    return {
      loading: true,
      // sub_categories: [],
      page: 1,
      offers: [],
      product_id: null,
      base_url: this.$store.state.image_base_link,
      isScroll: 0,
      quick_v_product_id: "",
      o_modal: false,
      home_page_products: [],
      new_arrival_options: {
        responsive: [
          { end: 450, size: 3 },
          { start: 450, end: 768, size: 4 },
          { start: 768, end: 992, size: 4 },
          { size: 6 },
        ],
        list: {
          windowed: 600,
          padding: 24,
        },
        position: {
          start: 0,
        },
      },
      new_random_options: {
        responsive: [
          { end: 576, size: 3 },
          { start: 576, end: 768, size: 3 },
          { start: 768, end: 992, size: 3 },
          { size: 3 },
        ],
        list: {
          windowed: 600,
          padding: 10,
        },
        position: {
          start: 2,
        },
        autoplay: { play: true, repeat: true, speed: 3000 },
      },
      occasion_campaign: "",
      occasion_p_top: "",
      occasion_p_bottom: "",

      seasion_campaign: "",
      seasion_p_top: "",
      seasion_p_bottom: "",
      buy_get: "",
      buy_get_p: "",
    };
  },
  methods: {
    getOccatoinCampaign() {
      axios.get("/_public/api/publish/occasional/campaign").then((resp) => {
        this.occasion_campaign = resp.data.occasion;
        this.occasion_p_top = resp.data.occasion_p_top;
        this.occasion_p_bottom = resp.data.occasion_p_bottom;
      });
    },
    getSeasionCampaign() {
      axios.get("/_public/api/publish/seasional/campaign").then((resp) => {
        this.seasion_campaign = resp.data.seasion;
        this.seasion_p_top = resp.data.seasion_p_top;
        this.seasion_p_bottom = resp.data.seasion_p_bottom;
      });
    },

    getBuyGetCampaign() {
      axios
        .get("/_public/api/publish/buy/one/get/one/campaign")
        .then((resp) => {
          this.buy_get = resp.data.buy_get;
          this.buy_get_p = resp.data.buy_get_p;
        });
    },
    home_page_product($state) {
      axios
        .get("/_public/products?page=" + this.page)
        .then((resp) => {
          if (resp.data.data.length) {
            this.page += 1;
            this.home_page_products.push(...resp.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((e) => {});
    },
    handleScrol() {
      this.isScroll = 1;
    },

    productDetals(product_id) {
      this.prdoct_modal = true;
      this.product_id = product_id;
    },
    closedModal(close) {
      this.quick_v_product_id = "";
    },
    showCategoryName(id) {
      var x = document.getElementById("subCategoryNameView" + id);
      console.log(x);
      console.log(id);
      x.classList.toggle("displayeBlok");
    },
  },
  components: {
    Loading,
    carousel,
    FlipCountdown,
    VueHorizontalList,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrol);
    this.$store.dispatch("category");
    this.$store.dispatch("sliders");
    this.$store.dispatch("offer_banner");
    this.$store.dispatch("sale_campaign");
  },

  computed: {
    category() {
      return this.$store.getters.categories;
    },
    slider_banner() {
      return this.$store.getters.slider_banner;
    },
    best_selling_produtcs() {
      return this.$store.getters.best_selling_produtcs;
    },
    new_rendom_products() {
      return this.$store.getters.new_rendom_products;
    },
    sliders() {
      return this.$store.getters.sliders;
    },
    getOffers() {
      return this.$store.getters.offer_banner;
    },

    sale_campaign() {
      return this.$store.getters.sale_campaign;
    },

    sub_categories() {
      return this.$store.getters.home_page_products;
    },
  },
  watch: {
    isScroll: function (value) {
      if (value == 1) {
        this.$store.dispatch("home_page_products");
      }
    },
  },
};

//show sub  menu in mobile menu
document.addEventListener("DOMContentLoaded", () => {
  //set a time our function. this function call after 2 sec on domloaded
  setTimeout(() => {
    //find the click element
    let sub_menu = document.getElementsByClassName("show-sub");

    for (let i = 0; i < sub_menu.length; i++) {
      //set a click event
      sub_menu[i].addEventListener("click", function () {
        let show_sub_menu = sub_menu[i].parentElement.querySelector(
          ".left-sub-menu"
        );
        //set active class
        show_sub_menu.classList.toggle("nav-active");
        sub_menu[i].classList.toggle("fa-minus");
      });
    }
  }, 2000);
});
</script>

<style scoped>
.v-lazy-image {
  filter: blur(1px);
  transition: filter 0.3s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
