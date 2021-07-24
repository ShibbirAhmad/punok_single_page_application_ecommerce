<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'product_transfer_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">product transfer</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row ">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                    <h3 class="box-title">Product Trasformatin Tables</h3>
                </div>
                <div class="box-body">
                  <table class="table table-bordered table-hover table-striped text-center ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Showroom </th>
                        <th scope="col">Invoice</th>
                        <th scope="col">Total Amount </th>
                        <th scope="col">Status</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(transaction, index) in transactions.data"
                        :key="index"
                        v-else
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ showroomName(transaction.showroom_id) }}</td>
                        <td>{{ transaction.invoice_no }}</td>
                        <td> &#2547; {{ transaction.total }} </td>
                        <td>
                          <span v-if="transaction.status==0" class="badge badge-warning"> Pending </span>
                          <span v-else class="badge badge-success"> Approved </span>
                        </td>
                        <td>{{ transaction.comment}}</td>
                        <td>

                           <router-link class="btn btn-sm btn-success"
                            :to="{
                              name: 'product_transfer_details',
                              params: { id: transaction.id },
                            }"
                          > <i class="fa fa-eye"></i> </router-link>
                         <button  @click="destoryTransaction(transaction.id)"  v-if="transaction.status==0 && $can('Showroom Controller')" class="btn btn-sm btn-danger"> Destroy </button>
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
    this.transactionsList();
    this.getShowroms();
  },
  data() {
    return {
      transactions:{},
      loading: true,
      showrooms:"",
    };
  },
  methods: {
    transactionsList(page =1) {
      axios.get("/api/showroom/transaction/list?page="+page)
      .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.transactions = resp.data.transactions;
          this.loading = false;
        }
      });
    },

   getShowroms() {
      axios.get("/api/showroom/list").then((resp) => {
        if (resp.data.status == "SUCCESS") {
          this.showrooms = resp.data.showrooms;
          this.loading = false;
        }
      });
    },

 showroomName($id){
   if (this.showrooms.length) {
       let name = '';
       this.showrooms.forEach(element => {
         if (element.id==$id) {
           name = element.name ;
         }
     });
     return name ;
   }
  },

 destoryTransaction($id){
    Swal.fire({
        title: 'Are you sure?',
        text: "Destory this transaction!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
    }).then((result) => {
        if (result.value) {
            axios.get('/api/delete/showroom/transaction/'+ $id)
                .then((resp) => {
                    //console.log(resp)
                    if (resp.data.status == 'OK') {
                        this.transactionsList();
                        this.$toasted.show(resp.data.message, {
                            position: 'top-center',
                            type: 'success',
                            duration: 4000
                        });
                    } else {
                        this.$toasted.show('some thing went to wrong', {
                            position: 'top-center',
                            type: 'error',
                            duration: 4000
                        });
                    }

                })
            } else {
            this.$toasted.show('Ok ! no action here', {
                position: 'top-center',
                type: 'info',
                duration: 3000
            });
        }
    })
 },


  },

};
</script>

<style scoped>
</style>
