<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'subSubCategoryAdd' }"
            class="btn btn-primary"
          >
            <i class="fa fa-plus"></i>
          </router-link>
          <router-link :to="{ name: 'category' }" class="btn btn-success"
            >category</router-link
          >
          <router-link :to="{ name: 'SubCategory' }" class="btn btn-primary"
            >sub category</router-link
          >
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Sub category</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="box box-primary">
                <div class="box-header with-border ">
                  <div class="row">
                    <div class="col-lg-6">
                      <h3 class="box-title">sub sub category table</h3>
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="sub-sub category name"
                        v-model="search"
                        @keyup="searchResult"
                      />
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">category</th>
                        <th scope="col">sub category</th>
                        <th scope="col">image</th>
                        <th scope="col">status</th>
                        <th scope="col">discount</th>
                        <th scope="col">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(subSubCategory, index) in subSubCategories.data"
                        :key="index"
                        v-else
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ subSubCategory.name }}</td>
                        <td>{{ subSubCategory.category.name }}</td>
                        <td>{{ subSubCategory.sub_category.name }}</td>
                        <td>
                          <img
                            v-if="subSubCategory.image"
                            :src="basePath + subSubCategory.image"
                            class="img-circle small-image"
                            alt="User Image"
                          />
                          <img
                            v-else
                            :src="basePath + 'images/static/noimage.png'"
                            class="img-circle small-image"
                            alt="User Image"
                          />
                        </td>

                        <td>
                          <span v-if="subSubCategory.status == 1" class="badge"
                            >active</span
                          >
                          <span v-else class="badge">De-active</span>
                        </td>
                        <td> <span class="badge ">
                        {{ subSubCategory.discount_type=="flat"?subSubCategory.discount+' BDT' : subSubCategory.discount+' %'  }}
                          </span> </td>

                        <td>
                          <router-link
                            :to="{
                              name: 'subSubCategoryEdit',
                              params: { id: subSubCategory.id },
                            }"
                            class="btn btn-success btn-sm"
                          >
                            <i class="fa fa-edit"></i>
                          </router-link>

                          <a
                            class="btn btn-sm btn-warning"
                            title="De-active"
                            @click="deActive(subSubCategory)"
                            v-if="subSubCategory.status == 1"
                          >
                            <i class="fa fa-ban"></i>
                          </a>
                          <a
                            class="btn btn-sm btn-primary"
                            title="active"
                            @click="active(subSubCategory)"
                            v-else
                          >
                            <i class="fa fa-check"></i>
                          </a>
                          <button
                            @click="displayModal(subSubCategory.id,subSubCategory.discount,subSubCategory.discount_type)"
                            class="btn btn-sm btn-success"
                          >
                            apply discount
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="subSubCategories"
                        @pagination-change-page="getPagination"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ subSubCategories.from }}</strong> to
                        <strong>{{ subSubCategories.to }}</strong> of total
                        <strong>{{ subSubCategories.total }}</strong> entries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <modal name="discountModal" :width="250" :height="220">
      <div class="card" style="padding: 20px">
        <form @submit.prevent="applyDiscount" enctype="multipart/form-data">
          <div class="card-body">
            <div class="form-group">
              <label> Discount Value <span style="color: red">*</span></label>
              <input
                type="number"
                name="discount"
                :class="{ 'is-invalid': form.errors.has('discount') }"
                v-model="form.discount"
                class="form-control"
              />
              <has-error :form="form" field="discount"> </has-error>
            </div>

            <div class="form-group">
              <label for="">Discount Type </label>
              <select
                :class="{ 'is-invalid': form.errors.has('discount_type') }"
                v-model="form.discount_type"
                class="form-control"
              >
                <option value="select type" disabled>
                  select discount type
                </option>
                <option value="percentage">percentage</option>
                <option value="flat">flat</option>
              </select>

              <has-error :form="form" field="discount_type"></has-error>
            </div>
            <div class="form-group text-center">
              <button  type="submit" :disabled="form.busy" class="btn btn-success">Apply</button>
            </div>
          </div>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import Index from "../Index";
import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
export default {
  components: { Index },
  created() {
    this.subSubCategory();
    //this.interval = setInterval(() => this.subSubCategory(), 500 );
  },
  data() {
    return {
      subSubCategories: {},
      loading: true,
      search: "",
      basePath: this.$store.state.image_base_link,
      sub_c_id: "",
      form: new Form({
        discount: "",
        discount_type: "select type",
      }),
    };
  },
  methods: {
    subSubCategory() {
      axios
        .get("/list/subSubCategory")
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.subSubCategories = resp.data.subSubCategories;
            this.loading = false;
          } else {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },

    active(subSubCategory) {
      axios
        .get("/active/subSubCategory/" + subSubCategory.id)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.subSubCategory();
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 4000,
            });
          }
        })
        .catch((error) => {
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },
    deActive(subSubCategory) {
      axios
        .get("/deActive/subSubCategory/" + subSubCategory.id)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.subSubCategory();
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          } else {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 4000,
            });
          }
        })
        .catch((error) => {
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 4000,
          });
        });
    },
    searchResult() {
      if (this.search.length > 1) {
        this.loading = true;
        axios
          .get("/search/subSubCategory/" + this.search)
          .then((resp) => {
            if (resp.data.status == "SUCCESS") {
              this.loading = false;
              this.subSubCategories = resp.data.subSubCategories;
            } else {
              this.$toasted.show("some thing want to wrong", {
                type: "error",
                position: "top-center",
                duration: 4000,
              });
            }
          })
          .catch((error) => {
            this.$toasted.show("some thing want to wrong", {
              type: "error",
              position: "top-center",
              duration: 4000,
            });
          });
      } else {
        this.subSubCategory();
      }
    },
    getPagination(page = 1) {
      this.loading = true;
      axios.get("/list/subSubCategory?page=" + page).then((response) => {
        this.loading = false;
        this.subSubCategories = response.data.subSubCategories;
      });
    },
    displayModal($id,$discount,$discount_type) {
      this.form.discount=$discount;
      this.form.discount_type=$discount_type;
      this.$modal.show("discountModal");
      this.sub_c_id = $id;
    },
    applyDiscount() {
      this.form
        .post("/api/sub-sub-category/discount/add/"+this.sub_c_id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.form.discount = "";
            this.form.discount_type = "select type";
            this.sub_c_id = "";
            this.$modal.hide("discountModal");
            this.subSubCategory();
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "success",
              duration: 4000,
            });
          }
        });
    },
  },
  components: {
    HasError,
  },
};
</script>

<style scoped>
</style>
