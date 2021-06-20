<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'coupon' }" class="btn btn-primary"
            ><i class="fa fa-arrow-right"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>cupon</a>
          </li>
          <li class="active">code</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add Coupon </h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="addCoupon"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <ul  class="list-group" v-if="errors">
                    <li
                      class="list-group-item"
                      v-for="(error, index) in errors"
                      :key="index"
                    >
                      {{ error.name }}
                    </li>
                  </ul>
              
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                    <label> Coupon Code  </label>
                    <input
                      v-model="form.code"
                      type="text"
                      name="code"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('code') }"
                    />
                    <has-error :form="form" field="code"></has-error>
                  </div>
                     </div>
                    <div class="col-md-6 col-sm-6"> 
                         <br>
                           <a @click="codeGenerator" class="btn btn-info " style="margin-top:5px"  > Generate Code </a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="date">Start Date </label>
                        <date-picker
                          autocomplete="off"
                          :config="options"
                          v-model="form.start_date"
                        >
                        </date-picker>
                      </div>
                    </div>
                    <div class="col-md-6">
                       <div class="form-group">
                        <label for="date">Expire Date </label>
                        <date-picker
                          autocomplete="off"
                          :config="options"
                          v-model="form.expire_date"
                        >
                        </date-picker>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <br>
                      <div style="margin-top:5px;" class="form-group">
                        <select :class="{'is-invalid':form.errors.has('discount_type') }" v-model="form.discount_type" class="form-control">
                          <option value="select discount type" disabled>select discount type</option>
                          <option value="percentage"> percentage </option>
                          <option value="decimal"> Decimal</option>
                        </select>
                    
                        <has-error
                          :form="form"
                          field="discount_type"
                        ></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Discount Amount</label>
                        <input
                          v-model="form.discount_amount"
                          type="number"
                          name="discount_amount"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('discount_amount') }"
                        />
                        <has-error :form="form" field="discount_amount"></has-error>
                      </div>
                    </div>
                  </div>
                  <br>
                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i>Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import datePicker from "vue-bootstrap-datetimepicker";


Vue.component(HasError.name, HasError);

export default {
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      form: new Form({
        code: "",
        start_date: "",
        expire_date: "",
        discount_type: "select discount type",
        discount_amount: "",
      }),
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
      loading: true,
      errors: [],
    };
  },

  methods: {
    addCoupon() {
      this.form
        .post("/api/coupon/code/add", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.$router.push({ name: "coupon" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          }
        });
    },

  codeGenerator(){
   return this.form.code = Math.floor(100000 + Math.random() * 900000);
  }

  },

};
</script>

<style scoped>

.box-body{
      padding: 0px 10px;
      margin-top: -20px;
}


</style>
