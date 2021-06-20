<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'loanAdd' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Loaner</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">

                

          <div class="row justify-content-center">
            <div class="col-lg-10 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title heading">Loan Table</h3>
                </div>
                <div class="box-body">
                     <div class="row total_row">
                     <div class="col-md-3">
                       
                    <a href="/api/download/all/loan/pdf" target="_blank" class="btn btn-success"> <i class="fa fa-download"> </i> Export PDF </a>
                     </div>
                    <div class="col-md-3"> <h4> Total Loan : <b class="total_style"  style="color:red"> {{ total_loan }} </b> </h4> </div>
                    <div class="col-md-3"> <h4> Total Paid : <b  class="total_style" style="color:green"> {{ total_loan_paid  }}</b> </h4> </div>
                    <div class="col-md-3"> <h4> Total Due : <b  class="total_style" style="color:purple"> {{ total_due_amount }}</b> </h4> </div>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                      
                        <th scope="col">Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Address</th>
                    
                        <th scope="col">Taken Amount</th>
                        <th scope="col">Paid Amount</th>
                        <th scope="col">Due Amount </th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(items, index) in loan.data" v-bind:key="index">
                        <td scope="row">{{ index + 1 }}</td>
                        <td>
                           <router-link
                            :to="{
                              name: 'LoanerDetails',
                              params: { id: items.id },
                            }"

                            >{{ items.name }}
                          
                          </router-link>
      
                       
                          
                          </td>
                        <td>{{ items.mobile_no }}</td>

                        <td>{{ items.address }}</td>

                       <td>{{ items.taken_amount }}</td> 
                        <td>{{ items.paid_amount }}</td> 
                        <td> {{ items.taken_amount - items.paid_amount  }} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="loan"
                        @pagination-change-page="getLoans"
                      >
                      </pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ loan.from }}</strong> to
                        <strong>{{ loan.to }}</strong> of total
                        <strong>{{ loan.total }}</strong> entries
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
export default {
  created() {
    this.getLoans();
  },
  data() {
    return {
      loan: {},
      loading: true,
      basePath: this.$store.getters.image_base_link,
      item: "",
      search: "",
      total_loan:"",
      total_loan_paid:"",
      total_due_amount:0
      
    };
  },
  methods: {
    getLoans(page=1) {
      axios
        .get("/api/loan?page="+page)
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.loan = resp.data.loan;
            this.total_loan = resp.data.total_loan;
            this.total_loan_paid = resp.data.total_loan_paid ;
            this.total_due_amount=resp.data.due_amount;
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    totalAmount(loan){
    //  console.log(typeof loan)

      let total=0;
      // loan.forEach(ele => {
      //     total +=parseFloat(ele.amount);
      // });

      Object.keys(loan).forEach(function(key) {

        console.log(key);

})

      return total;

    }
  },
  computed: {},
};
</script>

<style scoped>
 
 .box-primary{

    margin-left: -100px;
    overflow-x: scroll;
 }
 
 .total_style{

    border: 2px solid #ddd;
    padding: 4px 15px;

 }
 .total_row{
   padding-bottom: 20px;
 }


</style>
