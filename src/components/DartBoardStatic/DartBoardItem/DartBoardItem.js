import React from 'react';
import { connect } from 'react-redux';

import ArrowLeftTwoToneIcon from '@material-ui/icons/ArrowLeftTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';

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
        <>
            <div className={classes.DartBoardItem}>
                {props.label !== 'B' &&
                     <ArrowLeftTwoToneIcon 
                        style={{
                            fontSize : 45,
                            cursor: 'pointer',
                            color: '#dbe4eb'
                    }}
                        
                        onClick={decrementLabelHandler}/>}

                {props.label}

                {props.label !== 'B' &&
                    <ArrowRightTwoToneIcon 
                        style={{fontSize : 45, 
                        cursor: 'pointer',
                        color: '#dbe4eb'
                    }}
                        onClick={incrementLabelHandler}/>}  
            </div>
        </>
    );  
}

const mapStateToProps = state => {
    return {
        history: state.history
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onModifyLabels: (labelIndex, operation) => dispatch(modifyLabels(labelIndex, operation))
    }
}
      
export default connect(mapStateToProps, mapDispatchToProps)(DartBoardItem);