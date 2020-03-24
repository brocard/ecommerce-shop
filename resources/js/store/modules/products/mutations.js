import * as types from "./mutation-types";

export default {
    [types.SET_PRODUCTS] (state, products) {
        // update products
        state.items = products
    },

    [types.SET_CURRENT_PRODUCT] (state, item) {
        state.current = item
    },

    [types.CLEAR_CURRENT_PRODUCT] (state) {
        state.current = null
    }
}
