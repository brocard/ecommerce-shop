import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";

import cart from './modules/cart'
import products from './modules/products'
import users from './modules/users'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        cart,
        users,
        products
    },
})
