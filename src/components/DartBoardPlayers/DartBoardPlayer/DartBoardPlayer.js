import React from 'react';
import { connect } from 'react-redux';

import { updateScore, undoMove, removePlayer } from '../../../store/actions/actions';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import classes from './DartBoardPlayer.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import reset from '../../../audioclips/navigation_transition-right.wav';

const dartBoardPlayer = (props) => {

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }
    const removePlayerHandler = () => {
        playSound(resetAudio);
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
                <Tooltip title="Delete">
                    <IconButton onClick={removePlayerHandler} aria-label="delete">
                        <RemoveCircleIcon
                            variant="contained"
                            color="secondary"
                            style={{
                                paddingRight: 15, 
                                paddingTop: 10, 
                                fontSize: props.players.length > 2 ? 24 : 32,
                                cursor: 'pointer'}} 
                        />
                    </IconButton>
                </Tooltip>
                <div style={{fontSize: props.players.length > 2 ? 32 : 40}}>{props.player.name}</div>
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
        </div>
    </>
    )  
};

const mapStateToProps = state => {
    return {
        players: state.players
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