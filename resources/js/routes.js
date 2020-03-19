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
        name: 'admin-page'
    }
]
