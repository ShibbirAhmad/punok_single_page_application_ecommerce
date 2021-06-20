ive<template>
  <div>
  <admin-main></admin-main>
    <div class="content-wrapper">
      <section style="margin-bottom: 20px" class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">print</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-lg-10 offset-1">
              <div class="box box-primary">
                <div class="box-header text-center with-border">
                  <h3 class="box-title"> {{ product_name }} Receive Details </h3>
                  </div>
                <div class="box-body">
                  <table class="table table-striped table-bordared text-center ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Invoice</th>
                        <th scope="col">Quantity </th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(print, index) in prints"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ print.date }}</td>
                        <td>{{ print.invoice_no }}</td>
                        <td>{{ print.qty }}</td>
      
                         </tr>
                    </tbody>
   
                  </table>
                </div>
                <div class="box-footer">
             
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
export default {
  created() {
      this.receiveList() ;

  },
  data() {
    return {
      prints: "",
      loading: true,
      product_name:this.$route.params.name,
    };
  },
  methods: {
    receiveList() {
      axios.get("/api/get/receive/product/details",{
          params:{
              product_name:this.product_name ,
          }
      })
        .then((resp) => {
          console.log(resp);
            this.prints = resp.data;
            this.loading = false;
        })
    },

  },

};
</script>

<style scoped>
</style>
