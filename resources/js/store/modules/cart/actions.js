import * as types from './mutation-types'

export const clearCheckoutStatus = ({ commit }) => commit('setCheckoutStatus', false);
export const clearProducts = ({ commit }) => commit(types.EMPTY_CART);

export const  addProductToCart = ({state, getters, commit, rootState, rootGetters}, product) => {
    const cartItem = state.items.find(item => item.id === product.id);
    if (!cartItem) {
        commit('pushProductToCart', product.id)
    } else {
        commit('incrementItemQuantity', cartItem)
    }
    commit('setCheckoutStatus', true);
    window.toastr['success'](`You add more 1 ${product.name} to your cart`)
};

export const removeProductFromCart = ({ commit }, product) => commit('removeProduct', product)
