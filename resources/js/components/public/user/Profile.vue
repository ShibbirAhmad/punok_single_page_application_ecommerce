<template>
  <div class="wrapper-wide">
    <frontend-header></frontend-header>
    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->

        <div style="min-height: 400px" class="row ">
         
        <sidebar></sidebar> 

          <div class="col-md-6 col-sm-10">
            <div class="form-container ">
              <div class="container_inside">
                <form>
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="user.name ? user.name : 'customer'"
                  />
                </div>

                <div class="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="user.mobile_no"
                  />
                </div>

                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="user.email ? user.email : 'No Email Added'"
                  />
                </div>

                <div class="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="user_city(user.city_id)"
                  />
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    disabled
                    class="form-control"
                    :value="user.address ? user.address : 'Not available'"
                  />
                </div>

                <div class="form-group text-center">
                  <router-link :to="{ name: 'UserDashboard' }">
                    <i class="fa fa-arrow-left "> </i>Back</router-link
                  >
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

export default {
  // props: ["categories"],
  mounted() {
    this.getCity();
    this.$store.dispatch("user");
  },
  data() {
    return {
      city: "",
      cities:[],
    };
  },

  methods: {
    getCity() {
      axios.get("/_public/others")
        .then((resp) => {
          // console.log(resp);
          this.cities = resp.data.cities;
        })
      },

      user_city($c_id){
         if (this.cities.length > 0) {
             let city="";
           this.cities.forEach(element => {
              if (element.id==$c_id) {
                // console.log(element.name);
                city = element.name;
              }
           }); 
          return city ;
         }
      }
 
  },
  components: {
   sidebar
  },
  computed:{
    user(){
      return this.$store.getters.user ;
    }
  }
};
</script>


<style scoped>

.user_content {
  box-shadow: 1px 2px 1px #ddd;
}

.form-container{
   height: 420px;
   margin-bottom: 50px;
   margin-top: 26px;
   box-shadow:1px 1px 5px 3px #ddd;
 }
 .container_inside{
   margin:10px 20px;
   padding-top: 15px;
 }

i {
  font-size:14px;
}
</style>