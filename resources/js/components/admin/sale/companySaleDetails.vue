<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'compnaySale' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">{{ company.name }}</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
             <div class="col-lg-10 col-md-10">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">{{ company.name }} </h3>
                </div>
                <div class="box-body">
                  <table class="table  table-hover table-striped table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Invoice</th>
                        <th scope="col">Purchase </th>
                        <!-- <th scope="col">Paid </th> -->
                        <th scope="col">Due</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(sale, index) in sales.data"
                        :key="index"
                        v-else
                      >
                        <td scope="row">{{ index + 1 }}</td>

                        <td>{{ sale.created_at  }}</td>
                        <td>{{ sale.invoice_no  }}</td>
                        <td> &#2547; {{ sale.total  }}</td>
                        <!-- <td> &#2547; {{ sale.paid  }}</td> -->
                        <td> &#2547; {{ (sale.total - sale.paid)  }}</td>
                          <td>
                          <span
                            class="badge badge-primary"
                            v-if="sale.status == 1"
                            >Initial</span
                          >
                          <span
                            class="badge badge-success"
                            v-if="sale.status == 2"
                            >Paid</span
                          >

                          <span
                            class="badge badge-danger"
                            v-if="sale.status == 3"
                            >Retruned</span
                          >
                        </td>
                        <td>
                          <router-link
                            :to="{
                              name: 'ViewSale',
                              params: { id: sale.id },
                            }"
                            class="btn btn-primary btn-sm"
                            ><i class="fa fa-eye"></i
                          ></router-link>

                          <!-- <a
                            class="btn btn-success"
                            @click.prevent="paid(sale.id, index)"
                            v-if="sale.status == 1"
                            >Paid</a
                          >
                          <a
                            class="btn btn-danger"
                            v-if="sale.status == 1"
                            @click.prevent="returned(sale.id, index)"
                            >Returend</a
                          > -->
                        </td>

                      </tr>
                      <tr>

                        <!-- <td colspan="3" >{{ totalPaid() }} </td> -->
                        <td colspan="3" > </td>
                        <td> <span class="badge badge-success"> &#2547; {{ totalPurchase() }}</span></td>
                        <td> <span class="badge badge-warning"> &#2547; {{ totalDue() }} </span> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="sales"
                        @pagination-change-page="saleList"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ sales.from }}</strong> to
                        <strong>{{ sales.to }}</strong> of total
                        <strong>{{ sales.total }}</strong> entries
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
import Index from "../Index";

export default {
  components: { Index },

  created() {
    this.saleList();
  },
  data() {
    return {
      sales: {},
      company:'',
      loading: true,
      item: 20,
      sale_type: 2,
      start_date: "",
      end_date: "",
      data_search: "",
      //date picker options ..........
      options: {
        format: "YYYY-MM-DD",
        useCurrent: false,
      },
    };
  },

  methods: {

    saleList(page=1){
        axios.get('/api/company/sale/details/'+this.$route.params.id+'?page='+page)
        .then(resp=>{
            console.log(resp);
            this.sales=resp.data.sales ;
            this.company=resp.data.company ;
            this.loading=false ;
        })
    },

    saleSearch(page = 1) {
      if (this.data_search.length > 1) {
        this.loading = true;
        axios
          .get("/api/company/sale/search/data/" + this.data_search + "?page=" + page)
          .then((resp) => {
            if (resp.data.status == "OK") {
                this.sales = resp.data.sales;
                this.loading = false;
            }
          })
          .catch((error) => {
            console.log(error);
            alert("some thing went wrong");
          });
      }else{
        this.saleList();
      }
    },

    filterCompanySale(page = 1) {
      //fetch data
      axios
        .get("/api/company/sale/date/wise/filter?page=" + page, {
          //send data
          params: {
            start_date: this.start_date,
            end_date: this.end_date,
            item: this.item,
          },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.sales = resp.data.sales;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

   totalPaid(){
       let paid=0;
       this.sales.data.forEach(sale=>{
           paid += sale.paid ;
       });
       return paid ;
   },



   totalPurchase(){
       let total=0;
       this.sales.data.forEach(sale=>{
           total += sale.total ;
       });
       return total ;
   },


 totalDue(){
       let due=0;
       this.sales.data.forEach(sale=>{
           due += sale.total - sale.paid ;
       });
       return due ;
   },
    //method iniitial for sale paid

    paid(sale_id, index) {
      Swal.fire({
        title: "Are you sure?",
        text: "You wan't make this paid",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/sale/paid/" + sale_id)
            .then((resp) => {
              if (resp.data.success == "OK") {
                this.sales.data[index].status = 2;
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 2000,
                });
              }
              //  console.log(sale_id);
            })
            .catch((error) => {
              this.$toasted.show("some thing went to wrong", {
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

    returned(sale_id, index) {
      Swal.fire({
        title: "Are you sure?",
        text: "You wan't make this return",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/sale/returned/" + sale_id)
            .then((resp) => {
              // console.log(resp)
              if (resp.data.success == "OK") {
                this.sales.data[index].status = 2;
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 2000,
                });
              }
            })
            .catch((error) => {
              // console.log(error)
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
  },
  watch:{

    start_date: function (value) {
      if (value.length > 1) {
        this.filterCompanySale();
      }
    },
    end_date: function (value) {
      if (value.length > 1) {
        this.filterCompanySale();
      }
    },

  }
};
</script>

<style scoped>
</style>
