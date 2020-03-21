import axios from 'axios';

export default {
    namespaced: true,

    state: {
        items: [],
        current: null
    },

    mutations: {
        setProducts (state, products) {
            // update products
            state.items = products
        },

        setupCurrent (state, item) {
            state.current = item
        },

        clearCurrentProduct (state) {
            state.current = null
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
