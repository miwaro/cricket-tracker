
import React from 'react'
import classes from './DartBoardPlayer/DartBoardPlayerControl/DartBoardPlayerControl.module.css';

export const TotalScore = ({ score, rank }) => {

    return (
        <div
            className={classes.DartBoardPlayerControl}

        >
            {`${score}/21 \u00A0 ${rank}`}
        </div>
    )
}




export default TotalScore;

