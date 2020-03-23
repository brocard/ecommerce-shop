import Ls from '@/services/ls'
import mutations from "./mutations";
import * as getters from './getters'
import * as actions from './actions'

const initialState = {
    token: Ls.get('auth.token'),
    status: '',
    validateTokenError: '',
    validateTokenSuccess: ''
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
