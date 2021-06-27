<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'print_house_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Print House</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title heading">Print House Table</h3>
                </div>
                <div class="box-body">
                 
                  <table class="table text-center table-striped ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Company Name</th>
                        <th scope="col"> Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-else
                        v-for="(items, index) in print_houses.data"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>
                          <router-link
                            :to="{
                              name: 'print_house_details',
                              params: { id: items.id },
                            }"
                            >{{ items.company_name }}
                          </router-link>
                        </td>
                        <td>{{ items.name }}</td>
                        <td>{{ items.mobile_no }}</td>

                        <td>{{ items.address }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-6">
                      <pagination
                        :data="print_houses"
                        @pagination-change-page="getPrintHouses"
                      >
                      </pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ print_houses.from }}</strong> to
                        <strong>{{ print_houses.to }}</strong> of total
                        <strong>{{ print_houses.total }}</strong> entries
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
    this.getPrintHouses();
  },
  data() {
    return {
      print_houses: {},
      loading: true,
      basePath: this.$store.getters.image_base_link,
      item: "",
      search: "",
      total_investment: "",
      total_profit_paid: "",
      total_due_amount: 0,
    };
  },
  methods: {
    getPrintHouses(page = 1) {
      axios
        .get("/api/print/houses?page=" + page)
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
             this.print_houses = resp.data.print_houses;
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    totalAmount(investment) {
      //  console.log(typeof investment)

      let total = 0;
      // investment.forEach(ele => {
      //     total +=parseFloat(ele.amount);
      // });

      Object.keys(investment).forEach(function (key) {
        console.log(key);
      });

      return total;
    },
  },
  computed: {},
};
</script>

<style scoped>
.box-primary {
  margin-left: -100px;
  overflow-x: scroll;
}

.total_style {
  border: 2px solid #ddd;
  padding: 4px 25px;
}
.total_row {
  padding-bottom: 20px;
}
</style>
