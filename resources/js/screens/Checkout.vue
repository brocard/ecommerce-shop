<template>
    <div class="row">
        <div class="w-full">
            <div class="text-xl font-normal px-3 py-2 bg-gray-400 uppercase">Items in your cart</div>
            <v-data-table
                :headers="headers"
                :items="products"
                :disable-filtering="true"
                :disable-sort="true"
                :disable-pagination="true"
                hide-default-footer
                class="elevation-1"
            >
                <template v-slot:item.quantity="{ item }">
                    <span class="px-3 font-semibold">{{ item.quantity }}</span>
                    <!--v-row>
                        <v-col col="2" md="2">
                            <v-text-field
                                v-model="item.quantity"
                                :outlined="true"
                                type="number"
                            ></v-text-field>
                        </v-col>
                    </v-row-->
                </template>

                <template v-slot:item.price="{ item }">
                    <v-chip>${{ item.price }}</v-chip>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-btn
                        icon
                        color="red"
                        @click="deleteFromCart(item)"
                    >
                        <v-icon small>mdi-trash-can-outline</v-icon>
                    </v-btn>
                </template>

                <template v-slot:body.append>
                    <tr>
                        <td></td>
                        <td><span class="text-lg font-sans font-semibold text-gray-800">Total:</span></td>
                        <td><v-chip>${{ total.toFixed(2) }}</v-chip></td>
                        <td></td>
                    </tr>
                </template>
            </v-data-table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';
    export default {
        data() {
            return {
                headers:[
                    {
                        text: 'Product',
                        value: 'title',
                    }, {
                        text: 'Quantity',
                        value: 'quantity',
                    }, {
                        text: 'Price (USD)',
                        value: 'price',
                    }, {
                        text: '',
                        value: 'actions',
                        sortable: false
                    },
                ]
            }
        },

        computed: {
            ...mapGetters('cart', {
                products: 'cartProducts',
                total: 'cartTotal'
            }),
            ...mapState('cart', {
                checkoutStatus: state => state.checkoutStatus
            })
        },

        methods: {
            ...mapActions({
                'deleteFromCart' : 'cart/removeProductFromCart'
            })
        }
    }
</script>
