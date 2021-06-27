<template>
    <div>
        <admin-main></admin-main>
        <div class="content-wrapper">
            <section class="content-header">
                <h1>
                    <router-link :to="{name:'attribute'}" class="btn btn-primary"><i class="fa fa-arrow-right"></i>
                    </router-link>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i>Dashboard</a></li>
                    <li class="active">attribute</li>
                </ol>
            </section>
            <section class="content">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-lg-offset-2">
                        <div class="box box-primary">
                            <div class="box-header with-border text-center">
                                <h3 class="box-title">Edit Attribute</h3>
                            </div>
                            <div class="box-body">
                                <h1 v-if="loading"><i class="fa fa-spin fa-spinner"></i></h1>
                                <form @submit.prevent="update" v-else @keydown="form.onKeydown($event)"
                                      enctype="multipart/form-data">
                                    <div class="alert-danger alert" v-if="error">
                                        {{error}}
                                    </div>
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input class="form-control" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }"
                                               type="text" name="name" placeholder="Ex:Size">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                  <div class="form-group text-center">
                                    <button :disabled="form.busy" type="submit" class="btn btn-primary"><i
                                        class="fa fa-spin fa-spinner" v-if="form.busy"></i>Save
                                    </button>
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>

</template>


<script>
    import Vue from 'vue'
    import {Form, HasError, AlertError} from 'vform'
    Vue.component(HasError.name, HasError)
    export default {
    created() {
       this.getEditItem();
        },
        data() {
            return {
                form: new Form({
                    name: "",
                }),
                error: '',
                loading: true,
                image: ''
            }
        },

        methods: {
            getEditItem(){
              axios.get('/api/attribute/item/'+this.$route.params.id)
              .then(resp => {
                console.log(resp);
                this.form.name=resp.data.attribute.name ;
                this.loading=false;
              })
            },
            update() {
                this.form.post('/api/attribute/update/'+this.$route.params.id, {
                    transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }],
                })
                    .then((resp) => {
                        console.log(resp)
                        if (resp.data.status == 'SUCCESS') {
                            this.$router.push({name: 'attribute'});
                            this.$toasted.show(resp.data.message, {
                                type: "success",
                                position: 'top-center',
                                duration: 4000
                            });
                        } else {
                            this.error = 'some thing went to wrong';

                        }

                    })

            },

        },

    }
</script>

<style scoped>
    .mb-2 {
        margin-bottom: 5px !important;
    }
</style>
