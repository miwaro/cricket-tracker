import React from 'react';
import classes from './DartBoardPlayer.module.css';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { updateScore } from '../../../store/actions/addPlayer';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';

const dartBoardPlayer = (props) => {
    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }

    return (
        <div style={{width: '100%'}}>
            <div className={classes.dartBoardPlayer}>
                    {props.player.name}
            </div>
                {(props.players[props.playerIndex].score).map((num, i) => (
                    <DartBoardPlayerControl key={i} score={num} scoreIndex={i} onUpdateScore={handleUpdateScore}/>
                ))}  
            <div className={classes.dartBoardButtons}>
                <Button variant="contained" color="primary">Undo</Button>
                <Button variant="contained" color="secondary">Next</Button>
            </div>
        </div>
    )  
};

   
const mapDispatchToProps = dispatch => {
    return {
        onUpdateScore: (playerIndex, scoreIndex) => dispatch(updateScore(playerIndex, scoreIndex)),
    }
}

const mapStateToProps = state => {
    return {
        players: state.players
    };
}
      
export default connect(mapStateToProps, mapDispatchToProps)(dartBoardPlayer);