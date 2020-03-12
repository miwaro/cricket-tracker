import React from 'react';
import { connect } from 'react-redux';

import { resetBoard } from '../../../store/actions/actions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import classes from './AddPlayer/AddPlayer.module.css';

const ResetBoard = (props) => {
    
    const resetBoardHandler = () => {
        props.onResetBoard() && setOpen(false);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if (props.players.length === 0) { return; }
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className={classes.addPlayer}>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Reset Board
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to clear the board?"}</DialogTitle>
                
                <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    No
                </Button>
                <Button onClick={resetBoardHandler} color="primary" autoFocus>
                    Yes
                </Button>
                </DialogActions>
            </Dialog>     
        </div>
    ) 
}

const mapStateToProps = state => {
    return {
        players: state.players
    };
}
    
const mapDispatchToProps = dispatch => {
    return {
        onResetBoard: () => dispatch(resetBoard()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetBoard);