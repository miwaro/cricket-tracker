import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { resetScores } from '../../store/actions/actions';
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

    const resetScoresHandler = () => {
        props.onResetScores() && setOpen(false);
    }

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
                    {`${winningPlayerName} has won the game! Do you wish to play a new game?`}
                </DialogTitle>
                
                <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    No
                </Button>
                <Button  onClick={resetScoresHandler} color="primary" autoFocus>
                    Yes
                </Button>
                </DialogActions>
            </Dialog>     
        </div>
    ) 
}

const mapDispatchToProps = dispatch => {
    return {
        onResetScores: () => dispatch(resetScores()),
    }
}

export default connect(null, mapDispatchToProps)(GameOverMessage);