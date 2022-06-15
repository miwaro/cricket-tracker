import React from 'react';
import { connect } from 'react-redux';


import classes from './DartBoardPlayerControl.module.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import like from '../../../../audioclips/notification_simple-01.wav';
import warning from '../../../../audioclips/notification_high-intensity.wav';
import success from '../../../../audioclips/hero_decorative-celebration-01.wav';



const DartBoardPlayerControl = (props) => {

    const updateScoreHandler = () => {
        if (props.targets[props.scoreIndex].isClosed === true) return;
        props.onUpdateScore(props.scoreIndex)
        props.onUpdatePoints(props.scoreIndex)
    }

    const likeAudio = new Audio(like);
    const warningAudio = new Audio(warning);
    const successAudio = new Audio(success);

    const playSound = audioFile => {
        if (props.targets[props.scoreIndex].isClosed === true) return;
        if (!props.muted) audioFile.play();
    }

    return (
        <>
            <div className={classes.DartBoardPlayerControl} onClick={updateScoreHandler}>

                {props.score === 0 &&
                    <AddCircleIcon
                        className={classes.circle}
                        onClick={() => playSound(likeAudio)}
                    />
                }

                {props.score === 1 &&
                    <div className={classes.slash} onClick={() => playSound(warningAudio)}>
                        /
                    </div>}
                {props.score === 2 &&
                    <CloseIcon onClick={() => playSound(successAudio)}
                        style={{
                            cursor: 'pointer',
                            color: '#FFF',
                            fontSize: '40'
                        }}
                    />}

                {props.score >= 3 &&
                    <HighlightOffIcon
                        className={classes.complete}
                        onClick={() => playSound(likeAudio)}
                        style={{
                            cursor: 'pointer',
                            color: '#FFF',
                            fontSize: '36'
                        }}
                    />}
            </div>
        </>

    )
}

const mapStateToProps = state => {
    return {
        muted: state.muted,
        players: state.players,
        targets: state.targets
    };
}

export default connect(mapStateToProps)(DartBoardPlayerControl);