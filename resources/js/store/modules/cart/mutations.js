import * as types from "./mutation-types";

export default {
    pushProductToCart (state, productId) {
        state.items.push({
            id: productId,
            quantity: 1
        })
    },

    [types.REMOVE_PRODUCT](state, product) {
        state.items = state.items.filter(p => p.id !== product.id);
    },

    incrementItemQuantity (state, cartItem) {
        cartItem.quantity++
    },

    [types.SET_CHECKOUT_STATUS] (state, status) {
        state.checkoutStatus = status
    },

    [types.EMPTY_CART] (state) {
        state.items = [];
        state.checkoutStatus = false
    }
}
