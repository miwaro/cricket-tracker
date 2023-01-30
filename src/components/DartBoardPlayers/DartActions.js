import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { randomizePlayersOrder, randomizeLabels } from '../../store/actions/actions';
import Rules from '../../components/RulesSidebar'
import UndoMove from '../NavBar/NavButtons/UndoMove';
import ResetBoard from '../NavBar/NavButtons/ResetBoard';
import randomize from '../../audioclips/randomize.wav';
import reset from '../../audioclips/randomize.wav';
import classes from './DartBoardPlayers.module.css';



function DartActions(props) {
    const [canRandomize, setCanRandomize] = useState(true)

    const randomizePlayersHandler = () => {
        if (canRandomize === false) {
            return alert('The game has already started so you can not randomize the targets')
        }
        playSound(randomizeAudio);
        props.onRandomizePlayers();
    }

    useEffect(() => {
        setCanRandomize(true);
        props.players.forEach((player) => {
            let total = player.score.reduce((a, b) => a + b);
            if (total > 0) {
                setCanRandomize(false)
            }
        }, [props.players]);

    })

    const randomizeLabelHandler = () => {
        if (canRandomize === true) {
            playSound(resetAudio);
            props.onRandomizeLabels();
        } else if (canRandomize === false) {
            return alert('The game has already started so you can not randomize the targets')
        }
    }

    const randomizeAudio = new Audio(randomize);
    const resetAudio = new Audio(reset);


    const playSound = audioFile => {
        if (!props.muted) audioFile.play();
    }

    return (
        <>
            {props.players.length > 0 && <div className={classes.randomizePlayers}>
                <UndoMove />
                <div className={classes.randomizeTargets}>
                    <button
                        disabled={canRandomize === false}
                        className={classes.randomizeButton}
                        onClick={randomizeLabelHandler}>
                        Randomize<br></br>Targets
                    </button>
                </div>
                <span
                    className={classes.reset}
                >
                    <ResetBoard />
                </span>
                <button
                    className={classes.randomizeButton}
                    disabled={canRandomize === false}
                    onClick={randomizePlayersHandler}
                >
                    Randomize<br></br>Players
                </button>
                <Rules />
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
