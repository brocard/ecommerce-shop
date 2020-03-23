import Ls from '@/services/ls'
import router from "@/routes.js";
import axios from 'axios'
import * as types from './mutation-types'
import * as userTypes from '../users/mutation-types'
import * as rootTypes from '../../mutation-types'

export const login = ({ commit, dispatch, state }, data) => {
    let loginData = {
        username: data.email,
        password: data.password
    };
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/login', loginData).then((response) => {
            let token = response.data.access_token;
            Ls.set('auth.token', token);

            //commit('user/' + userTypes.RESET_CURRENT_USER, null, { root: true });
            commit(rootTypes.UPDATE_APP_LOADING_STATUS, false, { root: true });
            commit(types.AUTH_SUCCESS, token);

            resolve(response)
        }).catch(err => {
            if (err.response.data.error === 'invalid_credentials') {
                window.toastr['error']('Invalid Credentials')
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', err.message)
            }
            commit(types.AUTH_ERROR, err.response);
            Ls.remove('auth.token');
            reject(err)
        })
    })
};

export const logout = ({ commit, dispatch, state }, noRequest = false) => {
    if (noRequest) {
        commit(types.AUTH_LOGOUT);
        Ls.remove('auth.token');
        router.push('/login');
        return true
    }

    return new Promise((resolve, reject) => {
        axios.get('/api/auth/logout').then((response) => {
            commit(types.AUTH_LOGOUT);
            Ls.remove('auth.token');
            router.push('/login')
        }).catch(err => {
            reject(err);
            commit(types.AUTH_LOGOUT);
            Ls.remove('auth.token');
            router.push('/login')
        })
    })
};
