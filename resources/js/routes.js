export default [
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
    }, {
        path: '/admin',
        name: 'admin-home',
        component: require('./screens/Admin/Home').default
    }, {
        path: '/admin/users',
        name: 'admin-users',
        component: require('./screens/Admin/Users').default
    }, {
        path: '/admin/products',
        name: 'admin-products',
        component: require('./screens/Admin/Products').default
    }
]
