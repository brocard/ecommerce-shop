import mutations from "./mutations";
import * as getters from './getters'
import * as actions from './actions'
import Ls from '@/services/ls'

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
