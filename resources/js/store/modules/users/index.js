import mutations from "./mutations";
import * as actions from './actions'

const initialState = {
    items: [],
    errors: {},
    currentUser: null
};

export default {
    namespaced: true,

    state: initialState,
    mutations,
    actions
}
