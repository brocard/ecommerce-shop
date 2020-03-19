export default {
    namespaced: true,

    state: {
        items: []
    },

    getters: {
        cartProducts (state, getters, rootState, rootGetters) {
            return state.items.map(cartItem => {
                const product = rootState.products.items.find(product => product.id === cartItem.id);
                return {
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

        incrementItemQuantity (state, cartItem) {
            cartItem.quantity++
        },

        setCheckoutStatus (state, status) {
            state.checkoutStatus = status
        },

        emptyCart (state) {
            state.items = []
        }
    },

    actions: {
        clearProducts({ commit }) {
            commit('emptyCart')
        },

        addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
            const cartItem = state.items.find(item => item.id === product.id);
            if (!cartItem) {
                commit('pushProductToCart', product.id)
            } else {
                commit('incrementItemQuantity', cartItem)
            }
        },
    }
}
