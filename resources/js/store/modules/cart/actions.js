import * as types from './mutation-types'
import axios from "axios";

export const addProductToCart = ({state, getters, commit, rootState, rootGetters}, product) => {
    const cartItem = state.items.find(item => item.id === product.id);
    if (!cartItem) {
        commit('pushProductToCart', product.id)
    } else {
        commit('incrementItemQuantity', cartItem)
    }
    commit(types.SET_CHECKOUT_STATUS, true);
    window.toastr['success'](`You add more 1 ${product.name} to your cart`)
};

export const removeProductFromCart = ({ commit }, product) => {
    commit(types.REMOVE_PRODUCT, product);
    window.toastr['warning'](`You deleted ${product.title} from your cart`)
};

export const clearCheckoutStatus = ({ commit }) => commit(types.SET_CHECKOUT_STATUS, false);
export const clearProducts = ({ commit }) => commit(types.EMPTY_CART);
