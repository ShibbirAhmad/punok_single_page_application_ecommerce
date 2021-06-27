<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'product_transfer' }" class="btn btn-primary ">
            <i class="fa fa-arrow-left"></i>
          </router-link>

        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">product transfer</li>
        </ol>
      </section>
      <section class="content">
        <form @submit.prevent="searchProduct" id="searchProductform"></form>
        <form @submit.prevent="transferProductsIntoShowroom" @keydown="form.onKeydown($event)">
          <div class="row justify-content-center">
            <div
              class="alert alert-danger alert-dismissible"
              v-if="errors.length"
              role="alert"
            >
              <ul>
                <div v-for="error in errors">
                  <li>{{ error }}</li>
                  <br />
                </div>
              </ul>
            </div>
            <div class="col-lg-4">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Showroom Information</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                        <label for="">Showroom</label>
                        <select
                          v-model="form.showroom_id"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('showroom_id'),
                          }"
                          name="showroom_id" required
                         @change="showroomInformation(form.showroom_id)"
                        >
                          <option  disabled>select showroom</option>
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


                  <div class="form-group">
                    <label>Manager Name </label>
                    <input
                      type="text"
                      disabled
                      class="form-control"
                      v-model="manager_name"
                    />
                  </div>

                  <div class="form-group">
                    <label>Manager Phone </label>
                    <input
                      type="text"
                      disabled
                      class="form-control"
                      v-model="manager_phone"
                    />
                  </div>
                 <div class="form-group">
                    <label> Address </label>
                    <input
                      type="text"
                      disabled
                      class="form-control"
                      v-model="address"
                    />
                   </div>
                  <div class="form-group">
                    <label> Comments(optional) </label>
                       <textarea name="comment" v-model="form.comment" class="form-control" rows="3"></textarea>
                   </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="box box-success">
                <div class="box-header with-border">
                  <h3 class="box-title">Product information</h3>
                </div>
                <div class="box-body">
                  <div class="form-group">
                    <label>Scan Barcode || prodcut code</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      autofocus
                      autocomplete="off"
                      placeholder="Enter Product Code"
                      form="searchProductform"
                      v-model="product_code"
                    />
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <table class="table table-striped table-hover table-bordered ">
                        <thead>
                          <tr>
                            <th width="3%" >#</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th width="10%" title="purchase price ">Root Purchase Price</th>
                            <th width="15%" title=" assign showroom purchase price">Outlet Purchase Price</th>
                            <th>total</th>
                            <th width="5%" >Remove</th>
                          </tr>
                        </thead>
                        <tbody v-if="products.length > 0">
                          <tr v-for="(product, index) in products" :key="index">
                            <td>{{ index }}</td>
                            <td>
                              {{ product.name + "-" + product.product_code }}
                              <input type="hidden" :value="product.id" />
                            </td>

                            <td>
                              <input
                                type="number" class="form-control"
                                v-model="form.products[index].quantity"
                                @keyup="quantity(index)"
                                @change="quantity(index)"
                                style="width:70px"
                              />
                              <span class="badge badge-danger">{{ product.stock }}</span>
                            </td>
                            <td> <span class="badge badge-success "> &#2547; {{ product.purchase_price }}  </span> </td>
                            <td>
                              <input type="number" class="form-control" style="width:80px;"
                                v-model="form.products[index].price"
                                @keyup="priceChange(index)"
                                @change="quantity(index)"
                              />

                            </td>
                            <td>  &#2547; {{ form.products[index].total }}</td>
                            <td>
                              <a class="btn btn-danger btn-sm" @click="remove(index)"
                                ><i class="fa fa-trash"></i
                              ></a>
                            </td>
                          </tr>


                          <button
                            class="btn btn-success"
                            style="margin-top: 12px"
                            type="submit"
                            :disabled="form.busy"
                          >
                            Submit
                          </button>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading);

Vue.component(HasError.name, HasError);

