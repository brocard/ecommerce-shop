export const cartQuantity = (state, getters) => {
    return getters.cartProducts.reduce((total, product) => total + product.quantity, 0);
};

export const cartTotal = (state, getters) => {
    return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
};

export const cartProducts = (state, getters, rootState, rootGetters) => {
    return state.items.map(cartItem => {
        const product = rootState.products.items.find(item => item.id === cartItem.id);
        return {
            id: product.id,
            title: product.name,
            price: product.price,
            quantity: cartItem.quantity
        }
    })
};
