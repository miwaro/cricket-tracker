
import React from 'react'
import classes from './DartBoardPlayer/DartBoardPlayerControl/DartBoardPlayerControl.module.css';

export const TotalScore = ({ score }) => {

    return (
        <div
            className={classes.DartBoardPlayerControl}
            style={{ fontSize: '28px' }}
        >
            {`${score}/21`}
        </div>
    )
}




export default TotalScore;

