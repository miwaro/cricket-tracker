import React from 'react';
import { connect } from 'react-redux';

import { updateScore, undoMove, removePlayer} from '../../../store/actions/actions';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import classes from './DartBoardPlayer.module.css';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const dartBoardPlayer = (props) => {

    console.log(props.players.score)

    // let totalScore = props.players.score.reduce((currentScore, score,) => {
    //     return score + currentScore
    // }, 0)

    // if (totalScore === 21) {
    //     return <p>you win</p>;
    // }
   

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }
    const removePlayerHandler = () => {
        props.onRemovePlayer(props.playerIndex)
    }

    return (
        <div className={"Player-name"} style={{width: '100%'}}>
            <div className={classes.dartBoardPlayer}> 
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <RemoveCircleIcon 
                            onClick={removePlayerHandler}
                            variant="contained"
                            color="secondary"
                            style={{ 
                                paddingRight: 30, 
                                paddingTop: 10, 
                                fontSize: 30,
                                cursor: 'pointer'}} 
                        />
                    </IconButton>
                </Tooltip>
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
        </div>
    )  
};

   
const mapDispatchToProps = dispatch => {
    return {
        onUpdateScore: (playerIndex, scoreIndex) => dispatch(updateScore(playerIndex, scoreIndex)),
        onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex)),
        onRemovePlayer: (playerIndex) => dispatch(removePlayer(playerIndex)),
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    };
}
      
export default connect(mapStateToProps, mapDispatchToProps)(dartBoardPlayer);