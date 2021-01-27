import { combineReducers } from 'redux';

const ItemReducer = (state, action) => {
    if (state === undefined) {
        let arr = new Array(100);
        for (let i = 0; i < 100; ++i)
            arr[i] = 0;
        return arr;
    }

    if (action.type === 'ADD_ITEM') {
        let newState = [...state];
        newState[action.payload]++;
        return newState;
    }
    else if (action.type === 'SUB_ITEM') {
        let newState = [...state];
        if (newState[action.payload] !== 0) {
            newState[action.payload]--;
        }
        return newState;
    }
    else if (action.type === 'MAKE_ZERO') {
        let newState = [...state];
        newState[action.payload] = 0;

        return newState;
    }

    return state;
}

const prodListReducer = (state = [], action) => {
    if (action.type === 'FETCH_PRODUCTS') {
        return action.payload;
    }

    return state;
}


// const fetchByIdReducer = (state = null, action) => {
//     if (action.type === 'FETCH_BY_ID') {
//         console.log('IN REDUCER');
//         console.log(action.payload.data);
//         return action.payload.data;
//     }
//     return state;
// }

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CART_ITEMS':
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    items: ItemReducer,
    prodList: prodListReducer,
    cartItems: cartReducer,
    // itemById: fetchByIdReducer
});