<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'resellerHome' }" class="btn btn-primary"
            ><i class="fa fa-arrow-right"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Reseller</a>
          </li>
          <li class="active">Edit</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Edit Reseller Information</h3>
              </div>
              <div class="box-body">
                <h1 v-if="loading"><i class="fa fa-spinner fa-spin"></i></h1>
                <form
                  v-else
                  @submit.prevent="updateReseller"
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
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Name</label>

                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          autofocus
                          autocomplete="off"
                          placeholder="name"
                        />

                        <has-error :form="form" field="name"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Company Name</label>

                        <input
                          type="text"
                          v-model="form.companyName"
                          :class="{
                            'is-invalid': form.errors.has('companyName'),
                          }"
                          class="form-control"
                          name="companyName"
                          autocomplete="off"
                          autofocus
                          id=""
                        />

                        <has-error :form="form" field="companyName">
                        </has-error>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          v-model="form.email"
                          type="email"
                          name="email"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('email') }"
                          autofocus
                          autocomplete="off"
                          placeholder="email"
                        />
                        <has-error :form="form" field="email"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('phone') }"
                          autocomplete="off"
                          autofocus
                          v-model="form.phone"
                          name="phone"
                          id=""
                        />
                        <has-error :form="form" field="phone"> </has-error>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="bkash">Bkash Number</label>
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('bkashNumber') }"
                      autocomplete="off"
                      autofocus
                      v-model="form.bkashNumber"
                      name="bkashNumber"
                      id=""
                    />
                    <has-error :form="form" field="bkashNumber"> </has-error>
                  </div>

                  <div class="form-group">
                    <label for="address">Address</label>

                    <textarea
                      v-model="form.address"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('address') }"
                      name="address"
                      id=""
                      rows="3"
                    ></textarea>

                    <has-error :form="form" field="address"> </has-error>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <br />
                      <div class="form-group">
                        <input
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('image') }"
                          type="file"
                          @change="uploadImage"
                          name="image"
                        />
                        <has-error :form="form" field="image"></has-error>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group text-center">
                        <img
                          :src="
                            form.image
                              ? base_url + form.image
                              : base_url + 'images/static/noimage.png'
                          "
                          class="profile_image"
                          id="PreviewImage"
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
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);

    this.getReseller();
  },
  data() {
    return {
      form: new Form({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        bkashNumber: "",
        address: "",
        image: "",
      }),
      base_url: this.$store.state.image_base_link,
      loading: true,
      errors: [],
      preview_image: "",
    };
  },

  methods: {
    updateReseller() {
      this.form
        .post("/api/reseller/update/" + this.$route.params.id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })

        .then((resp) => {
          if (resp.data.success == "OK") {
            this.$router.push({ name: "resellerHome" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          }
        })

        .catch((e) => {
          this.errors = [];
          this.errors.push(e.response.data.errors);
        });
    },

    getReseller() {
      axios.get("/api/reseller/edit/" + this.$route.params.id).then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.form.name = resp.data.reseller.name;
          this.form.companyName = resp.data.reseller.company_name;
          this.form.email = resp.data.reseller.email;
          this.form.phone = resp.data.reseller.phone;
          this.form.bkashNumber = resp.data.reseller.bkash_number;
          this.form.address = resp.data.reseller.address;
          this.form.image = resp.data.reseller.photo;
        }
      });
    },

    uploadImage(e) {
      const file = e.target.files[0];
      this.form.image = file;
      ///let image file size check
      let reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();

        img.onload = () => {
          console.log(img.width + "-" + img.height);
        };
        document.getElementById("PreviewImage").src = evt.target.result;
      };
    },
  },
  computed: {},
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
.profile_image {
  width:100px;
  height: 100px;
  border-radius: 50%;
  border:2px solid #ddd
}
</style>
