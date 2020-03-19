<template>
    <div>
        <div class="row" v-if="product">
            <div class="col-md-4">
                <img
                    :src="product.image_url"
                    :alt="product.name"
                    class="w-full"
                />
            </div>
            <div class="col-md-8">
                <h2 class="product-name">{{ product.name }}</h2>
                <div class="flex mt-2">
                    Price: ${{ product.price }}
                </div>
                <div class="flex flex-wrap mt-4">
                    <p class="text-gray-700">{{ product.description }}</p>
                    <button
                        class="btn bg-blue-600 text-white hover:bg-blue-700"
                    >Add to Cart +</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    import {mapActions, mapState} from 'vuex'
    export default {
        mounted() {
            window.scrollTo(500, 0);
            this.setupCurrent(this.$route.params.id)
        },

        computed: {
            ...mapState({
                product: state => state.products.current
            }),
        },

        methods: {
            ...mapActions({
                setupCurrent: 'products/setupAssociated',
            })
        }
    }
</script>
