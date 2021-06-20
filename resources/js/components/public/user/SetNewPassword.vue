<template>
  <div class="wrapper-wide">

    <frontend-header></frontend-header>

    <div id="container">
    <div class="container">
       <div style="min-height: 400px" class="row">
         <sidebar> </sidebar>
               
         <div class="col-md-2 col-sm-0">  </div>

          <div class="col-md-4 col-sm-10 form-container">

             <div  class="card">
                   <div class="card-heading text-center ">
                       <h4 class="card-title">Set your New password </h4>
                  </div>
                  <div class="card-body ">
                      <form @submit.prevent="setNewPassword" class="form">

                          <div  class="form-group ">
                                <label for="new_password">password</label>
                                <input type="password" v-model="form.new_password" :class="{'is-invalid' : form.errors.has('new_password') }" name="old_paasword" autofocus autocomplete="off" placeholder="Your New Password" class="form-control" >
                                <has-error :form="form" field="new_password "> </has-error>
                          </div>

                          <div class="form-group">
                                <label for="retype_password">Retype password</label>
                                <input type="password" v-model="form.retype_password" :class="{'is-invalid' : form.errors.has('retype_password') }" name="new_paasword" autofocus autocomplete="off" placeholder="Retype Your New Password" class="form-control" >
                                <has-error :form="form" field="retype_password "> </has-error>
                          </div>
                          <br/>
                         <div class="form-group text-center ">
                              <button  :disabled="form.busy" class="btn btn-primary " type="submit"> <i class="fa fa-spiner" v-if="form.busy"></i>Save</button> 
                         </div>
                      </form>
                      
                  </div>
             </div>    
         </div>    
       </div>
 
    </div>
    <frontend-footer></frontend-footer>
    </div>
  </div>
  
</template>

<script>
import sidebar from "./Sidebar.vue"
import { Form, HasError } from "vform";
export default {

  data() {
    return {
      form: new Form({
        new_password: "",
        retype_password: "",
      }),
    };
  },

  methods: {
    setNewPassword() {
      this.form
        .post("/_public/user/set/new/password", {
          ternsfromRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.success == "OK") {
            this.$toasted.show(resp.data.message,{
              type:'success',
              position:'top-center',
              duration:5000,
            });
            this.$router.push({ name: "UserDashboard" });
          
          }else{
            this.$toasted.show(resp.data.message,{
              type:'error',
              position:'top-center',
              duration:5000,
            });
          }
        })
    },
  },

  components:{
      sidebar,
      HasError
  }
};
</script>


<style scoped>

 
.form-container{
   height: 280px;
   margin-bottom: 50px;
   margin-top: 26px;
   box-shadow:1px 1px 5px 3px #ddd;
 }

.card{
  padding-top: 20px;
}
</style>

