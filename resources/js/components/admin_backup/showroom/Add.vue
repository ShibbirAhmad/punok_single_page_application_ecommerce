<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'showroom' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i>
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">showroom</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add Showroom</h3>
              </div>
              <div class="box-body">
                <form
                  @submit.prevent="add"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="alert-danger alert" v-if="error">
                    {{ error }}
                  </div>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      class="form-control"
                      v-model="form.name"
                      :class="{ 'is-invalid': form.errors.has('name') }"
                      type="text"
                      name="name"
                      required
                      placeholder="showroom"
                    />
                    <has-error :form="form" field="name"></has-error>
                  </div>
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      class="form-control"
                      v-model="form.address"
                      :class="{ 'is-invalid': form.errors.has('address') }"
                      type="text"
                      name="address"
                      required
                      placeholder="showroom location"
                    />
                    <has-error :form="form" field="address"></has-error>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Contact Person</label>
                        <input
                          class="form-control"
                          v-model="form.contact_person"
                          :class="{
                            'is-invalid': form.errors.has('contact_person'),
                          }"
                          type="text"
                          name="contact_person"
                          required
                          placeholder="Ex:Mohammad.."
                        />
                        <has-error
                          :form="form"
                          field="contact_person"
                        ></has-error>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Contact Number</label>
                        <input
                          class="form-control"
                          v-model="form.contact_number"
                          :class="{
                            'is-invalid': form.errors.has('contact_number'),
                          }"
                          type="text"
                          name="contact_number"
                          required
                          maxlength="11"
                          placeholder="01xxxxxxxxx"
                        />
                        <has-error
                          :form="form"
                          field="contact_number"
                        ></has-error>
                      </div>
                    </div>
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
  data() {
    return {
      form: new Form({
        name: "",
        address: "",
        contact_person: "",
        contact_number: "",
      }),
      error: "",
    };
  },

  methods: {
    add() {
      this.form
        .post("/api/showroom/add", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$router.push({ name: "showroom" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.error = "some thing went to wrong";
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = "some thing went to wrong";
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000,
          });
        });
    },
  },
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
</style>
