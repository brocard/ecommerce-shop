import * as types from "./mutation-types";

export default {
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
}
