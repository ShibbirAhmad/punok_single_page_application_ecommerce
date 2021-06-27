<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'productAdd' }" class="btn btn-primary">
            <i class="fa fa-plus"></i>
          </router-link>

          <strong>Product'table</strong>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"> <i class="fa fa-dashboard"></i>Dashboard </a>
          </li>
          <li class="active">Product Table</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="item"
                        @change="productList()"
                      >
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                      </select>
                    </div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                      <input
                        class="form-control"
                        placeholder="search with product code || product name "
                        v-model="search"
                        @keyup="searchProducts()"
                      />
                    </div>
                    <div class="col-lg-2">
                      <select
                        class="form-control"
                        v-model="status"
                        @change="productList"
                      >
                        <option value="all">All</option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="3">Deny</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table class="table text-center table-striped table-hover table-bordered " id="table">
                    <thead>
                      <tr>
                        <th width="5%">#</th>
                        <th width="10%">name</th>
                        <th width="10%">barcode</th>
                        <th width="5%">image</th>
                        <th width="5%">sale price</th>
                        <th width="5%">discount</th>
                        <th width="5%">price</th>
                        <th width="5%">stock</th>
                        <th width="5%">status</th>
                        <th width="5%">wallet point</th>
                        <th width="10%">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>

                      <tr v-for="(product, index) in products.data" v-else>
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ product.name }}</td>
                        <td style="width: 100px">
                          <p
                            v-html="product.product_barcode.barcode"
                            class="barcode"
                          ></p>
                          <span>{{
                            product.product_barcode.barcode_number
                          }}</span>
                        </td>
                        <td>
                          <img
                            v-if="product.product_image.length"
                            :src=" base_url+product.product_image[0].product_image "
                            class="table-image"
                            alt="product image"
                          />
                        </td>
                        <td>{{ product.sale_price }}</td>
                        <td>
                          <span class="badge badge-warning">{{
                            product.discount ? product.discount : "0"
                          }}</span>
                        </td>
                        <td>{{ product.price }}</td>

                        <td>
                          <span
                            v-if="product.stock <= 5"
                            class="badge badge-danger"
                            >{{ product.stock }}</span
                          >
                          <span v-else class="badge badge-success">{{
                            product.stock
                          }}</span>
                        </td>

                        <td>
                          <span
                            class="badge badge-success"
                            v-if="product.status == 1"
                            >Approved</span
                          >
                          <span
                            class="badge badge-primary"
                            v-else-if="product.status == 2"
                            >Pending</span
                          >
                          <span class="badge badge-warning" v-else>Deny</span>
                        </td>

                           <td><span class="badge badge-info" > {{ product.wallet_point }} </span> </td>

                        <td>
                          <i
                            class="fa fa-bars"
                            @click="changeDisplay(product)"
                          ></i>

                          <div class="dropdown-action" :id="product.id">
                            <a
                              class="dropdown-item btn btn-success btn-sm dropbtn"
                              v-if="product.status != 1"
                              @click="approved(product)"
                              >Approved</a
                            >

                            <a
                              class="dropdown-item btn btn-primary btn-sm dropbtn"
                              v-if="product.status != 2"
                              @click="pending(product)"
                              >Pending</a
                            >
                            <a
                              class="dropdown-item btn btn-warning btn-sm dropbtn"
                              v-if="product.status != 3"
                              @click="deny(product)"
                              >Deny</a
                            >

                              <a
                              class="dropdown-item btn btn-info btn-sm dropbtn"
                              @click="copy(product.id)"
                              >Copy</a>

                            <a
                              class="dropdown-item btn btn-warning btn-sm dropbtn"
                              @click.print="print(product.id)"
                              >Print</a
                            >

                            <router-link
                              :to="{
                                name: 'productEdit',
                                params: { id: product.id },
                              }"
                              class="btn btn-success btn-sm dropbtn"
                              >Edit</router-link
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="products"
                        @pagination-change-page="productList"
                        :limit="3"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing
                        <strong>{{ products.from }}</strong> to
                        <strong>{{ products.to }}</strong> of total
                        <strong>{{ products.total }}</strong> entries
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
  </div>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import { jsPDF } from "jspdf";

