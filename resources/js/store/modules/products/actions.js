import axios from "axios";
import * as types from './mutation-types'

export const setupAssociated = ({ commit }, product) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/products/${product}`)
            .then(({data}) => {
                commit(types.SET_CURRENT_PRODUCT, data.entry);
                resolve(data.entry);
            })
            .catch((error) => reject(error))
    });
};

export const fetchProducts = ({ commit }) => {
    return new Promise((resolve, reject) => {
        axios.get('/api/products')
            .then(({data}) => {
                commit(types.SET_PRODUCTS, data);
                resolve()
            })
            .catch((error) => reject(error))
    })
};

export const creteProduct = ({dispatch, commit}, product) => {
    axios.post('/api/products', product)
        .then(({data}) => {
            dispatch('fetchProducts');
            window.toastr['success'](`Product created successfully...`)
        })
        .catch((error) => console.log(error))
};

export const updateProduct = ({ dispatch, commit }, product) => {
    axios.patch(`/api/products/${product.id}`, product)
        .then(({data}) => {
            dispatch('fetchProducts');
            window.toastr['success'](`Product updated successfully...`)
        })
        .catch((error) => console.log(error))
};

export const deleteProduct = ({ dispatch, commit }, product) => {
    axios.delete(`/api/products/${product.id}`)
        .then(({data}) => {
            dispatch('fetchProducts');
            window.toastr['success'](`Product deleted successfully...`)
        })
        .catch((error) => console.log(error));
};

export const uploadImage = ({commit}, data) => {
    let formData = new FormData();
    formData.append('file', data.file);
    axios.post(`/api/media/${data.item.id}`, formData)
        .then(({data}) => {

        })
        .catch((error) => console.log(error))
};

export const clearAssociatedProduct = ({ commit }) => {
    commit(types.CLEAR_CURRENT_PRODUCT);
};
