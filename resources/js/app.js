require('./bootstrap');

window.Vue = require('vue');

import Base from './base'
import router from './routes';
import store from './store/index'

import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify';

Vue.use(Vuetify);

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.mixin(Base);

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi', // default - only for display purposes
        },
    })
});
