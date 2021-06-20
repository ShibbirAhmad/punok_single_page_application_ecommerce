<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'showroom_add' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Showroom</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-lg-offset-1">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                    <h3 class="box-title">Showroom table</h3>
                </div>
                <div class="box-body">
                  <table class="table table-bordered table-striped text-center">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">address</th>
                        <th scope="col">contact person</th>
                        <th scope="col">Contact number</th>
                        <th scope="col">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr
                        v-for="(showroom, index) in showrooms"
                        :key="index"
                        v-else
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ showroom.name }}</td>
                        <td>{{ showroom.address }}</td>
                        <td>{{ showroom.contact_person }}</td>
                        <td>{{ showroom.contact_number}}</td>
                        <td>
                          <router-link class="btn btn-sm btn-success"
                            :to="{
                              name: 'showroom_edit',
                              params: { id: showroom.id },
                            }"
                          > <i class="fa fa-edit"></i> </router-link>
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
    this.getShowroms();
  },
  data() {
    return {
      showrooms: "",
      loading: true,
    };
  },
  methods: {
    getShowroms() {
      axios.get("/api/showroom/list").then((resp) => {
        if (resp.data.status == "SUCCESS") {
          this.showrooms = resp.data.showrooms;
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
