import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { updateScore, updatePoints, undoMove } from '../../../store/actions/actions';
import TotalScore from '../../DartBoardPlayers/TotalScore';
import Rank from '../../DartBoardPlayers/Rank';
import DartBoardPlayerControl from './DartBoardPlayerControl/DartBoardPlayerControl';
import classes from './DartBoardPlayer.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { removePlayer } from '../../../store/actions/actions';
import IconButton from '@material-ui/core/IconButton';
import remove from '../../../audioclips/navigation_transition-right.wav';
import reset from '../../../audioclips/ui_loading.wav';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

function DartBoardPlayer(props) {
    const [rank, setRank] = useState('Rank');

    const handleUpdateScore = (scoreIndex) => {
        props.onUpdateScore(props.playerIndex, scoreIndex)
    }

    const removePlayerHandler = () => {
        playSound(removeAudio);
        props.onRemovePlayer(props.playerIndex) && setOpen(false);
    }

    const resetAudio = new Audio(reset);
    const removeAudio = new Audio(remove);

    const playSound = audioFile => {
        if (!props.muted) audioFile.play();
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        playSound(resetAudio);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
            <div className={"Player-name"} style={{ width: '100%', position: 'relative' }} >
                <div className={classes.dartBoardPlayer}>
                    <div className={classes.name}
                        style={{ fontSize: props.players.length > 2 ? 27 : 34, }}
                    >
                        {props.player.name}
                    </div>
                    <div style={{ position: 'absolute', top: 0, right: 0 }}>
                        <Tooltip title={`Remove ${props.player.name} from the game`} placement="left">
                            <IconButton onClick={handleClickOpen} aria-label="delete">
                                <RemoveCircleIcon className={classes.removeCircle} />
                            </IconButton>
                        </Tooltip>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                        >
                            <DialogTitle id="alert-dialog-title">{`Remove ${props.player.name} from the game?`}</DialogTitle>
                            <DialogActions>
                                <Button onClick={handleClose} color="secondary">
                                    No
                                </Button>
                                <Button
                                    size="small"
                                    onClick={removePlayerHandler}
                                    color="primary"
                                >
                                    Yes
                                </Button>
                            </DialogActions>
                        </Dialog>
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
                {props.players.length > 1 &&
                    <>
                        < TotalScore
                            playerIndex={props.playerIndex}
                            player={props.player}
                        />
                        < Rank
                            rank={rank}
                            playerIndex={props.playerIndex}
                            player={props.player}
                        />
                    </>
                }
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
        onRemovePlayer: (playerIndex) => dispatch(removePlayer(playerIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DartBoardPlayer);