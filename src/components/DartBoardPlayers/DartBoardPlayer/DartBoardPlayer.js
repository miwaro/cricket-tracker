import React from 'react';
import classes from './DartBoardPlayer.module.css';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { connect } from 'react-redux';
import { updateScore, undoMove, removePlayer, addPlayer } from '../../../store/actions/actions';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import AddPlayer from './AddPlayer';

const dartBoardPlayer = (props) => {

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }
    const removePlayerHandler = () => {
        props.onRemovePlayer(props.playerIndex)
    }

    return (
        <div style={{width: '100%'}}>
            <div className={classes.dartBoardPlayer}> 
                <RemoveCircleIcon 
                    onClick={removePlayerHandler}
                    variant="contained"
                    color="secondary"
                />
                <AddPlayer 
                    onClick={removePlayerHandler}
                    variant="contained"
                    color="secondary"
                />
                {/* {props.player.name}  */}
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
    )  
};

   
const mapDispatchToProps = dispatch => {
    return {
        onUpdateScore: (playerIndex, scoreIndex) => dispatch(updateScore(playerIndex, scoreIndex)),
        onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex)),
        onRemovePlayer: (playerIndex) => dispatch(removePlayer(playerIndex)),
        onAddName: (name) => dispatch(addPlayer(name))
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    };
}
      
export default connect(mapStateToProps, mapDispatchToProps)(dartBoardPlayer);