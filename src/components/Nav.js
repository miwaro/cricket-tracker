import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ResetBoard from './DartBoardStatic/ResetBoard/ResetBoard';
import { undoMove } from '../store/actions/actions';
import { connect } from 'react-redux';


const Nav = (props) => {

  const undoMoveHandler = (scoreIndex) => {
   props.onUndoMove(props.playerIndex, scoreIndex)
}

    return (
      <>
      <div className="Nav-container">
          <Grid container justify="center">
            <Grid item xs={1.5}>
                <Button size="large" className="theme-button-1">
                Add Player
                </Button>
            </Grid>
            <Grid item xs={1.5}>
                <Button 
                    size="large" className="theme-button-1" variant="contained"
                    color="primary"
                    onClick={undoMoveHandler}>
                    Undo Score
                </Button>
            </Grid>
            <Grid item xs={1.5}>
              <ResetBoard />
            </Grid>
          </Grid>
      </div>
      </>

    );
}

const mapDispatchToProps = dispatch => {
  return {
      onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex)),    
  }
}

const mapStateToProps = state => {
  return {
      players: state.players,
      history: state.history
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);