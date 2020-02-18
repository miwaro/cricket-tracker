import React from 'react';
import classes from './DartBoardPlayer.module.css';
import Button from '@material-ui/core/Button';
import DartBoardPlayerControl from '../../DartBoardPlayerControl/DartBoardPlayerControl';
import UndoIcon from '@material-ui/icons/Undo';

const dartBoardPlayer = (props) => {
    // let className = 'dartBoardPlayer dartBoardButtons';
    return (
        <div style={{width: '100%'}}>
            <div className={classes.dartBoardPlayer}>
                    {props.player.name}
            </div>
                {Object.keys(props.player.board).map((num, i) => (
                <DartBoardPlayerControl key={i} value={num} score={props.player.board[num]} />
                ))}
            <div classname={classes.dartBoardButtons}>
                <UndoIcon variant="outlined" color="primary" />
                <Button variant="contained" color="secondary">Next</Button>
            </div>
        </div>
    )
       
};
    
        

      
export default dartBoardPlayer;