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

            <div class="col-md-3 rounded px-2" v-for="item in products" v-if="!loading">
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
                            <button
                                class="btn bg-green-400 text-xs text-gray-700 hover:shadow-lg px-2 uppercase font-semibold"
                                @click="addProductToCart(item)"
                            >Add to Cart <v-icon :size="15">mdi-plus</v-icon></button>

                            <router-link
                                :to="{ name: 'product-detail', params: {id: item.id, slug: item.slug }}"
                                class="btn text-xs text-gray-700 text-decoration-none bg-white hover:shadow-lg border-green-300 uppercase font-semibold"
                            >Product Details <v-icon :size="15">mdi-eye</v-icon></router-link>
                        </div>
                    </div>
                </div>
            </div>

            <!--button
                class="btn bg-red-400 text-white font-semibold btn-block"
                @click="emptyCart"
                v-if="!loading"
            >Clear Cart</button-->
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                loading: false
            }
        },

        mounted() {
            this.loading = true;
            this.fetchProducts()
                .then(() => setTimeout(() => this.loading = false, 500));
            this.clearCurrent();
        },

        computed: {
            ...mapState({
                products: state => state.products.items
            })
        },

        methods: {
            ...mapActions({
                clearCurrent: 'products/clearAssociatedProduct',
                fetchProducts: 'products/fetchProducts',
                addProductToCart: 'cart/addProductToCart',
                emptyCart: 'cart/clearProducts'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .v-application {
        a {color: inherit !important;}
    }
    .card-header {
        img {
            max-height: 280px;
        }
    }
</style>
