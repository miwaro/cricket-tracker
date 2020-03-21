import React from 'react';
import { connect } from 'react-redux';

import { updateScore } from '../../../store/actions/actions';
import {  undoMove } from '../../../store/actions/actions';
import { removePlayer } from '../../../store/actions/actions';
    

import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import classes from './DartBoardPlayer.module.css';
import Button from '@material-ui/core/Button';


const dartBoardPlayer = (props) => {

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }
    const removePlayerHandler = () => {
        props.onRemovePlayer(props.playerIndex)
    }

    return (
        <>
        <div className={"Player-name"} style={{width: '100%'}}>
            <div className={classes.dartBoardPlayer}> 
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
            <div className={classes.removePlayer}> 
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={removePlayerHandler}
                    style={{ cursor: 'pointer'}}>
                    Remove Player
                </Button>
            </div>
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