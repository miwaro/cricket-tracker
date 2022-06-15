import React, { useState } from 'react'
import { connect } from 'react-redux';

import classes from './DartBoardPlayer/DartBoardPlayerControl/DartBoardPlayerControl.module.css';
import remove from '../../audioclips/navigation_transition-right.wav';
import reset from '../../audioclips/ui_loading.wav';
import { removePlayer } from '../../store/actions/actions';
import Tooltip from '@material-ui/core/Tooltip';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const TotalScore = (props) => {

    const removePlayerHandler = () => {
        if (!props.muted) playSound(removeAudio);
        props.onRemovePlayer(props.playerIndex) && setOpen(false);
    }

    const resetAudio = new Audio(reset);
    const removeAudio = new Audio(remove);

    const playSound = audioFile => {
        audioFile.play();
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        playSound(resetAudio);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div
            className={classes.DartBoardPlayerControl}
        >
            <div>
                {`${props.score}/21`}
            </div>
            {props.players.length > 1 &&
                <div>Points: {props.player.points}</div>
            }
            <Tooltip title="Remove Player" placement="top">
                <IconButton onClick={handleClickOpen} aria-label="delete">
                    <RemoveCircleIcon
                        className={classes.removeCircle} />
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
                        color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            <div>
                {`${props.rank}`}
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        players: state.players,
        muted: state.muted
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRemovePlayer: (playerIndex) => dispatch(removePlayer(playerIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalScore);


