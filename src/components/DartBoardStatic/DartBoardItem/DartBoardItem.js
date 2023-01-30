import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import ArrowLeftTwoToneIcon from '@material-ui/icons/ArrowLeftTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import reset from '../../../audioclips/arrow.wav';
import { modifyLabels } from '../../../store/actions/actions';
import classes from './DartBoardItem.module.css';

const DartBoardItem = (props) => {
    const [canIncrement, setCanIncrement] = useState(true)

    useEffect(() => {
        setCanIncrement(true);
        props.players.forEach((player) => {
            let total = player.score.reduce((a, b) => a + b);
            if (total > 0) {
                setCanIncrement(false)
            }
        }, [props.players]);
    })


    const incrementLabelHandler = () => {
        if (canIncrement === false) {
            return alert('The game has already started so you can not randomize the targets')
        }
        playSound(resetAudio);
        props.onModifyLabels(props.labelIndex, 'increment');
    }

    const decrementLabelHandler = () => {
        if (canIncrement === false) {
            return alert('The game has already started so you can not randomize the targets')
        }
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
                {props.target !== 25 &&
                    <ArrowLeftTwoToneIcon
                        className={classes.DartBoardItem}
                        onClick={decrementLabelHandler} />}
                {props.target}
                {props.target !== 25 &&
                    <ArrowRightTwoToneIcon
                        className={classes.DartBoardItem}
                        onClick={incrementLabelHandler} />}
                {props.isClosed === true &&
                    <span className={classes.targetClosed}>closed</span>}
            </div>
        </>
    );
}


const mapStateToProps = state => {
    return {
        players: state.players,
        history: state.history,
        muted: state.muted,
        targets: state.targets
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onModifyLabels: (labelIndex, operation) => dispatch(modifyLabels(labelIndex, operation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DartBoardItem);