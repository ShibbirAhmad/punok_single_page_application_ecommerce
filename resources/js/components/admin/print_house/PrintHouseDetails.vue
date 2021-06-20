<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link
            :to="{ name: 'print_product_add' }"
            class="btn btn-primary"
            ><i class="fa fa-plus"></i> Add Product For Print
          </router-link>

          <router-link style="margin-left:45%"
            :to="{ name: 'receieve_printed_product' }"
            class="btn btn-success"
            ><i class="fa fa-backward"></i> receive Printed Product
          </router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Print Product</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-lg-3 __c_box">
              <h4>
                Total Cost Amount:

                {{ total_print_cost }}
              </h4>
            </div>
            <div class="col-lg-3 __c_box">
              <h4>Total Paid Amount: {{ total_payment_paid }} </h4>
            </div>

            <div class="col-lg-3 __c_box">
              <h4>Total Due Amount:  {{ parseInt(total_print_cost) - parseInt(total_payment_paid) }} </h4>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-8 __o_box text-center">
              <h4 class="heading">Print Production Overview</h4>
              <table class="table table-bordered table-striped text-center">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Total Given</th>
                    <th>Total Received</th>
                    <th>Total Due</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item,index) in prints_details"  :key="index"> 
                    <td>{{ index }}</td>
                    <td> {{ item.qty }} </td>
                    <td> {{ item.receive_qty }}  </td>
                    <td> {{ parseInt(item.qty) - parseInt(item.receive_qty) }} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <div class="row">
                    <div class="col-md-3">
                      <h3
                        class="box-title"
                        @click="i_mode"
                        :class="{ bb: investMode }"
                      >
                        Print History
                      </h3>
                    </div>

                    <div class="col-md-4">
                      <h3
                        class="box-title"
                        @click="r_mode"
                       
                      >
                        receive History
                      </h3>
                    </div>
                    <div class="col-md-4">
                      <h3
                       @click="p_mode"
                      class="box-title"
                      >
                        Payment Paid History
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="box-body">
                  <table v-if="investMode" id="printTable" class="table">
                    <thead>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Total Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(items, index) in prints_details"
                        v-bind:key="index"
                      >
                        <td>
                          <router-link
                            :to="{
                              name: 'print_details',
                              params: { name: index },
                            }"
                          >
                            {{ index }}
                          </router-link>
                        </td>
                        <td>{{ items.qty }}</td>
                        <td>{{ items.total_cost }}</td>
                      </tr>
                    </tbody>
                  </table>

                  <table v-if="receiveMode" class="table text-center table-striped" id="receiveTable">
                    <thead>
                      <tr>
                        <th scope="col">Proudct Name</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(item, idx) in receive_details"
                        v-bind:key="idx"
                      >
                        <td scope="row">
                          <router-link
                            :to="{
                              name: 'receive_print_details',
                              params: { name: idx },
                            }"
                          >
                            {{ idx }}
                          </router-link>
                        </td>
                        <td>{{ item.qty }}</td>
                      </tr>
                    </tbody>
                  </table>

                   <table v-if="paymentMode" class="table">
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
                      <tr
                        v-for="(item, index) in payment_paid"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.comment }}</td>
                        <td>{{ item.paid_by }}</td>
                        <td>{{ item.amount }}</td>
                      </tr>
                      <tr>
                        <td colspan="4"> Total payment paid </td>
                        <td>
                          <strong> ={{ total_payment_paid }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
    this.getprint_house();

  },
  data() {
    return {
      loading: true,
      item: "",
      investMode: true,
      receiveMode: false,
      paymentMode: false,
      print_house: "",
      total_print_cost: "",
      payment_paid: "",
      total_payment_paid: "",
      total_qty: "",
      prints_details: "",
      receive_details: "",
    };
  },
  methods: {
    getprint_house() {
      axios
        .get("/api/print/house/details/" + this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          this.print_house = resp.data.print_house;
          this.total_print_cost = resp.data.total_print_cost;
          this.payment_paid = resp.data.payment_paid;
          this.total_payment_paid = resp.data.total_payment_paid;
          this.investor_id = this.$route.params.id;
          this.prints_details = resp.data.print_details;
          this.receive_details = resp.data.receive_details;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    i_mode(){
         this.investMode=true;
         this.receiveMode=false;
         this.paymentMode=false ;
    },
    r_mode(){
         this.receiveMode=true;
         this.paymentMode=false ;
         this.investMode=false;
         
    },

    p_mode(){
         this.paymentMode=true ;
         this.investMode=false;
         this.receiveMode=false;
         
    }
  
   
  },
};
</script>

<style>
.col-lg-3.__c_box {
  padding: 10px;
  background: #fff;
  width: 250px;
  height: 85px;
  margin-right: 15px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 3px 3px 3px #ddd;
}

.__o_box {
  margin-left: 8.5%;
  padding: 10px;
  background: #fff;
  height: 200px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 3px #ddd;
}

.box-title {
  padding: 5px 6px;
  cursor: pointer;
}
.bb {
  border-bottom: 2px solid #000;
}
</style>
