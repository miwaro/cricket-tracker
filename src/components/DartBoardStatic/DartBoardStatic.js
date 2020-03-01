import React from 'react';
import DartBoardItem from './DartBoardItem/DartBoardItem';
import { connect } from 'react-redux';
import { resetBoard } from '../../store/actions/actions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './DartBoardStatic.module.css';
import PlayersBox from './PlayersBox/PlayersBox';

const labels = [
    { label: '20'},
    { label: '19'},
    { label: '18'},
    { label: '17'},
    { label: '16'},
    { label: '15'},
    { label: 'B'},
];

const DartBoardStatic = (props) => {
    
    const resetBoardHandler = () => {
        props.onResetBoard() && setOpen(false);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="Label-style">
        <PlayersBox />
        {labels.map(target => (
            <DartBoardItem
                key={target.label}
                label={target.label}
            />     
        ))}
        <div className={classes.newGame}>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                New Game
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to Start a New Game?"}</DialogTitle>
                
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    No
                </Button>
                <Button onClick={resetBoardHandler} color="primary" autoFocus>
                    Yes
                </Button>
                </DialogActions>
            </Dialog>     
        </div>
    </div>
    ) 
}
    


const mapDispatchToProps = dispatch => {
    return {
        onResetBoard: () => dispatch(resetBoard()),
    }
}

export default connect(null, mapDispatchToProps)(DartBoardStatic);