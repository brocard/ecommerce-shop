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

        <div class="w-full mt-8">
            <v-card class="elevation-1 py-0">
                <v-card-text>
                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                            class="px-6"
                        >
                            <v-row>
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                        v-model="checkout.name"
                                        :counter="100"
                                        label="Name"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                        v-model="checkout.address"
                                        label="Address"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        v-model="checkout.state"
                                        label="State"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-select
                                        v-model="checkout.country"
                                        :items="countryItems"
                                        label="Country"
                                    ></v-select>
                                </v-col>
                            </v-row>

                        </v-col>

                        <v-col
                            cols="12"
                            md="6"
                            class="bg-gray-200 px-6"
                        >
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="12"
                                >
                                    <v-text-field
                                        v-model="checkout.cc_number"
                                        class="font-semibold"
                                        placeholder="Card Number"
                                        label="Credit Card Number"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        v-model="checkout.cc_expiration_date"
                                        class="font-semibold"
                                        placeholder="MM/YY"
                                        label="Exp. Date"
                                    ></v-text-field>
                                </v-col>

                                <v-col
                                    cols="12"
                                    md="6"
                                >
                                    <v-text-field
                                        v-model="checkout.cc_ccv"
                                        class="font-semibold"
                                        label="CCV"
                                        placeholder="CCV"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row
                                class="mt-10"
                            >
                                <v-col
                                    cols="12"
                                >
                                    <v-btn block color="success"> <span class="font-bold mr-3">PAY</span> ${{ total }} USD</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';
    export default {
        data() {
            return {
                checkout: {
                    name: '',
                    address: '',
                    state: '',
                    country: '',
                    cc_number: '',
                    cc_expiration_date: '',
                    cc_ccv: ''
                },
                countryItems: [
                    'Angola', 'Canada', 'United State', 'Mexico',
                ],

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