export default {
  name: "Add",
  created() {

    this.getShowromList();
  },
  data() {
    return {
      form: new Form({
        showroom_id: "select showroom",
        products: [],
        status: 0,
        total: 0,
        comment:"",
      }),
      search_product_code: "",
      product_code: "",
      products: [],
      product_quantity: 1,
      errors: [],
      product_per_page: 10,
      base_link: this.$store.state.image_base_link,
      showrooms:"",
      manager_name:"",
      manager_phone:"",
      address:"",
      item:10,
    };
  },

  //method initial for submit data
  methods: {
      getShowromList() {
      axios.get("/api/showroom/list").then((resp) => {
        if (resp.data.status == "SUCCESS") {
          this.showrooms = resp.data.showrooms;
          this.loading = false;
        }
      });
    },
    showroomInformation($id){
       //collecting showroom details
       this.showrooms.forEach(element => {
          if (element.id==$id) {
            console.log(element);
            this.address=element.address;
            this.manager_name=element.manager.name;
            this.manager_phone=element.manager.phone;
          }
       });

    },
    transferProductsIntoShowroom() {
      if ( typeof(this.form.showroom_id) === typeof("string") ) {
        window.alert("please,select any showroom");
          return ;
      }
      //start progress bar when submit fomr
      this.$Progress.start();
      this.form
        .post("/api/transfer/product/into/showroom")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            //end progress bar when success resp
            this.$Progress.finish();
            this.$router.push({ name: "product_transfer" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 3000,
            });
            //other wise success, show a error
          } else {
            this.$toasted.show(resp.data.message, {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          this.errors = [];
          this.errors.push(error.response.data.errors);
          this.$Progress.finish();
        });
    },


    //method initial for search product
    searchProduct() {
      let length = this.product_code.length;
      console.log(length);
      //  alert(length)

      if (length == 4) {
        this.$Progress.start();
        axios.get("/search/product/with/code/" + this.product_code)
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "SUCCESS") {
              this.product_code = "";
              let product = {
                id: "",
                price: "",
                sale_price:"",
                quantity: 1,
                total: "",
              };
              for (let i = 0; i < resp.data.product.length; i++) {
                //check the product stcok availity
                if (resp.data.product[i].stock <= 0) {
                  return Swal.fire({
                    type: "warning",
                    title: "Wopps....",
                    html: `${resp.data.product[i].name} - <strong> ${resp.data.product[i].product_code} </strong> in <b>stcok not available</b>.`,
                  });
                }

                product.id = resp.data.product[i].id;
                product.price = resp.data.product[i].sale_price;
                product.sale_price = resp.data.product[i].sale_price;
                product.purchase_price = resp.data.product[i].purchase_price;
                product.total = resp.data.product[i].sale_price;
                console.log(this.products.push(resp.data.product[i]));
              }
              this.form.products.push(product);
              this.totalCalculation();
            }
            //when not resp success
            else {
              this.$toasted.show("Product not found with " + this.product_code, {
                position: "top-center",
                type: "danger",
                duration: 2000,
              });
            }
            this.$Progress.finish();
          })
          .catch((error) => {
            console.log(error);
            this.$Progress.finish();
          });
      }
    },

    //when chage qauntity
    quantity(index) {
      if(parseInt(this.products[index].stock ) < parseInt(this.form.products[index].quantity)){
        alert(`max quantity ${this.form.products[index].stock}`)
        this.form.products[index].quantity=this.form.products[index].stock;
        return;
      }
      this.form.products[index].total =
        parseInt(this.form.products[index].price) *
        parseInt(this.form.products[index].quantity);

      this.totalCalculation();
    },

    priceChange(index){
        this.form.products[index].total =
        parseInt(this.form.products[index].price) *
        parseInt(this.form.products[index].quantity);

      this.totalCalculation();
    },

    //total amount calculation
    totalCalculation() {
      let products = this.form.products;
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += parseInt(products[i].price) * parseInt(products[i].quantity);
      }
      this.form.total = parseInt(total);
    },


    remove(index) {
      // console.log(index);
      console.log(this.form.products[index]);
      this.form.products.splice(index, 1);
      this.products.splice(index, 1);
      this.totalCalculation();
    },


  },

};
//Date picker
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}

.autocomplete {
  max-height: 120px;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  z-index: 454;
}

.fa-search {
  height: 33px;
  width: 60px;
  margin-left: -25px;
}

.autocomplete li:hover {
  background: #222d32;
  color: #ffffff;
}
.suggest-product img {
  width: 120px;
  height: 120px;
}
.suggest-product {
  background: #ecf0f5;
  text-align: center;
  padding: 20px;
  box-shadow: 0px 0px 1px 2px #ddd;
}
.add-item.text-center {
  background: #fff;
  width: block;
  padding: 6px 5px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 18px;
}
.form-group.product-search {
  width: 80%;
  left: 10%;
  position: relative;
}
</style>
