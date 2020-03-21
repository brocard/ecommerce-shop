import axios from 'axios';
import { SET_USERS, SET_ERRORS } from "./mutation-types";

export default {
    namespaced: true,

    state: {
        items: [],
        errors: {}
    },

    mutations: {
        [SET_USERS] (state, users) {
            state.items = users
        },

        [SET_ERRORS] (state, users) {
            state.errors = users
        }
    },

    actions: {
        fetchUsers({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('/api/admin/users')
                    .then(({data}) => {
                        commit(SET_USERS, data);
                        resolve()
                    })
                    .catch((error) => reject())
            })
        },

        updateUser({ dispatch, commit }, user) {
            axios.patch(`/api/admin/users/${user.id}`, user)
                .then(({data}) => {
                    dispatch('fetchUsers')
                })
                .catch((error) => console.log(error))
        },

        createUser({ dispatch, commit }, user) {
            axios.post('/api/admin/users', user)
                .then(({data}) => {
                    dispatch('fetchUsers')
                })
                .catch((error) => commit(SET_ERRORS, error.response.data.errors))
        }
    }
}
