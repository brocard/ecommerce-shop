import * as actions from './actions'
import mutations from './mutations'

const initialState = {
    items: [],
    current: null
};

export default {
    namespaced: true,
    state: initialState,
    mutations,
    actions
}
