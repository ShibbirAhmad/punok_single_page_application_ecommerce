<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'company_assets_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">asset</li>
        </ol>
      </section>

      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-10">
              <div class="box box-primary">
                <div class="box-header with-border"></div>
                <div class="row">
                  <div style="margin-left: 10px" class="col-md-2">
                    <select
                      @change="getAssets"
                      v-model="item"
                      class="form-control"
                      id=""
                    >
                      <option selected value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <!-- <a href="/api/download/assets/pdf" target="_blank" class="btn btn-success"> <i class="fa fa-download"> </i> Export </a> -->
                  </div>
                </div>
                <div class="box-body">
                  <table class="table text-center">
                    <thead>
                      <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Date</th>
                        <th scope="col"> Name</th>
                        <th scope="col">Purchase Price </th>
                        <th scope="col">Present Price </th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(asset, index) in assetList.data"
                        :key="index"
                        >
                        <td> {{ index+1 }} </td>
                        <td> {{ asset.purchase_date}} </td>
                        <td> {{ asset.name }} </td>
                        <td> {{ asset.purchase_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }}</td>
                        <td> {{ asset.present_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }}</td>
                        <td> {{ asset.quantity }}</td>
                        <td> {{ asset.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }}</td>

                        <td>
                          <router-link
                            :to="{
                              name: 'company_assets_edit',
                              params: { id: asset.id },
                            }"
                            class="btn btn-sm btn-success"
                          >
                            <i class="fa fa-edit"></i>
                          </router-link>

                          <a
                            @click="trash_asset(asset.id, index)"
                            class="btn btn-sm btn-danger"
                          >
                            <i class="fa fa-trash"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="5" > </td>
                        <td > {{ total_quantity.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }} </td>
                        <td> {{ total_amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }}  </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="row">
                    <div class="col-md-6">
                      <pagination
                        :data="assetList"
                        @pagination-change-page="getAssets"
                      >
                        <span slot="prev-nav">&lt; Previous</span>
                        <span slot="next-nav">Next &gt;</span>
                      </pagination>
                    </div>
                    <div
                      class="col-md-6"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        showing <strong>{{ assetList.from }} </strong> to
                        <strong>{{ assetList.from }} </strong> of total
                        entities {{ assetList.total }}
                      </p>
                    </div>
                  </div>
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
    console.log("mounted asset");
    this.getAssets();
  },

  data() {
    return {
      assetList: {},
      total_quantity:"",
      total_amount:"",
      loading: true,
      item: 10,
    };
  },

  methods: {

    getAssets(page = 1) {
      axios.get("/api/company/assets?page=" + page, {
          params: { item: this.item },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.assetList = resp.data.assets;
            this.total_amount=resp.data.total_amount;
            this.total_quantity=resp.data.total_quantity;
            this.loading=false;
          }
        })

    },

    trash_asset(asset_id, index) {
      if (confirm("Are you sure to remove")) {
        axios.get("/api/company/assets/delete/"+asset_id)
          .then((resp) => {
            console.log(resp);
            if (resp.data.success == "OK") {
              alert(resp.data.message);
              this.assetList.data.splice(index, 1);
            }
          })
      }
    },


  },
};
</script>



<style scoped>
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
