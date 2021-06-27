<template>
  <div>
    <admin-main></admin-main>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'AddCompanySale' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Company_Sale</li>
        </ol>
      </section>
      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-11">
              <div class="box box-primary">
                <div class="box-header with-border text-center">
                  <h3 class="box-title">Company Sales</h3>
                </div>
                <div class="box-body">
                  <table
                    class="
                      table
                      text-center
                      table-hover table-striped table-bordered
                    "
                  >
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Due</th>
                        <th scope="col">Paid</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-for="(company, index) in companies" :key="index">
                        <td scope="row">{{ index + 1 }}</td>

                        <td>
                          <router-link
                            style="color: blue !important;font-size:14px"
                            :to="{
                              name: 'company_sale_details',
                              params: { id: company.id },
                            }"
                          >
                            {{ company.name }}
                          </router-link>
                        </td>
                        <td>{{ company.phone }}</td>
                        <td>{{ company.address }}</td>

                        <td>
                          total sale
                          <span class="badge badge-danger">
                            &#2547; {{ totalPurchase(company.sales) }}
                          </span>  ||

                          due
                          <span class="badge badge-warning s_d_n">
                            &#2547; {{ dueStillNow(company) }}
                          </span>
                        </td>
                        <td> <span class="badge badge-success"> &#2547; {{ totalPaid(company) }} </span> </td>
                        <td>
                          <button
                            @click="showModal(company.id)"
                            class="btn btn-success btn-sm"
                          >
                            get paid
                          </button>

                          <router-link
                            :to="{
                              name: 'company_payment_details',
                              params: { id: company.id },
                            }"
                            class="btn btn-primary btn-sm"
                          >
                            Payment Details
                          </router-link>
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

    <modal name="payment_modal" :width="400" :height="370">
      <form @submit.prevent="getPayment">
        <div class="card" style="padding: 20px">
          <div class="card-body">
            <div class="form-group">
              <label>Date</label>
              <date-picker
                :class="{ 'is-invaid': form.errors.has('date') }"
                v-model="form.date"
                required
                :config="options"
              >
              </date-picker>
              <has-error :form="form" field="date"></has-error>
            </div>

            <div class="form-group">
              <label>Amount</label>
              <input
                type="text"
                v-model="form.amount"
                required
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label> Credit In </label>
              <select
                name="credit_in"
                class="form-control"
                v-model="form.credit_in"
                :class="{ 'is-invalid': form.errors.has('credit_in') }"
              >
                <option value="Cash">Cash</option>
                <option value="Bkash(personal)">Bkash(personal)</option>
                <option value="Bkash(merchant)">Bkash(merchant)</option>
                <option value="Bank(SIBL)">Bank(SIBL)</option>
                <option value="Bank(AIBL)">Bank(AIBL)</option>
              </select>
              <has-error :form="form" field="credit_in"></has-error>
            </div>

            <div class="form-group">
              <label>Comment</label>
              <input type="text" v-model="form.comment" class="form-control" />
            </div>

            <button type="submit" class="btn btn-success btn-block">
              Submit
            </button>
          </div>
        </div>
      </form>
    </modal>
  </div>
</template>


<script>
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
import datePicker from "vue-bootstrap-datetimepicker";

Vue.component(HasError.name, HasError);

export default {
  created() {
    this.companyList();
  },
  data() {
    return {
      companies: {},
      loading: true,
      form: new Form({
        date: "",
        company_id: "",
        credit_in: "Cash",
        comment: "",
        amount: "",
      }),
      options: {
        format: "YYYY-MM-DD",
        useCurrent: true,
      },
    };
  },
  methods: {
    getPayment() {
      this.form
        .post("/api/get/company/sale/payment", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
            this.form.date='';
            this.form.amount='';
            this.form.comment='';
            this.$modal.hide("payment_modal");
            this.companyList();
          }
        });
    },
    companyList() {
      axios.get("/company").then((resp) => {
        console.log(resp);
        if (resp.data.status == "SUCCESS") {
          this.companies = resp.data.companies;
          this.loading = false;
        }
      });
    },

    totalPurchase($sales) {
      let total = 0;
      $sales.forEach((sale) => {
        total += sale.total ;
      });
      return total;
    },

    totalPaid(company) {
      let total_partial_paid = 0;
      let total_sale_paid = 0;
      company.payments.forEach((payment) => {
        total_partial_paid += payment.amount;
      });

      company.sales.forEach((sale) => {
        total_sale_paid +=  sale.paid;
      });

      let  total_paid = parseInt(total_sale_paid) + parseInt(total_partial_paid );
      return total_paid ;
    },

    dueStillNow(company) {
      let total_paid = 0;
      let total_due = 0;
      company.payments.forEach((payment) => {
        total_paid += payment.amount;
      });

      company.sales.forEach((sale) => {
        total_due += sale.total - sale.paid;
      });
      let due_amount = total_due - total_paid ;
      return due_amount ;
    },

    showModal($id) {
      this.form.company_id = $id;
      this.$modal.show("payment_modal");
    },
  },
  components: { HasError },
};
</script>

<style scoped>
</style>
