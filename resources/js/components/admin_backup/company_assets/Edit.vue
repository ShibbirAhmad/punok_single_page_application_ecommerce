<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'company_assets' }" class="btn btn-primary"
            ><i class="fa fa-arrow-right"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>assets</a>
          </li>
          <li class="active">Add</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Edit Assets</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="updateAssets"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <ul class="list-group" v-if="errors">
                    <li
                      class="list-group-item"
                      v-for="(error, index) in errors"
                      :key="index"
                    >
                      {{ error.name }}
                    </li>
                  </ul>
                  <div class="form-group">
                    <label>Name of assets </label>
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('name') }"
                    />
                    <has-error :form="form" field="name"></has-error>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="date">Purchase Date </label>
                        <date-picker
                          autocomplete="off"
                          :config="options"
                          v-model="form.purchase_date"
                        >
                        </date-picker>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchase Price</label>
                        <input
                          v-model="form.purchase_price"
                          type="number"
                          name="purchase_price"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('purchase_price'),
                          }"
                        />
                        <has-error
                          :form="form"
                          field="purchase_price"
                        ></has-error>
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Present Price</label>
                        <input
                          v-model="form.present_price"
                          type="number"
                          name="present_price"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('present_price'),
                          }"
                        />
                        <has-error
                          :form="form"
                          field="present_price"
                        ></has-error>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchase Quantity</label>
                        <input
                          v-model="form.quantity"
                          type="number"
                          name="quantity"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('quantity') }"
                        />
                        <has-error :form="form" field="quantity"></has-error>
                      </div>
                    </div>
                  </div>
                     <div class="row">
                    <div class="col-md-4">
                      <h4>Total Amount:</h4>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <input
                          class="form-control"
                          disabled
                          type="text"
                          name=""
                          :value="form.present_price * form.quantity"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i> Save
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

Vue.component(HasError.name, HasError);

export default {
  created() {

    this.getAssetItem();
  },
  data() {
    return {
      form: new Form({
        name: "",
        quantity: "",
        purchase_date: "",
        purchase_price: "",
        present_price: "",
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
 
     getAssetItem(){
        axios.get('/api/company/assets/edit/'+this.$route.params.id)
        .then(resp=>{
            console.log(resp);
            if (resp.data.success == "OK") {
                this.form.name=resp.data.assets.name ;
                this.form.purchase_date=resp.data.assets.purchase_date ;
                this.form.purchase_price=resp.data.assets.purchase_price ;
                this.form.present_price=resp.data.assets.present_price ;
                this.form.quantity=resp.data.assets.quantity ;
                this.loading = false;
            }
        })
    },

    updateAssets() {
      this.form
        .post("/api/company/assets/update/"+this.$route.params.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.$router.push({ name: "company_assets" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          }
        });
    },
  },
  computed: {},
};
</script>

<style scoped>
.box-body{
      padding: 0px 10px;
      margin-top: -20px;
}

</style>
