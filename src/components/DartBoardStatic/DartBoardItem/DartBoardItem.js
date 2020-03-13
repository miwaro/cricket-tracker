import React from 'react';
import { connect } from 'react-redux';

import { modifyLabels } from '../../../store/actions/actions';
import classes from './DartBoardItem.module.css';

const DartBoardItem = (props) => {

    const incrementLabelHandler = () => {
        props.onModifyLabels(props.labelIndex, 'increment');
    }

    const decrementLabelHandler = () => {
        props.onModifyLabels(props.labelIndex, 'decrement');
    }

    return (
            <div className={classes.DartBoardItem}>
                {props.label !== 'B' && <button onClick={decrementLabelHandler}>decrement</button>}

                {props.label}
                
                {props.label !== 'B' && <button onClick={incrementLabelHandler}>increment</button>}
            </div>
    );  
}

const mapDispatchToProps = dispatch => {
    return {
        onModifyLabels: (labelIndex, operation) => dispatch(modifyLabels(labelIndex, operation))
    }
}
      
export default connect(null, mapDispatchToProps)(DartBoardItem);