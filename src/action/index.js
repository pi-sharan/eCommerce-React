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
    return async function (dispatch) {
        await axios.post(`http://localhost:5000/cart/${id}/${quantity}`);
        dispatch({ type: 'ADD_TO_CART', payload: 'Saved to DB' });
    }
}

export const fetchById = (id) => {
    return async function (dispatch) {
        const completeURL = `http://localhost:5000/api/products/${id}`;
        // console.log(completeURL);
        const response = await axios.get(completeURL);
        console.log('IN ACTION CREATOR');
        console.log(response);

        dispatch({ type: 'FETCH_BY_ID', payload: response });
    }
}

export const getCartItems = () => {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:5000/cart/products');
        // console.log('in action creator');
        // console.log(response);

        dispatch({ type: 'FETCH_CART_ITEMS', payload: response.data });
    };
}