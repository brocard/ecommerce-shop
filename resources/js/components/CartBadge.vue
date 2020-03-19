<template>
    <div class="uppercase bg-white px-3 py-2">
        <span class="bg-gray-800 text-white rounded-full mr-2 p-1 px-2 font-bold">{{ quantity }}</span>
        <v-icon>mdi-cart</v-icon>
        <span class="uppercase">Cart</span>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters('cart', {
               total: 'cartTotal',
               quantity: 'cartQuantity',
            })
        }
    }
</script>
