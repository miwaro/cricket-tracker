import React from 'react';
import { connect } from 'react-redux';

import DartBoardPlayer from './DartBoardPlayer/DartBoardPlayer';
import classes from './DartBoardPlayers.module.css';

const dartBoardPlayers = (props) => {
    return (
        <>
            <div className={classes.dartBoardPlayers}>
                {props.players.map((player, i) => (
                    <DartBoardPlayer
                        player={player}
                        playerIndex={i}
                        key={i}
                    />
                ))}
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        players: state.players,
        history: state.history,
        muted: state.muted
    };
}

export default connect(mapStateToProps)(dartBoardPlayers);