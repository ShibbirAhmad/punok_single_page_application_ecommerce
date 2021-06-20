<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{
              name: 'print_house_details',
              params: { id: $route.params.id },
            }"
            class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Print</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Receive Printed Product</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="receivePrint"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Date</label>

                        <date-picker
                          autocomplete="off"
                          v-model="form.date"
                          :config="options"
                          :class="{ 'is-invalid': form.errors.has('date') }"
                        ></date-picker>

                        <has-error :form="form" field="date"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label> Invoice</label>
                        <input
                          v-model="form.invoice_no"
                          type="text"
                          name="invoice_no"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('invoice_no'),
                          }"
                          placeholder="invoice no"
                        />
                        <has-error :form="form" field="invoice_no"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                     <select 
                     class="form-control" 
                      v-model="form.product_name"
                       :class="{'is-invalid' : form.errors.has('product_name')}"
                       >
                       <option disabled value="select product"> select product </option>
                       <option v-for="(item,index) in printed_list" :key="index" :value="index" > 
              
                          {{ index }} 
                          </option>
                     </select>
                    <has-error :form="form" field="product_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label> Delivered Quantity </label>
                    <input
                      v-model="form.qty"
                      type="text"
                      name="qty"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('qty') }"
                      autocomplete="off"
                      placeholder="5000"
                    />
                    <has-error :form="form" field="qty"></has-error>
                  </div>

                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                      >Submit
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

Vue.component(HasError.name, HasError);
export default {
  name: "Add",
  created() {
    this.cDate();
    this.getPrintedProducts();
  },
  data() {
    return {
      form: new Form({
        invoice_no: "",
        product_name: "select product",
        company_id: this.$route.params.id ,
        date: "",
        qty: "",
      }),
      printed_list:"",
      loading: true,
      error: "",
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
    };
  },

  methods: {
    getPrintedProducts(){
      axios.get('/api/get/printed/products/'+this.$route.params.id)
      .then((resp)=>{
        console.log(resp);
        this.printed_list=resp.data ; 
      })
    },

    receivePrint() {
      this.form
        .post("/api/receive/printed/product/"+this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.$router.push({ name: "print_house_details", params:{ id: this.$route.params.id} });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-right",
              duration: 4000,
            });
          } else {
            this.error = "some thing want to wrong";
          }
        })
    },

    cDate() {
      //current date
      let d = new Date();

      //current mount
      //current day
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let output =
        d.getFullYear() +
        "-" +
        (("" + month).length < 2 ? "0" : "") +
        month +
        "-" +
        (("" + day).length < 2 ? "0" : "") +
        day;
      this.form.date = output;

      this.loading = false;
    },
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
</style>
