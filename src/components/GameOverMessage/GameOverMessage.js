import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './GameOverMessage.module.css';

const GameOverMessage = (props) => {
    
    const [open, setOpen] = useState(false);
    const [winningPlayerIndex, setWinnningPlayerIndex] = useState(-1);
    const [winningPlayerName, setWinnningPlayerName] = useState('');

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
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className={classes.newGame}>
            <Dialog
                disableBackdropClick={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    {`${winningPlayerName} hit all the targets!!!`}
                </DialogTitle>              
                <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Close
                </Button>
                </DialogActions>
            </Dialog>     
        </div>
    ) 
}

export default GameOverMessage;