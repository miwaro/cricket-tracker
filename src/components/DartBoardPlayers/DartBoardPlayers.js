import React, { Component } from 'react';
import DartBoardPlayer from './DartBoardPlayer/DartBoardPlayer';
import classes from './DartBoardPlayers.module.css';
import { connect } from 'react-redux';

class dartBoardPlayers extends Component {
    state = {

    }

    render() {
        const dartBoardPlayer = (
            <div className={classes.dartBoardPlayers}>
                {this.props.players.map((player, i) => (
                    <DartBoardPlayer 
                        key={i}
                        player={player}
                        playerIndex={i}
                    />
                ))}             
            </div>
        );
        return ( dartBoardPlayer );
    };
};

const mapStateToProps = state => {
    return {
        players: state.players
    };
}

export default connect(mapStateToProps)(dartBoardPlayers);