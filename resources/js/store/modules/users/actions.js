import axios from "axios";
import * as types from "./mutation-types";

export const fetchUsers = ({ commit }) => {
    return new Promise((resolve, reject) => {
        axios.get('/api/users')
            .then(({data}) => {
                commit(types.SET_USERS, data);
                resolve()
            })
            .catch((error) => reject())
    })
};

export const updateUser = ({ dispatch, commit }, user) => {
    axios.patch(`/api/users/${user.id}`, user)
        .then(({data}) => {
            dispatch('fetchUsers')
        })
        .catch((error) => console.log(error))
};

export const createUser = ({ dispatch, commit }, user) => {
    axios.post('/api/users', user)
        .then(({data}) => {
            dispatch('fetchUsers')
        })
        .catch((error) => commit(types.SET_ERRORS, error.response.data.errors))
}
