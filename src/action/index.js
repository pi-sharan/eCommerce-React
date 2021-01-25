import axios from "axios";

export const addItem = (id) => {
    return {
        type: 'ADD_ITEM',
        payload: id
    };
};

export const subItem = (id) => {
    return {
        type: 'SUB_ITEM',
        payload: id
    };
};

export const getProducts = () => {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:5000/api/products');

        dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
    };
}

export const makeZero = (id) => {
    return {
        type: 'MAKE_ZERO',
        payload: id
    };
}

export const addItemToCart = (id, quantity) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id: id,
            quantity: quantity
        }
    };
}