import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './GameOverMessage.module.css';
import ConfettiExplosion from 'react-confetti-explosion';

const GameOverMessage = (props) => {

    const [open, setOpen] = useState(false);
    const [winningPlayerIndex, setWinnningPlayerIndex] = useState(-1);
    const [winningPlayerName, setWinnningPlayerName] = useState('');
    const [isExploding, setIsExploding] = useState(false);

    useSelector(state => {
        if (state.winningPlayerIndex > -1 && winningPlayerIndex === -1) {
            setWinnningPlayerIndex(state.winningPlayerIndex);

            const name = state.players[state.winningPlayerIndex].name;
            setWinnningPlayerName(name);

            handleOpen();

        } else if (state.winningPlayerIndex !== winningPlayerIndex) {
            setWinnningPlayerIndex(state.winningPlayerIndex);
        }
    });

    const handleOpen = () => {
        setIsExploding(true);
        setOpen(true);
    };

    const handleClose = () => {
        setIsExploding(false);
        setOpen(false);
    };

    return (
        <div className={classes.newGame}>
            {isExploding && <ConfettiExplosion floorHeight='2000' />}
            <Dialog
                // disableBackdropClick={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    {`${winningPlayerName} wins the game!! 🏆`}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" style={{ backgroundColor: 'rgb(219, 32, 32)' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default GameOverMessage;