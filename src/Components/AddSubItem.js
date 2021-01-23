import React from 'react';

const AddSubItem = () => {
    return (
        <div className="AddSubButton">
            <button class="ui small primary button">
                -
            </button>
            <div className="countItem" >
                0
            </div>
            <button class="ui small button">
                +
            </button>
        </div>
    );
}

export default AddSubItem;