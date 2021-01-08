import React from 'react';
import { connect } from 'react-redux';

import DartBoardItem from './DartBoardItem/DartBoardItem';
import PlayersBox from './PlayersBox/PlayersBox';
import classes from '../DartBoardPlayers/DartBoardPlayer/DartBoardPlayer.module.css';

const DartBoardStatic = (props) => {

    return (

        <div className="Label-style">

            <PlayersBox />

            {props.labels.map((label, i) => (
                <DartBoardItem
                    key={i}
                    label={label}
                    labelIndex={i}
                />
            ))}

            {
                props.players.length > 0 &&
                <>
                    <div className={classes.playerInfo}>
                        Player Info
                    </div>
                    <div className={classes.playerInfo}>
                        Actions
                    </div>
                </>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        players: state.players,
        history: state.history,
        labels: state.labels,
        muted: state.muted
    }
}


export default connect(mapStateToProps)(DartBoardStatic);