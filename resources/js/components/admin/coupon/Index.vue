<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'coupon_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">coupon</li>
        </ol>
      </section>

      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title"> Coupon Table</h3>
                </div>
              
                <div class="box-body">
                  <table class="table text-center">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Code </th>
                        <th scope="col">Start Date </th>
                        <th scope="col">End Date </th>
                        <th scope="col">Discount Type</th>
                        <th scope="col"> Discount Amount</th>
                        <th scope="col"> Status </th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(coupon, index) in couponList"
                        :key="index"
                        >
                        <td> {{ index+1 }} </td>
                        <td> {{ coupon.code}} </td>
                        <td> {{ coupon.start_date }} </td>
                        <td> {{ coupon.expire_date }} </td>
                        <td> {{ coupon.discount_type }} </td>
                        <td> {{ coupon.discount_type=='percentage'?coupon.discount_amount+' %':coupon.discount_amount+' BDT' }} </td>
                        <td> 
                             <span v-if="coupon.status==1" class="badge  badge-success "> on </span> 
                             <span v-else class="badge badge-danger "> off </span>
                       </td>
                       
                        <td>
                          <router-link
                            :to="{
                              name: 'coupon_edit',
                              params: { id: coupon.id },
                            }"
                            class="btn btn-sm btn-success"
                          >
                            <i class="fa fa-edit"></i>
                          </router-link>

                          <a v-if="coupon.status==0"
                            @click="activeCoupon(coupon.id)"
                            class="btn btn-sm btn-success" > <i class="fa fa-check"></i>
                          </a>

                          <a v-else 
                            @click="deActiveCoupon(coupon.id)"
                            class="btn btn-sm btn-warning" > <i class="fa fa-ban"></i>
                          </a>
                          
                          <a
                            @click="trash_coupon(coupon.id, index)"
                            class="btn btn-sm btn-danger" > <i class="fa fa-trash"></i>
                          </a>


                        </td>
                      </tr>
                  
                    </tbody>
                  </table>
              
                </div>
                <div class="box-footer"></div>
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
  mounted() {
    console.log("mounted coupon");
    this.getCoupons();
  },

  data() {
    return {
      couponList:"",
      loading: true,
    };
  },

  methods: {
    
    getCoupons() {
      axios.get("/api/get/coupon/list")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.couponList = resp.data.coupons;
            this.loading=false;
          }
        })
     
    },

    trash_coupon(coupon_id, index) {
      if (confirm("Are you sure to remove")) {
        axios.get("/api/coupon/delete/"+coupon_id)
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "OK") {
              this.getCoupons();
            }
          })
      }
    },

    activeCoupon(coupon_id) {
      if (confirm("Are you sure to active this?")) {
        axios.get("/api/coupon/active/"+coupon_id)
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "OK") {
              this.getCoupons();
            }
          })
      }
    },

    deActiveCoupon(coupon_id) {
      if (confirm("Are you sure to de-active this?")) {
        axios.get("/api/coupon/de-active/"+coupon_id)
          .then((resp) => {
            console.log(resp);
            if (resp.data.status == "OK") {
              this.getCoupons();
            }
          })
      }
    },



    
  },
};
</script>



<style scoped>

</style>
