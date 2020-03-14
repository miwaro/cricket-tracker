import React from 'react';
import { connect } from 'react-redux';

import { updateScore, undoMove, removePlayer} from '../../../store/actions/actions';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import classes from './DartBoardPlayer.module.css';

import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone';
import Tooltip from '@material-ui/core/Tooltip';

import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

const dartBoardPlayer = (props) => {

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }
    const removePlayerHandler = () => {
        props.onRemovePlayer(props.playerIndex)
    }

    return (
        <div className={"Player-name"} style={{width: '100%'}}>
            <div className={classes.dartBoardPlayer} onClick={removePlayerHandler}> 
                {props.player.name} 
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
            <div className={classes.removePlayer} onClick={removePlayerHandler}> 
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={removePlayerHandler}
                    style={{ cursor: 'pointer'}}>
                    Remove Player
                </Button>
            </div>
        </div>
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
        onRemovePlayer: (playerIndex) => dispatch(removePlayer(playerIndex)),
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(dartBoardPlayer);