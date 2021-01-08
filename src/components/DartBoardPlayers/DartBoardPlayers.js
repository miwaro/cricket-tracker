import React from 'react';
import { connect } from 'react-redux';

import { randomizePlayersOrder } from '../../store/actions/actions';
import randomize from '../../audioclips/randomize.wav';
import UndoMove from '../NavBar/NavButtons/UndoMove';
import ResetBoard from '../NavBar/NavButtons/ResetBoard';
import DartBoardPlayer from './DartBoardPlayer/DartBoardPlayer';
import classes from './DartBoardPlayers.module.css';

const dartBoardPlayers = (props) => {

    const randomizePlayersHandler = () => {
        playSound(randomizeAudio);
        props.onRandomizePlayers();
    }

    const randomizeAudio = new Audio(randomize);

    const playSound = audioFile => {
        if (!props.muted) audioFile.play();
    }

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

            {props.players.length > 0 && <div className={classes.randomizePlayers}>
                <UndoMove />
                <button
                    className={classes.randomizeButton}
                    onClick={randomizePlayersHandler}
                >
                    Randomize Players
                </button>

                <span
                    className={classes.reset}
                >
                    <ResetBoard />
                </span>
            </div>}

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

const mapDispatchToProps = dispatch => {
    return {
        onRandomizePlayers: () => dispatch(randomizePlayersOrder())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dartBoardPlayers);