<template>
    <div class="row">
        <div class="w-full">
            <div class="text-xl font-thin px-3 py-2 bg-gray-300 flex justify-between">
                <div class="pt-1">
                    <v-icon class="mb-2">mdi-warehouse</v-icon> Products
                </div>
            </div>

            <v-data-table
                :headers="headers"
                :items="products"
                :disable-filtering="true"
                :loading="loading"
                class="elevation-1"
            >
                <template v-slot:item.name="{ item }" v-html="item.name">
                    {{ item.name }}
                </template>

                <template v-slot:item.email="{ item }">
                    <v-chip>{{ item.price }}</v-chip>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-btn
                        icon
                        color="indigo"
                    >
                        <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>

                    <v-btn
                        icon
                        color="red"
                    >
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                loading: false,
                headers:[
                    {
                        text: 'Name',
                        value: 'name',
                    }, {
                        text: 'Slug',
                        value: 'slug',
                    }, {
                        text: 'Price',
                        value: 'price',
                    }, {
                        text: '',
                        value: 'actions',
                        sortable: false
                    },
                ]
            }
        },

        mounted() {
            this.loading = true;
            this.fetchProducts()
                .then(() => this.loading = false)
        },

        computed: {
            ...mapState({
                products: state => state.products.items
            })
        },

        methods: {
            ...mapActions({
                fetchProducts: 'products/fetchProducts'
            }),
        }
    }
</script>

<style scoped>

</style>
