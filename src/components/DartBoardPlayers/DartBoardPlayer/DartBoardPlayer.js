import React from 'react';
import { connect } from 'react-redux';

import { updateScore, undoMove } from '../../../store/actions/actions';
import TotalScore from '../../DartBoardPlayers/TotalScore';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import classes from './DartBoardPlayer.module.css';

function DartBoardPlayer(props) {

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
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
        return rank;
    }

    return (
        <>
            <div className={"Player-name"} style={{ width: '100%' }}>
                <div className={classes.dartBoardPlayer}>
                    <div className={classes.name}
                        style={{ fontSize: props.players.length > 2 ? 27 : 34, }}
                    >
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
                    playerIndex={props.playerIndex}
                    player={props.player}
                />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DartBoardPlayer);