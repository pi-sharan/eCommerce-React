import { combineReducers } from 'redux';

const ItemReducer = (state, action) => {
    if (state === undefined) {
        let arr = new Array(10);
        for (let i = 0; i < 10; ++i)
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

    return state;
}

const prodListReducer = (state = [], action) => {
    if (action.type === 'FETCH_PRODUCTS') {
        return action.payload;
    }

    return state;
}

export default combineReducers({
    items: ItemReducer,
    prodList: prodListReducer
});