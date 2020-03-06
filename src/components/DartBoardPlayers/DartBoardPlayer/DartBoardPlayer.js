import React from 'react';
import classes from './DartBoardPlayer.module.css';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { connect } from 'react-redux';
import { updateScore, undoMove, removePlayer } from '../../../store/actions/actions';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';

const dartBoardPlayer = (props) => {

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }
    const removePlayerHandler = () => {
        props.onRemovePlayer( props.playerIndex)
    }

    return (
        <div style={{width: '100%'}}>
            <div className={classes.dartBoardPlayer}> 
                <RemoveCircleIcon 
                    onClick={removePlayerHandler}
                    variant="contained"
                    // color="secondary"
                />
                {props.player.name} </div>
                {
                    (props.players[props.playerIndex].score).map((num, i) => (

                        <DartBoardPlayerControl
                            key={i} 
                            score={num} 
                            scoreIndex={i}
                            onUpdateScore={handleUpdateScore}
                        />  
                    ))
                }
        </div>
    )  
};

   
const mapDispatchToProps = dispatch => {
    return {
        onUpdateScore: (playerIndex, scoreIndex) => dispatch(updateScore(playerIndex, scoreIndex)),
        onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex)),
        onRemovePlayer: (playerIndex) => dispatch(removePlayer(playerIndex))
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        history: state.history
    };
}
      
export default connect(mapStateToProps, mapDispatchToProps)(dartBoardPlayer);