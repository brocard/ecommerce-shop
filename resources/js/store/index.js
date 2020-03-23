import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";

import mutations from './mutations'
import auth from './modules/auth'
import cart from './modules/cart'
import users from './modules/users'
import products from './modules/products'

Vue.use(Vuex);

const initialState = {
    isAppLoaded: false
};

export default new Vuex.Store({
    strict: true,
    state: initialState,
    mutations,
    plugins: [createPersistedState()],
    modules: {
        auth,
        cart,
        users,
        products
    },
})
