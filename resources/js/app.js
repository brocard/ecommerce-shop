require('./bootstrap');

window.Vue = require('vue');

import Base from './base'
import Routes from './routes';
import store from './store/index'

import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: Routes
});

Vue.mixin(Base);

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify()
});
