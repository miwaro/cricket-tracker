import React from 'react';
import { connect } from 'react-redux';
import { undoMove } from '../../../store/actions/actions';
import Button from '@material-ui/core/Button';

const undoMoves = (props) => {

    const undoMoveHandler = (scoreIndex) => {
        props.onUndoMove(props.playerIndex, scoreIndex)
    }

    return (
        <Button 
            variant="contained"
            style={{backgroundColor: "#9e7f2a", color: "#FFF"}}
            onClick={undoMoveHandler}>
            Undo Score
        </Button>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex))
    }
  }

export default connect(null, mapDispatchToProps)(undoMoves);