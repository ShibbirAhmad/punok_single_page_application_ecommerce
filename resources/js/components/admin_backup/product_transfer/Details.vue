<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">

      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">product transfer details</li>
        </ol>
      </section>
      <br>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-11 ">
              <div class="box box-primary">
                <div class="box-header"></div>
                <div class="box-body">
                    <div class="row print_info_container">
                    <div class="col-md-3 col-sm-3 description">
                    <div>
                       <p
                      > Showroom : <strong>  {{transaction.showroom? transaction.showroom.name:''}} </strong> </p>
                      <p >
                        Mobile No: <strong> {{transaction.showroom?transaction.showroom.contact_number:''}} </strong>
                      </p>
                      <p class="address_line" >
                        Address:
                        <span>
                          {{ transaction.showroom? transaction.showroom.address:'' }}
                        </span>

                      </p>
                      <p >Invoice No: <strong> {{transaction.invoice_no}} </strong> </p>

                    </div>

                   </div>

                    <div class="col-md-1 col-sm-1"> </div>
                  </div>
                      <table class="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in transaction_items " :key="index">
                            <td>{{index+1}}

                            </td>
                            <td>
                              {{ item.product.name}} -{{ item.product.product_code }}
                            </td>
                            <td>
                              <img v-if="item.product.product_image.length>0" :src="base_url+item.product.product_image[0].product_image" style="width:60px;height:50px;">
                            </td>

                            <td>{{item.quantity}}</td>
                            <td> &#2547; {{item.purchase_price}}</td>
                            <td> &#2547; {{item.total}}</td>

                          </tr>

                        </tbody>
                      </table>

                  <div class="row bottomBtn">
                    <router-link  class="btn btn-warning back" :to="{name:'product_transfer'}">
                      <i class="fa fa-arrow-circle-left" ></i>
                    </router-link>

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
    this.getTransactionDetails();

  },
  data() {
    return {
      transaction: "",
      transaction_items: "",
      base_url: this.$store.state.image_base_link,

    };
  },

  methods: {
    getTransactionDetails() {
      axios
        .get("/api/get/product/transfer/details/"+this.$route.params.id)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.transaction = resp.data.transaction;
            this.transaction_items = resp.data.transaction_items;
          }
        })
    },
    print(transaction_id) {

     window.open('/transaction/invoice/print/'+transaction_id,'_SELF')

    },
  },

};
</script>

<style scoped>

.mb-2 {
  margin-bottom: 5px !important;
}
.bottomBtn {
  margin-top: 15px;
  margin-left: 20px;
}
.head_title{
    margin-left: 27px;
    margin-top: -12px;
}
.address_line{
  line-height: 15px;
}
p {
  line-height: 10px;
  font-size:14px;
}
.m_logo{
    margin-left: -11px;
    margin-top: -21px;
    height: 80px;
}
.m_title{
  margin-top:-15px;
  font-size: 11px;
}
table {
  margin-top:20px;
}
@media print {

  *{
    margin: 0;
    padding: 0;
  }

  table {
  margin-top:20px !important;
}

 .m_title{
    margin-top:-15px;
   font-size: 10px;
 }
  .navbar {
    display: none;
  }
  .m_logo{
    height: 80px;
   }
  .print_info_container{
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    padding: 10px 10px  !important;
    margin-top: 20px;
  }
  .col-sm-1{
    display: none;
  }
  .address_line{
  line-height: 15px;
  }
  p{
    line-height: 16px;
    font-size: 14px;
  }
.logo{
      width: 40% !important;

  }

 .description{
   width: 40%  !important;
 }
  .col-lg-2 {
    width: 20% !important;
    margin-top: 20px !important;
  }
  .invoice-header {
    display: block;
  }
  .box {
    border-top: none;
  }
  footer {
    border-top: none !important;
  }
  .bottomBtn {
    display: none;
  }
}
small.badge.badge-danger {
    display: flex;
    background: red;
    width: 63px;
    flex-direction: row;
}
small.badge.badge-success {
    display: flex;
    background: green;
    width: 63px;
}
</style>
