<template>
    <div class="font-sans">
        <div class="row px-3">
            <h1 class="">All Products</h1>
        </div>
        <div class="row">
            <div
                v-if="loading"
                class="col-md-12 d-flex justify-content-center"
            >
                <v-progress-circular
                    :value="70"
                    :width="2"
                    :indeterminate="true"
                    color="light-blue"
                ></v-progress-circular>
            </div>

            <div class="col-md-3 rounded" v-for="item in products" v-if="!loading">
                <router-link
                    :to="{ name: 'product-detail', params: {id: item.id, slug: item.slug }}"
                    class="no-underline text-decoration-none"
                >
                    <div class="card hover:shadow-lg hover:border-green-500 rounded">
                        <div class="card-header p-0">
                            <img
                                :src="item.image_url"
                                :alt="item.name"
                                class="w-full h-25"
                            />
                        </div>
                        <div class="card-body px-3">
                            <h5 class="card-title text-gray-800 font-semibold text-xl mb-1">{{ item.name }}</h5>
                            <p class="text-gray-600">{{ item.short }}</p>
                            <span class="bg-gray-400 text-gray-800 font-semibold text-xs px-1 py-1 rounded-lg">Price: ${{ item.price }}</span>
                        </div>
                        <div class="card-footer px-2">
                            <div class="d-flex justify-content-between">
                                <router-link
                                    :to="{ name: 'product-detail', params: {id: item.id, slug: item.slug }}"
                                    class="btn text-white cursor-pointer no-underline bg-green-400 px-3 hover:bg-green-500"
                                >Add to Cart +</router-link>

                                <router-link
                                    :to="{ name: 'product-detail', params: {id: item.id, slug: item.slug }}"
                                    class="btn text-white no-underline cursor-pointer bg-blue-400 hover:bg-blue-500"
                                >Product Detail &#x21B3;</router-link>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                loading: false
            }
        },

        mounted() {
            this.loading = true;
            this.fetchProducts()
                .then(() => setTimeout(() => this.loading = false, 500))
        },

        computed: {
            ...mapState({
                products: state => state.products.items
            })
        },

        methods: {
            ...mapActions({
                fetchProducts: 'products/fetchProducts',
            })
        }
    }
</script>
