import React, { useState } from 'react';
import { connect } from 'react-redux';

import { resetBoard } from '../../../store/actions/actions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import reset from '../../../audioclips/ui_loading.wav';



const ResetBoard = (props) => {

    const resetBoardHandler = () => {
        props.onResetBoard() && setOpen(false);
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        playSound(resetAudio);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const resetAudio = new Audio(reset);

    const playSound = audioFile => {
        if (!props.muted) audioFile.play();
    }

    return (
        <div>
            <button
                className="redButton"
                style={{ width: '100%' }}
                onClick={handleClickOpen}
            >
                Reset Game
            </button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to reset the targets and scores?"}</DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        No
                </Button>
                    <Button
                        size="small"
                        onClick={resetBoardHandler}
                        color="primary">
                        Yes
                </Button>
                </DialogActions>
            </Dialog>
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
        onResetBoard: () => dispatch(resetBoard()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetBoard);