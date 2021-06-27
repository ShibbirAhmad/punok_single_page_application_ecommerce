<template>
  <div>
    <admin-main> </admin-main>
    <div class="content-wrapper">
      <section style="margin-bottom: 20px" class="content-header">
        <h1></h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Customer</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11 col-md-11">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Customer table</h3>
                  <div style="margin-bottom: 5px; margin-top: 10px" class="row">
                    <div class="col-md-3">
                      <select
                        v-model="customer_type"
                        class="form-control"
                        @change="exportData"
                      >
                        <option disabled value="">
                          Select export customer type
                        </option>
                        <option value="all">all customers</option>
                        <option value="retail">retail customers</option>
                        <option value="wholesale">wholeSale customers</option>
                        <option value="officesale">
                          Export officeSale customers
                        </option>
                      </select>
                    </div>
                    <div class="col-lg-3"></div>
                    <div class="col-md-4">
                      <input
                        type="text"
                        @keyup="searchData"
                        v-model="search"
                        class="form-control"
                        placeholder="customer name or 01xxxxxxxxx"
                        id=""
                      />
                    </div>
                    <div style="margin-left: -23px" class="col-md-1">
                      <button class="btn btn-success" type="submit">
                        search
                      </button>
                    </div>
                  </div>
                </div>

                <div class="box-body">
                  <table class="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>
                        <th scope="col">Membership</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(customer, index) in customers.data"
                        v-bind:key="index"
                      >
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>
                          {{
                            customer.customer_city
                              ? customer.customer_city.name
                              : "null"
                          }}
                        </td>
                        <td>{{ customer.address }}</td>

                        <td>
                          <span class="badge">
                            {{ filterMembership(customer.user_id) }}
                          </span>
                        </td>

                        <td>
                          <div
                            v-if="filterButtonText(customer.user_id) == true"
                          >
                            <a
                              @click="deleteMemebership(customer.user_id)"
                              class="btn btn-danger"
                            >
                              Remove MemberShip
                            </a>
                            <a
                              @click="displayModal(customer.user_id)"
                              class="btn btn-success"
                            >
                              Change MemberShip
                            </a>
                          </div>
                          <a
                            v-else
                            @click="displayModal(customer.user_id)"
                            class="btn btn-success"
                          >
                            Add MemberShip
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="box-footer">
                  <div class="row">
                    <div class="col-lg-4">
                      <pagination
                        :data="customers"
                        :limit="3"
                        @pagination-change-page="customerList"
                      >
                      </pagination>
                    </div>
                    <div
                      class="col-lg-6 mt-1"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        Showing <strong>{{ customers.from }}</strong> to
                        <strong>{{ customers.to }}</strong> of total
                        <strong>{{ customers.total }}</strong> entries
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

    <modal name="membership" :width="200" :height="150">
      <div class="card" style="padding: 20px">
        <form @submit.prevent="addMembership">
          <div class="card-body">
            <div class="form-group">
              <label>Membership type</label>
              <select
                name="type"
                :class="{ 'is-invalid': form.errors.has('type') }"
                required
                class="form-control"
                v-model="form.type"
              >
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
              </select>
              <has-error :form="form" field="type"> </has-error>
            </div>
            <div class="form-group text-center">
              <input type="submit" class="btn btn-success" value="apply" />
            </div>
          </div>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
export default {
  created() {
    this.customerList();
    this.getMembership();
  },
  data() {
    return {
      customers: {},
      search: "",
      memberExist: "",
      customer_type: "",
      form: new Form({
        type: "silver",
        customer_id: "",
      }),
      memerships: "",
    };
  },
  methods: {
    getMembership() {
      axios.get("/api/get/membership/list").then((resp) => {
        this.memerships = resp.data.memberships;
      });
    },

    deleteMemebership($user_id) {
      axios.get("/api/remove/membership/"+$user_id)
      .then(resp=> {
        console.log(resp);
        if (resp.data.success=="OK") {
          this.$toasted.show(resp.data.message,{
            type:'success',
            position:'top-center',
            duration:3000,
          });
          this.customerList();
          this.getMembership();
        }
      });
    },

    addMembership() {
      this.form
        .post("/api/apply/membership", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.customerList();
            this.getMembership();
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
            this.$modal.hide("membership");
            this.form.customer_id = "";
          }
          if (resp.data.success == "update") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
            this.customerList();
            this.getMembership();
            this.$modal.hide("membership");
            this.form.customer_id = "";
          }
        });
    },

    filterMembership(user_id) {
      if (this.memerships.length > 0) {
        let type = "none";
        this.memerships.forEach((item) => {
          if (user_id == item.customer_id) {
            type = item.type;
          }
        });
        return type;
      }
    },

    filterButtonText(user_id) {
      let menberhsip = false;
      if (this.memerships.length > 0) {
        this.memerships.forEach((item) => {
          if (user_id == item.customer_id) {
            menberhsip = true;
          }
        });
        return menberhsip;
      }
    },

    displayModal(user_id) {
      if (user_id == 0) {
        alert("this customer isn't retail customer ");
        return;
      }

      if (this.memerships.length > 0) {
        this.memerships.forEach((element) => {
          if (element.customer_id == user_id) {
            this.form.type = element.type;
          }
        });
      }

      //note: customer_id = customer.user_id
      this.form.customer_id = user_id;
      this.$modal.show("membership");
    },

    customerList(page = 1) {
      axios
        .get("/list/customer?page=" + page)
        .then((resp) => {
          if (resp.data.status == "SUCCESS") {
            this.customers = resp.data.customers;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchData() {
      if (this.search.length >= 2) {
        axios.get("/search/customer/" + this.search).then((resp) => {
          if (resp.data.success == "OK") {
            this.customers = resp.data.customers;
            console.log(resp);
          }
        });
      } else {
        this.customerList();
      }
    },
    exportData() {
      if (this.customer_type == "all") {
        window.open("/api/export/customers", "_blank");
      } else if (this.customer_type == "retail") {
        window.open("/api/export/retail/customers", "_blank");
      } else if (this.customer_type == "wholesale") {
        window.open("/api/customers/export/wholesale", "_blank");
      } else if (this.customer_type == "officesale") {
        window.open("/api/export//customers/officesale", "_blank");
      } else {
        Swal.fire({
          title: " sorry :) something went wrong",
          icon: "error",
        });
      }
    },
  },
  components: {
    HasError,
  },
};
</script>
