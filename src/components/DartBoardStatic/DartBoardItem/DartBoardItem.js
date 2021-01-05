import React from 'react';
import { connect } from 'react-redux';

import ArrowLeftTwoToneIcon from '@material-ui/icons/ArrowLeftTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import reset from '../../../audioclips/arrow.wav';
import { modifyLabels } from '../../../store/actions/actions';
import classes from './DartBoardItem.module.css';

const DartBoardItem = (props) => {

    const incrementLabelHandler = () => {
        playSound(resetAudio);
        props.onModifyLabels(props.labelIndex, 'increment');
    }

    const decrementLabelHandler = () => {
        playSound(resetAudio);
        props.onModifyLabels(props.labelIndex, 'decrement');
    }

    const resetAudio = new Audio(reset);

    const playSound = audioFile => {
        if (!props.muted) audioFile.play();
    }

    return (
        <>
            <div className={classes.numbers}>
                {props.label !== 'B' && props.label !== 'Total' &&

                    <ArrowLeftTwoToneIcon
                        className={classes.DartBoardItem}
                        onClick={decrementLabelHandler} />}

                {props.label}

                {props.label !== 'B' && props.label !== 'Total' &&
                    <ArrowRightTwoToneIcon
                        className={classes.DartBoardItem}
                        onClick={incrementLabelHandler} />}
            </div>
        </>
    );
}


const mapStateToProps = state => {
    return {
        history: state.history,
        muted: state.muted
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onModifyLabels: (labelIndex, operation) => dispatch(modifyLabels(labelIndex, operation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DartBoardItem);