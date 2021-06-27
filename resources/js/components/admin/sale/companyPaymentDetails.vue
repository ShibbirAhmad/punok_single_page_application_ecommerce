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
             <div class="col-lg-8 col-md-8 col-lg-offset-1 ">
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
                        <th scope="col">Comment</th>
                        <th scope="col">Paid By</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(payment, index) in payments.data"
                        :key="index"
                        v-else
                      >
                        <td >{{ index + 1 }}</td>
                        <td>{{ payment.date  }}</td>
                        <td>{{ payment.comment  }}</td>
                        <td>{{ payment.credit_in  }}</td>
                        <td> &#2547; {{  payment.amount  }}</td>
                      </tr>
                      <tr>

                        <td colspan="4" > </td>
                        <td> <span class="badge badge-success"> &#2547; {{ totalPayment() }}</span></td>

                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="payments"
                        @pagination-change-page="paymentList"
                      ></pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ payments.from }}</strong> to
                        <strong>{{ payments.to }}</strong> of total
                        <strong>{{ payments.total }}</strong> entries
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
    this.paymentList();
  },
  data() {
    return {
      company:'',
      payments:{},
      loading: true,
      item: 20,
    };
  },

  methods: {
    paymentList(page=1){
        axios.get('/api/company/sale/payment/details/'+this.$route.params.id)
        .then(resp=>{
            console.log(resp);
            this.company=resp.data.company ;
            this.payments=resp.data.payments ;
            this.loading=false ;
        })
    },

   totalPayment(){
       let paid=0;
       this.payments.data.forEach(payment=>{
           paid += payment.amount ;
       });
       return paid ;
   },

  },

};
</script>
