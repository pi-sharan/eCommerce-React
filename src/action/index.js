export const addItem = (id) => {
    return {
        type: 'ADD_ITEM',
        payload: id
    };
};