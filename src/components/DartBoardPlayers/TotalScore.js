import React from 'react'
import { connect } from 'react-redux';
import classes from './DartBoardPlayer/DartBoardPlayerControl/DartBoardPlayerControl.module.css';

const TotalScore = (props) => {
    return (
        <div className={classes.DartBoardPlayerControl}>
            {props.players.length > 1 &&
                <div style={{ fontSize: '13px' }}>Pts: {props.player.points}</div>
            }
            {props.players.length > 1 &&
                <div>
                    {`${props.rank}`}
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players,
        muted: state.muted
    };
}

export default connect(mapStateToProps)(TotalScore);


