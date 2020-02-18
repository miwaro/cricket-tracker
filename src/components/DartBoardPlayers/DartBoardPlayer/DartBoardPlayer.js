import React from 'react';
import classes from './DartBoardPlayer.module.css';
import DartBoardPlayerControl from '../../DartBoardPlayerControl/DartBoardPlayerControl';

const dartBoardPlayer = (props) => (
    <div style={{width: '100%'}}>
        <div className={classes.DartBoardPlayer}>
                {props.player.name}
        </div>
        {Object.keys(props.player.board).map((num, i) => (
            <DartBoardPlayerControl key={i} value={num} score={props.player.board[num]} />
        ))}
    </div>
        
);
      
export default dartBoardPlayer;