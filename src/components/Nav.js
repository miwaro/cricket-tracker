import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ResetBoard from './DartBoardStatic/ResetBoard/ResetBoard';
import { undoMove } from '../store/actions/actions';
import AddPlayer from './DartBoardPlayers/DartBoardPlayer/AddPlayer';
import { connect } from 'react-redux';

// const styles = {
//   root: {
      
//       border: '3px solid #dbe4eb !important',
//       backgroundColor: '#081818',
//       color: '#e2e2e2',
//       borderRadius: 10
//   }
// }


const Nav = (props) => {

  const undoMoveHandler = (scoreIndex) => {
   props.onUndoMove(props.playerIndex, scoreIndex)
}
    return (
      <>
      <div className="Nav-container">
          <Grid container justify="center">
            <Grid item xs={1.5}>
                <AddPlayer/>
            </Grid>
            <Grid item xs={1.5}>
                <Button 
                    variant="contained"
                    style={{backgroundColor: "#9e7f2a", color: "#FFF"}}
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
      players: state.players
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);