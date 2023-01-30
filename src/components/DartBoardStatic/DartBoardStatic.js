import React from 'react';
import { connect } from 'react-redux';

import DartBoardItem from './DartBoardItem/DartBoardItem';
import PlayersBox from './PlayersBox/PlayersBox';
import classes from '../DartBoardPlayers/DartBoardPlayer/DartBoardPlayer.module.css';

const DartBoardStatic = (props) => {

    return (
        <div className="Label-style">
            <PlayersBox />
            {props?.targets?.map((target, i) => (
                <DartBoardItem
                    key={i}
                    target={target?.target}
                    isClosed={target.isClosed}
                    labelIndex={i}
                />
            ))}
            {props.players.length > 1 &&
                <>
                    <div className={classes.playerInfo}>
                        Total
                    </div>
                    <div className={classes.Rank}>
                        Rank
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
        targets: state.targets,
        muted: state.muted
    }
}


export default connect(mapStateToProps)(DartBoardStatic);