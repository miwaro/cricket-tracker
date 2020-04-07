import React from 'react';
import { connect } from 'react-redux';

import { updateScore, undoMove, removePlayer } from '../../../store/actions/actions';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import classes from './DartBoardPlayer.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import reset from '../../../audioclips/navigation_transition-right.wav';

const dartBoardPlayer = (props) => {

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }
    const removePlayerHandler = () => {
        if (!props.muted)playSound(resetAudio);
        props.onRemovePlayer(props.playerIndex)
    }

    const resetAudio = new Audio(reset);
      
    const playSound = audioFile => {
            audioFile.play();
        }

    return (
        <>
        <div className={"Player-name"} style={{width: '100%'}}>

            <div className={classes.dartBoardPlayer}>

                <Tooltip title="Remove Player">
                    <IconButton onClick={removePlayerHandler} aria-label="delete">
                        <RemoveCircleIcon
                            className={classes.removeCircle}/>
                    </IconButton>
                </Tooltip>

                <div className={classes.name}
                    style={{
                        fontSize: props.players.length > 2 ? 27 : 34,
                        color: '#039be5'}}>
                            
                            {props.player.name}
                </div>

            </div>    
            
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
                <div className={classes.removePlayer}> 
                <Button
                    size="small"
                    variant="contained"
                    color='secondary'
                    onClick={removePlayerHandler}>
                        REMOVE PLAYER
                </Button>
            </div>
        </div>
    </>
    )  
};

const mapStateToProps = state => {
    return {
        players: state.players,
        muted: state.muted
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateScore: (playerIndex, scoreIndex) => dispatch(updateScore(playerIndex, scoreIndex)),
        onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex)),
        onRemovePlayer: (playerIndex) => dispatch(removePlayer(playerIndex))
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(dartBoardPlayer);