<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'showroom_manager' }"
            class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Manager</a>
          </li>
          <li class="active">Add</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-8 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border text-center">
                <h3 class="box-title">Add Showroom Manager</h3>
              </div>
              <div class="box-body">
                <form
                  @submit.prevent="addManager"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="">Showroom</label>
                        <select
                          v-model="form.showroom_id"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('showroom_id'),
                          }"
                          name="showroom_id"
                        >
                          <option disabled>select showroom</option>
                          <option
                            v-for="(showroom, s_idx) in showrooms"
                            :value="showroom.id"
                            :key="s_idx"
                          >
                            {{ showroom.name }}
                          </option>
                        </select>
                        <has-error :form="form" field="showroom_id">
                        </has-error>
                      </div>
                    </div>
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

                      <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Image</label>
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
                      <div class="for-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          required
                          v-model="form.password"
                          class="form-control"
                          :class="{'is-invalid':form.errors.has('password')}"
                        />
                        <has-error :form="form" field="password"> </has-error>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="address">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('address') }"
                      autocomplete="off"
                      autofocus
                      v-model="form.address"
                      name="address"
                    />
                    <has-error :form="form" field="address"> </has-error>
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
import datePicker from "vue-bootstrap-datetimepicker";

Vue.component(HasError.name, HasError);

export default {
  created() {
    this.getShowroms();
  },
  data() {
    return {
      form: new Form({
        showroom_id: "select showroom",
        name: "",
        email: "",
        phone: "",
        address: "",
        image: "",
        password: "",
      }),
      loading: true,
      showrooms: "",
      preview_image: "",
    };
  },

  methods: {
    getShowroms() {
      axios.get("/api/showroom/list").then((resp) => {
        if (resp.data.status == "SUCCESS") {
          this.showrooms = resp.data.showrooms;
        }
      });
    },
    addManager() {
    if ( typeof(this.form.showroom_id) === typeof("string") ) {
        window.alert("please,select any showroom");
          return ;
      }
      this.form
        .post("/api/showroom/manager/add", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.$router.push({ name: "showroom_manager" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              showroom: "top-center",
              duration: 4000,
            });
          }
        });
    },

    uploadImage(e) {
      const file = e.target.files[0];
      this.form.image = file;
    },
  },
  computed: {},
};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
</style>
