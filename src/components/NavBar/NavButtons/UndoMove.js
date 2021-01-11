import React from 'react';
import { connect } from 'react-redux';
import randomize from '../../../audioclips/undo.wav';

import { undoMove } from '../../../store/actions/actions';
import classes from './AddPlayer/AddPlayer.module.css'

const undoMoves = (props) => {

    const undoMoveHandler = (scoreIndex) => {
        if (props.history.length === 0) {
            return;
        }
        playSound(randomizeAudio);
        props.onUndoMove(props.playerIndex, scoreIndex)
    }

    const randomizeAudio = new Audio(randomize);

    const playSound = audioFile => {
        if (!props.muted) audioFile.play();
    }

    return (
        <button
            className="redButton"
            onClick={undoMoveHandler}>
            Undo<br></br>Score
        </button>
    )
}

const mapStateToProps = state => {
    return {
        history: state.history,
        muted: state.muted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(undoMoves);