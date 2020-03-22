import React from 'react';
import { connect } from 'react-redux';

import { undoMove } from '../../../store/actions/actions';
import Button from '@material-ui/core/Button';

const undoMoves = (props) => {

    const undoMoveHandler = (scoreIndex) => {
        if (props.history.length === 0) {
            return;
        }
        props.onUndoMove(props.playerIndex, scoreIndex)
    }

    return (
        <Button 
            variant="contained"
            color='secondary'
            onClick={undoMoveHandler}>
            Undo Score
        </Button>
    )
}

const mapStateToProps = state => {
    return {
        history: state.history
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(undoMoves);