export default {
  created() {
    this.productList();
    setTimeout(() => {
      this.loading = false;
    }, 500);

    //this.interval = setInterval(() => this.productList(), 3000 );
  },
  data() {
    return {
      products: {},
      loading: true,
      basePath: "storage/",
      search: "",
      item: "30",
      status: "all",
      base_url:this.$store.state.image_base_link,


    };
  },
  methods: {
    productList(page = 1) {
      this.$Progress.start();
      axios
        .get("/list/product?page=" + page, {
          params: {
            status: this.status,
            item: this.item,
          },
        })
        .then((resp) => {
        //  console.log(resp);
          this.products = resp.data.products;
          this.$Progress.finish();

        })
        .catch((error) => {
          console.log(error);
          this.$Progress.finish();
        });
    },



    copy($product_id){
        let copy_items = prompt(
        " item of copy ?"
      );
      axios.get('/api/copy/product/'+$product_id+'/'+copy_items)
      .then(resp =>{
        console.log(resp);
        if (resp.data.status=='success') {
            this.$toasted.show(resp.data.message,{
              type : 'success',
              position: 'top-center',
               duration :3000
            })
            this.productList();
        }
      })

    }
,
    approved(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/approved/product/" + product.id)
            .then((resp) => {
              //  console.log(resp)
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              // console.log(error)
              this.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("OK ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },
    pending(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't pending this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/pending/product/" + product.id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },
    deny(product) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't deny this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/deny/product/" + product.id)
            .then((resp) => {
              if (resp.data.status == "SUCCESS") {
                this.productList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },
    stockUpdate(product) {
      let stock = prompt("How many stock you want to update ?");
      console.log(stock);
      axios
        .post("/stock/update/product/" + product.id, {
          stock: stock,
        })
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.productList();
            this.$toasted.show(resp.data.message, {
              position: "top-center",
              type: "success",
              duration: 4000,
            });
          } else {
            this.$toasted.show("some thing want to wrong", {
              position: "top-center",
              type: "error",
              duration: 4000,
            });
          }
        })
        .catch((error) => {
          this.$toasted.show("ok ! no action here", {
            position: "top-right",
            type: "info",
            duration: 4000,
          });
        });
    },
    getPagination(page = 1) {
      this.loading = true;
      this.$Progress.start();

      axios
        .get("/list/product?page=" + page)
        .then((response) => {
          this.$Progress.finish();
          this.loading = false;
          this.products = response.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    itemPerPage() {
      this.loading = true;
      this.$Progress.start();
      axios
        .get("/list/product", {
          params: {
            item: this.item,
          },
        })
        .then((resp) => {
          this.$Progress.finish();
          this.loading = false;
          if (resp.data.status == "SUCCESS") {
            this.products = resp.data.products;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
   searchProducts(){
     if(this.search.length>1){
        axios.get('/api/search/seggested/product/with/name/code/'+this.search)
      .then(resp=>{
        console.log(resp)
         if(resp.data){
           console.log(resp.data)
            this.products = resp.data;
          }else{
            this.productList()
          }
      })

     }else{
       this.productList();

     }
    },

    changeDisplay(product) {
      let element = document.getElementById(product.id);
      element.classList.toggle("dropbtn-active");
    },
    print(producId) {
      let how_many_times = prompt(
        "How many time you want to print this product barcode?"
      );
      let url='/product/print/barcode/'+producId+'/'+how_many_times
         window.open(url, '_blank');
    },
  },




};


</script>

<style scoped>
.box{
  overflow-x:scroll;
}
.dropbtn {
  width: 100% !important;
  margin-bottom: 5px !important;
}
.dropbtn-active {
  display: block !important;
}
.dropdown-action {
  display: none;
  width: 90px;
  position: absolute;
}
</style>
