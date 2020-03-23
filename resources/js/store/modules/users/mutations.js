import * as types from './mutation-types'

export default {
    [types.SET_USERS] (state, users) {
        state.items = users
    },
    [types.SET_ERRORS] (state, users) {
        state.errors = users
    },

    [types.RESET_CURRENT_USER] (state, user) {
        state.currentUser = null
    },
    [types.BOOTSTRAP_CURRENT_USER] (state, user) {
        state.currentUser = user
    },
    [types.UPDATE_CURRENT_USER] (state, user) {
        state.currentUser = user
    }
}
