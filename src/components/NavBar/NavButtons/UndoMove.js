import React from 'react';
import { connect } from 'react-redux';
import randomize from '../../../audioclips/undo.wav';

import { undoMove } from '../../../store/actions/actions';
import Button from '@material-ui/core/Button';

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
        <Button
            // style={{ fontFamily: 'Audiowide' }}
            // size="small"
            variant="contained"
            color='secondary'
            onClick={undoMoveHandler}>
            Undo<br></br>Score
        </Button>
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