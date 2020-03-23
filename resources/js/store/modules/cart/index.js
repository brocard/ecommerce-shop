import * as types from "./mutation-types";

export default {
    namespaced: true,

    state: {
        items: [],
        checkoutStatus: false
    },

    getters: {
        cartProducts (state, getters, rootState, rootGetters) {
            return state.items.map(cartItem => {
                const product = rootState.products.items.find(item => item.id === cartItem.id);
                return {
                    id: product.id,
                    title: product.name,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },

        cartQuantity (state, getters) {
            return getters.cartProducts.reduce((total, product) => total + product.quantity, 0);
        },

        cartTotal (state, getters) {
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        },
    },

    mutations: {
        pushProductToCart (state, productId) {
            state.items.push({
                id: productId,
                quantity: 1
            })
        },

        removeProduct(state, product) {
            state.items.splice(state.items.indexOf(product), 1);
        },

        incrementItemQuantity (state, cartItem) {
            cartItem.quantity++
        },

        setCheckoutStatus (state, status) {
            state.checkoutStatus = status
        },

        [types.EMPTY_CART] (state) {
            state.items = [];
            state.checkoutStatus = false
        }
    },

    actions: {
        clearCheckoutStatus({ commit }) {
            commit('setCheckoutStatus', false)
        },

        clearProducts({ commit }) {
            commit(types.EMPTY_CART)
        },

        addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
            const cartItem = state.items.find(item => item.id === product.id);
            if (!cartItem) {
                commit('pushProductToCart', product.id)
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            commit('setCheckoutStatus', true);
            window.toastr['success'](`You add more 1 ${product.name} to your cart`)
        },

        removeProductFromCart({ commit }, product) {
            commit('removeProduct', product)
        }
    }
}
