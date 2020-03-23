import * as actions from './actions'
import * as getters from './getters'
import mutations from "./mutations";

const initialState = {
    items: [],
    checkoutStatus: false
};

export default {
    namespaced: true,
    actions,
    getters,
    state: initialState,
    mutations
}
