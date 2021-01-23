import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../action';

const AddSubItem = (props) => {
    const addOnClick = (id) => {
        props.addItem(id);
    }

    return (
        <div className="AddSubButton">
            <button className="ui small primary button">
                -
            </button>
            <div className="countItem" >
                {props.items[props.id]}
            </div>
            <button className="ui small button" onClick={() => addOnClick(props.id)}>
                +
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return { items: state.items };
}

export default connect(mapStateToProps, { addItem })(AddSubItem);