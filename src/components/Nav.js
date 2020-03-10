import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ResetBoard from './DartBoardStatic/ResetBoard/ResetBoard';
import AddPlayer from './DartBoardPlayers/DartBoardPlayer/AddPlayer';
import GameOverMessage from './GameOverMessage/GameOverMessage';
import { undoMove } from '../store/actions/actions';

const styles = {
  root: {   
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 5
  }
}

const Nav = (props) => {
  const { classes } = props;
  const undoMoveHandler = (scoreIndex) => {
    props.onUndoMove(props.playerIndex, scoreIndex)
  }

    return (
      <>
      <div className="Nav-container">
          <Grid container justify="center">
            <Grid className={classes.root} item xs={1.5}>
                <AddPlayer/>
            </Grid>
            <Grid className={classes.root} item xs={1.5}>
                <Button 
                    variant="contained"
                    style={{backgroundColor: "#9e7f2a", color: "#FFF"}}
                    onClick={undoMoveHandler}>
                    Undo Score
                </Button>
            </Grid>
            <Grid className={classes.root} item xs={1.5}>
              <ResetBoard />
            </Grid>
          </Grid>
          <GameOverMessage />
      </div>
      </>

    );
}

const mapStateToProps = state => {
  return {
      players: state.players,
      winningPlayerIndex: state.winningPlayerIndex
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Nav));