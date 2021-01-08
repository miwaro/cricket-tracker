import React from 'react';
import { connect } from 'react-redux';

import { updateScore, undoMove, removePlayer } from '../../../store/actions/actions';
import TotalScore from '../../DartBoardPlayers/TotalScore';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import classes from './DartBoardPlayer.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import reset from '../../../audioclips/navigation_transition-right.wav';

function DartBoardPlayer(props) {

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }

    const removePlayerHandler = () => {
        if (!props.muted) playSound(resetAudio);
        props.onRemovePlayer(props.playerIndex)
    }

    const resetAudio = new Audio(reset);

    const playSound = audioFile => {
        audioFile.play();
    }

    const getScore = () => {
        const player = props.players[props.playerIndex];
        const score = player.score.reduce((a, b) => a + b);
        return score;

    }

    const getRank = () => {
        const players = props.players.slice();
        const scores = players.map(player => player.score.reduce((a, b) => a + b));  // [ 12, 4, 16]
        const currentPlayerScore = scores[props.playerIndex]; // 12
        scores.splice(props.playerIndex, 1); // [ 4, 16 ]
        scores.sort((a, b) => b - a); // [ 16, 4 ]
        let rank;
        let i = 0;
        while (!rank && i < scores.length) {
            if (currentPlayerScore >= scores[i]) {
                rank = i + 1; // rank = 2
            }
            i++;
        }
        if (!rank) {
            rank = scores.length + 1;
        }

        if (rank === 1) {
            rank = '1st'
        } else if (rank === 2) {
            rank = '2nd'
        } else if (rank === 3) {
            rank = '3rd'
        } else if (rank === 4) {
            rank = '4th'
        }
        return rank; // 2


        // const playerArr = [];
        // const score = getScore();
        // const allPlayers = [...props.players];
        // let len = allPlayers.length;

        // for (let i = 0; i < len; i += 1) {
        //     const newScores = allPlayers[i].score.reduce((a, b) => a + b);
        //     playerArr.push(newScores);
        // }

        // const sortedScores = playerArr.sort((a, b) => b - a);

        // const found = sortedScores.findIndex(element => element === score);

        // return found + 1;
    }

    return (
        <>
            <div className={"Player-name"} style={{ width: '100%' }}>

                <div className={classes.dartBoardPlayer}>

                    <Tooltip title="Remove Player">
                        <IconButton onClick={removePlayerHandler} aria-label="delete">
                            <RemoveCircleIcon
                                className={classes.removeCircle} />
                        </IconButton>
                    </Tooltip>

                    <div className={classes.name}
                        style={{
                            fontSize: props.players.length > 2 ? 27 : 34,
                        }}>

                        {props.player.name}
                    </div>

                </div>

                {
                    (props.players[props.playerIndex].score).map((num, i) => (

                        <DartBoardPlayerControl
                            key={i}
                            score={num}
                            scoreIndex={i}
                            totalScore={num}
                            onUpdateScore={handleUpdateScore}
                        />
                    ))
                }

                < TotalScore
                    score={getScore()}
                    rank={getRank()}
                />

                <div className={classes.removePlayer}>
                    <Button
                        size="small"
                        variant="contained"
                        color='secondary'
                        onClick={removePlayerHandler}>
                        REMOVE<br></br>PLAYER
                </Button>
                </div>
            </div>
        </>
    )
};

const mapStateToProps = state => {
    return {
        players: state.players,
        muted: state.muted
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateScore: (playerIndex, scoreIndex) => dispatch(updateScore(playerIndex, scoreIndex)),
        onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex)),
        onRemovePlayer: (playerIndex) => dispatch(removePlayer(playerIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DartBoardPlayer);