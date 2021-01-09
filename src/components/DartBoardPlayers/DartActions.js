import React from 'react'
import { connect } from 'react-redux';

import { randomizePlayersOrder, randomizeLabels } from '../../store/actions/actions';
import UndoMove from '../NavBar/NavButtons/UndoMove';
import ResetBoard from '../NavBar/NavButtons/ResetBoard';
import randomize from '../../audioclips/randomize.wav';
import reset from '../../audioclips/randomize.wav';
import classes from './DartBoardPlayers.module.css';



function DartActions(props) {

    const randomizePlayersHandler = () => {
        playSound(randomizeAudio);
        props.onRandomizePlayers();
    }

    const randomizeLabelHandler = () => {
        playSound(resetAudio);
        props.onRandomizeLabels();
    }


    const randomizeAudio = new Audio(randomize);
    const resetAudio = new Audio(reset);


    const playSound = audioFile => {
        if (!props.muted) audioFile.play();
    }

    return (
        <>
            {props.players.length > 0 && <div className={classes.randomizePlayers}>
                <div className={classes.randomizeTargets}>
                    <button
                        className={classes.randomizeButton}
                        onClick={randomizeLabelHandler}>
                        Randomize Targets
                    </button>
                </div>
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
    )
}

const mapStateToProps = state => {
    return {
        players: state.players,
        history: state.history,
        muted: state.muted
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRandomizePlayers: () => dispatch(randomizePlayersOrder()),
        onRandomizeLabels: () => dispatch(randomizeLabels())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DartActions);
