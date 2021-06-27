<template>
    <div>
          <div class="col-md-2 ">
                <div class="user_sidebar">
                  <ul class="list-group" id="list_group">
                    <li class="text-center">
                        <i class="fa fa-user customer_icon"> </i>
                        <p class="customer_name"> {{ user.name }} </p>
                    </li>
                  <li  >
                    <router-link :to="{ name: 'UserDashboard' }"
                      ><i class="fa fa-dashboard "></i> Dashboard
                    </router-link>
                  </li>
                  <li >
                    <router-link :to="{ name: 'UserProfile' }"
                      ><i class="fa fa-user "></i> Profile
                    </router-link>
                  </li>
                  <li >
                    <router-link :to="{ name: 'UserProfileEdit' }">
                      <i class="fa fa-edit "> </i> Edit Profile</router-link >
                  </li>

                  <li >
                    <router-link :to="{ name: 'PasswordEdit' }">
                      <i class="fa fa-key "></i> Change Password</router-link
                    >
                  </li>
                   <li  >
                    <router-link :to="{ name: 'user_new_password_set' }">
                      <i class="fa fa-key "></i> Set New Password</router-link
                    >
                  </li>
                    <li  >
                       <a  style="cursor:pointer" @click="Logout"> <i class="fa fa-sign-out"></i> Logout</a>
                  </li>
                </ul>
                </div>
          </div>
    </div>
</template>


<script>
export default {
    crated(){
      this.$store.dispatch("user");
    },
    data(){
      return {
          base_url: this.$store.state.image_base_link ,
      }
    },
    methods:{

       Logout() {
      axios
        .get("/_public/user/logout")
        .then((resp) => {
          console.log(resp);
          this.user = null;
          localStorage.removeItem("user_token");
          location.reload();
        })
      },
    },
    computed :{
       user(){
        return this.$store.getters.user ;
       }
    },
}



</script>

<style scoped>

.user_sidebar{

    margin-top:25px;
    height: 350px;
    background: #F9DFC0;
 }
 .list-group{
    padding-top:25px;
 }

 ul li a{
     color: #fff;
    background-color: #dd8a24;
    padding: 10px;
    float: left;
    display: block;
    width: 100%;
    margin-top:5px;
 }
 .router-link-exact-active {
   background-color: #ff4d0c !important;
 }

 i {
   font-size:14px;
 }

.customer_icon{
   font-size:80px;
}

 .customer_name{
   font-size:18px;
   color:#000;
   text-transform: uppercase;
 }


</style>