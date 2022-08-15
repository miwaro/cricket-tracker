import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { updateScore, updatePoints, undoMove } from '../../../store/actions/actions';
import TotalScore from '../../DartBoardPlayers/TotalScore';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import classes from './DartBoardPlayer.module.css';

function DartBoardPlayer(props) {
    const [rank, setRank] = useState('Rank');

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }

    const handleUpdatePoints = (scoreIndex) => {
        props.onUpdatePoints(props.playerIndex, scoreIndex)
    }

    useEffect(() => {
        const players = props.players.slice();
        const scores = players.map(player => player.score.reduce((a, b) => a + b));
        const points = players.map(player => player.points)
        const currentPlayerScore = scores[props.playerIndex];
        const currentPlayerPoints = points[props.playerIndex];
        const isZero = (currentValue) => currentValue === 0;
        scores.sort((a, b) => b - a);
        points.sort((a, b) => b - a);
        let rank;
        let i = 0;
        let j = 0;

        if (points.every(isZero)) {
            while (!rank && i < scores.length) {
                if (currentPlayerScore >= scores[i]) {
                    rank = i + 1;
                }
                i++;
            }
            if (rank === 1) {
                setRank('1st')
            } else if (rank === 2) {
                setRank('2nd')
            } else if (rank === 3) {
                setRank('3rd')

            } else if (rank === 4) {
                setRank('4th')

            }
        } else if (points.some(el => el > 0)) {
            while (!rank && j < points.length) {

                if (currentPlayerPoints >= points[j]) {
                    rank = j + 1;
                }
                j++;
            }

            if (rank === 1) {
                setRank('1st')
            } else if (rank === 2) {
                setRank('2nd')
            } else if (rank === 3) {
                setRank('3rd')
            } else if (rank === 4) {
                setRank('4th')
            }

        }
        return rank;

    }, [props.players, props.playerIndex])

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
                            onUpdatePoints={handleUpdatePoints}
                        />
                    ))
                }

                < TotalScore
                    rank={rank}
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
        muted: state.muted,
        targets: state.targets
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateScore: (playerIndex, scoreIndex) => dispatch(updateScore(playerIndex, scoreIndex)),
        onUpdatePoints: (playerIndex, scoreIndex) => dispatch(updatePoints(playerIndex, scoreIndex)),
        onUndoMove: (playerIndex, scoreIndex) => dispatch(undoMove(playerIndex, scoreIndex)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DartBoardPlayer);