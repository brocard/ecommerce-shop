import Vue from 'vue'
import VueRouter from "vue-router";
import store from './store'

Vue.use(VueRouter);

const routes = [
    /*
    |--------------------------------------------------------------------------
    | Auth Routes
    |--------------------------------------------------------------------------|
    */
    {
        path: '/login',
        name: 'login',
        component: require('./screens/Login').default
    },
    /*
    |--------------------------------------------------------------------------
    | Shop Routes
    |--------------------------------------------------------------------------|
    */
    {
        path: '/',
        name: 'home',
        component: require('./screens/App').default
    }, {
        path: '/shop/:id/:slug/',
        name: 'product-detail',
        component: require('./screens/ProductDetail').default
    }, {
        path: '/checkout',
        name: 'checkout-page',
        component: require('./screens/Checkout').default
    },
    /*
    |--------------------------------------------------------------------------
    | Admin Backend Routes
    |--------------------------------------------------------------------------|
    */
    {
        path: '/admin',
        meta: {requiresAuth: true},
        component: require('./screens/Admin/Home').default,
        children: [
            {
                path: '/',
                name: 'admin.dashboard',
                component: require('./screens/Admin/Dashboard').default
            },{
                path: 'users',
                name: 'users.index',
                component: require('./screens/Admin/Users').default
            },
            {
                path: 'products',
                name: 'products.index',
                component: require('./screens/Admin/Products').default,
            }, {
                path: 'products/:id',
                name: 'products.edit',
                component: require('./screens/Admin/FormProduct').default,
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
    //  Redirect if not authenticated on secured routes
    if (to.matched.some(m => m.meta.requiresAuth)) {
        console.log(store.getters['auth/isAuthenticated'], 'isAuthenticated...');
        if (!store.getters['auth/isAuthenticated']) {
            return next('/login')
        }
    }
    return next()
});

export default router
