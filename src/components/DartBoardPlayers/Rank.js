import React from 'react'
import { connect } from 'react-redux';
import classes from './DartBoardPlayer/DartBoardPlayerControl/DartBoardPlayerControl.module.css';

const Rank = (props) => {
    return (
        <div className={classes.rank}>
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

export default connect(mapStateToProps)(Rank);


