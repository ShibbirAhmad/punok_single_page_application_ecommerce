<template>
  <div class="wrapper-wide">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
    ></loading>

    <frontend-header></frontend-header>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->
        <div class="row">
          <!--Middle Part Start-->
          <div id="content">
            <div class="row">
              <div class="col-lg-3"></div>
              <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div class="custom-box">
                  <h4 class="title" style="margin-bottom: 2px;border-bottom:none;">{{heading}}</h4>
                  <span style="margin-left: 40px; margin-top: 2px"
                    >


                  </span>
                  <br />
                  <br />
                  <form v-if="sendMode" @submit.prevent="sendotp">
                    <div class="form-group" >
                      <div class="row">
                        <div class="col-lg-8">

                        </div>
                      </div>
                     <label for="">{{ span_message }}</label>
                      <input
                        autofocus
                        type="text"
                        name="mobile_no"
                        class="form-control"
                        autocomplete="off"
                        maxlength="11"
                        :class="{ 'is-invalid': form.errors.has('mobile_no') }"
                        v-model="form.mobile_no"
                        placeholder="01xxx-xxxxxx"
                      />
                      <has-error :form="form" field="mobile_no"></has-error>
                    </div>
                    <br />
                    <button
                      class="btn btn-block btn-primary"
                      type="submit"
                      :disabled="form.busy || form.mobile_no.length != 11"
                    >
                      <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>SEND CODE
                    </button>
                     <br>
                     <router-link :to="{name:'UserLogin'}">Login with password</router-link>
                  </form>
                  <form @submit.prevent="verifyOtp" v-else>
                    <div class="form-group">
                      <input
                        type="text"
                        name="verify_code"
                        class="form-control"
                        autocomplete="off"
                        :class="{
                          'is-invalid': form.errors.has('verify_code'),
                        }"
                        v-model="verify_code"
                        placeholder="Enter Code"
                      />
                      <has-error :form="form" field="verify_code"></has-error>
                    </div>
                    <br />
                    <button
                      class="btn btn-block btn-primary"
                      type="submit"
                      :disabled="verify_code.length<4"
                    >
                      VERIFY
                    </button>
                  </form>
                  <br>
                     <!-- <router-link :to="{name:'UserLogin'}"  class="btn btn-block btn-info" type="submit">
                  LOGIN WITH PASSWORD
                </router-link> -->
                <br/>
                <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { Form, HasError } from "vform";

export default {
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  data() {
    return {
      form: new Form({
        mobile_no: "",
      }),
      isLoading: true,
      fullPage: true,

      disabled: true,
      sendMode: true,
      verify_code: "",
      span_message:"MOBILE NUMBER",
      heading:"LOGIN WITH MOBILE NUMBER"
    };
  },
  methods: {
    sendotp() {
      this.isLoading = true;
      this.form
        .post("/send/otp")
        .then((resp) => {
          if (resp.data) {
            this.isLoading = false;
            this.sendMode = false;

            this.$toasted.show(resp.data, {
              type: "success",
              position: "bottom-center",
              duration: 5000,

            });

            this.$refs.verify_code;
            this.span_message="PLEASE ENTER 6 DIGITS VERIFICATION CODE"
            this.heading="ENTER CODE";
          } else {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "bottom-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          this.isLoading = false;

          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "bottom-center",
            duration: 2000,
          });
        });
    },
    verifyOtp() {

      this.isLoading=true;
      axios
        .get("/verify/otp/code", {
          params: {
            mobile_no: this.form.mobile_no,
            verify_code: this.verify_code,
          },
        })
        .then((resp) => {

          this.isLoading=false;

          if(resp.data.status=="OK"){
             this.$toasted.show(resp.data.message, {
              type: "success",
              position: "bottom-center",
              duration: 4000,
          });
          localStorage.setItem("user_token", resp.data.user.mobile_no);
           this.$router.push({ name: "Chekout" });

        }else{
              this.$toasted.show(resp.data, {
              type: "error",
              position: "bottom-center",
              duration: 4000,
          });
          }
        })
        .catch((e) => {

          this.isLoading=false;

     });
    },
  },
  components: {
    Loading,
    HasError
  },
};
</script>