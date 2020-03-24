<template>
    <div class="row">
        <div class="w-full">
            <v-card class="elevation-1">
                <v-toolbar dark flat color="primary">
                    <v-toolbar-title>Edit Product #{{ $route.params.id }}</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-file-input
                                label="Image"
                                placeholder="Upload an Image"
                                filled
                                :disabled="loading"
                                accept="image/*"
                                prepend-icon="mdi-camera"
                                @change="uploadImageSubmit"
                                @click:clear="removeImageSubmit"
                            ></v-file-input>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field
                                v-model="form.name"
                                :loading="loading"
                                :counter="100"
                                label="Name"
                            ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field
                                v-model="form.price"
                                :loading="loading"
                                label="Price"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                                v-model="form.description"
                                :loading="loading"
                                :counter="1000"
                                label="Description"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <v-row class="mt-3">
                        <v-col cols="12">
                            <v-btn
                                block
                                color="success"
                                @click="updateItem(form)"
                            > Save </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    export default {
        data() {
            return {
                loading: false,
                endpoint: '',
                form: {
                    name: '',
                    description: '',
                    price: '',
                }
            }
        },

        mounted() {
            window.scrollTo(500, 0);
            this.loading = true;
            this.setupCurrent(this.$route.params.id)
                .then(data => {
                    this.form = Object.assign({}, data);
                    this.loading = false
                });
        },

        computed: {
            ...mapState({
                product: state => state.products.current
            }),
        },

        methods: {
            ...mapActions({
                setupCurrent: 'products/setupAssociated',
                updateItem: 'products/updateProduct',
                uploadImage: 'products/uploadImage'
            }),

            uploadImageSubmit(file) {
                const item = this.product;
                this.uploadImage({file, item})
            },

            removeImageSubmit() {
                console.log('...Remove Files')
            }
        }
    }
</script>
