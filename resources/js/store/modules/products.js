import axios from 'axios';

export default {
    namespaced: true,

    state: {
        items: [],
        current: null
    },

    getters: {
        productIsInStock () {
            return (product) => {
                return product.inventory > 0
            }
        }
    },

    mutations: {
        setProducts (state, products) {
            // update products
            state.items = products
        },

        setupCurrent (state, item) {
            state.current = item
        }
    },

    actions: {
        setupAssociated({ commit }, product) {
            axios.get(`/api/products/${product}`)
                .then(({data}) => {
                    commit('setupCurrent', data.entry);
                })
                .catch((error) => console.log(error, 'error...'))
        },

        fetchProducts({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('/api/products')
                    .then(({data}) => {
                        commit('setProducts', data);
                        resolve()
                    })
                    .catch((error) => reject())
            })
        }
    }
}
