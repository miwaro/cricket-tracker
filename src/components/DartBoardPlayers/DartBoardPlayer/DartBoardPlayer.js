import React from 'react';
import classes from './DartBoardPlayer.module.css';
import Button from '@material-ui/core/Button';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';

const dartBoardPlayer = (props) => {

    console.log(props.player.score)

    return (
        <div style={{width: '100%'}}>
            <div className={classes.dartBoardPlayer}>
                    {props.player.name}
            </div>
                {(props.player.score).map((num, i) => (
                    <DartBoardPlayerControl key={i} value={num} score={num} />
                ))}  
            <div className={classes.dartBoardButtons}>
                <Button variant="contained" color="primary">Undo</Button>
                <Button variant="contained" color="secondary">Next</Button>
            </div>
        </div>
    )
       
};
    
        

      
export default dartBoardPlayer;