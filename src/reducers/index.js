import { combineReducers } from 'redux';

const addItemReducer = (state, action) => {
    if (state === undefined) {
        let arr = new Array(10);
        for (let i = 0; i < 10; ++i)
            arr[i] = 0;
        state = arr;
    }

    if (action.type === 'ADD_ITEM') {
        let newState = [...state];
        newState[action.payload]++;
        return newState;
    }
    return state;

}

export default combineReducers({
    items: addItemReducer
});